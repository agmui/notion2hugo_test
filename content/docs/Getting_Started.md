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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLIFKDQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE21MkYgo%2Bz3EK3NAHB7bdXW%2BSBT3t6%2ByiBUnKVR0XBGAiBPr98D4u0JAomo0Ixj8fKc%2Fw79LFoAMcyz%2FoBO1J57PiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgYC8vhSUPXuolS3KtwDi%2Fj8oeYgCZZqwWkYp2fWKHrNgXZ8tLHY7o4C5wj4ZyNrDx91V2mYTraFoXpOFLCqkVBejLTHD4NYHMU2x2VfiMV77zF4FgykcDgk3c4ihhiGJJXilk67RoBTVk8acDv8ghZ%2BaKm710vig5p%2BtyEwdFy5rb2XEHafqenwL2zlKRIMRIxIIrZCEvFMK%2BIcqEG47WTo2QDVWOesCbX%2FMie1x3%2B%2FzaWpDLXnrvkUYzM%2B555eJ9aZwJ0lkbrTyb7ggN8Ui63M1ys4pQaC7i2Rh5xNN9tOJ6Lk1vuitIV%2F0hGflSFHx%2BieMEdjaL5M0Ga9OVDulz3dor4rO1a10gr3r%2BAKVGuLzHSUjm%2B7%2FU64lpHd17evEpyvmUbnWiI3scUVBGe94OBQ3l93JDedcvtlk30CA%2FxkwEMbr%2Bjl49UgRGc%2FO%2BVSqK16qfQqu419dmX3GODN3w2yc8Pbpk7BVaCCR7o95exEiyudPAWZNJE4%2FxdXs%2FzepdLMBo7Mt7FI1aUuUQUxXnfokJopsavWcUSVJ3aBPTFc4fsltCIEGr7vhi4BeRhMZOEDBdS2AHuG1CJA4Y2S4fzz7rb4X0koFDyU6qEEoV%2BzGiDSgmN772odgsSFS2bMxUb1JwRNdjBVrO4wuNz2vgY6pgHIouh4tBbN%2FOIFG2LFj%2B9bK4VpjiZG4AK01mK5vID93QqWKx1lWjirTheqhdbaWM9EZFuZpZOCcxSnMqY0ZT4pvZpdhW9wZI8XPpzJ2ap0tYHMW97zWzmrm7ZPXu%2FOn1Kof8GSEiZexLrJkgyyU1%2B54Aa7GsA2NsYpikpZg6aUm3PUXfJqjMdm680idjZfEV1b8wiSyKjFrBgOxAtK7fhl0%2FtOcqrH&X-Amz-Signature=9bc5bfa36e0324284b030f77718e64314350364973832bd6e120986f5cf5c1e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLIFKDQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE21MkYgo%2Bz3EK3NAHB7bdXW%2BSBT3t6%2ByiBUnKVR0XBGAiBPr98D4u0JAomo0Ixj8fKc%2Fw79LFoAMcyz%2FoBO1J57PiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgYC8vhSUPXuolS3KtwDi%2Fj8oeYgCZZqwWkYp2fWKHrNgXZ8tLHY7o4C5wj4ZyNrDx91V2mYTraFoXpOFLCqkVBejLTHD4NYHMU2x2VfiMV77zF4FgykcDgk3c4ihhiGJJXilk67RoBTVk8acDv8ghZ%2BaKm710vig5p%2BtyEwdFy5rb2XEHafqenwL2zlKRIMRIxIIrZCEvFMK%2BIcqEG47WTo2QDVWOesCbX%2FMie1x3%2B%2FzaWpDLXnrvkUYzM%2B555eJ9aZwJ0lkbrTyb7ggN8Ui63M1ys4pQaC7i2Rh5xNN9tOJ6Lk1vuitIV%2F0hGflSFHx%2BieMEdjaL5M0Ga9OVDulz3dor4rO1a10gr3r%2BAKVGuLzHSUjm%2B7%2FU64lpHd17evEpyvmUbnWiI3scUVBGe94OBQ3l93JDedcvtlk30CA%2FxkwEMbr%2Bjl49UgRGc%2FO%2BVSqK16qfQqu419dmX3GODN3w2yc8Pbpk7BVaCCR7o95exEiyudPAWZNJE4%2FxdXs%2FzepdLMBo7Mt7FI1aUuUQUxXnfokJopsavWcUSVJ3aBPTFc4fsltCIEGr7vhi4BeRhMZOEDBdS2AHuG1CJA4Y2S4fzz7rb4X0koFDyU6qEEoV%2BzGiDSgmN772odgsSFS2bMxUb1JwRNdjBVrO4wuNz2vgY6pgHIouh4tBbN%2FOIFG2LFj%2B9bK4VpjiZG4AK01mK5vID93QqWKx1lWjirTheqhdbaWM9EZFuZpZOCcxSnMqY0ZT4pvZpdhW9wZI8XPpzJ2ap0tYHMW97zWzmrm7ZPXu%2FOn1Kof8GSEiZexLrJkgyyU1%2B54Aa7GsA2NsYpikpZg6aUm3PUXfJqjMdm680idjZfEV1b8wiSyKjFrBgOxAtK7fhl0%2FtOcqrH&X-Amz-Signature=db7267724f5c6b011e7d66701dc1d478f6fccc44bac83bc932faee16a4e6de74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXAEDTF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIH8y1C5NLpM%2BSbo4jzQLmI7QU11vwWgJ6kXzXpfACv9TAiBPCNCjDZxTDmetuIQ7UZw7RjV47K77dCH9WrcFNVVMKyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwaIzcAxSakFQ3bxnKtwDHDEs7%2FVjzETsrSFQvl45xr8t3MOnN5a9G%2FWEW%2FrAtv23GOwb3kZadCHppxOCJPcR8cM3KL3ohCT3tmUJ2Ley7KFMqtQcq2il7euI4haU8yKvdl380pQBDW%2FqndGDXjB4qP%2F8ionr86PCcmVP84PN%2FDfVSoXYci5beLbmAbToPl%2FP8XQ8HsgStRbBHT2%2Fge%2Flk7VzMW6f0HQAkvTGVMfXdLdlawBFbO%2BhwABFLoMVe6LEZ9rICSAK2o7bmwJn2T7uXFHBG2ltQB8Lbi9OQbj%2BKN0%2BPqy0XJbI2Rraclgs5j9Mi7RGGgagVoBUUv%2BmvHK9Qx6tLDKSKWuzW7goNqkhm3hCnY7wl6PsbNL3UJ5thHICIJw6U8LGuFKP8Le4WGugEXSq1Aw2u1UHXlqp8oCzneyXBCLJrIYvqOYrLd8rtUKNC6%2FiK82Bd6qmfrAqL1psf5oEoFZn8ZfLmfech4qYSYa%2B7OxSltSh0CEikGpBkIsVycpXS5J3ew6sx6Q%2BwbTIVEFJSEof6SZIuezpMh9seQj12e29ql5LYUmk%2FkAFenOgn%2Bd%2FIIVnjMzWK%2FLYcYUx0fEfaatyKhcW0vItTBrfuIVifGWNlSnjC8Hq%2BFB2jrFXGQ6tYvLsXDuZfmYwxtv2vgY6pgHe3QOTO030hecyh6S2V1cKug5op6vM2GvWeXd4MsCi7d11mo4upIAZfoWEYNQPVq3uX3wXUb5cplATHI3AEdbQnVTYTvUc%2BDS96dIAV3SFJB54itvOwpjPRcokcMgsp6WUrPhskTBdBh7nVrvMevs0LOZDEoEr7G1wPHPiw5N5dfxpZC6YzqQD624NI4ltw0PM5JpEXPcF6OTjixlGTSgaelCUGrK4&X-Amz-Signature=0b4201bbffe4b94fdfe8de8f22484777f5e5ad284e65b3d5af1da38268b762b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXVWSVEH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDtYN7U3nUVPS58KY1frGUr1rDH7dZslI5sFw0%2Bz1svZgIgRZ6K7SdOsv9J0A%2FEaYmQh4CQEejTZUVal2V3YRcZnGEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDP9sqOCIP0%2FFAbXyrcA%2FN5e4vJCnH62ilNuSg5ZAhn16FmjXvNRMK%2BfanA2kiJA77ggJmcWmEGz%2FR1%2BiCUVl4gV57ETUocyE%2BqHR4cMzxTPIv0DbTKv6IwstReEXHNFcrLwBA9S11A2IoYcG7v1zaQXnoO9IBQ4C4rYbkXChyxFtEkWjVk1YAKjgjdBYyTx787mWRX6NPoNkneVjC9n1hk79X0Z%2BTn5ZHZnAl6hh9jgheVUNU3iH9TpjiKFMcHFuNNVUENLSnstBAqW3kG9uLpHVf36ky%2FIUo07b04oLkcFEpa3v8XNRC%2BAe0piPzN9bf25FR578VRv1EBgsZ3WhRMNuW%2FBGDmsm20bG1KAvSXirgZSPqCxKH5OVSwuWQAj%2BpTNJ2Z2SL6rnU%2Bn8GxJmsm5fLtxvnnEeu8dk2aqf3HBy5E9qwVWTkoO%2Fp07uKVSufV%2BGjUc%2B6XE52Sjx85x7glnisnR3mPrnOAJQXRWD3%2FRCyqXsJZ3Ckk7ekOBlnuzEZS2XAT8acFfzkzXCCdHLyBvRxsURxyAh0MRlHOAJfPujrwDnVktLpR7AKqBFCTwvBPymMphmh0VBOSOqhAueNniCqPgciajKv7V04VsugweJ%2FPq9JLKeMpiPiuPhYHgpVrS9GBU9quvhz2MKzb9r4GOqUBaiiqQIlEqqv9clyeFFhoa8M7nnjq77KMUHXazV%2Bvykx9S2bxY8kX559uyOn9rhQeJG3fj3VjTXUZ3cB2cjUmEBKN%2BCL8bvCtzmS1QcyQcsVnAx8lYv2w2kZzOAdAe0oGW%2Fk%2BGF98vkt4ouA6oGQjWianhHYCMIXYcDOVCmn18x5v7R0mZacQaK8dft43YB5jbzqHlry1FAHnwbr9ZtrXrQ%2FQvVwf&X-Amz-Signature=381d56ee91c99c560545ae0b8daa55c27a9d771f704c11b5b0e4c809d773a77c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLIFKDQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE21MkYgo%2Bz3EK3NAHB7bdXW%2BSBT3t6%2ByiBUnKVR0XBGAiBPr98D4u0JAomo0Ixj8fKc%2Fw79LFoAMcyz%2FoBO1J57PiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgYC8vhSUPXuolS3KtwDi%2Fj8oeYgCZZqwWkYp2fWKHrNgXZ8tLHY7o4C5wj4ZyNrDx91V2mYTraFoXpOFLCqkVBejLTHD4NYHMU2x2VfiMV77zF4FgykcDgk3c4ihhiGJJXilk67RoBTVk8acDv8ghZ%2BaKm710vig5p%2BtyEwdFy5rb2XEHafqenwL2zlKRIMRIxIIrZCEvFMK%2BIcqEG47WTo2QDVWOesCbX%2FMie1x3%2B%2FzaWpDLXnrvkUYzM%2B555eJ9aZwJ0lkbrTyb7ggN8Ui63M1ys4pQaC7i2Rh5xNN9tOJ6Lk1vuitIV%2F0hGflSFHx%2BieMEdjaL5M0Ga9OVDulz3dor4rO1a10gr3r%2BAKVGuLzHSUjm%2B7%2FU64lpHd17evEpyvmUbnWiI3scUVBGe94OBQ3l93JDedcvtlk30CA%2FxkwEMbr%2Bjl49UgRGc%2FO%2BVSqK16qfQqu419dmX3GODN3w2yc8Pbpk7BVaCCR7o95exEiyudPAWZNJE4%2FxdXs%2FzepdLMBo7Mt7FI1aUuUQUxXnfokJopsavWcUSVJ3aBPTFc4fsltCIEGr7vhi4BeRhMZOEDBdS2AHuG1CJA4Y2S4fzz7rb4X0koFDyU6qEEoV%2BzGiDSgmN772odgsSFS2bMxUb1JwRNdjBVrO4wuNz2vgY6pgHIouh4tBbN%2FOIFG2LFj%2B9bK4VpjiZG4AK01mK5vID93QqWKx1lWjirTheqhdbaWM9EZFuZpZOCcxSnMqY0ZT4pvZpdhW9wZI8XPpzJ2ap0tYHMW97zWzmrm7ZPXu%2FOn1Kof8GSEiZexLrJkgyyU1%2B54Aa7GsA2NsYpikpZg6aUm3PUXfJqjMdm680idjZfEV1b8wiSyKjFrBgOxAtK7fhl0%2FtOcqrH&X-Amz-Signature=37ac0858da5bba3b25a44680abf3c29ce267ab9b83933cfaacba7db0cb3cc983&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
