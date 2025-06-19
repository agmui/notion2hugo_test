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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL7FPFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4fMjrd1hbNiw5tGoxMm%2Fa5ijif5%2BiZmCpimpyh6MZQIgbqFuWG5RCPFqHrSrAnBx4KQOq%2FZvhHamWynVdF8eWFoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiOICPeAPl2DqV9BircA%2FMHcw30tb%2FKbksOEBTPzTjVyEjVartU1o%2BsmG5dZvvaakwFwkSzxXWsuVUhMa976u3G%2Bgyvf%2FQIuiNYLN6iwEXFFarFgQiFQna3GK0GwFPn5pd1no8rz8wH2tsKpnJCaOq5i3YqLsBYe0AnZZ3hvI6M1zmPUwpWJqdL5SrJkVpmuibArOCmvTeWnXMdLpn4yEazHAlc55kbCB4jwZ%2B3RE4TYoa0K1OpO85gRsUTN7u3%2FO3Zlxc7mXr4PdlacxZ67ByPWOQfFpKLD2e5dPdZWMir70m09gmYdn4EOUXX6ncO6nlSP77tzqJw0zM2fvFbSUs5KH4LWsDo%2BjJJ10LhlNk5EDuwc%2Btzg1poFTweU3kHu2EZAlmKFkef2R2gzjhBIx8hrKLDpB8xxpVfZVV5cWiMx%2BynTlF%2F0URqRMORRsnqo%2Ff%2B9btERYDAIWflXqJhjKClFplgt5zU0lXkzDeI1VE0%2BYFHqcPbGYVmw3SZlopWRA8PnyduT%2Bd0OmkNIeTGnqtHRsXDsRTjdhyRTT3OQuck4mytZnyw2BHroA%2Bpo1qV9u7QkTRICuE63R%2B78bWrTd%2FkjZ8P%2FooFs1puzAMgDcblucwQ%2F3Pd5h0nmeH5vdRGOPnRxE14d2v5F6peMP6gzcIGOqUBNF1sEYYv7YYJW7%2FBoSGvJdeekBArqJcIrKahR3KnHfYxS326eAhecVBNW45ssCvoeia5NLrGpvM3yJK6BOjuMf6DhQtZikLyR6ic7SChmvDDrB9S6ywhNsMkh%2Bi2KXxYplqwCNUcXnCm9ZA5brZlxHB8n0VMJKaZyry3zU0SO365XUEJXCRnLN0%2BVYPrn%2FFaSFKHjVuOS4Tolz%2B3NASvc0RC764q&X-Amz-Signature=053e766488e34c8b1a89e5f25b8e3b3d0a372587b51fc7f5acf4547d3a536b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL7FPFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4fMjrd1hbNiw5tGoxMm%2Fa5ijif5%2BiZmCpimpyh6MZQIgbqFuWG5RCPFqHrSrAnBx4KQOq%2FZvhHamWynVdF8eWFoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiOICPeAPl2DqV9BircA%2FMHcw30tb%2FKbksOEBTPzTjVyEjVartU1o%2BsmG5dZvvaakwFwkSzxXWsuVUhMa976u3G%2Bgyvf%2FQIuiNYLN6iwEXFFarFgQiFQna3GK0GwFPn5pd1no8rz8wH2tsKpnJCaOq5i3YqLsBYe0AnZZ3hvI6M1zmPUwpWJqdL5SrJkVpmuibArOCmvTeWnXMdLpn4yEazHAlc55kbCB4jwZ%2B3RE4TYoa0K1OpO85gRsUTN7u3%2FO3Zlxc7mXr4PdlacxZ67ByPWOQfFpKLD2e5dPdZWMir70m09gmYdn4EOUXX6ncO6nlSP77tzqJw0zM2fvFbSUs5KH4LWsDo%2BjJJ10LhlNk5EDuwc%2Btzg1poFTweU3kHu2EZAlmKFkef2R2gzjhBIx8hrKLDpB8xxpVfZVV5cWiMx%2BynTlF%2F0URqRMORRsnqo%2Ff%2B9btERYDAIWflXqJhjKClFplgt5zU0lXkzDeI1VE0%2BYFHqcPbGYVmw3SZlopWRA8PnyduT%2Bd0OmkNIeTGnqtHRsXDsRTjdhyRTT3OQuck4mytZnyw2BHroA%2Bpo1qV9u7QkTRICuE63R%2B78bWrTd%2FkjZ8P%2FooFs1puzAMgDcblucwQ%2F3Pd5h0nmeH5vdRGOPnRxE14d2v5F6peMP6gzcIGOqUBNF1sEYYv7YYJW7%2FBoSGvJdeekBArqJcIrKahR3KnHfYxS326eAhecVBNW45ssCvoeia5NLrGpvM3yJK6BOjuMf6DhQtZikLyR6ic7SChmvDDrB9S6ywhNsMkh%2Bi2KXxYplqwCNUcXnCm9ZA5brZlxHB8n0VMJKaZyry3zU0SO365XUEJXCRnLN0%2BVYPrn%2FFaSFKHjVuOS4Tolz%2B3NASvc0RC764q&X-Amz-Signature=28485029782bd05e3dbfc3ea1878abbcc6ee61bd79bf9d5dd0ed74c102813cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL7FPFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4fMjrd1hbNiw5tGoxMm%2Fa5ijif5%2BiZmCpimpyh6MZQIgbqFuWG5RCPFqHrSrAnBx4KQOq%2FZvhHamWynVdF8eWFoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiOICPeAPl2DqV9BircA%2FMHcw30tb%2FKbksOEBTPzTjVyEjVartU1o%2BsmG5dZvvaakwFwkSzxXWsuVUhMa976u3G%2Bgyvf%2FQIuiNYLN6iwEXFFarFgQiFQna3GK0GwFPn5pd1no8rz8wH2tsKpnJCaOq5i3YqLsBYe0AnZZ3hvI6M1zmPUwpWJqdL5SrJkVpmuibArOCmvTeWnXMdLpn4yEazHAlc55kbCB4jwZ%2B3RE4TYoa0K1OpO85gRsUTN7u3%2FO3Zlxc7mXr4PdlacxZ67ByPWOQfFpKLD2e5dPdZWMir70m09gmYdn4EOUXX6ncO6nlSP77tzqJw0zM2fvFbSUs5KH4LWsDo%2BjJJ10LhlNk5EDuwc%2Btzg1poFTweU3kHu2EZAlmKFkef2R2gzjhBIx8hrKLDpB8xxpVfZVV5cWiMx%2BynTlF%2F0URqRMORRsnqo%2Ff%2B9btERYDAIWflXqJhjKClFplgt5zU0lXkzDeI1VE0%2BYFHqcPbGYVmw3SZlopWRA8PnyduT%2Bd0OmkNIeTGnqtHRsXDsRTjdhyRTT3OQuck4mytZnyw2BHroA%2Bpo1qV9u7QkTRICuE63R%2B78bWrTd%2FkjZ8P%2FooFs1puzAMgDcblucwQ%2F3Pd5h0nmeH5vdRGOPnRxE14d2v5F6peMP6gzcIGOqUBNF1sEYYv7YYJW7%2FBoSGvJdeekBArqJcIrKahR3KnHfYxS326eAhecVBNW45ssCvoeia5NLrGpvM3yJK6BOjuMf6DhQtZikLyR6ic7SChmvDDrB9S6ywhNsMkh%2Bi2KXxYplqwCNUcXnCm9ZA5brZlxHB8n0VMJKaZyry3zU0SO365XUEJXCRnLN0%2BVYPrn%2FFaSFKHjVuOS4Tolz%2B3NASvc0RC764q&X-Amz-Signature=6f9f2d878240cd40702e0e5c1d085c99a0d51892db098112105798e86f3fafcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE72W4AU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz0i6AOwaIOmRALXGCIeVHKn9gDzZt9W4XhbQ91IUw5AiAITLQclmis%2FV1LIbWBEXwg2x6HlV1kCRYm583oY5Hj%2FiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlrTGZ%2BISF8HeypLkKtwDHmr7OXQlAB1OZOHk8STuN2Liy2dITzAGFXUTceSdo%2BuK7qtLHmAflpBGyxhUKw0ppVvFvVYbV7sYo%2FmopeGpz1ke0WxJoACy7vk1Ix9w%2B3tc3JQEhqcQ4nAQOYR86Gs2osAlU1HtThZ6ei0Wtcc5BwKTjmqqDy6txxo5aXUCgTNuboN4cuIJWZ%2FTf9gEjWlznCpsKrztEG58WCnUpUxtZh26dCHbExwzXzgBhw0bx9p1Ti93SzFb7G7p7H297DmvYXhBnOTwaIXLnW622GljPmHpOFza4vEnAwRTDDtF8UVe4n849Dl2WBZzGoELJZ%2Ffu4AwCb35nP9CKpTwpePLydEgGIXubGnibDNPRf2KT8xcVm2ttXUjdmsVj1AE62xcEvMlj6B%2B4GT408WWWn%2B%2Feo%2BYyQb5TyEvKwlSSll%2BVJpD8PysEhntko7knuitZ8H2D%2Fp1lvfLiofIQ7wGVI%2Fqf99gJiBAnwjXKkXhKmfC3jvWH8wXIDVfC0n5PSci9UzANeIC8fjiJf8uEic1sJvmPvu7C%2BxbP%2B34W75VYscazQYEHEAF5hY1XcDuuVXRbUu%2FvSkBc5LSydydbAM7UQWTAeXrMp%2BIxyzHlo5iHfinjaaA3jgxXwfe02dvZNMw%2B6DNwgY6pgEctEUj41rrSWDbE7pl3pR%2FsTB%2Fj%2FFcJURnqyIETonaHchnZi0ljOPG3tu%2BB593Ipo8b01DM0K4T5HQYJRlgruJ6fwwKaqy9oqWvf1m1XfYHF3oqXxr%2BQK6i6lJSGOsIrtHbU1Oa1fYUjfoi0pSJaJKe8%2BpW3FhDZv9DZCAdYVLLd2%2B0tlIGXBLAmeXZLOAI1MHpNR8MO%2BkubkRSnD4fHHqDbGqA2iz&X-Amz-Signature=0cb7ceea0ead05b43ce8e820da7b4fb9c29aba20e04cedb51196fde3f4acc759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN27264D%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu1ZSdl5weELjH6hpp1Nz5OqSmVvvi7IwTinMdPGoLwAIgHUKWY0CMMS4FFkGOqRIAT7P5jj81gr5HIgCps8M2AgQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBr37CLCENa%2FbMWMIircA%2BTcUonU94zLP4H5N9DELWP0OfjxRrRbAuPiYREhw4VPuH1YJSR%2BCLW3wEPgu1Ve3GPkpKX4XojWNDwnuBW9Et50sN4FS0vRMnWK0%2F7hXgiuXrX%2FFY6bJdYIxFVBdWEcbIgzc3iL5PGvLDCEXOoMMYKZslJTxgZaT2QTKSkJgjnYVRuLdWawIv5acoa6b4ElZqExxg8Ro%2BkoLR3r7tpUuYuDo4PtEawonvWC98O4DswEuORN%2FiuR9BgH1DWDIGREKAmalfAWX%2B7YkZzQfA26eomfMlH%2FAKW9uOpE44cx6j34hen4herAPUeu1AQguIXQG3xuI6FQdnU70QDZa33RooMO%2BZCXy%2FGkyqvz2IhrDYQYbtbbI%2Bbuai4eBUqpym8GPLyKN3On1ywVnwnBNSGwGSF1jCuD%2BuyvlHGe%2Fgt4I7NktWZ3faevS%2F%2BL%2BGPBiwDttmTu49a%2FLtrq9%2BvcxKTzNZ5eeSkz91etqjfoXdNMknDOP1oKstlHXOKFZ%2BSiktU4miEgA4M9bOxTlj3A3Pb5XB0KsLlV%2BSEHkBIfTSR61%2BzIfnOaR4X6NJlyaodwCbqTQLYkvAgXNIOEXzY8BjkrVWbtUbbN59u8Jcnv2JpINyEdSafCN54k8jO8EgfWMK6wzcIGOqUBIWi4wmlxuF68KtH60qvZ7Ysz00nP9I6QQFlC%2B9wfwt8BEIiQ8wpOrX8R4U5o3UCIdUak5hJVqgp2oHAldQXeBfsj7rEcipluIpGmb9D9UIYE7G5aR%2Fde9dDsDeHjwjPq5%2FFF7ZFmbDNDjHbRGpg3ZG3Tv22XCoMXQV4mi227U3UTBj%2BA9TE6yUlX0Pvw0IQ1jUQFHRwwDR%2BLcnB%2BcSeKUMyxsTRa&X-Amz-Signature=f304caf545f3ca9991fac3c0b9e91efd26f5231288a6b4601aeb0e5849787a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL7FPFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4fMjrd1hbNiw5tGoxMm%2Fa5ijif5%2BiZmCpimpyh6MZQIgbqFuWG5RCPFqHrSrAnBx4KQOq%2FZvhHamWynVdF8eWFoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiOICPeAPl2DqV9BircA%2FMHcw30tb%2FKbksOEBTPzTjVyEjVartU1o%2BsmG5dZvvaakwFwkSzxXWsuVUhMa976u3G%2Bgyvf%2FQIuiNYLN6iwEXFFarFgQiFQna3GK0GwFPn5pd1no8rz8wH2tsKpnJCaOq5i3YqLsBYe0AnZZ3hvI6M1zmPUwpWJqdL5SrJkVpmuibArOCmvTeWnXMdLpn4yEazHAlc55kbCB4jwZ%2B3RE4TYoa0K1OpO85gRsUTN7u3%2FO3Zlxc7mXr4PdlacxZ67ByPWOQfFpKLD2e5dPdZWMir70m09gmYdn4EOUXX6ncO6nlSP77tzqJw0zM2fvFbSUs5KH4LWsDo%2BjJJ10LhlNk5EDuwc%2Btzg1poFTweU3kHu2EZAlmKFkef2R2gzjhBIx8hrKLDpB8xxpVfZVV5cWiMx%2BynTlF%2F0URqRMORRsnqo%2Ff%2B9btERYDAIWflXqJhjKClFplgt5zU0lXkzDeI1VE0%2BYFHqcPbGYVmw3SZlopWRA8PnyduT%2Bd0OmkNIeTGnqtHRsXDsRTjdhyRTT3OQuck4mytZnyw2BHroA%2Bpo1qV9u7QkTRICuE63R%2B78bWrTd%2FkjZ8P%2FooFs1puzAMgDcblucwQ%2F3Pd5h0nmeH5vdRGOPnRxE14d2v5F6peMP6gzcIGOqUBNF1sEYYv7YYJW7%2FBoSGvJdeekBArqJcIrKahR3KnHfYxS326eAhecVBNW45ssCvoeia5NLrGpvM3yJK6BOjuMf6DhQtZikLyR6ic7SChmvDDrB9S6ywhNsMkh%2Bi2KXxYplqwCNUcXnCm9ZA5brZlxHB8n0VMJKaZyry3zU0SO365XUEJXCRnLN0%2BVYPrn%2FFaSFKHjVuOS4Tolz%2B3NASvc0RC764q&X-Amz-Signature=c036a3d69182ff7175d671f24221efee9dd2c5b02e5ebfba23817adc02a01f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
