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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2EDHEA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFBy%2BVmg0V%2FVSicUTh59WI6MOFIwd4E0ZPqGwYn4wBiAiEAp4rj1bIdtU4yRy4jeG%2BHLSTAh844BAUtZWLVEFDai24qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIt6xEHZSNijVReHyrcA97vpxPGBOZfp4xWZutBYaoYr1AacszS9rvc5dMxXjOS6mJBps279KCDt1Gg%2B9mu2F2ANzuNh1%2FU2XuqtWLqCEe7iiki1erN8XTYicjTcZJwcbvp%2BiNAWngan3oewcixWBqVVwh7xaW2D6CSqocAdbe3n5ZxWxWW1vj5lCoA4Dc7kqJg2iaRkaiZ%2Fp3oKLzmxQaKJBt0zjtoMjsbNbn9kTS8GcT9mtvCuauo0oYzUj%2BeNsQw%2FE%2BbHR9fdcH%2Bq7MA3d9DMK5P8ZORRj948ppNuPwk3%2FfD3oTzpHINvBbgP8wsWeVfQg0aNeJYZ6pImCaWH4B6JLp8OALk%2F5kyvCvydMKEQb8a4ZmcHGD1JcO7VqYamOx%2BEoZ1y0qEE0ZoXJn0JqQEGQqKgWGQ8RiDP1oj%2FixJqJVcLrpntG6TZ8BlMBGfmLaw8bzMTw10rTQga2h8SXrYbOxjYUO15qdPNzvJDFpcyfZvmXx7udZlbk%2BFulbncJ9mILmUUj%2B2JbLfaiQgZ6vY8RFJ4sxbU%2BM9hMouR7jYfL%2Ft3FxGfhAJQHvFjzYwRJ8%2BJVnNRfCHjdvGi%2FHliqnZcIOXrT2GIbd7WDJrmWhR5jGgyjH17%2FiLerq4mB2X0MjnMX9D1u44gLh8MIHrisMGOqUBLCIZYAVsiGPmrvF7ch3BcD8aKI2yYkjPCoHZoBinsKlxhV6Ve8enu0Csr66juFstVVpqbW6CZQsmHUX9RNsIcMrVgD8AmmE2X%2F8UM2Mq9MJeyijIYGUyYTaJ16wjHxkCTl6KyzwAt7kDFFw0kvAI5pBIv6%2FPYRaKly3w23F6MfiYo7ShmLoUlX6R91ECOA5nMAsbKAxs018iUjTsPj9Urg8jeVXt&X-Amz-Signature=0905d7c4255fd79bd3bb8cdcb98847841df130cd8819d10ddf0daab332c11b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2EDHEA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFBy%2BVmg0V%2FVSicUTh59WI6MOFIwd4E0ZPqGwYn4wBiAiEAp4rj1bIdtU4yRy4jeG%2BHLSTAh844BAUtZWLVEFDai24qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIt6xEHZSNijVReHyrcA97vpxPGBOZfp4xWZutBYaoYr1AacszS9rvc5dMxXjOS6mJBps279KCDt1Gg%2B9mu2F2ANzuNh1%2FU2XuqtWLqCEe7iiki1erN8XTYicjTcZJwcbvp%2BiNAWngan3oewcixWBqVVwh7xaW2D6CSqocAdbe3n5ZxWxWW1vj5lCoA4Dc7kqJg2iaRkaiZ%2Fp3oKLzmxQaKJBt0zjtoMjsbNbn9kTS8GcT9mtvCuauo0oYzUj%2BeNsQw%2FE%2BbHR9fdcH%2Bq7MA3d9DMK5P8ZORRj948ppNuPwk3%2FfD3oTzpHINvBbgP8wsWeVfQg0aNeJYZ6pImCaWH4B6JLp8OALk%2F5kyvCvydMKEQb8a4ZmcHGD1JcO7VqYamOx%2BEoZ1y0qEE0ZoXJn0JqQEGQqKgWGQ8RiDP1oj%2FixJqJVcLrpntG6TZ8BlMBGfmLaw8bzMTw10rTQga2h8SXrYbOxjYUO15qdPNzvJDFpcyfZvmXx7udZlbk%2BFulbncJ9mILmUUj%2B2JbLfaiQgZ6vY8RFJ4sxbU%2BM9hMouR7jYfL%2Ft3FxGfhAJQHvFjzYwRJ8%2BJVnNRfCHjdvGi%2FHliqnZcIOXrT2GIbd7WDJrmWhR5jGgyjH17%2FiLerq4mB2X0MjnMX9D1u44gLh8MIHrisMGOqUBLCIZYAVsiGPmrvF7ch3BcD8aKI2yYkjPCoHZoBinsKlxhV6Ve8enu0Csr66juFstVVpqbW6CZQsmHUX9RNsIcMrVgD8AmmE2X%2F8UM2Mq9MJeyijIYGUyYTaJ16wjHxkCTl6KyzwAt7kDFFw0kvAI5pBIv6%2FPYRaKly3w23F6MfiYo7ShmLoUlX6R91ECOA5nMAsbKAxs018iUjTsPj9Urg8jeVXt&X-Amz-Signature=0b597dfdcd64f158a10138f077f2d3cb98d18bde16706f6da0ba8142bb912ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
