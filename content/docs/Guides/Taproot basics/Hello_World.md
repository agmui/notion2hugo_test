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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHNT3PO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIEYt8JxaN4p1bxMlgk5mICU0YqMvfV11x2Gt3OMQRpTLAiEAygRzw8QU6fLyw4x5bDoZrZtZhZsPqa9trMSUqxVbWncqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4uAQIT58GyMrXJ2yrcA6OwPle1P9UcYccViPrag64qreow0ERpycdXFwDvYJ70x4AdfcV%2F5VgXwL%2FPMa0C7k8p1mEBDUgPValnObeGpHfQognNRTjf0Stl60zCfU4yV5W7qMntNn8vvgwerA%2F90K%2Fjp4Zb1kpq8oVAoH0tdDuPu%2FiDYSP6%2FRoINa2H95DalaxrtEIVc%2BYTwkt49vBmSmYRwTfZj2Vf0X4YUtNA%2FupuZbJGZHhzeNGc3fNxRshONtg9rOrK4FxP73dr2h2l0Xar9DoPbXuj3dJJoB3wUmZy8z0ML08B4yH2UyEUYol6ygbdgqK4mAnlIsLPv%2FB5CCYERQ6LA%2FMupFuaY%2FVV%2BUXSlnki2fU8flyae0AYi3WoOcqD1OX40yahMZwsBruIl7zGyqYC2Xf7O8QvVYvXhgag4fCT6FyB7sjSGhtmsyc8yV7vaHjCKNA4Wx8N1zwR6p3%2B8foBwb8jESxyZveavWMrxEsRFlEyTDWw3IJTyk%2B4GbPrn9hJuoVSjqznA4qaJOevCyaiI2t0nt3BfKExIf%2BqfwHbngd3Omp50Ab1tsTAnVay2KR5nIeEdluvavs%2FzVhbd3DljgRpX1eeMmEjnkhwkpZ4Jjz4z%2FSzNz8fGFBClQuD7Wnb3ITJgscwMLTTqsIGOqUBKIqNlWh6gjcQQRkaM8J82Fhx%2BCvf8MH2TsfU0ixvh7QkNFV34kzrGimikLJFtOL%2FBKUP8GnUYjdem2x2kwBsJdpuHwo8cNF0AeLEAFqE9HX0q5vdWVw78itWvlEvnpv0tAcflAhuHc6wvRbEM3cpXJLPOi8aSmIasrQsGzSJ6gng5RmjtgjDee3g2UVnEr10kzIBEpXAr2uTwQT74rDymAWZL2oa&X-Amz-Signature=65daa82570d6d586ef03cc6260eccbab96617379a23989abb3eb04eb1ae9e15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHNT3PO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIEYt8JxaN4p1bxMlgk5mICU0YqMvfV11x2Gt3OMQRpTLAiEAygRzw8QU6fLyw4x5bDoZrZtZhZsPqa9trMSUqxVbWncqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4uAQIT58GyMrXJ2yrcA6OwPle1P9UcYccViPrag64qreow0ERpycdXFwDvYJ70x4AdfcV%2F5VgXwL%2FPMa0C7k8p1mEBDUgPValnObeGpHfQognNRTjf0Stl60zCfU4yV5W7qMntNn8vvgwerA%2F90K%2Fjp4Zb1kpq8oVAoH0tdDuPu%2FiDYSP6%2FRoINa2H95DalaxrtEIVc%2BYTwkt49vBmSmYRwTfZj2Vf0X4YUtNA%2FupuZbJGZHhzeNGc3fNxRshONtg9rOrK4FxP73dr2h2l0Xar9DoPbXuj3dJJoB3wUmZy8z0ML08B4yH2UyEUYol6ygbdgqK4mAnlIsLPv%2FB5CCYERQ6LA%2FMupFuaY%2FVV%2BUXSlnki2fU8flyae0AYi3WoOcqD1OX40yahMZwsBruIl7zGyqYC2Xf7O8QvVYvXhgag4fCT6FyB7sjSGhtmsyc8yV7vaHjCKNA4Wx8N1zwR6p3%2B8foBwb8jESxyZveavWMrxEsRFlEyTDWw3IJTyk%2B4GbPrn9hJuoVSjqznA4qaJOevCyaiI2t0nt3BfKExIf%2BqfwHbngd3Omp50Ab1tsTAnVay2KR5nIeEdluvavs%2FzVhbd3DljgRpX1eeMmEjnkhwkpZ4Jjz4z%2FSzNz8fGFBClQuD7Wnb3ITJgscwMLTTqsIGOqUBKIqNlWh6gjcQQRkaM8J82Fhx%2BCvf8MH2TsfU0ixvh7QkNFV34kzrGimikLJFtOL%2FBKUP8GnUYjdem2x2kwBsJdpuHwo8cNF0AeLEAFqE9HX0q5vdWVw78itWvlEvnpv0tAcflAhuHc6wvRbEM3cpXJLPOi8aSmIasrQsGzSJ6gng5RmjtgjDee3g2UVnEr10kzIBEpXAr2uTwQT74rDymAWZL2oa&X-Amz-Signature=6d0864cef84a038c8a10b211667ff243b1cae4eb594670c3364a4dcc4bf4b381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
