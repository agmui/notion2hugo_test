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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZF4RDKH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRaFtegTat%2FrDvOISuRY1xkFWbqIUjVKTND2HJt1I63AiEAllVOBTcBF4L7MY5eWT8Wb5nJAs3hTXqBqoo6IxnNQN4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh2QYB0HjbyMEyKUCrcA4SnXfuvEysFc%2BfTBw8iKxfRkcwOdFxxaYjC6RlwN7FNelHIfKd2lpctKfBf%2FcN3kOJKBvconf%2Fq%2BAVdk%2FQaKxbot049egRS8NbLPu2XZwR9vPS%2F%2BZXodwaZR0A1fz8UIkKUeXmGKKuwWvsyJnvogwDXplqMLUP12h3xaq%2Fif3Od9rxFvRfJ26BNrscIXWdOE2uE4Tci%2B5ZiB2hfRq0QeOuCT1HIZf8uZD31cBqhKtSaFYCUeiNOro90AyKasYTiCVrjLuSGbHSEALr%2FCAxG3IEjkU3Q94b2%2Bd8c37ikObIuWlpPQRCiBoXByE%2BUmFIs9jmo%2B%2FQ0kaUxMbzCkpPz%2FLGMpwF1pt3HfBSdGzjX%2FyzJKEfSgkDqtwxXzh%2F%2BmUMElJqgrI9qi5L8gJjdeMuYeCeD2GDyvcdEIFu48kf2DJXWFx1PIFfIO3JtaLk4ntlYQTsgUtaavLTYhtLz%2FdjA1DSnloIiqtPKwKX604wbb54qGUAfK8gqn9WqsqOIx0NUpEiCerTmelstBYi8G0%2B0mj0NpMGdBmtvcX1HRtlzBhVM6MvgHDCMH5ua9z4Td45IkxJKMSJ9t0Dc3RNjY01VwenIRqh6WYNpSYWoRbLw2dFsBbR%2BbeEZjp0CCdpSMMeM7bwGOqUBeqP2pj8LnKYxDhiFmOYpAzSsPP%2FXAWZfY8hkTBHT2O8xS3tQ4m4V1beFeg3%2F3l814oxYAi3rYsepmgtXp9R%2FgtiT2%2BdpD34kxV02pe0fiZUxlDWKKBK5n3YmtEuSDFu2uwZHzzq1yVz0VvJ6VmZ%2FNNAwpdtpR5FgmpBWT9JjtKCq%2FHalUNNjt1U0H0awmr%2F4phvu2QdOv96wokvF6rVLA18G1HK1&X-Amz-Signature=0266c2ce555c0c5fe9b999a48c6ed56aa2ffd2f3b3deb55ba5427552d5b22cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZF4RDKH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRaFtegTat%2FrDvOISuRY1xkFWbqIUjVKTND2HJt1I63AiEAllVOBTcBF4L7MY5eWT8Wb5nJAs3hTXqBqoo6IxnNQN4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh2QYB0HjbyMEyKUCrcA4SnXfuvEysFc%2BfTBw8iKxfRkcwOdFxxaYjC6RlwN7FNelHIfKd2lpctKfBf%2FcN3kOJKBvconf%2Fq%2BAVdk%2FQaKxbot049egRS8NbLPu2XZwR9vPS%2F%2BZXodwaZR0A1fz8UIkKUeXmGKKuwWvsyJnvogwDXplqMLUP12h3xaq%2Fif3Od9rxFvRfJ26BNrscIXWdOE2uE4Tci%2B5ZiB2hfRq0QeOuCT1HIZf8uZD31cBqhKtSaFYCUeiNOro90AyKasYTiCVrjLuSGbHSEALr%2FCAxG3IEjkU3Q94b2%2Bd8c37ikObIuWlpPQRCiBoXByE%2BUmFIs9jmo%2B%2FQ0kaUxMbzCkpPz%2FLGMpwF1pt3HfBSdGzjX%2FyzJKEfSgkDqtwxXzh%2F%2BmUMElJqgrI9qi5L8gJjdeMuYeCeD2GDyvcdEIFu48kf2DJXWFx1PIFfIO3JtaLk4ntlYQTsgUtaavLTYhtLz%2FdjA1DSnloIiqtPKwKX604wbb54qGUAfK8gqn9WqsqOIx0NUpEiCerTmelstBYi8G0%2B0mj0NpMGdBmtvcX1HRtlzBhVM6MvgHDCMH5ua9z4Td45IkxJKMSJ9t0Dc3RNjY01VwenIRqh6WYNpSYWoRbLw2dFsBbR%2BbeEZjp0CCdpSMMeM7bwGOqUBeqP2pj8LnKYxDhiFmOYpAzSsPP%2FXAWZfY8hkTBHT2O8xS3tQ4m4V1beFeg3%2F3l814oxYAi3rYsepmgtXp9R%2FgtiT2%2BdpD34kxV02pe0fiZUxlDWKKBK5n3YmtEuSDFu2uwZHzzq1yVz0VvJ6VmZ%2FNNAwpdtpR5FgmpBWT9JjtKCq%2FHalUNNjt1U0H0awmr%2F4phvu2QdOv96wokvF6rVLA18G1HK1&X-Amz-Signature=4995425ddb35b19eecc0ae7ea89460dfe67cc0394f8fdc8099c8a58a82fc2f32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MSQW57C%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD2o8SK2zVvT2gJfqXFnv3%2BaLOu5CEvo2MNXgrqRn4rAIhAPGhWCBGBuWSDf25GSk8dnAt1ZqrgSomNwNJhr8uGg40KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw7ORnz1GxJ4LOmCoq3APyXvS20AqWeXDOSy2FknXsTrOmmxxr9skZ4535K8%2B37ghR3nR8gSvu96gb1GjiZph0ur0m9CDxqymJHu8aEaUbSrxJgREb0hXHpRp767fMN2gyMiLnCavFpolxmO8r4RS8R9SriViE1Fx7VOFDmK7Nu0FCML0CBd8zPSrdwMRpHFKEk2bkpTB%2B2ZF24OBl8hqdgMw5uu5uBnH6kvE57kFfIII1VuC3OnwkS57ogHDcVBWTSpa3Wg2LyHdgV27%2B6h2ILVHrRFLjI%2BBC1G2TtoqIOor5PeQKO6baYFrHRIp14yBcuBDDRIQC4MhANpqxrn6Wv7Vs1hAZGN6R%2FC%2Fth%2BK1UtCglbxqM7C0ERRMDkj2t5THmbFPP4b3CTcrKl9brAZmVKOyptiwIMBkaPs1tbC0B5MbybAYuyVx48uNZmWWDmRIMzag42fK5HK0jMQFoM2vlw%2F12NwOKiK6SKfkpq0iGLT2v5zDrefLFXvDVTx5dH73rknPhMDvLjyQ1TFKmvp6w%2F0QeVE8t%2BiWDnBQxneYMq%2FKJSnnd3rxJuvRwkJzy%2Biqsz%2BSE%2BvbYQ45kxpLnOMggZ1QHRuEccxH8XK4LCGwkYH1engtGMJHqZ2bAELitShQkgnYxmd50l1SXjDQjO28BjqkAQZckpWwIGTC7hzlWF45dRIq%2F6riagxhHX4ix2r6%2BrEO6j%2BVBT%2B5K3liELhiObCiuVEfyduez5M3L8q7SDReemgfGhupIxbreiajPFOCRJoDvJ2LvG3igzw08erkRSc%2FrvrdGAW7bRsFGGsymn6I2RlLSfg8rWFlu6tc9ZG9jl6xdDYuwi3sRozyl%2Fhr5trrg6Wq297XTFCFrE6LfbSV%2Bgd23H1f&X-Amz-Signature=381bb7fdc7fd9a562a364e380f1b9af67df2d857f0bb3c39906080de39986f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YM5LFP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcS5P3O3L70pbIYSUCwk6C3RjwKCEphqCK80c3a172NAiEA28GVLz3NzqsF4%2BfLtyz4He%2B6csZP6ei4l16EBS749kcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvjU3B8n%2BjMZ6fAZyrcA1LC9R1UXuRm2y71DnwufQtJSd0uN6SduedmU0b1itzpGXs7lHkdII4kXNAR5E0yRjhnydirDdhIfCUWUEJ1SmUkRKPALJWmfUqSXzfZZgsmQT8hf0wr%2BhxsrCPToTxbxiotOmusGhUqY4BG9X5jMX3VwUJppZaTdb7w34N2ww7Iq5PTc8yXSkJb68FvUUJL5ebz237s8WGSLAK5fWkOalfMqhm1EluwxYR0101tVeCXgGDDzOIUl7z4Sigq3htswUUEjU6D%2FN9YdlTWV0lbWW5omwiiio7vUa%2FmJPpai0yyZGdmIx4cf9RuH19QVxrN5iZNhWq9wONhwykhvOJawFCTjJbf%2B2YW6xSBSrIdaO31FK%2BF1eqM7ZQDLITByp7th0MNqOjMIzUGdIqxk0olPMTDkrtfxYwpAfMuLhrU00Q4h1HBvi6tijCfXUhb5dRNjuEp04iQHpCxsLlXdNKSXMmIbwcpGhEDLGDZlQc0%2BLs2DUTxcK6DXSbuVt4v9gFOO7LOvT6p1mZ6npZxeIDX%2Fi1C4dsaWvqRJueh9orn6eI6i4J8J65ayHKgnx%2B6Du3XfjPc1e2EM9JF7mIFazLmaMN%2Bp720H6WDWTSaRy1pa0P84P0zYxc3xplSE%2B4%2FMJaN7bwGOqUBZW26Nn6BpljgfeDD2rp8o%2FGj5Vt1w5O4mYP%2F8TkM04w3Fgvxac4pik68TpGbeFX9FwFmBYDPeSOXUI8DpW8bnxd4gT7BGKwjrSw%2FTYO2HjgM5gbZhqyZWd81SSraG9up0R%2F0JrsyrnrmFwEXt%2B8lv%2FlwWJJuSoHJu5xRfuzdvsFDeUJJ%2FIT2akigPRzDdjD6gzLudAd6D7INXpx%2FOVHWed%2Bd1YpX&X-Amz-Signature=2465bd5de5e3933b3ab558018c445fae9cb0893255e05eadf805ffc8514df0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZF4RDKH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRaFtegTat%2FrDvOISuRY1xkFWbqIUjVKTND2HJt1I63AiEAllVOBTcBF4L7MY5eWT8Wb5nJAs3hTXqBqoo6IxnNQN4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh2QYB0HjbyMEyKUCrcA4SnXfuvEysFc%2BfTBw8iKxfRkcwOdFxxaYjC6RlwN7FNelHIfKd2lpctKfBf%2FcN3kOJKBvconf%2Fq%2BAVdk%2FQaKxbot049egRS8NbLPu2XZwR9vPS%2F%2BZXodwaZR0A1fz8UIkKUeXmGKKuwWvsyJnvogwDXplqMLUP12h3xaq%2Fif3Od9rxFvRfJ26BNrscIXWdOE2uE4Tci%2B5ZiB2hfRq0QeOuCT1HIZf8uZD31cBqhKtSaFYCUeiNOro90AyKasYTiCVrjLuSGbHSEALr%2FCAxG3IEjkU3Q94b2%2Bd8c37ikObIuWlpPQRCiBoXByE%2BUmFIs9jmo%2B%2FQ0kaUxMbzCkpPz%2FLGMpwF1pt3HfBSdGzjX%2FyzJKEfSgkDqtwxXzh%2F%2BmUMElJqgrI9qi5L8gJjdeMuYeCeD2GDyvcdEIFu48kf2DJXWFx1PIFfIO3JtaLk4ntlYQTsgUtaavLTYhtLz%2FdjA1DSnloIiqtPKwKX604wbb54qGUAfK8gqn9WqsqOIx0NUpEiCerTmelstBYi8G0%2B0mj0NpMGdBmtvcX1HRtlzBhVM6MvgHDCMH5ua9z4Td45IkxJKMSJ9t0Dc3RNjY01VwenIRqh6WYNpSYWoRbLw2dFsBbR%2BbeEZjp0CCdpSMMeM7bwGOqUBeqP2pj8LnKYxDhiFmOYpAzSsPP%2FXAWZfY8hkTBHT2O8xS3tQ4m4V1beFeg3%2F3l814oxYAi3rYsepmgtXp9R%2FgtiT2%2BdpD34kxV02pe0fiZUxlDWKKBK5n3YmtEuSDFu2uwZHzzq1yVz0VvJ6VmZ%2FNNAwpdtpR5FgmpBWT9JjtKCq%2FHalUNNjt1U0H0awmr%2F4phvu2QdOv96wokvF6rVLA18G1HK1&X-Amz-Signature=38ea1328f80392ce9b9a9878a71bb6bd3b286979847631a22172f8864f9eed9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
