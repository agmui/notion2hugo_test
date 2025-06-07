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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTCXHDXN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtMUdaSOXgmzFfWULiJX2vLyqL87GbRjMAbcVbWzKQjgIhALrRbIIhRXyBuxsPflfTLdTZ9w1hm1yZuj89Vs2AazNPKv8DCGsQABoMNjM3NDIzMTgzODA1IgxEprVJvd3pl4clvpUq3APZ6hhiAvgK03M8SeGiYo4bHvRJToMHOsnYpH8cAE7piU8VtcXHLf098df89CysMEIRHYzIR%2FCu88i2lOHjBwlUMHAJWpz2ItbLKiqzPi7lGG0qKZfrgiH3OnO52CFmdBqkmVyPDAJE8JkQm0waZn1lTi1JNTN4wj8EGjlZpEXhd90UEJugz%2FFFKlME%2BnVdmATyGFZTtBdcnINGeXFxjJgiyWundWFNTYgp14uGceftPCnIoOqrJPHRphCdUrWU62CF6oQk1nhy1wycbc5MSwNMLu4Xf%2BK56%2FMKRVcy6bvoOsXw0V4aOMc01KO0LgpBRNgQnqIZRVBOITQ47FZCAGJF9lzbjHRuQRk7tygdEz3Q9tRF1nm7Mv9kWN%2FxHeIHg2IB0u2oxngezIiGsayizW1y0P3Zg8h%2BFM5s6C5FMsb1ttcaq6NdLkKXg30NYa3fex%2FaVWUZ1p3vxpFabPoFXwPUSqgvVhdVybJtsz5m3F9G2ecquOH14RxSAdiNMiwJ4f2EIwiY0B5NPdR5LhwSQnJpaRijTBqyanwh5NSJwZmq75DAwhEi%2BDoQA77JZTBNtuW0QI%2BQW6eNTb%2FA94%2FlUBE4Rg9JxssHFZl4By1WugkuMn6g%2BMx%2F3tV6Wux3ITDLwI7CBjqkAd62yusY%2B8awJzKq4xZ7dEcw4CyCwctbZ5OWm5xE933INm5ZlIi5eW7XfLcX4z4yf%2FLZ33J3fQbxikwQ7IUlJym4VEKirH6XXHMbwYo2wt8%2FN%2BTWHI6EaW9Yes2hvRi7ICbJLMbd5J2i2pmVjoImaKtFiwuakrs2j5XLmURETNuo0AT6PoKO79wKw8ZbVhf3QQebXKqcHhj7qaK1RsryA1hdEgVz&X-Amz-Signature=6cd9f52d2c622d1d727706c64de458ca508231d7d24bec6755453d500fbecf87&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTCXHDXN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtMUdaSOXgmzFfWULiJX2vLyqL87GbRjMAbcVbWzKQjgIhALrRbIIhRXyBuxsPflfTLdTZ9w1hm1yZuj89Vs2AazNPKv8DCGsQABoMNjM3NDIzMTgzODA1IgxEprVJvd3pl4clvpUq3APZ6hhiAvgK03M8SeGiYo4bHvRJToMHOsnYpH8cAE7piU8VtcXHLf098df89CysMEIRHYzIR%2FCu88i2lOHjBwlUMHAJWpz2ItbLKiqzPi7lGG0qKZfrgiH3OnO52CFmdBqkmVyPDAJE8JkQm0waZn1lTi1JNTN4wj8EGjlZpEXhd90UEJugz%2FFFKlME%2BnVdmATyGFZTtBdcnINGeXFxjJgiyWundWFNTYgp14uGceftPCnIoOqrJPHRphCdUrWU62CF6oQk1nhy1wycbc5MSwNMLu4Xf%2BK56%2FMKRVcy6bvoOsXw0V4aOMc01KO0LgpBRNgQnqIZRVBOITQ47FZCAGJF9lzbjHRuQRk7tygdEz3Q9tRF1nm7Mv9kWN%2FxHeIHg2IB0u2oxngezIiGsayizW1y0P3Zg8h%2BFM5s6C5FMsb1ttcaq6NdLkKXg30NYa3fex%2FaVWUZ1p3vxpFabPoFXwPUSqgvVhdVybJtsz5m3F9G2ecquOH14RxSAdiNMiwJ4f2EIwiY0B5NPdR5LhwSQnJpaRijTBqyanwh5NSJwZmq75DAwhEi%2BDoQA77JZTBNtuW0QI%2BQW6eNTb%2FA94%2FlUBE4Rg9JxssHFZl4By1WugkuMn6g%2BMx%2F3tV6Wux3ITDLwI7CBjqkAd62yusY%2B8awJzKq4xZ7dEcw4CyCwctbZ5OWm5xE933INm5ZlIi5eW7XfLcX4z4yf%2FLZ33J3fQbxikwQ7IUlJym4VEKirH6XXHMbwYo2wt8%2FN%2BTWHI6EaW9Yes2hvRi7ICbJLMbd5J2i2pmVjoImaKtFiwuakrs2j5XLmURETNuo0AT6PoKO79wKw8ZbVhf3QQebXKqcHhj7qaK1RsryA1hdEgVz&X-Amz-Signature=8a5671b380326c7bd847e44912acdac9e8380cca3a73b7d0fe6fe0ea5088f9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
