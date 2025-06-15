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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQCWNQI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC8%2BtMW1p6FIg%2FlJPwmotS9ZoYlkUUPf%2BEMtELXRMHmJwIgT7IVNU5qPnS5xW3p1DCXKbzKLUzxXiE6LWcvNovR03Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOm%2F6amrIArXKJXU7ircA5vsxNtAiYQ6gy%2F3aLDof3rLPU96yjjRSqEesWV2tkbuuzncnjRWtRRm4ApXHxdc422SH8ONKfr4dLOcJ%2Fy70BZ7IGaxvYEsPhoI8NSEIRm2%2Fss%2BXxjC7pdZ8EtziFVxwBfMgfTz0ZYwrlAghBIote%2BVWvEUBmLsIDjsZtxy42TSVzvTpHemTdcHz9iYOMOxnZUMa%2FJcx2Ni6f3%2FnOALJhYaCDi5LBoRJmvCzLMgoLTteIUtyHld4OFVUJ65jdILfcb%2FH0x6GCwbRcljuRV4YDdwgG9qM0NBGXgWW0JfkHx8saxdfVGPf0Ajl5LCOlRxfR0mnWb%2BtNbu%2B8OhdE13HYUGHcFt%2FJ31s4RcKvTxZxjwlKdOK%2FuIQMEM6Z1wZ9DkwmMtXGPaYRsoG9Fh%2BrnAeprYbbxbSGQ83VR4TzeSfH9jLoyReA2LRtlfjM2lbI%2Bd86WiPa85k6icL3kyLrP%2F9LYijO6ZwZlLYDv32Fj8KjGBKSUu3iceam9LVu6%2F8GwAu%2BmXGRHhWEl1UHQ40VqlSIoeYsIG3SugMq1MG%2FEAWWGNBqjVDCbBs5Y4zlBn%2FQgNT2270VtnRaMnid9WVJtYuvbrymkwqnWEdl4Oq8FvvfpM%2B7HLzA4vUsRsEkQtMMCsucIGOqUBbGRu9xcnpOz8Du35vfQcE3NdBDeqJwfjw5hMcsW2wydC12eVRh3bfPetuUFQhsAb8VBKEfI46x8U6JBMc5NpgGV2Ue6LHyE8AMQzwiEkHwFPcL%2BQF%2BcAKx2p6EwloDL6XYvzpy%2BSLa9FDdsZDMNYtEABFHR1XHqEYAt%2FXPsjZxeSZAUJfo%2BXiZFFGWSr5wQSZlewy11TbPaI39FkxP02o%2B93SU4E&X-Amz-Signature=7883e2260650730600347ffb156cbcccf2d737c3ff195f33de65c3d6b50b601a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQCWNQI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC8%2BtMW1p6FIg%2FlJPwmotS9ZoYlkUUPf%2BEMtELXRMHmJwIgT7IVNU5qPnS5xW3p1DCXKbzKLUzxXiE6LWcvNovR03Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOm%2F6amrIArXKJXU7ircA5vsxNtAiYQ6gy%2F3aLDof3rLPU96yjjRSqEesWV2tkbuuzncnjRWtRRm4ApXHxdc422SH8ONKfr4dLOcJ%2Fy70BZ7IGaxvYEsPhoI8NSEIRm2%2Fss%2BXxjC7pdZ8EtziFVxwBfMgfTz0ZYwrlAghBIote%2BVWvEUBmLsIDjsZtxy42TSVzvTpHemTdcHz9iYOMOxnZUMa%2FJcx2Ni6f3%2FnOALJhYaCDi5LBoRJmvCzLMgoLTteIUtyHld4OFVUJ65jdILfcb%2FH0x6GCwbRcljuRV4YDdwgG9qM0NBGXgWW0JfkHx8saxdfVGPf0Ajl5LCOlRxfR0mnWb%2BtNbu%2B8OhdE13HYUGHcFt%2FJ31s4RcKvTxZxjwlKdOK%2FuIQMEM6Z1wZ9DkwmMtXGPaYRsoG9Fh%2BrnAeprYbbxbSGQ83VR4TzeSfH9jLoyReA2LRtlfjM2lbI%2Bd86WiPa85k6icL3kyLrP%2F9LYijO6ZwZlLYDv32Fj8KjGBKSUu3iceam9LVu6%2F8GwAu%2BmXGRHhWEl1UHQ40VqlSIoeYsIG3SugMq1MG%2FEAWWGNBqjVDCbBs5Y4zlBn%2FQgNT2270VtnRaMnid9WVJtYuvbrymkwqnWEdl4Oq8FvvfpM%2B7HLzA4vUsRsEkQtMMCsucIGOqUBbGRu9xcnpOz8Du35vfQcE3NdBDeqJwfjw5hMcsW2wydC12eVRh3bfPetuUFQhsAb8VBKEfI46x8U6JBMc5NpgGV2Ue6LHyE8AMQzwiEkHwFPcL%2BQF%2BcAKx2p6EwloDL6XYvzpy%2BSLa9FDdsZDMNYtEABFHR1XHqEYAt%2FXPsjZxeSZAUJfo%2BXiZFFGWSr5wQSZlewy11TbPaI39FkxP02o%2B93SU4E&X-Amz-Signature=f854908bd4450dd02f5f7b86a21d3c710674fff8053d10c36ad883c9dca53409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
