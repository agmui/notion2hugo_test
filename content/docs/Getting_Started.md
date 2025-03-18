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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3TXE5O%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAabFakDYwvk08lVKGW3V63Y1Dp2cCVwV7uI9yjPXPLwAiEA1dT4YBgtFlVNxXE3ymxLi62Klw8JQUtyJCsAbc10THAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFIFV0WqObqGw9p%2F0yrcA7cms9YEncMflxqL7NUD36Rsfc6Zthhd4tig7GO29ogvxUH1VdlkwqubgqY4eowM14O%2Bugd5PaNcwxX9x4mBylkj3TJ5X8oHjR9vBkQzkzOh5a8yhITy%2FZiYe2HrfhOU8QKR5tzIMr2gUoy6nr%2F2EIjEWYjfxAxvQM3r%2FxaRCZzI27TQwnyvq6l7s9XTg2Gve9xmaUNEBjgKGw21pzaeoLWaxdTi%2BWKbsqvPkqVlsGkvA14xtOBYjan9KXgKYueiW4RQkRtdM7u3VzpdaTnLj%2FBxw8p1IzNH2IhjoPsOT%2B2u6fEN35SFQ5fMp%2FQzA5WsqhpTJl%2FUU%2F6kqnskrqnnlZVuZYk7DYkE1ZR7VOYoSMuqPcirjvAeQtGDKo%2Bc1S0iSfOTV%2FVzIv%2Fs1ZSsxysUn9uBCx07nYkSZWYZQ2FVJwHCOn4c%2FHDRI%2BSrc9WLOWNvd1MkibofXaBQiwyQ7WW2glG1qhK5YVmsinn7KQwwSX%2Bd%2FAMyOQJIEz7r7r7x61RmOHQvaTdZ3fZ6%2FPmx4ZSP%2BLDvHqw7YFtIUd39XQ48bGXpXFB5pZU4Ta8cUohPxIx0yhVjCR9fHOF2YfkWwyqOTV7Ft7kf83vG%2BKggnxHycfEQmHR44r0xg3e9lWs2MKXK474GOqUBflZIVbAjkPUZIaPTr%2FlNLUfOV1MruMFLtGCHrsZ64EgT6%2BN1XeiSZYfYHaRzoch8Bniie712aOkt1vfuwH%2FhBnYmIdxYpq0byOBu%2FQDtq19kLdRi2XmR%2FbcQY6Sbv0YdJi25zFJnQm3Dnudd4IdlPpwBW8i%2B6ohVPNMUjEbTOrOE7JWxR2rf%2F4EzZxQjY8%2FMmMUJTxtbWybYYWleAqcA%2F2eVCCW2&X-Amz-Signature=528ff6566466ff5673ea25eaa90865933b292969520a195ce607fac026a5a797&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3TXE5O%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAabFakDYwvk08lVKGW3V63Y1Dp2cCVwV7uI9yjPXPLwAiEA1dT4YBgtFlVNxXE3ymxLi62Klw8JQUtyJCsAbc10THAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFIFV0WqObqGw9p%2F0yrcA7cms9YEncMflxqL7NUD36Rsfc6Zthhd4tig7GO29ogvxUH1VdlkwqubgqY4eowM14O%2Bugd5PaNcwxX9x4mBylkj3TJ5X8oHjR9vBkQzkzOh5a8yhITy%2FZiYe2HrfhOU8QKR5tzIMr2gUoy6nr%2F2EIjEWYjfxAxvQM3r%2FxaRCZzI27TQwnyvq6l7s9XTg2Gve9xmaUNEBjgKGw21pzaeoLWaxdTi%2BWKbsqvPkqVlsGkvA14xtOBYjan9KXgKYueiW4RQkRtdM7u3VzpdaTnLj%2FBxw8p1IzNH2IhjoPsOT%2B2u6fEN35SFQ5fMp%2FQzA5WsqhpTJl%2FUU%2F6kqnskrqnnlZVuZYk7DYkE1ZR7VOYoSMuqPcirjvAeQtGDKo%2Bc1S0iSfOTV%2FVzIv%2Fs1ZSsxysUn9uBCx07nYkSZWYZQ2FVJwHCOn4c%2FHDRI%2BSrc9WLOWNvd1MkibofXaBQiwyQ7WW2glG1qhK5YVmsinn7KQwwSX%2Bd%2FAMyOQJIEz7r7r7x61RmOHQvaTdZ3fZ6%2FPmx4ZSP%2BLDvHqw7YFtIUd39XQ48bGXpXFB5pZU4Ta8cUohPxIx0yhVjCR9fHOF2YfkWwyqOTV7Ft7kf83vG%2BKggnxHycfEQmHR44r0xg3e9lWs2MKXK474GOqUBflZIVbAjkPUZIaPTr%2FlNLUfOV1MruMFLtGCHrsZ64EgT6%2BN1XeiSZYfYHaRzoch8Bniie712aOkt1vfuwH%2FhBnYmIdxYpq0byOBu%2FQDtq19kLdRi2XmR%2FbcQY6Sbv0YdJi25zFJnQm3Dnudd4IdlPpwBW8i%2B6ohVPNMUjEbTOrOE7JWxR2rf%2F4EzZxQjY8%2FMmMUJTxtbWybYYWleAqcA%2F2eVCCW2&X-Amz-Signature=77bc40677af07352675d71c78c8cb3db33114f0b30ee920c20d9f272636c8a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4SPKGC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF6YxM9N9aOHl5x0mG7Pwe%2B2sjbFognegBGX%2F6noL%2F6QIgNRGznDzPuAKNMH6p%2F6%2BLPkItFk3IXOQlNcdmpbCnrzQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIBm5nq4KjWTThlD%2FCrcA7tj6wvNQsPrHExq8xw00S9rjMZM%2FPAV1MJ0n%2BI7UEHr0c84%2Fsc%2F8LpknPDfYIrBbq4dqQUpsHR4Xjt9RBbxcVcFwOY6t53R5DrXQ7UpdaaOywhQbzXYKn2zxh3VxkrlDweBgfKiaTmmJeKeycGF%2FxrwTlndlyX5z3aWof7qH68gl78AuY71okPDGtcMp%2Bu9dR%2FIstCesvshMBLPeUpk8a2gNFf22oW0s1g00U6Kfug3SJ6XX7n3W%2B%2BuN7WD9DEq5EQhZ2XRxWpk6%2B7%2Buzt7iJr5vLqA4WbMo9tOU7AQW7iLfZ0YBhEuRgFNAfwPOXSRdJpLXxhZlvJ8jtL9JfK7dPEcW3MAB2urS8wHuGexelxCjITkRWGgRUHXXsoa%2FpNgbHFTAOXoOOwHMJO%2B%2FGkJSuUMTrTjSvMnXSDVwL3%2FDaRgKwkLhvoGTfwEJrOUoxFkNU%2Fa%2FeXHLbRXvqpIxUSD2S6tavDQLFURePHF4QTKFsVxjvHHC1QVMY1ZBKfe%2F7KUvsNn8jBbz0wfPwMvJd7oYXQHM0uDQTXscBkrqf7SWHUBuyn6gqC2wsDaFD8XEouV3DmCH%2BnmCqhGdKIoZvKeyoEM2L%2FL5yu%2FE0w4KHBmY5u2RqTmuQLcbeFRZjlpMKjJ474GOqUBWdjAOuDYu9aDv1jE1FeeZH43ycWoeU1n4rT7qTmYdJ9wIHQRIFY3v00eJmTzQ%2FK1l5wy2bPutlYkglB6k%2FSTn%2B6aSZz5qNwlsuFuZLXzLhPe8lgm2ippCH5SPOeecMPgEvFDeI%2F1JKXGa%2BU4ot6hznod2OGaPgNhd%2FTRKrxT3%2Fj7YpxW1S18O9TSj19S%2Fxtx0EKHcRw87MMWrzsLOs2hMgSvJIrW&X-Amz-Signature=697169c1496b39f02b67933a7579e07c0504064d559107fd8b60aaa19144f872&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI6PBZKG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZYVHqFoO443b9FQs%2BY6GQFjz3mOIjRjI6yrZ%2BNifCRAiAmCk5EOuZ%2Bw704y7UTXIN5aONKEkXdGZ9lt5CscxpdAyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJEj2yjbGXVLnhKNkKtwDVwJh2D0KrmG5Rd7xzr%2FzJchfSumJOs1ViMjAew7qVpZGjgCC%2Fa7pZGNzopWT%2BjxR38rs0eiodWJU8ikKTo2rLQQIZBvfZZGLt%2FRX3X7B1vLO3CPgunYERNfIVsBePpUnm4n7JHnWnsH4um97cr%2BR4CCX93dIVnF%2FgeF22AqstUXvD6xim0czChOKy3DeTKhNsov7QTLj3djSiVXJSDyOfE5K43Nln8mqBiQXmk5UHee7ly%2Fe18qSeaKS%2FUrFrqiG24Rb8tKjfPSclVryUDM0fY0H5pB3Ch5%2ByRLAzjFKbbvuUezNRWeQIffEnK%2BvC6ct0cSj9Re1qD1nGDk7GNgyx6GPO7WLYf1jsS55K6MF2gowc50YT0cpj9kbrnpvNU%2Fx94P3d6YIdoeDWe2yLa0PLLAQaBajJGaVo6WBeOZl6U4P%2BhlIR%2FzhaG4s0cnTg7Sb48TawBMbIPiPnRhxp7AkhUjHspoB6YNEBenaYCeLLrKcglcKnsjVUHXI0uPakJr1MyFYQDe7P7snuVtBvYEqjeDA0ER9znbibXw7hycILtAczYt0BPGoC9MsfPd8JGzBzw93IK91bPbSm%2FxoWI3PJCar%2B14LtFVc7VFHWC1qNUA6JDyu7pfcMIkQ6ocwtcrjvgY6pgGVTPMIFYj%2FZ4ValOV%2Br5q4jCPo8NxTNgo%2FkXD%2Fw3fuw9TLhpLCQVq1rjmpECCs49nrWxzHvhSthoZV7iMKdOma%2FNc8KZ%2B3trPi5yWM%2BrOmwWuRiHzBVvtkL3aTgkRGRCIEfTLOnO2YaDWrwLDQyf%2Fpcwj0J9nUCojDlDWAHWZ6SUHTJG8r%2FByv369OI6pWsT2ERvanL6Xg4s4K5NCPGsOy%2BkGCUoq9&X-Amz-Signature=9bdf82a86d9b14a432d19d2bd86624158b833d4d1278cf64eeba40e5de268f06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3TXE5O%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAabFakDYwvk08lVKGW3V63Y1Dp2cCVwV7uI9yjPXPLwAiEA1dT4YBgtFlVNxXE3ymxLi62Klw8JQUtyJCsAbc10THAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFIFV0WqObqGw9p%2F0yrcA7cms9YEncMflxqL7NUD36Rsfc6Zthhd4tig7GO29ogvxUH1VdlkwqubgqY4eowM14O%2Bugd5PaNcwxX9x4mBylkj3TJ5X8oHjR9vBkQzkzOh5a8yhITy%2FZiYe2HrfhOU8QKR5tzIMr2gUoy6nr%2F2EIjEWYjfxAxvQM3r%2FxaRCZzI27TQwnyvq6l7s9XTg2Gve9xmaUNEBjgKGw21pzaeoLWaxdTi%2BWKbsqvPkqVlsGkvA14xtOBYjan9KXgKYueiW4RQkRtdM7u3VzpdaTnLj%2FBxw8p1IzNH2IhjoPsOT%2B2u6fEN35SFQ5fMp%2FQzA5WsqhpTJl%2FUU%2F6kqnskrqnnlZVuZYk7DYkE1ZR7VOYoSMuqPcirjvAeQtGDKo%2Bc1S0iSfOTV%2FVzIv%2Fs1ZSsxysUn9uBCx07nYkSZWYZQ2FVJwHCOn4c%2FHDRI%2BSrc9WLOWNvd1MkibofXaBQiwyQ7WW2glG1qhK5YVmsinn7KQwwSX%2Bd%2FAMyOQJIEz7r7r7x61RmOHQvaTdZ3fZ6%2FPmx4ZSP%2BLDvHqw7YFtIUd39XQ48bGXpXFB5pZU4Ta8cUohPxIx0yhVjCR9fHOF2YfkWwyqOTV7Ft7kf83vG%2BKggnxHycfEQmHR44r0xg3e9lWs2MKXK474GOqUBflZIVbAjkPUZIaPTr%2FlNLUfOV1MruMFLtGCHrsZ64EgT6%2BN1XeiSZYfYHaRzoch8Bniie712aOkt1vfuwH%2FhBnYmIdxYpq0byOBu%2FQDtq19kLdRi2XmR%2FbcQY6Sbv0YdJi25zFJnQm3Dnudd4IdlPpwBW8i%2B6ohVPNMUjEbTOrOE7JWxR2rf%2F4EzZxQjY8%2FMmMUJTxtbWybYYWleAqcA%2F2eVCCW2&X-Amz-Signature=789bde31e31fff4dc760f9e5c9b400f3ef83e3ce30a6203e1e48359e8d34c716&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
