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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGFGYQL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDohwqfzndCMYp2QwN%2Flyrwc16wL%2FVMp%2FGcMV1PdaZiRwIgVuXFt7U80Nw42p5%2BuyYzbRBA3IiVFmL90iQjMP8EFKYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgilkyO4tPlf7sk%2FyrcA4NT34W3eyO%2BfoA1OuOGJ%2BYxa27JihnUqqcG1cYBehmf7j75paF3ey7FjOOPLj2s4DmVD2I709j5XMgyxg6NOvSVtN%2FdvpCCRK%2F1XHrrDvQflAgGU8OTcE%2Fg4M9JYeACn3NtlOF8ljDlYH2VwBRa03Jg8pxO8AoGYJoehog6KH4uTI05%2FF%2BmUZnRUHQdodF2jhia0fRHUY0WLlM7nBN8JYkLQREqBVtGBNeMJ2Wj6ZS58Bqm4n%2F2rA9nS0hbnTP%2BFE82IRU3zhyc3uGErq6jys7tWKpYBaueysodpqCTObfi%2B0Lf4m4VArc3PUOdR%2Boj%2BUqUOxzF8KVL3WthW8FRGJfe%2F3P%2B15BBezeSG84df007NNBOl9OuRE%2BJPfWXmB3X%2FQT5ztYMasR%2B5AumQ09G%2FlByDNoXAKAmsmANxCND0pvlT%2FN%2FO4BQfk6XZmiqOdWE0964uFY1fa4oCYAKo1NMKxyv4%2FouX5dMZ1HLbh8XPc6Zz2nrkcnt%2F7O0bMUfjw%2B3KyjYjBOAMUt5DAiUvtWqOSEyFySiWWm47Dcp1W4I6mbzKI2DYXFcFeatK5UWjkP9%2FXd9N14rsDdSkz4YMRbMLxoTHLNoQgXTWXrSjLpoJejsxnIyqNy%2F2tATBy4wMLKy48EGOqUBUe%2BykCFkVrjuJGB4%2Bj9nJTxWa9v2kqm3ANHEjiMCN7YAOiW6%2BTLPQB9Gy6BpQgs8lME35ciV6pV6vH7theDRS1ZBK9M2wH9lWLej014aquqJ%2FxDBOzhTdzVxOJU3o3GRTS4wzSKW0PPlmjQsj5m%2BKV27OQKZK9E1RRlHDEMnE4T%2FyqZuP%2B5uDGlwwt0tIleG1dXGnBdqniReIO9sYsda4vbf5WMS&X-Amz-Signature=085321f421ba8735ad9252be249bf54e6effc2fcdbaf8cef316ab093b7d0a9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGFGYQL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDohwqfzndCMYp2QwN%2Flyrwc16wL%2FVMp%2FGcMV1PdaZiRwIgVuXFt7U80Nw42p5%2BuyYzbRBA3IiVFmL90iQjMP8EFKYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgilkyO4tPlf7sk%2FyrcA4NT34W3eyO%2BfoA1OuOGJ%2BYxa27JihnUqqcG1cYBehmf7j75paF3ey7FjOOPLj2s4DmVD2I709j5XMgyxg6NOvSVtN%2FdvpCCRK%2F1XHrrDvQflAgGU8OTcE%2Fg4M9JYeACn3NtlOF8ljDlYH2VwBRa03Jg8pxO8AoGYJoehog6KH4uTI05%2FF%2BmUZnRUHQdodF2jhia0fRHUY0WLlM7nBN8JYkLQREqBVtGBNeMJ2Wj6ZS58Bqm4n%2F2rA9nS0hbnTP%2BFE82IRU3zhyc3uGErq6jys7tWKpYBaueysodpqCTObfi%2B0Lf4m4VArc3PUOdR%2Boj%2BUqUOxzF8KVL3WthW8FRGJfe%2F3P%2B15BBezeSG84df007NNBOl9OuRE%2BJPfWXmB3X%2FQT5ztYMasR%2B5AumQ09G%2FlByDNoXAKAmsmANxCND0pvlT%2FN%2FO4BQfk6XZmiqOdWE0964uFY1fa4oCYAKo1NMKxyv4%2FouX5dMZ1HLbh8XPc6Zz2nrkcnt%2F7O0bMUfjw%2B3KyjYjBOAMUt5DAiUvtWqOSEyFySiWWm47Dcp1W4I6mbzKI2DYXFcFeatK5UWjkP9%2FXd9N14rsDdSkz4YMRbMLxoTHLNoQgXTWXrSjLpoJejsxnIyqNy%2F2tATBy4wMLKy48EGOqUBUe%2BykCFkVrjuJGB4%2Bj9nJTxWa9v2kqm3ANHEjiMCN7YAOiW6%2BTLPQB9Gy6BpQgs8lME35ciV6pV6vH7theDRS1ZBK9M2wH9lWLej014aquqJ%2FxDBOzhTdzVxOJU3o3GRTS4wzSKW0PPlmjQsj5m%2BKV27OQKZK9E1RRlHDEMnE4T%2FyqZuP%2B5uDGlwwt0tIleG1dXGnBdqniReIO9sYsda4vbf5WMS&X-Amz-Signature=094b5ee90a9bbaa0d13a5e7a24b718169107bae300dc9ecb13f72c50fb91e137&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
