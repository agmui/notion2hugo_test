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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBLDSIXS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDoJXlBzCEs8V%2FpINs%2Bma%2F4gFyum8mlTPiXurA%2F6nAr%2BQIhALxStvNUo0oiJcOu47WA3colk%2BH6N04yvvz3yjQe3F1NKv8DCDgQABoMNjM3NDIzMTgzODA1IgxmLah3c4xs8%2BNVfv4q3AMuxxDsECflOwPBrNptbTyzzN5hG6Ju9okz0kGZxTcYg4C8jCDejQb8dXkRSfZrPHJuTdyNjzCD8P8YMmtX5A%2Fz82q7G0JIBMVKYeAThPfSKT6grwpcDdb2cmjP%2FkmBGY60oc6tUA3QyBWjhcUq%2BE2U1yhOI9UiP9iE1QM%2BGQlt%2F5CyVqsB0IlQ0KjQOaZUbWuq1cUT9Yim2vsEn%2FV0WE4aT5zJAJwkJfvky97fbGz1nezfHdH0L9ByqMd0zOseV1fltfiaoKLK%2BGFfeWLdzevIJqLKI9k8WiE%2Bokl3oTMQJCWSUVxU9nKurt%2F%2BI3Oh9sYtA8BKAe%2Bea1RzVbbMCI4cLwAI9Fiq9iA2FS1yameAbPQqgh3w1oxUmZLo9TkPcw8slT21RFv%2F6nHnRSL%2BYubKl2dracouv5VVaFzDDj1dl0rRiCWWy2ghT4%2F6tl37%2FZhByHxx1L0kxY9tpAO017EpMnzUhEJx4mt66C5OFMqXZk0rYn%2BkihLRqo2qFdHOPF%2BDH3AGKspbcWTcfdiMzHUpQgPIV7jaRPNhsHEqDxFm1sYd1BnKfq0mmBNFP1zfFxE9NUVxt3v7hzA5jrJzAKl1gMmz5YLOoNe3wkr6ARBkmhrNKW5lGneB%2Bz6dbTD34pnBBjqkAbZ097KtMfzFhUMLLddgxvx%2Bk1XygKG%2Fm8YCx9n%2B6QoKNPZfyQPVzJluV6yGHSGJXP77qoVmocAk8gffLtVs%2F6s%2BkL31yPIO4fPsr%2BMYkJYEW2byCFUtYdpdg%2BLKzzKQgrnjAQnK7Y%2Beafw9%2FOSCuQmC6xdcvBA1DtxEjWFTcLUxLngRpsUNQrgTW7Rej8fZQgNxpJQ3sx459SHvaFh8nDLnYQrB&X-Amz-Signature=a9deebbf0ed4f79ae10731927ab36ba152e0fd62297bf3ee54f356b59acd188e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBLDSIXS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDoJXlBzCEs8V%2FpINs%2Bma%2F4gFyum8mlTPiXurA%2F6nAr%2BQIhALxStvNUo0oiJcOu47WA3colk%2BH6N04yvvz3yjQe3F1NKv8DCDgQABoMNjM3NDIzMTgzODA1IgxmLah3c4xs8%2BNVfv4q3AMuxxDsECflOwPBrNptbTyzzN5hG6Ju9okz0kGZxTcYg4C8jCDejQb8dXkRSfZrPHJuTdyNjzCD8P8YMmtX5A%2Fz82q7G0JIBMVKYeAThPfSKT6grwpcDdb2cmjP%2FkmBGY60oc6tUA3QyBWjhcUq%2BE2U1yhOI9UiP9iE1QM%2BGQlt%2F5CyVqsB0IlQ0KjQOaZUbWuq1cUT9Yim2vsEn%2FV0WE4aT5zJAJwkJfvky97fbGz1nezfHdH0L9ByqMd0zOseV1fltfiaoKLK%2BGFfeWLdzevIJqLKI9k8WiE%2Bokl3oTMQJCWSUVxU9nKurt%2F%2BI3Oh9sYtA8BKAe%2Bea1RzVbbMCI4cLwAI9Fiq9iA2FS1yameAbPQqgh3w1oxUmZLo9TkPcw8slT21RFv%2F6nHnRSL%2BYubKl2dracouv5VVaFzDDj1dl0rRiCWWy2ghT4%2F6tl37%2FZhByHxx1L0kxY9tpAO017EpMnzUhEJx4mt66C5OFMqXZk0rYn%2BkihLRqo2qFdHOPF%2BDH3AGKspbcWTcfdiMzHUpQgPIV7jaRPNhsHEqDxFm1sYd1BnKfq0mmBNFP1zfFxE9NUVxt3v7hzA5jrJzAKl1gMmz5YLOoNe3wkr6ARBkmhrNKW5lGneB%2Bz6dbTD34pnBBjqkAbZ097KtMfzFhUMLLddgxvx%2Bk1XygKG%2Fm8YCx9n%2B6QoKNPZfyQPVzJluV6yGHSGJXP77qoVmocAk8gffLtVs%2F6s%2BkL31yPIO4fPsr%2BMYkJYEW2byCFUtYdpdg%2BLKzzKQgrnjAQnK7Y%2Beafw9%2FOSCuQmC6xdcvBA1DtxEjWFTcLUxLngRpsUNQrgTW7Rej8fZQgNxpJQ3sx459SHvaFh8nDLnYQrB&X-Amz-Signature=12c9b5621f4e3ce0965eeb41c5aacef2a086fb91715a2965d10179fa73a2a200&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBLDSIXS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDoJXlBzCEs8V%2FpINs%2Bma%2F4gFyum8mlTPiXurA%2F6nAr%2BQIhALxStvNUo0oiJcOu47WA3colk%2BH6N04yvvz3yjQe3F1NKv8DCDgQABoMNjM3NDIzMTgzODA1IgxmLah3c4xs8%2BNVfv4q3AMuxxDsECflOwPBrNptbTyzzN5hG6Ju9okz0kGZxTcYg4C8jCDejQb8dXkRSfZrPHJuTdyNjzCD8P8YMmtX5A%2Fz82q7G0JIBMVKYeAThPfSKT6grwpcDdb2cmjP%2FkmBGY60oc6tUA3QyBWjhcUq%2BE2U1yhOI9UiP9iE1QM%2BGQlt%2F5CyVqsB0IlQ0KjQOaZUbWuq1cUT9Yim2vsEn%2FV0WE4aT5zJAJwkJfvky97fbGz1nezfHdH0L9ByqMd0zOseV1fltfiaoKLK%2BGFfeWLdzevIJqLKI9k8WiE%2Bokl3oTMQJCWSUVxU9nKurt%2F%2BI3Oh9sYtA8BKAe%2Bea1RzVbbMCI4cLwAI9Fiq9iA2FS1yameAbPQqgh3w1oxUmZLo9TkPcw8slT21RFv%2F6nHnRSL%2BYubKl2dracouv5VVaFzDDj1dl0rRiCWWy2ghT4%2F6tl37%2FZhByHxx1L0kxY9tpAO017EpMnzUhEJx4mt66C5OFMqXZk0rYn%2BkihLRqo2qFdHOPF%2BDH3AGKspbcWTcfdiMzHUpQgPIV7jaRPNhsHEqDxFm1sYd1BnKfq0mmBNFP1zfFxE9NUVxt3v7hzA5jrJzAKl1gMmz5YLOoNe3wkr6ARBkmhrNKW5lGneB%2Bz6dbTD34pnBBjqkAbZ097KtMfzFhUMLLddgxvx%2Bk1XygKG%2Fm8YCx9n%2B6QoKNPZfyQPVzJluV6yGHSGJXP77qoVmocAk8gffLtVs%2F6s%2BkL31yPIO4fPsr%2BMYkJYEW2byCFUtYdpdg%2BLKzzKQgrnjAQnK7Y%2Beafw9%2FOSCuQmC6xdcvBA1DtxEjWFTcLUxLngRpsUNQrgTW7Rej8fZQgNxpJQ3sx459SHvaFh8nDLnYQrB&X-Amz-Signature=8ecadfa911a676d3d42b42490a222a2cc0c296bbcca6e65964b72220bf76c1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBT5XHW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGUdsOtwqG6uNuI4mG2GoD0A78QtC%2FCzK9bchXxZCiCaAiEAvvWcmC005MYjXxZFd1LgHugUa%2FGi67fSfonZeOk1eR8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMMNHAprvij0RO3ieyrcA5h3rfeWrwn6QNq%2B2fC5aIIT23%2FrUq6B%2Bs2Gw8ZgsbG%2FmJk78YCi4%2FozRlhFfgWel17wo1eQmGKVUjTKqZzzn%2Bylj3J9UOb%2B%2BpRjTEgJ2sd9wT11xwduzkzpnTjvLpw6vNjmC5Cix3H5FvBtJD8AXGdP3pPbCWKoUFbY79p3FUjy%2BfwJTKLwJCZo8%2B4n3W1Eb4bxR8X31sHRFb4vDH9sc9ONFTuIM%2Bef%2FMDRVfr6K7Vu9SYOyQMThb37xQCITNu5fF%2FcW8V4vaZPQgx6Ggx4eIiFSnfGrcEMbSTskRFFuVFYBtKL5BWbj%2BNDSu%2BUsnWxoMo%2F5JsXMqq1kdNrb3HZ1kq80bvK4D4dPsviG0nesbWbvd6DaEngCgLPRyjpsL3FsDIaU7ar4zKZovJOJ8akqzMmoUf3akrCgLA%2FuPtIT5eSbJLqSwXvPoc3ed2zpNyKNpaPR4LHHzyhUqB76Re6pVMJd%2FD8WJFP4PAhN1uDSdb3y1WVbPDkVnrSfKIiVj3iFV%2BolLf105flWKSSN%2BgSUpBbPOK%2BB8Z0AFBQJuCvMBiDUBni1hlS3Dw81SKsb7IrFemnqAq6VNk4b5HMIZzDfjacTYBb2MQzCu6cDOwSMACRBS2s%2F1Io7CGLZ9zkMPjimcEGOqUB7Lp1wQfIQwGUCpfdp83CW7d5vhXdSYL05tD6bXaO%2B%2F2iBTA6E4VHmJ6b5c8OUVofAJFw01Sfub0Zw7bJo1wmFu79euL2Wxktgkb8zyuGrusRb0%2FeS5XSQRdyrKnZ4iO6FsKpk1%2B6keX4DGGkHSkjWiwOyWLptiCfsjtn81gqTnDin56hEdznUeZRj4NBI2QbEc3nYsPLWdtIKTGwgERdz5ZEMVFY&X-Amz-Signature=dd1b52680a8e8046ca4be2d0011f95ffc02b0f30f1fec78a8b11b9a43e32b909&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3TDZRE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDoTaKkI5FcxAMYkbj7GQhihZoRdyrN3iAmQp8sVirG%2FQIgTX2cc5eCwa6okNHnn%2BuFGr8Dtr1ihDgkI2Kl965TIJIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFI85MOlVgOmDHu4qSrcA1K%2FGDMUUIEvVa%2B8GrOKfQrp2w0zfYVnLpRgzQ4EV0qz%2FwIPNhrK4lL3R8jhgwxHqD5bryrUlI%2Bmljy0qB%2FqlOToK9BgOADsseGvTkBBx1VdGvAbfNODCFrzxMeP1K97psVDOuS2UFhJXwmX8ochBFk8OOFk%2F7Uu6hd9qAUiE07kxEWmftDEfoaIVaMSRh358i%2BmRDJxtkD1gLfG6UAoqX1uVu3V%2FqF%2F4Pu2ue0b%2Bn6eM%2BP5YJ13sjTgmJmqN7xkTroxc5%2B8%2B%2BOAGq4dn15F4cng%2FrHpRzaBaKYCYm3QnJTFRu5aIQYTIZrRobtdcdjuLGJYtppM6XQ8mFdVWMqYmIZbBdrv5eI98DQyS3zRx0pE1%2BQlMwhGfeuywkSPtjW5DD%2FegyeVyGUriwBhOxPc9BVYuE7yOuxzHttwvtFQ9j%2FM8p0bWDiDZNQPTSzX4Be7uqmsZN0IYterQhebp8YNcup7C8%2FrceNCCY1eH2AbOtKP9TQSnlC59lVbY37J4BbkoGg%2FzKVU4Iz5kYsm8DSG9D%2FVXQHMzbrXtuZ18eVb%2BIqn2bPoZSf2kHYgr2Xg%2FdVzijUUbP8h%2FN%2Fw3qGbvFKTu14x%2BXHQQmi49BSP5JAGK6DVLXCG%2FmIFjdCcwIkZMNXimcEGOqUBnCnpLVus9PyJmdEeiSosHIbZ78XOcFioeijDSeLkTWUMmZ3J8RhuBmS6DxlFmfMRMzXrccktllwRslOX%2BpobAwI%2FwlPyRwpubL0aSzc1YD2bzC2XgRnejOfzEmjTDPyj0fTFqAVkGWxSHoCX%2FQs23LsTstLHB4GJUhw8MhqmkXN8Z686kX78HSOCzyJBd23dcivbH1mKDfORkemkOJ6xAzRi8qYn&X-Amz-Signature=2d5fbda0fe0fdc9362c40621cc8479327624e40e525038925f2d8571460c9ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBLDSIXS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDoJXlBzCEs8V%2FpINs%2Bma%2F4gFyum8mlTPiXurA%2F6nAr%2BQIhALxStvNUo0oiJcOu47WA3colk%2BH6N04yvvz3yjQe3F1NKv8DCDgQABoMNjM3NDIzMTgzODA1IgxmLah3c4xs8%2BNVfv4q3AMuxxDsECflOwPBrNptbTyzzN5hG6Ju9okz0kGZxTcYg4C8jCDejQb8dXkRSfZrPHJuTdyNjzCD8P8YMmtX5A%2Fz82q7G0JIBMVKYeAThPfSKT6grwpcDdb2cmjP%2FkmBGY60oc6tUA3QyBWjhcUq%2BE2U1yhOI9UiP9iE1QM%2BGQlt%2F5CyVqsB0IlQ0KjQOaZUbWuq1cUT9Yim2vsEn%2FV0WE4aT5zJAJwkJfvky97fbGz1nezfHdH0L9ByqMd0zOseV1fltfiaoKLK%2BGFfeWLdzevIJqLKI9k8WiE%2Bokl3oTMQJCWSUVxU9nKurt%2F%2BI3Oh9sYtA8BKAe%2Bea1RzVbbMCI4cLwAI9Fiq9iA2FS1yameAbPQqgh3w1oxUmZLo9TkPcw8slT21RFv%2F6nHnRSL%2BYubKl2dracouv5VVaFzDDj1dl0rRiCWWy2ghT4%2F6tl37%2FZhByHxx1L0kxY9tpAO017EpMnzUhEJx4mt66C5OFMqXZk0rYn%2BkihLRqo2qFdHOPF%2BDH3AGKspbcWTcfdiMzHUpQgPIV7jaRPNhsHEqDxFm1sYd1BnKfq0mmBNFP1zfFxE9NUVxt3v7hzA5jrJzAKl1gMmz5YLOoNe3wkr6ARBkmhrNKW5lGneB%2Bz6dbTD34pnBBjqkAbZ097KtMfzFhUMLLddgxvx%2Bk1XygKG%2Fm8YCx9n%2B6QoKNPZfyQPVzJluV6yGHSGJXP77qoVmocAk8gffLtVs%2F6s%2BkL31yPIO4fPsr%2BMYkJYEW2byCFUtYdpdg%2BLKzzKQgrnjAQnK7Y%2Beafw9%2FOSCuQmC6xdcvBA1DtxEjWFTcLUxLngRpsUNQrgTW7Rej8fZQgNxpJQ3sx459SHvaFh8nDLnYQrB&X-Amz-Signature=455fc40214e50310adc144b91c94eb5dc3254d55061dde551005a6ca12bfe3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
