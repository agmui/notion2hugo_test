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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRDHXLO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT2DRMfrWt1EBE8mGj4xQOohIZl1lVsGDNRQYhQvEHPAIhAMYvPgraIsQ%2BreFDSCj5vpIZz%2BvmSLnE3Nsc9IGLGB4gKv8DCH4QABoMNjM3NDIzMTgzODA1IgzvNVeLOodAiRBnsM0q3AN2tn0r%2BNhNypMpzxHMjYsR2NOEI0qTf6QtMhBS5JQHDMSBwu9rmvyE8C9rnP3y9nrmHfjDUc%2BX7ZfpynhQmFe6zS6tRV1WToHX5cH4H6gqlN3tUL6LdycvxAnYgo40CYqKTrRzBmjNkFxytZoIDF9CnfI%2BxI%2FAAo3HFY9ZpzNZ14lZoFrFeVL%2BnRtUJciIbEhAzptxQLNiTRZohKZjd1cx8N64xtseWuZMQEW5k8V33kkdWqgua9f0JQxr1VMSsoCI%2F4qacLztGYV0b2MsxpRyd3LmEMbrHRZgmSwemRZT7EG2Zi6N4GJ%2FBj8%2Fn7reyndblFK85VX8pKGpE2yKWrCji9de3N%2BBzwDHp4nH%2BAWwee84G7528ytgMXPS3vROfGP6TxN0vAdhwiZSY%2FjrLUgLvVNiPcTuLbTLdLPL9Trw3o7V8LrA8%2FgzG4h2FQxESTQCszHONozGyQP44aZbCgIEmr7N60lzbo0UF0pYXuyPaCVQaEiCkAhLzbU5HxSdI4sDCGMACeoZiFwN5EFUxueyDBxhEGQwUlNJdhY208qRH%2FO7Zly%2BjcUsTTE44u4oDQkcuvtQf74UDZSdE6YWVpkJ3HFSRgE9joUKSFbvk1zwAieqVEO1Om%2FhHXn%2BLTCi5t3BBjqkAUxXNhpnoxeyTnbJvV2QOisUGyY37M%2FrcNz77OwoCdDBofcd71skrp1XcKpay4i15Q72aZnwjZSXlrvk%2FOdWyepaxjUsox8AMff8aOg4U6vRk0Y47CTrB8pOtCQYab0zrubKb%2Fox1wBwBP6J7oucq%2FjQJt0jw7KAVfsXydZYN1v2u0zO0w49XqjtUh2c6e4K7Td1c2u6jm9uomh4VVn0%2Bt3ykEY0&X-Amz-Signature=ec756fb7e54fe213e6154ffda019dae7d2def188cbcca6adb47187a2d07e44fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRDHXLO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT2DRMfrWt1EBE8mGj4xQOohIZl1lVsGDNRQYhQvEHPAIhAMYvPgraIsQ%2BreFDSCj5vpIZz%2BvmSLnE3Nsc9IGLGB4gKv8DCH4QABoMNjM3NDIzMTgzODA1IgzvNVeLOodAiRBnsM0q3AN2tn0r%2BNhNypMpzxHMjYsR2NOEI0qTf6QtMhBS5JQHDMSBwu9rmvyE8C9rnP3y9nrmHfjDUc%2BX7ZfpynhQmFe6zS6tRV1WToHX5cH4H6gqlN3tUL6LdycvxAnYgo40CYqKTrRzBmjNkFxytZoIDF9CnfI%2BxI%2FAAo3HFY9ZpzNZ14lZoFrFeVL%2BnRtUJciIbEhAzptxQLNiTRZohKZjd1cx8N64xtseWuZMQEW5k8V33kkdWqgua9f0JQxr1VMSsoCI%2F4qacLztGYV0b2MsxpRyd3LmEMbrHRZgmSwemRZT7EG2Zi6N4GJ%2FBj8%2Fn7reyndblFK85VX8pKGpE2yKWrCji9de3N%2BBzwDHp4nH%2BAWwee84G7528ytgMXPS3vROfGP6TxN0vAdhwiZSY%2FjrLUgLvVNiPcTuLbTLdLPL9Trw3o7V8LrA8%2FgzG4h2FQxESTQCszHONozGyQP44aZbCgIEmr7N60lzbo0UF0pYXuyPaCVQaEiCkAhLzbU5HxSdI4sDCGMACeoZiFwN5EFUxueyDBxhEGQwUlNJdhY208qRH%2FO7Zly%2BjcUsTTE44u4oDQkcuvtQf74UDZSdE6YWVpkJ3HFSRgE9joUKSFbvk1zwAieqVEO1Om%2FhHXn%2BLTCi5t3BBjqkAUxXNhpnoxeyTnbJvV2QOisUGyY37M%2FrcNz77OwoCdDBofcd71skrp1XcKpay4i15Q72aZnwjZSXlrvk%2FOdWyepaxjUsox8AMff8aOg4U6vRk0Y47CTrB8pOtCQYab0zrubKb%2Fox1wBwBP6J7oucq%2FjQJt0jw7KAVfsXydZYN1v2u0zO0w49XqjtUh2c6e4K7Td1c2u6jm9uomh4VVn0%2Bt3ykEY0&X-Amz-Signature=231ee97e0a38cbb8eb4efb9afb9dba44c59535a0485855c85a9f303ae2edc26c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRDHXLO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT2DRMfrWt1EBE8mGj4xQOohIZl1lVsGDNRQYhQvEHPAIhAMYvPgraIsQ%2BreFDSCj5vpIZz%2BvmSLnE3Nsc9IGLGB4gKv8DCH4QABoMNjM3NDIzMTgzODA1IgzvNVeLOodAiRBnsM0q3AN2tn0r%2BNhNypMpzxHMjYsR2NOEI0qTf6QtMhBS5JQHDMSBwu9rmvyE8C9rnP3y9nrmHfjDUc%2BX7ZfpynhQmFe6zS6tRV1WToHX5cH4H6gqlN3tUL6LdycvxAnYgo40CYqKTrRzBmjNkFxytZoIDF9CnfI%2BxI%2FAAo3HFY9ZpzNZ14lZoFrFeVL%2BnRtUJciIbEhAzptxQLNiTRZohKZjd1cx8N64xtseWuZMQEW5k8V33kkdWqgua9f0JQxr1VMSsoCI%2F4qacLztGYV0b2MsxpRyd3LmEMbrHRZgmSwemRZT7EG2Zi6N4GJ%2FBj8%2Fn7reyndblFK85VX8pKGpE2yKWrCji9de3N%2BBzwDHp4nH%2BAWwee84G7528ytgMXPS3vROfGP6TxN0vAdhwiZSY%2FjrLUgLvVNiPcTuLbTLdLPL9Trw3o7V8LrA8%2FgzG4h2FQxESTQCszHONozGyQP44aZbCgIEmr7N60lzbo0UF0pYXuyPaCVQaEiCkAhLzbU5HxSdI4sDCGMACeoZiFwN5EFUxueyDBxhEGQwUlNJdhY208qRH%2FO7Zly%2BjcUsTTE44u4oDQkcuvtQf74UDZSdE6YWVpkJ3HFSRgE9joUKSFbvk1zwAieqVEO1Om%2FhHXn%2BLTCi5t3BBjqkAUxXNhpnoxeyTnbJvV2QOisUGyY37M%2FrcNz77OwoCdDBofcd71skrp1XcKpay4i15Q72aZnwjZSXlrvk%2FOdWyepaxjUsox8AMff8aOg4U6vRk0Y47CTrB8pOtCQYab0zrubKb%2Fox1wBwBP6J7oucq%2FjQJt0jw7KAVfsXydZYN1v2u0zO0w49XqjtUh2c6e4K7Td1c2u6jm9uomh4VVn0%2Bt3ykEY0&X-Amz-Signature=9f9099f11c201bdb77c537e47b4c1cdf00dee4be7526b1ac2ee172d2203f0e98&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQCHKMA%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz5lPLrYZR%2FJYIuzzEi2sp4cVg590%2Fd4S0qdhsjqeStgIhAKGsfpApWMutB6rX2TMYIR%2FrYsZgR%2FgAWAdzb9jU%2FVgmKv8DCH4QABoMNjM3NDIzMTgzODA1IgzR%2BQ9x%2FIXXcZwKqc4q3AOpAX7634G6jeOtRy6e%2BRq8Apu%2FfydAYXddUksIs5QxYueCCZdEoHfpEvDG4gZie5GiVdu59JOh5I2viORPsK0vPWbxkHA6jGIW2dGaDUrU%2B%2FvknWo%2Fa4bJ4TRBo02k9SFr%2BLGYVKiyKY2wgWR4X8lB9iDOJzx26EnaGTBvIQODW2k8AWLteqynKbLFdQA8vJXARt6QWAXpGWM1IT8BVx6qJ%2Bcl5FEen%2Bg%2FwolKLMNQzlVbekVp%2BOFVSeKYTB2K1zAhHZM1UYoB5mu1SSa7lXT%2FGnpmUXUFCdbIU1kNoHEAQgg63hwoTguvNLVaX1h61VtgylEXEwZqmfBRA3xPn6wQNqGwuWEwWxt1CwCES9jqse7U1QZB6uMmoESy85P9hu9BljF1OjrEA7V%2FkDqV2OQORvQR29eQBWbIinLVhqlbxjUcYqC4kERwlK58RjGBh1fnCwbT1Bc%2Bfq1NKHq520vr88uqTndZi%2BgMmjLwW2N5xZQCPMwOs50dbSs5wEswwPo1DIrb6Hzvg1mAs4bJwnCY4r5PwR04f5WmFyZjr2rRWD40UkXIQdiamehA9P%2Fyn7s6i3K1CEf5XUpZII8ijBvJRaSNL1vA%2Br29s9ZWx5Wlv2wKVbnEIqFvFDAYKDD05d3BBjqkAXyyHwLJyuhxRv4G40mkSDpqeiygAKiBiHC66QPwoOd0IAKFp1%2FEegi2Qb12A0Vgw6x1PeOsfR1HypZHaxttARELzKL4WSNomkW%2B1EAMxFu8ny2lkz9DRYVoKMHJV0vxYoBjGyeEvnaSIzrW%2FORwTIe4ug7MxrB52K%2BXBLnvIuaNsuFkRRrGoBXRbtSZOYIwJEAuMx72%2FR3PPFfZOuizP5Ch%2FvnM&X-Amz-Signature=99ebf9a1ac97188e0ab98cb9f46f4f23517dad75f74b63bfe6f7b6436c009043&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJ4D4ZV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlmOlYee8zdv5Q24%2FnVYS5vbcvONQjkk2ZSTnGnLKP0AiAOZEjYXbXm8ahkqbWkLqnFYb53anWfbkXLIquqnv7t5ir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMPIBoLVnNnPvnGKtVKtwDZjobadDREg0gscSDSBmFQUg5k%2FuJk2Kr19wrb%2FLiTCGEEJwGuc4LAm8iWpiT%2FriSgoq5%2B5x9sIkNvKiDkZmHT4F8G%2FFV7YscQ797Ua82%2BgT3dhhT2gj5u2LivUAlggVySoDD5WELTsiqJRwZlBiwQsBy84DZqfh0HSHmQn18kfA4KcEdJAJ7GYhwDDf92db3fjei7Xnoih1vU8%2F01wf2T6XlbLuXMh36lkIbYnXdWvHzE3ntahuz41riDh%2Bd2UUWsc6RrsVHl1nR7%2B5R2rdMw2ARwBVMVBcQOP07srXBXsiUDZ9gKZi0tOGXRWOXY5MXpjmJdXvdYPjzYGIsnTK9oTHCknKjfJLRuYQxpK5fBEM3Si3rcOC6InFfnyPX9xsR75cnV2JmEx4iSz1R6hAyFd3qKAi0%2F7zCmCdN3y%2BHIgX%2BSk0ZkvuaWoPCjQUgXbOlDbcxlO8hTOyErTeNksXcJIfapjeNho3Wac1mRap6ZSSDPU6aI%2FXVbrvL%2BGNBvr9AZZxK5oi0jMlGON6oi3CD5ddFFq0ElnQgur8KYHqL7ducPPLppUxkFIorz%2FlkC54cc7535lCwLBWElPcFcAHZ2DL4jWPpxTUO%2BgdTj%2BG9ySLdAYqr2zAUZyMvqxQwyuXdwQY6pgGWLPEIPnwcuSUuX7b15Iw%2FK4Lt%2FOBD%2FFPXnOJvi10x3TUSGu1%2Bo%2FcPJGg8g5wi1hKe3YavnTJpIFTyb%2FSMsHNpzEaioJ2wSA8CSpxxaecYxDhRR%2B%2BMfTx5zcDDu07j3bxgajOUCPhuJ2BJsjBSBhdfdS2K9j6prjy3joz8U5sEWkBe9OPFtI%2BLML3rPWtbXv4Q4cz5fpqBia%2F8%2FEvZokdFTHDDMorX&X-Amz-Signature=1b84ff049755c19b363c470a263f5d7caa637e9e680b224d0f1eef96b5ddb4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRDHXLO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT2DRMfrWt1EBE8mGj4xQOohIZl1lVsGDNRQYhQvEHPAIhAMYvPgraIsQ%2BreFDSCj5vpIZz%2BvmSLnE3Nsc9IGLGB4gKv8DCH4QABoMNjM3NDIzMTgzODA1IgzvNVeLOodAiRBnsM0q3AN2tn0r%2BNhNypMpzxHMjYsR2NOEI0qTf6QtMhBS5JQHDMSBwu9rmvyE8C9rnP3y9nrmHfjDUc%2BX7ZfpynhQmFe6zS6tRV1WToHX5cH4H6gqlN3tUL6LdycvxAnYgo40CYqKTrRzBmjNkFxytZoIDF9CnfI%2BxI%2FAAo3HFY9ZpzNZ14lZoFrFeVL%2BnRtUJciIbEhAzptxQLNiTRZohKZjd1cx8N64xtseWuZMQEW5k8V33kkdWqgua9f0JQxr1VMSsoCI%2F4qacLztGYV0b2MsxpRyd3LmEMbrHRZgmSwemRZT7EG2Zi6N4GJ%2FBj8%2Fn7reyndblFK85VX8pKGpE2yKWrCji9de3N%2BBzwDHp4nH%2BAWwee84G7528ytgMXPS3vROfGP6TxN0vAdhwiZSY%2FjrLUgLvVNiPcTuLbTLdLPL9Trw3o7V8LrA8%2FgzG4h2FQxESTQCszHONozGyQP44aZbCgIEmr7N60lzbo0UF0pYXuyPaCVQaEiCkAhLzbU5HxSdI4sDCGMACeoZiFwN5EFUxueyDBxhEGQwUlNJdhY208qRH%2FO7Zly%2BjcUsTTE44u4oDQkcuvtQf74UDZSdE6YWVpkJ3HFSRgE9joUKSFbvk1zwAieqVEO1Om%2FhHXn%2BLTCi5t3BBjqkAUxXNhpnoxeyTnbJvV2QOisUGyY37M%2FrcNz77OwoCdDBofcd71skrp1XcKpay4i15Q72aZnwjZSXlrvk%2FOdWyepaxjUsox8AMff8aOg4U6vRk0Y47CTrB8pOtCQYab0zrubKb%2Fox1wBwBP6J7oucq%2FjQJt0jw7KAVfsXydZYN1v2u0zO0w49XqjtUh2c6e4K7Td1c2u6jm9uomh4VVn0%2Bt3ykEY0&X-Amz-Signature=ba7d50d8af3a2d73318f59bd734b0cabcb9322c1617b3911bce60aaeb4e14f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
