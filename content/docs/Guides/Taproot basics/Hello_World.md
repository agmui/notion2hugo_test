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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2ADOY7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGmeEE2Wkb1rwg4CjnmmW3xoU4I4PfF%2F4crra%2Bj7NzAqAiBK0MFvwivQy%2F2SQX9PK5l9fK4eLI3KE0v5kdakudHv8yr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtTeiVqngLgnO3alDKtwDHMIiJHjcgXhoDfY%2B0Xf9JGYqbpVTjg1wn0%2Fbi%2BYQXvQN6fL5Z1F7Ib%2F4r5CvdNU33k3KCjlnO0nuGGGEYAR8SmbK7V%2FclgmJk0JFqWiBM4zYzhdeIzcMTEvZvfKTAUrTzRyHv%2FC8sgA1DhoFOeSn%2FNSDjCSvdu1Mtc79WU0THVIc0e18tbAGSDbNDfNZSJApQY5WlXEGRPX96PxzknW5SysVNSewHTeRv3uH5pGyYRISKXF2i%2Bq0lq0tYsHvaLqwRTbWhQPW0vkS6QrLKdwA%2FSNmNQKqQ2eTUR0Z45lyeOCru0zzkPWtRe1dNOl8e2pheHcPRF4nNBtitF%2Bk4QeMTbhy%2Fjs3yaY9V0yonCCc%2BX0DVehfRmBsrlzBfaqJGr4MuBnv%2BlTmHgGkmwgy%2Bw3RVllvwqru0RS%2B91eaQaAZTloRzNQFnPIyop2h8p1k2YQ37kRbulKEOUSjQkJyOrYqAxn5zfVzT9FPKGGFXwbtZfGBf6KcA%2BeAzkRK%2BaIDb%2Bs03bUwA9FUDWlCQNI7gKXXz6sMsqw1HaGlzLhByEk4hSY0FqYoJ%2BEh8VgUYgvW3PLUc77AL2tXuf8eER%2FlgJZEo45V2%2BTmdLCM9plqjNaxCNb%2FVkO8Q1D%2Brt7%2FEo0w1sXOxAY6pgGO2XhV4ZqocO%2BvuIbpSxW1a7Ti%2Ftb8DkMOhV%2FFMTesod3GvOZfowurIHBCzB8qSox9gvB3SY0dnr3d5pesixjacQoX%2FYS2oXscg%2BG3yxx%2FeS%2B271DG6zDgjt6CZFWlTToRzydxWZ%2BmdY2ehhFOpYl6iz65RjJ6uqJbJoZ%2FhrsmjiptOvtMWtW9pAKT%2BiWKQ8CilVM9ePruvMw49F%2FCa2oXKdwA2wtn&X-Amz-Signature=0c9cfd611492edf927626db04201f5486b384b38d96a4f02680e5d7c62e0c53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2ADOY7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGmeEE2Wkb1rwg4CjnmmW3xoU4I4PfF%2F4crra%2Bj7NzAqAiBK0MFvwivQy%2F2SQX9PK5l9fK4eLI3KE0v5kdakudHv8yr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtTeiVqngLgnO3alDKtwDHMIiJHjcgXhoDfY%2B0Xf9JGYqbpVTjg1wn0%2Fbi%2BYQXvQN6fL5Z1F7Ib%2F4r5CvdNU33k3KCjlnO0nuGGGEYAR8SmbK7V%2FclgmJk0JFqWiBM4zYzhdeIzcMTEvZvfKTAUrTzRyHv%2FC8sgA1DhoFOeSn%2FNSDjCSvdu1Mtc79WU0THVIc0e18tbAGSDbNDfNZSJApQY5WlXEGRPX96PxzknW5SysVNSewHTeRv3uH5pGyYRISKXF2i%2Bq0lq0tYsHvaLqwRTbWhQPW0vkS6QrLKdwA%2FSNmNQKqQ2eTUR0Z45lyeOCru0zzkPWtRe1dNOl8e2pheHcPRF4nNBtitF%2Bk4QeMTbhy%2Fjs3yaY9V0yonCCc%2BX0DVehfRmBsrlzBfaqJGr4MuBnv%2BlTmHgGkmwgy%2Bw3RVllvwqru0RS%2B91eaQaAZTloRzNQFnPIyop2h8p1k2YQ37kRbulKEOUSjQkJyOrYqAxn5zfVzT9FPKGGFXwbtZfGBf6KcA%2BeAzkRK%2BaIDb%2Bs03bUwA9FUDWlCQNI7gKXXz6sMsqw1HaGlzLhByEk4hSY0FqYoJ%2BEh8VgUYgvW3PLUc77AL2tXuf8eER%2FlgJZEo45V2%2BTmdLCM9plqjNaxCNb%2FVkO8Q1D%2Brt7%2FEo0w1sXOxAY6pgGO2XhV4ZqocO%2BvuIbpSxW1a7Ti%2Ftb8DkMOhV%2FFMTesod3GvOZfowurIHBCzB8qSox9gvB3SY0dnr3d5pesixjacQoX%2FYS2oXscg%2BG3yxx%2FeS%2B271DG6zDgjt6CZFWlTToRzydxWZ%2BmdY2ehhFOpYl6iz65RjJ6uqJbJoZ%2FhrsmjiptOvtMWtW9pAKT%2BiWKQ8CilVM9ePruvMw49F%2FCa2oXKdwA2wtn&X-Amz-Signature=4d48d39be1008404f181c11cd385b229eeda4adacb6ef17e6534de6194eb1d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
