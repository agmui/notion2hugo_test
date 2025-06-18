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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJVPL3U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCzUJUvSFoGNSuFR8eR0il%2F%2F2v7BZ9zAYcZkbkROI3YQIhAK%2BoWLRhWO%2FWB83CsTX7Oxi8YkQBaj01BLA%2BRa2GWTjFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnhWzHt7N1NEQucG8q3AMP81Bwn0DNUa22hmZEGH6zbYz3kiDPUgSQhb%2Bgu0ldeqXqxR4t%2FBw%2BvmoXFofu1j%2BEhUCwCsld9P5H62Rz2BEwp9BpHYYPsB76ZgK%2FljrZUA7McaMNaQfpAneOK3pVuOIqdEiMTI44eK%2Bb26S%2FyFSPxNCDK%2FWILLi6OKY%2BU9ddTCTF8EzvPbQe1dwbpd2c92qbVdAfbBtLkcshrXUs4CaoMu8Bug0u%2BNaIncinfibbxWdN1r3AAa6v2gfZy5FzdZ%2BWF0enNFsq5iQnecH20pYFhTusKuKGWgW3%2BSNdIE861Psytq3Jge2YIQJ05JnwESXAneX09AQBIF8HdON6dtawoc91JGkg7qWwbU9hdSWpKzVrTnvrKugG1N06tQbcLCbsp4y1bTA5wIgclys5wcyM4MWP8HAwumDJgBRgHKlF%2FRjKccnuwL0kWBA6%2Bo68yo%2ByOUC2%2B1akH5BR%2BcO4prK28CcR5ZQqBS4mw7R0LA4mz9OEymoSbYl0rqoY8foSpkXYgFHa7VoKgX6F8eWHI6SpB%2BbYMjeOTXiDXmdgFYFObiRqxxCUYSGMBpwXH152nfB5b%2FOR7Gdtpp0PWETagH%2B2RghkE9lwiOapXG0qZAhrR2fJgRm8rr2P1DjFcDCL9MrCBjqkAeJiHO8aoQSn5ScnQ2nNBPfZOYxVENRqkfXZu9z3WSwue5oi8nmJrhm9lCtv0Cf6TsVYe9weZwhNzEZdvdWD2D7wAgkKfDXuyZpuuejU9HIKl0h%2Fd2YXJWg2%2Ff6DX3JCsaALthI9W8Vb7vcy82%2Be1f7cOwcHlV447IsyTVFwgBs4gXtDJleScvHGwpSxTEpYI2PYDD43cm2dCbNtUzx54nNggnOQ&X-Amz-Signature=1d86cb34f9a290c66955edacba161df24a316bf0bbc2403b8e5204e7a5368b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJVPL3U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCzUJUvSFoGNSuFR8eR0il%2F%2F2v7BZ9zAYcZkbkROI3YQIhAK%2BoWLRhWO%2FWB83CsTX7Oxi8YkQBaj01BLA%2BRa2GWTjFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnhWzHt7N1NEQucG8q3AMP81Bwn0DNUa22hmZEGH6zbYz3kiDPUgSQhb%2Bgu0ldeqXqxR4t%2FBw%2BvmoXFofu1j%2BEhUCwCsld9P5H62Rz2BEwp9BpHYYPsB76ZgK%2FljrZUA7McaMNaQfpAneOK3pVuOIqdEiMTI44eK%2Bb26S%2FyFSPxNCDK%2FWILLi6OKY%2BU9ddTCTF8EzvPbQe1dwbpd2c92qbVdAfbBtLkcshrXUs4CaoMu8Bug0u%2BNaIncinfibbxWdN1r3AAa6v2gfZy5FzdZ%2BWF0enNFsq5iQnecH20pYFhTusKuKGWgW3%2BSNdIE861Psytq3Jge2YIQJ05JnwESXAneX09AQBIF8HdON6dtawoc91JGkg7qWwbU9hdSWpKzVrTnvrKugG1N06tQbcLCbsp4y1bTA5wIgclys5wcyM4MWP8HAwumDJgBRgHKlF%2FRjKccnuwL0kWBA6%2Bo68yo%2ByOUC2%2B1akH5BR%2BcO4prK28CcR5ZQqBS4mw7R0LA4mz9OEymoSbYl0rqoY8foSpkXYgFHa7VoKgX6F8eWHI6SpB%2BbYMjeOTXiDXmdgFYFObiRqxxCUYSGMBpwXH152nfB5b%2FOR7Gdtpp0PWETagH%2B2RghkE9lwiOapXG0qZAhrR2fJgRm8rr2P1DjFcDCL9MrCBjqkAeJiHO8aoQSn5ScnQ2nNBPfZOYxVENRqkfXZu9z3WSwue5oi8nmJrhm9lCtv0Cf6TsVYe9weZwhNzEZdvdWD2D7wAgkKfDXuyZpuuejU9HIKl0h%2Fd2YXJWg2%2Ff6DX3JCsaALthI9W8Vb7vcy82%2Be1f7cOwcHlV447IsyTVFwgBs4gXtDJleScvHGwpSxTEpYI2PYDD43cm2dCbNtUzx54nNggnOQ&X-Amz-Signature=81ce92e042bffd23773217ef55394ed1cee5fb044086f0414d4e75888022c9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJVPL3U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCzUJUvSFoGNSuFR8eR0il%2F%2F2v7BZ9zAYcZkbkROI3YQIhAK%2BoWLRhWO%2FWB83CsTX7Oxi8YkQBaj01BLA%2BRa2GWTjFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnhWzHt7N1NEQucG8q3AMP81Bwn0DNUa22hmZEGH6zbYz3kiDPUgSQhb%2Bgu0ldeqXqxR4t%2FBw%2BvmoXFofu1j%2BEhUCwCsld9P5H62Rz2BEwp9BpHYYPsB76ZgK%2FljrZUA7McaMNaQfpAneOK3pVuOIqdEiMTI44eK%2Bb26S%2FyFSPxNCDK%2FWILLi6OKY%2BU9ddTCTF8EzvPbQe1dwbpd2c92qbVdAfbBtLkcshrXUs4CaoMu8Bug0u%2BNaIncinfibbxWdN1r3AAa6v2gfZy5FzdZ%2BWF0enNFsq5iQnecH20pYFhTusKuKGWgW3%2BSNdIE861Psytq3Jge2YIQJ05JnwESXAneX09AQBIF8HdON6dtawoc91JGkg7qWwbU9hdSWpKzVrTnvrKugG1N06tQbcLCbsp4y1bTA5wIgclys5wcyM4MWP8HAwumDJgBRgHKlF%2FRjKccnuwL0kWBA6%2Bo68yo%2ByOUC2%2B1akH5BR%2BcO4prK28CcR5ZQqBS4mw7R0LA4mz9OEymoSbYl0rqoY8foSpkXYgFHa7VoKgX6F8eWHI6SpB%2BbYMjeOTXiDXmdgFYFObiRqxxCUYSGMBpwXH152nfB5b%2FOR7Gdtpp0PWETagH%2B2RghkE9lwiOapXG0qZAhrR2fJgRm8rr2P1DjFcDCL9MrCBjqkAeJiHO8aoQSn5ScnQ2nNBPfZOYxVENRqkfXZu9z3WSwue5oi8nmJrhm9lCtv0Cf6TsVYe9weZwhNzEZdvdWD2D7wAgkKfDXuyZpuuejU9HIKl0h%2Fd2YXJWg2%2Ff6DX3JCsaALthI9W8Vb7vcy82%2Be1f7cOwcHlV447IsyTVFwgBs4gXtDJleScvHGwpSxTEpYI2PYDD43cm2dCbNtUzx54nNggnOQ&X-Amz-Signature=ada352b517da0b86bc16fb9567cc7472f2bd8b04cb76b94a031136464a4fa48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTTPXYO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz8lbLOLzOhYx87BfvZw6Lj%2BgGr6zP5KLkVcM2GC1qDgIhAOaC2FYj9ou4HT1%2FkK4QtRdr9SxCzhfgSzdaB2gl4mciKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZKA8buEnBYRFu304q3AOcEfz%2FS7q9S9XWXTl4imKFCVmTJbLojf6AGCMfft0mPFdX3%2BQXT06sfIK%2F623BGBPcvMfJPNgu8ixkst%2FKsztz%2BhJjHn3R%2FPD%2FnYLucaks%2FqduqrOU5FzvRmt8qshE0ALz%2B8x3R%2Bpr5JADUkUJXd%2Fz68WOJNhmVWejMaxCVn1HBF%2Bb2La3p9%2BoLNhsAPBy7mOVMGcJLs46Bv%2Bsj0MA8DHXbCEJPSiARgt%2F6kYCs5VBxiu1TCNdRtq2WR%2BU%2BCdo97KBxUT7hcXhS5g3UtuAu0ZAuyZn8bpotGP7vdoMpejqxSWMp4N40SzEK7czIDKSuYeUTSspdbMPmy%2FOsmpKlhTUDaCT%2FrUPBqULMFpncjVOeomwvm3thKmliSOIKAYU0vsn4Ojy1G24DGTV61qHPqzNRhgjpW8oJ8LdHV%2BO9MOPBEjmf3AH%2BP%2B8EZcmg7pU%2FEP9dUxVEy3V676w%2F%2B7e2mRGS3ayKCsTktjrm%2BkS3lrmk%2FaXwQFbbmMkT75BvBwRn691autrgMQpe8C7iQBeUegGwlizCgPqn%2FMCNljdayO3alXUV5Um2dPHovvrBfkoayHUHUqVHYlT0raXh4%2B6rlrsM3Pi1n296OZ3W44CsUFkbydSC2XVdFF710mMpDDg9MrCBjqkAZfuj7EnYf87ZMBdm9TCLRsnvVLLqMoLdmHTHkMydh10SY82DaIqpb4H4tkoUTkgXqeJSF0qCIYfRV2ydTYbdDDJiP1XgwPyHGCqJjbzqWmBJDC5H6p1llbwDcRS3cBMskC%2Br%2F8INgqkUA1OCoVU2uKHv4BDbCvMV7sR%2BLA1elIthgPYPeLvjFu5yACj76RpsAIkE23exb669mtCfKvqNhqOqhSl&X-Amz-Signature=6745e45169ba6b3960f339a7a36412c8fad589fe9da93a7bbfb34dea052544b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43WHSEZ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD0R9ldhdbJ00K0DCO%2FWnSHeEfj%2FutLNqtAzjQU8C4SAiBoeUVuAV4EQPgtLGdybkhzxmMIeyVXYJZR9bg4vk411CqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0x175r7uMFWJVYWjKtwDPicXjk5WKokMMrFLz7ylorykxBHlJdb88euvQCyHhzta6mnCPYNvLE2s5JxTaSEREhaOdwtfuku%2BTC9bAgiZL74sUk532Je9UfbzSJTBnyvPqkXE2pd5v4RYPFR6%2FG0FuO8C3SaQJocFkd1rmTctEbWL6EFO1egS3bpVsyLV%2Fy1JAvM2EnSWx%2BmsoYx9TmLIBj8dIUxWtT7R7xVU44DNEitrScV6xXuCgCn5C3GFh1%2F4CIKl6fFpqkNTH2SBJzqIosb%2BtBrcXk%2BFATz8JNSYUjrkZczhMT%2BFGW68oQtZa8oHloJ%2BkJs3uBK%2BJsRaDUYEv3HVhY3IyIEDhcvpVXUuGC89KFjPUA2thwgfCeEeICGxxdhrpsBDYLZT%2BRcMp9R%2B%2F0PuCPL1pdgBg%2FZ8q47wJ%2BnsFux6Pz1hGb3gTvavimfuN99sagxZwR3dLt3%2BN3h1YYBLBGFbsAIAErSdjy2cx%2B8SHeTmaUaO2yWzQNylif920VFdMiYFilKBapIxkBktfv9Su4RrPzmrwtTaTv97mF%2FdzzZtJmoG7kSxx%2F0mr%2Fp5NelbKzbC%2FV%2BUvpgYNqT8pIwiTLA3mFbHqYRhO3G3gl6C2D6QcVkRBnqBeWK1BPQ5npITvS0B%2BR6LTAIwh%2FTKwgY6pgEf9r15fBIaC3QN1aZmQpItjdquKtRjaQni%2Fm8SyJzhiCt1IRff7nwfPSjUTjXYuxUwEqagZnmS%2FziGUPhNSEhGkEroKeQDmrDuhIMw3AhkmFzSkpydEfrAal2TIcVf1Aj5jtO23Tgphent1wtm4qNd7DWzzegZzp6wyV9vugCiNe5zY7BuNjdp7SPytGyeJ%2B6X18Bu%2BCTcMVjP1Z2yqYPq7wEtmqR7&X-Amz-Signature=41cbf9c3d440c7416848f9bbc97c956bdfdf4fd652044bbfaaf323e08bd5992a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJVPL3U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCzUJUvSFoGNSuFR8eR0il%2F%2F2v7BZ9zAYcZkbkROI3YQIhAK%2BoWLRhWO%2FWB83CsTX7Oxi8YkQBaj01BLA%2BRa2GWTjFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnhWzHt7N1NEQucG8q3AMP81Bwn0DNUa22hmZEGH6zbYz3kiDPUgSQhb%2Bgu0ldeqXqxR4t%2FBw%2BvmoXFofu1j%2BEhUCwCsld9P5H62Rz2BEwp9BpHYYPsB76ZgK%2FljrZUA7McaMNaQfpAneOK3pVuOIqdEiMTI44eK%2Bb26S%2FyFSPxNCDK%2FWILLi6OKY%2BU9ddTCTF8EzvPbQe1dwbpd2c92qbVdAfbBtLkcshrXUs4CaoMu8Bug0u%2BNaIncinfibbxWdN1r3AAa6v2gfZy5FzdZ%2BWF0enNFsq5iQnecH20pYFhTusKuKGWgW3%2BSNdIE861Psytq3Jge2YIQJ05JnwESXAneX09AQBIF8HdON6dtawoc91JGkg7qWwbU9hdSWpKzVrTnvrKugG1N06tQbcLCbsp4y1bTA5wIgclys5wcyM4MWP8HAwumDJgBRgHKlF%2FRjKccnuwL0kWBA6%2Bo68yo%2ByOUC2%2B1akH5BR%2BcO4prK28CcR5ZQqBS4mw7R0LA4mz9OEymoSbYl0rqoY8foSpkXYgFHa7VoKgX6F8eWHI6SpB%2BbYMjeOTXiDXmdgFYFObiRqxxCUYSGMBpwXH152nfB5b%2FOR7Gdtpp0PWETagH%2B2RghkE9lwiOapXG0qZAhrR2fJgRm8rr2P1DjFcDCL9MrCBjqkAeJiHO8aoQSn5ScnQ2nNBPfZOYxVENRqkfXZu9z3WSwue5oi8nmJrhm9lCtv0Cf6TsVYe9weZwhNzEZdvdWD2D7wAgkKfDXuyZpuuejU9HIKl0h%2Fd2YXJWg2%2Ff6DX3JCsaALthI9W8Vb7vcy82%2Be1f7cOwcHlV447IsyTVFwgBs4gXtDJleScvHGwpSxTEpYI2PYDD43cm2dCbNtUzx54nNggnOQ&X-Amz-Signature=c4a9b41fc55a42a195df4f57880a3b9f15e2d44fd0a8cbf4434b4aacd6d9180d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
