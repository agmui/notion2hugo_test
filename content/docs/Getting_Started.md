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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPAWVSZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxa7wYETvwS3fFuU%2BGVxOpM85KDqvS8k%2FiDOlLwm9CGAiEA0semoZGgRtgEMKfHPHCO9jimebI5wDkrjuBtoRheY0kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMGkZApQCpPtPqzkxyrcA5Pylb9Tx%2FSo9gt6sT4acNx%2F9SRHyTegT43XhxyttU%2F74qXocHJjDb9R18ieOc7iBA1saZCb8ciqTPRwlKaSwWTQBXMFK0rHN7%2FEC2Hj7wFtqPVFRN0iNfcHvAFWOnq69Wr7PiHYkrIwA0j29jmcqKMunEj0hTY4XtU5y1HQm60qyZIMK83BEsGY0uJWCDKhTTq6H9ENvpBG3yJgXy5YFn3GLmBEGawZlWBH49hMHwZvB%2FIritPY2XG9nW%2BaVjCKQEJOM9T127OuXQgxTQXAaZP%2F4jM9Fl6goVsfHfZpRDnGxBgutAI6DsV%2FSi4p1B5UKATsvbEwI01r0yVWZXxNC9lAl2q%2BkfRjJexBDBn3%2F94zcchC%2FD7vWoHhOzc8jePuY8TU43DQo8VU2HHl5RziEU%2BIaguMfgLATpuZ8UrL%2FKncYKdWkXVIzYfYjYv451ZIyqozSL3%2FplbjbqAlK%2B1g17y8ZVo%2FBp%2BlcrA0vmXfh514tq5VW%2FfTs6nx%2B0dOxlpL9skBFeBiZ2%2FbTnoNOw2etvKi1Fu3rlWRt2f1F%2Bd6YID6BPxu0U%2BHoumRe9RxtRvSSMCfIsKUtMRylYzeyvHWZXrG6rtIclnHwEVR%2BJBCz1ie8LS6xgS8S6HezJC9MM%2B2osEGOqUBnUQd%2Fyo4DPpnQD4QomEa%2BcOdBfKaqW7oiPLVekRS6pozfEo8VJIFbRvvdnIlhgN3q3iow5s%2FeyzRLj%2FEju6ffEZtvtjn42KBjVd5M1QT00sVRmw3YbFpU3OQNI%2Bl%2B5gl4X6DjAyjLR3CGHyD1DaymAElrvex36%2F1J7rdG1Gkq3Fx0fAtJ0PZ9bcMJNq9y2R8eYfT0FgoCLMgG47gbIUUrxg7AYl2&X-Amz-Signature=de734e2f4b84ecd70aabea0908d1302e68f7fa50532496d16525f09637083a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPAWVSZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxa7wYETvwS3fFuU%2BGVxOpM85KDqvS8k%2FiDOlLwm9CGAiEA0semoZGgRtgEMKfHPHCO9jimebI5wDkrjuBtoRheY0kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMGkZApQCpPtPqzkxyrcA5Pylb9Tx%2FSo9gt6sT4acNx%2F9SRHyTegT43XhxyttU%2F74qXocHJjDb9R18ieOc7iBA1saZCb8ciqTPRwlKaSwWTQBXMFK0rHN7%2FEC2Hj7wFtqPVFRN0iNfcHvAFWOnq69Wr7PiHYkrIwA0j29jmcqKMunEj0hTY4XtU5y1HQm60qyZIMK83BEsGY0uJWCDKhTTq6H9ENvpBG3yJgXy5YFn3GLmBEGawZlWBH49hMHwZvB%2FIritPY2XG9nW%2BaVjCKQEJOM9T127OuXQgxTQXAaZP%2F4jM9Fl6goVsfHfZpRDnGxBgutAI6DsV%2FSi4p1B5UKATsvbEwI01r0yVWZXxNC9lAl2q%2BkfRjJexBDBn3%2F94zcchC%2FD7vWoHhOzc8jePuY8TU43DQo8VU2HHl5RziEU%2BIaguMfgLATpuZ8UrL%2FKncYKdWkXVIzYfYjYv451ZIyqozSL3%2FplbjbqAlK%2B1g17y8ZVo%2FBp%2BlcrA0vmXfh514tq5VW%2FfTs6nx%2B0dOxlpL9skBFeBiZ2%2FbTnoNOw2etvKi1Fu3rlWRt2f1F%2Bd6YID6BPxu0U%2BHoumRe9RxtRvSSMCfIsKUtMRylYzeyvHWZXrG6rtIclnHwEVR%2BJBCz1ie8LS6xgS8S6HezJC9MM%2B2osEGOqUBnUQd%2Fyo4DPpnQD4QomEa%2BcOdBfKaqW7oiPLVekRS6pozfEo8VJIFbRvvdnIlhgN3q3iow5s%2FeyzRLj%2FEju6ffEZtvtjn42KBjVd5M1QT00sVRmw3YbFpU3OQNI%2Bl%2B5gl4X6DjAyjLR3CGHyD1DaymAElrvex36%2F1J7rdG1Gkq3Fx0fAtJ0PZ9bcMJNq9y2R8eYfT0FgoCLMgG47gbIUUrxg7AYl2&X-Amz-Signature=2ba72ee223f4c1cdbe30675f685d4542bbcd6741834e3dc722a72b0b82f0588f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPAWVSZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxa7wYETvwS3fFuU%2BGVxOpM85KDqvS8k%2FiDOlLwm9CGAiEA0semoZGgRtgEMKfHPHCO9jimebI5wDkrjuBtoRheY0kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMGkZApQCpPtPqzkxyrcA5Pylb9Tx%2FSo9gt6sT4acNx%2F9SRHyTegT43XhxyttU%2F74qXocHJjDb9R18ieOc7iBA1saZCb8ciqTPRwlKaSwWTQBXMFK0rHN7%2FEC2Hj7wFtqPVFRN0iNfcHvAFWOnq69Wr7PiHYkrIwA0j29jmcqKMunEj0hTY4XtU5y1HQm60qyZIMK83BEsGY0uJWCDKhTTq6H9ENvpBG3yJgXy5YFn3GLmBEGawZlWBH49hMHwZvB%2FIritPY2XG9nW%2BaVjCKQEJOM9T127OuXQgxTQXAaZP%2F4jM9Fl6goVsfHfZpRDnGxBgutAI6DsV%2FSi4p1B5UKATsvbEwI01r0yVWZXxNC9lAl2q%2BkfRjJexBDBn3%2F94zcchC%2FD7vWoHhOzc8jePuY8TU43DQo8VU2HHl5RziEU%2BIaguMfgLATpuZ8UrL%2FKncYKdWkXVIzYfYjYv451ZIyqozSL3%2FplbjbqAlK%2B1g17y8ZVo%2FBp%2BlcrA0vmXfh514tq5VW%2FfTs6nx%2B0dOxlpL9skBFeBiZ2%2FbTnoNOw2etvKi1Fu3rlWRt2f1F%2Bd6YID6BPxu0U%2BHoumRe9RxtRvSSMCfIsKUtMRylYzeyvHWZXrG6rtIclnHwEVR%2BJBCz1ie8LS6xgS8S6HezJC9MM%2B2osEGOqUBnUQd%2Fyo4DPpnQD4QomEa%2BcOdBfKaqW7oiPLVekRS6pozfEo8VJIFbRvvdnIlhgN3q3iow5s%2FeyzRLj%2FEju6ffEZtvtjn42KBjVd5M1QT00sVRmw3YbFpU3OQNI%2Bl%2B5gl4X6DjAyjLR3CGHyD1DaymAElrvex36%2F1J7rdG1Gkq3Fx0fAtJ0PZ9bcMJNq9y2R8eYfT0FgoCLMgG47gbIUUrxg7AYl2&X-Amz-Signature=6b34e1178763439a9b00636b4a43323513cf5ebe9ae50acc0780d429476216c9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULHKMCI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChmlZOKnYM7xBcRxMpti2%2FCfvERkKvfHyzUcYvnwsRTgIhAI0t7FR1LgR7h6JeADGrQG3ym989yPdcJHWnWf3hKbn%2FKv8DCF8QABoMNjM3NDIzMTgzODA1IgxMw1LFDUy03Jv8HKkq3AOFFIQ17WcpXMRgb0H9%2BmnuQHo%2Bmr3Fcna9cSq1145K67FkfJKb0RUyV325Se6mdOSyuqHcI5iq%2FZzq9%2BTfyB7fhT7J3%2FMoNhhdPZEsESFIYtSI%2BE4gEhPftKmZrKXmd%2FRdlHv9NyBw2DpE96yiNUrvc6HnkfJEqyD1goMCMsoHaPZ82k1xsKW1x2dPmkzME8dNaYeZ4hKoz1V5Ke7c01hP7qzBBxeaME%2FheI5eB0tG4KX%2FHfZV3TqOHHgkv9Fn2YES3ubXCVzejWVx85UtznXe7RrmItte9NyxGhIyBwTyueDzsSKSSyVp01sFqf1DPI1AyZg4Arp%2B26unkFkIA8q%2B%2FBarKSzkul%2F%2BzGUu76h%2Fq1hJUAbGq4rEiAw8e2ijmha%2BT20m1fmTeDf8M2EIf9kygApjD7PaAgULXEbLdQ0RIKtYvBI%2F7rJ6QDMVays3dP1JcaPozBC6EWClYvSn0vU8XXvpkYrMAv5xxmcBhGXs1TvKFcjgVXfzjnxWSO2h%2BS6oWn9LtU2BQjG4ZaYoXw9dJdmjqfmW9WRECjY6ainPANPDCf%2BuRIsvg5%2FRQzTBtD1kTL4R3kaoIEN5%2BLfpvV2I5nadC7R%2Fk8yPdcQdxSDnUGD198Z323z%2BvazpGzDVtqLBBjqkAUnY1QzewytkOZqVYFQ3FgO41AlwdR1HkGiaqTne23A%2FtaSWUx6vhaS%2BB1ASk5bRoRrKyoa09nnA4gMtvu%2BBeGV5vMBE2fXQ6w3O4pNgcG%2FPkk1kRbiPkXLeKfw4RbzRiI6sTY1F3YRdja%2B8VnHenuGHzDTBC8Oxov5QY4W2ClRA6yAIRhf%2FEGn4hf5QB77y86r7l3a8io72efsp3tLZK3Fmcasr&X-Amz-Signature=715b990fbb92b7c5c270a2507574d20616002f9a1887c658937733c31fc98593&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66VD25L%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq0tG6zkglBpCOTmdlm9RNtBw4V156WE8%2FKYF1cdZBtAIhANoJVZT%2B1FxzaCwI1Hzko6ZzjCbD2ZKqHzB3WwRUfqtNKv8DCF8QABoMNjM3NDIzMTgzODA1IgxVtI%2FN04BdEZfCvsAq3ANZRXFDeMAGqKJ24ejgV57zKUleslf605AovHU2pAZ%2Bl7lNCGXRl6m2D9jB0WuvOXPwBj2LhbFNAtz6bb2NNZYg%2F1LGJd4TuTUXa5sB2LZIgxPLLqtQOn%2BA%2FJudISaqatm3zB9AJW3rbhjheSjZaPdbZt8CXFRmn17jGQGwPDPME3W4l6siGujxI7f0vvg8e%2Bs7XhwWUx%2BLPgKAwtj36LI4IeM3FAR2S9O40BOrmP8IANw1tsGLEO2CAbwrsyXupFVwUG7UgLYeLTJhMvthUNR2kJiBfiK%2B3DTnov%2Bg34gL2wANl0Yiu0NIMYQjQqFccXFQ7wWPv0Nq9QRFQAP1c5t1aHGEMgDXwCL6U9CNFjBA2y%2FuCN4ILRTzv7%2FxAF%2B2MQMR9CcxpuuTN6Jz6i1JI2chwl4GEV9jdS6u4fvdriMGfzngqWFR60h2SbbYDvH994TwwW%2BFmkLcBcgDphKW3mnFHelqWwoCAOpEopxCAZ7Yzbsh1WaQScr5X%2B0sejgxKPiYdmYDGfkJi6erhpQqhvvkoMG3p3MEyJkAJv21sCltlYV2yPKEaZQoc8Usz9x7l3rosWhRZj%2B4fC%2FUu7U%2BS36BBYff4jkldVMU3RWFc%2Fv%2BhiTh9vltg19oeRnWCDD8tqLBBjqkAfeDmb40dko1n%2BFRT%2B73ecWeWXzuS51gtBvCFm%2BBXcty4Nu%2BwYOslFGnnk7%2BTbXmoxaHYDDRmLoEwddWe30zuuwgb%2BPkNr6jLqEAzWmn93UeMfp4fv1hrbLRySnnXN4CLX4cXR9oKeo7Ub3ditW2V2ONGP3LB5odDK3cFYbVjBbTp6WjSbhERJFznn6tdBQSxdeOQoX49TUtKNw2eIWtancZPH%2BZ&X-Amz-Signature=68b31fca5e67dd0fe4371673597f81ad96cdb963987f05074a3a04d39169602f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPAWVSZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxa7wYETvwS3fFuU%2BGVxOpM85KDqvS8k%2FiDOlLwm9CGAiEA0semoZGgRtgEMKfHPHCO9jimebI5wDkrjuBtoRheY0kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMGkZApQCpPtPqzkxyrcA5Pylb9Tx%2FSo9gt6sT4acNx%2F9SRHyTegT43XhxyttU%2F74qXocHJjDb9R18ieOc7iBA1saZCb8ciqTPRwlKaSwWTQBXMFK0rHN7%2FEC2Hj7wFtqPVFRN0iNfcHvAFWOnq69Wr7PiHYkrIwA0j29jmcqKMunEj0hTY4XtU5y1HQm60qyZIMK83BEsGY0uJWCDKhTTq6H9ENvpBG3yJgXy5YFn3GLmBEGawZlWBH49hMHwZvB%2FIritPY2XG9nW%2BaVjCKQEJOM9T127OuXQgxTQXAaZP%2F4jM9Fl6goVsfHfZpRDnGxBgutAI6DsV%2FSi4p1B5UKATsvbEwI01r0yVWZXxNC9lAl2q%2BkfRjJexBDBn3%2F94zcchC%2FD7vWoHhOzc8jePuY8TU43DQo8VU2HHl5RziEU%2BIaguMfgLATpuZ8UrL%2FKncYKdWkXVIzYfYjYv451ZIyqozSL3%2FplbjbqAlK%2B1g17y8ZVo%2FBp%2BlcrA0vmXfh514tq5VW%2FfTs6nx%2B0dOxlpL9skBFeBiZ2%2FbTnoNOw2etvKi1Fu3rlWRt2f1F%2Bd6YID6BPxu0U%2BHoumRe9RxtRvSSMCfIsKUtMRylYzeyvHWZXrG6rtIclnHwEVR%2BJBCz1ie8LS6xgS8S6HezJC9MM%2B2osEGOqUBnUQd%2Fyo4DPpnQD4QomEa%2BcOdBfKaqW7oiPLVekRS6pozfEo8VJIFbRvvdnIlhgN3q3iow5s%2FeyzRLj%2FEju6ffEZtvtjn42KBjVd5M1QT00sVRmw3YbFpU3OQNI%2Bl%2B5gl4X6DjAyjLR3CGHyD1DaymAElrvex36%2F1J7rdG1Gkq3Fx0fAtJ0PZ9bcMJNq9y2R8eYfT0FgoCLMgG47gbIUUrxg7AYl2&X-Amz-Signature=9069209e48ffae127ba7bdaa35f0f478884014a3985e7a134061952e5394ddaf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
