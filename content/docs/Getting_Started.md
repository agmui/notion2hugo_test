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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOP7ZXGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVA4ovrvg8P6dpPvjOmuLmJbWv667BTNA1jJSh2w9jvAiB0sblMc4sGu25qIuS%2BuM689bQ3rVmxBoyAJyJ%2BbISx5CqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgQRGfdHA1ed9GmdaKtwDmRGrPjufsFp9a8YgYo8JjMRWr41jLYBtbyy91A4UEqpqYh1AAghhK7YKzoRnJv7aZJ%2B2DNeuWzvOFctznxd7tg2bO2AGxDaDRMhszgwswq%2Bax9vhIBjXsia3CXuXItyU1BRcLmypmUNlNesb69Xsdyd%2BKmQUbio9OW61CSLLPiQfC0QgXJq9LYYZzU8D%2FcgqPFdKusheWPdvh2JL3FYwV9RNsrq37hAlx4ehtLDtdPaejzzRSjJl9psux6FJV%2Bu%2FAY7kuaGbK63m9yC7%2BfkaFf1i%2BVd1alhaXURmh5Rprn8399anSfFEQVnryxyXuOyx2mWlb%2B5qdksl6%2BMahWxkgZAEXzSN4fIUrklrYLU1QlLZNKr1XU3ZlVv57l6Txag%2FZx59C6L55%2FWjHJCzijAl2hNFKshu39H%2B%2Ff%2F3%2BLJsqur8GjSv0Rpeyg%2BfL3RD8XGGiBR5OCbPl32ueCUWcKqb%2FN4Ubsqf2%2BNwQ4%2BZy7IWtxz61pbjOFjmF92xZ32G8sFvYPI9bHxh7MA0JRI0MqzI4Mr%2B1pD3iCN8dBLUNGkyexUWTPcvab3tGbcKjXBEEag64LVk78D5WdJqE8gbC6upyluM1nlQRnzBeQSIocldr5Q2bpw0yT56eYG9xfQwpZ7jvQY6pgHe03FladeRc85AwJo4oo%2Bgiw4G0trQmqQD3v0tmq8C2fIiGgN3wE2RzY0TMcWerkLB287uAnnz4%2FfO1i3d0LvcmFIm0sfCBcY2q%2Bc9GCBlGeCnJWsBCSDINZB3uiHt3HZroI%2F6dPjZOmQ1jZdM%2F5Skrjj8RrETfvs8KWwqMKYED%2FaUayBvHfdXnspojnUw0N4QpAOemDzs%2FVXGmaJUClmPF%2FfkWEx4&X-Amz-Signature=a8055287f373ce1e9796af6379b7a64ce2d6ef76e33aa6c2883b93974782bf4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOP7ZXGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVA4ovrvg8P6dpPvjOmuLmJbWv667BTNA1jJSh2w9jvAiB0sblMc4sGu25qIuS%2BuM689bQ3rVmxBoyAJyJ%2BbISx5CqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgQRGfdHA1ed9GmdaKtwDmRGrPjufsFp9a8YgYo8JjMRWr41jLYBtbyy91A4UEqpqYh1AAghhK7YKzoRnJv7aZJ%2B2DNeuWzvOFctznxd7tg2bO2AGxDaDRMhszgwswq%2Bax9vhIBjXsia3CXuXItyU1BRcLmypmUNlNesb69Xsdyd%2BKmQUbio9OW61CSLLPiQfC0QgXJq9LYYZzU8D%2FcgqPFdKusheWPdvh2JL3FYwV9RNsrq37hAlx4ehtLDtdPaejzzRSjJl9psux6FJV%2Bu%2FAY7kuaGbK63m9yC7%2BfkaFf1i%2BVd1alhaXURmh5Rprn8399anSfFEQVnryxyXuOyx2mWlb%2B5qdksl6%2BMahWxkgZAEXzSN4fIUrklrYLU1QlLZNKr1XU3ZlVv57l6Txag%2FZx59C6L55%2FWjHJCzijAl2hNFKshu39H%2B%2Ff%2F3%2BLJsqur8GjSv0Rpeyg%2BfL3RD8XGGiBR5OCbPl32ueCUWcKqb%2FN4Ubsqf2%2BNwQ4%2BZy7IWtxz61pbjOFjmF92xZ32G8sFvYPI9bHxh7MA0JRI0MqzI4Mr%2B1pD3iCN8dBLUNGkyexUWTPcvab3tGbcKjXBEEag64LVk78D5WdJqE8gbC6upyluM1nlQRnzBeQSIocldr5Q2bpw0yT56eYG9xfQwpZ7jvQY6pgHe03FladeRc85AwJo4oo%2Bgiw4G0trQmqQD3v0tmq8C2fIiGgN3wE2RzY0TMcWerkLB287uAnnz4%2FfO1i3d0LvcmFIm0sfCBcY2q%2Bc9GCBlGeCnJWsBCSDINZB3uiHt3HZroI%2F6dPjZOmQ1jZdM%2F5Skrjj8RrETfvs8KWwqMKYED%2FaUayBvHfdXnspojnUw0N4QpAOemDzs%2FVXGmaJUClmPF%2FfkWEx4&X-Amz-Signature=c8c907c7c37f06b26334e6757b3d54bdd36cc297e511b9aa580cc962673b9390&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OABTTU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEUrQG9PQt7pLL3HjCKk9LG7XNJ%2BCGSUfFD6rW2n4qbAIgLL1lqXn2N5BCmbRSfR%2FdgoQMoKz9ruT43m0RWp0pHfgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGla9UD9UkVRx47CJSrcA5lqCXd24KlgQhd09UbQEqNcIpM8ubt%2BPK7rNmE4tYpciVTIZ1t7x4tB1B5zJr7b50urd85Ux1nVhf8u793ONMVH6YidH7SmxZ5eSfl38ZEnyPJWtVgCHG2N5SELP%2BHzH1hjsKjpjZAcgygsuKS0xZmHcKVKEIM6JQLPsA%2BJmW%2BeMUUG768mLSS2hAhbvlYSSLD7JV5IXhkgBL46D%2BOICjS9k4Asz4KdtWE9rvrKKO%2FkQmERxC8GYZjKCMKy9kXtx1ApKaSYmXUBJ1Hho0fcCPoPkiT46uhebwKkuFXdBMSpS7E4AfP2IJkcTPYnCdY14ZysAh07kf5N1%2BEL1iFi0JnBu1o%2BuEW%2F3F9oAEIJ1Jw87ZWPHkGQQF15MBxtNXC5n9%2FoRWCujaONVEi%2BGSi3WVk04VU7GxYg0lz5GokST650Q8vthrKkOlVMNWPPP%2Fqc%2FpIw6aJkpTvft5zNIxhaCrOSx4zbueYowN%2FnrsST8kdghArEJEd8hlrK3wUSmrTyEJuF%2FW%2B%2Fzfo%2FRQoCoLw89Y3XaP0uooqvTdMtjdDN%2FmLhv9Q9946%2FDSCPogMMFZtnVJiTx9vM4%2FLdbOJ5IPiVDPvoFV9w%2B%2FZV%2BjT5zgSOMnIp4GoCMwzBYm8KxBr5MKid470GOqUBYfMpytqepuUE1oCn%2B9ifABiH0v6O16btfrrxrfZG2lVyy04k3WudjRMiwUPq1TGysbBp%2BCIH6Rlyf%2FivASrkGSyrkhR1sYhTZSK4teBbXKphALikIN2UVV58thJ%2FqzTIqd%2FtsMEYzNR%2FiSuGDwNsi4QKMiQq7XgcP2Os62twIQDAMfmSOqCDPnEXhZKUQL8sJOhK31ccYHK5d%2F%2Fn6Ztae0iYHrnH&X-Amz-Signature=b1fada2b24f1afddd9ce0e96c1fb17848bcf24cb985445439e66b4db4a20e247&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HW6PMB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhwgYVKiwSoEzxTQaoCqto%2F%2BkHZZL9b4FIDX1fJm16uwIgSmRDK1PBvwcg1dhzBROk2JPEExSV0761G8KToDbo1EwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0xZ3omQgh87D7hiyrcA62okp2SvFNxRrRezYVdgY1jeoQDEQu3Q%2Bjs6otR%2B4wAwHyIDtTDc80hjPZpnzyk6Hnk%2F%2FGwYHVy84zt9X4LJNInwF2Y5zHBGdZ48s6dwF9RnO3bG7nlq%2FIH1WFcrvtsEGLlYJzZ8RscjNuf8xvw4NrR9bPOoBcn9UXN6ExHPAh%2FbI%2BFc0aT6C45aNBIrh0ex%2FqhbclxW8uYTAwDzLSBnXrqIfoRs0M2M1dQcRCBT2mMe%2FQpIWSUl5l9Hdx9WgyPeZI1fsjar61Wv8SczKjmOb5jUBoo6LXPl8xTyP%2BqevE5f7f5MJ0lBdTEtiCW63zG0JmMFSNl8Eo9oM2XosCX9Ck1qKs5m%2B0GKXLhlrAtEOALOzN3sdmTzrnI7lISNClEzX2KdAN3jPP8dNZ7rd1ZX3kw8B5sOtKq6AmPWpjYkETcCudqUowVzbrNZ%2FDcBkcVLV%2F76ifNJ9o28t6DfjzEde2HDZjzB1yxQ2%2B9abM80qzSzjLt6MHMEYyKSBuj%2F1%2FH7HPVa%2FRkyu6BLq3tXVo87AsdmZIyEAU7xf7d%2Fuhzk9JalzKP4h9iVqDUKWtWRY9YWSxWbBsAWBShrFrGkY2cSUqXWQar2EURJT8xox9sbweybxzQcKcdR3Y1qtKOMMWe470GOqUBoYzX%2FTcx1Hv0dn8a8vJMwyCZNQCHrucbzyuLKueYC9E%2BLt9JjFg32P%2BGlOIJy9SYH8w%2FEew58r7Uk4V3OE0bbb6%2FcubwZawVD6Av%2Bc7wUopf5IhdhuIT40%2B9kR248FD0wflfJJzzzRKKt8JtIGWFpGbav6V%2BR4%2F3E72qgaLkPxAkw2UjCjMMvL9bYasfZvHazI6tbsWoQjlfpmKWuqB58fFgSDDL&X-Amz-Signature=2e500fd5bd170c88bae74cada00dcec8a231e78b9cb5949b7dcde713c2c48e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOP7ZXGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVA4ovrvg8P6dpPvjOmuLmJbWv667BTNA1jJSh2w9jvAiB0sblMc4sGu25qIuS%2BuM689bQ3rVmxBoyAJyJ%2BbISx5CqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgQRGfdHA1ed9GmdaKtwDmRGrPjufsFp9a8YgYo8JjMRWr41jLYBtbyy91A4UEqpqYh1AAghhK7YKzoRnJv7aZJ%2B2DNeuWzvOFctznxd7tg2bO2AGxDaDRMhszgwswq%2Bax9vhIBjXsia3CXuXItyU1BRcLmypmUNlNesb69Xsdyd%2BKmQUbio9OW61CSLLPiQfC0QgXJq9LYYZzU8D%2FcgqPFdKusheWPdvh2JL3FYwV9RNsrq37hAlx4ehtLDtdPaejzzRSjJl9psux6FJV%2Bu%2FAY7kuaGbK63m9yC7%2BfkaFf1i%2BVd1alhaXURmh5Rprn8399anSfFEQVnryxyXuOyx2mWlb%2B5qdksl6%2BMahWxkgZAEXzSN4fIUrklrYLU1QlLZNKr1XU3ZlVv57l6Txag%2FZx59C6L55%2FWjHJCzijAl2hNFKshu39H%2B%2Ff%2F3%2BLJsqur8GjSv0Rpeyg%2BfL3RD8XGGiBR5OCbPl32ueCUWcKqb%2FN4Ubsqf2%2BNwQ4%2BZy7IWtxz61pbjOFjmF92xZ32G8sFvYPI9bHxh7MA0JRI0MqzI4Mr%2B1pD3iCN8dBLUNGkyexUWTPcvab3tGbcKjXBEEag64LVk78D5WdJqE8gbC6upyluM1nlQRnzBeQSIocldr5Q2bpw0yT56eYG9xfQwpZ7jvQY6pgHe03FladeRc85AwJo4oo%2Bgiw4G0trQmqQD3v0tmq8C2fIiGgN3wE2RzY0TMcWerkLB287uAnnz4%2FfO1i3d0LvcmFIm0sfCBcY2q%2Bc9GCBlGeCnJWsBCSDINZB3uiHt3HZroI%2F6dPjZOmQ1jZdM%2F5Skrjj8RrETfvs8KWwqMKYED%2FaUayBvHfdXnspojnUw0N4QpAOemDzs%2FVXGmaJUClmPF%2FfkWEx4&X-Amz-Signature=aac33762a8793e738b328204902d2f8d62657f3af7f7fc6571c4be70a76d8346&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
