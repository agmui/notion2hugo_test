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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GL23UKL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHBvIJLl1ep2HsHCTD3luDPV1%2FHZNtln3NAIJWtEx9LHAiEA7%2FG%2Bh3ph6etosE2OZ7M70uFdHwwZUv1XfVm0aS3dLcgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCPBOMHu1XTyo63U5CrcA1FC4LZqAvEBAVYUS%2F86E0Vl2Nb8Stq5CPCfZuTIrYzwjEd%2FrBd%2BhlgmWwBJHiFWBuRgTLO8M9F7GhnG3lvek993BProlMvqX9eCUprmfmDSF08IxgPAnlVyzVBkDkR8lC729xfPMu0gLrLEZ2UMbKskIwI0fkxEXucmM%2BT5CtGi83ytwOwq0KkJz8qE3LCwrdphRRPSSdltnoK1qIWhopiTPzlm%2BN2bvh0olKk6b%2BLH2%2FPwPCXPgioSKEpD6qY8i7CAWgpcG4Zv43IvcdOwhZv2U9gEa%2FsgwVD6rpEmDAeIU6sBdvS0vgWCZLSc9633yWnvwMtOwA85TpxMHw3PppqVwLHde81%2FrhMgJjv%2BxngSOSdeepXnNDpi4V5AWIVu167sxujHj7rJ4WJR2vyEF55vaTaUMx7FcxI32qqoExOKKYM7IFFvaa%2FtHzH%2BOn59HnnWTH1XQk5%2FjaGW0aEN9z9VdHCcXHVfb2pj7fh5GwcODPr4mxTmcVbbfCDyMhP%2BOzG%2ByKG%2Bwc3zL6YaBW7AhnyZifOXaYixoy%2BoYhi30tII4kRjxrLxTvwzOfyGj%2FPrqEhMLk5LMxCdq745McDoBscHFKdTB2fKglX2oqUeWYzrSkFmpOPDevzKfAN6MIXPw8QGOqUBWGxEme6hMmb4LhDrOsMYzlTz9RwToOYiOafJI2v2l7YNTf9gcROsaVDsUoTkeMJPZoTaPwVX2FCBgWbsqzzgpTLY8i194GpfM%2BknqastIbc1D%2FZau3dpVSNVdHRO3M9xcENoTmITcGVveYS7sZOYudjnZeUxiAxwoDxIYsEp%2FVwNhk225YFOMw990dt%2FjHJMsnrqNFHTP9Pcz8OUI1iwbTLrKNYI&X-Amz-Signature=5be4675a9b21492a8d299356adb01e07f5cb660395d7602920400c0c097f5b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GL23UKL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHBvIJLl1ep2HsHCTD3luDPV1%2FHZNtln3NAIJWtEx9LHAiEA7%2FG%2Bh3ph6etosE2OZ7M70uFdHwwZUv1XfVm0aS3dLcgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCPBOMHu1XTyo63U5CrcA1FC4LZqAvEBAVYUS%2F86E0Vl2Nb8Stq5CPCfZuTIrYzwjEd%2FrBd%2BhlgmWwBJHiFWBuRgTLO8M9F7GhnG3lvek993BProlMvqX9eCUprmfmDSF08IxgPAnlVyzVBkDkR8lC729xfPMu0gLrLEZ2UMbKskIwI0fkxEXucmM%2BT5CtGi83ytwOwq0KkJz8qE3LCwrdphRRPSSdltnoK1qIWhopiTPzlm%2BN2bvh0olKk6b%2BLH2%2FPwPCXPgioSKEpD6qY8i7CAWgpcG4Zv43IvcdOwhZv2U9gEa%2FsgwVD6rpEmDAeIU6sBdvS0vgWCZLSc9633yWnvwMtOwA85TpxMHw3PppqVwLHde81%2FrhMgJjv%2BxngSOSdeepXnNDpi4V5AWIVu167sxujHj7rJ4WJR2vyEF55vaTaUMx7FcxI32qqoExOKKYM7IFFvaa%2FtHzH%2BOn59HnnWTH1XQk5%2FjaGW0aEN9z9VdHCcXHVfb2pj7fh5GwcODPr4mxTmcVbbfCDyMhP%2BOzG%2ByKG%2Bwc3zL6YaBW7AhnyZifOXaYixoy%2BoYhi30tII4kRjxrLxTvwzOfyGj%2FPrqEhMLk5LMxCdq745McDoBscHFKdTB2fKglX2oqUeWYzrSkFmpOPDevzKfAN6MIXPw8QGOqUBWGxEme6hMmb4LhDrOsMYzlTz9RwToOYiOafJI2v2l7YNTf9gcROsaVDsUoTkeMJPZoTaPwVX2FCBgWbsqzzgpTLY8i194GpfM%2BknqastIbc1D%2FZau3dpVSNVdHRO3M9xcENoTmITcGVveYS7sZOYudjnZeUxiAxwoDxIYsEp%2FVwNhk225YFOMw990dt%2FjHJMsnrqNFHTP9Pcz8OUI1iwbTLrKNYI&X-Amz-Signature=7d8324f7dbee4cc01cb2f864c6a0d01eeaf19d40108deccc94569a5658d13c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
