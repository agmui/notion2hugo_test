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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSFEHK3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeaJmmzmlq5B0KHzjxD0kAvfiuH0tdeWLHrOSBR646AIgd1sLAA6nafL%2BNVvTktl00d42dh5%2BEehHyERA%2FJQw4Rwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNhBdq6CHI1MR%2Bsl%2FyrcAxZjFmEb4zNeXtqr1gvl%2BDuYGr33zSCuvH3D0wzwlT%2BbjEOkAOntcMyP12UV0uOK5IZ2l%2F%2FtGDpkmEwKENtEJpdVTx6n35omiED1Q85tN9rULZrNTeOrHZ6pGsagtgQVtpQRmo%2F9u07nbcgwzoxrwIGY%2FP6UIcAjjmaIlz0NoUtRBABsGrKID1GNm9%2BQLIjuMlFSM7HPV64q2pDyzqCmkpMIEF3IeG%2BqU9cKqjhEQF3C%2Fc89SbbLv1cDNpskCK2CtIDwZDvZ0gpO7HN0OgXsWT3gekyVlkD1hh6xpV3EmQi9VYlBSXUcs8E2fWUS2uOyCy8qlTXIvybxAaXWz2lGdMdjid990JyvS4C3rw5HAkJ99OKB%2F%2Ft%2FPvXuGIzpwVZT1s8FCYaCdC7tsOYf0sTvOlV30VCBCS%2ByRym1VGFXFmNndZLsS5z9OTSFyw%2BbXKVr1AGF5bASDmdsPgodaLj978FdZ9qPN9HX1SorZUj32pNc0ZAYjI4eMP33Unp52dB5kLwAMmFfMFkqhYVkf7uSTcYf%2BYHtukRl5WJ4nFxATMxItFWP4ABGfQF90rU2UfBanj4B9rhcmkwhVTIilPhDQcz0rW1kt6uXK48c%2BcqlVMh45W0JU6YPEN%2BOd2tIMIfLgsoGOqUBDHPQ%2BHDXPC4PwheISkZPo2zoAEAm5YSc86nmsQvn6Z6rq%2FHryE9Oc2hQ1fac6E3hAoq717JOV%2BVGR8Vs9s4dqMhuVgidtUlKvrkd28MooMuTmORxU94S7zas%2FDv8%2BgB2RwvLeFQyEmF1lM%2FKboCHCX8h8GFleNWR4O6iFOClt%2FS2DrRlXCKAxA1h2U7K9W8o1V6pSINSuZeLOMRfv6uU4tQjs0sU&X-Amz-Signature=d3350a90fb1e1ef336aa3e5778a9294ab1656a374d405dd8571a2e3a6caf1e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSFEHK3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeaJmmzmlq5B0KHzjxD0kAvfiuH0tdeWLHrOSBR646AIgd1sLAA6nafL%2BNVvTktl00d42dh5%2BEehHyERA%2FJQw4Rwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNhBdq6CHI1MR%2Bsl%2FyrcAxZjFmEb4zNeXtqr1gvl%2BDuYGr33zSCuvH3D0wzwlT%2BbjEOkAOntcMyP12UV0uOK5IZ2l%2F%2FtGDpkmEwKENtEJpdVTx6n35omiED1Q85tN9rULZrNTeOrHZ6pGsagtgQVtpQRmo%2F9u07nbcgwzoxrwIGY%2FP6UIcAjjmaIlz0NoUtRBABsGrKID1GNm9%2BQLIjuMlFSM7HPV64q2pDyzqCmkpMIEF3IeG%2BqU9cKqjhEQF3C%2Fc89SbbLv1cDNpskCK2CtIDwZDvZ0gpO7HN0OgXsWT3gekyVlkD1hh6xpV3EmQi9VYlBSXUcs8E2fWUS2uOyCy8qlTXIvybxAaXWz2lGdMdjid990JyvS4C3rw5HAkJ99OKB%2F%2Ft%2FPvXuGIzpwVZT1s8FCYaCdC7tsOYf0sTvOlV30VCBCS%2ByRym1VGFXFmNndZLsS5z9OTSFyw%2BbXKVr1AGF5bASDmdsPgodaLj978FdZ9qPN9HX1SorZUj32pNc0ZAYjI4eMP33Unp52dB5kLwAMmFfMFkqhYVkf7uSTcYf%2BYHtukRl5WJ4nFxATMxItFWP4ABGfQF90rU2UfBanj4B9rhcmkwhVTIilPhDQcz0rW1kt6uXK48c%2BcqlVMh45W0JU6YPEN%2BOd2tIMIfLgsoGOqUBDHPQ%2BHDXPC4PwheISkZPo2zoAEAm5YSc86nmsQvn6Z6rq%2FHryE9Oc2hQ1fac6E3hAoq717JOV%2BVGR8Vs9s4dqMhuVgidtUlKvrkd28MooMuTmORxU94S7zas%2FDv8%2BgB2RwvLeFQyEmF1lM%2FKboCHCX8h8GFleNWR4O6iFOClt%2FS2DrRlXCKAxA1h2U7K9W8o1V6pSINSuZeLOMRfv6uU4tQjs0sU&X-Amz-Signature=d32f296d8fc384a2ef87e4e5404460328d0be07bda7f2ded0b78aac321ebae2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
