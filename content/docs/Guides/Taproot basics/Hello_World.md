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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZR7ARLV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCYQH3CWLbEBfaZriGii6dDAkkjjmfgydIZjmudvl3vsAIgBmLG7TIVloB1G%2FvXUlgY4DRP1MNWbNdrIkpBhz0wE%2Fwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOlahPgYySiEmESOeCrcA%2B0t0MmuPA8A%2BEOBrCmz7lXh0YlC385lsruoFg6EmGPU0kkCdXgAWNlHc2FSaJWi%2BcR3YPwxGYF0fyQHWiRJyQD%2Fasqjm%2BWeVbJNLqmEnuO2t42vOV5tbGfoSJWpUtkZlcfMQRZJqbu%2F%2FCS9h7ZIbEb4stAeR6ZfjeOdm%2F4%2BS3yzr2O%2BuvVnKm9FA1Hp8dG8ZzDUEuKyzf0GStAOjb6M%2B5v9geHxSrwNJdV7wX7%2FlcaieQKaP1BmEyU%2F9xpWObVKJ0rF8q5M8txh2a%2B%2F6mhoZkhFR0YZR156AbVfQz6lSoTVCGP4bvrKFZLffW6ADwOhirZt67XzLkaeTpH%2FmJ%2FLgbOXc%2FG1wAh%2BtMkjOZYpvUlzeYpug4M63KSoh0OLktnJM3XB3GTpG22NmN82ionW5cX%2Fi9HgDmZDVJHsyoJrKYMQTof1STGLNji%2Fr4UOU0ZFMFDgEIAbaYpLyrrK9Gvs9Q0%2B3JD338KNJN9CIEGgh3zZf8kbtbXAdYqTwRqrdVG14M2xfyA264RDLFkyUIrtp4L8yekyu%2Fy7yOPSBZN3syZH9AzdynuUtgkfpe1e%2FuC5Fe4Lw8Rz35bQQCPGNzLUs7wL0dmXzynN3H0jXluskJRJGg81fBRhFiVVr%2BCgMILFhsIGOqUBL6ZXFlZ9ml7%2BJxk%2FmRPZ029JX7wyW0PZvFPB%2BbMzMbcxG1G%2F4fdeKtAMs9fI0tk4lnGKoCTifdFIFtIfBRgXuAEyn%2By87sdwqWMhhm0QAeUzA38CFi%2BG%2BSHe2jpNWgboEBeSldh%2BLqTqV9kMhEnqbz742M7XDg0SrMKFgsZO3G0vIRu%2F%2F9h21XdBmZyXYSCJowPP8Qu5sQdEoh5EmTEqs%2BDaPPPN&X-Amz-Signature=a396b3c88d1965278f65690bee45ef6718561346d789cfc976335d352b165c34&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZR7ARLV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCYQH3CWLbEBfaZriGii6dDAkkjjmfgydIZjmudvl3vsAIgBmLG7TIVloB1G%2FvXUlgY4DRP1MNWbNdrIkpBhz0wE%2Fwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOlahPgYySiEmESOeCrcA%2B0t0MmuPA8A%2BEOBrCmz7lXh0YlC385lsruoFg6EmGPU0kkCdXgAWNlHc2FSaJWi%2BcR3YPwxGYF0fyQHWiRJyQD%2Fasqjm%2BWeVbJNLqmEnuO2t42vOV5tbGfoSJWpUtkZlcfMQRZJqbu%2F%2FCS9h7ZIbEb4stAeR6ZfjeOdm%2F4%2BS3yzr2O%2BuvVnKm9FA1Hp8dG8ZzDUEuKyzf0GStAOjb6M%2B5v9geHxSrwNJdV7wX7%2FlcaieQKaP1BmEyU%2F9xpWObVKJ0rF8q5M8txh2a%2B%2F6mhoZkhFR0YZR156AbVfQz6lSoTVCGP4bvrKFZLffW6ADwOhirZt67XzLkaeTpH%2FmJ%2FLgbOXc%2FG1wAh%2BtMkjOZYpvUlzeYpug4M63KSoh0OLktnJM3XB3GTpG22NmN82ionW5cX%2Fi9HgDmZDVJHsyoJrKYMQTof1STGLNji%2Fr4UOU0ZFMFDgEIAbaYpLyrrK9Gvs9Q0%2B3JD338KNJN9CIEGgh3zZf8kbtbXAdYqTwRqrdVG14M2xfyA264RDLFkyUIrtp4L8yekyu%2Fy7yOPSBZN3syZH9AzdynuUtgkfpe1e%2FuC5Fe4Lw8Rz35bQQCPGNzLUs7wL0dmXzynN3H0jXluskJRJGg81fBRhFiVVr%2BCgMILFhsIGOqUBL6ZXFlZ9ml7%2BJxk%2FmRPZ029JX7wyW0PZvFPB%2BbMzMbcxG1G%2F4fdeKtAMs9fI0tk4lnGKoCTifdFIFtIfBRgXuAEyn%2By87sdwqWMhhm0QAeUzA38CFi%2BG%2BSHe2jpNWgboEBeSldh%2BLqTqV9kMhEnqbz742M7XDg0SrMKFgsZO3G0vIRu%2F%2F9h21XdBmZyXYSCJowPP8Qu5sQdEoh5EmTEqs%2BDaPPPN&X-Amz-Signature=1dabcb57a2e9953079cb63779b1209f2b899eec946d5d8cd2e3ecdf1cb09c1f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
