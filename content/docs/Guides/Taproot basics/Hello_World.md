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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EHF4MQJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDcfgDrKGO7MR2du0Z5loNewzDZGK%2FWyYMvoeuyLyivAiEAj8ZZCP%2BOXjUefzHoXBllZuHoKECXkV2g%2FZPMvnb8mx8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2KfueiGbv7xewXhSrcAzpc%2BagGesBLnPvb9hu1t7hWkT9j6NmjwH%2BOVU7SjoCq3WDTdFhzmbNNhfWE3sbr7d8I6ESLk%2FAEM6PjN25nT%2B%2Fm3DeO0wwe537RerUAlONtzKPQnuLusLmtheGAn1iwSKYaZi2RmMjTfgdiyaqlZicCm9dDqV5MEfY21IWQ4cSzGuQB1OsJDxjUiznpVa%2BGLJ%2FW9igFRXyYcTKetxNdobnvB1dQzOfbCtd0VZcXJaTTeqQX1OfBB1JUFg4Go9wZnScuFAPKwC6vZQ85XvgSlGxFU1vDItfzxsDCJGKoLk%2BmDBgLhfmOdzheOqIVpTdxQ1XV4uuu%2FwTnelNiS1Psqm7gXuP1a7KlNAX5aeUjL7UjC1PO976oBi80bwHCIBqIFnUMfoXO7cnfizAQ7hGO0CdE5C5fLKi6BJE60lE88lKbqlHsG1XYBO6QsMTDEdoMZ6LO9%2Fs93x39KUgB01FDxHkHewYTM8SGwd3UHwVkT2xZjc5TN4YsbcpVwdg4hCJpotY5FycYp8OV2CCWz93Kttq5HR2E98jM5gg6ygFC0wJHNhID5wKCOouBh67daX1%2BwRieCuGUVwqj41xM573xaDAs69fr6aZ3kpSqe8QknAQO2YUw5IPeYbILTytbMI%2Bpsr0GOqUBdEMLFvJ%2FAPckGlDIF93Cxz8KbTbLb7kIlumuMs3SfKN%2BQEqTwFqQWQp7flY1Hx4pPbqk2QJ28dlaJgJi9qVzfXUSSgmI0Ls0%2BuBhpf5ud6su51OguK3wl5iA9REaEnaAri4kWzOwv5mYv8mflypD8FJ7JUmE7fXvYbJGWPbu4RZ6ZlNhfqk5mmpajx%2FIOmjksHdQJtL9w65YOY6qWARyJh317mL0&X-Amz-Signature=438e01a06f887b2fdb1f00c60fe01360275b953b9ac7011d31c5dd5e5fc3016a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EHF4MQJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDcfgDrKGO7MR2du0Z5loNewzDZGK%2FWyYMvoeuyLyivAiEAj8ZZCP%2BOXjUefzHoXBllZuHoKECXkV2g%2FZPMvnb8mx8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2KfueiGbv7xewXhSrcAzpc%2BagGesBLnPvb9hu1t7hWkT9j6NmjwH%2BOVU7SjoCq3WDTdFhzmbNNhfWE3sbr7d8I6ESLk%2FAEM6PjN25nT%2B%2Fm3DeO0wwe537RerUAlONtzKPQnuLusLmtheGAn1iwSKYaZi2RmMjTfgdiyaqlZicCm9dDqV5MEfY21IWQ4cSzGuQB1OsJDxjUiznpVa%2BGLJ%2FW9igFRXyYcTKetxNdobnvB1dQzOfbCtd0VZcXJaTTeqQX1OfBB1JUFg4Go9wZnScuFAPKwC6vZQ85XvgSlGxFU1vDItfzxsDCJGKoLk%2BmDBgLhfmOdzheOqIVpTdxQ1XV4uuu%2FwTnelNiS1Psqm7gXuP1a7KlNAX5aeUjL7UjC1PO976oBi80bwHCIBqIFnUMfoXO7cnfizAQ7hGO0CdE5C5fLKi6BJE60lE88lKbqlHsG1XYBO6QsMTDEdoMZ6LO9%2Fs93x39KUgB01FDxHkHewYTM8SGwd3UHwVkT2xZjc5TN4YsbcpVwdg4hCJpotY5FycYp8OV2CCWz93Kttq5HR2E98jM5gg6ygFC0wJHNhID5wKCOouBh67daX1%2BwRieCuGUVwqj41xM573xaDAs69fr6aZ3kpSqe8QknAQO2YUw5IPeYbILTytbMI%2Bpsr0GOqUBdEMLFvJ%2FAPckGlDIF93Cxz8KbTbLb7kIlumuMs3SfKN%2BQEqTwFqQWQp7flY1Hx4pPbqk2QJ28dlaJgJi9qVzfXUSSgmI0Ls0%2BuBhpf5ud6su51OguK3wl5iA9REaEnaAri4kWzOwv5mYv8mflypD8FJ7JUmE7fXvYbJGWPbu4RZ6ZlNhfqk5mmpajx%2FIOmjksHdQJtL9w65YOY6qWARyJh317mL0&X-Amz-Signature=2cb51b911d00e5db0c9fcdd2585a3de1ead8847d55ac55755d514ce0cc0db312&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
