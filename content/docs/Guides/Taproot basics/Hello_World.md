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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLIEOLA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDT4T3VNdn5pFchHfemPyLBmOg7%2B1askerVsZpK0F1ReAiEAlOsSHs0cpnlZyn7TqTgJGiIDGtCEnCoEBlknRkk6Rs8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGptYbAdpOgTSgWU6yrcA%2FwRysvg2PuJ46kXLzR7v%2FLY271Im9edcGzUvdeT2qWGIuS5TIaZmTnO%2BiNFw322CVPlA%2F2mjZRVhzs95ohTFt4uhqvs1Xvu646gtaIBrSx%2BJhJ8oHxX3TVkbN0ddeaPZOCM6oSx1tYHivXBiSnjz2g8C8iXBwrEbyt8MbVO2k1KpD8wuF6kM%2FHonaZfN%2FtixcgozG2kfWQX6JPUl%2FGs0XRWWR%2BrTiVfbFV5IkzZD1cI%2BvfgIvHr7TZL%2F5wsw5BDcA2eNmiYCAnpXB%2FHGvqOX42gLyhOwOdkGV5oZrSEPvsePxrRxjak%2FVgwaVCIVqzNcRPsux%2F0L5JBulxw06eu6vO%2FdvKUmlq36jOdhwalzqTa9jou2KWKDuweieZ%2FJ1nEhlDMOsdY6WePAq8dcxQ72w%2Bp6jFeTTMrP4AJPny8lGI2AyWdc48r0jxq2hgFx7Un3IH3leL6WDn1RMau8P%2B0YsuMFrAzusPf3wqdcoAvCHVTHEMZUvOciqB%2BWlr6gOyFCRN45OnNdjhwYugYsNricorGL3XP88JO4Ndz42HNQwr0ugVTXZI1N4CVP%2BxDi0NH2lPXAhLmbIDrWySIAXN8an%2FoMFTqrjVIx3oGZfg7O9QqPSM0O4oFMg7LOjp0MPrP0sEGOqUBE1G%2FBUvf5QaTpfJY9YyOojMmb1q2iYIlIIZ8tKH43ZvJdYRQEsQM86axnCAExv0TLTBKZTGd%2FI6fj7CKs%2F2uod0h2UDNuOtxLPHfmF2y8lan2%2F2IhB8bPBTjYwmXbVW2cKdOcAHZIJuANbx9VPAb%2Blnk%2BGb4RX9d1aGiQrzwnSGpj9rFVKj2HhBWlCPYuDxfBu7hyKYFZbXsZbshlOOtL262dDW7&X-Amz-Signature=f91b5268b1ab7e1167351ddf34850696aa373340792e58883b309dce6319c096&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLIEOLA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDT4T3VNdn5pFchHfemPyLBmOg7%2B1askerVsZpK0F1ReAiEAlOsSHs0cpnlZyn7TqTgJGiIDGtCEnCoEBlknRkk6Rs8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGptYbAdpOgTSgWU6yrcA%2FwRysvg2PuJ46kXLzR7v%2FLY271Im9edcGzUvdeT2qWGIuS5TIaZmTnO%2BiNFw322CVPlA%2F2mjZRVhzs95ohTFt4uhqvs1Xvu646gtaIBrSx%2BJhJ8oHxX3TVkbN0ddeaPZOCM6oSx1tYHivXBiSnjz2g8C8iXBwrEbyt8MbVO2k1KpD8wuF6kM%2FHonaZfN%2FtixcgozG2kfWQX6JPUl%2FGs0XRWWR%2BrTiVfbFV5IkzZD1cI%2BvfgIvHr7TZL%2F5wsw5BDcA2eNmiYCAnpXB%2FHGvqOX42gLyhOwOdkGV5oZrSEPvsePxrRxjak%2FVgwaVCIVqzNcRPsux%2F0L5JBulxw06eu6vO%2FdvKUmlq36jOdhwalzqTa9jou2KWKDuweieZ%2FJ1nEhlDMOsdY6WePAq8dcxQ72w%2Bp6jFeTTMrP4AJPny8lGI2AyWdc48r0jxq2hgFx7Un3IH3leL6WDn1RMau8P%2B0YsuMFrAzusPf3wqdcoAvCHVTHEMZUvOciqB%2BWlr6gOyFCRN45OnNdjhwYugYsNricorGL3XP88JO4Ndz42HNQwr0ugVTXZI1N4CVP%2BxDi0NH2lPXAhLmbIDrWySIAXN8an%2FoMFTqrjVIx3oGZfg7O9QqPSM0O4oFMg7LOjp0MPrP0sEGOqUBE1G%2FBUvf5QaTpfJY9YyOojMmb1q2iYIlIIZ8tKH43ZvJdYRQEsQM86axnCAExv0TLTBKZTGd%2FI6fj7CKs%2F2uod0h2UDNuOtxLPHfmF2y8lan2%2F2IhB8bPBTjYwmXbVW2cKdOcAHZIJuANbx9VPAb%2Blnk%2BGb4RX9d1aGiQrzwnSGpj9rFVKj2HhBWlCPYuDxfBu7hyKYFZbXsZbshlOOtL262dDW7&X-Amz-Signature=ccded00fc20067dbebf4ddcf27172a9e72eebd23f272e9f1d7256ba931df6b53&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
