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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GTJXNS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoH5fMWwIZXwcZH%2FFe5nlNaxRA9TqVH0sEXmtDosuWSQIgPkRchEMUJvxc63PTuiN0H2nTop1aCg8kZ%2FLPCMyYuBAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKECpJXydaGubdU0gyrcA%2Fj07DDlDi4lJWdk96rUy%2BFqU32QHdWhKnNu%2FKax%2FU7SLFFJRB6EAmjgZYEYebMhLCp84CvCV%2FNpDFT2KS1ra%2B8djpFkrXZneughT3u5UC%2Fa%2BUWBg1ayp9aoKEigfQaAnO6OL7l8qFI8bIvjhhFY9uAaC6003hZPqqCk%2FEC1dzDtrkIr1g0FlKTets%2BineAymb302oXYogW02jJOjgC67ND8g5uoT%2BD6aBq9Y0QzSudPXDdK7EmXsch7vdxiFCCZB%2F5ZrVRok7K68pjZCGYKOww1ZwpzvqdPYvSy9vdIdxRuU3QFxBYuggTHukuaja4IJxJidnHsWkqpogoLhGunbokiccqMFzjS7A9E5cKk5EKtEZKzX7bxhWI5pZv37oATRvr5poBO6FPYNw5m9C9hkj%2FpWENMfifp4txA7pS1kqFrR%2FRaeuxVmjZR0eOymRGFrs1dQx9l48er5sLenEJcoT2GS4L%2BL0Eh9CqOim9%2B3rsSpGflCmCUPRsmS9vUYO%2B31nSbmpsegAHqVab7%2F8Oh5c6hH9hXuze%2BLpbOjYffyaAJHbG%2BqgbhNOmMe2TXbFgQLxQkWHjOnpeRG6GpN9v09eT6ltJPdxXKDgFb8Rr9j9c4eb41uMmuAPcXsipCMNm69cQGOqUBjYeNpB%2Bj6we5JJMDxZUBAT6wdZhIkITspyU5MLhea6YSRBJlQg8Uhcg6b5W17%2FYsrx%2FcxJuOh8W1JGk9iB6PK%2F%2Bxt3lJieFvthm%2FBSnNIyRGHNGZzBiDJ3e%2BWfEg0GL47pstpV%2BL30k28WUKByON6ozoCvNq4A1royeG2SuyOM75aCoWudrW3xPoBzINdesrPLmTIwYZ6UKq3nispIOeIN13CucY&X-Amz-Signature=599c9197e69f95759146f32d46b9b58699e327926d24e11906bff706fa00cc17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GTJXNS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoH5fMWwIZXwcZH%2FFe5nlNaxRA9TqVH0sEXmtDosuWSQIgPkRchEMUJvxc63PTuiN0H2nTop1aCg8kZ%2FLPCMyYuBAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKECpJXydaGubdU0gyrcA%2Fj07DDlDi4lJWdk96rUy%2BFqU32QHdWhKnNu%2FKax%2FU7SLFFJRB6EAmjgZYEYebMhLCp84CvCV%2FNpDFT2KS1ra%2B8djpFkrXZneughT3u5UC%2Fa%2BUWBg1ayp9aoKEigfQaAnO6OL7l8qFI8bIvjhhFY9uAaC6003hZPqqCk%2FEC1dzDtrkIr1g0FlKTets%2BineAymb302oXYogW02jJOjgC67ND8g5uoT%2BD6aBq9Y0QzSudPXDdK7EmXsch7vdxiFCCZB%2F5ZrVRok7K68pjZCGYKOww1ZwpzvqdPYvSy9vdIdxRuU3QFxBYuggTHukuaja4IJxJidnHsWkqpogoLhGunbokiccqMFzjS7A9E5cKk5EKtEZKzX7bxhWI5pZv37oATRvr5poBO6FPYNw5m9C9hkj%2FpWENMfifp4txA7pS1kqFrR%2FRaeuxVmjZR0eOymRGFrs1dQx9l48er5sLenEJcoT2GS4L%2BL0Eh9CqOim9%2B3rsSpGflCmCUPRsmS9vUYO%2B31nSbmpsegAHqVab7%2F8Oh5c6hH9hXuze%2BLpbOjYffyaAJHbG%2BqgbhNOmMe2TXbFgQLxQkWHjOnpeRG6GpN9v09eT6ltJPdxXKDgFb8Rr9j9c4eb41uMmuAPcXsipCMNm69cQGOqUBjYeNpB%2Bj6we5JJMDxZUBAT6wdZhIkITspyU5MLhea6YSRBJlQg8Uhcg6b5W17%2FYsrx%2FcxJuOh8W1JGk9iB6PK%2F%2Bxt3lJieFvthm%2FBSnNIyRGHNGZzBiDJ3e%2BWfEg0GL47pstpV%2BL30k28WUKByON6ozoCvNq4A1royeG2SuyOM75aCoWudrW3xPoBzINdesrPLmTIwYZ6UKq3nispIOeIN13CucY&X-Amz-Signature=02b94876d128e10e744a433a86757a034b2fdc6f345baff0aa63919f1e694cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GTJXNS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoH5fMWwIZXwcZH%2FFe5nlNaxRA9TqVH0sEXmtDosuWSQIgPkRchEMUJvxc63PTuiN0H2nTop1aCg8kZ%2FLPCMyYuBAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKECpJXydaGubdU0gyrcA%2Fj07DDlDi4lJWdk96rUy%2BFqU32QHdWhKnNu%2FKax%2FU7SLFFJRB6EAmjgZYEYebMhLCp84CvCV%2FNpDFT2KS1ra%2B8djpFkrXZneughT3u5UC%2Fa%2BUWBg1ayp9aoKEigfQaAnO6OL7l8qFI8bIvjhhFY9uAaC6003hZPqqCk%2FEC1dzDtrkIr1g0FlKTets%2BineAymb302oXYogW02jJOjgC67ND8g5uoT%2BD6aBq9Y0QzSudPXDdK7EmXsch7vdxiFCCZB%2F5ZrVRok7K68pjZCGYKOww1ZwpzvqdPYvSy9vdIdxRuU3QFxBYuggTHukuaja4IJxJidnHsWkqpogoLhGunbokiccqMFzjS7A9E5cKk5EKtEZKzX7bxhWI5pZv37oATRvr5poBO6FPYNw5m9C9hkj%2FpWENMfifp4txA7pS1kqFrR%2FRaeuxVmjZR0eOymRGFrs1dQx9l48er5sLenEJcoT2GS4L%2BL0Eh9CqOim9%2B3rsSpGflCmCUPRsmS9vUYO%2B31nSbmpsegAHqVab7%2F8Oh5c6hH9hXuze%2BLpbOjYffyaAJHbG%2BqgbhNOmMe2TXbFgQLxQkWHjOnpeRG6GpN9v09eT6ltJPdxXKDgFb8Rr9j9c4eb41uMmuAPcXsipCMNm69cQGOqUBjYeNpB%2Bj6we5JJMDxZUBAT6wdZhIkITspyU5MLhea6YSRBJlQg8Uhcg6b5W17%2FYsrx%2FcxJuOh8W1JGk9iB6PK%2F%2Bxt3lJieFvthm%2FBSnNIyRGHNGZzBiDJ3e%2BWfEg0GL47pstpV%2BL30k28WUKByON6ozoCvNq4A1royeG2SuyOM75aCoWudrW3xPoBzINdesrPLmTIwYZ6UKq3nispIOeIN13CucY&X-Amz-Signature=8746265711c283561080b51381c4da62925b90264ea6c0158c3a40b79f49967c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTYUWCWY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi999PtT0Wsfz%2BNsFeNdr3pd3WzxXh%2F6a6Kj1nqt2HgAiEAkh9dlKnqJQLCkW%2FxAMNYe1zX5gDs0lNGw0I8CwlQiHMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMNsdXZJMBLqMjTh2ircA820rc38sI3cmboqAjXz1BFvXl4pJ9be%2BKFWr4w955sS7Dqb00Zhs0Ekp1xeb2QUhJq9rT%2BC40Fc27feog2icmQiCWgIzc397hRbKkXbmuPBJjL92r8V8FNYBqkaqrjWaZLj63OzXizkMOiUUZz0LDNyXXbhXF7FCLdl3XHx0ruU3pNP5rdTauCZKEEQ8YIRcgYdTu2Xdfgpml%2FEpNoNGNO%2B1vmg1vrfmy4LWtzJ8AyqDuUvzj7fUD0OK5E2ifuxWmbfm3OKwZ0DH7MCl1cKZljL2I%2FZvq4whJ8ExvSleaoZm00yOIPl7nqrBwGXAd8v2Xis%2BtzAefoFC4ln4a10DCsBbHqqbcoRVILjnA0%2BAJY8eKhNuYKT3Jbsqd9DwG0qEEptR21GHD1kastBU6%2B%2FAlOijRz%2FvXzsQOdv3eWp26LLB2UboyWqKUaRgquztlWzZZSK9Dl9OE8dTGIKLGJkvrSL9uiCuA%2BX1siK6o6vE5pltf0hgaf%2BxBR3Ty0BKgfCiBHUeza6lZNEtdNJ8wOsaB9poeOoPPi3UlPXEjIbJH6j%2F%2BgeVuU6Nm1n52NR5yXAjIRL90VCjUVASeY0cTdA3xhrmiMHDxTE%2Frf5K%2BGtX8JGrGkjA7NBRoBXcqHxMP669cQGOqUBcUAxP1MXU3Fzfpfzu9RLE9shvPpP2lF5NZN4l73uIq0n2oLd3KFRdczAXDztUSYmuJmyO9OG9SOf%2BYUmCPJgvE8e1RLI1BoAtwNPJDPAhVjKWMsOVRU1PgUAPg%2F%2FowHAv7ubGaVMmTlSyQ2dKlHugbl3Nr1EmesuUbYmuu39OfdcBlXHLjK9EXU0aElppA6UOgX4HQSxO8%2FKMYcS2Ippqycnfnm6&X-Amz-Signature=c6feca52f862513d8191e3b41b90008c660d26e04af562edc03f48b544c5d9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIQJDN6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEX27uK4zE%2F%2F9I%2Bm3dxuxh1Mj%2BITJ4HnVOtgMIATcPkQIhAPnKS4%2FZk5z7blKMuVO2Xis%2B5fMsxm32iqiXPixKd1%2BAKv8DCD8QABoMNjM3NDIzMTgzODA1IgzLNwwU6j%2BAKPFXnyUq3AMjPPAUPI4lTKUmS2Q0nNoxb4LunuejJ9z2LCwegQuY26nbec7v%2FkqTiOaPqEcF1Qqrxk%2FagRSmmBN6EtcuL8iOFNVDiyAEPdMBhQ6yfASMSe5iYBAzKDOmjjt%2F%2F6kyKrJkHwYvsVGD7OyChDx1CSbgtZrQunUywcEORIdMKXqp1fqjlQBKE5zdQqw2fJxD3jRdbijTV%2B%2BBGAhk8oTjBDpyt8m1yXJK7LB5hZ%2Bf4x6RIw%2BshNUVj3KpVjlE6XFt8SL1p3jbAGzRPWZmz6dYE1yt%2FL1y%2FiyApOwSOn%2FmlxSwORhv2%2FlwJg9pJ7Hi1SVCwnY%2B%2BhKQlhBxNkWDTadiMD%2Bg81fUAeIKcj5TZaeYnhqMNV4liLquSRNc4Wuq9IwbqUtnImJixU2xxP0csmYBM14N%2B7F7mvmY7gEW5FFFzaelfoPiU5OuBW8TGlpggSzguslWn%2FM7I0jvLhZKph7a%2FHBgkSo%2FywOoxOlZNSlwiAHRmWxzQRD3Kos55ApkgRcNB3pMSaQupFU1PeX316n8JsmjdknIjB7YUQ0q7LQmrQF1p841%2BFEbpMZtiX7pNrK9awzlayR0Xk6ze%2BLbcWWHgD0keOH4FNnJHQ05QKPQAfMvKu91bNA61ekx9VXHXDCp%2BfXEBjqkAY5tqi5NR%2BKfnp387VCq%2B%2B8YgPpWB19J7n94QA0Gg6gJwmw9g3sgjds3iWuIwpkb%2BSYY%2F9k6uX1wR89SI2GCuhSiIQmK082vD%2B6rf94uJY6f6BlUwEEaIVkHub7I1wgPvfcUf528LjZmjC4ahvG%2FFbUpOI45hYm8D40xUNC5BwjjiptpfGnknSPrD83iz1lgS%2Fw5zeAwEVHdJjIy5k1KEmgDRIzG&X-Amz-Signature=9346f5f61cfcfa28b5505e238ed51539324fb36030cb941565a4e1148ac47877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GTJXNS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoH5fMWwIZXwcZH%2FFe5nlNaxRA9TqVH0sEXmtDosuWSQIgPkRchEMUJvxc63PTuiN0H2nTop1aCg8kZ%2FLPCMyYuBAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKECpJXydaGubdU0gyrcA%2Fj07DDlDi4lJWdk96rUy%2BFqU32QHdWhKnNu%2FKax%2FU7SLFFJRB6EAmjgZYEYebMhLCp84CvCV%2FNpDFT2KS1ra%2B8djpFkrXZneughT3u5UC%2Fa%2BUWBg1ayp9aoKEigfQaAnO6OL7l8qFI8bIvjhhFY9uAaC6003hZPqqCk%2FEC1dzDtrkIr1g0FlKTets%2BineAymb302oXYogW02jJOjgC67ND8g5uoT%2BD6aBq9Y0QzSudPXDdK7EmXsch7vdxiFCCZB%2F5ZrVRok7K68pjZCGYKOww1ZwpzvqdPYvSy9vdIdxRuU3QFxBYuggTHukuaja4IJxJidnHsWkqpogoLhGunbokiccqMFzjS7A9E5cKk5EKtEZKzX7bxhWI5pZv37oATRvr5poBO6FPYNw5m9C9hkj%2FpWENMfifp4txA7pS1kqFrR%2FRaeuxVmjZR0eOymRGFrs1dQx9l48er5sLenEJcoT2GS4L%2BL0Eh9CqOim9%2B3rsSpGflCmCUPRsmS9vUYO%2B31nSbmpsegAHqVab7%2F8Oh5c6hH9hXuze%2BLpbOjYffyaAJHbG%2BqgbhNOmMe2TXbFgQLxQkWHjOnpeRG6GpN9v09eT6ltJPdxXKDgFb8Rr9j9c4eb41uMmuAPcXsipCMNm69cQGOqUBjYeNpB%2Bj6we5JJMDxZUBAT6wdZhIkITspyU5MLhea6YSRBJlQg8Uhcg6b5W17%2FYsrx%2FcxJuOh8W1JGk9iB6PK%2F%2Bxt3lJieFvthm%2FBSnNIyRGHNGZzBiDJ3e%2BWfEg0GL47pstpV%2BL30k28WUKByON6ozoCvNq4A1royeG2SuyOM75aCoWudrW3xPoBzINdesrPLmTIwYZ6UKq3nispIOeIN13CucY&X-Amz-Signature=223a7b73a03f88acd2a9784b7fbe964211be016f904dc2b8ff9c59edb7b8c7e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
