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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIFTTB7L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICclwFq%2FEmODeqygBeBWfXedUEN8Btg09vR15fxIx4OpAiAYFv62v1BKuhT0igSrdJ8YJWcnI6FrXAux1awHDTVslyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMLQhlgLegEjRdVmWzKtwDOWnoVh1qWjZWTKidctCAmzLAGeTLeIhAzTb7nNiJmNM0Qgpmv7Akz%2BTZJh7TwMf237Qt9gPXxriYWXr%2FWqpKZaICT0RjeE9Br4ijyFlMtM%2BFiMwxLNacD15AcSIbnHxE5ZNbYnbAHCmND1FT15KMNmJuA6trhbYDBis8UM679EAkQIRRbrMOa6IX%2FYYODZyCzqhzHtUw7KPzpzw5k85GW4CDc3qRqaykyF3sx%2BceBvfWXC3FIkKr48LqjvnrDEID9SMdqzguAVS9fn2XzK%2FeNw6mBv%2BMH0RIdUSkrj42FoePIbRLQB5oqx8vFUVrVUAfu3ZCaXejCp%2B3U5FO3Sc6HvVlXRbVWAaAOa5jjGcP5wjajX6Ma2BvgQ4bssQOGLlwUCDEQTz%2FuA1xp%2FF8iRDuCeEnUwjAZ00b5b8HEIRF%2FkreW4vOrZ5AIA%2FQBFd5FDH2lv90CH%2B62h%2BzepPER5zbaZOnsT6e3i35Yk0syPBQvhUz%2BXCYSn5r5y6obNBTuTT8IKYM%2FIStxNyFPzM5nTN%2FdMS%2Fc5rCOVh9avHFLKeNR8T%2B%2BFYNmgww56TM1bopfXX9T6pP%2BooAz9N8duIkqhXlbemGaA1%2Byakh%2BG71TXFYDte%2BHZ1%2BcLepwCxPDFQwtIHYvgY6pgH6%2Fw8ZvaJBMRjbgQ%2B4d%2BgoGen2U7ke7dgQEf%2FZg%2FTpkkrvYMDqO0FM4K9KBL3FDI5m5hmI0%2FFVihOcxPaGO%2BLVP4JeULU%2FFsGiUy7IeMzvr85%2FSgAlH1eJgYgmFM8CjKN3BQlZ4OXdt1TT2kAn1Q8dz7EPDKB3zIYc4dI6CHvTronGpAu0VjOFx6HAgdZJ1aBnDgQPcoGssJSOP4Tx15aTCJwJBu5y&X-Amz-Signature=fecdfee095ae4cf20c27403f5386ce2f62c9ae864b4e2c687be42d9a79fa5e11&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIFTTB7L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICclwFq%2FEmODeqygBeBWfXedUEN8Btg09vR15fxIx4OpAiAYFv62v1BKuhT0igSrdJ8YJWcnI6FrXAux1awHDTVslyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMLQhlgLegEjRdVmWzKtwDOWnoVh1qWjZWTKidctCAmzLAGeTLeIhAzTb7nNiJmNM0Qgpmv7Akz%2BTZJh7TwMf237Qt9gPXxriYWXr%2FWqpKZaICT0RjeE9Br4ijyFlMtM%2BFiMwxLNacD15AcSIbnHxE5ZNbYnbAHCmND1FT15KMNmJuA6trhbYDBis8UM679EAkQIRRbrMOa6IX%2FYYODZyCzqhzHtUw7KPzpzw5k85GW4CDc3qRqaykyF3sx%2BceBvfWXC3FIkKr48LqjvnrDEID9SMdqzguAVS9fn2XzK%2FeNw6mBv%2BMH0RIdUSkrj42FoePIbRLQB5oqx8vFUVrVUAfu3ZCaXejCp%2B3U5FO3Sc6HvVlXRbVWAaAOa5jjGcP5wjajX6Ma2BvgQ4bssQOGLlwUCDEQTz%2FuA1xp%2FF8iRDuCeEnUwjAZ00b5b8HEIRF%2FkreW4vOrZ5AIA%2FQBFd5FDH2lv90CH%2B62h%2BzepPER5zbaZOnsT6e3i35Yk0syPBQvhUz%2BXCYSn5r5y6obNBTuTT8IKYM%2FIStxNyFPzM5nTN%2FdMS%2Fc5rCOVh9avHFLKeNR8T%2B%2BFYNmgww56TM1bopfXX9T6pP%2BooAz9N8duIkqhXlbemGaA1%2Byakh%2BG71TXFYDte%2BHZ1%2BcLepwCxPDFQwtIHYvgY6pgH6%2Fw8ZvaJBMRjbgQ%2B4d%2BgoGen2U7ke7dgQEf%2FZg%2FTpkkrvYMDqO0FM4K9KBL3FDI5m5hmI0%2FFVihOcxPaGO%2BLVP4JeULU%2FFsGiUy7IeMzvr85%2FSgAlH1eJgYgmFM8CjKN3BQlZ4OXdt1TT2kAn1Q8dz7EPDKB3zIYc4dI6CHvTronGpAu0VjOFx6HAgdZJ1aBnDgQPcoGssJSOP4Tx15aTCJwJBu5y&X-Amz-Signature=01961ea2e6be0e2a8d97e7e6b6f604379cfaca9c1588619d91a67451f8a4989f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
