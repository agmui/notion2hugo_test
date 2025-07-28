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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2R7PHH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCw5d8ARa9yWNHgTEBgXO7TSGkZ1Q5Qpu1MX1hcy0QSkQIgVim0IwcCqiZcXInZ4QrJnDRiMcy4XCumLnc6icDDBbUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BjGXR2Y90niFZZASrcA%2BPmPf%2FAkwHzrVec7uTY%2FADLY%2FY4iAELeBMbPmlWMAlchd0Z47m1lf7Ie1H%2F3eTARuc49K4MmyWPfQjzk%2BVRNmmF8jQaiD6m8uCTOYLrnlaQ7gKalyKOAYOdOldfb6KxVZrA7GnBv%2FEgmUSOCRb%2F%2Fr3gXAKVBiqaoDH5%2FkPYL9P4e4%2BQRrsltfanR6BlfGBXKsS4NU3ExDEfHS3CWSAPJ7dxJJ0YmntLeE9%2BDNUpsWw6zWH%2BhA9ipmUGZgzWKzDOlaXUrDY18CsZxz4mPTeldxHGMSXH%2BrTpUJ3KFzo0Bj1gP507B46vwN%2B1kk8FKLn1EQT5neh1bha2Afs7IKmyPF21%2Fj0UsbqvecTIYAfIEJGGOZKjoz1%2FJMd2QPtUGRVSsQfxqWpQXe0wSJS8AM%2FmHD8990l4RPIhZx3K7pFfPvyTsH%2FCg8RME3Nz%2FJ9uhMRx0Z%2FsDTQVMVxovcKqaBdSJPHOzjtiUNtzCMU7oyOPXbWyn1fRxgqskwejKxDFVB806TQnkHM%2BNJlKN7IdmfQ%2FS%2BGnAggn29K0Hz2OXhSM3uhlfVXHoSSXuk2HmzwapZVh0u3r3aRSt2z7fezx1oCBD%2FjMjr2X8GNjyH2zk5UYfOWp%2BYtPIuBKE4Gl54BtMKCKn8QGOqUBsfecTNnhZAYQPqM5kVyQxUhsdXQQRw8euylnx1p7yu6UDwGrAdcUvDRQb2YLFxen7rNpgkLghAhqMdWoOYhZX1XeA1%2FK9pnaSVD2T5zmaBlvMvhtQiULrlb4pQjto0R9xNhsTGE11Tilt%2FLJQSwXgxLJUCG5fY4srDzJq%2FFjN1ojEeuCebBgudAQ6Q6szZ4L6wtgbyxBW2viIctdHCVgCO1TsT2s&X-Amz-Signature=48ca8b0478774b61eded0a68c3b0c6392446268f88736381c08677b98dd7435c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2R7PHH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCw5d8ARa9yWNHgTEBgXO7TSGkZ1Q5Qpu1MX1hcy0QSkQIgVim0IwcCqiZcXInZ4QrJnDRiMcy4XCumLnc6icDDBbUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BjGXR2Y90niFZZASrcA%2BPmPf%2FAkwHzrVec7uTY%2FADLY%2FY4iAELeBMbPmlWMAlchd0Z47m1lf7Ie1H%2F3eTARuc49K4MmyWPfQjzk%2BVRNmmF8jQaiD6m8uCTOYLrnlaQ7gKalyKOAYOdOldfb6KxVZrA7GnBv%2FEgmUSOCRb%2F%2Fr3gXAKVBiqaoDH5%2FkPYL9P4e4%2BQRrsltfanR6BlfGBXKsS4NU3ExDEfHS3CWSAPJ7dxJJ0YmntLeE9%2BDNUpsWw6zWH%2BhA9ipmUGZgzWKzDOlaXUrDY18CsZxz4mPTeldxHGMSXH%2BrTpUJ3KFzo0Bj1gP507B46vwN%2B1kk8FKLn1EQT5neh1bha2Afs7IKmyPF21%2Fj0UsbqvecTIYAfIEJGGOZKjoz1%2FJMd2QPtUGRVSsQfxqWpQXe0wSJS8AM%2FmHD8990l4RPIhZx3K7pFfPvyTsH%2FCg8RME3Nz%2FJ9uhMRx0Z%2FsDTQVMVxovcKqaBdSJPHOzjtiUNtzCMU7oyOPXbWyn1fRxgqskwejKxDFVB806TQnkHM%2BNJlKN7IdmfQ%2FS%2BGnAggn29K0Hz2OXhSM3uhlfVXHoSSXuk2HmzwapZVh0u3r3aRSt2z7fezx1oCBD%2FjMjr2X8GNjyH2zk5UYfOWp%2BYtPIuBKE4Gl54BtMKCKn8QGOqUBsfecTNnhZAYQPqM5kVyQxUhsdXQQRw8euylnx1p7yu6UDwGrAdcUvDRQb2YLFxen7rNpgkLghAhqMdWoOYhZX1XeA1%2FK9pnaSVD2T5zmaBlvMvhtQiULrlb4pQjto0R9xNhsTGE11Tilt%2FLJQSwXgxLJUCG5fY4srDzJq%2FFjN1ojEeuCebBgudAQ6Q6szZ4L6wtgbyxBW2viIctdHCVgCO1TsT2s&X-Amz-Signature=a3edc9cfec822e7b6e385588f652e27e73dbf9bd530d0c4738395d380dc1a38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2R7PHH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCw5d8ARa9yWNHgTEBgXO7TSGkZ1Q5Qpu1MX1hcy0QSkQIgVim0IwcCqiZcXInZ4QrJnDRiMcy4XCumLnc6icDDBbUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BjGXR2Y90niFZZASrcA%2BPmPf%2FAkwHzrVec7uTY%2FADLY%2FY4iAELeBMbPmlWMAlchd0Z47m1lf7Ie1H%2F3eTARuc49K4MmyWPfQjzk%2BVRNmmF8jQaiD6m8uCTOYLrnlaQ7gKalyKOAYOdOldfb6KxVZrA7GnBv%2FEgmUSOCRb%2F%2Fr3gXAKVBiqaoDH5%2FkPYL9P4e4%2BQRrsltfanR6BlfGBXKsS4NU3ExDEfHS3CWSAPJ7dxJJ0YmntLeE9%2BDNUpsWw6zWH%2BhA9ipmUGZgzWKzDOlaXUrDY18CsZxz4mPTeldxHGMSXH%2BrTpUJ3KFzo0Bj1gP507B46vwN%2B1kk8FKLn1EQT5neh1bha2Afs7IKmyPF21%2Fj0UsbqvecTIYAfIEJGGOZKjoz1%2FJMd2QPtUGRVSsQfxqWpQXe0wSJS8AM%2FmHD8990l4RPIhZx3K7pFfPvyTsH%2FCg8RME3Nz%2FJ9uhMRx0Z%2FsDTQVMVxovcKqaBdSJPHOzjtiUNtzCMU7oyOPXbWyn1fRxgqskwejKxDFVB806TQnkHM%2BNJlKN7IdmfQ%2FS%2BGnAggn29K0Hz2OXhSM3uhlfVXHoSSXuk2HmzwapZVh0u3r3aRSt2z7fezx1oCBD%2FjMjr2X8GNjyH2zk5UYfOWp%2BYtPIuBKE4Gl54BtMKCKn8QGOqUBsfecTNnhZAYQPqM5kVyQxUhsdXQQRw8euylnx1p7yu6UDwGrAdcUvDRQb2YLFxen7rNpgkLghAhqMdWoOYhZX1XeA1%2FK9pnaSVD2T5zmaBlvMvhtQiULrlb4pQjto0R9xNhsTGE11Tilt%2FLJQSwXgxLJUCG5fY4srDzJq%2FFjN1ojEeuCebBgudAQ6Q6szZ4L6wtgbyxBW2viIctdHCVgCO1TsT2s&X-Amz-Signature=c11ea5628ac96097ba69fcbb3e36c20b1bfe01047bb53efc04e2321df38a8fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7DXDYB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCyWEG7n%2FizFHEzq%2BqUjulz425B%2BVXNB6As4fX9nV%2BFTQIgLmTBv%2FKo1Jz2CtihhpmebPeJFKCSsKgB%2Bllusy43AxkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWvj%2BxmGE86GiFaLSrcAw2wEQPKKy1Bpwr%2FrSiY7fdPTYKCBpyY3aJpgH3zjy9csJplxgck9amEdCsvHMCdCheDjPPa2%2B%2FoqBhio996Iu%2BlY2NvEo8vZPgmGbwPL8sRH%2BMWx%2BitYV2jys0%2BxTrMO8KalzmSa84F8vtNO5kbsHF2MYSuzK8GQ8ByM6PeTX%2FIsrQpWygAWvp6DlfBiQKZRUGy1%2BRutRMEePGgZvsTe4AJDO6wgTXXlCCkHL9nDIbp6kGVhtUlS2plWA0aLt3JfNFjf0WhG98y8%2F6yQ4GAoX4bweyVhtMBib0cOPns50aFAq5AWQYcGHy8WP4hpqGQDiG9tqRdQaKynHAzBfIIh4oZeA4z3WMsKaZnX0AoJdGW6mkhjr3ABh702HRucEHrQRxcSK%2FX5i7hIJmqLbNG5nGf0JAQHq4xqpmBVRzNOpA7IJkesUCZLhTWtYvJQ3Ze%2B%2B3hWh5FEFDvJzmIOX0vGzXDOUaMqcma2AbUKesN6pyeHbGiHgeNau4RgvNv1YHnHG%2B9G8fBhqBdJVDNXJy92H%2FHtgNIV%2FAw6csBpo%2FHepVaxGYAZMy4Yfoq6kVAeYBmWm661ewR2ldef2rYcvGEwonB7RB1XJv6FSXdQgIRN0YMD%2B4l%2BaT66ruEVM92MJOLn8QGOqUBQXfOTsKBQqpQONxDZGMDVCUkyo7HnnG%2B2mz%2F4WlzQcZtUE4HLI%2BQQipEyhPChSpcOQbLVpmPVQjXPTjCpHQXJSg1Px7Zy0R%2F%2F%2FV%2F%2B7aWMA0OQ95ZJMV9CIC8Z9JqZs9nOVxcSLAdbHp75NMFfatIs64PRVbse%2BkGzEjgYO7nGhIWuQzxUbVIVelThDEww%2BqwZMwF1ua62h2vpMCJlJGiyDyvcRDo&X-Amz-Signature=ae3423e8c27c74beec9e492cd061d58825f6a9fa17ca92e803fd6a29e3caefd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNVXFDY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCpMrXc%2Fj00rdSuyOMjvRFSq0EC96yt4StpPwj0MWV%2BIAIhAPtiUMmXDr3SCK2wtXSJUmSnqNqg%2BFX5YOEPF%2BrKpMiCKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7s%2BI3kKrfNw96oikq3AN%2BchWNV2Yi0f9wqV7qZCzxH%2BLjpB8HihqTCua5N1%2B5wEoP09pV42%2FqDhBYFSZXogV9kE6TRW%2FZVxZoGHKcCLN8uYZJXZYYl3glOMfX1QGhptBWTu9ujE1dqfTuZjHekeJub0jVzcuHFfwENITVSiuvP%2FwH2tQD34E1lb9MwFBO8CD4GIXW5LBByJhirRRuBARv69B5%2Fi9Bh8wUjhlXBNKlKVZ5P0xL6Zlkaw6PlmGDyOMyP2BrLgvugRJ%2FfDw%2FrQ%2FEwN0imuZFkKjPsJMOLDIaNBzlDZYM1Xyes7RntCXhEdUNW7EtKj68WJ%2FqTEuEF5mLunQgv5UAlKCW%2B%2FE1YyJVtn7ftpxoz7C4y8aqVcxb8I1EPD%2BSjGShAOlESjlREv5GUjEsYBR0IBqNURXCjP3Jauw%2FBlYwmZK%2Fp31IiavWfVfyUwcPL96dRXpb%2Bn9ITPZM06gERfZc8kQ3PfB3xj7w6mywuYXMQAZZM%2F5jhPAwg%2BxAj%2BggVC4Ds%2BAT15QEeFiqnwNqKBwzuDEiYv3zliOMdu0s55AEPASv1XnrWxaHwRucEApD6Yc5MLRge2bEJid7O%2BgkRe97S4jFfzsqRf7DmT6ywS968c3xn42WGyMn6Zbh8n%2F93uAlsEZxyjDOip%2FEBjqkAWHpa8hgM6WXVvoMV4xWH%2Fud2M4Z%2FCN0Y8VVVdl9ZLwWHbW6eqB9KImk3eQ4q%2BgiAdVL7XKjxbw1E3g1JmpIsdtDwgPqZwSQwkKa6CA4Gm4vikzRi%2BVUu0ZlKObWS5r%2BsZ9jkEzGbUnAyIz%2FUUplQ7LNfHjypJl3AXw3xdpFV3daPRgjFhskAGsAXL%2FFTPMk8CiTzRkc3%2BeVc5mnhz6ighHV267m&X-Amz-Signature=d4bc5b25d21462318ca555aa479de6050845d4bcacd1283d879fa31c3d2dd951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2R7PHH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCw5d8ARa9yWNHgTEBgXO7TSGkZ1Q5Qpu1MX1hcy0QSkQIgVim0IwcCqiZcXInZ4QrJnDRiMcy4XCumLnc6icDDBbUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BjGXR2Y90niFZZASrcA%2BPmPf%2FAkwHzrVec7uTY%2FADLY%2FY4iAELeBMbPmlWMAlchd0Z47m1lf7Ie1H%2F3eTARuc49K4MmyWPfQjzk%2BVRNmmF8jQaiD6m8uCTOYLrnlaQ7gKalyKOAYOdOldfb6KxVZrA7GnBv%2FEgmUSOCRb%2F%2Fr3gXAKVBiqaoDH5%2FkPYL9P4e4%2BQRrsltfanR6BlfGBXKsS4NU3ExDEfHS3CWSAPJ7dxJJ0YmntLeE9%2BDNUpsWw6zWH%2BhA9ipmUGZgzWKzDOlaXUrDY18CsZxz4mPTeldxHGMSXH%2BrTpUJ3KFzo0Bj1gP507B46vwN%2B1kk8FKLn1EQT5neh1bha2Afs7IKmyPF21%2Fj0UsbqvecTIYAfIEJGGOZKjoz1%2FJMd2QPtUGRVSsQfxqWpQXe0wSJS8AM%2FmHD8990l4RPIhZx3K7pFfPvyTsH%2FCg8RME3Nz%2FJ9uhMRx0Z%2FsDTQVMVxovcKqaBdSJPHOzjtiUNtzCMU7oyOPXbWyn1fRxgqskwejKxDFVB806TQnkHM%2BNJlKN7IdmfQ%2FS%2BGnAggn29K0Hz2OXhSM3uhlfVXHoSSXuk2HmzwapZVh0u3r3aRSt2z7fezx1oCBD%2FjMjr2X8GNjyH2zk5UYfOWp%2BYtPIuBKE4Gl54BtMKCKn8QGOqUBsfecTNnhZAYQPqM5kVyQxUhsdXQQRw8euylnx1p7yu6UDwGrAdcUvDRQb2YLFxen7rNpgkLghAhqMdWoOYhZX1XeA1%2FK9pnaSVD2T5zmaBlvMvhtQiULrlb4pQjto0R9xNhsTGE11Tilt%2FLJQSwXgxLJUCG5fY4srDzJq%2FFjN1ojEeuCebBgudAQ6Q6szZ4L6wtgbyxBW2viIctdHCVgCO1TsT2s&X-Amz-Signature=50ffad7c1fb88a4f049477906331daf0bd1a79daaaeb1da9d65be1d8b2e76834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
