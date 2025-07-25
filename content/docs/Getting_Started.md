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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2PJULJX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2BH48%2BlTbILzth22KI9sZBmcfq8Ufi6WgQdFkj%2BIBtCAiBfG0FQ7qXK8gMJ1AEUusBfRN3F0vdM%2BgOwMiWQXRwYlir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkoUv4ksSB5ttBZvsKtwDzu%2FuvTa2%2FmsKSp7fVzt8PCIkn05oTSyJHNB7wxq2RwRtd97beqYQ6MqbV0OwneYz8Llx1gP4pUux9EXwEqOgLOHHE05nzh%2Fw1Pu0rr6m%2B32ffJ8Vct2SB6hiECjJ8d6tt%2BY%2Fbh0kp9HW3L0G8Q4%2BN5qdajnOhyuPXIHQmq4apEmmJS2Sio%2Bh%2BOBtELQOUMmYdIyFGzmzxFC4tYge44ml2Dsdm2YLTZtDXgsADLuhOdJU8ZXPK12i%2FJvIjNwu%2FFQxiAHbocjcBjx4jkKmJ43ebfWiEWgWafE34UnscVbjIwP%2BT533KO8my8vYgdag1G6KOj77lhIIFML%2FVlvBsrqdIZx9MLSSGr8TzxMaIxdFxtxrqeYjv9ccvLh3On7aZXdzcKM877e7a3MhgIRdGsYXzqaH71%2FDFjQTXBMaJLypC0Z0E6JNK3ICcWlrKPTvKoL45EsxWjKEKpG1oslhkkmS9MnXvgF%2BNWmZ84lzEisDNkrRO1vSQWSCgbnXAZ9TM9s3xM7u1gl1QsckKCK%2FbqlxCYukWCcGPLcMvyu75oWJYPIVpXM8GpdkJ114ZRiDQmBf6ZyvriB%2BzKTtjfqa%2F%2BalFi6sbK0BuYB2W5JSr6eudGhx0RNSYTQTv96wH0Qwq4aPxAY6pgHVMI%2B77TXkIkP7EHh9qpiVlEFQSMWw%2BFkdgUXPJMKt%2BxzJ0zPmUqZqkWS7KEGY5fFHrfmovMX2Jp%2BHsa0GHQEzmdQgmNBbnJ0do4NlPF32WC%2BTjw08fI09mIQGTJ8izr7wptTQNXy9Rj7qzTUo4QtWWvcbBR0O%2FcUip1Pu9sxOhwMBJbmm%2FeTEnjWX9ZHAsfWyUs48AjPZTzpooirzKCBWICvS3j0W&X-Amz-Signature=79884c24621a4830616d1d29265790b82df4525e92dd3b75df9ae1b22f925a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2PJULJX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2BH48%2BlTbILzth22KI9sZBmcfq8Ufi6WgQdFkj%2BIBtCAiBfG0FQ7qXK8gMJ1AEUusBfRN3F0vdM%2BgOwMiWQXRwYlir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkoUv4ksSB5ttBZvsKtwDzu%2FuvTa2%2FmsKSp7fVzt8PCIkn05oTSyJHNB7wxq2RwRtd97beqYQ6MqbV0OwneYz8Llx1gP4pUux9EXwEqOgLOHHE05nzh%2Fw1Pu0rr6m%2B32ffJ8Vct2SB6hiECjJ8d6tt%2BY%2Fbh0kp9HW3L0G8Q4%2BN5qdajnOhyuPXIHQmq4apEmmJS2Sio%2Bh%2BOBtELQOUMmYdIyFGzmzxFC4tYge44ml2Dsdm2YLTZtDXgsADLuhOdJU8ZXPK12i%2FJvIjNwu%2FFQxiAHbocjcBjx4jkKmJ43ebfWiEWgWafE34UnscVbjIwP%2BT533KO8my8vYgdag1G6KOj77lhIIFML%2FVlvBsrqdIZx9MLSSGr8TzxMaIxdFxtxrqeYjv9ccvLh3On7aZXdzcKM877e7a3MhgIRdGsYXzqaH71%2FDFjQTXBMaJLypC0Z0E6JNK3ICcWlrKPTvKoL45EsxWjKEKpG1oslhkkmS9MnXvgF%2BNWmZ84lzEisDNkrRO1vSQWSCgbnXAZ9TM9s3xM7u1gl1QsckKCK%2FbqlxCYukWCcGPLcMvyu75oWJYPIVpXM8GpdkJ114ZRiDQmBf6ZyvriB%2BzKTtjfqa%2F%2BalFi6sbK0BuYB2W5JSr6eudGhx0RNSYTQTv96wH0Qwq4aPxAY6pgHVMI%2B77TXkIkP7EHh9qpiVlEFQSMWw%2BFkdgUXPJMKt%2BxzJ0zPmUqZqkWS7KEGY5fFHrfmovMX2Jp%2BHsa0GHQEzmdQgmNBbnJ0do4NlPF32WC%2BTjw08fI09mIQGTJ8izr7wptTQNXy9Rj7qzTUo4QtWWvcbBR0O%2FcUip1Pu9sxOhwMBJbmm%2FeTEnjWX9ZHAsfWyUs48AjPZTzpooirzKCBWICvS3j0W&X-Amz-Signature=97440b16b4518f64edb3145777e14db62fd54aba2112d78b5d2e5a58cd4c49b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2PJULJX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2BH48%2BlTbILzth22KI9sZBmcfq8Ufi6WgQdFkj%2BIBtCAiBfG0FQ7qXK8gMJ1AEUusBfRN3F0vdM%2BgOwMiWQXRwYlir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkoUv4ksSB5ttBZvsKtwDzu%2FuvTa2%2FmsKSp7fVzt8PCIkn05oTSyJHNB7wxq2RwRtd97beqYQ6MqbV0OwneYz8Llx1gP4pUux9EXwEqOgLOHHE05nzh%2Fw1Pu0rr6m%2B32ffJ8Vct2SB6hiECjJ8d6tt%2BY%2Fbh0kp9HW3L0G8Q4%2BN5qdajnOhyuPXIHQmq4apEmmJS2Sio%2Bh%2BOBtELQOUMmYdIyFGzmzxFC4tYge44ml2Dsdm2YLTZtDXgsADLuhOdJU8ZXPK12i%2FJvIjNwu%2FFQxiAHbocjcBjx4jkKmJ43ebfWiEWgWafE34UnscVbjIwP%2BT533KO8my8vYgdag1G6KOj77lhIIFML%2FVlvBsrqdIZx9MLSSGr8TzxMaIxdFxtxrqeYjv9ccvLh3On7aZXdzcKM877e7a3MhgIRdGsYXzqaH71%2FDFjQTXBMaJLypC0Z0E6JNK3ICcWlrKPTvKoL45EsxWjKEKpG1oslhkkmS9MnXvgF%2BNWmZ84lzEisDNkrRO1vSQWSCgbnXAZ9TM9s3xM7u1gl1QsckKCK%2FbqlxCYukWCcGPLcMvyu75oWJYPIVpXM8GpdkJ114ZRiDQmBf6ZyvriB%2BzKTtjfqa%2F%2BalFi6sbK0BuYB2W5JSr6eudGhx0RNSYTQTv96wH0Qwq4aPxAY6pgHVMI%2B77TXkIkP7EHh9qpiVlEFQSMWw%2BFkdgUXPJMKt%2BxzJ0zPmUqZqkWS7KEGY5fFHrfmovMX2Jp%2BHsa0GHQEzmdQgmNBbnJ0do4NlPF32WC%2BTjw08fI09mIQGTJ8izr7wptTQNXy9Rj7qzTUo4QtWWvcbBR0O%2FcUip1Pu9sxOhwMBJbmm%2FeTEnjWX9ZHAsfWyUs48AjPZTzpooirzKCBWICvS3j0W&X-Amz-Signature=4039adcf7bdbead5ec12c0532e2a4978a1cdf64ee040feb569c76651de34c5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NBF2MDG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQD5YJYcpyY6QPwaqb3vx3tPdSuvbozokn7JWut14efq6wIhALrd2%2BJp3qtdaThoCb1KC%2B24cOJ%2Fvr5tBTtKD7nna2thKv8DCEsQABoMNjM3NDIzMTgzODA1IgxT9r9BD8d5hrl1eckq3AO46j0r0unv0zNGEh8FpUFPL7U%2Fc1HJpQu7UtejZisELhjNVJxTVOMR8kkaOCnGV6rsqBCKcggC9x0%2FkrPWqArhNex89HcRUtRBrOQGHTx8wUKwpDEi8KDZYz42Sd9v9M418i4XG4TBy9sfR%2BWb4kE1fJiax%2BkuIN7VYhIWB1Q82ISEoPwBxc3UpXedBtfGOsNSmkq6ByrkkUCL9j9me3awNpfmrN%2Bwj7qt2gFAwg8RwfvoVpNJs%2BdJwvpc5hDs4eQU9me2kcGz7dDazLwSqGPY2pmZGivMGlE2MW1MP2Wn0pAU3TBdp2WJXgXfQVDtaEgYYpZpqzks1IPsp9nV%2FzVejjzWrueTUM8TZAMgOEnxOdXPYu0Z9oEqo%2F5sbOC%2Fc%2BVWOSyctHHERjL7d1NNlaQ2oGZW7isdZpUrorNZ0BXpLRDYUfQl%2BWiyEhMEs50mX8oQBP7m1CdOTcg2jUFRCoLa8fRN8H1rdOdv9yqGo4%2Fw0JDjA8rkPFJFeMmgS%2F%2BY%2FAyUdEaOJ7jQbAGWmHF%2BI0l3VV%2BB0fEZSPhdMsWyDkTnMZWX0jPcJLaFtrmDJC3Jf4SOqS0fE6VPxlr2o1gncSiDSvXbVZGxpCklNzqrCKGQAVowXfrjYbDDPJmwzjDtho%2FEBjqkATGLIRhs7y287NGqWd6QPhFS%2FfJqhpKzx%2BGqpFVm5sFz9X0pWCHnqxVft1hehPMlWjOKjAL42DtGFeQXP%2FiuTn29OtyrjKvhiRYioesiQFtBQfgpjGs7LaG43NY59xjCOcLu%2F%2BcnZFkr0K5Pt6JyrlKJLDHjf0C9RHu6y7LPKSCndAbv%2FIPpK4%2BXC0vpl4NlqWFyQBNNtK%2FOkYwkbw7%2Fx6FnB2mB&X-Amz-Signature=9824c2e629811ddd6fdfe5b4ec95f7eb214c488103d7c0623f60715cdcdb72fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZO4QVX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCEtvjuzqkF6UM5%2FJtZj4pYBBPEjrnQI3y4am1%2F2QUEgwIhAJ4pIuqOqOouViGHX3frIxLbabjhakHZw0jXVpAqpfpNKv8DCEsQABoMNjM3NDIzMTgzODA1IgwH8OLv3JsvUwC9%2Fk4q3AMvgceRA0rN4%2BNZXyxONuC87Pz%2BgQG5WG%2FeLFF8FdDNdkCc2YPpYr%2BjrYomyI09gy03UYC8Nxzj5fknRS7Y4R4vGrp%2FjCf5Thp%2BrzUOInUYIMPH9SWsQDkzL0tcuxRac3CwxjsdyzcxlQXlWyrcSpPTXjgFgjTIn6wCArt0%2BTNc2nREQn%2Bg8B6Rl%2BDpEt5H2unugxTq4LbFvUJHxqK1xICFE6mRyM15B%2FrYBUz7GiQu%2B3mWzUCzMkCD73Ds5cCEZ5io7AdCleDelafgC6nz8FfXvICAgK%2Fruet%2BmG%2F6zWCLm8Tu14frULH1srzrS0CvZZzNny4s0GgMwmgyvwl4%2B9AKtcR1%2FVY6%2F3AGz9mhdqx0LwkYI5eMbaIlT0om2%2FneYWPvh%2FkJ62%2BgdqzKtyDKNm0I1YWK%2FDqyf3iQNKh%2Fzto6760SAEh1Gzvns5X0F%2F5%2BNfT%2FuODmMiT182fDQERczv%2FUy3lMsV%2B3Z4FBVfWhRKhtn1Rp5F8I%2B%2BzWAPgP0YF02%2Bynh6gkqr0wi1cAtuRfOzxBZH%2BAqTqvRxSEi21GW39ToNmMcQModhc%2FNBefXvZppOZ2ddQ9xKAf1Q7652G%2F2Q6kaesDj6U35TodHS3TUh55lzgV%2FtyCwriiuUu2vjDhho%2FEBjqkAbFtGD20hzEsXN0VvI1hALsX3zaOQpXp9u%2FrxgxK5oYllU0v66%2FT7lDLzv1dJ%2Fwt1vrP4Hh1PD1sQDvjgYTucpzlPInhAvXA6V2Q7bUpkJsRLbUXTXP%2FuIYKRXrbb7pA9dnV56%2BEqqTTwg1M2ZuwHsi0PVJ1%2FYyZaYoWMmKLFV2azpfE6k6dci4uIzsADPvxvy2%2B8zflM7NaFwYrsKuGOW9FZ24V&X-Amz-Signature=deea149c48605eba1b81415323d877abcaa3d62e4c8c972a4a30a440be8ef5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2PJULJX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2BH48%2BlTbILzth22KI9sZBmcfq8Ufi6WgQdFkj%2BIBtCAiBfG0FQ7qXK8gMJ1AEUusBfRN3F0vdM%2BgOwMiWQXRwYlir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkoUv4ksSB5ttBZvsKtwDzu%2FuvTa2%2FmsKSp7fVzt8PCIkn05oTSyJHNB7wxq2RwRtd97beqYQ6MqbV0OwneYz8Llx1gP4pUux9EXwEqOgLOHHE05nzh%2Fw1Pu0rr6m%2B32ffJ8Vct2SB6hiECjJ8d6tt%2BY%2Fbh0kp9HW3L0G8Q4%2BN5qdajnOhyuPXIHQmq4apEmmJS2Sio%2Bh%2BOBtELQOUMmYdIyFGzmzxFC4tYge44ml2Dsdm2YLTZtDXgsADLuhOdJU8ZXPK12i%2FJvIjNwu%2FFQxiAHbocjcBjx4jkKmJ43ebfWiEWgWafE34UnscVbjIwP%2BT533KO8my8vYgdag1G6KOj77lhIIFML%2FVlvBsrqdIZx9MLSSGr8TzxMaIxdFxtxrqeYjv9ccvLh3On7aZXdzcKM877e7a3MhgIRdGsYXzqaH71%2FDFjQTXBMaJLypC0Z0E6JNK3ICcWlrKPTvKoL45EsxWjKEKpG1oslhkkmS9MnXvgF%2BNWmZ84lzEisDNkrRO1vSQWSCgbnXAZ9TM9s3xM7u1gl1QsckKCK%2FbqlxCYukWCcGPLcMvyu75oWJYPIVpXM8GpdkJ114ZRiDQmBf6ZyvriB%2BzKTtjfqa%2F%2BalFi6sbK0BuYB2W5JSr6eudGhx0RNSYTQTv96wH0Qwq4aPxAY6pgHVMI%2B77TXkIkP7EHh9qpiVlEFQSMWw%2BFkdgUXPJMKt%2BxzJ0zPmUqZqkWS7KEGY5fFHrfmovMX2Jp%2BHsa0GHQEzmdQgmNBbnJ0do4NlPF32WC%2BTjw08fI09mIQGTJ8izr7wptTQNXy9Rj7qzTUo4QtWWvcbBR0O%2FcUip1Pu9sxOhwMBJbmm%2FeTEnjWX9ZHAsfWyUs48AjPZTzpooirzKCBWICvS3j0W&X-Amz-Signature=e8a3c579e986f3cf56601646d5043d41bab29e6e6608db5afdffad4cf4c3d19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
