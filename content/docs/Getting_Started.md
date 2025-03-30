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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624VIIITN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICk8Kc%2FYVWLR5UdeJQDVg9YwoPyWt2wtsAe42TvMYb5NAiBMz4D20vwLUwZRnT008lX%2FcQ0aZjlnDYaAuskaTVVTayqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BR9bpriP09E6ZXlKtwDmOUWVamDAKkie5X9w2913idCjM21i%2BNycZE9%2BJ0H1Q9aVhAINvLWWX6yD08MPV2cie1X1Yqh6sVPNEM8k5bXsEKUOPIxsHpdWLpSCnCLFkAKCTX3ktYcoH%2FTY1OiBM8etcZ4HqxDJ9uWelO48aNu%2BuXldhUy2GBtAtMawsqsYPlEhxtPQGzBd%2FmdS3HnmgkadcDhU%2F46GyCtlrpZOXvUgSqRnkn43tNTFM26KqHtt6eZ6z42IpcOg%2F6MBY9mcdqEPQVEfCMZsZGtCQXJfXUgJXG%2FcRVjXvknKLzvZ%2Bt9vb526EcCHdHLqnPB%2BpybbhgzKRTxmlNTFSZ37AVQ6Lj1DMIj%2Bu4rpTWStj1qn0GZT%2FLuhfzrS2i%2FN5oiCH35gwBkTs5Xe03y7mp2mvRP7EDj2iK3fYN8FfZaW5nn4ySPypbGE71ENFI7HNl83yB%2BU6tcqF%2FuGeANQ2cLXS3NQqnkISLCPL80ALNZeYDTeniOLUh%2F8niSwQCQY1C%2B%2BDfFmbgMrxwY7OlPW%2BR9ietsvtI%2F1urqnim%2BfzPnsZYmTmsXQ5Zvpk54f2NDSPrPk8b9bbjE9ueU6brhDLdn2hkOwAGtCZwf2FxBqAXAXSMAkhnVtVZu6jmpUMEVJ7y3Fwsw2%2B%2BjvwY6pgF8DPtwOEsbyCSKs0kksajXjdTaMBSXwm6GOlewGl1xRbRBwaZQN5JWO1JmozqRnsmWpiocfOGVEQtym4Yr0Ux7qpRfhBTf1npiGy%2B5zpHr7iokQU7mz5jQ6A4D2fjFILZzZ1rP16m3q3tDiOH4WDqjvQYYBf%2FjR7nEbW76%2BO12p6B4AhYKTTOk8E7QHSHv%2FeyHtkShyv2qCgGtnDtwewYzU58hXZgE&X-Amz-Signature=fdca9004a10c15758715579b72f318e7fc6f83ded2b642ced3bbd40b92f5fea3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624VIIITN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICk8Kc%2FYVWLR5UdeJQDVg9YwoPyWt2wtsAe42TvMYb5NAiBMz4D20vwLUwZRnT008lX%2FcQ0aZjlnDYaAuskaTVVTayqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BR9bpriP09E6ZXlKtwDmOUWVamDAKkie5X9w2913idCjM21i%2BNycZE9%2BJ0H1Q9aVhAINvLWWX6yD08MPV2cie1X1Yqh6sVPNEM8k5bXsEKUOPIxsHpdWLpSCnCLFkAKCTX3ktYcoH%2FTY1OiBM8etcZ4HqxDJ9uWelO48aNu%2BuXldhUy2GBtAtMawsqsYPlEhxtPQGzBd%2FmdS3HnmgkadcDhU%2F46GyCtlrpZOXvUgSqRnkn43tNTFM26KqHtt6eZ6z42IpcOg%2F6MBY9mcdqEPQVEfCMZsZGtCQXJfXUgJXG%2FcRVjXvknKLzvZ%2Bt9vb526EcCHdHLqnPB%2BpybbhgzKRTxmlNTFSZ37AVQ6Lj1DMIj%2Bu4rpTWStj1qn0GZT%2FLuhfzrS2i%2FN5oiCH35gwBkTs5Xe03y7mp2mvRP7EDj2iK3fYN8FfZaW5nn4ySPypbGE71ENFI7HNl83yB%2BU6tcqF%2FuGeANQ2cLXS3NQqnkISLCPL80ALNZeYDTeniOLUh%2F8niSwQCQY1C%2B%2BDfFmbgMrxwY7OlPW%2BR9ietsvtI%2F1urqnim%2BfzPnsZYmTmsXQ5Zvpk54f2NDSPrPk8b9bbjE9ueU6brhDLdn2hkOwAGtCZwf2FxBqAXAXSMAkhnVtVZu6jmpUMEVJ7y3Fwsw2%2B%2BjvwY6pgF8DPtwOEsbyCSKs0kksajXjdTaMBSXwm6GOlewGl1xRbRBwaZQN5JWO1JmozqRnsmWpiocfOGVEQtym4Yr0Ux7qpRfhBTf1npiGy%2B5zpHr7iokQU7mz5jQ6A4D2fjFILZzZ1rP16m3q3tDiOH4WDqjvQYYBf%2FjR7nEbW76%2BO12p6B4AhYKTTOk8E7QHSHv%2FeyHtkShyv2qCgGtnDtwewYzU58hXZgE&X-Amz-Signature=2c5652a35d2d2df09f35c90fbaec0b8122a90f970fc0d88bee0acd45b5a54cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EO4CDKD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIH450dE%2BSMbnczNAEhCEkdL41VAbRHIfdxKE5QUVd8XnAiEAr6XUdIoOCE7OoSa2m%2BfCpmEtDR4hYSGX7t2d%2FHJvG2kqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSaSKNb0o1P36ztKSrcAyWPxmVbvS2nxoLhSRI3Ix6Du7KfefkW1v2XOKx0LGGBkCZ3U1zCOWV5J2g4cWYX%2FtGW%2BClRC%2FZP5EhLYE9fukQza0xAdvtv0a48d7EQodbk%2B7z3ejWqspRTnMjVbHpvXgNeG64HIpr1VlAdCMZMfCakaUjdoFWyMq5Fv2Zz%2FqQZuWGeEIuMqkVfVjogRy8HhWnURxli580LntnyA9y4cbl%2B4ukuFcMS10JnlwLyihq9TQrEDvdHPdl%2FYIOMXB5iu7Iv%2B88gjWoo3Wz4nt35K1pg8Y%2BJv083VmTyN9VHt3tzqmGlo3ZbcjuLgPjdi4WHjxSjGzKXNZfYvTHWrHShy5sENGNcbgqJdsE1BLYfCEQnjzXdnxbY6Tw%2BgZRISTEqrl9Ygdg%2FglZKAewB69BfeHytUoEujtjPF4QiEpoiE3dMW%2F3lOtbfttk0typGBqnqbU2JgaqqdW5pC8%2BS4CLtSWRfAXIfYrywaSTbQW8xs%2Fcp7kgimaTgu2SmrKegXxszkcNtYpicgxLr%2Bc8SPj34w1o4ZvVHJ8dTctCcN3Rr7ho%2BUrZs%2FOQVmKXpXVNOafl8QBKrOlQDrB%2FNjLCDjyvVpskswn%2Fzlqcr%2BYBE8h9bFMvPITa%2FxAeWZ6kpbvzkMNrvo78GOqUB0L%2Fu68N9vm0P29S7PJ3AMXYRqGpNW5HHpfQWGeZyl7QczGr%2BIKS2%2FwTZHV5F6uw2m2%2FHr3cABGWCc2zdbY1HBr5y7Ph%2BOfONKdYPCbHk6LMNyL2hXbBkhtJDY4O6lFy%2B%2BuAVzMVo5VcGaB1kZlC1dbxscCPo8EdIlTr2IhUT4o5aLfM2Hu0XJnNQROSG9AqG%2BB7LaTUhW1dVETFgHtH6smdlq1dt&X-Amz-Signature=5f53aa7bb8bf6f485452f5fc511fe488bec6f8703f967c5097e8f8708b917cae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XFMUEK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDyVS6apmNBYC5ATD%2BUWBj1cvKiB8D%2FqaEsY0Bb2XwzhwIgROoyvJRnU%2FOyGp2haRwJMOHIRmERJFxNrc7udGXkIHoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKKztY2tBgEqK4bYyrcA%2Bpgr9qaLChjDCjS7UpKdFaTPnI034aZKJw8YpoBpK%2F6ig83krXby%2B9BRpv2DAkKVfg6oHzIutbjwavyBhS7mCFEeAPATl4GkK2QYxPi3u%2BuhRUDagrHtBeI36yKvarG%2FH%2FoT2aLyKtaQCDXG1oz7vbrAMz%2BQcFjj3uPfIABB2k2pdNlR1d6xSVoHmkjLVGVRHZCXIJ2L7kieaJjdBoEVcy4vWbTlCaWZ7JUMk3gG1UNAQlCKXpiHW8sVXG14lfDE8rsZTl6HsmkB5kkRJI270u8XEeXdjOGdpRcVOdXaDb%2F26vtSWpW870Uoi%2B0kYfwp2yGmThGJ54I07CE5N1cbpedShcV6QLCodVRXJraJRV2QhmsRFoxHXXx9OLQkGNFPPxRP9PbiTwfm4dyL%2B2uUHh3PUpTRu5dnBc6EzfYeG05pAj83spzqv5rZ40P4YIOOjB6iVzG1D%2FoQjQ4wZW2hHKj6BNpq3LUqybZVB1BAtpbiKuA9I30drTgMb36X31ayzARIXsF1N%2FZq%2FYuZvIq0bDy%2FAm7wYx5f3pLnYj23NIAvkGSYtEgAFCbXwo%2FSZAGaecbCVWdJDqUfkPXqOafsiTmgyNnvQB6uqpyKITUryxICJBXLuY3CQQTQHmwMLWJpL8GOqUBB2sQlDc%2FLkjP%2BMIwZ%2FZ2EhuMSNdmYpSYGCIZ1K4nzUQALPye3rrMxDnzP1xEzP49o6wy4arWxI5oJXXEOLYXLUZIO142pRvfwoUbVweP6pr2fenzD9CF6uMt%2Bu0fQvVrledwG7P2GlCBo%2FqaGPAYgFFfZKdQxwNkjy2TTChCl%2FvSkz1hSYi033XnT%2BNNVpbB6RzA6ALe7u030hqTwdY71IA26qrR&X-Amz-Signature=3aa642b89b7196fc4921236b13e2d9df68a6cba5ffe3a9ece908f194a66dda48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624VIIITN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICk8Kc%2FYVWLR5UdeJQDVg9YwoPyWt2wtsAe42TvMYb5NAiBMz4D20vwLUwZRnT008lX%2FcQ0aZjlnDYaAuskaTVVTayqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BR9bpriP09E6ZXlKtwDmOUWVamDAKkie5X9w2913idCjM21i%2BNycZE9%2BJ0H1Q9aVhAINvLWWX6yD08MPV2cie1X1Yqh6sVPNEM8k5bXsEKUOPIxsHpdWLpSCnCLFkAKCTX3ktYcoH%2FTY1OiBM8etcZ4HqxDJ9uWelO48aNu%2BuXldhUy2GBtAtMawsqsYPlEhxtPQGzBd%2FmdS3HnmgkadcDhU%2F46GyCtlrpZOXvUgSqRnkn43tNTFM26KqHtt6eZ6z42IpcOg%2F6MBY9mcdqEPQVEfCMZsZGtCQXJfXUgJXG%2FcRVjXvknKLzvZ%2Bt9vb526EcCHdHLqnPB%2BpybbhgzKRTxmlNTFSZ37AVQ6Lj1DMIj%2Bu4rpTWStj1qn0GZT%2FLuhfzrS2i%2FN5oiCH35gwBkTs5Xe03y7mp2mvRP7EDj2iK3fYN8FfZaW5nn4ySPypbGE71ENFI7HNl83yB%2BU6tcqF%2FuGeANQ2cLXS3NQqnkISLCPL80ALNZeYDTeniOLUh%2F8niSwQCQY1C%2B%2BDfFmbgMrxwY7OlPW%2BR9ietsvtI%2F1urqnim%2BfzPnsZYmTmsXQ5Zvpk54f2NDSPrPk8b9bbjE9ueU6brhDLdn2hkOwAGtCZwf2FxBqAXAXSMAkhnVtVZu6jmpUMEVJ7y3Fwsw2%2B%2BjvwY6pgF8DPtwOEsbyCSKs0kksajXjdTaMBSXwm6GOlewGl1xRbRBwaZQN5JWO1JmozqRnsmWpiocfOGVEQtym4Yr0Ux7qpRfhBTf1npiGy%2B5zpHr7iokQU7mz5jQ6A4D2fjFILZzZ1rP16m3q3tDiOH4WDqjvQYYBf%2FjR7nEbW76%2BO12p6B4AhYKTTOk8E7QHSHv%2FeyHtkShyv2qCgGtnDtwewYzU58hXZgE&X-Amz-Signature=3b5878932b163c123f7a644e4a5191542a3b58f6398391714d5492062baa235a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
