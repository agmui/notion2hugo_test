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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D2VINZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BBgIYPzyuihjByEwcw2gNHw3ShLjHR3WnU0DaPMsmxwIgDOLkAtb63mE8sMWaMTzmb4cM26IRAf4z91LeKtLCqFQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD5dya3dE8Pg2p2XAircA9pBDBrhkuNUKav21By4CLWfFithvZs157CuzfEonv4PmCtXDAgzAB2l2K9tr4%2F2wiYeToHea9TkLf1uJbZcpllkUg%2Bf94YdceeSX1BxyzsfgR%2FgZoUKGrlPTGK6GEtrXV2zftM0N%2Fj6SB%2BKyiRY2Sfh4ByENpZ3TzxavaPl6GcfLFSGzqPB9cG4cdkOk5urC2SrB8Fb1oJDuoTyHKQM8HW23Dg%2BiQQKwDSRwOj8JRHLuYuwRxm4MmfOExs8RGFZ%2BejqE8ytFyV6Au8uWnx1sjHWg6qdEYwfn8Cf3TA7O%2B%2B9uWUFisCLrZ5%2BiaNWn4jx2h%2BjMNQmpE1olVxMxqljOH285Vae%2FeSANzN1upluf4ZpgZ%2FwxXzdL4Hlbm%2BH36U6nMlgpPn7dDmGLSg%2BIPNpATA9yFLOJIDMlEOe9DdyT3QR41yxBd7HUoOUZCoenZc6b%2Bx%2FCWR6yl%2BkK8QORQGBndwWdhS33HtmNGXBLcnf1c2MPt3C1nN8ttROrc6uEahsnhRb67K87eYqkxoUL8to5s0rhaz374XkSMApjFSdQZ%2FVG1m%2FlyFwmFJVp%2BXJiI6xxFdO6F3Nvcs1GzHQaX1%2B%2FdjqDW6r66GtepbwopPFbczZgX7demxGs6PpJf0lMPDW%2Br8GOqUBsb2e0R7aMP9dceXjgS4N%2FfN%2FqhbBEEp%2ByKC46MenwQW61ZqDz%2FMVp00axbY0qdgXmx%2FE7YdqRpmFmgZviqrJssPxSrYlwRpWKWReHFbVYkfQBXtZaQrc9dlFqpYO6W4dkaXcqxfudZKRJj3Jj3I%2Bs5rTfI8SYwyGEHW35hu6fpxP2q%2FwmMmp8ACFmSCItOc5d9xV%2FENBzL%2BcJMSlhX4XbEns10O8&X-Amz-Signature=c9df88c46d9e12a7edc90bdf32212ef4d554199a8af7f574927a30d10ddd14dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D2VINZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BBgIYPzyuihjByEwcw2gNHw3ShLjHR3WnU0DaPMsmxwIgDOLkAtb63mE8sMWaMTzmb4cM26IRAf4z91LeKtLCqFQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD5dya3dE8Pg2p2XAircA9pBDBrhkuNUKav21By4CLWfFithvZs157CuzfEonv4PmCtXDAgzAB2l2K9tr4%2F2wiYeToHea9TkLf1uJbZcpllkUg%2Bf94YdceeSX1BxyzsfgR%2FgZoUKGrlPTGK6GEtrXV2zftM0N%2Fj6SB%2BKyiRY2Sfh4ByENpZ3TzxavaPl6GcfLFSGzqPB9cG4cdkOk5urC2SrB8Fb1oJDuoTyHKQM8HW23Dg%2BiQQKwDSRwOj8JRHLuYuwRxm4MmfOExs8RGFZ%2BejqE8ytFyV6Au8uWnx1sjHWg6qdEYwfn8Cf3TA7O%2B%2B9uWUFisCLrZ5%2BiaNWn4jx2h%2BjMNQmpE1olVxMxqljOH285Vae%2FeSANzN1upluf4ZpgZ%2FwxXzdL4Hlbm%2BH36U6nMlgpPn7dDmGLSg%2BIPNpATA9yFLOJIDMlEOe9DdyT3QR41yxBd7HUoOUZCoenZc6b%2Bx%2FCWR6yl%2BkK8QORQGBndwWdhS33HtmNGXBLcnf1c2MPt3C1nN8ttROrc6uEahsnhRb67K87eYqkxoUL8to5s0rhaz374XkSMApjFSdQZ%2FVG1m%2FlyFwmFJVp%2BXJiI6xxFdO6F3Nvcs1GzHQaX1%2B%2FdjqDW6r66GtepbwopPFbczZgX7demxGs6PpJf0lMPDW%2Br8GOqUBsb2e0R7aMP9dceXjgS4N%2FfN%2FqhbBEEp%2ByKC46MenwQW61ZqDz%2FMVp00axbY0qdgXmx%2FE7YdqRpmFmgZviqrJssPxSrYlwRpWKWReHFbVYkfQBXtZaQrc9dlFqpYO6W4dkaXcqxfudZKRJj3Jj3I%2Bs5rTfI8SYwyGEHW35hu6fpxP2q%2FwmMmp8ACFmSCItOc5d9xV%2FENBzL%2BcJMSlhX4XbEns10O8&X-Amz-Signature=b71ad1b90a995756db760d45cc08fcf17bb1024f14ab293a0d4670709f960529&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
