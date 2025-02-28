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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNSG6Q6%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBIfFhNfU2oLxYSRVHn3cfOZ5qs0GwpFndBBZ%2BEXbCIiAiEA6MS6U%2BwFsZNnas3n95JHfrk5RTBtP2XzfijaVMQOMLEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWcEiv7JMmuX9CwmSrcA6PSvI9jfylQQFz7Srx0So9vg5VYZsUtl4811vr1xFd6uUloc%2FdKtoguxyNBLlTPFSjSXN7KK6b8HDaaKBAeW%2BpmjHlQXMelafr5kpZQS%2FjUietijDL%2FDmrzlO%2FXY6Wldssv290F6sHTWEzjEzZL7JeCVtz%2BorjHHtXfFY%2FNiimb8Nv5GbrnQD5RRcIWjTfq1jEuTIPkQIbytnwhyNZ3ZyCdrLXzv4fExD3XuctErNvUD02vGRE7iQk%2FGB5ji2LGFG1OnEixf0VHoD0JjC1GBpA4Qxe3%2B06O8uJvhPkYmPNUp%2BXwaQylL5b2eNdyjps8gxDfQxNJkw4zY%2Fl7lRqUVxe03NsEuaozdApY%2BymbVGHj9raqfxQi6SVdNIxZVg5HBkYwln%2FIcIbfVIRkmVK%2BU%2FWHQ5si8VHXOELwkn4OTMOzj6GteISHx7zOkMu4sqiA1503pQ3MzF2%2BdO9E%2B4myxzTbz1cY%2BlGAVaQ%2FaV%2FNRUnj%2BGmfVtX%2B24BlY0DQGkNNAvUp3E0ruGMTBKBzo41ICXYBZ2BMvjmnDz2HNC14tnQCtNjCqh3%2BrTXMcMzIniWeS5kFI92tOyuBSp5iCa6RRnG%2BiwGn5E0WCpy223xvr1aLf5CO2lyxL1UqoYUiMPPQhr4GOqUBzYabXmdlZcabWExOBTO7vgHG59kcKL3udV7hWWfnZgjPRuQhyeTdQPkuTMlpMUdQDtSVKahYdjJr9pAZ5qSDgFd6STQLNT4WnSzAyJvJtMjFPk7bLSTQaeMmZAAy6JyQMMX7A24HyblnjksmglieM1nONVL63Nw5uCPu7NuOMtM50tdpmnUyuLSfvcFdKKE%2B%2Fw2JHuLdesDvZMLWw2UB57ipTnBD&X-Amz-Signature=38e3ef86ebeb607dce399c9aec0c8b70570f2747034548e5bbac69829b89d85f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNSG6Q6%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBIfFhNfU2oLxYSRVHn3cfOZ5qs0GwpFndBBZ%2BEXbCIiAiEA6MS6U%2BwFsZNnas3n95JHfrk5RTBtP2XzfijaVMQOMLEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWcEiv7JMmuX9CwmSrcA6PSvI9jfylQQFz7Srx0So9vg5VYZsUtl4811vr1xFd6uUloc%2FdKtoguxyNBLlTPFSjSXN7KK6b8HDaaKBAeW%2BpmjHlQXMelafr5kpZQS%2FjUietijDL%2FDmrzlO%2FXY6Wldssv290F6sHTWEzjEzZL7JeCVtz%2BorjHHtXfFY%2FNiimb8Nv5GbrnQD5RRcIWjTfq1jEuTIPkQIbytnwhyNZ3ZyCdrLXzv4fExD3XuctErNvUD02vGRE7iQk%2FGB5ji2LGFG1OnEixf0VHoD0JjC1GBpA4Qxe3%2B06O8uJvhPkYmPNUp%2BXwaQylL5b2eNdyjps8gxDfQxNJkw4zY%2Fl7lRqUVxe03NsEuaozdApY%2BymbVGHj9raqfxQi6SVdNIxZVg5HBkYwln%2FIcIbfVIRkmVK%2BU%2FWHQ5si8VHXOELwkn4OTMOzj6GteISHx7zOkMu4sqiA1503pQ3MzF2%2BdO9E%2B4myxzTbz1cY%2BlGAVaQ%2FaV%2FNRUnj%2BGmfVtX%2B24BlY0DQGkNNAvUp3E0ruGMTBKBzo41ICXYBZ2BMvjmnDz2HNC14tnQCtNjCqh3%2BrTXMcMzIniWeS5kFI92tOyuBSp5iCa6RRnG%2BiwGn5E0WCpy223xvr1aLf5CO2lyxL1UqoYUiMPPQhr4GOqUBzYabXmdlZcabWExOBTO7vgHG59kcKL3udV7hWWfnZgjPRuQhyeTdQPkuTMlpMUdQDtSVKahYdjJr9pAZ5qSDgFd6STQLNT4WnSzAyJvJtMjFPk7bLSTQaeMmZAAy6JyQMMX7A24HyblnjksmglieM1nONVL63Nw5uCPu7NuOMtM50tdpmnUyuLSfvcFdKKE%2B%2Fw2JHuLdesDvZMLWw2UB57ipTnBD&X-Amz-Signature=97d6d964ffc20a115913114395ae559b2ad95a594137b5fa0c355a22c40916e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
