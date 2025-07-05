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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DY2QM42%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGNmjfPYyUrrOOUKMMPqk%2FBo0%2BER56XOqmoq4iQSy68DAiEAsq%2FoWghoVkl51xVqAV0Hk5VyLIadHAcbVTDV%2FBoFL9Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIF%2BqJzP%2FYEJ%2Ft6ddyrcA1fKH6JSvznq3pEtYlZZ0wbcgkGuacLWLnTZWFLjTY80yjUaa3eO6JgNStdLKYuE3KknBvUQfBa%2FPa1S%2FX3kMlYrhKQWsU45MYFs8qM%2FUBdJ9GVGFNJuESXD8FrhcbBYIpMZcWCLY5zAogxxFOtzk4iNutafgaGXRmPGWNT8jttL06on9PChUoYLnc1BOhtrKsmtttRg7ZO%2BD6X4NJJl1T7mYOpnF3iud0Me8Z7TZL5%2FfG1p3h%2BNX2oXVTk02apVW3rN9SJEYFmnBxrSWQot6vqD6frt0aD%2FJBVqELNLCsb34FA2dcGwGMpYZqoKEcscz%2BTbspIoJSvol1sj%2BPSOZywIOTuNlwmRt60zlCrH6yBsEYRRXsHhjeLcpRTPejrqQDQYKLsN6elTC%2B5BZD3%2FjO8%2BtRQ%2BYjFZu8C4PgozDjCpl7YApQDdxvN%2BbQG4gkH3jwwC2zUaODFvC4560LpRLCqj9e7IxSGQZP%2FV9OMtlFOsjeGFKSLbZRFGzLkcwOqLROdWsa0%2FOl9reYOX7IjBoFJug4jKoNp3Y%2BXPAdVevwvNeRHztDvrUAJhdbt7EyNULGsRzwcz8Vjmf0XaNBXGdYspfs4nhWWZk67jVp6XNZvJwVt2m%2FQDOYX6ZRFKMLCso8MGOqUBoaPvjl4cAhhVPPiaHtRAB0Ej0gzPsh6aI5ycMppf4jxpnBV85LcS6WTwEDcEeUkxufUxaRc2mcrqjUBzpw61QWK5iSMPlJA12KDHtinveuaXlWPOJCK0PvvUS5MCdruiBg8oQWwTxsCDFWqN2BCAFsabJsGm81wy2mFl64xGey3VgwizkmBqxqGWLEyP08KaUguAXGXDKJlrN5GpAiAXwVpVyI0k&X-Amz-Signature=253055285856db799dc3f672ada2955b3d57440ca958d1d425ee4799d9dcc575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DY2QM42%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGNmjfPYyUrrOOUKMMPqk%2FBo0%2BER56XOqmoq4iQSy68DAiEAsq%2FoWghoVkl51xVqAV0Hk5VyLIadHAcbVTDV%2FBoFL9Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIF%2BqJzP%2FYEJ%2Ft6ddyrcA1fKH6JSvznq3pEtYlZZ0wbcgkGuacLWLnTZWFLjTY80yjUaa3eO6JgNStdLKYuE3KknBvUQfBa%2FPa1S%2FX3kMlYrhKQWsU45MYFs8qM%2FUBdJ9GVGFNJuESXD8FrhcbBYIpMZcWCLY5zAogxxFOtzk4iNutafgaGXRmPGWNT8jttL06on9PChUoYLnc1BOhtrKsmtttRg7ZO%2BD6X4NJJl1T7mYOpnF3iud0Me8Z7TZL5%2FfG1p3h%2BNX2oXVTk02apVW3rN9SJEYFmnBxrSWQot6vqD6frt0aD%2FJBVqELNLCsb34FA2dcGwGMpYZqoKEcscz%2BTbspIoJSvol1sj%2BPSOZywIOTuNlwmRt60zlCrH6yBsEYRRXsHhjeLcpRTPejrqQDQYKLsN6elTC%2B5BZD3%2FjO8%2BtRQ%2BYjFZu8C4PgozDjCpl7YApQDdxvN%2BbQG4gkH3jwwC2zUaODFvC4560LpRLCqj9e7IxSGQZP%2FV9OMtlFOsjeGFKSLbZRFGzLkcwOqLROdWsa0%2FOl9reYOX7IjBoFJug4jKoNp3Y%2BXPAdVevwvNeRHztDvrUAJhdbt7EyNULGsRzwcz8Vjmf0XaNBXGdYspfs4nhWWZk67jVp6XNZvJwVt2m%2FQDOYX6ZRFKMLCso8MGOqUBoaPvjl4cAhhVPPiaHtRAB0Ej0gzPsh6aI5ycMppf4jxpnBV85LcS6WTwEDcEeUkxufUxaRc2mcrqjUBzpw61QWK5iSMPlJA12KDHtinveuaXlWPOJCK0PvvUS5MCdruiBg8oQWwTxsCDFWqN2BCAFsabJsGm81wy2mFl64xGey3VgwizkmBqxqGWLEyP08KaUguAXGXDKJlrN5GpAiAXwVpVyI0k&X-Amz-Signature=5ba00bd9c9e18abe263c34ae37e41d8afed01e8195189a4d66ae67efc2ec244e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
