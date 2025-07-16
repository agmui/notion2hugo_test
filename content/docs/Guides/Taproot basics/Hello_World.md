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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PFZUR7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIGppDqHGxLH%2FA7N7TaUIC8u%2BIQ993eIpdsdBHxC9R6BEAiEA5MonouCQrKXoff5nMbu8z2ASyKhqeeItWu1MN2g9rEcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPK%2BEgPOSe1nArV%2FvircAycGrRKECi3FDosmItIuCXYhzcRRySu9t0b%2FkWkytALqLaO4IfavdIDOr34EyrybaIoz9VOV2eNTSz39uQRAyXyNKoZlN264XLQtkrUlIDq8pTRBEaqbynRhWEvOxqufQ1TztsEWFgmdOIbN%2Fqkwgoni74J1r2ozglLTk5uAMw6YRaehUmkSzRkxtvwf%2BjePnqrmczS9fygTnA4XYHv%2BV%2BYKrU30z5dIIris%2Fhol1u43ObotDrh208rocEJ3EqQRFK6yMUAL%2FecISi1FU2rsPk2PKdQnZ4PZ7AlRGqueI1Mbkr8idj4uVWK6Jw5iOGk6ZM8LtnDFuP2P7PK%2FK%2FfbFXb2ZOzSWT4qmAgaBSlBG6lNum8VDPNRZl9GCeuHasYN61wqFYmVp1jgMctMToHdFvxvUeINvaNOiZ2LZgSFl2ggKTVWriq9CzelZ3lbiGQTA7mudcBbOGpeRU1PLVJbeM8L87ohzO5UIXT7re%2Fd2HvBahVkssIySOX0F7Cl2avV0UmAvSni3tX1WPExcDwTJJi1v%2BW8ZDepneZRvP%2F0mEJNnOMOFrMT8oxV89dvQoecTt8ekjy75cyUBNlft%2FfQS3UHkALTst3yeHfTH11MQXsNBzoY9w5MF5ESdmxOMIbo3cMGOqUBdBbCm%2Bx%2B0RAjeeEJfh2k9brC90mnhVwu3sVfzGDoPtRsoB3L2RlV1v8RepsIY%2F7W3rRz37GwM0vQIt0xsssxT4ZVQkKE1R%2BuWG5GwaXOJpmG9Zxs9uxqSODH2F226Ua4w3jyxaq40RD0qP0DXc7pw4tUvo8LN0i8xrHhc%2FVbMvzgNuOLl7qtnV%2Bi3YQLO9hAWZGWy0RBicFo2rlWH3qelYNjutal&X-Amz-Signature=8d778ac9e7e991ff3d6f5fbff3d971feadba736619c88f213981867dc55eff71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PFZUR7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIGppDqHGxLH%2FA7N7TaUIC8u%2BIQ993eIpdsdBHxC9R6BEAiEA5MonouCQrKXoff5nMbu8z2ASyKhqeeItWu1MN2g9rEcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPK%2BEgPOSe1nArV%2FvircAycGrRKECi3FDosmItIuCXYhzcRRySu9t0b%2FkWkytALqLaO4IfavdIDOr34EyrybaIoz9VOV2eNTSz39uQRAyXyNKoZlN264XLQtkrUlIDq8pTRBEaqbynRhWEvOxqufQ1TztsEWFgmdOIbN%2Fqkwgoni74J1r2ozglLTk5uAMw6YRaehUmkSzRkxtvwf%2BjePnqrmczS9fygTnA4XYHv%2BV%2BYKrU30z5dIIris%2Fhol1u43ObotDrh208rocEJ3EqQRFK6yMUAL%2FecISi1FU2rsPk2PKdQnZ4PZ7AlRGqueI1Mbkr8idj4uVWK6Jw5iOGk6ZM8LtnDFuP2P7PK%2FK%2FfbFXb2ZOzSWT4qmAgaBSlBG6lNum8VDPNRZl9GCeuHasYN61wqFYmVp1jgMctMToHdFvxvUeINvaNOiZ2LZgSFl2ggKTVWriq9CzelZ3lbiGQTA7mudcBbOGpeRU1PLVJbeM8L87ohzO5UIXT7re%2Fd2HvBahVkssIySOX0F7Cl2avV0UmAvSni3tX1WPExcDwTJJi1v%2BW8ZDepneZRvP%2F0mEJNnOMOFrMT8oxV89dvQoecTt8ekjy75cyUBNlft%2FfQS3UHkALTst3yeHfTH11MQXsNBzoY9w5MF5ESdmxOMIbo3cMGOqUBdBbCm%2Bx%2B0RAjeeEJfh2k9brC90mnhVwu3sVfzGDoPtRsoB3L2RlV1v8RepsIY%2F7W3rRz37GwM0vQIt0xsssxT4ZVQkKE1R%2BuWG5GwaXOJpmG9Zxs9uxqSODH2F226Ua4w3jyxaq40RD0qP0DXc7pw4tUvo8LN0i8xrHhc%2FVbMvzgNuOLl7qtnV%2Bi3YQLO9hAWZGWy0RBicFo2rlWH3qelYNjutal&X-Amz-Signature=ca751a09529fcce8e28e27c1a4d74b1780602ba5a7e61bdf439b3d2010765ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
