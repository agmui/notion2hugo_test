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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDD42IU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQGJIx%2F7WEqum16bmVsouNROHbJtrWo3nGuzVhqhVA5AiEAoXcb3c9UBXNO3hcv%2Fi2HBEHBW4ddN%2BQfEblpVw2C%2F%2BkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHucYpKuA%2FAWPsvaSSrcA18XjQGdz%2B3EEYXn%2FJRaYdh4djqu1CWXSr9OaEDRfH5s2xRdfUBUfYakO4REJK8EHId%2Bvdv%2BurF1JEgBlRiPbCtgwGPHjB6jc7TQ18GjqC%2Fws08Vh0WQertONIjy134kNJ4OCvwo%2BhnpaU%2FbkhB66gKVXpVMuo1SVCDK3Tr04XIO3ctL39CYl5JK6ZrqE0vzW8At5X3xOm7cdLRRPAcxuLWypUg70Jd4KyV5cTBoKHf%2BviFT8dm6NOb70%2FEHoI8d4%2BKPejm%2Bc%2BznS7ogJZYIJJXZ%2FGBXgXBPbTUjpm7GLk9Cef5MZhxrz9Ci65YI3UlmiKAJyPSsfqstmDWBxbicuUz6D1dhU83QJCf6Vx7f7bEKCpjQ%2FXQgsQEX42HWsIZlbj4kDHTYaV7FB7cJVAuPjt%2F5D9Bu80MefNdLYN6BjQ%2BfbR%2FRAsQhQ3ksqsEWfIFEhSC5%2FgIP79cjD13FIPpgAWGAPugAFp9gZXeSGFQRGdHOzFudR1Q%2F5%2BRGiROgKpP%2FkRglmSL%2BvKZ24AnnmhkwehQCocImUeTGzjW3eFmEO5eKn00xH3foeq25aqtUouAxCIBPwqp8Cr3WP7jYZa3VBl8rTaLlvranSJGsWw6jIGYOr8FYLpJRWqbDK4u0MI2I3cIGOqUBn2AYKykrymjbdNiDJEGcbCZj05PyFrwOHMNy48VQIidHz70xr2VKP8Obt1VTaXnbFyzd4gNYn8ySyrkc%2FEPM2dCi4%2B1Ed3AESX6uMav8xU0ZvrJOyUYlvLt0go0u7DNwZgrRy%2Fm4wYjnA4Beoq1tZ3liwyhbOPcJZjO%2Bi2RyxsARQVK0TB9NeeHxHxCldtzSlIPkqx3GDMFtpVA9BvmRoqqC5if8&X-Amz-Signature=37db0a4b5bb93e552b52e6eb18dabb3366021820d8a6122ee911756c45b0e6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDD42IU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQGJIx%2F7WEqum16bmVsouNROHbJtrWo3nGuzVhqhVA5AiEAoXcb3c9UBXNO3hcv%2Fi2HBEHBW4ddN%2BQfEblpVw2C%2F%2BkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHucYpKuA%2FAWPsvaSSrcA18XjQGdz%2B3EEYXn%2FJRaYdh4djqu1CWXSr9OaEDRfH5s2xRdfUBUfYakO4REJK8EHId%2Bvdv%2BurF1JEgBlRiPbCtgwGPHjB6jc7TQ18GjqC%2Fws08Vh0WQertONIjy134kNJ4OCvwo%2BhnpaU%2FbkhB66gKVXpVMuo1SVCDK3Tr04XIO3ctL39CYl5JK6ZrqE0vzW8At5X3xOm7cdLRRPAcxuLWypUg70Jd4KyV5cTBoKHf%2BviFT8dm6NOb70%2FEHoI8d4%2BKPejm%2Bc%2BznS7ogJZYIJJXZ%2FGBXgXBPbTUjpm7GLk9Cef5MZhxrz9Ci65YI3UlmiKAJyPSsfqstmDWBxbicuUz6D1dhU83QJCf6Vx7f7bEKCpjQ%2FXQgsQEX42HWsIZlbj4kDHTYaV7FB7cJVAuPjt%2F5D9Bu80MefNdLYN6BjQ%2BfbR%2FRAsQhQ3ksqsEWfIFEhSC5%2FgIP79cjD13FIPpgAWGAPugAFp9gZXeSGFQRGdHOzFudR1Q%2F5%2BRGiROgKpP%2FkRglmSL%2BvKZ24AnnmhkwehQCocImUeTGzjW3eFmEO5eKn00xH3foeq25aqtUouAxCIBPwqp8Cr3WP7jYZa3VBl8rTaLlvranSJGsWw6jIGYOr8FYLpJRWqbDK4u0MI2I3cIGOqUBn2AYKykrymjbdNiDJEGcbCZj05PyFrwOHMNy48VQIidHz70xr2VKP8Obt1VTaXnbFyzd4gNYn8ySyrkc%2FEPM2dCi4%2B1Ed3AESX6uMav8xU0ZvrJOyUYlvLt0go0u7DNwZgrRy%2Fm4wYjnA4Beoq1tZ3liwyhbOPcJZjO%2Bi2RyxsARQVK0TB9NeeHxHxCldtzSlIPkqx3GDMFtpVA9BvmRoqqC5if8&X-Amz-Signature=211e044665a630f1a952ab9008e1c156993b8c8336fd7cb0b6b3a3f1d57f3bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
