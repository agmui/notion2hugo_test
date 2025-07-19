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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCDMMEX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnvdB5l2QYJXZluR1%2Fke5h8gRdoJjQVvsonVViupAHuAIgKPCHXSkvYk3coexA3gfjJNoZ2ffh0UbRkJs6gdaCeVEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIDSyKPPYquU8BYtSrcA8ogGAR%2BVAopFuzDin4OR%2Fk%2B9KeMyyw7Mig%2B6E06LTJSQ2QrwK40NdhXY4LtS1XXZJA0vKyO4iSWreUPMNKADQQ1sYz6CiSys%2FTZgWoRmsg1T57ty1BCOud14WBPgtWCM2slTqU8%2BlEwtgfaAxR5MGpDslrxZUIJKfrgMRiqwA7KFN4B5IBGIDiGT%2FAOAqBIrCBE6m9ZmEQ1y7OhxEOitJZgL3Aa1QEyXraWKbgAuF7mcA%2BffEaeqeriWdDCDlnZP5DjROjiEEf2%2BXjZx0DrXFvxH58xJjISX3ik%2Bc9xSF2hAW6bKdhONoVeTHootgEosAWVQpeN0OpnB3ZY5767w%2BTAiewTBee190Ha9UuUqt%2B%2FXI2vGT0jvv0eE68Kuy7KiZ1%2FXt%2B0pOhMIdjBpivdrbOGeYjs2TXBoiA1wRSjSl9wnBAq1OAfsCdKRxoggSAjwzkgpAmJOjiB6vrXTMQFfMZSn%2Bc5ikFEKXtZWSbJTZjo%2BAGUbvBDP95q6TpPODKqgCrJt%2B7NA3pJYx%2BDSb%2F1EE2qQijU46OK6s7fZEF4MZJitfdeZTFSDDvc3lNIwaJCg7w%2Bt3m3%2BYp2P2ZzZxxw0Dbn57yJwKKgohNV6JyGJHAGR5JbaBjURPIWKa2rMJTq7cMGOqUBBYrBOfvK%2Fxc670C2cuqeYv2oqL%2FnhI3FpRzWF3ZjDoraBfZhyLCcQghXABxfEfjgRcLLvo3%2FKUVUXsLpvnfyw6y%2FlGt%2B9rKfr56LVWdHmeChjzJjAY%2BJBEq%2BtzJFKizRUizWdeb%2Biy5KZ5uUQTG7SQ6fLF2pwsZmvDq4yW8g7yOhqcbM0g%2BzC%2FudZ5eiiFjGOmm%2BSXGtpYlRGr%2BR%2BlJfEnHuF7KD&X-Amz-Signature=869b3a689fddc162c794cee40af3a1cae5417957d358bf1bae021a0a11f1e326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCDMMEX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnvdB5l2QYJXZluR1%2Fke5h8gRdoJjQVvsonVViupAHuAIgKPCHXSkvYk3coexA3gfjJNoZ2ffh0UbRkJs6gdaCeVEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIDSyKPPYquU8BYtSrcA8ogGAR%2BVAopFuzDin4OR%2Fk%2B9KeMyyw7Mig%2B6E06LTJSQ2QrwK40NdhXY4LtS1XXZJA0vKyO4iSWreUPMNKADQQ1sYz6CiSys%2FTZgWoRmsg1T57ty1BCOud14WBPgtWCM2slTqU8%2BlEwtgfaAxR5MGpDslrxZUIJKfrgMRiqwA7KFN4B5IBGIDiGT%2FAOAqBIrCBE6m9ZmEQ1y7OhxEOitJZgL3Aa1QEyXraWKbgAuF7mcA%2BffEaeqeriWdDCDlnZP5DjROjiEEf2%2BXjZx0DrXFvxH58xJjISX3ik%2Bc9xSF2hAW6bKdhONoVeTHootgEosAWVQpeN0OpnB3ZY5767w%2BTAiewTBee190Ha9UuUqt%2B%2FXI2vGT0jvv0eE68Kuy7KiZ1%2FXt%2B0pOhMIdjBpivdrbOGeYjs2TXBoiA1wRSjSl9wnBAq1OAfsCdKRxoggSAjwzkgpAmJOjiB6vrXTMQFfMZSn%2Bc5ikFEKXtZWSbJTZjo%2BAGUbvBDP95q6TpPODKqgCrJt%2B7NA3pJYx%2BDSb%2F1EE2qQijU46OK6s7fZEF4MZJitfdeZTFSDDvc3lNIwaJCg7w%2Bt3m3%2BYp2P2ZzZxxw0Dbn57yJwKKgohNV6JyGJHAGR5JbaBjURPIWKa2rMJTq7cMGOqUBBYrBOfvK%2Fxc670C2cuqeYv2oqL%2FnhI3FpRzWF3ZjDoraBfZhyLCcQghXABxfEfjgRcLLvo3%2FKUVUXsLpvnfyw6y%2FlGt%2B9rKfr56LVWdHmeChjzJjAY%2BJBEq%2BtzJFKizRUizWdeb%2Biy5KZ5uUQTG7SQ6fLF2pwsZmvDq4yW8g7yOhqcbM0g%2BzC%2FudZ5eiiFjGOmm%2BSXGtpYlRGr%2BR%2BlJfEnHuF7KD&X-Amz-Signature=9547f18395827c34f607d8e0b67df616ad2d28619d0d886053af813525ca37db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
