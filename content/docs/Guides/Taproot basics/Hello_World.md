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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULN7Y3P%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICRQb1MhoGcNLI7ngLpRQ2YWssIQHvLaCeF10hf371MkAiEAiWcS%2BvKBTFQ8oov4RQ%2B0FLZIhaTZG52YwRSuJHNdHOYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKec6s%2FH3y3tZpPKYCrcA65I9mnPNfoupzYbtrfRvklwhFRatBCmOPfCtHVKBKPP6vrpr1v6YrrNQiq0cDxVqXlmYyTIPiLzxunPr07bbzJwMBLX343%2BYSwEL13YCcgZZj9Ne1rcchh%2BQJTtvYIAHMdPTZYymdiICfAK5CEHcCm8iVsAsjZuspgcpHc3XcYZtVm%2BNjuHS%2FeJyWg1Ii68Je%2BxgJ88cMtScGZMcd%2F3ugwA%2FBV08FRJmuoq0ERKb27%2BkUmR0%2FgJ%2Fv0XFwf%2F3XUVhjl2Qv8ssAZRYcZ5jQed6J8GwsZyupqBHbIidVqPy7no24oXHR5k%2FLy0YOuDPgANmu9fYLy%2FiFEzSRmmJLlFbeipxt6fKWwHHI6fgTj2iTyURgLC2kiKvCL1ra7TtUajRVgNFoAaDTAOPAwO%2BZ8fG2uD20vH7ngfAsF5qIFbJf7bGFWb9LMy9wyUnGbibPJ3kWF%2BKatlo%2FGvsIfU6ML4z3nRQi6AJVcUWg79V52xiPgGMUuQCIl4tUXOoV4d73xfyYczWnojI5xCjG0YS%2BwBC4PDt78AsumQE2NRsEWTKJQfxB%2Fips2EPmgT6etdy67OcZcKd2RJ99BMV23yi5Kaidk69Q7Sgu%2Bs6iL8Rd%2F%2BKCOKRmIWD1MlanKA29s7MLOF%2FcEGOqUBqfCbKMJI19Zss%2Fiw4n%2FbS8RbV%2BikMHD95FAqz7gOU3OXIf%2FnqyVifQ2ObeQ0qLFaLUCRhPwLC2WCqe%2F%2F8IeQESJVwrIg1PW2lcBfTeW9k4bHVeE%2FNWSrRDcAcUcj02B5hn98YVjO%2BO43488qgnem5WM1x4Z7omRpuwECNd6ZenvtwxvnARtZlEUfAzNM8iQkXEGwSAV4zPVsfyKYtCN%2FKrQHd40C&X-Amz-Signature=b5858892a012e8934958de33cd7fb79a90fc6f219441be4db98c606e676866e5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULN7Y3P%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICRQb1MhoGcNLI7ngLpRQ2YWssIQHvLaCeF10hf371MkAiEAiWcS%2BvKBTFQ8oov4RQ%2B0FLZIhaTZG52YwRSuJHNdHOYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKec6s%2FH3y3tZpPKYCrcA65I9mnPNfoupzYbtrfRvklwhFRatBCmOPfCtHVKBKPP6vrpr1v6YrrNQiq0cDxVqXlmYyTIPiLzxunPr07bbzJwMBLX343%2BYSwEL13YCcgZZj9Ne1rcchh%2BQJTtvYIAHMdPTZYymdiICfAK5CEHcCm8iVsAsjZuspgcpHc3XcYZtVm%2BNjuHS%2FeJyWg1Ii68Je%2BxgJ88cMtScGZMcd%2F3ugwA%2FBV08FRJmuoq0ERKb27%2BkUmR0%2FgJ%2Fv0XFwf%2F3XUVhjl2Qv8ssAZRYcZ5jQed6J8GwsZyupqBHbIidVqPy7no24oXHR5k%2FLy0YOuDPgANmu9fYLy%2FiFEzSRmmJLlFbeipxt6fKWwHHI6fgTj2iTyURgLC2kiKvCL1ra7TtUajRVgNFoAaDTAOPAwO%2BZ8fG2uD20vH7ngfAsF5qIFbJf7bGFWb9LMy9wyUnGbibPJ3kWF%2BKatlo%2FGvsIfU6ML4z3nRQi6AJVcUWg79V52xiPgGMUuQCIl4tUXOoV4d73xfyYczWnojI5xCjG0YS%2BwBC4PDt78AsumQE2NRsEWTKJQfxB%2Fips2EPmgT6etdy67OcZcKd2RJ99BMV23yi5Kaidk69Q7Sgu%2Bs6iL8Rd%2F%2BKCOKRmIWD1MlanKA29s7MLOF%2FcEGOqUBqfCbKMJI19Zss%2Fiw4n%2FbS8RbV%2BikMHD95FAqz7gOU3OXIf%2FnqyVifQ2ObeQ0qLFaLUCRhPwLC2WCqe%2F%2F8IeQESJVwrIg1PW2lcBfTeW9k4bHVeE%2FNWSrRDcAcUcj02B5hn98YVjO%2BO43488qgnem5WM1x4Z7omRpuwECNd6ZenvtwxvnARtZlEUfAzNM8iQkXEGwSAV4zPVsfyKYtCN%2FKrQHd40C&X-Amz-Signature=76d9ca9276f75498bd383789f9ea1ac882d725ce7ba863f09425ba0101b566bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
