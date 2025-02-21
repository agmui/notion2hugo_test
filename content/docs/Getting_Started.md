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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJEDLGW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRtjULRE4PslecfGjoNnNpRMLe1iWXs9mJipUY4qxvaQIhALHbnlIJ7KJHJTMDUp377JshGSkw9VkAcbpInFQXWb3EKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjFtbfuWF7Vuxm1Zwq3ANEirZRgHaDdd9huz0k3AeBHjGst7zJr89p%2Bk7eFXYfUOb9K95wjWUiSqGa6FnFjqxA8pu%2BSHiavI6Rzxi2WGoUpry5dzbr7SVMkTtlrjuEnGsNNPe9IuUUk6tetpfEtbK9QrSCPEj0S8BasAsx4o5C%2Bs99Bd0w9RtkoYXjOz%2B7mN4CVrRp9cigglGoS7PNWHxSYRrAtn2Jvi%2BBavrZn%2FQ7ccxCtcHw1LXkNHSUr8ht6HZiwyMfLvNlCv9Uo4bn8%2FbnnQDbSqeRQkOhQnVdWBRgfWFmB8RNl3zY7RcgvWe8VcB3wqcapyG5kMp%2BkmoSbflNEDk6m81Wz9a6%2B%2BdlP%2BowFeisR7eNa4129eARBHHO6BcADd8kD2i5TDIz8CGrNs19%2FaEKZnqNHkRFdFgUbRS4h4iT7J9uO%2FlE9K0LOAsFO3O4MnElM%2FnYWSp8UmrbHStCHmQ01q0g9JZoddDs0%2BFSEly6nRCZts6VxvQO1ewHOgGQqNc1slLYXEM4ZR6dOijALGeFXHxoPK%2FMTuZoZ5Tq2i46uFus4VZcW0dHXo8iYU3sP4JG7nk8FGwPVXC7Xzw0ed3t9DU%2B2xoE4DYyJxrdzJpI4jSiuk0uTj8CMVOHWyUSkMOcBmHh0SNHgjCKmeG9BjqkAbdduK7o5BwjV%2BUkBabOvL1aWLNV7qBB%2B9LOgBPSFFvMF19gG3lqJpQEi9vIoEjF5e705EHbllwgXvcl5qbfjmHHEYEZbhhY8mrcnGugiJ4MMeZL3lkG0A8%2BiTeDKpncSS5x%2FS%2FdwQUThbBaVxLbmEbPHBPnh3JV37oWf%2FMFgQyQkvcOcBx6%2Bq18NKuPPfw16Mkf%2BWjQl3RysPoNwHrEUjah0w66&X-Amz-Signature=bd8e7f1b5cf5c5d9fd2e94af2b648ba7efe111479ecf2bc499c57e6f7f1121bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJEDLGW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRtjULRE4PslecfGjoNnNpRMLe1iWXs9mJipUY4qxvaQIhALHbnlIJ7KJHJTMDUp377JshGSkw9VkAcbpInFQXWb3EKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjFtbfuWF7Vuxm1Zwq3ANEirZRgHaDdd9huz0k3AeBHjGst7zJr89p%2Bk7eFXYfUOb9K95wjWUiSqGa6FnFjqxA8pu%2BSHiavI6Rzxi2WGoUpry5dzbr7SVMkTtlrjuEnGsNNPe9IuUUk6tetpfEtbK9QrSCPEj0S8BasAsx4o5C%2Bs99Bd0w9RtkoYXjOz%2B7mN4CVrRp9cigglGoS7PNWHxSYRrAtn2Jvi%2BBavrZn%2FQ7ccxCtcHw1LXkNHSUr8ht6HZiwyMfLvNlCv9Uo4bn8%2FbnnQDbSqeRQkOhQnVdWBRgfWFmB8RNl3zY7RcgvWe8VcB3wqcapyG5kMp%2BkmoSbflNEDk6m81Wz9a6%2B%2BdlP%2BowFeisR7eNa4129eARBHHO6BcADd8kD2i5TDIz8CGrNs19%2FaEKZnqNHkRFdFgUbRS4h4iT7J9uO%2FlE9K0LOAsFO3O4MnElM%2FnYWSp8UmrbHStCHmQ01q0g9JZoddDs0%2BFSEly6nRCZts6VxvQO1ewHOgGQqNc1slLYXEM4ZR6dOijALGeFXHxoPK%2FMTuZoZ5Tq2i46uFus4VZcW0dHXo8iYU3sP4JG7nk8FGwPVXC7Xzw0ed3t9DU%2B2xoE4DYyJxrdzJpI4jSiuk0uTj8CMVOHWyUSkMOcBmHh0SNHgjCKmeG9BjqkAbdduK7o5BwjV%2BUkBabOvL1aWLNV7qBB%2B9LOgBPSFFvMF19gG3lqJpQEi9vIoEjF5e705EHbllwgXvcl5qbfjmHHEYEZbhhY8mrcnGugiJ4MMeZL3lkG0A8%2BiTeDKpncSS5x%2FS%2FdwQUThbBaVxLbmEbPHBPnh3JV37oWf%2FMFgQyQkvcOcBx6%2Bq18NKuPPfw16Mkf%2BWjQl3RysPoNwHrEUjah0w66&X-Amz-Signature=09f2d24edcf65c665fc044e9522954c86bb88acb27452d771d301749e9110fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3HWU76%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8f1FBnj%2BIqySXB0k0ORAD%2Fx%2FThZz1y5nzCIOBdvAfJAiASSKV7dw0EuPHp0%2BpH8bfSkl0lu1MNAKOY3AnHzUFLtCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbeProuNdmDkBIw5uKtwDmJBNgwmIR7Br0EA770owKEuY7fN2i%2BKjE1lnhu47qS13nZnn3Jdq9QGQ2%2FYncYPfWsaePvFNKm5WBA%2BTK63csYliNjpe9ysURxF6LoI3Mgy%2FXcaRzEx93GYbsn0tuyHEY%2FTyHbgul5nYtlnUVEf3qiq6iFBAZlI7GxqdqywtHSSTVBgyl4FN4DjfROawtCW98yZwLCEcJspHiTYMpFiKlJHT%2FAwHP%2FFlMH8hMGMnjMiAQX5Z3wgkLCTI59sGMm9E8TLR4IeM4weD0gbpHHEUUAefwUlDerx1qXvRMo9V%2BHrtp5sgwly%2Fv0TOObM0Y2dLxftQq9%2Br3Z4T0vYjeQN97t89MbbopyrGkfeGjq0MpyTE9nty15FqvZwNXVjxrnLGxb65KOgyMQe9JFU%2FBqvZ9sKBTE02asGf%2BglWUyJEnzm586P0QAxIyboP6CUYxlxXxaku68bdEgenG4GQGZLml9YINz3%2FJGChzKfGnEFX3kqMZhIQmmfBbWlDOTZd7bP5PLOJnOyJ8ZIcPL8LD5Fmwb8RsAFoKXxRgjU8Bk6xytolxoRq5eQn1mpcgv5xt8IRpmzxFgnAa3cM73%2Fm3qPlcrJgACk%2FyCg8qGo0MbqVavHsOXVALYsT%2B4X%2FVmww4ZjhvQY6pgF9tKBTFBrmqiITc57CWzeqHB2d5OulXs9A7ZQqd%2FB3cfP4ABrkjmJwohfYVP%2BvbnKz3UZXP1WsF7L1rOIQ9QFiZ%2FLi7upeV18yklXYwjzAErr6Wp3LNaa3BoCgyja7eNFs5d4NwBaYGJvlEJgHo2XDvzmXscUhZlrnlwGWFFmYwLAlcHw2N7Np94bDOTrCl93Rse%2FXa5wv3puNpR7taVBqm1FLZECV&X-Amz-Signature=7cf8c46b7249ccbaf93f3a734a69aaf70acafe287ccb6bcbfb6e660ae101cd52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNZ6DCJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDanS3DufC9E63ZrGeRotN5x9UcKYv43xrGtqK08EDglgIhANW2ihC5sI7rUkZ0Obrp0LR7SQKU1cmHBFAm2NH1KyUOKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGuxfeRpvC5EPxjYgq3APPY66z7XTOwIEf%2Fu7vyVEIxUqETRGgdVhQFQIBRK8TRHme2NN4fKikICe18w2r6yY1Iij3UjoDDWWnAz3v%2B%2BebLOVuJf%2Fx9v4EhwWCd1FSmoydEVVa2AQRhfODYz0omEa%2FIVdSEwBLl9adIA4r5IZkVAYk4%2FxIiW96rQFVTFkV7wc3cIEMuPLrlqWO0qDPjWBX1MUkOjj2xccwlHHMXXCy9DtjkDBLBEknF%2B25aoHlsc78%2FJPMny1L8snjHlju30%2BN7rlJTI%2Bxdfumx676qnZc5zPt9CZwimslNF34L2T00nVmPuF0LpIewfWZYwEJ0IJCYJN4qA1bd2h24umoKyNOx8hXtWuwEkqxixoZXJW3zQayVxfLo3sptSX1G7ms0n3Ov1zO9NrhTdO2mJIyzPjldMPRwnLye19g2gkN5yY4q1MtVtmz%2BGAkZChc9CLFhGG0txRK9YhN3DBKyZMcrAY80pk7vk259RKUOaU3PXhK8bUMMnPIvzJpEamOpu2GHU%2Bt%2FTMzm7diocmWMKrj4Pbk3ZF3JWEdHKK4OLcv7djgWOOmnjLAgmrjrLWY2jHSfPrJLuAo%2BgdkfSgDnDcNx9VV9HnA5UurzFf4lPkcSCaQ76QdmBGoUh1%2BwkbGlzC2meG9BjqkAVYj8SWx2S0KYF8EQrP%2BlKrJDSblyv8jHQcrepNUTzlldv4hXWsXH2MB7u2KsDz5%2FwTkoeFujiawqPbo9y6CN2yQll7Q4lZ9jrRQpJOqfC8xfOmzNpz5Kw0jgHmB66ax83w0SeEV%2F0Qw%2B5n7%2F1il%2Bs7mQ%2B2yVPYbFANsXcYi7kO3b%2B%2BIXpgKAk40Rqr9vzLt7JUXdsR%2B17ne7YlDjG5vpq%2B8j7qQ&X-Amz-Signature=26d831cd275cad0cf57251d3be4ab93d905f23de4525d396a408bc0e270bc10b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJEDLGW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRtjULRE4PslecfGjoNnNpRMLe1iWXs9mJipUY4qxvaQIhALHbnlIJ7KJHJTMDUp377JshGSkw9VkAcbpInFQXWb3EKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjFtbfuWF7Vuxm1Zwq3ANEirZRgHaDdd9huz0k3AeBHjGst7zJr89p%2Bk7eFXYfUOb9K95wjWUiSqGa6FnFjqxA8pu%2BSHiavI6Rzxi2WGoUpry5dzbr7SVMkTtlrjuEnGsNNPe9IuUUk6tetpfEtbK9QrSCPEj0S8BasAsx4o5C%2Bs99Bd0w9RtkoYXjOz%2B7mN4CVrRp9cigglGoS7PNWHxSYRrAtn2Jvi%2BBavrZn%2FQ7ccxCtcHw1LXkNHSUr8ht6HZiwyMfLvNlCv9Uo4bn8%2FbnnQDbSqeRQkOhQnVdWBRgfWFmB8RNl3zY7RcgvWe8VcB3wqcapyG5kMp%2BkmoSbflNEDk6m81Wz9a6%2B%2BdlP%2BowFeisR7eNa4129eARBHHO6BcADd8kD2i5TDIz8CGrNs19%2FaEKZnqNHkRFdFgUbRS4h4iT7J9uO%2FlE9K0LOAsFO3O4MnElM%2FnYWSp8UmrbHStCHmQ01q0g9JZoddDs0%2BFSEly6nRCZts6VxvQO1ewHOgGQqNc1slLYXEM4ZR6dOijALGeFXHxoPK%2FMTuZoZ5Tq2i46uFus4VZcW0dHXo8iYU3sP4JG7nk8FGwPVXC7Xzw0ed3t9DU%2B2xoE4DYyJxrdzJpI4jSiuk0uTj8CMVOHWyUSkMOcBmHh0SNHgjCKmeG9BjqkAbdduK7o5BwjV%2BUkBabOvL1aWLNV7qBB%2B9LOgBPSFFvMF19gG3lqJpQEi9vIoEjF5e705EHbllwgXvcl5qbfjmHHEYEZbhhY8mrcnGugiJ4MMeZL3lkG0A8%2BiTeDKpncSS5x%2FS%2FdwQUThbBaVxLbmEbPHBPnh3JV37oWf%2FMFgQyQkvcOcBx6%2Bq18NKuPPfw16Mkf%2BWjQl3RysPoNwHrEUjah0w66&X-Amz-Signature=ea0b0e4eae10006a005c7f04b6335f7f60d252aa10b23e24ff287126e2b1e242&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
