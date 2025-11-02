---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUTOBYM%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCY5YBY6Uy6WpZWpSxaeXjg0I0v%2BycqhJzY1YBCVnmF3QIgTmUCsOA4ISj8TLktHY7l%2Fjn95%2FFaeSplLrikZR56LfYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDO%2BT7kSXzxLgbe1oYSrcA%2BLAxORwoCGSNEl6KFJ2Xe1s6WyjAZYM7jOCLIuCD2Jr5FJLHFeeAWRQcPK10Gh%2BQyVDig2vVKoxTSOu2LtjEVOMgwcMHkwIRsk21MD%2F4%2BGOJemh8K5RAIn05YiRhZVHe%2BymFRVNzrtCkfrTzP9hRf%2FN%2FUNSyvwahVSl4VAa%2F5%2BW29IT8Td9BywR6EVgALR68dOb1FaHMbpWozLUcsZI3mI1Wkdoy61jas%2FGDWGN8pC15kvRXCm%2FoL0W%2Bm85IgEOKwuNW21YbiDd7cyQ9Q7hndxpv5Y11H4aYlY0LKRJiEVjhtfDdspOY%2FGpo9I%2FDxmlDjywRM7TFdvc7zmLjo4WCoJZ%2BpI4odE%2BVrLENQd2tt7WACc0yrciPFlzhVHQXFKDVv6O7JYL8ctb8%2BkUXyV0hOHJ1pGpLrqhPcpYGZqqmzi6N3ZfCR59kz%2B22JrfDqNI5LnZIi0a10fNM6F5rVxEImrvi2m%2Ff8DIguu6NJvKDcpQDC9ZtU7utYUQ3ELBqYExQIxOUCcKPt7y8RQC7ydOJVBMdk1D8a03XLNGrMXY4zXNCOBpnRlacmxwGJ3XrMKVXBLEVPx%2Bc%2B8avsqrQcQgSzDiJijy6X9ChFOqBk3zHIK4tuWYX4mNSAGdgO8xMMnnmsgGOqUBZOKN9A1i9J5zVOQmKfaudBZYGW0icxGhpjTNYsZAu3TlwiL8YTWv%2BXKV7HtuvY%2BxUYWxZ23R6ouiCs0XP2utKk%2BeNypmzzRZpns27LELGOi%2BGiMQPJn7ChMdUqL0Ngnq%2Fstyvdj1BBci3tg23H9xcwgaqwUy37GaA5KbD0doDHmbxpuqFYMB1sVUJeuoorws6QNaQ3%2B%2F16dxhnKOXMCYQOR4rKDX&X-Amz-Signature=57d520fb8a50a8981f589d2534ad235002f8e3b93edaf55cae04ee290675bc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUTOBYM%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCY5YBY6Uy6WpZWpSxaeXjg0I0v%2BycqhJzY1YBCVnmF3QIgTmUCsOA4ISj8TLktHY7l%2Fjn95%2FFaeSplLrikZR56LfYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDO%2BT7kSXzxLgbe1oYSrcA%2BLAxORwoCGSNEl6KFJ2Xe1s6WyjAZYM7jOCLIuCD2Jr5FJLHFeeAWRQcPK10Gh%2BQyVDig2vVKoxTSOu2LtjEVOMgwcMHkwIRsk21MD%2F4%2BGOJemh8K5RAIn05YiRhZVHe%2BymFRVNzrtCkfrTzP9hRf%2FN%2FUNSyvwahVSl4VAa%2F5%2BW29IT8Td9BywR6EVgALR68dOb1FaHMbpWozLUcsZI3mI1Wkdoy61jas%2FGDWGN8pC15kvRXCm%2FoL0W%2Bm85IgEOKwuNW21YbiDd7cyQ9Q7hndxpv5Y11H4aYlY0LKRJiEVjhtfDdspOY%2FGpo9I%2FDxmlDjywRM7TFdvc7zmLjo4WCoJZ%2BpI4odE%2BVrLENQd2tt7WACc0yrciPFlzhVHQXFKDVv6O7JYL8ctb8%2BkUXyV0hOHJ1pGpLrqhPcpYGZqqmzi6N3ZfCR59kz%2B22JrfDqNI5LnZIi0a10fNM6F5rVxEImrvi2m%2Ff8DIguu6NJvKDcpQDC9ZtU7utYUQ3ELBqYExQIxOUCcKPt7y8RQC7ydOJVBMdk1D8a03XLNGrMXY4zXNCOBpnRlacmxwGJ3XrMKVXBLEVPx%2Bc%2B8avsqrQcQgSzDiJijy6X9ChFOqBk3zHIK4tuWYX4mNSAGdgO8xMMnnmsgGOqUBZOKN9A1i9J5zVOQmKfaudBZYGW0icxGhpjTNYsZAu3TlwiL8YTWv%2BXKV7HtuvY%2BxUYWxZ23R6ouiCs0XP2utKk%2BeNypmzzRZpns27LELGOi%2BGiMQPJn7ChMdUqL0Ngnq%2Fstyvdj1BBci3tg23H9xcwgaqwUy37GaA5KbD0doDHmbxpuqFYMB1sVUJeuoorws6QNaQ3%2B%2F16dxhnKOXMCYQOR4rKDX&X-Amz-Signature=ba55c0f963f69a5d761a6c891e91e75c61c072b8d7d68b8099881f8e76c0fdc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUTOBYM%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCY5YBY6Uy6WpZWpSxaeXjg0I0v%2BycqhJzY1YBCVnmF3QIgTmUCsOA4ISj8TLktHY7l%2Fjn95%2FFaeSplLrikZR56LfYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDO%2BT7kSXzxLgbe1oYSrcA%2BLAxORwoCGSNEl6KFJ2Xe1s6WyjAZYM7jOCLIuCD2Jr5FJLHFeeAWRQcPK10Gh%2BQyVDig2vVKoxTSOu2LtjEVOMgwcMHkwIRsk21MD%2F4%2BGOJemh8K5RAIn05YiRhZVHe%2BymFRVNzrtCkfrTzP9hRf%2FN%2FUNSyvwahVSl4VAa%2F5%2BW29IT8Td9BywR6EVgALR68dOb1FaHMbpWozLUcsZI3mI1Wkdoy61jas%2FGDWGN8pC15kvRXCm%2FoL0W%2Bm85IgEOKwuNW21YbiDd7cyQ9Q7hndxpv5Y11H4aYlY0LKRJiEVjhtfDdspOY%2FGpo9I%2FDxmlDjywRM7TFdvc7zmLjo4WCoJZ%2BpI4odE%2BVrLENQd2tt7WACc0yrciPFlzhVHQXFKDVv6O7JYL8ctb8%2BkUXyV0hOHJ1pGpLrqhPcpYGZqqmzi6N3ZfCR59kz%2B22JrfDqNI5LnZIi0a10fNM6F5rVxEImrvi2m%2Ff8DIguu6NJvKDcpQDC9ZtU7utYUQ3ELBqYExQIxOUCcKPt7y8RQC7ydOJVBMdk1D8a03XLNGrMXY4zXNCOBpnRlacmxwGJ3XrMKVXBLEVPx%2Bc%2B8avsqrQcQgSzDiJijy6X9ChFOqBk3zHIK4tuWYX4mNSAGdgO8xMMnnmsgGOqUBZOKN9A1i9J5zVOQmKfaudBZYGW0icxGhpjTNYsZAu3TlwiL8YTWv%2BXKV7HtuvY%2BxUYWxZ23R6ouiCs0XP2utKk%2BeNypmzzRZpns27LELGOi%2BGiMQPJn7ChMdUqL0Ngnq%2Fstyvdj1BBci3tg23H9xcwgaqwUy37GaA5KbD0doDHmbxpuqFYMB1sVUJeuoorws6QNaQ3%2B%2F16dxhnKOXMCYQOR4rKDX&X-Amz-Signature=c62b48a8f38d6a9964fab0b2c3c3d142f73f326d91be0a2fa7cbf4d138cb86a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RC3UNSC%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCMSdequgUhp4M52XsSlGfP1yBPNibpZupp54rcWSRo1QIgBUnB9o%2FXQfuwSMAtSRuhGMnxWfvOM6zRl%2BuZkr8edikq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDBQf5LzkI%2B%2FnZG0uByrcA2FrMYS%2F0Th%2BTnxcLNKAElopkQOjrXQ81Cxl%2FsPCyuyqBItPYE6cCVWW%2Fw0M00Le6zAOvtbioJKX3Mz5jOGpzQSh5X0LAfbOfRKi8PMdqskisPRhqBZJzepr%2BFoMPSQUMg1nWm3AxPyA1pkRXU0wYOeP%2BPZFblz3vbsTJcbL%2FnSPkDGh3KsYcWCbV06TlPpWKZcrlQ2SqdvHBGCWdZBfreH49OmvoSlbw4H5qWRMeqb8Uu36cYx2v068s1I0fpS8OsiKm%2BHi86l3ZAzqlChckP3Hz1NeQ6fBnBGwRsKtitNdzc%2BURkcdZ2d4Rp730Zngu%2Fl8fTQc1nVEFtxkRnsgwk0aScnHb%2B1LdQTl2EcLP5mnTe6xWPVhBt%2FbZzYM2FAnUUwz9oxktf2k9%2Fx9eGBh5yzk2QQRmfTGpoFdZQRFaO81Kh9h4iaqHb3rFEQ5RhYCufoE%2F1QIDXuTjIvUWBjqfzamjTjIGMKT%2BJ7Z9mkoiLg1b1xJomJJNGcUnK6t%2BKYb5SxFJDeQ2gytcbGINVkHW5YNCfDEW5e9lv2Hbgzm8Nn15h1FZHGxO7FrO0vUc0gvgAsXGgHCWGft%2Fk%2BYRBDjEm1SNJMSsSs1%2Bf5uNvqYezrAD%2FX9geRhNE8xF%2FFIMKvnmsgGOqUBYOlXuY1Vl3whfWRk4ObJWHbDzKBcmqFxlWvoSexQ9%2Fp4zJVXvGAxo1RTP7l32rJPTutqgCsx4Qc8pyROkk803OiZjI5d%2B9AE2n%2FbiGqIs1gEirfnGxUn%2FdQgsf4zlszWtVxoL4e9PZ7FQJfURv5D8Jrta%2B6n77tIhDeTeQciWqxt4VhvSBUeK%2B7fm9ZwC72l6h9eNS%2BNOl4e%2BjLTBdpog17MU10Q&X-Amz-Signature=9025c65bb53cdc05ce0d64fc589ce29867ca93a13a8acd5b2b0429704f862a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZVX3RW%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD0ZQLSoeQ%2BDBwrOyiKn6R37fF%2FPPuu8RQbZENi5oHmNgIhAKSqoLzFIc4%2Bm6evdHdMG8U1gnNFvgaJ0AS0CVdhYubAKv8DCDsQABoMNjM3NDIzMTgzODA1Igx0knHRU8MYXFsGRHMq3AMoaNhFh1imSbAp5S0dDzlt4%2Foh%2FI8qLRzTyAoP1OglCq5TRwjcevDGhNGjW7jmCDCgn8g7UVOSB5f%2FTibdE9WVTaGEEKwIf8Sg4h%2B9Wrc369C5SLuHyFxYb%2FCaZhqaKi21eq%2FIcQNL%2F0CafdEIViNrWET3MhKkney7D%2Fwzc61e2Mu0EafAJvQLJuibDSwkqDInbivcguQMZ5WcF4crF%2BfnOC4YW%2BsWxUXbPGbcGqgrZqUydhWzC5VB7Taun5MJkyfjCDVD1kg16dtefzkhrjuJ66Gyppa3wabeNOWL%2BiiAwl%2Bjp7Zxsua0y0fV0Vo8xYEEjhHqJHOpKcTvHu30tqfoj5bzD8DYgx3Mmwr%2FASyHGhWjS0hMZSLxyWf0g6FWIoH3%2Bu8ZH5kgirJMrSD3WyBf60MGs8ZfkET4KZVIt0oINja%2BjtNrd2CbBY7OrXknkGMZfTRduUYoA7%2B86GUf3hJaxmklqGtjDqUbwUJ9Un6nxkzECEXnc2muqhsH7wEJusw%2BbnAOicnJEJMhDGPrTu8d%2FPo8dXn%2FFlZpLpD29SjtOYJZu%2BtWpqZwNXQwKVZYKshfCa9%2FUXSHyGsxI6xyiFQbyslBs%2B5PXo%2FLEOOuN6wBJF1wY71Ij0USdwlOGTDy55rIBjqkARHR2%2BMoQQD%2BGSUpG9e0Hyt2L77yNwnzOw8zwstJ%2BcCFWztXbjkYGZfq1oeOvExcc5qeuE%2FuE6UrMhHkkvi03XZbJEMvltabQFv3bgHjvLUP0d5f%2FsxYAtgxPdIWNCaR7tOjKTx3LFmbExZqlmR6K0TcqRfWaOnvRmeqUXh6Xz%2B20BEkUC2IKJPD%2FA%2BGqCczFQk8eaBhjk8kinFL%2BsdEE08ViKEi&X-Amz-Signature=2d3a58558399d4fda44476c1392eee6aeb3ff7029f1565be7aa1ed819d099667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUTOBYM%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCY5YBY6Uy6WpZWpSxaeXjg0I0v%2BycqhJzY1YBCVnmF3QIgTmUCsOA4ISj8TLktHY7l%2Fjn95%2FFaeSplLrikZR56LfYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDO%2BT7kSXzxLgbe1oYSrcA%2BLAxORwoCGSNEl6KFJ2Xe1s6WyjAZYM7jOCLIuCD2Jr5FJLHFeeAWRQcPK10Gh%2BQyVDig2vVKoxTSOu2LtjEVOMgwcMHkwIRsk21MD%2F4%2BGOJemh8K5RAIn05YiRhZVHe%2BymFRVNzrtCkfrTzP9hRf%2FN%2FUNSyvwahVSl4VAa%2F5%2BW29IT8Td9BywR6EVgALR68dOb1FaHMbpWozLUcsZI3mI1Wkdoy61jas%2FGDWGN8pC15kvRXCm%2FoL0W%2Bm85IgEOKwuNW21YbiDd7cyQ9Q7hndxpv5Y11H4aYlY0LKRJiEVjhtfDdspOY%2FGpo9I%2FDxmlDjywRM7TFdvc7zmLjo4WCoJZ%2BpI4odE%2BVrLENQd2tt7WACc0yrciPFlzhVHQXFKDVv6O7JYL8ctb8%2BkUXyV0hOHJ1pGpLrqhPcpYGZqqmzi6N3ZfCR59kz%2B22JrfDqNI5LnZIi0a10fNM6F5rVxEImrvi2m%2Ff8DIguu6NJvKDcpQDC9ZtU7utYUQ3ELBqYExQIxOUCcKPt7y8RQC7ydOJVBMdk1D8a03XLNGrMXY4zXNCOBpnRlacmxwGJ3XrMKVXBLEVPx%2Bc%2B8avsqrQcQgSzDiJijy6X9ChFOqBk3zHIK4tuWYX4mNSAGdgO8xMMnnmsgGOqUBZOKN9A1i9J5zVOQmKfaudBZYGW0icxGhpjTNYsZAu3TlwiL8YTWv%2BXKV7HtuvY%2BxUYWxZ23R6ouiCs0XP2utKk%2BeNypmzzRZpns27LELGOi%2BGiMQPJn7ChMdUqL0Ngnq%2Fstyvdj1BBci3tg23H9xcwgaqwUy37GaA5KbD0doDHmbxpuqFYMB1sVUJeuoorws6QNaQ3%2B%2F16dxhnKOXMCYQOR4rKDX&X-Amz-Signature=c77859588708b2937cf7f0340a6f8b70597b880837b802d8412c54a20f7ae2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
