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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCXH2KR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsXGPOErvONHpqDldbU06b4C%2BwVRT9OZbKtyNSENZtvgIgbRj0VUGKL4qNEmB9exgItkqY%2FCMNvjPeV2AXUr%2By8kIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKG63I7G0%2FDmjSz5QircA8l8aMhWjtqJtPNB7v2WFu8Ej1ilI9XkTFOckp0EA35X%2FZYH3obUolrVHna8X%2Fv9fnFVcsuzto%2F4B%2BFB5JPZUeJiLUf6xu%2BSlDePXTWSSpuKQFEpyOb4pseKG7wmuj1E3TIRnmJNK6lYTXJOp1wLxGSXBWOwjFEm8DOo4aS6g672%2BqAOdj2eRNiTIGsrlFK9sORJs2OoSvMU8AU3DSSDr9V4ABJ6IiazMv2cdvWHEZED0mJuAHICW6C6q3HvbXZmTcUjrEsQOBFgdD8t1dd%2FCUG9Yu5r7NAhZuxkLU40%2Bo5UugZayUzHwTxfmktq3BwX2wMQmHmfJeqRz0n43odRdd8jRoSAQGVtc64LDdUSK44%2FmaFml3jzO7mKgeQn0nPnwlRGpn41kvAD01xcm7jihF5ERvx4pWJJeWr7trmtHpSAjWKqoeGXq%2BOZpBv1T8e%2BbeArj3XkuAIvdExHCHoym%2Bp7z1Kfin1a6trIeKB%2FO5n1TcPLd5c1%2FB%2BPxqfOPHtT9f4vEZwzJbUUwYzFDnTctqbtcGI59f0eQ11S7PhW77sMmgxu61VXmDlSbce9hId3c%2BS%2B1kJiV1TkcrfoqTwUNEO8iOvX3anoOVcKnX2cV%2BMWfYM1nN%2Fmf29lP2U2MNrA%2B70GOqUB8ORguUZt2%2FPs2q9N8bwX9BV5OC3FW9R6vlYrxI%2FXE2DxqStL9hX8yOEl6luI0F5%2BXVIcAygd%2BeTnx5zr3xg6%2FhM0cWH98LpfcVDxGUZq4nDIiSlxRvwpS2eGZHhxq%2Bo8BczyrPYoyouH7UKWwZgT27SXlC9t%2BxHzP8IDGqo7o48NPg9IUhklpm8psLwpkLJ%2B3Gs55bM5nKdwDS0DTQmugo08BRyV&X-Amz-Signature=f2bab950a4e3ae8cddeebf4ad3b28008436286480598deb92a23f7f5f14d780e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCXH2KR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsXGPOErvONHpqDldbU06b4C%2BwVRT9OZbKtyNSENZtvgIgbRj0VUGKL4qNEmB9exgItkqY%2FCMNvjPeV2AXUr%2By8kIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKG63I7G0%2FDmjSz5QircA8l8aMhWjtqJtPNB7v2WFu8Ej1ilI9XkTFOckp0EA35X%2FZYH3obUolrVHna8X%2Fv9fnFVcsuzto%2F4B%2BFB5JPZUeJiLUf6xu%2BSlDePXTWSSpuKQFEpyOb4pseKG7wmuj1E3TIRnmJNK6lYTXJOp1wLxGSXBWOwjFEm8DOo4aS6g672%2BqAOdj2eRNiTIGsrlFK9sORJs2OoSvMU8AU3DSSDr9V4ABJ6IiazMv2cdvWHEZED0mJuAHICW6C6q3HvbXZmTcUjrEsQOBFgdD8t1dd%2FCUG9Yu5r7NAhZuxkLU40%2Bo5UugZayUzHwTxfmktq3BwX2wMQmHmfJeqRz0n43odRdd8jRoSAQGVtc64LDdUSK44%2FmaFml3jzO7mKgeQn0nPnwlRGpn41kvAD01xcm7jihF5ERvx4pWJJeWr7trmtHpSAjWKqoeGXq%2BOZpBv1T8e%2BbeArj3XkuAIvdExHCHoym%2Bp7z1Kfin1a6trIeKB%2FO5n1TcPLd5c1%2FB%2BPxqfOPHtT9f4vEZwzJbUUwYzFDnTctqbtcGI59f0eQ11S7PhW77sMmgxu61VXmDlSbce9hId3c%2BS%2B1kJiV1TkcrfoqTwUNEO8iOvX3anoOVcKnX2cV%2BMWfYM1nN%2Fmf29lP2U2MNrA%2B70GOqUB8ORguUZt2%2FPs2q9N8bwX9BV5OC3FW9R6vlYrxI%2FXE2DxqStL9hX8yOEl6luI0F5%2BXVIcAygd%2BeTnx5zr3xg6%2FhM0cWH98LpfcVDxGUZq4nDIiSlxRvwpS2eGZHhxq%2Bo8BczyrPYoyouH7UKWwZgT27SXlC9t%2BxHzP8IDGqo7o48NPg9IUhklpm8psLwpkLJ%2B3Gs55bM5nKdwDS0DTQmugo08BRyV&X-Amz-Signature=fa709d80980f744b798bc6f3c01a19e6ffb717126601bcc24044bd9159198f75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYUWPO7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIG6nw8f1RrYJ3PJ%2FEJLelbf3b9ZAUMmU8gOet41UYWstAiAKllZF5vCXePZHJDR93Cdm26F676j4MpS%2FTPulu2w%2Fiyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM9aj7GSL5pI1RYtr%2FKtwDCt4RyBJqlyGKjqDwhJVhEWkcyg2fxYaw6TcDZ2Yt9Sw1Io3g8%2BUcOgM84AAi2n9KTlyV%2Ft8AaxPxWpQi8%2Bpp46Dbwhy84mG4pu2jSyHR%2FVKRgfVcb3HpM2PZIC1zZ941qAk0y97Iqxrf9ArfOO%2FqiLmhxfDhg0ffWEHM4UATL2jmUuTtunCdSJ%2FTaZT04TQ2Hw3bPQboKes2%2BfOmi4DOBfY2202ZetDKvPsK9T7yJBZm6nGnO%2FZALH9vRzj9XUodAPWVos1dBkwRn0jVIdQUeQyJeM5FzS2nKSyHhLbK%2BJv5bxeRrznbTb0lX9rhRl%2Fa6KG6uCdGJvLCRjSMUlnAd9Gs5KU%2FVDrbKnY08Y5rR5CXdL%2FGP3oM1ZjPnc8MhG3KmSmd8p7niPzTc77AwLVY5YgU%2FXn24zyYQ3VgNXFyW5uJuwcQng3FSFUDCgXkvmH%2BMfkdhALmj6k%2Fl11syi7F6inqR1rUNzs7dv75ljbwh%2BLKlY%2FH53zX5ZiR2VUjq%2F%2Fcq5aK5%2FbKXiA8%2FHrNfQ9ZpOseE%2BhY03PV%2FnS8DMA0XqLbVr116dYC42%2BVaDGwjrhshheZRs6UNrhJK%2Bif3syf%2FpecwxoyNcEOgWSIn6uGY4GtFwX2YHbdPgPAwc0wob77vQY6pgElzeZU4Esk3uKfSJDgzTUCuI%2FDX7khCq6DDWNgUxKCfebPAPBUAgeHhnaaI0aKzJOFNsujJX6hL%2BV2RMJJOVF5ICPIItCJoPQ5gCD1tQ6i1u01b2in444vK7KQOUPhM3ugCjTaaACvmtbKN7TxabcmLbCunYx3Gc5XH%2FtxOHr8NXfnG%2BPcrDsBZCHJG0F%2FALfbjDon%2F8XsHUZr97k5tOLifvLNOU49&X-Amz-Signature=f3fbe3e42503b9970a361cb8495c350121291eca2628569d5e848367e9ff4f43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RY5JC24%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBfH5DFwa5BKM6jng0JOTxYeZ5XEqPsQcBXjcaucB3k5AiBu4KsDy1rZ30%2BKgM%2FvA7F149rym1zjuq8uDvFUnYkxmCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMry2RW35Ej0jknkg9KtwDMlCo82zuCIK0yP1zW3WYgUBCi1XTIYJz4%2F1nFHcudu5gsX5uvMApLpxcr9BZQBpwAIJqy7RD42TYbh%2FVJMMzjo0%2BT7SHNYh21FlhqfhDPRedqLZh4jtjGaOYIZf%2FaM8gv1BtdiS2%2FsZh71bN%2BFk5OwGCKRZ3j1tYjW7CwR2xzUHaMfGGyIJbecydJ5CxHBSw3BiMvyNSYtLYvYIluK9D%2F0SE%2Fx7sL2BZga0F5H3D6F8eYhfLmskYuEHiBNcfRo3201DB5Py84cr50IbQAbdlKVv%2F1cVHrIV5XB8LPdP%2BIGxtlO8ldvHrlyOGc%2F0C%2BaLQ6C4TQbRWIvHpScaukbEBjGawixl6ewLpGY%2FoKV27F5ygaxVVRuCu33%2B2QG4vFYyZ4Ax0h6CsKFwxj0T49PPZ1i8hjNG2ybLI8BLFjYswJTRePqLDjaD536YYuBgBK6mi8%2BWUdHs14doWFpPNEgUaE94wJ%2FMViMJraJa9BCZVF%2FOaGF6hHEhc4Zx%2BZ60kjpKwk4cb1thaCn%2FY9JGqneQAF27VbSddgyML23LWQmSIyTBDLdL%2Bn%2FkrgrGsKuza9qRKYusiLySWPNYDkDJrRCwW6Bm7j3fyKSDk9V5XrIfK%2FAuZ3GHvKxJwWidHWaUw27%2F7vQY6pgHDQiRuFAgd%2FaKe1tYTwPUKwehgE5w00ctjcqrc2owjw5wLNJm7QgKk3H8Tcfj%2FEs7QlN9qjh5aDghgkWdfEr%2FUZkVeH1OWk2edH5330gqzZQTiji2odUE7cB2KbjB4BQ%2BB8rQwBRrz4i3U9yUJJCMWke2E0eJda2DGVFR22vTOp1cV5mEs7q4zLlAfsPZIpbYik5aDjtB0HIX09pQI2PoVJyNDAl%2FK&X-Amz-Signature=f2ce779f7e06361e6147f588527092c1b159b0770221ebbb6a8d73a19f1f5a31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCXH2KR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsXGPOErvONHpqDldbU06b4C%2BwVRT9OZbKtyNSENZtvgIgbRj0VUGKL4qNEmB9exgItkqY%2FCMNvjPeV2AXUr%2By8kIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKG63I7G0%2FDmjSz5QircA8l8aMhWjtqJtPNB7v2WFu8Ej1ilI9XkTFOckp0EA35X%2FZYH3obUolrVHna8X%2Fv9fnFVcsuzto%2F4B%2BFB5JPZUeJiLUf6xu%2BSlDePXTWSSpuKQFEpyOb4pseKG7wmuj1E3TIRnmJNK6lYTXJOp1wLxGSXBWOwjFEm8DOo4aS6g672%2BqAOdj2eRNiTIGsrlFK9sORJs2OoSvMU8AU3DSSDr9V4ABJ6IiazMv2cdvWHEZED0mJuAHICW6C6q3HvbXZmTcUjrEsQOBFgdD8t1dd%2FCUG9Yu5r7NAhZuxkLU40%2Bo5UugZayUzHwTxfmktq3BwX2wMQmHmfJeqRz0n43odRdd8jRoSAQGVtc64LDdUSK44%2FmaFml3jzO7mKgeQn0nPnwlRGpn41kvAD01xcm7jihF5ERvx4pWJJeWr7trmtHpSAjWKqoeGXq%2BOZpBv1T8e%2BbeArj3XkuAIvdExHCHoym%2Bp7z1Kfin1a6trIeKB%2FO5n1TcPLd5c1%2FB%2BPxqfOPHtT9f4vEZwzJbUUwYzFDnTctqbtcGI59f0eQ11S7PhW77sMmgxu61VXmDlSbce9hId3c%2BS%2B1kJiV1TkcrfoqTwUNEO8iOvX3anoOVcKnX2cV%2BMWfYM1nN%2Fmf29lP2U2MNrA%2B70GOqUB8ORguUZt2%2FPs2q9N8bwX9BV5OC3FW9R6vlYrxI%2FXE2DxqStL9hX8yOEl6luI0F5%2BXVIcAygd%2BeTnx5zr3xg6%2FhM0cWH98LpfcVDxGUZq4nDIiSlxRvwpS2eGZHhxq%2Bo8BczyrPYoyouH7UKWwZgT27SXlC9t%2BxHzP8IDGqo7o48NPg9IUhklpm8psLwpkLJ%2B3Gs55bM5nKdwDS0DTQmugo08BRyV&X-Amz-Signature=d0aaaa696bb7369bc5693dc33f000223028f6404a76142da51fabc4d976d8522&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
