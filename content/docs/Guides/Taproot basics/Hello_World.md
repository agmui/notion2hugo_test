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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBZ2PFTN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGRZmr4lyJrnFY9wM%2FsdEh1HVvXDoBeiqukwqzlY0%2FvAIgb%2FiSSSr0vJwsW8qfNmt2H%2BeXNNcS0RRLfud2fGAQuEUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOwHg5h5EDn%2BDtcpCrcAyQAM7cS4Qidv8WPKlhgeBG%2B6Y8VypS%2FzEcOSGBvRzo%2B4M4AYXGim%2BdcgZDPpZ2oyximbL0m8H1ZyGe%2BiQy1otOPpC7FHDUApsrtvwDYtKB3yPc5D0pklm%2F9rVa9or6jAW%2BchroOMvCOhlPqCnQV5AzNV%2Btx4aZhPSMDHuNBPfudwSE3HEYVUn74yn%2BYddxscLwFLtl7t0TPSVrh%2BRPdPvzDSP139A55ZgkdldLYNNzCAz8EFSCsF%2FrTB0hAKeGJVfgdtMBGXaMwe2c6XyONJzq74P8oZKl1nOztFxUi9dzLmbKURrRqYnhEWhwsg9enLmFTiRlgSVR%2BrYZxuvpMi8%2B2b7Tne23PV2lGJ3t1XXEhMjVRIuLorR0run6%2B8GYBM69nZBVrR6ppkp7vzT960og%2Fxb9l5wmin%2Fu9J57%2BqSQTOc0ICHxXYUJue0zi2dqhOqi1HQzyJY68br6xb%2BTsLU3kxG%2Fm%2FIbyfHZn0WOp5RYkSAwHCNGPIi6%2F%2FbO5E%2BlehArwhEDChoqgxFMw7PAh54z3laXcmyTIuUZ1sf6KrQAOoFWrxZuOYnornhqmHLbPfw4EdSuKWZ8LZrMUrT3r3WlCmwQzTTho2yqYyxc9e75dWSzK10utRG6NmQQSMNWTm8QGOqUBXQtEGrBNzRkGbZFOY9DglFvNW0ZvXo7i1sk0qpVq5BAL2p09dX4uWgGzjSQ3ehWsMMjNpa8N9o5fRA0DrqXfcHkzaHTjcFPiOHrq1l1gHyjNSb%2Fz5jeEtAlwP1k8Sw%2FwUzpJu3jOG%2FIGEbyU5ma5gGEIs2q8gJoMOkxZLSgFoPXFMRppnljBR6hpvopq08nfRWxR4ViVEOLbn40EGn9MhSa0FMwa&X-Amz-Signature=7a50bb565deceb1223d2cba42d64e95b3094df88cd425b6cba8acd0aa837d065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBZ2PFTN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGRZmr4lyJrnFY9wM%2FsdEh1HVvXDoBeiqukwqzlY0%2FvAIgb%2FiSSSr0vJwsW8qfNmt2H%2BeXNNcS0RRLfud2fGAQuEUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOwHg5h5EDn%2BDtcpCrcAyQAM7cS4Qidv8WPKlhgeBG%2B6Y8VypS%2FzEcOSGBvRzo%2B4M4AYXGim%2BdcgZDPpZ2oyximbL0m8H1ZyGe%2BiQy1otOPpC7FHDUApsrtvwDYtKB3yPc5D0pklm%2F9rVa9or6jAW%2BchroOMvCOhlPqCnQV5AzNV%2Btx4aZhPSMDHuNBPfudwSE3HEYVUn74yn%2BYddxscLwFLtl7t0TPSVrh%2BRPdPvzDSP139A55ZgkdldLYNNzCAz8EFSCsF%2FrTB0hAKeGJVfgdtMBGXaMwe2c6XyONJzq74P8oZKl1nOztFxUi9dzLmbKURrRqYnhEWhwsg9enLmFTiRlgSVR%2BrYZxuvpMi8%2B2b7Tne23PV2lGJ3t1XXEhMjVRIuLorR0run6%2B8GYBM69nZBVrR6ppkp7vzT960og%2Fxb9l5wmin%2Fu9J57%2BqSQTOc0ICHxXYUJue0zi2dqhOqi1HQzyJY68br6xb%2BTsLU3kxG%2Fm%2FIbyfHZn0WOp5RYkSAwHCNGPIi6%2F%2FbO5E%2BlehArwhEDChoqgxFMw7PAh54z3laXcmyTIuUZ1sf6KrQAOoFWrxZuOYnornhqmHLbPfw4EdSuKWZ8LZrMUrT3r3WlCmwQzTTho2yqYyxc9e75dWSzK10utRG6NmQQSMNWTm8QGOqUBXQtEGrBNzRkGbZFOY9DglFvNW0ZvXo7i1sk0qpVq5BAL2p09dX4uWgGzjSQ3ehWsMMjNpa8N9o5fRA0DrqXfcHkzaHTjcFPiOHrq1l1gHyjNSb%2Fz5jeEtAlwP1k8Sw%2FwUzpJu3jOG%2FIGEbyU5ma5gGEIs2q8gJoMOkxZLSgFoPXFMRppnljBR6hpvopq08nfRWxR4ViVEOLbn40EGn9MhSa0FMwa&X-Amz-Signature=525aaaddb26f9f2a60fb0fe454cb6c7c77485000cb1eef2bf11bc5b4b7f6e6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
