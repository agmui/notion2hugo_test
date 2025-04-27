---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCJMOQF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXeqUnDPlv%2FkDFpqKsFboeLrbpuRPWp2pA7YYY8Qfl4AiB7oHN8DtQNAiahmPGuiIjAVVWj8NAIw5f4bo1WZcb%2FIyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZT8xFZ%2FQKIUktFOqKtwDNdtQc7yrMot76cCyDVI7URJLuOP1UmD%2BZnt2XLqDRT%2BY1bvAtfe6bPjLWd0lWfd9UyqaaZbYsKgfMF0v1fWmKEhR7vf2P4RyW%2BRRTTgjsPk7kAH7%2BJo%2Bed6FCDGdA4PgyFYkiGMr0Kf8PVv6XGYPzvjSfR2vR1MS%2B22NYHqcGZs4L9lJMSX8FbgDQIITzS6LlMmmEmwzw5%2BiJfQdXoDcNijM11WFb6WiWr2XYFnyyVu1sbszRh5YsyoO4S%2B%2F1mq9zmGN7yTQPksdK%2FYga53Rj6LTA92l7V5fNAYYPYq046FKdsg9turFPWv%2B4VJZbNkNskna6cLKhhqvjRyZlcoFs%2BnwqtZOdiVba1hY8FNcZWKaXmTgQT7KJYr9C%2B5vW1tSDIfrCdmcxoLrp5XWBRYc3Qgrww%2BqfKLzTZB33IgF6pHSkHJRusv%2Fc%2FpuRC37U4WcSDNBKpLncw2difVHLlCJ8ChG%2BoMZletQzOyTrIIBOEqcIQ8UcLhwi5Y7YjDc1uyXSXq%2Bgo%2Fa87b4FN%2BSTcvxZwDIioj%2FDC0BspH%2B0jGhjs3eAnSNczMG4LdktRQLfsTuA9eWZeppX3YhpHXRWZJFzVxVFwi%2Bxh9t8%2F8ke%2F1WpcUI767yqC%2F4Z1YYhwow8oq6wAY6pgF6G2ub7S%2FuXA4xCiER%2FgXrMLlIrUYP7CXZUsz25pDmrqx900M3bAjVb%2FqHW5LRc4%2FFRS8sOMUZQvXUGGVyL3GAGQY%2FMJnm8qP%2FV%2B6WirpYzSdEEMHrxz9w9n1UMGJkYgqe9KWLxEqRJgHIa0viDCij15Jz%2FPqny9tdRKsr0fE42fNa02qhaXj%2BA7qxhm8P2kEM2SpQGsZtx2TkwTxg9PTzMnBzPAJZ&X-Amz-Signature=e983aa77c1d6f3124131ba8ef8b879fe127b16860f7828be799a6de4c1d9db9b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCJMOQF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXeqUnDPlv%2FkDFpqKsFboeLrbpuRPWp2pA7YYY8Qfl4AiB7oHN8DtQNAiahmPGuiIjAVVWj8NAIw5f4bo1WZcb%2FIyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZT8xFZ%2FQKIUktFOqKtwDNdtQc7yrMot76cCyDVI7URJLuOP1UmD%2BZnt2XLqDRT%2BY1bvAtfe6bPjLWd0lWfd9UyqaaZbYsKgfMF0v1fWmKEhR7vf2P4RyW%2BRRTTgjsPk7kAH7%2BJo%2Bed6FCDGdA4PgyFYkiGMr0Kf8PVv6XGYPzvjSfR2vR1MS%2B22NYHqcGZs4L9lJMSX8FbgDQIITzS6LlMmmEmwzw5%2BiJfQdXoDcNijM11WFb6WiWr2XYFnyyVu1sbszRh5YsyoO4S%2B%2F1mq9zmGN7yTQPksdK%2FYga53Rj6LTA92l7V5fNAYYPYq046FKdsg9turFPWv%2B4VJZbNkNskna6cLKhhqvjRyZlcoFs%2BnwqtZOdiVba1hY8FNcZWKaXmTgQT7KJYr9C%2B5vW1tSDIfrCdmcxoLrp5XWBRYc3Qgrww%2BqfKLzTZB33IgF6pHSkHJRusv%2Fc%2FpuRC37U4WcSDNBKpLncw2difVHLlCJ8ChG%2BoMZletQzOyTrIIBOEqcIQ8UcLhwi5Y7YjDc1uyXSXq%2Bgo%2Fa87b4FN%2BSTcvxZwDIioj%2FDC0BspH%2B0jGhjs3eAnSNczMG4LdktRQLfsTuA9eWZeppX3YhpHXRWZJFzVxVFwi%2Bxh9t8%2F8ke%2F1WpcUI767yqC%2F4Z1YYhwow8oq6wAY6pgF6G2ub7S%2FuXA4xCiER%2FgXrMLlIrUYP7CXZUsz25pDmrqx900M3bAjVb%2FqHW5LRc4%2FFRS8sOMUZQvXUGGVyL3GAGQY%2FMJnm8qP%2FV%2B6WirpYzSdEEMHrxz9w9n1UMGJkYgqe9KWLxEqRJgHIa0viDCij15Jz%2FPqny9tdRKsr0fE42fNa02qhaXj%2BA7qxhm8P2kEM2SpQGsZtx2TkwTxg9PTzMnBzPAJZ&X-Amz-Signature=062c39c5e18c2e4e17b2f4bb1edd638df92ead26169f310dfc0b0cdc82459871&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMMDLF6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzv%2FM%2FGFuvQ110l1Hlt4vt7Coc8FFoNHu657DxmMn9qAIgZNSA20btSoeur%2FiFMy%2Bp8qhyQbcHCFfUcQR8QP4xj%2Bgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDED7LQmDHYIN6B5MLSrcAyek5SH9zGAzE3pXZ1gpzz7y%2Bx2FWt%2B8rtAdbEnIlyWqRKzwiz3PpDGjmW%2FdUGq5dKxJtRTL7h9IyU9C6wtEl5tJdLPbjs5s8ArrLkVJdtNrpkO7UgYjev3qiZx%2Bji8VNoEYLUWkJvCoeW0chN1fFyvg2N7ToZVcy0xsmqli1XPeqGLnZdJ70Uxz3Q1Wm9z59I2ux%2BzwBfC4ZUWWZXsTbxswl5cDA9IanRf0JL%2F0RBYVk34uhfnrn1BOLXNVhW3tEzENo7vAS8wG%2F4b60KvkOroPsic8Dr4FCBudVdLX%2FdXt58ca4KKns1el3%2BF3wR8Q6ZTz5jaX79qj3tXMPclmAcP%2FT4Sva9l0pDek32VX3dmvjNgrW7%2FIcqRQ%2F5afJ3%2FYByxnVZQjxAsAQzQYGPYZYx7finZm%2Fc5aWbGRHBsJb9m4wrMxviMG%2Fz2MT8EpMrgZpJhGrqReae%2BTvHf8mPTXUMZRK9GnPvzfqMDRYz4EgoZb%2FJRsFVXCwQRSrt2b6Ib1lZz2x%2FsrRvz8we%2FyW86k53BL1a%2FB9rASl2qzIZT61w1IhCBpQdu5rXjFtN%2BpDYvrGnZOzjVXQ0ogRxjhYCH7qPfCB3xXkjYROnbj8ZagRvlsSq0h3E7hWg6zs9acMPuKusAGOqUB3igyuEY%2FOa3T9HapXj1tsHsCOrdYyH6O%2BO%2FfVtjqbQsNVTEYpJJY5kt4ThX5hX%2FlB5pJfVq9ZXknpLsW5TsgSlsjyJJKMcKzdioHMp6AukshOrhr8ELXr7YEjWZDJGmphJP6rzSOLcW3FbSfRdnZMve%2BuoSWp9OJUWIec29Lm77gA6woIl46sqhkyym9NHjgCYNfEniCHeLqilO4aM9ZuCvVwc5d&X-Amz-Signature=3068499dab67d739108037da3c39107a2136ea40ce5ea722fb3a7bc51e32e17c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5QVZLUS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL7TPgzhneECL%2FjS9F8d9%2Bgry4yy7JYOnCLxdF1c%2BcfgIgGcY02WzcqDikhexV5X3cyHKXNQ%2F3mkCg2eRuhPkiqykq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMuxGaKEicU5nX2DfircA3paPy24n8KOdhpNQDxJm1DutuGwy05tRgPKHB42YdhgsjX5m%2B5D3Tz46kedbpKwf1mCQSm%2BHEkldau9nMehacHpcbh9450ITeMVZlVd1q8naY0FS5GWs6YUAZtHXPGOA4yooQZZmxejn4LwF2emNWQCDnk9TIOq%2BYt6y6yyYKPPTWXmhrzKnWbvDyaI6j%2F00%2BpCKpJZ0sWp%2FxxOM5PAF50%2BXxN2V3IzGf8jsI5KZM7qUS5JCwTxFD3QHr3vQfhPRL9edBCy4jsnoW1tOyf3v5U1VY0iiRNAItI3TEEXFlhaePJ5faD5lwmRUzxImD5cfLyNEw5EZV0%2FjCbtWPVmyCOHf2DFZdUymYAKFry1bCYjMjJVKEzu3BuN03Fa%2FoxqciJh%2Fifv9CFdJtrhEjsuDMYcmzH%2BaHBFNZjCFuSChdtdeEypBzC5Trd9gKQWl13JlHe5qhOoBBEUqCZ5m7uC9xGrSJWrKcBxSRrEnuvyQQclcuvq738zdMXwl9njevO1t1AHbaR0IU%2FhpA2vnrI3Lxzy%2FLoZv%2FZtsVkUziC9UYrQvI61a%2FnPMmITIWuIgC7jJ%2B0kpbn%2BXjqNJpbwHNk1bLYLF0%2BVsbTUt58Doo%2FFZpsctCkyhcTaeSpFRixLMNWKusAGOqUBfowQMPrf7pn0bGiJxZE5YtWWIYAuesx3qo1WFJkHMxn%2BAPBZF7EBTp3KLcso9%2F0LDRtZlTuJxcLJXw6sEvNY1OC20yMUu1biGnXvs757%2FGK35GApxbEO4zTpFDrnxd%2B8QR%2F8%2BAoVB4I5irep6w2G26s4Nt5sM7mzSxQLzlSaf3pyQ2mxy9HE84PSM3Q7rJ5Lp7IL9ix5MNz5j3xe43aC%2FjXp5%2Bih&X-Amz-Signature=ebc205257c58816487aede4cc5a7087145d495a5f6d353b5dc321238034620b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCJMOQF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXeqUnDPlv%2FkDFpqKsFboeLrbpuRPWp2pA7YYY8Qfl4AiB7oHN8DtQNAiahmPGuiIjAVVWj8NAIw5f4bo1WZcb%2FIyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZT8xFZ%2FQKIUktFOqKtwDNdtQc7yrMot76cCyDVI7URJLuOP1UmD%2BZnt2XLqDRT%2BY1bvAtfe6bPjLWd0lWfd9UyqaaZbYsKgfMF0v1fWmKEhR7vf2P4RyW%2BRRTTgjsPk7kAH7%2BJo%2Bed6FCDGdA4PgyFYkiGMr0Kf8PVv6XGYPzvjSfR2vR1MS%2B22NYHqcGZs4L9lJMSX8FbgDQIITzS6LlMmmEmwzw5%2BiJfQdXoDcNijM11WFb6WiWr2XYFnyyVu1sbszRh5YsyoO4S%2B%2F1mq9zmGN7yTQPksdK%2FYga53Rj6LTA92l7V5fNAYYPYq046FKdsg9turFPWv%2B4VJZbNkNskna6cLKhhqvjRyZlcoFs%2BnwqtZOdiVba1hY8FNcZWKaXmTgQT7KJYr9C%2B5vW1tSDIfrCdmcxoLrp5XWBRYc3Qgrww%2BqfKLzTZB33IgF6pHSkHJRusv%2Fc%2FpuRC37U4WcSDNBKpLncw2difVHLlCJ8ChG%2BoMZletQzOyTrIIBOEqcIQ8UcLhwi5Y7YjDc1uyXSXq%2Bgo%2Fa87b4FN%2BSTcvxZwDIioj%2FDC0BspH%2B0jGhjs3eAnSNczMG4LdktRQLfsTuA9eWZeppX3YhpHXRWZJFzVxVFwi%2Bxh9t8%2F8ke%2F1WpcUI767yqC%2F4Z1YYhwow8oq6wAY6pgF6G2ub7S%2FuXA4xCiER%2FgXrMLlIrUYP7CXZUsz25pDmrqx900M3bAjVb%2FqHW5LRc4%2FFRS8sOMUZQvXUGGVyL3GAGQY%2FMJnm8qP%2FV%2B6WirpYzSdEEMHrxz9w9n1UMGJkYgqe9KWLxEqRJgHIa0viDCij15Jz%2FPqny9tdRKsr0fE42fNa02qhaXj%2BA7qxhm8P2kEM2SpQGsZtx2TkwTxg9PTzMnBzPAJZ&X-Amz-Signature=5841fffefb04219e2133dfebe0c0f927eda42ba28f4e55ea2850fdb0ce813584&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
