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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3JPIZN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw69cd%2BrNLjhtyH78mjbEjzE3E%2Bt2%2BptjgDg8UVU8f7AiBZ8VoVHfrI1YHXYCwZbtZVfOh69ZBnkLMfL3Yv4dePNir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMpXCkCGtSfrpV%2FnkWKtwDO1Y8SBzqQWLUZXkDsdfnkfqgjqCGP9Jd54yRzNvzdM6bDbPJuddthB7hBgm4grwaDlPaPnpFlWA98e8fu51NEbYD7GcYVuFleoUhBOLD0TVSrX0AJeXNFDf0ykX8TxxHPwCp1mrKyKwFzaiU%2F3n8oVpz7gANL6rZLFtkl0OnNvvPMCDKdYOEm8g81bRGBQu%2FfIYRFQLw5IVxuwReqXb5%2BKwb8eChJg3Aon2iIH7bZDp1aZL5WG7ulR3SIlqv9fMTGQ7xf4%2BiML1U0aBPlv1RoRg7flDwrS7VH8gk3jGzwKW33%2BXSD%2B92T2mnPOwil4ilwCUsS9wDr78HH2MPhXgkwuf9D9EH4VCgJYPp7n9gVW0DQlq68uiIjfvoDTyCzuDwLdU6DA1zyVtOMRgDozAdYgikTebVoF7lyN%2BtSr25uE1DjgCoDNGjCZw%2F%2FSJPWOlm7gLGpFQyTSXS0UKgteUuL8kYAvcejlk8knH%2FhjwU8r0ZjJYJNkWcnOcfuEXQxjbMjiWJHFn%2BkUy%2FfApktsJ5yfTWv94JTak2RLDgUKvGP50aim0Q7SYsToxvypZunRgIwU0utgWSkmym6JOXko0iNydngXrZTMl2KesYMPXj86emgtgXZk4JkREsXZcwkKOZvwY6pgF0%2F6Lj0C4fdaNNPhHo4REPBGiWwsD4YqR4vYGRRmm9WEWrdBaZtYA0COa6U%2F2r96jKdlYdi%2B6K8B0t2ilt3oifvUP9PIG%2F6EaI%2FR8qENGUgV9mR7ROVTcu6aZyiOJIbK7x2U4upSLvWOMm3RgKZ%2BorF0Dchejjtuqj%2BLAXTkNh1wiGibTKU%2Fbd07abPKrtcsDXEhC%2Fk6ujiUHbNayBXHO8TXuOIgl5&X-Amz-Signature=184a1638f0aa22da4f4d2a4bea790764afe468a441759263165125e8860173d9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3JPIZN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw69cd%2BrNLjhtyH78mjbEjzE3E%2Bt2%2BptjgDg8UVU8f7AiBZ8VoVHfrI1YHXYCwZbtZVfOh69ZBnkLMfL3Yv4dePNir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMpXCkCGtSfrpV%2FnkWKtwDO1Y8SBzqQWLUZXkDsdfnkfqgjqCGP9Jd54yRzNvzdM6bDbPJuddthB7hBgm4grwaDlPaPnpFlWA98e8fu51NEbYD7GcYVuFleoUhBOLD0TVSrX0AJeXNFDf0ykX8TxxHPwCp1mrKyKwFzaiU%2F3n8oVpz7gANL6rZLFtkl0OnNvvPMCDKdYOEm8g81bRGBQu%2FfIYRFQLw5IVxuwReqXb5%2BKwb8eChJg3Aon2iIH7bZDp1aZL5WG7ulR3SIlqv9fMTGQ7xf4%2BiML1U0aBPlv1RoRg7flDwrS7VH8gk3jGzwKW33%2BXSD%2B92T2mnPOwil4ilwCUsS9wDr78HH2MPhXgkwuf9D9EH4VCgJYPp7n9gVW0DQlq68uiIjfvoDTyCzuDwLdU6DA1zyVtOMRgDozAdYgikTebVoF7lyN%2BtSr25uE1DjgCoDNGjCZw%2F%2FSJPWOlm7gLGpFQyTSXS0UKgteUuL8kYAvcejlk8knH%2FhjwU8r0ZjJYJNkWcnOcfuEXQxjbMjiWJHFn%2BkUy%2FfApktsJ5yfTWv94JTak2RLDgUKvGP50aim0Q7SYsToxvypZunRgIwU0utgWSkmym6JOXko0iNydngXrZTMl2KesYMPXj86emgtgXZk4JkREsXZcwkKOZvwY6pgF0%2F6Lj0C4fdaNNPhHo4REPBGiWwsD4YqR4vYGRRmm9WEWrdBaZtYA0COa6U%2F2r96jKdlYdi%2B6K8B0t2ilt3oifvUP9PIG%2F6EaI%2FR8qENGUgV9mR7ROVTcu6aZyiOJIbK7x2U4upSLvWOMm3RgKZ%2BorF0Dchejjtuqj%2BLAXTkNh1wiGibTKU%2Fbd07abPKrtcsDXEhC%2Fk6ujiUHbNayBXHO8TXuOIgl5&X-Amz-Signature=ccb97b8b5470fada26e3c69eebae6d069f3cacee6927003c4615369b2a887fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
