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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWISFH5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGpwd13ITBAgIxgIeC%2B6eMcXFZs97%2FhBWGNdU0u398PAiEAjTAr7VL1lsaNtC4bcSWO73ldH%2BEmqfESpus6ygWAO5UqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1nK6RjyImga4Bq4yrcA8wmYaUPYdEwfYu4%2BHVj%2BeO1FtBY6ORsTRL57xIU6vjhxyfl1WRmlNc0IaoO1sp1eBRhgaOIU%2BCqkUJfbXBdQ5V6pDdaM1BHEpGk2P7iu92IMbLlvRTU6LrXnkCCxbpprLkbm4VpkRoDi6R1MDQHsR%2FwZP7GJX5mHQrNgObaV%2BjoG3GIPsmLKD7Aq0RVB%2BaYKiO7H2PuSc1QQTJaLZ4LygSOf6LhDZV5qSzGgvr0B4p3gmXE77a49wqIRu0vXYGoChQIVZKSzMRvhkeHFYM8TKr0PcL0LMlQNh35DJuo825GOB4GRZCGyK%2BwFo2pLKYjlSM%2Bkyz1MZMVoUqK0SEPihc6ljXTQDDWk9a0zDiyGksG78V0pobq3oaHpg4d2D243bC%2B1X%2FGUZjcsOyFLenIzF6Uh%2FmvrgrQaFr9ue0PZCxFULGG6%2BGvFgqOL9MGZPgPCkS0FznREif0gpzKCvzCJ9sGvE6Y3%2Fv5Si5Opf%2BU4i0gTZgn4AxdCXntRakESrsq%2BDevVn7QgV5508VttdU4VOXk2UHZzpm%2BFk%2F8t6Mqr8ba2mA6uuGYf6Qs6vdiYy2OBsJA8BlUfuORAvWpDPM5b0qCEPesR7EBkK3r7KoDgLLUjHa7a2orJK9W7ClxMOrR%2FcIGOqUB9W6b3HF6xUsp5zJY1qiCyLQENfswOEdhi5eYOhKDO9itXea9W6GZIk1MPJqSilqVz7t1rAxS2VDI8ZjlW5I9j1UZW%2Bt09kq7n1yqP5XekzlRCP9x3RTvDOBeItUihUsHXCtV5hRXaP8JtTgo%2Bh3ci5gUPQyQkPJPoLpzg7Y14COgy6mKb4d27PkMGHtcbMJLQqeKxlaYD9OwCR0hBCLSnJwrstfx&X-Amz-Signature=ba0b194a270e099cc3dce46864412af271a7c9898da230d022b5c1c10a3cca86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWISFH5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGpwd13ITBAgIxgIeC%2B6eMcXFZs97%2FhBWGNdU0u398PAiEAjTAr7VL1lsaNtC4bcSWO73ldH%2BEmqfESpus6ygWAO5UqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1nK6RjyImga4Bq4yrcA8wmYaUPYdEwfYu4%2BHVj%2BeO1FtBY6ORsTRL57xIU6vjhxyfl1WRmlNc0IaoO1sp1eBRhgaOIU%2BCqkUJfbXBdQ5V6pDdaM1BHEpGk2P7iu92IMbLlvRTU6LrXnkCCxbpprLkbm4VpkRoDi6R1MDQHsR%2FwZP7GJX5mHQrNgObaV%2BjoG3GIPsmLKD7Aq0RVB%2BaYKiO7H2PuSc1QQTJaLZ4LygSOf6LhDZV5qSzGgvr0B4p3gmXE77a49wqIRu0vXYGoChQIVZKSzMRvhkeHFYM8TKr0PcL0LMlQNh35DJuo825GOB4GRZCGyK%2BwFo2pLKYjlSM%2Bkyz1MZMVoUqK0SEPihc6ljXTQDDWk9a0zDiyGksG78V0pobq3oaHpg4d2D243bC%2B1X%2FGUZjcsOyFLenIzF6Uh%2FmvrgrQaFr9ue0PZCxFULGG6%2BGvFgqOL9MGZPgPCkS0FznREif0gpzKCvzCJ9sGvE6Y3%2Fv5Si5Opf%2BU4i0gTZgn4AxdCXntRakESrsq%2BDevVn7QgV5508VttdU4VOXk2UHZzpm%2BFk%2F8t6Mqr8ba2mA6uuGYf6Qs6vdiYy2OBsJA8BlUfuORAvWpDPM5b0qCEPesR7EBkK3r7KoDgLLUjHa7a2orJK9W7ClxMOrR%2FcIGOqUB9W6b3HF6xUsp5zJY1qiCyLQENfswOEdhi5eYOhKDO9itXea9W6GZIk1MPJqSilqVz7t1rAxS2VDI8ZjlW5I9j1UZW%2Bt09kq7n1yqP5XekzlRCP9x3RTvDOBeItUihUsHXCtV5hRXaP8JtTgo%2Bh3ci5gUPQyQkPJPoLpzg7Y14COgy6mKb4d27PkMGHtcbMJLQqeKxlaYD9OwCR0hBCLSnJwrstfx&X-Amz-Signature=e70907b2ef094b0c73a7bb073ff2a0a0d643fdde0b2162889d8e3e66fe0c7a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWISFH5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGpwd13ITBAgIxgIeC%2B6eMcXFZs97%2FhBWGNdU0u398PAiEAjTAr7VL1lsaNtC4bcSWO73ldH%2BEmqfESpus6ygWAO5UqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1nK6RjyImga4Bq4yrcA8wmYaUPYdEwfYu4%2BHVj%2BeO1FtBY6ORsTRL57xIU6vjhxyfl1WRmlNc0IaoO1sp1eBRhgaOIU%2BCqkUJfbXBdQ5V6pDdaM1BHEpGk2P7iu92IMbLlvRTU6LrXnkCCxbpprLkbm4VpkRoDi6R1MDQHsR%2FwZP7GJX5mHQrNgObaV%2BjoG3GIPsmLKD7Aq0RVB%2BaYKiO7H2PuSc1QQTJaLZ4LygSOf6LhDZV5qSzGgvr0B4p3gmXE77a49wqIRu0vXYGoChQIVZKSzMRvhkeHFYM8TKr0PcL0LMlQNh35DJuo825GOB4GRZCGyK%2BwFo2pLKYjlSM%2Bkyz1MZMVoUqK0SEPihc6ljXTQDDWk9a0zDiyGksG78V0pobq3oaHpg4d2D243bC%2B1X%2FGUZjcsOyFLenIzF6Uh%2FmvrgrQaFr9ue0PZCxFULGG6%2BGvFgqOL9MGZPgPCkS0FznREif0gpzKCvzCJ9sGvE6Y3%2Fv5Si5Opf%2BU4i0gTZgn4AxdCXntRakESrsq%2BDevVn7QgV5508VttdU4VOXk2UHZzpm%2BFk%2F8t6Mqr8ba2mA6uuGYf6Qs6vdiYy2OBsJA8BlUfuORAvWpDPM5b0qCEPesR7EBkK3r7KoDgLLUjHa7a2orJK9W7ClxMOrR%2FcIGOqUB9W6b3HF6xUsp5zJY1qiCyLQENfswOEdhi5eYOhKDO9itXea9W6GZIk1MPJqSilqVz7t1rAxS2VDI8ZjlW5I9j1UZW%2Bt09kq7n1yqP5XekzlRCP9x3RTvDOBeItUihUsHXCtV5hRXaP8JtTgo%2Bh3ci5gUPQyQkPJPoLpzg7Y14COgy6mKb4d27PkMGHtcbMJLQqeKxlaYD9OwCR0hBCLSnJwrstfx&X-Amz-Signature=33edbdfc3cb56a4027ba9620e3270156a6196f3de253199d2793b01afca10c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENC3NHE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrNriD5js9ZZ2i4nJqb1Zau76ka%2B5%2FfP7gpm%2FtfIp3VwIgU%2BMVSSviUPweG%2BV1OyOoRkMgTesNO6LhNcXD5sRHWeYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJCYxjoadkumm2k4CrcAyKO8rIKTjvDyJR70IKMDTf52p5zmzNJze19gg7k32DLofKRPSFAmdoBAAhKx%2Bs3ynHOxrCzNCaqQg%2BZf9GWL2MUXDO6dsEaguUb68w65%2BmS9Ylx%2FVpNBTaWzuv89cTM6vuJg0FZef7RuPuva%2Bf%2BEUuStvwVImooPfhvJmb0IgClmkhrB5V1qxF0D4qgbzT7sty%2BCdFVKSQ7tBJRT9LtiTyEKsbGI2RlaBYv0CJoHwlWrul7he%2FyyZpnI731syPvaWVdoai9oIZG0F3P2wnwtb1pBvnXz3QQ8CZHN0Qo8fzZJB0G1iGMq1JoIuDtutnyko%2FbhuaGHxAGlabtEq0Ii82ejDRevZxDKR9krviXLe%2FqVRPJWnGLSGe6snsC0yxVxTUCqCLZ%2BcR8tYpkjUwahTKS0fsZMtYWmX%2BEsOs1NQlQGBS4f4DCRP%2FteTrmVyk24tO6SHOqFT26pXc04LpI%2Fqh1yo1l2o61QRgWivXgVOZOUkcFYRoWcF22PEparI6hksWF8fP3%2FqYzvejG8Y%2BMncCWibI6D8Hl7bd5tJv%2FX7pRiNt217UMvnabAmec2CWGQyATjSzwxvmggjGU6nU%2FJMiykwPe%2BwHZv4DYKF1OVg6RYHzF%2F3rCXgg1RziLMPvR%2FcIGOqUBO3DYzm%2FmaSBhox4rgVC9lAsOaboLL7IjytA7zrYQakv3dZpPblkLqWSuOrrj83u%2BP2j%2FmPmb314swiDNsl7oO7RdE6xNM%2BQQ8kRuLKzkr2JHAIroeMpCG8T08sBHsPBfFxtw6CagZO8yGBVLLxnnOsj4RpZtnMmWJpNqGeFKgi1obNlRvu04bXSgxD6JZW8o5%2BIq1uP4TnlajDghf0jhzLZn7%2Ba9&X-Amz-Signature=cd2d439e2b5757c2ba9bc673ebe0550d2bf726ac9056c1411de593eb02efddda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTM3J3KK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG04bJ4MXA4Y4%2FdJvoBmNVxOQkG26ZOdW89kUOS4mwGQAiBcp%2FNSviTOsiTAJn3w04oXABUyu8h8l6yHad5ty0VS0yqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B3XPceeWjgtsaJpJKtwDiVKvka%2BoRiXE4NDadh%2FRojSr5Sc6b%2BtnOGj2g0%2Bnr6P0Get1jfAgThCPb0HYV34fLpFaF0EK0DnP%2FKWA7sVgK6l2UG22xDC3z%2BUfBpWV8Qgy1AHR3F7HIYpG26YMBhFMzCENWi9n817xfr8SkVbLXYWYW3fijeu5b38uc3zAVrtKqz5TSz0TlvR0QF7%2F0HldnYvCZ%2FGhhYRlmmOe3EL3gMVvUz%2Fjxkn046ZOoM5fGTFjmgsHipwwmTZQ%2BqOf0WaGbMMwFbr6bwphki4KHtD1U0giV9FyjudJh13llDw9LJdTISOBFnOWbBXCk9EQ%2FUhI1G97uy64%2B0L1ikrdGD0b7oMn3CBeNcvT067tQWJtfz4%2FagkkwcvyB%2BSfm%2B2HjJM1oudytFiBGd3UIG2qa%2BLLy%2FB%2FUbtTK3Hz7GHh%2FgQbZLNTIgxhTPKt0DLjdKjJqKjHD2bQqjJBVm7UyY0YsUiiXOnIMGEtDkhyKiYbc8hrPheuaIi6i%2Fk%2F1IyBnrk6DtlGVlT298QTQ7ltoFq4wKDq0WNexLwIi0CGNKWsAMh4aQSeybQ057DzARY5UzkMqyrfLuOxaS%2FtJY5UJrX%2BfAlhcnoMgJX8yvmZMgJpU57jwPxH9OM0KrfSd0JZASYwytH9wgY6pgEHfcyvEa4hGCiz5tnDp0KcoZN29eVPypWDY1LXZ0RfJ32hNiL%2BL7pAXslhd%2BYAi0VVCAPOr4E7dzyaDnamKI%2FL9bSGrLqfCksx6t4DmXmfsc8nhuPN3NoudJTXyOmua7Dpsc9mm3O%2BuWI351FTDOtvD%2BJZMExgLLb313Xu%2BcOz9Qv8YZ75bPnKiKwIZ69L0EsrVRz5CuO2s4k4BmJFTdGHa2Qr1Psg&X-Amz-Signature=4fd702fb64924d4430ccc6ebd2acabc3175cce835a3e4bb0997f85d17bcb6818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWISFH5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGpwd13ITBAgIxgIeC%2B6eMcXFZs97%2FhBWGNdU0u398PAiEAjTAr7VL1lsaNtC4bcSWO73ldH%2BEmqfESpus6ygWAO5UqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1nK6RjyImga4Bq4yrcA8wmYaUPYdEwfYu4%2BHVj%2BeO1FtBY6ORsTRL57xIU6vjhxyfl1WRmlNc0IaoO1sp1eBRhgaOIU%2BCqkUJfbXBdQ5V6pDdaM1BHEpGk2P7iu92IMbLlvRTU6LrXnkCCxbpprLkbm4VpkRoDi6R1MDQHsR%2FwZP7GJX5mHQrNgObaV%2BjoG3GIPsmLKD7Aq0RVB%2BaYKiO7H2PuSc1QQTJaLZ4LygSOf6LhDZV5qSzGgvr0B4p3gmXE77a49wqIRu0vXYGoChQIVZKSzMRvhkeHFYM8TKr0PcL0LMlQNh35DJuo825GOB4GRZCGyK%2BwFo2pLKYjlSM%2Bkyz1MZMVoUqK0SEPihc6ljXTQDDWk9a0zDiyGksG78V0pobq3oaHpg4d2D243bC%2B1X%2FGUZjcsOyFLenIzF6Uh%2FmvrgrQaFr9ue0PZCxFULGG6%2BGvFgqOL9MGZPgPCkS0FznREif0gpzKCvzCJ9sGvE6Y3%2Fv5Si5Opf%2BU4i0gTZgn4AxdCXntRakESrsq%2BDevVn7QgV5508VttdU4VOXk2UHZzpm%2BFk%2F8t6Mqr8ba2mA6uuGYf6Qs6vdiYy2OBsJA8BlUfuORAvWpDPM5b0qCEPesR7EBkK3r7KoDgLLUjHa7a2orJK9W7ClxMOrR%2FcIGOqUB9W6b3HF6xUsp5zJY1qiCyLQENfswOEdhi5eYOhKDO9itXea9W6GZIk1MPJqSilqVz7t1rAxS2VDI8ZjlW5I9j1UZW%2Bt09kq7n1yqP5XekzlRCP9x3RTvDOBeItUihUsHXCtV5hRXaP8JtTgo%2Bh3ci5gUPQyQkPJPoLpzg7Y14COgy6mKb4d27PkMGHtcbMJLQqeKxlaYD9OwCR0hBCLSnJwrstfx&X-Amz-Signature=f74837683f6648ac8f20542f732f09670eb3d629a30499131a3d6ca25918e70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
