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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPNEXBS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDiMwC9pPIlvFr7W025qnUU%2FqUrmpJ5gCHnZ82aT2VMVQIhAMSldeLC35HzAS1O8L3mmdzRabcyD41u1z3vNpStkbgHKv8DCEUQABoMNjM3NDIzMTgzODA1Igygti8J7Rd%2Bl97%2FcD4q3APIeiDU1eYtYTy2j6noh%2BriKscaa4c1BvtXu3er%2Bl669uC%2FDWVl88%2BF6zZX2p%2FJrJ3xC1q20DoO8anfU%2FLoZaeyce0c2339Gpl3HL3MtBOTJ%2FLOPb2EU9cWiDgpAc41ecChK7D%2BGYWelqk1T9j1t3fyd82%2FuP%2FrAY8Qa%2BZLLFFq53oH7MK3inRvuJRvGDsyCJyteGymtcgaXH%2FkHaxS1nohFnpf0rxSe73Go1aO5jOjKvr0pE7e8F8X%2Bqh6%2F7zNx7eATbHQsyJeaQGhyHa%2FSan9%2Fy0Z5k6E3Ep%2B%2BbZB9TVxYeNxHPv6vjWSimCZzvjxzm1BlH%2F9Zp64GAffxlqoSEdvyRPD%2B1mhS4HdAfUMeCewOa6NoYim9OTeW5t9QEPAN66VUETpqbs3QbC8MwkoUkTcAgTecInjIuusxUwgQX2aNP4Z37gOblkcEguPXbwxyRbHymz6HchTNBOaiFZF9WHCqPXDAJIEbXDNO6kx1ANM1EdIXEAEheMpEk9ZenSAhUlDZzwVtHvnEQObcSzh5ccvrYGs7JKJCCxxnu77IE1yGROlCXaCyJpMjZZ5yRoOS0Zbs15Mqg2idR4MF71keZyH5DsF7xWFTjpEMRdwqte4PxLrAH3%2BKu%2B0lTyPJjC7rrbKBjqkAQd0ocCB5p128rAJoColcgOi26RFuE4D1boW3vHwdPLK3ivDLqipWz7qzJI93w%2FOCwqPFyfMmiF8Zkaw5tCN3%2BtQ6ktPvUEEC9%2FJW8E00pLD%2BrmUqO1Oua0MNGBZ4WmMrXLEa%2BDRa%2Beml9LpSCymiQtAPnG7U%2FdCsKIOhEHdAfGcTxf1oXY1bDh%2BaSSxgXsgdTGVWBKzu8Y4TFw4lwTrK9XZWGKx&X-Amz-Signature=0b906a2c66cf0d6b4d28e6d103ba3cf6387ba2bb15facec65d6649073cbabdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPNEXBS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDiMwC9pPIlvFr7W025qnUU%2FqUrmpJ5gCHnZ82aT2VMVQIhAMSldeLC35HzAS1O8L3mmdzRabcyD41u1z3vNpStkbgHKv8DCEUQABoMNjM3NDIzMTgzODA1Igygti8J7Rd%2Bl97%2FcD4q3APIeiDU1eYtYTy2j6noh%2BriKscaa4c1BvtXu3er%2Bl669uC%2FDWVl88%2BF6zZX2p%2FJrJ3xC1q20DoO8anfU%2FLoZaeyce0c2339Gpl3HL3MtBOTJ%2FLOPb2EU9cWiDgpAc41ecChK7D%2BGYWelqk1T9j1t3fyd82%2FuP%2FrAY8Qa%2BZLLFFq53oH7MK3inRvuJRvGDsyCJyteGymtcgaXH%2FkHaxS1nohFnpf0rxSe73Go1aO5jOjKvr0pE7e8F8X%2Bqh6%2F7zNx7eATbHQsyJeaQGhyHa%2FSan9%2Fy0Z5k6E3Ep%2B%2BbZB9TVxYeNxHPv6vjWSimCZzvjxzm1BlH%2F9Zp64GAffxlqoSEdvyRPD%2B1mhS4HdAfUMeCewOa6NoYim9OTeW5t9QEPAN66VUETpqbs3QbC8MwkoUkTcAgTecInjIuusxUwgQX2aNP4Z37gOblkcEguPXbwxyRbHymz6HchTNBOaiFZF9WHCqPXDAJIEbXDNO6kx1ANM1EdIXEAEheMpEk9ZenSAhUlDZzwVtHvnEQObcSzh5ccvrYGs7JKJCCxxnu77IE1yGROlCXaCyJpMjZZ5yRoOS0Zbs15Mqg2idR4MF71keZyH5DsF7xWFTjpEMRdwqte4PxLrAH3%2BKu%2B0lTyPJjC7rrbKBjqkAQd0ocCB5p128rAJoColcgOi26RFuE4D1boW3vHwdPLK3ivDLqipWz7qzJI93w%2FOCwqPFyfMmiF8Zkaw5tCN3%2BtQ6ktPvUEEC9%2FJW8E00pLD%2BrmUqO1Oua0MNGBZ4WmMrXLEa%2BDRa%2Beml9LpSCymiQtAPnG7U%2FdCsKIOhEHdAfGcTxf1oXY1bDh%2BaSSxgXsgdTGVWBKzu8Y4TFw4lwTrK9XZWGKx&X-Amz-Signature=0c2f48583f586cd45e9822edf2995fdd3f3d181c7a08a62adbb56d36e59c63e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
