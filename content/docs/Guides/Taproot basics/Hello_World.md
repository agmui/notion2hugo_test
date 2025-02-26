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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VPYB4YJ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIHHQDLlLblXKsoqm02TKZvKhvcLSKY24aA7k2kBWegeeAiAKxLHGNKVmYHdy0G9w8kJSGfK3rHHNx1LPBjoBkdhGPCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPFN%2FFnhFV1PXrd1OKtwDT5sNyAdywdKx7h53rZ9p50yCDq3VJrLvCnVoqOvtoap70auG469PID6XdX8AE6rxljL2%2BDsahgGJJLkoq2IwGCCe2hUG8VvN6PljUGb4ncS80chnNkIJdV3wqV9Y%2FMEf2yljGfBl1KoD4Q24U0saJhsamLWkWX6VBGidMAeypJ9e%2F4UO0xl8kdif9bdE1oUe6ndu1Z1RCBis7oryIK5NRatZofO00CtjB1ZE7KroBk9QMplor3qOH5Z%2BehbTB2Yuu1LD9NdafxwWMBCF2sub3Ciu7uLAFUOcnQBwXsBwtHABm%2ByZJr5CuR2FKBqJdneXOUESt5KcLtLjXlg4bAKfhTrKFKksnwskmwTAHGCQTx3Gd%2Fxb2jUyLpcsqnG25s2TalMXIsIPev6y9BnwuDjtEzodu4ErNXHmacjOb0C4DrHr11by1RSGm1Y27wd5Kg8klD1fsZwNaBYzpUyPjkBB5Y%2BDAoyqP370ApBQ5xUz2wRi3i%2B28Gqr3zlP2alj98pX8rXg3v7W8Ej%2BOwYy3PQBTQyzL5Yt9cpwwu16pQdDAu9wFHxprvFddKB8f58MmgKly0PLiQQnYknntic6q%2FLkc0Qq%2BoYd9O%2Fgezd3bPJPirk1%2FvfZme64F8muh1sw9dX6vQY6pgEWMvMqgegxBhxjbM%2B0BsEeLSgEdOuvkacB9wmuG7SOT1XEqd4BIOcLM4S0vJG05I%2BPjFVhAV4odhPj4uhm3fiTPThoAsKoD5mT9uJ9XjoCRp5LbLYJ0XFLobVx5D1xF3B8JjKceFvL9hvwUTY6iaTGPaSDbYKo5ieQk2QLFpxiJJJcLdgBKjcGjqEbtxuCFaLAHa33gqPDjTbtQTnOcKBo9IzfhCEr&X-Amz-Signature=773e5069af450720c0c35bd51a90b0113f048a87260e551fa645d53fb00b7ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VPYB4YJ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIHHQDLlLblXKsoqm02TKZvKhvcLSKY24aA7k2kBWegeeAiAKxLHGNKVmYHdy0G9w8kJSGfK3rHHNx1LPBjoBkdhGPCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPFN%2FFnhFV1PXrd1OKtwDT5sNyAdywdKx7h53rZ9p50yCDq3VJrLvCnVoqOvtoap70auG469PID6XdX8AE6rxljL2%2BDsahgGJJLkoq2IwGCCe2hUG8VvN6PljUGb4ncS80chnNkIJdV3wqV9Y%2FMEf2yljGfBl1KoD4Q24U0saJhsamLWkWX6VBGidMAeypJ9e%2F4UO0xl8kdif9bdE1oUe6ndu1Z1RCBis7oryIK5NRatZofO00CtjB1ZE7KroBk9QMplor3qOH5Z%2BehbTB2Yuu1LD9NdafxwWMBCF2sub3Ciu7uLAFUOcnQBwXsBwtHABm%2ByZJr5CuR2FKBqJdneXOUESt5KcLtLjXlg4bAKfhTrKFKksnwskmwTAHGCQTx3Gd%2Fxb2jUyLpcsqnG25s2TalMXIsIPev6y9BnwuDjtEzodu4ErNXHmacjOb0C4DrHr11by1RSGm1Y27wd5Kg8klD1fsZwNaBYzpUyPjkBB5Y%2BDAoyqP370ApBQ5xUz2wRi3i%2B28Gqr3zlP2alj98pX8rXg3v7W8Ej%2BOwYy3PQBTQyzL5Yt9cpwwu16pQdDAu9wFHxprvFddKB8f58MmgKly0PLiQQnYknntic6q%2FLkc0Qq%2BoYd9O%2Fgezd3bPJPirk1%2FvfZme64F8muh1sw9dX6vQY6pgEWMvMqgegxBhxjbM%2B0BsEeLSgEdOuvkacB9wmuG7SOT1XEqd4BIOcLM4S0vJG05I%2BPjFVhAV4odhPj4uhm3fiTPThoAsKoD5mT9uJ9XjoCRp5LbLYJ0XFLobVx5D1xF3B8JjKceFvL9hvwUTY6iaTGPaSDbYKo5ieQk2QLFpxiJJJcLdgBKjcGjqEbtxuCFaLAHa33gqPDjTbtQTnOcKBo9IzfhCEr&X-Amz-Signature=8007ccc3ccdaaaa668c3bc97b846b5491695cad798b7fdc81b47223b2f92c56c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
