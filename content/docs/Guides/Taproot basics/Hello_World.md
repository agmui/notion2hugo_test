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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK5IC5A%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIApOKqyHtmBrVnoAcXOu%2Fn2%2FdN3ozC8ZKbd7c7PYnrulAiEAxSOEWP1abOz2aBlWB7zZ6ImwdAl8W5PgR6VPTdg78gsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLyA52bNEiNeX1NzNyrcA8s%2Bxm%2FFCHSQtRRVnqcknicY2qyptQrdWdz37ttQKW9vnrboG%2Bwve4K3RCOLIB6s2I9vKDmM1HHu7tYDEo2xtT5rH9IyDWuvjPqH%2BOHnDOPxR5pOhaRU3qpW3iENmMzP6NvoyRxFi%2F2Ei5z4CtfNILqpfp17BAEaHiTBnnrFY0P8BlXxnDuCeXHaiATQ4eraFXtblzFZ8TujlANogBubd%2BqYMc1Tf7ljh6M4gN0lQ2kOqBXrmyhSrxxXHVmVvdIdSBuFH6An5fHsCtLxa5Vc%2FBVX4fSg4D0Q20fpvMGrsus9SoTpstexKFd8fs%2FyZg3MEMd03FDL7dUg4a7P7m8pLwzuJK0HjpkjZ9QGn2gHuZoU5GlP0L4h0b86HhHeYg8rPa60lz5lw6CBs%2BZuEKClLvgNb3vQcoQIKxcXt0eyYRSt6c6udUEpEEaygBlWSDxTU20JHgIeb7JSDVf%2F7fcW23rXpApZGP5A7%2FIhfFyM5tphMLTiLY%2BRLqwoMJYX1K%2FCBuBVKaOdjBIyWUxLer3FEQSYexE%2F3jZfA0pd331zHcSAziIBPO0xOfKPldI3gNFrX4bmaEvU%2BVmrfAuUlVuNa14rWfonxcANyj4uzbPqQgWv4C8lGSiJvCBjYHNLMLWblb0GOqUB5LMhE2gMFrvBrp24liQmoUsLuQCkIlSSKDAy1EKfv9XLgpVq%2BOMz%2BqtZY2aIzNJJG2%2Fs4w4VW7dlelwHXSqlAv9zI2qJgZMFVDNeiX9C8VCVRci2JkkG5wW9i%2BbZLsdML5zecrdEyVdCdtV06pHga8YBZAF8pORb1FAjtefLby98rwwWXY1M8MssYPsTVgtSD5T8LdmSh%2FFvYIQ67RpWi5Q1SfBC&X-Amz-Signature=433bd8391dd9785de9432d708005008729ce9c0b9b19fa31057445c166feb4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK5IC5A%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIApOKqyHtmBrVnoAcXOu%2Fn2%2FdN3ozC8ZKbd7c7PYnrulAiEAxSOEWP1abOz2aBlWB7zZ6ImwdAl8W5PgR6VPTdg78gsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLyA52bNEiNeX1NzNyrcA8s%2Bxm%2FFCHSQtRRVnqcknicY2qyptQrdWdz37ttQKW9vnrboG%2Bwve4K3RCOLIB6s2I9vKDmM1HHu7tYDEo2xtT5rH9IyDWuvjPqH%2BOHnDOPxR5pOhaRU3qpW3iENmMzP6NvoyRxFi%2F2Ei5z4CtfNILqpfp17BAEaHiTBnnrFY0P8BlXxnDuCeXHaiATQ4eraFXtblzFZ8TujlANogBubd%2BqYMc1Tf7ljh6M4gN0lQ2kOqBXrmyhSrxxXHVmVvdIdSBuFH6An5fHsCtLxa5Vc%2FBVX4fSg4D0Q20fpvMGrsus9SoTpstexKFd8fs%2FyZg3MEMd03FDL7dUg4a7P7m8pLwzuJK0HjpkjZ9QGn2gHuZoU5GlP0L4h0b86HhHeYg8rPa60lz5lw6CBs%2BZuEKClLvgNb3vQcoQIKxcXt0eyYRSt6c6udUEpEEaygBlWSDxTU20JHgIeb7JSDVf%2F7fcW23rXpApZGP5A7%2FIhfFyM5tphMLTiLY%2BRLqwoMJYX1K%2FCBuBVKaOdjBIyWUxLer3FEQSYexE%2F3jZfA0pd331zHcSAziIBPO0xOfKPldI3gNFrX4bmaEvU%2BVmrfAuUlVuNa14rWfonxcANyj4uzbPqQgWv4C8lGSiJvCBjYHNLMLWblb0GOqUB5LMhE2gMFrvBrp24liQmoUsLuQCkIlSSKDAy1EKfv9XLgpVq%2BOMz%2BqtZY2aIzNJJG2%2Fs4w4VW7dlelwHXSqlAv9zI2qJgZMFVDNeiX9C8VCVRci2JkkG5wW9i%2BbZLsdML5zecrdEyVdCdtV06pHga8YBZAF8pORb1FAjtefLby98rwwWXY1M8MssYPsTVgtSD5T8LdmSh%2FFvYIQ67RpWi5Q1SfBC&X-Amz-Signature=2de210ea5d9a91df52dd555b5e64f32223e7661a9f1207cdd814ee04d8cacdf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
