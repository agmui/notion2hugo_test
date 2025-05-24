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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQ7SFQ5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDHUPjXm8%2FSI%2B%2FrDgC1qnO2%2FkA2EU2Ery01RJAAbr7yCAiEAi3%2FY8ZticL1xeYo%2FXyihFGZPIMQ6E%2FR7dujUytBeKUYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbkqkK82xU1%2FvGA8ircA%2BAcvQS40G7WhX%2BW5xbF%2FO7cG90blReebfqwKoCOd8KJXG%2FnAiv7J1oOu7%2FZ%2B2zYyx9Y5zS%2BGdJi5udOQ3jWNcrX5cuerzZgkJmbsBcysYyuYP%2FlZ0MLWIYI301TbQtYTEmP2vYsllz8VpoE73NFNPoY4dgIoIsRdv7QRVkOXlk3wU6bmgOiiJCeJ7XBAY6iMLPf0jfx8OXooU5T6P7xmsfQN%2Fz0jAOnO4sKQNMIOBq7p8kDb4UHEdUNS1aZ0mmVXsrrRD2bILAVQl8KuLrnPHFa9tEDd2f27%2FZmtzQJGVLNZMrF2pBOiU7b0PR2dFy1ULT4nZjykP9svOa2PobDpWbykI0hXUFAgMyPH3SOuJGQLydW3cR5dmxqANCU1twF1IR6Eo02vEu3ST1sHwU6Zm6%2B%2FuSPHkEnxQaHa7I6A3YNCNdjiVstXBTIOp6Hy97lQy3zDLzpXP3Bv8e8gCGYfaOaB96hpXrxswTlwkDHhXaG6d9bUVkMq93Ir9p7mwzKwfNuXqYnYvTU0dXb0oSAFFqiWQi6%2BqbYCKBgLcB%2BkF%2BS8HijZh1pEtJtypEibpzakYsl0OGsotmSThAzbsx%2F4H53Hn4Etqm6iM81pQ6iSik4ryif%2BWDWGyqEZmUAMPr3xMEGOqUBbuElmbvmU9IVc3UVYuv58L%2F4D6x1K%2Bsx4ypQT%2B5gjuhGV0eD264DhIxjkgvOYM32dO44BPWDsE72yxnhxL10vKCKCy1RhP30%2FRLPrCfEVuq8ST1MIjHGmLmaSLY15zdCKheUUp1hiNw8a9r9kcp3zamq845d1IbfpikboV9tWZcUoOetl0dhRqAGBmgLj1b1Fbsw3AizhkKUfchNaRN0NW46zhm4&X-Amz-Signature=f6aaea624a0d63570ae614babfcbef6517e9a98ca5ed8c74e173e02e4737fd63&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQ7SFQ5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDHUPjXm8%2FSI%2B%2FrDgC1qnO2%2FkA2EU2Ery01RJAAbr7yCAiEAi3%2FY8ZticL1xeYo%2FXyihFGZPIMQ6E%2FR7dujUytBeKUYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbkqkK82xU1%2FvGA8ircA%2BAcvQS40G7WhX%2BW5xbF%2FO7cG90blReebfqwKoCOd8KJXG%2FnAiv7J1oOu7%2FZ%2B2zYyx9Y5zS%2BGdJi5udOQ3jWNcrX5cuerzZgkJmbsBcysYyuYP%2FlZ0MLWIYI301TbQtYTEmP2vYsllz8VpoE73NFNPoY4dgIoIsRdv7QRVkOXlk3wU6bmgOiiJCeJ7XBAY6iMLPf0jfx8OXooU5T6P7xmsfQN%2Fz0jAOnO4sKQNMIOBq7p8kDb4UHEdUNS1aZ0mmVXsrrRD2bILAVQl8KuLrnPHFa9tEDd2f27%2FZmtzQJGVLNZMrF2pBOiU7b0PR2dFy1ULT4nZjykP9svOa2PobDpWbykI0hXUFAgMyPH3SOuJGQLydW3cR5dmxqANCU1twF1IR6Eo02vEu3ST1sHwU6Zm6%2B%2FuSPHkEnxQaHa7I6A3YNCNdjiVstXBTIOp6Hy97lQy3zDLzpXP3Bv8e8gCGYfaOaB96hpXrxswTlwkDHhXaG6d9bUVkMq93Ir9p7mwzKwfNuXqYnYvTU0dXb0oSAFFqiWQi6%2BqbYCKBgLcB%2BkF%2BS8HijZh1pEtJtypEibpzakYsl0OGsotmSThAzbsx%2F4H53Hn4Etqm6iM81pQ6iSik4ryif%2BWDWGyqEZmUAMPr3xMEGOqUBbuElmbvmU9IVc3UVYuv58L%2F4D6x1K%2Bsx4ypQT%2B5gjuhGV0eD264DhIxjkgvOYM32dO44BPWDsE72yxnhxL10vKCKCy1RhP30%2FRLPrCfEVuq8ST1MIjHGmLmaSLY15zdCKheUUp1hiNw8a9r9kcp3zamq845d1IbfpikboV9tWZcUoOetl0dhRqAGBmgLj1b1Fbsw3AizhkKUfchNaRN0NW46zhm4&X-Amz-Signature=c89f4fe6e08b120ea39674784511b7225d9b1612b8311c2e3131dd53581f1614&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQ7SFQ5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDHUPjXm8%2FSI%2B%2FrDgC1qnO2%2FkA2EU2Ery01RJAAbr7yCAiEAi3%2FY8ZticL1xeYo%2FXyihFGZPIMQ6E%2FR7dujUytBeKUYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbkqkK82xU1%2FvGA8ircA%2BAcvQS40G7WhX%2BW5xbF%2FO7cG90blReebfqwKoCOd8KJXG%2FnAiv7J1oOu7%2FZ%2B2zYyx9Y5zS%2BGdJi5udOQ3jWNcrX5cuerzZgkJmbsBcysYyuYP%2FlZ0MLWIYI301TbQtYTEmP2vYsllz8VpoE73NFNPoY4dgIoIsRdv7QRVkOXlk3wU6bmgOiiJCeJ7XBAY6iMLPf0jfx8OXooU5T6P7xmsfQN%2Fz0jAOnO4sKQNMIOBq7p8kDb4UHEdUNS1aZ0mmVXsrrRD2bILAVQl8KuLrnPHFa9tEDd2f27%2FZmtzQJGVLNZMrF2pBOiU7b0PR2dFy1ULT4nZjykP9svOa2PobDpWbykI0hXUFAgMyPH3SOuJGQLydW3cR5dmxqANCU1twF1IR6Eo02vEu3ST1sHwU6Zm6%2B%2FuSPHkEnxQaHa7I6A3YNCNdjiVstXBTIOp6Hy97lQy3zDLzpXP3Bv8e8gCGYfaOaB96hpXrxswTlwkDHhXaG6d9bUVkMq93Ir9p7mwzKwfNuXqYnYvTU0dXb0oSAFFqiWQi6%2BqbYCKBgLcB%2BkF%2BS8HijZh1pEtJtypEibpzakYsl0OGsotmSThAzbsx%2F4H53Hn4Etqm6iM81pQ6iSik4ryif%2BWDWGyqEZmUAMPr3xMEGOqUBbuElmbvmU9IVc3UVYuv58L%2F4D6x1K%2Bsx4ypQT%2B5gjuhGV0eD264DhIxjkgvOYM32dO44BPWDsE72yxnhxL10vKCKCy1RhP30%2FRLPrCfEVuq8ST1MIjHGmLmaSLY15zdCKheUUp1hiNw8a9r9kcp3zamq845d1IbfpikboV9tWZcUoOetl0dhRqAGBmgLj1b1Fbsw3AizhkKUfchNaRN0NW46zhm4&X-Amz-Signature=a82e0f8fd6ecce2acb76151a01d16a1bbbaec9dc85484e9d19ee60b12fe31b90&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGO5SL6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDs7pxU3ACbzh3LBnWTupWvjnMKYZvYNqFnBj0HbNGZMwIgRUUNVaOCqhO7nZXpV3vOCzn1xv0LNmoOj8mvdjDxQy8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIZu1MxkggbnVB2fyrcA%2FJckqfAwtCoM%2BadKRKHhJywCFdfBoby6MCakZ0JTh81qE7MV%2FJ%2B790Sc9JQqfK%2B8Ov23vNIhG6Ion3uAvo0%2FsE4qG8TzNVIr5EH02oMyG3tC1wzFs4rjTaFZId8qhCfvEHmHAoZ1YhWDNi9eDphyE2%2FMWcuEHvM9g6fxnV3dDxWXZapjXWvt8JM8nfW%2B1vb6dI%2BFrN0KH%2BiM4MfzJWVx%2F9mx8oF%2B4aumDOAqX5XAXgE9gfpNMbMFhbGAMcxnqj%2BvFXrLW2cM3zDwyHYwepzyVcr1GxGh25W6MIDrW2J8tvpziM11De1MsV3CkKLpabvNaxZh5dL4Uvc%2B2R2QvzwvCpyKkKV%2BpHef5i7PYCfvFEparQh1wZVYy5ciytHyyQRS8UY%2BgGHrr2PKXpFL%2Fi%2F8T3dAu%2FhLSXznYeEXWnDKGCil%2FcFSl%2BoxkJgSsG%2BYBB7pQt6fAbRO8%2FnMF%2Bbi%2FsHdTNII5mip1rIU8Fnb2TSYhCeayV5zN6bTDoH5GrBVY%2FKkgmpsS0EPoVtdyYBuuwxlBnFLf0Zu5KppU2uJk0QPCKd2bRdRV8q8YYXILRxg9cQYXlExdwxy21gxnwAEpCebb%2BlD%2BbrryiY7oTGvO0qKtFKUrMFlx9fDLa%2FgB6NMOH4xMEGOqUBEOZqrRr%2FjT%2BzpIzievUGeOtM%2FnPMsWbBnDE5q0QXqMxuiV1RkSXypAwwoA7hgDbEanAh1Da5y7DzdJ4vygjXaql98wCUaysCsJvDCeb2cp8FptQuLAzS6HCT0x8z006Y8KgB%2BncPA4SZh8ALauvpdmZangZPHH1%2B9Z7b9bcmrfbtdpYbDgI9DTbNk1FrBiBlNkAOCrzpZw6AA3WIaRaJ3HMtcS%2Bp&X-Amz-Signature=f487876d27e3b2a4ddc7852b27f373ce1da03e963b9716c807cb82b03e2be09c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN4AYDP2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCTOUHH146CYugslIgQaZkiUF9Mle5%2FblVTpwigG223jAIhAK3o8Bcyf7oENaC08pNrKkb2lYltZyaXp5Qvenys%2FwqvKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfLCr993RVIHTaPeQq3AM3Xi2p4XFyHnuTqJTHaJpUWM0ODGGpMY%2FVPNqcmooCPIHgg3jWMfl0OneWxCuVJui62SfAxMbcgJM9r4EuAIomO85texENQCIsKjTyp9LTIm%2F0ATX3KHqxiqOzV4BHxm18qVGx7P44ArS2Y6isBliIwAzbtYivH00rsBw9DiVS%2Fv11OC6nHwU0WKqyfXNXrNqmzow71HObOG3AByu5Eo4X3moELbsnO9CFWk354dLv2YH%2FudlugRXM9TGGibgv9PqtJVDDUiOu%2BTmA8RjKCXzPYhPkuZCulauJS%2FDvIPvaEpGp%2FpSvSi9iT2uIICkXmS7VNUGdwn6ELGF2O4KTHmc%2BpydUUDJ5YTarx7CZ5UuNKQp8HVWhYoQ%2Fhjhletpp9sIVNSX1SOvDDfWJiHrZ%2BO1RLkq0faniHg7qE6nRHkzw6WRSkUP6lAjZbFS1z4J2Dc7xVY5UG0x3g6kmjPAtU1ja%2FwpGZ%2BiBYHOAn1dfRReTp%2BqonCb%2BA57FgFD%2BcsT%2FnWtgaQN%2BOecO585Zfx2w0V7onzFdFafk9o%2Bu%2FHA81e6UssQBgMffDR6fGaSyAfR6RtNDEvN%2FbPRBe2vZL9S7PCEbWrpDETRYqa1HOlJtpSvgRry%2FmC0P1vdA7QEyxjDx98TBBjqkAcRQu2IEonYxBw4KQi1sU0JMbSnZFVM2NwRxYr9gwkhGbDFmTBUbdcYmfQi4yWYTtow8J1ZBgTyEWftusjibGcy21GLQdW4%2Bquv8YhmctFMwkzMJ7JUvcZFSMKooMT0jjFi0N5GuB08J%2FkJ0%2FEr2VUq%2FyBrfL6gJdtK8374%2BPTRoD%2FRXWCLxEFAYdjS2sqTUbljj8S8QktuM5You8kijwcE3hdxb&X-Amz-Signature=11f1d13e243c7748fe376569d1a10f018959a08a46e5ffb3dfeba1a67e7f0e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQ7SFQ5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDHUPjXm8%2FSI%2B%2FrDgC1qnO2%2FkA2EU2Ery01RJAAbr7yCAiEAi3%2FY8ZticL1xeYo%2FXyihFGZPIMQ6E%2FR7dujUytBeKUYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbkqkK82xU1%2FvGA8ircA%2BAcvQS40G7WhX%2BW5xbF%2FO7cG90blReebfqwKoCOd8KJXG%2FnAiv7J1oOu7%2FZ%2B2zYyx9Y5zS%2BGdJi5udOQ3jWNcrX5cuerzZgkJmbsBcysYyuYP%2FlZ0MLWIYI301TbQtYTEmP2vYsllz8VpoE73NFNPoY4dgIoIsRdv7QRVkOXlk3wU6bmgOiiJCeJ7XBAY6iMLPf0jfx8OXooU5T6P7xmsfQN%2Fz0jAOnO4sKQNMIOBq7p8kDb4UHEdUNS1aZ0mmVXsrrRD2bILAVQl8KuLrnPHFa9tEDd2f27%2FZmtzQJGVLNZMrF2pBOiU7b0PR2dFy1ULT4nZjykP9svOa2PobDpWbykI0hXUFAgMyPH3SOuJGQLydW3cR5dmxqANCU1twF1IR6Eo02vEu3ST1sHwU6Zm6%2B%2FuSPHkEnxQaHa7I6A3YNCNdjiVstXBTIOp6Hy97lQy3zDLzpXP3Bv8e8gCGYfaOaB96hpXrxswTlwkDHhXaG6d9bUVkMq93Ir9p7mwzKwfNuXqYnYvTU0dXb0oSAFFqiWQi6%2BqbYCKBgLcB%2BkF%2BS8HijZh1pEtJtypEibpzakYsl0OGsotmSThAzbsx%2F4H53Hn4Etqm6iM81pQ6iSik4ryif%2BWDWGyqEZmUAMPr3xMEGOqUBbuElmbvmU9IVc3UVYuv58L%2F4D6x1K%2Bsx4ypQT%2B5gjuhGV0eD264DhIxjkgvOYM32dO44BPWDsE72yxnhxL10vKCKCy1RhP30%2FRLPrCfEVuq8ST1MIjHGmLmaSLY15zdCKheUUp1hiNw8a9r9kcp3zamq845d1IbfpikboV9tWZcUoOetl0dhRqAGBmgLj1b1Fbsw3AizhkKUfchNaRN0NW46zhm4&X-Amz-Signature=3ad1c67bddb009104279153ed2e8dfd88e6647b1321cab005e6db61b76208772&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
