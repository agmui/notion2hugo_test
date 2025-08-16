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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BBQELJV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCFysAggjA%2B0KecOG7Xa7eWwAREbsPemLklJzpNEhecqgIhAPUBnHeYo3g2Fzh%2FRFFV%2Bdr%2BHC%2FXGZfPUn3qmxzu%2BwloKv8DCHEQABoMNjM3NDIzMTgzODA1IgyMjovFiu4Tk7Bbn94q3AMXCIKBGPPmAPnD9seyv4qILgqMEl9nci6oyURTAW1YsyaMuZZKGrrSF2HfTfoUPC0KoEApZtf%2BHyAy00L5Qf8pJ9E0sD8%2Fpg%2FPgWOOGiJbGWGNbd%2Bj72UotM7mvHEoWN6VLVB%2FiUMSq6A%2FPxSSbC1jZc1qu4rfjSD6w3d5InjAEwWZ0SXAsj8JuFZ0d0XAvfNtrsqnYo0XFaEESyRmbmflYZNT8yc%2FYw%2FSQXYuy1U7hT2RGqlWWF2xGCgZYEujvucE8XPDGem7jL%2FWn%2Bh3acsk9pl7nhtKXr9FzhOzvCgZAnNis49U7NwJEj0dksc92sh942Re%2F1tzI2y5ZKpGrVjqRziI2m4ArnCpJEaONA1yr2RuEZX8qTAE%2F1mkwiY22EGwydE%2BuYqyvwNK4w8If3rFkzsdilPv6zBYaERMEMC2kVJ1l6%2FO684WLYPYyAnEwp%2FLrVNQaeBcGnlm94HYcqW5J3iQnDPX6LoF%2F0RL8Tc3Vv%2FKKhGy5KzTMe4vXU4ylmoW2MKfnfLL8auq%2Bqj8a9ZMC6q8N2t2Clpk3ph1kXfrmm9vZWRggzkJ7lYltIZSkiIjuUGKInmR8tjcFA0hHsbwSZZxz%2FKl4psVHEZBuTnJmcFIV0ljByPdI1iXRDC294DFBjqkAcFB%2Fun22Ed0AW1CIt849zbEPZFvY4%2B4QKFo1RTboPuXTZa5Vu3cHYobXIlQfH6UGe9JVvzvul0tl4WabueHP8FZxUmKpA2XNSFSphPCT2%2F7cr4rt6%2BvsFb%2FCmOLj9tENWOIeQdbccBrpCSvDc2buLrG42bynVRwgTQuZXdSTOHk1I%2BICZGBbvHUjSXDL9VwOolQZD%2FOzZ%2BEUGBJqvKgOhz0kH6u&X-Amz-Signature=fe5ae248d3df12eac845748592ee67dd4bbffbe5492756c8d03a477c09459d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BBQELJV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCFysAggjA%2B0KecOG7Xa7eWwAREbsPemLklJzpNEhecqgIhAPUBnHeYo3g2Fzh%2FRFFV%2Bdr%2BHC%2FXGZfPUn3qmxzu%2BwloKv8DCHEQABoMNjM3NDIzMTgzODA1IgyMjovFiu4Tk7Bbn94q3AMXCIKBGPPmAPnD9seyv4qILgqMEl9nci6oyURTAW1YsyaMuZZKGrrSF2HfTfoUPC0KoEApZtf%2BHyAy00L5Qf8pJ9E0sD8%2Fpg%2FPgWOOGiJbGWGNbd%2Bj72UotM7mvHEoWN6VLVB%2FiUMSq6A%2FPxSSbC1jZc1qu4rfjSD6w3d5InjAEwWZ0SXAsj8JuFZ0d0XAvfNtrsqnYo0XFaEESyRmbmflYZNT8yc%2FYw%2FSQXYuy1U7hT2RGqlWWF2xGCgZYEujvucE8XPDGem7jL%2FWn%2Bh3acsk9pl7nhtKXr9FzhOzvCgZAnNis49U7NwJEj0dksc92sh942Re%2F1tzI2y5ZKpGrVjqRziI2m4ArnCpJEaONA1yr2RuEZX8qTAE%2F1mkwiY22EGwydE%2BuYqyvwNK4w8If3rFkzsdilPv6zBYaERMEMC2kVJ1l6%2FO684WLYPYyAnEwp%2FLrVNQaeBcGnlm94HYcqW5J3iQnDPX6LoF%2F0RL8Tc3Vv%2FKKhGy5KzTMe4vXU4ylmoW2MKfnfLL8auq%2Bqj8a9ZMC6q8N2t2Clpk3ph1kXfrmm9vZWRggzkJ7lYltIZSkiIjuUGKInmR8tjcFA0hHsbwSZZxz%2FKl4psVHEZBuTnJmcFIV0ljByPdI1iXRDC294DFBjqkAcFB%2Fun22Ed0AW1CIt849zbEPZFvY4%2B4QKFo1RTboPuXTZa5Vu3cHYobXIlQfH6UGe9JVvzvul0tl4WabueHP8FZxUmKpA2XNSFSphPCT2%2F7cr4rt6%2BvsFb%2FCmOLj9tENWOIeQdbccBrpCSvDc2buLrG42bynVRwgTQuZXdSTOHk1I%2BICZGBbvHUjSXDL9VwOolQZD%2FOzZ%2BEUGBJqvKgOhz0kH6u&X-Amz-Signature=4d2a4d1244abb3fd501ecad3384f4a1718bea936eb8aa6730a06cb054e96d086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BBQELJV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCFysAggjA%2B0KecOG7Xa7eWwAREbsPemLklJzpNEhecqgIhAPUBnHeYo3g2Fzh%2FRFFV%2Bdr%2BHC%2FXGZfPUn3qmxzu%2BwloKv8DCHEQABoMNjM3NDIzMTgzODA1IgyMjovFiu4Tk7Bbn94q3AMXCIKBGPPmAPnD9seyv4qILgqMEl9nci6oyURTAW1YsyaMuZZKGrrSF2HfTfoUPC0KoEApZtf%2BHyAy00L5Qf8pJ9E0sD8%2Fpg%2FPgWOOGiJbGWGNbd%2Bj72UotM7mvHEoWN6VLVB%2FiUMSq6A%2FPxSSbC1jZc1qu4rfjSD6w3d5InjAEwWZ0SXAsj8JuFZ0d0XAvfNtrsqnYo0XFaEESyRmbmflYZNT8yc%2FYw%2FSQXYuy1U7hT2RGqlWWF2xGCgZYEujvucE8XPDGem7jL%2FWn%2Bh3acsk9pl7nhtKXr9FzhOzvCgZAnNis49U7NwJEj0dksc92sh942Re%2F1tzI2y5ZKpGrVjqRziI2m4ArnCpJEaONA1yr2RuEZX8qTAE%2F1mkwiY22EGwydE%2BuYqyvwNK4w8If3rFkzsdilPv6zBYaERMEMC2kVJ1l6%2FO684WLYPYyAnEwp%2FLrVNQaeBcGnlm94HYcqW5J3iQnDPX6LoF%2F0RL8Tc3Vv%2FKKhGy5KzTMe4vXU4ylmoW2MKfnfLL8auq%2Bqj8a9ZMC6q8N2t2Clpk3ph1kXfrmm9vZWRggzkJ7lYltIZSkiIjuUGKInmR8tjcFA0hHsbwSZZxz%2FKl4psVHEZBuTnJmcFIV0ljByPdI1iXRDC294DFBjqkAcFB%2Fun22Ed0AW1CIt849zbEPZFvY4%2B4QKFo1RTboPuXTZa5Vu3cHYobXIlQfH6UGe9JVvzvul0tl4WabueHP8FZxUmKpA2XNSFSphPCT2%2F7cr4rt6%2BvsFb%2FCmOLj9tENWOIeQdbccBrpCSvDc2buLrG42bynVRwgTQuZXdSTOHk1I%2BICZGBbvHUjSXDL9VwOolQZD%2FOzZ%2BEUGBJqvKgOhz0kH6u&X-Amz-Signature=7b96bae9d2dc6e7e2b94d6506be1e81da992042156923f28678e1be4fb598c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECL5JL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCyr3IlXbXyUUMkpRTEIfjY8me4tHjGrwBLRac4Kn82JAIhALmEzu%2F3CxtULPt1mK2P8vmNPPr2emHqdMM%2BuWrnnoGXKv8DCHEQABoMNjM3NDIzMTgzODA1Igz8URZK9gX1%2B2vieeMq3AMa4bwxBadRHyu%2BE2sFBvrISI3%2BcQSlBYk9HEDG28oH8DpPMPr%2BKy9d9n7Wb0%2FoXaFEhrMlYNHgSRahH%2FITLKfPlAXD4TtW77ThSk0%2BL1dm%2Bs7glSNiMeJVc7I4Yu%2F9zfQE4nqFbIEqj%2BThYBqd6Eso68BELWYT4VHhsmHRkKvwjIC6dF56TKFvdAz1WD7rQJUgPyD0yFi%2BLASMFXZxJQwYEYre3QB0HXjJeMsb%2BSs2YChBhD5v4RwTEBRBrximpSXvTU9544VnYo%2BYjKLq8NBhu1NdGiS0ZgISuU3GhGIPO60TzuWry7gCveqCJLzejklNfc1cRpEgo%2BgzQb0gnXATsyATd4sj3kcF9I4MkyAztSYgAGeQYa56XEFvGRWb8JTr5eoh%2B1N2r%2FqBOOm5juqPkoVKOlH%2Fgem5HQs5RLtAfkLrWP3IYk1Wgi0nazld5Bn%2Bdp6x1%2FK7hShlUlqi6G8rqwC%2BJUPX0BQecEIhplGlE6tjBc4c17CsNgCv1b00t8dTncpIS4%2FSkdbzf%2FCrDt3vTlwFGu8H2ZGrk4t0jZMcBne4lbvn4H7pNEVgdXOVmhE8uk3wSQMJ2pdFsIBPPYRrSG4gJJpakV6%2BKqaOKlKt6mdrMxqlftl6ZIDJKzDE%2BIDFBjqkAaklM7Mm0vEvi4k2LdfpqnrlS%2F5Kip43cPb35Gua6gxovbqleEbYILJu8xVkcYXXpub4njCrobkMiKEIS%2FT%2BoezpvYd6VtEm4uW1agEJ9UVlMHi%2BeCBGRkzXJaLn4inEgS1eGU%2BwkFYE4q5XtKm4WiW1ysq%2FmqipqhfbN%2FJYlnERYiFmfF65Vaeb%2B1B4LEclKuUZuWy9pye4gz1wqkAtEyZ8AAWX&X-Amz-Signature=e51902373732c07bb9d83699796f30ceadaad1d224cdae6aa1715adf8f4a03fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW7ALXH6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICDHGiUuW8eEyToQ1InfzLPf7C80EPr9lbTme5ryGhuOAiB0thKO7mbBkthhNWX1ZC6J9tnGiECdMf3bnsEueyTS8ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMnzPdDw8NSY9ETSSAKtwD0dJBgEvQHjL44uUTOhcRtIQuL2u02D5bNYemGxsA4%2FuSi2ReUHakSbzoF7VfnS8UO5w4yaY7lqD3k12jCg0T27CUaigX8whzM4Cs%2BolHlD7x1ERauXXh1pbf%2FZUOAUpAU7GQVcZAtuWjpaUsOmCoJv2WnH7INJiVF%2FM6B5weVOtvm9bLp73E1DQF7cM%2F66kaHI8tfc6tYtYIG1pMPqSf5maplwoyAMMwar0A1DJNebwMNHJp8TMp1n7AXmjo0SXeuxYHuSHPzk%2BlLIp45zDjTrMYMhUoI6tD%2FFz0FQDmZP7HnP6gohNwOIQr53OQYRtpScMT5r5BKxSiLYi7CTe%2BXB4SMbEdVGv9FW5bdt1z8Nj4mXUOoTiIwGNefUQNPdJWvT5Uft14NAyQP0QUO3L62Y5QFilBCJiISeHU6ckRAzdKSCKn24GKnv5CuOz%2BQjqerbuwC%2F%2B7B79g8KyXSS3Lhb7rL7s5X%2FFjYmfPTTnrXIPk4wm301igfma4w6w7pJyQBJPtH4Auxl4OJy32ujYa4YnbSQNfrUWe4A8nKWImoDw9vSleHdeQ3HEunu9JmbY4PcegW5livQ8hN947h6UrJjeeErpxuE7fDaXMVwUYfKIrAODNrK3lyom7uSQwkviAxQY6pgGqIVnPmLEKUBcv25DwWMHBREZtO9W8DFDvyHaeEpV0y%2FkGidS6b3VZsOwAqf%2Bd3nEakHaZI3cSgH1QQyk4rCV6Ab3O%2Bz9%2BHydl7xidYZF8Z5iEB6uBwx4NCYmzciObszk5Fps8R9Tzb31Dgphx2IHw2L4QcvWv1nNSrw7RqarScEIPY%2Bz7Caapmt4fJBY5bU%2FAANwafChB6eAxk9wCVFFumd0SENbS&X-Amz-Signature=aac26551460ab2ec61977fa961432f8b8ecd457f2982a4dc019901fcb869caf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BBQELJV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCFysAggjA%2B0KecOG7Xa7eWwAREbsPemLklJzpNEhecqgIhAPUBnHeYo3g2Fzh%2FRFFV%2Bdr%2BHC%2FXGZfPUn3qmxzu%2BwloKv8DCHEQABoMNjM3NDIzMTgzODA1IgyMjovFiu4Tk7Bbn94q3AMXCIKBGPPmAPnD9seyv4qILgqMEl9nci6oyURTAW1YsyaMuZZKGrrSF2HfTfoUPC0KoEApZtf%2BHyAy00L5Qf8pJ9E0sD8%2Fpg%2FPgWOOGiJbGWGNbd%2Bj72UotM7mvHEoWN6VLVB%2FiUMSq6A%2FPxSSbC1jZc1qu4rfjSD6w3d5InjAEwWZ0SXAsj8JuFZ0d0XAvfNtrsqnYo0XFaEESyRmbmflYZNT8yc%2FYw%2FSQXYuy1U7hT2RGqlWWF2xGCgZYEujvucE8XPDGem7jL%2FWn%2Bh3acsk9pl7nhtKXr9FzhOzvCgZAnNis49U7NwJEj0dksc92sh942Re%2F1tzI2y5ZKpGrVjqRziI2m4ArnCpJEaONA1yr2RuEZX8qTAE%2F1mkwiY22EGwydE%2BuYqyvwNK4w8If3rFkzsdilPv6zBYaERMEMC2kVJ1l6%2FO684WLYPYyAnEwp%2FLrVNQaeBcGnlm94HYcqW5J3iQnDPX6LoF%2F0RL8Tc3Vv%2FKKhGy5KzTMe4vXU4ylmoW2MKfnfLL8auq%2Bqj8a9ZMC6q8N2t2Clpk3ph1kXfrmm9vZWRggzkJ7lYltIZSkiIjuUGKInmR8tjcFA0hHsbwSZZxz%2FKl4psVHEZBuTnJmcFIV0ljByPdI1iXRDC294DFBjqkAcFB%2Fun22Ed0AW1CIt849zbEPZFvY4%2B4QKFo1RTboPuXTZa5Vu3cHYobXIlQfH6UGe9JVvzvul0tl4WabueHP8FZxUmKpA2XNSFSphPCT2%2F7cr4rt6%2BvsFb%2FCmOLj9tENWOIeQdbccBrpCSvDc2buLrG42bynVRwgTQuZXdSTOHk1I%2BICZGBbvHUjSXDL9VwOolQZD%2FOzZ%2BEUGBJqvKgOhz0kH6u&X-Amz-Signature=539f43034c5be67506d280d23abe01dea11e2f9293cdc67c81d99ca7664af050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
