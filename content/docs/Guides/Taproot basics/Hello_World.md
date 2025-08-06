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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJB4EKX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDcc5Bk7CU0%2FfI8kQnt7h1bfwbizZP3wIU5anA7Y4AZ2gIhAO072b6p%2F3R%2FI8lACSKXhgN0PXbFwVClJlj0tkEfMH7ZKv8DCHEQABoMNjM3NDIzMTgzODA1IgxG3DoTeYiewdZCGVUq3AORl4NAp6IYfP%2Fl1hFBxYfd6%2Be0lGLCubIcb9GJzyyTbAZ0ywUztR5QYEuIjAaAZGEQEvGqp26RKe6KXTAenG4IG%2FMt87qjak3LoOrFZsnn96epiddnjTPq2GfzFdrqNqGapdPc0gI6MatYe61UNFZRFgeFnaBUvddeg2y2xZ1I65XKQDcAa8d4osLx03VrrPUDHOplnjNiqpL7tu%2BJQg%2BONHrdKCqwMuFIfF5YfX0iw8553rnJgOLVLGbMGY16KZPCB0BEDYmAhUUD1A4ysgGkdH6pMjOqiBqI6kqx3vMrZt6Uomdkwpb4wQXM2tkBG3Kq0su2bEaq%2B8VAjIoGyFuoX5yCbD7TSNpEy8BcinT3Qi6itFi0Nc%2Fim%2Bitznj6g7pVXwCOoVAz6uTHyeUk4%2BO1b%2BEickH6%2BBVF1v04EcyQVHYmXF8HJYqJqoF4FUOuGEJIsZTJzD1bHMhfwAwXXcW1%2FMpuhNr0IBcdjp%2Fgl4srVnLstfaeeJ20De4U6rfhZ%2Bp0O4hwT4EU%2F5sVT1J9VpEBlX0DeSgSx%2B%2BRDOh%2BEIONrPaqweqBTjs548xTCLeTqL4JlG22vavW797hZBKqvkD8IHFzZqbMFzMjkWQPv6o6BwNUuXxGhAMk%2FYXUDzCDl8zEBjqkAaGI9t8MpUEcS0L7bJymGweYqqTdvHsa3GuEov9VRl1xDfZ9fYxhXONMYDgs4zQkLCjiiDbrIdFwpmVxTAtEBLdzAHYeGA1FQ%2FBQksjZPZ7wrPtgYWbc1BdnkG%2BxrpgsPIBIzxA3WD04RXGShQwIQJadEOmO3fgIcKNnVPbWu2qfzqqaLR2zaUZ5vMfcdgRJ109RWyD6%2BRGHKUNIu8BUv4T6Jp7W&X-Amz-Signature=9f05e3875b7ee8a3d6393a3d91f0f56b5bab25cde1270d2e320bf0851b486929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJB4EKX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDcc5Bk7CU0%2FfI8kQnt7h1bfwbizZP3wIU5anA7Y4AZ2gIhAO072b6p%2F3R%2FI8lACSKXhgN0PXbFwVClJlj0tkEfMH7ZKv8DCHEQABoMNjM3NDIzMTgzODA1IgxG3DoTeYiewdZCGVUq3AORl4NAp6IYfP%2Fl1hFBxYfd6%2Be0lGLCubIcb9GJzyyTbAZ0ywUztR5QYEuIjAaAZGEQEvGqp26RKe6KXTAenG4IG%2FMt87qjak3LoOrFZsnn96epiddnjTPq2GfzFdrqNqGapdPc0gI6MatYe61UNFZRFgeFnaBUvddeg2y2xZ1I65XKQDcAa8d4osLx03VrrPUDHOplnjNiqpL7tu%2BJQg%2BONHrdKCqwMuFIfF5YfX0iw8553rnJgOLVLGbMGY16KZPCB0BEDYmAhUUD1A4ysgGkdH6pMjOqiBqI6kqx3vMrZt6Uomdkwpb4wQXM2tkBG3Kq0su2bEaq%2B8VAjIoGyFuoX5yCbD7TSNpEy8BcinT3Qi6itFi0Nc%2Fim%2Bitznj6g7pVXwCOoVAz6uTHyeUk4%2BO1b%2BEickH6%2BBVF1v04EcyQVHYmXF8HJYqJqoF4FUOuGEJIsZTJzD1bHMhfwAwXXcW1%2FMpuhNr0IBcdjp%2Fgl4srVnLstfaeeJ20De4U6rfhZ%2Bp0O4hwT4EU%2F5sVT1J9VpEBlX0DeSgSx%2B%2BRDOh%2BEIONrPaqweqBTjs548xTCLeTqL4JlG22vavW797hZBKqvkD8IHFzZqbMFzMjkWQPv6o6BwNUuXxGhAMk%2FYXUDzCDl8zEBjqkAaGI9t8MpUEcS0L7bJymGweYqqTdvHsa3GuEov9VRl1xDfZ9fYxhXONMYDgs4zQkLCjiiDbrIdFwpmVxTAtEBLdzAHYeGA1FQ%2FBQksjZPZ7wrPtgYWbc1BdnkG%2BxrpgsPIBIzxA3WD04RXGShQwIQJadEOmO3fgIcKNnVPbWu2qfzqqaLR2zaUZ5vMfcdgRJ109RWyD6%2BRGHKUNIu8BUv4T6Jp7W&X-Amz-Signature=4c828f89a93f588d8b30ff5970a6e83255b67a1860fd72499e971be83080ecc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
