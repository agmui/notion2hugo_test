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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GBN4NAW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEiAtL4jrY2kw3rXILuNhWVPoHdjtS73%2FtpZt6uJinrAIgAuxXxjNhxDAe0rdeFTYp212fTSPPAyCrjftHrMZKuGgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZEYgMKmTLDzOn0zSrcA90D4%2BSjEjTap4FDGh5e5roNSpiX99IxI%2FWgbeZu2fZh3wuwEevVzI4HtKcmGfbgRlTHStoQOD4Ya82XsC0kVJNXkBGaPI2AtHeFlUwzbM1dzLMgpPpReqIHLUnw1Wr7z0cSyQbSJa5BQXiisc9NVZI%2BvrJbWORUMf7DbwoR2jBbYOieT1%2BhAGtZypG0LHMgTbTi6TpeXp%2FOwKLC7xkkvu2TQXLecnjH8%2ByXHbsCa6yLWWKhf0wVV5TuUwmuva%2FzixoWYl2O%2BT8mR%2FO8ALHblRNZF06mNbvCjZwnHNt%2BSnFMfC3vv7q1R7tAFTzQVz2JPRWp03TY3EqcPb61GxAC5eJy%2BblNMIGMmbqXg1r5wWpaacdqDlkpkTV2NIV0a608iv5l78D948rPJchYKNSBOVK8V0Xn0IFP1pU%2FyC4wVEUY9bXpxFjYiPvS6VGL8wfc5gRzY60MXQUYZCKW0sPQl94yEwDrnaggh6hCpcBuQewpkmH%2FE40qC9vNkkwfkeS3gAHN8yZr9KlxW1JWFBlfOcmyMAfbNxehWjkvDuTn6ghD9GZIFjhUbsDJRu67hPiZKLbvSHX2lCWUmpm1hzwAObnZdYwK4AbYRWHOVA3sG5CPJGp%2BBestTr2BWvn0MOPE%2BLwGOqUBPsbMGZypHZPx4%2FsKXo1CNzTksaJ0QCMC%2F4J%2BvMIeU8orUSVpHcum9%2FAuCXhQ6%2BLRtGtBgDOfmYyTbN672PLku2fFjHrBpJpOyfHFrVxVyO6Dr3InF2ktr8jffmiijMvNN509eOOefPdfge31iyslefkqDKUSnwY4zXslSfKPrNeiFSKK7gVJUnfaYNxNDgoA9uHY3OnpeEusLPRknMsCcfS014gp&X-Amz-Signature=f62c26fdbb275597a3596789cfcfed85e14e6739c3dae4f903c4bca09693e5c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GBN4NAW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEiAtL4jrY2kw3rXILuNhWVPoHdjtS73%2FtpZt6uJinrAIgAuxXxjNhxDAe0rdeFTYp212fTSPPAyCrjftHrMZKuGgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZEYgMKmTLDzOn0zSrcA90D4%2BSjEjTap4FDGh5e5roNSpiX99IxI%2FWgbeZu2fZh3wuwEevVzI4HtKcmGfbgRlTHStoQOD4Ya82XsC0kVJNXkBGaPI2AtHeFlUwzbM1dzLMgpPpReqIHLUnw1Wr7z0cSyQbSJa5BQXiisc9NVZI%2BvrJbWORUMf7DbwoR2jBbYOieT1%2BhAGtZypG0LHMgTbTi6TpeXp%2FOwKLC7xkkvu2TQXLecnjH8%2ByXHbsCa6yLWWKhf0wVV5TuUwmuva%2FzixoWYl2O%2BT8mR%2FO8ALHblRNZF06mNbvCjZwnHNt%2BSnFMfC3vv7q1R7tAFTzQVz2JPRWp03TY3EqcPb61GxAC5eJy%2BblNMIGMmbqXg1r5wWpaacdqDlkpkTV2NIV0a608iv5l78D948rPJchYKNSBOVK8V0Xn0IFP1pU%2FyC4wVEUY9bXpxFjYiPvS6VGL8wfc5gRzY60MXQUYZCKW0sPQl94yEwDrnaggh6hCpcBuQewpkmH%2FE40qC9vNkkwfkeS3gAHN8yZr9KlxW1JWFBlfOcmyMAfbNxehWjkvDuTn6ghD9GZIFjhUbsDJRu67hPiZKLbvSHX2lCWUmpm1hzwAObnZdYwK4AbYRWHOVA3sG5CPJGp%2BBestTr2BWvn0MOPE%2BLwGOqUBPsbMGZypHZPx4%2FsKXo1CNzTksaJ0QCMC%2F4J%2BvMIeU8orUSVpHcum9%2FAuCXhQ6%2BLRtGtBgDOfmYyTbN672PLku2fFjHrBpJpOyfHFrVxVyO6Dr3InF2ktr8jffmiijMvNN509eOOefPdfge31iyslefkqDKUSnwY4zXslSfKPrNeiFSKK7gVJUnfaYNxNDgoA9uHY3OnpeEusLPRknMsCcfS014gp&X-Amz-Signature=45a519850229e134f0fb66f90171fdee6c194feb71fb88b33c4755925ea54a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJR2O4LN%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLSWEAnKnRYuMiwEOX9rtEgy%2B0FtCLR7yCvEjeN4vttAiBQypE%2FFY7cFm8JEFtnof96e2xJzJ2aJixlmTCz9HKAxCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCufSERQKTUQQvGqgKtwD1tcbjqXlCXMIBCcZXAl0olxBJq5%2BWJEgdJaHStDKRrz59bDIn9kc9Ss31YCio14DuU%2BZK%2BluM5mbeS6hgznBCUMzNY7kS%2FRiO8MO%2B9IbTVmxnV2mRypnf3vc%2FVaTOA%2BZnwS%2B6rc%2FcfrZqY6qHrSGTTtNN4LMOss%2BnPPFVFUCrBNeeg4iIzESqV%2BqZvo%2BQAiCZ65LHrUnzPHAlFwhHyF7Rt10s5ARW2eTjT4jv7fgplScNHPer8mJ2y57X59Lf02W2Z9pz4B2mQ20XLpQ%2BS4TjzqYMvwffOrQjFZ6XiQFhBChg030g%2BzAzODie%2Bgb25IxB%2B4%2BRltVygZxeLYzrUtToSGqcwMoc686iaG0Um3Na6NXYurFhK9ujU9pQT9isK%2BRKc0FXxjKLNf%2BPeA0UcJblH0kOAm9HdN1cX6ExSqqmSx4SxySKNzZha48qKyyY5XSXEiIVMiuV0nz8pAgLp%2B7spAgwTsx84mseKN%2B44Ks0sccIX62tGuZRxiFh4otkbxLzx66Io4wi7mfIdpMonuqcB6CivbEKmx64Z3Ca29oADsOUIqiBvEg2pb827PDr76DrJwxW86uGIL1yxk5kGfOJpsPM5uWeiFUX5AsJOXF9K%2BA57IuuovJWp5ImuMw18n4vAY6pgGqpTAATtTI2TDgJozjWXOgl0CgLozVfavbEXO4HrPy3GkiiKQkZLpqTia4xg4DuUPbj0CKd7s9z3zPD6JWZ0G8mslAHi8ejL47gi17EVw%2F%2FfDntvMaiHuKMqImIUbb7zb2kf291%2FvGmHORFx9EszzdoaKKZ5424QdRO4m5NeDTQvPEYg6LQkwe16QEaATofEFHmR98Wck3RMgVUuXQ6lkCshgw%2FaYy&X-Amz-Signature=69c796d6b9a8f7505862244d23480c16187564deb2c17493c60d865d312db8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2J2XSAJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2ObxPZLx5Qp91DpYCsfxn%2FuzmSo5C0hRqqC1K%2BaJDdAiAhdBZfZfobOCG5hZRUk60RjXvqaI7p9GcuFdiSsiiFhiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYqLTsxZ2fDttupiKtwDAjNl1v024ZQsAY25l%2FoIpHIu3npRFEgk1JszUT%2FfFcfBLCGyPO3FShqUdX5UJZWAN9AcQ7hhTsyeruHZRCLdG3HnzoUNHPddbRXZoFuPsdo0osx1H3x1RF8Jc87rr8GbfVf%2FF30U55Qec1hhrRq6zKfKyI1nVXTXi6iJDDCWwGLOo3xwZ1wWXQspEzFtScOJr6P0%2BKFXX6jRkRW%2B%2BRCel2pVvygDQstbUYGmBmcPLjp1c9XhTm6c9BoAEyz%2FnlQD3a4q43JhMn%2FFPQ%2BTbWvH%2BLZK%2BQlEd0WE%2FJJypIvPDQJSxIHitxDTmY8ZYMfry2i8x8iqibYy00dNSRtY1JnON9moy0xaMeAaH5rKrTg%2FQyIKr1U1B%2F7xCl60CgZPCVo3FckK0tybui3E9YxEEXevBl0oTxfnpYnmlLUbYfyRdgnROW2qM%2B5CnEGDdeneP62xwR9BYE0SaN%2BMhjz1nL5mOKSh2LxRLfAjFOCWIC1uSEBWEg4jhUDL4rLgktiRgYKGO8Xfm6jMymtXkr3AWMXBFb2MVd25HGp0umQjfNC2Uf5SwMSocJ2bdLmTeRiF897kivdf69iaNL5Wy3pqMWhMXg%2BojecmcNWFlSs1LN9Ghqe5rhMyc6EruUDl0EEwtsf4vAY6pgFoIxJg3RWlyBYW4PenqrdsRNQ67pika11efLZcWQjdU7Fumh9S3FaRd3FClHaEm4b1e3l0318OpYvJFpuBtaww0N6oVrbHRGDA0deaq7Gnu%2BFXaAUAElfFzOVR%2FB0ER6L6Tr2u8SJem4TOaAd%2BuLfRbJNEGrZyFdO8W7X0Q5Mp9PMhGJJvVJpskDsVm6yO6yon6%2BQ14wfPTJNcvIrBZmN0N3LuwKDM&X-Amz-Signature=d48ff6936a85570be5d433dac1a3832eae7eed61460e976bad8f07325443e14f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GBN4NAW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEiAtL4jrY2kw3rXILuNhWVPoHdjtS73%2FtpZt6uJinrAIgAuxXxjNhxDAe0rdeFTYp212fTSPPAyCrjftHrMZKuGgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZEYgMKmTLDzOn0zSrcA90D4%2BSjEjTap4FDGh5e5roNSpiX99IxI%2FWgbeZu2fZh3wuwEevVzI4HtKcmGfbgRlTHStoQOD4Ya82XsC0kVJNXkBGaPI2AtHeFlUwzbM1dzLMgpPpReqIHLUnw1Wr7z0cSyQbSJa5BQXiisc9NVZI%2BvrJbWORUMf7DbwoR2jBbYOieT1%2BhAGtZypG0LHMgTbTi6TpeXp%2FOwKLC7xkkvu2TQXLecnjH8%2ByXHbsCa6yLWWKhf0wVV5TuUwmuva%2FzixoWYl2O%2BT8mR%2FO8ALHblRNZF06mNbvCjZwnHNt%2BSnFMfC3vv7q1R7tAFTzQVz2JPRWp03TY3EqcPb61GxAC5eJy%2BblNMIGMmbqXg1r5wWpaacdqDlkpkTV2NIV0a608iv5l78D948rPJchYKNSBOVK8V0Xn0IFP1pU%2FyC4wVEUY9bXpxFjYiPvS6VGL8wfc5gRzY60MXQUYZCKW0sPQl94yEwDrnaggh6hCpcBuQewpkmH%2FE40qC9vNkkwfkeS3gAHN8yZr9KlxW1JWFBlfOcmyMAfbNxehWjkvDuTn6ghD9GZIFjhUbsDJRu67hPiZKLbvSHX2lCWUmpm1hzwAObnZdYwK4AbYRWHOVA3sG5CPJGp%2BBestTr2BWvn0MOPE%2BLwGOqUBPsbMGZypHZPx4%2FsKXo1CNzTksaJ0QCMC%2F4J%2BvMIeU8orUSVpHcum9%2FAuCXhQ6%2BLRtGtBgDOfmYyTbN672PLku2fFjHrBpJpOyfHFrVxVyO6Dr3InF2ktr8jffmiijMvNN509eOOefPdfge31iyslefkqDKUSnwY4zXslSfKPrNeiFSKK7gVJUnfaYNxNDgoA9uHY3OnpeEusLPRknMsCcfS014gp&X-Amz-Signature=f36654f06b909af88fbb91aa1fec05cb19aac53fb1450e36464e1c923511d60f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
