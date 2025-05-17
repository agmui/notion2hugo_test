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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J24JDI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOb2Rqm1Vyc2Rr9l90mX%2FPhcxGheuNW7xS4cRc71ZqeQIhAMrVIbx1gF6ITXlrUiwfNP8TB8ZLZSt5XuAkpIgsTiQVKv8DCGcQABoMNjM3NDIzMTgzODA1IgyPpts1Y8No9RiZtN4q3AO%2FSRfs5bl9oHvQLsi%2FD%2F7JyS2WuBUrmfz4YfSvWyvyZAAEop8jrEu3nXpA2YyI9lFbZ9laX1VFjJSION731uUcJnYtQhjy3gKYhScVMNI1gSW%2FOzWsOY5kOciDh%2F22XfBuKKHoIWr9iMN14HowtCIap8KRlyFLH6OjZkM9URsVmEx1D13GHAMvu4cMGiO5RFgxjr8Yepy3oZbcRMlXu5Q2WC3cGc5N1lRf%2BFhmFbtpWBxa6VWBfGFocha8rxiuJ8qompzldBejPlu1n3hLbXdhpHZDg8EtzICjrLTrVfghMBgeCGmCh2L08nKCoRGlM01%2B2%2FL9Es9uv6rPWirun36zxI0mpMWatQlG7%2BO%2Bdw5s62axDDAzsbp4n4zeQP8%2FYAGCCxFWUfn%2FG5ttG%2B8xtFWTWlrglYPtc8yytFPi1bbItcIocU8TBtEIA3nGdWMfB%2FB80uvW%2FQVBmUohsWLlQ5U0yEdRL4eZrM2QtshB7UcnENGu1apWWwz1SEW%2B%2ByCDR9QvBJI7sd5hfF8kV9%2BOEQuDN0l4KTzbLRLxDaolDoVYiRZaxybxCYP63v5ZmHsUHOgqZLYCw4OoBuFTZ90ep3wL1SDRLResEqt2NDWlSFnF%2Fjdi2HWaM5sZ0sxkwjD0kKTBBjqkAZWOqDkFqO3m1k7oShVDML2SZoksBa%2FRWVENWoBy1c2kfmmFlZmEmoeooyItns2V%2Fu90jvHzYysLyWE81jFnaNyfRqVXUCFupT0MaWgeVFRpS8texBfrLskaO8GgfdtFG5X1jtNdZhVGVPdmqScnW2z9g96rUQvRPUGYLz65rmwdHAyaIlpbNRUYznMVP7YY62qx68pzFs2scrXVHyPf3yWR4hUB&X-Amz-Signature=a87257baf11fa3681b3b9e84d905a16e41ea13c8260a4fae2c9d0a3efb6d3418&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J24JDI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOb2Rqm1Vyc2Rr9l90mX%2FPhcxGheuNW7xS4cRc71ZqeQIhAMrVIbx1gF6ITXlrUiwfNP8TB8ZLZSt5XuAkpIgsTiQVKv8DCGcQABoMNjM3NDIzMTgzODA1IgyPpts1Y8No9RiZtN4q3AO%2FSRfs5bl9oHvQLsi%2FD%2F7JyS2WuBUrmfz4YfSvWyvyZAAEop8jrEu3nXpA2YyI9lFbZ9laX1VFjJSION731uUcJnYtQhjy3gKYhScVMNI1gSW%2FOzWsOY5kOciDh%2F22XfBuKKHoIWr9iMN14HowtCIap8KRlyFLH6OjZkM9URsVmEx1D13GHAMvu4cMGiO5RFgxjr8Yepy3oZbcRMlXu5Q2WC3cGc5N1lRf%2BFhmFbtpWBxa6VWBfGFocha8rxiuJ8qompzldBejPlu1n3hLbXdhpHZDg8EtzICjrLTrVfghMBgeCGmCh2L08nKCoRGlM01%2B2%2FL9Es9uv6rPWirun36zxI0mpMWatQlG7%2BO%2Bdw5s62axDDAzsbp4n4zeQP8%2FYAGCCxFWUfn%2FG5ttG%2B8xtFWTWlrglYPtc8yytFPi1bbItcIocU8TBtEIA3nGdWMfB%2FB80uvW%2FQVBmUohsWLlQ5U0yEdRL4eZrM2QtshB7UcnENGu1apWWwz1SEW%2B%2ByCDR9QvBJI7sd5hfF8kV9%2BOEQuDN0l4KTzbLRLxDaolDoVYiRZaxybxCYP63v5ZmHsUHOgqZLYCw4OoBuFTZ90ep3wL1SDRLResEqt2NDWlSFnF%2Fjdi2HWaM5sZ0sxkwjD0kKTBBjqkAZWOqDkFqO3m1k7oShVDML2SZoksBa%2FRWVENWoBy1c2kfmmFlZmEmoeooyItns2V%2Fu90jvHzYysLyWE81jFnaNyfRqVXUCFupT0MaWgeVFRpS8texBfrLskaO8GgfdtFG5X1jtNdZhVGVPdmqScnW2z9g96rUQvRPUGYLz65rmwdHAyaIlpbNRUYznMVP7YY62qx68pzFs2scrXVHyPf3yWR4hUB&X-Amz-Signature=4d23beffd8fbb6176e094c31c6010a6cef44e1d0ce3bde3451b5fb752f09a1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J24JDI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOb2Rqm1Vyc2Rr9l90mX%2FPhcxGheuNW7xS4cRc71ZqeQIhAMrVIbx1gF6ITXlrUiwfNP8TB8ZLZSt5XuAkpIgsTiQVKv8DCGcQABoMNjM3NDIzMTgzODA1IgyPpts1Y8No9RiZtN4q3AO%2FSRfs5bl9oHvQLsi%2FD%2F7JyS2WuBUrmfz4YfSvWyvyZAAEop8jrEu3nXpA2YyI9lFbZ9laX1VFjJSION731uUcJnYtQhjy3gKYhScVMNI1gSW%2FOzWsOY5kOciDh%2F22XfBuKKHoIWr9iMN14HowtCIap8KRlyFLH6OjZkM9URsVmEx1D13GHAMvu4cMGiO5RFgxjr8Yepy3oZbcRMlXu5Q2WC3cGc5N1lRf%2BFhmFbtpWBxa6VWBfGFocha8rxiuJ8qompzldBejPlu1n3hLbXdhpHZDg8EtzICjrLTrVfghMBgeCGmCh2L08nKCoRGlM01%2B2%2FL9Es9uv6rPWirun36zxI0mpMWatQlG7%2BO%2Bdw5s62axDDAzsbp4n4zeQP8%2FYAGCCxFWUfn%2FG5ttG%2B8xtFWTWlrglYPtc8yytFPi1bbItcIocU8TBtEIA3nGdWMfB%2FB80uvW%2FQVBmUohsWLlQ5U0yEdRL4eZrM2QtshB7UcnENGu1apWWwz1SEW%2B%2ByCDR9QvBJI7sd5hfF8kV9%2BOEQuDN0l4KTzbLRLxDaolDoVYiRZaxybxCYP63v5ZmHsUHOgqZLYCw4OoBuFTZ90ep3wL1SDRLResEqt2NDWlSFnF%2Fjdi2HWaM5sZ0sxkwjD0kKTBBjqkAZWOqDkFqO3m1k7oShVDML2SZoksBa%2FRWVENWoBy1c2kfmmFlZmEmoeooyItns2V%2Fu90jvHzYysLyWE81jFnaNyfRqVXUCFupT0MaWgeVFRpS8texBfrLskaO8GgfdtFG5X1jtNdZhVGVPdmqScnW2z9g96rUQvRPUGYLz65rmwdHAyaIlpbNRUYznMVP7YY62qx68pzFs2scrXVHyPf3yWR4hUB&X-Amz-Signature=b07153075a3ad58d66fcc15200229fbf4ac16e5f119b6e6d61b8169c61cd02a5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUSHX3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iVmUTRVKKHFDEoJlBLcrDmEebQi1mHkVgFq1Xrf0FAIgL1XQz0SXrcKLmI46v4OKpsb9qIxq6z3kqFkhWiBBmvQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMvM17WueKDn7viYbircA1FnLKnwky4ZbVTyiiR%2FZE4GpHBZK7eDcDp1DoHvSVDCQyK498EgAhLA9pxJIwA7Gn6bY%2FMyQvI5lX7Opc5qzuHIhJ4t8HUg9sfOM6ejhJp66Ju7ysuNfaqvUommDHYTqjxVY9Uvl%2FGY1To6ccUyFXBWFSS8546tTm%2Bea4Wmhqg%2BZfS6Sb5q4Cbi5Jb96ZfLXqrQix9nnVD1mWlbjQEaGDFfBcf8z%2Bcs4ZkXnoI70buirX5hM8E4Bi8yTkUl%2BUhph5DU9HvK8jjA1uzh4EhigIXwehalSYOQNGz2ZVLFPTWIxE%2F2NUKGdszm4BL49p00ZedlnOtlGDY1SdsCb87XK8uULF31u37qxnMTtpu3nmO%2B%2Fcra6paBbEIPVzzjjg2Gaykw5a3QbXHBXBacm0mcowcFJvOp3Ne%2FBo6sYuSKK8FdwBNEULrpT5n3y9VVczqioavkZOg76ZIV0Rt7DtgwlBpXGwhCQCzBDy8cHs6s%2FRe%2BwB3lfqIGj%2Fmy4LZXcVSlZl3KIvHQKpXxz%2Fxo4Xdiy3k45i6Ryx64rtHliBF7xMefvFK0Yjjd8WUh8ei%2FMN5CEMj%2BbMP8Ex4mfkX3WS%2FgC5JTUBHoTyJ7WoPRP1ktWDuc6%2F%2BfGq%2FUtKTA3pRRMJORpMEGOqUBEdVe7xngqhh7o1zBOy%2FYRxdiSHnjhw0bOw5cNrUEYOoAdHoXBKIqG8wiXi3beqFSLwlWd%2BPsSeFeuxxdkGpl5QYF3vnGfZwOEk7bbdSMkHNql2mAjV3wtlrMXNM2piRe9WdK9XMxt1r1E6KLgvgY1aeL6wDYbPYMWZMQXVQvsVTJVWAbc0pQEOK9RJGhW7Jx2ULh7yORn2%2Fuqj1Lzrxu5GwiKY93&X-Amz-Signature=cca0a9e1a572a13bcfb13aa93b7543642b5998a411af5ceb1804ea022703bc70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZRFKMB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4zFg6y%2FTHmYhztrwIp5oHc0Y%2FbrzlrzU2iCGGUl4dBAiEA7f%2FX8zt%2BZtK0QIFYnaiPB%2FkNaXjrya88VqHs8VLnT3wq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMzcpXAqlhLpISk17SrcA4hTbkktu2zhv7peFKF4kDz5GuC%2FIWLiNhgLkdlBogdiCPiFXhYdji28AX94caO0MYk3YvDQejC%2BN5RcVBU1%2FVsAxffK6V5as48%2FU%2B6S3jV1hDQKoQYDN4SQygTSfl4BlHON%2Fxz7dISMcVRvShDGAevLJ4V3jzR1hpDu1s7cLljQawWUGqEh5CWRNiGTuZfhR0Q3t%2BVbigDCy1TLgXblhjdb%2BnPmVYj8wlYwI0QrACIkVuUGqcNKO9qFcz24l1XU6rqcm4ZupND9tl6spV87EEqKjjkFMH7SlZahG3WL5kAePfipJt8Fw1BlAtOkUK1IyFW8ESBHVdQEudcFxBS61yrCUizapUIyVnxMJBf9Lh883nKI%2FwyDUL%2Fdj2WSUIoWiGidi%2BX7uhAEo2Y4d%2FizEtKUcHgtUkScmDhWWw0IKAn6EDU2qpZDBjbrB7ik2LsHpZIPqFcE%2F7zy2jRDAH9s7kWpdPo2HmzKnM9G9S13MEX0GJicD7a%2FpTnZX5Bqxj1%2B%2BRpxrzWOtkSjTAuQejlfytW7hENzblKqQdd5zThoQOELxxgSH6rf1bplgmRafWLpzWoCHujr3WN6D3NSVNIGnNEylvWaEizVh4DbgCiRx3NC4ki2ETjSOXs1LsXEMN%2BQpMEGOqUBlxjSMB72tsrzxgfiPSwzXehflggGBOXenIeO8N9rbiYLe43989GSHjDWLMzcS3K1pvvZm9IzZgBQQaR402F9VJ3uY3E6aCWr8O3uumZidxZrm3rPlM2QOBeYQRSackd5Mo8vJsu0%2B5HmbK0UnvnzS%2Fwvpsr%2FJPOUfZDM%2FwJqRAxobVhPte3%2FaZwyCQEUuyygzkp8tuZZXfuqic%2FQza5wAgljXY7K&X-Amz-Signature=f4f2272d5d1412c74fc4608c553be8a2e9596f371138afa5cc6812fa5f6e5678&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J24JDI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOb2Rqm1Vyc2Rr9l90mX%2FPhcxGheuNW7xS4cRc71ZqeQIhAMrVIbx1gF6ITXlrUiwfNP8TB8ZLZSt5XuAkpIgsTiQVKv8DCGcQABoMNjM3NDIzMTgzODA1IgyPpts1Y8No9RiZtN4q3AO%2FSRfs5bl9oHvQLsi%2FD%2F7JyS2WuBUrmfz4YfSvWyvyZAAEop8jrEu3nXpA2YyI9lFbZ9laX1VFjJSION731uUcJnYtQhjy3gKYhScVMNI1gSW%2FOzWsOY5kOciDh%2F22XfBuKKHoIWr9iMN14HowtCIap8KRlyFLH6OjZkM9URsVmEx1D13GHAMvu4cMGiO5RFgxjr8Yepy3oZbcRMlXu5Q2WC3cGc5N1lRf%2BFhmFbtpWBxa6VWBfGFocha8rxiuJ8qompzldBejPlu1n3hLbXdhpHZDg8EtzICjrLTrVfghMBgeCGmCh2L08nKCoRGlM01%2B2%2FL9Es9uv6rPWirun36zxI0mpMWatQlG7%2BO%2Bdw5s62axDDAzsbp4n4zeQP8%2FYAGCCxFWUfn%2FG5ttG%2B8xtFWTWlrglYPtc8yytFPi1bbItcIocU8TBtEIA3nGdWMfB%2FB80uvW%2FQVBmUohsWLlQ5U0yEdRL4eZrM2QtshB7UcnENGu1apWWwz1SEW%2B%2ByCDR9QvBJI7sd5hfF8kV9%2BOEQuDN0l4KTzbLRLxDaolDoVYiRZaxybxCYP63v5ZmHsUHOgqZLYCw4OoBuFTZ90ep3wL1SDRLResEqt2NDWlSFnF%2Fjdi2HWaM5sZ0sxkwjD0kKTBBjqkAZWOqDkFqO3m1k7oShVDML2SZoksBa%2FRWVENWoBy1c2kfmmFlZmEmoeooyItns2V%2Fu90jvHzYysLyWE81jFnaNyfRqVXUCFupT0MaWgeVFRpS8texBfrLskaO8GgfdtFG5X1jtNdZhVGVPdmqScnW2z9g96rUQvRPUGYLz65rmwdHAyaIlpbNRUYznMVP7YY62qx68pzFs2scrXVHyPf3yWR4hUB&X-Amz-Signature=db43a9559a936c435e0fbcffdf9606dc06cd0654f3daa46bc2e8f272479b9692&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
