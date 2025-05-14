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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWHQAZ2Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIByq8hAveCTWn%2BlGzw1AZ0eO8jQJubNKGzpjoygisqTZAiBQfPBWQx8JLw6JzFDCs9r9aJJG9CNaQjpkk3LhJ1POlSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelPu7ycvpO5FgFmKKtwDQ%2B1qwhXYgOn0vwsTTxVUG1Ra19jBjEeXu78ruQd31zKM%2BpM1vJFZk2Ha180hcQfeeHYdPgcu5zTuGLKlqtcOk%2FsgjqnYpG9GsV%2FH3EUn4xGWrzFHVTtpHXXayZ%2FkH8psVLpL5fZStzhKAmC6scVABcN0KS%2BNQ2S00l6c3a5ACeLfjP8yPI99TyN25XSTUIgdhKR0YlVLCZIkSQc5gpNceb1KDUisMKnzjJ0T6Qmy%2FhDYviAfIpHTARMDafxiwVvbSxQRCr6qHhG4vKQ0pAQ61McWEaD9QwtLylzseAKwRecA6lhFdGWYqqG8qJvwAnUAfLrJKIHqNLFm12lDDaN8sHESD68qJHr5z%2FPiO%2B1tNPe49L02CJZYoEZjgEwtWQ3DB5Va%2F7aXyK0mbx5QOBMquDP1MOY5UzYOArAZRQPfDtkwTUA60c3he2Yp33zAcsKP2WKiSLZ%2B%2FPy459KSgbqnQP4I%2FltS%2F0eqmgqZgCIPYWKCEAYNDXgbSVB9un0aDRqslxKpQcMITcakfWumeHuoIHExqmM72%2FIR%2BFpVD%2BZf2YsPfSXWVo5SDPE76dLHi3ugj6t6inw611m5957FF9hQSXDOC5jIpPB7KWFtTmN6yVCUS1cfyyQ3ulH5iqcwtb6PwQY6pgEIiWq%2BwyKLIJil37G1NbR%2FADSGUBnJp8laQLnsCzc154qR9MKQcUOWhJOlo%2BYbe%2FgXFlAaBQchdE0PceBcaB0inBuMoAJ1i9ikA9L5WN6rZowxS594O1nWclS2108Qm4hIhZySh7Y%2BY2zV15hiY%2FVgzHb7aGYMs43iJJ2iSM9tO1W%2BjvS%2F%2BO677SHoL5Wb1DxHzhF6kt1YXNsA7mOkOIMsvmiu5UAh&X-Amz-Signature=79f095c3d2caad8099f47cb925cded4a3a72d1b9b4b41b2eebf09d8fb72f526f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWHQAZ2Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIByq8hAveCTWn%2BlGzw1AZ0eO8jQJubNKGzpjoygisqTZAiBQfPBWQx8JLw6JzFDCs9r9aJJG9CNaQjpkk3LhJ1POlSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelPu7ycvpO5FgFmKKtwDQ%2B1qwhXYgOn0vwsTTxVUG1Ra19jBjEeXu78ruQd31zKM%2BpM1vJFZk2Ha180hcQfeeHYdPgcu5zTuGLKlqtcOk%2FsgjqnYpG9GsV%2FH3EUn4xGWrzFHVTtpHXXayZ%2FkH8psVLpL5fZStzhKAmC6scVABcN0KS%2BNQ2S00l6c3a5ACeLfjP8yPI99TyN25XSTUIgdhKR0YlVLCZIkSQc5gpNceb1KDUisMKnzjJ0T6Qmy%2FhDYviAfIpHTARMDafxiwVvbSxQRCr6qHhG4vKQ0pAQ61McWEaD9QwtLylzseAKwRecA6lhFdGWYqqG8qJvwAnUAfLrJKIHqNLFm12lDDaN8sHESD68qJHr5z%2FPiO%2B1tNPe49L02CJZYoEZjgEwtWQ3DB5Va%2F7aXyK0mbx5QOBMquDP1MOY5UzYOArAZRQPfDtkwTUA60c3he2Yp33zAcsKP2WKiSLZ%2B%2FPy459KSgbqnQP4I%2FltS%2F0eqmgqZgCIPYWKCEAYNDXgbSVB9un0aDRqslxKpQcMITcakfWumeHuoIHExqmM72%2FIR%2BFpVD%2BZf2YsPfSXWVo5SDPE76dLHi3ugj6t6inw611m5957FF9hQSXDOC5jIpPB7KWFtTmN6yVCUS1cfyyQ3ulH5iqcwtb6PwQY6pgEIiWq%2BwyKLIJil37G1NbR%2FADSGUBnJp8laQLnsCzc154qR9MKQcUOWhJOlo%2BYbe%2FgXFlAaBQchdE0PceBcaB0inBuMoAJ1i9ikA9L5WN6rZowxS594O1nWclS2108Qm4hIhZySh7Y%2BY2zV15hiY%2FVgzHb7aGYMs43iJJ2iSM9tO1W%2BjvS%2F%2BO677SHoL5Wb1DxHzhF6kt1YXNsA7mOkOIMsvmiu5UAh&X-Amz-Signature=63b899ee8076c6afdda477ba8d20ececc77347f6ed7dfb4a259c7a75be619367&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
