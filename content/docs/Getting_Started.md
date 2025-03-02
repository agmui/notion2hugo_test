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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BU3ZUSM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDINM7r4QyBBqFN0zTSLXf7SF0PfdztzgDQZzFpSIcNmAIhAIpLud8FdRCLuxXgHIw9jxgWexwx%2BrvckrKOB3Yn9asMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZl2A%2FPzA1r1OaKVsq3AM%2BVfDWtTHakCZwoGE6w7bmlpL48HwcXL%2FbKB8zGZIddQ84wh9sNEWq%2FzAIVUDH0Br%2FbTl%2BF%2B3YVYAVTN1IeTu1TAyU8WDyZhSLd%2Flq0KVbcM7L4TzZgnBuacU9XbGV2Rz4Kd4IJxFA%2BXWr7VE1dsO0fsB0tRmZvIyZiERKIt3VzuTQrLawFvYmY1l1IbG69ACB2ocdGyK68RRNxsY9Urq2hFkg8mviKT1cTH3qQdycsRGGDEAwOKh8hvAqwZQ37G0yl6h%2FzNeUQp4vs9qsluEHUCX365tZ%2F936S8BxEyAeBy90Ka58ll%2FnK%2F8ZP9ge9HLLYZVxAfnNrriViVNDOuLEI8Nrrynr7AROJvLrWeKN7G9cwwNALpc%2B%2BRqXqTMJHUB7sXuivY3%2FmVJ8L7Jc%2FQOfs0TXS0Fl%2FHdTs9E0aMKRBWl71B1EtJsPBotOBqSrtpt0G28ckcbSfMok36%2B3ifUOVcOCMM9lKQRLI7n6DyZWpRDuXhji%2BGTQqKL6cAq9IrAjgrD2vjK%2Ff8v1hFdVVoRc0ntIjT1sJN3UG2n9q8vidfFvV7dNw21vSpFdAfHWvSc9MiKYFsaU4jSXOOLa4Ip%2BUJGK0TVGfBboCtrRckKG9qdE1%2F5Kh87s9BidkTCb9o6%2BBjqkAQlrRs0DC8hTpnczk3Z1q5AULNx8G4f9fFoL0D6H8W4zEmyGM2vsVoDX6siYDXp0UsZK6n7Sjz%2B2q3VM%2FYu%2FHZLhUXuRqAy0Jpmq9cPfAF92eYneoywAWu7%2BjYmyUKI%2FnClzsbZ2%2BfHN3ZoRXWVH8NmVzSKcGy4jfPyHiFOzq1jj%2FksnTkg5n9uPO8GLkXYu4taTSAzAwKqZuOo4v5TNY0eca9uY&X-Amz-Signature=235505f5b974b63db46e440ff6536d643b6126ad360cd559a1a6086d6b79bdbc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BU3ZUSM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDINM7r4QyBBqFN0zTSLXf7SF0PfdztzgDQZzFpSIcNmAIhAIpLud8FdRCLuxXgHIw9jxgWexwx%2BrvckrKOB3Yn9asMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZl2A%2FPzA1r1OaKVsq3AM%2BVfDWtTHakCZwoGE6w7bmlpL48HwcXL%2FbKB8zGZIddQ84wh9sNEWq%2FzAIVUDH0Br%2FbTl%2BF%2B3YVYAVTN1IeTu1TAyU8WDyZhSLd%2Flq0KVbcM7L4TzZgnBuacU9XbGV2Rz4Kd4IJxFA%2BXWr7VE1dsO0fsB0tRmZvIyZiERKIt3VzuTQrLawFvYmY1l1IbG69ACB2ocdGyK68RRNxsY9Urq2hFkg8mviKT1cTH3qQdycsRGGDEAwOKh8hvAqwZQ37G0yl6h%2FzNeUQp4vs9qsluEHUCX365tZ%2F936S8BxEyAeBy90Ka58ll%2FnK%2F8ZP9ge9HLLYZVxAfnNrriViVNDOuLEI8Nrrynr7AROJvLrWeKN7G9cwwNALpc%2B%2BRqXqTMJHUB7sXuivY3%2FmVJ8L7Jc%2FQOfs0TXS0Fl%2FHdTs9E0aMKRBWl71B1EtJsPBotOBqSrtpt0G28ckcbSfMok36%2B3ifUOVcOCMM9lKQRLI7n6DyZWpRDuXhji%2BGTQqKL6cAq9IrAjgrD2vjK%2Ff8v1hFdVVoRc0ntIjT1sJN3UG2n9q8vidfFvV7dNw21vSpFdAfHWvSc9MiKYFsaU4jSXOOLa4Ip%2BUJGK0TVGfBboCtrRckKG9qdE1%2F5Kh87s9BidkTCb9o6%2BBjqkAQlrRs0DC8hTpnczk3Z1q5AULNx8G4f9fFoL0D6H8W4zEmyGM2vsVoDX6siYDXp0UsZK6n7Sjz%2B2q3VM%2FYu%2FHZLhUXuRqAy0Jpmq9cPfAF92eYneoywAWu7%2BjYmyUKI%2FnClzsbZ2%2BfHN3ZoRXWVH8NmVzSKcGy4jfPyHiFOzq1jj%2FksnTkg5n9uPO8GLkXYu4taTSAzAwKqZuOo4v5TNY0eca9uY&X-Amz-Signature=8363edc821fa76137307fa6736353650428da6f1e82dcdac3870e7f7fad00f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Z3MPHK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFSwderjHY%2FE99YoKq7KZHva5EP0%2FGmmACQzIy0vZtZ6AiAI8vy%2BolaEAftXqHgkboU7L84M631uoLOf67Td3BU%2B4yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSICCmpjPWzQU9c0vKtwD2w5uybjPDFAlEyTjh4UXtAkaSIM%2B%2BehoHE59Hs3%2B7yo9JlWzDZwZBXMnkyFgY1zrtJRKNZSO9FdFrLGU8fE%2FYkcMvYdab2fKQCHk5yn8UHN3eEyitc6lxhCRyF0RtUXCaJjU%2F8GLinwpSQaoMd%2FBHGXe6EAjn4lfVuxq2ttl0LRkjwgB31x%2BL%2Bs7drJqdlV3Oq6fF%2Fo3OdH442GXX3So4mbSqz5C8VBXzN8oKenVwpV6R7%2Byq0xYkja8htFJLPnvNVB1ppmkOzCHu%2B6LrJj4p418uLKY6hl9JdN0lLubor3GIon%2FOkwCjuDgCcy0qbkXHH2dcR5sRgdl1TrE2r5ORAg95aqNaRcepC8tIDDrypiYNI7WXGfikKEti8kAh0FXDQAkYir2wUw4pf0zyPnliYmtOm2RvdWHwbqSKrqQusFt3uAhZp0Cl7LaUvJt8KcEwlzXY3I%2FparDIOJXzwk3c81joW1kj2VjphZXwgNR8QRvd6zrSNtM0AadPpG2F%2BaUy6KSWoKNatWwpI4haifmgoolHgqv6%2BihNREwYe1Ixm6e%2F0ak5dVLKWYe5wGKpdX%2Fg4nZvHUJ%2Bev39iQ2j0hgPHtVP7jrGKN6yEkxCEw7%2BDQOfSVI%2F6t%2BRLZHuYUwmPaOvgY6pgGTA2y3OKgd6D5Hz4Il4J1SKqHQLW1LARnJIsxV4YxfVl3ezZDpCEZ%2FKLD6wivxQnWwDFGMSEHFNq6GPLbhVFtsDUNHY3FN4ouU3nBzbDr4Njhjzpyer8ORkXqjmY0Pf9jzajb1h0E%2F8dCZ8dmpGyj71Z22ZlJsP4uX4fDLQRzsF2xqotVWHRKGYXvSGczGy4u9IVaGP8YHAOKY5%2FvRxQneKs3JmH5d&X-Amz-Signature=047efcac2844a822f9042a9a9ca1c32f17b40279d1d4d27ca2e60354a9ec47a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJRI526%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICQ7agazcflpry69y4daSeps6L5JV6KTg8vQjryzUFJiAiEA0VbOJBgrjXPPrHteUWRjDdu4IC8HB3oCk8CFvFlTiVUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK2xxQ3p70QLZ3avCrcA36gBTcDqD1Usg%2BIFWwNKuSzJfxdCE%2FTRQmhbQ8Zfbk7mQeRbPIY5%2BYfpZw4LsyZTMqkU5Iu0tPSuncClzTvLYP76POHVm1xLMO5K2V1sgQ%2F9nUHKgtdK30xhVh3tSRAOWc9%2FxdCONaxAIkCPhPdKJe8kqVvSM5ji%2BbpuA6cShqCjuVolZaXpIqPIczTmzPzmK1sHm4DDp3%2B%2FTO%2BcMh0DPr6rxhFqMcggJGDPjgQybmztjo09Atxzp8o2B9fLuno4lqtHFtZI4ABh3ZOQiUEM1FhygIfTxzqUzbh%2FDWPT9rDqNo%2BMVvI4QfaUJ1ESqgJRoHQmeXbvDVka93zx%2BQEtFTXjiTDCzmGqGjusbtq3s5We2Ec3vXX0Ept4q0l1FSI%2FCXdHr49iDFIRFHLyqDgSaMJbcOVRJNp0oKiRW4JVgSt3xPb1s%2BmXjnXkBSFZx41vyDXe9j%2BGJyYzS6FPw4tMqDoJmeEV7%2F1fSfxPYQuuODGoxprjtys9q%2BMDlY04v1EVwKjbgzSAnFmNe4ac6oDXwkKxfzrmBj8lX7GsP4ARmgkf12%2FMywREn1HvWd%2BaQx5ZL4OpxnVpnPIAqPMSf5ioxw6REpQONnyp7IHGI%2B9jfasyTmF%2FJmN1rMq2X5SMOL2jr4GOqUBnL1ruHOHtRPXezJGu%2FkbFLrq05NX9yxmehO5rCjUXxDLnkaXSoMgj5FmmHN2KErSDbXDY4WnziUyjOQOXuskQiErC5kgDaEFyCb125QmJWxdevYDcF2JaNd7jyfAhBApM%2F37QUBIQw9iKOMLXGKtpfOr%2BXSyxhWSiaSZZFpesumlkiMtguYaQfL6KoTv1IxW37mPDINoKk6d20YZHuwFOo%2F%2BomTF&X-Amz-Signature=367a2dd8df4a8422bd4505abec99651e32aa379bd8b0540e04c91e73ed97be70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BU3ZUSM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDINM7r4QyBBqFN0zTSLXf7SF0PfdztzgDQZzFpSIcNmAIhAIpLud8FdRCLuxXgHIw9jxgWexwx%2BrvckrKOB3Yn9asMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZl2A%2FPzA1r1OaKVsq3AM%2BVfDWtTHakCZwoGE6w7bmlpL48HwcXL%2FbKB8zGZIddQ84wh9sNEWq%2FzAIVUDH0Br%2FbTl%2BF%2B3YVYAVTN1IeTu1TAyU8WDyZhSLd%2Flq0KVbcM7L4TzZgnBuacU9XbGV2Rz4Kd4IJxFA%2BXWr7VE1dsO0fsB0tRmZvIyZiERKIt3VzuTQrLawFvYmY1l1IbG69ACB2ocdGyK68RRNxsY9Urq2hFkg8mviKT1cTH3qQdycsRGGDEAwOKh8hvAqwZQ37G0yl6h%2FzNeUQp4vs9qsluEHUCX365tZ%2F936S8BxEyAeBy90Ka58ll%2FnK%2F8ZP9ge9HLLYZVxAfnNrriViVNDOuLEI8Nrrynr7AROJvLrWeKN7G9cwwNALpc%2B%2BRqXqTMJHUB7sXuivY3%2FmVJ8L7Jc%2FQOfs0TXS0Fl%2FHdTs9E0aMKRBWl71B1EtJsPBotOBqSrtpt0G28ckcbSfMok36%2B3ifUOVcOCMM9lKQRLI7n6DyZWpRDuXhji%2BGTQqKL6cAq9IrAjgrD2vjK%2Ff8v1hFdVVoRc0ntIjT1sJN3UG2n9q8vidfFvV7dNw21vSpFdAfHWvSc9MiKYFsaU4jSXOOLa4Ip%2BUJGK0TVGfBboCtrRckKG9qdE1%2F5Kh87s9BidkTCb9o6%2BBjqkAQlrRs0DC8hTpnczk3Z1q5AULNx8G4f9fFoL0D6H8W4zEmyGM2vsVoDX6siYDXp0UsZK6n7Sjz%2B2q3VM%2FYu%2FHZLhUXuRqAy0Jpmq9cPfAF92eYneoywAWu7%2BjYmyUKI%2FnClzsbZ2%2BfHN3ZoRXWVH8NmVzSKcGy4jfPyHiFOzq1jj%2FksnTkg5n9uPO8GLkXYu4taTSAzAwKqZuOo4v5TNY0eca9uY&X-Amz-Signature=315cca5ee56bb9e3466706e62c306c16e39901e5042410d8aca945dea12d8406&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
