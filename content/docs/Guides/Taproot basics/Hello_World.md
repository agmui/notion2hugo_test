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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6F57DB5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCJ8p4ONR94kHpZL0sDnI3uJLToWQzSI%2F8hAZvwF0wjBgIgaNHUJL8YDI3t8ufvKkvXw1R0NyS1j%2BDf%2BM5JDTOz3tkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLzAvRxDs5AhB%2F1ziyrcA4QKr3S8pzXjnlj07EnQk04DPLFT3QZQpP0G4Of7yBrK%2FTthX0mAPKyFyDtgqpN40vVJZtfeemwQjWV6ibdWSe5oFd%2F1OOzWVp%2FsAozMErxP86id%2FMQHprT83HcMD9UrhA3uzGrenhmCZU1vAGSQkDhhI8tPWX1BWBrsvpMnlqhEcWGzEYeCiAjoXkpATKPHUfnYDhjIN1ebZChukx91ucSE7FzbRpBfXuttMw0pAwkimaOqDSULkzr%2FLehLy6BOUmbQFhzCz8twa5hGK9jirmnQqFKOOwViIeeMl4ifgdQsBht4OLZTE4sl0uNz4JQZq2euqTfmkrHXkJT6xPlXCa8B4ka79fsBwqfPeTDd3%2BY6eMTVzKdQf7fw%2BENtDt%2BreXYaxUJMaYk06sCxR0%2B6S0l9LuosHsfNRbvcojvq%2FSa2DUXqcBbhTIXDMtmlI5yKipqg42FjBewhWy0NNDllFGpsHhtDHBaefOMLg%2B3oRgw%2Bhl2iGvtqC%2BNSUOiyXLqVyfNjB7nSJBqRt0AWolqPsb8pJP2WRnbe7PBek2P3R0fHPl%2FS2Wdi5yEnUKTT%2FnfWCZWL9aSRIXaP50%2BKf0vOkazLTpAVFZ8sBger4oLjgkqmbFo8iVdaHrAgAe5DMPL048IGOqUBeXsfp%2BOp9nv7b2a70v8%2FnSoFXo1aSfOP9GmGZpX9uqy3QdEKSFrXsTSTi1cqWlgAlmO6v5Eu8hht1GveXVmADCGxyaC7ipltmwclz%2BG64L436xpMHcArfn6Btpjz85dpqyfNtO6CBhS6T7aq%2FQQXRpika7N4PnVT59e4FyGrqXs%2BrkO0vHn3eiN5h7eAaqUHoHly57AWHTIkRTFy%2F6ZGRNkSvoNC&X-Amz-Signature=5f059507ecdf44000194dab71b5b7ab610d703cd945860548fd9a9ab4842609c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6F57DB5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCJ8p4ONR94kHpZL0sDnI3uJLToWQzSI%2F8hAZvwF0wjBgIgaNHUJL8YDI3t8ufvKkvXw1R0NyS1j%2BDf%2BM5JDTOz3tkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLzAvRxDs5AhB%2F1ziyrcA4QKr3S8pzXjnlj07EnQk04DPLFT3QZQpP0G4Of7yBrK%2FTthX0mAPKyFyDtgqpN40vVJZtfeemwQjWV6ibdWSe5oFd%2F1OOzWVp%2FsAozMErxP86id%2FMQHprT83HcMD9UrhA3uzGrenhmCZU1vAGSQkDhhI8tPWX1BWBrsvpMnlqhEcWGzEYeCiAjoXkpATKPHUfnYDhjIN1ebZChukx91ucSE7FzbRpBfXuttMw0pAwkimaOqDSULkzr%2FLehLy6BOUmbQFhzCz8twa5hGK9jirmnQqFKOOwViIeeMl4ifgdQsBht4OLZTE4sl0uNz4JQZq2euqTfmkrHXkJT6xPlXCa8B4ka79fsBwqfPeTDd3%2BY6eMTVzKdQf7fw%2BENtDt%2BreXYaxUJMaYk06sCxR0%2B6S0l9LuosHsfNRbvcojvq%2FSa2DUXqcBbhTIXDMtmlI5yKipqg42FjBewhWy0NNDllFGpsHhtDHBaefOMLg%2B3oRgw%2Bhl2iGvtqC%2BNSUOiyXLqVyfNjB7nSJBqRt0AWolqPsb8pJP2WRnbe7PBek2P3R0fHPl%2FS2Wdi5yEnUKTT%2FnfWCZWL9aSRIXaP50%2BKf0vOkazLTpAVFZ8sBger4oLjgkqmbFo8iVdaHrAgAe5DMPL048IGOqUBeXsfp%2BOp9nv7b2a70v8%2FnSoFXo1aSfOP9GmGZpX9uqy3QdEKSFrXsTSTi1cqWlgAlmO6v5Eu8hht1GveXVmADCGxyaC7ipltmwclz%2BG64L436xpMHcArfn6Btpjz85dpqyfNtO6CBhS6T7aq%2FQQXRpika7N4PnVT59e4FyGrqXs%2BrkO0vHn3eiN5h7eAaqUHoHly57AWHTIkRTFy%2F6ZGRNkSvoNC&X-Amz-Signature=831e8ac1012703cbb5167a5c6bed12728790b939503292369a0a088b1a7704f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
