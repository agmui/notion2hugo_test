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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBVF7FD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDEUKEVQnBr6BM0AiBdWnzoRk8YRLH3z9yKw3ExxU1ixAIhAPO1J0RqLNaKLnsOkXRm6hZ4cvNW%2F6YDGqp%2FFdmdAaAgKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW0x2O2idOQP9YCScq3AOk8uWr%2BfHdBgWVLhw7C6zuQ%2Fip0MOmoixpO2jYRRvgaM3EUEZowaaSHkhhzpvtxAGCJl7LN9QTz0WUp3Ve2%2FbYmUiXe3dT8D7PFEnwor2XXL6ymmVp%2BuvGnMi%2F71455q9Suz8XZhI876B2mj8maTdkcr6Vdv4UAG167ZrOYDWtgHkPkxH6ws1Z0vTS%2FM28uI6p%2FPXg8KF6oDLWme%2B8yrABjppy2IqtjYTzMXDYYt16djRZgAjEkoKKR7haBJJsWyzFzWx6v8gIO78hInOHdTg%2FSVewByK%2F2nqP9Y9oWGs0z3QHTGa1%2FdQRW2h6o9jCVognGXOd1oCWpJzd%2FDKF%2FREYjPEz8Noh7LOwoc50%2BrQjME7DCvG2Xwya0I21qjTu6OBE4X8rj2s0yXRXDQKazKORn%2BRm1RjWTHQKX0Q1Hs1gjsoYNPuSV3g12QGqIkMOBIuLfUMWJr9wm9CJmSy34DLysQsC0dzHefD7oHreTs%2BMOAhGCxs7bv03xWUFHNTNPEJBJCzdlYXSef97joP1uS31iJivegoUDrzbWJ7B7LWyhn6%2BsHVgtaiCaVZxeKcrmJOr1iMfvzkAtL9KsX7qOFoNoqoopuPlOZOe7xkFU00YRLW%2BUn%2ByipHSNlZb3jDq4v2%2BBjqkAQGNLIxxlW0%2BrKJGOMIIjv4%2F5WSaQ0vgIBjHD1uEqAAFvvU20bHC3bpmmK25K7ADpgOEtkjPwyqDewW%2FTYP2ewI007pPXlhJi28sG9617%2FvF28UmEcV3prBwV80jWpFgFaDOIhVXUdlzaM5ZdvOWotrYA5hO1PZOAMs1mt%2FqTTDWG6COoLpw1Z%2BSFcXMXXc%2FnXBxNiprYkCZOhXytcoBUza0L5pk&X-Amz-Signature=f39374cc784b66b883a8d026a33a0aaa20a7ec58669b5f49603ab8cec189514e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBVF7FD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDEUKEVQnBr6BM0AiBdWnzoRk8YRLH3z9yKw3ExxU1ixAIhAPO1J0RqLNaKLnsOkXRm6hZ4cvNW%2F6YDGqp%2FFdmdAaAgKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW0x2O2idOQP9YCScq3AOk8uWr%2BfHdBgWVLhw7C6zuQ%2Fip0MOmoixpO2jYRRvgaM3EUEZowaaSHkhhzpvtxAGCJl7LN9QTz0WUp3Ve2%2FbYmUiXe3dT8D7PFEnwor2XXL6ymmVp%2BuvGnMi%2F71455q9Suz8XZhI876B2mj8maTdkcr6Vdv4UAG167ZrOYDWtgHkPkxH6ws1Z0vTS%2FM28uI6p%2FPXg8KF6oDLWme%2B8yrABjppy2IqtjYTzMXDYYt16djRZgAjEkoKKR7haBJJsWyzFzWx6v8gIO78hInOHdTg%2FSVewByK%2F2nqP9Y9oWGs0z3QHTGa1%2FdQRW2h6o9jCVognGXOd1oCWpJzd%2FDKF%2FREYjPEz8Noh7LOwoc50%2BrQjME7DCvG2Xwya0I21qjTu6OBE4X8rj2s0yXRXDQKazKORn%2BRm1RjWTHQKX0Q1Hs1gjsoYNPuSV3g12QGqIkMOBIuLfUMWJr9wm9CJmSy34DLysQsC0dzHefD7oHreTs%2BMOAhGCxs7bv03xWUFHNTNPEJBJCzdlYXSef97joP1uS31iJivegoUDrzbWJ7B7LWyhn6%2BsHVgtaiCaVZxeKcrmJOr1iMfvzkAtL9KsX7qOFoNoqoopuPlOZOe7xkFU00YRLW%2BUn%2ByipHSNlZb3jDq4v2%2BBjqkAQGNLIxxlW0%2BrKJGOMIIjv4%2F5WSaQ0vgIBjHD1uEqAAFvvU20bHC3bpmmK25K7ADpgOEtkjPwyqDewW%2FTYP2ewI007pPXlhJi28sG9617%2FvF28UmEcV3prBwV80jWpFgFaDOIhVXUdlzaM5ZdvOWotrYA5hO1PZOAMs1mt%2FqTTDWG6COoLpw1Z%2BSFcXMXXc%2FnXBxNiprYkCZOhXytcoBUza0L5pk&X-Amz-Signature=49d523f8edf0c7653b466cebe84e1104733cbbf616811834d134850a3fceb8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
