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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA7VG6E%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoUkVoluShAn6k86z%2BhqI6couxrSSkwTqjXhwcmShWAIhAJSiT7AJ8ri3KkKvXXCDiZuI7m9BSa3NVHbTRRporr0XKv8DCHAQABoMNjM3NDIzMTgzODA1IgxeYEzTQyTZG1BKeRIq3APSoQp%2BtklEIqgG%2FCrR0tUxY96090EJ%2BAZWZsIfgGs7JenECmZ%2FLkSU7ApMugrW1e3b6VEbboEk3nqcFZf0b1%2BuPU%2BLKj0ry%2FNuBGbfAiUEDRvtReI8j4EqFxJLunZML4rHuMWHuHLFcF%2BL3uJfD2pXKw4EF60zgmPJ%2B8JEE8u0K3NFz7gpbufYutRrk28EgNvl8ldM36v55tvljyxAUrASq4EkCM1CuobJQgyLBv2I0WGGuFXj4rIUbhmuQ%2BmvX9NY%2FUGlpd9q90Jg2SSShjNxwT%2B6txq7OhEmsrBclwsYLUjpCB3D6KVydhbBniWpU8pP5B70IT3PvUySSHl2LKLxje4cFHi6eRQelmhKBnzYFV%2F7MJqsITPTXlXBq33mAyWVMvQ8mssoal1eFByy1XQ9WC3W1SVFkNN%2FkOMkyzLWV6XZrAzO24BIDUeSqr7wjiZxLGe9MPOaoqzgxhv8aLpWFGugduYVgFiQe39Nhbw9lv4%2FaCdA6pHQropQeRxgG%2FDJwuhl0JDbc24ZJJNC%2FlKvXYpafps%2F%2FxInEsz1Qz58IcYspJBUPieHqwmrsifX0PuU5oF8gXX8570glMAoQS%2B%2Fw%2Fzt8%2BAzBTu44jnrPYuFRKciD9qfZyjT3ftagzCEuI%2FCBjqkAXfZaheYwN1IyNk6dxP5%2FwccjFPEp2xtqp3UAHgdmImOwr1fjwK%2BUO1YUZKfPxCnPTXc5RUX3pUXmxO5z0vKP8vbFCz7NbJxj5g4PV3LLOLyAUrc558zfVKbiq3DOvpqAwSVK0MvcVXAhDyf%2Bfy4Ts3rsdlfeogDHoekFTnuUprSIJvbu1PCcqnoY5nBWBqY2Xp3Ki4VMPLXmGcrcx0P0USPJF5Y&X-Amz-Signature=45d596cbcdda1523fe4f920beb9ae5aea55b8fcf5a0764ac59e441f97a227f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA7VG6E%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoUkVoluShAn6k86z%2BhqI6couxrSSkwTqjXhwcmShWAIhAJSiT7AJ8ri3KkKvXXCDiZuI7m9BSa3NVHbTRRporr0XKv8DCHAQABoMNjM3NDIzMTgzODA1IgxeYEzTQyTZG1BKeRIq3APSoQp%2BtklEIqgG%2FCrR0tUxY96090EJ%2BAZWZsIfgGs7JenECmZ%2FLkSU7ApMugrW1e3b6VEbboEk3nqcFZf0b1%2BuPU%2BLKj0ry%2FNuBGbfAiUEDRvtReI8j4EqFxJLunZML4rHuMWHuHLFcF%2BL3uJfD2pXKw4EF60zgmPJ%2B8JEE8u0K3NFz7gpbufYutRrk28EgNvl8ldM36v55tvljyxAUrASq4EkCM1CuobJQgyLBv2I0WGGuFXj4rIUbhmuQ%2BmvX9NY%2FUGlpd9q90Jg2SSShjNxwT%2B6txq7OhEmsrBclwsYLUjpCB3D6KVydhbBniWpU8pP5B70IT3PvUySSHl2LKLxje4cFHi6eRQelmhKBnzYFV%2F7MJqsITPTXlXBq33mAyWVMvQ8mssoal1eFByy1XQ9WC3W1SVFkNN%2FkOMkyzLWV6XZrAzO24BIDUeSqr7wjiZxLGe9MPOaoqzgxhv8aLpWFGugduYVgFiQe39Nhbw9lv4%2FaCdA6pHQropQeRxgG%2FDJwuhl0JDbc24ZJJNC%2FlKvXYpafps%2F%2FxInEsz1Qz58IcYspJBUPieHqwmrsifX0PuU5oF8gXX8570glMAoQS%2B%2Fw%2Fzt8%2BAzBTu44jnrPYuFRKciD9qfZyjT3ftagzCEuI%2FCBjqkAXfZaheYwN1IyNk6dxP5%2FwccjFPEp2xtqp3UAHgdmImOwr1fjwK%2BUO1YUZKfPxCnPTXc5RUX3pUXmxO5z0vKP8vbFCz7NbJxj5g4PV3LLOLyAUrc558zfVKbiq3DOvpqAwSVK0MvcVXAhDyf%2Bfy4Ts3rsdlfeogDHoekFTnuUprSIJvbu1PCcqnoY5nBWBqY2Xp3Ki4VMPLXmGcrcx0P0USPJF5Y&X-Amz-Signature=5bc257cc7f970618f856709df11d65b6e9e984ae4e9c4c36fd70917859df59d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
