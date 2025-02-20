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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J6NINO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJSR3aScmXwaRs%2B8NZpc2Bm8XwQ%2BjytgXgxPt8QB2ifgIhAIXLyn5Axp5Dbn3HKwNP3RRODFBXWq9V%2BOBcV0I7GcsZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylHefDzVKpbgIDIWgq3AObihxWgIsz1EfSNLwGbER9CaIGtRWxhHqF%2FC2USLh43iYyr0ueKMH9cZf3wE49JYhDQPJwfoWqeA3NPfCJdOVZM6SHSHa3QNQsGUh1wPxJd7Ra6PYqfnGgcgwh319a6k5L9Rhhhx%2F0rVx4BClQO3wDh5CKh14VSZdeZRpdxyztoq6BzxmX2wajGMMDOt%2BGx2aar21RArrkH8F4845NMBFr09Uxaxu2KFFikKse72GxrH7t1f5KVQrf0Evs6PX6GO%2FToGa9SmToZJ5BzXGEAEzocRx9W480SfjptOeWfvsWxvnPAyYQoZlm9X6m4v7wPe%2BkYE%2FgGtPwzumYnJKNiQM67QHTd65yxkpg0JYHq2hCAvH1AMdjFz857SUWRsizK0HAmRM8UoN6foBH6tmna0Vnm1gwxqc%2F5CpNG6Oi7FNqedzoJkLNcr7Z1I5uJGsxdgkZ5t%2BC7GNlHFX4DMdWXURzWLpNm016%2F%2BRswSxtQ63PfKN0xFuhksFHQyBIAGR4trXsy3e9CCWNSF%2FNXGL0DmLMiOD5C8hauomg7qgDevH74BxtLcXZMYrqRji5H7Swptjsk3b%2FpyHhWDDrje%2BM%2BTRtf6%2BI6J2r47CpvDsoBIHHHnY9g2LBWzbjij5DrTD5ptq9BjqkAZSy6P2hJREqKRTIdt92Nrhj6sDJ5KW19mC%2Bw87gCUe3s0nwoEKIcXXJlIaE4%2FcjN8Idw1JGOWwRZszNAGjKe%2B%2BXHmgnoxgXo11fEaBBxCPiajassWbNYsFAs1OGGbAgUmFI85BcMHRzajKXO8bS3zTVNvn6nliT9U%2F5zvWb%2FZhvWOES1sr7LBVYcMSXwOUCX7%2FT%2BXvfOzDAmx%2BVi%2BVwCfEh1%2FXZ&X-Amz-Signature=b35eaf029455dc115562840366f6240862c8d6ecc65ec82e9412b6e5adb74a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J6NINO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJSR3aScmXwaRs%2B8NZpc2Bm8XwQ%2BjytgXgxPt8QB2ifgIhAIXLyn5Axp5Dbn3HKwNP3RRODFBXWq9V%2BOBcV0I7GcsZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylHefDzVKpbgIDIWgq3AObihxWgIsz1EfSNLwGbER9CaIGtRWxhHqF%2FC2USLh43iYyr0ueKMH9cZf3wE49JYhDQPJwfoWqeA3NPfCJdOVZM6SHSHa3QNQsGUh1wPxJd7Ra6PYqfnGgcgwh319a6k5L9Rhhhx%2F0rVx4BClQO3wDh5CKh14VSZdeZRpdxyztoq6BzxmX2wajGMMDOt%2BGx2aar21RArrkH8F4845NMBFr09Uxaxu2KFFikKse72GxrH7t1f5KVQrf0Evs6PX6GO%2FToGa9SmToZJ5BzXGEAEzocRx9W480SfjptOeWfvsWxvnPAyYQoZlm9X6m4v7wPe%2BkYE%2FgGtPwzumYnJKNiQM67QHTd65yxkpg0JYHq2hCAvH1AMdjFz857SUWRsizK0HAmRM8UoN6foBH6tmna0Vnm1gwxqc%2F5CpNG6Oi7FNqedzoJkLNcr7Z1I5uJGsxdgkZ5t%2BC7GNlHFX4DMdWXURzWLpNm016%2F%2BRswSxtQ63PfKN0xFuhksFHQyBIAGR4trXsy3e9CCWNSF%2FNXGL0DmLMiOD5C8hauomg7qgDevH74BxtLcXZMYrqRji5H7Swptjsk3b%2FpyHhWDDrje%2BM%2BTRtf6%2BI6J2r47CpvDsoBIHHHnY9g2LBWzbjij5DrTD5ptq9BjqkAZSy6P2hJREqKRTIdt92Nrhj6sDJ5KW19mC%2Bw87gCUe3s0nwoEKIcXXJlIaE4%2FcjN8Idw1JGOWwRZszNAGjKe%2B%2BXHmgnoxgXo11fEaBBxCPiajassWbNYsFAs1OGGbAgUmFI85BcMHRzajKXO8bS3zTVNvn6nliT9U%2F5zvWb%2FZhvWOES1sr7LBVYcMSXwOUCX7%2FT%2BXvfOzDAmx%2BVi%2BVwCfEh1%2FXZ&X-Amz-Signature=a0b3bbb15a4609711fb4cc2f96f0717cc2d0f5df5f13ce30b6da6580312456f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STA4TS6%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPa4IeRve%2B9cVI%2FXWtJtFwjMW3N79KzppZgsvnp6HiwwIgCmej2Os0mzmabdKZ0L0Ot9LRA2onmngBNnG%2Bh30yzQwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAZnDnUCqgTfU%2Fh6yrcA8eng5xumWiyIzd1%2B25KDj8a%2F0ufW4rMIrtS%2FC1AS45gOTM3Jhf9hPE2tnASRKH7hbBL7B7PWlBFs%2BKJed6dIHZ7zNa%2Fil5pQWEcYW5iGcTwyahsVrXIvCBPmWUIoliZB2CTV5eO0Ax%2BL8ayivNLEUauIc1axAWtoiWgNCxYgEwxVbQpdTULLKAIVIVJ3fh%2FICDnes9MUKlP4hCfOTZmGfIAS00TE%2BtIkq4AEipD%2BM5937KHdK4ITSTMSkUdmb1F6p8GZVGj1x%2Fy47SRjYTFMCWjTjCBOf%2FbVZ5UsIzTMGz%2BqT02D%2BrQZFZojKqaO%2FjKbzwftcK4o%2ByhKlykN6Jm1hajUuLrOh%2BvwPH4OVYhq2SKX7O%2F2n8JU5UK53ssA92cyGTUeo7zAPGyT5JEB7cGTXCPGT7ujjvOSA4889xdUCKcEz%2FCodlZeRgv3Hww%2FIAByHF%2FPYT6jgj0odBqLNKOzrWzMMBEGECx4Y7GIf3WjPlpNRH9OEmE0Uhb5pMSiXNYV%2FwmZ%2BNYHaiMlJ4pjxX18ZWqG55NQGVytzkhR2K86wbDVVjtpqPV2pWxlGLjWEWANuuKTSYfbXrznWJX4XV2NVMqu8%2FYrFuzU6UIcqI6VVMM2KDJlC%2B9Eg02D5LiMPum2r0GOqUBVUOTjwIMMufGagMgML5PKCGpzFBeQZYh70aUSK1Gl9RFnfOskRfZ2eQHgcvGY9ykD2jQNNu3HRypq%2Byzt6W0CuHdJNyP2dOfLQqAy1nB2%2FHcpYrmKEV7kXwxLwfVdzqMXAN7u659WWIQuMPi8NFV1ZM1rC3zjPAlqFmd4lWMXPwbgDdLc9i1idiOuTb9ictPCXjx34%2BaWWhf0%2FC%2By8SmsFO3ZVhG&X-Amz-Signature=bf21d9045f957a8985c05f2b5b1fd48084f25d97bbec2ea695a1249d619aba12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4TI6QZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmd9gqaic%2FFI55f42xNDhv%2FKihnCBDLUHyhMA%2FwHt09AiEAgr7kKVZEVp%2FBCornw1XN7EsIq3ydkQu7bxq4aQ5i240qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Y2qxSNpfBCRiIkircA4H6x3cFy7256VNGSpU1mq2jABDNWGG7xinwy61rKFtitwKBqHaXuh%2F35DWg9Su4lYr%2FXEcZGOgu8VN09xBgS%2Bg3TzMS48nXLC2xKI7nsa7hJsg22FKqrjZO5uIn4lJ0fswfQ9pc2cdGJ5JAiVJzj7gRPIFx%2FX%2BiVWTpLLn9P0Cig25e2w4fbTGNKSHr0yrV7zkwSHUiXIG6Mu0BWTbyR0kVbsDQKGGKKag0CU5n%2BjxtfzZrzmP%2FFRU%2FX085CiAwhX6OP1FrgCB%2FquexxSYJQnIv4vJcIyfbnbaNNkfa%2FwPkcKKrHg0yQ5j6DFwW50pysJxnr7uJ9jaT1PikjRTWl5RbeLQBv6DZdLJsvaTbIAVBpiKUIczpA7OHnsnCnJ%2Bp7S8OPm8UGpOYlb0iv%2BBtPUhHBdormA6d64HwOwkWhx84zsk2fZqwp21DSqfK9YPuP1sWDk8ul10LQy9sATdsCwGZRDulbqc8jKQuwgM3qOxdpVXQqpmTs0W2q0XoGff2%2FLP0EwdgoGpSOrtZ47ZD4%2BTeqsTTXVpm8FeetkMV%2BGSKtoU0rMhbr%2B0pLwCVMVqic6CdpUrY4BqnDdvBzelhKVDtCGJtSWYcJOqe3pIBjczZGk5rjBrWdSG08udeMPyn2r0GOqUB8pWw4k1qf3Gdl15pB9%2FOgmXcbcvaSathVkDCG6pWTmaVPR7JVHFwd0Ekb5Y2WGWJBl7tXiglOnjBAxqlOQznGVl4uaoFz%2BHqZaoEKmHHuO7HFlC4L49A5FohTc3%2Ff5JPSDrA5VC%2BGJ6VXDQeiHSpU0Zc5y9WW8dLL6WqrS9%2BeGuK49nxa8EUq2uVMDMhFz09d%2Bu1Cm92FEg1lzk5UBtxyNVWseOD&X-Amz-Signature=dd4756b952ac8b8d97b14f4bb1a2f5054fa0155e811ee329d648b34f321bf846&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J6NINO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJSR3aScmXwaRs%2B8NZpc2Bm8XwQ%2BjytgXgxPt8QB2ifgIhAIXLyn5Axp5Dbn3HKwNP3RRODFBXWq9V%2BOBcV0I7GcsZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylHefDzVKpbgIDIWgq3AObihxWgIsz1EfSNLwGbER9CaIGtRWxhHqF%2FC2USLh43iYyr0ueKMH9cZf3wE49JYhDQPJwfoWqeA3NPfCJdOVZM6SHSHa3QNQsGUh1wPxJd7Ra6PYqfnGgcgwh319a6k5L9Rhhhx%2F0rVx4BClQO3wDh5CKh14VSZdeZRpdxyztoq6BzxmX2wajGMMDOt%2BGx2aar21RArrkH8F4845NMBFr09Uxaxu2KFFikKse72GxrH7t1f5KVQrf0Evs6PX6GO%2FToGa9SmToZJ5BzXGEAEzocRx9W480SfjptOeWfvsWxvnPAyYQoZlm9X6m4v7wPe%2BkYE%2FgGtPwzumYnJKNiQM67QHTd65yxkpg0JYHq2hCAvH1AMdjFz857SUWRsizK0HAmRM8UoN6foBH6tmna0Vnm1gwxqc%2F5CpNG6Oi7FNqedzoJkLNcr7Z1I5uJGsxdgkZ5t%2BC7GNlHFX4DMdWXURzWLpNm016%2F%2BRswSxtQ63PfKN0xFuhksFHQyBIAGR4trXsy3e9CCWNSF%2FNXGL0DmLMiOD5C8hauomg7qgDevH74BxtLcXZMYrqRji5H7Swptjsk3b%2FpyHhWDDrje%2BM%2BTRtf6%2BI6J2r47CpvDsoBIHHHnY9g2LBWzbjij5DrTD5ptq9BjqkAZSy6P2hJREqKRTIdt92Nrhj6sDJ5KW19mC%2Bw87gCUe3s0nwoEKIcXXJlIaE4%2FcjN8Idw1JGOWwRZszNAGjKe%2B%2BXHmgnoxgXo11fEaBBxCPiajassWbNYsFAs1OGGbAgUmFI85BcMHRzajKXO8bS3zTVNvn6nliT9U%2F5zvWb%2FZhvWOES1sr7LBVYcMSXwOUCX7%2FT%2BXvfOzDAmx%2BVi%2BVwCfEh1%2FXZ&X-Amz-Signature=dd47afaf9b6e5496956d4925e99698e67bf29ec4546f667e98c84338b92ffacf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
