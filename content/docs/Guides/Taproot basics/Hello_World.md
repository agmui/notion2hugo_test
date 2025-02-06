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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627H6BLR4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICDKM0aKCXVdFZVHKMfrF9ywj%2BHHpIFsymgFc3HChXAmAiAFggaj%2BL0rTHdIziuHGldTHJWR%2BXHkemls9F3pnkDbFir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMti7XIOos%2Fvg9quJRKtwDhD3UedF%2FWAo6vUmuPB3U4cxIP6PGz2y2fVxY6cIcRVu5V4b6c9Q6H0IDRhjsY4Eu5nKPJUCfxvQJuCBV%2F9lJ7JeVIQgjuSN1knXfWK%2BRCiKJazMXWpNqizdpaft%2BAktmQIe8Dh3jV7FvNmCfuQG4zK1mMZV7cVFNoljijCG%2Fg9j45nfLjy8VaN2h7q7iwKfN36pKCHfG1Z3jrz9YgVA%2FGJ0Gk4ND3Xb7ZTn2UbJel7mAoXnc7v%2FZpffProqEK8IoPPiYpnbV%2BsFwAMATo3wijtc%2FOaKuwSLHN%2BmkN6bHY90flTC%2Fo3qiDIt0jX3Xx%2BUAgRGtZ2xBON3Qqv2GdQaUnjTNQkYe1ErkUFhlSC67Px7rYRAR5LQ8ycU2n35ub0Chtc68nA%2BCuP0b5B0D%2Bvn3QmviSPyn9IsaYEF614MTc9XgDy7rula6E3BF5pEaZsfJGRZJn5%2BPU0cavrKTOzmG%2FmQdWpHjuniJNYqUIlJj%2BJz3EmMiU988BKKb%2BSdauboV%2FGRhFmRLUCbVqy3qHH8iJyzniuKdA2mc7b7TYgtEeaBN7vAb0bhRYwqfDiiQZfttri4ME1UuwUj7YtjG38iDhMS0sAbcEnTf%2Fm9oWuv%2FZa9laeT4qkFFcw8fiZ4w07aRvQY6pgH%2BGS5M9U8UowxTtb2IqrHLtMBxUbhRX%2F4I9B6lPDrRrZYpA2Qj70dl%2FeYqttBrlqtjltSx83vbHmdaSiEPIyvHaOVveZPI241sbUTYUNiX0X33vXGMvzy1SoXdvmlPUDAACKJFK8CIRi%2FWNhUHkoOuskwqY8pYU8G8tAZfIdGC%2BaxM9E%2FhYKrbnRlaiXdJE1KBs6RgEA%2F5rPJV6YXSyu7hx50ft4%2Fp&X-Amz-Signature=44aace17071d54d40b3c416bfdb40be94ee66abcf676e622259d1590f13c6db1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627H6BLR4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICDKM0aKCXVdFZVHKMfrF9ywj%2BHHpIFsymgFc3HChXAmAiAFggaj%2BL0rTHdIziuHGldTHJWR%2BXHkemls9F3pnkDbFir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMti7XIOos%2Fvg9quJRKtwDhD3UedF%2FWAo6vUmuPB3U4cxIP6PGz2y2fVxY6cIcRVu5V4b6c9Q6H0IDRhjsY4Eu5nKPJUCfxvQJuCBV%2F9lJ7JeVIQgjuSN1knXfWK%2BRCiKJazMXWpNqizdpaft%2BAktmQIe8Dh3jV7FvNmCfuQG4zK1mMZV7cVFNoljijCG%2Fg9j45nfLjy8VaN2h7q7iwKfN36pKCHfG1Z3jrz9YgVA%2FGJ0Gk4ND3Xb7ZTn2UbJel7mAoXnc7v%2FZpffProqEK8IoPPiYpnbV%2BsFwAMATo3wijtc%2FOaKuwSLHN%2BmkN6bHY90flTC%2Fo3qiDIt0jX3Xx%2BUAgRGtZ2xBON3Qqv2GdQaUnjTNQkYe1ErkUFhlSC67Px7rYRAR5LQ8ycU2n35ub0Chtc68nA%2BCuP0b5B0D%2Bvn3QmviSPyn9IsaYEF614MTc9XgDy7rula6E3BF5pEaZsfJGRZJn5%2BPU0cavrKTOzmG%2FmQdWpHjuniJNYqUIlJj%2BJz3EmMiU988BKKb%2BSdauboV%2FGRhFmRLUCbVqy3qHH8iJyzniuKdA2mc7b7TYgtEeaBN7vAb0bhRYwqfDiiQZfttri4ME1UuwUj7YtjG38iDhMS0sAbcEnTf%2Fm9oWuv%2FZa9laeT4qkFFcw8fiZ4w07aRvQY6pgH%2BGS5M9U8UowxTtb2IqrHLtMBxUbhRX%2F4I9B6lPDrRrZYpA2Qj70dl%2FeYqttBrlqtjltSx83vbHmdaSiEPIyvHaOVveZPI241sbUTYUNiX0X33vXGMvzy1SoXdvmlPUDAACKJFK8CIRi%2FWNhUHkoOuskwqY8pYU8G8tAZfIdGC%2BaxM9E%2FhYKrbnRlaiXdJE1KBs6RgEA%2F5rPJV6YXSyu7hx50ft4%2Fp&X-Amz-Signature=e0a200288bab0dd3cef48716889f19eb5981d2772cf2aab87401fd1c9f341aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
