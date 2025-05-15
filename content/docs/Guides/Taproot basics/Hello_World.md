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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCU5IKG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCfyF6dog9M%2FG9QMXBmX3tqPJt9wQVbaqaciWY%2F7EV66QIhAK9%2FV5Mm7IMa3yMjMkbxzF7K53wY%2FNTdpWJRODbGPNpGKv8DCDEQABoMNjM3NDIzMTgzODA1IgzfX%2FSGLcJytyiZf5wq3AP6KLGaXE7OD2Vs2EqDjVcMfH2r69KIJ2USaeNfC49HvXmr5XT4yBlkH9V0SpUZaYhoGMgRPlAx%2F38VNNGbA3De8NKjYoM6mQ3aa6qzLCeXX42zRjiCtVmin4xau1ttYbXOQTY8bkzE1I8TC9to63NIfBEhTG1wvOT1X9q%2BEuBZOCKIroojiRFr7jRZLabH19qCHNUzngclgNDFjkaiGfr7UsMB1mn3C1OXGAh%2ByPUTdNryXcV0JLttDQNBkOSEMQ1xazPl4bSqMDWFb%2BDMevWeUF%2Bc1qdbtZwbekWNVUQGD3e2I364kXl2PTyBAWW7Ge%2Fy0uNuG987viCJMBkpvoHeaInDpim0H2iF1mkE6LigQ%2BJHx8cB7a%2BUD%2BoyaqQhxYfwfFHamXFgNlTu%2BE%2Bfsleskm6MJ9uahfcrIstuf6BJu9RiyxVHJANQez8nl2E3HmH9DNEiOK6QMgy2S9eOmpqAfSVgzChFlQq5d7SbDxDOdrxriMEmvu4I5I%2B7uHwgziM71kB4hiFrFAW9mND0FYvnpDjeQxyGTZZTEuN425iLcNap0KMmhFi0NnpYKn5AXso20j1ET1h7JjooSW3n8rI2EgAxlHFM2IASm9R%2B0L0x8YaS09%2BF%2BJTJjx5jGzCBkpjBBjqkATUKM5y3SV6QKfqVP21TNfoqfx4%2Flzh5rokzZIg7%2B6nmXo%2Bm4oveqDgHmELH7BlwMHvz0V7T2YHF%2BFt42gU7rfpsrELGzyxrTp3Ku8fLAGGz0C1XlZp4INLs%2Bv3VHuFrOYFgmERCJ5VpdYCZDwXJAc6xv7YyQ3AZYNWJ3ZmjDYl5URuYkvI2fPZqlisseW4loHEcyZWUgjVee0MX00KNcaQC3GFD&X-Amz-Signature=be04bec8667267087e22676d0a72541aac51680f54ebd2e33a1eb904994efcb0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCU5IKG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCfyF6dog9M%2FG9QMXBmX3tqPJt9wQVbaqaciWY%2F7EV66QIhAK9%2FV5Mm7IMa3yMjMkbxzF7K53wY%2FNTdpWJRODbGPNpGKv8DCDEQABoMNjM3NDIzMTgzODA1IgzfX%2FSGLcJytyiZf5wq3AP6KLGaXE7OD2Vs2EqDjVcMfH2r69KIJ2USaeNfC49HvXmr5XT4yBlkH9V0SpUZaYhoGMgRPlAx%2F38VNNGbA3De8NKjYoM6mQ3aa6qzLCeXX42zRjiCtVmin4xau1ttYbXOQTY8bkzE1I8TC9to63NIfBEhTG1wvOT1X9q%2BEuBZOCKIroojiRFr7jRZLabH19qCHNUzngclgNDFjkaiGfr7UsMB1mn3C1OXGAh%2ByPUTdNryXcV0JLttDQNBkOSEMQ1xazPl4bSqMDWFb%2BDMevWeUF%2Bc1qdbtZwbekWNVUQGD3e2I364kXl2PTyBAWW7Ge%2Fy0uNuG987viCJMBkpvoHeaInDpim0H2iF1mkE6LigQ%2BJHx8cB7a%2BUD%2BoyaqQhxYfwfFHamXFgNlTu%2BE%2Bfsleskm6MJ9uahfcrIstuf6BJu9RiyxVHJANQez8nl2E3HmH9DNEiOK6QMgy2S9eOmpqAfSVgzChFlQq5d7SbDxDOdrxriMEmvu4I5I%2B7uHwgziM71kB4hiFrFAW9mND0FYvnpDjeQxyGTZZTEuN425iLcNap0KMmhFi0NnpYKn5AXso20j1ET1h7JjooSW3n8rI2EgAxlHFM2IASm9R%2B0L0x8YaS09%2BF%2BJTJjx5jGzCBkpjBBjqkATUKM5y3SV6QKfqVP21TNfoqfx4%2Flzh5rokzZIg7%2B6nmXo%2Bm4oveqDgHmELH7BlwMHvz0V7T2YHF%2BFt42gU7rfpsrELGzyxrTp3Ku8fLAGGz0C1XlZp4INLs%2Bv3VHuFrOYFgmERCJ5VpdYCZDwXJAc6xv7YyQ3AZYNWJ3ZmjDYl5URuYkvI2fPZqlisseW4loHEcyZWUgjVee0MX00KNcaQC3GFD&X-Amz-Signature=24dcf84bc8102a1aa84ec634dcecd7695613255c881bb3cdd0f44a10bc9a15c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
