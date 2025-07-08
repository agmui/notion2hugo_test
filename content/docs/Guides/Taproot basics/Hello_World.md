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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E7YY2EX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkgr8m9y%2BXLNxlJqG%2FJL0yeYMf5ojO6P3ANN4vlhb8nAiBo2XyeQi4QWkSygxmYvXoQuKSQm4avyXJUuup4GLeLHSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDLCw45GTHDIEL%2Fw1KtwDgIXoxL1BqTlMKHWrJppdNpiPQ2Rw742S3om5kLepCBcLajblOxbvNZA0iZ8ga%2FGCVwzBEtvNBusVyooB1yRdop%2BfPxYU7tyAC%2BLE33O%2Fue1TysclAG7F9UukOPXCaFlBtqfQJTwKBY98ZFnueHcZKWPfDbqmQwTCA6HLWP6%2FuYIneS2OGt%2FCrWNo2d5mDiP5gyFiDKNN6zwMKte3fuAfKR8lBqgs5dMYJTEmzqMVn32WoIBCqSfo8J09bBJ13g9urDyB7tHWJhm6ia0usHsd4ma33hK0gSNNloKCkwDCPgJOQuVQ0s5ZfLNbTIRLTnS5e%2Fp%2FWKkZe8qvzrZ59lG%2BNJzVJXS1CylfuOeWW4la3io68i6r7VLEqnoViKeHuD4sxDcUOoWg%2B6F0Y%2F5XRMSJzftAh8o3QLfU6sEXmqqGT2Rfu5fiOitAlp0gijfwaQJdFRVWVvBbXDVdF%2F2JzYuRbotgTJrKboNa9PpieWGR7wxMDiVFlK9Ysyp6DgcWNpFbsQJnwQBgV27iPXgIFNRv3BcmTSRZAHZOSLMYDFoMCWPMmIRerOglGpXiIhTNEFv9FuOmIicHNQoJ9eZncqD5a3z9RjwEOPnofHCl7w3iDLLYNzjlOiqtK5SNdCMwh6a0wwY6pgG40YSMaHRMCqoke0vHgh%2BcCqXy5p1jawNm4W4g9ePYA0E%2FaLUCqlKm2ldriJqyJncXVc6vAyOezf5Kc%2FmPkbB%2BAjmL8V4358qaJpW%2FOfiNAVTrmODvXWjc688JyIjSW7Pgx1n8PWSiN2OxeWom74yfH%2BDswxQH%2FMRQMXxTtV3no737q0%2F%2BpDOhRiI%2F5QB8aXEkW25bFViNGqCU6QwN3tEQ1C1qg6v6&X-Amz-Signature=7187889907c2ece5dcb3e698c23f68a47e59caccda16ee7276d2cda9d0fcc8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E7YY2EX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkgr8m9y%2BXLNxlJqG%2FJL0yeYMf5ojO6P3ANN4vlhb8nAiBo2XyeQi4QWkSygxmYvXoQuKSQm4avyXJUuup4GLeLHSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDLCw45GTHDIEL%2Fw1KtwDgIXoxL1BqTlMKHWrJppdNpiPQ2Rw742S3om5kLepCBcLajblOxbvNZA0iZ8ga%2FGCVwzBEtvNBusVyooB1yRdop%2BfPxYU7tyAC%2BLE33O%2Fue1TysclAG7F9UukOPXCaFlBtqfQJTwKBY98ZFnueHcZKWPfDbqmQwTCA6HLWP6%2FuYIneS2OGt%2FCrWNo2d5mDiP5gyFiDKNN6zwMKte3fuAfKR8lBqgs5dMYJTEmzqMVn32WoIBCqSfo8J09bBJ13g9urDyB7tHWJhm6ia0usHsd4ma33hK0gSNNloKCkwDCPgJOQuVQ0s5ZfLNbTIRLTnS5e%2Fp%2FWKkZe8qvzrZ59lG%2BNJzVJXS1CylfuOeWW4la3io68i6r7VLEqnoViKeHuD4sxDcUOoWg%2B6F0Y%2F5XRMSJzftAh8o3QLfU6sEXmqqGT2Rfu5fiOitAlp0gijfwaQJdFRVWVvBbXDVdF%2F2JzYuRbotgTJrKboNa9PpieWGR7wxMDiVFlK9Ysyp6DgcWNpFbsQJnwQBgV27iPXgIFNRv3BcmTSRZAHZOSLMYDFoMCWPMmIRerOglGpXiIhTNEFv9FuOmIicHNQoJ9eZncqD5a3z9RjwEOPnofHCl7w3iDLLYNzjlOiqtK5SNdCMwh6a0wwY6pgG40YSMaHRMCqoke0vHgh%2BcCqXy5p1jawNm4W4g9ePYA0E%2FaLUCqlKm2ldriJqyJncXVc6vAyOezf5Kc%2FmPkbB%2BAjmL8V4358qaJpW%2FOfiNAVTrmODvXWjc688JyIjSW7Pgx1n8PWSiN2OxeWom74yfH%2BDswxQH%2FMRQMXxTtV3no737q0%2F%2BpDOhRiI%2F5QB8aXEkW25bFViNGqCU6QwN3tEQ1C1qg6v6&X-Amz-Signature=5029411e0f74373568c65b6fdbce74ab186fbcfbc181d8a827aa177afec5b3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
