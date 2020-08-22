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
                                <!--                                <el-collapse-item title="反馈 Feedback" name="2">-->
                                <!--                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>-->
                                <!--                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>-->
                                <!--                                </el-collapse-item>-->
                                <!--                                <el-collapse-item title="效率 Efficiency" name="3">-->
                                <!--                                    <div>简化流程：设计简洁直观的操作流程；</div>-->
                                <!--                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>-->
                                <!--                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>-->
                                <!--                                </el-collapse-item>-->
                                <!--                                <el-collapse-item title="可控 Controllability" name="4">-->
                                <!--                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>-->
                                <!--                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>-->
                                <!--                                </el-collapse-item>-->
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
