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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTINMFIP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJsaFE34hcGkBKRWDFrd21ZzNCe8r5VqgVQU6E2E06FAiEAsm0kEF8LNdBJuYMiHLeSMeXHOTTQLBK1R7spNtiuTsAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH02%2FF%2B3frKI1Hsb0ircA5pASaRELhlT386UkPhM9IFOmiFh4Y4n3Qa2z2VGJkMc51ss6pua813%2Fw%2BubdJIVGl%2BMrnkjhVa3guwwshxzbNUFzXRQIsnJ%2FfhEEnOZRi%2FIvpkJJSI6JY2jiqSTHkqN41Y88u%2FyNMm1BzsvHA%2BeGAnby%2BMoWvxiU5MlkdCFS3NutlBwwF3dMV5w5bvktRKAX7Oeg6YXeYq8ZkrIrWqngIfTIPziPDREt3FRrzs6UScVBFAuNy8nNPpO%2Fs%2FTZD9skeacCdzz1J8WoxIwAIYUT%2BZjIqETEqQI2dmO3iNjY6A%2FmqSN8x9MrCjGixMwp7djXlpmh1bD97tdkddFmfZzYD6ru57Fej3rA7Ca%2F7mMpnGi4ANHRXd74JGOrmSdK3NyQ9kOlwPq7snuWjEWZ3VI5j8NKXbtDNVbfLupvv0ObawL%2BQ5krhyFHQNwcYnCGn2O5dVZOCHy%2Flb%2BlKH8Xv0X7L6%2B3qyoleCbs5B%2B8rgAVAU4voqBcbh5hwBZvHtIG5vW78%2FHR92i2ADVH45wCzTjCSjRzNktoy4bAU9yRCURrN8PfbXQiOS8epDC6eudBpR8ja8Mp7oqRJROJVHZAmOanyYr%2BJwjHNQ4lKd%2FvjxQM%2FV0dvI98yqf3L7vY6HWMNvZvsQGOqUBp7flC1mw5SoKNleirFA4G%2FU5JN6XICd8qVchz8asN14XyR1TdAah8SBybwu%2Fv5irvhsYnLpPzuFiAotWciQ2y0tNWrPf8t9%2BKLHYAtzy6oi%2BonDBePYtGmndBkTEYFY3lX4UW%2FrqSuz7CZ04pFABmKn9AFED4Fxbq7O2PGuD1DwF3F1JM6atzL7MOL9P9qCXf7nhycxMWBl92AzfVm1X87Q0KrbG&X-Amz-Signature=c865da319312e4c123357bb02d6419ad0c5a2a8e89bffb75d8cfe02ea55016d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTINMFIP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJsaFE34hcGkBKRWDFrd21ZzNCe8r5VqgVQU6E2E06FAiEAsm0kEF8LNdBJuYMiHLeSMeXHOTTQLBK1R7spNtiuTsAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH02%2FF%2B3frKI1Hsb0ircA5pASaRELhlT386UkPhM9IFOmiFh4Y4n3Qa2z2VGJkMc51ss6pua813%2Fw%2BubdJIVGl%2BMrnkjhVa3guwwshxzbNUFzXRQIsnJ%2FfhEEnOZRi%2FIvpkJJSI6JY2jiqSTHkqN41Y88u%2FyNMm1BzsvHA%2BeGAnby%2BMoWvxiU5MlkdCFS3NutlBwwF3dMV5w5bvktRKAX7Oeg6YXeYq8ZkrIrWqngIfTIPziPDREt3FRrzs6UScVBFAuNy8nNPpO%2Fs%2FTZD9skeacCdzz1J8WoxIwAIYUT%2BZjIqETEqQI2dmO3iNjY6A%2FmqSN8x9MrCjGixMwp7djXlpmh1bD97tdkddFmfZzYD6ru57Fej3rA7Ca%2F7mMpnGi4ANHRXd74JGOrmSdK3NyQ9kOlwPq7snuWjEWZ3VI5j8NKXbtDNVbfLupvv0ObawL%2BQ5krhyFHQNwcYnCGn2O5dVZOCHy%2Flb%2BlKH8Xv0X7L6%2B3qyoleCbs5B%2B8rgAVAU4voqBcbh5hwBZvHtIG5vW78%2FHR92i2ADVH45wCzTjCSjRzNktoy4bAU9yRCURrN8PfbXQiOS8epDC6eudBpR8ja8Mp7oqRJROJVHZAmOanyYr%2BJwjHNQ4lKd%2FvjxQM%2FV0dvI98yqf3L7vY6HWMNvZvsQGOqUBp7flC1mw5SoKNleirFA4G%2FU5JN6XICd8qVchz8asN14XyR1TdAah8SBybwu%2Fv5irvhsYnLpPzuFiAotWciQ2y0tNWrPf8t9%2BKLHYAtzy6oi%2BonDBePYtGmndBkTEYFY3lX4UW%2FrqSuz7CZ04pFABmKn9AFED4Fxbq7O2PGuD1DwF3F1JM6atzL7MOL9P9qCXf7nhycxMWBl92AzfVm1X87Q0KrbG&X-Amz-Signature=121fc64047f85d65022cf0219eb8c7d0d17909065e42e3b848fbb38adfe7966a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
