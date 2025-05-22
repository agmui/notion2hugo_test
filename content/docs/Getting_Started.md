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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPEHDOC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCz4Zh738El9yXe6vBSGqTBnRV5hFWPkpx9C%2Bb4Tuh8bAIhAIjUnUQ2Hevl8b7z6LvltO%2FeQBQ%2F1R3fl4TL%2FIfQ5GOHKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B2NnMg4G1vFIYjpMq3AMkxR2UDNBsM7dKlDkLl3VpcjM8DGQBWMREuYzJcbo8eeb%2BwLBO0uptmsbKrJB4KzIVpo0oLTt6QBxYG71u2xxPKfCYtUJ0OiKxsCLsufWyeGrPQxqKFtMCr6EsaHgrMyrv92Be7MD5wcuPCMWV%2BXKpjCSgRBrdtECol5BHEgR7GRJIuBrYGxWENA6bYBviw%2FvlWsij0uywiRf1%2BmU1emiWKdM%2Fg%2B1dOMkspBo%2BGz%2F%2FrxUvhI%2BOFKmZGBFQJNVcO0Jq1Ijxl8Bn571fULnvWRK4p%2BANT1n3mGlrfHLzoj8dqAJVrqDOYsj7EYuJaWZinWoKF2uz5TcgQKQH0tcx1Tkz43HqY%2FnH6cDI5vqYxCGBtuoZsOG8QuW5VBW5dMBsbIONsMIaGf4AWYrF4%2FBeqKNOqlXc0ZTl%2Fdfn9O5X8pQF1hQohMvBxU47YFHLzRzrr%2FxgQe69KmJq7%2F8T324BC3dFcnV9Ox0f1eGVT8%2Fe2mVZ8QJtMAJhML6pAR8pNiwiP9gELrqyiz%2BreI1R2JIKl45oBjJ7DybjB6%2F%2BaWm%2B0A1zWa6QiSMbVHAQVpxBMWL3fMfKVxVEnXyyhfc5F9Cozjy%2Bbwh2isTF1c2Z0239p4IcThnvKiZAXWjBUuJO6zDJrbvBBjqkAQydsFGDwfJI811DXrCi8J5RRf5zbrEnBsHjJvlnW3AitVR%2B%2FeYqWSpVKYgqRuVMKqoWd4fLswUl4LtLNg5rXRFAuqNeCw%2FgFeDO2JpyOF24XPgXb2xLe4NojU6NbrjNsKDyjbomV8NXLM2rdZE2b%2FcGMpQayCCJeyyu2iuO3LzYJtQQA6O4TDUhRPVohZjDWAdrOHSQBVZi2%2BiBIDoHcr7%2FlgrO&X-Amz-Signature=7a58c6c5183cde75cb4c22ed5f992ae575c086bc1bb563340c2df74037238b15&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPEHDOC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCz4Zh738El9yXe6vBSGqTBnRV5hFWPkpx9C%2Bb4Tuh8bAIhAIjUnUQ2Hevl8b7z6LvltO%2FeQBQ%2F1R3fl4TL%2FIfQ5GOHKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B2NnMg4G1vFIYjpMq3AMkxR2UDNBsM7dKlDkLl3VpcjM8DGQBWMREuYzJcbo8eeb%2BwLBO0uptmsbKrJB4KzIVpo0oLTt6QBxYG71u2xxPKfCYtUJ0OiKxsCLsufWyeGrPQxqKFtMCr6EsaHgrMyrv92Be7MD5wcuPCMWV%2BXKpjCSgRBrdtECol5BHEgR7GRJIuBrYGxWENA6bYBviw%2FvlWsij0uywiRf1%2BmU1emiWKdM%2Fg%2B1dOMkspBo%2BGz%2F%2FrxUvhI%2BOFKmZGBFQJNVcO0Jq1Ijxl8Bn571fULnvWRK4p%2BANT1n3mGlrfHLzoj8dqAJVrqDOYsj7EYuJaWZinWoKF2uz5TcgQKQH0tcx1Tkz43HqY%2FnH6cDI5vqYxCGBtuoZsOG8QuW5VBW5dMBsbIONsMIaGf4AWYrF4%2FBeqKNOqlXc0ZTl%2Fdfn9O5X8pQF1hQohMvBxU47YFHLzRzrr%2FxgQe69KmJq7%2F8T324BC3dFcnV9Ox0f1eGVT8%2Fe2mVZ8QJtMAJhML6pAR8pNiwiP9gELrqyiz%2BreI1R2JIKl45oBjJ7DybjB6%2F%2BaWm%2B0A1zWa6QiSMbVHAQVpxBMWL3fMfKVxVEnXyyhfc5F9Cozjy%2Bbwh2isTF1c2Z0239p4IcThnvKiZAXWjBUuJO6zDJrbvBBjqkAQydsFGDwfJI811DXrCi8J5RRf5zbrEnBsHjJvlnW3AitVR%2B%2FeYqWSpVKYgqRuVMKqoWd4fLswUl4LtLNg5rXRFAuqNeCw%2FgFeDO2JpyOF24XPgXb2xLe4NojU6NbrjNsKDyjbomV8NXLM2rdZE2b%2FcGMpQayCCJeyyu2iuO3LzYJtQQA6O4TDUhRPVohZjDWAdrOHSQBVZi2%2BiBIDoHcr7%2FlgrO&X-Amz-Signature=6538c9631b082f049d3eb92b0895a5fa4c2806d94e5439e83f345679329750b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPEHDOC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCz4Zh738El9yXe6vBSGqTBnRV5hFWPkpx9C%2Bb4Tuh8bAIhAIjUnUQ2Hevl8b7z6LvltO%2FeQBQ%2F1R3fl4TL%2FIfQ5GOHKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B2NnMg4G1vFIYjpMq3AMkxR2UDNBsM7dKlDkLl3VpcjM8DGQBWMREuYzJcbo8eeb%2BwLBO0uptmsbKrJB4KzIVpo0oLTt6QBxYG71u2xxPKfCYtUJ0OiKxsCLsufWyeGrPQxqKFtMCr6EsaHgrMyrv92Be7MD5wcuPCMWV%2BXKpjCSgRBrdtECol5BHEgR7GRJIuBrYGxWENA6bYBviw%2FvlWsij0uywiRf1%2BmU1emiWKdM%2Fg%2B1dOMkspBo%2BGz%2F%2FrxUvhI%2BOFKmZGBFQJNVcO0Jq1Ijxl8Bn571fULnvWRK4p%2BANT1n3mGlrfHLzoj8dqAJVrqDOYsj7EYuJaWZinWoKF2uz5TcgQKQH0tcx1Tkz43HqY%2FnH6cDI5vqYxCGBtuoZsOG8QuW5VBW5dMBsbIONsMIaGf4AWYrF4%2FBeqKNOqlXc0ZTl%2Fdfn9O5X8pQF1hQohMvBxU47YFHLzRzrr%2FxgQe69KmJq7%2F8T324BC3dFcnV9Ox0f1eGVT8%2Fe2mVZ8QJtMAJhML6pAR8pNiwiP9gELrqyiz%2BreI1R2JIKl45oBjJ7DybjB6%2F%2BaWm%2B0A1zWa6QiSMbVHAQVpxBMWL3fMfKVxVEnXyyhfc5F9Cozjy%2Bbwh2isTF1c2Z0239p4IcThnvKiZAXWjBUuJO6zDJrbvBBjqkAQydsFGDwfJI811DXrCi8J5RRf5zbrEnBsHjJvlnW3AitVR%2B%2FeYqWSpVKYgqRuVMKqoWd4fLswUl4LtLNg5rXRFAuqNeCw%2FgFeDO2JpyOF24XPgXb2xLe4NojU6NbrjNsKDyjbomV8NXLM2rdZE2b%2FcGMpQayCCJeyyu2iuO3LzYJtQQA6O4TDUhRPVohZjDWAdrOHSQBVZi2%2BiBIDoHcr7%2FlgrO&X-Amz-Signature=212ec43d8f17ae4cc081f165959ec3676f571017757edf46edaa59ef21c9cd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RN4IRL7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIE95Efpr7lc2VBBTo9E7nuVNlETPL2EPMZb2j2F%2F%2B6aCAiA0p62yAmVMS1KhiRWLC5a%2F9QT7iZTB8fFGgyxrulGUSSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZhg2rTHgjY2Gj2UKtwDqxy%2BpJl9WS11QTqpheBaLV6FhfisuHZPSXYYnX74q3yOVXVkSWefFbHbk6p%2BromrkfHfToXYq0oq1RxWxQZxnCIrhatsmLJ84LXhD4X7q4s07EMQm0U6w%2FoI2ERBX2U62wGWieXI24YMedl%2BsWQoh5jXu4GbS0Kra3D8uIMvAvbrQKmk3H%2FZ4tCqu0MblgOhF2e1PLKzr0icowWWk0YeblQ%2FDY7c1HCm1fBpJMdfHN6uOD71OnOktiKlihX2ZScpSQblESaGZH4lj%2BtkNu3ERjJRjJUYvcwFGOkKD3BFbGcO5V%2FAnDKpAxAJvf%2F8DfkJ2DL4CZf68DXk0ANYfp3fFBOg0sopXuNxQisYNVcUgJ9oO0wBEZEbkDIODoQkBQ%2B7AAn3ri%2FZYpWCe1liCC8rD7n5OvOuHQJ5YVg4xwkv%2BE2nN1fzqa1wLwbf6Yn%2FTHEPretZeLGdCDGr9kOBB3LKLxtPJv4twEEn%2FtyC7HIvn%2FP0YStIxsy6cjGHIlnjr3K0z9gXrSCYR0%2FmE3mCCM6VnT0XlP6fHneG013%2F%2FMI1C0PUgD6EvQq5EvyDHJ6EW2UgCICXJKkmsmi0R9ucDieH0mcN9l6G8RuduVd6KnanCxevETotMhHcCIbdcYQw8K27wQY6pgFHLhqA7QQmjWOIb349ByC%2BBTOaE0GlKq%2BrkAnfPiuleEVz7XwAyrObXZou8%2FuRpossKMiAB%2BZEa2ilMibkkcoMlvgpCaJfQ9a%2FpWxVBeFQPJf0T0h1vBEXudpFrHHNUcO9hvQqZFHYkIErU0oZEBW%2BBQVHblHJUsEgZ1m8mRupoewq3yFOiCMTXlks9AldBIYj%2BqwAkLYW%2Bq2IMQvStwxCo5cqXfKz&X-Amz-Signature=1c9fbc3522930d1d567e5e109bc7df92534c5b4b4b38dabefa7781ca34e91cae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQ4NMKB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIERfPfMAm4x6jubX55pJZeqkthHefQg2tMUE3yJg1WRiAiBcsxDnao0HU128VCTxVkmnuPJv%2FPGKA2h1hYVfNjFPdCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DQ%2BWR%2BZIyAosn0OKtwDjsGeRrEZKcTBb7J8lw4hmdaONHb%2BeJ4kq0iwzta4hOjbcRfjQCXaNqpP0NYGrrus2UHaLKc97ltpvsD4G2UlPFffEWmEc2HPeafhN5N1R5omIRZHu3LQ0uYm5m6Eo%2FU%2Fp%2BB64W86BcjqF3TDpCk95nc2QNsBvB1XT3Swrupv4vQAPy0dRLp0WGsenmW24kn3Cl3rF0V34NfieOe0XLQFD%2FrMlyPvpaWskeoKgWq6GhrFRSdVKlR2hX2xrRrabYu1I7CMkUr8xbUT18lNgoUufTXjrzI3hQ65bmLwDby1HHVvijutHw9lND%2BTPIOMQSTia4HksL6doZk39zsmhR89JFYcDYE8xx2KnNrphSm5uue66vfm%2FESSrYc3DvedVroUwdVA4AlE1GLinYHV72jozWiWS9nwnx6OcOlnkYqUJPv6bfEtZucpuVaM%2FfD2ayRr7SxBilytX1k3yEdPdXP%2B6OyE8z0ajYXR90XFLUbsERyacZqr%2Bwen54UvMKcGPgbo0SANyic2ZYCXZ%2B6UpMtDQ0tNzdHR1273C3wUdMdAmDdU3a84JoYAYBjG6a3blrjznCN%2FJQijMGBlptzSrieaMveI7leKOMRpo%2FvGBleNuH%2FkD%2FP79RX7vBbPWQQw7LC7wQY6pgHmSJf0quMlIRNL9oYS%2BYy2BaB14p3UnorhBGwvXznz64RH%2FlrqqrVz2JAxa5z0lXPsO3IDjlZbKUTy7rtk6lVo4Ye%2FnTupZaECeCcBblSdHYXGMBu1w8jRqK6m7EYwBMlZyL%2BqJOhwkt2zBwr6x7UTnqPphdKKYawX6GKjDksqYlDZCY32TxU81v38Hj866tao8xU0LE4c3qjbP4sSHjqCsQ9Egcq2&X-Amz-Signature=12f45ecc749f7c665d043a90947e0086fc4082593bae6579ef65ef78245446e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPEHDOC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCz4Zh738El9yXe6vBSGqTBnRV5hFWPkpx9C%2Bb4Tuh8bAIhAIjUnUQ2Hevl8b7z6LvltO%2FeQBQ%2F1R3fl4TL%2FIfQ5GOHKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B2NnMg4G1vFIYjpMq3AMkxR2UDNBsM7dKlDkLl3VpcjM8DGQBWMREuYzJcbo8eeb%2BwLBO0uptmsbKrJB4KzIVpo0oLTt6QBxYG71u2xxPKfCYtUJ0OiKxsCLsufWyeGrPQxqKFtMCr6EsaHgrMyrv92Be7MD5wcuPCMWV%2BXKpjCSgRBrdtECol5BHEgR7GRJIuBrYGxWENA6bYBviw%2FvlWsij0uywiRf1%2BmU1emiWKdM%2Fg%2B1dOMkspBo%2BGz%2F%2FrxUvhI%2BOFKmZGBFQJNVcO0Jq1Ijxl8Bn571fULnvWRK4p%2BANT1n3mGlrfHLzoj8dqAJVrqDOYsj7EYuJaWZinWoKF2uz5TcgQKQH0tcx1Tkz43HqY%2FnH6cDI5vqYxCGBtuoZsOG8QuW5VBW5dMBsbIONsMIaGf4AWYrF4%2FBeqKNOqlXc0ZTl%2Fdfn9O5X8pQF1hQohMvBxU47YFHLzRzrr%2FxgQe69KmJq7%2F8T324BC3dFcnV9Ox0f1eGVT8%2Fe2mVZ8QJtMAJhML6pAR8pNiwiP9gELrqyiz%2BreI1R2JIKl45oBjJ7DybjB6%2F%2BaWm%2B0A1zWa6QiSMbVHAQVpxBMWL3fMfKVxVEnXyyhfc5F9Cozjy%2Bbwh2isTF1c2Z0239p4IcThnvKiZAXWjBUuJO6zDJrbvBBjqkAQydsFGDwfJI811DXrCi8J5RRf5zbrEnBsHjJvlnW3AitVR%2B%2FeYqWSpVKYgqRuVMKqoWd4fLswUl4LtLNg5rXRFAuqNeCw%2FgFeDO2JpyOF24XPgXb2xLe4NojU6NbrjNsKDyjbomV8NXLM2rdZE2b%2FcGMpQayCCJeyyu2iuO3LzYJtQQA6O4TDUhRPVohZjDWAdrOHSQBVZi2%2BiBIDoHcr7%2FlgrO&X-Amz-Signature=15b7d216f412c33e7f49a6183723ec226a2cd1069fd1673f0b51bfa678b3f077&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
