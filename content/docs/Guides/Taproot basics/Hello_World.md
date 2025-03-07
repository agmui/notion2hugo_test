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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665REAZTRW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiSnsI51hse5HsrfeB%2Btq7aMpm8o73v5%2F76YjjQGSy5AiBzfeYmTfuPPGEdGlM1qsdJF%2FmYK4MOJZPcY8GYFI%2FfCyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMdKAJ90LPBhdAUUemKtwDQLyTyyuqjCjsRx9E%2FDl1k%2FTtpSYwQWFl0U40OGbzVUAubcDG2zMRwyNBglx1FwNZbbmsK0U7G6L1dX%2B5nfIGLNLkMrUA6prd1k3b2yfXi2zt600zp9GEU9gR346H%2BflFPlcbqoB32x5QGHEPEKoil4u5poFZeggT83h6xKVP1A5zn3Yn5eHUKoNrzzh8Cxe9JW4UsUO8vIJqy4L%2BFIM5t9mvQusek%2B4vpm8obgV7uk1Px2xTGjn0T5sIPOLiDFZH2q4bPDh4OrLOHIbapPk3dRU9FN2VBnjTPEUI0bYPZXq6w71x9al2cBjDMKINDnfDxWOIZK7waF1i3huIWuwLqlw1mzGKrjzf2rJnNwNN%2Bl3CNLxDs%2BnfcHF4Ageg2l79OsQTt%2F16%2FnVCFqq8X7iCM9ysu%2FkUGSWOVL0%2F2nl7aSj4ZzgTzZRSGSfEKAqnl2%2F7L68XP%2F6KqVM4bAgUSavbRhseY95Mjcl1PeZhTUdVcDTuF%2BIX77%2F53hVoD7oZfjkxDvUu%2BJT7VmXykMEZmz837rZ4f1q%2Bd8bUtMf9%2FT65aNpFY%2BjtGmi3LYh1NBgAE6%2F%2F%2B3CCr%2BzHUFf93tVw439o5Algxc3MC7%2FxkvwTmyEcdXESaiFkAfzuCigfsnAw0uaqvgY6pgGpS9km%2BpX5xuQQnWqa%2B%2B8KVg44X3uR3%2BAkjbP8ASPWmdaONoU%2F2q0NjFCJ9vxoUNx3plJAkskA%2FWou9AuVy3BDEsx9Y24vQY3G9NE%2FGX0%2BAGDHGx%2BfcTMDJ81dFR%2BObIqVMEGHLu1yiS2yUUOC1DLQrRv0tcCekQNB8gew8g7d6Cj0R8kmFFriRx65KW5h12KpCuk7mnmGnogMyrJ1Y3npB2FvU%2F1Y&X-Amz-Signature=f9cf44b01fabfb9972bd83ab77ee83d6164c6512fbe95f800e13d94721a05b15&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665REAZTRW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiSnsI51hse5HsrfeB%2Btq7aMpm8o73v5%2F76YjjQGSy5AiBzfeYmTfuPPGEdGlM1qsdJF%2FmYK4MOJZPcY8GYFI%2FfCyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMdKAJ90LPBhdAUUemKtwDQLyTyyuqjCjsRx9E%2FDl1k%2FTtpSYwQWFl0U40OGbzVUAubcDG2zMRwyNBglx1FwNZbbmsK0U7G6L1dX%2B5nfIGLNLkMrUA6prd1k3b2yfXi2zt600zp9GEU9gR346H%2BflFPlcbqoB32x5QGHEPEKoil4u5poFZeggT83h6xKVP1A5zn3Yn5eHUKoNrzzh8Cxe9JW4UsUO8vIJqy4L%2BFIM5t9mvQusek%2B4vpm8obgV7uk1Px2xTGjn0T5sIPOLiDFZH2q4bPDh4OrLOHIbapPk3dRU9FN2VBnjTPEUI0bYPZXq6w71x9al2cBjDMKINDnfDxWOIZK7waF1i3huIWuwLqlw1mzGKrjzf2rJnNwNN%2Bl3CNLxDs%2BnfcHF4Ageg2l79OsQTt%2F16%2FnVCFqq8X7iCM9ysu%2FkUGSWOVL0%2F2nl7aSj4ZzgTzZRSGSfEKAqnl2%2F7L68XP%2F6KqVM4bAgUSavbRhseY95Mjcl1PeZhTUdVcDTuF%2BIX77%2F53hVoD7oZfjkxDvUu%2BJT7VmXykMEZmz837rZ4f1q%2Bd8bUtMf9%2FT65aNpFY%2BjtGmi3LYh1NBgAE6%2F%2F%2B3CCr%2BzHUFf93tVw439o5Algxc3MC7%2FxkvwTmyEcdXESaiFkAfzuCigfsnAw0uaqvgY6pgGpS9km%2BpX5xuQQnWqa%2B%2B8KVg44X3uR3%2BAkjbP8ASPWmdaONoU%2F2q0NjFCJ9vxoUNx3plJAkskA%2FWou9AuVy3BDEsx9Y24vQY3G9NE%2FGX0%2BAGDHGx%2BfcTMDJ81dFR%2BObIqVMEGHLu1yiS2yUUOC1DLQrRv0tcCekQNB8gew8g7d6Cj0R8kmFFriRx65KW5h12KpCuk7mnmGnogMyrJ1Y3npB2FvU%2F1Y&X-Amz-Signature=477fde2ba9f78a1e7ec86b68605f3e25bc2bca754595b4c507fb89badc752ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
