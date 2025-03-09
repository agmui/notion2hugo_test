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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4UPONR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDHZALJu4d0loN159tVbZLGmlrClaDEVI5qeZ85KAPRWQIhAK%2FFUU8Mq8CLTD4H1eAlMpG90C6fkWaiTHDDJ2ZXVBXrKv8DCGkQABoMNjM3NDIzMTgzODA1Igz5OFKTD5zLAHxXkfgq3ANK2p%2FdbrFRDG0OlP6eeOZX18%2BRbCVWj7cq4aH8QShvLxcIytqBBgO3Lqyz3uLNtlWRVmt%2FSuBiEXoQOqcJ%2FIrjdsi2fJ8s67MBuZei7eGE5QIwlhJ2fxmCfH3IBvM3UDKjNFrnpwsINkqcswONRq1a1SovnVk02D4iehC8H9x7YX45sotTk31NGtiGHAJJ9R83FJjFwbN9sWjDzz%2BWWLaeKxPm5pISjRKxHdbfCcM0sSfuFMkn1KzDuRe0bMKrga7DaI0ZrMziZRCjIsG0lAsTqBZ419fK3BYJNVdAfsw3so5sCJ%2Fz%2F3eK3k5XLMPdzrJ10ArClhHkKlWVhmaa%2F3hjwAGpECmbVJ71O%2FxhiZ4%2BI2G02GZjYTONrMTc47cDcugwdK%2BKI6if%2F0jReG2iKEiYsxIZyULlTuSELYSz0ZlqFE9N4Nb%2B7ighbYdFvGD5CvaiRBMO8XIYp7jINHczyFeTJcCVonABGXcwQYAy5VG0ZSvDXQJLWu2zZfw4tB%2ByVnmOGl9kEYam2dkj7gIPIE2p7G3OLYxkLWa9l1Vb5K2MopTL2I5TRYjOo5%2BUtryYQN2YOzyWHBDWyQSjgyi5gVijtkonGS%2FFIEZGSOjGczUjYySqYFpxWGgJtaETSjDjq7O%2BBjqkAYDRpRAxcEOToGznMGQBUDO%2FyXgvhSrXNtSgzH%2Bv7CRFn2zQ81pMSuT%2BhRr00FCmZZ523HBazwNDr4N%2FEzq6YfMixdceuqM0cQ5EGl1OkUg4xPEL9OXfvsCbl7EKJgqSUu01%2FKk6QHHjAlGB87I1K8Bgm5sCp9YOqdur37A9SYoUsCfxQiUz0NlTAiQHNO3W2QkMTl6R1f4rV145iNai3vye7pmO&X-Amz-Signature=8d0be94319e3c9c194939b63d55ae26baf07f19b3153c6ca25328d62d426ba0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4UPONR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDHZALJu4d0loN159tVbZLGmlrClaDEVI5qeZ85KAPRWQIhAK%2FFUU8Mq8CLTD4H1eAlMpG90C6fkWaiTHDDJ2ZXVBXrKv8DCGkQABoMNjM3NDIzMTgzODA1Igz5OFKTD5zLAHxXkfgq3ANK2p%2FdbrFRDG0OlP6eeOZX18%2BRbCVWj7cq4aH8QShvLxcIytqBBgO3Lqyz3uLNtlWRVmt%2FSuBiEXoQOqcJ%2FIrjdsi2fJ8s67MBuZei7eGE5QIwlhJ2fxmCfH3IBvM3UDKjNFrnpwsINkqcswONRq1a1SovnVk02D4iehC8H9x7YX45sotTk31NGtiGHAJJ9R83FJjFwbN9sWjDzz%2BWWLaeKxPm5pISjRKxHdbfCcM0sSfuFMkn1KzDuRe0bMKrga7DaI0ZrMziZRCjIsG0lAsTqBZ419fK3BYJNVdAfsw3so5sCJ%2Fz%2F3eK3k5XLMPdzrJ10ArClhHkKlWVhmaa%2F3hjwAGpECmbVJ71O%2FxhiZ4%2BI2G02GZjYTONrMTc47cDcugwdK%2BKI6if%2F0jReG2iKEiYsxIZyULlTuSELYSz0ZlqFE9N4Nb%2B7ighbYdFvGD5CvaiRBMO8XIYp7jINHczyFeTJcCVonABGXcwQYAy5VG0ZSvDXQJLWu2zZfw4tB%2ByVnmOGl9kEYam2dkj7gIPIE2p7G3OLYxkLWa9l1Vb5K2MopTL2I5TRYjOo5%2BUtryYQN2YOzyWHBDWyQSjgyi5gVijtkonGS%2FFIEZGSOjGczUjYySqYFpxWGgJtaETSjDjq7O%2BBjqkAYDRpRAxcEOToGznMGQBUDO%2FyXgvhSrXNtSgzH%2Bv7CRFn2zQ81pMSuT%2BhRr00FCmZZ523HBazwNDr4N%2FEzq6YfMixdceuqM0cQ5EGl1OkUg4xPEL9OXfvsCbl7EKJgqSUu01%2FKk6QHHjAlGB87I1K8Bgm5sCp9YOqdur37A9SYoUsCfxQiUz0NlTAiQHNO3W2QkMTl6R1f4rV145iNai3vye7pmO&X-Amz-Signature=665a22c006f2d079ea9059de5cf82bf86c12c26631a8c6376855a42be230ed03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTISLP7E%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDJs0AJ9xg0vB%2F7vP09SZrV%2FpWzF9oj0oxedz%2FkzX5gZAIgLsnltHCgCoF0wL3TlH4Typj2SVhyE4XFOYNia3uYtMcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFwOmf9jk79Jy8KflyrcAyqqIgeMWPOdSrjGkoEIj%2F%2BY4jMxHNuS7KNMwMxHrGAFncW%2B32uzTYM2%2FOaiIzISvpEc%2FUdQb0xAXyVQJY8NE5jirw6n2ytrxbleh%2BLJZBimSBvy%2F9NtIEPXXmiSIrXWWWgDOR9I9pTO6s%2BUYbpXJIqB9o5eYTZlZjL%2Bq%2FWSs%2FzUgKN%2F5zuICOtPQzYxP6NFtoBhz7d%2Fc4FsRniyE%2FcdRwVC%2BfPUp9FEg3kxKY0hKIgwRZaex6BOYsooLUL36PBSS6ZgWrpv%2B8HLAZR%2BEnWWNqJ32HI69kLitNWw74IviIsf53pV6C2%2BW1kxmhunPLXE9UsQOJjS5SdXJybXx6nNsrKU4E4srBqM9GTcjj7RT8CdMgm369%2FahQqU7E2hpIKj7z1zBBRbb0rsiJinQHvhONK8miHj%2BDKDO94vz%2Fb7PkopOkWMvaSdP6uR7pwplgIIzqbRiTbg3LzsC8sVBBBjABEvaptnWqNdmolaqUF4fMeKFITgW9F0td8azaw0C%2B2VkL5kwGbRV5JsqR3tT2pUdNeGPfIsLA0zeIUOpPChMxWZC307qhR5pUQsYYj0ZfJ%2B4ydAiUGFgdjkEIEAbGZcQliVWYDj%2FMY3yvJxyT2L48UCF38vDGGTc7XbTgQZMNers74GOqUBY%2FVJ%2FT8pmK429OFy1ZAjq2WNHNNO4uTwcIpihZec%2ByGgAHqatOMgv4OHgDQlwAi%2FzBb6EZp5XKSVXTGX9MasK8%2BgI4pEWyRK5MMPMjSs9prZEPRyXdV7cbE77OouQz3wUAIYYp%2BSFuww1IeUao765Mkwv63S3Djk8hBt6r0EPPTxDtZ7Uk4PgbAvp9Q6y%2FJ%2BeiOs6sAXKbuUL0RgcBWAfS7F%2B0EI&X-Amz-Signature=b6b692c387257fa3063b83a3ddc41f5337d8715ba249e0542a5dafd45f963582&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWYZWPVF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDReTWlAx6lu4bnMvLZvfT1DV0vBzDD3Q5j0LaAPPizqAiAMqcU0iKBob0hZPTrNDPMoDGK8FzF5KYLMwLw5sUsGpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMjFxTzppW9GZJ%2FiW%2FKtwD%2F372BZWkv2%2BSCrdY6YlrdltIt8sNRI7HHHHzvL%2FnDtAxeiYSCjG0iymXF%2Fqo3il35uyOoVWSj2qGBl%2Fz0Ya%2BpRtM1Fuj%2Bd67t1MahyZncCguO%2BXdJjyBQdcQJ9K9M11Gh2oYwG1OfqJvQHYM0zYuFxlhE0AJd6EaCr1XegkYAK733a1RqwCDnTBuYh4Mw5eBTyiLEMwzQkDCjE%2FGo%2BOC%2BIz0BzsGSWZYv5vRS7izNkDLmldknkRpNoehRUBo%2FPzWqbRpx2xYeblBKiFNaq87tw9131FJvvmfmQoxQgnVvUE5hPYjH4QwK8p2c8xaNJggO%2BAJtpT1EMdavUwmzz%2Fl19tuGhOLi%2FfOlKBISw8ZURz5CNIPH9JNHxAAM%2BKH9MqTlo3aWfCXcy2i78PuPVC80pPa8bTjJ9%2FzRCwXd2k1Fi%2BVw%2BaW56ZMMWk9lW7otX9sB%2B7oiwdkkqBYi0i8%2Ff32FfRdnzgjw6K5BhNRe0bglADT%2FZotnqFOXC1AehNZu4ZN7DLohWNC05WIYmRTn9qt1FttCq7VrDMK6ggm0Bj4%2B94ykuJNWTCq9cnt7Fuy2h7nHL4UietAWjZYMrggagvmPqqijqy8nix5dFetcrIbqa8gKqhZcyu5PkcAPOAw9auzvgY6pgG4inphv9J0nBWnlB6wqB2XPI%2F%2BWMQABs5fOykhi6WAuiOkhgEy9tERnA4BBMI3gbUnUMKUN0%2BJeFMSLnwtiMG7YwpdlFBsmJfDwvbZifUE6i6OjnePvwb8JiIdgpku9AS2XECj4ZgQiOZAXqKMIhCGSlS1tPBSOGMl2FbNgNDdCEfPh8LskCFQq5eBm1UnuZSXwjhHxgCAkCVzFjvQukPtyYjqyf9z&X-Amz-Signature=4178670fe12af846836093dc5bdaaa7247bc0a4cf7a2cb434d042cbd6f7e6a38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4UPONR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDHZALJu4d0loN159tVbZLGmlrClaDEVI5qeZ85KAPRWQIhAK%2FFUU8Mq8CLTD4H1eAlMpG90C6fkWaiTHDDJ2ZXVBXrKv8DCGkQABoMNjM3NDIzMTgzODA1Igz5OFKTD5zLAHxXkfgq3ANK2p%2FdbrFRDG0OlP6eeOZX18%2BRbCVWj7cq4aH8QShvLxcIytqBBgO3Lqyz3uLNtlWRVmt%2FSuBiEXoQOqcJ%2FIrjdsi2fJ8s67MBuZei7eGE5QIwlhJ2fxmCfH3IBvM3UDKjNFrnpwsINkqcswONRq1a1SovnVk02D4iehC8H9x7YX45sotTk31NGtiGHAJJ9R83FJjFwbN9sWjDzz%2BWWLaeKxPm5pISjRKxHdbfCcM0sSfuFMkn1KzDuRe0bMKrga7DaI0ZrMziZRCjIsG0lAsTqBZ419fK3BYJNVdAfsw3so5sCJ%2Fz%2F3eK3k5XLMPdzrJ10ArClhHkKlWVhmaa%2F3hjwAGpECmbVJ71O%2FxhiZ4%2BI2G02GZjYTONrMTc47cDcugwdK%2BKI6if%2F0jReG2iKEiYsxIZyULlTuSELYSz0ZlqFE9N4Nb%2B7ighbYdFvGD5CvaiRBMO8XIYp7jINHczyFeTJcCVonABGXcwQYAy5VG0ZSvDXQJLWu2zZfw4tB%2ByVnmOGl9kEYam2dkj7gIPIE2p7G3OLYxkLWa9l1Vb5K2MopTL2I5TRYjOo5%2BUtryYQN2YOzyWHBDWyQSjgyi5gVijtkonGS%2FFIEZGSOjGczUjYySqYFpxWGgJtaETSjDjq7O%2BBjqkAYDRpRAxcEOToGznMGQBUDO%2FyXgvhSrXNtSgzH%2Bv7CRFn2zQ81pMSuT%2BhRr00FCmZZ523HBazwNDr4N%2FEzq6YfMixdceuqM0cQ5EGl1OkUg4xPEL9OXfvsCbl7EKJgqSUu01%2FKk6QHHjAlGB87I1K8Bgm5sCp9YOqdur37A9SYoUsCfxQiUz0NlTAiQHNO3W2QkMTl6R1f4rV145iNai3vye7pmO&X-Amz-Signature=40d0e52288f8063be6805ab03ecc743e1fe34dc3e876c063926dff690fcf28f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
