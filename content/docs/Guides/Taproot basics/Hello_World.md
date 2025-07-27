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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TCLHMD4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDWs3GcmMLdtvQR%2BUDBUMAIlujtwvxIlOFV92f%2FKBf1qgIhAOukY0fGFYmbU92hspvVxHT6remwd1zWYbVhu5Ly61kfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwunzRAtDpXrYAJhlMq3AMYWZn1ml7DVuuQ%2F2tlpGSzqgiGVYYwTOe9wr9FhxQ%2BfId9ia5FgTJ8xzCbhCoCpggdvyTbhI7Kb6sGlSTx8D%2FEn2j1ZKKKVvg01TQMd%2Ftsm35kvSuvMwK09d1MV8Vied%2BxACtNWyIjn0e7iiTDAicCRALbiJwNk%2FipATXZO6FETwYh3jsGlrkC69rdbH9wWrOdOgqXjUb56Uee0WRsjhw%2FcYdXLKgbCLhxN7WFS26GzPj0VR3%2FRhG%2F4dR3QC9V%2BA6732sRQu8Othd1sRvnNgbEv0hFZOYVPu2t3CgzIiNh%2BghQgbq7VtvBmNGPmnfxPwL%2BkZ7kgvzRCw9VwNcUGLTW%2B%2FBEXGq%2Fexes52HAm76lQTTPYkrytlwKMVT9Ro0lH9PdO5krRp0r%2Fo3MOwoweGtGrdBdnb%2FLE7rw57Sol%2Bgpd0GbtRX7Mgepiupg7LY4iLmOFPbUsLa9UYFLJj49AP6Pji5szB3skmEkSocPOW%2FzXSkYF8jotAQR5za0jqRuw8cynukLXO%2BkwOTDrgJaNUY3IxX9pZw%2FlGq%2ByiDyPS1VPA1Lg1q6VbqMBLVLY5d442lQArkuzC9Zk8s29E1YfoSSAGAvgWAuLP06e6QWKNyMXDJcnKEVqtQ97c4lCTDju5bEBjqkAexdgO9QY9HjptP3tPskkHTzvQX87udfw3%2BHwLtlHka3iojTjS%2Bws1qZghKNdBRT1xpvlPVAKvQL7LIsh84Sxdp60d4ZmfIAq2GQN3iZRwIEWyxRD0O%2B3tRmx5ioEy0BTiLD2hm%2FPmtwmHBE13lhVeGk7TGfV1klFGfz%2FdgdqmbcOggGW%2BLjq%2Fc4KMJ8uGX%2FZeNEeqFF3tkvoCKSH65HW7m2aVp6&X-Amz-Signature=ad952f3560f558de7346b2083a6930e0281ee5ce36dc7ca8f58c7ea9dbd4089f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TCLHMD4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDWs3GcmMLdtvQR%2BUDBUMAIlujtwvxIlOFV92f%2FKBf1qgIhAOukY0fGFYmbU92hspvVxHT6remwd1zWYbVhu5Ly61kfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwunzRAtDpXrYAJhlMq3AMYWZn1ml7DVuuQ%2F2tlpGSzqgiGVYYwTOe9wr9FhxQ%2BfId9ia5FgTJ8xzCbhCoCpggdvyTbhI7Kb6sGlSTx8D%2FEn2j1ZKKKVvg01TQMd%2Ftsm35kvSuvMwK09d1MV8Vied%2BxACtNWyIjn0e7iiTDAicCRALbiJwNk%2FipATXZO6FETwYh3jsGlrkC69rdbH9wWrOdOgqXjUb56Uee0WRsjhw%2FcYdXLKgbCLhxN7WFS26GzPj0VR3%2FRhG%2F4dR3QC9V%2BA6732sRQu8Othd1sRvnNgbEv0hFZOYVPu2t3CgzIiNh%2BghQgbq7VtvBmNGPmnfxPwL%2BkZ7kgvzRCw9VwNcUGLTW%2B%2FBEXGq%2Fexes52HAm76lQTTPYkrytlwKMVT9Ro0lH9PdO5krRp0r%2Fo3MOwoweGtGrdBdnb%2FLE7rw57Sol%2Bgpd0GbtRX7Mgepiupg7LY4iLmOFPbUsLa9UYFLJj49AP6Pji5szB3skmEkSocPOW%2FzXSkYF8jotAQR5za0jqRuw8cynukLXO%2BkwOTDrgJaNUY3IxX9pZw%2FlGq%2ByiDyPS1VPA1Lg1q6VbqMBLVLY5d442lQArkuzC9Zk8s29E1YfoSSAGAvgWAuLP06e6QWKNyMXDJcnKEVqtQ97c4lCTDju5bEBjqkAexdgO9QY9HjptP3tPskkHTzvQX87udfw3%2BHwLtlHka3iojTjS%2Bws1qZghKNdBRT1xpvlPVAKvQL7LIsh84Sxdp60d4ZmfIAq2GQN3iZRwIEWyxRD0O%2B3tRmx5ioEy0BTiLD2hm%2FPmtwmHBE13lhVeGk7TGfV1klFGfz%2FdgdqmbcOggGW%2BLjq%2Fc4KMJ8uGX%2FZeNEeqFF3tkvoCKSH65HW7m2aVp6&X-Amz-Signature=8fa58f8398b3c9e3ff69d6a2ae926312439e3ed1b3efb9c56f464a19d98f9003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
