---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHAJWKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi31fRlWqrLZZRbvM8VqxUsykz%2B9oVOCDqTNP7T4tfWAIhANfNUq209H0VcbzEbKHLL2Hayk7sk1xI1dvwPOU1O5D0Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyaEKrBCX8j%2F0%2FvHFMq3AOqdA4VljwYkBjBrxDtdf7TnYYN8yHUMCWDD3j3lqKvxm%2B%2FIt680cNrN3PoIzYnvsKogPsqid1MXFASUOY1E10%2Bx9BsTw7U%2BO%2FkadrRHY1WVhIos85iavvlNC1XF0%2FCfBDfiobH%2FO972WcZjkgQL%2FCZBgyYlnsWk40EQUVKGEUcHqC4yfGaHTHYf18eRhLwdfFuGwJ3N5pLhkKcFGFoC0Atmb3w0hhGFKlTi5D6e3wywXgySjzj7d1ywilezYgixNvqsJChWVoC5LaJe5twf1DVYglv29bWJOFBYeTGF58CPmBy7Lwif3MGSsX5HJT3a2EurQA8JgpwsfYg78bNs9PPD4xBVXEAzF%2BNGDAx8YJmzO65BAUdUgGVEiEhCju8IQKxGZwIOF6Z7QhZuN9EkOE9%2BWLu4MHdGcOMlxCo6uPUtkKlSh%2BStpXxy%2Bn1eFbMcnLxjzLu375mud6lfyYaeCMUPkC1AAhpRRsOF8t%2Bh1ETMrlqy%2FTqTtBXnbs9SwGyoKeOkGZuPL7PbiFW6s0YMvPO9270zzxOd8xph%2FaPc24QCU6c4MiboTGji2k41M5ioYTg6gPJEHOPgfnpl8vayuKjQKUu2qjwAYzXR4dvIDBreJOqqYrJV0GOCR5GujCZ%2B4fKBjqkAdisqgXrxTgcz5Y23kebILMTkhKh8G4TLMxSP1%2Fdbk6KyKFnjvjiLBpygu1T%2BSBScJhLEaRx28NVfYaDlNGy0WSv9bZCc1GOYC3083q%2Fy%2FOKY2YR2CCP3g7YorA8JjYbQOb3qb8fj%2FRElce4QQXj1g4LPb1BL2w191uzsHrXHNwQugkfT2yWm7VHhexO%2FOoyT%2FSRNEpXUNq9oFuNIHHAGhiUWSn4&X-Amz-Signature=a41a157eb78afce2914e153657be44add3ad8f2f2cdf13911c2f8c8b026ed902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHAJWKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi31fRlWqrLZZRbvM8VqxUsykz%2B9oVOCDqTNP7T4tfWAIhANfNUq209H0VcbzEbKHLL2Hayk7sk1xI1dvwPOU1O5D0Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyaEKrBCX8j%2F0%2FvHFMq3AOqdA4VljwYkBjBrxDtdf7TnYYN8yHUMCWDD3j3lqKvxm%2B%2FIt680cNrN3PoIzYnvsKogPsqid1MXFASUOY1E10%2Bx9BsTw7U%2BO%2FkadrRHY1WVhIos85iavvlNC1XF0%2FCfBDfiobH%2FO972WcZjkgQL%2FCZBgyYlnsWk40EQUVKGEUcHqC4yfGaHTHYf18eRhLwdfFuGwJ3N5pLhkKcFGFoC0Atmb3w0hhGFKlTi5D6e3wywXgySjzj7d1ywilezYgixNvqsJChWVoC5LaJe5twf1DVYglv29bWJOFBYeTGF58CPmBy7Lwif3MGSsX5HJT3a2EurQA8JgpwsfYg78bNs9PPD4xBVXEAzF%2BNGDAx8YJmzO65BAUdUgGVEiEhCju8IQKxGZwIOF6Z7QhZuN9EkOE9%2BWLu4MHdGcOMlxCo6uPUtkKlSh%2BStpXxy%2Bn1eFbMcnLxjzLu375mud6lfyYaeCMUPkC1AAhpRRsOF8t%2Bh1ETMrlqy%2FTqTtBXnbs9SwGyoKeOkGZuPL7PbiFW6s0YMvPO9270zzxOd8xph%2FaPc24QCU6c4MiboTGji2k41M5ioYTg6gPJEHOPgfnpl8vayuKjQKUu2qjwAYzXR4dvIDBreJOqqYrJV0GOCR5GujCZ%2B4fKBjqkAdisqgXrxTgcz5Y23kebILMTkhKh8G4TLMxSP1%2Fdbk6KyKFnjvjiLBpygu1T%2BSBScJhLEaRx28NVfYaDlNGy0WSv9bZCc1GOYC3083q%2Fy%2FOKY2YR2CCP3g7YorA8JjYbQOb3qb8fj%2FRElce4QQXj1g4LPb1BL2w191uzsHrXHNwQugkfT2yWm7VHhexO%2FOoyT%2FSRNEpXUNq9oFuNIHHAGhiUWSn4&X-Amz-Signature=5d13ccdeaecf0f3ecf41a97cd8d3ccdbf7eaab7fa118191c51d6f88c5f020204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHAJWKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi31fRlWqrLZZRbvM8VqxUsykz%2B9oVOCDqTNP7T4tfWAIhANfNUq209H0VcbzEbKHLL2Hayk7sk1xI1dvwPOU1O5D0Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyaEKrBCX8j%2F0%2FvHFMq3AOqdA4VljwYkBjBrxDtdf7TnYYN8yHUMCWDD3j3lqKvxm%2B%2FIt680cNrN3PoIzYnvsKogPsqid1MXFASUOY1E10%2Bx9BsTw7U%2BO%2FkadrRHY1WVhIos85iavvlNC1XF0%2FCfBDfiobH%2FO972WcZjkgQL%2FCZBgyYlnsWk40EQUVKGEUcHqC4yfGaHTHYf18eRhLwdfFuGwJ3N5pLhkKcFGFoC0Atmb3w0hhGFKlTi5D6e3wywXgySjzj7d1ywilezYgixNvqsJChWVoC5LaJe5twf1DVYglv29bWJOFBYeTGF58CPmBy7Lwif3MGSsX5HJT3a2EurQA8JgpwsfYg78bNs9PPD4xBVXEAzF%2BNGDAx8YJmzO65BAUdUgGVEiEhCju8IQKxGZwIOF6Z7QhZuN9EkOE9%2BWLu4MHdGcOMlxCo6uPUtkKlSh%2BStpXxy%2Bn1eFbMcnLxjzLu375mud6lfyYaeCMUPkC1AAhpRRsOF8t%2Bh1ETMrlqy%2FTqTtBXnbs9SwGyoKeOkGZuPL7PbiFW6s0YMvPO9270zzxOd8xph%2FaPc24QCU6c4MiboTGji2k41M5ioYTg6gPJEHOPgfnpl8vayuKjQKUu2qjwAYzXR4dvIDBreJOqqYrJV0GOCR5GujCZ%2B4fKBjqkAdisqgXrxTgcz5Y23kebILMTkhKh8G4TLMxSP1%2Fdbk6KyKFnjvjiLBpygu1T%2BSBScJhLEaRx28NVfYaDlNGy0WSv9bZCc1GOYC3083q%2Fy%2FOKY2YR2CCP3g7YorA8JjYbQOb3qb8fj%2FRElce4QQXj1g4LPb1BL2w191uzsHrXHNwQugkfT2yWm7VHhexO%2FOoyT%2FSRNEpXUNq9oFuNIHHAGhiUWSn4&X-Amz-Signature=d4f7807686ab627dcb8ce692308d423ca7708146b6ef91d7615c4ac76304e167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6HVNWON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ElvOrCkO1513a8qALtNw09BqY2rNRmXUn5tole5laAIgKmxlBOzO8RPTzzvtmVH1RiPd2krgSVUeaCz0O2kkpyEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDALxtakIFXfmRKIQ8ircA2epwVPyxKutd8dH7PYrjHmBT9SDawdiIhkmRGezH6gHLu8GFIZfvE4k7pEKNF8zi8P5ANmGFrxX9IZFXyHOr2mrvzTa8vLK6UH4OFRZzjrw%2BihQJ1aTTOuP5U1K8qDh5WgECGMHLQmSeLS5OdimB8SADjcyo2AJS8NUIlsI3fcUiBG8IiH0auDzwUoU0O7Jz02qtfPPureS2ooW%2F16Vq0LAZKeNZwx3%2Ff1BbEjnMeDrt4gY8Nx0s8ke14rRnAxA80xse7FR3edWzKbLvwwNy0hDEwN7fLynzuRBHPZQ958WxhoIjaLR7Vd4T9Eq%2FHW83iksK928zPK6NHg4WBMo2SVVM6R6nddI%2BAzsKl2KmtXc%2BWQy%2Fockp23ZzSfY7AGCJRuuiBgsj1YY4as53yeV6AqXf0Q1bKw4yGshqFBBGtqZv4WqdWpQEIqNIUdvKRTcEAAZoT0Mq2X%2B6oIIplGuUKJn1KklYdiVg9gUNtM8AXrefyf2q1mUPRv5X3Jktt%2BPz%2BsiOTkmiNKEbmtG7gaxHCCbrKPi%2Be0u1nP6vyZyIHGwk%2FQUNidRBSqD8Q2jH8bhql8Iwwco4SaHjx35kquM63NpND6z4IsvmquVMbGl6yH23ExlaH2Y2GiaqXepMM6DiMoGOqUBe6w5juNslZ5oZKvHMgCKN6aiCteDpkYbtGLsKVlHJNDRYCouFmE%2B1t%2BHKiQmhbGl3Miefagwat8cXjQz5gSbpc0RiBuG5D%2BWhcczfDVp64lQa4lpyxooVtZDs9p4lKoNv2cGFdhIcsTd2sghFeBDJFg%2BzTLprVg4rGeaLUOEP4Vl5Rpbq0fguCONsSYRFh4ldqd8fNBVCT5oPK9jNv6XD1wI%2FFQ8&X-Amz-Signature=615082992572db75be5871d4f27edc8ee471de69d3df194c7ca4003c291086dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYPAEMU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCn8UG%2FaP5BrLQBXVeRR4XeUYGUQPt65dS2Lf%2Fz24s%2FgIgJ6pRFUDtFUSWdVw66YhMwXbPXtYR10ii8VZ5FaLtcYsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKHLtElSLNSxE%2FWOZyrcAwuy%2Ff%2Bbl8cUfEfOVPvv6htKsBL9hSxb2vQFTuceaNSVhHVyGNmy8%2FJZb%2FJX63d%2BXE37L%2F4%2FO6s9P2n7jmR0qieDvp5W05PqsP%2F8Crxc6jIdAQvFcGsTbc4lIohOXMYMxrG%2B2z1dyuzM2uunUPGIuSG7d3INIcDc0uyhv0y3QgOf6Z5Hmv8BZamE2NT97H%2Bg4flHVlGmMiyubY3M7ReIg74dtrqYvQavfXNxxQBE0FrcP6SqCRmFwHvwFzL%2Bh0EvwSYR3sSYmJ1%2FmYQqsDInw%2FUQdDbkFvpm3PLigozh7LpGI1R2p%2B8wGI890ieDKKUnELeyZCxK92CD6JQUHBWoY9fBHYAaUT%2Bxpxto%2B9G%2BDWYSTyd4rfpZ93oxU%2FDIGCtnP%2B7RZMc3Z582slFPJHPRhnGsyXbq%2Fj5TyRtNNLIizSuZkFD9RMHbslTjn%2FYS3mfkL0iqH%2BQsRiPAatcHdq4ZzXVe5vTNZ2FKJA8F9rKt%2FL%2Ft7eGcDKRuhLtWTLLH1A0LCWYORCWI5Dy3S4a6RvMfXBHv4%2B3HYdM%2FVRwP%2FSyWAVqJp8bDiGMcpVPjC7Ib%2B0r5Thv%2F2wOE2a3wpEOv9qv3kv2IQDKZ0O6L89%2BKC51%2FFYU7prB0FNgHom5LUMfLMK76h8oGOqUBf6UblFwm%2FTs4Yy0rphxQtY7TSLzTp82xyfRU2ppq101%2BbAfdUqv%2FM%2F0A7fwAlIuE3nq1gFVO66CPlYB%2BDByoRG2tL2I%2FZ8hfFNJC3krF1dzpcCXSflY0KF0vdZSD70qs1w%2BnfJdJ%2Fly7IDq%2F3H2SCxsObw1p84VnAMK2qW3xXw8IzCNur9DQhIXlpKc0AnVoblmMNUeueifpo%2BLk56dZElOg9OuA&X-Amz-Signature=a9a0e732b5a8036b4e4877c0852ff2ab779106a0dacdbf4752e986c6409be819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHAJWKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi31fRlWqrLZZRbvM8VqxUsykz%2B9oVOCDqTNP7T4tfWAIhANfNUq209H0VcbzEbKHLL2Hayk7sk1xI1dvwPOU1O5D0Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyaEKrBCX8j%2F0%2FvHFMq3AOqdA4VljwYkBjBrxDtdf7TnYYN8yHUMCWDD3j3lqKvxm%2B%2FIt680cNrN3PoIzYnvsKogPsqid1MXFASUOY1E10%2Bx9BsTw7U%2BO%2FkadrRHY1WVhIos85iavvlNC1XF0%2FCfBDfiobH%2FO972WcZjkgQL%2FCZBgyYlnsWk40EQUVKGEUcHqC4yfGaHTHYf18eRhLwdfFuGwJ3N5pLhkKcFGFoC0Atmb3w0hhGFKlTi5D6e3wywXgySjzj7d1ywilezYgixNvqsJChWVoC5LaJe5twf1DVYglv29bWJOFBYeTGF58CPmBy7Lwif3MGSsX5HJT3a2EurQA8JgpwsfYg78bNs9PPD4xBVXEAzF%2BNGDAx8YJmzO65BAUdUgGVEiEhCju8IQKxGZwIOF6Z7QhZuN9EkOE9%2BWLu4MHdGcOMlxCo6uPUtkKlSh%2BStpXxy%2Bn1eFbMcnLxjzLu375mud6lfyYaeCMUPkC1AAhpRRsOF8t%2Bh1ETMrlqy%2FTqTtBXnbs9SwGyoKeOkGZuPL7PbiFW6s0YMvPO9270zzxOd8xph%2FaPc24QCU6c4MiboTGji2k41M5ioYTg6gPJEHOPgfnpl8vayuKjQKUu2qjwAYzXR4dvIDBreJOqqYrJV0GOCR5GujCZ%2B4fKBjqkAdisqgXrxTgcz5Y23kebILMTkhKh8G4TLMxSP1%2Fdbk6KyKFnjvjiLBpygu1T%2BSBScJhLEaRx28NVfYaDlNGy0WSv9bZCc1GOYC3083q%2Fy%2FOKY2YR2CCP3g7YorA8JjYbQOb3qb8fj%2FRElce4QQXj1g4LPb1BL2w191uzsHrXHNwQugkfT2yWm7VHhexO%2FOoyT%2FSRNEpXUNq9oFuNIHHAGhiUWSn4&X-Amz-Signature=8263a7158ed6710545a1742e9a2b2ab04ef22ad2e8ff036ee7dc9c26298205c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
