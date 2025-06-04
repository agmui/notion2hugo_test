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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFEPPQ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGPZ6lIrfguKjTUJAZcyNizxy28wNOmykJWbQlH77W6AiEAt8O5gMT%2FCrgyl1yTkaIKBToN0xW4jRM3%2BXWJ22s%2Bl6gq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDETm6RiuvN1pcuzuAircA4VmjghJYnsCVjXpWhHval3QnTrS8qp1zpotVpi91E%2F3d%2FscLRAv8wv0MsRS8kf1cMAzqKk0vABnQSv4d9EvYjqHYbQ%2FT%2BU1swKN86uedA8cK11iBfqMW5TBSxZXJR8%2BqENyXoqMtIVWKqm7uzPj6yYLtm46RiiPESzhZZhNiWRR3hEECEuwNM1QTIqk1QySIGMT0RxMTZppe4ZmSIRbM4pircG87wP7%2B9wZTECBTeRWI0hFJAemduRnwAX%2BI%2FC0aq%2Fab4AA5otDXQdtmWJW4XiSWwklkK6sX%2BV9a1LbLbywYziO0t8%2FclSqk%2B0FmcwM%2FqvYuT4kO%2FrRbeAenctQ%2F2kYv3%2FFtW2ClrjhR%2FpbTpOBxYfE%2BBJ8FF89evAhOh3uJezCNCXF1zCwfmUTfyrDS9%2FMMCjVaS%2FinaAVZxc2mQu9ZaNZBK%2FEnpBlJdbRDaQxJ1rvpi7GRUJgkd9lcJCKKDFdvAosRf1lu8qglSMhtkbG356TYBG%2F43756cdh%2FFJ9GOJXhpQWj%2FBHiTAUPlTJuTLVPo9XNYH3Gmu5y8Z3ElP4E153nsdaDLtx7BtGXyZnmyfrykWC1CZAicsfoOmSa4ajKbLDGPvGi%2BB2eaLUvBtVaoX8%2FOxuriBx4d9aMIzVgsIGOqUBPclfEhqm1IxqGR1GVmNfTiABOsx71qVKJVnj9Vg7TYgY8ddiQJBUTwLn6KH%2Byjx21XCIUZFgsehyO2DvthxKOSa0cdQqkDM1f2f7INvkp19C%2BxJTJkho7PNdoJXdsYp17hKAz1NT%2BNHt610zeYgw588SIsirLt352G4SXMB9EM5AihgtAsjr3IekRJXgDkpBtUeJeNvVlBEuoQXeoj%2BI5vngZ72u&X-Amz-Signature=59eca84ab13e0eb79ae0b12ae06c9b22259872e06c5a7f6b06d7e45bbab684be&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFEPPQ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGPZ6lIrfguKjTUJAZcyNizxy28wNOmykJWbQlH77W6AiEAt8O5gMT%2FCrgyl1yTkaIKBToN0xW4jRM3%2BXWJ22s%2Bl6gq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDETm6RiuvN1pcuzuAircA4VmjghJYnsCVjXpWhHval3QnTrS8qp1zpotVpi91E%2F3d%2FscLRAv8wv0MsRS8kf1cMAzqKk0vABnQSv4d9EvYjqHYbQ%2FT%2BU1swKN86uedA8cK11iBfqMW5TBSxZXJR8%2BqENyXoqMtIVWKqm7uzPj6yYLtm46RiiPESzhZZhNiWRR3hEECEuwNM1QTIqk1QySIGMT0RxMTZppe4ZmSIRbM4pircG87wP7%2B9wZTECBTeRWI0hFJAemduRnwAX%2BI%2FC0aq%2Fab4AA5otDXQdtmWJW4XiSWwklkK6sX%2BV9a1LbLbywYziO0t8%2FclSqk%2B0FmcwM%2FqvYuT4kO%2FrRbeAenctQ%2F2kYv3%2FFtW2ClrjhR%2FpbTpOBxYfE%2BBJ8FF89evAhOh3uJezCNCXF1zCwfmUTfyrDS9%2FMMCjVaS%2FinaAVZxc2mQu9ZaNZBK%2FEnpBlJdbRDaQxJ1rvpi7GRUJgkd9lcJCKKDFdvAosRf1lu8qglSMhtkbG356TYBG%2F43756cdh%2FFJ9GOJXhpQWj%2FBHiTAUPlTJuTLVPo9XNYH3Gmu5y8Z3ElP4E153nsdaDLtx7BtGXyZnmyfrykWC1CZAicsfoOmSa4ajKbLDGPvGi%2BB2eaLUvBtVaoX8%2FOxuriBx4d9aMIzVgsIGOqUBPclfEhqm1IxqGR1GVmNfTiABOsx71qVKJVnj9Vg7TYgY8ddiQJBUTwLn6KH%2Byjx21XCIUZFgsehyO2DvthxKOSa0cdQqkDM1f2f7INvkp19C%2BxJTJkho7PNdoJXdsYp17hKAz1NT%2BNHt610zeYgw588SIsirLt352G4SXMB9EM5AihgtAsjr3IekRJXgDkpBtUeJeNvVlBEuoQXeoj%2BI5vngZ72u&X-Amz-Signature=f267a7902197f8a9379afdf546df91f16d72038d930eebb29f6d771aab92c47a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFEPPQ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGPZ6lIrfguKjTUJAZcyNizxy28wNOmykJWbQlH77W6AiEAt8O5gMT%2FCrgyl1yTkaIKBToN0xW4jRM3%2BXWJ22s%2Bl6gq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDETm6RiuvN1pcuzuAircA4VmjghJYnsCVjXpWhHval3QnTrS8qp1zpotVpi91E%2F3d%2FscLRAv8wv0MsRS8kf1cMAzqKk0vABnQSv4d9EvYjqHYbQ%2FT%2BU1swKN86uedA8cK11iBfqMW5TBSxZXJR8%2BqENyXoqMtIVWKqm7uzPj6yYLtm46RiiPESzhZZhNiWRR3hEECEuwNM1QTIqk1QySIGMT0RxMTZppe4ZmSIRbM4pircG87wP7%2B9wZTECBTeRWI0hFJAemduRnwAX%2BI%2FC0aq%2Fab4AA5otDXQdtmWJW4XiSWwklkK6sX%2BV9a1LbLbywYziO0t8%2FclSqk%2B0FmcwM%2FqvYuT4kO%2FrRbeAenctQ%2F2kYv3%2FFtW2ClrjhR%2FpbTpOBxYfE%2BBJ8FF89evAhOh3uJezCNCXF1zCwfmUTfyrDS9%2FMMCjVaS%2FinaAVZxc2mQu9ZaNZBK%2FEnpBlJdbRDaQxJ1rvpi7GRUJgkd9lcJCKKDFdvAosRf1lu8qglSMhtkbG356TYBG%2F43756cdh%2FFJ9GOJXhpQWj%2FBHiTAUPlTJuTLVPo9XNYH3Gmu5y8Z3ElP4E153nsdaDLtx7BtGXyZnmyfrykWC1CZAicsfoOmSa4ajKbLDGPvGi%2BB2eaLUvBtVaoX8%2FOxuriBx4d9aMIzVgsIGOqUBPclfEhqm1IxqGR1GVmNfTiABOsx71qVKJVnj9Vg7TYgY8ddiQJBUTwLn6KH%2Byjx21XCIUZFgsehyO2DvthxKOSa0cdQqkDM1f2f7INvkp19C%2BxJTJkho7PNdoJXdsYp17hKAz1NT%2BNHt610zeYgw588SIsirLt352G4SXMB9EM5AihgtAsjr3IekRJXgDkpBtUeJeNvVlBEuoQXeoj%2BI5vngZ72u&X-Amz-Signature=383bf8eecaad506d718d95c329e3a9ebb15c8f99fc9e72e343854a0679fc18dd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6A4IGI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHbTmOG3ro6g3EdYXl9Y5u3kxVL54xvx1wHPMcipvtuBAiBGuFlyWD5uXT%2FxtbpX1cwcRU8PlpoEmXJ7KV2y0j3t5Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQLbWzhqAOoSAOi9rKtwDFCM%2Bn356qvMylUYMdoijoRr9qE3WiSdH0HAOrVnvuuT%2FqJjoGco8yr3%2FfR4ZuB8DxAuzSxajHyWY52E3h7OJLCQLujJE5ZdEgms3%2FzDW8B27FlGttoZokjURDqrL87OTVozl%2BcanNHYfvB7IiZ24SXMjXq4WzfwTH9f3VkM92geuPj8O4lUEqt%2F4Wra%2FEDsMZE8JIWma4srMYFkLin6tDi7zXeWBE%2BwEFPFsX6N5yMiOOT8lGRIhVFmj6gho0wQGKe4CH8g9MHSbE1foDlelQMA2%2Fu4g5WtDF9p7Zs4X3mQGg4DrtxjAB13op6fbS1CGLDH9QU%2BhulvHLsgOB6VHZ3ytuvhDOR%2FHPP99gG474lQoWSwP%2FLtexVaUyZYvM%2Bm%2BWINSkhPdrz9lC4jNK2JuVeQrnKdJFpN2Gx5FAt9jCWJVe3MiSwX9JsUKkBaJ%2FWOv45jMKV%2BDq39DyjJyh61piMLN5fv5e0Vhcn6phJsxU4m1zcMm37mLbRpwYKSJTtxQUI%2FzaGRcXxBOtvq9ChCQPDmK0jWmHIkqpAqwUizjUnvvTlE8svPlZeWX9Otf3HjuZY%2FhODAU3tCKKxKXkDerhJbzPzT0TgzwnhxHpvauaIigHLPK9S78Q6SnOXIwwdSCwgY6pgHMCK9NcknvzyoxUxrkUhdoerlGycuH0n%2FufLnQBHXIe0%2FbKpMKZJIrbQ2xLmRqoegbbEs0HIZ6hDjx7OmSaw7%2FhRdwlNC3QjpkIamqMdPgfQ53nSx3j2SUYhKbV%2Bm0iTH3E%2FJRT%2B7CNkm9%2BDJgUPTchMZQoCshxk3LqY%2BEH0XbCBTyoDtO%2BMzochwBi0mVQW6EBYMQuwKO0R5QM0OzV00CAMWpJqT8&X-Amz-Signature=c49359e2d02ab7e85cbfd66db8bdf085c82c34c823cc3f3763a038f32b09542b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI5OF2JF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCOGlO2Mhba75jWagFkh2yxiCVINDG4G2q1LZYPraGMAgIgdezS%2FjMvl7uFeF9v4S1ymoX8JBz6sMEPTOQIKyXZ1OEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJ88VnTfWruDOMfNmircAzrMclzxm5%2BslG%2FvXa%2FrmZLR0kyJ5naUUHOhRbcsWoGDU8PT4gUJukYNXRG06UPEQIvKjcN0cM6%2BlrXwNSkG%2BSvnTPLCETS0SX5tlGrGX4si0aks%2Fs28SryJednzcRLNvUASkiHaW%2BROP7tG3lFRlzEf%2B57K1Qq3jqK0Zwj80%2FsiT0ARlDesSjSwdy%2Ft5uyailrAXlSrzYgb9W2bOqWTn%2Bj1sUZd7Zjx3IarFjCczWnTBKkalPEW%2BN61NZhjkh5pkdECVv4G%2Fey3TTsA0zJIqGJucVeXE%2FQKhOxlFwQIFsxDZU8JzZYbeinzvqNyaDEiSy6T8smUmOwQgd4lhYIG%2FKed02w9e%2Fcinp%2FKRcbUzyIxslHOhdrb%2B5epFLhA0ee%2BKri4nE%2FkU7cMbIbuaqu7o4hylE%2FE2pFnoWj46U8Rj6Vj5t33sPw3ccHQuvZLDxIx6bdnjL6Q7NXFuwCfVK4qVYg0Uj137ySv1%2Fwcg0MEN35qTs0f8o%2Bc3%2BnS8Ii49dhwLwgXTfogl7ACsIs%2FH0%2BZ4nhi5rDqZ2nG1g7enl1werxgfMh4Cf8MtrLPKW37S8JCSGykmpqCBS4rsDPt0pXK4TKrwDMx%2Bab1%2BdPmTWEJ4ftgIS%2BdkeRKRIXRYU0IMOTUgsIGOqUBa2CtLdJ30XcdDTNtiyE1IoUD5SZp6YwyAmoJAt1t%2B8Dwci%2BUZ%2FxU3R55zgzZrMWUck3myfko3orsITyMyRinKS%2B2C8pFOvd4J2Tf9nJRsy3P3HfrAe14Y4N3t102gjjXeaDcIPfXj7rvGKbD6cKZbDT0htYCjl9MMrWGfWun3WAW3KdZWSRM46zX85hC7H%2BxBRCsEjCa9L7%2FIIHejLTColOchSoM&X-Amz-Signature=b1f8b6ac980cb5757d9ec3ee9f2a11eec8999f5f416e6325683be708a9876c87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFEPPQ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGPZ6lIrfguKjTUJAZcyNizxy28wNOmykJWbQlH77W6AiEAt8O5gMT%2FCrgyl1yTkaIKBToN0xW4jRM3%2BXWJ22s%2Bl6gq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDETm6RiuvN1pcuzuAircA4VmjghJYnsCVjXpWhHval3QnTrS8qp1zpotVpi91E%2F3d%2FscLRAv8wv0MsRS8kf1cMAzqKk0vABnQSv4d9EvYjqHYbQ%2FT%2BU1swKN86uedA8cK11iBfqMW5TBSxZXJR8%2BqENyXoqMtIVWKqm7uzPj6yYLtm46RiiPESzhZZhNiWRR3hEECEuwNM1QTIqk1QySIGMT0RxMTZppe4ZmSIRbM4pircG87wP7%2B9wZTECBTeRWI0hFJAemduRnwAX%2BI%2FC0aq%2Fab4AA5otDXQdtmWJW4XiSWwklkK6sX%2BV9a1LbLbywYziO0t8%2FclSqk%2B0FmcwM%2FqvYuT4kO%2FrRbeAenctQ%2F2kYv3%2FFtW2ClrjhR%2FpbTpOBxYfE%2BBJ8FF89evAhOh3uJezCNCXF1zCwfmUTfyrDS9%2FMMCjVaS%2FinaAVZxc2mQu9ZaNZBK%2FEnpBlJdbRDaQxJ1rvpi7GRUJgkd9lcJCKKDFdvAosRf1lu8qglSMhtkbG356TYBG%2F43756cdh%2FFJ9GOJXhpQWj%2FBHiTAUPlTJuTLVPo9XNYH3Gmu5y8Z3ElP4E153nsdaDLtx7BtGXyZnmyfrykWC1CZAicsfoOmSa4ajKbLDGPvGi%2BB2eaLUvBtVaoX8%2FOxuriBx4d9aMIzVgsIGOqUBPclfEhqm1IxqGR1GVmNfTiABOsx71qVKJVnj9Vg7TYgY8ddiQJBUTwLn6KH%2Byjx21XCIUZFgsehyO2DvthxKOSa0cdQqkDM1f2f7INvkp19C%2BxJTJkho7PNdoJXdsYp17hKAz1NT%2BNHt610zeYgw588SIsirLt352G4SXMB9EM5AihgtAsjr3IekRJXgDkpBtUeJeNvVlBEuoQXeoj%2BI5vngZ72u&X-Amz-Signature=033beb86ec7da4965a701e36714ad08ec508a78cca864822867484f273f8fdb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
