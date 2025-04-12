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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRBJUSIH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCh0vnjqeO0wTyWhO2Ic6fs8q4cytidkP0T%2Fbh7cOC9TQIhAM1qHofDHBNKovXnKgKodKcPh%2BZimgLDgp%2FKwJemLOGnKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXaQ%2BtRThpreHRNBoq3AOjOYX2zyph1WmI19Mm4wpZu%2BGFFI9kcsW%2BcrBfkGHa6ZpsIJnuiz1qk111%2BtDeBt7IEu5fF50P5HWYeZ0OvuXNHZ%2Fh4fNeQZIn2vfDOapcpCzr4Z85iSt5x7RZHy883vOKeM6rEMKutDDN4H0Z%2BGzjQ%2FXHJrHoYazwQVvnonh3H2sbRy5CX7YDdC%2FKap3ohjOGgqm86oN%2BzahQisGRgTbOZ5R5xJ4b2%2FwdyrjxH5rkjpCmLhUmqHWg4Zuyib4jEX8UAVyz%2FHkzZM7ogT72y7lO4xTITHYxxSlJZ5CixxAEZYI5pBpNTjTG3rxqAja6nEkItANLottrpHiz4%2FRBL23Vs%2FOq1B3jQ3W3UR0P62VUePDeNl3UByyJd6MYqTAw6yGW55fwHdQmh3VfJNqmbJhsqB%2Fqfu4Dst1ZqSCw9vcapXGSht3%2BvL5NEzWypj%2FMv1vIFRWeSMC0dpofg51Y%2B4khSfTbodK9%2BOZBPO%2BFHl12grX%2FSJjV7ttdEMAcyKbYUv1r7Pc5YeZJfzJaXiL0GRojqUUlKx0V2mxZ5u90SCcexuB3Cm7Len7po9ldDKLGqHFwTV8TTPtfi9AJjDcaX4bkNtCBcc3LL5cjoJGvQq0TB9OozLQ9k7GYjD8mlDCVseu%2FBjqkAfuY2DHIwYjhNiTUYr%2FA4imT4JBO%2FmjvzKEuSKFV7vc8Evw6qVRDCHjzdxwYEnUftiyxSHQdhj1JUhYwHCCYeeJiOjsk6lClGUardjO7ziTlnztkrWWHQgQuuWxqQCeWwxO%2BLE9KfsWUaN9wWY54KoPhqi2LV3r01WGjRhsxAWtaOj1CrOjhd5nOyGmXAWWRjWu7qPg5X8J7aUJ4y%2BayFKUQyypU&X-Amz-Signature=039bdba91c639862bb3074e9d2172b73166b391806caebfe00523ce70b8d36ab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRBJUSIH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCh0vnjqeO0wTyWhO2Ic6fs8q4cytidkP0T%2Fbh7cOC9TQIhAM1qHofDHBNKovXnKgKodKcPh%2BZimgLDgp%2FKwJemLOGnKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXaQ%2BtRThpreHRNBoq3AOjOYX2zyph1WmI19Mm4wpZu%2BGFFI9kcsW%2BcrBfkGHa6ZpsIJnuiz1qk111%2BtDeBt7IEu5fF50P5HWYeZ0OvuXNHZ%2Fh4fNeQZIn2vfDOapcpCzr4Z85iSt5x7RZHy883vOKeM6rEMKutDDN4H0Z%2BGzjQ%2FXHJrHoYazwQVvnonh3H2sbRy5CX7YDdC%2FKap3ohjOGgqm86oN%2BzahQisGRgTbOZ5R5xJ4b2%2FwdyrjxH5rkjpCmLhUmqHWg4Zuyib4jEX8UAVyz%2FHkzZM7ogT72y7lO4xTITHYxxSlJZ5CixxAEZYI5pBpNTjTG3rxqAja6nEkItANLottrpHiz4%2FRBL23Vs%2FOq1B3jQ3W3UR0P62VUePDeNl3UByyJd6MYqTAw6yGW55fwHdQmh3VfJNqmbJhsqB%2Fqfu4Dst1ZqSCw9vcapXGSht3%2BvL5NEzWypj%2FMv1vIFRWeSMC0dpofg51Y%2B4khSfTbodK9%2BOZBPO%2BFHl12grX%2FSJjV7ttdEMAcyKbYUv1r7Pc5YeZJfzJaXiL0GRojqUUlKx0V2mxZ5u90SCcexuB3Cm7Len7po9ldDKLGqHFwTV8TTPtfi9AJjDcaX4bkNtCBcc3LL5cjoJGvQq0TB9OozLQ9k7GYjD8mlDCVseu%2FBjqkAfuY2DHIwYjhNiTUYr%2FA4imT4JBO%2FmjvzKEuSKFV7vc8Evw6qVRDCHjzdxwYEnUftiyxSHQdhj1JUhYwHCCYeeJiOjsk6lClGUardjO7ziTlnztkrWWHQgQuuWxqQCeWwxO%2BLE9KfsWUaN9wWY54KoPhqi2LV3r01WGjRhsxAWtaOj1CrOjhd5nOyGmXAWWRjWu7qPg5X8J7aUJ4y%2BayFKUQyypU&X-Amz-Signature=454f1a1809cd66855f10d8a9b1f471a2091cee78a42596cd1c6f262eb09f522f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
