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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EXJ2DLE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCdgmy%2FDe2%2FgNGVLikiB7g%2Fe1NV6ZKg6aAd3O1uNAmhrwIhAODv98OL7NkaJaYkUgubtOFq0V5tIpDPmJJL5oo3UAfIKv8DCGMQABoMNjM3NDIzMTgzODA1IgyZcIvU8wbcYnE7hAUq3AOOs09GyzeZtcVG0TUHhFmfmqFcYR8CMvDl1Da%2BdUeAYA5AJDkL%2BRxJpQvhv%2Ff6dBEwTg1jARkdVKMm7syr2wwpFplHmYpWJ80Z8Jw5e1rN2oANTWb0aq0c3DD%2FVM2GvnfGa88%2FkLBiJ1a3idbyyB%2F947tQQG118l8Y9vXaR75JvCzRNs3qwpUmNQdVrAGCkcv0Cc%2BLhzSZMNWOKD0f6RAK3PwUDOJLDpBFVRBflBzuOIgRxHwFmLI2RFVzs7ucf99L3ev1PIxKrTOgG53JKckDfnmKk1cnfbdQnZKPSNHBq3OOo21Gp%2B3gEQ9emmPH8QFlsnQiyG6z2KHHCWY%2FK38qlOFINUeKoBbjckhQKdtSxjtWmeCVMK%2BnzbGOUSeDrT31ubFE8OpP0WlFrBuM9xZBye2YxUmX4BGaaW3vR4pN3IVhCJBTgxaPfhfKqxSg8wPy42j%2FonxmNrbqFh1Wd6bTe%2FtQnxDbPJgqxNJHQvAw%2F31APV9ExXA7PqxRqU2YdXgTPw3ZYdWbGa%2FsP9BrTZ%2BZ%2FRRxzB4qavZlh7vZrlaXLYIxsGvVAqo8%2Bhiafpi9heYK3SnHKevHwCmVkUBmruk3payQrXhE2UsR69A2UI1Dd%2F1ITGv0M4m2CNCsjDD3grK%2BBjqkASF0G%2BFOiMxQv65RhMpr5VUtXLwNzC5iy7QTRVNXQZt214k2lPZ%2Fp6QFQsroYXwPVbRNtw1JEtdQTjWFIybfi4tUaBa886%2FGh9oLaczg40UJgfHQn0wIxqK%2B71UK18W6AJ%2FhxPu1x2WY%2FaHeWvlL0ORgV3ZNvx7Jxyn96gFAKmgopIDuQ%2FlCF8FSlZkycYNkIFlLE%2FME63lFk%2FQijSu1lt86bUXk&X-Amz-Signature=85a05bdb99e071a14dffed7dfd81a91e7b3389e9abb5074bbb3a80bbfd1f99ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EXJ2DLE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCdgmy%2FDe2%2FgNGVLikiB7g%2Fe1NV6ZKg6aAd3O1uNAmhrwIhAODv98OL7NkaJaYkUgubtOFq0V5tIpDPmJJL5oo3UAfIKv8DCGMQABoMNjM3NDIzMTgzODA1IgyZcIvU8wbcYnE7hAUq3AOOs09GyzeZtcVG0TUHhFmfmqFcYR8CMvDl1Da%2BdUeAYA5AJDkL%2BRxJpQvhv%2Ff6dBEwTg1jARkdVKMm7syr2wwpFplHmYpWJ80Z8Jw5e1rN2oANTWb0aq0c3DD%2FVM2GvnfGa88%2FkLBiJ1a3idbyyB%2F947tQQG118l8Y9vXaR75JvCzRNs3qwpUmNQdVrAGCkcv0Cc%2BLhzSZMNWOKD0f6RAK3PwUDOJLDpBFVRBflBzuOIgRxHwFmLI2RFVzs7ucf99L3ev1PIxKrTOgG53JKckDfnmKk1cnfbdQnZKPSNHBq3OOo21Gp%2B3gEQ9emmPH8QFlsnQiyG6z2KHHCWY%2FK38qlOFINUeKoBbjckhQKdtSxjtWmeCVMK%2BnzbGOUSeDrT31ubFE8OpP0WlFrBuM9xZBye2YxUmX4BGaaW3vR4pN3IVhCJBTgxaPfhfKqxSg8wPy42j%2FonxmNrbqFh1Wd6bTe%2FtQnxDbPJgqxNJHQvAw%2F31APV9ExXA7PqxRqU2YdXgTPw3ZYdWbGa%2FsP9BrTZ%2BZ%2FRRxzB4qavZlh7vZrlaXLYIxsGvVAqo8%2Bhiafpi9heYK3SnHKevHwCmVkUBmruk3payQrXhE2UsR69A2UI1Dd%2F1ITGv0M4m2CNCsjDD3grK%2BBjqkASF0G%2BFOiMxQv65RhMpr5VUtXLwNzC5iy7QTRVNXQZt214k2lPZ%2Fp6QFQsroYXwPVbRNtw1JEtdQTjWFIybfi4tUaBa886%2FGh9oLaczg40UJgfHQn0wIxqK%2B71UK18W6AJ%2FhxPu1x2WY%2FaHeWvlL0ORgV3ZNvx7Jxyn96gFAKmgopIDuQ%2FlCF8FSlZkycYNkIFlLE%2FME63lFk%2FQijSu1lt86bUXk&X-Amz-Signature=240df507b22a18c30fee0468dc37a5d259c9906e7dc0a1f5d4a4de87039265ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
