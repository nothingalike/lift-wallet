<template>
  <v-container fluid>
    <v-row>
      <v-col sm="12" md="2">
        <v-sheet>
          <v-list nav>
            <v-list-item>
              <v-btn color="primary" block v-on:click="startNewWallet">{{
                $t("lang.wallet.add")
              }}</v-btn>
            </v-list-item>
            <v-list-item-group v-model="selectedWalletIndex" color="primary">
              <v-list-item
                v-for="(wallet, i) in wallets"
                :key="i"
                :disabled="i == selectedWalletIndex || addingWallet"
              >
                <v-list-item-title>
                  {{ wallet.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col sm="12" md="10">
        <v-sheet min-height="70vh" rounded="lg">
          <NoWallet v-if="!hasWallets && !addingWallet" />
          <AddWallet
            v-if="addingWallet"
            v-on:cancel-add="cancelAdd"
            v-on:added-wallet="newWalletAdded"
          />
          <WalletDetails
            v-if="hasWallets && !addingWallet"
            v-bind:focus="enableDetails"
            v-bind:walletId="selectedWalletId"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const { ipcRenderer } = require("electron");
import NoWallet from "./wallet/NoWallet";
import AddWallet from "./wallet/AddWallet";
import WalletDetails from "./wallet/WalletDetails";
import { mapGetters } from "vuex";
import * as walletTypes from "../store/wallet/types";

export default {
  name: "WalletPage",
  props: ["render"],
  components: {
    NoWallet,
    AddWallet,
    WalletDetails,
  },
  watch: {
    render: function (newVal, oldVal) {
      if (!oldVal && newVal) {
        this.getWallets();
      } else {
        this.addingWallet = false;
      }
    },
    selectedWalletIndex: function (newVal, oldVal) {
      if (newVal != undefined && oldVal != newVal) {
        this.selectedWalletId = this.wallets[newVal].name;
        console.log(newVal);
      }
    }
  },
  computed: {
    hasWallets: function () {
      // `this` points to the vm instance
      return this.wallets.length > 0;
    },
    enableDetails: function () {
      return this.render;
    },   
    ...mapGetters({
      wallet: walletTypes.NAMESPACE + walletTypes.WALLET,
    }),
  },
  data: () => ({
    selectedWalletIndex: null,
    selectedWalletId: null,
    wallets: [],
    newWallet: {
      name: "",
      mnemonic: "",
      passphrase: "",
    },
    newMnemonic: "",
    addingWallet: false,
    getWalletInterval: null,
  }),
  mounted() {
    this.getWallets();

    ipcRenderer.on("res:get-wallets", (_, args) => {
      console.log("wallets", args);
      this.wallets = args.wallets;
      if (this.wallets.length > 0 && !this.selectedWalletIndex) {
        this.selectedWalletIndex = 0;
        this.selectedWalletId = this.wallets[this.selectedWalletIndex].name;
      }
    });

    ipcRenderer.on("res:generate-recovery-phrase", (_, args) => {
      console.log("phrase", args);
      if (!args.error) this.newMnemonic = args.passphrase;
    });
  },
  methods: {
    addWallet: function () {},
    getWallets: function () {
      console.log("get wallets");
      ipcRenderer.send("req:get-wallets", { network: "testnet" });
    },
    getMnemonic: function () {
      ipcRenderer.send("req:generate-recovery-phrase");
    },
    startNewWallet: function () {
      this.addingWallet = true;
    },
    cancelAdd: function () {
      this.addingWallet = false;
    },
    newWalletAdded() {
      if (this.wallet != null) {
        console.log("new added wallet", this.wallet);
        this.wallets.push(this.wallet);
        console.log("wallets totals", this.wallets);
        this.addingWallet = false;
        this.selectedWalletIndex = this.wallets.length - 1;
        this.wallet = null;
      }
    },
  },
};
</script>

<style scoped></style>
