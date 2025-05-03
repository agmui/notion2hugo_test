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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOFY5Z4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCWOdtNy%2F43jap2R4jtwNrn0Ytx4mtOac616EeOgxcJXgIgasi0CcwEYpZgw10sA3pXsSbz3ERedmt%2FqfpU3NBdkLsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyjbcV3FfrYF8GRWircA2s7IOdj1G4LdeW8QRHAj5XrkbXalBrBJFqxkaEp20JRQq9ZpHraHguyxTluGDodsVC%2BrghF1cgZLAgELkTzyWjBVNCx7%2BYewLTbQtvec2qy01jiToRRVlQvyjOa58Xd%2BgAI1Ac8H213LfZwtFuE6MyneIXdolShkCqvmy67UMYbt9WueEYPBN8grxY0oMueQlOhSoDf4WKamuBjiSONMt8CgOv%2FGYrVnUYPK%2Bz7k04lAIouFaRr5RAUitY8yXqSyKzTTu2Texb5LyBs3sNa5%2B8otbtF5rnrKCn7%2BsiAfUYePLnXEJoQOLfrb8zkcv276v2WNhIgKT5%2FwLArEuB4Svin2n%2FNDo%2FE5zxOa%2FzlqSI4JuH%2F8sY03KcHJ%2BCa2WerZlmc09t8bgysVczF0tY1KkTrW5KipMI3s0c4q397vN0VQRU9sp%2BXO0cQfiuP%2F%2F9VnAVAtK9p1A9%2BZLQ22lNvzSGaAGs7VCUahVW0hq3S77jMAaKPgJCErVq0HU3%2FYyEibBqryX%2F4PdjSo3qfD5am2z20uExcKNxDxvDJGjQLbPpDXJMoQSHD%2FTPa88%2BO7rH1YF%2BxLiwJHPy2e0A3NnSTPL2hv7IruiVRGSf2i12j7RwMEB9931nJzk3NE39mMPOg18AGOqUBhcUNHjte8BG5on2XHbWwhnpTxotuqGCRrzyiKf2JeM15PhVAH9ueeu1KDVKxjCDRm8EMNo0b4aJ1DorAfgMpKiP8EzHDwQSaFKb7d%2Fckfe2d23m0vJztXVBfPicFkyacD53PZ7OejsQFr1j5U6h7ECee%2F3VRMJFuL688ETWISHEozQjIydEotTIHlKcnjDI0U2kukrYiCDwfdhJi7FfEqknFQ%2BQz&X-Amz-Signature=8eb23ce2e9e08d30d97513bb2084e4f0aa8931dba0835c079d3cc27ae045d02f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOFY5Z4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCWOdtNy%2F43jap2R4jtwNrn0Ytx4mtOac616EeOgxcJXgIgasi0CcwEYpZgw10sA3pXsSbz3ERedmt%2FqfpU3NBdkLsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyjbcV3FfrYF8GRWircA2s7IOdj1G4LdeW8QRHAj5XrkbXalBrBJFqxkaEp20JRQq9ZpHraHguyxTluGDodsVC%2BrghF1cgZLAgELkTzyWjBVNCx7%2BYewLTbQtvec2qy01jiToRRVlQvyjOa58Xd%2BgAI1Ac8H213LfZwtFuE6MyneIXdolShkCqvmy67UMYbt9WueEYPBN8grxY0oMueQlOhSoDf4WKamuBjiSONMt8CgOv%2FGYrVnUYPK%2Bz7k04lAIouFaRr5RAUitY8yXqSyKzTTu2Texb5LyBs3sNa5%2B8otbtF5rnrKCn7%2BsiAfUYePLnXEJoQOLfrb8zkcv276v2WNhIgKT5%2FwLArEuB4Svin2n%2FNDo%2FE5zxOa%2FzlqSI4JuH%2F8sY03KcHJ%2BCa2WerZlmc09t8bgysVczF0tY1KkTrW5KipMI3s0c4q397vN0VQRU9sp%2BXO0cQfiuP%2F%2F9VnAVAtK9p1A9%2BZLQ22lNvzSGaAGs7VCUahVW0hq3S77jMAaKPgJCErVq0HU3%2FYyEibBqryX%2F4PdjSo3qfD5am2z20uExcKNxDxvDJGjQLbPpDXJMoQSHD%2FTPa88%2BO7rH1YF%2BxLiwJHPy2e0A3NnSTPL2hv7IruiVRGSf2i12j7RwMEB9931nJzk3NE39mMPOg18AGOqUBhcUNHjte8BG5on2XHbWwhnpTxotuqGCRrzyiKf2JeM15PhVAH9ueeu1KDVKxjCDRm8EMNo0b4aJ1DorAfgMpKiP8EzHDwQSaFKb7d%2Fckfe2d23m0vJztXVBfPicFkyacD53PZ7OejsQFr1j5U6h7ECee%2F3VRMJFuL688ETWISHEozQjIydEotTIHlKcnjDI0U2kukrYiCDwfdhJi7FfEqknFQ%2BQz&X-Amz-Signature=c73a3bd43df62a6bddfca2479776747d2f65b20c356a433ed6779c77b697b5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
