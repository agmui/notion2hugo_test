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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG5WDHX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2BXKi3Y0gnLKjNFTOzhaerVd6fSWXrrGU9j8ek3F0AQIgDQEbKISGPYVWq4pdz5X3zO2y2HhY67iTRzSzR0t2rhYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzZTn5CZDB1R55V3yrcA540LQcFbWa8wa1WG3ph%2BqXycONBC4K%2BAygn56ZrdXEI0HQmnSQM1geKOU3YQL6XmuYZPwox5u7M%2BXiYi%2B0pRmXYho%2FfABgCGGcjgGe0M9sMm4UP1HgMAZHspSfeNxEkYsK1KCRmJZQURAM3pMyn5m3KR%2Fxoakk%2FHJtbs5m8I3hDFsLdgNeWg%2FEwNhf9QYeyGYm7c1U0wy8hKez6iEVOW01062YNWoJLQL3Q225WNBm4EpsX1%2Fpjg4zhh1zBM6rH%2BU0bk865JBQCH80pnXxBGC3K19voZe7DxQUY9TCYf7GdX9GP%2F1NYfOPUoUjfLr0mhJEbEWuKuGfppnFlo5Lh6PwnQIpZ%2Fs31VF5Tu3ZZ%2FUWht3sFHILrWZ%2FBnABuN3m7bxdcgh%2FYV%2B7gaAMo2ZKqOSY9RV9Bc7GNguj%2BNomUMciA6JXoxHZ8mo8MymzDNj6joX7SdnW00UHp%2Fp9c6J8EHQNBNK085oYpjBo0gMPWhqNwqx0%2FvbsVmgNK%2FZVpM6Awf5KE5mk93ffPYQnD%2B34%2FLj2ENDRxh6Ae95hnxN%2BvHflSKEqBqIYxavHfI%2BKoLYw5JKz4M9vjKsUoXrxqE0EZRLPX4FloAqFdwfXriuMzKIcskCnV4zqNmTY0igS%2FMIzZ78QGOqUBvQFnM517Dqq5v76MrHElglgIT65wFRivIP0lgGo4nHbGqIdZV%2FKwTmojBQ1N%2FQa%2BSfQgQ5JeWX%2Fg%2FOciuUKB%2F6P2HKnoYhXNcwkiuWHMtWutVCS0ihHNLWtXMPM1g3vgKao%2Fr%2BCgqBbS0iwKrdKbizGRrGNqioqO6e7BPbtZNeolSE8G2%2FsifcHspx6rzrQV37sA3Qq2H57bagukILiasXxUVadM&X-Amz-Signature=4f2beb044c33c7fc0db4a87ce25f2f924bf4531174527821d1d2153ce9d5898f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG5WDHX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2BXKi3Y0gnLKjNFTOzhaerVd6fSWXrrGU9j8ek3F0AQIgDQEbKISGPYVWq4pdz5X3zO2y2HhY67iTRzSzR0t2rhYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzZTn5CZDB1R55V3yrcA540LQcFbWa8wa1WG3ph%2BqXycONBC4K%2BAygn56ZrdXEI0HQmnSQM1geKOU3YQL6XmuYZPwox5u7M%2BXiYi%2B0pRmXYho%2FfABgCGGcjgGe0M9sMm4UP1HgMAZHspSfeNxEkYsK1KCRmJZQURAM3pMyn5m3KR%2Fxoakk%2FHJtbs5m8I3hDFsLdgNeWg%2FEwNhf9QYeyGYm7c1U0wy8hKez6iEVOW01062YNWoJLQL3Q225WNBm4EpsX1%2Fpjg4zhh1zBM6rH%2BU0bk865JBQCH80pnXxBGC3K19voZe7DxQUY9TCYf7GdX9GP%2F1NYfOPUoUjfLr0mhJEbEWuKuGfppnFlo5Lh6PwnQIpZ%2Fs31VF5Tu3ZZ%2FUWht3sFHILrWZ%2FBnABuN3m7bxdcgh%2FYV%2B7gaAMo2ZKqOSY9RV9Bc7GNguj%2BNomUMciA6JXoxHZ8mo8MymzDNj6joX7SdnW00UHp%2Fp9c6J8EHQNBNK085oYpjBo0gMPWhqNwqx0%2FvbsVmgNK%2FZVpM6Awf5KE5mk93ffPYQnD%2B34%2FLj2ENDRxh6Ae95hnxN%2BvHflSKEqBqIYxavHfI%2BKoLYw5JKz4M9vjKsUoXrxqE0EZRLPX4FloAqFdwfXriuMzKIcskCnV4zqNmTY0igS%2FMIzZ78QGOqUBvQFnM517Dqq5v76MrHElglgIT65wFRivIP0lgGo4nHbGqIdZV%2FKwTmojBQ1N%2FQa%2BSfQgQ5JeWX%2Fg%2FOciuUKB%2F6P2HKnoYhXNcwkiuWHMtWutVCS0ihHNLWtXMPM1g3vgKao%2Fr%2BCgqBbS0iwKrdKbizGRrGNqioqO6e7BPbtZNeolSE8G2%2FsifcHspx6rzrQV37sA3Qq2H57bagukILiasXxUVadM&X-Amz-Signature=1a951d06ba507f615d0f968b00e45cb96b395ec65b6e02a5b3e453b0338297fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG5WDHX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2BXKi3Y0gnLKjNFTOzhaerVd6fSWXrrGU9j8ek3F0AQIgDQEbKISGPYVWq4pdz5X3zO2y2HhY67iTRzSzR0t2rhYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzZTn5CZDB1R55V3yrcA540LQcFbWa8wa1WG3ph%2BqXycONBC4K%2BAygn56ZrdXEI0HQmnSQM1geKOU3YQL6XmuYZPwox5u7M%2BXiYi%2B0pRmXYho%2FfABgCGGcjgGe0M9sMm4UP1HgMAZHspSfeNxEkYsK1KCRmJZQURAM3pMyn5m3KR%2Fxoakk%2FHJtbs5m8I3hDFsLdgNeWg%2FEwNhf9QYeyGYm7c1U0wy8hKez6iEVOW01062YNWoJLQL3Q225WNBm4EpsX1%2Fpjg4zhh1zBM6rH%2BU0bk865JBQCH80pnXxBGC3K19voZe7DxQUY9TCYf7GdX9GP%2F1NYfOPUoUjfLr0mhJEbEWuKuGfppnFlo5Lh6PwnQIpZ%2Fs31VF5Tu3ZZ%2FUWht3sFHILrWZ%2FBnABuN3m7bxdcgh%2FYV%2B7gaAMo2ZKqOSY9RV9Bc7GNguj%2BNomUMciA6JXoxHZ8mo8MymzDNj6joX7SdnW00UHp%2Fp9c6J8EHQNBNK085oYpjBo0gMPWhqNwqx0%2FvbsVmgNK%2FZVpM6Awf5KE5mk93ffPYQnD%2B34%2FLj2ENDRxh6Ae95hnxN%2BvHflSKEqBqIYxavHfI%2BKoLYw5JKz4M9vjKsUoXrxqE0EZRLPX4FloAqFdwfXriuMzKIcskCnV4zqNmTY0igS%2FMIzZ78QGOqUBvQFnM517Dqq5v76MrHElglgIT65wFRivIP0lgGo4nHbGqIdZV%2FKwTmojBQ1N%2FQa%2BSfQgQ5JeWX%2Fg%2FOciuUKB%2F6P2HKnoYhXNcwkiuWHMtWutVCS0ihHNLWtXMPM1g3vgKao%2Fr%2BCgqBbS0iwKrdKbizGRrGNqioqO6e7BPbtZNeolSE8G2%2FsifcHspx6rzrQV37sA3Qq2H57bagukILiasXxUVadM&X-Amz-Signature=4c2fd1dffe759ff4f2ac73eb290b2fea46d46e07022ea6ea69cfe02646dd89e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRPRKB2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCerUHLtlMaFPEHKt2fmT4hHDEZ942SEkUwaHJnETN3LAIgUChPWAeuGdPkhmWUHfiB3l%2FzueshKZgFaMDjDvYD5H8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDBgpfjlm3YslxgC98yrcA0bwcG4gQh64cmyuTFOaELG%2BY3Do397RuqGkRXvH1WtvEX38W%2BL7dGUiCo3xE3k9n%2Be3gIMfNi2XxZJgcV81NmKVYkag2KYqrboIrRxTnrgvfbWtmWB%2BXeAfhCm9i4vMkVSUiePT35K0UFyGC31TM6T5hm4t9u1XP70XBW0Xz4t0TzSsvA2Rkd1mnTl7NKth2GtYtZvjPsfPGuQDVzDeYW0KAWVNJvmwlzYfGpDCsEcMjZk4oy7fPunFvJauFGr2B8qvP6Ghc1WLbQdky%2BAoX2x6bb2AAXDKvLotowfcmFQxk9v3JIzRme5lcnd0%2FRdlv8HBIusY6xZZUQKMYCo8Nknn4%2BrXUyRe4OvdBzCLgcEyLUIFx1%2BcO9oGQJMB2p1IKA58iObKOcoAXyJ5lR4izO%2BYKwFvY%2FoD0INXbSWr2tFOejFMgIwMx6E51kme5K0%2Bq1%2FQd%2FT7VWp4GhSVqdED64nclWlFibUIeORtHKfBo%2Ft%2BMN9mmQ2Y4SbtTcx9cDbooE90qw7%2BMkhi9z3JbhyB1laF5QjAyRbY4uDRAx31%2BUmilspoQe9bab1yRH2JWHnDLu1XNfA8QuHuO10hBaK%2Bbm24DPyZbInyjRnxIncekb%2FEdP4tzwsaOFdF2Iz7MIra78QGOqUBSh3wZXFO8mwQ1hi1%2B67Ko6ZQc%2BBjMdHseR9CfvObBKEgNYcrw%2Fke7blts8FlvsYzBJHtdQ9uIzVwww%2Ft8c9Xe%2BVdN3y7rrZx5aUO%2BFHOf44WBGWEuDD8j3XArXIf8QMFxUhbiEG6OjMVXZe5QX%2FZGGSiScFML2TZoSGFCMtHX0SHlnvNIKJOaH2Lzs2M54K6rXtd2a6enWNE7VytUd2yAe8QQ06G&X-Amz-Signature=784fa67ef8d213b73ec006a4677bb9459ca89e4cf7a693c0d153cf225d6a63d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC67AFI7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl7FMahlSQudD5mN%2FmH8QisKmsSVlXLCjokgT6%2FkFW3AiA3dt%2BMgVJYcUxkDGkLQmMmymwPOPUw0Ea9hmMMgpEbPyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMgZOiPoCoZ1pdrtyiKtwDKlIa3NUBimSUEexjSVZ4ZEnUmUqBAjyj40r9TO7kigBaXddDhB9YmyYFHhdRnokgvOCjze64b71zzs%2FC7GlNZHZOqhSXQOzSVH2JTcBhP%2B5CBDSrHgVhJeHjRtF%2FVopYsojFX%2Fg%2FqwbAMxvz6mcZCAsk7uxW3x%2BUxxlmeoPuj3x6cXbwt0iQYpNgHIgyn3AXFFrY84QjOuuOOMT3AhdrNlgK6Uji8BStnXAetz17lwp0cNz%2Br733xVo0zglzaGXKGjMhpVj00tVITmM5PZzNxEyKEsRml0kdYuuJELzQ3ZCC%2BJOfaKznNEtNr5G05m%2FPPQTgruo2l0%2FMKGMLk13jtbuPPh7q7sfUiJj0ESF5rtG%2FWxLKOKNFQF%2FuHEqTJtsJPQ%2Fr0kw%2FoUFjX4A4ZS7HGi40ZwRxShzLYYILtwPmcR5wHtfg6oLS1EfsHoS8OB4wBNe2hEc%2FUQffcgnHiKc9hiHRbNgEX98lBUqki20zTCmSX3x89WVryw4m88eckL3j4oV9cFrzCXVJSPzz4viRA4IpjBM47XjV%2B%2FAjYLa%2BaDw3DwsM7%2F%2FP5WDoUP5StDLnJ89SZjeCvH7AvBSjPbh02dxhEE8d9hD1za51zLaHwhQJrTBEG%2FwGtZfyhJcw4tnvxAY6pgEx1O617gxn8RrZAyh7abXeSyzHLBcpxVMcUmuZ9NzoTrmf4UnAdflE%2BrXgXw2mvGy3vBUCwMJI%2F%2BuO5JO4jKB3FRlwoAl0mniuCb14e8g4IHFUTtySmHAQmIhQXoNCdPbFUbLoFjQ2NXqTaOptPqG8ymJd%2FeV%2FNj%2FwKXbz%2BrkQYdbdOkQ%2F8FgyvufRcnUoJNG9YHUfhJWHqXMd3FV3cnQzL4xRZgXM&X-Amz-Signature=dc97835cd03c165974cdb07a00d7d6eefc9b6532ef4605e85ad73b8cc7133dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG5WDHX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2BXKi3Y0gnLKjNFTOzhaerVd6fSWXrrGU9j8ek3F0AQIgDQEbKISGPYVWq4pdz5X3zO2y2HhY67iTRzSzR0t2rhYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzZTn5CZDB1R55V3yrcA540LQcFbWa8wa1WG3ph%2BqXycONBC4K%2BAygn56ZrdXEI0HQmnSQM1geKOU3YQL6XmuYZPwox5u7M%2BXiYi%2B0pRmXYho%2FfABgCGGcjgGe0M9sMm4UP1HgMAZHspSfeNxEkYsK1KCRmJZQURAM3pMyn5m3KR%2Fxoakk%2FHJtbs5m8I3hDFsLdgNeWg%2FEwNhf9QYeyGYm7c1U0wy8hKez6iEVOW01062YNWoJLQL3Q225WNBm4EpsX1%2Fpjg4zhh1zBM6rH%2BU0bk865JBQCH80pnXxBGC3K19voZe7DxQUY9TCYf7GdX9GP%2F1NYfOPUoUjfLr0mhJEbEWuKuGfppnFlo5Lh6PwnQIpZ%2Fs31VF5Tu3ZZ%2FUWht3sFHILrWZ%2FBnABuN3m7bxdcgh%2FYV%2B7gaAMo2ZKqOSY9RV9Bc7GNguj%2BNomUMciA6JXoxHZ8mo8MymzDNj6joX7SdnW00UHp%2Fp9c6J8EHQNBNK085oYpjBo0gMPWhqNwqx0%2FvbsVmgNK%2FZVpM6Awf5KE5mk93ffPYQnD%2B34%2FLj2ENDRxh6Ae95hnxN%2BvHflSKEqBqIYxavHfI%2BKoLYw5JKz4M9vjKsUoXrxqE0EZRLPX4FloAqFdwfXriuMzKIcskCnV4zqNmTY0igS%2FMIzZ78QGOqUBvQFnM517Dqq5v76MrHElglgIT65wFRivIP0lgGo4nHbGqIdZV%2FKwTmojBQ1N%2FQa%2BSfQgQ5JeWX%2Fg%2FOciuUKB%2F6P2HKnoYhXNcwkiuWHMtWutVCS0ihHNLWtXMPM1g3vgKao%2Fr%2BCgqBbS0iwKrdKbizGRrGNqioqO6e7BPbtZNeolSE8G2%2FsifcHspx6rzrQV37sA3Qq2H57bagukILiasXxUVadM&X-Amz-Signature=dd20b89c6c9341e672f4c9cbf2ae4c6722fa920bd40dad5ffd9d73f4cf409058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
