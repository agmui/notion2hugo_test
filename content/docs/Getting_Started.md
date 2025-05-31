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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBB7WXEE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uwNb%2BZ5X3VvS7Y7YE%2B8yiuMaxQBKBZFoXiP%2BvlzWkAiEA9AVfPUf%2FdDUTnUuuD5vIBbxrWEwAqT9NgHVweNVySXwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC89qK2dub7B%2BMXeRCrcA1iNlxftYkcj5K1BR7fZASD9FN%2BOBJn7bMFLEhJJSeopzpj0DpiBb6doK6kcyLhdfEeN9jHlvZEQMj0YlQrYslHg4YxPNFPxm%2FYuxbllYXkBPsevD0EwKXIhD8jm4JNirjdoeBADmKs3bNdE9eIBA5zSvWnThHw81F1gIrYH66hH11W9ecXTIGRIigcb%2F4I6qNCRwxxrZlUW%2F4IzgQFeXVAjrqsi1yaO8MDfI5HdGkG3MXPFRKOoDuqONpIjrG%2FPpE9aHer%2FyNqZmox59JSWHKwWaBrSpce0jIJuO39tAp8PrTsqKidHe%2FsIEjZw%2F6kGc3Oj0Xjgo92rEi6qdvoJLQkqB7UQEbhP8vryJieeWy6vPxDJL9idsljaU1AC28FlkOvrNQGh6aUuYEb2AMbggvxLczxXQGL0qJPK4YxIqpi874VEiMMOnNWzuMIV1T3liEyD5P36kkzN%2FkK0jrI5YDnTkyFBAfSWXN5ncPfL82fq44GlS14jMPCLOu8U3zzb70N8ZsM6RoapwZUl%2F4I5MIqNvo6QrpHidRzfBtAGiCT3qUWl5%2FViCf8Ia4r0MP6%2Fw4wiH5csIQvAiaPe07DeoqWg908wgz%2FkWpMLAGPCp%2FNVUxqmSRbAIn2yggvFMLiM6sEGOqUB%2BXrUxPcSX84ecM9TtUJuTPo7rgcYDcDp2AHxcZWjsCw6zUp%2F1anZ%2Fv29L%2BxKVWaktoUOHheZKgL7XuWygOOJjczgXp8V2ahy8iVEFbFsd73Jiuokb%2Fb3w9y1E%2FXYCiKHfV%2BFa8rh%2Bc%2BEKXsqZiVeD0cs%2FgWcvGp7CHKmqCkL7qvyB2wO%2FcyDppSzD7GyrZIWI3aUXbON%2FHt3JWriCLZuT0jRkICr&X-Amz-Signature=cc789b067b78e37c8c9cb861acbd9c22341ae01f4bd4984d983a8777e3680fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBB7WXEE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uwNb%2BZ5X3VvS7Y7YE%2B8yiuMaxQBKBZFoXiP%2BvlzWkAiEA9AVfPUf%2FdDUTnUuuD5vIBbxrWEwAqT9NgHVweNVySXwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC89qK2dub7B%2BMXeRCrcA1iNlxftYkcj5K1BR7fZASD9FN%2BOBJn7bMFLEhJJSeopzpj0DpiBb6doK6kcyLhdfEeN9jHlvZEQMj0YlQrYslHg4YxPNFPxm%2FYuxbllYXkBPsevD0EwKXIhD8jm4JNirjdoeBADmKs3bNdE9eIBA5zSvWnThHw81F1gIrYH66hH11W9ecXTIGRIigcb%2F4I6qNCRwxxrZlUW%2F4IzgQFeXVAjrqsi1yaO8MDfI5HdGkG3MXPFRKOoDuqONpIjrG%2FPpE9aHer%2FyNqZmox59JSWHKwWaBrSpce0jIJuO39tAp8PrTsqKidHe%2FsIEjZw%2F6kGc3Oj0Xjgo92rEi6qdvoJLQkqB7UQEbhP8vryJieeWy6vPxDJL9idsljaU1AC28FlkOvrNQGh6aUuYEb2AMbggvxLczxXQGL0qJPK4YxIqpi874VEiMMOnNWzuMIV1T3liEyD5P36kkzN%2FkK0jrI5YDnTkyFBAfSWXN5ncPfL82fq44GlS14jMPCLOu8U3zzb70N8ZsM6RoapwZUl%2F4I5MIqNvo6QrpHidRzfBtAGiCT3qUWl5%2FViCf8Ia4r0MP6%2Fw4wiH5csIQvAiaPe07DeoqWg908wgz%2FkWpMLAGPCp%2FNVUxqmSRbAIn2yggvFMLiM6sEGOqUB%2BXrUxPcSX84ecM9TtUJuTPo7rgcYDcDp2AHxcZWjsCw6zUp%2F1anZ%2Fv29L%2BxKVWaktoUOHheZKgL7XuWygOOJjczgXp8V2ahy8iVEFbFsd73Jiuokb%2Fb3w9y1E%2FXYCiKHfV%2BFa8rh%2Bc%2BEKXsqZiVeD0cs%2FgWcvGp7CHKmqCkL7qvyB2wO%2FcyDppSzD7GyrZIWI3aUXbON%2FHt3JWriCLZuT0jRkICr&X-Amz-Signature=e2f2eeb9d6ad64332635d2fac3baac8ad2753c3b45f82211c6b91fc9f09706b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBB7WXEE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uwNb%2BZ5X3VvS7Y7YE%2B8yiuMaxQBKBZFoXiP%2BvlzWkAiEA9AVfPUf%2FdDUTnUuuD5vIBbxrWEwAqT9NgHVweNVySXwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC89qK2dub7B%2BMXeRCrcA1iNlxftYkcj5K1BR7fZASD9FN%2BOBJn7bMFLEhJJSeopzpj0DpiBb6doK6kcyLhdfEeN9jHlvZEQMj0YlQrYslHg4YxPNFPxm%2FYuxbllYXkBPsevD0EwKXIhD8jm4JNirjdoeBADmKs3bNdE9eIBA5zSvWnThHw81F1gIrYH66hH11W9ecXTIGRIigcb%2F4I6qNCRwxxrZlUW%2F4IzgQFeXVAjrqsi1yaO8MDfI5HdGkG3MXPFRKOoDuqONpIjrG%2FPpE9aHer%2FyNqZmox59JSWHKwWaBrSpce0jIJuO39tAp8PrTsqKidHe%2FsIEjZw%2F6kGc3Oj0Xjgo92rEi6qdvoJLQkqB7UQEbhP8vryJieeWy6vPxDJL9idsljaU1AC28FlkOvrNQGh6aUuYEb2AMbggvxLczxXQGL0qJPK4YxIqpi874VEiMMOnNWzuMIV1T3liEyD5P36kkzN%2FkK0jrI5YDnTkyFBAfSWXN5ncPfL82fq44GlS14jMPCLOu8U3zzb70N8ZsM6RoapwZUl%2F4I5MIqNvo6QrpHidRzfBtAGiCT3qUWl5%2FViCf8Ia4r0MP6%2Fw4wiH5csIQvAiaPe07DeoqWg908wgz%2FkWpMLAGPCp%2FNVUxqmSRbAIn2yggvFMLiM6sEGOqUB%2BXrUxPcSX84ecM9TtUJuTPo7rgcYDcDp2AHxcZWjsCw6zUp%2F1anZ%2Fv29L%2BxKVWaktoUOHheZKgL7XuWygOOJjczgXp8V2ahy8iVEFbFsd73Jiuokb%2Fb3w9y1E%2FXYCiKHfV%2BFa8rh%2Bc%2BEKXsqZiVeD0cs%2FgWcvGp7CHKmqCkL7qvyB2wO%2FcyDppSzD7GyrZIWI3aUXbON%2FHt3JWriCLZuT0jRkICr&X-Amz-Signature=8435db73d908baa2c742f9d604b3c0d33daf7ecfb12f3fcfbc7ff0fd6446d043&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77SWVHH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXCrqeu2S9Kz59sgSv4PIWisMe6Ode22v6pbCswxBxGAIgeyxUc%2FHDEcCczQ6%2BLxD2IrgJg%2B94BBttbBORB71vGNcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIOmF6xhqcPY9%2FgyyrcA%2BQTO0nEhu3kCpfIDvIq5MKNCMpfzt4uEysqMeZ46jXkbb1DPMhPiMlGUhCQR4PagyuxQEgQf%2FHcYuGd8HOBFe%2B%2Fs9c1uMuRrt6n0XbXUbj7VgFmyjm6pBrn3llnGyvpblodLDUoHsVcNtVkqzeZFAu1NsAb%2FdOkz7bUNdTYn2kmwKvs3EZsPc%2Bf2ZdMq9zcokI%2FUsIIadBuigkLmkw6QzFBrlvTP0OzwWlPMx1T98Se9lc2SYzaen8ZS5BsxAvtQkY7ZBk1oTibmQSRP4vl6tTKdrr7uVn0tZjO3yTpe3Y%2BEG1LVywQ0NfDHq7kBfrbhcOSMJIup0RPpd%2BrRWiW33O5qUN79Onk%2F8W0IOP0B%2Bj%2BaPMW13B0rmR5wUWqavovW0z9QOsf0cTBjpyPhaNkdZ6Dstf4WACgPCxwao4OcfMWEsI5Y6amlESuskN2LWrncpThi6Xov56nHL%2BsTlDrI7SGvklRvpkZpRWSmskJgs9bPwnK6dj3mHcA0%2BJjvBhsWhlthr3U6lvIievMazYHyfRw9v%2Bm7zgKafWfcQB6XcHtE7E%2BKIde6pdScmHYXTFln8D2B%2BoVOVe5KvHPzquthpZK93aYjzIoBjEjRNE9uk00BDjI2mvpAO7UKK3oMK2Z6sEGOqUBWnj3u4vMnk%2FcmirnPxe1cXLya%2FKs9znsH1%2Bxu2%2F4zknPJeCf0qjMdPrkbFpkgHR0rRHxzpfVnsk5NGdCP5VgE8gxsCcU0Vxj5Eh00Dhin3XkM1z56%2FbWaDFHQYqgI1pPQ27n%2F1GgEgsV%2FWJ267mUeCWY091Z55QEekrdSttk05yAOO4AZ%2Fv38HE8RJZpC4qn8ThnevTXEmPiC6Y5QgBx4cZLmGLT&X-Amz-Signature=dac1ba6df438712c638749a05cf2bd009185576f20d54fe12b782c410cbcd69b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYQEDIHD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2kLFxzE%2BYo2OZ11HbP%2FQWfMVRTlbSAp5qsCU0ZSs3HgIhAOr%2BNG5IBlmV0o5a%2FZ%2FA21OhsEhRegjTxq0IRShi5tVNKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jdlzBpt2LaY%2BL68q3AODInmsKkZlddWcpHFEjL0K7FTZqv6889YilbnRGVedRoKpdWKNY3UJdmZD%2B2uXC%2FdS6eDFlUSISz6YHhisma7cfacpIU9xwxEB4IRSlwRxPMQVLJocZy64Sn6N4%2BuO8HhW0YZJLaVkgm8dTtZ0YULpyJySg%2Fj9s7bsDDCLoniy6z7PSQcTeeuSbmdrwhCXORTVAyV%2BvipunC6HIYi0REyS9qxJMhwDZ9HtAriDpDy2L1eDCSSRe3dsqF5UvValmcXYjdRUy2HSMFOi11Hm3tNxOT22UEug36%2FURxBYPDVQvkqSYwutiCCY48ugs1wlp1J4lSSPVVdDRubn4jFl2E%2FXGy9H8zTekaFp2kPoDlylQyOV%2BPVKyniUwXL78yKBT0m7nAf55RYzfuCPdHKdvKgVJFEDupRJYPhd2Oo3x%2FBA6uWVSdxBynEsm%2BC99VrKSFBSG%2Fq3kKKkHi78oPFX4OXnznFN9UC6UZtEfwAKQOuB859CbpxF8KKwSvEyAKi2DVMFOqNvy1EoUaBu9fmvdzEBAQxW1dDXsvCEBSX4ihwQxQV3mISPK866ppoXrD0uKkKRk4aulIbKZHiNskgPfIz%2Fx2hxgKYR9xPiNpP4D4iluCJXbM0Wwt4RzAK5PjCQjerBBjqkAZJ8xDkburj97qKlGTHDyizrIzeyENrOwUdoB5K%2Be7SEQWnEzxxHaDFDsNQvBWi7evz%2Bv4uKRD8UE6IY%2BwXXpTAd%2FufQ4lLTlLqtJ%2Fdg97zCrsDpAOSnAezc77P%2Bb0g0IBpOAV6ueQPsqs%2F4tlp9Ts548kKpPdbolV0dAzqrfpuuFO083TTCr2pGx3q6PwMsz0s46pXbPiK%2Fz9YSzWu%2FD6R7kMBH&X-Amz-Signature=a89714ff661e3bccc9fcb6db998151a011a1125633ca3720e5ac400820693d57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBB7WXEE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uwNb%2BZ5X3VvS7Y7YE%2B8yiuMaxQBKBZFoXiP%2BvlzWkAiEA9AVfPUf%2FdDUTnUuuD5vIBbxrWEwAqT9NgHVweNVySXwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC89qK2dub7B%2BMXeRCrcA1iNlxftYkcj5K1BR7fZASD9FN%2BOBJn7bMFLEhJJSeopzpj0DpiBb6doK6kcyLhdfEeN9jHlvZEQMj0YlQrYslHg4YxPNFPxm%2FYuxbllYXkBPsevD0EwKXIhD8jm4JNirjdoeBADmKs3bNdE9eIBA5zSvWnThHw81F1gIrYH66hH11W9ecXTIGRIigcb%2F4I6qNCRwxxrZlUW%2F4IzgQFeXVAjrqsi1yaO8MDfI5HdGkG3MXPFRKOoDuqONpIjrG%2FPpE9aHer%2FyNqZmox59JSWHKwWaBrSpce0jIJuO39tAp8PrTsqKidHe%2FsIEjZw%2F6kGc3Oj0Xjgo92rEi6qdvoJLQkqB7UQEbhP8vryJieeWy6vPxDJL9idsljaU1AC28FlkOvrNQGh6aUuYEb2AMbggvxLczxXQGL0qJPK4YxIqpi874VEiMMOnNWzuMIV1T3liEyD5P36kkzN%2FkK0jrI5YDnTkyFBAfSWXN5ncPfL82fq44GlS14jMPCLOu8U3zzb70N8ZsM6RoapwZUl%2F4I5MIqNvo6QrpHidRzfBtAGiCT3qUWl5%2FViCf8Ia4r0MP6%2Fw4wiH5csIQvAiaPe07DeoqWg908wgz%2FkWpMLAGPCp%2FNVUxqmSRbAIn2yggvFMLiM6sEGOqUB%2BXrUxPcSX84ecM9TtUJuTPo7rgcYDcDp2AHxcZWjsCw6zUp%2F1anZ%2Fv29L%2BxKVWaktoUOHheZKgL7XuWygOOJjczgXp8V2ahy8iVEFbFsd73Jiuokb%2Fb3w9y1E%2FXYCiKHfV%2BFa8rh%2Bc%2BEKXsqZiVeD0cs%2FgWcvGp7CHKmqCkL7qvyB2wO%2FcyDppSzD7GyrZIWI3aUXbON%2FHt3JWriCLZuT0jRkICr&X-Amz-Signature=6fc34475fe84b1ed70e8892fb43f461a46121ac792ca81e96dc9fc6eed30821a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
