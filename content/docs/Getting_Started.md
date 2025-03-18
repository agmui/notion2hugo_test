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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQSL7JP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDLxVfAGD5E8XEFYl0VRLcA2YMX6HbbE7ksSEUJApTlAiB5c4%2B%2B12Jw6IxCbUbVAA4WVrnpXn2MQk6liWk4p92DLCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMKFiJGUvAikhErdt7KtwDMV%2By0x1HKqFC4TbZdUl9olUwT6dYqo0%2FARa1v8NGZD82%2FRyLBQUZ8WtrTJeSKEbPfYZHCdQOcRd0doC7G%2FQxRlmRJ2Sapv03u4IgUPid6Zm7zsxlktHAwdogtXWJ6WTqwJR9jmTSoiivM9Re%2Fk6RfrbXIzCvSf%2FPJHgf8FWoBaQjvEr4SVeC%2Fg%2F6VkFtLfsrowPJo0%2F8VRk1JmvV%2FvvBmwe5vyL%2B%2FvVZySnXJyX1k2lCTNkq%2BtVmSBQ9a18gneaVR8ZnI0%2Bt3HVkCRtNcUzQJHDSM5D9J%2FhTvABvbbMn6NddmaJMM92K7TOcgtB%2FoNgjAuANlIssGYFY%2B7gXsLa1alAIlcnSK%2FyQCSVGHBHdEFdxD2DzLVtM9Y4F3LsH6HmsFZw%2F0P79MlpmPiwXRyEzREF%2BqGONPPtXmdY4BTAzhGv9qNrc4%2B%2BVtimzM%2Bmk8AaHItaW%2FfNmnmph9mEMHj9pkLSXJLAzxoji%2BhMjIwL8hPfyvqWUZ3yulzRkuZFqMhOIEQNMKeirJhVEMh7gZabpq7TlkJVRq%2BGmw5uPqasJvF8EpIiuHsUL9Z7G3b%2Bp%2BA%2F08m3Ns0Qz5CBiZaqXrCjTus%2BveweiqYrOyQxwNAyzMwUh5%2BSkgEdrO%2Fg%2B%2BDUwqqrjvgY6pgHnxLMJkdvBtUrlZGZ9IISxfeS3RuevfCxVWRPoyqn37TGYT2Y6ETOS0g%2FtfPcqzFVAiYjqVDZ1HfApa%2By%2Bg0dfmECjTgXafXnzZAEVXiyad8%2FJruvKEsxpQvM9hnODu%2B5SjBpuAUmX71yRFRoRfozDV8GBVwYJtFfMwScfmnvj%2BBdzVMB8D2ah40MpRQgUHArVt3X0hgL8X4JTd8CRH15D%2BFMruUoa&X-Amz-Signature=75ef8b322c9ebdb160f85df23ea671895db5a20f82fa517ead598351a497b17d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQSL7JP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDLxVfAGD5E8XEFYl0VRLcA2YMX6HbbE7ksSEUJApTlAiB5c4%2B%2B12Jw6IxCbUbVAA4WVrnpXn2MQk6liWk4p92DLCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMKFiJGUvAikhErdt7KtwDMV%2By0x1HKqFC4TbZdUl9olUwT6dYqo0%2FARa1v8NGZD82%2FRyLBQUZ8WtrTJeSKEbPfYZHCdQOcRd0doC7G%2FQxRlmRJ2Sapv03u4IgUPid6Zm7zsxlktHAwdogtXWJ6WTqwJR9jmTSoiivM9Re%2Fk6RfrbXIzCvSf%2FPJHgf8FWoBaQjvEr4SVeC%2Fg%2F6VkFtLfsrowPJo0%2F8VRk1JmvV%2FvvBmwe5vyL%2B%2FvVZySnXJyX1k2lCTNkq%2BtVmSBQ9a18gneaVR8ZnI0%2Bt3HVkCRtNcUzQJHDSM5D9J%2FhTvABvbbMn6NddmaJMM92K7TOcgtB%2FoNgjAuANlIssGYFY%2B7gXsLa1alAIlcnSK%2FyQCSVGHBHdEFdxD2DzLVtM9Y4F3LsH6HmsFZw%2F0P79MlpmPiwXRyEzREF%2BqGONPPtXmdY4BTAzhGv9qNrc4%2B%2BVtimzM%2Bmk8AaHItaW%2FfNmnmph9mEMHj9pkLSXJLAzxoji%2BhMjIwL8hPfyvqWUZ3yulzRkuZFqMhOIEQNMKeirJhVEMh7gZabpq7TlkJVRq%2BGmw5uPqasJvF8EpIiuHsUL9Z7G3b%2Bp%2BA%2F08m3Ns0Qz5CBiZaqXrCjTus%2BveweiqYrOyQxwNAyzMwUh5%2BSkgEdrO%2Fg%2B%2BDUwqqrjvgY6pgHnxLMJkdvBtUrlZGZ9IISxfeS3RuevfCxVWRPoyqn37TGYT2Y6ETOS0g%2FtfPcqzFVAiYjqVDZ1HfApa%2By%2Bg0dfmECjTgXafXnzZAEVXiyad8%2FJruvKEsxpQvM9hnODu%2B5SjBpuAUmX71yRFRoRfozDV8GBVwYJtFfMwScfmnvj%2BBdzVMB8D2ah40MpRQgUHArVt3X0hgL8X4JTd8CRH15D%2BFMruUoa&X-Amz-Signature=af25085c5fded1f4c5b74b060dfa19fc1f61b7eea6e70445e71a6dfce4c6d85d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLQADRF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAtc3R4eG2UybL5LYYMfxD1%2BGgwWcuqL3h7xeSYkpTkAiAE1aNJEMUH2iAnk5odTPOb19by2FHdER4UI%2FCb1JVs2ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM6jLZpl9dYw9V5CaKKtwDTcX1sDWqVMm9qx3boq01ZtugnVXetEeyVGYHohaF73JdNqhRUONjx1lJaX4d2FbR%2FmRXrBtHWc225xKxDAdcgeYWc71mv8ZePfId0ZY2LjfP8XYHIJkPAQfcotxoinyyjEor%2B1WSFsW0N7JgQbD25EDr0bRn6dYN8Utv3lp%2FWt8vTt1hhIQQ0tRN9WLhAw0WDMPTSjCXlFVXMgEH57%2BufL%2BgMqmEZ51VCml9jrnxbhuo%2F6zjQkyQLNbA5t3YVjDQ1eDxdPRF%2B0ZTMO0aaMsl7CBdYHeCRENysiFjp2DufVbDxXFSVbtjOQU8zFYmZxzZkurtiWXsEvoJUOdpOFanY7%2Fsyo6LbQcCDYEmuaXddKfCwlXIdkMT9tTAYICJXUiHYmYMxLveL14MSqElWRvzfi2Al4RCngtfw7lWXSwvqi821D6c54oq3595VBAgFxkuBDgUlvlKpUAp9HxnqoPoDpMiV7e0%2BMriLVZAJktuHTXqhvBmq8ANOPcyrNN9bLDlrQu6Wb7oIgHEc1DNvszemXeSXCLxE5QvmRFkWjfSDYP6APLxlOfV05mNHra5I7Eurnzkzt9%2F3CYFJivgyMRFxV5O2y6qRNFUiPds75JfMf4Le61KPm09CGERS5Awq6rjvgY6pgHlpCYwCb%2F3TgOLLknpdLz5NKzM6MolEikWkDS%2BbvUsBqQ4%2Fjf1l6usn%2Bo%2BJTSX73KWZDJmsqubroFY8CuAtckDo%2FQH2%2BUJirgAEGVjB6fAGOcO6QD%2FzvYvvA54clLUhecBcgc%2FhWlU3PumOVsvQbc4uBaVyWWMHa0YdSOTDlgDJA5%2BOt6iZ%2FMv8y%2Fxyuyw298t%2BWuqUl0hHe%2F%2FfJQeW8WJ8WOGhnNJ&X-Amz-Signature=971de5de8c23f567decf2fa4e87be63b89dbb5a292f7a734ef346dac23e428b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZNCNBOF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClb4Tr4R7WQuqTUkwG%2Bcl%2FcE56hNk96BJOECY8x27yXAiBQKP7GysmFEINzHAlDNUXnM0GD5G4iDDlbqZRUW7pHCCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMVf5AKHKR%2BpVuYy3GKtwDA6xYXjLB92RfFHQ6E2oZJwhaMTTYUcVeeLlRshTwnkc8dCuH%2FVVHpXBz5FsTH2OBWROPvx59BTJgfCzSRUSNARhviNqdjlrFTEvwFDS%2BZUaHQtBfV9uuzc9Lek7Givj7HhO9ksg5jci9cwHe7HTGOejZiXASnH9F%2BJZsVii0Ny2rJIr6ticgNHxZLAGhXgbW7MljWPNPsZ9w3R18zhShshWX9mwg7kPnOWjiUsVnFvdCfiZK1zz48rm3y2Rw6vQR7yJ0zEy%2BdLWsFUJgrdTFR9zj%2BzW3dCXLrBTJVhw%2FS7GCZnWyuQYlgxZLQO6GUytqFyWdQ%2Bj42fSHa3saIkUJSC7cBW%2FixuWKdUbG16SHQ4RQDyzzGChGrv2K6z2d0qiWIwVUGhwKXh6aYYnpvmF%2FmQHNiqJ0Ep8FaS92sppCZZo9fyPd6IYzFw0r35STIo28MsXBcWmroyHHK5v8ilQh5VPrvrC1%2Buik5WgratrzYZ%2BoKGSWHw5TCPsU6nZdtdl2pLDWBqQzAx489XaWtvqj4rUGR%2FghcPKBeOOsQEoFIcO7%2B3iuJc27snUX%2FvgqiH%2BLK8Akl5Yye4ko8D6%2Bydt3k4HNPYuq%2BBQ9fE%2Brr5I9jzNXoZECXPKKoyihAHYwl6vjvgY6pgGDAUlTCaI9yd2h%2FvSbsi%2BGya61jyG%2FzB2E%2FtHzm0Nevr1mR23WOD2xrhEBKdk6OtbaIV78hhMUhDLQwa7BVqRnBuGIUZ7qQMxV6iCksLjC13H3GiFEQ2KXNsnMj9rr9VXUtQXyvEVQoF3RDgJYSV5oz5q8ttfVwN8PIOkGU6G%2BZhR3gw1kg2%2B9PLWr31KpyIVnuF5Z2zKHFd0yHTfe3ABQGG7dKdNN&X-Amz-Signature=ddb3e6b027dbe27bfc060652d3b2a5c5585717205ec5ce25e3de6c50f062da11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQSL7JP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDLxVfAGD5E8XEFYl0VRLcA2YMX6HbbE7ksSEUJApTlAiB5c4%2B%2B12Jw6IxCbUbVAA4WVrnpXn2MQk6liWk4p92DLCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMKFiJGUvAikhErdt7KtwDMV%2By0x1HKqFC4TbZdUl9olUwT6dYqo0%2FARa1v8NGZD82%2FRyLBQUZ8WtrTJeSKEbPfYZHCdQOcRd0doC7G%2FQxRlmRJ2Sapv03u4IgUPid6Zm7zsxlktHAwdogtXWJ6WTqwJR9jmTSoiivM9Re%2Fk6RfrbXIzCvSf%2FPJHgf8FWoBaQjvEr4SVeC%2Fg%2F6VkFtLfsrowPJo0%2F8VRk1JmvV%2FvvBmwe5vyL%2B%2FvVZySnXJyX1k2lCTNkq%2BtVmSBQ9a18gneaVR8ZnI0%2Bt3HVkCRtNcUzQJHDSM5D9J%2FhTvABvbbMn6NddmaJMM92K7TOcgtB%2FoNgjAuANlIssGYFY%2B7gXsLa1alAIlcnSK%2FyQCSVGHBHdEFdxD2DzLVtM9Y4F3LsH6HmsFZw%2F0P79MlpmPiwXRyEzREF%2BqGONPPtXmdY4BTAzhGv9qNrc4%2B%2BVtimzM%2Bmk8AaHItaW%2FfNmnmph9mEMHj9pkLSXJLAzxoji%2BhMjIwL8hPfyvqWUZ3yulzRkuZFqMhOIEQNMKeirJhVEMh7gZabpq7TlkJVRq%2BGmw5uPqasJvF8EpIiuHsUL9Z7G3b%2Bp%2BA%2F08m3Ns0Qz5CBiZaqXrCjTus%2BveweiqYrOyQxwNAyzMwUh5%2BSkgEdrO%2Fg%2B%2BDUwqqrjvgY6pgHnxLMJkdvBtUrlZGZ9IISxfeS3RuevfCxVWRPoyqn37TGYT2Y6ETOS0g%2FtfPcqzFVAiYjqVDZ1HfApa%2By%2Bg0dfmECjTgXafXnzZAEVXiyad8%2FJruvKEsxpQvM9hnODu%2B5SjBpuAUmX71yRFRoRfozDV8GBVwYJtFfMwScfmnvj%2BBdzVMB8D2ah40MpRQgUHArVt3X0hgL8X4JTd8CRH15D%2BFMruUoa&X-Amz-Signature=7e14b07f0036c0776bf510f3c650d86e3c1413c3199c558b2e88f37f4f68f473&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
