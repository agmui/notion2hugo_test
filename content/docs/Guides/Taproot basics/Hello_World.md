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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXVHHG5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUhWPqhc%2FOGx29SzhLTpqCbPgGRyXIUFEOiBt6cXvJTAiAzQ%2BeeEFkbzMG%2BchrB6V6jNM4w560RyBvJKR6FEDuOLir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMi6aK49a6EMk4e1o7KtwDxCCqApvuENIJ8ZE319XDCXYd9v8oQ9Lc6ukRCAU7wPajqXWcq5215GWsAqp4YE25hrI0c96V5juAw6Hnvp62xwCgb1ueBEv%2BQTsjpeFaXZgctyTurd8J2O9qpONauS3q%2FJQGYNoQUKQAugUF43dyd0g7npkcIXlQix2lrGMwZTayhYSTz8rW%2FI79Li3naGZe9xaFWXOOThQdnCaEB5yXOiFoMd0qhtFBNvM%2FNHeeGs9xihzwKsoyMawa7%2BVPHA%2BaISLnelntXF90JT4lMZke2yE5XT9lXtki8kEzrnpT00TqefXhZhfEdYFvPwXTegjwolmmh4OfuM9rlJlqKTwCnN3aNG0bjBocZ5fEVN3MQkUvzyHamGnzXz9A%2F21pLX3F8j8GfXj1gUOyh84iq7ClIaqu4E121hO%2B%2FL8nMTamnyVHV%2FT7yoLSqCMkaC0VoCjayIH5TBiIYBnTlKDzSm%2BRwyZK3nHsHZhchYmGfLhjkWuP2ayR%2BthP%2F29%2BWr%2F5xbbqilEdz7RFHzfJfS3AG8Y4SnkpLGnkAxXsRMJkbPecLNzvzks3%2BF4MZ9hxdhmMw7LMrPQEW%2BWt50FKiiQcsaVx9Lu%2BoeEywe4xgyEn5ZO5teRNUiBvB1ArbdW1JokwrsSiwQY6pgEllIcyMCmO5wVLn8lYElsxzAS5VW6laRskqNY03RJiTrCMC%2FOGSRvMplsAKjc1%2B%2Fbme7%2F8erI46p%2FQ54UhmQHvLDTEYlqvANDK4kiL6C7RcSeEfrci62QZ3sW2%2FshvUn65e4ZdUYTUZoY9rT5lJ3G43dbLpZU%2FznLVJznyCXJzkIcOsxrJksdonL2Ow6VqPBuPhVyW8kXcfLyqgJNLxcOD0VsW7XQ%2B&X-Amz-Signature=2802fd69b4c7c8d009549d937fd697cc4db2e43d8ad8ee20cde62ffa780bb633&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXVHHG5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUhWPqhc%2FOGx29SzhLTpqCbPgGRyXIUFEOiBt6cXvJTAiAzQ%2BeeEFkbzMG%2BchrB6V6jNM4w560RyBvJKR6FEDuOLir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMi6aK49a6EMk4e1o7KtwDxCCqApvuENIJ8ZE319XDCXYd9v8oQ9Lc6ukRCAU7wPajqXWcq5215GWsAqp4YE25hrI0c96V5juAw6Hnvp62xwCgb1ueBEv%2BQTsjpeFaXZgctyTurd8J2O9qpONauS3q%2FJQGYNoQUKQAugUF43dyd0g7npkcIXlQix2lrGMwZTayhYSTz8rW%2FI79Li3naGZe9xaFWXOOThQdnCaEB5yXOiFoMd0qhtFBNvM%2FNHeeGs9xihzwKsoyMawa7%2BVPHA%2BaISLnelntXF90JT4lMZke2yE5XT9lXtki8kEzrnpT00TqefXhZhfEdYFvPwXTegjwolmmh4OfuM9rlJlqKTwCnN3aNG0bjBocZ5fEVN3MQkUvzyHamGnzXz9A%2F21pLX3F8j8GfXj1gUOyh84iq7ClIaqu4E121hO%2B%2FL8nMTamnyVHV%2FT7yoLSqCMkaC0VoCjayIH5TBiIYBnTlKDzSm%2BRwyZK3nHsHZhchYmGfLhjkWuP2ayR%2BthP%2F29%2BWr%2F5xbbqilEdz7RFHzfJfS3AG8Y4SnkpLGnkAxXsRMJkbPecLNzvzks3%2BF4MZ9hxdhmMw7LMrPQEW%2BWt50FKiiQcsaVx9Lu%2BoeEywe4xgyEn5ZO5teRNUiBvB1ArbdW1JokwrsSiwQY6pgEllIcyMCmO5wVLn8lYElsxzAS5VW6laRskqNY03RJiTrCMC%2FOGSRvMplsAKjc1%2B%2Fbme7%2F8erI46p%2FQ54UhmQHvLDTEYlqvANDK4kiL6C7RcSeEfrci62QZ3sW2%2FshvUn65e4ZdUYTUZoY9rT5lJ3G43dbLpZU%2FznLVJznyCXJzkIcOsxrJksdonL2Ow6VqPBuPhVyW8kXcfLyqgJNLxcOD0VsW7XQ%2B&X-Amz-Signature=dec3726bf62b61f50e74adb4b54b1849f37a7658b375d109651c68aa7fb925b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
