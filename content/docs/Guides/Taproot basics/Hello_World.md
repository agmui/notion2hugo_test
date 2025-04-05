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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVWHJB3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm6B%2B3V8a3cTuHifi6yONHAk4ZzWdLfPu%2Fly3z%2BhLWzAiAjPcYIk2OkBNHujgtWVsQfGWafrzt0cozS57gEv2cABCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMUhnPntX9O2ecI%2FsYKtwDF1PUIgoJ4uXRyrTBdCAjgM5OJumnm9mNWvTSNC6RyD%2B1nLIZ7VQt%2FepkuRtxjEgdLyGWGnhTSJ3lLitn9g9753MFhFeHQSvgsDbJnzDLamMNgBUTcQqMJN90uqlvGj8QvDhGLMV5BVnCK%2BIfq%2F%2ByUHdCi9GMkAVKJPqiqLxpbo6hFUkiT8lCR0GjLpoWYLQGhYeI4ZmlIQSO30SzszSNH%2FVLQc60SSyfWu46iqw2GJ2ydIhY0cmxMs1WcQcqRQ5sCZubtv4CLSCKiPxVBdnnswThhOicbzayjfePR0Ev%2Ffv%2FlNQWx5A0Wp3XASjL%2B07nfKK0MEInwcBKIapfBgSnr3Wddj75YJav0WUxPkLJo6OHg1z0kvFuAGnTmIgf%2FYe%2Fr1sVR5kkgkKndmYSnku37z6Af7JrVTiCXk3jgZx3EwQxupKVSIr8Xv0DfO8mbcuz29p07fHqudv7C%2FyCozDXBQYfGiGDy06h4rk%2BzZPbBYoKvPzmZ%2FyCGizQTevDhXgQRarNJswIr0LM%2FvtPpYdz%2FM2qgQFd0aI1r3x4xg6izFjLwqXC6nSqc0A9%2F%2BRos6iQr9H6aAinGGVzeHC9GaVlGq8wZqky4Dp1BYHRnoCXuoTBj4FtI%2BA9TEQovuowvdfCvwY6pgH4uaDmyTBXzV657ySpaEmqRAq99TJRN2jVFOOpzI8IxyAzjUkpmNhczh2JAG02Ng55bf35lqvSa5KP001eJlsNiyzGwFLZpSMloiu7iBxQoLBYzrZFQJcpORZVy6od0WP2J5vl5aJ91VW94IMjB2mhGxiryRVLzZDzePhgF1mccm3MskblYmcWf%2BOoG5lrPiM2vVjoA%2FYrKmoJvmBhzzP%2Fzta4pDNg&X-Amz-Signature=b8f53d2b812614d1b419238b9ee756bb7b5b118e4e367c519a8acf9937434bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVWHJB3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm6B%2B3V8a3cTuHifi6yONHAk4ZzWdLfPu%2Fly3z%2BhLWzAiAjPcYIk2OkBNHujgtWVsQfGWafrzt0cozS57gEv2cABCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMUhnPntX9O2ecI%2FsYKtwDF1PUIgoJ4uXRyrTBdCAjgM5OJumnm9mNWvTSNC6RyD%2B1nLIZ7VQt%2FepkuRtxjEgdLyGWGnhTSJ3lLitn9g9753MFhFeHQSvgsDbJnzDLamMNgBUTcQqMJN90uqlvGj8QvDhGLMV5BVnCK%2BIfq%2F%2ByUHdCi9GMkAVKJPqiqLxpbo6hFUkiT8lCR0GjLpoWYLQGhYeI4ZmlIQSO30SzszSNH%2FVLQc60SSyfWu46iqw2GJ2ydIhY0cmxMs1WcQcqRQ5sCZubtv4CLSCKiPxVBdnnswThhOicbzayjfePR0Ev%2Ffv%2FlNQWx5A0Wp3XASjL%2B07nfKK0MEInwcBKIapfBgSnr3Wddj75YJav0WUxPkLJo6OHg1z0kvFuAGnTmIgf%2FYe%2Fr1sVR5kkgkKndmYSnku37z6Af7JrVTiCXk3jgZx3EwQxupKVSIr8Xv0DfO8mbcuz29p07fHqudv7C%2FyCozDXBQYfGiGDy06h4rk%2BzZPbBYoKvPzmZ%2FyCGizQTevDhXgQRarNJswIr0LM%2FvtPpYdz%2FM2qgQFd0aI1r3x4xg6izFjLwqXC6nSqc0A9%2F%2BRos6iQr9H6aAinGGVzeHC9GaVlGq8wZqky4Dp1BYHRnoCXuoTBj4FtI%2BA9TEQovuowvdfCvwY6pgH4uaDmyTBXzV657ySpaEmqRAq99TJRN2jVFOOpzI8IxyAzjUkpmNhczh2JAG02Ng55bf35lqvSa5KP001eJlsNiyzGwFLZpSMloiu7iBxQoLBYzrZFQJcpORZVy6od0WP2J5vl5aJ91VW94IMjB2mhGxiryRVLzZDzePhgF1mccm3MskblYmcWf%2BOoG5lrPiM2vVjoA%2FYrKmoJvmBhzzP%2Fzta4pDNg&X-Amz-Signature=99e9d53081f739afe7ee1cd74e7ac889b52d70f70efafd8ee9837fce61dbe6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
