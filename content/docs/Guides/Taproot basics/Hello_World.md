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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4TGZ67%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiiOr0PnxxxttUTuCtSeokYDdSZdoptmpeEZ4mEF8EeAiEA%2FxSJCIMKZnjYLRNR4%2BbTAj94IIu6DD5Ry9TFm9pAlXoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOsOhTV0yzgIBufiaircA4fRu1W62X%2Bi4o0pI17LytgECz0NllvGtUc7ISrzpfE0HuyhqqW44zVJxmq0NzydLUjrvVb6%2F4NUXeV0yQrpbDUy6a5KYnd3MB%2FMc4SzkOeKL3b%2FlGXk9HWHSH84PPcAVwKfsnHjaj7pGDU4H7pMf8Q5VvPgtWZ%2FQU6teScC88qbN1Qs4wjKT45Lhjimejf2iI1Zx3H1NOVr4jZIPhD8pmzm%2FRkAcT5BDjUUU0O3tNs5eISJg8Ojqdgr6FbUaItW%2BjFq4yowX7j4QdU8hTms2PcHQ0ONJDPu5OKgxcFFC9YZpQGuEDSQORN1kBJAgPwldw2suWxg306EYVIXFJC5kNheXMlGSHa9ygSm6pz2G2WVTvZQUdIfI2s3iNTw%2FDTyGHXCitAnm6guLkxX7HycxQOqdb6Gy1zSP0QRNfwLQzymO3PxsHWL3IcGkE5A6Fuy471E1sYAdpabBkwI5ebNr%2FKdgHekLi0%2FQDBANI0KY%2B9C0Rp9PLU5k1LAVPUeYRa8pgCywI1phAGCOU3I52eh8d5Hi%2BkZgaaEHBhWDP37hR8xof%2FI2iOgLGb6SzSF3drFvCE63WaQLQ7lVne%2BBoF22F03iBal4O4bomIVELTzM4mR%2FXFyee%2B3fgFXsZaCMJG93r4GOqUBE6TslkbHIfW9KAYf4vyA0X6AgUsmkxXu8enPse0XN17RHMbvz5hVo0KN%2FCf%2BIJUjd%2BCqw8NCrv6dFzUkha51IQDrfmlsUFqTIlefsFsMSGrFeND49yqKKB9NDjZtR%2Fuj7OJBy1vDALhPQ9WFLtsKsZo7tJCXHfPa0ihZJeBXMwuRU1UhPoII51Ab%2BwfPf5jcAKGrY7qsjmta%2BdiecGsfDG3x5B%2B6&X-Amz-Signature=3160deb6d32f878396cbfa0e01bd634e6bf62820d9798bb219b470f0d862908f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4TGZ67%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiiOr0PnxxxttUTuCtSeokYDdSZdoptmpeEZ4mEF8EeAiEA%2FxSJCIMKZnjYLRNR4%2BbTAj94IIu6DD5Ry9TFm9pAlXoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOsOhTV0yzgIBufiaircA4fRu1W62X%2Bi4o0pI17LytgECz0NllvGtUc7ISrzpfE0HuyhqqW44zVJxmq0NzydLUjrvVb6%2F4NUXeV0yQrpbDUy6a5KYnd3MB%2FMc4SzkOeKL3b%2FlGXk9HWHSH84PPcAVwKfsnHjaj7pGDU4H7pMf8Q5VvPgtWZ%2FQU6teScC88qbN1Qs4wjKT45Lhjimejf2iI1Zx3H1NOVr4jZIPhD8pmzm%2FRkAcT5BDjUUU0O3tNs5eISJg8Ojqdgr6FbUaItW%2BjFq4yowX7j4QdU8hTms2PcHQ0ONJDPu5OKgxcFFC9YZpQGuEDSQORN1kBJAgPwldw2suWxg306EYVIXFJC5kNheXMlGSHa9ygSm6pz2G2WVTvZQUdIfI2s3iNTw%2FDTyGHXCitAnm6guLkxX7HycxQOqdb6Gy1zSP0QRNfwLQzymO3PxsHWL3IcGkE5A6Fuy471E1sYAdpabBkwI5ebNr%2FKdgHekLi0%2FQDBANI0KY%2B9C0Rp9PLU5k1LAVPUeYRa8pgCywI1phAGCOU3I52eh8d5Hi%2BkZgaaEHBhWDP37hR8xof%2FI2iOgLGb6SzSF3drFvCE63WaQLQ7lVne%2BBoF22F03iBal4O4bomIVELTzM4mR%2FXFyee%2B3fgFXsZaCMJG93r4GOqUBE6TslkbHIfW9KAYf4vyA0X6AgUsmkxXu8enPse0XN17RHMbvz5hVo0KN%2FCf%2BIJUjd%2BCqw8NCrv6dFzUkha51IQDrfmlsUFqTIlefsFsMSGrFeND49yqKKB9NDjZtR%2Fuj7OJBy1vDALhPQ9WFLtsKsZo7tJCXHfPa0ihZJeBXMwuRU1UhPoII51Ab%2BwfPf5jcAKGrY7qsjmta%2BdiecGsfDG3x5B%2B6&X-Amz-Signature=5998a08f0db562a887047a314ddd256de9089c875b89afb0584588471dabd75d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
