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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CNXMIM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHNYI2V1ebOEZOpGLPsu96tHWJ4RSYJDDhJ%2F1%2F6pLqPjAiEA7fTylNGmbMyMXRL%2F2LMiefyI11T%2BxeshWPcxSDqLqWoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIGekptFq9JPbV8YyrcA%2FdY%2FjVyjPgnO5YFJo9rfeQmLZvXWeL5%2FBacIBbi6taCoAJobof%2BuqVzmmwfEwkVyEmGCRmkXVoUYDkOEQKEsABxt%2Btmh8uCp1G2KJTsryTy0Y0ohqR4YS5U4NN7MqnpUnQSeIRWNtx34RmtO4o7r%2FiQtaLn8Szi9qz0T873Hy8IeiCkRF3fffNyiNPo59uR3g5IIIMLQ%2BKWf2gdLrucs1cTzef7jdSUXEx5xZOlr81dE3DYOX9zpx30nXw4yitRXxFq74lv%2BRUc21ekM97Q4bUOTHQ0%2FPgATH%2FoI%2BHL0l8PbnCdnnB6J3%2F%2F7aoGV3YkNdiap%2FaQ6ufWULPBAoArRIUsW0maX7FHEThbK%2FBlDiY5LBcdX6V4ao%2Bq4%2BMUaZkRkLLCqUVHAnODLEsOP9yTgWnTX9IXd4P6oc1Q2VTU9LTchEiUapm3w6eGwYIvvIhQvaSTKZQvPRP8DH1yKehPZdLB9QW1kRJqfRCg5320udNDmkzczg36fRy9Ggq1keV%2B7j22sjH9zAO0Bh%2BfXUhQffZM5wHnqNEeiiLWsNAWvXXGUBqPrYLePYVJY7oF47bXBDY5FTElSUYwmMkqZ2rpFXgYKrDmS1ahElZeoMEX6ktdB6V5PgfYT3XRgbzDMJ7Yj74GOqUBDbkoadyMFE0v%2BB8kgODnredKKSDBTY%2BK3U0tFcrBY4%2BAyJvS5IEHsLPoREHRPZYkkBcjmXOyJVLE164wQTYbFWVNhELMU7MoTBwHnw8o4lCBIh6af5pgKxU7tcuJ%2B0ozNNehDkJf6EghDk%2BTp1CWpxsZXUPG7iilFgyNSiHh%2F69U3lmgPA7DGJjEDuP2dAqkgW9LIBJmav%2BN7WCOLss%2BTVn79bwq&X-Amz-Signature=1f1238688882c4b8eb78f1fdce9cf711f02aefdd31f8a3415dbcf5639002354b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CNXMIM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHNYI2V1ebOEZOpGLPsu96tHWJ4RSYJDDhJ%2F1%2F6pLqPjAiEA7fTylNGmbMyMXRL%2F2LMiefyI11T%2BxeshWPcxSDqLqWoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIGekptFq9JPbV8YyrcA%2FdY%2FjVyjPgnO5YFJo9rfeQmLZvXWeL5%2FBacIBbi6taCoAJobof%2BuqVzmmwfEwkVyEmGCRmkXVoUYDkOEQKEsABxt%2Btmh8uCp1G2KJTsryTy0Y0ohqR4YS5U4NN7MqnpUnQSeIRWNtx34RmtO4o7r%2FiQtaLn8Szi9qz0T873Hy8IeiCkRF3fffNyiNPo59uR3g5IIIMLQ%2BKWf2gdLrucs1cTzef7jdSUXEx5xZOlr81dE3DYOX9zpx30nXw4yitRXxFq74lv%2BRUc21ekM97Q4bUOTHQ0%2FPgATH%2FoI%2BHL0l8PbnCdnnB6J3%2F%2F7aoGV3YkNdiap%2FaQ6ufWULPBAoArRIUsW0maX7FHEThbK%2FBlDiY5LBcdX6V4ao%2Bq4%2BMUaZkRkLLCqUVHAnODLEsOP9yTgWnTX9IXd4P6oc1Q2VTU9LTchEiUapm3w6eGwYIvvIhQvaSTKZQvPRP8DH1yKehPZdLB9QW1kRJqfRCg5320udNDmkzczg36fRy9Ggq1keV%2B7j22sjH9zAO0Bh%2BfXUhQffZM5wHnqNEeiiLWsNAWvXXGUBqPrYLePYVJY7oF47bXBDY5FTElSUYwmMkqZ2rpFXgYKrDmS1ahElZeoMEX6ktdB6V5PgfYT3XRgbzDMJ7Yj74GOqUBDbkoadyMFE0v%2BB8kgODnredKKSDBTY%2BK3U0tFcrBY4%2BAyJvS5IEHsLPoREHRPZYkkBcjmXOyJVLE164wQTYbFWVNhELMU7MoTBwHnw8o4lCBIh6af5pgKxU7tcuJ%2B0ozNNehDkJf6EghDk%2BTp1CWpxsZXUPG7iilFgyNSiHh%2F69U3lmgPA7DGJjEDuP2dAqkgW9LIBJmav%2BN7WCOLss%2BTVn79bwq&X-Amz-Signature=9deadb968e5eb5f80af738fd193cdd5d945c38eebdca945d739150c65c183467&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
