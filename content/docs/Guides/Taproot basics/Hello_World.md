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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC62L6B%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBaZqCO3IQzvvGz8iLDRO4h35%2Fgq%2F26tf69H4%2FriUuTgIgemZw8A6KWKjQRU5QVRkRgvXKZfLShRFKKVaFsUcaDgkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJULqg7tbfGLUWu5fSrcA%2FHo20qMJCArjJMLLXmATRnflQQOk%2F7MIdhA6j4SWdobGCwMOpIM8298Iz5CivFRRapxHgqOxKewQytMzLRHKpiF4I%2F%2Ft2hIuiXqh%2FqJr3c8hQpuKxUYMNTqeCSNcNkHdDvBujcmj052sGXrkN76jQ97URL%2Fq810J2%2FOCMF2GtibZND3u3Meac%2Fhy0ThYx1cbA%2BUIijLlYyPf1URVtfegFDRS8e27ufH%2FnYyFMbalPvmd5Vi2sSoYOpaONaZdkPrujMfitmaAneOIOG6q7YKe82BoRQVZoiIJch55xnvUO5mozAgP0AXG9CbbgdGKulfYtI7239bSF8n4wIrkNa01HEaPVFgNN9vv9kiYUYUtb3j12E35vTafzcFhC9cf311ov7Na4Sf8Oi3Xz%2Fs7Cr2CLKBs3fsqbMhcFBJHcSWIkrCDQ7mMuYJTkhoRIBB65p%2FCL%2BEWRDNKZTO7Fww4i%2BzbkBTbeeXlsaTC1VzjODtxVgATf0lEqQHFbO%2BOylCbkOzev17djxltLPuPUYtt2x094RNe2NUq7jv6mvfTKPlSsE1furTo177H3qZrdrv2lZz7swD97KEAmQN9vvr30a%2FpSRV%2BPSRby5brC7FlckzZgpdzuvXKGLMJfkohpUVMOuD68EGOqUBlev97LnFrvoF4cxCpn2TskXUNvCCpnMtBvWt2uG4Bw0Y3qcVTCVmltuEpYBytnR2rD6sBgyufBoDzyLwxTsxqDph1kEI6i9vdSvc6mUeWFUxhWdPSOhRIwUVxzT4sA8SV1p35lDTjMBorlqUso4lYjcXc40S9k%2BtH564A47IrV7dleBeGfwf4eN98byh5PD%2BHnOjhIqMvdfk3tVLmcSzzABBujH6&X-Amz-Signature=db57dbfd84d2f19b9d20965727381d3633cfa58d18e138fcbfaee621ab6c2e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC62L6B%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBaZqCO3IQzvvGz8iLDRO4h35%2Fgq%2F26tf69H4%2FriUuTgIgemZw8A6KWKjQRU5QVRkRgvXKZfLShRFKKVaFsUcaDgkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJULqg7tbfGLUWu5fSrcA%2FHo20qMJCArjJMLLXmATRnflQQOk%2F7MIdhA6j4SWdobGCwMOpIM8298Iz5CivFRRapxHgqOxKewQytMzLRHKpiF4I%2F%2Ft2hIuiXqh%2FqJr3c8hQpuKxUYMNTqeCSNcNkHdDvBujcmj052sGXrkN76jQ97URL%2Fq810J2%2FOCMF2GtibZND3u3Meac%2Fhy0ThYx1cbA%2BUIijLlYyPf1URVtfegFDRS8e27ufH%2FnYyFMbalPvmd5Vi2sSoYOpaONaZdkPrujMfitmaAneOIOG6q7YKe82BoRQVZoiIJch55xnvUO5mozAgP0AXG9CbbgdGKulfYtI7239bSF8n4wIrkNa01HEaPVFgNN9vv9kiYUYUtb3j12E35vTafzcFhC9cf311ov7Na4Sf8Oi3Xz%2Fs7Cr2CLKBs3fsqbMhcFBJHcSWIkrCDQ7mMuYJTkhoRIBB65p%2FCL%2BEWRDNKZTO7Fww4i%2BzbkBTbeeXlsaTC1VzjODtxVgATf0lEqQHFbO%2BOylCbkOzev17djxltLPuPUYtt2x094RNe2NUq7jv6mvfTKPlSsE1furTo177H3qZrdrv2lZz7swD97KEAmQN9vvr30a%2FpSRV%2BPSRby5brC7FlckzZgpdzuvXKGLMJfkohpUVMOuD68EGOqUBlev97LnFrvoF4cxCpn2TskXUNvCCpnMtBvWt2uG4Bw0Y3qcVTCVmltuEpYBytnR2rD6sBgyufBoDzyLwxTsxqDph1kEI6i9vdSvc6mUeWFUxhWdPSOhRIwUVxzT4sA8SV1p35lDTjMBorlqUso4lYjcXc40S9k%2BtH564A47IrV7dleBeGfwf4eN98byh5PD%2BHnOjhIqMvdfk3tVLmcSzzABBujH6&X-Amz-Signature=ce271bcf2d3e02617507145fbdd4fef0b251236f34f18043bb98400acd6065b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
