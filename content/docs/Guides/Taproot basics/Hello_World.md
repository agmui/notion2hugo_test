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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6VCKODL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAdi%2BrdaaspFnm4ApqbdRHIeQDpxsXXOlaaj6%2BXQSOZxAiEAnFcAS%2BO4WS8gAiysi4HmyM2echA4IWZtLgmxFJN8jaIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV78bH1LeoqRB93QyrcAyzZmFVTzUf%2FNza6fbm%2BkQ5a6f2xqVuUO9cUIQVz91UjsXcopKDkwYo%2BmNjUMEMZXQsB81LNU9JzSj5R5kEJ3BMiJJblUWp4b6t1oYYEnhSDmPxoM1682sfa0T5leTPd4pw9pEI%2FwxFv4Engx8DS34vg%2FIfEYmp7LbB0ve3kViazVXuXOsBNGnLXQjTsJeXCLsDoulUz4zhNtBFf%2Bo%2F%2BL6UCeMfERDcWCtBTq9sXV5oxsNrA9gk3wPvsGRSiwCwaF1hgmlh1jDL5Li4uN5MIHLYh1ZljTrE4pELP5Ydt0ruJ%2FBNxIVXb4vC6OeKFicY%2FnpKz1h%2FRodVS6w6Xd54acNvaJdz9NUOzPKKeY%2BWvZFI9RuwCosgpoOYRg6KeOO72uTQ85vRhg%2FGQnYaJm30OvS7B64qzjuQG8zYbVvQ2SYeKR6z%2FGnWBdJBmmSVjVQfpvN0%2BmAFZOhENb1zxnn0unpaOn0ht%2B0Q19B0jpq%2B26IkoArJgJ55W7wtL9zSYjhUCEYUbzQ1JRrPy1L7BdX%2BIk%2FBtRrFp4V1NkDqJR0GNkEN5sNimFM34kN0Ak4Uc6FmF%2F7bAMCsotZl4TwNwTWynQCLdlBGmS3cdmF8TLAjMPhyFg87a0GlymRD7B0RgMM%2BjuMEGOqUBIxXc85FpnbqeDiOi9wiUAhwELf7xxIqDQgDcdT6RZAHiy0qwFgVkP4e09xyyDAaokt7z%2BOg8Z%2FCwTUhGIMQWL0siC3MraivpbvBjr5FXScGaDhp7qFNpTljsfeEz7K6wBSolGoInZgS90hQVfmhMgrkMiFkfCtqub3rWlbWGg8mqGKxffeSQLVaRgSRNePwhING%2F4C%2FYw1j6rymHID8v969%2FaWyY&X-Amz-Signature=61adcba80d9536c1e2c0cc0110ec20ce93d95a5bbd7a65fd6734728d6ca5328f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6VCKODL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAdi%2BrdaaspFnm4ApqbdRHIeQDpxsXXOlaaj6%2BXQSOZxAiEAnFcAS%2BO4WS8gAiysi4HmyM2echA4IWZtLgmxFJN8jaIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV78bH1LeoqRB93QyrcAyzZmFVTzUf%2FNza6fbm%2BkQ5a6f2xqVuUO9cUIQVz91UjsXcopKDkwYo%2BmNjUMEMZXQsB81LNU9JzSj5R5kEJ3BMiJJblUWp4b6t1oYYEnhSDmPxoM1682sfa0T5leTPd4pw9pEI%2FwxFv4Engx8DS34vg%2FIfEYmp7LbB0ve3kViazVXuXOsBNGnLXQjTsJeXCLsDoulUz4zhNtBFf%2Bo%2F%2BL6UCeMfERDcWCtBTq9sXV5oxsNrA9gk3wPvsGRSiwCwaF1hgmlh1jDL5Li4uN5MIHLYh1ZljTrE4pELP5Ydt0ruJ%2FBNxIVXb4vC6OeKFicY%2FnpKz1h%2FRodVS6w6Xd54acNvaJdz9NUOzPKKeY%2BWvZFI9RuwCosgpoOYRg6KeOO72uTQ85vRhg%2FGQnYaJm30OvS7B64qzjuQG8zYbVvQ2SYeKR6z%2FGnWBdJBmmSVjVQfpvN0%2BmAFZOhENb1zxnn0unpaOn0ht%2B0Q19B0jpq%2B26IkoArJgJ55W7wtL9zSYjhUCEYUbzQ1JRrPy1L7BdX%2BIk%2FBtRrFp4V1NkDqJR0GNkEN5sNimFM34kN0Ak4Uc6FmF%2F7bAMCsotZl4TwNwTWynQCLdlBGmS3cdmF8TLAjMPhyFg87a0GlymRD7B0RgMM%2BjuMEGOqUBIxXc85FpnbqeDiOi9wiUAhwELf7xxIqDQgDcdT6RZAHiy0qwFgVkP4e09xyyDAaokt7z%2BOg8Z%2FCwTUhGIMQWL0siC3MraivpbvBjr5FXScGaDhp7qFNpTljsfeEz7K6wBSolGoInZgS90hQVfmhMgrkMiFkfCtqub3rWlbWGg8mqGKxffeSQLVaRgSRNePwhING%2F4C%2FYw1j6rymHID8v969%2FaWyY&X-Amz-Signature=9d028a949a75b9f606d513b03d7091d3cb8b8e4c0d21c47724eb74b0c9c00980&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
