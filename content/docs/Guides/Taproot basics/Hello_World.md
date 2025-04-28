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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAME44S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAB8l2oSaGdJdN5rnlg5IUtfaxHBif%2BE0xWrLeeR%2BqIQIhAPRAyulKAaH4LUXk2fSMldzAZOHPmptqd8GMho4Kf9ehKv8DCH8QABoMNjM3NDIzMTgzODA1IgyZS1ycmQI5DHxWO%2FEq3ANP4KwkAuBP5zIYTscOtMHXAoHd4QFwW%2BRv55g%2BSaoESnc8a4cUf%2FaOHn1hy2Zs7DFzWTw4PgmVCVSIxaV3RuqnBZCOH4i7nl%2FWgkQ%2BHx3r%2BZwY0bhJWKi1NBQiJrni51AQcoYV2WnISdmDBogQLO5uIwRjpGIwEStLppPdVff%2FEBbDRlZsQg07CODvT2DeexmGuM5kJfWIfIobX%2BdPfkq6iDGOmGFZudw3V0jhwQFcmj%2FV6PJ1g08mXnTVcZCdSWO5jPZbYwKIwUHNuejmHEluYKKawFgzTAvbmQ%2B3NLBknmuEh%2Fc8Wsx1zVoanZYUGh2%2ByiPvaRZMky0KHMr1%2FmQ4emDs3JVlqAquEkreKLhcffvv24vifgac1A4idweQggpHXX9Mt3FebcbEhZkb71J8jHNm1F9G%2BpuglcEJrKN7u3x2WOIZqSMZNcxWTDsnJk1OH5OJ9KoFGxdYfD7ZBW6N2rvmVPB2Kk4sDOXTt8MMcxdGt4%2BAWGiAFH4wigUStlUO4nnHiXZ5N%2FF8KBrVWPaDiHGi7ffpIQjKs5ejYIa5jGTVH0nK1b2C3LQc4jeo9PK8yGWYog1YlzJKYey8ZAHxsV8rBGCiWQLL968HbGNY8Ui9SnKAshzd%2Bq7C7TD77L%2FABjqkAWMK2OsXpE0yBWQR7dxh0d69NDBRPVsgvi2bXubfHYc4VXiNIjdmY%2BpAWqxACZJnTg3geXdeHSalWSTZxMksZGFYvY%2BJ4PyEW2VjmU8PlXhXlBA7Gmo2ze5HLPR9MGM4bgSt%2BQDEmNTbA%2BMY%2F0%2F%2FDOmVcfKG0yFDCub9MTYJ7%2FusXjHsoDixRCbkJ4pslUrqsoKFNWxlcn3sWUfsGCeH1qzCVD9k&X-Amz-Signature=c948bc6f7bf9b7208895671d4db5f3e70c50838c0d9955c3f3e203732bf7eced&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAME44S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAB8l2oSaGdJdN5rnlg5IUtfaxHBif%2BE0xWrLeeR%2BqIQIhAPRAyulKAaH4LUXk2fSMldzAZOHPmptqd8GMho4Kf9ehKv8DCH8QABoMNjM3NDIzMTgzODA1IgyZS1ycmQI5DHxWO%2FEq3ANP4KwkAuBP5zIYTscOtMHXAoHd4QFwW%2BRv55g%2BSaoESnc8a4cUf%2FaOHn1hy2Zs7DFzWTw4PgmVCVSIxaV3RuqnBZCOH4i7nl%2FWgkQ%2BHx3r%2BZwY0bhJWKi1NBQiJrni51AQcoYV2WnISdmDBogQLO5uIwRjpGIwEStLppPdVff%2FEBbDRlZsQg07CODvT2DeexmGuM5kJfWIfIobX%2BdPfkq6iDGOmGFZudw3V0jhwQFcmj%2FV6PJ1g08mXnTVcZCdSWO5jPZbYwKIwUHNuejmHEluYKKawFgzTAvbmQ%2B3NLBknmuEh%2Fc8Wsx1zVoanZYUGh2%2ByiPvaRZMky0KHMr1%2FmQ4emDs3JVlqAquEkreKLhcffvv24vifgac1A4idweQggpHXX9Mt3FebcbEhZkb71J8jHNm1F9G%2BpuglcEJrKN7u3x2WOIZqSMZNcxWTDsnJk1OH5OJ9KoFGxdYfD7ZBW6N2rvmVPB2Kk4sDOXTt8MMcxdGt4%2BAWGiAFH4wigUStlUO4nnHiXZ5N%2FF8KBrVWPaDiHGi7ffpIQjKs5ejYIa5jGTVH0nK1b2C3LQc4jeo9PK8yGWYog1YlzJKYey8ZAHxsV8rBGCiWQLL968HbGNY8Ui9SnKAshzd%2Bq7C7TD77L%2FABjqkAWMK2OsXpE0yBWQR7dxh0d69NDBRPVsgvi2bXubfHYc4VXiNIjdmY%2BpAWqxACZJnTg3geXdeHSalWSTZxMksZGFYvY%2BJ4PyEW2VjmU8PlXhXlBA7Gmo2ze5HLPR9MGM4bgSt%2BQDEmNTbA%2BMY%2F0%2F%2FDOmVcfKG0yFDCub9MTYJ7%2FusXjHsoDixRCbkJ4pslUrqsoKFNWxlcn3sWUfsGCeH1qzCVD9k&X-Amz-Signature=c9178506599c6b9170bbcb4ee399b1d615f3846983b44730f19fd76355c9ccdb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
