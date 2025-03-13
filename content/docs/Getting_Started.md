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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672QDG3NO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOZf%2BNnm2nMzZvzddCPDNkLe7W6YCCiKdxWnBBcVWsFQIhAJjUrfbsHxm5BjqV7T6BzZIy2xBFF8GBp4QNbC0ombgbKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWs2L3cT%2BHs4xsyesq3APvXNmMz4uf3PItMMsAcDSdjwu5%2Fc3PYTQNMTxXcFJyaxZQce4xkG08YIdd%2BPe0xdnmQXn0fREc5sWdWEB7gTskB0YLQkPaTwWOX1JYgaOc%2B0J3Kn72A5qjcqRo7fUkMdHVto4bMBMr%2BbLYPUB7ZHQAJptJknKWa97dAYrNynsKU4S8C35TmQcod5D0jE8gygnUM9Pcg%2FqF0PtfX5ntSCtRWrEvp7E5bYN110QMfsOnhNQU2gGjWDR6r9IZocrLGur6rwTN83H%2B5QMybeOMMjQWSa6gYmyZlvOYru7H7dFk%2B2PBi8bnBdYBGe5X64E7L%2FZ2EAYY32LfeDwTCOWbxuwYJfrgCPEZQStKN5CmvACcPBgtTMmV5tyhM5Fyk%2B%2BZ6%2BBmOpfD0nZyyNnGHIRwsxPoYbUSX7dKAIEeb0%2FeI%2BQ9biVLFV7aj3zsA08G6bYO32qzPHz6KsMCsNLE0xYnkufxXReZ%2FZsYO4eecsY5dxSgbCPQf8usHzSD4Vyjv7hLUYoLDd2sTElyLtgUJueHihw5wAqIfy%2B0TH5GbZv9Ur0ibNbEtlhM0rVuRL1SxgC2hH9d0pT%2FQF%2F6Ure9CjJmRoljC96Oy38QpF1w87IfGH570exARIqTOCrb4MKbKDCEh8m%2BBjqkAY7oan6lgmM%2BMUMhxEQbqFLW9mIz3uA61dIdZGnuiKB1yXWvShsiGSD%2FnA8rYrCqKrUoECEON%2BV4bfYUcYCtNbW1mnIZ9RH7y8QSgQILhMKOm3Ul7%2BxuCsu8XA0OWNwpie2ltjXABW%2Bth5wu4Ga43E8dRwhcPNWUua%2BuIbEfOoWTC29vXMJHiCmRze0u7d17O0arvI4JQfUn8%2Fsu%2Bg2KngniqfqK&X-Amz-Signature=73e3604475ee5f72a42358c7b8821ea96cee73108f7d48dace2a09aeb570f395&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672QDG3NO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOZf%2BNnm2nMzZvzddCPDNkLe7W6YCCiKdxWnBBcVWsFQIhAJjUrfbsHxm5BjqV7T6BzZIy2xBFF8GBp4QNbC0ombgbKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWs2L3cT%2BHs4xsyesq3APvXNmMz4uf3PItMMsAcDSdjwu5%2Fc3PYTQNMTxXcFJyaxZQce4xkG08YIdd%2BPe0xdnmQXn0fREc5sWdWEB7gTskB0YLQkPaTwWOX1JYgaOc%2B0J3Kn72A5qjcqRo7fUkMdHVto4bMBMr%2BbLYPUB7ZHQAJptJknKWa97dAYrNynsKU4S8C35TmQcod5D0jE8gygnUM9Pcg%2FqF0PtfX5ntSCtRWrEvp7E5bYN110QMfsOnhNQU2gGjWDR6r9IZocrLGur6rwTN83H%2B5QMybeOMMjQWSa6gYmyZlvOYru7H7dFk%2B2PBi8bnBdYBGe5X64E7L%2FZ2EAYY32LfeDwTCOWbxuwYJfrgCPEZQStKN5CmvACcPBgtTMmV5tyhM5Fyk%2B%2BZ6%2BBmOpfD0nZyyNnGHIRwsxPoYbUSX7dKAIEeb0%2FeI%2BQ9biVLFV7aj3zsA08G6bYO32qzPHz6KsMCsNLE0xYnkufxXReZ%2FZsYO4eecsY5dxSgbCPQf8usHzSD4Vyjv7hLUYoLDd2sTElyLtgUJueHihw5wAqIfy%2B0TH5GbZv9Ur0ibNbEtlhM0rVuRL1SxgC2hH9d0pT%2FQF%2F6Ure9CjJmRoljC96Oy38QpF1w87IfGH570exARIqTOCrb4MKbKDCEh8m%2BBjqkAY7oan6lgmM%2BMUMhxEQbqFLW9mIz3uA61dIdZGnuiKB1yXWvShsiGSD%2FnA8rYrCqKrUoECEON%2BV4bfYUcYCtNbW1mnIZ9RH7y8QSgQILhMKOm3Ul7%2BxuCsu8XA0OWNwpie2ltjXABW%2Bth5wu4Ga43E8dRwhcPNWUua%2BuIbEfOoWTC29vXMJHiCmRze0u7d17O0arvI4JQfUn8%2Fsu%2Bg2KngniqfqK&X-Amz-Signature=9c392a1a03d9bd865a1ddc7a2c8006c0e1f23c95de953704c7813d95d1dd92ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CF2JYIX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOomzb%2Bl9QQtXIquiKeHFLpfAxeYWbodtRv4wHoK5bpwIhAIN1jwzEwcteHn1xKJYeIYf26sb0j8%2FDZntiabZj5hLSKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQZAzG8a1nCyudXewq3AMR9gGjAOmxhp6k4ybrmSdE0lJ7Z9FDA5Z%2B6A%2Fw%2FIsZFHkEz5xYffYAScemXJ9vggkLRnwNlBjHcpJS3FVVHnUggFyiQeUGr7ITcYPFW4%2FwaCA9g8a5b5bw%2FI%2BmQ0D%2F8M%2FwRsHYrIPSYYo6aRLKA16gYxSOK7pA%2FpRzNj4lOZBQtKKHj1NsTje0tdG0ylURmqdMCGKIBILEraWDSG4AFITPNqM5qXr8cx2H%2Fca0JDoxRXBD12UD2kr%2FSPBt9g2MV0zbzZ5LeN7bhmqaB%2F%2Fp5WaejomRYdc%2Foni%2BOXP30W2%2B8BK6sczA8ZN27SwkyB7I4CAN6bfNqfmM8OGQGuFvstCSIvEwqfv9g4%2FU0qNAI7xThTPT1XweYWIHODzV3nBSjUuwHzr4kfQ5qONt8lmSKltgiVjoTp8bAGZ6Wogv4%2F56JpjpqN3wF1eS2oOoRjH2wTimZrMxiLQuhn0R8gHR3HzEh8OID8o5nDLyMOQ45xVofBsQ9kAYXleQ%2BgX7ukmGo5Sw19sKRdtNOmflYfLf11TecSN9bnVfyZrTJx4QYiZsIBY77Bm%2BOxA4k7oHsjlaVtR5jnwink4zDNdN4%2BM1ThdOXmvqIAyWRKg7IZ6x0l2s3tUN9ml7%2FKVd2upuDjCBh8m%2BBjqkAVMWm2wPOj7DboNmevRgV2FKqFa%2BLPVlk%2FpER7Lu11rHcJFzBA09ZWhRGsV75aFM5yggpBsA%2BlIILPSx0Z3h1I8QK3vpyau%2BUPxpHbQo5ZgZsweNFjrWOVaKjBvfYSxBBYEpfmj7NWKvLvQRAx%2Fsok0p9JaErB%2FRGqF3K8Ql2uX750y413bXQh8kQS6qajzlL4vFy6aq%2BR%2BjDapkDV25y6MJM9Ji&X-Amz-Signature=4a7c2b7eacf33575ff3e2407704e907d64a2ef0be552425518573c4fa5c06d65&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NIIGMT2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqQNeDMW6rh7ObZVyEBPCsdjtHTnM4jMCo7EjH4UP%2FVAiEA9odSkoKYKWKYkTCZXsjvmmsWlj6TKDStPAkkh1FELscqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVDfvPdHoRCzUx8oSrcAyec37S3CS4qP4tZs6WmKNghbVIToT4mDweckkJS%2F1DHbJu8Y5OF54ob6NaRF49FdL52roeul1k%2F3%2BzZ5FLSMOhCCROItePMIBi2OLyoAW8rnNKiiKVCOggqcRceS0HvMK5ObetkzFDe%2BWnp9sy5ixbohOWA1gVTxfi%2FLVfXUKjo%2FZA43TSVrfsfYMJ%2BzWafR1ERpGh%2Bmgi%2BytcqZiEeDEp0yv5My8kk9pAqE%2FJjxgXALGV8ex0pEQzCMwDoq197umAzEWswNLY6s2rEZ%2Bf%2BnYdC4XQX7CHnXweSzFnnoMjFK0muAe84kEucXAGf%2Fp0AM8q%2FUfbiGxltEJWnX4uPFhaQNNNOJMtHWBi3MKYSR6SdYlT4lns%2BmP6LDwlN8h0oI2ghpX3V6XFWH3Zsa2xVBFXs%2BK6zp%2BxnVcNjRfmLRFrkR7d2qKxXJOpKVCGoPi0LeXe2n4YYYYQEFJOd23JIaI0tmm6qNOXjP%2FFNgXP0sImaNAA9elU5ksRMKc9bLxUoXLIf3YcoOWFPvi%2BvihEBDmNLrUSmfSqHpCrf9Se9jhXIO4sA7ytWJTIWUit9G106nSU0OLBJ6cTqpCP2cNRKrm9VFiYevXJb0mLKAhNHtXfjfDlVCimEdf%2FATRfZMP%2BGyb4GOqUB2HpbdBP71aC1H6VTiVgxjSnJKXmGMkyajB9G0htoqWl8Vwc%2BxlR0aOXtg8fOM9K2qCTTU7xWORkO7zESLXvICn408SYU6oKzwJCsuPCvZzhbsLymnv7YxoOsDic%2FI2I07aD%2B4eBLu9gfxI6vWAop2b8RZibGfctH7ISllnMgr21IRIl683smsNhg6Xu2TW09eCSqY0ESqktNV9qkLAf6hXlXEAuk&X-Amz-Signature=3f309dea07b638f17c98a98c07de7eeefe5bae0ea01648546a7d66cc85f2f48b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672QDG3NO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOZf%2BNnm2nMzZvzddCPDNkLe7W6YCCiKdxWnBBcVWsFQIhAJjUrfbsHxm5BjqV7T6BzZIy2xBFF8GBp4QNbC0ombgbKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWs2L3cT%2BHs4xsyesq3APvXNmMz4uf3PItMMsAcDSdjwu5%2Fc3PYTQNMTxXcFJyaxZQce4xkG08YIdd%2BPe0xdnmQXn0fREc5sWdWEB7gTskB0YLQkPaTwWOX1JYgaOc%2B0J3Kn72A5qjcqRo7fUkMdHVto4bMBMr%2BbLYPUB7ZHQAJptJknKWa97dAYrNynsKU4S8C35TmQcod5D0jE8gygnUM9Pcg%2FqF0PtfX5ntSCtRWrEvp7E5bYN110QMfsOnhNQU2gGjWDR6r9IZocrLGur6rwTN83H%2B5QMybeOMMjQWSa6gYmyZlvOYru7H7dFk%2B2PBi8bnBdYBGe5X64E7L%2FZ2EAYY32LfeDwTCOWbxuwYJfrgCPEZQStKN5CmvACcPBgtTMmV5tyhM5Fyk%2B%2BZ6%2BBmOpfD0nZyyNnGHIRwsxPoYbUSX7dKAIEeb0%2FeI%2BQ9biVLFV7aj3zsA08G6bYO32qzPHz6KsMCsNLE0xYnkufxXReZ%2FZsYO4eecsY5dxSgbCPQf8usHzSD4Vyjv7hLUYoLDd2sTElyLtgUJueHihw5wAqIfy%2B0TH5GbZv9Ur0ibNbEtlhM0rVuRL1SxgC2hH9d0pT%2FQF%2F6Ure9CjJmRoljC96Oy38QpF1w87IfGH570exARIqTOCrb4MKbKDCEh8m%2BBjqkAY7oan6lgmM%2BMUMhxEQbqFLW9mIz3uA61dIdZGnuiKB1yXWvShsiGSD%2FnA8rYrCqKrUoECEON%2BV4bfYUcYCtNbW1mnIZ9RH7y8QSgQILhMKOm3Ul7%2BxuCsu8XA0OWNwpie2ltjXABW%2Bth5wu4Ga43E8dRwhcPNWUua%2BuIbEfOoWTC29vXMJHiCmRze0u7d17O0arvI4JQfUn8%2Fsu%2Bg2KngniqfqK&X-Amz-Signature=e21fc6a501e0b7a3c1892f3358caebad5edb652152a81fe36a7c337f3f9fbcce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
