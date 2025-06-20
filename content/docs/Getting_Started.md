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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3F42O5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2FHxiGgE4U9gbYpbFFlvaITkMCXNYkS0rn8cvd3xDcwIgR4CRzVzZQQFDkn%2FIsEj47Nn9o34I6RJBFm959OhSa1sqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJfWsuUWtdcEfftHyrcA2glnnCFsiCeOKjsN6zQWqREJy3j%2FV8I3EstHzJdg6Sq%2FWXkXH8wZxIKzdZrzmNIxQuZoVBhVwrOq90cXqn8KRBuAqiJWcpJn2fwuUG0ZIA%2FtZKAB5g%2BcYUJxPzbe3%2B5BuviblLUZmBuIi4bombTP2ilwNbUuDUrbGR0feUfAzf%2BpWUJS4jTQR0%2B479uIAah7dTrLl2f%2BKofLs41KWaONXBJaZxUwcg600je4DvmuoQm0kZgrOgZf%2BJ3swc5FbBpu%2BPc%2B%2FeFNWhcKvvldh%2B8Uu6zp5Kqb2rMOx4rQcAhlfqC7Lshob6CCugiYuBx3HBP0N4cZFBSIpRBSRvn6RATmGgA2XoPftEOxHs1MlNExUnWsaQ42b6MaBxfk%2FXPhaRbF%2BhQgCsR5gOsnHj5hND7LNVnWYlJyihWBn97ZO5Pp64w3ywPJLn%2FBQ0GvrFKoc%2FOt3srRv%2B8I0LOWeI1pC8aIDpbvE866Z6OFv36cvO4064WVeq3p%2Bl0AJH4UAhKqDtb6sIlF8QQYd61aUqxqudTyXDCsvSUhhKEBULIC6bt%2FDBy4ZP%2BAWDmq8Pyz2S7euRM8lserqSZW8wU0i4qNxWgaqfOkmKjJjxR3Cj93Uk8MJ3edscStLNSgoaFKkF9MKzx1MIGOqUBU5%2Bk6EElV0adWINXFNX05c8r35%2F1cmZHeSOeOGkd9xwU2%2FfOTrUpbjGz0G%2BuaEfieEBoiieN3Ud%2F17NAS2IBnOjEzJn%2F1%2F4e38VvxW1G57YLip4uoKyGuAePRQ6NbE5OG5yYQq385TNsqe3nx1WWS9O3XPcVOsRJbnSg7qe1RfUihulcOY6zd1Pg4XhHqH6exIoSHspERMf1uYXYN8EDR4wGmaY1&X-Amz-Signature=ff05502ca886ca32fce6ef3bb6a18423100cd4eecd607717ae09177193fab129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3F42O5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2FHxiGgE4U9gbYpbFFlvaITkMCXNYkS0rn8cvd3xDcwIgR4CRzVzZQQFDkn%2FIsEj47Nn9o34I6RJBFm959OhSa1sqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJfWsuUWtdcEfftHyrcA2glnnCFsiCeOKjsN6zQWqREJy3j%2FV8I3EstHzJdg6Sq%2FWXkXH8wZxIKzdZrzmNIxQuZoVBhVwrOq90cXqn8KRBuAqiJWcpJn2fwuUG0ZIA%2FtZKAB5g%2BcYUJxPzbe3%2B5BuviblLUZmBuIi4bombTP2ilwNbUuDUrbGR0feUfAzf%2BpWUJS4jTQR0%2B479uIAah7dTrLl2f%2BKofLs41KWaONXBJaZxUwcg600je4DvmuoQm0kZgrOgZf%2BJ3swc5FbBpu%2BPc%2B%2FeFNWhcKvvldh%2B8Uu6zp5Kqb2rMOx4rQcAhlfqC7Lshob6CCugiYuBx3HBP0N4cZFBSIpRBSRvn6RATmGgA2XoPftEOxHs1MlNExUnWsaQ42b6MaBxfk%2FXPhaRbF%2BhQgCsR5gOsnHj5hND7LNVnWYlJyihWBn97ZO5Pp64w3ywPJLn%2FBQ0GvrFKoc%2FOt3srRv%2B8I0LOWeI1pC8aIDpbvE866Z6OFv36cvO4064WVeq3p%2Bl0AJH4UAhKqDtb6sIlF8QQYd61aUqxqudTyXDCsvSUhhKEBULIC6bt%2FDBy4ZP%2BAWDmq8Pyz2S7euRM8lserqSZW8wU0i4qNxWgaqfOkmKjJjxR3Cj93Uk8MJ3edscStLNSgoaFKkF9MKzx1MIGOqUBU5%2Bk6EElV0adWINXFNX05c8r35%2F1cmZHeSOeOGkd9xwU2%2FfOTrUpbjGz0G%2BuaEfieEBoiieN3Ud%2F17NAS2IBnOjEzJn%2F1%2F4e38VvxW1G57YLip4uoKyGuAePRQ6NbE5OG5yYQq385TNsqe3nx1WWS9O3XPcVOsRJbnSg7qe1RfUihulcOY6zd1Pg4XhHqH6exIoSHspERMf1uYXYN8EDR4wGmaY1&X-Amz-Signature=ffa1fdc1e5cb1793512b532dce549091cbaea8076173644cd1597972d78b4e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3F42O5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2FHxiGgE4U9gbYpbFFlvaITkMCXNYkS0rn8cvd3xDcwIgR4CRzVzZQQFDkn%2FIsEj47Nn9o34I6RJBFm959OhSa1sqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJfWsuUWtdcEfftHyrcA2glnnCFsiCeOKjsN6zQWqREJy3j%2FV8I3EstHzJdg6Sq%2FWXkXH8wZxIKzdZrzmNIxQuZoVBhVwrOq90cXqn8KRBuAqiJWcpJn2fwuUG0ZIA%2FtZKAB5g%2BcYUJxPzbe3%2B5BuviblLUZmBuIi4bombTP2ilwNbUuDUrbGR0feUfAzf%2BpWUJS4jTQR0%2B479uIAah7dTrLl2f%2BKofLs41KWaONXBJaZxUwcg600je4DvmuoQm0kZgrOgZf%2BJ3swc5FbBpu%2BPc%2B%2FeFNWhcKvvldh%2B8Uu6zp5Kqb2rMOx4rQcAhlfqC7Lshob6CCugiYuBx3HBP0N4cZFBSIpRBSRvn6RATmGgA2XoPftEOxHs1MlNExUnWsaQ42b6MaBxfk%2FXPhaRbF%2BhQgCsR5gOsnHj5hND7LNVnWYlJyihWBn97ZO5Pp64w3ywPJLn%2FBQ0GvrFKoc%2FOt3srRv%2B8I0LOWeI1pC8aIDpbvE866Z6OFv36cvO4064WVeq3p%2Bl0AJH4UAhKqDtb6sIlF8QQYd61aUqxqudTyXDCsvSUhhKEBULIC6bt%2FDBy4ZP%2BAWDmq8Pyz2S7euRM8lserqSZW8wU0i4qNxWgaqfOkmKjJjxR3Cj93Uk8MJ3edscStLNSgoaFKkF9MKzx1MIGOqUBU5%2Bk6EElV0adWINXFNX05c8r35%2F1cmZHeSOeOGkd9xwU2%2FfOTrUpbjGz0G%2BuaEfieEBoiieN3Ud%2F17NAS2IBnOjEzJn%2F1%2F4e38VvxW1G57YLip4uoKyGuAePRQ6NbE5OG5yYQq385TNsqe3nx1WWS9O3XPcVOsRJbnSg7qe1RfUihulcOY6zd1Pg4XhHqH6exIoSHspERMf1uYXYN8EDR4wGmaY1&X-Amz-Signature=4daac9da87b630cf38f61b78c637685deb1db0c617234c70b8f94096b6a875c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XZBB64W%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67BH4NgPvsZC%2FfHuayjW4Q3cZ3%2FtT0alYM1DZl5E2aAIhAIHWgoTLCw7As1FArKwPzYMbfDiOhaFOjcqu%2BZeGZEbnKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKDA1gL3T0QKafGZUq3AP%2F%2B%2BMX1U5Iu0is1bzPb%2FRNl%2B4PFt1xbTyz1a2T0QMrV0%2BBpD7zigH1l6fb1rUUUcSXPeyedFUW6H95js3J5PMsHYbnBvgHBnguRp%2BWdQVXL4pZn4WGmAKCHtPDMdsF6PnNbln6U4uXjGnYiHIXtYcGe4%2BM1Bra2%2FJi%2FK%2FwF95enTe15dSbOPUi72dKhP%2FfUEmQzkDmL1SsL2erruT%2BF6wnDXh0a2nRObvXQqgRYuJlj1XSKC%2FFsW5kzSNA9F8wNjfqiNcM0bvkrEsns4wOa3MTueEniYYtfCrC05plXj3BqybeoveuyU284oxqKXyhQVfnAOKdEn%2F9ugjXwfOmIgtkJV6WOlA2S5oNzjejXtPe1Sp3a%2BoIBb3p7Qd6PQS9z2l8BwxGf32CqAjow1pu5BYa0iraSCITx7jtze3fjAwoCFxN3w9XAj6xB0dwylZomGRxIUsLnbddv3JmBU1jfRUTL18zIUHWsnuo0WRxk8khjwpZcJ6m6mrzNWWYrQxCXXQhRjFgnAAdpHhc9sSW%2FbzuGusqM9d8YYRpo%2B1O6gJV5CZQJ0dODS5WXgp3ez70ndkv9wBxWAEKu1YMrWvy%2B89oCGeW9hg5MH2XodZ1eeW4az8BENjP6Eys6eNKFTCX8tTCBjqkAYHeE9Ka8aCLmAcmZgN1mE%2BBg8%2FySjS1VTBcOESNEqwIfhsGSuJkAK5NjAOotKbLzKrj6%2BqObJ7YttKBA8bRBmbJr7s2eV72hrdn%2FDAT0UGrjEVoUacBKPtcSB5G0jw7EqAbV4FybiG0MVpaFzIllYaOkUZBOLq4uHKi5RDjUP6eQxLm0FED5d%2BvmxQwYKinalwXJBWq2z9RkWCkQ%2B%2F8RIJgqsXN&X-Amz-Signature=4fa4396bb3ab026a61f4063bab1e5f057fa79beecbbb133a5bd70bf804407a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKQS6BAN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2qmjgmFMI67bIJMVGp0KU4HSGZJoGZemOgGpoFE58iAiBu8%2FJUQjZsdCTfgRYGaNGlTnGv5HFno3NjVTo0UrKwQCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTO82FMUvswGb5l7KtwD9J0s9RdDsRFiuv3NpDiYb00e2aPTLLDc2wW3KYSRmeEzmlRBXtueHqJoJeVTRL%2F0Ccv3Wp9Lu1buQFDEwpa9RGixSdQNVrCPv9rFtpn5y1heR1x%2FyzNeNdKYikTXy%2FwukqLMU%2BTSOm3ep9%2BhRUlcEM1PZ7Bhg9lbs4tq%2B6iuG4G7AgZaHPIZEknF7XYjzR5DX6t%2BPMi%2Bfxefc8o1XHhhukxKrtKjPze1T2FPmAYPj%2B29ee1vYLPMBGzErEDCwcESbK4Lhk66UGFrMOBOVcJeke5tCS9yWDOJFN50D0BhvJh66S4bjZsXopLSnY3IEXkP7QBJsXSxrnSjmU6%2FyYLB9bcK5FTmC7AQ8QS2VEMP%2BghsJJ0i9Bdmic15L37LMbgE5GELm4LxD3NS12GXgRiwerc%2FhIfIuN%2Fs%2FMigkPccq%2F0vmG3Ml35J%2B9%2BziN8gaF3sMwfv%2FZZ%2BqInNt8fmmwdnWjFNwW6nRrobLa0YC%2FmOEWr2EeRJZ6qIjkuwwDAJOGcH4Zb8Xv3Fs1pNSMIHyeBt0EcAgFMRDrO0Mm%2FJ6FZ3RitBdzFKV7l9qz6rdOn2gN6D1R%2B45y3Xw2osclqa4ZyHEXNDY1itn16gPqR5SQhPMGp181ecrTJvf8eoKaQwlvLUwgY6pgHd6LyHJW8n4%2FnLOyuM4Xqvzk1FoSxZKcKdY1KWDj51gdJ1RJQaikSD%2BndYT9N%2FgDvFt2A9nbz42i42Y%2BVUmWjcH0rwlBOF2a612SwkXqmd6SO0TUZyVwMmrOA%2FmuCwV1v7SU2juTFR7in80yFNvKH0BGayrAIeFb%2FkOy7RcvboQedJeCZ3tLcKrZ1kitlvJuHpuLy7cIX6xjjg7BgCnChq792EbbZk&X-Amz-Signature=f1228988c6a6bf9852c85932f8d9ab81034296d01a77a845e5eef00c8e6bfd24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3F42O5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2FHxiGgE4U9gbYpbFFlvaITkMCXNYkS0rn8cvd3xDcwIgR4CRzVzZQQFDkn%2FIsEj47Nn9o34I6RJBFm959OhSa1sqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJfWsuUWtdcEfftHyrcA2glnnCFsiCeOKjsN6zQWqREJy3j%2FV8I3EstHzJdg6Sq%2FWXkXH8wZxIKzdZrzmNIxQuZoVBhVwrOq90cXqn8KRBuAqiJWcpJn2fwuUG0ZIA%2FtZKAB5g%2BcYUJxPzbe3%2B5BuviblLUZmBuIi4bombTP2ilwNbUuDUrbGR0feUfAzf%2BpWUJS4jTQR0%2B479uIAah7dTrLl2f%2BKofLs41KWaONXBJaZxUwcg600je4DvmuoQm0kZgrOgZf%2BJ3swc5FbBpu%2BPc%2B%2FeFNWhcKvvldh%2B8Uu6zp5Kqb2rMOx4rQcAhlfqC7Lshob6CCugiYuBx3HBP0N4cZFBSIpRBSRvn6RATmGgA2XoPftEOxHs1MlNExUnWsaQ42b6MaBxfk%2FXPhaRbF%2BhQgCsR5gOsnHj5hND7LNVnWYlJyihWBn97ZO5Pp64w3ywPJLn%2FBQ0GvrFKoc%2FOt3srRv%2B8I0LOWeI1pC8aIDpbvE866Z6OFv36cvO4064WVeq3p%2Bl0AJH4UAhKqDtb6sIlF8QQYd61aUqxqudTyXDCsvSUhhKEBULIC6bt%2FDBy4ZP%2BAWDmq8Pyz2S7euRM8lserqSZW8wU0i4qNxWgaqfOkmKjJjxR3Cj93Uk8MJ3edscStLNSgoaFKkF9MKzx1MIGOqUBU5%2Bk6EElV0adWINXFNX05c8r35%2F1cmZHeSOeOGkd9xwU2%2FfOTrUpbjGz0G%2BuaEfieEBoiieN3Ud%2F17NAS2IBnOjEzJn%2F1%2F4e38VvxW1G57YLip4uoKyGuAePRQ6NbE5OG5yYQq385TNsqe3nx1WWS9O3XPcVOsRJbnSg7qe1RfUihulcOY6zd1Pg4XhHqH6exIoSHspERMf1uYXYN8EDR4wGmaY1&X-Amz-Signature=39d2b5646fc49ee8b145b5c4609fa744bbb395bab21dceee47e0369942823955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
