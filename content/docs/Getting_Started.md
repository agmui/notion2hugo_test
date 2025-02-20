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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB25BXR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuq2G9Y%2BsOsCZcNDAyhJVuap4VRYo3yLdszs5mMgiaDAiEAsyQICEO4Zijvz5Djh1b7mVZWZBQofI6DoCs247mwmjUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZTHE3ti2ukmWXQrSrcA5WpbyyadIEvzAPHSczpIDw7C2k6NaWfUc%2Bz8Gep1PDc6S5bDcNKftfIimzszetqCmIr%2Bk5Jy%2FnV6tmT%2Fm2ZF6o6SmOl4kSdSnSHZwmp40cT1qHer%2BTcajT6PjK%2Fs2jm50W8Vxam23vOAHBtQX3oijQl4lsbkh4Jy7CXjeYMcsBj7bcYCRlSEAjtwgBJlDePAaNrhydX1CvsvpnvpF%2BPzwSK%2FYeWxairAAekUx0MJYmmhT1qfrLav0%2BzcTUvLSUweZrG%2BGsE%2BqRSR3X2bDlX%2BX6dNK%2B4TCxY1ENeZih113XeH4QhguisYz0b7fMfltNDt6ST1NTpMlKJ%2B8IYgL9qJ4q4wC6YW%2F7kG35Jjao1Rfy%2BmZINIhZyoinSLQNTPxfGQiL1l0K2q0A6mxE71PYF%2BDPKKp43IvzjtVMl3seprgq3XyrDTOgoacCEfN5rFY7NLcg%2BjisNlqCXLzZMIp8zYNOYY8x6poR1nkBEH1FYYZp0TTw8svqag2CWXZtDamQ53Mk0cFzGYlOocBtViF0MsxWtTof9ZeA9Uvj1JwtDB5nqGDyDFFvJJgzEdYlVBnb3mjmM%2F%2BYro136LBmunDpnLg%2BjtGm0TDwetuTUndntAakj754nKKM%2Fi7cyplyDMJnR3b0GOqUBvyqbNIDKWx%2BTRgRqHEc1xtGe994DgTDOA%2FZbUPSfWJSNFzO8Vl61RgPXxUZ7Y%2BeL0Se641eYEtrjXWNT04DYRqd5YyY%2BhX8nibUTrZcn%2FWWWeDk9CQty4YPYXtYFkwagjc0atAgG6xemewLFGik3HOPFFUqQWFZH9XfAg5vNWa1TRJEwiJhfbNsHWejtWfvu532acY72lyifGkwFKvarqNsEMKIG&X-Amz-Signature=9472ee310f97fd2a928d19fd32045713bcaa73b5a23885164d82b642f4081854&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB25BXR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuq2G9Y%2BsOsCZcNDAyhJVuap4VRYo3yLdszs5mMgiaDAiEAsyQICEO4Zijvz5Djh1b7mVZWZBQofI6DoCs247mwmjUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZTHE3ti2ukmWXQrSrcA5WpbyyadIEvzAPHSczpIDw7C2k6NaWfUc%2Bz8Gep1PDc6S5bDcNKftfIimzszetqCmIr%2Bk5Jy%2FnV6tmT%2Fm2ZF6o6SmOl4kSdSnSHZwmp40cT1qHer%2BTcajT6PjK%2Fs2jm50W8Vxam23vOAHBtQX3oijQl4lsbkh4Jy7CXjeYMcsBj7bcYCRlSEAjtwgBJlDePAaNrhydX1CvsvpnvpF%2BPzwSK%2FYeWxairAAekUx0MJYmmhT1qfrLav0%2BzcTUvLSUweZrG%2BGsE%2BqRSR3X2bDlX%2BX6dNK%2B4TCxY1ENeZih113XeH4QhguisYz0b7fMfltNDt6ST1NTpMlKJ%2B8IYgL9qJ4q4wC6YW%2F7kG35Jjao1Rfy%2BmZINIhZyoinSLQNTPxfGQiL1l0K2q0A6mxE71PYF%2BDPKKp43IvzjtVMl3seprgq3XyrDTOgoacCEfN5rFY7NLcg%2BjisNlqCXLzZMIp8zYNOYY8x6poR1nkBEH1FYYZp0TTw8svqag2CWXZtDamQ53Mk0cFzGYlOocBtViF0MsxWtTof9ZeA9Uvj1JwtDB5nqGDyDFFvJJgzEdYlVBnb3mjmM%2F%2BYro136LBmunDpnLg%2BjtGm0TDwetuTUndntAakj754nKKM%2Fi7cyplyDMJnR3b0GOqUBvyqbNIDKWx%2BTRgRqHEc1xtGe994DgTDOA%2FZbUPSfWJSNFzO8Vl61RgPXxUZ7Y%2BeL0Se641eYEtrjXWNT04DYRqd5YyY%2BhX8nibUTrZcn%2FWWWeDk9CQty4YPYXtYFkwagjc0atAgG6xemewLFGik3HOPFFUqQWFZH9XfAg5vNWa1TRJEwiJhfbNsHWejtWfvu532acY72lyifGkwFKvarqNsEMKIG&X-Amz-Signature=ecdc5fe8a1ecf3ca3c0c732fbaeb7a5b03747e8ebeede8d6d41a496b2a65d3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS676SI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhWvspg4GakwaLCJRecWz3YNoI6oyM8%2BuZBDo%2Bo%2B5hyAiAWBwbAMmYaJA5CzIvTupWZxaEV6Y%2FI%2B%2FuFOvaOGyc0tyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzVlYBy%2BUeiKgPfwgKtwDrCmyl39cH8lNu7vSPAvZOuGyb4Jv%2F5cz0kNO4yYhj5cUD0banStJ3cNpzIebfLS6A6CSt2LmA4%2BKwofIThTThVtXk17RqhXU8GVLtx64kaVpglcj8hxUtNrQK%2BB%2Fob7deb2u2pvsQ1loS2lNvs30yaj%2FzCEPspZwmUIayMgaHx4hYfr%2BFZASQ9dRS9m0hQcct2Ha50zNDomF%2Bhyfvb%2BUk8uUqHT3xC7ha3q3H3HXXT1FKUWB2FzrONrmzGutdxYkju4zzGCNo5iWNj6VI8LyysbsUo8iEb5E9hzFef3wmABY52LP82mhq%2BbjWtFq6MRIgvmJ4egeba7d8I7fBYwM3dTMRSRXXMMRUMcj%2BIAOl8wOG5GU6sChMxm8DRPL9g7LFK4sBB0XA6L4IiWQYVh4gaKWXO0c%2FrWhgXeBgPZwK53jujVsnXTg7bsf8p%2BTqSfq2qsLXue8OQPD9gRCUXhSri79KscVg9vF5RJ2pyD4UUBTUw7qz5TGIB1Qp33urtCdmaKA8AZwMVCQ4RilgYHx7zjBPmbQQo6SaRctCBAqI%2BEBjVQiX5GCvH7gKgS84GoOFltiM3c2uG0leSUH0PfzyMqdRRGa1icXvHb%2FjiYKSX3jLv43MP1Gs5rAkHEwn9HdvQY6pgHf%2FhBYc9i0PhLSFnuafe%2FZRyEnQ8lv56o7xX7FZIzYpBeQR%2BvjlhI9GD7nt6uMlR4HVBOeNKprBsFz0Z6ENewHSwNtXXMWk65mDWGVKli2bBy6r5FdUxsk4YaFU0%2FexhjJDxgeFG1VhkWU416t9LIuu1CDnsdFxhKhyydp3x2N3%2BRMvb4BYI7vClOCc59VJo0T3NXiu%2Bc%2FCcFj3fBxTMRF23G023zk&X-Amz-Signature=991360ad6efd68eaabd59919273b7dc71b781d9de1c98cd77e7cfc22de32eef7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FESVG2Q%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7HSPJxbXfRARLKuidTAXuErGCvNJ9fIadyfH6P1gotAIgOkursGulWujkDCrRncm02l6TGEg9TjMBZOWn%2BrmB8tgqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlKE1mTLG5AtP7RiircAwEml9EDilfjn2CrfYzwcJcn0wvpgBv8XpipwnCqRDlc7CWjJJbkdiKvXZx3JXTm0Yh7GEhMPbaGw05uDpU6KmGEMIzUKyWpFi%2Brjfqt4n%2FqSXwMBEoj1Wnq1lkKt7E9%2FoPakwvVEH03S6YOuetHBa4F68gez6pxKf4n7hJacmT5hv8kT2wmIEhHyNudUQjcYY6eOwcUhJtP%2FiMXAHZtxUERCx8VNzC7cJU84c0sebaZT%2Be6gjiz8Bli0g5kRg8yODy%2Fi4AK%2FOiPKcTGRNMHYj8%2F1QxvwS7gJ4FlcGynZSdzLoRA17QxWx5SjS%2FqD%2FnS4Ez%2BBhRz%2B9yntzNNrrzFs%2FbCFDiqV%2BVYEqDED1zQBImx5cfBVJRIA64NA6sfib9KcITAY17xwEwPw%2F5WY7yWmkD6F7P66lenbd6lARIoYu%2BU8U5XZqZDepi7UXjRfxJDn9v3bdyO0ZKKf0zKle6Vn3eYUHZadhGvt9qiC%2BfdBcFbyvZEm7xplgUTPwN9olJrkb3jbqIaQNTMnv8jBJWK7FaHEPdAejn%2B%2FgV4%2BZSn8vCMle5foec6iGq4K3kaRBh2d73xwGl3uXizVrPs%2Fe0TgYVS1Rl6h9V44GlE9JzGiamJOFYTQH4u58WvkAYDMJnR3b0GOqUBXNNnnUxWPhz8rNep%2B6sPdImFGYi8xLC6pyibhq73mWkqjhiDat9zsdekE4WDwjsIAHPSi6iS0cAqvZoyxzN9aeUCW1XgW0A0oOdxAJainLMNC6wjgd46aJ1Hy2O5x8SBblcXFB5dCUlbCPpJbHPfk2QQ3Z%2BEMx6esz33RmOIHCvgSGM7d%2FTcv8VD9P0FHOp6XaZaqrwmG%2BcMKfT4x41lLJHR2q7H&X-Amz-Signature=89f3e2cc66281c3ca17d54c37566425b4bae8ccf67ea95486515457a2c70686b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB25BXR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuq2G9Y%2BsOsCZcNDAyhJVuap4VRYo3yLdszs5mMgiaDAiEAsyQICEO4Zijvz5Djh1b7mVZWZBQofI6DoCs247mwmjUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZTHE3ti2ukmWXQrSrcA5WpbyyadIEvzAPHSczpIDw7C2k6NaWfUc%2Bz8Gep1PDc6S5bDcNKftfIimzszetqCmIr%2Bk5Jy%2FnV6tmT%2Fm2ZF6o6SmOl4kSdSnSHZwmp40cT1qHer%2BTcajT6PjK%2Fs2jm50W8Vxam23vOAHBtQX3oijQl4lsbkh4Jy7CXjeYMcsBj7bcYCRlSEAjtwgBJlDePAaNrhydX1CvsvpnvpF%2BPzwSK%2FYeWxairAAekUx0MJYmmhT1qfrLav0%2BzcTUvLSUweZrG%2BGsE%2BqRSR3X2bDlX%2BX6dNK%2B4TCxY1ENeZih113XeH4QhguisYz0b7fMfltNDt6ST1NTpMlKJ%2B8IYgL9qJ4q4wC6YW%2F7kG35Jjao1Rfy%2BmZINIhZyoinSLQNTPxfGQiL1l0K2q0A6mxE71PYF%2BDPKKp43IvzjtVMl3seprgq3XyrDTOgoacCEfN5rFY7NLcg%2BjisNlqCXLzZMIp8zYNOYY8x6poR1nkBEH1FYYZp0TTw8svqag2CWXZtDamQ53Mk0cFzGYlOocBtViF0MsxWtTof9ZeA9Uvj1JwtDB5nqGDyDFFvJJgzEdYlVBnb3mjmM%2F%2BYro136LBmunDpnLg%2BjtGm0TDwetuTUndntAakj754nKKM%2Fi7cyplyDMJnR3b0GOqUBvyqbNIDKWx%2BTRgRqHEc1xtGe994DgTDOA%2FZbUPSfWJSNFzO8Vl61RgPXxUZ7Y%2BeL0Se641eYEtrjXWNT04DYRqd5YyY%2BhX8nibUTrZcn%2FWWWeDk9CQty4YPYXtYFkwagjc0atAgG6xemewLFGik3HOPFFUqQWFZH9XfAg5vNWa1TRJEwiJhfbNsHWejtWfvu532acY72lyifGkwFKvarqNsEMKIG&X-Amz-Signature=3db4a5b48cc18889fba50d3026e285957c434f8662ff252bf0d90035e27e1f33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
