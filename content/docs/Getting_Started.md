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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R2N2CF2%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtzmRA1voOnAtVSzKX9GH3oGyqylzzr5vxokrHFX%2FFEAiEAyVMKMWXMmleVT29dS%2FZUXdxS%2BbfcUa4DCTmJ0wvbhcQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmBxkyQKOFAcKM9FSrcA%2BPqd7En%2FJ0ZZ4DCkcD3iV%2Bm2k7UjuIZGm%2BY%2FL5%2F3eYi54cvs3EP%2B1vaR6dng1VBHxe9qBLumPxF7M5pnxy%2FkLnHEjDziYPJLi%2BsGC9pf444WTV2K%2F3fOtFox9X53EzRsHCrSmdOxp7rSwI%2Fyh1GazRBMDhzs2QAq3i9oN2vh4hznJzOO%2Fg5Upbl%2BaYweD4KHErvO%2F%2BwH2jnT1n%2FU2BWbgrl4sMNh2nXreGrVBKuDrhMlQ4VF7dXeMqc64iQi%2BeA7CW9N2EoJzfOGdLIJp7lCuYBR07cWVxqPYVkRBICQxQnEqoi7c%2BGs6JawIrL2hCkpDw3tZgL93V6Mm2bpJ7LDF6uQ4zGoI%2FZl2wl84g0x3SS6Z9HppONsLRytewzYsNPh3IECv52Y8%2FsPnGBoRzpsPE6J25a5BAd0oNSLBx%2Bf7ErQu3VutuG7x33p0DXt2GFFFlSAzUFbLXcZPBkOnQ3SXtniHBOzdEW4JzkW4eUIiM8sU67e2T3nG%2Bvon9CQrhE2xPq3C4d4MntAzVHJNO4cAsnN72uCu%2BT65SUOspVkrNtlq0sy0xedN0HYFEqX93Aepi%2F4xts5cT8engnflCyFcuikKVv1iL8C6sn6IGQXnPgKV998qV1SCaG5zuvMNCotL0GOqUBL3xZrPMopebcDEKpi6jpMmaGLkNSy%2BGA8JRwHMi5TnR7CYCCC%2BktA9dBHuco5A1chTwR%2FQH65QeIJNAJKIEOlCqfTl%2B4tCUvz6oabg7J9jvuRei7yhRnol1pVCX%2FEiCg3l8L7yM4MdUik1wd7%2FPb4ZcS4AJGdA6f%2FPuaa3u7S8jcorYyoEXS5BtBY%2BxfdgsWp%2FKG8JXq9OsdWqcQV%2FZzkPsjkReJ&X-Amz-Signature=72627a788c489827f6800f30d9a642ff0451d2f189e338c984da7c6e3c4fd300&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R2N2CF2%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtzmRA1voOnAtVSzKX9GH3oGyqylzzr5vxokrHFX%2FFEAiEAyVMKMWXMmleVT29dS%2FZUXdxS%2BbfcUa4DCTmJ0wvbhcQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmBxkyQKOFAcKM9FSrcA%2BPqd7En%2FJ0ZZ4DCkcD3iV%2Bm2k7UjuIZGm%2BY%2FL5%2F3eYi54cvs3EP%2B1vaR6dng1VBHxe9qBLumPxF7M5pnxy%2FkLnHEjDziYPJLi%2BsGC9pf444WTV2K%2F3fOtFox9X53EzRsHCrSmdOxp7rSwI%2Fyh1GazRBMDhzs2QAq3i9oN2vh4hznJzOO%2Fg5Upbl%2BaYweD4KHErvO%2F%2BwH2jnT1n%2FU2BWbgrl4sMNh2nXreGrVBKuDrhMlQ4VF7dXeMqc64iQi%2BeA7CW9N2EoJzfOGdLIJp7lCuYBR07cWVxqPYVkRBICQxQnEqoi7c%2BGs6JawIrL2hCkpDw3tZgL93V6Mm2bpJ7LDF6uQ4zGoI%2FZl2wl84g0x3SS6Z9HppONsLRytewzYsNPh3IECv52Y8%2FsPnGBoRzpsPE6J25a5BAd0oNSLBx%2Bf7ErQu3VutuG7x33p0DXt2GFFFlSAzUFbLXcZPBkOnQ3SXtniHBOzdEW4JzkW4eUIiM8sU67e2T3nG%2Bvon9CQrhE2xPq3C4d4MntAzVHJNO4cAsnN72uCu%2BT65SUOspVkrNtlq0sy0xedN0HYFEqX93Aepi%2F4xts5cT8engnflCyFcuikKVv1iL8C6sn6IGQXnPgKV998qV1SCaG5zuvMNCotL0GOqUBL3xZrPMopebcDEKpi6jpMmaGLkNSy%2BGA8JRwHMi5TnR7CYCCC%2BktA9dBHuco5A1chTwR%2FQH65QeIJNAJKIEOlCqfTl%2B4tCUvz6oabg7J9jvuRei7yhRnol1pVCX%2FEiCg3l8L7yM4MdUik1wd7%2FPb4ZcS4AJGdA6f%2FPuaa3u7S8jcorYyoEXS5BtBY%2BxfdgsWp%2FKG8JXq9OsdWqcQV%2FZzkPsjkReJ&X-Amz-Signature=49ae6f418b1b63eb262898038bdebac822f278e46dccce1427e2eceedcbec0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7DPRFJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8T%2BXFGFxezDDuwn%2FCzUnTVs1Sg5NmjFv3dbeK35ALDAiEAwDT9h0MJLKEXocumkB1HkJPX5KNieC19R71jeNnYQ5cqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoEe1LiBSAXnSfTTircA2%2BfzUBHB9Bo1Bs3QM6QPLFJgmHQhw7yZeGbFt%2FRxUI60cVVArOpt96dT8gGTZTVYozg8OoqkGfuDlVNmorREjy33Qkks%2BQpIMu8QKn5AgvHkORQG6nBqbfZaqzkbn3QQH%2BCHoOHHbHFXar3xKlFDa8yXz6muHQrzHK6e%2ByRpwxLQ682%2F3d46IRh5I3Zp%2FW51wZll2U4x1iqBW%2BtM4VOsFm8A%2B8B4oHN3Ux00UYQr5k%2BRGg%2FPbSeekWz25QeKrtEx6XiJG8EjejPRKhzuLBqwzQqj5XPmTyNAIDBqqXIfPh9f5%2B9pwS2PMev6p2icc7cdkcwgHOkKk1habCsuBkkICHtdalkMcvNgM%2Fto4Gx8%2FkEALiqiA6x%2FZy1meA%2BW%2FHdlQYeNZNog%2FsmFMjfiRNz%2FuadXH%2FiyYzoYPOannHhWdQcZ%2B1BHdPuQQDjK%2BUib9EEG2MIy3J6Vgadrod2UHgvB4mVWxKI63HGFLA64eW%2BpPGUvpSM8sR%2B5XFeov7f4c0xPYL7zI%2F%2FaJ%2FSGpRdstNF%2BP39mpKeDRn469BVkaNAmMS9vk0g6FMwrqPCzLpUjN%2BFrAHpL%2BikM%2BzDIiClGRKK8WocvOTsytKlRMsGvri9Mv%2Bm959LyWqwh8aNx%2F7FMMaotL0GOqUB5GNDceF4tjgJd9%2BFvmH2zZi9qde4A4JgETQcKYLCJjwds3f2ctYhKp89i7Ymr6F0tvV1pJyw2yFOlJnCOFe1HJlbZnMkrMZjbPm%2Bvl5vNE1OaTSeU6Z631ii3y7%2FNlEbo8uxf6yBmCldUAwExDy9uqT5tcuBlyCBTCIXuC%2FuulwHL8QXdUSq02bfyfAFFQBS4%2FgbkYWQKdo2Qs1bufUp%2F4YeWkeh&X-Amz-Signature=1e9acfb599fd890b14d6c9b38177834596a2f6798404ca7a0421c77528fbb9b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P36YUQD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FjxRGRSPxrae63SjuVrEvHl3kb4%2BD2juFeQYv2tmlgIgLX6Yh1JZGECsdIcrUeTbSouyM4n49B7CGJtfYPMGpAoqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Wq2x8nGm7bOkz6CrcA%2Fi0fnj%2BGX%2B%2BzLRREqNaDkeyj9hLDWYRVF9zGVzFdaM4zt%2BRS9Sj2tZsZmFtlQFh2gItI1cfeX7nipEHAjseDQm%2FUA3z1eiU2i93iALDXJeA9Ygit8a7vOEVTp%2BaTgZX4P2roDt61wr8zj4L6ApEsv7k5svm%2FXiPcjgXLu6MQv4zwfZ4%2BnQpVWpiqmkIu7abNIm7PMOXwJ4gBwYK4tzpBX036zAkXRYW7BZf5aST4X2f%2FsW%2FUGGaPmB%2FtVPYlba2wHcVVFt%2Bw8U8qklf%2Bex3v3zCsmRQnvHa9P5GBGr1wFNF4znw6On3ZLUDaoPmGMUansf9IdxZ3Z62kx6%2Fo7DGNTmxs5Zw4QK2DmUUATbcPssLiRiPA6CfGE4MKoZ%2BWdce%2BG8klxj0OXn068Yb9adMVugFoZSK%2BGUSFUNGFGwFjQZAp278hjR1XkojtBaJXTmhgQDoZHrHX0ChI3gDhbVIlab1O5TPe3UMICQkb%2BP1NTXwAfTZDabMUWP5j40LRMM01Um4EB%2BCjkskDi6lG5yHwQMLJYDhXQ9POrHTU5%2FEKdQ65QXbnWcBo2SFLE8DbFCaGpYzaXdtDnbtEj4UkFKnxHlft2SjpDVvwJa2AIqaWqzC6l1lonWqAr2H2mZ1MLeptL0GOqUBWokOppCJmtP9pv9KLSikj2IbL2xKT%2BUEjZh7WCaOPjR2nWxwWAuXPcdssv%2BPrTN6hYoYNOP1xVNhOSI4%2BdmA4vFzv%2BYJZg3VSXzC8%2FVvjd8G4xlQh2%2F%2B3paY61IQJkR%2FJVzAhQSJurJRJ%2Ftd3VH5T%2BrCbdn4m3cPafoT14EUV7ODLByrt9BSZgvJneQxmX45kllDD5ESQxmlvxjVR3L2SF7tmAHR&X-Amz-Signature=aea7612465b3ef89e315054152845e3cfb005ac4aa5b3989890b5e8323c2ec7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R2N2CF2%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtzmRA1voOnAtVSzKX9GH3oGyqylzzr5vxokrHFX%2FFEAiEAyVMKMWXMmleVT29dS%2FZUXdxS%2BbfcUa4DCTmJ0wvbhcQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmBxkyQKOFAcKM9FSrcA%2BPqd7En%2FJ0ZZ4DCkcD3iV%2Bm2k7UjuIZGm%2BY%2FL5%2F3eYi54cvs3EP%2B1vaR6dng1VBHxe9qBLumPxF7M5pnxy%2FkLnHEjDziYPJLi%2BsGC9pf444WTV2K%2F3fOtFox9X53EzRsHCrSmdOxp7rSwI%2Fyh1GazRBMDhzs2QAq3i9oN2vh4hznJzOO%2Fg5Upbl%2BaYweD4KHErvO%2F%2BwH2jnT1n%2FU2BWbgrl4sMNh2nXreGrVBKuDrhMlQ4VF7dXeMqc64iQi%2BeA7CW9N2EoJzfOGdLIJp7lCuYBR07cWVxqPYVkRBICQxQnEqoi7c%2BGs6JawIrL2hCkpDw3tZgL93V6Mm2bpJ7LDF6uQ4zGoI%2FZl2wl84g0x3SS6Z9HppONsLRytewzYsNPh3IECv52Y8%2FsPnGBoRzpsPE6J25a5BAd0oNSLBx%2Bf7ErQu3VutuG7x33p0DXt2GFFFlSAzUFbLXcZPBkOnQ3SXtniHBOzdEW4JzkW4eUIiM8sU67e2T3nG%2Bvon9CQrhE2xPq3C4d4MntAzVHJNO4cAsnN72uCu%2BT65SUOspVkrNtlq0sy0xedN0HYFEqX93Aepi%2F4xts5cT8engnflCyFcuikKVv1iL8C6sn6IGQXnPgKV998qV1SCaG5zuvMNCotL0GOqUBL3xZrPMopebcDEKpi6jpMmaGLkNSy%2BGA8JRwHMi5TnR7CYCCC%2BktA9dBHuco5A1chTwR%2FQH65QeIJNAJKIEOlCqfTl%2B4tCUvz6oabg7J9jvuRei7yhRnol1pVCX%2FEiCg3l8L7yM4MdUik1wd7%2FPb4ZcS4AJGdA6f%2FPuaa3u7S8jcorYyoEXS5BtBY%2BxfdgsWp%2FKG8JXq9OsdWqcQV%2FZzkPsjkReJ&X-Amz-Signature=9a3a94e939d63834b906a0078729448c651b549a010cfd197b40b8a8bc9273d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
