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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TAIL65%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGt%2FGT6AynLr2%2BkanBGEnbUdDi666AJ9Bx5VRw%2Fw7bmUAiBK2QONl82G8m2JNg1bgVkyTrN6MvfN2LmAWkkxJtZSUSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYaU6Et%2BKDoX4i7wgKtwDtGLqaHn8ZyTIlW4LAKWG4KJFtQImJAuG9ZOeux4WVtT%2F8NxGGKz2KPGNyoTUzTVd3flFv%2FRwmjfhwASK4NyqRA1%2F05RDWpV00IjaVFaBMCtnZbIKKw5au30IXym3tfsH%2BVpWA%2FeD2dQ2POcB3Egy74W0wkBP%2Bf2QZe3X9GGU%2FqrTBVRSDt45HnlILbVwpIXsSsq5Agx98frAQWiiZn89vNXA4Hl8Os46tjWGL6Dtsxyb%2Bx%2BFGh4mhtWSPI%2FTS54W0bEB3iLqezcSsGbn4jrZvrA7XfUzcqYXQSQ8epELA3TTfKNXqIWvcWTxotEokaE4%2BCIpDbbbUjqx9pMZgXnciTuoiDXGdA5MVevdmQ1IbkIw4Aao%2Fsi6Eald0jD2IVhICmffEbARsoDZLuGN2ZK5hKJ7jU6grkrBcjPajXYTatWb2tUswTh2ZVPCN6e1wftbOrJbx6SZCEuHNL5oiMERGoBEtGxySZWUccuOnK7f5pZBexhOabtNkTLmiMXNg%2BVM72PeIrncluUBuisuCxBmfbGb563gJ%2F32hKIquzQtkIN5FLeywyRLgHAJtCuZci%2FK4R1fAJ3u0wXRHb2%2BeXr2J%2FDPh38oZMAmQ0qhf6bOsjvv%2FCWigH8usABzMwwwmb2zwgY6pgHPnA1Prs89OXXlFgRkxSM8A%2B3ADKyc3ZJvTVbQmyhvcIn%2BUrdVr72tjJvU4rlEWRPJxAOFL2P7gsVzJGjqTXKDxUNzSGu52HQckY%2B2w47h92p2kMLLTT5P0UclX3DyiM8h7eQNionA%2FqdHNBzf%2BMWi322YanEXchE0DKows8EXpjR02oduFWPGFrH0LrU%2F2AjQN16Wo%2BhNC3IILSuQOp%2FOMTcagmEW&X-Amz-Signature=b0f398d610873f17d7d5f68398f0fae4f532217d695e83795f066dea02d0884b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TAIL65%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGt%2FGT6AynLr2%2BkanBGEnbUdDi666AJ9Bx5VRw%2Fw7bmUAiBK2QONl82G8m2JNg1bgVkyTrN6MvfN2LmAWkkxJtZSUSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYaU6Et%2BKDoX4i7wgKtwDtGLqaHn8ZyTIlW4LAKWG4KJFtQImJAuG9ZOeux4WVtT%2F8NxGGKz2KPGNyoTUzTVd3flFv%2FRwmjfhwASK4NyqRA1%2F05RDWpV00IjaVFaBMCtnZbIKKw5au30IXym3tfsH%2BVpWA%2FeD2dQ2POcB3Egy74W0wkBP%2Bf2QZe3X9GGU%2FqrTBVRSDt45HnlILbVwpIXsSsq5Agx98frAQWiiZn89vNXA4Hl8Os46tjWGL6Dtsxyb%2Bx%2BFGh4mhtWSPI%2FTS54W0bEB3iLqezcSsGbn4jrZvrA7XfUzcqYXQSQ8epELA3TTfKNXqIWvcWTxotEokaE4%2BCIpDbbbUjqx9pMZgXnciTuoiDXGdA5MVevdmQ1IbkIw4Aao%2Fsi6Eald0jD2IVhICmffEbARsoDZLuGN2ZK5hKJ7jU6grkrBcjPajXYTatWb2tUswTh2ZVPCN6e1wftbOrJbx6SZCEuHNL5oiMERGoBEtGxySZWUccuOnK7f5pZBexhOabtNkTLmiMXNg%2BVM72PeIrncluUBuisuCxBmfbGb563gJ%2F32hKIquzQtkIN5FLeywyRLgHAJtCuZci%2FK4R1fAJ3u0wXRHb2%2BeXr2J%2FDPh38oZMAmQ0qhf6bOsjvv%2FCWigH8usABzMwwwmb2zwgY6pgHPnA1Prs89OXXlFgRkxSM8A%2B3ADKyc3ZJvTVbQmyhvcIn%2BUrdVr72tjJvU4rlEWRPJxAOFL2P7gsVzJGjqTXKDxUNzSGu52HQckY%2B2w47h92p2kMLLTT5P0UclX3DyiM8h7eQNionA%2FqdHNBzf%2BMWi322YanEXchE0DKows8EXpjR02oduFWPGFrH0LrU%2F2AjQN16Wo%2BhNC3IILSuQOp%2FOMTcagmEW&X-Amz-Signature=e1b3475cd0f3b9d9dfddda35d75fed4559a7e9c8eef4570477dc8821c48bf090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TAIL65%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGt%2FGT6AynLr2%2BkanBGEnbUdDi666AJ9Bx5VRw%2Fw7bmUAiBK2QONl82G8m2JNg1bgVkyTrN6MvfN2LmAWkkxJtZSUSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYaU6Et%2BKDoX4i7wgKtwDtGLqaHn8ZyTIlW4LAKWG4KJFtQImJAuG9ZOeux4WVtT%2F8NxGGKz2KPGNyoTUzTVd3flFv%2FRwmjfhwASK4NyqRA1%2F05RDWpV00IjaVFaBMCtnZbIKKw5au30IXym3tfsH%2BVpWA%2FeD2dQ2POcB3Egy74W0wkBP%2Bf2QZe3X9GGU%2FqrTBVRSDt45HnlILbVwpIXsSsq5Agx98frAQWiiZn89vNXA4Hl8Os46tjWGL6Dtsxyb%2Bx%2BFGh4mhtWSPI%2FTS54W0bEB3iLqezcSsGbn4jrZvrA7XfUzcqYXQSQ8epELA3TTfKNXqIWvcWTxotEokaE4%2BCIpDbbbUjqx9pMZgXnciTuoiDXGdA5MVevdmQ1IbkIw4Aao%2Fsi6Eald0jD2IVhICmffEbARsoDZLuGN2ZK5hKJ7jU6grkrBcjPajXYTatWb2tUswTh2ZVPCN6e1wftbOrJbx6SZCEuHNL5oiMERGoBEtGxySZWUccuOnK7f5pZBexhOabtNkTLmiMXNg%2BVM72PeIrncluUBuisuCxBmfbGb563gJ%2F32hKIquzQtkIN5FLeywyRLgHAJtCuZci%2FK4R1fAJ3u0wXRHb2%2BeXr2J%2FDPh38oZMAmQ0qhf6bOsjvv%2FCWigH8usABzMwwwmb2zwgY6pgHPnA1Prs89OXXlFgRkxSM8A%2B3ADKyc3ZJvTVbQmyhvcIn%2BUrdVr72tjJvU4rlEWRPJxAOFL2P7gsVzJGjqTXKDxUNzSGu52HQckY%2B2w47h92p2kMLLTT5P0UclX3DyiM8h7eQNionA%2FqdHNBzf%2BMWi322YanEXchE0DKows8EXpjR02oduFWPGFrH0LrU%2F2AjQN16Wo%2BhNC3IILSuQOp%2FOMTcagmEW&X-Amz-Signature=2d428028670689f8d9a07ec00ae5284be628ca57930b67b21c9cc0b6b6338adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HH4SYNX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIFHqBbTmj%2Fu1hcnEJ89SLGqx364nYIwjlQ9KoqKDQ%2BPpAiACXDTi3y%2F5HC4idHCBQXlQYkQZKTctm3INeXfKz5Twcyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMa4ErSwuLFRz9OrhpKtwD2hQCl4X7G8drVSeBx2CahUQk52Kc6WHegG3BxEZnchYYUUJiD%2BKQhk4gluqGn0GsC5ubUbYGPlTH0eDVM1vTf9j57a6NTZVKCWQPlXGocNU9IQLTjA1oD1ZAczM%2BBmqHNcoRt90zeCF1wnrcclZ23czc07uYoC61Fg9sGsbZ3kS33vW1zjmYDVprYWIx6U6zsB2Pp6M4EBDVEy0oOgE8awfmEBMEIwHPPDpiUX6Dhe8XhJTJSrGL7BiCXOk6CBIWS%2BXdCf2GQfhie6oiBSbtBvtLvU3YbqV0GetInqRySKkjfIljikcLUsREK%2FA0EizGb9sep5H07ps6NdtAQ66sdY9L6YOMTgpeNF%2BiTzhNyDebd5PFuKDiwQCsNlmdxfWUmuDtmvpgkSsG3SakUMhZ2KTCV3VW8hpRZfZX6Fhce9TRmU89JT%2B0tOsE7buyH4WpcfmtRdrQahi50utaBcHGe9aMlY51CPMpjeLNGgWmbWl5V%2FaIAc6%2BrPM3HKltb6scpCv0GjDaQA%2BoQYC1iZfnjftSdWyfrKwdTpDrGJ8UtmtQKPnHxH7wguH3DepBWwJJG%2BeN%2B1zQ7mI8bt3AesNxwjc3ppFBrnl7vS9ADs00K8Tpdg5hvqNp%2FJYw1A8wu72zwgY6pgGci1jkLtvDvxWynPdmM2ATgU0ERq4jtID2FH9xe2bZ%2FpKVEThoPJh29ka5ocMkNr6btO8qdCPIBNv1jSPCCtytbkLpjtfZjtgTg8l%2BzmqfjszgyDh52LOIXZYOgVdUhJTbgUqATEjOiMHXE1G3WlCYPrja9AUUeUtgz8Y76rjS%2FBgc4bGeDpbg3SXDZkrc4J8vbejcMAH1Aa%2FGRq5C36jIolxiEEbp&X-Amz-Signature=c4cd6a90a96a70748e8e51dcc0e71a50a8ca5a4357e39a266a6a2d76e1b9094f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QW6TXA7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDzp299eC2HJ4FzS4wC7NXSmCZMGQIzrXYcPJ%2FdGeHLDgIgfMAdSxgbnzR%2FRAQVlzw%2B5btm1Ng%2FFn2kEg6T%2BrFrra0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAGUMqimAtW3BW0gMCrcAzbQtJ5tlhImmzXGFVCUdvdz1SgUWDef05HZN4SGOrIA6Me7%2F8j3FNqohynuU9rJe7%2BBTPJkoaDwaR88A6Ck%2FaJXxA3GXATU7eIa9%2FEoqYQ6PnG7AoIH3A7EE6rR92IlYd77AaqqIezweDucepIKFHHcq8yGMyvp%2BnG2N6QcpGTuhurVDeY4J9hxjawOyGtddsvn9QZo16XqyMrw%2F2WR%2Fs%2FSeAXYSjnusG5E%2Bp3AbH8VIaGMq4F3cYVybozfqMrvD1c%2FBxAF8mJKTFIqgKgBxGuPgAy%2BIzNprCSdJSnbScN90hJeQ%2FFIUhkQG9lyHmZHkt1IIVe3hW6Ou%2Fquy9HvjvzFOSheQoxEOaQjcslEKHfdIy8clS%2F199O04CJMaukTQnrifjhtduUMxRRGffF4bkAp7Iyok5nejGsIU6IC52fhVuckgZxtqdkdPfl2JPDVRgXjOjps8N%2BRb2fq4rGfnqNYzGs7WSuZYBeiV51GEYxWlSZqzdDke3Gajd0lFALGKlGhakj0L2YI7BcP6wfeHlvZKZfmWQZ8qL2xHjxuV6%2BhpvNy3dm3QQQJZKM7M7wmRhQs6jq5HZRqTfcBLLgjUU9JB3pHxxVn5Au5oNiBfMPfpA9n3%2BCE1hk%2Bg9l1MJO9s8IGOqUBGbzFsXLm9EibV4%2Fax164Uji55RRur2yTu%2BKj%2BBhcswnPYTlvwzjq6WUoag7qgvGoyqLfak3eduu2yAQHqpCPOb%2FRoX4tca4mwPwYK8zjSV28QPdxInFz7Rn%2BdH10IatiB5hFiikRcqDssr2a0SQZyK3YvQewjmEPKP7sOT1Ao%2BHUbwvRG4GWzkAg0AzZ38mZmAK7QLQm7D5BjlI4yXVXpT6agq8s&X-Amz-Signature=14f7dff08a48e9ad5358a5629db4c600b0103207b9faaf13fa04ee9336d8644d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TAIL65%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGt%2FGT6AynLr2%2BkanBGEnbUdDi666AJ9Bx5VRw%2Fw7bmUAiBK2QONl82G8m2JNg1bgVkyTrN6MvfN2LmAWkkxJtZSUSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYaU6Et%2BKDoX4i7wgKtwDtGLqaHn8ZyTIlW4LAKWG4KJFtQImJAuG9ZOeux4WVtT%2F8NxGGKz2KPGNyoTUzTVd3flFv%2FRwmjfhwASK4NyqRA1%2F05RDWpV00IjaVFaBMCtnZbIKKw5au30IXym3tfsH%2BVpWA%2FeD2dQ2POcB3Egy74W0wkBP%2Bf2QZe3X9GGU%2FqrTBVRSDt45HnlILbVwpIXsSsq5Agx98frAQWiiZn89vNXA4Hl8Os46tjWGL6Dtsxyb%2Bx%2BFGh4mhtWSPI%2FTS54W0bEB3iLqezcSsGbn4jrZvrA7XfUzcqYXQSQ8epELA3TTfKNXqIWvcWTxotEokaE4%2BCIpDbbbUjqx9pMZgXnciTuoiDXGdA5MVevdmQ1IbkIw4Aao%2Fsi6Eald0jD2IVhICmffEbARsoDZLuGN2ZK5hKJ7jU6grkrBcjPajXYTatWb2tUswTh2ZVPCN6e1wftbOrJbx6SZCEuHNL5oiMERGoBEtGxySZWUccuOnK7f5pZBexhOabtNkTLmiMXNg%2BVM72PeIrncluUBuisuCxBmfbGb563gJ%2F32hKIquzQtkIN5FLeywyRLgHAJtCuZci%2FK4R1fAJ3u0wXRHb2%2BeXr2J%2FDPh38oZMAmQ0qhf6bOsjvv%2FCWigH8usABzMwwwmb2zwgY6pgHPnA1Prs89OXXlFgRkxSM8A%2B3ADKyc3ZJvTVbQmyhvcIn%2BUrdVr72tjJvU4rlEWRPJxAOFL2P7gsVzJGjqTXKDxUNzSGu52HQckY%2B2w47h92p2kMLLTT5P0UclX3DyiM8h7eQNionA%2FqdHNBzf%2BMWi322YanEXchE0DKows8EXpjR02oduFWPGFrH0LrU%2F2AjQN16Wo%2BhNC3IILSuQOp%2FOMTcagmEW&X-Amz-Signature=60ff511a27fbba655524d4c81751ea20888e791cd9f57b81d907a230a15db644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
