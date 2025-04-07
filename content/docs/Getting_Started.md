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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGCD76A%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWJh%2FRGzbgca4kFbxjfkZxOCQ6d9QTEFyRGlbLepMxeQIgBhmi%2BDzMBfWyf3bmsgRVUtgWpf7K%2BUdlFl2XqjvkSj8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCrhGnBcexq0nYNBKSrcA3iOkWk%2BJrrWSdjKHz9u7G4oKiWDkEfTAaF5ikOckZGWWy%2FE7Hw3GAxiTyFnQyDWiWEbeqtPc3dFF%2BzOIv25zmi5Y%2ByZjIFepkEXjVm6BkGv799JTxP0nnCMhBeD7rRIxWC8eM02I4sfDDbgaAp%2Fa0YI%2FBEzzTgGx2t0rBAHWf1eiOdnrpKFUMXuijSx0VypjjR5AzAVJnfMYBQD8GLqYcfwcQ6E62bBM8kzvQtCoxl0T0D%2BE4V7XAWUd4MkKuEDCwBZ2T%2FJusVGeHP83ydjPO9QY1OHtVZjjF6aj9PVQWNNlJFcg9GG%2F11kEyu7OY9LjjnJbf%2Bu3ofozff1kTjHutiOKDF7GqWenFp9hs%2Ba8QqGtSbM69APw0PTroSbVAQb6IDpPlvsnPl3hWj%2BPZJhAUwGXvIeYQf49zY1kG0hqRaLycqQ6kal5AnRT1NO%2FWqzYL7S4i6Sfnofk99SE9P83TgcvRdRqQELj4t4spmnyYSkF5f%2FcbT9W6bUxrkBpm8nEc0iqyf8GigWcdj0NmDd5g7Z9D2qC5O%2BF3qmuLTXZKjL3HEmitE1lxDPONM8QA68GEojLTiBd1y88rPDnBvxlnPEFxbO4Vpho9si7VHU56zRsibk%2FDMKB3%2FaJoDsMMmj0L8GOqUBtYChLIEy2VwY%2BaI3xFAe5vBjB2rOys5w5xCVsb4XyahDzjyh%2FC0%2FrkSiMtphZGAeblwfIm1cIxcERCjPsNNjClw3nJPD9qoOIpZXlfP12LVIiIiGBUD1YsO6EHo%2BOfdfA9SUYY4wVeH5YlGovT1fM48%2FJY7B%2BUDmGOMEMs7bf3mGWSU2l%2BD16pFtuNOIiajNKzU8%2BVgd5DQ7EBYEEgjtc%2FnVZSdn&X-Amz-Signature=d5588868b398cabd74f7e267f8d10d21077e25375ed0ea283191c952922a874b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGCD76A%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWJh%2FRGzbgca4kFbxjfkZxOCQ6d9QTEFyRGlbLepMxeQIgBhmi%2BDzMBfWyf3bmsgRVUtgWpf7K%2BUdlFl2XqjvkSj8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCrhGnBcexq0nYNBKSrcA3iOkWk%2BJrrWSdjKHz9u7G4oKiWDkEfTAaF5ikOckZGWWy%2FE7Hw3GAxiTyFnQyDWiWEbeqtPc3dFF%2BzOIv25zmi5Y%2ByZjIFepkEXjVm6BkGv799JTxP0nnCMhBeD7rRIxWC8eM02I4sfDDbgaAp%2Fa0YI%2FBEzzTgGx2t0rBAHWf1eiOdnrpKFUMXuijSx0VypjjR5AzAVJnfMYBQD8GLqYcfwcQ6E62bBM8kzvQtCoxl0T0D%2BE4V7XAWUd4MkKuEDCwBZ2T%2FJusVGeHP83ydjPO9QY1OHtVZjjF6aj9PVQWNNlJFcg9GG%2F11kEyu7OY9LjjnJbf%2Bu3ofozff1kTjHutiOKDF7GqWenFp9hs%2Ba8QqGtSbM69APw0PTroSbVAQb6IDpPlvsnPl3hWj%2BPZJhAUwGXvIeYQf49zY1kG0hqRaLycqQ6kal5AnRT1NO%2FWqzYL7S4i6Sfnofk99SE9P83TgcvRdRqQELj4t4spmnyYSkF5f%2FcbT9W6bUxrkBpm8nEc0iqyf8GigWcdj0NmDd5g7Z9D2qC5O%2BF3qmuLTXZKjL3HEmitE1lxDPONM8QA68GEojLTiBd1y88rPDnBvxlnPEFxbO4Vpho9si7VHU56zRsibk%2FDMKB3%2FaJoDsMMmj0L8GOqUBtYChLIEy2VwY%2BaI3xFAe5vBjB2rOys5w5xCVsb4XyahDzjyh%2FC0%2FrkSiMtphZGAeblwfIm1cIxcERCjPsNNjClw3nJPD9qoOIpZXlfP12LVIiIiGBUD1YsO6EHo%2BOfdfA9SUYY4wVeH5YlGovT1fM48%2FJY7B%2BUDmGOMEMs7bf3mGWSU2l%2BD16pFtuNOIiajNKzU8%2BVgd5DQ7EBYEEgjtc%2FnVZSdn&X-Amz-Signature=e0fc8a89021e61f5224a3c304746be9a6253f7ad917cb600ed332107a84054a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGWU5CY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvoAKHkohQ0nSxQMR7cMD6aLzAJBui1B5fCgWRNSGQmAiEA8af3sySNfdybBVZAtl7KXHrlPfnlMhNATKEJWFU26kwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOqMvba8ZeOnsv1BDyrcA%2BNepxW%2FS9Kx5dFYYTO6iraQQEV9QvVPisvqMCEAFjVX7On6V1Zz1vKO9VMScynf%2FBpV60kZ2SJjhsZK%2BUyonaIMIHX1LbQz3viWLw6KvQYr1DVqRZ0Af8bt%2B8w6SILHfkRGXNDLUNFG2Q015V1jwYS%2F%2Byet8paflVqID9tKjD6u9OYygR7zjsc6m3VD%2BcMMTdmtCWbvx4KFSD2jr%2FnUaEluE9ihQoVgZTZkn9ep%2F1CNxPk%2F8DJcsoLaW%2Fd25vtSRugXhRmDIbbjUrFrATdi6phtsvux0trLb0%2FgMy%2B2ZyTsGvCwqiyORq4woqXbn4Z9Kq8pF9CudYx7WRPB10Bxgm5BAwFV%2BEMa1xgXE1pdYWOjibqileTUP6sPR11UoCC0LIT0ZdVe%2BHOdTf3JPwEHL777zy1FRBFMKsfqA%2BwMJ2cS7jo6a9DJUHs26Fzo9wM8R2f%2FiWcONc0CRiEoPiaOzztpwZ2Pb3StZaCX6rcFMw08tTMW1MTUAEA4N6PHe8NQlgbVuEonxCGcrZ6wf50OPoXMDrnwl5CJoECDBzi0wYHvAVWSEuK96tRJHRrCOD1Nkeb96Ii3QEMd9ai%2FJBu5ZjdReJH4GmTzKXZI5hdatSFuVjQzECmQsWMdzJv5MMSj0L8GOqUB1HVLyj1%2F1HJ1f6CZkUIaIDSVBHpYmADnfE%2BOY3e%2BWpllKSNTOqxHhfE2BBFJtcHLcDZz%2F0lC9oq48sgruYTWcMV8RTU6s2JHBkL9o3O5AdwEu3nZFarovGkh2NO8Vb4H2K2DXHpafaGQREOszRl0R54cIm4rbxozsmBVJ0fJQsn99wWH%2B2qZ7R5SLYSecK9RNKmiFxgNro%2FuSeVN8nvptpq90oXI&X-Amz-Signature=ddc9a19081c86e0c5a21eb2e225fe4e503256277a7fda5d63c4c3e5ef9eed2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYSB2ONG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEutkn9nb46bS1kfM2PZ3%2FbtkojUpmOj%2FCC%2FYYC7%2B7TRAiEA8u0NtN5z4H4Rg9TBMiC%2B2%2F%2BXvetJJenLqG56xxe9Vesq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEQbwEppmcmEbKoNrCrcA5Vub3rzM1sBLGxgPhY3GYAJF9n%2B%2FKNQuclQGrUj3TJFeIoEvq2u0j4MH1uvHON8EcaIAzggLIBa4DhrHyiWD2PALV%2FpQNhRM8YHBkBPAN8tKQNECmA2Qq%2BZM7lu4BnCGgyYbqUINHYvi5V1ukAIf10eghdN6Sdn82R%2BCHSkH50%2BjxPPpHfdEeEbQywz%2FCrkSohhae8Tl71ylVmEsUcx9mMfsI%2FEos%2BpU1aQpeaBiiVfY1WTcAsrJyyrc4mzxZxqwctlzWaa3bzFjCySThXIjdc4n1rHvJnPfJkEdyh6Cf8HOOW4DvEYXMotjoTf8nU55MQjfMLWQ4lnG3zrYzGVlbr%2Bb3rTdx3Aeq6RiskwP3nnJENrLjVM8MQE%2FNjUJw%2FNLSs%2BD%2BRdeSiUfG8up5Ms5Fj58CBtWxwp0Okh8q423V%2FIMuKAWGQQtjuCJcv25gmyZy91aXMOh0Y0UOsTGK%2BMw2t9NA6Fd4wSVFLD2jTsUg6Yq5fgDQeTJHtEKZEo40FCf3q23E8XMdp1oeJ8EN8mllX5KgdbS2uUO8ebCJ1%2BFtbsOQ2LUhImzgWvZcZQSz4mYit08S0Qt%2BTX40kORQzubQqWTdiuTIMGLSoqPCqIDK9eFqBBxLX0XX0%2B64s4MKGk0L8GOqUBjsqi13yUuqlzSADhxF05o2WEh1NFFRtbHeK8QsSOXWNlNm0FwX%2Bg2yFNJPkbE2z611IfjjJexVECnk7KGvP34H8PNTtVjYpGlMiVjY35POsukAQwfr8vPxmOMkF4sdiPSTgHVYlcw7xziISn3ZnXrHcKvk6z5GxmpZorBFrcYWANzz7FYyyvbhSQGNjOGGzdMS4CZc2urpPJp%2BUXCkBRUCZ6qE%2BA&X-Amz-Signature=cdab9e3f2c128eb7fed13547a1feb9b760392213a56c7d79cd3cf8a82ee38ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGCD76A%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWJh%2FRGzbgca4kFbxjfkZxOCQ6d9QTEFyRGlbLepMxeQIgBhmi%2BDzMBfWyf3bmsgRVUtgWpf7K%2BUdlFl2XqjvkSj8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCrhGnBcexq0nYNBKSrcA3iOkWk%2BJrrWSdjKHz9u7G4oKiWDkEfTAaF5ikOckZGWWy%2FE7Hw3GAxiTyFnQyDWiWEbeqtPc3dFF%2BzOIv25zmi5Y%2ByZjIFepkEXjVm6BkGv799JTxP0nnCMhBeD7rRIxWC8eM02I4sfDDbgaAp%2Fa0YI%2FBEzzTgGx2t0rBAHWf1eiOdnrpKFUMXuijSx0VypjjR5AzAVJnfMYBQD8GLqYcfwcQ6E62bBM8kzvQtCoxl0T0D%2BE4V7XAWUd4MkKuEDCwBZ2T%2FJusVGeHP83ydjPO9QY1OHtVZjjF6aj9PVQWNNlJFcg9GG%2F11kEyu7OY9LjjnJbf%2Bu3ofozff1kTjHutiOKDF7GqWenFp9hs%2Ba8QqGtSbM69APw0PTroSbVAQb6IDpPlvsnPl3hWj%2BPZJhAUwGXvIeYQf49zY1kG0hqRaLycqQ6kal5AnRT1NO%2FWqzYL7S4i6Sfnofk99SE9P83TgcvRdRqQELj4t4spmnyYSkF5f%2FcbT9W6bUxrkBpm8nEc0iqyf8GigWcdj0NmDd5g7Z9D2qC5O%2BF3qmuLTXZKjL3HEmitE1lxDPONM8QA68GEojLTiBd1y88rPDnBvxlnPEFxbO4Vpho9si7VHU56zRsibk%2FDMKB3%2FaJoDsMMmj0L8GOqUBtYChLIEy2VwY%2BaI3xFAe5vBjB2rOys5w5xCVsb4XyahDzjyh%2FC0%2FrkSiMtphZGAeblwfIm1cIxcERCjPsNNjClw3nJPD9qoOIpZXlfP12LVIiIiGBUD1YsO6EHo%2BOfdfA9SUYY4wVeH5YlGovT1fM48%2FJY7B%2BUDmGOMEMs7bf3mGWSU2l%2BD16pFtuNOIiajNKzU8%2BVgd5DQ7EBYEEgjtc%2FnVZSdn&X-Amz-Signature=5dc84dbd5e72cb85be62dbd10d4a58cf8dd3d992d9f52e294ef64e4d5e356e16&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
