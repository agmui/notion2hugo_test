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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWQD66R%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxFgtKLPWvpu4OQfFrUT38Kb2tHS2tVUAx%2B9U3Uue0FAiBWzn0R8TAXCD%2B3ybDDPpe6qq5JcXwo0oD1KTM0%2FkSfLCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCCA16X4xI6huhy7pKtwDn5kusGm1JZqW3yOdpNsvg8WeTg3dFI1yLUFn8jX5cQHGIk2%2F2SexWLjC9LaGbnIFOvqO%2BNjD9oskIUQ2ZGNjhO9aU28nZjwnUYwm3p8tVvHfRUTr85TGjorIEsQ1EMAfvn2RJlc5khnOQZLp7hwOnre18pq8KpFnA7elv1bCHk%2BJRRYWKoTaSV7cABGdTHdSIjETHZFZ5maCsvfzQ8Ev0bUWdfa43ecSZyECv2oMziodISvDnev25nN7qz%2BAmUftpuoEfBgDDv%2B%2FBaAWgGrJ9nIIH7CHUKmiqNWWyU2MNgwy1VRxzbxziV7%2Fwf9tp6sk1UPOIxyNiiam44n1u6l3wxR6fAg9w2RuO3%2BG4FtfbhY8WSoGv2l%2FQHyv1Rj%2FjAZ9QSTf%2Fh9KKdRJy5iFrOa04PAQBczPumm0rKxLT1gDuXbNOOOLylBJq%2F9jJRviAuXR0yy1k4ebsd64SbbcvI1Z9WflyIJ9HPyhQ2RJ1UQL2aUBC9gUJomiInjLb8Aa9BlU8ut25t3cKcGd2IW9oYK%2BLZ4VJENECrUehRtuwv%2BI4zo5ByogMSzh4%2Be70HryfcJDiftizfj0UOoYUP%2FdfEYziUAGDIZXhq2fnT3ZlNY%2BcPVUIEDD%2FbNE2GbM6dcwht2WvwY6pgF8Yym7apBx907JlN0Nea4qidzNqZQkywQGvURz0rstLnSH%2BkRo96bJyT9TPGSRpv4H%2F1andqvPCbHIr53O%2FXHSv2g9pxny0RKO3AaKomb%2FNZu52hsDNGvZwNP14dSCc6LAXC0%2B9%2BIGAej%2FpHw2rV%2FTDB12PDej5215zDsCIq1BzsBq0kgZmEV6c40yduEBtr95ZzLz%2FTVYQVy%2FR8fcYPgZWgVYU4n8&X-Amz-Signature=8547021c2e4c0d95e47e72cb34c98a5da3fc827b02cf09961f5005c8dd7a7dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWQD66R%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxFgtKLPWvpu4OQfFrUT38Kb2tHS2tVUAx%2B9U3Uue0FAiBWzn0R8TAXCD%2B3ybDDPpe6qq5JcXwo0oD1KTM0%2FkSfLCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCCA16X4xI6huhy7pKtwDn5kusGm1JZqW3yOdpNsvg8WeTg3dFI1yLUFn8jX5cQHGIk2%2F2SexWLjC9LaGbnIFOvqO%2BNjD9oskIUQ2ZGNjhO9aU28nZjwnUYwm3p8tVvHfRUTr85TGjorIEsQ1EMAfvn2RJlc5khnOQZLp7hwOnre18pq8KpFnA7elv1bCHk%2BJRRYWKoTaSV7cABGdTHdSIjETHZFZ5maCsvfzQ8Ev0bUWdfa43ecSZyECv2oMziodISvDnev25nN7qz%2BAmUftpuoEfBgDDv%2B%2FBaAWgGrJ9nIIH7CHUKmiqNWWyU2MNgwy1VRxzbxziV7%2Fwf9tp6sk1UPOIxyNiiam44n1u6l3wxR6fAg9w2RuO3%2BG4FtfbhY8WSoGv2l%2FQHyv1Rj%2FjAZ9QSTf%2Fh9KKdRJy5iFrOa04PAQBczPumm0rKxLT1gDuXbNOOOLylBJq%2F9jJRviAuXR0yy1k4ebsd64SbbcvI1Z9WflyIJ9HPyhQ2RJ1UQL2aUBC9gUJomiInjLb8Aa9BlU8ut25t3cKcGd2IW9oYK%2BLZ4VJENECrUehRtuwv%2BI4zo5ByogMSzh4%2Be70HryfcJDiftizfj0UOoYUP%2FdfEYziUAGDIZXhq2fnT3ZlNY%2BcPVUIEDD%2FbNE2GbM6dcwht2WvwY6pgF8Yym7apBx907JlN0Nea4qidzNqZQkywQGvURz0rstLnSH%2BkRo96bJyT9TPGSRpv4H%2F1andqvPCbHIr53O%2FXHSv2g9pxny0RKO3AaKomb%2FNZu52hsDNGvZwNP14dSCc6LAXC0%2B9%2BIGAej%2FpHw2rV%2FTDB12PDej5215zDsCIq1BzsBq0kgZmEV6c40yduEBtr95ZzLz%2FTVYQVy%2FR8fcYPgZWgVYU4n8&X-Amz-Signature=287be9c5e8d8e16cdfe93c58abb382f34c6d4044471214d3139c65a69d8f269c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DQOM2NP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIdQTXrZJuYW%2FSKZqhJwe%2FaA8XNIFWChj9bV8ZYBe8yAiEA84x1b%2Bmo2N%2Fb3oT6%2FdbYPF6clO%2FuEGan6ydB19rITR8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHjmndYj0dzKZNFd1yrcA7HrYtrMJaOq3NSrV3npT5viBch2SoR5YT8vg%2FD82yN5wuBeANM2T9MNVv4iQjPlcfEGiDAR4s9ctZAIARvbcsNYT%2FoIznrXxYoQi84FBZVNU%2FB96MS77nYiAWp3bdik2%2BkzVo0FvlWpF8ZmIJCumhuR5M0veRLO7s9ByUinxdg3CQQ94V8gtMvS%2BywzjP3l%2FrV6INOq65yLuY%2FCBp2q%2FNxEsuDeNXQ2r5aAaeN3UTtBEpq4ETQwRqY%2FFZa5a7Kd0lMf3FOzvJqmShPHcmpjNCdIhq0ddtPbSaB1PwucT6590um4gRcdbjvTXW1J21veTKKIwvHu89UMBqPCh2n%2FoqmtIUc1Oa5gQ1yESu1oczcbRXLqvQz5ibX85nl7xM6VEQc3U%2FvE3OgxOzgjVezmsFKFJU6CFykLGGkzqZQd3rVBywG7iQVc%2BE%2BCJMzBN%2FhxrmuOfwdDKw4XbBybHEuN3iXBNJFUzsrm9hizkhQ1mVN6%2BeEBR0%2BBXAnejmZ67CaKH37EkfC%2FZoF1mlAWAE4egL6ezjbCU%2B035k4VHNHYlzVyGrUpPXF0uoOsKi4%2BUonFuU2AOMv8YVpK05sORUGZgynU6nHRLptk19tRJJrYZa4MvFVfbO1HrIBbeDM2MNfclr8GOqUBXwP4TPcgjR0q8v7%2BLCOxsF8qpweiYQNo8aNCFjIpF6J5MFGay6NEf%2F89iYnzEoRs7xJ4e%2F2GqcDIxEjv%2BYIwO87MOGN55kHWIx4IqAb0qlpC1W0wmV29lv%2FdWMPCD8SYXBhVbmI3ZLZdARpl7qebBHP%2FUnjSTpSjVoHcZQOyNczMX1ug%2FklCzx8T5oy5Y3UnGys8oGvF9jGLUozqTHodnigZqzhS&X-Amz-Signature=b93fb5f69054f836ee1260a1985a3bd666eb8dc9f078ccd302e05c47de4301a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665653PCXS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwPM9nZpy8%2BoBopnQuF%2FsXyys7KN4WKG5RGfBVOBSZdAiEAhvs2Ls6yBNZfioOipkHQ8n1GelohsvyVQx8sWJfOrAoq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDDGhTaPfWl5tT%2BcrGCrcA4cEqAJiUERgJ077b2dgX1jTFCK7l3%2BZkJyqgYHS1AoB5kL8wZhTHKhAMw6jbN2zTLm54LmQWqpYH2%2BHtSkSdwNrV05LTLhPrxN07X3UKrtsxlnz7GTtBgW8hw5j8f25Y38bR4ASN6z3%2FV6KKgcm%2F5ZOD8umC5FIfAjTJjNgeWFj2qOa6zvGcJcL5e7wxIFS69mT8zc2fAW%2BnY4Yem8IaGb4KiTKodWX%2FKGqYDYKt5ECdE%2FXPmPa%2FevG8mRlI0zX%2F4G%2BAmu85siRo2q%2BhsEeWk%2BHJSHZF2XHulL0okg%2F0315SDGlE6dmNcqnzAHWR4tD2h9vl4U200RR2A6%2FWWt9q0X3S6S22t%2ByWszJ2Pp%2Fdunkj2citfrbp%2FV1hNB%2FRy2FR6Ed0lYs4TrQiNvIuJYXWKSdVAXJ4hwSQRKEYlKxwRtUSmdcD8Wkcd7T%2BUhKXtCmT13NkuVTTKuscgIgMORI2MsWvNWQlgaufo1h6xgdSF2%2FrNc4vMYQOc9Tn3W1U7FGw6hpOUjVF3bM1P8zIDvayLlwq7eec%2BQHmn7hux40V5psIBXLcq%2FPqJiGGiNqJghQBnIe4%2FkHM4NWJvDb88JqHLoSm%2Bto04f6iKWMdWPF4d178o9qYe2JHPGxYcgiMM3dlr8GOqUBgGXbIAcvn1Ketrsa8DbAPjfpKnew5l1TM8jwMWcj1GEKZZo9N3FMJz9t0qzqWjO%2BM7Xs%2FCOwot1EWqrhI6BP%2BnqRg2t4ZqxV29ldzJRWN4ByrqHLQadGNdmIJH5qbkPNHpW2A7C1JrDrj%2F3721eDNNkukdAWVdiP%2F7QDpkaIx1yem0H3QXZ2aigLRNaKLbtZIifHU4JRxjasqg2W%2FtQSsKXxNQVX&X-Amz-Signature=3ff8cec116c0af94edbc53d45be7fc6881bf19e199a19200dea367f0fdb66dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWQD66R%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxFgtKLPWvpu4OQfFrUT38Kb2tHS2tVUAx%2B9U3Uue0FAiBWzn0R8TAXCD%2B3ybDDPpe6qq5JcXwo0oD1KTM0%2FkSfLCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCCA16X4xI6huhy7pKtwDn5kusGm1JZqW3yOdpNsvg8WeTg3dFI1yLUFn8jX5cQHGIk2%2F2SexWLjC9LaGbnIFOvqO%2BNjD9oskIUQ2ZGNjhO9aU28nZjwnUYwm3p8tVvHfRUTr85TGjorIEsQ1EMAfvn2RJlc5khnOQZLp7hwOnre18pq8KpFnA7elv1bCHk%2BJRRYWKoTaSV7cABGdTHdSIjETHZFZ5maCsvfzQ8Ev0bUWdfa43ecSZyECv2oMziodISvDnev25nN7qz%2BAmUftpuoEfBgDDv%2B%2FBaAWgGrJ9nIIH7CHUKmiqNWWyU2MNgwy1VRxzbxziV7%2Fwf9tp6sk1UPOIxyNiiam44n1u6l3wxR6fAg9w2RuO3%2BG4FtfbhY8WSoGv2l%2FQHyv1Rj%2FjAZ9QSTf%2Fh9KKdRJy5iFrOa04PAQBczPumm0rKxLT1gDuXbNOOOLylBJq%2F9jJRviAuXR0yy1k4ebsd64SbbcvI1Z9WflyIJ9HPyhQ2RJ1UQL2aUBC9gUJomiInjLb8Aa9BlU8ut25t3cKcGd2IW9oYK%2BLZ4VJENECrUehRtuwv%2BI4zo5ByogMSzh4%2Be70HryfcJDiftizfj0UOoYUP%2FdfEYziUAGDIZXhq2fnT3ZlNY%2BcPVUIEDD%2FbNE2GbM6dcwht2WvwY6pgF8Yym7apBx907JlN0Nea4qidzNqZQkywQGvURz0rstLnSH%2BkRo96bJyT9TPGSRpv4H%2F1andqvPCbHIr53O%2FXHSv2g9pxny0RKO3AaKomb%2FNZu52hsDNGvZwNP14dSCc6LAXC0%2B9%2BIGAej%2FpHw2rV%2FTDB12PDej5215zDsCIq1BzsBq0kgZmEV6c40yduEBtr95ZzLz%2FTVYQVy%2FR8fcYPgZWgVYU4n8&X-Amz-Signature=9d0b8adeb6fc2dbdb651e72c48d2e2ce3d7966c597b2b929ddd4e64964626e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
