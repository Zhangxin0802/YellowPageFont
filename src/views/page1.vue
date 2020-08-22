<template xmlns:el-tree="http://www.w3.org/1999/html">
    <div class="container">
        <div class="head">
            <div class="menu-left">
                <ul>
                    <i class="el-icon-orange"></i>
                    <a>
                        <li>part 1</li>
                    </a>
                    <a>
                        <li>part 1</li>
                    </a>
                    <a>
                        <li>part 1</li>
                    </a>
                </ul>
            </div>

        </div>
        <div class="main">
            <!--            <div class="aside">-->
            <!--                <el-tree :data="data"-->
            <!--                         :props="defaultProps"-->
            <!--                         accordion-->
            <!--                         @node-click="handleNodeClick" class="tree">-->
            <!--                </el-tree>-->
            <!--            </div>-->
            <div class="search">
                <el-input prefix-icon="el-icon-search" placeholder="请输入内容" v-model="msg" @keyup.enter.native="jump">
                    <!--                          @input="change($event)">-->
<!--                    <el-button @click="jump">搜索<i class="el-icon-search"></i></el-button>-->
                    <el-button slot="append" icon="el-icon-search" @click="jump"></el-button>
                </el-input>
                <!--                <h1>{{$store.state.name}}</h1>-->
            </div>
            <div>
                <ul>
                    <li v-for="(item,index) in InfoList" v-bind:key="index">
                        <span>{{item.enName}}</span>
                        <span v-if="item.cnName">{{item.cnName}}</span>
                        <span v-if="item.abbreviation">{{item.abbreviation}}</span>
                        <p></p>
                        <span>{{item.content}}</span>
                        <p></p>
                        <ul>
                            <li v-for="(it,index) in item.literatureList" v-bind:key="index">
                                <span>{{it.author}}</span>
                                <p></p>
                                <span>{{it.bookName}}</span>
                                <p></p>
                                <span>{{it.url}}</span>
                            </li>
                        </ul>
                        <!--                        <span>{{item.literatureList.url}}</span>-->
                    </li>
                </ul>
            </div>
            <!--            <div>-->
            <!--                <ul>-->
            <!--                    <li>{{message}}</li>-->
            <!--                </ul>-->
            <!--            </div>-->

        </div>

    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                data: [
                    {
                        label: '一级 1',
                        children: [{
                            label: '二级 1-1',
                            children: [{
                                label: '三级 1-1-1'
                            }]
                        }]
                    }, {
                        label: '一级 2',
                        children: [{
                            label: '二级 2-1',
                            children: [{
                                label: '三级 2-1-1'
                            }]
                        }, {
                            label: '二级 2-2',
                            children: [{
                                label: '三级 2-2-1'
                            }]
                        }]
                    }, {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        }, {
                            label: '二级 3-2',
                            children: [{
                                label: '三级 3-2-1'
                            }]
                        }]
                    }
                ],
                msg: '',
                InfoList: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            // get() {
            //     // this.message = this.msg;
            //     alert(this.msg);
            // },
            // eslint-disable-next-line no-unused-vars
            handleNodeClick(data) {
                // console.log(data);
                let url = "http://182.92.123.213:7070/search/java/0/1";
                axios.get(url)
                // eslint-disable-next-line no-unused-vars
                    .then(res => {
                        // console.log(res);
                        // this.message=res.data[0];
                    }).catch(err => console.log(err));
            },
            // change(e) {
            //     this.$forceUpdate(e);
            // },
            jump() {
                // var thisy+ = this;
                console.log("before push");
                // this.$router.push({path: "ShowInfo", name: "ShowInfo"})
                let url = "http://182.92.123.213:7070/search/" + this.msg + "/0/1";
                console.log(url);
                // +"java/0/1";
                axios.get(url)
                    .then(res => {
                        console.log(res);
                        this.InfoList = res.data;
                        console.log(this.InfoList);
                        // this.InfoList.push(this.InfoList.literatureList);
                        this.$store.commit('change', this.InfoList);
                        this.$router.push({path: "ShowInfo", name: "ShowInfo"})
                        // console.log(this.InfoList.literatureList);
                        // this.$store.commit('changeLi',this.InfoList.literatureList);
                        // this.message=res.data[0];
                    }).catch(err => console.log(err));
            },

        }
    };
</script>

<style scoped>
    /** {*/
    /*    color: #0d1c25;*/
    /*}*/
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
        text-align: center;
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

    ul {
        list-style-type: none;
    }

    li {
        display: inline;
        margin: 20px;
    }

    .menu-left {
        float: left;
    }

    .menu-right {
        float: right;
    }

    .search {
        margin: 0 auto;
        /*position: relative;*/
        width: 50%;
        padding-top: 200px;
        /*display: inline;*/
        /*position: center;*/
        /*top: 50%;*/
        /*transform: translateY(-50%);*/
        /*align-items: center;*/
    }

    .aside {
        /*background-color: #42b983;*/
        /*background-color: aliceblue;*/
        background-color: aliceblue;
        /*color: black;*/
        /*margin-top: 0;*/
        padding-top: 0px;
        height: auto;
        width: 200px;

    }

    .tree {
        color: black;
        /*margin-top: 0;*/
        /*background-color: #0b2838;*/
    }

    /*.tree:hover{*/
    /*    !*background-color: #2c3e50;*!*/
    /*    !*background-color: #0b2838;*!*/
    /*    color: black;*/
    /*}*/
    .main {
        /*background-color: red;*/
        /*height: 30px;*/
        /*padding-bottom: 200px;*/
        /*position: fixed;*/
        /*top:300px;*/
        /*margin-top: 0;*/
        background-color: aliceblue;
        height: 100%;
        /*background-position: 50%;*/
        background-size: 100%;
    }
</style>
