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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZRDXJD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAnG2J9Q1MCkpByVZcPenoMn4jC1b8IdQIn7GEwSw%2BxkAiEAyhwt1ygUFF%2BNAFqN6cyYy3T%2B2%2F1PbSciHirLO12113QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUoRRq09DV4TyT0iyrcA0iIrWkYPyXmeRf2zBSdO4NR%2BoE002o4jkuvuve1gC7koZfjq64F48loiMfUEoX7fUNOpoD5EYyz0fEh%2FiGuqxwwfzb%2FQG9zqCn9%2FIgnRPd9YYhiOpVVm4U62dmrOvuKT6e07hM0j5SdZUFpRzxcbLc4pTdpdUi9vjsTMcm%2BFa60iVTZ9MGWvk%2Bt3MA6WoLBd6SbPZ%2FyLY9O4C%2BuSGDsTlyuTqIEH7ILJkjBsEwpMOqoeMJ45gCqk8xXtY5cxIFhVTU3FjnbOvzrDckk2v%2B5RMDfQfxOpTq6%2BG%2BrLQ9O2U1uPuO7k0Jqg8va285wymgQjPpg%2FTt%2BwFTie3o6d22MDT0xqYF%2BwN1T6z6e%2BHvwK3WDLu05fYY8U7Ba%2Fx1bhTS9tlYrD%2F1jlylpmBzR7%2BMo%2F3mtBOe2yxG1KUOeGoyLXpDRiHr0W5OE3tDzAZl3hhEVoqgzWEruHLyGcuyvziBf4hrOw%2FXqw1MZmJI0XrLHbgdOP4XAmNRVpzJDOzb5thZXjspY5nTNK8vjKAND5kmMI14eRKRz9Qo92NfXp%2FyZem8fNVWpV0z%2B%2BEl2qyVlRCHmwo67i9HAlUTE2lXre1H3GqdDwV6voUVOyvvW2ZJw4Rm%2BMQhRYkWQU9bhOB%2FMMO3hvMEGOqUBnE7whbSBNswgfyf5RR0FDHudBxh6Kgk7HG6IC15jN8efGA4%2BHZ5fpqv7d9wOkOUecp1UO6OOv6iJ7wokoPuWCqb3Z3MJjJFOR21Lru6lN7dnXF2FzDxb9prqFk7hkW6b%2BWkU2Cku7AiR%2F1Jr6%2BgrSNR15Mg7wGVSYJ9GrOT8zQfR5BZ6AU7543riLOooAacJj9E1y0SfYr%2FZ9wgWKSq%2BJ%2FeTXLMZ&X-Amz-Signature=c9fb49c9210d87441c6b82208fc8e82937a3185cbf0ffb68398459c4396007a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZRDXJD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAnG2J9Q1MCkpByVZcPenoMn4jC1b8IdQIn7GEwSw%2BxkAiEAyhwt1ygUFF%2BNAFqN6cyYy3T%2B2%2F1PbSciHirLO12113QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUoRRq09DV4TyT0iyrcA0iIrWkYPyXmeRf2zBSdO4NR%2BoE002o4jkuvuve1gC7koZfjq64F48loiMfUEoX7fUNOpoD5EYyz0fEh%2FiGuqxwwfzb%2FQG9zqCn9%2FIgnRPd9YYhiOpVVm4U62dmrOvuKT6e07hM0j5SdZUFpRzxcbLc4pTdpdUi9vjsTMcm%2BFa60iVTZ9MGWvk%2Bt3MA6WoLBd6SbPZ%2FyLY9O4C%2BuSGDsTlyuTqIEH7ILJkjBsEwpMOqoeMJ45gCqk8xXtY5cxIFhVTU3FjnbOvzrDckk2v%2B5RMDfQfxOpTq6%2BG%2BrLQ9O2U1uPuO7k0Jqg8va285wymgQjPpg%2FTt%2BwFTie3o6d22MDT0xqYF%2BwN1T6z6e%2BHvwK3WDLu05fYY8U7Ba%2Fx1bhTS9tlYrD%2F1jlylpmBzR7%2BMo%2F3mtBOe2yxG1KUOeGoyLXpDRiHr0W5OE3tDzAZl3hhEVoqgzWEruHLyGcuyvziBf4hrOw%2FXqw1MZmJI0XrLHbgdOP4XAmNRVpzJDOzb5thZXjspY5nTNK8vjKAND5kmMI14eRKRz9Qo92NfXp%2FyZem8fNVWpV0z%2B%2BEl2qyVlRCHmwo67i9HAlUTE2lXre1H3GqdDwV6voUVOyvvW2ZJw4Rm%2BMQhRYkWQU9bhOB%2FMMO3hvMEGOqUBnE7whbSBNswgfyf5RR0FDHudBxh6Kgk7HG6IC15jN8efGA4%2BHZ5fpqv7d9wOkOUecp1UO6OOv6iJ7wokoPuWCqb3Z3MJjJFOR21Lru6lN7dnXF2FzDxb9prqFk7hkW6b%2BWkU2Cku7AiR%2F1Jr6%2BgrSNR15Mg7wGVSYJ9GrOT8zQfR5BZ6AU7543riLOooAacJj9E1y0SfYr%2FZ9wgWKSq%2BJ%2FeTXLMZ&X-Amz-Signature=7ce2fb62a7baae5535ef15ffd1b75cd5aa73df2deae0831d7dbf06d94bb3d5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZRDXJD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAnG2J9Q1MCkpByVZcPenoMn4jC1b8IdQIn7GEwSw%2BxkAiEAyhwt1ygUFF%2BNAFqN6cyYy3T%2B2%2F1PbSciHirLO12113QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUoRRq09DV4TyT0iyrcA0iIrWkYPyXmeRf2zBSdO4NR%2BoE002o4jkuvuve1gC7koZfjq64F48loiMfUEoX7fUNOpoD5EYyz0fEh%2FiGuqxwwfzb%2FQG9zqCn9%2FIgnRPd9YYhiOpVVm4U62dmrOvuKT6e07hM0j5SdZUFpRzxcbLc4pTdpdUi9vjsTMcm%2BFa60iVTZ9MGWvk%2Bt3MA6WoLBd6SbPZ%2FyLY9O4C%2BuSGDsTlyuTqIEH7ILJkjBsEwpMOqoeMJ45gCqk8xXtY5cxIFhVTU3FjnbOvzrDckk2v%2B5RMDfQfxOpTq6%2BG%2BrLQ9O2U1uPuO7k0Jqg8va285wymgQjPpg%2FTt%2BwFTie3o6d22MDT0xqYF%2BwN1T6z6e%2BHvwK3WDLu05fYY8U7Ba%2Fx1bhTS9tlYrD%2F1jlylpmBzR7%2BMo%2F3mtBOe2yxG1KUOeGoyLXpDRiHr0W5OE3tDzAZl3hhEVoqgzWEruHLyGcuyvziBf4hrOw%2FXqw1MZmJI0XrLHbgdOP4XAmNRVpzJDOzb5thZXjspY5nTNK8vjKAND5kmMI14eRKRz9Qo92NfXp%2FyZem8fNVWpV0z%2B%2BEl2qyVlRCHmwo67i9HAlUTE2lXre1H3GqdDwV6voUVOyvvW2ZJw4Rm%2BMQhRYkWQU9bhOB%2FMMO3hvMEGOqUBnE7whbSBNswgfyf5RR0FDHudBxh6Kgk7HG6IC15jN8efGA4%2BHZ5fpqv7d9wOkOUecp1UO6OOv6iJ7wokoPuWCqb3Z3MJjJFOR21Lru6lN7dnXF2FzDxb9prqFk7hkW6b%2BWkU2Cku7AiR%2F1Jr6%2BgrSNR15Mg7wGVSYJ9GrOT8zQfR5BZ6AU7543riLOooAacJj9E1y0SfYr%2FZ9wgWKSq%2BJ%2FeTXLMZ&X-Amz-Signature=fd22f4542763785af498889f87d44b14e3cdab13fb617232c08041d5e8b5d07e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU43RO5P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCraFJC99bBtMsnofDXaqQMDS5nCHmfKIDYZ2eGDVY2AgIhAI%2FaXaYRfBoAaZZUwgDYz9L7cejnA5fBc0xFq7FTi1ZgKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqVHpY%2FKsc4JZHFjUq3ANxSXJQIIs9oqdtg%2FeMVpxI2I6LW8S%2B%2BwJjiI3ikcpV7dJb5UFeXweqtIChSOdTD2nImxtHnwIs96wwXZlrYNHRbbbhxWNVNLxv2FfxjizfXwoV3wWEkj7A%2F2fSHhOiJjW%2B5OAgvdTVvIkKtr7VWZBuXG5B3aZBQcLuNKqftQUv74gMRANFYroA6RLwAm0o17MetP%2FV%2F68K6MtK3zfQhPn88at6Fcp6qVsDjZDzIZJIDhe1I%2B9%2FbdUYXlYbvX4EH0AwhJCWJdMhUhU2TfAcQmyML%2F%2Fs8qlO9NRMbuZJSwRgMMcq0Ky3xUnmbm8X%2BUrhSFIyHFVKy2TiwggvJ5GIkZTyv9U3CHwX6s%2FqrbKfNGsneSDKpf1D2qU6PN44MOCG7RSoS3pVuA4r%2BpucPiKvQmORX7j%2FdmJjZBkRp%2BD6PPkIigZGZbcf%2Fvd7FhAqx2n4WReDv0sOzm2lXEenaobfVTG0TiYhrB0OMWlcbtw7PZwIKfUKW4PiDmmdOBw0YEzM9pyjuHqnJdfo3c2Ty7f5vkrVKQuGxemqtvk1vF9mllQoHkEFsacR5r8euQcIu6qDrNu8uAUZFtyj2Oqy%2FiNVUo3GAhEHAs8jWM3QO4q57o8loKf%2B7%2FauRIqhtDvPCTD04bzBBjqkAcgNxhn2n%2FnjnEdlMEwAZ4m1ajFA%2FfFi3OsswUrtp8BCQasWCPmlTAE%2B77FGqH0jKGEr437nb5WFLDqGAf%2BBoV%2FEpLtHhAN0NHHfvdZIFVG3dA8jTpyW0ipEwPv7XKKouH6jlrzveW2qkSuFAL%2FRArVL%2BFI5B4H2Kl8ZzsFQC%2FEQpj9T3DmcD0IVrAe7I6GbfHoPQD9hOTFIA0u%2BnvuuDgrj4eTy&X-Amz-Signature=f2e3d374f9899cd415587d02e7ad728954b06816670f281612bff9255f59bc21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPGNJP6P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEaYexrCUhDLavQmFvKvaM4WAVVseliY2IGQgg%2FYuxt6AiA%2BDCU7sXzTjXbK0VJ65LTjHzgOwtTDExf5xzA2hm2PHCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYxNQzzWBWX2LzLL8KtwD6FmnufKUtOmOl%2FnrZNUQkeytQFnMkX8PqBTQnDvpPi%2BpbQp9ZzF801xiYIEB%2FPGnR5mANBV9%2B0r3a8mF0XKvR1eOyUsC5PaNPzmx1vjK9ZL20KCAYNjPrSlMBqAkxnxjvIvEkhjZpSd4o6VoPLY8V6xutEy3o0WAY2O9tLXMoyc4vZViGzB0%2B6d6CCEa6axM5YN0anEQYcyfkOC8xV8bs97fO99xLYDCRJG9l4TabHRfd7HRxctud18nVyvO0NY5JCVOPppUCXs4svD3ubxgAPbA6dqpdJPNkSsDWe4E7bpTYtayIuxlrLoX%2B5NJ6KO5DZYvOFMhj9UabAQhtqH5GvQJUmcFVP95pHyCjA3tuP%2BOV9dFi5qZRMZ6Njwor%2FErYPGINRe6gzViQG4%2FEhd4Ns4CpNcCxMgp8sSOS0J2Xi9fXLEsblBuTgKxLN94R5Xlx5ZrdoCOgQVHojKKMgsrO1CfXuD4KfN7c91Xu5%2FWewlk24wOc7jdM5Jvmi5yLFSm1Jro5E9tHW5jgjQN3gcT%2BEJxtgj%2FdUpQ0q0g53eEcLCn15NCLQv778egbmG9tgLWdxdIrZYb5JAG2NORg344O98pDkplzt8Hr%2B3U86JByBedn3LsYSO6yTPC7nYwyOK8wQY6pgGUhMVLcYWty%2BlbU3UXs5Q%2BmDLndLT3n07L9WxxSSFCU6TYjjyOGytWqdMWGZfztngFSglbOJQgEN4q2OL4HrT%2F4rFAjXQReIpgPH0F7FjKb1wUFoKvLazWocnxcYRkYPknQTasaZq40SSn8Dh746h8cRsRkQW3xMzlIMiNlNAP2Kwh7zeHwiVrEaJ94tR8IhALFryt614bLqo3dDE4bobfcZStYGtG&X-Amz-Signature=05369f155bfcdd2ae05ccb92102425adc3a35b1d7b0add01a7605d7af1e16aed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZRDXJD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAnG2J9Q1MCkpByVZcPenoMn4jC1b8IdQIn7GEwSw%2BxkAiEAyhwt1ygUFF%2BNAFqN6cyYy3T%2B2%2F1PbSciHirLO12113QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUoRRq09DV4TyT0iyrcA0iIrWkYPyXmeRf2zBSdO4NR%2BoE002o4jkuvuve1gC7koZfjq64F48loiMfUEoX7fUNOpoD5EYyz0fEh%2FiGuqxwwfzb%2FQG9zqCn9%2FIgnRPd9YYhiOpVVm4U62dmrOvuKT6e07hM0j5SdZUFpRzxcbLc4pTdpdUi9vjsTMcm%2BFa60iVTZ9MGWvk%2Bt3MA6WoLBd6SbPZ%2FyLY9O4C%2BuSGDsTlyuTqIEH7ILJkjBsEwpMOqoeMJ45gCqk8xXtY5cxIFhVTU3FjnbOvzrDckk2v%2B5RMDfQfxOpTq6%2BG%2BrLQ9O2U1uPuO7k0Jqg8va285wymgQjPpg%2FTt%2BwFTie3o6d22MDT0xqYF%2BwN1T6z6e%2BHvwK3WDLu05fYY8U7Ba%2Fx1bhTS9tlYrD%2F1jlylpmBzR7%2BMo%2F3mtBOe2yxG1KUOeGoyLXpDRiHr0W5OE3tDzAZl3hhEVoqgzWEruHLyGcuyvziBf4hrOw%2FXqw1MZmJI0XrLHbgdOP4XAmNRVpzJDOzb5thZXjspY5nTNK8vjKAND5kmMI14eRKRz9Qo92NfXp%2FyZem8fNVWpV0z%2B%2BEl2qyVlRCHmwo67i9HAlUTE2lXre1H3GqdDwV6voUVOyvvW2ZJw4Rm%2BMQhRYkWQU9bhOB%2FMMO3hvMEGOqUBnE7whbSBNswgfyf5RR0FDHudBxh6Kgk7HG6IC15jN8efGA4%2BHZ5fpqv7d9wOkOUecp1UO6OOv6iJ7wokoPuWCqb3Z3MJjJFOR21Lru6lN7dnXF2FzDxb9prqFk7hkW6b%2BWkU2Cku7AiR%2F1Jr6%2BgrSNR15Mg7wGVSYJ9GrOT8zQfR5BZ6AU7543riLOooAacJj9E1y0SfYr%2FZ9wgWKSq%2BJ%2FeTXLMZ&X-Amz-Signature=543a94d50181dca097e780e09aec8d06a788496d8af7f0f2e5859296687384ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
