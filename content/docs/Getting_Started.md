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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQOTCOF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDWc6lbORj75UoYIO5t8l84zZJhw1%2FPtMFOm5hYDuVWlgIhAIv5YSTrmteuCaDrR%2Fw8Uciba07YpYR3pIYPjD5yQFyJKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTUpLOd1vpiCcgfGsq3AO8d%2FTONz7sb0yDFvOBpHqWehx2FMCWkOUSwQ25XWRmHD6JLW5IS4uMKS%2FoOLiQKVZW%2F2KNUt6aZ3%2F6Yu99k93xauLLa1MvNlXK9qKUn7Ltby6uFnUO78RFvm0Tr7ncbRbaV%2BE9FEYRF2TgDNfC3iDGNqQmX2Yloz38jazwKD67XISZVTvCWXq2ZDZZ7ufNVc2CrWLaG%2FhGb0BLiANl0VVFv99U9P6iTaiv2rYMpNXhVWAxO%2FVnQfdcNg9ihXkVNJk97sdBR7kgh74veVfSypdY0%2F%2FZ33LYpnUrluZoQZ7X09i14PTnQEKqcQg4gjnuF%2F28EF7eyGyjlXaUSUBWCiP3Sj6ojZyb5xt93X8qIDtlDPHNhBVwnKXtf9gGYlRz2joRj24ibqoX1szabQkoIJVQsHu0vpElTp0T%2FlBPfkACZzxFHzw67eyJppiJDPWYrlG6BQ2FqpE5hK3x0P4F4z1OR9BiSfyUEbmZ%2BDPQgnLaKdoob60CqXd9ReHbYXDLSa%2Ba3YXBkCEBtRWDoFL4IMkib7eJHk0oVkHnndHkhEqc%2F%2BbTfZ6jttTVAgVO4C31LvD3WA7RvNcY9MeQaT7owfWQQaAP958Wr8er4OxLfZnIBsQOxkwuC2CSHPXtTDDDjY3BBjqkAW%2Fi8Jehqa5jssLa%2F%2Fup1vzJMsg1rauezgwabqL6mq911dgypfGjUwdjguyYaKpayCrXRlKzJvqweeOXFSv4JuQTGYHj9lDA%2BkrFYrpZM0oTzggPWa4oqQcUYAUI7Rd6JxvO17YMdGEyOKiC6sJPfJ91Y602utKA%2FsPyLZ4vcYw4oZKQ2iBe%2FL5beCxq7GvThVI7LRF3novsqxUuNZnPKMkT%2BfLm&X-Amz-Signature=5bcf6051a58b7c878615ca0a7fef8a9ac2929e113fe49ac738b78500cc5c83a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQOTCOF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDWc6lbORj75UoYIO5t8l84zZJhw1%2FPtMFOm5hYDuVWlgIhAIv5YSTrmteuCaDrR%2Fw8Uciba07YpYR3pIYPjD5yQFyJKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTUpLOd1vpiCcgfGsq3AO8d%2FTONz7sb0yDFvOBpHqWehx2FMCWkOUSwQ25XWRmHD6JLW5IS4uMKS%2FoOLiQKVZW%2F2KNUt6aZ3%2F6Yu99k93xauLLa1MvNlXK9qKUn7Ltby6uFnUO78RFvm0Tr7ncbRbaV%2BE9FEYRF2TgDNfC3iDGNqQmX2Yloz38jazwKD67XISZVTvCWXq2ZDZZ7ufNVc2CrWLaG%2FhGb0BLiANl0VVFv99U9P6iTaiv2rYMpNXhVWAxO%2FVnQfdcNg9ihXkVNJk97sdBR7kgh74veVfSypdY0%2F%2FZ33LYpnUrluZoQZ7X09i14PTnQEKqcQg4gjnuF%2F28EF7eyGyjlXaUSUBWCiP3Sj6ojZyb5xt93X8qIDtlDPHNhBVwnKXtf9gGYlRz2joRj24ibqoX1szabQkoIJVQsHu0vpElTp0T%2FlBPfkACZzxFHzw67eyJppiJDPWYrlG6BQ2FqpE5hK3x0P4F4z1OR9BiSfyUEbmZ%2BDPQgnLaKdoob60CqXd9ReHbYXDLSa%2Ba3YXBkCEBtRWDoFL4IMkib7eJHk0oVkHnndHkhEqc%2F%2BbTfZ6jttTVAgVO4C31LvD3WA7RvNcY9MeQaT7owfWQQaAP958Wr8er4OxLfZnIBsQOxkwuC2CSHPXtTDDDjY3BBjqkAW%2Fi8Jehqa5jssLa%2F%2Fup1vzJMsg1rauezgwabqL6mq911dgypfGjUwdjguyYaKpayCrXRlKzJvqweeOXFSv4JuQTGYHj9lDA%2BkrFYrpZM0oTzggPWa4oqQcUYAUI7Rd6JxvO17YMdGEyOKiC6sJPfJ91Y602utKA%2FsPyLZ4vcYw4oZKQ2iBe%2FL5beCxq7GvThVI7LRF3novsqxUuNZnPKMkT%2BfLm&X-Amz-Signature=2da0b93203cdb614296f9d8a21d0442adcb790c2b01e7a673b15853e6f4cf41c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQOTCOF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDWc6lbORj75UoYIO5t8l84zZJhw1%2FPtMFOm5hYDuVWlgIhAIv5YSTrmteuCaDrR%2Fw8Uciba07YpYR3pIYPjD5yQFyJKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTUpLOd1vpiCcgfGsq3AO8d%2FTONz7sb0yDFvOBpHqWehx2FMCWkOUSwQ25XWRmHD6JLW5IS4uMKS%2FoOLiQKVZW%2F2KNUt6aZ3%2F6Yu99k93xauLLa1MvNlXK9qKUn7Ltby6uFnUO78RFvm0Tr7ncbRbaV%2BE9FEYRF2TgDNfC3iDGNqQmX2Yloz38jazwKD67XISZVTvCWXq2ZDZZ7ufNVc2CrWLaG%2FhGb0BLiANl0VVFv99U9P6iTaiv2rYMpNXhVWAxO%2FVnQfdcNg9ihXkVNJk97sdBR7kgh74veVfSypdY0%2F%2FZ33LYpnUrluZoQZ7X09i14PTnQEKqcQg4gjnuF%2F28EF7eyGyjlXaUSUBWCiP3Sj6ojZyb5xt93X8qIDtlDPHNhBVwnKXtf9gGYlRz2joRj24ibqoX1szabQkoIJVQsHu0vpElTp0T%2FlBPfkACZzxFHzw67eyJppiJDPWYrlG6BQ2FqpE5hK3x0P4F4z1OR9BiSfyUEbmZ%2BDPQgnLaKdoob60CqXd9ReHbYXDLSa%2Ba3YXBkCEBtRWDoFL4IMkib7eJHk0oVkHnndHkhEqc%2F%2BbTfZ6jttTVAgVO4C31LvD3WA7RvNcY9MeQaT7owfWQQaAP958Wr8er4OxLfZnIBsQOxkwuC2CSHPXtTDDDjY3BBjqkAW%2Fi8Jehqa5jssLa%2F%2Fup1vzJMsg1rauezgwabqL6mq911dgypfGjUwdjguyYaKpayCrXRlKzJvqweeOXFSv4JuQTGYHj9lDA%2BkrFYrpZM0oTzggPWa4oqQcUYAUI7Rd6JxvO17YMdGEyOKiC6sJPfJ91Y602utKA%2FsPyLZ4vcYw4oZKQ2iBe%2FL5beCxq7GvThVI7LRF3novsqxUuNZnPKMkT%2BfLm&X-Amz-Signature=2a61609daf86aeac429259bb7354d4480686be6156c5facc4b0b2e0280193763&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4T5A5ZF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCUj5toY4aJHtg3%2FBawSasBnwo0fyBUV159XBQFdcmV0gIhANppvQm4vm1a%2BXbbjOQG1pTNIorgTdB%2FT%2BJcqHkbl9XrKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCcAeBuHaiU370GOAq3AOxRBMITOJMhwctHP4KN0mEOAKK8RSQsd%2Bw0MabLnPJ0gXvbg5ZW0sWGs13AdOr2SyjbLd6Z5EhZN2CSl5yFVd4O%2FYUs5S2LWqBlZsuQuAp8OoIeT%2FUzUBghn7YWaC2M90au%2Bq3BMDM2ebeEVnrVSbrPl0Du2gE1Qe%2Buv8hEtR%2Bv5niog1uE6fRJcscFmtwo5hOWB334Ai5RS83LfaZ%2BR4ySKHq4OmFr2kFNIQ6pT%2Fivhl%2B8Ld%2Ftu2fGC3gyQy1REsABF13AQa17LjGU4jkilrkeGqXOF6riVeS%2F4lctwEcG8exCx9IbN2kZuNwagD70V2R5rZF2WDXeOV1tGVWAoo4v5QAYCJJqgkEYSpYEyMT40jiKi9cqq555DPGiOIGdiCiycQ%2F1dYECnfMdLhqwJU2EfahgdeuId%2FIVRmYmHn4qDOBpK6nvfD0rPa7L%2F4fKWN2kbBb5Gn5L%2FJijWJkWaxFhgjV6IAayjCgxWN0MDULRzOO0TAxG5TFmgw0IXVT7Q1t6ajpqbXrFUqK7W5HB%2FiohU5R61xOtWdMJDaQmLbrv37X7x0jr9Np24OpT3SvfZIdXYwTo7g2uGoTphQMsMTo9gCnaU14tn24hnTdYCVVqqVWZEukMU6pQtSfmjDCjY3BBjqkAaRrB8sX03%2FyTxIYK7RlKvpWsiMxAzcyT%2Fd5atHmokxLzRtkdqBsnM6K7Ao6JTpxnQNVK130zzg1KfLKrX7avzzcPK5sgOnPgLzHa2iPO7Tfxl0ZXby5qQOvhy3LlMvpPQiTYPjIS0aCFwv%2F1MJ6BqN6x5tQanPjYMEV4L0DRwv7%2BP7MXHWKpzH5SoF%2BX2JXcQAfhaGTa81sd8l2dxE5NX3kcu1U&X-Amz-Signature=4091cba16636a5db1636439359fa56afa31193d2932bb60aff6b8534d3dfe1f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDYGNPQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIC09ILO2Kv2C8mWbWg8QOigd0HIbmuCkTF4zwML8KI1YAiEAsleZjf2Qc6446z5s20yMPHNlHQx7RGOiQxOn8jUrVNsqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVGBZ8iPivFfu8KcCrcA72xjGrn0Q0R1nJGpq%2FBcvb0jaiVYmDzL67kW8zdUv2aFLREft6UzuwDu1mQMC4ULej9gDTtfeVdm10DnOT65z6j5WUuLIN8blxFJfOss3RlmHryLXx5aWjfCiuWoRB4AzR5u34aTl74WT1VGHtmuf0ORtKIxqiDZ0rDiMiwBjoTNy3CQKT3TNQCJiET%2BW%2BshCbEZYcYfSaK4BpTj1ny3LtGFWKmD%2BKlN2j4Wl6rNsTNCWt17pMSGIfLR%2FiTSySHjBAcnpniaH6bbVYvVkRn0FyxJGgkYmX%2FVyh76ScKEvXZy2Gg4CZttp5AdH2amENCNO09amUnwhnpdWlNhDfgVlyf4Vrw48mj6dEJ3m1CJT00e1LnFf3H3%2Bx02B5ee1w678WZNEC%2FGX6vmjK1VscZrZwcnJ2u5Mxxb1%2FXOQM%2BlnblCH5s6phFN5cGKa02SYk9j08lAn%2BI3OY7O6YZ7wGw8nQXyJ5qKLQg%2FRqDgEOGiAtuH4F2Wcz2XiALPs5SX7TSe4JkhowOH3Y6dkTthJV6mkuw1%2FUtQJKZiVuvIcCWBx0QaFTDw8q4XDU4DmbgmWKzlycrPoD7czS10J9ujuZoHkMTnNnsIpDcaavaiRr2yYNDsA%2FwfyddkE0E5aVuMMeNjcEGOqUBLuPRqr8q8CwpWHvCmIv3u9gvf%2F2IaI6pR%2B93lvD9eG7HX3d7VD1du5y6VuFn%2BWXEJvuOfVBZzL2Yg2E3Ft8owGG0at6sOofhBYShJPpLHPatv%2Fal%2BFnxdLFltwDPMZw8LX4YJATnXYCM7nD3ZTg0Wn%2BvYI7pCR9faUqESxOcXrGhiQUObTDHLYxLCTXbEG%2B4T5uCO8kqyI1EEdAtEQns8jpmRAqN&X-Amz-Signature=e7384923a3a3b62f2d0ad8f8174b4b9beb9f163c35530f963038e9c62c170fef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQOTCOF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDWc6lbORj75UoYIO5t8l84zZJhw1%2FPtMFOm5hYDuVWlgIhAIv5YSTrmteuCaDrR%2Fw8Uciba07YpYR3pIYPjD5yQFyJKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTUpLOd1vpiCcgfGsq3AO8d%2FTONz7sb0yDFvOBpHqWehx2FMCWkOUSwQ25XWRmHD6JLW5IS4uMKS%2FoOLiQKVZW%2F2KNUt6aZ3%2F6Yu99k93xauLLa1MvNlXK9qKUn7Ltby6uFnUO78RFvm0Tr7ncbRbaV%2BE9FEYRF2TgDNfC3iDGNqQmX2Yloz38jazwKD67XISZVTvCWXq2ZDZZ7ufNVc2CrWLaG%2FhGb0BLiANl0VVFv99U9P6iTaiv2rYMpNXhVWAxO%2FVnQfdcNg9ihXkVNJk97sdBR7kgh74veVfSypdY0%2F%2FZ33LYpnUrluZoQZ7X09i14PTnQEKqcQg4gjnuF%2F28EF7eyGyjlXaUSUBWCiP3Sj6ojZyb5xt93X8qIDtlDPHNhBVwnKXtf9gGYlRz2joRj24ibqoX1szabQkoIJVQsHu0vpElTp0T%2FlBPfkACZzxFHzw67eyJppiJDPWYrlG6BQ2FqpE5hK3x0P4F4z1OR9BiSfyUEbmZ%2BDPQgnLaKdoob60CqXd9ReHbYXDLSa%2Ba3YXBkCEBtRWDoFL4IMkib7eJHk0oVkHnndHkhEqc%2F%2BbTfZ6jttTVAgVO4C31LvD3WA7RvNcY9MeQaT7owfWQQaAP958Wr8er4OxLfZnIBsQOxkwuC2CSHPXtTDDDjY3BBjqkAW%2Fi8Jehqa5jssLa%2F%2Fup1vzJMsg1rauezgwabqL6mq911dgypfGjUwdjguyYaKpayCrXRlKzJvqweeOXFSv4JuQTGYHj9lDA%2BkrFYrpZM0oTzggPWa4oqQcUYAUI7Rd6JxvO17YMdGEyOKiC6sJPfJ91Y602utKA%2FsPyLZ4vcYw4oZKQ2iBe%2FL5beCxq7GvThVI7LRF3novsqxUuNZnPKMkT%2BfLm&X-Amz-Signature=24ab83e8a027c2c534a0d58114c518f735ec53c312da581fba8b9bf3468087b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
