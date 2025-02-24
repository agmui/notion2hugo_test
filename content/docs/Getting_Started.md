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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIECLAO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATwQHdj9irr5M6cY%2FT0ZfhNGptzpi3tUsBUb2Q8wivgAiBSYep2gAJsDrjQHfEdbtcrQdEt9BtJCV6Q2%2FS3G6TinCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMq9jS75RylSSbcfm%2FKtwDgSN29r8bNLjpGCU0OmWsuOCPTTawtBbel8iRhI1wPbzisltxArfZKm%2Fr8lffKzeCDPpdwtqIbmx%2FTA8mdLh0IuJKpHAmhP2tprhY%2BsK9%2ByqMuk8PYI41jTZ3Uwc1v9ilJkVb3RtZU7YGItpgnNVEZa7T13D4utSe%2B4%2FIoYhB2jfMXb30vw9UW2R%2Fg9BKFX3QbFrvzM89oLYQwzCujH88k31DRHVherK1o94MvX0LKM5cNhvjMUbD%2Bvxno%2Bcm30RmML4hkZhjvlH91VnqQ3OQwxskb6iqKTczyrJL4VujIzJJQt4GhMRRPSBlu%2Fw7TMWhVurZqXSLRFHETwVQd1ow%2FTUS5lQk26du2hgcaiN5J8q6GyDABk3WsUMpfsl0uLZaC1QrGCzYgYGbXFM5byQQgGOElmAuUln2gvbHSVAiWbqNduPDQBDVnmIl8bMHMCiCxuokCg5nEZwJYMsV0kIo8rxWxtq4ldAlTHmyG%2FRhbhZ%2BfpNvkpha2ZhmITRVCSjzFShLY85E65Ij%2BN18H4aomaj7Xwmti1Ig47XiZv5s6XD2%2BRibB8mYvLbv8S3j9kp85aY7RSjd2IOYRGSfsyeG9P68Ym2kGB%2BY2ORhKJ24AQm6%2BCfQNsrsjSV%2BSAcwqP7xvQY6pgGEhvQGTL%2BWZm3iuKrEHTkh6C%2B072sISZLfc9mvAxNRVtsi3eRAlIdLX6lexBmt8PbF%2Bj8tVQvow8SRyWEtZ4VbUSDelLLtuVwKHyQ9onXfTJiZMGcqKNZSlj%2F8y%2Bh2UtoVeoiY7mUW2ArdYCD%2B0gzAngEqOflvMVl1JselGxDvmTjAUa9rHb%2FiXAhjkuI0ngpB3htJVA0pAiy0zYdrft8o4oRvUuTT&X-Amz-Signature=24f228cf49259775fb90d51569971e4c0c8761059e5225cdccd69836432c1dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIECLAO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATwQHdj9irr5M6cY%2FT0ZfhNGptzpi3tUsBUb2Q8wivgAiBSYep2gAJsDrjQHfEdbtcrQdEt9BtJCV6Q2%2FS3G6TinCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMq9jS75RylSSbcfm%2FKtwDgSN29r8bNLjpGCU0OmWsuOCPTTawtBbel8iRhI1wPbzisltxArfZKm%2Fr8lffKzeCDPpdwtqIbmx%2FTA8mdLh0IuJKpHAmhP2tprhY%2BsK9%2ByqMuk8PYI41jTZ3Uwc1v9ilJkVb3RtZU7YGItpgnNVEZa7T13D4utSe%2B4%2FIoYhB2jfMXb30vw9UW2R%2Fg9BKFX3QbFrvzM89oLYQwzCujH88k31DRHVherK1o94MvX0LKM5cNhvjMUbD%2Bvxno%2Bcm30RmML4hkZhjvlH91VnqQ3OQwxskb6iqKTczyrJL4VujIzJJQt4GhMRRPSBlu%2Fw7TMWhVurZqXSLRFHETwVQd1ow%2FTUS5lQk26du2hgcaiN5J8q6GyDABk3WsUMpfsl0uLZaC1QrGCzYgYGbXFM5byQQgGOElmAuUln2gvbHSVAiWbqNduPDQBDVnmIl8bMHMCiCxuokCg5nEZwJYMsV0kIo8rxWxtq4ldAlTHmyG%2FRhbhZ%2BfpNvkpha2ZhmITRVCSjzFShLY85E65Ij%2BN18H4aomaj7Xwmti1Ig47XiZv5s6XD2%2BRibB8mYvLbv8S3j9kp85aY7RSjd2IOYRGSfsyeG9P68Ym2kGB%2BY2ORhKJ24AQm6%2BCfQNsrsjSV%2BSAcwqP7xvQY6pgGEhvQGTL%2BWZm3iuKrEHTkh6C%2B072sISZLfc9mvAxNRVtsi3eRAlIdLX6lexBmt8PbF%2Bj8tVQvow8SRyWEtZ4VbUSDelLLtuVwKHyQ9onXfTJiZMGcqKNZSlj%2F8y%2Bh2UtoVeoiY7mUW2ArdYCD%2B0gzAngEqOflvMVl1JselGxDvmTjAUa9rHb%2FiXAhjkuI0ngpB3htJVA0pAiy0zYdrft8o4oRvUuTT&X-Amz-Signature=8ec827495376c76aa3725433bc5d079a2997de7c68564c373ef8de6de4f61598&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVAHCSA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvw11apD9GUGmUAF2fm4BSHZHEebkH5ODzgRDWw%2B0bxAiEAzYmnkb3i2emdtSGrqZHnPlAoOtQAWreUEDR3P1JUsuMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDD8DdTvEJOS%2BZGy48CrcA6hLEnqmP9zgN1n8A56j2GtMyV6UnjH3divJ25Q4BR8WfNvEo0bTip3VemD%2BxDTUPPkXeJu4OXqCvLoNxl%2B3fSRsnOPV79DElg3lMpsmX91e9rXhtDmUW%2BCphSC6p2XNgJxlQ6QkqSd7Z6I1M54GijOCM4hGuFUAdPcIZblItP0upVVjtn6Ma6JOH7KgBBWjzbYmDsCuKda10gZQOwhWJ1ggKmAfXSNFjRSalq%2B8w9VvyQGtBzSEU%2FN%2BpWAfBAomKT%2Bwe61iOLb8wookjT8oEmyLTlPRuxCj5IZmPOgXpPO84E86vusirgCjdpo7gsgQc44JRC6sYbr138ahuhll4NDMJ8Ki8BYi1yRM0N5giKJrhOrPwGek5dxP40xi8dwX8KTYEFkpDPaYkvB%2FTPdZvNVzX3Xjlu553qjMZsYu5n0y8L3WFxqc0oR48qRqG8WCa0ED%2FgH0xQz6ud1N8bTdN3trZpbLP7FSo%2FZX3oRn4w0Xyr2soglbMxSzqqSO2pTSWX7GeGKYb%2BjLcVikxy4%2FbGuTuc2A2Um1lYsePCJ%2FvwKB78Y4rBRiie3jYgSXG1czs4Y7YsYpTpkvhaj%2BKKdBOMTQLT0JO5TJdOiB69Rt4jChM6c6lVfh07WrPy6xMNX%2B8b0GOqUBQIsJTVn%2BPX9GXzSlcUqmXEGSvCJRtJ9y7MKh6cPeAsZ3A3yH2sRv2Sxx01JHGmxVE1k3QlRvebSIkwqRSDHG%2F0gFic5yonsNxLQQ2Ayw7SLedqX1UBpOBAy6cjfawp7TySZhm6oXmnV1olTbEVyXNGa%2B1e6HcZp3YAVRSTQx%2FIqPCgBPqLg%2FP5D2Wcd%2BP1TyUItyEAo7sJ%2FmtoZyJgm%2BCLY7FP%2F%2F&X-Amz-Signature=2fee11996d62e64708faabc75c21a1b71eb6e3303df8509b3a6c9035d56047b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5UN7OS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC09ow3mzcTKpO4j9L%2FQ3thbTl8pPk7UVMUbpqjneDZtAIgCKDcsax6isInXCXnVCAfwlaoBUCFofhyfe9wOeUZ7xIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHb7o%2Bs29v%2BCn2qiKircAxw5zR33TMCZ6oFLTL9NcUd5pjjgIevYsMCbD%2FTSLN9quMp4OOe9nyTWxuvP0fKd8dGLWbnHb7N0BfRf1ltCO3iPmBCPpmo5yRZzUrVqrfeMy57milMrYiSkePL7FHNaO6zXjEG9p%2Ba56lcYdPvZG78Et9YuaqLDxYEzkfNZZ71LqzVLzIiIdXma89OS2n4Sikp8tWNuJQS2eAZntgqpM2RSTTws%2BVHlFG0w0%2Fj49kG5hmEmtt0%2FTCFOHodeKKmm79HwH%2F3FHVTGhQt1%2FgQHr88ak6ikzZ8pX3xIT0sDsQ92AdTPM7rPGBosyREtTREAPQrHi9Dwwm%2Fsi4HGwh%2B141xAxZxu1hAP3KusTgEv4l6yKoOZoXi83HLFqZFVsAHZva34U5%2BC8chv0HZ8GOnhhzgExNn3rdhMWMQCtk0vX5MSZpRvYlZ8fmb9ba2FeMcpe%2BMb1KqQgMIKh3yzmgpvLmzDemC5ZjEn7renojKTFHBe39bupvWC9Oauop79OYLY4qiKWQIeglJqvaErUL72ftRzmZLCjNfrQWugBAQD%2BUBgRvFAWpXeXlf1s48PGMKoX17%2Ft2hB%2FnA4d85%2Fc2fvWKfalswMzA9FC9%2BSxm33BqxTIlSlscbZPbgB2C%2BbMP3%2B8b0GOqUBKYk5sIwN5G4c0ZMjmrS6l1XfrIbXni8i%2BACjn90GUGXBIM0Pin3lfWXOk0aeOeOW5LC5yXI4%2BCz1WBXOsjEPhFavLV%2FHn%2BXEoa%2BAlGkfzSCXvdqpsi4eBUtl6TVYbvogBcoRiguUL01UE1YXbHSsPlzAtBptbr9FIhXqb9cK%2FF%2BoW1WfiWIASNcKUUORwmvzgL5sNdeKmfTHJCKLnuLEjAOPboK7&X-Amz-Signature=84003873f79aff2e56af7663fcd9e52498d6d6f113a4262a795d8026f00b67c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIECLAO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATwQHdj9irr5M6cY%2FT0ZfhNGptzpi3tUsBUb2Q8wivgAiBSYep2gAJsDrjQHfEdbtcrQdEt9BtJCV6Q2%2FS3G6TinCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMq9jS75RylSSbcfm%2FKtwDgSN29r8bNLjpGCU0OmWsuOCPTTawtBbel8iRhI1wPbzisltxArfZKm%2Fr8lffKzeCDPpdwtqIbmx%2FTA8mdLh0IuJKpHAmhP2tprhY%2BsK9%2ByqMuk8PYI41jTZ3Uwc1v9ilJkVb3RtZU7YGItpgnNVEZa7T13D4utSe%2B4%2FIoYhB2jfMXb30vw9UW2R%2Fg9BKFX3QbFrvzM89oLYQwzCujH88k31DRHVherK1o94MvX0LKM5cNhvjMUbD%2Bvxno%2Bcm30RmML4hkZhjvlH91VnqQ3OQwxskb6iqKTczyrJL4VujIzJJQt4GhMRRPSBlu%2Fw7TMWhVurZqXSLRFHETwVQd1ow%2FTUS5lQk26du2hgcaiN5J8q6GyDABk3WsUMpfsl0uLZaC1QrGCzYgYGbXFM5byQQgGOElmAuUln2gvbHSVAiWbqNduPDQBDVnmIl8bMHMCiCxuokCg5nEZwJYMsV0kIo8rxWxtq4ldAlTHmyG%2FRhbhZ%2BfpNvkpha2ZhmITRVCSjzFShLY85E65Ij%2BN18H4aomaj7Xwmti1Ig47XiZv5s6XD2%2BRibB8mYvLbv8S3j9kp85aY7RSjd2IOYRGSfsyeG9P68Ym2kGB%2BY2ORhKJ24AQm6%2BCfQNsrsjSV%2BSAcwqP7xvQY6pgGEhvQGTL%2BWZm3iuKrEHTkh6C%2B072sISZLfc9mvAxNRVtsi3eRAlIdLX6lexBmt8PbF%2Bj8tVQvow8SRyWEtZ4VbUSDelLLtuVwKHyQ9onXfTJiZMGcqKNZSlj%2F8y%2Bh2UtoVeoiY7mUW2ArdYCD%2B0gzAngEqOflvMVl1JselGxDvmTjAUa9rHb%2FiXAhjkuI0ngpB3htJVA0pAiy0zYdrft8o4oRvUuTT&X-Amz-Signature=e5ef252639705c966045786501e5dcb1c10cf0036eb303b2ddd9003ccff47c45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
