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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VSCZZFQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFmVEu67FXxo2uydB21KpGfuaRHs2ji1eqaglnyqv%2BSLAiEA1Y%2FwMP%2BGWO0e027FLWNKg7ruXY%2BIwVNYFDzAEaSd7owqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7Gw5dvQGHvGMAs0yrcA6Mq%2Bs%2FRqWSxoSOLUYPChmQcfKj93zyfY0Ws8yYljWW3bU9D1ytHYDbMLv8Ya2vcT1vauLwGggfaqa8h6w%2B4clSsF5cd6jBq4YeucGF8SCO3xHJInS91VkHu%2Bz%2BYuJwQgIQ9NMK96yMOGsKlLuhjTRP7yq0e6NScH96ofKZq1UpfO10sQdtFg2LVZM%2B4SY0bcrfk1gYjGtkXhScgQC%2F5GjznsH9h2wQlKPGySIgS62xEFpPdP9ZCPup%2BkibzqbBQW0g8ST%2BHNwi%2F%2Fg5OaR3K2BN6mPIl6ojjjW%2FHNW4UYTxObVhOWSRE9kdMrsKZsLbbH19hJqhDCQbUVAED2v8wt2AMsRwOw5pTrcpd3zsC44lQmlvuawlmc8R0u9wt9M4oyUMs1qvj4fqAeIYs26rjztSRj4ovuh8yeFhmZDC122B1rHIKYMsdPQOcdu6W4g6y0iNtw9lF5%2BIgqU3WPwoIoirMNkBpTqzRrpOgbI%2BG86LvJSPx8FE0aai8ZNcik12idnuSVArZMDuV%2B9fC%2FR8gNuzASXKkQlrLH6%2BNcFR0ui8AvRrJKA4IXHfFd6WBwDQU2SXGhE40b6O43HVn2fBmSogRUdajtwxe8dqtzrpbp3tWEQfeMNuJliJPZnWOMNrblcAGOqUBbAurl3nSWmrMYony3oD9MMLYeUhcTpiJ6%2BGq8UNYzwh1mHXZ4quWyu36S5MX%2FktsR96R4PrwL4k5fA7EFp5j6IWJWjR1ov4bzcO9FfReP6V2RtahwsEmLSnOWHJDmXaMA0eacFEnXe6dA8KYhqXY9oNPy2ZxgQB4PBTRBSARL%2Bj01sfV6CGivCHGbHuxPGN3Zt%2BeSjYOsWW5EvgC1giiuehtmznM&X-Amz-Signature=e2799e335df6bca8b736f4f550f6cdec182ed32c9f6be3e945c784f05603f62c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VSCZZFQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFmVEu67FXxo2uydB21KpGfuaRHs2ji1eqaglnyqv%2BSLAiEA1Y%2FwMP%2BGWO0e027FLWNKg7ruXY%2BIwVNYFDzAEaSd7owqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7Gw5dvQGHvGMAs0yrcA6Mq%2Bs%2FRqWSxoSOLUYPChmQcfKj93zyfY0Ws8yYljWW3bU9D1ytHYDbMLv8Ya2vcT1vauLwGggfaqa8h6w%2B4clSsF5cd6jBq4YeucGF8SCO3xHJInS91VkHu%2Bz%2BYuJwQgIQ9NMK96yMOGsKlLuhjTRP7yq0e6NScH96ofKZq1UpfO10sQdtFg2LVZM%2B4SY0bcrfk1gYjGtkXhScgQC%2F5GjznsH9h2wQlKPGySIgS62xEFpPdP9ZCPup%2BkibzqbBQW0g8ST%2BHNwi%2F%2Fg5OaR3K2BN6mPIl6ojjjW%2FHNW4UYTxObVhOWSRE9kdMrsKZsLbbH19hJqhDCQbUVAED2v8wt2AMsRwOw5pTrcpd3zsC44lQmlvuawlmc8R0u9wt9M4oyUMs1qvj4fqAeIYs26rjztSRj4ovuh8yeFhmZDC122B1rHIKYMsdPQOcdu6W4g6y0iNtw9lF5%2BIgqU3WPwoIoirMNkBpTqzRrpOgbI%2BG86LvJSPx8FE0aai8ZNcik12idnuSVArZMDuV%2B9fC%2FR8gNuzASXKkQlrLH6%2BNcFR0ui8AvRrJKA4IXHfFd6WBwDQU2SXGhE40b6O43HVn2fBmSogRUdajtwxe8dqtzrpbp3tWEQfeMNuJliJPZnWOMNrblcAGOqUBbAurl3nSWmrMYony3oD9MMLYeUhcTpiJ6%2BGq8UNYzwh1mHXZ4quWyu36S5MX%2FktsR96R4PrwL4k5fA7EFp5j6IWJWjR1ov4bzcO9FfReP6V2RtahwsEmLSnOWHJDmXaMA0eacFEnXe6dA8KYhqXY9oNPy2ZxgQB4PBTRBSARL%2Bj01sfV6CGivCHGbHuxPGN3Zt%2BeSjYOsWW5EvgC1giiuehtmznM&X-Amz-Signature=c09877225843e4996847ed30216e441f54985efa7a22d45162f0097803986038&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
