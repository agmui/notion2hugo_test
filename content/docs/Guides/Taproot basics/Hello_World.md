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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z57MSRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye7pTq05aOfavLq%2BRkKMh4ihtcCmv9qxBOVMG5f70hwIgN2zuezgaOjwjgTObXuygpnJlD%2BTc%2FOvbkpHIZII0k%2B4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsVKmSV%2BCdqo7GHBCrcA93geQizVUx3CYRX%2BApXKDyBf0OS59%2BzDGn8b7kHLHyJjr3J1L%2FfINKdIFGuYiLVBPYGEEdmGMaHwF8AMUpkCNa5mCbdaAPkpBS9cIwg3Xe%2Fq4X4e%2Fo%2FIvlax4x9rKcZB92LPiw4ATf5gOI4N3RAxqh66em%2B2bxqxL9f2KwMfubTW7ClhFioh9M13n6hvbbieZMaa74pgmokZ11OLH%2BjmTw%2B0Jk85uPcUZf8CkCjtkID3BaJ4HG%2BoSfdqRiIzCZMvf%2BXsBr5IV69%2FFe1wscrGxZ0NGHHpCRSkO5rIMB1T4Cbp%2FCBniBVPmZ6%2BEqSIWau4G4mdfUQ9U3pkm%2BetgPKmnRfNjagOqQt2da90yZ0p7c9bOr7rdGtJkvSRsrmsyvYkXJDc%2F00O3qUT00R85cNQkkhgTqjpWf88xIJLKhVm4NxePvIH9hrWVUGzDZnuWbsNYlQhR3FDR1%2BTUFuv%2B4t1%2Fi3jF889c1vLULWACBN2vbThlY1ZQ98Szx3qalXJsjhdTM0DeydQc%2BGauFKXyeOo0Puv2%2FgGRSdYSdtRD2h5NIBXlpWL9ctx8SCsHH1RgnvZgGP9ZkSLtCVuG47TJpyusm%2BmmDudYMU1qF7mOj5U4Ec79oVKy53HS6IfRtZMNvjssEGOqUBDlPAH7miRCfEIzkbuN%2BRw4KRi8nhe79kT2%2B04y0xUzDcENk2od%2F4Jt1KdPx0wiWgcdHPdSO2Vg6UCDr8GGInxnvEC0rNt4x%2FJWf3ImIiDxaxDQIVbCg4e%2FOTM%2F7eFgbFD8qB8DIkkqP0Yebbo9wHs53aKPVnTqhFCaB1ERtuYztClSo8CZBXtZDNsj9EjT9Dcp3lJKv5JA3xXhVokBdPP08iIHAW&X-Amz-Signature=5309fe89aeeee95e3107071a240dd4b2ae5520e32a0d1304385a548f74b28af0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z57MSRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye7pTq05aOfavLq%2BRkKMh4ihtcCmv9qxBOVMG5f70hwIgN2zuezgaOjwjgTObXuygpnJlD%2BTc%2FOvbkpHIZII0k%2B4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsVKmSV%2BCdqo7GHBCrcA93geQizVUx3CYRX%2BApXKDyBf0OS59%2BzDGn8b7kHLHyJjr3J1L%2FfINKdIFGuYiLVBPYGEEdmGMaHwF8AMUpkCNa5mCbdaAPkpBS9cIwg3Xe%2Fq4X4e%2Fo%2FIvlax4x9rKcZB92LPiw4ATf5gOI4N3RAxqh66em%2B2bxqxL9f2KwMfubTW7ClhFioh9M13n6hvbbieZMaa74pgmokZ11OLH%2BjmTw%2B0Jk85uPcUZf8CkCjtkID3BaJ4HG%2BoSfdqRiIzCZMvf%2BXsBr5IV69%2FFe1wscrGxZ0NGHHpCRSkO5rIMB1T4Cbp%2FCBniBVPmZ6%2BEqSIWau4G4mdfUQ9U3pkm%2BetgPKmnRfNjagOqQt2da90yZ0p7c9bOr7rdGtJkvSRsrmsyvYkXJDc%2F00O3qUT00R85cNQkkhgTqjpWf88xIJLKhVm4NxePvIH9hrWVUGzDZnuWbsNYlQhR3FDR1%2BTUFuv%2B4t1%2Fi3jF889c1vLULWACBN2vbThlY1ZQ98Szx3qalXJsjhdTM0DeydQc%2BGauFKXyeOo0Puv2%2FgGRSdYSdtRD2h5NIBXlpWL9ctx8SCsHH1RgnvZgGP9ZkSLtCVuG47TJpyusm%2BmmDudYMU1qF7mOj5U4Ec79oVKy53HS6IfRtZMNvjssEGOqUBDlPAH7miRCfEIzkbuN%2BRw4KRi8nhe79kT2%2B04y0xUzDcENk2od%2F4Jt1KdPx0wiWgcdHPdSO2Vg6UCDr8GGInxnvEC0rNt4x%2FJWf3ImIiDxaxDQIVbCg4e%2FOTM%2F7eFgbFD8qB8DIkkqP0Yebbo9wHs53aKPVnTqhFCaB1ERtuYztClSo8CZBXtZDNsj9EjT9Dcp3lJKv5JA3xXhVokBdPP08iIHAW&X-Amz-Signature=411c685d27e9c4dd82c67adde933dfdf2352d08b0e5c4e9ed12a02060c170a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
