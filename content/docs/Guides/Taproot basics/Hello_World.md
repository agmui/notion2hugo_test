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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBZAJVA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmxCYifkERQEtYb4rB%2BaSteZkweJpNV8P8U9ibdxVEvAiEA4qo5F3euzULhxFttnGobu3tQw8AMuRZfXPyNNYIIlmYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKdaPw7ZcbSxOkX5QCrcA3JLYBvYVKTncQC1Ixq3PMZ1H1LcT5rp3M6h2oDclGAQOSv5wZR%2FuLunN85OVRlXB0dxaae%2Bl2E1%2FoCbmYF6ZhtKHu%2Fndras%2BnzlJkL%2BljXEN8U65GDmcoqDduAdO3k9JDpasI9r0TFUD%2FmBp3waJqB1HzDTQavM0WdxofwvplP8PXLkKFzSl9FRuAc%2F9afmH%2BPcLACKzDN%2BK4f7yhKJAHb8EqVI%2B4ia%2BIZiY87haPZ6SFJ4HHdtZLZTPcBfqCEONKtQScVffY3jjgrIR9wMDHetk8IQH3EEN8lzP%2FlIAv3NJ3ck%2BrN%2FMxWSx1XEC8Q44DefBZ1EA5ALn7P5qP8ZgBunbytM6nh9zfO0shcbcBSw3uYKQcWY1zDLJHh7nAmdTeVvz9V3z2haZ%2BoGYJl9oPviPWlQgJwsdc0DuEmTxbS6UjlAesrX1%2Fq6ZbX8UDsQ0w%2FLgdEulLB2TnYjrVhqOXr54CObjIIk%2BNb%2FEZ7MHHzF9HxqBkEfjgEfA5f0o5qwAP3cajeJrGMBJwL1Z%2F3samGJySZSDIkh398Dwa2QTFIB05t%2BOpwV2%2FBOifrcqxZXdeS8k2x%2BidpM9Cz07vX26%2BG%2FIq3DAForcplzodDuMdBx80FWgAReAiSFZwtOMPv40sEGOqUB8okNLGUqha76olBgPeXD97X2ppC3wl3t9%2FvWShWxx7IB4ooleFF8F6ztRZw9%2B4OgLmcDxzvnom7SnqYMTa%2Bal4LtlaRPzU8YXsxhgN7j5zws11rcoa6w7iIz88%2FE4vWHMTD8QT4A4zPhrZgMs%2BxDpNXz2nolWjJDC8ftkB6jzxDDJWGcYPTxyM44yEfVmftxH62uuq7Y57vdXg5Mgw1JrGTFd272&X-Amz-Signature=f37cb71ce2d86728d7b4c116e80a016938e11409e5a462189ccc431a36db5f16&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBZAJVA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmxCYifkERQEtYb4rB%2BaSteZkweJpNV8P8U9ibdxVEvAiEA4qo5F3euzULhxFttnGobu3tQw8AMuRZfXPyNNYIIlmYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKdaPw7ZcbSxOkX5QCrcA3JLYBvYVKTncQC1Ixq3PMZ1H1LcT5rp3M6h2oDclGAQOSv5wZR%2FuLunN85OVRlXB0dxaae%2Bl2E1%2FoCbmYF6ZhtKHu%2Fndras%2BnzlJkL%2BljXEN8U65GDmcoqDduAdO3k9JDpasI9r0TFUD%2FmBp3waJqB1HzDTQavM0WdxofwvplP8PXLkKFzSl9FRuAc%2F9afmH%2BPcLACKzDN%2BK4f7yhKJAHb8EqVI%2B4ia%2BIZiY87haPZ6SFJ4HHdtZLZTPcBfqCEONKtQScVffY3jjgrIR9wMDHetk8IQH3EEN8lzP%2FlIAv3NJ3ck%2BrN%2FMxWSx1XEC8Q44DefBZ1EA5ALn7P5qP8ZgBunbytM6nh9zfO0shcbcBSw3uYKQcWY1zDLJHh7nAmdTeVvz9V3z2haZ%2BoGYJl9oPviPWlQgJwsdc0DuEmTxbS6UjlAesrX1%2Fq6ZbX8UDsQ0w%2FLgdEulLB2TnYjrVhqOXr54CObjIIk%2BNb%2FEZ7MHHzF9HxqBkEfjgEfA5f0o5qwAP3cajeJrGMBJwL1Z%2F3samGJySZSDIkh398Dwa2QTFIB05t%2BOpwV2%2FBOifrcqxZXdeS8k2x%2BidpM9Cz07vX26%2BG%2FIq3DAForcplzodDuMdBx80FWgAReAiSFZwtOMPv40sEGOqUB8okNLGUqha76olBgPeXD97X2ppC3wl3t9%2FvWShWxx7IB4ooleFF8F6ztRZw9%2B4OgLmcDxzvnom7SnqYMTa%2Bal4LtlaRPzU8YXsxhgN7j5zws11rcoa6w7iIz88%2FE4vWHMTD8QT4A4zPhrZgMs%2BxDpNXz2nolWjJDC8ftkB6jzxDDJWGcYPTxyM44yEfVmftxH62uuq7Y57vdXg5Mgw1JrGTFd272&X-Amz-Signature=42ef78ce2b99e8132cdaa04793d4c5439b2344ce021284193283119f855943f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
