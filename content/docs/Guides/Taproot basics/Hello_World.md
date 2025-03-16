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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4J4XBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICt8INkOFS6WKdH16F8v%2BPHWmO5C%2FTAwe3mNiJj%2BhWwYAiEA53ejmUk%2B0j4aLNBRqHyGOJAYh6OsBGBb%2BQ%2BPN4PvQE8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDE%2BAb%2F6RK%2BZ31i1xSrcAx1ETozNKm4Kb5kqxOiwSExonlVvw7CsdFwJO%2BEMKbMh%2Fb75z8VNqRkZcVIAkKK7JYlWHGw7wnKdrzGk%2BaGZPT0cE2GFOcfwqMheooedJkvWm44XLs%2BW835X3cET28YdR8ZgWVUc%2Bv%2BEOYYYHlXQJCY09Rt%2F2%2BH55BHW8Boh1HVNrleq3mAldp93Gec%2B4O4mEjKFvoAUm275FobNsnjheqVDWQxC3iOx7lPQAQI3PlRCOsx0dZVi1kW7DKQmoNs5tRSctTYUYFU2QFUzf7%2FG%2BI2bfcVsMAa6or4KNoD3uWB1f5M%2BIlhiXWJnaAExmVP0DR2xmc8ItbpJ35g%2FKFpjgOpdUS3kMhKXIJv2%2BdZycIRMQNGCSJXulUC%2FNj06XatTUUU8kXSRAW8UGN5oC%2F7qpL%2Bg8LLxwpHjLgf%2Fj5t%2BZNvw4xuHHFNsIKusjvXRnF4HUyReqQtbbtcg6QTr4YFfgDLIwbT%2BaZlSbfVZa2Yr9JaiToHryFwqfS%2BZKXve%2FP%2BuowGbPfVy%2BHzMYWfG%2BOZU365hZOzV2h1bCFIQux8%2FynTO3m54vLOoM2ATLScT34nmJJGkH%2F4rZo3hIBb29e9Uu0079ixne4anFpyWxXPmvo17f1mvdO9S7RKsqPauMNWB2L4GOqUB3viUaxum2Gn6am8YNOSaZGg7j6AuiWX61erVKOrQ%2Bjm2innRyX3tJ17xjY2fX5A8SBMQ3qApiGaVnGLtfWt%2Bbm6JkWpGvbIdAVhX9N0sGGuJwtST7oRycRbGRALnL%2FDe9ILzG7QN1RT%2BaTrLOR%2F%2Fo8ExxS%2FGDJlDImjvz%2BXZunpeT7zpkrM6tpRuFPchSyA3MhasNoCLWK4vOPswf7yE8xeA3GUG&X-Amz-Signature=b1fcd64c5289cea2cf4c3e91a388ad90eeb29bfaf5b601cbf44aaf31a7335d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4J4XBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICt8INkOFS6WKdH16F8v%2BPHWmO5C%2FTAwe3mNiJj%2BhWwYAiEA53ejmUk%2B0j4aLNBRqHyGOJAYh6OsBGBb%2BQ%2BPN4PvQE8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDE%2BAb%2F6RK%2BZ31i1xSrcAx1ETozNKm4Kb5kqxOiwSExonlVvw7CsdFwJO%2BEMKbMh%2Fb75z8VNqRkZcVIAkKK7JYlWHGw7wnKdrzGk%2BaGZPT0cE2GFOcfwqMheooedJkvWm44XLs%2BW835X3cET28YdR8ZgWVUc%2Bv%2BEOYYYHlXQJCY09Rt%2F2%2BH55BHW8Boh1HVNrleq3mAldp93Gec%2B4O4mEjKFvoAUm275FobNsnjheqVDWQxC3iOx7lPQAQI3PlRCOsx0dZVi1kW7DKQmoNs5tRSctTYUYFU2QFUzf7%2FG%2BI2bfcVsMAa6or4KNoD3uWB1f5M%2BIlhiXWJnaAExmVP0DR2xmc8ItbpJ35g%2FKFpjgOpdUS3kMhKXIJv2%2BdZycIRMQNGCSJXulUC%2FNj06XatTUUU8kXSRAW8UGN5oC%2F7qpL%2Bg8LLxwpHjLgf%2Fj5t%2BZNvw4xuHHFNsIKusjvXRnF4HUyReqQtbbtcg6QTr4YFfgDLIwbT%2BaZlSbfVZa2Yr9JaiToHryFwqfS%2BZKXve%2FP%2BuowGbPfVy%2BHzMYWfG%2BOZU365hZOzV2h1bCFIQux8%2FynTO3m54vLOoM2ATLScT34nmJJGkH%2F4rZo3hIBb29e9Uu0079ixne4anFpyWxXPmvo17f1mvdO9S7RKsqPauMNWB2L4GOqUB3viUaxum2Gn6am8YNOSaZGg7j6AuiWX61erVKOrQ%2Bjm2innRyX3tJ17xjY2fX5A8SBMQ3qApiGaVnGLtfWt%2Bbm6JkWpGvbIdAVhX9N0sGGuJwtST7oRycRbGRALnL%2FDe9ILzG7QN1RT%2BaTrLOR%2F%2Fo8ExxS%2FGDJlDImjvz%2BXZunpeT7zpkrM6tpRuFPchSyA3MhasNoCLWK4vOPswf7yE8xeA3GUG&X-Amz-Signature=c8d915d0802b3c7b480b65d5a593ff5a0f20b8d66b4d9fc1306c76521f8a4338&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
