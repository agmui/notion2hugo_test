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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5CPZQ2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FiyCASIxzfmq4mf6QZRWLF8r%2FGaQbtsyfoNph9sewUgIgJ3%2FK1pTMpdPYZMMOU%2FvQTEKuJQOx68%2Bz1D0iXeTcaKsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHivJ6q3QkAmRNfwVircA7LSvB6JsZOgGhlwOGv9B73Pxh5cscG1g%2FzPa6KSHwy0zJImnCm1yaSs7gZwvr9vSK%2FTy%2B%2FmCBRXxI4BIXVJd21M%2B7kLtbFfL%2BIoOKFpMQLKEVcwRtv6%2F4ZjhyHH%2BBcytVC4YBxFSPUYfyCPB0DG%2BATLcYSSyHd3wbVTj5peXhozrLK%2FHFVLRW%2FVUSzrJKcHUer82QBBxuVB%2F6nZWf7%2FXRlOj91mRTbsxJV1VdYGIAkPIFCw%2FR5%2FWt9qLH7appg%2BbROyBg6DVBPOdFfWq1LbleQ7uQvJklrDSihj97%2F7iZa9PJ98T1qNbYQOKT9kAoCWbp4bD6wS3L6JeVLMAG7JU0JPm%2F59KrBWenFBKFqjyREfkoIklIo4fYLt9wQKT008OulS1tU6%2B3rkVKlF9YpRcYBfG0QipimkWvoUqqNC8WyuMwhRH1KGcwQcabbTNW4e1BrkaKv7N8s1VaU3V27YTzKkwFQmUquwQc1lEn40BbGXtPG2YEQGl0zhGpAOsOUpScY90%2BhHEieqxUfqhJ9L%2F0%2FoNcvYUN%2FtQJHj7PoTHI%2BUoP8DjYj%2B4MUXgtPEENMiEw9eYyxRZLJVbM5WDW1Zqdu%2BYJOPQcb6utRwh3Tbt13F9ivx8o5xeHTNpeKOMN%2Ft7LwGOqUBuwgqrg7XIlBTVXTB2TVerxzq1GKmRQETkMEUpr%2BJ5KNh89PG52TNwenQWA4oHl%2BirfhNEuSfzfvcdzpzJIzpS1dI1VVeR42rG%2BaOZDjcxPK3H9IYwT39J4iCEL%2FTZ2Ri0GrlwiTjDpOVxo5QeOTURowg%2FRJOrfuU164uepv3U0AgdaoBiW3%2Fq0soeViLVCiWLfLDJTVlsBw6HZwpS6kvV9fGYF7R&X-Amz-Signature=4b26661764509956c311545c9359364617d19d687aab046509d883f57e08783c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5CPZQ2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FiyCASIxzfmq4mf6QZRWLF8r%2FGaQbtsyfoNph9sewUgIgJ3%2FK1pTMpdPYZMMOU%2FvQTEKuJQOx68%2Bz1D0iXeTcaKsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHivJ6q3QkAmRNfwVircA7LSvB6JsZOgGhlwOGv9B73Pxh5cscG1g%2FzPa6KSHwy0zJImnCm1yaSs7gZwvr9vSK%2FTy%2B%2FmCBRXxI4BIXVJd21M%2B7kLtbFfL%2BIoOKFpMQLKEVcwRtv6%2F4ZjhyHH%2BBcytVC4YBxFSPUYfyCPB0DG%2BATLcYSSyHd3wbVTj5peXhozrLK%2FHFVLRW%2FVUSzrJKcHUer82QBBxuVB%2F6nZWf7%2FXRlOj91mRTbsxJV1VdYGIAkPIFCw%2FR5%2FWt9qLH7appg%2BbROyBg6DVBPOdFfWq1LbleQ7uQvJklrDSihj97%2F7iZa9PJ98T1qNbYQOKT9kAoCWbp4bD6wS3L6JeVLMAG7JU0JPm%2F59KrBWenFBKFqjyREfkoIklIo4fYLt9wQKT008OulS1tU6%2B3rkVKlF9YpRcYBfG0QipimkWvoUqqNC8WyuMwhRH1KGcwQcabbTNW4e1BrkaKv7N8s1VaU3V27YTzKkwFQmUquwQc1lEn40BbGXtPG2YEQGl0zhGpAOsOUpScY90%2BhHEieqxUfqhJ9L%2F0%2FoNcvYUN%2FtQJHj7PoTHI%2BUoP8DjYj%2B4MUXgtPEENMiEw9eYyxRZLJVbM5WDW1Zqdu%2BYJOPQcb6utRwh3Tbt13F9ivx8o5xeHTNpeKOMN%2Ft7LwGOqUBuwgqrg7XIlBTVXTB2TVerxzq1GKmRQETkMEUpr%2BJ5KNh89PG52TNwenQWA4oHl%2BirfhNEuSfzfvcdzpzJIzpS1dI1VVeR42rG%2BaOZDjcxPK3H9IYwT39J4iCEL%2FTZ2Ri0GrlwiTjDpOVxo5QeOTURowg%2FRJOrfuU164uepv3U0AgdaoBiW3%2Fq0soeViLVCiWLfLDJTVlsBw6HZwpS6kvV9fGYF7R&X-Amz-Signature=6e98188ff7e66b50407af5eedcec4aefc702b237e5b9603e0c5a74a52c1826f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJROP5XX%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYXMOWVHvXCzmqcY9y7fAhcT035xom6nvPtO%2FR0edBkAiEA%2BsV7PLJuA%2Bq5Td3dJ79NTTZGbwHrcc6PAVtj1aMNxzEqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF6MR5uVoaUZE0XSircAyHwUxqMHJfCa0oDcgkP3egeGm29Rl929uNz1nSOwZR0lOOdzuqEtOGgLutNYKmFoRYFx8CK6TrnlmFKhgAEPJBrZmgain960kGRLvPIWFHO2B3%2FYhAPPWcbxp3%2BuXneLqBcFrHxojsMf74waorzEnNd5BDmfpPClXRe2MrCcdIpr6ktYKERghFPxn7C7kcsx9ETArDmMJ%2FMwd0XdFRfkv%2BKZOg1%2BinQwJ3LingxEYQODmO4aZ5NuxGcIRPcP63yBSTIo8rvPM%2Brrhjngf66EyxjFTzzXOgoX1klmV1XaLFM1oABzra%2FYnvFWANYCaijb5kMCpOw3oMW5jPeS9hi6AWJCBPs9n%2FJrXvW0jf519z53wZtQdc0fwsn1iCw%2Fh392jlVI3hnH7NpJYDts2fDz0UiNYVwASqNVFcAw5kXkJHlFEIXxQ%2BR2vonttedRMFDKCq2dkKvK%2BJ8GZOWrtXFsoJnJ7XXAyqnW0hdOcW78E1XaIHGK%2FUlRKBS7GV2YbHMRmtPQnhsM4KQTWPCwVADoHiBI%2Bu8b%2FnmSG0nmgq%2BZggtNm93yJaziL5vigYNCGPZgMvZcOjrinG2pKUObnCE%2FtjTxVAoAhpb%2FixxqNcpzMxmiVFV4rvQCrsTPQExML3t7LwGOqUB%2FHzNF0u2gHLwprDwL7UIPUO6%2BbVY%2FWarTZZBAfh98xVcFIUZQMTYRUL%2BomHDaSJVIphRS9qkx1xUgPDEW4uOeLpGfEEv3lODFZFmLsXnzpONzOOaEKVEplLGZigp34xthou36Ul4vI1Zv40C0PqOvwkonEW7K5r2VWEK19%2FscbBtvK8bgryM2cvg%2BsBpM5brYCemEtQpu6%2FKb7r9EocNIph%2Fq6BA&X-Amz-Signature=2f17a137a419fce8d30c9d5eb24470de848f13656d92fbe10e79a852a15d0cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMOBQ6K%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAgUmndNcor7PLNyHh8hzNw9qYICpYEdxgM%2BVAu2z2AIge0nzdlgFNgizalZU55yhVXUxJM1a6qZIkFDZK%2FyOalkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzSFw6UGEXR8tOpDCrcA8yGnQBGTcy14IGV0hRnlm7gKY9FCo3qtwXifG9PVw4sdO0pZjDfmxQ4MeoWjvdytp31cRYRfSFvafH9vvSEqgdwdB4sPgfYa57p8WUBEsnLVYBKr%2FnDEYS3DD3ndvpY77nqWH%2B7T4vi7dtTG6KCadj%2FqZAJvl6SkyM9Ug6XwjXDv7g3%2FtvOwcKGYm%2FrVK28EF%2Bnh0iOc%2BRiglp2l65ApDgpWqXHrLXy2hDag8ODP0YYhL9sqZP5BwwdLorsDXBW5vdXgcC1mTdkVi0Z4xs9okGqQHSfXSNtJgBGCci8Tu6KMBQmTXkVMQLctHzYN6%2BKJxssfe83JEYer3EbVNJ8il8C1T%2BommX1kkT3YE1xOtHMiY4ZY3AIxHafWFwiXE1JJFawSW4FHdCwpFnFDwWjSglDb%2F0tVIfnYhNRT0cqzRkbKwfq1tc%2BbX7YZA4OCFIzRK5pDpIn5K6o3SBmLy1hQRWH97pa6MFOyGVHRLNTQJiPFsoqWM34P3o7hSkL0HirHxyDSQv5%2FvdONWqSrdBpKKetVtLFxlIaRlDH1u0USX5bXaGpG4TRDG2jnxgkb5%2BeXv%2Bfq4KU1QojiRuVHI3T7Yev6GaGGVzP9jXibPyYREGuvCr0kU1Lq53v%2B59cML7u7LwGOqUBPaj8n04pO4hOH4zihT5Q5lnhhr559IvYuoiAhjB10l8XMdMzeTuoJ7%2F913wVEaykb%2FK%2FmqbQcJNl4RtD8ZQ5Eb2RaYJPiDMiNTeBxby4r81MDAunwbjqrjez4ux5xs%2FEkAOPVUS6Ki46NQU2T1%2BaRCH7UI5MQ0BZpgY4qTrfuDiEkWfMEFwQEsJxE7jIuH0K2gsvUGLl%2Bm0KxFlYHG5HQoMtoSdN&X-Amz-Signature=0d074aa727dfb943a88be5b6a3e291c3b9ff9ed3f4fdc866b3ab94bcb6bc7bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5CPZQ2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FiyCASIxzfmq4mf6QZRWLF8r%2FGaQbtsyfoNph9sewUgIgJ3%2FK1pTMpdPYZMMOU%2FvQTEKuJQOx68%2Bz1D0iXeTcaKsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHivJ6q3QkAmRNfwVircA7LSvB6JsZOgGhlwOGv9B73Pxh5cscG1g%2FzPa6KSHwy0zJImnCm1yaSs7gZwvr9vSK%2FTy%2B%2FmCBRXxI4BIXVJd21M%2B7kLtbFfL%2BIoOKFpMQLKEVcwRtv6%2F4ZjhyHH%2BBcytVC4YBxFSPUYfyCPB0DG%2BATLcYSSyHd3wbVTj5peXhozrLK%2FHFVLRW%2FVUSzrJKcHUer82QBBxuVB%2F6nZWf7%2FXRlOj91mRTbsxJV1VdYGIAkPIFCw%2FR5%2FWt9qLH7appg%2BbROyBg6DVBPOdFfWq1LbleQ7uQvJklrDSihj97%2F7iZa9PJ98T1qNbYQOKT9kAoCWbp4bD6wS3L6JeVLMAG7JU0JPm%2F59KrBWenFBKFqjyREfkoIklIo4fYLt9wQKT008OulS1tU6%2B3rkVKlF9YpRcYBfG0QipimkWvoUqqNC8WyuMwhRH1KGcwQcabbTNW4e1BrkaKv7N8s1VaU3V27YTzKkwFQmUquwQc1lEn40BbGXtPG2YEQGl0zhGpAOsOUpScY90%2BhHEieqxUfqhJ9L%2F0%2FoNcvYUN%2FtQJHj7PoTHI%2BUoP8DjYj%2B4MUXgtPEENMiEw9eYyxRZLJVbM5WDW1Zqdu%2BYJOPQcb6utRwh3Tbt13F9ivx8o5xeHTNpeKOMN%2Ft7LwGOqUBuwgqrg7XIlBTVXTB2TVerxzq1GKmRQETkMEUpr%2BJ5KNh89PG52TNwenQWA4oHl%2BirfhNEuSfzfvcdzpzJIzpS1dI1VVeR42rG%2BaOZDjcxPK3H9IYwT39J4iCEL%2FTZ2Ri0GrlwiTjDpOVxo5QeOTURowg%2FRJOrfuU164uepv3U0AgdaoBiW3%2Fq0soeViLVCiWLfLDJTVlsBw6HZwpS6kvV9fGYF7R&X-Amz-Signature=90e1062776d4c23117e27de232b9e0ddae081f215b75b7e2f25830938c791ccb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
