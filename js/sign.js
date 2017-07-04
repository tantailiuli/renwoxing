 $(function () {
    //注册
    $("#register-form-signup").bootstrapValidator({
        submitHandler: function (valiadtor, loginForm, submitButton) {
            valiadtor.defaultSubmit();
        },
        feedbackIcons: {
             valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    regexp:{
                        regexp:/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[013678])|(18[0-9]))\d{8}$/,
                        message:"请输入合法的手机号"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '密码长度必须在6到30之间'
                    },
                    different: {
                        field: 'loginName',
                        message: '不能和用户名相同'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '密码由数字字母下划线和.组成'
                    }
                }
            },
            repassword: {
                message: '密码无效',
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名长度必须在6到30之间'
                    },
                    identical: {
                        field: 'password',
                        message: '两次密码不一致'
                    },
                    different: {
                        field: 'loginName',
                        message: '不能和用户名相同'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '密码由数字字母下划线和.组成'
                    }
                }
            },
            checkbox: {
                validators: {
                    notEmpty: {
                        message: '请同意条款'
                    }
                }
            }
        }
    });
    //登录
    $("#register-form-signin").bootstrapValidator({
        submitHandler: function (valiadtor, loginForm, submitButton) {
            valiadtor.defaultSubmit();
        },
        feedbackIcons: {
             valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    regexp:{
                        regexp:/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[013678])|(18[0-9]))\d{8}$/,
                        message:"请输入合法的手机号"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '密码长度必须在6到30之间'
                    },
                    different: {
                        field: 'loginName',
                        message: '不能和用户名相同'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '密码由数字字母下划线和.组成'
                    }
                }
            },
            checkbox: {
                validators: {
                    notEmpty: {
                        message: '请同意条款'
                    }
                }
            }
        }
    });
    //找回密码
    $("#register-form-signforget").bootstrapValidator({
        submitHandler: function (valiadtor, loginForm, submitButton) {
            valiadtor.defaultSubmit();
        },
        feedbackIcons: {
             valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    regexp:{
                        regexp:/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[013678])|(18[0-9]))\d{8}$/,
                        message:"请输入合法的手机号"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '密码长度必须在6到30之间'
                    },
                    different: {
                        field: 'loginName',
                        message: '不能和用户名相同'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '密码由数字字母下划线和.组成'
                    }
                }
            },
            repassword: {
                message: '密码无效',
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名长度必须在6到30之间'
                    },
                    identical: {
                        field: 'password',
                        message: '两次密码不一致'
                    },
                    different: {
                        field: 'loginName',
                        message: '不能和用户名相同'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '密码由数字字母下划线和.组成'
                    }
                }
            }
        }
    });

    //其他
    var $choosep = $(".sign_box .sign form .form-group.bottom div.div2 p");
    $("span.span1",$choosep).click(function(){
        $("i",$choosep).attr("class","")
    })
    $("span.span2",$choosep).click(function(){
        $("i",$choosep).attr("class","right")
    })
});
