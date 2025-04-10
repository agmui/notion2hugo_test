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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGGKEZ3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCEv67VS82c7q%2BclHJvRIjqxSbx2hB8lQQRsErAXWoXngIgToRyZBso20ColQZmRe1QlbD1ogD3kaTRDEveuSulebEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiYx0a8Kq02png%2FIircAw47WkZ31%2BIJ6oAsv%2BpDKY79NNEfQW0EBCfOkVO7WUEJhUbD2k6lHrZXmv%2FW0iJ25WD84sewaesF7%2BLJFIT2OPz9wYipSrhzc1Qq5m28m7Z2FiPjFKelJc5857W%2FYLwuDzwtdwyV1FDCK4idotYOIukgSJtXN1sp1qZHZTbp6qPHad7XnkmDqX3n1kazbM5rXn5diwGJ5DsHdJb%2B%2BQOz6Qij1XFJtrPffVwwEtVItHmziHQgT20qjenQTwEMybQteZNtQyNkiSDDyYgzfQTKrNHKnlsoRyNx6xOFYtEJSc0VBDj5FLi3B6h7c08c1utMhHLGdMXvdIYl47pOPV8ap91pInHC0IkJa9MRi1qpdf3dIq3y9zDuylEmk%2B%2FAUJ5N5EiG7QF%2BmbMYPJvh0vhBhdTXKKFUKV2Q%2BObra2YHe5XVL01%2F8Bz11sMCw0%2BHuRatpmngQsA4I%2FC9dPnkI61m9DN%2BJeKYM1VLlHfJeeyURpJdmO0xoVbfCRdrmwoOwBVDwwfjeRLcYR6sKKyYdrUBxZ3XS8kROGKzMSTmdgrny%2B8LCM16INg0jzA7psWAvVRznHxrjPUmeXdDNUt9BRvnxh%2BNRFYeHWNZlL6nLVAwdT4Ug5olMTg8ZeyTtMMUMP%2BQ4b8GOqUBTOxHgPh%2F2wg6mjRAfBQomACY1ATs6vkrujkiaQLT3jE7MHPZ59cyWBwspThhPxnN857uCjaka%2BeANQobsaVVk1ZXpY5rojKZPVjsYsY%2ByD56ncEET5%2BciXTAYt7udmf2GPlhl4ULyrzeC4HVljbEw8wG%2FfPC481iTzWQMlBdXWaATdOMBOWua9wYSkD5eBC5aPoo4Y5NYRvSGkPlOcLlZlTdo%2FkM&X-Amz-Signature=5365e7e161b2aaae079b0c8aab2dadadb7649baf49834f4239f3634f16f98bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGGKEZ3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCEv67VS82c7q%2BclHJvRIjqxSbx2hB8lQQRsErAXWoXngIgToRyZBso20ColQZmRe1QlbD1ogD3kaTRDEveuSulebEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiYx0a8Kq02png%2FIircAw47WkZ31%2BIJ6oAsv%2BpDKY79NNEfQW0EBCfOkVO7WUEJhUbD2k6lHrZXmv%2FW0iJ25WD84sewaesF7%2BLJFIT2OPz9wYipSrhzc1Qq5m28m7Z2FiPjFKelJc5857W%2FYLwuDzwtdwyV1FDCK4idotYOIukgSJtXN1sp1qZHZTbp6qPHad7XnkmDqX3n1kazbM5rXn5diwGJ5DsHdJb%2B%2BQOz6Qij1XFJtrPffVwwEtVItHmziHQgT20qjenQTwEMybQteZNtQyNkiSDDyYgzfQTKrNHKnlsoRyNx6xOFYtEJSc0VBDj5FLi3B6h7c08c1utMhHLGdMXvdIYl47pOPV8ap91pInHC0IkJa9MRi1qpdf3dIq3y9zDuylEmk%2B%2FAUJ5N5EiG7QF%2BmbMYPJvh0vhBhdTXKKFUKV2Q%2BObra2YHe5XVL01%2F8Bz11sMCw0%2BHuRatpmngQsA4I%2FC9dPnkI61m9DN%2BJeKYM1VLlHfJeeyURpJdmO0xoVbfCRdrmwoOwBVDwwfjeRLcYR6sKKyYdrUBxZ3XS8kROGKzMSTmdgrny%2B8LCM16INg0jzA7psWAvVRznHxrjPUmeXdDNUt9BRvnxh%2BNRFYeHWNZlL6nLVAwdT4Ug5olMTg8ZeyTtMMUMP%2BQ4b8GOqUBTOxHgPh%2F2wg6mjRAfBQomACY1ATs6vkrujkiaQLT3jE7MHPZ59cyWBwspThhPxnN857uCjaka%2BeANQobsaVVk1ZXpY5rojKZPVjsYsY%2ByD56ncEET5%2BciXTAYt7udmf2GPlhl4ULyrzeC4HVljbEw8wG%2FfPC481iTzWQMlBdXWaATdOMBOWua9wYSkD5eBC5aPoo4Y5NYRvSGkPlOcLlZlTdo%2FkM&X-Amz-Signature=5aa06ec46c1be96c4c65399efff7ffbbfebb6780735845266993a7e58878966b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
