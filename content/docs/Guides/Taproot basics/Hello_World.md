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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NE6GFQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBpmjoKklR6ZfGYALQ%2Bh18ajwqd3MI2yUEXWyfArYTgEAiEA%2Bcx8hKvY%2BZKOXmgtuNAiRJyWTImwRBz4d4P%2FG3GCD44q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKNWSiM6dQ8s%2Fm7giCrcA1wAsKGdG%2BH3zDdv5%2BgbICNY3CkVQfLBcU%2BDgs4D%2FkDPR%2F6iWFbxAm%2ByzXVM1NuplLQWK%2BtvIlxki4MeXjEo6hAmbz6MObI9Ni3UVAY%2FZbMFZ49UI1ZZrbuqJmAiwWH5jOuwyEiHtP8WJnhGK%2FCTW2LncbCyj0iCeXLqDQImjg2DVRCwbONcJhvLcBbJM4NQlPsSFuD1%2FQgEEzFNFZ6cPdufeUOC%2BkpRX5LfF4%2BwcQqLIH2DxRlW4cFEXZg0aBRJ8F9P%2FYHwUDSCJGyeXXq3tlRMd4%2Bd%2Bp7qdMQ4THbB%2BTzVDXoel697K7QqVu1DNyDS5x3HQ1od%2FufXjEdLcngY9FwUglZYUT7zB29KLUUDXRY2fTUTulDjaw3sUu4t6QoSKa17avHQijfsLySqcDI%2FlKlO0pt7%2FZEQwoCXDWL0YT7eJWpxX7LgFtaIxNqUD8ESUzBVCXy9m6%2BRqLWxe6CenhVn9iLFZKC07vjjzppVZ2uF9oTKl1ymrxaG3WTRXBIFS683zPNVbhYk3M7DYyPuU0dTl%2B8wz1%2BDkvUUn9%2BqaH7csDjqOGUMpGcjEYeNlKCObqZ%2FlRxzsKF8owzWvD6o7UiyO2Bc%2B4VEa8go5ytL8HX1jF3tdkdDqGkDeY7%2FMOu1jL0GOqUBkyqrwutuYeFzm6H3xIq54ggVOU%2BsQJ%2F8mJHr0r6qd4m3oEuD4BsR4LNHslRE0voAUH%2BP4oICZI04tObjcO70E3Q8abP%2F2xZkT5HnBvv6I3fbC19fROMMsRks2tRbEnD342xt3L%2BAcl0wYm%2B4OGcefA4LGg%2B8aYtyiGr0zs1H%2Berx3XV7NFKGCte2FWJeSgHyKsGxb6F2xv2mf2fIpmUZZGi1N8Tm&X-Amz-Signature=9c04b42d0b5456e287ff34fa90d5060559f69b9aca282b20a0adba08ed17404c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NE6GFQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBpmjoKklR6ZfGYALQ%2Bh18ajwqd3MI2yUEXWyfArYTgEAiEA%2Bcx8hKvY%2BZKOXmgtuNAiRJyWTImwRBz4d4P%2FG3GCD44q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKNWSiM6dQ8s%2Fm7giCrcA1wAsKGdG%2BH3zDdv5%2BgbICNY3CkVQfLBcU%2BDgs4D%2FkDPR%2F6iWFbxAm%2ByzXVM1NuplLQWK%2BtvIlxki4MeXjEo6hAmbz6MObI9Ni3UVAY%2FZbMFZ49UI1ZZrbuqJmAiwWH5jOuwyEiHtP8WJnhGK%2FCTW2LncbCyj0iCeXLqDQImjg2DVRCwbONcJhvLcBbJM4NQlPsSFuD1%2FQgEEzFNFZ6cPdufeUOC%2BkpRX5LfF4%2BwcQqLIH2DxRlW4cFEXZg0aBRJ8F9P%2FYHwUDSCJGyeXXq3tlRMd4%2Bd%2Bp7qdMQ4THbB%2BTzVDXoel697K7QqVu1DNyDS5x3HQ1od%2FufXjEdLcngY9FwUglZYUT7zB29KLUUDXRY2fTUTulDjaw3sUu4t6QoSKa17avHQijfsLySqcDI%2FlKlO0pt7%2FZEQwoCXDWL0YT7eJWpxX7LgFtaIxNqUD8ESUzBVCXy9m6%2BRqLWxe6CenhVn9iLFZKC07vjjzppVZ2uF9oTKl1ymrxaG3WTRXBIFS683zPNVbhYk3M7DYyPuU0dTl%2B8wz1%2BDkvUUn9%2BqaH7csDjqOGUMpGcjEYeNlKCObqZ%2FlRxzsKF8owzWvD6o7UiyO2Bc%2B4VEa8go5ytL8HX1jF3tdkdDqGkDeY7%2FMOu1jL0GOqUBkyqrwutuYeFzm6H3xIq54ggVOU%2BsQJ%2F8mJHr0r6qd4m3oEuD4BsR4LNHslRE0voAUH%2BP4oICZI04tObjcO70E3Q8abP%2F2xZkT5HnBvv6I3fbC19fROMMsRks2tRbEnD342xt3L%2BAcl0wYm%2B4OGcefA4LGg%2B8aYtyiGr0zs1H%2Berx3XV7NFKGCte2FWJeSgHyKsGxb6F2xv2mf2fIpmUZZGi1N8Tm&X-Amz-Signature=08c9b6f990e2e7db96d115b140bea8187628041e3dbed9a9369ec221ba9f91df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
