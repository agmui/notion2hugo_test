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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4N7N4EM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaZN%2FbHhGZdfIV3Ood%2FA4ffDStC7vejPSzM7KFsOm0sAiEAsYxCeOvPaPN5VZkcG50n44Pq5jFpMl83ECuPaEpCKdEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMAGThtUav%2BKzuCvircA9m3MnT0M9S%2FBPYegFlGW2MkyO4BcD%2BN%2BVJF1XFNFoXGgQp7fgtjVL5dHp7c1fcgAj5irPsYSJT2XMBjrrLk7%2F84lj94vfOZ0Q9ZlpQg8SfflGfp6rDHsqrsY3bev%2F%2BuGA5Gr8lCivSdvUFAP3giETdWmVbPveELZLAaNgfwYRHnBJZiG2xtDPIAW9FS%2BYVant6lOO93IXZSgj4qBByk6WP%2Ft2NGJkSHCbfxtWDOd2NZMCn9RB8Q7oK3fZnNY%2FoB77y4plmtqe%2Bu%2BYKZyDoS6Dp7Oboweh61DcKocp0LBgY1awVVk24fmCV5lBg53qvd1GiboBL7ZleedPLuUYd%2BZzwaNFI2DVwi7XwHtcs8Lf1xD1rNSbiT18ZnjiyEJfk6ipkt1IWZ4DboQsHd2DAqETalWKxqXuUYGzC9iqYCs0I6GFdtXLBL3NyjXTklubf8SaH8g2p3s5dOPY4uCDWlbDnkuqky0beObwjnxDXOx4mfOEPzzvFqLiHjHWostwaGrl0ILm854WsNvsRx3NQYto857LPxvyE9PDmOuNfYMsqNSSFmNcCpS3ZGjqA09DdTfPBvgtsYSMbaF2OvfeZbB1Pk0ZZahf5qSbLaBswwLhkMs7RtS7vG7kKau4lKMKnhpL0GOqUBxOSq4hYHdoK%2BSHDGU6wrM5iQ9XH3Kcr0I340bhI31675VqwqSikL972DJj8V%2Fv9kpEuMAgsyusetCn7IFr2mmZrwF%2Bfg9d9r%2F80yCMzR2bMFVeEt31wjrdnERqvA5aJNreXhVe%2FumerrpJ1UZ%2Fmj4nbcs3mQ6OsfgAUeq7K%2BHsUsNShKaY1mDoss71%2BVC4tE9Eqdax%2BBfWe8rpl%2B6BN%2Bg8aHKJ1Q&X-Amz-Signature=a4ea72b1476cd0402f5e0a0e04e84078fd01798c2303e2ac7a2583aa0f39f1e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4N7N4EM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaZN%2FbHhGZdfIV3Ood%2FA4ffDStC7vejPSzM7KFsOm0sAiEAsYxCeOvPaPN5VZkcG50n44Pq5jFpMl83ECuPaEpCKdEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMAGThtUav%2BKzuCvircA9m3MnT0M9S%2FBPYegFlGW2MkyO4BcD%2BN%2BVJF1XFNFoXGgQp7fgtjVL5dHp7c1fcgAj5irPsYSJT2XMBjrrLk7%2F84lj94vfOZ0Q9ZlpQg8SfflGfp6rDHsqrsY3bev%2F%2BuGA5Gr8lCivSdvUFAP3giETdWmVbPveELZLAaNgfwYRHnBJZiG2xtDPIAW9FS%2BYVant6lOO93IXZSgj4qBByk6WP%2Ft2NGJkSHCbfxtWDOd2NZMCn9RB8Q7oK3fZnNY%2FoB77y4plmtqe%2Bu%2BYKZyDoS6Dp7Oboweh61DcKocp0LBgY1awVVk24fmCV5lBg53qvd1GiboBL7ZleedPLuUYd%2BZzwaNFI2DVwi7XwHtcs8Lf1xD1rNSbiT18ZnjiyEJfk6ipkt1IWZ4DboQsHd2DAqETalWKxqXuUYGzC9iqYCs0I6GFdtXLBL3NyjXTklubf8SaH8g2p3s5dOPY4uCDWlbDnkuqky0beObwjnxDXOx4mfOEPzzvFqLiHjHWostwaGrl0ILm854WsNvsRx3NQYto857LPxvyE9PDmOuNfYMsqNSSFmNcCpS3ZGjqA09DdTfPBvgtsYSMbaF2OvfeZbB1Pk0ZZahf5qSbLaBswwLhkMs7RtS7vG7kKau4lKMKnhpL0GOqUBxOSq4hYHdoK%2BSHDGU6wrM5iQ9XH3Kcr0I340bhI31675VqwqSikL972DJj8V%2Fv9kpEuMAgsyusetCn7IFr2mmZrwF%2Bfg9d9r%2F80yCMzR2bMFVeEt31wjrdnERqvA5aJNreXhVe%2FumerrpJ1UZ%2Fmj4nbcs3mQ6OsfgAUeq7K%2BHsUsNShKaY1mDoss71%2BVC4tE9Eqdax%2BBfWe8rpl%2B6BN%2Bg8aHKJ1Q&X-Amz-Signature=788b507e670893fdd751a2fb2784348c2a17d607631b529c25fb6faf9aa674fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NSR4QXM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqlY9W8aAMznoZdVuSD1cm8DsZZvGcL5ET%2BjGvM4HIvgIhAJtJgSaMNNqHKHe6IE030xmYPyRbgA4R18lXj1dDFmg0KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYMvikw1%2FqNAKAeccq3AM2hxqRje%2FoArre%2FijDoeMhvEvlLiLGNJABxBduTURO6VLLQYp7BvELJ8RhmTZwblqa7RGXBGscWccH6RFBe358plE5DAMBT9mH4gC3bGpnYTpxHtyf3ppGix4FBK9Wub0dPR4OuQ7z0IbRQYWq3oqe7ky2dox9x1Np1zl64s1BXVIpljsMcKKdY3WntQeafZ4TVEGMquYB0bRhwBThUntXWEg%2B8jpb%2F4fuXQLC3N6Fov3ZXcegJ%2BbSwLq26xhVHMRsjKHrsinGwaJOPSJ99cWmgiF4ZRGchuVXSwbRucV7IJeblIdLkYE9J%2FsSKQGakUFBDm3b0GpOjuVipcbAYh5TbuTFXLVyvst41qKO%2B%2BEhGoL1zzEMHBIHjkDERZvdjsDxMosYlicRc7MdQQ7sidkFR77KYVSrTboIVKf6uZ8FwqGEfhIwYaV98sCxwp4hgEuYvkZynbxmfUJGhGH%2FzvRagOqVC9mEUAnkU3C3VVavG7OK0ThXn14XDqN4%2BC3xTcEu4xj0ZndTniNZ3UQAg8hBQ2fya1gmhb6VkyMGR75%2FzZHMJcpp4jKycYDDkhXQrf9MsY8NTUNsM9K4EFCu%2F7mAxZwDL6pLMWuyF%2FbsVIafn%2BGz8GTppytf324q0jCd4aS9BjqkATJhfNkdet27EWpuXTqxA99ICpt9JFxPE%2F%2BWbHEj6u6ts9vkch%2FFAcvzL3D9anVvQHYfhGIX%2FB8rh8A9if38JnFQpKN%2F%2FczkOxKky5G5KtOT2d9ZuDVxKB2hIvBrD9XuL7i8rIjPTo5rWiv%2BuurkuGdVYE5Lye%2FoVWqO4V%2FiylQbmW3I%2Bv6iL6HHEaAZ0gQY0XI4MZ5QeisP93z%2FDq2jBPZbcqz%2B&X-Amz-Signature=d89ce3b22a5bf7d4ce493477a4c48a0ee7a0bcf9cca999599ef72f4fb6c573f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MR4MFGU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFai0Yg3z37y5tyaEXBAGt1DHFYrwNUu4T2vV%2BzYkDAIgAgtqS6s0eR7BARIufhRvDT9p4mirj%2BkSmZNlsCI47cEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6Iz%2FAiOBJR9NPr7SrcA0aunXeu8tmz3nqP9PMrNROhfH6t1fhK7n2UHDlhgyWhi2GQO7rCOY9W5FyMBFdqTc%2FnphtyN4ff3JC9imXwem833at2X8fr6frdNno8gbolfxC3N7Qgim%2BINNMGsU9FgwK%2FDjjLGCTQXGtu8xxww9K1G3XPIUiIGFnOJRL4rurRF2wYq5sHLB6B5M0HU9MU1W0xSaBw4TPXXCGem15CZMnOhK2I4V2hwq8NstYqXhIc4lZc%2FNAUkbiE1FSSTFV9mwpDTqyXdlHsi3owTezUImRKEkq8eSC8FkUENC8zdekVkinYzCe7Oe8JtHzjzadWLFpCh13ES%2F5e3UD9TFcuUSmiML16AWvelbTjQK6qfTICtODZLYknl%2FtkMxxiUftCu9OkUxUEhfKX98P1lwMoySVix5jrM3UL%2B8XX%2BtKsEvCrhMZ59aKIC%2Ft%2BOA3E6Musxnx%2BSanBRwIMvixnMg4EHoNfspqswMhQ5ME1T4ct8%2FKmuQOWrjGa%2FcuSSaRNwI5t49IbuVZFsYn4ThSNhgBTOvNJW5E%2FdswkKS6YbAV1SqoWp2AE5umJtfkpkCKkNihvAJTvweyj9FBg6Lk5GZFzVjFKJl53KqUzJNjZJllBNOqWJdHmHyqJYo3X3DltMNzgpL0GOqUBYR6xhkf1g8o5RBFJEB5rU4UeYCCDvdZdvmWxvw59i2udNP9aV7IVY4LQiCmeBgVtNgw9liAjyuSvwIgrsjB7gHD1ZnaEQLz8JajbVxhi2DPzMYnTLw%2BbHDO1OCBrIlNTrOgSvUuW7bMIHYZChbYkZWy8LZbJri4TNQwAzBN8lBXF0YTDPa8KCRxDwc7oeFn0fUh0GdzNVnaMpxNmLQEwuZe7twdp&X-Amz-Signature=0e9ae520a27c3a01b1378578745dc11cae0dcd54189233e0ecd18ba4493997cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4N7N4EM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaZN%2FbHhGZdfIV3Ood%2FA4ffDStC7vejPSzM7KFsOm0sAiEAsYxCeOvPaPN5VZkcG50n44Pq5jFpMl83ECuPaEpCKdEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMAGThtUav%2BKzuCvircA9m3MnT0M9S%2FBPYegFlGW2MkyO4BcD%2BN%2BVJF1XFNFoXGgQp7fgtjVL5dHp7c1fcgAj5irPsYSJT2XMBjrrLk7%2F84lj94vfOZ0Q9ZlpQg8SfflGfp6rDHsqrsY3bev%2F%2BuGA5Gr8lCivSdvUFAP3giETdWmVbPveELZLAaNgfwYRHnBJZiG2xtDPIAW9FS%2BYVant6lOO93IXZSgj4qBByk6WP%2Ft2NGJkSHCbfxtWDOd2NZMCn9RB8Q7oK3fZnNY%2FoB77y4plmtqe%2Bu%2BYKZyDoS6Dp7Oboweh61DcKocp0LBgY1awVVk24fmCV5lBg53qvd1GiboBL7ZleedPLuUYd%2BZzwaNFI2DVwi7XwHtcs8Lf1xD1rNSbiT18ZnjiyEJfk6ipkt1IWZ4DboQsHd2DAqETalWKxqXuUYGzC9iqYCs0I6GFdtXLBL3NyjXTklubf8SaH8g2p3s5dOPY4uCDWlbDnkuqky0beObwjnxDXOx4mfOEPzzvFqLiHjHWostwaGrl0ILm854WsNvsRx3NQYto857LPxvyE9PDmOuNfYMsqNSSFmNcCpS3ZGjqA09DdTfPBvgtsYSMbaF2OvfeZbB1Pk0ZZahf5qSbLaBswwLhkMs7RtS7vG7kKau4lKMKnhpL0GOqUBxOSq4hYHdoK%2BSHDGU6wrM5iQ9XH3Kcr0I340bhI31675VqwqSikL972DJj8V%2Fv9kpEuMAgsyusetCn7IFr2mmZrwF%2Bfg9d9r%2F80yCMzR2bMFVeEt31wjrdnERqvA5aJNreXhVe%2FumerrpJ1UZ%2Fmj4nbcs3mQ6OsfgAUeq7K%2BHsUsNShKaY1mDoss71%2BVC4tE9Eqdax%2BBfWe8rpl%2B6BN%2Bg8aHKJ1Q&X-Amz-Signature=a46e0c1fd12b04c1d316cef997e376db75eaba0fa9121370c20e0167c7e167f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
