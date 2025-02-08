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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STAF53N%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDHm9nB4Q00GdPTuZ5Pqwj73PCYBj06YEWi7FJ2qk44xQIhAPilxmb5OPPJiAj2pcAGbL5j0kFbkVcGViomtR%2BLQuXeKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe43cjUURWl2Vi6Ygq3APdhfEWTZirURyv8bt%2Fu2T4Yy5J2J8K6ynQjs%2BCfqLZcpqh4%2BZpD9SPikSG7kbkKUk10ncB9Z2b8gWmNyUYg3MuHSDYzDYEowi3YiuBSVfDZnuHdaIbcNrZSbZEhqG9I74gbt9M1iOhPTUVVZKk2Il%2BXQ%2B0Wb7WcXFsc1OjWcnSCwLlBkjngSr%2BL2HL0v%2BotE8rFWNEjtC4Lio2IBaC3rIF%2BxqQ%2F6okkkTIYy4%2BgoHku7%2Fum4kk1u1Fa%2B0FuS9tLBGWdg8LPRMOw%2BgWdcDmJi7tusPypmILyrmyVZpgDk%2BP%2BkVAyIPQxkDn4kMogNZwyAtj3H9XQeN2L%2FY8blCmd0kxDdIgrMQFxkXHrLOGsMXrLX%2Fhgb0JnJzuEuIA3asSNv8GTTVZk0NRS3XkHAJyZTNo0XID%2FwiW8L3zJ7oXFzNDcAe907fJSJxqMT%2FJ61EO8ryKEwYEPSNTGkW1PRJDA0cRXqfdktwy8m%2BKjxPdE8isA1BIg8gNJ2gQ3V4IJcC1hcKvyOKeQhXnkEGCHfd1VI5NHJI0WbTQckQ10aU%2FItMyw1NC%2Bcsy59Mu4wfbD7ncPriREYURTE92vBn%2F2kDC%2FwnO3cM2q0iWKVD2icc5vF%2ByvAGvC0FbzDDCbyWs6TDMkJy9BjqkAST%2BXj%2BwXqWNsR36MYRBFhj7sxtV%2B%2FbrqqtF20AoziAS6hkVA%2FiINWpf%2BE6GO%2FoPVsSQydmIBXazusnwLMajVfp%2BBjaZGNEy4s6Pooc3ufHkCvZT%2B7efsBt5ZwnZD%2FO2jjvgsh8fQGNxqKy5czVVPjF2WqaEM%2FlOjjA6Uw%2BsY%2F7VQaqz3zQOWQnAUTRS0Ptwe%2BNGniglRuMfYhYVHJZye22jYXcR&X-Amz-Signature=efed63a33e14b03928db70fd4cf9eb6183296e1a1ea9586ff7642994cc45e601&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STAF53N%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDHm9nB4Q00GdPTuZ5Pqwj73PCYBj06YEWi7FJ2qk44xQIhAPilxmb5OPPJiAj2pcAGbL5j0kFbkVcGViomtR%2BLQuXeKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe43cjUURWl2Vi6Ygq3APdhfEWTZirURyv8bt%2Fu2T4Yy5J2J8K6ynQjs%2BCfqLZcpqh4%2BZpD9SPikSG7kbkKUk10ncB9Z2b8gWmNyUYg3MuHSDYzDYEowi3YiuBSVfDZnuHdaIbcNrZSbZEhqG9I74gbt9M1iOhPTUVVZKk2Il%2BXQ%2B0Wb7WcXFsc1OjWcnSCwLlBkjngSr%2BL2HL0v%2BotE8rFWNEjtC4Lio2IBaC3rIF%2BxqQ%2F6okkkTIYy4%2BgoHku7%2Fum4kk1u1Fa%2B0FuS9tLBGWdg8LPRMOw%2BgWdcDmJi7tusPypmILyrmyVZpgDk%2BP%2BkVAyIPQxkDn4kMogNZwyAtj3H9XQeN2L%2FY8blCmd0kxDdIgrMQFxkXHrLOGsMXrLX%2Fhgb0JnJzuEuIA3asSNv8GTTVZk0NRS3XkHAJyZTNo0XID%2FwiW8L3zJ7oXFzNDcAe907fJSJxqMT%2FJ61EO8ryKEwYEPSNTGkW1PRJDA0cRXqfdktwy8m%2BKjxPdE8isA1BIg8gNJ2gQ3V4IJcC1hcKvyOKeQhXnkEGCHfd1VI5NHJI0WbTQckQ10aU%2FItMyw1NC%2Bcsy59Mu4wfbD7ncPriREYURTE92vBn%2F2kDC%2FwnO3cM2q0iWKVD2icc5vF%2ByvAGvC0FbzDDCbyWs6TDMkJy9BjqkAST%2BXj%2BwXqWNsR36MYRBFhj7sxtV%2B%2FbrqqtF20AoziAS6hkVA%2FiINWpf%2BE6GO%2FoPVsSQydmIBXazusnwLMajVfp%2BBjaZGNEy4s6Pooc3ufHkCvZT%2B7efsBt5ZwnZD%2FO2jjvgsh8fQGNxqKy5czVVPjF2WqaEM%2FlOjjA6Uw%2BsY%2F7VQaqz3zQOWQnAUTRS0Ptwe%2BNGniglRuMfYhYVHJZye22jYXcR&X-Amz-Signature=758c526276fd4932c628c8225bfa027c68551213468d9008eb382d40b4154915&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
