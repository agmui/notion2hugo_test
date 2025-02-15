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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WBAY7ZL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDaw%2Bs%2Bmoathtrvw%2BAEBxsftLQS2hxmqzwwaUxeyhaHSgIgPVX%2Bwe4f2RRlUsZankegX52nGnQx6mfg7gvsPJGa9xEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDH%2Fo8gDQgn2ia5gadircAxQRjo%2B13t4Wr%2BKss6ujow9miLbevAZ0dlzQ%2BRhNGpObvqPuSILshfKDp7hzMksLIvnNh1wUrQdP%2BJ2jDlUFIat95cdTSSqERT4onZWcwuV4P4iicAyKnD2g0NP%2FBVQaoPVM8ClPdMFjVh4xLc%2BkoEnQjl3njGa9f4ZuJZPdD6uC3328szki%2BQje3fxECAWamWwtUhQX7gp3WKm97%2F2Pim%2FNhZnsgnGNKdmFqXaOwUNTBWLQ4cwbugRpw8%2FD23D2PK4haOUFkkK%2Bzw8EQxdobxV226sdShhwAXq50gt7SVYzSz2QQtQerVFKOw0sJDl51B0%2FZ%2BW%2FtHkiMqg8kX%2BATxDNtKbmaJi3rVtmhPMs3Orl2CwGYFDrydyGJoieb900vWorMNUhMPsNX2ciB1IfcmYnBxeKgPiiwzxf8mIslzkKCnOILMWHI3QgagQkSqIcrOhSbCk%2FPNmEN4BkOtUIlFaMpcdaeQdnzhFIJVI7h5yO%2B7%2BNbmG97ePc9t%2FGZ3cndCYTn7o%2BY91Ubyv1nzmdNgNnwQBUzHFzUJAEg0cWchL3gWT%2Frl2pidEWm0LP45xQwK8tkeT33aXXsErh8BMzpWFnHRKbamqDC%2Fi2FNy3kMQMqeHaokKCOEJbRdgbMOaQxL0GOqUBiczONtqp3lKd6DmHj7fBzXB5sXRgphtavzQUdb4DZwYFw3x6cJ1QCWv21VIn44kgkS1NMhmiWYpRh4hJhcRTYi1%2BiyRNru7mtYY2XNZIwTNRGBcQ%2BULa6eX%2Fsbb54HbnxmCqaNoit3u4Z5ZCnyj9gZebFiL3MqeZD5iIe67XCmPCx%2BgtYW0vLLe1EyCu3romAgjYys70HmKDTJk329ros%2BpFsPwV&X-Amz-Signature=bfaf8b82031d5d86f10f763cf9d97614f4fb6bba0dbd04aebbfbead9d885ec9c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WBAY7ZL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDaw%2Bs%2Bmoathtrvw%2BAEBxsftLQS2hxmqzwwaUxeyhaHSgIgPVX%2Bwe4f2RRlUsZankegX52nGnQx6mfg7gvsPJGa9xEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDH%2Fo8gDQgn2ia5gadircAxQRjo%2B13t4Wr%2BKss6ujow9miLbevAZ0dlzQ%2BRhNGpObvqPuSILshfKDp7hzMksLIvnNh1wUrQdP%2BJ2jDlUFIat95cdTSSqERT4onZWcwuV4P4iicAyKnD2g0NP%2FBVQaoPVM8ClPdMFjVh4xLc%2BkoEnQjl3njGa9f4ZuJZPdD6uC3328szki%2BQje3fxECAWamWwtUhQX7gp3WKm97%2F2Pim%2FNhZnsgnGNKdmFqXaOwUNTBWLQ4cwbugRpw8%2FD23D2PK4haOUFkkK%2Bzw8EQxdobxV226sdShhwAXq50gt7SVYzSz2QQtQerVFKOw0sJDl51B0%2FZ%2BW%2FtHkiMqg8kX%2BATxDNtKbmaJi3rVtmhPMs3Orl2CwGYFDrydyGJoieb900vWorMNUhMPsNX2ciB1IfcmYnBxeKgPiiwzxf8mIslzkKCnOILMWHI3QgagQkSqIcrOhSbCk%2FPNmEN4BkOtUIlFaMpcdaeQdnzhFIJVI7h5yO%2B7%2BNbmG97ePc9t%2FGZ3cndCYTn7o%2BY91Ubyv1nzmdNgNnwQBUzHFzUJAEg0cWchL3gWT%2Frl2pidEWm0LP45xQwK8tkeT33aXXsErh8BMzpWFnHRKbamqDC%2Fi2FNy3kMQMqeHaokKCOEJbRdgbMOaQxL0GOqUBiczONtqp3lKd6DmHj7fBzXB5sXRgphtavzQUdb4DZwYFw3x6cJ1QCWv21VIn44kgkS1NMhmiWYpRh4hJhcRTYi1%2BiyRNru7mtYY2XNZIwTNRGBcQ%2BULa6eX%2Fsbb54HbnxmCqaNoit3u4Z5ZCnyj9gZebFiL3MqeZD5iIe67XCmPCx%2BgtYW0vLLe1EyCu3romAgjYys70HmKDTJk329ros%2BpFsPwV&X-Amz-Signature=c7a4fc4e57a9887d0775fce67afc2abffc7406f493edf02363e28b0a1623db8d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
