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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJJAT2I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCblYXwdS38sts6gS7yuhpnA2F1P031H8dlpCDOAvxv5wIgJZu4whM%2BuTlWRRTwtY7XsiKMenfD%2Bqway8GBetFa%2FJAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2FOMaC5ln9JgRhUlSrcA1lntkEiFuDupNoAoVDKLwoJ5RF%2BCkPhIt1633wQ1beBPnetcj3PWMvEJXNCFr0OMIg3Py5BRW37QlfENV8liZC6Pn1IfB18s0gNDF0MaJocik4XKYrk2C6mUQchr23pJCiuSIXisCoO4HZ%2FwB6PInv1bCiOxY20Ff0UfIhH8H9%2Bkrib3l2ItvLjxVE89vcnJ4RBp3Px2pN7laUXhAKASmeBzboXe4xQdLXSrI9Xd2SdvNXZnTeNwQBfRFQ5pKAU1GXUjsX8OZA13kUkpY%2FBa13KNk9sVrjpqNxKKvnfPkejXflNjpXmH3wJxXjsWxSA9tewvzuzdANr6ROHqMNAfmlzSPHzkfqccraXjZE%2FORPyAwlm757WJLYeX7jOYmon5Wh%2Fa%2Bp%2BLI14ba%2FzGKAq7pLieTozVEkP69tEyAY55jqIu2wbJJg9FY78TiUtjlihRdQG0NbgKaWVxKlioHVFy1dv%2BrYon3IjQ4lo6lpV7XD7FgrJTZ3KG34BNueb98nlGhHZwFLy89GYuD2Gez05K3SgTiAMZjY8%2FC7rbk38FOABDBZmeL%2BE5Z%2B1MoVaGMDU5GWCu30j50fLEM7c%2FUZfyQmDogENAn0GTi4OXwJfDah6z%2FzhxfoxtJP6XutBMOKw574GOqUBcYQWQbT9LQf7xpYqh%2FiKjSeEdaMiw7%2BFjScT%2BYopwJCrl4MulerWai1rH4YBVl3w%2FcCbY3NrafE29AbG%2FVV%2F6byRL%2Fg%2BE7Bc2WyDiZAxVCC%2FfqeuOoZI7DcOo41Y5yTor3TlxwjOvwHg7YZd3ekfqd%2BVS0R6SuDLTryLhaWnEQPVSOmFyOQlf12vbrZ1SacUfRw%2FkZkp%2BFOtlwJIv75L5omgFxjL&X-Amz-Signature=fad1dc6ffc7152c18041c61e041ad82a155b086cc8770edac41eb322ff492a15&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJJAT2I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCblYXwdS38sts6gS7yuhpnA2F1P031H8dlpCDOAvxv5wIgJZu4whM%2BuTlWRRTwtY7XsiKMenfD%2Bqway8GBetFa%2FJAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2FOMaC5ln9JgRhUlSrcA1lntkEiFuDupNoAoVDKLwoJ5RF%2BCkPhIt1633wQ1beBPnetcj3PWMvEJXNCFr0OMIg3Py5BRW37QlfENV8liZC6Pn1IfB18s0gNDF0MaJocik4XKYrk2C6mUQchr23pJCiuSIXisCoO4HZ%2FwB6PInv1bCiOxY20Ff0UfIhH8H9%2Bkrib3l2ItvLjxVE89vcnJ4RBp3Px2pN7laUXhAKASmeBzboXe4xQdLXSrI9Xd2SdvNXZnTeNwQBfRFQ5pKAU1GXUjsX8OZA13kUkpY%2FBa13KNk9sVrjpqNxKKvnfPkejXflNjpXmH3wJxXjsWxSA9tewvzuzdANr6ROHqMNAfmlzSPHzkfqccraXjZE%2FORPyAwlm757WJLYeX7jOYmon5Wh%2Fa%2Bp%2BLI14ba%2FzGKAq7pLieTozVEkP69tEyAY55jqIu2wbJJg9FY78TiUtjlihRdQG0NbgKaWVxKlioHVFy1dv%2BrYon3IjQ4lo6lpV7XD7FgrJTZ3KG34BNueb98nlGhHZwFLy89GYuD2Gez05K3SgTiAMZjY8%2FC7rbk38FOABDBZmeL%2BE5Z%2B1MoVaGMDU5GWCu30j50fLEM7c%2FUZfyQmDogENAn0GTi4OXwJfDah6z%2FzhxfoxtJP6XutBMOKw574GOqUBcYQWQbT9LQf7xpYqh%2FiKjSeEdaMiw7%2BFjScT%2BYopwJCrl4MulerWai1rH4YBVl3w%2FcCbY3NrafE29AbG%2FVV%2F6byRL%2Fg%2BE7Bc2WyDiZAxVCC%2FfqeuOoZI7DcOo41Y5yTor3TlxwjOvwHg7YZd3ekfqd%2BVS0R6SuDLTryLhaWnEQPVSOmFyOQlf12vbrZ1SacUfRw%2FkZkp%2BFOtlwJIv75L5omgFxjL&X-Amz-Signature=7c5de3952c6620a051dcb29514922da6ac50ed4f12fcc7f44a62d7f3fdde04a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
