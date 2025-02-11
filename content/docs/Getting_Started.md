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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMD6L47%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvBm8ThSMg%2FFoEVBH7702bOcdsRAUpzD3zp0%2BXa1dQXQIhAKDBPj2MZ0MLl3%2Fx0lWXu%2FY%2FJ62yEs46yQv2CZ9%2BEODyKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxzhbl4mylk2069rHYq3APDmFF5FLWFCQDBe3uWTN7scx0wRayGGazZwOkC4L7zivr7MD5OZfc8SzC5tMRPGk75oBy%2FgNPXcp16hApSqTvZ9D1SsNoSywaQrLddmdw6DuKBO%2Fk7KJ5bhr8PkEeh3gFAgjfxWlEVvgnJmeMGKeHgzDbjE%2BY2fRoK%2FCueqUTiHM%2FOS%2Ftb%2BeEWnSLtZih5vabsyePfpNlQ06hTLXOk2GEb53sMvodZfSbTbfLgSIAmVhwY4dqggyDPvESfofg%2FFnTzwxGyzuQDAn31jv1iTCzGC3nL30UhgDt52iAfwsx0GpTCsXlgdz74hDBOX6no7rqafhxis1yB5OK%2BVofjx8UOv7RFXfAg%2FG5800SG5wjw%2FDOpfrxtATLoS9Yh8j5JdRdns1NgoI9aQ8McRM%2F64xjYceO%2FJD7P3dbS0Zjxp%2BBdltEL%2Bf8xYBntdkrpotvE2WuHRsJ8cuH%2FGeld9y%2FaYfpurFv2Q5AnyeO%2BvaQ3vTo%2BSS9p5iysh8OaC4TkF2FwqN410nR%2B0yfnYuK6QmJcPt4uyy2r4tsGlEjg2aLi2LmxDY7jRuKDxBHoSheCqMH89gBDF6t6a7R58T5KTyyrScTvU%2BLbiLlBCAhIyDRR%2FDAJkxvMAMQJWSaAT5Z9PjDv7ay9BjqkAZfNp8AYsuivqH3oxJhBNyL0%2FWY%2FjsM4NyJv7OoPkhUmBwkl%2FCmbzTQ%2BMiMKDvFC3GCMYUoSDZId2BqfZM%2FBvyHs3L%2FDZrivlpEPEkKLqtEV%2BdCPrGCK13Vjf0%2BAB%2Bd081CdEu5AJolCLV%2FStt1nGguEk0oKK14Z7F1K2uoAI817AnqTdlO0b%2FRPwctzEInzB7Is1DGemHDAvcZg1IHPzY38IYts&X-Amz-Signature=9182028bbec8da58d952dd1bfbf2cc2e8d1a8a6240aceaefb0ab5c8e5a0417dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMD6L47%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvBm8ThSMg%2FFoEVBH7702bOcdsRAUpzD3zp0%2BXa1dQXQIhAKDBPj2MZ0MLl3%2Fx0lWXu%2FY%2FJ62yEs46yQv2CZ9%2BEODyKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxzhbl4mylk2069rHYq3APDmFF5FLWFCQDBe3uWTN7scx0wRayGGazZwOkC4L7zivr7MD5OZfc8SzC5tMRPGk75oBy%2FgNPXcp16hApSqTvZ9D1SsNoSywaQrLddmdw6DuKBO%2Fk7KJ5bhr8PkEeh3gFAgjfxWlEVvgnJmeMGKeHgzDbjE%2BY2fRoK%2FCueqUTiHM%2FOS%2Ftb%2BeEWnSLtZih5vabsyePfpNlQ06hTLXOk2GEb53sMvodZfSbTbfLgSIAmVhwY4dqggyDPvESfofg%2FFnTzwxGyzuQDAn31jv1iTCzGC3nL30UhgDt52iAfwsx0GpTCsXlgdz74hDBOX6no7rqafhxis1yB5OK%2BVofjx8UOv7RFXfAg%2FG5800SG5wjw%2FDOpfrxtATLoS9Yh8j5JdRdns1NgoI9aQ8McRM%2F64xjYceO%2FJD7P3dbS0Zjxp%2BBdltEL%2Bf8xYBntdkrpotvE2WuHRsJ8cuH%2FGeld9y%2FaYfpurFv2Q5AnyeO%2BvaQ3vTo%2BSS9p5iysh8OaC4TkF2FwqN410nR%2B0yfnYuK6QmJcPt4uyy2r4tsGlEjg2aLi2LmxDY7jRuKDxBHoSheCqMH89gBDF6t6a7R58T5KTyyrScTvU%2BLbiLlBCAhIyDRR%2FDAJkxvMAMQJWSaAT5Z9PjDv7ay9BjqkAZfNp8AYsuivqH3oxJhBNyL0%2FWY%2FjsM4NyJv7OoPkhUmBwkl%2FCmbzTQ%2BMiMKDvFC3GCMYUoSDZId2BqfZM%2FBvyHs3L%2FDZrivlpEPEkKLqtEV%2BdCPrGCK13Vjf0%2BAB%2Bd081CdEu5AJolCLV%2FStt1nGguEk0oKK14Z7F1K2uoAI817AnqTdlO0b%2FRPwctzEInzB7Is1DGemHDAvcZg1IHPzY38IYts&X-Amz-Signature=c768a12aef19649eb5b7fb5947a06f360d4b16b94c3131c1722f57a40f4d6802&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRBO5SRV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi3Tr71mUmg%2BJw87Ti4vP1IGUonb%2F7e5ziDLvXdWihAAiEAuTsX99BMq%2B2lQlbqDLk3ipUz0FtDmVHZ1l8R16UjN5cqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl6yNcGPKJFsRBvMSrcA8up5ACeNPNFD33YurHo6oFgmC6fDFuB1mEGoz0JGGQdkVMFnFDrYq%2Fv1ufyW6YDtCrbM5GBX4b79zgLFTB3Ujz66aCJSR2Oq9J76ecZuAlkRvx9499aStvL%2F9RiMz20Vcy2CD54qTgHBxW48EXkcbIWtsw%2FtdzSzzLd4GOSJTDXnXfa51NCB3xUn%2FluHZW2xVCNFoctWIbmnmypHsA4yBBOvVSJVkyPAjiGJ4ZDPLbm86EkSFNF5GBaSowFA8yY6H1PPRNjLTPSC5fAMr%2BzW9lU2Z1g2eRW38%2BAFJH2QhIKDxluRxp5TvPBoIv6aB15PEy96VIGM0cipYsfewx4u7nIukfW95JE0aK3uUftoZUuAXNCUy3FeBf2oxyeUDHbW70Lk1aEOyZd%2Bwwxc9tKnbQsa40jabPmdVGDfJnpMT8I0HCCtkQCrrqZXqZdcZlZrB78D8BU58ggJa07d5jhmlmb3D7jZcvsI0WMDNaUXnWXaSvtS%2BQtQH7GzacexiHwmrmjJNU5ndKE9RsXui8T0iqLvWhKXYvdeWcc8Kt%2Fq4jxo%2BZBJC92veNDJ59W0yiqCy6F9dgtasdILr0E4SO2wMqeL2toan8HvDbeCXHMT68ofU6Cf2TF%2FSDmFBZAMMTurL0GOqUBGFBVnLz%2BdrqJ8bPXecwkOxkyDfzCwfVKGb%2F2ZCR5%2B4cQKCeIPfRumGxVsz0oXD38qM%2FajzTFITMe%2Bx74CBuVsYY8SeXEfrv3MFBvwoIoD4vnluKWO2Cg6lGw39ZXX%2B%2BDH0tZDSKLXEGtRg9CMZhnVhRl10yAC4%2FUbQa2Rmaqq0TOungGpZujvZUZpylWlDxEq59mdgwRjkJqiNsaHV15KjV7smAj&X-Amz-Signature=adfc5faf06b0ac8344322ae825b9072e876db3f6eb4d82293b270c40bf470533&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SELM4BE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy%2FEjk4QLJuQu8WXP7FP5M4fl6%2BAOtzZ16adVHmoSrAwIhAIyFiRQGs4Fkc6bYq7jrTYdXFKNnUn6GXF7OSuU7ttDbKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXvUr7gt6N89A7EYsq3AMo5UrrM7651F2cwF2%2Bnh3dZ6tyfzZwOLmYCQthbW6TBtWPCUt6V5fTZHUX5Fo%2BB5L2I%2FvaAtlXTOmeuTL3vn5vW4Nl7M116z0Lx4SHcYaotBkH4zNbKQSKZTKr%2B%2B4CRx%2FqTLo6Bd1y3s8IXYWg%2BIGo6jU1ayHOw0cnL%2BdAPpYlsvjnuUZWWtddzZFezKysLOiBE3wAYDR%2BhqOiw6T%2BoAD1rKckvWH4iReuQD6XHjPPwHM5O9nlcNnHmwstHs1iOKxpWWriuanBZVyW9IuWF181rXK4lI0wBnMkfQNtjQyTjN5h2yKJhAIcRQLc%2FUR%2FDTx3f5y2zUVV44lMtYvXpFyrZApm%2FeFtFiXB5ueUCi%2BrT3IH0BRsaxKIx0bUmJT3JWjzBGryiT1q2C51Jub0M8fTx1syyX%2Ba74Mfgv9NoVq%2B0EpnF3B6Aw0TJynW%2BvfqigUoP1KOwp0HK0s4OqCTm%2FWZRQ7rUSVi3iFqJYM6pV9P%2B711CiI3C1JfjJNau%2FaJn226Jj2I3%2Bu1Yj%2BLzRldgSErGihC1tTWLbVHOPrJb60wg7xkZttAnjxNzZ2UG9PtKmwL4wSAp1EZjLShHLaNv%2BtR6sawCXP9cOp5%2FxFbA05m7Q9OqA38OQNmRcX2NzDX7qy9BjqkATBT3DIFbc2EQOt03VvCOXghqJm2IG3aErSpZp5HoRY5kHhUVi1K0D1TSh5LxaGfOE1eavH6UKO35GFXLe%2B8o4go7%2BtcLDmUMIBr7SHJmfWzvoCLcgV6MORQR4g1vZAtQNl6ExEZuuXbrC%2Bmz8PvRTijNctpqc%2FSXRRgFWbrNPdllBgmqbWMBH%2FGHsVyl3SKtvePxLRDROaS6pmB0n5fTguP4aQR&X-Amz-Signature=5c5400f88fdec45d36ac150234dd2d586be2b7d336081407a17b2cb3dbd6b339&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMD6L47%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvBm8ThSMg%2FFoEVBH7702bOcdsRAUpzD3zp0%2BXa1dQXQIhAKDBPj2MZ0MLl3%2Fx0lWXu%2FY%2FJ62yEs46yQv2CZ9%2BEODyKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxzhbl4mylk2069rHYq3APDmFF5FLWFCQDBe3uWTN7scx0wRayGGazZwOkC4L7zivr7MD5OZfc8SzC5tMRPGk75oBy%2FgNPXcp16hApSqTvZ9D1SsNoSywaQrLddmdw6DuKBO%2Fk7KJ5bhr8PkEeh3gFAgjfxWlEVvgnJmeMGKeHgzDbjE%2BY2fRoK%2FCueqUTiHM%2FOS%2Ftb%2BeEWnSLtZih5vabsyePfpNlQ06hTLXOk2GEb53sMvodZfSbTbfLgSIAmVhwY4dqggyDPvESfofg%2FFnTzwxGyzuQDAn31jv1iTCzGC3nL30UhgDt52iAfwsx0GpTCsXlgdz74hDBOX6no7rqafhxis1yB5OK%2BVofjx8UOv7RFXfAg%2FG5800SG5wjw%2FDOpfrxtATLoS9Yh8j5JdRdns1NgoI9aQ8McRM%2F64xjYceO%2FJD7P3dbS0Zjxp%2BBdltEL%2Bf8xYBntdkrpotvE2WuHRsJ8cuH%2FGeld9y%2FaYfpurFv2Q5AnyeO%2BvaQ3vTo%2BSS9p5iysh8OaC4TkF2FwqN410nR%2B0yfnYuK6QmJcPt4uyy2r4tsGlEjg2aLi2LmxDY7jRuKDxBHoSheCqMH89gBDF6t6a7R58T5KTyyrScTvU%2BLbiLlBCAhIyDRR%2FDAJkxvMAMQJWSaAT5Z9PjDv7ay9BjqkAZfNp8AYsuivqH3oxJhBNyL0%2FWY%2FjsM4NyJv7OoPkhUmBwkl%2FCmbzTQ%2BMiMKDvFC3GCMYUoSDZId2BqfZM%2FBvyHs3L%2FDZrivlpEPEkKLqtEV%2BdCPrGCK13Vjf0%2BAB%2Bd081CdEu5AJolCLV%2FStt1nGguEk0oKK14Z7F1K2uoAI817AnqTdlO0b%2FRPwctzEInzB7Is1DGemHDAvcZg1IHPzY38IYts&X-Amz-Signature=2c091b372b07fca86827116e7b9522bea7380ebc04a2a9a02782383d909428d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
