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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPTHF4O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwIkmj%2BN5McJDU%2Fpri%2BLIVgihbQwFCrHX4bRRH%2B4d9RAiBzt3W%2FZp3HyjgDIb2bCKCKeb0HprbKYwaC9%2B0XSa0iaSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM4v9UjrfRBhJ%2BGBkFKtwDjdT%2FNrYdrZZ6avfmLOuZjWGWlkRnBfo%2BduAKFgQzn7QjygSCp1Ll9EyGQ3x6mVmkYvwmqTmm3SZ1lO6qlHLKw0alxBDT5D%2FA3NDaHgB41pTcOj9HvZAlcEWpfOzxT9jMh6Ui4D7E8xUFybRSnYHzogJh2KPsIXK3GjzwpN4RFtOXIItBm6axw6q3Ch%2FyaDtJmQ5pIuq24xnnV3gB%2FkBMdqdAy9n0s3Dkis1Nu%2FzcIXq0Zq%2BwWq1523R7eI61Fz44NxME2GIsTTwOqAbJK0d39r0wQHobOTkdzndukbWOIOmvmgywU7G5KzGhwvhbZozRiXPSaaZqNBJezvl1xCB1yihsiSKkfrAuJDhs%2BLskEVIqheE2DSdUhuoARObBIzL6SouQ%2FSgdMqgFPGKHgVA5Lln8C%2Bt4W17IBpt7TBC%2FnHzu3GWgCyruQgTHptSkdz8N48bJjY5%2BsjJ2fusTPbR3Gus%2B6tMKAF2ioQoNcmiWSrp0oQvEPPi7QCc893k2bMF7pVe88XIP91taNO9Lwg8ERISZWkUvRTLmlijLNp3Wr5eazqlK%2BMreIvh%2Fs%2F%2FxFlIjP%2BQ%2BDp81SA%2B68aUMWtaHKqEvtv9%2FxfWKEbrPL0BItACpS%2F2QyvwZAad0cL4w7OPiwAY6pgEfZ8LYxViKZO0Kucg190MIVaGmIdJEn%2F7hIpHqTeok28wH0P0B6BCV0HijrPA1B96YyDtQphkn7NOks5FFCJssE4qFmyOWISKu7RlwqT6mU5u4EG%2FQAxfnyORqThspEM52HSjA86sYeD0PyN9VlrcMSQvz3np%2BQzyOFUcQfWcplmih9BSjFDbQ2zBuE6TR7DhJWBOEzsiJt7ynw3M3oMcD%2FuEP41ed&X-Amz-Signature=fb93eeb3ab4f4aaa7c7bfbcd2f68ae7b7587ed8bbd51c8f882ec876051433b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPTHF4O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwIkmj%2BN5McJDU%2Fpri%2BLIVgihbQwFCrHX4bRRH%2B4d9RAiBzt3W%2FZp3HyjgDIb2bCKCKeb0HprbKYwaC9%2B0XSa0iaSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM4v9UjrfRBhJ%2BGBkFKtwDjdT%2FNrYdrZZ6avfmLOuZjWGWlkRnBfo%2BduAKFgQzn7QjygSCp1Ll9EyGQ3x6mVmkYvwmqTmm3SZ1lO6qlHLKw0alxBDT5D%2FA3NDaHgB41pTcOj9HvZAlcEWpfOzxT9jMh6Ui4D7E8xUFybRSnYHzogJh2KPsIXK3GjzwpN4RFtOXIItBm6axw6q3Ch%2FyaDtJmQ5pIuq24xnnV3gB%2FkBMdqdAy9n0s3Dkis1Nu%2FzcIXq0Zq%2BwWq1523R7eI61Fz44NxME2GIsTTwOqAbJK0d39r0wQHobOTkdzndukbWOIOmvmgywU7G5KzGhwvhbZozRiXPSaaZqNBJezvl1xCB1yihsiSKkfrAuJDhs%2BLskEVIqheE2DSdUhuoARObBIzL6SouQ%2FSgdMqgFPGKHgVA5Lln8C%2Bt4W17IBpt7TBC%2FnHzu3GWgCyruQgTHptSkdz8N48bJjY5%2BsjJ2fusTPbR3Gus%2B6tMKAF2ioQoNcmiWSrp0oQvEPPi7QCc893k2bMF7pVe88XIP91taNO9Lwg8ERISZWkUvRTLmlijLNp3Wr5eazqlK%2BMreIvh%2Fs%2F%2FxFlIjP%2BQ%2BDp81SA%2B68aUMWtaHKqEvtv9%2FxfWKEbrPL0BItACpS%2F2QyvwZAad0cL4w7OPiwAY6pgEfZ8LYxViKZO0Kucg190MIVaGmIdJEn%2F7hIpHqTeok28wH0P0B6BCV0HijrPA1B96YyDtQphkn7NOks5FFCJssE4qFmyOWISKu7RlwqT6mU5u4EG%2FQAxfnyORqThspEM52HSjA86sYeD0PyN9VlrcMSQvz3np%2BQzyOFUcQfWcplmih9BSjFDbQ2zBuE6TR7DhJWBOEzsiJt7ynw3M3oMcD%2FuEP41ed&X-Amz-Signature=bfe9ca2d08b8685ae1c86da832655c7cc72513591d2d1e3f3097ad0f7cd395c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
