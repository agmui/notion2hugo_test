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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2RFSNO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBvEbMUVekWM%2B%2B7L71cV9G9cqwcL%2BwrCMO0abyi1wXaAiBny%2FUjZnuipug2fhVFgnSZxMaR9UuYz7LVWcFJ7OvwPiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMASDhO3jBcDHqn9DKKtwD1Ewmm405DjGVEN6PLBqDQOTn60v0wNjb06%2FXw2jDnBlMKF2SmhCJWurxOpEhV5uHrwSRhbE8%2BhCUu27mW5uoVuGNDMTil4B84swLKhOs6Cl1WgTtQALZD6cc6hRAczemGFDNO5PGnWTsQgVg4TWUVJEw0gwe0JLpKpfHCGjAbcJTflzI6TDgYlBZH26w0xGOwXKBsfPW6nPUD0t6EFDblgpWmZZvWJXRh9x8S7%2FiD%2BejQPqvimUc4X0GdlQ0fLrptsP7ulQ95UAcLDzQM3jj8E3jlu%2Fz%2B2sqy0zmJsz8DdovdQ2lZgbAZExZ3J6AmS0v%2FRI%2FMYyQ4Yw1rMsY%2BxsHoNrdk%2F51k2%2FuqflgdoWVLVMjt8jTfKwBUQ5rJzY58CqAGJF2YU1%2BLlOn7EIhqSKznqxlaUI3ci0oHTlAQZyocfKo3jDkHWZM5ejCwdQw2NyaEDf8ztv6k36%2Bc8nkj7beDi9kWmT9Wa8TZY%2BNWsbbhigoo%2FjlpjDgTi%2Bs902xSwVjDEmRv94k%2B4yCEO9mD5rKzPhCWZx0kuUc0IhUNIjZnSCeX0PasVrNHzl2aR2eNBcxdwdMyts0aCEnxlv8vUGqd1VPjVh3xcIJmpTu%2BQnnmNIjHypoqWkYw4HVMjgwk7XMvgY6pgG0u5Hj%2BCsyn2rF%2BESXr9AnKRCjTyrGu39VIAlAXutNa%2BAb7yC0o7%2BpwIUit7J54jE7qrtxopBPBFP742TTGzJuCIsWzLjfEz1b0BslsqHrkXdzf%2Fnv%2BCSPrUw%2FFrC8CDhuH4EAEFXHf0hy3X%2FX9L1qRqSgRC4OFPy3Ezg0%2BTXuYtH%2B%2B%2Bv2nXj5IftcWWoFUD6J6WeF0%2BXMSw7x7DbY5jzUbP3kDNd3&X-Amz-Signature=8d357dcc02f65296a404037a0fbce4c89ba8578488840aba57738716d8c1827e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2RFSNO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBvEbMUVekWM%2B%2B7L71cV9G9cqwcL%2BwrCMO0abyi1wXaAiBny%2FUjZnuipug2fhVFgnSZxMaR9UuYz7LVWcFJ7OvwPiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMASDhO3jBcDHqn9DKKtwD1Ewmm405DjGVEN6PLBqDQOTn60v0wNjb06%2FXw2jDnBlMKF2SmhCJWurxOpEhV5uHrwSRhbE8%2BhCUu27mW5uoVuGNDMTil4B84swLKhOs6Cl1WgTtQALZD6cc6hRAczemGFDNO5PGnWTsQgVg4TWUVJEw0gwe0JLpKpfHCGjAbcJTflzI6TDgYlBZH26w0xGOwXKBsfPW6nPUD0t6EFDblgpWmZZvWJXRh9x8S7%2FiD%2BejQPqvimUc4X0GdlQ0fLrptsP7ulQ95UAcLDzQM3jj8E3jlu%2Fz%2B2sqy0zmJsz8DdovdQ2lZgbAZExZ3J6AmS0v%2FRI%2FMYyQ4Yw1rMsY%2BxsHoNrdk%2F51k2%2FuqflgdoWVLVMjt8jTfKwBUQ5rJzY58CqAGJF2YU1%2BLlOn7EIhqSKznqxlaUI3ci0oHTlAQZyocfKo3jDkHWZM5ejCwdQw2NyaEDf8ztv6k36%2Bc8nkj7beDi9kWmT9Wa8TZY%2BNWsbbhigoo%2FjlpjDgTi%2Bs902xSwVjDEmRv94k%2B4yCEO9mD5rKzPhCWZx0kuUc0IhUNIjZnSCeX0PasVrNHzl2aR2eNBcxdwdMyts0aCEnxlv8vUGqd1VPjVh3xcIJmpTu%2BQnnmNIjHypoqWkYw4HVMjgwk7XMvgY6pgG0u5Hj%2BCsyn2rF%2BESXr9AnKRCjTyrGu39VIAlAXutNa%2BAb7yC0o7%2BpwIUit7J54jE7qrtxopBPBFP742TTGzJuCIsWzLjfEz1b0BslsqHrkXdzf%2Fnv%2BCSPrUw%2FFrC8CDhuH4EAEFXHf0hy3X%2FX9L1qRqSgRC4OFPy3Ezg0%2BTXuYtH%2B%2B%2Bv2nXj5IftcWWoFUD6J6WeF0%2BXMSw7x7DbY5jzUbP3kDNd3&X-Amz-Signature=4dfbb1205aef2a8e4d76ad1e800db3c27642fcb6496f6885b1d1bbba4e02c82b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
