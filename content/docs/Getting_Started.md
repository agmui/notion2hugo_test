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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4ITDO5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmtacP4HGspZlNvlCW%2Bj79qOPeYOBS0Og8C%2Bxpk4eQKQIhAI9EGluXyKofXFCb97avv3Bd4Hso6pOwMY4cwPKmr3WcKv8DCEEQABoMNjM3NDIzMTgzODA1IgzK6TlQadXiSjZ4q%2Bkq3ANdS6zyxV9xhV9HpXUdcj7Nn94GbQ%2BKKlQLxNHjU6U4cgYkA31WbP%2BE5KAyV2xhs24vkxAX9wAwLltAMvdyn6X7qODKMQK9yoU%2FsroRMGasapJrlpdoPDGdQN%2B6O7qGjcUrDPY09JvzkawG26oF9PUivWCw2ESwmPLOnH0ROBNA7Cor6j9vA0VXiVKTAae13fOvVv%2F3jpSA0ltQHzNVasBCzy0iVu7HdwaQUgFuqul8f8F8wmyAJq%2FJXO5MIz%2FWYkWiyaaWDjIXs%2BRisEfEz2wyQjySXXNcxbtdyXhKxiofkcyoFsVpNGKVfIiTXUop4LrR1GTinNR20c9%2BfVFz7%2FUsW5Nc0V6nuYVwL0ITBhUKC%2FwB6wlNZb1%2FBMxjqZAbX5MlyHUsHJqp3pnrRYLRwC%2BZtTMPLg%2Fln6s7IYEwVf7NvSlHscqC3ldfhQYaPljAw2j4VBkGRRGR%2FiVneRkZE%2BH03NjEwcceTLDORa6uaPPWSwIjWo8Bfn3xPA1CpdUWErErcf1yxD%2BCJID3qPg9vOAvaIQzGmcAY2vPnd6VVLNTImKzEHstkfXCpxN5TWk55BWdPMHKjJngveI9RgW5MBONAWWlpOjHg2FU4MfxUWU4Md6obe4Its5lrw7KmzCt1JvBBjqkAZkd8zLnNt0Xrlf0q%2FIZhpTMo0ZSw5MFUVVrOBzzqzFzjbOnYxIFdWl914c1M%2BFGhPMnlB1QVfPdC8vBAZoPqB2D%2BDahg5NQmWt6IkTsmXBoalcKOhoJ2bPMj2ZZD1j2nPsSh%2FjdDzPbi9PnztaFAXVnVD9xl%2F3wV0XN6vcRspc%2FFgKbBnVur36JlKv7liD%2BmgeXVAjAvf4RyRPvnAqXDbQ13Nof&X-Amz-Signature=d575806282228428d9df5fcc548317f5c3c355c601729da5dec851f90757678c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4ITDO5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmtacP4HGspZlNvlCW%2Bj79qOPeYOBS0Og8C%2Bxpk4eQKQIhAI9EGluXyKofXFCb97avv3Bd4Hso6pOwMY4cwPKmr3WcKv8DCEEQABoMNjM3NDIzMTgzODA1IgzK6TlQadXiSjZ4q%2Bkq3ANdS6zyxV9xhV9HpXUdcj7Nn94GbQ%2BKKlQLxNHjU6U4cgYkA31WbP%2BE5KAyV2xhs24vkxAX9wAwLltAMvdyn6X7qODKMQK9yoU%2FsroRMGasapJrlpdoPDGdQN%2B6O7qGjcUrDPY09JvzkawG26oF9PUivWCw2ESwmPLOnH0ROBNA7Cor6j9vA0VXiVKTAae13fOvVv%2F3jpSA0ltQHzNVasBCzy0iVu7HdwaQUgFuqul8f8F8wmyAJq%2FJXO5MIz%2FWYkWiyaaWDjIXs%2BRisEfEz2wyQjySXXNcxbtdyXhKxiofkcyoFsVpNGKVfIiTXUop4LrR1GTinNR20c9%2BfVFz7%2FUsW5Nc0V6nuYVwL0ITBhUKC%2FwB6wlNZb1%2FBMxjqZAbX5MlyHUsHJqp3pnrRYLRwC%2BZtTMPLg%2Fln6s7IYEwVf7NvSlHscqC3ldfhQYaPljAw2j4VBkGRRGR%2FiVneRkZE%2BH03NjEwcceTLDORa6uaPPWSwIjWo8Bfn3xPA1CpdUWErErcf1yxD%2BCJID3qPg9vOAvaIQzGmcAY2vPnd6VVLNTImKzEHstkfXCpxN5TWk55BWdPMHKjJngveI9RgW5MBONAWWlpOjHg2FU4MfxUWU4Md6obe4Its5lrw7KmzCt1JvBBjqkAZkd8zLnNt0Xrlf0q%2FIZhpTMo0ZSw5MFUVVrOBzzqzFzjbOnYxIFdWl914c1M%2BFGhPMnlB1QVfPdC8vBAZoPqB2D%2BDahg5NQmWt6IkTsmXBoalcKOhoJ2bPMj2ZZD1j2nPsSh%2FjdDzPbi9PnztaFAXVnVD9xl%2F3wV0XN6vcRspc%2FFgKbBnVur36JlKv7liD%2BmgeXVAjAvf4RyRPvnAqXDbQ13Nof&X-Amz-Signature=c56aca1c4568d348e5c79d26308e9d3805e9351dfc20fe1358cba572ed9766b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4ITDO5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmtacP4HGspZlNvlCW%2Bj79qOPeYOBS0Og8C%2Bxpk4eQKQIhAI9EGluXyKofXFCb97avv3Bd4Hso6pOwMY4cwPKmr3WcKv8DCEEQABoMNjM3NDIzMTgzODA1IgzK6TlQadXiSjZ4q%2Bkq3ANdS6zyxV9xhV9HpXUdcj7Nn94GbQ%2BKKlQLxNHjU6U4cgYkA31WbP%2BE5KAyV2xhs24vkxAX9wAwLltAMvdyn6X7qODKMQK9yoU%2FsroRMGasapJrlpdoPDGdQN%2B6O7qGjcUrDPY09JvzkawG26oF9PUivWCw2ESwmPLOnH0ROBNA7Cor6j9vA0VXiVKTAae13fOvVv%2F3jpSA0ltQHzNVasBCzy0iVu7HdwaQUgFuqul8f8F8wmyAJq%2FJXO5MIz%2FWYkWiyaaWDjIXs%2BRisEfEz2wyQjySXXNcxbtdyXhKxiofkcyoFsVpNGKVfIiTXUop4LrR1GTinNR20c9%2BfVFz7%2FUsW5Nc0V6nuYVwL0ITBhUKC%2FwB6wlNZb1%2FBMxjqZAbX5MlyHUsHJqp3pnrRYLRwC%2BZtTMPLg%2Fln6s7IYEwVf7NvSlHscqC3ldfhQYaPljAw2j4VBkGRRGR%2FiVneRkZE%2BH03NjEwcceTLDORa6uaPPWSwIjWo8Bfn3xPA1CpdUWErErcf1yxD%2BCJID3qPg9vOAvaIQzGmcAY2vPnd6VVLNTImKzEHstkfXCpxN5TWk55BWdPMHKjJngveI9RgW5MBONAWWlpOjHg2FU4MfxUWU4Md6obe4Its5lrw7KmzCt1JvBBjqkAZkd8zLnNt0Xrlf0q%2FIZhpTMo0ZSw5MFUVVrOBzzqzFzjbOnYxIFdWl914c1M%2BFGhPMnlB1QVfPdC8vBAZoPqB2D%2BDahg5NQmWt6IkTsmXBoalcKOhoJ2bPMj2ZZD1j2nPsSh%2FjdDzPbi9PnztaFAXVnVD9xl%2F3wV0XN6vcRspc%2FFgKbBnVur36JlKv7liD%2BmgeXVAjAvf4RyRPvnAqXDbQ13Nof&X-Amz-Signature=c2bad2c3a5a1669732f8c3f2bdae11c909261b837ea67863b804de51fb759d99&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2CZQBX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD05nQJOxAa%2BXVnaojKHllmHwLdyBqEiXv6I%2B1p0uZ%2FQgIhALldenzvVGhavJwCUDl9F57KYitRoavykGCkFaNB%2BZ%2B%2FKv8DCEEQABoMNjM3NDIzMTgzODA1IgxD84x%2B6Xee%2BUrgGbcq3APLetPe0i1Y2ncVQC%2BiVmGHZN0OI3qI55IE4KBjn2T%2FclueBYW1sMsAmxIvdrXy%2BfkG9xTsQwOM61GBSVaV1Ms6fF8xgmzTkNN4I8lkJr%2FoarW8dG8zaWM%2BfE83oeUpkBhTzXyU9fJnbbPYOxNRe%2FJrQLwu5Viq7XzananYwW4iT7jaLkBKth%2B5cseFrh9pV5Z10K6RnmiYcpqGhYWHiMpZSyEgHDTlUzCTyeokkn%2B2d5OnusvPGAVTrpxo7zgXRX1%2BwuBwb8H85pBfP1aMbtzTyPf5qcbVsZlwk2gMlow0OopeIuZtLLo1W9NqRIasvSrwLsgqjIoVT1IZonZkYipgqJJkxfKLLe9qqKYKKhaOvHn148HB2ux26zyp9rfj8CZKeRcNKSujLtBqNr%2B9%2BMolSNbTAEeRKeUDS2XoEP5AJ6Lr%2BU7bZ0RVZBwJkSLH4wGT5cjlu%2F3Y%2BUAmQKI5t2X5Z%2By8jRasV4dH3yWtWyGTZgXADVf7JcI066mxLPMa1KDVlP%2Bak6s88HdVGppJikBREfqGIiAtkpMBvyUKIuCQPXQrEDeSAGIoweUxIqtDpSYFVvC5QP079EPWYZlqXvLfdS8UjFUMg0Na%2FjJ8Af0%2FHWkaWbDyEHznub8wyjCP05vBBjqkAVNehjQePHeBVLYWOq2aL27AcCU4Etk6eB59mHEf7E5MJPlDg0Upy698NFa6mpSlMIZhx9YowwcVYYsZeVtuiv9Yvy3DHPnAi85RINxrrX0owcvWfhVq9%2Bzrl5ROAPinR1mJ4%2FiZMCZhKY%2BXBuHlKLkoukyS%2FIhfWdftGvaKiGryH4VWTKxJ%2F%2BsaFPa662hlJlb2oEeeQdo19HmD%2FYUOPOkz69xR&X-Amz-Signature=4522569dc9b551e6d1828eb0b68a1a6d306232afc8fc9144bf488148d479b4de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICUWT6K%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKoLyrOwaBsfWqE6HXbEI42J%2B2%2BLPxGizCZNngVUlX5AiBW%2BNiZCJJgivtdVycHpHvxNHN65nuWDo%2F5CIdwB3IrpSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMQHh6jFFDNJDxTs0HKtwDAqp3sO8dxuaEafj8aBwPCKj67k56wMoc2yCJDl5fwRGgkuhjfP4rXjA5a%2B2U2VUUFgxdez%2FVE7QMvk93GdqhmrdWzr%2BDCpfvj%2BZ%2Bi84wcdNI26b0HalPn%2BpEmk7x14ARxQCq1%2FjN10tJoyexnu1KwYq9AF2subLG%2BzNnPW927madfoLcYyZD4Wpx16B1Crzk142eJ0HNdOHnQ9Z2Xx4YjM8zlg9naQnr5LjFWiBSy877LWjMNkRboFxYwEX0QK0hL4nbZ9sgeRn7jc7%2FVQY1WD%2Be0MqpZu5RXwEmlJ%2FAdV8zjq2TK7bLlKrvPSjrAduE2S%2F6a6OLsao7m6lLILLXSaZ%2FzkMg1x%2FsVW2yVAtAIhWh8dSj1jjIC6UqagdHlircehAWm7%2Bal3ACYH7H2n0cdWNqFTkeQknNIIhszaDHAi4iC5icm3WF0aMT9keXWzaWNSPegWzMyTVh%2Bix2e4fYXPDlDDs6BHO2YG5X6Yp8RkARbKIZAeUkyRwiXVetWN92y5Tg2hNPmPAXw09Xk4zcehAnwFlI%2Bry04lmwbRuDrp%2B7EKLr0yZlpDKDH%2BNYIYlh8QqQN%2B24pzGNBhcNSvTsLxbm1aItKm5OXKp82gFAag8x2EjE96UBLn%2BgnFgw%2FdKbwQY6pgH9%2BFSuBdsf%2BzWlmK5DmrbO2%2Bi88D9HwUDJhGOcCjKmDaUkPT%2BabD%2BDISlbCmsIPsjpVXHLI5eJy5GZf2DfLC4APpYDavkDBwllq1lkRiyF30s5PP%2BhL0pXzxKSf2HP26NyiuVD4h6izqNABn%2FsUQWUbRV8ProzMk3npDU99BYffTlfZjvmMT2m4tnHycQgnjeRIiehOcIFCdeWiYEqV8Btz1bkVhNw&X-Amz-Signature=5a8ef63a7f49816f067d72cc110935d7c50b602868d58c7e8496b9821c86c829&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4ITDO5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmtacP4HGspZlNvlCW%2Bj79qOPeYOBS0Og8C%2Bxpk4eQKQIhAI9EGluXyKofXFCb97avv3Bd4Hso6pOwMY4cwPKmr3WcKv8DCEEQABoMNjM3NDIzMTgzODA1IgzK6TlQadXiSjZ4q%2Bkq3ANdS6zyxV9xhV9HpXUdcj7Nn94GbQ%2BKKlQLxNHjU6U4cgYkA31WbP%2BE5KAyV2xhs24vkxAX9wAwLltAMvdyn6X7qODKMQK9yoU%2FsroRMGasapJrlpdoPDGdQN%2B6O7qGjcUrDPY09JvzkawG26oF9PUivWCw2ESwmPLOnH0ROBNA7Cor6j9vA0VXiVKTAae13fOvVv%2F3jpSA0ltQHzNVasBCzy0iVu7HdwaQUgFuqul8f8F8wmyAJq%2FJXO5MIz%2FWYkWiyaaWDjIXs%2BRisEfEz2wyQjySXXNcxbtdyXhKxiofkcyoFsVpNGKVfIiTXUop4LrR1GTinNR20c9%2BfVFz7%2FUsW5Nc0V6nuYVwL0ITBhUKC%2FwB6wlNZb1%2FBMxjqZAbX5MlyHUsHJqp3pnrRYLRwC%2BZtTMPLg%2Fln6s7IYEwVf7NvSlHscqC3ldfhQYaPljAw2j4VBkGRRGR%2FiVneRkZE%2BH03NjEwcceTLDORa6uaPPWSwIjWo8Bfn3xPA1CpdUWErErcf1yxD%2BCJID3qPg9vOAvaIQzGmcAY2vPnd6VVLNTImKzEHstkfXCpxN5TWk55BWdPMHKjJngveI9RgW5MBONAWWlpOjHg2FU4MfxUWU4Md6obe4Its5lrw7KmzCt1JvBBjqkAZkd8zLnNt0Xrlf0q%2FIZhpTMo0ZSw5MFUVVrOBzzqzFzjbOnYxIFdWl914c1M%2BFGhPMnlB1QVfPdC8vBAZoPqB2D%2BDahg5NQmWt6IkTsmXBoalcKOhoJ2bPMj2ZZD1j2nPsSh%2FjdDzPbi9PnztaFAXVnVD9xl%2F3wV0XN6vcRspc%2FFgKbBnVur36JlKv7liD%2BmgeXVAjAvf4RyRPvnAqXDbQ13Nof&X-Amz-Signature=77c48f0055d301f195d78776c72f91278615f07df39f5b9ba595c3ad3e265486&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
