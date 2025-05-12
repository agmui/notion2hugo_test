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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPK2SJX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDxgQRBGKOfBe6hdfmaJpncQWs6DvTBwDNDNNoifm6QhQIgK0NTOmLY81AIPN5yrHSVVbN2yavEsd8MmHL7vQAnPFkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDzxpzdbALitkePSrcA1PIA6S%2BGrfdJNCGhf3IXqMU7vArSYynV2COxOm5DzLBE94bOWipwceDjz7TFUFHtvoyUXbnFcWTJVfc7CC7CKpdrfpJ6AoU0X3dlYsY3q4N5pJszoWBqmxkAvrYaQ07LbAtOqpbxbD0BYN2612bqUXU%2FHPgtuZ76WCiB4XWG38Stu9%2BMmU1k31fb35s0dn7y6qMSqclGNU0BaS5bhsdE39kRJu%2BCaTF9ivSjw3wzXom9OB2YMeEl6RTLP50Hnx6OpDkl6me9fwoAjclQQoylPpmkN5f2LnRBL%2BACCoB6g4oMpUHl4OOEsEDwNe1ivde5zeYAB%2Fev6%2BMpONa%2F8xCXuYShxyZPLQBQTo3h7tG5RMLcWB7ktZ5JWT8xMTQIbhVKm9dp7LLmnTVu7K3xFC59hh9bNSUD1J8L5WdgRqNNpLcQXDWd%2BhtyVCg2PEk3VxntItU%2FmMiE%2BhGubQRztzfyfOQAHKGbGp%2FUH%2Bq9%2FYkvUh9PSUqDZVI3j%2FE7MRXWEGkrI0saC4jp8Bm5GwuM2gfmntpBnIw7n6yrSw4yb7ScHnDzIkQbubBr3n9BPQo0%2BrhIOtBLuAVw%2FExCo54ahLVbJTC2BypmsEgbAy2dglwOof5KxudTS%2F8E%2BOX%2BLUiMO6picEGOqUBGfyoNm5SEJ3%2FblTIRA9czVrmWcut88rP31CGlp8GqqSkGex52BxQpUOIenq0ue6SecyLDa7y6g%2BSiCh1LNL6XGNKHcoaG4cv0Air%2FDQiqyO6xoXA3QlxilLGsYWdvX75lAuae7UtpgUoIdudgdXWLKE42rCSyHE8FTgvSuE%2Bu5ytTmjfM02HllFfmWQMa0oIe%2BhRDmojbVf%2BdjTOrELxkYCidM23&X-Amz-Signature=7b7cb90002cc7d97068cdc91f792f31089b3b88aa17a108a265bfbbdf3fe1044&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPK2SJX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDxgQRBGKOfBe6hdfmaJpncQWs6DvTBwDNDNNoifm6QhQIgK0NTOmLY81AIPN5yrHSVVbN2yavEsd8MmHL7vQAnPFkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDzxpzdbALitkePSrcA1PIA6S%2BGrfdJNCGhf3IXqMU7vArSYynV2COxOm5DzLBE94bOWipwceDjz7TFUFHtvoyUXbnFcWTJVfc7CC7CKpdrfpJ6AoU0X3dlYsY3q4N5pJszoWBqmxkAvrYaQ07LbAtOqpbxbD0BYN2612bqUXU%2FHPgtuZ76WCiB4XWG38Stu9%2BMmU1k31fb35s0dn7y6qMSqclGNU0BaS5bhsdE39kRJu%2BCaTF9ivSjw3wzXom9OB2YMeEl6RTLP50Hnx6OpDkl6me9fwoAjclQQoylPpmkN5f2LnRBL%2BACCoB6g4oMpUHl4OOEsEDwNe1ivde5zeYAB%2Fev6%2BMpONa%2F8xCXuYShxyZPLQBQTo3h7tG5RMLcWB7ktZ5JWT8xMTQIbhVKm9dp7LLmnTVu7K3xFC59hh9bNSUD1J8L5WdgRqNNpLcQXDWd%2BhtyVCg2PEk3VxntItU%2FmMiE%2BhGubQRztzfyfOQAHKGbGp%2FUH%2Bq9%2FYkvUh9PSUqDZVI3j%2FE7MRXWEGkrI0saC4jp8Bm5GwuM2gfmntpBnIw7n6yrSw4yb7ScHnDzIkQbubBr3n9BPQo0%2BrhIOtBLuAVw%2FExCo54ahLVbJTC2BypmsEgbAy2dglwOof5KxudTS%2F8E%2BOX%2BLUiMO6picEGOqUBGfyoNm5SEJ3%2FblTIRA9czVrmWcut88rP31CGlp8GqqSkGex52BxQpUOIenq0ue6SecyLDa7y6g%2BSiCh1LNL6XGNKHcoaG4cv0Air%2FDQiqyO6xoXA3QlxilLGsYWdvX75lAuae7UtpgUoIdudgdXWLKE42rCSyHE8FTgvSuE%2Bu5ytTmjfM02HllFfmWQMa0oIe%2BhRDmojbVf%2BdjTOrELxkYCidM23&X-Amz-Signature=e8762def4ed40628c2376e64b7b5171d8c8e2be9fb711555d8b78556eace5736&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
