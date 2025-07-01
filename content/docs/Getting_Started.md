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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEJO5HG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDpI7mJOr0%2FmBudAbP%2FDZhKP78Gif68TLFOXWYRfTQIgbXSFHCm2I9%2FsvpI4Ac6XWT9VhrkHrypHtODudBnsthYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw1nQHE8Em0hu5T3SrcA36uoiWG4I8%2BQibKsh3tN6AufpdB2NIx3h9FHtIc1tRy%2BOoBb49v6ad9r%2Fshl3t3QsrNZiXlbaE1hWCc8q8EDM6PbR%2BtDi63d7Q4dlicR77AIHaIMVrC4zFFRNkjX846j1rDUiQNRt%2B9DggjQmFDa62m%2B1Sq31hiUOllKnqmw8zvrx1sVaNuHOJ3nRom8DlP2CZRMFBvNFeGeZVyhcbXznu3MuaCe0jgZ7Wgr0CpddXx7Kvbz3sQFen3%2FYmbdz5y2SKmtv2vEaYb53NdC4lYi4eZqU9mgNXbZzy1ccphjO1ARWdfud8Wwpg7AWsrKQ7FqPsCpOmLFn1X6NQd07EAT%2BSjfs9GsB4sGG1d6oycrv6u%2FL0f3Th%2BLjHZ5gNihO07G4aeRbFzDfgqVfBCryHgDoXrhZKqNt87mU69gf34ZOKNYdkj6EesKu9bIZHu2vePn1ksZw7%2BcBo52Fur%2BxFmbHvJClGwZ22W7pUar6yq%2FAUk6IyLEFSsZkDUxiiSYXXc%2BPiZV30C1i7zBi7HlPETccbXFRHRy4W%2BOHS18SRzwkLHoYzUzEAUutPbj5BMteT7lPzVf0stPJgYlAf7Am1B6FXvystpWYiX2jR7m4VldnRD5KK83bDEudph83X5MIKlj8MGOqUB%2FDNV6lVDasmihH5sAuBZFQ6q3vGIlbKTpu3qgNg6VQazZ3FfpGLHTHabr09CUlkiJtn0eTraSfw0g4nYRNuyzXEK0Bcz36F7e%2BwIa78iy%2FYWAI1HkSxIBcPT9KlYxx0YLUPdNaDihs%2BMGI5EZzlxjujrhut7O5jrE7RYAsH9zeewh8yeJyfn%2BzfAf%2FhPGWVaTbTFKATyWjWhWLfM%2FbipYBOUwh5t&X-Amz-Signature=f418ef6d3446a1332cb32a3abe7fed88f65981d43b0149e799124706ee29244f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEJO5HG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDpI7mJOr0%2FmBudAbP%2FDZhKP78Gif68TLFOXWYRfTQIgbXSFHCm2I9%2FsvpI4Ac6XWT9VhrkHrypHtODudBnsthYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw1nQHE8Em0hu5T3SrcA36uoiWG4I8%2BQibKsh3tN6AufpdB2NIx3h9FHtIc1tRy%2BOoBb49v6ad9r%2Fshl3t3QsrNZiXlbaE1hWCc8q8EDM6PbR%2BtDi63d7Q4dlicR77AIHaIMVrC4zFFRNkjX846j1rDUiQNRt%2B9DggjQmFDa62m%2B1Sq31hiUOllKnqmw8zvrx1sVaNuHOJ3nRom8DlP2CZRMFBvNFeGeZVyhcbXznu3MuaCe0jgZ7Wgr0CpddXx7Kvbz3sQFen3%2FYmbdz5y2SKmtv2vEaYb53NdC4lYi4eZqU9mgNXbZzy1ccphjO1ARWdfud8Wwpg7AWsrKQ7FqPsCpOmLFn1X6NQd07EAT%2BSjfs9GsB4sGG1d6oycrv6u%2FL0f3Th%2BLjHZ5gNihO07G4aeRbFzDfgqVfBCryHgDoXrhZKqNt87mU69gf34ZOKNYdkj6EesKu9bIZHu2vePn1ksZw7%2BcBo52Fur%2BxFmbHvJClGwZ22W7pUar6yq%2FAUk6IyLEFSsZkDUxiiSYXXc%2BPiZV30C1i7zBi7HlPETccbXFRHRy4W%2BOHS18SRzwkLHoYzUzEAUutPbj5BMteT7lPzVf0stPJgYlAf7Am1B6FXvystpWYiX2jR7m4VldnRD5KK83bDEudph83X5MIKlj8MGOqUB%2FDNV6lVDasmihH5sAuBZFQ6q3vGIlbKTpu3qgNg6VQazZ3FfpGLHTHabr09CUlkiJtn0eTraSfw0g4nYRNuyzXEK0Bcz36F7e%2BwIa78iy%2FYWAI1HkSxIBcPT9KlYxx0YLUPdNaDihs%2BMGI5EZzlxjujrhut7O5jrE7RYAsH9zeewh8yeJyfn%2BzfAf%2FhPGWVaTbTFKATyWjWhWLfM%2FbipYBOUwh5t&X-Amz-Signature=ad1399580da09d4bf2b3fd88157ed7159a177883906e7b4e5289ad5847b0ea58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEJO5HG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDpI7mJOr0%2FmBudAbP%2FDZhKP78Gif68TLFOXWYRfTQIgbXSFHCm2I9%2FsvpI4Ac6XWT9VhrkHrypHtODudBnsthYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw1nQHE8Em0hu5T3SrcA36uoiWG4I8%2BQibKsh3tN6AufpdB2NIx3h9FHtIc1tRy%2BOoBb49v6ad9r%2Fshl3t3QsrNZiXlbaE1hWCc8q8EDM6PbR%2BtDi63d7Q4dlicR77AIHaIMVrC4zFFRNkjX846j1rDUiQNRt%2B9DggjQmFDa62m%2B1Sq31hiUOllKnqmw8zvrx1sVaNuHOJ3nRom8DlP2CZRMFBvNFeGeZVyhcbXznu3MuaCe0jgZ7Wgr0CpddXx7Kvbz3sQFen3%2FYmbdz5y2SKmtv2vEaYb53NdC4lYi4eZqU9mgNXbZzy1ccphjO1ARWdfud8Wwpg7AWsrKQ7FqPsCpOmLFn1X6NQd07EAT%2BSjfs9GsB4sGG1d6oycrv6u%2FL0f3Th%2BLjHZ5gNihO07G4aeRbFzDfgqVfBCryHgDoXrhZKqNt87mU69gf34ZOKNYdkj6EesKu9bIZHu2vePn1ksZw7%2BcBo52Fur%2BxFmbHvJClGwZ22W7pUar6yq%2FAUk6IyLEFSsZkDUxiiSYXXc%2BPiZV30C1i7zBi7HlPETccbXFRHRy4W%2BOHS18SRzwkLHoYzUzEAUutPbj5BMteT7lPzVf0stPJgYlAf7Am1B6FXvystpWYiX2jR7m4VldnRD5KK83bDEudph83X5MIKlj8MGOqUB%2FDNV6lVDasmihH5sAuBZFQ6q3vGIlbKTpu3qgNg6VQazZ3FfpGLHTHabr09CUlkiJtn0eTraSfw0g4nYRNuyzXEK0Bcz36F7e%2BwIa78iy%2FYWAI1HkSxIBcPT9KlYxx0YLUPdNaDihs%2BMGI5EZzlxjujrhut7O5jrE7RYAsH9zeewh8yeJyfn%2BzfAf%2FhPGWVaTbTFKATyWjWhWLfM%2FbipYBOUwh5t&X-Amz-Signature=15f70ac4db54f18f9dca47ee413a237dc194b0fc86613970f2cdd69e21419721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57DRXIJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXq5mmzTXM%2Bwdt0VxzYBmoWa4vzhSQ%2BwWYtg%2BFgfMcUAiBQtY9Hp%2BQA6C8HArSV5qNpz%2FW3V%2F%2BiV6uDMPlVSrGy1CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2Fvc1U2gVBg3VD86KtwDKgKGbLF24V23QonVpHsAUXK%2FlYUQP%2F1gt8O9pAMs%2B8u0V0dB11IYCkjFCsmcUGSHf5etVIHRoKXyKDsNXIc7cfPJYvokMCL%2FFA7YTKkOj3gPyVSlxcqXM4x%2FMeJBrKPqj8pkhNkWfeO0ercBme%2FOsX0aro%2B7vAmz%2BO35bHnMWUqpJ7t%2B0LhofFbn1sm9b6KXU2zK0LMRNjPXjcRndzhjbgZkKlCl0W09uN2dg48ocpJ9zD2k3LOYKoOozjpOcU0zwkkeLoD8WYZSQFKndExofCXtsNv2Mce6YmNlMF383ulrZaoYEj%2BhYoU98odz5v9MV44uf3%2FSbY37i0Au4qHm8WXcctKVJHX6uU2Jo%2Fli6SKMn3hkgk3Zc5kEZ%2F%2BU42vLSkO9KM%2Ffk6Od4iy8mjgzNtPyy6lmHZTW3FlrUBg5W3cMKXfzXgG9PCc%2FH0XUhPS%2FN4ZfurDHn%2FrpdLQd%2BALJKRg0L2TpFhEL0t4%2B53xuHuuekogbPFNVoyeVmhCKDCENwBvT%2FRwdiL2kBapGcUXJR0bQUri6PQtCEodqTAgHkIoVmI%2BF1VXsxpSX8lIkSFQq%2BM6c4XPXwAxV2JNyyFIZKjgsHwPKE7qQt8AntrScyZYwc8Tr23S5JrVAPmQwkKWPwwY6pgELy7W4yDWrOVZV3aVxGgYgCG4kUuB4aoCuX43t24Z388y5GFvEkTbakR0634JfxEeectu4lq28bsPB5KV0l1n%2BkuuC5V6W1bsL%2Fb%2FnDivjAh%2FEwCt3Hfnvg0usKs3iM7Z1P0dp3UV3UulOoYdp8Zup4mFLEiDPSzMpWUcV2STbUTD2U2%2B2GY4IlrTZzYrTb10DsDHMtW9S52yUKvOXnyk445oxz0JZ&X-Amz-Signature=1def6e49d4afa6669d241c932f6ce1e9ba3316f0e7b326e16bbab51874aa9a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4Y5ZVG4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1WwNTdReCULWrSuzmVPRmByzC7VkuLpTcka76rRzmNAiEAzxsN9Rm3tBCkje%2FXzxCSK7zbD70qpZff%2Bx6oHZRHgK8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGRhwdBgVBhFEz68yrcA7cIZoOaRhF%2BsAemnPiJq6eU0ujCA6uaxnWvM7HpGD6oo02la07I9lEiah2AG850wQqCA4qz%2Buv7wnXUkK4OXywP8D4SmDqZyPM%2Fa24gxYy0xhelMpKWCpbwMIKrRD9lcq%2FfUTKq17f3ru4KCcI9mboR2xRHwG6t4O4Imyutwj5D6RK6u3hRvii1oA%2FTAarUMy4ZA7cG9i9vbN0W0a8TeYy9iMBAYzutTEZZU3dtc23wTrp6cJ3wUACNQmidmNz4UU3xhxli%2Bh7IxR2NjlCT7z7EhvHd9OoAUz0aAnTxwRm9vIX7f%2Bn5UpAdMPgVQzVeH2MFtbozA%2BX%2BUWZ59xB0zE1M2Wt6eW6V%2FG5k4uhXjhVVMQW7rMZP6u8eiX2y0m5Xq%2FMuJC9PylULhJXUh66BGN7CFzvFrZH0SCGeE0%2BA8G1zTzzgVJyYtaZWB3QS6NnPuMLflSnC479H6DUbvaZEnW1bS87ZSFNaCR96nclhhq8cmUhhOoZ66ttkxgfiWB%2B02GK%2BeQmQYykcIo16I1wghUKHdfQoPgnhz2ygVx0XjpKJS7g0zp8sQa8yRCq%2By1R2BvWwsdaj492FYs8E4GeRp0iFt3Uyo7VzHf24zoXVwJW5o82xuykJXzMUkAUsMOulj8MGOqUBux2WweKm91XefgIDV9dS4CKSoDMhfPhW%2Bj4B%2BgCSpA6Q5JI%2FVbUKHdfZuGD73ntwVPGNRarfvX4PUCA2NmMhnjV53f%2BJf401yFynvhrl8fAK4erOZm%2FNReDIqCx4f2gIsi5l1zmcGlo30z6MGoBAnEeIrXR%2F9wXwLyLvtQkCT0KNH17Hjmtk5fGOHtMQLTPYVYZq3TURl93A1DPgbf%2FeyBwWulAV&X-Amz-Signature=aecd7d96a4c7a4f77cd30b49940922355d3bb1c4fee9fba4b55caa757312db79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEJO5HG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDpI7mJOr0%2FmBudAbP%2FDZhKP78Gif68TLFOXWYRfTQIgbXSFHCm2I9%2FsvpI4Ac6XWT9VhrkHrypHtODudBnsthYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw1nQHE8Em0hu5T3SrcA36uoiWG4I8%2BQibKsh3tN6AufpdB2NIx3h9FHtIc1tRy%2BOoBb49v6ad9r%2Fshl3t3QsrNZiXlbaE1hWCc8q8EDM6PbR%2BtDi63d7Q4dlicR77AIHaIMVrC4zFFRNkjX846j1rDUiQNRt%2B9DggjQmFDa62m%2B1Sq31hiUOllKnqmw8zvrx1sVaNuHOJ3nRom8DlP2CZRMFBvNFeGeZVyhcbXznu3MuaCe0jgZ7Wgr0CpddXx7Kvbz3sQFen3%2FYmbdz5y2SKmtv2vEaYb53NdC4lYi4eZqU9mgNXbZzy1ccphjO1ARWdfud8Wwpg7AWsrKQ7FqPsCpOmLFn1X6NQd07EAT%2BSjfs9GsB4sGG1d6oycrv6u%2FL0f3Th%2BLjHZ5gNihO07G4aeRbFzDfgqVfBCryHgDoXrhZKqNt87mU69gf34ZOKNYdkj6EesKu9bIZHu2vePn1ksZw7%2BcBo52Fur%2BxFmbHvJClGwZ22W7pUar6yq%2FAUk6IyLEFSsZkDUxiiSYXXc%2BPiZV30C1i7zBi7HlPETccbXFRHRy4W%2BOHS18SRzwkLHoYzUzEAUutPbj5BMteT7lPzVf0stPJgYlAf7Am1B6FXvystpWYiX2jR7m4VldnRD5KK83bDEudph83X5MIKlj8MGOqUB%2FDNV6lVDasmihH5sAuBZFQ6q3vGIlbKTpu3qgNg6VQazZ3FfpGLHTHabr09CUlkiJtn0eTraSfw0g4nYRNuyzXEK0Bcz36F7e%2BwIa78iy%2FYWAI1HkSxIBcPT9KlYxx0YLUPdNaDihs%2BMGI5EZzlxjujrhut7O5jrE7RYAsH9zeewh8yeJyfn%2BzfAf%2FhPGWVaTbTFKATyWjWhWLfM%2FbipYBOUwh5t&X-Amz-Signature=2dab2b9d51af5e1ea7be8be73ea095f96e96ab48b9f3b1dd16e2840a0ec8b025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
