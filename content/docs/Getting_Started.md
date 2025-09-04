---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUQC2IL%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVRh2kMJo2zVnQQ4GKNnY9md%2BxlkpqugvRS9OfW6iIgIhAPlh64T0UNNvMV2z5VqjXbv%2BS4Yvj9fw3JKzQuxFoVxHKv8DCFEQABoMNjM3NDIzMTgzODA1IgyZZJuZU1%2BIG2Fp3pEq3AMJMyrN65l%2BdcaHGdwoJjzcY5PAcu4YpuULrhbugZyoaqS4UCNk8TpXLCmPy0I7wqbj4K7lFPibo%2B9Oz96%2BNtE3c5Th9QOHR0BdX7Boc3WBxwX7ulk6dHzuSNiFj6uboHThfUdf7TUod6MAf2yXOpyx2FYacID5JOqo%2BXk9OLdKMvfzFMZBUp%2BDUQAPt5R2X8ynqFTZpNvcquWLl6pfI811fd2ihcxTfk%2F6s1FU5SoJCwoI9uZh6AiJu8IdM7%2FQE2H1BwgcqbjpVA7SwDZxYHzqsinVsCMwY2bHcLwQFjcn9yY%2FdtR7rE076aE%2B%2BjI8IB6rfKoamT%2FHTfaqxO5nbz0LXhOdERrY3bPMSWFTc737sB4be9OjJF6XqLlF%2FptvuBLQhPtrwv%2FTdkQpjVhHQ%2F5onqC9ziYm3oYhKAlX6ijr0tUeceLn%2Fv8VJpKeY%2FVfT4ifx0dSLmvySw3iLzAIC2tNxw6%2F0p4UD7kCbdK%2BORBGe6GdluYYWplp23hLuKzerlTrHt3FmUpRHM1zDA3YvPzzh5h5d6oc8ss%2BvkdXxI3eKST9ybJtbZXsW%2FRhunsMzGPV0X1daSb3ho8vWtPZUvq8nCFAb1EOzVNGJjNdzhdcg5WqVj7%2BZwM2ICyAcTC9tuPFBjqkATLZuk52L12P1yEndrzYqDy3mWHj%2BaQNiDXEjYeiKTwY6MVSDoZMmml9F4R0nc5%2Bm8xtvuloJLltM4lrBmHui5eyM13X3XikXqMY5y7tv0vFNmfqZrJyZNGMFbF4LDGwu%2FHsO6NUILPSpuvisZiKuSY4xXTSDC4WTqP3RnF6YQwz3zfZ1zoBnNxHEGX5EeB9VfwG7sawbbsU133Z5uovwjMPSNCQ&X-Amz-Signature=1ef714b17953db00171354fc8d5e96f694a774a9e33bbb5a5a921501d34d7cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUQC2IL%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVRh2kMJo2zVnQQ4GKNnY9md%2BxlkpqugvRS9OfW6iIgIhAPlh64T0UNNvMV2z5VqjXbv%2BS4Yvj9fw3JKzQuxFoVxHKv8DCFEQABoMNjM3NDIzMTgzODA1IgyZZJuZU1%2BIG2Fp3pEq3AMJMyrN65l%2BdcaHGdwoJjzcY5PAcu4YpuULrhbugZyoaqS4UCNk8TpXLCmPy0I7wqbj4K7lFPibo%2B9Oz96%2BNtE3c5Th9QOHR0BdX7Boc3WBxwX7ulk6dHzuSNiFj6uboHThfUdf7TUod6MAf2yXOpyx2FYacID5JOqo%2BXk9OLdKMvfzFMZBUp%2BDUQAPt5R2X8ynqFTZpNvcquWLl6pfI811fd2ihcxTfk%2F6s1FU5SoJCwoI9uZh6AiJu8IdM7%2FQE2H1BwgcqbjpVA7SwDZxYHzqsinVsCMwY2bHcLwQFjcn9yY%2FdtR7rE076aE%2B%2BjI8IB6rfKoamT%2FHTfaqxO5nbz0LXhOdERrY3bPMSWFTc737sB4be9OjJF6XqLlF%2FptvuBLQhPtrwv%2FTdkQpjVhHQ%2F5onqC9ziYm3oYhKAlX6ijr0tUeceLn%2Fv8VJpKeY%2FVfT4ifx0dSLmvySw3iLzAIC2tNxw6%2F0p4UD7kCbdK%2BORBGe6GdluYYWplp23hLuKzerlTrHt3FmUpRHM1zDA3YvPzzh5h5d6oc8ss%2BvkdXxI3eKST9ybJtbZXsW%2FRhunsMzGPV0X1daSb3ho8vWtPZUvq8nCFAb1EOzVNGJjNdzhdcg5WqVj7%2BZwM2ICyAcTC9tuPFBjqkATLZuk52L12P1yEndrzYqDy3mWHj%2BaQNiDXEjYeiKTwY6MVSDoZMmml9F4R0nc5%2Bm8xtvuloJLltM4lrBmHui5eyM13X3XikXqMY5y7tv0vFNmfqZrJyZNGMFbF4LDGwu%2FHsO6NUILPSpuvisZiKuSY4xXTSDC4WTqP3RnF6YQwz3zfZ1zoBnNxHEGX5EeB9VfwG7sawbbsU133Z5uovwjMPSNCQ&X-Amz-Signature=f85b27a87496759496e04adc85176a0f9e90120f1504cc85dd76df095ded2792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUQC2IL%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVRh2kMJo2zVnQQ4GKNnY9md%2BxlkpqugvRS9OfW6iIgIhAPlh64T0UNNvMV2z5VqjXbv%2BS4Yvj9fw3JKzQuxFoVxHKv8DCFEQABoMNjM3NDIzMTgzODA1IgyZZJuZU1%2BIG2Fp3pEq3AMJMyrN65l%2BdcaHGdwoJjzcY5PAcu4YpuULrhbugZyoaqS4UCNk8TpXLCmPy0I7wqbj4K7lFPibo%2B9Oz96%2BNtE3c5Th9QOHR0BdX7Boc3WBxwX7ulk6dHzuSNiFj6uboHThfUdf7TUod6MAf2yXOpyx2FYacID5JOqo%2BXk9OLdKMvfzFMZBUp%2BDUQAPt5R2X8ynqFTZpNvcquWLl6pfI811fd2ihcxTfk%2F6s1FU5SoJCwoI9uZh6AiJu8IdM7%2FQE2H1BwgcqbjpVA7SwDZxYHzqsinVsCMwY2bHcLwQFjcn9yY%2FdtR7rE076aE%2B%2BjI8IB6rfKoamT%2FHTfaqxO5nbz0LXhOdERrY3bPMSWFTc737sB4be9OjJF6XqLlF%2FptvuBLQhPtrwv%2FTdkQpjVhHQ%2F5onqC9ziYm3oYhKAlX6ijr0tUeceLn%2Fv8VJpKeY%2FVfT4ifx0dSLmvySw3iLzAIC2tNxw6%2F0p4UD7kCbdK%2BORBGe6GdluYYWplp23hLuKzerlTrHt3FmUpRHM1zDA3YvPzzh5h5d6oc8ss%2BvkdXxI3eKST9ybJtbZXsW%2FRhunsMzGPV0X1daSb3ho8vWtPZUvq8nCFAb1EOzVNGJjNdzhdcg5WqVj7%2BZwM2ICyAcTC9tuPFBjqkATLZuk52L12P1yEndrzYqDy3mWHj%2BaQNiDXEjYeiKTwY6MVSDoZMmml9F4R0nc5%2Bm8xtvuloJLltM4lrBmHui5eyM13X3XikXqMY5y7tv0vFNmfqZrJyZNGMFbF4LDGwu%2FHsO6NUILPSpuvisZiKuSY4xXTSDC4WTqP3RnF6YQwz3zfZ1zoBnNxHEGX5EeB9VfwG7sawbbsU133Z5uovwjMPSNCQ&X-Amz-Signature=8b3321924f574aeae626f4620862f9607abe21f4de528b0aa55a2457c4ac4b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZO23CO%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC36hH%2FnlVDF1jVJSAL%2FN5uXVvj4qGWzWLixNjtBrHm%2FQIhALZ7MYod%2BA2psaFfopQ7vvitmgRV4aclbe3CAxJtLFjeKv8DCFEQABoMNjM3NDIzMTgzODA1Igx1icYBhCxiYPpbipAq3ANA%2FLRF3PbYrEjbok1%2FAWRjycEJKf0UMLNp%2F8IAvogxRsJmgWMyAimJU9uF2YOiFwGOjsynTg6d6UcCXN5uDnT96byge7AnnU0b%2FTT2N160ECvXBOy2lqSlC50%2BqEtIO9Ld0ZUSjh%2FVCDC6NvqDaJQknX97d1aploFyP0iT15gOm02xqBMRQlW03DQKoAFHLN%2F6a7pyL%2Bhq2jINcCb6nlZaBzqB5LkPpLLiEsnUbnSoRO4PYi2iKm9LQ7m8VZIYDiJPhe2Csb9p9JwXOSjBbbJ14N4iDjH0aaqkgUe4yfHF3ugLSj%2Fofv4%2BfodSNXXXXBV0A0S%2FGdhz7UZvXAMtAVP1rA5tzLHhu1KDMtrPanFCo%2B2u7Uu89E5Tlq4Ra0ELQryu7FoBwge413Mlho5Eot4WVyAvywfd%2BAMKfoXVl6A%2BgYouVWVJDBvwHxzaJ25XudYQVLkenHV2kipAlUTYggYumEOilPZAwqo3LnAyQg3ETjV%2BaYlFqQ61QK5vavqV1XrY9erD%2FfCG2saqH4cEIw29mS0uv4PdEnc9mhltoKJa9apW8tNe2%2FyNbqwfa0krF89i3I5LGPMi5E7sIjjb%2FhJkse4IVjxrsKK%2FGxjKcr6AAqXJGwh9hHgvEPqMqzC8tuPFBjqkAblKO%2BKeEfQKWpVFEU74Np8PPYeZ9SzeAU3IuTMMvOqQAfhOnCmYCVHh8ecOT%2FX6JZVxyalDz5yWiSxDmKsCZQtwZN3xWFekWPBGvD7UQ4ITQ6%2FkITmwAcdOjGAIuc5Qt3TETeot1NunmpsxsRCCaW0FkkOu%2BNBtIkYC07u%2BMTZzcgmOAFJ95IPe%2BPHPI0v3NdUciebrd6gtBPgQgApDm0Hsd84S&X-Amz-Signature=0112d1dd12d1ee832d47c17609b24b235350df5788a0332f3db8401f46a272f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPSC2OT%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy1Lj4cCYKIWIfh9HqJ1GsWLE27%2By7YvQDB%2BMlI4yLqwIgKWD5Ue3L5kGBooDOcBekOhAiJnWbUE58R2p%2FfeKYB00q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDE%2BZftpm2jTE1uZX8SrcA7gX3TfsWuRcsNU5o0gDj%2FeueUC86Lpzu7IVVMEpCzN1nP37%2B0OZ8Ir6SAn8x%2F2%2FklKCUeDfkcpGLOK%2BLYwm8fX4BqNT4uG1l3N6vsYf92Ex3YvxhtYDlVgwT8pKyaKh3f%2BhHlYkcLJEZ%2BFtGzL%2FW2B0fWausoyQOadDtmhkbsrNo0lKIw9CX2UHVDd36Suk0wZOpAqH4XJot13PBF2LEDgWx1rLWDl2KsxNM3i06U3MHAWsGsW0Uszjae%2Bab1%2BgcSOSFDCAjwpMMnAQW2AUNjRsFb69s7YkHAk%2BCiI6HqJjhDsVczqPKBFlcaRQ0dsKiS%2BjMIhhIplPwcSiuJSg41Qw%2BYyzMMPM%2FUz%2FMFVDmMnE17NzXezdVjBg7Y9PGy2QUHhD%2BP6v%2FJwlio6M8nDkoKBZJIEEPz8PrlF%2FdaW6ALNrAo1Kp8RQ%2FochxGSqSUp97Kk2WD9YWca5EPfZMBBlsbNZmX%2F0eHo8NkNDTDX5yUEZ6Z1%2F3yEKnxT3GENDsMKaKqwqnluXfi2Rcx9CzCl9QIdQjL5gZGNbVrUhU%2FLd9mEX2SqiQDRkxGELXMi5PC1FgDg5MMXiHOO8yHD240R%2FrAbJVciwVR63cTR0EgwMJRz8XkhFpg8jTtCjjUafMLK348UGOqUBMX7KqVzY5OmvB9H2rheVkeGL1ClULWZp3MZu%2BxsIxlHQhJtgdaF7CmJ%2B9SvvJ1XoNjLxy7viAtw3QzLII4UOA6dhqFqHdfOfmwxs2cGuFFNT%2F90x59JgeQsLKS0t9MWMoA6ile9pvvgDVZhty%2BK%2Bfy%2F1GEBCumizSbMCqL2HfQ7W61T03MdJt1%2BTpf1qiGhRSm3%2Fvceo6OEhDWEYlsaXdRXLPkrV&X-Amz-Signature=85a4892575d06a0f77852465d3ab16134cb2c3fc36718ac758870923afeb70a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUQC2IL%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVRh2kMJo2zVnQQ4GKNnY9md%2BxlkpqugvRS9OfW6iIgIhAPlh64T0UNNvMV2z5VqjXbv%2BS4Yvj9fw3JKzQuxFoVxHKv8DCFEQABoMNjM3NDIzMTgzODA1IgyZZJuZU1%2BIG2Fp3pEq3AMJMyrN65l%2BdcaHGdwoJjzcY5PAcu4YpuULrhbugZyoaqS4UCNk8TpXLCmPy0I7wqbj4K7lFPibo%2B9Oz96%2BNtE3c5Th9QOHR0BdX7Boc3WBxwX7ulk6dHzuSNiFj6uboHThfUdf7TUod6MAf2yXOpyx2FYacID5JOqo%2BXk9OLdKMvfzFMZBUp%2BDUQAPt5R2X8ynqFTZpNvcquWLl6pfI811fd2ihcxTfk%2F6s1FU5SoJCwoI9uZh6AiJu8IdM7%2FQE2H1BwgcqbjpVA7SwDZxYHzqsinVsCMwY2bHcLwQFjcn9yY%2FdtR7rE076aE%2B%2BjI8IB6rfKoamT%2FHTfaqxO5nbz0LXhOdERrY3bPMSWFTc737sB4be9OjJF6XqLlF%2FptvuBLQhPtrwv%2FTdkQpjVhHQ%2F5onqC9ziYm3oYhKAlX6ijr0tUeceLn%2Fv8VJpKeY%2FVfT4ifx0dSLmvySw3iLzAIC2tNxw6%2F0p4UD7kCbdK%2BORBGe6GdluYYWplp23hLuKzerlTrHt3FmUpRHM1zDA3YvPzzh5h5d6oc8ss%2BvkdXxI3eKST9ybJtbZXsW%2FRhunsMzGPV0X1daSb3ho8vWtPZUvq8nCFAb1EOzVNGJjNdzhdcg5WqVj7%2BZwM2ICyAcTC9tuPFBjqkATLZuk52L12P1yEndrzYqDy3mWHj%2BaQNiDXEjYeiKTwY6MVSDoZMmml9F4R0nc5%2Bm8xtvuloJLltM4lrBmHui5eyM13X3XikXqMY5y7tv0vFNmfqZrJyZNGMFbF4LDGwu%2FHsO6NUILPSpuvisZiKuSY4xXTSDC4WTqP3RnF6YQwz3zfZ1zoBnNxHEGX5EeB9VfwG7sawbbsU133Z5uovwjMPSNCQ&X-Amz-Signature=050ffedec8f1d094437daefd021a08c8987ae21620099b54db9fb1eacb1162ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
