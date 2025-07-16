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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AC2KP7L%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFcDfZ0bgzl4ULMhefpqWCcEhvtFQ4xGdxDQEKD3BxLEAiEAzx0jTO%2BnxCBStNXovE9of7XG4RKDoOlqQZ0rbNbrfVYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBX9LcZWwyIX0hQOtCrcAzFLynN%2FCevo6yl9y%2FkGKLxFo1SSk7ro4KTiPOvseJISc0ncvilUTrDJG9kgFB10NzruQtQKomOomb0sLtGxMHxB9lm%2BUYL6b%2Bftug3N0U0ZZgqiV5P2kQjZUPQ0ikNQm%2FRCGzGWCTgXN2Ru0Cl0DMwTLBlhHAEBowQP20mXkOcmb%2BYCFQiK%2B2hAg5TIsF%2F7xkoHWl7OdvVOV1HXN%2FqxWV05QHXYPL3%2FgSZvzbWpAZbbaeSpJ4HBgH4iQLihG%2FGI%2BAZk7dQAE%2BDULHF0%2ByFCLqWSwQFKr%2BviQYBbv9iEFdMw5auXlHWH2oVlKZ7wKYWATJYQ%2BwMLvQ4TI3kdZVH9GR0ZXuG1IaLEs%2Fq0rYmG1Z7vB3haXyvbIRQ1IRagGVmAXUhJWXD7Ow3xgrGATEA60zwiodc5brQrYKwhnhg8NqBG4BExqABaf9JdXhPTLmLciz52AUHS1YnlVSqqq3ORTHRQbLFnAiBZBLbyQ%2BNhBuzaqDluNSRRWwlrRXRVoRtnWoulYWQIokxmjwiefPLcss9p%2FIdlc3umV32Lh3TdrDb70uZ8eV8lvLZeNfx9MzmNCH0xvL3NuOv3Nk%2BbKv1fRTU6kJ%2BM1qpeXTkwX%2Fi6MkckgkC%2BSmaUN5%2BOJoj1MMfd3MMGOqUBTQ70ntE4Y%2BgRhLVUZJHDeNMmy4b%2FT%2FRfQZbuaaEegz3gVY3Lr%2BLrbB1GjIVVi947E9ikTJnzzjgYtBVHMIqv7Kf0h97Rgb15QZ5nSguW2OMB8TIisC6YHZNvN62Ic4CmapbEobqQkpLhk8EVal8EPPZylqfOhqBD%2FP0nQ%2FEyXk0DG8yAmdZGlEKbi%2F4vYj6GE2cIiekLMLoPdOyQ25rNfvrJAl1j&X-Amz-Signature=13cedf6b1a88b4b4abfeedaccf1c7069246ecd67731cbdf71a86b5f00a6e28a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AC2KP7L%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFcDfZ0bgzl4ULMhefpqWCcEhvtFQ4xGdxDQEKD3BxLEAiEAzx0jTO%2BnxCBStNXovE9of7XG4RKDoOlqQZ0rbNbrfVYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBX9LcZWwyIX0hQOtCrcAzFLynN%2FCevo6yl9y%2FkGKLxFo1SSk7ro4KTiPOvseJISc0ncvilUTrDJG9kgFB10NzruQtQKomOomb0sLtGxMHxB9lm%2BUYL6b%2Bftug3N0U0ZZgqiV5P2kQjZUPQ0ikNQm%2FRCGzGWCTgXN2Ru0Cl0DMwTLBlhHAEBowQP20mXkOcmb%2BYCFQiK%2B2hAg5TIsF%2F7xkoHWl7OdvVOV1HXN%2FqxWV05QHXYPL3%2FgSZvzbWpAZbbaeSpJ4HBgH4iQLihG%2FGI%2BAZk7dQAE%2BDULHF0%2ByFCLqWSwQFKr%2BviQYBbv9iEFdMw5auXlHWH2oVlKZ7wKYWATJYQ%2BwMLvQ4TI3kdZVH9GR0ZXuG1IaLEs%2Fq0rYmG1Z7vB3haXyvbIRQ1IRagGVmAXUhJWXD7Ow3xgrGATEA60zwiodc5brQrYKwhnhg8NqBG4BExqABaf9JdXhPTLmLciz52AUHS1YnlVSqqq3ORTHRQbLFnAiBZBLbyQ%2BNhBuzaqDluNSRRWwlrRXRVoRtnWoulYWQIokxmjwiefPLcss9p%2FIdlc3umV32Lh3TdrDb70uZ8eV8lvLZeNfx9MzmNCH0xvL3NuOv3Nk%2BbKv1fRTU6kJ%2BM1qpeXTkwX%2Fi6MkckgkC%2BSmaUN5%2BOJoj1MMfd3MMGOqUBTQ70ntE4Y%2BgRhLVUZJHDeNMmy4b%2FT%2FRfQZbuaaEegz3gVY3Lr%2BLrbB1GjIVVi947E9ikTJnzzjgYtBVHMIqv7Kf0h97Rgb15QZ5nSguW2OMB8TIisC6YHZNvN62Ic4CmapbEobqQkpLhk8EVal8EPPZylqfOhqBD%2FP0nQ%2FEyXk0DG8yAmdZGlEKbi%2F4vYj6GE2cIiekLMLoPdOyQ25rNfvrJAl1j&X-Amz-Signature=fb95398df2b0016afeda8674ef2c71fd056003cb05d06e1b8e19951e2cef2c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
