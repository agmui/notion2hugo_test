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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NTAP6M%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX99svyzejBKV4GlYNvqmiRTm2aqrDO8piOqjFYayp2AiBhkVJrL%2Fn8DUrCkgN%2FV7BRgTPf8N4QjMxg26Dk1WwHdyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZtXyLQ4FpGzhBw7aKtwDKU1mMbNmtQEavMBttN5LDW7SnYL61sbBNQpa3u%2FNmyiBVoClj9CzmMS6WT5Q1WIrfN0vSc7fKj1MeCiMY%2Fbuzmpyvf1qHg5HEu4viKpa8oV%2FHhRx0W1zv42%2BJ%2FURnBB%2Fn5%2FmnuePOFlRXameIhwT8rEBUS8AlF9EzV7b3bX8WKaR8qIATjOuD0tud2SNFJeTM8oA7Eovt4ZAKnXY%2BM6f6PKV5pOFFhVcvqSDDDcOUnfelrECQuOE8oIoXcrYGoYZ3bjBxAFg1IbPGdVvujqIx3TEUmdXpLRql49PJlft85Fyfs9TLZEONiFelCnTiC4y%2ByZhCM%2BO2Q3%2F6Tl5yQgN4FtPtoeW%2FaNIv59iOGG%2F4iKx122sZO3Hpi8WbeprIb5QplLAlWs8Y2evAruHXZNJVTW41iQTa0C%2F4QuuodKsZCXuQe7Z%2FMZRUNzp9%2BeDKjj%2BrT0ejkaENspZ8I6GmRUUZ7UE4ZaGttaXeRrH0I9Flqs7EYmojGXZq29UBh71Ot8CcCuq3AXYzPzq6KKD5SeTsGBxzniW0RIYmtVRQgQUPiYJNC0SS5WZzhrW3APGAvoKFNdGg7P7VuO8HUzzvMmbmFgsq6Xv4HIjtwxC%2Fn4s5OhC%2BxlDdhlGxY3WBN8wz82JwwY6pgGKksnCXGSBZtUVDCN2uDeGDCCuEhi5V0z8odTFXiGTJScmNlh%2Bc5DE9HloRnAqTMiEK99uyisdImpzONW2W64mqUmxzZbPbFP5yFg0dY1Ax9MlgtC8ktICiku5sXF0dLkO5tPWIzafcmXgM1%2BqWX7P20ynZs3W6jwRq3UlEUgi4%2Buct64u0lfpi%2BaZVwNRbqI6MMyOGh0FQXFlyenH4SswWcMNJ3vz&X-Amz-Signature=093e5d59c368f133e2ea049fd2fa5d84db0c7a869ec6497a7ab971bd3342d014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NTAP6M%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX99svyzejBKV4GlYNvqmiRTm2aqrDO8piOqjFYayp2AiBhkVJrL%2Fn8DUrCkgN%2FV7BRgTPf8N4QjMxg26Dk1WwHdyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZtXyLQ4FpGzhBw7aKtwDKU1mMbNmtQEavMBttN5LDW7SnYL61sbBNQpa3u%2FNmyiBVoClj9CzmMS6WT5Q1WIrfN0vSc7fKj1MeCiMY%2Fbuzmpyvf1qHg5HEu4viKpa8oV%2FHhRx0W1zv42%2BJ%2FURnBB%2Fn5%2FmnuePOFlRXameIhwT8rEBUS8AlF9EzV7b3bX8WKaR8qIATjOuD0tud2SNFJeTM8oA7Eovt4ZAKnXY%2BM6f6PKV5pOFFhVcvqSDDDcOUnfelrECQuOE8oIoXcrYGoYZ3bjBxAFg1IbPGdVvujqIx3TEUmdXpLRql49PJlft85Fyfs9TLZEONiFelCnTiC4y%2ByZhCM%2BO2Q3%2F6Tl5yQgN4FtPtoeW%2FaNIv59iOGG%2F4iKx122sZO3Hpi8WbeprIb5QplLAlWs8Y2evAruHXZNJVTW41iQTa0C%2F4QuuodKsZCXuQe7Z%2FMZRUNzp9%2BeDKjj%2BrT0ejkaENspZ8I6GmRUUZ7UE4ZaGttaXeRrH0I9Flqs7EYmojGXZq29UBh71Ot8CcCuq3AXYzPzq6KKD5SeTsGBxzniW0RIYmtVRQgQUPiYJNC0SS5WZzhrW3APGAvoKFNdGg7P7VuO8HUzzvMmbmFgsq6Xv4HIjtwxC%2Fn4s5OhC%2BxlDdhlGxY3WBN8wz82JwwY6pgGKksnCXGSBZtUVDCN2uDeGDCCuEhi5V0z8odTFXiGTJScmNlh%2Bc5DE9HloRnAqTMiEK99uyisdImpzONW2W64mqUmxzZbPbFP5yFg0dY1Ax9MlgtC8ktICiku5sXF0dLkO5tPWIzafcmXgM1%2BqWX7P20ynZs3W6jwRq3UlEUgi4%2Buct64u0lfpi%2BaZVwNRbqI6MMyOGh0FQXFlyenH4SswWcMNJ3vz&X-Amz-Signature=d7b0d4128eb785722e5c2e82541e562816d0c7d9a4dea10bb6e54e2ebd947362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
