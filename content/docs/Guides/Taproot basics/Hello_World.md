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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64X4OFP%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFzP3clbsnXPjPQmlM9Kwen3v2rIcexmskHB%2B5VgMwidAiAYxowqCWvYyKnyY5%2BL2lC%2BjGpoylMZ0%2BCSzUlbVD5XOyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfun%2Fx9Hv4ZMwDDlGKtwDF1kgc58av%2F0yqWyx42FFrD5P%2FA8Fhj2BDNOtBNIu5pNKgTK3O49sOd50eINzuD4uPTslgmnighnS6%2FMwVG5tA6z%2FxzOMSTd%2BVRY9KVSiDBEhV02BwAe%2Bj%2Fg%2FQztL4iNfey83TdoO5hsXMbirl6ZaydOvjeX1fh9dxIKkpiRvWoiWpHjZWVW9j4Xqyl3WWoAzaB7nE5Md%2BlFE%2FTFh3wNVqWB2XZGBpdpFXG1JadjgVVOgUs0Hg10aHGOHb6FyBv4zWXoJ5Tp4%2Fine8%2Fnsho%2FB9ThnBJ7C1e9NY4h9KKq5fEgAxfYncYBDNgeaDjrZ0GrfacgpWnJhkNCgj6uELXyR2YRKC1rKJwt5i%2BJdhyUinj8RR7gVehtG9eVw8D4FOTvh%2BloqIJFO0vush7%2FSxgfmDlW24n5eCDeIL9tXHHNFABcSSKwqW%2FIMGva%2FsmN8XHDC3EQ8TRQr2fU5zHZN0m5jknhk2gwP085esJMmYRwxRKxhTjvPwLRGRwZF7gfMvttRPTU7gNplSIS0opZrkFovvAOkdcqQEJX3OSC3Oe0wfXNJ3PbAo8DZ7rAZuGGMvNyja1QcwFvRMiueU2KthISnj9ktaGRDps66IO3Tf9snWgAev3RuyV7Drw%2Bc6c0w5IrLywY6pgGTWPBRGO%2Bq2o4D7%2FAbAAQJoPcqKilGIW4Wke1g2sMxs1eBjjVMz8JQ7Y5WlkuyqUuResGnhsQ1%2BZqwZeZb0VGQNe8iycXzhrJgYZT3spr7HZfUyD8Af13mp1%2BTazjQSQnuYtwKfJgy9n9zG%2BqOeO%2F7I8FIKzdKDWT0npiBDmtFWgrYCdvxThlg2NP%2FXt0cF4E7PEGrvl2QyZ8vAOrohqDYnD3fUMMG&X-Amz-Signature=8cf4b0a4a219c1b22d6b2dfdad148f309667882815bb260dc13d16f4ee686cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64X4OFP%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFzP3clbsnXPjPQmlM9Kwen3v2rIcexmskHB%2B5VgMwidAiAYxowqCWvYyKnyY5%2BL2lC%2BjGpoylMZ0%2BCSzUlbVD5XOyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfun%2Fx9Hv4ZMwDDlGKtwDF1kgc58av%2F0yqWyx42FFrD5P%2FA8Fhj2BDNOtBNIu5pNKgTK3O49sOd50eINzuD4uPTslgmnighnS6%2FMwVG5tA6z%2FxzOMSTd%2BVRY9KVSiDBEhV02BwAe%2Bj%2Fg%2FQztL4iNfey83TdoO5hsXMbirl6ZaydOvjeX1fh9dxIKkpiRvWoiWpHjZWVW9j4Xqyl3WWoAzaB7nE5Md%2BlFE%2FTFh3wNVqWB2XZGBpdpFXG1JadjgVVOgUs0Hg10aHGOHb6FyBv4zWXoJ5Tp4%2Fine8%2Fnsho%2FB9ThnBJ7C1e9NY4h9KKq5fEgAxfYncYBDNgeaDjrZ0GrfacgpWnJhkNCgj6uELXyR2YRKC1rKJwt5i%2BJdhyUinj8RR7gVehtG9eVw8D4FOTvh%2BloqIJFO0vush7%2FSxgfmDlW24n5eCDeIL9tXHHNFABcSSKwqW%2FIMGva%2FsmN8XHDC3EQ8TRQr2fU5zHZN0m5jknhk2gwP085esJMmYRwxRKxhTjvPwLRGRwZF7gfMvttRPTU7gNplSIS0opZrkFovvAOkdcqQEJX3OSC3Oe0wfXNJ3PbAo8DZ7rAZuGGMvNyja1QcwFvRMiueU2KthISnj9ktaGRDps66IO3Tf9snWgAev3RuyV7Drw%2Bc6c0w5IrLywY6pgGTWPBRGO%2Bq2o4D7%2FAbAAQJoPcqKilGIW4Wke1g2sMxs1eBjjVMz8JQ7Y5WlkuyqUuResGnhsQ1%2BZqwZeZb0VGQNe8iycXzhrJgYZT3spr7HZfUyD8Af13mp1%2BTazjQSQnuYtwKfJgy9n9zG%2BqOeO%2F7I8FIKzdKDWT0npiBDmtFWgrYCdvxThlg2NP%2FXt0cF4E7PEGrvl2QyZ8vAOrohqDYnD3fUMMG&X-Amz-Signature=61e3af4673c6cfb1f89d30a4f152b000ec42dcdbdba27ececd8cea2dc9aa914f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
