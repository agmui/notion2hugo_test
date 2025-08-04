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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULTX2YPA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBKXeCYt6R4DKZ15MzExdAls8UwoVauXgVcFhYZBR%2FV3AiAf%2Fd8vhH%2Bd5cHzg6WohX%2Bk%2BIirJQOCy5YSmITMTjdMOir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMpaRy2IzGgdVud%2FraKtwDGhxUitleyZu%2Bv%2BE6tq3MjYDr4KiTDZr1MDl%2Bh3sZuHEoQt35IqdlKzEZpedbK7dQE%2BTrUBxu7a%2FjfJ0YxECMmgAqyvmexoZWPGPMpVesAEprDx1ULUBS2IF2XZQ4ir%2FT569qXVDmNa4QWSt1d5fPhOL7IelsMzyU14D774BjaPnJ963myP0wf4e%2Bu9EYOQgAKlXJs29yp2Lu5KHlLcxncl8vEMgi4aGrAV%2BpT6r8YetGVH4r2RNlFYD5Pc1AwWhOeXFV06zFCd%2FvU6Nh%2FNXXranNR19S56kHCqunA66ArRfXrnSfquLikp2eu75CVDHkaXnAA7qVfYJNlYQgvWeEfbcLXyhEnVkfvFE2PQUqdsVBSkV%2BD%2BScElF%2F9JS2z%2BP5aXmhqgN5KPXLRpUUsPlfwBY%2BP7evGcTRMTrAMRxWROFoNk9Wtsp9kzAtBmlXaOC2bRfCRLExGbcWPWtcuSsnZWezqNVRx3mHI0b08pbZ40HlSVPCJ%2F5xG4q1tMh18oRx1AVu6LxIHIbYZzyWdEkPcf50CBgvhw5xqcQD2WjGftK4aoGsQtzkk%2FL1yawo0%2Fmd7gWWxM2kVjXcLzYYxpDYbLuqitAzuSCN%2F4qo2xplh9sdbUWePpX3Loc7HmcwmNzBxAY6pgFgXo9H3nanqYijr7LCH3YWJ333aT9yTpFUkccspiIzffSFR5pUq2uRppGo8ZyCJqRS494elOdRWhLjuaytQ8DG9vkXdNlD3LGtcIxw0H8140xl9XVf8HSCE%2FVK%2BGVuCZ2ixLFmnBeZ3wSf5cEDIjOrfnryvUuDEFrXJQQ6HGB8ew5KuI6CYKsblGpyOlm0GQBmHHIX3PcAybTGpJi7wkaD338P%2BEC1&X-Amz-Signature=8ae69ed92167f3bbe0f46471249e545b937dd91719c15dfec96e53da7d14dd3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULTX2YPA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBKXeCYt6R4DKZ15MzExdAls8UwoVauXgVcFhYZBR%2FV3AiAf%2Fd8vhH%2Bd5cHzg6WohX%2Bk%2BIirJQOCy5YSmITMTjdMOir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMpaRy2IzGgdVud%2FraKtwDGhxUitleyZu%2Bv%2BE6tq3MjYDr4KiTDZr1MDl%2Bh3sZuHEoQt35IqdlKzEZpedbK7dQE%2BTrUBxu7a%2FjfJ0YxECMmgAqyvmexoZWPGPMpVesAEprDx1ULUBS2IF2XZQ4ir%2FT569qXVDmNa4QWSt1d5fPhOL7IelsMzyU14D774BjaPnJ963myP0wf4e%2Bu9EYOQgAKlXJs29yp2Lu5KHlLcxncl8vEMgi4aGrAV%2BpT6r8YetGVH4r2RNlFYD5Pc1AwWhOeXFV06zFCd%2FvU6Nh%2FNXXranNR19S56kHCqunA66ArRfXrnSfquLikp2eu75CVDHkaXnAA7qVfYJNlYQgvWeEfbcLXyhEnVkfvFE2PQUqdsVBSkV%2BD%2BScElF%2F9JS2z%2BP5aXmhqgN5KPXLRpUUsPlfwBY%2BP7evGcTRMTrAMRxWROFoNk9Wtsp9kzAtBmlXaOC2bRfCRLExGbcWPWtcuSsnZWezqNVRx3mHI0b08pbZ40HlSVPCJ%2F5xG4q1tMh18oRx1AVu6LxIHIbYZzyWdEkPcf50CBgvhw5xqcQD2WjGftK4aoGsQtzkk%2FL1yawo0%2Fmd7gWWxM2kVjXcLzYYxpDYbLuqitAzuSCN%2F4qo2xplh9sdbUWePpX3Loc7HmcwmNzBxAY6pgFgXo9H3nanqYijr7LCH3YWJ333aT9yTpFUkccspiIzffSFR5pUq2uRppGo8ZyCJqRS494elOdRWhLjuaytQ8DG9vkXdNlD3LGtcIxw0H8140xl9XVf8HSCE%2FVK%2BGVuCZ2ixLFmnBeZ3wSf5cEDIjOrfnryvUuDEFrXJQQ6HGB8ew5KuI6CYKsblGpyOlm0GQBmHHIX3PcAybTGpJi7wkaD338P%2BEC1&X-Amz-Signature=c1992d394e10c6867efd9d3c8c77c7598b471f27605f3e5efa69f1c4e3ec42b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
