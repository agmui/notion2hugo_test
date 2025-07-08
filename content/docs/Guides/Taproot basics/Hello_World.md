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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCPNEOI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2nEMJWnf99aTR9P0xEb8mrT6hmK3a%2BIpoRGh4ZsMTAiBFoQLXI4by92mGclBSN5n03E33l3nrOnOoPoZ%2BC%2BZ0rCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8KGXAD76QbfMCaD5KtwDXi4baTkm1pqXFEWsyu1f4KYmn7H6L7sDY6d88aUS83qwpBEsGv5GzQZoTbvvgCFQHHrmky%2BBxwlvvpswsailAWaKRG6JceWqeIB2eXktXN8o%2BHIGf1IpE%2BRdxMZh37yE68sSfOQm1yzg6mCKped9G%2BU9KI3dKfoOyiOJ12IVQUrtcfUvEwz9zrNnVr3ScRlrfy2rWhS2R6K9nWn9VUsQzLgjY55ROBuShDBrdHR5kWTkOSeo8AwA8KuukCd18%2BbgS%2FYMyFppr3%2Buntt1hYEemegLJDVXo2JIMc6IuuCJMp90vE9cQg4u2VqR0RH3a%2Fo6n04K1rf3fdtZG%2BQPaNaXVI%2Bj1%2FahzWgux95krwc0KoU5Nv1DgRPMj5Corwy6txIK%2BSwZbEEXe8kCMG4abSGOMxviSLKGkkbJE8y3ssz%2BuIhLE5ewnUpJhSIfyrbMcXUJJKqRSzwj1ManrRdO9bZ9Ll7TNrW9z1PnbrEz9yYE1MUiRvrCRHDhz%2FD2EQT%2B%2FBkpNYx7rDVajXGF2di%2FzZzPqWrIeyLICF9gCxu8ttJOHBOTxYUfQN6GETXw1JKWJZ0CKnt8tgffWp0GQuwsX5dHIvm6tqEayuUE9nswBXNMQLH6r9vjI%2BSsyzOxmicwrsizwwY6pgGCWSt9gmOSSEPzkUUHbKmOtsS7pyzcZp79ZEW1JIQNUgszUv5NN9Qpxw5gUXT7tJtj4eRz8H5Nzgvr7UAhGnDwJFywDXlm1RXJKUdJXCsyY1o3AD8B1PA03OvvFHtlMop1XexOaw4mT7g1v2Yd6AN3QkdciMXEl69jVyf48AeswjZVLXZm6co6gZFpBp82aGvZU11s6Xsdx0tk8Q23AAdmQh43Hbjq&X-Amz-Signature=d357f23af281875fd75ea4756ebc9da4f0c1af49f194466789eb5018a340f63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCPNEOI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2nEMJWnf99aTR9P0xEb8mrT6hmK3a%2BIpoRGh4ZsMTAiBFoQLXI4by92mGclBSN5n03E33l3nrOnOoPoZ%2BC%2BZ0rCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8KGXAD76QbfMCaD5KtwDXi4baTkm1pqXFEWsyu1f4KYmn7H6L7sDY6d88aUS83qwpBEsGv5GzQZoTbvvgCFQHHrmky%2BBxwlvvpswsailAWaKRG6JceWqeIB2eXktXN8o%2BHIGf1IpE%2BRdxMZh37yE68sSfOQm1yzg6mCKped9G%2BU9KI3dKfoOyiOJ12IVQUrtcfUvEwz9zrNnVr3ScRlrfy2rWhS2R6K9nWn9VUsQzLgjY55ROBuShDBrdHR5kWTkOSeo8AwA8KuukCd18%2BbgS%2FYMyFppr3%2Buntt1hYEemegLJDVXo2JIMc6IuuCJMp90vE9cQg4u2VqR0RH3a%2Fo6n04K1rf3fdtZG%2BQPaNaXVI%2Bj1%2FahzWgux95krwc0KoU5Nv1DgRPMj5Corwy6txIK%2BSwZbEEXe8kCMG4abSGOMxviSLKGkkbJE8y3ssz%2BuIhLE5ewnUpJhSIfyrbMcXUJJKqRSzwj1ManrRdO9bZ9Ll7TNrW9z1PnbrEz9yYE1MUiRvrCRHDhz%2FD2EQT%2B%2FBkpNYx7rDVajXGF2di%2FzZzPqWrIeyLICF9gCxu8ttJOHBOTxYUfQN6GETXw1JKWJZ0CKnt8tgffWp0GQuwsX5dHIvm6tqEayuUE9nswBXNMQLH6r9vjI%2BSsyzOxmicwrsizwwY6pgGCWSt9gmOSSEPzkUUHbKmOtsS7pyzcZp79ZEW1JIQNUgszUv5NN9Qpxw5gUXT7tJtj4eRz8H5Nzgvr7UAhGnDwJFywDXlm1RXJKUdJXCsyY1o3AD8B1PA03OvvFHtlMop1XexOaw4mT7g1v2Yd6AN3QkdciMXEl69jVyf48AeswjZVLXZm6co6gZFpBp82aGvZU11s6Xsdx0tk8Q23AAdmQh43Hbjq&X-Amz-Signature=a7a6a9c466b847a2325b731ae9d992db256af48c26fc3a842e3a4992be3a572f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
