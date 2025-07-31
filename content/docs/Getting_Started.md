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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVO2R5GI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNpKGzvhI0rqkRcGHHtxXfaQQf3avTmOiNUtQBNKP2yAiBR9m7ukwsRmgXb5eDXxyin1GECyuHqJEDTw51DzVZd5iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6pIftfydb2KcT7UjKtwDevP6L82JEi2%2BOz9x53YC3XAxLFK9XxXfxO9xBAPd1IWXJCebU2L738mUuYHovW2zpcXdFSEE4aTOhOFE8TbvdJH2FOPOVn9vm1%2FXZuGdueCyVSPNV6b%2BGpjzYkQt%2F369y4m8vvWeeFQs62Ew9PfLep197jAn8qtIZirxjygLFHn4NJmo09mMLzenP%2BbONhiMPQHHOoM%2Bj4Gbe4SsU5qkT0JBWViFWtyWi12me0oWXAfP%2B7zFT7JBH9p1TT1MtPgPBXapaROAtamf4TrYndrWWCgu9wqVix220cQE6zOkMOi1n0Ks2dc7Ahqz3KH0Jx1kQxKQYqBCCoPloFucyxgkF%2FOddl%2BEe%2BZswKkzMlmeME%2FYlgr5y7ugiyX8CRpNhk8gRhORx698WDysQiO2W%2B3CvRPUaAuplW6ZG0THVbdObXSuHnzMB4HjFwLFyXr2Z4o%2BW62bwyIfNE3ypIvMZ2OP6HWr%2F4RI2udsEsPAv4NjdBJEC4hZZH7mKPEtdSfBnNOC0e6LdReK%2FS4EEh3PeYxXJcoUJOvw4NbKAvIvI8%2BlEjaboPuuzMaReE3vK%2B4rQ5NLXgiUN4kpeR81se1i3GSJ3k8lbUy70GfflS3zDiy0GOLcoTunX7OCJBKFJukw29uuxAY6pgE0OHU1QmwuPMAcqQobQAUpk%2BvhNSi6aPMIgCINR8Wb2bjPN150v4lD3cDsAMR2%2FrdhEvEf3nZb%2FUzsOZ%2BJe5urdJIZAT6QNdUHygeE2bPaVdJ2T%2Ba1%2BbJDgHqdaO82ZeJc%2FrV5wiY5oBW7wcDgfazO9LvYUPWF573LpmaKfKIlSHB4AwfCedOyBEZGR8kNjnKKyyb%2FSx4os2P2lVFOa8hzktybqvQu&X-Amz-Signature=232cf552af4af8ea7b3db77d280b31c25e81916cb19a857b50eef7cbb9af060a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVO2R5GI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNpKGzvhI0rqkRcGHHtxXfaQQf3avTmOiNUtQBNKP2yAiBR9m7ukwsRmgXb5eDXxyin1GECyuHqJEDTw51DzVZd5iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6pIftfydb2KcT7UjKtwDevP6L82JEi2%2BOz9x53YC3XAxLFK9XxXfxO9xBAPd1IWXJCebU2L738mUuYHovW2zpcXdFSEE4aTOhOFE8TbvdJH2FOPOVn9vm1%2FXZuGdueCyVSPNV6b%2BGpjzYkQt%2F369y4m8vvWeeFQs62Ew9PfLep197jAn8qtIZirxjygLFHn4NJmo09mMLzenP%2BbONhiMPQHHOoM%2Bj4Gbe4SsU5qkT0JBWViFWtyWi12me0oWXAfP%2B7zFT7JBH9p1TT1MtPgPBXapaROAtamf4TrYndrWWCgu9wqVix220cQE6zOkMOi1n0Ks2dc7Ahqz3KH0Jx1kQxKQYqBCCoPloFucyxgkF%2FOddl%2BEe%2BZswKkzMlmeME%2FYlgr5y7ugiyX8CRpNhk8gRhORx698WDysQiO2W%2B3CvRPUaAuplW6ZG0THVbdObXSuHnzMB4HjFwLFyXr2Z4o%2BW62bwyIfNE3ypIvMZ2OP6HWr%2F4RI2udsEsPAv4NjdBJEC4hZZH7mKPEtdSfBnNOC0e6LdReK%2FS4EEh3PeYxXJcoUJOvw4NbKAvIvI8%2BlEjaboPuuzMaReE3vK%2B4rQ5NLXgiUN4kpeR81se1i3GSJ3k8lbUy70GfflS3zDiy0GOLcoTunX7OCJBKFJukw29uuxAY6pgE0OHU1QmwuPMAcqQobQAUpk%2BvhNSi6aPMIgCINR8Wb2bjPN150v4lD3cDsAMR2%2FrdhEvEf3nZb%2FUzsOZ%2BJe5urdJIZAT6QNdUHygeE2bPaVdJ2T%2Ba1%2BbJDgHqdaO82ZeJc%2FrV5wiY5oBW7wcDgfazO9LvYUPWF573LpmaKfKIlSHB4AwfCedOyBEZGR8kNjnKKyyb%2FSx4os2P2lVFOa8hzktybqvQu&X-Amz-Signature=04d68cc624c10a0af1584e29003b0fb4e138264b801befcfe4ff646be2659f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVO2R5GI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNpKGzvhI0rqkRcGHHtxXfaQQf3avTmOiNUtQBNKP2yAiBR9m7ukwsRmgXb5eDXxyin1GECyuHqJEDTw51DzVZd5iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6pIftfydb2KcT7UjKtwDevP6L82JEi2%2BOz9x53YC3XAxLFK9XxXfxO9xBAPd1IWXJCebU2L738mUuYHovW2zpcXdFSEE4aTOhOFE8TbvdJH2FOPOVn9vm1%2FXZuGdueCyVSPNV6b%2BGpjzYkQt%2F369y4m8vvWeeFQs62Ew9PfLep197jAn8qtIZirxjygLFHn4NJmo09mMLzenP%2BbONhiMPQHHOoM%2Bj4Gbe4SsU5qkT0JBWViFWtyWi12me0oWXAfP%2B7zFT7JBH9p1TT1MtPgPBXapaROAtamf4TrYndrWWCgu9wqVix220cQE6zOkMOi1n0Ks2dc7Ahqz3KH0Jx1kQxKQYqBCCoPloFucyxgkF%2FOddl%2BEe%2BZswKkzMlmeME%2FYlgr5y7ugiyX8CRpNhk8gRhORx698WDysQiO2W%2B3CvRPUaAuplW6ZG0THVbdObXSuHnzMB4HjFwLFyXr2Z4o%2BW62bwyIfNE3ypIvMZ2OP6HWr%2F4RI2udsEsPAv4NjdBJEC4hZZH7mKPEtdSfBnNOC0e6LdReK%2FS4EEh3PeYxXJcoUJOvw4NbKAvIvI8%2BlEjaboPuuzMaReE3vK%2B4rQ5NLXgiUN4kpeR81se1i3GSJ3k8lbUy70GfflS3zDiy0GOLcoTunX7OCJBKFJukw29uuxAY6pgE0OHU1QmwuPMAcqQobQAUpk%2BvhNSi6aPMIgCINR8Wb2bjPN150v4lD3cDsAMR2%2FrdhEvEf3nZb%2FUzsOZ%2BJe5urdJIZAT6QNdUHygeE2bPaVdJ2T%2Ba1%2BbJDgHqdaO82ZeJc%2FrV5wiY5oBW7wcDgfazO9LvYUPWF573LpmaKfKIlSHB4AwfCedOyBEZGR8kNjnKKyyb%2FSx4os2P2lVFOa8hzktybqvQu&X-Amz-Signature=b23ee67e75bf322ce928fe95d2a12ee724a0c489af2136f6b5bfa88328507fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDUDFAL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl4qp72qatpdXfLu%2Fd8sATRro1WkiLjRWc4EqYXV1XUAiEAo6W4%2FcWtiwnOv3HQdzM0mXZ6Ea%2BjIweIei2f%2FGd5ZIcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGRcUd85YsImDAbECrcA6HB3YOaT%2B0IdK%2Fnvvxu%2FAltbjgmKDpJ0qfT2m92eXd439C13JffOSwEkRgn5NZfp8YYOS4NfFd%2BBkiJ7itzqcleRvXIMzYgTRqwngWdOB5Z1rkmwzHxsu6Lp1OplPxihUuP1bK5IOuQUwct3hwfeMfHUvxMCoh2ayB3WXEZqfvHYWtjoHM5SIkqvgzBwQ66nRpffJdUyijR6G%2F%2Be9N5K16%2Ff0Br54aSYn7uamQt7QEZIBxznwX45Taj3E%2F%2FIpnDSyY63M52EJzgv1MAY5MwEGt4oKIzNyBWkFJ4NikCu8q1pRFNhsBVSu8QW%2FG5IjGap9X7IoXub3ouP0fjo30cRkf1JB2HTlQk7Uxek8OOiT89p0BidRUb6PlJBrbQOdF98QL67VqLwMtVxM2aZTkyRBMbASBI07Muq5V9951OlRAaMT9semxg3sOfiLSUTE2aXGrkuw8bK8laBIbzKn%2BBp4vAF%2FN9xsL70GYsBy5rw4bLb1YpQ2bLjzAROPQSrLKoD1nz8V%2Fv2QXdRReOIdVCzHG8JCjzLuhKfqDJfkJudD4XrA%2Fh1XWig1Boux1OdH6Fnq4VLQOlsBYd2Zn4PyzJAjgpWrBRuTlcjcKw9t4zaz92wKPDA5a4qoPZICAzMNnbrsQGOqUBvy%2BkzLWuooBBXkPc0AEgtp4WMOnVh5p%2FbpjtQLc%2BXy5PwRBWbCdm8EtHm55aSDmKvk87rKmL%2FZ2ghEr7oBRxqUEAFJ1WHVoIP7%2Fd40YWqijW3mI3wg%2BOEgJ9u8tUZIDAxZZ80QMzp0VNZdTRYZ1P12v5XHSVU%2Bm%2FA39FpXnkg642fGk1zs%2BusjXwX9cNx2v3U98o9zYPOaJdW%2FGm%2F%2BxSKtXGh5II&X-Amz-Signature=01130b17e23a98e97889a34696128c96ef21b9d17010bd61f4b1da95ee36ee05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSQJ73U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8tX9PWpGasd%2BKAyhuvZq4ZfmiZ4xITN8oCwNzmV2rHAiEAzn1QwHH5UUXkgLFuc3gfgiuW%2F%2Bg6zxlMJzVVoPe%2BmD4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkz6sjpWHwiDY05JyrcAwS6sNWFYUONrR3YJwiixF%2FpVXpx30YNo1NkXH3w1MXi8h%2Brb15sKXfLxfGjmi85uVcvbJABzU1V3HeoxT8BVgQVncYfAdCAfp7X3Kzf1nmGm5h768sywHVlWhak0lqWuYpAvG4Tg%2B0RoCpsMhddCRRmOQ43JIdfGc%2FRLU20NNiZqoN%2Bx4trFa7kpo2inbroP%2By92dwdGb00uDV42h2YdCIkj%2FRBd%2Fnz4ecGDA5enCeU82SpOErm%2BemEWXUsgTpnez0G61GARr73s1oQqATGbpgvbukg4kXU8vn3xbhSQSLqgzrh1ODFLU9n1Ru8QH0gte4i8XLNx%2F6I2uONNzq7kpSWz8cn0%2B2U8pmcCvLRvg4GN65RMsZycsdtxLS%2B6YcPUks2P59DWulAJXKNO2YzODsVAtlO0zNtsREykvc%2BNl4E32U5Kg0jIRYQ80rL2tlQK6PlJIEdYSApKCPD7kKT5X5tkkgitguS4I8L3wkn9o9tWWTyHRAQjgdYGp0BS026J3brUwI2tQiiXhSJNEeTY8CSkigcn1rULqGGlYan4Ud0F7Hv8C4BG9iwk8IveVn3yCopE4jy31nX6FAWJJi4XdoVoGqp7t%2F91844M055Avxg85shZElbrRQG37zUMObbrsQGOqUBU7mbAnFV3hn3I8lwmI%2FuXfX8VuwOzAs7xQAm379URZqMKHAQIWaj%2Blb2p9hy0QfghucTUHU1BJEi90eDGU4qEuRs36DyA1XTqxgjgvgNKGc1hRD%2FjypxLvTTP7z3gBdn%2BpK8VmtiK9WU7guXrIAAf07prPbxCcnyVeUuKx%2B93wpO2CyPEYlnm7Wa%2FGYynbYhSFN%2BePrxodQ3M%2ByrqPf0r53IxdYR&X-Amz-Signature=6040811cbc5a67d70bee3b2b20bfdfd318c5d15567e6abd864c6e30d260433d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVO2R5GI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNpKGzvhI0rqkRcGHHtxXfaQQf3avTmOiNUtQBNKP2yAiBR9m7ukwsRmgXb5eDXxyin1GECyuHqJEDTw51DzVZd5iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6pIftfydb2KcT7UjKtwDevP6L82JEi2%2BOz9x53YC3XAxLFK9XxXfxO9xBAPd1IWXJCebU2L738mUuYHovW2zpcXdFSEE4aTOhOFE8TbvdJH2FOPOVn9vm1%2FXZuGdueCyVSPNV6b%2BGpjzYkQt%2F369y4m8vvWeeFQs62Ew9PfLep197jAn8qtIZirxjygLFHn4NJmo09mMLzenP%2BbONhiMPQHHOoM%2Bj4Gbe4SsU5qkT0JBWViFWtyWi12me0oWXAfP%2B7zFT7JBH9p1TT1MtPgPBXapaROAtamf4TrYndrWWCgu9wqVix220cQE6zOkMOi1n0Ks2dc7Ahqz3KH0Jx1kQxKQYqBCCoPloFucyxgkF%2FOddl%2BEe%2BZswKkzMlmeME%2FYlgr5y7ugiyX8CRpNhk8gRhORx698WDysQiO2W%2B3CvRPUaAuplW6ZG0THVbdObXSuHnzMB4HjFwLFyXr2Z4o%2BW62bwyIfNE3ypIvMZ2OP6HWr%2F4RI2udsEsPAv4NjdBJEC4hZZH7mKPEtdSfBnNOC0e6LdReK%2FS4EEh3PeYxXJcoUJOvw4NbKAvIvI8%2BlEjaboPuuzMaReE3vK%2B4rQ5NLXgiUN4kpeR81se1i3GSJ3k8lbUy70GfflS3zDiy0GOLcoTunX7OCJBKFJukw29uuxAY6pgE0OHU1QmwuPMAcqQobQAUpk%2BvhNSi6aPMIgCINR8Wb2bjPN150v4lD3cDsAMR2%2FrdhEvEf3nZb%2FUzsOZ%2BJe5urdJIZAT6QNdUHygeE2bPaVdJ2T%2Ba1%2BbJDgHqdaO82ZeJc%2FrV5wiY5oBW7wcDgfazO9LvYUPWF573LpmaKfKIlSHB4AwfCedOyBEZGR8kNjnKKyyb%2FSx4os2P2lVFOa8hzktybqvQu&X-Amz-Signature=1b74408f7bb040fd7e7bc81167bb1ba285734772c38dd77e104dd0c47bd902d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
