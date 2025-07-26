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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPC4PQYM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH6h1hka4TYxERslrnbV4RTjntlrAnvWVTfY7kCnDp%2FlAiBq27N%2FYQK%2FNgbWZzE51SppFDsjg4u1blWT1YLcHtZULyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYKrc3jymjSpR0pYfKtwDPDQRj3xkjvXUl%2FKOCuUPCmjP4gU56J5BX8zmN708ViU59xeiYF0K7pwaZrqiHZbYh0k1hihURmhs%2FrLeb15t8T9sBKFMElPxC4iXhz1QXdgadRSBwzU7WCP1BMRLKWqcDzgoY39mtYvAN%2BKNmY5fU2C3Q7URCi4DRmXQ9TVyoFPbVj70UzapK7xM0biEwRmFw%2FCWT9okRpgdegwuvyp7%2BIH4SMKkokdfdGmYH3VHBmi2kOS5BTTOnye%2Faw1q6nd2%2F5m3mYk0u6hHiYCa0%2F%2BmyTQnECOgZbXX8EIk2Ss0nQQ1Wf%2Fn0a36hoQ%2Ba84dHZp8a0wjRdWV64reJn3vbKtRM%2Fc3RnD4Zi2m8vu3TWBNmGf1C77u5Ox5q26g22hJNTjnJ7hBy2Z45AvNFesgS3ACC1Uk7AfLlTVKxHDgPj91ER5FzPMvDiposDzmnH5X7CH0CZ1Ut6qXlG90a1Sj4ao%2FPGpz5srNXzT42zwS0Q2MvL4WFXn9%2F9HoLSzKLP53mCbpEXKSB5v6pWt3zuaukfLAK8MkQGPduN3iJzjVma8fRvmJ1sefNqF3jEbRK9jogI1WiS%2BiCoeWK6jKS3VV4c1cyCHcbKzKdhJiUu0%2FHH%2Fd92qhf6BtEEbsFMqZbjAwlYCQxAY6pgEvZzhWq0YCI2VRYG4jkqOTQ25cdJsSu%2BE5F1znmQztW0%2FMsAGCKYRqD7queatpSTdRkwiy74T0HDWR%2BQzXiiHYSWTZf2Yb%2FpC2MzwJaS81SQup89gSBfiTlWP1hmU1puyi8MmB2d5qqBSmJ4o28dyXfY7kaAXwVfSAaDxayWR1OOSbijFNY%2F%2Ba30uaXajCG6z6tic%2Fv7GBhiKVJwmIYN2DbifkcmZb&X-Amz-Signature=117d64abec2ea588ef80c724b775b56c7d8f370291dd2a4038d5dc0f47396959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPC4PQYM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH6h1hka4TYxERslrnbV4RTjntlrAnvWVTfY7kCnDp%2FlAiBq27N%2FYQK%2FNgbWZzE51SppFDsjg4u1blWT1YLcHtZULyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYKrc3jymjSpR0pYfKtwDPDQRj3xkjvXUl%2FKOCuUPCmjP4gU56J5BX8zmN708ViU59xeiYF0K7pwaZrqiHZbYh0k1hihURmhs%2FrLeb15t8T9sBKFMElPxC4iXhz1QXdgadRSBwzU7WCP1BMRLKWqcDzgoY39mtYvAN%2BKNmY5fU2C3Q7URCi4DRmXQ9TVyoFPbVj70UzapK7xM0biEwRmFw%2FCWT9okRpgdegwuvyp7%2BIH4SMKkokdfdGmYH3VHBmi2kOS5BTTOnye%2Faw1q6nd2%2F5m3mYk0u6hHiYCa0%2F%2BmyTQnECOgZbXX8EIk2Ss0nQQ1Wf%2Fn0a36hoQ%2Ba84dHZp8a0wjRdWV64reJn3vbKtRM%2Fc3RnD4Zi2m8vu3TWBNmGf1C77u5Ox5q26g22hJNTjnJ7hBy2Z45AvNFesgS3ACC1Uk7AfLlTVKxHDgPj91ER5FzPMvDiposDzmnH5X7CH0CZ1Ut6qXlG90a1Sj4ao%2FPGpz5srNXzT42zwS0Q2MvL4WFXn9%2F9HoLSzKLP53mCbpEXKSB5v6pWt3zuaukfLAK8MkQGPduN3iJzjVma8fRvmJ1sefNqF3jEbRK9jogI1WiS%2BiCoeWK6jKS3VV4c1cyCHcbKzKdhJiUu0%2FHH%2Fd92qhf6BtEEbsFMqZbjAwlYCQxAY6pgEvZzhWq0YCI2VRYG4jkqOTQ25cdJsSu%2BE5F1znmQztW0%2FMsAGCKYRqD7queatpSTdRkwiy74T0HDWR%2BQzXiiHYSWTZf2Yb%2FpC2MzwJaS81SQup89gSBfiTlWP1hmU1puyi8MmB2d5qqBSmJ4o28dyXfY7kaAXwVfSAaDxayWR1OOSbijFNY%2F%2Ba30uaXajCG6z6tic%2Fv7GBhiKVJwmIYN2DbifkcmZb&X-Amz-Signature=92d786e3e1f62e59d4308520e0f1b73e039f2e60880b4080df460c847601d9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPC4PQYM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH6h1hka4TYxERslrnbV4RTjntlrAnvWVTfY7kCnDp%2FlAiBq27N%2FYQK%2FNgbWZzE51SppFDsjg4u1blWT1YLcHtZULyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYKrc3jymjSpR0pYfKtwDPDQRj3xkjvXUl%2FKOCuUPCmjP4gU56J5BX8zmN708ViU59xeiYF0K7pwaZrqiHZbYh0k1hihURmhs%2FrLeb15t8T9sBKFMElPxC4iXhz1QXdgadRSBwzU7WCP1BMRLKWqcDzgoY39mtYvAN%2BKNmY5fU2C3Q7URCi4DRmXQ9TVyoFPbVj70UzapK7xM0biEwRmFw%2FCWT9okRpgdegwuvyp7%2BIH4SMKkokdfdGmYH3VHBmi2kOS5BTTOnye%2Faw1q6nd2%2F5m3mYk0u6hHiYCa0%2F%2BmyTQnECOgZbXX8EIk2Ss0nQQ1Wf%2Fn0a36hoQ%2Ba84dHZp8a0wjRdWV64reJn3vbKtRM%2Fc3RnD4Zi2m8vu3TWBNmGf1C77u5Ox5q26g22hJNTjnJ7hBy2Z45AvNFesgS3ACC1Uk7AfLlTVKxHDgPj91ER5FzPMvDiposDzmnH5X7CH0CZ1Ut6qXlG90a1Sj4ao%2FPGpz5srNXzT42zwS0Q2MvL4WFXn9%2F9HoLSzKLP53mCbpEXKSB5v6pWt3zuaukfLAK8MkQGPduN3iJzjVma8fRvmJ1sefNqF3jEbRK9jogI1WiS%2BiCoeWK6jKS3VV4c1cyCHcbKzKdhJiUu0%2FHH%2Fd92qhf6BtEEbsFMqZbjAwlYCQxAY6pgEvZzhWq0YCI2VRYG4jkqOTQ25cdJsSu%2BE5F1znmQztW0%2FMsAGCKYRqD7queatpSTdRkwiy74T0HDWR%2BQzXiiHYSWTZf2Yb%2FpC2MzwJaS81SQup89gSBfiTlWP1hmU1puyi8MmB2d5qqBSmJ4o28dyXfY7kaAXwVfSAaDxayWR1OOSbijFNY%2F%2Ba30uaXajCG6z6tic%2Fv7GBhiKVJwmIYN2DbifkcmZb&X-Amz-Signature=d32fb54ca7042cef3a60e244819cbb969317152d508a1d957b48f1251919fc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774LIXZU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDSQVbI0UB%2FfMmjXjZyPdAXvB4g1CPsx0QRVg78iV3TBwIgTG1SxsftV107T1OT0XQpicH1wUnFmgFi1DSX9IdULC4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPlrFnVEylmO4kg%2FHCrcA3E1iB%2B%2Fl8U%2BjsVV10i86lJozulRJ8%2BkKzhiNP%2BC%2FjKR0uM89Oc4QkDsvi5w5TEHjpi6lIfqvltToVVNeMAkp48f8ky2hYZ9BE8pyWf5UzqtAfIwK7AKrFSPkzzJZhB8afQO7u9hOmFTd4Rze%2BoGobylZ2cqoGr4a6E6MG6oz2kcOHp2jA84kyRIDUHoBq%2FxRxuuSqa4ew5uIaC0q83CYvCOMdaTBB2Z6gQSnSi7v%2BsVZ9ANTKBz17USUNtFCZxszvrqPGFDN0rVaTnAUcMWN2B4dLkw7KItuZgRZrGAjWiSAMhdd2Hxx9wiixQdfFPSiE0ImXtPnmicmGdVVfeGReU4svnva9eXCOYckwqjksfyQqO8EGRa9FqdWo5E4tM8umHKz%2FlCUBov68Btzh%2BOxlHEV4GdsgqJPObzGI4cphB1xY24%2BAmFy36H2zFw1GujbTVYDBga79LUiowyX5wKnW9QiA0OaGE%2BiqbYrPOxUK6XD5E31XM1qL3ASbnoR%2BqpsKrkdxeZX%2FkYsuGbWOI0GrD8P%2F7eAYMv8tyM%2FH%2FqX7kyDT7DnvgmwEp0OinjXcVMR2%2BSrpruAgbSQjHoTnRBItuPJzgA3uOj%2FY792Hf9mg%2FqmRF4BMhaR3AXbF87MJPzkMQGOqUB74whv45KBLO3FzFNadbPRffVKqiBAj0H%2BTBF1UmIt03R4PsKysIDjuCkAQdwfq%2BWESzAkb9mvuvfPhh8qbExJjb4%2BGRaTs58%2BKsHZ7rUHtb8T3BWuVHs%2FxziWMibTWxbjLUh3TnkVrgRNDcDWmtvsuFSv9geU8UOuMhxO9h0n5WIkVljvY0GoC2Ob2%2Bou09Wf7mwaaXuvUuBhQoqswIIrmvLVV7C&X-Amz-Signature=b0f077b4fcf072ca68ac7eda500cdb718e284c7a641e91029cad68fcb0b8bdb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZQKFQDD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCYzlTL0zHxJo5xVTR%2FC1xehbLO9ZY%2BHQvIPlFrJERGVgIhAOMUaQQ3CkgkEpbRnBW7GKa7yuMYcB6nSJdu9QyaybTkKv8DCFMQABoMNjM3NDIzMTgzODA1IgxDiD8%2FfYlTvsZNDM8q3APo5EX6FWTMmhwqH7vu2YfSzN%2Bm81uTOyM8if6w9hfBIivcNPuRo5bf6GpKtNHo4PmpPSCDiXujvELMzxxiTkpS5%2FK3ija2J8fOSMI69Lbhw%2BtCpDtiZ373HRGtALrsOl%2F9Ctg2vwQR%2B7%2BrKRcdUaFB6k4%2BCm%2BUAnXdYDjMbY46bRIi2W0wtF3ooo9AifWsaZB4hvj9ESiUNYC0Le5AIhJ7%2B2C30lOyXQ6FHP5gRfBsoyo%2Fo%2BSb2Rxua0HjeGQFlO67BkEx7OfopgOoOoPa%2B%2BYs%2BLW46YNqjlfmgkXannMss15bjKCWxQFqtcFp6i40pwpSGQrePcOPTnzGLbSrZv6hB%2B%2FWt2g%2BS6sSPazyvAWhobkCX4EOc9jalsfaGTbLGH%2BATH%2BfRa13NF0rULPh%2BQqlzKcG4g%2BaENLSjf4ofqU9m1nobiLr0Q80LSUS3xRD%2FCgbR92hCqyfeY7H7rz7iYgMFQHcD3Vysv9x%2F5H1gRxIaUHbEn99RQgB%2B%2F0euUDXjdGdMTU8XxoCUBeQvF4MoU%2BVbZbu0LRWiM0xEt5tp9CYD1G0jHmE5GldDmnG7EyAsgorwlW9rfK5ubcs6iWnKqz35%2FTLJt838vvS13BpkQtSnHv1359sbM9UUhZBATDC7ZDEBjqkAWBAaeVvNfKHA3eAXHyc8DVss%2F2w29PIxhKxaWFd7Mn1VTKiQTXG4RLa4u3xl%2BQ6WD4BAwujd1H27eQhBsiyMajrPpiREDT4DFWqLaYENg8M4jLZMm7d0oV3CGS%2FSBLp7FuS%2BO26Wxyn%2Bixfl7gi07aYAO1vAvGDwRRc08SOUTZaHVfJMQN31bUTmRPcABx1uteQaVQjV51IKPu6%2BNxtRjrIcHUu&X-Amz-Signature=bf1790b77a30404c3c0b443d42acd87777db842f2edf0eafb3da2a5e59cb5a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPC4PQYM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH6h1hka4TYxERslrnbV4RTjntlrAnvWVTfY7kCnDp%2FlAiBq27N%2FYQK%2FNgbWZzE51SppFDsjg4u1blWT1YLcHtZULyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYKrc3jymjSpR0pYfKtwDPDQRj3xkjvXUl%2FKOCuUPCmjP4gU56J5BX8zmN708ViU59xeiYF0K7pwaZrqiHZbYh0k1hihURmhs%2FrLeb15t8T9sBKFMElPxC4iXhz1QXdgadRSBwzU7WCP1BMRLKWqcDzgoY39mtYvAN%2BKNmY5fU2C3Q7URCi4DRmXQ9TVyoFPbVj70UzapK7xM0biEwRmFw%2FCWT9okRpgdegwuvyp7%2BIH4SMKkokdfdGmYH3VHBmi2kOS5BTTOnye%2Faw1q6nd2%2F5m3mYk0u6hHiYCa0%2F%2BmyTQnECOgZbXX8EIk2Ss0nQQ1Wf%2Fn0a36hoQ%2Ba84dHZp8a0wjRdWV64reJn3vbKtRM%2Fc3RnD4Zi2m8vu3TWBNmGf1C77u5Ox5q26g22hJNTjnJ7hBy2Z45AvNFesgS3ACC1Uk7AfLlTVKxHDgPj91ER5FzPMvDiposDzmnH5X7CH0CZ1Ut6qXlG90a1Sj4ao%2FPGpz5srNXzT42zwS0Q2MvL4WFXn9%2F9HoLSzKLP53mCbpEXKSB5v6pWt3zuaukfLAK8MkQGPduN3iJzjVma8fRvmJ1sefNqF3jEbRK9jogI1WiS%2BiCoeWK6jKS3VV4c1cyCHcbKzKdhJiUu0%2FHH%2Fd92qhf6BtEEbsFMqZbjAwlYCQxAY6pgEvZzhWq0YCI2VRYG4jkqOTQ25cdJsSu%2BE5F1znmQztW0%2FMsAGCKYRqD7queatpSTdRkwiy74T0HDWR%2BQzXiiHYSWTZf2Yb%2FpC2MzwJaS81SQup89gSBfiTlWP1hmU1puyi8MmB2d5qqBSmJ4o28dyXfY7kaAXwVfSAaDxayWR1OOSbijFNY%2F%2Ba30uaXajCG6z6tic%2Fv7GBhiKVJwmIYN2DbifkcmZb&X-Amz-Signature=841433d63a40d9dcd8f91cc9e65d86fa2e248e533a325712ce0df4a50aab4e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
