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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4CZNIF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDBDkr7dXk4KetyS%2BCVkTZSGwyydl21zjxdlbO1aXdAkwIgSZApAty1m9oURYK320p19U7zhQl9c0bWWRnsi%2Bghc%2Fwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNsApz5bzc9aKdI8JircA7Xisei24PmvtyEz24Z5O7wPqZF%2B8%2BKJX50033Klw3a7cH5J5U8VPQEx%2BS98GwP7i3TG7qpG5nr8fH9qkc3%2BI0I3cwUSEtzhCmiPCyjouf9kYJrNJCLbjcCvUahwKEAsB7nV2bOZuon%2BkrKHcLQVj1%2F8rFLLXCGENgVPLQiXMUQcRb5U9WbofnBbkIoaLnFmY3rTSXEA7laaW5m48lcCbSifG9OuI7CLJYaetcCrouteeEL4xHmSz%2B1DWYBjQlxox9kU6gLlYJ49j98X5Qa8Ul%2F%2BU2biR%2B5facmSKkSVqepOronWyLLSeBK9oTFn1vVDa5Bvl6GcQHLZgPnMEzbU%2FcdigUSCgrepsLFNh8JDSPii70zCiwjyXeoAGbMXzgJyZTHN2Fm2%2B13b%2F4ddR%2BNTbXFSEwvb0BMbiS1OW81bNuMbbsd3dpKHOAqqETzsyN5bjEgmFqSiMAgdYRwdiSS3gKnwGVQ5vpPAbDsLnQfG0hMaIIkRXAD6pKytHNWim8dJoQLeoqnI6ijcb2hx%2FCQaZC74eM9pVWwVVad3dy0%2BCAGL1FlnfS2Zcxf70Zs4XVj64%2Fu1mX5gn3YxL4JMuFItSG%2FnV4PpdzHz8214IefiBF5ZZkheYNoH0XUbAkRZMPfZ2cMGOqUBA34pzByGl2wyHtgZFLgKihiVhf831XC3kXi05a2AHFVyumcr2rUhzxaRiM3GViItdWFLsEoY12niKn2fRhSWkIJ%2Bq5goWnOHYNXABF9xoltqRF6f9HUlAoZariXlwF2%2FhzSeC0pPhtQJ0P2eD5NxbVt2Z1ljl9geOCAzk%2B5OhqOJFmT9Fk%2FgrmYSdrWOw%2B%2FSOC3e8XSvZY34fpOuxPmg0cI0aQT9&X-Amz-Signature=05f6a59ecc86686a4ede2934437dda74bb3fdf5df800f93fd2a5f1d442190078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4CZNIF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDBDkr7dXk4KetyS%2BCVkTZSGwyydl21zjxdlbO1aXdAkwIgSZApAty1m9oURYK320p19U7zhQl9c0bWWRnsi%2Bghc%2Fwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNsApz5bzc9aKdI8JircA7Xisei24PmvtyEz24Z5O7wPqZF%2B8%2BKJX50033Klw3a7cH5J5U8VPQEx%2BS98GwP7i3TG7qpG5nr8fH9qkc3%2BI0I3cwUSEtzhCmiPCyjouf9kYJrNJCLbjcCvUahwKEAsB7nV2bOZuon%2BkrKHcLQVj1%2F8rFLLXCGENgVPLQiXMUQcRb5U9WbofnBbkIoaLnFmY3rTSXEA7laaW5m48lcCbSifG9OuI7CLJYaetcCrouteeEL4xHmSz%2B1DWYBjQlxox9kU6gLlYJ49j98X5Qa8Ul%2F%2BU2biR%2B5facmSKkSVqepOronWyLLSeBK9oTFn1vVDa5Bvl6GcQHLZgPnMEzbU%2FcdigUSCgrepsLFNh8JDSPii70zCiwjyXeoAGbMXzgJyZTHN2Fm2%2B13b%2F4ddR%2BNTbXFSEwvb0BMbiS1OW81bNuMbbsd3dpKHOAqqETzsyN5bjEgmFqSiMAgdYRwdiSS3gKnwGVQ5vpPAbDsLnQfG0hMaIIkRXAD6pKytHNWim8dJoQLeoqnI6ijcb2hx%2FCQaZC74eM9pVWwVVad3dy0%2BCAGL1FlnfS2Zcxf70Zs4XVj64%2Fu1mX5gn3YxL4JMuFItSG%2FnV4PpdzHz8214IefiBF5ZZkheYNoH0XUbAkRZMPfZ2cMGOqUBA34pzByGl2wyHtgZFLgKihiVhf831XC3kXi05a2AHFVyumcr2rUhzxaRiM3GViItdWFLsEoY12niKn2fRhSWkIJ%2Bq5goWnOHYNXABF9xoltqRF6f9HUlAoZariXlwF2%2FhzSeC0pPhtQJ0P2eD5NxbVt2Z1ljl9geOCAzk%2B5OhqOJFmT9Fk%2FgrmYSdrWOw%2B%2FSOC3e8XSvZY34fpOuxPmg0cI0aQT9&X-Amz-Signature=19df0b2d64e393c2d8a7cdaae1614d03ba7c3b888b21f2394752332ee92a2ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
