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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U57X2WQO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaQ%2FpsGE2ViNOFkAA6CumUIgKzZeKaANR%2FB71dJeiTJwIgKcoq%2BhI1HZrXpfrzUip5QD08wUOloAOAf8XDeqYVFecq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFfuyT65enGEE93Z4CrcA0%2FRdEzYOvTBJ8kV8DhgdV%2F5LuFyms7f1RhUrQ4rjJIBKIA3SFAyVVM1Mf0NgGOCEwMceJ0tLDTJKefZHwp3CnczwV%2B0XQ0bfBg1USB23re0G9lA7uiX1t8ZPUZErgiMwZPy8J%2FyjLwEIDx4KA5wKQ8zBHEs49lCYHwDHFk0ueP6rWeQ9VFkfzH85yXkOUyD8JP6NNW7qkl4Q8hzX%2Bb9DUnJ3nAFfTkNH8maUbEx2p4f08G%2BK68L73dWprRNKKhTIsBGYYSAFXZiPj9098FAL0ARj5uz0gsDgLznXSF%2BQrxthDg8p2ruYVyk0CPZXtPXKNWNt63NWYv%2FhV%2BnLcfsTD2pCLtl0lFl00S4Es2nuVYiDjxAtfUcHFUNQDcqUGxgqMHncwYNK8MDm%2Fxa37TStEABIbG9YOmmCMHgjgClzzrHwcPwnWJVVq%2FQJmQwVgXfD4Y%2FOywi1IQO76ZFoKDLrZCiTbI9O0Adz9gk7x1aw0RXHdq1%2BaE2BvwRbJK7lacMQr8BGUnOrw2iLOJHZ%2Bp5lMnoIyEyV%2F0PwMJ95binWHNu1OgttS4muTRZOYmDeC3D0Jjx7CpIRBd4xiQH%2FSFOyXzC46ClVhYOYAWfpBDwQpH7pVCgfq3MbQOXxvMOMMTqlb8GOqUBl2CCgp0R9n2KGahmYuxGyVA3f2FaAgyf3BH2iguX195IN51NFR5kvqlS5CTpES4OzCYsHjLNXXRq2KrYBCiJtgXdIOjdXafdr%2F0fZxOb%2FRAv3bGqyhwZ5HQBCKYAE3lZUZcm%2FZz%2BWlVQsjsDY49NCp8tcTOMd%2BB3cnOu5ffsuWjwmo3RVEEeeFWtlFI2wJmqTDspddQIEjUymK2iRR8oEdthHwcV&X-Amz-Signature=2774ad289d47d990084a361e155c8fc68261f3b9ee2136148bb117a9897c17af&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U57X2WQO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaQ%2FpsGE2ViNOFkAA6CumUIgKzZeKaANR%2FB71dJeiTJwIgKcoq%2BhI1HZrXpfrzUip5QD08wUOloAOAf8XDeqYVFecq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFfuyT65enGEE93Z4CrcA0%2FRdEzYOvTBJ8kV8DhgdV%2F5LuFyms7f1RhUrQ4rjJIBKIA3SFAyVVM1Mf0NgGOCEwMceJ0tLDTJKefZHwp3CnczwV%2B0XQ0bfBg1USB23re0G9lA7uiX1t8ZPUZErgiMwZPy8J%2FyjLwEIDx4KA5wKQ8zBHEs49lCYHwDHFk0ueP6rWeQ9VFkfzH85yXkOUyD8JP6NNW7qkl4Q8hzX%2Bb9DUnJ3nAFfTkNH8maUbEx2p4f08G%2BK68L73dWprRNKKhTIsBGYYSAFXZiPj9098FAL0ARj5uz0gsDgLznXSF%2BQrxthDg8p2ruYVyk0CPZXtPXKNWNt63NWYv%2FhV%2BnLcfsTD2pCLtl0lFl00S4Es2nuVYiDjxAtfUcHFUNQDcqUGxgqMHncwYNK8MDm%2Fxa37TStEABIbG9YOmmCMHgjgClzzrHwcPwnWJVVq%2FQJmQwVgXfD4Y%2FOywi1IQO76ZFoKDLrZCiTbI9O0Adz9gk7x1aw0RXHdq1%2BaE2BvwRbJK7lacMQr8BGUnOrw2iLOJHZ%2Bp5lMnoIyEyV%2F0PwMJ95binWHNu1OgttS4muTRZOYmDeC3D0Jjx7CpIRBd4xiQH%2FSFOyXzC46ClVhYOYAWfpBDwQpH7pVCgfq3MbQOXxvMOMMTqlb8GOqUBl2CCgp0R9n2KGahmYuxGyVA3f2FaAgyf3BH2iguX195IN51NFR5kvqlS5CTpES4OzCYsHjLNXXRq2KrYBCiJtgXdIOjdXafdr%2F0fZxOb%2FRAv3bGqyhwZ5HQBCKYAE3lZUZcm%2FZz%2BWlVQsjsDY49NCp8tcTOMd%2BB3cnOu5ffsuWjwmo3RVEEeeFWtlFI2wJmqTDspddQIEjUymK2iRR8oEdthHwcV&X-Amz-Signature=2078517e68a10e85bd4f13eb1764a6f651844d838ecd96cb26a25b58f5470669&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
