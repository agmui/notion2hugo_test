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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQEVSXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC0rCDJcynYx63RrJabOfQ3objenOOBGSU3cffzOjR8dwIhAN17HtIzYCGeG0sx9%2FgDrS12qj0iXUbeSn5D%2BS4neuIIKv8DCBQQABoMNjM3NDIzMTgzODA1IgxXeUFCCq0XTv3bF%2FEq3APsPLwYOAhoVutnsD8kuiyq6X8QQBQ6sujBK3PYy50QRGW7cScNHf2A7dX7G0nX3qqb5rvZQ3Rf2dr%2Fz2fcZ2BpYFysCnXTeIrnteYoq4TnOnuhYGu2zk05dNZQxSSjDVGlcO1Q3YmR2iD3p%2FJKffZGmiyvIviOp%2FZ%2Fp%2B6rAZfxkCMPsl3K%2B1%2Bc3f8qc5UoUEVIp61K2c39CmV%2Bx7KrCr5zxYjJjidG2uLOfBlmXNdhBpuEoS7kcOoAgN1eX3aSotGuX7cw1yAN18Ir3MBMUX%2B3WnX3IUb%2BH763zrfc6Bie%2Bdl6hQeKOhza2dv79EsSJtA6o9MYYyBEOJ%2Fbgi41jPW8c2MpulKD6V7y4sqxpLHfdzjj%2Fy9oK4GkmOPjqX6ie01mzhLRgutYNiEIlzp2owuu3rJAkBQWKX38IEQbWvkiPKqADcS%2Byw42nLBHrwcQ%2BlD8vPwI2jYyyUpR%2BnDdI1ws8uUmtpre3iZO6sSxFLkraOCjS7jZJiWW9ipK9RDWi5aaE2uDcltCuZ1%2FoQ%2B%2BrjyA225w5aNt%2BQj2WNb451yQp%2FBT4fwDL85QBH8%2BxsRsohZY62UF60uEJJPu7LYoalgz3LMTnyMS768AQ2r59TLHigyQ6At%2ByJ0FU3BL6zCKt5nDBjqkAUpcNJQSkUT3f%2FKWYJhnuYZ%2B2ka%2FqsWFt4PJbJbnAoogTFXCROB5e5qP%2FHcwPij0lEAjBbTXgp2baTCE1knbqg1MexCmvelfOb52uRd%2Bf8W8UlofxwztE%2FYe0WwwWwVLvbwRqK54lmnzj%2FpruNTzJLpRGr62TzbyTbO3aWCOjnLHReEqEkVaplZ6hLbKrRjSqWV0nt0e8XGRqgkOi9yKqhqqAeNF&X-Amz-Signature=76917e31d9b3eadf10ad0d31baa0eb37e7d088146456a8d9ac109db61bdbccbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQEVSXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC0rCDJcynYx63RrJabOfQ3objenOOBGSU3cffzOjR8dwIhAN17HtIzYCGeG0sx9%2FgDrS12qj0iXUbeSn5D%2BS4neuIIKv8DCBQQABoMNjM3NDIzMTgzODA1IgxXeUFCCq0XTv3bF%2FEq3APsPLwYOAhoVutnsD8kuiyq6X8QQBQ6sujBK3PYy50QRGW7cScNHf2A7dX7G0nX3qqb5rvZQ3Rf2dr%2Fz2fcZ2BpYFysCnXTeIrnteYoq4TnOnuhYGu2zk05dNZQxSSjDVGlcO1Q3YmR2iD3p%2FJKffZGmiyvIviOp%2FZ%2Fp%2B6rAZfxkCMPsl3K%2B1%2Bc3f8qc5UoUEVIp61K2c39CmV%2Bx7KrCr5zxYjJjidG2uLOfBlmXNdhBpuEoS7kcOoAgN1eX3aSotGuX7cw1yAN18Ir3MBMUX%2B3WnX3IUb%2BH763zrfc6Bie%2Bdl6hQeKOhza2dv79EsSJtA6o9MYYyBEOJ%2Fbgi41jPW8c2MpulKD6V7y4sqxpLHfdzjj%2Fy9oK4GkmOPjqX6ie01mzhLRgutYNiEIlzp2owuu3rJAkBQWKX38IEQbWvkiPKqADcS%2Byw42nLBHrwcQ%2BlD8vPwI2jYyyUpR%2BnDdI1ws8uUmtpre3iZO6sSxFLkraOCjS7jZJiWW9ipK9RDWi5aaE2uDcltCuZ1%2FoQ%2B%2BrjyA225w5aNt%2BQj2WNb451yQp%2FBT4fwDL85QBH8%2BxsRsohZY62UF60uEJJPu7LYoalgz3LMTnyMS768AQ2r59TLHigyQ6At%2ByJ0FU3BL6zCKt5nDBjqkAUpcNJQSkUT3f%2FKWYJhnuYZ%2B2ka%2FqsWFt4PJbJbnAoogTFXCROB5e5qP%2FHcwPij0lEAjBbTXgp2baTCE1knbqg1MexCmvelfOb52uRd%2Bf8W8UlofxwztE%2FYe0WwwWwVLvbwRqK54lmnzj%2FpruNTzJLpRGr62TzbyTbO3aWCOjnLHReEqEkVaplZ6hLbKrRjSqWV0nt0e8XGRqgkOi9yKqhqqAeNF&X-Amz-Signature=207a5f5035e29db6c20d0f2f564b949cc39e70c0d66e9bc7b6ac3a2de571440a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQEVSXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC0rCDJcynYx63RrJabOfQ3objenOOBGSU3cffzOjR8dwIhAN17HtIzYCGeG0sx9%2FgDrS12qj0iXUbeSn5D%2BS4neuIIKv8DCBQQABoMNjM3NDIzMTgzODA1IgxXeUFCCq0XTv3bF%2FEq3APsPLwYOAhoVutnsD8kuiyq6X8QQBQ6sujBK3PYy50QRGW7cScNHf2A7dX7G0nX3qqb5rvZQ3Rf2dr%2Fz2fcZ2BpYFysCnXTeIrnteYoq4TnOnuhYGu2zk05dNZQxSSjDVGlcO1Q3YmR2iD3p%2FJKffZGmiyvIviOp%2FZ%2Fp%2B6rAZfxkCMPsl3K%2B1%2Bc3f8qc5UoUEVIp61K2c39CmV%2Bx7KrCr5zxYjJjidG2uLOfBlmXNdhBpuEoS7kcOoAgN1eX3aSotGuX7cw1yAN18Ir3MBMUX%2B3WnX3IUb%2BH763zrfc6Bie%2Bdl6hQeKOhza2dv79EsSJtA6o9MYYyBEOJ%2Fbgi41jPW8c2MpulKD6V7y4sqxpLHfdzjj%2Fy9oK4GkmOPjqX6ie01mzhLRgutYNiEIlzp2owuu3rJAkBQWKX38IEQbWvkiPKqADcS%2Byw42nLBHrwcQ%2BlD8vPwI2jYyyUpR%2BnDdI1ws8uUmtpre3iZO6sSxFLkraOCjS7jZJiWW9ipK9RDWi5aaE2uDcltCuZ1%2FoQ%2B%2BrjyA225w5aNt%2BQj2WNb451yQp%2FBT4fwDL85QBH8%2BxsRsohZY62UF60uEJJPu7LYoalgz3LMTnyMS768AQ2r59TLHigyQ6At%2ByJ0FU3BL6zCKt5nDBjqkAUpcNJQSkUT3f%2FKWYJhnuYZ%2B2ka%2FqsWFt4PJbJbnAoogTFXCROB5e5qP%2FHcwPij0lEAjBbTXgp2baTCE1knbqg1MexCmvelfOb52uRd%2Bf8W8UlofxwztE%2FYe0WwwWwVLvbwRqK54lmnzj%2FpruNTzJLpRGr62TzbyTbO3aWCOjnLHReEqEkVaplZ6hLbKrRjSqWV0nt0e8XGRqgkOi9yKqhqqAeNF&X-Amz-Signature=1f112827ac97622eba38a459891545ad6309a3cebebe1fc1d7f266e966af2e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLWK542%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICJgY6ovaL3c2aYGdsmzO4ITpqqR71DEJ54JCyw3io8SAiEA3UxVAotlfzRn74xNjHrcNv7JmGFL4uFX6sy3SSXm%2F14q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMbhvV1o8pM3Jg27zSrcA9QAlq8cVBaO6KTCjRklp%2FXS1J6NuvX2Bw%2B81FAOsVmjxMTMswN2U8vyZoYfO4dsD69dKJsgjo4tvjoM%2FGxMZOm1T%2FMWecdfrLinKyejzmleYwEvapVJGON0Z8R5kTTCb%2BIVwUGwOwSWp5TigJw4PcepIiD1zmZgVZn4EFSDBICex21fACRmrvdAY0dF5gKYpDo9vyqCVBpmLPWwkLtsY5HTwO6rDL4%2FMg5H5VfWqJjLsVgqJk5xXjYQSpdY4nTqn5jxhWrQ06Cx%2BbCwKDRkGH88BY%2FLhwsWjUC%2BV8EkRxPR6%2BXpz8qHFXeFap%2FArdETlchLZyNw3Q9duxYNMf6ZYVM%2BO%2Fvtzl2phYR%2FlnwMzE27DAc8pbsMQEAAOPmtVX73%2B%2Bl2v%2Fm5e5jEAxByV04MmnOly1vK7rlv2k0ENixUw6qEtsNaojN6U4wrN6WffrPrza%2FL6VEHOnYCCWmx6PzAw7i6qLfsTbEo1CIJ9Ey4J53PyIMHy%2FoBExJ2gA3NWHr8wQl2%2BVm84XgtrxD2qEZi3CJ0IbqOF2dpAr5Aux49i91P6Lfw8Gv8KR0kmRVdbt3kAD6Qq8H6BqaL4YnNJMSxoY4Qqt3pLSkFtRgZ3tgY0E7KbNNnMQgPDkkqBg6PML63mcMGOqUBaeQoGcIaTE8jn7jMFLBsDdZRn03t0yYSg3moHKl1Ldp6aLydMJNV4ElqssssxnuKK6WsEAQUbPdI9omL6wJQCOhuFKEwpdFgJ4mZ4ZcSzwnKy33eynIruoGWZlD2QEsPvceebjC02sEYcqUBIfWGbXJL9ZoKPfHgi94r3Ihcmf7SrN9OLFAqdnxv5fAuQh6BrdWHDYqE3iVRm07iCX2G2%2FCqcs7m&X-Amz-Signature=b9618cbe52d370240c624e73834fc2bc385495f1f0f8cba61ec7b3989849c1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RHYYS5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDzSRA6ktbJymiMMF%2FdGKQRedQmhlzZJdhV3C8lkgOMOwIgLbm9PQ6iyTnUIZNWSIB8xGBPYRh5%2FCpuZmGrFFyb7Vcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIxK%2FxLVXnI20oZWNircA%2Br6gymdNiwjdYeCTIORGqi%2BhpJ51E6AbDNlYe7wEVqmcnGobE5gZW%2FhaznCjP4gcVhd2EMe2Sfiqub%2Bsnilf67UVlXDpGR%2F6soDPJh9kkj79K%2FK6bOcdHKz9F55m7jS5m8pQo4M5BmYabz018gGiRZcDefa4N5ipEGFUkvrwZOz6aewxSBL4mIJyZNh3aY75dGV0RxbSVaNVdCoSFawTNioE3N0YQiyqgwdUY1z5xtIHNs7UOhLY1yHVdij1mSK%2FuRxjmHrzpoyO5KgXycN0b3EaU5GkR2oq5weZxqyemo2IvWTSFsx039WuzjWQYIkoBIFlDbJq9EtmggRQu4kNDmVuJq3ruwgnbp7v6DbF7FfZCtFFoHzXWM%2BGhS1DJYEA%2B8tyoXHU%2Bwc9IQ0BK1iMxD4VpjH0LtOzoRTWGpjqJd%2BNRj7wjH6ObMt5TYdlV7FsuaKB3hOvTOPbyz5zE7rS5y8h3V3Qt2PbQHAiE5V7Fn%2BLkCq2SGwS1LxhGxrAV4eSXPnQEcpn6zJMWf11XuXYkPfJ45POGcpch4ae4CaDiokUa%2Bv4e3S%2BPVkPxq0dqhffNhp4DpoWNjVVQhijD8RN25YwthJi8PXp6HcocwPZrFQV28Tt4xKtmBb%2FbcsMPO2mcMGOqUB47vyUqFfJiMW7MOM7toGaXQ5Qc9mNnCQLlse0hffQylBBQh7l5JeDgNL8jReEE2dFxMapzvY%2Bcsbf3ZzVty45Ug2%2BKRB%2BKgMo3ZEIBF0v7xt%2BGh5RtTWJ2nvU%2FGM%2BfKAiUiN49siaK1hmj7q3nqxZRS0j9465zkaeYsBboGhethVTUMvaP%2FGSfHl8kvuHrUnV9Ye06ggmeIKHOo8wiiEXfsz4KMQ&X-Amz-Signature=b2024c1788c52573fee12c2a226b846cfd7e9eab94b9bd933154359a532f9371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQEVSXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC0rCDJcynYx63RrJabOfQ3objenOOBGSU3cffzOjR8dwIhAN17HtIzYCGeG0sx9%2FgDrS12qj0iXUbeSn5D%2BS4neuIIKv8DCBQQABoMNjM3NDIzMTgzODA1IgxXeUFCCq0XTv3bF%2FEq3APsPLwYOAhoVutnsD8kuiyq6X8QQBQ6sujBK3PYy50QRGW7cScNHf2A7dX7G0nX3qqb5rvZQ3Rf2dr%2Fz2fcZ2BpYFysCnXTeIrnteYoq4TnOnuhYGu2zk05dNZQxSSjDVGlcO1Q3YmR2iD3p%2FJKffZGmiyvIviOp%2FZ%2Fp%2B6rAZfxkCMPsl3K%2B1%2Bc3f8qc5UoUEVIp61K2c39CmV%2Bx7KrCr5zxYjJjidG2uLOfBlmXNdhBpuEoS7kcOoAgN1eX3aSotGuX7cw1yAN18Ir3MBMUX%2B3WnX3IUb%2BH763zrfc6Bie%2Bdl6hQeKOhza2dv79EsSJtA6o9MYYyBEOJ%2Fbgi41jPW8c2MpulKD6V7y4sqxpLHfdzjj%2Fy9oK4GkmOPjqX6ie01mzhLRgutYNiEIlzp2owuu3rJAkBQWKX38IEQbWvkiPKqADcS%2Byw42nLBHrwcQ%2BlD8vPwI2jYyyUpR%2BnDdI1ws8uUmtpre3iZO6sSxFLkraOCjS7jZJiWW9ipK9RDWi5aaE2uDcltCuZ1%2FoQ%2B%2BrjyA225w5aNt%2BQj2WNb451yQp%2FBT4fwDL85QBH8%2BxsRsohZY62UF60uEJJPu7LYoalgz3LMTnyMS768AQ2r59TLHigyQ6At%2ByJ0FU3BL6zCKt5nDBjqkAUpcNJQSkUT3f%2FKWYJhnuYZ%2B2ka%2FqsWFt4PJbJbnAoogTFXCROB5e5qP%2FHcwPij0lEAjBbTXgp2baTCE1knbqg1MexCmvelfOb52uRd%2Bf8W8UlofxwztE%2FYe0WwwWwVLvbwRqK54lmnzj%2FpruNTzJLpRGr62TzbyTbO3aWCOjnLHReEqEkVaplZ6hLbKrRjSqWV0nt0e8XGRqgkOi9yKqhqqAeNF&X-Amz-Signature=c4e807306159f96f8e8366e5f54740090e50ce6b4755bfe33f54d15f3ff2e0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
