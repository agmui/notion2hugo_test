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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BK5IGH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDlpmawY34vzqiKNTuEk2U4oC11BvTOib4hBhUZiKGcuQIhAKuSwqPPdGIbbMBG3TotePFUYG60BwzewFFA4ywAlr9EKv8DCDEQABoMNjM3NDIzMTgzODA1IgyeZ0V4734PEM%2BN8ysq3ANGgK4AKf95f4pD3X7z8UrQax8bYeMGvQDgKcGvt8UCrNPIr2wimzrXF476Ka8AdjL9L2Jc6BA9o9LFBI7qmv2U9vu5UxJA6ndwIZvAxu0RJqEY8nGr%2FnomOsPGUobN6RuT4HFTJHsHCZZbfSwp8bk%2FACFKeL8d8rl57T%2BynE7bY%2B3q9lm%2FHG0peHs9q%2B62RDpDnioTya0H36clfUPnAcy%2F7dAFCwemxMP%2B9W3AcGYSikQ5K%2Bk60G34TBvtbAhutq5PTop%2BQUUnbpPcRm9EGjY6NfxuccVJX3CjQPc0fuL%2BFQ9tnHoR8j0opP0R2i0YwD%2Bcej92QqeTda69ebOUFjWQUP4dGB6Y7EHdJR1%2B79jwFdbTyq7%2FXFN4YOEOAJ4yGn6eONvB%2FKdoQlPDZZCNtbkujVH%2BMhkgcde5APxlCp4Y%2FX0LK7IzIepYBrYuLBa89acRnmEw1jnvgAa10sXYqWqQR6dr1ew%2FKd2qBzi1e%2BykDtPhCf8tF8HKUd6N80rKf2nLcts5QcanbzGHqRh62mKw60%2B9n5nAN0NiPrB6bfCqThmR5Snzvl2JrQOTaQiSPWCou7%2FeCzbca16ZRPEY3C11D6hhM5R5JV1MxkKbbOHa5BbEdYV%2BAx5rd2OCMDCo3oHCBjqkAb0nYmZr2XARVsuSL55wW5apV9TPt%2BnZg6%2F%2B8tzf9oOTAUwi2%2FPxHfE2l0Gru4VdeAX8gBuU4rLx%2BLSrXeN2IXRbVTDLARMjNCGqt1xuGhZ5yB8aMfy8ZF5O4%2BLmSMhGmWLL19KjVcK9gcG4jYfwHhyuigZxnRCR9BAiF8kaY2u%2Ftdh2%2F9bREBUgLAnnXdYsMvqn3GFg9ac3OBQnxzVQFv2cGol4&X-Amz-Signature=605f14dbeaab3cc89e6d34b2e78bc25bc29a86c5ba136302af634886873a7c89&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BK5IGH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDlpmawY34vzqiKNTuEk2U4oC11BvTOib4hBhUZiKGcuQIhAKuSwqPPdGIbbMBG3TotePFUYG60BwzewFFA4ywAlr9EKv8DCDEQABoMNjM3NDIzMTgzODA1IgyeZ0V4734PEM%2BN8ysq3ANGgK4AKf95f4pD3X7z8UrQax8bYeMGvQDgKcGvt8UCrNPIr2wimzrXF476Ka8AdjL9L2Jc6BA9o9LFBI7qmv2U9vu5UxJA6ndwIZvAxu0RJqEY8nGr%2FnomOsPGUobN6RuT4HFTJHsHCZZbfSwp8bk%2FACFKeL8d8rl57T%2BynE7bY%2B3q9lm%2FHG0peHs9q%2B62RDpDnioTya0H36clfUPnAcy%2F7dAFCwemxMP%2B9W3AcGYSikQ5K%2Bk60G34TBvtbAhutq5PTop%2BQUUnbpPcRm9EGjY6NfxuccVJX3CjQPc0fuL%2BFQ9tnHoR8j0opP0R2i0YwD%2Bcej92QqeTda69ebOUFjWQUP4dGB6Y7EHdJR1%2B79jwFdbTyq7%2FXFN4YOEOAJ4yGn6eONvB%2FKdoQlPDZZCNtbkujVH%2BMhkgcde5APxlCp4Y%2FX0LK7IzIepYBrYuLBa89acRnmEw1jnvgAa10sXYqWqQR6dr1ew%2FKd2qBzi1e%2BykDtPhCf8tF8HKUd6N80rKf2nLcts5QcanbzGHqRh62mKw60%2B9n5nAN0NiPrB6bfCqThmR5Snzvl2JrQOTaQiSPWCou7%2FeCzbca16ZRPEY3C11D6hhM5R5JV1MxkKbbOHa5BbEdYV%2BAx5rd2OCMDCo3oHCBjqkAb0nYmZr2XARVsuSL55wW5apV9TPt%2BnZg6%2F%2B8tzf9oOTAUwi2%2FPxHfE2l0Gru4VdeAX8gBuU4rLx%2BLSrXeN2IXRbVTDLARMjNCGqt1xuGhZ5yB8aMfy8ZF5O4%2BLmSMhGmWLL19KjVcK9gcG4jYfwHhyuigZxnRCR9BAiF8kaY2u%2Ftdh2%2F9bREBUgLAnnXdYsMvqn3GFg9ac3OBQnxzVQFv2cGol4&X-Amz-Signature=566adbe1e920bab91b45f20be598b2477ef469d0e7c2d4006fd554c756804096&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
