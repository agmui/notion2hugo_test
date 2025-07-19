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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEJUZ6H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpqgb126ryxcaDNmnvyUtLoB1zDTrMZqU1k83Tn8pMtAiEA1Z%2BO5OfhXPxVwrk2QkGsDoY5KZ1XubidX9AnksW%2BgzEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGlp5wtkusbYxZRFyrcA9DZhsQ7DFQV3dhetLjr248Vx26XrkUWilOApY26p6UWiCHMIyOB5sYrIZGlYzEBCdXj5w2FAvLoFfTUtFoEnJWFk8BMVbWbHDe%2BLvgicXZo6Ya6PHjPZwXjMNtCj%2BVZJtqcrcpucXnvj5F6JE1Fovbs83jImfjQy4P0pwSI%2BPoKn9tqyT2WsybOgd3JmskCFUX87nyf15Tzffl4p9gTY1iSTBL14UE%2F8Chx4G4AOkG%2BzCPA5i6y%2FgNXWgfG1bYi9bNo7eAeMHF3TalGVOx7Dftg8v2xGN8Dcs%2Fx%2FcC47A0TWhceYbVxffRkxPCG%2Fa18F5W7VG4Gu7rxUDO1DXA9MOUryNz6H3e7mCwh0AKpBcb0APzEKV7fWh9VcYAPNExg0amK1Dpm%2BJSQXJTb%2FuV5UeHjalZqdn9yLkdtRHyxfnnyoCHYqrfqcqx2eb2Ci7ElkQWN2c45bEvFC8h4GsyLTVtbwRJa3rOexLf%2BuiCXs6qaKedw%2B0%2BMY6AU8oLJscp0jouYsmzpyM2pAP91A68BWdG0mIe47w83mTkW476trkUWShCcfqexntTVNMOUA9BpjhKuXXEGahm5IXoTKdw161oRKNjAIz9E0BFcvfigyeKKjDiGyY8VgNDsBpDEMNW47sMGOqUB7xTCjrNcpPbVQffLosBCkcoTZg7Vjx1EYf4D%2BEHksI8q%2B21xabS26qjyCRU7UxrlaHN1tz9O3WhzVZrz%2FyO3RhxQted86rrbePMC7J3STsRDLsva9aflY9iz7z9rZgGFLEpeYupG2mH3qdPQVm6aTwi%2B%2Bw1ldX7Ut374K3yl5D7hKX6e0XaSncLmtHiA9GoJmguxxoulX48OsR2lssR7gEIH%2B6eF&X-Amz-Signature=9a838f3b7f997626c0ffa9ac960b12e034cdf30063ce2e65dbfb7e76e9f433e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEJUZ6H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpqgb126ryxcaDNmnvyUtLoB1zDTrMZqU1k83Tn8pMtAiEA1Z%2BO5OfhXPxVwrk2QkGsDoY5KZ1XubidX9AnksW%2BgzEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGlp5wtkusbYxZRFyrcA9DZhsQ7DFQV3dhetLjr248Vx26XrkUWilOApY26p6UWiCHMIyOB5sYrIZGlYzEBCdXj5w2FAvLoFfTUtFoEnJWFk8BMVbWbHDe%2BLvgicXZo6Ya6PHjPZwXjMNtCj%2BVZJtqcrcpucXnvj5F6JE1Fovbs83jImfjQy4P0pwSI%2BPoKn9tqyT2WsybOgd3JmskCFUX87nyf15Tzffl4p9gTY1iSTBL14UE%2F8Chx4G4AOkG%2BzCPA5i6y%2FgNXWgfG1bYi9bNo7eAeMHF3TalGVOx7Dftg8v2xGN8Dcs%2Fx%2FcC47A0TWhceYbVxffRkxPCG%2Fa18F5W7VG4Gu7rxUDO1DXA9MOUryNz6H3e7mCwh0AKpBcb0APzEKV7fWh9VcYAPNExg0amK1Dpm%2BJSQXJTb%2FuV5UeHjalZqdn9yLkdtRHyxfnnyoCHYqrfqcqx2eb2Ci7ElkQWN2c45bEvFC8h4GsyLTVtbwRJa3rOexLf%2BuiCXs6qaKedw%2B0%2BMY6AU8oLJscp0jouYsmzpyM2pAP91A68BWdG0mIe47w83mTkW476trkUWShCcfqexntTVNMOUA9BpjhKuXXEGahm5IXoTKdw161oRKNjAIz9E0BFcvfigyeKKjDiGyY8VgNDsBpDEMNW47sMGOqUB7xTCjrNcpPbVQffLosBCkcoTZg7Vjx1EYf4D%2BEHksI8q%2B21xabS26qjyCRU7UxrlaHN1tz9O3WhzVZrz%2FyO3RhxQted86rrbePMC7J3STsRDLsva9aflY9iz7z9rZgGFLEpeYupG2mH3qdPQVm6aTwi%2B%2Bw1ldX7Ut374K3yl5D7hKX6e0XaSncLmtHiA9GoJmguxxoulX48OsR2lssR7gEIH%2B6eF&X-Amz-Signature=3d624f9754b47c48e5b13ac71d45afae4570d1b91ffbe0b7487daab78664c77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
