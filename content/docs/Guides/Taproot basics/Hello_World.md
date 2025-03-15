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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYYVOA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTWNNJTuHo0gN6W13ZeBrYUfa8%2FNu5RpuuYBcATi7sFwIhAPpFQFWJRWuj2KqmEugZmRxNQO0gbZodJ8Z%2BNzArgrbqKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYIjJ%2Bf5ZoQK5v%2BnQq3AOMERiOy1yksZoSrJGJz9wSsY4gB2bbD2exuKfcxImoKll0D5PXOppwNKlf%2B70nKcw2gmWBrXIKevAmhuVh9OO9861v9vgJqzBLRT4I84T2XQdehX7XdOzztQrU8qkejgmMi5a5SJNyaH%2B3rfRT5PtRNj2p3i%2BKhZIiy%2Fs%2B21bJA40gD4JA84Tc0aYJdESWTRZ553qB49X%2BwJoUDpceYJ12ca5yUOsU4NeUJqpBZRfSpZe5txMfwAb6YctXTLTN5r3bCTEtVUdST0BXN%2FhEVzgvp2cmpcpFrPDUVUiSFfvNZN4RlwrOBGuxYw54zJpNwg%2BIHfd4v8sLXJMK%2BuUXFI6bghY%2BuPn0j9cn1AmOebOUau%2BVWdqKDzq3xSNZ%2FkaGqQQQD4XhHl5U9%2BfNVbgDXbaxqEPbvH4o3Wblc9AMNt4vHmJMLBh%2F%2BUFemRp%2FMdwqO%2BNnM7qTkvBpl8beu1K1YusbGvx7d7xcS7LoY7bAf%2F4qt8CNQn6pkSMPpknxuJaCiXUTRpD5AuKlDoFUDoid9vb1Nt50YScSOZom62aDleyY8qVNYz3NA%2Fp%2FQd5WnARLrxBoYWTxkglPK03vNkVWG30PoqeZK6iPgP4m%2BDzNcpdMZVfQUjv5iF7dNuJPyjCUy9O%2BBjqkAQmEcUfYM4giLQ2dbwMeVbci7VRcXYzGuTi8ZOCbDyVets3vVtc821qH7wQu2tVFWzkdNOcL0cLWsh23ydsMDThU%2Fk7Vz7p8TxOUlv2yeCo0atxM9f03DWeN1zbYYrLd6NwOaDPOWI8WhKq0F4Dj2M2FZyo7SFnrb0OXJ2S7TPC%2Flj5qJYf7cfJw7qaE%2BSsN9JN93NrI0foX3Z0fMe%2FaeB1Snj9M&X-Amz-Signature=d571798634ab7e607d5e2ca8a55a84ade36a29a7d28e969a85504f04639e8e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYYVOA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTWNNJTuHo0gN6W13ZeBrYUfa8%2FNu5RpuuYBcATi7sFwIhAPpFQFWJRWuj2KqmEugZmRxNQO0gbZodJ8Z%2BNzArgrbqKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYIjJ%2Bf5ZoQK5v%2BnQq3AOMERiOy1yksZoSrJGJz9wSsY4gB2bbD2exuKfcxImoKll0D5PXOppwNKlf%2B70nKcw2gmWBrXIKevAmhuVh9OO9861v9vgJqzBLRT4I84T2XQdehX7XdOzztQrU8qkejgmMi5a5SJNyaH%2B3rfRT5PtRNj2p3i%2BKhZIiy%2Fs%2B21bJA40gD4JA84Tc0aYJdESWTRZ553qB49X%2BwJoUDpceYJ12ca5yUOsU4NeUJqpBZRfSpZe5txMfwAb6YctXTLTN5r3bCTEtVUdST0BXN%2FhEVzgvp2cmpcpFrPDUVUiSFfvNZN4RlwrOBGuxYw54zJpNwg%2BIHfd4v8sLXJMK%2BuUXFI6bghY%2BuPn0j9cn1AmOebOUau%2BVWdqKDzq3xSNZ%2FkaGqQQQD4XhHl5U9%2BfNVbgDXbaxqEPbvH4o3Wblc9AMNt4vHmJMLBh%2F%2BUFemRp%2FMdwqO%2BNnM7qTkvBpl8beu1K1YusbGvx7d7xcS7LoY7bAf%2F4qt8CNQn6pkSMPpknxuJaCiXUTRpD5AuKlDoFUDoid9vb1Nt50YScSOZom62aDleyY8qVNYz3NA%2Fp%2FQd5WnARLrxBoYWTxkglPK03vNkVWG30PoqeZK6iPgP4m%2BDzNcpdMZVfQUjv5iF7dNuJPyjCUy9O%2BBjqkAQmEcUfYM4giLQ2dbwMeVbci7VRcXYzGuTi8ZOCbDyVets3vVtc821qH7wQu2tVFWzkdNOcL0cLWsh23ydsMDThU%2Fk7Vz7p8TxOUlv2yeCo0atxM9f03DWeN1zbYYrLd6NwOaDPOWI8WhKq0F4Dj2M2FZyo7SFnrb0OXJ2S7TPC%2Flj5qJYf7cfJw7qaE%2BSsN9JN93NrI0foX3Z0fMe%2FaeB1Snj9M&X-Amz-Signature=96a8a614033ebaf5d8be042b32e8b05294a7e39c2edd6f914bbf41c31306ecca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
