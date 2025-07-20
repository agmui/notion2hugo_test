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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPS3NM27%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtNuYmme9Lo8DXyS8y9lQ2CEfp8Y8DfG8rx8YBwsWlKwIhALvC2xIyb4ksi9l%2FkuNieuSIHsk5QLkRSTDIujAOPHiAKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxswP52s5uLRSAkoNcq3AMlGG6ABupGO1CblBHFHQlUxtxwv9Ogg3KzsbO936%2Fd3DsCRslJwqJybbwyNYI0dMlhXbkXUitsu4QU9bdwXaTuUzwFg1y83LlrtC%2BT5s95eBo2bB8ewBWEbn5uhfygo63cAMxbWPkOMH%2FmhH%2FCa9AC%2F1BfwKFEsC0DF20RpvAQHSppOA8CvVedgMpdSGyARvNuC73KDenVpvaOzO8yopLdQOg7f64Zk42vscJzq1Vyc6WiKDhbE6yTqw45YrpiSFF9u%2BdA86ej%2FsOSkwjblNx%2BzuNqNEEkkA5G72wPcYUu0yPBnAdExaqkGkLeA53%2BiNjDrcLylEKn391gziHI9R7H8DuBRNk9Oh2FYn%2B2zpPvhyjFUVz6jXqnN6lLcRGSQE7RQinYMTZtX5n9YTEb0KKjtHyBtN0RmsG%2B%2B2deYivJA7XQYCMFY4LS7XGj6zWDoPV3buUIKyP0KtZIu1uJ%2FFbH2QRil2B6yOxDMaoASMNunCB4k20uC6muAMybeLqHGq%2BNp3pEPWxMH0t%2B94LHb%2BhN5bSbg6%2BerR1wcITxqxP07oZiLsMBLc0ShDvJ1GrCdbmu1jjoEyTcvGLIl%2FwE9ZvzBknIynI8BkQJh%2Fg4zuQY9FMgxw%2FE92DySaWkmTDyxPPDBjqkAQlLz6tZQZz%2F3y4bJdj6VjuTmh8mTzAdqKq2wyiimQtU4XpimbxJfYXiyODSkZy8QEYR0Klwi2jExpfiaBhOEqxC%2FqhJJNMau3xohjUcNLxwEYaMPP9iOFgb5RK3nENAlQC%2B8ARUaxuYVhSBWCzNAGo7ZsM49jAxG0ialV0kfywChRKZQ4Xs1MKKm8FVGsmv89f8iegUbnkM0JcxUBNjM6eP6i56&X-Amz-Signature=fb8811c00a388cca2fab74748156efc9dc375929820a007b9ade8a7d42f9ed0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPS3NM27%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtNuYmme9Lo8DXyS8y9lQ2CEfp8Y8DfG8rx8YBwsWlKwIhALvC2xIyb4ksi9l%2FkuNieuSIHsk5QLkRSTDIujAOPHiAKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxswP52s5uLRSAkoNcq3AMlGG6ABupGO1CblBHFHQlUxtxwv9Ogg3KzsbO936%2Fd3DsCRslJwqJybbwyNYI0dMlhXbkXUitsu4QU9bdwXaTuUzwFg1y83LlrtC%2BT5s95eBo2bB8ewBWEbn5uhfygo63cAMxbWPkOMH%2FmhH%2FCa9AC%2F1BfwKFEsC0DF20RpvAQHSppOA8CvVedgMpdSGyARvNuC73KDenVpvaOzO8yopLdQOg7f64Zk42vscJzq1Vyc6WiKDhbE6yTqw45YrpiSFF9u%2BdA86ej%2FsOSkwjblNx%2BzuNqNEEkkA5G72wPcYUu0yPBnAdExaqkGkLeA53%2BiNjDrcLylEKn391gziHI9R7H8DuBRNk9Oh2FYn%2B2zpPvhyjFUVz6jXqnN6lLcRGSQE7RQinYMTZtX5n9YTEb0KKjtHyBtN0RmsG%2B%2B2deYivJA7XQYCMFY4LS7XGj6zWDoPV3buUIKyP0KtZIu1uJ%2FFbH2QRil2B6yOxDMaoASMNunCB4k20uC6muAMybeLqHGq%2BNp3pEPWxMH0t%2B94LHb%2BhN5bSbg6%2BerR1wcITxqxP07oZiLsMBLc0ShDvJ1GrCdbmu1jjoEyTcvGLIl%2FwE9ZvzBknIynI8BkQJh%2Fg4zuQY9FMgxw%2FE92DySaWkmTDyxPPDBjqkAQlLz6tZQZz%2F3y4bJdj6VjuTmh8mTzAdqKq2wyiimQtU4XpimbxJfYXiyODSkZy8QEYR0Klwi2jExpfiaBhOEqxC%2FqhJJNMau3xohjUcNLxwEYaMPP9iOFgb5RK3nENAlQC%2B8ARUaxuYVhSBWCzNAGo7ZsM49jAxG0ialV0kfywChRKZQ4Xs1MKKm8FVGsmv89f8iegUbnkM0JcxUBNjM6eP6i56&X-Amz-Signature=e2a2199611fad9824b9b140f936b05585c15166d68f495a4f9f00f6b9618a54a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPS3NM27%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtNuYmme9Lo8DXyS8y9lQ2CEfp8Y8DfG8rx8YBwsWlKwIhALvC2xIyb4ksi9l%2FkuNieuSIHsk5QLkRSTDIujAOPHiAKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxswP52s5uLRSAkoNcq3AMlGG6ABupGO1CblBHFHQlUxtxwv9Ogg3KzsbO936%2Fd3DsCRslJwqJybbwyNYI0dMlhXbkXUitsu4QU9bdwXaTuUzwFg1y83LlrtC%2BT5s95eBo2bB8ewBWEbn5uhfygo63cAMxbWPkOMH%2FmhH%2FCa9AC%2F1BfwKFEsC0DF20RpvAQHSppOA8CvVedgMpdSGyARvNuC73KDenVpvaOzO8yopLdQOg7f64Zk42vscJzq1Vyc6WiKDhbE6yTqw45YrpiSFF9u%2BdA86ej%2FsOSkwjblNx%2BzuNqNEEkkA5G72wPcYUu0yPBnAdExaqkGkLeA53%2BiNjDrcLylEKn391gziHI9R7H8DuBRNk9Oh2FYn%2B2zpPvhyjFUVz6jXqnN6lLcRGSQE7RQinYMTZtX5n9YTEb0KKjtHyBtN0RmsG%2B%2B2deYivJA7XQYCMFY4LS7XGj6zWDoPV3buUIKyP0KtZIu1uJ%2FFbH2QRil2B6yOxDMaoASMNunCB4k20uC6muAMybeLqHGq%2BNp3pEPWxMH0t%2B94LHb%2BhN5bSbg6%2BerR1wcITxqxP07oZiLsMBLc0ShDvJ1GrCdbmu1jjoEyTcvGLIl%2FwE9ZvzBknIynI8BkQJh%2Fg4zuQY9FMgxw%2FE92DySaWkmTDyxPPDBjqkAQlLz6tZQZz%2F3y4bJdj6VjuTmh8mTzAdqKq2wyiimQtU4XpimbxJfYXiyODSkZy8QEYR0Klwi2jExpfiaBhOEqxC%2FqhJJNMau3xohjUcNLxwEYaMPP9iOFgb5RK3nENAlQC%2B8ARUaxuYVhSBWCzNAGo7ZsM49jAxG0ialV0kfywChRKZQ4Xs1MKKm8FVGsmv89f8iegUbnkM0JcxUBNjM6eP6i56&X-Amz-Signature=1d74ffca43596293b562673f1862402f76f90c32d17bf5a0fa2409f8eecc23e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QNJEGX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMfxbaoE83%2B8%2FN5EREHmUxPuOAVEU7LBchDLcclyse1wIhANlMlxJlhJLtTWUcWoRBG1EkbjVvFfkNH6qmFNaG127RKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5jLPv1muFXsFr1v8q3ANYorzs8riXvNFUCOBZ%2FaQ0KIi75lGN0dMSl4MFKbHDMBGTzSWjajnjXthg5ex5TvHO20yUVvd9H1hytjRM9ZphMb6zc7RBwxDsqKb1LLfWk0jUj1xV2n9Fsp54MjWr%2Bg3n73HFDFgEqLhR8EpnPtYCgEEwT43vcwMeAuewHrhIgmzwrCHLhYXD%2BAZ4vXW1ju5xvE4bzpvBl8WdaDmauQvz%2BQwoEJxOjcGm6ylyYeda6p%2F2q19Sk8gmdkqtqcS7creRXmH1oozNRtaq7NQgV9ugP2IifYw2sLkqOn7k8XEkzFbARFun1OKboSCs0Hr9tNiAGqrjnPXg8T1K9o0tWiXkDyjO0FnKE2rBd%2FkiOgMH4xE5C%2FGgXtAuqSqCLpPKmcbJASyTtpoKYRMeY9CDzndAFgp%2B0ICDcB%2FJ%2BmfIB3QeK%2FJeOf7kE%2FveqvRz3x5tSXsEvN2jQr8MChxM4bYGiz%2BRHtZahgIht%2BoAeJZwVNmRNMRQnraVsKHAQzSnQd0pL5DoSprM9m5w4rLqx3q6eIVCcW2XnFP21RPRVC%2B1DZ0CBB4E3Fh7nwyQO0Xr7QoImeraTkf%2BdIzqPorzIwCE1g1LhOd0X97cdtnet67ObG1dK4zJYB%2FzMPBak%2BF05zD64fPDBjqkAbi7k0%2Fhcy%2FQsPyK7O5oTMZZz1%2FBhCBCi%2B1XVwPwcNgfSIMI2DIzRCDrimLi1oTv4MhyR0gMis6yYNITemGwdKr3jP9tjYW%2B8yZiqr8YqnmU9zA%2BrMKRKMHjzktsir9EQtMPlqYSm%2BlP8%2FKax2s85PV%2BnykV4YqkZ2O1CVpQGR0Ebxvsbf7ke6Rrey1hlV%2B82nEfq5%2BRTbKBrzNLGLa%2FabgTgs4%2B&X-Amz-Signature=b9e27fc140a3b174b29ba50a704aa8312d577bb4308e4b26b518c58a8be19dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBE5TBP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmon%2FgT%2FBnG4K%2Faui3Ml4vClmh5AVbisJrrmKcLQvjtAiEAnJt0iOf7WWhm76DDoFjupT%2BQGVhrA9CB5KkmwECmMokqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrvf9SAnzeIh0dDKyrcA22QyJb4Zpva%2Fvle5Q9DdsAJJMkWFnOYMY1k0ruA0c4ik%2FSdDTL1wO5vK0rvEWwuJnvUIUzaFXARqZlzKUN5hnZ3hV%2Bp4eDsjYMxM7lAzL4LYa62Ab%2FXu5iEZzHASVl2KGrm7AJHVBwG4vh3wKYQ2gsh1sCFh2jP0CrGE2QlSQTbyFtzdOf8uqHNfsn7CcDNI15NTlwKGVERi6Bgti8Mim97sodlnLzWF63uOkmLSM1J8z%2BJM%2BuUTSayXSEcotkndthw%2FLGdeyUB5VHWkknLytncr7AvK3Qcw4bcY%2Ffh%2BwCIAD9hsQ%2BW1O6XiDe34YkhgggOyTsMGrcRPW1LwNHy%2BHFNRP32EundOg54u3i2Rbd6Xu5pZTqLaThw0fp1BbIXhEzcFiyOl8B4ABIwcLyBEH8mY4XhVBk8uOp3G22kdZmPFL87R6HKJq1sgYznIwCJrMGprD%2Bv%2F%2Bom1uk5cHmpb7GBB38yPMM4Vy0YKxrvFdt81XUqsWUHXlNpRzGr7FenjzNLAYjtl7Z5dTU5q1GA%2F77pOsTngaH6jORBtwyG%2BdggGtBOhhgpLnYVhTjKNJnG8QR7as%2BWbJviI6qHp7kQe0hBsb4dBVF8JFO1TikF0K7TlOkjCWqhfMVSDsnHMNHS88MGOqUBVS6QAZViMVFFlafYmYLd%2Fx9LTUQR87xdHiIiiMPAA8gSHVrcKvnByiFUPDRaAXmgaT7EX24ueJ38r9JRxVtXjItsNfADdYhrD24dlwDehY9brVB2hi7saHP9Ld34X5SDIcTYHzKUeT3HwmGKUtxSsGS%2FMeLNenMeLVRN%2BDa7hFqkhC6jI2kIujn12E%2BlsVFNLo%2BLSyZUvOjHzVS7S6PuyxkZUMAy&X-Amz-Signature=7e29262b1e7adbf94e456b22eddbd619d9dcc4fb1de194151c4988979bb38021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPS3NM27%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtNuYmme9Lo8DXyS8y9lQ2CEfp8Y8DfG8rx8YBwsWlKwIhALvC2xIyb4ksi9l%2FkuNieuSIHsk5QLkRSTDIujAOPHiAKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxswP52s5uLRSAkoNcq3AMlGG6ABupGO1CblBHFHQlUxtxwv9Ogg3KzsbO936%2Fd3DsCRslJwqJybbwyNYI0dMlhXbkXUitsu4QU9bdwXaTuUzwFg1y83LlrtC%2BT5s95eBo2bB8ewBWEbn5uhfygo63cAMxbWPkOMH%2FmhH%2FCa9AC%2F1BfwKFEsC0DF20RpvAQHSppOA8CvVedgMpdSGyARvNuC73KDenVpvaOzO8yopLdQOg7f64Zk42vscJzq1Vyc6WiKDhbE6yTqw45YrpiSFF9u%2BdA86ej%2FsOSkwjblNx%2BzuNqNEEkkA5G72wPcYUu0yPBnAdExaqkGkLeA53%2BiNjDrcLylEKn391gziHI9R7H8DuBRNk9Oh2FYn%2B2zpPvhyjFUVz6jXqnN6lLcRGSQE7RQinYMTZtX5n9YTEb0KKjtHyBtN0RmsG%2B%2B2deYivJA7XQYCMFY4LS7XGj6zWDoPV3buUIKyP0KtZIu1uJ%2FFbH2QRil2B6yOxDMaoASMNunCB4k20uC6muAMybeLqHGq%2BNp3pEPWxMH0t%2B94LHb%2BhN5bSbg6%2BerR1wcITxqxP07oZiLsMBLc0ShDvJ1GrCdbmu1jjoEyTcvGLIl%2FwE9ZvzBknIynI8BkQJh%2Fg4zuQY9FMgxw%2FE92DySaWkmTDyxPPDBjqkAQlLz6tZQZz%2F3y4bJdj6VjuTmh8mTzAdqKq2wyiimQtU4XpimbxJfYXiyODSkZy8QEYR0Klwi2jExpfiaBhOEqxC%2FqhJJNMau3xohjUcNLxwEYaMPP9iOFgb5RK3nENAlQC%2B8ARUaxuYVhSBWCzNAGo7ZsM49jAxG0ialV0kfywChRKZQ4Xs1MKKm8FVGsmv89f8iegUbnkM0JcxUBNjM6eP6i56&X-Amz-Signature=a28261019b0d03c60da6e8ebae480b73781f9e88dfa6e6f402ad8f1d08dba7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
