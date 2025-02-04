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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642NLZA2Y%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC0T0%2BGMxwa%2FBHwHPT%2BcwEpD7BCCLynvaUnY8MTmtk4JwIhAMF4iOc4enzcCquF6NoDy3C2z1frmxoIyocdpGLTDdTxKv8DCCsQABoMNjM3NDIzMTgzODA1IgyUUwjzCn%2Fs5GAV%2BJEq3AMIkRhKAtupnjQVtoGyQYcZF%2Fq8RDOIaXZEVzzke0I56zgaaPVqKtUE8Gi1CwK5b9X%2FfGz60CVRQnXFTL3PFiYekiGsiOYG0%2BcGANINM%2ByGAFPB13b3ul2e%2BX96K1DBKqPkLNLqEzSQ6%2F6ZXOvM%2BYFcTTsDIxbwss25z%2BkCDKEbz4TnhjJrVQZHtpSoJc6faEvHyoQ5zzBADGA6Z2eIATtjebCKYQaDP9Gummn2AC3okbX6pGljD5Vrbqrb1iwWcBIPwwUBCyvmibYTZc20%2Bk%2Be3%2FjpNSUUdlKqHVMwvGe%2FAFagJqAHOhQSM7F363QbR8lMJUi60v0eKgGKiSOEOszvGfbeMVc5mNhE%2BdWYXPHHQVHu%2F3uykO4cIpkJtp32RM9T9JVSWv71ZBgHQTSq52DtQDdHgNRdJKPodr%2BYJL7qinVO3Dkn3yXVZ0JaeCAvGHWyPTe3kY5k5YEIszZLoEdJy2JFvBp8NnoKrCBaYCNKTdPHQypexR1Ak8S72YUyTZG%2BaXUGTAEUoMlePaShybNH5Y%2Bxk3maxCWesMxT2oiMIzpu5RClqMMCjmltLgEMobkipoZQtuDrXVvbWoNBXpypcHQI4lqYqb%2BomReTkdNbx1IzDvxDiAgxZXwMkjCizIe9BjqkAf%2FE2mFxhl%2F84W0JHJYVm7W4R10SkMHHRwh9XMhMPYc4CHLVXTUQPCo9tCjFlPy68O7zAzt90qHTElkVM2vLJmbbp1V3m7ZqU64MrMx5W6qzDzbeT1ONVy4K2BpUurkFX7zgBpGtarfblRRG8eehdEqFkZBdXDTpqx1s2qKnWRaEuraS28BTNuaMwdD5v%2BDqH82zZ61Yt4w2lLguLdJr8Xmo6m6x&X-Amz-Signature=305fee59e8793bdaf325cad71d9c660ed68afb5885ce5e5ab4562bdabcadedf9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642NLZA2Y%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC0T0%2BGMxwa%2FBHwHPT%2BcwEpD7BCCLynvaUnY8MTmtk4JwIhAMF4iOc4enzcCquF6NoDy3C2z1frmxoIyocdpGLTDdTxKv8DCCsQABoMNjM3NDIzMTgzODA1IgyUUwjzCn%2Fs5GAV%2BJEq3AMIkRhKAtupnjQVtoGyQYcZF%2Fq8RDOIaXZEVzzke0I56zgaaPVqKtUE8Gi1CwK5b9X%2FfGz60CVRQnXFTL3PFiYekiGsiOYG0%2BcGANINM%2ByGAFPB13b3ul2e%2BX96K1DBKqPkLNLqEzSQ6%2F6ZXOvM%2BYFcTTsDIxbwss25z%2BkCDKEbz4TnhjJrVQZHtpSoJc6faEvHyoQ5zzBADGA6Z2eIATtjebCKYQaDP9Gummn2AC3okbX6pGljD5Vrbqrb1iwWcBIPwwUBCyvmibYTZc20%2Bk%2Be3%2FjpNSUUdlKqHVMwvGe%2FAFagJqAHOhQSM7F363QbR8lMJUi60v0eKgGKiSOEOszvGfbeMVc5mNhE%2BdWYXPHHQVHu%2F3uykO4cIpkJtp32RM9T9JVSWv71ZBgHQTSq52DtQDdHgNRdJKPodr%2BYJL7qinVO3Dkn3yXVZ0JaeCAvGHWyPTe3kY5k5YEIszZLoEdJy2JFvBp8NnoKrCBaYCNKTdPHQypexR1Ak8S72YUyTZG%2BaXUGTAEUoMlePaShybNH5Y%2Bxk3maxCWesMxT2oiMIzpu5RClqMMCjmltLgEMobkipoZQtuDrXVvbWoNBXpypcHQI4lqYqb%2BomReTkdNbx1IzDvxDiAgxZXwMkjCizIe9BjqkAf%2FE2mFxhl%2F84W0JHJYVm7W4R10SkMHHRwh9XMhMPYc4CHLVXTUQPCo9tCjFlPy68O7zAzt90qHTElkVM2vLJmbbp1V3m7ZqU64MrMx5W6qzDzbeT1ONVy4K2BpUurkFX7zgBpGtarfblRRG8eehdEqFkZBdXDTpqx1s2qKnWRaEuraS28BTNuaMwdD5v%2BDqH82zZ61Yt4w2lLguLdJr8Xmo6m6x&X-Amz-Signature=67310954866950055def6ba7edad6edc2070158ec8696695b72b52f880bcc745&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
