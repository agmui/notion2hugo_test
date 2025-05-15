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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DFW7IT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDM1o%2BXELtE2SOyn6YO830gAEAE6i0mcS9GkUr%2B3VSUbgIgcJbQpG14XPKz1Mg37twFwuHEZfQdb0rff%2BvMmCnS4lQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCoSVtv3JQK1c66swyrcA2Bj9VzXcVhxdHvhhvFiSV%2BQC12rq7%2FNNh%2FlfhY0gcSeEZD8tT8kgOMuoW2qGlTz2nwH0wo3Om2zZ1jl3TZ%2FMeWu0KBU%2Bbo0vQ8r1GVU1b5GjjShu4T55Rrou6bJJsuzsBwYJPl2xuloaBx228EEXpqaoGVIVE9xzDFCQbCiP1OLgktj36zcrxPuqchGhWhQ%2FYbGSltfZxYzsOWqaestzLgyCthR4%2Fy4Am7OWSH0E990iEJZtLkADS%2BqwMbbh8HAPpY5kByvWM5gAi2hhw34GhexEq9GUtcTAtd6qvdykW2uhJMTcyhmGWS%2FePCj0pMM%2BhMlusDU82kLHgtvBIWi6711r6rsI5ZvtBTle7nsTLbjf4B5JTqZKwlrIdAsirlCm8htgF0k2rwfps7J5qZaibVyjDiorBW2ddCudlXt94vqPsze5SMfS8fOA3a%2FJAFS%2FlJ1dvoyoXrB%2FieFm9Wr3zblM%2FK97f%2B7aVvo3oyXUCu9%2FyNFidxPA4ZM4u%2F7rAWrvMjacMhtB4bzEdfooljZP7nbfO6WFN6f5ZRmO2z0mRbDFD9SWnhJHp94iQ%2F1kIENqJ6gsCO7VD0%2BcN0BWTlQTUb5WN%2Fur7T5UFPsRspjD5gXrsjt97BMHS1ICzwRMOygl8EGOqUB%2FBOdc3lJtLKHLzXQP5pHf9Wlmaw97qbjm9yj2Fssafyp4hQdDIyNyBomnoOxI5YrQ%2FKOJfR0oyz0YmO5zfd4wpmgo7E3KCiYrrQWywz3QLKLERc64qOuuGrse8oVTAnmbmTWBin%2BFGpReRda6f%2FVrtdfNikhUeXbeWPUD546EvDMrMS2bmjFndV21pdRyDKcVGptIATs4pVEAchYjde%2FksBl2wdx&X-Amz-Signature=9b8c15db794cd0dd5f558563fb90722cc6251fa0117a056a1728cebfa97852e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DFW7IT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDM1o%2BXELtE2SOyn6YO830gAEAE6i0mcS9GkUr%2B3VSUbgIgcJbQpG14XPKz1Mg37twFwuHEZfQdb0rff%2BvMmCnS4lQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCoSVtv3JQK1c66swyrcA2Bj9VzXcVhxdHvhhvFiSV%2BQC12rq7%2FNNh%2FlfhY0gcSeEZD8tT8kgOMuoW2qGlTz2nwH0wo3Om2zZ1jl3TZ%2FMeWu0KBU%2Bbo0vQ8r1GVU1b5GjjShu4T55Rrou6bJJsuzsBwYJPl2xuloaBx228EEXpqaoGVIVE9xzDFCQbCiP1OLgktj36zcrxPuqchGhWhQ%2FYbGSltfZxYzsOWqaestzLgyCthR4%2Fy4Am7OWSH0E990iEJZtLkADS%2BqwMbbh8HAPpY5kByvWM5gAi2hhw34GhexEq9GUtcTAtd6qvdykW2uhJMTcyhmGWS%2FePCj0pMM%2BhMlusDU82kLHgtvBIWi6711r6rsI5ZvtBTle7nsTLbjf4B5JTqZKwlrIdAsirlCm8htgF0k2rwfps7J5qZaibVyjDiorBW2ddCudlXt94vqPsze5SMfS8fOA3a%2FJAFS%2FlJ1dvoyoXrB%2FieFm9Wr3zblM%2FK97f%2B7aVvo3oyXUCu9%2FyNFidxPA4ZM4u%2F7rAWrvMjacMhtB4bzEdfooljZP7nbfO6WFN6f5ZRmO2z0mRbDFD9SWnhJHp94iQ%2F1kIENqJ6gsCO7VD0%2BcN0BWTlQTUb5WN%2Fur7T5UFPsRspjD5gXrsjt97BMHS1ICzwRMOygl8EGOqUB%2FBOdc3lJtLKHLzXQP5pHf9Wlmaw97qbjm9yj2Fssafyp4hQdDIyNyBomnoOxI5YrQ%2FKOJfR0oyz0YmO5zfd4wpmgo7E3KCiYrrQWywz3QLKLERc64qOuuGrse8oVTAnmbmTWBin%2BFGpReRda6f%2FVrtdfNikhUeXbeWPUD546EvDMrMS2bmjFndV21pdRyDKcVGptIATs4pVEAchYjde%2FksBl2wdx&X-Amz-Signature=9f62d63060f43908388900a3baa609fef74c6f6ef763d6d95ee57d73511be15f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
