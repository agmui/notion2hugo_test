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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SK4ZH4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCZRr58wU%2Bu1juFhS1hk4x5AgagCJLM4oM5JnD6pVnMIwIgei2zW%2FscKDfaHbFAYDjdXTKYHwyXNdi%2Blcip%2Fyl8CgMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNq6OUNIZaseveGNoyrcA7RbE%2FQBp8y6qyD3owRLGapFSeeNVnZiM1aGh5tQUH7sjF%2BAnxc6PWyI4BqJr8Cz57QQ8%2BEaSS6sPxZVYwGYmAaBqGXuGUf7zRxbeGWsyRfw7C2SgSZz2%2FHsuFaaYnpnvuWwGlku%2Fcwh975wTroJ70iZvjrNdcFSdAt4u%2BTTIMjQginGgQsLJi7iZOhkZicAnvrt1rLhZhBampxAHKVTHerFMp9PEUqUYlnJk28we%2BoO3J4uqVg04nRAq67h7UFUfykxBH6a0FkxUq5d%2B%2BmjJ24vzCQxpNooY5gQ%2FUL9kXYAGXkCJCl6Xc7YGhaxaL4OCF%2F2Yns%2BQVpAHcLI6RWdg9YsjF0ZZdprA1m1nsJDRFlK8c3Qp7NwxTq0KnwzF%2FRo8QlS0P668deU5oyQ%2FMTZaNX2CFVQ%2BpZokWmYecpA2R9jeKxcWGQcCpYVIV%2BbOBte2UATWmvBZTGoGLMwd9xRnVNPy44vqCCu0K%2FDeLxsNcwJuvhD4bCST3Hq%2B0gN1r0LnrMQDX%2Fnz19KhPyJvJXTGy5V3nA%2Fr8YApFHnzw8JcGvptKdBblMCueNA04%2Fb9zS5fAf1f8x6ZtYmxWFX7XZWTEYBFMP9mLn%2B5l6t8MxkJVehmBk%2FumEqmscsLegXMLis38AGOqUB1OByJMeWhBBYUZQixLMbBfTXYlesuTHNx53aViFMNGvVCo8JQYdSUsd7yEe2klXC1Z%2B15R85QhH2Wu73APXxatW2P%2FVSDhIAn9QmQNsgVGEH5z%2F97dKdX9w7QYzYeI5DhUFwLjEidEm0%2BCyl1DPUhYwrYHIeF5Li5aa44OLrc8BT6Ws2O3AtN%2Fgey5EoXUhX36gNUzyCRbniXqoGNaK3Kz6PRCV5&X-Amz-Signature=cea9ac4ef3ff4e53b2c76cb82914b4bd1a2e6c80b4da00618b46939e8f2e2550&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SK4ZH4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCZRr58wU%2Bu1juFhS1hk4x5AgagCJLM4oM5JnD6pVnMIwIgei2zW%2FscKDfaHbFAYDjdXTKYHwyXNdi%2Blcip%2Fyl8CgMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNq6OUNIZaseveGNoyrcA7RbE%2FQBp8y6qyD3owRLGapFSeeNVnZiM1aGh5tQUH7sjF%2BAnxc6PWyI4BqJr8Cz57QQ8%2BEaSS6sPxZVYwGYmAaBqGXuGUf7zRxbeGWsyRfw7C2SgSZz2%2FHsuFaaYnpnvuWwGlku%2Fcwh975wTroJ70iZvjrNdcFSdAt4u%2BTTIMjQginGgQsLJi7iZOhkZicAnvrt1rLhZhBampxAHKVTHerFMp9PEUqUYlnJk28we%2BoO3J4uqVg04nRAq67h7UFUfykxBH6a0FkxUq5d%2B%2BmjJ24vzCQxpNooY5gQ%2FUL9kXYAGXkCJCl6Xc7YGhaxaL4OCF%2F2Yns%2BQVpAHcLI6RWdg9YsjF0ZZdprA1m1nsJDRFlK8c3Qp7NwxTq0KnwzF%2FRo8QlS0P668deU5oyQ%2FMTZaNX2CFVQ%2BpZokWmYecpA2R9jeKxcWGQcCpYVIV%2BbOBte2UATWmvBZTGoGLMwd9xRnVNPy44vqCCu0K%2FDeLxsNcwJuvhD4bCST3Hq%2B0gN1r0LnrMQDX%2Fnz19KhPyJvJXTGy5V3nA%2Fr8YApFHnzw8JcGvptKdBblMCueNA04%2Fb9zS5fAf1f8x6ZtYmxWFX7XZWTEYBFMP9mLn%2B5l6t8MxkJVehmBk%2FumEqmscsLegXMLis38AGOqUB1OByJMeWhBBYUZQixLMbBfTXYlesuTHNx53aViFMNGvVCo8JQYdSUsd7yEe2klXC1Z%2B15R85QhH2Wu73APXxatW2P%2FVSDhIAn9QmQNsgVGEH5z%2F97dKdX9w7QYzYeI5DhUFwLjEidEm0%2BCyl1DPUhYwrYHIeF5Li5aa44OLrc8BT6Ws2O3AtN%2Fgey5EoXUhX36gNUzyCRbniXqoGNaK3Kz6PRCV5&X-Amz-Signature=177d0f2556a9d4d50d77db9c5cf51c5bd2d640147dcafe2f903a805fc6799586&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
