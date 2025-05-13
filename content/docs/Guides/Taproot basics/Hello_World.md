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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWDDMV4K%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICrwLX9V3u8SHtw72HEOHMyYLaAdeQBvTiuB25K54yYFAiA6yUv8LI6lFuuq8poNJuGtKzRTPjEQ0w1stIGu%2FzT0ZSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlAcXvy1c8ns08atKtwDe%2FCiWg%2BHHUJBWhF9%2FFFcU2JkTmHqEbX7zz19KzdcrbASr%2FW4u51cPpFeWMwYADwbFrp1m0SyuBtpmKBdPsAy15peEMARMCi5kyGdR4MFIt35Csy3Iw4CTyOVg5k7X9p6miD21Ka4xVa7jod5RBuqidP4o5HuHFZBGMp58hMwjgFt750Oka5ve8NcXMP%2BGxudXJ8Kixye8q6Ef80j3ocUtPwsev9vJ0ltZkz34SiX%2Ba%2B3AX9aBAoKPokSh8Y9Jo%2FWA6Hw8XnnjOaWcYqJdRqqdyovoagYmyE%2FI2b4STlgkkwLV3c6EOR8uqkcCcBhnRrDnDdnuDcPmirnlxYdNmTkVmQDEYUZuPBMTVYbR7DFfF59pmwx7Q20jpg63z007huOpJl4LhfiDvYN0swlMw3TMtGQ%2B3zpqf54Xeqf%2BvUB52kfTQ5OSQfELQ9iGdMzxrcaIN6lpz3bzubk%2BH5ntxRboURUAv6pj88CUZB2I%2F3U%2FZKHqJzj9B2vuTVOHNxT9bqLEYmb2%2FUY0NycaT9Hj6Uq%2F%2BlZjtylkLIMcSC5w0LVmDf%2FirUtcPigI2tWGoxkG1T1eM82SwV2JgceCRVcrC5cDGGnfIgcFW301YTfGybWdJ1lSNsqGk4oMBCs8JUw3tuNwQY6pgHWg8ZPWr2LqS8KCrX0iq6VyaQqF6ndTwOOqsd7%2B2XC4QblWEUHvUmoWelAWRH6H9urMrz%2FrHq%2BnoVIZ2vgLYyAalP88OB%2FKZUhomQO6JARolDpXZG5IWEI3RFeKgbaQD02w17%2FJNqp%2BJOQBR16TgdMfi%2BHwXQlkta66AZB8GvMouerPOhFGtVkrlJSpfZE7h8pY%2FEtTBmYt2ehHYN2jkzTdqrBr1PR&X-Amz-Signature=275050d49d3107afaeded0c1ae66fc7d809013318e8fd992b528a56b34e78863&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWDDMV4K%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICrwLX9V3u8SHtw72HEOHMyYLaAdeQBvTiuB25K54yYFAiA6yUv8LI6lFuuq8poNJuGtKzRTPjEQ0w1stIGu%2FzT0ZSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlAcXvy1c8ns08atKtwDe%2FCiWg%2BHHUJBWhF9%2FFFcU2JkTmHqEbX7zz19KzdcrbASr%2FW4u51cPpFeWMwYADwbFrp1m0SyuBtpmKBdPsAy15peEMARMCi5kyGdR4MFIt35Csy3Iw4CTyOVg5k7X9p6miD21Ka4xVa7jod5RBuqidP4o5HuHFZBGMp58hMwjgFt750Oka5ve8NcXMP%2BGxudXJ8Kixye8q6Ef80j3ocUtPwsev9vJ0ltZkz34SiX%2Ba%2B3AX9aBAoKPokSh8Y9Jo%2FWA6Hw8XnnjOaWcYqJdRqqdyovoagYmyE%2FI2b4STlgkkwLV3c6EOR8uqkcCcBhnRrDnDdnuDcPmirnlxYdNmTkVmQDEYUZuPBMTVYbR7DFfF59pmwx7Q20jpg63z007huOpJl4LhfiDvYN0swlMw3TMtGQ%2B3zpqf54Xeqf%2BvUB52kfTQ5OSQfELQ9iGdMzxrcaIN6lpz3bzubk%2BH5ntxRboURUAv6pj88CUZB2I%2F3U%2FZKHqJzj9B2vuTVOHNxT9bqLEYmb2%2FUY0NycaT9Hj6Uq%2F%2BlZjtylkLIMcSC5w0LVmDf%2FirUtcPigI2tWGoxkG1T1eM82SwV2JgceCRVcrC5cDGGnfIgcFW301YTfGybWdJ1lSNsqGk4oMBCs8JUw3tuNwQY6pgHWg8ZPWr2LqS8KCrX0iq6VyaQqF6ndTwOOqsd7%2B2XC4QblWEUHvUmoWelAWRH6H9urMrz%2FrHq%2BnoVIZ2vgLYyAalP88OB%2FKZUhomQO6JARolDpXZG5IWEI3RFeKgbaQD02w17%2FJNqp%2BJOQBR16TgdMfi%2BHwXQlkta66AZB8GvMouerPOhFGtVkrlJSpfZE7h8pY%2FEtTBmYt2ehHYN2jkzTdqrBr1PR&X-Amz-Signature=5dd7fcae6a91f70127d3525c368e0ef048e7faa7fcb6989f0830fe85de360a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
