<template>
    <transition name="fade">
        <v-content>
            <br id="background"/><br/><br/><br/>
            <section v-if="showMainSection">
                <v-container grid-list-xl>
                    <h1 class="text-xs-center display-3">Adopt A Cell</h1>
                    <br/><br/>
                    <v-layout align-center justify-space-around row wrap>
                        <v-card v-for="donator in donatorData" :id="'donatorCard' + donator.id" :key="donator.id" class="elevation-0 transparent" @click="switchEdit(donator.id)">
                            <div v-if="donator.exist">
                            </div>
                            <div v-else>
                                <img class="donatorCard" src="@/assets/hr-solar-panel.png"/>
                            </div>
                        </v-card>
                    </v-layout>
                </v-container>
            </section>
            <section v-else>
                <v-form style="margin: 15vw; margin-top: 5vw" v-model="formValid">
                    <h1 class="display-3">Adopt A Cell</h1>
                    <br/><br/>
                    <v-text-field v-model="donatorInfo.name" label="Name" :rules="[v => !!v || 'Name is required']"/>
                    <v-text-field v-model="donatorInfo.email" label="Email" :rules="[v => !!v || 'Email is required', v => EMAIL_REGEX.test(v) || 'Email must be valid']"/>
                    <br/><br/>
                    <h1 class="display-2">Photo:</h1>
                    <br/><br/>
                    <file-pond ref="pond" label-idle="Drop photos here..." accepted-file-types="image/jpeg, image/png" imageResizeTargetWidth="100px" imageResizeTargetHeight="100px" imageResizeMode="force" style="width: 70vw" :files="donatorInfo.photo"/>
                    <br/><br/>
                    <h1 class="display-2">Credit Card:</h1>
                    <br/><br/>
                    <card v-model="donatorInfo.cardDetail"/>
                    <br/><br/>
                    <v-text-field name="number" :rules="[v => !!v || 'Card number is required']" label="Card number" type="tel" v-model="donatorInfo.cardDetail.number"/>
                    <v-text-field name="name" :rules="[v => !!v || 'Name is required']" label="Full name" type="text" v-model="donatorInfo.cardDetail.name"/>
                    <v-text-field name="expiry" :rules="[v => !!v || 'Expiry date is required']" label="MM/YY" type="tel" v-model="donatorInfo.cardDetail.expiry"/>
                    <v-text-field name="cvc" :rules="[v => !!v || 'CVC is required']" label="CVC" type="number" v-model="donatorInfo.cardDetail.cvc"/>
                    <br/><br/>
                    <v-layout align-center justify-end row>
                        <span class="red--text">{{errorMsg}}</span>
                        <v-spacer/>
                        <v-btn @click="switchView">Back</v-btn>
                        <v-btn @click="submit">Submit</v-btn>
                    </v-layout>
                </v-form>
            </section>
        </v-content>
    </transition>
</template>

<script>
import Vue from 'vue';
import vueFilePond from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import Card from "vue-credit-card";

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginImageResize);

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
    name: "SupportPage",
    props: {
        donatorData: Array
    },
    data: () => {
        return {
            showMainSection: true,
            currentEdit: "background",
            currentCell: -1,
            donatorInfo: {
                name: "",
                email: "",
                phoneNumber: "",
                photo: [],
                cardDetail: {
                    number: "",
                    name: "",
                    expiry: "",
                    cvc: ""
                }
            },
            errorMsg: "",
            formValid: false,
            EMAIL_REGEX: EMAIL_REGEX
        };
    },
    methods: {
        switchEdit(cardNumber) {
            this.currentEdit = "donatorCard" + cardNumber;
            this.$scrollTo("#background");
            this.showMainSection = false;
            this.currentCell = cardNumber;
        },
        switchView() {
            this.showMainSection = true;
            let page = this;
            this.currentCell = -1;
            Vue.nextTick(() => {
                page.$scrollTo("#" + page.currentEdit, 500, {offset: -200});
                page.currentEdit = "background";
            });
        },
        submit() {
            if (this.formValid)
                if (this.photo)
                    this.switchView();
                else
                    this.errorMsg = "No photo";
            else
                this.errorMsg = "form invalid";
        }
    },
    components: {
        FilePond,
        Card
    }
}
</script>

<style scoped>
.donatorCard {
    transition: transform .2s;
}

.donatorCard:hover {
    transform: scale(1.5);
}

.filepond--file-action-button {
    cursor: pointer;
}
</style>
