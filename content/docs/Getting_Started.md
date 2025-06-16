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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YHUXBI5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDIINQNWDYFRnsQ6qeSLO5v7%2FWXDrSZfbpPtfEyXEnf9AIgNBTtc0I4Y5yOCNCOJsrgA0RsSb7Bpab43PdaahQG6P4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIep836UR5InCJ3zMircA2a76xJAaDZkfVL%2BgJJ%2Fuc%2BoVK5qXaR0k10ZPz6V%2Fx8sEqixBfIOA%2B569BgRj2duB9dkjKhbYHbmLvuaIpdHwOyu6%2FEZU5VnBSebbgWTXZ0P71ahB0QisyX9GEUwGcObzyH0Cfc7gdm%2BQKYelw0D8uWe6Cjm%2FGWuARAdTRkv3UOEotHndE6%2F7xc%2FHZeIBal0jd0qf3pSYtpmPHQDullK3UCkv38rCUFppXk0HUuDg0ozyxE4yNBH9LrMwh4jSOF%2FOIrraPnznE9GHL40EAmw%2BOcaKFRlkYX5QMRlo2ODn3WY7LWdYD6lPiFoZw4mOYOco4lZ1cIR0j%2B4wbY5LMB1aqEX%2B4mfQyT1RnNk%2FieCkqqGLxTsFC%2FGM69hYIVadPpqq0YMWnEFCrZg9zdYy%2BkLcPjjMKHu78q6AAedagGMGXYOOBCDmUZTcSOSzsZBo7W%2B%2BcYm4V5OWNNq6RfPuyBJliaOcoIp1qByvYyipCMKeAAfI%2BTyKXACVxDLerla6HijyA5Ymb9s2YszQpNwONYky2qZzoYz%2BZY2nJlqQbi9ufNvQgNV%2BqedHHG4EJI%2Bxe6CxspoP209%2BvlPcDHPumAkffl06cxuO1hOsKAByeOO%2FBpdxLuwCe6u8dozDGzJMJ%2B0v8IGOqUBw5olfJ%2BAHtTA4Jrs0ptU%2FL%2FPWT0Tli2%2FVnZVtIV%2BHJ%2F0W7Pyq7%2BcmCBr%2Bw8m9KZbPCKkGvHvuYpQlKFZnoU6gNoC9y1tPzkjFg0FGer%2F46UyP8gUB0yUOZcATWkgZhJNZBxbKjlxovAyDS2V4ifyx4aLaP40WRn5xbhQFhqjrx1GvZLTtPccBL5TAyFTFzwGD01DA6Jsd53HcjyrHF%2FY%2BEG9l72g&X-Amz-Signature=16a7b890df2c3400d6f2cc23954c8cc2e4409a9c4b1b056886d3ebcb700fb594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YHUXBI5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDIINQNWDYFRnsQ6qeSLO5v7%2FWXDrSZfbpPtfEyXEnf9AIgNBTtc0I4Y5yOCNCOJsrgA0RsSb7Bpab43PdaahQG6P4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIep836UR5InCJ3zMircA2a76xJAaDZkfVL%2BgJJ%2Fuc%2BoVK5qXaR0k10ZPz6V%2Fx8sEqixBfIOA%2B569BgRj2duB9dkjKhbYHbmLvuaIpdHwOyu6%2FEZU5VnBSebbgWTXZ0P71ahB0QisyX9GEUwGcObzyH0Cfc7gdm%2BQKYelw0D8uWe6Cjm%2FGWuARAdTRkv3UOEotHndE6%2F7xc%2FHZeIBal0jd0qf3pSYtpmPHQDullK3UCkv38rCUFppXk0HUuDg0ozyxE4yNBH9LrMwh4jSOF%2FOIrraPnznE9GHL40EAmw%2BOcaKFRlkYX5QMRlo2ODn3WY7LWdYD6lPiFoZw4mOYOco4lZ1cIR0j%2B4wbY5LMB1aqEX%2B4mfQyT1RnNk%2FieCkqqGLxTsFC%2FGM69hYIVadPpqq0YMWnEFCrZg9zdYy%2BkLcPjjMKHu78q6AAedagGMGXYOOBCDmUZTcSOSzsZBo7W%2B%2BcYm4V5OWNNq6RfPuyBJliaOcoIp1qByvYyipCMKeAAfI%2BTyKXACVxDLerla6HijyA5Ymb9s2YszQpNwONYky2qZzoYz%2BZY2nJlqQbi9ufNvQgNV%2BqedHHG4EJI%2Bxe6CxspoP209%2BvlPcDHPumAkffl06cxuO1hOsKAByeOO%2FBpdxLuwCe6u8dozDGzJMJ%2B0v8IGOqUBw5olfJ%2BAHtTA4Jrs0ptU%2FL%2FPWT0Tli2%2FVnZVtIV%2BHJ%2F0W7Pyq7%2BcmCBr%2Bw8m9KZbPCKkGvHvuYpQlKFZnoU6gNoC9y1tPzkjFg0FGer%2F46UyP8gUB0yUOZcATWkgZhJNZBxbKjlxovAyDS2V4ifyx4aLaP40WRn5xbhQFhqjrx1GvZLTtPccBL5TAyFTFzwGD01DA6Jsd53HcjyrHF%2FY%2BEG9l72g&X-Amz-Signature=dc64728624721388d3dea1fba823ec430b6cf62bbb797dbb20f15777685e56ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YHUXBI5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDIINQNWDYFRnsQ6qeSLO5v7%2FWXDrSZfbpPtfEyXEnf9AIgNBTtc0I4Y5yOCNCOJsrgA0RsSb7Bpab43PdaahQG6P4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIep836UR5InCJ3zMircA2a76xJAaDZkfVL%2BgJJ%2Fuc%2BoVK5qXaR0k10ZPz6V%2Fx8sEqixBfIOA%2B569BgRj2duB9dkjKhbYHbmLvuaIpdHwOyu6%2FEZU5VnBSebbgWTXZ0P71ahB0QisyX9GEUwGcObzyH0Cfc7gdm%2BQKYelw0D8uWe6Cjm%2FGWuARAdTRkv3UOEotHndE6%2F7xc%2FHZeIBal0jd0qf3pSYtpmPHQDullK3UCkv38rCUFppXk0HUuDg0ozyxE4yNBH9LrMwh4jSOF%2FOIrraPnznE9GHL40EAmw%2BOcaKFRlkYX5QMRlo2ODn3WY7LWdYD6lPiFoZw4mOYOco4lZ1cIR0j%2B4wbY5LMB1aqEX%2B4mfQyT1RnNk%2FieCkqqGLxTsFC%2FGM69hYIVadPpqq0YMWnEFCrZg9zdYy%2BkLcPjjMKHu78q6AAedagGMGXYOOBCDmUZTcSOSzsZBo7W%2B%2BcYm4V5OWNNq6RfPuyBJliaOcoIp1qByvYyipCMKeAAfI%2BTyKXACVxDLerla6HijyA5Ymb9s2YszQpNwONYky2qZzoYz%2BZY2nJlqQbi9ufNvQgNV%2BqedHHG4EJI%2Bxe6CxspoP209%2BvlPcDHPumAkffl06cxuO1hOsKAByeOO%2FBpdxLuwCe6u8dozDGzJMJ%2B0v8IGOqUBw5olfJ%2BAHtTA4Jrs0ptU%2FL%2FPWT0Tli2%2FVnZVtIV%2BHJ%2F0W7Pyq7%2BcmCBr%2Bw8m9KZbPCKkGvHvuYpQlKFZnoU6gNoC9y1tPzkjFg0FGer%2F46UyP8gUB0yUOZcATWkgZhJNZBxbKjlxovAyDS2V4ifyx4aLaP40WRn5xbhQFhqjrx1GvZLTtPccBL5TAyFTFzwGD01DA6Jsd53HcjyrHF%2FY%2BEG9l72g&X-Amz-Signature=d32717ff173ae7b7f66485fb0c7d3435f917a41bf3e1e689badaf8eb6e27ea66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZER7D5Z4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDcltabTFA0I8ZQ6r2cyDZYwULj%2BlMLDVTPyDqH9Ex10wIgPv8M8LRDP9tZqLmDyeBIISQ4ZY79IfAjMPBM9PD4AMoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMQdn%2B6lh8Qma2691CrcA6IBVxd1tlz2F0atpmnnzXf3OW49x3MVtK%2B4PV%2FfxqeCWmb4jXzmHiG%2BzY2SE1cwAWsqA1NuOOVy8t%2BnYUb320i6ZKzUZVFGq8wu1K44UFo5MEgRrQZ6kOi2K3dI3DuIuwP1YDINOQxE7FvElPOfWfH1SUyU1OToHyJX798v5CnX9caKdIaRHhMyhg88qUqjkgQh1a1N%2Fwym2QuyR8wJ7NFTfjMZHqE4GA3FnViZjF%2FQbDsTxnDlixs1cTXpwucHeCCfN%2FAI1LeFIEr2WQqIIxxXhp5QP%2FiRsJcgQLURDcBDdhIyPs%2Fw7JM46I6CJ7E%2FVKFnmnoX1ASGMsHnw1yslfTOvMSOJf%2BtfqbsEM2Io5ItTvkoZ5r9%2BuePn98VZfTzZSVY8zg6jszybckP%2FSfd%2BVS7l8dYJk8%2Bj1r%2B4t4PrJMzdXr7YsPXEdWwDL8NQQYHCUK%2F6%2FkM5BmgSn9OOz6eIdBRkmlD7jLWgHRhWJ4v4Eq6KSfMZTGuK90xV77v6q8iyTUDvF020SJGm5fRBePYUe51U%2FdfPtKPsaRAYglGYfh2cwvFQblG%2FWnAqr7NMEe0rOhy0JVDpwg23pTZGmiXWib7VNEUHLBGN80VPPstu6ffnwGUGLlcfZOfA9R1MJq0v8IGOqUByX2odEh3%2BudE4rHrDo3INrIeFY2SrjBuQGUGH%2BGAfiyseQ46gcp%2BeW%2BnQ8oLUv02NWjjjFwUDHD1taelfviTQoZSUC6JxvF4eGZYiBK01n7m9D9EtI8XJ8VPwoG0HHCen2GIAHERDzojYs0K9yw0CTpbC3SQeZJwm44irBTvKricY6sDBw69km4SCp%2F7kwT%2FA%2FgOt%2Fr%2BE3n6%2F1mfYI%2BtLs6%2BCp1r&X-Amz-Signature=44d63f2f1e7ae0e03a735d8d6a0d3879510db09cf3d2a753134d74ed77f50168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SAK6HUQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIA7rvuK4PcLp5OKzuxiuew1PtQEpZ7fRtJtATJXdpOb0AiB8SQaHgKF5exclu2%2FUNPMscJKZWZhEHGMBr9IZCqHDwyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMwoZ%2BoaoKwVtXV3FBKtwDmIUOCDVPaxvfULjE%2BR9cd8rd6ALBuR%2BM2RrFaOAn3teTI4uNFdIoVb2zmHGGcDqplhqi0xWt7cz8DBxOeVqEJQ5lSBmJwavPOvw6781Iv3b5L%2ByKzmuVMxmE1jpGFA9o%2F2jA4lqbETT2PBUvr3GB7%2BkEw%2BacPUg6Ux9Bn5vfYxyjkZQEfCR91GNBwuqybR9wcuNrzYLDT3BLswWg8njPp%2By9WW7RAIjLJSMjpp%2FPkENcVFkTq1RhiOCt4It5NMOKjgxCrgjmGP2d0m36cFPDTcq2ezF91nOfgF1lXuSTK%2BlwCxGKl7PW2kVzXCuElL9Q9Ln4jmlp5qV4aysf7rg2YNjSyHT%2BFWznB6NkIefSgQhwBvcR%2BkZ6oLi9L3cqqOkUR9ZZM%2Bzcz2BV5krA%2BlPOO3eVm31j%2Bq%2Fgk62NXqLA68yr2qCkegfx%2F22bza9Dndp3LSDx4B5Zski6dKA1T9BF14yX05aqAtciJiKDIb2BLlP9FCmLfp41CeBaZKQTYOEYUH1xDgpO8hP4iiuHH7gHbtjaf4N5fJbQ544oQpBgu7kgAwqsUuuKM%2FRnaebrY5948wJmaMSixSW0B5Inp5dokrTBPNaa%2F4PFWDeboNdrlW%2FLl3EwQmPOfsgCfNsw7rO%2FwgY6pgGEt1l2Md4Bjs%2B4NQ1J%2BsV2WZO7n4wETJ0A1L434rB9Gu3k5HMN9YGj%2FNddIPFfg1RIbKpdiN4oq5jYIrepnMrKDMwWiHI10OTbbZlgDPAFtxnB%2FTzapzq%2BZzr9SqFzbFaUlPoZWOSKNJhOeMexqnmrZBvxTe2mrQ2V5OiqfjsZHbic9pdCBVah%2FXO6ZaIka89szZy0Rchkxx2fckBO8k3Khb%2FzCzxU&X-Amz-Signature=6605f6be7a1b1c85308c7156ea288d9ceb4c365c824863c3fe80aab8279725fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YHUXBI5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDIINQNWDYFRnsQ6qeSLO5v7%2FWXDrSZfbpPtfEyXEnf9AIgNBTtc0I4Y5yOCNCOJsrgA0RsSb7Bpab43PdaahQG6P4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIep836UR5InCJ3zMircA2a76xJAaDZkfVL%2BgJJ%2Fuc%2BoVK5qXaR0k10ZPz6V%2Fx8sEqixBfIOA%2B569BgRj2duB9dkjKhbYHbmLvuaIpdHwOyu6%2FEZU5VnBSebbgWTXZ0P71ahB0QisyX9GEUwGcObzyH0Cfc7gdm%2BQKYelw0D8uWe6Cjm%2FGWuARAdTRkv3UOEotHndE6%2F7xc%2FHZeIBal0jd0qf3pSYtpmPHQDullK3UCkv38rCUFppXk0HUuDg0ozyxE4yNBH9LrMwh4jSOF%2FOIrraPnznE9GHL40EAmw%2BOcaKFRlkYX5QMRlo2ODn3WY7LWdYD6lPiFoZw4mOYOco4lZ1cIR0j%2B4wbY5LMB1aqEX%2B4mfQyT1RnNk%2FieCkqqGLxTsFC%2FGM69hYIVadPpqq0YMWnEFCrZg9zdYy%2BkLcPjjMKHu78q6AAedagGMGXYOOBCDmUZTcSOSzsZBo7W%2B%2BcYm4V5OWNNq6RfPuyBJliaOcoIp1qByvYyipCMKeAAfI%2BTyKXACVxDLerla6HijyA5Ymb9s2YszQpNwONYky2qZzoYz%2BZY2nJlqQbi9ufNvQgNV%2BqedHHG4EJI%2Bxe6CxspoP209%2BvlPcDHPumAkffl06cxuO1hOsKAByeOO%2FBpdxLuwCe6u8dozDGzJMJ%2B0v8IGOqUBw5olfJ%2BAHtTA4Jrs0ptU%2FL%2FPWT0Tli2%2FVnZVtIV%2BHJ%2F0W7Pyq7%2BcmCBr%2Bw8m9KZbPCKkGvHvuYpQlKFZnoU6gNoC9y1tPzkjFg0FGer%2F46UyP8gUB0yUOZcATWkgZhJNZBxbKjlxovAyDS2V4ifyx4aLaP40WRn5xbhQFhqjrx1GvZLTtPccBL5TAyFTFzwGD01DA6Jsd53HcjyrHF%2FY%2BEG9l72g&X-Amz-Signature=0fd744d87b980bd1d82cbd56148fc21d87e6cc3dfa99fd96ddf1d0aa42181aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
