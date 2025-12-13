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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU34TBVJ%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEHL3PLjBW10oNL9zreImFyGNCIjHflsSYu3t0vki7w8AiEA8L5QC2BBBY%2FJKYrLo1stN0D3deCrEsK2DXNINwbRbx8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCNi3NHgUIqvApDfKSrcAwa6AjomjbHQW%2FlOtuwV9AM1xw175Bpr9zeZIzU2xuEiPsV7vpf4IL2%2BZLmDkTdxn43qSqkis4nU%2BtQsF7zJ8FYLsWweMmhH7VyHrjXgDp2G9JQPecrqzRTAIlnNBXcymHzEwLUs1%2F4ed5oCV4QXaxY0oUtKnXFVHRzEevEQ97Sn7eut09DPs4%2Bt1fY9JKneM2QXDqiwq4JWHywpzPhF8ED%2Bu2Yd5vyHeyoM5cxpiqZ8lStidlrw4MJ5hZ2j3zsRlsoZpgfIISxK4CCIdXJzj%2BXKE1oqrCZedA6iK0BXw8Ng%2Fxvm0WmcsoNIrLzFeRcWfUZckCjvUFh8yQNiblFVIik5wEE8bzMIAcqCA4JZ16cZUIxYJ%2FpoMFh2vmTF1UaGiRz4Xd%2BqDNcUyF8z36hGHF%2B3x2YWq4AymiDcRsWl0win4oq3es779Qu%2FQNGcDuc6S3Q7%2BuUKG4KyznugvpOkSqxOV8NsmFew2bE4uLU4s1P4uFNQgoGUL%2F7k7g1AWlTYk3WaaDVx1hpj4JtOkcukpyhb21qAJsvXRUqa0uChh8GNcJHQz02fMgBn%2F07ezLyleqi%2BWdRwc9OjvxrVVPOw%2F3jvEbP0dI2DFQWSI%2B%2BsOldBfFPaUll0lmYC0hXgMLr08skGOqUBAL5B9Q%2FeGmo6Aky83tFM0tUEWNeeaRwH6%2Bjfm1fdweBy8wKMvLWzKOZzwrq0nfFIkjpBIBjFbo7FM4doRh8stIWuzpZ3Ce5wUNk1n9SQUVJM7ot7xnJIQPZnPNZcrB03GWqunO1eOJAq13cPLoJbb10%2FILJBAwOyrJqc3EZvXuscP%2B0UYsFV7ARUrjTTpXYMrKg0ZJrPajlhxUFkZeRiHtlqmYqr&X-Amz-Signature=5bf80e66029d5d917efad09f0745a422f5ee222143402eb2708a735dcee0b718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU34TBVJ%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEHL3PLjBW10oNL9zreImFyGNCIjHflsSYu3t0vki7w8AiEA8L5QC2BBBY%2FJKYrLo1stN0D3deCrEsK2DXNINwbRbx8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCNi3NHgUIqvApDfKSrcAwa6AjomjbHQW%2FlOtuwV9AM1xw175Bpr9zeZIzU2xuEiPsV7vpf4IL2%2BZLmDkTdxn43qSqkis4nU%2BtQsF7zJ8FYLsWweMmhH7VyHrjXgDp2G9JQPecrqzRTAIlnNBXcymHzEwLUs1%2F4ed5oCV4QXaxY0oUtKnXFVHRzEevEQ97Sn7eut09DPs4%2Bt1fY9JKneM2QXDqiwq4JWHywpzPhF8ED%2Bu2Yd5vyHeyoM5cxpiqZ8lStidlrw4MJ5hZ2j3zsRlsoZpgfIISxK4CCIdXJzj%2BXKE1oqrCZedA6iK0BXw8Ng%2Fxvm0WmcsoNIrLzFeRcWfUZckCjvUFh8yQNiblFVIik5wEE8bzMIAcqCA4JZ16cZUIxYJ%2FpoMFh2vmTF1UaGiRz4Xd%2BqDNcUyF8z36hGHF%2B3x2YWq4AymiDcRsWl0win4oq3es779Qu%2FQNGcDuc6S3Q7%2BuUKG4KyznugvpOkSqxOV8NsmFew2bE4uLU4s1P4uFNQgoGUL%2F7k7g1AWlTYk3WaaDVx1hpj4JtOkcukpyhb21qAJsvXRUqa0uChh8GNcJHQz02fMgBn%2F07ezLyleqi%2BWdRwc9OjvxrVVPOw%2F3jvEbP0dI2DFQWSI%2B%2BsOldBfFPaUll0lmYC0hXgMLr08skGOqUBAL5B9Q%2FeGmo6Aky83tFM0tUEWNeeaRwH6%2Bjfm1fdweBy8wKMvLWzKOZzwrq0nfFIkjpBIBjFbo7FM4doRh8stIWuzpZ3Ce5wUNk1n9SQUVJM7ot7xnJIQPZnPNZcrB03GWqunO1eOJAq13cPLoJbb10%2FILJBAwOyrJqc3EZvXuscP%2B0UYsFV7ARUrjTTpXYMrKg0ZJrPajlhxUFkZeRiHtlqmYqr&X-Amz-Signature=7876cb052d287678592df8be9eeb5549de6677b14b41aa0813d17625239bc2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
