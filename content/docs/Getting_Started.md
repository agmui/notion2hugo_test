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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQQ5PD2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFGr33vuAU16y37KYXedzccbdc0I2cknUQ0VRTgU2PcXAiEAy0oO6ydvgI7y6j2Z5D%2Bo53gg%2Bcb674L6ptV6iTYQt%2B4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuNWFte5ZFTYSmyYCrcA7XP5Grqmd%2FP8i%2F2jjKGo9ViFinZi8yghjQjM7BmRoDqa88V%2B9uiwCymbQ7Mt3RWqiaVAZfp2M1HggLZWEJ0nfrOkYFYzL5ZfyKpMvdqPA1WLgGorOzE7I%2FttKGUjum7D53Uafvqpz8q8BatZL9gOLUPspzMRE471Vq5acNQ164DUAz6udLr6y6C2YSyabq4XN%2Fq2Khu4WusVLuIqlicmF4jNVt5N9U7GOqd7XO86FcbQ3qWKBnzmyTRdqwYQRCeKW%2F%2F%2FBwhBBsRnsRg4pw%2FrP77Gdp6Vwa7x3zve5eyqN8Y6UcqCwOyC%2BkGkliX73lnrW7kAJAR6zNr2cgaTlv%2FPCy8YLGT2haMGxndzULsUXCwpNvvPmcb2RdT4i1cq3recxEkilrKNOCNxf2PQ9fdtkdUWbcBnFyvx2bWhELHZaZCukCH6qRj3JbowPKTgpeT10NeLbaTVy20q5eL63Uk0pe7%2B8pc2ZwoRPbXSYB6cEzjd%2Fw%2BPUwcCg%2B0eH4L6zl3K%2BPTp2SPdN5HRAGofg%2By6%2BSNoGcCWlBH3COptl6fBKL6uOQf2o%2B0PcEn7gNxYKQt%2FMHq4%2FwIBMexGowCK0lJWYTttQKfn0ya6yaxUgIPgCtkF%2FltaflERRdYo3t3MIyfn8AGOqUBTpmVyER6neiKJy7UYtaZaAmr7flWss5ik%2BQfzGURFDgnkXVuloss6QZZWGhb3QZIeu7Dkuzg44gOhwaja6pyJzy1WsyEgTMDNLrd279AHNF6w%2FhR7VZETdw3111QFf7S%2BWNJeGYh3wMtF2GM5p48vmoub9cDqbNcdKQOO904NdPuXw%2FoSVEbOvgLR4Y%2FlFCVcC4SJqWu3TkQnJgaHYEB9nU1MRUb&X-Amz-Signature=8975f1401e765afc7b6860a08e7957593e91927afe842888ce8fa73cdd833d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQQ5PD2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFGr33vuAU16y37KYXedzccbdc0I2cknUQ0VRTgU2PcXAiEAy0oO6ydvgI7y6j2Z5D%2Bo53gg%2Bcb674L6ptV6iTYQt%2B4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuNWFte5ZFTYSmyYCrcA7XP5Grqmd%2FP8i%2F2jjKGo9ViFinZi8yghjQjM7BmRoDqa88V%2B9uiwCymbQ7Mt3RWqiaVAZfp2M1HggLZWEJ0nfrOkYFYzL5ZfyKpMvdqPA1WLgGorOzE7I%2FttKGUjum7D53Uafvqpz8q8BatZL9gOLUPspzMRE471Vq5acNQ164DUAz6udLr6y6C2YSyabq4XN%2Fq2Khu4WusVLuIqlicmF4jNVt5N9U7GOqd7XO86FcbQ3qWKBnzmyTRdqwYQRCeKW%2F%2F%2FBwhBBsRnsRg4pw%2FrP77Gdp6Vwa7x3zve5eyqN8Y6UcqCwOyC%2BkGkliX73lnrW7kAJAR6zNr2cgaTlv%2FPCy8YLGT2haMGxndzULsUXCwpNvvPmcb2RdT4i1cq3recxEkilrKNOCNxf2PQ9fdtkdUWbcBnFyvx2bWhELHZaZCukCH6qRj3JbowPKTgpeT10NeLbaTVy20q5eL63Uk0pe7%2B8pc2ZwoRPbXSYB6cEzjd%2Fw%2BPUwcCg%2B0eH4L6zl3K%2BPTp2SPdN5HRAGofg%2By6%2BSNoGcCWlBH3COptl6fBKL6uOQf2o%2B0PcEn7gNxYKQt%2FMHq4%2FwIBMexGowCK0lJWYTttQKfn0ya6yaxUgIPgCtkF%2FltaflERRdYo3t3MIyfn8AGOqUBTpmVyER6neiKJy7UYtaZaAmr7flWss5ik%2BQfzGURFDgnkXVuloss6QZZWGhb3QZIeu7Dkuzg44gOhwaja6pyJzy1WsyEgTMDNLrd279AHNF6w%2FhR7VZETdw3111QFf7S%2BWNJeGYh3wMtF2GM5p48vmoub9cDqbNcdKQOO904NdPuXw%2FoSVEbOvgLR4Y%2FlFCVcC4SJqWu3TkQnJgaHYEB9nU1MRUb&X-Amz-Signature=13aa7c991b9bc47a704e75c1819a8953177fa418b8a826d3ea21bf095f186a95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNC5CA22%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIHDS1%2FKqZD8NRg0plLDPNtVglOWZgB3RqEspZqYndtbLAiEAuO%2FVkrCa9%2FzM%2BHX4kxs%2FmdDWiuq1S7BeKCvyBTp2TnoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs4d%2BHGxT%2BYVl93fSrcAzTr7sxme2TWPndGIcS%2FkCTdyvJ2gfPI9lSYW0EJWA8ahF7nXjeVHfJWHldrvUaYlmOlO2Cj4rVVURR8b2TVugqhG20dCgyGNaoCNj0XeLqKYkPBpwJqdd6VlaA810w1ujdo0PXS1WM0NQTiuDhI2N1%2FCMg1xeFuXZeHycASZ%2Fdv%2BaOo4MlWt6pxPwYEznMHThqKjetoA7zOJEfTmuhe2tQMO1iqqvC8olM2UaPk0zh4w0CKxYCFtAPZpjh4o7H%2Fbn2tU2V7RM6HpYnpROYv2w3%2B0j9GtdMcHPx4Ygwv78zqrUAFqbHtnWXm0UdpqCE9O9rgwey2l9KTRZFMoEdTeZHD1LMGD0cLn0oowUaQgiqM7ECmHrXvK1c6wzrnHOM6Xpg%2FjmX9lF1klp%2FqEkJmx8UM3UHz%2FFnLl%2BaKtGIDwtRr3GeMXRQOoHcU7%2FLG7HBsG%2BQDrRivMCqgscogC7L7n8K9Kl5ynp9qjcoJjcoxmCvW2ax3dii7T4EPNwxiWUQ%2FI7j2j4uNpuOaNsJeFZBJgZSPN2m6bW76dJsZ8LXVeQDO%2B%2Fn7cGt7mRUGBuV5q9kxHWe1QOANhYdae5xKfCgwKQqHexX9oKvybRvo%2FkTTiSJSpAx0Y9ABcCcZtxO%2BMMefn8AGOqUB4dncpYDk6BJu5k0LhhC1PvC6ajOkxhLvZm3Y7%2BqhYYaBK95h6YFJ3oDds7tEQIXDjb4MLw%2Fvdf%2BSnd1cLH8WO%2FHqimudgF7epivFveFnAj7M%2F8ScurlGQnjj6JLad0lytpoQKn1I759mHYQ0p7Wi7NztJb45s8Z4bGAveebHvBA9qu8V4UMCsjzdts%2Btc06SFDJL1AmXbRRqaHskrpPCw9lYkck4&X-Amz-Signature=cbf4687353d5e808ff27aa5555d3885dd868994e4a687f3a3b2215773b6e1671&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664562QBTO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDabN%2FOEKIWOVx4fTsWPTYu04f6e2wiHNpwl5xS6183ywIhAM%2FgXCxiOkNNOxbGxbdV0JXZO71Sm8q3Ye4TAvY4nxBHKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3nlV%2F3RKRc%2Bb%2BKCsq3AOmwKC4gA9loCEZDx2aXoulNs2kOCiLSlSpYlHDNPHVaQZAI%2B8zOawV4S%2FvePGasab82h0%2BXPBIS1ATqbKycbYuxmwMUPs%2B4j%2BuafYsVFpa0Wfk1iWrjKkMXcD0gB%2BY0YTRVAyDoJWUaURym4%2FvCfA5c%2FTtTImyG1%2FgYIwAaSISclnjkh4x5kNI30zFo0hEIN0NUI7HaSk3NkIqYD5HKUBdFMIvYIi9oCOLwY3HcQ1xwubGF0Nuo6eQDQFYZThMJPAmlmxNfS4lri%2FpkSJK8ibHyGwjrtvIMxaQC6zsUBVQ36eUFxHHVZsX1FWS%2BUb%2BnxiFCyc9qhJ5QBxH5scybpmXxlqueNhrS1%2FEax1BQOJKdAcfR4fppAv2jlkz0ruY0BslaFVZf8p9OJqpxtVLEDJQxepiSAqUywHRxF2JtNP%2F%2FU5aWUcOWsz8IeuQIi6g5NeveAbxD%2BbAlcETjRTdptPJ4jLp%2BGILL3qnNGCgga9CmovX0m3sk%2BeDCiFwW3RHx0T76CplxB6aZ09zwcDXc8a2yNNdhNcUhIx3u9M1P3AmT1TGMjH6aj6fqbm4nyGH4Viy3j4XQe2tC4%2BmhGZl4%2Bvb6VuBYsZk6%2FpDACDxUTx%2FWihMsD8eRIqpbZkMrDCUn5%2FABjqkASQffM9W7JFOS0LmNL8UovoW1xiQuBGvzpWWjDIWW0Z6feOCxxh5F%2BnDbOdcZz2HaDBoBG%2BrXVBC%2FwW2Ikg8iMvrnNWW5jAsu2aDbDjYHUhNHPY2mVo1wdVzvcKXEG1QjLwGxTssEuWBQsKhPdGqfyn2gJPxz41EruzzFKJLdii2ZiTO%2Fknc6ork8L2V5jHcR8JYrbTY7KQxNav3Oa52a42fkrTC&X-Amz-Signature=547d595d487cb43be4eac2522dfc0091f10175ba21568f7b055d4444ef354ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQQ5PD2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFGr33vuAU16y37KYXedzccbdc0I2cknUQ0VRTgU2PcXAiEAy0oO6ydvgI7y6j2Z5D%2Bo53gg%2Bcb674L6ptV6iTYQt%2B4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuNWFte5ZFTYSmyYCrcA7XP5Grqmd%2FP8i%2F2jjKGo9ViFinZi8yghjQjM7BmRoDqa88V%2B9uiwCymbQ7Mt3RWqiaVAZfp2M1HggLZWEJ0nfrOkYFYzL5ZfyKpMvdqPA1WLgGorOzE7I%2FttKGUjum7D53Uafvqpz8q8BatZL9gOLUPspzMRE471Vq5acNQ164DUAz6udLr6y6C2YSyabq4XN%2Fq2Khu4WusVLuIqlicmF4jNVt5N9U7GOqd7XO86FcbQ3qWKBnzmyTRdqwYQRCeKW%2F%2F%2FBwhBBsRnsRg4pw%2FrP77Gdp6Vwa7x3zve5eyqN8Y6UcqCwOyC%2BkGkliX73lnrW7kAJAR6zNr2cgaTlv%2FPCy8YLGT2haMGxndzULsUXCwpNvvPmcb2RdT4i1cq3recxEkilrKNOCNxf2PQ9fdtkdUWbcBnFyvx2bWhELHZaZCukCH6qRj3JbowPKTgpeT10NeLbaTVy20q5eL63Uk0pe7%2B8pc2ZwoRPbXSYB6cEzjd%2Fw%2BPUwcCg%2B0eH4L6zl3K%2BPTp2SPdN5HRAGofg%2By6%2BSNoGcCWlBH3COptl6fBKL6uOQf2o%2B0PcEn7gNxYKQt%2FMHq4%2FwIBMexGowCK0lJWYTttQKfn0ya6yaxUgIPgCtkF%2FltaflERRdYo3t3MIyfn8AGOqUBTpmVyER6neiKJy7UYtaZaAmr7flWss5ik%2BQfzGURFDgnkXVuloss6QZZWGhb3QZIeu7Dkuzg44gOhwaja6pyJzy1WsyEgTMDNLrd279AHNF6w%2FhR7VZETdw3111QFf7S%2BWNJeGYh3wMtF2GM5p48vmoub9cDqbNcdKQOO904NdPuXw%2FoSVEbOvgLR4Y%2FlFCVcC4SJqWu3TkQnJgaHYEB9nU1MRUb&X-Amz-Signature=8ff3a3b43264afbf99717a426228b31f88dfb7affbb715c2d15e1535afb96678&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
