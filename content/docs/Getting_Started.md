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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAE5QQ5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93gEpDkqsdeoQvx2LarTHdLACzgpmSIH%2F4kRDqAOY5gIhAMvhX0FnBSZ1v2AmV%2FiZolBL4FCZHqrr5l1%2BR%2BNfEmXmKv8DCB0QABoMNjM3NDIzMTgzODA1Igzuvcs363uRLP3uDVMq3AOkRQwo5EzPah1%2B302DTC305MeUbkVw8a1xVXPofBhorfwrYf8jCOr1WvoPvJjqmlbtWebx9gBc03fwg3xd7BY%2F1WzwaTdFH%2BKBG7ZQYJ73EG471Lk3InKjKQbfaEhhSZEBmHxu7aK8Es8xohAbBjp6lxfICrAqlKyRrVZZamAwXliuInV%2B8WL8zcBNQKZEw70%2BnRaM6QrXYG8Zz2fPU7kA3PG3CfOpZpDdMq1kX5HKt5qp9WsxsLa5hBrFQMd0via7On%2BmnNxJzEcFLFWv6GHu7ry1SphVHwGxJi2ApZ25vKMCVAlOvIYuLsYszG%2BqjoD9tccNXQ921q3DHhdlcg2NkAsVA2Vii896%2B3lCnE5GRlIKvM7BlmS9S5EsoIPECMrrDU1CJhvy6dPrGAjMAIHnInLrGmAiw841pbopyvcnTcBUmBOXRjpLUtshu%2Bf838nyt6%2FgPCm6BcorByMaBdbRQs6ebhFJn7eaVBIQQo34asakMMBgcqQQGSJHwEfxwrQWAgbh%2FnKv%2FOYEDf%2Bt2FU9rBU%2FNEd1AqVL%2BtIrjcTBZtnxZkEnUmUL5Io8Pqmuo932Q15plS0X58MPgqDJdAzJf4NsbEqkOrxZlssyvWgUYISSGpEiV5%2F4V8hEOTDcl4y%2FBjqkAau%2BpttsPTfMkz%2BRv8wXuwvhB%2FbMR01wWlfijCfCUHE3hJANLqMd%2BIX%2BC5lvZyjJ2a1LZArHEVgQB%2FZaCQ4WyQj4jzqG9VZmfhKUqqw7st52hWl8OAjVa0cpT1wCrQraXIxABXDuCn4a5CKG5K%2B2SZSUoiKA%2BXC3wG79Ul%2FI0KIZ%2BdNBSJr6xa5Ni0oiAG2pAUVlWl37Bi4kuhyfKK0UAkAx7lTw&X-Amz-Signature=45662c01357f5c868b0a0b459f28d217556672a6449f77647dae5c16be85bcea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAE5QQ5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93gEpDkqsdeoQvx2LarTHdLACzgpmSIH%2F4kRDqAOY5gIhAMvhX0FnBSZ1v2AmV%2FiZolBL4FCZHqrr5l1%2BR%2BNfEmXmKv8DCB0QABoMNjM3NDIzMTgzODA1Igzuvcs363uRLP3uDVMq3AOkRQwo5EzPah1%2B302DTC305MeUbkVw8a1xVXPofBhorfwrYf8jCOr1WvoPvJjqmlbtWebx9gBc03fwg3xd7BY%2F1WzwaTdFH%2BKBG7ZQYJ73EG471Lk3InKjKQbfaEhhSZEBmHxu7aK8Es8xohAbBjp6lxfICrAqlKyRrVZZamAwXliuInV%2B8WL8zcBNQKZEw70%2BnRaM6QrXYG8Zz2fPU7kA3PG3CfOpZpDdMq1kX5HKt5qp9WsxsLa5hBrFQMd0via7On%2BmnNxJzEcFLFWv6GHu7ry1SphVHwGxJi2ApZ25vKMCVAlOvIYuLsYszG%2BqjoD9tccNXQ921q3DHhdlcg2NkAsVA2Vii896%2B3lCnE5GRlIKvM7BlmS9S5EsoIPECMrrDU1CJhvy6dPrGAjMAIHnInLrGmAiw841pbopyvcnTcBUmBOXRjpLUtshu%2Bf838nyt6%2FgPCm6BcorByMaBdbRQs6ebhFJn7eaVBIQQo34asakMMBgcqQQGSJHwEfxwrQWAgbh%2FnKv%2FOYEDf%2Bt2FU9rBU%2FNEd1AqVL%2BtIrjcTBZtnxZkEnUmUL5Io8Pqmuo932Q15plS0X58MPgqDJdAzJf4NsbEqkOrxZlssyvWgUYISSGpEiV5%2F4V8hEOTDcl4y%2FBjqkAau%2BpttsPTfMkz%2BRv8wXuwvhB%2FbMR01wWlfijCfCUHE3hJANLqMd%2BIX%2BC5lvZyjJ2a1LZArHEVgQB%2FZaCQ4WyQj4jzqG9VZmfhKUqqw7st52hWl8OAjVa0cpT1wCrQraXIxABXDuCn4a5CKG5K%2B2SZSUoiKA%2BXC3wG79Ul%2FI0KIZ%2BdNBSJr6xa5Ni0oiAG2pAUVlWl37Bi4kuhyfKK0UAkAx7lTw&X-Amz-Signature=a84e615d68a38e8d7d3215ef056f673aaf0ac34f9e7042216036476d2b341789&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JOS4ZB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5QFPwPvhwCkpUpw%2F0v3p8m5qxAXOhmtu2BIFKDJWJrAiBqlagF6CDjaiEyjlZV54CLasdO60izORjW0GEFh0fbOSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMlJokFr1eE6Uz%2FlAVKtwDdYMS8WN%2FwpDKhfMjKESO%2B%2FeNTzQiTbijC8VJqyw1Nfh2Rp7M4FG4XHMJLL35KGuWZFqsoZ7IIulHkqbQ%2F3AWB7SiyaacTxW81cJTgCybosYHWUVxzarZmmY5CApLKslu0a%2BIxVbGVYCOgwt1dgITLqQ9Rd9gd%2BhS%2F4jqgBNTTf6EI2CqO9GC5fqBArmSN4%2FxG29uXT4bZbd1QmjguxShlT4jsMC63T5vDRvV%2FhyZLqiNxUFLZp5wKq2qoQIPhy3Pxn7Q19%2BniqgtM8L8GpE9x1VJ6lo%2BHohBLmjHutLo3DesOJmbfogSa7%2BsLyR%2F4U3uMktVJ%2BE5IAd%2FdVO7foN4fn%2B1nfCWcqN9ZpTSZq3xEivqL90zFPwKiN6r89z1mougc5X1veymqZPJO1o%2Bac8Bdh60166cD1jCBtzjGCb1%2BRddvYpu1QPgQX4f10N7lAonHaz9VxnMlTozOxk6YU6unsJNaLWiPa9Q9LZfP4LRXaKE80oIkzZ8VSL44pqO0GaxssQxgfn8u3xsixxu20U%2BN3qzHyOfEd2ZvhUh4msrWpaEv%2FdQjHT1BZF02K0J3m5im9%2BgKy4obIrJEViC7U9HVdcPeFTSvxKH5S1qq4tigHEkkg1cGzWbjAK9J38w6peMvwY6pgH4J4AFd19qUfMJ8ZseTR%2FIOVsPRg1BjPYQByb4wkR37ZApB7zhfc43ikLESV%2B8qh219m%2FS8DV7v4bRrdJvo87WT%2FPuUFLli4d9uq%2Fy8ZlmJVeWpJnl2oS8PwUk6QE6RamuGW88wKHqt94ynElkYEoX14fvmW3PkYjxOKzQoNz5wdLdGYF8rOHtk93k9svZCY0y375wL1lHgr39ALf5nx0PwhpZ4jRY&X-Amz-Signature=271c591847e912ab8040f656bbe3031c1dbb6099ca1a405df5b03dfb705e0c13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGHVC5L5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2DojjqJYuiDrjxiFVXSUQSBb61T3PLaQaHv1gkHQKgAiAWq77TSeK0MznKUljfOxEVQNjmDbhPcvYjd%2FkshLfArCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM5pK%2Fu2xSQB%2F4kv4GKtwDeXVYiPxTKnoX%2FXva%2BfJoz%2BQeXYiUHCk4TLPq0uzJIigaWUTs9knAYRB29YCPCEnR3ijNUkmjlP3JTLAOyx5phGbfka1Alm9TyqCN%2B4xXoZfpXKVu4i5O59WLFmi4uBu3BOYmvMaXCxjNWGa%2FTQ%2FtZFDKdouE3A7OE2tarH5IdsNV32y2lYNX0WqmFS3gUTzeoT0psZKz9IrLUfkuPxVDFFDjM%2B6kYjPhcco6AKY%2FFAhdv9MwbUbHwtW7Srx73SNigErVvb6iurahpSi2x46cc0UKB%2FHhywMV%2FrTbpjeTy7ANcKZa6B78nAXDlk0LANKLjG7ux4Gd4F6pZR%2Fe80DWZBhtHO8pe50NVtl%2BfIK0LbtAahIBp09yEUmenD1DsnTBI3rLBmj4VxXzuiUyK3RR2YF%2BJ1PeM5hPS1mal8h%2FOXqqYJK0kqL49o8fvoeNMC0%2BYW%2BvMcZOBfHaWztubGBsQp0pAlw6hEN2%2B6x1q%2Fb%2FcqdUawtY3L9ZutdSFYbSmtEHnAm3W7gLw4yGubMPH5MrK1u9faHzcODI4SkZ76%2BE67stq%2BBffIqmT5jXLOvDEDSnCQy7mNPF8Y74odXAdLTeAJ3iokuJ0Xkwnc9N1Cwed2md%2F%2BjRyfJTlI9%2BgQAw6peMvwY6pgHD3sDddvOcnjYPFkdVKNyPml%2Bq2c2%2F8G5sv8JmmKMVefLw548ceyKCga2MuCk793GbLBe1pNqBA64YnN0SfsKrNmoye4ceKUIrVgK6dNxPpctrZhOm45VlxMZanQsdK8rXSI5907fF1w6hQnzTEH4DRh2R1I46ztnofHUOKQPRlyfLZe62cKAdBHMImajhV4qBKIRRjfuqZD9GMEMMs5SSJtllQPC%2B&X-Amz-Signature=96e7642e885d9b7721af3d33aebcc24ab865c761d77885d9e4472736929d6d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAE5QQ5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93gEpDkqsdeoQvx2LarTHdLACzgpmSIH%2F4kRDqAOY5gIhAMvhX0FnBSZ1v2AmV%2FiZolBL4FCZHqrr5l1%2BR%2BNfEmXmKv8DCB0QABoMNjM3NDIzMTgzODA1Igzuvcs363uRLP3uDVMq3AOkRQwo5EzPah1%2B302DTC305MeUbkVw8a1xVXPofBhorfwrYf8jCOr1WvoPvJjqmlbtWebx9gBc03fwg3xd7BY%2F1WzwaTdFH%2BKBG7ZQYJ73EG471Lk3InKjKQbfaEhhSZEBmHxu7aK8Es8xohAbBjp6lxfICrAqlKyRrVZZamAwXliuInV%2B8WL8zcBNQKZEw70%2BnRaM6QrXYG8Zz2fPU7kA3PG3CfOpZpDdMq1kX5HKt5qp9WsxsLa5hBrFQMd0via7On%2BmnNxJzEcFLFWv6GHu7ry1SphVHwGxJi2ApZ25vKMCVAlOvIYuLsYszG%2BqjoD9tccNXQ921q3DHhdlcg2NkAsVA2Vii896%2B3lCnE5GRlIKvM7BlmS9S5EsoIPECMrrDU1CJhvy6dPrGAjMAIHnInLrGmAiw841pbopyvcnTcBUmBOXRjpLUtshu%2Bf838nyt6%2FgPCm6BcorByMaBdbRQs6ebhFJn7eaVBIQQo34asakMMBgcqQQGSJHwEfxwrQWAgbh%2FnKv%2FOYEDf%2Bt2FU9rBU%2FNEd1AqVL%2BtIrjcTBZtnxZkEnUmUL5Io8Pqmuo932Q15plS0X58MPgqDJdAzJf4NsbEqkOrxZlssyvWgUYISSGpEiV5%2F4V8hEOTDcl4y%2FBjqkAau%2BpttsPTfMkz%2BRv8wXuwvhB%2FbMR01wWlfijCfCUHE3hJANLqMd%2BIX%2BC5lvZyjJ2a1LZArHEVgQB%2FZaCQ4WyQj4jzqG9VZmfhKUqqw7st52hWl8OAjVa0cpT1wCrQraXIxABXDuCn4a5CKG5K%2B2SZSUoiKA%2BXC3wG79Ul%2FI0KIZ%2BdNBSJr6xa5Ni0oiAG2pAUVlWl37Bi4kuhyfKK0UAkAx7lTw&X-Amz-Signature=80577296c8b8a50384a77c18a474643ef9a47a535ee8a06d70262cfefb1f50d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
