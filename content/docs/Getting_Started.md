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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NPKEAL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEFMu0ooCfewhYNjvtMbh%2B3Mtv6BlLBaWCDpgp7Y%2Fp3WAiBXU8XFJewSb08JEeKp4c1JY5y1c1yMMFaZyrxaLbEY0ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMkiPpxUB87cccIJ3%2BKtwDNMbDlBNFHyEFuMc6GdzEtGdGFxiuvwCRx8XWEWhxIBhVE3fBa1%2FBo2OofpcJ9GSzwwubqcbLqqbT9Vln5fosXdQxVYs04KWd5fW%2FpEbbJ3UNHqjRclIF93HgUsXoZ2NPzpTvy2X9dU9JoWebQIwgzmekDnwmt0mkM%2BqBKqyQIqnk4TKjobcXz6FyO5VJYXVUfqe%2Fd6jhvDMuxKnSwZxWqJXKui9fbnieD70GLYafEKGi12q3L6HSeaICjRGC%2BXm6VXGKf6zr7bi2LHNgBMcW94r85A7c2MRqrGLKqriN6RVqlpsL64hDRfN10h5ZMy2aJfrdyNOQ5o6%2B4SBFuTEilDa98kEsThtOeeWkrN4ylGejdjik2cfmuUvBqL7gfPW2TU3oaTAHpww%2BJ2ct4%2FkryqHq2cLWTh8w5dVf7sR73a7M3FbXapN840z7z%2FjjIta2n8nhNyA32SnlKD%2FdnSValYBwHZ9ZwGakMEKuMuN190r1O7fsuMGJSiNhdAAsBRGddlEU2BeLfDV15T3I4RQMMQrm6M8Pmc7kwnb9JalOrafbiNXPN%2BV99fGXi8%2FcKpge2QdvzItjuPrsziJ5%2FBTrKEm6EshoJ58fGzu8HFa1tAVDt3UHA86GtF%2BByrwwwcXOxAY6pgHGKD4%2Fv7O1x7iUqqZM9cyxL%2Fu6ob1xkovFKepuYpLXhs46jSDJqrT2emgvbT3reNWR9ZVylDfQt5iigGk0EXgH%2Fj87aTuKl1mfdkIKm5dXUZmO1ibT8%2FtU6AJW6sBP2s6cUe48LBcuylTE6FEbd%2FUvRNWp5%2Bi%2BN%2B6bKJ8r4VUXyQxCCvDEs659yr76wavoFWApiVol781BeYE3X%2Buo88RLpo8Olakx&X-Amz-Signature=eb516c6eee96b4922950703e1083a8e017035bf6e20df5247e2da04d631a48a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NPKEAL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEFMu0ooCfewhYNjvtMbh%2B3Mtv6BlLBaWCDpgp7Y%2Fp3WAiBXU8XFJewSb08JEeKp4c1JY5y1c1yMMFaZyrxaLbEY0ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMkiPpxUB87cccIJ3%2BKtwDNMbDlBNFHyEFuMc6GdzEtGdGFxiuvwCRx8XWEWhxIBhVE3fBa1%2FBo2OofpcJ9GSzwwubqcbLqqbT9Vln5fosXdQxVYs04KWd5fW%2FpEbbJ3UNHqjRclIF93HgUsXoZ2NPzpTvy2X9dU9JoWebQIwgzmekDnwmt0mkM%2BqBKqyQIqnk4TKjobcXz6FyO5VJYXVUfqe%2Fd6jhvDMuxKnSwZxWqJXKui9fbnieD70GLYafEKGi12q3L6HSeaICjRGC%2BXm6VXGKf6zr7bi2LHNgBMcW94r85A7c2MRqrGLKqriN6RVqlpsL64hDRfN10h5ZMy2aJfrdyNOQ5o6%2B4SBFuTEilDa98kEsThtOeeWkrN4ylGejdjik2cfmuUvBqL7gfPW2TU3oaTAHpww%2BJ2ct4%2FkryqHq2cLWTh8w5dVf7sR73a7M3FbXapN840z7z%2FjjIta2n8nhNyA32SnlKD%2FdnSValYBwHZ9ZwGakMEKuMuN190r1O7fsuMGJSiNhdAAsBRGddlEU2BeLfDV15T3I4RQMMQrm6M8Pmc7kwnb9JalOrafbiNXPN%2BV99fGXi8%2FcKpge2QdvzItjuPrsziJ5%2FBTrKEm6EshoJ58fGzu8HFa1tAVDt3UHA86GtF%2BByrwwwcXOxAY6pgHGKD4%2Fv7O1x7iUqqZM9cyxL%2Fu6ob1xkovFKepuYpLXhs46jSDJqrT2emgvbT3reNWR9ZVylDfQt5iigGk0EXgH%2Fj87aTuKl1mfdkIKm5dXUZmO1ibT8%2FtU6AJW6sBP2s6cUe48LBcuylTE6FEbd%2FUvRNWp5%2Bi%2BN%2B6bKJ8r4VUXyQxCCvDEs659yr76wavoFWApiVol781BeYE3X%2Buo88RLpo8Olakx&X-Amz-Signature=19bda8f75a5b43c6bdeb1b8abc79e7e17a3802d3ab64b45ca674fce266df327c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NPKEAL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEFMu0ooCfewhYNjvtMbh%2B3Mtv6BlLBaWCDpgp7Y%2Fp3WAiBXU8XFJewSb08JEeKp4c1JY5y1c1yMMFaZyrxaLbEY0ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMkiPpxUB87cccIJ3%2BKtwDNMbDlBNFHyEFuMc6GdzEtGdGFxiuvwCRx8XWEWhxIBhVE3fBa1%2FBo2OofpcJ9GSzwwubqcbLqqbT9Vln5fosXdQxVYs04KWd5fW%2FpEbbJ3UNHqjRclIF93HgUsXoZ2NPzpTvy2X9dU9JoWebQIwgzmekDnwmt0mkM%2BqBKqyQIqnk4TKjobcXz6FyO5VJYXVUfqe%2Fd6jhvDMuxKnSwZxWqJXKui9fbnieD70GLYafEKGi12q3L6HSeaICjRGC%2BXm6VXGKf6zr7bi2LHNgBMcW94r85A7c2MRqrGLKqriN6RVqlpsL64hDRfN10h5ZMy2aJfrdyNOQ5o6%2B4SBFuTEilDa98kEsThtOeeWkrN4ylGejdjik2cfmuUvBqL7gfPW2TU3oaTAHpww%2BJ2ct4%2FkryqHq2cLWTh8w5dVf7sR73a7M3FbXapN840z7z%2FjjIta2n8nhNyA32SnlKD%2FdnSValYBwHZ9ZwGakMEKuMuN190r1O7fsuMGJSiNhdAAsBRGddlEU2BeLfDV15T3I4RQMMQrm6M8Pmc7kwnb9JalOrafbiNXPN%2BV99fGXi8%2FcKpge2QdvzItjuPrsziJ5%2FBTrKEm6EshoJ58fGzu8HFa1tAVDt3UHA86GtF%2BByrwwwcXOxAY6pgHGKD4%2Fv7O1x7iUqqZM9cyxL%2Fu6ob1xkovFKepuYpLXhs46jSDJqrT2emgvbT3reNWR9ZVylDfQt5iigGk0EXgH%2Fj87aTuKl1mfdkIKm5dXUZmO1ibT8%2FtU6AJW6sBP2s6cUe48LBcuylTE6FEbd%2FUvRNWp5%2Bi%2BN%2B6bKJ8r4VUXyQxCCvDEs659yr76wavoFWApiVol781BeYE3X%2Buo88RLpo8Olakx&X-Amz-Signature=b69a64496ccd4a7829dab57d1f7c76004a2b6fe07d629db4fb848950a73c3574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJAIGI3J%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCtaVQbstYOpN8Cp7fXsh%2FZt6OjjQyR2Nr9niuJrwhc3gIgFIhtvIREICzUkk3u2FFyshLifeJA3JD5FLGHc7S9AW8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPVQFOOmplCOQCpG8SrcA5xloix974fMLceW0T579YTOtp4W5JdkYHE7WEyRC7J8xq2GOOQjgW%2FqnJNKegGhynK7RAi4kMl1YlE8EacbJClHS7pOfUpRVh2jQRnTZLy47P2YuVYkS8vPxQdRsfb6%2BKuvZBS2ih%2FIbOZLYmSI3QQfO1UmQbLG4yoJ9qYK%2BjqhyTAaWONklf2WkP8OTETTLgpozNl7l3XOQYPDRs4GvSltv2tMxIqzvmp%2Fs8aVYeJvHmpWC5FfCkDXK%2FUch%2Bb20RKB4Qb8HdX8IP6tnADU2Uz9%2B33bjKRO9IYsL2cHJKCGEvi7WHJ8D3Jzvcibep0Eso6yu81jh8grvC6fxIsDtIomgnykHO0kvBDuJFFJ3PWJVFHGwaEyLDMk8lstoft8MA8Lk%2F5E7YIhHE66D39UEWjJiQHcElKPl7CYDA5czwHCaCpegIV2JCVUl26EeMv8aIhNjYF6ZZHxxd40nZt0MDlM10dAAGGxB3RUnMiihQA98VMhMuzK3A1FllR7jv0Kq82VP6beVmI9Y9AGMo2%2FP3vffhDet%2FjWJoWM1HchtYJHlW0cbgwi75KbYsus8%2BN1UL7uj9csPGIYMUvtZ3nxlnmv5ls73cxHjIqx1wu9FaJznu5VWZaZKJ%2Bo4oWjMKnGzsQGOqUBM0RybLkG%2BfqdmcD0QMjKEI4ASsVwWp9uSlpBkI6i4lmXIk389glQSc5CCNW7Cm3spPX5GIVESZ8vjiS7fpScd1uOeYRo6H%2BorvsecXriOvpE7Yebq5Nyr1WsE0rUbgG6rxahAG6Fd%2BVcaiO%2FZJKE2G9b3AgRrVH65myC1fCYXnJ8ttxwc0f0AC5yNwKZemjHeEbk%2FZ3Ca5B%2FrC2f50fnTK5eajDm&X-Amz-Signature=08142d0bb6711624968b6238f6f22807bf510bacdec4b849466c6c4e84e897ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHAGRKB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCUYgQuYlfz6k2HcIKR2rwgaZMmoWxR6hs94%2F7yiztdoAIhAPuXp3VQS1fAtieHmtFFJ8hgoa7gkEknBaEPk8Y25PNVKv8DCHwQABoMNjM3NDIzMTgzODA1IgzSOUkwwWU5vjUtGu4q3ANutqfuY8BfHsdPN78i8paP0bz4IhAKMmaKJXN22s%2FUxzP4g%2BTRRobZ6vS6rD7B1tOAMYVcYf2LWIzajjpbNEdvNQTxM6dn3VF%2BfZkRPJYwUZzYvwAI%2B2AzWo5fKyPv9m8cxtnCBSA9%2BooPrN6VmfpvYNQxSO%2FucDccuJ3D9254LGX1NLlM0dBo%2F8qglnTa8Lk9Jz6puXqFNb%2BPxaYJB9xp5%2F2MwV%2FtgLpuDiJ4Q5FY1hnBtl5WTuveuq2n6WR5cRgftw%2B%2B5RTopW2XBBjOyfJDYg2O2uo5g88H%2BmRAnPSrLujjsPIO8b7hMblI0ah7iDtH%2BLolCaeESCAAHopaMYCrKjF8OHENu3wXXXLQJiOCqVP%2FAsJ%2BmoR%2FulGaWRUM5Af2d3xJpubeqoulGLD%2FZvaCCrokcCN56c7oeaGjEaxC1cbzkjhbttna7TqZbmoL6NkbEw8IWrWO7jBvj0rDY9IEIMTzEw9Z3lHDhm0A8d4yWPta1JQ1gxGdulZy5TzYjFs2z%2Bez3y13QmWl02q%2F75ANL9Tdx038aI%2Be80%2Bf9MmbD4XI2ZlZ82qKoBJszljN%2FewKXsYnIqHBzz0VvsTxSXTOC%2BmOSKduGNncCoDWGL3xwm%2FAJH4P01vQU%2BNmqTChxc7EBjqkASQRA%2ByhpM7LZIMyVG2EBlfN%2FS2%2BX0cMgIScwIPCnZbR5VW694wzyOZvNxyd3xODH7cZQgIMoTOjI6alktTbymJ4A7JNi1mY6jWxKV67MKDS6rs5FLU7zgkXLfK91tYnYdJHXuPWO3FwoseHcM0FOkzaXd05Ikloxmm8m1I3ekgAhHmvzPHrvNt2CXqPkyfT%2Bj%2FBvkP59otql%2BnDDGPA2StvKp%2F1&X-Amz-Signature=261f7cf6ce491cf83ec58ed8f550c843a916c770130d34242d2839a89b1ab2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NPKEAL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEFMu0ooCfewhYNjvtMbh%2B3Mtv6BlLBaWCDpgp7Y%2Fp3WAiBXU8XFJewSb08JEeKp4c1JY5y1c1yMMFaZyrxaLbEY0ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMkiPpxUB87cccIJ3%2BKtwDNMbDlBNFHyEFuMc6GdzEtGdGFxiuvwCRx8XWEWhxIBhVE3fBa1%2FBo2OofpcJ9GSzwwubqcbLqqbT9Vln5fosXdQxVYs04KWd5fW%2FpEbbJ3UNHqjRclIF93HgUsXoZ2NPzpTvy2X9dU9JoWebQIwgzmekDnwmt0mkM%2BqBKqyQIqnk4TKjobcXz6FyO5VJYXVUfqe%2Fd6jhvDMuxKnSwZxWqJXKui9fbnieD70GLYafEKGi12q3L6HSeaICjRGC%2BXm6VXGKf6zr7bi2LHNgBMcW94r85A7c2MRqrGLKqriN6RVqlpsL64hDRfN10h5ZMy2aJfrdyNOQ5o6%2B4SBFuTEilDa98kEsThtOeeWkrN4ylGejdjik2cfmuUvBqL7gfPW2TU3oaTAHpww%2BJ2ct4%2FkryqHq2cLWTh8w5dVf7sR73a7M3FbXapN840z7z%2FjjIta2n8nhNyA32SnlKD%2FdnSValYBwHZ9ZwGakMEKuMuN190r1O7fsuMGJSiNhdAAsBRGddlEU2BeLfDV15T3I4RQMMQrm6M8Pmc7kwnb9JalOrafbiNXPN%2BV99fGXi8%2FcKpge2QdvzItjuPrsziJ5%2FBTrKEm6EshoJ58fGzu8HFa1tAVDt3UHA86GtF%2BByrwwwcXOxAY6pgHGKD4%2Fv7O1x7iUqqZM9cyxL%2Fu6ob1xkovFKepuYpLXhs46jSDJqrT2emgvbT3reNWR9ZVylDfQt5iigGk0EXgH%2Fj87aTuKl1mfdkIKm5dXUZmO1ibT8%2FtU6AJW6sBP2s6cUe48LBcuylTE6FEbd%2FUvRNWp5%2Bi%2BN%2B6bKJ8r4VUXyQxCCvDEs659yr76wavoFWApiVol781BeYE3X%2Buo88RLpo8Olakx&X-Amz-Signature=4fbe3cb2aed421105648e92f0eb7ce0a5ec4576a1a87b264eeffecefc841f87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
