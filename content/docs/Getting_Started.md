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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF64HYF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD7dbeKiew%2B4K4pRrn1f%2BuQ5cfSc93KGZ0vMStYoPE1AgIgG376eNehCcB2jJ33XcIUA1pcqxTHAaGhsspmrXQI0zwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRxEkpGYbVBW4upJCrcA6Y8gwFLiuTqOdHy%2FHK7RoHVFrIP0selpxydbQR3zw%2FVwlcDiBbp5x2eEqIZBaaDDDvv5xc0IGp4Gqa0BUipooLlMaYLpnrXmvoZzzXc6%2B%2B0TjVOTbmkUiLvvA0blVEZO5OJDmpMYXCtc7yqXV20bMpG0Grxug6zE%2FxcyW05sN44T6jG33mbFZIwB7B47gGiiiOnOVyP42E7tzFgvdD4psmWPRAckjGbpTUdJjGlHw6tr8GT2qrGMDSwGSzOTgP0AsAhWwKlufdrhbrhJ8r%2BdzYoghGSHXldRFomwUOvPR4xU49m0CZQjXcOUh9CHIYfE0dZX%2Bo3HBmkTDcKPrbphlzlyqQm1G5m%2FBigriW2CR10pXUaLV2XwArgmmH7uZ0V%2FP%2BK64MWpiwPCQGnPT0Xfmy6SATpWg41eW27VKBjqOTzko3q1c42vBK9Vh3%2BuFtUmqA%2BgipWraIga6E3vVsS6sAcWG9ZPHsowcuX6Wd7yi6inCj%2BbP4Ddu37zXSowNv81GG9TdMxBTfc2sWHBdwm%2BEl1Ide3krYfTy8VGkjAuc831UIs1iPeslk%2BLkIw%2FI23FsPwbw%2FnrzvU1nYyZ2x11AhkZ%2B3j8kI%2FgmloUPG9tRadwy6JT2Nmi8I6UU8BMMzGsb8GOqUBEU2u%2Fq2t2c8tzSOgg4Qwy44ECMOIJXRoZAGVM2j95qUbreMtqLFYw%2FLKcCYiQyJQD0m6mNlGbzDzDsiUwRFTThmn85JFaZO29ao6RwHpXpU80g4LCVumK0NE9mteK%2BAbIFlIPdlREah5sRou6VMkzqAfkCLpka7%2FsMeFqn5e386w5fyuQEqKI9lpj5FczBFmtO4ipn1g5beZsuMSsPMqbA3SqZmw&X-Amz-Signature=459720f6bac58276af2b8e399dbe3a6621efce7cc6256e6e16dfffbf9ba583ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF64HYF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD7dbeKiew%2B4K4pRrn1f%2BuQ5cfSc93KGZ0vMStYoPE1AgIgG376eNehCcB2jJ33XcIUA1pcqxTHAaGhsspmrXQI0zwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRxEkpGYbVBW4upJCrcA6Y8gwFLiuTqOdHy%2FHK7RoHVFrIP0selpxydbQR3zw%2FVwlcDiBbp5x2eEqIZBaaDDDvv5xc0IGp4Gqa0BUipooLlMaYLpnrXmvoZzzXc6%2B%2B0TjVOTbmkUiLvvA0blVEZO5OJDmpMYXCtc7yqXV20bMpG0Grxug6zE%2FxcyW05sN44T6jG33mbFZIwB7B47gGiiiOnOVyP42E7tzFgvdD4psmWPRAckjGbpTUdJjGlHw6tr8GT2qrGMDSwGSzOTgP0AsAhWwKlufdrhbrhJ8r%2BdzYoghGSHXldRFomwUOvPR4xU49m0CZQjXcOUh9CHIYfE0dZX%2Bo3HBmkTDcKPrbphlzlyqQm1G5m%2FBigriW2CR10pXUaLV2XwArgmmH7uZ0V%2FP%2BK64MWpiwPCQGnPT0Xfmy6SATpWg41eW27VKBjqOTzko3q1c42vBK9Vh3%2BuFtUmqA%2BgipWraIga6E3vVsS6sAcWG9ZPHsowcuX6Wd7yi6inCj%2BbP4Ddu37zXSowNv81GG9TdMxBTfc2sWHBdwm%2BEl1Ide3krYfTy8VGkjAuc831UIs1iPeslk%2BLkIw%2FI23FsPwbw%2FnrzvU1nYyZ2x11AhkZ%2B3j8kI%2FgmloUPG9tRadwy6JT2Nmi8I6UU8BMMzGsb8GOqUBEU2u%2Fq2t2c8tzSOgg4Qwy44ECMOIJXRoZAGVM2j95qUbreMtqLFYw%2FLKcCYiQyJQD0m6mNlGbzDzDsiUwRFTThmn85JFaZO29ao6RwHpXpU80g4LCVumK0NE9mteK%2BAbIFlIPdlREah5sRou6VMkzqAfkCLpka7%2FsMeFqn5e386w5fyuQEqKI9lpj5FczBFmtO4ipn1g5beZsuMSsPMqbA3SqZmw&X-Amz-Signature=d7c2ff3e33dbb4550a67d678ff7e0fd46f624b044a3d05570bd4f7a2a9ed8b54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2LIBPI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChF7q5x6rPmuYJNi4sSq9vgL5sN%2Fy08Y%2BBFf1gmbaiSAIhANfF7Dmmve55t6Ti6aWBMB5c18BhqpEDWY9MiMiVKpHuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJFtW9eBf93lr5QDoq3APfL5jmwskFy2T%2BX7QTTSE7Cp2XuZ8SUevzn%2BoRQDnNsYb18vGhfhR9E1sxei3Ucmu%2FP%2BMgp8JPettlYwONaTdXYX51jRU2rvk8%2Fki2xd4muGfn5uV1rDsinCm%2BmCh0BtBkUbMMkwlO5WOwXzPxp4iKDuH50lzImPZ8wxjiVUBU0pi3q%2FFzr3%2FUbt2RUTBdS1RmCIbLPWKCymV6nGASFqjZkLwl7grZDpiI5H9bh49Nkq%2BnCSSMRk5GU29P%2F7DklZsx7%2BxK2m%2Bwhdo%2B7NUruRPfgf%2Btzy3gAx9YUyxPk9CKmU5ldVjeuLE83NjcIJ8b85VpkOZkUAQc8n0FBJe0XUhXCPVLIL8R8nW0A1O7IH%2Bf3Wo04zpxsM0OPcZfb%2F10dsP73i6Nu%2F1qtO6qkV5KZvJHepqFM%2BV6UKpqCD%2FyP10P6NPoqAhSR9Wae0UkYBci5aM3Sz9VWYTrZRNProzvreF35qzqb0Zi%2FbNXfvAFJgkhw7U5gdfWfFmfM1OI4e9khvUiMz4DZpZ2XjmEk8a5xY2loTt6f0QgFDfCwxC16N%2FN3ZX9iT7XLRVXNFqXGWYW8mWeUBscnDtzsLOH5FwhUb4eOuR5gj%2B9VRRnIGQqeICjnOCAwhUNNN0blRl6ZTDiqbG%2FBjqkAYWZxKwyxzNY8djzXQf7ywIKeHACeU6fw0daFF3cBB78qdj70KrNLpWuUaVZ8SthVClO2YzRylbbbBxlg6XtRe%2FfHJ536wBnazahW5PtURSu5m5T3xdCR5wB3Add9Tpu%2B3DTICseIpbZ%2Bdw6Ftq3AKe5FRRIVDm7AMFF%2BU5yNSxUDbPVoY6kAZeozpu9LFIugueHGw1gzF%2BFtevmjtwi6WzHqX45&X-Amz-Signature=dfaa28cd6b233fc80d94b2c7b6bd69b4201f42407475e84036335778ff06d805&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXQE76A%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICtH%2Bj9NHYdr0va0IdE35YRH5%2B6bYrbKPO%2Br0DagupmjAiEAoscoNPIfOY3M9MaqUc2nb5ezSamchDrHljb6LUHl4RgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIju5eNEXY6YS9%2F6hSrcA4q1dfoJpLvVcsRCzU1DY06%2BBwAevDiZsXclGUt2t3n8L2cBHatsjGSC0POpb3j%2BUdwO%2BtSb%2FxVuzE7AoOC%2FBQpYI4AMNLtXwbq4Cy2z7rP3GVvHTNc8TxrGFg%2FWzbaAL8Tz9qJA%2FcqHysAD2TX%2FFlIOzXsYF%2FusVWS33ezAGqZ7AmsGTBS5qUi4XVbryL2yDbgmhYImqyYKhO5XJf0L0%2Fl1ySvu%2B9cJSZu74aLdCSE%2FYxiFSpNyBZhFnTMi%2FZIjYydVEzduZA070Bj8N%2FPsL8k8gT5Y6%2FYnXQx6St0uqS5kCKNeQWp0YxqFGD59ZHsmuINgP6mUbNc4oWvSDB%2Bx3SwjBlE2t%2FBGbFls2%2FkVhPvcnZ4EHeamw3J6lmBT5EDnafEs%2F5XFWbRB5UxE%2BhiA5goL5hN1Rh2GJJxgx%2FAqGf0cwe8kFfQ0a4zQ8Pw5yJ3lk4G8HqHusLiaC%2Bmo5tWJoUbQhfmXY%2F9Noz7FkWqC601t5zB6PhshEvuNAlM%2FjlwKDgA1GfXoKTysULtEWb7%2B83L2w7TzUJuUKVk6RGZBABt1aJFAgWetBfHYVazgKdylmIt6tK3KLnW18U4n2ZxX%2BcbgGb%2Bxm%2BOcSV8jskqwZbM24AbJlcfZES6g4vCDMO2osb8GOqUBV9YHgQXLhm1RUOBhz6a3Zti5RMtpccM5b0vl4vlq3SM0c%2BfAodAiGC8UeJ%2BCN4XF65rceMbvBS9UFg%2FRCrGOBfhTjjtFZDPaY7FMT4f5%2F865BCCV09CcpYKZ6XsHB0KKi2ncdDlCF%2BFbCUTDUEA%2FXQf99%2FRd1l%2FUKSzzve%2B%2FLR1vBCKlsh4g9mhkmsDIVMbKiy84tqEoy0rKmWm1SEIorhhU56Cg&X-Amz-Signature=eb4382d6308def0de00d4fd69094ad3b2574960d36e13861432b5efe4e06ebfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF64HYF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD7dbeKiew%2B4K4pRrn1f%2BuQ5cfSc93KGZ0vMStYoPE1AgIgG376eNehCcB2jJ33XcIUA1pcqxTHAaGhsspmrXQI0zwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRxEkpGYbVBW4upJCrcA6Y8gwFLiuTqOdHy%2FHK7RoHVFrIP0selpxydbQR3zw%2FVwlcDiBbp5x2eEqIZBaaDDDvv5xc0IGp4Gqa0BUipooLlMaYLpnrXmvoZzzXc6%2B%2B0TjVOTbmkUiLvvA0blVEZO5OJDmpMYXCtc7yqXV20bMpG0Grxug6zE%2FxcyW05sN44T6jG33mbFZIwB7B47gGiiiOnOVyP42E7tzFgvdD4psmWPRAckjGbpTUdJjGlHw6tr8GT2qrGMDSwGSzOTgP0AsAhWwKlufdrhbrhJ8r%2BdzYoghGSHXldRFomwUOvPR4xU49m0CZQjXcOUh9CHIYfE0dZX%2Bo3HBmkTDcKPrbphlzlyqQm1G5m%2FBigriW2CR10pXUaLV2XwArgmmH7uZ0V%2FP%2BK64MWpiwPCQGnPT0Xfmy6SATpWg41eW27VKBjqOTzko3q1c42vBK9Vh3%2BuFtUmqA%2BgipWraIga6E3vVsS6sAcWG9ZPHsowcuX6Wd7yi6inCj%2BbP4Ddu37zXSowNv81GG9TdMxBTfc2sWHBdwm%2BEl1Ide3krYfTy8VGkjAuc831UIs1iPeslk%2BLkIw%2FI23FsPwbw%2FnrzvU1nYyZ2x11AhkZ%2B3j8kI%2FgmloUPG9tRadwy6JT2Nmi8I6UU8BMMzGsb8GOqUBEU2u%2Fq2t2c8tzSOgg4Qwy44ECMOIJXRoZAGVM2j95qUbreMtqLFYw%2FLKcCYiQyJQD0m6mNlGbzDzDsiUwRFTThmn85JFaZO29ao6RwHpXpU80g4LCVumK0NE9mteK%2BAbIFlIPdlREah5sRou6VMkzqAfkCLpka7%2FsMeFqn5e386w5fyuQEqKI9lpj5FczBFmtO4ipn1g5beZsuMSsPMqbA3SqZmw&X-Amz-Signature=5f799b5421e9635493c076c704fb0d1c81533fe695f9771b23ce7f5d1752aba0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
