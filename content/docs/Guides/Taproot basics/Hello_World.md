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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HOEUY4D%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCowkmMXflOW0csoNqVWdtdw62giAMCB%2Bqkbg6XZg%2BuCAIgYUVTaPjGpjkDYLsVNXyO%2B0m6uqJYhcQi4QwGefS9aqkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDF%2F3SjOANySRYKVV5ircA9HljgaLKtifXVf3jPboM6KAQoBMb7kdhlN5Zu17Oa%2Bts1Igd%2FoXGaR9xBeyF%2B1zJ0UFRr3cyjxQqrzQq5j7RxBm8IbSNtI558Xr0z4ZpfBtC9uI1pXlzZpcf7suwNPAUm7I5Vf%2BI4z2OX5N80g0vyIZUJkqnJukQKxB9vz6bA6iQsFvDOQIsV1NLUL5eOna20ujPnSjfqvyXS0IOZ%2BJPWRH3X7VfvH8eCmO8DIZQ7TC501s%2BV9IYUyh%2Fm40m70G%2BkYUHPVT2nSl9XTVdumk%2FFzQ1ESeFkfzRltObbXutkz40MQN6El1vYFSvOgdDGjF2HGXjAVub%2BAlykikDyaPswkJyjo2gTS3qaWW7ZbfEd0%2FdRGN4pg29CZ%2Bf%2Bxad2q47Ygl46PtnmftI8FwzcnMywsWXLSh93o2iGb4TO4t%2BTmbjBtejcvyqA2RSFtAYGHK%2BfDZfDaUQ981xsSRzhH0SQimgpfDAGyzS3XWgFtI8435A48ilTIzcGa0l%2BMWJbQHolKFBOYGwg5rkwOrWG7ybBm2LSYg034UQPvok9%2BmJIGK841Y1%2F7PnzYDS90%2FcXyYoiAnOcz%2BX91Vhrivzs1uySephySIZplnN0LX41vhHnJ3PxEnTnLAGC%2FEmkcdMOCoh8IGOqUB31xrtHu%2BJXImF6FebxPIi1xc%2BxFzVdTi%2FUSzZlgcCvobnUgAfiSJDgfxD7dNP%2F%2FXOEJubtITNxRiXSzPXpbSH2hIPl6JGL6NKcfP2pWI8QbV75uPshqAYIsQT0zWdf5rQ9vEIU4MH6GYG3RneYciy5rv590A87ssNxr%2B0n%2BLjoryRv7SIUWQOKQhJXBmgon8m57qD%2BX3OvS7M6qktFmixLBREFbN&X-Amz-Signature=e0c299dc6f9ba717c27c640f02aba944c3243d4cdf3d802e1f8f9f2b7e08adcf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HOEUY4D%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCowkmMXflOW0csoNqVWdtdw62giAMCB%2Bqkbg6XZg%2BuCAIgYUVTaPjGpjkDYLsVNXyO%2B0m6uqJYhcQi4QwGefS9aqkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDF%2F3SjOANySRYKVV5ircA9HljgaLKtifXVf3jPboM6KAQoBMb7kdhlN5Zu17Oa%2Bts1Igd%2FoXGaR9xBeyF%2B1zJ0UFRr3cyjxQqrzQq5j7RxBm8IbSNtI558Xr0z4ZpfBtC9uI1pXlzZpcf7suwNPAUm7I5Vf%2BI4z2OX5N80g0vyIZUJkqnJukQKxB9vz6bA6iQsFvDOQIsV1NLUL5eOna20ujPnSjfqvyXS0IOZ%2BJPWRH3X7VfvH8eCmO8DIZQ7TC501s%2BV9IYUyh%2Fm40m70G%2BkYUHPVT2nSl9XTVdumk%2FFzQ1ESeFkfzRltObbXutkz40MQN6El1vYFSvOgdDGjF2HGXjAVub%2BAlykikDyaPswkJyjo2gTS3qaWW7ZbfEd0%2FdRGN4pg29CZ%2Bf%2Bxad2q47Ygl46PtnmftI8FwzcnMywsWXLSh93o2iGb4TO4t%2BTmbjBtejcvyqA2RSFtAYGHK%2BfDZfDaUQ981xsSRzhH0SQimgpfDAGyzS3XWgFtI8435A48ilTIzcGa0l%2BMWJbQHolKFBOYGwg5rkwOrWG7ybBm2LSYg034UQPvok9%2BmJIGK841Y1%2F7PnzYDS90%2FcXyYoiAnOcz%2BX91Vhrivzs1uySephySIZplnN0LX41vhHnJ3PxEnTnLAGC%2FEmkcdMOCoh8IGOqUB31xrtHu%2BJXImF6FebxPIi1xc%2BxFzVdTi%2FUSzZlgcCvobnUgAfiSJDgfxD7dNP%2F%2FXOEJubtITNxRiXSzPXpbSH2hIPl6JGL6NKcfP2pWI8QbV75uPshqAYIsQT0zWdf5rQ9vEIU4MH6GYG3RneYciy5rv590A87ssNxr%2B0n%2BLjoryRv7SIUWQOKQhJXBmgon8m57qD%2BX3OvS7M6qktFmixLBREFbN&X-Amz-Signature=69b09d78dc29f8d8e00f42a724936691a39f9ab770d547387f1741160e1a2c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
