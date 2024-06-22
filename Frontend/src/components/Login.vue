<template>
    <div class="mx-auto flex w-screen max-w-sm flex-col gap-6 mt-20">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl font-semibold">Sign In</h1>
            <p class="text-sm">Sign in to access your account</p>
        </div>
        <div class="form-group">
            <div class="form-field">
                <label class="form-label">Email address</label>
                <input placeholder="Type here" type="email" class="input max-w-full" v-model="email"/>
                <label class="form-label">
                    <span class="form-label-alt">Please enter a valid email.</span>
                </label>
            </div>
            <div class="form-field">
                <label class="form-label">Password</label>
                <div class="form-control">
                    <input placeholder="Type here" type="password" class="input max-w-full" v-model="password"/>
                </div>
            </div>
            <div class="form-field">
                <div class="form-control justify-between">
                    <div class="flex gap-2">
                        <input type="checkbox" class="checkbox" />
                        <a href="#">Remember me</a>
                    </div>
                    <label class="form-label">
                        <a class="link link-underline-hover link-primary text-sm">Forgot your password?</a>
                    </label>
                </div>
            </div>
            <div class="form-field pt-5">
                <div class="form-control justify-between">
                    <button type="button" class="btn btn-primary w-full" @click="login">Sign in</button>
                </div>
            </div>
            <div class="form-field">
                <div class="form-control justify-center">
                    <a class="link link-underline-hover link-primary text-sm">Don't have an account yet? Sign up.</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://localhost:3000/login', {
                    email: this.email,
                    password: this.password
                });
                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    this.$router.push('/');
                } else {
                    alert('Invalid credentials');
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred during login');
            }
        }
    }
};
</script>

<style scoped>
/* Your styles here */
</style>
