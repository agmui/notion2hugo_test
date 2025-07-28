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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEXV7AE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIGO%2BvnyWrnJVgK2F89eWdrAW6Niyk9%2FwZv0sUXRPGmQFAiACGblwiiud5IWEof1%2BE%2FuBpagps7owrjQSG60o4QLdwSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6U2T2SMcIeT3Z9RWKtwDQ1F6WkS5UzIyxplm1Oda5zPaqWU%2Fed44S3BjNkNRvNj8a1NbqitBeN92APyMoTwFH08oiCyZbwMybRSVLSJQ%2B%2FA38MU6qoeAb%2BmstaBf2nivq3%2FGNJzBH6ag0V0KvP%2Fq%2Bw7beXFkZZyPtXUbX51epKFtBbZ3T6cQYzc1fEsRQajr62q9Zwh2VXIhZeZtEffoMNCVRNCuTYM8EhbhsJ75ujiks1MBUDqOgD5hhlpwePrytGC2hd0zstidGybHjPSk8oRxxFs4W3bJ%2Fp6EXm0WKRbCpbpfB%2FHJBgjfw7ze%2BlCjX%2FeqVVg0mx42gYX%2Bs7nc%2FVNV1Ya91O%2FTpEzqi0yyHvtk34YrxL3tbwtgw9CE62%2BoUm7M6NCJtS2pXObKsALWwwBIRBf6Sd4QBTJuFc9agim24oddtoktdJfLmH%2BdSn8byMqZwShuMkicyJmBbyJ9gk%2FizRUVlll5%2BRyJFe%2BrtDAfwaptlgaHcJYvR5vxMaAtgnTjjhD3R8q%2Fq%2BajZ03Qp15Gnn1g1qCxQD5bSJeU5E2V2jtkdlY2BzRlSLyFhZ3cXK18%2FXSiRk7zgei5f6fCSaK3rttd2naV%2BL9CIqq2tAxKA4sh5LgWIImbfJle1pMAEbM3DchAbpBs6uEwyY%2BcxAY6pgHNB09h3xHlBZjs%2BQUzYwTFfP%2B3HfaULbfSVWYMLi32NbpjZTnFnbckMNSUd9HDpWf3pIYfFb%2BibsK9U9u%2BlLgiOJ8J1Kkj0ia1FLOQJ6OP5uOu0n6D0qKgExzokd9x5oa7DjbBz%2BMZxeYyVfX8OIkF1BIO6U%2BUIlbSK%2FU9aF2AQsjcQt5%2F%2FcOCm34q8HyknmKnf0Hi24kiNGrbMp%2FtkEjKxJCEgrmd&X-Amz-Signature=5cc4afdb7132b698647b0c8b35fb59c846fb9c062ff13f86ab91da29d7447dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEXV7AE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIGO%2BvnyWrnJVgK2F89eWdrAW6Niyk9%2FwZv0sUXRPGmQFAiACGblwiiud5IWEof1%2BE%2FuBpagps7owrjQSG60o4QLdwSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6U2T2SMcIeT3Z9RWKtwDQ1F6WkS5UzIyxplm1Oda5zPaqWU%2Fed44S3BjNkNRvNj8a1NbqitBeN92APyMoTwFH08oiCyZbwMybRSVLSJQ%2B%2FA38MU6qoeAb%2BmstaBf2nivq3%2FGNJzBH6ag0V0KvP%2Fq%2Bw7beXFkZZyPtXUbX51epKFtBbZ3T6cQYzc1fEsRQajr62q9Zwh2VXIhZeZtEffoMNCVRNCuTYM8EhbhsJ75ujiks1MBUDqOgD5hhlpwePrytGC2hd0zstidGybHjPSk8oRxxFs4W3bJ%2Fp6EXm0WKRbCpbpfB%2FHJBgjfw7ze%2BlCjX%2FeqVVg0mx42gYX%2Bs7nc%2FVNV1Ya91O%2FTpEzqi0yyHvtk34YrxL3tbwtgw9CE62%2BoUm7M6NCJtS2pXObKsALWwwBIRBf6Sd4QBTJuFc9agim24oddtoktdJfLmH%2BdSn8byMqZwShuMkicyJmBbyJ9gk%2FizRUVlll5%2BRyJFe%2BrtDAfwaptlgaHcJYvR5vxMaAtgnTjjhD3R8q%2Fq%2BajZ03Qp15Gnn1g1qCxQD5bSJeU5E2V2jtkdlY2BzRlSLyFhZ3cXK18%2FXSiRk7zgei5f6fCSaK3rttd2naV%2BL9CIqq2tAxKA4sh5LgWIImbfJle1pMAEbM3DchAbpBs6uEwyY%2BcxAY6pgHNB09h3xHlBZjs%2BQUzYwTFfP%2B3HfaULbfSVWYMLi32NbpjZTnFnbckMNSUd9HDpWf3pIYfFb%2BibsK9U9u%2BlLgiOJ8J1Kkj0ia1FLOQJ6OP5uOu0n6D0qKgExzokd9x5oa7DjbBz%2BMZxeYyVfX8OIkF1BIO6U%2BUIlbSK%2FU9aF2AQsjcQt5%2F%2FcOCm34q8HyknmKnf0Hi24kiNGrbMp%2FtkEjKxJCEgrmd&X-Amz-Signature=cf4e05b1b27970c9cc75e8332ea1e7b1c192e9bad7b7e84f376ee6ad276e1f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
