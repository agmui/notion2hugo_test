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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSOBUO7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVlAx904dVdMGUaiGyIHGF2IYNg3YmkO%2BxaSK2mwjg0AiEA%2F47Fj%2F5H5uuiKYwIx4NFd8b2diI7DF8Gn4OTQsxcCl4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDED9b7yqBeZVgNjD8CrcAwAUYkVm6Hv3dP1jlSGdv%2BHk4bTDYWzG0STIi%2Bv0kYxBS0BeVyRzJJZTF%2FaQz3%2FfK3p%2BdMaRKT1JqJv54B7MhaJlSQM6DfJ%2FIb%2B85THpWriett4O8%2Fu7%2FYdpUQ0HSmPm%2BdOZseeM88azx53QbyTWE%2BNnS%2Bil8NAbw7ijea5zYfUewfxFBj3MiLV1mpkuGInRsO7M0AcADtKI7jqCdMKa80TpmdtDIF5M63gxe0pvSSUvrO32Cop2O%2BsT5qhTlpJbLk0mErKQNiLF9dobQEICgooUSeSXOwCPytemRe1GXww6buB%2Ffmx3BTbzDM1QdQ3haL9%2BigvYZuhovsfEuWOZkHwRNcoCKMPSpYXVw9PqeM%2BOpcsnbFIEk%2BvLJXnsHJeOkDEzp8%2B40jXxEMYcmUvAlcayWn%2BXfXRGkmdECUUuiU4v284rlw5w1um3LzNCmMHubtdO4JONvziJsolXC5vcBxmy%2FVVhET93MFY687XbBXSiB14HISQLSMA3C%2BL4JRw%2FNCov7PM42MdrfUDaZgdVfCdWu%2BbpGPk%2F5stISTf8J2m04P3ZB%2BtT3DY8ZSok6yCkKytNVxklYS1w1QwUpyWB85SZvpKHpHjvRLGqGRDogMXp75YDzkdaVqjLUCnEMIPttsAGOqUBZZe163Bso9xL2wqOXqU%2FQXm41xnDzQ5cFux7zaJeRVx%2FgASK9SltDrAhS85FH6izXsmyBvMkELndVr1TeEghKoGZ8bnCqW3Xe33IbPYXNuQxWZ5e545tG%2FtgDZnxWOodPWWOFTuulodNSGOS2sqxX91Vy9LLW1jnNbsfhOufjig3vlnbrGXFvzX7kL8SZGce65bcM7ydQFJcGpZkr5LY%2Bp%2B5C3ng&X-Amz-Signature=b000c62b9ce41e90c3696634ca79d3173d8a7f2909362985387caf0c2ab343d2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSOBUO7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVlAx904dVdMGUaiGyIHGF2IYNg3YmkO%2BxaSK2mwjg0AiEA%2F47Fj%2F5H5uuiKYwIx4NFd8b2diI7DF8Gn4OTQsxcCl4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDED9b7yqBeZVgNjD8CrcAwAUYkVm6Hv3dP1jlSGdv%2BHk4bTDYWzG0STIi%2Bv0kYxBS0BeVyRzJJZTF%2FaQz3%2FfK3p%2BdMaRKT1JqJv54B7MhaJlSQM6DfJ%2FIb%2B85THpWriett4O8%2Fu7%2FYdpUQ0HSmPm%2BdOZseeM88azx53QbyTWE%2BNnS%2Bil8NAbw7ijea5zYfUewfxFBj3MiLV1mpkuGInRsO7M0AcADtKI7jqCdMKa80TpmdtDIF5M63gxe0pvSSUvrO32Cop2O%2BsT5qhTlpJbLk0mErKQNiLF9dobQEICgooUSeSXOwCPytemRe1GXww6buB%2Ffmx3BTbzDM1QdQ3haL9%2BigvYZuhovsfEuWOZkHwRNcoCKMPSpYXVw9PqeM%2BOpcsnbFIEk%2BvLJXnsHJeOkDEzp8%2B40jXxEMYcmUvAlcayWn%2BXfXRGkmdECUUuiU4v284rlw5w1um3LzNCmMHubtdO4JONvziJsolXC5vcBxmy%2FVVhET93MFY687XbBXSiB14HISQLSMA3C%2BL4JRw%2FNCov7PM42MdrfUDaZgdVfCdWu%2BbpGPk%2F5stISTf8J2m04P3ZB%2BtT3DY8ZSok6yCkKytNVxklYS1w1QwUpyWB85SZvpKHpHjvRLGqGRDogMXp75YDzkdaVqjLUCnEMIPttsAGOqUBZZe163Bso9xL2wqOXqU%2FQXm41xnDzQ5cFux7zaJeRVx%2FgASK9SltDrAhS85FH6izXsmyBvMkELndVr1TeEghKoGZ8bnCqW3Xe33IbPYXNuQxWZ5e545tG%2FtgDZnxWOodPWWOFTuulodNSGOS2sqxX91Vy9LLW1jnNbsfhOufjig3vlnbrGXFvzX7kL8SZGce65bcM7ydQFJcGpZkr5LY%2Bp%2B5C3ng&X-Amz-Signature=3bf99fbf2b75e62cc83a66fe668e3c37040f5706c3affa096ca9a59228e0494e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
