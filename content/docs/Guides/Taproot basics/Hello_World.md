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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3P73SKW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzWoFuJD1K5RJHWLTOnYCbUHzvi43%2BNOeuSXkUXdlpJAiBiquNW%2BZPklWV6vD7cwVZNjWTMubcX1vBp3shWkWj5aiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmnaccZWwfYQ%2BLxGNKtwDRCQv9%2BlNjTRs71kIi35xetc48%2FU1nwobY%2FcelYZCUmwV%2FcBPcH%2FgNIwYFrmeNllaOx0wyGxeCrK6qGcMbADfNowFrQMjSQEpZUCZ3ZKYktv4JXkq272xfTQsn8meJZXIZQY2rlk%2F9ObePpxhL4SNIzOu4vCewRPmQ6d32oLnqYuZYyvdgH1sDpt281iDXPkKp%2BfjyH%2B7tfJzySl3jmOF5lUUCyNGXsqd29MfNbclO%2BLL%2B02GmTgBlJWlVJWHejy%2Fs783%2BfuydqpmlfKYoieyzm2w74rqAZ6cjKIVIisog%2Byyl6RGrqtVdySSH3PStbQkvyuna2YrsIkh66QugBQP2xYemD1vOQKOTcVJXyO0oOdnWArPkMxhrSuO8J%2BIi4vkzt69qPLX%2BOqtQX%2Bs7fxxTZGm6KatadsiGjKZv8njViMJKgLCfJirYJ1hhtq0kWZeNY4%2FLMabTM9mORz17koDVrYxyiSuVT2IJcdJ7eY3UgjOxTPvgdh72TRJCD7pLqFuA4rj8gxJKQ33vTCWDMYFGaIgT%2FW5BRxyRMfc4TtuImTiJo7IwDPP3q1FRsWl5dQ%2FkL5OYjczxEqePh0ffIM4m8z83H0Ye4x2aopKyK%2BgUFomiYVek8l92hOfkU8wn9aewgY6pgHbESVPEIRaAF7yxRbwO3onfXf2%2FvxrDXdok9bldjj0EMD%2B60uXnU6IWPTLirFSPIkadZAVnZnJ6bUafXCp0TAKbtNsURDucb%2BMNEN2kAljx78ch2oFQybusU2g05B1EOehyYfhpUMV241ttuvT1YFLSu%2F%2BFCkd0OugDCGBzHzwnyxeSyNa29c4S%2FhakJAWcNUXv%2FXfLMfCkLWzti%2BWmXJIBJf%2F0GYt&X-Amz-Signature=d3db9c5e9b6b877d83fcdee0e7322064253f08bd91b3ab01df12ec812171a7dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3P73SKW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzWoFuJD1K5RJHWLTOnYCbUHzvi43%2BNOeuSXkUXdlpJAiBiquNW%2BZPklWV6vD7cwVZNjWTMubcX1vBp3shWkWj5aiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmnaccZWwfYQ%2BLxGNKtwDRCQv9%2BlNjTRs71kIi35xetc48%2FU1nwobY%2FcelYZCUmwV%2FcBPcH%2FgNIwYFrmeNllaOx0wyGxeCrK6qGcMbADfNowFrQMjSQEpZUCZ3ZKYktv4JXkq272xfTQsn8meJZXIZQY2rlk%2F9ObePpxhL4SNIzOu4vCewRPmQ6d32oLnqYuZYyvdgH1sDpt281iDXPkKp%2BfjyH%2B7tfJzySl3jmOF5lUUCyNGXsqd29MfNbclO%2BLL%2B02GmTgBlJWlVJWHejy%2Fs783%2BfuydqpmlfKYoieyzm2w74rqAZ6cjKIVIisog%2Byyl6RGrqtVdySSH3PStbQkvyuna2YrsIkh66QugBQP2xYemD1vOQKOTcVJXyO0oOdnWArPkMxhrSuO8J%2BIi4vkzt69qPLX%2BOqtQX%2Bs7fxxTZGm6KatadsiGjKZv8njViMJKgLCfJirYJ1hhtq0kWZeNY4%2FLMabTM9mORz17koDVrYxyiSuVT2IJcdJ7eY3UgjOxTPvgdh72TRJCD7pLqFuA4rj8gxJKQ33vTCWDMYFGaIgT%2FW5BRxyRMfc4TtuImTiJo7IwDPP3q1FRsWl5dQ%2FkL5OYjczxEqePh0ffIM4m8z83H0Ye4x2aopKyK%2BgUFomiYVek8l92hOfkU8wn9aewgY6pgHbESVPEIRaAF7yxRbwO3onfXf2%2FvxrDXdok9bldjj0EMD%2B60uXnU6IWPTLirFSPIkadZAVnZnJ6bUafXCp0TAKbtNsURDucb%2BMNEN2kAljx78ch2oFQybusU2g05B1EOehyYfhpUMV241ttuvT1YFLSu%2F%2BFCkd0OugDCGBzHzwnyxeSyNa29c4S%2FhakJAWcNUXv%2FXfLMfCkLWzti%2BWmXJIBJf%2F0GYt&X-Amz-Signature=7d62ddc59052d8ae2e6808c5fa41b28964125ad32ac457d65d4467de2e4ed1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
