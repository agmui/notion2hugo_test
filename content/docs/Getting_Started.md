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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJB6HJGD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE8tIjL1kZ2%2FMl459%2BC372TAw81HwKEvuaLv6jY17uzAAiEAqapIDK85fxwORVKTNWIef9qngpKsJGX%2FIoIktwT%2BxkUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNrkU8WhW%2Bsm6lj1gyrcA2qfyG3C4dvOGjvWRp%2BLQDSD0A5u9vXjkWms96r1IrJee4SQZk7CwDZmtPnId%2BE8%2BaPc4ytHJp4wczXj83Vvberk13cSgUQHLXSnHLAULJr3QONkzOSGgZEP3XJCTeor%2BJ320%2BFzW2B%2BgeCDdQA1IWcFA58M2FDkjAbpsDwnQKyQ%2FPAPxaQpN1ebu4LZPDrWF5Xra8QuSoEC5n0B7p7bdbprgyq30s2LGCSjm1QFXZajiLxe6PgJ%2FkhmGiYcHwRKtRslaesZr35Nk7oSqRSvgVSdfNmMtgIkehcB4z2V9%2FzJathfHqpKLQhjEZv8o7chAPrNXBzlozE5Dj6KPqHudtBDrXxH%2BPGka%2Bhw9jWbt%2Fdft8Y89rwNWWFv4F%2BJ0ZMDF1nw8C6Kle5%2BaSviEIxNbu2sunBeBi12TbkhOS812vW%2FKSWy2Sgd7sQLguRJnnbr3DMQ4ZcR%2FjoKtXaD7O44sKT3dU%2FsRxT%2FMMov2j0TG8j0E2h430xevv4kRxnnfEwEz0W5XvaZwKXX9ylPqIOn1d9xQhJOo4nqDAzDTGPtkBe9RPFtDU6uro9tHGD8szBNj4P9Egd%2F%2B3wU41u%2BH4kc7lqvj%2Fbfn%2BM6NBHNPvaT577%2BpTalaowje4iaQekvMKrfzMEGOqUBgJXWF4EQnRY5lbeaaGEIIzDq5J0MZVMnWEWTfD3Q0w7krMmlm1%2Fgc3klUHF0lsr6RnY7BeEQcMppd%2FPEdr%2BfXtqvM78klY09ADoIvL0wNuJbedcpz%2FQ0ZrSkq7tArPHwZjMOMiZ1EY80OWeYlxTHiDLvgV725xwOxNJ0oI1Y7jxAQrjm7C6zMFpKAcj4AfMvHRBJKF%2BOwxt9UTZVQ%2Fjf1fXg0lns&X-Amz-Signature=90462df541594499c919ad75b6d8c8822fec0cfa6917bac808077b20364e59bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJB6HJGD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE8tIjL1kZ2%2FMl459%2BC372TAw81HwKEvuaLv6jY17uzAAiEAqapIDK85fxwORVKTNWIef9qngpKsJGX%2FIoIktwT%2BxkUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNrkU8WhW%2Bsm6lj1gyrcA2qfyG3C4dvOGjvWRp%2BLQDSD0A5u9vXjkWms96r1IrJee4SQZk7CwDZmtPnId%2BE8%2BaPc4ytHJp4wczXj83Vvberk13cSgUQHLXSnHLAULJr3QONkzOSGgZEP3XJCTeor%2BJ320%2BFzW2B%2BgeCDdQA1IWcFA58M2FDkjAbpsDwnQKyQ%2FPAPxaQpN1ebu4LZPDrWF5Xra8QuSoEC5n0B7p7bdbprgyq30s2LGCSjm1QFXZajiLxe6PgJ%2FkhmGiYcHwRKtRslaesZr35Nk7oSqRSvgVSdfNmMtgIkehcB4z2V9%2FzJathfHqpKLQhjEZv8o7chAPrNXBzlozE5Dj6KPqHudtBDrXxH%2BPGka%2Bhw9jWbt%2Fdft8Y89rwNWWFv4F%2BJ0ZMDF1nw8C6Kle5%2BaSviEIxNbu2sunBeBi12TbkhOS812vW%2FKSWy2Sgd7sQLguRJnnbr3DMQ4ZcR%2FjoKtXaD7O44sKT3dU%2FsRxT%2FMMov2j0TG8j0E2h430xevv4kRxnnfEwEz0W5XvaZwKXX9ylPqIOn1d9xQhJOo4nqDAzDTGPtkBe9RPFtDU6uro9tHGD8szBNj4P9Egd%2F%2B3wU41u%2BH4kc7lqvj%2Fbfn%2BM6NBHNPvaT577%2BpTalaowje4iaQekvMKrfzMEGOqUBgJXWF4EQnRY5lbeaaGEIIzDq5J0MZVMnWEWTfD3Q0w7krMmlm1%2Fgc3klUHF0lsr6RnY7BeEQcMppd%2FPEdr%2BfXtqvM78klY09ADoIvL0wNuJbedcpz%2FQ0ZrSkq7tArPHwZjMOMiZ1EY80OWeYlxTHiDLvgV725xwOxNJ0oI1Y7jxAQrjm7C6zMFpKAcj4AfMvHRBJKF%2BOwxt9UTZVQ%2Fjf1fXg0lns&X-Amz-Signature=72954f9c23632bce3ef73ada5515181f9d1db44db7dac8cf5e81c9c0c2c33605&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJB6HJGD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE8tIjL1kZ2%2FMl459%2BC372TAw81HwKEvuaLv6jY17uzAAiEAqapIDK85fxwORVKTNWIef9qngpKsJGX%2FIoIktwT%2BxkUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNrkU8WhW%2Bsm6lj1gyrcA2qfyG3C4dvOGjvWRp%2BLQDSD0A5u9vXjkWms96r1IrJee4SQZk7CwDZmtPnId%2BE8%2BaPc4ytHJp4wczXj83Vvberk13cSgUQHLXSnHLAULJr3QONkzOSGgZEP3XJCTeor%2BJ320%2BFzW2B%2BgeCDdQA1IWcFA58M2FDkjAbpsDwnQKyQ%2FPAPxaQpN1ebu4LZPDrWF5Xra8QuSoEC5n0B7p7bdbprgyq30s2LGCSjm1QFXZajiLxe6PgJ%2FkhmGiYcHwRKtRslaesZr35Nk7oSqRSvgVSdfNmMtgIkehcB4z2V9%2FzJathfHqpKLQhjEZv8o7chAPrNXBzlozE5Dj6KPqHudtBDrXxH%2BPGka%2Bhw9jWbt%2Fdft8Y89rwNWWFv4F%2BJ0ZMDF1nw8C6Kle5%2BaSviEIxNbu2sunBeBi12TbkhOS812vW%2FKSWy2Sgd7sQLguRJnnbr3DMQ4ZcR%2FjoKtXaD7O44sKT3dU%2FsRxT%2FMMov2j0TG8j0E2h430xevv4kRxnnfEwEz0W5XvaZwKXX9ylPqIOn1d9xQhJOo4nqDAzDTGPtkBe9RPFtDU6uro9tHGD8szBNj4P9Egd%2F%2B3wU41u%2BH4kc7lqvj%2Fbfn%2BM6NBHNPvaT577%2BpTalaowje4iaQekvMKrfzMEGOqUBgJXWF4EQnRY5lbeaaGEIIzDq5J0MZVMnWEWTfD3Q0w7krMmlm1%2Fgc3klUHF0lsr6RnY7BeEQcMppd%2FPEdr%2BfXtqvM78klY09ADoIvL0wNuJbedcpz%2FQ0ZrSkq7tArPHwZjMOMiZ1EY80OWeYlxTHiDLvgV725xwOxNJ0oI1Y7jxAQrjm7C6zMFpKAcj4AfMvHRBJKF%2BOwxt9UTZVQ%2Fjf1fXg0lns&X-Amz-Signature=2d4b0755c9b164c5118edb625ee3f26cf0cf87616c67db95818c49daac35c69c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4EAK56%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDFjIjvYqIGjtnn6yKBx3BatrzYgXB7s1iXLVI9crX6JQIhAO1szEAcM%2BtuvFQfjl0NVbdSYldUshvXgNSkF37QmH%2FWKv8DCDAQABoMNjM3NDIzMTgzODA1IgxrG%2B6Cjnac88UXjbkq3AMLD4%2BeJqArFd43OyYIPnHxuJ6av9AaKezOQV7ulDgiCfjq%2FeVS1nXe5BA8fGtD9HGmlu%2Fqm7dpzazW9%2BjK6wF469hA9X2k6WraumFQJeZ7Ah2uhg%2BGPDvXLg7PYZKYNVxd3n5b5GxdJ2n%2F4SJMR9Yej6QrdS9DF2oIqfy83gRTeZENV3p%2FCpevVpBiFJyjUlNFkyp1mJlajP34NMNd71s1t%2FmZU3oa4OBXp%2FezNvDZKNkpVuisKnOvtiQ4Fzj0XL4SIHiL7q8zdMtvrqp2FhEcvp68deyGdNd5fST3rKz4ijpzWvIqxnRPoZYxhM1t2QNAYctDaLne%2BN9BwGatoTnN288ZUpzhiLqu2bX27gX%2BDSnp6pq3HjwZKr%2FVjOyb9dcqZoE8F1ttT0EmKI43r6rRw9ArinzPY3cFAeRqywNUSGfYtjbtJBT3PROuPGYgUghthZ3lmp7f7jx3zkNatykR%2FofkJWSaI3Nbo2n7r7fbR1qIvII4DvJM6b%2BLkh3gX%2FQhBPd6Z32lF0%2B23NzG7x7Twr8LvbDscArhJ%2FEGPQ0sn%2B%2Fe9XlWhtaFLUnoSFy5F9ilQWT8a7wXwuzduqmArI66jRCenN9hshACYGsNFmT70IYdomNrJHKhB%2BbbiDCe38zBBjqkATfeG0TcsCzxXjD%2BPPGDYhkqtZeM5V0aGSmIht3CXZ1SAH%2Ba7TMIQwnn%2B5ZSEnhR87NgbLZxeJ2MQWK3oFWJ7VCLBAk8zX6o4kzJrISYUuC%2FkwJTLVwAA5cSilUR8NmEOO1rVKzzjHewo7GCyhCuWLKYROuqYJ9ySXJDe%2FS91hIu%2Fl24dqR5fd6Pt1vxv1zLEHiZOD%2FOR50b2xLLNRq8y4N8HADb&X-Amz-Signature=7b5faa31eee38f80c41c67cda1a3a4917875ae49c48d9de60790669d8589ede3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNM4FP3M%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIG1Iz8ZVQZteZp52CLWraaNuIjM9ExikNkQB2OsDlvVLAiEA3dxKC2EH%2Fpa%2FDOOvtxUJRCD4Dl6tpGpNvVSLrBz093Aq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDH5dy1FOd9IKurOxVyrcA2Sa2bfSAb9Fw5yEXOfw55MOvVRfXq%2F4RkU5sieoH2cU6%2Fn92yfNTEwOS2Vft2W%2FtTOazYO9%2BrTvIRQZ2nWiNKjvp3yusWgo%2B3Wvlq2drLrRrhhTO59vMDsWIvolDdz2%2FKPw%2BoPZrWreCoxb0IMLIg2Z%2BsbYz6rE1k0A9srNHvy1s9RHDUjWhiHeGvGBNpQjM%2FHd%2FCZNGc9rh9SqkvDVA1xGPgRUBIfg8wVFtkN4QX9DZ%2BSV0b8taRjGPu1YNjR7j1aT14eQmR0UaEcW%2BDVdZH4J5mzTxinfd0d9MtqZPGx8aHi5ZQ7wzioZ1WkWykB%2BimFh5FenQM7rU2%2BHEK75DGM7dSw9Q4iTieaV1kB%2F9PSg%2B7KcO4r6NyIKQ1bm5KgSZeqFnWv0ISuLO7A%2Fg4YqsHvazHlFbAVfRIh%2FVYdXirsneCBETqhO3c1HnDopqujC5xkjqi2X48rgu0tdGE0elu99QvdFLVdoDCRFs6b7l9gIPAThlLb4lk%2FeuW5SPTkMFHvkc3qK1OnrwVE%2BMdSuhcjWWtZ0wzvpgyZzm5KAv0IwDpio8Vt5cfBy681dQOvNZe8lgtaUjZY2ict%2BpuhP3PyoHgi0XXEHRjN2tB6qNdRWRw4y4sv0QD1M%2FRfnMJXfzMEGOqUBYUT%2FS8BhSfVUCjkECwGE3pvGS%2FqzxDEzEVj4Kio6okECs4UZ350%2B17fq%2FB%2B9TeCBuo6BOzRF%2FH0OLCNAzvd0m63SvAZ1lRfkFMRak4e3sUudj0WWNe%2F%2FtjBOCpX3fRoNxD36fZtHMq7oc7QJKNPN4FedaZlrm49zgzzEQAInBSMyQE8sQpeXKL%2FSbC6amgc07KLqhMDuhRhWoJRxhYKBbeaODH3v&X-Amz-Signature=1d4ae758c4a6a57f1a67f2c45a7fd6c4a0320fa08eecad1402aa3583eba5ac1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJB6HJGD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE8tIjL1kZ2%2FMl459%2BC372TAw81HwKEvuaLv6jY17uzAAiEAqapIDK85fxwORVKTNWIef9qngpKsJGX%2FIoIktwT%2BxkUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNrkU8WhW%2Bsm6lj1gyrcA2qfyG3C4dvOGjvWRp%2BLQDSD0A5u9vXjkWms96r1IrJee4SQZk7CwDZmtPnId%2BE8%2BaPc4ytHJp4wczXj83Vvberk13cSgUQHLXSnHLAULJr3QONkzOSGgZEP3XJCTeor%2BJ320%2BFzW2B%2BgeCDdQA1IWcFA58M2FDkjAbpsDwnQKyQ%2FPAPxaQpN1ebu4LZPDrWF5Xra8QuSoEC5n0B7p7bdbprgyq30s2LGCSjm1QFXZajiLxe6PgJ%2FkhmGiYcHwRKtRslaesZr35Nk7oSqRSvgVSdfNmMtgIkehcB4z2V9%2FzJathfHqpKLQhjEZv8o7chAPrNXBzlozE5Dj6KPqHudtBDrXxH%2BPGka%2Bhw9jWbt%2Fdft8Y89rwNWWFv4F%2BJ0ZMDF1nw8C6Kle5%2BaSviEIxNbu2sunBeBi12TbkhOS812vW%2FKSWy2Sgd7sQLguRJnnbr3DMQ4ZcR%2FjoKtXaD7O44sKT3dU%2FsRxT%2FMMov2j0TG8j0E2h430xevv4kRxnnfEwEz0W5XvaZwKXX9ylPqIOn1d9xQhJOo4nqDAzDTGPtkBe9RPFtDU6uro9tHGD8szBNj4P9Egd%2F%2B3wU41u%2BH4kc7lqvj%2Fbfn%2BM6NBHNPvaT577%2BpTalaowje4iaQekvMKrfzMEGOqUBgJXWF4EQnRY5lbeaaGEIIzDq5J0MZVMnWEWTfD3Q0w7krMmlm1%2Fgc3klUHF0lsr6RnY7BeEQcMppd%2FPEdr%2BfXtqvM78klY09ADoIvL0wNuJbedcpz%2FQ0ZrSkq7tArPHwZjMOMiZ1EY80OWeYlxTHiDLvgV725xwOxNJ0oI1Y7jxAQrjm7C6zMFpKAcj4AfMvHRBJKF%2BOwxt9UTZVQ%2Fjf1fXg0lns&X-Amz-Signature=30e3e5387319d9d832e839a1d5f24415d94ecf1d27ac6af6cd95b7e7b6adf419&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
