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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7M7ZZZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGPImYFVCeHgND%2FXWOMXl9CtpIRBwtkfhjlTaSSibftbAiEAlm5%2BJQfS7HWDYT%2F79%2B7JPQelX9yBrVh%2BHjnVKiNJL%2FUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkfJJky%2BzEiKRlJKircA9yxyGE4B%2FpxcCHNMJvcPvRRZKdvrJmrhzgpxR%2FF87N9yRI5KMasVOksda2V22tKr7MEZCwT467Shs8Lcz61Oh2Y1eZ5XDUqZGZzH9trkQEJsW2j0%2BSVrMG7dBFlcC6gusioKPlLdXfb2EEFrZ7TjLtiEYCPppd%2FUhZbkdPMhCS248FZWkj4BgWRkCgzVz1NbMyQ4k%2FJ3T1SUMbbSO8eNw83DuGqe1B1KDrby5XWB9PwA2UK8KhF%2BGFAdG9bRO%2FvUffBMb4r%2BuTkhN%2FqtBwJMXReKC40xvazqZMpMC0xuq1MTc24hme%2BQOoRWlLewgzbO1HZtzz0E34x%2B7Utl%2F%2B7pE4oMhoRbhVvG4V7PqzrIy7%2FnreI1W3XrddpPhc%2B8txPXCXLz5pj7z3gM8OBTybLrvnlukHAVnt1lU8plWKFW2%2Fp54OVMzRa4wpvPcYgAkoasJrGIevw6VPegO0DOIzG72AoSqLTsoFbkCZ5hu%2FG4kTaKXMDCTF7IvYNZiJ4%2BpIVvA%2FA6fx6hSFBSYGQALDcrqT6LkSDyC9uOnjJ2ey%2FK%2B0DoY6%2BJcFNBjUAFpGOxMwzNMGdj9kmLgmzPpLXiRtAe4oZGNOhUOzk3yFrt%2BuGMb1rwmpsqdRgL3reW0qzMO74874GOqUBf9aiCdVxXSgzR85Y6HSXiNeZg%2Bj0aAjPYAkvgh%2F816CyjgSVwt4eRqILxBD%2B65xi3mScI2rAJfMZeB1mAxFIXp8VMSTFhNowZKeHtujdkiMn3pO0pa7vFb6qKKQs4PcLitBurDgVkhNfbkhc49TAr7%2Bjwz1BDQDNtnDP37uyv9fzHjLiOt6sIHFVOaW4jYCAUDe6P0hepXgkE1ekGr9oDyRHrnR1&X-Amz-Signature=bc38c7a468a3dbcea4687e31ee0cc87be49a66d8bf98d8b7782f65c14a1d3c73&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7M7ZZZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGPImYFVCeHgND%2FXWOMXl9CtpIRBwtkfhjlTaSSibftbAiEAlm5%2BJQfS7HWDYT%2F79%2B7JPQelX9yBrVh%2BHjnVKiNJL%2FUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkfJJky%2BzEiKRlJKircA9yxyGE4B%2FpxcCHNMJvcPvRRZKdvrJmrhzgpxR%2FF87N9yRI5KMasVOksda2V22tKr7MEZCwT467Shs8Lcz61Oh2Y1eZ5XDUqZGZzH9trkQEJsW2j0%2BSVrMG7dBFlcC6gusioKPlLdXfb2EEFrZ7TjLtiEYCPppd%2FUhZbkdPMhCS248FZWkj4BgWRkCgzVz1NbMyQ4k%2FJ3T1SUMbbSO8eNw83DuGqe1B1KDrby5XWB9PwA2UK8KhF%2BGFAdG9bRO%2FvUffBMb4r%2BuTkhN%2FqtBwJMXReKC40xvazqZMpMC0xuq1MTc24hme%2BQOoRWlLewgzbO1HZtzz0E34x%2B7Utl%2F%2B7pE4oMhoRbhVvG4V7PqzrIy7%2FnreI1W3XrddpPhc%2B8txPXCXLz5pj7z3gM8OBTybLrvnlukHAVnt1lU8plWKFW2%2Fp54OVMzRa4wpvPcYgAkoasJrGIevw6VPegO0DOIzG72AoSqLTsoFbkCZ5hu%2FG4kTaKXMDCTF7IvYNZiJ4%2BpIVvA%2FA6fx6hSFBSYGQALDcrqT6LkSDyC9uOnjJ2ey%2FK%2B0DoY6%2BJcFNBjUAFpGOxMwzNMGdj9kmLgmzPpLXiRtAe4oZGNOhUOzk3yFrt%2BuGMb1rwmpsqdRgL3reW0qzMO74874GOqUBf9aiCdVxXSgzR85Y6HSXiNeZg%2Bj0aAjPYAkvgh%2F816CyjgSVwt4eRqILxBD%2B65xi3mScI2rAJfMZeB1mAxFIXp8VMSTFhNowZKeHtujdkiMn3pO0pa7vFb6qKKQs4PcLitBurDgVkhNfbkhc49TAr7%2Bjwz1BDQDNtnDP37uyv9fzHjLiOt6sIHFVOaW4jYCAUDe6P0hepXgkE1ekGr9oDyRHrnR1&X-Amz-Signature=0aae9e713289a98ffd80b0dd9797d342a112fd0dc6cf30c637b10024de5c1d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZANWPTYF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCEanm7ExGbmdtDOKzbl7ie%2F4wAeMdZxKiNYWbN3UnEdgIhAJu4d6gPn3HCNB44J4UH9s2XDket6dn%2BXuOdgJ98PJKhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNHkpkOphBwG%2FlDX0q3AOsJlwX5g6ZVGdH3iu9TY%2F7Z%2Fm3dI%2FqF%2BaMax3nkupQbeXy7H5Y3%2B%2BB0fDRm3EX%2BOTxCfo8quphKDBVb%2FcdaZ%2FVcHptKXLGLKcN7A8Jja0v6XmsVqqj6EOZlVo2%2BNKxyWivrhd%2Fvar8zGXs493ZpFaecQq7H2FpPEUdpypVFeM4%2F%2BUpOGIBjXuDStSaj7jIjThy9xKMG9K4DsCmizTWOKtSrDrM7c9HBgTzQO%2Fxs3Eymfo0A%2BXEcMMCdU0CR8ey3373Z8wcJxb8FgSrxThXTxx6PTfIVEgamc9tHqeFVaaPdzsOULIqfgZJ4IpoTZOH5SUaQjjHskSK5yUbc4AZWqHTJ2%2B1XtBeIjxLkqdLqXiLrzcBxZj5NMBRC7PURkXUAjmN5xsyTOgrS4ZXci0nnl1cJUFXNx1CcSD2c7wdB4mlMKQSafQTq110kUDL%2BE3aFASIC4tG8CVhN9mlI2itEj42HPdMm6H7YzM%2BzNesVleaEFQT2d8xu%2FzhuYuDQiz221pugPhQ%2FMrigWlrXjXzJTxwyr06Pe1W9WvXg%2BNKJQsTCK3FrXXra9A1Kl15JCPHcHWuvlttMO1v%2BQ4tIx0JgAzjdhj0W3YLc072pAFx%2BemPwDAMw9UBHpqGDSxUsDCW%2BfO%2BBjqkAQs8J9fUWX%2Bz8rB4Vuz1QkXClkLb1w0aXSvI%2BmggkfxAZwPEx%2FINL7SXvQzlUcFdeHxo59Y0ocqyy3m3Rp0Kk2EruWU7X8bbL60s8bM%2BfNmk4nUtkW0F%2BCNBiOSi2NHhnHK5curTTXyDj8VYsJlAHuI6ePhIq95BVMYcVo1sqAGJdfOkoXGpnGs435iMEsrNzg5Q1nys8AZrQqfahjWwTS2dXrPE&X-Amz-Signature=1753208b6110962ee4ad73681d9e292d4e3f24dd9c272154cd66b53f4f00b593&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZZG5ED%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDJh4SV7aVy%2Bd6H5zU390KQyFnIjDtgRcaePJvI%2Fed3jgIhANLTmVfmmhUL5ZzW%2F7WgRq3Fp%2F1qAlTZFI0%2FsV%2Fmhk1vKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq95SnKxsjsygsJSEq3APZKj0OshYM5rjcG9PaNS9t%2BTlKWhq%2Br5qIODb8IrB7se7zRo3%2Fr92b8IU567FebFVffK8WgzY7W2dIe%2BupUPr%2F9G6hi3tRCU%2FVGBXwKObnDL%2B7i3D%2FwUmQIZxkanZTAtFuGLuEWOtDqAvKkX%2FRwDyOVx2Zg6gwlYbiB0QLfyMZMEXJRM%2FTzz0C0xwyxgPP34K2J%2BsmC25McERFGokg1bJcG6FWuMs0D9dB00wqZYUzzzCQF8qWad9sVBVmGHLao9rtKJlKwpzaj8IJ0vzYB3GUh%2F9vmSCLCsacnRKlzHRvtH91AwLtfSx3pCEtVLJZ%2FsxQiv2iwvMsDoeLIEJJ9KcruXW%2F6fbl9Lm8G0yyRBRREP%2FoUQIYs%2Bczpz92qLYfvpz5IeH5SNtJ7sYEyEcSnIzvjmg1Y7lhvXLH06ybRnNw5gt6Zq6VdFIr3zTxNHdScyruJ9KNMG0lG48lVwXgUSjcSVRj6WJGLD8RUS0ZzmMWse96Hu%2Br7WdjplXcbNL4GvPSgbjgHurDXTIjq1ITGkYp8JAmlAfFSk6b1ydM8LBLexK3u9DO90rvVqGWVawKVROJk2%2BiF0ZI8mCNJ5xvsM6QgmOTmjFUk0XBkVOQ3Jh%2F5Jy1D4RsU%2FMt0IN2azC4%2BfO%2BBjqkAUpvwvlGKjprR2yoGcP783kWzj3um6IPvyOU0MMtsW7lVHUtGzieINcNukuIWUhanl1bRgsy3cHAitzu%2F0AeKEsj29jVTuBJs%2Fxy2WRHVL00UMWpsrk2GUuDOzR1fmQaP9%2FFjdaf4SEp%2FZ6aga%2FbSibGZ86Zn%2FdUmL8ysnC5SmuDCy3inunZCBOJ57Lqaa7b%2BT2ov0r0zQfmgsb9j64U%2Fu8PRTxs&X-Amz-Signature=0cddb0530c3419073839c38332b366365e106b63f14d3810036daeb575db1cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7M7ZZZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGPImYFVCeHgND%2FXWOMXl9CtpIRBwtkfhjlTaSSibftbAiEAlm5%2BJQfS7HWDYT%2F79%2B7JPQelX9yBrVh%2BHjnVKiNJL%2FUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkfJJky%2BzEiKRlJKircA9yxyGE4B%2FpxcCHNMJvcPvRRZKdvrJmrhzgpxR%2FF87N9yRI5KMasVOksda2V22tKr7MEZCwT467Shs8Lcz61Oh2Y1eZ5XDUqZGZzH9trkQEJsW2j0%2BSVrMG7dBFlcC6gusioKPlLdXfb2EEFrZ7TjLtiEYCPppd%2FUhZbkdPMhCS248FZWkj4BgWRkCgzVz1NbMyQ4k%2FJ3T1SUMbbSO8eNw83DuGqe1B1KDrby5XWB9PwA2UK8KhF%2BGFAdG9bRO%2FvUffBMb4r%2BuTkhN%2FqtBwJMXReKC40xvazqZMpMC0xuq1MTc24hme%2BQOoRWlLewgzbO1HZtzz0E34x%2B7Utl%2F%2B7pE4oMhoRbhVvG4V7PqzrIy7%2FnreI1W3XrddpPhc%2B8txPXCXLz5pj7z3gM8OBTybLrvnlukHAVnt1lU8plWKFW2%2Fp54OVMzRa4wpvPcYgAkoasJrGIevw6VPegO0DOIzG72AoSqLTsoFbkCZ5hu%2FG4kTaKXMDCTF7IvYNZiJ4%2BpIVvA%2FA6fx6hSFBSYGQALDcrqT6LkSDyC9uOnjJ2ey%2FK%2B0DoY6%2BJcFNBjUAFpGOxMwzNMGdj9kmLgmzPpLXiRtAe4oZGNOhUOzk3yFrt%2BuGMb1rwmpsqdRgL3reW0qzMO74874GOqUBf9aiCdVxXSgzR85Y6HSXiNeZg%2Bj0aAjPYAkvgh%2F816CyjgSVwt4eRqILxBD%2B65xi3mScI2rAJfMZeB1mAxFIXp8VMSTFhNowZKeHtujdkiMn3pO0pa7vFb6qKKQs4PcLitBurDgVkhNfbkhc49TAr7%2Bjwz1BDQDNtnDP37uyv9fzHjLiOt6sIHFVOaW4jYCAUDe6P0hepXgkE1ekGr9oDyRHrnR1&X-Amz-Signature=fdd32df482f883f7797efcae35a9feb0ff001cc509e2f54c9646c4ce41a5bc1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
