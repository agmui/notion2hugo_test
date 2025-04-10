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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMVH6P7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFLLwqZTaKycqvgxZ036tMbU03nBXOnVKprjn6LLczdzAiEAw3Vt8p1kzr0Iy%2FW7ch6C1r2nNEPUegZV3NHx9ik3Q7QqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSOBSXQzC7ML03ieyrcA8aZ3lw%2F4i1L%2FFIDhc0rL%2BWMqIfB5wOnDmNTirWVY06XSMA9oBBgG4Q1wKD3qTmAso0NcrPHPbxJBlCkT%2F4raHtkhFIAoNLsXs65SMyRX7wrRJvTXPCnWLNPKCAfxzmrGPm3WqO2QEqCN3Qj1t4lCv002TCZKD%2FA4MK9KHeGvpxfucfu%2Fl48vJkR8T%2FHtN5LbFQ%2FR1ZiZrjLoJfig7R78N1hchAD2TMKPtAzhGT%2FuswVmsJVmEDsgWZNDOoI78zqdl1%2FLpeL2zbfCcrYFbzP%2FeynLuIaRdmRr0aMQBtiw5yeEPRmSYl2qxfw1ae51AEQNo2F9w%2F2M4MgxAhsRIaRzQNwjDQkjgUhYv1MTLVcY1w1XP8TGjOmWdLy12PoIrrbJc6tl3L6HsolOxUkNV4DyxZpHbxOiN9LecOcOi0onoHVxEKrosl6OPpXtIBCijGBU2An5yAuV7QoHCRs4VBHmBTjSE5xDiz8YBF5PkYG5jhOthcunCSv2kG46YlobLbCgkE7J71eEIWM9ZbQHZrScJxYtrq4JcKYzX8LqEpISmi9CP6kfpHLovPBE4yfJ15jL%2F06W3%2Fai4AqGw49UPW%2BRq7DmMZfeeUNzEPD9flDs4eXHGabOti3Xzjog%2BeNMK%2B93r8GOqUBzIpDvMiH9QuTsw7HweVP2v2AFZi2iAU84PEUy0%2Be%2FqQrtdpmtlp5L818B5IqSinT4L41toUuZ2ZOxxAANQAG39riSKl05un%2BvpXIuYb8hIBU%2FBkScb7qlv%2FZBaV3Rx%2Fjv3UL5Qv6DPyKdnRUbI%2BE9iMJEw6Mc8xX79EkAGWsRBrGVpmRlOVi79bhMq6TAASDyQAb7UQxAoYsB9jrOpkiSb8Xz2Wv&X-Amz-Signature=99214bd3b7b737cefe2c358c2b86484d7be0f34042d385dfebbc7bac4e578197&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMVH6P7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFLLwqZTaKycqvgxZ036tMbU03nBXOnVKprjn6LLczdzAiEAw3Vt8p1kzr0Iy%2FW7ch6C1r2nNEPUegZV3NHx9ik3Q7QqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSOBSXQzC7ML03ieyrcA8aZ3lw%2F4i1L%2FFIDhc0rL%2BWMqIfB5wOnDmNTirWVY06XSMA9oBBgG4Q1wKD3qTmAso0NcrPHPbxJBlCkT%2F4raHtkhFIAoNLsXs65SMyRX7wrRJvTXPCnWLNPKCAfxzmrGPm3WqO2QEqCN3Qj1t4lCv002TCZKD%2FA4MK9KHeGvpxfucfu%2Fl48vJkR8T%2FHtN5LbFQ%2FR1ZiZrjLoJfig7R78N1hchAD2TMKPtAzhGT%2FuswVmsJVmEDsgWZNDOoI78zqdl1%2FLpeL2zbfCcrYFbzP%2FeynLuIaRdmRr0aMQBtiw5yeEPRmSYl2qxfw1ae51AEQNo2F9w%2F2M4MgxAhsRIaRzQNwjDQkjgUhYv1MTLVcY1w1XP8TGjOmWdLy12PoIrrbJc6tl3L6HsolOxUkNV4DyxZpHbxOiN9LecOcOi0onoHVxEKrosl6OPpXtIBCijGBU2An5yAuV7QoHCRs4VBHmBTjSE5xDiz8YBF5PkYG5jhOthcunCSv2kG46YlobLbCgkE7J71eEIWM9ZbQHZrScJxYtrq4JcKYzX8LqEpISmi9CP6kfpHLovPBE4yfJ15jL%2F06W3%2Fai4AqGw49UPW%2BRq7DmMZfeeUNzEPD9flDs4eXHGabOti3Xzjog%2BeNMK%2B93r8GOqUBzIpDvMiH9QuTsw7HweVP2v2AFZi2iAU84PEUy0%2Be%2FqQrtdpmtlp5L818B5IqSinT4L41toUuZ2ZOxxAANQAG39riSKl05un%2BvpXIuYb8hIBU%2FBkScb7qlv%2FZBaV3Rx%2Fjv3UL5Qv6DPyKdnRUbI%2BE9iMJEw6Mc8xX79EkAGWsRBrGVpmRlOVi79bhMq6TAASDyQAb7UQxAoYsB9jrOpkiSb8Xz2Wv&X-Amz-Signature=5bb3043dad0c5c50baa8b69ef6b077cbf064807193c16f87239df7c15bffd337&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
