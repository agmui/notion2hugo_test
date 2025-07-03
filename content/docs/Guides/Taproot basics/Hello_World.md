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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQRWD7W%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCfcM8MHig1T%2BpqX4ZKgF8yCNcwaKAfkEGnksV2D4G5xwIhAL5hbj13ghyg2H5TT7TTz0uuj91nLJENW2%2BQBjRglYFsKv8DCBsQABoMNjM3NDIzMTgzODA1IgwUEA5mrJwiBwB1oa0q3ANKCPCdt4wfmg30NreCTXipNoUe8%2B349TV58K5Mmic8mYmZYOScRF9o5bTQoZWVOdKDu4t4HtsvzNtMmC4obOAcSmzkDdXrvIybE0NdmIKCk9C3wlbFQtwuUZLiQWKgOq7YpG39dtrkdVT7OPx3tJgqRFY5gQQwc030ssMVOjV3jMgOx4Wtrv9EeqFhFlEaap%2ByOG%2BeUgfa7EHlzD2aSgvT0EfbwrvpBXn1BgbCYhr4G0JGv9%2BVB1%2F73iciY9OU8zQ3eoupQ3cESE2k5jotSTdgqJ42Qncm6fAKJIMGtdz4%2Fnt23ExY60OA9KvnNJHlZw%2FYpYqhXB5ssrfcIFPKJ45lcJS8VCiwk6VldjC8ED6Ku01OVf2VX3qceGORzmUW7rBaoSHuiYMtg3cQvnx0lSlXu8xM7zJwN6D3nEbHvfo9C7%2B68h9ebDCIDwfGYJKG5uKFMcZ5WsulSnb%2FZ7gfgQKVGw5aGLLgBymfM69PJmKkJd6DyWxAntRozhAMaU7bO8haG0OEmLbxmPuYE%2BU62t3fvlpy8KjDNydO0Q3SAXkKWoB6uQK2%2BrcQ%2Fyr84UG%2B1ryLToyyYiQuE7gpCI%2BiGD9m7dweAH8HJ6aNL5uREYfGK2efSrf8Spjq3Ia4SjCOkJvDBjqkATRh%2Fyv3UxVW0YlHNNVyVUAS0docQA3tvqAZsTIBzaZh1tEDMl3LxmSrof6G7b%2BRfDkRGAIPp3vDk1Xs6DRpyWFN20vjffUSalR7bTuMELJQEzM8mL2YJxZ8xV56b%2BI8YtvMAoqhob8QVpgg%2Bun4fSSj%2B%2F7u65Z6aPP36UT82fZxlEDwh5zzvlWg2GOSmduZCPxeqq1GoeS9hOVl37Rp9UKl7%2FdE&X-Amz-Signature=2a8717d97a6589d341781d08e481bc7af1d0b63352f908b7fca080b4b33f7bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQRWD7W%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCfcM8MHig1T%2BpqX4ZKgF8yCNcwaKAfkEGnksV2D4G5xwIhAL5hbj13ghyg2H5TT7TTz0uuj91nLJENW2%2BQBjRglYFsKv8DCBsQABoMNjM3NDIzMTgzODA1IgwUEA5mrJwiBwB1oa0q3ANKCPCdt4wfmg30NreCTXipNoUe8%2B349TV58K5Mmic8mYmZYOScRF9o5bTQoZWVOdKDu4t4HtsvzNtMmC4obOAcSmzkDdXrvIybE0NdmIKCk9C3wlbFQtwuUZLiQWKgOq7YpG39dtrkdVT7OPx3tJgqRFY5gQQwc030ssMVOjV3jMgOx4Wtrv9EeqFhFlEaap%2ByOG%2BeUgfa7EHlzD2aSgvT0EfbwrvpBXn1BgbCYhr4G0JGv9%2BVB1%2F73iciY9OU8zQ3eoupQ3cESE2k5jotSTdgqJ42Qncm6fAKJIMGtdz4%2Fnt23ExY60OA9KvnNJHlZw%2FYpYqhXB5ssrfcIFPKJ45lcJS8VCiwk6VldjC8ED6Ku01OVf2VX3qceGORzmUW7rBaoSHuiYMtg3cQvnx0lSlXu8xM7zJwN6D3nEbHvfo9C7%2B68h9ebDCIDwfGYJKG5uKFMcZ5WsulSnb%2FZ7gfgQKVGw5aGLLgBymfM69PJmKkJd6DyWxAntRozhAMaU7bO8haG0OEmLbxmPuYE%2BU62t3fvlpy8KjDNydO0Q3SAXkKWoB6uQK2%2BrcQ%2Fyr84UG%2B1ryLToyyYiQuE7gpCI%2BiGD9m7dweAH8HJ6aNL5uREYfGK2efSrf8Spjq3Ia4SjCOkJvDBjqkATRh%2Fyv3UxVW0YlHNNVyVUAS0docQA3tvqAZsTIBzaZh1tEDMl3LxmSrof6G7b%2BRfDkRGAIPp3vDk1Xs6DRpyWFN20vjffUSalR7bTuMELJQEzM8mL2YJxZ8xV56b%2BI8YtvMAoqhob8QVpgg%2Bun4fSSj%2B%2F7u65Z6aPP36UT82fZxlEDwh5zzvlWg2GOSmduZCPxeqq1GoeS9hOVl37Rp9UKl7%2FdE&X-Amz-Signature=2a747f02b7c64c679d10059a0323fdeb0687cf049a96235026fb773380ecc0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
