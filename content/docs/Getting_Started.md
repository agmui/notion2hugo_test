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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQEH6AVH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBW7zpW354ZejgFk%2BX2Pz0BaxNPUW9Q9fMAKvg65qXofAiBrreMj62s4iTmKIPLIc7Ffnk7u6serjlHCxhxftf%2BOZiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfg7tLcGTizYiUDJRKtwDY9DiAREP6ssIOLUa5YneudSSMl0hdJad7Unc04vkU4iyceri6TKhevwTa7pPRaMi0gwWuZpRnb5UgbQgqEdtftEFaz9YMXoorsc7R0tjjnykEG%2FoKAi%2F6YcGUnW7t6c8VtYDd6SJ8jGhuAlnGj6LT8hFSbyPiJAdAwQnXbhCA0yIhhaDQLtXAt7pC7QcIjcEwZY6gKgsC0HwMw7%2FF8NkfDR06dYbqfyK3kNA1MuoS3jHe0sjjLDyArA2quTBO85oFRQKwuLq0TVvRBXgVRRBRh4YVnuIVjTjB3KtCqZTQB0wVhxae4eolC6G9v9dn4H5FasS1WL94bsKmqA3LvT51P%2BJvvPmCCiH4de%2BMCfeZkt80ptx5SxYzQSuSXck04ozfwe7hiMp9%2F8w1lzWSov%2FSk8jU%2BIdHUZIYw%2BsMaAJOXRaILwjpHMOoHzP2u%2FaOa0cGh%2Ftq51XG64q%2F%2FENc7OckZkj8GZRoVSt7AU%2F6OBLateRN2rgaKQkIkUdisvhmE3gvwgnGsujAFTxGZyX88hA8jR9Dexcwa1oVj3PjzLQGMiN6fMN1%2BNcwowU2MwulByKBfwRxSciDrWFiTm0MPzmlHonAjdFAAmx8CWQPxnGYBP232Punja7F6ZIsdkwueK8wQY6pgH0IRmUeG1WdLix69NgHB0EQx4LR542Wr1p3H%2FJLgrTrmTCq1fhzDipwWSZML2T8lbqXf3BtjJi4eLTaDARGEIws3i7rRRAW6RR5GiMxB27TMH8LP3drtmDZKS8SZIjzYRJRS7%2BBivYBm884RGgFinMfn44vYKXLPBFvc%2BNVmmil7jAXLyY%2BJPUDGnGG3xU8RRr47BSJxbSUu1ogCvamEoTAs%2Bk1Pv6&X-Amz-Signature=72abd994a7821348793b97885a392b40a17b309f31e2b99684dfe328351cc218&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQEH6AVH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBW7zpW354ZejgFk%2BX2Pz0BaxNPUW9Q9fMAKvg65qXofAiBrreMj62s4iTmKIPLIc7Ffnk7u6serjlHCxhxftf%2BOZiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfg7tLcGTizYiUDJRKtwDY9DiAREP6ssIOLUa5YneudSSMl0hdJad7Unc04vkU4iyceri6TKhevwTa7pPRaMi0gwWuZpRnb5UgbQgqEdtftEFaz9YMXoorsc7R0tjjnykEG%2FoKAi%2F6YcGUnW7t6c8VtYDd6SJ8jGhuAlnGj6LT8hFSbyPiJAdAwQnXbhCA0yIhhaDQLtXAt7pC7QcIjcEwZY6gKgsC0HwMw7%2FF8NkfDR06dYbqfyK3kNA1MuoS3jHe0sjjLDyArA2quTBO85oFRQKwuLq0TVvRBXgVRRBRh4YVnuIVjTjB3KtCqZTQB0wVhxae4eolC6G9v9dn4H5FasS1WL94bsKmqA3LvT51P%2BJvvPmCCiH4de%2BMCfeZkt80ptx5SxYzQSuSXck04ozfwe7hiMp9%2F8w1lzWSov%2FSk8jU%2BIdHUZIYw%2BsMaAJOXRaILwjpHMOoHzP2u%2FaOa0cGh%2Ftq51XG64q%2F%2FENc7OckZkj8GZRoVSt7AU%2F6OBLateRN2rgaKQkIkUdisvhmE3gvwgnGsujAFTxGZyX88hA8jR9Dexcwa1oVj3PjzLQGMiN6fMN1%2BNcwowU2MwulByKBfwRxSciDrWFiTm0MPzmlHonAjdFAAmx8CWQPxnGYBP232Punja7F6ZIsdkwueK8wQY6pgH0IRmUeG1WdLix69NgHB0EQx4LR542Wr1p3H%2FJLgrTrmTCq1fhzDipwWSZML2T8lbqXf3BtjJi4eLTaDARGEIws3i7rRRAW6RR5GiMxB27TMH8LP3drtmDZKS8SZIjzYRJRS7%2BBivYBm884RGgFinMfn44vYKXLPBFvc%2BNVmmil7jAXLyY%2BJPUDGnGG3xU8RRr47BSJxbSUu1ogCvamEoTAs%2Bk1Pv6&X-Amz-Signature=b8fed0fde43fad3448e69f4f0f7a038453d20b18f08991a808482fc97364ca93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQEH6AVH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBW7zpW354ZejgFk%2BX2Pz0BaxNPUW9Q9fMAKvg65qXofAiBrreMj62s4iTmKIPLIc7Ffnk7u6serjlHCxhxftf%2BOZiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfg7tLcGTizYiUDJRKtwDY9DiAREP6ssIOLUa5YneudSSMl0hdJad7Unc04vkU4iyceri6TKhevwTa7pPRaMi0gwWuZpRnb5UgbQgqEdtftEFaz9YMXoorsc7R0tjjnykEG%2FoKAi%2F6YcGUnW7t6c8VtYDd6SJ8jGhuAlnGj6LT8hFSbyPiJAdAwQnXbhCA0yIhhaDQLtXAt7pC7QcIjcEwZY6gKgsC0HwMw7%2FF8NkfDR06dYbqfyK3kNA1MuoS3jHe0sjjLDyArA2quTBO85oFRQKwuLq0TVvRBXgVRRBRh4YVnuIVjTjB3KtCqZTQB0wVhxae4eolC6G9v9dn4H5FasS1WL94bsKmqA3LvT51P%2BJvvPmCCiH4de%2BMCfeZkt80ptx5SxYzQSuSXck04ozfwe7hiMp9%2F8w1lzWSov%2FSk8jU%2BIdHUZIYw%2BsMaAJOXRaILwjpHMOoHzP2u%2FaOa0cGh%2Ftq51XG64q%2F%2FENc7OckZkj8GZRoVSt7AU%2F6OBLateRN2rgaKQkIkUdisvhmE3gvwgnGsujAFTxGZyX88hA8jR9Dexcwa1oVj3PjzLQGMiN6fMN1%2BNcwowU2MwulByKBfwRxSciDrWFiTm0MPzmlHonAjdFAAmx8CWQPxnGYBP232Punja7F6ZIsdkwueK8wQY6pgH0IRmUeG1WdLix69NgHB0EQx4LR542Wr1p3H%2FJLgrTrmTCq1fhzDipwWSZML2T8lbqXf3BtjJi4eLTaDARGEIws3i7rRRAW6RR5GiMxB27TMH8LP3drtmDZKS8SZIjzYRJRS7%2BBivYBm884RGgFinMfn44vYKXLPBFvc%2BNVmmil7jAXLyY%2BJPUDGnGG3xU8RRr47BSJxbSUu1ogCvamEoTAs%2Bk1Pv6&X-Amz-Signature=ca8c8715eb7b0f27170c5f983432abd9f34a288fc996546e133e237016ecc76a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGFIVP4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC7xEn84I0Q9cQN706eL6NXzGSPHTwuDctkiKT9tMEkIAiAyCzJDTZ4FOmR5g29tVk5sw0HoPZtqTcteoMuRSCWbPiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbWLa55A31fzlImDXKtwDe%2FGV1EryYB9OSjrh3Plfa39H%2BxL0UctjQ41oyu4pbWXFgGhVL28M615ozvWySBHiqOKJ6rggUhG1xfHga%2BNsYxVmbbK03Y5RY9LocP5XgAU4eK%2FINB8DlWpHptJm2EI4MFMPXmt6AQ4KTzxVoF6ydMNMBw6iA%2FS4ii7Z1i1WzFPkv6lK5In3zxvWeh3Irwzq10ziTdukYF%2FxyBkZtpXVwCGO%2BqiZBYDv8WjcyKoGOWqqMmtylJ3gabPEei1LlnjWF6HE%2BkUNl7XR6sbMcvN9jxf4UZs%2BP7Un9pa%2BFAnP3tgq9%2FXdAoUIe7w%2B5zRBmbw%2B%2BMHVs26wENdQop3CvSu%2FpZrpmRvHFDzP0BWlOnLYb5jSD6RcdqcHmPEf1ar8amHr83DEzO%2B%2B3KqiteeppX3LCsU1K%2B58p2d7IsWRYSFwACtjv6Sb8EH%2FxjSupD94r%2BkYFxkCNZd3799oi594vU%2FMQ4AkKMAozMOBUcoJ0q%2FGAwRkLgjpP%2B%2FSYG%2BBdngwabMBEqDDAZrettnhxhDp%2FitdHNlVclQayugz4uyiD9WhaTVBouVekApvwnfmsUwGG0idRYQtXjAh05aMR65JfoWlQs%2B6FgqFkYpayspjO3Tn2kTOMEydPOEyzNJFPMEwpuK8wQY6pgEEYOR6Nzpr5Z1qWTiAzKeIN2aPeQlQj1FV6LAnDcOtuU%2FqRxMGiHwMU1e%2BxyNEpg9SVIo4Mt3tDhyAyjgB4ZPH%2FOsboohqDmvPFNbyHRWaNg3pu5dNzFQRqNHW3Ptldhn2pGhG0g0KVaDSpF2AYJGH%2BRuku%2FKGsQke5lUVP8kasNjoSYv6M8yD53OD9NuBo%2Bk60%2FYk0A6j02bQE%2BDNbUF5C7kiqqED&X-Amz-Signature=b270be3f81ceb58e8aad5f0f96d814d60d3e9fbd319b76583aad76818de9f7dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA6YDLM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCnF%2Fu%2FXR6z8dhQfy7lPtmJ2Zv4VNk3h2otICZG5dzCcAIgIIOy3eZMQksNMT5QkqFHa%2BNUvDoin3qDc%2Fvw7yKzZF4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLOppwR3%2B%2Fa6%2BNJYircA%2FaocGblzShWLoJCXdHs68oK4WOdcy%2Bh4Xp0jhV3LNll6cX%2BNHoxSyICLCBxLeyPw3oE6Tr1hbEdLT48clQodCjn8TcO3VH%2B5LQtVCEJJhq3LxHAeaUcStpOfefQ%2BwSMyP4kEtz2FhsTyPiBWRf0rEgBPrx6RBljpWuJxDazAPagsTlCP6Lkt%2B1q6en%2FAdNC77AogiK4LW5J%2Bv%2F5GSU5zos9JTTHVnBuvWKmS1V9KcRMuOlhvooMqZ7Tc2iJEC%2FxXZbpUIGSXUi4YZ3N4Z5Ad4oEssbyhOniMslkfn1OvvhEvKPothJOoNGI5pz2nboqHBMTn33ELwD6uPRqu9Gg4iHFhfNCvba%2FQ%2FS6AjseCROwVsvkCfAoKOT8wr5zYaJZMAm121Mtzd7OMp9Nx8tlw1DPywhfeP%2Ff3HnNVWtBpsUEOE6mGM9MhF%2FMYcPIXq8pu4Dmmg7QnI41qBexL8dy%2F3yK8w7fQ0%2BXZ%2Flzk%2Fnw76cbGJ0BDgpFcr9UUK3zoeATVKkhzphe6r7oksK8kP9C3GsnLv36litXaw80e8AswlNme%2BGbFPsCKK1bfugfQt%2F3FM%2B0HSjFrjMXprJie2%2Bv%2BMuFDmvDZfBvsWv14hCwfWlZKb6GYOhcSQwx1h9ZMILivMEGOqUB73d5L4Ts0lofTJTP1h3%2Frfv9s%2FKAgX4Y3chWUfeYT7jYdnVLE4EOBVnXDebDvzHkOErDlEzqp%2BCQEfyZEsu2TgVElT8KQCCgCLTY%2B98CVAKIoQy2gbOm8Vs4KTP0HfdAgJpOK0EM3LWUHWtZJK0IxKBjj0IYy3wRX9o9mvZZhPbC7NLzdTj7T%2B2MLhew89f0pC7fRvMy5A83bXwWZ7GPwmK4Oy6D&X-Amz-Signature=8763b79e2c53d92567943d3e021d9be9e6e7eb09dc92888668006d3a60f3bfbb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQEH6AVH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBW7zpW354ZejgFk%2BX2Pz0BaxNPUW9Q9fMAKvg65qXofAiBrreMj62s4iTmKIPLIc7Ffnk7u6serjlHCxhxftf%2BOZiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfg7tLcGTizYiUDJRKtwDY9DiAREP6ssIOLUa5YneudSSMl0hdJad7Unc04vkU4iyceri6TKhevwTa7pPRaMi0gwWuZpRnb5UgbQgqEdtftEFaz9YMXoorsc7R0tjjnykEG%2FoKAi%2F6YcGUnW7t6c8VtYDd6SJ8jGhuAlnGj6LT8hFSbyPiJAdAwQnXbhCA0yIhhaDQLtXAt7pC7QcIjcEwZY6gKgsC0HwMw7%2FF8NkfDR06dYbqfyK3kNA1MuoS3jHe0sjjLDyArA2quTBO85oFRQKwuLq0TVvRBXgVRRBRh4YVnuIVjTjB3KtCqZTQB0wVhxae4eolC6G9v9dn4H5FasS1WL94bsKmqA3LvT51P%2BJvvPmCCiH4de%2BMCfeZkt80ptx5SxYzQSuSXck04ozfwe7hiMp9%2F8w1lzWSov%2FSk8jU%2BIdHUZIYw%2BsMaAJOXRaILwjpHMOoHzP2u%2FaOa0cGh%2Ftq51XG64q%2F%2FENc7OckZkj8GZRoVSt7AU%2F6OBLateRN2rgaKQkIkUdisvhmE3gvwgnGsujAFTxGZyX88hA8jR9Dexcwa1oVj3PjzLQGMiN6fMN1%2BNcwowU2MwulByKBfwRxSciDrWFiTm0MPzmlHonAjdFAAmx8CWQPxnGYBP232Punja7F6ZIsdkwueK8wQY6pgH0IRmUeG1WdLix69NgHB0EQx4LR542Wr1p3H%2FJLgrTrmTCq1fhzDipwWSZML2T8lbqXf3BtjJi4eLTaDARGEIws3i7rRRAW6RR5GiMxB27TMH8LP3drtmDZKS8SZIjzYRJRS7%2BBivYBm884RGgFinMfn44vYKXLPBFvc%2BNVmmil7jAXLyY%2BJPUDGnGG3xU8RRr47BSJxbSUu1ogCvamEoTAs%2Bk1Pv6&X-Amz-Signature=b12f7698a2e05d412e8c02bb884e287c290a2e1f10d22222a4cd4bdaba307744&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
