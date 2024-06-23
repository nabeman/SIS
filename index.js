const { createApp } = Vue;

createApp({
    data(){
        return{
            message: 'Hello Vue!',
            title: "ABOUT",
            normal1: "このページはSISの最終課題で作成したサイトです.",
            normal2: "色々な要素が黄金比になるようにしました.",
            normal3: "よろしくお願いします.",
        }
    },
    methods:{
        About(){
            this.title = "ABOUT";
            this.normal1 = "このページはSISの最終課題で作成したサイトです.";
            this.normal2 = "色々な要素が黄金比になるようにしました.";
            this.normal3 = "よろしくお願いします.";
        },
        Works(){
            this.title = "WORKS";
            this.normal1 = "ページのレイアウトや文字のサイズが黄金比になっています."
            this.normal2 = "写真の構図や名前が書いてある部分の余白も黄金比に近いです."
            this.normal3 = "開発者ツールでページの縦横サイズを1600×1000に設定してください."
        },
        Contact(){
            this.title = "CONTACT";
            this.normal1 = "連絡先はooooo@ooo.comです"
            this.normal2 = "これはダミーアドレスです"
            this.normal3 = "よろしくお願いします"
        }
    },
}).mount('#main')