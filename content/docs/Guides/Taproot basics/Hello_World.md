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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFFTCUV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfW8ZXkvM6Soca8MDb1mJyTbObuLwDVgqJucSokoPeIAIgcn0hB0BmQcH26EBvZUcjUxh9Q9A2eirpNAi%2FbJaJhqQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeE1IwZYysIZqNewSrcA2PHprdP6rtk0zOFP0aBBt8tYcaJWVhn%2FevhKcK%2B5hBhtB2%2F68YRgV%2F6BZXf7k2XVelz7MeBWoT4Ey9LB%2B6xH4%2FAWDdOgPfzgblKlvvDQZXjOFfgb2iK515qUaZc3vvZSbWFVLKee0Bl%2FoH4Y5YAcGhhI51mgYmtMst5rJwhed7yq1hlD%2BCCaY%2BjPe%2FIOOt4TmKyq46m%2B2o9pwnYEvIkucTYHaR0GjawMoy6biCxJ4U%2BL8RGky5yq7U9Cq2aWyNVnkSdTufjxSO4igSHlRvE%2FkZT7suSIeZXiCh7Mwfq9R4B91vOd415c%2B8veoTx1g7Todhjc1hvc7fmYHQrMkMkis9yVTcVLSlR4Kgkr8JUFegrct%2FimaGbzTmcYlSa1Qca1QgBvMnFBfX1uA8xaTXPuFkYslgErNljpFstiGHgdhbyUdmxXo23SlhyBktbroonAWvm%2Bhqy6jzswbWfgPg0PvPZxOg%2B0QPTSP9YGhI0IsnnYCMFdP4SXlGCNNj6ayVWZv8CmBVfldCEMj%2BaG3Gw%2BrtkvZ487qkohKR1vusdZZ2xXU%2BYARaJzwWtRuFbL4eHerx03OYAfMPvax1gCMs3hH914rBjHQbBAMoiIXhIIwFuX1nftdXHxB1782FrMP2c5cQGOqUBiu4%2F8f0%2BkJdbHQ4rEJLJ1DNHlsiqLyWRUKoj16ht5F6QfxhwtVOnPtr%2BzQJFZfhU2K67snU%2F2L8HKFHUEhsTdPMzJwH%2BJhK1UaPxvpsgsc4zERPl2EHDAHTNxPLJCheJxgHHE8SqWsgowyYBR%2FduTj4IpTCVt7WgpKZwdzIdQnI99iUu2eLePMm4BQQJOzMI%2BEd2neX8cnyg80OX77Ipeu%2B%2B5F17&X-Amz-Signature=3ef6bcbdcda9751952d748043a3a77c3918cdba56f477800c998d55fd0cd0a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFFTCUV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfW8ZXkvM6Soca8MDb1mJyTbObuLwDVgqJucSokoPeIAIgcn0hB0BmQcH26EBvZUcjUxh9Q9A2eirpNAi%2FbJaJhqQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeE1IwZYysIZqNewSrcA2PHprdP6rtk0zOFP0aBBt8tYcaJWVhn%2FevhKcK%2B5hBhtB2%2F68YRgV%2F6BZXf7k2XVelz7MeBWoT4Ey9LB%2B6xH4%2FAWDdOgPfzgblKlvvDQZXjOFfgb2iK515qUaZc3vvZSbWFVLKee0Bl%2FoH4Y5YAcGhhI51mgYmtMst5rJwhed7yq1hlD%2BCCaY%2BjPe%2FIOOt4TmKyq46m%2B2o9pwnYEvIkucTYHaR0GjawMoy6biCxJ4U%2BL8RGky5yq7U9Cq2aWyNVnkSdTufjxSO4igSHlRvE%2FkZT7suSIeZXiCh7Mwfq9R4B91vOd415c%2B8veoTx1g7Todhjc1hvc7fmYHQrMkMkis9yVTcVLSlR4Kgkr8JUFegrct%2FimaGbzTmcYlSa1Qca1QgBvMnFBfX1uA8xaTXPuFkYslgErNljpFstiGHgdhbyUdmxXo23SlhyBktbroonAWvm%2Bhqy6jzswbWfgPg0PvPZxOg%2B0QPTSP9YGhI0IsnnYCMFdP4SXlGCNNj6ayVWZv8CmBVfldCEMj%2BaG3Gw%2BrtkvZ487qkohKR1vusdZZ2xXU%2BYARaJzwWtRuFbL4eHerx03OYAfMPvax1gCMs3hH914rBjHQbBAMoiIXhIIwFuX1nftdXHxB1782FrMP2c5cQGOqUBiu4%2F8f0%2BkJdbHQ4rEJLJ1DNHlsiqLyWRUKoj16ht5F6QfxhwtVOnPtr%2BzQJFZfhU2K67snU%2F2L8HKFHUEhsTdPMzJwH%2BJhK1UaPxvpsgsc4zERPl2EHDAHTNxPLJCheJxgHHE8SqWsgowyYBR%2FduTj4IpTCVt7WgpKZwdzIdQnI99iUu2eLePMm4BQQJOzMI%2BEd2neX8cnyg80OX77Ipeu%2B%2B5F17&X-Amz-Signature=cb3c50de064ff0c0ed42ded383bb99dde592b3da34f2a078b30e1ce7bd060c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
