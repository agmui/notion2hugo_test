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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDM2GBM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyKWzaXdeE6JcmIUsd2zodJ9nACAimHonv1mlw1FrA5gIhANf%2F%2BtTkGR3NCQhPizpe6Lsru0B8wnYR9p9CRaTrvhhnKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxnFFx%2BXaD6QspPsq3AOreY1QkeqS%2FmKcunlfWYAy0akJ5lUqm5Z0E3uTURp0O%2B48knZ2ct6qK7Eq%2BNILMjJUhFYwhwN8ENhK1R8vB%2Fse7VWK%2FemQfVCMz0L7AcCVJOoXTxBwpHrkI%2BN4yoShuF1MQL3NKwcuwKHRpP3menYu4cZh7GyMhFbPSpLacSmDOFEr0UKCJg%2B2H%2FR3XZ35O0akMPqQjZ6UXWk9eE2gLxSix%2BfaiUGqY3%2BUC6T7FExGUfhOKK9BtsWmaQw7hkP9%2B83xr%2BM80wlgWxaYq0CaNQYdv1%2FFuEgwQQ9V%2B4taLdzW888YPw1hqjD2R0LLq26k%2FiPQdomVwCDZYFvgU2r%2Bh3oUrjCiHcthFlntsmnTMZVzfvqkQMLtSuO%2F617fGxxtMFOMdUrWPEIp1TIxxpLkKZnB8Sju%2Bh%2FrDXqv3jevI6AyI%2BIhTGHbluQCRtLwEpio8JWSlUXr3YunnVDWLXv7wgzhZABygh%2F0WYasvcCyXH8JiVClkhzPhwrqYgjxFPQUDhIU44KgBiBZ%2FZn%2F0xqeXKoYp9Cpy%2FWv8i6UPBX9RGm9mZvXrXl037NL6d5TozxPrciodjMqE7rJH5q3N4XI9y5UTrquCTw2JilL2hbXLTyeJyRuxI%2FVNoGBsDonDzDTsuHBBjqkAdkPVxm103%2B1Me2lFTvgPuKnKS0R5bVzubHw9OzCgz2eE7mEZPuJpPnS%2BxEwZQJCNcXTZjCkdR2al3TCUfqH2SImWuTq4gltVvPT6q55Q8AEoa7VpVs5q94EW9EGTrnHYXxpu0xbI%2B%2FM3uKVmrvzk22VRrc61eLEl6L5vi3AkJhwA4HKZbA2dhOxF4iBuoTsXe8olZJgNidswltT1LfMIEbmNooh&X-Amz-Signature=3f53bfa6ee5844fe874025d76adc80cfae01b13ea5c0048a9afd5ed7f2d53510&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDM2GBM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyKWzaXdeE6JcmIUsd2zodJ9nACAimHonv1mlw1FrA5gIhANf%2F%2BtTkGR3NCQhPizpe6Lsru0B8wnYR9p9CRaTrvhhnKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxnFFx%2BXaD6QspPsq3AOreY1QkeqS%2FmKcunlfWYAy0akJ5lUqm5Z0E3uTURp0O%2B48knZ2ct6qK7Eq%2BNILMjJUhFYwhwN8ENhK1R8vB%2Fse7VWK%2FemQfVCMz0L7AcCVJOoXTxBwpHrkI%2BN4yoShuF1MQL3NKwcuwKHRpP3menYu4cZh7GyMhFbPSpLacSmDOFEr0UKCJg%2B2H%2FR3XZ35O0akMPqQjZ6UXWk9eE2gLxSix%2BfaiUGqY3%2BUC6T7FExGUfhOKK9BtsWmaQw7hkP9%2B83xr%2BM80wlgWxaYq0CaNQYdv1%2FFuEgwQQ9V%2B4taLdzW888YPw1hqjD2R0LLq26k%2FiPQdomVwCDZYFvgU2r%2Bh3oUrjCiHcthFlntsmnTMZVzfvqkQMLtSuO%2F617fGxxtMFOMdUrWPEIp1TIxxpLkKZnB8Sju%2Bh%2FrDXqv3jevI6AyI%2BIhTGHbluQCRtLwEpio8JWSlUXr3YunnVDWLXv7wgzhZABygh%2F0WYasvcCyXH8JiVClkhzPhwrqYgjxFPQUDhIU44KgBiBZ%2FZn%2F0xqeXKoYp9Cpy%2FWv8i6UPBX9RGm9mZvXrXl037NL6d5TozxPrciodjMqE7rJH5q3N4XI9y5UTrquCTw2JilL2hbXLTyeJyRuxI%2FVNoGBsDonDzDTsuHBBjqkAdkPVxm103%2B1Me2lFTvgPuKnKS0R5bVzubHw9OzCgz2eE7mEZPuJpPnS%2BxEwZQJCNcXTZjCkdR2al3TCUfqH2SImWuTq4gltVvPT6q55Q8AEoa7VpVs5q94EW9EGTrnHYXxpu0xbI%2B%2FM3uKVmrvzk22VRrc61eLEl6L5vi3AkJhwA4HKZbA2dhOxF4iBuoTsXe8olZJgNidswltT1LfMIEbmNooh&X-Amz-Signature=898a6aade5ae693631496ee1033abca2e23d44d250fe3999ea34c67c5b5e0479&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDM2GBM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyKWzaXdeE6JcmIUsd2zodJ9nACAimHonv1mlw1FrA5gIhANf%2F%2BtTkGR3NCQhPizpe6Lsru0B8wnYR9p9CRaTrvhhnKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxnFFx%2BXaD6QspPsq3AOreY1QkeqS%2FmKcunlfWYAy0akJ5lUqm5Z0E3uTURp0O%2B48knZ2ct6qK7Eq%2BNILMjJUhFYwhwN8ENhK1R8vB%2Fse7VWK%2FemQfVCMz0L7AcCVJOoXTxBwpHrkI%2BN4yoShuF1MQL3NKwcuwKHRpP3menYu4cZh7GyMhFbPSpLacSmDOFEr0UKCJg%2B2H%2FR3XZ35O0akMPqQjZ6UXWk9eE2gLxSix%2BfaiUGqY3%2BUC6T7FExGUfhOKK9BtsWmaQw7hkP9%2B83xr%2BM80wlgWxaYq0CaNQYdv1%2FFuEgwQQ9V%2B4taLdzW888YPw1hqjD2R0LLq26k%2FiPQdomVwCDZYFvgU2r%2Bh3oUrjCiHcthFlntsmnTMZVzfvqkQMLtSuO%2F617fGxxtMFOMdUrWPEIp1TIxxpLkKZnB8Sju%2Bh%2FrDXqv3jevI6AyI%2BIhTGHbluQCRtLwEpio8JWSlUXr3YunnVDWLXv7wgzhZABygh%2F0WYasvcCyXH8JiVClkhzPhwrqYgjxFPQUDhIU44KgBiBZ%2FZn%2F0xqeXKoYp9Cpy%2FWv8i6UPBX9RGm9mZvXrXl037NL6d5TozxPrciodjMqE7rJH5q3N4XI9y5UTrquCTw2JilL2hbXLTyeJyRuxI%2FVNoGBsDonDzDTsuHBBjqkAdkPVxm103%2B1Me2lFTvgPuKnKS0R5bVzubHw9OzCgz2eE7mEZPuJpPnS%2BxEwZQJCNcXTZjCkdR2al3TCUfqH2SImWuTq4gltVvPT6q55Q8AEoa7VpVs5q94EW9EGTrnHYXxpu0xbI%2B%2FM3uKVmrvzk22VRrc61eLEl6L5vi3AkJhwA4HKZbA2dhOxF4iBuoTsXe8olZJgNidswltT1LfMIEbmNooh&X-Amz-Signature=fd59510d27e4ecc6fa739ededbb940555a08afb5f0c5058c3f91fc7f7b48684c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JASLRJT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHanotXOcH96mqkBe1sMWJLQi4MQb%2BoFjtDevR3WWowAiEAjIudwa2yu7fFHt8EUN9Ow5%2Bd6IzKlRLqcQyf4muInkEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX4nWLYJstmxBcn%2BSrcA7iHPuOWgFjTmwOSpEa5JwssDj3lsKAeIlp%2B0CGjnNIV8Py2ABvnt7UqdzhqdpoXelPLf1XPe1OP3Tuo3fskdBD6thCWmpm2uZ%2FmRtO%2BtVTIi1mPbBZUhs62GOiwxuLOQ0puOBLTgn6xiv1WI78kD5bw%2BdmlwbnNP4Wfle3M8O9obWViz8wYNQRDpJ5G%2FAErP00kMZIfa4PwABvQIiXNj6j89e6ng%2FJrts7D1ocq7s4QYML2lSLqYGFZsg90fZfLfhqQtedBm0dM7n%2B72WhLUUjqNSIuoSL6yK2QXNRk2vcrPqIvqHIizp2qq5dC6h%2FVllVD91p4yZQVDLOilvx0p5cAan%2FYhiDkayztwF%2BRjZ88FOwkXvLzL0qPn%2F6%2F6D7fcJslaCJZHS7g1ZXuEUN16S%2FA5EJsVPTlnfZRsTAnMzdFzuwWuwEZpwjFFVy6zbeX0crWSd00wu03NG3uC1RYbf02b3R7yPiit0tUIJQroKYD%2FkeaAieGMGs1ZMbtjDDzQAmS7wa6VJokOCEBRSJuLiNkpWMF0QWZECZ5GvulLPdEr7QUDQGTg7M4IL%2Fn6P0%2FtepaWrDVi%2B5wssnXqM2LLQ6QvUvb%2Fe8Oy7%2B1jRQ8e%2FOwQdfKXRfux%2Bs2qQhhMP6x4cEGOqUBhuBLDF1iiSgBBUfEsQY1fwGSH5N%2FEqudXzT55o%2BJkD61X6jlZdtuMhZdV9TJfeJGMa9cRplpTg2vYRRdQmmGm%2F8Tnqk5c8CLaIK1IlkqtDgl58UcgaSuBfVRkcRhmod9cge%2BxHTgTxOJKCr6F28UuzksSbKQqzVog1nCnDcP6kQAJ87FM4wRjHNAiO6zLf2SQyM3X07wyzjDaI3j%2Bg5yo4MsY3TZ&X-Amz-Signature=c074a90879e0758468198d9411aa60dbf50ba9e678b20bcd324065b62b3b776d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXU26UGS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoLh8j%2BsrkyEkZCo39Oq%2FY1MIlYP4uytJ2kySDHHPOUwIhANynujm5oUDq0mkqwX0Q1hE9KiPEYnm9gWk5mu1HF6W0KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5w9hGNiFdjUEOGocq3AO%2FU87sLd70cUmaP3Vwkr7H77XBzVhSaDeeCPxjx73GLmO1oWLhU%2F%2BpMb1TC6tjdm2NknQ%2FKlfEk2L%2FHn349iJ66tVnjUcQ5cz%2FbRXN4yvrdE1D6%2BxD9Jgc4DicpMaZGcy1fNNXxjmi0V5QFYK7ulx6w6KbSN4TOc41iOc%2FadWEupvigz8TAWkBXDiw3DZoGA%2F7E9ITdviPDPuTPt7VYtwTXBAxd8CbczV%2BN0tvYcgeC7AKR26rIKgK%2Fdv8bw4ZzzoUzbQHU6HhaJH3Vn7d0%2Fesg5hwbs4EAe26iRSCpQByPjgrDnBh9JB9E2Ea%2FAIyJqLSlCpjfw%2BlPJoZazjziySfNkceYuS8fMkBcdbSDM1hRbuSt8ZLa%2BDoZkXBokMHUr0xfxxoefcrfSuYe1CfQ4wCuqYCdmMP6f3K0sh1T7Y6TRu1KKF8oQu%2FJu%2F6R7PVCnCphu8Qfodmkrh51tXh38XpCTOmN6Eq6zv2avrtkrgHcnIcqCTKBAu671WYYkBEn66B62Kh62bBJbLaN%2BnsZ3d%2B%2F%2BT49lOEJG%2FAXSkqsg1Gju9%2Btyb4oBWEaLsuqwMp1KRlJ0khozQnWc%2BOy1rg74gFvj4PwgOsci2xPCb6gjt%2FEKq7KxXeLkbRD8yBizC2suHBBjqkAQ6LKHYtrISWQKqcSaKxEFr6tY9pb9U5XzAI0aqJJ775KE4nGNU%2FKe5AD3YOVuQW1kz5ecf%2FnWXbxH718PCZVnwnUC9N8XCVCu6Fj7zhTN7SLSznd%2Bx8qOUBk%2FSUqtaSfZjdmGChC2YIwl15Sg6igZeYIepD68vpyOVZZR1muI1j1nbyxG5%2BAN2yWYc%2FYd2QyxkOvpqecXrGJAn0YiKtG2GmMzve&X-Amz-Signature=fbe8356731d170c64e81538e1c83427d5f83ff8777d16556e947602f6e22b0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDM2GBM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyKWzaXdeE6JcmIUsd2zodJ9nACAimHonv1mlw1FrA5gIhANf%2F%2BtTkGR3NCQhPizpe6Lsru0B8wnYR9p9CRaTrvhhnKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxnFFx%2BXaD6QspPsq3AOreY1QkeqS%2FmKcunlfWYAy0akJ5lUqm5Z0E3uTURp0O%2B48knZ2ct6qK7Eq%2BNILMjJUhFYwhwN8ENhK1R8vB%2Fse7VWK%2FemQfVCMz0L7AcCVJOoXTxBwpHrkI%2BN4yoShuF1MQL3NKwcuwKHRpP3menYu4cZh7GyMhFbPSpLacSmDOFEr0UKCJg%2B2H%2FR3XZ35O0akMPqQjZ6UXWk9eE2gLxSix%2BfaiUGqY3%2BUC6T7FExGUfhOKK9BtsWmaQw7hkP9%2B83xr%2BM80wlgWxaYq0CaNQYdv1%2FFuEgwQQ9V%2B4taLdzW888YPw1hqjD2R0LLq26k%2FiPQdomVwCDZYFvgU2r%2Bh3oUrjCiHcthFlntsmnTMZVzfvqkQMLtSuO%2F617fGxxtMFOMdUrWPEIp1TIxxpLkKZnB8Sju%2Bh%2FrDXqv3jevI6AyI%2BIhTGHbluQCRtLwEpio8JWSlUXr3YunnVDWLXv7wgzhZABygh%2F0WYasvcCyXH8JiVClkhzPhwrqYgjxFPQUDhIU44KgBiBZ%2FZn%2F0xqeXKoYp9Cpy%2FWv8i6UPBX9RGm9mZvXrXl037NL6d5TozxPrciodjMqE7rJH5q3N4XI9y5UTrquCTw2JilL2hbXLTyeJyRuxI%2FVNoGBsDonDzDTsuHBBjqkAdkPVxm103%2B1Me2lFTvgPuKnKS0R5bVzubHw9OzCgz2eE7mEZPuJpPnS%2BxEwZQJCNcXTZjCkdR2al3TCUfqH2SImWuTq4gltVvPT6q55Q8AEoa7VpVs5q94EW9EGTrnHYXxpu0xbI%2B%2FM3uKVmrvzk22VRrc61eLEl6L5vi3AkJhwA4HKZbA2dhOxF4iBuoTsXe8olZJgNidswltT1LfMIEbmNooh&X-Amz-Signature=6221f820d1c377d8be1f7b5dc3af5214f85622c507df8d32aae72c0dc9809fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
