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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJRSPJM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK%2FoQm%2BO%2BjcZRFdMExZ8F9NbW0RVq%2FXJajJvZPxFAbNAIgNNv7bxbQJvSPhawpWxX7ADdj%2BT%2BmCUzHxC%2B5rekzzKAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOZkWrsYfeZCFH8YSrcA1k%2FibV%2BYxX57Vz6oUlCrRxI4dFwtEc%2BMnhjOlAGG7eum05EH8V%2BL8vPGTAXcmRSrrBNklLESXh%2BsHLpuAMHtR7cbwPJT43BbzzcusBNGtkROFes3qyhfRQAFrYKZyHa7CFGJLA%2F3PAxmTxniTzcUtsoTmfpgYwbnW2GUO3hojyUsO64P3ZWjgegr5HHZTcdYLEK3h4sSb%2FUAaLXWTe4Z%2BOpKXE%2FbUvLKvZyZmCjOYTmok2ZsZ79F89x0AiOEYnOnotnCXomqygcFvR2LMObdZyyCWASPm16XcJXG3kT8XEK%2FRzWmP8tA1cfZv2CTIRRKsqtRRvDOpudPOotkB%2FHwIuGkbltm5ly0QTUYKl2aKNEBDTdbFdgdIxaD4wTtT7tW5ynHAakK9sTwrOEkUvbeVF9wYWRHwsDCuS6YJyoDzaBNPaED58vM98EsIRnbJCTD7UABO4jp3nYCz2d96LRWdLa1j3vw152KG8DBrd8CfPw5TmndH7d0QdMYafoc%2FKgXbqbUbsYcZsg2r6nxlzfiFpEUhZou%2BKUMlGnXFLu5shVJatB8GrGWQ8BZ%2FAAWrE01E9RzluggCJVxwKCJEGtHH3objrX0Qf2d6b9dvGxVpzixXFT0IV2B%2B%2FmCBfBMPScu78GOqUBlszc01H9f3AQajjPep7smY4Q9noIpBdhMEA%2Bw4CiEx8B2oz4BHQcLsRYUptx%2BPa37xPyuv7VbuKK7v9tJROdWZ6fx8GHkRqG75jtNQPQxpFYPMDkuIQqI8FmGBQ5mbaYlUK29wAO03GsbI4yZCjfT8PEh5u4yg7DkJLezXvGXH4UO2%2BO1GK%2FuS5fxqB9FgwJ8G0X5vG%2FkO8zQJeRUV5GyKJ0yJcD&X-Amz-Signature=20e8d4c90665eb613cbbaf203e71abc948317f49f49896d4af0e3a8726d20907&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJRSPJM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK%2FoQm%2BO%2BjcZRFdMExZ8F9NbW0RVq%2FXJajJvZPxFAbNAIgNNv7bxbQJvSPhawpWxX7ADdj%2BT%2BmCUzHxC%2B5rekzzKAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOZkWrsYfeZCFH8YSrcA1k%2FibV%2BYxX57Vz6oUlCrRxI4dFwtEc%2BMnhjOlAGG7eum05EH8V%2BL8vPGTAXcmRSrrBNklLESXh%2BsHLpuAMHtR7cbwPJT43BbzzcusBNGtkROFes3qyhfRQAFrYKZyHa7CFGJLA%2F3PAxmTxniTzcUtsoTmfpgYwbnW2GUO3hojyUsO64P3ZWjgegr5HHZTcdYLEK3h4sSb%2FUAaLXWTe4Z%2BOpKXE%2FbUvLKvZyZmCjOYTmok2ZsZ79F89x0AiOEYnOnotnCXomqygcFvR2LMObdZyyCWASPm16XcJXG3kT8XEK%2FRzWmP8tA1cfZv2CTIRRKsqtRRvDOpudPOotkB%2FHwIuGkbltm5ly0QTUYKl2aKNEBDTdbFdgdIxaD4wTtT7tW5ynHAakK9sTwrOEkUvbeVF9wYWRHwsDCuS6YJyoDzaBNPaED58vM98EsIRnbJCTD7UABO4jp3nYCz2d96LRWdLa1j3vw152KG8DBrd8CfPw5TmndH7d0QdMYafoc%2FKgXbqbUbsYcZsg2r6nxlzfiFpEUhZou%2BKUMlGnXFLu5shVJatB8GrGWQ8BZ%2FAAWrE01E9RzluggCJVxwKCJEGtHH3objrX0Qf2d6b9dvGxVpzixXFT0IV2B%2B%2FmCBfBMPScu78GOqUBlszc01H9f3AQajjPep7smY4Q9noIpBdhMEA%2Bw4CiEx8B2oz4BHQcLsRYUptx%2BPa37xPyuv7VbuKK7v9tJROdWZ6fx8GHkRqG75jtNQPQxpFYPMDkuIQqI8FmGBQ5mbaYlUK29wAO03GsbI4yZCjfT8PEh5u4yg7DkJLezXvGXH4UO2%2BO1GK%2FuS5fxqB9FgwJ8G0X5vG%2FkO8zQJeRUV5GyKJ0yJcD&X-Amz-Signature=1b5527ec346a5618fc018f8daa5535c0db201220948d64e8e95d1b148dd8339b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRK62RUT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgA6pOQMqfPWLG1acsvLWM%2Fu%2BwqLDotXiwg%2F6XzEdj4AiAM3KKXJ2XkZv6E5qWICSl8ZInA4Ai1FE51be46dYSuzyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM22zGfjuLCBd8MOBdKtwDOJFfEF5UNV5a2SDoxjqeljP2jRM1sgaYNd0Pkb1QsmCFDiN9zrYrBakCCcQiAFwb7j8cdT6JhZB7A98qTRajZuahmwRDZ0PszcjyFjGO3Fs4KIrRa%2Bx3LxkdmtTDxEYqhFEoqoPeupsQE0yd1BLIQKi01urIo%2FEKe3H8oN%2BzDY75ptn26pvw9qwkqXUFbq6Ftmm%2BBV1SDPn9ds2RvAaBlvjBm1ZFlHauvFoB4g%2FE6v99XlGyhf1AyPM4o0rEVMzOcjq%2F1LMoHK2iu6ryzgJc96l599OYM%2BnNSaaPU%2Bp0Rf6%2B5ot813cUACf8qHiCCiXv1VF%2FeNO1UGMvC57feJZBCE22NbzMQ%2FZJALz%2FoJOjq6z%2BtkGc%2FTv8GUaBSrA4JC99VPu4AV3wTHVaVPF4Zn9%2Bih3Z6znJThzRNqdMn2A6OB0xNyeLZoDDpqL2lHoGXn20XNUrB5bOB8tkCfVbTs4yplaIpCb05zdsaL0RDXyYoRCKCX8fKjLuM9SiuXNMLLcSAv7Xb%2FHPk5aAsI9s%2Bh4pnusxMEYh3Lot7uU97gr83WX3PApv3xE5DoPa7Klwy08%2BhljzwhD3XmZhbc1BZyb%2Fp1YeVRXf1aXEOiGWAnxuDU3P1m0tVy0Uiu0velUw15y7vwY6pgF1QMeLYKP1jx0nK2o09QUdvi8EzIva%2FbVXLWfGlkmqoCP5RLT6s0gJk%2F5%2BO3E80m8O39PKezUoKiRe3pEgFMPm23TyA5x2AudzG9OkMcxlQzm7YPZXpIi3dOEgifky1jFRtMRPA8D4yN0iQHnn4BWe4mx6IzSJv4CxTGTqui%2BeMPIz22gjFp8jCzsqq4XPjG3wIX4tx0xr3utF4qyw6lp3jF7wFn6r&X-Amz-Signature=a8493ac010d903c9ae131651b2c5f8496aed09a438120b66da4e9ddebbad4c15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYD7WU2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQXncLutJ4LZIYj4bhTckm9e0AN17O6TapfSQMG36q4gIgdtHgBJpcwzCtIUXC%2BUgWuNX%2FcloHTDFEs03wEFHl7F0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2xBB01lBS8N%2FFYCSrcA0g7L1pHUt8m7fkRU1n0JMAYIMwq%2Fu3u38vNUCIAixVTD1jh9Oqd6xZTjq81ITyc0NxlXsZ1P92GdQKbEpZlEVZPKSBbTuTHmKcqRGdyRSAugidKepwO1JYM5J4qg9IUg%2FJiOybJbMhFu7c%2Fl0RxGqSGQ%2FXH8fAUi2S2fjAZynBLx6pKhI8Wzk4I4fI2oRerd%2BJ8fh3JqY8Ah%2FLYP7mBLc178JC0j7FAkXi%2FJZtWVia2yA3kmW%2BuxS3wQ5kEpxAavOKyOhlLFOAj7m10X4zqPYYD%2FtKNMXdYq8jAe1FJkAQJX1e3BPYcnE8%2BTIqAUUe5hh%2FaDTzHFb0ssvs2W3Sh1NOvM4SedkNsB7xtZyaQQON76lSITE5UboUJJ%2FCoRFj5VCrfqfxJ2X%2F3LFGKmzmyaM2f8JaL9uozBBOkdlQEzu8%2FIwQY3YUAwP84Idsw0sEUgv%2B4BMR4iE8YGWJO1wcfdvBDmrCTl5CNIdtNaWZwLumHhngRq2WzABfNejhaO4%2Fwo4%2Fvr7HE3Phx4JbaYH8iLgdDR2%2BadTTaH5TijgAdtL2l2ARRyqpHfzl8C4FSLsh6a45fYBwta7zc90myiJwyzU9WfSarTHB8X3U6GFrqdqfCklRYAMaZzJwbwh%2FUMOaEu78GOqUBJMhMtTjhrmUCvoD5s6HyOBHO%2BpKuTtxkfCRIzV9zYtP%2FePuCDV9ulhOrDeiuZdNjfyPIilsVEFUzHnh2pykVtDLGQNXB4%2BKun4AzXzl%2B0QYo%2FYeNGLWKCtj7Msf1HDO%2BeEa2cihOo8eFYpLBiGDY2ik2x%2BRh6xGA7DtnR6FPohDTaRrIxwXutQ1WQ1tWWW6gLyZoF043CMKgFMWZcdajmt8JhxEI&X-Amz-Signature=12e9e8a7b9557798a4013bf72da8bd488225c1867e64c2cc67f21bddbbd50207&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJRSPJM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK%2FoQm%2BO%2BjcZRFdMExZ8F9NbW0RVq%2FXJajJvZPxFAbNAIgNNv7bxbQJvSPhawpWxX7ADdj%2BT%2BmCUzHxC%2B5rekzzKAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOZkWrsYfeZCFH8YSrcA1k%2FibV%2BYxX57Vz6oUlCrRxI4dFwtEc%2BMnhjOlAGG7eum05EH8V%2BL8vPGTAXcmRSrrBNklLESXh%2BsHLpuAMHtR7cbwPJT43BbzzcusBNGtkROFes3qyhfRQAFrYKZyHa7CFGJLA%2F3PAxmTxniTzcUtsoTmfpgYwbnW2GUO3hojyUsO64P3ZWjgegr5HHZTcdYLEK3h4sSb%2FUAaLXWTe4Z%2BOpKXE%2FbUvLKvZyZmCjOYTmok2ZsZ79F89x0AiOEYnOnotnCXomqygcFvR2LMObdZyyCWASPm16XcJXG3kT8XEK%2FRzWmP8tA1cfZv2CTIRRKsqtRRvDOpudPOotkB%2FHwIuGkbltm5ly0QTUYKl2aKNEBDTdbFdgdIxaD4wTtT7tW5ynHAakK9sTwrOEkUvbeVF9wYWRHwsDCuS6YJyoDzaBNPaED58vM98EsIRnbJCTD7UABO4jp3nYCz2d96LRWdLa1j3vw152KG8DBrd8CfPw5TmndH7d0QdMYafoc%2FKgXbqbUbsYcZsg2r6nxlzfiFpEUhZou%2BKUMlGnXFLu5shVJatB8GrGWQ8BZ%2FAAWrE01E9RzluggCJVxwKCJEGtHH3objrX0Qf2d6b9dvGxVpzixXFT0IV2B%2B%2FmCBfBMPScu78GOqUBlszc01H9f3AQajjPep7smY4Q9noIpBdhMEA%2Bw4CiEx8B2oz4BHQcLsRYUptx%2BPa37xPyuv7VbuKK7v9tJROdWZ6fx8GHkRqG75jtNQPQxpFYPMDkuIQqI8FmGBQ5mbaYlUK29wAO03GsbI4yZCjfT8PEh5u4yg7DkJLezXvGXH4UO2%2BO1GK%2FuS5fxqB9FgwJ8G0X5vG%2FkO8zQJeRUV5GyKJ0yJcD&X-Amz-Signature=69dc52389bb7df810eda8a8a20669276d344f66b005342c328c82bdaa82bed8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
