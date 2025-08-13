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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZ3UHF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC26Uc0uW8%2FkKsW52SEmbvsGuBvaa81QcHwqUbKU144xQIgXeEEhRwt4MrN7Uk49wV3RF1gE63zfZJIaWmLWh3ojLYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHZHQLH0nLuAELQFlircAzaENuELK59BcNBIUP8KrMB%2FE4yqdZlYLIiGzm2piyRmTm9YxMZ3RfVJ%2Feoor40y%2BQvPeIxsDOqCdtgcWvm9KrXx7LikiZIhuiftRoh9L1s1EVdC2TtumYIG5Y91VBCJ%2Fr379c84RR%2BxdAAkHgeEOZ3rnYvRIq34hpIc6WR42bVc0ygNkhcEP5Kvd%2FZFXTW2%2FMffQyqoom5uKc08molsLs%2FO6OhCJXy8vNtPy28aub8J21Fz%2F5FitHWrba%2Fq837qYlyM50ykY%2BLU91rZP50HLTTum9gRDsLpHWNASRnnVPBELIzpk%2BQ5D5UyY1gN63uYQYeLXLC%2BVFB3NqS43b5KJp5JkmGmSLLtnLQCZh072HJ1XnYoCqepGwRiCETpZaYA6GU7QQSdF2oV5DEF1s1CDPKGQi8MzLBoAyMMHIUrvUErZBRDh5%2B7ufBWm0bURS0PDp5d3Kq%2FbBAkE3l4MrBpfwUko3LLo5HO4IF3jspUGm2cf%2FIR1vBxtkgBNPwY6gysE6W0vftZ24pM42j7U11tYGFptIxH45yWRTwxoDv6qthFq69sb9BR%2Br%2B520dbCyAFXp2k5lziabAuMBX8lZckNXmzEVjIo5Ia9ZMc2HdAetXgjr1FnK7OYndeFff5MPbQ8MQGOqUB44yqoBudxvnkczG7uJ0bI0xjJrvNTbRknlRmw4QFHhc67n0ccYMsH2GPfPwooG0qgeWwZUMEUBTrzJstdPkNd56Ph1Q%2BKIbgbum8uif1gcgn7z4b87vuQRVe4QSPI%2FCHJzT6ibga9owxxJHVu88GIkxQgakipjXaxbvZ%2BDKE%2BB9DY46LVV%2B0iOuaAJrpwRBs0TpNr2WtQK17zPL25JWTxOOGE%2BoR&X-Amz-Signature=d34ef97d075efa51e72944186b442fd644c514f8b6f4c6374ff2fc0d6761f4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZ3UHF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC26Uc0uW8%2FkKsW52SEmbvsGuBvaa81QcHwqUbKU144xQIgXeEEhRwt4MrN7Uk49wV3RF1gE63zfZJIaWmLWh3ojLYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHZHQLH0nLuAELQFlircAzaENuELK59BcNBIUP8KrMB%2FE4yqdZlYLIiGzm2piyRmTm9YxMZ3RfVJ%2Feoor40y%2BQvPeIxsDOqCdtgcWvm9KrXx7LikiZIhuiftRoh9L1s1EVdC2TtumYIG5Y91VBCJ%2Fr379c84RR%2BxdAAkHgeEOZ3rnYvRIq34hpIc6WR42bVc0ygNkhcEP5Kvd%2FZFXTW2%2FMffQyqoom5uKc08molsLs%2FO6OhCJXy8vNtPy28aub8J21Fz%2F5FitHWrba%2Fq837qYlyM50ykY%2BLU91rZP50HLTTum9gRDsLpHWNASRnnVPBELIzpk%2BQ5D5UyY1gN63uYQYeLXLC%2BVFB3NqS43b5KJp5JkmGmSLLtnLQCZh072HJ1XnYoCqepGwRiCETpZaYA6GU7QQSdF2oV5DEF1s1CDPKGQi8MzLBoAyMMHIUrvUErZBRDh5%2B7ufBWm0bURS0PDp5d3Kq%2FbBAkE3l4MrBpfwUko3LLo5HO4IF3jspUGm2cf%2FIR1vBxtkgBNPwY6gysE6W0vftZ24pM42j7U11tYGFptIxH45yWRTwxoDv6qthFq69sb9BR%2Br%2B520dbCyAFXp2k5lziabAuMBX8lZckNXmzEVjIo5Ia9ZMc2HdAetXgjr1FnK7OYndeFff5MPbQ8MQGOqUB44yqoBudxvnkczG7uJ0bI0xjJrvNTbRknlRmw4QFHhc67n0ccYMsH2GPfPwooG0qgeWwZUMEUBTrzJstdPkNd56Ph1Q%2BKIbgbum8uif1gcgn7z4b87vuQRVe4QSPI%2FCHJzT6ibga9owxxJHVu88GIkxQgakipjXaxbvZ%2BDKE%2BB9DY46LVV%2B0iOuaAJrpwRBs0TpNr2WtQK17zPL25JWTxOOGE%2BoR&X-Amz-Signature=31da61693344df30d5ebfba0f418e6f23dce51279a1652fac980a63177cdda01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZ3UHF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC26Uc0uW8%2FkKsW52SEmbvsGuBvaa81QcHwqUbKU144xQIgXeEEhRwt4MrN7Uk49wV3RF1gE63zfZJIaWmLWh3ojLYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHZHQLH0nLuAELQFlircAzaENuELK59BcNBIUP8KrMB%2FE4yqdZlYLIiGzm2piyRmTm9YxMZ3RfVJ%2Feoor40y%2BQvPeIxsDOqCdtgcWvm9KrXx7LikiZIhuiftRoh9L1s1EVdC2TtumYIG5Y91VBCJ%2Fr379c84RR%2BxdAAkHgeEOZ3rnYvRIq34hpIc6WR42bVc0ygNkhcEP5Kvd%2FZFXTW2%2FMffQyqoom5uKc08molsLs%2FO6OhCJXy8vNtPy28aub8J21Fz%2F5FitHWrba%2Fq837qYlyM50ykY%2BLU91rZP50HLTTum9gRDsLpHWNASRnnVPBELIzpk%2BQ5D5UyY1gN63uYQYeLXLC%2BVFB3NqS43b5KJp5JkmGmSLLtnLQCZh072HJ1XnYoCqepGwRiCETpZaYA6GU7QQSdF2oV5DEF1s1CDPKGQi8MzLBoAyMMHIUrvUErZBRDh5%2B7ufBWm0bURS0PDp5d3Kq%2FbBAkE3l4MrBpfwUko3LLo5HO4IF3jspUGm2cf%2FIR1vBxtkgBNPwY6gysE6W0vftZ24pM42j7U11tYGFptIxH45yWRTwxoDv6qthFq69sb9BR%2Br%2B520dbCyAFXp2k5lziabAuMBX8lZckNXmzEVjIo5Ia9ZMc2HdAetXgjr1FnK7OYndeFff5MPbQ8MQGOqUB44yqoBudxvnkczG7uJ0bI0xjJrvNTbRknlRmw4QFHhc67n0ccYMsH2GPfPwooG0qgeWwZUMEUBTrzJstdPkNd56Ph1Q%2BKIbgbum8uif1gcgn7z4b87vuQRVe4QSPI%2FCHJzT6ibga9owxxJHVu88GIkxQgakipjXaxbvZ%2BDKE%2BB9DY46LVV%2B0iOuaAJrpwRBs0TpNr2WtQK17zPL25JWTxOOGE%2BoR&X-Amz-Signature=5cbbd1ee4f4ad723773a4349343adc6de66031c9b0c335f82ac18dbb16eb5f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUWBPGJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf2Jejt6tCX%2BxL6H6%2FvpBZ%2Bqy40OwrFUcOWSMDiDPG%2FAIgbhPvW656rH7OE96GLV6LyzQRKc%2BIe%2FzuB6Lkhn5H3Z4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDABsPnrmaE7qY2BndCrcA%2BesCPkdbk%2BQExLVSTP0x%2BH4jclGSP0dgRRKdjSPhCTUctVhxQbNyDEOCEdxwgKlu2698IhSgtUKuAp6CJ9NPn0Y8pZ9ksnT%2BgwrfrdS9nYhcGS%2BsDgrkzmIxnHQQcvnnOewZ5jVsdVDWKCe2N8f7z19gf1Lh00gM%2FnqhFHsa3NREcpV22IH2TFpfT9Y0%2FqKObIgklvyB5d11Zhz42FQLGRTlhxrSFQtC7UUnkWxPp4MNDson2wV8IwNJY%2BsT8daK0Rey7RWll8%2B0VKFXVLutn5rll0GHCWvoHtlrE6nNZ0es3uL8L6Y616PJCJvMTsJKIe%2BVhBpHe59KWL49OdaprlhOAcD0NNzSfQY6Z9p6tk7jmeme0hTiBjpHz1M%2BmlzqtrxqdQpBKuUO2CYU5XW3eIl0V3CJMk%2BiDrvENXANqZdrFtnwKoUsKTmbqBl%2FvWML1lSVIk6lilSgOi5NKuaHlT%2B%2FZ09w4blqYmRnQ3xGUmTlnb0TS6JVoIb7pXDTt1oP9VbhaMtwPdjy%2F2z8c4sQ3Jc%2FGoNf0CgF3QvFO9MwJ8ufNnk6i1pO%2FMFLVmFNCbvs56FwXQD8W69nMLoYJdlD1Vtqbqqzd%2Bebg%2BS34p3RA9rS1Ly%2FcjvajAl1%2FyyMNvR8MQGOqUB%2Fjo2%2BI6vAsj4AL1QMXtI113%2Fok08%2FIAcbHxdFrnFEA3krw71sf02%2FnXYzH4CjX42nnXfmiOXm4qpFUT%2FGwiTL8OHjSbIWvhspJ42doPrTzHy%2BIk7vKpQGP7lkkGXbhw1IqUTOti%2F7%2FoP30ByjOj%2FuQ%2B%2F7G%2FkaSxB0q06P8lerJ6FayERcadZWPH2m1d2t78GOKlWgHvoCK3qCoiyRLj2n8oG7VoL&X-Amz-Signature=0f14f4c5eab3fc57dcb9cf321a2a5d4cc4914424c299913cb041a323f0c6ffaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D5GQHX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ojdkHK5oopZm54DBV2RACu6H3F2Ro1tJfIQg9gDntAiEAg66LryHs%2FYt1cXod9H4lMhHs3WCgz8A%2Fud60X5%2FG%2Fugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAGK7CSVSioc8jwflircA%2BHdSO6FufaYOInlyZrK%2FiUL0Ll97dVm1KDy8FdO8%2BCwBXznx7ek9YVLEDN1%2FRtkKoz%2FoZO0bVvIMr4HLIDwZOGrzgdtm2odh6J9tRKA%2FN2%2BfjlZYCa2rDoxFKonqCg77Q%2BtD3H3%2BNUJsWZzOdy56hvrgA1sw1EUmpSh9wA6WrlOmNZOS%2F7HUdmnjaEi3yoGgbxZn%2FvhdwIip%2BfbAEku6yKzEYKyHFuTUh0EPd%2Fwj1LvYtTCjir474XxOGND302XXNUkTAEckOECW3XAEKCXkxgLiQVvsrwpXtGkatK8CWmIpA%2FvUfj52J9QE6WdTG8TIHdB7R45cEfD%2FRR6idC9iqsXgOn9jdDWEzAelqMk8Omyrn1S4UqQfrpwRVN9OTBJRwO1Bg46D7aeyWmNCmhyUku13BNq4dW%2FC3m2l9n8rVNoIIJbUSSs5sDYkObM75KdMtnKdQxU%2F%2BgT4IOXlGz%2BuSW%2BQzq85iXdOFTw%2B%2FD8cLJkUTL5m10JpokFTXmCLoySmSwnWsyANtXShLYsHQ%2FIGpZGtbXi31Aef9%2F3uEzwCnKhdVD5TEVitq3%2BEq%2FCHHhpWzPrDiL0z3Do6kUIc0ukacPXH0tTONebxq2d1z%2Bs%2B6JE3JUlAPJ3QyZnF5VdMLjR8MQGOqUBbpWHf9uK5DNdfBSDBxzHPcu0lpzH0QFMSJwBpYGzbUEViepNzC6L%2BoEYNWu0n4BMh2VZQef6BYwP0x%2BaPy14frF2RLI5vA5rkROECOrAD%2FiBjoNICHIhXxw0Ih2iV%2F%2FG%2FE7tObUlnc98AahzdLLATskm5sNGCmd30l6yMQJ7tPGceBxYtd9k3FSpYQrHT%2BHQLMYH69tXUw1WbtmoZqfzJ0mb66vJ&X-Amz-Signature=dfb75497d87363ca061d84bf4f9fe3c105ca7abb2e81c158ca388a83c20c9377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZ3UHF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC26Uc0uW8%2FkKsW52SEmbvsGuBvaa81QcHwqUbKU144xQIgXeEEhRwt4MrN7Uk49wV3RF1gE63zfZJIaWmLWh3ojLYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHZHQLH0nLuAELQFlircAzaENuELK59BcNBIUP8KrMB%2FE4yqdZlYLIiGzm2piyRmTm9YxMZ3RfVJ%2Feoor40y%2BQvPeIxsDOqCdtgcWvm9KrXx7LikiZIhuiftRoh9L1s1EVdC2TtumYIG5Y91VBCJ%2Fr379c84RR%2BxdAAkHgeEOZ3rnYvRIq34hpIc6WR42bVc0ygNkhcEP5Kvd%2FZFXTW2%2FMffQyqoom5uKc08molsLs%2FO6OhCJXy8vNtPy28aub8J21Fz%2F5FitHWrba%2Fq837qYlyM50ykY%2BLU91rZP50HLTTum9gRDsLpHWNASRnnVPBELIzpk%2BQ5D5UyY1gN63uYQYeLXLC%2BVFB3NqS43b5KJp5JkmGmSLLtnLQCZh072HJ1XnYoCqepGwRiCETpZaYA6GU7QQSdF2oV5DEF1s1CDPKGQi8MzLBoAyMMHIUrvUErZBRDh5%2B7ufBWm0bURS0PDp5d3Kq%2FbBAkE3l4MrBpfwUko3LLo5HO4IF3jspUGm2cf%2FIR1vBxtkgBNPwY6gysE6W0vftZ24pM42j7U11tYGFptIxH45yWRTwxoDv6qthFq69sb9BR%2Br%2B520dbCyAFXp2k5lziabAuMBX8lZckNXmzEVjIo5Ia9ZMc2HdAetXgjr1FnK7OYndeFff5MPbQ8MQGOqUB44yqoBudxvnkczG7uJ0bI0xjJrvNTbRknlRmw4QFHhc67n0ccYMsH2GPfPwooG0qgeWwZUMEUBTrzJstdPkNd56Ph1Q%2BKIbgbum8uif1gcgn7z4b87vuQRVe4QSPI%2FCHJzT6ibga9owxxJHVu88GIkxQgakipjXaxbvZ%2BDKE%2BB9DY46LVV%2B0iOuaAJrpwRBs0TpNr2WtQK17zPL25JWTxOOGE%2BoR&X-Amz-Signature=cdc56019a5c48a71fbee5eee7d86a30360c291878634a66baddec23ad6f5d1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
