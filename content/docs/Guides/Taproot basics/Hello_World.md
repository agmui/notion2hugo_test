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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNP5YCY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6%2FWzUAaG6L3B20sbQSqIQbW2O13jTjy3KtH6wDLM50AiEA2zKYjuFN9AF%2BGwg3MXZB7g0p3Me%2F9%2FwXfv1of1RUK%2Boq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMI9pDRS2HRgJzCAJSrcA2KK1OXF9ttGnGteoyL48uKMqhiBkW%2BGUDRCVa0%2F5eesf%2B5kJZd2hVq2WWtgG7XIMZ0SMvV0LDgdvqhebYXaf4LkRLMcevIn5ytOWIWjgcE4JfqQqMI6HvuAzWeuA784Wn7FtBROASiM%2FKqVD2n5AQzb006hDHbcqZ1YKrqWZn98dsRloNDDqqkNUtR2hwnYkj%2BcZiGONfJ0KXc4eiNvfm19CFV0pxka1gXw0e5dA4NR8JJgfMvwplJlyyioyUwc%2BFHBjRej%2B%2BE08Pqvjq0WIef30735d8CPnkgOjZE4zlXqBidLlQpiBFJCaJBWu6Qu0wC7a%2FFeieAyhrjGgajTGRqlxmz%2F0mUWL3hAzUEJtJmjQmVR4weULO7V%2FjRGiA9iAiwqZedgeALA0uox2HOJsVZ1wO5wkNojcNpx96YDboiyaJvRjvRd0Lfrkgh9yzDF0JXwysFLxd7ZAlghFRFrxQBlw3KF0%2FNG4izHkNuZ8yw06BAxzdK1%2FzgQnK5O%2FlhQgXnnh5%2B6KgnDdVG6ObWguCnF2gK%2B6ioro96me%2FlxltBgfViFooJonmC%2BCTvtkK%2FEoV7Hn%2F1AB76hEuWMEx%2FAQKvsP8D%2Bws4Jl8QvURMgETFGQyRYl6611tQKw7xbMImS68AGOqUB5W8zbIIJLToBroZ%2F9Vu%2BsIJlqLTB2nBMQINp%2FVW0NA3%2BT1r7EafogykDSPML8yV8TaBMgp61cpjSRl2gf9%2F%2B25HqzM4lfDK2Hfp31LezZ0dO5WVrXdMRdLcnsGIeKvlwLuBAU8IqleL8NVb5nM5TD4x8%2BCs7cPuNriM2sEgZJQ7gmxICxzJ2CxxiMTZ%2FHVPfOt4TVljLbZ6fFz%2BpjUh11nIHD%2Brk&X-Amz-Signature=219d2237d226b187d7a3ad950ad8a985dfb98b5dfdd88a888c1d714f2ffd070e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNP5YCY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6%2FWzUAaG6L3B20sbQSqIQbW2O13jTjy3KtH6wDLM50AiEA2zKYjuFN9AF%2BGwg3MXZB7g0p3Me%2F9%2FwXfv1of1RUK%2Boq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMI9pDRS2HRgJzCAJSrcA2KK1OXF9ttGnGteoyL48uKMqhiBkW%2BGUDRCVa0%2F5eesf%2B5kJZd2hVq2WWtgG7XIMZ0SMvV0LDgdvqhebYXaf4LkRLMcevIn5ytOWIWjgcE4JfqQqMI6HvuAzWeuA784Wn7FtBROASiM%2FKqVD2n5AQzb006hDHbcqZ1YKrqWZn98dsRloNDDqqkNUtR2hwnYkj%2BcZiGONfJ0KXc4eiNvfm19CFV0pxka1gXw0e5dA4NR8JJgfMvwplJlyyioyUwc%2BFHBjRej%2B%2BE08Pqvjq0WIef30735d8CPnkgOjZE4zlXqBidLlQpiBFJCaJBWu6Qu0wC7a%2FFeieAyhrjGgajTGRqlxmz%2F0mUWL3hAzUEJtJmjQmVR4weULO7V%2FjRGiA9iAiwqZedgeALA0uox2HOJsVZ1wO5wkNojcNpx96YDboiyaJvRjvRd0Lfrkgh9yzDF0JXwysFLxd7ZAlghFRFrxQBlw3KF0%2FNG4izHkNuZ8yw06BAxzdK1%2FzgQnK5O%2FlhQgXnnh5%2B6KgnDdVG6ObWguCnF2gK%2B6ioro96me%2FlxltBgfViFooJonmC%2BCTvtkK%2FEoV7Hn%2F1AB76hEuWMEx%2FAQKvsP8D%2Bws4Jl8QvURMgETFGQyRYl6611tQKw7xbMImS68AGOqUB5W8zbIIJLToBroZ%2F9Vu%2BsIJlqLTB2nBMQINp%2FVW0NA3%2BT1r7EafogykDSPML8yV8TaBMgp61cpjSRl2gf9%2F%2B25HqzM4lfDK2Hfp31LezZ0dO5WVrXdMRdLcnsGIeKvlwLuBAU8IqleL8NVb5nM5TD4x8%2BCs7cPuNriM2sEgZJQ7gmxICxzJ2CxxiMTZ%2FHVPfOt4TVljLbZ6fFz%2BpjUh11nIHD%2Brk&X-Amz-Signature=6273ce4b138c8d8f05c582cfb85727d5beef060830b7def3fe94b62dfb0be32c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
