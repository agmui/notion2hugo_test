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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BG32VGN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCTQyQK5q8LX0yoHOnMYQ15B99X8ivVyW5S%2Fl4HLYTe3gIgX2UPc8B4el8EqW%2FgzyPrVtjfNpEEq0%2BOuLL5N4EhFdAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo3n9Blq8686vMj4ircAyAlYd8eTXdmDjZnEhbDfhQvOUSAdFLntojee13KFhe1cgYDhdr2HDJinz0q%2BW4Ia7nzI1jBUgC6zcMaXmyFaajYnnb%2B7uqxlh%2FitYXfzVVM9I9bdp%2BYFLNmG9ubSG0vIdPM%2Bo2WoKN25UYMEXbbiF56VgbCplDUoTdWGy%2FbDybVZnwLPJBI1AOwe1aDTY3ZIf1bZRN4%2FbL01IBq7427XgNCmLNGyhfngYiLj%2FzRonVagyW%2F1blHAFInWzJ89GseEowJ9r0NDbx2kLf68hTHfcxM77mxBqYc7iu2plg6C7dosNmr6TdJk2qGDy3OE5YE0B31H1VNEH9X5V5Y3e2ooV2hcxj8gw8bbhA9oNPQJUcJb8ZlB55KFQk36cRfGLASsSKALwjOv1PCu6aG8JS4%2FLnzmbQjE9gKetxCDW2hMgpNEILhhEOE9m7vaQO5jalvGxoCpHNDHxRMKiYSt09b%2Fg4tvTQIagi25HLub1wsphnDx1JOxWGVaajQ%2F2q6eURU5A8hs%2FrzQMWCC7CXA%2Fwi%2FT%2F99HXU%2BDO%2FmCMAjo3UtJsWRPdT%2FdtRQ9OXQfJmyixOdtTJWZ%2FdluAtxE6emBxca4jrlusHQvYtztYeMpYc9p%2F8P2wFm0goKb34BkBHMPe75rwGOqUB7Z4LIpMMKi3wO4sPwUobbIERfTIPcHAiJOOtvBAis0DmDPq87X06c9v5xxnVecyNBCp15RnatbmpusER1%2BohnwGCN4lWBsJjPOJoI79F4qcvjqHfCGjWJLfKWfp0%2Bo2jeVjTk7l%2FAp9kHwVwZaIkT3ZWmM8Bh%2BV9w4weRYotlj1TAFfW3%2BPtcgLthewmtD9F%2ByTVgULoPw7%2Fua2m0FDkdxqIfYeR&X-Amz-Signature=2ebf3b8f7c43ee13f590e1992f770f30506c155d03f790ce0b0c4b9a1f678a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BG32VGN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCTQyQK5q8LX0yoHOnMYQ15B99X8ivVyW5S%2Fl4HLYTe3gIgX2UPc8B4el8EqW%2FgzyPrVtjfNpEEq0%2BOuLL5N4EhFdAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo3n9Blq8686vMj4ircAyAlYd8eTXdmDjZnEhbDfhQvOUSAdFLntojee13KFhe1cgYDhdr2HDJinz0q%2BW4Ia7nzI1jBUgC6zcMaXmyFaajYnnb%2B7uqxlh%2FitYXfzVVM9I9bdp%2BYFLNmG9ubSG0vIdPM%2Bo2WoKN25UYMEXbbiF56VgbCplDUoTdWGy%2FbDybVZnwLPJBI1AOwe1aDTY3ZIf1bZRN4%2FbL01IBq7427XgNCmLNGyhfngYiLj%2FzRonVagyW%2F1blHAFInWzJ89GseEowJ9r0NDbx2kLf68hTHfcxM77mxBqYc7iu2plg6C7dosNmr6TdJk2qGDy3OE5YE0B31H1VNEH9X5V5Y3e2ooV2hcxj8gw8bbhA9oNPQJUcJb8ZlB55KFQk36cRfGLASsSKALwjOv1PCu6aG8JS4%2FLnzmbQjE9gKetxCDW2hMgpNEILhhEOE9m7vaQO5jalvGxoCpHNDHxRMKiYSt09b%2Fg4tvTQIagi25HLub1wsphnDx1JOxWGVaajQ%2F2q6eURU5A8hs%2FrzQMWCC7CXA%2Fwi%2FT%2F99HXU%2BDO%2FmCMAjo3UtJsWRPdT%2FdtRQ9OXQfJmyixOdtTJWZ%2FdluAtxE6emBxca4jrlusHQvYtztYeMpYc9p%2F8P2wFm0goKb34BkBHMPe75rwGOqUB7Z4LIpMMKi3wO4sPwUobbIERfTIPcHAiJOOtvBAis0DmDPq87X06c9v5xxnVecyNBCp15RnatbmpusER1%2BohnwGCN4lWBsJjPOJoI79F4qcvjqHfCGjWJLfKWfp0%2Bo2jeVjTk7l%2FAp9kHwVwZaIkT3ZWmM8Bh%2BV9w4weRYotlj1TAFfW3%2BPtcgLthewmtD9F%2ByTVgULoPw7%2Fua2m0FDkdxqIfYeR&X-Amz-Signature=cdf0a4b53b3dd9e0604fa263472c5abd2b2b5938eafc1fc8d062c4feed2eb879&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TIAJCSY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIExyYe%2FO7Z4iP0d%2BZ0vSz1iw1ES55%2FWghp02h5Pj%2BCrRAiAVbPUp5zW%2BUZnsiwXMLYTyiL2bcZR%2F79aJBBNTFlUCVyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMDwnbo2L6Vl9QvbZKtwDdzzt9%2BQY2oti2ax0h0IFVmrdM1MfI%2BKmYiaI940aTmmFNz4l9Eu3ppMOQId9oIZp7gVeQYYm8nYAR8blfa8pv67wpHcqu8hlm5GuUmdDxNDtRSq0W1awlN7gQhpVV7fNZ%2BiFV0GT5criCmB5K6jAH0NwjVJrfPlplmtacgtm5l%2FW3QAhxwWZ9f14y9HYe4oagpcFCjTm4nZoZqWmCo8q1%2F6ioJiROeD6sQlyk6pC3sFP6wC245tHKaaBtqQLqQrox5W%2B1gvqjS3nDGQuQ8l6AieNCFukqifZG8TPRdWygJ2j4NEOmwgPbbkD8eOVLZ0FELCfdBD1abD804tYbNQvm%2B%2FL%2FnjM5sz59stw0zhyZ1re2fZOYAYzADrNxBAnI%2FcgQ%2BCt5v2lZ1AGgOJwNbgKoIECJ0lVfOIuXG8aGTCSmfodn2MrpPao0yjaMNSj5HqHsKAGju1eCRdXIkwSRfTiU3McUXwuBespHqZBW%2FkI0TdvhLtvI7bOeJmCkeK3H0pierhtxFJfyojT5zIYtjQRIeeBdnXT4IqCX6Ak0mi7uJc54I9HH7%2BqQsFLK2KU0iaeEPQqvMiSTDitsfLFUe0zLFtpHrwQE5KExdnJXzwrUnXqfz1OHIk1WNjhLdUw77vmvAY6pgF%2Bxss1RrHo0xXgvqTxsID4YHd8d1mQbow8KlDskZ1PiTZ2jE%2FvxDTgHKYu8bOfa246WZgn9%2BiEwBrWCY6pshfXv7HNEvOkJT601z1FOKxs0tEjQ1%2FOC7weFQUpQhEwncxLouQUaBON8nI6SB8sdw%2Fn6LZq98m4tlLxeqDfm3AenD408gYpjeA01GdGU6tFW2GnEXCdH4TAccxp62aYLGt1Y0Ryd%2F%2F5&X-Amz-Signature=3f32e7510783272bab0c2ee419f88bc0255bf92e0c896a484ffe8583e8873ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IP55T57%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCqQqAEvi29qbRstpJNpsXns3RviyyD0xSEu1qSRguRKQIgBQ5nYZhu1i04MRXuqQWbU%2FsLCt6f%2BBqXtIF2Xr%2F7168qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIprsPAzkmuwGo%2BmvyrcA9iupMnIvfHper8Mx%2FZmRGpNxRE%2BR7nMloFvnM1jrw7sGme1qYTefDQSx%2B9NKJV5FnG1eJelDaO2HBtbYURtSav%2F3XlFfg7Rj8xG0kRL8BroGgyhGa2CTj815g2qqekdpC5FV4jhr2%2BSywhpPPfAYDr8Z%2FHbglq8V%2B3fcpe8mXWhs8AoCug%2FNffuU9x%2FlqWCpkvbRtN%2BjG0PwdqL3EBlPplXP4isx0AErAnwk7SFDRAsH7KKI3Svgef%2FfUNNtV7vFP63dVtaJxmntukvYqwRYG1wWNBWIH6CUNJKdeRNGHBCAK1llPkxATTzoS%2FB9J%2FM0bWobdKGnUAXOfhyHUv%2Bh73TEdup8u%2BvrW1I6lWvZVXA1zN4KrLe5o0h94sBqFMgdwueb%2Byb980qe9a33KnD8pjBF%2BebWKXHqyhnoqOMmMNr%2FF%2FFLc3gT%2Bpl83WxuUckfz8cP6iE0QCwPwKu6EcUx4pvusIzV679ZISbNSfh41ULeg%2BtLnywI3mtZAyriQuffZ1C5el6bRURz0tVQlvMNY2bKNaShKvDvnnumTy6m1TP1gXKFZe2gEGvE0dBnMILtzeEmoyS5nYpEiUuVwKklTXj%2FuX0FfB%2B6c3bc3Nt8MmmsK7dUBoP89vUaHVnMLO95rwGOqUBKWFxwKJKbfq%2FFLAmLlnqFu7Q6baFkv%2FxUmWSX6pDri33bR3ilDrRMhMMki0Oj1rbRPSo%2Bmgg1dSSPOLYwfyr7dvr5%2FInfZ%2FCEvhfEXPyhNC%2FlnJ28E9HscPD%2Fo4M6mlqUHG7uNtPM0FKQbzh%2BRcrbPePXLPqH%2FCbdMU8%2FMTrzR%2Bfp%2Bv8w3cX1Wed8KysBuIojbkaG9uRvY6bJdyjGNrlKihvxR3H&X-Amz-Signature=1cd7a0599d8a5cef65251dc37b4e1e770122458856e3153ec20b88f40b7984b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BG32VGN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCTQyQK5q8LX0yoHOnMYQ15B99X8ivVyW5S%2Fl4HLYTe3gIgX2UPc8B4el8EqW%2FgzyPrVtjfNpEEq0%2BOuLL5N4EhFdAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo3n9Blq8686vMj4ircAyAlYd8eTXdmDjZnEhbDfhQvOUSAdFLntojee13KFhe1cgYDhdr2HDJinz0q%2BW4Ia7nzI1jBUgC6zcMaXmyFaajYnnb%2B7uqxlh%2FitYXfzVVM9I9bdp%2BYFLNmG9ubSG0vIdPM%2Bo2WoKN25UYMEXbbiF56VgbCplDUoTdWGy%2FbDybVZnwLPJBI1AOwe1aDTY3ZIf1bZRN4%2FbL01IBq7427XgNCmLNGyhfngYiLj%2FzRonVagyW%2F1blHAFInWzJ89GseEowJ9r0NDbx2kLf68hTHfcxM77mxBqYc7iu2plg6C7dosNmr6TdJk2qGDy3OE5YE0B31H1VNEH9X5V5Y3e2ooV2hcxj8gw8bbhA9oNPQJUcJb8ZlB55KFQk36cRfGLASsSKALwjOv1PCu6aG8JS4%2FLnzmbQjE9gKetxCDW2hMgpNEILhhEOE9m7vaQO5jalvGxoCpHNDHxRMKiYSt09b%2Fg4tvTQIagi25HLub1wsphnDx1JOxWGVaajQ%2F2q6eURU5A8hs%2FrzQMWCC7CXA%2Fwi%2FT%2F99HXU%2BDO%2FmCMAjo3UtJsWRPdT%2FdtRQ9OXQfJmyixOdtTJWZ%2FdluAtxE6emBxca4jrlusHQvYtztYeMpYc9p%2F8P2wFm0goKb34BkBHMPe75rwGOqUB7Z4LIpMMKi3wO4sPwUobbIERfTIPcHAiJOOtvBAis0DmDPq87X06c9v5xxnVecyNBCp15RnatbmpusER1%2BohnwGCN4lWBsJjPOJoI79F4qcvjqHfCGjWJLfKWfp0%2Bo2jeVjTk7l%2FAp9kHwVwZaIkT3ZWmM8Bh%2BV9w4weRYotlj1TAFfW3%2BPtcgLthewmtD9F%2ByTVgULoPw7%2Fua2m0FDkdxqIfYeR&X-Amz-Signature=552cf8678815504aa701a359890c7abc246cbe9c27c7b0ef6b318f57bd70d983&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
