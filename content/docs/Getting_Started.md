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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOI2IZTP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE8LOvNmz8HZzr1isFxFeEutR7z4hDTptzbZaQx5%2BA8dAiEAj1FU5y9gOh%2BxA6MW63gZaNoiVXY4u%2FnMnhc3hWdosUMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGGF8E54E01PMqzUnCrcA6jM7R6AWPNBcWH81T6oiQ4sg7JnVqnOKRgoU271nusUHS%2FM8pflQODrmDfDVqLP4sRBqEi48ksYqAtSSZnAbpl%2B%2Bv0lqaHXyLGO8lKHGPuSH0OJDNS2tjPv2FlaVQk0p1KasHU4UNsrrebqCNCY%2FMd9jQIT2vncAgSoz9j05f3CaIS%2BgrNBIVBIqe%2Fhl9hgG%2FnYvRQ4YJinctgZQIjItJaL%2FttH9v1idtICShidP7wvSIvsjn5o%2B%2BXTL5jNzKgt5oGCJ9YDvrOvFnh6Hz0R5LCvyr9jQO%2BpbYLAdeg4194aXZMfllFgQVx1LZqWYouTRhsbVi68TO5IsvUfEYMDLlr8BEhPgXNlJupV33tommKNl6YpA6kDketlSnxOtisDpWfNg4TnB91Hc7lvtzmj4CHql1QB82cX3QyAVTzGBGmVWKyoDLXjigmaZb2z7DG2w6R9gGLlABVva9ErRk54F%2Frh6Zwui5lF3Z1qK5dlMXljHInkH1oBjnm02CTsMZ0qSt7EEjwNe2Ns0eefojSVBxkNO9m5fJ7cGyAdtmSHqlbw6o%2FOOkSXDuSwoOdLRXgcxSsWjwn8Wt9C0pRmM9usWtvx7%2B%2F8AoE5tBz9jJTTMZgL5h6Iz6WnnKksPBmOMOzRgL4GOqUB7RByPhackcYPe6MhLlkmBD6uMZ%2BPQk3AkPmx7bHEY%2FbKdmY9zf%2BOv69itSBJPIzID2u8DiCwULxFSuMWZADVAiEV8zBTHo14H3JBX8YkInYsLt1vTxywksyStXwEVrKYwwHvkpwVciSufxYhEtBsfry0apDCEm1rJnOglDltnoHN74Xwi4fw16Fx91zU19TvT61%2BIc0wzwwuRBQzsoBgZqYAxJfz&X-Amz-Signature=0a6859bcc59425964f5312be95d2433fb939a7af3545ba6bd8cb4bab50b18267&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOI2IZTP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE8LOvNmz8HZzr1isFxFeEutR7z4hDTptzbZaQx5%2BA8dAiEAj1FU5y9gOh%2BxA6MW63gZaNoiVXY4u%2FnMnhc3hWdosUMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGGF8E54E01PMqzUnCrcA6jM7R6AWPNBcWH81T6oiQ4sg7JnVqnOKRgoU271nusUHS%2FM8pflQODrmDfDVqLP4sRBqEi48ksYqAtSSZnAbpl%2B%2Bv0lqaHXyLGO8lKHGPuSH0OJDNS2tjPv2FlaVQk0p1KasHU4UNsrrebqCNCY%2FMd9jQIT2vncAgSoz9j05f3CaIS%2BgrNBIVBIqe%2Fhl9hgG%2FnYvRQ4YJinctgZQIjItJaL%2FttH9v1idtICShidP7wvSIvsjn5o%2B%2BXTL5jNzKgt5oGCJ9YDvrOvFnh6Hz0R5LCvyr9jQO%2BpbYLAdeg4194aXZMfllFgQVx1LZqWYouTRhsbVi68TO5IsvUfEYMDLlr8BEhPgXNlJupV33tommKNl6YpA6kDketlSnxOtisDpWfNg4TnB91Hc7lvtzmj4CHql1QB82cX3QyAVTzGBGmVWKyoDLXjigmaZb2z7DG2w6R9gGLlABVva9ErRk54F%2Frh6Zwui5lF3Z1qK5dlMXljHInkH1oBjnm02CTsMZ0qSt7EEjwNe2Ns0eefojSVBxkNO9m5fJ7cGyAdtmSHqlbw6o%2FOOkSXDuSwoOdLRXgcxSsWjwn8Wt9C0pRmM9usWtvx7%2B%2F8AoE5tBz9jJTTMZgL5h6Iz6WnnKksPBmOMOzRgL4GOqUB7RByPhackcYPe6MhLlkmBD6uMZ%2BPQk3AkPmx7bHEY%2FbKdmY9zf%2BOv69itSBJPIzID2u8DiCwULxFSuMWZADVAiEV8zBTHo14H3JBX8YkInYsLt1vTxywksyStXwEVrKYwwHvkpwVciSufxYhEtBsfry0apDCEm1rJnOglDltnoHN74Xwi4fw16Fx91zU19TvT61%2BIc0wzwwuRBQzsoBgZqYAxJfz&X-Amz-Signature=e0069a96580f915bcfd1f60721a76321129e4ae6e7a1c823bb364145cc68da90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJAQX5O%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHslGDPm6qZbSGSD5Z7b4euHBYLt5kdpT7WevZPeZixYAiA9VRuJsiW0aKXGPx5QnxsRNA9DABZejaThGeT3eeIWtCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMZ%2BhNozZjzZIVrSkwKtwDKQlWuXXceINTylaPMP7nKBR2iS%2FfF3EA8haOUKjQatlLwwdh0wIIozyCFVD%2B3Znzf%2BDtQQm3AC5RMUr1jjVeq3xhtfAMJNEzMsKTltV%2FrZGODeGcop1rF%2BhqCjlo8HKuyNi%2FC1%2FSSzcr1XKvMM2WifrUB7N2pzTECs82509oewVOR1xckQ4etYrVsyeNBoDPfPyFBKEmwdfAou7EOTkqMfydLIY9TYjs4%2Ft4DtiB6P9IvFNycwwXGyQ1IJ2FUjXezY3oLWuZnwbpv1O6oPT%2BCh2BvGOnGufQy%2FQ1o5Zy1j2nCXM6QUt3DPkp4AjsGeQbC7FdbYSrz%2FsOXuFlrh7yoOk%2BvpWRukuDshoxsBxJWfEkcSmXABQPH0jeTNismxeEQPqMChHCu3%2BKneC6GmLY%2Bl6z28Rk%2B3xx49z6iw0yVkquBrjx1KJ%2BSNOeI3oFoStOawukFyvZd%2FnZHPz1vv6plAL3B2S9BhoWlNlYwRi8vPfMfRmkoBRnz6ufmc%2FlJEbri2lzHDBNyww%2BCCKP9N%2FMtCyjaz2O0fr97fVYFXfRcZPdTg3Hiu458ZqDR%2B8FxbEtBDfDnEb3jJNHIYnlNVMVaezGvdc%2BdE%2B58j8DZo%2BGeMAFtADcRKlMqUTUG2Mw69GAvgY6pgEGU5vOqN105hgFV0wrTlyVtYIoKEeB3XECIGMipRv0q%2B%2BZne%2B9UoPU9XttG66vMrNSyYqpJY%2Fmr%2F303LtBwlsHO04wyZNrOCQQNk4IIUUTvaPz3l0OdqK%2FQIUpajHfzbNeiAQysdCrpeDm8t9E93m4CHVlzIx5qoQgbDwy7CDWT%2FkITOBGAGlRq9LeR2gzAh3%2Bz%2FsS1788csBvVm5CjLx4wlJep3MC&X-Amz-Signature=9679840971fd013d71bd90d7d5c998cdaa690869ca9e7cfb115d6b415a2de1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIQLCQP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCH8Ud1%2BWgM4W3fVxF67QR%2FXYUBshN9VnCA6fDFhA%2BtJAIhANmGW%2F9DgkGDDM5W86%2F%2FTtkTFCDNQ6YIClIJlp07F83kKv8DCHIQABoMNjM3NDIzMTgzODA1IgzyACv2QfwxcBlU8Zwq3APaqOIODhRsG0w5RhbU6ZCjPu6DJpxbYUxNZEGRvpesl8RuPgqiTRiHHGT4YMzVK8WTxPOhbNZtQtto1q3D5jh9Cid7R7wua0t8jBHgw9pW1s3IR0Zrg4%2FKVfSSo1QYYldvZwizS4csFXkDnsxsCrk%2BED5CAsdzZmX%2FbloJVjPzU5uL3i%2BhkWlvbBqcw3HxylVWrvMulKBeWdIk2KU7DJ5E9MvXIyEioRenotuJ4uFrmYWCgHieI%2BLHwLF%2F2b05poq14qtbe0pWh0POLJYoU7nsn8kV8%2Bc0fxMQcc8E2%2FSeDIGrbNm1pJgue36SD%2BebtRTZ9%2BiRSXfYqQEjDbb1cnDH6gewAWXBMS9tGsV3AId5Fpi7XbPR8y6vvJFjrEX3dMwyQv1pIFtx%2BF0p17xfFMCbED8ZYyR7wVBv3TAyGpU3BLfaHfMAvrVdFrSuUdsDxyMha9NeyjgufX9D6erKx2j0o%2BnSJIv%2BCLDIS5mab%2B6yDOFwE0bUNJZbMkjHff00kIU4BH4cOazDFJt81Qb3n4QMpzeot4loIukpbX70KKJgHxv3o%2B4cHO13jtChulhD3V49YeFzV7VWSIbN37%2B7NEt36W5jgWii1OzZm31i0WI%2FhuDvEYASL%2Bg3fXubXTCP0oC%2BBjqkAdSys1fOgrGmTs7rEUWb9VlExmkun717vOFx2MkojLBwzsByHQFWwK0v31XVUCWlrjfiIfMg%2Fx4t2lkzq5xTCF%2FNXKq9phIgvPfgfTDs5lNvxoW4agiFlJbwxMPThRczxvOptHvFXDFPDZ2SK5DXNFkTH7Dyuih4UUTuLwSK5uGmafwsvTfVYnjt0qc%2BgtGasd%2FOHBPiTrv7BaP7ED36bFdiqXlf&X-Amz-Signature=82206d48269c93d3ceb071ed7aac24358db0346e5d571ec98ce0c7cd28d948dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOI2IZTP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE8LOvNmz8HZzr1isFxFeEutR7z4hDTptzbZaQx5%2BA8dAiEAj1FU5y9gOh%2BxA6MW63gZaNoiVXY4u%2FnMnhc3hWdosUMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGGF8E54E01PMqzUnCrcA6jM7R6AWPNBcWH81T6oiQ4sg7JnVqnOKRgoU271nusUHS%2FM8pflQODrmDfDVqLP4sRBqEi48ksYqAtSSZnAbpl%2B%2Bv0lqaHXyLGO8lKHGPuSH0OJDNS2tjPv2FlaVQk0p1KasHU4UNsrrebqCNCY%2FMd9jQIT2vncAgSoz9j05f3CaIS%2BgrNBIVBIqe%2Fhl9hgG%2FnYvRQ4YJinctgZQIjItJaL%2FttH9v1idtICShidP7wvSIvsjn5o%2B%2BXTL5jNzKgt5oGCJ9YDvrOvFnh6Hz0R5LCvyr9jQO%2BpbYLAdeg4194aXZMfllFgQVx1LZqWYouTRhsbVi68TO5IsvUfEYMDLlr8BEhPgXNlJupV33tommKNl6YpA6kDketlSnxOtisDpWfNg4TnB91Hc7lvtzmj4CHql1QB82cX3QyAVTzGBGmVWKyoDLXjigmaZb2z7DG2w6R9gGLlABVva9ErRk54F%2Frh6Zwui5lF3Z1qK5dlMXljHInkH1oBjnm02CTsMZ0qSt7EEjwNe2Ns0eefojSVBxkNO9m5fJ7cGyAdtmSHqlbw6o%2FOOkSXDuSwoOdLRXgcxSsWjwn8Wt9C0pRmM9usWtvx7%2B%2F8AoE5tBz9jJTTMZgL5h6Iz6WnnKksPBmOMOzRgL4GOqUB7RByPhackcYPe6MhLlkmBD6uMZ%2BPQk3AkPmx7bHEY%2FbKdmY9zf%2BOv69itSBJPIzID2u8DiCwULxFSuMWZADVAiEV8zBTHo14H3JBX8YkInYsLt1vTxywksyStXwEVrKYwwHvkpwVciSufxYhEtBsfry0apDCEm1rJnOglDltnoHN74Xwi4fw16Fx91zU19TvT61%2BIc0wzwwuRBQzsoBgZqYAxJfz&X-Amz-Signature=89cb2653199c3230c0feed72e89fc795ce420d8e12a6aa8ee0a44d16a7aefd47&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
