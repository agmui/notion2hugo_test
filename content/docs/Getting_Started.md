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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJWSY5M7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxwzKC%2BfcxVaOOg4wn8V9Y3FVcpE0i0pZKvKnqdWZsAIhAKTTbcHwyrS6RndepYyziLnT%2BVVaF6I2JLvZyh8n3%2FanKv8DCDEQABoMNjM3NDIzMTgzODA1Igzu77%2FBVg0ho2r6Hsgq3APO9rZY5x7%2BT4rdqGBGKBkJS0g61gD7cLeudU2LYrq7UqDD2Jj64LKV7GfIziKtgy2DoZRbZuNcFpU3g6x2VHP9MUSeo9U%2FcUDAdFt0RoeK1JGPxWNUa3oYm0p4kFkqIgQi3nyfFR5HhHKoLmOTPkCFRVbuSG0FPiFgvhpMMUgVuur7N183CWciO8tKAMqlfbAc1Gu6XVVNLAua17Q60m0811e%2F9SlEJZNWKppmTcJEABooHqXUpEihyvNG78sqi0cZmf1pivFD9U%2Bac%2F3evx%2FP3h2gqqgm6kWsAKnFFR9h1K6MPSt7va47djkn2M%2BT7mbLNqAZ0lzkqnXx%2FWROI6qZPPNlsGb1BdbpD5VlG8eU2BeyJ4LX6ZBov7rqp1pUi1LFpvmxUH0dHFEwHuVxhBQGXx3jOoQF2V5iPZh7zFJ00RZVZ2FLNzvk92kjBRxMMPegRzYW6Bcdt0fLtENc%2FWbDUoFCBJd6v0l2NmXM7XpeIqLWJOpB88KESHLsCwrUwvutHBDrY7cuaRf%2BGQS5LTRU3RhRMYEOrIeKqOEgZSlqFECC1ZhCGGMngiXv5nXgpgFFpXuT%2FUmKGym5S55rW3HLT%2B%2F6Oy44INx%2BBbiZd0QWMOJUx%2Fho%2B5OR3up%2BsTC63tu%2BBjqkAVsHuhRqj0%2B9s20qOy19tY7WgFvUJ2JiUILSzFA%2BBk0RfASpR4GzjsB2W95ptg7JBqCpYnq%2BTIxcz8LeWR9tENYRKcc%2Ft6B3YQw85CaOLoDaMyHXDcOz7TFM0AW9X0Aie2P%2F0NCRZ8tIZ7ndrrjWsWXQIjLjZ2hmCSnq4uUy8feb0%2BHVlC5UvaTSHY3G5tauHq8U36TYrGdRg%2B8gJw%2F%2BpnaAf4pQ&X-Amz-Signature=075015e6d8414cb707eeed30f41555815b561f60bf6884bffd8078e78812b610&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJWSY5M7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxwzKC%2BfcxVaOOg4wn8V9Y3FVcpE0i0pZKvKnqdWZsAIhAKTTbcHwyrS6RndepYyziLnT%2BVVaF6I2JLvZyh8n3%2FanKv8DCDEQABoMNjM3NDIzMTgzODA1Igzu77%2FBVg0ho2r6Hsgq3APO9rZY5x7%2BT4rdqGBGKBkJS0g61gD7cLeudU2LYrq7UqDD2Jj64LKV7GfIziKtgy2DoZRbZuNcFpU3g6x2VHP9MUSeo9U%2FcUDAdFt0RoeK1JGPxWNUa3oYm0p4kFkqIgQi3nyfFR5HhHKoLmOTPkCFRVbuSG0FPiFgvhpMMUgVuur7N183CWciO8tKAMqlfbAc1Gu6XVVNLAua17Q60m0811e%2F9SlEJZNWKppmTcJEABooHqXUpEihyvNG78sqi0cZmf1pivFD9U%2Bac%2F3evx%2FP3h2gqqgm6kWsAKnFFR9h1K6MPSt7va47djkn2M%2BT7mbLNqAZ0lzkqnXx%2FWROI6qZPPNlsGb1BdbpD5VlG8eU2BeyJ4LX6ZBov7rqp1pUi1LFpvmxUH0dHFEwHuVxhBQGXx3jOoQF2V5iPZh7zFJ00RZVZ2FLNzvk92kjBRxMMPegRzYW6Bcdt0fLtENc%2FWbDUoFCBJd6v0l2NmXM7XpeIqLWJOpB88KESHLsCwrUwvutHBDrY7cuaRf%2BGQS5LTRU3RhRMYEOrIeKqOEgZSlqFECC1ZhCGGMngiXv5nXgpgFFpXuT%2FUmKGym5S55rW3HLT%2B%2F6Oy44INx%2BBbiZd0QWMOJUx%2Fho%2B5OR3up%2BsTC63tu%2BBjqkAVsHuhRqj0%2B9s20qOy19tY7WgFvUJ2JiUILSzFA%2BBk0RfASpR4GzjsB2W95ptg7JBqCpYnq%2BTIxcz8LeWR9tENYRKcc%2Ft6B3YQw85CaOLoDaMyHXDcOz7TFM0AW9X0Aie2P%2F0NCRZ8tIZ7ndrrjWsWXQIjLjZ2hmCSnq4uUy8feb0%2BHVlC5UvaTSHY3G5tauHq8U36TYrGdRg%2B8gJw%2F%2BpnaAf4pQ&X-Amz-Signature=4caff68cb1cd2fa762b9cac1533b1a675b1a3704005e976cbf09ba347983fd54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOELYCNP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP5i30SG5WIbmfx6Hw7lDNhMawywz759mJY21ATdQ6aAiAhvOF%2FoSkw7A%2FWO6TIfd6o01Bvr9dY3zJb5D8SeHmbHCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMyfvSaWSdwV0XBRQ%2BKtwDAmtu2StVq1%2B0UjyD0I70ks%2F8hwH10GZWl2Nu%2B7itKF8s%2BbqH2KO0YLun5kC6Wh%2FcyFel6ql3Wv9brNGFrlKcPIDolC04RTnxiLng78tC2pDNhiVKcBpSWobCQR%2Fpo8JyJfGVTJ%2Bsb4hI6gFwpJxT7%2BVztkOe4YwZohelM%2BO3MCFUpoa64mFSLkUfGVNJAxn%2BMBD4qRPZ1JncqMCNOcOtW1t%2FVreoej96Dt9ZclK8YTHhABIPmlsfrSDpkBSexPg1HLFnxbMDbsHGtnjjkrHbwbxFiIpasGUwCMHzslCzxZxgg0lab%2BXceheB%2FAQMMphQ1WEDgI%2B8Jy8exai7V3quaqpoYZwAxYnw1XP0uAjqCr%2FCIQTxtJcnwqT6q%2FsV%2FzNzRo2Kj1ik1YZ76ei3ij64gZoGxCZn2nBy3Uloz39EwlaJVwjrxZo6bGxQ7seYUFu%2Ftr71xrE4lAyBwL4y64LVYGeVaRTRNFcc8DfbE1KOuWe%2Bkc0vXp3g0BL%2BIJRCr0O4qyLimPO6GqJ6wd03UKb99UjawSi3Jahua0sxi9Jn6h%2F6nCZArpXwWUzu5lQXK6WZNyQokv3QwPFklzmY4Rz5PHSBb64S7B4fBKPHJb%2FEa%2BKWc0ClCTg1uT%2FAHSEwut7bvgY6pgF5D4veDq%2Bg8y%2B5BUPnboF61k8oMpEIt7eUInIjpMZLYy5p325C9FGT800ItqJeC%2FlLg3XjghlX6zSzLeHgzdAsrnpf9GeuxYe6HVbMtZcvOWjG%2FhC9WBwWBo1y2gN8ylGFRSqbPKa9xXl3xnxokdTAL3qpHmVPAdFQ6rsNjDPYl%2FN%2FJdTy4AE4YB3NBvRbjLgaRnupaPrqkudE6%2BOdWoaAJcWMhKd2&X-Amz-Signature=93b9478bf348bf0a3678f1612a94ae614f44afc380e51082196d43d657c766f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTDX6LP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDCQI51cOpdOIgdtCc0EZatEYHzmBV5TldSY%2BbafCdsAiAzjpsSuu7ffbXLHVpfMF2DTFY6OgqrF6pIPgmmteO%2FDyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMyUtc8vsgGCgLBu7gKtwDnM8H0EyHb8DxIWBWUAVFmwZlS9yP%2FzZpil5gCP3n9ldGxKRaDQ7sFkJoosYanpF3wtbwn4NihI4G7ib2w9zoa4sTieVfhEZvlIz0eQGDNB1B72OKY3QeMCxVogpyd8gAfdTpWQZNAMWC7GkzgeZjhsbfXJbeda%2B4YwEwO33iNZwET9SLt%2BtnMM1ihK8EcptiUlNNmJqdeF40YkYHqkAkWP9vCcyyW4jteKBFsKLRCGWSG2VoLsTNDf0ArbSG3LCKsxKtjApPsR3gLZz7FwusgR1vM3W78Urwh2PfmMAds8bGdiMtr3hA12r%2FSuMa%2BocTrdPJUij%2Fr0NvqI3GqoW2iFsQ44vgCyFl4CFMNMEeXjIh6ac1m7mh45cGLR3fZbGwUMn5Vf%2Bav6U8u%2FDU8kXe2pv4nyqnihjD%2F9443SrblYkz%2B1lRIrsdX51GOaJdn9AyYTd2qdyVcle3LKxUtJcfYac5PI3XIBshzMImEvoHv%2BDVuDirUOqbhn9lDZr66UF0d1oJ7JL9Rul0jnl6bSd4F66PkLnzRQbaWnCSIo55AjwM34T7m0DvXGBwSKesMmRrO1TaXKfQCu7FqBfF3Q%2B3XS5FuDrajOjzPSd88m2F0XSw5GP55qw7uAJOivUw0N7bvgY6pgFnyI5xM1Kmnyw9jp%2Be4GLLzLQxmik9sgyvXCwlFNKiGRSTgNLdbObMUZnx75gmi1xHBfh085G33DmwwS3cPFOt6i0UbsAljECRK%2BMZ1CZnbvNnkz4ClEJe7vpuko2P8nPOuo9SaWTiQP5DwgLgfqFXUhAYWn7Svlt7hLdSQZqAg43%2BASfDH7wfULz41LjhRGILILymyeU%2FllApLVxgDYYaxng1FYnV&X-Amz-Signature=c53d485e6a3d0449e69df718feffc879a5f8591fac14722e07096baa002f84aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJWSY5M7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxwzKC%2BfcxVaOOg4wn8V9Y3FVcpE0i0pZKvKnqdWZsAIhAKTTbcHwyrS6RndepYyziLnT%2BVVaF6I2JLvZyh8n3%2FanKv8DCDEQABoMNjM3NDIzMTgzODA1Igzu77%2FBVg0ho2r6Hsgq3APO9rZY5x7%2BT4rdqGBGKBkJS0g61gD7cLeudU2LYrq7UqDD2Jj64LKV7GfIziKtgy2DoZRbZuNcFpU3g6x2VHP9MUSeo9U%2FcUDAdFt0RoeK1JGPxWNUa3oYm0p4kFkqIgQi3nyfFR5HhHKoLmOTPkCFRVbuSG0FPiFgvhpMMUgVuur7N183CWciO8tKAMqlfbAc1Gu6XVVNLAua17Q60m0811e%2F9SlEJZNWKppmTcJEABooHqXUpEihyvNG78sqi0cZmf1pivFD9U%2Bac%2F3evx%2FP3h2gqqgm6kWsAKnFFR9h1K6MPSt7va47djkn2M%2BT7mbLNqAZ0lzkqnXx%2FWROI6qZPPNlsGb1BdbpD5VlG8eU2BeyJ4LX6ZBov7rqp1pUi1LFpvmxUH0dHFEwHuVxhBQGXx3jOoQF2V5iPZh7zFJ00RZVZ2FLNzvk92kjBRxMMPegRzYW6Bcdt0fLtENc%2FWbDUoFCBJd6v0l2NmXM7XpeIqLWJOpB88KESHLsCwrUwvutHBDrY7cuaRf%2BGQS5LTRU3RhRMYEOrIeKqOEgZSlqFECC1ZhCGGMngiXv5nXgpgFFpXuT%2FUmKGym5S55rW3HLT%2B%2F6Oy44INx%2BBbiZd0QWMOJUx%2Fho%2B5OR3up%2BsTC63tu%2BBjqkAVsHuhRqj0%2B9s20qOy19tY7WgFvUJ2JiUILSzFA%2BBk0RfASpR4GzjsB2W95ptg7JBqCpYnq%2BTIxcz8LeWR9tENYRKcc%2Ft6B3YQw85CaOLoDaMyHXDcOz7TFM0AW9X0Aie2P%2F0NCRZ8tIZ7ndrrjWsWXQIjLjZ2hmCSnq4uUy8feb0%2BHVlC5UvaTSHY3G5tauHq8U36TYrGdRg%2B8gJw%2F%2BpnaAf4pQ&X-Amz-Signature=2b9d986e4fae7886c6844fc95d4c27d2ce23dda7ffcf21dbc883c9af36feadd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
