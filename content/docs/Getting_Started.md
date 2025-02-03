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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RGUVZOL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXqKcMN15gU8VEqBRq9XcU20Hrv0Pv6kH%2FU96vP%2B72kgIga8TTuzTRp2tIYDS1ctb04M9xB4AXHy9pjy19SjX4TbAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJc2svMs5IlK0aDOdCrcAwMHcgaEYGitAPwbTLRXdkhLrtuFMuWhVQnBJjIpp5wiXTOv5AjHAT9u80Pk9WcLiuVtr2hOt%2FYCQ%2FaQ4tp%2FCJX7gS5lDGK%2FBvCjx1JHKsqIimfHbhZTBZw4gLhd%2F2HgpWIFnt8fYmY249AIqJR1jVUOwpuKiWZT4QhSoN4dSPaHwsRumXC6YiYYWYDB5pXdvXKUzUSOUMMaP%2BODn71kjxXpKNh%2FXQwW8%2FX3gZ0nT1ji1cYObzYq7mEIcmplBWaoRUr4FqeOmtPrCrATQEpMyKpoY5SM9uhFeygNR1Wmiqb5s5VEciNPtoUUTm7b8YjYLR8zxGmQj7W5OPh1vGxx6AcUYmkw4ZuMjxtrIjBFhlouCbbefhRQoqvboQkNgqYwYZ3%2FBv2Y8teRZLOIdQL6B5YPILpYnhZhzp839hkIEfMbdNionzVg76SHTWphV61iLkeAkpxZTlgw1yDelwzQyBImw94GYBUYItzFnzRsNRa46XV%2B5XJPTe72Ydr9GShVaB5Ibm9oeYIXkAvfxATP78uPjnTU5f9B1pOQ7Yi%2BHHfIGC%2FWWy4lZfIOt1TM4DiwKXasUVXVHHiuOkKIkJOI5C%2Fo3tEXLyvUQeHR3kEHf35YZCtjQiCJ1Izk0xj7MKvYgb0GOqUBI098MLl3T3a4Kyu3XPEnHNZSkOylvFep%2BTcUg3vHtYCoJfdv%2Ba4jop2l1kBEsD6pcqtGBaJz4Z46gCaHUlIKxKQOaa94%2FE8bSUl04ppPzIus1Lk4PaZ62vdCUNTjX7fQlv2M92%2FMs5ZpWg5It24yZtKGy%2FBQSywjl24aA5dC%2Fvvc1dGAxRa0X96xQOCdfKAWKXSKBEX9ytzMc9quvUb%2Bk4rj5AGX&X-Amz-Signature=4d564109e37e8f400681203ed193d228f48d949bffb7754dc1c15ca8a37989c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RGUVZOL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXqKcMN15gU8VEqBRq9XcU20Hrv0Pv6kH%2FU96vP%2B72kgIga8TTuzTRp2tIYDS1ctb04M9xB4AXHy9pjy19SjX4TbAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJc2svMs5IlK0aDOdCrcAwMHcgaEYGitAPwbTLRXdkhLrtuFMuWhVQnBJjIpp5wiXTOv5AjHAT9u80Pk9WcLiuVtr2hOt%2FYCQ%2FaQ4tp%2FCJX7gS5lDGK%2FBvCjx1JHKsqIimfHbhZTBZw4gLhd%2F2HgpWIFnt8fYmY249AIqJR1jVUOwpuKiWZT4QhSoN4dSPaHwsRumXC6YiYYWYDB5pXdvXKUzUSOUMMaP%2BODn71kjxXpKNh%2FXQwW8%2FX3gZ0nT1ji1cYObzYq7mEIcmplBWaoRUr4FqeOmtPrCrATQEpMyKpoY5SM9uhFeygNR1Wmiqb5s5VEciNPtoUUTm7b8YjYLR8zxGmQj7W5OPh1vGxx6AcUYmkw4ZuMjxtrIjBFhlouCbbefhRQoqvboQkNgqYwYZ3%2FBv2Y8teRZLOIdQL6B5YPILpYnhZhzp839hkIEfMbdNionzVg76SHTWphV61iLkeAkpxZTlgw1yDelwzQyBImw94GYBUYItzFnzRsNRa46XV%2B5XJPTe72Ydr9GShVaB5Ibm9oeYIXkAvfxATP78uPjnTU5f9B1pOQ7Yi%2BHHfIGC%2FWWy4lZfIOt1TM4DiwKXasUVXVHHiuOkKIkJOI5C%2Fo3tEXLyvUQeHR3kEHf35YZCtjQiCJ1Izk0xj7MKvYgb0GOqUBI098MLl3T3a4Kyu3XPEnHNZSkOylvFep%2BTcUg3vHtYCoJfdv%2Ba4jop2l1kBEsD6pcqtGBaJz4Z46gCaHUlIKxKQOaa94%2FE8bSUl04ppPzIus1Lk4PaZ62vdCUNTjX7fQlv2M92%2FMs5ZpWg5It24yZtKGy%2FBQSywjl24aA5dC%2Fvvc1dGAxRa0X96xQOCdfKAWKXSKBEX9ytzMc9quvUb%2Bk4rj5AGX&X-Amz-Signature=e833ef88baf725d405bea67be350dc7134c95dfd4480595dc9763d3ca140a633&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVWY7CU%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1TGLJaUzFdYzBj04rYrlndTmr9jfI1oRAPvqixa7BgAiAcibpB07Cdanz2RsL%2Bi2jqbsqedFQDKkwqLTrSuU2%2B3ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxyqFqAku2Jmz6IfeKtwDrfXCEeXrA6fM3OLeOM2Wg%2BtQUBGg5fvlCs3ieULoWwD958xt%2Bk%2FS4ZliLpp6SZRncZZ%2FIFg676MunEM%2FFObXct0LJyrtgvdY6ZLZRWUZY1N6iuWD73Y6O7wLi%2Bc3%2FKOdqWV56ArxwO6C0gNASjTpgjxaxDCvpCDvg5b7ZkIkbca0AmcNWb4R7g%2Ff%2F%2BWjY6u77CoEdq6r6Z9j6CGTT%2FDPBvi9qkZMxCmCwHPGRL3VQh0o8jTNf3Fg8cxmCKzZ1aKmfqxrpdRlpeHm254bxP1HzX7Z3KaI%2FtBWyIXdsQ%2FC1DsqG6sHGe6hkighGrINPfw2I6wngwyoLQzxixdp8wUuQOrG%2B%2Fhe1%2FOZ68CyfRE0WHEhossarP2WcFBGLvHuprSTQEGODO%2BwkYdNg%2BLx7potLUCnZz0YyHfEGg5d0HbydTpGEO%2FjoPSUfdkw0UXNUyV47Cl6WmtIWmlwlUf16QkAlxf2jG6LcN6qN7W1G4LlS1hXjA3yzF9fW5aSnmx6n1yFqym3DICA1XZns9NK58qDJ3knj8hiDZeiULyAGB6wnFZ7hp8RvJaxeARCxTquD2m4ikhERTG%2FTYG%2BYUI2NIvxE%2FeBiNbenlNG28fyDOgwM0MwO3SXScnCJZrPYoAwttiBvQY6pgHjIfC21XdcU6oQRE2lmDB0sHZfZWDfS8jQ4L3See1TmaA8Xpo9eAG8Yv%2FuDgWSzPVVmHB0HSS%2FM5BTstwEJzUhMEyMXP4KHDTigd0HNLVGSijN%2BOp2aILgYfaenlmOF2sXf3q6WvgHHxQ3EoPrgIPG918YjytfNScUkjmg1zAPEL3M6zOS6KOp3WuBjo7%2FmfkRZKyvraeJSUimL%2FvEitJJwd1Rmfxd&X-Amz-Signature=bc810535f1f97ace43ec67f2a4fe5e6a1bf2997e80a15b2ca37004bced666f71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBUH4MQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdvyFH7dS9PFp3ZtB0Do7zkcImbl%2BwN%2FA2k02aUi%2FjkgIhAOLl37de%2FhCmzOohuu9LmZC454hm%2BkYzYWjpYvA96oERKv8DCBAQABoMNjM3NDIzMTgzODA1Igxy12Uk7qT3lxDC2A0q3AMDpQ71GA%2B8bBug%2BSaM%2BJP5rKUU7kAOF%2F%2F2l5EU1yzncr%2BkO3n10VdN1HsfAQ4rmic3akqxdA80JaaBWVlVTn09ZbswLEpoaZav8c6omfwFRb6iI%2BCi2jZYH17pUVdn03d0iKmTvKqKVOI5sIC1MGl8lmf8xW625cuYoGDTlfiNhi%2FHJb5%2BlDfIhNAXM%2Bml8jXp9qNItpQrLcNOjS54pa6f18CxZJFX9yczGsHX0AzSkDQ%2FVbjEc4wk0K6uRPK2yfiCWsG4mgqCU4iYxtbCUBYjs2wN1KkOeKSAl7S%2FcvuXV0tTALq1%2B%2F6BPNitG%2Bql6sKKKLYTsnfMz5WYz1Ceu6wILKxfUJPqSyiErorT60HX3z%2BGgLQ4AaLMliVOY0CxQhT9M%2BngX6nQzbV1JV2lIqOjq1M9g9iDJra108C5TqFabL6CP5yTpvH3HmLDukxG2my%2FjOnTSE6el8gW39vA%2F%2BQvy07l9z2EXYKSn7Ye6JsnZ2w%2F5%2Febx4P1F0AL%2FodmVXqCjP2tu68AnFFeYTDBiE9Ezr4RsLC9RDWiPEPKilv9HF%2FBB5o0z%2FucnekTooWsl8kviBWw2FJJQe54yIzjhkHzBgxbblFI4sr8%2FpooYHP%2FliIWY71Znqm%2BvPZIbTCe2IG9BjqkAb5OPhoVIm2sLRLIEgmmWENjwTM1ps%2BHzXudZTmmnP9DO2070130%2BYuWnKIz1KGJmf2XC4%2BX5SxmA0MMQRRZB%2BIzwQJR1UPA0GfjZm85bMO3WJyDg4ertZiaseKwbyXbtpByorNnZAT0LtVVEkUYBChgflA%2BsCSptPuUHxrKKANOCDF21k6vFTt%2BVM51otFFl6K40R4E%2B0xnUlP4IhnKrrgIbu9S&X-Amz-Signature=ae19a6bfb7b02669e84ee54ae7e489f19135a6cd1baeb3a4043f6afe5fccc1bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RGUVZOL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXqKcMN15gU8VEqBRq9XcU20Hrv0Pv6kH%2FU96vP%2B72kgIga8TTuzTRp2tIYDS1ctb04M9xB4AXHy9pjy19SjX4TbAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJc2svMs5IlK0aDOdCrcAwMHcgaEYGitAPwbTLRXdkhLrtuFMuWhVQnBJjIpp5wiXTOv5AjHAT9u80Pk9WcLiuVtr2hOt%2FYCQ%2FaQ4tp%2FCJX7gS5lDGK%2FBvCjx1JHKsqIimfHbhZTBZw4gLhd%2F2HgpWIFnt8fYmY249AIqJR1jVUOwpuKiWZT4QhSoN4dSPaHwsRumXC6YiYYWYDB5pXdvXKUzUSOUMMaP%2BODn71kjxXpKNh%2FXQwW8%2FX3gZ0nT1ji1cYObzYq7mEIcmplBWaoRUr4FqeOmtPrCrATQEpMyKpoY5SM9uhFeygNR1Wmiqb5s5VEciNPtoUUTm7b8YjYLR8zxGmQj7W5OPh1vGxx6AcUYmkw4ZuMjxtrIjBFhlouCbbefhRQoqvboQkNgqYwYZ3%2FBv2Y8teRZLOIdQL6B5YPILpYnhZhzp839hkIEfMbdNionzVg76SHTWphV61iLkeAkpxZTlgw1yDelwzQyBImw94GYBUYItzFnzRsNRa46XV%2B5XJPTe72Ydr9GShVaB5Ibm9oeYIXkAvfxATP78uPjnTU5f9B1pOQ7Yi%2BHHfIGC%2FWWy4lZfIOt1TM4DiwKXasUVXVHHiuOkKIkJOI5C%2Fo3tEXLyvUQeHR3kEHf35YZCtjQiCJ1Izk0xj7MKvYgb0GOqUBI098MLl3T3a4Kyu3XPEnHNZSkOylvFep%2BTcUg3vHtYCoJfdv%2Ba4jop2l1kBEsD6pcqtGBaJz4Z46gCaHUlIKxKQOaa94%2FE8bSUl04ppPzIus1Lk4PaZ62vdCUNTjX7fQlv2M92%2FMs5ZpWg5It24yZtKGy%2FBQSywjl24aA5dC%2Fvvc1dGAxRa0X96xQOCdfKAWKXSKBEX9ytzMc9quvUb%2Bk4rj5AGX&X-Amz-Signature=724f6693eb57855474ff446fdcdc0e2e865ac01e06715f4c170021977e5138db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
