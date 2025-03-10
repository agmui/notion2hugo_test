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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZXUO32%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDiC5ogQNGXeb2%2BykbmK%2BZmNTInTxilFZkml%2FyExZGujQIhAJxF2Iz3fay7agDJEX5Mct%2FrR3ugwMJ%2FDnpDRB5M7UhmKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiENE8%2FkNImWk3S2Eq3APETXN4Et%2FxFV76TfYjj2%2FDOTKnSnLPf5jx3N8HHaVzCcH%2FyYM1%2BsqPzPaobqFl%2BSR%2ByaiR1iyu8leGClsibHZJf1tliM34WDmSBFKr8pUy1FPPomZmj4wgxSqQ9ZI4tL8ISPgg26%2FIgQHrTtsvJbLrPQskchsTkPC1de1IVh4Wh7ckCR4UhxdnNqS0aPpRer7UYThrldfj57TW5nP9%2BKpv1eyo9HKGLB5YW1EYgA7oCoDuh8NXvrZEi1FZ2SnJEqHbTB0huKVdOfOiiF275SvLPo8DP3fnyJC4SC8HEpAHt2W0CM1ox2%2Bv%2FIYAU0XVS6XaCQAyuB0xbgNye0vvCSymG4txS2ysOLkeH94NCTkMjrt8N7I5tTy2HLRd2w6S3q1%2BXwV1WfktzlHyxr4bL1O7DdN%2Fmk7ILHvGEOFiC4cZV1CXnH5AAGfwfEanesPpTNumZcV8SzXuCjhESy28LC%2FZYv5QyYaiCnCKq91iG8WeEyLblStSvo0ZNme3NK9ZF%2FtCJug4cPw%2Bz8jIgcVIGoAGSH349wqB1P6wfxvHiyvZfa7jm9N7Hn4QA3El14w8kOaLFPi8Q6bMA7FNrEr1Xk2g1Bs5Wv5IKWfb%2BJIWUhxetxMXgaBbGfRPr3wu%2BTDuzLm%2BBjqkAQEmU0%2F56FyCogjqwFu2YEMVbLq0rURb%2FR6StFdaORPnb1L2JDdvx5HcGyLzVKtua7M%2FaIrpDWx975QFPf%2F75%2BOAvnwa4zQPX93fNbitbVfRurH7ugrLyNTh2jCQRC8dzZ317L%2BZUAm%2B0dBz%2F55ZfpkIhyg6WooQ9B9QKn2HObh6yuoz%2BGCEodDlh24fEkAies2j9EYVCoF8Br5M3MyIpJvJST2W&X-Amz-Signature=faf0b50151073d04be7fec1b1497423d29799ef2fe10caec0d3c6d5333c44f34&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZXUO32%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDiC5ogQNGXeb2%2BykbmK%2BZmNTInTxilFZkml%2FyExZGujQIhAJxF2Iz3fay7agDJEX5Mct%2FrR3ugwMJ%2FDnpDRB5M7UhmKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiENE8%2FkNImWk3S2Eq3APETXN4Et%2FxFV76TfYjj2%2FDOTKnSnLPf5jx3N8HHaVzCcH%2FyYM1%2BsqPzPaobqFl%2BSR%2ByaiR1iyu8leGClsibHZJf1tliM34WDmSBFKr8pUy1FPPomZmj4wgxSqQ9ZI4tL8ISPgg26%2FIgQHrTtsvJbLrPQskchsTkPC1de1IVh4Wh7ckCR4UhxdnNqS0aPpRer7UYThrldfj57TW5nP9%2BKpv1eyo9HKGLB5YW1EYgA7oCoDuh8NXvrZEi1FZ2SnJEqHbTB0huKVdOfOiiF275SvLPo8DP3fnyJC4SC8HEpAHt2W0CM1ox2%2Bv%2FIYAU0XVS6XaCQAyuB0xbgNye0vvCSymG4txS2ysOLkeH94NCTkMjrt8N7I5tTy2HLRd2w6S3q1%2BXwV1WfktzlHyxr4bL1O7DdN%2Fmk7ILHvGEOFiC4cZV1CXnH5AAGfwfEanesPpTNumZcV8SzXuCjhESy28LC%2FZYv5QyYaiCnCKq91iG8WeEyLblStSvo0ZNme3NK9ZF%2FtCJug4cPw%2Bz8jIgcVIGoAGSH349wqB1P6wfxvHiyvZfa7jm9N7Hn4QA3El14w8kOaLFPi8Q6bMA7FNrEr1Xk2g1Bs5Wv5IKWfb%2BJIWUhxetxMXgaBbGfRPr3wu%2BTDuzLm%2BBjqkAQEmU0%2F56FyCogjqwFu2YEMVbLq0rURb%2FR6StFdaORPnb1L2JDdvx5HcGyLzVKtua7M%2FaIrpDWx975QFPf%2F75%2BOAvnwa4zQPX93fNbitbVfRurH7ugrLyNTh2jCQRC8dzZ317L%2BZUAm%2B0dBz%2F55ZfpkIhyg6WooQ9B9QKn2HObh6yuoz%2BGCEodDlh24fEkAies2j9EYVCoF8Br5M3MyIpJvJST2W&X-Amz-Signature=26f44daa770059d276c85249fe145f3bcbf79852bfc1e291350938d7a7973672&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBWCRAB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDioDxOgbdv0sEztrN23P%2B1P32OFLpSLCtT0PATVtkAbQIgeAO6eu8wQeDZOrxNxyxeSa%2Fr%2FWyYyD20D7I8lPJpW2kqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfbOf6xziQ%2FQS2yvircAxpC3q1wu1qDRBh1ylIRWK%2BDgYJF9hir9D%2FNjNzvCr4%2Bi1CYWObH809s3DT%2FaX%2FdxYr30r0%2BmA%2FK4F4tooe8FwQwNHsMexCkw%2Bq%2BZ2QFA6R%2BNyB%2FE5pczM8U8t1Km4MO1HHhcCH7W6%2BKEX7xRzfw%2FLnkFb%2FWjypGPy00YnyprFURvDmd0r2XdvQiJ4BHdfKTpB1YGnoyRRxjYLNHpd%2F50hYb1b7lOC9YuyMnlBg45O5LZ5eRYe2FIypfgYMww%2FqX5q7FVI1DgsI1uKRGGt0rWCERc5oQhHvBOQVZvetwcDarL5bu1ZUSxEiYLIduwr3q8Mb4gmQsL3TTS6yhF6qgnDBn3gvrnHKq3d9S7gpzc3CIW5wMeo0T5ZfHFVJ5v%2FX9G11lLORohImixK8katgKmfvtS43243vzD0dXG7PsLVyd99IAIJUFHU3JKUcWI17mFLATrn8emjsStQZcb80p4Ql8CsTUSZ%2BOy8MdFnfCyZrnV%2By15VBUyehjWY%2FkPRc7QkVcOAcm3qjHCibiVli5Aml%2F%2FVFRFEhSXb1jj3rS3G7j0HoaCKUpyfQFTAHcEjsAgTYBNeaAbSrRrsfFbCCNrBhSA%2FSGjHdbIB9INeoIlNnqL2IStv3Onk%2Fu55EpMOzMub4GOqUBWKMLLMZtNPWm7fJ9%2BCFB%2F0B3%2BYLMM4Fxz%2B9rOMrmBfJakCUPEvTILvho6pjByhZK1SxR9nKhqpTJGCbE3aHr%2FBGfG59hzOCbsRGuxSfCTwf59gFphOGrx4%2F%2FD4GMWJ2cdBc3idlQq%2F4MAGzd8pppfI8I16Ze29Vt%2FjHGTLWMahno8oK8Rm%2FyrBfhd8kX0G0uKds6PlNQwBUMdUMdN0ivIsbMPdMH&X-Amz-Signature=4f4973540f690166f6aa20fe904b04bde8bb544d984da6e7eb7882bc39d038e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAPXQVV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGuKAZv2asZ4RLLtOhl3YKzvPjtmbuR3AZaZWrNbmExpAiBV5dRwLdkAWOYyzv5vkFWjNDeStySlnZyDV7%2FzJSsjsCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDLgH%2BPxVoe0jmAN5KtwD2RD8elWSLA0t%2B58oMZN26N6JGMLiFU3t%2FO%2Fs0aeJWrr0DCuU%2BLAOY9mDHOtvi10RDF%2F86N9O6Nj1yRylfKV3PfhyIDXpJwfjcb06JaOOGO155z1OUsGMn2OUrC6J967xEfSdJvjFlnyi8ziSpu%2Baa3Jc5dZ%2B3c77NZPC9IWSEkHw%2FwvPzStpwsin2VBjnBbHe57pyfY33bnaJ5vOCxQYzcpP6P34BiXzWoZl0iYRzZNSZlJ8ZWZ4Eu2Yg4TFWxxsGchA%2FBlA%2FbHvXRFCUpHM9NhkBdxfV3pDShYPPOyFMDaN9eb0CvTve%2ByTVNkNduoReHU3NgbHX98c3v8RZrRq8rmLM5QrumwRDd8B6dJTetPHeR%2FlORY8VqToyB2kFax%2Fcq2qWgOFrnwsc%2BbxgJBTVdKcDrLYUvZf7RjqVIW596FUQ%2FxHXQ63X7UOa%2FFhHuejlBqLw%2FvQsHk63E9BtvHb%2FMFvzB6%2FAjv7T0fdpi2TZGTaNc%2BlelsF5hDwsnsr7NgLhGAEqtIpEYHgNTr1ZlSh3Cfcd3Jt%2B5VNF1vG%2BJMAITpZvkwsUwfwKA5bsDtDnkDqiFlSn%2BETac9rZOYPjikZ8I9j7IgKNue3WEnsmLSX98719M7VVgZpTh6dx90wz8y5vgY6pgGfsWuBm8XUxFzJtVi8sc9nVam6iPgLGYFn%2BcEqcL5VfOdrMdKJHudEhvxmmzlz65Na2yPUMCJ8ZN0LsbLSA029NVCBNWHknssmMF39bbZZ%2FkAtR2kkskkaW46XzXA22bYQI82WRG8FH%2BeAh1AUrPsAnMgyapoYxN1EAH2X6NZEMMK2DB5iZhYHyM4FOqQeLu2V5o7u%2F%2FkIDpIrX%2B%2FZvM%2FrKoeXmSH7&X-Amz-Signature=50c4617cc3444eb7ece3615d9e6cca1d92684f1c76b0f78980064b4be8fab3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZXUO32%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDiC5ogQNGXeb2%2BykbmK%2BZmNTInTxilFZkml%2FyExZGujQIhAJxF2Iz3fay7agDJEX5Mct%2FrR3ugwMJ%2FDnpDRB5M7UhmKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiENE8%2FkNImWk3S2Eq3APETXN4Et%2FxFV76TfYjj2%2FDOTKnSnLPf5jx3N8HHaVzCcH%2FyYM1%2BsqPzPaobqFl%2BSR%2ByaiR1iyu8leGClsibHZJf1tliM34WDmSBFKr8pUy1FPPomZmj4wgxSqQ9ZI4tL8ISPgg26%2FIgQHrTtsvJbLrPQskchsTkPC1de1IVh4Wh7ckCR4UhxdnNqS0aPpRer7UYThrldfj57TW5nP9%2BKpv1eyo9HKGLB5YW1EYgA7oCoDuh8NXvrZEi1FZ2SnJEqHbTB0huKVdOfOiiF275SvLPo8DP3fnyJC4SC8HEpAHt2W0CM1ox2%2Bv%2FIYAU0XVS6XaCQAyuB0xbgNye0vvCSymG4txS2ysOLkeH94NCTkMjrt8N7I5tTy2HLRd2w6S3q1%2BXwV1WfktzlHyxr4bL1O7DdN%2Fmk7ILHvGEOFiC4cZV1CXnH5AAGfwfEanesPpTNumZcV8SzXuCjhESy28LC%2FZYv5QyYaiCnCKq91iG8WeEyLblStSvo0ZNme3NK9ZF%2FtCJug4cPw%2Bz8jIgcVIGoAGSH349wqB1P6wfxvHiyvZfa7jm9N7Hn4QA3El14w8kOaLFPi8Q6bMA7FNrEr1Xk2g1Bs5Wv5IKWfb%2BJIWUhxetxMXgaBbGfRPr3wu%2BTDuzLm%2BBjqkAQEmU0%2F56FyCogjqwFu2YEMVbLq0rURb%2FR6StFdaORPnb1L2JDdvx5HcGyLzVKtua7M%2FaIrpDWx975QFPf%2F75%2BOAvnwa4zQPX93fNbitbVfRurH7ugrLyNTh2jCQRC8dzZ317L%2BZUAm%2B0dBz%2F55ZfpkIhyg6WooQ9B9QKn2HObh6yuoz%2BGCEodDlh24fEkAies2j9EYVCoF8Br5M3MyIpJvJST2W&X-Amz-Signature=f9e3057b9d82d95cbb668be828d63458dd90cf4975f4a49f5eb616a1f8cf01d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
