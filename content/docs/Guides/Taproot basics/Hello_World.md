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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPG7IBZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD6z8v1UdGhhWEnH%2BEpnO5WyvHlRGzthmWVXjkqP92QdQIgD8wKReMIIv4ZRDFl%2FYbQWl4eO1i9Pa97EKfQRKM%2Fz1Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNzmDMeencl5oQDaaircA1OGdHqYCzgzOQKIpgY5xPqI%2FTBK2UrCzeP6nBSg1oct9BmowH79uXB50tKwyZna8hCLSg4N406tXPxNSvSjKUcdjQKG0bwA5ahmRTpIQ1olTHLwjHhjpbyDYKGGDl%2FsEV7b6d%2FeGdjVdCxC6rg5rPrFBYIySdn4tKvq%2BqGNa9596BZGBG7mOrkedo4PKhIWYYe3jAdcPCUSZFIns%2FURZNQ15dEkFJQy9ijl1CVMRHZd09qGUWg%2BZHZo780QkcRfKND7OS8Zkmozqn85jCyFy%2BPmCY8hXMgOdCGKTDaGYMFLELCWrNh1v9m575ks1c%2F8TEQ9a%2BCoKMMxP7spDk8FON4tREt6KpSBWMlYov36%2Fj%2FLy4d9SjkEls6WvRXkaNH73jG5cTnBwzyjmNe5WNg6hyI%2FyTThoUB4H96xWs1GmYR2jUGia%2FnvaE9U%2FjpDPwJ%2FzAZFwU5QCrhFgXEQrVn6DyeQDq110XlempODWKf3po5VQ1B3wvnGOIk0CWh22Va0dvPY%2FsxuhW1ws6nnNDHAGtMmopb0OFGarqnLUbYKvcPMJecMYKJd2%2B4BhfP5tJlI8gjAtj9masf9Nu6JWK8G7JTwUSSPCOT%2F%2F%2B5deuv%2FJSaB%2B7gx3WeUZ%2BZ2t2v8MJq2lcEGOqUBEp6ybGQlRYmo6OnyvPWSuIuHevlzXCGFHYq%2BkNYD9d9OqzcIR%2BK61WHcy3x1GAntr6GYHxCvVi5oual0JjWAKLK%2BHSuTTtUPvewrmOp2A2m15Fkg0qKJXGhBZdqyuw8i25SwmmpPBwVUWWHA8WhkPwRIHVQL92vkwmOE9w2tZZ2QzdM0I4JbNhws4MXnxr%2FY6cz4sB49RIIt8kXwQy5Sp8lBYXAk&X-Amz-Signature=acee9c9a895313bdc2704783f4ebad2742abd1345c081d8b82a29e042787b458&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPG7IBZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD6z8v1UdGhhWEnH%2BEpnO5WyvHlRGzthmWVXjkqP92QdQIgD8wKReMIIv4ZRDFl%2FYbQWl4eO1i9Pa97EKfQRKM%2Fz1Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNzmDMeencl5oQDaaircA1OGdHqYCzgzOQKIpgY5xPqI%2FTBK2UrCzeP6nBSg1oct9BmowH79uXB50tKwyZna8hCLSg4N406tXPxNSvSjKUcdjQKG0bwA5ahmRTpIQ1olTHLwjHhjpbyDYKGGDl%2FsEV7b6d%2FeGdjVdCxC6rg5rPrFBYIySdn4tKvq%2BqGNa9596BZGBG7mOrkedo4PKhIWYYe3jAdcPCUSZFIns%2FURZNQ15dEkFJQy9ijl1CVMRHZd09qGUWg%2BZHZo780QkcRfKND7OS8Zkmozqn85jCyFy%2BPmCY8hXMgOdCGKTDaGYMFLELCWrNh1v9m575ks1c%2F8TEQ9a%2BCoKMMxP7spDk8FON4tREt6KpSBWMlYov36%2Fj%2FLy4d9SjkEls6WvRXkaNH73jG5cTnBwzyjmNe5WNg6hyI%2FyTThoUB4H96xWs1GmYR2jUGia%2FnvaE9U%2FjpDPwJ%2FzAZFwU5QCrhFgXEQrVn6DyeQDq110XlempODWKf3po5VQ1B3wvnGOIk0CWh22Va0dvPY%2FsxuhW1ws6nnNDHAGtMmopb0OFGarqnLUbYKvcPMJecMYKJd2%2B4BhfP5tJlI8gjAtj9masf9Nu6JWK8G7JTwUSSPCOT%2F%2F%2B5deuv%2FJSaB%2B7gx3WeUZ%2BZ2t2v8MJq2lcEGOqUBEp6ybGQlRYmo6OnyvPWSuIuHevlzXCGFHYq%2BkNYD9d9OqzcIR%2BK61WHcy3x1GAntr6GYHxCvVi5oual0JjWAKLK%2BHSuTTtUPvewrmOp2A2m15Fkg0qKJXGhBZdqyuw8i25SwmmpPBwVUWWHA8WhkPwRIHVQL92vkwmOE9w2tZZ2QzdM0I4JbNhws4MXnxr%2FY6cz4sB49RIIt8kXwQy5Sp8lBYXAk&X-Amz-Signature=c2ad6c9ca6dbd6db66181415922466aad4f06e85388ba399c9063b9e32c65d34&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
