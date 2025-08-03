---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB6VIA6Z%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwN9DTltg9%2BTFEdrkPlymPMZSLIN7fYhUbQMdXvytDbAiBw4ccy7U5UcZiXkclEScWzngxIVsVWjrtBY6u0cJgueir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMMRD%2Fr26HnFG3RmvSKtwDIbjZkLbrTatrFGvDo51DDPvPtKpU6b1lztTSnRLM1yV95rxy3THt87S4OGjMkcMv4UnlKZlczwXtlDhq9iRqszGCM6Ppub7b3lJyp%2Fzxm1q%2FJQW50XEmYfXOslVsV90Yp7NArXqByC3E1DKfRICqtvpYNmdO9kSy%2B9heCUfvVC5PoNQocx2r6WZQYIR8VCfp2yo5KmB4q5g%2FrA0JZXVP7gSKcqbDVfdE6RUYMJYmJ%2F0r2AxdaHnmV04rnLOiqUBlY7l3rTvh64rS9iASFmpqOD41SPArUjQAHKQ73gKzxIwd%2FjZzvMdU%2B7F5zIRQA8aRzlFko1ADOKZnMf4vmu5Eg1LoEINZsztl5JQw%2BKIPj%2FD0nCYwORfW%2BE5qY0EvJy9cd7h0d%2B0voXZtJNnRNv1DajVhVu2PkkP%2BFnHYnk%2BlOdCu7okmWWMryKBpsVBJlwJlmeRYQJiauc%2BsfHBJZgiERvk7bPqliys%2Fe4viK513C6el00UWPmxIQl9OTXsueBK45xLhOIU7cQufAcb001EDagn14F4KG7objUdj3pJB596CUjTYkbkb551boOiqz99MDRT3gWouz9c8oDBSalnikx2cGu98CCiZ71m%2B%2F7mjYjEGT19qQ7FWl6E24BEw59m%2BxAY6pgEI7Mhdupqd%2FsD9UQbVzp8sATPO5Q0de8eN9pY6ph92cltxcdGUG%2FidjPm8wj4BfqQw9IWfanDYtKtLZK3xWOhg7%2FqaTLRuCcxPWXi9JsU1dL7NFPjSpHVg4y0qE6yqEhE5%2FlciZ9FPuLKmUY2gx85cSbINKr9nhn90SByQrcdxCLFCKUQseEdH9%2FMKl18%2Fna5th0t1qmHX4%2FrUQKqMgLSVIFUWXiOq&X-Amz-Signature=453b5a733ad867835ce4586e87c4f87e853ffe20fbaca59423a057b11b5d5e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB6VIA6Z%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwN9DTltg9%2BTFEdrkPlymPMZSLIN7fYhUbQMdXvytDbAiBw4ccy7U5UcZiXkclEScWzngxIVsVWjrtBY6u0cJgueir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMMRD%2Fr26HnFG3RmvSKtwDIbjZkLbrTatrFGvDo51DDPvPtKpU6b1lztTSnRLM1yV95rxy3THt87S4OGjMkcMv4UnlKZlczwXtlDhq9iRqszGCM6Ppub7b3lJyp%2Fzxm1q%2FJQW50XEmYfXOslVsV90Yp7NArXqByC3E1DKfRICqtvpYNmdO9kSy%2B9heCUfvVC5PoNQocx2r6WZQYIR8VCfp2yo5KmB4q5g%2FrA0JZXVP7gSKcqbDVfdE6RUYMJYmJ%2F0r2AxdaHnmV04rnLOiqUBlY7l3rTvh64rS9iASFmpqOD41SPArUjQAHKQ73gKzxIwd%2FjZzvMdU%2B7F5zIRQA8aRzlFko1ADOKZnMf4vmu5Eg1LoEINZsztl5JQw%2BKIPj%2FD0nCYwORfW%2BE5qY0EvJy9cd7h0d%2B0voXZtJNnRNv1DajVhVu2PkkP%2BFnHYnk%2BlOdCu7okmWWMryKBpsVBJlwJlmeRYQJiauc%2BsfHBJZgiERvk7bPqliys%2Fe4viK513C6el00UWPmxIQl9OTXsueBK45xLhOIU7cQufAcb001EDagn14F4KG7objUdj3pJB596CUjTYkbkb551boOiqz99MDRT3gWouz9c8oDBSalnikx2cGu98CCiZ71m%2B%2F7mjYjEGT19qQ7FWl6E24BEw59m%2BxAY6pgEI7Mhdupqd%2FsD9UQbVzp8sATPO5Q0de8eN9pY6ph92cltxcdGUG%2FidjPm8wj4BfqQw9IWfanDYtKtLZK3xWOhg7%2FqaTLRuCcxPWXi9JsU1dL7NFPjSpHVg4y0qE6yqEhE5%2FlciZ9FPuLKmUY2gx85cSbINKr9nhn90SByQrcdxCLFCKUQseEdH9%2FMKl18%2Fna5th0t1qmHX4%2FrUQKqMgLSVIFUWXiOq&X-Amz-Signature=a9822ff140dd8a776679ac145f895f9554973e16f3caef3e318ccff8576b2a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
