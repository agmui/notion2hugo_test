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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFVNJFVF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsO0uOWvxrye5lSN6GryiRJfBWqs%2B0lg2caCCWNHVUFAiAk%2FnhCn2Uj0%2F0BA4nAw6ZT30HQ80OK4EQx%2BFpvtl5VYSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbGpsUSbHR75VfESgKtwDUbyFWkXSt9%2BrLsx8bKvhPzw%2Fkxd4wTkZWn1xq2QWXxBx1G4NQxpSY1VSSQgAnxatyO5Jgpe%2BUZ282zOqxmf4odP%2BYTjoqyoXKxgTamwFcdDKd%2BouB4ToAQX4hKVrqwrjEFQf8Qrxk5BWGnRy77xusPrFvULdQGMGmfHDHSyB4akxV9xZNI%2BuGm7CftfoehCNt%2B6jlJHPuZKGUOXBnJKLNLpStRqEaKYUGanvjliacpY6RlwZHUPhLAe7WkUdnv7PYVlsam6C%2F2pufevLxuNoJtQTj%2F90lf0y53MD0%2F75%2FIODSCayTmm7G8ZxaS8dIY5zwPrs%2BfNO91yQHp34dVLctwUsn5L%2F50vKVbFKzjKZXFC1mI1W0fKdy0n6viHXyTGdAR%2FSEwhrx4sFoPP1YYblmswG6JY70IyZTqij0cWluoAzebJ9%2FqjMOyqZzr0JUBovM7DI%2F3Gi%2FuDQQEmFsoCwmgzIPqIVd%2BKFaLZ1R8ny%2B6nhssTiwNYqBIsJ%2FF%2F1KkN8hJQ%2F6yVgoAk5soWkarJ6BsjfVcUgcmzK65pFcHdF42Fd7pMQmGgsgjreAWPRLKzc8vfqhawXW5uCgOEws%2BFiJwZCFvNrjdJAGut3pqJluLJ%2Ff0T8z4gk6D36RjEwzdbzwwY6pgFOmi6%2Fv3qBf8WL2A3wJlGxLlyOPqmeEHcxM4jKXWowqcelcuxtm%2BuJMoQuo6xJNXogLKUss0hRNl3pwHTOhpqdcjBxPdybcIuzcFF%2FO2Mb8p4juQHYN6C1TPIcVKNVNBJiTIgX%2BUxpgS%2FmKI7vH4C4Ff8XLOjP5eR%2BYammmfR4DCpqQlR1t967H5LAl8jzMdOoWoSSxyH82cBZrr%2BXivoyyb6wQmut&X-Amz-Signature=93168edb3733959ba12954bd78fc710880cf0c1cc58122ef59c96d32cc0cae3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFVNJFVF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsO0uOWvxrye5lSN6GryiRJfBWqs%2B0lg2caCCWNHVUFAiAk%2FnhCn2Uj0%2F0BA4nAw6ZT30HQ80OK4EQx%2BFpvtl5VYSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbGpsUSbHR75VfESgKtwDUbyFWkXSt9%2BrLsx8bKvhPzw%2Fkxd4wTkZWn1xq2QWXxBx1G4NQxpSY1VSSQgAnxatyO5Jgpe%2BUZ282zOqxmf4odP%2BYTjoqyoXKxgTamwFcdDKd%2BouB4ToAQX4hKVrqwrjEFQf8Qrxk5BWGnRy77xusPrFvULdQGMGmfHDHSyB4akxV9xZNI%2BuGm7CftfoehCNt%2B6jlJHPuZKGUOXBnJKLNLpStRqEaKYUGanvjliacpY6RlwZHUPhLAe7WkUdnv7PYVlsam6C%2F2pufevLxuNoJtQTj%2F90lf0y53MD0%2F75%2FIODSCayTmm7G8ZxaS8dIY5zwPrs%2BfNO91yQHp34dVLctwUsn5L%2F50vKVbFKzjKZXFC1mI1W0fKdy0n6viHXyTGdAR%2FSEwhrx4sFoPP1YYblmswG6JY70IyZTqij0cWluoAzebJ9%2FqjMOyqZzr0JUBovM7DI%2F3Gi%2FuDQQEmFsoCwmgzIPqIVd%2BKFaLZ1R8ny%2B6nhssTiwNYqBIsJ%2FF%2F1KkN8hJQ%2F6yVgoAk5soWkarJ6BsjfVcUgcmzK65pFcHdF42Fd7pMQmGgsgjreAWPRLKzc8vfqhawXW5uCgOEws%2BFiJwZCFvNrjdJAGut3pqJluLJ%2Ff0T8z4gk6D36RjEwzdbzwwY6pgFOmi6%2Fv3qBf8WL2A3wJlGxLlyOPqmeEHcxM4jKXWowqcelcuxtm%2BuJMoQuo6xJNXogLKUss0hRNl3pwHTOhpqdcjBxPdybcIuzcFF%2FO2Mb8p4juQHYN6C1TPIcVKNVNBJiTIgX%2BUxpgS%2FmKI7vH4C4Ff8XLOjP5eR%2BYammmfR4DCpqQlR1t967H5LAl8jzMdOoWoSSxyH82cBZrr%2BXivoyyb6wQmut&X-Amz-Signature=91dcf010745b64349e76b3027941286f672343a7cebfbd18199c4a1415efb3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
