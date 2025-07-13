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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXD2XB5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBR3IWgtrpKqmUyctYj6I6eL%2BKEXey7Wn7YLlGJbLaHqAiEAg9UC3kRLXt4lG07KByyFRx5BAOQM%2BQKP2ZLt%2FDKzKegq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJMYrQGJeU2Vw4gMnSrcAwPoTPY7jIWHaYa7i1GimxeVxg523LMEbMXJ7mA48PueXqC7MDFZPW7RvAzacImFQDOmVLzXZSSDoyeKM9BxbywGfwhl4pc0kO3zCa%2FBaJX2ONTBXRXtF9EVkBT2s%2BTHUsmUa1sTKGgQATnN0umBkyllu%2FUH6TCqMLKznNlQY3O2JvjZCaKkVUSJMSqI1uFiFORD66ZImEp4wWr%2BaWr3ZPauUoJ%2F2BtmEls5SMvrfnQyUL0r7Hu05M%2BgJy9%2FaK6DtAxCJ8M1Rx1yB5tvystRTbmJQf8X148Out6odR9WDCQ%2BrkfLc2MzmA0G7UYBFVJE0usasFyhNB6YNfDBeaKTrYM%2By2fuJoa97R8jWvVEXBYFiFVoO4moWqctbyIWKlZcIfCdeZWAF7m6kZkv9fd7YAD0vWxtgG1Z7Ok%2B5RRsfHom7CQzmvLN7x7zlXe%2FZi91JdoaisuuhwGE1lCod%2BWDiu9TSJwIH%2BbDYmOmzenXY%2B7o9Bu5YWxixRXtyk0fjXf7bYb581wpp0LC1zX4CTP%2FrmSyodL8pPUmsSgPlHTQ2wdXiVOGW95GDs2rgZsu9o%2Bx2aJv5z0p2hpHohw%2FY2zfi3PyPOLznQ6e9b79tJfKoWyndfuTHgcFWTr9IhcrMOLI0MMGOqUBvVL8Jc2M%2BZWeBZ%2B5MDKvN6wuZhguaZOKiReMePxmUUOo%2FyWRJm6SAO7O1XQhceW8xhpgs27POCide8j6FzFwb%2Bbqye38xOFqDT6qwR%2FnFP9I0JVkVPvWBsPWi94BJPFGkH1%2Fxfmksjqp6i7NXj19n%2BNXqDJOEAQkC%2FNKHB%2F3Sga1CwA71GAojul6DYbASoFSJN6q3%2BovqCn0kDGE7jxlvtHnSzag&X-Amz-Signature=b0c9218b4a1775c7eb90bd4be3ff1abeea0e52ddd29412f7bca88853700ff379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXD2XB5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBR3IWgtrpKqmUyctYj6I6eL%2BKEXey7Wn7YLlGJbLaHqAiEAg9UC3kRLXt4lG07KByyFRx5BAOQM%2BQKP2ZLt%2FDKzKegq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJMYrQGJeU2Vw4gMnSrcAwPoTPY7jIWHaYa7i1GimxeVxg523LMEbMXJ7mA48PueXqC7MDFZPW7RvAzacImFQDOmVLzXZSSDoyeKM9BxbywGfwhl4pc0kO3zCa%2FBaJX2ONTBXRXtF9EVkBT2s%2BTHUsmUa1sTKGgQATnN0umBkyllu%2FUH6TCqMLKznNlQY3O2JvjZCaKkVUSJMSqI1uFiFORD66ZImEp4wWr%2BaWr3ZPauUoJ%2F2BtmEls5SMvrfnQyUL0r7Hu05M%2BgJy9%2FaK6DtAxCJ8M1Rx1yB5tvystRTbmJQf8X148Out6odR9WDCQ%2BrkfLc2MzmA0G7UYBFVJE0usasFyhNB6YNfDBeaKTrYM%2By2fuJoa97R8jWvVEXBYFiFVoO4moWqctbyIWKlZcIfCdeZWAF7m6kZkv9fd7YAD0vWxtgG1Z7Ok%2B5RRsfHom7CQzmvLN7x7zlXe%2FZi91JdoaisuuhwGE1lCod%2BWDiu9TSJwIH%2BbDYmOmzenXY%2B7o9Bu5YWxixRXtyk0fjXf7bYb581wpp0LC1zX4CTP%2FrmSyodL8pPUmsSgPlHTQ2wdXiVOGW95GDs2rgZsu9o%2Bx2aJv5z0p2hpHohw%2FY2zfi3PyPOLznQ6e9b79tJfKoWyndfuTHgcFWTr9IhcrMOLI0MMGOqUBvVL8Jc2M%2BZWeBZ%2B5MDKvN6wuZhguaZOKiReMePxmUUOo%2FyWRJm6SAO7O1XQhceW8xhpgs27POCide8j6FzFwb%2Bbqye38xOFqDT6qwR%2FnFP9I0JVkVPvWBsPWi94BJPFGkH1%2Fxfmksjqp6i7NXj19n%2BNXqDJOEAQkC%2FNKHB%2F3Sga1CwA71GAojul6DYbASoFSJN6q3%2BovqCn0kDGE7jxlvtHnSzag&X-Amz-Signature=4f8f5ea463912657dca1b2586175aa985ebfe194d3369c83d5e6a73242cd834c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXD2XB5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBR3IWgtrpKqmUyctYj6I6eL%2BKEXey7Wn7YLlGJbLaHqAiEAg9UC3kRLXt4lG07KByyFRx5BAOQM%2BQKP2ZLt%2FDKzKegq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJMYrQGJeU2Vw4gMnSrcAwPoTPY7jIWHaYa7i1GimxeVxg523LMEbMXJ7mA48PueXqC7MDFZPW7RvAzacImFQDOmVLzXZSSDoyeKM9BxbywGfwhl4pc0kO3zCa%2FBaJX2ONTBXRXtF9EVkBT2s%2BTHUsmUa1sTKGgQATnN0umBkyllu%2FUH6TCqMLKznNlQY3O2JvjZCaKkVUSJMSqI1uFiFORD66ZImEp4wWr%2BaWr3ZPauUoJ%2F2BtmEls5SMvrfnQyUL0r7Hu05M%2BgJy9%2FaK6DtAxCJ8M1Rx1yB5tvystRTbmJQf8X148Out6odR9WDCQ%2BrkfLc2MzmA0G7UYBFVJE0usasFyhNB6YNfDBeaKTrYM%2By2fuJoa97R8jWvVEXBYFiFVoO4moWqctbyIWKlZcIfCdeZWAF7m6kZkv9fd7YAD0vWxtgG1Z7Ok%2B5RRsfHom7CQzmvLN7x7zlXe%2FZi91JdoaisuuhwGE1lCod%2BWDiu9TSJwIH%2BbDYmOmzenXY%2B7o9Bu5YWxixRXtyk0fjXf7bYb581wpp0LC1zX4CTP%2FrmSyodL8pPUmsSgPlHTQ2wdXiVOGW95GDs2rgZsu9o%2Bx2aJv5z0p2hpHohw%2FY2zfi3PyPOLznQ6e9b79tJfKoWyndfuTHgcFWTr9IhcrMOLI0MMGOqUBvVL8Jc2M%2BZWeBZ%2B5MDKvN6wuZhguaZOKiReMePxmUUOo%2FyWRJm6SAO7O1XQhceW8xhpgs27POCide8j6FzFwb%2Bbqye38xOFqDT6qwR%2FnFP9I0JVkVPvWBsPWi94BJPFGkH1%2Fxfmksjqp6i7NXj19n%2BNXqDJOEAQkC%2FNKHB%2F3Sga1CwA71GAojul6DYbASoFSJN6q3%2BovqCn0kDGE7jxlvtHnSzag&X-Amz-Signature=a6370b7a9665e3d7958f803ec3be0f20103c0bf5edd71ddbc0ef5a95a9565300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBON3YK%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIECayvwWgGJjLC0v7B4YId6Nb0RUmwS5Z4YusEQKdCWNAiEA0YWTpWmo7xZ3BqZKvFANVrHryWtzn%2FU1uaBU4s3Ox4Eq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMhlMt4Qn9qx19vxHCrcA%2F1exHh3MTD3pZZ00wnJAVWZfoDUm%2B0me7AZcUh6D7BQH3iK9h1vp%2BRW5n%2BSYbD6Z6mGLeuY3F2JlBj0oGzwBn1LujEKdlQTNdMuXPTO%2B3DWuPgQXbOCTzEwyrStWiZbivll0NSQX4zvJgjjB8Fd9suMh4y2zJhz0ITh%2F3yqzJvzN4uQEiWS0%2BZakI%2BBrstApZUwgKI8QVGsyJXzicSrn1Y47R2nLWhnLCB4f2Bf4nDL166807Xny1%2Fkg4YlBa4xqrDD5jxZvC3LQ7saDVlWS5c8Jrk8gynzLEsCXrrtJ0MaCY3LaMhIh%2BmMC%2FYvXbJUa4g13gxtcqGB7rm2cfpG%2FrIQhSCzQV19Ja1hcJT0FyGUaPqVLqU4pRa%2BegARK%2BjAW%2BKMm45qwx3FnkjEYzx7ScmuSfduw%2B9pNw8XgYq1Rukt%2FegyG%2BAd4i%2FPpsI8eJ9T8seiynukjoy5XNMuKyD2YSjBePemmmeWBRMjDMBiu6veKpPN7o68MX10pNoH5ysG82evxvSN7yYJ%2FflkqZnrgicZfb7JwMEdjxnffDH4OF4amXbUVx95nXeMKUPssPxQ0XlzOWOeAoV6pwh919pIc%2BaxvIY70Az%2FD%2F1F4qhdd4jfugsX1s9kOxaznnSCMLfI0MMGOqUBXEJPMdFBUusEGaMtlzxgAcIEDYUqk5qrS%2BeBegR%2BGEZeZ7bFBH5mPLF%2Fht5WCtqX87bJ4ukM1XpYPtt9M8CoNyMdn8RjQ8IEW0do8T16OLRFXCI9p9e%2FJhRW0hW1MxBpaqUnX7jTmD9f8AAZToM4LdKPItRVqWIl5bz6zfcekjpePRjOGDYyPmnq0hbYaqJwYTm1NJwDCfq7iLYupTDYWe2sbHCv&X-Amz-Signature=55785909dbf91b09f81c04fce99d567bf337c03539d862674a8a962703c94c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSF6CKMB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGdFwUMqLGNYQIZt8bLZudiZ3sGgLyAy61HChRuNU2LmAiAqnkzqSxJuKk7jf5OxKZqs%2B1U0eRj0CnSuoRhFXIs49yr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQiC9eEj%2FY0YmOMjlKtwDjn2KhL4KCVkArMNsIj4kQgIFL3ZlrtxuecgI5wjAKReHvqpofV0bTHNlkti98eKAY46ZTKF5Qu0gjRQh6xQ1iiGGix5RZGpdLiQMiCWl18FLr034bALc1pEsTjiwP%2FZ%2BjEyaz30MEhn3EUAk%2BwkY8A6NoKj23lSYdaeM%2F%2Foy2NhP0uJZC%2Fp4qCzMZbMkr3ZmqLDTdoEfplBfsaDGwyYIuBzDVfFtsmFWcf%2FrEW6BxbsyITV%2BaQUY5SAEOy9VY0KpFRvF8n5Cm0hsrZO2%2Btm5c3lpQL8VkC7Zz4bIWRxKacyVYjyIWr7yk7%2B03Anr7Cct6627oe4NiiCIlp%2FR%2BCZTrMVRw4YU%2FK6sx4620kHWuvHM4JvHnKuV7joZb3Afsvw5bkQnCKfi5OK8oE437Yyi2C%2BJrHfTvIrw2wWXsqmBlmQdVhq1Ypqp0MjmoaNopQSFogqGSf%2FQ3j8JzjzSt3s9r43XVIyC2Csx1LqSotly4f36YkqjuLcfpeZH6dvx%2BmKesjlRSSrKIzXftOxN%2FPWSbt2HCVInNu0pki1BeZehbIm41LzVfOFYpmN483xFjNQB1xicUtnGKNsBBKQN8oZPHtmJwOXC4fbU%2BTVmPWxO1QmRFAf92K8tB96KehAw48jQwwY6pgGGiF3HDt23C9zml6dyIdm0D0WSsEZi28yWpHXlKvhGmA940GM3sVMq9wR%2BzhxxFRXRotwBavMK4oJdN4v6sTrZcEQDSwQckxOvvEtioxWGXp71%2ByYH8uk%2BDqtEVjx4wYfu90Vv0wHPeq2uKyFiKrLAcqsCW%2F4GSWR30rUY74voO89%2FVDUKzqEYtqEPGNy%2FFuVplfTEcwcNqMpBDV%2BdAtEGReliCogP&X-Amz-Signature=3027caf947f51c8a26d90f7323b2eef5dda7b4ef705ff9d696d4a65485cc10fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXD2XB5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBR3IWgtrpKqmUyctYj6I6eL%2BKEXey7Wn7YLlGJbLaHqAiEAg9UC3kRLXt4lG07KByyFRx5BAOQM%2BQKP2ZLt%2FDKzKegq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJMYrQGJeU2Vw4gMnSrcAwPoTPY7jIWHaYa7i1GimxeVxg523LMEbMXJ7mA48PueXqC7MDFZPW7RvAzacImFQDOmVLzXZSSDoyeKM9BxbywGfwhl4pc0kO3zCa%2FBaJX2ONTBXRXtF9EVkBT2s%2BTHUsmUa1sTKGgQATnN0umBkyllu%2FUH6TCqMLKznNlQY3O2JvjZCaKkVUSJMSqI1uFiFORD66ZImEp4wWr%2BaWr3ZPauUoJ%2F2BtmEls5SMvrfnQyUL0r7Hu05M%2BgJy9%2FaK6DtAxCJ8M1Rx1yB5tvystRTbmJQf8X148Out6odR9WDCQ%2BrkfLc2MzmA0G7UYBFVJE0usasFyhNB6YNfDBeaKTrYM%2By2fuJoa97R8jWvVEXBYFiFVoO4moWqctbyIWKlZcIfCdeZWAF7m6kZkv9fd7YAD0vWxtgG1Z7Ok%2B5RRsfHom7CQzmvLN7x7zlXe%2FZi91JdoaisuuhwGE1lCod%2BWDiu9TSJwIH%2BbDYmOmzenXY%2B7o9Bu5YWxixRXtyk0fjXf7bYb581wpp0LC1zX4CTP%2FrmSyodL8pPUmsSgPlHTQ2wdXiVOGW95GDs2rgZsu9o%2Bx2aJv5z0p2hpHohw%2FY2zfi3PyPOLznQ6e9b79tJfKoWyndfuTHgcFWTr9IhcrMOLI0MMGOqUBvVL8Jc2M%2BZWeBZ%2B5MDKvN6wuZhguaZOKiReMePxmUUOo%2FyWRJm6SAO7O1XQhceW8xhpgs27POCide8j6FzFwb%2Bbqye38xOFqDT6qwR%2FnFP9I0JVkVPvWBsPWi94BJPFGkH1%2Fxfmksjqp6i7NXj19n%2BNXqDJOEAQkC%2FNKHB%2F3Sga1CwA71GAojul6DYbASoFSJN6q3%2BovqCn0kDGE7jxlvtHnSzag&X-Amz-Signature=9a1c3fae5e98aaceec8e66ccb90e12f8437c3e5c3d84488dbdebfbd45505e125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
