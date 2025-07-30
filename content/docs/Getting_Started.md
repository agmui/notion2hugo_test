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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TEI4UK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRPhyTilTRXxnUas8balfA1gYZjAS2xN1tWeVYO8NMAAiA02D1oNjrhzlTn5vhDaRX3vlc1%2BgZZOlyu%2FbjX5fnUuSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGTUFu3IywfOEdeoKtwD8Nr14Yyq3Fr9IXXuGUlwlyLIYjpGihh3acmF8JDEAxXLJqsIixc9XQCsH%2F%2BM%2BRpBF4lF2rNF6AR4k6EWxtWp1iL2DnRjwcSS%2BzxwGsfolAcRH5XIARVshKHKsDzYXhjXy%2FwdnsIW1YBXwbL6Lf%2BCPxvAR830WQJq8cUBNV1F%2Bv0KZYfbEReCGQV5gVmhsMvH4sVgeeqyHQddEIZgOWW6XA3uHBeiywmRkz%2BUCpPkL4UlNfydkDAbLJrOrj7qhPso8GDqeh4K8s2%2Fzev9IijThLmpNJC%2FLhiFUm7udTu%2BnjbgvUkaz10JioyBWT21%2BdSyUO94cmVi%2BLLT0dMJ9zxqNehI52yzwmnYpMqfd%2F1AkxLLn%2BSh8agr4kZS2ZPwQT%2FTFOsfTm99r9f8J4z0Dvz7xD3e%2FMwXH1QtbB84huTLZKWdWI4tVVV%2FSiLa9hjPEsn9Qjy%2Bw2aI3e733Y7%2BhE0ZLxjIogqqLCsFGrOu0T%2FOLIQpdtkWzRUmG5e%2FMtnsfVbg%2Fhs72zAGYulgzq7AwwtW9AszE1RMXAeIU5bb1zTnSbqeJIj132%2BsjwMGf5Z3DW3Khpv3hIR8%2B6E%2BkSOzmSKZM8PGRmMt9G3xFxQavXXAhBc17319VlD%2Bgxw8We0w8YipxAY6pgHhcPg8rHIiag69Qdr4U%2B4HM1%2FpmX%2FVZsb6CGrchgoxMxSYeS3onZUSRWw0pQ4%2FwmOwLZQN6vPQDfnIYNa25LcJRvO9Z444dyfM2Uvfga3t8BEDqLkRjNRJPxwZVlGPJM%2Fo4rl%2FfHaF%2FDdy7hMfKsp7D4fjuBAzaGnPQrnvyB4sjFlWxlTreXzYKAJPvqdz%2B3W683dkiqOTljab5SbfbPx7Xoqh8Sfx&X-Amz-Signature=96e7b398affd907a485255a89574b08b09bbb81deedce9bcab3c16767cceabbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TEI4UK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRPhyTilTRXxnUas8balfA1gYZjAS2xN1tWeVYO8NMAAiA02D1oNjrhzlTn5vhDaRX3vlc1%2BgZZOlyu%2FbjX5fnUuSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGTUFu3IywfOEdeoKtwD8Nr14Yyq3Fr9IXXuGUlwlyLIYjpGihh3acmF8JDEAxXLJqsIixc9XQCsH%2F%2BM%2BRpBF4lF2rNF6AR4k6EWxtWp1iL2DnRjwcSS%2BzxwGsfolAcRH5XIARVshKHKsDzYXhjXy%2FwdnsIW1YBXwbL6Lf%2BCPxvAR830WQJq8cUBNV1F%2Bv0KZYfbEReCGQV5gVmhsMvH4sVgeeqyHQddEIZgOWW6XA3uHBeiywmRkz%2BUCpPkL4UlNfydkDAbLJrOrj7qhPso8GDqeh4K8s2%2Fzev9IijThLmpNJC%2FLhiFUm7udTu%2BnjbgvUkaz10JioyBWT21%2BdSyUO94cmVi%2BLLT0dMJ9zxqNehI52yzwmnYpMqfd%2F1AkxLLn%2BSh8agr4kZS2ZPwQT%2FTFOsfTm99r9f8J4z0Dvz7xD3e%2FMwXH1QtbB84huTLZKWdWI4tVVV%2FSiLa9hjPEsn9Qjy%2Bw2aI3e733Y7%2BhE0ZLxjIogqqLCsFGrOu0T%2FOLIQpdtkWzRUmG5e%2FMtnsfVbg%2Fhs72zAGYulgzq7AwwtW9AszE1RMXAeIU5bb1zTnSbqeJIj132%2BsjwMGf5Z3DW3Khpv3hIR8%2B6E%2BkSOzmSKZM8PGRmMt9G3xFxQavXXAhBc17319VlD%2Bgxw8We0w8YipxAY6pgHhcPg8rHIiag69Qdr4U%2B4HM1%2FpmX%2FVZsb6CGrchgoxMxSYeS3onZUSRWw0pQ4%2FwmOwLZQN6vPQDfnIYNa25LcJRvO9Z444dyfM2Uvfga3t8BEDqLkRjNRJPxwZVlGPJM%2Fo4rl%2FfHaF%2FDdy7hMfKsp7D4fjuBAzaGnPQrnvyB4sjFlWxlTreXzYKAJPvqdz%2B3W683dkiqOTljab5SbfbPx7Xoqh8Sfx&X-Amz-Signature=5feab2f9509e756c8ebfa5672911e93112dcabd7c923aa9f0e8cf6ea4930719b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TEI4UK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRPhyTilTRXxnUas8balfA1gYZjAS2xN1tWeVYO8NMAAiA02D1oNjrhzlTn5vhDaRX3vlc1%2BgZZOlyu%2FbjX5fnUuSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGTUFu3IywfOEdeoKtwD8Nr14Yyq3Fr9IXXuGUlwlyLIYjpGihh3acmF8JDEAxXLJqsIixc9XQCsH%2F%2BM%2BRpBF4lF2rNF6AR4k6EWxtWp1iL2DnRjwcSS%2BzxwGsfolAcRH5XIARVshKHKsDzYXhjXy%2FwdnsIW1YBXwbL6Lf%2BCPxvAR830WQJq8cUBNV1F%2Bv0KZYfbEReCGQV5gVmhsMvH4sVgeeqyHQddEIZgOWW6XA3uHBeiywmRkz%2BUCpPkL4UlNfydkDAbLJrOrj7qhPso8GDqeh4K8s2%2Fzev9IijThLmpNJC%2FLhiFUm7udTu%2BnjbgvUkaz10JioyBWT21%2BdSyUO94cmVi%2BLLT0dMJ9zxqNehI52yzwmnYpMqfd%2F1AkxLLn%2BSh8agr4kZS2ZPwQT%2FTFOsfTm99r9f8J4z0Dvz7xD3e%2FMwXH1QtbB84huTLZKWdWI4tVVV%2FSiLa9hjPEsn9Qjy%2Bw2aI3e733Y7%2BhE0ZLxjIogqqLCsFGrOu0T%2FOLIQpdtkWzRUmG5e%2FMtnsfVbg%2Fhs72zAGYulgzq7AwwtW9AszE1RMXAeIU5bb1zTnSbqeJIj132%2BsjwMGf5Z3DW3Khpv3hIR8%2B6E%2BkSOzmSKZM8PGRmMt9G3xFxQavXXAhBc17319VlD%2Bgxw8We0w8YipxAY6pgHhcPg8rHIiag69Qdr4U%2B4HM1%2FpmX%2FVZsb6CGrchgoxMxSYeS3onZUSRWw0pQ4%2FwmOwLZQN6vPQDfnIYNa25LcJRvO9Z444dyfM2Uvfga3t8BEDqLkRjNRJPxwZVlGPJM%2Fo4rl%2FfHaF%2FDdy7hMfKsp7D4fjuBAzaGnPQrnvyB4sjFlWxlTreXzYKAJPvqdz%2B3W683dkiqOTljab5SbfbPx7Xoqh8Sfx&X-Amz-Signature=fb0c4a98e8db8f1cb5f48edba8af928f0eaefad29b34aa454348982221e38e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJKAAXLT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWOXXrMBOplOFAce6Yk8dVyksHks5TrvQWeaf90lyX8AiEA6wmpNpnCAqPVpBtMH%2BMiDeQ7bmY%2FsY4QwwyV94aoEZ8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0LBN04OjZ7fU2VfCrcA896f68pTzGDsrPrRzae3NbjkpTyT3CznKO7GHuABG8vq%2BsXAzZq%2FwShpOOk%2FIzxeoRK5ohPHdUwCNhGA4uld2X2%2F9TQKNCbZv%2B1RXg%2FNZ%2B8kBjS5jw%2B6%2BZrPxDWppC3YUnvnozm9HB4lctfAIf%2F1EJomX0v9kaQDY8mVj%2BjGbs8AV%2B%2BU4mLKMahxAJugU8audIHcHmb4McR%2FAWjGsPJQ50K%2BIcHSf32c7BWV%2FylDQVqgUZcGD4IbGPJybcpt8YaBQBFNfwGZfgY5RQMHGkBc%2FvV9feaRyr8ApBDNnUsLUXW8mClQWVfpU1007MrEOAqT3Khf7tZLMzdEgogVWfTDCD9ZRX4LC7jH1ZBJuOCIiLyqQ4iosryakQSWp29bz858BBEeWU92h93UK%2BElg584RFbg9sXoD9JeLCwIJ96tOTa6z6WHiAlNp1SfPcpdlIpRoTdW6AIFKcOtbpl7fqbQISm7lYUPVI4HlYWJmK4rTd8493bFV3Sws3WlpE1UJtE4rLH1L9ZQJnlyrCVYI6NdXaSDKFHFZixs75pZcpiWmGTk3N8jAunMDf0LHexXzFzhOJ6QkAYQib17BNaapj0pG5%2BeqY5yhesFHMKibPsb7r6pxckxVVIXh0nFpVtMNuHqcQGOqUBdALJYq8hxOGiRY875zNNYNlkvV8xHxJkOMpqBphWpuDqO9Vx2XtwprU%2BXIVZLWpKG3m%2FVjprByHdaHIvl5tHrYnGh0T%2FZlnI87gIjD1o%2FTxTTq6jbr%2FP2rNsXk4VKV0WpaPQ92z93ZD3trhVrmQ5IZf46S8ZvwnBKm51aII5ipPeXKn4yH6RQfjJzK9S7MqQsB5X60PFjVGPq8S2iPv16C8c8tTn&X-Amz-Signature=7109e6f84cb52db02f554b38e836a9d56834c206a958c38358f86dc1c94fda66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSW3ETQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmct6wN9FVgaAhlWUvpIpmwm2G6pjxsBZzGj481L40WAiBzhu4%2BwmIc2ieE0k1vIqHiJ7Lswm4Qb8rvyrvJl6TKjyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDm%2BqQR%2BoQ1vh4CR%2FKtwDAjIZ96VF5oCqIvapIBYUjtawYIo4rfutstD0J%2B5ZRl%2BzdYvjubAPmjV0REDwMXDKTNZWzYE0NIYHNync6SiZIOZ3qvAQnoslMDFnTU%2FY%2FNs9Qai8myO05Pqip%2Fb9PceP1T0D0RWaoly%2BJ4JZfpcSNnr%2BYBpqUoZoMIF69qDeUDbn8ecc0gpx0xh%2B2gGS0%2FQ5K8TqW80rVQSCHdQ6%2Fst7M%2Fgh4YiKWQmvhkPZtLh%2FzVJduJ3I0uxJ%2Bsp1oFvpvcDwpiiMTcabWEg7%2F%2F8MdFAYO0NMQ%2BeQ8VXZ2zHhHNt5FhRPX5bnCu28losvuTBf94sXuW5X%2F8TpSlUmJNjRbsBWYjoq92f5RvElKxDhfqyKC8XAbxwmDwVjWtHmDbRQVbL3WMttsaRMyVvXxI5KFogChdlXzGOD7h1qY1RTWFp9bAfRmMVz%2FoAfOLlF6nf4CoeHGdD9wzRXWQpmDPKTmfcVc0yAyCBDArluPVcXXJb0%2FzkXa3bGWfQNptlLEXaqURfNPqWPRBz3Qi5xtx0mAhHWZ7LzitziiJ5mRvK36FDM3ObCfgkAbLLmKpta9krJG1g9ne97C3g85dS6AfaYL66HLihN4gRpCx%2FrO2oo62cSfunIFj0P6GsrZRmgn9Ews4ipxAY6pgFCFdSOAKtOZF0XlozleGflvCUwC4CUDm9iCxV0BeruC0gv0yVjA5raTaUe91JguOB%2F%2FmD7Kbyrv%2BhJLqUBeFmd5Y4G16%2FOvVUpSJR5B%2FG9YQ1Za97ZnrY5xpcVWINN1lQY8R7PnMZgT0V0dUIEjwNqbjDVT2jw%2BktGszpIYjU%2BE6XwVXi4KWe3mCk0%2FU6yi8xU6NCcmcBiyjlcerJWObIg4pqEVns0&X-Amz-Signature=36cf11d53da072ea5ca0ce6df88daf56e7eb7c21a08e6dd6ae69c3624900435b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TEI4UK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRPhyTilTRXxnUas8balfA1gYZjAS2xN1tWeVYO8NMAAiA02D1oNjrhzlTn5vhDaRX3vlc1%2BgZZOlyu%2FbjX5fnUuSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGTUFu3IywfOEdeoKtwD8Nr14Yyq3Fr9IXXuGUlwlyLIYjpGihh3acmF8JDEAxXLJqsIixc9XQCsH%2F%2BM%2BRpBF4lF2rNF6AR4k6EWxtWp1iL2DnRjwcSS%2BzxwGsfolAcRH5XIARVshKHKsDzYXhjXy%2FwdnsIW1YBXwbL6Lf%2BCPxvAR830WQJq8cUBNV1F%2Bv0KZYfbEReCGQV5gVmhsMvH4sVgeeqyHQddEIZgOWW6XA3uHBeiywmRkz%2BUCpPkL4UlNfydkDAbLJrOrj7qhPso8GDqeh4K8s2%2Fzev9IijThLmpNJC%2FLhiFUm7udTu%2BnjbgvUkaz10JioyBWT21%2BdSyUO94cmVi%2BLLT0dMJ9zxqNehI52yzwmnYpMqfd%2F1AkxLLn%2BSh8agr4kZS2ZPwQT%2FTFOsfTm99r9f8J4z0Dvz7xD3e%2FMwXH1QtbB84huTLZKWdWI4tVVV%2FSiLa9hjPEsn9Qjy%2Bw2aI3e733Y7%2BhE0ZLxjIogqqLCsFGrOu0T%2FOLIQpdtkWzRUmG5e%2FMtnsfVbg%2Fhs72zAGYulgzq7AwwtW9AszE1RMXAeIU5bb1zTnSbqeJIj132%2BsjwMGf5Z3DW3Khpv3hIR8%2B6E%2BkSOzmSKZM8PGRmMt9G3xFxQavXXAhBc17319VlD%2Bgxw8We0w8YipxAY6pgHhcPg8rHIiag69Qdr4U%2B4HM1%2FpmX%2FVZsb6CGrchgoxMxSYeS3onZUSRWw0pQ4%2FwmOwLZQN6vPQDfnIYNa25LcJRvO9Z444dyfM2Uvfga3t8BEDqLkRjNRJPxwZVlGPJM%2Fo4rl%2FfHaF%2FDdy7hMfKsp7D4fjuBAzaGnPQrnvyB4sjFlWxlTreXzYKAJPvqdz%2B3W683dkiqOTljab5SbfbPx7Xoqh8Sfx&X-Amz-Signature=c1bcd500d77adffd3a7c4f19ceb9c63bc2f001fd22e04c518544dcde27d8c2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
