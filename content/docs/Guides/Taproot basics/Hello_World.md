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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R36VWJT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC8f0fT%2BHPowse0ynOVRQodc0cgB56xOieulkSLY6BQQQIgQCpzoCfHtGMNcGbHaOXfEJhIbOYtGeUiChgFwgafs5kq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMepx1KUUoqUAa2C7CrcA62rdzJPXtb9pzFhncjW6CviKZBb7O4dkgXWMrmxO565CTkrFNOrJWmIQCgF9jJsRV4gSLuSKgM1fgI26jRSVbORcHKND1KEL2XYtgSb4Tzq4etYl100xP5FUARDiwTEFG1yUas5HdDKgX6QnjbTMHrcMPbdkP70MiyovtPtdcmtaUBNxmU6rGX8vaVf2rAOTEcC9IrUCUqxXGUMKQGmp3fVMg%2FZrooOW7Xasgdydrr%2FIo3UzHG9YIdmBC%2F1CFbjqZCIiJVFM2Q8gw6HMBO21e8ph%2FURZ44ossRfMoKOO79Rlw1EIA3QxT%2BBAKzCjO0dO3SAoS6Mo7Nan4mQkOSLgCmjje0C3Wj%2FO%2FfM9pvH5HP0s5PILeYRzlP3HbaBBcTrziVb2zEw3HJMB%2Ffsayt7pllyBoLmMLoi0Jz8uFBy3HR2yRxk%2Bo5hYHnaPxfX8P2i9Px9%2B5ylVzHZ%2BzVIO%2BgD%2FYwAiLqJErQ2kr5VD96nLOIrsKDlZeS%2Byl379d%2FHFeWp39ep10aAQ5u86qbTVp3ce9WkyzaaBVeJZ%2BhURjFFsMwFIKh%2FetkVc%2Bb0iR8dB%2FCgf%2FPuJAI8tIAg%2Bgp5OETAPGv1nQGO1Hsg9PcgPGVkvbBrDUfiBtgggfz2LaLDMNjgncMGOqUBA9bMEXDvZ44BJ%2F71dgYHJUWb3fJR3e2j3XgtQd9ur%2BMPP83rcK3IX6XZweFAmbr2%2FuXuBt5RbOj8cbzkB3fistCQ039%2B6AAkRsYrvDQSFVyolvyFusBtHrVL8FjKah8rAqEKXs6YcC2S05BZod0D4hmKFJsGuPB1NJ0o%2BdgAttViUSHkQQYaVcNDUdCVLed1Tg1%2B%2BH8WELAgXityNsExf2FV2aQk&X-Amz-Signature=62a2a5af7f99d1d76968330ea90a71eb9a895bfbf227211e07b309e46831b1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R36VWJT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC8f0fT%2BHPowse0ynOVRQodc0cgB56xOieulkSLY6BQQQIgQCpzoCfHtGMNcGbHaOXfEJhIbOYtGeUiChgFwgafs5kq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMepx1KUUoqUAa2C7CrcA62rdzJPXtb9pzFhncjW6CviKZBb7O4dkgXWMrmxO565CTkrFNOrJWmIQCgF9jJsRV4gSLuSKgM1fgI26jRSVbORcHKND1KEL2XYtgSb4Tzq4etYl100xP5FUARDiwTEFG1yUas5HdDKgX6QnjbTMHrcMPbdkP70MiyovtPtdcmtaUBNxmU6rGX8vaVf2rAOTEcC9IrUCUqxXGUMKQGmp3fVMg%2FZrooOW7Xasgdydrr%2FIo3UzHG9YIdmBC%2F1CFbjqZCIiJVFM2Q8gw6HMBO21e8ph%2FURZ44ossRfMoKOO79Rlw1EIA3QxT%2BBAKzCjO0dO3SAoS6Mo7Nan4mQkOSLgCmjje0C3Wj%2FO%2FfM9pvH5HP0s5PILeYRzlP3HbaBBcTrziVb2zEw3HJMB%2Ffsayt7pllyBoLmMLoi0Jz8uFBy3HR2yRxk%2Bo5hYHnaPxfX8P2i9Px9%2B5ylVzHZ%2BzVIO%2BgD%2FYwAiLqJErQ2kr5VD96nLOIrsKDlZeS%2Byl379d%2FHFeWp39ep10aAQ5u86qbTVp3ce9WkyzaaBVeJZ%2BhURjFFsMwFIKh%2FetkVc%2Bb0iR8dB%2FCgf%2FPuJAI8tIAg%2Bgp5OETAPGv1nQGO1Hsg9PcgPGVkvbBrDUfiBtgggfz2LaLDMNjgncMGOqUBA9bMEXDvZ44BJ%2F71dgYHJUWb3fJR3e2j3XgtQd9ur%2BMPP83rcK3IX6XZweFAmbr2%2FuXuBt5RbOj8cbzkB3fistCQ039%2B6AAkRsYrvDQSFVyolvyFusBtHrVL8FjKah8rAqEKXs6YcC2S05BZod0D4hmKFJsGuPB1NJ0o%2BdgAttViUSHkQQYaVcNDUdCVLed1Tg1%2B%2BH8WELAgXityNsExf2FV2aQk&X-Amz-Signature=7efe0fdd200ab530192a2885b6f185eb9eb3114370681b11f18b416a8f767149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
