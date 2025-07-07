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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDEAHXR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8mgK5nXATjVmiDjGf6%2Bicr%2FaqDWAQo%2FvzRfo4TM5SPAiAnwsB9eGIKlYU%2BQrKqhh22PtTij56KP7YcR%2F%2BaMuLDdCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM3bRrlPX2scydpBTJKtwDOuzO5hEnP%2FxgXr4TD0bitdl5%2FkodUnU6e%2B1RVuU7eWd1nq864JI78WcmfRO%2BSQmmXnXVmALxXBUJvESX%2FCc0vWK0TcgAl0KjQh%2BsENHPdjHEZNDuh6FMQuZmbcNU%2F%2BbStVUUGA9VKUEBAcIK1LgYmY3Ut52MMVsfA8BkqCswXN0yfwSPW5H%2BKVg6YMn6M7wPPQCe8k8%2FGjVtlwtSjgKgp8xTSdGhCpcl8z7piML%2Fh0tB1TNiHLIeBweqLx881%2BWm7VT%2B7lZGzHj%2BXs3t6mXfx5Aujn6L5HTyr1DGAsFecUCQJ4w9boj2zYY%2BMHvfJp2aB5n6olfaojPu5b%2Bszj9fvx21mky6U53NAavG81TFJZV5kJqvJvCFNC3oIumdswnTRhBE0aRpYdYFSnFvTWw9yeFy78w0jgGgpmdAm6KyUkeWMgtpEEyfXuSBJv9Y0k%2Fy2cM5zx%2F%2FfbEs7aUN6dPGpKmlzp4I%2BX65594L0%2FgRmEIpAEcCJF9qgLtc8DnA98LUmpYN0WQtRysg9V4TY1VcZAgpqfcP5GVIrT83BFlkI9JGSt%2FPqg2EwhujWMw374Q%2FvzH7Yu5PhSVzOBsxGp0c7pgsl2DW0fcLxd05aTc9t6APWBq2keFQyZqSRmgwgpawwwY6pgF0FCb483n57dEhlcONxpDdogw%2FtUs%2Fj34ZeB61x85E9V2ul7lthUMF6zZ33h2h5mYhzG5%2Bo%2BLm3g5TkV1aYKJah8wswiYrVAMALrS4Xk%2Ff10hE9wzUYahp4iiStPgjwk59V2THDSF8Dm7rumdrEzNzMwTTa4wn0bsfSeFeznVFDJD0GTAGcFCFnEzVBJuQqP04V91AtpuTZZFOqbmHGFGOEeK1pvxJ&X-Amz-Signature=ef0b64e1429d599e764878cba4c3b1bac6d715e66cf0643b9ec62f15c787593d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDEAHXR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8mgK5nXATjVmiDjGf6%2Bicr%2FaqDWAQo%2FvzRfo4TM5SPAiAnwsB9eGIKlYU%2BQrKqhh22PtTij56KP7YcR%2F%2BaMuLDdCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM3bRrlPX2scydpBTJKtwDOuzO5hEnP%2FxgXr4TD0bitdl5%2FkodUnU6e%2B1RVuU7eWd1nq864JI78WcmfRO%2BSQmmXnXVmALxXBUJvESX%2FCc0vWK0TcgAl0KjQh%2BsENHPdjHEZNDuh6FMQuZmbcNU%2F%2BbStVUUGA9VKUEBAcIK1LgYmY3Ut52MMVsfA8BkqCswXN0yfwSPW5H%2BKVg6YMn6M7wPPQCe8k8%2FGjVtlwtSjgKgp8xTSdGhCpcl8z7piML%2Fh0tB1TNiHLIeBweqLx881%2BWm7VT%2B7lZGzHj%2BXs3t6mXfx5Aujn6L5HTyr1DGAsFecUCQJ4w9boj2zYY%2BMHvfJp2aB5n6olfaojPu5b%2Bszj9fvx21mky6U53NAavG81TFJZV5kJqvJvCFNC3oIumdswnTRhBE0aRpYdYFSnFvTWw9yeFy78w0jgGgpmdAm6KyUkeWMgtpEEyfXuSBJv9Y0k%2Fy2cM5zx%2F%2FfbEs7aUN6dPGpKmlzp4I%2BX65594L0%2FgRmEIpAEcCJF9qgLtc8DnA98LUmpYN0WQtRysg9V4TY1VcZAgpqfcP5GVIrT83BFlkI9JGSt%2FPqg2EwhujWMw374Q%2FvzH7Yu5PhSVzOBsxGp0c7pgsl2DW0fcLxd05aTc9t6APWBq2keFQyZqSRmgwgpawwwY6pgF0FCb483n57dEhlcONxpDdogw%2FtUs%2Fj34ZeB61x85E9V2ul7lthUMF6zZ33h2h5mYhzG5%2Bo%2BLm3g5TkV1aYKJah8wswiYrVAMALrS4Xk%2Ff10hE9wzUYahp4iiStPgjwk59V2THDSF8Dm7rumdrEzNzMwTTa4wn0bsfSeFeznVFDJD0GTAGcFCFnEzVBJuQqP04V91AtpuTZZFOqbmHGFGOEeK1pvxJ&X-Amz-Signature=01995c2c26d7f8cce407173e012928ace1277f021ad61e09029de8b408a55942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
