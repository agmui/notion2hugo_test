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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEDM56R%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3zAhd5W7d11yNUsEO2BorlsNEc4EhKo%2B9NoklwtcR4wIhANGR1aQ5VrV8gGOLWBA3L%2B69H5Q2u0po5laFG6gDIQ1lKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJKcAJ7GUtIMGk4ZQq3AP2y3QKCaYYfh3J0SFIP9Xfsd7QBr5%2BTjyLbHop8f1rQijEYRnFBJ67AvcyriFoukTfZx%2BoZ17tVWjQoReHnI8ZqGSv5MeZUvDbzAB3yIY9n6r7ELo%2B6JVcKs9LL3wiOGLZ3J3hQo6uJSYX1%2BKdeXXpXJ5QVulAIeXopc%2Ftr7w%2FmfEMHV08qEaAzfeXpZt6b1ZjhAQjoB9zeOYT9KPr6yf7JTmC4L%2FmHzThPC9e3uOZ8Bd0mVjPIR4YFKvgjjx0XdzQXemOq62C4ZuXHkYzy%2FWK83VGeRpS2VPYeBbbwycqIUaGqrN7X3wLAEdT8Lau6qLMRWIlVLTTdwosNxK%2FTxAg32pei794gyJ8YmGELSw1S9GESG%2BVgQIbCm1h9g6JnjOI9mumyjKRbI%2BLhrzqfqY6N5dvSH1wX2fX5ePorGzmDVJetRv%2BbpGRqA5iheD%2Bb1P2JGm4dj2rSmsBKlQytGyY47ThsjVZNAEtAUi3j%2FEJOiRxK4xPGANe1%2FBzRShezq1pLKNPILyZU8E5smRyOwDYGhkz%2F3vd8v6V0ueSuyJxNwYROdsyMYa9xO0ITJVli5ZbALC9lIokDz6zp7TBo8%2BbHraPM0u2Pe3N4ut6zbA%2FxutbysVKoFlNVYGs4jD48qXEBjqkAYKwwgK5rGXqfWk3FRkVnkds9JU7XSgDEGi3dQf5T1t3CBSlQRgVLxW%2FXkti%2Fhz4YZsdjtYev8qTgZF%2BGAyGz8WgEifSSPm8UrxgjpOOaqekhCymw6CLmUq1iX%2FWrKsD%2FxgRHF4k17kCZzw7FTNp1G52W8lpP4O%2BsldgGjFK%2BoU0EkprUfqgM4lokfoplx7RXWlBhNyZZ16AQbJLcVY0FtjPB%2BCy&X-Amz-Signature=e0dfaa6c99b406901d4852fd1b12ddfcd93cd4217567c24dd0a1732de2cb0b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEDM56R%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3zAhd5W7d11yNUsEO2BorlsNEc4EhKo%2B9NoklwtcR4wIhANGR1aQ5VrV8gGOLWBA3L%2B69H5Q2u0po5laFG6gDIQ1lKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJKcAJ7GUtIMGk4ZQq3AP2y3QKCaYYfh3J0SFIP9Xfsd7QBr5%2BTjyLbHop8f1rQijEYRnFBJ67AvcyriFoukTfZx%2BoZ17tVWjQoReHnI8ZqGSv5MeZUvDbzAB3yIY9n6r7ELo%2B6JVcKs9LL3wiOGLZ3J3hQo6uJSYX1%2BKdeXXpXJ5QVulAIeXopc%2Ftr7w%2FmfEMHV08qEaAzfeXpZt6b1ZjhAQjoB9zeOYT9KPr6yf7JTmC4L%2FmHzThPC9e3uOZ8Bd0mVjPIR4YFKvgjjx0XdzQXemOq62C4ZuXHkYzy%2FWK83VGeRpS2VPYeBbbwycqIUaGqrN7X3wLAEdT8Lau6qLMRWIlVLTTdwosNxK%2FTxAg32pei794gyJ8YmGELSw1S9GESG%2BVgQIbCm1h9g6JnjOI9mumyjKRbI%2BLhrzqfqY6N5dvSH1wX2fX5ePorGzmDVJetRv%2BbpGRqA5iheD%2Bb1P2JGm4dj2rSmsBKlQytGyY47ThsjVZNAEtAUi3j%2FEJOiRxK4xPGANe1%2FBzRShezq1pLKNPILyZU8E5smRyOwDYGhkz%2F3vd8v6V0ueSuyJxNwYROdsyMYa9xO0ITJVli5ZbALC9lIokDz6zp7TBo8%2BbHraPM0u2Pe3N4ut6zbA%2FxutbysVKoFlNVYGs4jD48qXEBjqkAYKwwgK5rGXqfWk3FRkVnkds9JU7XSgDEGi3dQf5T1t3CBSlQRgVLxW%2FXkti%2Fhz4YZsdjtYev8qTgZF%2BGAyGz8WgEifSSPm8UrxgjpOOaqekhCymw6CLmUq1iX%2FWrKsD%2FxgRHF4k17kCZzw7FTNp1G52W8lpP4O%2BsldgGjFK%2BoU0EkprUfqgM4lokfoplx7RXWlBhNyZZ16AQbJLcVY0FtjPB%2BCy&X-Amz-Signature=1c04d138e3250ffccc0cb4ef3d288e4f70466beb58c94b2d83990b4bf568e87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEDM56R%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3zAhd5W7d11yNUsEO2BorlsNEc4EhKo%2B9NoklwtcR4wIhANGR1aQ5VrV8gGOLWBA3L%2B69H5Q2u0po5laFG6gDIQ1lKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJKcAJ7GUtIMGk4ZQq3AP2y3QKCaYYfh3J0SFIP9Xfsd7QBr5%2BTjyLbHop8f1rQijEYRnFBJ67AvcyriFoukTfZx%2BoZ17tVWjQoReHnI8ZqGSv5MeZUvDbzAB3yIY9n6r7ELo%2B6JVcKs9LL3wiOGLZ3J3hQo6uJSYX1%2BKdeXXpXJ5QVulAIeXopc%2Ftr7w%2FmfEMHV08qEaAzfeXpZt6b1ZjhAQjoB9zeOYT9KPr6yf7JTmC4L%2FmHzThPC9e3uOZ8Bd0mVjPIR4YFKvgjjx0XdzQXemOq62C4ZuXHkYzy%2FWK83VGeRpS2VPYeBbbwycqIUaGqrN7X3wLAEdT8Lau6qLMRWIlVLTTdwosNxK%2FTxAg32pei794gyJ8YmGELSw1S9GESG%2BVgQIbCm1h9g6JnjOI9mumyjKRbI%2BLhrzqfqY6N5dvSH1wX2fX5ePorGzmDVJetRv%2BbpGRqA5iheD%2Bb1P2JGm4dj2rSmsBKlQytGyY47ThsjVZNAEtAUi3j%2FEJOiRxK4xPGANe1%2FBzRShezq1pLKNPILyZU8E5smRyOwDYGhkz%2F3vd8v6V0ueSuyJxNwYROdsyMYa9xO0ITJVli5ZbALC9lIokDz6zp7TBo8%2BbHraPM0u2Pe3N4ut6zbA%2FxutbysVKoFlNVYGs4jD48qXEBjqkAYKwwgK5rGXqfWk3FRkVnkds9JU7XSgDEGi3dQf5T1t3CBSlQRgVLxW%2FXkti%2Fhz4YZsdjtYev8qTgZF%2BGAyGz8WgEifSSPm8UrxgjpOOaqekhCymw6CLmUq1iX%2FWrKsD%2FxgRHF4k17kCZzw7FTNp1G52W8lpP4O%2BsldgGjFK%2BoU0EkprUfqgM4lokfoplx7RXWlBhNyZZ16AQbJLcVY0FtjPB%2BCy&X-Amz-Signature=271ce6c5ec610dc5e8e428dfb37e824d34346a430514320dc76ef6e23d358dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6YZDXCE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAesugLza4kH88uy%2FTJgkmNbFpBtAfEZd%2BeBgJk4QWapAiEA2PtUWzc6BTJ9sRfv9sNehiRp1ixcMq%2FsT7h9j8vY79EqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FKFd2AJph0TPxI0ircAydcEj8%2BSInov6iP9YC3JlyUGxVYJ%2BwuuIZq7QiexQkh0gOAUUpCjJ1wgRxuxFbq2EcX4Y2iYGQ0d%2BLpPYzjNOa6jW4Vk16WB04hOIEFqVqAxhAVJmwX7k8jdLikw%2B2LFkTIZeTh18zcvl8pnJPBvgx69QX8xl%2FEj0ytE9zqWiQxpVhK4B%2BdcyqVXBC%2BfXznZCgV%2B8UIqOdJf8VDJWYK1p09STqDQ3L%2FCobnqRKP3tMixKyupH0FNdqzscd3pd7OLLSG1oVpgVMr0KnjJmAzdAfCrhj5sel0h5OtF6IgLBHXrwKBRx4ARb6MeEC5rRXTDlP5WdAu3c5FfMVN9G3dI1Z0XjhjPRNNV9GafgITPjkqvvadeEo1nE0c5wbQ3A4DdYHgYnKeWmkWL0rw4ysSaRMZvuBq9gHCNy3J3wlWmWNlSK1LYd6I5DUFNCrxaC%2B3KkAGzSG1dMTcGUk%2BR23KVQcpL7ADtER3s66LltOCE3MpGmC59iFsk5shglzu%2Fen%2B6iq3X8%2F8LFzsfc41iJSc7JgCJwsudgs0lJoR1my8sifZpBKiskEKnrZHHWfGj22EZyriie7iuybphS89REs5znpgdfuYZNSFmelhnM1KMrdKEpKBoEU4zJTWJ%2FqoMPHypcQGOqUBQpEhNWmPEknjez8kvE59ybcK%2FwslM2FHX2LG3njsmiGBZ%2B3amgWNRjf888zEpIcrT%2BDixw9eEcUy7PcIZFuI4vrzxuoinRteBFuIsBGtzkZFNQ6N5jhW6hQe5mK8E%2FLU9xYB9OQgCv3QQS70F%2F%2B%2FL3TQvy3JIU9K8v%2F%2BEifG57f%2F2EjyIz89ecwSiCq7ywIuM6KuAUefYmfHHskDVQZWcuAh4koo&X-Amz-Signature=fed96f519ce80b6d1468c9ca3bb7f0b1a2424aee77c5c1e76962f2673ef9297b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROBP4XK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIC%2F2flsdsoC75wqIeXKmK0GAY1inbuZGUYY%2FkYATiEAiAc0NqVhR5i8h%2BmPQTALpmEglwn5ZM5qI6vxPL4SLqAVCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ocKec1i79rg7hfeKtwD9LANrd62tD9YIY9zs8lL82Vslbh13%2F2i9iqV5on3HwXfrYXN%2FfqgNbkyokEbf3XpLbrNqqkx4zLQMTOJW5MrXasYlHZz%2FiRNjb7Z1Ko0bE1Kz%2BGr3gReZgsrc9GavHbkI3wqET98gV7rtLXd07aLrfNK2beHu0TMXsHiQBB%2BT%2F3Zr5wF74wnEUwXiugWKQqD%2F343RG3%2FUEhYd%2FgCIx4xggM7XGJ74hbr37DVnQH09RL5ZYCBV3D31s4tS5qUIfYjxCVmX9cKX98Y0OYpmtOWahmCxWRLHsHYvoOO0FbKmy5s6qq821UoUXo12F0xfZ87NB2qSdDuzPnjQPzIrWZkkuq3BALAtF67Pl2CyKqEVHQPm5Rz9nOF13Lf8HHEovAvOD0x5yk6E9Ai0BHIFkm2f0AFhG6PPxMxKON%2BOwqW5T3rmFxyys7IfB1I%2B9aIi%2FVT0bbbthyWEbzobezzolVx8Zpf2pN8PoQ7LjMXi46kwBF421uhj70qENALg%2BNB0esBrD0UfnJfI6euk2L1Mz0EbAJ0oZO8xTiL2LYVvOEu7usYDMVLLZQF7SvCzVgWeWRPIDb4N5CwHqsKwmjFCCD4RrYU0hmCs7uGgA3NEYWZmRa8HnDdjPVpPs2%2BUcwwu%2FKlxAY6pgHgztY0cdPIPIoqMTpiSn6ZD%2BhO2xHzbb8usTgPADplI%2FxCWZzvTS5ZHweTlDV6CjgShwSbCosKmoGrBE%2FlnyS4Q1BJPY5RoacPsSTTK9ngxZT9qaiA9aw6J1GB82iNS97aW6WKHQeLM4bnrVCBKIUAZE4r3H2tzKnfhUNEZF0wtXXYHTK2sBRQIDsYoj1jDT%2Blq5pnxUO0ZaLXaLAipKVmJ84XNhZZ&X-Amz-Signature=347e5dff0fc60a438a2c501822e029ab36014810e6af9025539896684b59a90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEDM56R%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3zAhd5W7d11yNUsEO2BorlsNEc4EhKo%2B9NoklwtcR4wIhANGR1aQ5VrV8gGOLWBA3L%2B69H5Q2u0po5laFG6gDIQ1lKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJKcAJ7GUtIMGk4ZQq3AP2y3QKCaYYfh3J0SFIP9Xfsd7QBr5%2BTjyLbHop8f1rQijEYRnFBJ67AvcyriFoukTfZx%2BoZ17tVWjQoReHnI8ZqGSv5MeZUvDbzAB3yIY9n6r7ELo%2B6JVcKs9LL3wiOGLZ3J3hQo6uJSYX1%2BKdeXXpXJ5QVulAIeXopc%2Ftr7w%2FmfEMHV08qEaAzfeXpZt6b1ZjhAQjoB9zeOYT9KPr6yf7JTmC4L%2FmHzThPC9e3uOZ8Bd0mVjPIR4YFKvgjjx0XdzQXemOq62C4ZuXHkYzy%2FWK83VGeRpS2VPYeBbbwycqIUaGqrN7X3wLAEdT8Lau6qLMRWIlVLTTdwosNxK%2FTxAg32pei794gyJ8YmGELSw1S9GESG%2BVgQIbCm1h9g6JnjOI9mumyjKRbI%2BLhrzqfqY6N5dvSH1wX2fX5ePorGzmDVJetRv%2BbpGRqA5iheD%2Bb1P2JGm4dj2rSmsBKlQytGyY47ThsjVZNAEtAUi3j%2FEJOiRxK4xPGANe1%2FBzRShezq1pLKNPILyZU8E5smRyOwDYGhkz%2F3vd8v6V0ueSuyJxNwYROdsyMYa9xO0ITJVli5ZbALC9lIokDz6zp7TBo8%2BbHraPM0u2Pe3N4ut6zbA%2FxutbysVKoFlNVYGs4jD48qXEBjqkAYKwwgK5rGXqfWk3FRkVnkds9JU7XSgDEGi3dQf5T1t3CBSlQRgVLxW%2FXkti%2Fhz4YZsdjtYev8qTgZF%2BGAyGz8WgEifSSPm8UrxgjpOOaqekhCymw6CLmUq1iX%2FWrKsD%2FxgRHF4k17kCZzw7FTNp1G52W8lpP4O%2BsldgGjFK%2BoU0EkprUfqgM4lokfoplx7RXWlBhNyZZ16AQbJLcVY0FtjPB%2BCy&X-Amz-Signature=b8f5d32c89ca28b0a19c842cf9234e9fb560f0a2426285fbdd4d6d0ec7bd2ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
