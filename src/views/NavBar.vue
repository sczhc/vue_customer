<template>
<div class="nav">
    <el-container>
        <el-main>
            <div class="logo" @click="$outer.push('home')">
                <img src="@/assets/img/logo.png" alt="logo">
            </div>
            <div class="search"></div>
            <div class="navbar">
                <ul>
                    <li v-for="(item,index) in menu" @click="handleClickMenu(item)" :key="`menu_${index}`">{{item.title}}</li>
                </ul>
            </div>
        </el-main>
    </el-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            menu: [{
                    title: "Hot Deal",
                    path: 'preferential'
                },
                {
                    title: "New Arrival",
                    path: 'preferential'
                }, {
                    title: "Discount Item",
                    path: 'preferential'
                }, {
                    title: "Apply Merchant’s Credit",
                    path: 'account'
                },
                {
                    title: "Help",
                    path: 'help'
                }
            ]
        }
    },
    methods: {
        handleClickMenu(item) {
            this.$router.push(item.path)
        }
    }
}
</script>
