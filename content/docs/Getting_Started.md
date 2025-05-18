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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVGM2X5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM7dCVUwVGuCqunWbon6GjokFq9bj6WonEUvwZCyLQdQIhAMsPOgOc8F7AmdTEZjsy6tThRnHpuabVlAXkd%2FxXpOkTKv8DCG8QABoMNjM3NDIzMTgzODA1IgxHAbufnU6KyMwRuxgq3AOgR8k8zMFfz1JyxWIN%2B%2BWMVA2D%2BKmY1Eg9ZG%2B571dLiLXj9P%2FYQkhDeRpbLmBf8whTSHuLNY7qIIlPZcDdbV6NlwpYfmUoPKnR5nf6GRNB%2FmCAL4XKJtWxGENtbPsmBYemVucky07dVeYsKV0NKoDH8S3%2Fh9qDayPZeXARVOIrXeepGZl2sqOCNkCoOpIWjquFui8qdBHzXe%2BgbNQQ4d5c%2Fr0dfRoOHLff5L%2FSRicV02lr%2FVQIMQXS3XXL%2FRHS3ZJOdaEEK8qoFFT%2F85zXn6V5bUBdUwVkTQ1H%2BY6aqJjgPrP%2FsssPfcQeEriY2qbW03cbwJIpXiPShzF06Kf4iHVC%2BAdnDv8XfHRd40s%2Bqwi%2F2YC%2BSLojOtBHza1%2FtVSIExoQq%2FU5ECvF56XjGGfn14sstIVZe7B%2Fy%2F2oQBuXzdszo8LpsCDbAtzppWqxCoPr0Mv3238MbkS%2BhDauXU9c9rFhtbOZIDetXzXWITFc%2Blht7QyKQRKwdiG64swWreHyNHnwifGlc6%2BkTWrSt4wztzTOemwpIzG%2BO94E5VkLdEV%2BZBCzbEzGS%2Bx4YWNjBGxppwUbdcFRco7IDIywEmg0tf%2FN4pDvwuDHABSDJNw%2B34vX2JIdbLZS%2BvdbWCMDdDDW96XBBjqkAWJGxZpRepEJV6OUih5EdYLKsNvUHzvCt6SNJPfagpqSYL1MYg%2FVsChqbkrLwleWIEc3YcT5nR9iJv1iikUrIcCcqkzGzffInKmp%2FOc9DYi0Xe6A%2BQsbALVANZJD9n5oPZ2vgjrUsCCtsyF0PjX2QcpSsrjdhHtjkp0zRMvpUooaSscjl8I6WfCUKcHHss%2Ffeh0BTRRlsZfQ4rQ0fHBJQkFDJGtc&X-Amz-Signature=d4a7ff487e0010c15eebc95dda34082f3720dac1118e95055492f3c02978985c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVGM2X5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM7dCVUwVGuCqunWbon6GjokFq9bj6WonEUvwZCyLQdQIhAMsPOgOc8F7AmdTEZjsy6tThRnHpuabVlAXkd%2FxXpOkTKv8DCG8QABoMNjM3NDIzMTgzODA1IgxHAbufnU6KyMwRuxgq3AOgR8k8zMFfz1JyxWIN%2B%2BWMVA2D%2BKmY1Eg9ZG%2B571dLiLXj9P%2FYQkhDeRpbLmBf8whTSHuLNY7qIIlPZcDdbV6NlwpYfmUoPKnR5nf6GRNB%2FmCAL4XKJtWxGENtbPsmBYemVucky07dVeYsKV0NKoDH8S3%2Fh9qDayPZeXARVOIrXeepGZl2sqOCNkCoOpIWjquFui8qdBHzXe%2BgbNQQ4d5c%2Fr0dfRoOHLff5L%2FSRicV02lr%2FVQIMQXS3XXL%2FRHS3ZJOdaEEK8qoFFT%2F85zXn6V5bUBdUwVkTQ1H%2BY6aqJjgPrP%2FsssPfcQeEriY2qbW03cbwJIpXiPShzF06Kf4iHVC%2BAdnDv8XfHRd40s%2Bqwi%2F2YC%2BSLojOtBHza1%2FtVSIExoQq%2FU5ECvF56XjGGfn14sstIVZe7B%2Fy%2F2oQBuXzdszo8LpsCDbAtzppWqxCoPr0Mv3238MbkS%2BhDauXU9c9rFhtbOZIDetXzXWITFc%2Blht7QyKQRKwdiG64swWreHyNHnwifGlc6%2BkTWrSt4wztzTOemwpIzG%2BO94E5VkLdEV%2BZBCzbEzGS%2Bx4YWNjBGxppwUbdcFRco7IDIywEmg0tf%2FN4pDvwuDHABSDJNw%2B34vX2JIdbLZS%2BvdbWCMDdDDW96XBBjqkAWJGxZpRepEJV6OUih5EdYLKsNvUHzvCt6SNJPfagpqSYL1MYg%2FVsChqbkrLwleWIEc3YcT5nR9iJv1iikUrIcCcqkzGzffInKmp%2FOc9DYi0Xe6A%2BQsbALVANZJD9n5oPZ2vgjrUsCCtsyF0PjX2QcpSsrjdhHtjkp0zRMvpUooaSscjl8I6WfCUKcHHss%2Ffeh0BTRRlsZfQ4rQ0fHBJQkFDJGtc&X-Amz-Signature=fac8075968787f6f6bc97559bd958e5860c8330aaaf69ee4cf2f0f5f1f069001&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVGM2X5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM7dCVUwVGuCqunWbon6GjokFq9bj6WonEUvwZCyLQdQIhAMsPOgOc8F7AmdTEZjsy6tThRnHpuabVlAXkd%2FxXpOkTKv8DCG8QABoMNjM3NDIzMTgzODA1IgxHAbufnU6KyMwRuxgq3AOgR8k8zMFfz1JyxWIN%2B%2BWMVA2D%2BKmY1Eg9ZG%2B571dLiLXj9P%2FYQkhDeRpbLmBf8whTSHuLNY7qIIlPZcDdbV6NlwpYfmUoPKnR5nf6GRNB%2FmCAL4XKJtWxGENtbPsmBYemVucky07dVeYsKV0NKoDH8S3%2Fh9qDayPZeXARVOIrXeepGZl2sqOCNkCoOpIWjquFui8qdBHzXe%2BgbNQQ4d5c%2Fr0dfRoOHLff5L%2FSRicV02lr%2FVQIMQXS3XXL%2FRHS3ZJOdaEEK8qoFFT%2F85zXn6V5bUBdUwVkTQ1H%2BY6aqJjgPrP%2FsssPfcQeEriY2qbW03cbwJIpXiPShzF06Kf4iHVC%2BAdnDv8XfHRd40s%2Bqwi%2F2YC%2BSLojOtBHza1%2FtVSIExoQq%2FU5ECvF56XjGGfn14sstIVZe7B%2Fy%2F2oQBuXzdszo8LpsCDbAtzppWqxCoPr0Mv3238MbkS%2BhDauXU9c9rFhtbOZIDetXzXWITFc%2Blht7QyKQRKwdiG64swWreHyNHnwifGlc6%2BkTWrSt4wztzTOemwpIzG%2BO94E5VkLdEV%2BZBCzbEzGS%2Bx4YWNjBGxppwUbdcFRco7IDIywEmg0tf%2FN4pDvwuDHABSDJNw%2B34vX2JIdbLZS%2BvdbWCMDdDDW96XBBjqkAWJGxZpRepEJV6OUih5EdYLKsNvUHzvCt6SNJPfagpqSYL1MYg%2FVsChqbkrLwleWIEc3YcT5nR9iJv1iikUrIcCcqkzGzffInKmp%2FOc9DYi0Xe6A%2BQsbALVANZJD9n5oPZ2vgjrUsCCtsyF0PjX2QcpSsrjdhHtjkp0zRMvpUooaSscjl8I6WfCUKcHHss%2Ffeh0BTRRlsZfQ4rQ0fHBJQkFDJGtc&X-Amz-Signature=748fffd7f4c046b25b53f945cefeae467557eb8615b7a83ffddeb5257b081a12&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNDDLSG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgbqGlvfyblY1q1ASRUJq3RikgWJkeGvOAa0EPECctwAIhALfZUAKnKlZM3sqQQ9hj1O%2FK6Q%2BnjrSiqotIQnv0lSkGKv8DCHAQABoMNjM3NDIzMTgzODA1IgxKyuSSGoqSNEiyMnwq3AOCj%2B9fad5KI4v1RwCdBIICA22D%2Fxa%2FXAaTTTspa5KJ%2FeThIAYCj9TJJXJzjRiNQj7rpP07tmbTpbzkz6tofWxSAgKIRlhuJynXUCArIRz%2B4YE60U1CFCql48abijwjRfl5jMDqlL%2B0ZPBfnPpXVhbhXmAQaDhbJZsCYp0YLxA4aY2zQZvTVjTboBlN%2FrS5vsaUaxJIkPLKpCeoui1VU9a%2Bxa6fcUYyu%2FsO4jmSWnH3y5BXZTPvqB56jJ6AA3gEsN2zL0L6rQRbNZVYWOpTLTsazIwAdsWJHli2trSW10UTSlGRE8XVV1y1hQOQGEw7leHE4coPbnM%2BVjdtuZE2zbYE1ykwgm3tFtrZfaig6y795rxWFb35sEdNa7L%2FNMZdD%2BQEA6x1LWCibShIjHw2nP%2BM%2B81uyW1%2BtvDrZ5Wi7peenm5cepiILn0EzpEnyPQIjhzGS6pb7DeZfdrn393ycufBAbYt80jXhCbkhVljTBZ1i5CB8vMdG5aPmJ142%2Bu%2BVA8%2FktO3XW7x3k3fMYco846B030lymjZByNikX0j7zOZoGYlJ9XwgMqCNVh9l1UtPXbjt97ZBAJE8Sw7TI2fpgeKd0T4QEnnPqioqSSU4eYv9DBe6AKYlU7BBoZc6zCJ%2FaXBBjqkAWvzlWnFZwiwI8N%2FgKvquhUbLuXayI21qQXXvCn9t%2FvsNoBmkwvGNkRhpYBF1eSyQQdWKeoh%2Bcb4s06vvP1t76R%2FRKP1hJlBe2egUstqm1Apx63wxYcTA9GBfXjGDxuvCwOvV2S%2BugJ1%2FwajcxhpUq1dGXDGkdNgh9cPgGvAvf2CHva2nJ%2FNRkp0QyryUpw5qBNJoyGmY8zUhuyZuOOpdzbBUi0Q&X-Amz-Signature=636c3cd2c090e621ef6dc815392ec8885c00cb317918038d0693bece48ae2f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U2GZ73%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzS8PFFB%2BGGCKtiCijelL4jc1YIby2dKqED1eRsaxkzgIgDRYzLmDNzjsu%2BSeFIatbZ4uIYHDfLt22QAl0svxyo%2Fwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPwxe%2BYGEgnPuF%2Bl2CrcA34EXBjTEgbsqG1W9tArvrPc0TEIk9%2F%2FJSzhfGmtA2HUFs55L4qvU%2Fg1eG1GGuKldIJVHQK8pUQPfC9biubY7cOJc2k0P1u5WrTdAXBTn0XSea7EZRxoIUYe8gWkcjkTk3DGLFWDELni%2Bxnz2c28P59pXS1JVb2bKZQ%2BtCG23TQkch1yyvCPaBLrlhEekOXwYzcviHwsLygcSXKGCLwklzR6zEF4ywIhO71F5Kpi%2BKVpv3tDZdPKQIXub3UDGt7PISfYXomCnawr3OpsCOFUMxO4n2YHyl%2FIuP6pBUjISXyWMOcaicZJ27svJinsgWTNnenZDKp7Qh6xkhLncjzkAssH04WltqBKy0SvjvDnDP4XOQFk%2BCI8puNL4ToDl8aUwSC5%2BiHNUDIftjqArk36KNvqev4AB420T1N2aSUmyeijdVEBwl8Rg2P7NMlP6fDVkKYCaj7nYLx5QnGiHzPqXFyYqoz7w%2B3nh8xMwP1uzjQP%2FLVR7DwZdRlCFEQcOgL6GEZHIai2famruugzG9fxyu3a8k9mKPg73wDh8ddYK8NXIE7mzO%2BiFBcyuqJR1crKqDlZJHMHmlTLgdwUiMctivnk9kitXhVorRnj5bXcrmmDtbQndxRHshWd4jBCMKDfpsEGOqUBIicUUg17QyQf4bFKU7lj%2FTrahkxgGLd1x9vnPBg8lk4dXuMX9hd2dDr1K47k7nOa0ikdordjYPxx2YnlQZ1P6E78dZkw%2BAc2GhfvNxp6DqjsGcWsDsUawg2aLydQpnyrOBC89rMVnRlVi0LRNAQcRXBMIv8fk0R5xD8tLQLX2jSRQZ18f25v4TcvsYPcKttcKZENfkt8y7uBhhLAfcVZrld%2FOlTK&X-Amz-Signature=d6faa8ce160bc828eb9e7d664b5688b3acdb658b5e836143f0e47f7d3d14d28c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVGM2X5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM7dCVUwVGuCqunWbon6GjokFq9bj6WonEUvwZCyLQdQIhAMsPOgOc8F7AmdTEZjsy6tThRnHpuabVlAXkd%2FxXpOkTKv8DCG8QABoMNjM3NDIzMTgzODA1IgxHAbufnU6KyMwRuxgq3AOgR8k8zMFfz1JyxWIN%2B%2BWMVA2D%2BKmY1Eg9ZG%2B571dLiLXj9P%2FYQkhDeRpbLmBf8whTSHuLNY7qIIlPZcDdbV6NlwpYfmUoPKnR5nf6GRNB%2FmCAL4XKJtWxGENtbPsmBYemVucky07dVeYsKV0NKoDH8S3%2Fh9qDayPZeXARVOIrXeepGZl2sqOCNkCoOpIWjquFui8qdBHzXe%2BgbNQQ4d5c%2Fr0dfRoOHLff5L%2FSRicV02lr%2FVQIMQXS3XXL%2FRHS3ZJOdaEEK8qoFFT%2F85zXn6V5bUBdUwVkTQ1H%2BY6aqJjgPrP%2FsssPfcQeEriY2qbW03cbwJIpXiPShzF06Kf4iHVC%2BAdnDv8XfHRd40s%2Bqwi%2F2YC%2BSLojOtBHza1%2FtVSIExoQq%2FU5ECvF56XjGGfn14sstIVZe7B%2Fy%2F2oQBuXzdszo8LpsCDbAtzppWqxCoPr0Mv3238MbkS%2BhDauXU9c9rFhtbOZIDetXzXWITFc%2Blht7QyKQRKwdiG64swWreHyNHnwifGlc6%2BkTWrSt4wztzTOemwpIzG%2BO94E5VkLdEV%2BZBCzbEzGS%2Bx4YWNjBGxppwUbdcFRco7IDIywEmg0tf%2FN4pDvwuDHABSDJNw%2B34vX2JIdbLZS%2BvdbWCMDdDDW96XBBjqkAWJGxZpRepEJV6OUih5EdYLKsNvUHzvCt6SNJPfagpqSYL1MYg%2FVsChqbkrLwleWIEc3YcT5nR9iJv1iikUrIcCcqkzGzffInKmp%2FOc9DYi0Xe6A%2BQsbALVANZJD9n5oPZ2vgjrUsCCtsyF0PjX2QcpSsrjdhHtjkp0zRMvpUooaSscjl8I6WfCUKcHHss%2Ffeh0BTRRlsZfQ4rQ0fHBJQkFDJGtc&X-Amz-Signature=256e0fdc227f50b74265eb64f1e2fbea4bbe34de149813c1416d18c3fb8cdb95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
