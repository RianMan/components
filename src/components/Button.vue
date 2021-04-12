<template>
    <div>
        <button :class="type == 'Default'?'btn default':type == 'primary'?'btn primary':type == 'danger'?'btn danger':'btn default'" 
            @click="confirm"
        >
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    name:'judy-button',
    props:{
        type:{
            type:String,
            default:"Default"
        }
    },
    methods:{
        confirm(){
            this.$emit("confirm")
        }
    }
}
</script>
<style scoped>
     .btn{
        width: 100px;
        height: 40px;
        color:#fff;
        text-align: center;
        line-height:40px;
        border: none;
        cursor: pointer;
    }
    .default{
        background-color:rgb(26, 185, 87);
        box-shadow:0 7px 0 rgb(28, 158, 78), 0 8px 3px rgba(0, 0, 0, 0.3);
    }

    .primary{
        background: rgba(18, 117, 197);
        box-shadow: 0 7px 0 rgba(7, 48, 66, 0.829),0 8px 3px rgba(0, 0, 0, 0.3);
    }

    .danger{
        background: rgb(255, 20, 20);
    }

    .default:hover,.default:focus{
         background-color:rgba(26, 185, 87,0.6);
    }

    .primary:hover,.primary:focus{
        background: rgba(18, 117, 197, 0.75);
        
    }
</style>
