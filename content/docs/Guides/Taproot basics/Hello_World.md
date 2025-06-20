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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRA6S6U%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHNkTVb8rJPP1zE4q3n6OZvJqcqB6wwNGih%2Bb4wl9p1AiA6jeAO4tNnJK5Mhfszz%2BycyX5O1RJ0Exua2caa2xAAySqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlz1GYLH8s44I8EBbKtwDACGatXLeuqgdGXaPnpqT3GnaEnu7O4PWl9gTDICZO%2FcFgQJA8IcCDT8OW5sExJlal1%2FjYHpiNwFgwVYVyQr1v6USMgWLENy%2F8tXkZNc08tjC3tQ0mo89U6BkZcyMLiuqWt5hhc%2Bd7aINcre9zxDIOyXC8jDNUsPeLSwbGwX1svZVJGescdQLPXvTabdWS9zf0sNqZu28e0JQVJNm8hgTvQd1jjM7SUOz%2BwZU28HzbwVPcJBbkNs8pxcHNe4lbyS2ZuYW80AN2b34xy8X9xvedSvjxO7%2F3rjaFEMKQtO5%2BaQWzBz33p584lcNDAFpH7TspZgDZPU6e7XOB4Qaagbhj44T5ZoeVcxb3IseY1HFKX4UprnuSjpiTjZ3npkwgpJP4Bd7NEMDHY%2FuZwzwcgexJEsbS8yKD17Dypl9KsgyelDTvZT%2FStau3rFGFVusilm14QPeizVpn%2BXpbsdqYQpWqIHhd4sdMS%2B2qPzL5cguaWg6CmVIdsQFsKKdLotWyhC8DXK5pokO%2BOqhMV75GG0D6C021rBGrPpMCBAOfH8cKuVi3kvwrMbt5RcIiT4oPoRJsbrIoiTudjpadpJv3cJI6SdLqQrmFDrCbpnTCYY1otdX8rTCHuoKnXAxh04wn%2F%2FWwgY6pgE8UEOP8lG%2Fl2oZFWEWYfYqM7Cyy3Jmb3n10BL9EwporncYaSugkyxQZ5xX3mus8zaZzwvikYEMCvK0bnaXLvRAY4wbc%2F7D%2FvkkPvG0u4WDfdxoNjUmpv%2FEJqimv5toTgAEvioci%2FAa73aNcOah5s6VeJ%2FQ%2BSyhMw7kJ7ldVFHDRZJu1v1MPtUnaR%2FSLgHE95HFZZkRg%2FvEjE%2BbtsEFpGwPjy8u%2BAsY&X-Amz-Signature=c0cfd8c215bffd58e39afbacd8a6b901e0b27cbf5360774d3ef61bb37d807611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRA6S6U%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHNkTVb8rJPP1zE4q3n6OZvJqcqB6wwNGih%2Bb4wl9p1AiA6jeAO4tNnJK5Mhfszz%2BycyX5O1RJ0Exua2caa2xAAySqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlz1GYLH8s44I8EBbKtwDACGatXLeuqgdGXaPnpqT3GnaEnu7O4PWl9gTDICZO%2FcFgQJA8IcCDT8OW5sExJlal1%2FjYHpiNwFgwVYVyQr1v6USMgWLENy%2F8tXkZNc08tjC3tQ0mo89U6BkZcyMLiuqWt5hhc%2Bd7aINcre9zxDIOyXC8jDNUsPeLSwbGwX1svZVJGescdQLPXvTabdWS9zf0sNqZu28e0JQVJNm8hgTvQd1jjM7SUOz%2BwZU28HzbwVPcJBbkNs8pxcHNe4lbyS2ZuYW80AN2b34xy8X9xvedSvjxO7%2F3rjaFEMKQtO5%2BaQWzBz33p584lcNDAFpH7TspZgDZPU6e7XOB4Qaagbhj44T5ZoeVcxb3IseY1HFKX4UprnuSjpiTjZ3npkwgpJP4Bd7NEMDHY%2FuZwzwcgexJEsbS8yKD17Dypl9KsgyelDTvZT%2FStau3rFGFVusilm14QPeizVpn%2BXpbsdqYQpWqIHhd4sdMS%2B2qPzL5cguaWg6CmVIdsQFsKKdLotWyhC8DXK5pokO%2BOqhMV75GG0D6C021rBGrPpMCBAOfH8cKuVi3kvwrMbt5RcIiT4oPoRJsbrIoiTudjpadpJv3cJI6SdLqQrmFDrCbpnTCYY1otdX8rTCHuoKnXAxh04wn%2F%2FWwgY6pgE8UEOP8lG%2Fl2oZFWEWYfYqM7Cyy3Jmb3n10BL9EwporncYaSugkyxQZ5xX3mus8zaZzwvikYEMCvK0bnaXLvRAY4wbc%2F7D%2FvkkPvG0u4WDfdxoNjUmpv%2FEJqimv5toTgAEvioci%2FAa73aNcOah5s6VeJ%2FQ%2BSyhMw7kJ7ldVFHDRZJu1v1MPtUnaR%2FSLgHE95HFZZkRg%2FvEjE%2BbtsEFpGwPjy8u%2BAsY&X-Amz-Signature=3ff11d89c0a3799641d1c1c1282f3969facd2a710bce2a005f916fd1ad1c7e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
