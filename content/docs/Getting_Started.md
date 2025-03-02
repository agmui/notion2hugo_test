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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7HXPJD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkmDquXNMIAtCRi35KDAV9kIxQKNe70LzLLwk4RAz%2BJAiATun9H0Sqs4kSaZzZlbfC3oeXE0y6IkDY5fgk0RLV0WCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7TObevVreakTtH3qKtwDRC%2BKOLJkBcJBlN3ZYA5gIr%2BatNTVKid0Muyasqn%2BHM7QQeTO5MBgwjjDZKdRniJrkVYDHq2oS%2B0lWcF1tHXOVKFMy7eLM0EJA9ktjFNOWlWXhHh7SgABB0%2BcSe9UtviPax3xkcdilVz%2B9EA43xztGm0hx9HV0UGCEndluK9B2f64770qc1CfeAOWYRH%2BTMBqIi2Bitb5Zeog8d0NfVE6taV0%2F7dV4mGq%2F2a7BKhySksnWKaYHkQnnPstf0M%2BY%2BWA%2F9gOfV0wZQmIDtA6HCM2vFqeEQiqae7mlig8sZPBr8gNG2y0thhzb8BE8HvStsViE6VAcG%2FecjlwB%2FcbWlC%2FxnIjqEeY%2BPbmLgnmI1CR93UDRdbF6zCGMtGLUJX370gFQQB1LnPpvi87L2XIHy4fkEXqMjNi2vS%2FweOjaTYXr3uc3flDB2yH4dN%2BOkVW4EaAsqxuzaqxtQ6tdkARjdNzZQ0v%2FoJ6A7JW3n12c8VTF2QXaGQZ6qfeVkUDSbz2wTX0hQQuJkOPL3wiLnIur%2BiEuYT%2F8T%2Fl5NiNX090LQ9rczL0I9bvYxVL1QbA%2Fo16ITJavo%2B%2Brzp9zUs8Tn2zJNBH%2FXmqkBq2Nix2oBVq34zywsXD%2BZCZBYrOKJrm39Ywp6WTvgY6pgGXOJdE1lbMStINPOYOPe82UzZSpC518qDRUQsW0UYFTexNfz9wq4gTul2T7DtFos4bqJv9vPjCbjuj11BBLpw69tb8Ag0dovYtUWThNAG0IKh0RleOgepu4Nf4PbrvceQ5s%2Fdfae%2FSU5a8FVd3kWqdyRcIISzgXyxeNAer26dIWD72v7bQdtEYn%2FdqSWNT0PPrjSnDJxwrS1y%2FYm6C90syo9ikbdec&X-Amz-Signature=ee7ccb9e122efe8c0bbb5914b3f9f77e7be7e4b398f05b0281fa6e3c18a74180&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7HXPJD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkmDquXNMIAtCRi35KDAV9kIxQKNe70LzLLwk4RAz%2BJAiATun9H0Sqs4kSaZzZlbfC3oeXE0y6IkDY5fgk0RLV0WCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7TObevVreakTtH3qKtwDRC%2BKOLJkBcJBlN3ZYA5gIr%2BatNTVKid0Muyasqn%2BHM7QQeTO5MBgwjjDZKdRniJrkVYDHq2oS%2B0lWcF1tHXOVKFMy7eLM0EJA9ktjFNOWlWXhHh7SgABB0%2BcSe9UtviPax3xkcdilVz%2B9EA43xztGm0hx9HV0UGCEndluK9B2f64770qc1CfeAOWYRH%2BTMBqIi2Bitb5Zeog8d0NfVE6taV0%2F7dV4mGq%2F2a7BKhySksnWKaYHkQnnPstf0M%2BY%2BWA%2F9gOfV0wZQmIDtA6HCM2vFqeEQiqae7mlig8sZPBr8gNG2y0thhzb8BE8HvStsViE6VAcG%2FecjlwB%2FcbWlC%2FxnIjqEeY%2BPbmLgnmI1CR93UDRdbF6zCGMtGLUJX370gFQQB1LnPpvi87L2XIHy4fkEXqMjNi2vS%2FweOjaTYXr3uc3flDB2yH4dN%2BOkVW4EaAsqxuzaqxtQ6tdkARjdNzZQ0v%2FoJ6A7JW3n12c8VTF2QXaGQZ6qfeVkUDSbz2wTX0hQQuJkOPL3wiLnIur%2BiEuYT%2F8T%2Fl5NiNX090LQ9rczL0I9bvYxVL1QbA%2Fo16ITJavo%2B%2Brzp9zUs8Tn2zJNBH%2FXmqkBq2Nix2oBVq34zywsXD%2BZCZBYrOKJrm39Ywp6WTvgY6pgGXOJdE1lbMStINPOYOPe82UzZSpC518qDRUQsW0UYFTexNfz9wq4gTul2T7DtFos4bqJv9vPjCbjuj11BBLpw69tb8Ag0dovYtUWThNAG0IKh0RleOgepu4Nf4PbrvceQ5s%2Fdfae%2FSU5a8FVd3kWqdyRcIISzgXyxeNAer26dIWD72v7bQdtEYn%2FdqSWNT0PPrjSnDJxwrS1y%2FYm6C90syo9ikbdec&X-Amz-Signature=ab1ebae1adc807db76933f33288040d541a8c000103fded0f4f0525501d7556a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PMUA5B%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsHYYRbetDDktOrndXQX0BKovZf%2F%2BeWnHYa%2FIiBx6EpAiAX2Y3GNeR%2FZbsMPZBNV%2FpKkNmJfc8o3W0hwQ%2BdQl00giqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4x3RlOnaKtMPDihxKtwD3LNwC%2B4snYGHgyehiQPL%2FoTS77ya4BXsvS1gA%2BRpm3YVHZSikuzAXX7z6duuzr7synTR7NV3zMCGJ4HSJPbfGvyTRz50B1V9qNcLVrDUvLHXlQm%2FWdsFEAD8SdRCMuCiGk8SSrHcBJs1YFe83YvnWpoiPxkNAw3gB5FzWRi5Eer5K0aVxpuT3cEtfdcC8YVpFYFzL2q0i66Qoxav4bAkAHSGrHfxxyxaV4vNWiF0EpPolW0hh653ejef4GDHzwbSwscB%2BW%2BZ1N0TzB22ZcRhYvTXAuJzVpk8KCaTwPmrBzEGe3BdhlVZUwwZuuSZgEfETLZq1amX0Ri7Mw7tNUDfQKwzuUrErKChQg1CPC2CUCyZ7UTX84oUOWh3n6c7k4XhO6RHYSHYPyV6imqtzwo7JHi0X1nd3yFrseVoR6yxzxbwJ0fa1pxM5AQR9q2z9G3LMyGK4ROH7%2B9Q4%2B1n%2BnUuFARgCfz7i3QsD7uc9gpBZV4ffe96ozHWfA36nBOlUFBx1RSyQCtwAzCY2WZuUZXmDcKQ1IYj0Srauomt0G7LOm0VLseOJCGZB5FHz5anQPYaDkvtgeNi6MHyd44FGDSBmlB4geCbJQ543XOcXJEWsQR0aGTwctgGBj06%2BlkwpaWTvgY6pgHcJqE5i%2FU1JlWfNymE%2FT8C4xFbhrixlQjaY%2FojWEgzsg8qAV33sJUrGooYFJIdaw6Y4QAUbEv23DtCV0LXxQ%2Bx4vj9ANtfGP%2FtV9EfKyzK%2FvgDcCjeaEhdMcvf37NaTO4gP%2BC4TcLrXoXLJC1GI5iCOf6wB5VUwlOe%2F9XJjvpj0rTNIb1W%2FUSzjZyCiLpnjKBXRPI4vKDc3vIpD%2ByZXtcJD8%2BpH%2BE6&X-Amz-Signature=6541b0fab71f0ba5452c311b8390832cd228ec7d35781a91e64d7fb3a6a97d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6TIBBX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSW2AKcHkxrT2WQWOW7%2BKD19ptdPj%2BlEHdAIyvli4QbAIgLDGzxBYtYIsdMSRo%2B%2F51ZkGWtuGQPvRT11BhW4UBum0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F7PSnIK8dEY5EnbSrcA5eklpRlFq2L9XrsU8UzmVTIDyKPGJJJ8%2F20hL4xfDCW1LGMcHfT6mQrinadQCgjpdnkmyOmSSiguwUqkcn70KxfRMCjXiAa4dwuaZFw3N9xx95unwftgCvjDJ0sc482Kipg9Jc%2FqW6aODscuBABWBFjB4jlJiPsviGUbp3zP1axz3t8WG%2BIkovg%2B5nLJw6w0YUyr%2B4wO3KelJ4UMA2%2Fiyi4iGLOdTmw8SlWblyzUqeMgUlzd4zSJhlqPLUqeP06IJI6sJW5ckWs3sfhLtTykkvHpORUG%2Bn2MiV%2FnGVZRx8efEba6dCuVHQleu4ZH6ZZMgtzZZcGlWZoqq1CxRiTRpLHtnNgUz%2F4g%2FHkXUtJvr%2F5O7iUwKfB%2FQBKPASy9T4BaZ679JVoT%2B0vI7jNmgecaDTT6mBV%2BAlMLHdg7zuQORrKsKZ95pHfw%2B3a2M0oxmIBo9MPkt5X2r6eyOZKnUaKErRd5ZAP8MnzzazOJTMdkfyH11agblitJgIYnf0dk8YifR9vuXTaI6UmUA7aRgcqE%2Fr302VwxU4I%2FxrW8DnklYkv%2B44ytYfmCmYJRmZ7twj55GiNKubgTlS644tJFBN3A5mujBfAmR9E%2FLZESqaqmu0FHSFui%2FtuiIN1sS3RMMqlk74GOqUBCuN3R7%2FAHYiyD%2FOVQMnenHTsab23Qn8156qvQ3d9tnEGEgI9aOO93UcsqvLH%2BZdt0dvLQOh9%2FPDXHbmnhkj3mA0CgztAfhpwF3cAaHd2mxQ1RhdhJseozAcgxjsXboMA%2FRmERhRV%2FydW%2F50WUI5v0H5toF8Qf8suTw1euVDlbSy8CHIi9ytlZFjnQ0SNNBeMLYcjepxNWEkszD4PNd5W90yW9qfJ&X-Amz-Signature=3b05986993a8d3b288a172acdefee8b29f44d824fcebc5faf6406e28997bf492&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7HXPJD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkmDquXNMIAtCRi35KDAV9kIxQKNe70LzLLwk4RAz%2BJAiATun9H0Sqs4kSaZzZlbfC3oeXE0y6IkDY5fgk0RLV0WCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7TObevVreakTtH3qKtwDRC%2BKOLJkBcJBlN3ZYA5gIr%2BatNTVKid0Muyasqn%2BHM7QQeTO5MBgwjjDZKdRniJrkVYDHq2oS%2B0lWcF1tHXOVKFMy7eLM0EJA9ktjFNOWlWXhHh7SgABB0%2BcSe9UtviPax3xkcdilVz%2B9EA43xztGm0hx9HV0UGCEndluK9B2f64770qc1CfeAOWYRH%2BTMBqIi2Bitb5Zeog8d0NfVE6taV0%2F7dV4mGq%2F2a7BKhySksnWKaYHkQnnPstf0M%2BY%2BWA%2F9gOfV0wZQmIDtA6HCM2vFqeEQiqae7mlig8sZPBr8gNG2y0thhzb8BE8HvStsViE6VAcG%2FecjlwB%2FcbWlC%2FxnIjqEeY%2BPbmLgnmI1CR93UDRdbF6zCGMtGLUJX370gFQQB1LnPpvi87L2XIHy4fkEXqMjNi2vS%2FweOjaTYXr3uc3flDB2yH4dN%2BOkVW4EaAsqxuzaqxtQ6tdkARjdNzZQ0v%2FoJ6A7JW3n12c8VTF2QXaGQZ6qfeVkUDSbz2wTX0hQQuJkOPL3wiLnIur%2BiEuYT%2F8T%2Fl5NiNX090LQ9rczL0I9bvYxVL1QbA%2Fo16ITJavo%2B%2Brzp9zUs8Tn2zJNBH%2FXmqkBq2Nix2oBVq34zywsXD%2BZCZBYrOKJrm39Ywp6WTvgY6pgGXOJdE1lbMStINPOYOPe82UzZSpC518qDRUQsW0UYFTexNfz9wq4gTul2T7DtFos4bqJv9vPjCbjuj11BBLpw69tb8Ag0dovYtUWThNAG0IKh0RleOgepu4Nf4PbrvceQ5s%2Fdfae%2FSU5a8FVd3kWqdyRcIISzgXyxeNAer26dIWD72v7bQdtEYn%2FdqSWNT0PPrjSnDJxwrS1y%2FYm6C90syo9ikbdec&X-Amz-Signature=d8a3107752650cac79333a3e23ec11876bcd3908ca23ca20d81e930df2cf2630&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
