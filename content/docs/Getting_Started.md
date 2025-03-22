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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665534M34G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICoRnhQWjjy4tj2%2FGSgmVSwwFuBLiVWxgDzUCkrPXLvmAiEAqCin7iDXT7yOWsTd3Q8ZQ1vfD3uSjJZcyrWwk5t5PLwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEk2x%2FvxRnIX8O9PCrcAzpT5tz86x0wK4rocCUufr6zGVgo%2F8Fdu47l4yxh7pUexZSPKka8WI2bg6l0Y2M79hFFo4PdJ2wjpUG%2F0%2BaZxkwWQuD59gxoAls6dMcsIzy4E5ZV3NS%2FYVatiYFK7myAHxdfJXU%2FsZ8a8uhMiA9XZFxo5G7KxRRbQYfQazTu5xLjn0W86WrzZfcdAzXqxltffYdponaQwiIIESC3Z5I4TOVXiLGmBuDJKgql2n9FOmXA7jv97NCjpPupMioFF2Xpq%2Brc982Y1SpqOSPnfgt5q6rY2453cpsX9zman0JOeCXhIY6gNNvTEfuA6SXmiecOwitmknqFZ0kmiWYQLTdpL31Gl45auKTL%2BscvFdIsyx%2B5K2bRgT4zgQILQ5p%2FaKViGxefrW2wBGguBw0LJNajDgFe3TRMAj6wcMbaltlX5SJKXgMUI3L5xFbaWdauv6B%2FjQBKUv7sRj18LI1gA6JTrAH8rX1gBwo5eJXIjQfQe%2FrSCvTjN8MpmKj%2FwrAB2Oz2vns2EhB8WC%2F8zyRbfGLIHonRioJAQTP3JcYTsPzdn%2FPxieYfSAQ0orN5wnbXKFwtJZfLLFQkN6dY8O4djmSzexK6jVVe5419qc7fUuUjPx%2Bfw2Wrt0Doy%2FkzTBgLMJm3%2FL4GOqUBnNp3KotXVFpUbnQ0%2BDqwMQ1SD2B0CJ6yGnbyA6sJpWHYDtq3Pftm7u1FCEyyOfJSvzessLdN6AXDVClMP6hSyTgm0ByJ5gBlIRoZTvoB83R%2FIOwh%2BR4WNAwr7rRqRvK19TaP4Lv9N9TTs2OfSGesYT3%2FcmlO%2FsHlsU%2FJEkIwQyGyktxeUvqJtGAsnZg%2FMNJL7jFsuBQ%2Fyj3v%2BU0YH5uX8cpcjP39&X-Amz-Signature=aee1ffd307c1b6138b7d8029d7770bc0b17863bd2e646acbebfa2b13fefda02b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665534M34G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICoRnhQWjjy4tj2%2FGSgmVSwwFuBLiVWxgDzUCkrPXLvmAiEAqCin7iDXT7yOWsTd3Q8ZQ1vfD3uSjJZcyrWwk5t5PLwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEk2x%2FvxRnIX8O9PCrcAzpT5tz86x0wK4rocCUufr6zGVgo%2F8Fdu47l4yxh7pUexZSPKka8WI2bg6l0Y2M79hFFo4PdJ2wjpUG%2F0%2BaZxkwWQuD59gxoAls6dMcsIzy4E5ZV3NS%2FYVatiYFK7myAHxdfJXU%2FsZ8a8uhMiA9XZFxo5G7KxRRbQYfQazTu5xLjn0W86WrzZfcdAzXqxltffYdponaQwiIIESC3Z5I4TOVXiLGmBuDJKgql2n9FOmXA7jv97NCjpPupMioFF2Xpq%2Brc982Y1SpqOSPnfgt5q6rY2453cpsX9zman0JOeCXhIY6gNNvTEfuA6SXmiecOwitmknqFZ0kmiWYQLTdpL31Gl45auKTL%2BscvFdIsyx%2B5K2bRgT4zgQILQ5p%2FaKViGxefrW2wBGguBw0LJNajDgFe3TRMAj6wcMbaltlX5SJKXgMUI3L5xFbaWdauv6B%2FjQBKUv7sRj18LI1gA6JTrAH8rX1gBwo5eJXIjQfQe%2FrSCvTjN8MpmKj%2FwrAB2Oz2vns2EhB8WC%2F8zyRbfGLIHonRioJAQTP3JcYTsPzdn%2FPxieYfSAQ0orN5wnbXKFwtJZfLLFQkN6dY8O4djmSzexK6jVVe5419qc7fUuUjPx%2Bfw2Wrt0Doy%2FkzTBgLMJm3%2FL4GOqUBnNp3KotXVFpUbnQ0%2BDqwMQ1SD2B0CJ6yGnbyA6sJpWHYDtq3Pftm7u1FCEyyOfJSvzessLdN6AXDVClMP6hSyTgm0ByJ5gBlIRoZTvoB83R%2FIOwh%2BR4WNAwr7rRqRvK19TaP4Lv9N9TTs2OfSGesYT3%2FcmlO%2FsHlsU%2FJEkIwQyGyktxeUvqJtGAsnZg%2FMNJL7jFsuBQ%2Fyj3v%2BU0YH5uX8cpcjP39&X-Amz-Signature=f9e34370b42e4cae68c06e2df11d680b159c8cc1be7db56fac2d5183dbfd82ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWRNOIYW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCn9tDm97Nltx1Fo5giXxmG8AQckPtGEuA76%2FhABrRPiQIgTtXdHdbhY8On3wYShbSALzq6u7rnP7wn3sZVH4AOOd4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPr6dfITsBlTBc%2BCircA33Fu65vW26qLb0yQALsstkcAa8W9rqR%2FnA1YxbUNsPlHGptzjKacWfE8wDMLK%2BPDNUt4o1ih6weTDhQPm88wdrzh5JqKRPDJ2H5vxzQFP5dAsGcSiAVmh3Rm3nB72pbJTGdi1412RG3dSc4sjq00sBNORwF3YlDgS62VZKcls7Frjke5UnMAuwFkeeET3zhxqPsqemwQ6Xm5n1dYHG3GuxdzrU%2B%2BQzKbqbLPEdH0Td38CPDNjnUMykAY2T4cuu1WDjrGnCio8pis1lMrPDdXUFIy2YgMKfMyFYW3ymfBcB8ptIdu9Z2UAfWKFyHC9RzYpFxwxlbTFS0fPhF5%2FEF2K7sxwWXxTQFEiJBtswRhiMgtCVTLpakSGd79V%2FXFJY1Jzhzuv7gX60PHsMlF%2B3cimarN0O7t7hzBD8JmEhuNtONXJkm5h2h2qeY%2B4MA4cHNGQqr%2FY2qpXIUBMUsWw5WwQ0GgcE7jeFFvArrFyvAsEfPBKKEZcTb7diKNBXWSMJPnru1epbozhnMd6fDs6xfSg%2F2O1HvTbWnacHvNjLqKRKutsnfZ7mYQy5jH6vKK2D%2BHugJVieejD%2BmeRnRDuq63lr4d9GzMAduwQwwBgpjsS8FIo8R3p2lHvgWJ7E0MIi2%2FL4GOqUBQ7pVIvIILc8czKM7wXpje9lqjFhPKPWbz3OoiKjt%2Fw3PGrxWUpcNwTM6DSO1rob5KKvQ%2FvMN%2B%2Bz8rq5jUSwLBxVEFkgDe7dQ%2FZy4vHzIzRlCGWXPSbuWdW%2FuDs4TY8L40ntZvgHT1nyM7PIVudVIpL0Mfd6VitB13zlauPckEvlQX8fN09wH7LhOoJ4fur0C%2ByuQ4ICRkR29oBqyhmPNfT12b322&X-Amz-Signature=b9e62ca5df38105a9b1274b7b5e3153fe22cd560c6672c9992f26938165580ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VATJ4V%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDUvR5FEpabEUuctQro8rG0vY3wFihP49ub079uCiUWbAiEAhjQYG8tYzZ%2Fa6HOaZAVdVLtVNDEIDR%2Flfrl0J4OzTFMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOHHY2RL2S33FLLRircAy6fNiRTKPxq1ldMnIaQ2t28cqeqyX7R%2FPJZpv62Zu%2FsnnkMU4GjB2iOI5rLudpYbrRO2itdICFFzq1g6kV%2BP4O8joaUk3gxvmUZ%2Fecfb9llfN5IZHnNoeKJM9QB93QrXAWpBPEGfs9JNLZ3X4xdqLvu%2Fdpqc%2FRFjYYMj%2BnVgugwm5HQzAt8r2IVlV3jiI1zzfNh0WAmRWGEYhmvXcFsfDoTwyyGfPYqdqY0FFI1TTq%2BRSBsS3EQdNls5x%2BFQcO%2FyY4FmTkajLPL0z4zCXeek6AMlA0qy4zaf4ST%2BfVrJ51irPLEq%2BiQwsnTlngP0gDplFkCXttnQTt%2FanABk7r1yLnP6Ll1UC52U3Ut6QN0%2FfOZnIphP%2FjKtyedJkDfxRmYvzM2MTwLGOfZXdbRE7s1xRSjFwEmxP%2FVCvxZ%2Bwmq1miDYfpRbDB6BFy2q5qIEgb5aO4F04aVIM10CdcHiogoue6gXFdzqT1XJVUnFBPGGZRQIF9s2pL9XHjEeQGd14odc0ACinGcZLsisi3f6tRjQt2DhfXkr%2BpjKfq6rpKEoxA4HvBKpUyV%2BB1BI1lVRHk1tUH4AX92Z1NRfaSOxmOjcPXHKGV2hXdeqf%2Bb9PcJd79J5trshJj4QVFGI4VeMMC2%2FL4GOqUBn8yeSjIxZfJQHLFJpP5RmJfApuGL%2BulO5HjZmtQrFxcSPPy142c0JvJGDTdFMz9yp8P8KgeaxlOwAGsW3ga0UDnBlcD7A2f7Rp1QuCJlcsHBdhxaj70DZfUSOXte%2ByQSshlgPl%2FbyvNbEDxnPer9qQofUI5d4P395QQk5odjaOUtSCAuyHN1LYTZ2%2BAi3wp63bRI7CKGXKJzYJL0r39z%2FOtV%2BKez&X-Amz-Signature=c07091cc2b1537f85f140f57c1feaa20caec4ae2c2647af9000797910d8f3ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665534M34G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICoRnhQWjjy4tj2%2FGSgmVSwwFuBLiVWxgDzUCkrPXLvmAiEAqCin7iDXT7yOWsTd3Q8ZQ1vfD3uSjJZcyrWwk5t5PLwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEk2x%2FvxRnIX8O9PCrcAzpT5tz86x0wK4rocCUufr6zGVgo%2F8Fdu47l4yxh7pUexZSPKka8WI2bg6l0Y2M79hFFo4PdJ2wjpUG%2F0%2BaZxkwWQuD59gxoAls6dMcsIzy4E5ZV3NS%2FYVatiYFK7myAHxdfJXU%2FsZ8a8uhMiA9XZFxo5G7KxRRbQYfQazTu5xLjn0W86WrzZfcdAzXqxltffYdponaQwiIIESC3Z5I4TOVXiLGmBuDJKgql2n9FOmXA7jv97NCjpPupMioFF2Xpq%2Brc982Y1SpqOSPnfgt5q6rY2453cpsX9zman0JOeCXhIY6gNNvTEfuA6SXmiecOwitmknqFZ0kmiWYQLTdpL31Gl45auKTL%2BscvFdIsyx%2B5K2bRgT4zgQILQ5p%2FaKViGxefrW2wBGguBw0LJNajDgFe3TRMAj6wcMbaltlX5SJKXgMUI3L5xFbaWdauv6B%2FjQBKUv7sRj18LI1gA6JTrAH8rX1gBwo5eJXIjQfQe%2FrSCvTjN8MpmKj%2FwrAB2Oz2vns2EhB8WC%2F8zyRbfGLIHonRioJAQTP3JcYTsPzdn%2FPxieYfSAQ0orN5wnbXKFwtJZfLLFQkN6dY8O4djmSzexK6jVVe5419qc7fUuUjPx%2Bfw2Wrt0Doy%2FkzTBgLMJm3%2FL4GOqUBnNp3KotXVFpUbnQ0%2BDqwMQ1SD2B0CJ6yGnbyA6sJpWHYDtq3Pftm7u1FCEyyOfJSvzessLdN6AXDVClMP6hSyTgm0ByJ5gBlIRoZTvoB83R%2FIOwh%2BR4WNAwr7rRqRvK19TaP4Lv9N9TTs2OfSGesYT3%2FcmlO%2FsHlsU%2FJEkIwQyGyktxeUvqJtGAsnZg%2FMNJL7jFsuBQ%2Fyj3v%2BU0YH5uX8cpcjP39&X-Amz-Signature=183e9d43f126d6789442e496fb44be23a20eade6d0ee3fc1223978f77fb8f48f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
