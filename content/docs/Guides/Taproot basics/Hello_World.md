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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNORE6A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDVIiXEllnzoBCYFoTtgFNeh%2FF7IVZXnmHWAqYUM%2FKmCAIgB129HlrgM2EXQjEcVIybn0n1%2Fzf6XmMUy7BCR6%2BYjvoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDsixlzx%2BBDw6cGeKSrcA7DD8efpSV4Ly4uA1XfUb2IzCgoe5IXRH3TL5C5jUY2vrfzGS5pFIXAOOmr6looB%2BK0HLeYmq5%2F%2BXMAK6wqP%2FxwKtxcsQpPWK1VLw1wS0G%2FTVfSkm96OcwTGnS0PdVDN4w6dmh2sfjj34hU0iR2YFdOUIWcuj5TH0KTHL8SsWY%2FhhIvlCx%2B2hRiLalfzAxV4Zsn7g%2BV0cMH3%2FBGksQsVoZd1SuLDH9kidj2UDQXFC%2B2bdly9%2FL23TgnyniB7YKIeukqOvFXIIlgi0OgQYlsubcWvUl9A2xTrub0K1R%2F6BmenN2me%2BE4mh0Ef%2F0uhAQY6v6yFelxJ%2Bl5AB5DqGV%2F%2BD6pOKPy1KgHt4eZdmK8e7f1NcTXh%2FAdTMP0bl4DRKz3sYomZKcIXfG0vYkiYqMODQmhJEgT7KaiIeyvSm%2F47TnQi2n6ewvoNUq2qRnudGReIX8nPiuEH5S7UY9ed%2BP%2BtHewDEz5A6LuHSYPGk3xYLLb9CqUx3eihFrx70Srk1ix5UMw6H7RpLPDCXaK%2FBXsMt8FeWbOV9ncLMIGGZ3JSoksy1JxaTv72%2F%2B5NQJ0ou43lctVrufoAqRv%2FhmmOidCOajQkJGzaY55JxgyeEessCyZOd3wkCRw4jth9TTc5MOPvy8QGOqUBDLyNBk5bU9Cxlc%2FYENnjmapdrgXFNjTB1VE0YsiJPcwITdqrpGD5lqr3PaKmOMN8eL5xK7jPv%2F6gEgIBrTv6iiwtEktZ2er4nOfQqJFrB%2FmFXa8xC36rG9XPpzno%2FgigTZr5Ay1b%2FaYrXnEGFYpyVi3boJPkK7fKNj7yPwr9yX20CyWuY01lpF1WfQ5%2Fh0oHB9wyBIBQRtS7qC9V5RerDMQI5dow&X-Amz-Signature=10bd9636a4372e84001c7af19ba512af2eae7bfb942c89fdf0ea02873c7c6a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNORE6A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDVIiXEllnzoBCYFoTtgFNeh%2FF7IVZXnmHWAqYUM%2FKmCAIgB129HlrgM2EXQjEcVIybn0n1%2Fzf6XmMUy7BCR6%2BYjvoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDsixlzx%2BBDw6cGeKSrcA7DD8efpSV4Ly4uA1XfUb2IzCgoe5IXRH3TL5C5jUY2vrfzGS5pFIXAOOmr6looB%2BK0HLeYmq5%2F%2BXMAK6wqP%2FxwKtxcsQpPWK1VLw1wS0G%2FTVfSkm96OcwTGnS0PdVDN4w6dmh2sfjj34hU0iR2YFdOUIWcuj5TH0KTHL8SsWY%2FhhIvlCx%2B2hRiLalfzAxV4Zsn7g%2BV0cMH3%2FBGksQsVoZd1SuLDH9kidj2UDQXFC%2B2bdly9%2FL23TgnyniB7YKIeukqOvFXIIlgi0OgQYlsubcWvUl9A2xTrub0K1R%2F6BmenN2me%2BE4mh0Ef%2F0uhAQY6v6yFelxJ%2Bl5AB5DqGV%2F%2BD6pOKPy1KgHt4eZdmK8e7f1NcTXh%2FAdTMP0bl4DRKz3sYomZKcIXfG0vYkiYqMODQmhJEgT7KaiIeyvSm%2F47TnQi2n6ewvoNUq2qRnudGReIX8nPiuEH5S7UY9ed%2BP%2BtHewDEz5A6LuHSYPGk3xYLLb9CqUx3eihFrx70Srk1ix5UMw6H7RpLPDCXaK%2FBXsMt8FeWbOV9ncLMIGGZ3JSoksy1JxaTv72%2F%2B5NQJ0ou43lctVrufoAqRv%2FhmmOidCOajQkJGzaY55JxgyeEessCyZOd3wkCRw4jth9TTc5MOPvy8QGOqUBDLyNBk5bU9Cxlc%2FYENnjmapdrgXFNjTB1VE0YsiJPcwITdqrpGD5lqr3PaKmOMN8eL5xK7jPv%2F6gEgIBrTv6iiwtEktZ2er4nOfQqJFrB%2FmFXa8xC36rG9XPpzno%2FgigTZr5Ay1b%2FaYrXnEGFYpyVi3boJPkK7fKNj7yPwr9yX20CyWuY01lpF1WfQ5%2Fh0oHB9wyBIBQRtS7qC9V5RerDMQI5dow&X-Amz-Signature=cfe5eb9382c57380ba89a4d26a17e473cb5f0754c0ea08db632ec99648b4b9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
