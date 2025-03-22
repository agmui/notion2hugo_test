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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWEVZ6L%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCeK0zODA4fhs4XrQ6MpHJuui6A%2BgbiDqlH4OGZBH1HqQIhAL0ACnXRBJ7L9mXzzvP8zuJDUKChC2JScxWQ1n2AcHLUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFG4ur7PhGLwguwbQq3AOzKeiumzkk3EKCR0Yj8H6QYCIC8lHnFyI6ddBsc5SxFX%2Bu7qk4PoNnzAjs0PivxJhzCjVD3NLt2DovvnDWVw3g77P5nqIRUGtY4fFA%2Bgko%2BdPH%2FyTwOuwws5rGhdvVF6bWjw4V9zIx8XkRYw6Ko8Wam8fV7YpkZMw0WPoYLcYcIlW5GDkGxt5aW3tCcQrLIGDeRFKzrNnIQGwY16jsaxps85GX2iSlV8rzVvH2Ynrnw3FaaJ%2FIHxdY0rERgyxzhJ8GkFOiw2OVZxNu6a1PZkRcfysfWegAUzDSIlfQ%2FmjqYk8A6csjqf%2FAy6hJUbS9gj6cKMdbctDJVz4E2nq4m78se6uYQ7NGH7Q%2FP2FroFEl5SEqsRowocjefi7OFh2N1%2FjQYPGj3BvrDj42jrSj737T4d19sUsn59EBRHY7CS9FdVde2R8ll4Q976c0LpkCKUp4BkRtftITORoEqQcC6iaiFuMLKiwN7F%2BWmvJZOVNr94lZ8sUHMCYcG489yyXlzrXHowLB2BIBc%2BnLTcGEObmSO1%2BSzBfG6otO%2FwJQpsYhIT0TqC276cUUlCHfgO6yXf6kaQJXstIF1yrKawg2TOnZWUWCOc6Ko71vhqCQVZCYdkumXJs8q8IvCCdfvzDI9%2Fq%2BBjqkAbQEhMSwGja3tGI7iUaAdvScp6ThVTSoFp6GQ8mEJWPlEQymwE4wxKdcmRT7t6afC98rwBR1C4kfpvIV1wP7DKEuZn%2FhWTFdu0AYNzlmolKJ8aIPbYMJi%2FihBZrI0eg0N%2B5Ztkb4RbwgSKVPccGojvC07ReimMprzJIJWM57RBErvxiMs0I2z93D9VNbbLodg97F6DBvZimFw4VAX0GDN%2Bkwl07i&X-Amz-Signature=41813972b4eda203ac05f9b1ade23d9ef37e898ea1fdcf773906f1255a9adf5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWEVZ6L%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCeK0zODA4fhs4XrQ6MpHJuui6A%2BgbiDqlH4OGZBH1HqQIhAL0ACnXRBJ7L9mXzzvP8zuJDUKChC2JScxWQ1n2AcHLUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFG4ur7PhGLwguwbQq3AOzKeiumzkk3EKCR0Yj8H6QYCIC8lHnFyI6ddBsc5SxFX%2Bu7qk4PoNnzAjs0PivxJhzCjVD3NLt2DovvnDWVw3g77P5nqIRUGtY4fFA%2Bgko%2BdPH%2FyTwOuwws5rGhdvVF6bWjw4V9zIx8XkRYw6Ko8Wam8fV7YpkZMw0WPoYLcYcIlW5GDkGxt5aW3tCcQrLIGDeRFKzrNnIQGwY16jsaxps85GX2iSlV8rzVvH2Ynrnw3FaaJ%2FIHxdY0rERgyxzhJ8GkFOiw2OVZxNu6a1PZkRcfysfWegAUzDSIlfQ%2FmjqYk8A6csjqf%2FAy6hJUbS9gj6cKMdbctDJVz4E2nq4m78se6uYQ7NGH7Q%2FP2FroFEl5SEqsRowocjefi7OFh2N1%2FjQYPGj3BvrDj42jrSj737T4d19sUsn59EBRHY7CS9FdVde2R8ll4Q976c0LpkCKUp4BkRtftITORoEqQcC6iaiFuMLKiwN7F%2BWmvJZOVNr94lZ8sUHMCYcG489yyXlzrXHowLB2BIBc%2BnLTcGEObmSO1%2BSzBfG6otO%2FwJQpsYhIT0TqC276cUUlCHfgO6yXf6kaQJXstIF1yrKawg2TOnZWUWCOc6Ko71vhqCQVZCYdkumXJs8q8IvCCdfvzDI9%2Fq%2BBjqkAbQEhMSwGja3tGI7iUaAdvScp6ThVTSoFp6GQ8mEJWPlEQymwE4wxKdcmRT7t6afC98rwBR1C4kfpvIV1wP7DKEuZn%2FhWTFdu0AYNzlmolKJ8aIPbYMJi%2FihBZrI0eg0N%2B5Ztkb4RbwgSKVPccGojvC07ReimMprzJIJWM57RBErvxiMs0I2z93D9VNbbLodg97F6DBvZimFw4VAX0GDN%2Bkwl07i&X-Amz-Signature=27cbb199f47aaed3268460a4c0469193c5540f7b7b4e7a3e304dc4753eb78a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYXB32W%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDPOvSIeUMBAcTYyYDii5uXi56GaOauWb1cij1ufNXNdgIgOOECSPDZLr2XVE4jB1Pa%2FOnm7sNVL2LhuiXFP6RqoO4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtww6hyY0AiD8ckmyrcA1U0z71rIlE8jwRyH77bRIUbofai3JT1bXWJMJrdNmYa7L8Ymct15SkIn7EXN7bXZDzeMJWw7jgoXj07IY%2Bt9da2Ji%2FIkbubAE%2Fwv2cjeqlLPUjjU815KGCNSY6J6P%2FcUeODh%2FXu8eSvoqMGhQvNNWYQosocx4HZ%2BSGxjDE7fWh1Cenl0fh6xAEXdkvTasQ%2F0Rx9sBcCcu6nyF2HkhC%2B9UY4bGHBYaW6W9IFTJZFDz0VzvOtwp%2FEjYWNN6s2%2Fx7Zl5DG91YwQ%2F1RfXY%2BLxEUeGmbCYGaitEx6yfaVNxXEsDRjS7LPF8Ayec1ChFnG%2Fdrgoqw2vIz35UiJ8ICIpoWMuUPvs35SzYNuHeQ%2FFt5iC1AFr5ys6o2RdqpjbESi846txDHfXmuimDI9L9sJbTg3guor2c8%2FZbvg7UJ35V2vGAsv%2Bbqe%2FiALcSZdvL4Z5nYnWc9Aia2gmEr0YUkJhhoU%2B3GMTlNy7KELN8arvQ2OtDGjc%2F7Ji47uZ7ylsNhGDXUuqdm4N0MawAOvlmwG8dUjeZeho39kiGRNI6t9GpIoe0PGc2dqv2SCaO4yWuL4TpiL%2BwsgqnOrvADLN4efAP5TbtWJ4jBWwUYAKlEhGsfWYaHRd2hbyzUENYUi4t1MIb3%2Br4GOqUBXe6gehL5XDuPGlQqSVTGO4PcLDs0CVD3ZBDqegJHB6FlFq9hkZVpRHqHvYu4Hx1RTnFeY%2FNuAw3I3yu%2BZuXdUIucf830HPrXtrHJNFtrz%2BQ0WtqUnPb2P1IbC2ne9cBwXHLcVJgOtBoqIKlIEC%2FrUChDeNQMHZRl%2Fc5ETyOP9ETgQ5fjDhQoOv5Sfa%2B7Pplr4KJHFGXmmn%2Fud%2F%2F7bA%2BkNObZVcqW&X-Amz-Signature=70896579e469f785175df094ae0eb98eaf938dd76ef33bca73dba965cbd3241a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLNMLHF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC8ipgdeTPM9xCpszccmw%2BAcVlU2G5B6F2l%2BXjZYSOe6gIgZEvbaRS4NU%2FXgxcHi334u5cuyylYKIUiZVDD4MzfsaEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKt56eoIGHZo2A6saCrcA7Ve%2FQc1HXqpwtnPkIPx631Ud0NGpsQyM9IsQu%2FQuhluAFvZlo1hRtIyf7ve%2FymbGIssDr5scnezMaXvXd4sBmqVK5yD%2FWVqY01V6cbHiDfmFCw%2Br%2Bo4YVQucEyC9SQ%2Bwl8r41TCjJnLUDL3yoQ3BqXedOKsPRcrA1LIzljYpQICYt2oeXMWPxFSUURrzOBLNIhAXgzMM4tm1nbPKvlN4%2FxQCqK28ljrB150dpzgKD59klkeUfWT5hIXKqs0yrlr2q%2FTeMt3EK3kMsh2tHhVZD8BF1LquBvb2zKoUCcsZ4rIIuZdN1R321Hbo0ZR15htDijnLxLJgpBBaUA%2BTsxW%2FjXMGB%2F%2FQ3V%2Bab63%2Fy0IRxhlztexi7oHIKWxgG%2FmeX9EbjPVW%2By2AVXQlj81augbpVfQPpAk79gqY%2BUem2CwcfnRb7w518Qfjqaa04dzAk7LKDDHGvZTndaT0quD%2FUupn638LMsa8%2FKfvuCoCsW0PH7SxiBMFSaHdnQd3ch46ehfyABh8NetRNKanH5EMtxpbZBHlE2TSQBTmB6zWD5qCPSq3Godx%2FSi4GqoN6rsKHgTdUmLQTwcpPgkw1Mi16F%2FyKcWx9V6OE2BHK4gbnO48elb7%2BW78xLa2GUB4NxwMJj2%2Br4GOqUB%2Fmf2XXnCVL%2BrtbstB1ccVwE6nUTpfGNauoV9DAY4YzmtNwi5kVKZ7fjWc8HZi2%2Buoevq5IGpEGrQ71kmU6kLvBwFRyk%2BdK9mjRBKj1ew6BlFVg1GsCF%2BzmpJpLijcoDPJeqStKtmJYo68hi2%2B4bw6ovpxobzjeFOAAC4%2F4%2BO7YX8zQbFirGnGU75IGfE%2B78%2B4y74p%2Fj6f2xwyK6I44Qu1Zq7LEVn&X-Amz-Signature=efe182c495d24eb5c680e74ac4cd5b9f232ee0eb7570df9abc2579f87764a614&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWEVZ6L%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCeK0zODA4fhs4XrQ6MpHJuui6A%2BgbiDqlH4OGZBH1HqQIhAL0ACnXRBJ7L9mXzzvP8zuJDUKChC2JScxWQ1n2AcHLUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFG4ur7PhGLwguwbQq3AOzKeiumzkk3EKCR0Yj8H6QYCIC8lHnFyI6ddBsc5SxFX%2Bu7qk4PoNnzAjs0PivxJhzCjVD3NLt2DovvnDWVw3g77P5nqIRUGtY4fFA%2Bgko%2BdPH%2FyTwOuwws5rGhdvVF6bWjw4V9zIx8XkRYw6Ko8Wam8fV7YpkZMw0WPoYLcYcIlW5GDkGxt5aW3tCcQrLIGDeRFKzrNnIQGwY16jsaxps85GX2iSlV8rzVvH2Ynrnw3FaaJ%2FIHxdY0rERgyxzhJ8GkFOiw2OVZxNu6a1PZkRcfysfWegAUzDSIlfQ%2FmjqYk8A6csjqf%2FAy6hJUbS9gj6cKMdbctDJVz4E2nq4m78se6uYQ7NGH7Q%2FP2FroFEl5SEqsRowocjefi7OFh2N1%2FjQYPGj3BvrDj42jrSj737T4d19sUsn59EBRHY7CS9FdVde2R8ll4Q976c0LpkCKUp4BkRtftITORoEqQcC6iaiFuMLKiwN7F%2BWmvJZOVNr94lZ8sUHMCYcG489yyXlzrXHowLB2BIBc%2BnLTcGEObmSO1%2BSzBfG6otO%2FwJQpsYhIT0TqC276cUUlCHfgO6yXf6kaQJXstIF1yrKawg2TOnZWUWCOc6Ko71vhqCQVZCYdkumXJs8q8IvCCdfvzDI9%2Fq%2BBjqkAbQEhMSwGja3tGI7iUaAdvScp6ThVTSoFp6GQ8mEJWPlEQymwE4wxKdcmRT7t6afC98rwBR1C4kfpvIV1wP7DKEuZn%2FhWTFdu0AYNzlmolKJ8aIPbYMJi%2FihBZrI0eg0N%2B5Ztkb4RbwgSKVPccGojvC07ReimMprzJIJWM57RBErvxiMs0I2z93D9VNbbLodg97F6DBvZimFw4VAX0GDN%2Bkwl07i&X-Amz-Signature=ac99a6427274513a169e38c7bdfebf2ba809ecba047ca91d32b6002f0e969b19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
