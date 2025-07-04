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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6GWCKJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBxuOJ7TkTm2SnFhVbNoJOZDisqUKMIJjzCrkwvYiaI0AiEAzcdMXjuHPm6xngnDOlw7aBKZxPzJzOO4uS6uOo8nLUUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDATl7Tl0LZtwY3EYFyrcA00kggskyWUFScX5fs2b3rVPk07YCfBgDZjo3JI8l0UhT4ovrw0Hys6DqHh1j772ZpyublwZ5oSDBXU4ULpEwMJEQIWIluIwv9j0YvHpWV0hNd46v8sFqDckB%2B4Ch23tn1aoTz3Lhvng0CH0SVlSDxJs6TUORIQSwjes%2FNFFbdvtu%2BbcLkjAwpFde9eAGvvB5bAm4tnBrxng1jkV34V7k3mEXtJ9052eshQmWvDClvkPWlnrOHaQeQ0oKTeKAGqAuPd5JBpQZIf2tlACHUOjdqguy4pwGBIlMUXgwAZClr2EZbRAnjgcrtFcqokXzKW51JjaUVU0d8hKshIoIy8ZcZZxQDFswDA4VB3UUL3qGvRdCglFoW7sCo0iSRbpFRIJ8NvuyZUCNdXc%2FtM8WY%2BNW9ncaMp8X4wEw1YXZckXYa1XCN9EYzPCL92R7X%2FRjBzKac0RYGI4uLkPuquihWO%2B2SSjBSG0CpyCq8GpqF3yPODvalwaT30JvpU8vtpf9gUqGO%2Bs%2Fmju4RPXnKLQKLB34eudnjXhAt%2F6jbfxZ5ol%2FJ6UbNNXnujp0Zlka1nDpwfYrik7eIOPM0vnXfGVE1Su89SqGzzZf4FMiIB2YlJpL1zeqSHIxYO5T8oo%2FTtIMM%2BMnsMGOqUBjij20GPA42CAI6JaxaqBoxletAutyUD1UENKZqKvgXzH1uqHw2kLvi8wd%2FS2Y3KnI5SYznIzAzLps17Vutvq6RKqzvbFlEd6Qvenrbniu233NPK%2F1tM4LKfx%2FgBeychHgw88EXxTYcX7FhjE1kZ30VtgKoPLZxE3akQMv4A8FjklZX%2Baa4p%2FLRtkTCS%2BiZ91OOTx2e523SXTdYKfyR71yKvhvmlS&X-Amz-Signature=342de3974906f625ab78b147acd2ca7231eb79a126f7115103ef689dd85e8b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6GWCKJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBxuOJ7TkTm2SnFhVbNoJOZDisqUKMIJjzCrkwvYiaI0AiEAzcdMXjuHPm6xngnDOlw7aBKZxPzJzOO4uS6uOo8nLUUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDATl7Tl0LZtwY3EYFyrcA00kggskyWUFScX5fs2b3rVPk07YCfBgDZjo3JI8l0UhT4ovrw0Hys6DqHh1j772ZpyublwZ5oSDBXU4ULpEwMJEQIWIluIwv9j0YvHpWV0hNd46v8sFqDckB%2B4Ch23tn1aoTz3Lhvng0CH0SVlSDxJs6TUORIQSwjes%2FNFFbdvtu%2BbcLkjAwpFde9eAGvvB5bAm4tnBrxng1jkV34V7k3mEXtJ9052eshQmWvDClvkPWlnrOHaQeQ0oKTeKAGqAuPd5JBpQZIf2tlACHUOjdqguy4pwGBIlMUXgwAZClr2EZbRAnjgcrtFcqokXzKW51JjaUVU0d8hKshIoIy8ZcZZxQDFswDA4VB3UUL3qGvRdCglFoW7sCo0iSRbpFRIJ8NvuyZUCNdXc%2FtM8WY%2BNW9ncaMp8X4wEw1YXZckXYa1XCN9EYzPCL92R7X%2FRjBzKac0RYGI4uLkPuquihWO%2B2SSjBSG0CpyCq8GpqF3yPODvalwaT30JvpU8vtpf9gUqGO%2Bs%2Fmju4RPXnKLQKLB34eudnjXhAt%2F6jbfxZ5ol%2FJ6UbNNXnujp0Zlka1nDpwfYrik7eIOPM0vnXfGVE1Su89SqGzzZf4FMiIB2YlJpL1zeqSHIxYO5T8oo%2FTtIMM%2BMnsMGOqUBjij20GPA42CAI6JaxaqBoxletAutyUD1UENKZqKvgXzH1uqHw2kLvi8wd%2FS2Y3KnI5SYznIzAzLps17Vutvq6RKqzvbFlEd6Qvenrbniu233NPK%2F1tM4LKfx%2FgBeychHgw88EXxTYcX7FhjE1kZ30VtgKoPLZxE3akQMv4A8FjklZX%2Baa4p%2FLRtkTCS%2BiZ91OOTx2e523SXTdYKfyR71yKvhvmlS&X-Amz-Signature=31b0695c8d1f76137d954e5398dcc3e3b2c682d10022605b19fb5d2906d8b3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6GWCKJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBxuOJ7TkTm2SnFhVbNoJOZDisqUKMIJjzCrkwvYiaI0AiEAzcdMXjuHPm6xngnDOlw7aBKZxPzJzOO4uS6uOo8nLUUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDATl7Tl0LZtwY3EYFyrcA00kggskyWUFScX5fs2b3rVPk07YCfBgDZjo3JI8l0UhT4ovrw0Hys6DqHh1j772ZpyublwZ5oSDBXU4ULpEwMJEQIWIluIwv9j0YvHpWV0hNd46v8sFqDckB%2B4Ch23tn1aoTz3Lhvng0CH0SVlSDxJs6TUORIQSwjes%2FNFFbdvtu%2BbcLkjAwpFde9eAGvvB5bAm4tnBrxng1jkV34V7k3mEXtJ9052eshQmWvDClvkPWlnrOHaQeQ0oKTeKAGqAuPd5JBpQZIf2tlACHUOjdqguy4pwGBIlMUXgwAZClr2EZbRAnjgcrtFcqokXzKW51JjaUVU0d8hKshIoIy8ZcZZxQDFswDA4VB3UUL3qGvRdCglFoW7sCo0iSRbpFRIJ8NvuyZUCNdXc%2FtM8WY%2BNW9ncaMp8X4wEw1YXZckXYa1XCN9EYzPCL92R7X%2FRjBzKac0RYGI4uLkPuquihWO%2B2SSjBSG0CpyCq8GpqF3yPODvalwaT30JvpU8vtpf9gUqGO%2Bs%2Fmju4RPXnKLQKLB34eudnjXhAt%2F6jbfxZ5ol%2FJ6UbNNXnujp0Zlka1nDpwfYrik7eIOPM0vnXfGVE1Su89SqGzzZf4FMiIB2YlJpL1zeqSHIxYO5T8oo%2FTtIMM%2BMnsMGOqUBjij20GPA42CAI6JaxaqBoxletAutyUD1UENKZqKvgXzH1uqHw2kLvi8wd%2FS2Y3KnI5SYznIzAzLps17Vutvq6RKqzvbFlEd6Qvenrbniu233NPK%2F1tM4LKfx%2FgBeychHgw88EXxTYcX7FhjE1kZ30VtgKoPLZxE3akQMv4A8FjklZX%2Baa4p%2FLRtkTCS%2BiZ91OOTx2e523SXTdYKfyR71yKvhvmlS&X-Amz-Signature=4b8302c3f5e1755b452f74fdcb1f302c1be90d095ffb313648ba3cb580389919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673U4VYS2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIG73v5tn7owAbqK977tA4LmXLXkTdjUpF5Qk%2FiE8ZxJPAiAPGjZedPjKwXmZktDrVNKFi21ggW1cKGryKSoYkR0Q3yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwoEXL3prR92xb9GpKtwDjZOnrVY1MDy4sQj6Ki3EyhtswVr6CeQxcYH%2FINLtnikpaj9NU5aB6saxNoTXk23aWj8RzpboNC%2FgAqqZ7kNxA2GsgT73Vv9fsRz9gDHZPJtKTLU90%2Bnuv4gd25VdUcgptkU906O%2B2usR9gv5Kgn0nZZTSYr3hfoj4mtDGxjkjvJsvtBJxE9G8PWd%2FbltBMda3a63smbFJ4KrAdE1q0hBIMvuljw4A1NTBzaDjyIEyXdTd9CBROVTvZ2FDxDitUa4GicaG96g7bpg0qVa%2B7ylMetFjRNgIPJa3pNnz8TGpheYHGbwiIJ2ZPOi2%2BO8i3Tjk6FZDp1v4K%2B%2BqLHfC%2B3t2%2BpAtlYM%2FwrITbTgC67rXOSBWIQyzywBiIV06OyBGR7akNAeXOF31OkivA6U4Qv1I2cD4diQxV87hX04IYm4wpjD58IHRZA1%2FED9h0jXU0xVElGFgzPalAEFuTk5tR7M8XCIsOVzQilrg9zsGH4AeOx46BJCa8HHB7D%2B5ppQuJEdE5EmnN2HJMKmh53AOPGJFOWOa8Y0iqva5kf0emCdq2X6%2B9L%2FCfgu56%2FeQ0o00YDu6ZP4yIZ1%2BY%2BsTp%2BF%2FTjiDkhj8feMwnDpLN7%2F%2Fo3DAEal6F%2BFF6GTb1j3FuQwt42ewwY6pgF13%2ByaqY4ly5x%2B6oF5lsuFdIIMp46K2zBUDfl3bSpoREE9gIXoss%2BBJ7ly4LQAcDsjALIk9eFCxOehV7NAPrBNK6RK3zgm1VVBKusm3WDl5MiTFfn4Y%2F3a%2F01vrJ39JOZbS4t54AQrdg0BMpHLktY3yfliQVqMsHTyNIY3DgS261z3wQ6gS35T0wAsZ1NIP0syoc7h2ls2%2B588%2Fiv3xfxvFyp8afIj&X-Amz-Signature=0549aee2a76e017977b9b856d98066244231a07e566da6de4ab88aad7cefce93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654UWE2CB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCSS74ucZJLpna7ce%2FqPYrUERl5KJ5FP1JIb%2FipYazcAwIgb4URsJ1QzJz3DLOpcqCHFwYreBfcWDW%2FBACy2u%2B6Npwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJyttcIvVt9F4jlbaCrcAy78XRUaM6iMBk2VSfSR60LXFl5icwKshUj6f0qyoY8jG%2BQFiyocCkmAXzzTa3tcBdvRKNRd1oT8tKtknZr45LAcNEXYYN%2BwdUAR%2B9iVUv1q0lpIrwhVh5E7Z1fXCwKKHeXBa4x2UqFDMLa0S68TKhB1z6x0RW8XZvaBZizCDDLxidTdOrQr66GzezLBMP4IQYNucoU5izcBmS99r7ExTrMMIxuM51TEPgSXHfN1fwk%2B%2FoSh752gxxnjQCq6VQgbS9eb9zQec4EZDO6%2B7E9DmhC682LG1A3zmmdPNNwdklAqg5qKx8YXY3fWiyJVlc2Ru612U5pcX5Wb4CBa86ZiSGCU6BHUzfJl%2Bkj0cVWOhHZGUp%2F9cgtxp3Gx1GpXW0ha5lVEqDYYMtS0sRc%2FG9qPOS4r9h9qEFS3K2XetaecMHSbratSswbUneLnnAXT%2Fz8hOucmklQWF%2FtwIoRSwoXaY4uxewXtG37OewqUEJK%2F%2BUsQ7Oedn9M0Du6PbpaY%2BfbtqQtYNcxWPYhfW1KE59k3RMidHXfJbC6C%2Bc8t2eYwGSThn4TYqJ7eqi35hK0st2ohPQTmTxqAaEwS3OztG9Ep4wNjfILLBR%2FAz8%2BLiC5YHKFg987XYMyKIIpXk7X3MJ6NnsMGOqUB3sANYrTzaK060XJ%2F%2BXg1DNVN%2BJY1SOLg7RhcdQtGw%2FkbZ7QxlVB6ngs1gWGoKlXzl9yg%2B%2BxWbBTqHT2EXthqT2iMRo2%2B06dmABm1RusltXi1YlpcZ8iqP1iY%2BKQs1HSNffoOCcwFcljdDYrZ%2BOhzNkFORBRr47LKT2VeDl%2FHFQzRt0YhhDLliOtTzThqy9em6BipJT1MN6dMEmJkNooxWqcLjZW7&X-Amz-Signature=6b65738051fe7b14d13e611770eb206ef4a3ba46dfcf0e88fb2bbcb549a78bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6GWCKJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBxuOJ7TkTm2SnFhVbNoJOZDisqUKMIJjzCrkwvYiaI0AiEAzcdMXjuHPm6xngnDOlw7aBKZxPzJzOO4uS6uOo8nLUUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDATl7Tl0LZtwY3EYFyrcA00kggskyWUFScX5fs2b3rVPk07YCfBgDZjo3JI8l0UhT4ovrw0Hys6DqHh1j772ZpyublwZ5oSDBXU4ULpEwMJEQIWIluIwv9j0YvHpWV0hNd46v8sFqDckB%2B4Ch23tn1aoTz3Lhvng0CH0SVlSDxJs6TUORIQSwjes%2FNFFbdvtu%2BbcLkjAwpFde9eAGvvB5bAm4tnBrxng1jkV34V7k3mEXtJ9052eshQmWvDClvkPWlnrOHaQeQ0oKTeKAGqAuPd5JBpQZIf2tlACHUOjdqguy4pwGBIlMUXgwAZClr2EZbRAnjgcrtFcqokXzKW51JjaUVU0d8hKshIoIy8ZcZZxQDFswDA4VB3UUL3qGvRdCglFoW7sCo0iSRbpFRIJ8NvuyZUCNdXc%2FtM8WY%2BNW9ncaMp8X4wEw1YXZckXYa1XCN9EYzPCL92R7X%2FRjBzKac0RYGI4uLkPuquihWO%2B2SSjBSG0CpyCq8GpqF3yPODvalwaT30JvpU8vtpf9gUqGO%2Bs%2Fmju4RPXnKLQKLB34eudnjXhAt%2F6jbfxZ5ol%2FJ6UbNNXnujp0Zlka1nDpwfYrik7eIOPM0vnXfGVE1Su89SqGzzZf4FMiIB2YlJpL1zeqSHIxYO5T8oo%2FTtIMM%2BMnsMGOqUBjij20GPA42CAI6JaxaqBoxletAutyUD1UENKZqKvgXzH1uqHw2kLvi8wd%2FS2Y3KnI5SYznIzAzLps17Vutvq6RKqzvbFlEd6Qvenrbniu233NPK%2F1tM4LKfx%2FgBeychHgw88EXxTYcX7FhjE1kZ30VtgKoPLZxE3akQMv4A8FjklZX%2Baa4p%2FLRtkTCS%2BiZ91OOTx2e523SXTdYKfyR71yKvhvmlS&X-Amz-Signature=b4afb4742f1b6424eb281b4652e940c46750bd532fbf1052d357698fd945512e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
