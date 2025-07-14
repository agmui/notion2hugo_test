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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQSCLFF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb678uuo%2FLuCZS3k3ClUOKB97jkVU4wmqrJ%2FM8OUtPEAiEA%2FLLKwQ2qnSjmqcg5zD4jQ%2BNq9ddpNCeEEggmK6IEhD0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJjn8gf4raHBNcYWRCrcA7ahLQsNptBUM%2BxWVWwST5%2FSRH4IXtxzGzCpS4UbZrPoVCM3ANfPrqq8R6MsYvLKkjilYtk8SaR4zhPQmwlbgnm0KNoNfseP6aNQB5Y2N%2BlEBOvi%2BuPVVc8Voz%2FB2jideNXGm5%2B0L%2B%2FnSljy2MHzF28yl%2FevEjzr%2FHdR9FBaaCTzYv8kEBdjHqoaNzG5YM%2FH%2BPcqgpVUmqDjRCyGCzbTcG%2BAyh1Y3na8%2F3bQ6uMa60HS%2ByexoROGKddqKTkEQQkGp6aj3VyjT%2FykBErYw0htKKiJtaHagyVkJtX4hRBT7UBuo3y4KuJjK6dyXXD3xZ%2BrNOLlFLgXb1TPby%2B3hKM6iikvWK%2BFnXKsNp96%2BpH%2BbO6rc%2BhHKSCOEWGXuLu%2BM7ved3AJTQDoDl1dnUJXRVrXu6FWTA%2BTmhr8TjFbTEnqU250zxgj8%2Fl19J%2B%2BtGXqMftf3%2F4zpOhoq54hdpIjNl2QBR4ZJffNWwA91ivILO3CwQVoM6iKnzGO9VLEEl%2Bpt8uZknZFoz7EaOsqtG5OCkPtSXC3kwgPnhuOW0MCXI%2B9SqqQZaOqPDwL9iQB0ZCp3KinOlDVPO89sQJzC07BJKT8UUor6DODcYFlseSKuQfdQi44q42fJPJ%2BLzAusrndMIrN0cMGOqUBZsTBWKGvin0SR74wK%2B2hIhBxFUy33ppkkpoO1H52qNemw3ygVl3qSVujp7S9pybIHihrAAjOfO89qbdrcen6gvZCO6XfVlNgJ3dIvQJOCPbryIMuUPPCNJVLQ%2BvxBFD4t9izsjBtdtLeQU1ouPdpcbgfGDHB0v9FIdUbXe7bPD3IrV13mZNzsoxndycu9FUM6QtBeWprcLIEkctRLawJyJWf88V4&X-Amz-Signature=7a07f862506f4bd6ea139792beba67cc7272e3fcbadd54fcec4ba712c8644fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQSCLFF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb678uuo%2FLuCZS3k3ClUOKB97jkVU4wmqrJ%2FM8OUtPEAiEA%2FLLKwQ2qnSjmqcg5zD4jQ%2BNq9ddpNCeEEggmK6IEhD0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJjn8gf4raHBNcYWRCrcA7ahLQsNptBUM%2BxWVWwST5%2FSRH4IXtxzGzCpS4UbZrPoVCM3ANfPrqq8R6MsYvLKkjilYtk8SaR4zhPQmwlbgnm0KNoNfseP6aNQB5Y2N%2BlEBOvi%2BuPVVc8Voz%2FB2jideNXGm5%2B0L%2B%2FnSljy2MHzF28yl%2FevEjzr%2FHdR9FBaaCTzYv8kEBdjHqoaNzG5YM%2FH%2BPcqgpVUmqDjRCyGCzbTcG%2BAyh1Y3na8%2F3bQ6uMa60HS%2ByexoROGKddqKTkEQQkGp6aj3VyjT%2FykBErYw0htKKiJtaHagyVkJtX4hRBT7UBuo3y4KuJjK6dyXXD3xZ%2BrNOLlFLgXb1TPby%2B3hKM6iikvWK%2BFnXKsNp96%2BpH%2BbO6rc%2BhHKSCOEWGXuLu%2BM7ved3AJTQDoDl1dnUJXRVrXu6FWTA%2BTmhr8TjFbTEnqU250zxgj8%2Fl19J%2B%2BtGXqMftf3%2F4zpOhoq54hdpIjNl2QBR4ZJffNWwA91ivILO3CwQVoM6iKnzGO9VLEEl%2Bpt8uZknZFoz7EaOsqtG5OCkPtSXC3kwgPnhuOW0MCXI%2B9SqqQZaOqPDwL9iQB0ZCp3KinOlDVPO89sQJzC07BJKT8UUor6DODcYFlseSKuQfdQi44q42fJPJ%2BLzAusrndMIrN0cMGOqUBZsTBWKGvin0SR74wK%2B2hIhBxFUy33ppkkpoO1H52qNemw3ygVl3qSVujp7S9pybIHihrAAjOfO89qbdrcen6gvZCO6XfVlNgJ3dIvQJOCPbryIMuUPPCNJVLQ%2BvxBFD4t9izsjBtdtLeQU1ouPdpcbgfGDHB0v9FIdUbXe7bPD3IrV13mZNzsoxndycu9FUM6QtBeWprcLIEkctRLawJyJWf88V4&X-Amz-Signature=7723fdbc302443ce6eed8e832f665e77b1b59750f24bc86984dc806003ea35ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQSCLFF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb678uuo%2FLuCZS3k3ClUOKB97jkVU4wmqrJ%2FM8OUtPEAiEA%2FLLKwQ2qnSjmqcg5zD4jQ%2BNq9ddpNCeEEggmK6IEhD0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJjn8gf4raHBNcYWRCrcA7ahLQsNptBUM%2BxWVWwST5%2FSRH4IXtxzGzCpS4UbZrPoVCM3ANfPrqq8R6MsYvLKkjilYtk8SaR4zhPQmwlbgnm0KNoNfseP6aNQB5Y2N%2BlEBOvi%2BuPVVc8Voz%2FB2jideNXGm5%2B0L%2B%2FnSljy2MHzF28yl%2FevEjzr%2FHdR9FBaaCTzYv8kEBdjHqoaNzG5YM%2FH%2BPcqgpVUmqDjRCyGCzbTcG%2BAyh1Y3na8%2F3bQ6uMa60HS%2ByexoROGKddqKTkEQQkGp6aj3VyjT%2FykBErYw0htKKiJtaHagyVkJtX4hRBT7UBuo3y4KuJjK6dyXXD3xZ%2BrNOLlFLgXb1TPby%2B3hKM6iikvWK%2BFnXKsNp96%2BpH%2BbO6rc%2BhHKSCOEWGXuLu%2BM7ved3AJTQDoDl1dnUJXRVrXu6FWTA%2BTmhr8TjFbTEnqU250zxgj8%2Fl19J%2B%2BtGXqMftf3%2F4zpOhoq54hdpIjNl2QBR4ZJffNWwA91ivILO3CwQVoM6iKnzGO9VLEEl%2Bpt8uZknZFoz7EaOsqtG5OCkPtSXC3kwgPnhuOW0MCXI%2B9SqqQZaOqPDwL9iQB0ZCp3KinOlDVPO89sQJzC07BJKT8UUor6DODcYFlseSKuQfdQi44q42fJPJ%2BLzAusrndMIrN0cMGOqUBZsTBWKGvin0SR74wK%2B2hIhBxFUy33ppkkpoO1H52qNemw3ygVl3qSVujp7S9pybIHihrAAjOfO89qbdrcen6gvZCO6XfVlNgJ3dIvQJOCPbryIMuUPPCNJVLQ%2BvxBFD4t9izsjBtdtLeQU1ouPdpcbgfGDHB0v9FIdUbXe7bPD3IrV13mZNzsoxndycu9FUM6QtBeWprcLIEkctRLawJyJWf88V4&X-Amz-Signature=79815ad74e47fc3d7e9152ee1c39a9de81ff62d999377a452d7bc2790fe349c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4M6FMJW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCzm95aUDCbkrtPZ%2B01g7yPVZ5Ultb17SUr8gKw1WuYSwIhALhz3gYYpGRmiyXrnVa7qcG39v2Wm0xChGTTOUkW2SyJKv8DCCMQABoMNjM3NDIzMTgzODA1IgyV6RAufX%2BgDasFIREq3AOIkCAvTu4LtNYfZmNNMQDRpKG0goh8H30%2FstMZry8bXJQ4DxkGTUP4iSIP80ZxRN1%2FfpGXguOeOXSJU%2FKJML6bE2xhd%2BfnGoogPX8J17RjJs7auKajFbOKCfTYAlV1ONFIJEEYy4yX3o%2FjmARKje7HlT8FG%2FNdmtp7ViWJXRqOnfoegXvDktrcmVmYwN3sBqZmy6fevPCSkNf3%2F9yRkniagrmK3qfJyj6IMESb3RUxgFxN3aZzfKKHytnwCqhJRsj6J0MSI7umABc90X%2FyGE8MFpdoo%2Fn0MBfsvXYAdQU2yYd4URPgdQq89O0yjunOkb%2BpmnBlwJoSyTYPtc7%2BPpNAIhnS3v5TiRlwgwBBznWpaL%2FYcHqgfaCiW9g1zQOHOtlzk14WcOKJ7Gv%2Bnzfi%2FJds93Dyub9WZhh5pyud%2BKlYn%2F%2BJFlcX1TiA1007HWyJ2gG7HBeEd4fz4VtIA9F88HVL9sQHbsGzSHwll2WS58aCtHnA7W%2FIGEwtEULce9oVan52XjO1o5uf82cZmzG%2F%2BP1rVFifzUC6Nm7CQNXg7AibLH5gaDTwHvBgv8rBQ0GynC7K0Chq97xQeoOsJzTMC0CZmxrb6TDAwpGtlcqe1toULHzpJczPR3%2FZ23I7kjCszNHDBjqkAe9uyhQrGJFcqzG9OuuX5AAuZjE6rStlayrSuMUlA2PNhNt13%2B2xkbP40LfXZm2pbNbgA8GDFRp93bmbIpBABN%2Fd5wu2uqsyT5C1yL5YpgBLrWQcqOtEmdCYSoPhz4vkO7sgFM%2F3AR1g7K%2BjsJ3m7hMgKmnSH%2BTCsGVKt7rHe8RDNWjV9VLEOt5szOLKTflxKQBcy92Q9arJXHxvB8TvMfyZIZ0A&X-Amz-Signature=4987c313d511f6593b2106a7a019e8713adfa297a3eaeb3f858a853039fd46a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F33ANLC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCZIsaUkC0qqCAulOC7EpZd6qjyqIArPM6WUwR%2FRq8n1AIhAMpUfF3%2BFZT4zsiWl12wnYNXFqUmZXCKD5PGfrkA8%2BvXKv8DCCMQABoMNjM3NDIzMTgzODA1Igy6J%2BrSQa%2FbSMohFNQq3AOP6KqWj2inM4tz9VciQyHkHWkXI6uyx8QIEkmWnS1AgOVNqgQDC6IB%2FYgTvPWVOvu%2BbAC7KRCxNcWNn3DGGguMfLlfxHtWzPlOsHFxozQ8MJHekRRYpr9IwNeqA6B5jIdOqPlrTGMpv7ErDGsopYH5DvS19o5pi%2FrPAobewy4ofy7iapHA6vF%2F%2BXtfk25HSuOnY5%2FNqf3EZGOkVKusHvm1M5H0GZQ3h0MURSjnqFGeHaa7JWZYcU9%2FizeUnI7y2HuN7kwFJJZyb5RZ%2BItzmKPjIkJmvUXMuCwa8GqqPwUfVZkiIGINr1Uub0ic56ZCjDiadJoZqPWhDPAmy4oy7mlrXuWoPPE7VaKD74yvomwUokpnZrKuY4nC9NSo1wpyBRJFWdogbcndSoQtyTZTyumNc%2FU%2FKrFd75x7HcblLd6cv5ccUP7liSok1b6nFNDXuNQF6ju0vImxi3PFQkeXeq2PXCBnw0lFMGpY3t28Ro2LV7OKX2SpDn9YLCY9wef7zy7x50OoqtybQ5WNXSx9y9x6urkIztQ2gN8x1YaWYVDnGEfQOJH%2BsGdY62WgR%2BTF8W43eCQidA1ybDFGXfNY6cvTRrB3EcfjYqLC%2BwvGr9uuSiYEKPEw2v6edgMfOTDBy9HDBjqkAXm5gKP%2FB9aMkV4CsttP2SqNG8ROsiURZG59MTp3Hx23F5sn3LR0OyqLb%2Fmk1gUx8jdYzyEFcKUEDsV14rW3ZtOZ2No7M%2FMxxsJMrEZ0N%2F65s3WMteRorStj3MNnQd4Q8Wp7N63cD%2BjZ6k%2BuHJhhtHvQZXccIRQypyaJ4feMhT4Roz%2FmMHGVgivJ0bBQmOOoIoHR5%2F%2BWEgMEUGgPUOYV3Xt%2BWrP%2F&X-Amz-Signature=2c9d9be4789ff54340c6cf07fdb8deeb2d8f61b9d621ae585ce452f502493918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQSCLFF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb678uuo%2FLuCZS3k3ClUOKB97jkVU4wmqrJ%2FM8OUtPEAiEA%2FLLKwQ2qnSjmqcg5zD4jQ%2BNq9ddpNCeEEggmK6IEhD0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJjn8gf4raHBNcYWRCrcA7ahLQsNptBUM%2BxWVWwST5%2FSRH4IXtxzGzCpS4UbZrPoVCM3ANfPrqq8R6MsYvLKkjilYtk8SaR4zhPQmwlbgnm0KNoNfseP6aNQB5Y2N%2BlEBOvi%2BuPVVc8Voz%2FB2jideNXGm5%2B0L%2B%2FnSljy2MHzF28yl%2FevEjzr%2FHdR9FBaaCTzYv8kEBdjHqoaNzG5YM%2FH%2BPcqgpVUmqDjRCyGCzbTcG%2BAyh1Y3na8%2F3bQ6uMa60HS%2ByexoROGKddqKTkEQQkGp6aj3VyjT%2FykBErYw0htKKiJtaHagyVkJtX4hRBT7UBuo3y4KuJjK6dyXXD3xZ%2BrNOLlFLgXb1TPby%2B3hKM6iikvWK%2BFnXKsNp96%2BpH%2BbO6rc%2BhHKSCOEWGXuLu%2BM7ved3AJTQDoDl1dnUJXRVrXu6FWTA%2BTmhr8TjFbTEnqU250zxgj8%2Fl19J%2B%2BtGXqMftf3%2F4zpOhoq54hdpIjNl2QBR4ZJffNWwA91ivILO3CwQVoM6iKnzGO9VLEEl%2Bpt8uZknZFoz7EaOsqtG5OCkPtSXC3kwgPnhuOW0MCXI%2B9SqqQZaOqPDwL9iQB0ZCp3KinOlDVPO89sQJzC07BJKT8UUor6DODcYFlseSKuQfdQi44q42fJPJ%2BLzAusrndMIrN0cMGOqUBZsTBWKGvin0SR74wK%2B2hIhBxFUy33ppkkpoO1H52qNemw3ygVl3qSVujp7S9pybIHihrAAjOfO89qbdrcen6gvZCO6XfVlNgJ3dIvQJOCPbryIMuUPPCNJVLQ%2BvxBFD4t9izsjBtdtLeQU1ouPdpcbgfGDHB0v9FIdUbXe7bPD3IrV13mZNzsoxndycu9FUM6QtBeWprcLIEkctRLawJyJWf88V4&X-Amz-Signature=b9495e0ecc75016cd57bbcb2c9c464fae029703ea9fe589c6411413299ad5d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
