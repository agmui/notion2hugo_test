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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IL7ZGOW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICjDoMTqHmhYUfyW3wALMj1Mzt2P%2FVxfEOjuCOJGruNyAiA7P%2BKUaHikf6LLUxtIjoyyBvlahhTd2BLxmZYb6JUqrCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMP9EAna3fc%2B%2FryptXKtwD44Okr2WrPoylxP1Hd06GPFLy0EYC%2BsrNITRRCn6DwCt2gKo4kUEs6rA1qIuaNBdU4pdWZkFIzsNSCeiUrazN1kIc2n4qo5uvhhXB4%2FrunwxDrf2i2KX0%2BAfJ2Rf%2BtVREoFxTZj%2Fvw7ZMQ%2B%2FvUprBFRT1T3NClQwcwDTdvKMh2P%2B3WZhRdHQi4RxifC%2FS2mbo4FzKEcCn0TCCQIvQYLLCTF5N3lfl85QZCAkM9ZrdLqZNkykrfHLEXT0DLFWCZegnmExbJYZo%2FSTjWNKxR5s3%2BkLJuQ1cVBfYckxD8pJ3HG1D0nt8gwB5X%2BA6hE7E8Dgrcqz9yelL7%2Biwl4ydvRw6HF3AotBK8eoh6t8vms%2FDoKB7vZGes%2BokCQIz4Ve0F%2F%2BKAXpcrKSKsWt4VnWwWXcZBbKQMDxR7fusnArkRTvMRgHmLDAbnj0v%2F3DPjXlZ7z9SpgrOI1%2BiiB2VWDO%2FNr37ybi%2BqZSllG0NMd2e%2BmLxCVF7%2Faxxe6fukXCjRUIvhhueixA4AqoPmTufa0VM3ZF%2FhFQ19wLNjadPVplrx051DMKGO9xGt45OK5LOeLUbaaVRJ%2F1OtgZadVl65v1v%2FzofEzLr6HROVs4AKlWzyKlQFF9prAeBRZgvQzusZKYwhpjKwQY6pgF9MRrUiLQYzclOJP9F2lz4JbekQlUGvZzjaBA8NV7SfA2FBf%2BP9iuBURD0SE75lkuLYiG%2Fdgar%2Bb3Iumq%2FO7tH0yy0YF85K5%2BIVAKWXpQGvbPt226N4LwtIQ65xagrV9V1YxT0oH5U0Sq03R0sceqFijvM0hoHCqfu6HeKWZF5LKmqAOKMIpXtf%2BCZ41peMCVze9PSQnRfls1Lrq3HlGkgz5Z22mNJ&X-Amz-Signature=32c8052307ac64c20359ea3257dc16f2061f98efee5e2df3c6f5afb3584b6013&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IL7ZGOW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICjDoMTqHmhYUfyW3wALMj1Mzt2P%2FVxfEOjuCOJGruNyAiA7P%2BKUaHikf6LLUxtIjoyyBvlahhTd2BLxmZYb6JUqrCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMP9EAna3fc%2B%2FryptXKtwD44Okr2WrPoylxP1Hd06GPFLy0EYC%2BsrNITRRCn6DwCt2gKo4kUEs6rA1qIuaNBdU4pdWZkFIzsNSCeiUrazN1kIc2n4qo5uvhhXB4%2FrunwxDrf2i2KX0%2BAfJ2Rf%2BtVREoFxTZj%2Fvw7ZMQ%2B%2FvUprBFRT1T3NClQwcwDTdvKMh2P%2B3WZhRdHQi4RxifC%2FS2mbo4FzKEcCn0TCCQIvQYLLCTF5N3lfl85QZCAkM9ZrdLqZNkykrfHLEXT0DLFWCZegnmExbJYZo%2FSTjWNKxR5s3%2BkLJuQ1cVBfYckxD8pJ3HG1D0nt8gwB5X%2BA6hE7E8Dgrcqz9yelL7%2Biwl4ydvRw6HF3AotBK8eoh6t8vms%2FDoKB7vZGes%2BokCQIz4Ve0F%2F%2BKAXpcrKSKsWt4VnWwWXcZBbKQMDxR7fusnArkRTvMRgHmLDAbnj0v%2F3DPjXlZ7z9SpgrOI1%2BiiB2VWDO%2FNr37ybi%2BqZSllG0NMd2e%2BmLxCVF7%2Faxxe6fukXCjRUIvhhueixA4AqoPmTufa0VM3ZF%2FhFQ19wLNjadPVplrx051DMKGO9xGt45OK5LOeLUbaaVRJ%2F1OtgZadVl65v1v%2FzofEzLr6HROVs4AKlWzyKlQFF9prAeBRZgvQzusZKYwhpjKwQY6pgF9MRrUiLQYzclOJP9F2lz4JbekQlUGvZzjaBA8NV7SfA2FBf%2BP9iuBURD0SE75lkuLYiG%2Fdgar%2Bb3Iumq%2FO7tH0yy0YF85K5%2BIVAKWXpQGvbPt226N4LwtIQ65xagrV9V1YxT0oH5U0Sq03R0sceqFijvM0hoHCqfu6HeKWZF5LKmqAOKMIpXtf%2BCZ41peMCVze9PSQnRfls1Lrq3HlGkgz5Z22mNJ&X-Amz-Signature=9e52ca4f10b339dfa2ee0c889fe46c543dcb76cdeeb7f1799702107c85195819&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IL7ZGOW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICjDoMTqHmhYUfyW3wALMj1Mzt2P%2FVxfEOjuCOJGruNyAiA7P%2BKUaHikf6LLUxtIjoyyBvlahhTd2BLxmZYb6JUqrCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMP9EAna3fc%2B%2FryptXKtwD44Okr2WrPoylxP1Hd06GPFLy0EYC%2BsrNITRRCn6DwCt2gKo4kUEs6rA1qIuaNBdU4pdWZkFIzsNSCeiUrazN1kIc2n4qo5uvhhXB4%2FrunwxDrf2i2KX0%2BAfJ2Rf%2BtVREoFxTZj%2Fvw7ZMQ%2B%2FvUprBFRT1T3NClQwcwDTdvKMh2P%2B3WZhRdHQi4RxifC%2FS2mbo4FzKEcCn0TCCQIvQYLLCTF5N3lfl85QZCAkM9ZrdLqZNkykrfHLEXT0DLFWCZegnmExbJYZo%2FSTjWNKxR5s3%2BkLJuQ1cVBfYckxD8pJ3HG1D0nt8gwB5X%2BA6hE7E8Dgrcqz9yelL7%2Biwl4ydvRw6HF3AotBK8eoh6t8vms%2FDoKB7vZGes%2BokCQIz4Ve0F%2F%2BKAXpcrKSKsWt4VnWwWXcZBbKQMDxR7fusnArkRTvMRgHmLDAbnj0v%2F3DPjXlZ7z9SpgrOI1%2BiiB2VWDO%2FNr37ybi%2BqZSllG0NMd2e%2BmLxCVF7%2Faxxe6fukXCjRUIvhhueixA4AqoPmTufa0VM3ZF%2FhFQ19wLNjadPVplrx051DMKGO9xGt45OK5LOeLUbaaVRJ%2F1OtgZadVl65v1v%2FzofEzLr6HROVs4AKlWzyKlQFF9prAeBRZgvQzusZKYwhpjKwQY6pgF9MRrUiLQYzclOJP9F2lz4JbekQlUGvZzjaBA8NV7SfA2FBf%2BP9iuBURD0SE75lkuLYiG%2Fdgar%2Bb3Iumq%2FO7tH0yy0YF85K5%2BIVAKWXpQGvbPt226N4LwtIQ65xagrV9V1YxT0oH5U0Sq03R0sceqFijvM0hoHCqfu6HeKWZF5LKmqAOKMIpXtf%2BCZ41peMCVze9PSQnRfls1Lrq3HlGkgz5Z22mNJ&X-Amz-Signature=af3b14f155ff06265ebe14e4262883e2d35efa6cf7467f1666e815636c6647a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7MDNDG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIAcOCZ2Uwd6bwzE9pfiqZwzI2tSfZfJTgZ%2FisP1n6hyzAiBR18MBuZ0RE9ujQiRE9zBqX5i%2BtmzQU6IcZ0%2F4qlSpVir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQ7c%2B%2BMHBi%2FgeWXhmKtwDqyDHkAzuW0AfdjnF%2BtZn%2Fr14HNfWSduv7cfM8eJT%2BKxKsZFO9UAB9rOFNHa%2BTrg9EYQ9xtqJAYzZhHhwSyAORu5Yj7hJBnzWZUcynPYfXdx5F2fvn62kdOyD59Ed5j3EcbU36iNeUvXWAEhGj5vArdWdkTvaYTGC%2B4nj%2BmZivZeIO60cp7lbFrF0zyZPekWqadivC3R%2BLfXZJm8JuGwriC2Dk9ex832qJ1JcKo1aWOT071x6qwlakx2DgrgjZmI81xyjEgvq1C9rabjfX9r7rkJpr%2BV5kqcMfzHYQYSp6V8SEe3gziO7uwPQj6O84judAQELbr%2Bhv8Tnz%2B1tiaItLU7N6%2BCEG6dSQKOwjhar%2BDz0Xh0CuhClKj3dtw5Lg%2BoEpbmhXhhi7QelGvqIvdimsDbnEW0JwaUsAOapmRmqKNJxNmhOj%2FxivISm3ZkFgDiLO3dv%2B9Nolgx6uTO7JEDzyDK0kk1XZbYKnt9qMWVasg9QRgh5R6NPPLcFp5qMexGxdh8Vr1Z4H1%2BqWEN78TA%2F3szEy%2F2gXUkQkI6ll3OP6AYjPO3Xj6eFhDKqNh2P8%2FSs3X05bGVW6eFswysC2UAiyhXR8AEWNZ%2BBfYJ7wHCWvcl7GbOVmVfh7gcmQPQw0ZjKwQY6pgHJE68gHIucierRJKjWX%2BnomJAryQkjZISCnKaB13f1X20wwrc0L43zzB4rFG73Ya25oKyOvPTltBkYvyJHrWs2lbc9rbRf4K3HD9luvg0IpBYQfUl0XDrSSapWWg7qpIO8JK4vRcfkNbPgIp1Bbf4p8Ys%2FT%2BwKOZKnJpLrP46%2F%2FgWiHhb5Gwf%2FfQhEyqOyFwfbHMlaxmbQ2%2BRt0YpAzY4wXk8UYGwV&X-Amz-Signature=e8a131a1420a0607101d888b9b2e37da75e1c54e494c040f7c38ee10bff028ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WHUUZR%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIA1JwYvJZengtNCQaPIMDBQ4flrQtDxI9234RrmBAV2HAiEAl1ccwQU8EHglvu%2BKzzhXrgC%2BpDHBausF8VY987Frz%2Boq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJjV%2Fri%2B8jIgXp2OpCrcA9BUR2FveaoTzynnJlgTKK58nR%2B6%2BMwvmWYMQWb5NEvrlbZaQiH9EA2WSkNoaN7xCQock%2FBviwpOSn6pGlEL%2FG6ukPTJLysH%2FeF%2B6rTwbNGlnSw2u4gMhT3%2Fn6bUVTpJ%2FFf9Gcs33rZyVl2m0mxk%2BfAWAV%2FVJ25miDsH%2FbKm5K5GUJAlgH%2FcNEpP0sBnV2D1QeRg85aaWIsxdCBLc2bCy3lFRKFjyjuiDPxCfDDh7bucKdJjMJ20e6E801TlCPfUuVRN2pFtPvXH%2BCtvwvngzt7BLvuT2WB2jCJOnWiI1ZjFPjazlxXmgwoMLLcdno63Df5FOM28PfZdIjEJVBO1kDYu%2F4b%2BEB0ZzoHR4js26%2Bw0ExseQYrRedA9FAlCF3DYdYd8%2BkgPi5G6HNhgLvPmDio4GhnPUfnQXb0XaZLQjxU1P0D%2FgKM1VfhV%2BV504N2FWUlIMqlXhTXRXySIESNLi4%2BlZvXuYxNFjDbQLr%2BWuEtJpngjra1E0a1cI6yigeAVeksESsZ6OTs6z8UYP5fx4tcZ%2F0KT1YDtAGc05L%2BDRhOetC68sXLgx53u%2F8kOAB6yVRgiO3etATPhqWrSWt3WAejs94hOPYervcqCNVN4HrR6D8S4bw8e3c84CnlBMMeYysEGOqUBFq4NFdr52SI3iv7oWLClLfcQXn9Mxq22sAvI66YSYyx5KXQeDbjXQ%2FwQgsWWHolzWoZup6PrVgWGqbiznd6Vr5RRgKduGpkl0ucR%2B0KBCKo%2BZSFBYw3aJdwJqtjV3PEAnGziTTuqL2GQR%2FyzdvsS3tIV6ZaMPeuwJoiTtavkay%2FCxay4aPWMaGdMPYBJahYaC%2B42u9TyXVJwPL6CqB4ZaKEID8xW&X-Amz-Signature=427637af9ee38193e84aba209d95dd7ba15f5d21311d82b7fc5c97504b1adc6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IL7ZGOW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICjDoMTqHmhYUfyW3wALMj1Mzt2P%2FVxfEOjuCOJGruNyAiA7P%2BKUaHikf6LLUxtIjoyyBvlahhTd2BLxmZYb6JUqrCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMP9EAna3fc%2B%2FryptXKtwD44Okr2WrPoylxP1Hd06GPFLy0EYC%2BsrNITRRCn6DwCt2gKo4kUEs6rA1qIuaNBdU4pdWZkFIzsNSCeiUrazN1kIc2n4qo5uvhhXB4%2FrunwxDrf2i2KX0%2BAfJ2Rf%2BtVREoFxTZj%2Fvw7ZMQ%2B%2FvUprBFRT1T3NClQwcwDTdvKMh2P%2B3WZhRdHQi4RxifC%2FS2mbo4FzKEcCn0TCCQIvQYLLCTF5N3lfl85QZCAkM9ZrdLqZNkykrfHLEXT0DLFWCZegnmExbJYZo%2FSTjWNKxR5s3%2BkLJuQ1cVBfYckxD8pJ3HG1D0nt8gwB5X%2BA6hE7E8Dgrcqz9yelL7%2Biwl4ydvRw6HF3AotBK8eoh6t8vms%2FDoKB7vZGes%2BokCQIz4Ve0F%2F%2BKAXpcrKSKsWt4VnWwWXcZBbKQMDxR7fusnArkRTvMRgHmLDAbnj0v%2F3DPjXlZ7z9SpgrOI1%2BiiB2VWDO%2FNr37ybi%2BqZSllG0NMd2e%2BmLxCVF7%2Faxxe6fukXCjRUIvhhueixA4AqoPmTufa0VM3ZF%2FhFQ19wLNjadPVplrx051DMKGO9xGt45OK5LOeLUbaaVRJ%2F1OtgZadVl65v1v%2FzofEzLr6HROVs4AKlWzyKlQFF9prAeBRZgvQzusZKYwhpjKwQY6pgF9MRrUiLQYzclOJP9F2lz4JbekQlUGvZzjaBA8NV7SfA2FBf%2BP9iuBURD0SE75lkuLYiG%2Fdgar%2Bb3Iumq%2FO7tH0yy0YF85K5%2BIVAKWXpQGvbPt226N4LwtIQ65xagrV9V1YxT0oH5U0Sq03R0sceqFijvM0hoHCqfu6HeKWZF5LKmqAOKMIpXtf%2BCZ41peMCVze9PSQnRfls1Lrq3HlGkgz5Z22mNJ&X-Amz-Signature=a5c15eb022772a886a114b8d23f6e94758a513c79457115038b53c79dfbd6c11&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
