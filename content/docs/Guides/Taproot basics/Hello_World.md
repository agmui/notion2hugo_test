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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZGAB5HP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwAnpmgdP4UPfJb7YTgkVu2o%2FctloEZEZWiQlg7vSpYgIgCLF%2F3iK0gWsYAAfolJkLYaQQNO6GwrzZaLJbk%2BQHydsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKq9BPN95zbnIDLDoCrcAxKHHDvDjWn7PBccEdgvQf3qL9OrRPnXp6gb61BvgZuX7YwfmTJ5r%2BTUSBCnsp30K15q5akkfoWAeEWI7afLu%2Fzgu1FHYa%2F6oGp92sZRk9biVHchFtXy26u0QqWsnlX7skY5B0hIjh8YgCCEcW8RIjVRKfUXkgRWqapDoeRIIlVEufzb4wWC%2FXoMeWMPD8FC6uFhoCPsYKNxF0nhGAdeMLRL6nbPUqcz%2FOM57aJeZV21e3%2FZSwnpSRJKLJsHasTTdQLDmcLHD8ykuwteIIBnfL4gz1b81i%2BUojIBQ%2FRV6pPB4Uf6z4VyfjLmwtqNyVikQss%2FIIc43I45rcMiHYl71mYPhS5yq29xjYYGWYLDEnP4zDCG9sg4NLHMfjTCFHApgNcTlmWJJI39dd4hfGw9gUTRP%2FqYJvGRfu5hrN6BP%2FtrK%2Fs7GOYvxXcwq%2FESbyPlOe1apwlaDL%2FvOXRL1J1wI%2BjB%2Fm7Ef4nSBd2sHI%2FjbZghFP%2FHvVowiIu11lc7QazFGY%2FqZxpEqGuv%2BqE9AVZAInydvRsPOv%2FivxbiX5RgKNFryIBr3Kq3IJUZJgbYuBlj6IFYyE6V1TIEk0XASpf2GvWaAyY%2FyslgvEWtwhD%2BZC9npcq7xWqSpyigWKw4MNSVksIGOqUBdza%2BQxp7aRvAlefTqitqCK9zfR2nbwW7p7fh0NApraTeIrpgS1x2WINr%2FUTWid1N8LOnQT8D1fYC9wLnsB74lzFh86zr%2FLXwPOTxdbJc0RZQj6IUgQB84VzvYv2kGMYQq2L2pOHwB5pXRgwK7p4xhmmmmpgUa1PZJ6erQSm8d3ilXX%2FDsBaAFBDcYzeRwZisb%2FVG8nH%2FsOUMyMwrahXcujHNz4Hg&X-Amz-Signature=c708981e78cbae0bbc70e64d6a7cf1cc1d51e15fbe44173f8199ec5e44b9c204&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZGAB5HP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwAnpmgdP4UPfJb7YTgkVu2o%2FctloEZEZWiQlg7vSpYgIgCLF%2F3iK0gWsYAAfolJkLYaQQNO6GwrzZaLJbk%2BQHydsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKq9BPN95zbnIDLDoCrcAxKHHDvDjWn7PBccEdgvQf3qL9OrRPnXp6gb61BvgZuX7YwfmTJ5r%2BTUSBCnsp30K15q5akkfoWAeEWI7afLu%2Fzgu1FHYa%2F6oGp92sZRk9biVHchFtXy26u0QqWsnlX7skY5B0hIjh8YgCCEcW8RIjVRKfUXkgRWqapDoeRIIlVEufzb4wWC%2FXoMeWMPD8FC6uFhoCPsYKNxF0nhGAdeMLRL6nbPUqcz%2FOM57aJeZV21e3%2FZSwnpSRJKLJsHasTTdQLDmcLHD8ykuwteIIBnfL4gz1b81i%2BUojIBQ%2FRV6pPB4Uf6z4VyfjLmwtqNyVikQss%2FIIc43I45rcMiHYl71mYPhS5yq29xjYYGWYLDEnP4zDCG9sg4NLHMfjTCFHApgNcTlmWJJI39dd4hfGw9gUTRP%2FqYJvGRfu5hrN6BP%2FtrK%2Fs7GOYvxXcwq%2FESbyPlOe1apwlaDL%2FvOXRL1J1wI%2BjB%2Fm7Ef4nSBd2sHI%2FjbZghFP%2FHvVowiIu11lc7QazFGY%2FqZxpEqGuv%2BqE9AVZAInydvRsPOv%2FivxbiX5RgKNFryIBr3Kq3IJUZJgbYuBlj6IFYyE6V1TIEk0XASpf2GvWaAyY%2FyslgvEWtwhD%2BZC9npcq7xWqSpyigWKw4MNSVksIGOqUBdza%2BQxp7aRvAlefTqitqCK9zfR2nbwW7p7fh0NApraTeIrpgS1x2WINr%2FUTWid1N8LOnQT8D1fYC9wLnsB74lzFh86zr%2FLXwPOTxdbJc0RZQj6IUgQB84VzvYv2kGMYQq2L2pOHwB5pXRgwK7p4xhmmmmpgUa1PZJ6erQSm8d3ilXX%2FDsBaAFBDcYzeRwZisb%2FVG8nH%2FsOUMyMwrahXcujHNz4Hg&X-Amz-Signature=d8f35353fa6ae1e51a88b209572e40f076adb0821cdb7a08716e33f3432b1c93&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
