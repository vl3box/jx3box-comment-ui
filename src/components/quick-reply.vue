<template>
    <div class="c-jx3box-reply">
        <el-popover
            :visible-arrow="true"
            placement="top"
            ref="quickReply"
            trigger="click"
            popper-class="c-jx3box-reply-pop"
        >
            <div class="c-jx3box-reply-pop__content">
                <i class="el-icon-close u-close" @click="closePop"></i>
                <div class="u-title">{{ $t('快捷回复') }}</div>
                <div class="m-reply-list">
                    <div
                        class="m-reply-list__item"
                        v-for="(item, index) in replyTemplate"
                        :key="index"
                        @click="reply(item)"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
            <img
                slot="reference"
                class="u-reference"
                width="24"
                height="24"
                src="../assets/img/comment.svg"
                alt="comment"
            />
        </el-popover>
    </div>
</template>

<script>
import replyTemplate from "../assets/data/reply_template.json";
export default {
    name: "QuickReply",
    data() {
        return {
            replyTemplate,
        };
    },
    emits: ["reply"],
    methods: {
        // 关闭弹窗
        closePop() {
            if (this.$refs.quickReply) {
                this.$refs.quickReply.doClose();
            }
        },
        reply(item) {
            this.$emit("reply", item);
            this.closePop();
        },
    }
};
</script>

<style lang="less">
@import "../assets/css/quick-reply.less";
</style>
