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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQXDLA2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFysG%2BFsQxObYMTgkkNDblhTK1c0NT1L6tnKHAm9r%2F0AiB2cNCW9K1l1uagMhKho2H7OmHVaP4eZZffM2UTsxMc5Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMEbneeIbeEGDNFeQeKtwDFo0xguPgCphOU%2BEA2aAPqsiGuaxsNKFhF5uY23Iw9gARhP1k%2BHdqqi15El%2FcnHFOjH3F7fAKSRGrcJyUegTU4GbfyLAckfTOq24AuzEcSIQXolpSr%2BotFb3HEvGrAO%2FGWbTMN0YELrd8uSmQ6JZRdWeAK9DyVtY3rEwjyZpCaV9gAwXAriINH5vYwR7Y7779%2BVKJaNJK0hU%2BB%2FUKLy9KBklLbY3J4U8A52RWgMOmhutP98LKtyWeExkmqxFhBNyxmZilpSPsi5r%2BjyqC1bduMDhB5ku04uIYLZgN84Eg6GxGqeqUintxXVRC36IKmzo0dRIuoE%2F0cF01rNE2fsbU3h7IZyOvmUDQ7Z1OD7NMu%2BlCX7NQnV8Zs65Iqdjvi8bvZYGxKPFcNawlnccBsef4wNfVGUhvpGUZA7djU70n9TafGUxZsErIdaOCGQFfWRIKcKrQQQ%2F%2FO9HhnkIZAnFoYX%2F73umNBJNxwP0a1CYpTDzzbiM1VmpLG4TbVpvgWfhRjTVTZsEnvPpTADGEp0b%2BnRbIk6grxELhAqbWveUtbOK9tL7UM3KGPpUddJW8cQQCtOHm6xrS0NV%2BusWJc5bxQW4rzbpYumN15fCDnApVKFfo3HSF0z5niKUujPcw2%2BXzwAY6pgE5ukb6OVfYc5OR%2F6XA%2FQAc6n1HVYWbQVZfqi1%2FS8y0RHDnPmD%2BOucUjB4nY1in1Wkv3cJBh9igK5BcMlBlFxcygjc8Oq7MqZ3Fx4spmytXWYauAa975L%2FR4Axx%2BIYw954Im4cHoAuJsD00jBSAlx3rV6giZNm4J50WEUWX3MROVwZJsrkgcX%2Fr9uW19oC8vYkuj8aWv%2Bv1YvnQETEpl8PBC%2BfB0Q77&X-Amz-Signature=0fefd50eac18fab9f17feff506a63b3ecedfe4b7c316031a19f6bb5b542611bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQXDLA2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFysG%2BFsQxObYMTgkkNDblhTK1c0NT1L6tnKHAm9r%2F0AiB2cNCW9K1l1uagMhKho2H7OmHVaP4eZZffM2UTsxMc5Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMEbneeIbeEGDNFeQeKtwDFo0xguPgCphOU%2BEA2aAPqsiGuaxsNKFhF5uY23Iw9gARhP1k%2BHdqqi15El%2FcnHFOjH3F7fAKSRGrcJyUegTU4GbfyLAckfTOq24AuzEcSIQXolpSr%2BotFb3HEvGrAO%2FGWbTMN0YELrd8uSmQ6JZRdWeAK9DyVtY3rEwjyZpCaV9gAwXAriINH5vYwR7Y7779%2BVKJaNJK0hU%2BB%2FUKLy9KBklLbY3J4U8A52RWgMOmhutP98LKtyWeExkmqxFhBNyxmZilpSPsi5r%2BjyqC1bduMDhB5ku04uIYLZgN84Eg6GxGqeqUintxXVRC36IKmzo0dRIuoE%2F0cF01rNE2fsbU3h7IZyOvmUDQ7Z1OD7NMu%2BlCX7NQnV8Zs65Iqdjvi8bvZYGxKPFcNawlnccBsef4wNfVGUhvpGUZA7djU70n9TafGUxZsErIdaOCGQFfWRIKcKrQQQ%2F%2FO9HhnkIZAnFoYX%2F73umNBJNxwP0a1CYpTDzzbiM1VmpLG4TbVpvgWfhRjTVTZsEnvPpTADGEp0b%2BnRbIk6grxELhAqbWveUtbOK9tL7UM3KGPpUddJW8cQQCtOHm6xrS0NV%2BusWJc5bxQW4rzbpYumN15fCDnApVKFfo3HSF0z5niKUujPcw2%2BXzwAY6pgE5ukb6OVfYc5OR%2F6XA%2FQAc6n1HVYWbQVZfqi1%2FS8y0RHDnPmD%2BOucUjB4nY1in1Wkv3cJBh9igK5BcMlBlFxcygjc8Oq7MqZ3Fx4spmytXWYauAa975L%2FR4Axx%2BIYw954Im4cHoAuJsD00jBSAlx3rV6giZNm4J50WEUWX3MROVwZJsrkgcX%2Fr9uW19oC8vYkuj8aWv%2Bv1YvnQETEpl8PBC%2BfB0Q77&X-Amz-Signature=ff7d8c8c4d827f20322055b7996eaf5e8ff1cd51fe6369605456249d6443f625&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQXDLA2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFysG%2BFsQxObYMTgkkNDblhTK1c0NT1L6tnKHAm9r%2F0AiB2cNCW9K1l1uagMhKho2H7OmHVaP4eZZffM2UTsxMc5Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMEbneeIbeEGDNFeQeKtwDFo0xguPgCphOU%2BEA2aAPqsiGuaxsNKFhF5uY23Iw9gARhP1k%2BHdqqi15El%2FcnHFOjH3F7fAKSRGrcJyUegTU4GbfyLAckfTOq24AuzEcSIQXolpSr%2BotFb3HEvGrAO%2FGWbTMN0YELrd8uSmQ6JZRdWeAK9DyVtY3rEwjyZpCaV9gAwXAriINH5vYwR7Y7779%2BVKJaNJK0hU%2BB%2FUKLy9KBklLbY3J4U8A52RWgMOmhutP98LKtyWeExkmqxFhBNyxmZilpSPsi5r%2BjyqC1bduMDhB5ku04uIYLZgN84Eg6GxGqeqUintxXVRC36IKmzo0dRIuoE%2F0cF01rNE2fsbU3h7IZyOvmUDQ7Z1OD7NMu%2BlCX7NQnV8Zs65Iqdjvi8bvZYGxKPFcNawlnccBsef4wNfVGUhvpGUZA7djU70n9TafGUxZsErIdaOCGQFfWRIKcKrQQQ%2F%2FO9HhnkIZAnFoYX%2F73umNBJNxwP0a1CYpTDzzbiM1VmpLG4TbVpvgWfhRjTVTZsEnvPpTADGEp0b%2BnRbIk6grxELhAqbWveUtbOK9tL7UM3KGPpUddJW8cQQCtOHm6xrS0NV%2BusWJc5bxQW4rzbpYumN15fCDnApVKFfo3HSF0z5niKUujPcw2%2BXzwAY6pgE5ukb6OVfYc5OR%2F6XA%2FQAc6n1HVYWbQVZfqi1%2FS8y0RHDnPmD%2BOucUjB4nY1in1Wkv3cJBh9igK5BcMlBlFxcygjc8Oq7MqZ3Fx4spmytXWYauAa975L%2FR4Axx%2BIYw954Im4cHoAuJsD00jBSAlx3rV6giZNm4J50WEUWX3MROVwZJsrkgcX%2Fr9uW19oC8vYkuj8aWv%2Bv1YvnQETEpl8PBC%2BfB0Q77&X-Amz-Signature=6ea6f6d76393bbb2b674cc4bf12fe6d90e61d915f576322990343fe3cfb33b87&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2MYLTXE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAoW2eKcQy%2FLKy9UhYIS%2BMDQaJ%2FdRuBmwkGUx0jVarpAiEA%2BNvvfxurtUrnWV3xMRfBQw%2BGXZC8iQnGUEcwT4V7mVkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDH26ZRHwCcF9i2AnOyrcA09lDLEwsa2DagBcLNS1wIyaADWyNwITwkOXBcZn7LvVQcGI1voplXvHATmmFOAj9dYiZHYkFH9Rjpw2h1WrRu%2FGUS30ONVdbGiEC48%2B7aiNXwgVPguOPp5Vli3p45K31Fly92qKFlR5Ly5lN0Pz2hh%2FzesmkE8mUvkYjuc3wS6groI%2FLKXP9B9n%2Fw%2Fc03ydVoMdVOCYf958PwxQboUiiHCY3tGOQ2%2FQhki3XlvC4c2IuPtJ17k%2BqnEkBi7buCvxsZ0GyxzUQB0%2BcRWJbOYFVAnWcw12KMhrtowbBvYMDIZzns6sk%2Fe5BQcklrXoo0L8qBa113%2FGv02dtvdNP34%2FOUTZ4r9YzlX%2BQsC502%2FR42W6Wpn9f5l9J7goorrSw4qAUYbHm%2BEglFc4ysY2fNkhgEKYaZ9HLp9b7K1E5%2FgNQ6ELpt8qO5i05aHm132rGRQw9ld5dfPUsuEX37tY%2FYdx%2BfproHY5jDsxi6yAHaiK6mfC3a1N0WeyBCP82CRkH2%2ByL2TBPo5k%2FagzV9%2FtimYQ7zRgihl4rSY7s61%2FX3iTqmRMdwevneKZKVDOoxeVZtaZ74KDoQbzt%2ByJmGvhHGUJbb9v3uy6uAc5jRlXtDcHGoBapsQYZEiKYsrrOOoKMObl88AGOqUBVb4UtA1GC1P1rc%2Fs9izwZGQ7ksXHFwexZ68mXKD1qh8lMsSucAf3JXTdOW5UbS%2BTqj1EyzzWL2Jv3j3hU68dlNqLqV9KPOYXfb8R8BGCfb8qLz4RqnhRfnTuvj0eCzA%2F55Sr75rQXupdXiPpbjwft%2F2m8qwiZZzjlANWZEyB1evMvyXqFWt0yISmj67uhjuJzG4vv9BQHquXOD%2BUU3z%2F%2Bmu9aTZU&X-Amz-Signature=8e5c123a37f64782e1ba128a98c11180a301304fe72ee172913da2cf0ff32d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEVPIXG5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4OrFp9JxifXdBBxkLdDRB1IqLyLeQI%2BZT7psrc0brKAiEA9SHiOLbo98W4q%2Fwby%2B44R2FKWxFo7HnVf7H4WML9Fikq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDK2IQnM82FhP5MrMXircA9VeIVjqd4supUC8WB7s7KULHh6K7jHM3JPPMP3YlPJs2z1kFmZUagR44wqu3xIuoQKfdZXNtBrXw2BwwAbc%2B8Rp5%2F9rFbcwKp0fEFYG9%2FDFdlx24Pn9LgVVLFtZV5KGuFsGO%2FiP%2BdXadTsuSG%2F5%2F3wM9EOHGo8vQ9OGjPm9%2BsocDQXvTqheAvPO8b5%2BInjRtq5nXogHAyTsAaZD1B4Vr2Km3Xh6Dbec4m66jBKkuhxI7YBpPOGBLCZhAkzZc4I8nE%2BUbn%2Bq2uFVLAlLfYoEPkAIIEIifaR%2FYlC%2F5BpqB3n%2BKchoHblgexBIHMcF4K7wjutQttmp5ldSeXUVxBBAdffNQYRXwdd25LCOrL1U5nsF%2BgvW7fbEmadbLeOjH2DWy7I6Zc5Vty%2BDp7py3bTVe8AbNzmwvRcWzmYmf2YULMN8uQ8Yct17LJxaCUMTEKvllzH9iMMv33sak0IPrY74vfsVJWq8d8ZIvOUhmdSw1V%2Fifxvx0g6jMOA1XAd3pw2i9%2B1Ynad0hLCK%2BjkKJadnW9voN8F7tEvp%2FaCcCOS9DFAPONYH%2FVrSmfFD2K6dVQhc5KiBtXKqFqbdhwHy%2BfO%2F47o28ZJk1WaR5eHI5t76qb%2FBhcUypL53jiOxsu2bMKnm88AGOqUBvdN5%2BZDYMviPtCScTMcod2cxD5a7XqpN9HdKNKMUJA6Ftmv4Aa6tllVOV1biFASFbMbNCkGl0rR%2FuejrqBAXW8WLeGoc5C33GkT4zwHI%2FDFDCnprpDDJkcfCZYsoSKLoKMJA6Puca5k09ZI0T%2Fnu5Ti6hvQf9YAGHwyjXBAd7fLiJcEG7nzid%2ByBfjAfCs3xH397N3Hiwsgh4wrlhqsZhi56HjTB&X-Amz-Signature=451170e17c9df800ad2b3acdc1b74bbf7ad30a064f5af63b7fbccb99eb62f28f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQXDLA2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFysG%2BFsQxObYMTgkkNDblhTK1c0NT1L6tnKHAm9r%2F0AiB2cNCW9K1l1uagMhKho2H7OmHVaP4eZZffM2UTsxMc5Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMEbneeIbeEGDNFeQeKtwDFo0xguPgCphOU%2BEA2aAPqsiGuaxsNKFhF5uY23Iw9gARhP1k%2BHdqqi15El%2FcnHFOjH3F7fAKSRGrcJyUegTU4GbfyLAckfTOq24AuzEcSIQXolpSr%2BotFb3HEvGrAO%2FGWbTMN0YELrd8uSmQ6JZRdWeAK9DyVtY3rEwjyZpCaV9gAwXAriINH5vYwR7Y7779%2BVKJaNJK0hU%2BB%2FUKLy9KBklLbY3J4U8A52RWgMOmhutP98LKtyWeExkmqxFhBNyxmZilpSPsi5r%2BjyqC1bduMDhB5ku04uIYLZgN84Eg6GxGqeqUintxXVRC36IKmzo0dRIuoE%2F0cF01rNE2fsbU3h7IZyOvmUDQ7Z1OD7NMu%2BlCX7NQnV8Zs65Iqdjvi8bvZYGxKPFcNawlnccBsef4wNfVGUhvpGUZA7djU70n9TafGUxZsErIdaOCGQFfWRIKcKrQQQ%2F%2FO9HhnkIZAnFoYX%2F73umNBJNxwP0a1CYpTDzzbiM1VmpLG4TbVpvgWfhRjTVTZsEnvPpTADGEp0b%2BnRbIk6grxELhAqbWveUtbOK9tL7UM3KGPpUddJW8cQQCtOHm6xrS0NV%2BusWJc5bxQW4rzbpYumN15fCDnApVKFfo3HSF0z5niKUujPcw2%2BXzwAY6pgE5ukb6OVfYc5OR%2F6XA%2FQAc6n1HVYWbQVZfqi1%2FS8y0RHDnPmD%2BOucUjB4nY1in1Wkv3cJBh9igK5BcMlBlFxcygjc8Oq7MqZ3Fx4spmytXWYauAa975L%2FR4Axx%2BIYw954Im4cHoAuJsD00jBSAlx3rV6giZNm4J50WEUWX3MROVwZJsrkgcX%2Fr9uW19oC8vYkuj8aWv%2Bv1YvnQETEpl8PBC%2BfB0Q77&X-Amz-Signature=2d14f7af7ff6c8684cc85ee85da424b21f2893d7316d0309542176d5b5856f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
