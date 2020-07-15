//入口函数
$(function () {
    //1.全选按钮模块
    //全选按钮发生改变事件
    $('.checkall').change(function () {
        //将小复选框的状态和另一个全选按钮的固有属性checked的值由当前点击的全选按钮决定 prop()改变固有属性
        $('.p-checkbox .j-checkbox, .checkall').prop('checked', $(this).prop('checked'));
        // 如果选中给cart - item 添加类名check - cart - item
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
        //调用总计算函数
        // getSum();

    })
    //2.小复选框模块
    //当小复选框选中的数量等于小复选框的个数,全选按钮选中,否则不选中
    $('.j-checkbox').change(function () {
        //$('.j-checkbox:checked').length 小复选框选中的个数
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            //全选按钮选中状态
            $('.checkall').prop('checked', true);
        } else {
            //全选按钮取消选中
            $('.checkall').prop('checked', false);
        }
        //如果选中给cart-item 添加类名check-cart-item
        if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
        //调用总计算函数
        // getSum();
    })

    //3.增减商品数量
    $('.increment').click(function () {
        //设置变量接受内容
        var num = $(this).siblings('.itxt').val();
        num++;
        //将新数值赋值给文本框
        $(this).siblings('.itxt').val(num);

        //计算商品小计
        var price = $(this).parents('.p-num').siblings('.p-price').text();
        price = price.substr(1)
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (num * price).toFixed(2));
        //调用总计算函数
        // getSum();
    })
    $('.decrement').click(function () {
        //设置变量接受内容
        var num = $(this).siblings('.itxt').val();
        //return 跳出函数不执行下面的代码
        if (num == 1) {
            return;
        }
        num--;
        //将新数值赋值给文本框
        $(this).siblings('.itxt').val(num);

        //计算商品小计                   
        var price = $(this).parents('.p-num').siblings('.p-price').text();
        price = price.substr(1)
        //toFixed返回值是字符串
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (num * price).toFixed(2));
        //调用总计算函数
        // getSum();
    })

    //4.修改文本框的值计算价格
    $('.itxt').keyup(function () {
        //如果文本框没有输入值,赋值为1
        if ($(this).val().trim() == '') {
            $(this).val(1);
        }
        //计算商品小计            
        var num = $(this).val();
        var price = $(this).parents('.p-num').siblings('.p-price').text();
        price = price.substr(1)
        //toFixed返回值是字符串
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (num * price).toFixed(2));
        //调用总计算函数
        getSum();
    })
    //页面一刷新调用总计算函数
    getSum();

    //5.总计和总价格模块
    function getSum() {
        var count = 0;
        var money = 0;
        //计算总数量
        //遍历得到的文本框
        $('.itxt').each(function (index, item) {
            //判断复选框是否选中,选中后再相加
            if ($(item).parents('.cart-item').find('.j-checkbox').prop('checked')) {
                count += +$(item).val();
            }
        })
        //将数值赋值给总计
        $('.amount-sum em').text(count);

        //计算总价格
        $('.p-sum').each(function (index, item) {
            //判断复选框是否选中,选中后再相加
            if ($(item).parents('.cart-item').find('.j-checkbox').prop('checked')) {
                money += +$(item).text().substr(1);
            }
        })
        //将数值赋值给总价格
        $('.price-sum em').text('￥' + money.toFixed(2));
    }
    getSum();
})

$('.p-sum').each(function (index, item) {
    //$('.p-sum')得到的是伪数组的元素集合
    //.each(function(index,item))是遍历得到每个元素的集合
    // index是得到伪数组的索引
    // item是遍历的每个元素
    //语法就是这样不用想太多,想多了是想不明白的

});