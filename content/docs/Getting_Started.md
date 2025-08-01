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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QXKUUQN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FO02QF%2FHEqIhJ5Jwf1iDP9F8hJz9em0%2FyTRAp0pjSNwIgUFgPldaAzmIyw2Q1s9lsF3svV7vRusnRK8WkAkp3mLEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa1xejnr2YOPTrMOSrcA%2BfUK6q85ljBI1Cjaw%2BcM2%2Bi%2FkNkZI14nSE9MFNhD4A56BLeFdYczn5q2xjaVamqS7fQzgbqAYWSjJqpz96DxT3E8R1mOSGgKxCRU3l7ZoVMkfV7DaiUHb3bxDwCLD5iKd4d3rl56BWb8WJd5VEYsXf7wJeAL0z0mTfdApkJZDrMnBtzlbzV0sjAtBKcXvcfNjIBdOdcdhjbWItZV9CylAA4UlfRgf2JwnI1IL6JMZ1LeexeTRVvvYCrNxJH1Ko1PhWtx95l0Vvls6RX50phiCks77TRh0S%2F9vXW5gUf49OSCFIgGaBvn%2FCXc6fFEhHd6d1%2FRvMa2rI69%2BV7iL3%2F5BZOE0bSuFCfKSbJ3UrdJ3D48vRnmK6SphpQUAubFszLkdjQjLG8PaEzuHliwrmHV4l3Espg0ZHxPs0tSWdQdPzapdJpdO9TVgdOSn46NVd7Dpz6aXI%2FMN60d0hwtiSag%2BMgkzi%2B%2F8Rt3%2Fjc51zO%2BCoVHxsK0WgMIlHG3W%2BT9yFm8k39GzXktdSHn73YJSKtnZXqMpSj1rO8R%2Bqj6eN5Q1LIhIweK6OCUagZihOGd1wWPu7vgAwf6dAAgsU6tRqLTn8WOzBHG21%2BCpeiCaKnfkvyN%2FERdyx2rYhLNjHZMMzvr8QGOqUB288tttR%2BnYodFIix2gOQniiNFwukoJdrUQ69nzw%2Fu6LrhPQyGkOf%2BMPGKb9MdZ%2Ft%2FxWAlCMCTM9RY71NdylKmR5R0SUpqrVfXPdso95zvAMCBrh08Z0OhiXeSMd%2BqRIGUnUczWcSiY6Em3iqgHoRzARNii8ofUpmQJyfSgQV2vPsjQWuG2rCZLgMN%2BXhmyWXhFf4awI1ayFFzjWWSpSOiL3HuWyc&X-Amz-Signature=fdb288915b9d60784b6dd9c9d09c200f32f87aa77fd05998cbd01964dbdc1487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QXKUUQN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FO02QF%2FHEqIhJ5Jwf1iDP9F8hJz9em0%2FyTRAp0pjSNwIgUFgPldaAzmIyw2Q1s9lsF3svV7vRusnRK8WkAkp3mLEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa1xejnr2YOPTrMOSrcA%2BfUK6q85ljBI1Cjaw%2BcM2%2Bi%2FkNkZI14nSE9MFNhD4A56BLeFdYczn5q2xjaVamqS7fQzgbqAYWSjJqpz96DxT3E8R1mOSGgKxCRU3l7ZoVMkfV7DaiUHb3bxDwCLD5iKd4d3rl56BWb8WJd5VEYsXf7wJeAL0z0mTfdApkJZDrMnBtzlbzV0sjAtBKcXvcfNjIBdOdcdhjbWItZV9CylAA4UlfRgf2JwnI1IL6JMZ1LeexeTRVvvYCrNxJH1Ko1PhWtx95l0Vvls6RX50phiCks77TRh0S%2F9vXW5gUf49OSCFIgGaBvn%2FCXc6fFEhHd6d1%2FRvMa2rI69%2BV7iL3%2F5BZOE0bSuFCfKSbJ3UrdJ3D48vRnmK6SphpQUAubFszLkdjQjLG8PaEzuHliwrmHV4l3Espg0ZHxPs0tSWdQdPzapdJpdO9TVgdOSn46NVd7Dpz6aXI%2FMN60d0hwtiSag%2BMgkzi%2B%2F8Rt3%2Fjc51zO%2BCoVHxsK0WgMIlHG3W%2BT9yFm8k39GzXktdSHn73YJSKtnZXqMpSj1rO8R%2Bqj6eN5Q1LIhIweK6OCUagZihOGd1wWPu7vgAwf6dAAgsU6tRqLTn8WOzBHG21%2BCpeiCaKnfkvyN%2FERdyx2rYhLNjHZMMzvr8QGOqUB288tttR%2BnYodFIix2gOQniiNFwukoJdrUQ69nzw%2Fu6LrhPQyGkOf%2BMPGKb9MdZ%2Ft%2FxWAlCMCTM9RY71NdylKmR5R0SUpqrVfXPdso95zvAMCBrh08Z0OhiXeSMd%2BqRIGUnUczWcSiY6Em3iqgHoRzARNii8ofUpmQJyfSgQV2vPsjQWuG2rCZLgMN%2BXhmyWXhFf4awI1ayFFzjWWSpSOiL3HuWyc&X-Amz-Signature=d46bbb9b0c3348374804626c7a29000a53dba4da49c944ea36d4da02f5d8d325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QXKUUQN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FO02QF%2FHEqIhJ5Jwf1iDP9F8hJz9em0%2FyTRAp0pjSNwIgUFgPldaAzmIyw2Q1s9lsF3svV7vRusnRK8WkAkp3mLEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa1xejnr2YOPTrMOSrcA%2BfUK6q85ljBI1Cjaw%2BcM2%2Bi%2FkNkZI14nSE9MFNhD4A56BLeFdYczn5q2xjaVamqS7fQzgbqAYWSjJqpz96DxT3E8R1mOSGgKxCRU3l7ZoVMkfV7DaiUHb3bxDwCLD5iKd4d3rl56BWb8WJd5VEYsXf7wJeAL0z0mTfdApkJZDrMnBtzlbzV0sjAtBKcXvcfNjIBdOdcdhjbWItZV9CylAA4UlfRgf2JwnI1IL6JMZ1LeexeTRVvvYCrNxJH1Ko1PhWtx95l0Vvls6RX50phiCks77TRh0S%2F9vXW5gUf49OSCFIgGaBvn%2FCXc6fFEhHd6d1%2FRvMa2rI69%2BV7iL3%2F5BZOE0bSuFCfKSbJ3UrdJ3D48vRnmK6SphpQUAubFszLkdjQjLG8PaEzuHliwrmHV4l3Espg0ZHxPs0tSWdQdPzapdJpdO9TVgdOSn46NVd7Dpz6aXI%2FMN60d0hwtiSag%2BMgkzi%2B%2F8Rt3%2Fjc51zO%2BCoVHxsK0WgMIlHG3W%2BT9yFm8k39GzXktdSHn73YJSKtnZXqMpSj1rO8R%2Bqj6eN5Q1LIhIweK6OCUagZihOGd1wWPu7vgAwf6dAAgsU6tRqLTn8WOzBHG21%2BCpeiCaKnfkvyN%2FERdyx2rYhLNjHZMMzvr8QGOqUB288tttR%2BnYodFIix2gOQniiNFwukoJdrUQ69nzw%2Fu6LrhPQyGkOf%2BMPGKb9MdZ%2Ft%2FxWAlCMCTM9RY71NdylKmR5R0SUpqrVfXPdso95zvAMCBrh08Z0OhiXeSMd%2BqRIGUnUczWcSiY6Em3iqgHoRzARNii8ofUpmQJyfSgQV2vPsjQWuG2rCZLgMN%2BXhmyWXhFf4awI1ayFFzjWWSpSOiL3HuWyc&X-Amz-Signature=1bd042562504c6ff40d2fba1eff0b788c434b4ea1957fb67600e24bbd044ef8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVYBKLH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzyvVls7wCitw09Z%2F2TrSjDj51rSd2CVh%2BXlFNzwLZTgIgCTgssDmK6LoHZ2AaY8fKctOPFZFFMNXNvMYkiGCww9gqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8hGwt%2Bs9obMZRUwCrcA27yf3Oo5Ru0tPTZi2KvRiu3L%2FK9HDrMkWays9VBQd3Ed28aeK1gN2nrzf%2BWnN8ziHGdq3Mn%2FQBJTvHikiUcaR9DcxfsMssPkCYXIFug3lugHNA2NenRdxMouAR2I46%2FWTR0aE1qzr6xKPVJTPU9KGAZQ0puXJE5z3N76G3KffeqMrcBvBOJmO1oF%2BQwxTPCDlFUb8%2FhP0KDntXMoqNRl2%2FoDtCghEpJCic0dFD2934PGzF37gkaKLGkfm8yIYIh54HYY9Ioti44ryn8LWBAjotWkGvsVwGpbkUnf3Ww3yv4BXzgOb5uYFg0bN4BMxXN8BcFy0MgjhBdvMTIpEBGhi9sK5fZCLLMOez1fUzSvsG%2F2BJnU%2BfhRksZwna42TNb1y90skpXqeJjFwue1gO7iay4BzC0Eg2okUSfx9zY75vRhaiO6B4T6tkOHH%2BD6JGgfkQpZcMrH5KPFcRxc%2FcjQbfejtqFzZf2GHAWjyNGBwYXyVVBtlqNrhYcftnNAyLd3AgZmhBF4tMU1ST3I5ZOvfKwSU6FIQnvkVDDLdqN1Z4W2b71K%2BVKGZFilm%2BIdM%2Bim2HS4XfIImT6FwOTHWRhncwL6sD9CGsatQz3ovvM68ZUI%2B%2F0M2WvU2tF%2FKqXMIrvr8QGOqUBTns9bJOO%2FqYhLZmB91lu7svRhdv8tzvp8W1yUT7sFXsTtIKjYwi38FyDCn%2F5xMUsxW%2BnNh5Vy71v950dlzWIZH8uT9IyKbQo1u1PMpVWcdwQb6mFm57nbWvX95OKMsOCs%2BzSB2aN7F50eWHa5gNFjVD5WenvtkXFxM%2BCmdLSgqd2NdtfMYM6M6QkM2n4h6Ijp74iaoRG19Q3zXZvkRDFPX8QGaej&X-Amz-Signature=65207bd75f87103d98624391a02470999aaf6a32825bf5c1a049a0033e49d6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GUX4R4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6GDXypTXBRzOqMn8ZN6QU8YuaFhEdvVzffE2rvMmyqAiAeGJiIxdRWq7rKg%2FsRO7B4SvpoufdSwlB9gu1dIvn6%2BCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhUNN4GDYmw%2BCpC%2BMKtwDDFnuSTU5bl9shPxc5kqQubSYFCW1MQsz0Vci7KKfyVmJf0E6OkHtdIYItcuKn%2Fjdtm5hR%2FDAjRX3hQfYVgqUJtgU%2Ffvk1IQ6EHJAo5etZOHwqOw41O14PbBMT0VXuGs2mjme9uGPTi59tcL4iKlvv6Il%2BOSBTfl9Yk6uPi9p7V%2FDgNhC8Jafx2MAVMmO1ffICmcCNrO%2BFadc7jFFlLtJl%2BQIRUQZrgSBK0025rC22QmHPca5FmIFg8vfG%2F4b5IbLhASZNrD86TOLF3itcjXYmevuSdURgGpLQn9aCiZoiFntWIRHh5ElXbBcmSapDMnGk9DXF7D%2B1KsbMJpDZxsg9dK7PztR3xaK2MACaByHvz2nDhMqAHbO%2FRNcnNg4woV8gIp%2BDWpxt0BPLnPZQwfvkvd4MV3FVl6HP8sGKcE48fjx0QRv75hRwzJcDziIO5UirX3sd%2BpeBGT%2FHC%2FwRopmMtEArYBX9mU1pwhHqzgBQMox1BgEmZUe8CAhnKYlKviowrGLXopMkvp5t3vPTqjO5N5KUgj0tofvz2h211a%2Fk0UzxML5Iu2iH%2FYNz6DW3nsqc4wTiS%2F2lzZOBkuMfeCmPUzwrEwOBLP5EG0lf3mbK3I7pVuYigOjhuJDgiEwqu%2BvxAY6pgGYDQ8ATqZMxbxJfq4Za%2BRrF0NxIfqNA9aZQ9xlt4P5pX321jsCORW0PCT0%2B3ONP6xLtltqjUYqbsvF71Qk6NoyCc6lpnL9L9kHdQvAKN09l6VJycz39%2F5%2FjW7LwCQe0izhdTB2ZUfOr0SiT0t65X2zZBV3Fy%2FgwMdlFL%2FU2IdtuovnVm4hOaFF8xXDU7Wn5b4RGf5ig3BC2Bi%2FDobyDcWovJXvBig3&X-Amz-Signature=36b23945cdc0acf1e5489859cd558417ea06e4ab097b07d5ba34d15350e5bdb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QXKUUQN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FO02QF%2FHEqIhJ5Jwf1iDP9F8hJz9em0%2FyTRAp0pjSNwIgUFgPldaAzmIyw2Q1s9lsF3svV7vRusnRK8WkAkp3mLEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa1xejnr2YOPTrMOSrcA%2BfUK6q85ljBI1Cjaw%2BcM2%2Bi%2FkNkZI14nSE9MFNhD4A56BLeFdYczn5q2xjaVamqS7fQzgbqAYWSjJqpz96DxT3E8R1mOSGgKxCRU3l7ZoVMkfV7DaiUHb3bxDwCLD5iKd4d3rl56BWb8WJd5VEYsXf7wJeAL0z0mTfdApkJZDrMnBtzlbzV0sjAtBKcXvcfNjIBdOdcdhjbWItZV9CylAA4UlfRgf2JwnI1IL6JMZ1LeexeTRVvvYCrNxJH1Ko1PhWtx95l0Vvls6RX50phiCks77TRh0S%2F9vXW5gUf49OSCFIgGaBvn%2FCXc6fFEhHd6d1%2FRvMa2rI69%2BV7iL3%2F5BZOE0bSuFCfKSbJ3UrdJ3D48vRnmK6SphpQUAubFszLkdjQjLG8PaEzuHliwrmHV4l3Espg0ZHxPs0tSWdQdPzapdJpdO9TVgdOSn46NVd7Dpz6aXI%2FMN60d0hwtiSag%2BMgkzi%2B%2F8Rt3%2Fjc51zO%2BCoVHxsK0WgMIlHG3W%2BT9yFm8k39GzXktdSHn73YJSKtnZXqMpSj1rO8R%2Bqj6eN5Q1LIhIweK6OCUagZihOGd1wWPu7vgAwf6dAAgsU6tRqLTn8WOzBHG21%2BCpeiCaKnfkvyN%2FERdyx2rYhLNjHZMMzvr8QGOqUB288tttR%2BnYodFIix2gOQniiNFwukoJdrUQ69nzw%2Fu6LrhPQyGkOf%2BMPGKb9MdZ%2Ft%2FxWAlCMCTM9RY71NdylKmR5R0SUpqrVfXPdso95zvAMCBrh08Z0OhiXeSMd%2BqRIGUnUczWcSiY6Em3iqgHoRzARNii8ofUpmQJyfSgQV2vPsjQWuG2rCZLgMN%2BXhmyWXhFf4awI1ayFFzjWWSpSOiL3HuWyc&X-Amz-Signature=6ae0df377c14a2eaba89c01aaff16f0add7fc44b0710f46743744899da5ee3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
