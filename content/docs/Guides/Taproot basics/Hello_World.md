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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R463463I%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDga86roY7brg%2BmOHput4WR2tMUK9fp%2FwLg7HrIgeWcwAIgVzVmMBdMk%2FNzUhMo5GVK1Y29M7qgVsskTmmxXKdQn28q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOnfwCdOIrzprMr%2BnircA9ovZmO%2FwgscAePYQ%2FR86ffysBdweWC1kHi1pFfDnluVY0F6bOQ8ETgV2lX21yvorcIAW73gTW4Nx%2FbfmCNCezTiplSYajgzme25qvXL4shChouDYlwRKnHRSlriSwHnS1H%2BiOsqGFIlw3CwrRGhRB2bTRKaUuvNftE52jnknFxw3vowuncNUtjqVuMJoEwPRcWKGmwJzErrfjJm3QRQgN5SuiiIOcAwMs9k00LjvPfqZajuZ8uiwL8dOUInuXvxwGuPZ%2Bc5vrIhGUzH8Ui5MJ0XAEQCBUprNTb%2BJmwIJXMrzP0i2BTFPTmVwj798h%2BT%2B%2BFKZ90DROVpl50VNC13cpqN58jDJ58a4x3ls2Oua%2BTBzrlyspZFQsP1Vbq7PmRGjsnI8rV4xtk7Ny8jGC6ikIxGEzis8YRFWUKTNZohPP%2BOpORyAClborOe%2FWo9t3A9LOKqowoc1hMMx%2FrUcR0Q9OalAKnU%2Fl6pd3q4%2BM2ofZvpMK6jQ8K%2FcdxO56jYmPOjyBY4xmoJy6KRrsu9M7Zq11FKt2JR2XKQTK2HENF7lm4eqFth4SJVGkqKPOmpOyrCV3zSqGnaKiQRQRzh9i2XFnVftotqg2Gg2nfGnUs6CFAoaNRwpvZ0zwAjn%2BF5MOzTkcEGOqUBM5RN%2BktrL4eYPX%2Bku7dasQpe5xoNJMtgUYIr2qVhIXwPNkLcNndNopZAAi%2FcImW5tkPnXrFGGtx0WgW1F0SeAl1t%2B0y63g2HXTN908BnFLfmXb6Fe2EtnXjnP8KxjRdv6epshqxRAZDZ3LP1K0mY0cqKvlNZzg95KxI4tJcxYMdaD22n0ZcdLrSl1HFcuwMI%2B49pCKV3QXEdYYP6kouNhPccWE1c&X-Amz-Signature=49148a8a02aca086d7515d598759692a81f7851bdc2b3a632489fdff4b4c818a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R463463I%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDga86roY7brg%2BmOHput4WR2tMUK9fp%2FwLg7HrIgeWcwAIgVzVmMBdMk%2FNzUhMo5GVK1Y29M7qgVsskTmmxXKdQn28q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOnfwCdOIrzprMr%2BnircA9ovZmO%2FwgscAePYQ%2FR86ffysBdweWC1kHi1pFfDnluVY0F6bOQ8ETgV2lX21yvorcIAW73gTW4Nx%2FbfmCNCezTiplSYajgzme25qvXL4shChouDYlwRKnHRSlriSwHnS1H%2BiOsqGFIlw3CwrRGhRB2bTRKaUuvNftE52jnknFxw3vowuncNUtjqVuMJoEwPRcWKGmwJzErrfjJm3QRQgN5SuiiIOcAwMs9k00LjvPfqZajuZ8uiwL8dOUInuXvxwGuPZ%2Bc5vrIhGUzH8Ui5MJ0XAEQCBUprNTb%2BJmwIJXMrzP0i2BTFPTmVwj798h%2BT%2B%2BFKZ90DROVpl50VNC13cpqN58jDJ58a4x3ls2Oua%2BTBzrlyspZFQsP1Vbq7PmRGjsnI8rV4xtk7Ny8jGC6ikIxGEzis8YRFWUKTNZohPP%2BOpORyAClborOe%2FWo9t3A9LOKqowoc1hMMx%2FrUcR0Q9OalAKnU%2Fl6pd3q4%2BM2ofZvpMK6jQ8K%2FcdxO56jYmPOjyBY4xmoJy6KRrsu9M7Zq11FKt2JR2XKQTK2HENF7lm4eqFth4SJVGkqKPOmpOyrCV3zSqGnaKiQRQRzh9i2XFnVftotqg2Gg2nfGnUs6CFAoaNRwpvZ0zwAjn%2BF5MOzTkcEGOqUBM5RN%2BktrL4eYPX%2Bku7dasQpe5xoNJMtgUYIr2qVhIXwPNkLcNndNopZAAi%2FcImW5tkPnXrFGGtx0WgW1F0SeAl1t%2B0y63g2HXTN908BnFLfmXb6Fe2EtnXjnP8KxjRdv6epshqxRAZDZ3LP1K0mY0cqKvlNZzg95KxI4tJcxYMdaD22n0ZcdLrSl1HFcuwMI%2B49pCKV3QXEdYYP6kouNhPccWE1c&X-Amz-Signature=d81c6ac47906ea99b5c62ed8087bc99001ee538872efe8dedf9cf6a31f70bf23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
