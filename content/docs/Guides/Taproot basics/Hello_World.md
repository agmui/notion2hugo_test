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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZX6C6II%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICSbsofv3BX8nbspNymxxEbpn1MLjdetU3b8%2Bu5ut4RQAiEAhlYa%2FFz79nLWl4WhXdF9d8fL%2Fv5%2BtCea8wjA92qeUJ0qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8W4EZMgxaPvEVxDyrcA0%2Bl%2F9LfxhogS5Us4zdIxmOda1A%2FDzZZEGOPfaoEDUX3%2FznIWn61Rp%2BsGFin51SP8QwF1QFiVYtwjbkvC04Og9GngCJgOXCD7bcyOkyUkQANqx%2FWcR%2FC5GwRFEhhMMvBLU68h%2F9dj5DKLnWAOg6QfX3NB%2FiMkYcldWlV3ziOh0xYuWGZdUV5OtAyDrFsiUdOwt6MXcZyi1%2B1tcVpqdKNoYgIa6MgzjMABF3vuTQqH7yZR0AIRopIkCNsdynBUfbwNKsl3YR9GWyEn2jb6yFDk0ebpehpXu2dPWKitU0mVuJLyO3X1QugkSQJ%2B%2FFdGPrgd485sXmlHZ0g%2F6f7ChVtElPij94k1taQlsggRjCEVKWiHiQDnmrSNtfBX9dA9exfqrOLMIZvyHO3lWrW1UdyHHXtarhA%2BZ9bo07reXDsFCnt%2Bl%2F61hFEgUnTe%2BAkeP%2BSrpVyznBSNhsrt4xDRJzgNH%2FPozbmqcZQDl50q0vkPBMM0QPYxF48MZEwaaCTJ5LsUzqlpJRsoEPH27C%2FHqIOrKsckQxT4CYoOgm5rTT9DnUzPRTaYOzh0zfyqp76qOk0AQDHOOW3iHti0JxE2P%2B4xgUkx3rjL%2BVYjn6nIp3qKqhKylDj1fvb%2F4gV7SrVMI2Pi8EGOqUBnAEviGcGYOhu2PgjvqZZlNW7LPKpRzgMi%2FLYI3GgnwnsjA0GAsQ8%2BboKirUxqvZ20uw4zJdAZ1%2BySqFzzlPCdwOHXsTc%2BRotqakW9NwekaC430HYGX%2BALo55mSBYhp2sBGPX4iqfEw9vmW1NBaqap9vbHAagl32RPN7Flj8%2FdCe3%2Fs%2Bhv0riSTbqtf3VBR8zRxtOW4oGP67SBq6anE7xirXznjcA&X-Amz-Signature=c19dc438c2a63124b50e589915a8bf181248114d419c756ca6debdaa27d9db0a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZX6C6II%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICSbsofv3BX8nbspNymxxEbpn1MLjdetU3b8%2Bu5ut4RQAiEAhlYa%2FFz79nLWl4WhXdF9d8fL%2Fv5%2BtCea8wjA92qeUJ0qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8W4EZMgxaPvEVxDyrcA0%2Bl%2F9LfxhogS5Us4zdIxmOda1A%2FDzZZEGOPfaoEDUX3%2FznIWn61Rp%2BsGFin51SP8QwF1QFiVYtwjbkvC04Og9GngCJgOXCD7bcyOkyUkQANqx%2FWcR%2FC5GwRFEhhMMvBLU68h%2F9dj5DKLnWAOg6QfX3NB%2FiMkYcldWlV3ziOh0xYuWGZdUV5OtAyDrFsiUdOwt6MXcZyi1%2B1tcVpqdKNoYgIa6MgzjMABF3vuTQqH7yZR0AIRopIkCNsdynBUfbwNKsl3YR9GWyEn2jb6yFDk0ebpehpXu2dPWKitU0mVuJLyO3X1QugkSQJ%2B%2FFdGPrgd485sXmlHZ0g%2F6f7ChVtElPij94k1taQlsggRjCEVKWiHiQDnmrSNtfBX9dA9exfqrOLMIZvyHO3lWrW1UdyHHXtarhA%2BZ9bo07reXDsFCnt%2Bl%2F61hFEgUnTe%2BAkeP%2BSrpVyznBSNhsrt4xDRJzgNH%2FPozbmqcZQDl50q0vkPBMM0QPYxF48MZEwaaCTJ5LsUzqlpJRsoEPH27C%2FHqIOrKsckQxT4CYoOgm5rTT9DnUzPRTaYOzh0zfyqp76qOk0AQDHOOW3iHti0JxE2P%2B4xgUkx3rjL%2BVYjn6nIp3qKqhKylDj1fvb%2F4gV7SrVMI2Pi8EGOqUBnAEviGcGYOhu2PgjvqZZlNW7LPKpRzgMi%2FLYI3GgnwnsjA0GAsQ8%2BboKirUxqvZ20uw4zJdAZ1%2BySqFzzlPCdwOHXsTc%2BRotqakW9NwekaC430HYGX%2BALo55mSBYhp2sBGPX4iqfEw9vmW1NBaqap9vbHAagl32RPN7Flj8%2FdCe3%2Fs%2Bhv0riSTbqtf3VBR8zRxtOW4oGP67SBq6anE7xirXznjcA&X-Amz-Signature=afe476b5d4932116651d2724e32763adf06bd08ec6ec209958620afaac05c99f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
