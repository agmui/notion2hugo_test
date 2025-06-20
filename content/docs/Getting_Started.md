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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSE23ER%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYSZ1ZJTi8GyfrZ3K9w5Puwo%2BGYcN%2BLt%2Br%2BOonjIpqoQIgcN6tLTola3Pjl%2BqWj9Az5UtBcfWEfEMXU%2FTZSyciVLYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBVckaRyJeQeBc9JCrcA%2B4IaxzQ8K3v7vTQj7rQWj7tfBVb0eEm0N4a%2Bofpsn2QogYQw%2Fc%2BrEbUfta%2FLr8WIpAy%2F%2BwexgHZmTsknKWF%2BnhGwd5SlVJGXgV47SOsR7pFJMk%2BAi23BRcd1DdvnROMfwQa1VORUZxiJt1adH6c%2Bbt1e77XEouEHvuhiswvIw5R%2Bv6hL7ovsbu0ocnvtIym2zVMJ2kpj8ZPa6pCK2QkKhQUUwHtD%2Ff1MMlvdvN%2FaiIoXxUxu1ruuWZI39OOITcsa1hiAp%2FjGZhxf0X5Yn%2BwzmXimNxvgvjG1VHKdXBuMRplu7P0%2FWzFP8tztX7xc6TqOnnozCOCbx71dXhS%2FtyXWCN5RnmFKt%2BC4a09%2FA588pXKMa8zQVDH4PJ5C0N%2FYw7j3MctNtQTcYE74%2B2TPPQjqLtoGwS74M2GLYVpLQUP6P1ZENMxMsMFjnFJVsb3p9Blr%2FsSjcaC9zcU6CW7sfiLBblIPiu9MWR4Qk2kF67uvjoDvY%2B9HbQ3BMU1SOP0l1jshHNRYb6ja2P17n4q94tMYEXVXA6UbehvEqRelfbeVnHsW5B%2Fewq4I7i2PPYiPaJ286D6YHowxl1tc179g3RMvJxJ3IzK0urYao1bfmaexa1grDlru28FnU9%2Fi4NYMMyy1sIGOqUBxK7gvf6zrBHvd3TIswsiLQMpCBjnsZsbLyiwxZiGP%2F7KsrwFWYxGAkCmUkij3AnYCLQcG%2BFNqFJY1X3kcHPVgPjMWozgRtmBrxW%2BlABU8CoDKTfmQCdhfRSd%2BnvfQFgmi3XC74%2FjZW07qZIWScInWRMsrMoZceuNLe5qOgrPt6SoqP2N8Qa3vskBOELD6AVsmHHlgA5BXGSuULwZvlSfBKo3DQxq&X-Amz-Signature=421ad2450e0c7c4a549f472a61aad3d910e8d917c79d799063617eccb2709cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSE23ER%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYSZ1ZJTi8GyfrZ3K9w5Puwo%2BGYcN%2BLt%2Br%2BOonjIpqoQIgcN6tLTola3Pjl%2BqWj9Az5UtBcfWEfEMXU%2FTZSyciVLYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBVckaRyJeQeBc9JCrcA%2B4IaxzQ8K3v7vTQj7rQWj7tfBVb0eEm0N4a%2Bofpsn2QogYQw%2Fc%2BrEbUfta%2FLr8WIpAy%2F%2BwexgHZmTsknKWF%2BnhGwd5SlVJGXgV47SOsR7pFJMk%2BAi23BRcd1DdvnROMfwQa1VORUZxiJt1adH6c%2Bbt1e77XEouEHvuhiswvIw5R%2Bv6hL7ovsbu0ocnvtIym2zVMJ2kpj8ZPa6pCK2QkKhQUUwHtD%2Ff1MMlvdvN%2FaiIoXxUxu1ruuWZI39OOITcsa1hiAp%2FjGZhxf0X5Yn%2BwzmXimNxvgvjG1VHKdXBuMRplu7P0%2FWzFP8tztX7xc6TqOnnozCOCbx71dXhS%2FtyXWCN5RnmFKt%2BC4a09%2FA588pXKMa8zQVDH4PJ5C0N%2FYw7j3MctNtQTcYE74%2B2TPPQjqLtoGwS74M2GLYVpLQUP6P1ZENMxMsMFjnFJVsb3p9Blr%2FsSjcaC9zcU6CW7sfiLBblIPiu9MWR4Qk2kF67uvjoDvY%2B9HbQ3BMU1SOP0l1jshHNRYb6ja2P17n4q94tMYEXVXA6UbehvEqRelfbeVnHsW5B%2Fewq4I7i2PPYiPaJ286D6YHowxl1tc179g3RMvJxJ3IzK0urYao1bfmaexa1grDlru28FnU9%2Fi4NYMMyy1sIGOqUBxK7gvf6zrBHvd3TIswsiLQMpCBjnsZsbLyiwxZiGP%2F7KsrwFWYxGAkCmUkij3AnYCLQcG%2BFNqFJY1X3kcHPVgPjMWozgRtmBrxW%2BlABU8CoDKTfmQCdhfRSd%2BnvfQFgmi3XC74%2FjZW07qZIWScInWRMsrMoZceuNLe5qOgrPt6SoqP2N8Qa3vskBOELD6AVsmHHlgA5BXGSuULwZvlSfBKo3DQxq&X-Amz-Signature=60d41ee1e5273fdfcdb97914b4e0de7837c2c2cf0889102149285f916ca08491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSE23ER%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYSZ1ZJTi8GyfrZ3K9w5Puwo%2BGYcN%2BLt%2Br%2BOonjIpqoQIgcN6tLTola3Pjl%2BqWj9Az5UtBcfWEfEMXU%2FTZSyciVLYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBVckaRyJeQeBc9JCrcA%2B4IaxzQ8K3v7vTQj7rQWj7tfBVb0eEm0N4a%2Bofpsn2QogYQw%2Fc%2BrEbUfta%2FLr8WIpAy%2F%2BwexgHZmTsknKWF%2BnhGwd5SlVJGXgV47SOsR7pFJMk%2BAi23BRcd1DdvnROMfwQa1VORUZxiJt1adH6c%2Bbt1e77XEouEHvuhiswvIw5R%2Bv6hL7ovsbu0ocnvtIym2zVMJ2kpj8ZPa6pCK2QkKhQUUwHtD%2Ff1MMlvdvN%2FaiIoXxUxu1ruuWZI39OOITcsa1hiAp%2FjGZhxf0X5Yn%2BwzmXimNxvgvjG1VHKdXBuMRplu7P0%2FWzFP8tztX7xc6TqOnnozCOCbx71dXhS%2FtyXWCN5RnmFKt%2BC4a09%2FA588pXKMa8zQVDH4PJ5C0N%2FYw7j3MctNtQTcYE74%2B2TPPQjqLtoGwS74M2GLYVpLQUP6P1ZENMxMsMFjnFJVsb3p9Blr%2FsSjcaC9zcU6CW7sfiLBblIPiu9MWR4Qk2kF67uvjoDvY%2B9HbQ3BMU1SOP0l1jshHNRYb6ja2P17n4q94tMYEXVXA6UbehvEqRelfbeVnHsW5B%2Fewq4I7i2PPYiPaJ286D6YHowxl1tc179g3RMvJxJ3IzK0urYao1bfmaexa1grDlru28FnU9%2Fi4NYMMyy1sIGOqUBxK7gvf6zrBHvd3TIswsiLQMpCBjnsZsbLyiwxZiGP%2F7KsrwFWYxGAkCmUkij3AnYCLQcG%2BFNqFJY1X3kcHPVgPjMWozgRtmBrxW%2BlABU8CoDKTfmQCdhfRSd%2BnvfQFgmi3XC74%2FjZW07qZIWScInWRMsrMoZceuNLe5qOgrPt6SoqP2N8Qa3vskBOELD6AVsmHHlgA5BXGSuULwZvlSfBKo3DQxq&X-Amz-Signature=38f68827b9c87c9f2386319893b134b286bf9966342f5e2336ef7b794ab8adeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GZ7IUN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJYK7lchxQTTArOtrREA2TeZdBah495s3zgyQ0PrPR1AiA9lGjOUnh8EsNEh4QWirG17ABPUL8hW7hLOpu7NxUz7yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8QYHKbLAHOvAZE%2FKtwDaNoGJRhd4tZhmYeQUaaNuRZ40yCypaqm82QSl6rnM1q94JXATEnKVtq3iBAXTnZGi%2FqwGLxfcCnmJu%2B7DhxKFTR6jKTgLS30O3Se2gm5emybCdSNo%2FXvGmohLXVzOfMhZalZltNTZYNKkrfNeUlEEOXY3j1wrpZZKx86f5CEOWYOubAYT7UkfFTH3O%2BVbnLm8OTpXJpeWdYUuCZZ%2BH3zq1FUhYsvd3q0PMaauLmb8b5rGc6ykZj7WTpoa3Z70mfkbUb2fR4L8N9Flano4aYXkzlwWQ1Aw%2F6v8Wy4OvUCdELMhTRX2Vi4QqruO1SceLSkCQoQdel%2F0VBYv5SxG4d3HDwdoPqtad08uk%2BsMPQC7WsPVSCK7%2FpmzqLYT%2FYD4LPpqWEaLYrJjdDMmhC11r5LCYdLlZ89dUJlNFFJE%2BLqUsYhOzLHMPCHIiP5a76A3BUSfuL4STjCD39zLg1wgLme%2BuaDk6Heoc6mT1QLgy4L8dcrWOoWCPsjSKzOlV7lwD3XjxbnV0VZ8WlZsFgAWAOKelgMJb%2FmSmmNGAGIjWvWEOtZ3QutFC4Hb%2BJQr9Jt1WP3flOLsLm%2BpkAsW7%2FaVMnqtm365pA91LdP%2FyIG48PMaiDU6iHmJJSQofrRCW0wibPWwgY6pgFRv50H11%2BM%2BZT5Z%2FTeNru0s409KnAJ1gIhitSO39drF7Z61FgZomVVueGKgwno%2F8bir%2FN8Js72Ds4ez4rsE22nK5fJuC93npmj2PZA8m4CwwcfVb4g1WU%2FWCfEaafe8jzvnbsxXgXJQ6Mv%2Fg6m%2Fd9XTT%2FfNECapYsLcUep%2BouaEZiXh4Rp1q6L9hED3FcRvhgb9Z6miPMU9cFv%2BK%2B7sNdJJxwCQK6B&X-Amz-Signature=e59811a8e22773c4388076c06feaf5f3cc5097b1c2f2d426814a6ab2fdab040c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJP2QD6P%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkSilUPbjedojx2CZhE5hfuhQMpqyvQ3XMXh3mwqvYAwIgJoIN7brwPW6bwppDNh4D5VG2Pa2lKtVV1dSxYljRFx0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP41GQ7kzp1eva5R7SrcA326EtO1WZOmDzSqVds4tTGwsU%2F7PQvV4faMifoM9KdCPxLjrgPdHm6iFU7pRVxcHfPBYU6W%2BCwfftkjst9prENX9klj480lNUb1IkrjIAcfpPk4nHThrcWDiQqVPAQ5FTCxyykHqi7dO%2FBiTnrIstKbIBnjEgZK70dZnqKpnZ3d%2FTy42Q8MUsYVwEU9PSvblsIaCvxt6CU9OFWSDxSCNKz6GeE%2BUxsEYGWEP8sQVmlQ2QM2YRgT8uwD1bdmKMyctSYrBTwxQEGJ%2BRtfQK9iP3Z0eWQYG%2FnapzWlSIN9Zsk7h10kl7US7YjTYjN8J7ixVYR1DfGa%2Byo0oZouLCDDZgS7k0EFxDR2jld0hc8QDSr2aOQg3XwJh5p5cjC%2FQTbfirdXZRAOOen8IEvfOJH6Gfen%2FjAK6XjGI1NO6B80KsJGwuAcLtUIWu9XEgwVXV4uq9IORTzed%2F2X1yOdYK2sJEqpcugCyc9gnJ6R0vxiD27QeUr9nh5VK14QyU4%2BrE8BonvWVnMYJsnnTARPFV8SE81m%2F7okk1qs1iEaasF8jF%2Bcm5H6akm7ddi29tw1icAQAqBipQ1Jxj9zUUZQE%2Bu1zOBBV97SaUkWt0ts2tr4qPsH33tVuZfddj%2FuESybMJiz1sIGOqUB6pDWpXqV96iyNelRSLfXBLo0DWQpGG8KiaHwgseCc5%2B7g7RxJ0Ga8V8fTCZxKw3p%2B%2Flaoflh3%2BBNlgLLrD471wEMm9jAWFG5gb91OC043q%2Fstj6ttI%2BuhDgG1o8pw79YXZ3LWTYfNPPNR%2BQcH8B%2BgwElqQoXv4UQs3lBOolgy2lVDq6WdO0%2Bnz3muEpSr7R%2B723kJk2isuyEsYwuGSmqhUvCSKeD&X-Amz-Signature=30818eceb61f8f7da39ae8bf77f9b24adee87fbc944576941d03bcdae793ad23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSE23ER%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYSZ1ZJTi8GyfrZ3K9w5Puwo%2BGYcN%2BLt%2Br%2BOonjIpqoQIgcN6tLTola3Pjl%2BqWj9Az5UtBcfWEfEMXU%2FTZSyciVLYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBVckaRyJeQeBc9JCrcA%2B4IaxzQ8K3v7vTQj7rQWj7tfBVb0eEm0N4a%2Bofpsn2QogYQw%2Fc%2BrEbUfta%2FLr8WIpAy%2F%2BwexgHZmTsknKWF%2BnhGwd5SlVJGXgV47SOsR7pFJMk%2BAi23BRcd1DdvnROMfwQa1VORUZxiJt1adH6c%2Bbt1e77XEouEHvuhiswvIw5R%2Bv6hL7ovsbu0ocnvtIym2zVMJ2kpj8ZPa6pCK2QkKhQUUwHtD%2Ff1MMlvdvN%2FaiIoXxUxu1ruuWZI39OOITcsa1hiAp%2FjGZhxf0X5Yn%2BwzmXimNxvgvjG1VHKdXBuMRplu7P0%2FWzFP8tztX7xc6TqOnnozCOCbx71dXhS%2FtyXWCN5RnmFKt%2BC4a09%2FA588pXKMa8zQVDH4PJ5C0N%2FYw7j3MctNtQTcYE74%2B2TPPQjqLtoGwS74M2GLYVpLQUP6P1ZENMxMsMFjnFJVsb3p9Blr%2FsSjcaC9zcU6CW7sfiLBblIPiu9MWR4Qk2kF67uvjoDvY%2B9HbQ3BMU1SOP0l1jshHNRYb6ja2P17n4q94tMYEXVXA6UbehvEqRelfbeVnHsW5B%2Fewq4I7i2PPYiPaJ286D6YHowxl1tc179g3RMvJxJ3IzK0urYao1bfmaexa1grDlru28FnU9%2Fi4NYMMyy1sIGOqUBxK7gvf6zrBHvd3TIswsiLQMpCBjnsZsbLyiwxZiGP%2F7KsrwFWYxGAkCmUkij3AnYCLQcG%2BFNqFJY1X3kcHPVgPjMWozgRtmBrxW%2BlABU8CoDKTfmQCdhfRSd%2BnvfQFgmi3XC74%2FjZW07qZIWScInWRMsrMoZceuNLe5qOgrPt6SoqP2N8Qa3vskBOELD6AVsmHHlgA5BXGSuULwZvlSfBKo3DQxq&X-Amz-Signature=480ead7a4a0844b2e4731c3c9bf125200bab262f5bebb4649b2482af73857f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
