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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DUELJG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDki%2BWKidflKT7N9m9qZJ3KJwytRiDdkhNwgdciXfOtuAiB%2BbcE3V3x1ysSw%2BpY8Vm7t677HQxyN4zIbQTEOL1VvMSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlN5K1028yQKtb%2FVXKtwDELySMTVVqscaMJ%2BnagioCkj1XZ8pSYx2DqxGPD5VfLGdPeGK7Y%2Bgizdz6ayq7wPY6sUOiRTsgwwZ9O24ZZ0dmywxgKmvd%2FK3SwJulI3v9AbKJYjlYyh6bHaG4z5AXqvSZv8C4VAy6VU0ySduRAOutc9skxJHGxRgmmVUmSJgQ3m4n4cfp81jEL6A6Y7HmNrrxDB4kQBcO3xFFdXvEMAwlsGuYLI82Vq4B4oyL6nDgg1oXu9YmKWnTAVLpXbRSgxqb3mro70zykP5PVBYQpE%2F6Dyrhme2hZvZuZxeMShiFfQTDHV%2BCkh0PY8mc8fh5SiRIA2WTMUm%2FZaXt1rhsxgWz6ZAaxp%2FMGYNeRSJd53uzB6xo56BeMS49Z1b7Nu4zpq5p47YaxNXmRkVH7BU3B2jsJPj%2FEkvLGzl1WWcnWi4weXPxJnOv5RVREeMd1F%2FUWAnpHHzE8L9mrmGUcHxYrdQxtgAsWok2DCm6pAmMVWT366p784TO%2B8Y%2FQ2nzlBPYJNY3ddppXv1jymXXarkXPro67RgczTkWgRubl%2B7PSkWF%2FHQwDeRbKaw3%2BwVglLCG9yCLRk21M%2Ba0faP2Ay%2FGkq%2BEcpnG1okJBGq1kGA9dK%2Fmt%2FtBcwog6F6jqz%2B4S8w94HYxAY6pgFTLY%2BPM%2FT%2FAeUEmAXIRqacrJru%2BoQS2WZ1iSrYcB2ZMY7usM7vgCb9vsyxlxmu8JSSq5LQPE5SwMQkjmTwgZe7mYNeKVtm7rDv9Qnt9JqyL0j9tLNwCcnPmeLCdY68AiZqyCyCUkSuRU8VEaREdny5TPeqQr%2BHss54rK4btx0gZapxHdeYStCzyVNHw1oqtyGDWIhtW3voigL%2FR62GUDad4j3d6JPK&X-Amz-Signature=4b35bba9b6978796b96f8bb7e6bb6467ffaef11483b6876a24e4e1d3905684c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DUELJG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDki%2BWKidflKT7N9m9qZJ3KJwytRiDdkhNwgdciXfOtuAiB%2BbcE3V3x1ysSw%2BpY8Vm7t677HQxyN4zIbQTEOL1VvMSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlN5K1028yQKtb%2FVXKtwDELySMTVVqscaMJ%2BnagioCkj1XZ8pSYx2DqxGPD5VfLGdPeGK7Y%2Bgizdz6ayq7wPY6sUOiRTsgwwZ9O24ZZ0dmywxgKmvd%2FK3SwJulI3v9AbKJYjlYyh6bHaG4z5AXqvSZv8C4VAy6VU0ySduRAOutc9skxJHGxRgmmVUmSJgQ3m4n4cfp81jEL6A6Y7HmNrrxDB4kQBcO3xFFdXvEMAwlsGuYLI82Vq4B4oyL6nDgg1oXu9YmKWnTAVLpXbRSgxqb3mro70zykP5PVBYQpE%2F6Dyrhme2hZvZuZxeMShiFfQTDHV%2BCkh0PY8mc8fh5SiRIA2WTMUm%2FZaXt1rhsxgWz6ZAaxp%2FMGYNeRSJd53uzB6xo56BeMS49Z1b7Nu4zpq5p47YaxNXmRkVH7BU3B2jsJPj%2FEkvLGzl1WWcnWi4weXPxJnOv5RVREeMd1F%2FUWAnpHHzE8L9mrmGUcHxYrdQxtgAsWok2DCm6pAmMVWT366p784TO%2B8Y%2FQ2nzlBPYJNY3ddppXv1jymXXarkXPro67RgczTkWgRubl%2B7PSkWF%2FHQwDeRbKaw3%2BwVglLCG9yCLRk21M%2Ba0faP2Ay%2FGkq%2BEcpnG1okJBGq1kGA9dK%2Fmt%2FtBcwog6F6jqz%2B4S8w94HYxAY6pgFTLY%2BPM%2FT%2FAeUEmAXIRqacrJru%2BoQS2WZ1iSrYcB2ZMY7usM7vgCb9vsyxlxmu8JSSq5LQPE5SwMQkjmTwgZe7mYNeKVtm7rDv9Qnt9JqyL0j9tLNwCcnPmeLCdY68AiZqyCyCUkSuRU8VEaREdny5TPeqQr%2BHss54rK4btx0gZapxHdeYStCzyVNHw1oqtyGDWIhtW3voigL%2FR62GUDad4j3d6JPK&X-Amz-Signature=c0b38dcb2c597ebe67b59d20b072fec1a158f4c760f9f325a93eaaf1ac8b21c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
