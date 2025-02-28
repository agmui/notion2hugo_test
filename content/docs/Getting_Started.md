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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AJC4YD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeQQHhWHTMrxuGqt1tIjGS2LbvKLe1OB1usyQvioXiEwIhAOEAkIHpuGgXvY9Ym0ktM8gPegWvad2ezsNl8s1RvAcUKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkoRfSfUZME6URLwq3AOdyZ8Ssf7uv4FxhPx7VwglkTSuEi4KM9gCLQUboJoZYL2UoFrT9oIiDr6fyH0HT4dqtIWcOhHDKPezrIZf4KKHMAo%2BtH403DRHlsB7U8KGpcHKCfy2tDPdg45WPyrPy9Zs4G542Q70L73DXIJSYdxXbf422Z1R1yjLX5TuSzmPPe0069JR42D%2FC763jZLQzm5unKTRpcXd6X%2F6LyAqaIzzJYOVLHeQz5EpcKBN4S2fE0ZRzXvQtt%2FC5o26Pg7DSNxVStN70ARvPMU50VElknsiIr6tV7tdBKbgAvkxoX720GtqRsWftQ1Hie4UqG2Ta8KLjZgGGLyeGLDq%2Fq6Gu8hCQQ4qET4o3ivOH3PNK78xd1WNOci3AqZ3Nagx%2FpFmYunaUhS6y6SsofbMqM3kLX7tuHzH3dmfgaAaTEii9vWKQqHsPP7jA2OGSp95PeOIdiBl4DzdwH5eo4OHIx6qkfQ%2B5oNR281dDezkSJUiOJkRm%2FkUiGTk21zACuxQe%2FCCq7gt%2Fztf8ey5wunPlSC7mWHDkt0%2FhNr%2BkCZxVPH0t2r9mrrUt0Fm0g64mZgYv%2BJ667PlMiW9pz77jBvaum3POpNMvw5yXWpUa7zWzCKHFFgSXJGrzm6g%2FQQ%2Bwy29fDCc84S%2BBjqkAes8mhbmUB5YKUvsb57fw6hAQ32uB6Glxia9OYMjyqNhDnxY%2BHPdKnPbP3TJ0ri6y3ePhiA6aQc0A5Wk%2FKzFNC6C6PkeS%2FUZNA9oNe8ODjnr%2BMBVUJ6IkqmR%2Ft52pqKQn3dESaReHNTdSVzNUghPW4ikqHyDTGKjgEt9d9ajm%2FMuN8zAH2dUT1JxnrB7T%2FnIRVpKfEZ8%2BXA4oxfKXwI8CjlFy%2F0v&X-Amz-Signature=45c593fb086fa1dc8825729326364f7867e7d182826f88906b98a56bf28681d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AJC4YD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeQQHhWHTMrxuGqt1tIjGS2LbvKLe1OB1usyQvioXiEwIhAOEAkIHpuGgXvY9Ym0ktM8gPegWvad2ezsNl8s1RvAcUKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkoRfSfUZME6URLwq3AOdyZ8Ssf7uv4FxhPx7VwglkTSuEi4KM9gCLQUboJoZYL2UoFrT9oIiDr6fyH0HT4dqtIWcOhHDKPezrIZf4KKHMAo%2BtH403DRHlsB7U8KGpcHKCfy2tDPdg45WPyrPy9Zs4G542Q70L73DXIJSYdxXbf422Z1R1yjLX5TuSzmPPe0069JR42D%2FC763jZLQzm5unKTRpcXd6X%2F6LyAqaIzzJYOVLHeQz5EpcKBN4S2fE0ZRzXvQtt%2FC5o26Pg7DSNxVStN70ARvPMU50VElknsiIr6tV7tdBKbgAvkxoX720GtqRsWftQ1Hie4UqG2Ta8KLjZgGGLyeGLDq%2Fq6Gu8hCQQ4qET4o3ivOH3PNK78xd1WNOci3AqZ3Nagx%2FpFmYunaUhS6y6SsofbMqM3kLX7tuHzH3dmfgaAaTEii9vWKQqHsPP7jA2OGSp95PeOIdiBl4DzdwH5eo4OHIx6qkfQ%2B5oNR281dDezkSJUiOJkRm%2FkUiGTk21zACuxQe%2FCCq7gt%2Fztf8ey5wunPlSC7mWHDkt0%2FhNr%2BkCZxVPH0t2r9mrrUt0Fm0g64mZgYv%2BJ667PlMiW9pz77jBvaum3POpNMvw5yXWpUa7zWzCKHFFgSXJGrzm6g%2FQQ%2Bwy29fDCc84S%2BBjqkAes8mhbmUB5YKUvsb57fw6hAQ32uB6Glxia9OYMjyqNhDnxY%2BHPdKnPbP3TJ0ri6y3ePhiA6aQc0A5Wk%2FKzFNC6C6PkeS%2FUZNA9oNe8ODjnr%2BMBVUJ6IkqmR%2Ft52pqKQn3dESaReHNTdSVzNUghPW4ikqHyDTGKjgEt9d9ajm%2FMuN8zAH2dUT1JxnrB7T%2FnIRVpKfEZ8%2BXA4oxfKXwI8CjlFy%2F0v&X-Amz-Signature=08762fabedf282dea318a3407c11164ba82abce7c4fcf277c1644eb1d648e35b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF7I6LO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIE%2BYgYX1zo8%2FB%2FLIsFg9yF3nZ7juBNqc%2Bz02L1B%2FS6vpAiEA3O2yn3HY0%2BWcDXzQ0GfJUrVQC1QaP0BUcbHtnsqFAbgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpM8iP4tKteud%2BcVSrcA6iWrrwqdoPQYSdn2RpjuTFELNOitcbTiTMJaz5YLWBFt1KwISuHPHnRBXnU6xb1E4fw2HbnffOaKNI8c5Pts8S9eJvzAxZymurzBPrzEV8N5qucR45XFDerFHUH6fOqrL2pASeMjYFcKEXk6ptAaB1ZaBe0NPDzrn%2BWRqPqWvzbEjnlX7Lrkqc2wvEeI6TJD9MHmWY3r0F0X0hn5yFpyUTulM2efhVz5D%2B%2BgdU0ilCj7mONhCI84kuWyZ0lKGoKZIWrNiQTdIkvO3JgNujiIHaDqrPF3x0qf2San9xI4OU2kW1jpZeKuoXzcNXiVlvpLJmX3FRB4ezDYHbaAEZdZh7yQzz%2FqgWqRmUHFC550hqvLlsQJWG7FB%2F30c8RmbNLiedIZntdHSqsMQKtHGdNpe%2BT1RIauOW5tkoNujm0QfiP7xClwIwm%2Fbyfd13%2BgGmZL4atb5AdsvS3%2BOQbLtZpIsW39kQf7n2zZF0KSpTnKq6hfimXVt6%2FyqLZ4DK%2FF%2BD%2FV6JXEfrAyfWZnU1rLw9%2FuKCSb%2F19hRl6eJaYRyRM8HNjibpG3SmjTw%2FrkwTjyFy54GdM7SO%2BOS9u%2Bw9Lv5IKi4kYdO5Emjub6QvjmuDnzeb%2B97nkOY418u%2Fhvu9hMInzhL4GOqUBjEaGWf0u4IoUQ2Ls046aP6dTv1tzwNEh5oyaTpdRgub59vjjPDMXY1IguvlAEFnM0SDojWYz0Q4yT2DvaIKLm5mwc0DAVls%2BloGAXSSCjYUsG2sozPIk6UZBteC%2FkcnU7tL6Kh1eRPUDaEuLGkBUB0MUepxGQXqfvjMcFa2fne3xRFAd7LIx8OIpj%2BLa%2FXzaNYPxuq4bMhHbUewQQLElhwme57Qq&X-Amz-Signature=6b581bb744afdbb76db7d19bc447657eb421576fba2bdd72141a6cade7a6fc96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NPD6WVC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChoPN9kDnFMHsytA882%2B9G2VMNZme1qu9LjGEStU82NQIhALCQxT6V7PvNlamqG%2Bn3O6w%2BG5WshP%2FLTRdXP%2F%2FQin50KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7xxRLc19gP2S0q4oq3ANGyq%2BurbusJOkCATPVZ94QYJauDJKIY9zm%2F4kN9xVMWhnq3oQJrjgXve0ASGSwFnC13l2AbEDQ9Lns8iQogz0GRzx2Sxbk1DBiVYdUa6elfVPKn%2FqlOhDwut70lId7ORu1YjR7ODz2lpQc9YmU7VzC%2BFP69fz6NyNktiFEQ1zw5gws15ihFj2QJWhnwG3cjQR8dIrh3xdQvA6Hyo0QVrc0f%2FfblbAr45xGrXbhJ8Sl7TWJhwKMGMuggtUDlXWbmv1kDM%2BZ%2BdU4u8cUtTeUJJ3gCQ51J7BpQeMLC7iSMxkNt39yfjv8c6G3SdHakyM4Vr%2BKbNsEBOFb94ftv80FtzmNG9pSDjrxtK1UGZC6awLhdNHquuEAc4Kbu%2FRGfRWNrj8eh1N2Ciuy9YiYAw5YO6wQO6Wh4Y4dZ%2FR24mL8Ly7ECM2f%2FRBjvCJShmx5w4SUiEToI0FuuBi1kCrx3C31kXsIgzu6Yy2UfrIyHjChm2l%2BGrgth1fU60oujiScsG84Ex3xOPCUf%2BXiXLxYkohk74T96Yq6PsoPeJlgq0nBdHLBwdh6T%2BNJZLOLDd5mbvB97hGFuSCQzVi9FLhFlbuCuB7ESNEtJFVhZdTUaKGXwliXEQ%2FAfSHFtXfGFb%2BRgDCK84S%2BBjqkAaPRbgeCMD6t01XV3LkUsQceZ%2Fjafi7PzslutbQt7AQ2E1xaG1Te04A%2BLxKu%2B%2F0B4qlnti3UrqlEJ2AYr%2BkCl22%2BCSqeEsasdxZBlWrJQGTIXoWPdvRF6%2F8rJAEGoSaoUtpMfzOum26xHbDexG9Ek%2F6rfJ3HSWOd8T6M13ZykEDPlldQWMUPyfQU3FdL81mvw4%2Fdh2m4TsntXUnzmtrEzrKpOqxW&X-Amz-Signature=49724900191425f1dfeba10c72e5f53ba47e7ed57ce8dc5bae008beff5dd55c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AJC4YD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeQQHhWHTMrxuGqt1tIjGS2LbvKLe1OB1usyQvioXiEwIhAOEAkIHpuGgXvY9Ym0ktM8gPegWvad2ezsNl8s1RvAcUKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkoRfSfUZME6URLwq3AOdyZ8Ssf7uv4FxhPx7VwglkTSuEi4KM9gCLQUboJoZYL2UoFrT9oIiDr6fyH0HT4dqtIWcOhHDKPezrIZf4KKHMAo%2BtH403DRHlsB7U8KGpcHKCfy2tDPdg45WPyrPy9Zs4G542Q70L73DXIJSYdxXbf422Z1R1yjLX5TuSzmPPe0069JR42D%2FC763jZLQzm5unKTRpcXd6X%2F6LyAqaIzzJYOVLHeQz5EpcKBN4S2fE0ZRzXvQtt%2FC5o26Pg7DSNxVStN70ARvPMU50VElknsiIr6tV7tdBKbgAvkxoX720GtqRsWftQ1Hie4UqG2Ta8KLjZgGGLyeGLDq%2Fq6Gu8hCQQ4qET4o3ivOH3PNK78xd1WNOci3AqZ3Nagx%2FpFmYunaUhS6y6SsofbMqM3kLX7tuHzH3dmfgaAaTEii9vWKQqHsPP7jA2OGSp95PeOIdiBl4DzdwH5eo4OHIx6qkfQ%2B5oNR281dDezkSJUiOJkRm%2FkUiGTk21zACuxQe%2FCCq7gt%2Fztf8ey5wunPlSC7mWHDkt0%2FhNr%2BkCZxVPH0t2r9mrrUt0Fm0g64mZgYv%2BJ667PlMiW9pz77jBvaum3POpNMvw5yXWpUa7zWzCKHFFgSXJGrzm6g%2FQQ%2Bwy29fDCc84S%2BBjqkAes8mhbmUB5YKUvsb57fw6hAQ32uB6Glxia9OYMjyqNhDnxY%2BHPdKnPbP3TJ0ri6y3ePhiA6aQc0A5Wk%2FKzFNC6C6PkeS%2FUZNA9oNe8ODjnr%2BMBVUJ6IkqmR%2Ft52pqKQn3dESaReHNTdSVzNUghPW4ikqHyDTGKjgEt9d9ajm%2FMuN8zAH2dUT1JxnrB7T%2FnIRVpKfEZ8%2BXA4oxfKXwI8CjlFy%2F0v&X-Amz-Signature=5853b23be97d6d3b3f5598c5277376bf3e998ed3024ca9dd55a58c277e5303f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
