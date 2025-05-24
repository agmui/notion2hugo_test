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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSHAFFI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICmCOyfXxI3ePtQjC3UuDDdcv6uv2IocPeMPpFAdYFQCAiAt7KJAeYiWqGmxrlPvS3vspg9%2Bdt8ez%2F61nRp99c5Sdyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMwp%2BqH2zASHAKpdaLKtwDAfQ9fpUkvNJ7PTj%2FZXa47wN3YzsaoTgua9yTEgJNilFNWVh5bXSuwsVqlvcEPKhJRzuan6at3uj41iNxDJZkYVo1Xd9XOKFH09c4RBTEzzm9SlPCE3T63LU2KBwslQ1chghpztYhd6TQEVz6oxBWo5I1OgBtykvZStyvbLXdIwKXJHYY625iHgWtTWp0kQId0zNrlNqKF6TI8WR5BAWZU%2F1F8fPq3HXaNObQXZEhnfkUl%2BQsdeeqo%2FPqtCt5%2BGOlo6GUbh366XxWmi0XZMC2H4DhXwTzOyXw%2Fb721n3wxJs8HED0VFCGuGcyiJLpnupkIMuP0%2BKl2Wa9Zmit%2BFiIzOeGHKYB39WatlWuOBJMIVbT8KzWWGb6VPSLPyM%2Fwk9yFBmAypXRjYAbDJE6KOoInD29ZQHx5Hnu6AjpWK9%2BWXVIHSGYY6O9I1DddfhafekFh9D5baNnsoAf%2BnH4cG%2Ffj5lagGwYr4xlhhvhEvi7SyFgDu%2FtP0csOri1e2MhfQeCG%2FkcDPzoVhirD%2ByeiEQXyCpB0iAaDzL9wpVeIM2JQNkXO5amuMyhwBWvlIUa3rI7p2xkL%2BRobG5snm03aFCjwdtC86L3xEomp60YFMfAbv8tIojxr4tRHSc8SSMwp8nGwQY6pgGaebJIUyiBSE2Bs1r6JFzIPJ4gK66jTBUDL7S4i7KWaIfn32cWtbEaYPk8Yz%2FshakKTiR2q6U3Rts9lHhgvmRwrfcJDZEoND2Cta10MuDCaraZxol%2Firnsj9%2By7azgVIJHE6gqdlJFBJvPgI44RI1FI1AYin%2FJJ29W9%2FaNLAb1vyUGCpBpFYyEwO5c468rup5sTGGeBQhO2Y4aeszVVfw3kjPgF5O%2F&X-Amz-Signature=b1f7cccc8d31fa64bbc54ef6dbcad7203a1d1a6aab749cbcfe831d32aa97892d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSHAFFI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICmCOyfXxI3ePtQjC3UuDDdcv6uv2IocPeMPpFAdYFQCAiAt7KJAeYiWqGmxrlPvS3vspg9%2Bdt8ez%2F61nRp99c5Sdyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMwp%2BqH2zASHAKpdaLKtwDAfQ9fpUkvNJ7PTj%2FZXa47wN3YzsaoTgua9yTEgJNilFNWVh5bXSuwsVqlvcEPKhJRzuan6at3uj41iNxDJZkYVo1Xd9XOKFH09c4RBTEzzm9SlPCE3T63LU2KBwslQ1chghpztYhd6TQEVz6oxBWo5I1OgBtykvZStyvbLXdIwKXJHYY625iHgWtTWp0kQId0zNrlNqKF6TI8WR5BAWZU%2F1F8fPq3HXaNObQXZEhnfkUl%2BQsdeeqo%2FPqtCt5%2BGOlo6GUbh366XxWmi0XZMC2H4DhXwTzOyXw%2Fb721n3wxJs8HED0VFCGuGcyiJLpnupkIMuP0%2BKl2Wa9Zmit%2BFiIzOeGHKYB39WatlWuOBJMIVbT8KzWWGb6VPSLPyM%2Fwk9yFBmAypXRjYAbDJE6KOoInD29ZQHx5Hnu6AjpWK9%2BWXVIHSGYY6O9I1DddfhafekFh9D5baNnsoAf%2BnH4cG%2Ffj5lagGwYr4xlhhvhEvi7SyFgDu%2FtP0csOri1e2MhfQeCG%2FkcDPzoVhirD%2ByeiEQXyCpB0iAaDzL9wpVeIM2JQNkXO5amuMyhwBWvlIUa3rI7p2xkL%2BRobG5snm03aFCjwdtC86L3xEomp60YFMfAbv8tIojxr4tRHSc8SSMwp8nGwQY6pgGaebJIUyiBSE2Bs1r6JFzIPJ4gK66jTBUDL7S4i7KWaIfn32cWtbEaYPk8Yz%2FshakKTiR2q6U3Rts9lHhgvmRwrfcJDZEoND2Cta10MuDCaraZxol%2Firnsj9%2By7azgVIJHE6gqdlJFBJvPgI44RI1FI1AYin%2FJJ29W9%2FaNLAb1vyUGCpBpFYyEwO5c468rup5sTGGeBQhO2Y4aeszVVfw3kjPgF5O%2F&X-Amz-Signature=80ab0f401ab1453fa72b6a431e76014a9e81490e6afacaf39c00c0b25dee5aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
