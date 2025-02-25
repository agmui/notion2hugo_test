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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQCNNNU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDfxKFXNcH6VC84N5rcCu5WRcKwPZwjQnK0Q6BGb1oZOAiEA0DStho%2BVbC%2B238iy%2F5GWaCfCjEGCtMRack48lGHmJUoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIN0z7qzkB8qesSbVyrcA59JD7jUc%2BxGzX7Q0oDv2otvMdTeTnTXueZGpf8Sgi47ycFiPeDmp25NzuuukgxlPQDgXKgBj0NXF9MMzXL7a1Vb3YVZDziNCqpEqoPd%2BsQD%2FAFQIIl%2BE9vYAPfmkEIFZILHQbUTbzHZv4C1z1B5TtrwUkHAcApxEfcFjOvmvXPNrswoBXZEAn03Hz%2BmQG7V5duZNMkSKV4iYJX9%2Fck2i%2B7x5Kk%2BK2xkP4vQDweyoxEDkvwwevubIPdsim6CqqT3E2EVim0%2FSkNpKtIYQO60r1aOR3kAIWBZiqsiQ3PyP6UMATKI7oQg0R1zo%2Fnw6c4bNZiyIu20mQAcsFkcHIVI4fgfLmre3UykBBUNBssLAAuNCMSiayyPAbf1VjEaJ87rtf0iP4NfoTwB8CEFXjZDG568wFHpL8qUiTfOEFXJ4QSv%2Bf2sje4BWVGvuQ2XE43bK%2B68YIJ0h5OO5Y4oEejzAmjM0kuBx2rIIr11%2BqvWouoAHnQPOTC5btcBTqAIoSN8pMjfg8quq3VV9L2y%2BFj14i%2BWbv84DFuHRhZoIoYieaxQlEgAAbRJCeC5x1QUVK0uOKhvflvSCH%2Bt6jj6ZpF5LSxEaiWrVBUSxA4QkJfW%2F06ET9BCSgPECMd6uzCFMOHb9r0GOqUB6jKbYRx0sDcYTopC89gBFCIGQvBmrHfrpO9ENVVUr8DtG%2B8FoVZ6fKZbaReT%2BPg%2FeOaq%2B1qGzFHY0t%2B105A8ZyXEo8n2lveXuF9%2BjPkXa3SjAhWP%2FPOKgYCsdachOan1M1HVHybwpEJgp%2F04GqcQ7u3aNJGyfx4AOm1gOQEY5L7OLwLm3aTgFv2nAFgvw5dxxbyS%2BfL4hpmBiJX9NW6LeVWA1uV%2F&X-Amz-Signature=4985b6339a7d2e0bbc04c8a5f0326f28caede766c6c18733f2c0b3665fea5cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQCNNNU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDfxKFXNcH6VC84N5rcCu5WRcKwPZwjQnK0Q6BGb1oZOAiEA0DStho%2BVbC%2B238iy%2F5GWaCfCjEGCtMRack48lGHmJUoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIN0z7qzkB8qesSbVyrcA59JD7jUc%2BxGzX7Q0oDv2otvMdTeTnTXueZGpf8Sgi47ycFiPeDmp25NzuuukgxlPQDgXKgBj0NXF9MMzXL7a1Vb3YVZDziNCqpEqoPd%2BsQD%2FAFQIIl%2BE9vYAPfmkEIFZILHQbUTbzHZv4C1z1B5TtrwUkHAcApxEfcFjOvmvXPNrswoBXZEAn03Hz%2BmQG7V5duZNMkSKV4iYJX9%2Fck2i%2B7x5Kk%2BK2xkP4vQDweyoxEDkvwwevubIPdsim6CqqT3E2EVim0%2FSkNpKtIYQO60r1aOR3kAIWBZiqsiQ3PyP6UMATKI7oQg0R1zo%2Fnw6c4bNZiyIu20mQAcsFkcHIVI4fgfLmre3UykBBUNBssLAAuNCMSiayyPAbf1VjEaJ87rtf0iP4NfoTwB8CEFXjZDG568wFHpL8qUiTfOEFXJ4QSv%2Bf2sje4BWVGvuQ2XE43bK%2B68YIJ0h5OO5Y4oEejzAmjM0kuBx2rIIr11%2BqvWouoAHnQPOTC5btcBTqAIoSN8pMjfg8quq3VV9L2y%2BFj14i%2BWbv84DFuHRhZoIoYieaxQlEgAAbRJCeC5x1QUVK0uOKhvflvSCH%2Bt6jj6ZpF5LSxEaiWrVBUSxA4QkJfW%2F06ET9BCSgPECMd6uzCFMOHb9r0GOqUB6jKbYRx0sDcYTopC89gBFCIGQvBmrHfrpO9ENVVUr8DtG%2B8FoVZ6fKZbaReT%2BPg%2FeOaq%2B1qGzFHY0t%2B105A8ZyXEo8n2lveXuF9%2BjPkXa3SjAhWP%2FPOKgYCsdachOan1M1HVHybwpEJgp%2F04GqcQ7u3aNJGyfx4AOm1gOQEY5L7OLwLm3aTgFv2nAFgvw5dxxbyS%2BfL4hpmBiJX9NW6LeVWA1uV%2F&X-Amz-Signature=fbc0bf331148e7a46bb2b12d1e7797d86b550b153cc47cae178c2fede3ae7189&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CQFMQBZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD%2BOH4DAk0N8G%2B0EdsDH4E9nanWc7939ke%2F1IBKN4VFYAIgMMf3if6BsMqpjsPkyKDo2YuXRaJ%2BFzPpeBfwTgs5fYUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDByn82T95zh4C4H9tyrcA4v15gOc02dbuzZwsJ1mZixrmXi%2FkEaTpTWItfZo1t7IDhLeqCXjPxs56MZwgp4HFZeCtm56jwEQOiaL446VPvzHhSuzMXrff0qVpANlQEL4nurU%2BosRoQWThOaNVWumLbZJie2OM%2BKmHH%2B0VxBPZ79Hikc5NoddtKfdCEqJa9fQ4tO5DnZowly0JEP%2BupInMW9pdt1A2w394ly9Re1QbIX362OEIiGlpyW6eIPdYA8tWpjFxtGsgSMzUo7JUa2tXqzvmhShYIIkjIEGtwMY3DXIsrGjVSLTy%2F%2BLqXbLItYOUsprnDqNuCvokfVbBf9DH6avI5u94ZpPc%2BZ03BOvXl%2Fg401oNAe0OJ6mGU05fBM3SRWFGuqjuv96gdN5HQbq9v4VqJBWfiJ4ZjmkloE4VFDNNLl3WYqwuuiO%2FBtxgJuNEd1vcrroVr2dVFF7e44Ws7Y%2Fl2ycn4Sup6CT%2FN9cBvSuUFZbe5P0qrQ1Ub2G%2FE%2F8uQZnyh%2BuxPc7qR%2Bv6iAu3E1XDZLqBskXDOz4NTi0zGZTeS7uzuPPCz3mSXFD3ZEOPf5qOlJSo8rv3daQoEDeNm9wXAlaWNZf53gi1YC7y5uzk0xFVtGy65ijTLIuuDRqdd9P8ymrLYjaqpHoMOzb9r0GOqUBPBwMkT3yubbrEzisV42XA8Tod1kE3E%2FRVGgYDYL7kNj3Kxv0gI153nx5jBdN4vgULEx%2BA11W7rk%2FiS7dPgFFeYWpO9Q97JnA7oqPiZ5YuKhN6cwH5G41lyDUbTmMHl9f6PmCU6tc%2Fil%2BCms4SeqJwOo2qdSmNxWylIqTGjQumBENKvTmgoIoN54dRZ4jjJEOUjqIGiyAntLgIVKWM8ZQJTyzFDjY&X-Amz-Signature=ed8557c729d9c21602a2bd099008bec6deaaa37a1fc206b68c198461622564e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHVH7ER%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHgKMJjj%2BxXgJDzUIQMYMrjatEvkiZUE1MyLVdJtuaneAiEA0W14%2Fm1t9AH3uFM2EBinBnPfYA2H0IyXkxghcfQt2Akq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOJuCg3ZT7yJob622CrcA7v5aeKV4a484U2B8QLUfGEL02Vxa6t46bUBlUWHmC0Q9Xh%2F36HDD7TDZis61t3Qzdi%2BVrC2%2FJs41H4gTh6s1sFVQ672qGoIS5V1fGANQMCO1yAGpb9uDXA4%2FJ%2FPzEnxmkwY7ays8p0XOVQHeJ1kzu0%2FP36jS12omc65NPzABnysp2LJfQ73uHNm%2BxqItjUX%2BnkGbFvUXpUr5hJxqzE8N0Af0P8mcUc6XtMxeEclY3mfQwIh8g7AMggvwOcEPjFSWQBObrs7G2qnIKZth4GFkTm3aAgmpcuGqel%2BppR97Aye034fM63Ktk6EM4VQPLjFiG33XPMHTaUcY5GYr1j2pUcQD1qa%2FXaYc9sH%2FagQpZdD2nNoUXci%2FYyu%2F5CKFf%2BKpMMp3nE4xSfr6CEZFXGafmao4IS%2FElqLpWVwqVS1uu1cdbpDQZ51yyIbqRPnXauLtdmSKhs9dSjAJwJDMrkqS7528YXzIjSlOjJlQ%2F%2F%2F%2BtrM2ox0yhH%2BHiRTFXWwoedlzbP6XmZ1Zpo26Ld2ng8Wl9LyOrYRk%2Fqi76mnUen%2FOIOC2PhkJPzRTwlpb4Uy%2B3EnKZj%2BEbnzCJ9OWX1uDmmTbk5Wp2Cx1F%2FiuLa1e9SDYYNMHJ1jG91ktLxE4yvaMJnc9r0GOqUB0JTYaRrariuHNN%2FSnd%2FkOs8VCMXHXXs83HXbg5e1%2FM9Ar42CbNNesryWPC99rClNgoFWQdHPjVRnOKQKcRPwKUkHCrj5w8jr2xq7649f9MUXmTu2BA2rfua8rUUVEQ0M75eNtOc976JH1ewgETXvfJAqFj5lOY8v0zefCNb5nfYYUi4rRFrTvTMJfa7z8dO8UCg2NNapotTOmX1sxAPePMNtK8qD&X-Amz-Signature=7ea830f9ed75217c3322eb7f9b4ed5bc57bce8609560de992303bf688281aa20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQCNNNU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDfxKFXNcH6VC84N5rcCu5WRcKwPZwjQnK0Q6BGb1oZOAiEA0DStho%2BVbC%2B238iy%2F5GWaCfCjEGCtMRack48lGHmJUoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIN0z7qzkB8qesSbVyrcA59JD7jUc%2BxGzX7Q0oDv2otvMdTeTnTXueZGpf8Sgi47ycFiPeDmp25NzuuukgxlPQDgXKgBj0NXF9MMzXL7a1Vb3YVZDziNCqpEqoPd%2BsQD%2FAFQIIl%2BE9vYAPfmkEIFZILHQbUTbzHZv4C1z1B5TtrwUkHAcApxEfcFjOvmvXPNrswoBXZEAn03Hz%2BmQG7V5duZNMkSKV4iYJX9%2Fck2i%2B7x5Kk%2BK2xkP4vQDweyoxEDkvwwevubIPdsim6CqqT3E2EVim0%2FSkNpKtIYQO60r1aOR3kAIWBZiqsiQ3PyP6UMATKI7oQg0R1zo%2Fnw6c4bNZiyIu20mQAcsFkcHIVI4fgfLmre3UykBBUNBssLAAuNCMSiayyPAbf1VjEaJ87rtf0iP4NfoTwB8CEFXjZDG568wFHpL8qUiTfOEFXJ4QSv%2Bf2sje4BWVGvuQ2XE43bK%2B68YIJ0h5OO5Y4oEejzAmjM0kuBx2rIIr11%2BqvWouoAHnQPOTC5btcBTqAIoSN8pMjfg8quq3VV9L2y%2BFj14i%2BWbv84DFuHRhZoIoYieaxQlEgAAbRJCeC5x1QUVK0uOKhvflvSCH%2Bt6jj6ZpF5LSxEaiWrVBUSxA4QkJfW%2F06ET9BCSgPECMd6uzCFMOHb9r0GOqUB6jKbYRx0sDcYTopC89gBFCIGQvBmrHfrpO9ENVVUr8DtG%2B8FoVZ6fKZbaReT%2BPg%2FeOaq%2B1qGzFHY0t%2B105A8ZyXEo8n2lveXuF9%2BjPkXa3SjAhWP%2FPOKgYCsdachOan1M1HVHybwpEJgp%2F04GqcQ7u3aNJGyfx4AOm1gOQEY5L7OLwLm3aTgFv2nAFgvw5dxxbyS%2BfL4hpmBiJX9NW6LeVWA1uV%2F&X-Amz-Signature=8783dfc1cc918da710c41290e7897a5838fa9529daba1363f02d3564d62ca26d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
