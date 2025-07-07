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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHVVHHZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF2L%2Fv89IJ4SO6Ivf4Z7PGV26vchyJsUrSYdKIZovOfpAiEAzlnGt05thqj8vxIZHLQ9vDuAmVVgusYciYqmmBodm2Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCEdVLt9LahqeNX%2FJSrcAyCVTzyYHyYl3sZzhFT3yDvv4R7bIrG2%2BfcrxbejRgi2weWD%2BMpRNvZKEZjXnTx0zIItsk%2FAXO0V0GjtpeWOBaMQ3Y14CPbdSy9q076VlqNM6MD7i%2BOac1YpfDn3Pu%2Fry6x5fYy7DCD57TubAdCee5cJNqCRqfKOHLVxDbc567mFGE%2BvVrZc%2F3I%2BBzeSxkFpcitoG5aFi9dM2B7LowwLVN9ULapVF%2BrwYEZaFQOVekGvb3nf4SYe81wbUqr0LToXzmzB%2FAaaZ6b0vUrQaQ1eV84ArOAAnhc6Nj9V%2F5puhDRpjd3MZ9lCQoz1uMJeAq9q62BrxZPHb4vTG4TXbJE417oxp5K4vVsVBTynUXZ7WedF4mDyOWpv5StN4%2FtIN%2FRL%2FYJtdLhLjAI42cqrqQ4pndQdCWSd5HA%2Fmgv1gNXqI%2BWy9CrhwRHkL9uDmwRXddhei8kQ1HwilCfexCaLjfzc9a3dNzP0RerdUWiCll8tCPlBWhjqAf1Z63iE%2F0UxCFLKZAt9JKKiBqtU5s8tVZl8pRGk%2BgH1aWBbzYSEFqwWOHwdAVKX17TZcIIMX0v2oWdHkahR9LYfQF8zfzRJSKY%2BhNiKhGlRvfKin1QBeYDPGC%2Bbt1LANnhJUBYm6mBUMJm%2BsMMGOqUBUSLAxPdUr5pfnB9LZtzmlEmD9NbrLQfwU9EEenU4cpDMWH0VUMNhZaE7nTPDxRPXkU65CTUUjSpDdaRmyAvFcM9QXb2kIekf3VT1yUjgRo%2B2PDWmfRBK%2FtlMtwsjFYAuq5q35ylfgB0mjKsAS59aRj1T1OxrB%2FSEgavi9DfoRukhKoYbQeaQriHM75QyeYhy6%2FoKFCKwIEO8TBj1i2%2F9zF7H%2FkNu&X-Amz-Signature=3848204bb66e557caa575e295b1539a6bbffd168351524cd3815f03071934638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHVVHHZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF2L%2Fv89IJ4SO6Ivf4Z7PGV26vchyJsUrSYdKIZovOfpAiEAzlnGt05thqj8vxIZHLQ9vDuAmVVgusYciYqmmBodm2Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCEdVLt9LahqeNX%2FJSrcAyCVTzyYHyYl3sZzhFT3yDvv4R7bIrG2%2BfcrxbejRgi2weWD%2BMpRNvZKEZjXnTx0zIItsk%2FAXO0V0GjtpeWOBaMQ3Y14CPbdSy9q076VlqNM6MD7i%2BOac1YpfDn3Pu%2Fry6x5fYy7DCD57TubAdCee5cJNqCRqfKOHLVxDbc567mFGE%2BvVrZc%2F3I%2BBzeSxkFpcitoG5aFi9dM2B7LowwLVN9ULapVF%2BrwYEZaFQOVekGvb3nf4SYe81wbUqr0LToXzmzB%2FAaaZ6b0vUrQaQ1eV84ArOAAnhc6Nj9V%2F5puhDRpjd3MZ9lCQoz1uMJeAq9q62BrxZPHb4vTG4TXbJE417oxp5K4vVsVBTynUXZ7WedF4mDyOWpv5StN4%2FtIN%2FRL%2FYJtdLhLjAI42cqrqQ4pndQdCWSd5HA%2Fmgv1gNXqI%2BWy9CrhwRHkL9uDmwRXddhei8kQ1HwilCfexCaLjfzc9a3dNzP0RerdUWiCll8tCPlBWhjqAf1Z63iE%2F0UxCFLKZAt9JKKiBqtU5s8tVZl8pRGk%2BgH1aWBbzYSEFqwWOHwdAVKX17TZcIIMX0v2oWdHkahR9LYfQF8zfzRJSKY%2BhNiKhGlRvfKin1QBeYDPGC%2Bbt1LANnhJUBYm6mBUMJm%2BsMMGOqUBUSLAxPdUr5pfnB9LZtzmlEmD9NbrLQfwU9EEenU4cpDMWH0VUMNhZaE7nTPDxRPXkU65CTUUjSpDdaRmyAvFcM9QXb2kIekf3VT1yUjgRo%2B2PDWmfRBK%2FtlMtwsjFYAuq5q35ylfgB0mjKsAS59aRj1T1OxrB%2FSEgavi9DfoRukhKoYbQeaQriHM75QyeYhy6%2FoKFCKwIEO8TBj1i2%2F9zF7H%2FkNu&X-Amz-Signature=366e831cd9a020f31b93b842a0efbaf8ff0bc063375225f78ff8e533e7d3af15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
