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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJMMRYI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDqF1imQzs02%2B8rKpN97DHeYmxEX9C%2F9RbddI5uXbMzoAIgKWYMsxu0BQ7bfDRsW%2F8x14iFxVEF8QdSctoqePHuQEgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpYxV5O%2BrYGi2ahUircA9hcZyL5JSv7nTGlPZAed7j%2BCSKRLbt%2BmIAg%2BeofRV7zivjyn6k9D9isZFWGhD0bKYYxLhlVXc4gf5MtwTORuUWmfUKdI4QFO1Nd%2FQ9IXmLSi6g3Z5%2F1HwSW4pLcWq3j%2BzK0DK004l3IdPoQdPYjS79k5z6rYXZ65aYH7v25FUaZcFvaz1EUpFQvw2%2BkyLogcKGvUM%2FromDQc3SyhYEbErANlxBdgZW%2Bq9ZbWtFHo7XPVEWFksH3Pkqm2wmzPZNNsfV4O07GfdwO3VrcYeVD6xho4KwY93Hf1tL9Qc8HjYn5G9elUzTTAQFZa5X8QNtaWJF2z2aWQ1wi7f9tnu4T9Lgw0VD4Jjyn4zxn0XlO9lgpfxnhhkHbodvFfNMBvKfKWYtcW7p7RQsJg1whlRmm4V8ViZohanhT4bVDF7wpxteX8jmMBQcvIKaLjTfh8Vn05vsqB0HV2m7u6K4APP9Bsw5aHD1VQY5rk9iIBjJ1F8lqmazGWUitlEy8S1Z1LmDadvnLFtAjqqsfwKGOz1G6COXgVXuAPGjd%2BsCgBvHooFcaDjsNPV4EHbOyq75uSrnHxo197hNWNa%2BVG%2BgLO7%2FTACZVRvpumWBwvr7ry8Rx8BsWQzU0EF3ZfoK4Na7uMNjSmcAGOqUBXwsikzwdu7puHPle9dN1PbSTE4FoZiDivzNbMBCmvtpWgVvQCTSYQjXdUGIMzyQDOCi9VigOI3TgBJA95BLPGcm4LYPSQH%2BFM8mFkDjAn7bQ0aqB0bC1i5rmQqikbgLo%2FpT1mYFI3sV6KTXhn1j9bYqNC74lq1zCFpK%2F1Pmu7c4GzKMwGDu9q1F0MXyjbCGyGr%2F%2BgmdcAi3lnMkYCIwCWfOyxrx%2B&X-Amz-Signature=873e50c9c5c7abc8c537bcf1c357e0513f6d3897321145a64fa54815fa692253&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJMMRYI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDqF1imQzs02%2B8rKpN97DHeYmxEX9C%2F9RbddI5uXbMzoAIgKWYMsxu0BQ7bfDRsW%2F8x14iFxVEF8QdSctoqePHuQEgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpYxV5O%2BrYGi2ahUircA9hcZyL5JSv7nTGlPZAed7j%2BCSKRLbt%2BmIAg%2BeofRV7zivjyn6k9D9isZFWGhD0bKYYxLhlVXc4gf5MtwTORuUWmfUKdI4QFO1Nd%2FQ9IXmLSi6g3Z5%2F1HwSW4pLcWq3j%2BzK0DK004l3IdPoQdPYjS79k5z6rYXZ65aYH7v25FUaZcFvaz1EUpFQvw2%2BkyLogcKGvUM%2FromDQc3SyhYEbErANlxBdgZW%2Bq9ZbWtFHo7XPVEWFksH3Pkqm2wmzPZNNsfV4O07GfdwO3VrcYeVD6xho4KwY93Hf1tL9Qc8HjYn5G9elUzTTAQFZa5X8QNtaWJF2z2aWQ1wi7f9tnu4T9Lgw0VD4Jjyn4zxn0XlO9lgpfxnhhkHbodvFfNMBvKfKWYtcW7p7RQsJg1whlRmm4V8ViZohanhT4bVDF7wpxteX8jmMBQcvIKaLjTfh8Vn05vsqB0HV2m7u6K4APP9Bsw5aHD1VQY5rk9iIBjJ1F8lqmazGWUitlEy8S1Z1LmDadvnLFtAjqqsfwKGOz1G6COXgVXuAPGjd%2BsCgBvHooFcaDjsNPV4EHbOyq75uSrnHxo197hNWNa%2BVG%2BgLO7%2FTACZVRvpumWBwvr7ry8Rx8BsWQzU0EF3ZfoK4Na7uMNjSmcAGOqUBXwsikzwdu7puHPle9dN1PbSTE4FoZiDivzNbMBCmvtpWgVvQCTSYQjXdUGIMzyQDOCi9VigOI3TgBJA95BLPGcm4LYPSQH%2BFM8mFkDjAn7bQ0aqB0bC1i5rmQqikbgLo%2FpT1mYFI3sV6KTXhn1j9bYqNC74lq1zCFpK%2F1Pmu7c4GzKMwGDu9q1F0MXyjbCGyGr%2F%2BgmdcAi3lnMkYCIwCWfOyxrx%2B&X-Amz-Signature=5581aa77c972ffab384c88006825923bd3550cf1081ee978ae183b937f0d37b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKHQ3G7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBlS5Iw9BG%2FMDrJ%2FKofkQcNJYHOwGMfyNMU2tC008S3qAiAYkaVLARUz9pAtRDdE1uQf4H4Q3UL2B8HPrjK6fN%2FJdCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZSECQCYJ5Y4qpQgcKtwDXKie6GDzPjfz%2FuL66Tvx1zQDrGVleYG%2BhuEzGWc46LBxBQ1r%2BJJpuD%2Fcip825fT8y0B3OnaKc4SXfJkKNlfD3sG2%2FLNoirSjKZWR5LQVRydRTuLXStcpNu4WSP%2FrQ3O%2F9PGckolZlpZLH0Mlrwr8WP%2Bmkg%2B4Y41Uu0JRAPB0cilSb76Ld5Mtv%2FYCFZTdFnthgY%2BuFkKhGLhcRBMQ%2FmA%2FtLgscj1a2H5SH%2B2sm%2BKqlmTEDq40UuU5yK02U0JEd5dJDlxxOZXD%2B7E%2Fkq9C%2BELQHt5cM1phHmH7SL73mXPqgrvrPaX2gtqwNAtIldlc33iUhh6W8o0gwfeH%2FU4QVXujfvspSZMPd4gpjLqJRhbl%2BL6pgOgvRkHpQv23jk0%2B919ucCjOfX5TdRfz6W8kGULasEu7zjKNoSKA1Blp95nKpnKPKUD0yolqBP%2FAVCtkuw4wBvVuGiGtLsdV1NcP8Md%2BPnHC3r4RpepSKPRFYM8h37orfudpDeKlg7KghX9FHQc%2BqG9x5klNRFxaT0Lyy%2FHJ%2FKT4DkaH7Gk9KW6oJUbGRa0RTOGfLOfwKxZfcxLl3fd0CmJHGidKu5KaLIrLr2mc7AFlEjr%2BAkgo0aMrNEBNMIWWzlHwxhb2p9hDbI8w7dKZwAY6pgH8gwze%2FSEfgLCk4f5Ma6w95L7g4egzp5sEEI8cnkxbdj5qH%2FpMhx0NvrzQS2tcfSnxImxJvqlp1WjuvD%2FzVaix84H175o27FxSszgupHp9UUSYBiNFqbyv7vd8er0Q22ioFkmF%2BVk4bf5UaOTj5yHVjVN%2BSUJZCq0ktPk5yw6gnZUinmfQuYx9BHDdMfD28EDZqBaY%2BMsfynIXoqTaFQ4w06ffs%2B7p&X-Amz-Signature=45fcc17b13a07db55624f89d69277cb97c83b6dab2b3a1335eb2c79b11378a36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCTGWBTB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBoIM9EeNCNg2QfQ58WLhHX6W2wNVL4yW%2F%2F6pvffAxW3AiB7E7n0%2BSEjr8PIyqsI7t6EYKvFtIR707gShqw1HrcU2CqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0jLmT6jV9vmV%2B9O2KtwDyQUj6qhvKpI%2Fzg24nBXOH0cw%2FYaBCtratfz3QQbd6IlOcTwYMuWVo0amyrLGYsH%2B972e0FpliayWVkArmZLFncUiLrZ2QC8P7JOSAygDUoOYNAhWnVtrx3RaRs%2FeitDP%2BhBMDe8lIT7MyNUmGxGHOa%2BxYiCPmCtTRtHG10eII%2FaYTYvN0kzIkIc918rljwqCMGZzUeuZUkS4p2hiwA5xpg9Q0Hcs4mfRCnXj4i6It%2BfCvR%2FoPAfArtJua7XSKv0NksAXk%2FAIZT0wPQMl5u8SAqJWfGertgxa8WQblwyl1a%2BU60R902UhNgYt5zCNU3FWhuqBeNXh26uGfhqud3uJiu6A7bY0sguFRweQMxSCB0%2BlHLK6dOcOi%2FjKuVeiL9vvX0%2BdgwXQNj2B3JWlxKbz7VWH253eh3U3BeBh4sKoxPt5%2Fm7%2F8bh3OLiegZ4FzXG0vNlYzeb3qfuzjwVyokGQHj8YqhbWsEXRcAT2zATZqKYqlxQcD67h1YMsnS%2FJ2x1UMh7twW%2F%2BuRmuM4ytz%2FisH7rZyfeFjLCzc5%2BXfs6Nw%2FB9NeCdTfP0g73tOIEiBR%2BDWANtekwkMdhKvEmjyMwbQjne3TD%2FgQpP%2F%2F8U9JJIoOdtVYl6whc%2BGZn%2Bji0w59KZwAY6pgFTYHznf2DlmYOZQ4ObyEATo5Qm2bo3GO7A1goLSrabz0WE5XkkVqIYRcUwjV5kMbuK0bhjOjZrDZMsChGl32JCFovZdQrDHSil59H1WPAvObHTPSpOIwsq7O%2FpHIjgGTrWT8s8pbdDqImqG4N7V%2BXmmxqN%2BZZc%2Fs15q0vJluHUlaBYXh4oNrXO1irT9laStijnrdjetyVJ6spN3oOZXA1ILX0FhChr&X-Amz-Signature=72048fe8b2258347ecde4b1e629d8137f65ee61d349126b47f70d815316a4531&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJMMRYI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDqF1imQzs02%2B8rKpN97DHeYmxEX9C%2F9RbddI5uXbMzoAIgKWYMsxu0BQ7bfDRsW%2F8x14iFxVEF8QdSctoqePHuQEgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpYxV5O%2BrYGi2ahUircA9hcZyL5JSv7nTGlPZAed7j%2BCSKRLbt%2BmIAg%2BeofRV7zivjyn6k9D9isZFWGhD0bKYYxLhlVXc4gf5MtwTORuUWmfUKdI4QFO1Nd%2FQ9IXmLSi6g3Z5%2F1HwSW4pLcWq3j%2BzK0DK004l3IdPoQdPYjS79k5z6rYXZ65aYH7v25FUaZcFvaz1EUpFQvw2%2BkyLogcKGvUM%2FromDQc3SyhYEbErANlxBdgZW%2Bq9ZbWtFHo7XPVEWFksH3Pkqm2wmzPZNNsfV4O07GfdwO3VrcYeVD6xho4KwY93Hf1tL9Qc8HjYn5G9elUzTTAQFZa5X8QNtaWJF2z2aWQ1wi7f9tnu4T9Lgw0VD4Jjyn4zxn0XlO9lgpfxnhhkHbodvFfNMBvKfKWYtcW7p7RQsJg1whlRmm4V8ViZohanhT4bVDF7wpxteX8jmMBQcvIKaLjTfh8Vn05vsqB0HV2m7u6K4APP9Bsw5aHD1VQY5rk9iIBjJ1F8lqmazGWUitlEy8S1Z1LmDadvnLFtAjqqsfwKGOz1G6COXgVXuAPGjd%2BsCgBvHooFcaDjsNPV4EHbOyq75uSrnHxo197hNWNa%2BVG%2BgLO7%2FTACZVRvpumWBwvr7ry8Rx8BsWQzU0EF3ZfoK4Na7uMNjSmcAGOqUBXwsikzwdu7puHPle9dN1PbSTE4FoZiDivzNbMBCmvtpWgVvQCTSYQjXdUGIMzyQDOCi9VigOI3TgBJA95BLPGcm4LYPSQH%2BFM8mFkDjAn7bQ0aqB0bC1i5rmQqikbgLo%2FpT1mYFI3sV6KTXhn1j9bYqNC74lq1zCFpK%2F1Pmu7c4GzKMwGDu9q1F0MXyjbCGyGr%2F%2BgmdcAi3lnMkYCIwCWfOyxrx%2B&X-Amz-Signature=6d0b72d1fd01376a1a8e1f5839f695845fb303070e4e93752449d5484ef7d86c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
