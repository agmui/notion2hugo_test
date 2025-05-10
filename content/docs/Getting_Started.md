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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRG5ZNTW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIARG6lCmZc3YOvkEusayO7CIyywTq0qMi%2B2ZXRYG7Kx%2FAiEAjdbnDOaorfp7QYqszxfCF2A3DdnsGvqNNfmyQi3mBX4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr%2FKhKHdr3yFYn%2FDircA9WF%2Fb5iYTNbE9CBc%2BxAn3EEwo%2FbnrT2WRkUgpabjuBKaBnthlfS53ME3hdTAj9iO3ISm7WsgJ8N9fbFkJp1J%2BmdcogtMYyD5o3l0NpK397%2BRIvvQ%2FtyNY5PwZ8bd4g8HWbcgJ8JzLh8FFa090DkFjV999eNN49EaDYKC7crRQ3GznlnhNjwoVY%2BDD5sktIrYhuxCqk98Wms9EE69iqnKM9dFs%2Bt5pwmPJVZOosMV4P0hb5Us9DQVxbIJAArkyHe5LVXmt8A%2FYZFu8H2bjqUrQzakdC9OkjBpT%2FI%2B18%2B0dhNvPxkdWprfSEMdd%2Fqmm0y1pz5TcvXClr8V3%2BbftuH4hAe%2F0NXx9%2Bq3i7kZhY%2FShCtLAocvAEJ%2FiohIMBst0gO5OQjITwtS2e5xgXKarCBO2QhfoDpJRnk0PngPoySqqjIsGree%2BOqjh1%2F%2BFGF9KO5A0kCb2C3TJJY5BXhlogrMArzCxbB%2BGxK%2FSTCrKzqY1ids%2B3Rtd1j5fTBHuExGODh5fJRJBMvIEOqFDGqU3s%2BZHLctBvRvEMe7V1p7lNINPHaewhCZ2k1DbzyIb4O43NatiyVOEGo%2FuV2RjHaN8QlAlHYQKRO9ktMA8ySyBbgAf8iTK%2FEZppKdcCvGoJ2MLyg%2FsAGOqUBc%2BjMKJkIU50GgEElkrrlQV2w%2BLHmVAWuzpmK4SfYJkRfXq0jH%2FmtyerodmRau7F%2FV9iIYYX8Htqpbjor%2F%2FSfUp5ubMOApEaNY%2BxZwdnqTfmH2S5fg7YWBKWO0eHSfW6vXS%2B1Nrz1oy4bfMFy5p5yv1U3jI4VDNChWiUlozodgZmDCKBrBVv4GYu6z7acGvoMaj%2FZwcCRr8xWVjLJkXeBL4luOHMy&X-Amz-Signature=25f69c181095a1b2dc9d313b255ee8332f1d35a551342caf08886cb1391bf4c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRG5ZNTW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIARG6lCmZc3YOvkEusayO7CIyywTq0qMi%2B2ZXRYG7Kx%2FAiEAjdbnDOaorfp7QYqszxfCF2A3DdnsGvqNNfmyQi3mBX4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr%2FKhKHdr3yFYn%2FDircA9WF%2Fb5iYTNbE9CBc%2BxAn3EEwo%2FbnrT2WRkUgpabjuBKaBnthlfS53ME3hdTAj9iO3ISm7WsgJ8N9fbFkJp1J%2BmdcogtMYyD5o3l0NpK397%2BRIvvQ%2FtyNY5PwZ8bd4g8HWbcgJ8JzLh8FFa090DkFjV999eNN49EaDYKC7crRQ3GznlnhNjwoVY%2BDD5sktIrYhuxCqk98Wms9EE69iqnKM9dFs%2Bt5pwmPJVZOosMV4P0hb5Us9DQVxbIJAArkyHe5LVXmt8A%2FYZFu8H2bjqUrQzakdC9OkjBpT%2FI%2B18%2B0dhNvPxkdWprfSEMdd%2Fqmm0y1pz5TcvXClr8V3%2BbftuH4hAe%2F0NXx9%2Bq3i7kZhY%2FShCtLAocvAEJ%2FiohIMBst0gO5OQjITwtS2e5xgXKarCBO2QhfoDpJRnk0PngPoySqqjIsGree%2BOqjh1%2F%2BFGF9KO5A0kCb2C3TJJY5BXhlogrMArzCxbB%2BGxK%2FSTCrKzqY1ids%2B3Rtd1j5fTBHuExGODh5fJRJBMvIEOqFDGqU3s%2BZHLctBvRvEMe7V1p7lNINPHaewhCZ2k1DbzyIb4O43NatiyVOEGo%2FuV2RjHaN8QlAlHYQKRO9ktMA8ySyBbgAf8iTK%2FEZppKdcCvGoJ2MLyg%2FsAGOqUBc%2BjMKJkIU50GgEElkrrlQV2w%2BLHmVAWuzpmK4SfYJkRfXq0jH%2FmtyerodmRau7F%2FV9iIYYX8Htqpbjor%2F%2FSfUp5ubMOApEaNY%2BxZwdnqTfmH2S5fg7YWBKWO0eHSfW6vXS%2B1Nrz1oy4bfMFy5p5yv1U3jI4VDNChWiUlozodgZmDCKBrBVv4GYu6z7acGvoMaj%2FZwcCRr8xWVjLJkXeBL4luOHMy&X-Amz-Signature=029126966e293ce22c2a58b063aa9dbf766bc328174aced2763754ab9d74b199&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRG5ZNTW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIARG6lCmZc3YOvkEusayO7CIyywTq0qMi%2B2ZXRYG7Kx%2FAiEAjdbnDOaorfp7QYqszxfCF2A3DdnsGvqNNfmyQi3mBX4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr%2FKhKHdr3yFYn%2FDircA9WF%2Fb5iYTNbE9CBc%2BxAn3EEwo%2FbnrT2WRkUgpabjuBKaBnthlfS53ME3hdTAj9iO3ISm7WsgJ8N9fbFkJp1J%2BmdcogtMYyD5o3l0NpK397%2BRIvvQ%2FtyNY5PwZ8bd4g8HWbcgJ8JzLh8FFa090DkFjV999eNN49EaDYKC7crRQ3GznlnhNjwoVY%2BDD5sktIrYhuxCqk98Wms9EE69iqnKM9dFs%2Bt5pwmPJVZOosMV4P0hb5Us9DQVxbIJAArkyHe5LVXmt8A%2FYZFu8H2bjqUrQzakdC9OkjBpT%2FI%2B18%2B0dhNvPxkdWprfSEMdd%2Fqmm0y1pz5TcvXClr8V3%2BbftuH4hAe%2F0NXx9%2Bq3i7kZhY%2FShCtLAocvAEJ%2FiohIMBst0gO5OQjITwtS2e5xgXKarCBO2QhfoDpJRnk0PngPoySqqjIsGree%2BOqjh1%2F%2BFGF9KO5A0kCb2C3TJJY5BXhlogrMArzCxbB%2BGxK%2FSTCrKzqY1ids%2B3Rtd1j5fTBHuExGODh5fJRJBMvIEOqFDGqU3s%2BZHLctBvRvEMe7V1p7lNINPHaewhCZ2k1DbzyIb4O43NatiyVOEGo%2FuV2RjHaN8QlAlHYQKRO9ktMA8ySyBbgAf8iTK%2FEZppKdcCvGoJ2MLyg%2FsAGOqUBc%2BjMKJkIU50GgEElkrrlQV2w%2BLHmVAWuzpmK4SfYJkRfXq0jH%2FmtyerodmRau7F%2FV9iIYYX8Htqpbjor%2F%2FSfUp5ubMOApEaNY%2BxZwdnqTfmH2S5fg7YWBKWO0eHSfW6vXS%2B1Nrz1oy4bfMFy5p5yv1U3jI4VDNChWiUlozodgZmDCKBrBVv4GYu6z7acGvoMaj%2FZwcCRr8xWVjLJkXeBL4luOHMy&X-Amz-Signature=3547ef7ce4df3f6adfff044f781182831832c64973b76fc6ff1470014147a8a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVBYMPC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCKUVO69WFs8jRUNYENb4AwH3WIfkCksLRRFxsENbu9qgIgFI0aHKkevBbacPMgrj4yC7qyW4ihidCWOxIQF9VaZwoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3CkhH%2B7iXq7HTRVSrcA8phlgOVjNApV02GLzxMauhKk4VWZbFq07S8EnKMuIFvId%2BZhBdvAyBGUkQfukNO3LyTk0VYZVdg9nQmkCOYh5QmK8B1wEUCNpmzuYi9FeqSQwYWE%2BQ7j%2FlbvxOOwViMf6dfuBJk3g6iLIbNbUrZp6RoDBpuzcrsGPBBCaZ2oWD6170YSBXW1PX2JZzyYmev%2BCnFIlluwmDctRLf9mzITIWtbmdMiwRPVBtXWRxRrp1JjQZBmgsaLgByPrF%2BUVSA4p8eDLiwWhnp%2FMd6PBkYpYjsex6BMRg9wF%2B9ksY6xt3PjfPpBxFC6BcfsbXeGeYTVy85Ch4kGvN04QfwoLE8dBBTksnTWt7yHe7s5%2FMtUXxn%2FXNf1b2yfuZrgjSD9suiaglKReaVVEwC8HspSlhk1KcBOfOm5TPnbNBKEauI4ygTU%2FVG%2FLvX163JWA343VNzaCZLVrj5KGAL5IkUZjNdGw7IxLuxaksAuiYywkPPwa7cK%2B8OsfPYZDuWFaKaETdni4W2nvLPMeWjTyyvdh4jQIXffNtbGfirWRsUDUJGVIWVWFxDdYN5pCiVl4M3G3SeL4029mQhA1NbdpdUDjtIBPORUU6XQelHpkXRkDilcImxV288sRCDtwbaLQgjMLig%2FsAGOqUBqerOMXnw6Yu6NBx%2B6VmR4B5fmYY3KO83oh%2FN%2BBxRIgdhQqdwZldGTyOZIj72oFJekEoFNRFD1xJx6xBUhNvAbZxssqXlKanAja2ShEKMvdsWnJoJW4Qyd5fyILXggUqqYmXTg8ai350TLx4Htnssa1BgrqRhDDxRpKyaAYq34vYTKFkh1h%2FUMchJB7sf5NiMmO71akNul2Cs%2BKfY0KBLj3sxtfWM&X-Amz-Signature=cd8cf74b3ed29879cc33c8c6d98a292265c00b3bdce2e8d2ad16b1c262558014&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKTQPG6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAvZTcS%2FmCS1yoCs0%2FtvCtj7bnUqIZcwz6MNX6SYw8L8AiBRC4ahtzg%2BLNkJXUeartdyeLcVQ4zOwvarlb%2F4BGbm%2BCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2FsdRGi3G%2FJNo%2FNUKtwDYP7HO%2F560HH5HbmW%2FtjaTLRW2QcfJJffV3GpZS3dL01ZFF3k3Q6dyFljp0OHSsG%2BF6H0EILQSvPh5VBYIhbk0hukTHp5z3tlHoYCZzut9likOV%2Be2Ax5hmzmCL72p3xC9Tt%2FdR4sAqUQIL4kaeulx6YOBBu5Yc6SFoF9qyf6%2BAA6ZequBz9CwIll0c%2FkwBCscagMmlve5XUj%2FDSgzrirKJjyXEzCZuNIxSp22vMH6bZDY%2FvsMnPHlqoO1bJnUqcELWWENkCTbY32w90THkZk2n7ptdRoCWinaMyG43yCcVUYNl9eh6II7mnT0lEph3VpQB9rgPXAeLqo0R7Zp5qLXKsOsDTU%2FymkqUmtX63laQ%2FSxUURnCGhs0NLXvWjPw4KXv4mkd%2BXKizniTnNeaetTdh8e4L8OI10jdKYWbSPJ2HjLJzOpwq32qpYOKxwY6I28E8%2Fybz3fHo9bdvMnHiRHZ4sEs0gtOGTO3KggJdTewWHExCR93UFQ9%2Femr1vqXjNi3sRzR3qjEXEBAfwsVQjbkbkXY9%2BHmikph1cHFemSZKwp7XFlZ9itovWwMMoUQV1oQVKfUfyucivpZ82PvCTt%2BL5N7qUwJXefM8ciVOipQEGZJYLLyyp9NLLPyAw0KD%2BwAY6pgHFJDcMymWupD%2BzE%2BlB6HdfHbYEVZz%2BltmeuMYPDxzG3grGNGFuNexlQ3k8BcH5Mr3rq%2BEEXCgJFoHawL4HtHtfiUtkSnmouL1vxyCNDI7rfqQrO7FgVu2CgfNC%2F96s6zUqyKl3Z0fwhXlsGjfJD4AFJPRmBA09WESqjFpCb%2B2nhki3GKvjH9F%2Bn%2FnJ%2BA%2B2ImaUQcHm9C50eBBEcFwedDMDMXN%2Bamw0&X-Amz-Signature=b1c36d353a3e40c4647ecabc252dd1ee3f60619cf1fa8f8748bf9c026989116e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRG5ZNTW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIARG6lCmZc3YOvkEusayO7CIyywTq0qMi%2B2ZXRYG7Kx%2FAiEAjdbnDOaorfp7QYqszxfCF2A3DdnsGvqNNfmyQi3mBX4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr%2FKhKHdr3yFYn%2FDircA9WF%2Fb5iYTNbE9CBc%2BxAn3EEwo%2FbnrT2WRkUgpabjuBKaBnthlfS53ME3hdTAj9iO3ISm7WsgJ8N9fbFkJp1J%2BmdcogtMYyD5o3l0NpK397%2BRIvvQ%2FtyNY5PwZ8bd4g8HWbcgJ8JzLh8FFa090DkFjV999eNN49EaDYKC7crRQ3GznlnhNjwoVY%2BDD5sktIrYhuxCqk98Wms9EE69iqnKM9dFs%2Bt5pwmPJVZOosMV4P0hb5Us9DQVxbIJAArkyHe5LVXmt8A%2FYZFu8H2bjqUrQzakdC9OkjBpT%2FI%2B18%2B0dhNvPxkdWprfSEMdd%2Fqmm0y1pz5TcvXClr8V3%2BbftuH4hAe%2F0NXx9%2Bq3i7kZhY%2FShCtLAocvAEJ%2FiohIMBst0gO5OQjITwtS2e5xgXKarCBO2QhfoDpJRnk0PngPoySqqjIsGree%2BOqjh1%2F%2BFGF9KO5A0kCb2C3TJJY5BXhlogrMArzCxbB%2BGxK%2FSTCrKzqY1ids%2B3Rtd1j5fTBHuExGODh5fJRJBMvIEOqFDGqU3s%2BZHLctBvRvEMe7V1p7lNINPHaewhCZ2k1DbzyIb4O43NatiyVOEGo%2FuV2RjHaN8QlAlHYQKRO9ktMA8ySyBbgAf8iTK%2FEZppKdcCvGoJ2MLyg%2FsAGOqUBc%2BjMKJkIU50GgEElkrrlQV2w%2BLHmVAWuzpmK4SfYJkRfXq0jH%2FmtyerodmRau7F%2FV9iIYYX8Htqpbjor%2F%2FSfUp5ubMOApEaNY%2BxZwdnqTfmH2S5fg7YWBKWO0eHSfW6vXS%2B1Nrz1oy4bfMFy5p5yv1U3jI4VDNChWiUlozodgZmDCKBrBVv4GYu6z7acGvoMaj%2FZwcCRr8xWVjLJkXeBL4luOHMy&X-Amz-Signature=7ba0540becdb31a9d5aa6663aea5901baabff1a78c99d2eb87ba72b305b21b45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
