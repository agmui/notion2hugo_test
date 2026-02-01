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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCMEUPH%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXpyOlFaMujd8sLo21IhxGFFP1vGkdvtc3MhDM0OGReAiEAgOtq0kcXVbkzWMu5atIIMCtGfCOrCX5KypLie4bqW%2BIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLwY5a3cR%2B3EzQW0SrcA%2B2cRXryLjIugUMytywy0%2FI%2ByNabDfpLDLoBXhD7hRee%2BsUbj9k%2FtUKSEUdQttpdyjZGcJPv7XhJuMeMPkqkOMhgylssQiuUGwg7bMGTrOKztBO2DRbTPyhVwy06J28dlrOb4jdqfqxysZCcm%2FWTs2u%2BscDjVpHs4igT5gl9sTZD2jo%2B6pPnTxB%2Fnf7Q9fZE6%2BL%2BTKetsyQGNROnYNhdGwfp8kGVdZI8xcgPUluydhu6yWVNxX2y42Jn%2FWFsWmu91plxoDPZN9zm%2Ft33GsqzIyTJvRpv3G784mQ6a%2Fu2N4U6OAbg4vGnAAwcMjKyOe1tQSN4yQTPiVFUvpUlKWKW1rcqcO2TgO%2BoS2E2%2FiyejbqFDKkzuVNBxgIxaM79jrvmGQGa1pO8kUxDelNwGdnBClJ%2F1cZUXUFNfEyJOc%2BpOZ7824gbiIohT1gMtTPu72q9gMmsZJN9wAC%2Fk7SKESHGGzKctd6d7BtInK2UK2%2FeSW9u%2B1%2B4E0cMfKo9avdGphJh2orFqQm0kYqeknq86wg6ZP9NOAR9xDfVgTHvcTTmlASS4ZBUpqVEK9SquJN4wUD1hJwfe8xzLwu%2BcocA6%2FsKL7yEyVgigMzkZvQn4sUMNJI0JIfaxciaX1z8q%2BJ4MLjy%2BcsGOqUBfTJkN7cMWN4EW2DpCOjGa4EstWXrFMeWELj%2FflLb1phpRRFxfxQle9mp1qYGCODYx40gbwqm70KuO0qRU5kxdYGxAAhdDfaUO5WCJZ8k%2FDpw5A7pFbdCW2i9P5%2Bf28tMxJyaPRpIuwb9YYqPhRPVQXCch%2BtXSJHqbE68rE0Tl3lpSGtHdsohJMoEMBdptbSRGIxUkniYvLqyOlobY4m2AdFpmzcZ&X-Amz-Signature=13718b79079ba620607467b170aa39cf5e059d6a17ea0d3086a1d9a98a5c1a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCMEUPH%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXpyOlFaMujd8sLo21IhxGFFP1vGkdvtc3MhDM0OGReAiEAgOtq0kcXVbkzWMu5atIIMCtGfCOrCX5KypLie4bqW%2BIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLwY5a3cR%2B3EzQW0SrcA%2B2cRXryLjIugUMytywy0%2FI%2ByNabDfpLDLoBXhD7hRee%2BsUbj9k%2FtUKSEUdQttpdyjZGcJPv7XhJuMeMPkqkOMhgylssQiuUGwg7bMGTrOKztBO2DRbTPyhVwy06J28dlrOb4jdqfqxysZCcm%2FWTs2u%2BscDjVpHs4igT5gl9sTZD2jo%2B6pPnTxB%2Fnf7Q9fZE6%2BL%2BTKetsyQGNROnYNhdGwfp8kGVdZI8xcgPUluydhu6yWVNxX2y42Jn%2FWFsWmu91plxoDPZN9zm%2Ft33GsqzIyTJvRpv3G784mQ6a%2Fu2N4U6OAbg4vGnAAwcMjKyOe1tQSN4yQTPiVFUvpUlKWKW1rcqcO2TgO%2BoS2E2%2FiyejbqFDKkzuVNBxgIxaM79jrvmGQGa1pO8kUxDelNwGdnBClJ%2F1cZUXUFNfEyJOc%2BpOZ7824gbiIohT1gMtTPu72q9gMmsZJN9wAC%2Fk7SKESHGGzKctd6d7BtInK2UK2%2FeSW9u%2B1%2B4E0cMfKo9avdGphJh2orFqQm0kYqeknq86wg6ZP9NOAR9xDfVgTHvcTTmlASS4ZBUpqVEK9SquJN4wUD1hJwfe8xzLwu%2BcocA6%2FsKL7yEyVgigMzkZvQn4sUMNJI0JIfaxciaX1z8q%2BJ4MLjy%2BcsGOqUBfTJkN7cMWN4EW2DpCOjGa4EstWXrFMeWELj%2FflLb1phpRRFxfxQle9mp1qYGCODYx40gbwqm70KuO0qRU5kxdYGxAAhdDfaUO5WCJZ8k%2FDpw5A7pFbdCW2i9P5%2Bf28tMxJyaPRpIuwb9YYqPhRPVQXCch%2BtXSJHqbE68rE0Tl3lpSGtHdsohJMoEMBdptbSRGIxUkniYvLqyOlobY4m2AdFpmzcZ&X-Amz-Signature=8949d5b53dcfe7f72598e141acff4acff19850e0279d26fc931b0dc0e3c2c0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
