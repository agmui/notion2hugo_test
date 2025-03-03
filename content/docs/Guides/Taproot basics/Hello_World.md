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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSTZYNE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBhJx9VHdlplFC8TFV4F7jBQn3yL5JZ%2FD3324RikwmwIgA3XS9dLMo86NDWt%2BGxqySxu3l%2BabqpEjGR0ieOZdzW0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAN%2BuyfyGQH%2FhKObircAw6jY%2FEX9pHiQU2NOn1PgkSoOEiuuBmPycylUxLN65BeqnIdIB3tdWmIN0dVPbps0hmrgp7TBAby0eWDDga6gSC2PXYTOCUZTb8LuuqGn2ooaQde1EY3Ki7GZjyPzywbTc1nAlEc729elaiCnnXZQHynpQ8iD3NH7RsfPX5RMdphMcCLKH95RCrJHZk3znQ8gWkXBYUM5%2BKqyvsV5fNDVii%2F6udt0%2BIQE76%2Fc5m%2FccP5QI0PJcb26kqWPYk9dgVaoMBOrBBmrumfyLemWDRgggoIXkuUxXVieWqxzSy7ldYt0A2K%2FPcaPiMaAFmb70xHqFHM%2BCx%2F6QqP6M6rn1Lxa2TowPFYzMHPVDyH5gRl%2BlyYD9RHCFO%2FqCPaXAA9P90EfV40BxUeJhaQ1NvosY75teJ6kcZfuZMbTxRrnz7oTjV6G%2BvEmgIyh4TyTzo4UXtw7FN7czWipyexFned6%2B%2BjFh4vtmtNAdkbHTcw1uHwTQ4%2B8g6uwkHGbe3gjmCAkZr1NrrNNiYQ8qX84vABCvohQDu4rWJ1aE24nRgh%2F8BYp2a5Hv52kW7uJ%2FDqgADE%2FkaIg7GzkAhXa0218DbyRt2rU9dMRijd3hbgxAb5wsV%2BaMWq0kenoJ2YZPXQfs0wMND9lb4GOqUBQvfDOLmpwnDvbvnyYipitWcYantKv2VfAUNNRbsOfz7rt0XX5WbEgTNrFqLiOW2KFLtXW6q7orjhZQP3kz4cNw0N6Ykt2WB65L1%2FwAJhJOZjNsnOfWgitVbWv3EnE4BH7e%2FTOpWyNwEHqAahVI3DW3XrNXS68dM%2FHzD2jLkjvl3BkAbxTzXxHJR%2FjckSBVU2aLUTXXDaKml3cPrVXgN5Ccevu1ct&X-Amz-Signature=5cb3ad80a9830e494156cd9b00bb76adde542f5fa4901717f193023e9adc16f2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSTZYNE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBhJx9VHdlplFC8TFV4F7jBQn3yL5JZ%2FD3324RikwmwIgA3XS9dLMo86NDWt%2BGxqySxu3l%2BabqpEjGR0ieOZdzW0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAN%2BuyfyGQH%2FhKObircAw6jY%2FEX9pHiQU2NOn1PgkSoOEiuuBmPycylUxLN65BeqnIdIB3tdWmIN0dVPbps0hmrgp7TBAby0eWDDga6gSC2PXYTOCUZTb8LuuqGn2ooaQde1EY3Ki7GZjyPzywbTc1nAlEc729elaiCnnXZQHynpQ8iD3NH7RsfPX5RMdphMcCLKH95RCrJHZk3znQ8gWkXBYUM5%2BKqyvsV5fNDVii%2F6udt0%2BIQE76%2Fc5m%2FccP5QI0PJcb26kqWPYk9dgVaoMBOrBBmrumfyLemWDRgggoIXkuUxXVieWqxzSy7ldYt0A2K%2FPcaPiMaAFmb70xHqFHM%2BCx%2F6QqP6M6rn1Lxa2TowPFYzMHPVDyH5gRl%2BlyYD9RHCFO%2FqCPaXAA9P90EfV40BxUeJhaQ1NvosY75teJ6kcZfuZMbTxRrnz7oTjV6G%2BvEmgIyh4TyTzo4UXtw7FN7czWipyexFned6%2B%2BjFh4vtmtNAdkbHTcw1uHwTQ4%2B8g6uwkHGbe3gjmCAkZr1NrrNNiYQ8qX84vABCvohQDu4rWJ1aE24nRgh%2F8BYp2a5Hv52kW7uJ%2FDqgADE%2FkaIg7GzkAhXa0218DbyRt2rU9dMRijd3hbgxAb5wsV%2BaMWq0kenoJ2YZPXQfs0wMND9lb4GOqUBQvfDOLmpwnDvbvnyYipitWcYantKv2VfAUNNRbsOfz7rt0XX5WbEgTNrFqLiOW2KFLtXW6q7orjhZQP3kz4cNw0N6Ykt2WB65L1%2FwAJhJOZjNsnOfWgitVbWv3EnE4BH7e%2FTOpWyNwEHqAahVI3DW3XrNXS68dM%2FHzD2jLkjvl3BkAbxTzXxHJR%2FjckSBVU2aLUTXXDaKml3cPrVXgN5Ccevu1ct&X-Amz-Signature=d6f7f933b4422084317f2e12bebc3258bc5fe66b5053f83f7b908ef6f2cb0e65&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
