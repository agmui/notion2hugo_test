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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4UXBCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEqDwMecvzQDJJMCoGDQA7HUCcCUrY4%2B6Dri8Tm8BF%2FAiAJFXbwX1HaWd%2FsCtqm3MaG2rhFU8cekZ1RQpMFqeatdiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7dS987XWnb7WwqufKtwDCuh83iqFdU7%2Be3NKJL3dA6%2FcLmX9L62veG7PaCbASu5HO9l9A4PAZNXApWmLZIvw4IhkFgpkV9UAaaciq%2Fz%2FwRlw6qIX5O39UrXPpXkHwiCx0DhS1OIEsO85gDGKLsYKBPU%2B8CElXUVRsz5mKXj9ZiqecygUsflD%2BK0mUeCQ2XrR0Xl1KJDhfH%2BjKIoX8lDv63Ww5xA9qbaTcueMUUusAYD3n%2Bgjj6eupsfaNXamIxQYM0%2FLTHY8d0NA7CpU1oJzhJEZNqCbJ3YjM5CgApoGnIlCopOCE97M7KBsEdxbs6JeQUpZyaTuC%2FMzUpP5Gxg2UDloE8Z4hQnH%2B8kosQWd3P82ENSB%2B1vDBIhvwjfmD9wKv6ELH%2BtQYHDgbIAPQ3s8vUoWApyVHKHHRxVtLnU9wIn3maI8HRbTcF%2F8%2FacWUjUUHn6gMi%2BiYuBNuYShkfLbY9jtDvAai1uUCtuPp3woDmqUAXS4zuxS5r2greePBcDNwYOK%2BEE%2BnWRFqtJbmYEiLQhP6j%2B9vLLRlKtfzAfDNfOOJIbdzDZr%2F%2B1poTF2rrBLrevzM3%2F%2Fg6A8day3uLchyC%2BIVodUeZgVuqQjbQ9ID7XB5eG%2FS4Q9EhCeLa08PJIbSOUqVZwLS4ZsJPQwlJeSvgY6pgFvZnaDMTpSImRG92lAl8bLP9UxIUBHP79kmC97f85WnxCpzz5aiTBXhWB9SMforY0LRVC6k57YPaD%2BI2Ap2rinWlO7huXLiCLtrFKz4lb8mpBuTQ1GTlsYcYx49Zk7HrgMbkhaS2wcQGQMaDtXOneR5FkUXJ1izrqHKLH541zALCC%2BWNttScMgYzvg7pPXThGZ3o831NbmrBTPvxwjEeGGJjnoJBn6&X-Amz-Signature=07d7c8757d6dd35b090c63d14d9a64b668b93dc47ee12a6dd82016f0a23ee662&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4UXBCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEqDwMecvzQDJJMCoGDQA7HUCcCUrY4%2B6Dri8Tm8BF%2FAiAJFXbwX1HaWd%2FsCtqm3MaG2rhFU8cekZ1RQpMFqeatdiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7dS987XWnb7WwqufKtwDCuh83iqFdU7%2Be3NKJL3dA6%2FcLmX9L62veG7PaCbASu5HO9l9A4PAZNXApWmLZIvw4IhkFgpkV9UAaaciq%2Fz%2FwRlw6qIX5O39UrXPpXkHwiCx0DhS1OIEsO85gDGKLsYKBPU%2B8CElXUVRsz5mKXj9ZiqecygUsflD%2BK0mUeCQ2XrR0Xl1KJDhfH%2BjKIoX8lDv63Ww5xA9qbaTcueMUUusAYD3n%2Bgjj6eupsfaNXamIxQYM0%2FLTHY8d0NA7CpU1oJzhJEZNqCbJ3YjM5CgApoGnIlCopOCE97M7KBsEdxbs6JeQUpZyaTuC%2FMzUpP5Gxg2UDloE8Z4hQnH%2B8kosQWd3P82ENSB%2B1vDBIhvwjfmD9wKv6ELH%2BtQYHDgbIAPQ3s8vUoWApyVHKHHRxVtLnU9wIn3maI8HRbTcF%2F8%2FacWUjUUHn6gMi%2BiYuBNuYShkfLbY9jtDvAai1uUCtuPp3woDmqUAXS4zuxS5r2greePBcDNwYOK%2BEE%2BnWRFqtJbmYEiLQhP6j%2B9vLLRlKtfzAfDNfOOJIbdzDZr%2F%2B1poTF2rrBLrevzM3%2F%2Fg6A8day3uLchyC%2BIVodUeZgVuqQjbQ9ID7XB5eG%2FS4Q9EhCeLa08PJIbSOUqVZwLS4ZsJPQwlJeSvgY6pgFvZnaDMTpSImRG92lAl8bLP9UxIUBHP79kmC97f85WnxCpzz5aiTBXhWB9SMforY0LRVC6k57YPaD%2BI2Ap2rinWlO7huXLiCLtrFKz4lb8mpBuTQ1GTlsYcYx49Zk7HrgMbkhaS2wcQGQMaDtXOneR5FkUXJ1izrqHKLH541zALCC%2BWNttScMgYzvg7pPXThGZ3o831NbmrBTPvxwjEeGGJjnoJBn6&X-Amz-Signature=5b158f781ad8dfbcdc9f0f3ad9d6d8ec04eb81cecab637ab05f871edec212c66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSO5XCV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELC35ORHaAkhG%2F9O4BBFbQV0Slg6WEKtkQT8ZFqrPxeAiBGCaJzbp7JzRAuo9MMG4QGuJlOBFU1hHDE3rVLMuJnEiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzZctaFbxcyuv%2B%2FSxKtwDKAlskPwWIbvSQ1Z62teLkKFHV7fLzay3I1oDBgUHPhPrQ4ez9TigNiNteeeNRkIF06sIqj0A05zRqjB2WUx0lDILgj2HdsqQuhQMUVqK7SSSMfdH99K03ND1GOx%2F%2FWFOEvDXTg%2FDo87v8waaqMZALH%2B7igSBNkXqcnQiKqdz1daOorfZ0nP3UpfvtD68u51X26CJHyHHYKjRi4QlYabg5Q1PXJ4BBtsrHiGsdgEeUsy137JwNLxm7llrAETD%2FgYMcTuN03BN%2BsurJeZ65esA6tz2BLVQJIgkrkiwSYlaLe3e6vVOkLiGJ5SijtWRQ9KpTq%2FGSvre2sPZgM7P7iHzzzqXpVE4y2LVZeVsfp5uZQ0K10yBlmiiAIG4q09zqSJBuO5jOhmqgS4BrYDnrgaz%2FBVvx6sTgpF3utRZxnJ98qKOhqsjlKc4tXc5egERvcLwU%2BH96rIbh344g1n6twstIPTZXE8GqnBKJgNR6MDZZ7XptVVhaBqbPY4NjFyPmwTyEXKb%2FhfovfMZOw4TKOxOjU%2BErFwHjl6C4ko4x1swrRk7t6YcaWHHOjYHdnF4izT5hCIpqN5Nbegrf3bU1iaeXxJru6Sx%2Fi4AfYg8MPox7B68F%2BlXhXcV9%2Bdslt0wp52SvgY6pgGIjOtKobUqsA6e2xK5mhvXREtEFNmabyVdUCkCnIQuKy%2F7VF4cOgrLLrYRvqUN%2FpgiCdNDW67mZPPid%2BdXjJD87hBXVp%2ByoU9MVO%2FU14vy5OOV%2F9avgvEf20MkLgPdtD8m%2FIPFSCUkwmRcGiZWx4G%2FdNyPNNpE9TES8mBWYrq1mM5S7fpck3iR9UY0ZgTz2oX0Ucc2NQ9VnMd1llQbg2G45TRLmhc5&X-Amz-Signature=7605c9b258015e7abd92f10dbe8846ab40f5a827b402b475f0e6a182334b22f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FKEMGLL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMoWm%2FcmrCVz4d0TEq0%2BpLyUwRinIgZ5z9EKvkwkWyFgIgF1ce%2FTSdrTHMLAglIixjxpGNsgS2rS8cJkyRQWWU89kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDxZAFVU6avmVAS7CrcA1425x0BkHdFO7IfU9gKFDQr%2BTT8ekO4Hg14KK2v7ccnV%2FWx%2BnhjH8nLZbbzxQIxuO34AB6XSM9ukgJl%2FiXoVia0%2B7wkFGAI1TUACvjPf4Jgajyyg5YKn%2FJAQMm1OtyMxMkATlvHRAd8pRPPAe9fhqCL35iepi4lNwTMqpJgJLBvX2it0F0zKYT0OMGdfdBGUFRQ%2BrdrUVma51sAusgdUHw8R9quTjKWzM321Sofu2jRFGrT2Mg1upF%2FEPGKwDzQ%2FBoegSZD7fKAEnyFZRbilBLnwz43O97lpN%2FGTRXkkZA3H%2BotJYX7XUNfD749UQBAtmkOpFIkPWPccfAW4OmqrUc5uhekq4RUOx%2Bx6vYs741WcOQ5LFSOBiIE94vAf6fNa7ibX%2FqovnuYF%2FjmEnl9TxqyVSw6a1DO3%2FGGnyS7TPZinVt7r8YLpvREaRV5RFyxt3RrKoBdqs6QkuIApnFaNJgQSOem%2FZfdvmcxozegalGjT8QdjsVbmhRWdb83nYEXNX3J6fX%2BzCPUCYklOd0ISId2xrxeuHbQjFcumrdWjpMs%2FrxLl8LnjXhtkjhgKg8Nhx34e4tyovGlhHnN3qLdGhvCE%2B%2B4fqqHoVUcfXhoM1qb40j%2BhmgmRhKH%2F8rwMJufkr4GOqUBcyAQA3%2FPMNWyLCSpjcKINV3LHs3K5SxFPE35%2BjK3f701nnGLJBwQq9DKNbcvxZXkc6eVfIASs644CwFj1tkcQE%2F4l0gVKbAUrpt7aThLTkr0hdHXGLS5PhlRRHdKtJcRb0bbFl%2Bp%2Fe4760l5A9RGBy7HY4G1VSCo%2F5Qdpq%2F3SX9JV76oYrQ7wmHZFNjfYqw71zq%2F3t9jEYtKrdb7hqCr8aJ%2FE3s%2B&X-Amz-Signature=71f57eebdab7f87cd4492e66a3389e29a16980b1c8d4fb441bff7314205283d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4UXBCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEqDwMecvzQDJJMCoGDQA7HUCcCUrY4%2B6Dri8Tm8BF%2FAiAJFXbwX1HaWd%2FsCtqm3MaG2rhFU8cekZ1RQpMFqeatdiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7dS987XWnb7WwqufKtwDCuh83iqFdU7%2Be3NKJL3dA6%2FcLmX9L62veG7PaCbASu5HO9l9A4PAZNXApWmLZIvw4IhkFgpkV9UAaaciq%2Fz%2FwRlw6qIX5O39UrXPpXkHwiCx0DhS1OIEsO85gDGKLsYKBPU%2B8CElXUVRsz5mKXj9ZiqecygUsflD%2BK0mUeCQ2XrR0Xl1KJDhfH%2BjKIoX8lDv63Ww5xA9qbaTcueMUUusAYD3n%2Bgjj6eupsfaNXamIxQYM0%2FLTHY8d0NA7CpU1oJzhJEZNqCbJ3YjM5CgApoGnIlCopOCE97M7KBsEdxbs6JeQUpZyaTuC%2FMzUpP5Gxg2UDloE8Z4hQnH%2B8kosQWd3P82ENSB%2B1vDBIhvwjfmD9wKv6ELH%2BtQYHDgbIAPQ3s8vUoWApyVHKHHRxVtLnU9wIn3maI8HRbTcF%2F8%2FacWUjUUHn6gMi%2BiYuBNuYShkfLbY9jtDvAai1uUCtuPp3woDmqUAXS4zuxS5r2greePBcDNwYOK%2BEE%2BnWRFqtJbmYEiLQhP6j%2B9vLLRlKtfzAfDNfOOJIbdzDZr%2F%2B1poTF2rrBLrevzM3%2F%2Fg6A8day3uLchyC%2BIVodUeZgVuqQjbQ9ID7XB5eG%2FS4Q9EhCeLa08PJIbSOUqVZwLS4ZsJPQwlJeSvgY6pgFvZnaDMTpSImRG92lAl8bLP9UxIUBHP79kmC97f85WnxCpzz5aiTBXhWB9SMforY0LRVC6k57YPaD%2BI2Ap2rinWlO7huXLiCLtrFKz4lb8mpBuTQ1GTlsYcYx49Zk7HrgMbkhaS2wcQGQMaDtXOneR5FkUXJ1izrqHKLH541zALCC%2BWNttScMgYzvg7pPXThGZ3o831NbmrBTPvxwjEeGGJjnoJBn6&X-Amz-Signature=e6a584ab8a278fe97531433d7909f6772581be618a7f237739349f20125f796b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
