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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLQJNWM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5UPpKPLUgx3NEu8m%2BbtEMK%2FcBy1QODIDfPFFBHZs9mAiAJh4jWdxODenqS3KA%2BTxzzU0N%2FK7eyh9BVssdEHAw3qCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM04%2BmQ3o6P2GMOGvfKtwDL9feE18Oyxw8TkLPDbqNX87Qivs8sHfZqf6Fs9mLNwphqp3uhutHspzrjg2robxK6a1WFsMbwRHonQo80bEd5ktDqReMrehQ6AQTzU7OQJmFzh6I%2F7%2Bhm90jJ9k%2FJhdBuBQErqh09iUGj8e5N7IzNUkSf5dk147qkb4GlruCZt%2BoyLCpR1QJK%2F4a0K2pS6r5QXcClNfovBTzkX7QZlTh7aS2MGnbAzaSMeOgqdO4hRiVm8Yl5XG8gzpu3Ka63Bh3ap%2BxRTX4UTerAK5pCQZeJEVWAEObAUri0IyZ8iYE6wpnVBiFPQMdPOwdetODZpES5N5VD2Ot3scUCnrs8GAg18f5lghayPLFrxjVcIZi04EzhNN0JwG%2BEAmfshARsYXiFKG5En8Irqlyf64jo6N6NNr7gMbdhim53x7Zi6kxD%2BfcNSTdCzJLCi4mWdCRmHwSorQ8PkicUz2YMgKG32p41DMqVQA%2BI4cLPNPLTwEtoGXHXZudy7g8TEE0FnWzzTfEIDgCwjKmngywKr77djGHiTGK7%2BBJPoG6Ch%2FmOIu%2BmD9%2B7Px%2BnJWQnpDcV55xhq%2F5NjGkvWGZLGzkwpHlnd6WPAt8XYX455hB2nDJgDjHaCGkyYKEHkrRtJOz2ZAw5NrGxAY6pgH6DGR5C15ZAymc6ooWGI3f02yLnAu%2FUlR9uz2aXwmUHa7CAn%2B2IdT%2Bc8kJEdR5PjhzuSJ%2BVqeh1%2BpvAPrIvhq6UlQxFTLlCE45YTcfF92SaZxqly4fENDt2YqAsZCfQV5y52iSQxjMqPTLeISyZ4XO1vuy1n5zDi4hF3XuLB7HqD7XcCQgx653YQHJL3G6BfEey7jZL5su34BSAJqVF8%2FOg8yhpbPr&X-Amz-Signature=5882faaa15866dc02596fba6a5b69721c08f7bfa236638c4003f44aab598f044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLQJNWM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5UPpKPLUgx3NEu8m%2BbtEMK%2FcBy1QODIDfPFFBHZs9mAiAJh4jWdxODenqS3KA%2BTxzzU0N%2FK7eyh9BVssdEHAw3qCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM04%2BmQ3o6P2GMOGvfKtwDL9feE18Oyxw8TkLPDbqNX87Qivs8sHfZqf6Fs9mLNwphqp3uhutHspzrjg2robxK6a1WFsMbwRHonQo80bEd5ktDqReMrehQ6AQTzU7OQJmFzh6I%2F7%2Bhm90jJ9k%2FJhdBuBQErqh09iUGj8e5N7IzNUkSf5dk147qkb4GlruCZt%2BoyLCpR1QJK%2F4a0K2pS6r5QXcClNfovBTzkX7QZlTh7aS2MGnbAzaSMeOgqdO4hRiVm8Yl5XG8gzpu3Ka63Bh3ap%2BxRTX4UTerAK5pCQZeJEVWAEObAUri0IyZ8iYE6wpnVBiFPQMdPOwdetODZpES5N5VD2Ot3scUCnrs8GAg18f5lghayPLFrxjVcIZi04EzhNN0JwG%2BEAmfshARsYXiFKG5En8Irqlyf64jo6N6NNr7gMbdhim53x7Zi6kxD%2BfcNSTdCzJLCi4mWdCRmHwSorQ8PkicUz2YMgKG32p41DMqVQA%2BI4cLPNPLTwEtoGXHXZudy7g8TEE0FnWzzTfEIDgCwjKmngywKr77djGHiTGK7%2BBJPoG6Ch%2FmOIu%2BmD9%2B7Px%2BnJWQnpDcV55xhq%2F5NjGkvWGZLGzkwpHlnd6WPAt8XYX455hB2nDJgDjHaCGkyYKEHkrRtJOz2ZAw5NrGxAY6pgH6DGR5C15ZAymc6ooWGI3f02yLnAu%2FUlR9uz2aXwmUHa7CAn%2B2IdT%2Bc8kJEdR5PjhzuSJ%2BVqeh1%2BpvAPrIvhq6UlQxFTLlCE45YTcfF92SaZxqly4fENDt2YqAsZCfQV5y52iSQxjMqPTLeISyZ4XO1vuy1n5zDi4hF3XuLB7HqD7XcCQgx653YQHJL3G6BfEey7jZL5su34BSAJqVF8%2FOg8yhpbPr&X-Amz-Signature=7093d32d9459fd3180e8359e8ee6c8c853371fca1ad4f98a7ec80f079ad73eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLQJNWM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5UPpKPLUgx3NEu8m%2BbtEMK%2FcBy1QODIDfPFFBHZs9mAiAJh4jWdxODenqS3KA%2BTxzzU0N%2FK7eyh9BVssdEHAw3qCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM04%2BmQ3o6P2GMOGvfKtwDL9feE18Oyxw8TkLPDbqNX87Qivs8sHfZqf6Fs9mLNwphqp3uhutHspzrjg2robxK6a1WFsMbwRHonQo80bEd5ktDqReMrehQ6AQTzU7OQJmFzh6I%2F7%2Bhm90jJ9k%2FJhdBuBQErqh09iUGj8e5N7IzNUkSf5dk147qkb4GlruCZt%2BoyLCpR1QJK%2F4a0K2pS6r5QXcClNfovBTzkX7QZlTh7aS2MGnbAzaSMeOgqdO4hRiVm8Yl5XG8gzpu3Ka63Bh3ap%2BxRTX4UTerAK5pCQZeJEVWAEObAUri0IyZ8iYE6wpnVBiFPQMdPOwdetODZpES5N5VD2Ot3scUCnrs8GAg18f5lghayPLFrxjVcIZi04EzhNN0JwG%2BEAmfshARsYXiFKG5En8Irqlyf64jo6N6NNr7gMbdhim53x7Zi6kxD%2BfcNSTdCzJLCi4mWdCRmHwSorQ8PkicUz2YMgKG32p41DMqVQA%2BI4cLPNPLTwEtoGXHXZudy7g8TEE0FnWzzTfEIDgCwjKmngywKr77djGHiTGK7%2BBJPoG6Ch%2FmOIu%2BmD9%2B7Px%2BnJWQnpDcV55xhq%2F5NjGkvWGZLGzkwpHlnd6WPAt8XYX455hB2nDJgDjHaCGkyYKEHkrRtJOz2ZAw5NrGxAY6pgH6DGR5C15ZAymc6ooWGI3f02yLnAu%2FUlR9uz2aXwmUHa7CAn%2B2IdT%2Bc8kJEdR5PjhzuSJ%2BVqeh1%2BpvAPrIvhq6UlQxFTLlCE45YTcfF92SaZxqly4fENDt2YqAsZCfQV5y52iSQxjMqPTLeISyZ4XO1vuy1n5zDi4hF3XuLB7HqD7XcCQgx653YQHJL3G6BfEey7jZL5su34BSAJqVF8%2FOg8yhpbPr&X-Amz-Signature=993d33361b35dc84adf8ff6baf89b3dd34509d32933328725b8a1a1220c437b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TWEO3ZD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcIdyhkDfaRFgW8su7zjRVrxOuVyag9cODBgxi7CYgHgIhAOOZWKxMq2wufgdKwtzACxSayusXrer5DdS2Vf%2FkGEe9Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz0WVOsiNaCZp4VSQMq3APQhO2gY%2BEvYfIskWPm0ZJpYkw5903WFH8o7T6g6PF8GqpRo8hf8zu%2BFfyDLfh4XsDZYQpYQoZ6JWVdSibNhSG4LSfr25YBe6rfshSHcBTn5cO%2Fka%2FSvt0ngQp9xMmCty2Pe3wWouY%2BvLKn31lIRpnzC2y9Qg%2BWV72xteohFS%2FBHQsuIp8DUafY%2BOvczRG6e1QzRpGfzyl3pO5QIOq%2FWu1KmzZbE%2FHvuaHzgNOLGUyxNlyfnQ2TNhx6Mexccijcv%2F1n3%2FBIjXtuJF%2BOn0QpihDpTvdVGblLCIULAty346%2B3UgliaEhOaA7hg2jr%2BXjdENJOD7eVFqkAsKL%2FAr%2BoAF3HKo%2FZRRTnunuvRbr8nMEPF19ns2O0w4Hqrom6cNpCBW%2FAlWf5GhJ3QIAWYqCAqGaYM%2FkvXZzOZwYIHJUfXZ%2FJdSCSzRVqjymilAlbhEcPYqvgf99W5N0LwIIRX5GH3h6ogeB2GvXwie6ANF3g0F1lI5PTDeO1fFG2JK%2BzBUlVzi9JETfsxZMWNuRtxsU7tzGwZhaFO%2B8L8qFmh0QQFUIGnAxn0YMUPfZcu76Tep3uNidcYGNmZAX4g1fgqENvHet74ORpdb5qn%2BHMqXJCG6kHY6S66LWcUPyL77QoIDDS2sbEBjqkATwiVNebzHfmCeh2vKw%2FwmQ0zVDK0WkkeLoY408eaF6Jesbe%2BNIMXadTUeVpVKxPokJ5IAMCoifcsP3DoBqDcvaEs5A67Efm2S8g7PySdeErslh3ZRbCubjpkrfoCPYwJMqFYhCcrB3Uu2oD7UL8oPgHpcN6kvSTnqEwS71tqJQrQWvT1FnOwr%2FL3naffw%2FvQbuO6r5faYyagsKqUzrjm%2F9wJSGU&X-Amz-Signature=d01ed3c69d93d18fd9282254c7f3500938982d7a011ff71c9b3466293ba1f94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHWSHPR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFA6YgzAb6zej9e%2BBt4%2FYLqpJmAb0U%2F9q3sGqbNpxGD9AiBYla8VehGjf0SA4RQc465scviap8W3hPPreRrdQMt71Cr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMRsrWaZrXI8k%2Fe2rSKtwDpg0P4zpmAH6Po91zC%2BZOv1ieLCpSwF8L2miSmBZyBB1n4mM7zOU%2ByH%2FbXjF5nAh7IiyYYKnGloRz5hG0VE3SuFvfpzEJ79m%2FEtmyIgSItvhIEZlmzJvQwtDc3WaieZ1WBs9A6S02oTy%2B5qcOJ1rCVt4dD70AitpoxD7aEb8Xxdsn7h3Dx7ljk4LW%2F614Mk%2B2hDCdsLrplBA4QQhfZ6jM%2FMetqEekDouGgZTMsaIX0cRZjFGWSf7iROxiw0UReiVkCaQLDAXniuZGh%2Bos7jp03bQbhYMVpNs8ysg5JArjCmGjULQNVI5VmOSoYI6iscKYCHMF8gfTe1xWqX91SvyvCtYRKI5868Ay3Q5h8IAJoIAyGdpJOYVUWdZ12QcB6BTHpQ7zlNDf8juoqFs%2FLawJQSGH4QAunQRra7zholUz6a1obmrA5c22kiFjqAP%2B14KMPqWzEs0w80Pmp6vbxrsHw1XhLNaa3LU8Rw6WvccRadZY76aTX9rFBVfv5b0vBNu6AOOz8MeQIEaG6dJNzXatS%2BxzwKh%2BLtseJcHkXX2gStM4XxehtI%2FwTTy7lZudyplqfGlYL%2Bia8tP4F%2BjJzjHho8Fvd96W4UdcFm77geNKCrMXDmpcj6387CHTFm8wodvGxAY6pgFMu5fBcAi0RqQfcme554UizfwJkj5Iy2H74%2B6jWyJElig6yh7IXZ1wIH%2FtPVrr1%2Bv0PKi5bCh433szkGsvSostGbHIbJ8qMHsO%2BHsgxlI7SYMr5I2zL0vNClnoJg3MNta8GggfSKztXIRD4GTX8paPw2NrbXRhiS1uLWem00CF0IAhHXcn3%2F7Lj4mMklVEVCg5JCNf0mAZTsQxsbwLLsecUakj5%2BIa&X-Amz-Signature=e51eec875b39017bc034231d0c1cdaa1bcfd5375c84d122e9d980416b9218dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLQJNWM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5UPpKPLUgx3NEu8m%2BbtEMK%2FcBy1QODIDfPFFBHZs9mAiAJh4jWdxODenqS3KA%2BTxzzU0N%2FK7eyh9BVssdEHAw3qCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM04%2BmQ3o6P2GMOGvfKtwDL9feE18Oyxw8TkLPDbqNX87Qivs8sHfZqf6Fs9mLNwphqp3uhutHspzrjg2robxK6a1WFsMbwRHonQo80bEd5ktDqReMrehQ6AQTzU7OQJmFzh6I%2F7%2Bhm90jJ9k%2FJhdBuBQErqh09iUGj8e5N7IzNUkSf5dk147qkb4GlruCZt%2BoyLCpR1QJK%2F4a0K2pS6r5QXcClNfovBTzkX7QZlTh7aS2MGnbAzaSMeOgqdO4hRiVm8Yl5XG8gzpu3Ka63Bh3ap%2BxRTX4UTerAK5pCQZeJEVWAEObAUri0IyZ8iYE6wpnVBiFPQMdPOwdetODZpES5N5VD2Ot3scUCnrs8GAg18f5lghayPLFrxjVcIZi04EzhNN0JwG%2BEAmfshARsYXiFKG5En8Irqlyf64jo6N6NNr7gMbdhim53x7Zi6kxD%2BfcNSTdCzJLCi4mWdCRmHwSorQ8PkicUz2YMgKG32p41DMqVQA%2BI4cLPNPLTwEtoGXHXZudy7g8TEE0FnWzzTfEIDgCwjKmngywKr77djGHiTGK7%2BBJPoG6Ch%2FmOIu%2BmD9%2B7Px%2BnJWQnpDcV55xhq%2F5NjGkvWGZLGzkwpHlnd6WPAt8XYX455hB2nDJgDjHaCGkyYKEHkrRtJOz2ZAw5NrGxAY6pgH6DGR5C15ZAymc6ooWGI3f02yLnAu%2FUlR9uz2aXwmUHa7CAn%2B2IdT%2Bc8kJEdR5PjhzuSJ%2BVqeh1%2BpvAPrIvhq6UlQxFTLlCE45YTcfF92SaZxqly4fENDt2YqAsZCfQV5y52iSQxjMqPTLeISyZ4XO1vuy1n5zDi4hF3XuLB7HqD7XcCQgx653YQHJL3G6BfEey7jZL5su34BSAJqVF8%2FOg8yhpbPr&X-Amz-Signature=b9e9bed0faf4248e21e53469b56e813c13c52e698ce90f70a990144ddc68664c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
