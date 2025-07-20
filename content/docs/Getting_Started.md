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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFQFZVR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFPGu0BOkUvUIaL%2FGC2MqcSwK5JiPNUZOpHWquII2PSAIhALEIRn%2B31G52uEXh0uiSgO1%2BgDdPU33afTRSb13OxwHRKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeT4Inj1Zsh1vLeokq3AO3oSvh18Pp2Y8kLf8kEiCD8%2FrOp5U37%2B9551mNSAU%2BbJU%2BJ2YBtCnyrcA28g4Q9XKtyvoakX7vAhnk%2F3eP6P9IQVV13qkHrOr%2BuBrKe8D98LFrA%2FAh%2FxpaqTmfwdwoQsODhl3qmPiyZ38ZL1DtfSMlyCH3gQ%2Bv3XRbSF6WUevchfCzwo0HiEe%2FnxhAlAUVrDTMl9vg1ZKSPbnAShgPyCT0LFgDgqpEo9Cxtp9%2FaQo8OBV4hsrVYf0N37uCbeRwsCNUTjA22SUv2j4s0QQSho2bLOi2CtKO1uuCEpZ4rnC9vIccGmQQ%2BKbA6Ppx%2F1vm858gNuvpxe2TXhECFyw%2B4aXtAAIqz2%2F3K%2F6ahemlLqTCHfrqRtoxy5Y2wOgF5Trz7eTG12YHwjHrd%2BkJX94rnbWFzq%2B2vtO4IV1qsOOlg3uduMFy47Pb4%2Fv%2B4ckEUX5l7tU%2BkEkWQaNUb%2Bg%2Fijb2MWwdhA%2F6VKW9kKXzIN9ZECu%2F20%2FKZJSmHaQlm11PDkXsSLXpl%2By8vxH%2BHYrfPGq%2BWVQIEDCONBg23rDlzXAgXcCb9K%2FRDMntELUZm4THP1sMEv98r9%2BefpBBzNSKgYkCATcBdxxk8vodkrVznb%2F4J2u5u%2BeDHCup3vvKxAZ1%2BDCs1fPDBjqkAWuhzEfHacmGT57nJ%2F8%2BIQGTVvD4NFoaU5We2boUpIiklHkbvr0%2BgoXH%2FXeEwixdbcInKkk%2FiaADdIUnPJC0RVOgtfGQleJGSKNt%2BFROUvHjDZ1ZTCpB7asaPH8XjPbgmQv9LQUpCtrcOJXna%2BRpDuV2hV70OPf1Vn5f6drTjBorlmyg9LLsIBUMUGxpa5hQK5MUeW6gDNugNlHhUM8ifARWlCyp&X-Amz-Signature=4a1e13a63a52865264a5b9870462ee131b6f79b4583df06fe9f2da4a3115cb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFQFZVR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFPGu0BOkUvUIaL%2FGC2MqcSwK5JiPNUZOpHWquII2PSAIhALEIRn%2B31G52uEXh0uiSgO1%2BgDdPU33afTRSb13OxwHRKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeT4Inj1Zsh1vLeokq3AO3oSvh18Pp2Y8kLf8kEiCD8%2FrOp5U37%2B9551mNSAU%2BbJU%2BJ2YBtCnyrcA28g4Q9XKtyvoakX7vAhnk%2F3eP6P9IQVV13qkHrOr%2BuBrKe8D98LFrA%2FAh%2FxpaqTmfwdwoQsODhl3qmPiyZ38ZL1DtfSMlyCH3gQ%2Bv3XRbSF6WUevchfCzwo0HiEe%2FnxhAlAUVrDTMl9vg1ZKSPbnAShgPyCT0LFgDgqpEo9Cxtp9%2FaQo8OBV4hsrVYf0N37uCbeRwsCNUTjA22SUv2j4s0QQSho2bLOi2CtKO1uuCEpZ4rnC9vIccGmQQ%2BKbA6Ppx%2F1vm858gNuvpxe2TXhECFyw%2B4aXtAAIqz2%2F3K%2F6ahemlLqTCHfrqRtoxy5Y2wOgF5Trz7eTG12YHwjHrd%2BkJX94rnbWFzq%2B2vtO4IV1qsOOlg3uduMFy47Pb4%2Fv%2B4ckEUX5l7tU%2BkEkWQaNUb%2Bg%2Fijb2MWwdhA%2F6VKW9kKXzIN9ZECu%2F20%2FKZJSmHaQlm11PDkXsSLXpl%2By8vxH%2BHYrfPGq%2BWVQIEDCONBg23rDlzXAgXcCb9K%2FRDMntELUZm4THP1sMEv98r9%2BefpBBzNSKgYkCATcBdxxk8vodkrVznb%2F4J2u5u%2BeDHCup3vvKxAZ1%2BDCs1fPDBjqkAWuhzEfHacmGT57nJ%2F8%2BIQGTVvD4NFoaU5We2boUpIiklHkbvr0%2BgoXH%2FXeEwixdbcInKkk%2FiaADdIUnPJC0RVOgtfGQleJGSKNt%2BFROUvHjDZ1ZTCpB7asaPH8XjPbgmQv9LQUpCtrcOJXna%2BRpDuV2hV70OPf1Vn5f6drTjBorlmyg9LLsIBUMUGxpa5hQK5MUeW6gDNugNlHhUM8ifARWlCyp&X-Amz-Signature=9a360048cbb168ea832674adb9cf81dcfb449c1c89b848a1fec809eb614bc7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFQFZVR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFPGu0BOkUvUIaL%2FGC2MqcSwK5JiPNUZOpHWquII2PSAIhALEIRn%2B31G52uEXh0uiSgO1%2BgDdPU33afTRSb13OxwHRKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeT4Inj1Zsh1vLeokq3AO3oSvh18Pp2Y8kLf8kEiCD8%2FrOp5U37%2B9551mNSAU%2BbJU%2BJ2YBtCnyrcA28g4Q9XKtyvoakX7vAhnk%2F3eP6P9IQVV13qkHrOr%2BuBrKe8D98LFrA%2FAh%2FxpaqTmfwdwoQsODhl3qmPiyZ38ZL1DtfSMlyCH3gQ%2Bv3XRbSF6WUevchfCzwo0HiEe%2FnxhAlAUVrDTMl9vg1ZKSPbnAShgPyCT0LFgDgqpEo9Cxtp9%2FaQo8OBV4hsrVYf0N37uCbeRwsCNUTjA22SUv2j4s0QQSho2bLOi2CtKO1uuCEpZ4rnC9vIccGmQQ%2BKbA6Ppx%2F1vm858gNuvpxe2TXhECFyw%2B4aXtAAIqz2%2F3K%2F6ahemlLqTCHfrqRtoxy5Y2wOgF5Trz7eTG12YHwjHrd%2BkJX94rnbWFzq%2B2vtO4IV1qsOOlg3uduMFy47Pb4%2Fv%2B4ckEUX5l7tU%2BkEkWQaNUb%2Bg%2Fijb2MWwdhA%2F6VKW9kKXzIN9ZECu%2F20%2FKZJSmHaQlm11PDkXsSLXpl%2By8vxH%2BHYrfPGq%2BWVQIEDCONBg23rDlzXAgXcCb9K%2FRDMntELUZm4THP1sMEv98r9%2BefpBBzNSKgYkCATcBdxxk8vodkrVznb%2F4J2u5u%2BeDHCup3vvKxAZ1%2BDCs1fPDBjqkAWuhzEfHacmGT57nJ%2F8%2BIQGTVvD4NFoaU5We2boUpIiklHkbvr0%2BgoXH%2FXeEwixdbcInKkk%2FiaADdIUnPJC0RVOgtfGQleJGSKNt%2BFROUvHjDZ1ZTCpB7asaPH8XjPbgmQv9LQUpCtrcOJXna%2BRpDuV2hV70OPf1Vn5f6drTjBorlmyg9LLsIBUMUGxpa5hQK5MUeW6gDNugNlHhUM8ifARWlCyp&X-Amz-Signature=2cefcda77ea3292277fd9a61fd40681994aa83a72a4754239e2e2f5f7bc1fec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBZATO6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BiwN9hfjs7kSpWR1pG4gad5gAqfcNSw2%2BG%2B994eumDAiEA13eg1v3o9flC5aQJnceCB%2Bpv5VYZxmSje%2FlB0syPh%2FgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsXrWbPsMn%2B2h%2F%2FgSrcAyjvj%2BgRSnH81TIqCJS4X85WkG6ZJrGdbwXzFLoTqif5N5i6Ta0QuPJTS0NhwEffb%2FV%2FPWn0zIYnBDwcXtzgYDif0n528Kjvm62GB3r5HYNzP9BWXLAZuIDx0K1Wuut7iL50l5VZTpNpOuT%2FBr8dGgyYW1reI%2FVRrahPLQcHKSPyF6XjXW6C2yneZfIdeugbbmZyNTgA8NfCAWtgXYcxOGJZFDMIzBaQqpYXRqqz936mYHj1GdcIdjbfLTCBB%2FnC0VNptyJen%2B4%2FMWSdHxdV0SF5Xu2O7c10Frx%2B25Ajws%2BnY9o381rodnjpA%2B7np3fKH4vbOiUHrh7iUKt9H1yE1T47jhSJKy4SXiLLPy9Geggxdv4QWGb%2BNZVUF9HMabB27gkcaUScaroC0TXnGhKHM5vG5Zf77f1n7qV%2FuMyDtSw1e%2B9maUvimYdfga9SwwX2ddFZekutNu1Mui%2B9aOO01mlFVbBFYLNnix9Vs5I5fwQQvMsgdxU0nlSoPCz7%2FyhkNHyQ6KoiDKvRxvV0X%2F01OXnpeNVokyKy3%2F6ghtAjtHEFeP2IPm3%2FJg0fmJ%2Frs8pq6%2F%2FIki4ETtwbgER0mI1KCjMMGXonWpP6mpKRpx6jYXqzuX0HkvIoAyBC0HwbMLra88MGOqUBs%2Biql6BShTXuDSk82GC3A9DLlFxB%2BSbbdFtK7pYIdM2cpy9RcjzgB0bJcEXopxzsIvphEsL9NTKJPgT2tIApU1Mxepub4NKWGYixgqlmGRgzB7A1YhUvjNBNcJj7ydAfPlK%2BTkZRsQYz%2FIDht3QhY8Umhpwj7%2BOhb1j6jgwmggxrAriXfpo5%2FOXYVlmy47j0s5V%2Bc%2Ba1nlulEnj4jde%2FdVyNEVU9&X-Amz-Signature=6872bdd684b572e9f3f547c5328591011580c89b0b601aeef49977868b155e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZXEDJ3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu7ysUt5OHgqTr1PtseT5H9mrk8Jo%2FmUlTTs0YvuwE6gIgY4f6iOw9GERiqLunPEfH22vIab09iVPyAP%2Bv%2FqA0z6UqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMJEoPD0dnCoHw88CrcA7r6V5JjgsUmGlDWrY2SrZvLRFD%2FYD0ppWf6NeD9DH0MkCms%2BSovlb08ZX6OG8utJjYqxnot8rmtyQ6Zva3kPGuubRFsp2JfHVTQZz3HxNr6xavZkbaTFXQdhV2qEfOEy8pmB3dmtXz0BYGbdx7oHdT12Rmwbof8YLYUwsQ5b0LMCb3uQ4xSTjta444U2VTygLWHcVdfZ5TaVYhqXdR80bzt%2Fn%2BWisPB1eb2YfSOfvEr8o%2BnLWib7ax3eNh1k%2BwQk3ETDtLD45hMQk%2Bypg%2F%2FENNmANHH3%2FUUmuNLkA9I90Sutztb%2F6xBcDlhzTytImW5Nzu04QkbCkw1zyzzhJxmu%2F4lEQSTW6ElzxzKPvIBpKVGWAZdjXn76qkSQcp0b%2FFfibATwpymxke6ZeyURZvromTa7wquSOE2c0iLYKhyVdioposXhHEO7MjbF0TnSF%2Bh7%2F%2FqjWEu19K9FtBy19NWVlhT83LehLUTJRk4C8c4WASUB093RN%2B0%2B13WumzZG3Qo12zjU8p2aXCwpFE0tNTCaZMl7BaqtxG8ku%2FurqROP4H7CvkL455QOmxxsd%2FSf2WGo8SYl%2FKxkNxz2UTvi7Zzuq53KtXE97KI%2FaG83OVMsiV%2FC%2F5gLaKVk9ZEPMpPMJvV88MGOqUBrZJOy3Amj%2F0iR7eZohtUn93IZgVTAsILRKLgxupJ32aGpLd7TGW3aS5YEtK5iuRjpi7%2Bt6sRCLVJQFRqzYmYq0Ovawhv8qJvMF3KRt9rvFxvLXPBrp%2Fq8j8gj%2FeyGQl52L0pAqxE31Ey3nLdJSXCeDFAC1qcKP%2Fv4A7PJbb7XEPGhD4tQjLBQmkyV8%2BuDvkT%2FA5yaI7rii5DmfLQnmNVhva4WdIw&X-Amz-Signature=dcccf98f64f3334aa2882da1833afc7df42710f4e2543b9e2b2a294dd0e7f800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFQFZVR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFPGu0BOkUvUIaL%2FGC2MqcSwK5JiPNUZOpHWquII2PSAIhALEIRn%2B31G52uEXh0uiSgO1%2BgDdPU33afTRSb13OxwHRKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeT4Inj1Zsh1vLeokq3AO3oSvh18Pp2Y8kLf8kEiCD8%2FrOp5U37%2B9551mNSAU%2BbJU%2BJ2YBtCnyrcA28g4Q9XKtyvoakX7vAhnk%2F3eP6P9IQVV13qkHrOr%2BuBrKe8D98LFrA%2FAh%2FxpaqTmfwdwoQsODhl3qmPiyZ38ZL1DtfSMlyCH3gQ%2Bv3XRbSF6WUevchfCzwo0HiEe%2FnxhAlAUVrDTMl9vg1ZKSPbnAShgPyCT0LFgDgqpEo9Cxtp9%2FaQo8OBV4hsrVYf0N37uCbeRwsCNUTjA22SUv2j4s0QQSho2bLOi2CtKO1uuCEpZ4rnC9vIccGmQQ%2BKbA6Ppx%2F1vm858gNuvpxe2TXhECFyw%2B4aXtAAIqz2%2F3K%2F6ahemlLqTCHfrqRtoxy5Y2wOgF5Trz7eTG12YHwjHrd%2BkJX94rnbWFzq%2B2vtO4IV1qsOOlg3uduMFy47Pb4%2Fv%2B4ckEUX5l7tU%2BkEkWQaNUb%2Bg%2Fijb2MWwdhA%2F6VKW9kKXzIN9ZECu%2F20%2FKZJSmHaQlm11PDkXsSLXpl%2By8vxH%2BHYrfPGq%2BWVQIEDCONBg23rDlzXAgXcCb9K%2FRDMntELUZm4THP1sMEv98r9%2BefpBBzNSKgYkCATcBdxxk8vodkrVznb%2F4J2u5u%2BeDHCup3vvKxAZ1%2BDCs1fPDBjqkAWuhzEfHacmGT57nJ%2F8%2BIQGTVvD4NFoaU5We2boUpIiklHkbvr0%2BgoXH%2FXeEwixdbcInKkk%2FiaADdIUnPJC0RVOgtfGQleJGSKNt%2BFROUvHjDZ1ZTCpB7asaPH8XjPbgmQv9LQUpCtrcOJXna%2BRpDuV2hV70OPf1Vn5f6drTjBorlmyg9LLsIBUMUGxpa5hQK5MUeW6gDNugNlHhUM8ifARWlCyp&X-Amz-Signature=d4abcbfb3b1206bf2bc86b4aef7fee3bf5d5b98cdd690fb0c15a841fb0e3cac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
