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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3QX5P4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd3KAL73lh258QkvD2zIrsELso4H2eJVMMfzVoQUu3IAiEAo7XuCcGIVCwHeMQBde%2BIjDrXKYw83ngP%2FEv3fO022w4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAC7zQJ9feTeqW0bircA1nGcJPfBGR%2BPU6sTlFTK9e4IYLfGm6v1Ka%2FJSAIPIMf1UVir6VMgsNNCCFVP1yflCfSB0gelb7XZffAXao0adjrP%2F%2FbbjAkMxBfCwLpYaS3LDhbkyns8ZnUGyEQGAGSdaVVrn765xyGOlewmQ9sWnhDuf%2FtrpnoWlrIzaqSe1ofuD4x%2Fr2IXqxrLHbLonbZcGTNLaNGrfhg2L%2Bg4PFdrk2eq%2F%2BG1l6mgK%2FLmJ6R%2Fr7Cg6h837gq%2BkE2xLrD4Jxpad2N5SpPNP0JSv8PcVX4WTeveznwWOA9Ygd2CHelaKyXjxlTP%2Fin4ZLTnYbxJms46CGi2H91wwAli0BGR5gHdHpnYCtbfMssRXCu4RCOBMOOgFHhlY5IKGV2ZK3cW2lnVvNn5ecBbmdU4WRViwfa8Y25U3jJY7XzOJJeicmGNfiQzIhURHb0058rdw60o%2B2vMUmDncus9PCx8TjJ%2FM1%2FllI0D8P9QdCcboNnRvXBMS8plV6Kz1AAQPi27%2Fsm5X727p0ep6KgObwM9MvBhtpVxP8Amg6mDCqLub1nueK81sciPP7%2BPSM5L24rGGDHb3tbaPYLnFwCgml%2FvlKzsB%2F3L8AWWgjads1iVQ2Sj3WTxU1MvEMSNvJm3%2Bf4BhhUMOqH7LwGOqUBH%2FcMhu9f9usIru3rddbGlu44c%2FC8KrszJXBQ6rcowfwKK8cIYRqZ6VRTM3n1%2BqdzdtI2E8EuxbEkwgQxA8XQFDEOg%2B7yYxV%2FuPmU1NPMLM2nqbE7g5fWRULmHAoXhYgxPZTb6k7nlgiI1Rv95%2B9SZHKxSjfORti2FhVBmsrhR1zE5Eai%2BFqm2w1kgrDzc7TP4blEbW6LjYE1d9hWWvhGSrHthcBI&X-Amz-Signature=48ddd2514b4302e413bfdd60c4a689012454dd5460a18ff2de63bea65234672e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3QX5P4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd3KAL73lh258QkvD2zIrsELso4H2eJVMMfzVoQUu3IAiEAo7XuCcGIVCwHeMQBde%2BIjDrXKYw83ngP%2FEv3fO022w4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAC7zQJ9feTeqW0bircA1nGcJPfBGR%2BPU6sTlFTK9e4IYLfGm6v1Ka%2FJSAIPIMf1UVir6VMgsNNCCFVP1yflCfSB0gelb7XZffAXao0adjrP%2F%2FbbjAkMxBfCwLpYaS3LDhbkyns8ZnUGyEQGAGSdaVVrn765xyGOlewmQ9sWnhDuf%2FtrpnoWlrIzaqSe1ofuD4x%2Fr2IXqxrLHbLonbZcGTNLaNGrfhg2L%2Bg4PFdrk2eq%2F%2BG1l6mgK%2FLmJ6R%2Fr7Cg6h837gq%2BkE2xLrD4Jxpad2N5SpPNP0JSv8PcVX4WTeveznwWOA9Ygd2CHelaKyXjxlTP%2Fin4ZLTnYbxJms46CGi2H91wwAli0BGR5gHdHpnYCtbfMssRXCu4RCOBMOOgFHhlY5IKGV2ZK3cW2lnVvNn5ecBbmdU4WRViwfa8Y25U3jJY7XzOJJeicmGNfiQzIhURHb0058rdw60o%2B2vMUmDncus9PCx8TjJ%2FM1%2FllI0D8P9QdCcboNnRvXBMS8plV6Kz1AAQPi27%2Fsm5X727p0ep6KgObwM9MvBhtpVxP8Amg6mDCqLub1nueK81sciPP7%2BPSM5L24rGGDHb3tbaPYLnFwCgml%2FvlKzsB%2F3L8AWWgjads1iVQ2Sj3WTxU1MvEMSNvJm3%2Bf4BhhUMOqH7LwGOqUBH%2FcMhu9f9usIru3rddbGlu44c%2FC8KrszJXBQ6rcowfwKK8cIYRqZ6VRTM3n1%2BqdzdtI2E8EuxbEkwgQxA8XQFDEOg%2B7yYxV%2FuPmU1NPMLM2nqbE7g5fWRULmHAoXhYgxPZTb6k7nlgiI1Rv95%2B9SZHKxSjfORti2FhVBmsrhR1zE5Eai%2BFqm2w1kgrDzc7TP4blEbW6LjYE1d9hWWvhGSrHthcBI&X-Amz-Signature=9da99ad40ea3c65aea918eb603b85daeeb25601daf45049429662430764f239a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
