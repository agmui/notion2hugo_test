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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MJWYLU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHOVaxbRsrfuZPdQPKW4Wb8QMUFUJi4ScunexVsicHdDAiBnOQCGLvB51Rllh2064hWf5g49FdQ64narS3S418ZYtCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM2YvcdxNU5g5jQYTvKtwD5WvyYfwND2vcIAtLsTcEzpnplVx3Uj9oU%2FjwMhjt%2B2roMXG70%2BJCMAJI1X0qPIqxuv5Dbf1UIJ7PGwRiQIpDO7Ey39iexPXiOFP%2FEQ9fYV%2FpX1zmLWcZNNQI1TPpRQUxVV05RnRExsdfkttv0oCkTkhrjbNP9Inb68OUMFI7dt7RoBNqvMg%2F5ELkP%2FvGGkS9hKLB7l%2B%2BNo8zrOyfqlCdajOfZysrIdbd%2BO%2FJ03%2Fs6Q8%2F0weFjHEH0aZ7NLNYQBl%2FkR0Z%2BmO4YxpBxD6%2B4MB8oKPJilD00%2FewTUeOv%2BUSXmOepH8gRN8FBlwI6wVt%2FXrcO%2FESJPgmkq2XFh%2BzS8E57sLWnYLNFHyv0PWTTBJhCmFjeeUcdM2jVXL07LoshVKtQebo52gaICUTu4jwiPyuGAktjPekQ6IWyjJ2GiyUlt%2BAEvIMWCuMrQEMqx5enTHh9ptzNIzSBlk0fbl0XydLrlvT5YP2gh7ikQbSivskZVbbod4f9VXfOTXu7gHn7w1VsktgS1H6trC%2BVGndrm11TKJgpGN%2FDvhNCC1R75o7TRdM0vwYv%2BF3va2tuq4pOjHJiVw%2FnwYw4wXzLWX8QqNh3bu4dk1nrstLdmB3qmPTmFw1FBpf9tw1Hy8DEQEwiJb3vQY6pgH2Y0eAHKxNqeqBx3mEdFopcB8pj0kc2z2W5bEf%2BvqVb9iufXTYA9G7Rrc9c9knI9ldaImAvaLzb%2BE31IV9UyI%2Fuy%2Ffo9wEUQq9ZARmw%2F3GnWF2rAUbDWXSccRj6qkwcvput6mMnPxYqLX2FN4ErVA4iNmV9luDlNHZlrsnXJ3LwFcVBnnUT5KyxPBhWZvm3Wf5mmQ3hXzpe9mtezQEE7Bj4xFumqMQ&X-Amz-Signature=bf91a79125dbfc1e0b13f302df9c64a50f0326ef027106a4941c7c3b857d0b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MJWYLU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHOVaxbRsrfuZPdQPKW4Wb8QMUFUJi4ScunexVsicHdDAiBnOQCGLvB51Rllh2064hWf5g49FdQ64narS3S418ZYtCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM2YvcdxNU5g5jQYTvKtwD5WvyYfwND2vcIAtLsTcEzpnplVx3Uj9oU%2FjwMhjt%2B2roMXG70%2BJCMAJI1X0qPIqxuv5Dbf1UIJ7PGwRiQIpDO7Ey39iexPXiOFP%2FEQ9fYV%2FpX1zmLWcZNNQI1TPpRQUxVV05RnRExsdfkttv0oCkTkhrjbNP9Inb68OUMFI7dt7RoBNqvMg%2F5ELkP%2FvGGkS9hKLB7l%2B%2BNo8zrOyfqlCdajOfZysrIdbd%2BO%2FJ03%2Fs6Q8%2F0weFjHEH0aZ7NLNYQBl%2FkR0Z%2BmO4YxpBxD6%2B4MB8oKPJilD00%2FewTUeOv%2BUSXmOepH8gRN8FBlwI6wVt%2FXrcO%2FESJPgmkq2XFh%2BzS8E57sLWnYLNFHyv0PWTTBJhCmFjeeUcdM2jVXL07LoshVKtQebo52gaICUTu4jwiPyuGAktjPekQ6IWyjJ2GiyUlt%2BAEvIMWCuMrQEMqx5enTHh9ptzNIzSBlk0fbl0XydLrlvT5YP2gh7ikQbSivskZVbbod4f9VXfOTXu7gHn7w1VsktgS1H6trC%2BVGndrm11TKJgpGN%2FDvhNCC1R75o7TRdM0vwYv%2BF3va2tuq4pOjHJiVw%2FnwYw4wXzLWX8QqNh3bu4dk1nrstLdmB3qmPTmFw1FBpf9tw1Hy8DEQEwiJb3vQY6pgH2Y0eAHKxNqeqBx3mEdFopcB8pj0kc2z2W5bEf%2BvqVb9iufXTYA9G7Rrc9c9knI9ldaImAvaLzb%2BE31IV9UyI%2Fuy%2Ffo9wEUQq9ZARmw%2F3GnWF2rAUbDWXSccRj6qkwcvput6mMnPxYqLX2FN4ErVA4iNmV9luDlNHZlrsnXJ3LwFcVBnnUT5KyxPBhWZvm3Wf5mmQ3hXzpe9mtezQEE7Bj4xFumqMQ&X-Amz-Signature=cb864411b13ce11111b1e6dc518288b0d7207094203a22ab02be47eeab93f614&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHFGPTI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHixPnib71KRWAcFytyzJ%2FXGFvP6vDOPeX7ak%2FW3%2BNxCAiEA391RmuL%2FhlFA%2Bib54yuktvgZej2%2Bl3iiI%2FbbOa8LYv4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLtdxCTr1V6RzQaQiircA4GFPfSyr2nhIz2com8Z8hYDZMkN2YOXTrztc%2BmiHckIn07PF%2BBqLxJp07i%2BWJ9uYq5qUROQBRjEijB0T%2FR2ZB%2BdEheXtYz50Q8tcSDVJZbjowqST7cyXprrRaxnDRvbswmybH2%2BcixT0Tza7ZIdNuInK%2FWaFtoJGlV29LMb5xXaPUqX3lq7VCk1zeqM6SJCudJrZHM8%2FDlvgslFHVVg%2FUGygR8yC9IH6Fy56zKTvAYd0Oc2f1lt%2BXYfIgiIdF9QQjW1nTxM3h6iaALjxo2Xz5yzMlnR%2BOjJZhLSNf5C4bW2pfNnHBtJM9IRvvxSqHI%2BMYcHwaeWnkd97bnAaYPw%2B9JtOy7pNh7jBAgQIvwlapqIWDdPzQad4IZ5XtbTpLicGZJ9RYek0qB5S8F300QjDXHhIboo1h2LcgJl5ZaWNgMyOutMKzMeUA1Fu8%2BFvusYz81NYDwBWo8CNHrdY93%2FouDdkRyxKdWZK6wJz59zrsSZCEEol3iyfHj7PU%2B9MNjg98rrEB0oNO0Vkp0HNTUp%2FPmuK%2BPd1bdGViuTZehFYA06OV7nA7OYf3lHLsG%2BMXpy9aow%2FtjT%2F5%2FthskGnM5chevjvn1FOSiOuUfHWcIq9Bmk6YBGOTAsgCuay%2F%2FQMK%2BW970GOqUBBHU%2FjpZQ%2FYpH5uBqYpxuwgojzoavJyBkg2%2BpqYO41EdQ2X9Hglzn4Wj3sk87%2Bdeiw0NEKxX42UATKaatQ9PO33S9bY47gQ8Y1df7SvVzlJsCqOsopQv%2BdGYBgaXkgXvk2exwDKf%2FbVTyRdypjWeqW3bSQCs6kwghMuj%2Bkj0nRthxONtJ2ZUef1r%2Fl3jcpiCAjaO4A%2BSIPAPmNtmUsSYQE2CPARiI&X-Amz-Signature=e7e4a458a7ca3c018c280db61ec05150421147fce94b379e708fef03c0820a22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IEUOSGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCYHzgd5ULV%2BYJGzfvCfojNAJCMMkLijlo%2B5NpkHdz2ZwIhAIxCWylS3cyCz5O%2Fm9i%2Bgo778bccd4%2B0BanQKkuqY741Kv8DCEcQABoMNjM3NDIzMTgzODA1IgzCOG%2F%2FGHA9MEdlQhUq3AP00ahcxgCqB8wB9cl7rIt8SGO0oE32bDjZVeIxIS6WLMEhgnDns%2BPD2MjvxPgTcZqMs0y%2FTG0LEVhNvqifHMk9%2FU5FOZ4pAnrXnrR478D4%2BIO8i17G4hyWBDdGYdxKdVpP1JL9txoQecfp5HARu7VRvnta9TswpPU1tKOqVBBnrKt%2FO5TLWuXfwkY%2B6riwGuZyvrUeYFQep%2F6pOP4mKbApqFuv%2BPjdXJaZuQ1aMcfDZE5NKL8pSHHiH9ZB8N74T4htt8LDrcRgA5oHfIU2mhjqxno4K3GaKFX0EI35uf1oYujZcSJRANR5h2asIWTp9IOzMvaZYkmmTiS73sCg6IrrsIcvk2EozyhlWtQI9VCkqgL%2BBhHCKW2E05IPcBrkRy0qfDAbZIXTpSr7C1Ij%2BLboek%2FrTIpMXvtl7iLAS1Ar%2BElvlzpQSthzNAb42bbzqZycsbhxYt596njdwLe0S4WNgiiC3RP%2Bt%2BqBcaUkZuxY8zSDlN0Ma78QB6FwLds1leJ9z21ZJhyoslIa35uJRSY4l6vfM6nnGGV42Lr1Ip7bTKbq5DBr2brC%2BFdTDcZ75iFejuthwfKJpzjgKVbDAN3FzNjzgoaT4%2FYWXCyYOfkpLFRY8cGal3WLmM%2FoPDCBlve9BjqkAdvBj3MgxzPjEf4ley5NgHWy3fjLxQWlb9wYeUf13CK7ZhlPpayodv6QRiNmRN%2FriTCgIilTWrpBZElV9G1e5dZZ7EthTGCWtM3D%2F0Gy8Y%2B%2BKhkhapw%2Bq3tJu0XbdherbmgQYFUPtfcn2U%2BhvDXerTClgsphbo6rirTAf1rzXJaW2g0chB07Nr6tEGl%2BABDIg76LTgZ2KTAHt2ryOrjiPIP7Fk%2Bh&X-Amz-Signature=199152667d50e622b63963d226647fd1f632e293d60b40504fb5d8f741e4340a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MJWYLU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHOVaxbRsrfuZPdQPKW4Wb8QMUFUJi4ScunexVsicHdDAiBnOQCGLvB51Rllh2064hWf5g49FdQ64narS3S418ZYtCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM2YvcdxNU5g5jQYTvKtwD5WvyYfwND2vcIAtLsTcEzpnplVx3Uj9oU%2FjwMhjt%2B2roMXG70%2BJCMAJI1X0qPIqxuv5Dbf1UIJ7PGwRiQIpDO7Ey39iexPXiOFP%2FEQ9fYV%2FpX1zmLWcZNNQI1TPpRQUxVV05RnRExsdfkttv0oCkTkhrjbNP9Inb68OUMFI7dt7RoBNqvMg%2F5ELkP%2FvGGkS9hKLB7l%2B%2BNo8zrOyfqlCdajOfZysrIdbd%2BO%2FJ03%2Fs6Q8%2F0weFjHEH0aZ7NLNYQBl%2FkR0Z%2BmO4YxpBxD6%2B4MB8oKPJilD00%2FewTUeOv%2BUSXmOepH8gRN8FBlwI6wVt%2FXrcO%2FESJPgmkq2XFh%2BzS8E57sLWnYLNFHyv0PWTTBJhCmFjeeUcdM2jVXL07LoshVKtQebo52gaICUTu4jwiPyuGAktjPekQ6IWyjJ2GiyUlt%2BAEvIMWCuMrQEMqx5enTHh9ptzNIzSBlk0fbl0XydLrlvT5YP2gh7ikQbSivskZVbbod4f9VXfOTXu7gHn7w1VsktgS1H6trC%2BVGndrm11TKJgpGN%2FDvhNCC1R75o7TRdM0vwYv%2BF3va2tuq4pOjHJiVw%2FnwYw4wXzLWX8QqNh3bu4dk1nrstLdmB3qmPTmFw1FBpf9tw1Hy8DEQEwiJb3vQY6pgH2Y0eAHKxNqeqBx3mEdFopcB8pj0kc2z2W5bEf%2BvqVb9iufXTYA9G7Rrc9c9knI9ldaImAvaLzb%2BE31IV9UyI%2Fuy%2Ffo9wEUQq9ZARmw%2F3GnWF2rAUbDWXSccRj6qkwcvput6mMnPxYqLX2FN4ErVA4iNmV9luDlNHZlrsnXJ3LwFcVBnnUT5KyxPBhWZvm3Wf5mmQ3hXzpe9mtezQEE7Bj4xFumqMQ&X-Amz-Signature=189b6c4b3e7fd0936b8d0c642d970cfdd62d01533df12d2d252d941caa43bf82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
