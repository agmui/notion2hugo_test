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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROBA6WL3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIC5J1jzv27oU4soDOL9CE4XXMT%2FDFtQI1x9zLT0caO0YAiBpyx1%2B3NKQHOM53rkCBS8L9r7U78RG9%2BCx64CgKw%2BaLiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSi7VK4P3r2S2A5bPKtwDpbke7VwZe4uSx66OX%2BWtQ6BVa06OcSwUZrEWnjV0ok74MluGfAieR6GBRPs0CC728ZUY9FSEvTGpVGehv1cRcmyt5ig2bYkTJb%2BhOwOJ8TYxA7BuM66vFOL9aorVgE09XTnfs9PQ0GH%2F21AoJTtI5Yqrp2TVKTtqeUSDWA2l9157fPUgdtd83w%2BDYX2LDAJ3%2FhNFA0HsfggeI80U5Sq5ZOs63IK6f%2BOJkRl6te0exz7d7GxZD6WxOnAg4h%2BLuMFdC75vsKvbhQtSRi9bz4ZBi5Vh7Ova%2FTPJ7VMmd5BXz1ODXZkqrqG7CupPoNVQ2rN0KS1yuzXuJWlwezWXB5093YaOGgAc9br12MP%2FOrH2FQA8naIk5NQzPncmp9VhaxTV2dAw5IW24Tq%2Fyci1kyHLxcLMDLwJeTnljvgT%2Bd2YUb2PTYNN3SjgVlIfnUWKvt5CSN0MUK5WVa6JDAlS3e938FrFwqorRqf7qXFIAXxa%2FVP%2BONX3vhcHKvQozK%2Fbvp2Ww9AU45uBlBMJMr%2Bv3omXhY50OcJByRiTCcTyDrdVfm5gbXzn9mM%2FOnY2YFHUToyigqAS%2FUkfboZsY2YCo0NQsQ%2Fc%2BQ1U778oWRq9geLyYUiOV6P4LCg2rHUhOr4wuLucwAY6pgE9%2BGB6oL%2Fljc7c2Rft01bH%2F%2Bf9rtVngmu2T98Z5n1C49%2Ffa9U2sRyQYXzUGvIM0hTRwEgRksWIG2MJnRH9J%2F8q9tDb%2FWGc8CqHEZsjGtzYXEygYFQDRAj%2B6Wv9Ik6d4%2BkEELD98vwNZpikltzNKOn60JJBd8KA5NA3Ze6lidCpM6tOAKrfU6jRLu8dPsXy%2FOdviQZKuEYv5NOgyM5TFD4HWB5%2BhU9Q&X-Amz-Signature=29edcf231bb092875694c59aa6bd0f08b4585d1a74f59c37c8a6b90c6962a0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROBA6WL3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIC5J1jzv27oU4soDOL9CE4XXMT%2FDFtQI1x9zLT0caO0YAiBpyx1%2B3NKQHOM53rkCBS8L9r7U78RG9%2BCx64CgKw%2BaLiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSi7VK4P3r2S2A5bPKtwDpbke7VwZe4uSx66OX%2BWtQ6BVa06OcSwUZrEWnjV0ok74MluGfAieR6GBRPs0CC728ZUY9FSEvTGpVGehv1cRcmyt5ig2bYkTJb%2BhOwOJ8TYxA7BuM66vFOL9aorVgE09XTnfs9PQ0GH%2F21AoJTtI5Yqrp2TVKTtqeUSDWA2l9157fPUgdtd83w%2BDYX2LDAJ3%2FhNFA0HsfggeI80U5Sq5ZOs63IK6f%2BOJkRl6te0exz7d7GxZD6WxOnAg4h%2BLuMFdC75vsKvbhQtSRi9bz4ZBi5Vh7Ova%2FTPJ7VMmd5BXz1ODXZkqrqG7CupPoNVQ2rN0KS1yuzXuJWlwezWXB5093YaOGgAc9br12MP%2FOrH2FQA8naIk5NQzPncmp9VhaxTV2dAw5IW24Tq%2Fyci1kyHLxcLMDLwJeTnljvgT%2Bd2YUb2PTYNN3SjgVlIfnUWKvt5CSN0MUK5WVa6JDAlS3e938FrFwqorRqf7qXFIAXxa%2FVP%2BONX3vhcHKvQozK%2Fbvp2Ww9AU45uBlBMJMr%2Bv3omXhY50OcJByRiTCcTyDrdVfm5gbXzn9mM%2FOnY2YFHUToyigqAS%2FUkfboZsY2YCo0NQsQ%2Fc%2BQ1U778oWRq9geLyYUiOV6P4LCg2rHUhOr4wuLucwAY6pgE9%2BGB6oL%2Fljc7c2Rft01bH%2F%2Bf9rtVngmu2T98Z5n1C49%2Ffa9U2sRyQYXzUGvIM0hTRwEgRksWIG2MJnRH9J%2F8q9tDb%2FWGc8CqHEZsjGtzYXEygYFQDRAj%2B6Wv9Ik6d4%2BkEELD98vwNZpikltzNKOn60JJBd8KA5NA3Ze6lidCpM6tOAKrfU6jRLu8dPsXy%2FOdviQZKuEYv5NOgyM5TFD4HWB5%2BhU9Q&X-Amz-Signature=2116cd91307042d78df23ec0539fd19d79c778cf95a1749a45396b473aad7b98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMBQOIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDUIsMxlCSr4eQgmzyM%2FKkFIV7FclZkJpwqbcC9WYWIDAIhAJJEgezCu%2FQAwYZzvW58zGk5w49If%2FeKkxsSERhUlHxMKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4xHh9uv%2BjnCI%2Fcrgq3AMY7AODbjuuyBvBFSXArUdB0u6BmRJoqjDT%2Fke86zwK0NSJX%2BttwCjG5IedczRgxqWEWVQNE43Qmghf2b1nOaieyeaX4ArAm4vzaVouOqosEEAYgRLk3ZOl4qNHyziaFwcoxd9oNMGNIAif6fTRr%2FCn5XO%2F9ipkO7M9NlOOWXV5ysc6J9hXIhMfGTuFUlFXxHE7TkMFp5TDii4fmRLzmR0EzQmJ9rDs07X8wxRXfoGa2eL65C2ZLf0dhb8nC%2FUHvdVI0Hd3lL9ddA0E4c%2FwRwxOifz4NFjSlhD%2BqX74j%2BWB0HbvWdd5w4dF4gvbfl91iAlZ3agyhhqRTacRSwCLk2UvctrNTmEmVQ0bmMj8cDYQyrnfqnUXrkpXmyWxx9lLzd3xQVG0UTdzzA3upGl1nZyoZygtYgmf6Edms3PhVmd8NFtqNKZLtP5MOLCScVvZZAAgkEr6P2gM9GEnDwCzdYv%2BdIRgAqkejkDK2JJ0CXCJk9iB3z0UJWio3Gm8SPNZVRrFkZj%2F4rV%2Ffk%2FNWZVnU7xkWd7EIfuSzr%2F%2BTvywVMtJr%2FA9osE6indbk0L35tFEEqaJ3uWyZrNcrlGpMqSVpN3y%2FwvJOdleQ0ExHt2cf3%2FcgGHcdJRKP3cwygl8sjDNu5zABjqkAUZun%2FaYWhWN%2B2yWDW2m6s2lRl1vHnrTvw6LiSlPa5shKo56ZRSQyppqxwQnPZ0yD%2FGktingOe8hjGcRsNZB5YQ%2B%2BMhdPg7sRlYIdwUnavXATWa56%2FSgavnr%2BLTkhtVkk48IR3ULEHwk3GMssjF0H3WDIwjTxfSL0TvwzHgalXD9c6sJF9DGHb2v2hTyf8pspRumIysertKsT%2BQmG%2BFgwHP6wRi4&X-Amz-Signature=e2845b4c6b72cf04b70ecc5f8cf9504c3bb4e1a96187aff58e2f5766c16fec91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGIXW2XM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCgg%2BTA%2Fadq7rUoH23Hujp2zgAYl6%2Bl%2Fb9jbzbULhDpEQIhAK9kPIqzn8W7SMegNqUFWEIzSntWKEFWy07BueE2k0azKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzeo5ZP2MNWnVPeJbYq3AMS%2FhsbHBuBQIIcrzg%2BbdY0CwUQXKbLFEfUZq60Wh7RAy%2BcKhESMAAXGVkkbbkiAFfOPB%2BIDaN64vJoNiGWok4eGh1KGZE6VCzjFkpwD1k%2BYgNDzRgUC9eVMz10jBHsSwddDqWNI6PIIz%2BjTFVXH6IB6AlY7sUTNE7tguiNzH%2Bh1KHlfbHr7VuVs3RDBYTSt%2FGHBo%2FvqsgL8i9H92yLCIiAAurS539wsyl3v9dEWPGUulPto2LV6GAi3319VnFqy%2FS0b1Jid%2FzVOhGNR2U%2BBl1xQ5T%2BRKrn3Zf9ssS%2BqAf2IH5c5qdZ4Nq3wOkdixqYgC5GLIFi%2BBJwjWyWq0OGAsg5bqj%2FLxAkdAOvOaiA9MgQx0ANPWzYRq604RZwU05QstCZY48vAxEWa47TzQYYsuCidfM9JJdq2i%2BJ%2BL2ySfQaeIKwH%2FoSfsElnQybL%2FehTPA%2F6Equk2oGQM25e72dJcdYDe5zsc22vVuRhhrdxfWBBtcFqkx8o34kVva7fKBwQfjuREQp8kbAd6xZ6OvxN7N3mAa3T6BUeFMojnWogP5XP0LaIHaih6dxBJuae3lgoD6DS7SJdOfTD1I6ZIeZV97aM0AUKLiM%2FktGn%2BCz4t%2Bob1bA%2FGQ2dN93toZf0TDEu5zABjqkAZx%2FbXIG46Az4vAPvFgedf3lyo2a8SKVZm3RvBlLfF9DPBro1uFBMsii4V5EuIjVE6UpDGZvHOaJKgh4A%2BYvdpBvKDW2680UNly7EBqRbwI8EL09LfOZVy2tCgHZ3koDJp%2FlQiQQS9T0FwsjC7a1zkxSvD3utl2gMjBUNsAWLcYgfS53x3BP0AY4tl0S%2FRqZwsZAHeWnyt%2F6nlCXPfoA4sTRSFa%2F&X-Amz-Signature=3e3c78cb4835c929117ed1ee7c621ab599ab12ee71fbb6d5cfa32eb9049b64de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROBA6WL3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIC5J1jzv27oU4soDOL9CE4XXMT%2FDFtQI1x9zLT0caO0YAiBpyx1%2B3NKQHOM53rkCBS8L9r7U78RG9%2BCx64CgKw%2BaLiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSi7VK4P3r2S2A5bPKtwDpbke7VwZe4uSx66OX%2BWtQ6BVa06OcSwUZrEWnjV0ok74MluGfAieR6GBRPs0CC728ZUY9FSEvTGpVGehv1cRcmyt5ig2bYkTJb%2BhOwOJ8TYxA7BuM66vFOL9aorVgE09XTnfs9PQ0GH%2F21AoJTtI5Yqrp2TVKTtqeUSDWA2l9157fPUgdtd83w%2BDYX2LDAJ3%2FhNFA0HsfggeI80U5Sq5ZOs63IK6f%2BOJkRl6te0exz7d7GxZD6WxOnAg4h%2BLuMFdC75vsKvbhQtSRi9bz4ZBi5Vh7Ova%2FTPJ7VMmd5BXz1ODXZkqrqG7CupPoNVQ2rN0KS1yuzXuJWlwezWXB5093YaOGgAc9br12MP%2FOrH2FQA8naIk5NQzPncmp9VhaxTV2dAw5IW24Tq%2Fyci1kyHLxcLMDLwJeTnljvgT%2Bd2YUb2PTYNN3SjgVlIfnUWKvt5CSN0MUK5WVa6JDAlS3e938FrFwqorRqf7qXFIAXxa%2FVP%2BONX3vhcHKvQozK%2Fbvp2Ww9AU45uBlBMJMr%2Bv3omXhY50OcJByRiTCcTyDrdVfm5gbXzn9mM%2FOnY2YFHUToyigqAS%2FUkfboZsY2YCo0NQsQ%2Fc%2BQ1U778oWRq9geLyYUiOV6P4LCg2rHUhOr4wuLucwAY6pgE9%2BGB6oL%2Fljc7c2Rft01bH%2F%2Bf9rtVngmu2T98Z5n1C49%2Ffa9U2sRyQYXzUGvIM0hTRwEgRksWIG2MJnRH9J%2F8q9tDb%2FWGc8CqHEZsjGtzYXEygYFQDRAj%2B6Wv9Ik6d4%2BkEELD98vwNZpikltzNKOn60JJBd8KA5NA3Ze6lidCpM6tOAKrfU6jRLu8dPsXy%2FOdviQZKuEYv5NOgyM5TFD4HWB5%2BhU9Q&X-Amz-Signature=56cf27435f8ffad6f9f9c28ec9b43ee19398d098f91efdcabcfb374c54b409f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
