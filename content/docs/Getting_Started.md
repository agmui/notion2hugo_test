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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVCOGGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDaPGoN4exDJV6sv5ObPcCAhZIrjPfVzACrXiTTZMfaGQIgFmWWnoD8czBFsTJFW%2FCi0z0eqdTEie2UGLRTzAmASe0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDvL0anuf9Vv4UjjtyrcAww2yn6sOBHxeqxrKy8mDofeb%2Bsm6yW%2BBm5y16Uipx2PWRXgMYlqU1Ln8yaLu0Wh1epg4Dtv2AIFVLRehS5XZNk13iwiqViBXkREZsAo3gTumFfVkvniDE374jdZ41hXXUd5bAmmeVTvGEsabrf5EhRrIT4%2FmF3w%2FoXPRUL6CFWnzok4VVdqXjRF2wronwyTF7wapQWlGRgtEqH%2FpRX3v5Qymq57PkN5K9Uc%2BK0syn%2FDSTRfbFljO%2B7%2Bqu6n5X3EO5r1xQBztInYpzJ5fdHZqxHKX7dAdPiugoDTmeyYy7CcqKh%2FQV%2FTUxKiDNm1f69aHA6d0w2MW3nmn9OOQFwzinqJSnzMTFDlUipMFGgSVQykj4HLWz3nxEmOT6FPSvrhtL7u5ou24uWMiV0Ay0%2Fe6jOokQx%2BWfvsPhfd4WjjRWwhfxFZdBtaaX8MyKc0OO9OruCbYjt7enkaO1zTRK6WUX%2Fo5VXYETNm3HmM2JBcPoEazl2LyEfZp6g8ibxuKDipaiR82abzrjIA0%2FOY13ncEPcFrs2V6Cy19UGikSAdKwNxRTBDrSffQC8VaY4na3ZeHJHKsPNcXaV%2FxKz3Y4dl7p4EJ%2F5z0GXzdd3RV8cuhOgxfAwaJqMxZb9lPTi2MKCXgsUGOqUBVskWAX5r8%2F4kdREJbUd8hLrdhDmiDI0xoTVEXOkVTI1b%2FgN80nZBlFPXVxwuFjdkSrTc5E0pkbgUapFSaJQgnyOcDCD%2FAw42yJxqV6jGQrFW6kMQoy8AWbwI7GlZV85Dh6oQ7x1cUnF99qYbUPziwB8oNJevpwbYIgV3JjAes5Xlnfr1Z%2FrYhbCqUegU0AbhbGYh0RnaYy8mom9I7HoN8wR%2FAja2&X-Amz-Signature=f1fbd1b9d2fc94a85ee47440ee71d0055bbab589ed8ee5b64ccf99754008ba68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVCOGGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDaPGoN4exDJV6sv5ObPcCAhZIrjPfVzACrXiTTZMfaGQIgFmWWnoD8czBFsTJFW%2FCi0z0eqdTEie2UGLRTzAmASe0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDvL0anuf9Vv4UjjtyrcAww2yn6sOBHxeqxrKy8mDofeb%2Bsm6yW%2BBm5y16Uipx2PWRXgMYlqU1Ln8yaLu0Wh1epg4Dtv2AIFVLRehS5XZNk13iwiqViBXkREZsAo3gTumFfVkvniDE374jdZ41hXXUd5bAmmeVTvGEsabrf5EhRrIT4%2FmF3w%2FoXPRUL6CFWnzok4VVdqXjRF2wronwyTF7wapQWlGRgtEqH%2FpRX3v5Qymq57PkN5K9Uc%2BK0syn%2FDSTRfbFljO%2B7%2Bqu6n5X3EO5r1xQBztInYpzJ5fdHZqxHKX7dAdPiugoDTmeyYy7CcqKh%2FQV%2FTUxKiDNm1f69aHA6d0w2MW3nmn9OOQFwzinqJSnzMTFDlUipMFGgSVQykj4HLWz3nxEmOT6FPSvrhtL7u5ou24uWMiV0Ay0%2Fe6jOokQx%2BWfvsPhfd4WjjRWwhfxFZdBtaaX8MyKc0OO9OruCbYjt7enkaO1zTRK6WUX%2Fo5VXYETNm3HmM2JBcPoEazl2LyEfZp6g8ibxuKDipaiR82abzrjIA0%2FOY13ncEPcFrs2V6Cy19UGikSAdKwNxRTBDrSffQC8VaY4na3ZeHJHKsPNcXaV%2FxKz3Y4dl7p4EJ%2F5z0GXzdd3RV8cuhOgxfAwaJqMxZb9lPTi2MKCXgsUGOqUBVskWAX5r8%2F4kdREJbUd8hLrdhDmiDI0xoTVEXOkVTI1b%2FgN80nZBlFPXVxwuFjdkSrTc5E0pkbgUapFSaJQgnyOcDCD%2FAw42yJxqV6jGQrFW6kMQoy8AWbwI7GlZV85Dh6oQ7x1cUnF99qYbUPziwB8oNJevpwbYIgV3JjAes5Xlnfr1Z%2FrYhbCqUegU0AbhbGYh0RnaYy8mom9I7HoN8wR%2FAja2&X-Amz-Signature=ab684d38d4d0f0713d47ed7657060690248fd0c18fafa85b62feb527a0802110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVCOGGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDaPGoN4exDJV6sv5ObPcCAhZIrjPfVzACrXiTTZMfaGQIgFmWWnoD8czBFsTJFW%2FCi0z0eqdTEie2UGLRTzAmASe0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDvL0anuf9Vv4UjjtyrcAww2yn6sOBHxeqxrKy8mDofeb%2Bsm6yW%2BBm5y16Uipx2PWRXgMYlqU1Ln8yaLu0Wh1epg4Dtv2AIFVLRehS5XZNk13iwiqViBXkREZsAo3gTumFfVkvniDE374jdZ41hXXUd5bAmmeVTvGEsabrf5EhRrIT4%2FmF3w%2FoXPRUL6CFWnzok4VVdqXjRF2wronwyTF7wapQWlGRgtEqH%2FpRX3v5Qymq57PkN5K9Uc%2BK0syn%2FDSTRfbFljO%2B7%2Bqu6n5X3EO5r1xQBztInYpzJ5fdHZqxHKX7dAdPiugoDTmeyYy7CcqKh%2FQV%2FTUxKiDNm1f69aHA6d0w2MW3nmn9OOQFwzinqJSnzMTFDlUipMFGgSVQykj4HLWz3nxEmOT6FPSvrhtL7u5ou24uWMiV0Ay0%2Fe6jOokQx%2BWfvsPhfd4WjjRWwhfxFZdBtaaX8MyKc0OO9OruCbYjt7enkaO1zTRK6WUX%2Fo5VXYETNm3HmM2JBcPoEazl2LyEfZp6g8ibxuKDipaiR82abzrjIA0%2FOY13ncEPcFrs2V6Cy19UGikSAdKwNxRTBDrSffQC8VaY4na3ZeHJHKsPNcXaV%2FxKz3Y4dl7p4EJ%2F5z0GXzdd3RV8cuhOgxfAwaJqMxZb9lPTi2MKCXgsUGOqUBVskWAX5r8%2F4kdREJbUd8hLrdhDmiDI0xoTVEXOkVTI1b%2FgN80nZBlFPXVxwuFjdkSrTc5E0pkbgUapFSaJQgnyOcDCD%2FAw42yJxqV6jGQrFW6kMQoy8AWbwI7GlZV85Dh6oQ7x1cUnF99qYbUPziwB8oNJevpwbYIgV3JjAes5Xlnfr1Z%2FrYhbCqUegU0AbhbGYh0RnaYy8mom9I7HoN8wR%2FAja2&X-Amz-Signature=1ad5322d93b3a0cacdc45d1093233492ad5b10ef6de83af782988831c36a4450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MEX6QA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHNiJVpry%2BiTfTY7AnY07MOE4%2FZBC07sI4%2Bg4mINN4PgAiAPd%2B%2FsYtppa8Fe5zuihi9X2%2FfBNI9VTjlzcKZ8I3rgzSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMBxKddVzpXKdf3q1OKtwDEQ%2FQEgHZ2as6lRZKLOhijqBEdoxGdZlqiaVqjWl4wVYnqODyCn20uwBJwjMxX2p7q5v6UW761ZNw3P%2BbJOHpK6J%2FGpfVJWRVezeKylB4hHhGcBoRLLpYRYXjsqoL%2B9ACplqXvFy%2BA2QG0ezAouYYHDaVtmBY%2FcjpkVmvwkd5cm6xQQ9hqYmnlmZNKfn4bBavAAd9jwud9Kuz%2FwdTcojWlAhCZrzrD73G4LF1udekIsjstgFO7WEQmSIGQ64t0ukS3we0t%2BmgHon5XQ6a7fwd4DpgdysEU5o5g12uPTGlHzphFLcyZpzo8KPZxH5J8Q63i2zahbKYOeYtikNEUBghuSx2ztPJz5EOiaaHxWFijRZVfn2cnisWO065z0JcE3gkToJXt6xdtoUADV3nUp6eX%2BJHppNFfrkW02gtuyI7BnB7EGoEHtSYcbqLopyYvttfQ0rav2Bxwf%2BfhpNCEq747uARqEPzird8hT1N8BLyg2vPI%2BL3Fus2mVsfPRoIPHfaffPsgcR2MhDAe1E%2B8ppJwoBH9DaeXy6rLRXV7P3KHBIQRvjBcpK5sn59Nj7PpXLKx0hLx8tbF9gYr%2Fv7LpN5kG3VuvFYYhQ5avuqeAT3CMLwtun7kWvX6eYN%2F%2B8wiZiCxQY6pgFkHjAUhxSRvPs8MnkyjSzhcIxikaWxcIUtpxWMkWPThGLIK%2FZ0TBWyItbJ5sibCCvBU3e%2BTfynKvlq%2F3xfDXAghGqKqCIR49GiP1afj3KcvjWhe%2F%2F5PPMwyeebV2YHRNiqCURcfqZqXLFJRIgljCugJoZgCVkYSRpcbGn%2FZ1rgGYPSCyiMRHasWnrPwzAhiA8vn55mk%2FZxoxIrcEze0Haz8bvTSMXA&X-Amz-Signature=7bf88a1cc2e40a0c8c3c75f1b9043f46ccddd48764b816e1941829688346d1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YQDPRZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDs7EjBhqaEFBr4CCMFoWOV4W%2FIbaGUaFSBCBhflQlOuAiEAyzxN8QBf3z9a9WdHIWvwXMA0DR2bPVESDfAqRTSW3tgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEv2QX6ZgFuCfFY67yrcAxvPmLAyN5hu1TucdLiKwMtCEGn7r8ELC4p8Sy%2FgJj3xDqAWlLVYCrM8CZdIOgbtAOicM0s%2F2U%2FMHThT%2BhDlVQLHBNvDCqO138EGtXNqasiNytzpBIcNvdxFvpRH%2Fti%2Bjl86n59Z2oTstdEASshistcSXaA%2BDwsCz7%2FKcqpKm5ZzQCExX5Y%2FfzGvJ1VcJRJ46zuo%2BdJzQur%2FxqtbfjFFWCc87WhxK0a%2FK8BNHBawGEX74aM5vqyCIWCUk8S6R3ffcAjt3NY%2BGpZnSazzG8llazW20zMKdor3OHqsEk1dl8oXwkeyl0ZAGuA66HkOb4ciVvSDX0RSMeKXyWLJf0yDRh5Pl8Ryh1POOse7StbVfF3xkNsZ1GmYCQf49CjUrcm%2B2eN8bFKTq5KLuk55YqVRzx2z%2F6aGA7jYclAUEIwTPyzFi8KwMwGeayolHBwVZdpZltm7IOXgUI8BM2yX%2FJ0OcE6nbNP4XQCsXIiVPkxz2Z%2FP1YC%2BG11QiMQ2xfYP6TxcxTmJXgvkWOliR%2BEPstMcEd67Lv5JvYy5dhG5tIkRAHe5IyhAgRUSJDGI%2F9nP25FN%2BWhnVjIvehK5jENwpvheTu3D1oLy0OzR96Knn7nCQx27RSjNqtE1zN%2FTiGjBMOebgsUGOqUBraGBdar5hux%2BcUiKo0D0L4ld3NCpXF3igmunlU7vK%2BKAfFcAQ%2FvARCs4Om3Xpck2akwSXXzGn9MoMzfiIhr1W7JRq8TMQifiWwuxqOaoW4I34Ck7oCn0pMevGztNBQlmOUAAp6ss8%2B6HlrGtTvkLSTy6ELq9KKJQ0fwieL%2Fy1btVoq3tHCJVSrtleAPMHLHEXlcqh5ys9UhPh76tn2EtzoYAbtf6&X-Amz-Signature=6f336947087cc3a8cfd836721205ec8e42b5798d64aec1b8fb4f43449e0760bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVCOGGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDaPGoN4exDJV6sv5ObPcCAhZIrjPfVzACrXiTTZMfaGQIgFmWWnoD8czBFsTJFW%2FCi0z0eqdTEie2UGLRTzAmASe0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDvL0anuf9Vv4UjjtyrcAww2yn6sOBHxeqxrKy8mDofeb%2Bsm6yW%2BBm5y16Uipx2PWRXgMYlqU1Ln8yaLu0Wh1epg4Dtv2AIFVLRehS5XZNk13iwiqViBXkREZsAo3gTumFfVkvniDE374jdZ41hXXUd5bAmmeVTvGEsabrf5EhRrIT4%2FmF3w%2FoXPRUL6CFWnzok4VVdqXjRF2wronwyTF7wapQWlGRgtEqH%2FpRX3v5Qymq57PkN5K9Uc%2BK0syn%2FDSTRfbFljO%2B7%2Bqu6n5X3EO5r1xQBztInYpzJ5fdHZqxHKX7dAdPiugoDTmeyYy7CcqKh%2FQV%2FTUxKiDNm1f69aHA6d0w2MW3nmn9OOQFwzinqJSnzMTFDlUipMFGgSVQykj4HLWz3nxEmOT6FPSvrhtL7u5ou24uWMiV0Ay0%2Fe6jOokQx%2BWfvsPhfd4WjjRWwhfxFZdBtaaX8MyKc0OO9OruCbYjt7enkaO1zTRK6WUX%2Fo5VXYETNm3HmM2JBcPoEazl2LyEfZp6g8ibxuKDipaiR82abzrjIA0%2FOY13ncEPcFrs2V6Cy19UGikSAdKwNxRTBDrSffQC8VaY4na3ZeHJHKsPNcXaV%2FxKz3Y4dl7p4EJ%2F5z0GXzdd3RV8cuhOgxfAwaJqMxZb9lPTi2MKCXgsUGOqUBVskWAX5r8%2F4kdREJbUd8hLrdhDmiDI0xoTVEXOkVTI1b%2FgN80nZBlFPXVxwuFjdkSrTc5E0pkbgUapFSaJQgnyOcDCD%2FAw42yJxqV6jGQrFW6kMQoy8AWbwI7GlZV85Dh6oQ7x1cUnF99qYbUPziwB8oNJevpwbYIgV3JjAes5Xlnfr1Z%2FrYhbCqUegU0AbhbGYh0RnaYy8mom9I7HoN8wR%2FAja2&X-Amz-Signature=eb0d0ba61c68f184f6aa76ec74db75d24420057f35fed3a207a8f2da6ff42987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
