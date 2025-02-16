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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VJTOB2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCF7K7ors15ZHL3Kv0CxNmu5bVFDXCgQY0yh3CMVlVWmgIhANqtOYL47SBAgIe1cL8cDlCg54YuppJDhz67TYngRCBOKv8DCGUQABoMNjM3NDIzMTgzODA1IgyUu%2Bn0kkr9CVESfjcq3AN7ZOSAH1qN%2BnPEtOtzzElNTfrbRc2TqdyPIoAGRG85QkOWLBcBfSaI1cQotm37IEtfRI0IR%2BGeinKjWF%2BtHWy6ffTgGFmPR%2FQUpoKkR%2BYK9fJ6OI5CQwo%2BUBKAfy4aPAtlNGMzEJexhI7ME6BHDSoTbA21LY4fQTAtlUtWv58oGWFor9fNN5nI0AeEjcXqs2wkEtxSHMmABlM49A6MeEvDxrsH95T0dgSNG9Ijo6iXbkv%2Bke6087wkYUhN5SugVhMRUIV1xBriW66huHnqtoSGGo0TmC8T4wXI%2F74t4aGqSJogvY%2Fo1gcXqomtCDVnxLlH2EqHGQTVb0hFOKpYQG8nH9alue8YS9tDVRSXlG4ZHUWD8sIfvWZKIyTeQkR1af58kW5svr1DKHjH2cJEZL07oCpr8%2FPfTr4RpCG%2B8Dt3SIfEu3X71iWwhOtx8DhXMv%2FWgDFm0r%2F%2BJr9zLOoZhpzFwTXle0csQTC9jRpfuT%2Fmbevhne0b4Pn0AA1M%2FP%2BPtC1dH%2Bu6zZYeXb3OS2XtTWQgl%2Boapne3b%2BSeUk9FWVZvXla15QEc20XeDEna5QV6tRKIWc5XuRYiRvDX1DoOWinY9lYVT03BWqk1Nx0YVfQtoKygQtstlLoyB5QIuzDeh8m9BjqkAT37aith0%2F%2FxkhFX8apaSUpmOQTvrkVQ4TPf%2BM78QDDgF7DdFtcT10Q2M6mcswT1EF470ij0KFKTuVsy2ocaVMQ6E4ackWPr4XwjIX47Be%2FDtwOoF6TCe4fW9Z%2BeSHzA4d1RWf%2BbskevTiOPbNXAgUtYpDEFzD0gkg2Lufvofg6BVYnDmxrWTiTtlh5DxmZPtARTbRAVW%2ByJoUut4VCC0azUSXLz&X-Amz-Signature=5e791b695c68b01754f5e461152412ed79476ef95511ad3dcd6ef4d7414c7261&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VJTOB2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCF7K7ors15ZHL3Kv0CxNmu5bVFDXCgQY0yh3CMVlVWmgIhANqtOYL47SBAgIe1cL8cDlCg54YuppJDhz67TYngRCBOKv8DCGUQABoMNjM3NDIzMTgzODA1IgyUu%2Bn0kkr9CVESfjcq3AN7ZOSAH1qN%2BnPEtOtzzElNTfrbRc2TqdyPIoAGRG85QkOWLBcBfSaI1cQotm37IEtfRI0IR%2BGeinKjWF%2BtHWy6ffTgGFmPR%2FQUpoKkR%2BYK9fJ6OI5CQwo%2BUBKAfy4aPAtlNGMzEJexhI7ME6BHDSoTbA21LY4fQTAtlUtWv58oGWFor9fNN5nI0AeEjcXqs2wkEtxSHMmABlM49A6MeEvDxrsH95T0dgSNG9Ijo6iXbkv%2Bke6087wkYUhN5SugVhMRUIV1xBriW66huHnqtoSGGo0TmC8T4wXI%2F74t4aGqSJogvY%2Fo1gcXqomtCDVnxLlH2EqHGQTVb0hFOKpYQG8nH9alue8YS9tDVRSXlG4ZHUWD8sIfvWZKIyTeQkR1af58kW5svr1DKHjH2cJEZL07oCpr8%2FPfTr4RpCG%2B8Dt3SIfEu3X71iWwhOtx8DhXMv%2FWgDFm0r%2F%2BJr9zLOoZhpzFwTXle0csQTC9jRpfuT%2Fmbevhne0b4Pn0AA1M%2FP%2BPtC1dH%2Bu6zZYeXb3OS2XtTWQgl%2Boapne3b%2BSeUk9FWVZvXla15QEc20XeDEna5QV6tRKIWc5XuRYiRvDX1DoOWinY9lYVT03BWqk1Nx0YVfQtoKygQtstlLoyB5QIuzDeh8m9BjqkAT37aith0%2F%2FxkhFX8apaSUpmOQTvrkVQ4TPf%2BM78QDDgF7DdFtcT10Q2M6mcswT1EF470ij0KFKTuVsy2ocaVMQ6E4ackWPr4XwjIX47Be%2FDtwOoF6TCe4fW9Z%2BeSHzA4d1RWf%2BbskevTiOPbNXAgUtYpDEFzD0gkg2Lufvofg6BVYnDmxrWTiTtlh5DxmZPtARTbRAVW%2ByJoUut4VCC0azUSXLz&X-Amz-Signature=3bccbb92d215da5032c5bb7bd128f3d7ac4889325690c0ed74c64b0f215d357f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
