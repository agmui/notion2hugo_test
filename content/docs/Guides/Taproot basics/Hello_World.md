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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFQ27UG%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCckWS%2FKnQ4z%2B5V57ixTNRniPZwLXISWCmxz6PtcbGn8wIgZ25ESxgdJxCCyHplM3g4lSxJOnkJd4Edhpj95ZBu9Cwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDA31S6BBWQIaXFaIzSrcA7Y8F1jghfwxPnsyXGzFP8Mw60AkUtoYW%2Fnrl8mc6MkNsKTyzT7Eo9ufV7Ptx6CtNN%2BS1%2B%2Bdjao1mc2TFjjQVi5jjf3GLkQ%2F119RtdAMUMQehWX05m0i8gmc%2FXIbOVkIy2GyH%2Bof1No0HsAy2XTUgC70a3KzbOCmLFpzWa3FqheU%2F%2FjwSTU%2F8aOmBPSqmkK58XS3sXidPBrTD3R9a3jFUU2ByR%2F4MQB%2BTv5jEzKeYJagduU08c0XAMb7SR01lQhDGT8eOcOvVXAaPdN0CrOqYjlhKLg%2FQ0K7isK3TUEMpz6RMmVFpTBLixpNwmN1NZRBK0WiPvcfpggRWKSMxY3bJu4FIV9sfM7fLTUFnzx4wLA7UFU%2BT5TCPCJypsqr37CHih03xJYelzQV%2FZoesDZM1vNP4bMOoTadfxNwm6N4dfhn2ahfrjAAl4pKZu9ANk4iFf6YdYS3RieqgNVCKFhvm3lG4xBHmuLQ6l0qu4xaVQX4mGD96%2BASWQQbUJYoJjWGs%2Bgicp%2FhHq5ez6F89R7Uls9%2FR2DIDHijoXvF5%2BFOUjXZhpv1yDv03o958t%2FwshLXjg%2FSaCljNY52S28BiJ9E59r7ufUZvr1BdiYQIszABItWMh0gB2zIoAhbP2ZYMPmakL8GOqUBaP%2BAyeVsC5G2kjKpaWxlo5jXN4FXDIfIadRbs8oSoGlg41DMoynvTn4Hs3PP1vjawXq4sLSqRhUO2RV39O9yJO6w%2BRLjJeQS03Vjm69YIJuCQ9GYL1jfW7oEBV8Q%2B3OdlSLCNAnf1y3KfMb6M2BJKVYMfxWftnlX4AuArHL4RFth4sAKh%2FfebDePwaGWkNzBds4AF2B2rw7sqUK%2BcbmfPW%2BsqkbE&X-Amz-Signature=609897b8087a508db05d2a76d566bdfc66c372925758b7e3f4fe99ef91840d33&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFQ27UG%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCckWS%2FKnQ4z%2B5V57ixTNRniPZwLXISWCmxz6PtcbGn8wIgZ25ESxgdJxCCyHplM3g4lSxJOnkJd4Edhpj95ZBu9Cwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDA31S6BBWQIaXFaIzSrcA7Y8F1jghfwxPnsyXGzFP8Mw60AkUtoYW%2Fnrl8mc6MkNsKTyzT7Eo9ufV7Ptx6CtNN%2BS1%2B%2Bdjao1mc2TFjjQVi5jjf3GLkQ%2F119RtdAMUMQehWX05m0i8gmc%2FXIbOVkIy2GyH%2Bof1No0HsAy2XTUgC70a3KzbOCmLFpzWa3FqheU%2F%2FjwSTU%2F8aOmBPSqmkK58XS3sXidPBrTD3R9a3jFUU2ByR%2F4MQB%2BTv5jEzKeYJagduU08c0XAMb7SR01lQhDGT8eOcOvVXAaPdN0CrOqYjlhKLg%2FQ0K7isK3TUEMpz6RMmVFpTBLixpNwmN1NZRBK0WiPvcfpggRWKSMxY3bJu4FIV9sfM7fLTUFnzx4wLA7UFU%2BT5TCPCJypsqr37CHih03xJYelzQV%2FZoesDZM1vNP4bMOoTadfxNwm6N4dfhn2ahfrjAAl4pKZu9ANk4iFf6YdYS3RieqgNVCKFhvm3lG4xBHmuLQ6l0qu4xaVQX4mGD96%2BASWQQbUJYoJjWGs%2Bgicp%2FhHq5ez6F89R7Uls9%2FR2DIDHijoXvF5%2BFOUjXZhpv1yDv03o958t%2FwshLXjg%2FSaCljNY52S28BiJ9E59r7ufUZvr1BdiYQIszABItWMh0gB2zIoAhbP2ZYMPmakL8GOqUBaP%2BAyeVsC5G2kjKpaWxlo5jXN4FXDIfIadRbs8oSoGlg41DMoynvTn4Hs3PP1vjawXq4sLSqRhUO2RV39O9yJO6w%2BRLjJeQS03Vjm69YIJuCQ9GYL1jfW7oEBV8Q%2B3OdlSLCNAnf1y3KfMb6M2BJKVYMfxWftnlX4AuArHL4RFth4sAKh%2FfebDePwaGWkNzBds4AF2B2rw7sqUK%2BcbmfPW%2BsqkbE&X-Amz-Signature=bb4e945a477bb35a967591333ac0d5990955a011226cda9d56d0890b2a6b4634&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
