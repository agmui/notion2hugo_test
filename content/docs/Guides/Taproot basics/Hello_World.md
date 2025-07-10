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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNT75RAR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT1jU6xBkgJHKJ8prt5OORnAolGCQSS%2BzIpsfrdkBk1AIgXJ%2FSxHalYAOedupMoHquvajkYYtS9fmCJNhkcUU3%2F%2FoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAU1bfi4LhWQ5vdaSrcA7tD5XYkYjlv%2B8qXODQFxwvitF0EwvYkTvGYWdz%2BkxVxy0Vy4dVaLidqp3DwACwZcTGal8mTyTUgAeaF25cmUXiGBypNE3TfGFgmcO8tuUNtY9fI7TVLr%2BZ4RINX%2F4G4X%2BqFDLiJni23xyp%2BlifFTgF3n9gMbL18RIcn4F03WlutRIFZTa4abr4mKKObo1ca4h30oMOCqmD9Kf6SMa58N0Qr8nRMKToA9DIIubwgZO5fB0yMrykKOdvILEyLeQ3razA03e9wV3A%2Bqbb%2Bcodhnm%2FyKf1A9i8n3spgv5IkhZ6MVwUhG1MXEv7PJJu0816C2DvocqJz6%2FbAtEO7ggjYAX9LT74j8FX87RenLn4KePU0UdCuFwAt8wY9G5nklaB13Aa%2BK3mYAZadGJhnC4dkjl3fZuoVfw0x4a8cqXzA4pom1Pm3sVRORywiEkc%2BS1a6IQ6ZHI0UlQtutQIHTYkVBjO2ThdOgqN2VDQArUApVYajZl95NTvpPMX1%2BT16vi4eStojLNZRbNExQJfiAbPhDEYodGpFdS1kxA2CasSisgBnxxxykfgLEog0HL3GevVClChYLnHqnwNN0UztrIOU%2FuSFw5iWrrnh6NZE%2FVDzarFaIXFwvjs1O6TrxqzCMOunv8MGOqUBTd7zbLsgzPxGmAumwg10wlYgSiMAxi7n2SwNMlGKkyYHGpAE2e1w2I8p0n8ropjlK3d42efxcEftLQ2MgSw6Jugan%2F7%2BU4Y2Z9EMbBPiuFzPPzev3GMYKonMEGLORUlrWtSbcLwFnM%2BmXdl5Scqsax5j25BSJe82vEb61WLVn3JGCj9slW34W5qwlpQmEBqhu4dbsYnB9CdZxAWs77StxNHqU4ch&X-Amz-Signature=c73b5e667ed633e10db8565a00f0a85cb054d93f9984e60abaef0a7158fa18bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNT75RAR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT1jU6xBkgJHKJ8prt5OORnAolGCQSS%2BzIpsfrdkBk1AIgXJ%2FSxHalYAOedupMoHquvajkYYtS9fmCJNhkcUU3%2F%2FoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAU1bfi4LhWQ5vdaSrcA7tD5XYkYjlv%2B8qXODQFxwvitF0EwvYkTvGYWdz%2BkxVxy0Vy4dVaLidqp3DwACwZcTGal8mTyTUgAeaF25cmUXiGBypNE3TfGFgmcO8tuUNtY9fI7TVLr%2BZ4RINX%2F4G4X%2BqFDLiJni23xyp%2BlifFTgF3n9gMbL18RIcn4F03WlutRIFZTa4abr4mKKObo1ca4h30oMOCqmD9Kf6SMa58N0Qr8nRMKToA9DIIubwgZO5fB0yMrykKOdvILEyLeQ3razA03e9wV3A%2Bqbb%2Bcodhnm%2FyKf1A9i8n3spgv5IkhZ6MVwUhG1MXEv7PJJu0816C2DvocqJz6%2FbAtEO7ggjYAX9LT74j8FX87RenLn4KePU0UdCuFwAt8wY9G5nklaB13Aa%2BK3mYAZadGJhnC4dkjl3fZuoVfw0x4a8cqXzA4pom1Pm3sVRORywiEkc%2BS1a6IQ6ZHI0UlQtutQIHTYkVBjO2ThdOgqN2VDQArUApVYajZl95NTvpPMX1%2BT16vi4eStojLNZRbNExQJfiAbPhDEYodGpFdS1kxA2CasSisgBnxxxykfgLEog0HL3GevVClChYLnHqnwNN0UztrIOU%2FuSFw5iWrrnh6NZE%2FVDzarFaIXFwvjs1O6TrxqzCMOunv8MGOqUBTd7zbLsgzPxGmAumwg10wlYgSiMAxi7n2SwNMlGKkyYHGpAE2e1w2I8p0n8ropjlK3d42efxcEftLQ2MgSw6Jugan%2F7%2BU4Y2Z9EMbBPiuFzPPzev3GMYKonMEGLORUlrWtSbcLwFnM%2BmXdl5Scqsax5j25BSJe82vEb61WLVn3JGCj9slW34W5qwlpQmEBqhu4dbsYnB9CdZxAWs77StxNHqU4ch&X-Amz-Signature=7cb559710aaecc568032fc69021cbb2cb9ad14d8845136d8ec8db4fc574b9696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
