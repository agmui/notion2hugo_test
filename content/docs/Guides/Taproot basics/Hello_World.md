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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIQJ5JTL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCOwTThUJYpBvBpnIL4fSBzw4F%2FnEuBv9Q6Xfqin5RJ1gIhAPp7XOoyIzfoXPJ8oQ6cmRzD2EhrtpRjzpu9n%2Bj5RP8lKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQXubHw5ts80YQNcq3APql5GtZejcBrNaXbjaKs2JvwkEEB92Nfd4AEgo%2BVgBbYnnRYm14Dx5ffwbHrjJcuLrfZdekrPgfDDvaE0NsZEQZtsWKCqF1zmyqa4CTf96eIDJT3wWnCGPq8I152T5WPcCC3BYp9x58FGQbomv%2FyRtoNBmcN2yA1HPYsfS0Pw9JPfwO7NV23PGgbepe0ruPHffCwF9Eryf13txs%2Fr%2FI0q0vHWLQmxdkoQwk4WcKRh5%2B0hhXAhgNIpsWKpI3tZbxD2%2FdYXboEIwxwZYnzRtV0ey6J8gGkrWPfg%2BfzoQ3Enl8I3WRIAYVq4pigglCTSA2e8DrRrRGnp%2FNTHhl23oN7mrtzKbFeWhzufaF9Mnq1oldfGvJReQaoVho1m8n1CBIaED3nLnaf9Bows7GmJMA1d0YRYvM3vLt0mVkMqt0yy%2FdpCkPCUUh%2FW%2FxLUIFkTO5Tb%2FQtlfpXc9sUNe9V1LggM4KxuYfmc%2FUbmuCrWQ6dcua4cVrX2eZwWo9EIiftTUCoZpmVVt6491luDwM8W1T75oLymJdJ87%2B8Ety3FQLSN687qfOlD0VY0xdNYKqHw31jMfKrrg8FB57eihXzqwx%2Bbt7a2%2Bwh%2FRsdBLdFHjJK9cXi8tkbNWtSEufK0OWTDY4J7ABjqkAR72pCAXRFwJarlhokQXixLUNa03KEKU5Wo%2BblH6fMUp50tTgaAOjx50EBoLn2Ub0rNSN5Q96k9LgDkQoWd%2BT1xbqt8AsQ6%2BsKIhLKF8cxtWT9NcRuAWGyjhzZrzCf5jStu5GUDIzEuu3FLWLb40sWbB%2BOErs4ZoVH4ZqTbXlHYUFkf2f8uSY2vX9pOEI7xfrbUYLLofeGQDJ2AfbztooxNvvPGD&X-Amz-Signature=5df610530502bb191f91e319061494bcc0b19b5ab3783ce4c305cb481dc638f5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIQJ5JTL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCOwTThUJYpBvBpnIL4fSBzw4F%2FnEuBv9Q6Xfqin5RJ1gIhAPp7XOoyIzfoXPJ8oQ6cmRzD2EhrtpRjzpu9n%2Bj5RP8lKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQXubHw5ts80YQNcq3APql5GtZejcBrNaXbjaKs2JvwkEEB92Nfd4AEgo%2BVgBbYnnRYm14Dx5ffwbHrjJcuLrfZdekrPgfDDvaE0NsZEQZtsWKCqF1zmyqa4CTf96eIDJT3wWnCGPq8I152T5WPcCC3BYp9x58FGQbomv%2FyRtoNBmcN2yA1HPYsfS0Pw9JPfwO7NV23PGgbepe0ruPHffCwF9Eryf13txs%2Fr%2FI0q0vHWLQmxdkoQwk4WcKRh5%2B0hhXAhgNIpsWKpI3tZbxD2%2FdYXboEIwxwZYnzRtV0ey6J8gGkrWPfg%2BfzoQ3Enl8I3WRIAYVq4pigglCTSA2e8DrRrRGnp%2FNTHhl23oN7mrtzKbFeWhzufaF9Mnq1oldfGvJReQaoVho1m8n1CBIaED3nLnaf9Bows7GmJMA1d0YRYvM3vLt0mVkMqt0yy%2FdpCkPCUUh%2FW%2FxLUIFkTO5Tb%2FQtlfpXc9sUNe9V1LggM4KxuYfmc%2FUbmuCrWQ6dcua4cVrX2eZwWo9EIiftTUCoZpmVVt6491luDwM8W1T75oLymJdJ87%2B8Ety3FQLSN687qfOlD0VY0xdNYKqHw31jMfKrrg8FB57eihXzqwx%2Bbt7a2%2Bwh%2FRsdBLdFHjJK9cXi8tkbNWtSEufK0OWTDY4J7ABjqkAR72pCAXRFwJarlhokQXixLUNa03KEKU5Wo%2BblH6fMUp50tTgaAOjx50EBoLn2Ub0rNSN5Q96k9LgDkQoWd%2BT1xbqt8AsQ6%2BsKIhLKF8cxtWT9NcRuAWGyjhzZrzCf5jStu5GUDIzEuu3FLWLb40sWbB%2BOErs4ZoVH4ZqTbXlHYUFkf2f8uSY2vX9pOEI7xfrbUYLLofeGQDJ2AfbztooxNvvPGD&X-Amz-Signature=82204d8fb789b8c3681420a29b6f04b7ca761d84d923a71f4e69112243bb73d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
