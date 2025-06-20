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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODTOO2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9LMkn%2BT%2B82VNxMQvTd%2BdUg46tg2MfyDgY4NKIwKLDjQIgLNfhBiFWTt5qC04fz4dvwLMf8TcbgT%2Bv4AQO3fXwoLwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyyy8431imcRTKyTCrcA90CICPLhETVCCcBvoDxG6qNdiTuFwPrQXbbVZsqwoe7R%2FSzwkCiY1mPlwy1uZkQYeSseEm7yEZ573GQcI48e5obHFopksIWcMYicw%2BX3Lb31FRAp595zgtVLoXwC3KvU6csqM5zOtocKEVlNuFdi%2FL9trPGPd4CZxxI1OvYvvlFW2d0bapMCjby%2F8TvaefxGxK6ggGT6L8XD6e17%2B5DMe8Dh9lPV24UVsP6gXkoosMBGwc%2FIYAJxZIdbBA%2Fo9vh1FzQ9HZ0RxRRC9UCCLEoMRqok7r0lOZMrBJzoLzy1fLQw6AztP%2BPyXhkUH%2FNOQmc2MRHBqvvPq%2BYN28%2Bcagobk%2BELoWFLhPMQgE62BPHTeuGommu%2BYqssz4I8Uomh3VCR4eIccrmkTGxWPqihJS8wJaUw1vlBHcBGiETZUOiuc%2BOIXI3EpHvel3hIbW2i4TIz54lAwAtbRqvulp%2FsJGAcg0jVgYHo4%2B0YNUvtff5k%2BO%2Fe3KcsI5VAiq6TAWaPoXOtbegGRGCMOHJeh6LysJsCTYO%2FsSPr99XsNWOcM6bVhzSqOm5nm75Gvuj4zDWQFpqPX6bLFb1g7gZ%2FL7xjUxU%2BexK3UCE5c49ANj88MSQLtayi2IDgsaK%2FNXhncZYMJ%2B%2B08IGOqUBwr6nKH1HXF2GP%2BwoCBXRz9d1SKeHjGxjA7cSfWGaHPrblcA96hPLT%2BKl6od5Muvp85gYFOs3BBg5uXA7YQgnbX90EAJYAFoLgNm5s4z%2FdPbM71szHo%2BzcWBE4afpWV5i0L3HVh2CIfrWFIj17x1nVHYC0pT7s2VXS%2Fkxq%2FhPTu3l8YDmHosLyTsFSbbSOO5ilFGsQwtMacp3MDq0n%2F5RK6cCxKM3&X-Amz-Signature=a9d758128e6f2be94b0f42cadb9d3c1f7d8d57cb05a173ca433c6c37b60c1380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODTOO2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9LMkn%2BT%2B82VNxMQvTd%2BdUg46tg2MfyDgY4NKIwKLDjQIgLNfhBiFWTt5qC04fz4dvwLMf8TcbgT%2Bv4AQO3fXwoLwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyyy8431imcRTKyTCrcA90CICPLhETVCCcBvoDxG6qNdiTuFwPrQXbbVZsqwoe7R%2FSzwkCiY1mPlwy1uZkQYeSseEm7yEZ573GQcI48e5obHFopksIWcMYicw%2BX3Lb31FRAp595zgtVLoXwC3KvU6csqM5zOtocKEVlNuFdi%2FL9trPGPd4CZxxI1OvYvvlFW2d0bapMCjby%2F8TvaefxGxK6ggGT6L8XD6e17%2B5DMe8Dh9lPV24UVsP6gXkoosMBGwc%2FIYAJxZIdbBA%2Fo9vh1FzQ9HZ0RxRRC9UCCLEoMRqok7r0lOZMrBJzoLzy1fLQw6AztP%2BPyXhkUH%2FNOQmc2MRHBqvvPq%2BYN28%2Bcagobk%2BELoWFLhPMQgE62BPHTeuGommu%2BYqssz4I8Uomh3VCR4eIccrmkTGxWPqihJS8wJaUw1vlBHcBGiETZUOiuc%2BOIXI3EpHvel3hIbW2i4TIz54lAwAtbRqvulp%2FsJGAcg0jVgYHo4%2B0YNUvtff5k%2BO%2Fe3KcsI5VAiq6TAWaPoXOtbegGRGCMOHJeh6LysJsCTYO%2FsSPr99XsNWOcM6bVhzSqOm5nm75Gvuj4zDWQFpqPX6bLFb1g7gZ%2FL7xjUxU%2BexK3UCE5c49ANj88MSQLtayi2IDgsaK%2FNXhncZYMJ%2B%2B08IGOqUBwr6nKH1HXF2GP%2BwoCBXRz9d1SKeHjGxjA7cSfWGaHPrblcA96hPLT%2BKl6od5Muvp85gYFOs3BBg5uXA7YQgnbX90EAJYAFoLgNm5s4z%2FdPbM71szHo%2BzcWBE4afpWV5i0L3HVh2CIfrWFIj17x1nVHYC0pT7s2VXS%2Fkxq%2FhPTu3l8YDmHosLyTsFSbbSOO5ilFGsQwtMacp3MDq0n%2F5RK6cCxKM3&X-Amz-Signature=cbffa0948b7c96914c740802332a4b58ff54bfb5009df726d492480a7b3c3f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODTOO2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9LMkn%2BT%2B82VNxMQvTd%2BdUg46tg2MfyDgY4NKIwKLDjQIgLNfhBiFWTt5qC04fz4dvwLMf8TcbgT%2Bv4AQO3fXwoLwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyyy8431imcRTKyTCrcA90CICPLhETVCCcBvoDxG6qNdiTuFwPrQXbbVZsqwoe7R%2FSzwkCiY1mPlwy1uZkQYeSseEm7yEZ573GQcI48e5obHFopksIWcMYicw%2BX3Lb31FRAp595zgtVLoXwC3KvU6csqM5zOtocKEVlNuFdi%2FL9trPGPd4CZxxI1OvYvvlFW2d0bapMCjby%2F8TvaefxGxK6ggGT6L8XD6e17%2B5DMe8Dh9lPV24UVsP6gXkoosMBGwc%2FIYAJxZIdbBA%2Fo9vh1FzQ9HZ0RxRRC9UCCLEoMRqok7r0lOZMrBJzoLzy1fLQw6AztP%2BPyXhkUH%2FNOQmc2MRHBqvvPq%2BYN28%2Bcagobk%2BELoWFLhPMQgE62BPHTeuGommu%2BYqssz4I8Uomh3VCR4eIccrmkTGxWPqihJS8wJaUw1vlBHcBGiETZUOiuc%2BOIXI3EpHvel3hIbW2i4TIz54lAwAtbRqvulp%2FsJGAcg0jVgYHo4%2B0YNUvtff5k%2BO%2Fe3KcsI5VAiq6TAWaPoXOtbegGRGCMOHJeh6LysJsCTYO%2FsSPr99XsNWOcM6bVhzSqOm5nm75Gvuj4zDWQFpqPX6bLFb1g7gZ%2FL7xjUxU%2BexK3UCE5c49ANj88MSQLtayi2IDgsaK%2FNXhncZYMJ%2B%2B08IGOqUBwr6nKH1HXF2GP%2BwoCBXRz9d1SKeHjGxjA7cSfWGaHPrblcA96hPLT%2BKl6od5Muvp85gYFOs3BBg5uXA7YQgnbX90EAJYAFoLgNm5s4z%2FdPbM71szHo%2BzcWBE4afpWV5i0L3HVh2CIfrWFIj17x1nVHYC0pT7s2VXS%2Fkxq%2FhPTu3l8YDmHosLyTsFSbbSOO5ilFGsQwtMacp3MDq0n%2F5RK6cCxKM3&X-Amz-Signature=f5449a6fdfd8ea51dc821b4d5465646a57334cd9522bff589b8b3a49316aa807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5ZDNDK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbjnaZOYbxyOmIlI%2BnNuAtBGJ26woEvaNdqmtAZh71FwIhAMMiziLfjB1UVfjG1uHjkt7vcen9am%2Bgcu2ZtFt%2FIQucKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyApjnqfQiP1rYgL%2Bcq3ANJnjBTqLoz838yFDkMBy1Kem3rt8MOcpF2MTurttkkjGd93NrZsjFsLuTSjQILj7vLraSQFLU2%2BB62Pgkve8fzpfwfO7X9sQ27X%2BmO8zJdGJB7QtyR3SNGFmUPcxkoi2vHq1I6gEk44%2BS8fKGkmT4wIPNhuVntk6oLaO92I3MEvaxapeLcFcHHZskgKYkpmsgV0Nod4wur7diWndQAWoJvmlihvlS5G%2FxnZzj%2FE7YxB6Q%2F1mo9AK8fKB%2BQXSE0TzjSpkP7FsTNiYZroi4yttg8m9IjS8G7P0RJGdlcm28qHd3FOsEMYMCyq%2FJt2p%2Fsj6VPYs5bNqiC5xsTtk2AcyFLa2KRwqsUHPM0tbbk5Q0%2BtGRjKV231byptb%2FUjbT2SDgyGRixziIv%2BCLit5Y%2F4L%2F%2FyWTvG1iys%2BrplfymMJicOZJciTlPIn7VKDn9UYz6sKQj6JpP79rt%2BgJNm8qPAr3ygaK02h5aNkUcyq9tkrWenSYw9VYxCCM5vv17mWA4ZyqW%2BQKILHzCINRRPI6wYXphwQsRKA7f8s0oSpxu%2FcZ5wkoq2e3yZv0gl%2BRNi9EA7ypdfAvadS9usB1ggofqwQ14%2Bo18zPfq2vl7cDx1JoN%2FHFHgCwXhnapgtCNBHDDsvdPCBjqkAVhsXLO2yeeg5%2Boo6XbhfNzbkwBpr0r88yhzycBb%2FljX2LVbK5nTpIwaZoyQ8w5TYUrqw5o2F3Wmx7%2BYfwoirlLwF%2FNY3ymhRRWtvMzjhh57KZbeNFgfLtrJPkSsF24PL8cSDDn9CsN7WD2choWsfk4CQtdO1MPeNToeZBCoVtTaW3et762E2zydBL%2B%2FKWHjPg2d9l2xIUeknVshOnBC8Mowt6dx&X-Amz-Signature=230154a70fe9fa84d4dc830ea66393bb8fd853d593ed5a15ce92a8977af45805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWINXWFE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRaq3gSHK%2BjydH%2BtypDNKrf8W619JAd9t7pbG5aSpUXAiEA5mVSJnsSDQhz066icAaB%2BJUtN1SOot3Ogw28xwKau3wqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLyn%2Fh%2Bq%2FVnzXRJUCrcA63VnfyfXjknDSPBDWEb%2FUhpjjv2vy1NBOXaw9oUtC4pAvWyWzp0Brf5iByajcSrQuIvCYF3Vyux2Xq%2BJlvR7q11KyzX21cKqGi570pEI47Ph15qzMDv9RKKKjfOqraDKAO65rioOPrBqReToAnXNYOXY2gE0wDXjXl%2BJaZi%2BjDPutxWZONxRMrNxkqD51cNXEtiasWMnbB536D%2BGk1iedR5XfP9kRZVlM6MLSnYnyOTtjS14HQFMYj%2FpeVesbi%2FVOj1CH5gZxBmCUtswHZyhkVJtVuDVysv194i38o5hPVT2VCPxf%2FD3lJkjA6KboYMm33C46ObU%2B4BNnWEh0Yt3o5hLpHTHC5uVyu0kpe2qyV4mM%2B0Jneg86Aksp0jZxbrt0yVM3bh1GubdXzsdK6Y%2BVHKI%2BdXUaHxQsopzDicCVMIzjC1vSQdNZagMQ%2Ff7Yz7TEKyVWDUnmgPU96m%2FbEY2pjz7q4dsyoCWpvhY4ySiSzr1SK9En%2F%2FLKaqf6TtMtUspMtSjiIzLmsA7KGnJ85SLKwXybMZiawPIV7cz9eH1aQZQXpuCRfO0vYCwA5j%2FFR8%2BRdYPjrHuomTceTMyuhF6M4zNJ%2Ft5VixKGNW9iwvJJ2qytGHd%2Bq1GdTZPFpqMJa908IGOqUBz7QaDwd7VJAm9p3tQjgRVs3nAp8%2B1Zq5r%2FBAzY1jh%2BFFYKtTRdpsha98zc5JQm1Ll7syQggu1f%2B9CHxt7yDj4TjpxcYwczjk%2B8Nau28J%2BxTsMn%2FYy8UBewB%2Bk0XFek5S%2BOisK8w6x82irFfyKhGmY3rGYk%2FhvU%2F5KVprUjwuJo6MIE2TMXwArUkSa%2BtUUCgXoKfyhg5XEr0B%2BY5oqwn0QebbxiYN&X-Amz-Signature=15d7af7c906f0f28d4285cc7a13e8da49a2f1bbd8a072669ec16a4625ddb60b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODTOO2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9LMkn%2BT%2B82VNxMQvTd%2BdUg46tg2MfyDgY4NKIwKLDjQIgLNfhBiFWTt5qC04fz4dvwLMf8TcbgT%2Bv4AQO3fXwoLwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyyy8431imcRTKyTCrcA90CICPLhETVCCcBvoDxG6qNdiTuFwPrQXbbVZsqwoe7R%2FSzwkCiY1mPlwy1uZkQYeSseEm7yEZ573GQcI48e5obHFopksIWcMYicw%2BX3Lb31FRAp595zgtVLoXwC3KvU6csqM5zOtocKEVlNuFdi%2FL9trPGPd4CZxxI1OvYvvlFW2d0bapMCjby%2F8TvaefxGxK6ggGT6L8XD6e17%2B5DMe8Dh9lPV24UVsP6gXkoosMBGwc%2FIYAJxZIdbBA%2Fo9vh1FzQ9HZ0RxRRC9UCCLEoMRqok7r0lOZMrBJzoLzy1fLQw6AztP%2BPyXhkUH%2FNOQmc2MRHBqvvPq%2BYN28%2Bcagobk%2BELoWFLhPMQgE62BPHTeuGommu%2BYqssz4I8Uomh3VCR4eIccrmkTGxWPqihJS8wJaUw1vlBHcBGiETZUOiuc%2BOIXI3EpHvel3hIbW2i4TIz54lAwAtbRqvulp%2FsJGAcg0jVgYHo4%2B0YNUvtff5k%2BO%2Fe3KcsI5VAiq6TAWaPoXOtbegGRGCMOHJeh6LysJsCTYO%2FsSPr99XsNWOcM6bVhzSqOm5nm75Gvuj4zDWQFpqPX6bLFb1g7gZ%2FL7xjUxU%2BexK3UCE5c49ANj88MSQLtayi2IDgsaK%2FNXhncZYMJ%2B%2B08IGOqUBwr6nKH1HXF2GP%2BwoCBXRz9d1SKeHjGxjA7cSfWGaHPrblcA96hPLT%2BKl6od5Muvp85gYFOs3BBg5uXA7YQgnbX90EAJYAFoLgNm5s4z%2FdPbM71szHo%2BzcWBE4afpWV5i0L3HVh2CIfrWFIj17x1nVHYC0pT7s2VXS%2Fkxq%2FhPTu3l8YDmHosLyTsFSbbSOO5ilFGsQwtMacp3MDq0n%2F5RK6cCxKM3&X-Amz-Signature=aefba066ae96c7b2a4ab90c4b692b5a9a698a5d5e8f0a99b1ba013f070a8646b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
