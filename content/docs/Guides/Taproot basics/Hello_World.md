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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBNTCD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGJav%2FigrlHi4qdb8MxWLnf2afffLWsp%2FH9eP73qBKo3AiEAhqBSxXcgkb7rD2BM3Rd%2FMlu1URdKBKXPsjRvhJkBEuAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyq3vLwdyh%2BkqtdFircAxMpLQCCa9Ceo2ZKtxaFJZjgsnB6YY6MgRt60SPotyKCM10hLSBznGGCHDI2UO%2FoJxRqvNCvDyAWEYgv1KzOd1qJO5hrA9VrAtHDmBnhEw8OSftdHOLAefegq7ViNyMr0TZKDdV%2Fwvhmn0ulVdcqHGUsUOm6rGGiwGho%2BaAWoOt5He0mll%2B9Y7TKyUXiUa%2F0x%2BB605k%2Bbz%2B09olFeZ5sLP8Ll7hGZKlVSv%2FHeQ%2Be0rGkqFb8p50Bf2c3dsAnc5tQXDW5bc329SBocfVae0vVOjfnuP9FvaIAfdHhgjFPSvX1agMOfLnxd5AuQTVyjY6H%2FS2O2xktlNcJqZ%2FHNlqIS3RycldvYBEt%2Bx%2F4bOshkPICVZ3LBhbRH9tnonGdywLvN4%2B0WwK7phcHUvO6c12o1yAcHa1peXgpEYziuB%2BNREM5h7vgl0tJJX8hHUy%2BC8OKBiM%2F6YmtEcDx56qhRC5Pbb3tXrEL6WkkJEWoRiLFzYBozxuLHzIXZ%2BUZzkFe%2BkkN00v092fmjHW3WffqhGsUYvjrssgkki5dMVpMAf2UNu2E9HxuRUBCBf1N71RzM8l9dkd5F6%2Fg4eIeZ6EKtlFVTme6N76x%2BNtPKYuWYJ5w6AdP7hDbDHNUBcuzUkNJMPvLoMQGOqUBmsglsfKbRu8GV3ax24yker%2FHj62dAEN9U%2FpEOU0Q8YLE%2FTGBHUOvh%2BDRNRLK1U9QYi5G7Jl03VdAIn2CdHR%2FhLR%2FGlTcsE2sSoWP48Nk71mixDI6N6xktpNYPv%2FrDl6eAxUmTCUHR6IQ3JEd24nh%2BaGP0FDkKK%2Br4aVXzWno%2FjTKeFSmfmGRY%2FXSJtadt0Zgj%2BUjj5wKzFG4NzBd9DNgBSzYeJiD&X-Amz-Signature=936d6de904f146acbb32612ad030165423e21b63ee23eebfdd502b9f501337a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBNTCD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGJav%2FigrlHi4qdb8MxWLnf2afffLWsp%2FH9eP73qBKo3AiEAhqBSxXcgkb7rD2BM3Rd%2FMlu1URdKBKXPsjRvhJkBEuAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyq3vLwdyh%2BkqtdFircAxMpLQCCa9Ceo2ZKtxaFJZjgsnB6YY6MgRt60SPotyKCM10hLSBznGGCHDI2UO%2FoJxRqvNCvDyAWEYgv1KzOd1qJO5hrA9VrAtHDmBnhEw8OSftdHOLAefegq7ViNyMr0TZKDdV%2Fwvhmn0ulVdcqHGUsUOm6rGGiwGho%2BaAWoOt5He0mll%2B9Y7TKyUXiUa%2F0x%2BB605k%2Bbz%2B09olFeZ5sLP8Ll7hGZKlVSv%2FHeQ%2Be0rGkqFb8p50Bf2c3dsAnc5tQXDW5bc329SBocfVae0vVOjfnuP9FvaIAfdHhgjFPSvX1agMOfLnxd5AuQTVyjY6H%2FS2O2xktlNcJqZ%2FHNlqIS3RycldvYBEt%2Bx%2F4bOshkPICVZ3LBhbRH9tnonGdywLvN4%2B0WwK7phcHUvO6c12o1yAcHa1peXgpEYziuB%2BNREM5h7vgl0tJJX8hHUy%2BC8OKBiM%2F6YmtEcDx56qhRC5Pbb3tXrEL6WkkJEWoRiLFzYBozxuLHzIXZ%2BUZzkFe%2BkkN00v092fmjHW3WffqhGsUYvjrssgkki5dMVpMAf2UNu2E9HxuRUBCBf1N71RzM8l9dkd5F6%2Fg4eIeZ6EKtlFVTme6N76x%2BNtPKYuWYJ5w6AdP7hDbDHNUBcuzUkNJMPvLoMQGOqUBmsglsfKbRu8GV3ax24yker%2FHj62dAEN9U%2FpEOU0Q8YLE%2FTGBHUOvh%2BDRNRLK1U9QYi5G7Jl03VdAIn2CdHR%2FhLR%2FGlTcsE2sSoWP48Nk71mixDI6N6xktpNYPv%2FrDl6eAxUmTCUHR6IQ3JEd24nh%2BaGP0FDkKK%2Br4aVXzWno%2FjTKeFSmfmGRY%2FXSJtadt0Zgj%2BUjj5wKzFG4NzBd9DNgBSzYeJiD&X-Amz-Signature=8ed5c6315825b32e8fa5f50ce6571991e8b23d9760c23b4debfdcf2761434142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
