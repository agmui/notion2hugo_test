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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXUAVMR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC915eeOyttLenhPjVOuA4%2FEzNzxPwVaPh1qFbdMLXVqwIgIdfO6CO0wjkdm3RuU%2F1UHVLR9%2Boaqogrqtm86%2F6QIg8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAchjif4%2FXb3VJz3pCrcAyTBGrW5MLvDC%2FfucVnnmHOFakInAFE4%2BPXgSNAkm7%2F98OXgEveWEL1K9q6I7xjtcftNdAWRxJOlf32i0nUCi0W2L43sTDMHHdOEpXu7e3x9PmphfTstx7wCVTKL49qYiXzkvdmY7A3gknJ01ndta2JUikUzoA2apKp8%2FwgBAeKHkacvSNlfZQU%2FP%2BfZxiPnr53Yokycx6MXcf6GH9pLUPaD1hNQakpmy%2BeAmkk36K4q51QOvw6dnPNKaF6o%2Fnf9SSQtX7dVjMQr4m3pdHUAW5nnP7ehhn8LYqSyJEvqR%2FfX6vOx3teyI4eXGNqR0HV5s70qMlq7GDePuN8%2B3XZG2%2FIChpMFe9rY%2BSDRMZpkbkTZ3dpYb%2BUYygQAq9a0uoTEvLi08e4Pid3FV1BOAtPY44IchrSVIhClgmGTYrMkDywKybB4cwxNGdb9wXkwEu1vzwXBr7tPgG%2FjrGlnQ9B9RSBPzHwd3kTSz66fltqkIoyHiSIZHKkATt4Qr5fDZx5YVNgOde7iWYNQXF7XgTimz%2F6c5RgNgIubN8KfcxyR%2FNPOi97FndKYgujtrN%2FZAs5biR2AObDgWL%2FIdMt%2FB%2FjkN1o5Tmed%2BuTqeqZUDFm9d4AsM5gq7sSHLTpv0ajuMI6Z4sQGOqUBLfFtlJ3GMdb4RVMDCztm6zDdZJYXyCI8Hlkkkcsc%2BVx0iDU9fMMYgQDFGVRT0wGAWXg3EzCqV%2BwIep%2BiMO9oPcoizVRoL6VyKDxgG6Inq1wAF9OfItopgFplrA%2BVwrGfOPr1KWSgdSrIlBRd0Tv641z8OkW9%2B7d7nWoxyciCRL9pVlJKuN2yIGkX%2BFlmWW1%2BKSFlm6a4iESKLz2ZDMabkGYc7Qur&X-Amz-Signature=c8bf774cd6c36700b875055cba019edbc371be54bbfdc927481213f9c5f5923b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXUAVMR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC915eeOyttLenhPjVOuA4%2FEzNzxPwVaPh1qFbdMLXVqwIgIdfO6CO0wjkdm3RuU%2F1UHVLR9%2Boaqogrqtm86%2F6QIg8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAchjif4%2FXb3VJz3pCrcAyTBGrW5MLvDC%2FfucVnnmHOFakInAFE4%2BPXgSNAkm7%2F98OXgEveWEL1K9q6I7xjtcftNdAWRxJOlf32i0nUCi0W2L43sTDMHHdOEpXu7e3x9PmphfTstx7wCVTKL49qYiXzkvdmY7A3gknJ01ndta2JUikUzoA2apKp8%2FwgBAeKHkacvSNlfZQU%2FP%2BfZxiPnr53Yokycx6MXcf6GH9pLUPaD1hNQakpmy%2BeAmkk36K4q51QOvw6dnPNKaF6o%2Fnf9SSQtX7dVjMQr4m3pdHUAW5nnP7ehhn8LYqSyJEvqR%2FfX6vOx3teyI4eXGNqR0HV5s70qMlq7GDePuN8%2B3XZG2%2FIChpMFe9rY%2BSDRMZpkbkTZ3dpYb%2BUYygQAq9a0uoTEvLi08e4Pid3FV1BOAtPY44IchrSVIhClgmGTYrMkDywKybB4cwxNGdb9wXkwEu1vzwXBr7tPgG%2FjrGlnQ9B9RSBPzHwd3kTSz66fltqkIoyHiSIZHKkATt4Qr5fDZx5YVNgOde7iWYNQXF7XgTimz%2F6c5RgNgIubN8KfcxyR%2FNPOi97FndKYgujtrN%2FZAs5biR2AObDgWL%2FIdMt%2FB%2FjkN1o5Tmed%2BuTqeqZUDFm9d4AsM5gq7sSHLTpv0ajuMI6Z4sQGOqUBLfFtlJ3GMdb4RVMDCztm6zDdZJYXyCI8Hlkkkcsc%2BVx0iDU9fMMYgQDFGVRT0wGAWXg3EzCqV%2BwIep%2BiMO9oPcoizVRoL6VyKDxgG6Inq1wAF9OfItopgFplrA%2BVwrGfOPr1KWSgdSrIlBRd0Tv641z8OkW9%2B7d7nWoxyciCRL9pVlJKuN2yIGkX%2BFlmWW1%2BKSFlm6a4iESKLz2ZDMabkGYc7Qur&X-Amz-Signature=4518476c7437c29e06b343836999e83e99cac5e9144e4a137ef5fc1bae160502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
