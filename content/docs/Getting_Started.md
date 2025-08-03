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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ISBUWFL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDil3IzLxIFNka4EgIEd9lQCTm5cfRnBhZ2egjfDdWslQIhALLx5KCwPQgRiiCWqDoo7FW6T2y7eoZPvLBd9lI5IY0nKv8DCCoQABoMNjM3NDIzMTgzODA1IgyNkhKkFc%2BL396E710q3AOCeJcUeQjy0X1dNpiU1lZ4ZJqIQr59r9h1arH7e0GPa7JXSfb6LGBQXiBNHv%2Fbba4cRciDGb6EMXchfWMWXtnxiEE5XQAS24K4J7S6E%2BSsDiPgAqqJTlGyQtmZ5msVK4njeTKadqq1oe4esLkGTmz9Otcq5cEnRMAtW%2BPK7Lj5XwpSjmHYXQEc82qcsbhp6tuxeisqpFY%2B3QuYUivsWKqQC3VdYGUd2iqjJmq5fearbl6hwfqHZPTZhUF7g1TwOUKz5zxS4brtI6lXgHc6ySxJuaDwXSktjpcRKdlh8DaohOiUxQxZUIZbSiGPEBLZ79p%2BQD28JGZSv7GprsOleyHTBrEMpWy5x%2FDGyGkbxdknaZoGBz3v%2ByPVJRqIQsLEAraYMEv4vA9NvmbyAMijnLXUd6Z1YTH9TZJD4lMWvrvMu3Wb8luArlgMUgWc4P6%2FbgKjY%2F5FAb37fQVQrHHbLxo%2FFYVUJTbbsBTpP3jw7Y0%2Brd7seGM2zN17L1IgpvLbqN2cIaf1Pz9MYERR2BLaAQHV9txfpNr2tZTfD04C1pa0RX%2BcQZguWlx1dKXIBM%2B7zZvGJggVKX%2F5u3QPXW8wYKE9bpssV2AKaps6PAi07cxo32g5k3EN39zRztCITDDvvrzEBjqkAWxACuWq4E9HB2YH6oc7mGl4oUUnmcmmbKwL20qGAPfcw0k3Op2ri1YN53b1b31wFuwDcY22%2Bsdvy5QFpA6HVfoZFepGNIXLLq9URDAo1M5hMbL1w3cj%2F3lzNIkLZvJjBM%2BvXj2Ew2c5oWleh6H1p5Vx63PaZiQkwPp4LHtMn74E%2Bk1CAYN2IrVn21Sin2IWOmUmJ4bHlayXQY%2BSFN6tLJ8jKt%2FA&X-Amz-Signature=6a35c538e3ae2387072f23a98f2e94a62d964fcdddf66fdde75042de44cf2c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ISBUWFL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDil3IzLxIFNka4EgIEd9lQCTm5cfRnBhZ2egjfDdWslQIhALLx5KCwPQgRiiCWqDoo7FW6T2y7eoZPvLBd9lI5IY0nKv8DCCoQABoMNjM3NDIzMTgzODA1IgyNkhKkFc%2BL396E710q3AOCeJcUeQjy0X1dNpiU1lZ4ZJqIQr59r9h1arH7e0GPa7JXSfb6LGBQXiBNHv%2Fbba4cRciDGb6EMXchfWMWXtnxiEE5XQAS24K4J7S6E%2BSsDiPgAqqJTlGyQtmZ5msVK4njeTKadqq1oe4esLkGTmz9Otcq5cEnRMAtW%2BPK7Lj5XwpSjmHYXQEc82qcsbhp6tuxeisqpFY%2B3QuYUivsWKqQC3VdYGUd2iqjJmq5fearbl6hwfqHZPTZhUF7g1TwOUKz5zxS4brtI6lXgHc6ySxJuaDwXSktjpcRKdlh8DaohOiUxQxZUIZbSiGPEBLZ79p%2BQD28JGZSv7GprsOleyHTBrEMpWy5x%2FDGyGkbxdknaZoGBz3v%2ByPVJRqIQsLEAraYMEv4vA9NvmbyAMijnLXUd6Z1YTH9TZJD4lMWvrvMu3Wb8luArlgMUgWc4P6%2FbgKjY%2F5FAb37fQVQrHHbLxo%2FFYVUJTbbsBTpP3jw7Y0%2Brd7seGM2zN17L1IgpvLbqN2cIaf1Pz9MYERR2BLaAQHV9txfpNr2tZTfD04C1pa0RX%2BcQZguWlx1dKXIBM%2B7zZvGJggVKX%2F5u3QPXW8wYKE9bpssV2AKaps6PAi07cxo32g5k3EN39zRztCITDDvvrzEBjqkAWxACuWq4E9HB2YH6oc7mGl4oUUnmcmmbKwL20qGAPfcw0k3Op2ri1YN53b1b31wFuwDcY22%2Bsdvy5QFpA6HVfoZFepGNIXLLq9URDAo1M5hMbL1w3cj%2F3lzNIkLZvJjBM%2BvXj2Ew2c5oWleh6H1p5Vx63PaZiQkwPp4LHtMn74E%2Bk1CAYN2IrVn21Sin2IWOmUmJ4bHlayXQY%2BSFN6tLJ8jKt%2FA&X-Amz-Signature=71cff3976e63d35b8507dbf5f9762c46a63fbff450ca2bcaec3891940765c73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ISBUWFL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDil3IzLxIFNka4EgIEd9lQCTm5cfRnBhZ2egjfDdWslQIhALLx5KCwPQgRiiCWqDoo7FW6T2y7eoZPvLBd9lI5IY0nKv8DCCoQABoMNjM3NDIzMTgzODA1IgyNkhKkFc%2BL396E710q3AOCeJcUeQjy0X1dNpiU1lZ4ZJqIQr59r9h1arH7e0GPa7JXSfb6LGBQXiBNHv%2Fbba4cRciDGb6EMXchfWMWXtnxiEE5XQAS24K4J7S6E%2BSsDiPgAqqJTlGyQtmZ5msVK4njeTKadqq1oe4esLkGTmz9Otcq5cEnRMAtW%2BPK7Lj5XwpSjmHYXQEc82qcsbhp6tuxeisqpFY%2B3QuYUivsWKqQC3VdYGUd2iqjJmq5fearbl6hwfqHZPTZhUF7g1TwOUKz5zxS4brtI6lXgHc6ySxJuaDwXSktjpcRKdlh8DaohOiUxQxZUIZbSiGPEBLZ79p%2BQD28JGZSv7GprsOleyHTBrEMpWy5x%2FDGyGkbxdknaZoGBz3v%2ByPVJRqIQsLEAraYMEv4vA9NvmbyAMijnLXUd6Z1YTH9TZJD4lMWvrvMu3Wb8luArlgMUgWc4P6%2FbgKjY%2F5FAb37fQVQrHHbLxo%2FFYVUJTbbsBTpP3jw7Y0%2Brd7seGM2zN17L1IgpvLbqN2cIaf1Pz9MYERR2BLaAQHV9txfpNr2tZTfD04C1pa0RX%2BcQZguWlx1dKXIBM%2B7zZvGJggVKX%2F5u3QPXW8wYKE9bpssV2AKaps6PAi07cxo32g5k3EN39zRztCITDDvvrzEBjqkAWxACuWq4E9HB2YH6oc7mGl4oUUnmcmmbKwL20qGAPfcw0k3Op2ri1YN53b1b31wFuwDcY22%2Bsdvy5QFpA6HVfoZFepGNIXLLq9URDAo1M5hMbL1w3cj%2F3lzNIkLZvJjBM%2BvXj2Ew2c5oWleh6H1p5Vx63PaZiQkwPp4LHtMn74E%2Bk1CAYN2IrVn21Sin2IWOmUmJ4bHlayXQY%2BSFN6tLJ8jKt%2FA&X-Amz-Signature=08bc779ff4e6fc59ec6731312a0046daa3da734bc11e4241958caff54555ae29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMDMFMD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnP9a14ck7hv2LMXKjs1UkM1%2FRD2%2F6S4w%2BgerbC7Vq9AiAjJAn2oMmML6aR6Ysl4TkkZ4dH%2BO4Jo5qQdGmnlTKqfCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMCBz%2BzyVcYxiCnBw8KtwDz7rYvdoJkJFWZiNJXgn8ans39nL0fXNH%2B9KKntUyWpFVpQu2HIchMgx13ro6vLgvixIiggb7s%2FdPJQuTmM8BF9i4LFsGD%2FrlbF%2Fi08CPgsGYYfD8w45vbJzAXW3hGxcIoPNsQKhJhB%2Fq3AB84Ul94m673A2KVZV4HSsxZzSaFuuePKbrJrwPhwRhwbOQSfzylBsQx8I4u4lp2KRcXNyVd%2FF9RVdsooK8GKKMBsVmb4HW3UPkZyu7w6pBLmAGSMz8qgw3A0kJXuF8%2B544JW%2BpVCy0CGBjJBzxeVrxeHeyzktBOvYPZb4w7qlpvYXT3uFBrhHT0hOs2WOb2zvC5wae2T7Tve9oKmlYNHqG74GEbntxhGy0ucuNt0WHY8HJDhynO8Y1gD6X94pkKK9uRJO%2FCjiQD4tExETdbDFAksMhX564LpAtqOb5C%2FMvpprr0kQyDwZnR6EGi1hnZIXSULG%2FPzZeFxb3IuR13Hg2C%2BPcv6mgCC2%2Fk5hnQp90g9h934cHDqCv0bXhZ3vdGOzusPhIAd6ROFpkocrPDVoFfiXdcRkgn5bD2dlWJb%2BxgtseDGh4eeITqjxi6%2BVlusQpnLmE8UhDp8WJ0KJuXKgWhjg4gptJRVgo%2FkW1zYNFGegww8G8xAY6pgF2R8PZsIYyV0HMN6RJu18rsaGwkellGvicVjycjRTHqnUAy%2BqFO2K54UwbikzCs06pC%2BywraEyyGC%2FZAPK%2F%2BdETzYWi0KLAOR3FEKSolardUTjdBjHL5kSeGGWkGvifrjh9NAwNqu8VYDvjRFYSqxo5F%2BaJkuQUzVx3TZFxwwmjxspIlkN37h5s0yUPzAdiahxHX6vjiIwyZaZuRKYYdjgcILGEdkR&X-Amz-Signature=de0ed71ae166041e93dbf489a0bf421acba8cacedf04d16e1a869e4f953dbc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3PYFSP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMyh5ALO2QqA5iq3%2BpZFUU0Fj7yGuxayjpy5CVUgVxnQIgY5YEExXaLiVYJGfoZ5B9NuomAgr9uwlqEkPYtMFN4DQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCscRO27oVZx49AVWCrcA6xtkME6c6YTHcPR7WFQS7QUpDTAdjdZEp9SL%2B0QvQSwAq2IbRoh6y3pBHLA2PE%2FC6%2Bj2XclEk0FTbGQKuxmMjAG61bIxjQb6K5CL4IMLx1zBqkNT7cNLD3BqhknTzFKkwVKg1OBoUiDqqzKH%2BCI4etiIpIufzs5kY2GW5SeRVZPbo4d0WhXdAbr70kM9o3JT50CToz1JwarGTUo%2Bi6%2FC%2Be87yd4DkvJ8fAi8ZHsN1XDfxeI09JG1RI2HOMKq70%2BSWR7BjMPuNS5DApz%2FxL3QPyBb1%2B2DFh1H2ND72AuH0fDVY6vJXQrmWGqmUNf5TxJkUDtfGXT155sGOou56UPfZuwfU0durCZ0Ffw5dUklUVrZ9SIzk1NH3erdnlqj9WyIdkwyxaNcbo22cmqGBGzVHkbd%2BuY1LDwtyFxiaYcLrGSUF44C0DJLzzvJLDsRUQs85YH1C6%2Bevbj64EtLFx9zEyeM4hGIf5pzOTnF2HhkCIxyh0AsgbnCSnmiew7z8Vx3hz2ZXl1H%2BBziJKO0rD2Cui2%2F2KbDBRzWdrLjg%2Fp%2FK1AIUSsZXo02F8jcI%2B2Te49pZa8QoRKegAB7d9BZqJkhk9O3HR5ZEULr6Nm7w2hFT%2BvcLEiI89ke7ZVKSGxMIfCvMQGOqUBZFxXZ7MjRY0Tw6nqktOCuFh%2FFWY8KIUAevbFa8qolntuMYOvGZMHK6xKBl33CA%2FRlG7jdgXYBLfGAlMyIutn8I0onq6zlf2cJ1vuBzrjYJ5P%2Fsi3KJuPdet1%2BtjcXyvMYk%2FO6HIGkNShRz9L1oBct0Vitl%2BlG6k6NFGhMcjZQpSVuvlqBwom6jkLHnEA08Sf%2FXEqJxNCtrt2BRzG4ZIK9U9BZtlV&X-Amz-Signature=73b2a4c02cefc904456826c1d4017dfe92b5ae1fb8329329fe3a7dc65af4dcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ISBUWFL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDil3IzLxIFNka4EgIEd9lQCTm5cfRnBhZ2egjfDdWslQIhALLx5KCwPQgRiiCWqDoo7FW6T2y7eoZPvLBd9lI5IY0nKv8DCCoQABoMNjM3NDIzMTgzODA1IgyNkhKkFc%2BL396E710q3AOCeJcUeQjy0X1dNpiU1lZ4ZJqIQr59r9h1arH7e0GPa7JXSfb6LGBQXiBNHv%2Fbba4cRciDGb6EMXchfWMWXtnxiEE5XQAS24K4J7S6E%2BSsDiPgAqqJTlGyQtmZ5msVK4njeTKadqq1oe4esLkGTmz9Otcq5cEnRMAtW%2BPK7Lj5XwpSjmHYXQEc82qcsbhp6tuxeisqpFY%2B3QuYUivsWKqQC3VdYGUd2iqjJmq5fearbl6hwfqHZPTZhUF7g1TwOUKz5zxS4brtI6lXgHc6ySxJuaDwXSktjpcRKdlh8DaohOiUxQxZUIZbSiGPEBLZ79p%2BQD28JGZSv7GprsOleyHTBrEMpWy5x%2FDGyGkbxdknaZoGBz3v%2ByPVJRqIQsLEAraYMEv4vA9NvmbyAMijnLXUd6Z1YTH9TZJD4lMWvrvMu3Wb8luArlgMUgWc4P6%2FbgKjY%2F5FAb37fQVQrHHbLxo%2FFYVUJTbbsBTpP3jw7Y0%2Brd7seGM2zN17L1IgpvLbqN2cIaf1Pz9MYERR2BLaAQHV9txfpNr2tZTfD04C1pa0RX%2BcQZguWlx1dKXIBM%2B7zZvGJggVKX%2F5u3QPXW8wYKE9bpssV2AKaps6PAi07cxo32g5k3EN39zRztCITDDvvrzEBjqkAWxACuWq4E9HB2YH6oc7mGl4oUUnmcmmbKwL20qGAPfcw0k3Op2ri1YN53b1b31wFuwDcY22%2Bsdvy5QFpA6HVfoZFepGNIXLLq9URDAo1M5hMbL1w3cj%2F3lzNIkLZvJjBM%2BvXj2Ew2c5oWleh6H1p5Vx63PaZiQkwPp4LHtMn74E%2Bk1CAYN2IrVn21Sin2IWOmUmJ4bHlayXQY%2BSFN6tLJ8jKt%2FA&X-Amz-Signature=2fda94545bcc7ab9588fbd1b64a3c673362e2ec577f3158919ea7495a870b42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
