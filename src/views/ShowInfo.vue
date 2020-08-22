<template>
    <div class="container">
        <!--        <div class="head">-->
        <!--            <div class="head-left">-->
        <!--                <span>{{getName}}</span>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--        <div style="border-top:1px dotted black;"></div>-->
        <div class="head">
            <div class="menu-left">
                <ul>
                    <i class="el-icon-orange"></i>
                    <a>
                        <li style="display: inline;padding-left: 20px">part 1</li>
                    </a>
                </ul>
            </div>

        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in this.$store.state.value" v-bind:key="index">
                    <!--                    <span>{{item.abbreviation}}</span>-->
                    <!--                    <span>{{item.cnName}}</span>-->
                    <!--                    <span style="font-size: 30px">{{item.enName}}</span>-->
                    <span style="font-size: 30px">{{item.enName}}</span>
                    <p></p>
                    <span v-if="item.cnName">中文：{{item.cnName}}      </span>
                    <span v-if="item.abbreviation">缩写：{{item.abbreviation}}</span>
                    <div style="border-top:1px dotted black;"></div>
                    <p></p>
                    <ul>
                        <li>
                            <h3>概述</h3>
                            <span>{{item.content}}</span>
                            <p></p>
                        </li>
                    </ul>
                    <el-collapse accordion>
                        <ul>
                            <li v-for="(it,index) in item.literatureList" v-bind:key="index">
                                <!--                            <el-dropdown>-->
                                <!--&lt;!&ndash;                                <el-card style="width: 1520px">&ndash;&gt;-->
                                <!--                                {{it.bookName}}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                                <!--&lt;!&ndash;                                </el-card>&ndash;&gt;-->
                                <!--                            </el-dropdown>-->
                                <!--                            <h3>作者</h3>-->
                                <!--                            <span>{{it.author}}</span>-->
                                <!--                            <p></p>-->
                                <!--                            <h3>书名</h3>-->
                                <!--                            <span>{{it.bookName}}</span>-->
                                <!--                            <p></p>-->
                                <!--                            <h3>来源</h3>-->
                                <!--                            <el-link href=it.url>{{it.url}}</el-link>-->
                                <!--                            <span>{{it.url}}</span>-->

                                <el-collapse-item>
                                    <template slot="title">
                                        {{it.bookName}}<i class="header-icon el-icon-info"></i>
                                    </template>
                                    <div>作者：{{it.author}}</div>
                                    <div>来源：
                                        <!--                                        {{it.url}}-->
                                        <el-link href=it.url>{{it.url}}</el-link>
                                    </div>
                                </el-collapse-item>
                            </li>
                        </ul>
                    </el-collapse>

                </li>
            </ul>
        </div>
    </div>
    <!--    <h1>1111</h1>-->
</template>

<script>
    export default {
        name: "ShowInfo",
        data() {
            return {
                enMsg: '',
                address: ''
            }
        },
        computed: {
            getName() {
                // return this.$store.state.cnName;
                return this.$store.state.value.enName;
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }

    .container {
        /*font-family: Consolas;*/

        /*margin-left: auto;*/
        /*margin-right: auto;*/
        /*max-width: 120px;*/
        width: 1520px;
        height: 1520px;
        margin: 0;
        padding: 0;
        border-radius: 4px;
        text-align: left;
        color: #0d1c25;
        /*padding-bottom: 0px;*/
    }

    .head {
        background-color: #0d1c25;
        /*height: 20px;*/
        width: 1520px;
        /*float: left;*/
        display: flex;
        height: 70px;
        align-items: center;
        color: antiquewhite;
        /*float: left;*/
    }

    .head-left {
        float: left;
        color: #0d1c25;
        font-size: 30px;
        background-color: aliceblue;
    }
    .content {

    }
</style>
