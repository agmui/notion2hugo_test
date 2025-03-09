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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTPEVHE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHhjWTMe%2B8UfjwYfxGMGVXzFySaAKQuAaRvjgp5%2Fm8XaAiBD42NIJttrQy7ZyuaCzG%2FZGPSDH5KGCjLVkf%2BPD1rXBir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMSimB8e0lUTutnPtWKtwDE7SUyLRPtWUl8Abbknm1Fo4kL8quM1NJSdbSPpdmynwxnhsJLpU4ztja5bIrgjWKGT%2FNxHhScMR9CRi1wxPlrpM3nIYFLct%2B2PiX9CgJwyVGWa305UpuTCB0L%2B%2BrWpqOQlfZInOuqh8EW1LLn1IVHxi2ZxSQHsZjLGxHmhLUEWdxLo3RpdQx6UfcSEuzXogss2YRyxcK1dmXpGez0ugkdYmxYibe8VS3Nhh6E7ZoUek%2FmmX432Cfu9zW7viuPj9fBU0l9IOZskPxp2Xaf4uxD9ZA1eW%2F7nCjU1hVTyO%2Be0iwb3WCx1p1JitdBuLNHqLVRV5gtxqltdDkoRMRx98A1Gd8M1uD1tAsoYFmFOKTjeYcKOvdtHDjdLRk9qnWo5LapH2PqrtYtZBYJxdQPUdk0mpxCinHC0IH6hJmlVq5w%2B7aNFVEmnJ7wC7TIbvdVr0UZAWUyzLq3SvjDC%2BDelctS3eib2omQu4GUVUo6mxKDwlfdxcsNu%2B1q5RyBijvRTTHfmGYnXsNYNsulgR%2BeCBQMOol9mg40%2BRTZoqhme7ff%2B499C6c1C%2ByV8dCKQqjcKAzvXzajaT6UuRV3jQlLUSs9Im7%2B0mI0oeVgAlrNZQYsqf%2FQbV7QuijG2VYO1Aw0suzvgY6pgFUVoXkDefEEii3I9pU2G96IxFwkmC0I4TNE0zsOfENFRdSwU1FEbwQB8pGd408amCWkIW5BqSZ0DtMZw5JET%2BdFXI8I0nRqYQdNSB5DbYYmLA0hmORL%2B3B%2BaigiUYzmAC0%2Bp0TS4j0pdEDXI6X3wHz%2B6EEbAy4%2BlyhAbxzLjuJwTPlrou0oRev%2Bdq%2BTZ6M7PNocuvJAHEm2WcXG2DUTVe9BOet%2BhnJ&X-Amz-Signature=e87f23ae1b837a21f5eb57a554a0500f6852fb6018477cf53c335fa9340653db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTPEVHE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHhjWTMe%2B8UfjwYfxGMGVXzFySaAKQuAaRvjgp5%2Fm8XaAiBD42NIJttrQy7ZyuaCzG%2FZGPSDH5KGCjLVkf%2BPD1rXBir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMSimB8e0lUTutnPtWKtwDE7SUyLRPtWUl8Abbknm1Fo4kL8quM1NJSdbSPpdmynwxnhsJLpU4ztja5bIrgjWKGT%2FNxHhScMR9CRi1wxPlrpM3nIYFLct%2B2PiX9CgJwyVGWa305UpuTCB0L%2B%2BrWpqOQlfZInOuqh8EW1LLn1IVHxi2ZxSQHsZjLGxHmhLUEWdxLo3RpdQx6UfcSEuzXogss2YRyxcK1dmXpGez0ugkdYmxYibe8VS3Nhh6E7ZoUek%2FmmX432Cfu9zW7viuPj9fBU0l9IOZskPxp2Xaf4uxD9ZA1eW%2F7nCjU1hVTyO%2Be0iwb3WCx1p1JitdBuLNHqLVRV5gtxqltdDkoRMRx98A1Gd8M1uD1tAsoYFmFOKTjeYcKOvdtHDjdLRk9qnWo5LapH2PqrtYtZBYJxdQPUdk0mpxCinHC0IH6hJmlVq5w%2B7aNFVEmnJ7wC7TIbvdVr0UZAWUyzLq3SvjDC%2BDelctS3eib2omQu4GUVUo6mxKDwlfdxcsNu%2B1q5RyBijvRTTHfmGYnXsNYNsulgR%2BeCBQMOol9mg40%2BRTZoqhme7ff%2B499C6c1C%2ByV8dCKQqjcKAzvXzajaT6UuRV3jQlLUSs9Im7%2B0mI0oeVgAlrNZQYsqf%2FQbV7QuijG2VYO1Aw0suzvgY6pgFUVoXkDefEEii3I9pU2G96IxFwkmC0I4TNE0zsOfENFRdSwU1FEbwQB8pGd408amCWkIW5BqSZ0DtMZw5JET%2BdFXI8I0nRqYQdNSB5DbYYmLA0hmORL%2B3B%2BaigiUYzmAC0%2Bp0TS4j0pdEDXI6X3wHz%2B6EEbAy4%2BlyhAbxzLjuJwTPlrou0oRev%2Bdq%2BTZ6M7PNocuvJAHEm2WcXG2DUTVe9BOet%2BhnJ&X-Amz-Signature=ba66385f05d903634aa60289c2224129dff918cf89eb323257f68a5b62da1d63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4C6UYZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIC2lz1fGT0VzN67nNkO3gCeC0TsKom4Nh%2BJixbbBWy8EAiBF9L0AV8NR1FzVjJUJ7TJmgriePgEEEr4OXYgftXZOFyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMoMTZBLrF8OD268%2FvKtwDUQ3eiFDQKOw%2Fod4HmVv1JCdZi6MYjia%2B01DdkbDf%2FeZy8YJl9msxImnZlO%2FiSs0u%2Fp%2BVHVHvhC7fm2aBDN9TMEesaM8DwS5yzVQHQinvOi8Wtda%2BB8LtPxc33FR%2BbJPiSeRWZoHlDHxmsiSNyBy0XFJp9ah19%2Fxn%2FkgHy2YfT93pUBMTR2cwXalpoBBNMFnPHugPcxEoKwFo%2BCGoYeZ5SwzwVCXISR2q0gtgyJKyQhhVW9tXxT7d2bn5FiGYMjqpC%2FbznzyFwNmskX1gkHHyToofSDjnjSecAvE8PRDmYMqL1EZFyKWszE6bL3TlK86KIlod9hbNX52dJXf%2Bssv%2Fd8oeL6HC%2BcmsxRd5VlOaEvdYR4nkhIhZ8SuRDI%2BH%2Btnw3%2F7ZDZfs9F2p%2ButRAquilw91pd7Ae7Yh3JiOzm2TQRCpEDZegyYMvvJUmwIf9SDiTDMsInT9VxxoUTrTmLqMQ%2FZz7922coa%2FY8Aauy5L7lG2yPl3%2FeIG%2B2%2BvGP4VuES%2FpywaFpqd8DfjD%2BHKgQuujfKH7AaH7%2Fbq7EKC4ksVKPWDjsc1Ln7wh5imPbVfIyJbSYP0%2F8NKF93RFKooJXoFFI0DDJWZ5eQyjKM1NydzFJjRfdrayqpnAdh4OwIwg8uzvgY6pgFTuoVpNPi15u8jzaLQ2VhhYGa%2BGWFQn7ZOBgESj2k1y1F336jicOaV%2BbNFsvS7qTe%2B7GNPxj2Z%2FOKI9luokOoeciomLVmm8%2BC7B4nUu%2F0viorVKLlq7nhElWYzeIoqPyimlJRXhsLcVWY6JpI5eW3VEeK%2BxBHI7A%2FHO30SjvySau7vg%2FHYCYvhMy44ClJEhCvfXZYFlR6OFzOFSNoHJvSgtrLdU8m6&X-Amz-Signature=0387ffe432fead3bf662cee6e254f5cc3e0a10841bb9204806b01ae2af732237&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XUBKPQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDMDcmpi5Yd81kkiOg9QkADXJ1%2FdaSWY5ddLFmC2xS06AIhAMsjeJRe67z4RXBlYG4mWsMgP%2FpGBAypNTjEMhLlvxflKv8DCGsQABoMNjM3NDIzMTgzODA1IgyGLIhMSMy%2FWY%2FijvQq3AOpzIwZ2l3GZPdzOAaCaBdrTNgx4PkXEcAGNsHLnQk7iiaAMjwFboy8bJvLU9JFd9m3G33Iu6TR1Fs%2FWEuW6zio74mDvvpmx8cSOKPyogECizJG1pWD2s8EGV6DcYzUXuyLZTKVYRBO45LPMkfevOdbUsWa%2B6gdMsf44N3sAKIYjY9B0sXJaIsmWrj6WY%2B393vQKE9zB55myZ0LWXfBUTmilXQQraYRZbcm0zHSjNvZrKZ5puCtlt9lJ4V0SiIcbr%2BhIx%2Bxukwu3IFkq3oai8bgPLGFrJfymH5o3mO0Djui%2Fs0oHq799UwcFui2Yt4ABGaRENl4REEdBdgHCsI%2B2OSIlDBVeH%2BHMdi2wITsdl2Lg0LKjV17Wnd5avkp8JEdYXC%2BLEWRW1vpIdlSDM4Z4aGU3se2Se1quN3JJXmq%2B4MO1ZGTCjvkPCBPP8c%2BDB9EmKahamBpYddw0VdWfhVldUWA7hfZIz1nrqzlcOvcN6%2BQHsYcGa02XkX%2FBMOb6aNAlqn1nh%2F0bkZ41MVOfUkZaoK0A50hI9XuFyhWcDX4bTTunpaOva%2FmrgKjSV2xtXFQCBTLnnnw4DLbASFhIDKlsArcYiT2Oj3pp9k2yDtS5RIC%2FqAJqeraTomSzw9V1DCx6bO%2BBjqkAcLlknLLUA%2FgK4MWj3FEA%2FpPe92Fkqz8IuxUxIozpAqVKdfq9NCA%2BYwfr4e87K9WMDVA3ARzsx4O6Z8a7XkAv4O2sxfAwlkU8ZQIO8UonTBmMspQYTRrNzd8j%2B1dugHFOF6V29slvA3fbH8aSi%2BYslOojiPEHM6O1hQrMDz9c92XR0cE1uDANi%2Fsq%2FwvFCkQjV1LajkagDp0GRAMT0vEI1Qi1TnY&X-Amz-Signature=cecf7492d708eb52c318b882d4376802f72d4481125e03696bdebf845588d154&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTPEVHE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHhjWTMe%2B8UfjwYfxGMGVXzFySaAKQuAaRvjgp5%2Fm8XaAiBD42NIJttrQy7ZyuaCzG%2FZGPSDH5KGCjLVkf%2BPD1rXBir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMSimB8e0lUTutnPtWKtwDE7SUyLRPtWUl8Abbknm1Fo4kL8quM1NJSdbSPpdmynwxnhsJLpU4ztja5bIrgjWKGT%2FNxHhScMR9CRi1wxPlrpM3nIYFLct%2B2PiX9CgJwyVGWa305UpuTCB0L%2B%2BrWpqOQlfZInOuqh8EW1LLn1IVHxi2ZxSQHsZjLGxHmhLUEWdxLo3RpdQx6UfcSEuzXogss2YRyxcK1dmXpGez0ugkdYmxYibe8VS3Nhh6E7ZoUek%2FmmX432Cfu9zW7viuPj9fBU0l9IOZskPxp2Xaf4uxD9ZA1eW%2F7nCjU1hVTyO%2Be0iwb3WCx1p1JitdBuLNHqLVRV5gtxqltdDkoRMRx98A1Gd8M1uD1tAsoYFmFOKTjeYcKOvdtHDjdLRk9qnWo5LapH2PqrtYtZBYJxdQPUdk0mpxCinHC0IH6hJmlVq5w%2B7aNFVEmnJ7wC7TIbvdVr0UZAWUyzLq3SvjDC%2BDelctS3eib2omQu4GUVUo6mxKDwlfdxcsNu%2B1q5RyBijvRTTHfmGYnXsNYNsulgR%2BeCBQMOol9mg40%2BRTZoqhme7ff%2B499C6c1C%2ByV8dCKQqjcKAzvXzajaT6UuRV3jQlLUSs9Im7%2B0mI0oeVgAlrNZQYsqf%2FQbV7QuijG2VYO1Aw0suzvgY6pgFUVoXkDefEEii3I9pU2G96IxFwkmC0I4TNE0zsOfENFRdSwU1FEbwQB8pGd408amCWkIW5BqSZ0DtMZw5JET%2BdFXI8I0nRqYQdNSB5DbYYmLA0hmORL%2B3B%2BaigiUYzmAC0%2Bp0TS4j0pdEDXI6X3wHz%2B6EEbAy4%2BlyhAbxzLjuJwTPlrou0oRev%2Bdq%2BTZ6M7PNocuvJAHEm2WcXG2DUTVe9BOet%2BhnJ&X-Amz-Signature=60b3f765b1e07d150906e1d836b4ef0fc2fbcff982dc3ef360d17d2bed6934ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
