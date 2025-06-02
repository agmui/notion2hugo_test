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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWDVMPF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC3cRsoxIU0dROiAy2OIiXWPPq5GfqtV%2FpFbmAodx8a5AiBLvrKBQ7n8dXn2kobt%2BjECFJPPXM1PdWk2gKReVNMVJSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYWYZtInkHAGbk08WKtwD2P5y2wVZblx7iiTUn0nb2qxIdLODgk5adeGv3ZoG5jH7x2T5bNCL5mvSq%2FNK0fmqepBHNTu91AHNJPv5riXqaFFEsoy5eNeIN3hm%2Be73lzAv4J6esBZc29uwvWsbtTiF81dVMfrUUwAZ%2FkAzSqNo6dc8VqYWV8mT%2B8uoxbmK4sqHGDIEghepXKIAdd3RF52dXyaRm4vgAA0G2LkMNzQcwqCKArICdJhU5A5jQmmCJh46zRDke2S4EQzjQ%2B9i5aKUfDDJ%2FDao6np1oqrVdNYtv3NFU%2Fb7zHt9Vwac6Qqm1ose6%2BrXEDOsKKglfHbDcFJVucp9wDaqpl%2FqV2dNytVDOGN%2BgcfCE7%2FtOkUHF8tT6YODfOm7fuYu2feIvZA7eoyVllK36Dwp9VkB3T4TGLmk%2Fk8JQ13v7E7o3OWv7o6oAKFfv9HdUUMxPptTwbFh2LwvL%2Bwv%2BEgAJk0b4vemi9vYmCjPii3NKaFanINF0KqjVx9K64qklUPHiZi83lulwjvlRVg3kz6h0iV5ZrXgjyGZclGxdr7g5O2TGapNdgyfqIbaTgXRa1slMxAM%2BL9DA7U8ALjMnMtEFyfWRXD5d%2Bc0d0gOgmFHSPwZJ8KuRhvkjSikxSX78xX%2BqdzEjOgwqbL3wQY6pgHlpUS2o3J70OQ1glqoTsnnEb3DFD3IgZ7J%2FABDQzObyIhywzvQc16lim6QyiE7bIYezK3Vy6o%2Blq7RMK8Etpe61UdiUwWr3OpeBM9Ns%2B0CVEY%2BsD0wHAG%2BrcTg304XLnJOX8TObdNwSk8%2Fya7nTx4DKN7ZCu61ASKvENaYn6tOHejEABc6oOgtrMp%2BtQ1UiFOLbaZBVKzxEvH1TU63aBcXwmzmVbyp&X-Amz-Signature=729ae41891c39ffabdcbdb236dffcd6cba01428a26c71b66a510b4b9acac7c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWDVMPF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC3cRsoxIU0dROiAy2OIiXWPPq5GfqtV%2FpFbmAodx8a5AiBLvrKBQ7n8dXn2kobt%2BjECFJPPXM1PdWk2gKReVNMVJSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYWYZtInkHAGbk08WKtwD2P5y2wVZblx7iiTUn0nb2qxIdLODgk5adeGv3ZoG5jH7x2T5bNCL5mvSq%2FNK0fmqepBHNTu91AHNJPv5riXqaFFEsoy5eNeIN3hm%2Be73lzAv4J6esBZc29uwvWsbtTiF81dVMfrUUwAZ%2FkAzSqNo6dc8VqYWV8mT%2B8uoxbmK4sqHGDIEghepXKIAdd3RF52dXyaRm4vgAA0G2LkMNzQcwqCKArICdJhU5A5jQmmCJh46zRDke2S4EQzjQ%2B9i5aKUfDDJ%2FDao6np1oqrVdNYtv3NFU%2Fb7zHt9Vwac6Qqm1ose6%2BrXEDOsKKglfHbDcFJVucp9wDaqpl%2FqV2dNytVDOGN%2BgcfCE7%2FtOkUHF8tT6YODfOm7fuYu2feIvZA7eoyVllK36Dwp9VkB3T4TGLmk%2Fk8JQ13v7E7o3OWv7o6oAKFfv9HdUUMxPptTwbFh2LwvL%2Bwv%2BEgAJk0b4vemi9vYmCjPii3NKaFanINF0KqjVx9K64qklUPHiZi83lulwjvlRVg3kz6h0iV5ZrXgjyGZclGxdr7g5O2TGapNdgyfqIbaTgXRa1slMxAM%2BL9DA7U8ALjMnMtEFyfWRXD5d%2Bc0d0gOgmFHSPwZJ8KuRhvkjSikxSX78xX%2BqdzEjOgwqbL3wQY6pgHlpUS2o3J70OQ1glqoTsnnEb3DFD3IgZ7J%2FABDQzObyIhywzvQc16lim6QyiE7bIYezK3Vy6o%2Blq7RMK8Etpe61UdiUwWr3OpeBM9Ns%2B0CVEY%2BsD0wHAG%2BrcTg304XLnJOX8TObdNwSk8%2Fya7nTx4DKN7ZCu61ASKvENaYn6tOHejEABc6oOgtrMp%2BtQ1UiFOLbaZBVKzxEvH1TU63aBcXwmzmVbyp&X-Amz-Signature=8aecfdab9a1f8eca45f03ca6d88d7e2052848cfc67ec152c773b5856ec547030&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
