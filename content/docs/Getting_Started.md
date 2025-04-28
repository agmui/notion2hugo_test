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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FP5HCR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1VZSTYBepWn2UPm9a22MysT1s5ssnM1JOL2qOFxd%2BvAiAnCaySS3TVWiefcsXvyd8BXL%2FJ6bDw3w6rsDaRks918ir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMw47oRrNzLVWa2LIAKtwDASw4WzDw1FdE6%2BEK5C7y4ITVy8aA7vbKd6KtasaBjD31fHvBpvLVawNa0%2BVlhyPKAzUAkm3TlHcGUjSeaZyCOXRW%2BFvy51upwIPQKY2f83b49pfT30FjXylaeFwv6pa59BvP2TFrrFBlxl7MfppWsnDe5Jj1kWt4CvLyRaYC%2Fs%2FHUlFWpJpwPYnIdfhNoNeiOQxdm1YHzf60vcvH%2BPoJeFj4kdeKgWSswW81zlkLx4lwqzksYv0%2BwEfhSwy98QMmFGljtmgT6YZQHrjMDLgSL%2B%2F5XEkp4R31Z87%2FVtLtbUfs5iWUK%2FIpBqN43HTVW9n8L5uDvjk4Pl%2F8lMSvZPBo9En2S0vx1kPgORacHBbc1QqZ0PR9aU2wEvJIgUGx8bj6Z5xdkRM0T7oU7F%2BmdABm7qnjllm8D0AceRBOqrzVNuOB%2Bol72KG8oo14VoNVpYDJseNSHFwd8CJHM27l5eTmbGAJzaip2y8vVJScF1EsTFETNz0y02w%2BDzRVonCAwslWCB2ahh5dJn2XMnJ%2FGcspDycUfEC%2Bl1ybrB0BaYc107O8TOpcqUTp4za6fVs%2FkuRDUAtp7u3%2Fe%2FV6ZwutbyFkrJ%2BNxPxq5%2BMrRcL%2FsCB05B4%2B2I6cMplsAOA%2FtcQwhsm9wAY6pgHc1Y%2BwwkI%2FemO9VmnMSDWxdLDgpyuNv%2BvbhaVKU33RySC5b%2F1lHANClCMilz%2BSOAfWrW0Pxx72C9tI7o2U4M2zsn2c0tmDGjwTyJG4hUDmsZ0dkTMXz0tbyKpmEJpR4A7MQeLvIINDEGx0zGcE5a%2FYiPc9PDun3jtUqSM3Q4xPT6gi84I5CKk5c8p9GjRAal2L6K3V9P8NvbYzRSUD02XWcJKQwtxn&X-Amz-Signature=4f5d396317579238131557859322cea0409c78ea87bbdd263d911fdabe9a2216&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FP5HCR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1VZSTYBepWn2UPm9a22MysT1s5ssnM1JOL2qOFxd%2BvAiAnCaySS3TVWiefcsXvyd8BXL%2FJ6bDw3w6rsDaRks918ir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMw47oRrNzLVWa2LIAKtwDASw4WzDw1FdE6%2BEK5C7y4ITVy8aA7vbKd6KtasaBjD31fHvBpvLVawNa0%2BVlhyPKAzUAkm3TlHcGUjSeaZyCOXRW%2BFvy51upwIPQKY2f83b49pfT30FjXylaeFwv6pa59BvP2TFrrFBlxl7MfppWsnDe5Jj1kWt4CvLyRaYC%2Fs%2FHUlFWpJpwPYnIdfhNoNeiOQxdm1YHzf60vcvH%2BPoJeFj4kdeKgWSswW81zlkLx4lwqzksYv0%2BwEfhSwy98QMmFGljtmgT6YZQHrjMDLgSL%2B%2F5XEkp4R31Z87%2FVtLtbUfs5iWUK%2FIpBqN43HTVW9n8L5uDvjk4Pl%2F8lMSvZPBo9En2S0vx1kPgORacHBbc1QqZ0PR9aU2wEvJIgUGx8bj6Z5xdkRM0T7oU7F%2BmdABm7qnjllm8D0AceRBOqrzVNuOB%2Bol72KG8oo14VoNVpYDJseNSHFwd8CJHM27l5eTmbGAJzaip2y8vVJScF1EsTFETNz0y02w%2BDzRVonCAwslWCB2ahh5dJn2XMnJ%2FGcspDycUfEC%2Bl1ybrB0BaYc107O8TOpcqUTp4za6fVs%2FkuRDUAtp7u3%2Fe%2FV6ZwutbyFkrJ%2BNxPxq5%2BMrRcL%2FsCB05B4%2B2I6cMplsAOA%2FtcQwhsm9wAY6pgHc1Y%2BwwkI%2FemO9VmnMSDWxdLDgpyuNv%2BvbhaVKU33RySC5b%2F1lHANClCMilz%2BSOAfWrW0Pxx72C9tI7o2U4M2zsn2c0tmDGjwTyJG4hUDmsZ0dkTMXz0tbyKpmEJpR4A7MQeLvIINDEGx0zGcE5a%2FYiPc9PDun3jtUqSM3Q4xPT6gi84I5CKk5c8p9GjRAal2L6K3V9P8NvbYzRSUD02XWcJKQwtxn&X-Amz-Signature=552a04d0b50cdd7277a7035170f5bed212f6b0f29f2233f4407d711972d7a40c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623IZVJEZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeB%2BqHO35WIS%2FTeAUCF%2FYPRSwsNtmxPZbeFKYIJMoD4AIhAKbP5rLUrB3INPAh2%2FxCxY8YXqB29erqXVlWJuNgf4zEKv8DCHQQABoMNjM3NDIzMTgzODA1IgywHUcGrPLkhS23eioq3APB%2F9Xye49AItC7NtHPc7x9TNlYOFr2bjLBtAReb26Lj9kRPbn9u89MphC70cEEvNGHOV0seG4O4pFp3QdYV4xZ2DyN9WAOrOmHEwOsPXLfLVSCGauc2aP10maaVzGY2s4HP92Y83fcJhyiPvWYIF7zOigqOQ0b%2ByAGN0TR5ZTcT1sqDgwvbFBmMrj%2BmFO1jP9OGF7lqyxROmeld%2FhIcF1uAR8HOG%2Fs%2F5sJkYuIb1bImstwiSJToo2RIsli5xyyGM6Q9JSQ4LFz5yC%2BBpRjfai1Aapu3EzcdpwNtPekdTisVpnXP5sHnMaP6Q5IXBsdDM0znHFR4AYAkHVNZUFaMBKE%2BzXfaqRP653NP9CDsRH5%2BhzhQlfoHUfUAQPY3A0161R1rDCYS2giVkbYTahEPqbBaOyBWYVGszlChizefuPkvb4BN1kpjV%2BEHlMSb7FHE2p2diXe9WFrJmXseZPV1Ir062wCU5VsgVRKNd1KlnO%2BvFgpb5gQiDxS0JP2XVaKjiV8VKm7FkRrxwxMqEGmsX%2Bm5OmwWt%2Fpeb7ypcqZ9Uo%2BjoA36c3CzL1UO4zbEvmSclLsCr5Zr0JVxU04wm5MW6x3nB5Hww5%2BQ%2BgF9PrAjF31%2FVHMgOoYRxRUxPItbDDcyL3ABjqkARo9BXdCwk5YqZOljK56hOS2kloMzHJIFyPvuStv%2Fh%2F2FOtxq9QJIpWoJ%2BadO9Ah6TLN9CBZZNGdqLpFv1LllHccjWsumZ8cdhXKYaqCHglwsx8BhdIZP1SCKyi%2BpbYMJUxsfvMGEU7ZaKm2fpOEZpCIKFD5b3qOFNIkRvhLaH%2FXaLuzBtUwzZBO2fl5VZhPdeofDKnkSbqJejrU5uGoT53voEJP&X-Amz-Signature=db4964ef7eb42078e5b65a7bca94c0c8bf3330189ada3eb035a89edb60568d78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6IYOVDD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm3M%2B3ouDAX4oh6VeXrgdwzt09ATocU3M8Z98bso%2B%2BtAiEAxMR%2B0EAVcI7%2B8pEJFFYifi10Au4mrNH8ceA79rQlTAYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBKMpY123%2F6uxN53CyrcA0l3lvUp%2FhxK9kZvLk3VCrTKZ6yzvv%2BOtfcxCZp2YhsqQK9MUbY%2FQTpxRMjDiE9gVAjixkvtb7uzHYG%2Bb%2B8zFiP3lLoEVvKsElN1akWMrdfGbAp2T6w6%2FLICzbGjcDyal%2BhIAmj7U712nS%2F2IUfDZdz4rObAfPctYRUAiVwslEPBi7x2kmYGSZtzSiyYevHnT%2BvdCWKAZ1Kf9Y4WP1GZc6cHT0ug%2Bh52KxeaiXWBTzvQyPNjr6PNk2WNSVFt6Hfe7EHGBNR7AUt71p6qOiYHDtU0qqHws%2FkJuzvVSEKT4LhQg1kfD95f5TT44E17%2FMOZfi%2Bxb22WzzgnD6AyLK%2Bufpm29bsHzDrZ1Aeq%2FuGx7616GNL%2BPd0Ww1FlZkxJ88P2xBTd8nZ%2FVSdoayWBbcNCMviMkS0vZIxLRlcDRj0v%2B2CcLRqf3UktQaHSAVLQOGUWVs6n0bZnRIq5mKKnoxwFUKcu6e2BaANQGXl6F%2BJgSRknyPnuLjXWJxxHM7Vk4jwKa%2BL1eodfTRkFUnGa1J3hqmBK4VKx5w%2BO4qLmwpjngby6TuDQ9S8DvG3eb%2FROV5AkSGcTbW4wYzCs7KpTqXUHJoWW%2FbGZ1lyCChO4hxPCuBHnoBy76lZqzELzZNaVMLLIvcAGOqUBOzcEh4zjcZB7GVBmhk0cnd7VUCOjqQ%2BQEawojmdNCT9HgUr1vk8uAsioSTpRw6xKtPp9NQ%2FaequIdhnvm5uYuz7m1gd7sNiT8dZVz7MyR8MmBNB7W6WvU4OBZ%2FKlMUpN%2BLS%2BdLtqJy4g33F8U4vPwDZsZ9MTDmRkwOVw45F7P%2Bz1MJktIK04H3gY4xGNfJnvr%2Fo%2FcgxEXJZ3aT2Seb0Sw6dNAolZ&X-Amz-Signature=6fe0c749186fb6b115ffe2b42c0e33e13a86dc63402a6ffd268773fb5dcebd05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FP5HCR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1VZSTYBepWn2UPm9a22MysT1s5ssnM1JOL2qOFxd%2BvAiAnCaySS3TVWiefcsXvyd8BXL%2FJ6bDw3w6rsDaRks918ir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMw47oRrNzLVWa2LIAKtwDASw4WzDw1FdE6%2BEK5C7y4ITVy8aA7vbKd6KtasaBjD31fHvBpvLVawNa0%2BVlhyPKAzUAkm3TlHcGUjSeaZyCOXRW%2BFvy51upwIPQKY2f83b49pfT30FjXylaeFwv6pa59BvP2TFrrFBlxl7MfppWsnDe5Jj1kWt4CvLyRaYC%2Fs%2FHUlFWpJpwPYnIdfhNoNeiOQxdm1YHzf60vcvH%2BPoJeFj4kdeKgWSswW81zlkLx4lwqzksYv0%2BwEfhSwy98QMmFGljtmgT6YZQHrjMDLgSL%2B%2F5XEkp4R31Z87%2FVtLtbUfs5iWUK%2FIpBqN43HTVW9n8L5uDvjk4Pl%2F8lMSvZPBo9En2S0vx1kPgORacHBbc1QqZ0PR9aU2wEvJIgUGx8bj6Z5xdkRM0T7oU7F%2BmdABm7qnjllm8D0AceRBOqrzVNuOB%2Bol72KG8oo14VoNVpYDJseNSHFwd8CJHM27l5eTmbGAJzaip2y8vVJScF1EsTFETNz0y02w%2BDzRVonCAwslWCB2ahh5dJn2XMnJ%2FGcspDycUfEC%2Bl1ybrB0BaYc107O8TOpcqUTp4za6fVs%2FkuRDUAtp7u3%2Fe%2FV6ZwutbyFkrJ%2BNxPxq5%2BMrRcL%2FsCB05B4%2B2I6cMplsAOA%2FtcQwhsm9wAY6pgHc1Y%2BwwkI%2FemO9VmnMSDWxdLDgpyuNv%2BvbhaVKU33RySC5b%2F1lHANClCMilz%2BSOAfWrW0Pxx72C9tI7o2U4M2zsn2c0tmDGjwTyJG4hUDmsZ0dkTMXz0tbyKpmEJpR4A7MQeLvIINDEGx0zGcE5a%2FYiPc9PDun3jtUqSM3Q4xPT6gi84I5CKk5c8p9GjRAal2L6K3V9P8NvbYzRSUD02XWcJKQwtxn&X-Amz-Signature=0c18a92d3098f4dcd588ba3749cc90eb72f95bfbb43fa8646dbf3e21a6f26f36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
