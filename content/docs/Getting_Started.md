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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFKEOPM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYBGtPo8Hhp3WXHu3vR805rx0I4rQ89f6hFHoyGhzlxAiBW78YMKDjP6wmGfQ2THVKl1gG1HBPAJpHn7Vegx5mtFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1ZAcdPKPbzRPykCbKtwD%2FYwygDdNXWMa7tOk2w20%2B0WIBHD5hNVEcBTx6q%2Bzlmu%2Bt98U1W1rmd81mQFeAFQUloxhYpPbB%2Fm9PHFucsf8K4sS1t7ripgUECtKjh3%2Fq6jT6%2BTYQPD2uYKT0VfYdhtVgmMGlYlN73IN3EARiaMo5KUGG%2FOr90e5P3HCHvYHc8z9X4KbHWHyrRbTUW88awrqL2zo6A4tLTDSm6hb94UnKBAur8R9ieA5S1mAZcj2uoCB57UNLBxnoIJVZZtdKBvi63TVexWOg%2FxBLY%2Fe7gnoHrFCVi%2BdlZpUuji2Rww%2BC7U%2FU7vIsTLGLVmHLVGliR%2Bu7Qwn2F5IgjHrBco2Q%2Bk2KwY%2BMBAhf6%2FJAlWO1aBQkMQ3DbKZV8c5yW2wLL8vczAqbvd0%2F7y%2B3%2BOfxJBcIjFBi8IyUHmavXhZXCmzWPvg0Jha2JH4KgmXXqWrYsJGestjCoZjl98t0EdWY6UGrgUZh1u1pwgRNgR8e1kuADLqUMmOsLWuTDuxlwRTYwfpt7W45XtARNuIIJ0fxIEjuWR5wwgQ2kwmg8VEGQLiOKOqvESeGR1G3HZWzNaNFmBLYOB5BjIteFihsTcKJmydlcG84Km8%2FtxcXY%2F7LQ3dSxBhpkeE97Sna4A5h1aS%2F2owppbiwAY6pgHSVaQxIozwIkzGjMouG2JB3c%2Fk0FAnoZG9FYpQerW0qCErwY8jcIG4qxcylsIXBLBpYh0Ol24n%2FpHcnywn%2FlRPR1tGLBrOXtMmhK00NmhWHjtTz9pTXjlckQiW7yRybTqJnNA2%2F2FpiQNKYqrZ0EmzCDny%2BNyh%2B8zpaMNMSHVkqctxAfzhXyCUKZyznMwPmoMr7kvNFTfLkb%2BxA3X5%2BAocp9iNnwk6&X-Amz-Signature=cc5566606773213f7e702c0fb7c3b7a1b7e078c043ff323473fa57d3040c1371&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFKEOPM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYBGtPo8Hhp3WXHu3vR805rx0I4rQ89f6hFHoyGhzlxAiBW78YMKDjP6wmGfQ2THVKl1gG1HBPAJpHn7Vegx5mtFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1ZAcdPKPbzRPykCbKtwD%2FYwygDdNXWMa7tOk2w20%2B0WIBHD5hNVEcBTx6q%2Bzlmu%2Bt98U1W1rmd81mQFeAFQUloxhYpPbB%2Fm9PHFucsf8K4sS1t7ripgUECtKjh3%2Fq6jT6%2BTYQPD2uYKT0VfYdhtVgmMGlYlN73IN3EARiaMo5KUGG%2FOr90e5P3HCHvYHc8z9X4KbHWHyrRbTUW88awrqL2zo6A4tLTDSm6hb94UnKBAur8R9ieA5S1mAZcj2uoCB57UNLBxnoIJVZZtdKBvi63TVexWOg%2FxBLY%2Fe7gnoHrFCVi%2BdlZpUuji2Rww%2BC7U%2FU7vIsTLGLVmHLVGliR%2Bu7Qwn2F5IgjHrBco2Q%2Bk2KwY%2BMBAhf6%2FJAlWO1aBQkMQ3DbKZV8c5yW2wLL8vczAqbvd0%2F7y%2B3%2BOfxJBcIjFBi8IyUHmavXhZXCmzWPvg0Jha2JH4KgmXXqWrYsJGestjCoZjl98t0EdWY6UGrgUZh1u1pwgRNgR8e1kuADLqUMmOsLWuTDuxlwRTYwfpt7W45XtARNuIIJ0fxIEjuWR5wwgQ2kwmg8VEGQLiOKOqvESeGR1G3HZWzNaNFmBLYOB5BjIteFihsTcKJmydlcG84Km8%2FtxcXY%2F7LQ3dSxBhpkeE97Sna4A5h1aS%2F2owppbiwAY6pgHSVaQxIozwIkzGjMouG2JB3c%2Fk0FAnoZG9FYpQerW0qCErwY8jcIG4qxcylsIXBLBpYh0Ol24n%2FpHcnywn%2FlRPR1tGLBrOXtMmhK00NmhWHjtTz9pTXjlckQiW7yRybTqJnNA2%2F2FpiQNKYqrZ0EmzCDny%2BNyh%2B8zpaMNMSHVkqctxAfzhXyCUKZyznMwPmoMr7kvNFTfLkb%2BxA3X5%2BAocp9iNnwk6&X-Amz-Signature=4a3135d904ee024edb72bb0858ba49ce21905234954fc5e3706a4fab38cc2d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFKEOPM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYBGtPo8Hhp3WXHu3vR805rx0I4rQ89f6hFHoyGhzlxAiBW78YMKDjP6wmGfQ2THVKl1gG1HBPAJpHn7Vegx5mtFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1ZAcdPKPbzRPykCbKtwD%2FYwygDdNXWMa7tOk2w20%2B0WIBHD5hNVEcBTx6q%2Bzlmu%2Bt98U1W1rmd81mQFeAFQUloxhYpPbB%2Fm9PHFucsf8K4sS1t7ripgUECtKjh3%2Fq6jT6%2BTYQPD2uYKT0VfYdhtVgmMGlYlN73IN3EARiaMo5KUGG%2FOr90e5P3HCHvYHc8z9X4KbHWHyrRbTUW88awrqL2zo6A4tLTDSm6hb94UnKBAur8R9ieA5S1mAZcj2uoCB57UNLBxnoIJVZZtdKBvi63TVexWOg%2FxBLY%2Fe7gnoHrFCVi%2BdlZpUuji2Rww%2BC7U%2FU7vIsTLGLVmHLVGliR%2Bu7Qwn2F5IgjHrBco2Q%2Bk2KwY%2BMBAhf6%2FJAlWO1aBQkMQ3DbKZV8c5yW2wLL8vczAqbvd0%2F7y%2B3%2BOfxJBcIjFBi8IyUHmavXhZXCmzWPvg0Jha2JH4KgmXXqWrYsJGestjCoZjl98t0EdWY6UGrgUZh1u1pwgRNgR8e1kuADLqUMmOsLWuTDuxlwRTYwfpt7W45XtARNuIIJ0fxIEjuWR5wwgQ2kwmg8VEGQLiOKOqvESeGR1G3HZWzNaNFmBLYOB5BjIteFihsTcKJmydlcG84Km8%2FtxcXY%2F7LQ3dSxBhpkeE97Sna4A5h1aS%2F2owppbiwAY6pgHSVaQxIozwIkzGjMouG2JB3c%2Fk0FAnoZG9FYpQerW0qCErwY8jcIG4qxcylsIXBLBpYh0Ol24n%2FpHcnywn%2FlRPR1tGLBrOXtMmhK00NmhWHjtTz9pTXjlckQiW7yRybTqJnNA2%2F2FpiQNKYqrZ0EmzCDny%2BNyh%2B8zpaMNMSHVkqctxAfzhXyCUKZyznMwPmoMr7kvNFTfLkb%2BxA3X5%2BAocp9iNnwk6&X-Amz-Signature=09b6e5bce6c5592aaca79ef78d5ecd8c924708f12342f09b38919c2e7ad528d2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEHMDCD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2crwXV8vElfirZYu0%2B1d7uclbCy4gUnu%2FBQcg%2FQd2AIhAKnjVMdTRmJh5QM740y1B1PzggF2LVJill7XH2EkteE3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyeMQaDnRM7eMflEEoq3ANxvqyWzJk2az07FejutGzI34A69Hrg8b6jsYL2pYzZiSyXWrR4jp1kofdeODud4Qtt9Yx2UgI6skH%2B%2F1r2qjpINrYsvqiixcHZ59YI4TyW5C0vq9BdX1q%2BK5%2FnT7CLHKWIrCNEug%2BcKJI4OdCwC%2FFvcrNUx2jJdIN2Omtn53cwwrE6MLgPKUTlLLy4kUfwoO4xbrXkYxJAXO%2BUx3eC0fnGeQFNewnoH1FKdwCXVPpQ1IVZLtEG%2FYwdhVQQsLR7c3wC%2BPFacs2rQ7QEPz2ydnzbznZWORpL9wh3xLjnUw5RImCBEEXUZrzxxUoXrT1qj68XmpDl%2BvRLiVTThjr16Sftul6PQiN9aycyvbPk%2FK0j3%2F%2F8wNpoBGNXwcoSK0%2FlBLG90ltQ4jP1dPo440ZZ%2Bb4hnYTp6ZJJtr5lcWORf4Mj9nJL61OmirsJd8eh9rp1RznBSsa22a3zHGgA5kiup7X4ney%2FarNS%2BPAPybCFClYaVfmyA%2BKjlZa6gyhSQ5xbn3HWaDkO2hV%2FTx73zvlhi9%2FnLpaBpKOTu%2FzNJ5%2F4AF4c7yHthBcZjHPoyYZlVAb5GChfTHQxDZ2tTN7as27XpXqul1x9aQKxGCqxqgxwA5v5uZUhp7hf3SZRqwbOyzCkluLABjqkAYAONJavuptTLGzIOE7gSsG%2FIsoDtf744FLBW3lKl7n7q%2BawljY1aTZIraTTqqAV5sSBxiSC%2FPyhX1gSmbCCkOc%2Bt7RrSodNN1X9txjKLWp02AMeqSDjYSoOPkofclF8ozNYS1NUIk9ALXhJAe52nVXpqtoPramS6Ssln15Jv8iO0ZvGEzLLmdK%2BZg4xkF7%2BnR6srfP8ixbapnAZyepHN3hzpJYm&X-Amz-Signature=ced72b8990e723e81eda7abe185e1fa89c7c8e3e8e110fd2c9d80039a87c5f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PYFUZFO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiWgOScK3nlUSkbIZbR7acIwL7JFAT8KRTOGtFsdAKlgIhAMceVLSfzqp9NwvIwxn6jYAfnT8GEISJrPNzc9LwVZVsKv8DCCsQABoMNjM3NDIzMTgzODA1IgxAO%2By%2FSJn7EHeoNoMq3AOQNJyWpEdO3tq3al57h0X%2BhSYoX6OKpkyzBaMLItl6q5U%2FapS3iSo%2FDTJvCX8kbKMniH8rRS0n0mwiwj5GT9MDIj4iCLDuAWWiL2vt6SOrXrHumCw8ZUruIiewvZ4gc6bIM8Gupvp6bZslXYlEeBIBOE2pUJsG%2F0F4bZsYtVCz98AWzc7z2NcKXhTK6nNjITO0ZHIII25yXKJyekZT%2BtDvieMr7fQ1pWPPGGZIpFCVlhJlxg2UaP03IZj0h4pPA0IOfHSf8ZmsujHnwY009CyF5T0xp2J1VfvzC%2FVmOj8gdB4ZCIgviyOKQv%2BYkNc0a68zqrB9hTLf99agZnfsX1DvX6vWf0h2jf%2BoHDH6%2FGDXYuB9%2BW2hXDZiQrPwklJbUYP2X6F3q8%2FyBeh3qvvYCJ50stnQmdeXt2T%2B00wWgpuQ0lRpaS8niNZqIhkRgC%2BiYKJy8kbaUwYQ%2Fqyzpl2A11w5mnDlUxBYxamF2NmIa8UK7newL5r5jkLNzY%2B9%2F9PdGW34BO12fS0mT7rNCrcW1IgwIinVYMEvDiLkC6G9%2BQ1TQnZoxzXjK%2BjEUD7ecEdPX820tPymx9o5f%2BSHfJG1wvLhj5GEGP2XVI5Qh3OFTX%2BQBiShjQBEyQz2wFnSADDHluLABjqkAbd2BNfy4hQtRQ%2FtCCQLgA916CiCM9B1m7%2F3Y7rwWxeuCYAlb9P1tDVjXpcR4t%2BV%2FDCl6SLNbj1WBklBUbZ5iJpt%2Bc93%2BQAOfJiLCZ62awiNglX0fhr0y9XHgO%2B3ByBe%2F4c5UyKhjftebg6raQEZTWiHSgpzol3YQMpAN7jvrx1qWdj%2Fsno4frMBxvwnMvbC2UOM7i7hrBKKeQPjRTX8RG29qQub&X-Amz-Signature=aea765c5f7234621651d69dbc03a079fc7a035f203a7d54a6b5216e317876a88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFKEOPM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYBGtPo8Hhp3WXHu3vR805rx0I4rQ89f6hFHoyGhzlxAiBW78YMKDjP6wmGfQ2THVKl1gG1HBPAJpHn7Vegx5mtFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1ZAcdPKPbzRPykCbKtwD%2FYwygDdNXWMa7tOk2w20%2B0WIBHD5hNVEcBTx6q%2Bzlmu%2Bt98U1W1rmd81mQFeAFQUloxhYpPbB%2Fm9PHFucsf8K4sS1t7ripgUECtKjh3%2Fq6jT6%2BTYQPD2uYKT0VfYdhtVgmMGlYlN73IN3EARiaMo5KUGG%2FOr90e5P3HCHvYHc8z9X4KbHWHyrRbTUW88awrqL2zo6A4tLTDSm6hb94UnKBAur8R9ieA5S1mAZcj2uoCB57UNLBxnoIJVZZtdKBvi63TVexWOg%2FxBLY%2Fe7gnoHrFCVi%2BdlZpUuji2Rww%2BC7U%2FU7vIsTLGLVmHLVGliR%2Bu7Qwn2F5IgjHrBco2Q%2Bk2KwY%2BMBAhf6%2FJAlWO1aBQkMQ3DbKZV8c5yW2wLL8vczAqbvd0%2F7y%2B3%2BOfxJBcIjFBi8IyUHmavXhZXCmzWPvg0Jha2JH4KgmXXqWrYsJGestjCoZjl98t0EdWY6UGrgUZh1u1pwgRNgR8e1kuADLqUMmOsLWuTDuxlwRTYwfpt7W45XtARNuIIJ0fxIEjuWR5wwgQ2kwmg8VEGQLiOKOqvESeGR1G3HZWzNaNFmBLYOB5BjIteFihsTcKJmydlcG84Km8%2FtxcXY%2F7LQ3dSxBhpkeE97Sna4A5h1aS%2F2owppbiwAY6pgHSVaQxIozwIkzGjMouG2JB3c%2Fk0FAnoZG9FYpQerW0qCErwY8jcIG4qxcylsIXBLBpYh0Ol24n%2FpHcnywn%2FlRPR1tGLBrOXtMmhK00NmhWHjtTz9pTXjlckQiW7yRybTqJnNA2%2F2FpiQNKYqrZ0EmzCDny%2BNyh%2B8zpaMNMSHVkqctxAfzhXyCUKZyznMwPmoMr7kvNFTfLkb%2BxA3X5%2BAocp9iNnwk6&X-Amz-Signature=13e4fcdff25d462adbedd9159e917f73a0d1d9c128d92843a770274aa17bfcb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
