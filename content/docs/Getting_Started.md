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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B66EUSU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMiaOcDT%2FmExhCXeeIlJ0S5JGQtFM6EVUrX1QX22N58QIhAPB62nK8b0zulKe1RBcf45gjlpFEU0oxOFSYUkSMslOlKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTmH%2BXBdg7tchoIaIq3ANd6uO2nmOJb5taVOCoQb9MilMZxJZEeXS%2BX%2BkxBA4eet4U%2BkF4zEQH%2FD%2F4BC0Tc%2B2fU6pPBizzoC7aFUnznWZxc1gLeAOL9MSYEv%2F6QfTXA17o%2Bujdtf3GVxkNqKrHXq%2FxWoFr6bQR%2FBG2CTfFD9N4Wf%2BDcd3Zc8zsoBhv%2B%2FME0X5Gona9nys%2FE%2FTXWmFxSR5g7rVCsxvvJ2Vb%2FMAP54rxIgFZNSE8VF2Vlv2Cu1exNhvjqohZtCu4EOnk8lhbS91%2Bo095OZOrK3hzmQRDxPnCxvW7EJ33ALKSM2yzXBqwgrUUik8yLRkNO9nF%2BrnS5j83nYvvAApSbtTR7NW%2BUlfE%2ByKnVouMiATxve3q%2FlBCafOZK2tyIyDC0h%2FEWtUbW1RW5j7ncfZmlvn8IEH492b57aZ8fZ2b%2FtFw%2F45a6%2FtNJuAu43rWorJLSTLaFRUE%2FJaYN7uPSlcxjNs7g%2FdiidsmmpdG0nFwLCNDZOnKEIxhUVZe%2BdGx9IH6jIT2zo3XToSXUafdh7qAhzo0UxUJIxPzfPuFz3n1iOv8%2BAj9f72MKptSZ%2BNMieZbAgkH7wKWMtIYFNPRj74eSYsLD8Rf7M%2BpIBpbgwmCzvn4duP4lIkHjiBvecvyiPNKAcVhwDCQl4LDBjqkAewMexyG1bkjT0BuIDrkfPWMO3BWk3fZMB7MpRO0iSxuyMOrxiynXJNan5bacpXHfs7HIVCiiqB%2BKqPDQ9pLb8JNML9Yjc4e462YcqHFGwZmVDbKdrzAaBIduwhpP4%2F0Z37klUJ6cJyZ9et6siqM4QbMH%2F6aZPDKCMIkNQcnuuzYXGC%2FUwf2g%2ByfRpIVOGNYTbZIzREarciE%2BmsEErCcv4vMm68G&X-Amz-Signature=98875b3ad7753c2867e0fa90fd1c6092f4822bd0edc17dc712677498454899b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B66EUSU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMiaOcDT%2FmExhCXeeIlJ0S5JGQtFM6EVUrX1QX22N58QIhAPB62nK8b0zulKe1RBcf45gjlpFEU0oxOFSYUkSMslOlKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTmH%2BXBdg7tchoIaIq3ANd6uO2nmOJb5taVOCoQb9MilMZxJZEeXS%2BX%2BkxBA4eet4U%2BkF4zEQH%2FD%2F4BC0Tc%2B2fU6pPBizzoC7aFUnznWZxc1gLeAOL9MSYEv%2F6QfTXA17o%2Bujdtf3GVxkNqKrHXq%2FxWoFr6bQR%2FBG2CTfFD9N4Wf%2BDcd3Zc8zsoBhv%2B%2FME0X5Gona9nys%2FE%2FTXWmFxSR5g7rVCsxvvJ2Vb%2FMAP54rxIgFZNSE8VF2Vlv2Cu1exNhvjqohZtCu4EOnk8lhbS91%2Bo095OZOrK3hzmQRDxPnCxvW7EJ33ALKSM2yzXBqwgrUUik8yLRkNO9nF%2BrnS5j83nYvvAApSbtTR7NW%2BUlfE%2ByKnVouMiATxve3q%2FlBCafOZK2tyIyDC0h%2FEWtUbW1RW5j7ncfZmlvn8IEH492b57aZ8fZ2b%2FtFw%2F45a6%2FtNJuAu43rWorJLSTLaFRUE%2FJaYN7uPSlcxjNs7g%2FdiidsmmpdG0nFwLCNDZOnKEIxhUVZe%2BdGx9IH6jIT2zo3XToSXUafdh7qAhzo0UxUJIxPzfPuFz3n1iOv8%2BAj9f72MKptSZ%2BNMieZbAgkH7wKWMtIYFNPRj74eSYsLD8Rf7M%2BpIBpbgwmCzvn4duP4lIkHjiBvecvyiPNKAcVhwDCQl4LDBjqkAewMexyG1bkjT0BuIDrkfPWMO3BWk3fZMB7MpRO0iSxuyMOrxiynXJNan5bacpXHfs7HIVCiiqB%2BKqPDQ9pLb8JNML9Yjc4e462YcqHFGwZmVDbKdrzAaBIduwhpP4%2F0Z37klUJ6cJyZ9et6siqM4QbMH%2F6aZPDKCMIkNQcnuuzYXGC%2FUwf2g%2ByfRpIVOGNYTbZIzREarciE%2BmsEErCcv4vMm68G&X-Amz-Signature=4a6ff4e9ac69e1b7467b0fd3a8012066870991870edcee12192f421a4f1a9a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B66EUSU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMiaOcDT%2FmExhCXeeIlJ0S5JGQtFM6EVUrX1QX22N58QIhAPB62nK8b0zulKe1RBcf45gjlpFEU0oxOFSYUkSMslOlKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTmH%2BXBdg7tchoIaIq3ANd6uO2nmOJb5taVOCoQb9MilMZxJZEeXS%2BX%2BkxBA4eet4U%2BkF4zEQH%2FD%2F4BC0Tc%2B2fU6pPBizzoC7aFUnznWZxc1gLeAOL9MSYEv%2F6QfTXA17o%2Bujdtf3GVxkNqKrHXq%2FxWoFr6bQR%2FBG2CTfFD9N4Wf%2BDcd3Zc8zsoBhv%2B%2FME0X5Gona9nys%2FE%2FTXWmFxSR5g7rVCsxvvJ2Vb%2FMAP54rxIgFZNSE8VF2Vlv2Cu1exNhvjqohZtCu4EOnk8lhbS91%2Bo095OZOrK3hzmQRDxPnCxvW7EJ33ALKSM2yzXBqwgrUUik8yLRkNO9nF%2BrnS5j83nYvvAApSbtTR7NW%2BUlfE%2ByKnVouMiATxve3q%2FlBCafOZK2tyIyDC0h%2FEWtUbW1RW5j7ncfZmlvn8IEH492b57aZ8fZ2b%2FtFw%2F45a6%2FtNJuAu43rWorJLSTLaFRUE%2FJaYN7uPSlcxjNs7g%2FdiidsmmpdG0nFwLCNDZOnKEIxhUVZe%2BdGx9IH6jIT2zo3XToSXUafdh7qAhzo0UxUJIxPzfPuFz3n1iOv8%2BAj9f72MKptSZ%2BNMieZbAgkH7wKWMtIYFNPRj74eSYsLD8Rf7M%2BpIBpbgwmCzvn4duP4lIkHjiBvecvyiPNKAcVhwDCQl4LDBjqkAewMexyG1bkjT0BuIDrkfPWMO3BWk3fZMB7MpRO0iSxuyMOrxiynXJNan5bacpXHfs7HIVCiiqB%2BKqPDQ9pLb8JNML9Yjc4e462YcqHFGwZmVDbKdrzAaBIduwhpP4%2F0Z37klUJ6cJyZ9et6siqM4QbMH%2F6aZPDKCMIkNQcnuuzYXGC%2FUwf2g%2ByfRpIVOGNYTbZIzREarciE%2BmsEErCcv4vMm68G&X-Amz-Signature=2bc6d5128cc57055424ddb3e9dff4c56422e7cbe1d42a8cb33b2f19a737f2986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPSRMHNF%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjLD1XIs4YtVVhlMV8VS4umTYCTFbfOfXyfT1jve%2FYVAiAE4d8Ad47PmBEHEM5hT5yf%2Fv9tjaBFdsQqUxxFl0JryiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHKNpTb4q%2FgJ%2Bmv%2BDKtwDYgSVuuzCu0Yazq8e27IflbMa%2Bxrb8iDwIaLCXGkJ26ItwadDO%2Btt3XThyEQUjuPdAK6bC7Z3mwilcQsZRqhFAU0%2FiZ6V0hjyYRdbVbRWpLeqmQC4pXn3%2BpiR25g0cbh1t%2FfsZKVaYiY%2BBxVCTI0CDWpA9d%2F%2FNqUiUXuSYL%2BJzbCu%2BqmBkygE9hgi853R%2B%2BJ8NZLU0DwQ%2FV%2FRprml4ZU2D227G3%2FZCmks8KH7gtGXjfhFt6lAt9AP3fQY3EBXv5zRM6ShaEzTcXxdEM1ujLqJhTx7nr7VWlcULdlLyY%2FGyNfrDa7j3d8d0IdQ%2ByXpCFAcaew51YTUWewp%2B1JOUyd1W392AXB5PnLcIApE6XyGqS4atAStso1%2FyEXtC2pYPeSdjkF3q%2FpsdnfQl1PZ0Q7rXDqs6AozW%2FqTfbCSJvOKCfeakioswEwfVzyiiok1dfBI4ZzpolFOF0Zr%2BT1RZPeP633oFd307WmmQ6wMdpvc00ffIB%2BPe7WzMfm9VGtnnjRVRIBwEZ3rqkQxoNrSopotcGRKCbUPWVob%2BCv9I7OmZSMJSMASomZ8NweTqQuAz3GZoB5Tx%2FxPaumW4ImNVg4l62qDENP%2Fcn3QKQtsYgZmXeUvb5S9%2Fkd2SvMMuWcw796CwwY6pgG%2FRtEIZvWoGw6nN78R0rGk6%2Br3fU21siDgj%2BU9nFb2T%2BvQcDs2lEApQmW3q3msOvYKtMBsVVTOY4fLUARTsMcSQdL7Vi0NXC27Xxvv6evGV3MitLhfxwlCwziD2Z%2BR%2BsyNL4%2BogAyJG6xOnt2LhvMCqUlhAeeTqgS6skgSjat23Mj29jotN07q5v9eM4gY9%2BHT%2BItNKufVkJcQuVy3fU%2Bz3%2BrW46wh&X-Amz-Signature=d9dbd694f6eced4a03d8d41e931d478fa06bdc828050a02c4487d8b9c185ef4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFUOBIC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7VFx%2B%2Fv8xIEBjF9TW%2BcwsPElEHCKX3BF61A5QMKerZAiEAus%2F0y9FWZK75rJCIKQQ%2BsrvpH3Pl1qvFmvzG7CVh2ScqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAxHly6auINfRlI1SrcA0BVkIAlLkfQTWukasL2eH8LeeWARXO48Nvz1Cx5yeL%2BpeZqU14mRqow%2FEwCKEMDfPvskxrTen%2FurSL772niWrJislfodRp0S7CeS0nsyVGWAC%2B3f%2FY1bTXHUGBSPMsCnQ58u4EZsWBx3J9Z0uBM5Za2dIToEhCzmKUDCpSuCjIXT%2FEo3HdBRGK8ykS1MhVgfav5mrzmAD3M61OY0dtvzGeWQ%2FaKNFePyWkVoaG5i40%2BerbGagTH650b6qi3l4aQkkaRfVWGCDHL5SaAwrxsEWN3z6%2FYQtrjsMMIXAejtCufvCoIlyJFZkh7UltgdphA0Nhwaewb6gQ3rzux2WkVBy617RB9pD0usqhzrGBaaSBNPZDurxQs%2FhHyt2yiK0QKZK%2FtSoxKoSrzrQB0rChdJu%2F%2FdDzOaAuVIYXuEnxOkJujJbL%2F9POSyZDS6P7Ur3QY7TxOAMH%2B8Rs5vNuTP1LvH%2FxPhtRSmLg2OWyZs%2BE9OmmtVeRV6ucxCBbAgNQck0HL2jprGoQCe1KOPDPPRTNoOfckMEXXMFXf1mAFlTVT7gWcp4vEC7sriy3KHrVouI0LFIkoHbMJOwPi4zp8UYGMnoj2eO3WaZkKmTu9Pf1Jt%2Fd2x4VHZ3WNdlGyCy46MLqYgsMGOqUBr9%2F1BfsUoLNlrJdZbgPp2d7bmRQANS0astvuIhTjXD6V%2B7HBmR2AOKs0W3CWQ4PStChIZ1JMKJa7uySeLhDazjDbXCgs7cHlcSCLBvFXVbwWjJgv%2Bz6r0jy75sVeOQLSNEADgm0K3zvTVo7DnoAB0ZCx9ls7tiiVS%2FvB5wCGCvrhhqwKp%2Fuwv7DtZ7AcoJE4Y6%2FXU7vuBEm31UqhoSXzgFTt7QPx&X-Amz-Signature=9a49fb5cad44144d07d9d4662c5b03b8610c78c10c0b1d7f46d4c4ce7046b5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B66EUSU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMiaOcDT%2FmExhCXeeIlJ0S5JGQtFM6EVUrX1QX22N58QIhAPB62nK8b0zulKe1RBcf45gjlpFEU0oxOFSYUkSMslOlKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTmH%2BXBdg7tchoIaIq3ANd6uO2nmOJb5taVOCoQb9MilMZxJZEeXS%2BX%2BkxBA4eet4U%2BkF4zEQH%2FD%2F4BC0Tc%2B2fU6pPBizzoC7aFUnznWZxc1gLeAOL9MSYEv%2F6QfTXA17o%2Bujdtf3GVxkNqKrHXq%2FxWoFr6bQR%2FBG2CTfFD9N4Wf%2BDcd3Zc8zsoBhv%2B%2FME0X5Gona9nys%2FE%2FTXWmFxSR5g7rVCsxvvJ2Vb%2FMAP54rxIgFZNSE8VF2Vlv2Cu1exNhvjqohZtCu4EOnk8lhbS91%2Bo095OZOrK3hzmQRDxPnCxvW7EJ33ALKSM2yzXBqwgrUUik8yLRkNO9nF%2BrnS5j83nYvvAApSbtTR7NW%2BUlfE%2ByKnVouMiATxve3q%2FlBCafOZK2tyIyDC0h%2FEWtUbW1RW5j7ncfZmlvn8IEH492b57aZ8fZ2b%2FtFw%2F45a6%2FtNJuAu43rWorJLSTLaFRUE%2FJaYN7uPSlcxjNs7g%2FdiidsmmpdG0nFwLCNDZOnKEIxhUVZe%2BdGx9IH6jIT2zo3XToSXUafdh7qAhzo0UxUJIxPzfPuFz3n1iOv8%2BAj9f72MKptSZ%2BNMieZbAgkH7wKWMtIYFNPRj74eSYsLD8Rf7M%2BpIBpbgwmCzvn4duP4lIkHjiBvecvyiPNKAcVhwDCQl4LDBjqkAewMexyG1bkjT0BuIDrkfPWMO3BWk3fZMB7MpRO0iSxuyMOrxiynXJNan5bacpXHfs7HIVCiiqB%2BKqPDQ9pLb8JNML9Yjc4e462YcqHFGwZmVDbKdrzAaBIduwhpP4%2F0Z37klUJ6cJyZ9et6siqM4QbMH%2F6aZPDKCMIkNQcnuuzYXGC%2FUwf2g%2ByfRpIVOGNYTbZIzREarciE%2BmsEErCcv4vMm68G&X-Amz-Signature=c470506211ba96d427ff971e4a186fba4aa26c728bae45355ef5abc1342635cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
