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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGE5RLOG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDx9VE2utikLVuZOta468RHQV0QhoG3yXdKZWt08zOcxAiBl3AJFciIQDRfGbe3g%2Fz1p4ZyB9yTxdlxyXKHrNg6flSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMgxCetf6bP%2FkHyCbSKtwDHVvnULXMIDjHSIBV0s5jTLuohI7jgJuVuQIA4fF8fHAYxAbn%2BFuwYffG4IZJ2hV%2FrB3%2BEndYhBm4T9le5JnI42o9KkaPOiqEkubIYf4MHL%2BsnnCh%2Br7K7mU1X9uMxpfPHhUYSeSohQKGHzFap4sngjuGCDmuXhUBC536lI%2FWztTHr9SfYVZkk8pQyQ1qxjm%2BberADF25OzOKFZ1WMAsjBPj%2BgwzR9CNEk2XUkwVSJREyOXikHOk88ZcuQdFOlB8FqtTEgoimlJsQt2sbPREA1kg5wXurRILbmSIdH3U4BUsZ1KMcw402408XhYFfuF9Wh28OOWBH4z1pMSUyeZtM4rqnvEdiE%2BOgRtIkOZ%2FnOUXnmFXCm69jiGO2yDy4k9fuZD9j%2BhWeek9Q0LydiWD7tGUFb3uibub5LcplrpJ5fFuHDVpNt17DMLkTsZLgnj%2Fit7AvQ15We%2FnUyAA2RNkLemWxjSHcCAvVaGLWK9zBqeehXwkc8kTwNvDDpD%2BBIcMUr1eCU2rZ7FxpHSLgJ64Tg5T%2F3xdE38p9%2FC8%2FNsZ88IXvID4oTZ695ZZQxB7L6QnFY2RUOwyBi5Ta2NbotDpndnzq1mO2m3D8QY0sEAbg2wMtXxPZDuobrk9LxWwwmMKMxAY6pgEwXnlV6RPjeB1kYiJGoabHsAmS9nwl6H202tT2JbtVdbZByJjeA1q29SwbIjzfo%2FYpenMF%2BxpGDkpafAPm8QN%2BoWp%2F5Eh5gZdRo1dkZlS4Zq1Gv8MlApeoEX1ShVxOJBtpHfwl5kdgmYD6ncO4Vk0LK69EQcSEr7qGTZGmHG55GrI%2BXESSDj1IjKtE8DJuMzrYRvSdejPz5Soi%2B%2FI0NLVU%2B18Uglx8&X-Amz-Signature=c940ebae170ce9192215cede65bd606463b11bf6ecd37fa39574e546a9a2d9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGE5RLOG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDx9VE2utikLVuZOta468RHQV0QhoG3yXdKZWt08zOcxAiBl3AJFciIQDRfGbe3g%2Fz1p4ZyB9yTxdlxyXKHrNg6flSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMgxCetf6bP%2FkHyCbSKtwDHVvnULXMIDjHSIBV0s5jTLuohI7jgJuVuQIA4fF8fHAYxAbn%2BFuwYffG4IZJ2hV%2FrB3%2BEndYhBm4T9le5JnI42o9KkaPOiqEkubIYf4MHL%2BsnnCh%2Br7K7mU1X9uMxpfPHhUYSeSohQKGHzFap4sngjuGCDmuXhUBC536lI%2FWztTHr9SfYVZkk8pQyQ1qxjm%2BberADF25OzOKFZ1WMAsjBPj%2BgwzR9CNEk2XUkwVSJREyOXikHOk88ZcuQdFOlB8FqtTEgoimlJsQt2sbPREA1kg5wXurRILbmSIdH3U4BUsZ1KMcw402408XhYFfuF9Wh28OOWBH4z1pMSUyeZtM4rqnvEdiE%2BOgRtIkOZ%2FnOUXnmFXCm69jiGO2yDy4k9fuZD9j%2BhWeek9Q0LydiWD7tGUFb3uibub5LcplrpJ5fFuHDVpNt17DMLkTsZLgnj%2Fit7AvQ15We%2FnUyAA2RNkLemWxjSHcCAvVaGLWK9zBqeehXwkc8kTwNvDDpD%2BBIcMUr1eCU2rZ7FxpHSLgJ64Tg5T%2F3xdE38p9%2FC8%2FNsZ88IXvID4oTZ695ZZQxB7L6QnFY2RUOwyBi5Ta2NbotDpndnzq1mO2m3D8QY0sEAbg2wMtXxPZDuobrk9LxWwwmMKMxAY6pgEwXnlV6RPjeB1kYiJGoabHsAmS9nwl6H202tT2JbtVdbZByJjeA1q29SwbIjzfo%2FYpenMF%2BxpGDkpafAPm8QN%2BoWp%2F5Eh5gZdRo1dkZlS4Zq1Gv8MlApeoEX1ShVxOJBtpHfwl5kdgmYD6ncO4Vk0LK69EQcSEr7qGTZGmHG55GrI%2BXESSDj1IjKtE8DJuMzrYRvSdejPz5Soi%2B%2FI0NLVU%2B18Uglx8&X-Amz-Signature=c674ca9edd3c8d36bdca8631bc5791ce6945f84cb539600ec38a615a3c0e36fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGE5RLOG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDx9VE2utikLVuZOta468RHQV0QhoG3yXdKZWt08zOcxAiBl3AJFciIQDRfGbe3g%2Fz1p4ZyB9yTxdlxyXKHrNg6flSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMgxCetf6bP%2FkHyCbSKtwDHVvnULXMIDjHSIBV0s5jTLuohI7jgJuVuQIA4fF8fHAYxAbn%2BFuwYffG4IZJ2hV%2FrB3%2BEndYhBm4T9le5JnI42o9KkaPOiqEkubIYf4MHL%2BsnnCh%2Br7K7mU1X9uMxpfPHhUYSeSohQKGHzFap4sngjuGCDmuXhUBC536lI%2FWztTHr9SfYVZkk8pQyQ1qxjm%2BberADF25OzOKFZ1WMAsjBPj%2BgwzR9CNEk2XUkwVSJREyOXikHOk88ZcuQdFOlB8FqtTEgoimlJsQt2sbPREA1kg5wXurRILbmSIdH3U4BUsZ1KMcw402408XhYFfuF9Wh28OOWBH4z1pMSUyeZtM4rqnvEdiE%2BOgRtIkOZ%2FnOUXnmFXCm69jiGO2yDy4k9fuZD9j%2BhWeek9Q0LydiWD7tGUFb3uibub5LcplrpJ5fFuHDVpNt17DMLkTsZLgnj%2Fit7AvQ15We%2FnUyAA2RNkLemWxjSHcCAvVaGLWK9zBqeehXwkc8kTwNvDDpD%2BBIcMUr1eCU2rZ7FxpHSLgJ64Tg5T%2F3xdE38p9%2FC8%2FNsZ88IXvID4oTZ695ZZQxB7L6QnFY2RUOwyBi5Ta2NbotDpndnzq1mO2m3D8QY0sEAbg2wMtXxPZDuobrk9LxWwwmMKMxAY6pgEwXnlV6RPjeB1kYiJGoabHsAmS9nwl6H202tT2JbtVdbZByJjeA1q29SwbIjzfo%2FYpenMF%2BxpGDkpafAPm8QN%2BoWp%2F5Eh5gZdRo1dkZlS4Zq1Gv8MlApeoEX1ShVxOJBtpHfwl5kdgmYD6ncO4Vk0LK69EQcSEr7qGTZGmHG55GrI%2BXESSDj1IjKtE8DJuMzrYRvSdejPz5Soi%2B%2FI0NLVU%2B18Uglx8&X-Amz-Signature=f6ed0f67ee657ac36bc2904b6380f61569400fe7a1ebd8ff110fc56fa1089469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKXXE2Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC8oouy48Iah%2FlHI1tLlp0keF8MvVpSNNmevmivX9Ol1QIhAJZgCRow78zKGrUc1M6yQ%2B7FQNXYAhvpqZiL0IoSwnChKv8DCD8QABoMNjM3NDIzMTgzODA1IgwOcyMXmC%2FJPeS%2BDcIq3ANC3E3r8NEz8FXe%2BWDDikWWv%2FuO8bNJ7lGJk0nKDZiB2%2B9zqTNAsMDfQEgTIeY7X4PihhIzUSiivqSJXMl6nr1EKgnGsrNdkjgaFNtzGMQo6Mtvtp%2B8Oi2od0ssu8OXrjXLFrulYPR71girxvpu5rd5TybprbDXffp32CcEopB1kTCHiw5lFOB3Kyv1sKidbGbrhPbtv02%2BIum6KbTFRoIQBdlDxfGzV%2FY87LxjZ59P2EVmrQl8EiTRILLV3avGEIcj9WnL0zbMynRY3%2BHBzLKvbWmfEXgU1%2F8gVs%2Fet92hm45DA2CcWMht3jUF9Xo%2FDuxXcvhc%2BUwZ9fbQEr%2Bi9r9nA0oogu0ALcmWivmYWS9V47dVWToOyZ%2BU1zqZVoiRBASO%2F9NTjiR5FCH7zDCh08yymRXbVTHwP47z%2Bkd1u2jYESCcOGXX1cBrlnaq8JDa5Me4Ptw8QgVOV8Wp%2Bu3kD48uDoHhGDgQ40oKxqdGeMGsNhQmmFwWfo1EJypbAJI4ETFF%2FNX1Imz140F6SUlr1fTUyn7XRjHD%2BsQ4uc8XdnlsEvnXHt3oPMVHOOWdnjr8aPHecy3tcYXbdmjL%2FDMM0cI9XEP6s%2BKRjyc674fUC66H3WFyhQG7E0y0aqJ0ljDRwYzEBjqkAak5ZmhWnFKpoCbky%2FrS1Sju%2F6bD7qUPhwbQpA%2FTz0b%2BIZV95j5d4J%2FBEWMmPZ6K%2B2jloyK98kLA5qdkYWZsVbLbYUc68GN7oTu6MY121bEyBCiBXCgGGRcS2s8Ubqsf1w9T9QyMumN6zPmRwUmF%2Br22n%2B1vdTwT0cToBwWYWn0oP0b1WWdGgmNQg7jj27NzoiNN4GdKetg0iozKFjpttilmPKzg&X-Amz-Signature=ce53e9e1d124f43087c82f1a14d420f05c37fd35ec0884656b44a52b24b89492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GSHLGX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDDg6RnNHAEXnGFiVXA2C4w3aTQR5uW2uEnNZbtM9dOZgIgI14oPWJMk18G9LeTyPjliiNEDy6on4UP6uUmyS6TiKMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGY3Rj8hTKNopR8BEircA0fr9O%2B%2FKW%2FTMwdz2AhuQ8cLNTCBDPS5jpNaUjXcs4j%2Fe7cSN%2B8U1v0nSUljJL%2FOutEjhusp%2FJ%2BygWn9Mix7ejhbXmGP4EzTJH5hhGMPj6CI9pO9Kv%2FTpPIvgHF2zfZpD8INdvo4LoS9AqKJaOt4gLI8cMhfkxlhoN2SdFhgV9ICAzVsqsiKM4lcLE5FjgShA0EmOPuaf3fu3cR0bVo5cAxL79eXrF6xu%2BUIkOPAHw%2FfB7btOpHfCL5khMv6%2BcYewdCKyMNz3oEs7w71cdNhjub3NnP6w%2FDHO%2BhNeqwmrA6Bv%2BQBWJopbn%2F%2FzJX8itDZAx9QK1hgQtmLQjocACT4YY7GXYc%2BXZBYvSo%2BFjQNCwTZlId%2Bi%2F6TR%2F0gE1Iyn2sqqQODcY3QAc%2FVDqtFnDhIQuafIMwXLmzo4GlVlKXb6dfIUoXSQ0sPdAmXnyZgqdv9GkWBk%2BqaVQ0XAYL2oBtunHvmmB4Sxp1W68eSULg37X0HZj%2Fo5x5sPgt01bTBi9eqH9AtkCqXjNp%2Fc8eGOmaqpqpTgDnhnSqac24i1YAMEAkFluld2R3J9mYFQ7Y3kXUUoeH2K2GRGAifw%2BbouLWT%2FhePR44pPFaqmJesE2FL5%2F2xigrzEEMEGLaD9SjsMM7BjMQGOqUBFlLIyAoV0GGnLGOgf%2F6Z%2F9B9Hb8W%2By5NcDPZI%2FFPQxtB3cLOGX9JhDNNKYu8UwHwhOg3w3wWIIzdfWSwxrJWSLbAy996rs1eEKyXGKn59WhZ64o4vQRR8LNKTgf2%2Fy06qJNo6c%2FzUT3lJ9aK1nHq1uG0ZbkzBRHldSgsuTb889JBfUE02kr%2F4u3Z5QjL72pSI4Dqu6ETKc4qI%2BgYEPvAoGKwGwfv&X-Amz-Signature=8e21088d116f23ccbb2b60b31dd0a46d1f1c5e58677431316468dff757b37e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGE5RLOG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDx9VE2utikLVuZOta468RHQV0QhoG3yXdKZWt08zOcxAiBl3AJFciIQDRfGbe3g%2Fz1p4ZyB9yTxdlxyXKHrNg6flSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMgxCetf6bP%2FkHyCbSKtwDHVvnULXMIDjHSIBV0s5jTLuohI7jgJuVuQIA4fF8fHAYxAbn%2BFuwYffG4IZJ2hV%2FrB3%2BEndYhBm4T9le5JnI42o9KkaPOiqEkubIYf4MHL%2BsnnCh%2Br7K7mU1X9uMxpfPHhUYSeSohQKGHzFap4sngjuGCDmuXhUBC536lI%2FWztTHr9SfYVZkk8pQyQ1qxjm%2BberADF25OzOKFZ1WMAsjBPj%2BgwzR9CNEk2XUkwVSJREyOXikHOk88ZcuQdFOlB8FqtTEgoimlJsQt2sbPREA1kg5wXurRILbmSIdH3U4BUsZ1KMcw402408XhYFfuF9Wh28OOWBH4z1pMSUyeZtM4rqnvEdiE%2BOgRtIkOZ%2FnOUXnmFXCm69jiGO2yDy4k9fuZD9j%2BhWeek9Q0LydiWD7tGUFb3uibub5LcplrpJ5fFuHDVpNt17DMLkTsZLgnj%2Fit7AvQ15We%2FnUyAA2RNkLemWxjSHcCAvVaGLWK9zBqeehXwkc8kTwNvDDpD%2BBIcMUr1eCU2rZ7FxpHSLgJ64Tg5T%2F3xdE38p9%2FC8%2FNsZ88IXvID4oTZ695ZZQxB7L6QnFY2RUOwyBi5Ta2NbotDpndnzq1mO2m3D8QY0sEAbg2wMtXxPZDuobrk9LxWwwmMKMxAY6pgEwXnlV6RPjeB1kYiJGoabHsAmS9nwl6H202tT2JbtVdbZByJjeA1q29SwbIjzfo%2FYpenMF%2BxpGDkpafAPm8QN%2BoWp%2F5Eh5gZdRo1dkZlS4Zq1Gv8MlApeoEX1ShVxOJBtpHfwl5kdgmYD6ncO4Vk0LK69EQcSEr7qGTZGmHG55GrI%2BXESSDj1IjKtE8DJuMzrYRvSdejPz5Soi%2B%2FI0NLVU%2B18Uglx8&X-Amz-Signature=98ad582d6c2f68a75ca9672d08f3666376502f30cf732aee85714656dcd50504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
