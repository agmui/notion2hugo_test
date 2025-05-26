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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZPDNM4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0rD7wBleceSFi%2FLR8xA8qj2fdGCJ0d%2FSFoDD%2FGdQzKAiBWRdEyiVX9ES4A9TE96nSq5%2BzaE9sVlYqVrGNejPoi5yr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQ9%2FA6wtGOB6JwNplKtwDkvYl6v5GRhmr56H9VRhwWN1JYFRqOR4KQr9u8A8Ub4r9sJWc4JsmnAYHkfL8CugjsJbEmbkNENSPiLKRqOgK%2Fx212jqmJe837NLztq%2FYz6aXcDMKzFkmsRD2QYxtyytbGuDawX1gAM3%2BaeuKle%2BZcgc5oKoNjcLvAc%2BCNHobddmhnBb%2Bk01opUyoA8Fig4CC2h%2BRsNedUnLHs9c5Iwr2uI9UmaMVTDWxK71e%2Flj6LN6%2BOKeCKF9L1zHme%2FPWijP7W8ifr8GM2HT5CqjXCoWwT1TFFgYtxkyZqvztKihkwcgO7CYNSCSF6W%2FVb%2F%2FZPf6btuuY%2FpvYsdIIXlC4o7ULt6oSY5A9uPZ5Eyv7nKLCblmNyjyz3IGoWOMycJWN8%2BsT8SD%2FL4CUvrTJBaAWPexIbfBPhWGlZB5rXDUKXmPySLLsrQeHAGcY6NJtj5HDkeN1r3mPMmcjxv8kcoAeRzzEApG19ttroXGNrcU4Ym%2F9nn9PRhcX%2FVVYG7fuQscElhJmpcimZECTHyemc%2Fbsc5T5gSWG2JkKjM2iSw5Yc2ToqVl0tPjXS68DLfSErMQJYtKcbkAhR%2FgCPoisCF9Z5Sx1Rmkd%2BZGn6iDdibiQRkPcbGldyoX3zQJ9nU9U5zMwxZLSwQY6pgHrEUxpSK%2Fvod24kGzPxQYkt8GmnjJI20yWESsysF4qcFiN30r5mdfUiUM2F%2BwPUuiVspQ13y6luHIsMWb5ATIuxg62NVcGnD9nq9wufkfSE2g%2FbQExQCupj1TCpvrPXg2tbHk0F61lBwOeQ3tQyFEjBhEmLKMFIfdeBQ9TygaNXaLC%2BKVMP2HvxbN9hsAlFvIQoRFEhNtIlGdHeTydBxdEf7kMiOIL&X-Amz-Signature=47c28d9130cc60ead3cb776f741e0291f562c275f3a6d040aff131f3f9425608&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZPDNM4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0rD7wBleceSFi%2FLR8xA8qj2fdGCJ0d%2FSFoDD%2FGdQzKAiBWRdEyiVX9ES4A9TE96nSq5%2BzaE9sVlYqVrGNejPoi5yr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQ9%2FA6wtGOB6JwNplKtwDkvYl6v5GRhmr56H9VRhwWN1JYFRqOR4KQr9u8A8Ub4r9sJWc4JsmnAYHkfL8CugjsJbEmbkNENSPiLKRqOgK%2Fx212jqmJe837NLztq%2FYz6aXcDMKzFkmsRD2QYxtyytbGuDawX1gAM3%2BaeuKle%2BZcgc5oKoNjcLvAc%2BCNHobddmhnBb%2Bk01opUyoA8Fig4CC2h%2BRsNedUnLHs9c5Iwr2uI9UmaMVTDWxK71e%2Flj6LN6%2BOKeCKF9L1zHme%2FPWijP7W8ifr8GM2HT5CqjXCoWwT1TFFgYtxkyZqvztKihkwcgO7CYNSCSF6W%2FVb%2F%2FZPf6btuuY%2FpvYsdIIXlC4o7ULt6oSY5A9uPZ5Eyv7nKLCblmNyjyz3IGoWOMycJWN8%2BsT8SD%2FL4CUvrTJBaAWPexIbfBPhWGlZB5rXDUKXmPySLLsrQeHAGcY6NJtj5HDkeN1r3mPMmcjxv8kcoAeRzzEApG19ttroXGNrcU4Ym%2F9nn9PRhcX%2FVVYG7fuQscElhJmpcimZECTHyemc%2Fbsc5T5gSWG2JkKjM2iSw5Yc2ToqVl0tPjXS68DLfSErMQJYtKcbkAhR%2FgCPoisCF9Z5Sx1Rmkd%2BZGn6iDdibiQRkPcbGldyoX3zQJ9nU9U5zMwxZLSwQY6pgHrEUxpSK%2Fvod24kGzPxQYkt8GmnjJI20yWESsysF4qcFiN30r5mdfUiUM2F%2BwPUuiVspQ13y6luHIsMWb5ATIuxg62NVcGnD9nq9wufkfSE2g%2FbQExQCupj1TCpvrPXg2tbHk0F61lBwOeQ3tQyFEjBhEmLKMFIfdeBQ9TygaNXaLC%2BKVMP2HvxbN9hsAlFvIQoRFEhNtIlGdHeTydBxdEf7kMiOIL&X-Amz-Signature=feebdce7f470bbf8069cebeef046ffb56f6890fc9e0aeb6aa9eaf62b98df2841&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZPDNM4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0rD7wBleceSFi%2FLR8xA8qj2fdGCJ0d%2FSFoDD%2FGdQzKAiBWRdEyiVX9ES4A9TE96nSq5%2BzaE9sVlYqVrGNejPoi5yr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQ9%2FA6wtGOB6JwNplKtwDkvYl6v5GRhmr56H9VRhwWN1JYFRqOR4KQr9u8A8Ub4r9sJWc4JsmnAYHkfL8CugjsJbEmbkNENSPiLKRqOgK%2Fx212jqmJe837NLztq%2FYz6aXcDMKzFkmsRD2QYxtyytbGuDawX1gAM3%2BaeuKle%2BZcgc5oKoNjcLvAc%2BCNHobddmhnBb%2Bk01opUyoA8Fig4CC2h%2BRsNedUnLHs9c5Iwr2uI9UmaMVTDWxK71e%2Flj6LN6%2BOKeCKF9L1zHme%2FPWijP7W8ifr8GM2HT5CqjXCoWwT1TFFgYtxkyZqvztKihkwcgO7CYNSCSF6W%2FVb%2F%2FZPf6btuuY%2FpvYsdIIXlC4o7ULt6oSY5A9uPZ5Eyv7nKLCblmNyjyz3IGoWOMycJWN8%2BsT8SD%2FL4CUvrTJBaAWPexIbfBPhWGlZB5rXDUKXmPySLLsrQeHAGcY6NJtj5HDkeN1r3mPMmcjxv8kcoAeRzzEApG19ttroXGNrcU4Ym%2F9nn9PRhcX%2FVVYG7fuQscElhJmpcimZECTHyemc%2Fbsc5T5gSWG2JkKjM2iSw5Yc2ToqVl0tPjXS68DLfSErMQJYtKcbkAhR%2FgCPoisCF9Z5Sx1Rmkd%2BZGn6iDdibiQRkPcbGldyoX3zQJ9nU9U5zMwxZLSwQY6pgHrEUxpSK%2Fvod24kGzPxQYkt8GmnjJI20yWESsysF4qcFiN30r5mdfUiUM2F%2BwPUuiVspQ13y6luHIsMWb5ATIuxg62NVcGnD9nq9wufkfSE2g%2FbQExQCupj1TCpvrPXg2tbHk0F61lBwOeQ3tQyFEjBhEmLKMFIfdeBQ9TygaNXaLC%2BKVMP2HvxbN9hsAlFvIQoRFEhNtIlGdHeTydBxdEf7kMiOIL&X-Amz-Signature=8b5adfb562967006e57205bc0d14b13a9d404ed8db5acf3073292874a4618f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWPUGMG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Iq73dzunZR54%2BVc6voQ1q06GW2sOKRsVrYqQX1Ie7gIhAL5O0QYte%2Bhni71ictZZQwOcQz3ygyRPkgE%2B772e7226Kv8DCEkQABoMNjM3NDIzMTgzODA1IgzXhePEOXYhNCx6J%2B4q3APQnwRtm6%2BS9%2FDTfreUQuGOEZDPNcVC25cENYqDv%2FZCPtP9z1Kh3zDWAEmABP5HO3pE4Dhkpr6uct9G%2BUVD2NDGAAqsE8ivFanLYSJdYR0QA6QST4Y4Q0sDQBddaWa5pQiL3u7QsafVHFEpqmxuZfg0pJVRNwKmFNY3gIaKdNJOTZUCLLOwmrDrtrG0OGarQuJ1Xohmakl8jy8zsFmW0h4iIcE%2FR2OucPw5lygdso5BdRgy7fJkY1R17niQueP5hO%2B9HITRq4QZubh1GQ6TTEJ8FxiWqaAKLkdEjibciqJqBshb%2BTwHblo3Vu7lrKv0AZa4dd70E%2FBFfWFqz7hiSDWS1PH%2B45vGn9Ab4WwoSCXfF4wQHI1FTpbRoHUcfVGnYOXqTg11i7%2FGbNUA9%2BgnO5yIo%2FLnRynz%2FM1Dyd2amnooJSoQn2UYrpMn%2FLiKnNnRH5k631%2FR%2Fbd5wUZoo6y5gIfyOXFCmGE%2BSfhTdUevvs0Tc8Z0s8qVtl0MJo%2Frhr%2BSIQiNAaxyM7Ntotv6KUbWc2efWm3AP%2BA6yUZ0vn%2FwKAAOHZqOgHLk9bZ1CeGFc9zOy6D0bxQDu1dbfXFgWneovjI0rblJ%2FFENC4amel2NPbU2i35BPaoOouHAXqiuyTDDktLBBjqkAWqoi5x%2BX6k9uo5imeUWY3tXas5ILyinHCkPeYDJf6aZ8T1y9LMCayYNlxGDin%2Btw3mmIqFpDIiKbLOiGxD1Ys%2BxsIDIYr%2BbkKAL7UHSMq0qN6o57jPc9Zj5cS7JeOKZxjphbdiDBDD0Op0DfuLy%2FxsLxK20qdETJrDR3rvJIWMvZkRV3JY3deXHSsjbhw98l5ogF4JlYB0XOsvvvgF2%2FqlKH5G1&X-Amz-Signature=d6d486004d333b33faf973b4fab1fce4b125a6690643cd5473563f334505e542&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VX3AIRU%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHadzZOoOyzWPWfyotfQlod8DnFy626gu8PO4BDuF6jyAiEA44nJjkcABVN%2FpzNziAnPJZ%2FJnfZY0cC6gTKn4J4qrvgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPHGXIqTBSW1dsMjsyrcA0DptK9LLTRirDvGbhxjmdZyYvxupzz%2F86WsfmRT49XWXKlhAq1ZShSTknZSz0gWoT7fcBcen0Y8svCkHj%2BHyHFpFJtsGdJTEkGTwG2faXzu0zbXlaAEVrS2CQsk37d%2BLekj%2FAFi5ZvYVLm9oKzdwgPPjCPZ0mD7L1VG6%2FsnL8%2B9vaoO72YURDWlv2u%2BkryusfxX4pqzajAF2lR9uHbpuME8dYtdm2yz40hcH3RU1g92ohwMeKANGZOr9NmcaFLCRO83UtDovPesXWXvyE%2B0wAGFIj9mRGnruLDzgEQun62x5MDdDuyb1z15P7B1BqprqzKfwh0%2FfY2fH9u24zpGeTnnWE4o5DmhVRjbQwZCam33VGC5yZZwdbR7ZF%2BpPVeFqZV27gpy27uZFFqaArWsXfG83QvaVhnpRaxJJZwCWg7hqmzYOBcdyOuK9dHjf7wC3utyF%2FL9aS6eBdbLSx5Ha%2FS72KgZdtLWW%2BifgQCm5GtuzwRfnVv8OT58cXwBIxpaQrGH5JjV8KFQcrjPFsZ5aWQ9yXZQ32lRILw4ME4Wo2%2BlYw7OeJZC8KY36xB9YS7jRdkyaNOlWQjcmFQJNg6bQjwR2Ci0sTaTzaNEROB%2BUxMWhRbcLA7msQw5JWkNMOaS0sEGOqUBfselks6lnrl%2B4rwFJnILk%2FOyF14R1KO95oQMUU8lFgmLR7EdLgyHlI%2BwaCRWu%2Bd1voHola5fk7vaNlPYk6zPowQQcMw6MSR1JsZatorGxxrhr8N%2Bqn%2FVaotiuMz3QAdpI4rb%2BzarWkm2XST6Z14AnOx6D9WfDeLqoqAW2LjtB%2BVM9RSeLrs0b3jUMjEknpFkXWSXNLX3UNVFvrVukf2W%2Fucjns0N&X-Amz-Signature=bb6ca8622a94a5023e05381d09c391137ea5ab06ec6733dbe2280b1d94710151&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KZPDNM4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0rD7wBleceSFi%2FLR8xA8qj2fdGCJ0d%2FSFoDD%2FGdQzKAiBWRdEyiVX9ES4A9TE96nSq5%2BzaE9sVlYqVrGNejPoi5yr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQ9%2FA6wtGOB6JwNplKtwDkvYl6v5GRhmr56H9VRhwWN1JYFRqOR4KQr9u8A8Ub4r9sJWc4JsmnAYHkfL8CugjsJbEmbkNENSPiLKRqOgK%2Fx212jqmJe837NLztq%2FYz6aXcDMKzFkmsRD2QYxtyytbGuDawX1gAM3%2BaeuKle%2BZcgc5oKoNjcLvAc%2BCNHobddmhnBb%2Bk01opUyoA8Fig4CC2h%2BRsNedUnLHs9c5Iwr2uI9UmaMVTDWxK71e%2Flj6LN6%2BOKeCKF9L1zHme%2FPWijP7W8ifr8GM2HT5CqjXCoWwT1TFFgYtxkyZqvztKihkwcgO7CYNSCSF6W%2FVb%2F%2FZPf6btuuY%2FpvYsdIIXlC4o7ULt6oSY5A9uPZ5Eyv7nKLCblmNyjyz3IGoWOMycJWN8%2BsT8SD%2FL4CUvrTJBaAWPexIbfBPhWGlZB5rXDUKXmPySLLsrQeHAGcY6NJtj5HDkeN1r3mPMmcjxv8kcoAeRzzEApG19ttroXGNrcU4Ym%2F9nn9PRhcX%2FVVYG7fuQscElhJmpcimZECTHyemc%2Fbsc5T5gSWG2JkKjM2iSw5Yc2ToqVl0tPjXS68DLfSErMQJYtKcbkAhR%2FgCPoisCF9Z5Sx1Rmkd%2BZGn6iDdibiQRkPcbGldyoX3zQJ9nU9U5zMwxZLSwQY6pgHrEUxpSK%2Fvod24kGzPxQYkt8GmnjJI20yWESsysF4qcFiN30r5mdfUiUM2F%2BwPUuiVspQ13y6luHIsMWb5ATIuxg62NVcGnD9nq9wufkfSE2g%2FbQExQCupj1TCpvrPXg2tbHk0F61lBwOeQ3tQyFEjBhEmLKMFIfdeBQ9TygaNXaLC%2BKVMP2HvxbN9hsAlFvIQoRFEhNtIlGdHeTydBxdEf7kMiOIL&X-Amz-Signature=c641fb5ffb02659a79653e8d891393c59ad9ddb6cb7152c481bdd809566c33dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
