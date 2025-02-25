---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EAR4PPR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDj8l%2FIqS7NO4M2DdeUPA4qcX2KOKLM4%2BBJXglPwTiIQgIhAIFXTKuxFu%2Fo10BSsEvr7MOd1hj%2Fp5MnWIAk7omWAL1UKv8DCEEQABoMNjM3NDIzMTgzODA1IgyIq47U7aO8yC6buusq3APlIF3kfwuelmbuNih7Lldg%2F%2F9XwT1zT7tz1NR4KYFznn0saUGFn%2BjzlqANoobnuWCUpPCJB1fdEE%2BgnhphHkzvobXlyzNryTUfc%2B3dtWSeh3bxPnv20KdJcS3UNq1xaGa9sUIWaASvyDvhh3%2FKqDEIIyeT2F0V83rs4pE2fX1o4XT1Q%2BWv%2FtaYt4BDOmma6rB%2FI%2FETNbr9OW7HZJjKF%2FCMcViuVgTYoq%2FuPmUednX0TYgueM%2FJ3GjCb3hgFyp5KkjuwRhsXs1SYCLHr%2FBamqBLi6SOMAKYz7q0WXrRwW93kZNYcrmPxL%2BMNqrioLqYHvrztbObberZWcJs3Pp2Krc0nCKRiKfo3rSm1A%2Bh1SQFZQZmpCC%2FdY2%2B7nLSb05LcOrLLzYBiOmJYHOP22zrGiqWSvXP05QZm2ZoEKjY3h4%2B%2FACHTQQDAJoTkkdgfz3mLPG2cBnUQJ%2Fts2RSapZoqbtj4PbKVYFTFUn1fX6Jtt6Bj%2BuaQiTMr%2BKWKfkdeYXq3r7Ms6l14WOxMbSNRbIxGtlQitZsnYZRLREPP4oq6DXn32jSMUsBVGGBpvOrCDKHQacgWaOo6YyU2IMWBgdlsGeSUQ0icV2SaP9cgKQu73BoEWuPaBmPRG6Mrb9JfzDM6PW9BjqkAZMUSALAC8OoJv9OLmqy6rEmdN4%2FIN9gE5nUT5pTA6FrEe%2Bz075LG%2BB1qhdzJl52Les7MxslMQk4oMaRO8N7gdlZU7vuwXlD%2BcGLvk05YqJ4p9Fkola5VphXX2vuM5R74Qn3Uxm9sJlyLzS5C7FIHOiiNuszdm538iWntD40jQjIdS8R8tjouWKdqN8prPwIXLoI8Tt%2F4nFoLIasPDMJc7WTR2jm&X-Amz-Signature=8486a4721dc7a6f5c5abdff62ac30631da6d90855c0095f4013aef69df5f1fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EAR4PPR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDj8l%2FIqS7NO4M2DdeUPA4qcX2KOKLM4%2BBJXglPwTiIQgIhAIFXTKuxFu%2Fo10BSsEvr7MOd1hj%2Fp5MnWIAk7omWAL1UKv8DCEEQABoMNjM3NDIzMTgzODA1IgyIq47U7aO8yC6buusq3APlIF3kfwuelmbuNih7Lldg%2F%2F9XwT1zT7tz1NR4KYFznn0saUGFn%2BjzlqANoobnuWCUpPCJB1fdEE%2BgnhphHkzvobXlyzNryTUfc%2B3dtWSeh3bxPnv20KdJcS3UNq1xaGa9sUIWaASvyDvhh3%2FKqDEIIyeT2F0V83rs4pE2fX1o4XT1Q%2BWv%2FtaYt4BDOmma6rB%2FI%2FETNbr9OW7HZJjKF%2FCMcViuVgTYoq%2FuPmUednX0TYgueM%2FJ3GjCb3hgFyp5KkjuwRhsXs1SYCLHr%2FBamqBLi6SOMAKYz7q0WXrRwW93kZNYcrmPxL%2BMNqrioLqYHvrztbObberZWcJs3Pp2Krc0nCKRiKfo3rSm1A%2Bh1SQFZQZmpCC%2FdY2%2B7nLSb05LcOrLLzYBiOmJYHOP22zrGiqWSvXP05QZm2ZoEKjY3h4%2B%2FACHTQQDAJoTkkdgfz3mLPG2cBnUQJ%2Fts2RSapZoqbtj4PbKVYFTFUn1fX6Jtt6Bj%2BuaQiTMr%2BKWKfkdeYXq3r7Ms6l14WOxMbSNRbIxGtlQitZsnYZRLREPP4oq6DXn32jSMUsBVGGBpvOrCDKHQacgWaOo6YyU2IMWBgdlsGeSUQ0icV2SaP9cgKQu73BoEWuPaBmPRG6Mrb9JfzDM6PW9BjqkAZMUSALAC8OoJv9OLmqy6rEmdN4%2FIN9gE5nUT5pTA6FrEe%2Bz075LG%2BB1qhdzJl52Les7MxslMQk4oMaRO8N7gdlZU7vuwXlD%2BcGLvk05YqJ4p9Fkola5VphXX2vuM5R74Qn3Uxm9sJlyLzS5C7FIHOiiNuszdm538iWntD40jQjIdS8R8tjouWKdqN8prPwIXLoI8Tt%2F4nFoLIasPDMJc7WTR2jm&X-Amz-Signature=fb606057427cbe080c28513c547343ba3412cf1be94de719ae279b71119cf877&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HORKMZ3%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQC9Ys%2B0S7TyUrgXErHcSzwWfeEpQHWtdDu45vYEGrvmxQIhAID1w3pwDhFH17PFplK6pLi3llc3f3YYhIgzoXLCIRuiKv8DCEEQABoMNjM3NDIzMTgzODA1IgxR21SX4%2FfQ8UjEQrAq3ANR9KTShIcXFDJlqxDEN%2BDbXH3yxHSAbesKEQoF2l5fCOJhIqPL60%2FgdO56vyx%2FibiRjrwM7L9iPGlrRZvkq4DVX0D5HzgK0ISOM4iYdcXD8mGpD%2BeBofe4i4AW9fAZJwkeYitDJZMhtNKoAzRPOQ8P%2BNx4LBurUMEyG62Ikepxkoky%2FNLCCdhDVIVN4pDsPfFuQEvsXw1YqOiXCrunLZstN0QQCpGemTDz%2F73NeyIbsxTbxixC7WV4mmJSohMiEFyHehuDdhURHR5mZgQv0o1y%2FilSMLVNOlaHiUxQkxuAi1BlV6P1knhK7h6Rxp0xXVfLb%2BghH5x7Trs6tN29LiIpgdhbfy9QrS6E9uNkQLqPUBLgUp1ad5%2FsiKV%2F8%2BGkuuYT3LmRzQ2BShukkn%2FqmIJHT2y1I9pSoIOxqwuGRujBy7riEpmTunSF00y4Hu5kVwt8O1LTXAWFLykBp68aQq3ykFzpdc%2F0xVKhMKSvDJgLAcyXeycGN1ZuRd6vecZclzAzCLYj01i7opKX%2F7Uk475ZBAfM5l400acOjXX7sOQexxVcYakqnqBE%2FT7J0r6Qs%2FqQMv7WivjVEttuuN7D%2Fh0FVd2Yo9rD4aHPI5kkXppJRCahGzMcxW4oD1rl9jCA6fW9BjqkAVvGf%2F7OJlcGxNRUXJOEdx8UXN6NdoKSrxirM%2Fj6lZr9ZevQwucEiYTAmx1zCnlboiJr6oQl9%2BF%2BrbXJZwuysELScxMRVvLNmB782GaU8iH2f6j3ZA3sRUW2gSosJ%2FJwfhPWJQbE0JTItA9sac6jvkO0mkHXQqAhF3yRijDiKBFU9Wob5ifCcgc3zJt9W4UhPKf2DLxDabqtrKlHEBy2HlKPWWcn&X-Amz-Signature=93143e2015a0d3bb6f1c98effb9c42034e3a6ea222f9b76daea887c5ecaa155b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EE7MXIP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGpjAovrvB6aw0GMkUUkWDbspPISHAnmcWxej%2BCweBDJAiEAoCP68JnigVqjf9Y3dpI7%2BsjaBHP0Z6z4mFm0pCqhXfsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMIEsdltgBSJXpV7lyrcA8hnXpYsMxDV1D9lv1RgepJ03srzFiWo2vf5Nw6Ga1DccCY874TN5fK4KB8CfbgEYJiTYr9mK2sp8tyD4ggw770kvmD3qNNMSPs1sqtx%2BySHN9wiTES3CD8xxualJKzJgfGdGDDhm6NEOYAhTrwdAT33aTqAT38VUk1EvBz827d59K%2B%2F02kAn2c8N%2Fmj%2BqNOAgQxeAAMbRsC91lTQKG1N7IbINt23KlVjzUQwFRCMAto64mq6JKd%2FNyJ5aWLt%2BX%2Fr7AWD4bhBEY0izyII0mRkF8sD7zSv%2FRtpKRYaKnX7DBqzOeTKl6TrFc4KhxJ16JxMFXOGtnPc8M7%2B%2Bf1vbpK800eeaj%2FRLTinaIZLpUjjZikpNz6ZyrzVBn46R8m0AbJ81cP5kzwznm8IYrBvCwlP%2FQ0ob9rHLEahGbph9SQbi0%2FjZqxBjVyZ3w6T2ZuEE3H6VzdPwV%2B56i14jcJnXqV42zJcNq6PWmou3MMeeGQzLvPeYgkMS2LFP3E0mEAB6T9HoeOFL%2BWT39oz36E2egkh0ULipvATLWWHf9w5JMskulbe866KgaJ4gjBapYnhXS8WW9ooQOLWkFPatVG0rk0MdUfo7d17xmhZ17huAMUCE9TSmw0Hnt0eUoOiHSVMIjo9b0GOqUB4wbJWaYtxORvbzMu6JiWDB2QHd9jyS9X8HRFGv36M%2FE7M26LNDGpb8CuW506NDTLbzaszn5mOdydztj6dVK19ZnJDp7jFiKEw%2FzwVk5S34%2F0rAO1PuTWi43%2FqWpMUhlYpMZjbQ4hQQoQKggbzSIEXc3YcRbOl1W3I1Hst%2FYWbKxZqqJjmLIOX1qC2iK%2BlRxduoTuoyNSyNTpC8Eo12q9Twg1Tssl&X-Amz-Signature=12db9103e96c1aba5759e381e351d6d2fdf83ca16bae765935b9d87cc7dda44a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EAR4PPR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDj8l%2FIqS7NO4M2DdeUPA4qcX2KOKLM4%2BBJXglPwTiIQgIhAIFXTKuxFu%2Fo10BSsEvr7MOd1hj%2Fp5MnWIAk7omWAL1UKv8DCEEQABoMNjM3NDIzMTgzODA1IgyIq47U7aO8yC6buusq3APlIF3kfwuelmbuNih7Lldg%2F%2F9XwT1zT7tz1NR4KYFznn0saUGFn%2BjzlqANoobnuWCUpPCJB1fdEE%2BgnhphHkzvobXlyzNryTUfc%2B3dtWSeh3bxPnv20KdJcS3UNq1xaGa9sUIWaASvyDvhh3%2FKqDEIIyeT2F0V83rs4pE2fX1o4XT1Q%2BWv%2FtaYt4BDOmma6rB%2FI%2FETNbr9OW7HZJjKF%2FCMcViuVgTYoq%2FuPmUednX0TYgueM%2FJ3GjCb3hgFyp5KkjuwRhsXs1SYCLHr%2FBamqBLi6SOMAKYz7q0WXrRwW93kZNYcrmPxL%2BMNqrioLqYHvrztbObberZWcJs3Pp2Krc0nCKRiKfo3rSm1A%2Bh1SQFZQZmpCC%2FdY2%2B7nLSb05LcOrLLzYBiOmJYHOP22zrGiqWSvXP05QZm2ZoEKjY3h4%2B%2FACHTQQDAJoTkkdgfz3mLPG2cBnUQJ%2Fts2RSapZoqbtj4PbKVYFTFUn1fX6Jtt6Bj%2BuaQiTMr%2BKWKfkdeYXq3r7Ms6l14WOxMbSNRbIxGtlQitZsnYZRLREPP4oq6DXn32jSMUsBVGGBpvOrCDKHQacgWaOo6YyU2IMWBgdlsGeSUQ0icV2SaP9cgKQu73BoEWuPaBmPRG6Mrb9JfzDM6PW9BjqkAZMUSALAC8OoJv9OLmqy6rEmdN4%2FIN9gE5nUT5pTA6FrEe%2Bz075LG%2BB1qhdzJl52Les7MxslMQk4oMaRO8N7gdlZU7vuwXlD%2BcGLvk05YqJ4p9Fkola5VphXX2vuM5R74Qn3Uxm9sJlyLzS5C7FIHOiiNuszdm538iWntD40jQjIdS8R8tjouWKdqN8prPwIXLoI8Tt%2F4nFoLIasPDMJc7WTR2jm&X-Amz-Signature=e38cfd70450302cd022f9e62b81598d4d95339dce686021fdb1f81ec6648aaa4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
