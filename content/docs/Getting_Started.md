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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR2URLDC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWwb%2Bhh%2BGwL8y0XH%2FB3Ztu%2Fd7tjPV5qA6icz%2BZRdQBXwIgCgx8kWzmpkQDHopXAz8j72v%2BGvDBeSh8O05vbwSxxaIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9Po1PYaA7%2BzjOK5yrcA8%2FzxWGQ%2FZUn7UxqOqhTQQEHPK1bJgQohgMohEHblVy8YLwCX8ah0fDYJTDppGiHIEJo3N%2FWTRBsYBtUGTQwedLNKe1LU8aj6Q8T9WAbgu00jTmuSRJQnVRYoJr5fOmR4BhCagLEyVJlo%2F3XlZmzD4svjFfpCNe3YnXQhshwHry5xjPoHaQKAbJessN5uXmqBa7D%2BwE3xODBEJvgPVlEkczoQg5XpzpY24VB3JOkhcH0U84BWMhq%2Fe4N%2FTcdVwjh16tu4sDlQp7ufybGfqmUu0jqSV%2BdWKnuuMk8oYvVV9d6ZMFj7VLS%2BzpkZEy4hDY6MndshsG%2F%2BJAKZoBs2YJPefaDr0yRknL0O07ojiCv0YRFrgEySmmLLg3S66wL9KlG%2F6hzUdWuqOOl0n5mOHV4eysuiAOcOVpgFXrPIbytbzyax5VRxZURD0KPpJVSei6EjSwklXryAND4rPLTUsQ1u1h1vKmTaE9LUBnrjm0Sy047EsC6xDurtVgAgP0MIu4%2FfwMg%2F8J2XCqPG7jTlxgUyy3R0c3DrETj1XaRX8BE1mcnPeXVh%2FkOHKO6oChZRAw49KU8dgbhwYoBc2WT494LBiQk46ZZugOLYQPvV%2BX%2FVq1qdqaaZ5JHC3mxMzK8MJnM5cEGOqUB3W8JMZSYua6844vNc%2B%2FRHwUmbbRULKIXeB4IOhid%2B0eX6HSsa%2F%2FUIDv5yxvWAvtO06YMOEOQ8i0PCff34gisWDyfyaPD8fgsVnR1uaWRh6MaEWA3ONuyZpAWrSQY9GkBiR6UX%2FNxM0t7Algw0vsfJD6%2F7tv6ZKTuep6nUQsi0f1TVtcGQVWD0EQU7ObLI1t%2FOYXJ8wtRZYqmW6CTYz%2BSj3Z0X9lq&X-Amz-Signature=01338fb8c24763cdfa7809776a720965425d3b09c64d2777321f9a70fea21411&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR2URLDC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWwb%2Bhh%2BGwL8y0XH%2FB3Ztu%2Fd7tjPV5qA6icz%2BZRdQBXwIgCgx8kWzmpkQDHopXAz8j72v%2BGvDBeSh8O05vbwSxxaIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9Po1PYaA7%2BzjOK5yrcA8%2FzxWGQ%2FZUn7UxqOqhTQQEHPK1bJgQohgMohEHblVy8YLwCX8ah0fDYJTDppGiHIEJo3N%2FWTRBsYBtUGTQwedLNKe1LU8aj6Q8T9WAbgu00jTmuSRJQnVRYoJr5fOmR4BhCagLEyVJlo%2F3XlZmzD4svjFfpCNe3YnXQhshwHry5xjPoHaQKAbJessN5uXmqBa7D%2BwE3xODBEJvgPVlEkczoQg5XpzpY24VB3JOkhcH0U84BWMhq%2Fe4N%2FTcdVwjh16tu4sDlQp7ufybGfqmUu0jqSV%2BdWKnuuMk8oYvVV9d6ZMFj7VLS%2BzpkZEy4hDY6MndshsG%2F%2BJAKZoBs2YJPefaDr0yRknL0O07ojiCv0YRFrgEySmmLLg3S66wL9KlG%2F6hzUdWuqOOl0n5mOHV4eysuiAOcOVpgFXrPIbytbzyax5VRxZURD0KPpJVSei6EjSwklXryAND4rPLTUsQ1u1h1vKmTaE9LUBnrjm0Sy047EsC6xDurtVgAgP0MIu4%2FfwMg%2F8J2XCqPG7jTlxgUyy3R0c3DrETj1XaRX8BE1mcnPeXVh%2FkOHKO6oChZRAw49KU8dgbhwYoBc2WT494LBiQk46ZZugOLYQPvV%2BX%2FVq1qdqaaZ5JHC3mxMzK8MJnM5cEGOqUB3W8JMZSYua6844vNc%2B%2FRHwUmbbRULKIXeB4IOhid%2B0eX6HSsa%2F%2FUIDv5yxvWAvtO06YMOEOQ8i0PCff34gisWDyfyaPD8fgsVnR1uaWRh6MaEWA3ONuyZpAWrSQY9GkBiR6UX%2FNxM0t7Algw0vsfJD6%2F7tv6ZKTuep6nUQsi0f1TVtcGQVWD0EQU7ObLI1t%2FOYXJ8wtRZYqmW6CTYz%2BSj3Z0X9lq&X-Amz-Signature=c5337c9e37f64bdc6a41835863473b1ad8835d30ae8101ff70503eb798b38c03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR2URLDC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWwb%2Bhh%2BGwL8y0XH%2FB3Ztu%2Fd7tjPV5qA6icz%2BZRdQBXwIgCgx8kWzmpkQDHopXAz8j72v%2BGvDBeSh8O05vbwSxxaIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9Po1PYaA7%2BzjOK5yrcA8%2FzxWGQ%2FZUn7UxqOqhTQQEHPK1bJgQohgMohEHblVy8YLwCX8ah0fDYJTDppGiHIEJo3N%2FWTRBsYBtUGTQwedLNKe1LU8aj6Q8T9WAbgu00jTmuSRJQnVRYoJr5fOmR4BhCagLEyVJlo%2F3XlZmzD4svjFfpCNe3YnXQhshwHry5xjPoHaQKAbJessN5uXmqBa7D%2BwE3xODBEJvgPVlEkczoQg5XpzpY24VB3JOkhcH0U84BWMhq%2Fe4N%2FTcdVwjh16tu4sDlQp7ufybGfqmUu0jqSV%2BdWKnuuMk8oYvVV9d6ZMFj7VLS%2BzpkZEy4hDY6MndshsG%2F%2BJAKZoBs2YJPefaDr0yRknL0O07ojiCv0YRFrgEySmmLLg3S66wL9KlG%2F6hzUdWuqOOl0n5mOHV4eysuiAOcOVpgFXrPIbytbzyax5VRxZURD0KPpJVSei6EjSwklXryAND4rPLTUsQ1u1h1vKmTaE9LUBnrjm0Sy047EsC6xDurtVgAgP0MIu4%2FfwMg%2F8J2XCqPG7jTlxgUyy3R0c3DrETj1XaRX8BE1mcnPeXVh%2FkOHKO6oChZRAw49KU8dgbhwYoBc2WT494LBiQk46ZZugOLYQPvV%2BX%2FVq1qdqaaZ5JHC3mxMzK8MJnM5cEGOqUB3W8JMZSYua6844vNc%2B%2FRHwUmbbRULKIXeB4IOhid%2B0eX6HSsa%2F%2FUIDv5yxvWAvtO06YMOEOQ8i0PCff34gisWDyfyaPD8fgsVnR1uaWRh6MaEWA3ONuyZpAWrSQY9GkBiR6UX%2FNxM0t7Algw0vsfJD6%2F7tv6ZKTuep6nUQsi0f1TVtcGQVWD0EQU7ObLI1t%2FOYXJ8wtRZYqmW6CTYz%2BSj3Z0X9lq&X-Amz-Signature=4c4876d59d30fb154234189bbfa76967023b24d474b4665c0d8635b043406395&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XC45QB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3IIJTB1s1agvGvNnAhdgYUrzigYPDQkcGjv7hdmGy5AiB91CkQ3oELtNRquUhUA3po4si%2Boet3Grwt9qB%2Ff0WMtyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXokriRdnBOdDNPKzKtwDJ7Tt0HmL6FmlKShx6LFv3sbrgIFV28N%2BfvSDFyaS%2BYQiVI5EC9EfAePXeeK27GvAZlWYwuUKDLHf0%2B1vEM%2B%2FN2ClxECim%2BgNrqvrFlEGdZQ2YLmdVADhDVeVVriKMmV6zSOR8taQ5GfsH7EhHWCvoVD3%2B9P9pICM629skiuCpJKo0xtOePhufTU0DzbXc4rM2bLNREd%2FNQsWM5m9%2FaSuEpAi72DevNIH2JSsIHhavw8Nx9p7Gd6Tup10fXvQk0RZ8yPDgJjDXda4P%2Fi5snnji4jsSjC%2BjGNOqYFOyQ8deO5VQXKTyH%2Bvr8NF8vGZjSrTx%2FU%2BcsyyaY1g4P8J2Deq%2FwevTbIaanFuM4%2FZTW5g7zofJUVlDefcy2VCoqvUbGMQsAVC%2BBoMN1dErbdraYjivQbNDEXg%2FefMnc8ekcRBNsW8QZRpVkZ6j75a2OFPjCecGFbYuIprWgn6vXVwpYHT%2FSD3Anc1cpeo2K2GnKpOHVq9FT%2Fk5xgxNjAOUZGENBKNfyiC51NGcNaICjp2Inp8eQzBCv%2FIIAuMOGckJMhPGRLV7TQaiaBy7Sse%2B7mgzO8VjXf33x9ePCFRxWPVDdM1c8z28GlorpjaJDEZQZqwLhf9b4SlXhiKvKq0Gggw9MvlwQY6pgFkP2%2FQeZL2N5tcJ9Ed5AXulPA0%2B1Aw5%2FnQYJPY%2FqztnOjU2j2BnJN8%2F1SC6fhBKwvrAfO7ofLpuLPvR4ZN%2B79ETqGC2v32vVVR0OcS0k4cBRoADa5eIMjYVQyUhoholkTLOzinJCUfvSO5gTkRWOWN6I0j4yQZkkV3NSUPb%2B%2FU5uz%2F29%2FksYtIhX9d949Q6WrSS0ch8jF05GdOqkJZzld2rmAhhSM6&X-Amz-Signature=b97aa17f29a42181bf8215b00b9c7bee59194e3ea6aad87cdebb91180faba075&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCROUZP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2%2BSVagdgslnQQn0gmVb1ex8Iq5hZF9zzZhNhbLYkmZAiA%2B7Ghs3Lt1jOEFSr4WE5vtM5kPLTu8MI3vzynURb41diqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMryrtndExTE3pzzcGKtwDqKlQA8NcgL0g4nIu5V0eysWxVqENT7J%2Bh3MKJPU5o%2F0ODte7457fqcoNuGEs6nKYz1vKJreVvCUXUx3Lk%2FJPXmX%2BAUcCaXk2D0Znu%2BUWNIWAwE0zgPkHH5XTR21tKhtSsI5Bgxz8EyahWOj%2FeTr1UTa5zNbDXMaszusVJlRB%2Bw4eJNyWr%2FZPynkM2cSO%2FU6SpIYe5ePE5SDEcLjzBaTo%2BUJZqdlkF%2F3xsE3usXgB57Q3VNFy4sQ%2BXU9ElET7agSf57JERZP8DqySN0ri6FoGeaShQyv7bd5rY9Nr0XZi73X65lo%2FoWSDVfacsxRo1%2Bgn9z4FwNSSzu9BsrepmP9pquxKb4m8M3GvacmPsynUwSoM4%2FW%2F47%2BxLKqgOKxd%2Fi9e%2BS35zwJ6mU7kU2SRwCEnomrlgSfyBkdB755eiZxj8xvPDPd8LOIF4SvMpkfLtyEvWhjcsffuRqGzgdL8X09H2wZuumiOCH66h41h3%2F4J4UOKsR7s9%2F8tmvigvlOw4%2BTtZaGSEL4kufqGbpPriL9rUzJ2ZmF9gWwPiD9TD64ew6Yu9Vluz%2Bw24%2FjFj%2BCbn0lvmw4r09zhsiwg66Sw8zW%2BYR0teKC2xT7gVQxqw7nhKRKpJ%2F5N4I8K2N5qlOwwl8zlwQY6pgEgQK2%2FlTELFMV%2FpxLMY2Drc%2FHxwC3b5FLhjP2PIKTCvW33J9fCk4NKB51lc62UTuLrkt8hLCzXr%2FHYFb%2FZdz54cUb1VGSDwymD7Koab6gmYlQ%2BFQwGv8B%2FInRpijJejBclPirvQ%2BBxdYHhjYZ3dD3uhnxsJ0nivkJKRyzDLswN1TlB1B5H62GjQaKg%2BgneLwDUSnl62HaSG2OxQejvGrNET06Veo6W&X-Amz-Signature=fbccb74055cc0446b15616df6a81f0c14f6f3b578ce008194a4deb4b00c618a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR2URLDC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWwb%2Bhh%2BGwL8y0XH%2FB3Ztu%2Fd7tjPV5qA6icz%2BZRdQBXwIgCgx8kWzmpkQDHopXAz8j72v%2BGvDBeSh8O05vbwSxxaIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9Po1PYaA7%2BzjOK5yrcA8%2FzxWGQ%2FZUn7UxqOqhTQQEHPK1bJgQohgMohEHblVy8YLwCX8ah0fDYJTDppGiHIEJo3N%2FWTRBsYBtUGTQwedLNKe1LU8aj6Q8T9WAbgu00jTmuSRJQnVRYoJr5fOmR4BhCagLEyVJlo%2F3XlZmzD4svjFfpCNe3YnXQhshwHry5xjPoHaQKAbJessN5uXmqBa7D%2BwE3xODBEJvgPVlEkczoQg5XpzpY24VB3JOkhcH0U84BWMhq%2Fe4N%2FTcdVwjh16tu4sDlQp7ufybGfqmUu0jqSV%2BdWKnuuMk8oYvVV9d6ZMFj7VLS%2BzpkZEy4hDY6MndshsG%2F%2BJAKZoBs2YJPefaDr0yRknL0O07ojiCv0YRFrgEySmmLLg3S66wL9KlG%2F6hzUdWuqOOl0n5mOHV4eysuiAOcOVpgFXrPIbytbzyax5VRxZURD0KPpJVSei6EjSwklXryAND4rPLTUsQ1u1h1vKmTaE9LUBnrjm0Sy047EsC6xDurtVgAgP0MIu4%2FfwMg%2F8J2XCqPG7jTlxgUyy3R0c3DrETj1XaRX8BE1mcnPeXVh%2FkOHKO6oChZRAw49KU8dgbhwYoBc2WT494LBiQk46ZZugOLYQPvV%2BX%2FVq1qdqaaZ5JHC3mxMzK8MJnM5cEGOqUB3W8JMZSYua6844vNc%2B%2FRHwUmbbRULKIXeB4IOhid%2B0eX6HSsa%2F%2FUIDv5yxvWAvtO06YMOEOQ8i0PCff34gisWDyfyaPD8fgsVnR1uaWRh6MaEWA3ONuyZpAWrSQY9GkBiR6UX%2FNxM0t7Algw0vsfJD6%2F7tv6ZKTuep6nUQsi0f1TVtcGQVWD0EQU7ObLI1t%2FOYXJ8wtRZYqmW6CTYz%2BSj3Z0X9lq&X-Amz-Signature=a86b51feb188a01b384952ffd30b44d7768a8f07dd1da87a52cdc4bfeaca6738&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
