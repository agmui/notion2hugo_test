---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4Z4CGC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTBa%2FvvNMjtwWWAArIh%2FQ3C1UNlSdy%2FKLSkN%2Blxl8begIgYANNDxl%2FrYcnr65K7HLGoscdm7YeYmkqFbVnz2t7Mcsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMbw5%2Bm%2B1GQmH5ohXyrcA1gH6yJCKaNgV4JsHCZJ9J6blvDULYbBNQVlVm2Rap2zN6JVnUqJHrXVyXzMJ0UpCHEn%2BTV6gY0MykNe0WTg0MEB4kb5WYWET%2BQLF9WgmfauVQmU2jqVd%2F7u7Ouhl8LTN1RQhylxbEQdydGhfYh04RAxWsM8X4poiMZzTYYCbwcL%2BVnf15slVw9TSqAFpmzz%2FDfSy6M38A5qV3DUe4DDeelG%2BOhyOQtdt7X84i1qOBNrjvuC5CkzFbo6B3qygQLPDI1n11m8nxgRbJEOWHSEZ4G%2FVBUBBFqqZ8Uz8gN4uZXLzqYc04lnB79qm6NfMIoQj9JeVca42%2BylN4fhfFvLuIAYhLGMk1Fnx5l0rLT0bmPx96ZYihd0NJ0MAsoIShP0OHwhtQImHn0tQt5vMweZAL4gsSCd09kQ9vwQ9OT18eHDZ3N%2B6ig4uKUcF3KKY7u8nwSpMTP7epW3Z7hCL6CHRiGFFzVGZPnCvV0UFN%2BYBohIJtXfgcHMgPDbozxhEmvTbV3syUO4h%2FzVUJD5i7%2FHAiTwbPU5fpAxJzaC2jlr%2FhwVsJoYSiOkyhIarAAXfRMxS%2FqqYfv477dUYeKNGo0S1qrIUKAJ4%2BT0%2BlYLAJpzxC8pf6R8%2FBihjmCvcJMBMJCup74GOqUBXyncfvUGpAjRbdI41dTYcvVGG6YB%2FMssRm6qt0%2FXf%2BFIPsgvW1yPtNXE1dq12lAE7i%2FIa15ewzNySz6EJp1SuLSYhpEVAvHvfVjzrEDYkwWpCjWUtwy8EmYwjc4hSmGXJuerazpAwxS%2BLYu1icO7Hle5RYauAKh9gGgRgKkeJ4Gc41r9jvDUxPcV9hg8Fxtw0sru0iGTVbdxUSsKC4GdUBA3VjTT&X-Amz-Signature=0834e8c5ad7a4649d05cf5071f9447e11259310b11a948ba14eb59b1289f40dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4Z4CGC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTBa%2FvvNMjtwWWAArIh%2FQ3C1UNlSdy%2FKLSkN%2Blxl8begIgYANNDxl%2FrYcnr65K7HLGoscdm7YeYmkqFbVnz2t7Mcsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMbw5%2Bm%2B1GQmH5ohXyrcA1gH6yJCKaNgV4JsHCZJ9J6blvDULYbBNQVlVm2Rap2zN6JVnUqJHrXVyXzMJ0UpCHEn%2BTV6gY0MykNe0WTg0MEB4kb5WYWET%2BQLF9WgmfauVQmU2jqVd%2F7u7Ouhl8LTN1RQhylxbEQdydGhfYh04RAxWsM8X4poiMZzTYYCbwcL%2BVnf15slVw9TSqAFpmzz%2FDfSy6M38A5qV3DUe4DDeelG%2BOhyOQtdt7X84i1qOBNrjvuC5CkzFbo6B3qygQLPDI1n11m8nxgRbJEOWHSEZ4G%2FVBUBBFqqZ8Uz8gN4uZXLzqYc04lnB79qm6NfMIoQj9JeVca42%2BylN4fhfFvLuIAYhLGMk1Fnx5l0rLT0bmPx96ZYihd0NJ0MAsoIShP0OHwhtQImHn0tQt5vMweZAL4gsSCd09kQ9vwQ9OT18eHDZ3N%2B6ig4uKUcF3KKY7u8nwSpMTP7epW3Z7hCL6CHRiGFFzVGZPnCvV0UFN%2BYBohIJtXfgcHMgPDbozxhEmvTbV3syUO4h%2FzVUJD5i7%2FHAiTwbPU5fpAxJzaC2jlr%2FhwVsJoYSiOkyhIarAAXfRMxS%2FqqYfv477dUYeKNGo0S1qrIUKAJ4%2BT0%2BlYLAJpzxC8pf6R8%2FBihjmCvcJMBMJCup74GOqUBXyncfvUGpAjRbdI41dTYcvVGG6YB%2FMssRm6qt0%2FXf%2BFIPsgvW1yPtNXE1dq12lAE7i%2FIa15ewzNySz6EJp1SuLSYhpEVAvHvfVjzrEDYkwWpCjWUtwy8EmYwjc4hSmGXJuerazpAwxS%2BLYu1icO7Hle5RYauAKh9gGgRgKkeJ4Gc41r9jvDUxPcV9hg8Fxtw0sru0iGTVbdxUSsKC4GdUBA3VjTT&X-Amz-Signature=4b1a0dcf7383ca3ee6b38501f5936598dacaf56bde7f0de58e1911d80ca686a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHWRPZ3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9v%2B1Vvo2XgGhrw7ryvdxQaXUxlzAsVD%2BbX55SVZOvMAiEAm6IJjgjusekL6MG0NSkh66kUBadzsftdyYUCzilQf3Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMpCvo5rMMCLfbfFRircAzCx04zXAmabaDvR1y63PgD59KK%2BSWDNhwOEoj6prJbl7FY9%2B1E3HyEpHRHEbsAAmgSK4ZjrOahMeOWJBwoPUQ55pVKVdluxY%2FiPRIHebCM5FaaFzE8s95rPutyarKMOw8Q4NPYAvKeSajsWBujNeHykydppMC06vb%2FCYHnmBN3NfiVUBUBY%2F4T8u4dzrxv2j%2BTelhbT1EOPR%2FAwjlGtt%2B37eXHp%2BmMh4ZCG7RPgQv%2BnHf5KRhACAkdt6chuz6J9oJi3zsXomszM2QkqR%2FgXuuJ7NPkX8U%2BTHMT5pqbzIPbiyltGpH7XpZzTiuxHZFqR04iLrQRM1s6lyiwzijzzTH0xiESEj8jPlaLVy9%2BDk5cZsqljYu8koj%2BQodK0Y9Sh3NnNOn%2B3DGqsjulJXidb8wE6nl1iDwCjw1ri9aN0ak8ZGb9Mi8MB7h2PAcvMgQP%2FwBgQBSDp87xj6i0b9mmW%2Fn%2FrdHUuYhU9HiGYON%2Bnb0DimKk7R1SrUBkJgvqI2ngM8Kd3Sl8LdwwGK%2FuntmoEu8NsEhUOqpFiCg5IBPZKzZXprsySPfvm1Dy%2FJlssiajXMEfZTXQKcEpMoKLdESViDlbZ%2BHhQFyb8V7the7cHeByQGyEn4jP0rVfejJx1MIeup74GOqUB9OrQ%2FadW8gK6nmP8K0Epm9viaJitV8Ivwdi7XEn94GfmuI5aQgaSZN7MgsDqN4dYOfs%2BynPh0VCZV7K13BOXsghQscjBOo7wP7sW6PQvjzEqowZWS%2F5cvRiTUsleipsvFzT7QDOqCKzgGNTzY275eqk4u%2BqL2tZJhzZUuvGqleZ%2B%2FoDjHFD1v%2Fl0I9wMFX32BfULPYUW1QlyKxzlgkUdKmDdQiO4&X-Amz-Signature=005c29ad854b5ffc47eb88e78e8dda56b9d3fd209d132718d9d12833509814ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUXNQCT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBW4xiyXW3jesT5mvcJH9sZ9ZhyM4VUcPT7bcpfT9FCsAiACbCPVaD2BOblxldwxRin6YXtox0aL4Fl0Q0L3Drr%2FYCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMlTGkg3GY89YLGun%2BKtwDvaMRkRjHDetW%2BLWAqcuVE3%2B2Jw0MBfcvavxSj6LFLEwwC0Ycymq%2FE6%2BOcgtrYuNCY2xGSX82fmV1bCfqzIGyY3k5fFF5sU3%2BmYJyHuzLJZPxRHMEEvRTk7IP4GgdbVtN3ypO%2F3bRXgRR4dcBlkjl5wWoN0nQsAuOfLZYlYnLNNTF3LMID2jAHl1COnTS7MUo9gw%2Fn3viBHb7BjePYp180VRRBGJs3cVn2ASqYEv8bHkVszpZDe63Ye8gGcuSsWuAKpFmbPyl%2Byq3LYGY2F65VPqukdMB%2B0mBr8iGVuxR7qEb2hNsvKykmmG3TOEIuJady%2FymKn5nLQSl2txhNQWJ7EUYoIEa3rP9ehxYoWpgiYaLGrwyGZNxZxheIy%2BFt2pd%2ByNsni46jHE9M7mHb80UzA6ZX%2BkR69C3EEOo6aVtxSc%2FTo7N3nVrvLYJ1VDfvgv5knKVrPdDJy4QCXcJGxwMHSU74uGJd0S%2F3opaIkEFeYPN4zODUQKhQE8F3A4NEb15S9kE3Yz%2B50TAF1Aah6KGOksK%2B7bNA83eQl29O8oZ4dmeEIs3UkcDGbz2TWgUu4sHPRbb5XNfN%2Fqm13bpRrgajv8j7oSB1nAFMzklHc%2FZ4VSKy85xa50uKCp7UP0wjq6nvgY6pgEDiAHjyaAdE6V7lrg9qGrsGlW8zpqkMGapHaB3jN6ifv85jVqYrbxlrKGyF2JPxyPvjp5VHZBxGzkBzo62MvqiEFW2LREPXeBKKeeLLp3RTCzU%2FEFf1ZHR5knGW%2B12xnJSTOJZBhYI6l5%2BTIPUkM7JHYq%2BoP9zvRpc3I%2BSN4KelOxzcCNxLM%2BJLzOIJarFBRyuYui1WKSHb93m8QvG7CBzriIXBKMe&X-Amz-Signature=257d5917a0ef98d180001caca0a33ccb597eb1952913256d09e8be2e13907ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4Z4CGC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTBa%2FvvNMjtwWWAArIh%2FQ3C1UNlSdy%2FKLSkN%2Blxl8begIgYANNDxl%2FrYcnr65K7HLGoscdm7YeYmkqFbVnz2t7Mcsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMbw5%2Bm%2B1GQmH5ohXyrcA1gH6yJCKaNgV4JsHCZJ9J6blvDULYbBNQVlVm2Rap2zN6JVnUqJHrXVyXzMJ0UpCHEn%2BTV6gY0MykNe0WTg0MEB4kb5WYWET%2BQLF9WgmfauVQmU2jqVd%2F7u7Ouhl8LTN1RQhylxbEQdydGhfYh04RAxWsM8X4poiMZzTYYCbwcL%2BVnf15slVw9TSqAFpmzz%2FDfSy6M38A5qV3DUe4DDeelG%2BOhyOQtdt7X84i1qOBNrjvuC5CkzFbo6B3qygQLPDI1n11m8nxgRbJEOWHSEZ4G%2FVBUBBFqqZ8Uz8gN4uZXLzqYc04lnB79qm6NfMIoQj9JeVca42%2BylN4fhfFvLuIAYhLGMk1Fnx5l0rLT0bmPx96ZYihd0NJ0MAsoIShP0OHwhtQImHn0tQt5vMweZAL4gsSCd09kQ9vwQ9OT18eHDZ3N%2B6ig4uKUcF3KKY7u8nwSpMTP7epW3Z7hCL6CHRiGFFzVGZPnCvV0UFN%2BYBohIJtXfgcHMgPDbozxhEmvTbV3syUO4h%2FzVUJD5i7%2FHAiTwbPU5fpAxJzaC2jlr%2FhwVsJoYSiOkyhIarAAXfRMxS%2FqqYfv477dUYeKNGo0S1qrIUKAJ4%2BT0%2BlYLAJpzxC8pf6R8%2FBihjmCvcJMBMJCup74GOqUBXyncfvUGpAjRbdI41dTYcvVGG6YB%2FMssRm6qt0%2FXf%2BFIPsgvW1yPtNXE1dq12lAE7i%2FIa15ewzNySz6EJp1SuLSYhpEVAvHvfVjzrEDYkwWpCjWUtwy8EmYwjc4hSmGXJuerazpAwxS%2BLYu1icO7Hle5RYauAKh9gGgRgKkeJ4Gc41r9jvDUxPcV9hg8Fxtw0sru0iGTVbdxUSsKC4GdUBA3VjTT&X-Amz-Signature=2324b3cd420412ee966f63a20fbec4c24f41689a8f98262b4b89c4b2fdc436db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
