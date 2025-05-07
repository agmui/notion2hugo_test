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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TAYSBE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNkGGvxZi9%2F%2F%2BFMTzxtA21ypViE8NbYDWtyitchVu%2BogIgBMBB8c3ncxtUCkkS%2BhFt9yD1SXRsQz2VH3vwRG%2F1gbIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOoPSynKmGKNQf6lmCrcA5TVSwKd0WvbHg0X1JQt7p4X%2FLnwsxAVttdNXsJMvz23Gk4dQabpsQUYRBfw6wiQMoiqW9JXxzQySfPx5p8TgDazN4KjlHaVjoysaz%2BlcN0qciQdHDq8gev9t%2B6deLJoCyJFNbsfM4IHR%2FTPp4RK7rolSuDo0hiuRX9rBHSfFUI19%2Fur1ULP%2FxHLIhV30cnjtXoqBnFME2xQWSJdM9hKrUsqH1S1jbC9%2F3Jtnmbzcxt5XWZVFUPXQGo59opZtHJ%2FzFFrrQyDCvc%2Bv0%2BPEsKRLrRUkaZEFI5BtFq9XhMMlbGyca9UzrErS7f%2BVBuXOhfjt7meyS8vZOOYsNaL3Ve9bQJPQ729se%2FuPPGOmQbNcdJdlp5IBqsnrWPfXWRyA34TKjH5noyhGfNCO2EQ88d0vw1VmS9q2V6n4KX6Dg1VTEwdjtlfoZm0hrgp%2B8D7J%2BPq5y5QQiGUkK63WHaRythGkjUXsj2Dz1CrBtagBoE5fBa9pgF%2FC%2B55WqEwCCZUvmfcVxrBsDTfR0yRgwj6K1bylydGHzC855LmJ5uaXpxJyQCjsbhMi7MG8HKKkWIhITlhaCCpnyotqzOqN%2FvTH43khKKOQ2abtmFF1BQJ1tE4nVZ0L099NDNtRHHqBfLWMPvv68AGOqUBc72PqRiD4lcKym%2FYkdkVRSIBnGwz0Gtks8hkztV6IBXQiXHt3G0XxU4Br0PNFwZIPeUqSBf52GvmCng4%2Bfd6pSobL3uw6hXzjYuuNiBPicSO7FHVYzB59V3fXWjVjuLAtCAwYH4%2BtOLwkVeN5ofNzFYGOGYorOSIChSNbCOMT29EaR1qSgfGxrXXWXWZQeud6edrqfu2f0i82XLmSX4ONUFpFxtd&X-Amz-Signature=29b90790a78fe2d3b9e3376caa68221a9dc55c214a48c006238eb8cdfaec54a9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TAYSBE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNkGGvxZi9%2F%2F%2BFMTzxtA21ypViE8NbYDWtyitchVu%2BogIgBMBB8c3ncxtUCkkS%2BhFt9yD1SXRsQz2VH3vwRG%2F1gbIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOoPSynKmGKNQf6lmCrcA5TVSwKd0WvbHg0X1JQt7p4X%2FLnwsxAVttdNXsJMvz23Gk4dQabpsQUYRBfw6wiQMoiqW9JXxzQySfPx5p8TgDazN4KjlHaVjoysaz%2BlcN0qciQdHDq8gev9t%2B6deLJoCyJFNbsfM4IHR%2FTPp4RK7rolSuDo0hiuRX9rBHSfFUI19%2Fur1ULP%2FxHLIhV30cnjtXoqBnFME2xQWSJdM9hKrUsqH1S1jbC9%2F3Jtnmbzcxt5XWZVFUPXQGo59opZtHJ%2FzFFrrQyDCvc%2Bv0%2BPEsKRLrRUkaZEFI5BtFq9XhMMlbGyca9UzrErS7f%2BVBuXOhfjt7meyS8vZOOYsNaL3Ve9bQJPQ729se%2FuPPGOmQbNcdJdlp5IBqsnrWPfXWRyA34TKjH5noyhGfNCO2EQ88d0vw1VmS9q2V6n4KX6Dg1VTEwdjtlfoZm0hrgp%2B8D7J%2BPq5y5QQiGUkK63WHaRythGkjUXsj2Dz1CrBtagBoE5fBa9pgF%2FC%2B55WqEwCCZUvmfcVxrBsDTfR0yRgwj6K1bylydGHzC855LmJ5uaXpxJyQCjsbhMi7MG8HKKkWIhITlhaCCpnyotqzOqN%2FvTH43khKKOQ2abtmFF1BQJ1tE4nVZ0L099NDNtRHHqBfLWMPvv68AGOqUBc72PqRiD4lcKym%2FYkdkVRSIBnGwz0Gtks8hkztV6IBXQiXHt3G0XxU4Br0PNFwZIPeUqSBf52GvmCng4%2Bfd6pSobL3uw6hXzjYuuNiBPicSO7FHVYzB59V3fXWjVjuLAtCAwYH4%2BtOLwkVeN5ofNzFYGOGYorOSIChSNbCOMT29EaR1qSgfGxrXXWXWZQeud6edrqfu2f0i82XLmSX4ONUFpFxtd&X-Amz-Signature=a177b8116bfb7516d56513fb2f33927f1fb11a541cfb3a27083216b45752ad7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
