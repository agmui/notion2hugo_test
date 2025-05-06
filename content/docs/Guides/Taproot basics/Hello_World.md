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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBRTYSR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWBjBfePBna85oomkIkoUqk%2FY2L24xERydN2U4I5VVRAiByS4JB7qQ8LATw5cLu0FDsVOSPLwh3zpCsCQ4SqR5F4ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMA8vXJVaDzVIpGV8jKtwDO5yD1%2FS8UQlF8nhqHBzfRgVcPbMlOisaJC8b8wklpsqt2Qj4%2BeCX8wRuVrufkpwNsqmIIZ17p%2BQoU8aTS%2B4Z5PUZujvYqoNhXXoqH%2BV8VoB44FgblG8HanWyfraK%2BsgK%2BAsqL%2BPechj7SmPNNytJvxWebzkHd7%2FaQRuTeTy3yb1tmLqYhCt7ikS%2Bozp1wu7TtlrOdgvRb8hQPSs%2Fn7G%2FG0eTVzAqWCabFSyooxAGfEt7NZd39oNNKNx4ONbpAm0uvlueo09hjhCVzJKILbSGGTYA5%2F2KWV8fpzcI2foKc3DiG9SyIt5qtdy7cEo1xCPfDIkLm9%2FHi9W4tGkJhwuhr1ezQdkUhgEjJERh0e23S88ihu9NCzLXBWz0g9llb5tdhnapU1UAVhVX5kjpUzdRwvnj%2BATvisxnhacLJzmFODPDbE0X3AVK5tKwNCsPNpY5kLoqNojlaE7x1ksN%2FqxgEF6Xs9a4bgo4BYcf%2F%2FFXB2hel1gxTCqoLg5zyZruD38f9YghxuJ195rbswrPRtr5hYbhwdrO2e6wHqhQRexkTv2rv4OD6aAJaFxD2iMCM7vMyqBNhkaR5ZjFQjkqEpp9m2Rd%2Byimn%2BSVHT72NWNLEKTuGDV7VGrTb7HAgLYwtoPmwAY6pgGoPIeMXeTTw%2Fc738nLh1zwZK%2B5Z1xMWq2n7epXx64Fe9Zdi0ZqjcAzWXW5CJJ0wleZRPL3mvys%2BXKan7MZOrr%2Fvryyvr%2FwtRQwiv1fu69TtrzExmZ7KtH9qYF66XdPxiCMQmQPkreTNy1OAiVMyft36VgtEUNmLq2SOwtJIMigxEjZVHKWhuRnKznWldwyaUo9ttrXPmudNRnMYdTXX3TP4O%2FGG8yK&X-Amz-Signature=cb26aeae66a1e62399987da40e80586d3645900204c7aa7a727155012871d04e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBRTYSR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWBjBfePBna85oomkIkoUqk%2FY2L24xERydN2U4I5VVRAiByS4JB7qQ8LATw5cLu0FDsVOSPLwh3zpCsCQ4SqR5F4ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMA8vXJVaDzVIpGV8jKtwDO5yD1%2FS8UQlF8nhqHBzfRgVcPbMlOisaJC8b8wklpsqt2Qj4%2BeCX8wRuVrufkpwNsqmIIZ17p%2BQoU8aTS%2B4Z5PUZujvYqoNhXXoqH%2BV8VoB44FgblG8HanWyfraK%2BsgK%2BAsqL%2BPechj7SmPNNytJvxWebzkHd7%2FaQRuTeTy3yb1tmLqYhCt7ikS%2Bozp1wu7TtlrOdgvRb8hQPSs%2Fn7G%2FG0eTVzAqWCabFSyooxAGfEt7NZd39oNNKNx4ONbpAm0uvlueo09hjhCVzJKILbSGGTYA5%2F2KWV8fpzcI2foKc3DiG9SyIt5qtdy7cEo1xCPfDIkLm9%2FHi9W4tGkJhwuhr1ezQdkUhgEjJERh0e23S88ihu9NCzLXBWz0g9llb5tdhnapU1UAVhVX5kjpUzdRwvnj%2BATvisxnhacLJzmFODPDbE0X3AVK5tKwNCsPNpY5kLoqNojlaE7x1ksN%2FqxgEF6Xs9a4bgo4BYcf%2F%2FFXB2hel1gxTCqoLg5zyZruD38f9YghxuJ195rbswrPRtr5hYbhwdrO2e6wHqhQRexkTv2rv4OD6aAJaFxD2iMCM7vMyqBNhkaR5ZjFQjkqEpp9m2Rd%2Byimn%2BSVHT72NWNLEKTuGDV7VGrTb7HAgLYwtoPmwAY6pgGoPIeMXeTTw%2Fc738nLh1zwZK%2B5Z1xMWq2n7epXx64Fe9Zdi0ZqjcAzWXW5CJJ0wleZRPL3mvys%2BXKan7MZOrr%2Fvryyvr%2FwtRQwiv1fu69TtrzExmZ7KtH9qYF66XdPxiCMQmQPkreTNy1OAiVMyft36VgtEUNmLq2SOwtJIMigxEjZVHKWhuRnKznWldwyaUo9ttrXPmudNRnMYdTXX3TP4O%2FGG8yK&X-Amz-Signature=a5cacd035afb8d5eb0ba7272868f0a2a59dbdfe610639fdf1f705e3a8577a808&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
