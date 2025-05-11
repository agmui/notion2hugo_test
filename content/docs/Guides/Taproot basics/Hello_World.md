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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MFH3PX4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCQM8PxNX%2B5BRepbBxpOnxpwTV8Ww7EV7sMpcucu6Ap8wIgREwwioWYL85XWTXcKPz6DzyQqWwnmaNMro1uqPilf44qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmeKanCR1IKqRkkgyrcAzG8EGFljR8KTQr20oOfe%2BdgmVHyAM9wafgJZDrhYp9aYC02Gm%2Bwp026WIzyFNJ1n7s8gw6UV3shSthVdaU7fHJQOlFbLtNkBpuH1NEhn%2FIKnK%2Bbl%2F%2B3b26IbJn7qVuKABZ%2B51QK%2B2Qv6EiQoNTgMEzyLS1Ivsn%2B8%2BgwxmYLjr%2FrHld7Ip09%2BAUIA6nBcpiFZCXuYhIhdP6u2FEKyL2pSmHfITxVdkHqKMnxJC3SyfcBwxXcFisRKcLqYMX%2FfCenf4rYr5O2TckR4W%2F8nwDZn%2BBe%2Bt5L5l%2BVr00dZiphGHg9a2d3rtZZlY77fsB16LYYim8SYLviBZxbjeDPRb7rbGmN6NELLXbvEfsPF7r3wKl8npxSKd2JaNdshdkJIJaskEFDLNyeqjNE6MQcwaHlftCxZPjXrHi3lgmrWzS%2BqSuJgPrE4B56rgWu%2FOJHjHjz2Ki10PrOfiVX1r%2Fmt35RAp%2Bn0PXTprUWWOxDQy11ygCWYOGs2t%2FziLblgBMIbunso3wC6ctTs4hPGp1f94NhrU9aKWyPnXLKwnpRomumshEIDQr3iJ0yHd8KerE%2Bk%2FU4GBe6f386FO4c8lBD%2Fi0s36dSuowxRQSXr8LmkOQbj8G54OFqKQ9PeX%2FO9IrnMK65gcEGOqUB0ufSKXkHqPSK9Ldwd%2BoE67IfObjfanU28lGrvuZHIzSHat%2B%2F8Ery0xnwfPUMV4oxbmJnegKwtOV%2FjQ36uhg659JKf%2FfVoZX83JFFkH82Hkpw%2B1uq0PAc%2BPkDocv0WZHO6AcNN9qzgrJsXco267k0ufCZs4MMjfqZAnC2LVxtsREcLvGj5Z3ZbUoi4pY%2BOJ8w4dKPUxGrxHt2IfKsJuBj5b8Z4zTN&X-Amz-Signature=456a5180d9949946ba5c36fc6aaf51bdc8952a028eda21bd07a50e812da9b93c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MFH3PX4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCQM8PxNX%2B5BRepbBxpOnxpwTV8Ww7EV7sMpcucu6Ap8wIgREwwioWYL85XWTXcKPz6DzyQqWwnmaNMro1uqPilf44qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmeKanCR1IKqRkkgyrcAzG8EGFljR8KTQr20oOfe%2BdgmVHyAM9wafgJZDrhYp9aYC02Gm%2Bwp026WIzyFNJ1n7s8gw6UV3shSthVdaU7fHJQOlFbLtNkBpuH1NEhn%2FIKnK%2Bbl%2F%2B3b26IbJn7qVuKABZ%2B51QK%2B2Qv6EiQoNTgMEzyLS1Ivsn%2B8%2BgwxmYLjr%2FrHld7Ip09%2BAUIA6nBcpiFZCXuYhIhdP6u2FEKyL2pSmHfITxVdkHqKMnxJC3SyfcBwxXcFisRKcLqYMX%2FfCenf4rYr5O2TckR4W%2F8nwDZn%2BBe%2Bt5L5l%2BVr00dZiphGHg9a2d3rtZZlY77fsB16LYYim8SYLviBZxbjeDPRb7rbGmN6NELLXbvEfsPF7r3wKl8npxSKd2JaNdshdkJIJaskEFDLNyeqjNE6MQcwaHlftCxZPjXrHi3lgmrWzS%2BqSuJgPrE4B56rgWu%2FOJHjHjz2Ki10PrOfiVX1r%2Fmt35RAp%2Bn0PXTprUWWOxDQy11ygCWYOGs2t%2FziLblgBMIbunso3wC6ctTs4hPGp1f94NhrU9aKWyPnXLKwnpRomumshEIDQr3iJ0yHd8KerE%2Bk%2FU4GBe6f386FO4c8lBD%2Fi0s36dSuowxRQSXr8LmkOQbj8G54OFqKQ9PeX%2FO9IrnMK65gcEGOqUB0ufSKXkHqPSK9Ldwd%2BoE67IfObjfanU28lGrvuZHIzSHat%2B%2F8Ery0xnwfPUMV4oxbmJnegKwtOV%2FjQ36uhg659JKf%2FfVoZX83JFFkH82Hkpw%2B1uq0PAc%2BPkDocv0WZHO6AcNN9qzgrJsXco267k0ufCZs4MMjfqZAnC2LVxtsREcLvGj5Z3ZbUoi4pY%2BOJ8w4dKPUxGrxHt2IfKsJuBj5b8Z4zTN&X-Amz-Signature=f1ccc635a9270560d1fcf756889ddbbed28918054378f2f33fe6c70fc2f68308&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
