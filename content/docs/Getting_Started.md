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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKSUWQH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHY3lqVDRmZFKenR0MvEgxxw%2Ffalnu3caRWuHRvPcRkAiAP7vO7Yq3PCCqR9J1FfFgZwD83XZbQUfaIKSh6bitAgSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0sC0hr4BGNKzxILKtwD0SLXljw2C3NPIP%2BuAsdxE1VTa1U0xcL%2Fcyggc4O7QCjRP4cReUnzRbKAw%2BQR5IlVC1WHsX3RjKrW6ZYS7pIMoLbYcDvAKlkeRhBGk2n9bd1yazn28ipGH2kRQ5RnZ4ZRtdkCMTEnJLwZLkutQF6SzQB5BZoFsMteg29yVNX%2Bz4oo%2FyCqwBb1F2VD0NI59vD8t8G9ZOyWMHdsTV8Y8QF5NgpbHyS1isR%2Ben4DT6GoVcIAZ1JJX9ktD0%2FvscAsBhEquxh3fRAHq3CbHzbomep2R%2BMFu5he%2FvucXMcXJbzTgCe2xOR%2Bbk%2F4nEmull7zApqNE%2BPT3mjJ4qq%2Bn6EaWDbcye6a0xOggYYVRnx1qGBK%2FD8PWHe5HMEArGYI2fG71tl2%2F9y5il3%2B5UVoOlDEyCC5wO%2FzMPGqAJ08hS5OQKYvKsStSJIcDVRJehMgMWDJLjKaV7nRGUw4B5SCdAC9flb6mK6Lv%2BN4WeiCjkrlFZ8FxXbHR%2BGpqziyKynJaXJM7l%2FtoRlquWLoud3hrZv4yLZG6uQzBI1gbmfzHxCc8YiAnwX5C0%2FTuXnmFDGHwstMhSmVYE%2F9Ywni5XjHg3nc29qmmPajOx5Xs8RoiSgM2leLJUYWX%2BYk7yksLsAbyL4wiKO4wwY6pgGralQ8l%2FMS8CBP5y2JqFJEsVnJRcDP9cV0c9JLP5klAkXiNFH7v%2BuVoRbkkKy70Zxhz11OYH567jly8ao25ayZWhrhCf0eBWvNyBvj8biZSkgz2f2ltB7i2hVH9jHkFVYG6CHDGLKxE%2BWtTK6t8Pf1HFLitUohTyTcSBUhIB8Z2Bs7LoZw74RWdW5idMidK86288Rm2w10eJyzOHFjuHiL%2BYAoHzLs&X-Amz-Signature=1c082bea51c4bd51ee6e9de5ca76b0287e0b443c42e81f6f7c7ecb4e680c3951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKSUWQH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHY3lqVDRmZFKenR0MvEgxxw%2Ffalnu3caRWuHRvPcRkAiAP7vO7Yq3PCCqR9J1FfFgZwD83XZbQUfaIKSh6bitAgSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0sC0hr4BGNKzxILKtwD0SLXljw2C3NPIP%2BuAsdxE1VTa1U0xcL%2Fcyggc4O7QCjRP4cReUnzRbKAw%2BQR5IlVC1WHsX3RjKrW6ZYS7pIMoLbYcDvAKlkeRhBGk2n9bd1yazn28ipGH2kRQ5RnZ4ZRtdkCMTEnJLwZLkutQF6SzQB5BZoFsMteg29yVNX%2Bz4oo%2FyCqwBb1F2VD0NI59vD8t8G9ZOyWMHdsTV8Y8QF5NgpbHyS1isR%2Ben4DT6GoVcIAZ1JJX9ktD0%2FvscAsBhEquxh3fRAHq3CbHzbomep2R%2BMFu5he%2FvucXMcXJbzTgCe2xOR%2Bbk%2F4nEmull7zApqNE%2BPT3mjJ4qq%2Bn6EaWDbcye6a0xOggYYVRnx1qGBK%2FD8PWHe5HMEArGYI2fG71tl2%2F9y5il3%2B5UVoOlDEyCC5wO%2FzMPGqAJ08hS5OQKYvKsStSJIcDVRJehMgMWDJLjKaV7nRGUw4B5SCdAC9flb6mK6Lv%2BN4WeiCjkrlFZ8FxXbHR%2BGpqziyKynJaXJM7l%2FtoRlquWLoud3hrZv4yLZG6uQzBI1gbmfzHxCc8YiAnwX5C0%2FTuXnmFDGHwstMhSmVYE%2F9Ywni5XjHg3nc29qmmPajOx5Xs8RoiSgM2leLJUYWX%2BYk7yksLsAbyL4wiKO4wwY6pgGralQ8l%2FMS8CBP5y2JqFJEsVnJRcDP9cV0c9JLP5klAkXiNFH7v%2BuVoRbkkKy70Zxhz11OYH567jly8ao25ayZWhrhCf0eBWvNyBvj8biZSkgz2f2ltB7i2hVH9jHkFVYG6CHDGLKxE%2BWtTK6t8Pf1HFLitUohTyTcSBUhIB8Z2Bs7LoZw74RWdW5idMidK86288Rm2w10eJyzOHFjuHiL%2BYAoHzLs&X-Amz-Signature=54ea04bf7a2f4223644bac1dfe9f54b0fd8583c528bbc9b594bcc2ab6a381a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKSUWQH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHY3lqVDRmZFKenR0MvEgxxw%2Ffalnu3caRWuHRvPcRkAiAP7vO7Yq3PCCqR9J1FfFgZwD83XZbQUfaIKSh6bitAgSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0sC0hr4BGNKzxILKtwD0SLXljw2C3NPIP%2BuAsdxE1VTa1U0xcL%2Fcyggc4O7QCjRP4cReUnzRbKAw%2BQR5IlVC1WHsX3RjKrW6ZYS7pIMoLbYcDvAKlkeRhBGk2n9bd1yazn28ipGH2kRQ5RnZ4ZRtdkCMTEnJLwZLkutQF6SzQB5BZoFsMteg29yVNX%2Bz4oo%2FyCqwBb1F2VD0NI59vD8t8G9ZOyWMHdsTV8Y8QF5NgpbHyS1isR%2Ben4DT6GoVcIAZ1JJX9ktD0%2FvscAsBhEquxh3fRAHq3CbHzbomep2R%2BMFu5he%2FvucXMcXJbzTgCe2xOR%2Bbk%2F4nEmull7zApqNE%2BPT3mjJ4qq%2Bn6EaWDbcye6a0xOggYYVRnx1qGBK%2FD8PWHe5HMEArGYI2fG71tl2%2F9y5il3%2B5UVoOlDEyCC5wO%2FzMPGqAJ08hS5OQKYvKsStSJIcDVRJehMgMWDJLjKaV7nRGUw4B5SCdAC9flb6mK6Lv%2BN4WeiCjkrlFZ8FxXbHR%2BGpqziyKynJaXJM7l%2FtoRlquWLoud3hrZv4yLZG6uQzBI1gbmfzHxCc8YiAnwX5C0%2FTuXnmFDGHwstMhSmVYE%2F9Ywni5XjHg3nc29qmmPajOx5Xs8RoiSgM2leLJUYWX%2BYk7yksLsAbyL4wiKO4wwY6pgGralQ8l%2FMS8CBP5y2JqFJEsVnJRcDP9cV0c9JLP5klAkXiNFH7v%2BuVoRbkkKy70Zxhz11OYH567jly8ao25ayZWhrhCf0eBWvNyBvj8biZSkgz2f2ltB7i2hVH9jHkFVYG6CHDGLKxE%2BWtTK6t8Pf1HFLitUohTyTcSBUhIB8Z2Bs7LoZw74RWdW5idMidK86288Rm2w10eJyzOHFjuHiL%2BYAoHzLs&X-Amz-Signature=400f1819c04633484020d589e1c849f1dda6f4838c73181769bca3915d6eb000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V5CRRQZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BZmWZv8S0rwiyb%2FzrwvteOzwkn0gETq%2BDZ265RrapDgIgS8A0yVMUzYQ9nZ9Lqo8jUAGT5%2FG0KPHP%2FX5dZIcvVjEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZloZhT2%2FgGSyzchyrcA%2BGTUg2qzeopDxMfT9RpLXG62R4rsYhbosjlvkYEQyI64YIk9ZEcLOR57zaV6uju3iPKLgD3QHJlUyKzMRRSVPRqCoVGQmLc4wqgno4aYMQwxkbyAoALYO2wulWQhzd0IzBtHY3F7CaB5l6Eg3PzrgmxSnhKi%2F7cQpo7pn6fTLlV6aTN%2FTFf4t8TB9IWytxFbozLImQUgcOx0nol0I5AxM0K31S7tC7YfYaaKAd%2FlNZRN2LD95zDQOYcZoZlHp9P2pXNmPtjFYZe2QzlFYOo7lcJxal7eRq8AiTdx8NvFiVecDYnrqUEhkMawKkFaqWc2cZcevMCrphIlBLEqghWwNkjkR0My1zTyzoHufxiq8AUXRthoR4uPTjCqdDvx4D%2BduhhvaJlhE7iV93q1%2BRztG%2FsPh72ydXXPlQbcfVZ5zChApDBbcwpJ7%2Fy7UIVaNqsnGkn78JreOPsjnyqckCLhTa%2FLxxw%2Fm3TRpr6Xf6tyoC4GMr0CpOsRyPSsOXpuQxWGyDD5pPN6SJtJSYvtrUcJ3wWBMSQnll5EdD7njUOKyy0OEOeikLDd8XFWYoejrshu%2Bhw5Vajhd8X%2B91lbswdOItvkiDG3MvJPbQvp7FEN4dwTYnI%2FYKmWeo7ZytJMPyjuMMGOqUBFIHceSMYSXbkbI5Z9X3%2FyiCWjgPkkasffatoPlOTEAx39qXyis5ZaXkFfWs5qQ2MOcRaOHn9%2BKyVVB9GeDYUTKZvWMxoSEn5mI8kCO%2B7oa3OOiduaXZlvKDJWs1euGjcJkG9GFyiQIuuuZuRz6dLGLndKTiA2JQxerGqT3v7ieYaMtCvwWtslWRkaQJF%2BBSdkAtDZ746BC66kraP6X4GlHxQ3ydf&X-Amz-Signature=be79a2cd63100b36907aec688c07dd460cd8ea3325d73304db2fcd1992d4fac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T74SFO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQceHMoAjGAftT5c45%2Fb1v4twh8Tf%2F9nouNmodVNZmTQIhAJjB%2BZXIDmFrN2DuZdHKPWMPxswZ%2FLBxNbf0jWFPPV1UKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrup0%2FY%2Fg9h3NTwCMq3APeut%2F9C1mFebvbdbuO%2Fb6ZNEFqolxZkR58I83bGcZZ3g60FTYCSLec93msp2Bmn0bLrChZgjY%2FtxZIRHlfNtiOqNbyy2HN45Audw%2BMmSQXhAUwoxCtjYyhA%2Fps8%2B5dNIXce4fq1PSO4aA81j5s9px%2BkMYza34Pzn%2FLjbyMGc5fL698mPbYVgXiHnM8%2BY3C9Ljo%2BMqnVjVEaSjrflnzLC3o8aZwQAJCPmNZ090x5TopakRDUMwVllB5Jm41wF%2BzyzlNagI3gtlMAsA9cGb%2B7DoNl8oXjbK%2B7RBE80KD4%2BcQfedu%2BLygyGxOI%2FHW0qzRapjlgyKofWhlLx%2Fc9eT0DpsKSksa70%2F5U7T78S29kO1KLj4ale%2FPaarR4t70b8skPiXbrhjmvkwecSO0QvPXmJbXHYOwVTAu4ie%2FzaJ46EXjV2Zfe7ti2JnTNDp0esd%2FWxJ%2B5r%2FPNHMcT%2ByWFpHkhVXvwNXYZeLqU0js%2Fgq0tGy3qTiYBaQM7496FfQq64LsefrU3ugNkyja5HLUc9dxkwqsJdP2BUn0n7AaroGUwDoLA34hhjDvXZmp2R35fDKlQsXMChjDEXzb5ovC7dQ8vi%2Bu0HCtJ6orSIKPkDQXpAwxxZzROpY4Xtkfnuxe8DDepLjDBjqkAbtwXbp31ahijDqbqmj5vA6DIcWfq2%2FfnjjhE6bGHmbE59Tm53EF6ZAEml0w3K6vxE2o%2FIZ1gcetteiJwGigyE0EBngtUC60YkkzYvy9Um31SMvfZcWCspiixle0i%2BqD%2BH2j8eACP3ohB2pY8iH4sQ%2FnkIfUzEP9YFNawOqcCdXx0l4TR65g%2FpVvagM1PNR6fYo9wRV4a4xRalNE7JblI4aRiDbe&X-Amz-Signature=8bab11ee5b6630aecc5bea2d6921ae1df77607d9ebb5699f48ac2db6fe15b41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKSUWQH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHY3lqVDRmZFKenR0MvEgxxw%2Ffalnu3caRWuHRvPcRkAiAP7vO7Yq3PCCqR9J1FfFgZwD83XZbQUfaIKSh6bitAgSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0sC0hr4BGNKzxILKtwD0SLXljw2C3NPIP%2BuAsdxE1VTa1U0xcL%2Fcyggc4O7QCjRP4cReUnzRbKAw%2BQR5IlVC1WHsX3RjKrW6ZYS7pIMoLbYcDvAKlkeRhBGk2n9bd1yazn28ipGH2kRQ5RnZ4ZRtdkCMTEnJLwZLkutQF6SzQB5BZoFsMteg29yVNX%2Bz4oo%2FyCqwBb1F2VD0NI59vD8t8G9ZOyWMHdsTV8Y8QF5NgpbHyS1isR%2Ben4DT6GoVcIAZ1JJX9ktD0%2FvscAsBhEquxh3fRAHq3CbHzbomep2R%2BMFu5he%2FvucXMcXJbzTgCe2xOR%2Bbk%2F4nEmull7zApqNE%2BPT3mjJ4qq%2Bn6EaWDbcye6a0xOggYYVRnx1qGBK%2FD8PWHe5HMEArGYI2fG71tl2%2F9y5il3%2B5UVoOlDEyCC5wO%2FzMPGqAJ08hS5OQKYvKsStSJIcDVRJehMgMWDJLjKaV7nRGUw4B5SCdAC9flb6mK6Lv%2BN4WeiCjkrlFZ8FxXbHR%2BGpqziyKynJaXJM7l%2FtoRlquWLoud3hrZv4yLZG6uQzBI1gbmfzHxCc8YiAnwX5C0%2FTuXnmFDGHwstMhSmVYE%2F9Ywni5XjHg3nc29qmmPajOx5Xs8RoiSgM2leLJUYWX%2BYk7yksLsAbyL4wiKO4wwY6pgGralQ8l%2FMS8CBP5y2JqFJEsVnJRcDP9cV0c9JLP5klAkXiNFH7v%2BuVoRbkkKy70Zxhz11OYH567jly8ao25ayZWhrhCf0eBWvNyBvj8biZSkgz2f2ltB7i2hVH9jHkFVYG6CHDGLKxE%2BWtTK6t8Pf1HFLitUohTyTcSBUhIB8Z2Bs7LoZw74RWdW5idMidK86288Rm2w10eJyzOHFjuHiL%2BYAoHzLs&X-Amz-Signature=692f94edb7ade2e4e382b9088bcc40531c7413b56977f82b183a105b39959681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
