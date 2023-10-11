new Vue({
    el: '#app',
    data: () => ({
        activeOne: false,
        activeTwo: false,
        activeThree: false,
        activeFour: false,
        imageSrcFirst: 'img/dice_motion.gif',
        imageSrcSecond: 'img/dice_motion.gif',
        imageSrcThird: 'img/dice_motion.gif',
        resultMessage: 'サイコロを振ってください...',
        buttonMessage: 'サイコロを振る'
    }),
    methods: {
        onClickTitle(n) {
            this.activeOne = this.activeTwo = this.activeThree = this.activeFour = false;
            switch (n) {
                case 'one':
                    this.activeOne = !this.activeOne;
                    break;
                case 'two':
                    this.activeTwo = !this.activeTwo;
                    break;
                case 'three':
                    this.activeThree = !this.activeThree;
                    break;
                case 'four':
                    this.activeFour = !this.activeFour;
                    break;
            }
        },
        rollDice() {
            var nums = [this.getRandomDice(), this.getRandomDice(), this.getRandomDice()];
            nums.sort();
            this.imageSrcFirst = this.getDiceImage(nums[0]);
            this.imageSrcSecond = this.getDiceImage(nums[1]);
            this.imageSrcThird = this.getDiceImage(nums[2]);
            this.resultMessage = this.getResultMessage(nums);
            this.buttonMessage = "もう一度振る";
        },
        getRandomDice() {
            return Math.floor(Math.random() * 6) + 1;
        },
        getDiceImage(num) {
            switch (num) {
                case 1:
                    return 'img/dice_one.png';
                case 2:
                    return 'img/dice_two.png';
                case 3:
                    return 'img/dice_three.png';
                case 4:
                    return 'img/dice_four.png';
                case 5:
                    return 'img/dice_five.png';
                case 6:
                    return 'img/dice_six.png';
            }
        },
        getResultMessage(nums) {
            if (nums[0] === 1 && nums[1] === 1 && nums[2] === 1) {
                return 'ピンゾロ';
            }
            if (nums.every(x => x === nums[0])) {
                return nums[0] + 'ゾロ';
            }
            if (nums[0] === 4 && nums[1] === 5 && nums[2] === 6) {
                return 'シゴロ';
            }
            if (nums.filter(x => x == nums[0]).length === 2) {
                return "出目：" + nums[2];
            }
            if (nums.filter(x => x == nums[1]).length === 2) {
                return "出目：" + nums[0];
            }
            if (nums[0] === 1 && nums[1] === 2 && nums[2] === 3) {
                return 'ヒフミ';
            }
            return '役なし';
        }
    }
});