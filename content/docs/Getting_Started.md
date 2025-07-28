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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MS6BCI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDuPa537RqT1gQ0yCmTsjydJ3o5hXbIhpWKKcQgfZhfAQIgKFglf1SaLTSOJFHb2XBInqZZhvFvTNA8BeF6JdYMXCUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFA30QtG5albUjysyrcAwnSdquH3p9w1UpStjun2mQTooew6E69u0MWQhmKJodJK%2Bi4yR%2FsnMOY3Dh0l%2FOV8l7BdfRWJVxmzpYcOSvRTWm8FLBMnb7%2BMpYgDG1MSetRa%2BXaxfVBuogfy8oJNDy6MUmUyFkgIGKXDRVNCPNIrDYgPfCXJ3QeFzuU%2B74JgLxaN%2Bq8gsij7c9T%2FrAe1Y4aVjAnY%2BBjFUVFgFqMGwdh5dO2xb4%2BcPLHhDP5oPem21cburShnWoh5SXHQM7XH0G7iNBpGvgTg7x35%2FNBz7LbOoCrzlWzfbnG8yylLXcd6idQIj3JtQllzWhVqCux6WsXMJPEuqUyeXWoth%2F4yN8nEgmTl3eZXWXzJq%2FLclnnHjSTcy7OxCZnAtrRwx2B0qnIFdorD6BYY9IjBKWo3X448lylWLCnAXX%2B%2FSeLxfMaOyiu2ejlEyoJXJfS240yEo3mrK8SZJK4LxoY1Sglnd0dT68fzuYuZow4mZ4WpFYmM73P%2F8JfVjdotQWADfYFu3boBtKwQ5qMIOp0wbZzp69IkR1KRvznYu7lBZPnEtX1nnCG12rphxm0NS5gncGQh7a7ciyPBx9FcFK%2Fzd%2FfFddxGuMkNnQMGDgU4Hjnn3njOSlcooEqPF%2FEA9UN%2BBMbMOWNncQGOqUB5qfMGJK%2Bvss%2BqUKYJ4yQIxNUIXO5QeYAKTyjpR3hvFuOF6NfTAVvjp4jLgwN3ET3NHj1MJIEuy5ieFGxKXrbEtdtbtL2sy6pFpsJFql15ORyRFjGKk7Oa6h%2FzG3P0zNIAGG5o%2B%2Fhy5f0x%2FRQdmmn4AMX8J0hiU44BcHAoya%2FNeC8a1SUqBoyQ%2FgSa2YmCDgxdVkZr19JFOhSSvYZfDfZddVtanin&X-Amz-Signature=949958fd97513e58128f6265b21cfe0d532f78267152cffe57ae3ec0dd48a313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MS6BCI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDuPa537RqT1gQ0yCmTsjydJ3o5hXbIhpWKKcQgfZhfAQIgKFglf1SaLTSOJFHb2XBInqZZhvFvTNA8BeF6JdYMXCUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFA30QtG5albUjysyrcAwnSdquH3p9w1UpStjun2mQTooew6E69u0MWQhmKJodJK%2Bi4yR%2FsnMOY3Dh0l%2FOV8l7BdfRWJVxmzpYcOSvRTWm8FLBMnb7%2BMpYgDG1MSetRa%2BXaxfVBuogfy8oJNDy6MUmUyFkgIGKXDRVNCPNIrDYgPfCXJ3QeFzuU%2B74JgLxaN%2Bq8gsij7c9T%2FrAe1Y4aVjAnY%2BBjFUVFgFqMGwdh5dO2xb4%2BcPLHhDP5oPem21cburShnWoh5SXHQM7XH0G7iNBpGvgTg7x35%2FNBz7LbOoCrzlWzfbnG8yylLXcd6idQIj3JtQllzWhVqCux6WsXMJPEuqUyeXWoth%2F4yN8nEgmTl3eZXWXzJq%2FLclnnHjSTcy7OxCZnAtrRwx2B0qnIFdorD6BYY9IjBKWo3X448lylWLCnAXX%2B%2FSeLxfMaOyiu2ejlEyoJXJfS240yEo3mrK8SZJK4LxoY1Sglnd0dT68fzuYuZow4mZ4WpFYmM73P%2F8JfVjdotQWADfYFu3boBtKwQ5qMIOp0wbZzp69IkR1KRvznYu7lBZPnEtX1nnCG12rphxm0NS5gncGQh7a7ciyPBx9FcFK%2Fzd%2FfFddxGuMkNnQMGDgU4Hjnn3njOSlcooEqPF%2FEA9UN%2BBMbMOWNncQGOqUB5qfMGJK%2Bvss%2BqUKYJ4yQIxNUIXO5QeYAKTyjpR3hvFuOF6NfTAVvjp4jLgwN3ET3NHj1MJIEuy5ieFGxKXrbEtdtbtL2sy6pFpsJFql15ORyRFjGKk7Oa6h%2FzG3P0zNIAGG5o%2B%2Fhy5f0x%2FRQdmmn4AMX8J0hiU44BcHAoya%2FNeC8a1SUqBoyQ%2FgSa2YmCDgxdVkZr19JFOhSSvYZfDfZddVtanin&X-Amz-Signature=a23407ff06dbe0c44876bc45a499adb7cd49334255535285067623c92e1e38b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MS6BCI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDuPa537RqT1gQ0yCmTsjydJ3o5hXbIhpWKKcQgfZhfAQIgKFglf1SaLTSOJFHb2XBInqZZhvFvTNA8BeF6JdYMXCUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFA30QtG5albUjysyrcAwnSdquH3p9w1UpStjun2mQTooew6E69u0MWQhmKJodJK%2Bi4yR%2FsnMOY3Dh0l%2FOV8l7BdfRWJVxmzpYcOSvRTWm8FLBMnb7%2BMpYgDG1MSetRa%2BXaxfVBuogfy8oJNDy6MUmUyFkgIGKXDRVNCPNIrDYgPfCXJ3QeFzuU%2B74JgLxaN%2Bq8gsij7c9T%2FrAe1Y4aVjAnY%2BBjFUVFgFqMGwdh5dO2xb4%2BcPLHhDP5oPem21cburShnWoh5SXHQM7XH0G7iNBpGvgTg7x35%2FNBz7LbOoCrzlWzfbnG8yylLXcd6idQIj3JtQllzWhVqCux6WsXMJPEuqUyeXWoth%2F4yN8nEgmTl3eZXWXzJq%2FLclnnHjSTcy7OxCZnAtrRwx2B0qnIFdorD6BYY9IjBKWo3X448lylWLCnAXX%2B%2FSeLxfMaOyiu2ejlEyoJXJfS240yEo3mrK8SZJK4LxoY1Sglnd0dT68fzuYuZow4mZ4WpFYmM73P%2F8JfVjdotQWADfYFu3boBtKwQ5qMIOp0wbZzp69IkR1KRvznYu7lBZPnEtX1nnCG12rphxm0NS5gncGQh7a7ciyPBx9FcFK%2Fzd%2FfFddxGuMkNnQMGDgU4Hjnn3njOSlcooEqPF%2FEA9UN%2BBMbMOWNncQGOqUB5qfMGJK%2Bvss%2BqUKYJ4yQIxNUIXO5QeYAKTyjpR3hvFuOF6NfTAVvjp4jLgwN3ET3NHj1MJIEuy5ieFGxKXrbEtdtbtL2sy6pFpsJFql15ORyRFjGKk7Oa6h%2FzG3P0zNIAGG5o%2B%2Fhy5f0x%2FRQdmmn4AMX8J0hiU44BcHAoya%2FNeC8a1SUqBoyQ%2FgSa2YmCDgxdVkZr19JFOhSSvYZfDfZddVtanin&X-Amz-Signature=40638781add173717b1ebae21077e305e97ccade1b235864e1925b721c0323d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AKFSRAC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIADj6ZWMAG34nQWRDTrT5sLA8mJ1crdvkjm46KxR%2FT56AiEAzF0kAFg8eE5%2BCh4Fnd38w8OuYZkQRxZ6Dyi9o1ORvZsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7jxMwCKyt1kPIGpyrcA5pQeEAZ49l%2Baj1l1pRLZ8pMJvLaVJr5T6%2FPjOOh2tmmipRqWbCS1AMN34p%2F%2Bc3YfipEBTvyZ6B20Yi7Dk2zJlspFsVhoiCEeInEfwsGJZEZimWGKjerD7oIfLUHynQH7okxxKgnefbPA89%2BEValjHdNLXJ69eG2tIZLWKMi6Iej0efSbZHnlttO84j2xAR4yIR5jQNBHZZypT7Sza9a%2BHm5FfNbMglHe%2FzMc1uD7Gc5UJ4oFDKRIA4w2P9fFgvYWjgzGJcRbI9rzKRLtGdsrweZn9ktad5es4X4zdtdv2XlubDQgelWK6m38%2FP2jrzFkZFfooaVBrDuOUWtxjRQl3BhDb%2FugUdQk948fj9doFREYxpLDiv%2FdZkSvIbFOZldrlDmF8%2BR6Gooh855wlmMiYk8hyyRcKso6E3HdS99Z1gvs11qDpdW%2Fj0lJfBbeR22BcIOQAs4vy3UnscmNz9MgxM%2BAqlWG171TjOpF662fPDZSD1Sv%2BbcBF%2F1zZwrqOgwe6u8nRHCa3gMXqqGz8UO80xUhPoo3lwL7sePz3Iy9YeOFDnSdJQJ5MtGi4yhSmLIUazG3sRDywcayhNgf1biEC7gaLDH7I0U6X3zKsSy95dAkRYayszd%2B72%2F1Vq%2BMPWNncQGOqUBUityx2kX1vAtzuoS013NqSOJYzElEVw909HEC5sEmMgeuc2lSxIiQtV3Cv7e0d59Ij7DHDKTvEDk0qx2yXAQvjnbX33Gou4q9RgaZzHjz6ZMyR4X7iyHLjIrQkNL4YO4JMxVVPlgnTmxpt4UweYaGnnX7JUOg%2FaRjd%2FzNPqsHS2tVBssKS4xTUcBlXhjnn1%2Bh5f6LKws3TuGP7D7%2BeHzjIAeTWhF&X-Amz-Signature=e48919c98ca10614a84a85a50ba0aae1135f8b2b1670121c89d96372da79fcee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EU4YSIU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCH2WWBACKy2CSW%2BPe8bPQZuqTibYNEHGUNNjkeFPTmk4CIQCX7iIhNWYtb%2BGOEDav6lmjoG%2F2f9FCP%2Bjxyf2uLti%2BkyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0rbSAWmsFml%2Fl6mKtwDgPyG48ydT4TnafwgmKtM5z0W9roAZAT93jY4%2FXRS06uiwe0PO97tfkvtYCbQH6bpi5QYZbyClywV0joA9YkpC9OfqRxwdF2Z%2BxJlRjEHQxWOoBAR4KB%2FJlg5Df6YRAUtBtZMnPSgBWMiSJMx%2FZaHAU%2F%2FpVoJpMrcBdDxf1YD4uoZSFocZhsq1RrdLbZNmnNRu077%2BJGO%2B4vKpgoDMX2aD6W7eL8ox7PaMp7SThMeCzU59SjXl7yHidWPvamSvNOecsygBYZxeDcPIWsWDRcU%2BH%2F%2FtuZLIV4l4L1eWaE08zU%2FuknkloUH9Azy8WS1S1P2XbHRoo8QUflsB%2FtA376p7Mxv5YyLhj55bemYXMWnausGjtBpuYNar9y2OZ3%2BZ9Evgr8gdIdAQA%2Ff4MDbs4%2FKVX7jAmjg2jACcKekwq9uXCZewNXZxQpCR%2BBwXWh8IckVt1MGOjWh83uLRcAnyli8%2FDCDgPpr4I%2FAyFMjsgJO9BKdX%2FZ8tfPY4zp2haWDmBX7yu6BiCXkr%2BDt2bhReLUUC0hXHrt%2FwnrB36ahnsGR95OdVoB2NAEdGiWrIwoF3NSBzOndtoC3%2B%2Flj27SmBMCHahrgBQn8Njl7YsitlJQe2w9dsdQGgEREJ72bISIw6I2dxAY6pgGL2n7itA0jbyECxVH%2B4xGvzWR19InnQuwgte9xSfs8KCwayc3VcwbblDNvHXx3%2FLB5Uq178cMAzBk38WJOnwBQZHbIVxdwZb1wIvVyJQUytPiG3jwErAWA7F7ii1TPNznEjpdP4OzWcqqr51DJARp8J5gHZgRCofJL8QIGj%2BT1D4uckJ3iEZgwMnr2P5sXI%2BR29QcDAuzhEa0E7HZts9tupbxZg%2FDJ&X-Amz-Signature=003af826bc8c9eb3cdc4554df6e9fc2f221d180721a89cdfa91a8b49d13ee873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MS6BCI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDuPa537RqT1gQ0yCmTsjydJ3o5hXbIhpWKKcQgfZhfAQIgKFglf1SaLTSOJFHb2XBInqZZhvFvTNA8BeF6JdYMXCUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFA30QtG5albUjysyrcAwnSdquH3p9w1UpStjun2mQTooew6E69u0MWQhmKJodJK%2Bi4yR%2FsnMOY3Dh0l%2FOV8l7BdfRWJVxmzpYcOSvRTWm8FLBMnb7%2BMpYgDG1MSetRa%2BXaxfVBuogfy8oJNDy6MUmUyFkgIGKXDRVNCPNIrDYgPfCXJ3QeFzuU%2B74JgLxaN%2Bq8gsij7c9T%2FrAe1Y4aVjAnY%2BBjFUVFgFqMGwdh5dO2xb4%2BcPLHhDP5oPem21cburShnWoh5SXHQM7XH0G7iNBpGvgTg7x35%2FNBz7LbOoCrzlWzfbnG8yylLXcd6idQIj3JtQllzWhVqCux6WsXMJPEuqUyeXWoth%2F4yN8nEgmTl3eZXWXzJq%2FLclnnHjSTcy7OxCZnAtrRwx2B0qnIFdorD6BYY9IjBKWo3X448lylWLCnAXX%2B%2FSeLxfMaOyiu2ejlEyoJXJfS240yEo3mrK8SZJK4LxoY1Sglnd0dT68fzuYuZow4mZ4WpFYmM73P%2F8JfVjdotQWADfYFu3boBtKwQ5qMIOp0wbZzp69IkR1KRvznYu7lBZPnEtX1nnCG12rphxm0NS5gncGQh7a7ciyPBx9FcFK%2Fzd%2FfFddxGuMkNnQMGDgU4Hjnn3njOSlcooEqPF%2FEA9UN%2BBMbMOWNncQGOqUB5qfMGJK%2Bvss%2BqUKYJ4yQIxNUIXO5QeYAKTyjpR3hvFuOF6NfTAVvjp4jLgwN3ET3NHj1MJIEuy5ieFGxKXrbEtdtbtL2sy6pFpsJFql15ORyRFjGKk7Oa6h%2FzG3P0zNIAGG5o%2B%2Fhy5f0x%2FRQdmmn4AMX8J0hiU44BcHAoya%2FNeC8a1SUqBoyQ%2FgSa2YmCDgxdVkZr19JFOhSSvYZfDfZddVtanin&X-Amz-Signature=3b89f69ad6683f6bd1735e534af647fba21930d1512da678b4cd7c4fa6adbe61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
