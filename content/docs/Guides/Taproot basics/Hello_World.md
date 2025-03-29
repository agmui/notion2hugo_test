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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26NIGCR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICXAJ5yfPq2fSSODoPn1aAALrb2f7gugQwc%2Boa%2BPT1HbAiEA9A8bM%2FzaCn1yW4b48qAsuSsQG61MkVYwdsNforgq%2BWsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIX4vFqR%2FEZFXSIFOyrcA59Fs1SmP5IGcVP1TbXjhMIVnq47iQtCI37xLFBJ0sDO0snMhFkpN7089kR93EwwmVnPJbMLILhBQuty4hDc904B3NYqCHJnxvhoQQtEQcQs%2FPHYJREHyuopSy%2FjlzbvPOO5I1qiPUUucPjieOPBbyB2TFz%2F%2BHpjSuGW43Vzv5rhiNlaD%2F85ij9Ts3Xd1DJyEeo8C0Myigbg%2FiP0dIZXRQx3w42DVfbjf9NHzEtRklGW530%2BimOS%2FBKODOTdZpBFzJJo5GRnC6y6jyjzuDeEshpzKY6ThsjKbQnix8bqJ5%2FcXDdktckhhrgu6NmULy3PB6%2FaXyQ6hn3GBwyn55dMOhNma%2BrmG3lwIWyjCeb2%2BKXLKLex8Zzm7hUcbiVAj%2Bj3J%2FnZTIt653V1kjdbEnuUFAAArB0YB9gIgPP4QBGJGG%2FDG7iAR0C2PdiXd%2Fc7CJ7KRXKVWUiFsw3Gv%2BxkUP9eYCJHNlW5f7i2HMJtB3PW1kl0vYmQDY6SU1iD%2BuoLEoEqk1PfHIqrOhOh1ICv2DAhqv3wdycQvcrDPJj1%2FuP0BgJfFCxzzuEs5U5O%2BwyOo7mMq54yTzlc1tCNvffK28TYgX2QrmRlluS4RBRhyhYTMwKebOQUFYryF9UmUVffMKK1n78GOqUBNJ1n4YiOZ6wwZcFzxK8IRLEufIinAgzqtIcBm6ywLyS23dk3QxRAZa%2B5A8btg2OnZlkLA%2FIl0uh3sygOx6cuONDRzNngtwWY1rOVNW6G0CQ5thipdBe2BEIMtGmmOa1Gk%2F1lt4JxpxYC7MJzVC6FwsCnynkcDhaxVZV167pE1bsjOAB5TFklC9fYaxfnu2PsmmOmacHl%2BTg9cWBgw0rAhMNdmYaz&X-Amz-Signature=c9ee38de43b17de7e621b4bf0e9fa525bef0d7c7192d100de74eb9f48c4227ba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26NIGCR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICXAJ5yfPq2fSSODoPn1aAALrb2f7gugQwc%2Boa%2BPT1HbAiEA9A8bM%2FzaCn1yW4b48qAsuSsQG61MkVYwdsNforgq%2BWsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIX4vFqR%2FEZFXSIFOyrcA59Fs1SmP5IGcVP1TbXjhMIVnq47iQtCI37xLFBJ0sDO0snMhFkpN7089kR93EwwmVnPJbMLILhBQuty4hDc904B3NYqCHJnxvhoQQtEQcQs%2FPHYJREHyuopSy%2FjlzbvPOO5I1qiPUUucPjieOPBbyB2TFz%2F%2BHpjSuGW43Vzv5rhiNlaD%2F85ij9Ts3Xd1DJyEeo8C0Myigbg%2FiP0dIZXRQx3w42DVfbjf9NHzEtRklGW530%2BimOS%2FBKODOTdZpBFzJJo5GRnC6y6jyjzuDeEshpzKY6ThsjKbQnix8bqJ5%2FcXDdktckhhrgu6NmULy3PB6%2FaXyQ6hn3GBwyn55dMOhNma%2BrmG3lwIWyjCeb2%2BKXLKLex8Zzm7hUcbiVAj%2Bj3J%2FnZTIt653V1kjdbEnuUFAAArB0YB9gIgPP4QBGJGG%2FDG7iAR0C2PdiXd%2Fc7CJ7KRXKVWUiFsw3Gv%2BxkUP9eYCJHNlW5f7i2HMJtB3PW1kl0vYmQDY6SU1iD%2BuoLEoEqk1PfHIqrOhOh1ICv2DAhqv3wdycQvcrDPJj1%2FuP0BgJfFCxzzuEs5U5O%2BwyOo7mMq54yTzlc1tCNvffK28TYgX2QrmRlluS4RBRhyhYTMwKebOQUFYryF9UmUVffMKK1n78GOqUBNJ1n4YiOZ6wwZcFzxK8IRLEufIinAgzqtIcBm6ywLyS23dk3QxRAZa%2B5A8btg2OnZlkLA%2FIl0uh3sygOx6cuONDRzNngtwWY1rOVNW6G0CQ5thipdBe2BEIMtGmmOa1Gk%2F1lt4JxpxYC7MJzVC6FwsCnynkcDhaxVZV167pE1bsjOAB5TFklC9fYaxfnu2PsmmOmacHl%2BTg9cWBgw0rAhMNdmYaz&X-Amz-Signature=f6cd5a49714e9e41d7d980f240a6bb288947227441d4bbe3b3e97206309ce16a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
