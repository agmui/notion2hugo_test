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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QQQWJ7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFmXH9Dm3eKLqCtv3kJYWfGH9eIVWpRkxwFjNzemi9lAIgc50ZmNBLRT8kZPlix8cYQQkVYU7LmPahDfnmRYj1rLwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGioksg8xzRse8WcyrcA8RYA%2BSxhhyiT4t17AoUUczavaDKJFR1OIZ%2BQw4NJyV14YMGGH7qP2I1ZrmWYHYzzICe4EcLqopq0weh2C67Lx%2F9Q%2FlL5f0pyUdwJSNA%2BGJDeT1o%2BYjVLZ1XcxuvyzJoEuFmfcRszBWX44yfyJi2GNTaW%2BCNZi%2FG8Acz2le8ZxrJmhlo8FJpAxqKlX8BkW8VXeHLqT1OBGAgroDc0tSbsR%2BLWzzz7tjGYiNJXHYkE%2B8cHiucVyKXJB8KzlU2OptLRnG4OeQbiBkMzoXkDC7r4QNfcMvXAc4TqKq44XqDB%2BLF33o7TMrKgclYsHs%2BBZaA1pkjA4gxD0lD24gbyNKaR8%2FHK68ao0PqIRVqhKWeA9QK2SOT49mr5d%2FdKmvJlHK%2FzcZ33l0%2BdW7Dw6eAuaE6yAp6dH9uI7Qnf%2B8%2Bonzp38d3GonAFmSHKf2yCuacLH18%2BRE4oin2pxi9tKcSLqXFq83yhTxYgouT1oZGcyquBFfPQ1a396uQCrLcatNjLnBW7%2BOKz8mdzC6QoiCPiw80JRBXlGhDkUPKwCbL%2BejEwy9duNG01xqXy8J%2FG9MYCDx0gIfrRmlq%2BNyJ%2Faa1nSvqmZh5dXkC5C%2F30v0jpVjRyuvC8c8PvxJdXUBE9DmNMLiBhMMGOqUBu6Jm2QtWhgh6tsgyDPlPZMjAy84Q82LZQAIUsV%2F4sZd136Dsz5hXURU2TkLfR0lRxYgujjD8X7%2BPZduhRJ8OU6vHE3CiR%2FYjjD2TQf1hjOK32opH4ZiKq3zALQ3Gsb01MjTdXUMQPgv6lWOYNk668m8eFkZ%2FD1sNXfgqg8%2Fqq%2Fqa9yYmeelrxfsBR%2BSxsMWZFsJNJiaQ71M%2BfnUy3LGMsn5fxUnN&X-Amz-Signature=61fa23db3bb609f6aee516b3c33b59137716fbaf0eb5c1690e6b34ec2a816df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QQQWJ7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFmXH9Dm3eKLqCtv3kJYWfGH9eIVWpRkxwFjNzemi9lAIgc50ZmNBLRT8kZPlix8cYQQkVYU7LmPahDfnmRYj1rLwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGioksg8xzRse8WcyrcA8RYA%2BSxhhyiT4t17AoUUczavaDKJFR1OIZ%2BQw4NJyV14YMGGH7qP2I1ZrmWYHYzzICe4EcLqopq0weh2C67Lx%2F9Q%2FlL5f0pyUdwJSNA%2BGJDeT1o%2BYjVLZ1XcxuvyzJoEuFmfcRszBWX44yfyJi2GNTaW%2BCNZi%2FG8Acz2le8ZxrJmhlo8FJpAxqKlX8BkW8VXeHLqT1OBGAgroDc0tSbsR%2BLWzzz7tjGYiNJXHYkE%2B8cHiucVyKXJB8KzlU2OptLRnG4OeQbiBkMzoXkDC7r4QNfcMvXAc4TqKq44XqDB%2BLF33o7TMrKgclYsHs%2BBZaA1pkjA4gxD0lD24gbyNKaR8%2FHK68ao0PqIRVqhKWeA9QK2SOT49mr5d%2FdKmvJlHK%2FzcZ33l0%2BdW7Dw6eAuaE6yAp6dH9uI7Qnf%2B8%2Bonzp38d3GonAFmSHKf2yCuacLH18%2BRE4oin2pxi9tKcSLqXFq83yhTxYgouT1oZGcyquBFfPQ1a396uQCrLcatNjLnBW7%2BOKz8mdzC6QoiCPiw80JRBXlGhDkUPKwCbL%2BejEwy9duNG01xqXy8J%2FG9MYCDx0gIfrRmlq%2BNyJ%2Faa1nSvqmZh5dXkC5C%2F30v0jpVjRyuvC8c8PvxJdXUBE9DmNMLiBhMMGOqUBu6Jm2QtWhgh6tsgyDPlPZMjAy84Q82LZQAIUsV%2F4sZd136Dsz5hXURU2TkLfR0lRxYgujjD8X7%2BPZduhRJ8OU6vHE3CiR%2FYjjD2TQf1hjOK32opH4ZiKq3zALQ3Gsb01MjTdXUMQPgv6lWOYNk668m8eFkZ%2FD1sNXfgqg8%2Fqq%2Fqa9yYmeelrxfsBR%2BSxsMWZFsJNJiaQ71M%2BfnUy3LGMsn5fxUnN&X-Amz-Signature=16d5128f351deb9cef57ab70954a1cfc3afa27772a73bc15015d05c8d367f831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QQQWJ7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFmXH9Dm3eKLqCtv3kJYWfGH9eIVWpRkxwFjNzemi9lAIgc50ZmNBLRT8kZPlix8cYQQkVYU7LmPahDfnmRYj1rLwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGioksg8xzRse8WcyrcA8RYA%2BSxhhyiT4t17AoUUczavaDKJFR1OIZ%2BQw4NJyV14YMGGH7qP2I1ZrmWYHYzzICe4EcLqopq0weh2C67Lx%2F9Q%2FlL5f0pyUdwJSNA%2BGJDeT1o%2BYjVLZ1XcxuvyzJoEuFmfcRszBWX44yfyJi2GNTaW%2BCNZi%2FG8Acz2le8ZxrJmhlo8FJpAxqKlX8BkW8VXeHLqT1OBGAgroDc0tSbsR%2BLWzzz7tjGYiNJXHYkE%2B8cHiucVyKXJB8KzlU2OptLRnG4OeQbiBkMzoXkDC7r4QNfcMvXAc4TqKq44XqDB%2BLF33o7TMrKgclYsHs%2BBZaA1pkjA4gxD0lD24gbyNKaR8%2FHK68ao0PqIRVqhKWeA9QK2SOT49mr5d%2FdKmvJlHK%2FzcZ33l0%2BdW7Dw6eAuaE6yAp6dH9uI7Qnf%2B8%2Bonzp38d3GonAFmSHKf2yCuacLH18%2BRE4oin2pxi9tKcSLqXFq83yhTxYgouT1oZGcyquBFfPQ1a396uQCrLcatNjLnBW7%2BOKz8mdzC6QoiCPiw80JRBXlGhDkUPKwCbL%2BejEwy9duNG01xqXy8J%2FG9MYCDx0gIfrRmlq%2BNyJ%2Faa1nSvqmZh5dXkC5C%2F30v0jpVjRyuvC8c8PvxJdXUBE9DmNMLiBhMMGOqUBu6Jm2QtWhgh6tsgyDPlPZMjAy84Q82LZQAIUsV%2F4sZd136Dsz5hXURU2TkLfR0lRxYgujjD8X7%2BPZduhRJ8OU6vHE3CiR%2FYjjD2TQf1hjOK32opH4ZiKq3zALQ3Gsb01MjTdXUMQPgv6lWOYNk668m8eFkZ%2FD1sNXfgqg8%2Fqq%2Fqa9yYmeelrxfsBR%2BSxsMWZFsJNJiaQ71M%2BfnUy3LGMsn5fxUnN&X-Amz-Signature=2d5bf032d04d79ee5b887d39198862c47cf92b3926b9a2e2ddaf8098e3928363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVN7VB4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwb3cexDTvg101zMuB8EJWDXiVYawi5vGRqy67CUbhbAiAviX5NRI7nWihwH3mVZa7mtP7FmD4ajcH8p0iyy%2Fb9TyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9E1jOId%2BTTXOqF9hKtwD6TFdG7Lu70z66VWx5nWqod%2Bx1KT2Tl9n42uKodWVOF3h11mPaT9YXaOpib90Ym57kPEBar3%2FolwJxLTdumuqv0XJQErWFprg4CL6pvDNFOiUW0NixMaIg75pSznDmoRR3jGpUQhHP4JQiKvgYKyjj0baveY9zCEXtPNn3H08HROgreTUOkxrgvzPj2K9P0CFHCJkvfnDGtOiTbNKQSn5aPenVU2wjTFwEq7Ua7BwoEuVH%2Fu75AHhAr072gYe1gH7j9MAyQoIkjtdgOT6%2FR21Jd1VHzuZDPM0DHOvnvGJ20eCr0nSWtQAhnGjTvXdGKwfK0Aco3bH84%2BhBxOK99iB18JrCUsFLA2R46lz7NQJkdx4XJJviwBS2fAgkSDtxE4QMAAjE2g3xitZZb46%2BQF4iD1WR6q9Ks7YmzV8WwruTapGm9cjfW3uWshiZG0lxNKpro3z8JUO1RXSJ4H8L48qSujQoucs8TQGxDZ3lp3Hf8FNbGDFrm4AOebZXbZQxdlgAimmjjR%2BfomoNFXFU7iuSZg8oG3UDcptqyRYnDPs79GcQLtYEt%2FcX87T7nwihhbcGwIdMK894g50Fk4WASxuxEjunt27uPgqj6ANYUN1054QwvE7Wz7xM41w%2BBwwjoGEwwY6pgHdQQtNoTt%2BVnDODp59QtctRZYRMYTC47gnK1F27nynAgNKSMSsudTPGCFdJxmL1WPCKwT9Lspi9EtJ8udAzeWRIMCQyd0hsqZcBFdv4aGQZBCC0NJPFVi5xg6Wssq8k2y7ere1LuWka7kj41QNp%2B%2FGzUXCv6FwBaYHoa89g9daIOOGtE7rydKX104L8OZcLYxOx8sMOOkremI6Wgg3ummYOQ0R4FF8&X-Amz-Signature=d37be64fb8b1deb77bdbb73d01da1030a6cdf41c227b032c0d1e1d6725ebbeca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGAUT4K%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrrK%2FBsGmoA8YU%2FjijLfP8RU4MmxUgP3ZXKy5Lp9rijwIgLYomvgdwfFAD9bkrtqQctlan450f2AOd6k2Q5e9aZpwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0KnuPkNFwYGfDmbCrcA%2FOFH2n4BD6ocdyi3q7V2HFoE07TONMUWtCoG6u6pkkUud0dGQoHq1eEJynYb14gd118yuE1NMU12g5Fys92B%2BLqFW3aZrwgXijKS1VpenwWdCOWhTsKOYOk%2BNzjTW9CjyIbpwU5A5lp2gZAr%2BNmZr3uyGnqW3EFxxH%2FSCGbYOSMbAjI0V8x98NX1604IaqQG3RrZSQmydBV6MfPD5AzFKsl%2FOiN0fJ6YUd4sQ%2Bh%2BJxctaDJT4%2BeM%2B033shGxLIbVkHjc3heZNq3ff0Q%2BRw7ofC0LJAZ8PHjj5PN0EK04iZqFPQ6wIE6lWKxdZ%2B7uQAA%2BqbG3Ci8BCZ6DsSBhPQXSxBCdyA3RegHV4hLDxmtK5tGwGm2ltp9CDnVX0%2Bc%2B1g%2FJS3pgRMiWYa0T7QgHJVPpFK2WNJWWekH6xl02APAja2SsHGA%2BQlnE35YIvnn2VEWxS40f3AUcxwoAntx9ADqA4xBxwAF756qe2GrRzEyyPwZyXrqx2pI1EAmep9n0ei%2BIiwXE6%2Bwrcpd9%2FiXyI8d6HjgKXGcrLsP8ju%2Bn3LZPlg2t0W4AtMU5Pk0RgyWVJpyalhT9R3C2vMFw975K8uJ%2FeB7dKQe%2FJ%2FoLnTFvHrrNZbqrvtE%2B2Jfn6WFzvMaMN2AhMMGOqUBkNH%2BPtqku%2BZZi5igutX1apgRHungAqqGt%2FG2sY3Yfb1Y%2FZCIdaUEAb2OWKULKe2XGUw0Sf2HndskTuE8xpniPT1mAH3aldd86uFA2d1UGLxMQh%2FKaklrC6uJenEqNNyIrxcmH3rRSI0h%2FA5utYmvfEJunt0pI84imNQTgFPsnO1wHeMPxwWlQ8vQJfgW5OSPqE1%2FFFKDwr5uWDvTDv6R1yp0YorZ&X-Amz-Signature=494bce40b8be62ed1bc06d8d8706500c6db5d2821f3a82406ac23add34305f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QQQWJ7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFmXH9Dm3eKLqCtv3kJYWfGH9eIVWpRkxwFjNzemi9lAIgc50ZmNBLRT8kZPlix8cYQQkVYU7LmPahDfnmRYj1rLwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGioksg8xzRse8WcyrcA8RYA%2BSxhhyiT4t17AoUUczavaDKJFR1OIZ%2BQw4NJyV14YMGGH7qP2I1ZrmWYHYzzICe4EcLqopq0weh2C67Lx%2F9Q%2FlL5f0pyUdwJSNA%2BGJDeT1o%2BYjVLZ1XcxuvyzJoEuFmfcRszBWX44yfyJi2GNTaW%2BCNZi%2FG8Acz2le8ZxrJmhlo8FJpAxqKlX8BkW8VXeHLqT1OBGAgroDc0tSbsR%2BLWzzz7tjGYiNJXHYkE%2B8cHiucVyKXJB8KzlU2OptLRnG4OeQbiBkMzoXkDC7r4QNfcMvXAc4TqKq44XqDB%2BLF33o7TMrKgclYsHs%2BBZaA1pkjA4gxD0lD24gbyNKaR8%2FHK68ao0PqIRVqhKWeA9QK2SOT49mr5d%2FdKmvJlHK%2FzcZ33l0%2BdW7Dw6eAuaE6yAp6dH9uI7Qnf%2B8%2Bonzp38d3GonAFmSHKf2yCuacLH18%2BRE4oin2pxi9tKcSLqXFq83yhTxYgouT1oZGcyquBFfPQ1a396uQCrLcatNjLnBW7%2BOKz8mdzC6QoiCPiw80JRBXlGhDkUPKwCbL%2BejEwy9duNG01xqXy8J%2FG9MYCDx0gIfrRmlq%2BNyJ%2Faa1nSvqmZh5dXkC5C%2F30v0jpVjRyuvC8c8PvxJdXUBE9DmNMLiBhMMGOqUBu6Jm2QtWhgh6tsgyDPlPZMjAy84Q82LZQAIUsV%2F4sZd136Dsz5hXURU2TkLfR0lRxYgujjD8X7%2BPZduhRJ8OU6vHE3CiR%2FYjjD2TQf1hjOK32opH4ZiKq3zALQ3Gsb01MjTdXUMQPgv6lWOYNk668m8eFkZ%2FD1sNXfgqg8%2Fqq%2Fqa9yYmeelrxfsBR%2BSxsMWZFsJNJiaQ71M%2BfnUy3LGMsn5fxUnN&X-Amz-Signature=31972b8e0f0ead8cca2c4d2f23b857e8074298892622f0cc33146c430d22bf1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
