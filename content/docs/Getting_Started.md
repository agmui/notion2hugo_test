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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VISBOK5E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAGj5WF3xyA8tBDTxXKl7qdZAux22gASCj%2Fa3MQIWHi1AiEA2lWc21811cTc9kjr7aKmIi8cz0AtWIhQpo9xCAEjiOAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvHiZ1wEg6fXJu8vyrcA%2BwkdEsOL0NaUnR8rxfMtyroinaK0bzB6zjTGudmyAzkw0xuwZWf%2Fpz67cx3f8bDao%2Bq9mknt111ytjf0hkkSx4MADeURLLsvxyLcVlduKgLv4RVXytq21rEv9RPByQ9insouqKKLAdTWSZX2QHTPXesD6UpuZLEfGuWjVzWoLpGmLT5WBZL%2BCNZaV%2FW05wpM46mJgXvhGa4FXdfuWDMmMCFTRNOhGV7r1d6c6hgf42TY2LJ1dQoCXRk3EmXgZkQ9dJ7muNBwYeCjvTvbZlSL8Z%2F9ZlCWAzC2or9iQSxnAx6hTECAoK15yCahOC80JPjlDPWz0%2FDbQnmK9XKAngV%2FJrCVKplMkLzZVSA72LvMC59Xgc1rgqq5M7b8%2BOfVu9aAyUV0UR%2FcIFzEnz%2BJRZlZ%2FZczQVPVkcOTK8qktX73quWP5Rr3eZ81Bd7%2BaHwb6KuTCI39AIL0XRPCuwMxKury4EzrLpQ0h%2FvIlyOXeDC5QvWsP84fu7rK3p8a%2BnOH443w%2FiUwJoVZ9Fck9QR2JPhYPPh2oQyQkk5RXyoMuOYFKISDcZaMWY3WiAMrqdPPyeneNGHExgBdpC8jWFX6kI97xOK0AbNjnDvJuj8%2BQY%2BV5qJM6F9tIdmRElkFqY1MNKb9sEGOqUB1J%2Be9ib%2FdSxj1sZvMhQ%2F6Acprft6X3UTPL9HlksMwHc1feoID426YJDsqC7QaDlvghA8qR2L892%2F1aJs0sFJor4SArlg2BnmSnkXR3Z3tZHLyQ1RBIez68bRl21RbaW1C423rT4KBOlQnhyqvvaIl8xce8Mv1%2FkJk5zq1KpmrLCXDwxbIDzP9Hc8VB1xQP0%2BFtaVRTI5tuwox4cF644Ep6vK06%2B%2F&X-Amz-Signature=8d2b70bc57306ed77048743fce074eb1c189a3e6ff0f7001882b419954fd72f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VISBOK5E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAGj5WF3xyA8tBDTxXKl7qdZAux22gASCj%2Fa3MQIWHi1AiEA2lWc21811cTc9kjr7aKmIi8cz0AtWIhQpo9xCAEjiOAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvHiZ1wEg6fXJu8vyrcA%2BwkdEsOL0NaUnR8rxfMtyroinaK0bzB6zjTGudmyAzkw0xuwZWf%2Fpz67cx3f8bDao%2Bq9mknt111ytjf0hkkSx4MADeURLLsvxyLcVlduKgLv4RVXytq21rEv9RPByQ9insouqKKLAdTWSZX2QHTPXesD6UpuZLEfGuWjVzWoLpGmLT5WBZL%2BCNZaV%2FW05wpM46mJgXvhGa4FXdfuWDMmMCFTRNOhGV7r1d6c6hgf42TY2LJ1dQoCXRk3EmXgZkQ9dJ7muNBwYeCjvTvbZlSL8Z%2F9ZlCWAzC2or9iQSxnAx6hTECAoK15yCahOC80JPjlDPWz0%2FDbQnmK9XKAngV%2FJrCVKplMkLzZVSA72LvMC59Xgc1rgqq5M7b8%2BOfVu9aAyUV0UR%2FcIFzEnz%2BJRZlZ%2FZczQVPVkcOTK8qktX73quWP5Rr3eZ81Bd7%2BaHwb6KuTCI39AIL0XRPCuwMxKury4EzrLpQ0h%2FvIlyOXeDC5QvWsP84fu7rK3p8a%2BnOH443w%2FiUwJoVZ9Fck9QR2JPhYPPh2oQyQkk5RXyoMuOYFKISDcZaMWY3WiAMrqdPPyeneNGHExgBdpC8jWFX6kI97xOK0AbNjnDvJuj8%2BQY%2BV5qJM6F9tIdmRElkFqY1MNKb9sEGOqUB1J%2Be9ib%2FdSxj1sZvMhQ%2F6Acprft6X3UTPL9HlksMwHc1feoID426YJDsqC7QaDlvghA8qR2L892%2F1aJs0sFJor4SArlg2BnmSnkXR3Z3tZHLyQ1RBIez68bRl21RbaW1C423rT4KBOlQnhyqvvaIl8xce8Mv1%2FkJk5zq1KpmrLCXDwxbIDzP9Hc8VB1xQP0%2BFtaVRTI5tuwox4cF644Ep6vK06%2B%2F&X-Amz-Signature=7a19b2cc83ce6eac68f3dad86ab5f8770474b246f2f557830e228ff1d1a91182&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VISBOK5E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAGj5WF3xyA8tBDTxXKl7qdZAux22gASCj%2Fa3MQIWHi1AiEA2lWc21811cTc9kjr7aKmIi8cz0AtWIhQpo9xCAEjiOAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvHiZ1wEg6fXJu8vyrcA%2BwkdEsOL0NaUnR8rxfMtyroinaK0bzB6zjTGudmyAzkw0xuwZWf%2Fpz67cx3f8bDao%2Bq9mknt111ytjf0hkkSx4MADeURLLsvxyLcVlduKgLv4RVXytq21rEv9RPByQ9insouqKKLAdTWSZX2QHTPXesD6UpuZLEfGuWjVzWoLpGmLT5WBZL%2BCNZaV%2FW05wpM46mJgXvhGa4FXdfuWDMmMCFTRNOhGV7r1d6c6hgf42TY2LJ1dQoCXRk3EmXgZkQ9dJ7muNBwYeCjvTvbZlSL8Z%2F9ZlCWAzC2or9iQSxnAx6hTECAoK15yCahOC80JPjlDPWz0%2FDbQnmK9XKAngV%2FJrCVKplMkLzZVSA72LvMC59Xgc1rgqq5M7b8%2BOfVu9aAyUV0UR%2FcIFzEnz%2BJRZlZ%2FZczQVPVkcOTK8qktX73quWP5Rr3eZ81Bd7%2BaHwb6KuTCI39AIL0XRPCuwMxKury4EzrLpQ0h%2FvIlyOXeDC5QvWsP84fu7rK3p8a%2BnOH443w%2FiUwJoVZ9Fck9QR2JPhYPPh2oQyQkk5RXyoMuOYFKISDcZaMWY3WiAMrqdPPyeneNGHExgBdpC8jWFX6kI97xOK0AbNjnDvJuj8%2BQY%2BV5qJM6F9tIdmRElkFqY1MNKb9sEGOqUB1J%2Be9ib%2FdSxj1sZvMhQ%2F6Acprft6X3UTPL9HlksMwHc1feoID426YJDsqC7QaDlvghA8qR2L892%2F1aJs0sFJor4SArlg2BnmSnkXR3Z3tZHLyQ1RBIez68bRl21RbaW1C423rT4KBOlQnhyqvvaIl8xce8Mv1%2FkJk5zq1KpmrLCXDwxbIDzP9Hc8VB1xQP0%2BFtaVRTI5tuwox4cF644Ep6vK06%2B%2F&X-Amz-Signature=878264ada9252ca1f85456cc2322670a6e10d970fa7894b07264853fa661f4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KGOWT3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCduISP0VMOncprnoTTuK0c%2B9VcD%2BUJ%2FZgFWtaBofCrgAIhAK63z16OU%2BUpK260BUdJmzxiujX0%2BL%2Fg87hb4BapdRsCKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjpOxJQg%2BJHRHCzVAq3ANh0EmpBs9gyX4QeeON3YVO9ERkZmQumnmvc4ScZ5X5tqc8qd68JigzU08CTHuVQgNaIcOVa%2FQgo9qAay5qMZUvCkuM6zBrNTps97yjnjp5vOLtXuIPdDPSaVYQ7ikTxZ3Nhj2ZJjLjbQvfikLjYuZ4f8I5PJKEw75pWKJ6GHgF4b87sTvJv11Mq9qn2gjAww7g652s5d7s5oeFsz%2BuqHlq8mQeyoxovjPw44zOSkzA1bvhv1VvtA9cCQ3lTCVXuIFUkmCbzdpvFXy5wz2FMQfJoDjvZZ5IrHtlKadIOWSoxwoC7Czqqi9JRxOdx4iI7U%2FaB7r%2BwA1TBKb0Da8L6KmU4DLh9D%2FAb6gPQsfjAO3OJkUOVfWrqaAWSqeUg6Qs61paHNWUVHAmKFOfYgweU5hw4bdMSqyWiBwDX%2FW%2Be4j6H1OkEGf5ebSlYlIS4HkQCPNE%2FqUQDbwa8Eoq%2BegxID2iD3Dqx9Y0Sgjf6eSPkQuUcbIZK7xtKHFgCmthGX2uQ6RIZ3qpxxay5jtRKl9AITob5w4tqsV0Fw%2FRIDs%2FMepN1yecvEUwUp3Z82xdPAzz3u0jfAjZoJnRGwxDD6S3h9Gs9cpbLZwZ6VPUKzajdHmm7UYF7B6C8ueWC2BAyzCl9fXBBjqkATR7RlksUgSX40e%2BHP5rFgkwGbyoZNWqpT7FykRwiCqapgsINAVGQLiWg62gjvZg%2BGg5bsf0fE%2FoAN%2FBLG%2Bb8MWJmZvKj%2Bex6smsN0EefhOcjULhgRem2a1Aa5exzWw6DivK5IuDM0KQEMrZADeWxPEhJ0EKtENbv%2B0LDPGm9bPARj%2Fd7Qy%2FPu2EatR7LWMiX22MN4beKNoktrW%2B5GIOUkBGXGYs&X-Amz-Signature=5107cfa5aae681819ae7d4d1620e00c5c822fc46df5d540ec952023af06b46ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEW5LLYK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDPrBxFSLQPfzaAa%2BN5oLicqQQLyy1N%2F6Yo2EWzMtYUbAIhALg4Vm8O8htPFKTnMz1i4Aq8rUL1b5HY%2FOohWa%2FycPhEKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywdrsKJWLSu1mikGsq3ANal7Zk7n8AeAgFv46FtSZ0uIZvRlZy9vD7LENTH51EJif6%2F%2FNONeR0ItKj5T%2BpHeUt9OfVXXsICDguB4Zy9uMFFzF3uK%2BNZ1SK7gJBLWSVwDR41n5uFcwRnKCPYjYGHin9TRUL11RK0GCw6Pd9KLyISh72lbvCt8aGX6mr%2FvhRk4gF7mwQEGXInwehWltOnHTBUCseee1fk8YO3fKFYapMcGzN9o7kOKj9V9Me6n8ixnvGiQ9w7ORT0Odpq69szujwDgXWD1syqad5c%2F1zN%2BFWiQE49TIaVoWbTajyNWILuYCz4dqxjeeXLe49F4bSOw5lsHJncZ2bPIGwJsc5%2FBdTto75TfpQgcwlawurWovf4C5xcvvS18Ex34uf5aQ36lIcEkcBtlIaU7tY5NbcuQ8l3PT0YvU6VBmWvol%2BgxzUCpVk9%2BvJZT2D1MWSvRgDbs1SIr8CPJdcYTQ0xdlKSUYof3GC07%2FEXvaMhhzb%2FAk31R7L6dOOmMUMhCLyCKMW%2FUg9jAHQ%2BcQea0Lyv0GPYb7vAk6utG0vaud%2Bd8GhlrG8W4In1bTaJJEWjbfUhuU9JBCQywgSMa9JFTd2tC9hrQ4V8zbH5odQoxj9sixkFBKUWMNuHZWOsjtT6S4vjDDNqPbBBjqkAb5NpUFP98zBsfsNIBgMiKhPNkb4o8N4P8jmrzccSyAaYGo5rovFesR5NFEDIJXdCi3Brma1GABeELbs4ARhY6Ckonu9Kpsz0iFj7VcIyaywgpIo%2BNfurvjfkz79yfrwkXNX7BhWQZF30gw6%2FsLcwwDxzqWttw3pWWwtCwd%2B9YLO%2BidnD9F2OMgnEBZ1Psc5F%2Bl1XQasOBDB5j9317pa4dMRGM8I&X-Amz-Signature=ba42d5b4675f6312eb67e6e3ad4ce52a9460a6cdf7c7ab10249ff3212d01ce85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VISBOK5E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAGj5WF3xyA8tBDTxXKl7qdZAux22gASCj%2Fa3MQIWHi1AiEA2lWc21811cTc9kjr7aKmIi8cz0AtWIhQpo9xCAEjiOAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvHiZ1wEg6fXJu8vyrcA%2BwkdEsOL0NaUnR8rxfMtyroinaK0bzB6zjTGudmyAzkw0xuwZWf%2Fpz67cx3f8bDao%2Bq9mknt111ytjf0hkkSx4MADeURLLsvxyLcVlduKgLv4RVXytq21rEv9RPByQ9insouqKKLAdTWSZX2QHTPXesD6UpuZLEfGuWjVzWoLpGmLT5WBZL%2BCNZaV%2FW05wpM46mJgXvhGa4FXdfuWDMmMCFTRNOhGV7r1d6c6hgf42TY2LJ1dQoCXRk3EmXgZkQ9dJ7muNBwYeCjvTvbZlSL8Z%2F9ZlCWAzC2or9iQSxnAx6hTECAoK15yCahOC80JPjlDPWz0%2FDbQnmK9XKAngV%2FJrCVKplMkLzZVSA72LvMC59Xgc1rgqq5M7b8%2BOfVu9aAyUV0UR%2FcIFzEnz%2BJRZlZ%2FZczQVPVkcOTK8qktX73quWP5Rr3eZ81Bd7%2BaHwb6KuTCI39AIL0XRPCuwMxKury4EzrLpQ0h%2FvIlyOXeDC5QvWsP84fu7rK3p8a%2BnOH443w%2FiUwJoVZ9Fck9QR2JPhYPPh2oQyQkk5RXyoMuOYFKISDcZaMWY3WiAMrqdPPyeneNGHExgBdpC8jWFX6kI97xOK0AbNjnDvJuj8%2BQY%2BV5qJM6F9tIdmRElkFqY1MNKb9sEGOqUB1J%2Be9ib%2FdSxj1sZvMhQ%2F6Acprft6X3UTPL9HlksMwHc1feoID426YJDsqC7QaDlvghA8qR2L892%2F1aJs0sFJor4SArlg2BnmSnkXR3Z3tZHLyQ1RBIez68bRl21RbaW1C423rT4KBOlQnhyqvvaIl8xce8Mv1%2FkJk5zq1KpmrLCXDwxbIDzP9Hc8VB1xQP0%2BFtaVRTI5tuwox4cF644Ep6vK06%2B%2F&X-Amz-Signature=de62adda2a8bb227b3a0a156e63510902516477709545f4ea653a0e4162bb8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
