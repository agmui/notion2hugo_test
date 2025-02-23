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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QLOZI5Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZKezpxxECXDVHHRKmFsxNdXiQMWoyPLps9%2FiQNAs37wIgLqxoDu8yibn6EaSMS54hmGmTPmalSWl439CDoSlMe5Mq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDAln98%2FxmJ5wfcxFECrcA2qcPYCphQrygLBF8Mx0nbMjsKsZJOSO%2BCpCeW%2BCW4bPaI4frvMg9Qcn8lMu3PVbpRRBs%2FW2KGcV3sIvRam94ffghkjbEJs7XBm64TmkdVDXtATKGtTdBV6ANOK1UYIf7UB4keCAvKK4iSd38Uy1qYRZjIXE6SQIIAZSIy3tv1izMNTK0UfWUDZW2Cs3Cr7sGXG2VvZojpjAVThtqK2LYZaKN%2Fc77DriKxhVXznI8%2FrRZf3lHE1%2FuzqWQHxV%2BKBMbpbJXlIjELsDTH8BgG6nh%2FKbQzB7FMdUMnFpoFCn1ZL0SI1ZfJlWISj7VniKyn1HvXDt7YQD5kTXORiDBv6GZf25TRsoOnEWBVs7HTQyMVGkjr1qrptjsIui5nnfb7qwc4ynu7x9HXxzQ0N29innE4ELnDCXwIU1Y2wEa%2F6rMGIiXUuf%2FozcI53lWpo7PsfBHEUHyQPSG%2F%2BAKHzjxi1k5a%2Bc2zqp15KMpnVAJGvhOsn7krE9lZ6Iz87UYqY%2Fi51mpfZIvy2%2BJj0XM%2FHA2JpTS5vazAfvl%2BS8f%2BLHaroWjjHaOn9rIABnmbPYjk8%2FOu%2Fhk%2B4fLjC1qid6xvjwY%2BrXX8jF2aPlR1SwgDGGJM9cqcIEg%2F8TWFvhMq6wkWGVMNrX670GOqUBtyRwdxNq4eV8sWAcaqWyNckCRMaXZfSTJmcN4z%2FwGYdArWmLNMtd0qmGJAulnIKUYmfJCcVXSM5AnOP%2BDEYEtPmyzjPraFj%2Bv8kQWIEHFMgNUYYcKk9WFTrnTiIAbc9%2B6KU30M54Lm3QR12RNMkCMZdZ9zEPUwAfnVbd6np9gL4qJWjkLMGYiTekIaCePRWK%2F6rus9pnKejXcIiGF1sfN15AIMpn&X-Amz-Signature=dc641a1b62ed3ca3820bf63d45dfd2a60f12db522fe2ab56af6c399d568f5e33&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QLOZI5Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZKezpxxECXDVHHRKmFsxNdXiQMWoyPLps9%2FiQNAs37wIgLqxoDu8yibn6EaSMS54hmGmTPmalSWl439CDoSlMe5Mq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDAln98%2FxmJ5wfcxFECrcA2qcPYCphQrygLBF8Mx0nbMjsKsZJOSO%2BCpCeW%2BCW4bPaI4frvMg9Qcn8lMu3PVbpRRBs%2FW2KGcV3sIvRam94ffghkjbEJs7XBm64TmkdVDXtATKGtTdBV6ANOK1UYIf7UB4keCAvKK4iSd38Uy1qYRZjIXE6SQIIAZSIy3tv1izMNTK0UfWUDZW2Cs3Cr7sGXG2VvZojpjAVThtqK2LYZaKN%2Fc77DriKxhVXznI8%2FrRZf3lHE1%2FuzqWQHxV%2BKBMbpbJXlIjELsDTH8BgG6nh%2FKbQzB7FMdUMnFpoFCn1ZL0SI1ZfJlWISj7VniKyn1HvXDt7YQD5kTXORiDBv6GZf25TRsoOnEWBVs7HTQyMVGkjr1qrptjsIui5nnfb7qwc4ynu7x9HXxzQ0N29innE4ELnDCXwIU1Y2wEa%2F6rMGIiXUuf%2FozcI53lWpo7PsfBHEUHyQPSG%2F%2BAKHzjxi1k5a%2Bc2zqp15KMpnVAJGvhOsn7krE9lZ6Iz87UYqY%2Fi51mpfZIvy2%2BJj0XM%2FHA2JpTS5vazAfvl%2BS8f%2BLHaroWjjHaOn9rIABnmbPYjk8%2FOu%2Fhk%2B4fLjC1qid6xvjwY%2BrXX8jF2aPlR1SwgDGGJM9cqcIEg%2F8TWFvhMq6wkWGVMNrX670GOqUBtyRwdxNq4eV8sWAcaqWyNckCRMaXZfSTJmcN4z%2FwGYdArWmLNMtd0qmGJAulnIKUYmfJCcVXSM5AnOP%2BDEYEtPmyzjPraFj%2Bv8kQWIEHFMgNUYYcKk9WFTrnTiIAbc9%2B6KU30M54Lm3QR12RNMkCMZdZ9zEPUwAfnVbd6np9gL4qJWjkLMGYiTekIaCePRWK%2F6rus9pnKejXcIiGF1sfN15AIMpn&X-Amz-Signature=1bda345f3b59744019bf2db7613a6f7a783e978aa6896d0f379fec45fd5888dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
