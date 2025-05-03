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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WP555E%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEcxEYROlHqJZfJ0KrYUfkanKdyZrOrOHPL%2Fotq7QSziAiAsXEDHJTqHc1l2ifqa5Fg7f2ZBJT5TCDRKfjaI9p%2FB%2FSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBjWjHdaAle4e3ijKtwD9NEB5lQzHHTYqMFVkzooKVFxCPn7%2ByBec4FVAvAogcyY39n2vg6gDThWzyfW6bahwtUb9VN%2BKMCug2zcXxdgUIT35GNe0WylbrV4iA%2Btqtf0RdLSaD%2FRIZhxmskSK4Phx71CUiim1w4xHz%2BDmKrYNWYKaXwLxi4St9LTHArsa0nA0PQUS21psrB87W%2FSQHthwSk35vKV%2BagG3r7AI7KuJyNm9%2BBUGTGqQNVnxzCRhLCfULuuN5NqyRTOZb0lXfuWeWHijL67GJdVNTaBQYRbR20IkQbP7m69bXMMGuASAec47ZY1glDlKeK%2FBACcsnbbqqblLWdqiEhny6Q8luaMHYrVbI0sMkM9f%2FXacNHwjMj6g7mmSPJA72qgDXa6ZwAZA7hLJseRyaU6hKAx82JiP65rpgV1tmb22QtRcu2aAHkEcTUNsYnmSQ9yJguR2Hdi8xEn459nUd1%2F5oAxQkhP2bBnHSdrPgt9YDfDRtdAYdkPKiTIdeNIo99ZfyqDiVQunhr4vgfb8O0LSZQJkCwpMnwiIES6oHyPfPuLtGpJn5FsmlK8zgQK2WPccDXb%2Fewc8sOD04ILYctQni2A3vlnxC2NWedjPlFq80lyAw9rePinwNqPvsgLdCjKVmYwjYfWwAY6pgEcxF2kDludwF2jRlemEnB0zeQAkt%2BcGmnGNNWow3x%2BCSPkmcFII1K9zQLg4H0Vqe5HpwtynTUollh4%2BObZHFLiDazw13WsLgWWFj6eWJMoiumX6QbMpkkcaeqAE8N7TDrEp%2BuGfQ9uGazGRf34v4L0nkG4skPgmSQ8yW8GcCm9ZtSL89qFHJrZFnzMFBpdP8%2BDZ1bbZXK05KlkiJS9EXlsiFj0tnwd&X-Amz-Signature=1e372a0f5f298b98405e8df70f108cd55ddfb14b23d7a3ee31b128ee7ce194b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WP555E%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEcxEYROlHqJZfJ0KrYUfkanKdyZrOrOHPL%2Fotq7QSziAiAsXEDHJTqHc1l2ifqa5Fg7f2ZBJT5TCDRKfjaI9p%2FB%2FSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBjWjHdaAle4e3ijKtwD9NEB5lQzHHTYqMFVkzooKVFxCPn7%2ByBec4FVAvAogcyY39n2vg6gDThWzyfW6bahwtUb9VN%2BKMCug2zcXxdgUIT35GNe0WylbrV4iA%2Btqtf0RdLSaD%2FRIZhxmskSK4Phx71CUiim1w4xHz%2BDmKrYNWYKaXwLxi4St9LTHArsa0nA0PQUS21psrB87W%2FSQHthwSk35vKV%2BagG3r7AI7KuJyNm9%2BBUGTGqQNVnxzCRhLCfULuuN5NqyRTOZb0lXfuWeWHijL67GJdVNTaBQYRbR20IkQbP7m69bXMMGuASAec47ZY1glDlKeK%2FBACcsnbbqqblLWdqiEhny6Q8luaMHYrVbI0sMkM9f%2FXacNHwjMj6g7mmSPJA72qgDXa6ZwAZA7hLJseRyaU6hKAx82JiP65rpgV1tmb22QtRcu2aAHkEcTUNsYnmSQ9yJguR2Hdi8xEn459nUd1%2F5oAxQkhP2bBnHSdrPgt9YDfDRtdAYdkPKiTIdeNIo99ZfyqDiVQunhr4vgfb8O0LSZQJkCwpMnwiIES6oHyPfPuLtGpJn5FsmlK8zgQK2WPccDXb%2Fewc8sOD04ILYctQni2A3vlnxC2NWedjPlFq80lyAw9rePinwNqPvsgLdCjKVmYwjYfWwAY6pgEcxF2kDludwF2jRlemEnB0zeQAkt%2BcGmnGNNWow3x%2BCSPkmcFII1K9zQLg4H0Vqe5HpwtynTUollh4%2BObZHFLiDazw13WsLgWWFj6eWJMoiumX6QbMpkkcaeqAE8N7TDrEp%2BuGfQ9uGazGRf34v4L0nkG4skPgmSQ8yW8GcCm9ZtSL89qFHJrZFnzMFBpdP8%2BDZ1bbZXK05KlkiJS9EXlsiFj0tnwd&X-Amz-Signature=af200549ef4530342e570133209d7ba52e9ac0e85c1cba174aa8899849c3101c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WP555E%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEcxEYROlHqJZfJ0KrYUfkanKdyZrOrOHPL%2Fotq7QSziAiAsXEDHJTqHc1l2ifqa5Fg7f2ZBJT5TCDRKfjaI9p%2FB%2FSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBjWjHdaAle4e3ijKtwD9NEB5lQzHHTYqMFVkzooKVFxCPn7%2ByBec4FVAvAogcyY39n2vg6gDThWzyfW6bahwtUb9VN%2BKMCug2zcXxdgUIT35GNe0WylbrV4iA%2Btqtf0RdLSaD%2FRIZhxmskSK4Phx71CUiim1w4xHz%2BDmKrYNWYKaXwLxi4St9LTHArsa0nA0PQUS21psrB87W%2FSQHthwSk35vKV%2BagG3r7AI7KuJyNm9%2BBUGTGqQNVnxzCRhLCfULuuN5NqyRTOZb0lXfuWeWHijL67GJdVNTaBQYRbR20IkQbP7m69bXMMGuASAec47ZY1glDlKeK%2FBACcsnbbqqblLWdqiEhny6Q8luaMHYrVbI0sMkM9f%2FXacNHwjMj6g7mmSPJA72qgDXa6ZwAZA7hLJseRyaU6hKAx82JiP65rpgV1tmb22QtRcu2aAHkEcTUNsYnmSQ9yJguR2Hdi8xEn459nUd1%2F5oAxQkhP2bBnHSdrPgt9YDfDRtdAYdkPKiTIdeNIo99ZfyqDiVQunhr4vgfb8O0LSZQJkCwpMnwiIES6oHyPfPuLtGpJn5FsmlK8zgQK2WPccDXb%2Fewc8sOD04ILYctQni2A3vlnxC2NWedjPlFq80lyAw9rePinwNqPvsgLdCjKVmYwjYfWwAY6pgEcxF2kDludwF2jRlemEnB0zeQAkt%2BcGmnGNNWow3x%2BCSPkmcFII1K9zQLg4H0Vqe5HpwtynTUollh4%2BObZHFLiDazw13WsLgWWFj6eWJMoiumX6QbMpkkcaeqAE8N7TDrEp%2BuGfQ9uGazGRf34v4L0nkG4skPgmSQ8yW8GcCm9ZtSL89qFHJrZFnzMFBpdP8%2BDZ1bbZXK05KlkiJS9EXlsiFj0tnwd&X-Amz-Signature=19f3642cb2fde23459585d0e7eface8ee9db1f4145c1210e04e8ba6bf1443a53&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIV7TUB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCqH%2BZujQlGzXh0I5grrfRzy7w2hyIOqDI5CBSHwITJGAIhAMpuOVgLvVau9Ie1H8020iDioLv8y4%2F3r5wHz3EDgnRUKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BHnion0z10%2FKX%2Btoq3AMm7XdM%2Bg7d5lXPKdzLYiroeWrsxrQz65agFCFL5TXbC3%2FG95PdP3gyoYXTiiQbWCY1HIFEJdfBtPVKBw4Fsmzrev2ottIhQv4gu8qHnQIcQove58hadGyfzRi8tKHoGow2bE9B7R2ZNqCmwtbTpfEBrqWdEFNgQQpdTD0ZehuCKexTx%2BCueh9tgkefgom%2FC7I4iPTT8rjzNXZdPb%2FlqY6GRAE7CDL4pTftiOK4iSwjIFtwlbDYiMqYePic2XTUmEkXOwEtDMfZmYcgHf7IITZlXncCorwtfXcg6WWn9qhDPu2yHIJb6LC0AX0B8d2YQAvFTiGTdxdQrwAz0CIxBLEBEbwA4LgeidPPcNH%2BGS%2B4ZoWXr2nWZ99JFUzVj0Tdj3Bt2%2BNCkNcaennjNHbgy6hARY5Ab9jH57xjTVlOpQd43F%2BG9wBuqQ0rOUysrWJtTrIsPXI3khFshJbF9y5CdgSn1vNfJwAok2OOw3ADblZNhKNQGACNOlb3wckhjLLC8GfaAd1rE4bBqPK3FRAHwo8xZSBEUN%2F4tBPEqccSANvJmQT5I2s1is%2FsZC5YC0AGbluUJVMPQyPecoDRbfKJ2L%2BH%2B0GrlbGctUMSWAotmqblQLz7VYPghwUzjF2FZDDYhtbABjqkAbO7EDXAalefpuHsIUdpEq5Z7BBTsh%2FY0Ata654%2BPXWF5eB44o2yD8ugWEBRWRz2VwcpNvIuIEO1zkYMeUDj8sAwIq6MoCg5siOUuApPjIC5KFpgj2hS77fvT0yT17EghyXsaR%2BypssNVb%2BFAjurb3Dx%2BV8Zq4pweMtMM8ZwYCPAhiv9HZMe89pqeTPYB5xGUa3XafOZtAIjwkeQrPnr0A8iEPi5&X-Amz-Signature=09cc9f626b03ae68c2be10bfdc53a130780be651dddf6b9296095960a8c608c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXSCFI2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAckl6yPrHAYxTk%2FnfH7WJfVO5vfZG%2F84WA8T%2BkrqJrrAiEA3%2BiVly0bOCLoY7VL%2FPU9rRZ%2FfFXcLcNjpWPgMikHxFgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFut8%2FqHwZxkA%2FwcyrcA5PsMkOZV1kdsTRGBLKQ0ZMKJdcXuUMjNhwXiHYa4j58Xq8cacQ%2B7tdqbgLo0XMAyS9gsZOT43al%2FuWUWpPkmnQwb%2B8e3kC4gjq3kJFE4P69ibCia7g%2FjnaFwmME1F2wKwMB%2B90diOIzwZZg%2B%2BEkDqRv60ELI7gH1Zu3xe%2FEir27hLjoq87I2FYYQ8ND7xdDd5CwQ%2BeRgUJU3NwKYgRsjNM%2FZvcUHbAseMJwAnobdwlEW4dULmS850%2FaE5%2Bo0GJqCP47nXONhTP7QrKzaKHgVnjf4ggIPgRrxUBnj%2FUpjTsuWvo%2BV2BPx4UqIEzJ%2Fvy9msuljFMQQNYFVZTTkTBPtno2jDApER9jgtKe8GofqNjWHIy5%2B0YbwJDlnpAzCITtn1Jm2ZlkuW2F4UZgwqqyQcj%2FSdr4IBWU0Xju%2FQlcmWl4nmrOxUbyn%2B3bziMPuJKemEcMa6TCyhumAPm5ge8ceBQ0D6yqUd18q58wXQXcZ7VZK6oA%2B24a5tXXiCB%2B7iXGKiRrETyzwRG7rBYJjH130UbCcQkygHw4h1Vnu0yCFWrRG78R3GrCED%2FDx787yFjtRrigwUhDam3C%2BFZO9CDZ3B5CHs76UI8jqNn3vlC0vCXTqyejONktX3pNxHQwMIKH1sAGOqUBcMeCmempnwRa3hR1Iu%2FP7JG4U0HW0OMP6JztSRa20KyhQl1JFsAlZP0P9KT6mSzL2Thtx3GvXxGuAGuGHwNrJDkeLpEF4nlhUusNjI3NRtNjcUoCqn2OCRJ9NU%2BPyDljeRIumfXfF41WazDPhTSi5XisiSGvAAQrkmVP5ztKI%2BrZOg4EzecFBkAxbX3AhOQtfxVj16VzOrtpcfvlATfGIC%2F7dBJ1&X-Amz-Signature=607bd788b4283a55e018276669e3fd165b58ac59be73e04cbe8cab665328a5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WP555E%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEcxEYROlHqJZfJ0KrYUfkanKdyZrOrOHPL%2Fotq7QSziAiAsXEDHJTqHc1l2ifqa5Fg7f2ZBJT5TCDRKfjaI9p%2FB%2FSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBjWjHdaAle4e3ijKtwD9NEB5lQzHHTYqMFVkzooKVFxCPn7%2ByBec4FVAvAogcyY39n2vg6gDThWzyfW6bahwtUb9VN%2BKMCug2zcXxdgUIT35GNe0WylbrV4iA%2Btqtf0RdLSaD%2FRIZhxmskSK4Phx71CUiim1w4xHz%2BDmKrYNWYKaXwLxi4St9LTHArsa0nA0PQUS21psrB87W%2FSQHthwSk35vKV%2BagG3r7AI7KuJyNm9%2BBUGTGqQNVnxzCRhLCfULuuN5NqyRTOZb0lXfuWeWHijL67GJdVNTaBQYRbR20IkQbP7m69bXMMGuASAec47ZY1glDlKeK%2FBACcsnbbqqblLWdqiEhny6Q8luaMHYrVbI0sMkM9f%2FXacNHwjMj6g7mmSPJA72qgDXa6ZwAZA7hLJseRyaU6hKAx82JiP65rpgV1tmb22QtRcu2aAHkEcTUNsYnmSQ9yJguR2Hdi8xEn459nUd1%2F5oAxQkhP2bBnHSdrPgt9YDfDRtdAYdkPKiTIdeNIo99ZfyqDiVQunhr4vgfb8O0LSZQJkCwpMnwiIES6oHyPfPuLtGpJn5FsmlK8zgQK2WPccDXb%2Fewc8sOD04ILYctQni2A3vlnxC2NWedjPlFq80lyAw9rePinwNqPvsgLdCjKVmYwjYfWwAY6pgEcxF2kDludwF2jRlemEnB0zeQAkt%2BcGmnGNNWow3x%2BCSPkmcFII1K9zQLg4H0Vqe5HpwtynTUollh4%2BObZHFLiDazw13WsLgWWFj6eWJMoiumX6QbMpkkcaeqAE8N7TDrEp%2BuGfQ9uGazGRf34v4L0nkG4skPgmSQ8yW8GcCm9ZtSL89qFHJrZFnzMFBpdP8%2BDZ1bbZXK05KlkiJS9EXlsiFj0tnwd&X-Amz-Signature=9f8d0ba16b42c8c01b4546af330cfccf231ee6759288e0210cda54e3544d0d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
