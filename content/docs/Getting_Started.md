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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SSKC34U%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjd5yWTCF%2F2kK%2FOP9dVVnaNGkNavpa7bqQ6QATIIIReAiATeEiEBAeJf2J3IHN6R20Y%2FJ4TAmea89n1GQmtx8WsUyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHjS7hr9s%2FojQQ9MCKtwDKs7SlmptS142O25TbvNoinPIwm9%2FZeqn%2Fqsq7mYbsK7xJ7fzPX%2B6GbmyqFhgZoilP9a2s66OtPp0B6FgW22OBNbd%2Bm%2FPOehPGckyUxLOWk0dG2sPIe%2FEDw2wsBwkKZr5smgbsv0G%2Fhv4mEUh%2Far06OONvZKsqUsrStz2C4mpllOJWki8QpsODrmerp9xnDZA1v6Ne7B6M2Zrb2ym4qMpXejYhSM1ULLsiJkjJ3SpDnceM3nJwfK6kgaB%2FRNTY6D9UzUVTNGZz4XsYLNEJaBCrmqG7RT0mXn%2BWBJaV4%2FQkowgQxC8%2BKi03ujIz1zgKQuv%2FBLJa0v%2Fh5T1ISWShlYVYmd%2FDwB1NPq2NAPVP6RwiptutRFBmFq9jbBEBH6gKJS1eH1WbtbLEzseRNoQcRj9XToYTGYmeV%2Bo%2BOiyJq66Hopyc0Dp1CoLvglOjakn6IFPQrG73iUI9AEUgrLqBMhP0OTkSAI2ROyyXvrNE1hqRlK3crIeYylXsrg7ZS4eSixu28fkk%2BYuieAmA0GVEoRWdKQzAXyBZKeDzL13hhDIBH81jBZXCpmISDdoloDkYMDS3zWWmbrEnUrPH58aT5MfvUw08xhV32LaEN4FCvM3aZVxFU8xbgdPVnLKXgow7I2gvgY6pgG35OlEzmvJPdigT0owRT3gUO3H9oAUOjoXdCjWCQFOnRmVrX93JgJTIll3Zc9d%2BqP1jGvnfwjQj5qXD5IFmQWAYXVRW4aRsftuzhOlHpuMqnpIHCJaDCNIOQaqqyhwfbXfpZv6WUPOSDOAyn9%2B6%2FzgNDVgy58tRWHuunkKl2Iz%2FbWYNzzt2nc4iC2z8Gc50aaWwUhhlP64lv%2B6gVFvNlSYJ%2FPB0fEE&X-Amz-Signature=a57f96014c5c6497125da241170f507fe0a74288ef53370ff2f6761a880ef14f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SSKC34U%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjd5yWTCF%2F2kK%2FOP9dVVnaNGkNavpa7bqQ6QATIIIReAiATeEiEBAeJf2J3IHN6R20Y%2FJ4TAmea89n1GQmtx8WsUyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHjS7hr9s%2FojQQ9MCKtwDKs7SlmptS142O25TbvNoinPIwm9%2FZeqn%2Fqsq7mYbsK7xJ7fzPX%2B6GbmyqFhgZoilP9a2s66OtPp0B6FgW22OBNbd%2Bm%2FPOehPGckyUxLOWk0dG2sPIe%2FEDw2wsBwkKZr5smgbsv0G%2Fhv4mEUh%2Far06OONvZKsqUsrStz2C4mpllOJWki8QpsODrmerp9xnDZA1v6Ne7B6M2Zrb2ym4qMpXejYhSM1ULLsiJkjJ3SpDnceM3nJwfK6kgaB%2FRNTY6D9UzUVTNGZz4XsYLNEJaBCrmqG7RT0mXn%2BWBJaV4%2FQkowgQxC8%2BKi03ujIz1zgKQuv%2FBLJa0v%2Fh5T1ISWShlYVYmd%2FDwB1NPq2NAPVP6RwiptutRFBmFq9jbBEBH6gKJS1eH1WbtbLEzseRNoQcRj9XToYTGYmeV%2Bo%2BOiyJq66Hopyc0Dp1CoLvglOjakn6IFPQrG73iUI9AEUgrLqBMhP0OTkSAI2ROyyXvrNE1hqRlK3crIeYylXsrg7ZS4eSixu28fkk%2BYuieAmA0GVEoRWdKQzAXyBZKeDzL13hhDIBH81jBZXCpmISDdoloDkYMDS3zWWmbrEnUrPH58aT5MfvUw08xhV32LaEN4FCvM3aZVxFU8xbgdPVnLKXgow7I2gvgY6pgG35OlEzmvJPdigT0owRT3gUO3H9oAUOjoXdCjWCQFOnRmVrX93JgJTIll3Zc9d%2BqP1jGvnfwjQj5qXD5IFmQWAYXVRW4aRsftuzhOlHpuMqnpIHCJaDCNIOQaqqyhwfbXfpZv6WUPOSDOAyn9%2B6%2FzgNDVgy58tRWHuunkKl2Iz%2FbWYNzzt2nc4iC2z8Gc50aaWwUhhlP64lv%2B6gVFvNlSYJ%2FPB0fEE&X-Amz-Signature=ef0526a9b291bd533c77ea6905327e7273c3cfc1911ac0eec1ef43489e4ab2be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375VHUUA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxzKCwbgl%2BvwHpqKeF2bzi0%2FlI1l7sdcqCSQCRLCTHrAiEAqgVQLtVLwc4jQ1H9zT4g6RqXyhG%2BWXWIDAwfLEUdouEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDY5GgAHnCufsjT1dircA0XX5k%2BrdUrwiwgPauQjPI1keKZepNeZXvo2AyjP9QYCNiyFFIdzpAC7kVpxoLJwV6%2BnQKjWji42xFcI6FrjqrvkQop9a%2BqGI86oJb89IlHLnK%2FSdIK2E99Hd3vTwXXMJ2Tl8BI9RzkFcQAkxKjWXZaiyOE8Vt3pPoibGVymQooyCj8bPpnZRvGxT3IqcC4rZqELZJ0wB4Ei19u%2B5%2BuvCwEt9UEQFqV0pv8jqUK53F1L%2BoNW8dmq%2Fq6KPg3sz%2BuY1K7n3AI87L%2FiXuLpgM08%2BbWN0zb%2FS3ovaOWjSXzYrbHBj%2FODaOhwaS2mFx1XWc7OIRGMRwai%2BQT%2B%2FpaAiiMTh81KFtnTH6vU2FyT7Z6oz6012F1EeQzRF4vgmRz1pbWFBRfaRX7NCK%2FffsxKdm6oMGXYgAhMYxPxGT%2Figi2mhQ37J63foClL5p0sOKf6gA7ms8AyYYXwvF1apLm15xOOs%2B3tpGlHZyQywRQ2q8eVj7yKs%2FhtTSW1DbpovxM8e%2Bt2PsIj0jWskUm8e1jrqOdyOSsxc9qHFkWQwjp6V%2BLL2K9kYd6GlHTt7qwPZA9mgn8BN02vJ7FVbaULElXovvDtjg04ejf4ww%2Fu911vxyUjrmBIAYmtDYWuAC%2B1wldYMPaLoL4GOqUB%2B5JVKDHogb2vxNnmdxIZR3Y8MLOYeQNplehTI%2B%2BcFyXP9K9%2B%2FD6j4MLBxwT6gf8GH81%2FA4diOHiBOXelDeMCPts%2FKfWGbAyBpLxFqa%2BGk9HuWYMl%2BPGsqst5TGI1%2BEiUjrdSNV5dFLI1AZ%2FPnnsy8KI0PiPCpeFCksj1Jc078yjPode30PEn75mMU2v7cMJhmTpwknvZu7fvUxQh0ai0zwVtmG1%2B&X-Amz-Signature=be7b6ce3f4fb61c1beeb683cf76437917b52b90c05f0ecae9330648701b0089a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X552A4Z%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9T0dhlBWj8nngWwmWPR9MqPSthbxdK0WYQTrgpTF0IAiBXS4NKSb4KFJ%2BTnMsHyOLUqLwGctsSg9CbViZ12e7Ndyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM8Mjj%2FBNrSPJfliH8KtwD1h6FTfOEer0tSJMAcIEqPI1aP1OsOUPy%2Btb9Dae7RfSiNHEXOIbizuua8yp4ts5cQxNms1hXTloRyBYfbFZfM6Ixn0i6kE2AOFwkGFQm%2FOFGcr7gk%2B%2BMpCWGyPGj8dbI0vYbxL52PtN75fO9EYed23x0icR4X1h70Fr%2F4puSMZia1SAALM9uv9jpd2eLP2j2a0X9cS7pI1DvSjAT4MDyY3SwOGQ8Nbxc5PFgEtjz1opYZzlAX%2B%2FhcFDUGfDnErer3axJTqtRhBMN6kBL0wg9JGb2cgykr%2B87GWLzInbWM1OG1G9IrFDTnrowH7iigJUf274DhJMJijfNlsqCQaAOrK2YGUKNlyrTT3K65EoqibSK6OdSaE7IMM2kcNFJfz3omNKzvQJXB6Bh8GjzZCW%2Filgq7Vxz%2BrPri51IVe64qq1fmymls2TxNjw56ZqhsTYJkwHPheQSugZIbHnW5Oa9E%2BL4GDbMqPksjHg4uE02g9g8STugM84R8dhpkkTfOZ1N%2BLkXGDD3iDH6OPUMWrbU89b61J5o9ETzByDnIdl8mOA5Gd5TR2%2BhlYkaSIR3sZHFqyrdrmBYVEbiPNdENAuzN42TnTerZ5HEZnTqhY6yQjMZjteU%2BGSgdo3AJJsw9YugvgY6pgGwrh2i5V8YldJzRcZA6DL0JNbDcwZMugCYDd9f98wkCZqtkwqG%2FRg4tfZiV1WBXo1e3C827yi%2BGCLADx7QK7jQVRxb5SUF%2FMNwoUBQDq4JZ6NA6mg8HHG%2BrPrbLWnDmYpmzHVf4XyXPT%2BnmAgEMROZ8odpceZL123ahwSIooRimeu5xkr6IcjJW%2FjZIAYyReYRYcCC26S%2BJjjMXW5ZRQUHb%2B3F89N0&X-Amz-Signature=68b125a6c64bd18f69d7633f271e2da7b75956452ca85608790c7860cbf3ee6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SSKC34U%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjd5yWTCF%2F2kK%2FOP9dVVnaNGkNavpa7bqQ6QATIIIReAiATeEiEBAeJf2J3IHN6R20Y%2FJ4TAmea89n1GQmtx8WsUyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHjS7hr9s%2FojQQ9MCKtwDKs7SlmptS142O25TbvNoinPIwm9%2FZeqn%2Fqsq7mYbsK7xJ7fzPX%2B6GbmyqFhgZoilP9a2s66OtPp0B6FgW22OBNbd%2Bm%2FPOehPGckyUxLOWk0dG2sPIe%2FEDw2wsBwkKZr5smgbsv0G%2Fhv4mEUh%2Far06OONvZKsqUsrStz2C4mpllOJWki8QpsODrmerp9xnDZA1v6Ne7B6M2Zrb2ym4qMpXejYhSM1ULLsiJkjJ3SpDnceM3nJwfK6kgaB%2FRNTY6D9UzUVTNGZz4XsYLNEJaBCrmqG7RT0mXn%2BWBJaV4%2FQkowgQxC8%2BKi03ujIz1zgKQuv%2FBLJa0v%2Fh5T1ISWShlYVYmd%2FDwB1NPq2NAPVP6RwiptutRFBmFq9jbBEBH6gKJS1eH1WbtbLEzseRNoQcRj9XToYTGYmeV%2Bo%2BOiyJq66Hopyc0Dp1CoLvglOjakn6IFPQrG73iUI9AEUgrLqBMhP0OTkSAI2ROyyXvrNE1hqRlK3crIeYylXsrg7ZS4eSixu28fkk%2BYuieAmA0GVEoRWdKQzAXyBZKeDzL13hhDIBH81jBZXCpmISDdoloDkYMDS3zWWmbrEnUrPH58aT5MfvUw08xhV32LaEN4FCvM3aZVxFU8xbgdPVnLKXgow7I2gvgY6pgG35OlEzmvJPdigT0owRT3gUO3H9oAUOjoXdCjWCQFOnRmVrX93JgJTIll3Zc9d%2BqP1jGvnfwjQj5qXD5IFmQWAYXVRW4aRsftuzhOlHpuMqnpIHCJaDCNIOQaqqyhwfbXfpZv6WUPOSDOAyn9%2B6%2FzgNDVgy58tRWHuunkKl2Iz%2FbWYNzzt2nc4iC2z8Gc50aaWwUhhlP64lv%2B6gVFvNlSYJ%2FPB0fEE&X-Amz-Signature=a7b5c559deef655ff620167b44c12c6bb7669ef2a433de9ecef976073c620bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
