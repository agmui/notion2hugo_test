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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HU2ZZIB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDyuSo95Xu0Jo2vdmsns3LiAIy8fczZ1SyEZQMR76p83AiEAyCPdoTfBTZbRkhAEvyGCiNYrpr1LiClOKp%2B38minsncqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFHkNJtayw3%2FsqXVSrcA3J%2FeNQIFHOUaQY%2BIOiVWM%2FJPMyZKrCTudVDC6wKtmY%2Fnye11W3JAonhWNigEoK%2Bzccr5%2Be2Y%2BInyOtS8LqMkkyNXyAd104aJDoowz0HDBpFw6%2FNguUgk1qbq2Hr2jR3umS2YPaX7OIC2tI%2FAqYaUzo68PMJLYpbrHRZeu2yeC6%2Fr4e0F6%2F%2FaWjTgCR0wz6kI9x4rwO0NjHEpurdoOY7b2z%2BZD5IC1XFxCjjifoiuxPsF8%2FeBa%2Fco5rWPwSSVd7UHMNoS%2F8fSRmhymq%2FMB4bY3O23OshnRQ%2FYkOcTJ4ESckbcIH1F8Oqsl4LohyEZ0r8U1i0qkiTwTIOnmKBffrDOzakbgMxCxHsr%2FeKdZjmXus8byk335j14DxXddov7p2IL1KCpfrBxs9Mr%2FSHV%2FORtrKupoTWgxHSmxefyJ%2FrOM0GFmkLUFQJSSsE5a1FEPZqX9NEylbHCICscLZAWcsuovvs0q40tcXDJiizlc2vZpj48FMJiYCnmEmu2e0dZJ1i9F2yI7u8U3FsZeSeXOMDZhS6%2BdZoVOrACttUW0xjlhOuffUZOqJR2MfnFXtzH%2BZbbklRlNF1Mpzqcy2XoxQeWHfkovJMUwqcMYeObAR5QviQhG6N9Q6i9%2FkRcQL1MO%2BOnMQGOqUB1Dr6gsDWCe%2B3ey597X926WnqtyfEmJCcE50fCA0Q5QHhTP9qCqhaKN8n6Vde2MVqp8oKnKZw1AE4Op4KouHFu4b%2B7NtCJ9UTwIe063sEIKB06PGsAFE4pMCAX1mc0xi49v0vV71FeVEdL0iiLi8hUtYf6zIzqoAyKN9xkbMzkiQX2xa8UwqEsr0LFMKTLZTeQyqkE8%2BIdiqipVZX%2FBCIiFzqDWoo&X-Amz-Signature=bd9350c7f3b1efe4f32a0457353d424c2754a754fcf1cb207c3ab0da72747edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HU2ZZIB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDyuSo95Xu0Jo2vdmsns3LiAIy8fczZ1SyEZQMR76p83AiEAyCPdoTfBTZbRkhAEvyGCiNYrpr1LiClOKp%2B38minsncqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFHkNJtayw3%2FsqXVSrcA3J%2FeNQIFHOUaQY%2BIOiVWM%2FJPMyZKrCTudVDC6wKtmY%2Fnye11W3JAonhWNigEoK%2Bzccr5%2Be2Y%2BInyOtS8LqMkkyNXyAd104aJDoowz0HDBpFw6%2FNguUgk1qbq2Hr2jR3umS2YPaX7OIC2tI%2FAqYaUzo68PMJLYpbrHRZeu2yeC6%2Fr4e0F6%2F%2FaWjTgCR0wz6kI9x4rwO0NjHEpurdoOY7b2z%2BZD5IC1XFxCjjifoiuxPsF8%2FeBa%2Fco5rWPwSSVd7UHMNoS%2F8fSRmhymq%2FMB4bY3O23OshnRQ%2FYkOcTJ4ESckbcIH1F8Oqsl4LohyEZ0r8U1i0qkiTwTIOnmKBffrDOzakbgMxCxHsr%2FeKdZjmXus8byk335j14DxXddov7p2IL1KCpfrBxs9Mr%2FSHV%2FORtrKupoTWgxHSmxefyJ%2FrOM0GFmkLUFQJSSsE5a1FEPZqX9NEylbHCICscLZAWcsuovvs0q40tcXDJiizlc2vZpj48FMJiYCnmEmu2e0dZJ1i9F2yI7u8U3FsZeSeXOMDZhS6%2BdZoVOrACttUW0xjlhOuffUZOqJR2MfnFXtzH%2BZbbklRlNF1Mpzqcy2XoxQeWHfkovJMUwqcMYeObAR5QviQhG6N9Q6i9%2FkRcQL1MO%2BOnMQGOqUB1Dr6gsDWCe%2B3ey597X926WnqtyfEmJCcE50fCA0Q5QHhTP9qCqhaKN8n6Vde2MVqp8oKnKZw1AE4Op4KouHFu4b%2B7NtCJ9UTwIe063sEIKB06PGsAFE4pMCAX1mc0xi49v0vV71FeVEdL0iiLi8hUtYf6zIzqoAyKN9xkbMzkiQX2xa8UwqEsr0LFMKTLZTeQyqkE8%2BIdiqipVZX%2FBCIiFzqDWoo&X-Amz-Signature=eaf7d6481c1a28d0f53de87aa05c4b9d34b2ad4fa2e52768f668fd443aaaecc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HU2ZZIB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDyuSo95Xu0Jo2vdmsns3LiAIy8fczZ1SyEZQMR76p83AiEAyCPdoTfBTZbRkhAEvyGCiNYrpr1LiClOKp%2B38minsncqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFHkNJtayw3%2FsqXVSrcA3J%2FeNQIFHOUaQY%2BIOiVWM%2FJPMyZKrCTudVDC6wKtmY%2Fnye11W3JAonhWNigEoK%2Bzccr5%2Be2Y%2BInyOtS8LqMkkyNXyAd104aJDoowz0HDBpFw6%2FNguUgk1qbq2Hr2jR3umS2YPaX7OIC2tI%2FAqYaUzo68PMJLYpbrHRZeu2yeC6%2Fr4e0F6%2F%2FaWjTgCR0wz6kI9x4rwO0NjHEpurdoOY7b2z%2BZD5IC1XFxCjjifoiuxPsF8%2FeBa%2Fco5rWPwSSVd7UHMNoS%2F8fSRmhymq%2FMB4bY3O23OshnRQ%2FYkOcTJ4ESckbcIH1F8Oqsl4LohyEZ0r8U1i0qkiTwTIOnmKBffrDOzakbgMxCxHsr%2FeKdZjmXus8byk335j14DxXddov7p2IL1KCpfrBxs9Mr%2FSHV%2FORtrKupoTWgxHSmxefyJ%2FrOM0GFmkLUFQJSSsE5a1FEPZqX9NEylbHCICscLZAWcsuovvs0q40tcXDJiizlc2vZpj48FMJiYCnmEmu2e0dZJ1i9F2yI7u8U3FsZeSeXOMDZhS6%2BdZoVOrACttUW0xjlhOuffUZOqJR2MfnFXtzH%2BZbbklRlNF1Mpzqcy2XoxQeWHfkovJMUwqcMYeObAR5QviQhG6N9Q6i9%2FkRcQL1MO%2BOnMQGOqUB1Dr6gsDWCe%2B3ey597X926WnqtyfEmJCcE50fCA0Q5QHhTP9qCqhaKN8n6Vde2MVqp8oKnKZw1AE4Op4KouHFu4b%2B7NtCJ9UTwIe063sEIKB06PGsAFE4pMCAX1mc0xi49v0vV71FeVEdL0iiLi8hUtYf6zIzqoAyKN9xkbMzkiQX2xa8UwqEsr0LFMKTLZTeQyqkE8%2BIdiqipVZX%2FBCIiFzqDWoo&X-Amz-Signature=0473b94fdf3aab857487433e119e04c2c9f9518d0424b6091bfcad85fa8151db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPM36UUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJFMEMCIEggJ%2FXnwf8HEylragXZfB6sYkLxbmrus5zl2mS6hIOIAh8DDV%2FWOpJd5Ex42tYY1atS7ffZAlXruD4f9cFSShIRKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWMxqOVSijZYJGptUq3AOX4H3OwobcaHwC2C3GPmSXcOdoX8YYq2Dk0z3Yc4FE3us64dR0HV7%2BWjWlduDkxjbw%2FC7BgO9PghV3LQlBjKHLFpZ0TrI3dHLznIrS2OeQ%2FCo1ETMuVysF9X%2BVxFlU2vjnZbTUwRiJUqtiVNMZYYl0IDz7%2BLNXrh3AB%2FWpDcy5DCl8bxX0aCw3sQK5PQnWIcE%2B8UidelniX1%2Bts92fI01UN5RLDAWl6gzZ8uZh96DNc7QKoTpd5y41AIqY3rPjTS66y7KVLxdfPHfb5laya5mcq4VHbe0ghL1rX%2FSgSt9aSawf0XbWmTwEdYkjq431kdeENa57vPq8BZzv%2BIVHQFDCGRnMtXBEpPbfVGKOOewOc9ZUz0EAy%2BgZa8RQZaPCQw1iBCUeQE4Jti%2FnMzBWuYQoYCElgwfDohrdqSJ3QGRuhogQFc81iyTvg7QEZm2fD2uGyF2dNURFVkNeeJqYc6rchU0nvRHSWTBm845gskMJOCXpzRpXFFC4DK4V7f8u4BoK3EWuwpVIEGPYdM%2BdlV%2BXe%2FsepiRDAJCHAg1IMOVPBQ%2FuLQWXYRMvUTlycPFyVP4tEUiLTCGxq9R7%2FEojDHCknVXesmxLyVNLKbYNh7zDCIeIHd33qLW3FPjIoDCNxpzEBjqnAUWhC3oEKZXWFfi0fU13XoN%2FHhy6KZtCjasd4ueLxZY3vWNrpPv6FsC2Xk3pxj97qn4V88DCyP4NHMNH6FKdV9QCEpPDdG2rBYmV5Y94vTBn9mMBu7TRgvvQWchkXVhpRPL4G56%2BVWDSUIBOR615j%2BHkxNc3cahy5x%2BaqpsnGdW9hyXkqv26RnIjVBFyQggBAkrJ4WE0Ga1JDAMZcL7wnFCtuqU2awmt&X-Amz-Signature=c31689a182c73b10fde334186425c940c450cfb3e54829e4546e1e74a12bf88d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ4KKGC6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDZdeR8ub6j7HKid71lKtj6SkUcyHWUfiDs%2Bis2kfWkEQIhAKajWZkWGEO1zGvANePoYEtLi3P%2BEs2XTp79BVsMl8zDKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymTkM0dEQ595ii5xcq3AORPGXoGyjVdhjqVFTBF%2F01BbF%2F%2B6DgRfoAk1oeDQHbjCpkaT0E372wU7wJogrlPVkzQ7Jbz4mqrPN6vYd5wXTaFsYUXs9Gm%2B2joSyHYXgfhqYmngRkzHW8j0w%2BkL9FM%2Bz1VB3NXEE4YNNt9sMEio3DX7sI4vCP2cjYZDvbpj8CEufJLMfrgmj6F2%2B1t9U8ktXX8PEMuirPya35ptjJV8OGL8ClWAWxVxozdWQ4yivqnxFa2Ti8rC%2BbYklMaS4J9pa28JJFzUlwNSzM5vqNCezSFDSHGWDML4v8K%2F0hbuzhMLgfEiQMMi4Xtso7IR2hxfvEFA39iozilq7OCF1hBgopOdg7%2FkpXGkHTe7VsK4JUYN64c7auJuEm0%2FstFbLxJfwt6YVard5Guli3p%2Ft70x1WywQ7ZvJONupk6qbZN9ch2jBazP1Jshf87716Y%2F8EQD3MAfs8TBG1DE4vrcLi3m1LJ1M%2Bp8z8A%2BWspWKHr3EVQJ4Ll7cJmiOl7jhSnWyVu7fM2r4MTwJ6y8PuI7TF1KyXifhrdezacul0gmHgBtZFqP6rDQrxJ4TYuAsdqxRSx0apd62Zxm%2BJupuP5IoVl5hVEX2Yrq5uYVxjXdJ%2FbHATg%2F78%2BAhcG0EtAuvC8zCwxpzEBjqkAUsWLUZXiZpglAogsow9cC2CH8I5iCg3M%2BvMepJZzUkRJ5EYqYzgZ2OWWVv%2BAbBHNcylpqC8Ox6emcA5BwtTm0Z%2BXJ7ROx9HFfuwJbggbIXoiXOF6%2F0bjODofHTD2Ffq1DOfa%2BaOuPgx4PqDYRidPXBuKqd5S9uDKDODJn8d%2F9BoE%2FMwBRYugxKwgAsebcnopmf8bJVfO4IGQcqE76Dgp%2FeF4H6y&X-Amz-Signature=ba454f8e606a0f72c76054597fefc0b9743138ef2e3d801b85eb2d075a6137a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HU2ZZIB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDyuSo95Xu0Jo2vdmsns3LiAIy8fczZ1SyEZQMR76p83AiEAyCPdoTfBTZbRkhAEvyGCiNYrpr1LiClOKp%2B38minsncqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFHkNJtayw3%2FsqXVSrcA3J%2FeNQIFHOUaQY%2BIOiVWM%2FJPMyZKrCTudVDC6wKtmY%2Fnye11W3JAonhWNigEoK%2Bzccr5%2Be2Y%2BInyOtS8LqMkkyNXyAd104aJDoowz0HDBpFw6%2FNguUgk1qbq2Hr2jR3umS2YPaX7OIC2tI%2FAqYaUzo68PMJLYpbrHRZeu2yeC6%2Fr4e0F6%2F%2FaWjTgCR0wz6kI9x4rwO0NjHEpurdoOY7b2z%2BZD5IC1XFxCjjifoiuxPsF8%2FeBa%2Fco5rWPwSSVd7UHMNoS%2F8fSRmhymq%2FMB4bY3O23OshnRQ%2FYkOcTJ4ESckbcIH1F8Oqsl4LohyEZ0r8U1i0qkiTwTIOnmKBffrDOzakbgMxCxHsr%2FeKdZjmXus8byk335j14DxXddov7p2IL1KCpfrBxs9Mr%2FSHV%2FORtrKupoTWgxHSmxefyJ%2FrOM0GFmkLUFQJSSsE5a1FEPZqX9NEylbHCICscLZAWcsuovvs0q40tcXDJiizlc2vZpj48FMJiYCnmEmu2e0dZJ1i9F2yI7u8U3FsZeSeXOMDZhS6%2BdZoVOrACttUW0xjlhOuffUZOqJR2MfnFXtzH%2BZbbklRlNF1Mpzqcy2XoxQeWHfkovJMUwqcMYeObAR5QviQhG6N9Q6i9%2FkRcQL1MO%2BOnMQGOqUB1Dr6gsDWCe%2B3ey597X926WnqtyfEmJCcE50fCA0Q5QHhTP9qCqhaKN8n6Vde2MVqp8oKnKZw1AE4Op4KouHFu4b%2B7NtCJ9UTwIe063sEIKB06PGsAFE4pMCAX1mc0xi49v0vV71FeVEdL0iiLi8hUtYf6zIzqoAyKN9xkbMzkiQX2xa8UwqEsr0LFMKTLZTeQyqkE8%2BIdiqipVZX%2FBCIiFzqDWoo&X-Amz-Signature=2402a4e6228666185923794a33d6137c241b11ae86c9c87082f86795bedd16b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
