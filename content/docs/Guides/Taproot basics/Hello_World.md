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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633CCRJII%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC7rSIFrWBf%2FY8Py235fgbijS3MgDbvD7fORISBjxGC1QIhAMGsVfW29Gco%2BB3Bvlf2SyjFgv613e6n4nW1V0Pm5ZQnKv8DCHAQABoMNjM3NDIzMTgzODA1Igwnj3%2B5PZ2vQb%2BWu8kq3AOTZbPybN3ZWmQXDZ4T4wImhlNWQHxuc9kaEJxoK4Pu%2BYjYV%2BF3k1wX56gxZIwUNfeazHpzcgIhHQfcHcTBDMB5tyBsV7YQbte%2FlypE6qS9ZbAtYc0c7YIUiVJXurGkXgbF7kuvZeI7Bqb8EYbg%2FMqEvnFbB4T9jTfFnvagTU8uKMnBmYyGOtbrvSaIrbiqYPhczQNf7Oy%2B1zV6fy4g1TZFPgaK3L%2BVByyNBOp7aVuPzgnviJVM%2BZYvthjmSMSJg5RQsHUnx13RzES%2B4CBGEPiX2fJeGuCtsiK9CKboG4y8y3QeVsBgnMwkcP5btTnK%2FQqcje%2FOweGRIIvfwqmwDOtmBFIeBX9NWKGr%2BfPIkFDoFBazyKRGT3IzgPZpmNIkuQqg6F9BQLGdNmcAQt0F%2B98mPim3YzLQf78L3WYzabzb0QXTP%2FKzeTRuWUyd3oipKLtAHoQrmYr%2BFqxJ%2BceNrkxnvX7OM5tG2sI8uw9JSpGBONVlF1A9MUCIh26F9k5bm%2B%2FoAbQvTQTjAXgP9qSnevEzpi%2FX%2F0h6QjhIQYnUy7B5iwD%2BZJX3bCVioH6Wdgf7v02QoH4A8QGPxRiPRzlIg7Uq6qNcZ45DmlPnlKraHGH1%2F%2FJ8E81eqS4d7YXZ6TD2v%2BLDBjqkAUFOnvBGvfLS%2FDgL2ZfleSLbBX4hehJ0irZq4A9tyKnRKNMLUJZRVvhvS5KVWwkEghwGPQBqnY648Ka7WN%2BHEv%2F60hjk4Y6HGNaW6%2FKCc7XrQgj2vWKJC3Xo7O6Iav2kg82W%2FnP6smFwuE6RSDL5K0%2FdfHdvDyINEAWNBy%2Bj9nzQuSaTwanZDzQRDqkdb%2FxENh5LMkqu2WuXhpFs2nrwMW62khNQ&X-Amz-Signature=ff0791d7cffefee93b78b5b8fe59b371119ba3120a0cf4515f0d87bab1fa974c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633CCRJII%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC7rSIFrWBf%2FY8Py235fgbijS3MgDbvD7fORISBjxGC1QIhAMGsVfW29Gco%2BB3Bvlf2SyjFgv613e6n4nW1V0Pm5ZQnKv8DCHAQABoMNjM3NDIzMTgzODA1Igwnj3%2B5PZ2vQb%2BWu8kq3AOTZbPybN3ZWmQXDZ4T4wImhlNWQHxuc9kaEJxoK4Pu%2BYjYV%2BF3k1wX56gxZIwUNfeazHpzcgIhHQfcHcTBDMB5tyBsV7YQbte%2FlypE6qS9ZbAtYc0c7YIUiVJXurGkXgbF7kuvZeI7Bqb8EYbg%2FMqEvnFbB4T9jTfFnvagTU8uKMnBmYyGOtbrvSaIrbiqYPhczQNf7Oy%2B1zV6fy4g1TZFPgaK3L%2BVByyNBOp7aVuPzgnviJVM%2BZYvthjmSMSJg5RQsHUnx13RzES%2B4CBGEPiX2fJeGuCtsiK9CKboG4y8y3QeVsBgnMwkcP5btTnK%2FQqcje%2FOweGRIIvfwqmwDOtmBFIeBX9NWKGr%2BfPIkFDoFBazyKRGT3IzgPZpmNIkuQqg6F9BQLGdNmcAQt0F%2B98mPim3YzLQf78L3WYzabzb0QXTP%2FKzeTRuWUyd3oipKLtAHoQrmYr%2BFqxJ%2BceNrkxnvX7OM5tG2sI8uw9JSpGBONVlF1A9MUCIh26F9k5bm%2B%2FoAbQvTQTjAXgP9qSnevEzpi%2FX%2F0h6QjhIQYnUy7B5iwD%2BZJX3bCVioH6Wdgf7v02QoH4A8QGPxRiPRzlIg7Uq6qNcZ45DmlPnlKraHGH1%2F%2FJ8E81eqS4d7YXZ6TD2v%2BLDBjqkAUFOnvBGvfLS%2FDgL2ZfleSLbBX4hehJ0irZq4A9tyKnRKNMLUJZRVvhvS5KVWwkEghwGPQBqnY648Ka7WN%2BHEv%2F60hjk4Y6HGNaW6%2FKCc7XrQgj2vWKJC3Xo7O6Iav2kg82W%2FnP6smFwuE6RSDL5K0%2FdfHdvDyINEAWNBy%2Bj9nzQuSaTwanZDzQRDqkdb%2FxENh5LMkqu2WuXhpFs2nrwMW62khNQ&X-Amz-Signature=df6627a9924b04f0297d8807741dccc9388dc3c0d88de6c084d40f7428a57218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
