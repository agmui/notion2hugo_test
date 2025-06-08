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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CHP4WS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0i0w4cOx%2FP4KS1%2BFZ%2B89s7VE8v2HMHXiA1rpkYpyPYAiEA5wTYztRJoFi1m%2Flh8bsS1LEtw6f2PtA1neYfbS27JdkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUrGj0muPax898dQyrcA9gPb7fF6BuJIAg%2F0m5goI1%2B90XWKi3ClpqOeCPKEnN7Fqk4R9rt9n5MI8gS%2F0zR7Ec8cTnwAsicIbFnOmoEMoEHyVeoQd714MFe8DZiZ9qDI0dzgzVUUfwB%2FgYbwCsl8RixDkhhI%2FHQwq1nx5gKmah8YQbJifX5OsNeg1Fy64bm2yBojgg%2FlGDRwzd8zbH4Qo5nzSm5sKnrarUHMSu7piWMZSiOq0hN%2BS5VALT21yugX78goe9DP0MG4x4J%2FuX9DPELB3mtQxitwRRwHv5bsxn2kiPPw%2B6uHCl7TRr7vfxufUREgsK1y4xY9lHurwtBbwBzUm7RK4JoyjhlCviGS7%2Beoqu8PqgNq0Z4oRijH1Ouun%2FVhjaeDn6H1GN29iMkDmjTi0WML6aIu1iQeBEiU9gt4H6r1bY5jU2R0qjhytEEtgfMSW6815%2Bw0zbs7NiytamB4rm05ezw6a2yfCzdZTOEeJ3%2FvZexATcKQLtI1DhN3H1lnXqBZKA1vOxON8jL5sTAfrxk5iY9nlVerfriuDSBAsLZoia8Wkz%2BeCtVpBIsV9jzlHJENXn2vltjLWJMxK%2F6XyZvbxWvV6Zsz4c5C%2FrzgmOed0sGwINnzfHpX7DgPpIWhSz%2FiUuL9h7lMJCxlMIGOqUBbBAlkx0kAq1CKFA%2BePudqjbQcWYajeQaUbPqnTsLek3Ieo2MgfRLhLxxv6oBnQHk1osFd%2BLt2dIHX6LRoi%2FP%2FWh4Zoqr8nJKxsU7AxxpMgAm1XHErW6j2TrBG%2BUixLDe82xxrx%2BoniG7QzBDQlQvGff%2BGEWSu98vyQWzBer39r%2FJDL1jClMdPxzNJy9XnlBEsBpYIT1ViQlhc4zc8Nvl4P%2F3PC3U&X-Amz-Signature=11146e785af46d3b3a208811e1bf09239efc88dd5170cd1c0df29a82f1659901&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CHP4WS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0i0w4cOx%2FP4KS1%2BFZ%2B89s7VE8v2HMHXiA1rpkYpyPYAiEA5wTYztRJoFi1m%2Flh8bsS1LEtw6f2PtA1neYfbS27JdkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUrGj0muPax898dQyrcA9gPb7fF6BuJIAg%2F0m5goI1%2B90XWKi3ClpqOeCPKEnN7Fqk4R9rt9n5MI8gS%2F0zR7Ec8cTnwAsicIbFnOmoEMoEHyVeoQd714MFe8DZiZ9qDI0dzgzVUUfwB%2FgYbwCsl8RixDkhhI%2FHQwq1nx5gKmah8YQbJifX5OsNeg1Fy64bm2yBojgg%2FlGDRwzd8zbH4Qo5nzSm5sKnrarUHMSu7piWMZSiOq0hN%2BS5VALT21yugX78goe9DP0MG4x4J%2FuX9DPELB3mtQxitwRRwHv5bsxn2kiPPw%2B6uHCl7TRr7vfxufUREgsK1y4xY9lHurwtBbwBzUm7RK4JoyjhlCviGS7%2Beoqu8PqgNq0Z4oRijH1Ouun%2FVhjaeDn6H1GN29iMkDmjTi0WML6aIu1iQeBEiU9gt4H6r1bY5jU2R0qjhytEEtgfMSW6815%2Bw0zbs7NiytamB4rm05ezw6a2yfCzdZTOEeJ3%2FvZexATcKQLtI1DhN3H1lnXqBZKA1vOxON8jL5sTAfrxk5iY9nlVerfriuDSBAsLZoia8Wkz%2BeCtVpBIsV9jzlHJENXn2vltjLWJMxK%2F6XyZvbxWvV6Zsz4c5C%2FrzgmOed0sGwINnzfHpX7DgPpIWhSz%2FiUuL9h7lMJCxlMIGOqUBbBAlkx0kAq1CKFA%2BePudqjbQcWYajeQaUbPqnTsLek3Ieo2MgfRLhLxxv6oBnQHk1osFd%2BLt2dIHX6LRoi%2FP%2FWh4Zoqr8nJKxsU7AxxpMgAm1XHErW6j2TrBG%2BUixLDe82xxrx%2BoniG7QzBDQlQvGff%2BGEWSu98vyQWzBer39r%2FJDL1jClMdPxzNJy9XnlBEsBpYIT1ViQlhc4zc8Nvl4P%2F3PC3U&X-Amz-Signature=3cebdaaa6ec9e8aefaa9e5af8161630cb06782f387eab8a8f7d767aff4466b53&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
