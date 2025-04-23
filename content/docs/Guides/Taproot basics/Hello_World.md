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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DVVZWN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICgFtVg02bCLm%2B6mfauwKsYA0wkp2Sutb0u6DxRWkpEjAiBO592tFdGxV2HaPo3Y97pSyGvePT9qth15wFNLD6pMXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P2nJxVkqq1nVdMLKtwDR3m%2FvFXmx%2BUCqxUQU0hf4%2FugGQAQPp%2FMBUyntNIuAyYpLm7ysbG1qvHT3w27%2FM80NdfESyOqX%2FR%2B%2FLdENBdlaxa%2BF0q0%2FHC6mOcbrFzvOoqjwa6t%2F1K1vDYaQKqjqYUXQmTN3eAFcG6Ik%2FyBlKtl6e3leu8ssDL%2FKxXb4Mob1%2FSVV%2BrpAwY3EqbW6Kkrs0pll3%2FwduFBF1rcJhSe%2BNmeUzEvbY8ZdkO4UXymoIkJmuUP5U341NTQkJ9IFbbQOjx%2BfvI9%2BbpACqn5J9Y23HLGp%2BkVzwPuRZnoOrkNSvQBpIXTe16l5vDY0lSObtxQR%2FjTc%2FgMnBnz0CxIzVWGfihfH7SdVk%2BNORcnxwJDTMk22hmBiM1NnF0tMrkS02rF7PjpuwYExuo09aUOu4RioRb%2B37pbk%2FBjUzqW5OAlY0UqocPlRtTxnPXycmBRxPqYEa0iLHpg3QGoIjJs%2FZY%2BAjPAcaa%2B1uvUFIyN2%2BD3rhz5HdlxWPmYJPGbDQ3%2B3Xbs8521qlMY37fIKDcprisFC%2FJPTLXz1ssecXBq8uXiJXJuyJBQCqSYFoIowF82fKpcwQKRyKSUeb73WN%2FE8nB2vZ0qbX9GTZOI7JVCfn3SmyA5y7JqJoiYDnueqwHkVCww6%2BiiwAY6pgFqbibpd2lGQj3N9ydwzUDsVOg7e9siqoi68DIxMStldc6qSmsgrg%2F5tUT1pFdXJdTihOkvfvBqEO29MDd8sic71vk8YtZfwCJL03nrvSv%2F3CY%2FfL3d3qawZLpO0X3GGn%2BywWRA7VyDp9iSCcQTiwsi27TVdc616obwSMxlAxxe1Ay81k30D1cCXvTsJeqkZbJbIi5Y%2FR27%2Fgcucjz5nbp21TCNH8C9&X-Amz-Signature=410f9a800169246421b7823b58ab869069b73a2959ceeaaa6cec089bfdbc5006&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DVVZWN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICgFtVg02bCLm%2B6mfauwKsYA0wkp2Sutb0u6DxRWkpEjAiBO592tFdGxV2HaPo3Y97pSyGvePT9qth15wFNLD6pMXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P2nJxVkqq1nVdMLKtwDR3m%2FvFXmx%2BUCqxUQU0hf4%2FugGQAQPp%2FMBUyntNIuAyYpLm7ysbG1qvHT3w27%2FM80NdfESyOqX%2FR%2B%2FLdENBdlaxa%2BF0q0%2FHC6mOcbrFzvOoqjwa6t%2F1K1vDYaQKqjqYUXQmTN3eAFcG6Ik%2FyBlKtl6e3leu8ssDL%2FKxXb4Mob1%2FSVV%2BrpAwY3EqbW6Kkrs0pll3%2FwduFBF1rcJhSe%2BNmeUzEvbY8ZdkO4UXymoIkJmuUP5U341NTQkJ9IFbbQOjx%2BfvI9%2BbpACqn5J9Y23HLGp%2BkVzwPuRZnoOrkNSvQBpIXTe16l5vDY0lSObtxQR%2FjTc%2FgMnBnz0CxIzVWGfihfH7SdVk%2BNORcnxwJDTMk22hmBiM1NnF0tMrkS02rF7PjpuwYExuo09aUOu4RioRb%2B37pbk%2FBjUzqW5OAlY0UqocPlRtTxnPXycmBRxPqYEa0iLHpg3QGoIjJs%2FZY%2BAjPAcaa%2B1uvUFIyN2%2BD3rhz5HdlxWPmYJPGbDQ3%2B3Xbs8521qlMY37fIKDcprisFC%2FJPTLXz1ssecXBq8uXiJXJuyJBQCqSYFoIowF82fKpcwQKRyKSUeb73WN%2FE8nB2vZ0qbX9GTZOI7JVCfn3SmyA5y7JqJoiYDnueqwHkVCww6%2BiiwAY6pgFqbibpd2lGQj3N9ydwzUDsVOg7e9siqoi68DIxMStldc6qSmsgrg%2F5tUT1pFdXJdTihOkvfvBqEO29MDd8sic71vk8YtZfwCJL03nrvSv%2F3CY%2FfL3d3qawZLpO0X3GGn%2BywWRA7VyDp9iSCcQTiwsi27TVdc616obwSMxlAxxe1Ay81k30D1cCXvTsJeqkZbJbIi5Y%2FR27%2Fgcucjz5nbp21TCNH8C9&X-Amz-Signature=65e8d464b562c214411767be4667f4d434e96f2cd424c62ee41887a91181a07c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
