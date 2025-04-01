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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GDA5FG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDb%2FamO2EFCF6e%2FjyblnJC2%2Fdhtl9%2Bms4SZQ3ZsaGz%2B4AiATejDjW5eow0IFT3UjRHSkLZkhmKUXLhgjKb1dScI%2BUSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3E%2BGlaGHeFWWVlPlKtwDmx4lZqui7FP0mfrH2uIgfQdq%2BjFe%2Fw8%2BokYXFz4NrVWVWJmAl69thByvVkBhguNJFwe%2BJ1R2Vztdyjvxz3IrkRwGXrA2S8Djs6QnNhohh2hKH9p%2F0y%2F5n3%2Bg17jGcxdgF%2B1trr6%2B8TKQGo2tZRdRrpmmICYUG5pwf%2FEeGMdJ3NFXDCFWz7hHE35omTEatK8a%2B%2FlFFzrQB6n1WiaKN5k2li7JfsQxZH64eyBe33%2FSVKbtGA09DD9Za791BhCTeXC9KKsk4WrVVPNGyxUovIQofhwQxkj2R9EhMkMoWb1RPUWVvQouDSdT9G5CgpeEnNdmNw6TdP76KQ1kxuq5Fzz7L%2BixEy30RaVNPSyMSx5jHFGCYiMVn%2FgFA%2FGSkASkp2P8BRlsoMWzoOJ8OJkBqbIwAIvnGXPI4%2Fed0mfvkI%2B%2F9MunnPTkXpPdk3qqYW%2Fex3n5jAbKnZOKIWCVpWrry0o0vScL1NgWtfX16fshGBHcYYB8pwaAsw2%2FZ3Kv5rW3buSNBIZnCUYZJl%2FtsvRQSF3KCCwp%2F0NvA2iAXczOC%2Br9%2BQqawIs93iDMhHKxXfsRtnTOLO4NdLuN8z33IoBOmp%2FW1Q4tgyTYdnZWfACKoypAYca5jlOrWykDCDkKNzMwhuauvwY6pgGymQxrqvYs1liDPhsueUVZdI7YsdCrPARm1ZYQ3whYj5dPq83gLmGRnzDSGsUw%2BFOoSYIMQoPZiFHdG2q7o9yMyiZRMO%2Fr0NEzJmldwZnCmckRXKBriKrugfgankjDdaS%2Fyz2HJubpDb85L%2BvFlHn5KI0RhdM7jXPMvo46f1yaTdAxDvfMp09yrnRgRbOnaQEQZfATFrEqC8iMLFv9OCgrGKmBfTnD&X-Amz-Signature=aa5d61f0aa404eeabfacb029ae9972ba04b88a5ba7408ca5f9085d34a7c78b49&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GDA5FG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDb%2FamO2EFCF6e%2FjyblnJC2%2Fdhtl9%2Bms4SZQ3ZsaGz%2B4AiATejDjW5eow0IFT3UjRHSkLZkhmKUXLhgjKb1dScI%2BUSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3E%2BGlaGHeFWWVlPlKtwDmx4lZqui7FP0mfrH2uIgfQdq%2BjFe%2Fw8%2BokYXFz4NrVWVWJmAl69thByvVkBhguNJFwe%2BJ1R2Vztdyjvxz3IrkRwGXrA2S8Djs6QnNhohh2hKH9p%2F0y%2F5n3%2Bg17jGcxdgF%2B1trr6%2B8TKQGo2tZRdRrpmmICYUG5pwf%2FEeGMdJ3NFXDCFWz7hHE35omTEatK8a%2B%2FlFFzrQB6n1WiaKN5k2li7JfsQxZH64eyBe33%2FSVKbtGA09DD9Za791BhCTeXC9KKsk4WrVVPNGyxUovIQofhwQxkj2R9EhMkMoWb1RPUWVvQouDSdT9G5CgpeEnNdmNw6TdP76KQ1kxuq5Fzz7L%2BixEy30RaVNPSyMSx5jHFGCYiMVn%2FgFA%2FGSkASkp2P8BRlsoMWzoOJ8OJkBqbIwAIvnGXPI4%2Fed0mfvkI%2B%2F9MunnPTkXpPdk3qqYW%2Fex3n5jAbKnZOKIWCVpWrry0o0vScL1NgWtfX16fshGBHcYYB8pwaAsw2%2FZ3Kv5rW3buSNBIZnCUYZJl%2FtsvRQSF3KCCwp%2F0NvA2iAXczOC%2Br9%2BQqawIs93iDMhHKxXfsRtnTOLO4NdLuN8z33IoBOmp%2FW1Q4tgyTYdnZWfACKoypAYca5jlOrWykDCDkKNzMwhuauvwY6pgGymQxrqvYs1liDPhsueUVZdI7YsdCrPARm1ZYQ3whYj5dPq83gLmGRnzDSGsUw%2BFOoSYIMQoPZiFHdG2q7o9yMyiZRMO%2Fr0NEzJmldwZnCmckRXKBriKrugfgankjDdaS%2Fyz2HJubpDb85L%2BvFlHn5KI0RhdM7jXPMvo46f1yaTdAxDvfMp09yrnRgRbOnaQEQZfATFrEqC8iMLFv9OCgrGKmBfTnD&X-Amz-Signature=a25741f80a204672d7428e9eb7e9efef1a4e02eef1e578ec685a841de1cea913&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
