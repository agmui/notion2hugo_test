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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3W7OPWU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwdZW%2FjDjdg8XH5Sn7zeFaFubDW%2FV4Hl7k3kJKdyQNgIgZqE7GUtuvMEkEJkUnRIbIoIWZxtgRFuT3YtQPry5Ht4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJiBGFJVgQbz7FJvrSrcA7shnplZwABbq4u0PI9%2B8iaw0AsKruGKc3rC9hJSb1fZxm%2FDbe2AAby2ID7AmtFOn1y%2BVc6%2F4gj59b0BEfb4eugRClI0OfBAVcLS9O2VclopuauBZI1GSyBeKnQE7YZJHMsKhR79%2FLev1DaPjdTylecxrnMFVfp5JdIL6Kt4HFyeIdANQ3RnF%2Bf7%2Fx3gHyXlQHTeAYfBICS1f59XSyWNE3VsuTk4E%2FIhW9ZcFgz7ADSuvTtuDAUHx3%2FM8MTStXTy2gQyRtzWWd1uY8qaUhJ7BLdL9n%2B3mFeraHOcgRiUhzz5NUo4dX8SS57F6mo%2B9qE5uLrzVVGyF43lydarKV6WR5AjZN%2Bj0iYEQGSsTXvhFphQjvRtVSzs08tXF%2BM30aK0jNxvii8FpzvZ23VYRT2%2FM64aCmXso8KmtxXaXowwRVIXFeO7SlodEM5IJeSArMWrtVPTTFLVV3b4GNlAW%2F%2BTACASCYASSgLSACCdhaLurzZ2unekYW0YQ2roQHcbaTbdl2pXYdoEHAKuWQbvVbBNKqGZVlG8Pj8IcGqbqoTHF1nJJaI2lbAnB04qcwEtOm91fkA5pQPc7L3MeijPl8iBJPz3zinyKEoqBAQVYjiknv%2FIFehCBFK6LNiI6f7IMOiB2L4GOqUByGIyRc%2BZYr4%2BOItJrjMQhoX3vXIZPOcfj4MquF3I6rH%2BP5HMLaeE8FCftRlCZTCR1UynEwbFOBZPGq%2FYvD99SEZau9Z6G0gaWKA1XO9ZXXhsUema19XA4zvG4z419Xu4la8Z5DROtAOC4xuf3kaWWCdu0t%2BWO20KTM7Zx%2BwcoY49KjD0A8vdk1SW4kIhv%2FlZ3pBslLjFraNWX8msiJH3uy%2FYHOFU&X-Amz-Signature=bf920b9259c987517850d20e4fb516efc2a9230eaf8ad8486adcde7b160d6908&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3W7OPWU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwdZW%2FjDjdg8XH5Sn7zeFaFubDW%2FV4Hl7k3kJKdyQNgIgZqE7GUtuvMEkEJkUnRIbIoIWZxtgRFuT3YtQPry5Ht4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJiBGFJVgQbz7FJvrSrcA7shnplZwABbq4u0PI9%2B8iaw0AsKruGKc3rC9hJSb1fZxm%2FDbe2AAby2ID7AmtFOn1y%2BVc6%2F4gj59b0BEfb4eugRClI0OfBAVcLS9O2VclopuauBZI1GSyBeKnQE7YZJHMsKhR79%2FLev1DaPjdTylecxrnMFVfp5JdIL6Kt4HFyeIdANQ3RnF%2Bf7%2Fx3gHyXlQHTeAYfBICS1f59XSyWNE3VsuTk4E%2FIhW9ZcFgz7ADSuvTtuDAUHx3%2FM8MTStXTy2gQyRtzWWd1uY8qaUhJ7BLdL9n%2B3mFeraHOcgRiUhzz5NUo4dX8SS57F6mo%2B9qE5uLrzVVGyF43lydarKV6WR5AjZN%2Bj0iYEQGSsTXvhFphQjvRtVSzs08tXF%2BM30aK0jNxvii8FpzvZ23VYRT2%2FM64aCmXso8KmtxXaXowwRVIXFeO7SlodEM5IJeSArMWrtVPTTFLVV3b4GNlAW%2F%2BTACASCYASSgLSACCdhaLurzZ2unekYW0YQ2roQHcbaTbdl2pXYdoEHAKuWQbvVbBNKqGZVlG8Pj8IcGqbqoTHF1nJJaI2lbAnB04qcwEtOm91fkA5pQPc7L3MeijPl8iBJPz3zinyKEoqBAQVYjiknv%2FIFehCBFK6LNiI6f7IMOiB2L4GOqUByGIyRc%2BZYr4%2BOItJrjMQhoX3vXIZPOcfj4MquF3I6rH%2BP5HMLaeE8FCftRlCZTCR1UynEwbFOBZPGq%2FYvD99SEZau9Z6G0gaWKA1XO9ZXXhsUema19XA4zvG4z419Xu4la8Z5DROtAOC4xuf3kaWWCdu0t%2BWO20KTM7Zx%2BwcoY49KjD0A8vdk1SW4kIhv%2FlZ3pBslLjFraNWX8msiJH3uy%2FYHOFU&X-Amz-Signature=6c5dbc24f378c3b55ca79fb3f9fcfb03ae7c91579365c400fa4c48aa079318cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
