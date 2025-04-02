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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTHZWU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDzV9B03SHsRgS9JuN75Iw0zYof9pYcjvTd6BhLpGHEZgIgNKtH6fWS3CQCtOZdAQlb%2F9cX46Pp%2BKan71HMLz346yoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BNwGHI273PuBmx0yrcA5jsGAlcBYESNpiUlDp3xPVKHuINMrZpiVX9PaDRZmXpmnaB6v1funr6zL5v4ul6wItBpUR675ygWphQ9sCS68DvlnwNPcIeMxNRyZbepIspGB12loXawu1ohVuY26R9R0CwYnQrQMLlUBakpAKPTRoLRJsQnrnzKmkOl%2B8RDj7FwYUyOJfutcePrACoHlISel51cQYm%2F0V%2BnSqJc5mKTt6pMKHhaJ5hQf%2FAn3hQ0JFxseLyTpuRog9JlU2UTh5E4FDbwyDlZoIDTOW3bw%2Br8SaXUszCl5kWFy%2Fg%2BSiU%2Fyxof46gDLBOOe5%2FoyuG0XPeDZ7htpz7ID2coK7MhH01bwgMlCmEDL2p7UNaCHOH8Uvowqnrole%2FInuYyH7i7bIEJ%2BYIQSww8UFurB%2BvhPmOpWCudpSbeOlPr2pNZi26l4jGPQF%2FB0aIhEiRi9qK6VYQwSZL7v7NB9kAMT3Gne%2BNB%2BdVdHdtjAlbyecEH3mVbOko3mYR1RmbfYGUxw0iMQRn%2Fxq0Fep0H7lito6GwjlOxHv4%2Be5DBbXU%2FjBr4S4xkPDgdFZ2aqOQ6w38mHag6P0KiwIUUdJ%2BDGhv2tGTgww%2BD8lgiRePBmeSxSkT0uHBmaXscSisMCvQibpyuRXBMNqosb8GOqUBJcfr1MvtVnKH2A6mCuG%2BOo6c9Ct0F5Tx4W7Ajt0oxVQTecqslW24w1HlRn6mNanPYpBtK9OXWwV09i27U0h0nQt%2BJYUUAQffsdZzd%2Fv8Wo6o8kkybIEHZGdSe9eAGXoNsPEprlm0c9gcOBltNSuN1q7UtJMMuWSEScHfAvYBRVr0BVm%2B%2FZbaaLJP8%2FkV8L%2FkIx10X7%2BzDdJUXBDuCZoBc1DMVGfn&X-Amz-Signature=fde2fe36b3faa5e5c66e6a4427ad8b7c6ab7464238f6cc2f41cb69df96b0b9cc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTHZWU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDzV9B03SHsRgS9JuN75Iw0zYof9pYcjvTd6BhLpGHEZgIgNKtH6fWS3CQCtOZdAQlb%2F9cX46Pp%2BKan71HMLz346yoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BNwGHI273PuBmx0yrcA5jsGAlcBYESNpiUlDp3xPVKHuINMrZpiVX9PaDRZmXpmnaB6v1funr6zL5v4ul6wItBpUR675ygWphQ9sCS68DvlnwNPcIeMxNRyZbepIspGB12loXawu1ohVuY26R9R0CwYnQrQMLlUBakpAKPTRoLRJsQnrnzKmkOl%2B8RDj7FwYUyOJfutcePrACoHlISel51cQYm%2F0V%2BnSqJc5mKTt6pMKHhaJ5hQf%2FAn3hQ0JFxseLyTpuRog9JlU2UTh5E4FDbwyDlZoIDTOW3bw%2Br8SaXUszCl5kWFy%2Fg%2BSiU%2Fyxof46gDLBOOe5%2FoyuG0XPeDZ7htpz7ID2coK7MhH01bwgMlCmEDL2p7UNaCHOH8Uvowqnrole%2FInuYyH7i7bIEJ%2BYIQSww8UFurB%2BvhPmOpWCudpSbeOlPr2pNZi26l4jGPQF%2FB0aIhEiRi9qK6VYQwSZL7v7NB9kAMT3Gne%2BNB%2BdVdHdtjAlbyecEH3mVbOko3mYR1RmbfYGUxw0iMQRn%2Fxq0Fep0H7lito6GwjlOxHv4%2Be5DBbXU%2FjBr4S4xkPDgdFZ2aqOQ6w38mHag6P0KiwIUUdJ%2BDGhv2tGTgww%2BD8lgiRePBmeSxSkT0uHBmaXscSisMCvQibpyuRXBMNqosb8GOqUBJcfr1MvtVnKH2A6mCuG%2BOo6c9Ct0F5Tx4W7Ajt0oxVQTecqslW24w1HlRn6mNanPYpBtK9OXWwV09i27U0h0nQt%2BJYUUAQffsdZzd%2Fv8Wo6o8kkybIEHZGdSe9eAGXoNsPEprlm0c9gcOBltNSuN1q7UtJMMuWSEScHfAvYBRVr0BVm%2B%2FZbaaLJP8%2FkV8L%2FkIx10X7%2BzDdJUXBDuCZoBc1DMVGfn&X-Amz-Signature=782b6889236a1da4d30ef9af9e8797445ce68c091b56810313aeb2dc76248fae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
