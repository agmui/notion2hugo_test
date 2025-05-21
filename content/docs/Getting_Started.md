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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXOLCP2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQQ2gvPE989%2Bs9x%2F5NzYQIBb5WOi18dzUG23zueTH7AiEAz8frcF%2FxawYfBmBrcYmyLNW5xaKZ09d%2BGSMUen59fD4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqVCmb%2FfDJuLg95TyrcA%2F1Bx2VEDDyVACCVIeRXhJXsxOOIdZ90vcQMUZ%2BvqaCDsQOKxxF6C%2Fp2ZXVqQb%2BtJuuFTBigXhglFnucQsmZ4Hl%2BybLxjZK6xi7zsLjxdYpRpjdyX03gZ3Q5jy9nZEiUQcTU3RLxIdFKQsVjufQuDJisbKM6Az9c0CvmxIGlUnXI2xOxq%2BnjxUUYvyxEF2CyTyMOic7dpZwmTwUDtc8dpG1zIRlu%2BCZAtKoGqxw%2ButVfsIsQ71Y2erM6dzJfD3aWVhRg9nKRCh0Wy3TkE5ZUGwinLlSUrKt%2BGiIivgxxaKWeCn6IFA0Tq6c46CTFXNz9o6yDV1ch5D8D7Qpoe0mFI6LCgp4ocKjfjIR%2B6%2FHomZad9xxxITzh8oG6pm9vDBYIIe34Jow4AxfX5Xx80HqmoML3LagBE1qRuUFsKEOnw4hbDwIYkBDqTcF86af3ZEwZuWsbgY%2FbtyuLZZOe25P0RR1bTaGpmz46bwbtcnKobkMqJMo2rPVIoea4vYpEY1ckuKI%2FY4FRwq0jceUrSSDL5W3NJmEzl%2BG4BHtQpearAgob%2BaYsXv3vQ9N0y4InOqlXvcKbiSPRazJ3gk3dqZBuW46Ugid02ljhT0zRnj7LR8J5bx7cZuNWspAMQB%2B6MKCjtMEGOqUBG0xZjwrUeL%2FOPn6Ibak39Le8mg8W%2FGjV4BufU2ykw%2FJysefEJJ4HSRAxv%2BTTuGsh1TvyMn%2Fq%2FWw%2BVqgCAVgGjgbTp68NiDMHmJCzNOemugVEW0aapAF6M30cmJMvtmn7LPzqq9mg4shVN0SaqLsOg1wRAjTNKYiBuNCxrkBJINpduAQmuZj6SpSO4LIScU3VZWz2RuZNeIw9alQE0yWLLH957nvu&X-Amz-Signature=792a6380d1486cdc5cbcdc1919576048f37529961fe740c375fa11280fb4998f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXOLCP2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQQ2gvPE989%2Bs9x%2F5NzYQIBb5WOi18dzUG23zueTH7AiEAz8frcF%2FxawYfBmBrcYmyLNW5xaKZ09d%2BGSMUen59fD4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqVCmb%2FfDJuLg95TyrcA%2F1Bx2VEDDyVACCVIeRXhJXsxOOIdZ90vcQMUZ%2BvqaCDsQOKxxF6C%2Fp2ZXVqQb%2BtJuuFTBigXhglFnucQsmZ4Hl%2BybLxjZK6xi7zsLjxdYpRpjdyX03gZ3Q5jy9nZEiUQcTU3RLxIdFKQsVjufQuDJisbKM6Az9c0CvmxIGlUnXI2xOxq%2BnjxUUYvyxEF2CyTyMOic7dpZwmTwUDtc8dpG1zIRlu%2BCZAtKoGqxw%2ButVfsIsQ71Y2erM6dzJfD3aWVhRg9nKRCh0Wy3TkE5ZUGwinLlSUrKt%2BGiIivgxxaKWeCn6IFA0Tq6c46CTFXNz9o6yDV1ch5D8D7Qpoe0mFI6LCgp4ocKjfjIR%2B6%2FHomZad9xxxITzh8oG6pm9vDBYIIe34Jow4AxfX5Xx80HqmoML3LagBE1qRuUFsKEOnw4hbDwIYkBDqTcF86af3ZEwZuWsbgY%2FbtyuLZZOe25P0RR1bTaGpmz46bwbtcnKobkMqJMo2rPVIoea4vYpEY1ckuKI%2FY4FRwq0jceUrSSDL5W3NJmEzl%2BG4BHtQpearAgob%2BaYsXv3vQ9N0y4InOqlXvcKbiSPRazJ3gk3dqZBuW46Ugid02ljhT0zRnj7LR8J5bx7cZuNWspAMQB%2B6MKCjtMEGOqUBG0xZjwrUeL%2FOPn6Ibak39Le8mg8W%2FGjV4BufU2ykw%2FJysefEJJ4HSRAxv%2BTTuGsh1TvyMn%2Fq%2FWw%2BVqgCAVgGjgbTp68NiDMHmJCzNOemugVEW0aapAF6M30cmJMvtmn7LPzqq9mg4shVN0SaqLsOg1wRAjTNKYiBuNCxrkBJINpduAQmuZj6SpSO4LIScU3VZWz2RuZNeIw9alQE0yWLLH957nvu&X-Amz-Signature=b28ce77d389d12f10b7a1012270dd30e62ce9210c9640a8cbaafff5f5758e34b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXOLCP2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQQ2gvPE989%2Bs9x%2F5NzYQIBb5WOi18dzUG23zueTH7AiEAz8frcF%2FxawYfBmBrcYmyLNW5xaKZ09d%2BGSMUen59fD4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqVCmb%2FfDJuLg95TyrcA%2F1Bx2VEDDyVACCVIeRXhJXsxOOIdZ90vcQMUZ%2BvqaCDsQOKxxF6C%2Fp2ZXVqQb%2BtJuuFTBigXhglFnucQsmZ4Hl%2BybLxjZK6xi7zsLjxdYpRpjdyX03gZ3Q5jy9nZEiUQcTU3RLxIdFKQsVjufQuDJisbKM6Az9c0CvmxIGlUnXI2xOxq%2BnjxUUYvyxEF2CyTyMOic7dpZwmTwUDtc8dpG1zIRlu%2BCZAtKoGqxw%2ButVfsIsQ71Y2erM6dzJfD3aWVhRg9nKRCh0Wy3TkE5ZUGwinLlSUrKt%2BGiIivgxxaKWeCn6IFA0Tq6c46CTFXNz9o6yDV1ch5D8D7Qpoe0mFI6LCgp4ocKjfjIR%2B6%2FHomZad9xxxITzh8oG6pm9vDBYIIe34Jow4AxfX5Xx80HqmoML3LagBE1qRuUFsKEOnw4hbDwIYkBDqTcF86af3ZEwZuWsbgY%2FbtyuLZZOe25P0RR1bTaGpmz46bwbtcnKobkMqJMo2rPVIoea4vYpEY1ckuKI%2FY4FRwq0jceUrSSDL5W3NJmEzl%2BG4BHtQpearAgob%2BaYsXv3vQ9N0y4InOqlXvcKbiSPRazJ3gk3dqZBuW46Ugid02ljhT0zRnj7LR8J5bx7cZuNWspAMQB%2B6MKCjtMEGOqUBG0xZjwrUeL%2FOPn6Ibak39Le8mg8W%2FGjV4BufU2ykw%2FJysefEJJ4HSRAxv%2BTTuGsh1TvyMn%2Fq%2FWw%2BVqgCAVgGjgbTp68NiDMHmJCzNOemugVEW0aapAF6M30cmJMvtmn7LPzqq9mg4shVN0SaqLsOg1wRAjTNKYiBuNCxrkBJINpduAQmuZj6SpSO4LIScU3VZWz2RuZNeIw9alQE0yWLLH957nvu&X-Amz-Signature=20a25302f99788853529e0c61c1ac29e2dcab1eb66ee021166c909872f9f859c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ML2OC6P%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOPDXd2GSrJD0zzYen%2Bz0Rle8w%2FxFljqAA8SBwweGoeAiEA9jUtkmzUJPoa8w0aFyQo4Jbh%2FMbdxzW1Oryc5O98NIAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEKjKqoa9zy1FsNfircA2Fk0nGu2pigC0Ro8hYYbgwCO%2BwvV%2FoPkU6v799%2F7opCwlRUkOzLazsjlcZa6rFzNyQnBxT0m2SAr8WB7PkItrC4ijQrq%2BWh6oo42F2A9leW%2F5n3DB8vbwlGro7uBQ4JjLoAHFhiXRVDr1%2BwPh2KghlkBj6NSloby2iHgCSwdk%2BklbQU%2BB2dRsG7uFv1CzTaWTF84iEBbWA6MDt9p8C8bZEsr0Mmh%2Bc2NaAHpnOEvq5iaQHq9YF3opx2Y1PRKrjP5cvFlhko6%2FG5pnnSofLFmWyycMxXPghr61PaNfFNGCr2t13%2F%2FJ2QLDM%2BWzfdaBD9r0bHWLj6dplUIsSryhzcIXcE5X7AFuZP5I39kSZI6i7AqxgUQymidr98QwXUFcJgjYHiwR1ezjw1T90RTnQijcjsiEuJVDF2ElrpAJ6eQ3PXlfQaR3Vnfqh4mklg5mbkA%2F0Lbb4HrSdUqC3UN5Ya2phUf7ipFsDoIhV3ejoymgGNNq1tKFrDfsQSZAliHi9wgKc%2BToR2sPFrqyHWGHmWJkOEC2u5SJKYQDIhCGT3M7jiFtY%2BhmQntUALTHqcZBNSORG1OdbPGMolOJ27Ec6LCob6XHtGCrAHp5ux%2BA4fVLjbpvXH%2B7vVVnNChQEIMImjtMEGOqUB602F9Y4O%2BzdHoQZREqIMjON2ZSKOYmoW0WUHj%2BsKbKJhvrmgM4UnigsqbnYWJf%2BE%2BEeGdlIVR8GD%2FhNYJf5J7cYOvJoBwzeUJIzN65msO40zmfjU1BlUwSfzjvJHH0mTXGw47HP3KawJdfMQipX5J7SX6OwkiBICeJdSVTWDoVGKaNiIf4FSS9kLorlMFEdiHgiWpCQ9t1OxYhQyRh60KrvZmHiw&X-Amz-Signature=407cfafd35f486f15e722c96943fe8f4a9be6993357a128568e45feb83523d61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL73HY2R%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELMgcU%2BARVXpaab6urJgn9tQIWnv%2B7IsxRkvH6p0xqtAiA%2BvKZmXH3wxjcGqYraJsHrPiHFJ2aAQXJPYnSI6XejxCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW1RB2HLpZap4h3yKtwDhE%2FRl929mwM0v%2BG6SDTVS6tIN6HhbbW9hs1dr8%2FFxNT2qbRI6ZDziiSUks%2ByHX%2FjMDkBrqo4mXDgRuhrCg%2FnQcsJSeGNBrRHUrmSZ%2B3cFFcp6VD0ZW9oH%2BRlLzzLnZJHDxaFhJFtO%2FlI9poLhUrV6Uy5E6FYKw0PZSFGx7T3wNSwnaH9IS08ay7wJRV8f9jEE0tehJOnsWXKe%2FmewA6Oeb1iZHlh6eAA8VKWHnvT6DimaWufTEM97oJFg47n3KM59BmVHbsmuLrGE%2BiB%2FtHW5Gjwh0kpjeFipMVg1407%2Bhx4INS3cwKzp3esxTH6oW1rzZZVpt5GsFM2vlQNLV8xA1nlXimL1xKlY3clvObi0ZW%2FCReIcNveUZw5kz68piB4ZDBzwVp%2FYbb0pnehYK7Swvj%2FKnO%2BY%2BV79QqZuMZq97QCMzY2oOg0k%2B%2FS3q3AjK9QgnC5pyXtx8yJY6KHpAsaaig%2BoBHstyCBDqnzUb5Oei6JwGfqa%2FzCPkQC9NTdHgxYsAzcRz%2FCM%2BRdzDNPsI93vxrNgvQN6qRMeSi%2B%2FvSBYPMKA4oEX1XMfyGyI9s6ZjEAawDCDwZC34h1QW0I55gyRPrhtvxslATidZP59FTPcU6x4uP6mUZaKpWd6V4ww6K0wQY6pgGGEWNGknj%2Fvwsql0AuxxvqmyS1kmLEBFcw7XFvHFDjoRVEkEc0H5tluhv8MFq9b%2F80JlQIWOR9aFfSWFSrC8g5YdAkoHJZjDoCv5AYcxh%2FkgwVlzxXdzd7bLU76HHtAn7bIPyE2IT2vgYrMIxiHEwB2bFOhYRtFgNMbn3DNjP2pZQVidLZP2a%2BpMhQI9C%2B1U880SJM4VuV%2BIhdHLVksvO30p6rAdov&X-Amz-Signature=0620161d840b2db6fbfb58f30234e8a64f7a2f26b32bfd9ec7f7014c3134f787&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXOLCP2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQQ2gvPE989%2Bs9x%2F5NzYQIBb5WOi18dzUG23zueTH7AiEAz8frcF%2FxawYfBmBrcYmyLNW5xaKZ09d%2BGSMUen59fD4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqVCmb%2FfDJuLg95TyrcA%2F1Bx2VEDDyVACCVIeRXhJXsxOOIdZ90vcQMUZ%2BvqaCDsQOKxxF6C%2Fp2ZXVqQb%2BtJuuFTBigXhglFnucQsmZ4Hl%2BybLxjZK6xi7zsLjxdYpRpjdyX03gZ3Q5jy9nZEiUQcTU3RLxIdFKQsVjufQuDJisbKM6Az9c0CvmxIGlUnXI2xOxq%2BnjxUUYvyxEF2CyTyMOic7dpZwmTwUDtc8dpG1zIRlu%2BCZAtKoGqxw%2ButVfsIsQ71Y2erM6dzJfD3aWVhRg9nKRCh0Wy3TkE5ZUGwinLlSUrKt%2BGiIivgxxaKWeCn6IFA0Tq6c46CTFXNz9o6yDV1ch5D8D7Qpoe0mFI6LCgp4ocKjfjIR%2B6%2FHomZad9xxxITzh8oG6pm9vDBYIIe34Jow4AxfX5Xx80HqmoML3LagBE1qRuUFsKEOnw4hbDwIYkBDqTcF86af3ZEwZuWsbgY%2FbtyuLZZOe25P0RR1bTaGpmz46bwbtcnKobkMqJMo2rPVIoea4vYpEY1ckuKI%2FY4FRwq0jceUrSSDL5W3NJmEzl%2BG4BHtQpearAgob%2BaYsXv3vQ9N0y4InOqlXvcKbiSPRazJ3gk3dqZBuW46Ugid02ljhT0zRnj7LR8J5bx7cZuNWspAMQB%2B6MKCjtMEGOqUBG0xZjwrUeL%2FOPn6Ibak39Le8mg8W%2FGjV4BufU2ykw%2FJysefEJJ4HSRAxv%2BTTuGsh1TvyMn%2Fq%2FWw%2BVqgCAVgGjgbTp68NiDMHmJCzNOemugVEW0aapAF6M30cmJMvtmn7LPzqq9mg4shVN0SaqLsOg1wRAjTNKYiBuNCxrkBJINpduAQmuZj6SpSO4LIScU3VZWz2RuZNeIw9alQE0yWLLH957nvu&X-Amz-Signature=202d4601e58e22bdbff4dc55f8cf92156d623461aba51ac3fdde7981161fc53b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
