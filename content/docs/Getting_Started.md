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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBWEGUK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGKbPAruHmtDLBcapnvA7md4OTnjZuW%2B04vmMYgqgdgQAiATAMuJSyZ7XAsDH7aJhW5E6LviyYYb67199tEktQ%2BL8ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn1qChbhj%2B6lNNFCnKtwD62OAtuxpKZQTrQN13OFnH8bhN1cMqX3dJYQwTJ8TJ1YHp61QtI2RlMu8RWaMn4eX%2Bb3uXOyl%2FdTBJU4penWqs8u1HF9vIvZyYwIsa0BNLZckBtbom22dQ97cdw7Qzremv4SbmnRkN6TsRkNdeHFYjGSadicpk3sZmz0fAtq4riIRko8AWmj6YlbmY%2BCaDPvSHWptPC0p9AshYNSP7x55BJwzBcObc3jS1y5SvobEWZFyizxuT%2BybujG2tfS0RwFyqlklI5JnwkduWvP4wkJfBXKk%2FzIK5SuM82zbTjQDcwaaOJXpq5DUKzB1JruAnrxFEQys2KUZxt14Q71W9mTi9LLCjEYxFcITfg4djhQxkJpC36R0ktf5pysHjwN0ssks9XZZNvPy1Y9Kvo%2FLNBya%2FZ2UCJm6OuRD4MA01eayf4%2FI4OKlsufdjhc8dRzy11yFDokvVADfAp%2BuAKf51OHORLUoqMjGjnk5Y5xc4Mi0yN6Rue3zoBUAClZVsIzHjemWOKWvrG9TKbzEW5O4lm5cN67fsoSs1is0lU02QDGcdu1RbMBiFu5LFhdN6XbjtMV1V1SZ8PYFBlp2S4xU0hYht%2BBMo24me4G%2BCfSAaUp3ybC2E7HmLzmpHd81RN4woK25wgY6pgHHfN5KB0X3i9Ieokz1dC3bTy2eG76XaR%2BW8noc%2F948vZKuExnsT5uNvx1aPlDpW5pyM8mkPsbErO%2BXoURH2lS2r3mHqYG7Q8WQxtLxzcW4RSLyWFYrLCPHVTOSPqrWirajW4WEQJNRJkXw8uhfZR5gxMiuciD0nXio6YvGdMmB7PtOLn9XHvgrGjWi8AQm91Gddp%2BaPUP0hdZMdWCRHMx96Ziz%2B05F&X-Amz-Signature=8cb3ec3cfdc6d1a7b01c76703c64730fa7593631d1f423d9ab80bf2d18f59ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBWEGUK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGKbPAruHmtDLBcapnvA7md4OTnjZuW%2B04vmMYgqgdgQAiATAMuJSyZ7XAsDH7aJhW5E6LviyYYb67199tEktQ%2BL8ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn1qChbhj%2B6lNNFCnKtwD62OAtuxpKZQTrQN13OFnH8bhN1cMqX3dJYQwTJ8TJ1YHp61QtI2RlMu8RWaMn4eX%2Bb3uXOyl%2FdTBJU4penWqs8u1HF9vIvZyYwIsa0BNLZckBtbom22dQ97cdw7Qzremv4SbmnRkN6TsRkNdeHFYjGSadicpk3sZmz0fAtq4riIRko8AWmj6YlbmY%2BCaDPvSHWptPC0p9AshYNSP7x55BJwzBcObc3jS1y5SvobEWZFyizxuT%2BybujG2tfS0RwFyqlklI5JnwkduWvP4wkJfBXKk%2FzIK5SuM82zbTjQDcwaaOJXpq5DUKzB1JruAnrxFEQys2KUZxt14Q71W9mTi9LLCjEYxFcITfg4djhQxkJpC36R0ktf5pysHjwN0ssks9XZZNvPy1Y9Kvo%2FLNBya%2FZ2UCJm6OuRD4MA01eayf4%2FI4OKlsufdjhc8dRzy11yFDokvVADfAp%2BuAKf51OHORLUoqMjGjnk5Y5xc4Mi0yN6Rue3zoBUAClZVsIzHjemWOKWvrG9TKbzEW5O4lm5cN67fsoSs1is0lU02QDGcdu1RbMBiFu5LFhdN6XbjtMV1V1SZ8PYFBlp2S4xU0hYht%2BBMo24me4G%2BCfSAaUp3ybC2E7HmLzmpHd81RN4woK25wgY6pgHHfN5KB0X3i9Ieokz1dC3bTy2eG76XaR%2BW8noc%2F948vZKuExnsT5uNvx1aPlDpW5pyM8mkPsbErO%2BXoURH2lS2r3mHqYG7Q8WQxtLxzcW4RSLyWFYrLCPHVTOSPqrWirajW4WEQJNRJkXw8uhfZR5gxMiuciD0nXio6YvGdMmB7PtOLn9XHvgrGjWi8AQm91Gddp%2BaPUP0hdZMdWCRHMx96Ziz%2B05F&X-Amz-Signature=d5734aab81d25f8e206ea19a9cb92e9b18b33febd22bdda4a083883fac9d4bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBWEGUK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGKbPAruHmtDLBcapnvA7md4OTnjZuW%2B04vmMYgqgdgQAiATAMuJSyZ7XAsDH7aJhW5E6LviyYYb67199tEktQ%2BL8ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn1qChbhj%2B6lNNFCnKtwD62OAtuxpKZQTrQN13OFnH8bhN1cMqX3dJYQwTJ8TJ1YHp61QtI2RlMu8RWaMn4eX%2Bb3uXOyl%2FdTBJU4penWqs8u1HF9vIvZyYwIsa0BNLZckBtbom22dQ97cdw7Qzremv4SbmnRkN6TsRkNdeHFYjGSadicpk3sZmz0fAtq4riIRko8AWmj6YlbmY%2BCaDPvSHWptPC0p9AshYNSP7x55BJwzBcObc3jS1y5SvobEWZFyizxuT%2BybujG2tfS0RwFyqlklI5JnwkduWvP4wkJfBXKk%2FzIK5SuM82zbTjQDcwaaOJXpq5DUKzB1JruAnrxFEQys2KUZxt14Q71W9mTi9LLCjEYxFcITfg4djhQxkJpC36R0ktf5pysHjwN0ssks9XZZNvPy1Y9Kvo%2FLNBya%2FZ2UCJm6OuRD4MA01eayf4%2FI4OKlsufdjhc8dRzy11yFDokvVADfAp%2BuAKf51OHORLUoqMjGjnk5Y5xc4Mi0yN6Rue3zoBUAClZVsIzHjemWOKWvrG9TKbzEW5O4lm5cN67fsoSs1is0lU02QDGcdu1RbMBiFu5LFhdN6XbjtMV1V1SZ8PYFBlp2S4xU0hYht%2BBMo24me4G%2BCfSAaUp3ybC2E7HmLzmpHd81RN4woK25wgY6pgHHfN5KB0X3i9Ieokz1dC3bTy2eG76XaR%2BW8noc%2F948vZKuExnsT5uNvx1aPlDpW5pyM8mkPsbErO%2BXoURH2lS2r3mHqYG7Q8WQxtLxzcW4RSLyWFYrLCPHVTOSPqrWirajW4WEQJNRJkXw8uhfZR5gxMiuciD0nXio6YvGdMmB7PtOLn9XHvgrGjWi8AQm91Gddp%2BaPUP0hdZMdWCRHMx96Ziz%2B05F&X-Amz-Signature=34eba53f18c0717e7e846ef1741236258f168b251e62763ce4905f8ec24b6aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZB5VICB%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCID%2FF6BToZFO4gs%2FUHURlZkgvmcoU%2B%2FlOiEM%2BSWh%2BQad5AiBqgE0oX%2BkH92Z9%2BMqHtFb8Q5c%2Bbz%2FUzHztMG%2FPzuyVdir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMscznSpmoSrZSnMz6KtwDSZh4nhQq6jYMgvq4PDXZ1pcUORerKmtc7RSD2n4mfyrclWYsg1oRdnZz038OJRfa%2BTA0XYDZ9j81eHjWnyX4MZgSed3kYuzkvdT7po2x8qTqs5nD0K5hZze1gwnMu78cfFbYeMeIVav56h8m7%2Bi8IBQsiigO2vO9ADxgdfqp%2B9A61zdM2nQ7zpKMZhyCMwyP4pNjYGr6nehmbbnPzBJvle1bm6yEULh7bp8L1p9CEHoLO2rVTL7aa2ssN%2Fl8qASF0agn1cT09xotbxrWLzYIagCGWVwB9mkAiR4V3alMmzBCQjJSVy5iNc3q8m%2FSqZMi9hJ%2BJ9HAEFtd12xB9%2FHcJYvCWTFopXChUbUoPjay%2BOaedCB53YA3y81hvwC3Abpl6ds4dYbEtpJJfNiryNNOYMkeyw8l8DlGoxp6fsHSPozW3of64dV5rWPnlv8m52FfX4XHhtgqQ2WNipBbxX5RfzUKF9OuEKNOFzhjCG%2FfYKdSaWa4rWj5RHmH31TN1DJoNQ0%2BKEb6xxzG3B9oeNBgMcL%2BO6sYY6nQ0WKgQWgyl5ZVcB5sBZY0J%2FZYhZEsaToDMe3YIb6Ib2I%2BTelUzlnzgRJqR04dI31Q3GU0TC8WmYSLE12MeG4Bzl%2FHy1ow86y5wgY6pgFcHWtb0cV7QyYeZaEuwinRO%2F7tGWUEXl%2FbXfkaUJdBT8%2FCWHOLRnA6EyG16GkKryDy2g%2BUMtHt96qpajj7p4yox9ls4LK9uehvlGTFgW6rXzLpeF1UZXkRBUGwQCfj3Go3L4cb9ay1nBIn4MikkZMH3F6IboLSQh1vltIteKJPNfSj3W%2B2pEIhbLCX9oVbuD4%2BMS0SM%2Figovg025Myohn7m3h5R1sP&X-Amz-Signature=846770cc73e1a574b69832fc15f8123c1bd3c77305cb5d7947f69e7f91a49279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PU6XPEJ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDY4BxbGTcL6DukoGTq3hLyWyxDTeviWXwMF1P%2FkZQC2gIgM4LLsKW3THSkzNfFpE%2BXqxzy1SFrzAHy6zxRyHRht7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKaNIJ%2BRgxvkqkekOircAxENXt5vRxXcUJvuwt9Dn2ExSskX4PQIZMWzTWkbsQql5W%2BphTWcLUSutgg783J6YgYJf8jkz9PUIDSxDCQnsB1V8Op7CoM6oDszJ059xTefKXybgR%2B1ZOg%2FfdHgHngiuYWyT7f7ZqDYwS5J1GLshiCBPiu1V4%2BvQ84VStCBMWwliS%2F%2F1alziOrdiiaFIzqzJHhoouOtNjZ%2BXlvgrQut%2FmtShSFFVFd8W3RVlM08mfmUz5EVe2Cahrc2NMMXP1FfNc%2BbvY9eHzKNm%2F8iNAlTuIXUCV9ocebNDXHxYyfVBDtsbxeivUUD4AX22AkDZCsXqdcmGocQ%2B4tqTc9NygRurRM9Zl2RaTXItXxgxKgEpsQKmWzS6kH3cRC%2FgKqh3J%2FNh7KOW%2BzlabT5wcEpZWES8pfi5u3rNCf4mdU8JndHif%2BA%2FN1iDiYKO5KTri%2B1ChFwOGgUQG4O9Q1USJ%2BLVS%2FIMCiislekYxz6J7TrVpncIfZ5ICGWySEgEpi2I7maAlw0yyt3gQnJpd1rFy8%2BNnz2cacLMuw4eLImzj3AjsXJjnlUAct4v56MGJfwiaIYhzn6qM7HKqzysnzOn2RKEFLyR%2BGMa%2Ffk1DtJMA6BCCojR82bXyatWCn%2F%2Bssi9epnMNzHucIGOqUBGik8cf8MUY8rZ7HGGqyEpVxwtTChCbxJHVqZYn9AYqJeqEzPqcR3qBZP52Ju%2F8%2FvCV24rWy5ULKs1YRzec7KWVp3Y%2FzXLFhS0Un2%2F82B4YVfO9L3LYHTZ8g3MIfADi%2FI%2F%2FNUVSfgQvyCaDCFiiPsDEKloOZC6y9lTpw5tdFARkrKQR9q3oJ1E0a3O%2FpjYKHyiHkSGUZReydEFBBHCeiJNcSxpZYF&X-Amz-Signature=b2a77ebd31cb5802388a0be4428e89be7d00758f671f9c3f7eba777a9cc96db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBWEGUK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGKbPAruHmtDLBcapnvA7md4OTnjZuW%2B04vmMYgqgdgQAiATAMuJSyZ7XAsDH7aJhW5E6LviyYYb67199tEktQ%2BL8ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn1qChbhj%2B6lNNFCnKtwD62OAtuxpKZQTrQN13OFnH8bhN1cMqX3dJYQwTJ8TJ1YHp61QtI2RlMu8RWaMn4eX%2Bb3uXOyl%2FdTBJU4penWqs8u1HF9vIvZyYwIsa0BNLZckBtbom22dQ97cdw7Qzremv4SbmnRkN6TsRkNdeHFYjGSadicpk3sZmz0fAtq4riIRko8AWmj6YlbmY%2BCaDPvSHWptPC0p9AshYNSP7x55BJwzBcObc3jS1y5SvobEWZFyizxuT%2BybujG2tfS0RwFyqlklI5JnwkduWvP4wkJfBXKk%2FzIK5SuM82zbTjQDcwaaOJXpq5DUKzB1JruAnrxFEQys2KUZxt14Q71W9mTi9LLCjEYxFcITfg4djhQxkJpC36R0ktf5pysHjwN0ssks9XZZNvPy1Y9Kvo%2FLNBya%2FZ2UCJm6OuRD4MA01eayf4%2FI4OKlsufdjhc8dRzy11yFDokvVADfAp%2BuAKf51OHORLUoqMjGjnk5Y5xc4Mi0yN6Rue3zoBUAClZVsIzHjemWOKWvrG9TKbzEW5O4lm5cN67fsoSs1is0lU02QDGcdu1RbMBiFu5LFhdN6XbjtMV1V1SZ8PYFBlp2S4xU0hYht%2BBMo24me4G%2BCfSAaUp3ybC2E7HmLzmpHd81RN4woK25wgY6pgHHfN5KB0X3i9Ieokz1dC3bTy2eG76XaR%2BW8noc%2F948vZKuExnsT5uNvx1aPlDpW5pyM8mkPsbErO%2BXoURH2lS2r3mHqYG7Q8WQxtLxzcW4RSLyWFYrLCPHVTOSPqrWirajW4WEQJNRJkXw8uhfZR5gxMiuciD0nXio6YvGdMmB7PtOLn9XHvgrGjWi8AQm91Gddp%2BaPUP0hdZMdWCRHMx96Ziz%2B05F&X-Amz-Signature=ba38eeaee15d0ede37f8bcfdddfea60577d4bd6e8fb40cf41972237b346d7c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
