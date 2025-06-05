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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XYNWEFR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCn56UnnBzUeBsc7YCVVQz063PthKxh7niwMl5OekuS9gIhAJKVGdOE48Z0xvvNGCmeQtySVXYchXeLHTTgCz36X8JqKv8DCEwQABoMNjM3NDIzMTgzODA1IgzuMj%2BnIYVOVnJwTioq3AMLaJErnrovS9VRXide4477LeQA2KqrSdLhp4pTUKZc4RfISklNSpdVmOrkKAaJxSHGvbzmQpL1n4gg%2F%2F7bauqQWAF8XLURaRfBk%2BHnjSzU3DMJY8O6MruYih9XuQ4wfmOjZhpESNr1lpsfijezlLXHThUz60orAbVGLqEVW1QDScFOHS0fQaeR7S%2FwsdBdlAS0VtPUQn%2BrEuIVUfTAUk8xWhCcxJtAoR1BRBOKtEjU2bW70i2M738CwEUYdAbZpGg7%2BWum48WHMvMuCwDCZSszG%2Fo5%2Fi%2FBJ57YsxEeXyBicT9xvHC6ll8tPz6CgHR6a6EHQd8UXr80D7anq3VEP3w%2BPQGdA2cFzoWHo1SyPC1adqfM8TSqkbInAEVniokVuxrBnpfR2pVQbDlZqYeQwJCZXdEePdwuqEBVx%2FMYYb4rPFvFqwAnJtYvaaOnaCEGQrHQOhiei7AVtvuHm%2FsEOrbzKonMLzSOCTBny76yk7SXlpO87DOIL46tnv87SJM0ZpFCzub2HFWp22pyNxHYk5GakcV2h39IYyWgV52C%2Fb%2F8StQXsUBY4jgiVUXHncUcsYxK81miJiBsMwS%2FMCKnGhldFnR3vTKACtJZm7F5wjzlLOG9UB9bJ2cqN5%2Fj7jCs2IfCBjqkAStvOXUFv5CyplZ10yO1MM8hiDht6crr7rBnXyat3lL4WF6mWHjYlG0q3Z7UPRKmpFYXmOfL439UKaUs0DTe97rghdvs4tLUkMbgbUY67v8CUjnsMOcRKfRmqEJtyZ1e8%2FJMPISl1CglOSsEz4Yk%2FCgeNb%2BP1zY5qadp2h9pfWw05YqN0V0yj32TC%2B8CqOaJrnslbF4iCMA7xOcTBuFFi6Ya5m6O&X-Amz-Signature=15a17c0c4915a75f0482bda5b41489c345d75bc7f614e5fccc2563f7218f9d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XYNWEFR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCn56UnnBzUeBsc7YCVVQz063PthKxh7niwMl5OekuS9gIhAJKVGdOE48Z0xvvNGCmeQtySVXYchXeLHTTgCz36X8JqKv8DCEwQABoMNjM3NDIzMTgzODA1IgzuMj%2BnIYVOVnJwTioq3AMLaJErnrovS9VRXide4477LeQA2KqrSdLhp4pTUKZc4RfISklNSpdVmOrkKAaJxSHGvbzmQpL1n4gg%2F%2F7bauqQWAF8XLURaRfBk%2BHnjSzU3DMJY8O6MruYih9XuQ4wfmOjZhpESNr1lpsfijezlLXHThUz60orAbVGLqEVW1QDScFOHS0fQaeR7S%2FwsdBdlAS0VtPUQn%2BrEuIVUfTAUk8xWhCcxJtAoR1BRBOKtEjU2bW70i2M738CwEUYdAbZpGg7%2BWum48WHMvMuCwDCZSszG%2Fo5%2Fi%2FBJ57YsxEeXyBicT9xvHC6ll8tPz6CgHR6a6EHQd8UXr80D7anq3VEP3w%2BPQGdA2cFzoWHo1SyPC1adqfM8TSqkbInAEVniokVuxrBnpfR2pVQbDlZqYeQwJCZXdEePdwuqEBVx%2FMYYb4rPFvFqwAnJtYvaaOnaCEGQrHQOhiei7AVtvuHm%2FsEOrbzKonMLzSOCTBny76yk7SXlpO87DOIL46tnv87SJM0ZpFCzub2HFWp22pyNxHYk5GakcV2h39IYyWgV52C%2Fb%2F8StQXsUBY4jgiVUXHncUcsYxK81miJiBsMwS%2FMCKnGhldFnR3vTKACtJZm7F5wjzlLOG9UB9bJ2cqN5%2Fj7jCs2IfCBjqkAStvOXUFv5CyplZ10yO1MM8hiDht6crr7rBnXyat3lL4WF6mWHjYlG0q3Z7UPRKmpFYXmOfL439UKaUs0DTe97rghdvs4tLUkMbgbUY67v8CUjnsMOcRKfRmqEJtyZ1e8%2FJMPISl1CglOSsEz4Yk%2FCgeNb%2BP1zY5qadp2h9pfWw05YqN0V0yj32TC%2B8CqOaJrnslbF4iCMA7xOcTBuFFi6Ya5m6O&X-Amz-Signature=5afb1325131bdea0bedb67679c6791ca8f4afbdf9e33f42bf521368785953737&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
