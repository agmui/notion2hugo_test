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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V66MPBGN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGU8Jc%2FhnYEyglbZh3RLL1PhcHn1JTEY13jYSnG%2FYTjjAiEA1qVDUp%2BMxkPfGm%2BMAHlMsOjrIn%2Bf4PLVj9GPqYYeskUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGImLfiQn9j05Ff6WyrcA2m%2BmtTo%2BlgmDFQWb2GgR9seL23BVAFxKRneMbLgoJKR%2FSiYJbl3WypSshBb9G3sYHtWoMnrMjV0EGyL20sEMabxEScMV0pw4FOPVFtzDsu%2FfEiwXN4p4DEBS9zMP%2BCpfenAntRinbEkkVIUb9ML1J3ZMnQxrJQ8phQQzJw8MbuUzfnL3Hxaa49HHkGUjdzn2iIjeTuJtr5VDy%2F%2FLtf5MXL6hXiQ2Fswd6DhVPPMm3Yz8sQRIU7zqYuPA4GzhCL5g9tFCdi3G8mHVFn9Y2zM2jY%2BrTf5VsD2h8q0DIf81iPOKxwY2YDS94eb91EtjmiVeZ3c%2FY2ikrADK0cP7KlH2w2DevBkZSXS1d1RCvdbJLJnr8vPOiiFiQMBX7pk5WF7ZSIjLIOA1zadHnIRa4sTdB6LP%2FaCCdpbtACegymg%2F7n8idlqE3XKFvWdgkJy5ruGsLHvXpLRdYJ51WsS9%2FRrsBGQIG4cs7BRV8XemMdlcJMEWK%2BItWeCd8IJIaSCIFEJna6sjGfQWB0bPUP4yiJnu3J8uWjZZm9307IWIAWJ15rHk59FnOz4lV%2BDfRGxw1nm9w7ahOnZ1XLnrVfnvuX46aGqxQ9sbhYkPiCFHFJxVm224qZfCETuWjx59I6iMPSCsr4GOqUBfr8CKl6PBo7EmzO6L3flDaJ0EANAnJ0jIcbTW4%2FxRhvbo%2F1BIjr6jhPJFxF%2Fv1QX9LvcPV9%2BTVJ0NvFGfgEIH0na5DKQd8wm3%2BGaMOzLgrrO%2B%2BIZnA1IY0GbZt77seqNdT%2FMRDlkSwsvCtqBUHpp%2BJdEZmEsJ7Ci1IqIMkiFfYhUzEhxTRr%2F4FQPQaOk%2Fnw7mfTAsfuObmSsKIM79Ow77dwu5rzj&X-Amz-Signature=5ea81d3caf8b54b8ca4fcff5485567ef855d5f676bdcd257e088d2f0a5e60243&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V66MPBGN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGU8Jc%2FhnYEyglbZh3RLL1PhcHn1JTEY13jYSnG%2FYTjjAiEA1qVDUp%2BMxkPfGm%2BMAHlMsOjrIn%2Bf4PLVj9GPqYYeskUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGImLfiQn9j05Ff6WyrcA2m%2BmtTo%2BlgmDFQWb2GgR9seL23BVAFxKRneMbLgoJKR%2FSiYJbl3WypSshBb9G3sYHtWoMnrMjV0EGyL20sEMabxEScMV0pw4FOPVFtzDsu%2FfEiwXN4p4DEBS9zMP%2BCpfenAntRinbEkkVIUb9ML1J3ZMnQxrJQ8phQQzJw8MbuUzfnL3Hxaa49HHkGUjdzn2iIjeTuJtr5VDy%2F%2FLtf5MXL6hXiQ2Fswd6DhVPPMm3Yz8sQRIU7zqYuPA4GzhCL5g9tFCdi3G8mHVFn9Y2zM2jY%2BrTf5VsD2h8q0DIf81iPOKxwY2YDS94eb91EtjmiVeZ3c%2FY2ikrADK0cP7KlH2w2DevBkZSXS1d1RCvdbJLJnr8vPOiiFiQMBX7pk5WF7ZSIjLIOA1zadHnIRa4sTdB6LP%2FaCCdpbtACegymg%2F7n8idlqE3XKFvWdgkJy5ruGsLHvXpLRdYJ51WsS9%2FRrsBGQIG4cs7BRV8XemMdlcJMEWK%2BItWeCd8IJIaSCIFEJna6sjGfQWB0bPUP4yiJnu3J8uWjZZm9307IWIAWJ15rHk59FnOz4lV%2BDfRGxw1nm9w7ahOnZ1XLnrVfnvuX46aGqxQ9sbhYkPiCFHFJxVm224qZfCETuWjx59I6iMPSCsr4GOqUBfr8CKl6PBo7EmzO6L3flDaJ0EANAnJ0jIcbTW4%2FxRhvbo%2F1BIjr6jhPJFxF%2Fv1QX9LvcPV9%2BTVJ0NvFGfgEIH0na5DKQd8wm3%2BGaMOzLgrrO%2B%2BIZnA1IY0GbZt77seqNdT%2FMRDlkSwsvCtqBUHpp%2BJdEZmEsJ7Ci1IqIMkiFfYhUzEhxTRr%2F4FQPQaOk%2Fnw7mfTAsfuObmSsKIM79Ow77dwu5rzj&X-Amz-Signature=bbddc5def76d3a302560371b0076b653b38a88d3c3204b5819aa3bcb5a43042b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
