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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDI3UY7P%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD1KEcxECnT8e5Lx1GDhpY1PMipv2OjeZkFpA2UJicxRgIhAOhoNmp1y0xjyYWHy%2Fq2shvbCQ0%2BvYqECam1xyyRDy%2FsKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymjY5dVH1DlVUKOCoq3ANjmi%2FT9QsrCemwg%2B3nkhVu2jDsvhZnUino3jFJ9wU3D71d8T%2FyNMIITEw6ChbtrbO6GV%2B9ReDWiBE0FXwwgTGcJQVkPuLVO0iOJrULJzMBIADy5pzHno0hyx2AjRHcLz%2Bo%2BOUsMwDOr1xd4W7TeM5L5vGodbwG7LDqMnnJFkkg6mjPMtMyFug7BJAY9jkfm5wgkTEuc%2B76iTxqMqLHSDEsqCr5Yg2bDXXBnrrpOUo7Kg8a2LA6ELObP%2FTXwMCk8gpkn3aFXDtnOXQkkWVvjk0DZOJz8UR%2BSDOcTLFfmYFYQUsnqJjJHGdNSkTPNdTPjnEOJpXewhSIp6EcSo2O2pJyp6Zuvz5iz48GocMXxwYMt5cLgB6VuIe%2FQwOy0A1hpD72fKsQ9DJ5atSYH5T8%2BWPJ019jgLhIpbYlkABOjo0pVoitKYhfmskK09URG8unbw%2FysE%2F9691dN3j6czDgUq%2B%2Bea7WprwlOVREDa5GBnmAvrUGHVGIwEuFwjlgeH3wtDZ2T5w9sRpnmahGIBQrEXdjwqWU5NCsn7t71eyL7aqt%2FHg5ojH%2FI%2FVRBp%2BSsxP7UVX2Zt5Dhh52f3BLq3v%2BIJIZPAtFKu2cGSb9eFeRvEI3BrTyYvzTYojFrY8EzTCG88HBBjqkAd1fChngXrMdcJzohitd91IWxK9jLRpPb%2FqTQ8%2FcNNGHMkjvQwebjKwFqKBPN%2FaRCN8H7NNqkqOIpsylNzQzcbvy%2FGMfhUqGl6npWXBGPA5XR8WOcdgJTh5zzcIFcBn5Sb0ZwZ5CjY3IgjXC6ky3zJjb0snLZFXGP7hnCOobc7%2B%2BUQCH4AanNb3frXnT0%2B%2BN8DHxglZ%2FHsaax%2FcnMPqLjFSPNLll&X-Amz-Signature=5b7d95159290ad0b3066defbc3cf3414b49d86a2611c00f3683fe03f31f0721f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDI3UY7P%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD1KEcxECnT8e5Lx1GDhpY1PMipv2OjeZkFpA2UJicxRgIhAOhoNmp1y0xjyYWHy%2Fq2shvbCQ0%2BvYqECam1xyyRDy%2FsKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymjY5dVH1DlVUKOCoq3ANjmi%2FT9QsrCemwg%2B3nkhVu2jDsvhZnUino3jFJ9wU3D71d8T%2FyNMIITEw6ChbtrbO6GV%2B9ReDWiBE0FXwwgTGcJQVkPuLVO0iOJrULJzMBIADy5pzHno0hyx2AjRHcLz%2Bo%2BOUsMwDOr1xd4W7TeM5L5vGodbwG7LDqMnnJFkkg6mjPMtMyFug7BJAY9jkfm5wgkTEuc%2B76iTxqMqLHSDEsqCr5Yg2bDXXBnrrpOUo7Kg8a2LA6ELObP%2FTXwMCk8gpkn3aFXDtnOXQkkWVvjk0DZOJz8UR%2BSDOcTLFfmYFYQUsnqJjJHGdNSkTPNdTPjnEOJpXewhSIp6EcSo2O2pJyp6Zuvz5iz48GocMXxwYMt5cLgB6VuIe%2FQwOy0A1hpD72fKsQ9DJ5atSYH5T8%2BWPJ019jgLhIpbYlkABOjo0pVoitKYhfmskK09URG8unbw%2FysE%2F9691dN3j6czDgUq%2B%2Bea7WprwlOVREDa5GBnmAvrUGHVGIwEuFwjlgeH3wtDZ2T5w9sRpnmahGIBQrEXdjwqWU5NCsn7t71eyL7aqt%2FHg5ojH%2FI%2FVRBp%2BSsxP7UVX2Zt5Dhh52f3BLq3v%2BIJIZPAtFKu2cGSb9eFeRvEI3BrTyYvzTYojFrY8EzTCG88HBBjqkAd1fChngXrMdcJzohitd91IWxK9jLRpPb%2FqTQ8%2FcNNGHMkjvQwebjKwFqKBPN%2FaRCN8H7NNqkqOIpsylNzQzcbvy%2FGMfhUqGl6npWXBGPA5XR8WOcdgJTh5zzcIFcBn5Sb0ZwZ5CjY3IgjXC6ky3zJjb0snLZFXGP7hnCOobc7%2B%2BUQCH4AanNb3frXnT0%2B%2BN8DHxglZ%2FHsaax%2FcnMPqLjFSPNLll&X-Amz-Signature=b0c57aa160feed2c3119d63494ea242851d5740b074ea9b05f07283931b73742&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDI3UY7P%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD1KEcxECnT8e5Lx1GDhpY1PMipv2OjeZkFpA2UJicxRgIhAOhoNmp1y0xjyYWHy%2Fq2shvbCQ0%2BvYqECam1xyyRDy%2FsKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymjY5dVH1DlVUKOCoq3ANjmi%2FT9QsrCemwg%2B3nkhVu2jDsvhZnUino3jFJ9wU3D71d8T%2FyNMIITEw6ChbtrbO6GV%2B9ReDWiBE0FXwwgTGcJQVkPuLVO0iOJrULJzMBIADy5pzHno0hyx2AjRHcLz%2Bo%2BOUsMwDOr1xd4W7TeM5L5vGodbwG7LDqMnnJFkkg6mjPMtMyFug7BJAY9jkfm5wgkTEuc%2B76iTxqMqLHSDEsqCr5Yg2bDXXBnrrpOUo7Kg8a2LA6ELObP%2FTXwMCk8gpkn3aFXDtnOXQkkWVvjk0DZOJz8UR%2BSDOcTLFfmYFYQUsnqJjJHGdNSkTPNdTPjnEOJpXewhSIp6EcSo2O2pJyp6Zuvz5iz48GocMXxwYMt5cLgB6VuIe%2FQwOy0A1hpD72fKsQ9DJ5atSYH5T8%2BWPJ019jgLhIpbYlkABOjo0pVoitKYhfmskK09URG8unbw%2FysE%2F9691dN3j6czDgUq%2B%2Bea7WprwlOVREDa5GBnmAvrUGHVGIwEuFwjlgeH3wtDZ2T5w9sRpnmahGIBQrEXdjwqWU5NCsn7t71eyL7aqt%2FHg5ojH%2FI%2FVRBp%2BSsxP7UVX2Zt5Dhh52f3BLq3v%2BIJIZPAtFKu2cGSb9eFeRvEI3BrTyYvzTYojFrY8EzTCG88HBBjqkAd1fChngXrMdcJzohitd91IWxK9jLRpPb%2FqTQ8%2FcNNGHMkjvQwebjKwFqKBPN%2FaRCN8H7NNqkqOIpsylNzQzcbvy%2FGMfhUqGl6npWXBGPA5XR8WOcdgJTh5zzcIFcBn5Sb0ZwZ5CjY3IgjXC6ky3zJjb0snLZFXGP7hnCOobc7%2B%2BUQCH4AanNb3frXnT0%2B%2BN8DHxglZ%2FHsaax%2FcnMPqLjFSPNLll&X-Amz-Signature=a837131066c81780840788467a81328420a3e09c495c629e8deedceaea326699&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGYSZF4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHcEflpA2rpmed3yZ5ZlxIzRonhBuxdYoDnhAfSrarE9AiEAxUteS1%2BaMrbShYUXley3NNUz%2FDUkDMmBp5hQ14lrvqMqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWsyxAJ37vn5Vp3%2BSrcA8bA%2FNqOBR%2F9k%2Fime6ur4Gv6UggwLJGCRsdaUCOcZE8xnNqJYNuMarsMPnV8H0S%2B4bB5VSwIgjUY%2Bsad1Z64z1GnHVhthvCQHTxGUlIin9LwktBXDHP8EGgfDcUB4yRyDK4yeePwHpVQmYwTkNF%2Fk2HFM9GTqh691y8294HXvR1lac1%2B5rPLaPotP77PhipNjKCjAroH39I00pP2INAwCPjwIXaIkIDOgEzyG8Lw4ffe9ra49UkcsUiMyE%2Fgp0QGUzP4NYPn4owhcoSm1EAVV0AywrPie1cME8iI6vGZFg5SzIFW1xsgTSWOASXq6gzur44QNPkr8VS%2Bot%2F3sTKL997%2FRg3Q5NFTmY2OTWWLSFZs1ByqK4SZcvS5lgINOiKqmlhxENSq3EZDu%2FG7g3eRkWzCJBNMFzt5QZQ4vf26YZ4H5AOiEJAprGTxbtebi9mLyYWtzY%2BQ48fney6zMaTPgY42qBX%2BfED9Z4FZZk66Bc91v%2BkwRXCQwT8VRPSGsuV8Nt0DchYqmos4NB0%2BWPfgbFDanT%2F3mSe7nVkjdaBNn5FgQMUEjezszkbHgazR%2BvFypRvg%2B1yprhzuEyDYpMl17aUV%2FiB%2BhUcKJFivVpbeD0hteGvjwQa9reuv0nAyMMrxwcEGOqUBR16wAwExaHQwuJhgc2bvBMFYCIcK3Ij2tV8L8dT9Q6cO8h4l7kM79ziLzMUrh8HVcYFQbpEar5fQQnZ4gqPU1KFk3RQJfg3Hfzd1XwmdLSA5N8eM7tISa83glhDe9IpoPqmE4ygjbF%2Bd7iBCV4Dt%2BN2Zo2s26GlfbgTv4%2FmbiG%2Bu8lLzFYh4Bmw95YBmIzeY8m5UCWJLJ0PO8RPc%2Bym1j7QamPLD&X-Amz-Signature=0ca991078d46c0c7d18faca9bf3d9116d05c8550a81d3060c2b44170710dadc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UO6UGJB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHxNuAFpw%2BaStjxhkG8MU%2BJRndlVDlVEvIcUNCTxU%2BqFAiB7yA8N15mFgEsUE4xLpwPN7%2Fu0XIB2Er19HFXCuhMKAyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42IrPz5b%2BQD%2FWq7yKtwDnsoXkIJCCqCG6msib1cxLMCxU1NXi66l3GoW%2F4YuDfi3TaUbreCATopGCSoIUZ15KRIec3c6gR2Y9n3pcGmk4nM1I%2Bsid4NF7uRglb6JnhFpuIhb%2B0SKA498wsl4QFGdM8YCREsslnA8cfk%2B5l7g5M7E%2FmedBaNAhfN3WYSL1BMestqEsNZvLyrKCtaFJBD4GkU%2FWM9SKxQ8Boj2FTEgB8yR%2FwP8K45TR%2FNLESsFgZY9%2F5%2BKB3wZiMW83hOCWU%2FcvQ3BqkkuZcW2jCTIkn6qKAv5KQnIvMTJRCrVBkVABsLzWJCyEGVxwhwTcSeAg0qxriUNWiFuJyF1eJR9Tboa7rHkryo3MQEuPMxGvrxZCoAP6BgYd2Qg7v2UTFq4r7RdEQDTLJ4NaexarKoyunlXvaW%2BbT7HkMn1I%2FttO3KZUlnSLihL31YmiBX9sfgfBk%2BePuqpNNh0%2BJo3bm3kGQE8FAE0iGHPFwUU4bgFSHWMcBSHtV7JTmLlW7GJTwCm1e7p0vUdtDqI%2BR29zTcDhCWtXy3MeTAfPsFtm%2BlHxfgNrCoslYCiP%2BXfkQU%2BanOQjj%2FvjDFIr9ekBCmcUQqh2NGr%2BlAR4ZGScExF3BgHxBRP4Ul42oxxZgW34i7AINcw3PLBwQY6pgGAg1AbrHeK72fT8OOsUbUuHljlzk%2FRn7gRIMKllZ%2B99J0im34YwJoQe%2BVzRFjnXDAQVDEKrxloTci7nlnLglalzcND8FfY0smvy5qr1wD%2FW1jzu6qpF7DSIkodja%2Fq8k5XeIo9O7p9HtwA7YjP%2FKTfXc5Wmghz%2BZUNTEzdd06Gu1%2BK9xUrN%2BUOLmNZzXENI1np33tlKKwGIzgbzIXtOkG9SsEVc4Bq&X-Amz-Signature=c611bdd985fe733469ada834185d058e5743fd78095d2050aa4fae6d97bed07d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDI3UY7P%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD1KEcxECnT8e5Lx1GDhpY1PMipv2OjeZkFpA2UJicxRgIhAOhoNmp1y0xjyYWHy%2Fq2shvbCQ0%2BvYqECam1xyyRDy%2FsKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymjY5dVH1DlVUKOCoq3ANjmi%2FT9QsrCemwg%2B3nkhVu2jDsvhZnUino3jFJ9wU3D71d8T%2FyNMIITEw6ChbtrbO6GV%2B9ReDWiBE0FXwwgTGcJQVkPuLVO0iOJrULJzMBIADy5pzHno0hyx2AjRHcLz%2Bo%2BOUsMwDOr1xd4W7TeM5L5vGodbwG7LDqMnnJFkkg6mjPMtMyFug7BJAY9jkfm5wgkTEuc%2B76iTxqMqLHSDEsqCr5Yg2bDXXBnrrpOUo7Kg8a2LA6ELObP%2FTXwMCk8gpkn3aFXDtnOXQkkWVvjk0DZOJz8UR%2BSDOcTLFfmYFYQUsnqJjJHGdNSkTPNdTPjnEOJpXewhSIp6EcSo2O2pJyp6Zuvz5iz48GocMXxwYMt5cLgB6VuIe%2FQwOy0A1hpD72fKsQ9DJ5atSYH5T8%2BWPJ019jgLhIpbYlkABOjo0pVoitKYhfmskK09URG8unbw%2FysE%2F9691dN3j6czDgUq%2B%2Bea7WprwlOVREDa5GBnmAvrUGHVGIwEuFwjlgeH3wtDZ2T5w9sRpnmahGIBQrEXdjwqWU5NCsn7t71eyL7aqt%2FHg5ojH%2FI%2FVRBp%2BSsxP7UVX2Zt5Dhh52f3BLq3v%2BIJIZPAtFKu2cGSb9eFeRvEI3BrTyYvzTYojFrY8EzTCG88HBBjqkAd1fChngXrMdcJzohitd91IWxK9jLRpPb%2FqTQ8%2FcNNGHMkjvQwebjKwFqKBPN%2FaRCN8H7NNqkqOIpsylNzQzcbvy%2FGMfhUqGl6npWXBGPA5XR8WOcdgJTh5zzcIFcBn5Sb0ZwZ5CjY3IgjXC6ky3zJjb0snLZFXGP7hnCOobc7%2B%2BUQCH4AanNb3frXnT0%2B%2BN8DHxglZ%2FHsaax%2FcnMPqLjFSPNLll&X-Amz-Signature=bd9f730cdfa280ecee0344980cfe126672040c478294ffa6ce051653838e2c01&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
