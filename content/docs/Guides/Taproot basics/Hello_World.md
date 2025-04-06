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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7C6Y5A%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHTGpcwp2vQsnU9KKj9%2BVpSCPGSEbHDsTgGu6O8ZvBdAiA7uM8N3jzEZimZiqn9iScSIRzp4fQRNH%2FgLG1ona5VZCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMk2TNBDnerdvu7GXFKtwDHeJpzRX6A%2BTELD%2FCxDVjOhDEOiC53ElIia4VA1LU9lBHyytEvTdnvAN1%2F%2Ba209I8Sctly%2FI8cM6N3SI43V%2FVc8%2FCk1aOC8MLvH7txy2uOmVrVWZ9qX7lmC6gi2lv5PKzsAuapfKmLKoSLC9Fv%2BLWk77SB5WnFpPR8o67WynAtHIfoHDrw4d%2BaGM0XwR30JjtXFWnzVsD7O%2FgmUHPtbWXL7GA5u%2F%2F78LQjf3G4Z4a%2B5UpS%2BUVdnpGhb34gVR0e%2BSy6hcqEZ%2BOLGQnsz8sJr2uBjOJ76uUJBPHaWS6pFEyIbjzDXrhHyiCCmTV%2FGYGHH3mPthuBHTv7GRiulmZaj%2FHb9mo2IQBiKE9ME1LmvDh9O9pp21seXnz1niWw%2FiTbNt0JvHlquIOlQQ8%2FIIfK7nqXGsQ4Z8d%2BkRGZq6KAbPFFuT%2FmiYnI671NuxjG%2BwN%2Bc70mwkCMBpvjXxV2bdpcHVVOGrQxoMcl1TwlcG5dqPWITRojofZZxmBDy%2FPRNnGIS4ldv2YqG%2BqZW%2BQXEdaqVsHbrgBSN0wZz2abrQiw33f%2F%2FUXt0GfuMMOIARSWPAiXGYAg7OlAKFsMGGV2nIJxCb9XEI6bZb7K%2BRGOFbLJCjiPeTMmd6uNhr2xxZLIqEw8v%2FHvwY6pgEXPQ0b7mSuWJGNxZAHKYBg6RNeJW1wr27W7fl%2BsEXTZ2utTinatDAYhgzS3ZrHVyCnfb8Kc4%2FKauyICibf75HjJXcGMRN6yIc2u7eNvQb56M%2FQ6xnuS%2BV17UveGMM%2FWkJyfhE9b8r98H5nPXBQQLebhzKBnN7x%2BgSRqEs%2BI%2BCRv%2BzivH3dSR%2FOK7Top%2FNs32B8G62hx0m2Xk70olKKjublAwrze4lb&X-Amz-Signature=058127e4f4dfa2dd845bf27eaafc1f38a094efefe9389a19503007a4e60bf3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7C6Y5A%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHTGpcwp2vQsnU9KKj9%2BVpSCPGSEbHDsTgGu6O8ZvBdAiA7uM8N3jzEZimZiqn9iScSIRzp4fQRNH%2FgLG1ona5VZCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMk2TNBDnerdvu7GXFKtwDHeJpzRX6A%2BTELD%2FCxDVjOhDEOiC53ElIia4VA1LU9lBHyytEvTdnvAN1%2F%2Ba209I8Sctly%2FI8cM6N3SI43V%2FVc8%2FCk1aOC8MLvH7txy2uOmVrVWZ9qX7lmC6gi2lv5PKzsAuapfKmLKoSLC9Fv%2BLWk77SB5WnFpPR8o67WynAtHIfoHDrw4d%2BaGM0XwR30JjtXFWnzVsD7O%2FgmUHPtbWXL7GA5u%2F%2F78LQjf3G4Z4a%2B5UpS%2BUVdnpGhb34gVR0e%2BSy6hcqEZ%2BOLGQnsz8sJr2uBjOJ76uUJBPHaWS6pFEyIbjzDXrhHyiCCmTV%2FGYGHH3mPthuBHTv7GRiulmZaj%2FHb9mo2IQBiKE9ME1LmvDh9O9pp21seXnz1niWw%2FiTbNt0JvHlquIOlQQ8%2FIIfK7nqXGsQ4Z8d%2BkRGZq6KAbPFFuT%2FmiYnI671NuxjG%2BwN%2Bc70mwkCMBpvjXxV2bdpcHVVOGrQxoMcl1TwlcG5dqPWITRojofZZxmBDy%2FPRNnGIS4ldv2YqG%2BqZW%2BQXEdaqVsHbrgBSN0wZz2abrQiw33f%2F%2FUXt0GfuMMOIARSWPAiXGYAg7OlAKFsMGGV2nIJxCb9XEI6bZb7K%2BRGOFbLJCjiPeTMmd6uNhr2xxZLIqEw8v%2FHvwY6pgEXPQ0b7mSuWJGNxZAHKYBg6RNeJW1wr27W7fl%2BsEXTZ2utTinatDAYhgzS3ZrHVyCnfb8Kc4%2FKauyICibf75HjJXcGMRN6yIc2u7eNvQb56M%2FQ6xnuS%2BV17UveGMM%2FWkJyfhE9b8r98H5nPXBQQLebhzKBnN7x%2BgSRqEs%2BI%2BCRv%2BzivH3dSR%2FOK7Top%2FNs32B8G62hx0m2Xk70olKKjublAwrze4lb&X-Amz-Signature=34e26e2b5b0411b196860ab425359db1cc9a74fa6f6ea908ab3154f6e68a3fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
