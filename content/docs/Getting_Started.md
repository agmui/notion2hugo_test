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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667263LR5B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDLJQWH8j%2BKKXAGksHILEuFvGFL%2BQzqTLk7J7rAmBtA5AIhALx2YQ7HYQKGvYXpq%2BHdd8gF38kSEalvUAojCzfSvhXlKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2QVmVxzDXWlZKJkq3ANBwP2opD5djreJZuu%2FK2RtSm7ocPSJPb4AAbY9MKrRKKdUuPB4P9Am9TSf2kN1l0SzI8lqDwEiH%2BIVZNHwtpckZGtzPZi0df%2FzDLYL%2F12w8JDQdx6DLr4g2AOv5ixRTidYco%2BswF1wweZrShJyqfyM3ExM25vsJIIWW0lklOhTuCp7NxbBWIAGHeeZYzpq0IYaY45z0jn0T1YrUrsV9GOYItvhLIYN50K7evyAZ6WaJNdjCtMXqNf%2FXwCr9MNvmHzmPfzLUrm5kTXjUEOhmEFgPaI9paSPQLb%2FV4friD67hX4CEJg4Z9fyUsKb1nLtIxvpqRrdRMo8HMyYNo0hWTtfXItOhKRWFiAqwFq1gZUL3Lx2XBHrQFaay%2B%2Fpig9d73qQuXcGwghrdWDqKTXDbad2ECLTYGOITtebae02cQDArm1w6S5S0lsf26H2X2MOcdaaC6U8%2FJFaWKxdZGUeyudOtG2ZgB74astJK4XGDufDezX1Hmd%2FjVBYsIBqL%2FvOAsqQiSR7ixvI7pRcFHKHtcPPo7tZSFMR3aKQ1WZ60HwW5KnAXiM4979hx5581uTWP9Hwz4eeb9UhviRK6MhbSplDq9V4vakkF5gZxgB9D8w9tadpwStOBcWFz418DjCasaLEBjqkAU%2BrwJL4L0a8pqpcw8cMSJOks1RvL7z2lXtG4Hht2LLL70SuEnEX9GzMQ2CLjY%2BPNkpUSvQru1oalICIeRR22V73SYMeBGBsmttO4xhOWdAI3RPfYuwDm8Uz8q%2BMgVr%2B6IN%2Fb6MSSGijdW%2FazAL26BXslAVZERcW2AHQbKjpTcU%2B6Sfe4JGFVBr4tfHhS9%2BaqDFiPjDP%2BsiaJEz6Aez6Q5yl1jD7&X-Amz-Signature=eb633f036755c6f1b8547e8365a8dea52ca4c4cf4966ce714d3865edf11469bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667263LR5B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDLJQWH8j%2BKKXAGksHILEuFvGFL%2BQzqTLk7J7rAmBtA5AIhALx2YQ7HYQKGvYXpq%2BHdd8gF38kSEalvUAojCzfSvhXlKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2QVmVxzDXWlZKJkq3ANBwP2opD5djreJZuu%2FK2RtSm7ocPSJPb4AAbY9MKrRKKdUuPB4P9Am9TSf2kN1l0SzI8lqDwEiH%2BIVZNHwtpckZGtzPZi0df%2FzDLYL%2F12w8JDQdx6DLr4g2AOv5ixRTidYco%2BswF1wweZrShJyqfyM3ExM25vsJIIWW0lklOhTuCp7NxbBWIAGHeeZYzpq0IYaY45z0jn0T1YrUrsV9GOYItvhLIYN50K7evyAZ6WaJNdjCtMXqNf%2FXwCr9MNvmHzmPfzLUrm5kTXjUEOhmEFgPaI9paSPQLb%2FV4friD67hX4CEJg4Z9fyUsKb1nLtIxvpqRrdRMo8HMyYNo0hWTtfXItOhKRWFiAqwFq1gZUL3Lx2XBHrQFaay%2B%2Fpig9d73qQuXcGwghrdWDqKTXDbad2ECLTYGOITtebae02cQDArm1w6S5S0lsf26H2X2MOcdaaC6U8%2FJFaWKxdZGUeyudOtG2ZgB74astJK4XGDufDezX1Hmd%2FjVBYsIBqL%2FvOAsqQiSR7ixvI7pRcFHKHtcPPo7tZSFMR3aKQ1WZ60HwW5KnAXiM4979hx5581uTWP9Hwz4eeb9UhviRK6MhbSplDq9V4vakkF5gZxgB9D8w9tadpwStOBcWFz418DjCasaLEBjqkAU%2BrwJL4L0a8pqpcw8cMSJOks1RvL7z2lXtG4Hht2LLL70SuEnEX9GzMQ2CLjY%2BPNkpUSvQru1oalICIeRR22V73SYMeBGBsmttO4xhOWdAI3RPfYuwDm8Uz8q%2BMgVr%2B6IN%2Fb6MSSGijdW%2FazAL26BXslAVZERcW2AHQbKjpTcU%2B6Sfe4JGFVBr4tfHhS9%2BaqDFiPjDP%2BsiaJEz6Aez6Q5yl1jD7&X-Amz-Signature=e7b5faf6889487dac273e42ac3abfa0dd2f935f9fa07f34160d017181bd660bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667263LR5B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDLJQWH8j%2BKKXAGksHILEuFvGFL%2BQzqTLk7J7rAmBtA5AIhALx2YQ7HYQKGvYXpq%2BHdd8gF38kSEalvUAojCzfSvhXlKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2QVmVxzDXWlZKJkq3ANBwP2opD5djreJZuu%2FK2RtSm7ocPSJPb4AAbY9MKrRKKdUuPB4P9Am9TSf2kN1l0SzI8lqDwEiH%2BIVZNHwtpckZGtzPZi0df%2FzDLYL%2F12w8JDQdx6DLr4g2AOv5ixRTidYco%2BswF1wweZrShJyqfyM3ExM25vsJIIWW0lklOhTuCp7NxbBWIAGHeeZYzpq0IYaY45z0jn0T1YrUrsV9GOYItvhLIYN50K7evyAZ6WaJNdjCtMXqNf%2FXwCr9MNvmHzmPfzLUrm5kTXjUEOhmEFgPaI9paSPQLb%2FV4friD67hX4CEJg4Z9fyUsKb1nLtIxvpqRrdRMo8HMyYNo0hWTtfXItOhKRWFiAqwFq1gZUL3Lx2XBHrQFaay%2B%2Fpig9d73qQuXcGwghrdWDqKTXDbad2ECLTYGOITtebae02cQDArm1w6S5S0lsf26H2X2MOcdaaC6U8%2FJFaWKxdZGUeyudOtG2ZgB74astJK4XGDufDezX1Hmd%2FjVBYsIBqL%2FvOAsqQiSR7ixvI7pRcFHKHtcPPo7tZSFMR3aKQ1WZ60HwW5KnAXiM4979hx5581uTWP9Hwz4eeb9UhviRK6MhbSplDq9V4vakkF5gZxgB9D8w9tadpwStOBcWFz418DjCasaLEBjqkAU%2BrwJL4L0a8pqpcw8cMSJOks1RvL7z2lXtG4Hht2LLL70SuEnEX9GzMQ2CLjY%2BPNkpUSvQru1oalICIeRR22V73SYMeBGBsmttO4xhOWdAI3RPfYuwDm8Uz8q%2BMgVr%2B6IN%2Fb6MSSGijdW%2FazAL26BXslAVZERcW2AHQbKjpTcU%2B6Sfe4JGFVBr4tfHhS9%2BaqDFiPjDP%2BsiaJEz6Aez6Q5yl1jD7&X-Amz-Signature=eb822b9d183ce69ebe4f166058477908c414aa86381d1ea54695d55a1076484d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367PAORV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFSHpWJtMWgnx1jM0mbH6yVqH3%2BY0ntiljHVwwhYDBv8AiEA%2Ba6kefu%2Bgb8j8BsmbbQhd%2F7BgcFwfQ%2Bcbl5p7j5KyaQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7f4ccCxzj7qWLjyircAypGVsrAf3zODK1%2FmP%2F4aKruDjHy%2B2wVTi5ttRqAs02xpNJjrkCyee2YVIrUFDoZedjNc%2FQkoqn6ZzJNM8r%2BbtOaSoLjL0mFalRAPfpBpBqTaF44q6YyOst2TNrpE8P2tsYbj41aPpXA55dSHWX0gykG9Vc0I%2F%2FPYn6xQnjBYb2S0gf9761dWMeZtPgEt3jFcsJ7QpaGcYKA7kdzsK4owge09%2BgqFpUNxHa7y4GSDK7Zo2Nzkmzt240QBktlo7px2bzPUARo4VngXqP8XygpUIhdsmwjJg0XreCD6SJMRqBA4AW%2Fgm26JrDcSA8xZWeEwMjcmzDoutN4NC4u3%2B52phPfaBlN84j7bgBtJtOfRGEpemhbyiC0mOWFhN7yadqh%2FUqVTK7Q05a6IOA%2BQClZWc8ZdgOOS8dNP5C30QepKjO57rFIbL40t7%2BXpkywq0fzxK0YD9BP1VsTHlzJIPQ7pmy6bxr35aoLR0es7oxRM2pZp%2Bv3XUiYOEOhxHX%2F4KfVean5l2FoawcFQOtz0O9GR0vG0lpIZWWBjRgZnXfXBghovFd96tc%2FPxvyqndLtj00ioQ7t3I2CLR%2F4EV1xTvSwyImsoI2LXzbMgkpL9zStrWO1Sp7ku8gAxK1u5J9MLmxosQGOqUBpwr1PONkfcP8WqG6oUExX5lqkiFQcZ5TFAlUdVQ38gcwGdd%2Fyb%2FHjFo6BkwmJW7VLq8sr9VIzmGM3E3AwG2JE2tFKW2buA0F%2FLe9QcPKrX5jzhVOUQHdDIgpha3Ju5kOjsETUazDfdo%2FGX%2BcUQT93DgB4QPQaEJS%2BmFJQCNNBSV%2B6KOyYP5qSJ2ScMWdAlhH03jmQ9wuRAGIKWOqbOwk5CT44RFw&X-Amz-Signature=908b3a4b9f6c30233b7ce57e2e3ee024f7abc4c968a187be773fd249968ee1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSI62US%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIG3uD5pMNYz4IHQ%2B%2FAI9e8cm53uIcYwI1YSODye6exRCAiEAgAUWaPHwiTLg676cPyk%2B7lVfbgkv9go5QBFxQLkMX8IqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYf8eRO8s%2F6gbKw3ircA4NQDedZhv9djuTWi8kzm0QbIfopXQtaiLNAjy%2Bkax9q1v9qO86CsTC1qc6%2BHd9uoZZmpzT%2F2HNYStsnk57F2Qo7HR%2BA6dTFKIm4m9sJlRNQ%2Fh%2FdwIiIAUkqSTPwFTW4V0Qi2PHYyuI9d6B1VsR%2BLh0UdPZGOBU9LJe3EjtaVaTeuNP1zfXNICbpkkdzZzsIwjnzLGMm7C%2BL9dnKDkXg%2ByJOMpA%2BcmPg2StuiJmIlubQ1Z%2BJzQsiGStn30dTNlbfV%2FlK6vFRGvwHCdTaKwEgAz5xZiEO3AvP%2B6EGkNTM905pVwUvf9mYylJ%2Fxrd1AEBakq5lGkYrLL0B1%2FZbZJEQDt%2BRSYTFbbi4H59b%2B5KdU9FYW%2FazWBnUGl5GfEakX2rX7uETIx6BZJALCGSSjdOO7S4ol5NBGqaiOjVry6YKc7iEDffY18fS6t9FZKrAmW62BZRZlurcme0h8XKTCjkzhKX%2FU2W3P%2BNkGiKECmuzX%2BtqHlWGl1Or0aYyLsQStq3iSmF8fCc7VP9V4oDSS%2BX94HtOP0IYp1mpvyjVq4y%2F9ui08xoIc5whTjtAs2G2oMnMmFEulS5Z7G6yXw3l9h4NJ%2F38iX63AMex4b0LFmeNNCWJNFqs3%2Fp7M%2BEEDKqyMI6xosQGOqUBLDQvn0eNWRiViBLmw%2BFo8UXQnE6nGW485PJf2fBhqJ0W9UljPGI8ZIr9dswtxYO3xW6tNG5y7xufiBskELN48MjjIO5l%2BvtBb6wnJUfLP%2BOCCh3aLKdWJPrFz%2F1He8WIZMIRf0crU1KG1ZvawbUPxcX%2BP4%2B0rTV0iLfXe8mPDmW%2BhYS3LtIzkh4Ye8QxxW8HWgsB755uOAqPYtQP5eFQTPESJHCD&X-Amz-Signature=b2f9e1f632c5adb67c642a8e5123db3b2b5a1185096c7142be83571882caa693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667263LR5B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDLJQWH8j%2BKKXAGksHILEuFvGFL%2BQzqTLk7J7rAmBtA5AIhALx2YQ7HYQKGvYXpq%2BHdd8gF38kSEalvUAojCzfSvhXlKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2QVmVxzDXWlZKJkq3ANBwP2opD5djreJZuu%2FK2RtSm7ocPSJPb4AAbY9MKrRKKdUuPB4P9Am9TSf2kN1l0SzI8lqDwEiH%2BIVZNHwtpckZGtzPZi0df%2FzDLYL%2F12w8JDQdx6DLr4g2AOv5ixRTidYco%2BswF1wweZrShJyqfyM3ExM25vsJIIWW0lklOhTuCp7NxbBWIAGHeeZYzpq0IYaY45z0jn0T1YrUrsV9GOYItvhLIYN50K7evyAZ6WaJNdjCtMXqNf%2FXwCr9MNvmHzmPfzLUrm5kTXjUEOhmEFgPaI9paSPQLb%2FV4friD67hX4CEJg4Z9fyUsKb1nLtIxvpqRrdRMo8HMyYNo0hWTtfXItOhKRWFiAqwFq1gZUL3Lx2XBHrQFaay%2B%2Fpig9d73qQuXcGwghrdWDqKTXDbad2ECLTYGOITtebae02cQDArm1w6S5S0lsf26H2X2MOcdaaC6U8%2FJFaWKxdZGUeyudOtG2ZgB74astJK4XGDufDezX1Hmd%2FjVBYsIBqL%2FvOAsqQiSR7ixvI7pRcFHKHtcPPo7tZSFMR3aKQ1WZ60HwW5KnAXiM4979hx5581uTWP9Hwz4eeb9UhviRK6MhbSplDq9V4vakkF5gZxgB9D8w9tadpwStOBcWFz418DjCasaLEBjqkAU%2BrwJL4L0a8pqpcw8cMSJOks1RvL7z2lXtG4Hht2LLL70SuEnEX9GzMQ2CLjY%2BPNkpUSvQru1oalICIeRR22V73SYMeBGBsmttO4xhOWdAI3RPfYuwDm8Uz8q%2BMgVr%2B6IN%2Fb6MSSGijdW%2FazAL26BXslAVZERcW2AHQbKjpTcU%2B6Sfe4JGFVBr4tfHhS9%2BaqDFiPjDP%2BsiaJEz6Aez6Q5yl1jD7&X-Amz-Signature=9f1a2722e1a31fc761e545df52c6abd76e02cf070ce3b399500e220d18a476c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
