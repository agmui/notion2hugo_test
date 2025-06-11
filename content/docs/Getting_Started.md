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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPPSBWO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNaYga8%2BTB1GQOnQTKGRB4g8M912zCLCFjOVch%2BWGv3gIhAM6%2BAe9TQMzcXlfEvruK5XsFvsI8BZTXeMqGrPSe9QGpKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Kck9Ct%2F7aCDMsOoq3APGG%2FHjWIeU5fitqDLNACGoLMtT1R1fXJaa5Q2FKhU3sfPSJV5Nz6QidvR7s%2BVZIqOa16dPcSh%2B7m7qlbEm5L058WmDiKNCULKXG8pNdtsx%2F5TlTfg8knI8xgmR1sRf5PSp2i82IkwDg%2Bmok8lvO4ZlTw0cB4yK8EI4clFx1tDNgo8AbA7ieYGeCMzO%2FQgloap9D66cbw%2F9SMLHtapbKUNjiJgcfhQI3Qg0%2BkyfWtYQqiZJ1dVL4D67er3rbuBxU5atu5358Ym39WL0lQdGBZKb1Sng8XwWMHnzqhQVlT6SEX4eIm8yn8DDJlhHmIkosdEjRvzCL6HKStvz%2FabV2nL%2FLXMw07yJ9lJiX%2FwFFCOfBsplgpkBxrhBwjW0hJPQ%2FUHLdyP1ugEuZ6jEwJ5uKFUN631f5%2FkzosN8ivZLsfU%2FbThyXHGI8KBeZ7TKi2PbfVRQz0kBgiJyck17CV09HiieZiMWdaLRzEXhBDLT210ptetEsCcd00j0fOIdmto9WazbGtH1naGEqKA%2BA%2BVGbUE%2BbZtKYjflEuI9uUeXb5CE7DIuTRbQqXAxcmKSkWFRFowyatsmLCVR4uqipYUWyvIvjqQKX6o%2FBUPTeFwTkVEdMylMBDwSJ7dsZcwdwjCRuqbCBjqkAaeMVrTHJQP6DsLV73GbY69frmN84JTotgwYKDF9mmnzE2a78spTytK006jCQaP4p%2F3k7zd3XMMZIpsS5pK10jCzwFvjmvKGpPJyvuWIzMtvyHY5F5YfJYi9fyaZgLI7BwBMVrAnjJnA%2BWzKMhuhGZI9kzprbqONKMsCAHlNnTSEFAH%2FTn7TNbFmvXUFGrV2iFC%2FOP6mAAjj1HzNzqLHaHDueHiY&X-Amz-Signature=5f1a86ce94eca7a83a857f77ff5a6268d1f8e361c05e59a2f57b6722f84aaad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPPSBWO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNaYga8%2BTB1GQOnQTKGRB4g8M912zCLCFjOVch%2BWGv3gIhAM6%2BAe9TQMzcXlfEvruK5XsFvsI8BZTXeMqGrPSe9QGpKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Kck9Ct%2F7aCDMsOoq3APGG%2FHjWIeU5fitqDLNACGoLMtT1R1fXJaa5Q2FKhU3sfPSJV5Nz6QidvR7s%2BVZIqOa16dPcSh%2B7m7qlbEm5L058WmDiKNCULKXG8pNdtsx%2F5TlTfg8knI8xgmR1sRf5PSp2i82IkwDg%2Bmok8lvO4ZlTw0cB4yK8EI4clFx1tDNgo8AbA7ieYGeCMzO%2FQgloap9D66cbw%2F9SMLHtapbKUNjiJgcfhQI3Qg0%2BkyfWtYQqiZJ1dVL4D67er3rbuBxU5atu5358Ym39WL0lQdGBZKb1Sng8XwWMHnzqhQVlT6SEX4eIm8yn8DDJlhHmIkosdEjRvzCL6HKStvz%2FabV2nL%2FLXMw07yJ9lJiX%2FwFFCOfBsplgpkBxrhBwjW0hJPQ%2FUHLdyP1ugEuZ6jEwJ5uKFUN631f5%2FkzosN8ivZLsfU%2FbThyXHGI8KBeZ7TKi2PbfVRQz0kBgiJyck17CV09HiieZiMWdaLRzEXhBDLT210ptetEsCcd00j0fOIdmto9WazbGtH1naGEqKA%2BA%2BVGbUE%2BbZtKYjflEuI9uUeXb5CE7DIuTRbQqXAxcmKSkWFRFowyatsmLCVR4uqipYUWyvIvjqQKX6o%2FBUPTeFwTkVEdMylMBDwSJ7dsZcwdwjCRuqbCBjqkAaeMVrTHJQP6DsLV73GbY69frmN84JTotgwYKDF9mmnzE2a78spTytK006jCQaP4p%2F3k7zd3XMMZIpsS5pK10jCzwFvjmvKGpPJyvuWIzMtvyHY5F5YfJYi9fyaZgLI7BwBMVrAnjJnA%2BWzKMhuhGZI9kzprbqONKMsCAHlNnTSEFAH%2FTn7TNbFmvXUFGrV2iFC%2FOP6mAAjj1HzNzqLHaHDueHiY&X-Amz-Signature=b7c0d62709398e11ca9365f7ef676a68cc02492250049aa38f9a89532839a5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPPSBWO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNaYga8%2BTB1GQOnQTKGRB4g8M912zCLCFjOVch%2BWGv3gIhAM6%2BAe9TQMzcXlfEvruK5XsFvsI8BZTXeMqGrPSe9QGpKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Kck9Ct%2F7aCDMsOoq3APGG%2FHjWIeU5fitqDLNACGoLMtT1R1fXJaa5Q2FKhU3sfPSJV5Nz6QidvR7s%2BVZIqOa16dPcSh%2B7m7qlbEm5L058WmDiKNCULKXG8pNdtsx%2F5TlTfg8knI8xgmR1sRf5PSp2i82IkwDg%2Bmok8lvO4ZlTw0cB4yK8EI4clFx1tDNgo8AbA7ieYGeCMzO%2FQgloap9D66cbw%2F9SMLHtapbKUNjiJgcfhQI3Qg0%2BkyfWtYQqiZJ1dVL4D67er3rbuBxU5atu5358Ym39WL0lQdGBZKb1Sng8XwWMHnzqhQVlT6SEX4eIm8yn8DDJlhHmIkosdEjRvzCL6HKStvz%2FabV2nL%2FLXMw07yJ9lJiX%2FwFFCOfBsplgpkBxrhBwjW0hJPQ%2FUHLdyP1ugEuZ6jEwJ5uKFUN631f5%2FkzosN8ivZLsfU%2FbThyXHGI8KBeZ7TKi2PbfVRQz0kBgiJyck17CV09HiieZiMWdaLRzEXhBDLT210ptetEsCcd00j0fOIdmto9WazbGtH1naGEqKA%2BA%2BVGbUE%2BbZtKYjflEuI9uUeXb5CE7DIuTRbQqXAxcmKSkWFRFowyatsmLCVR4uqipYUWyvIvjqQKX6o%2FBUPTeFwTkVEdMylMBDwSJ7dsZcwdwjCRuqbCBjqkAaeMVrTHJQP6DsLV73GbY69frmN84JTotgwYKDF9mmnzE2a78spTytK006jCQaP4p%2F3k7zd3XMMZIpsS5pK10jCzwFvjmvKGpPJyvuWIzMtvyHY5F5YfJYi9fyaZgLI7BwBMVrAnjJnA%2BWzKMhuhGZI9kzprbqONKMsCAHlNnTSEFAH%2FTn7TNbFmvXUFGrV2iFC%2FOP6mAAjj1HzNzqLHaHDueHiY&X-Amz-Signature=5f9fd019625d0990d6e1e5ff42565c5912c4d1c5375e1cfeb954ecae64b361f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JJKY2JF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcQjljpPtfaBTW5mn6fbJzhR26MRj2J1yWJxQggDIelAiAmxYVPnL8ogJrwtAm%2FF0VHWmCimYoAOMJ83es5hF1VIiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E%2BAkDGhxWuZiCT0KtwDtQO8MA0jYNEKW8efQkDY7SX4PnmsmTueqUe4RczY9GNlKtnJc2E7pCEFptkpzUmh2fe3WByvUVOj8IGjAlxdcxyBZAwAHE2WHq2ZQliNFhb85KWPyKTcEWu%2B5w1NVeKnbSKaj3LDwl4rzZjVBRJnwtvBTx9qLTLlmiDhUqOnXtJ2lzPw%2BlSuXQ58FjQbz6uOSvpEFwK9t26stk7EgNQfiGqTkg6jiDN0vYDy0nkt1ehm5pZHLKBvOluq%2F8UVKCWUrn%2BmV0aNJ09BOHYAW1%2BLAm2H7%2BXqbfn36QOsLwA1Yyn6d7chq8rvOJZuhnKgHoQeWqCwi0vucBgDTsjdz9n5%2BKFc9iBX47eWiWzq4ktWt%2BFzB7PL4yb3tJxIBbA2aYZwZeDq6Fzdv9yAfacsfYxrH6o9tElv8afN9nZOfAzmNor5kKLptLEWG9drT445%2BBWMOTdrfiVeIk8FJ%2BUbXIiQ7XGldxtzPbYO8KrZgJl%2FOAOJDRIsEId8fLGE1uUYFomM1nL3imarJ7mxKijCzT5axTnrEvD0YydCtmtZo245HDtwO1MDtY0kE7LbgW8GdegUXqNppOZuhh5PBbvyp7btmQZFPHSSyDMoZcA9%2BHfv4AQNqh18ZwjMTwufrVUwmbqmwgY6pgGZsdgj8A%2BO%2FoniS4sYNOHE5c6dfOUeaF0LMm9snQe%2Flo58uAroy3AQwBuln3GhrdcAX202GfoXmKl7fxPnMH9lOvX3Jgsa4u42Xuutk0z9SCmCdfwdOpjfjM6mFDQJWJxNi7rkt5ZC8YC0vu0pSe00g8J%2F2ygxPm77Z4R2viHYMpfuJhGRcU9kXFsLLG4QE6XDcP988wWGrzPQtBNquoQw5Eg%2BmcuJ&X-Amz-Signature=33dc020f441f48731b111c364159149b942fbbc5abf89fa8227add8a72c9ebb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3O42G63%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBuN%2FQLez8TTPr65CpHyeKPZNnyTONYS9BlauuaF9TbAIgLUcw2llDUaRPVOz8ysAD4iO2kWT613eIjPt%2Fnky6g4wqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJKHRCAw%2F8H8sO14yrcA%2ByHin2PYV5sy8SNePMQP11Q9HEDKGazPtYEMkfXAO7AFNgg9ASv9v5HnvhXN8%2FZiAL2%2BKdCkY3yx1AyT%2Fes6BfGp6B4noH%2BmIJ9Jrkcvke0TrHzqCuRTWbVXbScDYdRC3pGHGHzd6QYql0zlmr5mpZwFB7nIN5wBC%2FzlqFao5tUAxeOP4d%2Br7IMVgRP9AINNfLPRvu1Bb%2BqFuzCyUfdvv89JRxp6lGTtfIgQ89GAOu%2BEpgfY7WryRhDnzwfnSe03JP5S5UTBTX9Ncgxz1xnBMeGb9FPbsX2aINshLL7zsWkEP6Nc%2F5d%2BUoe0Yu%2BVpu9wdc8t3vKU8Cib6vnDYJZ5jNDbthCmWF4%2FDVoC0MJ17Fdu9KQfH3ih8g2Hbg0g5wnDkLA7O7j9L%2FBfIJ9sGimdWMwK0GITFHYOqbwKQzhOOiLQmijw663V7GZd%2B4%2Bio3RBf3SOsT8SKX9yn%2Fcoq9TYwdvju3%2BYcToIjmI0REeyRzQfkiCYYzpOgoCqMBDJqxE5UlWOlHeXqTJPvAKTe37ZgT7LJG6c5ZglE8CrSgH1ZkSRN0qSDYo5kHR80UYHzkKEin9xnrywwoGbs89%2Fxm4F4Bn59Nth8m%2BxdnXzqyD%2BpDdqEouF9Gvu%2Bkp1nsQMKS6psIGOqUBE7RZwJ59MvBzy8%2F9xUpRpp5N%2BuOrPgqra4LJigIJOjiIyY8Eg6l02nqtsJRopn6XumJumuPGwSTfCDtL7jcsHUIt9dHFcU%2BeV7p2IAHLNTe3diQ0ECMTrb%2Bvz0C4vkKb8KUh%2FEmtaMDVDxR7Sf4cQTifi7X8RVAfswXM3Ya4hvWeRJy4hv5FdMxzjelTm8oabX45CDCl%2FakeNFRploHLNdmwPKll&X-Amz-Signature=c30b9e72b97fa3625fd6a25186a505c139354005014d4ddbc46563259fcd5dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPPSBWO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNaYga8%2BTB1GQOnQTKGRB4g8M912zCLCFjOVch%2BWGv3gIhAM6%2BAe9TQMzcXlfEvruK5XsFvsI8BZTXeMqGrPSe9QGpKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Kck9Ct%2F7aCDMsOoq3APGG%2FHjWIeU5fitqDLNACGoLMtT1R1fXJaa5Q2FKhU3sfPSJV5Nz6QidvR7s%2BVZIqOa16dPcSh%2B7m7qlbEm5L058WmDiKNCULKXG8pNdtsx%2F5TlTfg8knI8xgmR1sRf5PSp2i82IkwDg%2Bmok8lvO4ZlTw0cB4yK8EI4clFx1tDNgo8AbA7ieYGeCMzO%2FQgloap9D66cbw%2F9SMLHtapbKUNjiJgcfhQI3Qg0%2BkyfWtYQqiZJ1dVL4D67er3rbuBxU5atu5358Ym39WL0lQdGBZKb1Sng8XwWMHnzqhQVlT6SEX4eIm8yn8DDJlhHmIkosdEjRvzCL6HKStvz%2FabV2nL%2FLXMw07yJ9lJiX%2FwFFCOfBsplgpkBxrhBwjW0hJPQ%2FUHLdyP1ugEuZ6jEwJ5uKFUN631f5%2FkzosN8ivZLsfU%2FbThyXHGI8KBeZ7TKi2PbfVRQz0kBgiJyck17CV09HiieZiMWdaLRzEXhBDLT210ptetEsCcd00j0fOIdmto9WazbGtH1naGEqKA%2BA%2BVGbUE%2BbZtKYjflEuI9uUeXb5CE7DIuTRbQqXAxcmKSkWFRFowyatsmLCVR4uqipYUWyvIvjqQKX6o%2FBUPTeFwTkVEdMylMBDwSJ7dsZcwdwjCRuqbCBjqkAaeMVrTHJQP6DsLV73GbY69frmN84JTotgwYKDF9mmnzE2a78spTytK006jCQaP4p%2F3k7zd3XMMZIpsS5pK10jCzwFvjmvKGpPJyvuWIzMtvyHY5F5YfJYi9fyaZgLI7BwBMVrAnjJnA%2BWzKMhuhGZI9kzprbqONKMsCAHlNnTSEFAH%2FTn7TNbFmvXUFGrV2iFC%2FOP6mAAjj1HzNzqLHaHDueHiY&X-Amz-Signature=03617285c2f90d6028b61f6a1b30e22f350493219c7b3adf615d0ad734057204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
