---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PNZPPW%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr4e7erog5vt%2FkkkjjAHYY3MhT5R9HgphkmrzR4j9j7AiAVqBSGmozM0asjzza0mSM7YJSfBN34By1tAx4%2BdFXTUyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAt%2BFdSHsuZ49VAxwKtwDIq8FEpzw8MpbsWUtvSjwB9jL1e7vnUckp3hqq6IuwCPAEkdzdjyuKDYKBce4n5Fld7spF67W6eV%2BVKjdG5Jmkuptv2usk%2FwwpGrVGwr9OvhrZyvuIpU8MGUvzcCm9qpIGAzesWzzd4vxWtWlL9VzZoldMsS67YMRf46u%2BTrYx%2FMztXC9PYnO%2Bv%2BvHz3AW9g%2F7MOxPw6XKv03c5RL%2BCa%2BF5JKrKJgXk%2BQWDsj6wrqbihgtPittXTx3c2UGRimqV2at72GED9PQ%2FKtNb2riTkoiElo8AykhKHBpGsn6QMQR2mrRagtnh5qgLsj6DvPGHKVSGYP2uXaSECa3NGiYhAlfk16c7pMsQfqyjVH2wdGxFwgdOmthJIpu8Mks7SDIIkROkRQKPGHCZAjcXpfXNSUqFIzrtqPxOM%2Bv47pIqiQ0aZf3iegItCG74kv3RxibXFKPdskXUMAJexNISjsjwu8JcGJd%2BrIRlYGph6NJi8vpPszERrn8ZCgfuAf0D8eiUV5xJTYHa0frAdQRurNWHHQP4kusbq3%2FAtBVZg%2FEgNUAYdsp3HsDiB%2FliSYSrwX7Ao5EvJMqwTwX7zqp87Hm%2BODfRFlou2vItpCBWryz%2FraOJ8LnFNnIOplq7Wq8zwwztimxwY6pgHljKtNFeLH7xrxsSMwqq8zPyZ3Qr3%2BNCUkhuHDC2L2ba9u%2Bx7I20PFAEOIrQu0EsmCNOSvHdXpgR6JqytSbv7VI%2BQrYpZNoA4vU%2B1VfL0jsPu00QYkgWuGoXnyGqutqiMN2YAqca42Cc%2FbvXokeqisiSEG%2FuJ5d7SiGcre44HbBzAgbAjC8PweQSsl4283AmF2qVegz9QTNWVaNZOnIfBopFwwTjKr&X-Amz-Signature=734817f7de28af35095256eb8a014d69b30d81f96bbf3485702bd192d64b841e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PNZPPW%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr4e7erog5vt%2FkkkjjAHYY3MhT5R9HgphkmrzR4j9j7AiAVqBSGmozM0asjzza0mSM7YJSfBN34By1tAx4%2BdFXTUyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAt%2BFdSHsuZ49VAxwKtwDIq8FEpzw8MpbsWUtvSjwB9jL1e7vnUckp3hqq6IuwCPAEkdzdjyuKDYKBce4n5Fld7spF67W6eV%2BVKjdG5Jmkuptv2usk%2FwwpGrVGwr9OvhrZyvuIpU8MGUvzcCm9qpIGAzesWzzd4vxWtWlL9VzZoldMsS67YMRf46u%2BTrYx%2FMztXC9PYnO%2Bv%2BvHz3AW9g%2F7MOxPw6XKv03c5RL%2BCa%2BF5JKrKJgXk%2BQWDsj6wrqbihgtPittXTx3c2UGRimqV2at72GED9PQ%2FKtNb2riTkoiElo8AykhKHBpGsn6QMQR2mrRagtnh5qgLsj6DvPGHKVSGYP2uXaSECa3NGiYhAlfk16c7pMsQfqyjVH2wdGxFwgdOmthJIpu8Mks7SDIIkROkRQKPGHCZAjcXpfXNSUqFIzrtqPxOM%2Bv47pIqiQ0aZf3iegItCG74kv3RxibXFKPdskXUMAJexNISjsjwu8JcGJd%2BrIRlYGph6NJi8vpPszERrn8ZCgfuAf0D8eiUV5xJTYHa0frAdQRurNWHHQP4kusbq3%2FAtBVZg%2FEgNUAYdsp3HsDiB%2FliSYSrwX7Ao5EvJMqwTwX7zqp87Hm%2BODfRFlou2vItpCBWryz%2FraOJ8LnFNnIOplq7Wq8zwwztimxwY6pgHljKtNFeLH7xrxsSMwqq8zPyZ3Qr3%2BNCUkhuHDC2L2ba9u%2Bx7I20PFAEOIrQu0EsmCNOSvHdXpgR6JqytSbv7VI%2BQrYpZNoA4vU%2B1VfL0jsPu00QYkgWuGoXnyGqutqiMN2YAqca42Cc%2FbvXokeqisiSEG%2FuJ5d7SiGcre44HbBzAgbAjC8PweQSsl4283AmF2qVegz9QTNWVaNZOnIfBopFwwTjKr&X-Amz-Signature=e06d2998a814444834aa5643104232684ee18a532835c37e4818ccc50adbb622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PNZPPW%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr4e7erog5vt%2FkkkjjAHYY3MhT5R9HgphkmrzR4j9j7AiAVqBSGmozM0asjzza0mSM7YJSfBN34By1tAx4%2BdFXTUyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAt%2BFdSHsuZ49VAxwKtwDIq8FEpzw8MpbsWUtvSjwB9jL1e7vnUckp3hqq6IuwCPAEkdzdjyuKDYKBce4n5Fld7spF67W6eV%2BVKjdG5Jmkuptv2usk%2FwwpGrVGwr9OvhrZyvuIpU8MGUvzcCm9qpIGAzesWzzd4vxWtWlL9VzZoldMsS67YMRf46u%2BTrYx%2FMztXC9PYnO%2Bv%2BvHz3AW9g%2F7MOxPw6XKv03c5RL%2BCa%2BF5JKrKJgXk%2BQWDsj6wrqbihgtPittXTx3c2UGRimqV2at72GED9PQ%2FKtNb2riTkoiElo8AykhKHBpGsn6QMQR2mrRagtnh5qgLsj6DvPGHKVSGYP2uXaSECa3NGiYhAlfk16c7pMsQfqyjVH2wdGxFwgdOmthJIpu8Mks7SDIIkROkRQKPGHCZAjcXpfXNSUqFIzrtqPxOM%2Bv47pIqiQ0aZf3iegItCG74kv3RxibXFKPdskXUMAJexNISjsjwu8JcGJd%2BrIRlYGph6NJi8vpPszERrn8ZCgfuAf0D8eiUV5xJTYHa0frAdQRurNWHHQP4kusbq3%2FAtBVZg%2FEgNUAYdsp3HsDiB%2FliSYSrwX7Ao5EvJMqwTwX7zqp87Hm%2BODfRFlou2vItpCBWryz%2FraOJ8LnFNnIOplq7Wq8zwwztimxwY6pgHljKtNFeLH7xrxsSMwqq8zPyZ3Qr3%2BNCUkhuHDC2L2ba9u%2Bx7I20PFAEOIrQu0EsmCNOSvHdXpgR6JqytSbv7VI%2BQrYpZNoA4vU%2B1VfL0jsPu00QYkgWuGoXnyGqutqiMN2YAqca42Cc%2FbvXokeqisiSEG%2FuJ5d7SiGcre44HbBzAgbAjC8PweQSsl4283AmF2qVegz9QTNWVaNZOnIfBopFwwTjKr&X-Amz-Signature=dbd419994d3e38ab04e9175f8bce5bcf5e2c4a081deb4d69dcc0c6ae9b96f2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BCSOKOS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBmfgxt%2F4hHO7cqL1Je7a9jUHJma1csre71sBxbr2rFJAiEA8Ahj4v0%2F7NipzWF9W56zTY303wkZMU7YFcuTtt44AUgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz%2F0wUZXRLnBgRsnSrcAzqUzAzZklzOl888lyTKCtUc5XcG7f%2FbCl2C9FcqVpP4Zfa%2BogBoQo%2FXzescKXpN5SmJi%2FOZi8jHygtpiO3MkmS0rXbtuEVtrlcYcUyyDzEzYmLOGd%2FOlmVN868dppEUi07d%2BbLZekFPXxBUN%2FP5rS9sf9JvFDJVRhcHrgNUAKcfU3M1uE4StOTH9bwIrU%2BZlfbjx2QUxFptsXATduo1de1RE%2Bi7QKlY18FDxvlVd55AjffjZ%2FP%2BT7qFIvIc37WLThOwuV3WpVgsrgDPbYuEbvU7%2BHlyUa2ze7aIEMmyrh9T%2Fg8s%2FIj%2F3NgFxqz%2FfOQnk3HACYBU976iFUcMec793BAajGN9iQQWJiQjGn%2Bpy1SsrVcv7lb7dDMs159lU3MvPHkkQamtFJy3L4nNmqoK06gExIQ26GUpr%2B9PdEn5AFauca2xgihLLNVT8aDwIE8YJP2%2FXVGHEvo7Tm%2Ffzkt266kg8G4PrOXUTHXaavfdI%2FuUwPPeUznLiZPgKcBhT1%2Ba6NZZBuN08DboZXPYG9HVe4Kjo%2BXE9XVaEfe09o6pRcxsTm2c1sKhhEgDc0bUYold4yXJawsY4NMxYWFMZAZrpeWB4eVSz1PTMxjjISe%2FNc7kjMFwMHuxEXHgndBJMJjYpscGOqUBLRZ407MG52%2ByGV9LMZVC%2Bs7WtuMGau0D48XuqcrKUUgE7O1SkgBuF6Bp7NBMQKB6M3PGnZ%2B5pT4GIW2NvSRDQr9DrI6JwLcbB7zhwGj5PNDx5B%2BuciBx9L2SxEop%2F8Cy4s9e5UIXAXVz1g%2Fui7PLbskjrPqwhdzAkPrfYg5cLjt%2FN9GG39coiWUZn9nZqb0677xmR%2FMQ7%2Bb9iVJANTjtVwCOujc9&X-Amz-Signature=76086e9cf08b10976b3cc5077a597b887a34236e2e8b8a18e7ca2d0720f36307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEAM7J2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCBZGWZWb4qyNhAI8czEmYcwZ3ijb6h26xH6MebzJj72QIhAOlAh7k%2BHMhwWeD5fERfQyzrjM0obUmslrOE7e9minwXKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc8DIUs7zAwXEkz6wq3ANbJh65KTZ3m0Afxy4JueZT18gxjhwB%2BT99KVBB3PBdpB1yBkyT2oI3cvZQ6gtUkULDPsvXFYUhS7JCcpkmLxYefQo7g2vrhp%2BGFg5APEcHlys6HV4GQE4sIg%2F0HHfwfce7b6K0mq6bzffR0SY1C4%2BnOF0frbvfqbPWjgYFQzbbLA%2FkuC3QSqmegEC68OBxDZ4fEsdnEmBKHIse%2FKM2GHap0uba2JD8bcGz%2Bj5xYzM9FZCmK2C%2BPtQ8BHlWIE%2BSNDavCerO7W7uqjOApuw7wraexElaiP3hZULoEgdcfOAc51RTxmi%2BubM6RRDHqypmpZbJoExCRBPObftn%2FIZPqrMh1BwtxGJSpnhe515AkaBXZgMwm0334n75djg2rG6lziut4wo1OeVXgFkSFgV4oA2RCNDSId8CUXuYzvOSAibl53DlnMY9qCf%2FGaw3TKnQI0GS4SH%2B7ht5grnIthVgPwg4TgBOVeBqcsAU1oV4cL8H2zkc9AlfSrfOKUWf%2B4MceXCc9CaowUuSLftcFYBa27XRBGXPopBkd9CBCds0yK%2BKlXplK%2B2LBcNjj0IrL%2FhLFvOuYTb29nVr8HIR20RV%2BloSVX1VesrWizET9WkgPnR3mcg10D9ZGuTKPN6B5zCr2KbHBjqkAcKPz63Olzh9v3D8P%2ByHteZrJR4zqp4LkUd65nYZaWxSDkmdfelEwYPsO24VkXNNUgjeXLxX4hv2H8qQLY9FMjZzLxna%2BZzsTDon0CGJpPGDSaoAyGBsEwM5b%2BUPdQW5%2F4abhQXdTJJMubqbukqXPc0VE719F89%2BwC89j9lEdvnIH5GDjx1jD1OvvBRMM4WCLqb%2FbVdX%2BU1hkMEb0mgRCgJ6%2BsCt&X-Amz-Signature=d2973626269982cc2c9bb9142e813390d04773bcf65aff623138daad1ced5b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PNZPPW%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr4e7erog5vt%2FkkkjjAHYY3MhT5R9HgphkmrzR4j9j7AiAVqBSGmozM0asjzza0mSM7YJSfBN34By1tAx4%2BdFXTUyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAt%2BFdSHsuZ49VAxwKtwDIq8FEpzw8MpbsWUtvSjwB9jL1e7vnUckp3hqq6IuwCPAEkdzdjyuKDYKBce4n5Fld7spF67W6eV%2BVKjdG5Jmkuptv2usk%2FwwpGrVGwr9OvhrZyvuIpU8MGUvzcCm9qpIGAzesWzzd4vxWtWlL9VzZoldMsS67YMRf46u%2BTrYx%2FMztXC9PYnO%2Bv%2BvHz3AW9g%2F7MOxPw6XKv03c5RL%2BCa%2BF5JKrKJgXk%2BQWDsj6wrqbihgtPittXTx3c2UGRimqV2at72GED9PQ%2FKtNb2riTkoiElo8AykhKHBpGsn6QMQR2mrRagtnh5qgLsj6DvPGHKVSGYP2uXaSECa3NGiYhAlfk16c7pMsQfqyjVH2wdGxFwgdOmthJIpu8Mks7SDIIkROkRQKPGHCZAjcXpfXNSUqFIzrtqPxOM%2Bv47pIqiQ0aZf3iegItCG74kv3RxibXFKPdskXUMAJexNISjsjwu8JcGJd%2BrIRlYGph6NJi8vpPszERrn8ZCgfuAf0D8eiUV5xJTYHa0frAdQRurNWHHQP4kusbq3%2FAtBVZg%2FEgNUAYdsp3HsDiB%2FliSYSrwX7Ao5EvJMqwTwX7zqp87Hm%2BODfRFlou2vItpCBWryz%2FraOJ8LnFNnIOplq7Wq8zwwztimxwY6pgHljKtNFeLH7xrxsSMwqq8zPyZ3Qr3%2BNCUkhuHDC2L2ba9u%2Bx7I20PFAEOIrQu0EsmCNOSvHdXpgR6JqytSbv7VI%2BQrYpZNoA4vU%2B1VfL0jsPu00QYkgWuGoXnyGqutqiMN2YAqca42Cc%2FbvXokeqisiSEG%2FuJ5d7SiGcre44HbBzAgbAjC8PweQSsl4283AmF2qVegz9QTNWVaNZOnIfBopFwwTjKr&X-Amz-Signature=ee15b2dbbab7bdd30594c6b61ec75ca2c9fbfdfe89b394dc72280f034b4d3c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
