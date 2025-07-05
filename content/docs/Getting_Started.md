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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5PNQSH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEYq9iOljB8iZOeh1VeSY0s5wlguWJdk9prVmRy%2FurEAAiAxfYlhh%2F1jmc6o740WcXKurC%2F%2B8fg8EHsnDy9imhlQMyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMhkWc1e0D6dSaVi8WKtwDio5EWJYu7ZXF%2FwW5xfqUbeIbcoOVUbuJAHK7x4%2Fh2i5qrloUw4Ff%2Bumtp0iwDkwIwpEZ85iZyA6wa9gla4i01CM1zhP%2F8Rgf0uxzKbeXg49AkwxdHSpFeWtCkr4tu5XzHHxJ6CMfss7Hq9Rq5aiJr%2Fa06Xkxgk7sAySsPknbnl0%2FsPJoRSNuOUEwdX9yEXaIRJ8fpvRYyvhVM6PVMRpO7xMMblg20SszID%2FklGdCMmejm6QXZEX%2BZGjesSEsFctAT7mLgDGOkOEWorl%2FiprdCsuv%2BHFMUtjgZBBWzko9Q7OAlpjKb7eZ3s9ECfns06uqHJBuJ5dSDIduPk9k7xfdkEa7ONYYO9jMiby11bhZMR2mgmzcugXwce3bIi6bHWopL6BlODi4mWdjj27o3YTiPwWOW9dXh5gJAJnejW%2FYRmnUQznE9aj6eSfH4S5qABPdb9xv%2F3gH1dJ41ocTvmLwvk%2B%2Fe5KRbZD7qaS%2FMi9R1hkWOcu%2BXnqp6fQPq1hB43nLmYESfe1hI8VQXWZHJFpIWCfa24MrxuzR2XbBpowLtZyLfsQVnDhBwgVZkUbS3WKN3FSJIkPNc7uL6GNNw1QrH1wVxqJGaaD%2Bglntp85pCpBbR7n7BsTZsPE6CF8w5ISiwwY6pgESQYVuY8gl7j7lGLNJGnMjj%2FP6pjIhFLOwEU68%2BUVgNJzLgwWZNLimcAAHe9LkfFr2vxxnJs7Xsa0Hd7X9sdceAZidvw9a4GXFq2sG0s5hPgsjEcFolzgDPy6GzElGilNI8KUVKDQ0s5qhhBmAIrvi8QmrnlseEOIZtjYsjs%2FjGZ1BOom9PxaCatUmXhMYWHeKUNrepVOQRKsbdrutMPlMgDqwijvN&X-Amz-Signature=37cdd53ef1b40aa92c6fd8a172f77b85c41235bdfc84f605704766ad102ff758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5PNQSH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEYq9iOljB8iZOeh1VeSY0s5wlguWJdk9prVmRy%2FurEAAiAxfYlhh%2F1jmc6o740WcXKurC%2F%2B8fg8EHsnDy9imhlQMyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMhkWc1e0D6dSaVi8WKtwDio5EWJYu7ZXF%2FwW5xfqUbeIbcoOVUbuJAHK7x4%2Fh2i5qrloUw4Ff%2Bumtp0iwDkwIwpEZ85iZyA6wa9gla4i01CM1zhP%2F8Rgf0uxzKbeXg49AkwxdHSpFeWtCkr4tu5XzHHxJ6CMfss7Hq9Rq5aiJr%2Fa06Xkxgk7sAySsPknbnl0%2FsPJoRSNuOUEwdX9yEXaIRJ8fpvRYyvhVM6PVMRpO7xMMblg20SszID%2FklGdCMmejm6QXZEX%2BZGjesSEsFctAT7mLgDGOkOEWorl%2FiprdCsuv%2BHFMUtjgZBBWzko9Q7OAlpjKb7eZ3s9ECfns06uqHJBuJ5dSDIduPk9k7xfdkEa7ONYYO9jMiby11bhZMR2mgmzcugXwce3bIi6bHWopL6BlODi4mWdjj27o3YTiPwWOW9dXh5gJAJnejW%2FYRmnUQznE9aj6eSfH4S5qABPdb9xv%2F3gH1dJ41ocTvmLwvk%2B%2Fe5KRbZD7qaS%2FMi9R1hkWOcu%2BXnqp6fQPq1hB43nLmYESfe1hI8VQXWZHJFpIWCfa24MrxuzR2XbBpowLtZyLfsQVnDhBwgVZkUbS3WKN3FSJIkPNc7uL6GNNw1QrH1wVxqJGaaD%2Bglntp85pCpBbR7n7BsTZsPE6CF8w5ISiwwY6pgESQYVuY8gl7j7lGLNJGnMjj%2FP6pjIhFLOwEU68%2BUVgNJzLgwWZNLimcAAHe9LkfFr2vxxnJs7Xsa0Hd7X9sdceAZidvw9a4GXFq2sG0s5hPgsjEcFolzgDPy6GzElGilNI8KUVKDQ0s5qhhBmAIrvi8QmrnlseEOIZtjYsjs%2FjGZ1BOom9PxaCatUmXhMYWHeKUNrepVOQRKsbdrutMPlMgDqwijvN&X-Amz-Signature=481d84b56ff81081361c6960133fd17c1f7476ba90d59d59edf71c379dc74293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5PNQSH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEYq9iOljB8iZOeh1VeSY0s5wlguWJdk9prVmRy%2FurEAAiAxfYlhh%2F1jmc6o740WcXKurC%2F%2B8fg8EHsnDy9imhlQMyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMhkWc1e0D6dSaVi8WKtwDio5EWJYu7ZXF%2FwW5xfqUbeIbcoOVUbuJAHK7x4%2Fh2i5qrloUw4Ff%2Bumtp0iwDkwIwpEZ85iZyA6wa9gla4i01CM1zhP%2F8Rgf0uxzKbeXg49AkwxdHSpFeWtCkr4tu5XzHHxJ6CMfss7Hq9Rq5aiJr%2Fa06Xkxgk7sAySsPknbnl0%2FsPJoRSNuOUEwdX9yEXaIRJ8fpvRYyvhVM6PVMRpO7xMMblg20SszID%2FklGdCMmejm6QXZEX%2BZGjesSEsFctAT7mLgDGOkOEWorl%2FiprdCsuv%2BHFMUtjgZBBWzko9Q7OAlpjKb7eZ3s9ECfns06uqHJBuJ5dSDIduPk9k7xfdkEa7ONYYO9jMiby11bhZMR2mgmzcugXwce3bIi6bHWopL6BlODi4mWdjj27o3YTiPwWOW9dXh5gJAJnejW%2FYRmnUQznE9aj6eSfH4S5qABPdb9xv%2F3gH1dJ41ocTvmLwvk%2B%2Fe5KRbZD7qaS%2FMi9R1hkWOcu%2BXnqp6fQPq1hB43nLmYESfe1hI8VQXWZHJFpIWCfa24MrxuzR2XbBpowLtZyLfsQVnDhBwgVZkUbS3WKN3FSJIkPNc7uL6GNNw1QrH1wVxqJGaaD%2Bglntp85pCpBbR7n7BsTZsPE6CF8w5ISiwwY6pgESQYVuY8gl7j7lGLNJGnMjj%2FP6pjIhFLOwEU68%2BUVgNJzLgwWZNLimcAAHe9LkfFr2vxxnJs7Xsa0Hd7X9sdceAZidvw9a4GXFq2sG0s5hPgsjEcFolzgDPy6GzElGilNI8KUVKDQ0s5qhhBmAIrvi8QmrnlseEOIZtjYsjs%2FjGZ1BOom9PxaCatUmXhMYWHeKUNrepVOQRKsbdrutMPlMgDqwijvN&X-Amz-Signature=f7137dbc0ce09d0da84a0f145f32e08ea1e275e48ca2dac4a410524f7e75e440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLXSBPUQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGW%2BfHs2azX6Oa%2Bt3ruD2rwArTf9NhbbpvXvz02TzoOyAiAa3rw01BEE9t7Y7uNeI%2Fn2UKNKokKVwgJ9APdLuUa1RSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMn2ThXcrDhwhox0h3KtwDrU5R0cy8L7930bF01Dny7SWZIm36L1z7TiazSaL0d8N4TKnZrzHqwSZ0qcZT6q2sBzGtG31yk1cbrvK6uiMBSQHmSL5SizvPg%2F1AeN7w1E49vwk9faCLYoytLvbSO%2FgUZ8pLUCvOYBxfu3GE%2BV7ejssIGpG7%2F8nfxPYckhD9WsOdd1iP3RFnOd9UwDh%2FXlEXy%2FkC5aEOk6WZR64YcKA9NnxnimSv7QdCH3wt0AwZxTS5yERcobLlvCZ6BQxj9JrYFX%2F0NjMMIz%2FGoM4iWcG%2BzXtblB2IlSavUXG1U9DUQB8r1V0Uy35F1j1XuDFgbJarGo0floEEs%2BwPAKLPZ5xR%2Fp2AFsXa4930CbdozXEdDfqlfSsksnRSrJ5Hb944wau0cDqoEGXFOF6DeQ3DXBcWnY%2BFMJpGCZj4cIbjAVJymdBCRGNmOrhieAmHZWoSJQ3qY8Tgi61MA3C3HjZcEtzp8657hCZf1bK7KX6hnxouOxSn%2BmKPCOt34SbQXT%2FI8AMcxDaZ03E2At8I%2Bw8xrZ13EgCzYtfOJtxU%2FQkHdzGGMXEbVjOrOHJYqlcffCHifHeVJO%2BT1ZZPwkKdCMEbOK%2BDUTpR%2BZawoideXCAX8QtwxsZbP1nHfkwReaheUmUwtY6iwwY6pgFR89%2F9b76nu8%2BdPIB1L4%2BBHno%2FWmaqm2rcj7H4fvgMoghFCNwi0tEf1jBMlmH4%2BIKBDJV5r4r9fdwCGg%2BMBBmyoGaXq0DMTPz8GPxCV07Rj7gWjQP3Cka7wWuqU3w0yXKssssjuey76fhQ%2B5wZHZzQ4CZjO9KlKXelxbJLuMHXI2ICDboDW4oPJvNMy%2BTAeIuq0LYkJYdP8vxMPTCVSeQWKXJ6cbiN&X-Amz-Signature=ed3934e00a79455590a753eb649587f082119d1a39cc48603dbdaa289b6c268c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ILDFGPZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCdykIeEgWcVHx2RrkpcsFONFnj6ry8zovmDtBc1YnQdQIgdkaDOOe1BA5RbI4sEEjv4bCjBge5k5bn1sTG6PQV3Kwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIU7pGzG5ku856s%2BOircAwNryCm1FE8ccirLxTizUa6h2xpx1a%2BPZhiqRm3omZqVm7b90adTU5n4o1WojFrS%2FT4ATNbvD5qaFQBOcu1C4UCQQ5nnQWJ6SPQS%2FOR7rQd70gUbMDA7PVbXkUxSdAaGbvZ2C0GEjbCroJVymc4XJgZYMeyMYV9CqwFb9NESlC%2Fl2bkyYuFL0cr4pJLOjnIrGuifSerSWXvNlX9fMUl0PshayglwqJybU0uBV3Z%2FkCadm2ERgFxvfA8%2B7x%2Fe%2Bpl6OBvVqt7KYaTE9B3QiV%2BAeRCdAHm6XyKNidkxBNXNNb4TJRMhGAlE8U5A90d3fJXgSrjx1g2kuFZcBRe66lxwe3oRHc9vtUiFVehrr5AfQ30ZGnWHWXniPO78Uf7lQdIJTow8OcJgV2SFAjVYNQMV4WLrk%2BPxgO9T1SKyo83Z2NL3xDqkYBihjH5VsGPgJF0cfx8qzBC4o%2FWmmyn3a2b4S9fXJHrJLpd8aM6H%2F8o2abuwQM2dT7QSZxX%2FJcLO2WSz2HwA9TsZxs2LBYsQs5cjeoU459yrEmpp5iPGAinQVO%2FBtjOsni7rsFT%2FIPHblmXC39Z8WcaX1XUxP5jXt5L8bfTeVP6r0DBvZpWCk4BSiPmiOVre%2BdS8qJgjuPPxMIuLosMGOqUBNAHSJcTIiCnsNRvtWFEo4rN2PXY1Pf18kVcQWg9%2F%2Fd8JnlOGolvFnMgz4cK%2FPzxGVqUBcxLfbka%2FhczTbbDFn2O42P5V349k%2Fa0eOv1TH59bNd%2BxZTLQppn83gQY%2Bzb2zcOhm4WuZTxXJevckZEPwJBry4wEXdxpadihIvZlzsinhhNI2nBsNJFlHcbGbIQM3BLHmaiduNw12OUcwDlJaFXv7s6t&X-Amz-Signature=7388f8c5e39e2e0906ebd3f363a33596d97a15278e495094cbde9f31182635ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5PNQSH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEYq9iOljB8iZOeh1VeSY0s5wlguWJdk9prVmRy%2FurEAAiAxfYlhh%2F1jmc6o740WcXKurC%2F%2B8fg8EHsnDy9imhlQMyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMhkWc1e0D6dSaVi8WKtwDio5EWJYu7ZXF%2FwW5xfqUbeIbcoOVUbuJAHK7x4%2Fh2i5qrloUw4Ff%2Bumtp0iwDkwIwpEZ85iZyA6wa9gla4i01CM1zhP%2F8Rgf0uxzKbeXg49AkwxdHSpFeWtCkr4tu5XzHHxJ6CMfss7Hq9Rq5aiJr%2Fa06Xkxgk7sAySsPknbnl0%2FsPJoRSNuOUEwdX9yEXaIRJ8fpvRYyvhVM6PVMRpO7xMMblg20SszID%2FklGdCMmejm6QXZEX%2BZGjesSEsFctAT7mLgDGOkOEWorl%2FiprdCsuv%2BHFMUtjgZBBWzko9Q7OAlpjKb7eZ3s9ECfns06uqHJBuJ5dSDIduPk9k7xfdkEa7ONYYO9jMiby11bhZMR2mgmzcugXwce3bIi6bHWopL6BlODi4mWdjj27o3YTiPwWOW9dXh5gJAJnejW%2FYRmnUQznE9aj6eSfH4S5qABPdb9xv%2F3gH1dJ41ocTvmLwvk%2B%2Fe5KRbZD7qaS%2FMi9R1hkWOcu%2BXnqp6fQPq1hB43nLmYESfe1hI8VQXWZHJFpIWCfa24MrxuzR2XbBpowLtZyLfsQVnDhBwgVZkUbS3WKN3FSJIkPNc7uL6GNNw1QrH1wVxqJGaaD%2Bglntp85pCpBbR7n7BsTZsPE6CF8w5ISiwwY6pgESQYVuY8gl7j7lGLNJGnMjj%2FP6pjIhFLOwEU68%2BUVgNJzLgwWZNLimcAAHe9LkfFr2vxxnJs7Xsa0Hd7X9sdceAZidvw9a4GXFq2sG0s5hPgsjEcFolzgDPy6GzElGilNI8KUVKDQ0s5qhhBmAIrvi8QmrnlseEOIZtjYsjs%2FjGZ1BOom9PxaCatUmXhMYWHeKUNrepVOQRKsbdrutMPlMgDqwijvN&X-Amz-Signature=4f27b234ec1b689505a3fa64d2a59f864ec3db5a421bfa03dfc22e4326e072aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
