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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7YSV45%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIEmxDiC9mk%2BrtNRjZuOsNI4Bqng5T1DPZAzdCGVrVfAJAiEAyS7iwa8xzso%2BV3bkZAwj6jJuirsTeAXhcJep1ifhq4Mq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIEyPCwkiaohEc0mHCrcA0LBwRmGRHL6oBtNVipcy3D83JkGKnP%2FrR3KeYsBNiAVMJ5vWBJM0WaU9y1duTXWOuE6Z%2FnI25gfk6tk%2FrbFGwViWEGB6iBf3M4JNo1T5sCW%2F9QTNY%2BcSOBpFDlE0thA%2BL%2BCns3WBalnpe67mJJPWnTtJ9TJpzcZbhobCbe7pHchXQckzlUOiZ9Z58A0lfZdy2DhbUvx2Owk%2BJkBTzlV1Z6ZD4T9JHpJAgrDNSEhmR5S2QC3do3Eh8KCgMWXS04vvo7snNH3W5ppnUAPkhVf7j15N1WylXNLYEltPsZAvVjZ3xMcuR66jq4sq2DcwpqVi6E%2F4RO5GjCU4Lk%2BkTShrCJ4Wop8O1sNKPVyFESqUCTunUjQUYL1lbwEfUMwG%2B5nF8U42R82lJo9ul%2FqLqlzKzKekZxprTirkgn0HiT3lD70rz899ckwfe7GL2CszGA8gj05itrHifAb04p1k8lsP2h%2FiHogVSYBNhJbFBtEQFYw3XmVZoKT%2BK9X9rH1MCN0gXaCM9oDy1raXoSh09vsXNaM3F6DmWLLwqRlJMEvk8K2PNUsZqD%2FrAJRSR58drIWAcfzG6hFidZIeyLMQ1Q45JhLcrOTVQwytpeOj6sPCQTx3oaG1wfhKM%2BbWpACMIXqvL0GOqUBP3xsnHohMerfNbGN3SXn6r%2BEpOX6rilcBLW1fz%2Fcix3%2FuEYsTUO4C6XoYwUp8TqWOb1w%2Bn1jCA%2FRbWPCT8da6zGksTKLB6bLMb17qHum%2B6ttQS%2F4bcirGhozNOqOekngEKtHlvJs%2F0LDkeiQurRZUwZAA3GFOFT0E8VxeEn9DDHdxGrIUxwHYfju2H8WMpRnJQbbcbl%2FvX8fGHaxDn3cI6VX%2BX4q&X-Amz-Signature=c1db88fc42673734ed805c29a2bc661b75d8570707dd23928db6b3dfb075309c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7YSV45%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIEmxDiC9mk%2BrtNRjZuOsNI4Bqng5T1DPZAzdCGVrVfAJAiEAyS7iwa8xzso%2BV3bkZAwj6jJuirsTeAXhcJep1ifhq4Mq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIEyPCwkiaohEc0mHCrcA0LBwRmGRHL6oBtNVipcy3D83JkGKnP%2FrR3KeYsBNiAVMJ5vWBJM0WaU9y1duTXWOuE6Z%2FnI25gfk6tk%2FrbFGwViWEGB6iBf3M4JNo1T5sCW%2F9QTNY%2BcSOBpFDlE0thA%2BL%2BCns3WBalnpe67mJJPWnTtJ9TJpzcZbhobCbe7pHchXQckzlUOiZ9Z58A0lfZdy2DhbUvx2Owk%2BJkBTzlV1Z6ZD4T9JHpJAgrDNSEhmR5S2QC3do3Eh8KCgMWXS04vvo7snNH3W5ppnUAPkhVf7j15N1WylXNLYEltPsZAvVjZ3xMcuR66jq4sq2DcwpqVi6E%2F4RO5GjCU4Lk%2BkTShrCJ4Wop8O1sNKPVyFESqUCTunUjQUYL1lbwEfUMwG%2B5nF8U42R82lJo9ul%2FqLqlzKzKekZxprTirkgn0HiT3lD70rz899ckwfe7GL2CszGA8gj05itrHifAb04p1k8lsP2h%2FiHogVSYBNhJbFBtEQFYw3XmVZoKT%2BK9X9rH1MCN0gXaCM9oDy1raXoSh09vsXNaM3F6DmWLLwqRlJMEvk8K2PNUsZqD%2FrAJRSR58drIWAcfzG6hFidZIeyLMQ1Q45JhLcrOTVQwytpeOj6sPCQTx3oaG1wfhKM%2BbWpACMIXqvL0GOqUBP3xsnHohMerfNbGN3SXn6r%2BEpOX6rilcBLW1fz%2Fcix3%2FuEYsTUO4C6XoYwUp8TqWOb1w%2Bn1jCA%2FRbWPCT8da6zGksTKLB6bLMb17qHum%2B6ttQS%2F4bcirGhozNOqOekngEKtHlvJs%2F0LDkeiQurRZUwZAA3GFOFT0E8VxeEn9DDHdxGrIUxwHYfju2H8WMpRnJQbbcbl%2FvX8fGHaxDn3cI6VX%2BX4q&X-Amz-Signature=cc17f00fc19106d4202aff98a3acd1ef244dd36e8253a05432d5e8581b8e61f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
