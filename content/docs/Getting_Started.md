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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTWEMUH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGvR2IalNwopvOA3FnbTO5V9nl6SQhsfQbvH2syGRxYAiEA71R3wDqDYBH%2Bh1t3I0BHIXQ%2FVbchPBLXraft5XhIWroqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw8BbHENHMZ6O5zfSrcA5z1H3x50TFlkutBJ0CPEI6RjwWv3VHqSAQqF6ZOSkB6%2FoHOrHvevjKiGdK3SNiromyiWDrx8kummpGepvEsMxwO6O%2BHdz6GfK44n4kmtd6fBza51YamGpKzxdG0ZNyXU1Ykep%2Bq4E2oWOo6cHwqbu%2B1k%2FyNjNlEs1BcCV3BBjRa2L%2Fhx1WLJKogH5u4AIPOcBIDsqCzNaVISrJM2YyPImitByuSb2K38Jj0oEDxDUpv5Uqc8SUW6EFbbhyP5bPcwJqCKMnEKDQJFG%2BRFCnMadZs99Q2vFk7hT%2Bhi6oT28v%2Fb9adSVs78ZD7bkZM2DAiRt7Y3i1EJHfxs%2BVRxVgyNKHIeHRPNoWBNzqpRhocVkXqhq0RHEiGIEHNF8M2pMz1VbS9bvE0R%2BJq096GLx2Vw0eXpMDz%2FGY%2BYrrS%2FiH8mvQgF1MmBYpGbkz%2BW5wsYNssLHI57jr6O6AEWVHa8oI4n1dLF2mXLBOovg%2BSbhzNwmkqKPPlcBakkq9GYmA%2BDfWoK1k6XXjFRgKY0F8%2By5c4xaDwK4VjbgYbY5rJ2z2pDE84Ue7sEXPM1cL9GHlsN7Tq4wj55GVsn9yLzez%2FeIoNGTSF0P6DnmLzEUguQ3hOsD4d14QVjgFRGSgWMacWMNy1xsMGOqUBKrNQElG2vmDdjCxa6plE%2Bs1SMwZYr7aDPu%2FxtXaIr2K4wikG2gfnO0QQkVCeIwIGHYD2Bj5bPIQK4yRSIGEk%2FDukyC0aS4IFw39DlgJSBAy6LBdS4OwjcVdrRN%2BICLHC5ppFf%2F%2BfbmhmpJQVMsdSZUGwV2gHKyuhhoAlpWtqfKoyje3EdStAL350TFSwub4vi%2F%2BpLkNmDYPaX0EE4DVYbZBPWmG5&X-Amz-Signature=fe0357629e3e85eabfa1a285f3fb3a467e86dc6bd6441f961064ee6f17d8436f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTWEMUH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGvR2IalNwopvOA3FnbTO5V9nl6SQhsfQbvH2syGRxYAiEA71R3wDqDYBH%2Bh1t3I0BHIXQ%2FVbchPBLXraft5XhIWroqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw8BbHENHMZ6O5zfSrcA5z1H3x50TFlkutBJ0CPEI6RjwWv3VHqSAQqF6ZOSkB6%2FoHOrHvevjKiGdK3SNiromyiWDrx8kummpGepvEsMxwO6O%2BHdz6GfK44n4kmtd6fBza51YamGpKzxdG0ZNyXU1Ykep%2Bq4E2oWOo6cHwqbu%2B1k%2FyNjNlEs1BcCV3BBjRa2L%2Fhx1WLJKogH5u4AIPOcBIDsqCzNaVISrJM2YyPImitByuSb2K38Jj0oEDxDUpv5Uqc8SUW6EFbbhyP5bPcwJqCKMnEKDQJFG%2BRFCnMadZs99Q2vFk7hT%2Bhi6oT28v%2Fb9adSVs78ZD7bkZM2DAiRt7Y3i1EJHfxs%2BVRxVgyNKHIeHRPNoWBNzqpRhocVkXqhq0RHEiGIEHNF8M2pMz1VbS9bvE0R%2BJq096GLx2Vw0eXpMDz%2FGY%2BYrrS%2FiH8mvQgF1MmBYpGbkz%2BW5wsYNssLHI57jr6O6AEWVHa8oI4n1dLF2mXLBOovg%2BSbhzNwmkqKPPlcBakkq9GYmA%2BDfWoK1k6XXjFRgKY0F8%2By5c4xaDwK4VjbgYbY5rJ2z2pDE84Ue7sEXPM1cL9GHlsN7Tq4wj55GVsn9yLzez%2FeIoNGTSF0P6DnmLzEUguQ3hOsD4d14QVjgFRGSgWMacWMNy1xsMGOqUBKrNQElG2vmDdjCxa6plE%2Bs1SMwZYr7aDPu%2FxtXaIr2K4wikG2gfnO0QQkVCeIwIGHYD2Bj5bPIQK4yRSIGEk%2FDukyC0aS4IFw39DlgJSBAy6LBdS4OwjcVdrRN%2BICLHC5ppFf%2F%2BfbmhmpJQVMsdSZUGwV2gHKyuhhoAlpWtqfKoyje3EdStAL350TFSwub4vi%2F%2BpLkNmDYPaX0EE4DVYbZBPWmG5&X-Amz-Signature=84c1151104dd512d90a6bf6f02ad8c32959092952f3f3fd826b1d0fdaf49b759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTWEMUH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGvR2IalNwopvOA3FnbTO5V9nl6SQhsfQbvH2syGRxYAiEA71R3wDqDYBH%2Bh1t3I0BHIXQ%2FVbchPBLXraft5XhIWroqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw8BbHENHMZ6O5zfSrcA5z1H3x50TFlkutBJ0CPEI6RjwWv3VHqSAQqF6ZOSkB6%2FoHOrHvevjKiGdK3SNiromyiWDrx8kummpGepvEsMxwO6O%2BHdz6GfK44n4kmtd6fBza51YamGpKzxdG0ZNyXU1Ykep%2Bq4E2oWOo6cHwqbu%2B1k%2FyNjNlEs1BcCV3BBjRa2L%2Fhx1WLJKogH5u4AIPOcBIDsqCzNaVISrJM2YyPImitByuSb2K38Jj0oEDxDUpv5Uqc8SUW6EFbbhyP5bPcwJqCKMnEKDQJFG%2BRFCnMadZs99Q2vFk7hT%2Bhi6oT28v%2Fb9adSVs78ZD7bkZM2DAiRt7Y3i1EJHfxs%2BVRxVgyNKHIeHRPNoWBNzqpRhocVkXqhq0RHEiGIEHNF8M2pMz1VbS9bvE0R%2BJq096GLx2Vw0eXpMDz%2FGY%2BYrrS%2FiH8mvQgF1MmBYpGbkz%2BW5wsYNssLHI57jr6O6AEWVHa8oI4n1dLF2mXLBOovg%2BSbhzNwmkqKPPlcBakkq9GYmA%2BDfWoK1k6XXjFRgKY0F8%2By5c4xaDwK4VjbgYbY5rJ2z2pDE84Ue7sEXPM1cL9GHlsN7Tq4wj55GVsn9yLzez%2FeIoNGTSF0P6DnmLzEUguQ3hOsD4d14QVjgFRGSgWMacWMNy1xsMGOqUBKrNQElG2vmDdjCxa6plE%2Bs1SMwZYr7aDPu%2FxtXaIr2K4wikG2gfnO0QQkVCeIwIGHYD2Bj5bPIQK4yRSIGEk%2FDukyC0aS4IFw39DlgJSBAy6LBdS4OwjcVdrRN%2BICLHC5ppFf%2F%2BfbmhmpJQVMsdSZUGwV2gHKyuhhoAlpWtqfKoyje3EdStAL350TFSwub4vi%2F%2BpLkNmDYPaX0EE4DVYbZBPWmG5&X-Amz-Signature=535f57dde6cac71a4f70ddb0ff3aa544c1e6028879b83241af705c627d3fab71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFIBQCB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQXd3zxdlra4E1wO%2BADoWCGvTTP1nTyKkB1vePnCukAAIgOfSLsO1WJYsGy47aVrU4CCTffpje%2Fhm8Uc51lxv%2FEgIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWjbU21BFNRvtGZKircA0J7hRm0FADvwjaGlhnofIVOtADMLEn2r6JEG2KyRcxhOy8vPcEwN7vH6Gj0UJv1vyP4VZ10sFaJsF8FwLCoTDJqMgKxP2JxwQTR4RfjyrFK5m%2FlvjhURcbwaw7uZUedYpdQ%2Fa3vpS%2BTENrZLm27ultuna2qmkYcOA7MudG2tq5kFkL9hgLyL4FjnV%2B02v3eECPPgczEOayCkGfLPKtujw323%2BFaLgLzhHe3TPz2cDe8xlUe4HAN0zg37yeGx1y2b5zTv5PV9kCKySFIOqKENxK1bchT422m1qzsb%2BvTqqUQaN0uM%2B0JHIXNPvCdYfi5aNEgKlG0fHWqHsJOJWFf4AQTB%2BZxyBxKw7NViys0DOTq2D9O0u6gFOlbPWcpsO8yOkqAaaZWg5TOvL3bsAE4DMHzsG1WlfroLQhXQasTLq%2Bzbnj3%2BfJGGPmtd4jALqc6e7pQ93zlsBWkiupWjOUMalM1JgriH6Gob35NcUY3VKfkf%2BgSohOsSPxGGKxdAcQ8Bca3%2FYT03pGE0eWwLNC4UmH5Cu4zAPSYHBSbzpqbTT7spd979yFswx%2BOPhLE20xCqbX9k1NJc6ZlT2eYNIBol%2BI7K1Z6ktqmSjPrrOHLBwtrPEaF8DrHgD1tyR%2BiMJW1xsMGOqUBOMTLSUoey0mtzkW0ayeUtq3cmczckeI7qSbfNr4wcRTO%2BpuJyRimkVPDPRaNhdYWkCFkJhtdV%2F2GyUw7Sb6KRGI2VjkKvZDov5xbI6%2BEpYgsZLjC5SyGrO%2B5X6XvqjGjoe33mnCkW9vequOpjyheS%2B9MiRfllV0xepX2gUOlpKVBwO9HqVNeFC9Y1%2FjMlpii9yhyJ5PT6hQFcT26Plpnspp8GK8C&X-Amz-Signature=9adcf12262ff48e6463b8dd627bd1a29e2146961f229ce3c52c2131b6b28d3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQ4XCIA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdFvwAqDgrkEur6UHMHbjuuyDh2Uqe3e5SKpjlGhDHyAiEAsomGawcAA1QYwS%2FSi137Y8Kw1pOH0%2FmRc9q%2BaoMc1noqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSNpWc91PlsRnet3yrcA0BOBuw%2FXDZuMZ%2FwYE%2FjKHW3jDmYBp8A4%2FJ0tma7999dx6VfiIGGkxSCN41ezh8dDbV8ye9pHzw%2BZRqBzsA5mRL8gbBP6AIkDhulrQ4vlAlFaRfeZwQIwUlYmmbhlLsfGBWScmElq3Nj1EFgdjnBrtQf%2FXMFMGHunru8xCHS5R49Rxb%2BByy25075K%2FKxiCg9dvlXyMsu35feVXmi8%2FY1G1VUlJcRxwrAJ5KAQK4qqaeJG%2Fva2EuSQ9j5gdhub4nJiHtV0kkSSuvHK8zV6Ups1R2w7sl1Rzlkj4H4JNLl6%2BZ1Qkr6uMJ2FhvyFJazDGOq4L60yMqdXgQY2KL68ZNldriLu%2FcpgJbcSMDXILjjXyYf3J1mH6714l4rYHINgZTuC6Ns6in44sdhU%2BG6EQaxC2DMk6znoCEvkY%2FdN3mjAPi1rTU7jllEGt%2FVT6oI4Z0fnXWV4dhFOjOXOXyleootZB3UXjhnJYc2yLH1ZP8lkAYLPGdwBuq87Km8%2BnItoj45IwX5rrc4qb9Tp7eymEElfTIQwX9CSGgpym1MygVkPyqh6dx%2BkfrzTVw70FJ2qfqjvrV%2BqzkC8saoIae9FAxRWT%2BRRjkdFYgMmFWEJJr%2FDrgonr%2Bo56cXVWBVk4tLMN61xsMGOqUB7SQOrtoTEk6%2BGhWCYh0bkabSNVDtR%2BXE8AhM0gdaclNfBEd70bWfHsMJ09OZaPzbZ%2B6Zs3VoZqT0IYiDeyVaG2idhJT7k3A%2FzYxKpvNEC7aLTMElOAmh8%2Ff7kPPRQuoFLaD01yZP2xkSMvyscOvgJaXF8x3gdsfmIfdRI%2FJJRiDwrf64ZzznORegznaI9vFtZpS3jhNQ2IjastOBJIqV0hro3GDr&X-Amz-Signature=ca9cbfd85a71cc806d3213f082d1449d7d512f8d74671de1cd03b07c1511b943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTWEMUH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGvR2IalNwopvOA3FnbTO5V9nl6SQhsfQbvH2syGRxYAiEA71R3wDqDYBH%2Bh1t3I0BHIXQ%2FVbchPBLXraft5XhIWroqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw8BbHENHMZ6O5zfSrcA5z1H3x50TFlkutBJ0CPEI6RjwWv3VHqSAQqF6ZOSkB6%2FoHOrHvevjKiGdK3SNiromyiWDrx8kummpGepvEsMxwO6O%2BHdz6GfK44n4kmtd6fBza51YamGpKzxdG0ZNyXU1Ykep%2Bq4E2oWOo6cHwqbu%2B1k%2FyNjNlEs1BcCV3BBjRa2L%2Fhx1WLJKogH5u4AIPOcBIDsqCzNaVISrJM2YyPImitByuSb2K38Jj0oEDxDUpv5Uqc8SUW6EFbbhyP5bPcwJqCKMnEKDQJFG%2BRFCnMadZs99Q2vFk7hT%2Bhi6oT28v%2Fb9adSVs78ZD7bkZM2DAiRt7Y3i1EJHfxs%2BVRxVgyNKHIeHRPNoWBNzqpRhocVkXqhq0RHEiGIEHNF8M2pMz1VbS9bvE0R%2BJq096GLx2Vw0eXpMDz%2FGY%2BYrrS%2FiH8mvQgF1MmBYpGbkz%2BW5wsYNssLHI57jr6O6AEWVHa8oI4n1dLF2mXLBOovg%2BSbhzNwmkqKPPlcBakkq9GYmA%2BDfWoK1k6XXjFRgKY0F8%2By5c4xaDwK4VjbgYbY5rJ2z2pDE84Ue7sEXPM1cL9GHlsN7Tq4wj55GVsn9yLzez%2FeIoNGTSF0P6DnmLzEUguQ3hOsD4d14QVjgFRGSgWMacWMNy1xsMGOqUBKrNQElG2vmDdjCxa6plE%2Bs1SMwZYr7aDPu%2FxtXaIr2K4wikG2gfnO0QQkVCeIwIGHYD2Bj5bPIQK4yRSIGEk%2FDukyC0aS4IFw39DlgJSBAy6LBdS4OwjcVdrRN%2BICLHC5ppFf%2F%2BfbmhmpJQVMsdSZUGwV2gHKyuhhoAlpWtqfKoyje3EdStAL350TFSwub4vi%2F%2BpLkNmDYPaX0EE4DVYbZBPWmG5&X-Amz-Signature=c0f774677e975231c6d53fbf46211911ee6c207257a0d7f531e99d66304e5c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
