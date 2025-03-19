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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MICI2B%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAkoSdiXEJwSofc%2BfSy0xubAD8zSGpWZLT%2Bc4aj9m89CAiA%2BAqkW9L72jF%2BukZntK4e4AIjRmwgPENSy1xO3SnfhFCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMWniT2wGw6Qq1WHZNKtwDEaEnX7hDAu%2BdfxLrqMKcEjhC6deFRKRQMccx220TvPsc5CWwrf58gofJ0wZrcaMKUZAkOIA6g4y9Ke6ql0z%2BizVZBoWy7e6Ao2QvNTa8oZIRYCcHqNlAuXj8qW0qOu4iF6msUrj%2B%2Fk4nf0vIPHqW%2B3kS7qD90D7PU2lx%2BuaAp47HeDuYqQLKzON0bgf30r26P8cO8bKMxUHH0c7iPnWMJVtI0BXsmPay4MJAt42A08Ga7eghygnhQ3oP2xbLsJLPoq5GvS0UHGaJ58byLUqu9v7XfLrrF2JRewFzuYqZuMPCXswbk6QOmMfObO8k15B0ogYnNmLP1Qr3vIa2D%2B9KRljgYkvMWxvn5xiZBq1Gv7zSu60RWvpcpApmxJnPZgbZTVbPmbAtUJdR6XfLkpTRAZSqbOHFIwkRkso0qMH%2B2ZO7HBIbiSc8K9L%2F09wPuzmJW9dTwlf3NutJ0DMyV6syInFHEJrvjNwRwdO7M%2FU096QYlYmPZlOGTJ2XIQxAmxYSYq9UinDNDgLy%2B52nyf5ePPB%2FWaY%2BaUC49zGnNHjbt1yzGbPppyVUaMaahRPeXTA6cNoayPhyGSg4U%2FtJ63z4uP%2BGXcwu8uBhuNgTQ4WSvjUb2RatY%2BRCQx38318w4bDnvgY6pgFFiG21DFamhhlQb7FXr0BuUCtNGW1sf%2BHRi%2BaMir%2FzEt0jxOQ5NDzLxBY5bmiJN13HpdoUbTP0rAGVZtAyKdgfwFZIczIeuq2eLFa0nP7GidUBdf4IkUIBnOpTzM6eqDg6iRydo5KmdtiNhFANJ3EEBuEMACCFU30iOCw%2Bz%2FU4ING6WV7ozLWntf0Se1RMOSsfWbQJ6RjIOkvddftZvefWq9KxrSi3&X-Amz-Signature=30df96dbffcbc0b7cce44e69421740f1c484645d38f3e7ebcaf2d705300a5d31&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MICI2B%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAkoSdiXEJwSofc%2BfSy0xubAD8zSGpWZLT%2Bc4aj9m89CAiA%2BAqkW9L72jF%2BukZntK4e4AIjRmwgPENSy1xO3SnfhFCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMWniT2wGw6Qq1WHZNKtwDEaEnX7hDAu%2BdfxLrqMKcEjhC6deFRKRQMccx220TvPsc5CWwrf58gofJ0wZrcaMKUZAkOIA6g4y9Ke6ql0z%2BizVZBoWy7e6Ao2QvNTa8oZIRYCcHqNlAuXj8qW0qOu4iF6msUrj%2B%2Fk4nf0vIPHqW%2B3kS7qD90D7PU2lx%2BuaAp47HeDuYqQLKzON0bgf30r26P8cO8bKMxUHH0c7iPnWMJVtI0BXsmPay4MJAt42A08Ga7eghygnhQ3oP2xbLsJLPoq5GvS0UHGaJ58byLUqu9v7XfLrrF2JRewFzuYqZuMPCXswbk6QOmMfObO8k15B0ogYnNmLP1Qr3vIa2D%2B9KRljgYkvMWxvn5xiZBq1Gv7zSu60RWvpcpApmxJnPZgbZTVbPmbAtUJdR6XfLkpTRAZSqbOHFIwkRkso0qMH%2B2ZO7HBIbiSc8K9L%2F09wPuzmJW9dTwlf3NutJ0DMyV6syInFHEJrvjNwRwdO7M%2FU096QYlYmPZlOGTJ2XIQxAmxYSYq9UinDNDgLy%2B52nyf5ePPB%2FWaY%2BaUC49zGnNHjbt1yzGbPppyVUaMaahRPeXTA6cNoayPhyGSg4U%2FtJ63z4uP%2BGXcwu8uBhuNgTQ4WSvjUb2RatY%2BRCQx38318w4bDnvgY6pgFFiG21DFamhhlQb7FXr0BuUCtNGW1sf%2BHRi%2BaMir%2FzEt0jxOQ5NDzLxBY5bmiJN13HpdoUbTP0rAGVZtAyKdgfwFZIczIeuq2eLFa0nP7GidUBdf4IkUIBnOpTzM6eqDg6iRydo5KmdtiNhFANJ3EEBuEMACCFU30iOCw%2Bz%2FU4ING6WV7ozLWntf0Se1RMOSsfWbQJ6RjIOkvddftZvefWq9KxrSi3&X-Amz-Signature=728ea266cb672ad56a4c2e8a5f9c2043796fb41df9a77e2aad70d818099a9f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
