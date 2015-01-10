$(document).ready(function()
{
    formerror = "Please fix the errors with the form.";
    emptyerror = " is a mandatory field.";
    lengtherror = " requires a minimum of three characters.";
    emailerror = "Please enter a valid email address.";
    dateerror = " requires dates in the format 00/00/0000.";
    posterror = "Post code requires input in the format AA00 0AA.";
    phoneerror = "Phone number entered is invalid.";
    passworderror = "Password required a minimum of six characters.";
    passwordverror = "Password requires at least one numeric character";
    passwordaerror = "Password requires at least one alpha character character";
    passwordcerror = "Passwords entered do not match.";
    passworduerror = "Password must not match username.";
    checkerror = "This checkbox is a mandatory field.";
    radioerror = "This requires a selection, and is a mandatory field.";

    $(":input").blur(function() {
        errorNotice.fadeOut(0);
        errorNotice.text('');

        if ($.inArray($(this).attr("id"), requiredFields) >= 0) {
            if (($(this).val() == '') || ($(this).val() == emptyerror)) {
                $(this).parent().addClass("error");
                errorNotice.addClass('error');
                errorNotice.append(ucwords($(this).attr("id")) + emptyerror);
                errorNotice.fadeIn(750);
            } else {
                if ($(this).val().length >= 3) {
                    if ($(this).attr("id") == "email") {
                        if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())) {
                            $(this).parent().addClass("error");
                            errorNotice.addClass('error');
                            errorNotice.append(emailerror);
                            errorNotice.fadeIn(750);
                        }
                    }

                    if ($(this).attr("id") == "dob" || $(this).attr("id") == "date") {
                        if (!$(this).val().match(/^\d\d?\/\d\d?\/\d\d\d\d$/)) {
                            $(this).parent().addClass("error");
                            errorNotice.addClass('error');
                            errorNotice.append(ucwords($(this).attr("id")) + dateerror);
                            errorNotice.fadeIn(750);
                        }
                    }

                    if ($(this).attr("id") == "phone") {
                        if (!/^0\d{2,4}[ -][\d -]{6,9}$/.test($(this).val())) {
                            $(this).parent().addClass("error");
                            errorNotice.addClass('error');
                            errorNotice.append(ucwords($(this).attr("id")) + phoneerror);
                            errorNotice.fadeIn(750);
                        }
                    }

                    if ($(this).attr("id") == "postcode") {
                        if (!$(this).val().match(/^([1-9]\d{3}\s[A-Z]{2})$/)) {
                            $(this).parent().addClass("error");
                            errorNotice.addClass('error');
                            errorNotice.append(ucwords($(this).attr("id")) + posterror);
                            errorNotice.fadeIn(750);
                        }
                    }

                    if ($(this).attr("id") == "password") {
                        if ($(this).val().length <= 7) {
                            $(this).parent().addClass("error");
                            errorNotice.addClass('error');
                            errorNotice.append(passworderror);
                            errorNotice.fadeIn(750);
                        } else {
                            if (!$(this).val().match(/(.*[0-9])/)) {
                                $(this).parent().addClass("error");
                                errorNotice.addClass('error');
                                errorNotice.append(passwordverror);
                                errorNotice.fadeIn(750);
                            } else {
                                if (!$(this).val().match(/([a-zA-Z])/)) {
                                    $(this).parent().addClass("error");
                                    errorNotice.addClass('error');
                                    errorNotice.append(passwordaerror);
                                    errorNotice.fadeIn(750);
                                } else {
                                    if ($("#passwordcheck").val() != '' && $(this).val() != $("#passwordcheck").val()) {
                                        $(this).parent().addClass("error");
                                        $("#passwordcheck").parent().addClass("error");
                                        errorNotice.addClass('error');
                                        errorNotice.append(passwordcerror);
                                        errorNotice.fadeIn(750);
                                    } else {
                                        if ($.inArray($(this).attr("id"), "username") >= 0 && $(this).val() == $("#username").val()) {
                                            $(this).parent().addClass("error");
                                            $("#username").parent().addClass("error");
                                            errorNotice.addClass('error');
                                            errorNotice.append(passworduerror);
                                            errorNotice.fadeIn(750);
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if ($(this).attr("id") == "passwordcheck") {
                        if ($(this).val() != $("#password").val()) {
                            $(this).parent().addClass("error");
                            $("#password").parent().addClass("error");
                            errorNotice.addClass('error');
                            errorNotice.append(passwordcerror);
                            errorNotice.fadeIn(750);
                        }
                    }

                    if (!$(this).parent().hasClass("error")) {
                        $(this).parent().addClass("success");
                    }
                } else {
                    $(this).parent().addClass("error");
                    errorNotice.addClass('error');
                    errorNotice.append(ucwords($(this).attr("id")) + lengtherror);
                    errorNotice.fadeIn(750);
                }
            }
        }

        if ($(this).attr("id") == "terms") {
            if (!$(this).attr('checked')) {
                $(this).parent().parent().addClass("error");
                $(this).parent().removeClass("error");
                $(this).parent().removeClass("success");
                errorNotice.addClass('error');
                errorNotice.append(ucwords($(this).attr("id")) + checkerror);
                errorNotice.fadeIn(750);
            }

            if (!$(this).parent().parent().hasClass("error")) {
                $(this).parent().parent().addClass("success");
            }
        }

        if ($(this).attr("type") == "radio") {
            var name = $(this).attr("name");
            $("input[name=" + name + "]").removeAttr("selected");
            $(this).attr("selected","selected");
            var num = ($("input[name=" + name + "]").length - 1);
            var isSelected;

            for (i = 0; i <= num; i ++) {
                var empty;
                var id = '';
                var buttons = $("#" + name + "_" + i);

                buttons.each(function()
                {
                    var me = $(this);
                    var isSelected = me.attr("selected");
                });
            }

            if (isSelected != empty && isSelected != '') {
                $(this).parent().parent().addClass("error");
                errorNotice.addClass('error');
                errorNotice.append(ucwords($(this).attr("id")) + radioerror);
                errorNotice.fadeIn(750);
            } else {
                $(this).parent().parent().addClass("success");
            }
        }
    });

    $(":input").focus(function()
    {
        if ($(this).parent().hasClass("error") ) {
            $(this).parent().removeClass("error");
        }

        if ($(this).parent().parent().hasClass("error") ) {
            $(this).parent().parent().removeClass("error");
        }
    });

    $(":input").change(function()
    {
        $(this).parent().removeClass("success");
        $(this).parent().parent().removeClass("success");
    });

    $(":input[type='reset']").click(function()
    {
        errorNotice.fadeOut(0);
        errorNotice.text('');
        $("form").find(':input').each(function() {
            $(this).parent().removeClass("success");
            $(this).parent().removeClass("error");
        });
    });

    function ucwords(str) {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    $("form").submit(function() {
        if (errorNotice.text() != '') {
            errorNotice.fadeOut(0);
            errorNotice.text('');
            errorNotice.removeClass('success').addClass('error');
            errorNotice.append(formerror);
            errorNotice.fadeIn(750);
            return false;
        }
        $("form").find(':input').each(function()
        {
            if ($(this).val() == '') {
                errorNotice.fadeOut(0);
                errorNotice.text('');
                errorNotice.removeClass('success').addClass('error');
                errorNotice.append(formerror);
                errorNotice.fadeIn(750);
                return false;
            }
        });

        $.ajax({
            type: 'POST',
            url: document.URL + 'lib/mailer.php',
            data: $("#contact").serialize(),
            success: function(data)
            {
                errorNotice.fadeOut(0);
                errorNotice.text('');
                errorNotice.removeClass('error').addClass('success');
                errorNotice.append('Your message has been sent successfully.');
                errorNotice.fadeIn(750);
                $("#contact").trigger('reset');
            }
        });

        return false;
    });
});
