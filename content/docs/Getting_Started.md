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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYUVRIE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD6IVxBtr0WkzJGST9YYOGEh6zZmfJSHomOxUyeHTwSKQIhANDnQjWkM9dVddGvPt3%2FMjn%2FReex5kGYCyKHh6m%2FEZRwKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxV93DX3En0Y8gtEPQq3AOP8b6eakbLl6jWlif5zWNXWoqDdfWaoXrmASsWf2v5mg%2FqUpG4Zf84qQs172QqX0IVs6rA2wrMzNzstYGV8vbm0KYX3EcD8gkggVerN7DVZttP6J4yU4dc0%2BQqkuFcuV08rkvH%2FtNNwkgGjYIzVe6AAJlg1zhlDOLeuRPb7MVd7ap2lAu12XRRBtRj6eLInSA58GkPUnsJHu1Wbd0XabMqTeCXJGKLaoD6gCsesDCf9LHbE5B0SYz8O5EmcTzwKwNIZD06GcgyVqewaRv1n1m9QE1HUGVNLKplI1bL1sdG1r02c%2FlWWBuOTQ%2F2R2WCpGAkWen9sp2RggFyFozman%2FyyM2ITknMq1qNnlzsHWvGxdJneloXFiAy9h6KGmSa69f46772Ue2LSWE4MPrfCmzNxWlmE5mTJv7CYUwfc8oafMKAAwyEYwKFjqiW5vXLo2xCglxICqi1MsZi1AYZ7v8uga22jtn8wh2avKjkjUUDLhN9795EQAxoo98nbQD%2FTVRD2Ae5XT2ZvTwcrUXjf7CKFxsaDLBJWwLR3tRQZuYA22CeRj%2FZHjNDZLbiIfmVDTrsGM8oRt5hgP8TuiQ6GAVT0wxANIV7wWldQBQAFDsyqNJDeJNlZBT%2FCdWYtjCF8om%2BBjqkAWYDecnmuv1DU39DbQMLfUxHweg1FWml9BW%2FcRjZHMoNtYOY%2FfQwneWfcSGV8O9Xs2E3J4Q6IcdciT62jxiaviMCZ6TQ%2FjSHVH8Y%2FQ0wpK67QCTxhsT7SB6qRa7PvlP9JZ%2FrU7XnNy4ftG%2FMrX4t9vL6OVBEm40ClwwfSiPRVXoSX%2BT%2FN0RXebFGhvLxS%2FOjDdvQcVhCP5wgAhsb7fwu4OMDZ1sM&X-Amz-Signature=3d2159ad2ef521c869f6ece1e722785b87d5cd7f5fb4f1613160bc3db953f997&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYUVRIE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD6IVxBtr0WkzJGST9YYOGEh6zZmfJSHomOxUyeHTwSKQIhANDnQjWkM9dVddGvPt3%2FMjn%2FReex5kGYCyKHh6m%2FEZRwKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxV93DX3En0Y8gtEPQq3AOP8b6eakbLl6jWlif5zWNXWoqDdfWaoXrmASsWf2v5mg%2FqUpG4Zf84qQs172QqX0IVs6rA2wrMzNzstYGV8vbm0KYX3EcD8gkggVerN7DVZttP6J4yU4dc0%2BQqkuFcuV08rkvH%2FtNNwkgGjYIzVe6AAJlg1zhlDOLeuRPb7MVd7ap2lAu12XRRBtRj6eLInSA58GkPUnsJHu1Wbd0XabMqTeCXJGKLaoD6gCsesDCf9LHbE5B0SYz8O5EmcTzwKwNIZD06GcgyVqewaRv1n1m9QE1HUGVNLKplI1bL1sdG1r02c%2FlWWBuOTQ%2F2R2WCpGAkWen9sp2RggFyFozman%2FyyM2ITknMq1qNnlzsHWvGxdJneloXFiAy9h6KGmSa69f46772Ue2LSWE4MPrfCmzNxWlmE5mTJv7CYUwfc8oafMKAAwyEYwKFjqiW5vXLo2xCglxICqi1MsZi1AYZ7v8uga22jtn8wh2avKjkjUUDLhN9795EQAxoo98nbQD%2FTVRD2Ae5XT2ZvTwcrUXjf7CKFxsaDLBJWwLR3tRQZuYA22CeRj%2FZHjNDZLbiIfmVDTrsGM8oRt5hgP8TuiQ6GAVT0wxANIV7wWldQBQAFDsyqNJDeJNlZBT%2FCdWYtjCF8om%2BBjqkAWYDecnmuv1DU39DbQMLfUxHweg1FWml9BW%2FcRjZHMoNtYOY%2FfQwneWfcSGV8O9Xs2E3J4Q6IcdciT62jxiaviMCZ6TQ%2FjSHVH8Y%2FQ0wpK67QCTxhsT7SB6qRa7PvlP9JZ%2FrU7XnNy4ftG%2FMrX4t9vL6OVBEm40ClwwfSiPRVXoSX%2BT%2FN0RXebFGhvLxS%2FOjDdvQcVhCP5wgAhsb7fwu4OMDZ1sM&X-Amz-Signature=150be14d953db7c3b63e35b7db807394b933939f4fc39a11de6e546088288f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTD5URI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD%2BldnmdJdfgvs7Gxycir38JGsn8Ntxvi9aA9ogdgA71wIgO%2BE%2B%2BYwcQ8pxw%2F9kCvCZ5rmqzC60wTVrOBBkeYhV6mgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfOXCNTp%2BFGi8a8YyrcA2pmsxGf78BIqG7ePJNUly8yCNlYWVSpOiulsyA6RN%2FXTsN9t%2BGi8EZFmSbTcZ9t%2Bedq%2F5iYWDwsCA2enAi2hI26%2F8%2B84TDR%2Fzm%2BK78sXHUH4igh8STYEv946Dm6zrUci5I10Fyi27R98YS4fV4FaFGiwQrfSce9799SEWokg7pT61YtEZHAIxgU%2BP7wz1miZlMmrg5iVcQ%2B04j1ey6WgBzYGuksq1Lg8AEd5tZznZ6%2BA4QrHCphlWn%2Fcp3DaLf8DGz8%2Fc8OnZegtmOQNDYZ%2FwvBmICJql6zS9MhobRrPQ%2B%2FqdcvjjTgCib2xVYnQwKlpK6nAmB8X23Lg0KGdJ8PXRf55q12wHYQ0ygQXTnWKLzFqI6KNSttZLI%2FgyZIGC6tdd0xSit%2Fsc%2F4h9jurYa9MBr2js0E592FNohRW4FgD2ftnvmWLBKP88eKDBN1yabhK9XGltA%2B94PnC7c4QB9IB%2BUvuHtuT11%2B3A%2FLGeWKBNGpG0BDYo6V7JWaX5AmOgfhcUHjy51btGYjLLV61A%2FKNtKf%2Bg8MLOUu0lYIRbg2zUHyCztzoMhFBnWslq9WRmHb44qUB9PJ%2Fim0zmizXbCnVSsXMbGsQQbJZJQpd4j9%2BPka%2Fo3q1hRYAKrXf1gkMKryib4GOqUB5rR4CtLynnragD2XqLeAwzj8UN41T8K8fPouBX4tefsZXZdsJEbywISbtyGRn3lsL0lVmEWf8KFCjvAaKuGd%2FPwYyd1Aqdvg3bW1%2FwnXnVuERb5x7X7v0cSqDCTNtlgq%2BXgdXliAKKXt3a%2BI%2FouHUGMtxqjykNhyiIbfx0O3X03ZSzNf4eeVXyP75teuZTf8Wti%2BClyvXxNxIOfiIdp9SWI7fZWM&X-Amz-Signature=e3ede291238d3e6964d273f30b563ec4333e7b3e2f65c7a7dbac333a8d8d9d70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAU6I4D%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDNWcUv8LxNxCwv%2B%2B7YDnn4g7lqPdZoZKZd1yxIyr15zQIgXgkAqG8wr7V2GKFW%2BKg0G2Pio30T4SLYw82v9X6%2FlRwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeH6f7KOWRPxJBseircA2ChhJeJWE%2FSuCUhQDRKLOccr9CXikyxMSgOVedTLhcAJIbWu7W2aCW%2BMRj5m%2BNAiJD8O%2Bmf8n%2FZoIP9GW06NkAleNEex8ENilUdIHl1lXZoahakW3KJ5VHZtpudox%2Br7j6VEt6Cr9fOn1H7EbT6sUck12p%2FWyUQrym%2FZUuc6XszBS65VYqdIMgXYsTgm8IhZCaFhrguFjO7TIxVW3CPEFuUERhhDy3D67IqF0ZDUUHZf1ysa%2Biopr3FDi%2FvF4pIlVvmde6YtlDqAgouL8zunh1KaFhzLtg3AutQzxI1QOaNWVLFPHbHSUf%2BaA12SELAaeMbvOoSweTDI9OQu%2BI3CotJaMbWcztUQbcH9hpbw0Orqfj4Sta%2FMzRU7idG4dZOJv3fw%2BCJNnFXyQ4fkq6DCjx%2Bf2ZV7XHlMawAcoo2GfP88pt5GkaEQea8ioZ%2FjCs%2F0LDxdTTCedRu3YtTIZRCbcuxdAJAukkm5gPUi5PpQ2h3pqubTJlXZ3sg0KVSS2dR2b6xiSBYkHhPXey3Y%2FMG4mwBKhPFqbz5ni50k5EIJ9Pm6QqPWrEuDw1ff4DRZ4kJMKq7AK%2B5bHUQ%2B04rYZafvjd0ao15CwVMUkaBI9tMT3SaXsBtf9qJiADxUDMsMNHyib4GOqUBU8Rzc%2BXFKRb7BzI%2F0rbHur%2FcYMnhnOVeGFt6wnq2W0N3YrP1quHoaETYC6Xi9WPQqp4G6wQJAnUL7JHrOM7D2Q7gUDrJe0L8%2BDZie34UpZGZZLWs23mUFpCsgtgefP13Txf4%2BPkwOP%2FFzYW8lpSdVg7WSm9c5MDlE3Gl6eaGMMTAwzv4fpLroTs4T26pf7bU8sZ3DxePn6LkdE2hCanh%2F%2B96WjTu&X-Amz-Signature=4e113e85942ee3702d2f1175f119ffdf26ffa880155546e8cf7a4a2c3cd4e22c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYUVRIE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD6IVxBtr0WkzJGST9YYOGEh6zZmfJSHomOxUyeHTwSKQIhANDnQjWkM9dVddGvPt3%2FMjn%2FReex5kGYCyKHh6m%2FEZRwKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxV93DX3En0Y8gtEPQq3AOP8b6eakbLl6jWlif5zWNXWoqDdfWaoXrmASsWf2v5mg%2FqUpG4Zf84qQs172QqX0IVs6rA2wrMzNzstYGV8vbm0KYX3EcD8gkggVerN7DVZttP6J4yU4dc0%2BQqkuFcuV08rkvH%2FtNNwkgGjYIzVe6AAJlg1zhlDOLeuRPb7MVd7ap2lAu12XRRBtRj6eLInSA58GkPUnsJHu1Wbd0XabMqTeCXJGKLaoD6gCsesDCf9LHbE5B0SYz8O5EmcTzwKwNIZD06GcgyVqewaRv1n1m9QE1HUGVNLKplI1bL1sdG1r02c%2FlWWBuOTQ%2F2R2WCpGAkWen9sp2RggFyFozman%2FyyM2ITknMq1qNnlzsHWvGxdJneloXFiAy9h6KGmSa69f46772Ue2LSWE4MPrfCmzNxWlmE5mTJv7CYUwfc8oafMKAAwyEYwKFjqiW5vXLo2xCglxICqi1MsZi1AYZ7v8uga22jtn8wh2avKjkjUUDLhN9795EQAxoo98nbQD%2FTVRD2Ae5XT2ZvTwcrUXjf7CKFxsaDLBJWwLR3tRQZuYA22CeRj%2FZHjNDZLbiIfmVDTrsGM8oRt5hgP8TuiQ6GAVT0wxANIV7wWldQBQAFDsyqNJDeJNlZBT%2FCdWYtjCF8om%2BBjqkAWYDecnmuv1DU39DbQMLfUxHweg1FWml9BW%2FcRjZHMoNtYOY%2FfQwneWfcSGV8O9Xs2E3J4Q6IcdciT62jxiaviMCZ6TQ%2FjSHVH8Y%2FQ0wpK67QCTxhsT7SB6qRa7PvlP9JZ%2FrU7XnNy4ftG%2FMrX4t9vL6OVBEm40ClwwfSiPRVXoSX%2BT%2FN0RXebFGhvLxS%2FOjDdvQcVhCP5wgAhsb7fwu4OMDZ1sM&X-Amz-Signature=5cdfaf3c6e5c18726ebd346cfa53f83c892c40449ccd089785e07959d105aae9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
