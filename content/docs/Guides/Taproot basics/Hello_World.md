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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LASJMU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIE3qllg%2F6jRsRpygrumpyugSD%2FtawAxVFie%2FVQ0UfkfcAiEA7Ndf8Mt%2BVcHziqzlm01y9VVy4N%2FnPGXQp4RDIWAGuIYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKbF9e9af9T6G6rZeyrcA%2Byry2pod8ZX6wHm41kQNeBECmzp%2Fbdb73%2Btbp3buJGk7TEtmbj%2FWpIIlr7E%2BU%2Bi2E7Pf0sVycH7BhV3POvCeYccXLBOfURVKpT%2BaV8Kt3bEu3qq653njvpmoTvajO7z3gk%2BZl1PrgSKEJJY0xSen5mOx8MejpDAysFce6ygSEQflaAAMV6YN6IyArVLGb%2FurDbAatDJVCBAiMlXl2%2F2L2anbi6N5LFFYryCV17syODmowbsoWTMgVieewcAaEPpBhD6Z%2B7gPdayuIp722TpFDgzmzTWOrejddieDqN%2FaisqD0ZtZZ6QFTeu4zGnmEJ%2BiZWBmhcVlftBBPnOCx9PPN4BFxibyJi%2B0eu9oI%2F1bdPesj1O5Upf1G1XCksvPMoM6O7RK2yzXJK2uVlV8YYT6ebzE828QHJPviIfpKhVC0gA%2BxM%2FaTlNV7bYw4%2BP5DdMoLzPTl1J81ivAdBXiS0Xh9fHft3HtgUuSZhh4%2FNchg%2BMpY1JcuwVdiQ158USD9RhrW2CrKRoU2gMVMx4ypzLM9rVFJ%2BxwjD6EVud5CV70PXu7mQCJ8VSRVal2wQwvyPX%2BM3uXJM6w1oED0Mgs%2Be8qwSKAtktAnQiBG7AEDGuqg6Ta4mm0cWLkPdUy3slMNW5r8MGOqUB6oDid%2BScDsvCVGt3d11OXz4b0kzSb%2FKiAbTdIunpcD5pfM4JMWgp723WBsMaiTw0hhvCPp4e8aIk7F2QzXXVIGA2P%2FMkltoGOvxZHXMS3zOIakIQFHSWO2cXzqM0Axz%2FyN5LFGhN04IX4wGYrlgdjjai29MIQIpNByRd2qUxheDtLTxzRUQmDRDU6qop6D6Bo11pPtwi3NYOBDb5b5Jn50SC%2BQv%2B&X-Amz-Signature=38ae3f6ac6400b542d3992ed643a757b64c8083960398e07c90bb2ddff949e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LASJMU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIE3qllg%2F6jRsRpygrumpyugSD%2FtawAxVFie%2FVQ0UfkfcAiEA7Ndf8Mt%2BVcHziqzlm01y9VVy4N%2FnPGXQp4RDIWAGuIYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKbF9e9af9T6G6rZeyrcA%2Byry2pod8ZX6wHm41kQNeBECmzp%2Fbdb73%2Btbp3buJGk7TEtmbj%2FWpIIlr7E%2BU%2Bi2E7Pf0sVycH7BhV3POvCeYccXLBOfURVKpT%2BaV8Kt3bEu3qq653njvpmoTvajO7z3gk%2BZl1PrgSKEJJY0xSen5mOx8MejpDAysFce6ygSEQflaAAMV6YN6IyArVLGb%2FurDbAatDJVCBAiMlXl2%2F2L2anbi6N5LFFYryCV17syODmowbsoWTMgVieewcAaEPpBhD6Z%2B7gPdayuIp722TpFDgzmzTWOrejddieDqN%2FaisqD0ZtZZ6QFTeu4zGnmEJ%2BiZWBmhcVlftBBPnOCx9PPN4BFxibyJi%2B0eu9oI%2F1bdPesj1O5Upf1G1XCksvPMoM6O7RK2yzXJK2uVlV8YYT6ebzE828QHJPviIfpKhVC0gA%2BxM%2FaTlNV7bYw4%2BP5DdMoLzPTl1J81ivAdBXiS0Xh9fHft3HtgUuSZhh4%2FNchg%2BMpY1JcuwVdiQ158USD9RhrW2CrKRoU2gMVMx4ypzLM9rVFJ%2BxwjD6EVud5CV70PXu7mQCJ8VSRVal2wQwvyPX%2BM3uXJM6w1oED0Mgs%2Be8qwSKAtktAnQiBG7AEDGuqg6Ta4mm0cWLkPdUy3slMNW5r8MGOqUB6oDid%2BScDsvCVGt3d11OXz4b0kzSb%2FKiAbTdIunpcD5pfM4JMWgp723WBsMaiTw0hhvCPp4e8aIk7F2QzXXVIGA2P%2FMkltoGOvxZHXMS3zOIakIQFHSWO2cXzqM0Axz%2FyN5LFGhN04IX4wGYrlgdjjai29MIQIpNByRd2qUxheDtLTxzRUQmDRDU6qop6D6Bo11pPtwi3NYOBDb5b5Jn50SC%2BQv%2B&X-Amz-Signature=8cd772121d9b89c62b2c6715a379c6ee1f83fda6c8757486b1593441dcee6fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
