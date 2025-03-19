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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3W5XHXJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD0cn%2Br%2FH4gm1EPS2Oxi%2B4MYY1qHPaFZOxLnBc1UxpMjwIgb0cqzDguxpeSDjdxrkNbiBw9ONarV9TxAug863MXzTMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCwIbAI7nAR64qK4HyrcA9IFv4auTY11OCYZSYxc9YGFkrUME%2FefEBHNAhfXIGi%2By4wfCN7gyDxSMcDsoOzWP8KOygj%2BwJfFkuHAcon7WiyZlzCt%2FuCkLYN%2BzkI0gvrE6FATki1PwtzsLXcaXYvIiaNA1SBJPaoZRtOtWiEc327WZyBLaNpe3slF1Pj7gU5DsXGohOTOnKu1IcBHosVLql%2BkyLPhUNguXWSnco5wj3SM1NHM8alKcd26wk5qQP%2FUs%2Ff28OjJW9pUSvZxJT7O1j9j4eXvESnAh8H3ItAWoNZBBMOS6C59YIFIHkiu7pNdcraTCA6I7xGZEJ8oV%2B0Q8cpTXT6Cf8kjjmfIgpwFk0be9Ic0bHDhPzOPx4hvyvOkU7AiajaiWPqTOtv%2BjmTYTeP0YLu4Onb4qI7ZzObz627He3TlsFM1qrfiB0EF%2BdKd25GnCaxHhUnKpa3lL1hIlDdOa0jkvdGpEsZdk4%2Ftgz69mATYowIxkQ6jf0wxZwdmTHDrg5VgDapvCGcryRanjxH0DlUnIsJoYVJvAm%2F03f1KiE2SoWX0DStdMuASDbBoPSBelHDesgmh8iDsp8a7Z5S9ObUK%2Fr%2BPWaw5gxLqEUNKso3x5hmelStekj1tuyypUQsddgrkbdy6%2Fh2QMIf%2B6L4GOqUBw1BX5yZUna%2BZ%2Fgc2aFqZcbt%2FXahrysFYT4vOEjmqgj9tGHAPecZVRdiFqBgf6ipRhesfBKz0D5WynmhBCKu77hSikY3%2B%2F%2FyKIarTaMP5aRSMDf%2Bq4mzU3L%2FM%2FXirtM41rGm80h7rtdJoamFud8WqLBLz%2Blo4ASXvdSgxJ9o3L6mou8uyk3p%2Bci5wOT5aS4pjzj6U1U7BMaGcSPoY8kHsH%2F821zDn&X-Amz-Signature=5a73084621d8c3cb169a3b2c1093d9bc7b8b9c11418ca9d806491f5674985419&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3W5XHXJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD0cn%2Br%2FH4gm1EPS2Oxi%2B4MYY1qHPaFZOxLnBc1UxpMjwIgb0cqzDguxpeSDjdxrkNbiBw9ONarV9TxAug863MXzTMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCwIbAI7nAR64qK4HyrcA9IFv4auTY11OCYZSYxc9YGFkrUME%2FefEBHNAhfXIGi%2By4wfCN7gyDxSMcDsoOzWP8KOygj%2BwJfFkuHAcon7WiyZlzCt%2FuCkLYN%2BzkI0gvrE6FATki1PwtzsLXcaXYvIiaNA1SBJPaoZRtOtWiEc327WZyBLaNpe3slF1Pj7gU5DsXGohOTOnKu1IcBHosVLql%2BkyLPhUNguXWSnco5wj3SM1NHM8alKcd26wk5qQP%2FUs%2Ff28OjJW9pUSvZxJT7O1j9j4eXvESnAh8H3ItAWoNZBBMOS6C59YIFIHkiu7pNdcraTCA6I7xGZEJ8oV%2B0Q8cpTXT6Cf8kjjmfIgpwFk0be9Ic0bHDhPzOPx4hvyvOkU7AiajaiWPqTOtv%2BjmTYTeP0YLu4Onb4qI7ZzObz627He3TlsFM1qrfiB0EF%2BdKd25GnCaxHhUnKpa3lL1hIlDdOa0jkvdGpEsZdk4%2Ftgz69mATYowIxkQ6jf0wxZwdmTHDrg5VgDapvCGcryRanjxH0DlUnIsJoYVJvAm%2F03f1KiE2SoWX0DStdMuASDbBoPSBelHDesgmh8iDsp8a7Z5S9ObUK%2Fr%2BPWaw5gxLqEUNKso3x5hmelStekj1tuyypUQsddgrkbdy6%2Fh2QMIf%2B6L4GOqUBw1BX5yZUna%2BZ%2Fgc2aFqZcbt%2FXahrysFYT4vOEjmqgj9tGHAPecZVRdiFqBgf6ipRhesfBKz0D5WynmhBCKu77hSikY3%2B%2F%2FyKIarTaMP5aRSMDf%2Bq4mzU3L%2FM%2FXirtM41rGm80h7rtdJoamFud8WqLBLz%2Blo4ASXvdSgxJ9o3L6mou8uyk3p%2Bci5wOT5aS4pjzj6U1U7BMaGcSPoY8kHsH%2F821zDn&X-Amz-Signature=da0ae508ac762e2db3566d2b9d3acd54b05ca3e71290e38394e9fbaa997cd5eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7BSNHQ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEWHCUgTPy5b3zCNouBX9xCi34ldsSkTA8DMAf%2FMF1GOAiEAxsegR0WnDdwR%2FhuMoVW5Cvkpc8yXECPlP8QTp4C2Syoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJW6rfI8xDM1%2B57BhCrcA4ROE9OfYaYE2BuFQ687U8AAWMuPdXcJ3rpxFvaYnS09sFsbM7Npcpiy0rvwc3qeF3lG9lXmhQ8ruAKUPMwRnQP4rJshdVo6Z4AshRUY1Xk2X37PbAk6u7xjabVAq95xrrH7Ydr24elwJZu59Sz346XsMI9rWA6Ag56YaU50HB61fOwz41mzvehb8eio5SgFqq%2BhTA3fHNg4fZWHKG6fos6O%2Bez%2BKqaJ%2Bu5YpFuIq%2FZyOiVULSEGblvxnzSwVY0iLuCnfkP4%2BPuag%2Bx2cboiSGIfKMbz88hrovcIHsXXKFGfeSI9qc0Zw9QnIvBqXsy4yeOWG05qBJT3yehxAl%2ByWRYBXQDZ1hk66gwENrC%2Bgkh781n7uYd46Y2Oqtv41cAnkXI4zH6SlO9nwBzuqfHUCmtVelKZa81sEmgjRczZ%2BX8f8o%2FlohsXD%2FU11QaQs8X8VQzvY7Pq0u6ZOM%2FBbhwmlYGmSGzIMZslDmk63npswNr2%2BdvvwmZ60CYlKPkeENHytjnZGmHFU8YhGvBpBdEp4lsXAh%2B8aOEIc0QVeZj%2F9Nb%2FLHqGiklPn7QC9d2HdqsiAyTe8q2fR16Ntx%2FyBhQPsdLamYSnyLx1ZcwojMOv%2BVRUMdIamRQ9be9q%2BoovMPv96L4GOqUB4CJFcKa8bHXcbglUyNhH0LtCG%2FSkuOFz2%2FA5HR%2BgchNSwy%2BsEBPbo5OaYF4FMXb6hPSrfmvsQUG0YhD3w6ksBAAGseV4rNMVpbHuzHMAu1MmnrnFBMcTGYfcvlKld6SQfewtm0dDdcTR8eo6eKTDfGXayDDWO45Fal7VqMXphdoDRbw2S0vT4tEag4k5Rc08u30BNFi7SFDWEN01OBCmKlEpPkfW&X-Amz-Signature=6809673031c9b96246c844ea3e76feffdff8fb968d7f7051219ee52a7215de97&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZHT24X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHe0I0RjJe59doJ1GT8DRjM3yOZ3614Fb8wF6RHo%2FN6DAiEAgtgkCK6gMpnqvB7KpMsTGPLRS%2FGdu2QWrCZFRDUd%2FrEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJn8oGUvPIai8SdhWCrcA34V82kDBQjBJtOXUA123YC%2B3fEPWEUujMCyDBOuI8PNhTnuW5LwYnme3YAYtcPbIPSksbPG3kTYlEMpt1PwtGd01kOSLEzciQt5ORoSojJOQCOYLMb1BzJNLPokpNiSCCxg5deTiKOmFjfBEuX58%2FrpXQy8bGUudU9Lw5oVfDlIc1QgtvSiTEDV6wxeaJwUvaTPGyJj9ef6SHJAbpjtgYZwSL0CXicpiRApGHYZt3zIwmgdzfIdiJFhZ6plTq8l3uct%2BzhhRirr3JovQQVrzXqq3pHkXPGssRamVKqGzBwYFXWGiyzhs3Ds4wnsMt8y5W1UFFwpPCordqJs22eqUbwsuY5%2B8zYW6lHeWEWrE1OGalXinSUzHRxf3%2BNai7vJgUVdyadCURz0LVMvKwXpiOyFPFYJej0wYav%2FSz4xNJPHDAlUINQSj1I0544TtBgTVnBVx08A1y5kgnCj43zqXB3fiak7KahaqBuRcFrEy1pY27MrrWOKE3Tv2T5RjnIWaijovpnYRbToB%2BhQKa5Y99D52xwf%2FUu%2F%2FN9feeWBzoaLAP3gOmQ4olylxGDQWlxGBTEzvS4qTrrbJmbDuDmF4hjAjkeVA%2FdPTyCSLNOMXfmrXpWPWQv6Jw6VYGGVMNn96L4GOqUBL5zWhsC%2Fno0Y7DHWc5ZyVND3u5RYZO8aMa1GIMjAksYreqZrnVv3cVhub6EdeKTcLql9NoWELU1KDSVKxrLb%2B9h0ukaKxwHoqabZFzHTkbmjJ5b6Jx6u7PFYrL3QvIcRYnF4Va7MFGYu177KGchJKBiDDv7GygeoFGQWZTyqlpeSQcPVJg%2FqMFRahfvVkte4YbG3oN6O52yPL%2FO6Wfsmc%2FZesaY1&X-Amz-Signature=0dc0000c0e4eb3702c8a5d26f06cf3b014752760d4b125321e03cc9134372ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3W5XHXJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD0cn%2Br%2FH4gm1EPS2Oxi%2B4MYY1qHPaFZOxLnBc1UxpMjwIgb0cqzDguxpeSDjdxrkNbiBw9ONarV9TxAug863MXzTMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCwIbAI7nAR64qK4HyrcA9IFv4auTY11OCYZSYxc9YGFkrUME%2FefEBHNAhfXIGi%2By4wfCN7gyDxSMcDsoOzWP8KOygj%2BwJfFkuHAcon7WiyZlzCt%2FuCkLYN%2BzkI0gvrE6FATki1PwtzsLXcaXYvIiaNA1SBJPaoZRtOtWiEc327WZyBLaNpe3slF1Pj7gU5DsXGohOTOnKu1IcBHosVLql%2BkyLPhUNguXWSnco5wj3SM1NHM8alKcd26wk5qQP%2FUs%2Ff28OjJW9pUSvZxJT7O1j9j4eXvESnAh8H3ItAWoNZBBMOS6C59YIFIHkiu7pNdcraTCA6I7xGZEJ8oV%2B0Q8cpTXT6Cf8kjjmfIgpwFk0be9Ic0bHDhPzOPx4hvyvOkU7AiajaiWPqTOtv%2BjmTYTeP0YLu4Onb4qI7ZzObz627He3TlsFM1qrfiB0EF%2BdKd25GnCaxHhUnKpa3lL1hIlDdOa0jkvdGpEsZdk4%2Ftgz69mATYowIxkQ6jf0wxZwdmTHDrg5VgDapvCGcryRanjxH0DlUnIsJoYVJvAm%2F03f1KiE2SoWX0DStdMuASDbBoPSBelHDesgmh8iDsp8a7Z5S9ObUK%2Fr%2BPWaw5gxLqEUNKso3x5hmelStekj1tuyypUQsddgrkbdy6%2Fh2QMIf%2B6L4GOqUBw1BX5yZUna%2BZ%2Fgc2aFqZcbt%2FXahrysFYT4vOEjmqgj9tGHAPecZVRdiFqBgf6ipRhesfBKz0D5WynmhBCKu77hSikY3%2B%2F%2FyKIarTaMP5aRSMDf%2Bq4mzU3L%2FM%2FXirtM41rGm80h7rtdJoamFud8WqLBLz%2Blo4ASXvdSgxJ9o3L6mou8uyk3p%2Bci5wOT5aS4pjzj6U1U7BMaGcSPoY8kHsH%2F821zDn&X-Amz-Signature=de95f9c4c850273ddaf5e0ab6b0a2bb8340aba27869952f54b3133ceb31ae59f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
