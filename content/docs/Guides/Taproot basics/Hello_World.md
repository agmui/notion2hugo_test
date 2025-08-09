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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3SP4YUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxYn4yX7AfIZ0eBAY%2FKrM8pW3%2FlP4%2B6U%2BvKrN6i5mAyAiATy5cCgm9lhDDUEK55q9EHarqJloidtI67wTsLoRMxjyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQ%2FaDiVFjbNouxccKtwDXA08XPbJLNmOGn8OIo2yy0VymUxa%2BwyYHoXSUEoiWQU2gxaxIJmCtUpMwzoAgusvSMq%2BwGaY5g0HQ%2BSjPAksSRb4TgO4rgoum1tMLrBvh6B9HeAAU%2BPkjyIRJgjG2dZgiPo6%2F8W0ilMNu2GEghJ910F0M63p6dGUotClzmIxILPMrijePEF4vtWcnzAaEqwyJc8%2ByLHP2g9Nt72LUAQos8E8i0KuUwyuP6tr3RDroCKc%2Fr2j1UM3mPVkthX6N4WWQYiVaSQmZ93AjErDcJ%2F5YRo2zEMUoeTIM97zpR0aBMnXQ2GQX%2B%2BBsRC7mjrRmO64MkmUtE%2BEGaASm4x7SpzpTR969AUc%2BbQokpgA3RBqDlcNNgtHOjayzAvFgSSl%2BUweWwJQRWFH9OiEUmIXf2vKp6BSewTMTX78yWqy6GGBW2ePegevIGXeQ1IokEF7BRhjXIxAfEZmsdz7z7e4ZO9EDiXWY%2FA4hLDDDTcVwDn9%2BakLn%2FXRg99jaTky6wVpJrfDrtm8%2BDi%2F84zElau0OBv5SjE%2B%2BX0obDilgN9TsMYKD%2BPX%2BldJTs7Xx8NYGVTmXSnnpYlpjxgw9iCsVBg0DuNz1UBYABtfrE6vqRG%2Fn1cq%2FzKJV8gX1EbLhQvTtB0wvYvfxAY6pgG5TszIDwXWbb%2Bs4idt8CM%2BRqulGZdojm%2B8HjvImxRBcgGB7bI0I50Vjp%2FMg8bWsncq0glJOShoy2U9t1Xe70%2FHhmazqGZLXh%2FzaK7Y0L6wrMqHWu28dKS0nnURbHrQKJdWkREdCTyt7xJb7JbYebBlkVfoKS9DO%2FspGMvlkfUPeUuu0Qn03xiu2HCaizI%2FPotTwH0sm7%2B8OrvZ0WD04zBeht%2F6REiW&X-Amz-Signature=83cd246dd9fbbb53b40d83a89b854def0e8c12afaa364bb57899b08c8ed0cfa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3SP4YUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxYn4yX7AfIZ0eBAY%2FKrM8pW3%2FlP4%2B6U%2BvKrN6i5mAyAiATy5cCgm9lhDDUEK55q9EHarqJloidtI67wTsLoRMxjyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQ%2FaDiVFjbNouxccKtwDXA08XPbJLNmOGn8OIo2yy0VymUxa%2BwyYHoXSUEoiWQU2gxaxIJmCtUpMwzoAgusvSMq%2BwGaY5g0HQ%2BSjPAksSRb4TgO4rgoum1tMLrBvh6B9HeAAU%2BPkjyIRJgjG2dZgiPo6%2F8W0ilMNu2GEghJ910F0M63p6dGUotClzmIxILPMrijePEF4vtWcnzAaEqwyJc8%2ByLHP2g9Nt72LUAQos8E8i0KuUwyuP6tr3RDroCKc%2Fr2j1UM3mPVkthX6N4WWQYiVaSQmZ93AjErDcJ%2F5YRo2zEMUoeTIM97zpR0aBMnXQ2GQX%2B%2BBsRC7mjrRmO64MkmUtE%2BEGaASm4x7SpzpTR969AUc%2BbQokpgA3RBqDlcNNgtHOjayzAvFgSSl%2BUweWwJQRWFH9OiEUmIXf2vKp6BSewTMTX78yWqy6GGBW2ePegevIGXeQ1IokEF7BRhjXIxAfEZmsdz7z7e4ZO9EDiXWY%2FA4hLDDDTcVwDn9%2BakLn%2FXRg99jaTky6wVpJrfDrtm8%2BDi%2F84zElau0OBv5SjE%2B%2BX0obDilgN9TsMYKD%2BPX%2BldJTs7Xx8NYGVTmXSnnpYlpjxgw9iCsVBg0DuNz1UBYABtfrE6vqRG%2Fn1cq%2FzKJV8gX1EbLhQvTtB0wvYvfxAY6pgG5TszIDwXWbb%2Bs4idt8CM%2BRqulGZdojm%2B8HjvImxRBcgGB7bI0I50Vjp%2FMg8bWsncq0glJOShoy2U9t1Xe70%2FHhmazqGZLXh%2FzaK7Y0L6wrMqHWu28dKS0nnURbHrQKJdWkREdCTyt7xJb7JbYebBlkVfoKS9DO%2FspGMvlkfUPeUuu0Qn03xiu2HCaizI%2FPotTwH0sm7%2B8OrvZ0WD04zBeht%2F6REiW&X-Amz-Signature=edc35a939db55f49dfd102784f9835433411b6a54017698a339d290edfe8036c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
