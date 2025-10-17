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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLTGHAB%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4%2Fhva916p1enol43m%2BCVT0PMZrHq8b0Nqz2nbeMctwIgUPpW0RXJ8T8bZh79FyRH1A6sWHfj%2FcLvclkJrPijQDQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCC%2BPnMlpUBNN0pBCrcA6It%2FDFSqxSMSd%2BgO3VFDjC%2Bel%2BAnpLnc%2FqF7ylvSC3cg8ZsATwOgP7vsJb8o%2BXW7jvG%2FbxNVSckMKu7QXZnscH1fRnRzjNkD3cDDLTgZjUzdD3Q%2ByKe4qArQfgBb4iaAgI578hTVTYVSc1rJHGrBfclqGB1FS5MmY3Blv3fXUpEOez7f1xgb4tpu4T0F1%2FPvbLd5LrfE8Ak7sCpMwbnX3Ry9nw9YgTvZBsZN1of8zevUkgAPiDrFzLUa34OeHOEMZboNUDB7S92%2BXQCmKxUdMBd1cOxw%2BKJSaLdNXNNvW%2FEsno2xvPM5nsPPbud%2BW3LXvfXG1EzoolV5%2B2b3OMP%2FO1P2w71bt%2B3PR2tqUTHfXsSgskWAma90fyrHHylVeY03mW4iRGLROuHkJntydFDbRzB%2FqDhbMk%2BXDZ1QJL0aPkg6w9iGEDZ9NKWsZjwviW4WadWA94Jcloxuzb3gpxMOcLQoZd5gewh%2BJFkLDRXLwhELqtMQiTzAsT4jy4x4zcb%2FLUIvwX9pxFA4mmX%2FRSjQdatG5qjss8yu8SFz4CXowahO3H%2BGAqOSZkf4%2BJWu3oh1guKlVG0%2B99SV9FBkcPr8QYSeOHXvs5a%2FWNhR9MWZr5yaGeJVhL9kNvfqtmqMPuPxscGOqUBQL8c0xUl0gtCBbNK85I56beYXOmEKTK8J4o4chz2QvIC1Wl6cd%2FxesP3OotHGhFYB58H%2Bw6YpVOZmBLWtaSW8BU3Qaw8JJGP4L2K04k20fl4Nti4IhiZJk1BYf2KDDG%2FzYZyRcEKYV4bjeG%2BdojhdtL1GnuThtJZGWAtHCrxn8BJ4P%2FPHE8aAl%2Fok7QQ6X2MMfRxcmpiDbY1FFF88j2vRmr2SuTd&X-Amz-Signature=8f2b02bfcaec72c5440540a40a7c6703adf0a74441b8245c125c620b29d52c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLTGHAB%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4%2Fhva916p1enol43m%2BCVT0PMZrHq8b0Nqz2nbeMctwIgUPpW0RXJ8T8bZh79FyRH1A6sWHfj%2FcLvclkJrPijQDQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCC%2BPnMlpUBNN0pBCrcA6It%2FDFSqxSMSd%2BgO3VFDjC%2Bel%2BAnpLnc%2FqF7ylvSC3cg8ZsATwOgP7vsJb8o%2BXW7jvG%2FbxNVSckMKu7QXZnscH1fRnRzjNkD3cDDLTgZjUzdD3Q%2ByKe4qArQfgBb4iaAgI578hTVTYVSc1rJHGrBfclqGB1FS5MmY3Blv3fXUpEOez7f1xgb4tpu4T0F1%2FPvbLd5LrfE8Ak7sCpMwbnX3Ry9nw9YgTvZBsZN1of8zevUkgAPiDrFzLUa34OeHOEMZboNUDB7S92%2BXQCmKxUdMBd1cOxw%2BKJSaLdNXNNvW%2FEsno2xvPM5nsPPbud%2BW3LXvfXG1EzoolV5%2B2b3OMP%2FO1P2w71bt%2B3PR2tqUTHfXsSgskWAma90fyrHHylVeY03mW4iRGLROuHkJntydFDbRzB%2FqDhbMk%2BXDZ1QJL0aPkg6w9iGEDZ9NKWsZjwviW4WadWA94Jcloxuzb3gpxMOcLQoZd5gewh%2BJFkLDRXLwhELqtMQiTzAsT4jy4x4zcb%2FLUIvwX9pxFA4mmX%2FRSjQdatG5qjss8yu8SFz4CXowahO3H%2BGAqOSZkf4%2BJWu3oh1guKlVG0%2B99SV9FBkcPr8QYSeOHXvs5a%2FWNhR9MWZr5yaGeJVhL9kNvfqtmqMPuPxscGOqUBQL8c0xUl0gtCBbNK85I56beYXOmEKTK8J4o4chz2QvIC1Wl6cd%2FxesP3OotHGhFYB58H%2Bw6YpVOZmBLWtaSW8BU3Qaw8JJGP4L2K04k20fl4Nti4IhiZJk1BYf2KDDG%2FzYZyRcEKYV4bjeG%2BdojhdtL1GnuThtJZGWAtHCrxn8BJ4P%2FPHE8aAl%2Fok7QQ6X2MMfRxcmpiDbY1FFF88j2vRmr2SuTd&X-Amz-Signature=1d53a9cd73b0d4ee8008f876c0b6a7f2c6760d2148d9159173e0e82ed45c7b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
