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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTAUVRC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8DORXvWLXpwkO%2FpOUWDMVDJFLlVR%2FmY3XW%2FOA8HuwoAIgeyjF02l56Lqxp3nxjvyHC4ieWfRWH8nIzAtwrrHB4U8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPQVkEHBDppZHfmtySrcAzgzguwT%2FkIMWnixV3ndTSTZ2BFnPm%2FxXiRPRO0r9QlbFQMQztBTvri8hlnJJIaSkDZxRW7ra96aKui56SNKhybGk3Dqh0Mw%2FNs3Z7I17H2v7vInyasq252VvadMYTItiMYQfR30maUe%2BoHp%2BDKRKfXOmEtk5orNMAcK2x8vT6VECfd5gm3FWiEYCBL1VcLUpKG%2BoiP92WQqjcpWTZvXBGHwAh8%2BjHeikHxspv02Go4eLm%2B5aqTAKf6I31fH44swG6%2BN85ENpWDkYbvsO1rQUUNuL78r915%2F2o%2FQAbSD7IBe7M%2BgVDVGnGhvArhBqnKMWsfNLqo4mYeJkGouv%2BfrmpA0vxusxPvjuUCHD0lJG36MmYy%2BDJpH94f8F5%2FXSW0JXUrPVKVBWPbv3lZ5kwatqloD9V0xRYmumX9GnNkhx6Vrn8RsKAxNgvUzg53wiHhpUV9xlfO%2BxSth3SGCwOx5ZwZKKrzmRWN86yxovuSmxTfsUyHz71Z2161Zc8vNQAACowFIW50E3zKoA9gPfn6%2BzgzXHAVIVLF3l4RhORL2N9GQn59nMElzQ7RHPz1yxZUkOsBDqZV6fyTQziGbu7uJJ3qBM8UOKt%2FGrRtH8toKga6%2Bd99Lb6lErJ8dtlTGMJ3mhMAGOqUBMV6txI7EEB6F61l636LJspG5FcRusWUe%2Buhlt8%2FhfAKcA3W2h5bxHT9%2BxVbyi3bwiE96th2IEnO8sg%2FdCzdOlinjfnnzYmRM6HKdLCXxEjndcPI7ziw%2FCTRGPXKd9fVGl%2FBPLBmQs%2FNvaaGC%2FWGA17%2FAz1MRHRTnGwSC%2FAnxrrYP4cMXOrsXS0mWbqGlGTT92ZcizB3G6I3uxC5968QJHdLnhdba&X-Amz-Signature=8f98bdcea0005ade98b233c3f64a2a2688a9b5fb81f40688815a0fb1bf1c720b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTAUVRC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8DORXvWLXpwkO%2FpOUWDMVDJFLlVR%2FmY3XW%2FOA8HuwoAIgeyjF02l56Lqxp3nxjvyHC4ieWfRWH8nIzAtwrrHB4U8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPQVkEHBDppZHfmtySrcAzgzguwT%2FkIMWnixV3ndTSTZ2BFnPm%2FxXiRPRO0r9QlbFQMQztBTvri8hlnJJIaSkDZxRW7ra96aKui56SNKhybGk3Dqh0Mw%2FNs3Z7I17H2v7vInyasq252VvadMYTItiMYQfR30maUe%2BoHp%2BDKRKfXOmEtk5orNMAcK2x8vT6VECfd5gm3FWiEYCBL1VcLUpKG%2BoiP92WQqjcpWTZvXBGHwAh8%2BjHeikHxspv02Go4eLm%2B5aqTAKf6I31fH44swG6%2BN85ENpWDkYbvsO1rQUUNuL78r915%2F2o%2FQAbSD7IBe7M%2BgVDVGnGhvArhBqnKMWsfNLqo4mYeJkGouv%2BfrmpA0vxusxPvjuUCHD0lJG36MmYy%2BDJpH94f8F5%2FXSW0JXUrPVKVBWPbv3lZ5kwatqloD9V0xRYmumX9GnNkhx6Vrn8RsKAxNgvUzg53wiHhpUV9xlfO%2BxSth3SGCwOx5ZwZKKrzmRWN86yxovuSmxTfsUyHz71Z2161Zc8vNQAACowFIW50E3zKoA9gPfn6%2BzgzXHAVIVLF3l4RhORL2N9GQn59nMElzQ7RHPz1yxZUkOsBDqZV6fyTQziGbu7uJJ3qBM8UOKt%2FGrRtH8toKga6%2Bd99Lb6lErJ8dtlTGMJ3mhMAGOqUBMV6txI7EEB6F61l636LJspG5FcRusWUe%2Buhlt8%2FhfAKcA3W2h5bxHT9%2BxVbyi3bwiE96th2IEnO8sg%2FdCzdOlinjfnnzYmRM6HKdLCXxEjndcPI7ziw%2FCTRGPXKd9fVGl%2FBPLBmQs%2FNvaaGC%2FWGA17%2FAz1MRHRTnGwSC%2FAnxrrYP4cMXOrsXS0mWbqGlGTT92ZcizB3G6I3uxC5968QJHdLnhdba&X-Amz-Signature=5071593e1a773de54a5989a560fffc25d2d74e28b42316bb355e7cc361ece22a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
