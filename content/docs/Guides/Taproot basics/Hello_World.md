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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UESGYFGB%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCICVFlVpnYP0ULKfHFOyd3Tnontb8ueQEIkWHkcU6jIGCAiB9cys9kOY%2BiR8GuShc8Dlk%2FhS42nlEcnn0%2BBx0QOxPNir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZhbPP7Iok3PfPAm5KtwDle%2FfzeWtsR1q4fZ6gLQDznBxHWPoRhokr6AQt0Lo6hMgEQQaGUmTNAtut7hxXPs19J5rnxqm1JQmvtCiAYefUu3360XC1n2ZgxJakOrDmsJKBEPZYQUVRcjewyIQTHtc2Rjq8MxWS%2BXOwVKNSjcVjp5cbi8eQKL7HGP7w5aI3CbbH%2FxzVX1AJWT0yfGVQSrcXXTaeRUbW9Ejqu%2BCRkmHu52aW%2FF3DSe3MzIwB9OaZG3zbGqKwvoAnmWHtQ%2BiHEqHXQa3O2Q2GbOSEYt0VB0UtBTC8YGOyE3FfKdDbmBaVvidEgQnegce0tWmg2fyWQ3LIXhfhcV8k3wHFEG5QrshQ%2FHcbJL%2FSKCQ57ry9OHoucxYBM0l%2B5eBEL%2BJhUAPOA2%2Bdjcgev5KYxalySCT5QIKu0xWQkO6MEg6iom%2FOl2U50i1mjPTSGMuXAUgDnHrH1zLUDxzQP8L31qUceDwJDxKrAr%2B57cWd9Rwejpl%2FA%2FK675uBHOfJizZdjc6lXInAs2HEGT5nhCjfVZMmva08cyyE5t8wDnfefspao%2BkauRCpTX5XH1D8O6tgfsMFhf0To%2Fz2FtuyLo3WcdBvKQJh%2BWoUWh%2FlQlG5jSeaJzFBoCPw7jQWARQQGYaLVqaUhIwk4yAvgY6pgEaPLJJZI%2BUXlKGQlpTHl%2BicKTV28DLCRq0FCAprzHSOygBR1w91wbX4W24c%2BBN%2FQbYWvM5iDOCNOatM7qqjJOlWQVWjkvL4I9paddqyNZiakBcood5RUCd%2FkGS21ee7iHFOONbvl%2BGEcaWvaLIIF3H61kVDVd%2B2eqxio5JVQ%2BbajSF8yLLA8FQPR8QdH%2F%2FQlVrEsVjqgJWUL9V4wU0W9a3%2BlDAi2LO&X-Amz-Signature=f247abc98f37a957ccd8e3c5b85d9cc42771887e66fe351a997817be230369d6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UESGYFGB%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCICVFlVpnYP0ULKfHFOyd3Tnontb8ueQEIkWHkcU6jIGCAiB9cys9kOY%2BiR8GuShc8Dlk%2FhS42nlEcnn0%2BBx0QOxPNir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZhbPP7Iok3PfPAm5KtwDle%2FfzeWtsR1q4fZ6gLQDznBxHWPoRhokr6AQt0Lo6hMgEQQaGUmTNAtut7hxXPs19J5rnxqm1JQmvtCiAYefUu3360XC1n2ZgxJakOrDmsJKBEPZYQUVRcjewyIQTHtc2Rjq8MxWS%2BXOwVKNSjcVjp5cbi8eQKL7HGP7w5aI3CbbH%2FxzVX1AJWT0yfGVQSrcXXTaeRUbW9Ejqu%2BCRkmHu52aW%2FF3DSe3MzIwB9OaZG3zbGqKwvoAnmWHtQ%2BiHEqHXQa3O2Q2GbOSEYt0VB0UtBTC8YGOyE3FfKdDbmBaVvidEgQnegce0tWmg2fyWQ3LIXhfhcV8k3wHFEG5QrshQ%2FHcbJL%2FSKCQ57ry9OHoucxYBM0l%2B5eBEL%2BJhUAPOA2%2Bdjcgev5KYxalySCT5QIKu0xWQkO6MEg6iom%2FOl2U50i1mjPTSGMuXAUgDnHrH1zLUDxzQP8L31qUceDwJDxKrAr%2B57cWd9Rwejpl%2FA%2FK675uBHOfJizZdjc6lXInAs2HEGT5nhCjfVZMmva08cyyE5t8wDnfefspao%2BkauRCpTX5XH1D8O6tgfsMFhf0To%2Fz2FtuyLo3WcdBvKQJh%2BWoUWh%2FlQlG5jSeaJzFBoCPw7jQWARQQGYaLVqaUhIwk4yAvgY6pgEaPLJJZI%2BUXlKGQlpTHl%2BicKTV28DLCRq0FCAprzHSOygBR1w91wbX4W24c%2BBN%2FQbYWvM5iDOCNOatM7qqjJOlWQVWjkvL4I9paddqyNZiakBcood5RUCd%2FkGS21ee7iHFOONbvl%2BGEcaWvaLIIF3H61kVDVd%2B2eqxio5JVQ%2BbajSF8yLLA8FQPR8QdH%2F%2FQlVrEsVjqgJWUL9V4wU0W9a3%2BlDAi2LO&X-Amz-Signature=5bf5ba452e1929f07268b6bf87c44fd40715ee1a174423e85580000726413137&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
