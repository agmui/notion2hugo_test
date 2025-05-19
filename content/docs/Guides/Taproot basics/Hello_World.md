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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIQ4LH2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2b7INsgmcynCYeR8karIOYer9dlzkE3cDXNsmaUHvHAiEA3HEpKZfrznrefS2rloMt1RQ7j5eZE7fFGqCmFF8Jzl4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOn2AygXtQUl1MD8CrcA3n7DHThEhoCC6JgtZsAXwfEJiQJ6A%2Bjr7tQdTGXFUHL35CAh8pOvPqXnW60KazRbFFf5qHqyeDq4BZAvTj1ct%2FBfMcgnCZyxrZQjB3iZjGg5UruO%2BzAm%2BPsIWF7t8cnh4q1JZpbhhjMqYWQ5OMWzGFDdopRIKK5k%2BFQnH46VWG74alehrzZCSbgxJusfG4zsF1E1pbyLZGxIr0NLPnksGHiektSO5ER%2Bc7WTv0aSXphpX6K7wStnOvAOxigCYAR8NZDd%2FWcwJw%2BJN0bTfqNbDynjNgxzyFbwap5mtJAOqIEDaakvQmtZegqbPjqJ8zYLozjc6IB73%2F6Ek6IA46XlfV18vpxeuv%2FHPiOgBHW4A5VNWAl%2BvUv095KRWDY84eVcxqYx4pHeWIYXaIyCDBNTp3E0p6IVcdl7ITLRK%2BHcdDgipeocsDtnUdYLtC3JaKQs3t6qNQ4DV9gNE81aERU2gaoTxqSOoX9inC9%2B6FS6ZrYWGHj8swoCTRiCbCs%2F7VfbjA4c%2FaVSlhnovWed6IFMQbdfuVDLqS4c7%2FwF7usEexBVuX%2FcLLBI8GidWH7U6IIM2toxhb18jKYBuBb6BSZW2sTAg%2Bex1oE5JZ0PV39QgFp1ikYl%2B2pSaKvSrsqMPCurcEGOqUBQHUhCND0OyEHYQAWuRNN7%2BUVML3gcnRSDeiG08O3hE9myAVdMW5ir3TqwWY5c4wKcZc29mzFzGTXYuqB%2FHwgQ9cStjHxGVILzig4U9Nn5ZaRpQsPFot9BcManLy%2FaLjJMF0xLhb2rpTqYs38AQE0f1Rk7wzUV6MdMzMoGxFzwl2YgNa6ubAN6juRJGK6YgTB2UgDo8fw116R1BfuhipgtjBZxxyJ&X-Amz-Signature=e9e549a6f0300c4a9ecd15515c5bcae9bdad324cf2e3e9c7bf090ac3ef0713ce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIQ4LH2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2b7INsgmcynCYeR8karIOYer9dlzkE3cDXNsmaUHvHAiEA3HEpKZfrznrefS2rloMt1RQ7j5eZE7fFGqCmFF8Jzl4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOn2AygXtQUl1MD8CrcA3n7DHThEhoCC6JgtZsAXwfEJiQJ6A%2Bjr7tQdTGXFUHL35CAh8pOvPqXnW60KazRbFFf5qHqyeDq4BZAvTj1ct%2FBfMcgnCZyxrZQjB3iZjGg5UruO%2BzAm%2BPsIWF7t8cnh4q1JZpbhhjMqYWQ5OMWzGFDdopRIKK5k%2BFQnH46VWG74alehrzZCSbgxJusfG4zsF1E1pbyLZGxIr0NLPnksGHiektSO5ER%2Bc7WTv0aSXphpX6K7wStnOvAOxigCYAR8NZDd%2FWcwJw%2BJN0bTfqNbDynjNgxzyFbwap5mtJAOqIEDaakvQmtZegqbPjqJ8zYLozjc6IB73%2F6Ek6IA46XlfV18vpxeuv%2FHPiOgBHW4A5VNWAl%2BvUv095KRWDY84eVcxqYx4pHeWIYXaIyCDBNTp3E0p6IVcdl7ITLRK%2BHcdDgipeocsDtnUdYLtC3JaKQs3t6qNQ4DV9gNE81aERU2gaoTxqSOoX9inC9%2B6FS6ZrYWGHj8swoCTRiCbCs%2F7VfbjA4c%2FaVSlhnovWed6IFMQbdfuVDLqS4c7%2FwF7usEexBVuX%2FcLLBI8GidWH7U6IIM2toxhb18jKYBuBb6BSZW2sTAg%2Bex1oE5JZ0PV39QgFp1ikYl%2B2pSaKvSrsqMPCurcEGOqUBQHUhCND0OyEHYQAWuRNN7%2BUVML3gcnRSDeiG08O3hE9myAVdMW5ir3TqwWY5c4wKcZc29mzFzGTXYuqB%2FHwgQ9cStjHxGVILzig4U9Nn5ZaRpQsPFot9BcManLy%2FaLjJMF0xLhb2rpTqYs38AQE0f1Rk7wzUV6MdMzMoGxFzwl2YgNa6ubAN6juRJGK6YgTB2UgDo8fw116R1BfuhipgtjBZxxyJ&X-Amz-Signature=98396438e1ac20dd8cb54b7ce6032f53efabbb82ff92c4290acb3dc642a43f80&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
