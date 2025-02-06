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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM46T7F%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDg1EbgNwrHcFivECZ3QlGesyFkyKGQwzJgHCdV6fWEGAiEArCdCmT%2BAJG9WLIrmBi4QsfylxK59prkqFfiyqRCAueAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLYW%2FGyCpF6ckKHWxircA9eysaTKg6rOfcZ64sIZ0PxTpFI9vdzVzAofGhVCLsBwzfbvl3dq4Hfx3sYwdMCyqPyJK2iKyyWG5dKnn0qa7cGFlrT9coR34x5Vyr1RHfrqNS4CHgjpj1WFK41qHvznhz1rXKqY9IhzNqJNIuzytEbWS%2BYQIRQgZmekIeytcmuN4qMaJakqsKfVrM5eVtaWQPBJXpflL7Ce6U9mt%2BX%2FpNhXLK%2FJgsy3tpqFG0n8EBqLpWqMtTA5D6nAdRhtHrxqNVhW8BLZjeXOypzQlfffw%2BT7%2BS%2BeniH955ALITf7T5j%2B0lvN10LQepXZ7AOna5oPKjzADpIIaPTIQfNPIACardBj7tdZUADUdB5h0BtUMHRxvv9xYckDYamMPIOSQ%2BbiBUnHK3eFoTNGi6Du9PNeIo3vZ1JqXjgSYDJEVguhBLJZXYCNyV%2Fsq1XtA7A5YoyGrXqiXpmBLoo0fPOOGHqiyj7q6O4uPCiVs67X1Erp1J0YpHdJIYb6Xp6q5V%2FRNye%2BqGD2cyF9CyV1CaNiNQaX3S8hBWaVK604%2BtQCQiUHhye0hY6%2BdTKGU7meXFWkdpyK%2Fm7M6GthxCSabYCYQw2T5YORRbWOLUSXgLvklAX5UqL%2Flo9GkTtSQwkjv1fQMM%2FTkb0GOqUBmCA414Tg0xpiczAH46qPjm%2Fsn3dYvtTpKHSbcDgIumLdejgealPj2Ecbwz02lT2VihfoUo2e38wrLqLRnb%2FLpjd3zPP2V3zibPa9Qpmj32FYFsnLdc8X4CgtOadtwYWQcIUBRw12mE7PW5AhC5ZvxBbAr0iWrLO2fLXdkUUb2sRKTHc7k0xH6%2FVWF1kNogkk2x%2FUk5OHRirAu6KnzHamFhcHlCNp&X-Amz-Signature=50f9c085b97d9301ef20f965f513341bc693e668e56363d0395e214eb701d32e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM46T7F%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDg1EbgNwrHcFivECZ3QlGesyFkyKGQwzJgHCdV6fWEGAiEArCdCmT%2BAJG9WLIrmBi4QsfylxK59prkqFfiyqRCAueAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLYW%2FGyCpF6ckKHWxircA9eysaTKg6rOfcZ64sIZ0PxTpFI9vdzVzAofGhVCLsBwzfbvl3dq4Hfx3sYwdMCyqPyJK2iKyyWG5dKnn0qa7cGFlrT9coR34x5Vyr1RHfrqNS4CHgjpj1WFK41qHvznhz1rXKqY9IhzNqJNIuzytEbWS%2BYQIRQgZmekIeytcmuN4qMaJakqsKfVrM5eVtaWQPBJXpflL7Ce6U9mt%2BX%2FpNhXLK%2FJgsy3tpqFG0n8EBqLpWqMtTA5D6nAdRhtHrxqNVhW8BLZjeXOypzQlfffw%2BT7%2BS%2BeniH955ALITf7T5j%2B0lvN10LQepXZ7AOna5oPKjzADpIIaPTIQfNPIACardBj7tdZUADUdB5h0BtUMHRxvv9xYckDYamMPIOSQ%2BbiBUnHK3eFoTNGi6Du9PNeIo3vZ1JqXjgSYDJEVguhBLJZXYCNyV%2Fsq1XtA7A5YoyGrXqiXpmBLoo0fPOOGHqiyj7q6O4uPCiVs67X1Erp1J0YpHdJIYb6Xp6q5V%2FRNye%2BqGD2cyF9CyV1CaNiNQaX3S8hBWaVK604%2BtQCQiUHhye0hY6%2BdTKGU7meXFWkdpyK%2Fm7M6GthxCSabYCYQw2T5YORRbWOLUSXgLvklAX5UqL%2Flo9GkTtSQwkjv1fQMM%2FTkb0GOqUBmCA414Tg0xpiczAH46qPjm%2Fsn3dYvtTpKHSbcDgIumLdejgealPj2Ecbwz02lT2VihfoUo2e38wrLqLRnb%2FLpjd3zPP2V3zibPa9Qpmj32FYFsnLdc8X4CgtOadtwYWQcIUBRw12mE7PW5AhC5ZvxBbAr0iWrLO2fLXdkUUb2sRKTHc7k0xH6%2FVWF1kNogkk2x%2FUk5OHRirAu6KnzHamFhcHlCNp&X-Amz-Signature=f1f4afa16257daf09f7168f3a1343f4af0ae4e9d24240575f801279de39f1ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E52EO6G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAIB20kILoAUAefCjRlGY2WlX1ghchdO64WTMgV7x3SeAiAMLZoh%2F2nnheD6Azk30RI4tkhna12Rstw%2FCEsWoVdyLir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMXT5HAQrihJK%2FIuOGKtwDQ98hAzz3j2fPDW1wC4judgHRRECGY8AnQfSZnXAz%2FBejc75faAnwZ38GZa130C%2FR0E69h7faeS0V3H34ulJebYwzd8aUDMYAXvzh8HVi3Sl%2BRDutRqwNgqnuHwNlYvYSLuuXSAG7T%2FN5r1ARtRA0h%2BXhpxfdvkcQ56ERH7s5yaUKfD53XBgP1k1fmRgSiM9mrhMvWLIPSkMGKpnblgW7EWobzRBihcAOJsIl1M4qoBb7v1Ak7b274lBpBBNKASbDH9nd7Vj5PK6fblf6FD2gmb%2BtTlNVaj4h8RZsNsH5jlnnGKV1uekiJuYbl4fSSbODrXfUQU1d0f%2Bf4ti2bNMBGsSroIMW8Dc40TEZ2kCjClKONJ5Iq%2Bpp3CBrWqRS8M6HyeEhMCKEXw9AKm8EPLgl3mx9yO431CTAUXGdSd803TcDjqOXpZXfjAfiPNyYpYm1tIFkWSOEFMtpBNI8LHXla30Sh7T47HdfXlOvZoRRLQ9kEF8BcByI2X7WycpcHd5LZ2hk0z4%2FWhl2vsOaWVGON8DfVzPSsg%2BaD8jez05Op9hAUUNfuOoBl3pO0olSzThsStcABPUhMrgetkl4qqRJ27aBaC%2BEsD7%2BubPOM6C4OMHlfGJRd9r4piFI9kkw0dORvQY6pgF0C8A0qC8hLFv6hTIQM44%2BFwvYhuKrok6DBpboxiGsuGqa%2Fx8loa1yMbm23xlvXKzR%2FJwxpdq9RMsaUeJY2BsnGbPZEBapJ%2BIns5EQqfgQq0ybSg6NUMfYtZvMGHfnS6Ebmkvw2CFHpen53fVHJ58UEl4TtzgVs1fmBm4nP3FWW13cGz06MIZb68pzDJ5ph1qdnO%2Fu4X018oGCCxEi74Mp6tLX52DW&X-Amz-Signature=766a4b03caaa1cc52fdc5bb83e22e5f5b291771ffaf044d4da0384414661dc45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R32WS63G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDMLHTsZeSTXNEDE%2Fta7qWGhvcVOqxLVBeVSZLWTmHRAgIhAN6Ci38EdKyvTeQR6WsAGSvfabCAodGam79P6EJTiprEKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBN6o8bXnDx27FZc4q3AP66ASYPZZ%2F6CEbVW9q2zPStVlI3QxygBhtbG8c46eTnfXxwbv7Mv7pBlMLy9KzdgSKDfx7hpgjt8oNekk184PXIYGU3vuzwXrhWvCGXilLU4QLuar2Zq8U%2BYJykHUFXL%2BCmKjWP2rb6STkcUfKA5tsjrAMGcvoJOHWx5mvBpEhgn29w4MJzp5mpcrj5xijakwqHaefx4dgOGsDV8tk2GaYO7SGq%2BKh9%2F1fmbENK9SQLJBGL7JwNPOvUdUYZKWVo5zsqXeneJ%2F2ErTgpDs2iMZhwwxqmaj%2BJatdhJWMhUjlFPBxglirBpUulPlFCXi5Tt%2FWVbv9dTd3g9I7l5AGKToindiYaAAYMuyedtunCAx%2FT0ZiagRc4fDMhekMH0UiykjJTvXQw04vQzCGp5IOazWuZa6i7t71HwbWFgX0xZz5u%2FDy34pBoW9n85Pd0niBpzSxHhxmRsrUwBguq%2FCqpmZqwOjS5VB0ECb3Y2ins5qi5lyVlYqvyALkXfOH4k0o7GXLyzzq%2BCULVg2ILjl8cPZ6IVSo7Vdph%2BQRNL7mZbIw4x%2FIcHUTuIfVHp3YP0HQ7BrzM%2BYj5Kyv683o3kafChM%2F36cxjcllZTAVVVsbZ8%2FNZJZG6kcGOJ0zsfUU4zCa1JG9BjqkAeQeDV9a1QAeA9%2FYrb%2BkQbHjgqQ3ve0C6ti3pckHYwoTuV%2FuQUcBsBIvdH%2B28jARM5dZ9meTB5rf526fTi2ZVCd0dJh8TDc2QQOrM0Wiuj0M5ZfnGrrAdDdFQA0BY%2B%2FTfQ736DtFVuuOXMgi4klDHVRa%2FM%2B8cOaQRQALNi%2BaPxB1jdAe0zonl3VqAqPDgS9b52oUPkpLMdRnkYMjAd5lMG4kdTY2&X-Amz-Signature=a8a178837f92fb8e0875a2ff7f8af3a3a8f65a6141b9b439561017081f07edd8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM46T7F%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDg1EbgNwrHcFivECZ3QlGesyFkyKGQwzJgHCdV6fWEGAiEArCdCmT%2BAJG9WLIrmBi4QsfylxK59prkqFfiyqRCAueAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLYW%2FGyCpF6ckKHWxircA9eysaTKg6rOfcZ64sIZ0PxTpFI9vdzVzAofGhVCLsBwzfbvl3dq4Hfx3sYwdMCyqPyJK2iKyyWG5dKnn0qa7cGFlrT9coR34x5Vyr1RHfrqNS4CHgjpj1WFK41qHvznhz1rXKqY9IhzNqJNIuzytEbWS%2BYQIRQgZmekIeytcmuN4qMaJakqsKfVrM5eVtaWQPBJXpflL7Ce6U9mt%2BX%2FpNhXLK%2FJgsy3tpqFG0n8EBqLpWqMtTA5D6nAdRhtHrxqNVhW8BLZjeXOypzQlfffw%2BT7%2BS%2BeniH955ALITf7T5j%2B0lvN10LQepXZ7AOna5oPKjzADpIIaPTIQfNPIACardBj7tdZUADUdB5h0BtUMHRxvv9xYckDYamMPIOSQ%2BbiBUnHK3eFoTNGi6Du9PNeIo3vZ1JqXjgSYDJEVguhBLJZXYCNyV%2Fsq1XtA7A5YoyGrXqiXpmBLoo0fPOOGHqiyj7q6O4uPCiVs67X1Erp1J0YpHdJIYb6Xp6q5V%2FRNye%2BqGD2cyF9CyV1CaNiNQaX3S8hBWaVK604%2BtQCQiUHhye0hY6%2BdTKGU7meXFWkdpyK%2Fm7M6GthxCSabYCYQw2T5YORRbWOLUSXgLvklAX5UqL%2Flo9GkTtSQwkjv1fQMM%2FTkb0GOqUBmCA414Tg0xpiczAH46qPjm%2Fsn3dYvtTpKHSbcDgIumLdejgealPj2Ecbwz02lT2VihfoUo2e38wrLqLRnb%2FLpjd3zPP2V3zibPa9Qpmj32FYFsnLdc8X4CgtOadtwYWQcIUBRw12mE7PW5AhC5ZvxBbAr0iWrLO2fLXdkUUb2sRKTHc7k0xH6%2FVWF1kNogkk2x%2FUk5OHRirAu6KnzHamFhcHlCNp&X-Amz-Signature=9ba473270b95214ccad742027776c691a56416e71697d822dd367bbff6f5bd08&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
