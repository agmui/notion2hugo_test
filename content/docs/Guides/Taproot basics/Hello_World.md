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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WKK6M2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWmruIst3qBX%2Bj0BGA4fmaYSUq%2FZXNfha9NQha9KePXAiA0URBKc4uWBfsJp%2B%2BoixUaxTq%2Fly0i%2BXGLTKkLOiM8zCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMryyr3mf0uSS%2BBSWhKtwDJYhUicZgZ%2BV7bG8qjWOTHZe%2Fs8o4JzYAg%2B21VcgFbB7QPotoQk4cY%2Bie2782DgUKPusK3P0TfZBdIbSkIAKKLmUb20RrSOC98b2qaxHR421z%2Fp7EbBRKyxc2Ml9VOZLScf%2BH%2F%2BAQW1wObQ3aiXOzqE9yVPO9zumtyLBuqCRTZHF8bEK%2B1HtJXyU5bsU07pE9cjRUhZ86ozbny2H5%2FmuWmWzXlVYE9buAQbUcYAwNZJv0W8MyXCQQq5ZR8uFbeZX7PpGdv8ZMGWLE%2BCr%2Bgi3gk%2FrJZ64OWkjCaWu%2B16hAletnFObcSyMEQNxXBA5idh%2B%2Fg59ohkTHyBrO848EfYoGqzREq3VPp0zgNeI8ly3OpT1kj%2FnFQifjCfd7MMGoTSjt2Krx04hkJZswL2sxr%2BoGu4picTyFzPoGK1fb6B4q%2Fuxc49Uv30%2FWEDwA7QOJP4WptGFD2fhfh4JikfYY%2FLVPyjmpQnUt5NB64pu9c5pp6BOurdeU1bUBzQY7SLU1f2a7vSPhLnvm7nLsj4bb3XV73resEhr0EoXLW6XFXA%2F%2BFCMW%2BIImc5fU8Kw%2BLudNj0y1rrDHA81jwO95VA365KDn4NolSs9y2L57Au9L0c9JtKcNr%2BZDiBxPhWxbcwcwkOG0vQY6pgESSjm0f%2FptWzMquCcdMQdGzXfOlWlqthQQQ%2BRjyVTx0MxO7WSN9ck0eIiMyWBhcOydfnYYRfdzetTh77nIkXm6gGiVFU4BNQHGEph1cmgMxel%2FoBzJ9dda%2FL4hARR%2BC0PE7BmH%2FUMOmy3zlhzySFCJ42cT7KKPEDUqZv%2BrgWjqOIBUEm0kHh9q9YzeC378xjGp5oMAJhtf9dhd8AjDJqfCVNhqwRj4&X-Amz-Signature=2d0065ad9323c557b4597f91166f94a21919aa04aa0eeb07e6cb30d0b8906607&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WKK6M2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWmruIst3qBX%2Bj0BGA4fmaYSUq%2FZXNfha9NQha9KePXAiA0URBKc4uWBfsJp%2B%2BoixUaxTq%2Fly0i%2BXGLTKkLOiM8zCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMryyr3mf0uSS%2BBSWhKtwDJYhUicZgZ%2BV7bG8qjWOTHZe%2Fs8o4JzYAg%2B21VcgFbB7QPotoQk4cY%2Bie2782DgUKPusK3P0TfZBdIbSkIAKKLmUb20RrSOC98b2qaxHR421z%2Fp7EbBRKyxc2Ml9VOZLScf%2BH%2F%2BAQW1wObQ3aiXOzqE9yVPO9zumtyLBuqCRTZHF8bEK%2B1HtJXyU5bsU07pE9cjRUhZ86ozbny2H5%2FmuWmWzXlVYE9buAQbUcYAwNZJv0W8MyXCQQq5ZR8uFbeZX7PpGdv8ZMGWLE%2BCr%2Bgi3gk%2FrJZ64OWkjCaWu%2B16hAletnFObcSyMEQNxXBA5idh%2B%2Fg59ohkTHyBrO848EfYoGqzREq3VPp0zgNeI8ly3OpT1kj%2FnFQifjCfd7MMGoTSjt2Krx04hkJZswL2sxr%2BoGu4picTyFzPoGK1fb6B4q%2Fuxc49Uv30%2FWEDwA7QOJP4WptGFD2fhfh4JikfYY%2FLVPyjmpQnUt5NB64pu9c5pp6BOurdeU1bUBzQY7SLU1f2a7vSPhLnvm7nLsj4bb3XV73resEhr0EoXLW6XFXA%2F%2BFCMW%2BIImc5fU8Kw%2BLudNj0y1rrDHA81jwO95VA365KDn4NolSs9y2L57Au9L0c9JtKcNr%2BZDiBxPhWxbcwcwkOG0vQY6pgESSjm0f%2FptWzMquCcdMQdGzXfOlWlqthQQQ%2BRjyVTx0MxO7WSN9ck0eIiMyWBhcOydfnYYRfdzetTh77nIkXm6gGiVFU4BNQHGEph1cmgMxel%2FoBzJ9dda%2FL4hARR%2BC0PE7BmH%2FUMOmy3zlhzySFCJ42cT7KKPEDUqZv%2BrgWjqOIBUEm0kHh9q9YzeC378xjGp5oMAJhtf9dhd8AjDJqfCVNhqwRj4&X-Amz-Signature=d4b17aedd680019370c4d8dde100732512c9a1b94225131fa5c79b9db2d18369&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
