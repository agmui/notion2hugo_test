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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7XQAZS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYXhrod7T%2FEdzX74Y6ueHz1srr0tMy85vVIIfDk588dgIhAOPutTEprDjErDXRuMpOb4D%2FyMgxHOPGViKyC3A71JNZKv8DCHwQABoMNjM3NDIzMTgzODA1Igwoq3iAmu6Wa5ZkvvIq3APOMj0P9%2FRneV%2Ff77vws2nQ97gDFSSiz6VRc15Y2CDX%2FAmWGNsdStAtWiXs8LS1yP6uByYZS5skR8PL2QIB9bPF2fpL5YrcqyBA1QdhvfyXoT9Diap1rBiaqDggYYsQoCQhnkIgWVh%2BR6zwUtmsi7XgQx5xLsF%2BEJSbXoM7pMaNR9gjbismyS%2BJRz5pPBjel2%2FEABr5IvWoYKDIUzBqKptz1YsBR2uZt6G7kN02usNhcorkeOmTm7fyOy6TbnPsQ8K0Y%2FAB46LvQOqEFwFDxiUTcvj457Blcpho2kZ5ket0sy0hXHAEX0HVwxpAddAgSIMheMiXX%2FE2ymSGyemqDUPbQyoHXWZL9sOrIRl3rP9QksSaiz2DQqfV%2BcF4BvrUt3hz9x%2BXVUYo3ySAZGfmoIS53whskCrc%2F5XlS92LM0%2BDTbEGmIvDPxGQeIfsthuAQqGKs3LEDqkOzS1vMFkmAitVA06vXtqXhcQYIH4JZkp8wwcNI4XEsIUB4Q01plD%2BYONzQNZUFLHYPJTxBjBzxhZcwOiLwto6AHmP%2Fae5mj%2Fa9NaI69Oj1QeG4W0B8M8HNQPx8u7VArNlHcOxVzJ91Fvj2dL8Bp9UhGXhlnQn5qLlKKj5zNJGmHmn%2FIBLaTCwyvvCBjqkAWdx65gx5gqJIPBlaD9%2By%2BN2EOwNJMLTmrTwLkGOK5WjqTsw8iDo8LY%2F3AB%2F3pFkcHMRtuo9cgEVbwr1jwMacLEAn9vs%2FlQtHE7eZ8xCMa4bfLWVEacXhOsviQ8sIuT5BL6Q8UpvNr3s8GUHeeNGGKMXp1HoZbSTfxINiIuu3uMC5hHgUyjqlvBLXJP0tRPkaMG5vVUHrinsyI0vRndFpLoqFTq7&X-Amz-Signature=5ef15a9c5ee7f374f3fdffaa6c1904c2c2fca1663373f90dcd50518df4f03485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7XQAZS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYXhrod7T%2FEdzX74Y6ueHz1srr0tMy85vVIIfDk588dgIhAOPutTEprDjErDXRuMpOb4D%2FyMgxHOPGViKyC3A71JNZKv8DCHwQABoMNjM3NDIzMTgzODA1Igwoq3iAmu6Wa5ZkvvIq3APOMj0P9%2FRneV%2Ff77vws2nQ97gDFSSiz6VRc15Y2CDX%2FAmWGNsdStAtWiXs8LS1yP6uByYZS5skR8PL2QIB9bPF2fpL5YrcqyBA1QdhvfyXoT9Diap1rBiaqDggYYsQoCQhnkIgWVh%2BR6zwUtmsi7XgQx5xLsF%2BEJSbXoM7pMaNR9gjbismyS%2BJRz5pPBjel2%2FEABr5IvWoYKDIUzBqKptz1YsBR2uZt6G7kN02usNhcorkeOmTm7fyOy6TbnPsQ8K0Y%2FAB46LvQOqEFwFDxiUTcvj457Blcpho2kZ5ket0sy0hXHAEX0HVwxpAddAgSIMheMiXX%2FE2ymSGyemqDUPbQyoHXWZL9sOrIRl3rP9QksSaiz2DQqfV%2BcF4BvrUt3hz9x%2BXVUYo3ySAZGfmoIS53whskCrc%2F5XlS92LM0%2BDTbEGmIvDPxGQeIfsthuAQqGKs3LEDqkOzS1vMFkmAitVA06vXtqXhcQYIH4JZkp8wwcNI4XEsIUB4Q01plD%2BYONzQNZUFLHYPJTxBjBzxhZcwOiLwto6AHmP%2Fae5mj%2Fa9NaI69Oj1QeG4W0B8M8HNQPx8u7VArNlHcOxVzJ91Fvj2dL8Bp9UhGXhlnQn5qLlKKj5zNJGmHmn%2FIBLaTCwyvvCBjqkAWdx65gx5gqJIPBlaD9%2By%2BN2EOwNJMLTmrTwLkGOK5WjqTsw8iDo8LY%2F3AB%2F3pFkcHMRtuo9cgEVbwr1jwMacLEAn9vs%2FlQtHE7eZ8xCMa4bfLWVEacXhOsviQ8sIuT5BL6Q8UpvNr3s8GUHeeNGGKMXp1HoZbSTfxINiIuu3uMC5hHgUyjqlvBLXJP0tRPkaMG5vVUHrinsyI0vRndFpLoqFTq7&X-Amz-Signature=1b0123c5dbc0361cb7e087d006d6214ea22f839469453ddc2d38a9c3f5c3a2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
