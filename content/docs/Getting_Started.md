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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJCX2PWG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICmUXrea21biKXiajtNAu%2FFU9%2BQQQm9goKo8ErRSnApRAiADwWWyytwF4C3E%2BDrVVMsULEimKGAGdQymdCy5dLeBiCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2I1aIEkxxKwiEyVuKtwD2YmgRPqKIPtlXgCAM0dGamTwmpXOhlovKXGMO0j8RjSIwZmYuqU6VNf477j4th470gj7cO62e4xChaS8WCpcR2pOu4LguNz4f5GrwFl3An8mw68H1eUjxpUVX6%2FEvo4hZ6KoQYQ27wBnUlvOeoFgnyAa%2Bw6S0cEF0%2B7PbPin82dgSbluvN%2FaSaCz81WkCRVOhULEdBTsqzFrC4OogQfKuDjbxAAIy2io04GX8eznVfO3e7m%2FzQ4ug3LMinrIgV8AkknJ180J7Yk%2Bu7oy4yPBphPgfaH%2Bu8bvdHWICl1ZpnkvdIKp1yjtmAyAe5QRYEFL3ccgFeAIbBiq9ykG7BYBsv3GbDzo9AxUyulYuXT7DDQo2FnSsL13DIlOU2MZ3oR39EfoKKBxf9kvHNZQeZYmMyLTxcTkvAoM%2FWZFK4MJZR3fYSmBsZdRrzulE%2FlbJEcG21%2BhxPOKhOUvn626JItHJQ%2F7LspHO237Giq8JmEA82sZlWj4kB2xHKFK7jsqtyYMsJ%2FgD0AeJie1x1icZc%2FYSWuVToobufBytc5hRnYhlYxka3Q7EPffdYQqHwZhfd9%2F85QemxEyJg34v6XT9vseHqc1NrMDdVvmw5TaRn%2Ft2jL5P65XPZokc0%2FwthQwzsi4vwY6pgHSOkiBicCKBiYX1F3ES6LfdrnB%2Fc762oGv%2BS3by2J0a0WcBSSVntTI2a4nQXGzl5oeb8F9WwXSdF4ClimXiW3l%2B31BxQKMDfLbnE%2FAKVEAjkNPbijquEWpuk8Jn4pXkRzan%2B5x0rZS85yjjqahfpKZFOTtvi9PfCgU8vTNKPQ3ym5ElHhFLwbbeULkX2S0shTSnyPHIex1cdbJ4SdThP0NztVHS8Ba&X-Amz-Signature=6cf233c058e5f3f533dba8f5e06e01148b39d0abe7db7dbb1b472f91ff01032e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJCX2PWG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICmUXrea21biKXiajtNAu%2FFU9%2BQQQm9goKo8ErRSnApRAiADwWWyytwF4C3E%2BDrVVMsULEimKGAGdQymdCy5dLeBiCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2I1aIEkxxKwiEyVuKtwD2YmgRPqKIPtlXgCAM0dGamTwmpXOhlovKXGMO0j8RjSIwZmYuqU6VNf477j4th470gj7cO62e4xChaS8WCpcR2pOu4LguNz4f5GrwFl3An8mw68H1eUjxpUVX6%2FEvo4hZ6KoQYQ27wBnUlvOeoFgnyAa%2Bw6S0cEF0%2B7PbPin82dgSbluvN%2FaSaCz81WkCRVOhULEdBTsqzFrC4OogQfKuDjbxAAIy2io04GX8eznVfO3e7m%2FzQ4ug3LMinrIgV8AkknJ180J7Yk%2Bu7oy4yPBphPgfaH%2Bu8bvdHWICl1ZpnkvdIKp1yjtmAyAe5QRYEFL3ccgFeAIbBiq9ykG7BYBsv3GbDzo9AxUyulYuXT7DDQo2FnSsL13DIlOU2MZ3oR39EfoKKBxf9kvHNZQeZYmMyLTxcTkvAoM%2FWZFK4MJZR3fYSmBsZdRrzulE%2FlbJEcG21%2BhxPOKhOUvn626JItHJQ%2F7LspHO237Giq8JmEA82sZlWj4kB2xHKFK7jsqtyYMsJ%2FgD0AeJie1x1icZc%2FYSWuVToobufBytc5hRnYhlYxka3Q7EPffdYQqHwZhfd9%2F85QemxEyJg34v6XT9vseHqc1NrMDdVvmw5TaRn%2Ft2jL5P65XPZokc0%2FwthQwzsi4vwY6pgHSOkiBicCKBiYX1F3ES6LfdrnB%2Fc762oGv%2BS3by2J0a0WcBSSVntTI2a4nQXGzl5oeb8F9WwXSdF4ClimXiW3l%2B31BxQKMDfLbnE%2FAKVEAjkNPbijquEWpuk8Jn4pXkRzan%2B5x0rZS85yjjqahfpKZFOTtvi9PfCgU8vTNKPQ3ym5ElHhFLwbbeULkX2S0shTSnyPHIex1cdbJ4SdThP0NztVHS8Ba&X-Amz-Signature=3c00257f02acd3c6f2644e3a771fd4c2df32ace76ab312f1caac1a7ff59ebaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZF6G7C%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCtINTXOvjqEm1XxEUZZ7vuBVgrDk7IUvsGkdGIGSIn1AIgM89ExldxmOaU%2F5VwohuFFFbz%2BC4MW0N%2F9BNLYvJxpIMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGDZr1jL3g2esmZtCrcA3slvkDg9ipXKzKY3JXNDyHTEHZq219Zj09E2TYnMVgqt2z7yJkg2KT91LN5bH1CJnPK%2Bme4aTlmURBzK4l6O8ZaEowHgcE4sEB3hRjfCrC%2FtPNXTYbVDthq2uf7F8nzN2kLTtRo%2BHNJXmcrScK%2BKD2jiLoYIm9f3Kurx1eAyFvNR38VPX%2FDyYz45G%2Fo0NeZYs2uHjWZRuXsC1D9KOxtdPfRpSD1dJ8WYPm7TU2EXW0DurWFGDl%2B4aF2WpKnZHh2oMuM%2Bs3sCdoH28sgOtVA3nNhRrk%2FUxxgiAA5xHo4jV5dy8WijcokWQBg0LWa4dvCICkP5aAcpQzRuvjR1Bu5Htc%2BqxOAZ1lwTEMKf9EZ%2Fc2yW%2B3xqw16ji5X54L%2BY8l4IoFB9uNHkakpwlLchhR8hzXR00fPHSaN%2FHU94xO2fuzLdmBypYqvzJkLO6MhtEcPFuQR9tXBoLxra%2Bch3%2Fknd9TbyFIG0UGWkalwl4J0vRVBA%2BBWBHH%2FqX0Q4nJBKVWByMuS1gOfYD9e3OOY7GEOGoDTR%2B75TpV9n4QHsFn6w8GT5CkbTdwg0W2aK23WPXYksW7BT5kWRtA4vzsoFUGaYwrieXwPB1dLqLXPSXoDuNjO0kjJ0G63%2FUDMrLNwMLTIuL8GOqUBP96wX%2F8Th4EOEATU%2B%2BlFnKN0vL1GQptxkDAaOsmUdIkvQrFZ3GLOwpWp%2BbMl%2FT27gBED1FQsVQ0x5gTHME6oCmE%2Fk8a%2BYUuP5DGnMM%2BJECApPnbWQ37kMpaYcNmYLA2bd%2B7gh5N3l4XtMdyB1GgJVubOiFxzvwCt7r%2FZR7VVBQ5ij8nJee8FpkN1VPw9rXxeNmOUUBXNQTygMI%2FtCmn38Pg6W8FC&X-Amz-Signature=a76ae6fc9feff996f0e328c5cde38eb459d16bed63b1a84aebeac95058aee076&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSW3ILS%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSh34zc%2Bnzgb5Iz5%2Bum5x%2BLMRMfML%2F2czLGoQ0C42CLgIgDudidyWPQZX8Ztio3OSiIC07vEu4GdPhb%2FpSi3G76%2BAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzDLKrL%2BsSCRdHEwyrcAwyhTtaScNbVbcuLMW%2Fagm2IcIHMO09%2BC8YfS8vyOossKv68j1hGLalGyVInCV6R%2BQ1QysyWLkFu9AeAOy%2BXoi9mmGseJnW9vY1nOQmqg2%2BlSmJuD6fTu%2FB96qd0P2GZLEwCxA6Vl9xzndbaS%2Fojdx2%2Bt16oiJ%2FxNrWEh%2FKX3YHozvpHFnXC9WCiuqiR0X5dbc3yesiVnV3xX8dA%2B%2FSvDGxvxlOeZe52PjpO8pskiUC6pxcXlMwqXxix3N7GCK2z%2Bn6VBnaG1znysNs4wSTt4r7yWCr2d2Jdl6QaHQBeV2O%2FiGeSADSbTJ2bLKMP7lO9Bt2d%2FXdTwujG1hzH8U9X4x5XojaLQ58CyYZuKKA7FEGbmo5VUeGDPSG5ve%2FzIJ%2BMBnLi29KEXQujbNeXaiYp3fHDJxQFubh%2BWXeYjWYuVluT5WVcZddg%2BmSYNfuQeP4o9p1gq3OOH%2B8pSdVPtfhymL9LVQwtciQHxKmdLjOkeIpTIUD%2BkF9pe1z2pyPAqzqRdPIg4UE0XA5UNBKPtS2infNi6YFFIu0AenL7yXYDla95LImxEllbRu4Vyk06IsWX94LE244RhP82OgcWAnb4JjQbya%2BTzzjnyH%2FWEdjawSYVEHWcql%2BQBoT0QYzSMNLHuL8GOqUBTCkA%2Fm8JlkfhHYMgM49RimISpndUEDWQsL9J%2FCtr7rP2AxxXl7daf%2BWHKPDU0FrM9OdSkLAdraI6Hts7wv57GUO6V9xnG4FN0rjtGVGXeOoJmaFxJIBezwuUg8VE46svjh0pwer1oVNuMmroF564NMTRzHxySHOH3T4rLriqiU6yevdE1a7FJgZ0YC1XoJHZHfN7e9GMivsaT4z4XMTpzLiHPE9A&X-Amz-Signature=762f49bf0b2e85a8ef25b83eab99cc13a98850244c30ac22a134ac43eb608cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJCX2PWG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICmUXrea21biKXiajtNAu%2FFU9%2BQQQm9goKo8ErRSnApRAiADwWWyytwF4C3E%2BDrVVMsULEimKGAGdQymdCy5dLeBiCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2I1aIEkxxKwiEyVuKtwD2YmgRPqKIPtlXgCAM0dGamTwmpXOhlovKXGMO0j8RjSIwZmYuqU6VNf477j4th470gj7cO62e4xChaS8WCpcR2pOu4LguNz4f5GrwFl3An8mw68H1eUjxpUVX6%2FEvo4hZ6KoQYQ27wBnUlvOeoFgnyAa%2Bw6S0cEF0%2B7PbPin82dgSbluvN%2FaSaCz81WkCRVOhULEdBTsqzFrC4OogQfKuDjbxAAIy2io04GX8eznVfO3e7m%2FzQ4ug3LMinrIgV8AkknJ180J7Yk%2Bu7oy4yPBphPgfaH%2Bu8bvdHWICl1ZpnkvdIKp1yjtmAyAe5QRYEFL3ccgFeAIbBiq9ykG7BYBsv3GbDzo9AxUyulYuXT7DDQo2FnSsL13DIlOU2MZ3oR39EfoKKBxf9kvHNZQeZYmMyLTxcTkvAoM%2FWZFK4MJZR3fYSmBsZdRrzulE%2FlbJEcG21%2BhxPOKhOUvn626JItHJQ%2F7LspHO237Giq8JmEA82sZlWj4kB2xHKFK7jsqtyYMsJ%2FgD0AeJie1x1icZc%2FYSWuVToobufBytc5hRnYhlYxka3Q7EPffdYQqHwZhfd9%2F85QemxEyJg34v6XT9vseHqc1NrMDdVvmw5TaRn%2Ft2jL5P65XPZokc0%2FwthQwzsi4vwY6pgHSOkiBicCKBiYX1F3ES6LfdrnB%2Fc762oGv%2BS3by2J0a0WcBSSVntTI2a4nQXGzl5oeb8F9WwXSdF4ClimXiW3l%2B31BxQKMDfLbnE%2FAKVEAjkNPbijquEWpuk8Jn4pXkRzan%2B5x0rZS85yjjqahfpKZFOTtvi9PfCgU8vTNKPQ3ym5ElHhFLwbbeULkX2S0shTSnyPHIex1cdbJ4SdThP0NztVHS8Ba&X-Amz-Signature=ce044bf8f34c4db88d2ee424f77c7e83b82b26455f574d00420580b0f3f228cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
