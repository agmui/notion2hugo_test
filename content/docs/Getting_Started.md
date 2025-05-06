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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNUAK5L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj6WDvFuaBwfcNS%2FbkwG3V%2BgkRmWFpvZSe4prX%2FUVKAiAEm5lvPsqr6RTVg5yAi0h5piV5e1jDGbmkOVBNAtBnQir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbfWINxsX3pVyNceUKtwDn24xvpvolRCj8W0Ln29XVerU8OuLyeq9qtvI7WoKboUJ5dtSs2tud8g1auvEqGSaQ%2BOrRu%2BIuZTrykweO%2B5BxShdeWg3ZHhOX1FbmkJQa0d9QCT%2Blu3xcPajcPTs3IOBIEBmAkwI%2FMGLha3ed8Aw796VvsfVQBfuJuFSxPv6z2JMjHZCX%2Ft%2F8WWWwPCPuZt6soMqh2ogC9ouip3cdtEZ36bCuqG87JHOViNrf8BEYrxAWuasFl0N6mCJxqXBG0mSnUR2G19%2B8QmbeQPxSAfa06iA44%2FmTqCtRD%2ByWTFz5NtnMMPsKh1G9uMjHQ8WvU7KxBssnaQBkzmoSysJhlVLmPWMa3z%2B9ZM%2Byso%2BZfTA82wMEr9DJiBNV8gwWjUL0uI4okpgZf2Zje7VHq8BwDgyxM3%2FK1EmrFKhVF48brBl83RnWht5WXwB6TSuIKlI9dvRZLBH4YPJp3aAJkuD2VhjZ3VGeN3CZG2YngtEkv1yr2tdzHvBwdMWxIeTxbWfwgMypriP%2BAo5JjYfS2AzGttVoxqUtpzKeN%2BJHt63k0zg2V9LDy6QiWyMaP1uDy9avV5WD%2B%2FvQeHv69Dij0abnsQ%2FGa06otFZoEP0GEEi6SyUDwZ0Cx9LX5Q18L6yvVow0f7lwAY6pgHrS5N2ziwSWkFCOW7Lnvc5v0qB7ITrzta5eIZ511y8y7yd08xPQEw8wfjwTr%2BJM60JEdWvnvpw%2FcHvESWMSE3kFGDlKgZ%2B0SREwZwiEkQLNkpbJvsv0Fw5upvYGacXO3Bcb%2FWRxxI1Ut3476Gn%2Fd0CAKv7K7ozn%2FHpD%2FOOyLzC0YrQHNGQuDf0sYLCBYEXevreJLyEUb0bL9QDyNoqsB1gRdGKQYHw&X-Amz-Signature=599075320325e90a4d365b9586e6f9901aac42476a1bf95a565dded8e5f434a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNUAK5L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj6WDvFuaBwfcNS%2FbkwG3V%2BgkRmWFpvZSe4prX%2FUVKAiAEm5lvPsqr6RTVg5yAi0h5piV5e1jDGbmkOVBNAtBnQir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbfWINxsX3pVyNceUKtwDn24xvpvolRCj8W0Ln29XVerU8OuLyeq9qtvI7WoKboUJ5dtSs2tud8g1auvEqGSaQ%2BOrRu%2BIuZTrykweO%2B5BxShdeWg3ZHhOX1FbmkJQa0d9QCT%2Blu3xcPajcPTs3IOBIEBmAkwI%2FMGLha3ed8Aw796VvsfVQBfuJuFSxPv6z2JMjHZCX%2Ft%2F8WWWwPCPuZt6soMqh2ogC9ouip3cdtEZ36bCuqG87JHOViNrf8BEYrxAWuasFl0N6mCJxqXBG0mSnUR2G19%2B8QmbeQPxSAfa06iA44%2FmTqCtRD%2ByWTFz5NtnMMPsKh1G9uMjHQ8WvU7KxBssnaQBkzmoSysJhlVLmPWMa3z%2B9ZM%2Byso%2BZfTA82wMEr9DJiBNV8gwWjUL0uI4okpgZf2Zje7VHq8BwDgyxM3%2FK1EmrFKhVF48brBl83RnWht5WXwB6TSuIKlI9dvRZLBH4YPJp3aAJkuD2VhjZ3VGeN3CZG2YngtEkv1yr2tdzHvBwdMWxIeTxbWfwgMypriP%2BAo5JjYfS2AzGttVoxqUtpzKeN%2BJHt63k0zg2V9LDy6QiWyMaP1uDy9avV5WD%2B%2FvQeHv69Dij0abnsQ%2FGa06otFZoEP0GEEi6SyUDwZ0Cx9LX5Q18L6yvVow0f7lwAY6pgHrS5N2ziwSWkFCOW7Lnvc5v0qB7ITrzta5eIZ511y8y7yd08xPQEw8wfjwTr%2BJM60JEdWvnvpw%2FcHvESWMSE3kFGDlKgZ%2B0SREwZwiEkQLNkpbJvsv0Fw5upvYGacXO3Bcb%2FWRxxI1Ut3476Gn%2Fd0CAKv7K7ozn%2FHpD%2FOOyLzC0YrQHNGQuDf0sYLCBYEXevreJLyEUb0bL9QDyNoqsB1gRdGKQYHw&X-Amz-Signature=46f75052332e96459b66ba0ae9ead80727d0d0753cf060f1392930bb71895546&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNUAK5L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj6WDvFuaBwfcNS%2FbkwG3V%2BgkRmWFpvZSe4prX%2FUVKAiAEm5lvPsqr6RTVg5yAi0h5piV5e1jDGbmkOVBNAtBnQir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbfWINxsX3pVyNceUKtwDn24xvpvolRCj8W0Ln29XVerU8OuLyeq9qtvI7WoKboUJ5dtSs2tud8g1auvEqGSaQ%2BOrRu%2BIuZTrykweO%2B5BxShdeWg3ZHhOX1FbmkJQa0d9QCT%2Blu3xcPajcPTs3IOBIEBmAkwI%2FMGLha3ed8Aw796VvsfVQBfuJuFSxPv6z2JMjHZCX%2Ft%2F8WWWwPCPuZt6soMqh2ogC9ouip3cdtEZ36bCuqG87JHOViNrf8BEYrxAWuasFl0N6mCJxqXBG0mSnUR2G19%2B8QmbeQPxSAfa06iA44%2FmTqCtRD%2ByWTFz5NtnMMPsKh1G9uMjHQ8WvU7KxBssnaQBkzmoSysJhlVLmPWMa3z%2B9ZM%2Byso%2BZfTA82wMEr9DJiBNV8gwWjUL0uI4okpgZf2Zje7VHq8BwDgyxM3%2FK1EmrFKhVF48brBl83RnWht5WXwB6TSuIKlI9dvRZLBH4YPJp3aAJkuD2VhjZ3VGeN3CZG2YngtEkv1yr2tdzHvBwdMWxIeTxbWfwgMypriP%2BAo5JjYfS2AzGttVoxqUtpzKeN%2BJHt63k0zg2V9LDy6QiWyMaP1uDy9avV5WD%2B%2FvQeHv69Dij0abnsQ%2FGa06otFZoEP0GEEi6SyUDwZ0Cx9LX5Q18L6yvVow0f7lwAY6pgHrS5N2ziwSWkFCOW7Lnvc5v0qB7ITrzta5eIZ511y8y7yd08xPQEw8wfjwTr%2BJM60JEdWvnvpw%2FcHvESWMSE3kFGDlKgZ%2B0SREwZwiEkQLNkpbJvsv0Fw5upvYGacXO3Bcb%2FWRxxI1Ut3476Gn%2Fd0CAKv7K7ozn%2FHpD%2FOOyLzC0YrQHNGQuDf0sYLCBYEXevreJLyEUb0bL9QDyNoqsB1gRdGKQYHw&X-Amz-Signature=52567e2c8bdbe16ddeb187749287e3d16e97b5544718658f364592d9ca7aa70e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYA5HPP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBKqhMwTNtnrHaJ7%2B0qRVaDGA%2BKW10T7PXEiLGwnzq5AiEAmiBGdHACFrVuCEaaatVtTQ85yWVhvG3s8X83ZBSpLlEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOtZe5stZAo9aYV6YSrcA10%2B7L1kbWM1L3DR5zCBxq1Pj2x0jC6NKSQ28nl9ig02eWEpkB5fPccPQytB3D7N%2Fc5L0h%2FMQzo1a%2BhoYkezUo0EMYrmVXsHRdgwiOPo7i2S41qI9%2B46GAQooVLHkBcVLaDrE8rIZA%2F%2FlzcbigkkjScqRWz89pr4y4GgUiCTm4tjfaSpEnUkGau6Rkyvfpf6hyEkgD9tOIB84TPUKZrLWBr59a3BBiGfX9sWrmotVeBlYCQYFlqcP%2B%2BqZ3O%2Bbpr4z89wE8CEwiiN28Vv0QS41yc2JOUIZHpsgXhQp%2BFPi4i%2BIedl0ApNlWArOAbhg4pHu%2BVhPUozeShQ5PpNNlydL%2B7d%2FGHltSb5Ppu0v1VeYLiZqFsy4T8A4baDhHsIoRwohj1zNXOpe56ZGnKOT8HejmvPAIB1Fm9v6UYY%2FcMAB6gcH2HEkMWv8CasQ4Lu6Fqn6fDWGfYWb8jCAUnPpoDD6lvimypwQx1QC8utHGyht%2F0JOvJMyeEMzQ4rxgsvckxx8WTxtfnnMmJqk6pt7%2BeSGByI9kK40jExvctB51fkLZ0E1N%2BXjmx9VaLlqIQI9tUkuzfX3d64I%2BemXcKHnvOyqfMmkaRVY8mprUSFJpsaoTlwf0%2FhdS9zab70SRXXMKj%2B5cAGOqUBQKVRt5VDSU7Lyf7SJ7KXX5C2o7AYkFPz6YkNKgE1kwjZIn8ZHVwPB1DWqoldGDFT%2F5aAfLQdDN%2BVkknfXdUyhX4BJC57wN%2FWxe6LEpkGBxzTpj9kQK6rnk6g%2BnjLhfFV6lx9LCXUKwsiIfHATpHK8VSG0cNNH879j4%2BTgNvEA4BOlDBYNf8MbmNBRlQL8Y6mt9iWGu%2BGpjpOapvVd6DPHHqseQVm&X-Amz-Signature=0acf0591b8a20be9a24a778d91266595ca7d064a763be97bdc925b777a999511&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52EEWFT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkFFS%2BAIgar69LPVFuRbvGCXo%2FZktvlQh85UPIXHbcSAiArLIUPyYmugk8Rl8rFh7VVYDH7L4E9rUVAXag6jwZ5DSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMXiLTfBEgPXabD1RpKtwDKKht8KFvU9tlvvC3IAfr92XUn6mIO0dQT5njeBUWH0nRq2nBdubXoMu0Nqbyc8JTpx7XsZIe1T7xmC8FQC9%2FsEGosaM%2BWsj4lHqh13M%2Bgfvl8gUU6nT%2F9TG8hLwf2yuXrnq5BfDXAV5Xnm9cBCvS%2BXmP08s0ntUI3egsakXUwJQUqQPZrQF32fL5bxp8fA34prw9TFEqNqh6RYZqdRxPmf%2FOgM1x3ADJPj2c4LrqQ1eDHJZOmgT%2BrnjO5uwVSmiiOIe%2FRAVHQKf9uGxF%2B3UjaioBMUz8h66kxt0dyyI%2F3%2BzNP%2B%2FAjqaw%2F1DIREAEfzBbLEfs%2FOAnsWeUG8JFpndvn5rm%2FRc8CtaUk8zRZZbao35PpOF8WrJ0EAPFxGl1eoy2ZKxrB7Ifl2jc%2FKpsvNTwibLGEevqPaK7ulhW0us%2FAlgXIl%2Bn8Q877K8exFkewtMcs%2B1LoICMQPFhvWdwyMIWdidKvCxOCGXuKvQY6b8C84sJUJzfGbvacz%2B%2BVkeoD7uCBnqPJ8qnppVo1lWRmLLlXHGn38%2F9%2BovTrgf8VHAcGFEB8B4rtommoY7DQOIcNq1jN1%2Fhz3Yg1is12KlXq7B%2BRZiXJh1bUyGaz5QL2Coaq8bjrNaWf65N9gT%2BfT4w%2Ff3lwAY6pgFiPLPeKWG%2F8trx1AjdlNwLlGkxkVEYBAX%2F2ltK4nLIu5KUWP8N6LmcAX9ziXDu53WUvII9agL6wYF2V9WNuVn88vdtWwr1wJ5E1C8zQoa45DxnDrdmU4E0EDhSe%2BnR9Ex0iCVS0aAUCgzJSHeIHCXTP%2F6BdFaOGBLBwa8UZFfixRQrqHx6gu0n3%2Bhovxye7t%2BM0btAr89VmQ2DR%2BWBIBg%2FvRUOQLcG&X-Amz-Signature=3c3a92d90439a091c4e8bda9f223d67af38684d09d11392db3c868a9e19f109e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNUAK5L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj6WDvFuaBwfcNS%2FbkwG3V%2BgkRmWFpvZSe4prX%2FUVKAiAEm5lvPsqr6RTVg5yAi0h5piV5e1jDGbmkOVBNAtBnQir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbfWINxsX3pVyNceUKtwDn24xvpvolRCj8W0Ln29XVerU8OuLyeq9qtvI7WoKboUJ5dtSs2tud8g1auvEqGSaQ%2BOrRu%2BIuZTrykweO%2B5BxShdeWg3ZHhOX1FbmkJQa0d9QCT%2Blu3xcPajcPTs3IOBIEBmAkwI%2FMGLha3ed8Aw796VvsfVQBfuJuFSxPv6z2JMjHZCX%2Ft%2F8WWWwPCPuZt6soMqh2ogC9ouip3cdtEZ36bCuqG87JHOViNrf8BEYrxAWuasFl0N6mCJxqXBG0mSnUR2G19%2B8QmbeQPxSAfa06iA44%2FmTqCtRD%2ByWTFz5NtnMMPsKh1G9uMjHQ8WvU7KxBssnaQBkzmoSysJhlVLmPWMa3z%2B9ZM%2Byso%2BZfTA82wMEr9DJiBNV8gwWjUL0uI4okpgZf2Zje7VHq8BwDgyxM3%2FK1EmrFKhVF48brBl83RnWht5WXwB6TSuIKlI9dvRZLBH4YPJp3aAJkuD2VhjZ3VGeN3CZG2YngtEkv1yr2tdzHvBwdMWxIeTxbWfwgMypriP%2BAo5JjYfS2AzGttVoxqUtpzKeN%2BJHt63k0zg2V9LDy6QiWyMaP1uDy9avV5WD%2B%2FvQeHv69Dij0abnsQ%2FGa06otFZoEP0GEEi6SyUDwZ0Cx9LX5Q18L6yvVow0f7lwAY6pgHrS5N2ziwSWkFCOW7Lnvc5v0qB7ITrzta5eIZ511y8y7yd08xPQEw8wfjwTr%2BJM60JEdWvnvpw%2FcHvESWMSE3kFGDlKgZ%2B0SREwZwiEkQLNkpbJvsv0Fw5upvYGacXO3Bcb%2FWRxxI1Ut3476Gn%2Fd0CAKv7K7ozn%2FHpD%2FOOyLzC0YrQHNGQuDf0sYLCBYEXevreJLyEUb0bL9QDyNoqsB1gRdGKQYHw&X-Amz-Signature=fd51b6b905a0dc13d6a9e1b79547a364720080178731f767d016ab05cfe84dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
