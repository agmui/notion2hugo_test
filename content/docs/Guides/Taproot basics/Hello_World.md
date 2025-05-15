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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFM3SDEB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAi3PTTWQzbicHVrxYS%2FIzzkG9g7v%2F6uprMR9yThhK4BAiBhqucUtePjX4zfZOC5Zvc%2F5rq0jwPrUYj4k3A8n1P3ESr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMDRfZkKNMPI3xhHpvKtwDO3vER73RrSu0WSKSghxozd30c3K2xQbyF6PvxwsfWTCbNTFrIaCzWlVAOhk52zax3ktdzF30IEuhTjpIbm9Kq%2Fbd4JTOdEfQbqQKKBvgGBbhW74PjiZoonYP5idXlrcm7sJMcQLNJ71GvTQ1eFts%2B4AfAYiBRRZ6bu%2BJd8geAGYbxMoeevHslz2Um2WiWWv1G%2F5ExXLFdzNXwJ94XnAi95RPinxNheSW3l2jjVnFrIneadJJGcavYZbPQPWlzZIHtzLfFt33atTbbUELVdLxH%2BAG%2BnG3gRo6Ce0MCZKLm7Afra5TBak7R6G2caQKlHdUoyc7FQk395ZSfT8yAn96B0NHW9PBQFmqhwi7t%2BZNOZJCRSUYgbv8pIouDJpjdp3u5H%2BhQHzarFRMhETqUOexJqM%2F1Kw%2FsFPxWDGtaizsIpJmEW5qA3SIXn7XyuxkLr3PS2K22QMbaS1QsFoRLLzYI%2FySSAx2BUkllpBCW3vWLSbH7QxxxdFl%2B9ySYj6lrr9y52%2FWRUZHTnHqaZKfQwWIE%2BrxP%2FTJoSQ%2BTgzLKR1ncGszXhepkVPE7w%2FRJGt89HlV14bcm5HbVI6LDoqDFZoL6LPnglundqtx%2Fm0tdt%2BTaGKxbZHjLvhWY%2F%2FLyw0w37qXwQY6pgGdbclFKBtiRlEzTcA858nsGf5Zu3r40tpWGI6UN5eM8uiymEx3Mw%2FfRuxpkI18D36J0YJcbAQXadUh2mxuys8aAp%2Fpnh%2BIhGUDDQ4MQz5xd%2BoKk5FCdpDwZlSDDHW2WhcX07atAnQCqQYmz5mcCGtiHLspeVd9xi1ZhdLCghflXtLmvaH6LIHrmIIGb%2FdP%2FjQQ6KKc4x%2BvTesmfm2GogFrk1qQOjOs&X-Amz-Signature=64b5eddc2c999af95f62e19c2e13603d6e389bc12c00decbb72b532be1da9701&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFM3SDEB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAi3PTTWQzbicHVrxYS%2FIzzkG9g7v%2F6uprMR9yThhK4BAiBhqucUtePjX4zfZOC5Zvc%2F5rq0jwPrUYj4k3A8n1P3ESr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMDRfZkKNMPI3xhHpvKtwDO3vER73RrSu0WSKSghxozd30c3K2xQbyF6PvxwsfWTCbNTFrIaCzWlVAOhk52zax3ktdzF30IEuhTjpIbm9Kq%2Fbd4JTOdEfQbqQKKBvgGBbhW74PjiZoonYP5idXlrcm7sJMcQLNJ71GvTQ1eFts%2B4AfAYiBRRZ6bu%2BJd8geAGYbxMoeevHslz2Um2WiWWv1G%2F5ExXLFdzNXwJ94XnAi95RPinxNheSW3l2jjVnFrIneadJJGcavYZbPQPWlzZIHtzLfFt33atTbbUELVdLxH%2BAG%2BnG3gRo6Ce0MCZKLm7Afra5TBak7R6G2caQKlHdUoyc7FQk395ZSfT8yAn96B0NHW9PBQFmqhwi7t%2BZNOZJCRSUYgbv8pIouDJpjdp3u5H%2BhQHzarFRMhETqUOexJqM%2F1Kw%2FsFPxWDGtaizsIpJmEW5qA3SIXn7XyuxkLr3PS2K22QMbaS1QsFoRLLzYI%2FySSAx2BUkllpBCW3vWLSbH7QxxxdFl%2B9ySYj6lrr9y52%2FWRUZHTnHqaZKfQwWIE%2BrxP%2FTJoSQ%2BTgzLKR1ncGszXhepkVPE7w%2FRJGt89HlV14bcm5HbVI6LDoqDFZoL6LPnglundqtx%2Fm0tdt%2BTaGKxbZHjLvhWY%2F%2FLyw0w37qXwQY6pgGdbclFKBtiRlEzTcA858nsGf5Zu3r40tpWGI6UN5eM8uiymEx3Mw%2FfRuxpkI18D36J0YJcbAQXadUh2mxuys8aAp%2Fpnh%2BIhGUDDQ4MQz5xd%2BoKk5FCdpDwZlSDDHW2WhcX07atAnQCqQYmz5mcCGtiHLspeVd9xi1ZhdLCghflXtLmvaH6LIHrmIIGb%2FdP%2FjQQ6KKc4x%2BvTesmfm2GogFrk1qQOjOs&X-Amz-Signature=9b810d41bc05a5d488a92c4cb02844a54d937620d6c1c3f3b7ec457fb09997f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
