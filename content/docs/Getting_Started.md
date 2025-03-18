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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAFRHYM7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDel0LPgsqDsngw3wTpRcg3TAc4Q1JGxWPnayRqMO55wwIhAPNj%2FQBx9eolo1tq1tigDzTgZxaXgpkcMNnuNFwWe21zKv8DCFkQABoMNjM3NDIzMTgzODA1IgwRDszyd5ZjwAx8Cyoq3AOWwWq%2FHHOKtItYv50rk4v%2BOIBhzGJT%2F75AK54Qi7fbZp6S9foR8dmSnATh5DlgKu%2Bu8TBoE5q1KzAuSDiDm%2FHoiIs%2BTGd4CPDikcLTNTWQcA3lpqbB4zbPy0yI%2BsRsJpR6MUbtCqzoQmcg7JP%2BRGMRJ6zTP4gYWEV%2FSbi4CJrTMkyCFlSL6hSdDEmaTuojiKIVF43jV5CrxRs3nwfEjKnsJd%2FMO9ASiF%2FEZONl%2Bh32e%2FK89vrfUB007RcbPcSFxnJtMihsUKG8xXTAYLMXVWU8zh1CH59dmLH9AiRf89R%2FoHUrAdPnxAw%2FbfNpwcwDSQ1TtbvT9ayk6854ATLQ20vae7FP2HVAWahv8nHZ8g7wa%2BnO80axtdFEBYVsNyIU0U2zfYIJK6NWKVCxHT6roZqOS%2BrZ0fWmv3WrGm1w7GG5vghGFCSlNRHQGDFxyyqmPnhWx74%2BW636c%2F7913ArFa6fQ8%2BuyFTesYB7HNYukFXACeTq7Z28iGdHvzohmSHcQp8WCPHgYREtB0wchhmI5DGDcRDHSe7S9DwbuL%2BylwHHcL8U0GTj%2FaimootdTAZogP06gzd22s4imjHc5AOOlAUxwQi6XUExelfpO1Xt6Da6kZe1ER8pesM003iH9TDf1uS%2BBjqkAQAGfTXVzVd%2B2U0WogbNetsDFYzqbmYR1Bm3Z2jf8Yh1S7a6JpgCkpiS9FHUbx9bMiSlsUAd3xHCRPW3WSYpIt1fqcuBG1uMlCnyKqOcQMMVJBC%2B3mxhb7iAWRZseqTzemh%2BFrYMVuKWCqcwL%2FSnTdtDFubHyMRdWjctLYDS7R13KSS6lpVpOXz%2BetYsIEGs9Si%2BjyjRU%2FkpH7PeEqN9qosV%2FJVo&X-Amz-Signature=d6c8e6eb3ae558d86b9a948cb5c1d43673a1afa168a351454ffa295656aff537&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAFRHYM7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDel0LPgsqDsngw3wTpRcg3TAc4Q1JGxWPnayRqMO55wwIhAPNj%2FQBx9eolo1tq1tigDzTgZxaXgpkcMNnuNFwWe21zKv8DCFkQABoMNjM3NDIzMTgzODA1IgwRDszyd5ZjwAx8Cyoq3AOWwWq%2FHHOKtItYv50rk4v%2BOIBhzGJT%2F75AK54Qi7fbZp6S9foR8dmSnATh5DlgKu%2Bu8TBoE5q1KzAuSDiDm%2FHoiIs%2BTGd4CPDikcLTNTWQcA3lpqbB4zbPy0yI%2BsRsJpR6MUbtCqzoQmcg7JP%2BRGMRJ6zTP4gYWEV%2FSbi4CJrTMkyCFlSL6hSdDEmaTuojiKIVF43jV5CrxRs3nwfEjKnsJd%2FMO9ASiF%2FEZONl%2Bh32e%2FK89vrfUB007RcbPcSFxnJtMihsUKG8xXTAYLMXVWU8zh1CH59dmLH9AiRf89R%2FoHUrAdPnxAw%2FbfNpwcwDSQ1TtbvT9ayk6854ATLQ20vae7FP2HVAWahv8nHZ8g7wa%2BnO80axtdFEBYVsNyIU0U2zfYIJK6NWKVCxHT6roZqOS%2BrZ0fWmv3WrGm1w7GG5vghGFCSlNRHQGDFxyyqmPnhWx74%2BW636c%2F7913ArFa6fQ8%2BuyFTesYB7HNYukFXACeTq7Z28iGdHvzohmSHcQp8WCPHgYREtB0wchhmI5DGDcRDHSe7S9DwbuL%2BylwHHcL8U0GTj%2FaimootdTAZogP06gzd22s4imjHc5AOOlAUxwQi6XUExelfpO1Xt6Da6kZe1ER8pesM003iH9TDf1uS%2BBjqkAQAGfTXVzVd%2B2U0WogbNetsDFYzqbmYR1Bm3Z2jf8Yh1S7a6JpgCkpiS9FHUbx9bMiSlsUAd3xHCRPW3WSYpIt1fqcuBG1uMlCnyKqOcQMMVJBC%2B3mxhb7iAWRZseqTzemh%2BFrYMVuKWCqcwL%2FSnTdtDFubHyMRdWjctLYDS7R13KSS6lpVpOXz%2BetYsIEGs9Si%2BjyjRU%2FkpH7PeEqN9qosV%2FJVo&X-Amz-Signature=9c82d5acb14314e5069599787e85635c1d8114f7c25e9a688743271daccef739&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PHBTEN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC7HAiDt7ejNT3Teiu1DXLl8mKXCUrx7FbconYW0UYj6wIhAITpwoYSqP1F6Gg3PiN3FysuUjCSJJVC0kcSzXVl9T%2FxKv8DCFkQABoMNjM3NDIzMTgzODA1IgyMdZ1Wbd2ckgJQY3cq3APAZGlzG81XxLMjqUxDVJIfFD0DlCJSAUryikwRSWYBItd128hcKFm0eAc5CifCf6ZthOiDFDf8hjDyJbk0sX8tsgGADdXr3eFsVPLP%2FENrXwAjoy5cubkeDZMOZmYxqMt3Exx2k270ptA%2BrPFqGtNq1WxrdrKL4T4p%2B1mIgrXDEGXpO4BAPW%2FyvsVx299zhj0e%2BXiMGcLACqgyfrdhGs9fyDiAWldZt%2FN3uCZ9XSyie9clCgK%2BenYhKWra6hEtB%2FbDg5c0qDZTPe4ItPSRq01uWOSV%2FcQzOk%2BRlWzb59qE3hlsVTNOETi%2B7BZsoVb0N3%2BlgaKH8cIlRfKIcbqf2WfCvX%2B0bOIzatRdFbS6rJbJKge00XMtrQ6eUK0%2Fy3bin%2BewFk0Me8aAKfD6GyvM%2BH4PSP6TcaetiCZ62hc8RQp45YTHUPdnYiYOMCt1AJYPRkY6fUj765dmS2xxGFIp2KhQwjVjCOJ4Oy1%2F%2B9EGqbIqMv8WQLX2KMRmiHkxeEhhgJ46%2BOt5s3l0v1r6sgGkcKZAqeNZGniEWJoid49KJqBeYV5xR0jpEnG2Ypp1mIiZ3vEtVCbQVefVjlcjQlLwI59KaS4dbKoquh0BJ5chANC9F7scVsDY2tcp3fmTGjC51%2BS%2BBjqkAbGhsw8MtHAPRPzWJV1iE6OynrqltZd8AC7Xe6t8AsHHpTDMolRTr2CrQfsQ5sGJDU%2BGDhEyOfQa0T8W8y4RAacQN4KgRCPIElzhjWclNJ%2BamiAP0PiXySBltP95dZ1m726LF2mlIYOBuFBbXwbAeZWn6NZExDRatelJiVZCtLh87UGosSzqFT3mrtmZxQR5wq6%2FIicMTpGdCXtOJ%2Fd4LcZEHdri&X-Amz-Signature=1034382ec8a3fefa3ea82de0d6441d2fd2a3da29d6aa59a620bb3dbc5be6e41c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO6IU5OK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCOKbFFtWgsksB6k%2Fk4cqnd6K2wA%2Bhd26QwtlcASXorRAIgG4duB0qsVhKNJ4mMM2SzBqagfcOgH8%2BHlrL8PeZJ4U4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOb1ryK1luIlIWKgRircA3nCDURoFpzaEI%2BHO2BQ%2F3%2FA%2FLf1mX%2FxJ8rUwJqnvlw86TrOcnkvgzOp1X%2B07%2Bdf79u%2FcO1uuZ2r2GAaZQZKQYH%2BEt7DxAaQUHcseLrwOGIt3TUziTWGcFo8axmJzHbF9HFlg7OK39kyyOjxb7NVt3y7wXySyhNqJbHEFtunkb6L2MXMc%2FEsVfOTDDEp3E7pHx9thgK1QKA485ImI4KuD92UJmQjJCRXUeeJdD9Xks08WBA6jMdDeiDJxMsp5VPX3xizx%2B0YoiZeqREl24f0LEjreybHLNk0mdzuI4sat8XSFJEVmi1AVXBO8MYAfvUMCK1nfLyiXYcPh%2Fbm5IqW6i5lWiO8e1R%2FkEITtX00LzLe50rTZUFqKCFkMF%2F5TXMr0NMSmPhpq7VYQi4%2FA0vPn65ISYJhL%2BzrJNVzYHra8pDuAMf7h7PBTqbT8zg8nURvoqTMt13xmsw541jeABI0CTECgIJ7KPhAICtB480A77EHgPpwl08eFHj3dBpIehObEnhP2sDtSuH3FE6KQFeNMDl2IvgVqXRH0dvOeJdT1pUq0se8AGJk512oqw2zOFI59FQhsjD9TTl2vVo29V3Qa%2FT75elf6zqj7XsFVeT73COMduKeRA6SCiDeDwPGMOrW5L4GOqUBK8950cza2oFrEa7UfZuf4dOip4ZZ8ov6UXoRKr95cdUcYxa%2FycUr2f6Jupz%2BJZAHtGFJEl05ZNCoJTNbfLx%2BJxvFoMgTr9n4zbYP5A8Nxv4HxGfdkEhGnbl3iIHOpaA%2BnBdqZLr2F85xolrAxDTUdUYT6iMuyxs58R8I2ceMBJj8FymoTXjWTCbWQmG56s74jHOxWTX22c80guv2KMbM6r3aresq&X-Amz-Signature=32b35ea58abce0cc8d165c6eaac61c74e2ae4b7560545fbbf3a84c42f4b7b05b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAFRHYM7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDel0LPgsqDsngw3wTpRcg3TAc4Q1JGxWPnayRqMO55wwIhAPNj%2FQBx9eolo1tq1tigDzTgZxaXgpkcMNnuNFwWe21zKv8DCFkQABoMNjM3NDIzMTgzODA1IgwRDszyd5ZjwAx8Cyoq3AOWwWq%2FHHOKtItYv50rk4v%2BOIBhzGJT%2F75AK54Qi7fbZp6S9foR8dmSnATh5DlgKu%2Bu8TBoE5q1KzAuSDiDm%2FHoiIs%2BTGd4CPDikcLTNTWQcA3lpqbB4zbPy0yI%2BsRsJpR6MUbtCqzoQmcg7JP%2BRGMRJ6zTP4gYWEV%2FSbi4CJrTMkyCFlSL6hSdDEmaTuojiKIVF43jV5CrxRs3nwfEjKnsJd%2FMO9ASiF%2FEZONl%2Bh32e%2FK89vrfUB007RcbPcSFxnJtMihsUKG8xXTAYLMXVWU8zh1CH59dmLH9AiRf89R%2FoHUrAdPnxAw%2FbfNpwcwDSQ1TtbvT9ayk6854ATLQ20vae7FP2HVAWahv8nHZ8g7wa%2BnO80axtdFEBYVsNyIU0U2zfYIJK6NWKVCxHT6roZqOS%2BrZ0fWmv3WrGm1w7GG5vghGFCSlNRHQGDFxyyqmPnhWx74%2BW636c%2F7913ArFa6fQ8%2BuyFTesYB7HNYukFXACeTq7Z28iGdHvzohmSHcQp8WCPHgYREtB0wchhmI5DGDcRDHSe7S9DwbuL%2BylwHHcL8U0GTj%2FaimootdTAZogP06gzd22s4imjHc5AOOlAUxwQi6XUExelfpO1Xt6Da6kZe1ER8pesM003iH9TDf1uS%2BBjqkAQAGfTXVzVd%2B2U0WogbNetsDFYzqbmYR1Bm3Z2jf8Yh1S7a6JpgCkpiS9FHUbx9bMiSlsUAd3xHCRPW3WSYpIt1fqcuBG1uMlCnyKqOcQMMVJBC%2B3mxhb7iAWRZseqTzemh%2BFrYMVuKWCqcwL%2FSnTdtDFubHyMRdWjctLYDS7R13KSS6lpVpOXz%2BetYsIEGs9Si%2BjyjRU%2FkpH7PeEqN9qosV%2FJVo&X-Amz-Signature=1f7e9e62bdd4987a196e0c17781bc16c4d33258875561bf33aba40c4938a7337&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
