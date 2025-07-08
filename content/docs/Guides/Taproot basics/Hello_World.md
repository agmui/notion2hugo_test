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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNP6NE3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDryJDeKYqxcknI2CYgVLyH5ZRn2ZY2xZwL3IMfic5J6AiEAv%2Buu6gm303a37T1A4XdBfRr4E31tJS7WCMe0Qm2GGwYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG8gyIMuo0Th9EPcCrcA8JdCxuFPE5wymAHeH5FyIM%2BKdwvNZaoJd907ZHdoIdeJthm8kbPNZgXjImCu28ZQmmLfEcjNlVkPpRs%2FrlyWS%2Fyx43bPpf280RqcnIBaNx0v66WzvaCCR04uM%2FSzH4iefZNAM6IUpuZ09TmYl3KB8PGB9CoSlp8waog6Yg4k6%2FOLW6zgqmj%2Flwktdas%2Fl6k6QbHy5XSG1gzaxLEeZz%2B4nHBY91ZYJZ%2FdJk4uBIwKMYGAfnQMPOJAXd0iLyAWDdtX0n6c1iklXXjbq5LtOJtSeVIiLjJNNX6RTMand%2BZ7vURZElFmpLUWbEEiWGvuCh1zUdRkieZuu9QXplSLyYD5vJVVZQs9b40KTqNzMbQPATbeq6P3A5NQU%2BvqG2v9ima0ALezvHHyZgacaKOl2sv5wTr5LIYixcHXEMeao9VXv%2FoGIktuGr0%2FoY4n675JKrDqK23BBc8CnYyKUfzONYFKVOM%2FTEcwHsHnUcefgZ2UnOivwgo%2B4iZY4rbkp3LIssYlk%2Fk%2FYEdVBMULBq81PU4OFjO%2BdDb54QZkIs1eFk4E0HD2Drv6mTqv2hhNlfNUHxIIN8zl6Z0YqDrkWkbweRKx8yVkv9j4PLk7sqHBNf5Qh%2Bvl4bcu5CkLON%2FYwLTMMSEssMGOqUBP4FVakfxC7GseEnC5We4xMbMpwMWZim5wKpO7q7MxV8%2FOuudJ3jgYwdtT1%2Bq4U4kOujZfSEyi3uKw%2Bnh44cgrg4rJ8oY%2FWdUn4%2FFKGMMebkiEQC7kw8ulfIb%2B9a%2FR%2FGePZMpDBPBvs9nMQq9UkXgxLslqx13FkNVZkBq0G5d6cjxjktIz5rIH%2F2QPPxjEfbv0vZNK8EBX7h1ppIjLXdpTjGP9QKg&X-Amz-Signature=74b883927e0f01148837065edc74e2a3a54383d1347439fad57d8cd046d7bea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNP6NE3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDryJDeKYqxcknI2CYgVLyH5ZRn2ZY2xZwL3IMfic5J6AiEAv%2Buu6gm303a37T1A4XdBfRr4E31tJS7WCMe0Qm2GGwYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG8gyIMuo0Th9EPcCrcA8JdCxuFPE5wymAHeH5FyIM%2BKdwvNZaoJd907ZHdoIdeJthm8kbPNZgXjImCu28ZQmmLfEcjNlVkPpRs%2FrlyWS%2Fyx43bPpf280RqcnIBaNx0v66WzvaCCR04uM%2FSzH4iefZNAM6IUpuZ09TmYl3KB8PGB9CoSlp8waog6Yg4k6%2FOLW6zgqmj%2Flwktdas%2Fl6k6QbHy5XSG1gzaxLEeZz%2B4nHBY91ZYJZ%2FdJk4uBIwKMYGAfnQMPOJAXd0iLyAWDdtX0n6c1iklXXjbq5LtOJtSeVIiLjJNNX6RTMand%2BZ7vURZElFmpLUWbEEiWGvuCh1zUdRkieZuu9QXplSLyYD5vJVVZQs9b40KTqNzMbQPATbeq6P3A5NQU%2BvqG2v9ima0ALezvHHyZgacaKOl2sv5wTr5LIYixcHXEMeao9VXv%2FoGIktuGr0%2FoY4n675JKrDqK23BBc8CnYyKUfzONYFKVOM%2FTEcwHsHnUcefgZ2UnOivwgo%2B4iZY4rbkp3LIssYlk%2Fk%2FYEdVBMULBq81PU4OFjO%2BdDb54QZkIs1eFk4E0HD2Drv6mTqv2hhNlfNUHxIIN8zl6Z0YqDrkWkbweRKx8yVkv9j4PLk7sqHBNf5Qh%2Bvl4bcu5CkLON%2FYwLTMMSEssMGOqUBP4FVakfxC7GseEnC5We4xMbMpwMWZim5wKpO7q7MxV8%2FOuudJ3jgYwdtT1%2Bq4U4kOujZfSEyi3uKw%2Bnh44cgrg4rJ8oY%2FWdUn4%2FFKGMMebkiEQC7kw8ulfIb%2B9a%2FR%2FGePZMpDBPBvs9nMQq9UkXgxLslqx13FkNVZkBq0G5d6cjxjktIz5rIH%2F2QPPxjEfbv0vZNK8EBX7h1ppIjLXdpTjGP9QKg&X-Amz-Signature=baf395373ff0f5170f3d2471a3ee6a18d1aa7e00d7d507e0249c4e847c6a0189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
