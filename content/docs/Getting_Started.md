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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UUHSRJD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCSti274M2tYXVjNqd0I1V%2FHzsCssKF975ObocBfzhRmQIgO2QQJPr1R%2BgMceLuqVVXwBjOxMhT3bJKJrUg6XV4mKYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDnExWOPiZH%2BHQ7m%2FSrcA%2Fqy0npFCvS%2B4tZIz0kkSFdOOawAx6oFLN7BDj9l0l%2F3NoYQclV9lYYxwBZYeKOOYMLMZmr5rZkHOQ8lRKe6FwPiyEECUEpPoUBj0OvmOI8C%2FplT7W%2BTKriXEPFAPIfn3QVhN42Kzb6jXKcssvC7BQX67jxC9Bobk0sK%2BATJDTrmAxuiIqwrNdk9eKNrWymJpueK%2FJENIEtPgbIh0L0n8YE09%2BLhKpfRq%2FmAwpjh52EgCGeY1UWytI%2BibuF8Zweq01TESs1awH9GHUmAoEbPTZ%2BUV7oycz0FTQMX74m8HFnh4m8oF7vej5Ix63hylJs2YiZFa7tK%2FYES%2BWDO%2B424Y92TAQNt8oEjPRgUMFZGDgN9VJpDe7MCBZJaf%2BILOOMMkhav9P%2Bw5etKZG5HGRHMn9kUaglc%2Bsidr0tKq8BvIg3cCeH45FpcJ0SL7WcEsxKFaYMjEZIPWRglKPGhLPifeHJ95WKdQYvpXdoZ72xH9NPJlvtgGKY5B1auYP%2BHVZjzU%2F2UXHi1bnsVk9ST0qIE3FIvSDVSbz%2FMrrEZhv%2FfHoNyQCn5SccAtgKA939Ymen9y8QB38DzGrYXeHWNx7QVC5qTGzHCbAHKGa%2BbCSF0h%2BUp%2FeaQ6K%2BDAMW68qq4ML6ehMIGOqUBwMJAklLGIO9tm6ygNAHEhrc%2FuMFVlhdGmiI0Q59j%2FZ6%2FQ4wJQ42s2JtmSJgRDRhbEGqA2pHXB2NdSFFLOj3AWGNGzrC1O%2BqTaFbKRpx6P%2FFY%2F3NbzIv2r6viATcT1khYtIkzYIJhnufSg81KyUexup8vviGVMgOoPvEZlWYm4P5Qnh6Lp9Sh3QxmHo75QRmavqjRYh75u%2BQE%2Bu%2F1aMyLk0hlz7lY&X-Amz-Signature=8b24f3b5d3e61803d482e3e1fad3a4b7855451e31aa835bba6c9a383279974b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UUHSRJD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCSti274M2tYXVjNqd0I1V%2FHzsCssKF975ObocBfzhRmQIgO2QQJPr1R%2BgMceLuqVVXwBjOxMhT3bJKJrUg6XV4mKYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDnExWOPiZH%2BHQ7m%2FSrcA%2Fqy0npFCvS%2B4tZIz0kkSFdOOawAx6oFLN7BDj9l0l%2F3NoYQclV9lYYxwBZYeKOOYMLMZmr5rZkHOQ8lRKe6FwPiyEECUEpPoUBj0OvmOI8C%2FplT7W%2BTKriXEPFAPIfn3QVhN42Kzb6jXKcssvC7BQX67jxC9Bobk0sK%2BATJDTrmAxuiIqwrNdk9eKNrWymJpueK%2FJENIEtPgbIh0L0n8YE09%2BLhKpfRq%2FmAwpjh52EgCGeY1UWytI%2BibuF8Zweq01TESs1awH9GHUmAoEbPTZ%2BUV7oycz0FTQMX74m8HFnh4m8oF7vej5Ix63hylJs2YiZFa7tK%2FYES%2BWDO%2B424Y92TAQNt8oEjPRgUMFZGDgN9VJpDe7MCBZJaf%2BILOOMMkhav9P%2Bw5etKZG5HGRHMn9kUaglc%2Bsidr0tKq8BvIg3cCeH45FpcJ0SL7WcEsxKFaYMjEZIPWRglKPGhLPifeHJ95WKdQYvpXdoZ72xH9NPJlvtgGKY5B1auYP%2BHVZjzU%2F2UXHi1bnsVk9ST0qIE3FIvSDVSbz%2FMrrEZhv%2FfHoNyQCn5SccAtgKA939Ymen9y8QB38DzGrYXeHWNx7QVC5qTGzHCbAHKGa%2BbCSF0h%2BUp%2FeaQ6K%2BDAMW68qq4ML6ehMIGOqUBwMJAklLGIO9tm6ygNAHEhrc%2FuMFVlhdGmiI0Q59j%2FZ6%2FQ4wJQ42s2JtmSJgRDRhbEGqA2pHXB2NdSFFLOj3AWGNGzrC1O%2BqTaFbKRpx6P%2FFY%2F3NbzIv2r6viATcT1khYtIkzYIJhnufSg81KyUexup8vviGVMgOoPvEZlWYm4P5Qnh6Lp9Sh3QxmHo75QRmavqjRYh75u%2BQE%2Bu%2F1aMyLk0hlz7lY&X-Amz-Signature=bc92dc10ce66ea83a6cc5691d08043a98a83407a67db8376089f0cb9c3335f12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UUHSRJD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCSti274M2tYXVjNqd0I1V%2FHzsCssKF975ObocBfzhRmQIgO2QQJPr1R%2BgMceLuqVVXwBjOxMhT3bJKJrUg6XV4mKYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDnExWOPiZH%2BHQ7m%2FSrcA%2Fqy0npFCvS%2B4tZIz0kkSFdOOawAx6oFLN7BDj9l0l%2F3NoYQclV9lYYxwBZYeKOOYMLMZmr5rZkHOQ8lRKe6FwPiyEECUEpPoUBj0OvmOI8C%2FplT7W%2BTKriXEPFAPIfn3QVhN42Kzb6jXKcssvC7BQX67jxC9Bobk0sK%2BATJDTrmAxuiIqwrNdk9eKNrWymJpueK%2FJENIEtPgbIh0L0n8YE09%2BLhKpfRq%2FmAwpjh52EgCGeY1UWytI%2BibuF8Zweq01TESs1awH9GHUmAoEbPTZ%2BUV7oycz0FTQMX74m8HFnh4m8oF7vej5Ix63hylJs2YiZFa7tK%2FYES%2BWDO%2B424Y92TAQNt8oEjPRgUMFZGDgN9VJpDe7MCBZJaf%2BILOOMMkhav9P%2Bw5etKZG5HGRHMn9kUaglc%2Bsidr0tKq8BvIg3cCeH45FpcJ0SL7WcEsxKFaYMjEZIPWRglKPGhLPifeHJ95WKdQYvpXdoZ72xH9NPJlvtgGKY5B1auYP%2BHVZjzU%2F2UXHi1bnsVk9ST0qIE3FIvSDVSbz%2FMrrEZhv%2FfHoNyQCn5SccAtgKA939Ymen9y8QB38DzGrYXeHWNx7QVC5qTGzHCbAHKGa%2BbCSF0h%2BUp%2FeaQ6K%2BDAMW68qq4ML6ehMIGOqUBwMJAklLGIO9tm6ygNAHEhrc%2FuMFVlhdGmiI0Q59j%2FZ6%2FQ4wJQ42s2JtmSJgRDRhbEGqA2pHXB2NdSFFLOj3AWGNGzrC1O%2BqTaFbKRpx6P%2FFY%2F3NbzIv2r6viATcT1khYtIkzYIJhnufSg81KyUexup8vviGVMgOoPvEZlWYm4P5Qnh6Lp9Sh3QxmHo75QRmavqjRYh75u%2BQE%2Bu%2F1aMyLk0hlz7lY&X-Amz-Signature=ef0e8f7f8a460e613a38ce1a84d7723377d622be37693546b49fd244a5233726&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N6YTUMI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBqPS98b5kEIdEzmDNFdXu%2FnvC%2Bk0x73fQJZtYifXurZAiEAx0rLRclFzM7gPt%2FdUins83hGPgMJYeMxduGVD43Srlsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCIfNckaKqS0Jf1nMSrcAy3f%2BCWLXdvbNLN3N6eWj0GekIDkJX1j2PAMSyJEtn7rchfOuZUBwNy%2Fy0XW08Wjkp6jioHrgPrej84Jmd7OTKcpgucTeoa1WBbV%2BY7n22WP%2FN4QXPsdT2DApcqbsvHeX%2Bu3GI9f%2B4bfTqgpu5J6bmcov0jrXrv7B6dbhZj5CtDyoTuvJDKdt%2BMq4hkzjFsa%2BAzfBe9nRkJcrI747f%2B6cqnfqr9GJNPVjkYEP6Y6TF0q5AydYSgxz6HBPcNtYNX3KAxEchQvUadNNXi0mbB0YV9b%2Fj7tgVE3r5bxlORGAIbbFSqjuCBt8rU6HeBS4HKB%2Bi4NZVhAQHIZ0Yb0cWt9YpUloxdsUR%2Fmh1xGHuVunCFBGH6lR1OOed27aR47KNpg%2Bi6afG5JMHtF1Axqsnky%2BY7Zu9CYEW2W8QI%2BGXN943Q7Ejd79kxRRWpFCkQqtqnThOL5mxrff0QYMYlc9aEErem9eKpotTQSD5swNfi%2FcSkMnOl2nYoLCdv6YNKo6HdOQdQW3SvmDflyIm08uBup%2F%2BKgJlGFu5G152S7n4cYOmzoACZTw40swqJFet0nMiTPHrWxox5H5VhmDEKLY6AuvDR%2FeqZVO%2FxaT%2BlS5a0BPtf7W0MR887GX2a6JLasMLyKhMIGOqUB75We1ClSs4Sufd8935uFw8V8NsehRsEUf0maJGxdnzEL1qPYVUWRZ9iv2wKu%2BkvyEHtwFEN%2Bnmauvg2zcbXI%2FSXl4K14Sfjk47AlKIQgKtLgt%2BgvYsBoj%2BfU2zIB3GGko2Ga71Ch5cLgDdec1lPs64%2B5H8jHDRZlCqhvLBwOrKGMbukmigfVfSDTEZ%2FzY8pS0FwYo%2FPuxMU1v%2By7FbO5dt62TIUY&X-Amz-Signature=8e96c73e5938db541d1b9319fd861ded423b4c76813e84fea8709bb52053ada6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4WS3LW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQC5lG0ljSc4gk8DUkO6z6Ulhpb%2FESSM3%2FTqDDpYNm94sgIhAIibNRF8LAEY5muh50Fsyfob22cbmmDu9Dwj5w5nFbmwKv8DCDwQABoMNjM3NDIzMTgzODA1Igz8%2B2dX5umuay1%2BLJ8q3AP0s9%2BsLGjReOml7%2F8RAtHm9LZtYXAamkauZ28yxz9%2Bm6oqVr8I%2BAScZLvR273gNboLASFXt0yCpj%2Bq0ExdyZIOQsp1Wxduu4XmHcL3UzUWzVQ3gfb3fgf8sI195b%2BKos2QeKrTttGEg83InNV1cpLbztf7%2FTZ6NVUGqARkEq%2FILfZbQUDguQLVNw71q1ledKTSlO0N4ih4RhOrMN2lJHv6mdkYP790PghjMUF6nekFpD2aIkVTmiFovKX7ws7pJiB0fvPyNt67RzIw7EdPw%2FvedAGIwWlAGCJBrWYTh1TA9Uj2s6VlOBPNiV4FPf5LGi4kwfzH6c%2BVSnqZcf6Xf1N99Xlyhgyydf4uqzpEtk5bIJlB3rijQzXr2V8CRqUx0gRNrS5WLdHPkAmxb6g1QmLBR7C4%2FZPeC26c%2FVrTU%2FGo9AxjTlySr%2Fy4O2zyQq3uvfvax0Sutq0ZZqd8mA%2BPyzhybjb0BZu%2BvVmhG0s5PiZfCvuFHmUutBOotQZ4dBD0rnGNnpF%2Flh3%2FN0uDp6yzdWorJRhClH8WjumdI68AxUSjoOL6qdP325vWf6v4RbOFg64qOtEAryFXzrxDCqBqQFYS4%2Bm38%2FfTTAWaVAtlll%2B6Opbvb2d2AygG2jh7YzCGioTCBjqkASWitUhlKBDU3mCYSve%2FCpKRT0KW16OSCzJnQyc0eYoh1DYq6pKEquN2vXzVqKe5MChrF0Mqo%2Fu3C2NPAlsiEADVF01JWup0yuXeXN3HH77iVqM6%2BclMUGUSDe4PjLW%2FP4pRqugrGBeMF%2FN7BupNopKTWTzTn3aLdqg4hZsR5O8dcrx%2Fw%2Fb7pvoU6KcLLS6bpGyxK8AIxxfdWXXZL4dLpis9zHAf&X-Amz-Signature=7f00232d8965734e7cb29e01dc3bfafe5674782f0d23deb940a686a17f54eadd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UUHSRJD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCSti274M2tYXVjNqd0I1V%2FHzsCssKF975ObocBfzhRmQIgO2QQJPr1R%2BgMceLuqVVXwBjOxMhT3bJKJrUg6XV4mKYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDnExWOPiZH%2BHQ7m%2FSrcA%2Fqy0npFCvS%2B4tZIz0kkSFdOOawAx6oFLN7BDj9l0l%2F3NoYQclV9lYYxwBZYeKOOYMLMZmr5rZkHOQ8lRKe6FwPiyEECUEpPoUBj0OvmOI8C%2FplT7W%2BTKriXEPFAPIfn3QVhN42Kzb6jXKcssvC7BQX67jxC9Bobk0sK%2BATJDTrmAxuiIqwrNdk9eKNrWymJpueK%2FJENIEtPgbIh0L0n8YE09%2BLhKpfRq%2FmAwpjh52EgCGeY1UWytI%2BibuF8Zweq01TESs1awH9GHUmAoEbPTZ%2BUV7oycz0FTQMX74m8HFnh4m8oF7vej5Ix63hylJs2YiZFa7tK%2FYES%2BWDO%2B424Y92TAQNt8oEjPRgUMFZGDgN9VJpDe7MCBZJaf%2BILOOMMkhav9P%2Bw5etKZG5HGRHMn9kUaglc%2Bsidr0tKq8BvIg3cCeH45FpcJ0SL7WcEsxKFaYMjEZIPWRglKPGhLPifeHJ95WKdQYvpXdoZ72xH9NPJlvtgGKY5B1auYP%2BHVZjzU%2F2UXHi1bnsVk9ST0qIE3FIvSDVSbz%2FMrrEZhv%2FfHoNyQCn5SccAtgKA939Ymen9y8QB38DzGrYXeHWNx7QVC5qTGzHCbAHKGa%2BbCSF0h%2BUp%2FeaQ6K%2BDAMW68qq4ML6ehMIGOqUBwMJAklLGIO9tm6ygNAHEhrc%2FuMFVlhdGmiI0Q59j%2FZ6%2FQ4wJQ42s2JtmSJgRDRhbEGqA2pHXB2NdSFFLOj3AWGNGzrC1O%2BqTaFbKRpx6P%2FFY%2F3NbzIv2r6viATcT1khYtIkzYIJhnufSg81KyUexup8vviGVMgOoPvEZlWYm4P5Qnh6Lp9Sh3QxmHo75QRmavqjRYh75u%2BQE%2Bu%2F1aMyLk0hlz7lY&X-Amz-Signature=4172b8d81b41c476b125528fa24cbe48bd14721603620f85113938c15b5c3757&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
