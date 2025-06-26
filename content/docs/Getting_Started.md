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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKHONO5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIErDApGNtIqZc0hu3xmmUujvlL1hC2z73QcehYVWtuU1AiEAmgxeEzDSZBIKQnvWrEboxCkIg9aVBTKmB61v4OIClMYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOsAGI2Wb7ILBBsHJyrcAzZDjBJxvorPXpa93CvX9bl17hcGO0TZub8u8ZVInRcuU536ACPGDttru8lrY5F8yvhLhm9hIPdNG3gzZC1cb2tNyw%2F8IeEVjgvns2Kkxu7iaanTu3kkLyXOBa8EEIf%2F65loYM7w%2F9w%2Fdh0NCkOfvXQV%2FB%2BvpMcYzB0zPH6xtyWrNYCX%2BYKx5QHlDE2rCDXMoIDa%2FdCyfFsxR%2FeURVs%2BeIAsGVV9KrjHVCm6nfEzgn13yKb2x%2Fdf7Z%2BuVX3v7072igQz5DgHWQjDwvt4ID0g1IYIu66rmGY9BKQJgCACbkdQuFuHUCMugCHCQ87WZYXFltX%2BWMT3wkdtsiKJAtAklO3Bd%2ByIxlinezOG6NV1n8tBXmXjIreIsQc%2FQ9xNBH3J32gqnmh7FXwgt0fZZJAWuI9plMHQAKvfQfdGiq2q5Cr33LvLncdCzvnln5Qh9sezIQc9D8B0v17sohafFUEJ5e1CxoLYyABlJ0TRHOCvmB11HxNT4kAWU7YHXDenjJ5fxdd0RXMZXjc6X1FHYIFDAdwhteMzM9R8WQhgaRaJI2zWXyIaF%2Fxe6bdN1Giuc3KMoHlXkBvucIvSEETwUTENJHlWK0fU%2BTZ2Ouh659qVgW44dIvVcMSefSp5p83bMN2x88IGOqUBdZt%2FIvejNONm7DTxdeh9u%2BxyLov7B2dev4L2lmI9lETT%2BKvKeQZT2qkoQtQiTglDOf%2BCJ%2BeuUKqlcEtiIxrUFHvZWn57MChFlUpuv0yP8m70P0j9qv32sAZnLs4zTC%2FKKmYO11uWkjdgiQ95X7qfHeKBKTCAcaaqGbdmwXr0oIOYoLnT5kJrJAYI%2BNvthC%2FRkmcuAXotkNFsxwJdY%2BgiwAwvgE4d&X-Amz-Signature=7effd513fc54aaf38d6e04363500d3690270285f8d23c7fbf922caa3ec17b121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKHONO5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIErDApGNtIqZc0hu3xmmUujvlL1hC2z73QcehYVWtuU1AiEAmgxeEzDSZBIKQnvWrEboxCkIg9aVBTKmB61v4OIClMYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOsAGI2Wb7ILBBsHJyrcAzZDjBJxvorPXpa93CvX9bl17hcGO0TZub8u8ZVInRcuU536ACPGDttru8lrY5F8yvhLhm9hIPdNG3gzZC1cb2tNyw%2F8IeEVjgvns2Kkxu7iaanTu3kkLyXOBa8EEIf%2F65loYM7w%2F9w%2Fdh0NCkOfvXQV%2FB%2BvpMcYzB0zPH6xtyWrNYCX%2BYKx5QHlDE2rCDXMoIDa%2FdCyfFsxR%2FeURVs%2BeIAsGVV9KrjHVCm6nfEzgn13yKb2x%2Fdf7Z%2BuVX3v7072igQz5DgHWQjDwvt4ID0g1IYIu66rmGY9BKQJgCACbkdQuFuHUCMugCHCQ87WZYXFltX%2BWMT3wkdtsiKJAtAklO3Bd%2ByIxlinezOG6NV1n8tBXmXjIreIsQc%2FQ9xNBH3J32gqnmh7FXwgt0fZZJAWuI9plMHQAKvfQfdGiq2q5Cr33LvLncdCzvnln5Qh9sezIQc9D8B0v17sohafFUEJ5e1CxoLYyABlJ0TRHOCvmB11HxNT4kAWU7YHXDenjJ5fxdd0RXMZXjc6X1FHYIFDAdwhteMzM9R8WQhgaRaJI2zWXyIaF%2Fxe6bdN1Giuc3KMoHlXkBvucIvSEETwUTENJHlWK0fU%2BTZ2Ouh659qVgW44dIvVcMSefSp5p83bMN2x88IGOqUBdZt%2FIvejNONm7DTxdeh9u%2BxyLov7B2dev4L2lmI9lETT%2BKvKeQZT2qkoQtQiTglDOf%2BCJ%2BeuUKqlcEtiIxrUFHvZWn57MChFlUpuv0yP8m70P0j9qv32sAZnLs4zTC%2FKKmYO11uWkjdgiQ95X7qfHeKBKTCAcaaqGbdmwXr0oIOYoLnT5kJrJAYI%2BNvthC%2FRkmcuAXotkNFsxwJdY%2BgiwAwvgE4d&X-Amz-Signature=f60c1c65b81374968d83ceb2c393ff8a273d5569e18d24e6ce618be0efed3d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKHONO5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIErDApGNtIqZc0hu3xmmUujvlL1hC2z73QcehYVWtuU1AiEAmgxeEzDSZBIKQnvWrEboxCkIg9aVBTKmB61v4OIClMYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOsAGI2Wb7ILBBsHJyrcAzZDjBJxvorPXpa93CvX9bl17hcGO0TZub8u8ZVInRcuU536ACPGDttru8lrY5F8yvhLhm9hIPdNG3gzZC1cb2tNyw%2F8IeEVjgvns2Kkxu7iaanTu3kkLyXOBa8EEIf%2F65loYM7w%2F9w%2Fdh0NCkOfvXQV%2FB%2BvpMcYzB0zPH6xtyWrNYCX%2BYKx5QHlDE2rCDXMoIDa%2FdCyfFsxR%2FeURVs%2BeIAsGVV9KrjHVCm6nfEzgn13yKb2x%2Fdf7Z%2BuVX3v7072igQz5DgHWQjDwvt4ID0g1IYIu66rmGY9BKQJgCACbkdQuFuHUCMugCHCQ87WZYXFltX%2BWMT3wkdtsiKJAtAklO3Bd%2ByIxlinezOG6NV1n8tBXmXjIreIsQc%2FQ9xNBH3J32gqnmh7FXwgt0fZZJAWuI9plMHQAKvfQfdGiq2q5Cr33LvLncdCzvnln5Qh9sezIQc9D8B0v17sohafFUEJ5e1CxoLYyABlJ0TRHOCvmB11HxNT4kAWU7YHXDenjJ5fxdd0RXMZXjc6X1FHYIFDAdwhteMzM9R8WQhgaRaJI2zWXyIaF%2Fxe6bdN1Giuc3KMoHlXkBvucIvSEETwUTENJHlWK0fU%2BTZ2Ouh659qVgW44dIvVcMSefSp5p83bMN2x88IGOqUBdZt%2FIvejNONm7DTxdeh9u%2BxyLov7B2dev4L2lmI9lETT%2BKvKeQZT2qkoQtQiTglDOf%2BCJ%2BeuUKqlcEtiIxrUFHvZWn57MChFlUpuv0yP8m70P0j9qv32sAZnLs4zTC%2FKKmYO11uWkjdgiQ95X7qfHeKBKTCAcaaqGbdmwXr0oIOYoLnT5kJrJAYI%2BNvthC%2FRkmcuAXotkNFsxwJdY%2BgiwAwvgE4d&X-Amz-Signature=d464a89d00dde24c1e6c5074979a6afdcaf70fd84414ac3a104a070bc6450314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEN3VC3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDM3DgJwJpJDjtVTN8R92vwWHsgVMzn61Rpdp8zVmd7EAiEA7uPRlD7NOtmDXTO3BbE7cnKZq4%2FmyHBrdV0KCbgIa9kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFeWU1ALWc3lF3ZmIyrcAwrspCW%2B9%2BRHNw9v3xQj3cEUyUt3Mr1S09tPuwFrNi1K0olK3%2BrPxGPQK22cL1UYY%2BUZF%2BV8SndGCcTITNNTdLSkzkZJZgSOMgFMnB3hpjRglQWTGUvxlfOG%2F%2FfxcwUonsmxfpYl1lvd6swyCB34H22bsQIpTULD3taN5zP5wcC%2BNA7mL47Sh1w6J3gIrKWUtBlLXxxE%2BxyiMBFp6Jy70g8%2FFbKbsXlcuXdCsv%2ByWnDNnoG5VAN%2FIfPfDZvCQojhG%2B1JiGc5QT5BK%2FUxqd%2FGJg8GLl3J6xCI0p3cexOpl%2FfLR%2B8cuLEBKaikE46XU4nlGtYkf4xzwv3uCUooi84MsPpVXdh2rRXYxQI690xDreb2kRbnKCmhED0%2Bb8vU8bU4uMwey0KJqmhMmpV1FacTlmiCdtj%2BlOD1%2FqWzzQEQ7ejoALnimpt9rtT6Fj4%2BYIfs6cF5Fk0oaPM6vvf44CYbCU73L%2FUv5mYBq4ZHqbQw2nf%2BbJ74kE4i2lmQvazx6L52FOF4l3zjCAk46topqgqtAw6peY%2FXkCIYXPYDwUKcP77TdItER6NZdCNSHgKOqie1b%2FNmCJWJVziURVEH1YZE%2FjrF48drxo2HYEs0H7Il4QT5hNW0I3Xw8D5Oyg9OMKWy88IGOqUBx2g90j7cl4Xv0sSHb6stApWfZNy5SWtmDGoMK4ygAafi7oTe0UKxsnDdqtzT51Mc4Keg2xaXW%2Bk6%2FvQKx%2BvdRapyq50FF9f6s1gWNFSPst0un9OYIBWkEiVWRJdWe0gF6y3w6sayUEdKF%2BR82LRJg%2FquhT8EWgZBqsjbwf9Pe5iktkBTYAfNjkMjvEH%2FM06vjbwiQLW7KB5embVu8kTRCkPeT65s&X-Amz-Signature=ffa035eed89db65f8a5a13564ffdbe8271fbac01a6d6f131a06a329b738a3a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMG2AZO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCMNA1QpsOXxZwwo6aUTXMb%2BjD%2FKUPbfluxIX%2BOovwiYgIgbbXrevRBONxEq9jVDOFBYyvCz16fv1QLYg%2FVo1cwKcoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDH%2BCvAxy4qbPsIfn2ircA06YqHbWqesF%2BM%2Bo4tVfbyuy4%2BevvbaM1AdtTZJTkrjRnqcycigyM%2B988kT12q8gGLH%2BPPaQWGJ1hqBfMpktcy13gMBge6gB%2F4ia7T2LrRDtBEz9juTcq0cmZ1mffGUyLSa6ES7522Nyfcubj3RewTDypF%2FYkEfBF98fNI%2FczPqh2Owim9CeiRvDF3EA6enaRfkf3B8mdMRxBf%2Fb%2FrD98%2ByncDyXR5zZe23p7l7Xq%2FgHcRg8SpoS3LnKCKiZukLTNhv0SiROdyBJFD%2BYd5%2FdFJcRHivDbNIQ5cn4IkRzlD4xmPJLsd5R1fekSX4upen570jmV6ILKcXIGy1FejsYsK5FpEahwyUA22EZQqGVT2JJOt8velUQS6zOY1Pkjo3ebJ8WxbyW560eXXZBrz3PEN77vSyLSuzwQ5trKzE%2B%2B9U5gv3NTpAq6CGXOhTAErFeaH5JXEdC6epSwS8O7OQV3TZkcKjGXcu1C%2FrTL6Y%2BKB8bbBIgbb3TxB%2FcSSo6KNDVDS4y%2Fj7wWj7bh5OSgzSuA%2BjN78arY812xGAoNgkUnJkXfAajlF%2FFCviPMPjFS3DNNRo2jhgdxVezTAyojrlLkkNixnzfhYudLMsa3rs%2FOEmSWkuzEuIOvU6fhJKPMO%2FA88IGOqUBLXjKcdffazlUY1H9FA7ZFDPIiQOFuBlZ6vDarM6JlTai%2Bs3ipouFS2W%2FktCGn%2B10UZXJ3%2FKiWmAHrhwui1jFsdLVqo4X%2Byu7UO432ghmyJ5LSuqYTGgppTzPX9AjrHt%2F6Xe2RkNVWeRpY5hEvWhxEesDCn3ve%2Bk2GjE4uFAHPAGX8zJVwoYH30kgvgOsxeXJZHRU7CxcwnwMufvTGihti7GKkXfK&X-Amz-Signature=6bc2908753ddccf3937eadde0a8d8d7bfbb4fa64f8e04bfef2d3e140dfcf30de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKHONO5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIErDApGNtIqZc0hu3xmmUujvlL1hC2z73QcehYVWtuU1AiEAmgxeEzDSZBIKQnvWrEboxCkIg9aVBTKmB61v4OIClMYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOsAGI2Wb7ILBBsHJyrcAzZDjBJxvorPXpa93CvX9bl17hcGO0TZub8u8ZVInRcuU536ACPGDttru8lrY5F8yvhLhm9hIPdNG3gzZC1cb2tNyw%2F8IeEVjgvns2Kkxu7iaanTu3kkLyXOBa8EEIf%2F65loYM7w%2F9w%2Fdh0NCkOfvXQV%2FB%2BvpMcYzB0zPH6xtyWrNYCX%2BYKx5QHlDE2rCDXMoIDa%2FdCyfFsxR%2FeURVs%2BeIAsGVV9KrjHVCm6nfEzgn13yKb2x%2Fdf7Z%2BuVX3v7072igQz5DgHWQjDwvt4ID0g1IYIu66rmGY9BKQJgCACbkdQuFuHUCMugCHCQ87WZYXFltX%2BWMT3wkdtsiKJAtAklO3Bd%2ByIxlinezOG6NV1n8tBXmXjIreIsQc%2FQ9xNBH3J32gqnmh7FXwgt0fZZJAWuI9plMHQAKvfQfdGiq2q5Cr33LvLncdCzvnln5Qh9sezIQc9D8B0v17sohafFUEJ5e1CxoLYyABlJ0TRHOCvmB11HxNT4kAWU7YHXDenjJ5fxdd0RXMZXjc6X1FHYIFDAdwhteMzM9R8WQhgaRaJI2zWXyIaF%2Fxe6bdN1Giuc3KMoHlXkBvucIvSEETwUTENJHlWK0fU%2BTZ2Ouh659qVgW44dIvVcMSefSp5p83bMN2x88IGOqUBdZt%2FIvejNONm7DTxdeh9u%2BxyLov7B2dev4L2lmI9lETT%2BKvKeQZT2qkoQtQiTglDOf%2BCJ%2BeuUKqlcEtiIxrUFHvZWn57MChFlUpuv0yP8m70P0j9qv32sAZnLs4zTC%2FKKmYO11uWkjdgiQ95X7qfHeKBKTCAcaaqGbdmwXr0oIOYoLnT5kJrJAYI%2BNvthC%2FRkmcuAXotkNFsxwJdY%2BgiwAwvgE4d&X-Amz-Signature=1898690d45e0884ce2550c3698326062d31a92607ea79e63b8502e2ad5a9c31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
