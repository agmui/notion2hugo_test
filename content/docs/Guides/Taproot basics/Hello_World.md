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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIH4QK3N%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA%2Fy9yxgr6KZy65P8GZtfpeg5sU750l4%2FxYNDAhT79asAiAzWCvVZCGvsWloOQLDiQTE5MpXOlvpQugRs7b1k5bbOCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMeZI5OmR9fvL2r%2FCwKtwDMlkFqCOMih%2Bl%2F9exbrALQSJeznC8t9W%2FDrqO6frT%2BaTSxjjiIIWgQpyiCR5C9CkGQGgrlEGicf0jUfOQbaLh52v8YWaRtz%2FI%2FaNxQy9UdsMolUX%2B6AnltatbzwfMf9KqmvnAlc07IYMWipv7vtPN16StqHjB9msh7qVnGiZdvysOJGCY%2BHyzHV8JYEURJ8bs%2FBnp%2BpvBhuNpdWIg7NY9HT9D0WhHCDX1u5sHMI%2BWk4tc4SdQdqzpt6BNVF7Ji0XFP0cRYWne9qW7FrEw1oVYx%2BLCERaOufYIPWKocrknM%2FWLSIJp%2FcIgwV65Z3Db0%2BiQVm6LBnDQ9XL4K5DRTJ8CBQ6Ys1mL1GYmT%2BWVsgNIXpmLnq8idXzTqF%2BrX54c8ZK8%2FhDbnaBcNVemw8Af9gTT4mxazvLDHosMTcWFgGaQNM2rOyxAxSX8KC0c3Ifn2GLzst9IWM4h9ZaXB%2FkuyNZAo4BncCvwf5IAzwqN8iPYkvVUZ%2FRNZfYe4c16QV54aEsRJ5RasxxhnVAjdndGB95eYS9pHn70MiMCAmSwRV3%2BjPhkL1XLsRNuqHvnrqtxfIwUs9pEIets6UJkDKGqIJyZyF%2Fdv6nCpLogUnXKQYMm4qdqqdFQKxzer3lPs%2FMwpOyfwwY6pgGEEtFGqxjfo1CscyJyGJQ7PI6uG8fMYseuY1m%2BW8XI99IoBuyfnXyHbSO9YVhUtav6ykXnrv357zWD6sc5JyFdB3fhVvv5aGnMr%2B%2BELmU6KxpViM%2BldReW%2FOy%2BmX8cV38ruz%2F03ktHq4L8vv8jJKRFIWvuj4r%2B6GiKqhW4zYwroNhIqcXb8jg57kGt33Dm0zh4fXJRXdP30XKbZOFmYHapi3T3fQgP&X-Amz-Signature=303302e199a7374c2e556b14409776ba88580d0e199fface989281bf907ee95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIH4QK3N%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA%2Fy9yxgr6KZy65P8GZtfpeg5sU750l4%2FxYNDAhT79asAiAzWCvVZCGvsWloOQLDiQTE5MpXOlvpQugRs7b1k5bbOCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMeZI5OmR9fvL2r%2FCwKtwDMlkFqCOMih%2Bl%2F9exbrALQSJeznC8t9W%2FDrqO6frT%2BaTSxjjiIIWgQpyiCR5C9CkGQGgrlEGicf0jUfOQbaLh52v8YWaRtz%2FI%2FaNxQy9UdsMolUX%2B6AnltatbzwfMf9KqmvnAlc07IYMWipv7vtPN16StqHjB9msh7qVnGiZdvysOJGCY%2BHyzHV8JYEURJ8bs%2FBnp%2BpvBhuNpdWIg7NY9HT9D0WhHCDX1u5sHMI%2BWk4tc4SdQdqzpt6BNVF7Ji0XFP0cRYWne9qW7FrEw1oVYx%2BLCERaOufYIPWKocrknM%2FWLSIJp%2FcIgwV65Z3Db0%2BiQVm6LBnDQ9XL4K5DRTJ8CBQ6Ys1mL1GYmT%2BWVsgNIXpmLnq8idXzTqF%2BrX54c8ZK8%2FhDbnaBcNVemw8Af9gTT4mxazvLDHosMTcWFgGaQNM2rOyxAxSX8KC0c3Ifn2GLzst9IWM4h9ZaXB%2FkuyNZAo4BncCvwf5IAzwqN8iPYkvVUZ%2FRNZfYe4c16QV54aEsRJ5RasxxhnVAjdndGB95eYS9pHn70MiMCAmSwRV3%2BjPhkL1XLsRNuqHvnrqtxfIwUs9pEIets6UJkDKGqIJyZyF%2Fdv6nCpLogUnXKQYMm4qdqqdFQKxzer3lPs%2FMwpOyfwwY6pgGEEtFGqxjfo1CscyJyGJQ7PI6uG8fMYseuY1m%2BW8XI99IoBuyfnXyHbSO9YVhUtav6ykXnrv357zWD6sc5JyFdB3fhVvv5aGnMr%2B%2BELmU6KxpViM%2BldReW%2FOy%2BmX8cV38ruz%2F03ktHq4L8vv8jJKRFIWvuj4r%2B6GiKqhW4zYwroNhIqcXb8jg57kGt33Dm0zh4fXJRXdP30XKbZOFmYHapi3T3fQgP&X-Amz-Signature=baef4e6bc49a7a3266d55f9a9d1232d1cf38ae82a60b15c3578a23f3f940f91f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
