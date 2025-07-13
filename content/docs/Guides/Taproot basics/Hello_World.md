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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILTI2QE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwvSoy%2Fu1H2LMI2ZUUIGYyM1tUEz798ogssvlE75AY8wIgfFqDyabHUSKc7Dg%2Fu%2BVR5j7MpMOdwRCLj1v11qWlvSsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEn5oWvbTDCGY8TjmCrcA4lR1lG2sVm90cWqRe6C9xSUwQrrX40AqkvSNeni7mUDHSSeScBtd01H6EQDbLdTYzwazPbxC%2B3FNTqhp6VxuEz6bXE4vGQui2f1F6v3Lvj4oUv5K%2FDLVyvrGH9zUitUI9%2BWTnnGP52Bc9abc35iiFXLua3ZS5AFh1O8Vc50wz4QqALUPRJDh%2BXpoxM%2BE6g18OG3dbP7xjZPHKoNchWcMOq%2FQVgoQRsuYb%2F3HREEybnnZZs6wpLZznIft6yyoDDqnG2eHs8Er8r1y0E%2F6vx%2FfQN545bYVwoikyrEl2aNkV%2FDQITUX8cI0m03dL0H1D03pmd38kDVnB3vqPvqp5FXCHISAf9hhWJOITMCeLNRiOhVU%2FVDYTw9g5URYUFaLACF9wydw3vP4nlTUWfAZrFOCNkNwHYLLjBKZY2g6vNVOCZ4T%2FlaxhzQTkdXFO5sbpLcIOGTGvI76zYmoTgS9xn%2BmAFyj3VqArSNE0evcazXmealbj5%2FSdjeF99Ct6hmuWb3lwQJsI2pU0qIDZoUv5p5UbIqDVBp1oGrsaTd3jUdnJSRj6oMyA91pFtmyZ5q3IqBP8paLqbnIcvoro0geFCia%2BaqohMK6pI3C28PIjBLlCGMeP6SPVA5ySlNYnKoMLjYzMMGOqUBj90x88fpcue0OFww15j9hgXpzyZdt4JBOfcIiWfiRvGgaR2ifK3lqdliQ7QEz7Nv7mgkDt%2BNQaPEPE8KkqFnhSrWCwRB1%2B%2Bm6NiRne8iMlySvssyjut%2FPe74nKE55b4fLCCezq67tG5deNUMHGXdPU1mesFbsef3otVnJVEYEk47rv7WOrN6h7Wb2UBfRcWzGPCJF2mrgeV1u1Z5dD4OjvLL%2FdSY&X-Amz-Signature=468ca8166b41ce534c4b4d40dc48ac8a708fd16a6decd695550b3df2c1a16784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILTI2QE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwvSoy%2Fu1H2LMI2ZUUIGYyM1tUEz798ogssvlE75AY8wIgfFqDyabHUSKc7Dg%2Fu%2BVR5j7MpMOdwRCLj1v11qWlvSsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEn5oWvbTDCGY8TjmCrcA4lR1lG2sVm90cWqRe6C9xSUwQrrX40AqkvSNeni7mUDHSSeScBtd01H6EQDbLdTYzwazPbxC%2B3FNTqhp6VxuEz6bXE4vGQui2f1F6v3Lvj4oUv5K%2FDLVyvrGH9zUitUI9%2BWTnnGP52Bc9abc35iiFXLua3ZS5AFh1O8Vc50wz4QqALUPRJDh%2BXpoxM%2BE6g18OG3dbP7xjZPHKoNchWcMOq%2FQVgoQRsuYb%2F3HREEybnnZZs6wpLZznIft6yyoDDqnG2eHs8Er8r1y0E%2F6vx%2FfQN545bYVwoikyrEl2aNkV%2FDQITUX8cI0m03dL0H1D03pmd38kDVnB3vqPvqp5FXCHISAf9hhWJOITMCeLNRiOhVU%2FVDYTw9g5URYUFaLACF9wydw3vP4nlTUWfAZrFOCNkNwHYLLjBKZY2g6vNVOCZ4T%2FlaxhzQTkdXFO5sbpLcIOGTGvI76zYmoTgS9xn%2BmAFyj3VqArSNE0evcazXmealbj5%2FSdjeF99Ct6hmuWb3lwQJsI2pU0qIDZoUv5p5UbIqDVBp1oGrsaTd3jUdnJSRj6oMyA91pFtmyZ5q3IqBP8paLqbnIcvoro0geFCia%2BaqohMK6pI3C28PIjBLlCGMeP6SPVA5ySlNYnKoMLjYzMMGOqUBj90x88fpcue0OFww15j9hgXpzyZdt4JBOfcIiWfiRvGgaR2ifK3lqdliQ7QEz7Nv7mgkDt%2BNQaPEPE8KkqFnhSrWCwRB1%2B%2Bm6NiRne8iMlySvssyjut%2FPe74nKE55b4fLCCezq67tG5deNUMHGXdPU1mesFbsef3otVnJVEYEk47rv7WOrN6h7Wb2UBfRcWzGPCJF2mrgeV1u1Z5dD4OjvLL%2FdSY&X-Amz-Signature=d8c12d782d9656e38ea31f662dff6ea63f6b236f95a5c2c8a4788ef6cfe2019c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
