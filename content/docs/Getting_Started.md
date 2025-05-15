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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATXV45L%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQFGpbE4wPmTwWY%2Fm6NvZ9vfkWvEiZsHzQGdKb3XoU2AiB3Ip9y5iAL%2BO%2BqUwFyBfTgc%2FdIrnJ4UVGNs%2BRwxMj%2Bair%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMpIAwI%2FMkHzKohWSbKtwDUq%2B4zb%2BcYWB1DhG0NipUToxE6RTvRQO%2FpXauVeMAORXhoVqpcg2rhnxrgQXQz7NX0OnR8gtA9f13wWIPP8%2BdjUiIbWInuOEar6Zay55eJA7hAIL%2B9VM8bVCO9rMtAZ7hnNaLUfzt2epSsL1PUndR2DjfQDyhGPXuqWJxzlq1p0pb80gPJr7d09udgEQ%2BJchRhRP%2Bx7L1DIsfTwhvhOXZb9ALl1Vh3lW7gqsV3iqAitybx7dFEp62XI%2Fr04VJYJ2tG3qtcWG3qpkJpEoVJ39TmG8Oetfd7tj8jsmlnYeF8cjXKDD7Q0lsUMU5DS%2FyOnhkh1O42uWIhu4spo%2FJ0nDRzbfzfSySLoBwGOYY%2BaUGPOHETIEYJMOTJ2j5JHFFAEPi5C7%2F4epCYpo5uEFlNS%2FF6FVxZ26R6AUXCfjvxQTulKCdKFmbmihpmN5b%2Fgmvog%2FvoASlSeqihyC%2FP%2BOCZPL6NMzCHyZN8iG%2BUN5j5yH0FJC5be8DjaWykbzdxRb08Jn9E7DAjTlzBra8puWsIjz9jUL2UUNZk4dz2hWqY2qty7nLFRYy44WddI%2FPUqepkoXxyYSlzzgftaWLyV6tCUpjDZfD9a4Yq%2Fhl9xMEb99tKXKb8x9HRmv8ROaOQy0whYWXwQY6pgF1j3fb2PIjGlxix7O512BcXBJ%2F3EyG1xGOYihaPMqhm%2Bwr%2BilPICHRNe6kTpXdfY0DW3hOD70EwHvYv06aiirdHRz6ukykRM5JQsiqO%2FLAl6HDLwV4xGz7%2BsOxARBfcFKrjkkLdoUh%2FKrY2OumIpOEgpMsu6VfqAhoQazlH9d8zaYuh52jruuE8LIvCloXOsEyM43NK4JVGjgNkbYfp8PyvvTyPXVJ&X-Amz-Signature=c45655677374e0da26d1c44b2592c46a9d291f5378ca02665e99fe5236e4ac6d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATXV45L%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQFGpbE4wPmTwWY%2Fm6NvZ9vfkWvEiZsHzQGdKb3XoU2AiB3Ip9y5iAL%2BO%2BqUwFyBfTgc%2FdIrnJ4UVGNs%2BRwxMj%2Bair%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMpIAwI%2FMkHzKohWSbKtwDUq%2B4zb%2BcYWB1DhG0NipUToxE6RTvRQO%2FpXauVeMAORXhoVqpcg2rhnxrgQXQz7NX0OnR8gtA9f13wWIPP8%2BdjUiIbWInuOEar6Zay55eJA7hAIL%2B9VM8bVCO9rMtAZ7hnNaLUfzt2epSsL1PUndR2DjfQDyhGPXuqWJxzlq1p0pb80gPJr7d09udgEQ%2BJchRhRP%2Bx7L1DIsfTwhvhOXZb9ALl1Vh3lW7gqsV3iqAitybx7dFEp62XI%2Fr04VJYJ2tG3qtcWG3qpkJpEoVJ39TmG8Oetfd7tj8jsmlnYeF8cjXKDD7Q0lsUMU5DS%2FyOnhkh1O42uWIhu4spo%2FJ0nDRzbfzfSySLoBwGOYY%2BaUGPOHETIEYJMOTJ2j5JHFFAEPi5C7%2F4epCYpo5uEFlNS%2FF6FVxZ26R6AUXCfjvxQTulKCdKFmbmihpmN5b%2Fgmvog%2FvoASlSeqihyC%2FP%2BOCZPL6NMzCHyZN8iG%2BUN5j5yH0FJC5be8DjaWykbzdxRb08Jn9E7DAjTlzBra8puWsIjz9jUL2UUNZk4dz2hWqY2qty7nLFRYy44WddI%2FPUqepkoXxyYSlzzgftaWLyV6tCUpjDZfD9a4Yq%2Fhl9xMEb99tKXKb8x9HRmv8ROaOQy0whYWXwQY6pgF1j3fb2PIjGlxix7O512BcXBJ%2F3EyG1xGOYihaPMqhm%2Bwr%2BilPICHRNe6kTpXdfY0DW3hOD70EwHvYv06aiirdHRz6ukykRM5JQsiqO%2FLAl6HDLwV4xGz7%2BsOxARBfcFKrjkkLdoUh%2FKrY2OumIpOEgpMsu6VfqAhoQazlH9d8zaYuh52jruuE8LIvCloXOsEyM43NK4JVGjgNkbYfp8PyvvTyPXVJ&X-Amz-Signature=0881f17397de2ef8cb9800d3ad09e4cc0460927f43347ce98d02b623e4765916&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATXV45L%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQFGpbE4wPmTwWY%2Fm6NvZ9vfkWvEiZsHzQGdKb3XoU2AiB3Ip9y5iAL%2BO%2BqUwFyBfTgc%2FdIrnJ4UVGNs%2BRwxMj%2Bair%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMpIAwI%2FMkHzKohWSbKtwDUq%2B4zb%2BcYWB1DhG0NipUToxE6RTvRQO%2FpXauVeMAORXhoVqpcg2rhnxrgQXQz7NX0OnR8gtA9f13wWIPP8%2BdjUiIbWInuOEar6Zay55eJA7hAIL%2B9VM8bVCO9rMtAZ7hnNaLUfzt2epSsL1PUndR2DjfQDyhGPXuqWJxzlq1p0pb80gPJr7d09udgEQ%2BJchRhRP%2Bx7L1DIsfTwhvhOXZb9ALl1Vh3lW7gqsV3iqAitybx7dFEp62XI%2Fr04VJYJ2tG3qtcWG3qpkJpEoVJ39TmG8Oetfd7tj8jsmlnYeF8cjXKDD7Q0lsUMU5DS%2FyOnhkh1O42uWIhu4spo%2FJ0nDRzbfzfSySLoBwGOYY%2BaUGPOHETIEYJMOTJ2j5JHFFAEPi5C7%2F4epCYpo5uEFlNS%2FF6FVxZ26R6AUXCfjvxQTulKCdKFmbmihpmN5b%2Fgmvog%2FvoASlSeqihyC%2FP%2BOCZPL6NMzCHyZN8iG%2BUN5j5yH0FJC5be8DjaWykbzdxRb08Jn9E7DAjTlzBra8puWsIjz9jUL2UUNZk4dz2hWqY2qty7nLFRYy44WddI%2FPUqepkoXxyYSlzzgftaWLyV6tCUpjDZfD9a4Yq%2Fhl9xMEb99tKXKb8x9HRmv8ROaOQy0whYWXwQY6pgF1j3fb2PIjGlxix7O512BcXBJ%2F3EyG1xGOYihaPMqhm%2Bwr%2BilPICHRNe6kTpXdfY0DW3hOD70EwHvYv06aiirdHRz6ukykRM5JQsiqO%2FLAl6HDLwV4xGz7%2BsOxARBfcFKrjkkLdoUh%2FKrY2OumIpOEgpMsu6VfqAhoQazlH9d8zaYuh52jruuE8LIvCloXOsEyM43NK4JVGjgNkbYfp8PyvvTyPXVJ&X-Amz-Signature=efb6f41fd02dc77bf2abe2f0b37eed51e0de48e54ed373451e9d2ec61e298880&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJ7PHD2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCvXpdVbtQMA26Vj223bEAG2Cg5zwQES%2BbkFIeKTolmTwIgVQmeQ3X9%2B71bWmzSzA1p4KA7KnGQk8gw08d8s2BQMBYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFBoD%2Bfqq7%2FKTXCrASrcA2Mbu9ywsGd8gM5m46sohoFm9xWbCOXMj2FR1jCCFbNcXhUpDOhMsuJD%2FVkzF7luMwedtQnJMCNZdlspMFc%2ByGYZ31ghYbsxerp0%2B%2BcVuGjvoZR3pQFaFrAVEQmJaL08me6e9QlsdaJSsDhYW5umkA5mPVWG4ILlaz65HxJ%2FwEib1IHRTrGiLqtUpKlbUqOSFQp7E2VZoEQ0AvamJ9BIcbxQqUisNDDkyQ9M1HTO6Q4BhJKe4PzrkgXUAE7dywnJrsIr%2BwxYg0XTX4TWMxxfVFetUmCrDZZirIT%2Bcror0RWOa3UYljR37h4IrpJGf9cdzyM7Jl5Ok9Li145GV8mv8gj%2BNxWFyrWpY%2F3Ec5RXo5Yjo6xtAs7lmWgjZFrvwTyXa7cgE5jZxXQ%2FJrZnRVixqTVJREFtWMTK9hRm4PvFgbAQgajeQF3fFrTOZytU3LtBaZMdxZx67eld13L0t7zY%2BIj1nzQFBwoTf7rknAY0dhekTypJestM2nI44LFNPmo%2BSafParl06vqaETZhGRAhuy5vI%2Fi2040i5SVaFxRIE7CagXXAY6TUi1FwABlahjTdgGrZiDeQ5PyuSe6b9qf1ZC6kpBKSjU0HtQ3kDyWd4o6HzriiF1WNnc3DyS4UMIaGl8EGOqUBDU1Il0nNR8ohdtl1Ah4YR6M0tMLNzcSbAOnpFAR%2Bd39GbJoYh8TG%2Bb2LtHmc4sZ6JgU%2BF0oybOri6UsqOFtaV%2F1wg49zWLzmMoXrd7ior%2BMGieFEopWM%2FV7qE%2FQtfTrGoq1B28vyT34ZYEMrdsapnDok%2F1XpAjMMzN4hm5BsDprPfzGJ7Tk4OkUAG6IQ6Xgj9j%2Fac5D04hFnMKQ%2Bze5cHW4u5EvW&X-Amz-Signature=439c6a32ce6eba6560ea0675abba079ea6a15675e73122918845b38970b18062&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THMJFSIG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDrq%2Fl%2BWtrRQCeVIIklA3XJDjjq7%2Fhr3Onvn9o5ndAndgIgLG7VO%2FqjVqmD%2FO%2BbcKxxmX%2FX91k4eXzuRZBUBw4IgEsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPDj4xMNx%2BRoMLkBVyrcA%2FBApczJrYhpd4QO1W5ty85jAWK6AGD675v8%2FufH7aj%2Bf9lJyfXBUtfKOGlN1N%2B0EYreZTp5MkH1TDYpSJc3mrVUZ%2BTCcbeGkpCJN93D%2F0lbvIb5Oi2aYMXnBIXO8wyL0nHdKd6sP%2B%2F1Gz1AHf1RWC0aDYOILY%2BaLxCOWc3y64HbxmzzkDBWfsHFsd4a89ykq4WM8F%2FQ7helu4e%2BYGou04EfcHZixaAJeuQZPqOScCDmWv2wY2u7ThSyZ1y6laupaT2ukZkpyYl5ujt2xdTY0J2iQNAgwE%2FVJqIIsiBU%2FqeCOxcLTFHeh8oW1t2gJkUi4n6t48CZ5Bd6pESOLY9W61ccCdgsx8azeTllWwQsCqCJ6J0a6cBRQyLaRZ5YpIq52L36At0RAivs%2BpIUoEzleY98utOJ5V1nGhiZAhuerqC0SkLdmTrPoZahXwRGaOd%2BS%2FoqYnAlunXzAGMlLwMIENYdUP%2B5E9df3SGjpXATrjMhjxw7x9mykhl%2Bi8HszHJVmGieoiWpAEqnNK8TjgKj6OcbqNwS0qz0IsU9DpnJOP0eAtb4su3pRuc1BNdMXDS%2FEKiZFKlzpkBXmHbMyi61iQFd3g4Mtn7w%2FVrKYjE4OeVObr76QlbpQXBvJ2u%2BMKaFl8EGOqUBWVVHYabMPypgLjqDA6EWabxyGvFnWc4fKCGIABKItDx86Ce2nipuP3De6BbTuNjGoaDANNtUjYPXX5HjFZrvjDDZsvGogLqDU6Wc6%2FEHwP0NaPnYuriueQU8aQjkQnWjcUR%2FFXbe7n%2BgfUQvlNYEFa9suKqYD%2F7zV9toawWbRMG%2B%2Ffy6fF0%2B7ynxWEzZlWzjniuD8OMNcy%2FuGUIBP71IJgDYbLS0&X-Amz-Signature=63e99014129b159968a586b8292c3a83e35c902f1177bfea36fcf88d52467714&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATXV45L%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQFGpbE4wPmTwWY%2Fm6NvZ9vfkWvEiZsHzQGdKb3XoU2AiB3Ip9y5iAL%2BO%2BqUwFyBfTgc%2FdIrnJ4UVGNs%2BRwxMj%2Bair%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMpIAwI%2FMkHzKohWSbKtwDUq%2B4zb%2BcYWB1DhG0NipUToxE6RTvRQO%2FpXauVeMAORXhoVqpcg2rhnxrgQXQz7NX0OnR8gtA9f13wWIPP8%2BdjUiIbWInuOEar6Zay55eJA7hAIL%2B9VM8bVCO9rMtAZ7hnNaLUfzt2epSsL1PUndR2DjfQDyhGPXuqWJxzlq1p0pb80gPJr7d09udgEQ%2BJchRhRP%2Bx7L1DIsfTwhvhOXZb9ALl1Vh3lW7gqsV3iqAitybx7dFEp62XI%2Fr04VJYJ2tG3qtcWG3qpkJpEoVJ39TmG8Oetfd7tj8jsmlnYeF8cjXKDD7Q0lsUMU5DS%2FyOnhkh1O42uWIhu4spo%2FJ0nDRzbfzfSySLoBwGOYY%2BaUGPOHETIEYJMOTJ2j5JHFFAEPi5C7%2F4epCYpo5uEFlNS%2FF6FVxZ26R6AUXCfjvxQTulKCdKFmbmihpmN5b%2Fgmvog%2FvoASlSeqihyC%2FP%2BOCZPL6NMzCHyZN8iG%2BUN5j5yH0FJC5be8DjaWykbzdxRb08Jn9E7DAjTlzBra8puWsIjz9jUL2UUNZk4dz2hWqY2qty7nLFRYy44WddI%2FPUqepkoXxyYSlzzgftaWLyV6tCUpjDZfD9a4Yq%2Fhl9xMEb99tKXKb8x9HRmv8ROaOQy0whYWXwQY6pgF1j3fb2PIjGlxix7O512BcXBJ%2F3EyG1xGOYihaPMqhm%2Bwr%2BilPICHRNe6kTpXdfY0DW3hOD70EwHvYv06aiirdHRz6ukykRM5JQsiqO%2FLAl6HDLwV4xGz7%2BsOxARBfcFKrjkkLdoUh%2FKrY2OumIpOEgpMsu6VfqAhoQazlH9d8zaYuh52jruuE8LIvCloXOsEyM43NK4JVGjgNkbYfp8PyvvTyPXVJ&X-Amz-Signature=ee93cbb2c47e434f5df89cfd9aab2dbc0d3e80a7e7722d9f6f185c82776b1c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
