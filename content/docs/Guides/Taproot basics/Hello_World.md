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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHPFIAS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKy8XrsA1sQlRUhdG2vjThE%2BJr6QB9Jv75jFx2K7OyEAiEA%2FMcc8cGmrOXOA8E5%2FEuE2f8IkqT10vQ3EK4QILFQ%2B20qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANk3rDiX3HTf2nmLyrcA%2BOkbhG%2FQAs3SpIPMgBHG1ogOtylI3tNowLnAGrHA1%2B2qL8fg6ggx3Eya%2FaViMkyOQN5Ej0PNCf%2BiQvw%2BVi0YrxEaAn%2BuE4B155hEclPfxB%2BzoE3V6HEn4SWbspDBcidfg3lq3cJNRqx3l1CuZivUs7ee%2FUv8gqZmQX7BbOSDfhIsQyLDI%2F%2Fa%2FnUSKQRiIhzketnRwllQR9nznLbZW6K%2FiqM%2FIrQv6IrIvgX62cGP6Mq%2Bhw%2FC8aejLbsKWtinnwJc4c%2FleRSzlcqBIobiLEXGJft3%2FH7m6agzfeszbO2EPTHqthzcwc7YIHDEdDS8RlmDH0UHp1dkIX%2BEAhF63ZyjZv5RAULwPYany%2BR%2BqbF9V52KVUUz4lZpurn0tPGD5TrCiWJcV13uYzMhoT%2F8PEZflL1YCPwxGhUy2aa7zsJIEAyez%2F5F90Q3sCT5MtxbkTuOVD9wLpgO6v5BKH24WtmErNyBjFuKVvHxfj3nauB46BAry2mAstLiclYpm85X2hVIjzLjun6SAX7ROJ1YEBqiDdUPln9NO2fZBlIOXCc%2BDFqwdc5ohqE1ffFh%2BnPFsPasSA6zQxw9cEQ2B%2Bjyj%2FWxqBgVYko9miK0AMgENmtU4kMV1yqa9EVHzQlhNYPMPOO28IGOqUBg1Qwcd%2FtcdoPxB34m4PgAKviq2dljsrVJKCu0U0u8Bgvaw4Vjlimc%2FJAB5ShBa6VfYWBqReIpqyH3ygpnJIkM4gpUoMSF9bT2t1BxpcFjxXQoeXj%2B2GFayUd91VNXeUNCUHOAoHnMV7KP4fXMmOBGk1fX6iL7T3VFz4sFWk8TmYAyQw5pG4S3o1mVwyzmvF2u2hCcbFLDJ6vR3aKl9kkzlGNOZbv&X-Amz-Signature=f09b1640b1f8d96e91d7f8d39089dd6f3298338033fc00385e33f5f6d3ad21cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHPFIAS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKy8XrsA1sQlRUhdG2vjThE%2BJr6QB9Jv75jFx2K7OyEAiEA%2FMcc8cGmrOXOA8E5%2FEuE2f8IkqT10vQ3EK4QILFQ%2B20qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANk3rDiX3HTf2nmLyrcA%2BOkbhG%2FQAs3SpIPMgBHG1ogOtylI3tNowLnAGrHA1%2B2qL8fg6ggx3Eya%2FaViMkyOQN5Ej0PNCf%2BiQvw%2BVi0YrxEaAn%2BuE4B155hEclPfxB%2BzoE3V6HEn4SWbspDBcidfg3lq3cJNRqx3l1CuZivUs7ee%2FUv8gqZmQX7BbOSDfhIsQyLDI%2F%2Fa%2FnUSKQRiIhzketnRwllQR9nznLbZW6K%2FiqM%2FIrQv6IrIvgX62cGP6Mq%2Bhw%2FC8aejLbsKWtinnwJc4c%2FleRSzlcqBIobiLEXGJft3%2FH7m6agzfeszbO2EPTHqthzcwc7YIHDEdDS8RlmDH0UHp1dkIX%2BEAhF63ZyjZv5RAULwPYany%2BR%2BqbF9V52KVUUz4lZpurn0tPGD5TrCiWJcV13uYzMhoT%2F8PEZflL1YCPwxGhUy2aa7zsJIEAyez%2F5F90Q3sCT5MtxbkTuOVD9wLpgO6v5BKH24WtmErNyBjFuKVvHxfj3nauB46BAry2mAstLiclYpm85X2hVIjzLjun6SAX7ROJ1YEBqiDdUPln9NO2fZBlIOXCc%2BDFqwdc5ohqE1ffFh%2BnPFsPasSA6zQxw9cEQ2B%2Bjyj%2FWxqBgVYko9miK0AMgENmtU4kMV1yqa9EVHzQlhNYPMPOO28IGOqUBg1Qwcd%2FtcdoPxB34m4PgAKviq2dljsrVJKCu0U0u8Bgvaw4Vjlimc%2FJAB5ShBa6VfYWBqReIpqyH3ygpnJIkM4gpUoMSF9bT2t1BxpcFjxXQoeXj%2B2GFayUd91VNXeUNCUHOAoHnMV7KP4fXMmOBGk1fX6iL7T3VFz4sFWk8TmYAyQw5pG4S3o1mVwyzmvF2u2hCcbFLDJ6vR3aKl9kkzlGNOZbv&X-Amz-Signature=e5253c04d2fd6428cad6d82c61355cd0356981a584ed55a8afb597d512def2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
