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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAUN5KRJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FHKor1Qno0kA1t9LN4TeiCLJ3HjDlz5DKS5dGA7WJZAiEAoJ3XeglS3HYtlATBMGrc9DWx%2FwtksnziN5Oxi5BFaE0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMoymupTtjbj%2BN8RxyrcAxXIIfT6Yx0yDdMWeQi091WXOybvWjDV9CDyw%2BV49XO5WTPEzR55L3yzoH7751tb94wk%2BmLz92SUGysZbemvKobDg0igH8PxB6MpV4v2whtf6BzJbKE2H32XhwrAMDkQS%2BCn97QQ2vKQp0FghFeU8dXcifI9lQwX7kkhvqCM5gw7PIkNnT95iKUxB64SaniLzEWdLA1J3sPbTWelUkDYMfIe9r%2F2Xw0U4uTcQQSxmY3rJZzQpqgKIAJjardJw4KUdycy5nIoZaq%2Bluc%2B3yddpWKdKRAguNDJTxhzIT8SohxeY0I3hT9EtLf8mvj2tjxp4BZ47pnDMAPfnIt3tBbqd9hBFH8HD9J9llvAp7WLkuBCN8489YOUdVNzpLYBfeLtjpoaP74bsq%2Bd2pySaEChx%2BNOr0TRae60GmwgAjaoPLgngg9xnTfE3lVsRH5C%2F2OGH%2FrgTstk9CL6NhPgch0SOjTO89khIXSOtowvRkncivsf7Z2zZ3gcw6R%2FZD8z9G89RqxIm67nalKUHCoqswx%2BgTnEhc%2Fo90LUmGk6W6P7WiVzi%2FZM1JY88LivkR0uVs89CO3man0Nxkjr1c5aDJDzFHL7U6V6MsLRPSBFkK%2BP0gZZUDkX1Q9q89pbY%2F7aMOXms8AGOqUBVb%2B6pqwTEhgEk5fFFRK2AxSngc4UtWB3TYP50U06BtZMpgMK2B4mhMASAiF0bDEEP2RqoZtAQC3n0GUBF63q14gLrmBxRYKK9QMFAWyDHlkMqOneITbWraEsU4G%2FJ80I04g89mvA%2F1t%2BEcyeNjs9vVkLPe6R4rd3iY31HjG36s3TSY7ZGnP1CEGyU1c4VdCxfwksq%2By04Jb%2B%2FgZAqO2xu%2BRfIcGG&X-Amz-Signature=3eed980fb02738c0d47146bfc122458e2de778f2a534f5e01d33c90ec33f9668&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAUN5KRJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FHKor1Qno0kA1t9LN4TeiCLJ3HjDlz5DKS5dGA7WJZAiEAoJ3XeglS3HYtlATBMGrc9DWx%2FwtksnziN5Oxi5BFaE0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMoymupTtjbj%2BN8RxyrcAxXIIfT6Yx0yDdMWeQi091WXOybvWjDV9CDyw%2BV49XO5WTPEzR55L3yzoH7751tb94wk%2BmLz92SUGysZbemvKobDg0igH8PxB6MpV4v2whtf6BzJbKE2H32XhwrAMDkQS%2BCn97QQ2vKQp0FghFeU8dXcifI9lQwX7kkhvqCM5gw7PIkNnT95iKUxB64SaniLzEWdLA1J3sPbTWelUkDYMfIe9r%2F2Xw0U4uTcQQSxmY3rJZzQpqgKIAJjardJw4KUdycy5nIoZaq%2Bluc%2B3yddpWKdKRAguNDJTxhzIT8SohxeY0I3hT9EtLf8mvj2tjxp4BZ47pnDMAPfnIt3tBbqd9hBFH8HD9J9llvAp7WLkuBCN8489YOUdVNzpLYBfeLtjpoaP74bsq%2Bd2pySaEChx%2BNOr0TRae60GmwgAjaoPLgngg9xnTfE3lVsRH5C%2F2OGH%2FrgTstk9CL6NhPgch0SOjTO89khIXSOtowvRkncivsf7Z2zZ3gcw6R%2FZD8z9G89RqxIm67nalKUHCoqswx%2BgTnEhc%2Fo90LUmGk6W6P7WiVzi%2FZM1JY88LivkR0uVs89CO3man0Nxkjr1c5aDJDzFHL7U6V6MsLRPSBFkK%2BP0gZZUDkX1Q9q89pbY%2F7aMOXms8AGOqUBVb%2B6pqwTEhgEk5fFFRK2AxSngc4UtWB3TYP50U06BtZMpgMK2B4mhMASAiF0bDEEP2RqoZtAQC3n0GUBF63q14gLrmBxRYKK9QMFAWyDHlkMqOneITbWraEsU4G%2FJ80I04g89mvA%2F1t%2BEcyeNjs9vVkLPe6R4rd3iY31HjG36s3TSY7ZGnP1CEGyU1c4VdCxfwksq%2By04Jb%2B%2FgZAqO2xu%2BRfIcGG&X-Amz-Signature=b52c463b4147288145b99ce6d3681f2b6dd7d5feca9d94013c3c74f84b2e6a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAZTYEN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA75VuHEsa5W6232AnGiJK20Wow3UX2WwW8GDjn57mKwIhAOpDqWtWbIxMpIr4rva%2F21x6QUdQjadkSIw1lN%2FuZEz9Kv8DCEgQABoMNjM3NDIzMTgzODA1IgwAL8ACNUHMGadeYhUq3AMRMKD29wW5x1NuoAwNr9HSfI2uNWP48e13gQaJ0Hrq4usuoQTK2xKkx7FJ4CLdxWMhCN0bKloB%2BQcRS35W88y2QxcWyfWIUc4OCwkAIfruzhPxGAfOQO7GG%2FNJJzyTYIaQAtuNMv1mdusWcRPmrW8vJEXgfUJ2zuAQHN1JbcKrvBv%2BvPfEjIs6388T3cOamuTbnZKbxGQNhX0D3OJigoIAYtIflOufnt7hfKf%2BuZ7LwLbsiDyjmETmy0VWijmwVeEHpZ9JFwqE22eYMecCdHpGDZM8g57eqQPeBCdeHR4h3%2FBQ9Sso6Mr7TWHwuefho1n%2F1GPdWg347UalEjvunKFfC9u2tafTteWC5ib9GM%2BNEALnUas8zFnxowFyEj1Y%2B8jQItWkZ4cfhx73a8DRSdQd1s%2FsIWTAhzR2O%2BJiom6eTSxHGkrLRW5CL5CKnP8irS0QzuJbkhM0s2Pzs%2F5kxW%2B%2BsnvlUrN%2FD2nAr7TOGBdq%2FVW1rSoxUKeoydkeoZ6XFMFFNrnRbU4Eh%2ByvBuSRBUXD04oL%2F3XKSe6ias1DnjJ39k32wMy8h6ZY4moiX%2BHsYxtKuy7hinmIY%2BQstdLhELOX72PYC8RppQGGAfnTedKE94H0bMJEV0b%2BSW7jvzDz5rPABjqkAdeECReS%2BofeIhOyEXAhdwI1vivn1%2FtlYR6Ct9zsiBSjD8yhbfATuQfp%2FbUrEsm86DYvQ3E7wz8lnVLibbGd4QyRnwC3ACPA9dkCMp4NgtqZnNGSw0peXH70ifSDmy9ZZbJtbgcG7ic3zim8fPSjkpGkSVvsBcIHag8gWx5l%2BUdRsTEZf8nHcj9zWRCXHnTDumRaMK%2FTgmuroNAEwLBZ4XCJSv0C&X-Amz-Signature=4b7e948ae863a831de7bf6f79fc0348b52faacc4e22629b64c785d41743d8c79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YS2A27O%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBKnlBSBiSPb6zKKnZvxMZWxZHtBH1LVi8rzennx4fwIgZrfzzjoRdwZGZNqBiGiAzcUudhWEWX0neQrvMSkat8Yq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF7OW%2BplY%2Bxv%2BYuM4yrcAzTLTJUB2A5JhqI4oSv4ulkbWAv7gwx%2BtF2yIlm6Ve9JvUnkS2XEPobDNcoi2c3MHNid65BwxwXauCERw0WhN5qjtujSq92UUqWieOOZK2ZIWCxE8n9v36JoE8roa0N14KqF3W7zTWgJUWbo0CgBZbFmG5mwNe0s8wTv0cEbtJjUIiVJMTHq47VB0mIiR69q8mvujkdQuUkZA%2FugjNTQv5HGlRcbX6UCyi5snWyfjkUs4CxEyLh%2B0J9O0LeWoQ8tANyS2OmtJT8pvdhQSaGjsrCRhFF5Y8ykEWBlWXoDyzoiD4dBkcGk27NQEpMs9WWUqJZ0UiGLfWqc%2Fg4cInJd8R4hon0wK3vDwVTXu9Hm4nxJkR9mI7gHNCuNa98mK%2F8YwmIWD60sqz6x5X%2BaymG2rohdIXyDFvrJljZj3j1lVOD6rHELzy0w02ZULqhLeaXPoNHXyen3aJUcjiUVBjh8a8rm8jWAevgyaYsQR55rkpnY3VfnPGOhWR4YVUgw3ITkMjrX0ih0GyIrTOMA8Xc%2FR%2BVgJPeg66pt8Q6MBpJWmswvp5jLfCPJ31EjLW4VRghE2pmeb6jGIXXnrZf4BBsmx9%2FkJe37hTWrrNTxkWNlItXh6qHab%2FHaTnGF17nPMN7ms8AGOqUBX%2BpntFkac1%2FS%2BPwjGtbQmtksS98bQMn0V9C39moN8ISJSehhMTVjpLlo8isVSWWWMQK2n2SXjl8%2FDzE2CuRkBc3f26cJH3InsQnc%2BavQoTRB0UHUXfGs26PB0oWWiBq2pkLzFhY6LqcNBQpN5naurlEbF871Gm35QJn5%2BkuMXP%2BqozLpo6ixZ3RFRXRCa2taJZyqPII5pRYP5JVKwhh1tDVGthZ8&X-Amz-Signature=f4fde231bb0e85ea7be2f6e9e825cd53b43f2af9aebd1085209d2599f3233bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAUN5KRJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FHKor1Qno0kA1t9LN4TeiCLJ3HjDlz5DKS5dGA7WJZAiEAoJ3XeglS3HYtlATBMGrc9DWx%2FwtksnziN5Oxi5BFaE0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMoymupTtjbj%2BN8RxyrcAxXIIfT6Yx0yDdMWeQi091WXOybvWjDV9CDyw%2BV49XO5WTPEzR55L3yzoH7751tb94wk%2BmLz92SUGysZbemvKobDg0igH8PxB6MpV4v2whtf6BzJbKE2H32XhwrAMDkQS%2BCn97QQ2vKQp0FghFeU8dXcifI9lQwX7kkhvqCM5gw7PIkNnT95iKUxB64SaniLzEWdLA1J3sPbTWelUkDYMfIe9r%2F2Xw0U4uTcQQSxmY3rJZzQpqgKIAJjardJw4KUdycy5nIoZaq%2Bluc%2B3yddpWKdKRAguNDJTxhzIT8SohxeY0I3hT9EtLf8mvj2tjxp4BZ47pnDMAPfnIt3tBbqd9hBFH8HD9J9llvAp7WLkuBCN8489YOUdVNzpLYBfeLtjpoaP74bsq%2Bd2pySaEChx%2BNOr0TRae60GmwgAjaoPLgngg9xnTfE3lVsRH5C%2F2OGH%2FrgTstk9CL6NhPgch0SOjTO89khIXSOtowvRkncivsf7Z2zZ3gcw6R%2FZD8z9G89RqxIm67nalKUHCoqswx%2BgTnEhc%2Fo90LUmGk6W6P7WiVzi%2FZM1JY88LivkR0uVs89CO3man0Nxkjr1c5aDJDzFHL7U6V6MsLRPSBFkK%2BP0gZZUDkX1Q9q89pbY%2F7aMOXms8AGOqUBVb%2B6pqwTEhgEk5fFFRK2AxSngc4UtWB3TYP50U06BtZMpgMK2B4mhMASAiF0bDEEP2RqoZtAQC3n0GUBF63q14gLrmBxRYKK9QMFAWyDHlkMqOneITbWraEsU4G%2FJ80I04g89mvA%2F1t%2BEcyeNjs9vVkLPe6R4rd3iY31HjG36s3TSY7ZGnP1CEGyU1c4VdCxfwksq%2By04Jb%2B%2FgZAqO2xu%2BRfIcGG&X-Amz-Signature=6f378425c21beff0112a2d9f122e260c473c632ff7c6d4d0d4b579ac16e28596&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
