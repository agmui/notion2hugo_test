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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPLIO6Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCt9bk9QlMpLOSvrOSmFNbO%2FjIqWKIL4MezvwA7YNN8rwIhAIuuWz1i%2FVRfs555u5utZOALoW31n8n77QfMrcWP1OFvKv8DCCgQABoMNjM3NDIzMTgzODA1Igy1eWGyuXz1V%2Fr3EUcq3AMsabAKHGCGaq6tjyjja12kiGO%2FGXp%2F5r5Zu7SSm7vRVMBrCLzzvFgW49SK5mzQBxoFDhWwhm6RlJpU1b3CW446gALi7mYG%2FbR2fERiAVrDjPt%2F4673%2BuyfjYncDFjVf3OqLyd28Lq%2B8z08WIA0yPREpuyo3zgizPn0z%2BtMh1pdCnvHebPa%2F2U8Zy9r9OWzUxhcVxQIZVyb6ltrbATYAYzA33RbIlIFn55%2F8DAKKisf0JZ%2Fs6TmBySKbivB7XESxtMma8wzVeXhm4ZqyLauqvOMQcgFYpqKpA1vM%2BrUx02TCGnycwsBrQLpFSEdvHQ3Yqi08vHed%2B%2FQXeivxIwAO9kWWZX0er1K7LlPbSBB%2FdjYjMrqUt2l3A4qFjyUkEAPRRgugUD2fVnOTH0xHllsOzjXAfXVk%2Bly%2Fdjk08N%2BzzVGAXKTC0YH56qhg2Gfr4b8T5sfhNQx6B%2FdNjUQ4NqQEEoLrX%2BN21cPK1DJqRrobWsIKSl75GdQGZqXOX3q8Cxn0vN4HYYMuIY3NNNtkp%2F3I%2FkM1jS41yYGPBfPmrcb%2FL2zdHczvDjKXjLQBNhxbfWfKTAFTFAqOYcCE9E7RDUOanOD0X1oo7sivRvA9eAhpaQySt836URJCiwvVX01cjC75v%2FBBjqkAYZgJxwewt5OA8O8Z4EdhITz2EFr8prx1H98DiIxZm2BA%2FfW0TxBOXWvuU0CCk%2FiZE7HJGNeZhn7vZb%2BQyeWL0EUID7GVmRgFjLAKRC6atL5K1G%2FzmMf0jrx%2B9oeVha6ni1m3Ta%2BTt%2F24lUKwo%2BzOM%2F8%2Fey8iwjjxPTIBFxNgAbLod8WbEDYZqSxPdC43UwNvmJf%2BAx1RLoVjJA9gQOapnqTS5fj&X-Amz-Signature=f3a8033306d64acacc1934467049e3d650b2820b58133104f0bff92756413cce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPLIO6Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCt9bk9QlMpLOSvrOSmFNbO%2FjIqWKIL4MezvwA7YNN8rwIhAIuuWz1i%2FVRfs555u5utZOALoW31n8n77QfMrcWP1OFvKv8DCCgQABoMNjM3NDIzMTgzODA1Igy1eWGyuXz1V%2Fr3EUcq3AMsabAKHGCGaq6tjyjja12kiGO%2FGXp%2F5r5Zu7SSm7vRVMBrCLzzvFgW49SK5mzQBxoFDhWwhm6RlJpU1b3CW446gALi7mYG%2FbR2fERiAVrDjPt%2F4673%2BuyfjYncDFjVf3OqLyd28Lq%2B8z08WIA0yPREpuyo3zgizPn0z%2BtMh1pdCnvHebPa%2F2U8Zy9r9OWzUxhcVxQIZVyb6ltrbATYAYzA33RbIlIFn55%2F8DAKKisf0JZ%2Fs6TmBySKbivB7XESxtMma8wzVeXhm4ZqyLauqvOMQcgFYpqKpA1vM%2BrUx02TCGnycwsBrQLpFSEdvHQ3Yqi08vHed%2B%2FQXeivxIwAO9kWWZX0er1K7LlPbSBB%2FdjYjMrqUt2l3A4qFjyUkEAPRRgugUD2fVnOTH0xHllsOzjXAfXVk%2Bly%2Fdjk08N%2BzzVGAXKTC0YH56qhg2Gfr4b8T5sfhNQx6B%2FdNjUQ4NqQEEoLrX%2BN21cPK1DJqRrobWsIKSl75GdQGZqXOX3q8Cxn0vN4HYYMuIY3NNNtkp%2F3I%2FkM1jS41yYGPBfPmrcb%2FL2zdHczvDjKXjLQBNhxbfWfKTAFTFAqOYcCE9E7RDUOanOD0X1oo7sivRvA9eAhpaQySt836URJCiwvVX01cjC75v%2FBBjqkAYZgJxwewt5OA8O8Z4EdhITz2EFr8prx1H98DiIxZm2BA%2FfW0TxBOXWvuU0CCk%2FiZE7HJGNeZhn7vZb%2BQyeWL0EUID7GVmRgFjLAKRC6atL5K1G%2FzmMf0jrx%2B9oeVha6ni1m3Ta%2BTt%2F24lUKwo%2BzOM%2F8%2Fey8iwjjxPTIBFxNgAbLod8WbEDYZqSxPdC43UwNvmJf%2BAx1RLoVjJA9gQOapnqTS5fj&X-Amz-Signature=b37250ae384265420910bfcfea80af59c8f4d99b8d1c7ef6be7c0c8d5e91f830&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
