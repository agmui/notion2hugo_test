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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CXNQBTT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBcQocTy7LipaK%2BRC0dTtava2OGXf%2Bma8bHbkC%2BMgQsAAiEAqQXwjQ36HlH1012I9L%2Fm%2FAO5gwradx5P7J%2FUzvtEAwYqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnEmzFltIl%2BoZyLYSrcA6a54K3Ge%2BBMvWaThtzarEQjR%2FEh1R6CcqgnYg2W2JCnRKYopzMtTXxFITJnijqkr6gJg4zwADgxuq%2F4x3R%2FT%2FaredaMOrK1JtI0VuEz3%2FT1mFLPLcQHJUJUrIlYD0vE%2B%2BgoPw3hMKZQ1Hn4r4TJtCLWkgIEyraE1KtQ86O7EhPIvdVY5dodDx5HwQWaTI1FDM%2BuvRLq5kbLWrNEU0pUDVoiqCJSA%2F8ulQrnYF4ikMPQ%2BG1w7P7hYmy9CE2dcbhUdWHv3a3wLiPO8Sv5JTcG1ZiBVkifKebwYC723%2BVVQa2O0b2nBsjw%2FkHr7vCBC%2FRIBh7Ol5QxUGNnf2WaWM7ugJuIbIM2ZL8aXyt9WSKuRNgjfmsl0KKWE4eLCktYC9KI9YzY7fFQaE0P0htX6G3hOlqNzull3%2FdvUkuXxGS3nh4sq5RkfcCb1xXHb1XFXFisgJAMJ1af%2BJrY8sQkp%2B4D9ohbg09Z8kmLW89gxorroonIk8YJr%2FjEeXPXODZxX6Ppvg%2ByuIZJ1sDDAShjBf4odaDXy2McR77bX7WF7OmAgR93osOOmvhDZDV4KB8fPC0ByWIiPmPE6fU7Hngkc7IvkLL44uAv%2FpR5Gp7cpCX70sPMz93aHPt9M5e0US3eMMfLysAGOqUBq4MLdfambTPVJz55mk8YPeaAglxjSUVkbaLEDAGE0znLox%2BgpEG%2FpfINEiQdgi57JsdZAdI65xAZaK3qNpfr8L01TFthPAYPY65gkOk4w7mTglPWT2xPZuiTIYVhoIm1FZM%2BVR%2BF%2BAJjRAgoIevKh%2BbcSDiLdii3LTn4AREii6G3U43dUPQR2gbOziEfI1Bt1u9WWeivx6%2BKQ%2F9h6esLBgdTu3RZ&X-Amz-Signature=96a2d3bd010d50e191d83af374ab283eea4ce418a49881a21353410e4268e5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CXNQBTT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBcQocTy7LipaK%2BRC0dTtava2OGXf%2Bma8bHbkC%2BMgQsAAiEAqQXwjQ36HlH1012I9L%2Fm%2FAO5gwradx5P7J%2FUzvtEAwYqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnEmzFltIl%2BoZyLYSrcA6a54K3Ge%2BBMvWaThtzarEQjR%2FEh1R6CcqgnYg2W2JCnRKYopzMtTXxFITJnijqkr6gJg4zwADgxuq%2F4x3R%2FT%2FaredaMOrK1JtI0VuEz3%2FT1mFLPLcQHJUJUrIlYD0vE%2B%2BgoPw3hMKZQ1Hn4r4TJtCLWkgIEyraE1KtQ86O7EhPIvdVY5dodDx5HwQWaTI1FDM%2BuvRLq5kbLWrNEU0pUDVoiqCJSA%2F8ulQrnYF4ikMPQ%2BG1w7P7hYmy9CE2dcbhUdWHv3a3wLiPO8Sv5JTcG1ZiBVkifKebwYC723%2BVVQa2O0b2nBsjw%2FkHr7vCBC%2FRIBh7Ol5QxUGNnf2WaWM7ugJuIbIM2ZL8aXyt9WSKuRNgjfmsl0KKWE4eLCktYC9KI9YzY7fFQaE0P0htX6G3hOlqNzull3%2FdvUkuXxGS3nh4sq5RkfcCb1xXHb1XFXFisgJAMJ1af%2BJrY8sQkp%2B4D9ohbg09Z8kmLW89gxorroonIk8YJr%2FjEeXPXODZxX6Ppvg%2ByuIZJ1sDDAShjBf4odaDXy2McR77bX7WF7OmAgR93osOOmvhDZDV4KB8fPC0ByWIiPmPE6fU7Hngkc7IvkLL44uAv%2FpR5Gp7cpCX70sPMz93aHPt9M5e0US3eMMfLysAGOqUBq4MLdfambTPVJz55mk8YPeaAglxjSUVkbaLEDAGE0znLox%2BgpEG%2FpfINEiQdgi57JsdZAdI65xAZaK3qNpfr8L01TFthPAYPY65gkOk4w7mTglPWT2xPZuiTIYVhoIm1FZM%2BVR%2BF%2BAJjRAgoIevKh%2BbcSDiLdii3LTn4AREii6G3U43dUPQR2gbOziEfI1Bt1u9WWeivx6%2BKQ%2F9h6esLBgdTu3RZ&X-Amz-Signature=c910687be5de85c71e5c483a336b104c543d96bde32914ba9ee05c8602e5abf2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
