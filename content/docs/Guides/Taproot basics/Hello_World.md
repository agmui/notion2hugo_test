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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642RUTZ6C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD7xBwfXiEreIAM3%2BBZJgdTTHMfONpKT1NvONRao9o6rwIgfEIkjKlDJ1eKs8j0FYjV3uRT1QfwVss34Vg8WTCjKzIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFCQbKTylOVQA0719CrcA2BL%2FejN7NTN6M7rEmq8wDR5EYkCU5PLrITbVfHO8dITnstNlXd4cAHyirvIruW4JLfIxdWDi1H3BwlO2pbBgoTYbbNHj446KbnoFNQbvCM6IhVk835s9rCmrgyoz83LVmpJpjTZxfoZZ2oJFvTWZqpszULx3U%2FXFSglBNzbNflxOWgdIX5TRUwwEYVzw0XT%2BYXS03p7PuXQYjy3xWy40isGieWeEAfB2EpW4nsz8H4S%2F9KyGbpAgd4tedfo3a5HsUpziTke1G5UqglY8878Oosq%2BgHrJwWfXtln4DYU3FrX3S9Og8cbxZcgyvAH6KyJ4JO9ukmNOFHKi9vYmc27o4InqMQ4RuR%2Fu8kbK7cvhHbbN00OnWvgxKwkRYFa5mdpxmRzvyUaiHBKKoxlSc5CIdEzPiHKHi1vbStbBXBB29rjoa4lFjwptuL%2FugIJCVHo54GVL8kiI3cpFV1LIqn3ugfi9CPXdV5k%2Fpz%2BI52pUh1bx5Ri%2BMlfCXw%2FCV41Inhv0BwrvBOaCJd%2FHOL%2B7nP6w%2FmwfdAG1M23jgMqaj2fx%2FGma93Fff%2BbuDvg97fSeDVKa1yqUbOL6r5EeBNq0U7IG%2FsZp%2FYBtN%2FmZnTatBZVgiypb75tBTYrzDQgTrI0MMry9MIGOqUBNzUSGZYMj%2F0%2F1N2kmxIJ%2Fv3GKRupPjKdTnc3C3aIjuVNMtQGF9dmab4Jisme0%2F%2Fb7W4Y4e33dmxvid%2BBv8dPud7kGoM1TtisT4%2FXiZZ5mcNrkQdtzak5bhriEgHAKBOpSmlTBr0RSa%2Blx6qHeaIAsL7SVi15I8FDcFVyULOgIn5DlZxxhrVdN8IqhhcD4UoMA%2BS%2F233MolF9pv%2BuMWpTWDZP2SRJ&X-Amz-Signature=2316a123dab49caa0455823ef9fd42c6f681860f5d72d9fd47db949a0b3a4cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642RUTZ6C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD7xBwfXiEreIAM3%2BBZJgdTTHMfONpKT1NvONRao9o6rwIgfEIkjKlDJ1eKs8j0FYjV3uRT1QfwVss34Vg8WTCjKzIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFCQbKTylOVQA0719CrcA2BL%2FejN7NTN6M7rEmq8wDR5EYkCU5PLrITbVfHO8dITnstNlXd4cAHyirvIruW4JLfIxdWDi1H3BwlO2pbBgoTYbbNHj446KbnoFNQbvCM6IhVk835s9rCmrgyoz83LVmpJpjTZxfoZZ2oJFvTWZqpszULx3U%2FXFSglBNzbNflxOWgdIX5TRUwwEYVzw0XT%2BYXS03p7PuXQYjy3xWy40isGieWeEAfB2EpW4nsz8H4S%2F9KyGbpAgd4tedfo3a5HsUpziTke1G5UqglY8878Oosq%2BgHrJwWfXtln4DYU3FrX3S9Og8cbxZcgyvAH6KyJ4JO9ukmNOFHKi9vYmc27o4InqMQ4RuR%2Fu8kbK7cvhHbbN00OnWvgxKwkRYFa5mdpxmRzvyUaiHBKKoxlSc5CIdEzPiHKHi1vbStbBXBB29rjoa4lFjwptuL%2FugIJCVHo54GVL8kiI3cpFV1LIqn3ugfi9CPXdV5k%2Fpz%2BI52pUh1bx5Ri%2BMlfCXw%2FCV41Inhv0BwrvBOaCJd%2FHOL%2B7nP6w%2FmwfdAG1M23jgMqaj2fx%2FGma93Fff%2BbuDvg97fSeDVKa1yqUbOL6r5EeBNq0U7IG%2FsZp%2FYBtN%2FmZnTatBZVgiypb75tBTYrzDQgTrI0MMry9MIGOqUBNzUSGZYMj%2F0%2F1N2kmxIJ%2Fv3GKRupPjKdTnc3C3aIjuVNMtQGF9dmab4Jisme0%2F%2Fb7W4Y4e33dmxvid%2BBv8dPud7kGoM1TtisT4%2FXiZZ5mcNrkQdtzak5bhriEgHAKBOpSmlTBr0RSa%2Blx6qHeaIAsL7SVi15I8FDcFVyULOgIn5DlZxxhrVdN8IqhhcD4UoMA%2BS%2F233MolF9pv%2BuMWpTWDZP2SRJ&X-Amz-Signature=b9de2c8d1a2d678daa75916aa9de579bcdd2fdfb636c6ed9f076e6ebbc00cc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
