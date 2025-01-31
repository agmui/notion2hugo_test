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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMMEMAR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP%2Bx7xu6OvzYPf3ckmM2BnJW%2FJa2hFn9b353alB%2BNxrgIhANFKos3jziwu2AdJ5jlEwh4bpoe88v2I%2BZ8XH%2B3x4pr4KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJv8tS1VypQh6dI74q3APf50h3jcoigkuBPhSY4v9qBR1jAkCOgkAoHrXOMdheDQtBwK5swuVsROXmQIH%2BsBZyPc8Z40glmOPAiLAMs%2Bcr2xIqi%2BFGts%2F67Tt0kQXCgr7W6RPtrKqXYgW8MOjoscX%2FU4wT9xzTww3R7%2Bnpw3OVdxmAKcnSLkvgv75RdQt9eXNIQpioky8mEv7CRAJetP%2Bu8UV3Q034SdX8GOf2v0zoRtoaz3mL40yMCaxJbPzRwGJy8dVghxKASkcRT%2BRKW4oX9wV9etM7NWgS%2B2yGq1rKDJmHpejMv4SG8m0a8JEumv0j1KDJcK%2Fmqt%2F2hH4gE9i7Je8wh9tGjaEWhyUkTwBvX8N8jLDLzzKIFcyfgiYKUsvUSggHVP9mmb0Pio4r3nUTr%2BudfRaLdAT3Or%2B3%2BTNkAKdtLDss8vtuA2cp2mQ%2BK%2FQLwRs7XGKKe%2FXyQImZcPtKY7AnjRI%2BdFKcF5onp9lhlbw9vtHCVn6A3lzkitu%2B9n%2BfBsWk5ulaRG4FS%2BIzcI0zzR%2F3qaR%2FZCB%2BwAw6iV7jg2fqGTwq3fC9G1RKb82Lm%2Fjc6t6M%2FCnXu%2Bd5Qdh7cFhrXBBJd2GiOtDIxkIml6tCpoDXugCXEUs9%2BAdc5PlGeQKJu%2FcV62aV12PosDDQ3fS8BjqkAejwXylw6jsUU6ZHASRc5M3YwUI8E8U7RkUngAEpzvU8wWfxTllqR%2B3mFit98zKs4e4NphgO1FLXUdb2lhkLlygwYyeXnqLH%2BVbaug8Aii8EIY6eqhS6aCfTz%2F0fpuoQQJ9Hx3tYqp8a5wT4zOoGGi2K6fKM74h9cM%2B7cOhHHEGnjTJhDodqUu9I1VLYdT%2BXReVpC2s4u2Iv%2BJtpL%2BLLZgTAAsst&X-Amz-Signature=463a281a573d25142426b8412dc094f70cb72c1c021851a8922da1adb1c077fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMMEMAR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP%2Bx7xu6OvzYPf3ckmM2BnJW%2FJa2hFn9b353alB%2BNxrgIhANFKos3jziwu2AdJ5jlEwh4bpoe88v2I%2BZ8XH%2B3x4pr4KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJv8tS1VypQh6dI74q3APf50h3jcoigkuBPhSY4v9qBR1jAkCOgkAoHrXOMdheDQtBwK5swuVsROXmQIH%2BsBZyPc8Z40glmOPAiLAMs%2Bcr2xIqi%2BFGts%2F67Tt0kQXCgr7W6RPtrKqXYgW8MOjoscX%2FU4wT9xzTww3R7%2Bnpw3OVdxmAKcnSLkvgv75RdQt9eXNIQpioky8mEv7CRAJetP%2Bu8UV3Q034SdX8GOf2v0zoRtoaz3mL40yMCaxJbPzRwGJy8dVghxKASkcRT%2BRKW4oX9wV9etM7NWgS%2B2yGq1rKDJmHpejMv4SG8m0a8JEumv0j1KDJcK%2Fmqt%2F2hH4gE9i7Je8wh9tGjaEWhyUkTwBvX8N8jLDLzzKIFcyfgiYKUsvUSggHVP9mmb0Pio4r3nUTr%2BudfRaLdAT3Or%2B3%2BTNkAKdtLDss8vtuA2cp2mQ%2BK%2FQLwRs7XGKKe%2FXyQImZcPtKY7AnjRI%2BdFKcF5onp9lhlbw9vtHCVn6A3lzkitu%2B9n%2BfBsWk5ulaRG4FS%2BIzcI0zzR%2F3qaR%2FZCB%2BwAw6iV7jg2fqGTwq3fC9G1RKb82Lm%2Fjc6t6M%2FCnXu%2Bd5Qdh7cFhrXBBJd2GiOtDIxkIml6tCpoDXugCXEUs9%2BAdc5PlGeQKJu%2FcV62aV12PosDDQ3fS8BjqkAejwXylw6jsUU6ZHASRc5M3YwUI8E8U7RkUngAEpzvU8wWfxTllqR%2B3mFit98zKs4e4NphgO1FLXUdb2lhkLlygwYyeXnqLH%2BVbaug8Aii8EIY6eqhS6aCfTz%2F0fpuoQQJ9Hx3tYqp8a5wT4zOoGGi2K6fKM74h9cM%2B7cOhHHEGnjTJhDodqUu9I1VLYdT%2BXReVpC2s4u2Iv%2BJtpL%2BLLZgTAAsst&X-Amz-Signature=c8d7dbf4bbd59ff8224f2af27a18b4a73a57c7e948eeac017f1ca62c320b9a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TC3ITUW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5dURgYnbywjkYyoyQrtwk3k%2BGxifMS9Qsrk8QUxYF3gIgB1h%2BOyXvpzsP%2B7492JPDdWpfB986%2FoI5dzCiX59fWlkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVblItcopdsJnhBiCrcA3enB%2BeFx6YmEycazVS5Hq2S62fz9RU5JRHSbxEkcBZRHOgZKBGVlKRGPmZmmCvKU%2Fkm7SV5DysJ7KFQW3iI2IYS4BR3cu6qjYk%2BmJgxdWU4YFlRpNSSKC47s2WWmnU2Hf2ciuZMdvrDoFptQzK4fzWMnjw52DyvXbjokffdFJnBDlxRzu%2B9M1IVj%2BT4pTkgUnLbH8vy5AWAfSO2RRTgDmQsxoFitE8gdlj9lL%2FfH0VDZ1ty8il3R%2BnxVh%2BSh0eaNCUjoSjTDugQdBPBJ9j6GoODUEgOHB3ha2rOVaUN1liBV1XAgoYa7UX4rwoFwb%2BQ6ESokiHFasTxVP0y6OISxyp2J%2FtcfnnrWQkbkWN6XpLpCbYMJ6nS8kFBEjOt87lRnyyL7QFo%2BL4eN4HBIFa89s341de8YNGLyc%2B8VP6Denvt3XfsQHf5IOWDO9ciYLN4EQ5X9rS2uv6avOL6rKo34GliAnd2xVQDVAl7S27wddyRpP%2BGGjqyMZLM%2Bki1wtcjoyJ0uupT6IcUicA3dJt07RvofJESItQANZ5lI4BN3WT7GBsKTK551QklNbJ%2F6eF6qlJFu0TgqHy7Q0Mu%2B3d7rNAO9YqESu2T7CQVU%2BqUM0nuYanxeJ1zQ3q3F2SmMJfd9LwGOqUBmHLep2%2FKIuZ%2Frn3PjiCanCS5p8TL5zbmb1TYy0cbq2wixv9lj%2FEfI0gsTHOnKOeWzYbWWHw9ts%2F3B6WKBY7DXl5nKj1k6oWmCTdllxi6%2BC2w8VP3mdarNULCqz%2BgszbsU%2BmrA%2FoRaHOOYZUZnWwlkFIJ%2FNr0hXgMsT%2FMSBivfdgrWoyEiGtGvAJCaREoZqcF%2FwafhcQ63281lPJWNYU72eHGKHjC&X-Amz-Signature=1074d5d6a26d6ad60fc62bd012addbed3b7e30fe82d4dbdcde98dc59b9ba6cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HGXE2X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3sNZDZqqt90nC8e3houz%2F1qnMACq%2BvelNQkCTIozZMAiApV3mBv1djyrHdk2khYsCnTu4hpD3OhJuLFQas85s%2B2CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrAYNrqNeRnnmsSvoKtwDQtw2eisnMB0gFTOeSvHNFO3kidUPHj1zieAckq0hz4F5%2F8d1eUwd%2BLXoqFGQGPb7bY1oR%2FaMYlMFPe8hDQ6LldfLzQXDBj6RDOj9floD%2FlExkTs%2FAQ7GGjQuwxpHz%2BwFZHUXa4S4mLxKxzNxKLQTJ1BlUiyoNrAE7TCg%2F8COY4pqw%2FETgVmghyYa1EURip0N%2F%2Fi%2FqXLhPhjbZS0LPgoGmUlPVMwwH1oDvQFfk9inFtuGJs0oHT%2B9eXVdPZbzLrjmySfLwjAtiyniHgZbbB2HqNpeqaqUn%2BdzgShKWhoFBGcNLSscmAE4phDxBzY0ZfvLvreI4f4WwSWhk%2FWHOz4LwqNkm6rqJg5XJQmnCJ0CDuJYKr7XLGDzVr%2BmnNDPjfS81rmStucFc%2BcUBy0nncLb2WQ8zaNUcjNIxiBxKch6HKcdC2wQmrbc8KHfUvV0URWpiU2faAfVBAtbfJw%2F1oZ1W9L3L9IeS8IhUiLJrAsMwA7BTov7TCuRTCwDJZWNBZESAHkhuB3ayluTbq2cV9b%2B6JEfLrjXNBIB2HlbRLgE064cbkMCcpUnV0jOVCgtdYfs5KISxKJJkAy2figThjd1Nw6O51tVPZZ3tFhiSoGwvbiWqzhFdnLmvL57Xbwwg930vAY6pgFiG366SrwbupRqgngODhS%2FlIZj4eE%2BdR6GHi1Ns4HPQkh66MWoq0LLjKvAxXG2OYAF79MLWUawZ7xpecidURH8rzh%2F%2F0GEkEY5KecKNsr%2FQN2oGEfOelTq8NvSwmGQUydk3Flownw0%2FtKCKXy5D7VyrfWoH%2FPR3juXNfL5NLmt7GvDzBnvOsZk0M9i1K4Xg39jHHC7bCcg8qTHXM1aQSH3emhTMA4g&X-Amz-Signature=a7699aacd4800a58b32de1e58f2dec471e57a68f244a077e162111f2ed2e7053&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMMEMAR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP%2Bx7xu6OvzYPf3ckmM2BnJW%2FJa2hFn9b353alB%2BNxrgIhANFKos3jziwu2AdJ5jlEwh4bpoe88v2I%2BZ8XH%2B3x4pr4KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJv8tS1VypQh6dI74q3APf50h3jcoigkuBPhSY4v9qBR1jAkCOgkAoHrXOMdheDQtBwK5swuVsROXmQIH%2BsBZyPc8Z40glmOPAiLAMs%2Bcr2xIqi%2BFGts%2F67Tt0kQXCgr7W6RPtrKqXYgW8MOjoscX%2FU4wT9xzTww3R7%2Bnpw3OVdxmAKcnSLkvgv75RdQt9eXNIQpioky8mEv7CRAJetP%2Bu8UV3Q034SdX8GOf2v0zoRtoaz3mL40yMCaxJbPzRwGJy8dVghxKASkcRT%2BRKW4oX9wV9etM7NWgS%2B2yGq1rKDJmHpejMv4SG8m0a8JEumv0j1KDJcK%2Fmqt%2F2hH4gE9i7Je8wh9tGjaEWhyUkTwBvX8N8jLDLzzKIFcyfgiYKUsvUSggHVP9mmb0Pio4r3nUTr%2BudfRaLdAT3Or%2B3%2BTNkAKdtLDss8vtuA2cp2mQ%2BK%2FQLwRs7XGKKe%2FXyQImZcPtKY7AnjRI%2BdFKcF5onp9lhlbw9vtHCVn6A3lzkitu%2B9n%2BfBsWk5ulaRG4FS%2BIzcI0zzR%2F3qaR%2FZCB%2BwAw6iV7jg2fqGTwq3fC9G1RKb82Lm%2Fjc6t6M%2FCnXu%2Bd5Qdh7cFhrXBBJd2GiOtDIxkIml6tCpoDXugCXEUs9%2BAdc5PlGeQKJu%2FcV62aV12PosDDQ3fS8BjqkAejwXylw6jsUU6ZHASRc5M3YwUI8E8U7RkUngAEpzvU8wWfxTllqR%2B3mFit98zKs4e4NphgO1FLXUdb2lhkLlygwYyeXnqLH%2BVbaug8Aii8EIY6eqhS6aCfTz%2F0fpuoQQJ9Hx3tYqp8a5wT4zOoGGi2K6fKM74h9cM%2B7cOhHHEGnjTJhDodqUu9I1VLYdT%2BXReVpC2s4u2Iv%2BJtpL%2BLLZgTAAsst&X-Amz-Signature=589d47fe58b412a55bfa7d1f30600964e035feda39c7bfba8172a53ca2567b10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
