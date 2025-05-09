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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGARDIO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUmnk%2FNLIUiyl970P18%2B7Yrf2kKwmvb9yaA%2Fl7HO1KZgIhAMiCeRGoGA0ng2DFSASxV6%2BnPS3iL4yUGdopxPGUFrbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHPK2A6vpi203Cz6kq3AMJWlx6PrxbjgTLfNrVdF7V8sNj0EH4VDSsoDGS4M3ug93oa11JEPMQf2QgnWpdaPP9c4pFGjBvCLO3avRh0Ziey0YtR%2FXEjXclUb2oY1%2BOmelBeJkrCvMtYTLxlOk0Um5fTXeSV5D81T6VfF8Z3510tgtYxH2AxWnPU5Z3Tikj%2BF39wGMCPgATtcRwW3bC4AgVJwmxz%2FSheId%2FtlDaZbuf78oSnfLK22N79fvlXZSrYqiOUEp5T%2FfGbzQOEROvbXOglscK9YgejRlj%2BkEtO3AFH1Y3w%2FqBKChrcwpUSAKymKCPN9jJdFZPpG90rw%2FjDZjJZL6HipTN2yj%2BD1r4Zmn9SBLNOOcvmQ%2FZaCD7sZQX3Hcb6xo0XC4%2FI6v8JYv5PsC%2FkLfQgrmkQk8L10IXvQTPdZ%2FlboTKDz5q3atmR8JtI5ejpumHMkF2QPcHvKFqj1xoOUFs%2FJGi5xGCojg%2B%2BKLnDlF6IlwEjAtY0t6ID2vnxu9SsY74amnGShhjbzZNVMnjhKge8sOcKbjqeWGZaB8KE2OegQkiQ%2F3GVcxJL5fGnUdru262jxk6XEO4%2BQcxR0SdlwMEF35gBhCczvEKmR3oe8Xr1t4%2Bc18QwDRYLi7v5WNBNGHey0ru0AHh5zCTgfrABjqkAeAo1bngSGd91%2B2ayK2%2BtSDGa3ZQckdpx%2FTcvg6nqY%2BR%2Fh4xIb4Jm6s%2Fp6NmmS%2BLGwSqupRnenHC87xjq9vIt6HK38ujlmkkZHpMLEr%2FrtfB9NK7P6s1PJl7MBpFI0iwzZBxQHndTR6KsVn2i1mtfT7zFn%2BZJYeebyvDh%2BO65K4e2bOWbYl63erRowbz%2FcIjec6hhPBqDid6ieEZKVn0tsEJno6m&X-Amz-Signature=7fb27cbbdeae5c4e3c0475e61d47deb16cbb230ed3d4426bda0ccc03d5977d12&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGARDIO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUmnk%2FNLIUiyl970P18%2B7Yrf2kKwmvb9yaA%2Fl7HO1KZgIhAMiCeRGoGA0ng2DFSASxV6%2BnPS3iL4yUGdopxPGUFrbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHPK2A6vpi203Cz6kq3AMJWlx6PrxbjgTLfNrVdF7V8sNj0EH4VDSsoDGS4M3ug93oa11JEPMQf2QgnWpdaPP9c4pFGjBvCLO3avRh0Ziey0YtR%2FXEjXclUb2oY1%2BOmelBeJkrCvMtYTLxlOk0Um5fTXeSV5D81T6VfF8Z3510tgtYxH2AxWnPU5Z3Tikj%2BF39wGMCPgATtcRwW3bC4AgVJwmxz%2FSheId%2FtlDaZbuf78oSnfLK22N79fvlXZSrYqiOUEp5T%2FfGbzQOEROvbXOglscK9YgejRlj%2BkEtO3AFH1Y3w%2FqBKChrcwpUSAKymKCPN9jJdFZPpG90rw%2FjDZjJZL6HipTN2yj%2BD1r4Zmn9SBLNOOcvmQ%2FZaCD7sZQX3Hcb6xo0XC4%2FI6v8JYv5PsC%2FkLfQgrmkQk8L10IXvQTPdZ%2FlboTKDz5q3atmR8JtI5ejpumHMkF2QPcHvKFqj1xoOUFs%2FJGi5xGCojg%2B%2BKLnDlF6IlwEjAtY0t6ID2vnxu9SsY74amnGShhjbzZNVMnjhKge8sOcKbjqeWGZaB8KE2OegQkiQ%2F3GVcxJL5fGnUdru262jxk6XEO4%2BQcxR0SdlwMEF35gBhCczvEKmR3oe8Xr1t4%2Bc18QwDRYLi7v5WNBNGHey0ru0AHh5zCTgfrABjqkAeAo1bngSGd91%2B2ayK2%2BtSDGa3ZQckdpx%2FTcvg6nqY%2BR%2Fh4xIb4Jm6s%2Fp6NmmS%2BLGwSqupRnenHC87xjq9vIt6HK38ujlmkkZHpMLEr%2FrtfB9NK7P6s1PJl7MBpFI0iwzZBxQHndTR6KsVn2i1mtfT7zFn%2BZJYeebyvDh%2BO65K4e2bOWbYl63erRowbz%2FcIjec6hhPBqDid6ieEZKVn0tsEJno6m&X-Amz-Signature=07008b9331d96bc959957cbf6d0b7af5ba813cccbc2ecc913b2991566864df40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGARDIO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUmnk%2FNLIUiyl970P18%2B7Yrf2kKwmvb9yaA%2Fl7HO1KZgIhAMiCeRGoGA0ng2DFSASxV6%2BnPS3iL4yUGdopxPGUFrbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHPK2A6vpi203Cz6kq3AMJWlx6PrxbjgTLfNrVdF7V8sNj0EH4VDSsoDGS4M3ug93oa11JEPMQf2QgnWpdaPP9c4pFGjBvCLO3avRh0Ziey0YtR%2FXEjXclUb2oY1%2BOmelBeJkrCvMtYTLxlOk0Um5fTXeSV5D81T6VfF8Z3510tgtYxH2AxWnPU5Z3Tikj%2BF39wGMCPgATtcRwW3bC4AgVJwmxz%2FSheId%2FtlDaZbuf78oSnfLK22N79fvlXZSrYqiOUEp5T%2FfGbzQOEROvbXOglscK9YgejRlj%2BkEtO3AFH1Y3w%2FqBKChrcwpUSAKymKCPN9jJdFZPpG90rw%2FjDZjJZL6HipTN2yj%2BD1r4Zmn9SBLNOOcvmQ%2FZaCD7sZQX3Hcb6xo0XC4%2FI6v8JYv5PsC%2FkLfQgrmkQk8L10IXvQTPdZ%2FlboTKDz5q3atmR8JtI5ejpumHMkF2QPcHvKFqj1xoOUFs%2FJGi5xGCojg%2B%2BKLnDlF6IlwEjAtY0t6ID2vnxu9SsY74amnGShhjbzZNVMnjhKge8sOcKbjqeWGZaB8KE2OegQkiQ%2F3GVcxJL5fGnUdru262jxk6XEO4%2BQcxR0SdlwMEF35gBhCczvEKmR3oe8Xr1t4%2Bc18QwDRYLi7v5WNBNGHey0ru0AHh5zCTgfrABjqkAeAo1bngSGd91%2B2ayK2%2BtSDGa3ZQckdpx%2FTcvg6nqY%2BR%2Fh4xIb4Jm6s%2Fp6NmmS%2BLGwSqupRnenHC87xjq9vIt6HK38ujlmkkZHpMLEr%2FrtfB9NK7P6s1PJl7MBpFI0iwzZBxQHndTR6KsVn2i1mtfT7zFn%2BZJYeebyvDh%2BO65K4e2bOWbYl63erRowbz%2FcIjec6hhPBqDid6ieEZKVn0tsEJno6m&X-Amz-Signature=5a7526e1df347b7b2b9f3a3dfaeaf64da0d8910478c24174631c4bc83101f9df&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ7WHJT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOdwDoTm9vyUqN5m2O8lcask15JxM%2BI%2B5CmJJhXKVETAiEA6ylsCalNrYXWwcEiVwBCcj3e1TxJ9ru4aldkqKLi0MgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBFWdhYXRQ4w09tyircA2MmWAgFQm4UpDbkI5NE1jcylP56AIiXPgdeq6QF4629m0QfcutX%2FcQeJUnp7YSZNV5f%2FIS2q%2FV25QZ%2BFlSpXReVH0IuwwmTQobLmNmlOidG9PPuLSP8U9qyPniWQi2RC37JveZaeivZnZkTHFNPVnTbB0%2BPZeLc8jT70NnXOhXoj2IONpMWbfsZ%2FB1zkoBrNv3z1gLYSoQOVx12yrByDfrm2g%2BumSJ1oMSqhMTldII1pT%2F7twMvLMnirOgiytRatN%2BvTEzk9ZIXIbXjaHnCSFTVzsYo7NS8vS70tdJugHv%2FCyfRFTx8RgXTaX2FbgT%2FQrY2Xl5%2BZgO2mLYz2c1pFQyCR9q%2BOg8t1lnhmSsgA6vNCqQoDV%2FQ8IJTTzP%2FxZPyhEhbolnaafPrSKtKDr9oPsYU3LyMGzqEGfBuBhCB%2B7u8iyrk3QpVFyPXMPGUm3RVU35nXM3%2BwRe%2F81UIP%2FaboquawThswCi6681D1XmhQpO3rxbDKYLBpBeQQX1FarqTpUCUfz1m0ZKC7JdPBvGfhUw78MczlMMW98IoPNfKdgfyg%2Bnw03BpWk9FeLtjF5dLi6m%2BAc2%2F7oFJ31RgzL9E86q7RE1wUbeUtLJbqp5%2B62LcI0m7UTb47IKtYE0mMNeB%2BsAGOqUBBBqvnP93qdaFCBshyEk4DILU1%2F%2B%2B4etwQNJTzbGa2E82IZjrOnfRrCDFVtPDWXfkgFrPNuea3xPM8ImhhramxKYcgCN8q2KP3JKqtnnSb46vCMsyr%2BJFSjbuY7mDzyYFUdrVnlfekmjwxi5a%2BmIz05wrpP1k4z61%2BXCpOjd%2FyRwMRac464NJaAEfuxFXHj%2FRdps5W6VbykCx8GstOelOCOFePfcb&X-Amz-Signature=2a3fc61c1ccde183471b0009b6b6c559297e64916b60041b0119314e10b4b1d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL4KKKIZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF28JqRuMAU5a4GtJKFr62dYlEgveYF4%2BMf3CrMXtKOdAiAJZpIX%2B%2F%2BQnj6ZQh7dFKpC4yIPqyJ%2Bucp8wPNE4PU5wCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDgvXAMWQHdUs%2BNOSKtwDK2px4j%2BzweHmVI07jeekc7bMxwXskKhPlUhnfTJoKqRRyoidif%2B2i0sWJ3AHeexjmWz2z849tQxTShdlZsvE8gTt9huGJxODiLV2N3IwCcW%2FictBAQW%2FUZX4LqUtkhotJ07lDpp0iRIycWpaeybSylmF5v2ucLrExeyKnGPniX4ftE4%2FmzFGx1aQUVr%2FMwO7D5CXsLAYNQe8n%2FCmlG8OM53enTfaXKHDu%2B%2BDb%2B9yjPiLrnG1eGhYxhacUVzr%2BvYR4YexrrLUK2woj4Bl%2BM0HE7vbi%2Fo9UFlYVS2L3XC4PQyUm8FfvXT6QlMl%2FEGzeFM1IuqpkzXRukrMgWbOjwTAH8BmWxjUBh%2FsRN5mw4ESAwmGEkjDWG6hp4jmazfCzkI0e6GEeA7y9AnnJzrxI9ArSob6p5N5mnNVrIvBljMzErE4jKknBayKPjKAPc9gC%2F5h2b3KcPcN2ahXozBRULbUJuHo20jQqWf1EYNjN8xv9ys6agzQpbUzjI4hwZPXxRZZZj%2Bgj3%2BBQrp5ZK5fu9JWKEq3rT7oZVBdXu3pE7dDn%2F0ZxfPndB0OBeGWP9sv7fTyeh65PfW7fg9zuzfedF14IutlulBMwHqEbupUyBfhjLRmYn%2FUclRoG99iglUw2YH6wAY6pgGtfliVsTzKCXgUml3w8qXPWOmGPI75RMxOdyXaVYkpfr7puOSajty4Zm5%2BthZWMUqsg3CWtUhWyCcc8%2B%2B3xtv9p7Kf8HucAIMHHgfy%2BDinZ2Ox9l25G%2F9mIcBSiAHGX2iw4lZ2146TKpVCMJh%2BgcAKIB%2FpFyTrqyxPVGDEjgSltJ%2F10Jj3jz8ty1HIr2eLARKMW7QdUMP4XNiKOgk%2F9rI4h7DFgw7E&X-Amz-Signature=009b8d4d3894830063dd4626452a3d0f831ec82dcb2ff6efcb66b23a97468220&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGARDIO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUmnk%2FNLIUiyl970P18%2B7Yrf2kKwmvb9yaA%2Fl7HO1KZgIhAMiCeRGoGA0ng2DFSASxV6%2BnPS3iL4yUGdopxPGUFrbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHPK2A6vpi203Cz6kq3AMJWlx6PrxbjgTLfNrVdF7V8sNj0EH4VDSsoDGS4M3ug93oa11JEPMQf2QgnWpdaPP9c4pFGjBvCLO3avRh0Ziey0YtR%2FXEjXclUb2oY1%2BOmelBeJkrCvMtYTLxlOk0Um5fTXeSV5D81T6VfF8Z3510tgtYxH2AxWnPU5Z3Tikj%2BF39wGMCPgATtcRwW3bC4AgVJwmxz%2FSheId%2FtlDaZbuf78oSnfLK22N79fvlXZSrYqiOUEp5T%2FfGbzQOEROvbXOglscK9YgejRlj%2BkEtO3AFH1Y3w%2FqBKChrcwpUSAKymKCPN9jJdFZPpG90rw%2FjDZjJZL6HipTN2yj%2BD1r4Zmn9SBLNOOcvmQ%2FZaCD7sZQX3Hcb6xo0XC4%2FI6v8JYv5PsC%2FkLfQgrmkQk8L10IXvQTPdZ%2FlboTKDz5q3atmR8JtI5ejpumHMkF2QPcHvKFqj1xoOUFs%2FJGi5xGCojg%2B%2BKLnDlF6IlwEjAtY0t6ID2vnxu9SsY74amnGShhjbzZNVMnjhKge8sOcKbjqeWGZaB8KE2OegQkiQ%2F3GVcxJL5fGnUdru262jxk6XEO4%2BQcxR0SdlwMEF35gBhCczvEKmR3oe8Xr1t4%2Bc18QwDRYLi7v5WNBNGHey0ru0AHh5zCTgfrABjqkAeAo1bngSGd91%2B2ayK2%2BtSDGa3ZQckdpx%2FTcvg6nqY%2BR%2Fh4xIb4Jm6s%2Fp6NmmS%2BLGwSqupRnenHC87xjq9vIt6HK38ujlmkkZHpMLEr%2FrtfB9NK7P6s1PJl7MBpFI0iwzZBxQHndTR6KsVn2i1mtfT7zFn%2BZJYeebyvDh%2BO65K4e2bOWbYl63erRowbz%2FcIjec6hhPBqDid6ieEZKVn0tsEJno6m&X-Amz-Signature=63e8bea24d78fb1cc7c27228d5833ef9ee1f7b54c9fbc05d0050992626a24a15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
