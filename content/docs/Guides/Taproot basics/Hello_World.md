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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJXHCEM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZTbUFDm%2BzyDSz7G8zEMS5fPQODhznConaEzGDl9TCzgIgKNnm5DaarRTXnbgVVDK3cwgA%2BEwq4uKLW%2BpH4QJORkUq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJdsSqZshl9IItt7SyrcA3whAEOb2iy7sG8EjUiPuJafSF7dP1oRw2Don4huWxTKmnzGr3LXEa6fUw%2BHtrh4hDW8h8PYTuB0caZKb%2FtA7PBsq3ZSdyvBELa37qX4oR6BxizML1VV9Qu%2BiNCQSJiMtMQMVDkvc16zr%2FlXEkAPe7e96L%2B203TaSk0mxKD6pBhne%2BMJg1rnJc2UtgQN3Rk4BGS8m5RvzngwK29XXjK7qsQlobGoUGx%2FInY0IIMlWOZCnV4q0F4V5a6q87ojxg03CacceKLFd%2FZ%2BXAxma7LbdMJF8a2fspHTOUfTa%2BHhKLq6DbctVYFj0ehvad%2BgZlxqaNiltners55p2w2I0fDvgR%2FRXmf1q3sqXIYShWfU5H7bBpfeOENxJzqWy7lHzoecDnQ1nWqwScnn9%2BS9PsjfWXa5uOURo9o344XizQcGPUaXHWo3CRWRQnW112dxWctv9L9upi7nDj0ylfR811BVYx%2Ftav8SPY3H0KpV61mogrVVEh2xSHYl02HhRWqY1ewYzr17Rn2qOOd10lac7zmdELondeiKLcSRUpat7p7aH5c9iyPHxpkP4orwRvSMr0ySQUSwHejkZ4tXWjU4DgNPlkOGAh8HKLe5XqalujBcGTYM7l4T%2FSoO0FY4c40AMP%2F%2ByL8GOqUBrIRBCAOoYqCrzjdeDo29ImqdXGcNOUp4Pei3bNNu8eThzyCOBsQp%2Bv3NeWZ%2BfMkysD0YhRoXqgx9Tr1T%2FyU0G4z5ReSvlOvZ6ORxGE2ZdrAy4NFLm%2FjEFWVvywPFboZalPXyebs2cVtbeeXnwSoB0WKos%2BHKfjm%2F02HvpNfHSOW%2FiSTnTHHQXhxnSi1tSI59kXDNPOPtMaLi6E79Y6%2B7pQSJZisX&X-Amz-Signature=4ebc8da4629a7348809c8b7e863ab550ce29448d82f0a0858deab6efe6fde713&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJXHCEM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZTbUFDm%2BzyDSz7G8zEMS5fPQODhznConaEzGDl9TCzgIgKNnm5DaarRTXnbgVVDK3cwgA%2BEwq4uKLW%2BpH4QJORkUq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJdsSqZshl9IItt7SyrcA3whAEOb2iy7sG8EjUiPuJafSF7dP1oRw2Don4huWxTKmnzGr3LXEa6fUw%2BHtrh4hDW8h8PYTuB0caZKb%2FtA7PBsq3ZSdyvBELa37qX4oR6BxizML1VV9Qu%2BiNCQSJiMtMQMVDkvc16zr%2FlXEkAPe7e96L%2B203TaSk0mxKD6pBhne%2BMJg1rnJc2UtgQN3Rk4BGS8m5RvzngwK29XXjK7qsQlobGoUGx%2FInY0IIMlWOZCnV4q0F4V5a6q87ojxg03CacceKLFd%2FZ%2BXAxma7LbdMJF8a2fspHTOUfTa%2BHhKLq6DbctVYFj0ehvad%2BgZlxqaNiltners55p2w2I0fDvgR%2FRXmf1q3sqXIYShWfU5H7bBpfeOENxJzqWy7lHzoecDnQ1nWqwScnn9%2BS9PsjfWXa5uOURo9o344XizQcGPUaXHWo3CRWRQnW112dxWctv9L9upi7nDj0ylfR811BVYx%2Ftav8SPY3H0KpV61mogrVVEh2xSHYl02HhRWqY1ewYzr17Rn2qOOd10lac7zmdELondeiKLcSRUpat7p7aH5c9iyPHxpkP4orwRvSMr0ySQUSwHejkZ4tXWjU4DgNPlkOGAh8HKLe5XqalujBcGTYM7l4T%2FSoO0FY4c40AMP%2F%2ByL8GOqUBrIRBCAOoYqCrzjdeDo29ImqdXGcNOUp4Pei3bNNu8eThzyCOBsQp%2Bv3NeWZ%2BfMkysD0YhRoXqgx9Tr1T%2FyU0G4z5ReSvlOvZ6ORxGE2ZdrAy4NFLm%2FjEFWVvywPFboZalPXyebs2cVtbeeXnwSoB0WKos%2BHKfjm%2F02HvpNfHSOW%2FiSTnTHHQXhxnSi1tSI59kXDNPOPtMaLi6E79Y6%2B7pQSJZisX&X-Amz-Signature=fb91d1a510e7067e6dc90b3855ae755492322ea3da7411820fcfa3a64ff05d60&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
