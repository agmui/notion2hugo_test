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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKHR264%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFUrcqyJKfn0fvYwoZsQavL8QjDmXVCU284TiVSNkER0AiEAxJRVODNk%2FKi0VdfebEFk0MGMy2tdl1rXwKl5%2BGTM7e8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcSVereYxFvy%2FPh%2FyrcA9QLR51Y8Cim6ZfxienIIciKWT7vID5VCLSpEbanWrU4%2FLAR9YYC0Pr3jQ0EKimytPlX%2FV4nyh%2BKbHY58N6h9XhgU5vrlcjSUnKoFZA46NkCs8Jthmfq3Ymip%2FbbQhyNXjCQevTJjw%2Fyn4F%2BJkrG5PZtxXUuqqQMBYlIlEKWquDNcyqLcM8441qqmBTeip2m4CVETEP3iSfb6B9DplLArYM9B9oV8rnJKJvOB8EgatAjztyO0pzC5c1pRxPPVT5hzDyP%2BtN5m6%2BVmGMwAQLSI1A29EqVKUopQOB7Gq59RnnoeOBvF0sKQsb%2BQpfsWvidcdJKCnk%2BGBD2Pr0%2Fu89KuAccVpLSbbfwsEOFcHJT8b4l2Yf%2FrTgW3ydz%2BLesYnko5kkQOrBHsV60LJqqblPfN0ZPgCjwy%2BUtDlM6Ws9NJm4COKQewUHEY8onuLStp8XmbPmvA40zTCMjc5XDtichfmq1kNaIVXlXK0mOUnGMtBkvtYbNeFrDH3rqq%2FLuEnz03yZXqUZXIWoazLCZmHA6GY71LdcIC8wtTpYT%2Bqy8ezwWzIxjIAf3r8eq7gPa5c6Ra2OCQKDp07nXFYRBHa9018yFCkdRXqEd%2BqLRZJlCjIRPKmEYS9cgn%2BQKxUnMMKW2pr8GOqUBD2c21FkbxJQ%2BsWIaOgSJLu%2BbfBsb8%2F0kKJaXu3P0q9QvnXlISM3tujWYweLjVJQ3Arj9x2RsjVALh8vhmPiHAZJCY%2BSSmk72E4JdSY1KgeDTTG3sA7uSA%2BLtP5gM%2BYsC%2Bfgqsr2sWz2d5MfesPtwAwkJc%2BccKEnQ4Z6UhZf2gxm3L7Z8rbhVKhoz5ojxPpNr6pbF9iR2Sdc7Q5Tx6o0yjAgocJWO&X-Amz-Signature=e00e05293a0ab4886c7d7f8979a8d441af6f65a4b82a7937c139e47f9eb344fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKHR264%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFUrcqyJKfn0fvYwoZsQavL8QjDmXVCU284TiVSNkER0AiEAxJRVODNk%2FKi0VdfebEFk0MGMy2tdl1rXwKl5%2BGTM7e8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcSVereYxFvy%2FPh%2FyrcA9QLR51Y8Cim6ZfxienIIciKWT7vID5VCLSpEbanWrU4%2FLAR9YYC0Pr3jQ0EKimytPlX%2FV4nyh%2BKbHY58N6h9XhgU5vrlcjSUnKoFZA46NkCs8Jthmfq3Ymip%2FbbQhyNXjCQevTJjw%2Fyn4F%2BJkrG5PZtxXUuqqQMBYlIlEKWquDNcyqLcM8441qqmBTeip2m4CVETEP3iSfb6B9DplLArYM9B9oV8rnJKJvOB8EgatAjztyO0pzC5c1pRxPPVT5hzDyP%2BtN5m6%2BVmGMwAQLSI1A29EqVKUopQOB7Gq59RnnoeOBvF0sKQsb%2BQpfsWvidcdJKCnk%2BGBD2Pr0%2Fu89KuAccVpLSbbfwsEOFcHJT8b4l2Yf%2FrTgW3ydz%2BLesYnko5kkQOrBHsV60LJqqblPfN0ZPgCjwy%2BUtDlM6Ws9NJm4COKQewUHEY8onuLStp8XmbPmvA40zTCMjc5XDtichfmq1kNaIVXlXK0mOUnGMtBkvtYbNeFrDH3rqq%2FLuEnz03yZXqUZXIWoazLCZmHA6GY71LdcIC8wtTpYT%2Bqy8ezwWzIxjIAf3r8eq7gPa5c6Ra2OCQKDp07nXFYRBHa9018yFCkdRXqEd%2BqLRZJlCjIRPKmEYS9cgn%2BQKxUnMMKW2pr8GOqUBD2c21FkbxJQ%2BsWIaOgSJLu%2BbfBsb8%2F0kKJaXu3P0q9QvnXlISM3tujWYweLjVJQ3Arj9x2RsjVALh8vhmPiHAZJCY%2BSSmk72E4JdSY1KgeDTTG3sA7uSA%2BLtP5gM%2BYsC%2Bfgqsr2sWz2d5MfesPtwAwkJc%2BccKEnQ4Z6UhZf2gxm3L7Z8rbhVKhoz5ojxPpNr6pbF9iR2Sdc7Q5Tx6o0yjAgocJWO&X-Amz-Signature=321825fa28f9580081545a2da52f0f8e6452c58191db1f5e484cfe9fa53f7e62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOZNZ3U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDTWuSlJ5XoH18G%2FiJEh%2B87qagdQ9bQH%2B6kEOFJofe3AQIgUDcNH40Y3Rz1uD0aDTElQk%2Fqj%2BVdwdClLzwokppKV9YqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkJLGZUYdSJogcx%2BSrcA1FsjrkUg5TGkokBRZMJ7QwYW4wErxsiH8dOnnSoNiVdi1x2SlsZzmfuCh7OPCJyo0SS5tP05KCSoKCcRkhH1ww90PbAnGYJj%2F%2BWWB4k5T5VQYQWi5uJ5bMbGXAvRIcqWWkHG1ajCMWoEE4dVd0fpNeqDC6iDMP%2FtzR10MR9cNEjN20yzuwNAPl8nU72Vm5deKiC%2BOzdAd3AcH1SQmwHwdu8Y9RxcZ1xwei0ljUoGpeXctFcDG6gbLoyCQ6%2FWgW6bilMTqiA7%2FrpEVTZVTa3cCTbQIWnq%2Bxdn5I1i%2F0FPSIXjCz1PbfHUK%2BTFJGwR35Y%2Fg3%2FTNeocnfxe4oh7eWNyUnj%2FA1LnUE0%2Ba8Wf%2Bv8qiBC4t5y3VKfFqhNsiLcCzt6ZowIxm6b4LTsCFO4ztsi2RHClOudsm343sxZ9vuIjkAqrOi1kJAjjC343Arw3FZyfzj%2BEcDMhA1%2B431XPAM1M4c%2BNFhLQnIbqfYakT4DlrvXoW5ZN3Es4JbrOXcejjTftBE%2FsiAMeVJVDvDmTbrFyhPXk4GsVQwlE1SmarigqiiZXIDIG12AGGRwqo%2FSX0pZiihOmNE4tIhm3wuy%2B%2B01FQvuGT%2FpGgCG%2B1w5VX561amSAdUq8%2BtxYF2pGdTeMJ%2B2pr8GOqUB7IAnham0umDFPrDr%2Bhhw2D0Z5CxTVJx4U%2FwvK9QIycq2gV332qB4rzKpOeRB1UoP7lXZ0qOD1gEIGDkijgRVmuGBomTLgHIi5W8q0B3QBGTQj8fTgsVKofFlJm2fcEXq0qzfVJxVGnWEHBIZQy6HJJj%2FHotevORKecJDJ70aVV4mr5Z0wSmKn%2Fl%2FfGC0AzYzrfPgnqX%2BqATEtWPDCF4DDDIVnYe7&X-Amz-Signature=680dc7c72d5f30149984be217c70c26d5975cc2dc40d6a2ca1be2b4fa6ae9f46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD42ZIPQ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCsRtH4%2FTe8YIF6T9T5vOsTT6iyTp%2BB1WINhcf%2BbPp8WgIhAIULqfvqPMWUjmNQiBjIt5QGrC6kWGBzLkZVFXc7jE6tKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvsnAy8vPXF1C%2BEW0q3APhbh4jdaQotr6Tpa4XPppyIUtcyDaAnyw8L3%2Bob0%2F4ywK4BdkwpcAL8fmIzmQRznn5NWrVIbj9kCEtADri%2BUAgDaQ2eisGZ8bte8uOTefIjZvUQPq892%2FOzpoVDaxQHQ7KXrNSXV9YT9d7Uq76W1NmD4k51TyzIL4atOlHQnHl%2Fi4ihV9xPm4bgoL%2B%2BiF5GraH%2BI89nHW7RSACWPu9mgrgABIvMRqsv%2FwybfONhjB9cwW1dhK73v1f3B3944M%2FIdc2y58kiVMbf2oaX8tS5JEx2Beq015rpnp2V2X0NsMARXLMMhwWSphhExRkfiqvskj2YTpXQgNDYAIete24GxeAPPrYLrSi4MrNRxZkXS06GhtqGgo%2FaGEAS84dwF8u9Jy9Ki2D87OX15iBPS2rWPWXlZg78PG98jXOmlgoWod3nt6568UjMeXsIuxMe216lGy5Ibs8aiz4Ko%2BlIAiHnrVtBEjwqcTV5zy4LAwcnCw4j5J%2FUiefMd9mqzppWY6d3qDjucaYd4XRH8d%2FMk2V32mAP20eY6b%2Btxny7Bppo%2BQbAn0ovhVXofkOsL6j53hPMuQ%2FLHomY3BrU67WgYtF03t316KJVk9hiSimGQRRiSlCrJ7%2FyyHlYBzl4Drp4jCktqa%2FBjqkAdyzcuExsn%2FCaumKv7D08KhXh54yGicRexp9lXuVpe1neNOSfiL9Di1by%2BcMh3bnhhFc%2FCDNlkIOS0ONJY0evoPuzAjUaDY%2FajECguXIyYNwUSgLgktGDV2NSRhj0sj%2BUqh0BMwCG%2B3q0CTNPxEp7sQ6cwqUfn9JIt6TEYQjKbMWhmSWr40XRsDsWjPA9pAbs4eaui9%2F4Lpk5N5OcYfZTA0YTWz%2B&X-Amz-Signature=8dbb71119bd823c90769e7612f874825375a86b64573f34e3019b78f78895959&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKHR264%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFUrcqyJKfn0fvYwoZsQavL8QjDmXVCU284TiVSNkER0AiEAxJRVODNk%2FKi0VdfebEFk0MGMy2tdl1rXwKl5%2BGTM7e8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcSVereYxFvy%2FPh%2FyrcA9QLR51Y8Cim6ZfxienIIciKWT7vID5VCLSpEbanWrU4%2FLAR9YYC0Pr3jQ0EKimytPlX%2FV4nyh%2BKbHY58N6h9XhgU5vrlcjSUnKoFZA46NkCs8Jthmfq3Ymip%2FbbQhyNXjCQevTJjw%2Fyn4F%2BJkrG5PZtxXUuqqQMBYlIlEKWquDNcyqLcM8441qqmBTeip2m4CVETEP3iSfb6B9DplLArYM9B9oV8rnJKJvOB8EgatAjztyO0pzC5c1pRxPPVT5hzDyP%2BtN5m6%2BVmGMwAQLSI1A29EqVKUopQOB7Gq59RnnoeOBvF0sKQsb%2BQpfsWvidcdJKCnk%2BGBD2Pr0%2Fu89KuAccVpLSbbfwsEOFcHJT8b4l2Yf%2FrTgW3ydz%2BLesYnko5kkQOrBHsV60LJqqblPfN0ZPgCjwy%2BUtDlM6Ws9NJm4COKQewUHEY8onuLStp8XmbPmvA40zTCMjc5XDtichfmq1kNaIVXlXK0mOUnGMtBkvtYbNeFrDH3rqq%2FLuEnz03yZXqUZXIWoazLCZmHA6GY71LdcIC8wtTpYT%2Bqy8ezwWzIxjIAf3r8eq7gPa5c6Ra2OCQKDp07nXFYRBHa9018yFCkdRXqEd%2BqLRZJlCjIRPKmEYS9cgn%2BQKxUnMMKW2pr8GOqUBD2c21FkbxJQ%2BsWIaOgSJLu%2BbfBsb8%2F0kKJaXu3P0q9QvnXlISM3tujWYweLjVJQ3Arj9x2RsjVALh8vhmPiHAZJCY%2BSSmk72E4JdSY1KgeDTTG3sA7uSA%2BLtP5gM%2BYsC%2Bfgqsr2sWz2d5MfesPtwAwkJc%2BccKEnQ4Z6UhZf2gxm3L7Z8rbhVKhoz5ojxPpNr6pbF9iR2Sdc7Q5Tx6o0yjAgocJWO&X-Amz-Signature=1f89eb280aaa94795748ab843370a4819bb21e1f7626c1b5b65cf1c52c73a026&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
