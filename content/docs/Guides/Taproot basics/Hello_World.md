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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MOVBPF2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBzDA59CH%2FvunD9GnUdr8mjKgmLQZnq%2Fhage9%2Bz%2Fw9H8AiAt%2FXLUGL6cJwZete1Gw1v%2F2GY%2FOv%2BzmIf7D3v7UAbrJyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMcPC2bf%2FhrQ5COEhIKtwDF5kdr1W9Jp%2Fk62F4IKIR4YsimKg0XwwIvjIK4C%2FiTZ4sqhDDzP%2BmYB%2Flqmo09jM9j3YZsakSJGGerDX%2BRP03iUAEhEqJdvYDcLwe9jnUcqdW4qfzQ8DAMDTWjbIkxKp0ivsNCVp1TFe3ibOiNXoIbo442rYNocKh2VTSArGZQqM4J6O%2FjVpZwVExLDNY%2B5N9%2BQRN0TsoYPDGkZohRRUC%2BKxIhBl6e9Og88PtWSrMwZ7A20DZdPAERHMYSvfkthrm97Iqtmziz7TJiWB64vk2VKRGvE1Hv7FQQLO1Yt48FUBgZBhB1PDCaATtU9IMYgqFxU0c3LiCwT%2FBcOekHtqt5nOscH9lfJ1Y7obdxD2W%2FRaNvC42pfqsmUP9oiySyO68%2F3iFvE3Q86Jgh%2B2FuNtA9ml8Yi5kBAexBsWKjkq1VSrwKfa19DzEMf44ViogpxRprmDZql53QWHJSSIM4scUmKduhbs3S38bEYTOHBxY30A6BrFPD4t254DVywIZpmLiB%2FsjBsDr6RV%2Bk3zXzV0YkKJJLdW8StBCa8sIU%2BI7qUVSkhhoLqLul1lxE9hOFMDj7jZeVSTbwzkasyBK8%2B7mG%2B0GE5ZdEhlubkf9oKxIkhnfGOU55NHuNzVZICswleu0vgY6pgG9sMpCxnHbTzz3jFKZsmO2gJ0BC1wVAK4Du%2B0Jh6sQgfB8QnW9L1aXGnpuZY1XubotFbBPxgFJdhY7s9NFlCk%2F3EatxZBQvBtOYpp%2BxKTfY15H55zde3VbpmhPZXe1yhARgPh%2BrHQxm41hPuxZ7BSYg84pVb7CjxvncqXLJMNyM1fjhpViEDadcHtj1pYe4K0BGjHp%2FuTaoYBBisf177myJEPK3o8J&X-Amz-Signature=2334812d2a9e49bd994ddec8e019f02f29b8aa5ed3ce20a0709befdb17da5768&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MOVBPF2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBzDA59CH%2FvunD9GnUdr8mjKgmLQZnq%2Fhage9%2Bz%2Fw9H8AiAt%2FXLUGL6cJwZete1Gw1v%2F2GY%2FOv%2BzmIf7D3v7UAbrJyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMcPC2bf%2FhrQ5COEhIKtwDF5kdr1W9Jp%2Fk62F4IKIR4YsimKg0XwwIvjIK4C%2FiTZ4sqhDDzP%2BmYB%2Flqmo09jM9j3YZsakSJGGerDX%2BRP03iUAEhEqJdvYDcLwe9jnUcqdW4qfzQ8DAMDTWjbIkxKp0ivsNCVp1TFe3ibOiNXoIbo442rYNocKh2VTSArGZQqM4J6O%2FjVpZwVExLDNY%2B5N9%2BQRN0TsoYPDGkZohRRUC%2BKxIhBl6e9Og88PtWSrMwZ7A20DZdPAERHMYSvfkthrm97Iqtmziz7TJiWB64vk2VKRGvE1Hv7FQQLO1Yt48FUBgZBhB1PDCaATtU9IMYgqFxU0c3LiCwT%2FBcOekHtqt5nOscH9lfJ1Y7obdxD2W%2FRaNvC42pfqsmUP9oiySyO68%2F3iFvE3Q86Jgh%2B2FuNtA9ml8Yi5kBAexBsWKjkq1VSrwKfa19DzEMf44ViogpxRprmDZql53QWHJSSIM4scUmKduhbs3S38bEYTOHBxY30A6BrFPD4t254DVywIZpmLiB%2FsjBsDr6RV%2Bk3zXzV0YkKJJLdW8StBCa8sIU%2BI7qUVSkhhoLqLul1lxE9hOFMDj7jZeVSTbwzkasyBK8%2B7mG%2B0GE5ZdEhlubkf9oKxIkhnfGOU55NHuNzVZICswleu0vgY6pgG9sMpCxnHbTzz3jFKZsmO2gJ0BC1wVAK4Du%2B0Jh6sQgfB8QnW9L1aXGnpuZY1XubotFbBPxgFJdhY7s9NFlCk%2F3EatxZBQvBtOYpp%2BxKTfY15H55zde3VbpmhPZXe1yhARgPh%2BrHQxm41hPuxZ7BSYg84pVb7CjxvncqXLJMNyM1fjhpViEDadcHtj1pYe4K0BGjHp%2FuTaoYBBisf177myJEPK3o8J&X-Amz-Signature=a531d556a43a223123cde1099d665d5c3b37fec94bba987c4a557c7612a1b8b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
