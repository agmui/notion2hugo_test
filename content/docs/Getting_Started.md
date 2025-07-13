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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37SYMTM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKo5Nxxp5b615lH7e3sLDsZFdaNhnwCs53o5a%2Bbf748wIgZXhxAap%2FOkC5qbxuIP6yGUIz0eQM1jJ5X8VhNSVHEjcq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEN0r2F0E9OjEesyTCrcA%2BiKbBHDVIPmo%2FBmsHG%2BKd1RV3Mg5ogiZ4EnNGZ0I42gT4phCGIEnigTwJO3ohURhbYerWsw88m6pTSOqfEPTDdeBnm9ln%2FKhRHlC%2BVhDcgqntb0EQwtWutgS0XDBY3jyTzO8Fx6RXwnN%2FyxTP3V2Xjjft6gTDc9wzujl9Vhp2r5qelfOxrzb2bhXJMYgAum6oLzsUvyObP5A1eVFg5En9pE0fKgmHxvVn%2B4ohsleM%2FrpMW%2B4gJX6KMH8cPQuhcTAgU4WrUhKf8T%2BLHLf2jqhZA8ywXiz7%2Bsf9n0npFgODf%2Fo0xGQmU74NBbnUhZbdo7eu8r634r%2BBqnepju3HHIxLVmq3gMWH97T6%2B%2FsmpU7Rvr18HuTUzorJRe6snj6%2BiltmrYkMy%2BFtzxWidujqXyPSUoibMK0TCcfVqx6YhyAtwcwfEoelWVIpar0MvARpsmynM%2FgoLB3hJPNR%2BupurLQf9156ZgPMEGRy5ZnaUTUib%2FpiryUfIl9CjC%2FibQSY4O3fBeoC%2BPZSSu22gp7LrwRx5TQ9LqAzx1aJdIUWOvbF5d4rm%2F1bRdFP6QXfmhehfNLxIykV2siPAPz9xuVHqtZBSmEyJaFO2%2FKXYKCvbI4Ja5II61JwNKp7rdCaOSMJ6Wz8MGOqUBW%2BWlzVk5UpmfnAVJQ1zRSezLWMlxudPJAbqH0txUIEojCon0UvW4FLyQKeeviFBlor7lpzrOk4VbYiZF5RMEOfzoZfk8xgJ4mD5c9YS2t99pYPo47UlDB9qhc6n3D2MiqT1jV7WNqFCVfq3aodw6zQlz9v2pu7CgR9erNmynSRGhaOBB2y0tJ2qchUUyskNhZawWhCakgSud34%2FdcZwhcF7Dmrfu&X-Amz-Signature=41e5e80cacc8c51c889ff1dd56f8d94ba7e9e0ad7eac86e618a054202462461e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37SYMTM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKo5Nxxp5b615lH7e3sLDsZFdaNhnwCs53o5a%2Bbf748wIgZXhxAap%2FOkC5qbxuIP6yGUIz0eQM1jJ5X8VhNSVHEjcq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEN0r2F0E9OjEesyTCrcA%2BiKbBHDVIPmo%2FBmsHG%2BKd1RV3Mg5ogiZ4EnNGZ0I42gT4phCGIEnigTwJO3ohURhbYerWsw88m6pTSOqfEPTDdeBnm9ln%2FKhRHlC%2BVhDcgqntb0EQwtWutgS0XDBY3jyTzO8Fx6RXwnN%2FyxTP3V2Xjjft6gTDc9wzujl9Vhp2r5qelfOxrzb2bhXJMYgAum6oLzsUvyObP5A1eVFg5En9pE0fKgmHxvVn%2B4ohsleM%2FrpMW%2B4gJX6KMH8cPQuhcTAgU4WrUhKf8T%2BLHLf2jqhZA8ywXiz7%2Bsf9n0npFgODf%2Fo0xGQmU74NBbnUhZbdo7eu8r634r%2BBqnepju3HHIxLVmq3gMWH97T6%2B%2FsmpU7Rvr18HuTUzorJRe6snj6%2BiltmrYkMy%2BFtzxWidujqXyPSUoibMK0TCcfVqx6YhyAtwcwfEoelWVIpar0MvARpsmynM%2FgoLB3hJPNR%2BupurLQf9156ZgPMEGRy5ZnaUTUib%2FpiryUfIl9CjC%2FibQSY4O3fBeoC%2BPZSSu22gp7LrwRx5TQ9LqAzx1aJdIUWOvbF5d4rm%2F1bRdFP6QXfmhehfNLxIykV2siPAPz9xuVHqtZBSmEyJaFO2%2FKXYKCvbI4Ja5II61JwNKp7rdCaOSMJ6Wz8MGOqUBW%2BWlzVk5UpmfnAVJQ1zRSezLWMlxudPJAbqH0txUIEojCon0UvW4FLyQKeeviFBlor7lpzrOk4VbYiZF5RMEOfzoZfk8xgJ4mD5c9YS2t99pYPo47UlDB9qhc6n3D2MiqT1jV7WNqFCVfq3aodw6zQlz9v2pu7CgR9erNmynSRGhaOBB2y0tJ2qchUUyskNhZawWhCakgSud34%2FdcZwhcF7Dmrfu&X-Amz-Signature=70285ee5f6a64ad695bc9308ad8683077d5de3b168738df1ca93c8ac799605f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37SYMTM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKo5Nxxp5b615lH7e3sLDsZFdaNhnwCs53o5a%2Bbf748wIgZXhxAap%2FOkC5qbxuIP6yGUIz0eQM1jJ5X8VhNSVHEjcq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEN0r2F0E9OjEesyTCrcA%2BiKbBHDVIPmo%2FBmsHG%2BKd1RV3Mg5ogiZ4EnNGZ0I42gT4phCGIEnigTwJO3ohURhbYerWsw88m6pTSOqfEPTDdeBnm9ln%2FKhRHlC%2BVhDcgqntb0EQwtWutgS0XDBY3jyTzO8Fx6RXwnN%2FyxTP3V2Xjjft6gTDc9wzujl9Vhp2r5qelfOxrzb2bhXJMYgAum6oLzsUvyObP5A1eVFg5En9pE0fKgmHxvVn%2B4ohsleM%2FrpMW%2B4gJX6KMH8cPQuhcTAgU4WrUhKf8T%2BLHLf2jqhZA8ywXiz7%2Bsf9n0npFgODf%2Fo0xGQmU74NBbnUhZbdo7eu8r634r%2BBqnepju3HHIxLVmq3gMWH97T6%2B%2FsmpU7Rvr18HuTUzorJRe6snj6%2BiltmrYkMy%2BFtzxWidujqXyPSUoibMK0TCcfVqx6YhyAtwcwfEoelWVIpar0MvARpsmynM%2FgoLB3hJPNR%2BupurLQf9156ZgPMEGRy5ZnaUTUib%2FpiryUfIl9CjC%2FibQSY4O3fBeoC%2BPZSSu22gp7LrwRx5TQ9LqAzx1aJdIUWOvbF5d4rm%2F1bRdFP6QXfmhehfNLxIykV2siPAPz9xuVHqtZBSmEyJaFO2%2FKXYKCvbI4Ja5II61JwNKp7rdCaOSMJ6Wz8MGOqUBW%2BWlzVk5UpmfnAVJQ1zRSezLWMlxudPJAbqH0txUIEojCon0UvW4FLyQKeeviFBlor7lpzrOk4VbYiZF5RMEOfzoZfk8xgJ4mD5c9YS2t99pYPo47UlDB9qhc6n3D2MiqT1jV7WNqFCVfq3aodw6zQlz9v2pu7CgR9erNmynSRGhaOBB2y0tJ2qchUUyskNhZawWhCakgSud34%2FdcZwhcF7Dmrfu&X-Amz-Signature=4496a20727d2406d224de00a57ed6172d574dd7a794c147a868914f3cddfdd27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDWVZM7H%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHOTPmrhGKea0SnkJutQb8BjXUkeOmGBWvUEzxYkgGOAiBbIASiIreTvu7D%2FYVerw%2FrcwZ4htDBfy9svUoNg%2FtwPir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMmcUBPo2IkDuvH2E2KtwDnoRs92UsyzJlZUcKyn1CmJKFTjmXMY5TzmsfLtueLl5n6TVMvRK9AfXJcE6fCPGHJFdXlzfrgzYK7gwHfZK7JNImcn4Wmh89snBEtQ1I%2FjtZQwNg1J7AusRONfWaXxl4Qwcn1BxGXTm5a3JqGJrUBYgaok827WpCX2EI0wH8xj%2BYnYI0NdrONQh%2Fh%2FDGGgyW3wCQ4iWuHHMZzKboamro3v1o5SD6q5%2BK8LiMhsrRYrFwIzYbR1PQ0nkGubWRA%2FKQc7JAnL2slvwJ9x4YxsQcrLB%2B8hpgp8H11Hkg%2FuNpZ9frP782%2BgQdxwrAydqvkzH0sCN7Qkb6aT2RdEvty960SXWyKNUX7finqMbYDYju66OqnROg3JqnyhgpWmpmFSxBsgj%2FNjCEuGx7AOO6eSEF81up1prcLg8sI8INNJ5I2RjIJ3opqOdmw51f76T8LvuMcr%2FP9ssiHnnBDAljT4QuZ59%2BxJag0sp0Db2P6IhZooEOQ6D5MjtEoDj5I2%2B1pGOm0PEVBtChV2H8j%2FEiuQbebMnaefghUR8XtuMY8RvhLIRctH8UW8PIdG2YR7fKmhpsllbxC2%2BGjuOHNwwBzGK7jSl1yWab%2FYTi0nRCtqESd6gHFHkUC3yJXQF6cBQwmJbPwwY6pgFMh2qa4hFdm1XRgoXCqqBuSgSKrlJ6qbJwPCQJcwPEcu6aFRNNGx5kROJuT6gJ7e3ihdGPZ3mK0tytu58Jy%2FkmBiUnNzHiwoBTlJ7MIwoLblYqEUnafFstJ31bF6qIQdtBztoUw0XXGQsZWKwlBek27nyyAl%2BvN7LmQ%2Bs8JyrQkDEJzWlqlJcQzGU%2BGAFuR%2FN7qSro2mSWh2WCubgbAocqkewxFQM%2B&X-Amz-Signature=f10220b0c2c7ee0b99f9cd7aa991b203bd3f44cc1b9c9c00fd950ff6ccb2b190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGK2RPK4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcXPQ%2BWLyZ9s38ebZtCmTcnWZ625xZdxTix%2BCklGE4bAIhAJXQ1lmyx%2Bz3C2eRNO3zpG9BmRJefEcOrZPVlDt8BZQKKv8DCBYQABoMNjM3NDIzMTgzODA1IgwRoaHXLcS3g43a3Pkq3ANbq6qbce11DM%2BrHlqdvcLmjwfr43VHxiH2AtLDY95K7cW8EK82wHpGKIIG7QGyjaqsIC1dnb3ZqXCXGKnMAYLgvQUU%2B%2F6DGa9kAoeQZB2OGVTvhcCpWiobc%2BEAd4I2REvx2aUKIVRPbt5fwmq1IdInEbcN9M82xbXdwOQhjUF1TtWwRMWANiJYpjee38ZrsJlc9tUbehtUCLiGqskqVBuuUPCWTBe8%2BmFJ2ygygmeNyY6UFbq4tiBx9ZdqvNLyDY2CIaNoMT%2FnAR27T1VWpmpqiwEehuJvHjKqG4xpWsWOCX6r6VzB816P9uEb9wNv7baNoX413e8ehl1rTHq%2BdoUJR%2FnZvYks8FEXhbzsEUUqMp1b5x%2F%2B%2F9P5x05x2ngXrBeHEZeqDEMBd0wIQfijjnK46H4ZAexV3%2FgEQR%2FOrDXjt2tSJNmZOUJN8H1r7DHU6fVJiEcexNHORV%2F89ANyZYZnY7S1yuzlIX6JFO8WWrtYaL9r6Kqb42VTT00FKb673oMLJMKA6jTr65%2Fg6s0A19Q%2BenZlBrDdFLpObVEdXxa8UDhnRM9sdthUKEEewuza%2Bvrj0jrFc1I8Yr3dHpoZuPdlmSurk4Dsc3pDIDoKHm%2B12v0KkjmmCIOrTjt0%2FzDMys7DBjqkAcMAHX8iAvy3Ahis3CijkKIQYdtOvm5RyTYsHV3HBWWiJe57cfqSTJcN60RYbiSxMHeM3tUJCqKmPROLADrFpm0Ve0%2Bg6zyf5euDVxYGEanI4uaoLUhVhDbdC%2Fkc%2F%2FrqfIZKaYtQkXTnuxnY2F8IX9kpMcoHCkSfdN52xmbmETo4CQ966OgXacdImV%2BHGphI5EBnLcvHEcEpUmIrRm7L1UxcHmtf&X-Amz-Signature=0fe8c50d6461a6a14ba3768bae9072f40b034e2947ce4ab7ef81b2e8887113f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37SYMTM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKo5Nxxp5b615lH7e3sLDsZFdaNhnwCs53o5a%2Bbf748wIgZXhxAap%2FOkC5qbxuIP6yGUIz0eQM1jJ5X8VhNSVHEjcq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEN0r2F0E9OjEesyTCrcA%2BiKbBHDVIPmo%2FBmsHG%2BKd1RV3Mg5ogiZ4EnNGZ0I42gT4phCGIEnigTwJO3ohURhbYerWsw88m6pTSOqfEPTDdeBnm9ln%2FKhRHlC%2BVhDcgqntb0EQwtWutgS0XDBY3jyTzO8Fx6RXwnN%2FyxTP3V2Xjjft6gTDc9wzujl9Vhp2r5qelfOxrzb2bhXJMYgAum6oLzsUvyObP5A1eVFg5En9pE0fKgmHxvVn%2B4ohsleM%2FrpMW%2B4gJX6KMH8cPQuhcTAgU4WrUhKf8T%2BLHLf2jqhZA8ywXiz7%2Bsf9n0npFgODf%2Fo0xGQmU74NBbnUhZbdo7eu8r634r%2BBqnepju3HHIxLVmq3gMWH97T6%2B%2FsmpU7Rvr18HuTUzorJRe6snj6%2BiltmrYkMy%2BFtzxWidujqXyPSUoibMK0TCcfVqx6YhyAtwcwfEoelWVIpar0MvARpsmynM%2FgoLB3hJPNR%2BupurLQf9156ZgPMEGRy5ZnaUTUib%2FpiryUfIl9CjC%2FibQSY4O3fBeoC%2BPZSSu22gp7LrwRx5TQ9LqAzx1aJdIUWOvbF5d4rm%2F1bRdFP6QXfmhehfNLxIykV2siPAPz9xuVHqtZBSmEyJaFO2%2FKXYKCvbI4Ja5II61JwNKp7rdCaOSMJ6Wz8MGOqUBW%2BWlzVk5UpmfnAVJQ1zRSezLWMlxudPJAbqH0txUIEojCon0UvW4FLyQKeeviFBlor7lpzrOk4VbYiZF5RMEOfzoZfk8xgJ4mD5c9YS2t99pYPo47UlDB9qhc6n3D2MiqT1jV7WNqFCVfq3aodw6zQlz9v2pu7CgR9erNmynSRGhaOBB2y0tJ2qchUUyskNhZawWhCakgSud34%2FdcZwhcF7Dmrfu&X-Amz-Signature=e1de0752e0c9df07e8f86bf18c72d07fade88f1a1a0a2518e0a04f0fb0362b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
