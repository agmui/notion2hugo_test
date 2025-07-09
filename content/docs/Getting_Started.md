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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DILFPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGveoUxm2%2FLsUjMOOU0RChcBh55RspQd8xtDysyhQZEwAiAi%2Fw5QPz51XL1LjnoJJunBAgh4IQ2u6Uyy%2Fq0GZa%2BQbyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fn%2BWBIhQNIHcAbSpKtwD1iIjtvJAbzMRtRh4Zc9%2B5AuG2u9jHJljSJxd0Znp48OTuHKQf9N5JTW1d2StQ2iLUBjHBKBGJpagypiCiWkpq7NiALbVMIYd1554BeCFYplUHIgO1BzooXfAPh9mq6oqNXvbK8Ozoydr70df%2BC0udYdkV8nZcXCjcXgBMJOpXjxDJwnBrman8a3WgP0z9brDPwOI6mh%2Bix8kCwyj82H6QwqPA5S7CJMruv2atrhFqsUfib1d5HcjEbIKq9Zn6bynWO9Qv%2FWHEQPmQWt3O6N0obTFr1hDzfRkUA2gYDYL4R7esTArJpT%2BMriF8w5q4228BTK1NYlQIIDGIxiulZ6ZWtrlFTHDzZcqwIwx%2BL5oyMJtjRTzl88%2FwMddCG6xElvgAt6JnajgmW8Q5z3d3R42trFfZhHHBhg4rPCI9QwWT8i%2Fix9JGZd1ZfvbPPXVclSjPuJAwp4ShoO%2FRY5De8de%2FOuIY0fV2fYp36TImIW20C6V3OCGMiJwVy%2Fkqk3MY2RpVd6ipizwqhIxg3WsQV8buruoIIKdTdmjRuH1Kg6y3YiWn6%2F5IcnPFBMtU6qlj2lVly0%2FLGxv3IUfMO1vNhdO8ZK5Dv%2FFGFolw6sM4A%2FCgUNe%2F3vg0cr2xXhn5o0wxYu5wwY6pgE44w2Z9N9diakFACJ0B%2Bu0844TEEVDHEqc5gzMTOU5kBu0vc2RJlYNpxUVvZbBnRFSaefe%2FEtruIGF7i9IETcmIMBi32O1ESo%2Fb7UqKvPgfo%2FKOVOuC6KNYTIk6x72KsVnDnuBxv6o00CuiJha46QIE3r7EOXGZ%2BpKY7Sqg7dpLZpnA8AwX4G5I75S9h8RvDR9nM510Ecf6jdy4WSh0ioeaCJJ1bzO&X-Amz-Signature=3252372b673a3f3670a94deac4cf64397fc1e08929a0f9ce8b18ecdf7eab5e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DILFPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGveoUxm2%2FLsUjMOOU0RChcBh55RspQd8xtDysyhQZEwAiAi%2Fw5QPz51XL1LjnoJJunBAgh4IQ2u6Uyy%2Fq0GZa%2BQbyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fn%2BWBIhQNIHcAbSpKtwD1iIjtvJAbzMRtRh4Zc9%2B5AuG2u9jHJljSJxd0Znp48OTuHKQf9N5JTW1d2StQ2iLUBjHBKBGJpagypiCiWkpq7NiALbVMIYd1554BeCFYplUHIgO1BzooXfAPh9mq6oqNXvbK8Ozoydr70df%2BC0udYdkV8nZcXCjcXgBMJOpXjxDJwnBrman8a3WgP0z9brDPwOI6mh%2Bix8kCwyj82H6QwqPA5S7CJMruv2atrhFqsUfib1d5HcjEbIKq9Zn6bynWO9Qv%2FWHEQPmQWt3O6N0obTFr1hDzfRkUA2gYDYL4R7esTArJpT%2BMriF8w5q4228BTK1NYlQIIDGIxiulZ6ZWtrlFTHDzZcqwIwx%2BL5oyMJtjRTzl88%2FwMddCG6xElvgAt6JnajgmW8Q5z3d3R42trFfZhHHBhg4rPCI9QwWT8i%2Fix9JGZd1ZfvbPPXVclSjPuJAwp4ShoO%2FRY5De8de%2FOuIY0fV2fYp36TImIW20C6V3OCGMiJwVy%2Fkqk3MY2RpVd6ipizwqhIxg3WsQV8buruoIIKdTdmjRuH1Kg6y3YiWn6%2F5IcnPFBMtU6qlj2lVly0%2FLGxv3IUfMO1vNhdO8ZK5Dv%2FFGFolw6sM4A%2FCgUNe%2F3vg0cr2xXhn5o0wxYu5wwY6pgE44w2Z9N9diakFACJ0B%2Bu0844TEEVDHEqc5gzMTOU5kBu0vc2RJlYNpxUVvZbBnRFSaefe%2FEtruIGF7i9IETcmIMBi32O1ESo%2Fb7UqKvPgfo%2FKOVOuC6KNYTIk6x72KsVnDnuBxv6o00CuiJha46QIE3r7EOXGZ%2BpKY7Sqg7dpLZpnA8AwX4G5I75S9h8RvDR9nM510Ecf6jdy4WSh0ioeaCJJ1bzO&X-Amz-Signature=360d46e81f8f5763a09053041cb4548e28cf737c8654710b0f8adae0c8ea60a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DILFPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGveoUxm2%2FLsUjMOOU0RChcBh55RspQd8xtDysyhQZEwAiAi%2Fw5QPz51XL1LjnoJJunBAgh4IQ2u6Uyy%2Fq0GZa%2BQbyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fn%2BWBIhQNIHcAbSpKtwD1iIjtvJAbzMRtRh4Zc9%2B5AuG2u9jHJljSJxd0Znp48OTuHKQf9N5JTW1d2StQ2iLUBjHBKBGJpagypiCiWkpq7NiALbVMIYd1554BeCFYplUHIgO1BzooXfAPh9mq6oqNXvbK8Ozoydr70df%2BC0udYdkV8nZcXCjcXgBMJOpXjxDJwnBrman8a3WgP0z9brDPwOI6mh%2Bix8kCwyj82H6QwqPA5S7CJMruv2atrhFqsUfib1d5HcjEbIKq9Zn6bynWO9Qv%2FWHEQPmQWt3O6N0obTFr1hDzfRkUA2gYDYL4R7esTArJpT%2BMriF8w5q4228BTK1NYlQIIDGIxiulZ6ZWtrlFTHDzZcqwIwx%2BL5oyMJtjRTzl88%2FwMddCG6xElvgAt6JnajgmW8Q5z3d3R42trFfZhHHBhg4rPCI9QwWT8i%2Fix9JGZd1ZfvbPPXVclSjPuJAwp4ShoO%2FRY5De8de%2FOuIY0fV2fYp36TImIW20C6V3OCGMiJwVy%2Fkqk3MY2RpVd6ipizwqhIxg3WsQV8buruoIIKdTdmjRuH1Kg6y3YiWn6%2F5IcnPFBMtU6qlj2lVly0%2FLGxv3IUfMO1vNhdO8ZK5Dv%2FFGFolw6sM4A%2FCgUNe%2F3vg0cr2xXhn5o0wxYu5wwY6pgE44w2Z9N9diakFACJ0B%2Bu0844TEEVDHEqc5gzMTOU5kBu0vc2RJlYNpxUVvZbBnRFSaefe%2FEtruIGF7i9IETcmIMBi32O1ESo%2Fb7UqKvPgfo%2FKOVOuC6KNYTIk6x72KsVnDnuBxv6o00CuiJha46QIE3r7EOXGZ%2BpKY7Sqg7dpLZpnA8AwX4G5I75S9h8RvDR9nM510Ecf6jdy4WSh0ioeaCJJ1bzO&X-Amz-Signature=658c4e07fbd18bf469db6b24f4245fbfdfbd799440208ce1d1521095899defa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXHWPJS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdwK%2BPflzLTCVfkVAngnFlPAskdVZltRFOk3SAM061HwIgNO8bMsnGO26dnYE7tuzS4P7m0rasCTdJtXD%2FkCix9McqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBdg0C7b%2Fu0nnmblircA2Sd8paw3gtQ%2FBppEwWiU2vvJt0ciEZQUGB4O1DaiP2gn%2BaFeba1HB4sy%2BZOKQkeq0H8QsFsN%2FcgMg8uP2fH1%2BxngWDQDZX1zzHLMUlB5hqr3C02NtjKAPQLubYmz5Eu%2FBZMXf2lE3%2B%2BfQfWs2xjylDFQtoxPE8yi8n7gnL8MRJ%2FezOIq2hd0L8c%2FD7e0l9EMZSOqM9ADKAtRBtbwAuXITgVZMxd90rnunfxztTC4YaGudzedsUYkveHGmb3LVG74493tSS3GIG%2FxErPdLlF7oOXJyNCfnLL4DlQKJvgM6VQ3yvGiBKDOIwDNrxQiXebrAhoB7jF4gjoypjjPVbF%2FFf4n9CKWu3ja%2FRgkIzv9Q%2F8lOQMGl90SXnYbCa8paEEajz5dGHZu%2FgIqsNzhfboA%2FywUFTujHIwELNglKZB%2FSRAvUTvrABkrka1PBl4vzQDNQrnHsq%2FbS8rf4fow2%2B%2FM%2F0T6VCkzqFYcTscoBLPEI7FxRL5McnN%2B49%2BkjjP6pNj4eppPwrG3xOEbcvTTVMO9pWCDgzW1BzY%2Bm7cNABo4fIk1A618Wy2azI66sDyD3or9mDPI5ZPablFb7ei87RiXKhc%2B%2BEAQ%2Bva12m%2FszOcI2ePfngiKaJg%2BEXtGFXLMK%2BLucMGOqUB8iEa50Feeg5uGPhGu9Z%2FIWZuLhoUjLUOFNI7gUAB2dC70cXqyNlNqvWWVekZuaia9D5xyB%2FCT%2Bi5YA8kRrL5D%2FWWZahZ7a5C5AgR2z5F8Puay3ynvcTtf%2BE5%2FtmtRkiNK50sGmKii94IG9Qdl77jASYd1WZSL82Tkj5KJp6K3BUs4yqbXjA2q4sup6ykdhrqdVMURE1ju8Qv3kMYtW9%2BZfI8e6AD&X-Amz-Signature=a7716bda36edc2ec16a0faa316511695c68b41600a51b4e697c645f39f759d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CVNJ4AJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5LZQ610%2BwefR1yBUQq6cuE%2B3Q41SEbnXuYriQsfpDRAiAmpM8N5NYiWeVpvWmCgwRXembHHzE%2BYWr2rQvIKZcl4iqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYZ5lFQxAUqUuUQ%2B%2BKtwD5MGly7vwOvq78xDmdIqqmZSXG4wKkkvUzR4UK9pusTiJTgF4jo4emT3lUh%2FVDqS8%2FpdHCwLvMLPG3tgvXMdVshMqVRFBgyY1XCrhFFlqAKhf2bAf0P1q%2FTfVTypTIfVig3jmRjyAhLnkyZpoptTVEt60QP%2BVdHkIZp40TpbNG6QdVEulXNTH5oiqP179YV18d67%2F9Vq73ynEhEhv8W6zZuWCzFIMW6huAj7ONHnCXOcspBgshOPy5rVyB0fcdsHr5phKXzJlpx73tIAnGrxmKzJuT075wVUtTY2uYCYV9wBFakyHfryKJfcEl9nuq6setue3CQIJNkLagMeE3jp8zi7hc3kPBstE%2BvzK6kXibiJp0aDPBmpKYc62Trx1ZsZUk9BXQh6BMcvVurPk2DM0tllMSZ5Xq%2FwQBvWAXB%2FfB%2F9TiiuarZxCLe80%2B6LpFw6i18sIM5uKXpIVrUdy%2B6Rtw%2BmuYuMuvVavgdWhga%2BSolkM4Rm223vTrzaOzd2u%2BSLtli7fwxQC2V0J%2BDKU63jM54JVo0ghBBodEJEWHPfliG5v1hJfpi0eyKOJCcQC7qXDKY4lhdPDjJ8HQXDcoUQHRPpd2BBAuWOsufZ6g6BXgqYC8DtoP%2BWu%2FqFVnpowhIu5wwY6pgFoNr0fVU4aTQ4lIkJdAdWiZ%2FEduJ2YtmWNcHPhGpkjirD4dQgoz7Siqyf4fla7sjR25%2FblW%2FSwcH6itiMhcpQ0TGsdriSpWG9QF9At3Qa66bLcEHHIoV4ePah6Rjr10L7UXncydKSr3O4r6ugCEazFOSnydcHM0FJ8DaoTUU0xncdg0Ni0w3T986xdZtWXaofe9BqxGSxwyg42%2BcZG%2BMd3kknuF3KX&X-Amz-Signature=73b0f5236c664b625033147b3dabba60e7818dda1e78b660cceed16374890df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DILFPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGveoUxm2%2FLsUjMOOU0RChcBh55RspQd8xtDysyhQZEwAiAi%2Fw5QPz51XL1LjnoJJunBAgh4IQ2u6Uyy%2Fq0GZa%2BQbyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fn%2BWBIhQNIHcAbSpKtwD1iIjtvJAbzMRtRh4Zc9%2B5AuG2u9jHJljSJxd0Znp48OTuHKQf9N5JTW1d2StQ2iLUBjHBKBGJpagypiCiWkpq7NiALbVMIYd1554BeCFYplUHIgO1BzooXfAPh9mq6oqNXvbK8Ozoydr70df%2BC0udYdkV8nZcXCjcXgBMJOpXjxDJwnBrman8a3WgP0z9brDPwOI6mh%2Bix8kCwyj82H6QwqPA5S7CJMruv2atrhFqsUfib1d5HcjEbIKq9Zn6bynWO9Qv%2FWHEQPmQWt3O6N0obTFr1hDzfRkUA2gYDYL4R7esTArJpT%2BMriF8w5q4228BTK1NYlQIIDGIxiulZ6ZWtrlFTHDzZcqwIwx%2BL5oyMJtjRTzl88%2FwMddCG6xElvgAt6JnajgmW8Q5z3d3R42trFfZhHHBhg4rPCI9QwWT8i%2Fix9JGZd1ZfvbPPXVclSjPuJAwp4ShoO%2FRY5De8de%2FOuIY0fV2fYp36TImIW20C6V3OCGMiJwVy%2Fkqk3MY2RpVd6ipizwqhIxg3WsQV8buruoIIKdTdmjRuH1Kg6y3YiWn6%2F5IcnPFBMtU6qlj2lVly0%2FLGxv3IUfMO1vNhdO8ZK5Dv%2FFGFolw6sM4A%2FCgUNe%2F3vg0cr2xXhn5o0wxYu5wwY6pgE44w2Z9N9diakFACJ0B%2Bu0844TEEVDHEqc5gzMTOU5kBu0vc2RJlYNpxUVvZbBnRFSaefe%2FEtruIGF7i9IETcmIMBi32O1ESo%2Fb7UqKvPgfo%2FKOVOuC6KNYTIk6x72KsVnDnuBxv6o00CuiJha46QIE3r7EOXGZ%2BpKY7Sqg7dpLZpnA8AwX4G5I75S9h8RvDR9nM510Ecf6jdy4WSh0ioeaCJJ1bzO&X-Amz-Signature=8ae7d835a56121e603c2e104da533e5f1401e965faf7d2cf1fea76934ebefba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
