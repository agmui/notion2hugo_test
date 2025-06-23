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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNWTTT2G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDTLQm0TbGwgmBWk5cCmT6Zq6bBmIzOXzokuk5uU7feswIgY6%2FZaBnSyPhuviosWBRggRsr9K0JIucQoIO8rxQzwEgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzNBtx7RKz71ZHZ9CrcA4n3sVAY3i36ZnZF4gLwp2P94M7NcVXVptpmH4hRwL%2FpJ3F5DiXLpdyYOkzMVqKiZaBPLY%2FQN%2BMa6rFEmP%2F9jrhJP2cfFbzjaVwXWCXEOlCdzC0ItRKfUk5NmBt9%2BLbRBq%2BuAOJuBvf2EyaVKp29dqVGQUFL0hED1Oq5zhMIXwhN%2B4FOcVm3fFT3lrvkqyXym4tT3PbsNn7xpLzI82j4utX9F9Gvh6cVmaP3onMZbEu2Tz1uVopz3pL36ff5EU72r4gcLyY4Y8PbUW6ofbmQX%2BMLiZrqw1rQtL0O5X0BO5z9IH3RW%2FLxASzBx%2F4Qus1XA0xmt1nO4aEv6aVDMEamAw1JjuQwYicM25z1bN%2BwTkWx0lGafBRcoKRb4o9DbwMMQSybH2j2bIfkoKSlO3pP%2B6%2FIa4RreKg42pcx8hy1zelSDX%2F41MLw9Kz%2Bqslci200ljPDbJ0xO72rJ8Uuec%2Bx1wFczIcLTTeDEnZsSU9RVl6E9XEU03v81iL5IeOOdWIqc5vYn31HahTnyar0Yl0Qk12Khe2QrBSXmbRvTA8tkwPxrzHctGdjg2Hh2FFE%2F1GOE%2BWMHNxKjuzdqpkguqbC%2FizufEjGOtGjWYOCTfcgWaVSMAwMJHzVmdRqAY44MIan4sIGOqUBQ8GEwwwO7V1ALeHbqdSf%2BDPlrqPOc6Ur9k2qrN9FKB1XfPnjmLY5%2BhJmGHrJyuP1OcgZWtQ5f5%2FLEAzDK%2BaiHC8GRX6CaOLaW4j3GZPp2%2BAHuVheG2ox5gXaP1j04m3CcAdBJl7IvXjdJXbsIUF3O5auN9Nf43ZheNU5UiTJVQ8T%2B%2FG0hStl6ZbETP2Nmz8Dz%2Fwio%2Bf%2F0YjENgIYuGUJlqOoSRjM&X-Amz-Signature=e3ff1179793ba1f616d14e04ab5a75b684d1af5aa89106aaece24de2ca891d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNWTTT2G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDTLQm0TbGwgmBWk5cCmT6Zq6bBmIzOXzokuk5uU7feswIgY6%2FZaBnSyPhuviosWBRggRsr9K0JIucQoIO8rxQzwEgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzNBtx7RKz71ZHZ9CrcA4n3sVAY3i36ZnZF4gLwp2P94M7NcVXVptpmH4hRwL%2FpJ3F5DiXLpdyYOkzMVqKiZaBPLY%2FQN%2BMa6rFEmP%2F9jrhJP2cfFbzjaVwXWCXEOlCdzC0ItRKfUk5NmBt9%2BLbRBq%2BuAOJuBvf2EyaVKp29dqVGQUFL0hED1Oq5zhMIXwhN%2B4FOcVm3fFT3lrvkqyXym4tT3PbsNn7xpLzI82j4utX9F9Gvh6cVmaP3onMZbEu2Tz1uVopz3pL36ff5EU72r4gcLyY4Y8PbUW6ofbmQX%2BMLiZrqw1rQtL0O5X0BO5z9IH3RW%2FLxASzBx%2F4Qus1XA0xmt1nO4aEv6aVDMEamAw1JjuQwYicM25z1bN%2BwTkWx0lGafBRcoKRb4o9DbwMMQSybH2j2bIfkoKSlO3pP%2B6%2FIa4RreKg42pcx8hy1zelSDX%2F41MLw9Kz%2Bqslci200ljPDbJ0xO72rJ8Uuec%2Bx1wFczIcLTTeDEnZsSU9RVl6E9XEU03v81iL5IeOOdWIqc5vYn31HahTnyar0Yl0Qk12Khe2QrBSXmbRvTA8tkwPxrzHctGdjg2Hh2FFE%2F1GOE%2BWMHNxKjuzdqpkguqbC%2FizufEjGOtGjWYOCTfcgWaVSMAwMJHzVmdRqAY44MIan4sIGOqUBQ8GEwwwO7V1ALeHbqdSf%2BDPlrqPOc6Ur9k2qrN9FKB1XfPnjmLY5%2BhJmGHrJyuP1OcgZWtQ5f5%2FLEAzDK%2BaiHC8GRX6CaOLaW4j3GZPp2%2BAHuVheG2ox5gXaP1j04m3CcAdBJl7IvXjdJXbsIUF3O5auN9Nf43ZheNU5UiTJVQ8T%2B%2FG0hStl6ZbETP2Nmz8Dz%2Fwio%2Bf%2F0YjENgIYuGUJlqOoSRjM&X-Amz-Signature=3c5dcebf6076a62212f2fec0293fd18ddbdd1a395597157a61c1448156d8b636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNWTTT2G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDTLQm0TbGwgmBWk5cCmT6Zq6bBmIzOXzokuk5uU7feswIgY6%2FZaBnSyPhuviosWBRggRsr9K0JIucQoIO8rxQzwEgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzNBtx7RKz71ZHZ9CrcA4n3sVAY3i36ZnZF4gLwp2P94M7NcVXVptpmH4hRwL%2FpJ3F5DiXLpdyYOkzMVqKiZaBPLY%2FQN%2BMa6rFEmP%2F9jrhJP2cfFbzjaVwXWCXEOlCdzC0ItRKfUk5NmBt9%2BLbRBq%2BuAOJuBvf2EyaVKp29dqVGQUFL0hED1Oq5zhMIXwhN%2B4FOcVm3fFT3lrvkqyXym4tT3PbsNn7xpLzI82j4utX9F9Gvh6cVmaP3onMZbEu2Tz1uVopz3pL36ff5EU72r4gcLyY4Y8PbUW6ofbmQX%2BMLiZrqw1rQtL0O5X0BO5z9IH3RW%2FLxASzBx%2F4Qus1XA0xmt1nO4aEv6aVDMEamAw1JjuQwYicM25z1bN%2BwTkWx0lGafBRcoKRb4o9DbwMMQSybH2j2bIfkoKSlO3pP%2B6%2FIa4RreKg42pcx8hy1zelSDX%2F41MLw9Kz%2Bqslci200ljPDbJ0xO72rJ8Uuec%2Bx1wFczIcLTTeDEnZsSU9RVl6E9XEU03v81iL5IeOOdWIqc5vYn31HahTnyar0Yl0Qk12Khe2QrBSXmbRvTA8tkwPxrzHctGdjg2Hh2FFE%2F1GOE%2BWMHNxKjuzdqpkguqbC%2FizufEjGOtGjWYOCTfcgWaVSMAwMJHzVmdRqAY44MIan4sIGOqUBQ8GEwwwO7V1ALeHbqdSf%2BDPlrqPOc6Ur9k2qrN9FKB1XfPnjmLY5%2BhJmGHrJyuP1OcgZWtQ5f5%2FLEAzDK%2BaiHC8GRX6CaOLaW4j3GZPp2%2BAHuVheG2ox5gXaP1j04m3CcAdBJl7IvXjdJXbsIUF3O5auN9Nf43ZheNU5UiTJVQ8T%2B%2FG0hStl6ZbETP2Nmz8Dz%2Fwio%2Bf%2F0YjENgIYuGUJlqOoSRjM&X-Amz-Signature=02e5bcdf90bc0d0f7dd8a7e6d2c4c3d882079f8b620b6de65dcc75da5a2e3905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77MXHTS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGFomPdvTZ8AMfJhfJ4db9O51noLDHNFcsjnRiUcn63KAiEA6VRTWzyHYjqnN0cV%2FrNqgD84Cj0VO%2BgYwUazxnqSBlYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMGiKhFNJr6ukU5YyrcA7EAg0sV3s0yAMDTONCu0HraI7K4r0G368nFe8kDjCqmaCFb0zriCESRCGz2NgvtjU9Z%2FwicvRbG9It7HiYAM9aRN8nFsWpiTSnuO37DdOKU9dAsAvZoGyoc5awhNVJi%2B9Cw7awCK4s%2FE1eVC8%2BhNnXv8KXpPkOlnAPKGItCfjB%2Bsx6Juh8hzDmiLj9XlaXabkau3i4Burc86D%2FYU51d2l7WfCzlTlC6xIuASf0Ps4VXrMJcXSpWDFNngkyHNcG1YW6SbD%2B0fsxY8hNz7m22V8nhzNaoQvYxPN5pBK9ZF39GpCBwstm5rGyhtcuWrLgi%2F%2FoD%2F52kGeaNhPYsFMwyPCV1dZ2rhPG%2F22XuPFimPbOBVJkwwJhjzzdnR4LNYbD4vVyG%2B4VKw5nS0XxhWFukeLcbPmkhbOHGeK5KXHTylN5UtXCigUwWvrx%2FfXqa2SfoOxSHlBn6RzmDwtdl6y6NnNoS9yUsH4lvchJcNnxb57QW3soMdPi8iwG0NH7obniublr0WRTZQK95TiAwZj53VhdbXcz%2Fa4MCAx%2FuaRqHjv6%2BeeLUHwFzt1IDfZyWarwfwLxrGq%2FovIAOhZFJa13PN5i2IZ8%2F%2FiEVXhd%2FLW3PHmrPHB43jQkqwMT02qJjMIOn4sIGOqUBo6ESZ4HC7zE5rPWpaLBnSPDEjReTRc352fsMUpDwXkmiNbqFNqaQgqmxrxGf1miB8932WR6sXDb41eHOOaGGKEJOeGQdUlnzD6wyChy6P%2Br9cy1Lft4JSMrT3vqLNtpOf3mI4rcVWjAjeenANz0reoR%2FBAScTzMcN0mkt%2BVRBLh1Q5458YUbQjdmTMGj5Z26jVkhedoIkK98PqjxclCJxs45T5DS&X-Amz-Signature=c2ecd0a811a0c128fc4217b80818f9d5833586a2baced43a0c01b399eb71297e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T24QD2UZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA92%2FjNhmWRC51rp6QsGGbnnApv4GrANB4SGLjeMkyGBAiAdsbcpmiqBPmlzp%2BAYCfQRF5X48Bpk4TeQDO2h7ZvJnCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9wkMm3tydIMLmgzmKtwDO8oPY3bFuR8HBdYfVDscF4FfBh7YB21OcyQnD93Bn4ZpUVYJccI1r1s4e5sjY7f45sySYOzegjwSDPjqXzUo1IQw21LFLomTLdUeYHmTbbIs1ZlKemna5%2BOCW0PeSRrBir79axodSy3gSmPgmShiSSL7jk3HOuRjMwZMxaiCKpnxTugS7WUnkJMM5Cbq3uay6XDHRHEq81QyXWsD5xhGFQ0DkwxXEyhB7PIHXqx0RZ%2FVI3E0uuedwIpnv7lnHDiAsMZlu%2FIZXpbYV3UEwUpinns8DlRfX3YUyQvFD7qTpGUwTNHrIPoU%2FpGhCo1H0rpMMoVISxyW8SNy52DRhMN1cKiyYvHWylr9RKtIZQGQu%2F1UYVkU35WJcSWZYRTLBAxS3YJuVSFdz0q4RDfaJm2ts4VTbvv3roMM%2BLC5xy8dECfZdrKnenycxPLmSYNp1hgi8q7gH7A%2F2KyX%2FX3mNJm1cL%2FTrQ%2Fek9lAd%2BXi8UJ83hzqUt4PiDy7uscWYf02rE3XkraqVXDmzqC8lsB9FZ%2BukJ0qGssOX2tVk%2BcKSz2AGOgtsr0yyLyrQpBlslkw19tcCA%2BL2iufgkusvS%2FRmLUPdpnmc6b4%2FyqJMJmArXTqOUEerLC%2F8r4nfpGxbDYw9KfiwgY6pgEtlwLjGsdsedTeBQ0JKhJ3OVKqNpZhs8veaPryRRkggi7iWgUDPSx6LxsDNq95EpQshxjU4zjjscnvr9Ep%2F8SAGdvi7jTFhCQtYuCxo4itni1C2HvPjcd9lGt117a42dSzKWFRTTF%2BPV6hAq%2Bnd1FX8dvYgkCO5yf7KIpjKfRa6ugEmrSWUKfflsUHPwSJw974OjQvcUFIwL0Ycv6jQHi9fT4rmX4P&X-Amz-Signature=69b39194c716e38f648f18a75ab8c0fc73ab7288892ba925ebd7d17342895782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNWTTT2G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDTLQm0TbGwgmBWk5cCmT6Zq6bBmIzOXzokuk5uU7feswIgY6%2FZaBnSyPhuviosWBRggRsr9K0JIucQoIO8rxQzwEgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzNBtx7RKz71ZHZ9CrcA4n3sVAY3i36ZnZF4gLwp2P94M7NcVXVptpmH4hRwL%2FpJ3F5DiXLpdyYOkzMVqKiZaBPLY%2FQN%2BMa6rFEmP%2F9jrhJP2cfFbzjaVwXWCXEOlCdzC0ItRKfUk5NmBt9%2BLbRBq%2BuAOJuBvf2EyaVKp29dqVGQUFL0hED1Oq5zhMIXwhN%2B4FOcVm3fFT3lrvkqyXym4tT3PbsNn7xpLzI82j4utX9F9Gvh6cVmaP3onMZbEu2Tz1uVopz3pL36ff5EU72r4gcLyY4Y8PbUW6ofbmQX%2BMLiZrqw1rQtL0O5X0BO5z9IH3RW%2FLxASzBx%2F4Qus1XA0xmt1nO4aEv6aVDMEamAw1JjuQwYicM25z1bN%2BwTkWx0lGafBRcoKRb4o9DbwMMQSybH2j2bIfkoKSlO3pP%2B6%2FIa4RreKg42pcx8hy1zelSDX%2F41MLw9Kz%2Bqslci200ljPDbJ0xO72rJ8Uuec%2Bx1wFczIcLTTeDEnZsSU9RVl6E9XEU03v81iL5IeOOdWIqc5vYn31HahTnyar0Yl0Qk12Khe2QrBSXmbRvTA8tkwPxrzHctGdjg2Hh2FFE%2F1GOE%2BWMHNxKjuzdqpkguqbC%2FizufEjGOtGjWYOCTfcgWaVSMAwMJHzVmdRqAY44MIan4sIGOqUBQ8GEwwwO7V1ALeHbqdSf%2BDPlrqPOc6Ur9k2qrN9FKB1XfPnjmLY5%2BhJmGHrJyuP1OcgZWtQ5f5%2FLEAzDK%2BaiHC8GRX6CaOLaW4j3GZPp2%2BAHuVheG2ox5gXaP1j04m3CcAdBJl7IvXjdJXbsIUF3O5auN9Nf43ZheNU5UiTJVQ8T%2B%2FG0hStl6ZbETP2Nmz8Dz%2Fwio%2Bf%2F0YjENgIYuGUJlqOoSRjM&X-Amz-Signature=ac5a5c7ac7aeedecdc0fdbaf2fe0e7e76ed6654f0ea5da91bb2d948b58d0afee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
