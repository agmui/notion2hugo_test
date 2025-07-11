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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEGWOYRA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFblkkiaulAIWdobz5fv88HDAhQrBfjUCpDQe7Aw7YihAiEA4xneBI3MkeWfh7glp%2FDsyv74yTaEeG4cxvVO0UgcNjEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB6oCNBVHcShyhn7CrcA1NnusYRVCRjBlxMsjlacfeAUZN3RmAxCUH8l%2BBJVxViKu08bfsVJbKcXQhhcz62QwADzmw0FSeVGkWCt1lBH1OjLydiR8pFKKEQCG2ehc7rRw5rwK5Upxwe9CYqHtBNMl9XGMGlc7A7WF0HM13tTxkWOOcv%2FBFOZVzpR1ziXNu0vDtWq1Sly12aBdWj8vFed7654ObuITyRBVaCHnROuUYa2bbP4FpcEGOzgFeNE28IpiKFpnaDK4EQLtp21K2zIUpuAh4HGoV3w5KqqkDu9rfAJLjwGTjIp9Fg1oo2Ap7SLp0hPYpIiKnd3UBZOjX3veasxF8Gh24ufnQj03CfVVaegqtCXtwA%2FfQGM%2FUV4fFwZoOPERcwjNtd%2BPN%2BF7dVqSgNP7IxaDs9zngcIOw7Jd1A63EpNmOsP91BtdLtTOQ9FqOD18gBQjG2c1NACvC41kJyYRzZNlMCesE8QtC9D17Lje%2Fms9GHtN%2FvsXJ4sObPWPadzVF091Yqvkt7MuIEEFYKpI8UnklRgkSXXfdp2RrvZbbDZqvLI4O%2FC%2BGHlYv5CrZXySKIVSG8KlKCxW7lrZ6MKED8P%2FxXY75xaxvKLcomwAAPi1L8%2FkWWGknV%2By0ZuYr76QFUMYpwbcdnMNrSwsMGOqUBvIhFiiiw6WzFZeCBX7%2BT1wbPJcbgalhC69JfR17VHBuqewacZ%2FY5bwuVFRN9imkiqMR7rZoZAo9zGL%2FWtJPLU0PXeIHjQaAF6b2uZwAOGqj4ETTueHV1fVSZ%2Fg%2Fg63ddGyiDFxHlAclpv2s5RgIr57f5%2Boc5w%2Brc%2BYiY6DOwazFU4tMmOsZ11KuMHq2F48pSy3i%2Bod0WGlP19Sg8xHps83mZQX8R&X-Amz-Signature=5a2a1473dda912d8acdbd411e80f6c4267a0bd831b1827fc7067b4402427ab55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEGWOYRA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFblkkiaulAIWdobz5fv88HDAhQrBfjUCpDQe7Aw7YihAiEA4xneBI3MkeWfh7glp%2FDsyv74yTaEeG4cxvVO0UgcNjEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB6oCNBVHcShyhn7CrcA1NnusYRVCRjBlxMsjlacfeAUZN3RmAxCUH8l%2BBJVxViKu08bfsVJbKcXQhhcz62QwADzmw0FSeVGkWCt1lBH1OjLydiR8pFKKEQCG2ehc7rRw5rwK5Upxwe9CYqHtBNMl9XGMGlc7A7WF0HM13tTxkWOOcv%2FBFOZVzpR1ziXNu0vDtWq1Sly12aBdWj8vFed7654ObuITyRBVaCHnROuUYa2bbP4FpcEGOzgFeNE28IpiKFpnaDK4EQLtp21K2zIUpuAh4HGoV3w5KqqkDu9rfAJLjwGTjIp9Fg1oo2Ap7SLp0hPYpIiKnd3UBZOjX3veasxF8Gh24ufnQj03CfVVaegqtCXtwA%2FfQGM%2FUV4fFwZoOPERcwjNtd%2BPN%2BF7dVqSgNP7IxaDs9zngcIOw7Jd1A63EpNmOsP91BtdLtTOQ9FqOD18gBQjG2c1NACvC41kJyYRzZNlMCesE8QtC9D17Lje%2Fms9GHtN%2FvsXJ4sObPWPadzVF091Yqvkt7MuIEEFYKpI8UnklRgkSXXfdp2RrvZbbDZqvLI4O%2FC%2BGHlYv5CrZXySKIVSG8KlKCxW7lrZ6MKED8P%2FxXY75xaxvKLcomwAAPi1L8%2FkWWGknV%2By0ZuYr76QFUMYpwbcdnMNrSwsMGOqUBvIhFiiiw6WzFZeCBX7%2BT1wbPJcbgalhC69JfR17VHBuqewacZ%2FY5bwuVFRN9imkiqMR7rZoZAo9zGL%2FWtJPLU0PXeIHjQaAF6b2uZwAOGqj4ETTueHV1fVSZ%2Fg%2Fg63ddGyiDFxHlAclpv2s5RgIr57f5%2Boc5w%2Brc%2BYiY6DOwazFU4tMmOsZ11KuMHq2F48pSy3i%2Bod0WGlP19Sg8xHps83mZQX8R&X-Amz-Signature=4f4f269dabbed4927f2e843104952fe3c252c03e11b9ab890357e1d7ea41ce9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEGWOYRA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFblkkiaulAIWdobz5fv88HDAhQrBfjUCpDQe7Aw7YihAiEA4xneBI3MkeWfh7glp%2FDsyv74yTaEeG4cxvVO0UgcNjEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB6oCNBVHcShyhn7CrcA1NnusYRVCRjBlxMsjlacfeAUZN3RmAxCUH8l%2BBJVxViKu08bfsVJbKcXQhhcz62QwADzmw0FSeVGkWCt1lBH1OjLydiR8pFKKEQCG2ehc7rRw5rwK5Upxwe9CYqHtBNMl9XGMGlc7A7WF0HM13tTxkWOOcv%2FBFOZVzpR1ziXNu0vDtWq1Sly12aBdWj8vFed7654ObuITyRBVaCHnROuUYa2bbP4FpcEGOzgFeNE28IpiKFpnaDK4EQLtp21K2zIUpuAh4HGoV3w5KqqkDu9rfAJLjwGTjIp9Fg1oo2Ap7SLp0hPYpIiKnd3UBZOjX3veasxF8Gh24ufnQj03CfVVaegqtCXtwA%2FfQGM%2FUV4fFwZoOPERcwjNtd%2BPN%2BF7dVqSgNP7IxaDs9zngcIOw7Jd1A63EpNmOsP91BtdLtTOQ9FqOD18gBQjG2c1NACvC41kJyYRzZNlMCesE8QtC9D17Lje%2Fms9GHtN%2FvsXJ4sObPWPadzVF091Yqvkt7MuIEEFYKpI8UnklRgkSXXfdp2RrvZbbDZqvLI4O%2FC%2BGHlYv5CrZXySKIVSG8KlKCxW7lrZ6MKED8P%2FxXY75xaxvKLcomwAAPi1L8%2FkWWGknV%2By0ZuYr76QFUMYpwbcdnMNrSwsMGOqUBvIhFiiiw6WzFZeCBX7%2BT1wbPJcbgalhC69JfR17VHBuqewacZ%2FY5bwuVFRN9imkiqMR7rZoZAo9zGL%2FWtJPLU0PXeIHjQaAF6b2uZwAOGqj4ETTueHV1fVSZ%2Fg%2Fg63ddGyiDFxHlAclpv2s5RgIr57f5%2Boc5w%2Brc%2BYiY6DOwazFU4tMmOsZ11KuMHq2F48pSy3i%2Bod0WGlP19Sg8xHps83mZQX8R&X-Amz-Signature=f621f6c8896079725b0a6d9525a2ad272a517ff973d6e7ddd60156f80552634b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMKTLE6A%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaBRjpLF4EliNKmzg5%2FQYr2LeGVPorVGLf9m7yDLXUhAiATz7omwgg0%2BPcfOrWzWAyw95fCgnmXJcAb3eeHlyaqaSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZg0Y1Tc2FRnQ4SmLKtwDsgQG8AvPZgy1Y1JpDD8qd7WRWXJmtm9pldZkKyIc%2BI6qD%2B1Mf8TkTMUIaK%2FQ1jaTtb9%2FzXIQThG0vj1F3dukmT%2FZjnrJ9s7pgZ5oBHkbiY6vKkLrC7Qbh3hyOgaSVmdOgi3nR2FPJypXpkxQnWUvEfpZT%2BG8gc95vPC1NzpBEWze4KISFDbxupp4xnDW%2BhRxyFFSMdi9UfsjnnGr%2F7uAfF%2FshrtGFnw2w9VrSSQSvJqfne89A3c5KWu2NlyiMg9QRB0lhZku8oin4O2lD%2FgTcsmilojJpxMy19fL7%2FQlH5XAEXe4tEsR3IDzCm9LjpJ8pcuMZDiOw5LVXtYy8UZRhg%2Bj8JzpTOCpl03lorFgHpChe5%2F7jp2TYKN6hFnoMukXNGOl3mEZTljdFzCagGoZx8ZAOFN5dKBBJKrtYgTQySUa3uZxKWYM8HsdNfGabLM5DpMVjYNKLGU8qsCYXoLIPDzEEnc7WHpQrWoWg89cGxlZKj7fePIxMMy3qL9e2jilG5xqF9%2FRNqeBLgmajmuNUS1y8yaoyyw7P%2FLJsQLwTRlEWNurUo0mmMQi3hvvsNCDpufg%2FIGiLgiuHnF9La3sD0jvpekDP%2Fj2JvIX7YQ66g9TIadhnFtaJ3oE2mowo9LCwwY6pgH4Ovv%2BofJpwAG8aNYLOCJOrsJieyA3f3Do%2B09PHCx8TDJd79SyvxEYx3RY288gBnZt7Yuss%2FgbhDwPGt%2BGbq2V7QbfWjkTEIcqOiT7D3fsDfQVGVj9kEGR0LJBckFBwHJQvfo%2FZXEufAvMsPsJZYS65XoSAEX0S8tI7scQ%2BpqmPS%2FiglBmk6znLWDygH6oHANg3GQ5t4ZuX3wGUyQWC9mDJ2e58QX2&X-Amz-Signature=c61dcb240722b00e0aae0b3fad7db61c3e8260043677e85dfe4a3356df20fca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFREL2NA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeboye2m2T%2BC3af3Ti7E8B9sq0n2mAdnUKBselME3OQAiBYwyHlNb6wibstp%2FLb%2Fzs8mwJneMGpWSZH%2Fig0gMTrryqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Efti7BThkoX2d8HKtwD8%2FQL0DmIcEBNQCRBLs9RnuNDm7%2BzPozWeU%2B37gHAzaWyQu3vvXlpkSEcYZQDHuSjeU4Io5IvDiLzmDQPL2oBQZD7Ub7HpgILKpywtlSKySLUNPcVf%2FMUxH1BevNMkXcwTEvJJtWg%2BNpZT6qlXqAooPPTCt1CiI2FJ7vG7Z3ETknzBHg0iOA56QPj8k6qH5D1UojgC7AMafmN8BtCZh80%2Bj7jFlwfEAZsJ%2FxfB7uKFzgE1yZYfkuVOyr%2BiH%2F6VaPM7%2BklktwZK5bpVkvf5daLjFFwc3CNSwug0ezncU0CkAGRqNw%2Bd0oXD6wMnjIy%2B0V8jsi%2BenQOGOSrgnspGMzQOH1qLVuezQzylYthtSaqKfNYAf4JPbm0AfwCdojsnMP8YkgfXSW%2BlfZqvT6xYHGX3KtQLt9xNVini20%2BVLTk1twU9Bb4F6MTM%2BoNkvqcRdvJ0Bm01quqaJLwchHHjWsf9MvroddhjD8TRvJChFGroH%2FmztI3au%2BYQhFYhXCxqKsLZk%2F34T%2F2%2B2nyuptSxQKQU02qWj84ygNzIV9g0qK6txhw%2BnRcYGQOTGxVxJpu7YIMWd1NOqjemGzV4mtvFLBJe6HQRcfYtPGpOyFv6r%2ByFbTJeyG7tjFhccyn%2FHgwtdPCwwY6pgGXrVwMANm%2FTXMYYwYmsaCSmYylqAowoQPj9wcmJRGeSjiuX%2BLAqlSV6DsWp6irLQXfARNy8sjPpKwMbk59VEgd%2BZd0WlBbUwx11LUvOK4VvVWg5nNpJK8lzQDyB%2Bpell%2BopzvnYITKJIs7Zk7eCU61Vvs%2BI%2FLC79b%2B381OJZy8%2Bdi1W%2BxO4A2VfkXHUf8C2ZsfIhqhlUpWhXwGZDJoMyIbUNMDJ4wo&X-Amz-Signature=23debab75b2359b9c7d9d278b6f5e2492d19b2162094d061790027297768c252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEGWOYRA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFblkkiaulAIWdobz5fv88HDAhQrBfjUCpDQe7Aw7YihAiEA4xneBI3MkeWfh7glp%2FDsyv74yTaEeG4cxvVO0UgcNjEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB6oCNBVHcShyhn7CrcA1NnusYRVCRjBlxMsjlacfeAUZN3RmAxCUH8l%2BBJVxViKu08bfsVJbKcXQhhcz62QwADzmw0FSeVGkWCt1lBH1OjLydiR8pFKKEQCG2ehc7rRw5rwK5Upxwe9CYqHtBNMl9XGMGlc7A7WF0HM13tTxkWOOcv%2FBFOZVzpR1ziXNu0vDtWq1Sly12aBdWj8vFed7654ObuITyRBVaCHnROuUYa2bbP4FpcEGOzgFeNE28IpiKFpnaDK4EQLtp21K2zIUpuAh4HGoV3w5KqqkDu9rfAJLjwGTjIp9Fg1oo2Ap7SLp0hPYpIiKnd3UBZOjX3veasxF8Gh24ufnQj03CfVVaegqtCXtwA%2FfQGM%2FUV4fFwZoOPERcwjNtd%2BPN%2BF7dVqSgNP7IxaDs9zngcIOw7Jd1A63EpNmOsP91BtdLtTOQ9FqOD18gBQjG2c1NACvC41kJyYRzZNlMCesE8QtC9D17Lje%2Fms9GHtN%2FvsXJ4sObPWPadzVF091Yqvkt7MuIEEFYKpI8UnklRgkSXXfdp2RrvZbbDZqvLI4O%2FC%2BGHlYv5CrZXySKIVSG8KlKCxW7lrZ6MKED8P%2FxXY75xaxvKLcomwAAPi1L8%2FkWWGknV%2By0ZuYr76QFUMYpwbcdnMNrSwsMGOqUBvIhFiiiw6WzFZeCBX7%2BT1wbPJcbgalhC69JfR17VHBuqewacZ%2FY5bwuVFRN9imkiqMR7rZoZAo9zGL%2FWtJPLU0PXeIHjQaAF6b2uZwAOGqj4ETTueHV1fVSZ%2Fg%2Fg63ddGyiDFxHlAclpv2s5RgIr57f5%2Boc5w%2Brc%2BYiY6DOwazFU4tMmOsZ11KuMHq2F48pSy3i%2Bod0WGlP19Sg8xHps83mZQX8R&X-Amz-Signature=0f21cfd59326ed7b0e15484b70c71f3e06c577a5178c3e0b336ac112c6aa8885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
