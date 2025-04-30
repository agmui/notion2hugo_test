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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHN26SXF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCkzpMj6DPaPvghRXlhA17gWS8EAUeAN190SDGQGvNbfQIgdPBmwW%2B8Z7fgGsoEfZvyNEP1jBcDRW1qbb6TY%2FaqM1wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEGPQmYT9zfApAJOyrcAwUYQOzmuveOUmQ%2Fi%2FsInaX7qgJSyq%2B7zt59cdbXHkglxHqKgcHaiqNRKUnjjh6q%2Bsix%2BWHz6%2B71sLfpYLIs9429X7aWcCFNCqNEjNppBR0FQaCCPIQd2%2BxN0vq85qE8jg0n0Aon0BT3E2FWKbcMP%2BaZE9JTyQ0j1HFeidDmIa8lUE5ChuaIafGAQA%2Fb6PoR%2BXY%2BQvuGS%2FvwMnWlsPgKNvCH7Cjx8Mf7tCjYFNzhENbiuxHdcIj3tckgoLwSlKfT4S4reRpaxyrUxYCFczNd9zVHdgT4Pz9YABYDTsGMytxcn5dPw4wPVXT5KwTZ6kcuCIeTneI4cWzFL%2FSMOG3gZn61gdvRzbgfckn79jQRFN3i2z%2BaOR5Mxwk6qKb92TrBPqdsUVs%2FeRw%2FKUj21jPQIGzU17IneDOlNZfYJf44o%2FoKl4mETlViUhEVkDTSx3VeRkWnyx%2BllhmrGutjYaDL2NMxlEBhuZjjhwVl7nMwwWd5l2daTyxBqj2qNCJ%2B1FfLOHoQmr5sudKJlNS9yOfCZQK56yyvBzywAdgUubCISGce%2FmZ91fRzx8HbDmjVYPFEIKGzkWi1VC%2FwggqILk3TbWAFy84Byf6JUMV%2Fj6jVrmEz91OVSa9fQYtr%2FLVCMK%2BYx8AGOqUBkm7uQHdB6ZAUtgKLbilzw5GQoc%2FP5wJHGov2ZyyiRhpnRO%2BHnAwTDV0yyqVMfodIanaWGLfIBx6cxz0AtOFDxzNwTnrqdepdX19epO68I8dpKvHO1ve8qvc5M%2Fwp%2FYbA3kcpKBoXUfPowRifsB%2BB0JdQHAtq9I6fzvtnzuvk6I1ei%2FyUlAQ0ulnn%2BMALWloZgw5H6xWoo1rKiSjzhZjkNNTs6qwi&X-Amz-Signature=8039185c284fda1d870d9c62142f5c9d910d2b8c8d30167e99006b8fefb692de&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHN26SXF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCkzpMj6DPaPvghRXlhA17gWS8EAUeAN190SDGQGvNbfQIgdPBmwW%2B8Z7fgGsoEfZvyNEP1jBcDRW1qbb6TY%2FaqM1wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEGPQmYT9zfApAJOyrcAwUYQOzmuveOUmQ%2Fi%2FsInaX7qgJSyq%2B7zt59cdbXHkglxHqKgcHaiqNRKUnjjh6q%2Bsix%2BWHz6%2B71sLfpYLIs9429X7aWcCFNCqNEjNppBR0FQaCCPIQd2%2BxN0vq85qE8jg0n0Aon0BT3E2FWKbcMP%2BaZE9JTyQ0j1HFeidDmIa8lUE5ChuaIafGAQA%2Fb6PoR%2BXY%2BQvuGS%2FvwMnWlsPgKNvCH7Cjx8Mf7tCjYFNzhENbiuxHdcIj3tckgoLwSlKfT4S4reRpaxyrUxYCFczNd9zVHdgT4Pz9YABYDTsGMytxcn5dPw4wPVXT5KwTZ6kcuCIeTneI4cWzFL%2FSMOG3gZn61gdvRzbgfckn79jQRFN3i2z%2BaOR5Mxwk6qKb92TrBPqdsUVs%2FeRw%2FKUj21jPQIGzU17IneDOlNZfYJf44o%2FoKl4mETlViUhEVkDTSx3VeRkWnyx%2BllhmrGutjYaDL2NMxlEBhuZjjhwVl7nMwwWd5l2daTyxBqj2qNCJ%2B1FfLOHoQmr5sudKJlNS9yOfCZQK56yyvBzywAdgUubCISGce%2FmZ91fRzx8HbDmjVYPFEIKGzkWi1VC%2FwggqILk3TbWAFy84Byf6JUMV%2Fj6jVrmEz91OVSa9fQYtr%2FLVCMK%2BYx8AGOqUBkm7uQHdB6ZAUtgKLbilzw5GQoc%2FP5wJHGov2ZyyiRhpnRO%2BHnAwTDV0yyqVMfodIanaWGLfIBx6cxz0AtOFDxzNwTnrqdepdX19epO68I8dpKvHO1ve8qvc5M%2Fwp%2FYbA3kcpKBoXUfPowRifsB%2BB0JdQHAtq9I6fzvtnzuvk6I1ei%2FyUlAQ0ulnn%2BMALWloZgw5H6xWoo1rKiSjzhZjkNNTs6qwi&X-Amz-Signature=d2488dfb1fd7ab6077f033f2e8e714e67b7ec50c19a53bae61d865f229327b67&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
