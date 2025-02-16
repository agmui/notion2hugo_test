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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7U3DVSM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDhBmjc%2BuZkNbqvk%2Fb6tpEolNARiYEWWxbgqPQGOCjPrwIgGYGjJqMCqWIVd%2BAbq0gtOg4zQVZaQ%2BRjRaw0ChUd%2BcAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIqIeqgD73v3NPyAyircAzS%2B%2FjgcdqcOLEWSEgRM9KvnOmgwAFBP2dF3%2FgGDR%2BvNnhn5OrXK66DOvuorXgh7Go3dnaR3IVC9KH3KsJGZJBmw9Kl1x5g0ELIufIX2bxr32bfUfNokybI1OVbetvLRaDrd77u3z52cixRdtumjG%2BxN49ZSOSsfxcUYpyLEBiVYPDFXBGMCdUxXIx0uuyJLVLJSE48KbL79OeqxW%2BBv%2FyKEwchXjnezt4PwiDbwXORyL5yCLZ%2BXBtryV5cYCcWCJPDPBADWMW%2BmZ5hdbhMqFH4i6f%2FOfLDJ%2FnLPFXwdS7T0hNtf%2FgLIPGzVIj%2FWB0CyLd7ITYcR0h91WBCH4BRGq3nE9kuYzUFu0ZHtnNl4lAVSPZ0OSApsita0VZ%2BhesGRWxZJ4NRUCW%2BWa7QiRPSPlzFJFz457V2TLmgwgEvEjfLPeaPOgG%2BCy%2Ff9rSelbeOtltSqhHv4V2EtuLV7n2gRgyNsQ2hPKnFVSaLhsFbHQKxflNlOM9Ut%2BHmMRLyZGUCWTMZBb7zBhPDt4pSO7DyuxOoyF6KP2N0ztvwykYASE0wqZRIqie2LrhiEpEUgwFnzKE0Wchc%2FLZeCiCRSHLBDuFqwG0rFtCJgDB%2FWIBEY9flTIRG35c23p65eeX1XMMqZx70GOqUBwIHybHOLyx3ALtrHPLuEt3t1%2F%2BvvCV8D4ORuQNkyMsSvfE3dWhYUURMqSjb%2Bgz9UiuKvrHPlqYPWwTqOVMDLcC36c%2F67z9yu81XW4691F%2B43qGci0lWbkmsnk9Atm1%2BLiwisehhHqBx6DkmsHghoxECqw1o37ApwKZhHOUhMdlW3H4WzbOP4C3YZ3%2B6KEr8S7%2BlaDN%2Ff65xkjLtrbCF4I5Zm43K0&X-Amz-Signature=1f3dbbee3b6e8524f8c960a539a8d5a6f1fa6511de79d52caf06ced498dd6f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7U3DVSM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDhBmjc%2BuZkNbqvk%2Fb6tpEolNARiYEWWxbgqPQGOCjPrwIgGYGjJqMCqWIVd%2BAbq0gtOg4zQVZaQ%2BRjRaw0ChUd%2BcAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIqIeqgD73v3NPyAyircAzS%2B%2FjgcdqcOLEWSEgRM9KvnOmgwAFBP2dF3%2FgGDR%2BvNnhn5OrXK66DOvuorXgh7Go3dnaR3IVC9KH3KsJGZJBmw9Kl1x5g0ELIufIX2bxr32bfUfNokybI1OVbetvLRaDrd77u3z52cixRdtumjG%2BxN49ZSOSsfxcUYpyLEBiVYPDFXBGMCdUxXIx0uuyJLVLJSE48KbL79OeqxW%2BBv%2FyKEwchXjnezt4PwiDbwXORyL5yCLZ%2BXBtryV5cYCcWCJPDPBADWMW%2BmZ5hdbhMqFH4i6f%2FOfLDJ%2FnLPFXwdS7T0hNtf%2FgLIPGzVIj%2FWB0CyLd7ITYcR0h91WBCH4BRGq3nE9kuYzUFu0ZHtnNl4lAVSPZ0OSApsita0VZ%2BhesGRWxZJ4NRUCW%2BWa7QiRPSPlzFJFz457V2TLmgwgEvEjfLPeaPOgG%2BCy%2Ff9rSelbeOtltSqhHv4V2EtuLV7n2gRgyNsQ2hPKnFVSaLhsFbHQKxflNlOM9Ut%2BHmMRLyZGUCWTMZBb7zBhPDt4pSO7DyuxOoyF6KP2N0ztvwykYASE0wqZRIqie2LrhiEpEUgwFnzKE0Wchc%2FLZeCiCRSHLBDuFqwG0rFtCJgDB%2FWIBEY9flTIRG35c23p65eeX1XMMqZx70GOqUBwIHybHOLyx3ALtrHPLuEt3t1%2F%2BvvCV8D4ORuQNkyMsSvfE3dWhYUURMqSjb%2Bgz9UiuKvrHPlqYPWwTqOVMDLcC36c%2F67z9yu81XW4691F%2B43qGci0lWbkmsnk9Atm1%2BLiwisehhHqBx6DkmsHghoxECqw1o37ApwKZhHOUhMdlW3H4WzbOP4C3YZ3%2B6KEr8S7%2BlaDN%2Ff65xkjLtrbCF4I5Zm43K0&X-Amz-Signature=8269b154a170de149feaeaaac97c60657b300c94f76e66dd1a04c7f000045b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
