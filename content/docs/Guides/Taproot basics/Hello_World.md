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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5M2QM2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbax6LSRAuu2YItf1ZJDnxcEFbt3gHZe%2FePhgkRk88ZwIgRPqJ9oaypcDbLGQIi6OOrfn0ITRVqgUuSyjusyFafvAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAesa7i62awQm3KNSrcA1kSDl4rWgp5SbDMhONqF8J9z9%2Fh2%2F1xSYhUtt8JIB9nsQqBU1ZyfG%2BFEZO4gkjKuvA2tKELZ6ozxw%2FYTLIRSYYpS5fx9RpwR21F9IScdzjkt%2FX5dB225AfP3RZpP2hdSKGs108zLfOB7Vuegsp3sQRKoEQWCOlxWU%2B5uQJw6ZfD5gjWne2Qws%2B8BuBOarlfs%2BbnjEpTn1Rf8iBzqotaIi%2BK8%2Fe68cYqAQ2vdFVeQNSt7qFVhHZcNMLK4C862mp5f%2BNnjmZq5emV8goV11mq%2Fk%2BK4oEmjONBpYIghKlVT24mAePxdRPxAMGDmHhKbtcFMLHUktdrQwHvm5FpVahrOhIwVCqghQlCyevGZZpmIR45XDmxq8TBtr3FsRNju255p4wtCAv%2BsDta6Cl1mw1RitXD6iWnap0TejQyKy1c%2BbKGcVzrELnXjvMK58UjWIUtp%2BFa61Lkl2AwkzWIwRCXnoF%2BJpMYmATZXpDq9tOqPQV%2FEZTRqK6ruEu%2BxBNrWn%2F1zDjW9ZbAUa%2FiLhSiCQWAB1uvJgDi5V%2BZ%2F%2F%2BIgZ6fYTghP93ZXte%2FRXL4%2BQELcgMCQgQP9wmufU45U1qWmA1IZ8pIKdNKoyGOXEOJYezznK0q4xDEp7N2n5xiacAfMOPbrsQGOqUB8QYnNNC9TDlVejdO2m9bgeau0F8YamT87ezmr0Uh%2Bx8%2BvSbKONR%2B7n%2Fi9GF6fDTE3wib2pdZOjWAb1%2FG8MGTCeW1Jnitld3XVQN%2BUGRKLw23kBE48aR3fD4OTd26tcVAKQ2mP7yn8Gn3v8%2B4a5xCXqpgy667CJIPUGaQozQ4GVMqTDGC7QNsK76JASlFFAFD90KixoIAV9e7zOF0Sac70v%2FylK94&X-Amz-Signature=e150aa7a6ab25f9e4cad10f117125bf41d206fe5f502cbf939441953446ba4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5M2QM2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbax6LSRAuu2YItf1ZJDnxcEFbt3gHZe%2FePhgkRk88ZwIgRPqJ9oaypcDbLGQIi6OOrfn0ITRVqgUuSyjusyFafvAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAesa7i62awQm3KNSrcA1kSDl4rWgp5SbDMhONqF8J9z9%2Fh2%2F1xSYhUtt8JIB9nsQqBU1ZyfG%2BFEZO4gkjKuvA2tKELZ6ozxw%2FYTLIRSYYpS5fx9RpwR21F9IScdzjkt%2FX5dB225AfP3RZpP2hdSKGs108zLfOB7Vuegsp3sQRKoEQWCOlxWU%2B5uQJw6ZfD5gjWne2Qws%2B8BuBOarlfs%2BbnjEpTn1Rf8iBzqotaIi%2BK8%2Fe68cYqAQ2vdFVeQNSt7qFVhHZcNMLK4C862mp5f%2BNnjmZq5emV8goV11mq%2Fk%2BK4oEmjONBpYIghKlVT24mAePxdRPxAMGDmHhKbtcFMLHUktdrQwHvm5FpVahrOhIwVCqghQlCyevGZZpmIR45XDmxq8TBtr3FsRNju255p4wtCAv%2BsDta6Cl1mw1RitXD6iWnap0TejQyKy1c%2BbKGcVzrELnXjvMK58UjWIUtp%2BFa61Lkl2AwkzWIwRCXnoF%2BJpMYmATZXpDq9tOqPQV%2FEZTRqK6ruEu%2BxBNrWn%2F1zDjW9ZbAUa%2FiLhSiCQWAB1uvJgDi5V%2BZ%2F%2F%2BIgZ6fYTghP93ZXte%2FRXL4%2BQELcgMCQgQP9wmufU45U1qWmA1IZ8pIKdNKoyGOXEOJYezznK0q4xDEp7N2n5xiacAfMOPbrsQGOqUB8QYnNNC9TDlVejdO2m9bgeau0F8YamT87ezmr0Uh%2Bx8%2BvSbKONR%2B7n%2Fi9GF6fDTE3wib2pdZOjWAb1%2FG8MGTCeW1Jnitld3XVQN%2BUGRKLw23kBE48aR3fD4OTd26tcVAKQ2mP7yn8Gn3v8%2B4a5xCXqpgy667CJIPUGaQozQ4GVMqTDGC7QNsK76JASlFFAFD90KixoIAV9e7zOF0Sac70v%2FylK94&X-Amz-Signature=4fa55f72df55bb4e515d4b18e83c38f04ca8082afc05038d8784317ed4e586a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
