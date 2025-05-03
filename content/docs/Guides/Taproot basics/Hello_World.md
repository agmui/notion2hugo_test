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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYYAUY7M%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDQlXG0NKQtvRMG5mivFyAeDFYHMt%2Fs2LHn%2BFnwDEpCNAIgOhYmoQUSFYGXp9ZNc1RMQ3WvzaoT4J9IrOpXacOJKFoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsXiflWRWXnEw5XsSrcA1OgFTJCI1M5V58WlPJqCS2lWgO4sBGZoDDahoHvLCnRD%2BOmRkkwEhnf82C3ot5IULLg3rVXgRHmWNn88CGjadv3rQ2h7%2Fa5FnSoQiKKBt3sf9O1P1mo2Je4YOFyYA3lJlh0bcxInfX4uWr5qizysRx5%2B%2FIMLvgPbbsUkM6j8EqakMrS63ng9JP2KcBD5w69bTBRqUSGToXQeliSX%2FJgzmkfAfG%2ButISvRDGNKV3M9StF%2FOASFqwyLd9X4YDeZsxu3CR2iALfiyjF64%2BWQ9K2qiipOthqtJU1wyZxn7h%2F30eO11cinlMKt56d8HKh2yAeoX0ECd444c1MtvaLLG2bP%2FGt4r7kmU2Zqp24ihWIbEmgu%2BgDS6QT2o15FAc%2Buj%2FFiO%2FbFSt%2BNpKW3GYaMzPTpk8hoRANlc4nuujzkeC4R0hmBaOddxDMFuVJZNjelQ5VMESrhbJx7BxFY1kPZgLovEIpgR4apNVCCK9oRkkKrdU95JCZVJY41mHLcCPo245HbE514e1NGW%2FmEYCJIwyFBZiTil5SwerruNJt8sD%2FhPAyluE6kecoEPI5niWywK0eNgWSavujqY7oa3KwJnZpi0ukk5zJKTg7qFGxEBh1WIbJAIZJOa1CrdF5VhQMP7B2cAGOqUBZjXT%2Fxy8c7q7zXqGxj3lRwkz9gLz1%2BRGpAIufn8%2FFinX0n5qyK0cWM35Iv0zLwS0Xct6bkrsa1QFeGlLLFot0X5g%2Fpp8ySKsk4JwOLpPfR7wkXyUGw7jqTVzwxXVU8uGVs85XFJWp9zZ%2BfQWk6LZ6E%2FD%2Bem5is1dCzH1c7FOqHXLEc5F%2FL%2FYy7afPWIV1Nu1Opz1EmktgbY9qI94eZ6Z2lFeGj3%2F&X-Amz-Signature=37b57cbf1227841d7cf11604acff00bc83f38fd75c49bd863cd4fa316b6fd2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYYAUY7M%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDQlXG0NKQtvRMG5mivFyAeDFYHMt%2Fs2LHn%2BFnwDEpCNAIgOhYmoQUSFYGXp9ZNc1RMQ3WvzaoT4J9IrOpXacOJKFoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsXiflWRWXnEw5XsSrcA1OgFTJCI1M5V58WlPJqCS2lWgO4sBGZoDDahoHvLCnRD%2BOmRkkwEhnf82C3ot5IULLg3rVXgRHmWNn88CGjadv3rQ2h7%2Fa5FnSoQiKKBt3sf9O1P1mo2Je4YOFyYA3lJlh0bcxInfX4uWr5qizysRx5%2B%2FIMLvgPbbsUkM6j8EqakMrS63ng9JP2KcBD5w69bTBRqUSGToXQeliSX%2FJgzmkfAfG%2ButISvRDGNKV3M9StF%2FOASFqwyLd9X4YDeZsxu3CR2iALfiyjF64%2BWQ9K2qiipOthqtJU1wyZxn7h%2F30eO11cinlMKt56d8HKh2yAeoX0ECd444c1MtvaLLG2bP%2FGt4r7kmU2Zqp24ihWIbEmgu%2BgDS6QT2o15FAc%2Buj%2FFiO%2FbFSt%2BNpKW3GYaMzPTpk8hoRANlc4nuujzkeC4R0hmBaOddxDMFuVJZNjelQ5VMESrhbJx7BxFY1kPZgLovEIpgR4apNVCCK9oRkkKrdU95JCZVJY41mHLcCPo245HbE514e1NGW%2FmEYCJIwyFBZiTil5SwerruNJt8sD%2FhPAyluE6kecoEPI5niWywK0eNgWSavujqY7oa3KwJnZpi0ukk5zJKTg7qFGxEBh1WIbJAIZJOa1CrdF5VhQMP7B2cAGOqUBZjXT%2Fxy8c7q7zXqGxj3lRwkz9gLz1%2BRGpAIufn8%2FFinX0n5qyK0cWM35Iv0zLwS0Xct6bkrsa1QFeGlLLFot0X5g%2Fpp8ySKsk4JwOLpPfR7wkXyUGw7jqTVzwxXVU8uGVs85XFJWp9zZ%2BfQWk6LZ6E%2FD%2Bem5is1dCzH1c7FOqHXLEc5F%2FL%2FYy7afPWIV1Nu1Opz1EmktgbY9qI94eZ6Z2lFeGj3%2F&X-Amz-Signature=14f69bf52599e9ebbbda8d837b5720b71714ae5fd1f6681e2dce1a5f16f99214&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
