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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75TMMTR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwkBQpmM5QyW6aJ3T5b0RAQSvwfGHT4H%2Bu%2FvvObuCmgIgBISFgrobkPPeQgerA0xSionrkQbtgGudRIxF7rIh3Vsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNSl2FUR0BF8YD75xircAy9KPSsfwTdUqE1R4F8PxD5Inn50lfbew1arGwytLeAskmo3k5A%2FkFRXD1pIufV%2Bel8u48w361o%2BcLY7Iis99gcj5l9g6nPiNowk0KKY8D1hy2SPY5nrKe%2BTVgqXnVCrSnYxcIe5CAAkdC6g86LlbRWwWP1rWkIGsEirvz1skWOKwRQ0pCYazcDANF8WOYwURx9HM27wXgdYygjYt581z3KhVQhFG46o7LoIGlzh8vTeas9%2BtovUfu%2FWCf2%2BzgqCxyR8xXWy25wDwshr1lDEPLYE15CKl40Ts2Sx7o3xDZDxhkxAmxBMipMjf%2BC1aWjSL9PngRDv3Iak33z2ycbqi2%2FehhctS37fxgK3b0mlZVGpa4pF1ibtT1mgTSQfkujvtQOEDWi6P8WSR79CgMr5gvvr1xpTp%2F8%2FowCBmiFQ4rm1Hze2lZ4us61KiYQLXrSgM3oKYHJ%2FH%2FdOD1pBxvpEry%2BomWowmNdZwAJiTcLEUxYiS%2B6hL6Q%2FoYd4DCNGTQjeFMaAZxmKZC8FwdBopCC5D%2FbJHfO1vhNJ6izLS4UHBa1BtF2XmAiN6UPuD5pthUMbqzxa6eJVruB69zsWeXVfcU2aOTslQsx8w8HM0m%2BicC1bPfOH3IAjmp%2F3hwXgMIiM8b0GOqUBI0yrlrOCqWABzQWt2RFAvcu%2FHfadwGYi%2FfAwGOuRA13iVHrV6eGI87OcjYdli5c%2BXU6L%2FXZhxA7%2F12%2F5I5E3NmeiSQIayDenm9cdrA3a1zNPbzbrjDf9aiu%2FRaQ0r%2FDv6LXRSFHYt6cgxJIRQXN12JghwYNlvPIhfuhJfCP5prZGUC1bv3nmiWs9D%2FqEKyzpwiVxm%2FCzHPOX3mShNmxZQII%2FU0tC&X-Amz-Signature=bae653d114c0eda525a1d28687cc594d8bab80632d5765fea7d67ac0302f587f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75TMMTR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwkBQpmM5QyW6aJ3T5b0RAQSvwfGHT4H%2Bu%2FvvObuCmgIgBISFgrobkPPeQgerA0xSionrkQbtgGudRIxF7rIh3Vsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNSl2FUR0BF8YD75xircAy9KPSsfwTdUqE1R4F8PxD5Inn50lfbew1arGwytLeAskmo3k5A%2FkFRXD1pIufV%2Bel8u48w361o%2BcLY7Iis99gcj5l9g6nPiNowk0KKY8D1hy2SPY5nrKe%2BTVgqXnVCrSnYxcIe5CAAkdC6g86LlbRWwWP1rWkIGsEirvz1skWOKwRQ0pCYazcDANF8WOYwURx9HM27wXgdYygjYt581z3KhVQhFG46o7LoIGlzh8vTeas9%2BtovUfu%2FWCf2%2BzgqCxyR8xXWy25wDwshr1lDEPLYE15CKl40Ts2Sx7o3xDZDxhkxAmxBMipMjf%2BC1aWjSL9PngRDv3Iak33z2ycbqi2%2FehhctS37fxgK3b0mlZVGpa4pF1ibtT1mgTSQfkujvtQOEDWi6P8WSR79CgMr5gvvr1xpTp%2F8%2FowCBmiFQ4rm1Hze2lZ4us61KiYQLXrSgM3oKYHJ%2FH%2FdOD1pBxvpEry%2BomWowmNdZwAJiTcLEUxYiS%2B6hL6Q%2FoYd4DCNGTQjeFMaAZxmKZC8FwdBopCC5D%2FbJHfO1vhNJ6izLS4UHBa1BtF2XmAiN6UPuD5pthUMbqzxa6eJVruB69zsWeXVfcU2aOTslQsx8w8HM0m%2BicC1bPfOH3IAjmp%2F3hwXgMIiM8b0GOqUBI0yrlrOCqWABzQWt2RFAvcu%2FHfadwGYi%2FfAwGOuRA13iVHrV6eGI87OcjYdli5c%2BXU6L%2FXZhxA7%2F12%2F5I5E3NmeiSQIayDenm9cdrA3a1zNPbzbrjDf9aiu%2FRaQ0r%2FDv6LXRSFHYt6cgxJIRQXN12JghwYNlvPIhfuhJfCP5prZGUC1bv3nmiWs9D%2FqEKyzpwiVxm%2FCzHPOX3mShNmxZQII%2FU0tC&X-Amz-Signature=a21b4f30514f6c6fcdcd7c175ee875e296b53611f0a7d3664d46d145ad4847c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HUCUNQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPzcGrSMlRbHX7e49HTwdKVgtyIOxtZ1%2B6fbiHZqvPmAIgWDj4JZ0HQwCqJkrh1MUV5K21owyJJ7MTQkRrXfftKywq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMWw37x5H5L7vWyEXyrcA%2BbvThHV4WzgTRnWTmclzFCUEd8RsHxYPBS7Q2Y414Jjy1vwomO7Hb3qGqFvxwmLF71lt9ZhoiHVZgfUiWCEF%2BcgddUvoaTJmpsWpWeE20a%2Fa6LZ2u%2F68EAK81Zl2gOCHIy%2FcFl%2BSc5acOasD0bp5P%2FP6wAQkloRIzUb1l%2Fu%2BYw4x09vrNPbF%2BDLoRDQvpvg7zEgPJZ2DXAHnskpiC1k44Rc40jhpVj%2BMStssYs2W91H%2BpsWPxgm3SwomDHxpcg25zHFAkvkbjSkv4NtsdmQurZHZNVsMJowYqe0zErBnnLrTdUpw14oE3wHxa9zk9RR76O4sIDrS1nj%2FfAgSgv5GbdtzSwZUZfvp5UStOl%2BKh7Zkh9E84Ifdj1q2bgsLp2c06B%2Fs3ijAu4vMtGaaOziQp2iNWHxm0r8FG6%2BXE1XCMJyQM5AvbzbGUF%2FMKJ5Qdywtczwmh76IpAwUtHbGSalgPu8osu5zzRLC3zG9p%2FI2c%2Fo9%2FWE3gvmOd%2BZ8UzHHyONE7afg2xQwmpDM6V10CZszuGnf3HwA9HwPkpfsu%2F4QnDJxoS0emDA8wTJejC%2FVjJa2Xo2HqMeRUK4FwYQxnQBRjl1UIG7rytQcrpB%2BcpNNjA9k0lvj8xbpPJZx55iMP%2BL8b0GOqUBtUPTHnAfyfuso7KqTzKIJTabJ8qHjmJh7GBa234Jcky8dst3YQK4baVAeQXT%2FYg7bno%2F1rYig%2BweCefZua9uD4R3kmc4Lr5b%2FaVKaPuwf9sItroj7ALD7zakMFCfd%2Fym6tRU0EHspBrmXjODu9l8gZQHeWkOdhMoRUaghtMMhkjEUvDdXkbLC89BELfkYpgsHbrhKjgs%2FDu9hR5cn%2BADSxYl8SdD&X-Amz-Signature=61e54e0c2971000aac11a9ca2a69741f6ce6cbc00bcf8e93cf1f68f5ca251e05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGCLTFAI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0sRqZc2ssbC%2BA1Z5pOKz2U1ZFxxGn0u8dZh5EHgicogIhAJ0HmYfnmNjutGptBOW22mVwXx%2B2vfbhrnqYD8aiSWwKKv8DCCsQABoMNjM3NDIzMTgzODA1IgwwcPchJ6Wvw6GnZr8q3AOUgo91%2BUt7EQlqNXKvDP6lRFBNum0wwyheE6LOkC4zQaryBEQMcC%2BLgndxLTPNQyodyM95LptYlU6PiTqaRlQFZD2uo84H%2BHpqzW5PGRnqrDK2hMFWnVqMCHQxDq8%2BgRkKYjtuD6p5Hu7FJXT%2F52WoWa%2FiCi2fowEeP3vxVCCzzg6Qp8FZQQaW%2Bzu6NbcLw3p%2B9p1TgGx6k5J0GDXYVc1xrOAzeVkIrBZls3qO9PWYtbq7oQrHlu4Tym4bd3tN1tckHtZvLNou51I9S7lEXxfTcCmPUFio1j%2Fqsz1FqdXJ6XNK0P1yz7YklXuWuaaewAuwti8hbnewrMWOuM6UivtOM4bFD3E%2BxunJ65EjPRw5%2FcmaN8jN2wU58vCjq2do4QWmv1mKGZk%2Fr1VbNglM0VsHrgNqgg9hH0Xe%2FsvlCdIuV15OYgUg%2BfBdoGzzbqGMStJz1PbMUlzAa%2BfDJOq5S%2BvgXEawVPod%2FYDo9M8LC0JKnZrjTyruqqkgMQsg3fzObMZ7oykkzg8oK6pvwydFHtmOasfoFljUrU5AxFOphdQe4t04Oa5elsOXLnhH%2F6b6Ij1wUMl8H4nefEYQu2pD4bHBUmuMEVtzhqPtZmFzt5edHzyEQKaJbKYYrlFxyzDpi%2FG9BjqkAY9FqneSN3TL3jAqwAuKcFcve433gSOKKixwgwS%2FH0e3bTZH1KBhtrMIyXgu6BvHrzvNqYVqQslmrRe3yQxBEGWbdrzkIvDgTv3WVTH03CUBZ6HubyXCwJde3SESR7XkEIjFNTwWxbqrRgSyQ927OHkwhus6R5q%2BBZcC3o7WDRf0L829%2B5O%2BYWcatB7pW8gDUO%2B555Kzv1Ph1osTd6vTW0QbSL%2FE&X-Amz-Signature=f2e05067b81022a1a72aef02174e40332ce2e505246f68003c35114b334897dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75TMMTR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwkBQpmM5QyW6aJ3T5b0RAQSvwfGHT4H%2Bu%2FvvObuCmgIgBISFgrobkPPeQgerA0xSionrkQbtgGudRIxF7rIh3Vsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNSl2FUR0BF8YD75xircAy9KPSsfwTdUqE1R4F8PxD5Inn50lfbew1arGwytLeAskmo3k5A%2FkFRXD1pIufV%2Bel8u48w361o%2BcLY7Iis99gcj5l9g6nPiNowk0KKY8D1hy2SPY5nrKe%2BTVgqXnVCrSnYxcIe5CAAkdC6g86LlbRWwWP1rWkIGsEirvz1skWOKwRQ0pCYazcDANF8WOYwURx9HM27wXgdYygjYt581z3KhVQhFG46o7LoIGlzh8vTeas9%2BtovUfu%2FWCf2%2BzgqCxyR8xXWy25wDwshr1lDEPLYE15CKl40Ts2Sx7o3xDZDxhkxAmxBMipMjf%2BC1aWjSL9PngRDv3Iak33z2ycbqi2%2FehhctS37fxgK3b0mlZVGpa4pF1ibtT1mgTSQfkujvtQOEDWi6P8WSR79CgMr5gvvr1xpTp%2F8%2FowCBmiFQ4rm1Hze2lZ4us61KiYQLXrSgM3oKYHJ%2FH%2FdOD1pBxvpEry%2BomWowmNdZwAJiTcLEUxYiS%2B6hL6Q%2FoYd4DCNGTQjeFMaAZxmKZC8FwdBopCC5D%2FbJHfO1vhNJ6izLS4UHBa1BtF2XmAiN6UPuD5pthUMbqzxa6eJVruB69zsWeXVfcU2aOTslQsx8w8HM0m%2BicC1bPfOH3IAjmp%2F3hwXgMIiM8b0GOqUBI0yrlrOCqWABzQWt2RFAvcu%2FHfadwGYi%2FfAwGOuRA13iVHrV6eGI87OcjYdli5c%2BXU6L%2FXZhxA7%2F12%2F5I5E3NmeiSQIayDenm9cdrA3a1zNPbzbrjDf9aiu%2FRaQ0r%2FDv6LXRSFHYt6cgxJIRQXN12JghwYNlvPIhfuhJfCP5prZGUC1bv3nmiWs9D%2FqEKyzpwiVxm%2FCzHPOX3mShNmxZQII%2FU0tC&X-Amz-Signature=0a1ffb602075851d94358c377c436401c7262d44d62095418eaef5805571ee0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
