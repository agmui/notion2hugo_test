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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNYHOMF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKiLmT6yy2bkirN7lqcu6WzMVLQpp6TweAnt2qAM1RUAiBAKQOo9RfDPUaGbf48GLyufbeV2Xna8TK01kI%2F%2ByxslSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2vZRC1lgsSSCAZqwKtwDZC8qDe2V%2B0ZTjYq98ImkEcmxuLS6Dk3DbVTHWegdDUGzIdtlvLwrOUAu%2BgwgpuSv2zDSM9wZ%2Bs45k5b1IBaNIuVthANZBkNS0zJWi4BvCYisGACH%2FTlQZu92sg0T4rkQtdRK7OknW5eusTm0FGyNj1J6X9KS1l1hMEoKFZ0zzQtyCZO3enEiuzguQVB%2FBAif8y8GKgDbPp6VhOKUh2cMkEJeioyZxY%2B1Rg7bCOLq3ZtnD5wY30fLSKg%2BaYzkeBpdS46IoDqTxkd3OpIPc1noVLAzkn8rbDIhy%2F77463YpyExM%2Fz0GB%2FxnNDKLxGjT0oX6C58grHBBBeU4I9%2FudqYCuuAPrKrGU453%2BdUkBYx1Eu5UMQwY87gUEgkg2HbcFJdq%2BKKOou1irS%2FWDVsmh%2FZSN24h8dV9Hp%2B%2FyuyEfpxMCiA0LzHDSd7BjjeJhDvlwAQdDGOyTOnYdPdOE3%2BaYQvaBP5UPnNf3NyykYhNYu3oF4VLbaltoF81mamwr%2BNWjYLm3u9AypqiIQNPwL0cni3wu1krSfjvHR3CX1CrBcw0SfCgMdL5yzF6hLDqLECLj2VTCMjT9CUNfjYiLnr27mSXXsqrh1mJEtbr7pvYYM3Wq9xgg5Lwinh8zNZSZIwyqGgvQY6pgFT0Y%2BFNYseKuNIAAMC5JoVes2jZoTqALbSeZU4jb3BZoi0mOgDZefHMgULtrJpryF6jkd9Zem3qKcc9Bhl2QtgbSyslOouyqEz62LkM8yyBmbRl6n4OHrHpl%2F7h2NQmHMIRJXLKxWZWNnxE3bIwuBVS%2FRJ%2Fl%2FEdCfnSVlC04ypC5FsjWx2zXLcDV5GPZopYZgkvWwYNpFFr0xShhM5x5GFhbOiNRoC&X-Amz-Signature=f910461649e3dadba83faa1dfc3816a156fd19f2f6a234bf1c70e198f427a0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNYHOMF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKiLmT6yy2bkirN7lqcu6WzMVLQpp6TweAnt2qAM1RUAiBAKQOo9RfDPUaGbf48GLyufbeV2Xna8TK01kI%2F%2ByxslSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2vZRC1lgsSSCAZqwKtwDZC8qDe2V%2B0ZTjYq98ImkEcmxuLS6Dk3DbVTHWegdDUGzIdtlvLwrOUAu%2BgwgpuSv2zDSM9wZ%2Bs45k5b1IBaNIuVthANZBkNS0zJWi4BvCYisGACH%2FTlQZu92sg0T4rkQtdRK7OknW5eusTm0FGyNj1J6X9KS1l1hMEoKFZ0zzQtyCZO3enEiuzguQVB%2FBAif8y8GKgDbPp6VhOKUh2cMkEJeioyZxY%2B1Rg7bCOLq3ZtnD5wY30fLSKg%2BaYzkeBpdS46IoDqTxkd3OpIPc1noVLAzkn8rbDIhy%2F77463YpyExM%2Fz0GB%2FxnNDKLxGjT0oX6C58grHBBBeU4I9%2FudqYCuuAPrKrGU453%2BdUkBYx1Eu5UMQwY87gUEgkg2HbcFJdq%2BKKOou1irS%2FWDVsmh%2FZSN24h8dV9Hp%2B%2FyuyEfpxMCiA0LzHDSd7BjjeJhDvlwAQdDGOyTOnYdPdOE3%2BaYQvaBP5UPnNf3NyykYhNYu3oF4VLbaltoF81mamwr%2BNWjYLm3u9AypqiIQNPwL0cni3wu1krSfjvHR3CX1CrBcw0SfCgMdL5yzF6hLDqLECLj2VTCMjT9CUNfjYiLnr27mSXXsqrh1mJEtbr7pvYYM3Wq9xgg5Lwinh8zNZSZIwyqGgvQY6pgFT0Y%2BFNYseKuNIAAMC5JoVes2jZoTqALbSeZU4jb3BZoi0mOgDZefHMgULtrJpryF6jkd9Zem3qKcc9Bhl2QtgbSyslOouyqEz62LkM8yyBmbRl6n4OHrHpl%2F7h2NQmHMIRJXLKxWZWNnxE3bIwuBVS%2FRJ%2Fl%2FEdCfnSVlC04ypC5FsjWx2zXLcDV5GPZopYZgkvWwYNpFFr0xShhM5x5GFhbOiNRoC&X-Amz-Signature=713acdab2101fbe48ec3ddd6d1b5067fcf22e2b1d3a1c2d264d2e874f9f18869&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQ24VPX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDAoUJgWxes5vHUTZqW%2F5t6fyxpRWBSMOej84m%2B8nsvAIgS9lZshjJvrynqoCNuWshHLYcgZorgez8j0sWf138GOAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAonRego%2FLOsDpihxircAxVRWv7unQ%2B8w1nBSFxn0mXD%2FbOwi0HV2KV95WDbJo9ckZEEUQQJRHk5TD7ig1CeCGYWpsM1kby4XZp1bC9Gf6%2FOfJ3KNODd%2FXgoki%2FK0UFYTc6qgGlGXOLn5tmDZ6dsRXgu3rrNJH09jDWhliZ4a2y1iAUSxolWZa1XbhYngaEn8aQw1BrmuAJr4K65GTO6GARsG7U4qKx2P3%2BTb8WMfjcjFM%2BAoPf%2B8g%2BI0Oa7Vq5kgwRV4XA%2F7GfWUMIlDwkfXoBreRys4BfZhRCm34yEes6EiQKrz319Cv81o3iF934NJ3KIKF5HlGdKsiySgf7ZUavKOoVgPu%2BV00fMXmAnbCV6AiGi2A8XQYnF2AZbfdReqEDxOtrvqOkts8cnyNDcNTR1A%2F7zXamYWZhUORxWx28zm%2FTChHaQzYd1Y44AWT8llQRfHRqKiuju2gCITfm2m6wm0spzloEnK2NUzl0sIfibqusuEvD6S7BjU91BZPv9nE1stgsxauM08ne8PFX7iWu1UAF6%2Fcgh%2FlV1SKdVwPjSvHqAHgEqV4bt1d7eCY8ylcaFP0P8YKa82tq8jW7GIxenwgbPRJ0Bu5pqmv0EgZa%2BbmZb5HIaO2leTQjry7ik4rDq18Cy4pYKLI7BMPuhoL0GOqUBLjXcbQlkJAGtl8nnHIn90fGqEm0Hsw7R3Tn5upwEy7lSq4aFG%2FPFa5HeojQi3QVj9Xki6lqICF1HJLrMwwPeVacX%2B9dSDW1xrRbfCJTxWlhnvM7TNrsgqZxqA8mFnXxPvkdzREqSduDbyD%2FY5NSPlVcojQyATmxGTQhYZyjydAM4kJDXTFb%2BYOP7esPjFj4%2F6JMbLdI3uZvJkHgkN2co3BA7aGf8&X-Amz-Signature=bf00d8852e9fdb19df4970b2ecc656aea574da2769790cc35d5bc95e465be48c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT4DXUH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDEkk5YrYv5hUcMwEN7ey9CpmYWJpu2w%2FHRanouyC5swIhANExQTsqCdeshKHQm4JMGoCRmqOlMc8ynUa2%2FCMEwvu4KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX8%2BqK2kuafJOQ7ocq3ANriQ0zqVKhMa6jYrBBqEdkmuZQtthe%2Fm3yZ9m9QaSMGW4X4GpUSqtG%2BdY3GK0EdrP6fVoeLzoCvl6SdHJGTcnQmDTILVdORqhBFAt3yHupFuTa5%2FC%2BF7zuCrjfi4N1TXRDY1Ijo%2FIvZUaVDWpWeTjxirQO5fjVeIcSFp9FiJnFHCJ1cPcqQ9Mt%2F9gElftQ1FOR%2FEMMnbD3j0qBKDf4IlsWWVGZi4diVUbcSORhXzJNOf%2FFjCmHnddtuEIvJtq332xQKEMYR%2FHhN5SMZi1NJo7%2FE6CsihIoMk%2FWIArn9ph9BcVlfQQhsr6ut62wk7usgDiQnc5tRqEfMxeREx1U%2BMv%2F%2BwlOSRBbGaezMVEnWmgpwzKIVRtyIZjmV8CDqz3qKpsTNS0x900830qmv1FZF1r7V%2FsUhhxpgucAIoe68UnoJKqOMAaFQln5YRlTn48abuRH8CzDzfo7bY0pawfclctxoDa5fbCan6bJ3S50MsQoyK2URC%2BCgiR8DWE%2FQIOSUr3UNGdbBoKE8%2BhQIX1FCEXyAcARiLPzoeww8LAUb3sdYvdGVEWyeb4vUAN5s8BdNiLUbxTmgvftilkJqAE5z4kfaoUGH4kqwXVZ4uoOCxce8z30hb0RZaErI2d%2FKjC8oqC9BjqkAZ0Ikmqk6loxoxpIeWY3K8BkMTRw3sS3Pwhx0tGpIIEh7F09oaS8JOGSPFgmAa5WYLMr5w45nnVFevTYxkCSfsDcTanG1Abs1myPtiZPSrd%2F2W6z%2BQxZa8s315Rkc6jZdj3B1P8k2uqIBRBU%2FilJrl8Rs9CzIdM%2FrfuCRIAF7birIFa8bTuizpWQraHd7MieIE%2B3Gfwi19SivMFLnBdzpfzxJyMG&X-Amz-Signature=7a2b4b277c59de7f8717b7769510c51fe1cf35bbc02ebd6ad3763da7e0928f92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNYHOMF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKiLmT6yy2bkirN7lqcu6WzMVLQpp6TweAnt2qAM1RUAiBAKQOo9RfDPUaGbf48GLyufbeV2Xna8TK01kI%2F%2ByxslSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2vZRC1lgsSSCAZqwKtwDZC8qDe2V%2B0ZTjYq98ImkEcmxuLS6Dk3DbVTHWegdDUGzIdtlvLwrOUAu%2BgwgpuSv2zDSM9wZ%2Bs45k5b1IBaNIuVthANZBkNS0zJWi4BvCYisGACH%2FTlQZu92sg0T4rkQtdRK7OknW5eusTm0FGyNj1J6X9KS1l1hMEoKFZ0zzQtyCZO3enEiuzguQVB%2FBAif8y8GKgDbPp6VhOKUh2cMkEJeioyZxY%2B1Rg7bCOLq3ZtnD5wY30fLSKg%2BaYzkeBpdS46IoDqTxkd3OpIPc1noVLAzkn8rbDIhy%2F77463YpyExM%2Fz0GB%2FxnNDKLxGjT0oX6C58grHBBBeU4I9%2FudqYCuuAPrKrGU453%2BdUkBYx1Eu5UMQwY87gUEgkg2HbcFJdq%2BKKOou1irS%2FWDVsmh%2FZSN24h8dV9Hp%2B%2FyuyEfpxMCiA0LzHDSd7BjjeJhDvlwAQdDGOyTOnYdPdOE3%2BaYQvaBP5UPnNf3NyykYhNYu3oF4VLbaltoF81mamwr%2BNWjYLm3u9AypqiIQNPwL0cni3wu1krSfjvHR3CX1CrBcw0SfCgMdL5yzF6hLDqLECLj2VTCMjT9CUNfjYiLnr27mSXXsqrh1mJEtbr7pvYYM3Wq9xgg5Lwinh8zNZSZIwyqGgvQY6pgFT0Y%2BFNYseKuNIAAMC5JoVes2jZoTqALbSeZU4jb3BZoi0mOgDZefHMgULtrJpryF6jkd9Zem3qKcc9Bhl2QtgbSyslOouyqEz62LkM8yyBmbRl6n4OHrHpl%2F7h2NQmHMIRJXLKxWZWNnxE3bIwuBVS%2FRJ%2Fl%2FEdCfnSVlC04ypC5FsjWx2zXLcDV5GPZopYZgkvWwYNpFFr0xShhM5x5GFhbOiNRoC&X-Amz-Signature=2c3d224da8d8b14d8f553ec93aa52f30c330c9f0592157d7aead0cf5535b03e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
