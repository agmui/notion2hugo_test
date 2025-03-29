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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEL6TRQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAzPxxa9uq%2FRC0dqLws3npSYi0zpgFTvt%2FQLVq%2BcyZUqAiBXtIjf51FemUen3NXGpACTjfpwQV67trmQqX1P5%2BQL8Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMSfr3g4pbmzwD7RnbKtwDGU4ExY6uhyht2AKhPiS4m1XhMKx4i5fHGSvKSysD08jrRYDQtb0EeAHqV6M2J%2Ffwm8khpN7LjuHxvgXDvIboD5DAmVfBFTqbOIx1JCACuHRVyM3oC67H8QgpZsEUkoMSkNQns9pxD5Xdr7zu18JxXfWY5E39Ds0eUx65OwDOkLYC%2F1JCSrwCn7BSa%2FS8h4IHOlni%2BUW0kH%2FFXvMqM4RxKxA6594BTVUBD1U0nQcGz7hcjZ1jakOAm%2FiESE%2FjNiRP0EqM%2F5omYHPuwGupXFcwIpEd4H1jWhwTxU2SjC9b0%2FLX0DPUtdwVVIic3RnU2zo7c6tHhPoYT1%2FKyY9lnU%2F9U6BoNFmfbIEI9GMbIHsEUqlrfFTfxu2B9%2B2gL8wHOWAnX6JhnAxQ5e7rlcdevs3H%2BS3kKsB6ei15gRQyoLK72vbiZXi3%2FMn0Nw030aaKxBy1fF2GMSaBjAdr%2BgCh496kdwBdrWjBG4%2F8I4AA2u%2BwpJ8UrM8ieUzLVXaR5%2FYDHFu030Yva8pDYWQHCraeK%2Fr7PfBUf2lSBmO0%2BG3As%2Fn845XZGUTioOKwQHDsZGgszG0pL46HnprVijj5CrRFdEXM7KKutN3tRfvSnIfPC5j19yiu1qVp44%2F8N3HDvnswjrWfvwY6pgHFxNehpoRgyiLBa0OiQGtMLcgQ9uRjG6wvfUWcAOnrsnIESwHVY0w1pydKX1ZLF7AYCzThlm1y4uuk%2Bkx%2BeIf3%2B73bhsqxf0yGJey8CJ49a3vZiSTvw9lFHYMx1QP3us7Xj5yoGCUhY2bA1ZEdyuOGvZDIQZqyIeuvV%2Ba98V8OFuEneVAzzcBqTUQBITPW9SUW4WryYigtl5NNnnaZQIvcWn3T5Wr%2F&X-Amz-Signature=8e14e124a73ae6626308ffa399a696b70acd80498a609eb283f52528e4431229&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEL6TRQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAzPxxa9uq%2FRC0dqLws3npSYi0zpgFTvt%2FQLVq%2BcyZUqAiBXtIjf51FemUen3NXGpACTjfpwQV67trmQqX1P5%2BQL8Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMSfr3g4pbmzwD7RnbKtwDGU4ExY6uhyht2AKhPiS4m1XhMKx4i5fHGSvKSysD08jrRYDQtb0EeAHqV6M2J%2Ffwm8khpN7LjuHxvgXDvIboD5DAmVfBFTqbOIx1JCACuHRVyM3oC67H8QgpZsEUkoMSkNQns9pxD5Xdr7zu18JxXfWY5E39Ds0eUx65OwDOkLYC%2F1JCSrwCn7BSa%2FS8h4IHOlni%2BUW0kH%2FFXvMqM4RxKxA6594BTVUBD1U0nQcGz7hcjZ1jakOAm%2FiESE%2FjNiRP0EqM%2F5omYHPuwGupXFcwIpEd4H1jWhwTxU2SjC9b0%2FLX0DPUtdwVVIic3RnU2zo7c6tHhPoYT1%2FKyY9lnU%2F9U6BoNFmfbIEI9GMbIHsEUqlrfFTfxu2B9%2B2gL8wHOWAnX6JhnAxQ5e7rlcdevs3H%2BS3kKsB6ei15gRQyoLK72vbiZXi3%2FMn0Nw030aaKxBy1fF2GMSaBjAdr%2BgCh496kdwBdrWjBG4%2F8I4AA2u%2BwpJ8UrM8ieUzLVXaR5%2FYDHFu030Yva8pDYWQHCraeK%2Fr7PfBUf2lSBmO0%2BG3As%2Fn845XZGUTioOKwQHDsZGgszG0pL46HnprVijj5CrRFdEXM7KKutN3tRfvSnIfPC5j19yiu1qVp44%2F8N3HDvnswjrWfvwY6pgHFxNehpoRgyiLBa0OiQGtMLcgQ9uRjG6wvfUWcAOnrsnIESwHVY0w1pydKX1ZLF7AYCzThlm1y4uuk%2Bkx%2BeIf3%2B73bhsqxf0yGJey8CJ49a3vZiSTvw9lFHYMx1QP3us7Xj5yoGCUhY2bA1ZEdyuOGvZDIQZqyIeuvV%2Ba98V8OFuEneVAzzcBqTUQBITPW9SUW4WryYigtl5NNnnaZQIvcWn3T5Wr%2F&X-Amz-Signature=31dba5f762fe4134e08cb4a280aa74936c0de1e39fe602c13a0a51d66f0c9eea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMOHTOL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDRsBfn6dWwOWiyLn7ovR1N1Wkhdhamo7X73OitE0D7lAiBB2gHhxNteaXVvXF1pNHbF9JcZeeU7PVqZecizIJjLhCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLrs34EBn6Bd00GXIKtwD41ll8F68EZylUGDL3JSRjFIIDSp%2B%2F5d%2BAJv7VC79oQ%2Flui14oscw%2BnlCe0tNltxC%2B38USeqPa8wzlsC9vrPGtDJBzvMammt1yEa5pZ7AfQhShDd8Y41h%2BECVaJDKpUrQABdi1Fp2l%2FQ6DShBHvGNr%2BObCDy1rLdmvh4snh%2BpwelaGe%2BEOgrlc2JOD90PLdXtiQdIs3bNqqEtuPCgO3txjzCWwPm28f7%2F%2FYEw2l17CSV4ldaoz2QEcaYIUH1q%2B5JzDdKftaU7E0EVRdLhW7%2B1yLl9NL1GbXP7OUImCCEN4Devutg2aLWN8lSj4tjdFDmUzN4H6wZirENdUZbn0auJl%2Ba9Lu3Xa9%2Fz%2FyEKOxpjGh%2BYBNcqLSQmknZRJ36WYrvnq8NZ1mH%2FuIPmaYuBevUhQmOAFO%2FqA8R3F1J197%2FsQHpObRWa3pxizKd2HfDqG0u0Wy9Msbsnl%2FsjXDFCMr80fq0WtLPGWYVEG42dZqj%2BdR9tF6X6Ss81IaMtGUSqGUzxv5Tran7hAJMF5dicQ5SThIwZwc5S9l%2BVx8fJLDpx%2BASim5wlmWrfwQaE5BmpR8xskyb31LLKBje3AotOQAsxvLayd7D73akgybDzb5iHpAydYMPLX97bK1gVAZcwlbWfvwY6pgFttLnMk9NgzEayCcsTn0Ffv5KQSuMkwm7wMf7AR3GlUr5VgNfiFnPlx0YijnWdnELZ4RdSJJ%2Fqbt%2BofZfZjpXY676ZkMdg7ULKzUM1I1D%2FvqWJKQ5T%2FeiKcOZtzLmx151SfBBwib3Gg26vbQw4%2B%2BDJhqNiql2cUQs6WkjXj9yAy7uzEKNFmKYqrbEGajOJKdLQWepuipSdEDMepWiSL2Y3C4wuuoYS&X-Amz-Signature=daa523335ec689d7159759548bbede9158db8d1cd0ea1905fa2a06cfc6f134a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHQW4FGC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIALdILpbnc9yKGOnEScJqsxO2%2BlCSaCU%2B0vy3LPqKnERAiEA5EyUo6nbwXgETyPYqVQhj5CzWRNz5QVJ8eclFM0cIREq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFNVfXZJE5JN0d%2BsoSrcAzivQYQbd%2FXBYEvS7nGGxJAvWbPDMaLdyNMyaZTdQ5TWz%2Fq7pZnL28cdhtu4tPbY7Y76w59SsA10NLTtyzCpOi0uVnR3oP9MINGBONp6%2FAJ0TPLb0NhMTrsNFnUy3KmpvMlMe1JmEnzCLb1Qb3TqGPd8%2BSii8Jzog2CotN6DStmpyyt1MbCAoD%2FVVJtF1XCQ0%2B%2BmH%2B7tACcMaRDKOh%2B5OkWWTg2BIENfLktcFpqDKvQVAuwHwtticfZS1jfDBJ9W4YgjZWuUXUIWU2mb3KC%2FYyMT6HMj%2FPdpJgXI%2FQ8vhl7fBb%2BqSAsct3ABYd%2Fwcw%2BvvsaQtT2aMx2rDBCHhnGW1PP%2BCsQCpjxAjJCmzPMBvX6rEVbd6TeAEetASX2o5PmyFPZRHvGqWd%2Brpakq9Tzb6cRw%2B1AboXE0BlJTqOI8iQppN5Zm978coM7u432X3lBiOc7kzy4vuRJ9yypbklcThD0vFMkDABWPg78xY0CxEbWp7sEg5bL%2Bd5m7mNQ8BaIJyctEVBy6CAQ5VdQKSHTaUgbxsjwc8Xt8c7IC4O6OEakT4W2ht7%2Bse26mLE2U9d%2FKxD3FPFZtypm%2BB9AHEsQw%2BRHDJhNOqtBxL2Dh6q5p6iuY7raJ1GJNTr1YXh5PMIG1n78GOqUB3vYedi8GhvnON1B0sQJBz7bOvWe94DOmo5S2kTGtHw90Plx9m0XzkjVKU0a859LIP2o2%2Bt1jm5%2BwDWoO8EZhMoG1L6FpsR06ga1n%2FpBE9aZ5kDViXewW2oa91mv%2B7HpwSsgrAolZdnXasz0hD4cMR%2BWZERNM7%2F3h9ELqQJhnays0xUnXoq5w0rj5n100W21o4%2B0e6lYW1JAopXZXJtNVyMfI%2BPSk&X-Amz-Signature=959b5752f54a5226eeee173e9629c3680c95adc45f2ebe66497dd90706d0c086&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEL6TRQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAzPxxa9uq%2FRC0dqLws3npSYi0zpgFTvt%2FQLVq%2BcyZUqAiBXtIjf51FemUen3NXGpACTjfpwQV67trmQqX1P5%2BQL8Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMSfr3g4pbmzwD7RnbKtwDGU4ExY6uhyht2AKhPiS4m1XhMKx4i5fHGSvKSysD08jrRYDQtb0EeAHqV6M2J%2Ffwm8khpN7LjuHxvgXDvIboD5DAmVfBFTqbOIx1JCACuHRVyM3oC67H8QgpZsEUkoMSkNQns9pxD5Xdr7zu18JxXfWY5E39Ds0eUx65OwDOkLYC%2F1JCSrwCn7BSa%2FS8h4IHOlni%2BUW0kH%2FFXvMqM4RxKxA6594BTVUBD1U0nQcGz7hcjZ1jakOAm%2FiESE%2FjNiRP0EqM%2F5omYHPuwGupXFcwIpEd4H1jWhwTxU2SjC9b0%2FLX0DPUtdwVVIic3RnU2zo7c6tHhPoYT1%2FKyY9lnU%2F9U6BoNFmfbIEI9GMbIHsEUqlrfFTfxu2B9%2B2gL8wHOWAnX6JhnAxQ5e7rlcdevs3H%2BS3kKsB6ei15gRQyoLK72vbiZXi3%2FMn0Nw030aaKxBy1fF2GMSaBjAdr%2BgCh496kdwBdrWjBG4%2F8I4AA2u%2BwpJ8UrM8ieUzLVXaR5%2FYDHFu030Yva8pDYWQHCraeK%2Fr7PfBUf2lSBmO0%2BG3As%2Fn845XZGUTioOKwQHDsZGgszG0pL46HnprVijj5CrRFdEXM7KKutN3tRfvSnIfPC5j19yiu1qVp44%2F8N3HDvnswjrWfvwY6pgHFxNehpoRgyiLBa0OiQGtMLcgQ9uRjG6wvfUWcAOnrsnIESwHVY0w1pydKX1ZLF7AYCzThlm1y4uuk%2Bkx%2BeIf3%2B73bhsqxf0yGJey8CJ49a3vZiSTvw9lFHYMx1QP3us7Xj5yoGCUhY2bA1ZEdyuOGvZDIQZqyIeuvV%2Ba98V8OFuEneVAzzcBqTUQBITPW9SUW4WryYigtl5NNnnaZQIvcWn3T5Wr%2F&X-Amz-Signature=7a8d89dd37499f7b4185a700cd6d77eca95dcf86db63710cdec3f5c4a1523bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
