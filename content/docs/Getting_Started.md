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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVP64D2Z%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDIm8AxR2aG4WbsdGWYL3x3ZSx8IxRotq5muvOJ3N3NWQIgaja9nK3ZTBr1d1%2FPNOOMSyVPiDkPL94v58Cs7Y453jAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb8pW3W6ou5SjyY7SrcA3fSrcqD9he0SRkbgCbpqXr%2F%2FtY1SCpDImipMCYvhIxokpk%2FO5yHYS20gaTmQ5KEYRF1NJHSqu0xMh0JqWr6G8oVU5nEA97Q48iSXjgFJcbIhiMxFrz%2F9EeFWPm53Kvd0YCKLU8cx%2FODyVCNin79KSvPBWSTS9Gtbvjz4iuzGeIYkii7D6XyvFCxkdKs9vGO%2Bsfvc%2FJ3fmPwCYd2MyQBnku3BeTd%2F7L64vy0F44v%2BMSho6g8diUaafeunFwmagBhI3GKGci0MmpmR2gmt0HdtMABoZVDV%2F%2FJgAs%2FbLpDgaH%2BAejhzgLGIzThndopkFX710NQfyEnnUXxDBtmmUsV5nV0eIn2bALKGM9SAENiqvbdats42AzXoZbbMKVpSOkz4%2BsWw%2B1e5lsIwPHcv9NVSCf1yHW4yQip5ypdUm75tD2Yok4q4pUlB1v5EzmsKnsoqE3N7xVQEbA%2FPrXqsNnq9H5y79S8nINTi3E8dfR4TQWzxEbgVhyezq8Pcgu78xMg6RZgx1rH4vkCadfFlj%2FEFa6Ibrqyj1pWadCBC1s8UriB9P9xM%2BZAJMseF%2BpKsmih6lX%2BDAksAYR9tn7lB1uQ2d60dUzPRonRwo6PUTZ5scaSSYE292oL0jVPESsPML7bl8MGOqUBJaqlnC2ZzwGAD7fBeSjZ9rgJ3pVP5CUyYT7RywTn4X2H3CdOoW9LzNJxKGx%2B8xAXVuCdsVPMP3VSBwSYchC25Ithj7ElzF%2BF37NaHrGt8ivGL96QSjMj%2Bwymby9PCHfbeDaMkPxCRubboHNY0P7PU0%2B%2B4M3vhhH6cQXDxfviIzOZYaYRz0kgPu3UVGU1aF8cv8%2FEyI%2FoN1ZnmAX3OvHdQV8yLVwS&X-Amz-Signature=43d9addcc9fd89604cb4e0c0b9465069b97d28aa29b61db1b06b4c1776fd962e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVP64D2Z%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDIm8AxR2aG4WbsdGWYL3x3ZSx8IxRotq5muvOJ3N3NWQIgaja9nK3ZTBr1d1%2FPNOOMSyVPiDkPL94v58Cs7Y453jAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb8pW3W6ou5SjyY7SrcA3fSrcqD9he0SRkbgCbpqXr%2F%2FtY1SCpDImipMCYvhIxokpk%2FO5yHYS20gaTmQ5KEYRF1NJHSqu0xMh0JqWr6G8oVU5nEA97Q48iSXjgFJcbIhiMxFrz%2F9EeFWPm53Kvd0YCKLU8cx%2FODyVCNin79KSvPBWSTS9Gtbvjz4iuzGeIYkii7D6XyvFCxkdKs9vGO%2Bsfvc%2FJ3fmPwCYd2MyQBnku3BeTd%2F7L64vy0F44v%2BMSho6g8diUaafeunFwmagBhI3GKGci0MmpmR2gmt0HdtMABoZVDV%2F%2FJgAs%2FbLpDgaH%2BAejhzgLGIzThndopkFX710NQfyEnnUXxDBtmmUsV5nV0eIn2bALKGM9SAENiqvbdats42AzXoZbbMKVpSOkz4%2BsWw%2B1e5lsIwPHcv9NVSCf1yHW4yQip5ypdUm75tD2Yok4q4pUlB1v5EzmsKnsoqE3N7xVQEbA%2FPrXqsNnq9H5y79S8nINTi3E8dfR4TQWzxEbgVhyezq8Pcgu78xMg6RZgx1rH4vkCadfFlj%2FEFa6Ibrqyj1pWadCBC1s8UriB9P9xM%2BZAJMseF%2BpKsmih6lX%2BDAksAYR9tn7lB1uQ2d60dUzPRonRwo6PUTZ5scaSSYE292oL0jVPESsPML7bl8MGOqUBJaqlnC2ZzwGAD7fBeSjZ9rgJ3pVP5CUyYT7RywTn4X2H3CdOoW9LzNJxKGx%2B8xAXVuCdsVPMP3VSBwSYchC25Ithj7ElzF%2BF37NaHrGt8ivGL96QSjMj%2Bwymby9PCHfbeDaMkPxCRubboHNY0P7PU0%2B%2B4M3vhhH6cQXDxfviIzOZYaYRz0kgPu3UVGU1aF8cv8%2FEyI%2FoN1ZnmAX3OvHdQV8yLVwS&X-Amz-Signature=41b64c4c4d2108aaefb355feffdffb9535fdc8f6c1c629aa0dfaac626e262421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVP64D2Z%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDIm8AxR2aG4WbsdGWYL3x3ZSx8IxRotq5muvOJ3N3NWQIgaja9nK3ZTBr1d1%2FPNOOMSyVPiDkPL94v58Cs7Y453jAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb8pW3W6ou5SjyY7SrcA3fSrcqD9he0SRkbgCbpqXr%2F%2FtY1SCpDImipMCYvhIxokpk%2FO5yHYS20gaTmQ5KEYRF1NJHSqu0xMh0JqWr6G8oVU5nEA97Q48iSXjgFJcbIhiMxFrz%2F9EeFWPm53Kvd0YCKLU8cx%2FODyVCNin79KSvPBWSTS9Gtbvjz4iuzGeIYkii7D6XyvFCxkdKs9vGO%2Bsfvc%2FJ3fmPwCYd2MyQBnku3BeTd%2F7L64vy0F44v%2BMSho6g8diUaafeunFwmagBhI3GKGci0MmpmR2gmt0HdtMABoZVDV%2F%2FJgAs%2FbLpDgaH%2BAejhzgLGIzThndopkFX710NQfyEnnUXxDBtmmUsV5nV0eIn2bALKGM9SAENiqvbdats42AzXoZbbMKVpSOkz4%2BsWw%2B1e5lsIwPHcv9NVSCf1yHW4yQip5ypdUm75tD2Yok4q4pUlB1v5EzmsKnsoqE3N7xVQEbA%2FPrXqsNnq9H5y79S8nINTi3E8dfR4TQWzxEbgVhyezq8Pcgu78xMg6RZgx1rH4vkCadfFlj%2FEFa6Ibrqyj1pWadCBC1s8UriB9P9xM%2BZAJMseF%2BpKsmih6lX%2BDAksAYR9tn7lB1uQ2d60dUzPRonRwo6PUTZ5scaSSYE292oL0jVPESsPML7bl8MGOqUBJaqlnC2ZzwGAD7fBeSjZ9rgJ3pVP5CUyYT7RywTn4X2H3CdOoW9LzNJxKGx%2B8xAXVuCdsVPMP3VSBwSYchC25Ithj7ElzF%2BF37NaHrGt8ivGL96QSjMj%2Bwymby9PCHfbeDaMkPxCRubboHNY0P7PU0%2B%2B4M3vhhH6cQXDxfviIzOZYaYRz0kgPu3UVGU1aF8cv8%2FEyI%2FoN1ZnmAX3OvHdQV8yLVwS&X-Amz-Signature=73e663164a85ca2b5205a3ec938ce11c1ffe202e1b948fbf14c91e5c562ae012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTGQBUI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCy9BwQwcdZvztugMYCfVeMvsBODR08uwq%2BjiYSYmPH%2FQIgGsfeoMy207B5J5TPGx9ZpmFlO9qdo2AB5lS3Y8Q47jkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrLn%2B8NWMYwLlmrcSrcA9e5%2BT5gZNxgVrmn5Vs1DgnipsZrtWikzuEtdsT54mE5MUifHXjKP6UpjMBmxBVWaGOCURmZJWoNVUQT1PAYLi2U6Yg%2F8aRjArnpGVFgKGe2YXe50tCIyYRwD9Xlz5JRh%2BXwiCcQjTcr17yePuMYH%2BazjtLUKSKCCx3L10BgkKGhpT8qzivM%2Fv27Qq25dlfbGHx2E%2BNKwplhq36irR7AS%2BXrsbCIPB5lf0%2BgFOQ2moA9vJu3jWhkRsnn0BSKRH7Zvz3Fl%2Bm7nHs3jLaEgZRMuPNQJvyy8jE3bM1hgARDheJ45U6bnBX3PNDWNzXQAI1JX8ih%2FKAaZQpJMHg7zZTgmGI9cle%2BenfFIo26b5kXhDrErmBcIBkWR3d4e4Fw5iv1QZvzE5Uxy%2FXibHosqHP3wXOMFVSEy8fja2qjkY4tEZ2vubKv770V4%2FziUn%2B5%2F31bQbU0VPpwiy6nc2llY0gplL5dYp7LoQzxqc1cu2lhNm259djknqyhw2qhYEfUx2m%2B4zRwtkE%2FZQc597dYCS5E6laOaC34yLIXEE5ON2drkuOxi0ryGie70sLosuQ6XMyeK9KGVMVya2tf54ZgGeeb8sPRlzaa7XZSJhv9t3jMkyPiMySpOAwRDQw0eMh1MI3cl8MGOqUB0mQ79q1mltQL7pDv7Yc9OV2oSPfXcl2imQ8D7a3PAD5Ol8piiH8HBI%2BCdzgSzWxG0KgF23SdKndWZra1qQXuDdQmeS37qWmJmPouwAYMMs36AKFVNVPudSKWhrermpFsM%2BViHj18cg%2BGI5mjsp56n3IOdHtvc3V797Gs2O1X5SIZeHXLYtqSdSx6mgCxT3wx4kR6nhqLcYmBTAChhd%2BdKCJ0EgAW&X-Amz-Signature=f2b5d2acf2ad815530c5d6c6d9f44c89c2c36015fb1be13e0708b0feb09603b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBX2HDQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBDsp5RhBjo9NCJhl%2FI2jeomljnUQyjJKJLQqBeqiXmkAiEAugRBFEHpoVbbvsNBH%2BfoXCxDwpKyzqfLbOjwOS18JikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKWdh6Kv8VC0%2BBfircAyrcgLcN2p%2BN2PH9RsNX%2FJcoWcamp5S0HzKH1ynsCSQKNU4ev%2FJXKqQbywEPDb0ObVaCblkrOqXIjlnal0T9ocxTeITbkv2SBLOyow2%2B%2FXqd%2FBA9RDSAXKAiBtBa6fsjGexJlAx7Oq42xYAMZYW3oYV3DUL2k77Bx0ROS%2FmFt0ne8aFi4Wlbs3aDFrbvJLk9BzfsXsw33%2FHX3hoQv7S1KJUI4ggS1bUCYPC2VCuGI2ER7or3kyDEj%2Bt%2B9A8KkjCi7sTa%2FxPMp03yi2c%2BDnxWXF%2Fary7x%2BEcfk6Sz75Tp3EDOCGLHWncG1doUuXxZdAKBfD%2BCtWiMPdGKnQsQgYmph1Kpo6d6kCJiSaDcTqu9Ekw6JxoxOcFMvW0WPykHwZECt0BKPSlHRAT79T46YRbj3BWXhmr6z1nto9eTLGEOIJxTZcNNjS5va0Z8GD%2FlHv08eYnrb5vJ4U0aDoCowyXRiRkTeE4kxSei%2F0dMIr0yuI4U6fB1EN%2BpdagzBpWBDIC8M4leLK1AkMbOPxKuWu%2FCvbcu6DcvKN4pL7ewcn3D3cGh7b8qlMBV10ktMzb2em02HTl3XDpdmS1F523DUaqDilgXEoJm56dGLSy2I78Hb3dFG5ffl0x%2Btf%2FeQsWRMN%2Fbl8MGOqUBCCk7udwkApHvVM291pScrT8DvruO4h82%2BNOYsqiZIxWVbGRx07NlCXi5wRfK84F93EmRyZNk4MfAapLCA2XhLR9Ma2VkleU0tP2ly9gs1zdpxez09%2BQ8EUiLIKzQj3YGKWO5oAxntS254jzbNfSRk%2Fyi%2FFNqK%2BB7qwA6b7eOwAXCXg1Ti8i3hmw0fKz554VnNOJFhGdEYn2FGoYqAPSekMkq3ozj&X-Amz-Signature=d0e24054b037418577b891d566724990a4711cb4db5331cfadbcf21f8d9916ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVP64D2Z%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDIm8AxR2aG4WbsdGWYL3x3ZSx8IxRotq5muvOJ3N3NWQIgaja9nK3ZTBr1d1%2FPNOOMSyVPiDkPL94v58Cs7Y453jAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb8pW3W6ou5SjyY7SrcA3fSrcqD9he0SRkbgCbpqXr%2F%2FtY1SCpDImipMCYvhIxokpk%2FO5yHYS20gaTmQ5KEYRF1NJHSqu0xMh0JqWr6G8oVU5nEA97Q48iSXjgFJcbIhiMxFrz%2F9EeFWPm53Kvd0YCKLU8cx%2FODyVCNin79KSvPBWSTS9Gtbvjz4iuzGeIYkii7D6XyvFCxkdKs9vGO%2Bsfvc%2FJ3fmPwCYd2MyQBnku3BeTd%2F7L64vy0F44v%2BMSho6g8diUaafeunFwmagBhI3GKGci0MmpmR2gmt0HdtMABoZVDV%2F%2FJgAs%2FbLpDgaH%2BAejhzgLGIzThndopkFX710NQfyEnnUXxDBtmmUsV5nV0eIn2bALKGM9SAENiqvbdats42AzXoZbbMKVpSOkz4%2BsWw%2B1e5lsIwPHcv9NVSCf1yHW4yQip5ypdUm75tD2Yok4q4pUlB1v5EzmsKnsoqE3N7xVQEbA%2FPrXqsNnq9H5y79S8nINTi3E8dfR4TQWzxEbgVhyezq8Pcgu78xMg6RZgx1rH4vkCadfFlj%2FEFa6Ibrqyj1pWadCBC1s8UriB9P9xM%2BZAJMseF%2BpKsmih6lX%2BDAksAYR9tn7lB1uQ2d60dUzPRonRwo6PUTZ5scaSSYE292oL0jVPESsPML7bl8MGOqUBJaqlnC2ZzwGAD7fBeSjZ9rgJ3pVP5CUyYT7RywTn4X2H3CdOoW9LzNJxKGx%2B8xAXVuCdsVPMP3VSBwSYchC25Ithj7ElzF%2BF37NaHrGt8ivGL96QSjMj%2Bwymby9PCHfbeDaMkPxCRubboHNY0P7PU0%2B%2B4M3vhhH6cQXDxfviIzOZYaYRz0kgPu3UVGU1aF8cv8%2FEyI%2FoN1ZnmAX3OvHdQV8yLVwS&X-Amz-Signature=2e7199c67f2fa8b62e5c1c1521aacaaa74323d2826217521137c0489e93bcd71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
