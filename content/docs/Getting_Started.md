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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7YD4HB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBioRzDYYRV1YSovCtTYigaJhlh5%2BGIxvEoRlkmjR0fNAiEAqqEZeUCW62Bb3LxTr7Tybcis0FkSbtC6V3kR9smJGu8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIPSwADAKI5qacmddCrcA2AmCLSXr0QN5NujTnUOyCKNPf89g4%2FvNsabBU%2Bv8WmNwnMxEKMO7MiQhUrXCNa%2FPz272JmB47VM%2Bw%2BpgrfbkuzRLWvSpKH52oGmOGvJr%2FEZvjjopsYtqTM5SOF%2BnSiepbt%2F76ZKbxHtioUrcxaKUr%2BEHVXVXhw9%2FeSrxAcUJkGJAOVoiLnoeEYjABxjTnuuOzTYQ03lcSLInnehuh6xt3S8Dja8c6h3iJCXBursPiYlWWTZkAn8AKXQn%2F%2BW3vzebVY6zjRUCfhFpTZjOCHT1ceWE3LxOEXx9k%2BWTS3Y%2BgvrhWMm3sVW2Ae%2Br71jBcZ34fUCMDEMdFxU0E7vmlKUSBHpHi0p%2BSakKJT3sylYyDxhVy5nNncMxlUdp4rlGePrO3quLuukh9oKVSLGCs4qlmsx3trodwN18PwvVb4tW9hVx2VdGQW98zXUEiHuPvLKFQKpioonQx3MRWubmUlEsLTHcos4vQGWh14xuDfArjhLNUf2H2WMcd092nZB0h8iW5Q2WArXtSKRYeAF90oJN7COfzrPVR%2BygQ8qaenqIN%2F3ZDdg84WibVJsZRWdvYBSmEyv6DUzOq8QMc6zOQR2z24F40OMwn7l%2FQiA%2FXBPvtxkxDntxqZQmD41ydD8MLCMoL4GOqUBxlsuUFKokvI12latk65HJ4sm1XkUHEGslhWOVpAdPdNBIqqJETh1O5tZaLmtrwEvpiQGbLlZ3EST1Uu0G0G%2B86GAeAIaa9o3oAHlcBBcRMSUhpXrWWyUDKhBci%2FdSblwVNBs65yvvMswUnBxmFlkEK6lLTztMSq51K5YNdfUitFkxDr%2F4Uk3aQPC8ty8pvEsTdeoJzjtJlnrf0nzd9AL8IxqKhPd&X-Amz-Signature=8a84a6d735a3de97c1de744756a4f06d3bc18f36383c11397e7fb7d9ba100802&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7YD4HB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBioRzDYYRV1YSovCtTYigaJhlh5%2BGIxvEoRlkmjR0fNAiEAqqEZeUCW62Bb3LxTr7Tybcis0FkSbtC6V3kR9smJGu8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIPSwADAKI5qacmddCrcA2AmCLSXr0QN5NujTnUOyCKNPf89g4%2FvNsabBU%2Bv8WmNwnMxEKMO7MiQhUrXCNa%2FPz272JmB47VM%2Bw%2BpgrfbkuzRLWvSpKH52oGmOGvJr%2FEZvjjopsYtqTM5SOF%2BnSiepbt%2F76ZKbxHtioUrcxaKUr%2BEHVXVXhw9%2FeSrxAcUJkGJAOVoiLnoeEYjABxjTnuuOzTYQ03lcSLInnehuh6xt3S8Dja8c6h3iJCXBursPiYlWWTZkAn8AKXQn%2F%2BW3vzebVY6zjRUCfhFpTZjOCHT1ceWE3LxOEXx9k%2BWTS3Y%2BgvrhWMm3sVW2Ae%2Br71jBcZ34fUCMDEMdFxU0E7vmlKUSBHpHi0p%2BSakKJT3sylYyDxhVy5nNncMxlUdp4rlGePrO3quLuukh9oKVSLGCs4qlmsx3trodwN18PwvVb4tW9hVx2VdGQW98zXUEiHuPvLKFQKpioonQx3MRWubmUlEsLTHcos4vQGWh14xuDfArjhLNUf2H2WMcd092nZB0h8iW5Q2WArXtSKRYeAF90oJN7COfzrPVR%2BygQ8qaenqIN%2F3ZDdg84WibVJsZRWdvYBSmEyv6DUzOq8QMc6zOQR2z24F40OMwn7l%2FQiA%2FXBPvtxkxDntxqZQmD41ydD8MLCMoL4GOqUBxlsuUFKokvI12latk65HJ4sm1XkUHEGslhWOVpAdPdNBIqqJETh1O5tZaLmtrwEvpiQGbLlZ3EST1Uu0G0G%2B86GAeAIaa9o3oAHlcBBcRMSUhpXrWWyUDKhBci%2FdSblwVNBs65yvvMswUnBxmFlkEK6lLTztMSq51K5YNdfUitFkxDr%2F4Uk3aQPC8ty8pvEsTdeoJzjtJlnrf0nzd9AL8IxqKhPd&X-Amz-Signature=ac89526c635f4f95e598a3a7872a2d224bdd098ffbda2018571264615798f186&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYLTEYWF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqZ9VvVbwEi6cktMnhg7BOd7KUW4fn2twTVWqm8k8aCAiEAnqlkkF%2F36B8JZ4ITRsjaa%2FlM48LnjoAQfddc9hdYbc4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDF9Bx1HdMbLknet2yircA0vK2tf5Drek%2Br7xdyp96qyM6pg992O8GbxpN8oBahZnZf8igBss2n87M6M0l8sQd8phgnLnVf%2FI54dO1fFeK%2BHVhIMMPfQRP3lVSpglrn3SohuQK1AeP3im3Et8tudZTCrKZ%2FmRGdtwK2IzXWxyvjVAArg2NFYkVtGXU18tg4VBniQCp6wgXnd3oDEBLhTk%2BKqEdR%2Fsr57hmLshQjQ3VwfdYV4abPw5k5Xsnghmq55cZWOpO1Szv6HOvi%2Be2sfCS9AsUyMPDbUelRZwZg%2FnDKesu9S3Qcv0HTPqYDLOJ8vg2WXxofJQe%2FG50trLu%2F0lTTRk0axny30BKyxUpn3stl%2BC0A33ZS4zzJZAUrj8zWl0IQjZtI38h%2Bg97j5HKEmZo%2BVSBsE8%2BoeMy8tI9sG2MPZBLKz%2FJ%2BzkAhNKvl939YxJFtMfH9AFDTIoAK8wdkdvwQFhF4ed6WT6XjVsyNbSCDglvTc%2BXctXUCxSLUf%2FSFUiKKUl7blGmUFwZZKTq%2FtPa33e0Wfu3nSzP4g5aFbELRDbj%2FHxfC8nX3Muu8Z3f8STVo1riEPyDp5IHfZV0Dnm0vJzrGG9UWxw6uWiAIuKX%2Bd%2BBA3FgvD9ylxEDVEOkzDY70HI8i90nVckDP36MIKMoL4GOqUBYM7srJpNAt3DkEIKW7BLu1uP0jBMDJ2%2BogjMLUeuqnCFt%2FcvbKEmArs1t2pa%2Bio1mhdco9DdPdB9h1cpoB6EFVBpTEVwgiOGA5oThJGvLhRdqCC3OOfGpkTBIRYl7Mfei2LAJAFJQ6pr2dTm%2Bm2CYNLUi4CO%2BJHTv6skrS1uPRzCympVTHnA5t3vOP8P4Jxk9noPYS4u4sr4CWJhUymsKJ9EofY5&X-Amz-Signature=7db47da698b0b7633a82499e8f764e53ea7fdbd7e2b19f2815563d7ea1d1081f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ACGZJ3Z%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWPYjwht%2BG4nb1wLcaCissfqOXmHmLeXCDwQ4hwqu6qQIhANCLniR2AiEET8iYiTdG1gB4PtHNlI5Rb7pHUsk4p7Q3Kv8DCBEQABoMNjM3NDIzMTgzODA1Igyj6fE0Xf6LxxqPz8Mq3AP5PxFdiDBeEyKVa1rPztYyLz6SXSeYlT9uHf7mDRmy8Ti53Te4EHJCIPv6GyVaXVGW6i5OMXInJHTF5XypIQ%2FovomYUVJNPMWILAqvaMR1zrmczVKojkP8SY9yaL2k38YvtE4gS%2FeiBapA7RzJA6NIhS2p3bo5aGFVWp3EaT0FMih6rayoZ4u3zG4QRqWwr8zCmaAPQAVjfRj%2Bv%2BOEAzBjH2HwghU4OmTlQuajebtoOIBB5bDYcUHedToMjQk9Fqvh3YFdiem%2BIXLPnKfcfmghwuXahqUQN%2BFWx0W77EFLrE7rYBV%2BHOOS7m7yXaW5HuqV3EkUYuGeCW8TUcMfrSHexP69neWvci1%2FBJWmzpBZjq%2FGtnhTyihDWnAeuSObKRVUIrqzl2FGMae8tNaq%2BnxTVvhUuXy5HdeMZj44Lbta9QMFV2l6%2FedhycTPVqiBoNG9G3O2Wa1JxcxfyFEHOjHuZYGYpGt4DafQT5CuBPyDVxQU4HPGSxfUNDQ%2BMxqrfD8AbasHBQFOX%2BLut0lLCmYhtQracQFfUfilgRuuCRTdeZlI1EhNldFDqPu2q%2F9R06onQRXvUCYI8wUPMVX5hNryz7wUGI7erltD7fkmnzwaaydeJwRLwtt%2B4YkNHTCxjKC%2BBjqkAZyMef3CYjoykEgH0im5d%2BvC349v71KW6xPdtcfK%2FzyF1lqslzN3i94ntW%2BUJUMpCfuscheaCBWblxQ7p2qrGLv3zf1WvO9yUFTs4098d7e3AnZJ6SB%2FvxYaCljeAlcwPFOkMvSMdFPOi5daMV58hgwR2M8bW%2BgZDi2aia98oCFiFVoms7toPLyFhBeZkD%2FIdQ%2FGTwpyWD1eaVoqVUBb6Rnojv8r&X-Amz-Signature=67cb68023013451c60e8ee69f942fb3dcb44ec730ebc99ef548430afb987599d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7YD4HB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBioRzDYYRV1YSovCtTYigaJhlh5%2BGIxvEoRlkmjR0fNAiEAqqEZeUCW62Bb3LxTr7Tybcis0FkSbtC6V3kR9smJGu8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIPSwADAKI5qacmddCrcA2AmCLSXr0QN5NujTnUOyCKNPf89g4%2FvNsabBU%2Bv8WmNwnMxEKMO7MiQhUrXCNa%2FPz272JmB47VM%2Bw%2BpgrfbkuzRLWvSpKH52oGmOGvJr%2FEZvjjopsYtqTM5SOF%2BnSiepbt%2F76ZKbxHtioUrcxaKUr%2BEHVXVXhw9%2FeSrxAcUJkGJAOVoiLnoeEYjABxjTnuuOzTYQ03lcSLInnehuh6xt3S8Dja8c6h3iJCXBursPiYlWWTZkAn8AKXQn%2F%2BW3vzebVY6zjRUCfhFpTZjOCHT1ceWE3LxOEXx9k%2BWTS3Y%2BgvrhWMm3sVW2Ae%2Br71jBcZ34fUCMDEMdFxU0E7vmlKUSBHpHi0p%2BSakKJT3sylYyDxhVy5nNncMxlUdp4rlGePrO3quLuukh9oKVSLGCs4qlmsx3trodwN18PwvVb4tW9hVx2VdGQW98zXUEiHuPvLKFQKpioonQx3MRWubmUlEsLTHcos4vQGWh14xuDfArjhLNUf2H2WMcd092nZB0h8iW5Q2WArXtSKRYeAF90oJN7COfzrPVR%2BygQ8qaenqIN%2F3ZDdg84WibVJsZRWdvYBSmEyv6DUzOq8QMc6zOQR2z24F40OMwn7l%2FQiA%2FXBPvtxkxDntxqZQmD41ydD8MLCMoL4GOqUBxlsuUFKokvI12latk65HJ4sm1XkUHEGslhWOVpAdPdNBIqqJETh1O5tZaLmtrwEvpiQGbLlZ3EST1Uu0G0G%2B86GAeAIaa9o3oAHlcBBcRMSUhpXrWWyUDKhBci%2FdSblwVNBs65yvvMswUnBxmFlkEK6lLTztMSq51K5YNdfUitFkxDr%2F4Uk3aQPC8ty8pvEsTdeoJzjtJlnrf0nzd9AL8IxqKhPd&X-Amz-Signature=e1f514388a1959a1a3f1a200a413471ca787f8a52bc9181c0f23c34dccfe63dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
