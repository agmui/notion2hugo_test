---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARHBBEL%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCb2OaYRVqZfcHgDYFOT6yVB1xn2Ea1yaLhKjnbb6x2ygIhANsaKAxh9tlHDcnjerMV9i8OO6ID8ac%2FtD4Opy03OaXiKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI9eTTiAb33Y%2BFO5kq3AN37Nxtr9U0qgKTe%2BxzeJmhgu6dk5BrwFWevwwPKJ8jmJrVEskFHQO6oPgUBQUUyTbX4UvBDlRBVZNUNiULUSPxwOF8K2ISN9cIRpoZrcN3f7fc29REIZNerhqlRygvGDafWfxw8PBuRwP8CW%2Fyx8w1bfYrjhmc4gD7tDcT1hv71AwiLsA41vsA87rP5VkDP0dD%2F81jX%2BnbwbziW9ZS4WvSn1q7pnxsJYVrsTadFOmqCaK2%2F8WZKnCUoSHvM9racjhiPLlx3aFY7vtEcF6dvWkntayHQRiapcRftDX5FqS1F0kD8kf26hQPfhRpOGB8fC%2FvweD3aAYHpCbtcL6kHqPcciKHQDxIDitqiZk0SKP2zqWY9j4VNNt3emAQHxlmGVsPjmTnG1%2FfCqF34vDGlIuB%2Fe%2FUkxHAlhAE3Ub8xBOvgMnBmb%2F%2FhdDANL8MhEJ9QRQvjJSGu5C2AcqweAcRpzCqieXj54fxQkUaSkoV1%2FbEjYIHQzg53KNQsLUgcbnf5klljHE8yF2S3HgDfZvB8t0KONLDz6rTwWT96%2BYlNSmvLwQZO2MTIjhFQYmfqQ6BcfbvYS9%2BRMi45AD%2FveGz%2F0VdN5Poo08%2FpzjS4i3R8Gv4qEq6IdiaBcmSTsawJTDwg%2BDCBjqkAUQpcgbW3Q7d2uabluj0ghhWY8yFj3T%2BLZw0nmLiu5VxQTPwlJmo9S0XEz40SMqUY0OemzFN6hOk7pTUymOgNzJ27lHlqa7LfRU4J5wSD0A0YFap660lGlaG79e88QQcTv7j8byqCC%2Fnu3NknGnMV54Mjtioa7JFJoxwfOnb%2FNwlBtELZKwrX3yXeI4o4KKoYIyxUtvxvM2qiZkPUMi9imNEGbPP&X-Amz-Signature=f17b1b6dca3a0abe11a843dc94e88fe48c073866a42c0b518740db4260bbc230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARHBBEL%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCb2OaYRVqZfcHgDYFOT6yVB1xn2Ea1yaLhKjnbb6x2ygIhANsaKAxh9tlHDcnjerMV9i8OO6ID8ac%2FtD4Opy03OaXiKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI9eTTiAb33Y%2BFO5kq3AN37Nxtr9U0qgKTe%2BxzeJmhgu6dk5BrwFWevwwPKJ8jmJrVEskFHQO6oPgUBQUUyTbX4UvBDlRBVZNUNiULUSPxwOF8K2ISN9cIRpoZrcN3f7fc29REIZNerhqlRygvGDafWfxw8PBuRwP8CW%2Fyx8w1bfYrjhmc4gD7tDcT1hv71AwiLsA41vsA87rP5VkDP0dD%2F81jX%2BnbwbziW9ZS4WvSn1q7pnxsJYVrsTadFOmqCaK2%2F8WZKnCUoSHvM9racjhiPLlx3aFY7vtEcF6dvWkntayHQRiapcRftDX5FqS1F0kD8kf26hQPfhRpOGB8fC%2FvweD3aAYHpCbtcL6kHqPcciKHQDxIDitqiZk0SKP2zqWY9j4VNNt3emAQHxlmGVsPjmTnG1%2FfCqF34vDGlIuB%2Fe%2FUkxHAlhAE3Ub8xBOvgMnBmb%2F%2FhdDANL8MhEJ9QRQvjJSGu5C2AcqweAcRpzCqieXj54fxQkUaSkoV1%2FbEjYIHQzg53KNQsLUgcbnf5klljHE8yF2S3HgDfZvB8t0KONLDz6rTwWT96%2BYlNSmvLwQZO2MTIjhFQYmfqQ6BcfbvYS9%2BRMi45AD%2FveGz%2F0VdN5Poo08%2FpzjS4i3R8Gv4qEq6IdiaBcmSTsawJTDwg%2BDCBjqkAUQpcgbW3Q7d2uabluj0ghhWY8yFj3T%2BLZw0nmLiu5VxQTPwlJmo9S0XEz40SMqUY0OemzFN6hOk7pTUymOgNzJ27lHlqa7LfRU4J5wSD0A0YFap660lGlaG79e88QQcTv7j8byqCC%2Fnu3NknGnMV54Mjtioa7JFJoxwfOnb%2FNwlBtELZKwrX3yXeI4o4KKoYIyxUtvxvM2qiZkPUMi9imNEGbPP&X-Amz-Signature=bc4b9c42aa7dffb2a6162c6690c9365e8fb8533eb07ee5098cabfd1d013a3407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARHBBEL%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCb2OaYRVqZfcHgDYFOT6yVB1xn2Ea1yaLhKjnbb6x2ygIhANsaKAxh9tlHDcnjerMV9i8OO6ID8ac%2FtD4Opy03OaXiKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI9eTTiAb33Y%2BFO5kq3AN37Nxtr9U0qgKTe%2BxzeJmhgu6dk5BrwFWevwwPKJ8jmJrVEskFHQO6oPgUBQUUyTbX4UvBDlRBVZNUNiULUSPxwOF8K2ISN9cIRpoZrcN3f7fc29REIZNerhqlRygvGDafWfxw8PBuRwP8CW%2Fyx8w1bfYrjhmc4gD7tDcT1hv71AwiLsA41vsA87rP5VkDP0dD%2F81jX%2BnbwbziW9ZS4WvSn1q7pnxsJYVrsTadFOmqCaK2%2F8WZKnCUoSHvM9racjhiPLlx3aFY7vtEcF6dvWkntayHQRiapcRftDX5FqS1F0kD8kf26hQPfhRpOGB8fC%2FvweD3aAYHpCbtcL6kHqPcciKHQDxIDitqiZk0SKP2zqWY9j4VNNt3emAQHxlmGVsPjmTnG1%2FfCqF34vDGlIuB%2Fe%2FUkxHAlhAE3Ub8xBOvgMnBmb%2F%2FhdDANL8MhEJ9QRQvjJSGu5C2AcqweAcRpzCqieXj54fxQkUaSkoV1%2FbEjYIHQzg53KNQsLUgcbnf5klljHE8yF2S3HgDfZvB8t0KONLDz6rTwWT96%2BYlNSmvLwQZO2MTIjhFQYmfqQ6BcfbvYS9%2BRMi45AD%2FveGz%2F0VdN5Poo08%2FpzjS4i3R8Gv4qEq6IdiaBcmSTsawJTDwg%2BDCBjqkAUQpcgbW3Q7d2uabluj0ghhWY8yFj3T%2BLZw0nmLiu5VxQTPwlJmo9S0XEz40SMqUY0OemzFN6hOk7pTUymOgNzJ27lHlqa7LfRU4J5wSD0A0YFap660lGlaG79e88QQcTv7j8byqCC%2Fnu3NknGnMV54Mjtioa7JFJoxwfOnb%2FNwlBtELZKwrX3yXeI4o4KKoYIyxUtvxvM2qiZkPUMi9imNEGbPP&X-Amz-Signature=b81c14de7035ae0a3ef1c0f3956d55ac425ca95d0339238430ca68969531f677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MPCTTSY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDRtmk7wsWAdVBm4qnSQqp6vKnSSgrO3Rb674HQiise2AiEAmvNNruoRGHmmLrOnyRRtOFPeGtcgPPn8%2BTUUhzlcRYoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFGckj33uEEiVKZgSrcAzCA9O4keR4kUbnVNES6cRqStfcklpYagAqmm6ytFJxXf%2FZCLTnQ%2Bg1XKctZZLHtpHvAStu%2FWHyhBS2ftmjMjGK2TvrOEspluoAIwQ4ysTWTip0eQGpHYgaFs47z5hyN59zeiEiSyDXQFPqXw8NH1STDUhq4FKJB%2BD4C3rUFcrw46AX4o19lyFEXjwbJdsl6MiQcQoLUlqiTXn6w%2BPJRlXKTWlVZ9dQcORb5xO%2BhVWBoXM5ns4JbbEDzU%2BOY58eogqGFm%2Fk3EHtlAEMB%2Bw3tFZTeblc8LCebIG9AFXVphdcPsrJXSPXzrizgKX5uRTuCmxJ03hVrCIZFr5XekjFetZyYbEqPFzC1jYAtQG61SeDgSA6b6%2BHSAgZcgrHJE9UhicfvgRkRVsdpL%2BAjjDDWpFnfxyKmVRfbDa2SLdOV4r0eHTFUd3XGscx5zD1ShPp92o2m1R1S9kME4jPMk5HZTGBNQhYqm80ZvZzHiYRgqRib1IQRJYL%2B%2Bn7JZ1rc2hzV7i3P6Rd2NZIziSDu%2FYpKHFARK1xaW2Qm2oIXqCcpsFd1cKB8l7NLtSGO790WYIhPHP6YbCRRc1dNJYnmVg0MSRBwjemPA8%2F8EZWmZA5pesV23xlADJW%2BQvB%2FRuPJMPfv38IGOqUByYKx5iblCSzlrVYFOE7DUPHgMhXaZWIY0tDK%2FgVmCS9BCDSmqyZXca90qFRhlcu922PxGbIjy4Gij407TmdZk%2FK11h2rzMEshVPyoif5VW4C7oo4g8h75%2F0FQQ2pOEvxLDEp4UoJNSK7sNhnTQGscYdcYAcMJ4p8F3jkJsdDNcnqVX1l%2BC2fmYK4L5zE%2FmgNsur%2FlbbqPNNgOMKmuXSLRyxQS6s8&X-Amz-Signature=c6f16461adfea8e90b358796ac3f188dc02b928f7ffa9bc984e1d8da754bf6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMOCREB7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIQCHx7qEWf4006TdnE%2B4hEJi3of9IFkDIZc6EC1TSqxXwQIfDnC6C2uNFV%2FWdFzXSVzPAuKq01jrsp0ULna0sogmByqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkTN2X8Rg9DpXUpGhKtwD4szBNGYh3paAY%2B%2BKpeac%2F3K6mge2UZJZaGm0xZVpsJADVQJ8yLuEKm6bt60bMJFkWv5I43MqzK16dnbusffABDHEp2LqhA1HWjuSZfXU7VRp8bp9JtutaKl5m%2BKCd5mupUUoQ2rgIAJ47Aln1Ywd67HSszW4UveVIUNGwEQCdL2kPLdlpcoPSjSXSpY8lY3IkLJxts5HdLTHlOOUGE3fM9hdj7lSQydaFalCxL59THyTKnYa8mf9Tj0hr%2FKecU%2FSYJAyxayM5ZyrD1bv%2B5QK1%2FPp3ttCPt8YaraCkhyby48OYLfoNtQdepkxMBDzcDRHh5cMWI%2FLgI721aNjryZ137x8X1OM3wpCVWd47UR8AyuvPtzqOJOJj8NBLvY1b9UfUDdHLtVmLtoA9efqPAOlkKY6ElKh3PJ8NzU1ggKN7pnBNV%2F1V8RwGTbqJRRbZ9YUfr26hMahuUHkqIlm9MGzlIzvRKDt8kCfJ5%2FzFVppTb3N9OYZfk5uN7nw3sypJcUyn96SUB5Az%2F1ip6PNYYSEiGvyBt1RV8yCFLNvdVuKq7gcKgWF87XCMJvAy5fciruJckxc2kcyP0QG1JpxupisDIV58hFLjYOubtK3JgGD2rAd%2BxSCXG5pzxl%2FHeEwj%2FjfwgY6pgGdaFN0FVNx0rScmU15O4gaFhqUUhaoizG4pHpNEG9W6BtITQOXiS54WPKscx0ym374SwDDv5lXnocRuMvhSQyWQWTAuSDWYznTOmA6SgFNJQiVrUoTiW7%2F1274ucDSK528SdZvMI82tSbB3FCfIB8HsAZd8kUMkjjbhULwaNCzvbDRumxgVm2ziO%2Bq1JEox9EKPwz776zrfcCSbqqbJk8GqfrX%2Bzn9&X-Amz-Signature=ad63a2cec1254f1389ebd28d8f9e46595b4c553a44107b578ba8a72bdc295746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARHBBEL%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCb2OaYRVqZfcHgDYFOT6yVB1xn2Ea1yaLhKjnbb6x2ygIhANsaKAxh9tlHDcnjerMV9i8OO6ID8ac%2FtD4Opy03OaXiKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI9eTTiAb33Y%2BFO5kq3AN37Nxtr9U0qgKTe%2BxzeJmhgu6dk5BrwFWevwwPKJ8jmJrVEskFHQO6oPgUBQUUyTbX4UvBDlRBVZNUNiULUSPxwOF8K2ISN9cIRpoZrcN3f7fc29REIZNerhqlRygvGDafWfxw8PBuRwP8CW%2Fyx8w1bfYrjhmc4gD7tDcT1hv71AwiLsA41vsA87rP5VkDP0dD%2F81jX%2BnbwbziW9ZS4WvSn1q7pnxsJYVrsTadFOmqCaK2%2F8WZKnCUoSHvM9racjhiPLlx3aFY7vtEcF6dvWkntayHQRiapcRftDX5FqS1F0kD8kf26hQPfhRpOGB8fC%2FvweD3aAYHpCbtcL6kHqPcciKHQDxIDitqiZk0SKP2zqWY9j4VNNt3emAQHxlmGVsPjmTnG1%2FfCqF34vDGlIuB%2Fe%2FUkxHAlhAE3Ub8xBOvgMnBmb%2F%2FhdDANL8MhEJ9QRQvjJSGu5C2AcqweAcRpzCqieXj54fxQkUaSkoV1%2FbEjYIHQzg53KNQsLUgcbnf5klljHE8yF2S3HgDfZvB8t0KONLDz6rTwWT96%2BYlNSmvLwQZO2MTIjhFQYmfqQ6BcfbvYS9%2BRMi45AD%2FveGz%2F0VdN5Poo08%2FpzjS4i3R8Gv4qEq6IdiaBcmSTsawJTDwg%2BDCBjqkAUQpcgbW3Q7d2uabluj0ghhWY8yFj3T%2BLZw0nmLiu5VxQTPwlJmo9S0XEz40SMqUY0OemzFN6hOk7pTUymOgNzJ27lHlqa7LfRU4J5wSD0A0YFap660lGlaG79e88QQcTv7j8byqCC%2Fnu3NknGnMV54Mjtioa7JFJoxwfOnb%2FNwlBtELZKwrX3yXeI4o4KKoYIyxUtvxvM2qiZkPUMi9imNEGbPP&X-Amz-Signature=e43c4a77bce1d7d8936378e23f654d8dcb6166b37c78602d8abff4dd32bcdbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
