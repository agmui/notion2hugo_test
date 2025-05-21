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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TYWTKG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDAnmvJh%2Bv5kINt8WM1iP9yc35dJevzQEFPeoRPk%2BHPTAIhAKYPD1EBXZQTLV6Im8CXXyZMlijaFB2YQCcNCMRzkkBRKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCZRMxszf7%2Boow4PAq3AOmOycHgmLiI1lYcPGdV5LOmEZwPoTKGYm7fhYIWFPV1Iap4dvAAM3ZknKn2Lbx8vqmihPa5leGOT%2B1vyZ1jcXwjKhQ1AUiaPjKCaPqH0ABM3no2DUstKePe7sQgUWLUJwrxFILqtiqVqa%2F0sOx7OSZpbyZ0DjqGjup8QlA%2FB72b7dnnb3tMUmz3%2BOQk%2Bjroz%2FmoQwAABy8iwAQaWfXV2ROB8ct%2FzFUwwV4sjmpUETiWgHvmT8YSdwyum7qz42aR4BX%2BT%2BDjdbKyAG09%2BSqgDzqUFCk%2ByE0I23X34GcQdDgS%2FREEqStm2iOtDIQ2cwDd57mvHrWmQ2PTyHmsab8zQiMiIk1jQgjtN5rNQ0c9leL3vlpiJkjG6j%2FWHQWfvp%2BBw8MezRN9r9eSGibYBKp7mBFsQtF8obT5U2aQEolIBYSGnh9nxqZ4V3kyCsoFtuC%2FzypblIF6IYAMC%2Bx3LAHvghSj5SkZNS4YIYf3KHKFU3ZLXI8umZ89eveG7vAsymv0EB5iBieFh%2BbbdPC%2FetVvC5Rq0XTULccK1Kj5USHBy3oG0fqca8CSnBz7txDgfHngcHLgJ%2FGGJua%2B4tK5O1WEj7AYk8ABWe%2Fg%2Frhs92i9lunwZuwG%2FIe4opG3q%2BzCTCO87fBBjqkAV8LR1QlNhJKF8YztAJyMFvfMKrPB6UiVZljxETpMyE7xCc0O2gL4WRQlC400o9F2NpfhpKst42rW6wRw0bWlN4L2%2FSagWncY32yXOvNDvzrLE%2FibVc8N7HmpOAewjqRdthfhB%2F63JLweLu8TgQrTSnd%2Bccw6WEyW9liMlpll5qm3BMuQd67m1TunR8a4LZ1Ri%2FfKYhGOT42pKz8KztRyJgwNSiU&X-Amz-Signature=a1f339e726a25e61d08ea080cc70019cc8a3f7d7d91273ba201f61e05574cfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TYWTKG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDAnmvJh%2Bv5kINt8WM1iP9yc35dJevzQEFPeoRPk%2BHPTAIhAKYPD1EBXZQTLV6Im8CXXyZMlijaFB2YQCcNCMRzkkBRKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCZRMxszf7%2Boow4PAq3AOmOycHgmLiI1lYcPGdV5LOmEZwPoTKGYm7fhYIWFPV1Iap4dvAAM3ZknKn2Lbx8vqmihPa5leGOT%2B1vyZ1jcXwjKhQ1AUiaPjKCaPqH0ABM3no2DUstKePe7sQgUWLUJwrxFILqtiqVqa%2F0sOx7OSZpbyZ0DjqGjup8QlA%2FB72b7dnnb3tMUmz3%2BOQk%2Bjroz%2FmoQwAABy8iwAQaWfXV2ROB8ct%2FzFUwwV4sjmpUETiWgHvmT8YSdwyum7qz42aR4BX%2BT%2BDjdbKyAG09%2BSqgDzqUFCk%2ByE0I23X34GcQdDgS%2FREEqStm2iOtDIQ2cwDd57mvHrWmQ2PTyHmsab8zQiMiIk1jQgjtN5rNQ0c9leL3vlpiJkjG6j%2FWHQWfvp%2BBw8MezRN9r9eSGibYBKp7mBFsQtF8obT5U2aQEolIBYSGnh9nxqZ4V3kyCsoFtuC%2FzypblIF6IYAMC%2Bx3LAHvghSj5SkZNS4YIYf3KHKFU3ZLXI8umZ89eveG7vAsymv0EB5iBieFh%2BbbdPC%2FetVvC5Rq0XTULccK1Kj5USHBy3oG0fqca8CSnBz7txDgfHngcHLgJ%2FGGJua%2B4tK5O1WEj7AYk8ABWe%2Fg%2Frhs92i9lunwZuwG%2FIe4opG3q%2BzCTCO87fBBjqkAV8LR1QlNhJKF8YztAJyMFvfMKrPB6UiVZljxETpMyE7xCc0O2gL4WRQlC400o9F2NpfhpKst42rW6wRw0bWlN4L2%2FSagWncY32yXOvNDvzrLE%2FibVc8N7HmpOAewjqRdthfhB%2F63JLweLu8TgQrTSnd%2Bccw6WEyW9liMlpll5qm3BMuQd67m1TunR8a4LZ1Ri%2FfKYhGOT42pKz8KztRyJgwNSiU&X-Amz-Signature=6d827d31a46eab75d88ff7fe4fab331ad6c3e965e39eae0c200ebf0977f7e472&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TYWTKG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDAnmvJh%2Bv5kINt8WM1iP9yc35dJevzQEFPeoRPk%2BHPTAIhAKYPD1EBXZQTLV6Im8CXXyZMlijaFB2YQCcNCMRzkkBRKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCZRMxszf7%2Boow4PAq3AOmOycHgmLiI1lYcPGdV5LOmEZwPoTKGYm7fhYIWFPV1Iap4dvAAM3ZknKn2Lbx8vqmihPa5leGOT%2B1vyZ1jcXwjKhQ1AUiaPjKCaPqH0ABM3no2DUstKePe7sQgUWLUJwrxFILqtiqVqa%2F0sOx7OSZpbyZ0DjqGjup8QlA%2FB72b7dnnb3tMUmz3%2BOQk%2Bjroz%2FmoQwAABy8iwAQaWfXV2ROB8ct%2FzFUwwV4sjmpUETiWgHvmT8YSdwyum7qz42aR4BX%2BT%2BDjdbKyAG09%2BSqgDzqUFCk%2ByE0I23X34GcQdDgS%2FREEqStm2iOtDIQ2cwDd57mvHrWmQ2PTyHmsab8zQiMiIk1jQgjtN5rNQ0c9leL3vlpiJkjG6j%2FWHQWfvp%2BBw8MezRN9r9eSGibYBKp7mBFsQtF8obT5U2aQEolIBYSGnh9nxqZ4V3kyCsoFtuC%2FzypblIF6IYAMC%2Bx3LAHvghSj5SkZNS4YIYf3KHKFU3ZLXI8umZ89eveG7vAsymv0EB5iBieFh%2BbbdPC%2FetVvC5Rq0XTULccK1Kj5USHBy3oG0fqca8CSnBz7txDgfHngcHLgJ%2FGGJua%2B4tK5O1WEj7AYk8ABWe%2Fg%2Frhs92i9lunwZuwG%2FIe4opG3q%2BzCTCO87fBBjqkAV8LR1QlNhJKF8YztAJyMFvfMKrPB6UiVZljxETpMyE7xCc0O2gL4WRQlC400o9F2NpfhpKst42rW6wRw0bWlN4L2%2FSagWncY32yXOvNDvzrLE%2FibVc8N7HmpOAewjqRdthfhB%2F63JLweLu8TgQrTSnd%2Bccw6WEyW9liMlpll5qm3BMuQd67m1TunR8a4LZ1Ri%2FfKYhGOT42pKz8KztRyJgwNSiU&X-Amz-Signature=d9ec6a2e309da05624c414466e25a3381cf5d303813378f18efacad3103557ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5TOKEE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICNCLBTktFQOfun92txk%2B4vpiK8M7Qu6fR7FEUNrFlrLAiBjjBa1ZJJmllV1XHfvQVoYmcKUlLjTt59qconfgqcKmCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcyct9XN%2F%2FYlCDKmhKtwDMVxWRtUbkZ%2Bkd1KmlVSP66Z8TBxS17MBpVvCICwQBhnYdW3MAQTr7CFGR21TcZpjKyZBWA4vg4%2FiWH8Uiwj2XCBqyJjLVMHXjHINC5LBYQEQnKmiRcMRwQ4l9yZ5ZBGdz6Sysn9Op7Q6qxBrJxMKvBXxthUhsujynq%2FbwYafFg7mBnM4%2B%2BWeLgcJEX%2BJo5jgm6hw7ERingwrGvx1r0HOzTRuuK4RitcVm9NGIhT0b8%2FKTnDVZzKr1WAFoYErrwFwgwKbOsF71Dyr64NHe8ogeZH56rF28UB65MJOQIYOpYcHnZTFLrtbptQNHF8WOLOR%2FptRi7oJgNziMj2GEkgtCYGZRoI509IB%2FXzJ7wf4y2eXUFpbTGxj7MBhFYdVEGWHh%2BXuQ7eTA2Vai2Y9ENHaxa3WsRDI6Jnkb3Mb7bOM%2FVH0NA6KUmQjZLpu5ddhmOki0Y7fMPagFwi98RIHBZzUM5rKRWfkGBHcJIZjy4wR6F3diYsMXmRGk4oIzs34EemIpFXbI%2Bn0N77brEqm3i0xhgvvYfrHwK0x0cM0q3PWeAREcQrgrMywrcGUKVR1uO8GEijavom4%2B86q45lCQ6LRKkDH1RBAAxjry5dCDaZcHSElf9IsA6dM83xYv1Ewy%2FK3wQY6pgHCIVFCDnnj3D8OClb5zysMC57GnT8sZNv1Zb9CqZmiLSBnDZFCSLivqm7YBBL2F7e4H0ekOfUwgunq7JnDvRBsmR7uOu6MC0Va68xxcc%2BjixWAv6h3tr4YTrMsC1LYKN10OGQkZa%2F5yaYYLU6tjjWw8unzuCB%2FeYFOrUeUzSMGrovm7chV%2BXoHV01iTAYazxp5J3B14TshKEK0jajdzGC6%2FFtK2j%2B6&X-Amz-Signature=6f87aeb831c73be277a647471dab51ad65854814368415c2a55957cabcfee213&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFPVFR7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIG5Ebdyt5y2YuFGVzS0IP181GzxceK%2BvnKd9QGJFyEzqAiEAk4gkkL2FynS5U6pNewXNwUJfl86k8aguzIVrR86S1jsqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKKCrGI0eIrjke%2FUSrcA%2BjyQWs%2BBy17EB4WLvil5FYHbndwqjuEpEMIQsbI21iYWpfGYWZLjFqidJlwwcfJTg%2Bra7FAdj0km9htAWIlrgXV4sL3TyXJCkZ%2Fs4HraO9uuuq33kQlE6Go4Jy0FWpKi3WF%2B5J6h0Gs9ahuJzYuP8FD4TD23TGyQSKlpwTInlDx%2FxfTEm79pPXY9pPbJLAyBjzw59pUxQ%2FsvLjifCz6yj9wUnIfdBDQ97X18A%2Fa2riBQ%2BUrVTYycHIx5rE%2Fe2hl4yuQqqBxmE2b5hS1QRi2%2BFYXpn8aH5kaJuiYR6gfdG1JKougvz5LIMVBKH1XsWGrIi8quJhzbsoHl%2BwIGXL0qvbZSVGQU1wRrVfRSRBhq1qN4LOqSdvgHiyynPc5zgQxZo5GDtSN7w9UVng6kdlnWeB7l7Kl%2Fku2JauoMZeNz6bAUAEasT4u%2BkfuSjrMgKpe1qqsOJm%2ByC2EN6WbOLN%2F2J7x%2Bpmj0b2zbngzwsNG7o9a6gkw9V6bb8A2zv7IqBAiRemPuLi46WQ6j80Fk9iCH0363TEe6kXOTsEwBE3Vi4mrKE4eDLywogzGD9IaIVqtfIIwSQJnvyY2BDpiXYKqoRzXqkwexM2tDbwyfyGCEwJ9JJIURJplXfhbOISAMJXzt8EGOqUBEpWuC4JoUavv4mIMihDL0GAgO3IczL7j2xosKx62FMwORtrXBExeyJ8wCmXpbXhlVrk%2BWFn%2Bee%2BK0aVTny5DFcWLCSZRBG%2BZX3I4bKup4Vud%2BIf9K2xNIojQFksR8kTkk15b3n6AjpoH5%2F5%2Ff6K4VLpT5ZvVD9PFwdrns%2F3USOqFy21MzRqkfg9lByYDTCIeXChvdoamwn2jLs0qOk2%2BrnJ0mBje&X-Amz-Signature=9bd1b13ec677bb816177877967699a13f15dbc4b1d9e80ef0d331999443c57a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TYWTKG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDAnmvJh%2Bv5kINt8WM1iP9yc35dJevzQEFPeoRPk%2BHPTAIhAKYPD1EBXZQTLV6Im8CXXyZMlijaFB2YQCcNCMRzkkBRKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCZRMxszf7%2Boow4PAq3AOmOycHgmLiI1lYcPGdV5LOmEZwPoTKGYm7fhYIWFPV1Iap4dvAAM3ZknKn2Lbx8vqmihPa5leGOT%2B1vyZ1jcXwjKhQ1AUiaPjKCaPqH0ABM3no2DUstKePe7sQgUWLUJwrxFILqtiqVqa%2F0sOx7OSZpbyZ0DjqGjup8QlA%2FB72b7dnnb3tMUmz3%2BOQk%2Bjroz%2FmoQwAABy8iwAQaWfXV2ROB8ct%2FzFUwwV4sjmpUETiWgHvmT8YSdwyum7qz42aR4BX%2BT%2BDjdbKyAG09%2BSqgDzqUFCk%2ByE0I23X34GcQdDgS%2FREEqStm2iOtDIQ2cwDd57mvHrWmQ2PTyHmsab8zQiMiIk1jQgjtN5rNQ0c9leL3vlpiJkjG6j%2FWHQWfvp%2BBw8MezRN9r9eSGibYBKp7mBFsQtF8obT5U2aQEolIBYSGnh9nxqZ4V3kyCsoFtuC%2FzypblIF6IYAMC%2Bx3LAHvghSj5SkZNS4YIYf3KHKFU3ZLXI8umZ89eveG7vAsymv0EB5iBieFh%2BbbdPC%2FetVvC5Rq0XTULccK1Kj5USHBy3oG0fqca8CSnBz7txDgfHngcHLgJ%2FGGJua%2B4tK5O1WEj7AYk8ABWe%2Fg%2Frhs92i9lunwZuwG%2FIe4opG3q%2BzCTCO87fBBjqkAV8LR1QlNhJKF8YztAJyMFvfMKrPB6UiVZljxETpMyE7xCc0O2gL4WRQlC400o9F2NpfhpKst42rW6wRw0bWlN4L2%2FSagWncY32yXOvNDvzrLE%2FibVc8N7HmpOAewjqRdthfhB%2F63JLweLu8TgQrTSnd%2Bccw6WEyW9liMlpll5qm3BMuQd67m1TunR8a4LZ1Ri%2FfKYhGOT42pKz8KztRyJgwNSiU&X-Amz-Signature=833881eee86fd0373d65bb4f3c8adf08a1a77dec7874f782df5df2bd44f9dccc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
