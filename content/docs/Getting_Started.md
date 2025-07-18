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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZB7XMW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC5yiSG0j4oXoUtMEIZMkidytWSXhoUEkxo0j2u29f%2FXQIgVElhibB%2Fj7aB3KJ3x9DN%2B%2FSigHyiUqC42kEnjvc3hacqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvaCRc4hQgLu1mJWyrcA93pXQMQclGQ91VdgNUeDbvraUZnc2dGwHoe54IfjqgPwodJ9m2KpF%2F%2FnIyPl8goUIsFxxk01FanGti%2FpR0CZLlee6VG9Iv6WUh1mVI7v15oLT4MhDPxBdcAINcUAmOJ6TfRHwVXdCPN%2BoztgeQq6DlfuwbM7mH9blX3pOGCTTFxkku3VxNSn9NXAraySfvmiGKKAUMkL6Lw7VtKcyhDWcAJMStEIzL%2B2Hje%2B5i%2B2KKdJhuHcuyyRy5oyoHOq7C72FHhua0xK%2BOjZpqQboQMwdS%2FmGJ%2FdErwLUYP4Ch8GFwu3%2F%2BpzP57Tj9OtzA00ygagWSAJuNUBg1As1f1akhntTAlMwoPF9QlCe0qOOG7xyr7y7KhtAa%2Bmp%2Ff%2FF%2FjE4aRtkj8laUShsWYFHJmyaHrAe6iKrA8GZ%2BmasHY9jxF3YeCt%2BDhlLDeZ6ORicuetK6KdMTH3Id2DMzFeUKIwXMfRlDVZNsvLyr46yWMg%2F7C4R1aM3KBrfBm7LpKTeDcEPV7OnSWT7nTIuQ949rYdCA2kXc2mDUy6QPY30%2FrErrWV821GsDZwXsK0T6pE%2BtmIWfzJ5rlSkYvNvw6Wo%2B2doceN8T0GHiAywJBX%2Fdy8j%2BHuPrn2BWXkYTP%2FMrXSL8sMNrP6MMGOqUBsocgLpRlD9nMVpQ857BNVUBnZmd08QxiMPPI4nf9xNDpCcim34ogEONAP1ZlMQW6aq0DywsfxrcUnxpuwTyE0oOPJoZH9OaiJeLJ1bY9id5pyZHfu%2FHcPyjBNlOTg85roBmnE9SAarZzu7wnvrZWuatOkM80HTuNJPuXkts652qFTlA1LG%2F1xrXSgQb0ocsv6ZD4LLc71S8JP1ILTQ%2FbgsE653hm&X-Amz-Signature=876ee54c4a746e110f4b0cc1b785e1067a38b2b4f8d0dfb1786f5ee77992e954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZB7XMW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC5yiSG0j4oXoUtMEIZMkidytWSXhoUEkxo0j2u29f%2FXQIgVElhibB%2Fj7aB3KJ3x9DN%2B%2FSigHyiUqC42kEnjvc3hacqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvaCRc4hQgLu1mJWyrcA93pXQMQclGQ91VdgNUeDbvraUZnc2dGwHoe54IfjqgPwodJ9m2KpF%2F%2FnIyPl8goUIsFxxk01FanGti%2FpR0CZLlee6VG9Iv6WUh1mVI7v15oLT4MhDPxBdcAINcUAmOJ6TfRHwVXdCPN%2BoztgeQq6DlfuwbM7mH9blX3pOGCTTFxkku3VxNSn9NXAraySfvmiGKKAUMkL6Lw7VtKcyhDWcAJMStEIzL%2B2Hje%2B5i%2B2KKdJhuHcuyyRy5oyoHOq7C72FHhua0xK%2BOjZpqQboQMwdS%2FmGJ%2FdErwLUYP4Ch8GFwu3%2F%2BpzP57Tj9OtzA00ygagWSAJuNUBg1As1f1akhntTAlMwoPF9QlCe0qOOG7xyr7y7KhtAa%2Bmp%2Ff%2FF%2FjE4aRtkj8laUShsWYFHJmyaHrAe6iKrA8GZ%2BmasHY9jxF3YeCt%2BDhlLDeZ6ORicuetK6KdMTH3Id2DMzFeUKIwXMfRlDVZNsvLyr46yWMg%2F7C4R1aM3KBrfBm7LpKTeDcEPV7OnSWT7nTIuQ949rYdCA2kXc2mDUy6QPY30%2FrErrWV821GsDZwXsK0T6pE%2BtmIWfzJ5rlSkYvNvw6Wo%2B2doceN8T0GHiAywJBX%2Fdy8j%2BHuPrn2BWXkYTP%2FMrXSL8sMNrP6MMGOqUBsocgLpRlD9nMVpQ857BNVUBnZmd08QxiMPPI4nf9xNDpCcim34ogEONAP1ZlMQW6aq0DywsfxrcUnxpuwTyE0oOPJoZH9OaiJeLJ1bY9id5pyZHfu%2FHcPyjBNlOTg85roBmnE9SAarZzu7wnvrZWuatOkM80HTuNJPuXkts652qFTlA1LG%2F1xrXSgQb0ocsv6ZD4LLc71S8JP1ILTQ%2FbgsE653hm&X-Amz-Signature=4e0aee1359b35c8575403a193db80cac31e08aba8e164b7d61761c8046fcf0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZB7XMW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC5yiSG0j4oXoUtMEIZMkidytWSXhoUEkxo0j2u29f%2FXQIgVElhibB%2Fj7aB3KJ3x9DN%2B%2FSigHyiUqC42kEnjvc3hacqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvaCRc4hQgLu1mJWyrcA93pXQMQclGQ91VdgNUeDbvraUZnc2dGwHoe54IfjqgPwodJ9m2KpF%2F%2FnIyPl8goUIsFxxk01FanGti%2FpR0CZLlee6VG9Iv6WUh1mVI7v15oLT4MhDPxBdcAINcUAmOJ6TfRHwVXdCPN%2BoztgeQq6DlfuwbM7mH9blX3pOGCTTFxkku3VxNSn9NXAraySfvmiGKKAUMkL6Lw7VtKcyhDWcAJMStEIzL%2B2Hje%2B5i%2B2KKdJhuHcuyyRy5oyoHOq7C72FHhua0xK%2BOjZpqQboQMwdS%2FmGJ%2FdErwLUYP4Ch8GFwu3%2F%2BpzP57Tj9OtzA00ygagWSAJuNUBg1As1f1akhntTAlMwoPF9QlCe0qOOG7xyr7y7KhtAa%2Bmp%2Ff%2FF%2FjE4aRtkj8laUShsWYFHJmyaHrAe6iKrA8GZ%2BmasHY9jxF3YeCt%2BDhlLDeZ6ORicuetK6KdMTH3Id2DMzFeUKIwXMfRlDVZNsvLyr46yWMg%2F7C4R1aM3KBrfBm7LpKTeDcEPV7OnSWT7nTIuQ949rYdCA2kXc2mDUy6QPY30%2FrErrWV821GsDZwXsK0T6pE%2BtmIWfzJ5rlSkYvNvw6Wo%2B2doceN8T0GHiAywJBX%2Fdy8j%2BHuPrn2BWXkYTP%2FMrXSL8sMNrP6MMGOqUBsocgLpRlD9nMVpQ857BNVUBnZmd08QxiMPPI4nf9xNDpCcim34ogEONAP1ZlMQW6aq0DywsfxrcUnxpuwTyE0oOPJoZH9OaiJeLJ1bY9id5pyZHfu%2FHcPyjBNlOTg85roBmnE9SAarZzu7wnvrZWuatOkM80HTuNJPuXkts652qFTlA1LG%2F1xrXSgQb0ocsv6ZD4LLc71S8JP1ILTQ%2FbgsE653hm&X-Amz-Signature=b26bfe5711a33e92ced75c698cfb7c5d7145ef5a0a254de09f04fde0ba1bd9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOGRVJPB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGskBGtERQeHeDec4wz7%2BYilyJQWjxWONR%2FsXqyIpC4qAiAXhuf0N983mwi5zdAwYAq2VkhoLWFSo3Aux9b42TgtZyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkU%2BgHJVvzpog0hW%2BKtwDcH5LWy8wKIWlm7CBGE985DZSPzxNGuzyH6%2BvQ8040Fn%2BI9hB7ZYvHCvsvrZ9p6znkxsWyS%2FZj9LMmxJAMXjBd2n4Azj979OioS1oqF74g4XCTLiYScwSQ2DHwcA40yCbrNXj%2FuICKEORt%2FxxE3%2BlEUD32V6lCeTzmJbdTLDSqqXjv0DAIRwhQ%2Fk%2FNjhN2ax4Qrdb%2FXq2J9JkHHvjM7AlPLOgX6R%2FxrHpssl9rZG8hi6IN3aJb5TbXru2zU%2Ftz4myr15rCOLHtylkDHUZaOHKCGQXw1de3PNk06JcVPAWB9yyqBqzeppbqHXQ%2FXtrCHJVT%2F52Zm81srrB7jeMpb7isA37DYB78dTxW4hmGYV6x30vh2oCldigTBi%2BhL9x4KrSJtnDG6ycog1k6AhZoJGnfMfDkXbNQU7PcioqybLRfsoSO2%2FpPwxPdpgf1d6uXvL9P7MSCT1GNc%2FET6NkHWSUAerLEnCjgndgkmiAhMxwKwGRYrjjyc5GR2yy3Z7cSac2pwf%2FeGH5jeuIuu1u%2FoUnkqlSnjdaLBNmrjptDtzZ9cwyDXqZeYAER9x7orNng6d1GogTrRVSnk7fjjYUKh%2FulqzvQUBHEWD36uQOdJ%2Ffm3tj9f2UjeBuIDwlTIAwlNDowwY6pgHXbJ9EaOwuhY7TfBMlTKsG86uhJkAuV%2BrCP2TyU6yef0C1jBCXCoBLyQK8LhDBUNhjNvK89HNcsaRAShtEM8h%2FjNSq9zbJcqdygoiI9IgnZGeiuXjlbY693zeWHdKpQSjpnI9f3olCcNSP2Xty%2B4N1WIWgsr5L3UdDWAHFLl2aPw9N5kCmZnkx%2BZ12%2F9gnCidli1iQNQPM%2BearU81ESowzjTL3Bb83&X-Amz-Signature=ce4f06349fb6e7b1b196d99fd0b28cac5f100568ff7ac9252338fc6ce0ffeddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466355S5FJM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBzeetGQEcKQaVtNLuUUVHessIVFCbxaF5XIffNc1lqAiBVs5Fsls6KEe26G3OEaDR6cD%2BONxP09DwPAEbCiMG7jSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLGcbYg1xYeVafxuBKtwDEw%2BLzxvQ5ool4A497xOTA8hwMsjjKh3EcKhj2EncprTuXnZ7K92jyNLn%2BbzhqAuUcReN493JfECVhJa7MU4n2uGXkkPrD4%2Bquk45Ad9BU%2FAxh09nMZbpTsYSnLuuuc9HH2FmnTuG1xlzzkV6%2B4epQuOlXsQQFpBu0DWvlUqHqRsAFaX7DgyhUvUB3J0TXcXS8KLUirOTfXH5VvOe5jNvx738ZUh7ym8WbzLkr%2BpO4ny%2FGlhYjUkwWk9R1L%2BcsoLEP%2B%2FOL%2BL4laqGMN6fyqM6eW4cDi5QPCdilxxk%2F3goZNyK0LOxL1JdhQzch9gXOifcx%2B0EHUx15vALeNFt57RgoVkI4hSMyabmIBiAxQlTkAJHMwTj9HeBPUsUaHZ8tfOf9FAtfPCNWX%2B%2BUBr8uL9HcTX%2Fk9H%2BHlNuYvOLmi4BbVLyImeh75VdW07DvSA1susfJA2TEcMdK%2F8mK%2BqnL6r8rmDHXuVmZpQwz5NQpKGItJU8ub%2B%2BbWhbLOtT1sArkvL2y%2B%2F9gx4MImPLYU42DkGVLuUiKGAD0f3M3ld3SOSi36d3ocz6Qj3Kl4e3rTb1U1DJXiaSquWiXpHMvJvqYIP%2F04oKbsQe5m1CKedbu%2FP4OdTdWurrXaRBiMlb%2BXEwmdDowwY6pgGZ4L1%2FmNBV46Ccc6dyxAmjtGYuVekrGbrwBsXXGdciXXYl9G%2B57Zos1%2BWjQLSh6lulfpLMlcc2NWjY%2Ft2LNcFRNKp2hrPeME%2B6PUP23lpOMBFuBUf7e4IG0KDEQFYjR3g%2BZ%2Bd8IaM5PRKjcg%2FZFSqsJ9URPtSArNiD%2BOx50ecrIuK4o6yO%2BGqMPuEj2q%2FL1x2bAFbppQ0igt6t0LP18JNfaulPBQPO&X-Amz-Signature=d8c96cfb821bd4803416891b0ef71f48673889892fdcb979d5a7a550eedf01b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZB7XMW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC5yiSG0j4oXoUtMEIZMkidytWSXhoUEkxo0j2u29f%2FXQIgVElhibB%2Fj7aB3KJ3x9DN%2B%2FSigHyiUqC42kEnjvc3hacqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvaCRc4hQgLu1mJWyrcA93pXQMQclGQ91VdgNUeDbvraUZnc2dGwHoe54IfjqgPwodJ9m2KpF%2F%2FnIyPl8goUIsFxxk01FanGti%2FpR0CZLlee6VG9Iv6WUh1mVI7v15oLT4MhDPxBdcAINcUAmOJ6TfRHwVXdCPN%2BoztgeQq6DlfuwbM7mH9blX3pOGCTTFxkku3VxNSn9NXAraySfvmiGKKAUMkL6Lw7VtKcyhDWcAJMStEIzL%2B2Hje%2B5i%2B2KKdJhuHcuyyRy5oyoHOq7C72FHhua0xK%2BOjZpqQboQMwdS%2FmGJ%2FdErwLUYP4Ch8GFwu3%2F%2BpzP57Tj9OtzA00ygagWSAJuNUBg1As1f1akhntTAlMwoPF9QlCe0qOOG7xyr7y7KhtAa%2Bmp%2Ff%2FF%2FjE4aRtkj8laUShsWYFHJmyaHrAe6iKrA8GZ%2BmasHY9jxF3YeCt%2BDhlLDeZ6ORicuetK6KdMTH3Id2DMzFeUKIwXMfRlDVZNsvLyr46yWMg%2F7C4R1aM3KBrfBm7LpKTeDcEPV7OnSWT7nTIuQ949rYdCA2kXc2mDUy6QPY30%2FrErrWV821GsDZwXsK0T6pE%2BtmIWfzJ5rlSkYvNvw6Wo%2B2doceN8T0GHiAywJBX%2Fdy8j%2BHuPrn2BWXkYTP%2FMrXSL8sMNrP6MMGOqUBsocgLpRlD9nMVpQ857BNVUBnZmd08QxiMPPI4nf9xNDpCcim34ogEONAP1ZlMQW6aq0DywsfxrcUnxpuwTyE0oOPJoZH9OaiJeLJ1bY9id5pyZHfu%2FHcPyjBNlOTg85roBmnE9SAarZzu7wnvrZWuatOkM80HTuNJPuXkts652qFTlA1LG%2F1xrXSgQb0ocsv6ZD4LLc71S8JP1ILTQ%2FbgsE653hm&X-Amz-Signature=527898d8f0a2cd6ea892584e1e3ed5c8dd7337deddcabc37c3b68e221380017a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
