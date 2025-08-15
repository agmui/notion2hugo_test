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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XW3GEE6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGkVMS4Yfy2RJSB7Bo2wgFix8ffpq5A6m%2F1CKyV09o7pAiBPHjN2vlbrbH9eR6AnG5ox2Px1%2FDMZ4Zd4AdhdbpQKXCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMBSh1M8YpChK3SD19KtwDt4Dw9rQwLlHIkCsgNq2gY0Jw8GHDCQF79WKosPrp0UCwBi9DI5xkyB3H8QlzRztmdyxkmb%2FGTXcxiXQwuVndT5tje7ATRAA3UaBFO62VfKnPpavX3nmQuxehbHTcHjBQPx2IUvqpmyVq5ckm5Au0jQ2ouhGmEwDEI5yosPgBTMFspx7HzpN5EnslbZEkn1%2Boa5DGZzx%2BElUkwY86IhMqpwUYqmtDxNlgkCp87sW%2FxvnurqTJdvROFAS%2FiSQr4TzQwS2rYcE55f1Tctx6%2Fjr%2BAE6C5h2SF3qopYfjgGdh0DTaDl%2BhxmSVu78QJmssxOj9dA5Hv1KcN1UembhVr9eG%2BXoxg%2Bc3f0dJyrWhSzrv2pcZcexHR1n6FWklTpuVYlvz5Qmlp7EDvahmAflya%2Fz0Bb90rl%2BRp29G4A7tml5XOIYt%2BhIfcynQOy45IPOOQGnnIHaFNWEzlSo8MBXy9bkuEs5VBiFWVQ9U5%2FwZ5pyJ1Jug%2FWBI6zy9ByoANjzLlWdo%2BJ3AU6m95Lds5ZBGK8avyFQ5MPNUgctzQ0Wk34QD7rSH9HP0sFh3GYmox3OT0Ggj2VJq%2FmfpFgi5CWlr6i%2BCa735NiMtgC632%2FWK9muNKyef4sCNWY749ogWZ0Iwje77xAY6pgHtb3Bzws29XWIhBnfhOzI%2BqBakBLdY5GeQZKO7DahAVdvQLtQH4g%2BAO2%2FUMb3jD8UdG3A8qgGeHTz0LtnzHZXCwsoAlJlWAF%2FRh0Z41NMf%2B8PpvzhgwByxIoZLEK03DGVZ0bEkuD%2F5rIyp0BB2pSZt4%2Fx%2F2BWIzoRanK7nzUVq2H6fh89boalqYZwZOMO3g5qh0QjZMWqZTFgn%2BWnKqqrbq3rPc%2BKh&X-Amz-Signature=0264adc3b5684e093a3149cce3376fed6febe660ca290151576e5618d61bfce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XW3GEE6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGkVMS4Yfy2RJSB7Bo2wgFix8ffpq5A6m%2F1CKyV09o7pAiBPHjN2vlbrbH9eR6AnG5ox2Px1%2FDMZ4Zd4AdhdbpQKXCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMBSh1M8YpChK3SD19KtwDt4Dw9rQwLlHIkCsgNq2gY0Jw8GHDCQF79WKosPrp0UCwBi9DI5xkyB3H8QlzRztmdyxkmb%2FGTXcxiXQwuVndT5tje7ATRAA3UaBFO62VfKnPpavX3nmQuxehbHTcHjBQPx2IUvqpmyVq5ckm5Au0jQ2ouhGmEwDEI5yosPgBTMFspx7HzpN5EnslbZEkn1%2Boa5DGZzx%2BElUkwY86IhMqpwUYqmtDxNlgkCp87sW%2FxvnurqTJdvROFAS%2FiSQr4TzQwS2rYcE55f1Tctx6%2Fjr%2BAE6C5h2SF3qopYfjgGdh0DTaDl%2BhxmSVu78QJmssxOj9dA5Hv1KcN1UembhVr9eG%2BXoxg%2Bc3f0dJyrWhSzrv2pcZcexHR1n6FWklTpuVYlvz5Qmlp7EDvahmAflya%2Fz0Bb90rl%2BRp29G4A7tml5XOIYt%2BhIfcynQOy45IPOOQGnnIHaFNWEzlSo8MBXy9bkuEs5VBiFWVQ9U5%2FwZ5pyJ1Jug%2FWBI6zy9ByoANjzLlWdo%2BJ3AU6m95Lds5ZBGK8avyFQ5MPNUgctzQ0Wk34QD7rSH9HP0sFh3GYmox3OT0Ggj2VJq%2FmfpFgi5CWlr6i%2BCa735NiMtgC632%2FWK9muNKyef4sCNWY749ogWZ0Iwje77xAY6pgHtb3Bzws29XWIhBnfhOzI%2BqBakBLdY5GeQZKO7DahAVdvQLtQH4g%2BAO2%2FUMb3jD8UdG3A8qgGeHTz0LtnzHZXCwsoAlJlWAF%2FRh0Z41NMf%2B8PpvzhgwByxIoZLEK03DGVZ0bEkuD%2F5rIyp0BB2pSZt4%2Fx%2F2BWIzoRanK7nzUVq2H6fh89boalqYZwZOMO3g5qh0QjZMWqZTFgn%2BWnKqqrbq3rPc%2BKh&X-Amz-Signature=ff827c68c851ebb862ba12bddbef7706796b0b5a5c19e52950f649ff9b671ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XW3GEE6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGkVMS4Yfy2RJSB7Bo2wgFix8ffpq5A6m%2F1CKyV09o7pAiBPHjN2vlbrbH9eR6AnG5ox2Px1%2FDMZ4Zd4AdhdbpQKXCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMBSh1M8YpChK3SD19KtwDt4Dw9rQwLlHIkCsgNq2gY0Jw8GHDCQF79WKosPrp0UCwBi9DI5xkyB3H8QlzRztmdyxkmb%2FGTXcxiXQwuVndT5tje7ATRAA3UaBFO62VfKnPpavX3nmQuxehbHTcHjBQPx2IUvqpmyVq5ckm5Au0jQ2ouhGmEwDEI5yosPgBTMFspx7HzpN5EnslbZEkn1%2Boa5DGZzx%2BElUkwY86IhMqpwUYqmtDxNlgkCp87sW%2FxvnurqTJdvROFAS%2FiSQr4TzQwS2rYcE55f1Tctx6%2Fjr%2BAE6C5h2SF3qopYfjgGdh0DTaDl%2BhxmSVu78QJmssxOj9dA5Hv1KcN1UembhVr9eG%2BXoxg%2Bc3f0dJyrWhSzrv2pcZcexHR1n6FWklTpuVYlvz5Qmlp7EDvahmAflya%2Fz0Bb90rl%2BRp29G4A7tml5XOIYt%2BhIfcynQOy45IPOOQGnnIHaFNWEzlSo8MBXy9bkuEs5VBiFWVQ9U5%2FwZ5pyJ1Jug%2FWBI6zy9ByoANjzLlWdo%2BJ3AU6m95Lds5ZBGK8avyFQ5MPNUgctzQ0Wk34QD7rSH9HP0sFh3GYmox3OT0Ggj2VJq%2FmfpFgi5CWlr6i%2BCa735NiMtgC632%2FWK9muNKyef4sCNWY749ogWZ0Iwje77xAY6pgHtb3Bzws29XWIhBnfhOzI%2BqBakBLdY5GeQZKO7DahAVdvQLtQH4g%2BAO2%2FUMb3jD8UdG3A8qgGeHTz0LtnzHZXCwsoAlJlWAF%2FRh0Z41NMf%2B8PpvzhgwByxIoZLEK03DGVZ0bEkuD%2F5rIyp0BB2pSZt4%2Fx%2F2BWIzoRanK7nzUVq2H6fh89boalqYZwZOMO3g5qh0QjZMWqZTFgn%2BWnKqqrbq3rPc%2BKh&X-Amz-Signature=fdd8c93c7021aaf34a9c5031e744820098fef0a526fc3396de75568e149938a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRLM7KH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD0AX3i%2B1uGxkAJQmxzJAz6Zy85aVoxqYplI4XyO7qCFwIga2FoUz2fJwP%2FqDe20GhJzfmpeVRQZhrK9suyO6JwUD8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDC7PBOd4rZA0bzCnFCrcAxk5Tro4gbRx9fOHinbhFYJIu0G9e1xd7IR2%2F4GvTeASqlGca4AoDUmlhnIsXkIoc4jJ%2BoHmmGiRWuikPEZpTcM3R6%2FP%2FZo0a4E%2Bx7YmUzA%2BHNxJGRrhNFv8k5kPUPj5HOxRT9pEHKFodX8vUFHt8LBxUMX%2FRArCWHcpysctRhgp9eJDb%2B5JgUcZo%2F7CeXsbpz5h%2FEZJrmkXVMxwpOJ8OMRBK%2BC4oOaWNFMLt4rswoKLQ5RTla%2BGNzkBdpvx1eoc6dV4F6nXXDhTSJKWc1rHe7VsOoLPiXb5taLr9jaC3HSXzIHBpem%2BWhHfEaJOFZPhOIK4MSuJMtYU7Sv8%2B2ww50JtInw2fg3dCm1%2FL6h4rtKZdkvQ6G3ntDNppM5g1RS37ceSILrU4JCHjFl9OvMsPBItEA%2BOIilhVvUZt1LPkzx2oZ4oh8AxL7qbj0fuk9ptvyyFUQh8Ub7KRJiW8RgzIhLamuQpB3YwHytXTzkM0iJBgONXJdwHv8vlnBvuGTsZiNZBhfmU5aiD0gI34q%2BgD%2BTF3uHhPrqH%2BSxOZfZgCGWYWLtj3UwTP1VcWLJv4WPkJzKaKDxpBPTD8wSZ05AGj1bYiSs54UbC02KFI1VyWnww5byrlx6OrWIWvyOcMKnv%2B8QGOqUBki5VfX1URyc1DtEaKg%2FKB94enTmqdcNGA8qms54%2B7PlV54he%2FjozCD3QcP1zyBaffYHQC%2B8kcOJ6ACGGPEksSi%2FD392L5YPx5t16tE9TV4lxtWUI28m4w5UVABL19jyj4cDyUUjP1pD5iZiZrN8hBX71fZIwaaFr2zMpLNTTgWnIViiq0U%2B3wKXBReY6jFQeg%2F7kFvUIceghSnk34DDw%2F%2FJfUK6Q&X-Amz-Signature=7bce3b62e1ccfc3c77d731b707ad4bb044836c364f4b5857a8acb1571e90c612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJEY7W23%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCDpHJXy0hjDYUulf2JjMS2hMn8Hc9vqfurA%2FxVc%2B0I5gIgXf7NLz6643WLIXvcsRvajAfY1brYNAxWCZH8Sl3BfzIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNowR4%2BhIBgZmQqSdircAwKPvbslHAQFPvyGMpiFbPHgCdKG0T1zXifXRnY%2BktIz6bJheet36iahytdE24VoKaKsYYQqb3WAf43WOBZYqvOSzwdNMjyT8eoVjDTPJK%2FPfwA%2B%2FI9p7NdMNeoAga0IcShZGYiLinU8LkZux8lI88ve8zkQUD%2BEsl6bL6BlZf%2FyT9XN%2F9sPIjMKrfA3sTr37nJ8rMTK5acD7PdW6TWGOU6g2YoNerh9yl0o5DTkfXiJdtxdwhzrsCkQN6DIRbprY4gsY98LLgwA1L5DEc5H6Sjeg68hOEGLv6jTaqFoByfVXzt8N2OR5irPBxGUJ5npamAfUew8rJT0KWYF09KBeOykstWtKTomqmKUOe%2B9hEIVeG1cqIhc93Nxfz4M%2FH%2FwZjhdh40q8EXzCyTui5m%2FI4txn72M6GL5k%2FzZV7mDKWb3HgiXZ3AihvoY5XwO%2BVPnPiYBolJRA8Y8VQ5pL%2Biekc03AMgGXcmVusara1w0tHV9lz7njUAQyT0KwInV9RDjMPz3FtHwfyZEo5Ypvsuw5OPq8UFs8zqb%2BcNqKsQhHe%2BPb5Memyct%2BWsLd0idITEpPdiZfTiVeqn7APrBOKYt4hRdl%2FkkGYfbzJ7%2B3RBlUlFq5QJyuegdFZAdR0N7MPXu%2B8QGOqUB3ZaUPOEtx2eKZbzNp9%2BnV44oeK9AWY3woZGxN0KEkIldJXuXL9%2BBTb7b1pFtVsA3szeve2zAVQXkm%2FBEthzcML7EwPurZSAiDR3KfK3sDTux6%2B3xRnfhaxfRC6MHKBjT3DIjxokPvFL%2Fno%2BDEvEm3wAKssCMfrTGXS4x04jxZF6v2UE5HNf5nSwGSQn%2FEPWhm94A8VINLeEnn4qip%2Fim1jXxRDix&X-Amz-Signature=ba6c02cf93df1c5071bfae839a22e1b5ef63937159ee286c31547dfcdb5569d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XW3GEE6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGkVMS4Yfy2RJSB7Bo2wgFix8ffpq5A6m%2F1CKyV09o7pAiBPHjN2vlbrbH9eR6AnG5ox2Px1%2FDMZ4Zd4AdhdbpQKXCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMBSh1M8YpChK3SD19KtwDt4Dw9rQwLlHIkCsgNq2gY0Jw8GHDCQF79WKosPrp0UCwBi9DI5xkyB3H8QlzRztmdyxkmb%2FGTXcxiXQwuVndT5tje7ATRAA3UaBFO62VfKnPpavX3nmQuxehbHTcHjBQPx2IUvqpmyVq5ckm5Au0jQ2ouhGmEwDEI5yosPgBTMFspx7HzpN5EnslbZEkn1%2Boa5DGZzx%2BElUkwY86IhMqpwUYqmtDxNlgkCp87sW%2FxvnurqTJdvROFAS%2FiSQr4TzQwS2rYcE55f1Tctx6%2Fjr%2BAE6C5h2SF3qopYfjgGdh0DTaDl%2BhxmSVu78QJmssxOj9dA5Hv1KcN1UembhVr9eG%2BXoxg%2Bc3f0dJyrWhSzrv2pcZcexHR1n6FWklTpuVYlvz5Qmlp7EDvahmAflya%2Fz0Bb90rl%2BRp29G4A7tml5XOIYt%2BhIfcynQOy45IPOOQGnnIHaFNWEzlSo8MBXy9bkuEs5VBiFWVQ9U5%2FwZ5pyJ1Jug%2FWBI6zy9ByoANjzLlWdo%2BJ3AU6m95Lds5ZBGK8avyFQ5MPNUgctzQ0Wk34QD7rSH9HP0sFh3GYmox3OT0Ggj2VJq%2FmfpFgi5CWlr6i%2BCa735NiMtgC632%2FWK9muNKyef4sCNWY749ogWZ0Iwje77xAY6pgHtb3Bzws29XWIhBnfhOzI%2BqBakBLdY5GeQZKO7DahAVdvQLtQH4g%2BAO2%2FUMb3jD8UdG3A8qgGeHTz0LtnzHZXCwsoAlJlWAF%2FRh0Z41NMf%2B8PpvzhgwByxIoZLEK03DGVZ0bEkuD%2F5rIyp0BB2pSZt4%2Fx%2F2BWIzoRanK7nzUVq2H6fh89boalqYZwZOMO3g5qh0QjZMWqZTFgn%2BWnKqqrbq3rPc%2BKh&X-Amz-Signature=a3bd8692e1fab6a780fad963a8ddc76fd58aca266cbaeb6976860a379b8bd29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
