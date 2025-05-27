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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPYXKUW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP7pNRor3X2QesVHXAwYmXYqeSb8RudnHNaMyVhAvNBAIhAOQv9I1BO%2FCJ0XizrQz00uppyXHZ8tdQIM26pOumVWPiKv8DCF8QABoMNjM3NDIzMTgzODA1Igwtq0FTuaMA8TtIyaoq3APJK4jhWw%2BjANiB5LUIDszFjIievDbZITvCb%2Bntv%2BVBMCyqbyRTlWiIl5Va7uFz6tfill3gn7xs81PPRxyNqOgSJ8f1gWRlJeoWdsco1TFwnbSX8XPc37gSisXoR53STBMgFqmHmqZt88BDC40PYIsg2da66mX2Rp9ksJRVqUdrSpN5Gg%2FpP4Pu%2BdLFt4RspC%2BsiDLIpURp%2B0oP%2Fj%2BX0iWEa2nBqSMk13TYnMCwiitKhkCKqc6yP3o7X5GnGLWwP85wM6rtKBCHSVQHWZpRmgkr5QtXtD2H8zNfHP82S7DzS86L6G1Fc4Z56VZ1suTS6%2Buq%2FAKnmocUSTdLl6fftjvuvbQcP16YNGE68gfhWnfzf9KAOI6H0cOlNP5ZPYQuBplzT%2BQ6BTOTez9%2FEShFt%2BPaOBeUhfQX0XwqvJILud94xTf7VbRHbJYIdM8KbvHJyCzkAzcxSV8%2BxmOfmN5Q3SaU%2FLtpO7E7Uwc60xdrK%2BoTHJAjcMfCvwjL%2BJHFLHaYzSO9g%2BbofV4bFhtTkt6t%2FDbot6dIkcfDHIv4q7yMYbXCdWIJD7HwRJg1GzV3jaA%2FUzoreW5iQaCn8MmU3E1A4wT%2Fh4Auk%2FU1bjXA1BOZNaM5eC%2Fsb0LPVkadlw5GUDC1%2FNbBBjqkAfjzwl6QqOidKX73jkONV6kRYAen1Aus6hca4IpXYkv3PMxEqWjsBKNcoBcN%2BNA6YpDwAzkrR89jrroWnRnfr1PnfK5l4U0Pnv6iap3HOQAMitL2fZpmTTetUDGHw8UHT4w9J7NydDTuQnsBTrzJBHFW3CJJDNWony7u1EedCM2ohtX%2BkkCk3y0feQBoXGSoL9maajjPpa99kM2ErGA8fJwgNzQo&X-Amz-Signature=e9836bec831657c5e1538620f55531891147e0797f781c875e56a3e46f018f12&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPYXKUW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP7pNRor3X2QesVHXAwYmXYqeSb8RudnHNaMyVhAvNBAIhAOQv9I1BO%2FCJ0XizrQz00uppyXHZ8tdQIM26pOumVWPiKv8DCF8QABoMNjM3NDIzMTgzODA1Igwtq0FTuaMA8TtIyaoq3APJK4jhWw%2BjANiB5LUIDszFjIievDbZITvCb%2Bntv%2BVBMCyqbyRTlWiIl5Va7uFz6tfill3gn7xs81PPRxyNqOgSJ8f1gWRlJeoWdsco1TFwnbSX8XPc37gSisXoR53STBMgFqmHmqZt88BDC40PYIsg2da66mX2Rp9ksJRVqUdrSpN5Gg%2FpP4Pu%2BdLFt4RspC%2BsiDLIpURp%2B0oP%2Fj%2BX0iWEa2nBqSMk13TYnMCwiitKhkCKqc6yP3o7X5GnGLWwP85wM6rtKBCHSVQHWZpRmgkr5QtXtD2H8zNfHP82S7DzS86L6G1Fc4Z56VZ1suTS6%2Buq%2FAKnmocUSTdLl6fftjvuvbQcP16YNGE68gfhWnfzf9KAOI6H0cOlNP5ZPYQuBplzT%2BQ6BTOTez9%2FEShFt%2BPaOBeUhfQX0XwqvJILud94xTf7VbRHbJYIdM8KbvHJyCzkAzcxSV8%2BxmOfmN5Q3SaU%2FLtpO7E7Uwc60xdrK%2BoTHJAjcMfCvwjL%2BJHFLHaYzSO9g%2BbofV4bFhtTkt6t%2FDbot6dIkcfDHIv4q7yMYbXCdWIJD7HwRJg1GzV3jaA%2FUzoreW5iQaCn8MmU3E1A4wT%2Fh4Auk%2FU1bjXA1BOZNaM5eC%2Fsb0LPVkadlw5GUDC1%2FNbBBjqkAfjzwl6QqOidKX73jkONV6kRYAen1Aus6hca4IpXYkv3PMxEqWjsBKNcoBcN%2BNA6YpDwAzkrR89jrroWnRnfr1PnfK5l4U0Pnv6iap3HOQAMitL2fZpmTTetUDGHw8UHT4w9J7NydDTuQnsBTrzJBHFW3CJJDNWony7u1EedCM2ohtX%2BkkCk3y0feQBoXGSoL9maajjPpa99kM2ErGA8fJwgNzQo&X-Amz-Signature=e7b6736ed1957882b08918a17de007696deec0b9f496e8096f9ff1bdfe1553f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
