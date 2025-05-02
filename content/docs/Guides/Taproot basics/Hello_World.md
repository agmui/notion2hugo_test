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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXBJGMLY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDbXt7Gu2zix6ooPkjl78unLyx%2FbT4I1vFDPS63BoVbMAIhAJSCnAntbLPNbXl%2BbsxEo0H%2FkWt9IUlpuq%2FiFPGuGJ9gKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzA3iGGASjrXNl8iBcq3ANUELENnsLkCXSoqcTCFIS25PJk7Sfhth%2BySgTZVM5IdpiFw2ENNTn6fVjL9UKz%2FTYiBoHg4ZNOlfZKvcf3SDkxX32XwJE3EIiKWAQflp8fwjMTOEjluuOXIVvR%2FrDQZokgASveREGKg04EIIxSiIra%2B0jnmC8Yh5EWwunDQtkkUDvw%2FKYzaEGHTZPYascYrjemOk%2B%2BMbiYJlvQTQ5V3HJEbEc7ElqzYjXMDzEU%2BXwwMezgvoLBnagQF5MdVlO8Hls5JKBNZlSXKS4RKDTjQhqCiqwPBa5h2oqAI9HNEWv4CLW1ldA2WtwsAZPBSs2X29sRehAW7IfTZcLArQ3AC3tIis%2FA8XIypeW7H5ECOeEdtvuMMncDFn7exQP4fvZJzoVij90BGsMyxbUCCIrEbBaYiEiOPrbBDDdUqKDhNcljpKVY4k5ZtoUukv9Hp%2FeLnckA0ChH8t7FbiJ7uShmGOMFpt%2Bylyu5QAKEvrk004ZV%2B1TyTUabYVVYwdB1KXNO3tR6BB8dvtFvMhGKGShomwdTk7L8m2zX3uk1tH%2BZUDnDXAABw3VZtCXScmyCpdq716uKcPRHeq7P%2FTIBVWqdonVlVGaMUQC2wenudH73Ow5lHfjtU4wN%2FaRURYZ38TDUh9HABjqkAYNMJJRJNkQpoXpYV5UkK7jVHeu%2BPQM9N0vmnhUr0jgcsWeKEeneKsoKDthIsmgIIsIRS9aGtAPUh2RwPHumWg3VHSwJl1TEtGa2Y9DyHUHS3miGOKut2ehsFV4lSUwqg8GZ1V9%2BjG7U5ijHU0YFUxgvp1hBTbpTtfQ6W1oRBkwmzB%2Be03xfQMktI5Md26Zh%2BR%2FNMMeBSZklzBhZyUAWEfBAcVOo&X-Amz-Signature=b33be04fbab24b8e6f921ec4ae886f094e79d8ffaf227cae9fd860f5403da62b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXBJGMLY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDbXt7Gu2zix6ooPkjl78unLyx%2FbT4I1vFDPS63BoVbMAIhAJSCnAntbLPNbXl%2BbsxEo0H%2FkWt9IUlpuq%2FiFPGuGJ9gKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzA3iGGASjrXNl8iBcq3ANUELENnsLkCXSoqcTCFIS25PJk7Sfhth%2BySgTZVM5IdpiFw2ENNTn6fVjL9UKz%2FTYiBoHg4ZNOlfZKvcf3SDkxX32XwJE3EIiKWAQflp8fwjMTOEjluuOXIVvR%2FrDQZokgASveREGKg04EIIxSiIra%2B0jnmC8Yh5EWwunDQtkkUDvw%2FKYzaEGHTZPYascYrjemOk%2B%2BMbiYJlvQTQ5V3HJEbEc7ElqzYjXMDzEU%2BXwwMezgvoLBnagQF5MdVlO8Hls5JKBNZlSXKS4RKDTjQhqCiqwPBa5h2oqAI9HNEWv4CLW1ldA2WtwsAZPBSs2X29sRehAW7IfTZcLArQ3AC3tIis%2FA8XIypeW7H5ECOeEdtvuMMncDFn7exQP4fvZJzoVij90BGsMyxbUCCIrEbBaYiEiOPrbBDDdUqKDhNcljpKVY4k5ZtoUukv9Hp%2FeLnckA0ChH8t7FbiJ7uShmGOMFpt%2Bylyu5QAKEvrk004ZV%2B1TyTUabYVVYwdB1KXNO3tR6BB8dvtFvMhGKGShomwdTk7L8m2zX3uk1tH%2BZUDnDXAABw3VZtCXScmyCpdq716uKcPRHeq7P%2FTIBVWqdonVlVGaMUQC2wenudH73Ow5lHfjtU4wN%2FaRURYZ38TDUh9HABjqkAYNMJJRJNkQpoXpYV5UkK7jVHeu%2BPQM9N0vmnhUr0jgcsWeKEeneKsoKDthIsmgIIsIRS9aGtAPUh2RwPHumWg3VHSwJl1TEtGa2Y9DyHUHS3miGOKut2ehsFV4lSUwqg8GZ1V9%2BjG7U5ijHU0YFUxgvp1hBTbpTtfQ6W1oRBkwmzB%2Be03xfQMktI5Md26Zh%2BR%2FNMMeBSZklzBhZyUAWEfBAcVOo&X-Amz-Signature=61fe62df8d712cae0c83ae04537515012b681ff5dc8dd6597ba1d032035c57ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
