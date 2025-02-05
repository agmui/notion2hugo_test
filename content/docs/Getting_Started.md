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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJYNYD5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGvSdXVmjZRgGIxuRHK4d2GofZJGtnVZElD%2BpfwO8XOCAiAU2aEq7dOWZ6RZj4uwhurspZgPkpFuJkmi1k2uwZ%2Bomir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMsyiPiw8Cr%2Byh5HaXKtwD3rOdQAGa0tgdzJNVVs9DLOSUFCk1dChvjoT90FlGTi9dua7Q01mjxcrjmSxRzmG5G9WaRSD6MX84xpX3B1mQowmyuDznIh4xXvdhvNTAMcXlphsk54mZLSXH3I1RzHF1ZiGAPBI0UdI8srDU08iOrgE%2F9NlMGR6Jlhd2iEIbCdkO7ndcMrPuvcqc%2BQMcbKPGuj8icLPiYmRlZYhR6LKFeTMuXdyYyQnISoBtSedsIy893L%2FYGdImvM7N9DwkxC4Fy1GYOwkAqG7gPi3Sbu62m6TOWIJPTTLFj7BGQR28J3p5jXjneftauI54voY7ZDgnbn45c4EEIb6BZXmmPRN8GR6Jl4hOHp6bttQ1TdKNCV42W2%2Fp0dde0OS7a%2FEFpuEjJd6bfsi37c1BpT6hM%2FqJ6OjXr8C%2Bq%2FRh%2BQw4mqviLfNohkWuirPHvLHlRQRJu5xTvMGyylj7qpJhwIilJGaX9v5ZOd1WTjQHs3VozyXgOA6SjaFD0nUiJpAeNRf9mZYauyf7KheddB9WzXwiXYkAAky%2B7a5BSMGmzx70uAGw%2FQRqYUUwCbR2N9mcSCL9zdkeG5qFv6gSb%2Fta5CK%2B5Ap5VQFtHIdBqlsZgnWCb7aozXceleadVpY0v4Lhk9sw8YyNvQY6pgEv9VTc136zHxOrjEl6ffZI9SMvzQTv6mVBTJIw0x%2Bg59KwUkJGuGQ12msBJDOTffWlrhUQJT8f2XXPII%2FSasLMrlFzmUjfOo1qo4dOO7wRPSI3fXX1v5iOAg8sa6XrqC0hp3Qx1vO%2Bx7UyfKKJnBoTf76o9D1j44KYgxeFlMMTvHu72JVYMXygeCAe0E8LbJ5EMxwAyWzKl%2Fm7%2FP7o%2FvUrJFiB9xpy&X-Amz-Signature=b7699063b1f3a31979a908a5818736558daf82a61e382e3510d0dbb2f2e42204&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJYNYD5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGvSdXVmjZRgGIxuRHK4d2GofZJGtnVZElD%2BpfwO8XOCAiAU2aEq7dOWZ6RZj4uwhurspZgPkpFuJkmi1k2uwZ%2Bomir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMsyiPiw8Cr%2Byh5HaXKtwD3rOdQAGa0tgdzJNVVs9DLOSUFCk1dChvjoT90FlGTi9dua7Q01mjxcrjmSxRzmG5G9WaRSD6MX84xpX3B1mQowmyuDznIh4xXvdhvNTAMcXlphsk54mZLSXH3I1RzHF1ZiGAPBI0UdI8srDU08iOrgE%2F9NlMGR6Jlhd2iEIbCdkO7ndcMrPuvcqc%2BQMcbKPGuj8icLPiYmRlZYhR6LKFeTMuXdyYyQnISoBtSedsIy893L%2FYGdImvM7N9DwkxC4Fy1GYOwkAqG7gPi3Sbu62m6TOWIJPTTLFj7BGQR28J3p5jXjneftauI54voY7ZDgnbn45c4EEIb6BZXmmPRN8GR6Jl4hOHp6bttQ1TdKNCV42W2%2Fp0dde0OS7a%2FEFpuEjJd6bfsi37c1BpT6hM%2FqJ6OjXr8C%2Bq%2FRh%2BQw4mqviLfNohkWuirPHvLHlRQRJu5xTvMGyylj7qpJhwIilJGaX9v5ZOd1WTjQHs3VozyXgOA6SjaFD0nUiJpAeNRf9mZYauyf7KheddB9WzXwiXYkAAky%2B7a5BSMGmzx70uAGw%2FQRqYUUwCbR2N9mcSCL9zdkeG5qFv6gSb%2Fta5CK%2B5Ap5VQFtHIdBqlsZgnWCb7aozXceleadVpY0v4Lhk9sw8YyNvQY6pgEv9VTc136zHxOrjEl6ffZI9SMvzQTv6mVBTJIw0x%2Bg59KwUkJGuGQ12msBJDOTffWlrhUQJT8f2XXPII%2FSasLMrlFzmUjfOo1qo4dOO7wRPSI3fXX1v5iOAg8sa6XrqC0hp3Qx1vO%2Bx7UyfKKJnBoTf76o9D1j44KYgxeFlMMTvHu72JVYMXygeCAe0E8LbJ5EMxwAyWzKl%2Fm7%2FP7o%2FvUrJFiB9xpy&X-Amz-Signature=8974df7ca89eec9095e6789903f2fd9c30ec3050da323c3dca702354c375c95c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DI3GTSX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCkqmDtmem8RRxZ6TfH9wUy56oEmgSDo3Tro0p1G9l9vAIhAOnBbvPy%2B6O4%2FQwVBAYUeVXoEYqr4u8LimY4nkD09ja1Kv8DCEQQABoMNjM3NDIzMTgzODA1Igwerjt4dKzhWI5vgf0q3ANRv8Zhg5SLgiDjQoiEPPp1PCrmjER%2BxodYiWOsUeg7m8vZi6U2fEgQrcXeB4DHQbAIJ%2B0RoqQPkhlBGmflF%2Fm87K3QI2en%2FBm7fdO%2BzBm2xXJ%2FAeFsNGMTSgwzl2y807tcaQcQFHwqNe9BMFwbAL6yEKgb5%2F%2Bn7N78T3yq1QjJSHhzNg9txaz9KdTEfeJer2G8jSFQbPhWgrCQ0kJCXfXERjui4HEybLKp9m%2FjCbiSkn8IaM%2FP64EUBXcG2PLrky3cN0mLoQaSeyp9MM%2BNr%2ByAfkDE7z7fomyMa2KZlkiF%2BuYtYjIYc6IYDmhzTf%2BBchnMupn2WLN1H7b2AWONWB3nMA50o9mY6tJAvZ0%2F2kZBel%2BdXH7l7HITj5YR1oKE3nDDXDplp%2FbiUZQH5w6yN3f2ZkIe8wCce0dsO7%2Bkl5sNqkcxZSDejDxLMSv27aLxJph4JpCse2ao0Z%2FB2hNJaKrSemuNHBZJ2KM3zu8S6fJmV9wmpkFYZLnEk2YAt2pRg9Uh1PzTqqPz04%2B8FZvyIzRYwXK8%2FselpJq7dtPtFG9L5uKyAma22KaAZgwsT%2Fq75oWCq8LWlRGTuQGVpzdpb78CaIKppenOhRL9YDIDzg4mUA05C5W4aqyEUefxhTDui429BjqkATx6yDrEXJy%2FpaOi9SMylxaj07C%2FhkO6CC1B9wAUQ7PdwY%2FDqQBgd4CYnjs5bSvils%2FWAPo8AtQ7PcMgZfmmFoKygXU1B5Z95n7LgcthXsgok3p2vOq3Uh8wBaIh4w5%2FB%2B7IDm%2BG2GdNAuEon72FNdUFjcphtj8uLP%2FRDHkMIGx2zpvqknQcp1sNPOAQW%2BT8M3vLlk1rS1X%2FhpsrfEVeRP4Yx4cq&X-Amz-Signature=8c346edf5d8d528b5e89aa43aea4d657ec1dd35157fdc0b77df6569b7d37ca49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJLURDA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDDNRKW247UrVHkUVOG13bHst9Uq987ZV1e8RXgqhDaQwIhALR%2FXqzJfqPIsqWPFys%2BC34s35uuIqrGZV%2FRTD8uBTJlKv8DCEQQABoMNjM3NDIzMTgzODA1IgzF2KE4d6g94w6XnA8q3AMBqrrBvY%2F7hZaBKXWuzEIpUX3lcmHiCsOChb4Wq%2Fjgt7kDIHGIWO2JshbMR6UEnjp4Gkt5fkY332%2BXEEoLQSEyj7pIgBQ1hlvQel4LmMk%2BYYc3b%2F9RR5S1qEIPKm%2BLkj5njKdn3bl%2B8dv8T2YuJ9bYlBJjNeWNmTWDjpNVMcZzp0gc6x1kkJpoKMmBODga%2BypQlikmDP51Nevg8T0neMyT%2F1cuVB50eWqggtoPtbgLbHGpO3tg3ayvxzAr7LXxHXMiUczDlEy%2BT34VQI%2BxXQpPOOBGhOLy8PGkGVOk%2FQqslcxQsiEf%2FSjWeO4Ay9ocUitgcfJjaEDSClM9X7zGsc9q9jU4gwJhbkzXmrrtrmLrtE1JNZcLtlsPy2KHMpQF25DfoJyyF2jj0QK1fXZOJkf85ThocDJw%2BUc48Qn5KFlNkjEDB4ZMVm77xEJlv71yaULObHLfRNw9RbRSfqbLskPldE6biFQCSqfDiYq%2Fb0lzr0iTE2OmjdYk1KoKu83HAP5PPbItAC%2FtgfhckQLknDDKHsbQb7MrNRFgFK3mP7wqA5tP%2F%2BytCt4pMQFZcAJLTaRpESn3zSFGvD4b8eiTysFgpbDece5PkCjCaAf%2BI62nTmsG%2BfyEisl2Rdw9iTCPjI29BjqkAXe4auB7zDhMbyj6rq37SFQzNpv1h9yLi5OLl20Kxab3mbnaZhrVM%2BJwNPau91k9hcrXEW845GfO5rOpsX%2Fz8YaemUwMtMGSs0UxFzi8r3n8YRafkwXbg85oW2B7jRBPbLWwsdroZd%2BqDJmlgUctFy1O8h%2F1K0BxqHxntNosq76WQJzemmkzAQMS3PuhUz4vAfMonDFHGlL9SiDYdEFzmptui2RW&X-Amz-Signature=929b74a4851772b29fce74db40c2ed9e15aa5bd5d27c6bb72af1d0d7f3d9b79b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJYNYD5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGvSdXVmjZRgGIxuRHK4d2GofZJGtnVZElD%2BpfwO8XOCAiAU2aEq7dOWZ6RZj4uwhurspZgPkpFuJkmi1k2uwZ%2Bomir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMsyiPiw8Cr%2Byh5HaXKtwD3rOdQAGa0tgdzJNVVs9DLOSUFCk1dChvjoT90FlGTi9dua7Q01mjxcrjmSxRzmG5G9WaRSD6MX84xpX3B1mQowmyuDznIh4xXvdhvNTAMcXlphsk54mZLSXH3I1RzHF1ZiGAPBI0UdI8srDU08iOrgE%2F9NlMGR6Jlhd2iEIbCdkO7ndcMrPuvcqc%2BQMcbKPGuj8icLPiYmRlZYhR6LKFeTMuXdyYyQnISoBtSedsIy893L%2FYGdImvM7N9DwkxC4Fy1GYOwkAqG7gPi3Sbu62m6TOWIJPTTLFj7BGQR28J3p5jXjneftauI54voY7ZDgnbn45c4EEIb6BZXmmPRN8GR6Jl4hOHp6bttQ1TdKNCV42W2%2Fp0dde0OS7a%2FEFpuEjJd6bfsi37c1BpT6hM%2FqJ6OjXr8C%2Bq%2FRh%2BQw4mqviLfNohkWuirPHvLHlRQRJu5xTvMGyylj7qpJhwIilJGaX9v5ZOd1WTjQHs3VozyXgOA6SjaFD0nUiJpAeNRf9mZYauyf7KheddB9WzXwiXYkAAky%2B7a5BSMGmzx70uAGw%2FQRqYUUwCbR2N9mcSCL9zdkeG5qFv6gSb%2Fta5CK%2B5Ap5VQFtHIdBqlsZgnWCb7aozXceleadVpY0v4Lhk9sw8YyNvQY6pgEv9VTc136zHxOrjEl6ffZI9SMvzQTv6mVBTJIw0x%2Bg59KwUkJGuGQ12msBJDOTffWlrhUQJT8f2XXPII%2FSasLMrlFzmUjfOo1qo4dOO7wRPSI3fXX1v5iOAg8sa6XrqC0hp3Qx1vO%2Bx7UyfKKJnBoTf76o9D1j44KYgxeFlMMTvHu72JVYMXygeCAe0E8LbJ5EMxwAyWzKl%2Fm7%2FP7o%2FvUrJFiB9xpy&X-Amz-Signature=3cbabd86e450fca0537ffb36076fd4888f388e69508c5befb6f30611ee641c56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
