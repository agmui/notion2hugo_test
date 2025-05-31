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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSTQENN%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGdGFqkd4aYEHEw18zoJmeHjVFseZ4VwWk1oP%2FKsjiDAiEA1bPHUFa%2BGI7ItnIVXKSxW5mYVzdxxfojllv%2Bq%2BCIRHYqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnbKeegulfIPlr3circA2uMYcABJRiiOY5B%2F%2FVJ9cXL3CIV2LpvpbseVSt8PiO0eVZyicm19FePoFbThHOTywV3gs%2B%2BbEqgwjdYOBFMsbclUBI%2FDAcplIWFcrLX%2FN%2BdY04tTS2KKP5mMxwQ7zNAGzfdtiBTYEWWSbYmtcz6%2FxqmrcP33G1tFv5cbwSmjIigaGLeWLOk52I1QunruF8tMLxYQIkal6txGVnvZSGD5zHX6offvQS%2B54C%2BN%2By3S6wDUnzorqJQtUMyovuEIohsrJlZftm%2BUh%2F7ryulsqW4g7ZDLCEY1AaO6yu%2Fj1TjC6nf5kxCn8%2FJKOyB9kCYeOGPrDShXZF%2B9NKmwLQpiT5kXL6XUxg3KN7fGjlusE5lSghTTMQU0tJICAGCLzIsB5O80%2BqSyUMyQZvtAnzFN30woT5sWiNB%2BXTwH2WrqPf52RHyjIrIwKqyFv94DXXnCFVy198RQGRM3jxhGXo3%2B5UNcI90Of3AWLa2DryXC6c%2BitbUUTgvxxx%2FR%2BJxUNtNFyqXqPQLsrrlc2EImCmyDlPKyyTC645Sjab3DUNXGh0bjYCdgoFSzK51VBNUSUWFGJmzAyvUJCxVjDN9NPu%2F5CZRHnwtl2davL2ejupLWKEBMdpTOKTRUyrhlF3FA6HaMM3N7MEGOqUBN3woU6L8rkd7poKEMqeWPGMr7%2FDRmGksvVZK3MpliS08sLANl51OCBcM0QVg5jWmDYoJFPvxjN4u2SuWo7fJVukA7Wqp2nUH4CoRxXX%2BJZcf1So1JO7ExqIG2GVmSnACppUtSPuEP0duli5HYQoPxUaHyzW83pIt%2BmzVaV9evUEcxODaTeaPumKEezKmcGf44HcuQO7Y1R67OHT1vInAqy3pDXHr&X-Amz-Signature=b30a6b9219cbc2544d143297adb029803179a59a7fb0343b5514ea03257dbae0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSTQENN%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGdGFqkd4aYEHEw18zoJmeHjVFseZ4VwWk1oP%2FKsjiDAiEA1bPHUFa%2BGI7ItnIVXKSxW5mYVzdxxfojllv%2Bq%2BCIRHYqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnbKeegulfIPlr3circA2uMYcABJRiiOY5B%2F%2FVJ9cXL3CIV2LpvpbseVSt8PiO0eVZyicm19FePoFbThHOTywV3gs%2B%2BbEqgwjdYOBFMsbclUBI%2FDAcplIWFcrLX%2FN%2BdY04tTS2KKP5mMxwQ7zNAGzfdtiBTYEWWSbYmtcz6%2FxqmrcP33G1tFv5cbwSmjIigaGLeWLOk52I1QunruF8tMLxYQIkal6txGVnvZSGD5zHX6offvQS%2B54C%2BN%2By3S6wDUnzorqJQtUMyovuEIohsrJlZftm%2BUh%2F7ryulsqW4g7ZDLCEY1AaO6yu%2Fj1TjC6nf5kxCn8%2FJKOyB9kCYeOGPrDShXZF%2B9NKmwLQpiT5kXL6XUxg3KN7fGjlusE5lSghTTMQU0tJICAGCLzIsB5O80%2BqSyUMyQZvtAnzFN30woT5sWiNB%2BXTwH2WrqPf52RHyjIrIwKqyFv94DXXnCFVy198RQGRM3jxhGXo3%2B5UNcI90Of3AWLa2DryXC6c%2BitbUUTgvxxx%2FR%2BJxUNtNFyqXqPQLsrrlc2EImCmyDlPKyyTC645Sjab3DUNXGh0bjYCdgoFSzK51VBNUSUWFGJmzAyvUJCxVjDN9NPu%2F5CZRHnwtl2davL2ejupLWKEBMdpTOKTRUyrhlF3FA6HaMM3N7MEGOqUBN3woU6L8rkd7poKEMqeWPGMr7%2FDRmGksvVZK3MpliS08sLANl51OCBcM0QVg5jWmDYoJFPvxjN4u2SuWo7fJVukA7Wqp2nUH4CoRxXX%2BJZcf1So1JO7ExqIG2GVmSnACppUtSPuEP0duli5HYQoPxUaHyzW83pIt%2BmzVaV9evUEcxODaTeaPumKEezKmcGf44HcuQO7Y1R67OHT1vInAqy3pDXHr&X-Amz-Signature=a9db1cbcb6e96e61deb626d025732f017e967288409f5f5fe5d08d687076d07a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
