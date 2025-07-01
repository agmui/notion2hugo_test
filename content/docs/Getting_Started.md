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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNXX6MR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfbZBewC%2B7czQP37IJvRxX4Sw%2FgQ8qr%2Bu4VkwP2wmWmAiEAmqAkJLK8yg72wynJdFcXLgQ4rmd90RY294AbpFbxOGAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhL0zApcuqgNDY%2BRircAz8VDRl8%2FetmGPNcKGeA3nNgyQZUgLM9n%2BEhn%2B%2BrUwYaqijic5TjSTZYoHkbTr87kQJJ3WTfjh6B%2BXBQDUwoMIINOAkUWbiJ73hhA00hF9y1A2IwK2oH8mJ1mmkkiYmQzQF8MOfiAxU4II7FjMT%2BFao1pidY6NCdplnJ3E7XiQttaHRbPbmnEeJZNtBX1ZGrOBkjIOugsaN0xBejPT2ZZ%2BhfUWFUVstQa5PB1j%2FmyWP2y8Y6TFSFeMOAilFwQSdkIQBstftigc%2F%2B%2FN2wQf4zRaFoA7T%2FbUbUkaL5N5bYsbqhBR4vwb%2FK9OS2M3KfAIQKpEcwDSwWTCsA%2B5Oo59a52%2FEULUwtNbMAEWV5uY0JWFLCJoCcMzGkLplpPXPeUQqaOIJaJUMC223WYmyPstDcfJSl08w3XGE%2FAzLtN5Hfn94u0X4%2FT0tJaGvrGDd14ztlwd2qEXrFGUWBNIxypoSaIB8dbnwsnuQbQDq7efagPXyjz7utG%2F8pCliwbYzW9IEadyb9rRSA5RweAnxvL4QqFq1B4aEXrma5AnQQ2jXSXlEwl%2F8HZpA3McJ3SagKbtbVnMCaPn3knD%2ByjOpHJVDNcs%2BmMkBwp7M3Qk4S2hG4NwT6T4eT14tm8V3CamzaMM%2Faj8MGOqUB6dFLehjnacgNn14elsDzVMqV%2BQFG2eOHjgXAn4bB8r%2BbS%2BGup9%2FZrCfXQSRhSTLWLTRJiPM1wWeffwJVsLQ74HjYnwdJ9NJoKQh4WCjWZLf20xuoZEJOfFkfSeDlWkpGWxwCcvbbw9aPzIQw2I%2B8LYCaG6GIom0gj%2BPZDTKE0FvtBYFBr4GM%2BJi%2FH%2Bh2pqmo6DoZfoOe0uvOIDmlZ702KW0rC7nn&X-Amz-Signature=e5492b14fedfeab90bea347bca99fa016696063f6d2b9052215137e9dd3ae8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNXX6MR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfbZBewC%2B7czQP37IJvRxX4Sw%2FgQ8qr%2Bu4VkwP2wmWmAiEAmqAkJLK8yg72wynJdFcXLgQ4rmd90RY294AbpFbxOGAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhL0zApcuqgNDY%2BRircAz8VDRl8%2FetmGPNcKGeA3nNgyQZUgLM9n%2BEhn%2B%2BrUwYaqijic5TjSTZYoHkbTr87kQJJ3WTfjh6B%2BXBQDUwoMIINOAkUWbiJ73hhA00hF9y1A2IwK2oH8mJ1mmkkiYmQzQF8MOfiAxU4II7FjMT%2BFao1pidY6NCdplnJ3E7XiQttaHRbPbmnEeJZNtBX1ZGrOBkjIOugsaN0xBejPT2ZZ%2BhfUWFUVstQa5PB1j%2FmyWP2y8Y6TFSFeMOAilFwQSdkIQBstftigc%2F%2B%2FN2wQf4zRaFoA7T%2FbUbUkaL5N5bYsbqhBR4vwb%2FK9OS2M3KfAIQKpEcwDSwWTCsA%2B5Oo59a52%2FEULUwtNbMAEWV5uY0JWFLCJoCcMzGkLplpPXPeUQqaOIJaJUMC223WYmyPstDcfJSl08w3XGE%2FAzLtN5Hfn94u0X4%2FT0tJaGvrGDd14ztlwd2qEXrFGUWBNIxypoSaIB8dbnwsnuQbQDq7efagPXyjz7utG%2F8pCliwbYzW9IEadyb9rRSA5RweAnxvL4QqFq1B4aEXrma5AnQQ2jXSXlEwl%2F8HZpA3McJ3SagKbtbVnMCaPn3knD%2ByjOpHJVDNcs%2BmMkBwp7M3Qk4S2hG4NwT6T4eT14tm8V3CamzaMM%2Faj8MGOqUB6dFLehjnacgNn14elsDzVMqV%2BQFG2eOHjgXAn4bB8r%2BbS%2BGup9%2FZrCfXQSRhSTLWLTRJiPM1wWeffwJVsLQ74HjYnwdJ9NJoKQh4WCjWZLf20xuoZEJOfFkfSeDlWkpGWxwCcvbbw9aPzIQw2I%2B8LYCaG6GIom0gj%2BPZDTKE0FvtBYFBr4GM%2BJi%2FH%2Bh2pqmo6DoZfoOe0uvOIDmlZ702KW0rC7nn&X-Amz-Signature=13961cf1828d32f6d83159e326b5ae38f8a8b9063c4d1982e7910df93af36573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNXX6MR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfbZBewC%2B7czQP37IJvRxX4Sw%2FgQ8qr%2Bu4VkwP2wmWmAiEAmqAkJLK8yg72wynJdFcXLgQ4rmd90RY294AbpFbxOGAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhL0zApcuqgNDY%2BRircAz8VDRl8%2FetmGPNcKGeA3nNgyQZUgLM9n%2BEhn%2B%2BrUwYaqijic5TjSTZYoHkbTr87kQJJ3WTfjh6B%2BXBQDUwoMIINOAkUWbiJ73hhA00hF9y1A2IwK2oH8mJ1mmkkiYmQzQF8MOfiAxU4II7FjMT%2BFao1pidY6NCdplnJ3E7XiQttaHRbPbmnEeJZNtBX1ZGrOBkjIOugsaN0xBejPT2ZZ%2BhfUWFUVstQa5PB1j%2FmyWP2y8Y6TFSFeMOAilFwQSdkIQBstftigc%2F%2B%2FN2wQf4zRaFoA7T%2FbUbUkaL5N5bYsbqhBR4vwb%2FK9OS2M3KfAIQKpEcwDSwWTCsA%2B5Oo59a52%2FEULUwtNbMAEWV5uY0JWFLCJoCcMzGkLplpPXPeUQqaOIJaJUMC223WYmyPstDcfJSl08w3XGE%2FAzLtN5Hfn94u0X4%2FT0tJaGvrGDd14ztlwd2qEXrFGUWBNIxypoSaIB8dbnwsnuQbQDq7efagPXyjz7utG%2F8pCliwbYzW9IEadyb9rRSA5RweAnxvL4QqFq1B4aEXrma5AnQQ2jXSXlEwl%2F8HZpA3McJ3SagKbtbVnMCaPn3knD%2ByjOpHJVDNcs%2BmMkBwp7M3Qk4S2hG4NwT6T4eT14tm8V3CamzaMM%2Faj8MGOqUB6dFLehjnacgNn14elsDzVMqV%2BQFG2eOHjgXAn4bB8r%2BbS%2BGup9%2FZrCfXQSRhSTLWLTRJiPM1wWeffwJVsLQ74HjYnwdJ9NJoKQh4WCjWZLf20xuoZEJOfFkfSeDlWkpGWxwCcvbbw9aPzIQw2I%2B8LYCaG6GIom0gj%2BPZDTKE0FvtBYFBr4GM%2BJi%2FH%2Bh2pqmo6DoZfoOe0uvOIDmlZ702KW0rC7nn&X-Amz-Signature=ea0cc87ad4239443c895b3791a331411108bf4372c1493841661ff49591c0e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JG62CIB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2uTrXmo6gp3VpGzV%2FiZ5eBnawaxDI2sTr9FeCgMJT1AIgSpZXh0YxuoM1yEk%2FpC%2BTzqXifi3Ng3IH6taY6u4H3MsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNO3jbG3Ri24gy%2FiyCrcA%2BBElNKBZKwJiaGEjz9sbro65Pzu7goUb4lHmM3oA87BH%2Fd6UojJ7zuEoEojZ%2F6GEgXU6OE%2F04TRLM0rmp57UO4YiKsvJMF4PCSaORzTjNfHaY0uqLPWtCi8KUzH1pRZXLvqu0273o6w2fUKadB4VM62f7VYrakA7rbOfrpQcLf7vefc91liT0hHAqVtJ7Q9pphV2Kxlxdop1UhhwctzcfjHcN45Tf4augMRiQo7tg0QImpSvYh0bq4m4avJ4mW%2Bt3qXIvRGwqSwwkmgR%2BKOIfgaPAQkZi1iNDXwmjXfhynz6x1Hl%2Bzt4qpyDL%2BJGsActvt0CUDHTzob7O%2BSNA%2BeY8tNhmNvlU4s3AysVTvKTgAYLVT2mvjthLdaznfdEfDGCP70o5ZYNfm0z43bBT%2FgXDZje3WcDt9vscfWPT6M8pArbrSdAOUBCkn5rOZWVTh0iNqTpcRmaChkKOtU09M0Z6r1EfNys49aG%2Bf6jc%2BwFfELhe14woUwtD%2FSK0Al3cbBOQBVxxMfYS4ILWGIf60ln4ayDdU%2BiRj1ckX6%2BcFZW6cFIA4dcIN%2B%2F7HZ%2FX5Qd8k2FVT5NBuR2iMPe%2F%2FN9Z1vfA%2BpJ66a2ExpkBCvz%2FRZei30P3NMCtrK1e4WWKSZMOfaj8MGOqUBEMcE4T0lzp32sDptRTdPUiGqCXzvSIDIKAR%2BaSekp8Xe8o1N1aKsuC0COvvhhsXgo6%2FkCss2A5x1as1Q1qTFTNYJqd6LitekdMnRXOVJTFePxvdB43iSny8mypqLsyW%2FDizDB%2FjB0ARoJwrpOsSgPdEWmkoLuc10kdwNMff3pBV1%2B9AqBdiZT8TX%2FRPZrZAVMsFWr%2FeEFmH%2Fac8pM5d89NzdXYWC&X-Amz-Signature=1a2ca0bf05447cf6691cbc03bb1be5cb821d3f56cc3b8c3567d2f75defb7f5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VST33VEC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWm0v4QHw1g%2F3IKI7MI2sb8EQu8msZqRQ9F%2BwUjCSrMQIgFBw9SlmPOnUffuse5ANpHENB7%2By43%2BybIynbRSfJRWQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzdkS0KAS%2Fk9HGOwSrcA3kYQObXNtCdZmJCWCKy5WWCD%2BM8XMoPiXHKkzotP7o5D2nggXBKl0d2R7u9FN2NDwuXVj%2F7tGUWlrCgkPlmqrgpwrIekFpAKYc6ESEkmbKGPQ2po8mM2KkXzgeM6qJSx0ObX3etv60su2sngXGVhgJpzwfzs5M7unNm4iBxkPmD%2Fdc7x5UR5gPwJn0sNjhc%2FzdNBAOJkDajAE3EDABAz7QsBSnGiKngIuUY6qIY5ZeloBU5vTPBNO0z2cYhk2zPfGszpl7dAK6Qwd6CtLqSi%2FrF1%2Fyj4s%2BKOKyAW3glMOo7BYtaiSy46H%2F1396%2BgBU%2BkTKBloEGxCBsxxSjpTQxGXAdV3OvXELICE%2BJ8qX%2FsWzBFPjtrEFH5wgBYHZfCxSidJAv4oT%2FMkCnyR9h4T%2Fgi5n20Znc3ZW%2F1nlXABMGuV3neTI26bUfmXOaPgOnPfcIzHoo%2BF2vT8NAjNQB65qKKW1cAnvVLxPo3fAfwYKACJMwOhtlXFKduL8v2xm3Ghc6kj1L%2F8c5mTX2qadQXWrspZYDn%2FPyDG1%2FyWaqNZ7dKBRE%2BKSZo5vrTIT7BhViR4pWvfF0LCAELFWvbBYhRpWoCBFzRcBvnwleXmk2%2FcvdAJyzmoQwOiCbxjEDBi0aMP3Zj8MGOqUB8%2B7gnAD8WWNhrY5iQi9yDY6fFt%2Bv%2B8G6aMSrpKyAbWFzOH7sk2%2BGynApstJT%2FVBSLsS6gvi%2FPQAJyQ%2BUyMcUp%2FzRS9RKPOQMz%2F9H7N%2BqZNSSL3JW6YkGhDKYTf5xoBruaRGFCF6mzWPPh1yi3P4Y0i8%2BJRR3w9NzmhXXZsxLGrYIjlt0aX5oit6NsDFRgm2LylA1mMM7Bq0UEP9skdT3x42IXcgN&X-Amz-Signature=14a08745ee7b2e81f9aa44dc221c287a4825ecec63407beda41b1956825d3717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNXX6MR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfbZBewC%2B7czQP37IJvRxX4Sw%2FgQ8qr%2Bu4VkwP2wmWmAiEAmqAkJLK8yg72wynJdFcXLgQ4rmd90RY294AbpFbxOGAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhL0zApcuqgNDY%2BRircAz8VDRl8%2FetmGPNcKGeA3nNgyQZUgLM9n%2BEhn%2B%2BrUwYaqijic5TjSTZYoHkbTr87kQJJ3WTfjh6B%2BXBQDUwoMIINOAkUWbiJ73hhA00hF9y1A2IwK2oH8mJ1mmkkiYmQzQF8MOfiAxU4II7FjMT%2BFao1pidY6NCdplnJ3E7XiQttaHRbPbmnEeJZNtBX1ZGrOBkjIOugsaN0xBejPT2ZZ%2BhfUWFUVstQa5PB1j%2FmyWP2y8Y6TFSFeMOAilFwQSdkIQBstftigc%2F%2B%2FN2wQf4zRaFoA7T%2FbUbUkaL5N5bYsbqhBR4vwb%2FK9OS2M3KfAIQKpEcwDSwWTCsA%2B5Oo59a52%2FEULUwtNbMAEWV5uY0JWFLCJoCcMzGkLplpPXPeUQqaOIJaJUMC223WYmyPstDcfJSl08w3XGE%2FAzLtN5Hfn94u0X4%2FT0tJaGvrGDd14ztlwd2qEXrFGUWBNIxypoSaIB8dbnwsnuQbQDq7efagPXyjz7utG%2F8pCliwbYzW9IEadyb9rRSA5RweAnxvL4QqFq1B4aEXrma5AnQQ2jXSXlEwl%2F8HZpA3McJ3SagKbtbVnMCaPn3knD%2ByjOpHJVDNcs%2BmMkBwp7M3Qk4S2hG4NwT6T4eT14tm8V3CamzaMM%2Faj8MGOqUB6dFLehjnacgNn14elsDzVMqV%2BQFG2eOHjgXAn4bB8r%2BbS%2BGup9%2FZrCfXQSRhSTLWLTRJiPM1wWeffwJVsLQ74HjYnwdJ9NJoKQh4WCjWZLf20xuoZEJOfFkfSeDlWkpGWxwCcvbbw9aPzIQw2I%2B8LYCaG6GIom0gj%2BPZDTKE0FvtBYFBr4GM%2BJi%2FH%2Bh2pqmo6DoZfoOe0uvOIDmlZ702KW0rC7nn&X-Amz-Signature=0da7326a33d9e1b2cf2ef4216d8f5e09cefc5c5c5281e9734fe9cf86c6ea6ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
