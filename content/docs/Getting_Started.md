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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623VJHSUY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQUlw1W3EbDMML4ZumfoopUqBA9TdCT2coh1bGx9HK8wIgEHeDU6hXNmLvwf5F8C2Jv7MHJywX3AuJcrr3jCnU7PEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIOYZJCviqVEPQ40yrcAyNBzX6S5A5xGiaD0%2Bl0Vxr6BNgv5NmdGTT3ZUP3yG0dFQx03lm41wh5NMdEOs9NrXKPrC025v%2BbdWA3QqH%2BJE01okPxDjV0psmFayJ969GOZUcqUNEl7FlHbtKR8xbpsUc1SWnybI3klMXlS88uM87He%2B7KWH%2F0XRoZXs1OZyhC6G%2FdRoBa0zmIUJakty%2FeQ96ncO03emKbFVSDC31y5%2B%2BPqKb6X1SBmU%2FNZxNaDts0P5IqlTQhwsLMfoipK8nOovaNubgtRTHdvKxW5OXMwWZWmJ0Ss7txcCtxFLgTzZqT23ruBjGKhk%2BmKQo1wq9RtFPgRfZ%2FYZhiuY9gsfftQfSkm0FwicTcSNIW2agRTxzsZgpazaKsg6T0%2FHe%2FhCrchrSGU1Hqf2G%2FKPUmagNK1VfbCzOsQOF4uudfAxawgMYtHCPKDsbuk%2BzwOgK39B4mM%2FHOLiR3j0vGWB%2F%2ByTeWUBLADjL6DF7MSacUcoPYOZkrIvBj0QpWHkaDX7%2BpykQWjk6rSIERbMdv5qmHWhUNMG7Yj2%2Fh47Ysm7ZBFLg3KrLJGxpZH7xourz0ZayHce7BNLEVH7cSuqnAT3QlayfJSUDVhmFaRVNcwVY3a8Try55kAWOemWSD5%2FZtOwpuMMST98MGOqUBx%2B11HHZwKKPclM2%2FfuezzbQZVPdp1%2F1lrcyT747S803jLNC3ZdXYHPeW%2FgWSfxLX%2FlO9H5zswyD3NRBmJFjYIZ4U6m7mW6S3IKipeLqKapYGhmKddywiGWUE9CTp4GQ6UF4PoLCTk4MsMvYjN0I7%2FvLnKIDzPpyKj9OxnBeVCDN7gYYAT1610YZZRD8tT85LOam68hpbJzppddUOPe1eRD87yRWg&X-Amz-Signature=f645247aaf98b69604742c4c081d476bfd21e1254ee33993709a388929d3f762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623VJHSUY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQUlw1W3EbDMML4ZumfoopUqBA9TdCT2coh1bGx9HK8wIgEHeDU6hXNmLvwf5F8C2Jv7MHJywX3AuJcrr3jCnU7PEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIOYZJCviqVEPQ40yrcAyNBzX6S5A5xGiaD0%2Bl0Vxr6BNgv5NmdGTT3ZUP3yG0dFQx03lm41wh5NMdEOs9NrXKPrC025v%2BbdWA3QqH%2BJE01okPxDjV0psmFayJ969GOZUcqUNEl7FlHbtKR8xbpsUc1SWnybI3klMXlS88uM87He%2B7KWH%2F0XRoZXs1OZyhC6G%2FdRoBa0zmIUJakty%2FeQ96ncO03emKbFVSDC31y5%2B%2BPqKb6X1SBmU%2FNZxNaDts0P5IqlTQhwsLMfoipK8nOovaNubgtRTHdvKxW5OXMwWZWmJ0Ss7txcCtxFLgTzZqT23ruBjGKhk%2BmKQo1wq9RtFPgRfZ%2FYZhiuY9gsfftQfSkm0FwicTcSNIW2agRTxzsZgpazaKsg6T0%2FHe%2FhCrchrSGU1Hqf2G%2FKPUmagNK1VfbCzOsQOF4uudfAxawgMYtHCPKDsbuk%2BzwOgK39B4mM%2FHOLiR3j0vGWB%2F%2ByTeWUBLADjL6DF7MSacUcoPYOZkrIvBj0QpWHkaDX7%2BpykQWjk6rSIERbMdv5qmHWhUNMG7Yj2%2Fh47Ysm7ZBFLg3KrLJGxpZH7xourz0ZayHce7BNLEVH7cSuqnAT3QlayfJSUDVhmFaRVNcwVY3a8Try55kAWOemWSD5%2FZtOwpuMMST98MGOqUBx%2B11HHZwKKPclM2%2FfuezzbQZVPdp1%2F1lrcyT747S803jLNC3ZdXYHPeW%2FgWSfxLX%2FlO9H5zswyD3NRBmJFjYIZ4U6m7mW6S3IKipeLqKapYGhmKddywiGWUE9CTp4GQ6UF4PoLCTk4MsMvYjN0I7%2FvLnKIDzPpyKj9OxnBeVCDN7gYYAT1610YZZRD8tT85LOam68hpbJzppddUOPe1eRD87yRWg&X-Amz-Signature=71928e8a134dda50d8c4a34671e499c00a438039fa62c203947bda53aa803f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623VJHSUY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQUlw1W3EbDMML4ZumfoopUqBA9TdCT2coh1bGx9HK8wIgEHeDU6hXNmLvwf5F8C2Jv7MHJywX3AuJcrr3jCnU7PEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIOYZJCviqVEPQ40yrcAyNBzX6S5A5xGiaD0%2Bl0Vxr6BNgv5NmdGTT3ZUP3yG0dFQx03lm41wh5NMdEOs9NrXKPrC025v%2BbdWA3QqH%2BJE01okPxDjV0psmFayJ969GOZUcqUNEl7FlHbtKR8xbpsUc1SWnybI3klMXlS88uM87He%2B7KWH%2F0XRoZXs1OZyhC6G%2FdRoBa0zmIUJakty%2FeQ96ncO03emKbFVSDC31y5%2B%2BPqKb6X1SBmU%2FNZxNaDts0P5IqlTQhwsLMfoipK8nOovaNubgtRTHdvKxW5OXMwWZWmJ0Ss7txcCtxFLgTzZqT23ruBjGKhk%2BmKQo1wq9RtFPgRfZ%2FYZhiuY9gsfftQfSkm0FwicTcSNIW2agRTxzsZgpazaKsg6T0%2FHe%2FhCrchrSGU1Hqf2G%2FKPUmagNK1VfbCzOsQOF4uudfAxawgMYtHCPKDsbuk%2BzwOgK39B4mM%2FHOLiR3j0vGWB%2F%2ByTeWUBLADjL6DF7MSacUcoPYOZkrIvBj0QpWHkaDX7%2BpykQWjk6rSIERbMdv5qmHWhUNMG7Yj2%2Fh47Ysm7ZBFLg3KrLJGxpZH7xourz0ZayHce7BNLEVH7cSuqnAT3QlayfJSUDVhmFaRVNcwVY3a8Try55kAWOemWSD5%2FZtOwpuMMST98MGOqUBx%2B11HHZwKKPclM2%2FfuezzbQZVPdp1%2F1lrcyT747S803jLNC3ZdXYHPeW%2FgWSfxLX%2FlO9H5zswyD3NRBmJFjYIZ4U6m7mW6S3IKipeLqKapYGhmKddywiGWUE9CTp4GQ6UF4PoLCTk4MsMvYjN0I7%2FvLnKIDzPpyKj9OxnBeVCDN7gYYAT1610YZZRD8tT85LOam68hpbJzppddUOPe1eRD87yRWg&X-Amz-Signature=bb3b9e236243001d53f14102a08eada0358797ec750f681549b082936a6bfd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634FS3GDZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CxPketKSqmMIMoGB5bXlrsT3vi0kCnZ%2BwBWw0Tg3MQIhAI8rs8kQejKK2NaL7BREeKeMBjCU8ae6raUyKf9YhiesKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVZH5FXIlpeZlqps4q3APIGwfCNtBmqj7FqzNqPHswRQC5mEXLxPbFHRKBQLVtXY3DXFatTOzVohWrLBtzqe7POxBbxaR1jCwklLQPnGwNy4BcRS7VEaf1pJO4kObO9ny4WxrN18WlN%2BWe%2FnfY97UJwYTnBWdmJxUkkjcj027sKxEALxFLIyZXo46IXCYZW0y%2BaxV%2BNisdMlhpRlvsOFOkUw1GLlQKJPXynjUpBKmClsEJUum6ITUqYZykexxMcfG0406OCas6I3dLwsPzYCzueKkf%2F4i1ivGki7eJo%2FZxpBt3QXiYEiLOMcL0rytO5ahdBYPOnygEkFXX1gNvFYwZdlQJnjQd3haQ1vfw%2BPMoBaPrxxqLu0z4aEcD33sAxZcdUjQL6eivcIXNY4BJxsasOVwbg5QMjT7JI34VH%2FwBFbzmM%2FaRQGurMa7YmUZxV5WsrLSp2WYPTGEvZ%2Bot2n22kdDoCGA8yvo9d72nUt3%2B6hFnb06c0zZB4Vxhkl3zECf1yGDGBqQK%2BX0pv9Apr8RPw6Y3mHsVkQ4I4g2wpZdipbs%2Ffjp%2BX%2FLLea6Bg81nQjx%2BcakdbQYHUWutbmMBJez3pR0i4ezT18MxYB8NxnPKQC42clMe8WHsigKihTZq8JXgS%2Bj9oHaXfE2xYTC3k%2FfDBjqkAcbe81U42Stgstd6ZP8mrJ%2FynETA9os3Qz17D5OzOa%2BXsAMLc3FFki2hG8cYC9l5MbWlw5nB9fIzjVcNZo4z8ZcUbFNagauMgbDc9sDdqEFXdCVe0HKbKH6za%2BiX4tgubgK20Nmdk2mIlXNDjBJETK5rZ5b1T33XdEkXemvUGl%2BtZynaEcy7a%2BpoI3FhzfjNqxCjdBgPwL6cy0amBw9Mzjurtqfj&X-Amz-Signature=63bd19f7d41b3ac9d858702192ad05b22c1ed8607e4d54a43f1a9eaee70d09c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWZBQWW%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo1u6zX%2BcRLGN1lsvbEnL6CVbVIhVNxfzJ1ov73JkkUgIgNyXBkYv1%2BGJj0OllLjUeeqNzR1yLpB67Yxk51K4r2c8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAzVOJIgoCUWOHoLyrcA1lJae1eDkhBk3jJU8Lo4oU06QW7m2pIRKnjwbCtyFvTUWTNszHwqnc2xzFl%2FOLWFRPNGGvx6MTJTTPE7b8NdJttFCOrPWWpKNax1xvkNQDtq%2FIahVn%2FPbIF1gHmNMOdLIW7zmiN2fVc0y1pbqBAs1SXEpGtrYbxaREgJgGXqFCoe%2BRwJsscG8J1Q2vj9bPoVbdoZdqWmb7AgG9SNp73ZurrpJIQ2L1rm0dBX%2BSu0P2Cp7xLdFrwbiG6ruYJtnxiqzrOQjtPLfKab0T6FsebBh0fdlCvjk6gq80kjWpN%2FLs49C9UlLHvo1mmaMluDZz1XX0UyrXZyMXURSm3lnIWuFRRsfbzU3Zinqaqn5BcYzbUNgAE7dt84FCAeicSVDA%2FntqyRsU0iaDrT%2FxpLMWdwPujH1MdDXAU9itIF7wDRcHqekOqOhExxUyeFPV4oaOImAs4vMRCGY90puSWxUKMqAmhYOK5X%2Fgpgfv5vW1ti55aa%2FMFG%2FEMWFKwDIDXdLtZwJnyYPuYNi0cUyEu7bNQgUrUFHLC9%2Fzy%2F%2F%2FQKfUJUtDTt1RrYpm9%2FNy7tfoD86KDWdK5BQ1HKCYnJBiOAiWEhs0L8JZIoZoeNcOAejmQwOkAGexLm%2FhxcOOe5j9CMLST98MGOqUB%2Fo3oligyj7Q8Tu9u%2FDTOEYUiAyVEQwj%2BHhnvCITDDGlq6%2FYT1sbxHfK9k%2FxRQjFbWINBI4hQFQvE01h7gIPpCThd1VzRNYhuxCzaDBH%2F6FOXWLgiMPNQZFzhossXRxukNllABrfSbNNju5NdgDmYxOiLtVGrRNmDlI36zpT%2FKSd7tXIwCGi9ObGHiCVqgdgvef6HroNcSKgbn6ZK3Ryv%2FVsOd7dI&X-Amz-Signature=5e44cfe1164cbe524cb370b64273ea2cca3a50e669125655ad10609f8ccda52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623VJHSUY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQUlw1W3EbDMML4ZumfoopUqBA9TdCT2coh1bGx9HK8wIgEHeDU6hXNmLvwf5F8C2Jv7MHJywX3AuJcrr3jCnU7PEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIOYZJCviqVEPQ40yrcAyNBzX6S5A5xGiaD0%2Bl0Vxr6BNgv5NmdGTT3ZUP3yG0dFQx03lm41wh5NMdEOs9NrXKPrC025v%2BbdWA3QqH%2BJE01okPxDjV0psmFayJ969GOZUcqUNEl7FlHbtKR8xbpsUc1SWnybI3klMXlS88uM87He%2B7KWH%2F0XRoZXs1OZyhC6G%2FdRoBa0zmIUJakty%2FeQ96ncO03emKbFVSDC31y5%2B%2BPqKb6X1SBmU%2FNZxNaDts0P5IqlTQhwsLMfoipK8nOovaNubgtRTHdvKxW5OXMwWZWmJ0Ss7txcCtxFLgTzZqT23ruBjGKhk%2BmKQo1wq9RtFPgRfZ%2FYZhiuY9gsfftQfSkm0FwicTcSNIW2agRTxzsZgpazaKsg6T0%2FHe%2FhCrchrSGU1Hqf2G%2FKPUmagNK1VfbCzOsQOF4uudfAxawgMYtHCPKDsbuk%2BzwOgK39B4mM%2FHOLiR3j0vGWB%2F%2ByTeWUBLADjL6DF7MSacUcoPYOZkrIvBj0QpWHkaDX7%2BpykQWjk6rSIERbMdv5qmHWhUNMG7Yj2%2Fh47Ysm7ZBFLg3KrLJGxpZH7xourz0ZayHce7BNLEVH7cSuqnAT3QlayfJSUDVhmFaRVNcwVY3a8Try55kAWOemWSD5%2FZtOwpuMMST98MGOqUBx%2B11HHZwKKPclM2%2FfuezzbQZVPdp1%2F1lrcyT747S803jLNC3ZdXYHPeW%2FgWSfxLX%2FlO9H5zswyD3NRBmJFjYIZ4U6m7mW6S3IKipeLqKapYGhmKddywiGWUE9CTp4GQ6UF4PoLCTk4MsMvYjN0I7%2FvLnKIDzPpyKj9OxnBeVCDN7gYYAT1610YZZRD8tT85LOam68hpbJzppddUOPe1eRD87yRWg&X-Amz-Signature=54f66b289087c22792dd55e61e7f392c968536dc613d62b4eae9cdb7eed687fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
