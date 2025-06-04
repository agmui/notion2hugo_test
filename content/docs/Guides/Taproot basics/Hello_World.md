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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKPVMCX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIAuFSmO1G%2FFjfnB%2FV7uF%2B81nox%2FvZhzrDBdwsxCRZXi7AiEAv5tA1wLp8pAJUiPQ%2BnGJA7eA%2FPwZb88jrtPLp7ePbaYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIiJL9PP7T7Rogc6ZyrcA3uzPl6BVi0%2BhEH7xj%2BQr7EY6OYEB0msoLL7DHNfr5F9u7d7pdKwzdbEqBAWhWJbCl0Dy2GdQXwWqJIo84MdMDVgBk30Z32hTHg0fJHwXVWCw8i1FvsPZBjF3HmbEqsPeDCAoN9x1x7wt4hw9u65JTLNvuWcw%2FTHrC7ttYyu5FB7TtI93MXVOfMN73o7IcGLifwl6lN%2B2MrKTd6%2BEfx2sSrBwRYKgdqN5mAeMjF9t2wClq8OxC%2FXiC4kuwQgrYPVxvaC3FvyfwJTkrQ%2FUi%2B4JIBZwc8VSfC4ubMsLoIEdBPDgDgE0JmoDCMDWE4vo9qkDtOwbCo7CmT6h9iYg6ZGepmwn8eDqum%2BMbpL%2BiGU0P4JpZRZ0%2Fz9m%2FQtHr%2Bfdbvn5zCFOqXyStyQMUJMbKlUK1ls63geIOC3lMta0S6wrOzJRUhTwFDWzXxyPpEXUeXr3MjW7WbNoV%2B06IvjCjKhobwaIQ5rHas5N7%2B3G7tqH%2F6DQHGgxo8l7sH%2B586Fy6X%2FBjiyRtW35FEEjoSnI7JaiwtDXHIsyrbT6syhyrWUTfhFqm0oYt0xl2MqE5y50i6d%2B9Hka2rr8EiO4ymZDe7KD6%2B0tiyyFmt72pzOgSdz80QbElGMs7%2BzFx8WR6QVMKX3%2FcEGOqUBR91Dk7KAHKzcnVCpSlDJIrKMogU8TjGrjh211zygyjixt5dfZ7FRyPtFTfNsY9M1eL9RUksqcteqCTvoI9PsrcVMwdVZM4Iv%2Fd1aLj1L5jIlI2cUycCcNJ5V84h%2ByKGxPx8jwWYxui6qvUrQICan0qUXpaRUZ9OW%2BVPDY8UsLotu5CGfgL6dzsLGEXLp%2BkfhoFQL3mt8i36fsanOx%2BmcgcEVXlqX&X-Amz-Signature=49ca283d46a791cc3aaedf7e22d5b59559fad8b3e52a1e2658e88d88859e4a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKPVMCX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIAuFSmO1G%2FFjfnB%2FV7uF%2B81nox%2FvZhzrDBdwsxCRZXi7AiEAv5tA1wLp8pAJUiPQ%2BnGJA7eA%2FPwZb88jrtPLp7ePbaYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIiJL9PP7T7Rogc6ZyrcA3uzPl6BVi0%2BhEH7xj%2BQr7EY6OYEB0msoLL7DHNfr5F9u7d7pdKwzdbEqBAWhWJbCl0Dy2GdQXwWqJIo84MdMDVgBk30Z32hTHg0fJHwXVWCw8i1FvsPZBjF3HmbEqsPeDCAoN9x1x7wt4hw9u65JTLNvuWcw%2FTHrC7ttYyu5FB7TtI93MXVOfMN73o7IcGLifwl6lN%2B2MrKTd6%2BEfx2sSrBwRYKgdqN5mAeMjF9t2wClq8OxC%2FXiC4kuwQgrYPVxvaC3FvyfwJTkrQ%2FUi%2B4JIBZwc8VSfC4ubMsLoIEdBPDgDgE0JmoDCMDWE4vo9qkDtOwbCo7CmT6h9iYg6ZGepmwn8eDqum%2BMbpL%2BiGU0P4JpZRZ0%2Fz9m%2FQtHr%2Bfdbvn5zCFOqXyStyQMUJMbKlUK1ls63geIOC3lMta0S6wrOzJRUhTwFDWzXxyPpEXUeXr3MjW7WbNoV%2B06IvjCjKhobwaIQ5rHas5N7%2B3G7tqH%2F6DQHGgxo8l7sH%2B586Fy6X%2FBjiyRtW35FEEjoSnI7JaiwtDXHIsyrbT6syhyrWUTfhFqm0oYt0xl2MqE5y50i6d%2B9Hka2rr8EiO4ymZDe7KD6%2B0tiyyFmt72pzOgSdz80QbElGMs7%2BzFx8WR6QVMKX3%2FcEGOqUBR91Dk7KAHKzcnVCpSlDJIrKMogU8TjGrjh211zygyjixt5dfZ7FRyPtFTfNsY9M1eL9RUksqcteqCTvoI9PsrcVMwdVZM4Iv%2Fd1aLj1L5jIlI2cUycCcNJ5V84h%2ByKGxPx8jwWYxui6qvUrQICan0qUXpaRUZ9OW%2BVPDY8UsLotu5CGfgL6dzsLGEXLp%2BkfhoFQL3mt8i36fsanOx%2BmcgcEVXlqX&X-Amz-Signature=f8a05b2f45c15e7ede5a45ebdc272e1ae712ace62129cb0880da0a906abdb99c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
