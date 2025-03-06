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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5LMROA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD81GSFAJDWFTsv8SbxEO5yI7RpFwM8jPb0U1LYz%2BDHXAIgYCj44fN8aqxohT%2BKA%2BMIjrB6VdvPUuEYlXmcHr8G36Uq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO3LSD1m%2F12XNtW%2BNSrcA6S9sX%2BFJ5nrJt52T8htC%2F1IsZzWzTYl9zVAUO9mplZFKRonKnL2KPxvp%2Fca0eafWF1tS4lh34iWGlWcW1cXBdhVtFY07frQD6Ly5FZs%2BPqJEG8KZq%2F0EhSx14LAcsETG7qU49ZZV0iRwcKm8I237OxYMlhH01PGFursE8yqzLq3TunQLxYw1Faj4ZEJVa8Hnd2f27kBv%2BfBl9rMa7g9mpTQIH3IepX3abUFLECH6EsEKzMe0mlk%2FtYTrqQnICD5OK%2BaVKfAhthXemaVwIavBClvDqaRIynaCHFGwBh7jL%2F1X6nauyn4UybH1YRey1a6yBXlHoGnsjgwX3L%2Ftp2yqQk6030tIjH%2FTY5tY1w6m1qjEChLZwoPGKP%2Fmum3CEptITJYeMcIZQQm4c09mMmuKrszTUZtCFO%2FybcOUuqSwyERdH%2FpfdK%2B9XAtQAYPBkcQ8DGDdaSbpS141HU%2BZUkQkAENCDucMgpmhIO43Zj%2F5FhlvOJ%2FqjYLP4PizogXHJ6wsBwLujUGapVzz%2BGz2dUDitw8jgHQZrQgf889R7GXb0LP7Y9SybPKqG0GBJ3sJqy5yVE0wAMJlxd2NjtVypHWloq04ogWUojxDl6UkpI7q79iI7nVVmofJcoIMO57ML7no74GOqUBUIrJMqVTUoZ04wk2WWdKDXCl3u9MQvTxzLIPDOlCXhMOpI%2FKVy%2FoNm5klgTPiZxXvWfI3rFie8AOyJpkXeuOC7ZlFBUdaPFUrzpuLC86OqJGIPvkbY505GhQVI3oZS3kQAAdtdlQu7NL2jCrbuxHydvT8A%2BbYOu%2B7dOnDNf0paxsiqS7rNN7fAfsFvNvvLonIGW9YxwCYjJ6X%2FHhe64HddpCI2nx&X-Amz-Signature=c0d3d641e1246a2ff9cad89453899dc6f097149fbbc820134976b3adb1fd2eac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5LMROA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD81GSFAJDWFTsv8SbxEO5yI7RpFwM8jPb0U1LYz%2BDHXAIgYCj44fN8aqxohT%2BKA%2BMIjrB6VdvPUuEYlXmcHr8G36Uq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO3LSD1m%2F12XNtW%2BNSrcA6S9sX%2BFJ5nrJt52T8htC%2F1IsZzWzTYl9zVAUO9mplZFKRonKnL2KPxvp%2Fca0eafWF1tS4lh34iWGlWcW1cXBdhVtFY07frQD6Ly5FZs%2BPqJEG8KZq%2F0EhSx14LAcsETG7qU49ZZV0iRwcKm8I237OxYMlhH01PGFursE8yqzLq3TunQLxYw1Faj4ZEJVa8Hnd2f27kBv%2BfBl9rMa7g9mpTQIH3IepX3abUFLECH6EsEKzMe0mlk%2FtYTrqQnICD5OK%2BaVKfAhthXemaVwIavBClvDqaRIynaCHFGwBh7jL%2F1X6nauyn4UybH1YRey1a6yBXlHoGnsjgwX3L%2Ftp2yqQk6030tIjH%2FTY5tY1w6m1qjEChLZwoPGKP%2Fmum3CEptITJYeMcIZQQm4c09mMmuKrszTUZtCFO%2FybcOUuqSwyERdH%2FpfdK%2B9XAtQAYPBkcQ8DGDdaSbpS141HU%2BZUkQkAENCDucMgpmhIO43Zj%2F5FhlvOJ%2FqjYLP4PizogXHJ6wsBwLujUGapVzz%2BGz2dUDitw8jgHQZrQgf889R7GXb0LP7Y9SybPKqG0GBJ3sJqy5yVE0wAMJlxd2NjtVypHWloq04ogWUojxDl6UkpI7q79iI7nVVmofJcoIMO57ML7no74GOqUBUIrJMqVTUoZ04wk2WWdKDXCl3u9MQvTxzLIPDOlCXhMOpI%2FKVy%2FoNm5klgTPiZxXvWfI3rFie8AOyJpkXeuOC7ZlFBUdaPFUrzpuLC86OqJGIPvkbY505GhQVI3oZS3kQAAdtdlQu7NL2jCrbuxHydvT8A%2BbYOu%2B7dOnDNf0paxsiqS7rNN7fAfsFvNvvLonIGW9YxwCYjJ6X%2FHhe64HddpCI2nx&X-Amz-Signature=cbc9e049b1a3bfbfe0dc4910440eb262a4a38658448ea0065df4047316c464ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T46AYIV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjO3XHXBSBHDnJzpVyPeq06t4qFlDmcMQXr%2B6zhSE7kQIgfcPlG8kmAKaiVtVZOZ%2Bc4Jh5UEyRviTzpLHG3Xxx%2F%2FUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLIrjPTWASRnYop79SrcAwmcR6G%2FhZ8gzyTFXPLmn7wWbfjbMvsb2wjGye1DEsn8IFd1K%2BCbVEUrLigQqfEM1CHXJjX%2FkRw%2Bk5%2BhtKwIyo%2BweD9uUMYceqRZ7n5QiU3Dp56fU%2F7%2BqgGiFVVZfa%2B973e0BSoN96gQrla5b4XZEjsFQWUYukbIlEE9Sxc7aW63HL6w740mswdRw9vAdvtguhSivO0NQ8DNtT0Re%2FhMNsGrcZk%2Bgw9Bxdg%2BHdU3mYgmbPRM29sAK4C8X%2BD0HQIQuWfDiLb%2Bq70UnPYjFcbkKf5dG4%2Fm1bJZU7JXf3%2BvUVFzmG4Aw9w9AmSRyYCvH7CYYC2Wyo5magPivV5ntk4l%2FrpG97%2BN6sj2YBnNz5Me8J2q2LBw%2BTEGfaOyxMWCleu8rEQ5nEFXIkIw8lYlDxR4Ohmi1z5nDcpOSanXoe5QPx1zed5IUGaBSBJLvTBN45%2FP3LI%2FV7v2Y%2BCL2EQvH1%2FrTW65Hd%2FPio8VaqjQ4S7fB2qNmu41O5gnuK%2F%2ByIA5JsbzXVG5Bacz5Wu%2F3cY4fh4g7TiY4snfNyWx3PrJ2N4b8jOjNjpejhgpqWA23josOyEkIY5VhmPynz9FBU7bIIygNU8TSaPP%2F5UKGqaynFgm%2FqQncbzb6Tz%2B0YK2kov1MLbno74GOqUBE5k3JNfi9kXhjlJ97s4Vkw9fiRNtmNdQc96AMcEpLxzaOucPmrISEKyiesbgx%2Bx%2BX%2FMPW69RsxMjklAPdVODM2ydZkvQM76NgbkQTDCkniVX8eYwgTiKT8Qd2a7uOGkVRtyyhNnSTGK2Ijpg%2BCxb1YY0iENI7N9ZWuwQj%2B93ZJjWShvWf0eT6VFysQyrIr8JpdmMq6T5Yl54kT7iwkV39cKb5OVA&X-Amz-Signature=4639ddf6bd089ef3785e79379f5de4e8f26b80146222b58c7afc09b2d36088b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQT42RC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjQkw3uJeKVcl9ibITiMD4YXexVsdPqQgJtw3he41MPAiEA1yxJReYLD46dymkxYZMwowyh2XLFAfuR6wlOEmJgxuoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDI%2F8QApwgC%2Ba4XUPHircAxVQOzFgGQr4nwXcYTMK%2BnrXB8BaHiADg3iYEiFD9usFXS%2FSwxqHpAmLiU%2FyRdcC0XyJLVHvtO3cexSbW7THP6omE9ItEVgZ%2FQjHF7IqSUGdgbeBjREWk3kCLPz9349ORXQagWtvpDGrrUDkKrtzl0i0loSBNOKp3IcPMdeniNLh%2FXqNp%2BNGUYo8AdJqKw25cdRTffIn4%2Fi5b18o1HvWfJsCaxf2Z3u6cbCX31O2sow7w9lgFqYDs4s6o6NjBbRdTCZQkb859cZ4qdYD7ijmhxXzoLngQn98aqIy6t2vu0W3VLG%2F3lCc%2BxAoemYrtJkVNgQmkyc%2BPnBITx%2FRLHcCCjhae3G3uhju6OSNGnE8X6NZcmE60irbySyCnTDm3QFER043N%2BziyRLjVQpZoslI0xsxWTDV0pQUR8sOQ2g1vCOTubw3JH7s4%2FktNdeO2peTlJ36c6hJgxJRxZAlD5GbTyq66y%2FjtRYYjF5vhvcrfAdxu0NCCiOlzwJKmVyVsfIhs5ksR2GnMXRyM8QSDMtLOZLqunwIWDfQFPL7G3wYkM2F3cW33rTaSmURcpMiDSc1uG%2Fb3h2JTIFjWAfOVi22sKAOvk4SwOcaZYvhXJKIwk2n0hyEJRLFg7NtLsH5MKjno74GOqUBxgvHZGB5Y10UGsikwd0uOxLVEIWgI%2BnLJbp4gvasnms%2FQSk0LYWnt9XDSyck51ETj8bgUHEUNlriDy7pG18ku8TBRt8WM2t94TOBhICfZTq5YT%2FGG2hQ360FGrWOzlAnE7N2u5QqNPTNBwlpeNpw9O6A2pCfPyWO0KFSAsIU1S4TDAMIxDsmahtMPJ9ZvzuppQG5%2FOU7wdWIq0Ph%2BLc6xC%2Fo9mmo&X-Amz-Signature=9dcd2ec518a00b6bfec82007bfba6c9faf7ae5d267f1e7dde5bcc9c377e8d281&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5LMROA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD81GSFAJDWFTsv8SbxEO5yI7RpFwM8jPb0U1LYz%2BDHXAIgYCj44fN8aqxohT%2BKA%2BMIjrB6VdvPUuEYlXmcHr8G36Uq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO3LSD1m%2F12XNtW%2BNSrcA6S9sX%2BFJ5nrJt52T8htC%2F1IsZzWzTYl9zVAUO9mplZFKRonKnL2KPxvp%2Fca0eafWF1tS4lh34iWGlWcW1cXBdhVtFY07frQD6Ly5FZs%2BPqJEG8KZq%2F0EhSx14LAcsETG7qU49ZZV0iRwcKm8I237OxYMlhH01PGFursE8yqzLq3TunQLxYw1Faj4ZEJVa8Hnd2f27kBv%2BfBl9rMa7g9mpTQIH3IepX3abUFLECH6EsEKzMe0mlk%2FtYTrqQnICD5OK%2BaVKfAhthXemaVwIavBClvDqaRIynaCHFGwBh7jL%2F1X6nauyn4UybH1YRey1a6yBXlHoGnsjgwX3L%2Ftp2yqQk6030tIjH%2FTY5tY1w6m1qjEChLZwoPGKP%2Fmum3CEptITJYeMcIZQQm4c09mMmuKrszTUZtCFO%2FybcOUuqSwyERdH%2FpfdK%2B9XAtQAYPBkcQ8DGDdaSbpS141HU%2BZUkQkAENCDucMgpmhIO43Zj%2F5FhlvOJ%2FqjYLP4PizogXHJ6wsBwLujUGapVzz%2BGz2dUDitw8jgHQZrQgf889R7GXb0LP7Y9SybPKqG0GBJ3sJqy5yVE0wAMJlxd2NjtVypHWloq04ogWUojxDl6UkpI7q79iI7nVVmofJcoIMO57ML7no74GOqUBUIrJMqVTUoZ04wk2WWdKDXCl3u9MQvTxzLIPDOlCXhMOpI%2FKVy%2FoNm5klgTPiZxXvWfI3rFie8AOyJpkXeuOC7ZlFBUdaPFUrzpuLC86OqJGIPvkbY505GhQVI3oZS3kQAAdtdlQu7NL2jCrbuxHydvT8A%2BbYOu%2B7dOnDNf0paxsiqS7rNN7fAfsFvNvvLonIGW9YxwCYjJ6X%2FHhe64HddpCI2nx&X-Amz-Signature=08b17e03544580cbb7b4b82993106250b172d713d3e03b35f96e6a03b024beef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
