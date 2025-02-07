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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTFZ6BB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDC5gdkqjVjhMhz%2Bz4KeuFGYstn8yXabbDl%2Bur1mK7pnwIgbBbap%2B5pFJj%2BZ%2F7txBYnW8bxSqrDC8NANAi3XFB2OKEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHatzcTSaJWvJlgPuSrcAwakYMNHDQCdbC%2Ff1VMir2VRRy11CkAMRyqFPRs%2F5vmxzkwqICYIi%2FOJJlQor%2B04r8xrdJy%2FwPBe88K5iYqDIJ%2Bg7%2FUUkc8yoaz6Ec%2Fu4peYPCFqmgovK6Ze5dIZnQjtFchjtzjEsWcVUfL3J%2BrQ%2BH%2FmWu489jHGjmKScs8Q%2B04iwLOx2GJwdnduvo%2BWGJ2OihqfaWGjalsbubuvPcpvaPo%2FVBa8Fk00ehjlf97J4tagaD6Zd0HjQth3HPLR9HgAu4XDgQBJZYfWin0tixUAXLu5dFr%2Fv7Ito%2BgpOSocyP9SII44PTAckMSHViKCg0qWVHB%2BXpjFMQ1FVk79IDz2AGDNoc0xhBBFRiQunTyFu9qJ1S422osQG2UtQ2uB%2FH%2BS7bCAajQCjjvgBJc4u%2Fb8o7FWLS2ef39CaPbSI1Mynbu0XCdNJ9fnoPTPetOMT2G6JxptrZX4MgYbWVwWGvrjcdy3Kp%2FQC23x8R8zuRRvnxTEpQKd0gfYN%2FVO%2F5uSpcPGImv%2F%2B1xq6wON30kyN1IxFSn3BU7NscANYs95iOmks92lSYPAIZZHCWE2tT%2FaYO0bASX7pyyLf1yePAaaSdV04c%2BU%2B2nJgvlPi7yxh%2BWAe5whbi9MPsyifIdFTaRSMMSMmL0GOqUBehVQus0UjR%2FjlTSLcOFfSIH1LDIgzTm4qSLUGiI0nL6enIGT6DES0zhWZS8%2BLlGIbCqr9UdUnR93iiMCfZey3B29iUBcy8Gq1J6cqvlgYMXsRLi77aCdttH3dJNB%2FwBpnnym2kw4A%2BbA%2BJ5ku141NLAJCifJH0fnPlbXh8dPR3gQEMbF3uQIqPfjdeHv9gIdPZjVRwmz85FdyZI4orEdPui3uCB%2F&X-Amz-Signature=e64326d70e5ba044b328c51cd2f71a0a2e4b37a69efb302c194c7dcc942e3349&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTFZ6BB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDC5gdkqjVjhMhz%2Bz4KeuFGYstn8yXabbDl%2Bur1mK7pnwIgbBbap%2B5pFJj%2BZ%2F7txBYnW8bxSqrDC8NANAi3XFB2OKEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHatzcTSaJWvJlgPuSrcAwakYMNHDQCdbC%2Ff1VMir2VRRy11CkAMRyqFPRs%2F5vmxzkwqICYIi%2FOJJlQor%2B04r8xrdJy%2FwPBe88K5iYqDIJ%2Bg7%2FUUkc8yoaz6Ec%2Fu4peYPCFqmgovK6Ze5dIZnQjtFchjtzjEsWcVUfL3J%2BrQ%2BH%2FmWu489jHGjmKScs8Q%2B04iwLOx2GJwdnduvo%2BWGJ2OihqfaWGjalsbubuvPcpvaPo%2FVBa8Fk00ehjlf97J4tagaD6Zd0HjQth3HPLR9HgAu4XDgQBJZYfWin0tixUAXLu5dFr%2Fv7Ito%2BgpOSocyP9SII44PTAckMSHViKCg0qWVHB%2BXpjFMQ1FVk79IDz2AGDNoc0xhBBFRiQunTyFu9qJ1S422osQG2UtQ2uB%2FH%2BS7bCAajQCjjvgBJc4u%2Fb8o7FWLS2ef39CaPbSI1Mynbu0XCdNJ9fnoPTPetOMT2G6JxptrZX4MgYbWVwWGvrjcdy3Kp%2FQC23x8R8zuRRvnxTEpQKd0gfYN%2FVO%2F5uSpcPGImv%2F%2B1xq6wON30kyN1IxFSn3BU7NscANYs95iOmks92lSYPAIZZHCWE2tT%2FaYO0bASX7pyyLf1yePAaaSdV04c%2BU%2B2nJgvlPi7yxh%2BWAe5whbi9MPsyifIdFTaRSMMSMmL0GOqUBehVQus0UjR%2FjlTSLcOFfSIH1LDIgzTm4qSLUGiI0nL6enIGT6DES0zhWZS8%2BLlGIbCqr9UdUnR93iiMCfZey3B29iUBcy8Gq1J6cqvlgYMXsRLi77aCdttH3dJNB%2FwBpnnym2kw4A%2BbA%2BJ5ku141NLAJCifJH0fnPlbXh8dPR3gQEMbF3uQIqPfjdeHv9gIdPZjVRwmz85FdyZI4orEdPui3uCB%2F&X-Amz-Signature=8e65bb6d956782442f762e7d1850f3f7be28d458965d06b950464c2796694be2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNP57JSM%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDvt2tk34U%2Fb2j3Lq0REjxauR02qswakVXx5qrYRKw3ewIgD%2BosXKUZWP06%2BSyzIucYHt95BPvV9Vr1rhBctq9r%2BzUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDC%2BniGTDk6SHoD2n8ircA3ebBBjhoKMWQa0RWuudRdjMZM05nEAw7n1SPFh%2Bhcvk3IA%2BT46g0np37L395lVIUZPbU2rh%2Bi49lr%2BGXfUDo1QS5upDhr7IzFvF42ftyur3mhloqjZDkkpfKR3ImUYm59qkAg%2F9xjRq9Fk86OCEUe7N7UCPVuoOEYRdDbev8IBoU1Nsf5HdpE%2BRPItniu0camyncp%2FcLIiaYwKeeyMu95d9CNsnnil26ZakrcBnjdSGDMEjHpu8ZUwDUs87FT1wbCMq%2F%2BNIP6S3r9OaH681s8kYYVdoyv7mPvP96F0AXHLGHT4XWBksfeUIaoicF9tbMdqy6a030IrmJgZpx8zGqeLSWTrFbSL0Gy5PyvzwRWMSTuF1WNFF8liiOVMG1oJPxlYFxZWKjQozcTVkOy4xs2QdK4OvZfk7d7JJEbaXdYYGkvRtOPigGvbjuk%2BFV7a%2FzyLL5%2BvQEjiDbuGOo101o2yfjEM4Wl%2BoDmVySumPV2Dxbtf0TKxaMJhdzg6wYRerAT9VtnVwn3e51HQwIFgVrj%2BbBbe3E7rxtx86pHm543UliNc3J7v2usdPfnC8zZtgk8mDkm1ODYc3pGpDoZoGIyoUNYObJhZHUNlLCRKPRiIFvHTrr6qXsbjam58rML%2BMmL0GOqUBgqBeB3DLMDWFNghZ%2BTW488kLU6JpsGG8D1j6OY7YsclTchXLNPTDo%2BzQiuQYn7nvgcxWRCp7EthnLzv5W90FL6meymQhqZZxbvoanpMPBUlbyr%2FGSCT%2BDAt09xLKY1E16Vf6dIBlJQY4Et1T91dMhqqdHPEZzaJhuwMRNaqzEuaksxWpX%2FMF%2FvhIgyyQO2LrlTDazqMTEqnJnLCbFL%2BsU9iUzZTN&X-Amz-Signature=644bb9875aa44cc3987f552ff59c42b39f3b02ea401a73cd5189090ec592b108&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHY27MR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGOwoGRBVgKjZjT5AHF1uQJ1QBeM%2Busdopz7li83MonuAiEAlV%2BzT5HRtSyB0U7ir9Th9WW3G0CItJI1SJak7NL7JvMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDI8%2BvoHAGMFSoiKs9yrcA0iQB51oDmsywXsf5vb0b6p1h3mZlnxzdtw8hsDiAnz%2FELNDo%2FYPkXMDUm99rzt9eM7jfyT4fWLjknvwaeSt5R1u7ls4nuBwRG%2FmA%2Bcu29ltM0uxKi6TmDztep9zoW%2F7Ds%2FItEPpZM%2BPW%2FmuMqu%2FX2Zhlefw4lZnOSQX6%2FOUbAQqLSkZl2jnBSaaRtmh4vIDkQ4%2BwnAE8BJjkuo9uPrUYow%2FwN4Dk8u8VtzM%2BNHE9IF6xfxJuuF8kyveCDMGX%2BtDZDCYbQWSgCbSh0HKxBLNMtbqjIxx%2BqB%2B2ON%2BVEdXNjIrq0Pj1Iy5%2F8EO1heJlh9mLcgKEyJX9kL39A1%2Fbkn7sTKVWq2f5FPe35EosD9M2cELE7VtXO8Ynf2cW8Pk8AemPiMIZ4A1EKEJMpK9RpHi9U0Fmo4dCDVn5AlkOYFWSnag27OE%2FfPCtFlHrbUEXvqLO4Vs7LV7rzERpVbY52iJM8kwtev%2B2DLXFLSi7ig8HWySkggstFCRt3n2f550U4k73DK8uS37j%2FDE8Iz1pw2DRDh5g77e%2FvKc6s52rX1hk4Soyx%2F68S4D2EuO88A76RvRkXIVCKUx42ORJAzT90UUQhDPdfBwSmougXBcREOei9LSAxCaAWW%2FmCAQLowhMKqMmL0GOqUBC6kUNYwlfnnrXCZHffI%2BfAms%2BflK%2F45dIYCML7OAL9JeebcE99nv84cNZX46nfgjBmVD1NMsK3C6SOLkvdVGLK2XSLId%2BtMwFMZz4cOb5d4xVOuea0N%2FjqaDpAMaiDLqaPnmI5YzLe09DVUCs0HbGQj1Z283eN2al8yr02Fum6uYG7oI3VLZ9e7QgfXT8xVIGSQZ4dcm2D%2FXERxe3lyQ%2F2dDac7f&X-Amz-Signature=872d7378834159bd93a568f0f57ae8f806522029965d6e52c1fa31570affad82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTFZ6BB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDC5gdkqjVjhMhz%2Bz4KeuFGYstn8yXabbDl%2Bur1mK7pnwIgbBbap%2B5pFJj%2BZ%2F7txBYnW8bxSqrDC8NANAi3XFB2OKEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHatzcTSaJWvJlgPuSrcAwakYMNHDQCdbC%2Ff1VMir2VRRy11CkAMRyqFPRs%2F5vmxzkwqICYIi%2FOJJlQor%2B04r8xrdJy%2FwPBe88K5iYqDIJ%2Bg7%2FUUkc8yoaz6Ec%2Fu4peYPCFqmgovK6Ze5dIZnQjtFchjtzjEsWcVUfL3J%2BrQ%2BH%2FmWu489jHGjmKScs8Q%2B04iwLOx2GJwdnduvo%2BWGJ2OihqfaWGjalsbubuvPcpvaPo%2FVBa8Fk00ehjlf97J4tagaD6Zd0HjQth3HPLR9HgAu4XDgQBJZYfWin0tixUAXLu5dFr%2Fv7Ito%2BgpOSocyP9SII44PTAckMSHViKCg0qWVHB%2BXpjFMQ1FVk79IDz2AGDNoc0xhBBFRiQunTyFu9qJ1S422osQG2UtQ2uB%2FH%2BS7bCAajQCjjvgBJc4u%2Fb8o7FWLS2ef39CaPbSI1Mynbu0XCdNJ9fnoPTPetOMT2G6JxptrZX4MgYbWVwWGvrjcdy3Kp%2FQC23x8R8zuRRvnxTEpQKd0gfYN%2FVO%2F5uSpcPGImv%2F%2B1xq6wON30kyN1IxFSn3BU7NscANYs95iOmks92lSYPAIZZHCWE2tT%2FaYO0bASX7pyyLf1yePAaaSdV04c%2BU%2B2nJgvlPi7yxh%2BWAe5whbi9MPsyifIdFTaRSMMSMmL0GOqUBehVQus0UjR%2FjlTSLcOFfSIH1LDIgzTm4qSLUGiI0nL6enIGT6DES0zhWZS8%2BLlGIbCqr9UdUnR93iiMCfZey3B29iUBcy8Gq1J6cqvlgYMXsRLi77aCdttH3dJNB%2FwBpnnym2kw4A%2BbA%2BJ5ku141NLAJCifJH0fnPlbXh8dPR3gQEMbF3uQIqPfjdeHv9gIdPZjVRwmz85FdyZI4orEdPui3uCB%2F&X-Amz-Signature=f7da33b41ad23981f99c751938d07b39b956b6cf3fa78e95ada0120a6abc006c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
