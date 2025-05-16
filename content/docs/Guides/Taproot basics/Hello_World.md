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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ7SEHO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBKHI5O4fQ%2Bl5hv1MCaL1tBNVgrLd9FBh1dh2FeMZCJAiEAulobIYQK9f355zrg9Zz3VE4EcWfFPIHYOw%2BqALrLbhwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMhnvQqv8dLi%2FJ0iYircA4vhqngCPJuOU7zA4wlY5M9FMeSWjtZloK1MTImgXt%2F6EWRiABVbwaywth6r7G29BzlAHJ7TJNlNXMQL32N1RXhu8XGGvC67dsSBWRK3DIIf%2FmPdp802SSf0vhJLdB1SBEJ6RY%2B7GPc8MMsxQ%2FqG07NHF56oaEG7ukJHDUWIaKUAahhl%2Bv345xgLDmtOWZQ2zOFQC4oCqqBKjP2LPx%2BKe%2Fiwz2TM%2FCHPUeUxdKzKXeWyEwe0U3YCIeKzMnrSo9j68VcowlntKeAlyipCCuH8wLPUwP7CH0lytEq6mXDKqGt4zGKK9VV%2BHuYiShq4OEFjnnTlWcfw2yC2w1tIuCfJ6l9NrNjX65Dzw3jRiLCwaG6czETrRL1IBlftu6TtX5kiwVLtwzwcAaJnFZYvx0ZC0%2FZi6SOGxVN2bt8sEMiX94WKM0sHlrLlCXw75L196s5bCE6M%2Fwv9%2FjuI9Ge7jl6%2BqPAG88mWRo8SokB9BdWCGU0op%2Bm3oLbSY2FGddVEZXBCaH5ugE7h8kAmZx3w4D%2BeBm%2B7BxeOGFps0l0cgK0VKjlyTLOv%2FFV7O3GjYo1nuNVi6G8%2B6O3A44fFU5WxV9jHdvZ9cQCIaheAJal4PhrTW5v2l2VtjcAiQUPinB7PMK%2F1ncEGOqUBqdP2vWIOZa5Q%2BNEYIM1RL%2FCvZR4TJ3lOpS7I0fDCHhsEMQ8lUWfm5pSOmTPOvqFn7%2BbU5zTQNhWPu8VjpXehNdFvP47C%2BGseFJNxj3q13ziN1TmfZPAHDnAKfIg2tD5MLcnS6Y3npb6EMZqXqjtdPNQMUwlIf0u0bX3wfU1mHHyI1wcA3F%2F8MWn3wjgvz8pm2gCyHb3GPXSEMRhMJVUzc4HZ3abR&X-Amz-Signature=ed0d74791947253d5c62d2f8aea22b6f26f542416be368388f94e40f8cacb391&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ7SEHO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBKHI5O4fQ%2Bl5hv1MCaL1tBNVgrLd9FBh1dh2FeMZCJAiEAulobIYQK9f355zrg9Zz3VE4EcWfFPIHYOw%2BqALrLbhwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMhnvQqv8dLi%2FJ0iYircA4vhqngCPJuOU7zA4wlY5M9FMeSWjtZloK1MTImgXt%2F6EWRiABVbwaywth6r7G29BzlAHJ7TJNlNXMQL32N1RXhu8XGGvC67dsSBWRK3DIIf%2FmPdp802SSf0vhJLdB1SBEJ6RY%2B7GPc8MMsxQ%2FqG07NHF56oaEG7ukJHDUWIaKUAahhl%2Bv345xgLDmtOWZQ2zOFQC4oCqqBKjP2LPx%2BKe%2Fiwz2TM%2FCHPUeUxdKzKXeWyEwe0U3YCIeKzMnrSo9j68VcowlntKeAlyipCCuH8wLPUwP7CH0lytEq6mXDKqGt4zGKK9VV%2BHuYiShq4OEFjnnTlWcfw2yC2w1tIuCfJ6l9NrNjX65Dzw3jRiLCwaG6czETrRL1IBlftu6TtX5kiwVLtwzwcAaJnFZYvx0ZC0%2FZi6SOGxVN2bt8sEMiX94WKM0sHlrLlCXw75L196s5bCE6M%2Fwv9%2FjuI9Ge7jl6%2BqPAG88mWRo8SokB9BdWCGU0op%2Bm3oLbSY2FGddVEZXBCaH5ugE7h8kAmZx3w4D%2BeBm%2B7BxeOGFps0l0cgK0VKjlyTLOv%2FFV7O3GjYo1nuNVi6G8%2B6O3A44fFU5WxV9jHdvZ9cQCIaheAJal4PhrTW5v2l2VtjcAiQUPinB7PMK%2F1ncEGOqUBqdP2vWIOZa5Q%2BNEYIM1RL%2FCvZR4TJ3lOpS7I0fDCHhsEMQ8lUWfm5pSOmTPOvqFn7%2BbU5zTQNhWPu8VjpXehNdFvP47C%2BGseFJNxj3q13ziN1TmfZPAHDnAKfIg2tD5MLcnS6Y3npb6EMZqXqjtdPNQMUwlIf0u0bX3wfU1mHHyI1wcA3F%2F8MWn3wjgvz8pm2gCyHb3GPXSEMRhMJVUzc4HZ3abR&X-Amz-Signature=9eb488910046cd99ad6ae2b5db161022ab86293ef1662b957c41450c29b8661a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
