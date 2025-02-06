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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROHGVTZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDy4I5zXrslgjWhAiIW%2BZ11WafWHo0Re0u7NMEjMK7SLAiEAj6A%2FVw7TSZvLCn5lspAC2EKwIyf7tCjLtbGC0TG4TDkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBzD8r0mbM%2B3CHx7aSrcAwelQf2cq6mOKIVepIJeXmptOpDG9o5PD%2BGPIe2GxnZeZvOh9RTmVFcm3ELkNcYfyQ1Qvg6GRLtj7TACAuPCysDvDxn7WTwY1LvDdsCbkpTo3phEXYi4lPseABB%2Bp%2FthQ%2FNEPl0eiI6pq0L%2F1wqDFW%2BihtE3MayoeH3iWpmwcwrmOmPqd5z%2F5qXeEveZTdmgYGDUsFJn9NRLV9We8IIVMRIPXZ7LGaMY1OfIk0TG4BmAIv8whtbyO0Jpzy2RYck%2B52lkmzZnXvKVg4qEeRTPl0%2FD28l15HSLfQ3%2FInaomYegRW%2BRBDEr3NCoksgMezvkQz%2Bx5XPY8QCpv3sH%2BnU3wPYOIkjnpk9T5oa5VAOdYBep8cz%2BTK8CNMCNuyi%2BniuXstUHKcOPKWB7uhpZBacEj0CYJpouL5lgrvRQP90KNPbNzZbrwgbDlQrRjTU1iAwtK6lR9QoqMGUywO%2F8um04hSmJWfIBgaSRyNLOHDB0HQaAlrn8ojtnCYO3mK%2Bpd3dmKOxOhfQG5qQopwC9sl78c%2BgYDtnDrir%2F3mICLx8ufmrHde9j3DRnCJb3l4AtLmEOXfYz5k4NnhBVjJGy8LhKBWqIa01xVUb88cASXNOWEGbN%2FpxgcVdZlVs7cSvdMNztkb0GOqUByC2F%2FaxsPxmX6ACC8wqRb0sOFDWddxqusfTDjFIg67vYUm9rlVNi%2B4Mqcf5UQGThOsUKoaUdyj3zvHxi5Rd97XMk2S8LlAWVilaSU%2FSdM16DPcHB2zLlwwA2Q30LRAt34ii3PNnDiGmQ6qdwpqXc2zRvYTg5%2BKVE3ns6cWk%2BQXfdPrm16rmh0uHlVJHtdUxLbas6490kQaW1SaFmv8fJ8ACcyPe4&X-Amz-Signature=74ccb3bf113912b461af92ec86dfa7c1d2515d785bf46845bb576a0c77437c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROHGVTZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDy4I5zXrslgjWhAiIW%2BZ11WafWHo0Re0u7NMEjMK7SLAiEAj6A%2FVw7TSZvLCn5lspAC2EKwIyf7tCjLtbGC0TG4TDkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBzD8r0mbM%2B3CHx7aSrcAwelQf2cq6mOKIVepIJeXmptOpDG9o5PD%2BGPIe2GxnZeZvOh9RTmVFcm3ELkNcYfyQ1Qvg6GRLtj7TACAuPCysDvDxn7WTwY1LvDdsCbkpTo3phEXYi4lPseABB%2Bp%2FthQ%2FNEPl0eiI6pq0L%2F1wqDFW%2BihtE3MayoeH3iWpmwcwrmOmPqd5z%2F5qXeEveZTdmgYGDUsFJn9NRLV9We8IIVMRIPXZ7LGaMY1OfIk0TG4BmAIv8whtbyO0Jpzy2RYck%2B52lkmzZnXvKVg4qEeRTPl0%2FD28l15HSLfQ3%2FInaomYegRW%2BRBDEr3NCoksgMezvkQz%2Bx5XPY8QCpv3sH%2BnU3wPYOIkjnpk9T5oa5VAOdYBep8cz%2BTK8CNMCNuyi%2BniuXstUHKcOPKWB7uhpZBacEj0CYJpouL5lgrvRQP90KNPbNzZbrwgbDlQrRjTU1iAwtK6lR9QoqMGUywO%2F8um04hSmJWfIBgaSRyNLOHDB0HQaAlrn8ojtnCYO3mK%2Bpd3dmKOxOhfQG5qQopwC9sl78c%2BgYDtnDrir%2F3mICLx8ufmrHde9j3DRnCJb3l4AtLmEOXfYz5k4NnhBVjJGy8LhKBWqIa01xVUb88cASXNOWEGbN%2FpxgcVdZlVs7cSvdMNztkb0GOqUByC2F%2FaxsPxmX6ACC8wqRb0sOFDWddxqusfTDjFIg67vYUm9rlVNi%2B4Mqcf5UQGThOsUKoaUdyj3zvHxi5Rd97XMk2S8LlAWVilaSU%2FSdM16DPcHB2zLlwwA2Q30LRAt34ii3PNnDiGmQ6qdwpqXc2zRvYTg5%2BKVE3ns6cWk%2BQXfdPrm16rmh0uHlVJHtdUxLbas6490kQaW1SaFmv8fJ8ACcyPe4&X-Amz-Signature=d2f824c3f14ca33d5b01078bd58a1448fe5c95b97bed3f2bae29d2d946e591a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
