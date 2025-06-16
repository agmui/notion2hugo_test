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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4TIYA4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD8JfES6GI7svDk68Zq%2BA5llFcoUtimtzQLfDr9SE0zIAIhAKf65jLbkfSoKDReE3VyQ7EgS0E7yjgf8yTR2axbNMmxKv8DCFwQABoMNjM3NDIzMTgzODA1Igz8A2f9GjAur4rm%2B2kq3AOyB6m4yx4eecKpzK770WVoAfJYgpruqqLuInG5SFZHTBQFU8UnvrehJtPheJjk5LuLpt6mqQBPM0McjhuMfSqU9HFg2VpLrgk2CHYqB9Mp3X7QuBMXCsChVVBJzRoFaKZczNeL1LC8es5p2SmPAgeROgb%2BDbk4Bd%2FC1vWEoZNlMF6hbWTfdOirudWJ4Yf1hu5YnZ9tYlN6I9Ho8iXUdfLjr5I1gdlNj5w%2BdQGJySg%2Bia%2B7eRRRvxLUbnIC7P4gxJQrckc6W16ufkPTWAyrItt1DyfSsu8Tdct7Q6gafBlrakn%2FVBOGvpf3fnD%2B%2BYl45VZdy90Nh0Y87T6zcIMs6P1BYsRMNc7%2F0k%2BuOU9W4tR2A%2F%2FIecQdoJN6gmPimuaS7APXLKpB6do2jbaB5YTTf5Uk9Pz5unyhoOk7K78AKrHNmY2RG%2F0YSulGUFphtEH8aNeEgftNnBxT9Qyvgam%2FRLip0vhIK556N1l6chKHa3p36UUtp6XYfrwNDl2lHCmV6rshXujLg%2FNVOqbEUNIVxRbZgEsAU0LwBs71IzNE6gGw0wW7fkOQ0tI824tofzZV%2B1kQZ5yZ6TwvncLKskBL33FfuYcucIYR7YcMIwRktwa9VPvsoGcmDGrrcG0HmzCu47%2FCBjqkAWMm1pWeTb0gwBYdc%2FYNN8vgf34R%2BjVHNnJuOrnZjnymVOfPdV3MA0dCTMeGXnruf44mEuQ1XK8o1s%2BIi6c%2BtVmCvF6YNmbYj0niKqHg4x1VZM1xTFn7FK8TJ6WF0RdA7%2Byqk508x%2F8TpasSa4rpqwIvotEYEXhgr%2FrWxjRACTtgWl3mpAVEftUTTCbBuQP9jUcf2YUFmz0kqWSJ7rigX8Ajjg0F&X-Amz-Signature=53626b8c52f678025c4b29c16e824b7c496a5e007f7b4b21899b1a725c45d0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4TIYA4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD8JfES6GI7svDk68Zq%2BA5llFcoUtimtzQLfDr9SE0zIAIhAKf65jLbkfSoKDReE3VyQ7EgS0E7yjgf8yTR2axbNMmxKv8DCFwQABoMNjM3NDIzMTgzODA1Igz8A2f9GjAur4rm%2B2kq3AOyB6m4yx4eecKpzK770WVoAfJYgpruqqLuInG5SFZHTBQFU8UnvrehJtPheJjk5LuLpt6mqQBPM0McjhuMfSqU9HFg2VpLrgk2CHYqB9Mp3X7QuBMXCsChVVBJzRoFaKZczNeL1LC8es5p2SmPAgeROgb%2BDbk4Bd%2FC1vWEoZNlMF6hbWTfdOirudWJ4Yf1hu5YnZ9tYlN6I9Ho8iXUdfLjr5I1gdlNj5w%2BdQGJySg%2Bia%2B7eRRRvxLUbnIC7P4gxJQrckc6W16ufkPTWAyrItt1DyfSsu8Tdct7Q6gafBlrakn%2FVBOGvpf3fnD%2B%2BYl45VZdy90Nh0Y87T6zcIMs6P1BYsRMNc7%2F0k%2BuOU9W4tR2A%2F%2FIecQdoJN6gmPimuaS7APXLKpB6do2jbaB5YTTf5Uk9Pz5unyhoOk7K78AKrHNmY2RG%2F0YSulGUFphtEH8aNeEgftNnBxT9Qyvgam%2FRLip0vhIK556N1l6chKHa3p36UUtp6XYfrwNDl2lHCmV6rshXujLg%2FNVOqbEUNIVxRbZgEsAU0LwBs71IzNE6gGw0wW7fkOQ0tI824tofzZV%2B1kQZ5yZ6TwvncLKskBL33FfuYcucIYR7YcMIwRktwa9VPvsoGcmDGrrcG0HmzCu47%2FCBjqkAWMm1pWeTb0gwBYdc%2FYNN8vgf34R%2BjVHNnJuOrnZjnymVOfPdV3MA0dCTMeGXnruf44mEuQ1XK8o1s%2BIi6c%2BtVmCvF6YNmbYj0niKqHg4x1VZM1xTFn7FK8TJ6WF0RdA7%2Byqk508x%2F8TpasSa4rpqwIvotEYEXhgr%2FrWxjRACTtgWl3mpAVEftUTTCbBuQP9jUcf2YUFmz0kqWSJ7rigX8Ajjg0F&X-Amz-Signature=641d81064ff429e893c8ec7ef18f03598f846a274169548fdfd1d7081724aaad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4TIYA4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD8JfES6GI7svDk68Zq%2BA5llFcoUtimtzQLfDr9SE0zIAIhAKf65jLbkfSoKDReE3VyQ7EgS0E7yjgf8yTR2axbNMmxKv8DCFwQABoMNjM3NDIzMTgzODA1Igz8A2f9GjAur4rm%2B2kq3AOyB6m4yx4eecKpzK770WVoAfJYgpruqqLuInG5SFZHTBQFU8UnvrehJtPheJjk5LuLpt6mqQBPM0McjhuMfSqU9HFg2VpLrgk2CHYqB9Mp3X7QuBMXCsChVVBJzRoFaKZczNeL1LC8es5p2SmPAgeROgb%2BDbk4Bd%2FC1vWEoZNlMF6hbWTfdOirudWJ4Yf1hu5YnZ9tYlN6I9Ho8iXUdfLjr5I1gdlNj5w%2BdQGJySg%2Bia%2B7eRRRvxLUbnIC7P4gxJQrckc6W16ufkPTWAyrItt1DyfSsu8Tdct7Q6gafBlrakn%2FVBOGvpf3fnD%2B%2BYl45VZdy90Nh0Y87T6zcIMs6P1BYsRMNc7%2F0k%2BuOU9W4tR2A%2F%2FIecQdoJN6gmPimuaS7APXLKpB6do2jbaB5YTTf5Uk9Pz5unyhoOk7K78AKrHNmY2RG%2F0YSulGUFphtEH8aNeEgftNnBxT9Qyvgam%2FRLip0vhIK556N1l6chKHa3p36UUtp6XYfrwNDl2lHCmV6rshXujLg%2FNVOqbEUNIVxRbZgEsAU0LwBs71IzNE6gGw0wW7fkOQ0tI824tofzZV%2B1kQZ5yZ6TwvncLKskBL33FfuYcucIYR7YcMIwRktwa9VPvsoGcmDGrrcG0HmzCu47%2FCBjqkAWMm1pWeTb0gwBYdc%2FYNN8vgf34R%2BjVHNnJuOrnZjnymVOfPdV3MA0dCTMeGXnruf44mEuQ1XK8o1s%2BIi6c%2BtVmCvF6YNmbYj0niKqHg4x1VZM1xTFn7FK8TJ6WF0RdA7%2Byqk508x%2F8TpasSa4rpqwIvotEYEXhgr%2FrWxjRACTtgWl3mpAVEftUTTCbBuQP9jUcf2YUFmz0kqWSJ7rigX8Ajjg0F&X-Amz-Signature=78e0d5bac9cc35676cacbec19fe33d3cfa278908a3ada70aa6b5d1d663f52847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUT7JVL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIArD08dhzVuES7DIXmc64QWafzHvuz5YeKqQGdd1uEHmAiEA4ubjdDx4BSmwepZ0YiQyeURxfJ2QTVlNyCnT2o4s6Esq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL4CIKiy0k1i4HBgCyrcA6DOR4Jog%2FBFO1DhI9W%2BzGDZKydBeEQ2SJf11OCBVb18QxKNQwDwSowoc9WSkI7PTH72aaVgGgo4hB8BkJOetZWCjltYTeRDJrJLG9P9M%2Fr6ilmQSbGN76CydpLW1UV%2Fdj%2FVouoNiF82mUmGN6CEmFBvD2C4lD5oTaqUr1MO2DpBV2r0%2F6rep1PauxI1fNi%2BlPtLv1kmaPmW2laJMBApnnuwzb76lpYqaR2Jmfio7KfWOGb0cXsnBEv8vnX0rOblxn7JImoC%2F79sDl%2BZ6o5Phod%2FMCy00LSkff5ODZWGPM97iqeZJXn80ymIaBGE3U%2FQem%2BMyginw9Dlc9KShxeH0EUIaPtjRUWagbq%2BHGoij1TBTTKDs0nodITefgw1PQUhbdNHWZhI0gN2sRKiRDBds9262p61BT1NWoZZr58amTx9jBFPQr43kHBW%2FEo%2BdTFSTJGFOpxZrldp2dgB36FU52sQXohbNalx5k9igK0H97bpSkfp0JskJCOki7UDCk%2BWHVHDjOft6ybG0OvVvRaWyAa8ivc6HtGOFvjZaJLfWV8u4hxEf4xKRPzo8LNFjhh1jA3nV7IspHRTciW%2FCMGmqd284nVDRhNFgOMiSNLOTusLIo4X3X5djAL6WyQLML7jv8IGOqUBGHwPIF2dj2edBI0i976ULKWdy%2Fb%2FSPVYpXb5WJKIP5cqZpuzGuOUU0O1rCBmcYQ1MM3A%2FciUj9UwYjX7eGK%2Bm%2FRxZUvq1F11j9NaQBaEW4mxCw41OsEbdrJtttdFq4ts1Agpmsn6p%2B0Pl7QbjM2VouC45JNPMfXG3WjqMWTkigmn0boV4nSLodnhy85X91Zl9ywOBT%2B3hSPSSUXcU3xHcUtjXHUk&X-Amz-Signature=96ea77a61f3e09e97577bd24e502221d173a5afd10f410d6783ba34cadad913c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQP4WVG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICMkLaN4sNgHttV1rcSzLGfSaUM0Sz5fgasmgGTbrnakAiEA1N%2BAHn30EB6uIdIaymfScCyyoELHSE8eeJVhOCTVhPgq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB5XSY8L1C9ueJUqAyrcA%2BsLVBsdnfx5DQabUdhy49jljZm%2BJ1Jk6ZePndusN%2BQWuapufbni9we1tmZbOukGe0W0kUzPAnc%2B6bOBSayEC8vYvg8aKWSlvg8sqKWSBGaclIuDtGTVXFDYQrUTMsylo1sAM0tMpqbbN%2FCsG2s56WM12KSND%2Fma2V1SRMn32fJtV%2FyqBOCa1zHAbsVwt2F186iNGrThLF3oZMoiPP9cjBj5%2F6Bvl5Fop1zN1siRauWyV1H1uTeaHyfKqWnnr777RFse1NkyDCrfV2V1hrZ7H3PemoiqNYXvPj4Um8MN0SH7l1PszTI9G5n3SL70v93815UVqsXaJDsqpMcUOppIgUs%2B%2F7SjPB7dnB6Ja7VTZMfPrFIL0Rlg%2BBAMQCNQbot4pDWVcotIWLajvb7Wtj%2FC%2FqPiOwpakaT48eW%2B5ULEUiy4%2F8MyYZ9gs00U19U9nGmORJWuJ8cj1%2FuVOJXfPbUeP2ahTIreNgDQZfmxhbeMI%2BpGOndcX7StJIc3R%2BA2ftaUBSWc1bbpMzGMK%2FRr6lQMRlAjcuATfHnL2dJxGTcLcxaJm0sUnpcob8mlSGK6svnvoU9at5gP%2FEjcjOOLA%2BQzY%2F4Hgl4Ajb1Kis00QA3Xaf2i01xVMqoUWuV%2Fp4%2BvMLvzv8IGOqUB0glTCSpP4oKRORu3W%2BgGGuMUECVHYYogjLlB4JVa32B%2BNy6uxvrpjxa6XkVwJdYlPmqs9F3lOg0tDzQoIa8C8C0ZsySCOX%2FBn3d%2Be9AxyHIJKXVDY8Gzspf5TouVNGmyjEc4Ez74whVnpj2P5K7x%2BSXr%2BBz6o7QkQQEOapT51tybNDI7%2BvsA9OoOqvA2Z%2F%2B36HWe2qf5bSIES9yDeGEiPqrekB04&X-Amz-Signature=c209b0951cb615edaf4144033e2fb459ad646701af42fa71ee57236db53067b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4TIYA4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD8JfES6GI7svDk68Zq%2BA5llFcoUtimtzQLfDr9SE0zIAIhAKf65jLbkfSoKDReE3VyQ7EgS0E7yjgf8yTR2axbNMmxKv8DCFwQABoMNjM3NDIzMTgzODA1Igz8A2f9GjAur4rm%2B2kq3AOyB6m4yx4eecKpzK770WVoAfJYgpruqqLuInG5SFZHTBQFU8UnvrehJtPheJjk5LuLpt6mqQBPM0McjhuMfSqU9HFg2VpLrgk2CHYqB9Mp3X7QuBMXCsChVVBJzRoFaKZczNeL1LC8es5p2SmPAgeROgb%2BDbk4Bd%2FC1vWEoZNlMF6hbWTfdOirudWJ4Yf1hu5YnZ9tYlN6I9Ho8iXUdfLjr5I1gdlNj5w%2BdQGJySg%2Bia%2B7eRRRvxLUbnIC7P4gxJQrckc6W16ufkPTWAyrItt1DyfSsu8Tdct7Q6gafBlrakn%2FVBOGvpf3fnD%2B%2BYl45VZdy90Nh0Y87T6zcIMs6P1BYsRMNc7%2F0k%2BuOU9W4tR2A%2F%2FIecQdoJN6gmPimuaS7APXLKpB6do2jbaB5YTTf5Uk9Pz5unyhoOk7K78AKrHNmY2RG%2F0YSulGUFphtEH8aNeEgftNnBxT9Qyvgam%2FRLip0vhIK556N1l6chKHa3p36UUtp6XYfrwNDl2lHCmV6rshXujLg%2FNVOqbEUNIVxRbZgEsAU0LwBs71IzNE6gGw0wW7fkOQ0tI824tofzZV%2B1kQZ5yZ6TwvncLKskBL33FfuYcucIYR7YcMIwRktwa9VPvsoGcmDGrrcG0HmzCu47%2FCBjqkAWMm1pWeTb0gwBYdc%2FYNN8vgf34R%2BjVHNnJuOrnZjnymVOfPdV3MA0dCTMeGXnruf44mEuQ1XK8o1s%2BIi6c%2BtVmCvF6YNmbYj0niKqHg4x1VZM1xTFn7FK8TJ6WF0RdA7%2Byqk508x%2F8TpasSa4rpqwIvotEYEXhgr%2FrWxjRACTtgWl3mpAVEftUTTCbBuQP9jUcf2YUFmz0kqWSJ7rigX8Ajjg0F&X-Amz-Signature=073d1a2a42dbb6374541cfb0c108ae1e54e5e1dbdeeb5918731a621c0fd498bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
