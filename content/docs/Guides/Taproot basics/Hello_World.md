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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LC4D3YF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDHhx3JNul36E1zqO05c9MfcTpQKdm1qBzBdXPKHVsWMQIhAIYI1VgLqzUFaM22lpt8uchvq%2B%2BEmEhm5usgRmH%2FxiusKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzog79%2FajwWR3mkmYsq3APZSjj8BqssXpsxEjxMIAxiAQc4lODC3Ds%2FCxLS7iQbsQGcGMmh6YDKOmcJlrYaQVOp7OARI1cSYbKWqfOVBa9LW206zjrwwmvOihPZevXA44vsiT5DCGtsTuz1wjhPIbzVqd083i%2BDaOS1Tb4rv%2BnKeAWHXbzxv6n%2BlPWFWbjHrqaheVY1FufMxfB58eN6DSgD1XtDXSjH%2FDpcZVrF0NZ%2B%2FiBl814NGI6ck96ibLRkZz8Vu%2FGhYO9WG4KTnnLuIxb67O0LByZlOvtbaobhGVWMSyM%2BtENG6u4R8aeEC%2FXVbPpJeTWKtnnc%2BoT1AgwxGpuG6MvzHaG6QWsXwLJKgGu4gHOyOQukconmMMiuq3orFl4CL9RxHKN7WYqMYZKzzHFmmk1k11vj6J84NWuPZF%2FG8jwHoc8RveiOjICGKi1audI2tXcjmh4cDFirkOdwSgiRMWk4ggx45VWV4YPmCZbVvEGgVAwD7978YiBXQ90wuLiti2buHOMb1M4ZFMHtYnfk4HovX4pP1T5MZZXPt6RUbDkb%2FOfCDvTlqnr2JvzWsthIIRD9YWp7ntsF8j1QnKQ%2FhgPgopCjQCu5Yybywgqvvah91oebGNyX8MbJJRcDdY9sAzbYvsB%2FI2SdADDT2tnABjqkAWnoqdzpk97Eo1Iuu1TgQbJm5J2JT5r4c6Bv%2BsSU9T3X87s6QgwsgFOWtw2ruz09wQ5fiUvbCIb5JRvL2dR23UyX7tp15PpIcWnJJoBwRkzwMHlg%2Fnd8u6l%2B%2FhvbfDKZ1nh9lFKnl0HfYzdfg4%2FkXDCQ5jzv95ZfsFhHSZPNdpdxfJ3U42B2mvuXGnYTCiWbIHjhATpYv%2FkFe1%2FSo0eQ%2BClhxSgv&X-Amz-Signature=0cdf9f323da95d91d2ee387b4e4658ae986e7e5b9e404ee4710b039b5dfc8f99&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LC4D3YF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDHhx3JNul36E1zqO05c9MfcTpQKdm1qBzBdXPKHVsWMQIhAIYI1VgLqzUFaM22lpt8uchvq%2B%2BEmEhm5usgRmH%2FxiusKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzog79%2FajwWR3mkmYsq3APZSjj8BqssXpsxEjxMIAxiAQc4lODC3Ds%2FCxLS7iQbsQGcGMmh6YDKOmcJlrYaQVOp7OARI1cSYbKWqfOVBa9LW206zjrwwmvOihPZevXA44vsiT5DCGtsTuz1wjhPIbzVqd083i%2BDaOS1Tb4rv%2BnKeAWHXbzxv6n%2BlPWFWbjHrqaheVY1FufMxfB58eN6DSgD1XtDXSjH%2FDpcZVrF0NZ%2B%2FiBl814NGI6ck96ibLRkZz8Vu%2FGhYO9WG4KTnnLuIxb67O0LByZlOvtbaobhGVWMSyM%2BtENG6u4R8aeEC%2FXVbPpJeTWKtnnc%2BoT1AgwxGpuG6MvzHaG6QWsXwLJKgGu4gHOyOQukconmMMiuq3orFl4CL9RxHKN7WYqMYZKzzHFmmk1k11vj6J84NWuPZF%2FG8jwHoc8RveiOjICGKi1audI2tXcjmh4cDFirkOdwSgiRMWk4ggx45VWV4YPmCZbVvEGgVAwD7978YiBXQ90wuLiti2buHOMb1M4ZFMHtYnfk4HovX4pP1T5MZZXPt6RUbDkb%2FOfCDvTlqnr2JvzWsthIIRD9YWp7ntsF8j1QnKQ%2FhgPgopCjQCu5Yybywgqvvah91oebGNyX8MbJJRcDdY9sAzbYvsB%2FI2SdADDT2tnABjqkAWnoqdzpk97Eo1Iuu1TgQbJm5J2JT5r4c6Bv%2BsSU9T3X87s6QgwsgFOWtw2ruz09wQ5fiUvbCIb5JRvL2dR23UyX7tp15PpIcWnJJoBwRkzwMHlg%2Fnd8u6l%2B%2FhvbfDKZ1nh9lFKnl0HfYzdfg4%2FkXDCQ5jzv95ZfsFhHSZPNdpdxfJ3U42B2mvuXGnYTCiWbIHjhATpYv%2FkFe1%2FSo0eQ%2BClhxSgv&X-Amz-Signature=37f6de5bd1e06a746d3f7298dedcdf831d54672dd691ae5e1652947ac3e470b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
