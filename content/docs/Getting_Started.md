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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJSHZ6S%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMvIL9W%2BMgFwfWLJcYxhpDbd5te7AYi%2F44By4eDIpeyAIhAJDDUOvsbhDKZ%2FvLwzz84vC85Sy961ROXTXD0%2B1ZZi1yKv8DCEMQABoMNjM3NDIzMTgzODA1IgxJNwSyoqcUsDSx0Ngq3AOKmLKvx6yOf%2Bi9Jvg03VF0bm7H7CmzML%2BzrwE8p7KTXAMIBMlhGcmJIyMrp%2Bh6%2BaFw683f13snyQMe5U2jYw61y9%2F9oNvwWoEAdZ1lfT17Jrj8Ndk6iIURLSD5XGNjwk%2BWk0ZPgRRj3lwrgXGGmAhYiyEJdEGLKhuTGJkCNqFovS1CnXsehoGLB9hgql%2FrAGOF%2BT5HBCCkb%2FakEaon64H6MdmvAWM6idft6t7Zq2RlUL6del5K4S7yZb%2BZo3Z0vzjW5K4qPEmHnEPehQCtLyf7kFshjwhOKXr6U48B4913diogLzUPgteot8g2cmwsPwWU9CiHoKwG9IJfY50scJMBHyuquDfytd4QAb9PqgQslliyquYpfxz54%2F%2FkKwVjTvzlO%2Bc6qZ%2BPcDimAClPtfdAJhNkmNvWaMm%2FGd6m6gUUvQ6Fsc%2FYbw1aImsE%2BnmvMI99gET8ClydXQxR5s38Q%2B%2FMtcwoksRR94eWnPSorPuWd3Fe186mMONtCB5dUWZ6ikAhW765ShzVLLj7iUO2s9qXXFMFSaYwt7qnVhnAOgvTLgW60vUfZkzoOiMcaEBxYYf%2B0sW9rrihO5rXFc1Hr26pT9M0gJeSxMypYCrbTiiD53tSKwwFtEusS%2FttXjCBpbrCBjqkAdbE1pijo5GxPyqs7elbyaTdE8xF%2B70jEl2nKSWsKBxa8bm64MKFY%2Fp9qlxOfdSmKUuaWn4fJ4hWLZ8h2ON7%2FtxPQitOYTXGVwA6%2B7xZ98KigkMgQxRybfTxB2N36dthDcBcKFWwftMulzj7wY0ttOQ%2FnsEvkwcXq%2FlrMQn9v7MxWj9lmUo5PsnZLgtXBccbLcph1lSSbBUaMrF%2FdwARaK23gsH%2B&X-Amz-Signature=daa2488092d86b9076ebdcd7df1d24fbcae2278ca5153375451dcc5ba6b50cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJSHZ6S%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMvIL9W%2BMgFwfWLJcYxhpDbd5te7AYi%2F44By4eDIpeyAIhAJDDUOvsbhDKZ%2FvLwzz84vC85Sy961ROXTXD0%2B1ZZi1yKv8DCEMQABoMNjM3NDIzMTgzODA1IgxJNwSyoqcUsDSx0Ngq3AOKmLKvx6yOf%2Bi9Jvg03VF0bm7H7CmzML%2BzrwE8p7KTXAMIBMlhGcmJIyMrp%2Bh6%2BaFw683f13snyQMe5U2jYw61y9%2F9oNvwWoEAdZ1lfT17Jrj8Ndk6iIURLSD5XGNjwk%2BWk0ZPgRRj3lwrgXGGmAhYiyEJdEGLKhuTGJkCNqFovS1CnXsehoGLB9hgql%2FrAGOF%2BT5HBCCkb%2FakEaon64H6MdmvAWM6idft6t7Zq2RlUL6del5K4S7yZb%2BZo3Z0vzjW5K4qPEmHnEPehQCtLyf7kFshjwhOKXr6U48B4913diogLzUPgteot8g2cmwsPwWU9CiHoKwG9IJfY50scJMBHyuquDfytd4QAb9PqgQslliyquYpfxz54%2F%2FkKwVjTvzlO%2Bc6qZ%2BPcDimAClPtfdAJhNkmNvWaMm%2FGd6m6gUUvQ6Fsc%2FYbw1aImsE%2BnmvMI99gET8ClydXQxR5s38Q%2B%2FMtcwoksRR94eWnPSorPuWd3Fe186mMONtCB5dUWZ6ikAhW765ShzVLLj7iUO2s9qXXFMFSaYwt7qnVhnAOgvTLgW60vUfZkzoOiMcaEBxYYf%2B0sW9rrihO5rXFc1Hr26pT9M0gJeSxMypYCrbTiiD53tSKwwFtEusS%2FttXjCBpbrCBjqkAdbE1pijo5GxPyqs7elbyaTdE8xF%2B70jEl2nKSWsKBxa8bm64MKFY%2Fp9qlxOfdSmKUuaWn4fJ4hWLZ8h2ON7%2FtxPQitOYTXGVwA6%2B7xZ98KigkMgQxRybfTxB2N36dthDcBcKFWwftMulzj7wY0ttOQ%2FnsEvkwcXq%2FlrMQn9v7MxWj9lmUo5PsnZLgtXBccbLcph1lSSbBUaMrF%2FdwARaK23gsH%2B&X-Amz-Signature=cb280a049b87ed406c4033fa81b48c298baaf75480df14f168f6af0b79c48780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJSHZ6S%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMvIL9W%2BMgFwfWLJcYxhpDbd5te7AYi%2F44By4eDIpeyAIhAJDDUOvsbhDKZ%2FvLwzz84vC85Sy961ROXTXD0%2B1ZZi1yKv8DCEMQABoMNjM3NDIzMTgzODA1IgxJNwSyoqcUsDSx0Ngq3AOKmLKvx6yOf%2Bi9Jvg03VF0bm7H7CmzML%2BzrwE8p7KTXAMIBMlhGcmJIyMrp%2Bh6%2BaFw683f13snyQMe5U2jYw61y9%2F9oNvwWoEAdZ1lfT17Jrj8Ndk6iIURLSD5XGNjwk%2BWk0ZPgRRj3lwrgXGGmAhYiyEJdEGLKhuTGJkCNqFovS1CnXsehoGLB9hgql%2FrAGOF%2BT5HBCCkb%2FakEaon64H6MdmvAWM6idft6t7Zq2RlUL6del5K4S7yZb%2BZo3Z0vzjW5K4qPEmHnEPehQCtLyf7kFshjwhOKXr6U48B4913diogLzUPgteot8g2cmwsPwWU9CiHoKwG9IJfY50scJMBHyuquDfytd4QAb9PqgQslliyquYpfxz54%2F%2FkKwVjTvzlO%2Bc6qZ%2BPcDimAClPtfdAJhNkmNvWaMm%2FGd6m6gUUvQ6Fsc%2FYbw1aImsE%2BnmvMI99gET8ClydXQxR5s38Q%2B%2FMtcwoksRR94eWnPSorPuWd3Fe186mMONtCB5dUWZ6ikAhW765ShzVLLj7iUO2s9qXXFMFSaYwt7qnVhnAOgvTLgW60vUfZkzoOiMcaEBxYYf%2B0sW9rrihO5rXFc1Hr26pT9M0gJeSxMypYCrbTiiD53tSKwwFtEusS%2FttXjCBpbrCBjqkAdbE1pijo5GxPyqs7elbyaTdE8xF%2B70jEl2nKSWsKBxa8bm64MKFY%2Fp9qlxOfdSmKUuaWn4fJ4hWLZ8h2ON7%2FtxPQitOYTXGVwA6%2B7xZ98KigkMgQxRybfTxB2N36dthDcBcKFWwftMulzj7wY0ttOQ%2FnsEvkwcXq%2FlrMQn9v7MxWj9lmUo5PsnZLgtXBccbLcph1lSSbBUaMrF%2FdwARaK23gsH%2B&X-Amz-Signature=c6a62898e95ff2361b792745e8c4411f6a63b896b79f5e7f9b6337b2c08aad05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSG6SFO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGSu%2BgpXdEhfWsorpkHmxuSmML5ek1v0bmv461qv5GP6AiB81wCoFrs9HKNwsvzhMh%2F9ET8rMQTiPmtb7hKBJTzbmCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMpTpwl8dM53h1NQE3KtwDZkmRQhoIO56FevWsgYW9Lm55XZgdmzXRDGeLxvvzWKMN0c71JwIg0BKnKQEYZN96D6vQY%2BaTFIRO7Enpt7pM0sXyWxOl%2FIFK%2F7H5MqCDTZNbmLBZg0Z%2Bl%2BA21%2BPRtLtUnzcu7SF1KlA8wqRJqfjo1Lotyw72ou9xFNyymN8aNJI42t8Rm6Jyav0qxHpzbnBep2OLLAGK51%2BZiNgLsRKkDlblIIzbKo%2BIUt%2FwXR9oDVP0j85mL6BTZpfB6wq5FZndiaRRb5yHFRxcEJ8xiMRbXToscqS1%2BjZ19vA1InNLQV127jGhjWDGXjcvsKQNl68ohGKNkRB7FnQK1opHS06vYyMbrM5HYjmR6L6RwL7aJ0xVcw5pSGYcwfRWEHU9G64HX6HSgl7d4W6fzGRPjVq%2BILvzuNgfaAsWte9RUq3eTEZjNCcKzytdtUtMe7ZBiqMWmVgL67eA59dMYBVpbcs3mGGDikijlChJYtt1RFB2y9EgzfaJNH5GO%2BTFe0CyPQSs8OVPAcT8AizHRPCQfDTqffVQOyuyEYkq0m7KWieQyTlYo2AT2HxpUm41PVOT2%2FiBOtgLvK8sfbJSFpWnexUOnLwfbqegc%2B2YPwI21c%2Ft2oIZeHN9KbCRVwkfAFgw7cq6wgY6pgHrlap1LFh7P7vrjH3AiTYBrYvVnXLuEEEna%2Fhqyo%2FVIO%2Bhn6q5Iev2sXzSzgUrhOZmZr2uyRTsz3tIyJEkYfxz7sigar%2FFFhcfkDv7xX2gYDf3Sa4zIXjrYdPSPf4pa%2BqDRibz1byhwxOW5Crrz%2FGHBd1M3h5fLIrK4v%2BE%2FVuWnNvD7Bi3hZ%2FJs4Y%2BKyB41i5XNuQKJa8X2Z8ADS34sVypI1miMSWX&X-Amz-Signature=a000cd74dbf119547ea364d9fc77dc249832308abd9c83998a7aa3a80aea0bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45YFOK7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGA3Z71oaGu1t5vhUoGg2vynyhnU9A440GcjywXaxsoMAiB2sllW4mFp3JXJ6%2F3N7UbGwSfk1VhUU%2B1WCSoaOdruOSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMQBW2l9X3KpHjlP%2FdKtwDwoVJNNS9aAydh3uKzKya%2BT2yovg7AnPaL35nDD%2F8aBIrSeQ%2FHGRwRPmODPeWWjpVcwfHb%2FmetKf5ZJqmoOMZ%2FiwU6bS0KpVeHkrMdublJhKxbJU5LG3p4wFVJuRzl0quJg3zfIQ5t2Dr5RNtXWmcvHT7AEOJTAOigpKJOoxzzOB50R4uS7vQ56%2BOaz5oPnpOLLuKqvoCP4P7%2BXpKiLHD3%2FjYZDD%2FaxgfJ9klNLVp4a8NUq3y%2F%2F9AZ0bma%2FTfgPce7hfgfaYnfxt%2FJ2BDaWBO0qLx1%2BzxuUEIjEW4xjLfGAgut4kIOwyapcA97Mbgg0PnVL7R5aDVSG3NgFlInwenP2V0sHjMXEW6kZYDC6Ta6Vc%2BTWYOpyopPk1Trr7ijXVIc%2FJhMZRXYO1ZZQnWPuRp%2FnfWzzjX3ky1sZv1T3eH7PLtGjj%2B20Nz96s%2F%2F7zu8taGZsH%2FIS73JodtuzjlANbfZzKzy2MXaTLsjJPOvYLcP1%2B6pyo6aNr3PI9ecGpkiCyMdgQ2oMRic51nu4%2FfzhLvDHi9OIDzlf%2BlwnYxzfvTAP7zlOmyrT4yPNIjntLmdMwi2n64Egg3aAgwPRa%2B0whXgDPdg3Jeo4LEMy2KCAowhfpoMRWVk19bBZ4jEQUw25%2B6wgY6pgHv1mW5d1s%2Fu065LiB9I437C65PyT%2FJ59opOLEVSAS%2BVfNh0DkMUf6eZVAxgfkUHvE5xzuCJUUY00urqb70xXu4zjFEr%2B4si5AKGy%2FHwiS%2BoCIFkwQTc1PrI9VEwlds9cn5hKzUVwAt2t1LGq9L2wD%2Bm9rTkiNR1BMFUFasZxS3m5icisicdYIqmtcX8F1LeuDqsgYdIwQ8mf4TTSOcaT28YSOZLttP&X-Amz-Signature=d836714726f57b3cda04a65a4ac4673d3a2d62e92a44e9530ca3c909448e1a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJSHZ6S%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMvIL9W%2BMgFwfWLJcYxhpDbd5te7AYi%2F44By4eDIpeyAIhAJDDUOvsbhDKZ%2FvLwzz84vC85Sy961ROXTXD0%2B1ZZi1yKv8DCEMQABoMNjM3NDIzMTgzODA1IgxJNwSyoqcUsDSx0Ngq3AOKmLKvx6yOf%2Bi9Jvg03VF0bm7H7CmzML%2BzrwE8p7KTXAMIBMlhGcmJIyMrp%2Bh6%2BaFw683f13snyQMe5U2jYw61y9%2F9oNvwWoEAdZ1lfT17Jrj8Ndk6iIURLSD5XGNjwk%2BWk0ZPgRRj3lwrgXGGmAhYiyEJdEGLKhuTGJkCNqFovS1CnXsehoGLB9hgql%2FrAGOF%2BT5HBCCkb%2FakEaon64H6MdmvAWM6idft6t7Zq2RlUL6del5K4S7yZb%2BZo3Z0vzjW5K4qPEmHnEPehQCtLyf7kFshjwhOKXr6U48B4913diogLzUPgteot8g2cmwsPwWU9CiHoKwG9IJfY50scJMBHyuquDfytd4QAb9PqgQslliyquYpfxz54%2F%2FkKwVjTvzlO%2Bc6qZ%2BPcDimAClPtfdAJhNkmNvWaMm%2FGd6m6gUUvQ6Fsc%2FYbw1aImsE%2BnmvMI99gET8ClydXQxR5s38Q%2B%2FMtcwoksRR94eWnPSorPuWd3Fe186mMONtCB5dUWZ6ikAhW765ShzVLLj7iUO2s9qXXFMFSaYwt7qnVhnAOgvTLgW60vUfZkzoOiMcaEBxYYf%2B0sW9rrihO5rXFc1Hr26pT9M0gJeSxMypYCrbTiiD53tSKwwFtEusS%2FttXjCBpbrCBjqkAdbE1pijo5GxPyqs7elbyaTdE8xF%2B70jEl2nKSWsKBxa8bm64MKFY%2Fp9qlxOfdSmKUuaWn4fJ4hWLZ8h2ON7%2FtxPQitOYTXGVwA6%2B7xZ98KigkMgQxRybfTxB2N36dthDcBcKFWwftMulzj7wY0ttOQ%2FnsEvkwcXq%2FlrMQn9v7MxWj9lmUo5PsnZLgtXBccbLcph1lSSbBUaMrF%2FdwARaK23gsH%2B&X-Amz-Signature=41041f555e4f99c2a30173ca8825a5e34833ceef042fea3a1aa481dfbb20ef45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
