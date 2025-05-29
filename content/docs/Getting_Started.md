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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTRLSHU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Pd2Uk2%2FDS2HHqfg%2FV2VuKjRoXsUSLwNM%2FUpzBgZ5iQIgC%2BO0q4fiSQSfKwVPDFiD3PNrJrgYk7OUNq1zNzMbYCIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx7ZEYyHcuWMCsdBircA7KDfa1YeWb2FvkrgChbD0aY2oK8i6NL%2B6CnEnPtz2zTcbiAret4YOQoifjlAZpDw4EYngFS3krXebmQQUau%2F%2FOmSUBbXsNrmgxvrnUFa7cB6xpEVJ%2BnyHcG4ZYBdDeVPyLBZLFscKBxc83gOSRDu9McpQPGQNFyGbyuhs0SuKnGbyl%2BRx%2B1so3LdDciM%2FClnCEGCTgl9J5vZDIXPJ3tVu%2FIMj3l2ZfyM0U5LKm%2BonBwCnrxghglJfQ3B%2Fw9i6yKM34j2wCrvTNNaJYH1mY1SZxstmpvFSTmORWyK%2Baf8elgHa7BR8EKgZmFaFqWhF4NT8fzm9Z4hZ3Eajt42qJBcPTkBED6ub%2F2OtllrEMeSY%2BTFKvy7TM0ALOVc%2FOg4VkTBp1eKjok1dSNK%2Bm2EkoDsaUCvUcC6Ywm7x60NpEj8b7eKZqIiHaxpi8kWsryZ9IMTE%2BfOodsHdvc1ZSBKgUmt8%2BpqOsSYeFKU5e9JjHOWDmSeJjeYJs16ZIvODZ5Nx90tsS7jSr5wYHraqt7raJQrqu%2BrtCjomuzf9Z0EMUT%2BZO%2FuyDGOcIk%2BoHCQ8eU0l7rwsILHdDZtBrUQsn4DQvsCpJoZU9O8OklWyIoyu%2FibPRVKbA7oN9gSulnqJYlMPOI38EGOqUBkV5N2trjlvi1fnje%2BOYpT6rw%2BbJZzLTW9JIhC76ODFg7QjTiokhW03oR8rEdm%2FwCn20f%2FzSsjsr9vyhzmlXplsbiOubRXxjSBXQT33FtLZFr%2F7fIX7ne0ekwOiiEvnsXSTJaZ7OtWGC7OnhQWoLs9zG9GDWnW9yZRlwJq2n4FqSl5UpS7oe8S42qXUd%2BAe1vlAfwcBuZXdT%2BnwSMZrAPzCJex02e&X-Amz-Signature=6e5295937f0637c77d1d733496e3178e48958e1a52878844bc3762a340899574&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTRLSHU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Pd2Uk2%2FDS2HHqfg%2FV2VuKjRoXsUSLwNM%2FUpzBgZ5iQIgC%2BO0q4fiSQSfKwVPDFiD3PNrJrgYk7OUNq1zNzMbYCIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx7ZEYyHcuWMCsdBircA7KDfa1YeWb2FvkrgChbD0aY2oK8i6NL%2B6CnEnPtz2zTcbiAret4YOQoifjlAZpDw4EYngFS3krXebmQQUau%2F%2FOmSUBbXsNrmgxvrnUFa7cB6xpEVJ%2BnyHcG4ZYBdDeVPyLBZLFscKBxc83gOSRDu9McpQPGQNFyGbyuhs0SuKnGbyl%2BRx%2B1so3LdDciM%2FClnCEGCTgl9J5vZDIXPJ3tVu%2FIMj3l2ZfyM0U5LKm%2BonBwCnrxghglJfQ3B%2Fw9i6yKM34j2wCrvTNNaJYH1mY1SZxstmpvFSTmORWyK%2Baf8elgHa7BR8EKgZmFaFqWhF4NT8fzm9Z4hZ3Eajt42qJBcPTkBED6ub%2F2OtllrEMeSY%2BTFKvy7TM0ALOVc%2FOg4VkTBp1eKjok1dSNK%2Bm2EkoDsaUCvUcC6Ywm7x60NpEj8b7eKZqIiHaxpi8kWsryZ9IMTE%2BfOodsHdvc1ZSBKgUmt8%2BpqOsSYeFKU5e9JjHOWDmSeJjeYJs16ZIvODZ5Nx90tsS7jSr5wYHraqt7raJQrqu%2BrtCjomuzf9Z0EMUT%2BZO%2FuyDGOcIk%2BoHCQ8eU0l7rwsILHdDZtBrUQsn4DQvsCpJoZU9O8OklWyIoyu%2FibPRVKbA7oN9gSulnqJYlMPOI38EGOqUBkV5N2trjlvi1fnje%2BOYpT6rw%2BbJZzLTW9JIhC76ODFg7QjTiokhW03oR8rEdm%2FwCn20f%2FzSsjsr9vyhzmlXplsbiOubRXxjSBXQT33FtLZFr%2F7fIX7ne0ekwOiiEvnsXSTJaZ7OtWGC7OnhQWoLs9zG9GDWnW9yZRlwJq2n4FqSl5UpS7oe8S42qXUd%2BAe1vlAfwcBuZXdT%2BnwSMZrAPzCJex02e&X-Amz-Signature=474537f7420d27b941f4c5b9708e65db28fb1b99dd5658b0de3a37bf08a16b80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTRLSHU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Pd2Uk2%2FDS2HHqfg%2FV2VuKjRoXsUSLwNM%2FUpzBgZ5iQIgC%2BO0q4fiSQSfKwVPDFiD3PNrJrgYk7OUNq1zNzMbYCIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx7ZEYyHcuWMCsdBircA7KDfa1YeWb2FvkrgChbD0aY2oK8i6NL%2B6CnEnPtz2zTcbiAret4YOQoifjlAZpDw4EYngFS3krXebmQQUau%2F%2FOmSUBbXsNrmgxvrnUFa7cB6xpEVJ%2BnyHcG4ZYBdDeVPyLBZLFscKBxc83gOSRDu9McpQPGQNFyGbyuhs0SuKnGbyl%2BRx%2B1so3LdDciM%2FClnCEGCTgl9J5vZDIXPJ3tVu%2FIMj3l2ZfyM0U5LKm%2BonBwCnrxghglJfQ3B%2Fw9i6yKM34j2wCrvTNNaJYH1mY1SZxstmpvFSTmORWyK%2Baf8elgHa7BR8EKgZmFaFqWhF4NT8fzm9Z4hZ3Eajt42qJBcPTkBED6ub%2F2OtllrEMeSY%2BTFKvy7TM0ALOVc%2FOg4VkTBp1eKjok1dSNK%2Bm2EkoDsaUCvUcC6Ywm7x60NpEj8b7eKZqIiHaxpi8kWsryZ9IMTE%2BfOodsHdvc1ZSBKgUmt8%2BpqOsSYeFKU5e9JjHOWDmSeJjeYJs16ZIvODZ5Nx90tsS7jSr5wYHraqt7raJQrqu%2BrtCjomuzf9Z0EMUT%2BZO%2FuyDGOcIk%2BoHCQ8eU0l7rwsILHdDZtBrUQsn4DQvsCpJoZU9O8OklWyIoyu%2FibPRVKbA7oN9gSulnqJYlMPOI38EGOqUBkV5N2trjlvi1fnje%2BOYpT6rw%2BbJZzLTW9JIhC76ODFg7QjTiokhW03oR8rEdm%2FwCn20f%2FzSsjsr9vyhzmlXplsbiOubRXxjSBXQT33FtLZFr%2F7fIX7ne0ekwOiiEvnsXSTJaZ7OtWGC7OnhQWoLs9zG9GDWnW9yZRlwJq2n4FqSl5UpS7oe8S42qXUd%2BAe1vlAfwcBuZXdT%2BnwSMZrAPzCJex02e&X-Amz-Signature=6139495eff7b2a18dfb528668cf978240ae8cff1b9a38bf43257f99523b26978&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LKKMRON%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0qB8Qwf6IMccmnwEA943AInxDnZi5P0MniqNsxEmdmwIgNhtzk5b0tqagCY2RetiPCcHsd%2BQ5DhPcmzOOZ6G6GPoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdY1XiNyDeqY7jlryrcA9ifRyM5thnXmmJvVfPJDaGZy1xKrTvWe1Q0%2BiDoTQTcYxNQ3x1IB3ufoql1W%2BvkkuQB6PzKXZIw4oIVvbQ9pRZ2pa9zwnstmNt4nuZqeK%2BFwL72Sdh8fVTihBP%2BU4ZLT4wYLIN9v4fIYhtHczL%2BylgOYj9%2B85cadWrBJwjSCIkBFs4nQ3zuPkooeaTvhk2aOdFZx6sdmcSPtC%2B1C66F%2F0nrdkGyMQPOJFak1CgDtBa3RtBjf1PRRXrJngDoAftGtd7LiZc1QcO8VCmWGEyV8hqUOhpp42OXu03Dp0AkCyZN5nf7MG9uaBWD%2FAEYNUisWtp5J3Yucg79WAOdcKY6%2FIcfKzBlNEbAgsDzAvDbzeLYHG2Y3Qbcyoa%2FnGuGNfevOG2BiRq74sFRAu3XUV4wOllp8RosjQ5fceXfdDyKObx0aR5SCLXG4dBIRkOurrHyZi6wRmpDIX5TK53tjjrYk%2BOUW7A0%2Bv0hlzAQWJ179iHsC4N0xVSbNOIswETmfJCm5vCvJLn6BDH%2BnFR6yB%2FUme9q%2FLY8eakoB%2FDc3oVU%2BadDXQApottVH6uBhGMoJV7poLgjU8gklPQoJJ3fjZVeJ3Mm0oBaMItSDFDqv4Ho5YY8K4hsfYZxl%2BCZ2RmwMMOH38EGOqUBzzmcW4FWIm1NUyHQvf6ba1l0g6ycIGuH2f9a2w8UBDX8WA0zlma3mQqAU36WAcN8dsa%2BJvFMr3brWLgys0w2qzwUiibr3XgmoVlSoB%2F9KtmXYUeq36FhEwyahVNFVMKJLwyqzClS9aPEa3uxZwSnidy1DVG3ubt4XxB0KGGfHsYDEHzPsNOosaXrHYYpFCPwV5cOhpEw4qjYp9Sz8aUKAau3dypG&X-Amz-Signature=9f21d5b80d8c2c59279bc45941dc1b30b358cce768f7818f0c56f6300e2b10fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466753JJJNV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSU5eLUUIu%2BOtm1JYanDN3OP8DXILIPkO2TdcqO6Z4KAiEAv7wHwmvkoBeM12YL5YSsdr%2BYGE5CY6Sq58xBsIUKZ%2BsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOVvbqDEDgUnrydeircAyoH5vcGjsbq2hK2vyfopgHGnRywI1LheXLl%2BVuO17DaFyF22w7EnTrmaL1Z4FaI7U6E8vyJ3s3A%2BS0atvJLHznYX%2BiPgJlz%2BOsJOXXWXBrr4DavgN8RO35mtI8yyI0itFZZkQ9J868Dq%2FxYG4q4HoB2tuglc1A5aEfMT%2F4b3QcxCM1HWMGQYn14hzMr1m7Z0QW27oYSB1Q1UUPWLRzWqoUgRgwONUu9Upfy8t0vo3Th3QgGXr6mZumOOVPJNnDVdg6mYr%2BplvNRqiLs55PVFHJHatBh3TAQHdF3TgdvR6kjnuxSG2WdIzjTNSnNKYAefdvvldvFrUyC3TX%2FWPc8EzOZZvbeYn1cuzUwU8TNIOFR8opCknttdi30WghaE48MNnRBuKvCSE8OSPDYfym3YjDcMna9xvfk9ooO0IFmUUe6DxshexO4AQMKVDfLs3h5qdjhkJRCYUBOcPxbbdeSV8dtTA1ptldx5q6xdt2tnaZEeo64LGg84OEhjb3yQFKUIWTMfl1O7VhloRoRedczcmmFFN66v9IX4ClimZ2yUzKdTdIA9%2BlPoYV9Md5rkjXoeA1fWYjcsPT%2Bx3%2FaGVORr6LhqlYIkX3I3MF1Wq1cstoM2548vVN%2BbMkyAurEMLOI38EGOqUBYq7FKxj5WXlKua3ULExwKdy9pbn1Zkm0%2B4QvYHzVQQmtrNzfxglNa4I9LofE%2Fo2Xlr6J2mf4ias%2FMJOT6mQnrYHo1H7Fcxbk0C1yld1hWM%2B1KypKL7A%2FXqxJhQVOlTPE9pLDYRH%2BHzJ9GBG6q6KZPfxbs0hfDSdP9lEggtsOetim0ZqZuQrHGev1lyo0qLwXdQgR%2B9LZaYIGuV4GkZm9VgtMv3UL&X-Amz-Signature=ce184c3c79b61bd89f90c8a06c72b04c5027fa63071963e613ca40c167e2db55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTRLSHU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Pd2Uk2%2FDS2HHqfg%2FV2VuKjRoXsUSLwNM%2FUpzBgZ5iQIgC%2BO0q4fiSQSfKwVPDFiD3PNrJrgYk7OUNq1zNzMbYCIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx7ZEYyHcuWMCsdBircA7KDfa1YeWb2FvkrgChbD0aY2oK8i6NL%2B6CnEnPtz2zTcbiAret4YOQoifjlAZpDw4EYngFS3krXebmQQUau%2F%2FOmSUBbXsNrmgxvrnUFa7cB6xpEVJ%2BnyHcG4ZYBdDeVPyLBZLFscKBxc83gOSRDu9McpQPGQNFyGbyuhs0SuKnGbyl%2BRx%2B1so3LdDciM%2FClnCEGCTgl9J5vZDIXPJ3tVu%2FIMj3l2ZfyM0U5LKm%2BonBwCnrxghglJfQ3B%2Fw9i6yKM34j2wCrvTNNaJYH1mY1SZxstmpvFSTmORWyK%2Baf8elgHa7BR8EKgZmFaFqWhF4NT8fzm9Z4hZ3Eajt42qJBcPTkBED6ub%2F2OtllrEMeSY%2BTFKvy7TM0ALOVc%2FOg4VkTBp1eKjok1dSNK%2Bm2EkoDsaUCvUcC6Ywm7x60NpEj8b7eKZqIiHaxpi8kWsryZ9IMTE%2BfOodsHdvc1ZSBKgUmt8%2BpqOsSYeFKU5e9JjHOWDmSeJjeYJs16ZIvODZ5Nx90tsS7jSr5wYHraqt7raJQrqu%2BrtCjomuzf9Z0EMUT%2BZO%2FuyDGOcIk%2BoHCQ8eU0l7rwsILHdDZtBrUQsn4DQvsCpJoZU9O8OklWyIoyu%2FibPRVKbA7oN9gSulnqJYlMPOI38EGOqUBkV5N2trjlvi1fnje%2BOYpT6rw%2BbJZzLTW9JIhC76ODFg7QjTiokhW03oR8rEdm%2FwCn20f%2FzSsjsr9vyhzmlXplsbiOubRXxjSBXQT33FtLZFr%2F7fIX7ne0ekwOiiEvnsXSTJaZ7OtWGC7OnhQWoLs9zG9GDWnW9yZRlwJq2n4FqSl5UpS7oe8S42qXUd%2BAe1vlAfwcBuZXdT%2BnwSMZrAPzCJex02e&X-Amz-Signature=afbb1083147baff237711946145f2aeaccee30c3b584633115bb5de1e9f01e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
