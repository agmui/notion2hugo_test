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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XV4SUA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDT%2FarFSDXvPn4nKZsNPir5bJ3X5R5qwRRTLej1IOCptAIgEIvzuEskVcacmReyhABC0QePlfM%2BsGnAQQlFEfjQooYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVGquUrzNFtX45ftyrcA0cGKwBn6I6WHH04hLOLZbRcbUt5woprt%2FrCX5TPlG0iGt6ZWhz83GFBeaD6XMvw9jJXJKqhBMauBY%2FSR9bAyOFBPPHtNKLsyVl%2FsvwkK4AoPDeiVpE3gHXeA9zdi9PuaNdMTtBf5PW9zet8Mz%2B5OM%2BbWFPbhiX%2B3uapVStxI4G8wqVW10cccHRLE16%2F3p%2FLPoP2olQGfTDdS3qKkdoEEzp5%2B06L5eVwiw9WOIlEL1PnAzzWdhSXpYMoIeMUaVEZP%2BOpX3rVuZMBuc%2F5yQMTbz%2F76M%2FnYnK34c%2BydgNxs%2FLMK7SL3szmtLe8ZoXJkZdoWHG43yun1npYFVqEIOG4G8PDJ8LyFRtG0sd%2BcOm2q5CfNpQnBcNo8azW9bB3RJnhE2tJ%2Bj%2FV7Up8lTTna7agLjMKw8oxYb1vMvdGvCDW2TpdExQ2Uv6Dq8xdJMv6Y11u0npyAWB%2FQpjxlWkT%2Fx4MFTVfa2yDhCy56VJHaJTp%2Fwr%2B%2BsV5LU3A%2FFf6TtFms1O9Z9R8Pg4jS%2F1NnIwM6ACvNdeLkQG8kqKjtSDaXWXksFX2Y6T6XJha7TlCYf9SsfOJw%2FOWGJhPMHn5QxAG5a0ug12Y5h7mvdcjDe2HXlIxJgPnOL2kx9KOH9twg3SLMKj76b8GOqUBoX9B3crMnmqAcqB7w4q9eVIDO5G1Q0k%2BmWDRierUdYoYckRiTZtFduaTawmxOA3ztur6sLNiOXe0dPvHSD3bbyOTpVDHqi%2BnYplubddWTUq6zuoiRiI2jIu9S3SVUjHevuRIl1S10D%2FrizanSU%2BrQDp2NfR%2BK%2F7RxzOJaZ64G6G%2FWV6Oe44WtfuHgETA3Qz5%2FjZ7RRhwc8iPPb9CL7RqsXH%2FoQbF&X-Amz-Signature=81e16fb284bd6b473d1e05340d4681b4c2e56d5d5fd5305b8b9d1adc9cd9629d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XV4SUA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDT%2FarFSDXvPn4nKZsNPir5bJ3X5R5qwRRTLej1IOCptAIgEIvzuEskVcacmReyhABC0QePlfM%2BsGnAQQlFEfjQooYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVGquUrzNFtX45ftyrcA0cGKwBn6I6WHH04hLOLZbRcbUt5woprt%2FrCX5TPlG0iGt6ZWhz83GFBeaD6XMvw9jJXJKqhBMauBY%2FSR9bAyOFBPPHtNKLsyVl%2FsvwkK4AoPDeiVpE3gHXeA9zdi9PuaNdMTtBf5PW9zet8Mz%2B5OM%2BbWFPbhiX%2B3uapVStxI4G8wqVW10cccHRLE16%2F3p%2FLPoP2olQGfTDdS3qKkdoEEzp5%2B06L5eVwiw9WOIlEL1PnAzzWdhSXpYMoIeMUaVEZP%2BOpX3rVuZMBuc%2F5yQMTbz%2F76M%2FnYnK34c%2BydgNxs%2FLMK7SL3szmtLe8ZoXJkZdoWHG43yun1npYFVqEIOG4G8PDJ8LyFRtG0sd%2BcOm2q5CfNpQnBcNo8azW9bB3RJnhE2tJ%2Bj%2FV7Up8lTTna7agLjMKw8oxYb1vMvdGvCDW2TpdExQ2Uv6Dq8xdJMv6Y11u0npyAWB%2FQpjxlWkT%2Fx4MFTVfa2yDhCy56VJHaJTp%2Fwr%2B%2BsV5LU3A%2FFf6TtFms1O9Z9R8Pg4jS%2F1NnIwM6ACvNdeLkQG8kqKjtSDaXWXksFX2Y6T6XJha7TlCYf9SsfOJw%2FOWGJhPMHn5QxAG5a0ug12Y5h7mvdcjDe2HXlIxJgPnOL2kx9KOH9twg3SLMKj76b8GOqUBoX9B3crMnmqAcqB7w4q9eVIDO5G1Q0k%2BmWDRierUdYoYckRiTZtFduaTawmxOA3ztur6sLNiOXe0dPvHSD3bbyOTpVDHqi%2BnYplubddWTUq6zuoiRiI2jIu9S3SVUjHevuRIl1S10D%2FrizanSU%2BrQDp2NfR%2BK%2F7RxzOJaZ64G6G%2FWV6Oe44WtfuHgETA3Qz5%2FjZ7RRhwc8iPPb9CL7RqsXH%2FoQbF&X-Amz-Signature=ecc2cff2a8550382ace81282b2d256f672f8ce41edb4c43801a351eb715818db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBN2KLW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBl16kPps%2FXSsjOPKOBwic2Ko7L%2BIUp3tOiSXlXvBcZUAiEA595SEycat9nH1u91WJ%2B1mnClpmpjEDtWKIie8A06j44qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAY8WRfIUxmDgh%2FerircAwRoiuv1C5mmQ%2FrGhF3K%2FM4cSwtdi%2F0LY5ul64j4tuGInHNA4UgMufFPGu4g0cxS5%2BUzoajRxGQ1v05d7Pm%2Fz2qvwATiXiimw5kVRIENQcts69dVrbhqhBESQJDmoWNzBLh2%2FTcMoZc%2F331AmBwcdC9VX%2FXGvIpKF7x4iSk3Gs%2FN7tATfd0k6YEChntMf8YGhBY5O0jz4neT7XxYlCMorHAu2KmWMDKi9Ps%2BQ73b3cRxAVn7%2BO%2Fykp6GKzgAxSHkG3lXUZaFrloIEq75HVJXZZjDWOw%2B2G%2FNjchK%2BRHD2%2BA6nib%2FH6J7%2BCEKSFhUDDvvUd6BQP8Kx4DA7wBRKP3w%2FRt5k%2BbIufYzUcWiVBgJZpBGk7TTURy85sD2LDDB6rlONr5hDaIWMrlZuhszVvl6el5khRRwIHgbM6ACe8tHBNGlfGxgnIQRroJtjI%2FXXsqQyFgbelPthtPcf6J8FLR2K2RrCf5mh6i%2B%2F4OPQyH2HTyt4LIyq0NKO6RyBclgwHL%2BnSm5sDAlEJla5LuSEz5F8G%2Bj%2FNDW5kkYCn4N%2BRiaqqXDHgtYw9ml8KZ0i%2B4bAdK7oKZwAikLMFW77g8ru5YeQ%2Be6QLY306Ii7SEHBU920ujgY2zIds9ntPrhwLVZMOn66b8GOqUBlTEzXV5BVPmjWuIAoudq9XSeKbQKWVxgJA7qKPOyExXEAtTDY03ySsn%2FvkjbUs%2Fd1mb2piHTXBP7f8lYeKctP5ZUPyDNXabLBVSHJAUs71Kp81Y9pmxel%2B1NTGez%2BOXyw55GIP4tM%2FikkomJowgOfN7pkI3wunJNWOJh3u3XZ559EYDh9HyNsdgs9EENJ1pSJ6rfwMDtjK5JxkbcBgWaoaD%2FW4cp&X-Amz-Signature=1527687e081fe33b64ede3c00521539111ab8d15388f366bcb663d4bfde8f7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USC2ZFQO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIC18fxvVuGkr2iHiXOln1SvGHDlIHXgw%2F%2FbzU7PBcUtHAiAbJa2B5%2BDXf%2BR7FwlX4AHqR1raOWGzDMdKnxB0y3EkaCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7VnNj%2Foo2Q0xnhkXKtwDH0MGW7Ge1wGcd865lMtZx56%2FIrYW7fpu9bR6MHfrQp2%2FcT84qtF%2BduPcBKa4BADEFn%2BTtw5ov18Od%2B4D1K7tGqEevy%2FpG3VXoYWFQErCjqCHb%2BcZc81tsQSj1XmiiCyvIKen6%2BdOMUuyKDL0hMf8vDgc2sSP5VdBLFJbpb5vH2Q9IeBlQqSDJgKhPsftppfF3IfSuYIyVbGuUiM0%2FxZBoAqPnMaoP4CAM7JT5wai0mxoWNUCm4EICYclKpq5lJy%2B86fx4KjmhTC0tPuZsRYWTa1afCyMI5rtX2IuA36OW9Ggkb8KPk%2BD9xqEskCV%2F94vCKPGhQnB8orU4U74BJDZcpI1WOaJHwS4qxakMBrjPtYnjc56nb%2Bo3%2Fze8%2FAx9jgPLOoeHOBmdck3f6%2B4BUvT%2BRprxO6ycYQYru7roI%2FsYVd3DglsQdaWFw%2F%2BjEI3H4YZtABpcMbYs4S%2FUHSIr46CY1Sl3KseuFfISRzXINt%2B7v%2F%2BFQXYHf7I8VbC1SnSV6doobML%2BtTFaj6l0Oy%2BSBr3l%2FJrXDAPbJuzmFd1W2GOdD2PbwWhsG%2F4ERt51Bgmknrc3CncQ%2B9hO2P54%2BtAcQRJhsaYakcea6LmJrx7WaeiLf4OgOloRxeJLVAt3ngw%2BvrpvwY6pgFm4op1VeyZjFNu%2FPRAV9KZXxstcI%2Fgq%2BTBYZlGfEw8rRF%2BDSh5bryz3tv2W8zWwi8xjeLVyb1dcZ3uRA3poZk2nieApLzOxOX49N%2Btp%2BxcwSZW6gUv9hF5%2FO0%2FbwzE0uQ34d3nEwJ56TGc0%2BB2e2WSdzlGx2xtnnbIfcwpuaLPBqmhuIfc%2F3EYIjOMypKmr%2BnmuIMjAGmA8NIK%2BQj5fWKaBoG1UY%2Bv&X-Amz-Signature=a4c2b376f703a5e8b6edc2a2f63abca1e79b20a55604acd0efcd29ab925691d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XV4SUA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDT%2FarFSDXvPn4nKZsNPir5bJ3X5R5qwRRTLej1IOCptAIgEIvzuEskVcacmReyhABC0QePlfM%2BsGnAQQlFEfjQooYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVGquUrzNFtX45ftyrcA0cGKwBn6I6WHH04hLOLZbRcbUt5woprt%2FrCX5TPlG0iGt6ZWhz83GFBeaD6XMvw9jJXJKqhBMauBY%2FSR9bAyOFBPPHtNKLsyVl%2FsvwkK4AoPDeiVpE3gHXeA9zdi9PuaNdMTtBf5PW9zet8Mz%2B5OM%2BbWFPbhiX%2B3uapVStxI4G8wqVW10cccHRLE16%2F3p%2FLPoP2olQGfTDdS3qKkdoEEzp5%2B06L5eVwiw9WOIlEL1PnAzzWdhSXpYMoIeMUaVEZP%2BOpX3rVuZMBuc%2F5yQMTbz%2F76M%2FnYnK34c%2BydgNxs%2FLMK7SL3szmtLe8ZoXJkZdoWHG43yun1npYFVqEIOG4G8PDJ8LyFRtG0sd%2BcOm2q5CfNpQnBcNo8azW9bB3RJnhE2tJ%2Bj%2FV7Up8lTTna7agLjMKw8oxYb1vMvdGvCDW2TpdExQ2Uv6Dq8xdJMv6Y11u0npyAWB%2FQpjxlWkT%2Fx4MFTVfa2yDhCy56VJHaJTp%2Fwr%2B%2BsV5LU3A%2FFf6TtFms1O9Z9R8Pg4jS%2F1NnIwM6ACvNdeLkQG8kqKjtSDaXWXksFX2Y6T6XJha7TlCYf9SsfOJw%2FOWGJhPMHn5QxAG5a0ug12Y5h7mvdcjDe2HXlIxJgPnOL2kx9KOH9twg3SLMKj76b8GOqUBoX9B3crMnmqAcqB7w4q9eVIDO5G1Q0k%2BmWDRierUdYoYckRiTZtFduaTawmxOA3ztur6sLNiOXe0dPvHSD3bbyOTpVDHqi%2BnYplubddWTUq6zuoiRiI2jIu9S3SVUjHevuRIl1S10D%2FrizanSU%2BrQDp2NfR%2BK%2F7RxzOJaZ64G6G%2FWV6Oe44WtfuHgETA3Qz5%2FjZ7RRhwc8iPPb9CL7RqsXH%2FoQbF&X-Amz-Signature=c75d74e82d2dc4952556ffdfa170c754ae18da51da6400199c9899afaafa17f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
