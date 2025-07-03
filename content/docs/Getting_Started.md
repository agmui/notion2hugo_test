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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHS4NQT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDr042%2Bk1H%2FJxiX7GEYl3sGkZ4HVf5WjC0E1GyLhpL3hAIgZ9iEnogyhWeIJ7g%2BnUH6EGIRQaeUeeEv8d9ZplzA7swqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8w7nI2b58w34uH6yrcA8WZfkQ4Vi6wBAix2Dzzd2al7Jog4Unqogty6bmKswyLouhFa2NzUzw8IAwcJgYJJhdU5dAZL%2B2iOAmjtjbIUDrvWhp7vsIW8rW0roBlAv%2BRIsThfS7Knwb8DLnngEJ52he%2BncefupXIBZj3v5Pu0rK4Q56w697noCRQdLdsdrQWXo0Xn9xd3jPaNoRw%2FqoFiB%2BlmxQUPsSEjMRhqmY%2F3J9gA2AyY4SYE%2Bab8q2V0JiUhJ1ndAeIYgFxk5gbizXvoMMuqSjcSmUIJu1M6HHXCF84e%2F1xIqUXDmuuY9Bfv9ykNAL4urvrKAOwIcePjcrbaWVWUGyjkGBZp9E2DkW8pifvU6jO1bFUaAfUpapOa%2FMRul6YCNAgIdvleurP9EMD6yJ0yWD5erIWUoWhcfPtxSMKzNe%2FbSuUrOUpxy%2Fx5mdGmg8Swwl7s2%2F%2B6cWEgOWwjpM3gh8q7nnmuVdTRAWyu7qnmmNJiPRTft7FvkzC8%2BUMhkh7Uox4A6fcB5gptLQqE97bP58tb%2Fw4FR9nVbpMGXNlVltVGb%2B3DPoUWYe8Udd2%2B1Xv5Z6efrhfKqixU8ZgBLhyQxpfyUaAvlUe3qW%2FXTQGkO8eblkDLzfpFS%2B884PoDp3%2F3xNS0foLFeQnMK%2BvmMMGOqUBKwA%2BGuGQNVSw3bdMQThs%2FWgVzM2shLB8vZ%2FsutH8dhIQRqe8S05a7JnyapjgZKy%2FKEH2SxEgmYuqZyDy9YK2RWQB5fC3Vg0tdKrFt5y0G%2BTdSqt77jmZ3X8nyaj93L%2FG10CxLVyDiKki%2BDJaFI3LqMaPLplEWU905ZBo7jvCIehW3dTSZngJFoBR80NkT89PVByNq4H2v8wnXpv57ckmubEFKyV7&X-Amz-Signature=e52b4705f7650953b7841a591ae6c67aef32f4c6205764cd7aba76a6622685f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHS4NQT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDr042%2Bk1H%2FJxiX7GEYl3sGkZ4HVf5WjC0E1GyLhpL3hAIgZ9iEnogyhWeIJ7g%2BnUH6EGIRQaeUeeEv8d9ZplzA7swqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8w7nI2b58w34uH6yrcA8WZfkQ4Vi6wBAix2Dzzd2al7Jog4Unqogty6bmKswyLouhFa2NzUzw8IAwcJgYJJhdU5dAZL%2B2iOAmjtjbIUDrvWhp7vsIW8rW0roBlAv%2BRIsThfS7Knwb8DLnngEJ52he%2BncefupXIBZj3v5Pu0rK4Q56w697noCRQdLdsdrQWXo0Xn9xd3jPaNoRw%2FqoFiB%2BlmxQUPsSEjMRhqmY%2F3J9gA2AyY4SYE%2Bab8q2V0JiUhJ1ndAeIYgFxk5gbizXvoMMuqSjcSmUIJu1M6HHXCF84e%2F1xIqUXDmuuY9Bfv9ykNAL4urvrKAOwIcePjcrbaWVWUGyjkGBZp9E2DkW8pifvU6jO1bFUaAfUpapOa%2FMRul6YCNAgIdvleurP9EMD6yJ0yWD5erIWUoWhcfPtxSMKzNe%2FbSuUrOUpxy%2Fx5mdGmg8Swwl7s2%2F%2B6cWEgOWwjpM3gh8q7nnmuVdTRAWyu7qnmmNJiPRTft7FvkzC8%2BUMhkh7Uox4A6fcB5gptLQqE97bP58tb%2Fw4FR9nVbpMGXNlVltVGb%2B3DPoUWYe8Udd2%2B1Xv5Z6efrhfKqixU8ZgBLhyQxpfyUaAvlUe3qW%2FXTQGkO8eblkDLzfpFS%2B884PoDp3%2F3xNS0foLFeQnMK%2BvmMMGOqUBKwA%2BGuGQNVSw3bdMQThs%2FWgVzM2shLB8vZ%2FsutH8dhIQRqe8S05a7JnyapjgZKy%2FKEH2SxEgmYuqZyDy9YK2RWQB5fC3Vg0tdKrFt5y0G%2BTdSqt77jmZ3X8nyaj93L%2FG10CxLVyDiKki%2BDJaFI3LqMaPLplEWU905ZBo7jvCIehW3dTSZngJFoBR80NkT89PVByNq4H2v8wnXpv57ckmubEFKyV7&X-Amz-Signature=330558290263b11077e6fc148281fc4e9acb1a436650da399b4eece0a78bbfd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHS4NQT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDr042%2Bk1H%2FJxiX7GEYl3sGkZ4HVf5WjC0E1GyLhpL3hAIgZ9iEnogyhWeIJ7g%2BnUH6EGIRQaeUeeEv8d9ZplzA7swqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8w7nI2b58w34uH6yrcA8WZfkQ4Vi6wBAix2Dzzd2al7Jog4Unqogty6bmKswyLouhFa2NzUzw8IAwcJgYJJhdU5dAZL%2B2iOAmjtjbIUDrvWhp7vsIW8rW0roBlAv%2BRIsThfS7Knwb8DLnngEJ52he%2BncefupXIBZj3v5Pu0rK4Q56w697noCRQdLdsdrQWXo0Xn9xd3jPaNoRw%2FqoFiB%2BlmxQUPsSEjMRhqmY%2F3J9gA2AyY4SYE%2Bab8q2V0JiUhJ1ndAeIYgFxk5gbizXvoMMuqSjcSmUIJu1M6HHXCF84e%2F1xIqUXDmuuY9Bfv9ykNAL4urvrKAOwIcePjcrbaWVWUGyjkGBZp9E2DkW8pifvU6jO1bFUaAfUpapOa%2FMRul6YCNAgIdvleurP9EMD6yJ0yWD5erIWUoWhcfPtxSMKzNe%2FbSuUrOUpxy%2Fx5mdGmg8Swwl7s2%2F%2B6cWEgOWwjpM3gh8q7nnmuVdTRAWyu7qnmmNJiPRTft7FvkzC8%2BUMhkh7Uox4A6fcB5gptLQqE97bP58tb%2Fw4FR9nVbpMGXNlVltVGb%2B3DPoUWYe8Udd2%2B1Xv5Z6efrhfKqixU8ZgBLhyQxpfyUaAvlUe3qW%2FXTQGkO8eblkDLzfpFS%2B884PoDp3%2F3xNS0foLFeQnMK%2BvmMMGOqUBKwA%2BGuGQNVSw3bdMQThs%2FWgVzM2shLB8vZ%2FsutH8dhIQRqe8S05a7JnyapjgZKy%2FKEH2SxEgmYuqZyDy9YK2RWQB5fC3Vg0tdKrFt5y0G%2BTdSqt77jmZ3X8nyaj93L%2FG10CxLVyDiKki%2BDJaFI3LqMaPLplEWU905ZBo7jvCIehW3dTSZngJFoBR80NkT89PVByNq4H2v8wnXpv57ckmubEFKyV7&X-Amz-Signature=402854b44f1eab1ed95a48542b732b6e4c3b63ac693e20c1d149001c4c73ba9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GCN7J3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQD80eKNsVZoGuILNQN7Xq%2BzXx6SAFlJ8xQGdFb6lCjBIAIgDnEV8V8UTzlcgCWUi0TN%2F1d1tUoA09MxfNaK7SfVYgIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsD3ylSDdYI4OsQkircAyX%2FI2gPDWzfjUh6Bx3CZHIt%2BrhwIILsB8b7RkrZLLr7VmzmcBqqQ3obumxXfTbhem9Dd0whGByC85sxjmAehhVyGTicto2lP1VAYYbtmdPFH1yWB0uOXvtU3YsQhg1t35al0li8Hw21B8hz%2BWEh2peZlCYF0nm%2BcrXvzXeZPa5wPA4n9UMBgucldrLqbUH%2FLU4DJQFkaWEgzLonyimbwlje%2Fa3zz6%2F%2FXMv1Qd0CHtU85%2BE5LBANiTkCE%2BphUbLMmZyG%2Fa3tVpP91zYZc8pciHqRF4lI1oVr3VZlq6dtn7WmUrIeyqtYfyBtHKoZfC66%2FBQKZSHuxzNDfPq4DaZwlNSQVxzY1tB0OSYalAoaCkuyU8lJpZUPxKRKc1WyP%2FW4Zsbgd3bLn%2BBsdDGTqiH%2FG%2F8mPwsr0r6z7jlgXRGz2BbNqtZAlMH%2F4wjAbSpFdhaXyZxh7gi2Rpsj1zeYozPaTbI3wJB7oAeph8Ze7M4ToodM4jy3zE%2FwEK4pgpJwcwifSwY9w41pzEhrulyp9ClctQ8p4Y8aGSi0tfw2oEQ0d6D8ww6DXcIoskHD95mD8Xhgrhv48bIaEGQcX8sOinBxn7KKcg3sSSwMF1tGkqVqytukSMclDImureT%2BYYqeMLWvmMMGOqUBCmHf4GVeuVUAgvcBqgbLbJU7eGPMIw09W4%2F%2BjYdFJ4jGPMcps4ehdRc%2BUCixW%2BxyyYpM9%2FyGaq7HJO7ByWylOotv2RBcAwJ5KuQzNW9tneqULpCcZ1lwnDUgVt0KBcFSAiX3fZXPCvcN%2FomIuQ%2FbZttvu5AFdyraNuhDKRg7XUVATvnVJkU1%2BrqIVLnGfTYn89AAiSkR9dmfD%2B8DcLSRKIBNWp0D&X-Amz-Signature=a128bab31ff26fb4ba307322d36edd01818f85df3ccb5c851f1f1e98489d8910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZINI62%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGvfgJ%2BqQ6KZfhTaHr8jzavzb%2FQMDZjt0XKbGtcyo6qoAiArXH9NABLOyk%2FzBAhDGLlqCWKVjG09AvSD%2BDAIx4flmCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJAEVSxWXb0A5c%2ByKtwDEFKgfA92DECW0I%2B2oetu5i9GHeScIDrhuLFXvg9q2LR6aFI2IDKlKt7DcO7lhuS5qnFuUxU8d%2FC6chrfL%2FqkeJUzCIdHCGCQUf0eifcTNvoz39r07YHododKWjygRqBfTYusmNZkj2FU71DaccVdtZseHt4eJetNfTnpqEGs5vElvLYeNI%2FQvlKS2KR2s5CF484xKfM6%2FLAIMBY8J3KeWPPtIoNk%2FLLYar39G522RCTN4VsPXMF4mzdzijgmGKqPQYwmurmXOTdigeqoW9HQmtqfsaZXeHZvCnFaqUl2fgN0SGnGUhs%2Fx0wlDh%2B%2FMmMJg0Na%2ByAI1RZdl1kzDex94XGuXZdUYtmYWIz4rJBL0FoxxxQb%2BwdCYlMWIY4Usz1LMdP4mLSKXa1gH0jCmCndsvLZO6sPAevsZEsdNeqecja3ToAbABIX1G5bJSiAGwHpEAYOLeoCgBHQxAa6GN7xbG88n4GzigpH%2FVNhA1u2tusPNzPfwUQp8Kw3MvQKPTLjfw19u4uW59h%2FNorcD3FSKQk7lMShQEZMVByCocOspRrEvWSOVCaZtbuAyl3Q%2Fyca9pA2%2BBZpl9MRz3xoq5vOmj5rGHvylaEwnRBOazrOd7Yf%2F%2B4XV9yVxY3s6Fwwxq%2BYwwY6pgGhl365XCsVGrHW9R193U30pvQohcHsxGC%2BnGB3o0mZ6cjrDm2Na8XLCg%2Fh%2FY2s6%2Bg8jJZf9Ae%2BTkuW83QDpus6uC5Q0fM6fUitJ7IRjOzxVbu6kWjN%2B9kqs2M9O4p8EuCtWq2z3NzKCSFtenPbkR58Z5%2BD79EKgoPwLvRoiDDf%2BaODWC1KYakmgxCUtYWSLdLQuY9TZHPhyqFsbOjDUjugBnvFiUvD&X-Amz-Signature=cc1aad41ba67c293480d356655dbac79f1a0167fc2db88bc6267cdca75d4de61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHS4NQT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDr042%2Bk1H%2FJxiX7GEYl3sGkZ4HVf5WjC0E1GyLhpL3hAIgZ9iEnogyhWeIJ7g%2BnUH6EGIRQaeUeeEv8d9ZplzA7swqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8w7nI2b58w34uH6yrcA8WZfkQ4Vi6wBAix2Dzzd2al7Jog4Unqogty6bmKswyLouhFa2NzUzw8IAwcJgYJJhdU5dAZL%2B2iOAmjtjbIUDrvWhp7vsIW8rW0roBlAv%2BRIsThfS7Knwb8DLnngEJ52he%2BncefupXIBZj3v5Pu0rK4Q56w697noCRQdLdsdrQWXo0Xn9xd3jPaNoRw%2FqoFiB%2BlmxQUPsSEjMRhqmY%2F3J9gA2AyY4SYE%2Bab8q2V0JiUhJ1ndAeIYgFxk5gbizXvoMMuqSjcSmUIJu1M6HHXCF84e%2F1xIqUXDmuuY9Bfv9ykNAL4urvrKAOwIcePjcrbaWVWUGyjkGBZp9E2DkW8pifvU6jO1bFUaAfUpapOa%2FMRul6YCNAgIdvleurP9EMD6yJ0yWD5erIWUoWhcfPtxSMKzNe%2FbSuUrOUpxy%2Fx5mdGmg8Swwl7s2%2F%2B6cWEgOWwjpM3gh8q7nnmuVdTRAWyu7qnmmNJiPRTft7FvkzC8%2BUMhkh7Uox4A6fcB5gptLQqE97bP58tb%2Fw4FR9nVbpMGXNlVltVGb%2B3DPoUWYe8Udd2%2B1Xv5Z6efrhfKqixU8ZgBLhyQxpfyUaAvlUe3qW%2FXTQGkO8eblkDLzfpFS%2B884PoDp3%2F3xNS0foLFeQnMK%2BvmMMGOqUBKwA%2BGuGQNVSw3bdMQThs%2FWgVzM2shLB8vZ%2FsutH8dhIQRqe8S05a7JnyapjgZKy%2FKEH2SxEgmYuqZyDy9YK2RWQB5fC3Vg0tdKrFt5y0G%2BTdSqt77jmZ3X8nyaj93L%2FG10CxLVyDiKki%2BDJaFI3LqMaPLplEWU905ZBo7jvCIehW3dTSZngJFoBR80NkT89PVByNq4H2v8wnXpv57ckmubEFKyV7&X-Amz-Signature=8a5fd2d25692ca24b788b9a5f46b0b89ad6e45e1316c2aafc2b8eb8c220bc270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
