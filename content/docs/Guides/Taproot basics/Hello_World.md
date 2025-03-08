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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORAN522%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T120956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBsgMX5dWt1J99Pj5Bnx9QK8IYK6yoW8TkVqQRhCmf1CAiEAhTFFSvVo8VGt%2FwQxRwQ%2B%2BTnkgWGRB3eSYIgZ7MMdYtkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOtSZlaMmHFTmVaKoircA2gp10TFWMMSyxPdSHrdM%2FPR4WevMaXepZE9pXCMmi4BE1zuPeYbS7maPnLvB3oOSy1QlIJXItH01UNn9ZVC%2B4Cn8%2F3y%2F8faSbn%2B%2BpG8gxGv4ePCqZHiKMo8o3F6cQ5wGrR0KKSDI%2BVUGMJc6IKNubBcy43TUplx9rtrDiX%2F8K8FggjKADvoFUKWBXEmDGBzTVzgspiLSAnyovhqYu528BOCIegYn2CQst6N1trByoi4GcXpEBNvCxuv9vxc4dnT2SBxI972hxksIUuyHVBl%2B3zeKt%2Fz%2B7%2BJk0bQg7H4arFOpHLhOJXtnXvPaEUnqVr0vEjRrE7VgsxfZIEfFuhTKrfX%2FL%2FPe8k6V7hnxW5Uv0W55l6RBYgzaL%2FV3U1SQgJZ%2FMDPJz9Fe9quqcvsSsFd8fpHKth6NUAY%2FBd9Mblr9tluzVSSkHZtrsA8A58nOy4evKNmKhHrqNZB7VfN5OV3Sho9n4qLyuOzMxHfmMcwiTbr1qJ55bD63kI8jZVgNlE5PuS6Ru0AlK2iN6hJZg5hAtZFLjG3JkQukvf8FF3IlT6g5oqMWrEPqRDtr6rWjrBd8dQ7qG4fWkqqHc1HjpM53zZkNKETdoQx8xhYLFII%2FUG2i8v%2BqCGOuFh0%2FFZnMJ7gr74GOqUBgop8CDGUASqeZhGNh4uv%2FrrWH1q9QNWedF7OHxSDm%2FkqZz6UzEByfTVFb7TBpd6zWfv9O9%2B%2FFlXKaTIbc0kFPdrjAgJ0V9Q3%2FEcMGHoIfQ8E0GmRndKgtUwbw82LVryvAUbsuQElwDmISekYduXj2BygtVPNttezqh0kW3xJpiGqTUZFA4kUEi2x4qF4IetRYDqMxI3qUUkZ05TOvv2z6SJm8tAv&X-Amz-Signature=69e01f2ae8325524c9b5a3bc063b479f2afb5b2f67dd71cba214d4bd64d19c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORAN522%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T120956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBsgMX5dWt1J99Pj5Bnx9QK8IYK6yoW8TkVqQRhCmf1CAiEAhTFFSvVo8VGt%2FwQxRwQ%2B%2BTnkgWGRB3eSYIgZ7MMdYtkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOtSZlaMmHFTmVaKoircA2gp10TFWMMSyxPdSHrdM%2FPR4WevMaXepZE9pXCMmi4BE1zuPeYbS7maPnLvB3oOSy1QlIJXItH01UNn9ZVC%2B4Cn8%2F3y%2F8faSbn%2B%2BpG8gxGv4ePCqZHiKMo8o3F6cQ5wGrR0KKSDI%2BVUGMJc6IKNubBcy43TUplx9rtrDiX%2F8K8FggjKADvoFUKWBXEmDGBzTVzgspiLSAnyovhqYu528BOCIegYn2CQst6N1trByoi4GcXpEBNvCxuv9vxc4dnT2SBxI972hxksIUuyHVBl%2B3zeKt%2Fz%2B7%2BJk0bQg7H4arFOpHLhOJXtnXvPaEUnqVr0vEjRrE7VgsxfZIEfFuhTKrfX%2FL%2FPe8k6V7hnxW5Uv0W55l6RBYgzaL%2FV3U1SQgJZ%2FMDPJz9Fe9quqcvsSsFd8fpHKth6NUAY%2FBd9Mblr9tluzVSSkHZtrsA8A58nOy4evKNmKhHrqNZB7VfN5OV3Sho9n4qLyuOzMxHfmMcwiTbr1qJ55bD63kI8jZVgNlE5PuS6Ru0AlK2iN6hJZg5hAtZFLjG3JkQukvf8FF3IlT6g5oqMWrEPqRDtr6rWjrBd8dQ7qG4fWkqqHc1HjpM53zZkNKETdoQx8xhYLFII%2FUG2i8v%2BqCGOuFh0%2FFZnMJ7gr74GOqUBgop8CDGUASqeZhGNh4uv%2FrrWH1q9QNWedF7OHxSDm%2FkqZz6UzEByfTVFb7TBpd6zWfv9O9%2B%2FFlXKaTIbc0kFPdrjAgJ0V9Q3%2FEcMGHoIfQ8E0GmRndKgtUwbw82LVryvAUbsuQElwDmISekYduXj2BygtVPNttezqh0kW3xJpiGqTUZFA4kUEi2x4qF4IetRYDqMxI3qUUkZ05TOvv2z6SJm8tAv&X-Amz-Signature=0be90fbc9056b243f232f1db322c58b13e28a1369f121e77c8c5cd27d65a47a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
