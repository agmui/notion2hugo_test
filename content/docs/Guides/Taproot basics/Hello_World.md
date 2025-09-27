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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6EPKPI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFDhUfgSmOsCvYZSPCCkRrutLvWcxcr61uwVFkj6mt40AiBf9nxsc2d5nYp1YKXYKL7YYZcrwAHQexXrZPPiuQBb2yqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQw9rcQaX632hq9WhKtwD%2BcfsLUg2vmwkpgPVg0FDdeqswd6%2B9yo8EGk4pMESCcZzQOcJCP6p6UUcDvBursGMOVG0PMuKU%2BpgTmq7E%2BmOseZti8cV9aVZkcPFSFhmqkCI3IWTwpS9uwgo%2BvGFHXlFE8YMyiAOp7iiHBS0HhfNyHlSGo7LopvWKmcziWwnB66bnErtUZd1jCn8UkmW1iE%2FgDAqQkGcxd8%2BUHHErfyJ4AGfGUIj%2FAUhNV8IHSt5IrhJ05b1N7SgUaPfnnv%2FrMx610AdNiC8WtP1aIp%2BB2ohzDW2g7MFAc6CBXCs6lFYihcD78jd%2F0KeAAeI92JVEXhlsJN%2F0sMODA7Wv2WmB9nWqFMBDODm1y7JArN0Hd4iUvTcks7DxUdrSxWGFg6KZiV0FIjXo2Ca91aloZUGUG4vr9tS3ANc9rxjD0wYRfxWAkPJ5qMMLXz6xT6PvhjkKEDk3fZHd1mYKTUHoG83MpdEPnXzhjr%2BI%2BYzGiFQdZ1%2F5J2i7ocbtmFzlqdyVCR5reJB4vdTqBTCrvyV%2B6cOX%2B56M%2BJlAeQU0WXCmtif1uHYRFbWIaSKFwxbXBZO1ChwUDU7HjXV%2FgKma44FqvBIC%2FJjnUuRAYoDYkhTDlxegVXbeW0ntwKMu7Imh2ZlB7MwsefcxgY6pgFnhYGQUnQRRJuS7ViZ%2BUG1an4%2FfJNCepA%2FpS5nucHlrMQVdJI9GNmjirlUQpKk83Z8h1DJ2v%2FEWpeV%2B0SBpVaH52tsS80uyTCn7ByDB2GNkO5TXY8KDS%2FRQe58zV9x%2FPRQUz5hG469dS7WwiNksC5O8k4n250taJzuc0GyDZgHpIW4IC%2Ft%2BkBHbChBf%2BFmDDrV6PPl6BcMYo3B4wW5D6gTMtqRDRKC&X-Amz-Signature=163d3c21a0eac15b466773fa9c5115ac6e8e525d5b6e83fbe00a06c9c08d8a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6EPKPI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFDhUfgSmOsCvYZSPCCkRrutLvWcxcr61uwVFkj6mt40AiBf9nxsc2d5nYp1YKXYKL7YYZcrwAHQexXrZPPiuQBb2yqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQw9rcQaX632hq9WhKtwD%2BcfsLUg2vmwkpgPVg0FDdeqswd6%2B9yo8EGk4pMESCcZzQOcJCP6p6UUcDvBursGMOVG0PMuKU%2BpgTmq7E%2BmOseZti8cV9aVZkcPFSFhmqkCI3IWTwpS9uwgo%2BvGFHXlFE8YMyiAOp7iiHBS0HhfNyHlSGo7LopvWKmcziWwnB66bnErtUZd1jCn8UkmW1iE%2FgDAqQkGcxd8%2BUHHErfyJ4AGfGUIj%2FAUhNV8IHSt5IrhJ05b1N7SgUaPfnnv%2FrMx610AdNiC8WtP1aIp%2BB2ohzDW2g7MFAc6CBXCs6lFYihcD78jd%2F0KeAAeI92JVEXhlsJN%2F0sMODA7Wv2WmB9nWqFMBDODm1y7JArN0Hd4iUvTcks7DxUdrSxWGFg6KZiV0FIjXo2Ca91aloZUGUG4vr9tS3ANc9rxjD0wYRfxWAkPJ5qMMLXz6xT6PvhjkKEDk3fZHd1mYKTUHoG83MpdEPnXzhjr%2BI%2BYzGiFQdZ1%2F5J2i7ocbtmFzlqdyVCR5reJB4vdTqBTCrvyV%2B6cOX%2B56M%2BJlAeQU0WXCmtif1uHYRFbWIaSKFwxbXBZO1ChwUDU7HjXV%2FgKma44FqvBIC%2FJjnUuRAYoDYkhTDlxegVXbeW0ntwKMu7Imh2ZlB7MwsefcxgY6pgFnhYGQUnQRRJuS7ViZ%2BUG1an4%2FfJNCepA%2FpS5nucHlrMQVdJI9GNmjirlUQpKk83Z8h1DJ2v%2FEWpeV%2B0SBpVaH52tsS80uyTCn7ByDB2GNkO5TXY8KDS%2FRQe58zV9x%2FPRQUz5hG469dS7WwiNksC5O8k4n250taJzuc0GyDZgHpIW4IC%2Ft%2BkBHbChBf%2BFmDDrV6PPl6BcMYo3B4wW5D6gTMtqRDRKC&X-Amz-Signature=c2eca70be2a1bfd85670aeb2d21590b897225d6803f080e07560512e2c696a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
