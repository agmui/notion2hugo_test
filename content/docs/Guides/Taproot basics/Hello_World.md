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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJEZS3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICxBbQ3VjNnmCEj7EV285UbmqtIHee3rUuowj8sgGnWwAiAU5mww%2B8ER0cuxL3iOlT8PvAW6zmnwPkZJ85UJylslrCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMumsT06r0OatlPGMZKtwDYfXa%2FjGOh3JKas%2Fa3UY1gBrjwi4pWETJD8V%2BpQ8leCXbB5ZiIE87tHyEWfdVpeIxcS1xwc5EILRs6Hx30z7I2XFHeB%2B%2Bf6qAbIRF5rJ9%2B1Ky7NKxSL3yDMA68FL5p%2FylUz%2BAD4AmDKfCzPvWyXnP4sJOma9yVE1fw9U84cAWyET6gncTT2KpU7Hb5n9x8bVsLUa30BEZ55HCkQy3t9ueJYQvXzebMZzNSfcYWtvNH%2B9i%2BqleTRuYVSq3EMTZtrytyFcREdvmDTgtSBbMl7NATPP3n5TvM8puRQDFnq9y2QxmobStlj4Qy1wWIx7dcJMweJbunv27e3wuL4FarBJFQGSXCcUGpYEThE%2BMJH%2BDbzRGuyu5IJnh4swfaL82a9I%2BD4nQpDqRPLVYkvVCT0cfsWsuCUsHU5%2FKVMX9v7%2BQUE7lBzqnZBqKJPqy7aZOeCDUWIPy3WyM5Xb8ITPG%2FvukS0NOdACj3kruBSlboluwZaQYNiMDEyRVXQQB%2B%2BtrmcnlsxCCxzp9KJkUHGnn54A6nwDAlh8Q%2F1xA84iOvp%2FdsXHdL%2Bn5rZUyQrXK0NXWwoqvI2eB6UoHpy5UWg%2Ba7wZELm6ceb8RO4VPG%2BgRgbNnk%2F%2Bqt0XFeJDfmiWU6aUwpKfvwgY6pgGGDhA3v3SRnloazF%2FTH0Pa1BO3%2FukZSdGp0DO48mHXUAKK2mtLSYV19f5qTibdug8OvtI6jFYByNdQFB4zx8vlaH3fCRVezR%2B2A0P8e%2FFvh24n79MhMroXZQwBdfVrhHEuniqVAiiHVKTdfFpBk7qDSaiXBZPQmY5jVAQuVf%2F8eqv1lGyvaY5jVXoITtYLN5JWPPEXfhQ7kq7F%2FEt%2B%2FLj4JrhymNK6&X-Amz-Signature=40f47d7c33a3e83dba6e75d521889a7c503ee6023193280b364d81c97b315d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJEZS3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICxBbQ3VjNnmCEj7EV285UbmqtIHee3rUuowj8sgGnWwAiAU5mww%2B8ER0cuxL3iOlT8PvAW6zmnwPkZJ85UJylslrCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMumsT06r0OatlPGMZKtwDYfXa%2FjGOh3JKas%2Fa3UY1gBrjwi4pWETJD8V%2BpQ8leCXbB5ZiIE87tHyEWfdVpeIxcS1xwc5EILRs6Hx30z7I2XFHeB%2B%2Bf6qAbIRF5rJ9%2B1Ky7NKxSL3yDMA68FL5p%2FylUz%2BAD4AmDKfCzPvWyXnP4sJOma9yVE1fw9U84cAWyET6gncTT2KpU7Hb5n9x8bVsLUa30BEZ55HCkQy3t9ueJYQvXzebMZzNSfcYWtvNH%2B9i%2BqleTRuYVSq3EMTZtrytyFcREdvmDTgtSBbMl7NATPP3n5TvM8puRQDFnq9y2QxmobStlj4Qy1wWIx7dcJMweJbunv27e3wuL4FarBJFQGSXCcUGpYEThE%2BMJH%2BDbzRGuyu5IJnh4swfaL82a9I%2BD4nQpDqRPLVYkvVCT0cfsWsuCUsHU5%2FKVMX9v7%2BQUE7lBzqnZBqKJPqy7aZOeCDUWIPy3WyM5Xb8ITPG%2FvukS0NOdACj3kruBSlboluwZaQYNiMDEyRVXQQB%2B%2BtrmcnlsxCCxzp9KJkUHGnn54A6nwDAlh8Q%2F1xA84iOvp%2FdsXHdL%2Bn5rZUyQrXK0NXWwoqvI2eB6UoHpy5UWg%2Ba7wZELm6ceb8RO4VPG%2BgRgbNnk%2F%2Bqt0XFeJDfmiWU6aUwpKfvwgY6pgGGDhA3v3SRnloazF%2FTH0Pa1BO3%2FukZSdGp0DO48mHXUAKK2mtLSYV19f5qTibdug8OvtI6jFYByNdQFB4zx8vlaH3fCRVezR%2B2A0P8e%2FFvh24n79MhMroXZQwBdfVrhHEuniqVAiiHVKTdfFpBk7qDSaiXBZPQmY5jVAQuVf%2F8eqv1lGyvaY5jVXoITtYLN5JWPPEXfhQ7kq7F%2FEt%2B%2FLj4JrhymNK6&X-Amz-Signature=65c49417e1ffb4913a3c72ac50e4151d7941062ea58d2b866b2c3da98e16328b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
