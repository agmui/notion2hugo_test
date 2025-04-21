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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW2MB3DC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBuDuCEFc7LqMZE8pPoD0ky1lZhN1xFJH8kC6H4vIudBAiBLkNCmmiUuFE6ojOJV%2BNB5cjbHjCa%2Fetp9T9gB25rbzyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGrp8YG6Z6I47UUsKtwDrhuRlE0J2HQ7LDUvYO2x1UzpQWkGBxMSKaqAPbBlUSEQJKZ%2B6JZv4yuSWhGM1JVUqbsM3SVprV4eyCRfaiiZvcdoZdOWbjM4xaUteUopB65w68fqdmXHf4uAEyuFfcZsqHJMgBsQgLGv5NHBJbIamrHuKTnwRFQtvjVaRyNMM49ZtaIuCjEvukgE%2BIKI8ANK2L8ruMJSOsXpIJqBziwlzwR5i0tDdu3e95UP%2F8G0F%2BT%2FUB%2BimtsYsHeD6elfTIBJrLrJed7CJCwUQeVxD4C46%2FbO37ARu78wISFK%2FZn9Vl5LrF%2BIjtFnhGHsGZ%2BtZjmi73L6rcvWnoQ0JoGDNOrZJAIy5F2gHk0s7%2FmXJbjNLnpYlgCk4ow9PNi8BduyeHKW6Y6jPAX5oDtzBc2OXbEfAcgxmglQHjD%2BBkOlm%2F4NsNqicxcKhtinm5J2dUP7Bhq48fesL6u5aQvGOoGHQ4CKeWTXYPe%2F4OcJ8bFkwywYM9PVqGbBRf%2BMvvtiR%2BaQaUgYMQdVoe42y7lFCKSsjcTx%2FdQJz2EDOYuvngJsOa%2BLdxAkpTXQk5mMxVBRx2oaaq9qLn%2FqDX%2FIUE4mhhOI0GhAINgTCuMzJidNG8fXTVMxWtl0iKiAvjPGstJOm2Ew0ruYwAY6pgG%2Bf1H2iZS3GYnG7y8WvJ5fJ7%2BNB78h6iXTLuoborO4qKgi6BCMEw20A9W02XvyFdPL9auneu6Jkr9gv%2FqOCIsFVt1gikQIHZOtNfKI4nXRSJRWNfvdNvgIYZoTbURBTzJgqXtor%2FnkNJqy7PL01muuJ5mt9g1s53XcN3RCMQVUGZjWroGNU3gyGNk2GJCAFtVxzcAK7lAOeWxrojNlxGIXY%2FFNfvp5&X-Amz-Signature=1cede61b08dd39d845fcf38c4d823479dbc1c31947e9c3cd3696bd534e96ae16&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW2MB3DC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBuDuCEFc7LqMZE8pPoD0ky1lZhN1xFJH8kC6H4vIudBAiBLkNCmmiUuFE6ojOJV%2BNB5cjbHjCa%2Fetp9T9gB25rbzyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGrp8YG6Z6I47UUsKtwDrhuRlE0J2HQ7LDUvYO2x1UzpQWkGBxMSKaqAPbBlUSEQJKZ%2B6JZv4yuSWhGM1JVUqbsM3SVprV4eyCRfaiiZvcdoZdOWbjM4xaUteUopB65w68fqdmXHf4uAEyuFfcZsqHJMgBsQgLGv5NHBJbIamrHuKTnwRFQtvjVaRyNMM49ZtaIuCjEvukgE%2BIKI8ANK2L8ruMJSOsXpIJqBziwlzwR5i0tDdu3e95UP%2F8G0F%2BT%2FUB%2BimtsYsHeD6elfTIBJrLrJed7CJCwUQeVxD4C46%2FbO37ARu78wISFK%2FZn9Vl5LrF%2BIjtFnhGHsGZ%2BtZjmi73L6rcvWnoQ0JoGDNOrZJAIy5F2gHk0s7%2FmXJbjNLnpYlgCk4ow9PNi8BduyeHKW6Y6jPAX5oDtzBc2OXbEfAcgxmglQHjD%2BBkOlm%2F4NsNqicxcKhtinm5J2dUP7Bhq48fesL6u5aQvGOoGHQ4CKeWTXYPe%2F4OcJ8bFkwywYM9PVqGbBRf%2BMvvtiR%2BaQaUgYMQdVoe42y7lFCKSsjcTx%2FdQJz2EDOYuvngJsOa%2BLdxAkpTXQk5mMxVBRx2oaaq9qLn%2FqDX%2FIUE4mhhOI0GhAINgTCuMzJidNG8fXTVMxWtl0iKiAvjPGstJOm2Ew0ruYwAY6pgG%2Bf1H2iZS3GYnG7y8WvJ5fJ7%2BNB78h6iXTLuoborO4qKgi6BCMEw20A9W02XvyFdPL9auneu6Jkr9gv%2FqOCIsFVt1gikQIHZOtNfKI4nXRSJRWNfvdNvgIYZoTbURBTzJgqXtor%2FnkNJqy7PL01muuJ5mt9g1s53XcN3RCMQVUGZjWroGNU3gyGNk2GJCAFtVxzcAK7lAOeWxrojNlxGIXY%2FFNfvp5&X-Amz-Signature=6c1f8614728ab7b4192ef0f162218f72c70064f967c982639a4d3ff70747d7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
