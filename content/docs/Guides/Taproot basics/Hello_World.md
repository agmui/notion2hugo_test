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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWUZ3FY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCP%2F3nrjqQiwWr47n2ojlD8gpbzS2WMQzMSfLgjb%2B%2Bb8wIgIfL9YHArnW7pNBgmOFtQ1rs5RCcB%2BwVOn6cAXpa0bOwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1zF8h0CXpOYXivQSrcA9Ko4AwexvgoDFJ%2Fs0PEQOivy8ySCfBY2ajzgIVukgU3rLL1jPwJL6DFiYhSsexyFfNZDaaEzHvypm%2BnPRkcase%2Bdq7qXiJfNecZ8GAHk0aRGJ5Y4byGvttVUYKFE1sS3Krbh0YYxkO019XZm%2Bk%2BPGMoapqEfhnUN1%2FhKTW0sRIMVP9g3y5fGBo%2BN4m4ZGMixqx0GkhSXZgTpVu6rNAVXxFXwaUvGCyrdjBp8vbREZvCX1N49%2F3R7yNH4dwPqs0FLHtelXMHRctEBxvAeXBIC1UaCSICxU%2B5%2F5ImjF5RGZRBgUqhcbY54Bijgy8WiXm3XT9ootoOKH4yO071cEJ3pamgsciAgpValTBPDNz450R7cbQO1AcXqDhIbrKIidl1iU6DuPP4HntlznT6gGbrB%2FdLB0RHGfr2J%2FHk2QQVjPkRvuwFdmEucZ3oSeS6UijZ67k1PIjGOku9DcXiAHJ3yp9bRFCrCiQvSK6IwNbcYWOq%2FxeiItfW4hCONadUoQxl6Kq3tU8hhbkPnTMsOZms%2Fm3yGi4oECY5OvGCfZCVB418bt30x%2FSUIIyqwbwqn7%2F%2F%2B50gVO0VFBN%2BNO3R6mmMD%2F90RqL%2FQ5CDGczX5T%2Bkjpr5BNOtrXHb0a0IMlwZMPSUjL4GOqUBns2%2B3b04urPtOLZ6VkTZ2CPkGrhJK%2B4TgxpS82BhJcD7fv%2BIU2BmiNn%2BwuGmOfq9is3QMDKv%2FxAHihEpGlOFO65aXODq8OQjN9PtvqtqrSOqsaRh626CLYHYtsmIBpXNfmH9QHS5bE%2FGa95NWW3HXpXvO0bqnPvwA9zmVGT02%2Bb0OD8C4NpkqRO0MX7pP2dPPV6vf2N2ToyRCP%2FFJh3vpQ0Fi%2FvT&X-Amz-Signature=47dc490df6139b5b21c6d90b76560f68d9afac22927ad394f08278685512e952&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWUZ3FY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCP%2F3nrjqQiwWr47n2ojlD8gpbzS2WMQzMSfLgjb%2B%2Bb8wIgIfL9YHArnW7pNBgmOFtQ1rs5RCcB%2BwVOn6cAXpa0bOwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1zF8h0CXpOYXivQSrcA9Ko4AwexvgoDFJ%2Fs0PEQOivy8ySCfBY2ajzgIVukgU3rLL1jPwJL6DFiYhSsexyFfNZDaaEzHvypm%2BnPRkcase%2Bdq7qXiJfNecZ8GAHk0aRGJ5Y4byGvttVUYKFE1sS3Krbh0YYxkO019XZm%2Bk%2BPGMoapqEfhnUN1%2FhKTW0sRIMVP9g3y5fGBo%2BN4m4ZGMixqx0GkhSXZgTpVu6rNAVXxFXwaUvGCyrdjBp8vbREZvCX1N49%2F3R7yNH4dwPqs0FLHtelXMHRctEBxvAeXBIC1UaCSICxU%2B5%2F5ImjF5RGZRBgUqhcbY54Bijgy8WiXm3XT9ootoOKH4yO071cEJ3pamgsciAgpValTBPDNz450R7cbQO1AcXqDhIbrKIidl1iU6DuPP4HntlznT6gGbrB%2FdLB0RHGfr2J%2FHk2QQVjPkRvuwFdmEucZ3oSeS6UijZ67k1PIjGOku9DcXiAHJ3yp9bRFCrCiQvSK6IwNbcYWOq%2FxeiItfW4hCONadUoQxl6Kq3tU8hhbkPnTMsOZms%2Fm3yGi4oECY5OvGCfZCVB418bt30x%2FSUIIyqwbwqn7%2F%2F%2B50gVO0VFBN%2BNO3R6mmMD%2F90RqL%2FQ5CDGczX5T%2Bkjpr5BNOtrXHb0a0IMlwZMPSUjL4GOqUBns2%2B3b04urPtOLZ6VkTZ2CPkGrhJK%2B4TgxpS82BhJcD7fv%2BIU2BmiNn%2BwuGmOfq9is3QMDKv%2FxAHihEpGlOFO65aXODq8OQjN9PtvqtqrSOqsaRh626CLYHYtsmIBpXNfmH9QHS5bE%2FGa95NWW3HXpXvO0bqnPvwA9zmVGT02%2Bb0OD8C4NpkqRO0MX7pP2dPPV6vf2N2ToyRCP%2FFJh3vpQ0Fi%2FvT&X-Amz-Signature=4db509cf73ee8ddf153da5b632992db5c24b433764400b367ecfa4b4a4f68750&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
