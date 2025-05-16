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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWH53OU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBH%2Fd%2Bp2PJEx8KjT7F1QoUv6EvrkvNgW0INAK1oyjI7QIgWGBwpdtKjc0d8JuLYz%2BetOCh60UClcAwfCKLGPCyfR8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDjvrDMJ34m7LCupFircA8s4PVQJeHiRYRaONM79ngPIj%2B7gmpiDl7fvvWMhGR8CQHEz83%2FwkX8f0ujXh7YdGsXm0izIdqbZnEpX%2Bj0m4KKeDxRGAP0rrN1%2FHuep6cp60N%2B0UfOPbqh%2BKTaNd9t9cyHi4CuhlBDjbn3er1wg9%2B4F9Xw3A2FxKG3WJDh7UPknFccVbyYJhwS%2Bu5yfWJiyhQmz6gnL59lMhsPU54zYNZdnHjlHVETyB91wL%2F93LJL55rzqwMAvn1jeXeTS8aUGuC7xcgEUexonP4ZQIhzo0fgAx5Tu38iNpTubWksRa16X8sk831d%2F5jaUvYeVkE1e0vvAA2%2FcJBKwXmBefs5G%2BaUxwjgs6yjCXVeV4xLLc3NweUhH9GwPq%2F5DJFxdEKutQ7cR0jiA7PIRUZZkBAGlbGa9o9vXHAILQuw2RDxoNTzpifFuq3YUt1aVX%2Brk2SvsdnsEMi3pjr%2BW%2FrP3dwp4zN8m6wwk6Vd%2BmgKvAWkncPaf4eGEMlynIsGUgaNQyvj9kRqupnObYmBGLh%2BDZggGGw%2F7uU0Q%2FqOE4pfvA43GKtDosm3ZX3aXdDdtK%2BTAIjzNZCQ2y292NZghLvBsM30KdQhIEnYCD6XvIb%2BheMqRImZpgt9se6jPDGQAo%2FjEMJaCmsEGOqUBSag5j7i%2FalISudGa2zb7p%2BKTucahl3yGOQZvbMnhEmA9oR7MHtg9aR%2FMSkmMOxgniryAIStK9Fqrkq%2FstsIdZpWr3e6RprZgVoBu%2FdGuQ4GdTaZ%2FE9aP7tT%2BjgEzL9DFZkrVVJT07n0xiGbVjW%2BKeBwUYYCqlJFtFlpXK6jRT8rHWAzgZ7cyHTGooZVYETz9%2FpObULjfEoUSmBl9OIF%2FmBxmDOgy&X-Amz-Signature=c859820767ce4ed247701973972d604354f0905c994eba7945483ddba74eea1d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWH53OU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBH%2Fd%2Bp2PJEx8KjT7F1QoUv6EvrkvNgW0INAK1oyjI7QIgWGBwpdtKjc0d8JuLYz%2BetOCh60UClcAwfCKLGPCyfR8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDjvrDMJ34m7LCupFircA8s4PVQJeHiRYRaONM79ngPIj%2B7gmpiDl7fvvWMhGR8CQHEz83%2FwkX8f0ujXh7YdGsXm0izIdqbZnEpX%2Bj0m4KKeDxRGAP0rrN1%2FHuep6cp60N%2B0UfOPbqh%2BKTaNd9t9cyHi4CuhlBDjbn3er1wg9%2B4F9Xw3A2FxKG3WJDh7UPknFccVbyYJhwS%2Bu5yfWJiyhQmz6gnL59lMhsPU54zYNZdnHjlHVETyB91wL%2F93LJL55rzqwMAvn1jeXeTS8aUGuC7xcgEUexonP4ZQIhzo0fgAx5Tu38iNpTubWksRa16X8sk831d%2F5jaUvYeVkE1e0vvAA2%2FcJBKwXmBefs5G%2BaUxwjgs6yjCXVeV4xLLc3NweUhH9GwPq%2F5DJFxdEKutQ7cR0jiA7PIRUZZkBAGlbGa9o9vXHAILQuw2RDxoNTzpifFuq3YUt1aVX%2Brk2SvsdnsEMi3pjr%2BW%2FrP3dwp4zN8m6wwk6Vd%2BmgKvAWkncPaf4eGEMlynIsGUgaNQyvj9kRqupnObYmBGLh%2BDZggGGw%2F7uU0Q%2FqOE4pfvA43GKtDosm3ZX3aXdDdtK%2BTAIjzNZCQ2y292NZghLvBsM30KdQhIEnYCD6XvIb%2BheMqRImZpgt9se6jPDGQAo%2FjEMJaCmsEGOqUBSag5j7i%2FalISudGa2zb7p%2BKTucahl3yGOQZvbMnhEmA9oR7MHtg9aR%2FMSkmMOxgniryAIStK9Fqrkq%2FstsIdZpWr3e6RprZgVoBu%2FdGuQ4GdTaZ%2FE9aP7tT%2BjgEzL9DFZkrVVJT07n0xiGbVjW%2BKeBwUYYCqlJFtFlpXK6jRT8rHWAzgZ7cyHTGooZVYETz9%2FpObULjfEoUSmBl9OIF%2FmBxmDOgy&X-Amz-Signature=040be4ddba1c5d7b954680d9796e497aeb9017dccb538d4cffcaa71c11f60f74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWH53OU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBH%2Fd%2Bp2PJEx8KjT7F1QoUv6EvrkvNgW0INAK1oyjI7QIgWGBwpdtKjc0d8JuLYz%2BetOCh60UClcAwfCKLGPCyfR8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDjvrDMJ34m7LCupFircA8s4PVQJeHiRYRaONM79ngPIj%2B7gmpiDl7fvvWMhGR8CQHEz83%2FwkX8f0ujXh7YdGsXm0izIdqbZnEpX%2Bj0m4KKeDxRGAP0rrN1%2FHuep6cp60N%2B0UfOPbqh%2BKTaNd9t9cyHi4CuhlBDjbn3er1wg9%2B4F9Xw3A2FxKG3WJDh7UPknFccVbyYJhwS%2Bu5yfWJiyhQmz6gnL59lMhsPU54zYNZdnHjlHVETyB91wL%2F93LJL55rzqwMAvn1jeXeTS8aUGuC7xcgEUexonP4ZQIhzo0fgAx5Tu38iNpTubWksRa16X8sk831d%2F5jaUvYeVkE1e0vvAA2%2FcJBKwXmBefs5G%2BaUxwjgs6yjCXVeV4xLLc3NweUhH9GwPq%2F5DJFxdEKutQ7cR0jiA7PIRUZZkBAGlbGa9o9vXHAILQuw2RDxoNTzpifFuq3YUt1aVX%2Brk2SvsdnsEMi3pjr%2BW%2FrP3dwp4zN8m6wwk6Vd%2BmgKvAWkncPaf4eGEMlynIsGUgaNQyvj9kRqupnObYmBGLh%2BDZggGGw%2F7uU0Q%2FqOE4pfvA43GKtDosm3ZX3aXdDdtK%2BTAIjzNZCQ2y292NZghLvBsM30KdQhIEnYCD6XvIb%2BheMqRImZpgt9se6jPDGQAo%2FjEMJaCmsEGOqUBSag5j7i%2FalISudGa2zb7p%2BKTucahl3yGOQZvbMnhEmA9oR7MHtg9aR%2FMSkmMOxgniryAIStK9Fqrkq%2FstsIdZpWr3e6RprZgVoBu%2FdGuQ4GdTaZ%2FE9aP7tT%2BjgEzL9DFZkrVVJT07n0xiGbVjW%2BKeBwUYYCqlJFtFlpXK6jRT8rHWAzgZ7cyHTGooZVYETz9%2FpObULjfEoUSmBl9OIF%2FmBxmDOgy&X-Amz-Signature=07fd389934ecbd35330de726c664bd175f173e5dd4f0019499db7d2dbd4fde71&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IU3T75N%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBffK7aI6MqMhi2OU61PNhpzzI6u2pgEAPs1geNPsWPFAiB9XdMxaF465hC02GMPzl9WhosC1fdN%2FCwXYNQDDAZOiSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMUYlS6QKgavSGjzaoKtwDHlTrNoy%2FUjFQYwqtfunj%2F1hdIo76pFrlPXyakMKdJim7iM6edCRDidp%2FLzA1406GI3Ig83zvhc8tvu39zAWBaNtgnJbDDCyIR9chsICVfkTYZ9ltxU0h9o2iPegFwCMjm%2FtORgbSrU5jp5FrvGknfWx8TqSaQaqm8QnrsZ2GRqlvePIk9j1UM43rw%2B%2Fk0c2%2F03lxt5Pb2WN4mWK3XFq4nYg8UtXMmYtNBvA%2F%2BCMbZVUjZieR4bvDcBBd%2BY9ts6qXwZ8y5nR0RcZ3TsKxJYjPqVqdlaaLDiYEB7OZSsCdU0FfRBR%2BMWOXcpzemR9KqQTKuGRU1%2BYYPN4tYBBV5UxM0Np9eKdDt2piWQcv8SzT3XNuH07XJsbkGIKlkcpaTI3JTcD4lmDH6s3YqDVzVif9jBLu58c3XDwwtIJL2gGx7D1SbyripcrkyBLfk4zVYp0IymbEaWhi%2F3tt2J6CE3dzbHtkH40Mh1AxQlMe%2Fixw2dk76gZ7jmiGBVxaKBardUQY0oO3FE2RaQwAt%2FdTcDNVjcmE546zRcvKyjc6opqUA9J5Nfkx2GLX9G8AadIxrtigrKCPcu8S0CsHSHmpYTVCX5zU8KLyAw1IaVL9yHUQydFjgebqg8DEgau%2BTHow7f2ZwQY6pgHAvyZQagXuz3XE40CasopsMy3jxBAs%2B6dnYX9dCYcRFbAiF6t6tBJK86K%2B5L3x7b66DMHL2rUCvRTdxDueKyuw3q04yXHgjmS2Ef50w24ETqPIK2Q2a%2BjfT8dGH4%2BdXsDECJJ4ccDgfSWAbLh0A%2FPw93Vj6nrfa%2BHmouLB8uIyf6FJNiVLqIbo%2B7MI3P5oy%2B04HBsiJY%2BA1U0SWg27PwmHldH5dBBG&X-Amz-Signature=c31ee3cbb50957b12d2bf75ac91a4d3cc4030110b341d71ccda838731e6849a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXEP53O%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJX5q1LdOz0sR7i6XN05ugE5pj4tHo%2FrqhF%2FVGWOdQwIhANRpgv6ZeUX9Ru%2B7IzUpbQ80k07UU9DWbJIa2wOnY8ZbKv8DCDkQABoMNjM3NDIzMTgzODA1IgxswqxmdZZPFGrkU2Aq3AN48A6jcpdKhz7Ne3NEYeYCKlYiESWHqoqQPsxWNo0Gjx7YjC7QyGLhPcFiYtoWOHwu6dV%2BmKkoUNyMPljKD%2F61oZnsRuFe3hUJXmjcHEEsS4sJnwpPIUCU6c%2BNPJqy%2FrG4p4eLbXFnrjzmHmctYBaILP9V2jqjvZ5cqEL58ND9lEgQqLW4uNcGiJrVo8fSVkgespYH7GXKfFbTcgxjZFMU6uNf2tIYZJ4TJ%2FgFpocDhzqQjAQMm%2B4qkGNmuvyBtoCYK%2BgWXlTbE%2BHGUZYnvMJ2fp8snEC%2FVf13sfK4WvyjLwVSe8YryqKPOzn5EYgCGe8jBVN0y6Wv60lRMRyhrnT0dKnaE7DMPpqhtPo0cuqU1WMCrRJ6D4ykyNblSCm7Ue0KSkkSHuh8t863gizFvLO8or0QECMs9xBo3IsYYkIiLt0lEg2EgQ7KwlHUAoW0vGLz9eta%2BcNuOh2FuGjbf10b55VYuAFM75qR%2BdGupnwyN4lwdDlRK2gN%2BFzr%2BcLL228BnkEKTKxGBKjFdcYGRWJNtKXSE0jGITJpqKq5VXOlt6D76jyqcezDkOOzYbmxzSBr%2FrpGWnbHkNdUrcLEzx6l8l%2BG41s7bvDauwLmOUZdbFBscuQhwhOOxHwMATCC%2FpnBBjqkAaoVUqSyiwh1kZ5Riit09nV3UxaeYR46CndR6nrQBij3Xf5E7wOIben1ZEwofhNsL6rlaon2HzDPLLp6S1%2FvVHbXwYdJRCBHv95w%2B9UXCGfdWfZ4wF1LqoQLlFQoLKXxoY6bir7EkgGaqo0NEV7eCvLgoD%2Frp2BzoX%2BW29piXFHsyYsx%2FndqW0pjSg4yJjWo146RmB1RT%2FE0H02xHfOVqnyaG0Iy&X-Amz-Signature=9baccac152d59cbfe557e98b6cb574bff6a304de357002d2f9b38f1203be5efb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWH53OU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBH%2Fd%2Bp2PJEx8KjT7F1QoUv6EvrkvNgW0INAK1oyjI7QIgWGBwpdtKjc0d8JuLYz%2BetOCh60UClcAwfCKLGPCyfR8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDjvrDMJ34m7LCupFircA8s4PVQJeHiRYRaONM79ngPIj%2B7gmpiDl7fvvWMhGR8CQHEz83%2FwkX8f0ujXh7YdGsXm0izIdqbZnEpX%2Bj0m4KKeDxRGAP0rrN1%2FHuep6cp60N%2B0UfOPbqh%2BKTaNd9t9cyHi4CuhlBDjbn3er1wg9%2B4F9Xw3A2FxKG3WJDh7UPknFccVbyYJhwS%2Bu5yfWJiyhQmz6gnL59lMhsPU54zYNZdnHjlHVETyB91wL%2F93LJL55rzqwMAvn1jeXeTS8aUGuC7xcgEUexonP4ZQIhzo0fgAx5Tu38iNpTubWksRa16X8sk831d%2F5jaUvYeVkE1e0vvAA2%2FcJBKwXmBefs5G%2BaUxwjgs6yjCXVeV4xLLc3NweUhH9GwPq%2F5DJFxdEKutQ7cR0jiA7PIRUZZkBAGlbGa9o9vXHAILQuw2RDxoNTzpifFuq3YUt1aVX%2Brk2SvsdnsEMi3pjr%2BW%2FrP3dwp4zN8m6wwk6Vd%2BmgKvAWkncPaf4eGEMlynIsGUgaNQyvj9kRqupnObYmBGLh%2BDZggGGw%2F7uU0Q%2FqOE4pfvA43GKtDosm3ZX3aXdDdtK%2BTAIjzNZCQ2y292NZghLvBsM30KdQhIEnYCD6XvIb%2BheMqRImZpgt9se6jPDGQAo%2FjEMJaCmsEGOqUBSag5j7i%2FalISudGa2zb7p%2BKTucahl3yGOQZvbMnhEmA9oR7MHtg9aR%2FMSkmMOxgniryAIStK9Fqrkq%2FstsIdZpWr3e6RprZgVoBu%2FdGuQ4GdTaZ%2FE9aP7tT%2BjgEzL9DFZkrVVJT07n0xiGbVjW%2BKeBwUYYCqlJFtFlpXK6jRT8rHWAzgZ7cyHTGooZVYETz9%2FpObULjfEoUSmBl9OIF%2FmBxmDOgy&X-Amz-Signature=f08a1041f2295efabfa2b79d7481544cbcab3ade4c918a9bee2ea806bafc8d33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
