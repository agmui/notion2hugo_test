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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGZFE7J7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5icN9YBEfK%2BQy2vxOVeABqGNjYjyq0kZ0xYExJ%2B7FVAIgEP49r9VtlEjYMgbe3GqyRMufXNK6yliShytHaumRj3sqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDp3htQdlUxevp5iyrcA9a8ogmo%2BPkLRPcFac70CyryuAnLCbdPI%2Fiw7wZrN3DUYUeXb2UD4Oyi4dL7vlJgQxRqX5I%2F%2B0euyWazx0w9IMJWPzjA4tXrjXnbCnc2mFhDbHDiM7yEaEa9nuSUjvGu19axYIRg3vFa0SZ3njN8ukRrqH0kYHOrB4IdswFH0PF30TZBo1b8Gp%2FuIQhFzt%2BDcxQYI3N5H%2Bza7jGuCF6lfZNGy6ZusihMTavx3UMARA7Jtl%2Bk4gykMG6J7In9Tl4ZKEbZ2YPWz%2F8u36ZO5WS2BYPaavSbtHsWCWigsY6p1q8RpVs91RA%2F%2B7JlIv27thxDhK9n2F4%2BarCRJChveRCMEzLSiTfc%2BvSk1cPQOLbZHfkVJAd%2FdhbIyVT5IcPpzmteXCABs9MfD20BvR2%2FV36ga2Str436319xc4nwF8UbMS%2FEsFBDe84E2I1rZCEsRl5UOF3ZzWrQ5MYLL2NE3IRxYAaIO9NmQJWpSx0rkRyQWgavbR1akOhkKZ3WnDzh1Rgm%2FmVmThNHeKjS3KyNvVe0rzdH65DZhFBty0czGfWS16MAGFmDgHh3YwnjvAkHizoQClyGrnbytitDfBwwsDY8saQB0McHPd%2Foz34lODksCNku%2FZM0hg1BDXuwYUsYMKHS8LwGOqUBtXqhB1thh%2BPC7CdOD68FisvwtjExwfpUESUS4caP0hSWJ%2Ff8RKvDfjYcM5%2FkwWO2ujvoZCQpdV%2FxP6u621qNm3jlj3qua8srl4qTF3V9HbgkaUfo6QUcrEz9Mj6u%2BctweqeGQdQOl4VS%2BjMuOboe7t%2BtA4aKBtntQIBUm6biQbnR9mclSMN3I08cVMa9TkuzTemOuCe1urvnBMbMXg6TFmAR0t6U&X-Amz-Signature=f3cd16fa569f79412ef6458a74cb0191b45bb6d3de1f19132b515c692ec988dc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGZFE7J7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5icN9YBEfK%2BQy2vxOVeABqGNjYjyq0kZ0xYExJ%2B7FVAIgEP49r9VtlEjYMgbe3GqyRMufXNK6yliShytHaumRj3sqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDp3htQdlUxevp5iyrcA9a8ogmo%2BPkLRPcFac70CyryuAnLCbdPI%2Fiw7wZrN3DUYUeXb2UD4Oyi4dL7vlJgQxRqX5I%2F%2B0euyWazx0w9IMJWPzjA4tXrjXnbCnc2mFhDbHDiM7yEaEa9nuSUjvGu19axYIRg3vFa0SZ3njN8ukRrqH0kYHOrB4IdswFH0PF30TZBo1b8Gp%2FuIQhFzt%2BDcxQYI3N5H%2Bza7jGuCF6lfZNGy6ZusihMTavx3UMARA7Jtl%2Bk4gykMG6J7In9Tl4ZKEbZ2YPWz%2F8u36ZO5WS2BYPaavSbtHsWCWigsY6p1q8RpVs91RA%2F%2B7JlIv27thxDhK9n2F4%2BarCRJChveRCMEzLSiTfc%2BvSk1cPQOLbZHfkVJAd%2FdhbIyVT5IcPpzmteXCABs9MfD20BvR2%2FV36ga2Str436319xc4nwF8UbMS%2FEsFBDe84E2I1rZCEsRl5UOF3ZzWrQ5MYLL2NE3IRxYAaIO9NmQJWpSx0rkRyQWgavbR1akOhkKZ3WnDzh1Rgm%2FmVmThNHeKjS3KyNvVe0rzdH65DZhFBty0czGfWS16MAGFmDgHh3YwnjvAkHizoQClyGrnbytitDfBwwsDY8saQB0McHPd%2Foz34lODksCNku%2FZM0hg1BDXuwYUsYMKHS8LwGOqUBtXqhB1thh%2BPC7CdOD68FisvwtjExwfpUESUS4caP0hSWJ%2Ff8RKvDfjYcM5%2FkwWO2ujvoZCQpdV%2FxP6u621qNm3jlj3qua8srl4qTF3V9HbgkaUfo6QUcrEz9Mj6u%2BctweqeGQdQOl4VS%2BjMuOboe7t%2BtA4aKBtntQIBUm6biQbnR9mclSMN3I08cVMa9TkuzTemOuCe1urvnBMbMXg6TFmAR0t6U&X-Amz-Signature=6cce38b61f2d4f7c534b3997e95620646db35e5b0748797127aa4bf4fb359e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
