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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RP6LEAZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnxzPjwx3hP%2BPyugZ6eSQn5k80nk%2BFR9u8K70u%2BEQH3wIgdBbjiCxn%2Fx2UEuV2zM6tXpdYvVFn3TGZkBrd3hoFVB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEaiTUVdKP%2BLYef8SrcA7l%2FZ16tUQoaV2ZjLo8qc%2BGUa6LN0KwEFqfoUG9MGectuzPCJOxh%2BvypxSv7pi7hc36ydBHzgBi2KFJEhUC0KJql46VIcuaB6qUlliduPPulp%2BXoSWjihP2uCYXBx9MK6OOVgW4HpLzUoji8Y1MD0VlFYCVIbMx5AySFDt3oT8QQpgbTVQmzYmoDBYq9VxN6XHO7HeJFpGpu6ZOpm0jQiU3tNwDzxhyax0P%2FTgGXH%2FY6BzxoOpSABDXjZPIIO9attejwHVIzTSfOV2XAtbRFfMlmlYZh5qMsHo7pUvXDt1gt91unk1UdxbueFn4fei3iCrcJixF27rztkX4KiIiKFqBRqMuIC9zOsUK2OSurErY0VNkHAZr49sLdciVwsLEXHIMBn18LvGLQ%2F3ga4uq5oCk1r%2FC%2BXqKe9MRkWyZho7qSJdyUOkHiLgrFQ3xd5xXDjdBk5CSLYTlcVrPovCul%2FHfeg8LCh6V8ax1yPcQfOGNB0gcZnsqUXXPRslEeWoy2viJTEYU5CiGogSn3AFpK5ixG3d4OvOPyPT8hR3oXIvw%2B%2FXekD3zkOZXpgbh8CzJkRhdJpeBoZZN%2FEQLCfhdxRiWkd2slTHfUUx3OSZh%2Fy%2FCdvtmaR78v55qDMO1NMOCLucMGOqUBXMM%2B1yL00yeSpJI1tqxNyK7K4cCUg%2FRcplELKQdJsABFG3FML8Le12N%2BDWUK98LzV2ObwHh9M9BXg6xYCjvH9l8Qpelt1O11zQMQDRcULSr4dksiT%2Bdn0pIyYfWh%2Bw4%2FuWzXzKPbQ%2BEVzSL4D6PX04hWFarfN8ETzRLObua0cyKv2AgfeYF9RmfhUX4aAnapokEJlYsBhGGH8uVuB%2FQBkfYDaK1p&X-Amz-Signature=9a9f6269c8f625b37b3b052cb25f79bf4212da6d9f184ebe945a8f4242c9f392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RP6LEAZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnxzPjwx3hP%2BPyugZ6eSQn5k80nk%2BFR9u8K70u%2BEQH3wIgdBbjiCxn%2Fx2UEuV2zM6tXpdYvVFn3TGZkBrd3hoFVB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEaiTUVdKP%2BLYef8SrcA7l%2FZ16tUQoaV2ZjLo8qc%2BGUa6LN0KwEFqfoUG9MGectuzPCJOxh%2BvypxSv7pi7hc36ydBHzgBi2KFJEhUC0KJql46VIcuaB6qUlliduPPulp%2BXoSWjihP2uCYXBx9MK6OOVgW4HpLzUoji8Y1MD0VlFYCVIbMx5AySFDt3oT8QQpgbTVQmzYmoDBYq9VxN6XHO7HeJFpGpu6ZOpm0jQiU3tNwDzxhyax0P%2FTgGXH%2FY6BzxoOpSABDXjZPIIO9attejwHVIzTSfOV2XAtbRFfMlmlYZh5qMsHo7pUvXDt1gt91unk1UdxbueFn4fei3iCrcJixF27rztkX4KiIiKFqBRqMuIC9zOsUK2OSurErY0VNkHAZr49sLdciVwsLEXHIMBn18LvGLQ%2F3ga4uq5oCk1r%2FC%2BXqKe9MRkWyZho7qSJdyUOkHiLgrFQ3xd5xXDjdBk5CSLYTlcVrPovCul%2FHfeg8LCh6V8ax1yPcQfOGNB0gcZnsqUXXPRslEeWoy2viJTEYU5CiGogSn3AFpK5ixG3d4OvOPyPT8hR3oXIvw%2B%2FXekD3zkOZXpgbh8CzJkRhdJpeBoZZN%2FEQLCfhdxRiWkd2slTHfUUx3OSZh%2Fy%2FCdvtmaR78v55qDMO1NMOCLucMGOqUBXMM%2B1yL00yeSpJI1tqxNyK7K4cCUg%2FRcplELKQdJsABFG3FML8Le12N%2BDWUK98LzV2ObwHh9M9BXg6xYCjvH9l8Qpelt1O11zQMQDRcULSr4dksiT%2Bdn0pIyYfWh%2Bw4%2FuWzXzKPbQ%2BEVzSL4D6PX04hWFarfN8ETzRLObua0cyKv2AgfeYF9RmfhUX4aAnapokEJlYsBhGGH8uVuB%2FQBkfYDaK1p&X-Amz-Signature=44f50b15af62c7cd8a33b6845ca67ac477e1123859f303f989eb05aaf3d9ca9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RP6LEAZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnxzPjwx3hP%2BPyugZ6eSQn5k80nk%2BFR9u8K70u%2BEQH3wIgdBbjiCxn%2Fx2UEuV2zM6tXpdYvVFn3TGZkBrd3hoFVB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEaiTUVdKP%2BLYef8SrcA7l%2FZ16tUQoaV2ZjLo8qc%2BGUa6LN0KwEFqfoUG9MGectuzPCJOxh%2BvypxSv7pi7hc36ydBHzgBi2KFJEhUC0KJql46VIcuaB6qUlliduPPulp%2BXoSWjihP2uCYXBx9MK6OOVgW4HpLzUoji8Y1MD0VlFYCVIbMx5AySFDt3oT8QQpgbTVQmzYmoDBYq9VxN6XHO7HeJFpGpu6ZOpm0jQiU3tNwDzxhyax0P%2FTgGXH%2FY6BzxoOpSABDXjZPIIO9attejwHVIzTSfOV2XAtbRFfMlmlYZh5qMsHo7pUvXDt1gt91unk1UdxbueFn4fei3iCrcJixF27rztkX4KiIiKFqBRqMuIC9zOsUK2OSurErY0VNkHAZr49sLdciVwsLEXHIMBn18LvGLQ%2F3ga4uq5oCk1r%2FC%2BXqKe9MRkWyZho7qSJdyUOkHiLgrFQ3xd5xXDjdBk5CSLYTlcVrPovCul%2FHfeg8LCh6V8ax1yPcQfOGNB0gcZnsqUXXPRslEeWoy2viJTEYU5CiGogSn3AFpK5ixG3d4OvOPyPT8hR3oXIvw%2B%2FXekD3zkOZXpgbh8CzJkRhdJpeBoZZN%2FEQLCfhdxRiWkd2slTHfUUx3OSZh%2Fy%2FCdvtmaR78v55qDMO1NMOCLucMGOqUBXMM%2B1yL00yeSpJI1tqxNyK7K4cCUg%2FRcplELKQdJsABFG3FML8Le12N%2BDWUK98LzV2ObwHh9M9BXg6xYCjvH9l8Qpelt1O11zQMQDRcULSr4dksiT%2Bdn0pIyYfWh%2Bw4%2FuWzXzKPbQ%2BEVzSL4D6PX04hWFarfN8ETzRLObua0cyKv2AgfeYF9RmfhUX4aAnapokEJlYsBhGGH8uVuB%2FQBkfYDaK1p&X-Amz-Signature=b90e83df95bdd8fe20718a1a5ef45e0a915f2788b4392c850d4a9e29e6a3942b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EJVDLZ3%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbiW%2BJPMc1xh7HEp%2FFIvnwkcmTkuFzIzRxvjK4qQaMUwIhALzQQuIE6KClIf1PoVTp%2FLvULb7jtA5WfZU%2BzTdWgegrKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLRa3lmNllpViKGS0q3AOdz5MTs8iHynSXBzNLV1muvWCSJV5d%2BgrI1qQ2A84unPdsei24d%2FJqNzZ2Jp%2F2cryKeJceB27Pw1MZMojlm15w3fqZTvfddI%2Fyjs2jTS%2Fg7VZQTImkKnE9jWokrLRHydVq9r2DV4POcj96LTfszUtACWSlj3KTyJ2xt0gjODMCUgGDw1Ry6Kpm%2FsJxsrZNDKbrPbp%2BI5wPErak9bM1FC2sM8Q9kXVMcGQMJ4d7TzQjMlAB1PqJumFZtXviYxUWtNM8Itj8bTsjx5u19kGTZ38bODfhLIqROdc9dMu9mBACdkfVi44Vc89B5x19uiJdrTshLrvlE9BwpzPK5J9WCC53%2BvwstbCdfNexoakGHtrsqkcND8KD%2FWCw7qJ0Xgg%2BIq%2F9fShawxGGMWl7fNHMUJ%2BT0dP6xdKsQ2%2FsGzlpykYC2qbmtzC4XYaNxAxKOpK2v%2FxP%2FDmy4784jaA8AgKpzFP7DHUlJsM7ANuYTJV0RLcphD47FnLm4CaFMCYmUcoeULng%2B3oCHN167NDaeDe63F%2FGq7WJhhoi4UuMJgzYRHFfhELER4ojqnHqm3sNdePsyA6aouaqU%2BU2aZn3WKt7aPYY2l4cxap6rocjOrIPxWuG96sui0lwXrCIpIivXDD2irnDBjqkAdKHcWWcqA%2FYpXim1ke3MXDb9SIWxXURU9jEY7%2FTHFuKyVkTLRWyw0mecv5RuCutB3SwncET8T2Sqyhrxpw62LrQmYLcCAQGKO6Hpyg1DJdCMT%2BfeTKIIEZ8p%2F9BC1xJFY284DS%2BWiFhIhdVtZSzrbmcao0kiyzINgDN61kepJypFEs373Qx1u0L%2Bnp87OsYJKgcL85vu1UnFvLiWQIT1hJ5yujV&X-Amz-Signature=556e79037c8f4e29584c1f9d0b87182d022d9ecd3667e74e78970a4b0a93fb58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWANHIN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqPh32dZpF7aN%2FlChOwwl0K%2FHX%2FCNjbO6QDgbqPat1gIhAPVW3uF0LaQUPUar4LwBXNwUWZtJMp7HQUmCKhEkmWh9KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8sXcloKYZRpJitlsq3AMjgkk7Dwcl3HmoEi%2BzCI9naGz9rxXUrG7qvpGvm2CxULMBePhDDiVMm8zCnvJyvP48FWcOXEqmVvrRHdaxOfkp3ZOz%2Bkqbbv8QSWi0PsB%2FdYCiX%2FOiR%2BnCIQUdy%2FGgmv86w%2FRNKtdB5KvA1SeCvJW1UKKcVaHayEnTYb2VjkGID%2Fr4W1cusjZ4HcNTYBfwZJt%2BP6YDbMBQlbv8Q4ttAZEX3l9Y%2FuOu5W6lbvd3GMqEQYUxybqUJ51unpudjoJuOulG6y3NUmDUYXo1GRy0x4EbPMGSZ%2BqrDvENuKyJ2A24uC50HjGVh0EUWidJAHxMtkftCqs7meeY%2BtIcNTHKCvX6VKr2u95iWw5UdpZiU1w7DC9h70XnWx0UsAjlunhDFp%2Fffavmpm9ax%2BZpyG7ERQ0ftWYgqMUAUXS8ujoQj%2FQk5QK0243y74VUfJzEUULrn%2F80Zhw8wyLVAaYti2ji%2BevfG5zCBcgJj%2BpTg6CqF73XoO7mZBN1JGbHsTxIf57s6qIuwy0idZ4PX7AbLN98eiIHnYAu6HL9pFnuTeM0%2FpSq4Jqbq7dHfE63Dn5s%2FP31ztsHBjnQXK3YFEXbpIjEu4MLcXOhpCqyD%2F75YAjb%2FHroUFZnRxgiAlJPvAJm0jCki7nDBjqkAePPWc4muckpTVsqbYsvYeg7IjZ4kB5I%2BZbeYlP5e0xxqmI%2F5vbqZ%2ByH%2F3a6dcRKdP4XlbrVPYX12ECA%2F5ogFPpo4X6sCnmgD0pNNuBTQBmXfjPdKMsFJCjEOyBKpUESckop%2Bdx2vJjwSMlv0GXAgvQGkXI5Lj%2BAh95Y3ZII%2Br24WxWeDRrsd%2FvhjnbNCB%2FSF8ZxgHuCXCaU3ZYXMWFvoxGKpifU&X-Amz-Signature=7bb25021cb0b40e269bc12cc1acdf1d4f913dc0515ffb637cf7a4a7637d260b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RP6LEAZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnxzPjwx3hP%2BPyugZ6eSQn5k80nk%2BFR9u8K70u%2BEQH3wIgdBbjiCxn%2Fx2UEuV2zM6tXpdYvVFn3TGZkBrd3hoFVB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEaiTUVdKP%2BLYef8SrcA7l%2FZ16tUQoaV2ZjLo8qc%2BGUa6LN0KwEFqfoUG9MGectuzPCJOxh%2BvypxSv7pi7hc36ydBHzgBi2KFJEhUC0KJql46VIcuaB6qUlliduPPulp%2BXoSWjihP2uCYXBx9MK6OOVgW4HpLzUoji8Y1MD0VlFYCVIbMx5AySFDt3oT8QQpgbTVQmzYmoDBYq9VxN6XHO7HeJFpGpu6ZOpm0jQiU3tNwDzxhyax0P%2FTgGXH%2FY6BzxoOpSABDXjZPIIO9attejwHVIzTSfOV2XAtbRFfMlmlYZh5qMsHo7pUvXDt1gt91unk1UdxbueFn4fei3iCrcJixF27rztkX4KiIiKFqBRqMuIC9zOsUK2OSurErY0VNkHAZr49sLdciVwsLEXHIMBn18LvGLQ%2F3ga4uq5oCk1r%2FC%2BXqKe9MRkWyZho7qSJdyUOkHiLgrFQ3xd5xXDjdBk5CSLYTlcVrPovCul%2FHfeg8LCh6V8ax1yPcQfOGNB0gcZnsqUXXPRslEeWoy2viJTEYU5CiGogSn3AFpK5ixG3d4OvOPyPT8hR3oXIvw%2B%2FXekD3zkOZXpgbh8CzJkRhdJpeBoZZN%2FEQLCfhdxRiWkd2slTHfUUx3OSZh%2Fy%2FCdvtmaR78v55qDMO1NMOCLucMGOqUBXMM%2B1yL00yeSpJI1tqxNyK7K4cCUg%2FRcplELKQdJsABFG3FML8Le12N%2BDWUK98LzV2ObwHh9M9BXg6xYCjvH9l8Qpelt1O11zQMQDRcULSr4dksiT%2Bdn0pIyYfWh%2Bw4%2FuWzXzKPbQ%2BEVzSL4D6PX04hWFarfN8ETzRLObua0cyKv2AgfeYF9RmfhUX4aAnapokEJlYsBhGGH8uVuB%2FQBkfYDaK1p&X-Amz-Signature=09f3a1e0d1037205bbaa641ef7109307ce36c40a1b09ff1b900239c8b0b9acd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
