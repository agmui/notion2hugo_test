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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWEVA4E%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCGNNjdXrEgnDTLE3wC0M5CE63LZySNAWOXP86p712KhAIhAJmbNvBozdXG3p0w1NNmNmHBxUW%2FSgjymRJ7YnjtX8N%2FKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygr1dAe%2BHVfElDOzUq3AORFFg5s5V%2FvOhDEi8PQoQlETxyiZ%2FZF3wAqMCrm8iLH9EEN9IuszkvXGVET5VNwd8jZ1en%2F0TEosgsGtYg3hof02FhRfnMSZMyZYKG6W%2FM%2FKDhpo%2FnNfcfCkv2shSDYlmM9XfIZABB6%2FsIuRyU9OXz%2BifTPeWyAUcWXYgWlcAgUKfDrjsDiJnvG0MoMEzVl9dr0HLJ%2BMq92I%2BsiIjl86ENbCO8cZ9XFwFBVoh1TutBZLSx8XFIfaER%2BYoYXn6xb0tw47Gu6sn2B72lUUwowSujEegBtaCPydv4EtH8UZ3EZmMawsnL0mz4lfmwn%2BezCSDbX6Go13ZGoAG%2BBSJ5tHgsOiSUjLKPf2bJZqOtqKnKHaOaBzpzROteHQaRE0HjKmOJ3Cz%2BJxJQ8nompK5Rq0%2BfJYfpaA3rwQeGGXEiQ65p%2FRP%2BuzDjF1fAf5w06Hj0GV%2FCLUh%2BMBJie2GlTbwvRZT0UJZTOs6lp99Wk7CXj7Q0Cf%2BK8SIXtWFXczr9%2B%2BXhE28frkX0OEcNyWgGhHlKsc0%2FfvtYfE0rt0fx157Zz09Y72oA%2BCrV%2B6jMlVzDBaxJej4%2F%2BrLpWYWozOLBXQny89D%2BjjzNYDaEA8lZg0MaFaIFwq7W9KVRplHgvwnBNDDmoaTABjqkATn49%2BRtlKMFfwCGKNN9bDifEu%2BxMbJy3KuIyyNnvpZF3u3jidY8Ji3BDmmSzRUGA073QCFW31xo0dJNK3F%2FMnqXO%2B2DNDdxxximP14H7%2BCWR510jlUEZq9xhqNxPpvkMMn%2B%2FPArwwZLn1m6DvcnRbIv9K%2B65C88BX4G%2FY34ejZ7mNSUA%2BkleVa1fJoi37%2FYVEOAIMDCep6xYdCE4kwEwH3dYiDq&X-Amz-Signature=fcabb2a15aa001a85665bb4b9b6e4587da9ca3a0e0e1cb72dea14188517ae3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWEVA4E%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCGNNjdXrEgnDTLE3wC0M5CE63LZySNAWOXP86p712KhAIhAJmbNvBozdXG3p0w1NNmNmHBxUW%2FSgjymRJ7YnjtX8N%2FKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygr1dAe%2BHVfElDOzUq3AORFFg5s5V%2FvOhDEi8PQoQlETxyiZ%2FZF3wAqMCrm8iLH9EEN9IuszkvXGVET5VNwd8jZ1en%2F0TEosgsGtYg3hof02FhRfnMSZMyZYKG6W%2FM%2FKDhpo%2FnNfcfCkv2shSDYlmM9XfIZABB6%2FsIuRyU9OXz%2BifTPeWyAUcWXYgWlcAgUKfDrjsDiJnvG0MoMEzVl9dr0HLJ%2BMq92I%2BsiIjl86ENbCO8cZ9XFwFBVoh1TutBZLSx8XFIfaER%2BYoYXn6xb0tw47Gu6sn2B72lUUwowSujEegBtaCPydv4EtH8UZ3EZmMawsnL0mz4lfmwn%2BezCSDbX6Go13ZGoAG%2BBSJ5tHgsOiSUjLKPf2bJZqOtqKnKHaOaBzpzROteHQaRE0HjKmOJ3Cz%2BJxJQ8nompK5Rq0%2BfJYfpaA3rwQeGGXEiQ65p%2FRP%2BuzDjF1fAf5w06Hj0GV%2FCLUh%2BMBJie2GlTbwvRZT0UJZTOs6lp99Wk7CXj7Q0Cf%2BK8SIXtWFXczr9%2B%2BXhE28frkX0OEcNyWgGhHlKsc0%2FfvtYfE0rt0fx157Zz09Y72oA%2BCrV%2B6jMlVzDBaxJej4%2F%2BrLpWYWozOLBXQny89D%2BjjzNYDaEA8lZg0MaFaIFwq7W9KVRplHgvwnBNDDmoaTABjqkATn49%2BRtlKMFfwCGKNN9bDifEu%2BxMbJy3KuIyyNnvpZF3u3jidY8Ji3BDmmSzRUGA073QCFW31xo0dJNK3F%2FMnqXO%2B2DNDdxxximP14H7%2BCWR510jlUEZq9xhqNxPpvkMMn%2B%2FPArwwZLn1m6DvcnRbIv9K%2B65C88BX4G%2FY34ejZ7mNSUA%2BkleVa1fJoi37%2FYVEOAIMDCep6xYdCE4kwEwH3dYiDq&X-Amz-Signature=0a3de302033a8634b1736c921141d5394b0162dbd3585ece3e2da0cc7118af68&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4MUMCT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCEEtdAOxnZ%2FF%2BS0%2FeOLY8uiHRn54m%2FBaHgYhrkThEn8AIgVoetCtyLTJgBBwdtLHgV7T0KyeMARo%2FGNggAf4frPH8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BxXdBfHGyrv6aPfSrcA9Dq4eaAkgGWvt09Cb9tXOSH7Unj0O1JXlwesQsTn6Lvsm4GAqJVqqPI7J1oZkYjQkuhr6sMCRpgdoudd2wx3s37Rd03%2F6pBOOO8JURKCRtXsauMkc3tX0YbM1eVyBJOWcauY%2Bz9G%2F63izboIGzSppeUbvJz2IBvfkTAJhHYOAwXlZnEVbXiHxFDQo3JHyds7sP047%2BPrES9JW%2FKji2scX8tGWIBwHlUYcQbm1v9R36jOnSxcSXQcUdkh80Q2KMXz3SF1Hmq7aHXS9VtYXnN2FQ1gQtHKafmzdjw3oZdnaoCd2pV5PTg3RSesshsHya84TijD2M4y5GKz5YXbZSBWOmlDzRs%2BDO38ONLjopUA9Q%2BLrZ%2Bw8cD75E0215SUSiTSP9%2FB%2F5eJRTZZx5KN4zkjqe%2FZIUwhoreEb9wtjg6WgQ8HaxWwb9j6nEnGITMD5V3e1xkx9c3z3Cy%2BcPA0g7xfOlVxEsrSC%2BwRQeUtSPbY9D3n5kfwbv%2F%2BnneWidBZ51XZs11730oEqfHQh5BmZFFmimnRaAZRJuS2aam756fSr93GoLJJi9QVu1u02GRkHtU%2BSZ55NYa7lrma6RbbgijB8fADczOWdgyoawuDeiAnBg6TmcESknulZNdK1TVMM%2BhpMAGOqUB8nemmdu5S%2FvJ%2F6myE4jUW72SfoMuxYfYgJ5aFzrDVVibx2SfilCAeLGZ2yaecJGxYmWDbzdrkbwC4yw7Ed87hcgLLJWpNfcAcQ%2BYA97JGujGRKrzHuAj4Ujjng%2BYatNmsRLoQTVTJ4y3mIBM0z2u%2FH53lzsu08jRysy84%2BVEBezxzPDlik5iQkqsxzVn0T%2FTAPILF7DiwYUpbrrp%2FLnI%2BJKVXn3d&X-Amz-Signature=c7bd38e3de43276f6e0c3c33091c4c26e80e07136a6c03b5fd819178d68eb7c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXLI3C2J%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDARFC%2BDb8ziOuaLAbiX2geI7%2ByAXpVyuYIj0MGu%2BsNugIhAKMvtcSdJIEbobPcctlYLX3OnjXjkyUEYGZnuolf95NVKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPY3KJyRhixlepPZEq3APfJIkB3tVwnKR7RgDnjZDCRyTP5n%2F0l03TtPdsU2nDxFfp%2F88090liIqiW5xB%2FGPPU3Gd%2BMcSuipfBqEOqx9VzwCJlqM2P6t7W3oJZba3TfnrFnSKOOX7kmJ6qVQ8%2BZI9pqR58tXBWKOuVoJ0LPZcRnvjZATRIejuaWc9ggIOU5IpKW4KBhX%2BpnqhcQWWbZ%2B1E79FyE6xgz%2FAm72Zw0JtTzRBsfYFqO%2B7MnCCH5tZRjDyDk7z%2FrBBCbHmPKWNqY%2BXzMRnW1ubOEx6m4e0x72DKNqWrHtDdg4L0zwfKKdEXbNrgxXuUm2vlKx1E%2F7I%2F%2F93jjN3m1bU2hokQbtqYab9LALXnKCLfLPznp5MrsY1fC3AhVoLEN3%2B%2BIThQYcGNdJZh0LqZyafZIL%2F2fENawTkNu34%2B1lRIvINfzcLEdHyCQFnoUBFuY3oLmJqfXJgyqo7aEczKY5iq%2BZQS%2FVnx2ocDRRUod%2BR1vMOTVoxKTuIXmTnleVkI07QQ1qRaVKn4rQRTNBczuv5dVbwB%2BepY9V6ZTnD8AxjKnfdYL7txX4WJdcC4UEEWTInjdlJzB8eWTWuLw0F3NYQbEEr9vjCv3wDGlN88nZmMnWSZuso5%2BA5JcixtDyxRBrB5RU1XijDGoaTABjqkAXkn0RSNL%2BI7%2F0BzJglwZ6B4dpy5tr9KbGd3Frhm47iKknXLFHcxpOZVmfygK5sKzaelx992aldxTcbhAsZiBOKikYjDlRGBqJBbPjYsvNuabWt89c%2FyFqFfzFlMBXcaCR4gjJs5hrtuDp2mtDqR%2FgK%2FuDa9h1ttmm5JSvRuYcPGdVfGnSxAf%2FvB0uymXyn6kZYn28KOh4yGwZ%2F4%2FP03OKcq%2BB1l&X-Amz-Signature=ac49f286b956eb74971bd5f77b6b086d100a132c431aee278eed63226628cb1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWEVA4E%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCGNNjdXrEgnDTLE3wC0M5CE63LZySNAWOXP86p712KhAIhAJmbNvBozdXG3p0w1NNmNmHBxUW%2FSgjymRJ7YnjtX8N%2FKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygr1dAe%2BHVfElDOzUq3AORFFg5s5V%2FvOhDEi8PQoQlETxyiZ%2FZF3wAqMCrm8iLH9EEN9IuszkvXGVET5VNwd8jZ1en%2F0TEosgsGtYg3hof02FhRfnMSZMyZYKG6W%2FM%2FKDhpo%2FnNfcfCkv2shSDYlmM9XfIZABB6%2FsIuRyU9OXz%2BifTPeWyAUcWXYgWlcAgUKfDrjsDiJnvG0MoMEzVl9dr0HLJ%2BMq92I%2BsiIjl86ENbCO8cZ9XFwFBVoh1TutBZLSx8XFIfaER%2BYoYXn6xb0tw47Gu6sn2B72lUUwowSujEegBtaCPydv4EtH8UZ3EZmMawsnL0mz4lfmwn%2BezCSDbX6Go13ZGoAG%2BBSJ5tHgsOiSUjLKPf2bJZqOtqKnKHaOaBzpzROteHQaRE0HjKmOJ3Cz%2BJxJQ8nompK5Rq0%2BfJYfpaA3rwQeGGXEiQ65p%2FRP%2BuzDjF1fAf5w06Hj0GV%2FCLUh%2BMBJie2GlTbwvRZT0UJZTOs6lp99Wk7CXj7Q0Cf%2BK8SIXtWFXczr9%2B%2BXhE28frkX0OEcNyWgGhHlKsc0%2FfvtYfE0rt0fx157Zz09Y72oA%2BCrV%2B6jMlVzDBaxJej4%2F%2BrLpWYWozOLBXQny89D%2BjjzNYDaEA8lZg0MaFaIFwq7W9KVRplHgvwnBNDDmoaTABjqkATn49%2BRtlKMFfwCGKNN9bDifEu%2BxMbJy3KuIyyNnvpZF3u3jidY8Ji3BDmmSzRUGA073QCFW31xo0dJNK3F%2FMnqXO%2B2DNDdxxximP14H7%2BCWR510jlUEZq9xhqNxPpvkMMn%2B%2FPArwwZLn1m6DvcnRbIv9K%2B65C88BX4G%2FY34ejZ7mNSUA%2BkleVa1fJoi37%2FYVEOAIMDCep6xYdCE4kwEwH3dYiDq&X-Amz-Signature=6ba9fc08d5a71bb9d350a25c21372d8a0ab13a99543d9285237ccfbfb3ca5a82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
