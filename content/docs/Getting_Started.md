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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOHD7JY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAeQJpUAs%2Bb2BQrk2f0J2pTNxfx%2BBEoenhQMNdUB%2F3%2BeAiBqd9K5IWi7WamrH3HLXPU6pB0d7iGHk48c4LnpAzPssSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMCuPznhrY3MHR7cXDKtwDMOiBJjx2iCSPWkySwPA8XCrXe3E2kf5RMtdjIUmP5OToq%2BfQs%2F1Z6ojNXNTLgkAlir9mUooHD%2BWJ5KWWL%2FxOHEWJrSiqkip3ZljmGsgo%2BLCiTbPDEJWjYzA8J0lID1Ggj%2Fk5R3ns7HjO9nHpa3kN3e74aOxnTburoGmko7mfWCbQBdsaYXzXl1Wgxlv7INQI1icv6%2BM%2FfD781g0WsoCYXewzeZ338cL4eGjE%2B8Ir4rMaeSC9i%2FeeZQ2V073yKASZ9lHuxCQL78ebbyEoCf4dKGaD6mJTwdv35%2FJ%2FN8ICkMc%2FgBKY7vY4rfbRVuS6QWSM2j%2FRth%2BH8o5ciYFOp30MZRYq7ZnMZBQiiBIi%2FD%2F%2FiK0wAo9nKpsQZ1UuD3rb31aEOrVdUWVFC%2BscQ%2FkjQqncVpNhOGof3FLAH1f1eb6%2B6vsRDtu5nn%2BtpMnK0aDrKebNoSbWB%2FxeSffBMLsNLW5ZiUuHOp1rkcyIobKGyiHZPBFeQ6wXZQkYxHD7L8vByRHKuZMBBWyuiq2Wrqa7c9rzziTJ1cKz1IJxobczHrNAvyMYAvpP8bElyPz91oQYelPsDZ3B9Lgebtu8jHU5XQFABIl3B3tF19UhNiQb8g8MrhlBvbJnWN6DBvnfFHsw6%2BbPwwY6pgEFQGIlZz%2BhijOJkboBsMqLxBX3evWJfLiP5FdcqYpoXy7d46fJfskTrG3Xdw3LxcSFL5NhfRYxGUy9%2BaywW90mpIlhnEtiZPxSjP928NXLnvP%2BZihhf%2BwRwneA0LE%2BjhoCvkYvlMisbdylDKrqb3wXvr8ei9w6NmxF9MCkQk9lTHPpwKHX1tgAosUOP%2F4Sivc3n6L01Q1ohLFs8jD3ZxvBmzKno16x&X-Amz-Signature=e2f536fb3619297c949007b9917bf6b29df61b833650545806192b4cd9060e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOHD7JY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAeQJpUAs%2Bb2BQrk2f0J2pTNxfx%2BBEoenhQMNdUB%2F3%2BeAiBqd9K5IWi7WamrH3HLXPU6pB0d7iGHk48c4LnpAzPssSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMCuPznhrY3MHR7cXDKtwDMOiBJjx2iCSPWkySwPA8XCrXe3E2kf5RMtdjIUmP5OToq%2BfQs%2F1Z6ojNXNTLgkAlir9mUooHD%2BWJ5KWWL%2FxOHEWJrSiqkip3ZljmGsgo%2BLCiTbPDEJWjYzA8J0lID1Ggj%2Fk5R3ns7HjO9nHpa3kN3e74aOxnTburoGmko7mfWCbQBdsaYXzXl1Wgxlv7INQI1icv6%2BM%2FfD781g0WsoCYXewzeZ338cL4eGjE%2B8Ir4rMaeSC9i%2FeeZQ2V073yKASZ9lHuxCQL78ebbyEoCf4dKGaD6mJTwdv35%2FJ%2FN8ICkMc%2FgBKY7vY4rfbRVuS6QWSM2j%2FRth%2BH8o5ciYFOp30MZRYq7ZnMZBQiiBIi%2FD%2F%2FiK0wAo9nKpsQZ1UuD3rb31aEOrVdUWVFC%2BscQ%2FkjQqncVpNhOGof3FLAH1f1eb6%2B6vsRDtu5nn%2BtpMnK0aDrKebNoSbWB%2FxeSffBMLsNLW5ZiUuHOp1rkcyIobKGyiHZPBFeQ6wXZQkYxHD7L8vByRHKuZMBBWyuiq2Wrqa7c9rzziTJ1cKz1IJxobczHrNAvyMYAvpP8bElyPz91oQYelPsDZ3B9Lgebtu8jHU5XQFABIl3B3tF19UhNiQb8g8MrhlBvbJnWN6DBvnfFHsw6%2BbPwwY6pgEFQGIlZz%2BhijOJkboBsMqLxBX3evWJfLiP5FdcqYpoXy7d46fJfskTrG3Xdw3LxcSFL5NhfRYxGUy9%2BaywW90mpIlhnEtiZPxSjP928NXLnvP%2BZihhf%2BwRwneA0LE%2BjhoCvkYvlMisbdylDKrqb3wXvr8ei9w6NmxF9MCkQk9lTHPpwKHX1tgAosUOP%2F4Sivc3n6L01Q1ohLFs8jD3ZxvBmzKno16x&X-Amz-Signature=e8cd9e9bfae13f37fc4444baa2832cd9e09aa822c61662c718940a86b1c08297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOHD7JY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAeQJpUAs%2Bb2BQrk2f0J2pTNxfx%2BBEoenhQMNdUB%2F3%2BeAiBqd9K5IWi7WamrH3HLXPU6pB0d7iGHk48c4LnpAzPssSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMCuPznhrY3MHR7cXDKtwDMOiBJjx2iCSPWkySwPA8XCrXe3E2kf5RMtdjIUmP5OToq%2BfQs%2F1Z6ojNXNTLgkAlir9mUooHD%2BWJ5KWWL%2FxOHEWJrSiqkip3ZljmGsgo%2BLCiTbPDEJWjYzA8J0lID1Ggj%2Fk5R3ns7HjO9nHpa3kN3e74aOxnTburoGmko7mfWCbQBdsaYXzXl1Wgxlv7INQI1icv6%2BM%2FfD781g0WsoCYXewzeZ338cL4eGjE%2B8Ir4rMaeSC9i%2FeeZQ2V073yKASZ9lHuxCQL78ebbyEoCf4dKGaD6mJTwdv35%2FJ%2FN8ICkMc%2FgBKY7vY4rfbRVuS6QWSM2j%2FRth%2BH8o5ciYFOp30MZRYq7ZnMZBQiiBIi%2FD%2F%2FiK0wAo9nKpsQZ1UuD3rb31aEOrVdUWVFC%2BscQ%2FkjQqncVpNhOGof3FLAH1f1eb6%2B6vsRDtu5nn%2BtpMnK0aDrKebNoSbWB%2FxeSffBMLsNLW5ZiUuHOp1rkcyIobKGyiHZPBFeQ6wXZQkYxHD7L8vByRHKuZMBBWyuiq2Wrqa7c9rzziTJ1cKz1IJxobczHrNAvyMYAvpP8bElyPz91oQYelPsDZ3B9Lgebtu8jHU5XQFABIl3B3tF19UhNiQb8g8MrhlBvbJnWN6DBvnfFHsw6%2BbPwwY6pgEFQGIlZz%2BhijOJkboBsMqLxBX3evWJfLiP5FdcqYpoXy7d46fJfskTrG3Xdw3LxcSFL5NhfRYxGUy9%2BaywW90mpIlhnEtiZPxSjP928NXLnvP%2BZihhf%2BwRwneA0LE%2BjhoCvkYvlMisbdylDKrqb3wXvr8ei9w6NmxF9MCkQk9lTHPpwKHX1tgAosUOP%2F4Sivc3n6L01Q1ohLFs8jD3ZxvBmzKno16x&X-Amz-Signature=6c096ae82cc0d4bda3c6dd7ee966127e72e6d7e44d7df9641d43ce3bf1ca05a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IEIKDL7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2FRx7ACoBRK38RDfVOgypnFuYV%2FUq0skvnuAxnB7gQVQIhALpda95WDi7p8hLGbVXvp0xvAOssrHlKndjNluRz%2BNmuKv8DCBsQABoMNjM3NDIzMTgzODA1Igw5CTV7lcuYnuIIDwcq3AMWri3j1UNG%2F9u3EapOfSYm%2BIQpnThyobXsLqVUh5Uwd3w1Rospwv9ozP4gusowXgTM7zKqKEgQYEKxc9418ECKZUjadoR0JH2SBqZ8WwrWSU%2BGmBPFZ%2FhdeDr5xHskoTabqwohPHeXDhK0KjT0YI%2B19T45Gp%2FWRsJzR0degaMxmfTojwonbJWCaqYoSrXqbTxJXgN9qSG4r3t0IUndLWmkeZfCkIXVfRzVGFpA1PEGhKAw4KGCHcd7aH6r%2BPzdC9sBLQy9UK9HTCubz55WKKBInCHTMDEmw%2BWHSZPxsDJs%2FbRXpmd8HD5GV4Dis%2BhDrYfDg2t7pm5DOSHLNAh5VoPZKykw2OWIcxSFdjFtAfprkrp2F0b6KVH%2FClpxxGatZkItOyHlUdBB5lENSMKPHCvkqx%2BMKxX7kBHAK2hdXfhO2UAJqgokXJpB0z7Eb5BtUqT3F7WCrq6T2F3EgbuKqGB3uqbr4VoE3iyWHmNRuaHVmWBkQrcFp62e7oKe7ZxYwcKEYhM1BK%2BAKKLxNpSSACSdQvWDLmcQu09ty%2BuCzxHyTo97RTUsauWHTmhYB0lDjWue2AIUBCVwLFvSO%2BNUm9vU5YcRVUqKX3DnBEVjZHVa5YtczRMxudYyjnkSxjCP58%2FDBjqkASiLHK885Q%2Ft2GlTqaX66Um6QqnNME3cHhhigEWJBhQgcuQsIrPCPgnjrTRhJ7dO3sSP%2Bw9epCfduNLRg0S1wct7XGdFPs%2BpFhgGaAilPs3LT4nvDhfbDeTwCqdK%2Bji9VGc7VT7C6p9UWMns1yuRBFXD7eIaabg9aOO9stsZin4Su2sS%2Fq75tBFzY7hEg6VQpKIJ5cpPC4MScnq0UnfDrxGzqBk%2B&X-Amz-Signature=3ff8b776753d9291a0a267d475b654db466f4e4fe6780f2d7eb29dfbdc45b0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N3PKPJQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFVTUL3hOfvE%2FePlwp26JEejhbseTKehjKmX8K%2B%2FIZCzAiB%2FPjxn3y7sHPD00FAWjkSXzG4AFguqlqh61dWDYpVXuCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMtA3iZNb2XTdchp4FKtwDrMZdmkFJuVuVhaHsrd%2BMs03jXKLVdfJfAhICbryrLXW2lqzS5dvbWYGGUFoBSw9dkXvmkG19SugnF98Mut2yJUVjT5XAL5vY0VvRYYx1JGFFMK6zgYjN27VDJWNykzoWnwQYHaY%2F1kFxy9PHDdgJcLq260IqykqFP73H1TpHTLCvwo6PRGsNhGCkGrpJJJKh4gtXJpEwgIuhwPFp9JjRHsVt6Ihyx2PypAMPmzt%2F2Pf%2FAdQIitdKKN%2FX9mGQSZhOTi52SKrfDNBG5L9cRMhf4tn%2BLFo1N23OYINrW%2FX6oZbw12jzcXhW0LBhdPZ0gN3WCsB3xlb9MN5UL8BvaC5uTrvhWf7eMCDdg4P%2FMPvr6BrbqFI2tvWko8TRQWSfNRTfXYWgwI28bkPGVDyxf%2FPOHBppHuK0PW51p0PMay7PqLDFoSTkpurWAcrC3yNKAZToPOk%2Fhesw1VfHKDkK%2FgtExnqP389Oit9OSI2UfktZB6VwqCi1q3B68hElns4wwyyboIA%2BP0i7MDGVDxftZV5cf0KIHGzJbHBwxrz7GgHaSJCbul1Bc%2B1Pyw5%2F%2Bq3CoEhrOMazaxxsqzEaOKKiS4Ev2%2B4z0VcKf%2F6SjZLZhIX%2FybNZrPKaC3xnOpXhqpQwgefPwwY6pgFrQLd7%2BpO9870O9NPRxwRCkNWdqelpcaTcGSTiL0OscP%2BCbfGJqRH%2FPNSzKDOOyvnozsvELWNIzdcNpuqKYAp6OUso1iBZ%2BGAYk3ArV4A2nzdvz2g7t0h4ld2HYeiV4ojdHmvyr9QAxsS8qSZTkHExFcTETH0747L7dvpw%2FU%2B6zU7B5OwMeRnt5Tjtuyc1w5MfWE3O7WUZotHPyKlR1nUQcn7lA3ww&X-Amz-Signature=3532b04e6c4b4b939a39d9fdee63f72f0a81c6c1b5a115fa33ca0bd238847506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOHD7JY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAeQJpUAs%2Bb2BQrk2f0J2pTNxfx%2BBEoenhQMNdUB%2F3%2BeAiBqd9K5IWi7WamrH3HLXPU6pB0d7iGHk48c4LnpAzPssSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMCuPznhrY3MHR7cXDKtwDMOiBJjx2iCSPWkySwPA8XCrXe3E2kf5RMtdjIUmP5OToq%2BfQs%2F1Z6ojNXNTLgkAlir9mUooHD%2BWJ5KWWL%2FxOHEWJrSiqkip3ZljmGsgo%2BLCiTbPDEJWjYzA8J0lID1Ggj%2Fk5R3ns7HjO9nHpa3kN3e74aOxnTburoGmko7mfWCbQBdsaYXzXl1Wgxlv7INQI1icv6%2BM%2FfD781g0WsoCYXewzeZ338cL4eGjE%2B8Ir4rMaeSC9i%2FeeZQ2V073yKASZ9lHuxCQL78ebbyEoCf4dKGaD6mJTwdv35%2FJ%2FN8ICkMc%2FgBKY7vY4rfbRVuS6QWSM2j%2FRth%2BH8o5ciYFOp30MZRYq7ZnMZBQiiBIi%2FD%2F%2FiK0wAo9nKpsQZ1UuD3rb31aEOrVdUWVFC%2BscQ%2FkjQqncVpNhOGof3FLAH1f1eb6%2B6vsRDtu5nn%2BtpMnK0aDrKebNoSbWB%2FxeSffBMLsNLW5ZiUuHOp1rkcyIobKGyiHZPBFeQ6wXZQkYxHD7L8vByRHKuZMBBWyuiq2Wrqa7c9rzziTJ1cKz1IJxobczHrNAvyMYAvpP8bElyPz91oQYelPsDZ3B9Lgebtu8jHU5XQFABIl3B3tF19UhNiQb8g8MrhlBvbJnWN6DBvnfFHsw6%2BbPwwY6pgEFQGIlZz%2BhijOJkboBsMqLxBX3evWJfLiP5FdcqYpoXy7d46fJfskTrG3Xdw3LxcSFL5NhfRYxGUy9%2BaywW90mpIlhnEtiZPxSjP928NXLnvP%2BZihhf%2BwRwneA0LE%2BjhoCvkYvlMisbdylDKrqb3wXvr8ei9w6NmxF9MCkQk9lTHPpwKHX1tgAosUOP%2F4Sivc3n6L01Q1ohLFs8jD3ZxvBmzKno16x&X-Amz-Signature=6e6e862e1dc0e31dd5ba8cc01eb64679176425d5777842502539fa03f5edb906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
