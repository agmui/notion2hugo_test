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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5G26WC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD4X2lSG%2B1ckyCcMejXOx3rdfqKrxWiByPilwJ9WnrBHgIhAM8SNr625GzQfRn9STF8lYC5h9i5tiXL7SHBpl2U%2F8bbKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6S94hUdT19MD5C%2FIq3ANKeivbaKPrrztwv%2F%2FmxVrMb5cm3U5pAzspPMlIRL25P09tPANHFgqSYE2sbqiZ35nJvwqBh2T%2B3LmjgggvPpymipvr5BQbd%2Bci1y7ZLdqN0laAQzhDx3sXsCUQt4oT5VjzYLBF7VrMLj3vdZdzq%2F0059FJldaWWUv8k4EnYXW9dADTeSvUyEFI7%2B3zHsGxDISzVDOgpjeoMz48C5SFo6iiqYGmGbdQwL2VucsCpFiietMBGeWPtgS7tD%2F4qpJCRIob2LFahqtBnvDmhlOjKyGoB1v%2Bc5%2B%2FwrKetGu9IyWzpYuO%2FsNXqqEM0hJp%2BjiZwGr%2BYWCm3joVbho8Ew9LsE3AHVpseRewgAvk5RfY3bzfWLuyiRXbEhPEp57ES8Wft4DKpDebabxJ%2B63mjIUtJBWh9XFXTCuTHXMnFFk0ZUhnmRw6mWBtrtQl0FoltDgVLdPFJM5vjDJmXm1cMh5FUOsqpD6bX7FkUG%2BMb7pTEW2XpvEXaushM6Dvjy%2F8N44tbb87MheuqKVLdzIiF757q%2FxJpI8jlA2a3Hn4Bj3xBnSAv%2FZ3mym4hjBRF8bymuXOBc2Z6cqmYb8RjTd%2BGhdcxcHc2xNpdN%2FAJiUNohwj470HhH96Kb1SRkZhXzLk1DCjzKDEBjqkAeC%2Fb%2BPSIyRLFPIbzlhS49KBckf3JQGCun1BNpyugy3O2qNftmIiN4VSHr8%2FTmtvxmvgZ7yZxVJTXbGjEEgVDnFP7GMdzybFFbPllFFNf13GULsli6Yvc4Lnlmq5FiyxD2rN%2FISA20Vj9Xv8T9B97YZbXKtYd2Y%2Fu6Qy1PReEqB9%2BGRvtkruiNfFHhkZtkT8Dqv8Q1daeQ6bHiuwyNyaVCTC%2FQ6c&X-Amz-Signature=94c7373d3d9cb44926eadbc04a1c52c27fccab70b0414b60f8ca6252680950ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5G26WC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD4X2lSG%2B1ckyCcMejXOx3rdfqKrxWiByPilwJ9WnrBHgIhAM8SNr625GzQfRn9STF8lYC5h9i5tiXL7SHBpl2U%2F8bbKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6S94hUdT19MD5C%2FIq3ANKeivbaKPrrztwv%2F%2FmxVrMb5cm3U5pAzspPMlIRL25P09tPANHFgqSYE2sbqiZ35nJvwqBh2T%2B3LmjgggvPpymipvr5BQbd%2Bci1y7ZLdqN0laAQzhDx3sXsCUQt4oT5VjzYLBF7VrMLj3vdZdzq%2F0059FJldaWWUv8k4EnYXW9dADTeSvUyEFI7%2B3zHsGxDISzVDOgpjeoMz48C5SFo6iiqYGmGbdQwL2VucsCpFiietMBGeWPtgS7tD%2F4qpJCRIob2LFahqtBnvDmhlOjKyGoB1v%2Bc5%2B%2FwrKetGu9IyWzpYuO%2FsNXqqEM0hJp%2BjiZwGr%2BYWCm3joVbho8Ew9LsE3AHVpseRewgAvk5RfY3bzfWLuyiRXbEhPEp57ES8Wft4DKpDebabxJ%2B63mjIUtJBWh9XFXTCuTHXMnFFk0ZUhnmRw6mWBtrtQl0FoltDgVLdPFJM5vjDJmXm1cMh5FUOsqpD6bX7FkUG%2BMb7pTEW2XpvEXaushM6Dvjy%2F8N44tbb87MheuqKVLdzIiF757q%2FxJpI8jlA2a3Hn4Bj3xBnSAv%2FZ3mym4hjBRF8bymuXOBc2Z6cqmYb8RjTd%2BGhdcxcHc2xNpdN%2FAJiUNohwj470HhH96Kb1SRkZhXzLk1DCjzKDEBjqkAeC%2Fb%2BPSIyRLFPIbzlhS49KBckf3JQGCun1BNpyugy3O2qNftmIiN4VSHr8%2FTmtvxmvgZ7yZxVJTXbGjEEgVDnFP7GMdzybFFbPllFFNf13GULsli6Yvc4Lnlmq5FiyxD2rN%2FISA20Vj9Xv8T9B97YZbXKtYd2Y%2Fu6Qy1PReEqB9%2BGRvtkruiNfFHhkZtkT8Dqv8Q1daeQ6bHiuwyNyaVCTC%2FQ6c&X-Amz-Signature=fd4748399b059fd8d9eaee523bce36bc327056a4b0f6c7304c20414caf456ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5G26WC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD4X2lSG%2B1ckyCcMejXOx3rdfqKrxWiByPilwJ9WnrBHgIhAM8SNr625GzQfRn9STF8lYC5h9i5tiXL7SHBpl2U%2F8bbKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6S94hUdT19MD5C%2FIq3ANKeivbaKPrrztwv%2F%2FmxVrMb5cm3U5pAzspPMlIRL25P09tPANHFgqSYE2sbqiZ35nJvwqBh2T%2B3LmjgggvPpymipvr5BQbd%2Bci1y7ZLdqN0laAQzhDx3sXsCUQt4oT5VjzYLBF7VrMLj3vdZdzq%2F0059FJldaWWUv8k4EnYXW9dADTeSvUyEFI7%2B3zHsGxDISzVDOgpjeoMz48C5SFo6iiqYGmGbdQwL2VucsCpFiietMBGeWPtgS7tD%2F4qpJCRIob2LFahqtBnvDmhlOjKyGoB1v%2Bc5%2B%2FwrKetGu9IyWzpYuO%2FsNXqqEM0hJp%2BjiZwGr%2BYWCm3joVbho8Ew9LsE3AHVpseRewgAvk5RfY3bzfWLuyiRXbEhPEp57ES8Wft4DKpDebabxJ%2B63mjIUtJBWh9XFXTCuTHXMnFFk0ZUhnmRw6mWBtrtQl0FoltDgVLdPFJM5vjDJmXm1cMh5FUOsqpD6bX7FkUG%2BMb7pTEW2XpvEXaushM6Dvjy%2F8N44tbb87MheuqKVLdzIiF757q%2FxJpI8jlA2a3Hn4Bj3xBnSAv%2FZ3mym4hjBRF8bymuXOBc2Z6cqmYb8RjTd%2BGhdcxcHc2xNpdN%2FAJiUNohwj470HhH96Kb1SRkZhXzLk1DCjzKDEBjqkAeC%2Fb%2BPSIyRLFPIbzlhS49KBckf3JQGCun1BNpyugy3O2qNftmIiN4VSHr8%2FTmtvxmvgZ7yZxVJTXbGjEEgVDnFP7GMdzybFFbPllFFNf13GULsli6Yvc4Lnlmq5FiyxD2rN%2FISA20Vj9Xv8T9B97YZbXKtYd2Y%2Fu6Qy1PReEqB9%2BGRvtkruiNfFHhkZtkT8Dqv8Q1daeQ6bHiuwyNyaVCTC%2FQ6c&X-Amz-Signature=0c2d50e874b3b9384638214829a936b7d6af888650c4eee771a389e079c720ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52KBKAV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCTUVaSbx08VoUSv3Us8%2F6%2BU2HRjakHvrbRZUrHRiFwCgIgecaBd2VgVJ0byfB6dJ5lQhp%2BV%2Bf%2BlZ1JbFuhykf5wXoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuEIWBRhW%2Bpg5LczircA21mJ%2BTEgwHAvviKgU2Rpgpd%2FRNErvjCNYj6idx0WOp%2FOUE73VBdxgqf%2Bt25KjCOlbz72gEKOXudpNpsW5C%2FzMNZi9d5dAeH%2B7JceeSA38%2Bd6RBqIOz%2Fnu8xgU9%2BlOge3OeO8xNVwr4w8OLmvTMpwNPLvyy2ZsfCXAV%2BIj0KpmiSr0pp1nsbEyxWF%2F90FBMVZKDB2atjsF9KkglcpA2VT5IkBtVGshUnQKIBjHP7JC4EU7pa3VgT1gp7cNGduD3mBV9oSA8o9YFUJMj%2BUjgB%2Bzu3OX8OWUPqgeHjRMUjBMmF2SzmoVnIskcSbFZVI%2ByszrM2ZReWPM7FVI3TpbRwssnlhV085ijaKKfJi8ylIYPKYveSUO0EtvejM3osrdDUyArttnkunVW3VGdNBpiAPgeiJ4O80tlbVYVr0DKyOyD3UHJDF2u1YhpEKgyQ9Ga1eO1zjOVkSEvBA%2FN4ts4aSSREZUJ8%2BP9p3MfXRYhfz%2Brb6aV%2FP3d3NA5Up5zjoLNKA64FeO%2FkQpo0yoXpVxdrc%2B5DwJrTWHS9XeYS9cidRn3ykBb1lkqEqwW5p%2B8McGOYbbaowMdGqJLUB2cOLQqChoEmdIoegl7ug8P5bZ5v6CG7q1puba%2BXvVsn6QPmMPnMoMQGOqUBZ%2B7B9finczFq0xFcPuL97qByc3SJ%2B9P3t0t9gRpCcEd06LxMJKJ0TsswoPL3PsppxJgeSIamdGYY3j3kxcbvMdlbc7K6uR9wd3nWztIH0A1Tw%2Fk77Oc5Cy5rhtICaGiGl%2B5Ky4RzImmMl5yhQECcxbqbVmscwcVNCEY0tKzVh5arIdtHWrBaJ1trsahEQv3oauSg7QyKLvaDCu6ySDgE0ESZWosc&X-Amz-Signature=b4fb79b4809920b1d8da2032cafa6e6a59b346ec1c5ca3abaa5b4d055c9388a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5MQKNP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCcApI%2BfLdFEJvFh%2F5NrbFbzJwl3MWf2CHEOyIKK9%2BGZAIhAK6DprvkvoAb%2BzvicoxNUbU8%2BcqOu4yopratA7u2DhUdKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FiV46MMtRyTLjqFYq3AOGZJEYGpKPo9pjEyFBIDlxgQvCNCFR9EmeHCeRfbum4jOxYMRCHO0OX8nTdRecM0WL82rsn9VGP4bdLed76evfxwDjEPSIWVjC6ur3Ym3rDc5K%2F2nh5jBUUE9BA3r7kB5MThD1tSzwTWQXwkIT%2BiPtM0ZKRpjRoRi%2FZNzAHn35KcqIjjuaPXK6GcXRcxM2Zik3Ad8q%2B1CHahsvEcLdAN%2BBi2hrX5L0diE2rmUjhAaEJNrTQery5UBg4XoG91yaTJJrZBfzf%2Fhpmm0BT8LTZ4mkIe%2BusY0YYOdR%2BOp7kTkOLiSKj418vKF3EeZTvveseFn%2BB%2BKn%2Fc%2FVCsykeCJaspRL6QFvXl%2FBdORBqE6wGQJsQY3TW5je8DTBjK4qog7SK3uImJbZzIVE38utf5JIQbSJFU44hlvbRq6GDooV9RS1KgI%2F00pOHu%2Fi9fi46qFJMVS1J5R8UD7iHC%2BdUBTWixOtUD3SKHgZG%2FwoZ0W7vFHWpy7zQwq4zr%2FXeKlfg0v6HnGp8x1tBqoS9hqa6AtPuCHWuQiD%2BEoT0c7bR3h%2BluWNRzTQ627NNVOQw5GVq5zOnTCqhWnmGLWvGkQ%2Fotvi9es4hQCukYlIgtbac6YTFJ57pw9roIFJXhMecFd03jDIzaDEBjqkAWY%2ByQiUw04XUD7g47yYymkcclfTvbDM4gI363pzoF%2B2tAsDPyrl4Ei0stCMxdLaEbCZIqv1EJKsJl%2F%2FmeahsnK4Uwm9MtDzcpuZveZkJimseaVBOnxNc9Q4B6yFZ4bXo0iUIpNf7dHzORloUxX5Xp56F0jdoqATBshX89pGlm35SCmTbFaomkU0vnf3j0ZQb6pXZ1PnLjgDdns7zQaS%2FE0oKKyQ&X-Amz-Signature=a1a1ae1cd5150939dc6da848850e1cc8b3979ae4831f7596dae57c82a7a21f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5G26WC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD4X2lSG%2B1ckyCcMejXOx3rdfqKrxWiByPilwJ9WnrBHgIhAM8SNr625GzQfRn9STF8lYC5h9i5tiXL7SHBpl2U%2F8bbKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6S94hUdT19MD5C%2FIq3ANKeivbaKPrrztwv%2F%2FmxVrMb5cm3U5pAzspPMlIRL25P09tPANHFgqSYE2sbqiZ35nJvwqBh2T%2B3LmjgggvPpymipvr5BQbd%2Bci1y7ZLdqN0laAQzhDx3sXsCUQt4oT5VjzYLBF7VrMLj3vdZdzq%2F0059FJldaWWUv8k4EnYXW9dADTeSvUyEFI7%2B3zHsGxDISzVDOgpjeoMz48C5SFo6iiqYGmGbdQwL2VucsCpFiietMBGeWPtgS7tD%2F4qpJCRIob2LFahqtBnvDmhlOjKyGoB1v%2Bc5%2B%2FwrKetGu9IyWzpYuO%2FsNXqqEM0hJp%2BjiZwGr%2BYWCm3joVbho8Ew9LsE3AHVpseRewgAvk5RfY3bzfWLuyiRXbEhPEp57ES8Wft4DKpDebabxJ%2B63mjIUtJBWh9XFXTCuTHXMnFFk0ZUhnmRw6mWBtrtQl0FoltDgVLdPFJM5vjDJmXm1cMh5FUOsqpD6bX7FkUG%2BMb7pTEW2XpvEXaushM6Dvjy%2F8N44tbb87MheuqKVLdzIiF757q%2FxJpI8jlA2a3Hn4Bj3xBnSAv%2FZ3mym4hjBRF8bymuXOBc2Z6cqmYb8RjTd%2BGhdcxcHc2xNpdN%2FAJiUNohwj470HhH96Kb1SRkZhXzLk1DCjzKDEBjqkAeC%2Fb%2BPSIyRLFPIbzlhS49KBckf3JQGCun1BNpyugy3O2qNftmIiN4VSHr8%2FTmtvxmvgZ7yZxVJTXbGjEEgVDnFP7GMdzybFFbPllFFNf13GULsli6Yvc4Lnlmq5FiyxD2rN%2FISA20Vj9Xv8T9B97YZbXKtYd2Y%2Fu6Qy1PReEqB9%2BGRvtkruiNfFHhkZtkT8Dqv8Q1daeQ6bHiuwyNyaVCTC%2FQ6c&X-Amz-Signature=83fd0df93450dcd1db77be67ca7b9bebb14d76ddc80023300d235c746e90becc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
