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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UT62R46%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBufgF9ZPTFpGDIRis2C%2F3zJP5qLdhAJgqqqJgEc6ChAiEAvyhCHKD%2Bt4p0yocI6UM9xsln2fc0QuJyGAqDNsP9u8AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAON3eIRFkT12xEYVyrcAyAJd5g0Ba9RT6nIcBUEDW3kzO9V12gH0fcQkL9YveuGbYsYEAbmwNZK3C6RMo5pU0DAXLERtF7eBiWdWyGBmzgIw87HCx%2FHUk2%2FeupqvuPON2UEPd4ph3yudqbUv4i%2FMmhU%2F6UXV2JwQRWuyA2xkM55mRen6MqIZXMaWEaW5LlAYTsPXp6kt%2Bqc%2BlyWnMvdRV5K0f8hJEXTj0T654Wg9G5Dd8laWFAo%2BeMHAfqlq5IglySxJz9B4hqCuFpKjrLV2nUUa2FX1BN%2FUswo0CrsqGj75rNI%2FBV9fGOrOKt7uY6NM1JtC3OoPIn3G4Fz37rIuJuwRuFHnewDSu6IhcABVAGK6vIbG0eoV9bDeWnMNMPCz3LYY%2B6MX0w0WzRdrf7U0Dl3%2BQnxDu%2FN4Q3BJeGN4kWhXN7cGHF%2BRD0tJ96nxR1Jlg5GhFpKvsgvX1NqKigub%2Fsj0K2oopSBCmqg2HaUriIuCPHTAbVmXu5ANK7xc3HIFfH2tcBeYCOEzdJzTA7Fluk6p1zy8LUJqT1T2UML%2BlvlzuhrwUWqbvAArtvP%2FkVNWmwiSuGg3LtR7wpIiuo%2Br2qkITahVxbjW950G4lF2Fj%2FDQM6Raln%2BIsy%2FMsj1kqud7%2FIYcee94UzbYfsMOWOpL0GOqUBnhLbRS%2F1eA5RfoaptPCSqDrRN5AbTQvTpiXOrFLh%2B2Vq4EuLOQ8HnXi0lH%2FwTeTws6riOaVg3cjkYs3SSWdvz8sxTWAuzKKUTAtN6z2IQIUFX8K2JkCuk5LveiteKah6zMMxjohCTLCJNiuvRXG1Puv9OYnXryfNgJm3i8SUfsgeX62GWCCBQwFXkwfpR41jBmr7jHPMZCwhsyHThmHK2CJOtqoj&X-Amz-Signature=ebdb8e991dace2b82645b529797603b9ece91ee1ff561159dca51ed255824201&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UT62R46%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBufgF9ZPTFpGDIRis2C%2F3zJP5qLdhAJgqqqJgEc6ChAiEAvyhCHKD%2Bt4p0yocI6UM9xsln2fc0QuJyGAqDNsP9u8AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAON3eIRFkT12xEYVyrcAyAJd5g0Ba9RT6nIcBUEDW3kzO9V12gH0fcQkL9YveuGbYsYEAbmwNZK3C6RMo5pU0DAXLERtF7eBiWdWyGBmzgIw87HCx%2FHUk2%2FeupqvuPON2UEPd4ph3yudqbUv4i%2FMmhU%2F6UXV2JwQRWuyA2xkM55mRen6MqIZXMaWEaW5LlAYTsPXp6kt%2Bqc%2BlyWnMvdRV5K0f8hJEXTj0T654Wg9G5Dd8laWFAo%2BeMHAfqlq5IglySxJz9B4hqCuFpKjrLV2nUUa2FX1BN%2FUswo0CrsqGj75rNI%2FBV9fGOrOKt7uY6NM1JtC3OoPIn3G4Fz37rIuJuwRuFHnewDSu6IhcABVAGK6vIbG0eoV9bDeWnMNMPCz3LYY%2B6MX0w0WzRdrf7U0Dl3%2BQnxDu%2FN4Q3BJeGN4kWhXN7cGHF%2BRD0tJ96nxR1Jlg5GhFpKvsgvX1NqKigub%2Fsj0K2oopSBCmqg2HaUriIuCPHTAbVmXu5ANK7xc3HIFfH2tcBeYCOEzdJzTA7Fluk6p1zy8LUJqT1T2UML%2BlvlzuhrwUWqbvAArtvP%2FkVNWmwiSuGg3LtR7wpIiuo%2Br2qkITahVxbjW950G4lF2Fj%2FDQM6Raln%2BIsy%2FMsj1kqud7%2FIYcee94UzbYfsMOWOpL0GOqUBnhLbRS%2F1eA5RfoaptPCSqDrRN5AbTQvTpiXOrFLh%2B2Vq4EuLOQ8HnXi0lH%2FwTeTws6riOaVg3cjkYs3SSWdvz8sxTWAuzKKUTAtN6z2IQIUFX8K2JkCuk5LveiteKah6zMMxjohCTLCJNiuvRXG1Puv9OYnXryfNgJm3i8SUfsgeX62GWCCBQwFXkwfpR41jBmr7jHPMZCwhsyHThmHK2CJOtqoj&X-Amz-Signature=0edf7b49efa9e29b981620fdb5fbbfd5138c05af7ee21d20d30c183a4e94c59b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
