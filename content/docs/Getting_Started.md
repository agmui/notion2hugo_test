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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JTSJ7E%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE4KoKmSnNnQT8hFim5lk964v3csL9djMAdZpm31exMpAiEAtkIp1wXgLUD19ef12g9PbofEutrcGyqDWw0Du9T7GbYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJhdAui5vmyXzFImqyrcA7yv0pvXn7bxwnhtowkyA6ssoTsARN%2FENRTTm61yimHKcdksUOVrV7CzO3ZVT6UHEieZLhdvpj7LZsHK4WfcqrRNsa0dLYriuMHTgOgCVqJmyZeOsEZKs%2BPBbMj0WUD%2BWtwvjg2T19ifSzO%2Fb0xm3JQx2m53x%2Bp6gukKn%2BBUgQ7d4TyyBuVrnSpkAkzHXZmWMYZa5nV3dLXksqfo3cD%2BENpzjQ3ihpIYbRVgsDCw57hFh6YgmXxSTHUBzCtgHo4aZ%2BxOxZbjO3sTC%2BJLLAlQAdaeb5Iw4qi5z1sGheOG%2FiOX%2BQY3gmwO%2FZ6nqVKwVhI%2BMsO3nO6xrk5ZFKCgbi88lEr0CiIcOkc4MW6X0V4Rf8IaVyG9Okk0hEii6Zb56iaDWMwadOlAfNMdnr7v8xr3HSUkHBoqGYfaks8RMhzW4Fa%2F8en3skdJoFzRGNa3GDiF0TUcX645VjWxuBtMTx0EVFVCBLw5NPt0AtQu5l6bzDiwc7YArgxPYW9bgLReMXEfUCe5KmDmKdXu4TGNJzc5d6YkRz%2F8FrUsKcNTS41t8uhRx1NxxuoNbP42FSAA9t8vZ8c25M96dzOYwWHklSOubocoDw2ECIICoOZXAsgrHw2w%2Fg5hvtsbzO9xP1IiMKCdlcEGOqUBO1hUZq9FdRzQ7u6Lp%2BS5m8WrKISpwhv9XX97Mm4EXGSoDUjBxPar3WdZ34pFgmUweCBLJMNp9zFvUUE%2FFbp%2B%2FXveySFZKA%2BOYuMydmuGXOBP%2FVl0bwXHECoISmspfFYisRLU22YTI%2BKtDJXQA0GewCEXTxveeM%2BmXwY5S%2BewikesX0NO2F3p37MY%2F1rhRe8fd%2BL7DnOyGePThHL%2B1zsDKZrEgRCF&X-Amz-Signature=10de89ea0119ef8a76629a63ae77f222146e9379d30d6d7338a9625a90a4bd06&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JTSJ7E%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE4KoKmSnNnQT8hFim5lk964v3csL9djMAdZpm31exMpAiEAtkIp1wXgLUD19ef12g9PbofEutrcGyqDWw0Du9T7GbYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJhdAui5vmyXzFImqyrcA7yv0pvXn7bxwnhtowkyA6ssoTsARN%2FENRTTm61yimHKcdksUOVrV7CzO3ZVT6UHEieZLhdvpj7LZsHK4WfcqrRNsa0dLYriuMHTgOgCVqJmyZeOsEZKs%2BPBbMj0WUD%2BWtwvjg2T19ifSzO%2Fb0xm3JQx2m53x%2Bp6gukKn%2BBUgQ7d4TyyBuVrnSpkAkzHXZmWMYZa5nV3dLXksqfo3cD%2BENpzjQ3ihpIYbRVgsDCw57hFh6YgmXxSTHUBzCtgHo4aZ%2BxOxZbjO3sTC%2BJLLAlQAdaeb5Iw4qi5z1sGheOG%2FiOX%2BQY3gmwO%2FZ6nqVKwVhI%2BMsO3nO6xrk5ZFKCgbi88lEr0CiIcOkc4MW6X0V4Rf8IaVyG9Okk0hEii6Zb56iaDWMwadOlAfNMdnr7v8xr3HSUkHBoqGYfaks8RMhzW4Fa%2F8en3skdJoFzRGNa3GDiF0TUcX645VjWxuBtMTx0EVFVCBLw5NPt0AtQu5l6bzDiwc7YArgxPYW9bgLReMXEfUCe5KmDmKdXu4TGNJzc5d6YkRz%2F8FrUsKcNTS41t8uhRx1NxxuoNbP42FSAA9t8vZ8c25M96dzOYwWHklSOubocoDw2ECIICoOZXAsgrHw2w%2Fg5hvtsbzO9xP1IiMKCdlcEGOqUBO1hUZq9FdRzQ7u6Lp%2BS5m8WrKISpwhv9XX97Mm4EXGSoDUjBxPar3WdZ34pFgmUweCBLJMNp9zFvUUE%2FFbp%2B%2FXveySFZKA%2BOYuMydmuGXOBP%2FVl0bwXHECoISmspfFYisRLU22YTI%2BKtDJXQA0GewCEXTxveeM%2BmXwY5S%2BewikesX0NO2F3p37MY%2F1rhRe8fd%2BL7DnOyGePThHL%2B1zsDKZrEgRCF&X-Amz-Signature=ae12e70b12dd10806eb8884a09bdaf293b276b0b450f9ffa30728bc53e4d7a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JTSJ7E%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE4KoKmSnNnQT8hFim5lk964v3csL9djMAdZpm31exMpAiEAtkIp1wXgLUD19ef12g9PbofEutrcGyqDWw0Du9T7GbYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJhdAui5vmyXzFImqyrcA7yv0pvXn7bxwnhtowkyA6ssoTsARN%2FENRTTm61yimHKcdksUOVrV7CzO3ZVT6UHEieZLhdvpj7LZsHK4WfcqrRNsa0dLYriuMHTgOgCVqJmyZeOsEZKs%2BPBbMj0WUD%2BWtwvjg2T19ifSzO%2Fb0xm3JQx2m53x%2Bp6gukKn%2BBUgQ7d4TyyBuVrnSpkAkzHXZmWMYZa5nV3dLXksqfo3cD%2BENpzjQ3ihpIYbRVgsDCw57hFh6YgmXxSTHUBzCtgHo4aZ%2BxOxZbjO3sTC%2BJLLAlQAdaeb5Iw4qi5z1sGheOG%2FiOX%2BQY3gmwO%2FZ6nqVKwVhI%2BMsO3nO6xrk5ZFKCgbi88lEr0CiIcOkc4MW6X0V4Rf8IaVyG9Okk0hEii6Zb56iaDWMwadOlAfNMdnr7v8xr3HSUkHBoqGYfaks8RMhzW4Fa%2F8en3skdJoFzRGNa3GDiF0TUcX645VjWxuBtMTx0EVFVCBLw5NPt0AtQu5l6bzDiwc7YArgxPYW9bgLReMXEfUCe5KmDmKdXu4TGNJzc5d6YkRz%2F8FrUsKcNTS41t8uhRx1NxxuoNbP42FSAA9t8vZ8c25M96dzOYwWHklSOubocoDw2ECIICoOZXAsgrHw2w%2Fg5hvtsbzO9xP1IiMKCdlcEGOqUBO1hUZq9FdRzQ7u6Lp%2BS5m8WrKISpwhv9XX97Mm4EXGSoDUjBxPar3WdZ34pFgmUweCBLJMNp9zFvUUE%2FFbp%2B%2FXveySFZKA%2BOYuMydmuGXOBP%2FVl0bwXHECoISmspfFYisRLU22YTI%2BKtDJXQA0GewCEXTxveeM%2BmXwY5S%2BewikesX0NO2F3p37MY%2F1rhRe8fd%2BL7DnOyGePThHL%2B1zsDKZrEgRCF&X-Amz-Signature=9df2b218b14f15518b43141ce1fd5119af7cc3f9a0d2fe04fdfa0dee1639c1a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OBOUSEF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCnPqLgrvEVyzu9our9NV3cm%2BXyv2YgBsP0dzGe1cixjQIhAKdmfOhX1Pv5mLF1PHmPY9DbWl9k65ormeKkUG8zbM1KKv8DCCMQABoMNjM3NDIzMTgzODA1IgySCGgPeJ9uZWoD9Fkq3AN2fhtBf22qUL8JSwG97iLq0ProvVsCvCnhxyjQoo9q6xtFhsSMtmBzDr0XwT1FI%2BJJT%2BW5%2Ffg%2BYEqBTLdheGRpyun0kBvCRRA9ULacInT9nhAgDjO9K3AXEbybDJTiUeaff1Gq7uo0mSReh7FO5u7GN%2BK%2BoKgMrN4jrn%2F6C%2BEltZQneIkc0Ete1bd8DF4u073N1bm35Lu7eW84U1oXiECbHLRsZMn6LdKbPShvgnMM56%2FSAoQCXlxw4Nx2i5K%2BSR7bkyUjBlXvhy1XkxrjLf5WQi68N9xzqmjIVZ%2FefLcv1MmJolGd9DyXL2mitjIaokcvqD780kMWKrtZQr%2BgoknbFK4y2ie%2F6y3TRCHUhAImpkqcjhwL6OgXScHBUPT8IjhWsIUcrzayj3c0Iiqx3Mk6xTa6iBYA2yj4YI5EABdcZtU65Snq%2BQqdfKNxnh44naK22chk0maxYoGZSXLs8T%2FoIaIK5hlP1FbAk6RCKuktVDkww6YyPGbGBPScyU2vOj3YImB5DQMD7vtjXcD7t1PKksJ1P88EjAz2Nz4%2BlGZLo3qinz2MAFxqDH2w1eJVxg6XyW2hm6X2GsNLrBpo%2BGNbpN2O69B0SljssRoWNHiiwN7g9JXkZD6SCEgSezCCnZXBBjqkAWQYCUhvR5qXenIRfbeNml1IA%2FUvTkelJ3ritwI%2Fz9pCpEC8UoDTEWf9tjAGhUMmPNoghc2FdUO%2B0tiUMazd6tGYipC8kY4CbooP6LGtJ0dyCyw2mrqCKHqrgT%2FX%2BJNwW0jbrcg%2FFaHidxPJ8XpnwgghNC8xFFlmCYmI4c7a6GTqZpJ0PL35VL7FBtGMYEu%2Bm6fHfY2KxfmMuSb1ZxN5epJfXrTc&X-Amz-Signature=c9597298624b9573f1e4e6630754e73e9dd2fcd4351b0f3e5e2c4b1c113eb34e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGE2F2JR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEB1RaZGCdT1X6vFFXSo4po9vqPwHNyw3EBwxgPin23SAiEArM5HdI9O26PFpqiyTsIAHAKaGZknUfwGzjT6HBtRYqQq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDYnzKtIINicDE73syrcA5XUpZ5zalcjM4XD%2FRmduI%2BrhCkvQXkIac36vpFWOqpR53gdAzD08oDhBdBdiA4jHDOZGXbzdRLxxg%2FbeSjL9fuINq2ASrByjVQjk4R14k90PAvQ%2BF5WPlyNnT9gsvqMn6WYwrjmYAVaAkXPZit%2Frohzrw0FZLJ85smNYv0L27jhs33vSxUwrI7PXqyB5GMAhrVnBp%2FMWk1DvUZnZie3qSzhlAwqoozxiH6U3WceThKAN6a9NgAa0aKMZrElNs2X2tY%2F3daA4oWjGM98K4yDNtPnp%2Bisy11n5iqxmgDKSXsbNywikVQeJH3aCewl2Q1mErmVNV0JX35p7yXRVPenSG0su8pbrWfqAPjq6RgiaqZO3eIcZjkdGjo4WfxnJaZu5Kxq%2FCBxl%2BzY6jWDrs9ENk2vB%2B82m6kOVVfHOZwBcRml7gv1I6f8N%2BQ9ISW%2BorWRVCbQj3lutvY81cnAs1HZ9FlwJxZ8EbrnIVjIKfuV7ps%2FoZNysS6v%2FbTOg8SjTVXoLEhM1VfuMJ72%2BPmRE04r%2B4jqibDKOvCoDzJL7GnuxVtwok8PViFkSqQwJylIHwfUdFKbl%2Fh8SWskdSfhnAFmgILJuQ2Y5IYzN6yLpGFfiFHhz4yaKzSQbhOPOBY9MMWdlcEGOqUBeNYqrO%2BIOOnlMZ8ufg%2BJ%2FCzHtV96swfIxpSGFDBSCC1F%2FD3LslgZ1Ne2ec5TLbsd7AZVXE6pyiswh6coRBBbkmX9NZEBXDG6jTlaZbkrHvxCLS7dTtDwRiTLD6KfKPctfMiR0ikfjKEX82LrVKn7oq1XkIZn9AP4rtSqVTc0WRMpCQhCXelpRO74WI7QW2WTiBSTe9Ftu8SQvDmnh0vFUr5ScHej&X-Amz-Signature=0c9b98a64f8c03dc144e763b434270be7e6a178bcdccb0e6d74d2ecd46a0fe69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JTSJ7E%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE4KoKmSnNnQT8hFim5lk964v3csL9djMAdZpm31exMpAiEAtkIp1wXgLUD19ef12g9PbofEutrcGyqDWw0Du9T7GbYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJhdAui5vmyXzFImqyrcA7yv0pvXn7bxwnhtowkyA6ssoTsARN%2FENRTTm61yimHKcdksUOVrV7CzO3ZVT6UHEieZLhdvpj7LZsHK4WfcqrRNsa0dLYriuMHTgOgCVqJmyZeOsEZKs%2BPBbMj0WUD%2BWtwvjg2T19ifSzO%2Fb0xm3JQx2m53x%2Bp6gukKn%2BBUgQ7d4TyyBuVrnSpkAkzHXZmWMYZa5nV3dLXksqfo3cD%2BENpzjQ3ihpIYbRVgsDCw57hFh6YgmXxSTHUBzCtgHo4aZ%2BxOxZbjO3sTC%2BJLLAlQAdaeb5Iw4qi5z1sGheOG%2FiOX%2BQY3gmwO%2FZ6nqVKwVhI%2BMsO3nO6xrk5ZFKCgbi88lEr0CiIcOkc4MW6X0V4Rf8IaVyG9Okk0hEii6Zb56iaDWMwadOlAfNMdnr7v8xr3HSUkHBoqGYfaks8RMhzW4Fa%2F8en3skdJoFzRGNa3GDiF0TUcX645VjWxuBtMTx0EVFVCBLw5NPt0AtQu5l6bzDiwc7YArgxPYW9bgLReMXEfUCe5KmDmKdXu4TGNJzc5d6YkRz%2F8FrUsKcNTS41t8uhRx1NxxuoNbP42FSAA9t8vZ8c25M96dzOYwWHklSOubocoDw2ECIICoOZXAsgrHw2w%2Fg5hvtsbzO9xP1IiMKCdlcEGOqUBO1hUZq9FdRzQ7u6Lp%2BS5m8WrKISpwhv9XX97Mm4EXGSoDUjBxPar3WdZ34pFgmUweCBLJMNp9zFvUUE%2FFbp%2B%2FXveySFZKA%2BOYuMydmuGXOBP%2FVl0bwXHECoISmspfFYisRLU22YTI%2BKtDJXQA0GewCEXTxveeM%2BmXwY5S%2BewikesX0NO2F3p37MY%2F1rhRe8fd%2BL7DnOyGePThHL%2B1zsDKZrEgRCF&X-Amz-Signature=23b250629255953386ea4e322a58fcf4c444dbbc296202c2fe7b700a071328ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
