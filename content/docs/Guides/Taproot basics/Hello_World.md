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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6KLNNC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChdmzMS1%2FZx4jGJxm28gOuH%2Bmp%2FBJInh5F%2FgpHJP6qPwIgWXRIpJEk15vhxLwglSGEFcQe5EUJ0RwvegNln4zEEtUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKNf88hQGypdCqhg%2BSrcA8Hcz1cDDe1sGxql9DutnrRuSDR7pQkRExMkIS6Pk8Xuas%2BTQd6wQLxcP5DjPvDwlaVfXVToJAzTvTYta4xmqsk5%2BVF40rgGmFj2jxycwTQeXQiKTUn3kB4qYBnhyc0exbSYFu7dowmL%2F0seLxIX7of5RO7sS6Tl9FP6%2BLvseeS1co6vHiWLYPi9T802JA1k4i4jdo4dd7DNetqWCwzK4rAmDhOD3%2FDEBqF5ztGR%2BQB6VbadxJXmez8VirAzD9nXRhfj3D1u%2BDtCV%2FEntFJOJly06p%2FpUC4fBjNaD45BqgLYfvU2HV%2F%2FjYMPXF%2BVZTt%2BGnizlSiHmtf1zLkefnnTVHARQpN41VfPRMjcHoxOkhKWQvLjWczZvfl65th1OBWRPOGG8gCQX%2Fv3tbYz%2BR0KjTgh8kysPMfx8mSe0hON0xPANUC%2BcrFHiEUqZ%2FpiPXvRN%2Bx7ZbXXeUlfl2gU1GiZQ%2BhVnEYBK%2F1nJfqUs1dl8UsAnKVP2EbnYsy8%2F4RHjnrb2T2E0dSofEYM62IlBnJCGcmKsddy0FNaLb40R2yB6HvuPXdT29IwLPKBfhcQwbwDdOEKC3DxFPi3HEGYzBWKKoBrQVBknQt6td4D081WpQhk7LAFXQqXNwUSuGWnMMuFlL8GOqUBnNIL0%2F0t2eL9k6QaxnGCfnzcVWD4jSfFCtgfOLrJcXy4G%2FrX6aN9gNXc8uAlMVzJ4zodf1Xcn%2FJvjDt1jBz1jEdHRqFZvQjZLGMpM7LTYHZX7dewRdVsNQOiHYpO%2BBFrAI0TdNWMXwHIgMf7iE7IhJkNr8uW1tEJLmtgnr6RLcoeMd%2BTGJnzCILtdGTgYpbsYfVSo%2F51pre%2BqBon6aKpm8DG7s5p&X-Amz-Signature=f6edda13ba1dccbc670441c6a40c5b67e8e8ff2ba6bdb5ad735147de31553e36&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6KLNNC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChdmzMS1%2FZx4jGJxm28gOuH%2Bmp%2FBJInh5F%2FgpHJP6qPwIgWXRIpJEk15vhxLwglSGEFcQe5EUJ0RwvegNln4zEEtUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKNf88hQGypdCqhg%2BSrcA8Hcz1cDDe1sGxql9DutnrRuSDR7pQkRExMkIS6Pk8Xuas%2BTQd6wQLxcP5DjPvDwlaVfXVToJAzTvTYta4xmqsk5%2BVF40rgGmFj2jxycwTQeXQiKTUn3kB4qYBnhyc0exbSYFu7dowmL%2F0seLxIX7of5RO7sS6Tl9FP6%2BLvseeS1co6vHiWLYPi9T802JA1k4i4jdo4dd7DNetqWCwzK4rAmDhOD3%2FDEBqF5ztGR%2BQB6VbadxJXmez8VirAzD9nXRhfj3D1u%2BDtCV%2FEntFJOJly06p%2FpUC4fBjNaD45BqgLYfvU2HV%2F%2FjYMPXF%2BVZTt%2BGnizlSiHmtf1zLkefnnTVHARQpN41VfPRMjcHoxOkhKWQvLjWczZvfl65th1OBWRPOGG8gCQX%2Fv3tbYz%2BR0KjTgh8kysPMfx8mSe0hON0xPANUC%2BcrFHiEUqZ%2FpiPXvRN%2Bx7ZbXXeUlfl2gU1GiZQ%2BhVnEYBK%2F1nJfqUs1dl8UsAnKVP2EbnYsy8%2F4RHjnrb2T2E0dSofEYM62IlBnJCGcmKsddy0FNaLb40R2yB6HvuPXdT29IwLPKBfhcQwbwDdOEKC3DxFPi3HEGYzBWKKoBrQVBknQt6td4D081WpQhk7LAFXQqXNwUSuGWnMMuFlL8GOqUBnNIL0%2F0t2eL9k6QaxnGCfnzcVWD4jSfFCtgfOLrJcXy4G%2FrX6aN9gNXc8uAlMVzJ4zodf1Xcn%2FJvjDt1jBz1jEdHRqFZvQjZLGMpM7LTYHZX7dewRdVsNQOiHYpO%2BBFrAI0TdNWMXwHIgMf7iE7IhJkNr8uW1tEJLmtgnr6RLcoeMd%2BTGJnzCILtdGTgYpbsYfVSo%2F51pre%2BqBon6aKpm8DG7s5p&X-Amz-Signature=7d3e4c64cfc476456e960231f5fd7279fe19c866a8c95eab0fc2ecd496b889bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
