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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLV3CIK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC0WVCb1G1atzKaTiJzLgvxmbdt3%2B9KehSuWbSAGVzffwIgdGNLt7a0KCC4jdQ0mgfd36e5p5X7XIZuPNs3rJrbT3Iq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDM2nbL5x1EUpDEdwJCrcA%2F1Ze1Ma%2F603acd5qDCK9n1UItKcBwxcaWKg8eNULWPZYIwRkyrat5qdmWwikIXH9InPd0uml8Wg%2BJqYe39wMmNkDBHgMaDISOjzIdCrfoQ9m094qBJUOHeUEWldgYLm8Wq7QlRp7BgPKJodccNb66am0eMswl5csDDNKg6JfuMB0gh9S3WxrJFE2AmZ6jIafD5FV%2B%2B%2BOld8P0vlZHhuB9s7wSgV2sYMo63IXHGkYtl6d%2BSebw2%2Fzef3rg%2FXj%2B%2F1wQU6hnUfaVYTE7%2BAivrdPn2%2FieA9R5Zcm4sF5BC3Gv7qi0zaZX8A4qkC66pLR3PeM2fLB%2FCeDVRcrJOz6FoKwaubsyEJ1FWjagjgXFHqxd9bQEd7k%2Fi0zUk4hsTDp80YVtreSUe73d9xIXL4zj3KJpIz%2B2bMz3cxYqRXSvmRwp%2BrwKDdjwxHWDeVoOAsE7OWwwu9APevjWPVHCmb%2BQCeMNxqAeJC9kh5GJ8zz8BHtVIbUt5XKjyP4ZFElmqd6P%2FIqXuvkIqHgAG2mnW2M6hJAaqANOtr1Qc3O9buIJtYrAX3EeEgnsSkcEEECZDIuunp51Zw9%2FG1BlxpAj9ryRrGJmrCQD0%2BcVKPuM1BAJnzX6BESwXHVlHT34IqjZT9MMCiksEGOqUBzMwa0VKvH6eFKN%2FQFtZuVOnq91nCDJ5U5I6AEIvCYcNZzAblBoel9%2BTMnOzmzQ%2FrsrXpSU22JUihyRSgKrEQQEjpyzdZOvL%2Biy2ZZB0Ud7UlvhcffvKNC7pz8lsYUjl%2B4Ais5zvOu8gyPtjt2uVXP%2BHpuW0Enu4CuMyCCpSQrdcpxZV%2FYg3gBnUbfJ8fR1y9wI3zsj2kmufytfa19ctGCHqbWe%2Fx&X-Amz-Signature=a9392b485675331b148052b4b93c6f937ba963dbf6ee695380c486104570bbe3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLV3CIK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC0WVCb1G1atzKaTiJzLgvxmbdt3%2B9KehSuWbSAGVzffwIgdGNLt7a0KCC4jdQ0mgfd36e5p5X7XIZuPNs3rJrbT3Iq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDM2nbL5x1EUpDEdwJCrcA%2F1Ze1Ma%2F603acd5qDCK9n1UItKcBwxcaWKg8eNULWPZYIwRkyrat5qdmWwikIXH9InPd0uml8Wg%2BJqYe39wMmNkDBHgMaDISOjzIdCrfoQ9m094qBJUOHeUEWldgYLm8Wq7QlRp7BgPKJodccNb66am0eMswl5csDDNKg6JfuMB0gh9S3WxrJFE2AmZ6jIafD5FV%2B%2B%2BOld8P0vlZHhuB9s7wSgV2sYMo63IXHGkYtl6d%2BSebw2%2Fzef3rg%2FXj%2B%2F1wQU6hnUfaVYTE7%2BAivrdPn2%2FieA9R5Zcm4sF5BC3Gv7qi0zaZX8A4qkC66pLR3PeM2fLB%2FCeDVRcrJOz6FoKwaubsyEJ1FWjagjgXFHqxd9bQEd7k%2Fi0zUk4hsTDp80YVtreSUe73d9xIXL4zj3KJpIz%2B2bMz3cxYqRXSvmRwp%2BrwKDdjwxHWDeVoOAsE7OWwwu9APevjWPVHCmb%2BQCeMNxqAeJC9kh5GJ8zz8BHtVIbUt5XKjyP4ZFElmqd6P%2FIqXuvkIqHgAG2mnW2M6hJAaqANOtr1Qc3O9buIJtYrAX3EeEgnsSkcEEECZDIuunp51Zw9%2FG1BlxpAj9ryRrGJmrCQD0%2BcVKPuM1BAJnzX6BESwXHVlHT34IqjZT9MMCiksEGOqUBzMwa0VKvH6eFKN%2FQFtZuVOnq91nCDJ5U5I6AEIvCYcNZzAblBoel9%2BTMnOzmzQ%2FrsrXpSU22JUihyRSgKrEQQEjpyzdZOvL%2Biy2ZZB0Ud7UlvhcffvKNC7pz8lsYUjl%2B4Ais5zvOu8gyPtjt2uVXP%2BHpuW0Enu4CuMyCCpSQrdcpxZV%2FYg3gBnUbfJ8fR1y9wI3zsj2kmufytfa19ctGCHqbWe%2Fx&X-Amz-Signature=721748fe81db4ab050a7309d0d7d54173c1aebdb3421980a853ab194b874df43&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
