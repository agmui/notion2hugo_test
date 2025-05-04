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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCW5PMKR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFgU%2BIMWS7urGPKHMYd3Lsjp0PTdCngxAlq4Jc18mS%2B5AiBNPTWB2X8hLAGqUBTpaM98K3xit1JOMIEUheUCgv2VLCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMHDfoVYU1%2FB13aL7wKtwDPrUHB2r6DdoBXx6dRPxzUA6mV0LeFdXWu87yh6s49IiPYga25UbeRtg3Da5CQJRSRoy4DEv5smKxVNaLTIRVmhLrTxmE5C6A5CpiTwX%2FzM3Pbm08hz%2BQXVsYV%2Fe4%2B8drkwnerItJycipxWx%2BzI%2BRUbIhYkO4ucM5%2BY%2BGPHWR6q8nx%2BvfoaJFAO00r2yQZpxprNpztQr2TUCNxVz5Cs8ScSAHfLEz96I1GQI1mJO511Da117kt8PcfLGZgoIKqPdaJ6tunmJzIMvVFTUUroMkGzrVShR0jcDAPjZaMNLs2no8jK%2BUbJ2TLIMx01CEGw5%2BB0%2BA56nbgFq0hs64wyc6%2BzJZ0q58DrGnSpV5UBCBmdpTiaobBqqtfJ7w1nZUsgI5JK7s79iDPwtQAnFjAsnf2jANP98S4UjbZ8L7HA0csD68BozX%2FLrVNhZrIbExhiYuYc3jSnnGH6tZt3kpPFULKQOLLTDr%2BUORFFblREy%2Fu%2Fb7Ro3dUmpOXw%2BCMFKkRLN4LCCOhjXE21M67ecIx734OprxqCNPmVXZRjErjf89sXhnanL5VRTqu2777LzIM8JN8iGEt7e4kdicBy6Fzf9DjjrQDSuJbhrDUCvk6O82%2FauCsQY%2FLuHfWS9LVm4woLvewAY6pgGOxxcrcitqJXjWsMa39NUIZi%2BfPMPBax5rQLim2G8LLq8HTts8WVFNPOXmhZg%2F3aD5dMPtlDBCZWZpVOzm%2Fl%2Bja0wKgsa0Ewg5Oi9WT5xrFqkWVBPzNj%2BuevIDm3IoYhYJv8Bzc4LW%2B6BbO316dMjqfVAHbQ0wwYA0cizidMKFFIPLiRuULTAKV0GtViB861eUM9%2B0nclR%2BNTc%2Fd0IPJ2AUDg1am1Y&X-Amz-Signature=f6b0c923562bc77d7d846853791b5c6f9029ff905622690b2b24638c77d7379a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCW5PMKR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFgU%2BIMWS7urGPKHMYd3Lsjp0PTdCngxAlq4Jc18mS%2B5AiBNPTWB2X8hLAGqUBTpaM98K3xit1JOMIEUheUCgv2VLCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMHDfoVYU1%2FB13aL7wKtwDPrUHB2r6DdoBXx6dRPxzUA6mV0LeFdXWu87yh6s49IiPYga25UbeRtg3Da5CQJRSRoy4DEv5smKxVNaLTIRVmhLrTxmE5C6A5CpiTwX%2FzM3Pbm08hz%2BQXVsYV%2Fe4%2B8drkwnerItJycipxWx%2BzI%2BRUbIhYkO4ucM5%2BY%2BGPHWR6q8nx%2BvfoaJFAO00r2yQZpxprNpztQr2TUCNxVz5Cs8ScSAHfLEz96I1GQI1mJO511Da117kt8PcfLGZgoIKqPdaJ6tunmJzIMvVFTUUroMkGzrVShR0jcDAPjZaMNLs2no8jK%2BUbJ2TLIMx01CEGw5%2BB0%2BA56nbgFq0hs64wyc6%2BzJZ0q58DrGnSpV5UBCBmdpTiaobBqqtfJ7w1nZUsgI5JK7s79iDPwtQAnFjAsnf2jANP98S4UjbZ8L7HA0csD68BozX%2FLrVNhZrIbExhiYuYc3jSnnGH6tZt3kpPFULKQOLLTDr%2BUORFFblREy%2Fu%2Fb7Ro3dUmpOXw%2BCMFKkRLN4LCCOhjXE21M67ecIx734OprxqCNPmVXZRjErjf89sXhnanL5VRTqu2777LzIM8JN8iGEt7e4kdicBy6Fzf9DjjrQDSuJbhrDUCvk6O82%2FauCsQY%2FLuHfWS9LVm4woLvewAY6pgGOxxcrcitqJXjWsMa39NUIZi%2BfPMPBax5rQLim2G8LLq8HTts8WVFNPOXmhZg%2F3aD5dMPtlDBCZWZpVOzm%2Fl%2Bja0wKgsa0Ewg5Oi9WT5xrFqkWVBPzNj%2BuevIDm3IoYhYJv8Bzc4LW%2B6BbO316dMjqfVAHbQ0wwYA0cizidMKFFIPLiRuULTAKV0GtViB861eUM9%2B0nclR%2BNTc%2Fd0IPJ2AUDg1am1Y&X-Amz-Signature=cfee3b9eba957287abdb333fa89fd36fe70ed9c58a16eeb9bffac29f3f5cbcc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCW5PMKR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFgU%2BIMWS7urGPKHMYd3Lsjp0PTdCngxAlq4Jc18mS%2B5AiBNPTWB2X8hLAGqUBTpaM98K3xit1JOMIEUheUCgv2VLCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMHDfoVYU1%2FB13aL7wKtwDPrUHB2r6DdoBXx6dRPxzUA6mV0LeFdXWu87yh6s49IiPYga25UbeRtg3Da5CQJRSRoy4DEv5smKxVNaLTIRVmhLrTxmE5C6A5CpiTwX%2FzM3Pbm08hz%2BQXVsYV%2Fe4%2B8drkwnerItJycipxWx%2BzI%2BRUbIhYkO4ucM5%2BY%2BGPHWR6q8nx%2BvfoaJFAO00r2yQZpxprNpztQr2TUCNxVz5Cs8ScSAHfLEz96I1GQI1mJO511Da117kt8PcfLGZgoIKqPdaJ6tunmJzIMvVFTUUroMkGzrVShR0jcDAPjZaMNLs2no8jK%2BUbJ2TLIMx01CEGw5%2BB0%2BA56nbgFq0hs64wyc6%2BzJZ0q58DrGnSpV5UBCBmdpTiaobBqqtfJ7w1nZUsgI5JK7s79iDPwtQAnFjAsnf2jANP98S4UjbZ8L7HA0csD68BozX%2FLrVNhZrIbExhiYuYc3jSnnGH6tZt3kpPFULKQOLLTDr%2BUORFFblREy%2Fu%2Fb7Ro3dUmpOXw%2BCMFKkRLN4LCCOhjXE21M67ecIx734OprxqCNPmVXZRjErjf89sXhnanL5VRTqu2777LzIM8JN8iGEt7e4kdicBy6Fzf9DjjrQDSuJbhrDUCvk6O82%2FauCsQY%2FLuHfWS9LVm4woLvewAY6pgGOxxcrcitqJXjWsMa39NUIZi%2BfPMPBax5rQLim2G8LLq8HTts8WVFNPOXmhZg%2F3aD5dMPtlDBCZWZpVOzm%2Fl%2Bja0wKgsa0Ewg5Oi9WT5xrFqkWVBPzNj%2BuevIDm3IoYhYJv8Bzc4LW%2B6BbO316dMjqfVAHbQ0wwYA0cizidMKFFIPLiRuULTAKV0GtViB861eUM9%2B0nclR%2BNTc%2Fd0IPJ2AUDg1am1Y&X-Amz-Signature=d31ad0de585151ec7bad6a286f4390fdb2edab8e62cfe282faf0cb2db41f9ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4ZY6GE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCbAbk5n22709dvlox4DHXxzYG36MqO6TOEsT55HHn%2FKgIhAKBjbuBVuQ57NRWoo1ete8QR1Ivlh1wsGQhgUxqpwsvFKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5NLCTvgwe%2Fe%2F6QJIq3APP8ElM2zi%2FW%2FufIaIlWuysCh7WbIXFmt%2FzFUw8i86lGiuO5%2FBm8mYx8PuZ%2FfsgEFtYiK6M4UDBhu8uzqUUHA5H%2BJedZFiPt47mDydQej98hsOi%2F8RN7AE8eqCKF7BPpHxuUOY8OnRX4n7wDjE3q5gbb69j%2F8ycwqxm2J%2BJ3d%2FzVKGOyoTANPn6LkHvfGXw3mbnk6pCUHJ4QclRB771C35xianaBxwf1qZ9hT6kwt3%2BEg8i0Tp%2BWkPfmL%2FcafR7i3PvwGhli885YQLjAYfDdnVLUlQ083Kio07QVnQ8kDAl7g8L1BXFDEai9hq%2B3tdX4WW8h4tCZr6GjnX%2FXurE5Z0XrBZjgj%2BcmweboVyMhm2oQQCDc7rSLmIVfpv%2FFD8tqs7D%2By4bh73haVj0WNB0Wviskgc%2FYbVp9hT%2F7ShsbR63mdhYO0k9OJb1g%2B5Scqi%2FoJyIDU%2FlNfhsruGuMRO1TfGA4pidyctRc8PufQFy%2BMdoTGRaDZ67gBKwJXzRdzqEMQ8jrRrkl2sAQ8%2BfDYw0q4l8RY3Is%2BZQP6HmPGAAXfAZSXAhtI8ZYWkY3DU2BQTtSQQ3a15AJmJgfXbKVnCgpuk3fmX0IiZy4uBHEfD4NfjnFJusf7nCOX2g4a9L9jD7ut7ABjqkAe4EpHNhUmBTkcKESLS8FvtUR8Tz2xH7idPzdSCimuFLqhAx6qroiniM2Zc%2BXPopbBPiNnDIxY%2B45DNNNsbCmNt4pxTyvkrSPY1CX7RNOk675ZJ6QPMkPKHRQ%2B4pl3VOMjtj5Dny%2FWX7lzVWskgNR9w9PryNBy64f4WXA8Y%2BrBwR%2FWI6%2BzKnZyvYcObCPaK2iPNOMat5suQ1qev901cRF8zjUYjm&X-Amz-Signature=c9a065a7518ff13ad3b89cbff526f9682d552d7ae792f146eaf0eb3cd8015e43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3YKKMA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD%2FVZNiPjcEQsOLyY%2FdFUeEfAeFlfyvZV%2FqMmX7cF%2FJCAIgfhxrEA%2BgQG8aZObfDqLBC9sJO84GdZPXbZH7VteYqQkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDQhTGmUHNb9KkQglircA7HmQ%2FXV0%2BW5wMBbToXiiqIe72atOVdiV6rZDXUVOo%2FKopzTZeWz%2FzcJURgheZjcKbvZZLNBZst2IG2Btf2szr486fwiPE3edr06S0nsGjTzOLmajxrY4RRTGfV17V2ZHNBfVQkAQesVZcm78S8sY2fyzTxlWxyblJxTVZGu15rM3etV%2B7GGr2cB6HtS2pJb9Im6d8FU%2FP05J9nbnM%2FysaK0IbTRS4WSR4j3TyQonl%2FDkwODslbxOVQ5XM4a3bJbUnPJxAM8Smwlt5sml1Bn2fnDjTuMt44%2BJlG7IH3bgZERhftPMrw1usRVG7QuH3ktbXAk6EYDx0BgZd6mz6KKf%2BVPU5CwStyTik5AkT2Oz7kMe2zZVemJ67FHn0EXpkZBFB1%2FyLkX4emLa66AvhyNgKo9Jrt4%2FE9%2FDldblxMO7X6cCIUXhhZTMhP60%2FDcTXGsti18eOfi1%2BxloR2Z55nY27dx3hbg%2BEyXGoKoh7xHUXBb%2FOmYSRusdCzriRLlyuCZFkmZhgX4aE1dJnpa5wDZmwHxl9UMAzxx51j7CzdcWH6Ub51P%2FkOJUZ%2BUm88RAqBqA0BIEVDEn8UVXS9H%2Bft30dT7mwo%2BTM1nOSmOS4BPkN%2BzY8%2F%2FGueoUYHgUobRMIW73sAGOqUBqy1hVz8VzE74pM%2Bi30%2FaklKltPSCHX20L5PSoD4geFCdaCDRlhLsY%2Bk6diFGomojjr9vtVQorv2mCHY9hbw6KHwprWQSidsqnZy2FPVgSM9ItUVPhMpgdT2gO6OnYML6N6xBSswUqEP1MaAaxyaEZjCvVxXwZwJozlYUVppaLplbJD9ogOgJ8NBueL5xUk3%2FJHTi8JxGZn6%2BTAwyG%2BYzbU%2BXUPjn&X-Amz-Signature=331d06830e19aee3a66018d3e7ebc884953a6b9fa7c255ac78a55b0e6ab64d00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCW5PMKR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFgU%2BIMWS7urGPKHMYd3Lsjp0PTdCngxAlq4Jc18mS%2B5AiBNPTWB2X8hLAGqUBTpaM98K3xit1JOMIEUheUCgv2VLCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMHDfoVYU1%2FB13aL7wKtwDPrUHB2r6DdoBXx6dRPxzUA6mV0LeFdXWu87yh6s49IiPYga25UbeRtg3Da5CQJRSRoy4DEv5smKxVNaLTIRVmhLrTxmE5C6A5CpiTwX%2FzM3Pbm08hz%2BQXVsYV%2Fe4%2B8drkwnerItJycipxWx%2BzI%2BRUbIhYkO4ucM5%2BY%2BGPHWR6q8nx%2BvfoaJFAO00r2yQZpxprNpztQr2TUCNxVz5Cs8ScSAHfLEz96I1GQI1mJO511Da117kt8PcfLGZgoIKqPdaJ6tunmJzIMvVFTUUroMkGzrVShR0jcDAPjZaMNLs2no8jK%2BUbJ2TLIMx01CEGw5%2BB0%2BA56nbgFq0hs64wyc6%2BzJZ0q58DrGnSpV5UBCBmdpTiaobBqqtfJ7w1nZUsgI5JK7s79iDPwtQAnFjAsnf2jANP98S4UjbZ8L7HA0csD68BozX%2FLrVNhZrIbExhiYuYc3jSnnGH6tZt3kpPFULKQOLLTDr%2BUORFFblREy%2Fu%2Fb7Ro3dUmpOXw%2BCMFKkRLN4LCCOhjXE21M67ecIx734OprxqCNPmVXZRjErjf89sXhnanL5VRTqu2777LzIM8JN8iGEt7e4kdicBy6Fzf9DjjrQDSuJbhrDUCvk6O82%2FauCsQY%2FLuHfWS9LVm4woLvewAY6pgGOxxcrcitqJXjWsMa39NUIZi%2BfPMPBax5rQLim2G8LLq8HTts8WVFNPOXmhZg%2F3aD5dMPtlDBCZWZpVOzm%2Fl%2Bja0wKgsa0Ewg5Oi9WT5xrFqkWVBPzNj%2BuevIDm3IoYhYJv8Bzc4LW%2B6BbO316dMjqfVAHbQ0wwYA0cizidMKFFIPLiRuULTAKV0GtViB861eUM9%2B0nclR%2BNTc%2Fd0IPJ2AUDg1am1Y&X-Amz-Signature=d33bb671a9e29ae75b1fd07bab34fd22edfa25d1488f2185c45adaaed2e25cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
