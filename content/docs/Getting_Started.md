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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5P62GR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDqB7mlqHy75pwli2wlUOIGd%2FatpUA5mGR%2BvM4BqKL4xgIgU2sYvHIlabS7EUIr6gA413jqchN8gdDz%2B42lBGYaCDoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt%2BVwRsPpp9VLgWVyrcA5XX0dlWwTPB47NWUHLVRqNvQ6pVrsUc9GWwdNrdQRjpYVyDpZCEYcmdRtVjKRTHrrJTsF6ocErHMn2x76Bz92bhqztw12o6%2F6%2BphCEYGjpm3%2BN4BLylA1nssWdvztfvWNxcKQTSGPqP1XLm%2B4b4TxYIdT3Q10QvfdN4FgbZX1vdxMLlgZsZeAhvqNEW1N5A8SarG8mB8Z9spNTHEoe%2F%2FHZtpa5a2ssXyjjieG4lWZkb6cQ%2F6dvU1WaweFZOTBSfUpYW2nvOeyxqHHQbxFowHeUhD%2FQ3AfxTr%2FfvpuoG%2FwGBZL6FphND5WJoyVGSb8tRpJDBCdqKor2YcePNTvQIB3I2WVuxFW3AQpCBknmx8KtPKwjhX0qLYBM6fYZ4lLnBZxglMWXY%2FxsTBs4TkAeWaGZmjN1Bt99pLkXspx2ZK6qznuwya3j8vifsK%2Bp1zZlsGWrilyKCYWxudC0bKKGnfORnx4fmYjfYF37Nkas7%2B0LGhcRsnIbDQQRTKL5RyN7cRlPXOAEiGbmDePRWmhmfjDoyhiXzjN%2FWij8gGPk5WDnStTv3Mox64pe87BPE1YVg1IxfYqcTrwvbjSFKRUQvxy5RTqEUhHFSjz2Iv%2FRQ8VeXQ3bZd6G3R7xiD%2BGAMPe4rcIGOqUB7RAXO8UOS31e629%2BGxY2j32imgDU8XaW8W3ExkN4rrPT1%2BP8DzRyHbR%2B0H3jwj%2Ff%2BZGTDiUQc5Ua7ETvzTvZjygc8d8f2Vm%2B3%2FhAVaW6OsOdpCLDB3JeZDIuz8cSSd0gxB04tac%2F64M3jWTU2uYk985DSVC1aolubxo8aSqQS%2BKT9i1Rv%2FKapSKcAmH9inKvlOWtnTrlFnJSyW9EMY4vUiEzaV%2Bp&X-Amz-Signature=d969b65a9df56dd96140223a86bc4942b6dca2d432b1f5516df9cbfd6c62e11d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5P62GR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDqB7mlqHy75pwli2wlUOIGd%2FatpUA5mGR%2BvM4BqKL4xgIgU2sYvHIlabS7EUIr6gA413jqchN8gdDz%2B42lBGYaCDoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt%2BVwRsPpp9VLgWVyrcA5XX0dlWwTPB47NWUHLVRqNvQ6pVrsUc9GWwdNrdQRjpYVyDpZCEYcmdRtVjKRTHrrJTsF6ocErHMn2x76Bz92bhqztw12o6%2F6%2BphCEYGjpm3%2BN4BLylA1nssWdvztfvWNxcKQTSGPqP1XLm%2B4b4TxYIdT3Q10QvfdN4FgbZX1vdxMLlgZsZeAhvqNEW1N5A8SarG8mB8Z9spNTHEoe%2F%2FHZtpa5a2ssXyjjieG4lWZkb6cQ%2F6dvU1WaweFZOTBSfUpYW2nvOeyxqHHQbxFowHeUhD%2FQ3AfxTr%2FfvpuoG%2FwGBZL6FphND5WJoyVGSb8tRpJDBCdqKor2YcePNTvQIB3I2WVuxFW3AQpCBknmx8KtPKwjhX0qLYBM6fYZ4lLnBZxglMWXY%2FxsTBs4TkAeWaGZmjN1Bt99pLkXspx2ZK6qznuwya3j8vifsK%2Bp1zZlsGWrilyKCYWxudC0bKKGnfORnx4fmYjfYF37Nkas7%2B0LGhcRsnIbDQQRTKL5RyN7cRlPXOAEiGbmDePRWmhmfjDoyhiXzjN%2FWij8gGPk5WDnStTv3Mox64pe87BPE1YVg1IxfYqcTrwvbjSFKRUQvxy5RTqEUhHFSjz2Iv%2FRQ8VeXQ3bZd6G3R7xiD%2BGAMPe4rcIGOqUB7RAXO8UOS31e629%2BGxY2j32imgDU8XaW8W3ExkN4rrPT1%2BP8DzRyHbR%2B0H3jwj%2Ff%2BZGTDiUQc5Ua7ETvzTvZjygc8d8f2Vm%2B3%2FhAVaW6OsOdpCLDB3JeZDIuz8cSSd0gxB04tac%2F64M3jWTU2uYk985DSVC1aolubxo8aSqQS%2BKT9i1Rv%2FKapSKcAmH9inKvlOWtnTrlFnJSyW9EMY4vUiEzaV%2Bp&X-Amz-Signature=4e5d30a06c254dbc065a75bee4d9cfca7dc1480425b1023635e4b6c203a1e6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5P62GR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDqB7mlqHy75pwli2wlUOIGd%2FatpUA5mGR%2BvM4BqKL4xgIgU2sYvHIlabS7EUIr6gA413jqchN8gdDz%2B42lBGYaCDoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt%2BVwRsPpp9VLgWVyrcA5XX0dlWwTPB47NWUHLVRqNvQ6pVrsUc9GWwdNrdQRjpYVyDpZCEYcmdRtVjKRTHrrJTsF6ocErHMn2x76Bz92bhqztw12o6%2F6%2BphCEYGjpm3%2BN4BLylA1nssWdvztfvWNxcKQTSGPqP1XLm%2B4b4TxYIdT3Q10QvfdN4FgbZX1vdxMLlgZsZeAhvqNEW1N5A8SarG8mB8Z9spNTHEoe%2F%2FHZtpa5a2ssXyjjieG4lWZkb6cQ%2F6dvU1WaweFZOTBSfUpYW2nvOeyxqHHQbxFowHeUhD%2FQ3AfxTr%2FfvpuoG%2FwGBZL6FphND5WJoyVGSb8tRpJDBCdqKor2YcePNTvQIB3I2WVuxFW3AQpCBknmx8KtPKwjhX0qLYBM6fYZ4lLnBZxglMWXY%2FxsTBs4TkAeWaGZmjN1Bt99pLkXspx2ZK6qznuwya3j8vifsK%2Bp1zZlsGWrilyKCYWxudC0bKKGnfORnx4fmYjfYF37Nkas7%2B0LGhcRsnIbDQQRTKL5RyN7cRlPXOAEiGbmDePRWmhmfjDoyhiXzjN%2FWij8gGPk5WDnStTv3Mox64pe87BPE1YVg1IxfYqcTrwvbjSFKRUQvxy5RTqEUhHFSjz2Iv%2FRQ8VeXQ3bZd6G3R7xiD%2BGAMPe4rcIGOqUB7RAXO8UOS31e629%2BGxY2j32imgDU8XaW8W3ExkN4rrPT1%2BP8DzRyHbR%2B0H3jwj%2Ff%2BZGTDiUQc5Ua7ETvzTvZjygc8d8f2Vm%2B3%2FhAVaW6OsOdpCLDB3JeZDIuz8cSSd0gxB04tac%2F64M3jWTU2uYk985DSVC1aolubxo8aSqQS%2BKT9i1Rv%2FKapSKcAmH9inKvlOWtnTrlFnJSyW9EMY4vUiEzaV%2Bp&X-Amz-Signature=89cc20f94340c8e48ca5e6e9126558df4ddac8d215ae258d45d238ae801def87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEYDQ2Z%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCBblxBumuFYGrxXrLM%2BiWi%2BiN%2F8olgMUFVUu%2FOloAAqAIgEnHjYwitUBbkBT4gCLx3%2Fi42VQ%2FdvxyvrD1FkUmi0%2BYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbiCE%2F6XJMd693rGircA4Q4uoRt%2BwRN0mVQdNaZux24pVzThn7p4lWUXMVQGIAbCLTfr95o%2FzensXP9wWgK1Y8D90aFT4ZGz3wY4lSfEXZVbNRze287CkMH58Wz6hoSHXwH2wlTeCVXtlhfuE2xSz%2Fea8b76fEaVflUr9%2F9SbJAF6rUFHqySZJNwFS0AVdpFlJSom5bz2qwrihQ7EHfBBO86RvYImH0ELNhqTc8mj4yFi5B4w6u87gOKt%2F%2FPUD7zhM7s1qNKJWDXNcay48gBuwrE3GP7ORb0tH2O7TEVCuZhZC0mYC2UNGhapNcW4n4xcceliFluHvnLq6HSXKjgBbVAqbsm55DyxjrEW4un0AAgO6uNfGMuGXcXBDEMA%2BO2qtEeQN8lJvWP7pJ13sQLPOkJARzywiBOpClfd6mYVt%2B3IbSyVxopEd6KYagp3QDANe2j5WLjZTXQAjUj%2B%2FHNKdUR7pHDxdEOm1kSGacfOInCBny89ePqSNse5dSAKnxiUNx35Fe27HnsjWNXpgx4N6uq2tbDMSr3fwBiht0ZsuqRC7RrL579IlfmcMUH15C3J2cad7m7aF7EDfBzTZrAivBwHb7KPWCUJi1PGx%2BNxlGMpUIBVCRva0iafkgjG3TZxaLvWQYPtn%2B0GwEMLm1rsIGOqUB4WiaLoB6n%2F7yYdororeOpPxaPvbcsWamM4qf3Fj%2FOfe5cSI99wnxorHo5SevRWolPfgttu6GlYRdXFCZ9Vse1OhBtcFL3ls7lkA1rB%2BOIKRwUvva%2BrcZqJQuGLXBAqZlsb%2B%2F6LrOtfpSh0%2FoFlAlCDGxUt0AWZ9fVkh9ywKLpb6vLNTGipPmwDo6YsNL72TRx7Qu9pI8KtvuTWGk4XM0npCsm0mI&X-Amz-Signature=658861dd83d7dffab4a19646879a214e2fe02ce2e1e2b46e515efac63f77363e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QPXTQ66%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDvK555DaMaxT3LIN7DoU08hvZCgqQenB3NTEYm2aGppQIgffyuMS%2BS2uQlooQbX4YtwpmZ%2FJs2gadMCLSDsV4AK5kqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUP%2FdIiqq3cpAyP%2FSrcA%2FB%2Bchm5GIvV9HWqtL1AVWtaWIaOrPDO2kqBfkxVDrrliO1DMEg3yCpuonJE913nk7AdTQS8L3tu66ISsZpAiqASYR8sGUvzoOCIfsXQ8mMG6gsxjRsupGURXo%2FxZ77CGillXABj6xVK1GkKomovGeMXg4g7exuEtP6wNikVnJRr8UEOvvcu0ISnA5QxDLyxf0pXnMsYNISeonDUbxujYsRxhOPQTW2k97yIs3CLfP5svrVFJMGnySS2MZKls19cJdrBX7OQ0Ebj5Ipcm70z0gBSbJa3itJXGhsiemLyR5zDpm9yPQmvFqse%2BAqGobkLyvI1rm5FWyXF%2FbTl60KuCCyf0nDlEUvpvY1wYUl4ISiFN2T3%2BLENufRoFE0ha%2BMHx9jPB6i%2BzCMsXzQUAZkzgNiNQJZjsNQQNXwGZhUYjLjUsAAIxj5azbrJW%2BMhw%2FCpBqZ6QzilNDirMVWsJwLRwEM0BYgUXZzL80iKoq5v4D5%2B2KupKrBLVlM%2F3IKQZoUAxAHSKQy4ZyYUBQx2ZdX2QvWjy7q3JADe8z9oVPyV%2FKZuu7k6q7Ue2CmXZLH%2B89Q9oT6YmPCnCkdt%2FxKo0EQdct3%2Ba3lYEC1A2kgopBfWy6Fp7pieiSl91W%2BWp72EMK%2FKrcIGOqUBnHgHd7E7xiDr2ADHyttX530t8hLrxVOUFuxoZEIKhPGQVVhUed0UHL5DTCgVqTCefR0Uq%2BHzbVRcMsiez%2BiiEIC9%2Bg4jLZ9QB85u7V8eWq4a5ulq9xwscwKUmg5romcSayg1IxruKLCqXGqPgtvNxd1dJQGGV5gLz8opPJF4wWQhGLGAIjorn9u%2FZaQZVBWhsu3dzQmdETpZkfxWNGs1efrx3LJA&X-Amz-Signature=064ca05ffabcc12fa9fa5fff543cf94dc936e412f46057ff18311dae06e63072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5P62GR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDqB7mlqHy75pwli2wlUOIGd%2FatpUA5mGR%2BvM4BqKL4xgIgU2sYvHIlabS7EUIr6gA413jqchN8gdDz%2B42lBGYaCDoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt%2BVwRsPpp9VLgWVyrcA5XX0dlWwTPB47NWUHLVRqNvQ6pVrsUc9GWwdNrdQRjpYVyDpZCEYcmdRtVjKRTHrrJTsF6ocErHMn2x76Bz92bhqztw12o6%2F6%2BphCEYGjpm3%2BN4BLylA1nssWdvztfvWNxcKQTSGPqP1XLm%2B4b4TxYIdT3Q10QvfdN4FgbZX1vdxMLlgZsZeAhvqNEW1N5A8SarG8mB8Z9spNTHEoe%2F%2FHZtpa5a2ssXyjjieG4lWZkb6cQ%2F6dvU1WaweFZOTBSfUpYW2nvOeyxqHHQbxFowHeUhD%2FQ3AfxTr%2FfvpuoG%2FwGBZL6FphND5WJoyVGSb8tRpJDBCdqKor2YcePNTvQIB3I2WVuxFW3AQpCBknmx8KtPKwjhX0qLYBM6fYZ4lLnBZxglMWXY%2FxsTBs4TkAeWaGZmjN1Bt99pLkXspx2ZK6qznuwya3j8vifsK%2Bp1zZlsGWrilyKCYWxudC0bKKGnfORnx4fmYjfYF37Nkas7%2B0LGhcRsnIbDQQRTKL5RyN7cRlPXOAEiGbmDePRWmhmfjDoyhiXzjN%2FWij8gGPk5WDnStTv3Mox64pe87BPE1YVg1IxfYqcTrwvbjSFKRUQvxy5RTqEUhHFSjz2Iv%2FRQ8VeXQ3bZd6G3R7xiD%2BGAMPe4rcIGOqUB7RAXO8UOS31e629%2BGxY2j32imgDU8XaW8W3ExkN4rrPT1%2BP8DzRyHbR%2B0H3jwj%2Ff%2BZGTDiUQc5Ua7ETvzTvZjygc8d8f2Vm%2B3%2FhAVaW6OsOdpCLDB3JeZDIuz8cSSd0gxB04tac%2F64M3jWTU2uYk985DSVC1aolubxo8aSqQS%2BKT9i1Rv%2FKapSKcAmH9inKvlOWtnTrlFnJSyW9EMY4vUiEzaV%2Bp&X-Amz-Signature=756ff3f0c215912d642afed3e1742185fcbe3097d0724663eb13fe401e760166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
