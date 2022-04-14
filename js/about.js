function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const coreText = {
    0: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
};

new Vue({
    el: "#app",
    data() {
        return {
            coreCount: 5,
            currentKey: 0,
            isTransforming: false,
            coreText
        };
    },
    methods: {
        async handleSlider(key) {
            if (key === this.currentKey) return;
            this.isTransforming = true;
            await delay(400);
            this.isTransforming = false;
            if (key < 0) {
                this.currentKey = this.coreCount - 1;
            } else if (key >= this.coreCount) {
                this.currentKey = 0;
            } else {
                this.currentKey = key;
            }
        },
        goPrev() {
            this.handleSlider(this.currentKey - 1);
        },
        goNext() {
            this.handleSlider(this.currentKey + 1);
        }
    }
});
