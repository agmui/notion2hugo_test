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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPV773U%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBfxD03WyxkCbYYoBj81Wqjlq4NlB77AZWFMk%2BZBRbJwIgJjin6AfDnMPTivP9bYDiKX1sGlkAaIUkdVeZRS2L8NkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb0Hpx1QNX%2BsMUbIircAxe2AU2FsWju692CdsVyFXe4S7vUnR7VP3FTtR1thlcLZYb4feK5GXric1T1bN8JbE8j03dhQV9NGOX3Y8r0jnUB0%2Bm4vxg%2BOo6wZ9DZgkEBRKHuyPvkoyCRWud19MmlkbpaPE3yjqUUkrCgro3hT4Pq66zmpr1t04FOfT22sUe7XuL3%2FnhayF8o20X6zjmimmzwag1cNW7%2FZX01%2BuSnEpxxLv6juOcI%2BBPc0imJPjeYPpHeoRYR4rry%2FMZ3ke%2FZSt%2BSMP8FkhMzSfhOuc%2F4n86uhA4xvXqAb8K3jRLsTheoRVea1pvYz1Jgy1WkhobbIbxt0TOAwpgfN8B21dFAXi8TRmPZocxuzDJCsxgK%2FwfXPMe2F6E2xaTlU94N9CCsqE6EC8qWWBAZYhH17xg3G8VxQonMtMa6mm7S9zb2L8yB7%2FlPA%2F8O5dpiyroQMSm2V0V%2Fp00u%2FI3aPlFLfusJuPlTgtc0cX3OshFqvwdFNNY1auz0dCl9Jy7RAzg9IAnnNqLswc6JPxSIjz%2FODHgSaSAVqZFh1c%2FcFZP11ZQ%2B2P%2F6mxzlFxKEw%2BXXMvLCIvLW2fzBjR%2BVffn82SpJnN81sw3rR8bAQPhKddXlFTrA09psI3NWm3WLtMwVDWUIMNSF6bwGOqUBqqJeb8f5gDpp9rkrKVjo4OwMT3mOq2sgBkVa0TDYQOo4C%2BxtrDAkyRsSJ3olxzHs14VWxvGBtGgTfUkSWlzNoNMr%2Fz9iN5hYtPj6lKgmGx4DPa8ZSUX69fKcrT549jl4oZyXSoa7Vh3EENrMH%2FVPmk6iZf9smWDTmPAnsYbIYsrWb%2FE1GSzidjofQuaoq9Hb%2F%2BQKzbAshPwP9LR%2FieXbQCAgyid%2B&X-Amz-Signature=ddbb8bffc746e028907fa52b8088da973ee0d52369beea8a3599cda95924f7d2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPV773U%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBfxD03WyxkCbYYoBj81Wqjlq4NlB77AZWFMk%2BZBRbJwIgJjin6AfDnMPTivP9bYDiKX1sGlkAaIUkdVeZRS2L8NkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb0Hpx1QNX%2BsMUbIircAxe2AU2FsWju692CdsVyFXe4S7vUnR7VP3FTtR1thlcLZYb4feK5GXric1T1bN8JbE8j03dhQV9NGOX3Y8r0jnUB0%2Bm4vxg%2BOo6wZ9DZgkEBRKHuyPvkoyCRWud19MmlkbpaPE3yjqUUkrCgro3hT4Pq66zmpr1t04FOfT22sUe7XuL3%2FnhayF8o20X6zjmimmzwag1cNW7%2FZX01%2BuSnEpxxLv6juOcI%2BBPc0imJPjeYPpHeoRYR4rry%2FMZ3ke%2FZSt%2BSMP8FkhMzSfhOuc%2F4n86uhA4xvXqAb8K3jRLsTheoRVea1pvYz1Jgy1WkhobbIbxt0TOAwpgfN8B21dFAXi8TRmPZocxuzDJCsxgK%2FwfXPMe2F6E2xaTlU94N9CCsqE6EC8qWWBAZYhH17xg3G8VxQonMtMa6mm7S9zb2L8yB7%2FlPA%2F8O5dpiyroQMSm2V0V%2Fp00u%2FI3aPlFLfusJuPlTgtc0cX3OshFqvwdFNNY1auz0dCl9Jy7RAzg9IAnnNqLswc6JPxSIjz%2FODHgSaSAVqZFh1c%2FcFZP11ZQ%2B2P%2F6mxzlFxKEw%2BXXMvLCIvLW2fzBjR%2BVffn82SpJnN81sw3rR8bAQPhKddXlFTrA09psI3NWm3WLtMwVDWUIMNSF6bwGOqUBqqJeb8f5gDpp9rkrKVjo4OwMT3mOq2sgBkVa0TDYQOo4C%2BxtrDAkyRsSJ3olxzHs14VWxvGBtGgTfUkSWlzNoNMr%2Fz9iN5hYtPj6lKgmGx4DPa8ZSUX69fKcrT549jl4oZyXSoa7Vh3EENrMH%2FVPmk6iZf9smWDTmPAnsYbIYsrWb%2FE1GSzidjofQuaoq9Hb%2F%2BQKzbAshPwP9LR%2FieXbQCAgyid%2B&X-Amz-Signature=085d4daf6c9553cdc659816c2d31cdbe9c4065534bed3aae9eebbe53cfff75dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
