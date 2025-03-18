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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZVM75JR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVFc3SaXxZnVxwGgJU4PcS8rEATFFudggTgAvWxDBNHQIgCzJPmlXjEiRSl7yQ4jCFIz0B26YmPlSxCZFd96ObV9Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJDjCdk%2FELh04r7mVyrcAxzA%2FZgODsxixHiz6pD5uOqNDx3rd%2B%2BN2K%2BYXscJFbPnWRVR11Odtd%2FbgIXLhpKQaiUuXri89ViujuEpQ8KS0c2Bds0ioYj%2B2TzXFAwM3MEbEqUlY97ErEV5L4WtTyDj1qk6i8f042X0pwjQ9HYfwl%2Be4DRpjOghHGL1jeFxyGMu%2Bj2PVp7PKqR36av%2FKoKUqqMFxqEanUzKhpgM85wth438xKUSD26yBnatatSuiKDYq%2FZ7sP69e%2FUK499ZVMAP3TDcmemmkCYw5CIlT%2FEuXHBbXSM0JOGTtX8HFB96aS%2FSPjZ%2BIlEvTcEUGqIjdrB4T0odT5np196kGZ9SNlNyn9ruSEp2%2FHTxjTbKxs5foGL0QWDhVDCgudKOIZCVDPYciB26uPD09GUO1S0ofJmyQMZN%2BouP2aCp3qEstHpbItg3uWr1jsXHsbJGyxGkLm7I9YCaMTlKbAMxKYXJbMrC9IkGR9zB%2Fe4wMRIbQxwBCuR%2FZs7AsAH3cJGZpQWoTRof39xWjFLtGyeSSeRp38zJoVHlZdTdJmh6a2MzAuNhk7E%2FtEJs9Hisgwpqohd0%2BkC0ivUhOPUdzdS%2FuWb8WsCZ%2F6NWOlMn8y2gsp8%2B3d3yR92SaZbnY6srf9QIrHs0MMbK474GOqUBZt2APwvkDkJYdXrbOtk12bBevNQzuUSDNMtY1WaPQv7jhvdiMZySUfRCHH5eAdJTi%2FPf8H1tJkHQomzmHPQR0uFsCIo0woSZIZ5n%2Bj3Mpx5lGSqkxJYm5p%2F%2FBFgAqzo%2BIehCi3vkeUnRLzuqqNkwR6KlBoCkA1Fl8KhwlRHEpY16NTfaJzXZ9DnLdfq%2F5REaIUbW4MYz9mps53jICCZAXfpz%2BYDY&X-Amz-Signature=dc028598aec9cb656a5ce163ba48c15740f3d4cdc9340b540505aa50b2745971&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZVM75JR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVFc3SaXxZnVxwGgJU4PcS8rEATFFudggTgAvWxDBNHQIgCzJPmlXjEiRSl7yQ4jCFIz0B26YmPlSxCZFd96ObV9Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJDjCdk%2FELh04r7mVyrcAxzA%2FZgODsxixHiz6pD5uOqNDx3rd%2B%2BN2K%2BYXscJFbPnWRVR11Odtd%2FbgIXLhpKQaiUuXri89ViujuEpQ8KS0c2Bds0ioYj%2B2TzXFAwM3MEbEqUlY97ErEV5L4WtTyDj1qk6i8f042X0pwjQ9HYfwl%2Be4DRpjOghHGL1jeFxyGMu%2Bj2PVp7PKqR36av%2FKoKUqqMFxqEanUzKhpgM85wth438xKUSD26yBnatatSuiKDYq%2FZ7sP69e%2FUK499ZVMAP3TDcmemmkCYw5CIlT%2FEuXHBbXSM0JOGTtX8HFB96aS%2FSPjZ%2BIlEvTcEUGqIjdrB4T0odT5np196kGZ9SNlNyn9ruSEp2%2FHTxjTbKxs5foGL0QWDhVDCgudKOIZCVDPYciB26uPD09GUO1S0ofJmyQMZN%2BouP2aCp3qEstHpbItg3uWr1jsXHsbJGyxGkLm7I9YCaMTlKbAMxKYXJbMrC9IkGR9zB%2Fe4wMRIbQxwBCuR%2FZs7AsAH3cJGZpQWoTRof39xWjFLtGyeSSeRp38zJoVHlZdTdJmh6a2MzAuNhk7E%2FtEJs9Hisgwpqohd0%2BkC0ivUhOPUdzdS%2FuWb8WsCZ%2F6NWOlMn8y2gsp8%2B3d3yR92SaZbnY6srf9QIrHs0MMbK474GOqUBZt2APwvkDkJYdXrbOtk12bBevNQzuUSDNMtY1WaPQv7jhvdiMZySUfRCHH5eAdJTi%2FPf8H1tJkHQomzmHPQR0uFsCIo0woSZIZ5n%2Bj3Mpx5lGSqkxJYm5p%2F%2FBFgAqzo%2BIehCi3vkeUnRLzuqqNkwR6KlBoCkA1Fl8KhwlRHEpY16NTfaJzXZ9DnLdfq%2F5REaIUbW4MYz9mps53jICCZAXfpz%2BYDY&X-Amz-Signature=9c02d5343ced753ab60f573c5ac0c681b7cb000516c0b0aedad9edac8b3e016e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
