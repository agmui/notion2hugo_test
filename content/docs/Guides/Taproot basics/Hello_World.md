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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHBQT6H%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQChEuQ8V3OUVAfp1vPUlleiEVJchiFqwLTi2GKFw743AQIgTFC9heLKU17dEZuJ%2FqLMzZ7Rl4cnALc1jWKwVIb%2FvQYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQgDgHUdvdiWetpXircA%2BMr6OSIWZ7%2B0WQyuw0DBAOiL%2BJZg8PAfYn3w61fBb1qKVpT4LWiJZUCY5JMIM1ckIrDRekXrIqhXBwJrGsuK2SsEyvsGmJ8ma5CCkTFWfepW4NCWTkdC6TpRfTRbExlgIZTk%2FObj49rQgvbguEizg1T6UBubgiIThwEwRizJJ62QzCk52xPPtR8aXEQZfs2Hx5EHHqLIDoZ5krI2PWzbRZmPnvb6D1uqxNJuMpoeqVJpaTuAm6DOH0Ur2t7HhZGKwEHXyW%2F7KnmU6WdFSmqezZR5BYM9ZsqkIR3iK1CF3DxkLOHuKw3DyAJOPSooVSZv6grpI54lWGxyJ%2B5yXk6I%2FdLImSd4OjPfK8%2BF9XTBqtRJqMyUptJEB6%2BkLrAZnqsiLZ%2F3%2BANMZ1%2FQZ1Fqot5V7yFYeH5zIoxDP3BMIlZc8bnBUsqqKwAfbe7ERKFA8y1t%2BKlLefQ2kcfgnnxUunJNDD%2FY3Ph3KZlXaj1z1tTvHQksI86wyOvDE1gsxMmgsSXDz4%2B5QuYUS18qdJ4iumbWw9kHyi%2B3gN0nx2w4XMJn89vJ0wvkCQQ9vtfQ1m791uRbrwojytvG7eS9ex8BhXZz2j93K717%2BKoy6u8y3FY1vlgX0XxghzGVt3QkV4AMLSpsb8GOqUBRHTqZQqYuubW45WDxmBGLrY7gAKEGDyHQahynQP8EHhRPvceoYAJOPb6yBp6RVCZwIWS4RNjJcQ6ZhLSeHlcD1ZAihVJiwYyF5H1UG95xM18pkyubJlmiL4gus8divL6i0P79mm5ojGU2zV91s8X8%2BzMHMzeMJMIxfGy%2Byt6qUhYl9CO01ogyC7UUCZ2%2ByqAN1uiX5cDfhmDEaVCLcOQvGfJgp1R&X-Amz-Signature=662dc02fb8ddcfba066b8685f0f2becd6ad523470ee8934a2bf53aa42f7870af&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHBQT6H%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQChEuQ8V3OUVAfp1vPUlleiEVJchiFqwLTi2GKFw743AQIgTFC9heLKU17dEZuJ%2FqLMzZ7Rl4cnALc1jWKwVIb%2FvQYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQgDgHUdvdiWetpXircA%2BMr6OSIWZ7%2B0WQyuw0DBAOiL%2BJZg8PAfYn3w61fBb1qKVpT4LWiJZUCY5JMIM1ckIrDRekXrIqhXBwJrGsuK2SsEyvsGmJ8ma5CCkTFWfepW4NCWTkdC6TpRfTRbExlgIZTk%2FObj49rQgvbguEizg1T6UBubgiIThwEwRizJJ62QzCk52xPPtR8aXEQZfs2Hx5EHHqLIDoZ5krI2PWzbRZmPnvb6D1uqxNJuMpoeqVJpaTuAm6DOH0Ur2t7HhZGKwEHXyW%2F7KnmU6WdFSmqezZR5BYM9ZsqkIR3iK1CF3DxkLOHuKw3DyAJOPSooVSZv6grpI54lWGxyJ%2B5yXk6I%2FdLImSd4OjPfK8%2BF9XTBqtRJqMyUptJEB6%2BkLrAZnqsiLZ%2F3%2BANMZ1%2FQZ1Fqot5V7yFYeH5zIoxDP3BMIlZc8bnBUsqqKwAfbe7ERKFA8y1t%2BKlLefQ2kcfgnnxUunJNDD%2FY3Ph3KZlXaj1z1tTvHQksI86wyOvDE1gsxMmgsSXDz4%2B5QuYUS18qdJ4iumbWw9kHyi%2B3gN0nx2w4XMJn89vJ0wvkCQQ9vtfQ1m791uRbrwojytvG7eS9ex8BhXZz2j93K717%2BKoy6u8y3FY1vlgX0XxghzGVt3QkV4AMLSpsb8GOqUBRHTqZQqYuubW45WDxmBGLrY7gAKEGDyHQahynQP8EHhRPvceoYAJOPb6yBp6RVCZwIWS4RNjJcQ6ZhLSeHlcD1ZAihVJiwYyF5H1UG95xM18pkyubJlmiL4gus8divL6i0P79mm5ojGU2zV91s8X8%2BzMHMzeMJMIxfGy%2Byt6qUhYl9CO01ogyC7UUCZ2%2ByqAN1uiX5cDfhmDEaVCLcOQvGfJgp1R&X-Amz-Signature=1758e107262497de141c30e05908c60dcdd15b6fee6438721bc41a904f249393&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
