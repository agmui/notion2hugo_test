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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGGDB52%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJMZ4ZlrEaXlI4Od91r0Unmm%2FQd%2BH1J%2FqGgzHrpg0HwIgA0gLR9Svl9yx6RXxGVysA0RsStuxHT5w1Zn%2Br6m2CzgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnyR1ZOskODIfymXyrcA5gM5SJ%2B0kqBWAaBnqWrVYDIAI1ejcdOv95WbLI5hM%2BXEXRoLO%2FXThyZYaJrOCOQ5duQVlxW6K%2FhHjKaF9KGDH%2B81qV2tT6bqQ%2BBS5tDZQ8XFHz5NZVTfxp29ycGIRA7JrbyYBQwzD8UyolVui%2BELu2wUOIS%2B%2B%2Bjj9rcyYfzwtSVn3howYW%2BQSRoW6wPCM1dpN%2Fw7QipPuwyom5wgCP6WrJCR4bX12Giftdl%2F2ea13sf2AgCRRmxCsFA6p6McCxnjuQ1VPL90wV5Niz%2F1LFODf2zaeBE70WJVA7zBrm5e5IYpwDeEfzDB%2BtN%2B8C%2BcgImGMyl0Ps2Og6NY7V6M6OxGYS9Oro1ueCzEdL2GXrk7dgyyQHKDGDPWiSAQp50dRiS9clHa0EEhXRqQtr4pS2K9S9sS2M0yhxy0YTNpKImR%2FOO2yvsuy7%2FuqMveHHqXbvBQjBRkzc3ZEEaI7v1eLuHItnFYE4bo2TSPfTtSjgD3e32m4%2B1LQBlmtZ0Rt89engeMLaKBUvMS4sAnOOD2VqBJaoQW8au2Eq0jizJS26KgTL6WEAi4yjJvmBugW4%2BEIFQ5yPLE3Z1J2Q948Q5h0fhyPsqid07e%2FL4mVj355WB%2FFdFVUQ3eEflD63VRVQpMKSevcYGOqUBEsOb%2FxayFRxmsOpeNiOHLMMofZ2BGRwB19PLjxdKWqVvLc2JvByWCJBVVaNpDpSE5U%2Fp2heD0piUn43Gr%2FYvVKTzHpKN0BLKYxLlQulwdfpdlIyoLyYqnybMps34ds%2FwTJNL0ddpnzxXC1W51tCzbpLQkkItJb43rASTRSFgVXhX42Aemz9nNTWIItXg8sygohk1HCZTZpiXvE8%2BjJgC5aLESBni&X-Amz-Signature=038b6edab669449ae05745687ed53798ebcc4e2c5113517a1a516654d834d58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGGDB52%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJMZ4ZlrEaXlI4Od91r0Unmm%2FQd%2BH1J%2FqGgzHrpg0HwIgA0gLR9Svl9yx6RXxGVysA0RsStuxHT5w1Zn%2Br6m2CzgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnyR1ZOskODIfymXyrcA5gM5SJ%2B0kqBWAaBnqWrVYDIAI1ejcdOv95WbLI5hM%2BXEXRoLO%2FXThyZYaJrOCOQ5duQVlxW6K%2FhHjKaF9KGDH%2B81qV2tT6bqQ%2BBS5tDZQ8XFHz5NZVTfxp29ycGIRA7JrbyYBQwzD8UyolVui%2BELu2wUOIS%2B%2B%2Bjj9rcyYfzwtSVn3howYW%2BQSRoW6wPCM1dpN%2Fw7QipPuwyom5wgCP6WrJCR4bX12Giftdl%2F2ea13sf2AgCRRmxCsFA6p6McCxnjuQ1VPL90wV5Niz%2F1LFODf2zaeBE70WJVA7zBrm5e5IYpwDeEfzDB%2BtN%2B8C%2BcgImGMyl0Ps2Og6NY7V6M6OxGYS9Oro1ueCzEdL2GXrk7dgyyQHKDGDPWiSAQp50dRiS9clHa0EEhXRqQtr4pS2K9S9sS2M0yhxy0YTNpKImR%2FOO2yvsuy7%2FuqMveHHqXbvBQjBRkzc3ZEEaI7v1eLuHItnFYE4bo2TSPfTtSjgD3e32m4%2B1LQBlmtZ0Rt89engeMLaKBUvMS4sAnOOD2VqBJaoQW8au2Eq0jizJS26KgTL6WEAi4yjJvmBugW4%2BEIFQ5yPLE3Z1J2Q948Q5h0fhyPsqid07e%2FL4mVj355WB%2FFdFVUQ3eEflD63VRVQpMKSevcYGOqUBEsOb%2FxayFRxmsOpeNiOHLMMofZ2BGRwB19PLjxdKWqVvLc2JvByWCJBVVaNpDpSE5U%2Fp2heD0piUn43Gr%2FYvVKTzHpKN0BLKYxLlQulwdfpdlIyoLyYqnybMps34ds%2FwTJNL0ddpnzxXC1W51tCzbpLQkkItJb43rASTRSFgVXhX42Aemz9nNTWIItXg8sygohk1HCZTZpiXvE8%2BjJgC5aLESBni&X-Amz-Signature=1b7fc93af2b43903f5c496f414e85210024cb49b5125aef75005a9cb6ab82602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
