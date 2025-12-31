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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSN4EZZ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0P3JDBW6CTERBnFJCFLmUzSkpWNzimTaH%2BMG79Spa%2BAiEA4PWTiVLcudGFqG6AvRY0Vr9rLtjlwmbIJYDILLIN%2FCAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcksHfg7%2B5P4qvvqCrcAyP3ScMsiKovgnmf%2Fk70tiXyiaN3WZNp9qES7g7mHqv6B%2BI9Pzxk2WFS9XOzoA5va6bpMX6Bwe0K4tvpQEXq5b7sAfq1ecOy%2F9O3nau4JZDQ%2FlXXTxChrzrCVV2OLgjtRDFyAZY%2BJzv5XgtEcyIrEaxin%2BI1BEjklzyzy5xU6OBoNsq2vXEuRS0mEGElCNvP2vxHf3MUWZFtGezqRXCobME0YRskFUEODKGbvZUq3ujpoDqoxvXVeGech8nWpv%2F4PZVke83h%2BHU5imnisoD4m1Y9XtrMZWQFmmC6xjujTJmKun3Hh5veFHX6nOHA6%2FJu7QS2FA0C%2BHGy0A0k2%2BN4RcFZryBWLZWmAutxP4A0%2BP1VFj1Ph6zMNd%2BEYgJzWgrpj6Fy8ijqMXw%2FYSZWvLs2W%2BVi37iRbjHtxx1V%2BBFezDOEqB4S6IMO2VTB0zeZ1ErHO0rYrrNeNXlKfxKBBcZ1g6cFh1UBw86R8siu67V0M9JHEWY4Rew9imjVlx71REIZ49AKfuVZgAkVS%2FoAIxbrykk5zAXJxbEkpYyknetaOB1zCgh0K%2BV0exLyFJ%2Fbl6ccxWElsU3SSxtv4Sg9fNTp59vfZYYZYbDk1aUz1d3qnd5GJgKsZGFJcsaz5%2FXRMOr30coGOqUBLJtM6920JZGobUaNHxynAZygc2If0kHt35m6aqDjG0d1W0wnERNZaGWgEOf88TFvyxKWkKaUy4TicUOSD6pi8Hs8kOocYBybjTlyO1CsEPOGHQFUI5y2oyD2l%2FUOhwVtf0NrCN0ziVJpmLdhHvyaR8RWnL7akGOg%2BBKMV2G2DpZmqEgF6YXMdznmvnR5V24QfeDolMtN5ixM9COEFl1U1zxqwuHU&X-Amz-Signature=6066d7c8149cb45125bb572011f1155d3724f370c31ac9030b7e09c412d87ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSN4EZZ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0P3JDBW6CTERBnFJCFLmUzSkpWNzimTaH%2BMG79Spa%2BAiEA4PWTiVLcudGFqG6AvRY0Vr9rLtjlwmbIJYDILLIN%2FCAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcksHfg7%2B5P4qvvqCrcAyP3ScMsiKovgnmf%2Fk70tiXyiaN3WZNp9qES7g7mHqv6B%2BI9Pzxk2WFS9XOzoA5va6bpMX6Bwe0K4tvpQEXq5b7sAfq1ecOy%2F9O3nau4JZDQ%2FlXXTxChrzrCVV2OLgjtRDFyAZY%2BJzv5XgtEcyIrEaxin%2BI1BEjklzyzy5xU6OBoNsq2vXEuRS0mEGElCNvP2vxHf3MUWZFtGezqRXCobME0YRskFUEODKGbvZUq3ujpoDqoxvXVeGech8nWpv%2F4PZVke83h%2BHU5imnisoD4m1Y9XtrMZWQFmmC6xjujTJmKun3Hh5veFHX6nOHA6%2FJu7QS2FA0C%2BHGy0A0k2%2BN4RcFZryBWLZWmAutxP4A0%2BP1VFj1Ph6zMNd%2BEYgJzWgrpj6Fy8ijqMXw%2FYSZWvLs2W%2BVi37iRbjHtxx1V%2BBFezDOEqB4S6IMO2VTB0zeZ1ErHO0rYrrNeNXlKfxKBBcZ1g6cFh1UBw86R8siu67V0M9JHEWY4Rew9imjVlx71REIZ49AKfuVZgAkVS%2FoAIxbrykk5zAXJxbEkpYyknetaOB1zCgh0K%2BV0exLyFJ%2Fbl6ccxWElsU3SSxtv4Sg9fNTp59vfZYYZYbDk1aUz1d3qnd5GJgKsZGFJcsaz5%2FXRMOr30coGOqUBLJtM6920JZGobUaNHxynAZygc2If0kHt35m6aqDjG0d1W0wnERNZaGWgEOf88TFvyxKWkKaUy4TicUOSD6pi8Hs8kOocYBybjTlyO1CsEPOGHQFUI5y2oyD2l%2FUOhwVtf0NrCN0ziVJpmLdhHvyaR8RWnL7akGOg%2BBKMV2G2DpZmqEgF6YXMdznmvnR5V24QfeDolMtN5ixM9COEFl1U1zxqwuHU&X-Amz-Signature=e22fbca1683d1d17f157992aa700445dfc6af187a951f4e0b3b6ec86eaca518b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
