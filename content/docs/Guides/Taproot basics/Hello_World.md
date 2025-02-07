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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7P4CZUY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDEYV%2FWnoCCEsuQyG1OHbHfRvXZ0FkLmdk6T2IzVhX91AIgFCdX1enYqzSnC2rRnV1Dii1a2h9OioiAGNiT51ya5swq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ5ecQWmQK2h4ZEj1SrcA4dgQNXIQsZjOCuAAm2WNPRhYOl26hf6cui92gLzk%2FaTif6ksYUlZ7GO6J7wImXS4pPmgOn0pAYJOhNePyEOuHa5CpjBE5ueJhRmDhIl4k3iHf2G%2FKdLLa6JfTZ%2BddfMT2lj6llass50%2FYfSRIu%2FAh5dCsH2wAb5NjVUYjCj%2BFlUd8OvHeehfgmpMlr0EjFpP9Zyaa5LorJKR0EOeEt1yyBCtV2Nhnt8p25ycYNrCe03XXg0YBQPOQgkfNdntjTYQX58PSQ3hhrfGj1b3oEthr%2FgIK0jvlcbLwSUmf6qQad3DnKq2ownichtTDaMKVYfC0AqRpIUGykr4dHeAVKkYLX4jdfw7799pANxqGqL5b7Da%2FhKz0fZCTgXtNWQohdamufwmMZZs%2BL6Uzn1BBZ6WHI48sZwo8Lfy%2FTvWzyMgzD2M%2BSrynvkIghp%2BsWZL5zCnh9yLQyZNnxBE6AVHFhbumcPuxtzOZlyT%2F7BOTO3wFM2LycMNVmRjtTYTeleWtLRBpUKFscsx%2FLRM3BUc4RQYPbLS0iX5HO2gxzzy3ECxaIDRMFwV98HvOtPO0XD12lfTT7Q8S9KLM1sDwhC%2BF06YZh2r8LIkm6z3%2BDrY1A3jTyPxCwmWGZKYl2pAMxfMLiMmL0GOqUBWXsWSEhY50PiQjOyNcgPLWlOydffkrpi8KyazOT%2FFrhoboBAYp6CWhT9VZD2Hxn1YCfPxlHwD2LMt5TmIVW%2FyUkA44kU1Zci6apsUFIdAXMEX5YgoBAkr3pojORfl9Dw9k5ArmdCQt%2BM7cVO8YKij7Mwp13RikETREPpnP9gi61OSbKXVqvnFrI0eLFnGQaE6KO1FZ7vZQgSmCjUajf7ouNemnee&X-Amz-Signature=6d023c54d0941468519f503dd51204d99d0cf6133cbf44bafeab15ebdc5a5a42&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7P4CZUY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDEYV%2FWnoCCEsuQyG1OHbHfRvXZ0FkLmdk6T2IzVhX91AIgFCdX1enYqzSnC2rRnV1Dii1a2h9OioiAGNiT51ya5swq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ5ecQWmQK2h4ZEj1SrcA4dgQNXIQsZjOCuAAm2WNPRhYOl26hf6cui92gLzk%2FaTif6ksYUlZ7GO6J7wImXS4pPmgOn0pAYJOhNePyEOuHa5CpjBE5ueJhRmDhIl4k3iHf2G%2FKdLLa6JfTZ%2BddfMT2lj6llass50%2FYfSRIu%2FAh5dCsH2wAb5NjVUYjCj%2BFlUd8OvHeehfgmpMlr0EjFpP9Zyaa5LorJKR0EOeEt1yyBCtV2Nhnt8p25ycYNrCe03XXg0YBQPOQgkfNdntjTYQX58PSQ3hhrfGj1b3oEthr%2FgIK0jvlcbLwSUmf6qQad3DnKq2ownichtTDaMKVYfC0AqRpIUGykr4dHeAVKkYLX4jdfw7799pANxqGqL5b7Da%2FhKz0fZCTgXtNWQohdamufwmMZZs%2BL6Uzn1BBZ6WHI48sZwo8Lfy%2FTvWzyMgzD2M%2BSrynvkIghp%2BsWZL5zCnh9yLQyZNnxBE6AVHFhbumcPuxtzOZlyT%2F7BOTO3wFM2LycMNVmRjtTYTeleWtLRBpUKFscsx%2FLRM3BUc4RQYPbLS0iX5HO2gxzzy3ECxaIDRMFwV98HvOtPO0XD12lfTT7Q8S9KLM1sDwhC%2BF06YZh2r8LIkm6z3%2BDrY1A3jTyPxCwmWGZKYl2pAMxfMLiMmL0GOqUBWXsWSEhY50PiQjOyNcgPLWlOydffkrpi8KyazOT%2FFrhoboBAYp6CWhT9VZD2Hxn1YCfPxlHwD2LMt5TmIVW%2FyUkA44kU1Zci6apsUFIdAXMEX5YgoBAkr3pojORfl9Dw9k5ArmdCQt%2BM7cVO8YKij7Mwp13RikETREPpnP9gi61OSbKXVqvnFrI0eLFnGQaE6KO1FZ7vZQgSmCjUajf7ouNemnee&X-Amz-Signature=26fb4cfd3fc032e98acee9bcc2eeb683eb368203c6ab08bca1087150f16e1779&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
