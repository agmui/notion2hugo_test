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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSI56PL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2qgYzV1nBAXw4x9%2FZFzI%2Fz7VhSQQ5gAkGOifIdFaTWAiEA6PALeTGP7lEEp7lSn65OYB%2BV%2BwQqX1X9mbnGtIzH1%2FAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX4pb7wdmUpqJOOPircA6volXFXxW%2BKxgnEtb%2FYi1rnotW6fIg2Tge2T300CEJln2w7VOu%2B2xk%2BUi0BwEoFd1abDfmnbbImJEraQSfLDsPFBSGOYatQgO2LGpxIzNYQ0IFXj9tvypIxat5kJ01uvyIM1fXYJ4PWEBbEAghyMtP%2BjW6iUr8YEVYmcM4zyVOGPtvfvcS0RfJkQBSRgLL95nDI27Msps5HT40qrRfirpiy8czgKr9pPpxZeqgUtTr%2FCaw%2FP3J8ZrK%2FKHs2f3faKA1uqnmDif9LgJys%2BAHoRY0vxVKHxQUnf2z5qnPRgbaZeUzy05ebeUExv0l3lEs8tQjjeDVDJnhCDm1ddUWMU0gQBzObw2EDOlszUFaI%2Bj6QBF46JkdzuPit32ZcaW0cCrtzK7Oo0fmUuMRJl75kKFgssjoqn%2BDatgiokCC6KGftMyP4gxOCOOnYMdQzGrNyF6EASwHdZs9L0EAWx73w6j3J%2BMJjTcuXSpL9y8YTKlPcLve70fVUD%2BXOW0DiGwymVKvm5VSMS%2BSdK6Fqo5jxs88yO%2FaaVAxGpfsBC2bsqgOFcezGS7LI2Po6Ap4LQfuq5IcqgCGAflJuSilWjEzeolg8ElGN2tFrJp8xtiw9SwRsuAUfH0ehW4wUOO%2B5MMy748QGOqUBbhl%2BX4PkFqNT0AwdKwj6ygJHrAL9KKWn1BZCNHD0tZ73Q4s81DPTuT348euDev%2F42n7GrtBzMsldjA2ZfKWMaDRRecFiHqcucG557DIgoTQt7VsYLgObZyY99ZMpx4BEqHY%2FkYgRbnu3YbpTYf8rpWuBf41x8fEW9iDvIYkV54ZoMx8fI2RXlpd5IFKqhz0syoKp3GaEVPwpAXK2Ryok79gJJMJt&X-Amz-Signature=45baf44694086a517261ddb125966ffe98db7d65c30ca12ca4825bec50c9f9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSI56PL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2qgYzV1nBAXw4x9%2FZFzI%2Fz7VhSQQ5gAkGOifIdFaTWAiEA6PALeTGP7lEEp7lSn65OYB%2BV%2BwQqX1X9mbnGtIzH1%2FAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX4pb7wdmUpqJOOPircA6volXFXxW%2BKxgnEtb%2FYi1rnotW6fIg2Tge2T300CEJln2w7VOu%2B2xk%2BUi0BwEoFd1abDfmnbbImJEraQSfLDsPFBSGOYatQgO2LGpxIzNYQ0IFXj9tvypIxat5kJ01uvyIM1fXYJ4PWEBbEAghyMtP%2BjW6iUr8YEVYmcM4zyVOGPtvfvcS0RfJkQBSRgLL95nDI27Msps5HT40qrRfirpiy8czgKr9pPpxZeqgUtTr%2FCaw%2FP3J8ZrK%2FKHs2f3faKA1uqnmDif9LgJys%2BAHoRY0vxVKHxQUnf2z5qnPRgbaZeUzy05ebeUExv0l3lEs8tQjjeDVDJnhCDm1ddUWMU0gQBzObw2EDOlszUFaI%2Bj6QBF46JkdzuPit32ZcaW0cCrtzK7Oo0fmUuMRJl75kKFgssjoqn%2BDatgiokCC6KGftMyP4gxOCOOnYMdQzGrNyF6EASwHdZs9L0EAWx73w6j3J%2BMJjTcuXSpL9y8YTKlPcLve70fVUD%2BXOW0DiGwymVKvm5VSMS%2BSdK6Fqo5jxs88yO%2FaaVAxGpfsBC2bsqgOFcezGS7LI2Po6Ap4LQfuq5IcqgCGAflJuSilWjEzeolg8ElGN2tFrJp8xtiw9SwRsuAUfH0ehW4wUOO%2B5MMy748QGOqUBbhl%2BX4PkFqNT0AwdKwj6ygJHrAL9KKWn1BZCNHD0tZ73Q4s81DPTuT348euDev%2F42n7GrtBzMsldjA2ZfKWMaDRRecFiHqcucG557DIgoTQt7VsYLgObZyY99ZMpx4BEqHY%2FkYgRbnu3YbpTYf8rpWuBf41x8fEW9iDvIYkV54ZoMx8fI2RXlpd5IFKqhz0syoKp3GaEVPwpAXK2Ryok79gJJMJt&X-Amz-Signature=2e1206bc4702884ffe364782317dc65f66b952cd326839748ccf5eb9460003d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
