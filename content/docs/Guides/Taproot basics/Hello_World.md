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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HN77J7Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAZqAEHaGgYTVrhHCs54MZhavuH%2FIougNPm%2FP%2FCz%2Bg1QAiA3OcWPXkt%2B7%2FWiPSrVZy6ptV49dRovMXR6fw5DYuYA5iqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dCo4FiE3JqILgZJKtwD0MBu1L7p8oR1smc7Y1STrE8HjAckzrhBoBL0spAFXdHaD4QWiKHxSwEvSXP8oEvKnFEAAVRzLm947S1iWTsHLRUZtMMn9Z8elmezODuAD8Uxu7FzxoSsz9xpBxnTiIhcPOnuL%2BQylj1WTVCJvx5M4gFGUEQivnrDD3ZJPYFJ%2FkewgeWhQrth15tzTCALDHTm9vcMIHvt%2Fklcad38B4avw0npPYVBApwxfLPWDkwbAXDkTuFnhgveiOgbJvU%2BsXx8DG%2B8GdpHDwzGiFh%2BlZ3PAxJmARKfCERsv8KW5ozaCkh9MmkP3SEdBa4YS73nFLc4%2Bj3kckWVuUTiTAVCeoGbSfF0sPLwvD8jz53zsyy%2BrGdLxkvF4poSaXO0R0%2Fu08XFE%2B%2BFYBiSHw3Z1fOP2T%2FGd2%2FRS%2F7fuqUJ%2FVw62eKZ2eEAYfPEZ1A3YQMqGo9dN3K15ltcqR3Ihr6fM1HP8%2B09REDiXtrI9LSvTmU2JfmP95B88pNPexHoiOSjB9nuZ%2BciQVSQwUUpkjaiX7w2lNNpJ5pN7AnGNjmbPZmudcNN3UmhKitxJwPR6uF3LAvJhvf6Hcfz2RJgfAepsqvJPedOrUfDup1PCyEugnfKHo45UgDwTTfzmuZL%2BOwmdDYwx4uDxgY6pgGg0XHlcNCdfdPdFxYtesWUkkkXl9t%2FPhzyDt06EJ4X7114O0mZMSu8JljFQupRrAi5EHUJbo6uLOpOxKEWrLxYpMi5lVn70W90wO9k8cH4lAZZx0JvTSTBANPq%2F0uQe%2B%2BzQvHtQIL3glj4qwGP3uhjXiJuijROVE7XxMWv%2FRwqsHyiw%2F0nFdiin2YoVKTIuGAyFdnMWsphj3WdkbNqViKs5itMdi6h&X-Amz-Signature=2eb1e91e3b8029bc5f183c749a5c30f36f3e7ac3a1f067a3a2da2636860e25c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HN77J7Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAZqAEHaGgYTVrhHCs54MZhavuH%2FIougNPm%2FP%2FCz%2Bg1QAiA3OcWPXkt%2B7%2FWiPSrVZy6ptV49dRovMXR6fw5DYuYA5iqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dCo4FiE3JqILgZJKtwD0MBu1L7p8oR1smc7Y1STrE8HjAckzrhBoBL0spAFXdHaD4QWiKHxSwEvSXP8oEvKnFEAAVRzLm947S1iWTsHLRUZtMMn9Z8elmezODuAD8Uxu7FzxoSsz9xpBxnTiIhcPOnuL%2BQylj1WTVCJvx5M4gFGUEQivnrDD3ZJPYFJ%2FkewgeWhQrth15tzTCALDHTm9vcMIHvt%2Fklcad38B4avw0npPYVBApwxfLPWDkwbAXDkTuFnhgveiOgbJvU%2BsXx8DG%2B8GdpHDwzGiFh%2BlZ3PAxJmARKfCERsv8KW5ozaCkh9MmkP3SEdBa4YS73nFLc4%2Bj3kckWVuUTiTAVCeoGbSfF0sPLwvD8jz53zsyy%2BrGdLxkvF4poSaXO0R0%2Fu08XFE%2B%2BFYBiSHw3Z1fOP2T%2FGd2%2FRS%2F7fuqUJ%2FVw62eKZ2eEAYfPEZ1A3YQMqGo9dN3K15ltcqR3Ihr6fM1HP8%2B09REDiXtrI9LSvTmU2JfmP95B88pNPexHoiOSjB9nuZ%2BciQVSQwUUpkjaiX7w2lNNpJ5pN7AnGNjmbPZmudcNN3UmhKitxJwPR6uF3LAvJhvf6Hcfz2RJgfAepsqvJPedOrUfDup1PCyEugnfKHo45UgDwTTfzmuZL%2BOwmdDYwx4uDxgY6pgGg0XHlcNCdfdPdFxYtesWUkkkXl9t%2FPhzyDt06EJ4X7114O0mZMSu8JljFQupRrAi5EHUJbo6uLOpOxKEWrLxYpMi5lVn70W90wO9k8cH4lAZZx0JvTSTBANPq%2F0uQe%2B%2BzQvHtQIL3glj4qwGP3uhjXiJuijROVE7XxMWv%2FRwqsHyiw%2F0nFdiin2YoVKTIuGAyFdnMWsphj3WdkbNqViKs5itMdi6h&X-Amz-Signature=350105157d837ed0cb6bd9542026f03f4b1baeea53e6a7a153ecf5b555b96fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
