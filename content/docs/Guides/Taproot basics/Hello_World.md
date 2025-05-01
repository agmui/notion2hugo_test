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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBGNSUB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC953fo7hZ89%2Fk50CeovNhMypZjiT2PL2ioOMgj%2F%2BSJKwIgBx0yF7Bb4IXgdmmfgr1BUWZiHQGwHprEd6ZpZwsDR4MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXqSqpBTG2HCkrdCyrcAxF0gMwyAoIE0EIkLGYWSVcxA%2BTjUYKpaqcgawxIxixb1eRiJAeQD1dYewZKhIW0iNmiM3nbtLuDaimMhGi53tK4qZL%2B1%2F8S35RIxyrDPIU8d%2FQ1yc3Ij%2B8yn2nScur4sVKR25IkvoZsn7FyBtQ%2FdpLtYDjDqVoNdocJ3C66MhneNlHpkTot9%2BEjeKnoBPo1TOb%2BXUyQU%2BMfJpX4iXWasxjWENu6zjQ1FM%2B%2Fw3W3%2BIasD2fgB4PPoheEe%2FRO2Iv3VK7nId%2FOzOQ5ntZOyIdJfE7SwINPYd4B4LPIYXG%2B8AF88FEsFSd7Sl1%2Bv5kkKlTPmSI7INhaUzHwEFJV62aVb29bFlJ%2BDjHZBDrp58ythg9DPeDOnGA4dx8RDVcG3l42M7piDi%2BEC2tb2OOPsxI2ANsWtzllwpBK9eFcR5xecs4Z8RgCGYFE%2FYTxjYB6kmVvEmNMk0sqHUt7nHqyevD8XF0a%2FiD6HJe7Y9LadTRTokth0iubyNKAESWdcL9TyK%2BLVEjOpXkShk68CiaD6TUjywRYt5z8EMwUdMi%2F7LbUB01cPoUnlVMuVoZBfKW3CznivcoJJGM5fY0Q6BljhG1RAQNDicKceXEsowhLXL7mxA0Zq8ICCCgWkspWB3eAMOC9y8AGOqUBVTx3HWGB2AAvsbY5BbzFPShMzvCPgxZhxC18TB6mj2iQvvboqzviS62ty2RB6dh925uoYZ2y2V31wggn%2BgEhhItGH3Sj9qT8cvKI8e%2BDEMqXmS0bSdChBKQuuwhg2Ntj7Y1DSUFmPUUPLIgahnIZp31ImYfR0FkjSevsfhLYV7grzv%2B%2BZgow5BAj9f9lXSIp%2BwLThz5LXZ6cPfKtMDW6vs9MT1Jx&X-Amz-Signature=4341e2cdfafc93f492a87844052dc75e24cbfd1daf72f5db71d6f2cf8ed2f2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBGNSUB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC953fo7hZ89%2Fk50CeovNhMypZjiT2PL2ioOMgj%2F%2BSJKwIgBx0yF7Bb4IXgdmmfgr1BUWZiHQGwHprEd6ZpZwsDR4MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXqSqpBTG2HCkrdCyrcAxF0gMwyAoIE0EIkLGYWSVcxA%2BTjUYKpaqcgawxIxixb1eRiJAeQD1dYewZKhIW0iNmiM3nbtLuDaimMhGi53tK4qZL%2B1%2F8S35RIxyrDPIU8d%2FQ1yc3Ij%2B8yn2nScur4sVKR25IkvoZsn7FyBtQ%2FdpLtYDjDqVoNdocJ3C66MhneNlHpkTot9%2BEjeKnoBPo1TOb%2BXUyQU%2BMfJpX4iXWasxjWENu6zjQ1FM%2B%2Fw3W3%2BIasD2fgB4PPoheEe%2FRO2Iv3VK7nId%2FOzOQ5ntZOyIdJfE7SwINPYd4B4LPIYXG%2B8AF88FEsFSd7Sl1%2Bv5kkKlTPmSI7INhaUzHwEFJV62aVb29bFlJ%2BDjHZBDrp58ythg9DPeDOnGA4dx8RDVcG3l42M7piDi%2BEC2tb2OOPsxI2ANsWtzllwpBK9eFcR5xecs4Z8RgCGYFE%2FYTxjYB6kmVvEmNMk0sqHUt7nHqyevD8XF0a%2FiD6HJe7Y9LadTRTokth0iubyNKAESWdcL9TyK%2BLVEjOpXkShk68CiaD6TUjywRYt5z8EMwUdMi%2F7LbUB01cPoUnlVMuVoZBfKW3CznivcoJJGM5fY0Q6BljhG1RAQNDicKceXEsowhLXL7mxA0Zq8ICCCgWkspWB3eAMOC9y8AGOqUBVTx3HWGB2AAvsbY5BbzFPShMzvCPgxZhxC18TB6mj2iQvvboqzviS62ty2RB6dh925uoYZ2y2V31wggn%2BgEhhItGH3Sj9qT8cvKI8e%2BDEMqXmS0bSdChBKQuuwhg2Ntj7Y1DSUFmPUUPLIgahnIZp31ImYfR0FkjSevsfhLYV7grzv%2B%2BZgow5BAj9f9lXSIp%2BwLThz5LXZ6cPfKtMDW6vs9MT1Jx&X-Amz-Signature=69d106c7fa093c101f01b07ce23e1ec29c0be60b2a4c6d700188b8e603cbecce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
