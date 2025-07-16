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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7XAGUX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF%2BpeL7L408CbpBEyPv2oZqOXGYvslb1vGy2l7MFxnTPAiEA1fJYGTv9ZTVIJegIwYpfaaeNH5lLDcEUnkKgFDURMhQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGPnZVBPAmipmHlZzircAx7XrkYcHngY8JmGVUUoj85i34TwJ2atmVF7II5ih7JGISfoS2RWGL6R%2B%2BXDAXCaPSSv%2FRDs20TTKcpydFkG1esoYuDIJoHifgE9ylYY19OOE%2F38SWcIV%2BTX9oGBNPRXIeHklE8TGGW5NS1yu3xbpR80I7Va8LDeGe0xFmgUPnv7FlR0OHeACdTC4pUCTn8LL7wEwiLgfZdXV1jfnII5jz4s6cRquP0RMxb2ZeE%2BQ%2B4218YW2e5d087K0Re8LR9NJFd8kdU3ddcG3D3l%2FIZXVUHIGhI%2B8Mx4y1kT99LIRtNgAKFKygfMoSMncfsXowZ%2F5xW5yW18JRbiHMvgyIKUAqYpchBcD17%2BCG4fGrvcqAgnbXN%2B32eiUscfA2tlg0rhAqjZHe4rF4S6%2FKOFvJHhLRNtuHgIxx8jUW5710iZOIYzEDbj259lSvgZqEqn4SQFiZPQXRkQvw9PlVxJFHMU%2FVAnaL%2FWq3OtZaSIPZbqwkhImBqQrQeefqQ4XX%2F9CpIFGEduh9hCqWrex3Ki7XRbuEQG4KGvU6e9uhdZC6TVgRJz8MjOiGtYBUOgvdylEA5l3gwXz10RYAIMRe2eculJBEDWr%2FtMy8QvM%2BovImXfUFLZD4zgxR5GY8FKAXCXMOfQ4MMGOqUBLTM%2FdxyvzWldcMNKELilXYilYB6kZv7To2HoYhU%2FQy%2FoQJjzxAUNOt2XJP%2Fee%2FDqTsSm1uFAnawLiYMS%2FDhrVTI2jU2t3UNESe1HbnQz2o8pcGtuQPcfmY7R0qRuMx0%2BZM%2FNfbeL31VpNJFrmNMuqylam7RHOJ2AdyrtvbbSxRCerms4ZDwvDrK5U6x%2B4MJEAC8aGXaAFLg6SyTb38sETsb459eH&X-Amz-Signature=9a3f654e52adc1888b43ef3bdcdb0da964e4ea7b739af06daf6f1af8c2ffac46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7XAGUX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF%2BpeL7L408CbpBEyPv2oZqOXGYvslb1vGy2l7MFxnTPAiEA1fJYGTv9ZTVIJegIwYpfaaeNH5lLDcEUnkKgFDURMhQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGPnZVBPAmipmHlZzircAx7XrkYcHngY8JmGVUUoj85i34TwJ2atmVF7II5ih7JGISfoS2RWGL6R%2B%2BXDAXCaPSSv%2FRDs20TTKcpydFkG1esoYuDIJoHifgE9ylYY19OOE%2F38SWcIV%2BTX9oGBNPRXIeHklE8TGGW5NS1yu3xbpR80I7Va8LDeGe0xFmgUPnv7FlR0OHeACdTC4pUCTn8LL7wEwiLgfZdXV1jfnII5jz4s6cRquP0RMxb2ZeE%2BQ%2B4218YW2e5d087K0Re8LR9NJFd8kdU3ddcG3D3l%2FIZXVUHIGhI%2B8Mx4y1kT99LIRtNgAKFKygfMoSMncfsXowZ%2F5xW5yW18JRbiHMvgyIKUAqYpchBcD17%2BCG4fGrvcqAgnbXN%2B32eiUscfA2tlg0rhAqjZHe4rF4S6%2FKOFvJHhLRNtuHgIxx8jUW5710iZOIYzEDbj259lSvgZqEqn4SQFiZPQXRkQvw9PlVxJFHMU%2FVAnaL%2FWq3OtZaSIPZbqwkhImBqQrQeefqQ4XX%2F9CpIFGEduh9hCqWrex3Ki7XRbuEQG4KGvU6e9uhdZC6TVgRJz8MjOiGtYBUOgvdylEA5l3gwXz10RYAIMRe2eculJBEDWr%2FtMy8QvM%2BovImXfUFLZD4zgxR5GY8FKAXCXMOfQ4MMGOqUBLTM%2FdxyvzWldcMNKELilXYilYB6kZv7To2HoYhU%2FQy%2FoQJjzxAUNOt2XJP%2Fee%2FDqTsSm1uFAnawLiYMS%2FDhrVTI2jU2t3UNESe1HbnQz2o8pcGtuQPcfmY7R0qRuMx0%2BZM%2FNfbeL31VpNJFrmNMuqylam7RHOJ2AdyrtvbbSxRCerms4ZDwvDrK5U6x%2B4MJEAC8aGXaAFLg6SyTb38sETsb459eH&X-Amz-Signature=a15e56669bc899e5e042d2a7396578a4ccd328b569073571bed40904c2893212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
