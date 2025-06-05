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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVHBL4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCm0ILrAsJqLFXcODuIk5vHpwd37vWTWZFMKGBUNMNELwIgD1aHWSWf%2FPS%2F6Dw4rcmYNiGiWlMg3joljrAUbYKwio4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMYe%2B3Hhha9kbfiVCSrcA407F1T7txwIDUYBwkNAxiNf%2BLYOXM00TCisL7DMO7t2OANoBqoH2dW%2BkEnr5C4Ud55JrnUrvaLrWfbAriFXI9ZLPSwPJptf9%2Fh4cSmUAxZrHlBRw4cUIGFuwbdZRv%2BJjXCEGOb%2B0fndCefdbeHjxL5HtTU2mS%2Brs04gCQCIgnpJAQpg8B7i0gwce4BcXfE7vODhZcl01NbHeikOlbxZPfwquNT7a5Mu%2FWQZk9qioIrHDxEqXzdJkHLzcW2mjUeMPmoQJS4tYE3PsyGLV0pvVIJZl7w70ruRU%2Botrlke5ecE2sVfvBpQ9%2FJCyBtwa1wCbhcAy83lBLJJQnTYKWHPajo7Tmn11IILxKSr2iyKglV10lareU4B1xKi8WDGo1dPYP3YZZo8AU0es%2Bl8dYUZpy8ry4Wt4ZDOWIapLLb4tn6ez3uBoYThZnCrKCmWa6jjHyTYtJV5f8AOMEofOW67gdFhZ6zjEVOMAE2x4%2FWmbqL7NZ8ZLhvAYdppPWGzRvcy9iZNqJWh8UBf9Yxt7pUqMuqWGUnJf4aFFZuJiiFQhB3mEJqbF1o%2FKoCVMZ7QddJP4t2XIGQGWnb4GUsc5Szt9yct9EYnNBbtHGEr2kkfssiQnoMAK55W%2FUFON0PhMJSvhcIGOqUB3G1GTeDpZvEClsdhIJAlu4eTTrhAXB%2FM7dsC%2BFy8ZX7GIfpJgIrAi4k2kVpIwScuWs6oXvidXpbSfcaMRxomC%2BXJfGm6FW5mgCOMFeFozmK2IVOI%2FO9mFm65tOyYYW05s7lK97zIgv1fL3G68HgpO3VR9cvgfPZkefFqs8C784%2FpCvpWY5A2QODAe%2BnQU%2FAftjs0%2FrPEjqTQ00eoajwdnxhaGzpg&X-Amz-Signature=7973c359c88adf79cd494c6c4c751e47049b6e962587da135fac786892300176&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVHBL4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCm0ILrAsJqLFXcODuIk5vHpwd37vWTWZFMKGBUNMNELwIgD1aHWSWf%2FPS%2F6Dw4rcmYNiGiWlMg3joljrAUbYKwio4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMYe%2B3Hhha9kbfiVCSrcA407F1T7txwIDUYBwkNAxiNf%2BLYOXM00TCisL7DMO7t2OANoBqoH2dW%2BkEnr5C4Ud55JrnUrvaLrWfbAriFXI9ZLPSwPJptf9%2Fh4cSmUAxZrHlBRw4cUIGFuwbdZRv%2BJjXCEGOb%2B0fndCefdbeHjxL5HtTU2mS%2Brs04gCQCIgnpJAQpg8B7i0gwce4BcXfE7vODhZcl01NbHeikOlbxZPfwquNT7a5Mu%2FWQZk9qioIrHDxEqXzdJkHLzcW2mjUeMPmoQJS4tYE3PsyGLV0pvVIJZl7w70ruRU%2Botrlke5ecE2sVfvBpQ9%2FJCyBtwa1wCbhcAy83lBLJJQnTYKWHPajo7Tmn11IILxKSr2iyKglV10lareU4B1xKi8WDGo1dPYP3YZZo8AU0es%2Bl8dYUZpy8ry4Wt4ZDOWIapLLb4tn6ez3uBoYThZnCrKCmWa6jjHyTYtJV5f8AOMEofOW67gdFhZ6zjEVOMAE2x4%2FWmbqL7NZ8ZLhvAYdppPWGzRvcy9iZNqJWh8UBf9Yxt7pUqMuqWGUnJf4aFFZuJiiFQhB3mEJqbF1o%2FKoCVMZ7QddJP4t2XIGQGWnb4GUsc5Szt9yct9EYnNBbtHGEr2kkfssiQnoMAK55W%2FUFON0PhMJSvhcIGOqUB3G1GTeDpZvEClsdhIJAlu4eTTrhAXB%2FM7dsC%2BFy8ZX7GIfpJgIrAi4k2kVpIwScuWs6oXvidXpbSfcaMRxomC%2BXJfGm6FW5mgCOMFeFozmK2IVOI%2FO9mFm65tOyYYW05s7lK97zIgv1fL3G68HgpO3VR9cvgfPZkefFqs8C784%2FpCvpWY5A2QODAe%2BnQU%2FAftjs0%2FrPEjqTQ00eoajwdnxhaGzpg&X-Amz-Signature=460ee0c05866b5686afa44ac590a085687855ff7e804c31855bd853c5419b520&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVHBL4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCm0ILrAsJqLFXcODuIk5vHpwd37vWTWZFMKGBUNMNELwIgD1aHWSWf%2FPS%2F6Dw4rcmYNiGiWlMg3joljrAUbYKwio4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMYe%2B3Hhha9kbfiVCSrcA407F1T7txwIDUYBwkNAxiNf%2BLYOXM00TCisL7DMO7t2OANoBqoH2dW%2BkEnr5C4Ud55JrnUrvaLrWfbAriFXI9ZLPSwPJptf9%2Fh4cSmUAxZrHlBRw4cUIGFuwbdZRv%2BJjXCEGOb%2B0fndCefdbeHjxL5HtTU2mS%2Brs04gCQCIgnpJAQpg8B7i0gwce4BcXfE7vODhZcl01NbHeikOlbxZPfwquNT7a5Mu%2FWQZk9qioIrHDxEqXzdJkHLzcW2mjUeMPmoQJS4tYE3PsyGLV0pvVIJZl7w70ruRU%2Botrlke5ecE2sVfvBpQ9%2FJCyBtwa1wCbhcAy83lBLJJQnTYKWHPajo7Tmn11IILxKSr2iyKglV10lareU4B1xKi8WDGo1dPYP3YZZo8AU0es%2Bl8dYUZpy8ry4Wt4ZDOWIapLLb4tn6ez3uBoYThZnCrKCmWa6jjHyTYtJV5f8AOMEofOW67gdFhZ6zjEVOMAE2x4%2FWmbqL7NZ8ZLhvAYdppPWGzRvcy9iZNqJWh8UBf9Yxt7pUqMuqWGUnJf4aFFZuJiiFQhB3mEJqbF1o%2FKoCVMZ7QddJP4t2XIGQGWnb4GUsc5Szt9yct9EYnNBbtHGEr2kkfssiQnoMAK55W%2FUFON0PhMJSvhcIGOqUB3G1GTeDpZvEClsdhIJAlu4eTTrhAXB%2FM7dsC%2BFy8ZX7GIfpJgIrAi4k2kVpIwScuWs6oXvidXpbSfcaMRxomC%2BXJfGm6FW5mgCOMFeFozmK2IVOI%2FO9mFm65tOyYYW05s7lK97zIgv1fL3G68HgpO3VR9cvgfPZkefFqs8C784%2FpCvpWY5A2QODAe%2BnQU%2FAftjs0%2FrPEjqTQ00eoajwdnxhaGzpg&X-Amz-Signature=551673edf4c6139f587ab4780ab7254e90d2564d09a1390a34032660a61bdf11&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCAZGI56%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEp7FamIOfuFPYavV5JbSz3LK2vF%2FYHm08DdGMVhm1zWAiBDho4NFyxBcFEntCZlCc4HUiLdhPlZ09advwqOrZjxdCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMmt2KxihEZC8fWFcbKtwDEenuurI%2Bmeyp4AbsC%2BgD3o%2FdXzhlJ%2FIBehQOUqwB0YHpJJfbVDxexuqlcaacK8yncmYh2VnARnXB0fXLJp2C7LYiyJ4LG0zs42qn0laT5IUI6r1zwMzsYeqYebHmAPanm3AFUmOe78XgSF3g0BNocMoe6Pee0Me3d6nIAvGWwuVr5vgzPK4qoYvbf3xSPjmPbvvuVSBpI0opknT7Ko3wbnlYCBWoTKG4XVRrZTLDuuXWxmWFVzGkoWksuaUQnkVKSV8u9iF7%2By%2F%2F0QsGiPzvqNoAEczdpVJBECnVwXVnOm3lLnJ6yMR6dB8SHOFqs77qUmx3nF%2FogMUMBSD9KRBmKLexD5KEG%2BrKnAgbpThDri4T4kZfoMRWNlQ5ziJRWe5K1A3nBG62idgxc%2FhOTrOC%2BTEucH6vfN1yMiNBNqCxFHPikFpBZAhWJSlZnYiy4JoQcMoCj1qFznnwe4NgwbhXr331iSb53dHUvz6CvXgd4KX1HF8v9DPUZfR7l%2BYyGdDopYUYj4IiT2rrAtDurKzcnQs%2BzBjLAEULu0B1Vpg4THc%2B%2BIQTnmPSwRLwkUy1IDZl%2FWsNOLC8B9Sn28LQxrXZMpVwYkn4r%2BSWMrixlr4XID7Xeu1o23JMu1VWPHIwj6%2BFwgY6pgGIWbXWisPYNHEIZKyKSvi53HoV3aSflyoRmA4e2VBPet8QehmHD%2F9xSbsszFLrAKiCD0K0M5wKXZNxoAikCPwTU9Ac4NNHa9aHzwaw0mLMy6J8B%2BRLM%2F2rrqrF9cOrvTw99XIlgTDBrdOQz8w8y4crSlhU2lGtNi6le9tVzjrp1RWE%2BbCYCzCCPX9UsGgtx79gTmDKoT4iOcz9%2B8UnW7u2fTu8kmTN&X-Amz-Signature=f4d0a909b337d9d7181f4fc77d7a698426266806f8b057d224a0bf720d47499b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQBX3NPO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCagWWkagxwZ1x6Dj4Mu51f7nftmAdBLUpjOxbvuOQVTgIgX9STw%2BMtpJtJhJDxEKP8EcwXygGuLGbRqmzrJ7yvCxsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJOlkbq9ehyNnRG%2BbCrcA7xRgOTuXO0Xk0ld%2FqZkwUomiZTinUwEqPWnY75puelng81EyJVeKPT1%2FhIKqal4RJIW5tqMaG7phbTHTMjzgkzUmwUxi6avLE073fwBzV9Id3iR5rOBzqOgg0%2FkwAkBsreHdK5RItuMU%2BaoMA1QLmE0hpRpf9s3Bi8z6xeb7B8T%2BDcYtBtnGn0z2OLetBEiauMc41%2BfKw8H8DY2zqrn2Ec7FXSC262mGZiDzpFkh%2BsXRJSi8fhtAT2HyxkQY4j6jwRgMqs5hkKy2xx3uipa%2FC0WkQZSCAMbqR%2BZLEAZy174mAVl9nlxIFjJIaYD833OWYcsur65gX9fFUPT01mtofj2ZZgJ8a5UiW6M%2BL0o%2Fnzh6HaJrg8%2BkuoQYyo3IbaCBA1Jb0RoFx%2FmJR2K%2BLdnfkiUCfD6l11Kpcwq0cN0PzgoQkT4BwSll3Yz60A9STbkR9j6u1HLOXtudrjvNG9K0uzOVq71Z6nnx%2FfFsqlHzWzqoG6vT5tHLnflosSPDrvKS3mRPdJ3hO9C%2FmpJnBJm3CBrbQvNRSaDjtYSZGMGT9tbvqcRv0zWa57VaDKxYZYFxon8vHWVFCXyKNkoEdJX0Po3NQrP9wXWAZ9nlTHwH1cgSmLh%2BXMsmSTHf6oFMKWuhcIGOqUB6aKkT%2FY1fxEXwXgbaNdKn5Z6uclYv7y3e8XEHiDl9ifqPKV6pCflYAhqwxMqZXl2clBh3jOonwa%2BPEllyzwk0fi7XYBk6%2F4aCbc9bQpzc%2BKRajP1Csj8ERE60w6cxcmrLwX%2BFgHmoEF966YBd27OFxpOgu5jvdrF%2Fgc2RBeOlF8uOOTeox04aC1xQV571jumXUIAIZtIBVkGr5Y%2BTXtKqoEAaYEu&X-Amz-Signature=94301c6fde69a82fec9a7808dfcdb6060b128f97128273066424728dcc8e00f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVHBL4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCm0ILrAsJqLFXcODuIk5vHpwd37vWTWZFMKGBUNMNELwIgD1aHWSWf%2FPS%2F6Dw4rcmYNiGiWlMg3joljrAUbYKwio4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMYe%2B3Hhha9kbfiVCSrcA407F1T7txwIDUYBwkNAxiNf%2BLYOXM00TCisL7DMO7t2OANoBqoH2dW%2BkEnr5C4Ud55JrnUrvaLrWfbAriFXI9ZLPSwPJptf9%2Fh4cSmUAxZrHlBRw4cUIGFuwbdZRv%2BJjXCEGOb%2B0fndCefdbeHjxL5HtTU2mS%2Brs04gCQCIgnpJAQpg8B7i0gwce4BcXfE7vODhZcl01NbHeikOlbxZPfwquNT7a5Mu%2FWQZk9qioIrHDxEqXzdJkHLzcW2mjUeMPmoQJS4tYE3PsyGLV0pvVIJZl7w70ruRU%2Botrlke5ecE2sVfvBpQ9%2FJCyBtwa1wCbhcAy83lBLJJQnTYKWHPajo7Tmn11IILxKSr2iyKglV10lareU4B1xKi8WDGo1dPYP3YZZo8AU0es%2Bl8dYUZpy8ry4Wt4ZDOWIapLLb4tn6ez3uBoYThZnCrKCmWa6jjHyTYtJV5f8AOMEofOW67gdFhZ6zjEVOMAE2x4%2FWmbqL7NZ8ZLhvAYdppPWGzRvcy9iZNqJWh8UBf9Yxt7pUqMuqWGUnJf4aFFZuJiiFQhB3mEJqbF1o%2FKoCVMZ7QddJP4t2XIGQGWnb4GUsc5Szt9yct9EYnNBbtHGEr2kkfssiQnoMAK55W%2FUFON0PhMJSvhcIGOqUB3G1GTeDpZvEClsdhIJAlu4eTTrhAXB%2FM7dsC%2BFy8ZX7GIfpJgIrAi4k2kVpIwScuWs6oXvidXpbSfcaMRxomC%2BXJfGm6FW5mgCOMFeFozmK2IVOI%2FO9mFm65tOyYYW05s7lK97zIgv1fL3G68HgpO3VR9cvgfPZkefFqs8C784%2FpCvpWY5A2QODAe%2BnQU%2FAftjs0%2FrPEjqTQ00eoajwdnxhaGzpg&X-Amz-Signature=e7ab0ea95136f14069ecbbc68ddc6928056419e96c3f264647c37c5f6291f2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
