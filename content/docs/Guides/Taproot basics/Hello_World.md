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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644M7LWVM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIELPhfUM3lX2rioy9gjHho6iLmG6UVsk1gGkVp8tx9sZAiEAgq4o1uoKqazyTUTwf4ZYq3Z4l%2Bk3kqczhd%2B2IlF5gQYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBeGgok1q8IkHyiTQSrcAz%2FfmVsSdWZIo%2Bs12XOOUXuriFMAUtkhKeYzW1EONl727sLD%2FZcIyjR%2BgMDYhKRd9kloPq%2BCBLZjSnJF5%2B2EXIdgApyy2scwPekIF8RELcvmBWXtH%2BHT0nhFyokN1RXZPCn9aXuhG4pvSr9KZd1FgsyBgoPyu%2BzO31D3fIFy6O2rjJarqkOCAbo6FHQd2OmKDmWC1eVU05X06Qe%2Bzk0lblwBaYaJMgNYsViRppBV8QJ4t4NWQX9gKxe7Ji8ImlWHLv%2BfaWRelq1wcGlKsTqu%2F6CHSqg8NFoO7BzyYLn6uD7Iu3%2BRyR%2F1WSbYsI3SuCI7tmsOqsiGTHfEXgBgcajhBAumZu6AHRQDhj94gW55Tl%2FeupSnoys3oHqen7%2BoRq0RL89AIHAJHD4mNRab%2BJMERYJBDI0iKqM4AmblDzq%2BbMYgg%2FBAgFzhZhj7xAAwGY%2BIHuM7aN1bZBA6kuS1G3i0RujXUJd2jDiveJuhWHa60Sn2vc21YjatfY1ju7lq9K8Qz%2Bt3kIQDjMOLTK9iPx%2BXrd%2BIXpTnc7Q2F9d5BFWOqoGMhoHIB8t4hXNzoKOiTtIbWYcFlk1y%2BZVnXB3K6o7Mmi8wcwadDKIJnf75tNbpLPkU89jb4noaql6%2FfFlgMPffrL4GOqUBxWfKkqrTg1iL4hPCzJ3XADwdVz0fXV4WyBV%2FShv%2BLHhBjmgtGVEqDWpzyAWVHcvwjeMkx36STqn9ZtJIIOEnFu9SkIRCcMdcnVvxCOHoSG8XkBULLsECunm5Dvz4fUJwlMyp63h3IwECWBmY2Kv4riPWRXSNMU6raHtD8RICdPVPgxhhuHFBHZeGd9WSA6E0Ukjcd6z8sTxZzMK%2BImoypmjixV%2Fc&X-Amz-Signature=31cc0685162e617dcbbbf274e200846bd455737912694dd066a440f503d1a780&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644M7LWVM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIELPhfUM3lX2rioy9gjHho6iLmG6UVsk1gGkVp8tx9sZAiEAgq4o1uoKqazyTUTwf4ZYq3Z4l%2Bk3kqczhd%2B2IlF5gQYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBeGgok1q8IkHyiTQSrcAz%2FfmVsSdWZIo%2Bs12XOOUXuriFMAUtkhKeYzW1EONl727sLD%2FZcIyjR%2BgMDYhKRd9kloPq%2BCBLZjSnJF5%2B2EXIdgApyy2scwPekIF8RELcvmBWXtH%2BHT0nhFyokN1RXZPCn9aXuhG4pvSr9KZd1FgsyBgoPyu%2BzO31D3fIFy6O2rjJarqkOCAbo6FHQd2OmKDmWC1eVU05X06Qe%2Bzk0lblwBaYaJMgNYsViRppBV8QJ4t4NWQX9gKxe7Ji8ImlWHLv%2BfaWRelq1wcGlKsTqu%2F6CHSqg8NFoO7BzyYLn6uD7Iu3%2BRyR%2F1WSbYsI3SuCI7tmsOqsiGTHfEXgBgcajhBAumZu6AHRQDhj94gW55Tl%2FeupSnoys3oHqen7%2BoRq0RL89AIHAJHD4mNRab%2BJMERYJBDI0iKqM4AmblDzq%2BbMYgg%2FBAgFzhZhj7xAAwGY%2BIHuM7aN1bZBA6kuS1G3i0RujXUJd2jDiveJuhWHa60Sn2vc21YjatfY1ju7lq9K8Qz%2Bt3kIQDjMOLTK9iPx%2BXrd%2BIXpTnc7Q2F9d5BFWOqoGMhoHIB8t4hXNzoKOiTtIbWYcFlk1y%2BZVnXB3K6o7Mmi8wcwadDKIJnf75tNbpLPkU89jb4noaql6%2FfFlgMPffrL4GOqUBxWfKkqrTg1iL4hPCzJ3XADwdVz0fXV4WyBV%2FShv%2BLHhBjmgtGVEqDWpzyAWVHcvwjeMkx36STqn9ZtJIIOEnFu9SkIRCcMdcnVvxCOHoSG8XkBULLsECunm5Dvz4fUJwlMyp63h3IwECWBmY2Kv4riPWRXSNMU6raHtD8RICdPVPgxhhuHFBHZeGd9WSA6E0Ukjcd6z8sTxZzMK%2BImoypmjixV%2Fc&X-Amz-Signature=a1111c60b65e6a58081aa7f7e92a05db98f5376689bbc8eddb34c95d1fc407f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
