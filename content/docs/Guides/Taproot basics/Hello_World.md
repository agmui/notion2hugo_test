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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWE73YSQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtj4cXMZIxxa4n5%2FZwRksJIbv44a0wjhKl1Qq0BuQHrgIgHUY6zO4lFpNLm6z6f0iTsy%2FrcUUIu7deoLbUrTJqgIoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRltZbDZe%2BnRm17TCrcA%2BsHexvjxr%2FYEEFb32r%2FXWH6nNa%2F%2BWWxTDl1nXas4eJEErEH8bJjii05xBKkLZB%2BOjXasYHbWAeaUhifKIinkViEFrKYsWB4h0diIPYCgqqgx4jxhnK53XJKc2TzNBwStvQ8cfDIKUaD3a9%2Bqs4ZvRu%2BNwsdVquoL7qgMEvXmscYdba3tYToUf9RHFUXSBpDNFsWIetzCJy3xr9Fn2CCTy3NQzXGgdH3D60cxQh0e4RlYXkmE2%2Fan3lN6GWVndEwFd%2FRFJB0K5Ex5ECNXessrVDZ6k7F%2B6dip3RIPDP8ZJK5qGomV9x9cpD7G0WXS%2FKe4YQDBN67NI0eYHqpIulJIQFpfTDm7QEQ3xmRB%2BKWGg8t%2BpxwW%2BacjH9uqj80K1ObYtsSw8uEnDvA3V9Z2H9CFeOauWPNysB1czJz2w0bUsKRgWlGGrmQV%2B9j8%2FVZc%2Bfnobi453W84HgOpTeeuDVZoVKctGJE1lRlYNuynfsC0o827nW3M0UyKQRd8QkqjJ4SapUEdOqEPXxYn0O7ToupGhFVJpjAcmeVGW8ixORxyiKPBmd7m2Ts4KZ3kVo52ihWq5PCAQJjEKE02S0YyqWhhFcY%2FCGKViwaeKqVNCVgqw2WW5MnB0bA%2F4xqlXmCMNWd%2FLwGOqUBKZICmbVZ%2FdmeZOvxW1iAnzP4WXEDv2Wl2P9kGPO4qEkyRhyqB0TMDEa830MFvO4iUN7fhsuoalbehGY24zCH782bLkqrW9mlDslJtXdIKPdFutPaV23TkCK7jv%2FQDMtHgMv3jhGkA4Sy8xl0KLnMStSnoHf324YPNPFRkNyaucRia%2B01kO7QZ6ODBVmDgka2uZT6KJiX16srn1o%2BOlbzgsTeW%2FCY&X-Amz-Signature=d716a03e9064aaecfc65e288f000eafc889396bc8937791c656597ced86b5171&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWE73YSQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtj4cXMZIxxa4n5%2FZwRksJIbv44a0wjhKl1Qq0BuQHrgIgHUY6zO4lFpNLm6z6f0iTsy%2FrcUUIu7deoLbUrTJqgIoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRltZbDZe%2BnRm17TCrcA%2BsHexvjxr%2FYEEFb32r%2FXWH6nNa%2F%2BWWxTDl1nXas4eJEErEH8bJjii05xBKkLZB%2BOjXasYHbWAeaUhifKIinkViEFrKYsWB4h0diIPYCgqqgx4jxhnK53XJKc2TzNBwStvQ8cfDIKUaD3a9%2Bqs4ZvRu%2BNwsdVquoL7qgMEvXmscYdba3tYToUf9RHFUXSBpDNFsWIetzCJy3xr9Fn2CCTy3NQzXGgdH3D60cxQh0e4RlYXkmE2%2Fan3lN6GWVndEwFd%2FRFJB0K5Ex5ECNXessrVDZ6k7F%2B6dip3RIPDP8ZJK5qGomV9x9cpD7G0WXS%2FKe4YQDBN67NI0eYHqpIulJIQFpfTDm7QEQ3xmRB%2BKWGg8t%2BpxwW%2BacjH9uqj80K1ObYtsSw8uEnDvA3V9Z2H9CFeOauWPNysB1czJz2w0bUsKRgWlGGrmQV%2B9j8%2FVZc%2Bfnobi453W84HgOpTeeuDVZoVKctGJE1lRlYNuynfsC0o827nW3M0UyKQRd8QkqjJ4SapUEdOqEPXxYn0O7ToupGhFVJpjAcmeVGW8ixORxyiKPBmd7m2Ts4KZ3kVo52ihWq5PCAQJjEKE02S0YyqWhhFcY%2FCGKViwaeKqVNCVgqw2WW5MnB0bA%2F4xqlXmCMNWd%2FLwGOqUBKZICmbVZ%2FdmeZOvxW1iAnzP4WXEDv2Wl2P9kGPO4qEkyRhyqB0TMDEa830MFvO4iUN7fhsuoalbehGY24zCH782bLkqrW9mlDslJtXdIKPdFutPaV23TkCK7jv%2FQDMtHgMv3jhGkA4Sy8xl0KLnMStSnoHf324YPNPFRkNyaucRia%2B01kO7QZ6ODBVmDgka2uZT6KJiX16srn1o%2BOlbzgsTeW%2FCY&X-Amz-Signature=acd263383ba521c66bacc862e69fe338d71ebafb5340d937bf13b5d775b31a74&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
