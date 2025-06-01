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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GWRWX5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCu6WjDgE%2FNedvSwlt1%2FSY3sd6Ur53jY792LTjVMfXRlQIhANN3Hrxg3TLp5BV5V8aOibRey%2Bf3oJCHwXre1mGP5iGeKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHUOVqzYqdY8srFUq3AMrJOnRslFY%2BNMRpQWyq4V%2BtYnZ08znu0G%2FYw%2BD7PZ%2FnxWGgpU%2BiM7MhuWmyfK72mMFu66I3afPGm866g1KgZsGVYfYV%2FNLL2DDaQDrjHI61c1qTZRTSyLJoP5z%2BNl%2B8kTVlzTP9sMwDAhVObyuQv%2B0ko7A4GLy%2F%2FDKVW4C8dmP0ELnYNujbwVOMDHGE1NxI62rcJ%2BVIO6qfpgeHK80yrUA%2FqkwdPUStdwabqMxLncwL0%2F0%2BnOZOGD0a0QnmsqIt6qYK5RbDrb76GQXwCIySRA5hLYcteb1y5stqE1U8rNz1KEds4oLYKrgbMs5vmW3QvHYyMZNzOMDoQqCf%2FJx06mAZ3H5JFdFlFIXDz6wJQPfe%2FzgKT5y1Q6vWqpPEirZ5aeVskLXTtw1kf3XLk2jftfb7RK4M5z3FceH7nU8JIi8QTd2PwntJJH0dtgKOUjdp4TWRGik0o7jdM%2Fx1K%2FjmIgDYbtSXmMoXHDfQ1j1bKTsBKc1n32yvEsf89QNY3h7bFickhn73nlN2o4PHWtdrAvUNlmHZtFRX69djX9ru9I0AWDn%2BK3EgiBOIAB%2BfTVPaEUXOykC2uFSrCIQDiXhNIhPJeuKtzJ5W%2BJ5ZRjwdx7DEm24OWLR3kAvd3tj5zD73%2FDBBjqkAUHdcr%2F21nqfhzTLf0K9saEjOf90YyEJSw%2BZk2Q6OHtyjnPwoqAYXeIFuvolPiV5SefzT2Ep6Gw8ZbepSAn66nNZeyIFFRteczodIif8oQp0%2FlpDCYS7hrJOJ1LYvdDmIM7ANdyw0NQwLUqUr1C0nesAbOQdS%2BdKAzf4PEw7md4Tpeip478G7zKYrf9lnXF21qb408l9dXW5sLnOo3sZ0tH%2F4qUO&X-Amz-Signature=3d3be9b19657d7eab985b4c08c2260b7abef0364b7fabd3f00a1c75d6f4419c4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GWRWX5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCu6WjDgE%2FNedvSwlt1%2FSY3sd6Ur53jY792LTjVMfXRlQIhANN3Hrxg3TLp5BV5V8aOibRey%2Bf3oJCHwXre1mGP5iGeKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHUOVqzYqdY8srFUq3AMrJOnRslFY%2BNMRpQWyq4V%2BtYnZ08znu0G%2FYw%2BD7PZ%2FnxWGgpU%2BiM7MhuWmyfK72mMFu66I3afPGm866g1KgZsGVYfYV%2FNLL2DDaQDrjHI61c1qTZRTSyLJoP5z%2BNl%2B8kTVlzTP9sMwDAhVObyuQv%2B0ko7A4GLy%2F%2FDKVW4C8dmP0ELnYNujbwVOMDHGE1NxI62rcJ%2BVIO6qfpgeHK80yrUA%2FqkwdPUStdwabqMxLncwL0%2F0%2BnOZOGD0a0QnmsqIt6qYK5RbDrb76GQXwCIySRA5hLYcteb1y5stqE1U8rNz1KEds4oLYKrgbMs5vmW3QvHYyMZNzOMDoQqCf%2FJx06mAZ3H5JFdFlFIXDz6wJQPfe%2FzgKT5y1Q6vWqpPEirZ5aeVskLXTtw1kf3XLk2jftfb7RK4M5z3FceH7nU8JIi8QTd2PwntJJH0dtgKOUjdp4TWRGik0o7jdM%2Fx1K%2FjmIgDYbtSXmMoXHDfQ1j1bKTsBKc1n32yvEsf89QNY3h7bFickhn73nlN2o4PHWtdrAvUNlmHZtFRX69djX9ru9I0AWDn%2BK3EgiBOIAB%2BfTVPaEUXOykC2uFSrCIQDiXhNIhPJeuKtzJ5W%2BJ5ZRjwdx7DEm24OWLR3kAvd3tj5zD73%2FDBBjqkAUHdcr%2F21nqfhzTLf0K9saEjOf90YyEJSw%2BZk2Q6OHtyjnPwoqAYXeIFuvolPiV5SefzT2Ep6Gw8ZbepSAn66nNZeyIFFRteczodIif8oQp0%2FlpDCYS7hrJOJ1LYvdDmIM7ANdyw0NQwLUqUr1C0nesAbOQdS%2BdKAzf4PEw7md4Tpeip478G7zKYrf9lnXF21qb408l9dXW5sLnOo3sZ0tH%2F4qUO&X-Amz-Signature=52c6a4786919daafb7e3cc87fcf39e1ae2f3972769834e348f8354f5d882f892&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
