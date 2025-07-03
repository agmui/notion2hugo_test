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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPOF742N%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG%2FyPYEjBh3LHMz5wQuXaRN2kJzWeFoWQvaf8h2U%2BtWvAiAaLUUoxfXLbZZC55SCZYJ8xBbcAEfMwtVGTqZ74zH%2B5ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMnCl3niIYa2fOc0EBKtwDcz5IasVTf9qDi295QPi9rMYeT72BFCqjkGg498zZm8hCxuvCmHBA607qbBnZfsLYgoBeU6RciU7UUZyCF81IZUSBTur6yL3Lk7L%2B%2Br68tk%2FshY7HUe89A92ZtZVISNmH281ZtxziceFMKxnZ6cfeQ4%2FWCphVoSicqk%2F%2FSgMSYxvjKM05rZUVBSsEnvV0ceMaiDEtc0v%2Bo7MA6OR3qslQ8Hof89TO923o0QiZZDj7icrbRZmVLixh8FaybD1QuUDVaTdoWYa8Np131ZGOAcexSWeKMdRadlT3288Ld1gQtfwuj4Qxe9e27GZ0%2FBId4DRADgLL5tGymKjU%2BDjhU6IduUC2sDAO%2FEtP8V7qC%2FTPF%2B3S8ChQUDM%2FjYKIo%2Fa5GIAFziqj0lF0RZwJCzzJggJx78IRZ1Mmq4pjnoOh7iUZCFAIZpd1Ipx%2BVYasMd6aCoXg9nMMc3KeXLko5oWh62nOExryO5LgwSDj2qvkvOIBe1m%2BQZ7ZPASgiW11LO9FGaskLFiz9v2j0O8DuUupgeiaoZO%2FVHvu0mqsweWPH1y1HkMNHwdO%2Ba8bXW3NKS3hhIuPt43UBP7zDe0LhmGF2BNvJOc1PBiRM2OYddVakFd%2BTZraMRTl8XD3eNDJ6sQww%2BWawwY6pgFQYxk9yzKhf5dL24y%2BpozM2HXcrh5RAD%2BngP20CDacgBLY1vKFogWeFh2zdn9vUxIPelwIDSKPpmqCEwEKjzeGYehikXFsSWVJE%2F4QdNgpTqnzo0AT533NBh0qQcNEkFVUbzQgxewSTsZ4BFY%2BcewvhdsLACsIRGhaMo3jsDurvk2%2BVZ%2FclZt0sXxriqAKWW4hhRj0d1Kobf3yUK69qOop%2BKYqli2H&X-Amz-Signature=8b7a606ee79c89a03f68fa07726734203a1a5d1092b9c74f39829b8696d36838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPOF742N%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG%2FyPYEjBh3LHMz5wQuXaRN2kJzWeFoWQvaf8h2U%2BtWvAiAaLUUoxfXLbZZC55SCZYJ8xBbcAEfMwtVGTqZ74zH%2B5ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMnCl3niIYa2fOc0EBKtwDcz5IasVTf9qDi295QPi9rMYeT72BFCqjkGg498zZm8hCxuvCmHBA607qbBnZfsLYgoBeU6RciU7UUZyCF81IZUSBTur6yL3Lk7L%2B%2Br68tk%2FshY7HUe89A92ZtZVISNmH281ZtxziceFMKxnZ6cfeQ4%2FWCphVoSicqk%2F%2FSgMSYxvjKM05rZUVBSsEnvV0ceMaiDEtc0v%2Bo7MA6OR3qslQ8Hof89TO923o0QiZZDj7icrbRZmVLixh8FaybD1QuUDVaTdoWYa8Np131ZGOAcexSWeKMdRadlT3288Ld1gQtfwuj4Qxe9e27GZ0%2FBId4DRADgLL5tGymKjU%2BDjhU6IduUC2sDAO%2FEtP8V7qC%2FTPF%2B3S8ChQUDM%2FjYKIo%2Fa5GIAFziqj0lF0RZwJCzzJggJx78IRZ1Mmq4pjnoOh7iUZCFAIZpd1Ipx%2BVYasMd6aCoXg9nMMc3KeXLko5oWh62nOExryO5LgwSDj2qvkvOIBe1m%2BQZ7ZPASgiW11LO9FGaskLFiz9v2j0O8DuUupgeiaoZO%2FVHvu0mqsweWPH1y1HkMNHwdO%2Ba8bXW3NKS3hhIuPt43UBP7zDe0LhmGF2BNvJOc1PBiRM2OYddVakFd%2BTZraMRTl8XD3eNDJ6sQww%2BWawwY6pgFQYxk9yzKhf5dL24y%2BpozM2HXcrh5RAD%2BngP20CDacgBLY1vKFogWeFh2zdn9vUxIPelwIDSKPpmqCEwEKjzeGYehikXFsSWVJE%2F4QdNgpTqnzo0AT533NBh0qQcNEkFVUbzQgxewSTsZ4BFY%2BcewvhdsLACsIRGhaMo3jsDurvk2%2BVZ%2FclZt0sXxriqAKWW4hhRj0d1Kobf3yUK69qOop%2BKYqli2H&X-Amz-Signature=1db4c0624a3fe38ec254fa3f9fc8502a215074714f9da08887436f58095ae367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPOF742N%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG%2FyPYEjBh3LHMz5wQuXaRN2kJzWeFoWQvaf8h2U%2BtWvAiAaLUUoxfXLbZZC55SCZYJ8xBbcAEfMwtVGTqZ74zH%2B5ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMnCl3niIYa2fOc0EBKtwDcz5IasVTf9qDi295QPi9rMYeT72BFCqjkGg498zZm8hCxuvCmHBA607qbBnZfsLYgoBeU6RciU7UUZyCF81IZUSBTur6yL3Lk7L%2B%2Br68tk%2FshY7HUe89A92ZtZVISNmH281ZtxziceFMKxnZ6cfeQ4%2FWCphVoSicqk%2F%2FSgMSYxvjKM05rZUVBSsEnvV0ceMaiDEtc0v%2Bo7MA6OR3qslQ8Hof89TO923o0QiZZDj7icrbRZmVLixh8FaybD1QuUDVaTdoWYa8Np131ZGOAcexSWeKMdRadlT3288Ld1gQtfwuj4Qxe9e27GZ0%2FBId4DRADgLL5tGymKjU%2BDjhU6IduUC2sDAO%2FEtP8V7qC%2FTPF%2B3S8ChQUDM%2FjYKIo%2Fa5GIAFziqj0lF0RZwJCzzJggJx78IRZ1Mmq4pjnoOh7iUZCFAIZpd1Ipx%2BVYasMd6aCoXg9nMMc3KeXLko5oWh62nOExryO5LgwSDj2qvkvOIBe1m%2BQZ7ZPASgiW11LO9FGaskLFiz9v2j0O8DuUupgeiaoZO%2FVHvu0mqsweWPH1y1HkMNHwdO%2Ba8bXW3NKS3hhIuPt43UBP7zDe0LhmGF2BNvJOc1PBiRM2OYddVakFd%2BTZraMRTl8XD3eNDJ6sQww%2BWawwY6pgFQYxk9yzKhf5dL24y%2BpozM2HXcrh5RAD%2BngP20CDacgBLY1vKFogWeFh2zdn9vUxIPelwIDSKPpmqCEwEKjzeGYehikXFsSWVJE%2F4QdNgpTqnzo0AT533NBh0qQcNEkFVUbzQgxewSTsZ4BFY%2BcewvhdsLACsIRGhaMo3jsDurvk2%2BVZ%2FclZt0sXxriqAKWW4hhRj0d1Kobf3yUK69qOop%2BKYqli2H&X-Amz-Signature=a92598035528dbbfe9047b599149fc4a0808e63a3472fc45720fe3d1132f177c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HPLGEAG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCoZdezFs8g0ElryNFBFDFze1Lgv%2BmM4R3JXAN%2Fjti2HwIhANWn1EHXH%2F2EIxBibkGRYKsLl0r%2B9ZG5wUL4WLCPHvzdKv8DCBoQABoMNjM3NDIzMTgzODA1IgxUcXQ0rlaWWqesQlIq3ANm4CrGEl72wQCW2%2B4XraEFMV6Zhu%2Bvna1fZDAHpAJZcJCc64a%2FARSEa8VcDa7%2FTta4ELYbc4q1%2FALCeK4RJ%2FN4nvc6G2aTS5UlMPAznoqYKFHzKewgsSm38KJumVQcbUwgTKfIZ%2Bnlgfnv2kz%2F%2BiryubCUCv%2FIu3hURFBFWJnxkzJBferUivgla9QTyBP%2BZtujA0bytbO6VkyFWlJRxLPEF2QPu2OooD6mdtMzbHjC%2BC5Q%2FVIhgQS2pZyzVzuz6unNkHtdiIIzEi%2F%2F%2BzZtQNJ0XUXb6y%2FlXhZa95OHdL2iTvOfINCEJOFoiguVwlMeJ0bA3axihQJ%2BqOadtsHmFPS4N4QGky1K0dd0ipDPTwMTiA0ruYVgxJafjncSzXeh4JB41whjDdweAO%2BPcOaOJ074reBbkNBRynPVZsYF0pKn6APobR2P%2B1toD%2BJFith%2F%2FQGmQz04JPVV7m2qUOmBCcsr%2Blm%2B2XRS6vI%2Fi53mSftqJKpmYKGa%2BIrrmZVF0Si5Eu7VfomIByxHfYGBHFD9r%2B4%2FDYSuEVfxIM4Znn46ep3fRvyp48QpDPnOOO8wgM5CsezlZQypbAj6mQXysolg4L2%2FTizQ5MenfZ7BbbbkHMYbUuSqHspRrfG%2Bq76nPzCO5prDBjqkAdmKmPf8eN2OEBjyDVwKU50ELLlDzWLqKaEW8%2FzlGXB1nOCDzlKgJ9nLlTxT18%2F8B5%2Bd4ERe08ACbvOJlWN2PKm2idFY2Y20rRa9k2WE7ccyj8pVrDLUsQ54E9F%2FGtqHmlSerKX5Rh6Ac1pwPZyX%2FrxW%2F8MMXTEsSNQEFb5Nfb79bS3I3HC6tXykBeLJ0bRtleBviNPL3ri20%2BPldjgXDLplSkGG&X-Amz-Signature=f2440fa2f1468313d7e19a4975a3f33a7779d23df329a60d1f811851123bc431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4WXMLL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD9qGBF4305rfqxN0quSbp2fsi9M8A9k1By7XqfRuTY0gIgFesBPqaIxum7%2Fdix%2BOzJMzwNum7pE0QhtgcZk6S3quYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIjFTitLfVHAxOixWSrcA0VHiOwqbuVSbKrBM%2FSozlRjgLqFgFtEjtbULkIPnyLH3hlJcfGiOLovQQvgE8GtpiLOsPrQQKJ0yK9Ca1jzb6MFY7ANbD02ZXVHSFghER7wa9QTO0kIL%2B9qvXMxwjhCNGmgktRWl%2Brfi2D8s%2FZLfcnGYXtDchheSo7Aug0HJ4aZTzArly926O47eeVGZFoU4uU8Tolitc%2BSxEG5QCmVGQHzrBwWUhSwxL9UN0mAVcr6RFxWA2%2F5AXZjcBnD3Sa%2F6Fwi%2FNGiQPPYNGEA0r3A2cNXtyRd9Xh8m7tLp4LzqC7nG4ow0tz69KtB32WJ8v9fAKbn4acP6tUyNxsLeBsl7vr3oR2Ubqq%2FOrqDIulywUjT9CehQjlvtW%2BceMHaOsgf%2BIpGQiIMGRIOpxsasFIW7yS7BJ0jpcCxaO9d%2FdL38ogBB7vxpcIN7263Jw3GOoYX9%2F3Vlm50D7Vcc47ewUgoEYdNpXLnqfRH8qivdWbp0QGTmAzrAKd9g4p%2BlyxKAQWQdPWanXUQ9WHmYNsCSUG9O3PFlLqxmVwEMAJgkjXzj2%2Bboii5%2FSxbXizGZGJ1kQ6r5e8Gve0fzZetm9jPmFh1tjGyDs4%2F2ORoIcYDwUmfWJhx0rP4sgy0LKGtWSZOMKnmmsMGOqUBGW36IbQS9X6E2QEdfeV3Fscw4Jqv5Q%2BnJk8K5dCup3v83BNKxFDJ8v7Se9q8AD%2BZtm4DcNALdyrMp0rvzOMxAhLwr2kxcMZs6LAqAVAgkz1PG%2FI8nNvisVVnNnx4Q0VMnGisWNngNxeG%2F8bnHi%2BtURLI9qU8%2BX1z%2B5kIwoS99F7oqHUGTrxO%2F6OPMYOYb55aXi%2BXk1sWwoDZhUNnkXpD1iLNKGKg&X-Amz-Signature=9f7801d4bd7477d8fb3d144e25922c58f3fce24eda425747f36d00e2c22d83da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPOF742N%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG%2FyPYEjBh3LHMz5wQuXaRN2kJzWeFoWQvaf8h2U%2BtWvAiAaLUUoxfXLbZZC55SCZYJ8xBbcAEfMwtVGTqZ74zH%2B5ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMnCl3niIYa2fOc0EBKtwDcz5IasVTf9qDi295QPi9rMYeT72BFCqjkGg498zZm8hCxuvCmHBA607qbBnZfsLYgoBeU6RciU7UUZyCF81IZUSBTur6yL3Lk7L%2B%2Br68tk%2FshY7HUe89A92ZtZVISNmH281ZtxziceFMKxnZ6cfeQ4%2FWCphVoSicqk%2F%2FSgMSYxvjKM05rZUVBSsEnvV0ceMaiDEtc0v%2Bo7MA6OR3qslQ8Hof89TO923o0QiZZDj7icrbRZmVLixh8FaybD1QuUDVaTdoWYa8Np131ZGOAcexSWeKMdRadlT3288Ld1gQtfwuj4Qxe9e27GZ0%2FBId4DRADgLL5tGymKjU%2BDjhU6IduUC2sDAO%2FEtP8V7qC%2FTPF%2B3S8ChQUDM%2FjYKIo%2Fa5GIAFziqj0lF0RZwJCzzJggJx78IRZ1Mmq4pjnoOh7iUZCFAIZpd1Ipx%2BVYasMd6aCoXg9nMMc3KeXLko5oWh62nOExryO5LgwSDj2qvkvOIBe1m%2BQZ7ZPASgiW11LO9FGaskLFiz9v2j0O8DuUupgeiaoZO%2FVHvu0mqsweWPH1y1HkMNHwdO%2Ba8bXW3NKS3hhIuPt43UBP7zDe0LhmGF2BNvJOc1PBiRM2OYddVakFd%2BTZraMRTl8XD3eNDJ6sQww%2BWawwY6pgFQYxk9yzKhf5dL24y%2BpozM2HXcrh5RAD%2BngP20CDacgBLY1vKFogWeFh2zdn9vUxIPelwIDSKPpmqCEwEKjzeGYehikXFsSWVJE%2F4QdNgpTqnzo0AT533NBh0qQcNEkFVUbzQgxewSTsZ4BFY%2BcewvhdsLACsIRGhaMo3jsDurvk2%2BVZ%2FclZt0sXxriqAKWW4hhRj0d1Kobf3yUK69qOop%2BKYqli2H&X-Amz-Signature=f653e3e57d7ce6e6365c245a0cd56eee1d255706ccfbe965b2e81df5d774f982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
