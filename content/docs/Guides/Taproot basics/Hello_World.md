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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTPMM4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD966%2FwAOIPTxljACFlc0MAxQytkW1QLbgbWoHQW8kEtQIhAJwEUjbDdAIjn7WK17S7OYtnqhrw2EkJTH4kzioJeWqUKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmRoh8%2Bu9Sl4lageIq3APjrhfkE1r53%2Be%2Bxk29C63C9EyUOXwNzoxHc7vrNU8LtUS3z5C%2FR6hVVVZ2v5ysIXqzn63wZLV4fZnoDpoUZ%2FkYmFpDA9ryZRejP70lf1Z6IawdI4IRJp4thqBiMA0DvfqAnrXrTDyNNIqt59bRyIMzlHMzdgb%2F0qC%2BW6PXFy9I8OtE9a4Uurg2BOtBiEt3ZxmZEqoLqVulJrk5PM7AQS0CuNhRidy0L0I56sHfBsg3nZ6XyhUOgmZxuEI804hpfN%2FsN9JwTY0HCtVfwBxiumYfR6aSiF5cGBZtvwlV79cLT7ssGo%2F9lv2ChE8PhVGDMddaIj3FDIUfV5rU6aRaMNtI2yWSU3Kz7%2Frw3arCkjo55qEyQqNujFkGyr2a9FjmCdSfNpGoZHU%2F7yqfxV1tBmw9nL99BAI1DvQ%2Byu6JZiuvr7cc25kpdt2XwFWe1exW%2BLuX37f%2BbFZRHa4bnJaVpYAWKMXJKSqimU4RvRsFo2AvuNuiOWSLEy59gI0VGnJwAXJ%2BRDnPxb3gM5KJy7mZT%2FAL%2BN6axl5o4fGm6L%2BzrkVrs%2B4a9FA1fuxvbmpTdN%2BoU8I70JV%2FPnme%2FcVE2q%2FNtQs39VE1W27AbLjUyXEbHE08xfz3Q7CBqtUI%2BbaT2zDxjcrCBjqkATMIVzi2vjFy86v%2B8Dm9n9TY7oQIiUhRK5FGou39QQs78ZlZFCQl7856dgqdh0fBvSyMM18aN9vB6NlYr8uZavEbhHWN3XZ945kTrDFiTqNDB%2BCURe2VH8%2F9kR15%2F7Ec4%2Bvcm074GFmtOU8bGYdy94EKqR6%2F5NAutKJnJ2DT4APW02mY5tI9VwAANDrBxkEx5meHEsJBQyx1PSF%2F8jH3NrYzY3s%2B&X-Amz-Signature=fb7461f70aac14a07478cc8410bcc1b576e1110afe349029e5812b05f8976f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTPMM4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD966%2FwAOIPTxljACFlc0MAxQytkW1QLbgbWoHQW8kEtQIhAJwEUjbDdAIjn7WK17S7OYtnqhrw2EkJTH4kzioJeWqUKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmRoh8%2Bu9Sl4lageIq3APjrhfkE1r53%2Be%2Bxk29C63C9EyUOXwNzoxHc7vrNU8LtUS3z5C%2FR6hVVVZ2v5ysIXqzn63wZLV4fZnoDpoUZ%2FkYmFpDA9ryZRejP70lf1Z6IawdI4IRJp4thqBiMA0DvfqAnrXrTDyNNIqt59bRyIMzlHMzdgb%2F0qC%2BW6PXFy9I8OtE9a4Uurg2BOtBiEt3ZxmZEqoLqVulJrk5PM7AQS0CuNhRidy0L0I56sHfBsg3nZ6XyhUOgmZxuEI804hpfN%2FsN9JwTY0HCtVfwBxiumYfR6aSiF5cGBZtvwlV79cLT7ssGo%2F9lv2ChE8PhVGDMddaIj3FDIUfV5rU6aRaMNtI2yWSU3Kz7%2Frw3arCkjo55qEyQqNujFkGyr2a9FjmCdSfNpGoZHU%2F7yqfxV1tBmw9nL99BAI1DvQ%2Byu6JZiuvr7cc25kpdt2XwFWe1exW%2BLuX37f%2BbFZRHa4bnJaVpYAWKMXJKSqimU4RvRsFo2AvuNuiOWSLEy59gI0VGnJwAXJ%2BRDnPxb3gM5KJy7mZT%2FAL%2BN6axl5o4fGm6L%2BzrkVrs%2B4a9FA1fuxvbmpTdN%2BoU8I70JV%2FPnme%2FcVE2q%2FNtQs39VE1W27AbLjUyXEbHE08xfz3Q7CBqtUI%2BbaT2zDxjcrCBjqkATMIVzi2vjFy86v%2B8Dm9n9TY7oQIiUhRK5FGou39QQs78ZlZFCQl7856dgqdh0fBvSyMM18aN9vB6NlYr8uZavEbhHWN3XZ945kTrDFiTqNDB%2BCURe2VH8%2F9kR15%2F7Ec4%2Bvcm074GFmtOU8bGYdy94EKqR6%2F5NAutKJnJ2DT4APW02mY5tI9VwAANDrBxkEx5meHEsJBQyx1PSF%2F8jH3NrYzY3s%2B&X-Amz-Signature=6eeb3c7cace81b2f39c8f01418902f9b5c482d56b1351bc889a62eba99c93203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
