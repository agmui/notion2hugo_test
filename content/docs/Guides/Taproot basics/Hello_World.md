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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXTNMRCB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgwrg0FTk%2Bz9HSwTwgvUZFmeHHAOkdNceRQSgfeLilDgIhALpsfodl4HmTv5QtoMoTCNets74VIlQljfDjLsQXJDvQKv8DCBoQABoMNjM3NDIzMTgzODA1IgznE0lat9%2FIvAVZQQEq3AOAZVE0FnxmrRIKjpDWd%2Ba3zN%2F7nRJdRVv9MtJY76zsZinQcnMFkcqQJ4NYE6oEqrYKR%2BgBWG4uldVirQzSLhKVK13gKCqnh8OCXOlImV5s%2B1J8oY1VkrGIXRAi56DxivvjztNpJG29d9%2FiMgamrsB6lbwK7LVGdIpdSMVoJn%2Fqo1%2BSiHXwA%2BvqZz%2F32yH11yWM0PV8QdZQbswd5vO2jmvozKjMeqdyt%2FOwH5seF154jc%2F7RDQLA92hw9FWVFWIXC%2Be%2Bj6T9cdaejVaU5DAxiIS%2BT2GFgbiYKK%2BKUtYPhAKixYSTAWAvoxC0LqWb29EVpwJwO8fyT%2BHLE6wjK%2BgnFuv%2FHKAdaavPagSK04LmcDUIs5y0utaR2CaFtMoV3tZlWkHo6ZQFuLEm6swu6HrQZKAJU6Bw5eGUSaFyjKoukIwt5Wt5PPtXPp3hEak%2FH18Y5F1Q4GjMYni%2Bq6z1qQbE1drqI5t5IL3viDvtFuG7psm0%2Fkd1rTbawfwYkKD2O1H2csyuzvUz%2FSpN2E29zt%2FER8blb6QnHcoqEFmBJxzWig9lBWl%2F6qLeqC8olFFQIK5hmAs9g9s2Rf4ota33OSoXwb7KXNLwkcBaxULqo%2FMUF7YtgRSLtUZ5PjcNyiU%2FjDO%2BvS%2FBjqkAU64E2O9z2tDOVqNCjGfRYnOIt5kveK2GjsUAeVGr61CDaFRkKzCCQdVIlzifTnEFA7tW2e3YhrDAgvhre0vtHFCC2XAgbKZoqs3mnFoPY%2FxTwrD5BErknRRZjueIDo09KhNMgTg6SxHs9YuNMf2v5Q32q%2F%2F3JqamgWqqw%2By2lLCpWPSwmkYjJvm3hddCNJp0P8V4BDQODeyTcDyvC8whFld%2B4KH&X-Amz-Signature=6a2b070abd7123bba3a36702f736ab8e353e1826d66fb4fb2924bffb817723d6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXTNMRCB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgwrg0FTk%2Bz9HSwTwgvUZFmeHHAOkdNceRQSgfeLilDgIhALpsfodl4HmTv5QtoMoTCNets74VIlQljfDjLsQXJDvQKv8DCBoQABoMNjM3NDIzMTgzODA1IgznE0lat9%2FIvAVZQQEq3AOAZVE0FnxmrRIKjpDWd%2Ba3zN%2F7nRJdRVv9MtJY76zsZinQcnMFkcqQJ4NYE6oEqrYKR%2BgBWG4uldVirQzSLhKVK13gKCqnh8OCXOlImV5s%2B1J8oY1VkrGIXRAi56DxivvjztNpJG29d9%2FiMgamrsB6lbwK7LVGdIpdSMVoJn%2Fqo1%2BSiHXwA%2BvqZz%2F32yH11yWM0PV8QdZQbswd5vO2jmvozKjMeqdyt%2FOwH5seF154jc%2F7RDQLA92hw9FWVFWIXC%2Be%2Bj6T9cdaejVaU5DAxiIS%2BT2GFgbiYKK%2BKUtYPhAKixYSTAWAvoxC0LqWb29EVpwJwO8fyT%2BHLE6wjK%2BgnFuv%2FHKAdaavPagSK04LmcDUIs5y0utaR2CaFtMoV3tZlWkHo6ZQFuLEm6swu6HrQZKAJU6Bw5eGUSaFyjKoukIwt5Wt5PPtXPp3hEak%2FH18Y5F1Q4GjMYni%2Bq6z1qQbE1drqI5t5IL3viDvtFuG7psm0%2Fkd1rTbawfwYkKD2O1H2csyuzvUz%2FSpN2E29zt%2FER8blb6QnHcoqEFmBJxzWig9lBWl%2F6qLeqC8olFFQIK5hmAs9g9s2Rf4ota33OSoXwb7KXNLwkcBaxULqo%2FMUF7YtgRSLtUZ5PjcNyiU%2FjDO%2BvS%2FBjqkAU64E2O9z2tDOVqNCjGfRYnOIt5kveK2GjsUAeVGr61CDaFRkKzCCQdVIlzifTnEFA7tW2e3YhrDAgvhre0vtHFCC2XAgbKZoqs3mnFoPY%2FxTwrD5BErknRRZjueIDo09KhNMgTg6SxHs9YuNMf2v5Q32q%2F%2F3JqamgWqqw%2By2lLCpWPSwmkYjJvm3hddCNJp0P8V4BDQODeyTcDyvC8whFld%2B4KH&X-Amz-Signature=10769d38bee4a63a5198ad15b801e809ed89e7bf9b39455cf5b143fd174f510d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
