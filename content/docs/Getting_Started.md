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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXNVLEF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFU1y8PLJOTjGttswzHCBw8s%2FaULEabykluLmFo8cR%2BaAiBeM6QyTSuX60agZUwyAULqFBTgqkTCEt1DWMB%2BjE26PCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGY4bxe865IS6Z%2BqlKtwD5mL3K0mSXAzSPwrvSMCDiUKQJsqZrW2Jp9QzsUUHAZAZ9TdmWdlsn5RJ3WqLab6INirqlhQkW281RpuUa5Nyj8yHSy1OpMHuwoBtKzdf5hDbF1Eu%2BEJdj5m6CX3FnGkYCDjjJ%2F0tm4%2BVYdfjdo1EBfyAY1Xd8ui4t5FhqWmnEpB8NIigKKQXAecQXCfIGoVUw%2FklPqGP7uoIK9re64pydfTU9qezqBRPVzn%2FeStuHgrV1wu%2Bc1dOvvThIZzelo4%2BntH1kn9%2BSbtqIAD8Fo1FGeZr24RlzERn%2F8CNW9XrAQ%2BYQzyULyujSEqGpU0jwqn2LN1oX8f1XH%2B7SMYU9FfCwWD644A8ZXHVHeNTvzEI%2BMSqBckxnfSXXrEXBDpNStlpeVkC0r%2B%2BDJ9526veCiP8hEbbTYhIHRx0DYIb%2BNjB0I0OzwMKBrasiJKmNtu3ijK5CSWqf%2BEAO%2Bdi9FFIChblk5LHzCwWSmdDL9FZ0mdc7K8l1Yywbpaxnjhnp7YVqCTjb0OZSmyIgqydWyigyozO9%2FoKNBmDz3gyv8bL%2FfeVFDbeR9LNpD0MSFjAjWe%2FltA%2Bx9A39MVN%2FNyA8bF9uCWj4BQI%2BedyrmDMIIArjNwQ96xy%2BtcUaGIaxMbsMt8wk%2BTTwAY6pgGuAhvp5cqsBGaXW14psxiH3lHQK6JyMlp4KbzDp5w1dknReV1oUwUEBGV7rCcDFnLi%2BrMwaF4V0URkMV6wtIzVlEa%2BKumW%2BTu0HqL%2BbS1aWH4Cvuan5s1NpKdIWX5BC0hfWff%2FZ6XNv21I9thDBtf0be4mGgdVtbaE5mv0VR%2FnB51eDzTquQqDyP6Z2NFbakGUxGtrEeK0tLqym9b%2BXrYU9H9qd65Z&X-Amz-Signature=d6a750ec48870c44e4d122e47e4317ef2d72f31f6be792293b5731b45304447f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXNVLEF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFU1y8PLJOTjGttswzHCBw8s%2FaULEabykluLmFo8cR%2BaAiBeM6QyTSuX60agZUwyAULqFBTgqkTCEt1DWMB%2BjE26PCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGY4bxe865IS6Z%2BqlKtwD5mL3K0mSXAzSPwrvSMCDiUKQJsqZrW2Jp9QzsUUHAZAZ9TdmWdlsn5RJ3WqLab6INirqlhQkW281RpuUa5Nyj8yHSy1OpMHuwoBtKzdf5hDbF1Eu%2BEJdj5m6CX3FnGkYCDjjJ%2F0tm4%2BVYdfjdo1EBfyAY1Xd8ui4t5FhqWmnEpB8NIigKKQXAecQXCfIGoVUw%2FklPqGP7uoIK9re64pydfTU9qezqBRPVzn%2FeStuHgrV1wu%2Bc1dOvvThIZzelo4%2BntH1kn9%2BSbtqIAD8Fo1FGeZr24RlzERn%2F8CNW9XrAQ%2BYQzyULyujSEqGpU0jwqn2LN1oX8f1XH%2B7SMYU9FfCwWD644A8ZXHVHeNTvzEI%2BMSqBckxnfSXXrEXBDpNStlpeVkC0r%2B%2BDJ9526veCiP8hEbbTYhIHRx0DYIb%2BNjB0I0OzwMKBrasiJKmNtu3ijK5CSWqf%2BEAO%2Bdi9FFIChblk5LHzCwWSmdDL9FZ0mdc7K8l1Yywbpaxnjhnp7YVqCTjb0OZSmyIgqydWyigyozO9%2FoKNBmDz3gyv8bL%2FfeVFDbeR9LNpD0MSFjAjWe%2FltA%2Bx9A39MVN%2FNyA8bF9uCWj4BQI%2BedyrmDMIIArjNwQ96xy%2BtcUaGIaxMbsMt8wk%2BTTwAY6pgGuAhvp5cqsBGaXW14psxiH3lHQK6JyMlp4KbzDp5w1dknReV1oUwUEBGV7rCcDFnLi%2BrMwaF4V0URkMV6wtIzVlEa%2BKumW%2BTu0HqL%2BbS1aWH4Cvuan5s1NpKdIWX5BC0hfWff%2FZ6XNv21I9thDBtf0be4mGgdVtbaE5mv0VR%2FnB51eDzTquQqDyP6Z2NFbakGUxGtrEeK0tLqym9b%2BXrYU9H9qd65Z&X-Amz-Signature=fad470234a30166b9abc7b6e952ba7f64e66a358d39b73579a9ed23c58dfbf7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXNVLEF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFU1y8PLJOTjGttswzHCBw8s%2FaULEabykluLmFo8cR%2BaAiBeM6QyTSuX60agZUwyAULqFBTgqkTCEt1DWMB%2BjE26PCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGY4bxe865IS6Z%2BqlKtwD5mL3K0mSXAzSPwrvSMCDiUKQJsqZrW2Jp9QzsUUHAZAZ9TdmWdlsn5RJ3WqLab6INirqlhQkW281RpuUa5Nyj8yHSy1OpMHuwoBtKzdf5hDbF1Eu%2BEJdj5m6CX3FnGkYCDjjJ%2F0tm4%2BVYdfjdo1EBfyAY1Xd8ui4t5FhqWmnEpB8NIigKKQXAecQXCfIGoVUw%2FklPqGP7uoIK9re64pydfTU9qezqBRPVzn%2FeStuHgrV1wu%2Bc1dOvvThIZzelo4%2BntH1kn9%2BSbtqIAD8Fo1FGeZr24RlzERn%2F8CNW9XrAQ%2BYQzyULyujSEqGpU0jwqn2LN1oX8f1XH%2B7SMYU9FfCwWD644A8ZXHVHeNTvzEI%2BMSqBckxnfSXXrEXBDpNStlpeVkC0r%2B%2BDJ9526veCiP8hEbbTYhIHRx0DYIb%2BNjB0I0OzwMKBrasiJKmNtu3ijK5CSWqf%2BEAO%2Bdi9FFIChblk5LHzCwWSmdDL9FZ0mdc7K8l1Yywbpaxnjhnp7YVqCTjb0OZSmyIgqydWyigyozO9%2FoKNBmDz3gyv8bL%2FfeVFDbeR9LNpD0MSFjAjWe%2FltA%2Bx9A39MVN%2FNyA8bF9uCWj4BQI%2BedyrmDMIIArjNwQ96xy%2BtcUaGIaxMbsMt8wk%2BTTwAY6pgGuAhvp5cqsBGaXW14psxiH3lHQK6JyMlp4KbzDp5w1dknReV1oUwUEBGV7rCcDFnLi%2BrMwaF4V0URkMV6wtIzVlEa%2BKumW%2BTu0HqL%2BbS1aWH4Cvuan5s1NpKdIWX5BC0hfWff%2FZ6XNv21I9thDBtf0be4mGgdVtbaE5mv0VR%2FnB51eDzTquQqDyP6Z2NFbakGUxGtrEeK0tLqym9b%2BXrYU9H9qd65Z&X-Amz-Signature=aed3e82bda977545ba352a3bbe3f81ddcd8133c02d0591abafcbe66c37f0a9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKWHT4QZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFCACrDjCU7Y4Zs%2BfNKiHCyuXc%2FFhITAtlccaPwHXNa7AiEAuwUqYLGJprKGIrcxYulF4OXOyquEY3thbFV%2F7K5cQjMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq8ppuOJYIqPfoiTSrcA7%2B8nL8l3swgzW4%2FnZNOMRgwQGixwDa%2FWtZU7vZkiaYExnzCkdRzv48e6M9ArmUuB9CwI3ICtQWdlltJBR7NKBqGrSE7OImv%2BlZjOd0zlccmbbsQs3XP3tKYQcdgvGey3lyrqAphwx1QQ5dGlCeBwU4dIxxqDZIf2EWKj2mVbInCA69uG438tFLjf0xKARsKhSrM1mlWdxlaKESMN8YUUsrZM3L7wLss2jt6PrO5n52zmhXglQmalS%2Fy7NM2QAX8YN86u3J3orXOPAX6n%2BMFWpTPFH0DhlVAxFmq0nt2o0Dk8thoOgs%2F5K5Xoi5TLCQL%2FH1z7jnQClM8DtwUxheNGkxgeC2v2MQ1TQ3JP3z%2BohO1PaAKRQpgtqxRS%2BsD3pIJZYHhRlksL6JDkzXAZ2xNQvcj3psVNR%2BiNL%2BrHzzjmnSMKcLOxX0%2FPbNQ5JjyAIa3TfHhnybTge2eLCj8e6mY%2FdIgeUZc5Eyo2ynt5gg2iKy6dwmibc9fZbaKOmCQGS65ci8nvMz%2FRj9KjV4R727LHb2h82npwuVpasiJ7VuwkuAsIcaweJ84plvU%2BDPx0RqGB%2FkeaZQy1enWcvPhI%2Bu3KiX1LfACOGAoX6rv7WXPZzyO027mf0epPTOfjROJMJrk08AGOqUB8qlzWZWJ6XeQLHJHZZ5VOu5f5msFBvoc3S6fASlfNYdP1Fe%2Fe1owc%2FIAw8LrdXw3viGw2zq3cA8hi2vX0JVv0%2BqzUczco6xlJIC6uWv9rrg8Ba4cyUAAhTaZnMbcBM%2BN2hob0f5ep1SCp%2Bomk2ITg9whZ0iWvN05YOAGbVjQCmg1VhAjDAeQsKkPQn3MmefnjHQavbFxw3FH9O4UTYDl1TsVt0r5&X-Amz-Signature=7d165069d06b51d14248144e86c1c91ae9816794a51bcdce3b928e0ebb0ce8b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCOVYI53%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIATP%2FSEUYbpF0ZW7N%2BPFi7PJtmPmORIcSS2vvnCvU3jJAiEAsh1eHPnVCciH98ycs32XfIsLdzFE94m7hpoGfl47LMUqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMZF1IGmo8jb4FxtircAy6znRG3f50tMb%2FyXoCG7hpKdjiJWLS39AuslxXzLlPXFReKKuJONtpuuwF7rt7ZjvjV77F%2FnjKSaUjmZJw%2FvCkBW8tfFhd0MnRVVB3m33XKI%2BaYv88aMMTabwUQsZYo%2FqvwHsYLZJx%2BgAKDkA4ebdMEQWe00exYpyN%2FHWLYN7qeWAZyfrGPxGJ50pdiIz7gYx22W83BHAYtXGklM13Naqto0lk921KeAc3M2msg%2BBWM1KyoBHGm8YM6dJKSobUMWggiHtjzuhIH3ypRr%2Bq3G%2Bt6QhGxci2i%2BrfgKocnjK43k%2BAFgT3ofyrjf8fy57lqXjJf%2BYWaBTuFESbESWxDMsHeyY6fnCJrxA3B7%2BPvyS7nSb6AZNxXVoEcq%2FqRsOhjVQkbDg%2BRqB10eGI2BXa0MAQjaosex7i2AwmILAzcBArmpNbSosuXpNqm6y%2B4dFY7RSwdFIQN3XTHD8FNIVGG9zX6nVf25WihxG0o0Bbqxc0L1ob48QJZqvumObqEk1Ge4VlVYZrSdmMXgHHiAJcVvKfTy1sVJDUXB1SDkx%2B%2BHrRv9Zx2m5X463lSin8JDhAX1DiAPLY5ZbnofwTXKAoAWRaXHkaiBHDvFbZz%2BRibTmzyWGAjl9dWsEOD506cMIjl08AGOqUBltUde8y8RVRNDmFhzMXB8XAFTA0I%2BSdaBbx1zzQkJGcG50AuqlRcgflNoJBYHlFTyPEMuclkNOAzWH8TWrGjAbUaBZlNKT2PzaJsY1hNxS6tNK3tQbMvcefSItPdiIQ7oY6kiJtrJWJplHYdn6HHkQJDzcXAOmrewajxj31uj6bqYE8FLCJ8xO3wLgQf7HDrhndXOgyMfUmfVHY9xpaSBjpnNwjl&X-Amz-Signature=06e72b120f7a8a383b4c5eb930cdd4cd91c2f72a5a020d32566f693fbcda99f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXNVLEF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFU1y8PLJOTjGttswzHCBw8s%2FaULEabykluLmFo8cR%2BaAiBeM6QyTSuX60agZUwyAULqFBTgqkTCEt1DWMB%2BjE26PCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGY4bxe865IS6Z%2BqlKtwD5mL3K0mSXAzSPwrvSMCDiUKQJsqZrW2Jp9QzsUUHAZAZ9TdmWdlsn5RJ3WqLab6INirqlhQkW281RpuUa5Nyj8yHSy1OpMHuwoBtKzdf5hDbF1Eu%2BEJdj5m6CX3FnGkYCDjjJ%2F0tm4%2BVYdfjdo1EBfyAY1Xd8ui4t5FhqWmnEpB8NIigKKQXAecQXCfIGoVUw%2FklPqGP7uoIK9re64pydfTU9qezqBRPVzn%2FeStuHgrV1wu%2Bc1dOvvThIZzelo4%2BntH1kn9%2BSbtqIAD8Fo1FGeZr24RlzERn%2F8CNW9XrAQ%2BYQzyULyujSEqGpU0jwqn2LN1oX8f1XH%2B7SMYU9FfCwWD644A8ZXHVHeNTvzEI%2BMSqBckxnfSXXrEXBDpNStlpeVkC0r%2B%2BDJ9526veCiP8hEbbTYhIHRx0DYIb%2BNjB0I0OzwMKBrasiJKmNtu3ijK5CSWqf%2BEAO%2Bdi9FFIChblk5LHzCwWSmdDL9FZ0mdc7K8l1Yywbpaxnjhnp7YVqCTjb0OZSmyIgqydWyigyozO9%2FoKNBmDz3gyv8bL%2FfeVFDbeR9LNpD0MSFjAjWe%2FltA%2Bx9A39MVN%2FNyA8bF9uCWj4BQI%2BedyrmDMIIArjNwQ96xy%2BtcUaGIaxMbsMt8wk%2BTTwAY6pgGuAhvp5cqsBGaXW14psxiH3lHQK6JyMlp4KbzDp5w1dknReV1oUwUEBGV7rCcDFnLi%2BrMwaF4V0URkMV6wtIzVlEa%2BKumW%2BTu0HqL%2BbS1aWH4Cvuan5s1NpKdIWX5BC0hfWff%2FZ6XNv21I9thDBtf0be4mGgdVtbaE5mv0VR%2FnB51eDzTquQqDyP6Z2NFbakGUxGtrEeK0tLqym9b%2BXrYU9H9qd65Z&X-Amz-Signature=a4acad1f9300e1bf18c8edc880e1ebc38047e3de100d608db140d802576a4136&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
