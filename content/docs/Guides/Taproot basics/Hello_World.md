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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQICNACM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDU9PJXw6eCjkp7A68FSyln01GfqCrjxJ%2BGMSx8TjzOnAiAIPZgb23S6IqAPKvofMwBwpbYeF0BxMJx7eNa%2ByVDJeiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS5qBpD7kShxvUlnVKtwD3DfQVEpO6Jeii83kY0PxmmNk2ML8R6Sbg5AaTVBdq9ZSckYMlaIrGYu0c7dZA6xPPpc4ZmOV0FffRYvHIyRjs0tp58LgTgx%2FoPSLEd8n3Qaf8xIY5lPq8WWWHPStwQusEpievo0BYUjpJRO2Eo6cx9jFsJFaLFO2FgLFtBGfID0NbYfxFdFZ4lh8V6LtUAwEPGkcdUvQzwrQi35iG%2F8EJci70rvPHUQviN5iH9MMiiOqFZPCpTTpIrIGqXU2AB%2BF3xZXTSka3zTXmO21in%2Fkz8fqP6zdqk0G0nxJDTUtxCqKJeSPy%2FWkote0SNwHoSTofPOH%2BKHNELTAxC6gWL3GwW09f4TulQJYnyCP31qZEmESCrra6Y%2FPFb%2BCRz%2BsHnvZyjQ9DESaJ2uQ%2F8X0VrUDLfqEnSa5iaOjqPXTj91Uv1Ic0XrEVJJdTtfY%2BSVL90jqKGKECz7xc8Lyn4z8szN%2Bz%2B2tD08Hkyb9vPrx2x2rCYdmFINJHU4FMv%2BwEfJgfWjHna6FrAvbk2HhbPzWCAhBuT3v6BeYzwblKj%2BnNPUz4pQQ67c1BvDCYRM5dBFaF5j%2FUnBqwdsh%2Fr7PkayQaYZL2CpUzN1w7qYRnz%2F0MGh9WPeWwBRC8%2BKfPkHuimow442PwQY6pgGbSvLqr%2Fi368C8M3%2BbVESB1Unlt0MX70Jg1g6aBCQt2fE7jcltc87gBVclAnTzNEWwzTtDcBg7VGV8wGnMIRrwpb0wKCEn2fdyK0mKkKMQZFP9HSc%2F0klad1kGMhmQVurubtzdhy04CbQjbQ6m90DMLQRyVXkfbH0%2F006V8UltndOtqc9PKeyWx3%2BdjtPV5SrtUAwF%2By2aLvP4hK1WV67tW957kc4H&X-Amz-Signature=9fd390d1050beb48d45b3594cb420bf37537fef652e014823d7cff3e9ac66223&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQICNACM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDU9PJXw6eCjkp7A68FSyln01GfqCrjxJ%2BGMSx8TjzOnAiAIPZgb23S6IqAPKvofMwBwpbYeF0BxMJx7eNa%2ByVDJeiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS5qBpD7kShxvUlnVKtwD3DfQVEpO6Jeii83kY0PxmmNk2ML8R6Sbg5AaTVBdq9ZSckYMlaIrGYu0c7dZA6xPPpc4ZmOV0FffRYvHIyRjs0tp58LgTgx%2FoPSLEd8n3Qaf8xIY5lPq8WWWHPStwQusEpievo0BYUjpJRO2Eo6cx9jFsJFaLFO2FgLFtBGfID0NbYfxFdFZ4lh8V6LtUAwEPGkcdUvQzwrQi35iG%2F8EJci70rvPHUQviN5iH9MMiiOqFZPCpTTpIrIGqXU2AB%2BF3xZXTSka3zTXmO21in%2Fkz8fqP6zdqk0G0nxJDTUtxCqKJeSPy%2FWkote0SNwHoSTofPOH%2BKHNELTAxC6gWL3GwW09f4TulQJYnyCP31qZEmESCrra6Y%2FPFb%2BCRz%2BsHnvZyjQ9DESaJ2uQ%2F8X0VrUDLfqEnSa5iaOjqPXTj91Uv1Ic0XrEVJJdTtfY%2BSVL90jqKGKECz7xc8Lyn4z8szN%2Bz%2B2tD08Hkyb9vPrx2x2rCYdmFINJHU4FMv%2BwEfJgfWjHna6FrAvbk2HhbPzWCAhBuT3v6BeYzwblKj%2BnNPUz4pQQ67c1BvDCYRM5dBFaF5j%2FUnBqwdsh%2Fr7PkayQaYZL2CpUzN1w7qYRnz%2F0MGh9WPeWwBRC8%2BKfPkHuimow442PwQY6pgGbSvLqr%2Fi368C8M3%2BbVESB1Unlt0MX70Jg1g6aBCQt2fE7jcltc87gBVclAnTzNEWwzTtDcBg7VGV8wGnMIRrwpb0wKCEn2fdyK0mKkKMQZFP9HSc%2F0klad1kGMhmQVurubtzdhy04CbQjbQ6m90DMLQRyVXkfbH0%2F006V8UltndOtqc9PKeyWx3%2BdjtPV5SrtUAwF%2By2aLvP4hK1WV67tW957kc4H&X-Amz-Signature=93fb2e5be19ed54ff5282608c30f82f83cd0df65cd2042a546475efcf794044d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
