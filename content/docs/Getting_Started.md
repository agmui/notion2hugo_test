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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DM5QSN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYZOwa9POxTDqYE6DknZxCBYZ6TPolY6iw%2F9LrmcCRgAiB13zBod%2FnS1wt4GnG7KTIKjbsNcDS360w91dKRkTIfHCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFExs1Lj0Y9DXDC5DKtwD9JLwiK3xjPzP0yqxlefWKA79JWCTrzxnFxHFmqakySkdSsbdlEyRbBQ9TFP6MjryS3mji6Wnpi4p8Q8RlOoRctQwqeDWGdRpb5FJY8816GtpXglPHazAWIX1zYky%2F6h9lTY8%2FgCiXN%2BdQ3lD8AbdIgodC2visTuW8xHTH4Drgx0e%2BpdSKHtO4tbBxeQPeOOg85MUlqxPavoXAfLc0W1I7GVJ3xqlKXtVI36HDpe7e04Je6wIrT6X2MAIxoRoqXbobKVVpvUVNr%2Fd5IFFhP9hKIt4TUybC9REZA%2BrSARnMiUN7%2Bmt0f6d%2B%2B4IRwXngTUSqti%2FO1bNlw6yFwYbWZaaL6EFNyBR5IM1GA6u4ZxnKGb9BCiXpxp9QqN4S3XruYC9gX2XPzV6YrH9JlVWxmRBckHtyJrZGIlEbANpbbsofNu%2BL3PpMz1V1LROv8%2Bhazbbs%2FvDT%2FHZ%2FycQbS%2Fc1f%2BbZ065klPzDZ6gIumxvZn%2FxTcUE6yt%2F9oE7rcrCZZEgLms4GwRalYxMQgz%2BJjrUu8fVPAmPlwNPfLJ2ruwMDR0OSoF8IIL6mLRD9l1j5c4GWb%2F4YZBQa23gn97mr7wOU4jAyGx%2FdmB6lpmcyHQr2W8XhSKpHqWtzkpsbPU%2B1Uwsa3MwwY6pgFeK5N0Wrj6Wuur%2FecMM0CGvmQUFfjR8zZcqzB7EtmbAUqAjee75zrHbKUkY46j6u1RnzEBFaxKuT%2B1EzOr0Ow7UJz3wgplNTCwlXVxOHJUti2napUooMk0QFkb8S%2BuK4JTjDBwwQ20QsXUruUwZz7hkISm9P777NPzPeBCIw5eWFIxlQxEUkcEUdOHzVMmIh%2BgLv%2B%2FsOIdHd2ItwGMQv7zqQfujgan&X-Amz-Signature=698787f4fe5c87ee19a71571aff45933545bb18f876f233eb04da3c4284579d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DM5QSN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYZOwa9POxTDqYE6DknZxCBYZ6TPolY6iw%2F9LrmcCRgAiB13zBod%2FnS1wt4GnG7KTIKjbsNcDS360w91dKRkTIfHCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFExs1Lj0Y9DXDC5DKtwD9JLwiK3xjPzP0yqxlefWKA79JWCTrzxnFxHFmqakySkdSsbdlEyRbBQ9TFP6MjryS3mji6Wnpi4p8Q8RlOoRctQwqeDWGdRpb5FJY8816GtpXglPHazAWIX1zYky%2F6h9lTY8%2FgCiXN%2BdQ3lD8AbdIgodC2visTuW8xHTH4Drgx0e%2BpdSKHtO4tbBxeQPeOOg85MUlqxPavoXAfLc0W1I7GVJ3xqlKXtVI36HDpe7e04Je6wIrT6X2MAIxoRoqXbobKVVpvUVNr%2Fd5IFFhP9hKIt4TUybC9REZA%2BrSARnMiUN7%2Bmt0f6d%2B%2B4IRwXngTUSqti%2FO1bNlw6yFwYbWZaaL6EFNyBR5IM1GA6u4ZxnKGb9BCiXpxp9QqN4S3XruYC9gX2XPzV6YrH9JlVWxmRBckHtyJrZGIlEbANpbbsofNu%2BL3PpMz1V1LROv8%2Bhazbbs%2FvDT%2FHZ%2FycQbS%2Fc1f%2BbZ065klPzDZ6gIumxvZn%2FxTcUE6yt%2F9oE7rcrCZZEgLms4GwRalYxMQgz%2BJjrUu8fVPAmPlwNPfLJ2ruwMDR0OSoF8IIL6mLRD9l1j5c4GWb%2F4YZBQa23gn97mr7wOU4jAyGx%2FdmB6lpmcyHQr2W8XhSKpHqWtzkpsbPU%2B1Uwsa3MwwY6pgFeK5N0Wrj6Wuur%2FecMM0CGvmQUFfjR8zZcqzB7EtmbAUqAjee75zrHbKUkY46j6u1RnzEBFaxKuT%2B1EzOr0Ow7UJz3wgplNTCwlXVxOHJUti2napUooMk0QFkb8S%2BuK4JTjDBwwQ20QsXUruUwZz7hkISm9P777NPzPeBCIw5eWFIxlQxEUkcEUdOHzVMmIh%2BgLv%2B%2FsOIdHd2ItwGMQv7zqQfujgan&X-Amz-Signature=597145542d9ee05902b1e49c214ef81b705ffea365dd48aafa07ebeeca510c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DM5QSN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYZOwa9POxTDqYE6DknZxCBYZ6TPolY6iw%2F9LrmcCRgAiB13zBod%2FnS1wt4GnG7KTIKjbsNcDS360w91dKRkTIfHCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFExs1Lj0Y9DXDC5DKtwD9JLwiK3xjPzP0yqxlefWKA79JWCTrzxnFxHFmqakySkdSsbdlEyRbBQ9TFP6MjryS3mji6Wnpi4p8Q8RlOoRctQwqeDWGdRpb5FJY8816GtpXglPHazAWIX1zYky%2F6h9lTY8%2FgCiXN%2BdQ3lD8AbdIgodC2visTuW8xHTH4Drgx0e%2BpdSKHtO4tbBxeQPeOOg85MUlqxPavoXAfLc0W1I7GVJ3xqlKXtVI36HDpe7e04Je6wIrT6X2MAIxoRoqXbobKVVpvUVNr%2Fd5IFFhP9hKIt4TUybC9REZA%2BrSARnMiUN7%2Bmt0f6d%2B%2B4IRwXngTUSqti%2FO1bNlw6yFwYbWZaaL6EFNyBR5IM1GA6u4ZxnKGb9BCiXpxp9QqN4S3XruYC9gX2XPzV6YrH9JlVWxmRBckHtyJrZGIlEbANpbbsofNu%2BL3PpMz1V1LROv8%2Bhazbbs%2FvDT%2FHZ%2FycQbS%2Fc1f%2BbZ065klPzDZ6gIumxvZn%2FxTcUE6yt%2F9oE7rcrCZZEgLms4GwRalYxMQgz%2BJjrUu8fVPAmPlwNPfLJ2ruwMDR0OSoF8IIL6mLRD9l1j5c4GWb%2F4YZBQa23gn97mr7wOU4jAyGx%2FdmB6lpmcyHQr2W8XhSKpHqWtzkpsbPU%2B1Uwsa3MwwY6pgFeK5N0Wrj6Wuur%2FecMM0CGvmQUFfjR8zZcqzB7EtmbAUqAjee75zrHbKUkY46j6u1RnzEBFaxKuT%2B1EzOr0Ow7UJz3wgplNTCwlXVxOHJUti2napUooMk0QFkb8S%2BuK4JTjDBwwQ20QsXUruUwZz7hkISm9P777NPzPeBCIw5eWFIxlQxEUkcEUdOHzVMmIh%2BgLv%2B%2FsOIdHd2ItwGMQv7zqQfujgan&X-Amz-Signature=aec7b3bb0c8731db04ec8bfb652cf8f68dd00abad6e649244fd891994167f8bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKKJJIB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd6mhaTf%2Fdjtu04wNzTxs0WtGLSSAJK5vlBSG4S7PKqAiAb0B%2F%2FDZD5JmafZatGsVZLFDYDI1iq77UNuikKJ01xUCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmv0V63Ui40RU8cblKtwD78WP4qSA6phBDDNBXYfDHE48ECfEGMIvRp4F4xW3uxSBNMUk6dEW4AgsC8kVk5d7747YBDyYFWqul%2BEoCArZZk2E8JH6uxkmnSr6PKmH0E7nT%2FvsaECIVFLEALPtheZVjJGxDGd%2F6KHZb9oUvhuYybmX1vJW1KiVfgelDNxRlqHK%2FiDmXDx4nKfiHi7nrutHuanjcclR9hHS4U7M2dN5Oi3fDNYYBWFTTWHMYqPw0mSiT4kiBV%2BN36bxXk2c%2BsgH5nX%2F%2FBUuJLZJ5PVMVFaOR2D7vQfDnjIXklAGgnGn57kWf1B068D46pPJaYgXYHV2DiQV7PrznwYEcz28ugSPQIeCbpJ6ezdaDOd%2FQEEifGHItpg843RTSJfC22OsmCB8Ct4CoGOm2UKMGKpG9GRWqHuvncDeyY%2Bd1%2BpMYw7RPBj2dTNwDa1T2Bi%2BSWuvQoUevxzxaL3EmA5hXjV1z%2BbsAg8Tf0bxJuwUz872pkYxPY1mepUz%2FYWf0EciPthGz0jLw58E8umFNW9tIQkbV0jQ7FajtwpxPNvcXt6yw%2FJDaZ0mHG6xP92tREfe8PqIMa5VukLWnMyLYm71MeKxLd4RWVOw9ep%2F6fcvuEF%2B850cknFAYetksHBe1tjT%2Fi0wq63MwwY6pgFo3%2F2LBfLa5L63lf6XeahHLx7tuLsQfITopbtKHLV%2BErDrPmivRyfxboMhR2uzXQxq9icok%2BbTI0J20NY5NWR%2FpqAgG0qWOnB4RdqmVRNruuB4aMGZUTkcwUoahudUhfof822o%2Fdt6teWKYBiTTSe6kRjsdFNg0v3Ia1kar593KSos2BOWSL0kZPBqlAbxIK3qxyBjOqKbIzUft%2FQ6AZNcbS74yxgA&X-Amz-Signature=79dace773d508ec15584a29f465b9870af660cadc0c802b3ba6050041c2173e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEWSPVC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuIzM61XVkC4%2BWTl6CPAR%2BHF0vUFdksY6FOUQuhmL2wAiEAkkU0QzZasYEYZXTPrbAfJwC7iL2K91zBXs0Ul01DhmEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOhSb%2B6%2FpOOyuFqsCrcA1AlRU6r%2BBl26yXFh8k7DX7iHb7E3DawPf9FVLsJFNKpUArHSLQDh3r%2BWpqmdwBcAe1ZJzs%2FGyd1%2F1ppNO2uqob0jY%2Byt53slK8GWUwkIvupxygSRCNW6fiuJhW1Grf59jkY7rouUCsFQj4SzVVC%2FrkNDBlrCUdsj%2FKNS3Tz0z09%2FHBEyL%2FAvvZMo8xlkBzd10AMPB2QnOaTAYYgN2SzsuiGoQ4Cf%2FzUB6FOqw9%2FWUL1OWPl4mEJLtmORK5aDZj8UZaKB4rMDl2GC%2BkZCHp8C7aZNAGpMjzei7Mde%2Bo%2FvqS3YK3EBbqGaNNcjHfBvgZzczYkjHsNmF%2Buavy5yXVzsUcQlvw2QR1xfqEsHHwyc1cod%2FrKp9tBJ7CulSWb%2BNwKtNr%2F0HWTEuPlaoJX4cIKUX3tDgDe9TMbZkZLgPMmXPgkDaficB7bCHOSKb17h7vOUhlnILoF1F4fEYWU27v7WEO9EE34aWzIFmRC5iNYbV92%2BJvexm2AbNGHLXZEAX7W93ACVGhSdpdCvbXbtLsTBEjcJGHnU80d17pknoa7pgS93xjUVrBJVOlDUXxSY4eybFcMK9SsAHS0pfX7%2FAT3DI9cBKPmWAyTUtQYTezVeSjUH%2FS1qWoyb4QoFS0YMK2tzMMGOqUBpOXAvhX2kg%2BwDhkf4apfe%2F88bX5JUvPni0a5CmLhgE33she%2FatYK2YGhjKI0rCphUXzEHHYmDh6W48ERNXtayc1uZtJUceKXu6NUpvtcAhTK7D4%2FlXxiov9gyqVKYplq4mzHlhB1E7y%2B9BSGIPOq0Bk2thLoYjN8FjSEp6ngFp830A2t4fhb53j2AnYKxS9CQmMfPRlOWT0feMDRagQBT5MLj6c7&X-Amz-Signature=3eea79ee5df628182ffce78ee913432d416ce541b99791558b7b22318516b81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DM5QSN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYZOwa9POxTDqYE6DknZxCBYZ6TPolY6iw%2F9LrmcCRgAiB13zBod%2FnS1wt4GnG7KTIKjbsNcDS360w91dKRkTIfHCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFExs1Lj0Y9DXDC5DKtwD9JLwiK3xjPzP0yqxlefWKA79JWCTrzxnFxHFmqakySkdSsbdlEyRbBQ9TFP6MjryS3mji6Wnpi4p8Q8RlOoRctQwqeDWGdRpb5FJY8816GtpXglPHazAWIX1zYky%2F6h9lTY8%2FgCiXN%2BdQ3lD8AbdIgodC2visTuW8xHTH4Drgx0e%2BpdSKHtO4tbBxeQPeOOg85MUlqxPavoXAfLc0W1I7GVJ3xqlKXtVI36HDpe7e04Je6wIrT6X2MAIxoRoqXbobKVVpvUVNr%2Fd5IFFhP9hKIt4TUybC9REZA%2BrSARnMiUN7%2Bmt0f6d%2B%2B4IRwXngTUSqti%2FO1bNlw6yFwYbWZaaL6EFNyBR5IM1GA6u4ZxnKGb9BCiXpxp9QqN4S3XruYC9gX2XPzV6YrH9JlVWxmRBckHtyJrZGIlEbANpbbsofNu%2BL3PpMz1V1LROv8%2Bhazbbs%2FvDT%2FHZ%2FycQbS%2Fc1f%2BbZ065klPzDZ6gIumxvZn%2FxTcUE6yt%2F9oE7rcrCZZEgLms4GwRalYxMQgz%2BJjrUu8fVPAmPlwNPfLJ2ruwMDR0OSoF8IIL6mLRD9l1j5c4GWb%2F4YZBQa23gn97mr7wOU4jAyGx%2FdmB6lpmcyHQr2W8XhSKpHqWtzkpsbPU%2B1Uwsa3MwwY6pgFeK5N0Wrj6Wuur%2FecMM0CGvmQUFfjR8zZcqzB7EtmbAUqAjee75zrHbKUkY46j6u1RnzEBFaxKuT%2B1EzOr0Ow7UJz3wgplNTCwlXVxOHJUti2napUooMk0QFkb8S%2BuK4JTjDBwwQ20QsXUruUwZz7hkISm9P777NPzPeBCIw5eWFIxlQxEUkcEUdOHzVMmIh%2BgLv%2B%2FsOIdHd2ItwGMQv7zqQfujgan&X-Amz-Signature=d696561a7ce9ddff17701259652af43116b58f7a82655f6433065bc1a82d676e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
