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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIOO4Y3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFQlcDuhetqe2Cb1a%2F1UjsAl05iCXRAOcASPMaD5QoRNAiAmz8za4X5Q%2BfnwkKWUqedeLzKPkOil5bIWC2Mb83BiQCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRk3pdyyt%2FLTg678TKtwDxNC8ImoMFJlgxBrVyF5oUUokUL%2F0%2F7FTNDfsMazsTaasQ2186FB8lJli3NUmbs2royZq71%2BI498DcpJ8xwmsGHFBK4%2B%2FE4PQoJd0eiMiI%2BSTjo8ytucLnGddsFbvTtyhnvlru11JGM5lnsK631mYG%2F42A1HfCoGhJLI%2Fh7o5Y2b8Dlw%2BYcquDiQkCutiv7hxXtxUDU2SJSiuLH%2B9VSQzY5RqU3NPdPONeC%2BeWnCH5GM96NOKBAgBzNwc%2B23KI9rmQIjjuLiM5FlVPvx2F%2FTKlNZkO3%2Fr1f2ZlrggDSL0AWR3rlbeaw08g9jc8gss7KMiAqWnWHWtT1%2BmC50uqJaLACwX8KI8T0Uc6VzpGGZaSIK%2B14VUDoRwLwhFaVAeDV1%2FM%2FEz3oJAYOq%2BbWn%2BH1%2FZhJe4yVbGXKskIgHB3p4nyWvRti818Na4YbV%2FdPbAtTxESKGztV%2F41D0aKjjCzK6%2BsPlUGCnOKGeuI8I0yADQtpkWa6PcTH42uYAUX9eL2AaM990cnYrri0bWvSTKiRuZzTwLkpVh88czCILM%2BlCPRWu9Ffrfg6eSohle4SUx8uCYw%2B0WIH6Teh692tbKv9RAsez%2BpXi5X3cIyEcrzFmyC3s2nNScH3Ln5u8Esk8w28PIwAY6pgFnBtlniiA6MGyiQb4xHVF2duwyKvtCuKwfO6EF1iJXjsoYQ73bvd1uR%2F7YUeeNeOJNcW8RPGT9URO9E0B%2B34EnVVt3UOwtlsfuFSm8kZxDwCcoSzGCLksCxaSvu9IWXX7dDpt5iO9xtnYr8cWbc8%2Fp%2BeXTrBf1uzFLIvGKFVwTWMtZQzWov6uZx6XR445GpPTA4SK1L9DX6oVc9mxDNGjQz%2F%2FF37mY&X-Amz-Signature=8f787cdc5846c3260789e9146b2db048c7b93bdfc240af517f103c09782f8b88&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIOO4Y3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFQlcDuhetqe2Cb1a%2F1UjsAl05iCXRAOcASPMaD5QoRNAiAmz8za4X5Q%2BfnwkKWUqedeLzKPkOil5bIWC2Mb83BiQCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRk3pdyyt%2FLTg678TKtwDxNC8ImoMFJlgxBrVyF5oUUokUL%2F0%2F7FTNDfsMazsTaasQ2186FB8lJli3NUmbs2royZq71%2BI498DcpJ8xwmsGHFBK4%2B%2FE4PQoJd0eiMiI%2BSTjo8ytucLnGddsFbvTtyhnvlru11JGM5lnsK631mYG%2F42A1HfCoGhJLI%2Fh7o5Y2b8Dlw%2BYcquDiQkCutiv7hxXtxUDU2SJSiuLH%2B9VSQzY5RqU3NPdPONeC%2BeWnCH5GM96NOKBAgBzNwc%2B23KI9rmQIjjuLiM5FlVPvx2F%2FTKlNZkO3%2Fr1f2ZlrggDSL0AWR3rlbeaw08g9jc8gss7KMiAqWnWHWtT1%2BmC50uqJaLACwX8KI8T0Uc6VzpGGZaSIK%2B14VUDoRwLwhFaVAeDV1%2FM%2FEz3oJAYOq%2BbWn%2BH1%2FZhJe4yVbGXKskIgHB3p4nyWvRti818Na4YbV%2FdPbAtTxESKGztV%2F41D0aKjjCzK6%2BsPlUGCnOKGeuI8I0yADQtpkWa6PcTH42uYAUX9eL2AaM990cnYrri0bWvSTKiRuZzTwLkpVh88czCILM%2BlCPRWu9Ffrfg6eSohle4SUx8uCYw%2B0WIH6Teh692tbKv9RAsez%2BpXi5X3cIyEcrzFmyC3s2nNScH3Ln5u8Esk8w28PIwAY6pgFnBtlniiA6MGyiQb4xHVF2duwyKvtCuKwfO6EF1iJXjsoYQ73bvd1uR%2F7YUeeNeOJNcW8RPGT9URO9E0B%2B34EnVVt3UOwtlsfuFSm8kZxDwCcoSzGCLksCxaSvu9IWXX7dDpt5iO9xtnYr8cWbc8%2Fp%2BeXTrBf1uzFLIvGKFVwTWMtZQzWov6uZx6XR445GpPTA4SK1L9DX6oVc9mxDNGjQz%2F%2FF37mY&X-Amz-Signature=6967883ed23e24e4d47d2f6b861ab5f2ba5ced2f11550aae1971110f788c4962&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIOO4Y3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFQlcDuhetqe2Cb1a%2F1UjsAl05iCXRAOcASPMaD5QoRNAiAmz8za4X5Q%2BfnwkKWUqedeLzKPkOil5bIWC2Mb83BiQCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRk3pdyyt%2FLTg678TKtwDxNC8ImoMFJlgxBrVyF5oUUokUL%2F0%2F7FTNDfsMazsTaasQ2186FB8lJli3NUmbs2royZq71%2BI498DcpJ8xwmsGHFBK4%2B%2FE4PQoJd0eiMiI%2BSTjo8ytucLnGddsFbvTtyhnvlru11JGM5lnsK631mYG%2F42A1HfCoGhJLI%2Fh7o5Y2b8Dlw%2BYcquDiQkCutiv7hxXtxUDU2SJSiuLH%2B9VSQzY5RqU3NPdPONeC%2BeWnCH5GM96NOKBAgBzNwc%2B23KI9rmQIjjuLiM5FlVPvx2F%2FTKlNZkO3%2Fr1f2ZlrggDSL0AWR3rlbeaw08g9jc8gss7KMiAqWnWHWtT1%2BmC50uqJaLACwX8KI8T0Uc6VzpGGZaSIK%2B14VUDoRwLwhFaVAeDV1%2FM%2FEz3oJAYOq%2BbWn%2BH1%2FZhJe4yVbGXKskIgHB3p4nyWvRti818Na4YbV%2FdPbAtTxESKGztV%2F41D0aKjjCzK6%2BsPlUGCnOKGeuI8I0yADQtpkWa6PcTH42uYAUX9eL2AaM990cnYrri0bWvSTKiRuZzTwLkpVh88czCILM%2BlCPRWu9Ffrfg6eSohle4SUx8uCYw%2B0WIH6Teh692tbKv9RAsez%2BpXi5X3cIyEcrzFmyC3s2nNScH3Ln5u8Esk8w28PIwAY6pgFnBtlniiA6MGyiQb4xHVF2duwyKvtCuKwfO6EF1iJXjsoYQ73bvd1uR%2F7YUeeNeOJNcW8RPGT9URO9E0B%2B34EnVVt3UOwtlsfuFSm8kZxDwCcoSzGCLksCxaSvu9IWXX7dDpt5iO9xtnYr8cWbc8%2Fp%2BeXTrBf1uzFLIvGKFVwTWMtZQzWov6uZx6XR445GpPTA4SK1L9DX6oVc9mxDNGjQz%2F%2FF37mY&X-Amz-Signature=8753077f19a1bdbd47319af287114ae18e0bedabaf42608aa0f3cc2c7df3ff3e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBEX7VB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBKlvH1LquGw8RUi8JYkbQhi0cy%2BUwrfJ1mC544iAdC0AiAl6Df9%2FvbEFyI5INPV7%2FC%2FkY1CQxeb3DW3kJJRpsRDHiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FBVaXNrLdfEmFxRsKtwDTK4zdk298OOYTYrpkZXqb%2F0Kr%2B%2BML%2BkItFwBGV5h6z2n3vUjjN%2Fd101YZvUz3idjDDCKyAC17ArKhMSRF7aUpJnQ7J2s2gKg2HxY1a68eDieK0p%2BK5VU3ZFBJWVZ53LGq0MvMyouCwTDe7pJzgYA%2FOnkC8suYk7waUAHfF00YwzPP3Ot%2FyHzSdD6vSty%2FPr1q%2BPzPyQnzgYt7XXyzYCjtUHrbvhHb4B4HID%2BbLAwD5vI%2FdUWH%2FWxyJsNe1vx%2FlO648UJvg7j7PInh1Tzckl%2FNi4mrMaTHbDjOPZ138JGevyiH8iY3tKwfLrylx%2B7i2gHyZIgd9Jer9mwn2NMHwCUB7yKCtMClEl%2BSjRXqlI%2FMRniLgFlI13P8ka0IH3NEXvfePjWTMrFLneIW1gzTB%2B6mf1QDlKdXQpCEB4xChA96%2FnCKmK6k1enXYQvr6jKns14PFwe8Qp5rcj%2B4yjm79g%2BNyNKzRRbb1qxFppvp9WrmN%2BLkv%2B5OyPhf0M0FUYl%2FKk%2F1DDUFDXFLAY7A6nsPFvIK1YrlYfHX9hh1P4XUUuwpopnJUWDKsVUhCLw7UbjViCxQCIzRy622U2ZM3%2FuT2EU6EqvZ4KlNhDyGUnbymy0Q6Vjv9iR7WTLGIj%2FVLMwvsTIwAY6pgEAHmaTSKfkOe17Tuh3nbHG5CjuxFmSAVYTKrZQD3pJ8ClFKz6Azq%2FgvB%2BV%2BcYcHhogKbaK8BYyeU1doscWipUXERpBtRkniKvMGC5QGsJgAggASe6ar4xTbYwcqoRvvi8N6paMfw6zCXDaC0Xc3DxnelDrX2%2BLnjqd2yIOxZHPQvFLfOYzxT9%2BM9F%2BaIBMb5%2FZQQRq9jE0jrCIKoT318E9aigKI68C&X-Amz-Signature=3e82fbdf35f9fd5047407355dbc5a2433d4ed4c065b10ee4683f216c4e88e344&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LXOIFC%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDCMCfAOpE0rQVhqOVLgDWCzmmfpV6CyT6Q2jsnxKVoAIgWtHK4gLR63XV67nKlQGzz2U3Ei10jeDUQMR8quc6ZM8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD58n8N1Hjgt6u86yyrcAz0W%2BqKZjrqr6vQpzK4WA44ZfeqjtuKQXdnfoDbU9eC%2BaAK23JcT%2FUSuO%2BFKo%2Ff81zU6DrpILFXmqjOxnvdxz3VFlrT6Un1N6lMq2v%2FAZxhfRNkr%2FkiLU2P%2Bdsk8Z1UsIlhyMX5cPwmo6ijSVbA6jQgZtrGZK%2BOJyvQWzprfHLKgCYoZTChkCxZCtf4OD2tHC2FqRTmQWINalv8CVAJ8fSr%2Bj36WKk6JkGIKCxXyY%2B3%2FAHzj9gVOHjNe%2FLbc%2BZyCOCWtX26Ie1lHSA6o6OorZ6kZFPqa1B9WrdL22VGMVBqeSuscxn8in4f6L9ccRGreASn2RBxfQ4R%2F2ZSMsQLI%2BxCFvySR6L7BX9DzqHs7Y8uCI1ItuNT%2FidC%2FJHqPlIvhMl%2FUnszb3TDg0fvdzLPH2ZsN0c5Crw30ab4EWnpoVLTS86fA0UrqHYpxo%2FjNengp2hVg2rEu7S5%2FzomSaeMeHc%2F57Fyv5UcBMV6V7G8vhyYXJWmteOXnojDd7ITrTfTra6yqEf9AN1HmMLM3CINTti99WHXPhbp0e1sc7SvWPH%2FSnJolFh43K2Q19HYbp87I71gkswugJyqU2M5m%2BiwkIA0Vsr3lxS%2BhKxfHTIYo6DgRSTDtA8%2Fq%2FIF3lyXUMPrDyMAGOqUBUpdjD5hU7RgoNiS%2F0LLNEeul3e7gfOMBEY79UMeyrd2VHGGkdVxEwCB28Z4XysY43ucZil22lp%2F%2BfywX%2FIhDHhAe9kOrszdrL46HcXg9h8yKfTHJB8FV%2FQGUeR7axbm3XKisPFbBouj27RpOcDxNFVqF4l5389lTPnoKjPtBhXG5dMv%2FivbGVsHLS%2BumEvwkEswHsvFFCzY7o4APIZNmhlHnGREx&X-Amz-Signature=6d77c5cf434be17cd57e1e224e80652f1a6011b52044e7c0d9235c64bde5f16b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIOO4Y3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFQlcDuhetqe2Cb1a%2F1UjsAl05iCXRAOcASPMaD5QoRNAiAmz8za4X5Q%2BfnwkKWUqedeLzKPkOil5bIWC2Mb83BiQCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRk3pdyyt%2FLTg678TKtwDxNC8ImoMFJlgxBrVyF5oUUokUL%2F0%2F7FTNDfsMazsTaasQ2186FB8lJli3NUmbs2royZq71%2BI498DcpJ8xwmsGHFBK4%2B%2FE4PQoJd0eiMiI%2BSTjo8ytucLnGddsFbvTtyhnvlru11JGM5lnsK631mYG%2F42A1HfCoGhJLI%2Fh7o5Y2b8Dlw%2BYcquDiQkCutiv7hxXtxUDU2SJSiuLH%2B9VSQzY5RqU3NPdPONeC%2BeWnCH5GM96NOKBAgBzNwc%2B23KI9rmQIjjuLiM5FlVPvx2F%2FTKlNZkO3%2Fr1f2ZlrggDSL0AWR3rlbeaw08g9jc8gss7KMiAqWnWHWtT1%2BmC50uqJaLACwX8KI8T0Uc6VzpGGZaSIK%2B14VUDoRwLwhFaVAeDV1%2FM%2FEz3oJAYOq%2BbWn%2BH1%2FZhJe4yVbGXKskIgHB3p4nyWvRti818Na4YbV%2FdPbAtTxESKGztV%2F41D0aKjjCzK6%2BsPlUGCnOKGeuI8I0yADQtpkWa6PcTH42uYAUX9eL2AaM990cnYrri0bWvSTKiRuZzTwLkpVh88czCILM%2BlCPRWu9Ffrfg6eSohle4SUx8uCYw%2B0WIH6Teh692tbKv9RAsez%2BpXi5X3cIyEcrzFmyC3s2nNScH3Ln5u8Esk8w28PIwAY6pgFnBtlniiA6MGyiQb4xHVF2duwyKvtCuKwfO6EF1iJXjsoYQ73bvd1uR%2F7YUeeNeOJNcW8RPGT9URO9E0B%2B34EnVVt3UOwtlsfuFSm8kZxDwCcoSzGCLksCxaSvu9IWXX7dDpt5iO9xtnYr8cWbc8%2Fp%2BeXTrBf1uzFLIvGKFVwTWMtZQzWov6uZx6XR445GpPTA4SK1L9DX6oVc9mxDNGjQz%2F%2FF37mY&X-Amz-Signature=f20b4a350fb5e78e0e025521ab89e3ad26c9dfd6dded762e1d4d56fbc3a3bc04&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
