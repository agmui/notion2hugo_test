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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5HAY5L%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5QYeU%2B8EJDB7ukFKcuHtifjz%2BmMNyCWmfePdgzXmUvAiEA%2FRCaH9JNPM7xkZZB8Klkxm6Bf7F5Syv0GajfCUfHq4IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmZfSNhbqj0%2B3%2B%2BYSrcA48xqLz8jOHpQRtZXTpdVDWqH1Ov2o3f3Ia4iEP5JuwOUl1yHkstjrm09xiNypQWlFW82lqGzUclKnA8eplDCKQaXsHFOHqsJipABlsFKUzdCmoVdavtDbltIUXvZJ%2B8CDcGfSZ4ddBnO88ohru%2F5FIiOJIYNIFv0KehvddJqpMGrT5nB8o4EVxAHgpMDjl4qyuVAlx5HfRsaKNmJO7cDJPXMv4gMS4DGO7SIUXNrWOQG5Qwx38rtOV%2F%2BaWfjIZbW4bQQvonxyA8sLuoPYsa3tqv6GROt18%2BSmPvjKZfcBwGqfIXpOGbcdQdR0bZE2WFGdMHzJwj%2BXjYQeqlRxgIoz4%2FfGMzfhkOTkiZGM0hKe1BxuRvEdWnkZamY%2FDBZTUylJtirzP7VaMGgzfJ0CKcFy03I5T2ZkP%2BvFG79kUyaXs%2BEVhVN2udWnBUILZtq0LYOaVECNaMxV80lF96zNaOLBl4EQnpogvGq7fJBNPTX5zgs2KmLK8%2F4BdqfKsqBbZ1YfLPwnTgasqSWVbTHObqjUXdXlbBXn1in8l5Us8E38KO5rM%2FGp1kekkpNDuy2W1X4N3Klle693%2B5Yx%2F0HX%2FzW7EuHrP6Xh5TirEq0FHnjk7Ddd5FI%2FH3pBWi8YF2MPet3L0GOqUBCmPPjBFItAXpkORKH2FZyHlmsn5yIAExA6su2gM9okHwO0zwtPouYaEW7qyhS8tcAl1I99ofFNKpMijx8QZ8QfSqPSWk2rD0c7h9YFuWvYQzrqUgFWCykIdZWVCfz182r%2BnsaMRQqP0Ys6m8sGvlIOnjEtQBY1zXAvQKXgdm0vc%2FzuEDFCUwcJzLEOlEXZr13DNTbBfAOjZ4jL%2F1Y04n%2FUu0e9Nn&X-Amz-Signature=0724f39b9aa7b4d47ea8e5f415a227cf04df8ebaf492ad10f334b431504f8979&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5HAY5L%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5QYeU%2B8EJDB7ukFKcuHtifjz%2BmMNyCWmfePdgzXmUvAiEA%2FRCaH9JNPM7xkZZB8Klkxm6Bf7F5Syv0GajfCUfHq4IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmZfSNhbqj0%2B3%2B%2BYSrcA48xqLz8jOHpQRtZXTpdVDWqH1Ov2o3f3Ia4iEP5JuwOUl1yHkstjrm09xiNypQWlFW82lqGzUclKnA8eplDCKQaXsHFOHqsJipABlsFKUzdCmoVdavtDbltIUXvZJ%2B8CDcGfSZ4ddBnO88ohru%2F5FIiOJIYNIFv0KehvddJqpMGrT5nB8o4EVxAHgpMDjl4qyuVAlx5HfRsaKNmJO7cDJPXMv4gMS4DGO7SIUXNrWOQG5Qwx38rtOV%2F%2BaWfjIZbW4bQQvonxyA8sLuoPYsa3tqv6GROt18%2BSmPvjKZfcBwGqfIXpOGbcdQdR0bZE2WFGdMHzJwj%2BXjYQeqlRxgIoz4%2FfGMzfhkOTkiZGM0hKe1BxuRvEdWnkZamY%2FDBZTUylJtirzP7VaMGgzfJ0CKcFy03I5T2ZkP%2BvFG79kUyaXs%2BEVhVN2udWnBUILZtq0LYOaVECNaMxV80lF96zNaOLBl4EQnpogvGq7fJBNPTX5zgs2KmLK8%2F4BdqfKsqBbZ1YfLPwnTgasqSWVbTHObqjUXdXlbBXn1in8l5Us8E38KO5rM%2FGp1kekkpNDuy2W1X4N3Klle693%2B5Yx%2F0HX%2FzW7EuHrP6Xh5TirEq0FHnjk7Ddd5FI%2FH3pBWi8YF2MPet3L0GOqUBCmPPjBFItAXpkORKH2FZyHlmsn5yIAExA6su2gM9okHwO0zwtPouYaEW7qyhS8tcAl1I99ofFNKpMijx8QZ8QfSqPSWk2rD0c7h9YFuWvYQzrqUgFWCykIdZWVCfz182r%2BnsaMRQqP0Ys6m8sGvlIOnjEtQBY1zXAvQKXgdm0vc%2FzuEDFCUwcJzLEOlEXZr13DNTbBfAOjZ4jL%2F1Y04n%2FUu0e9Nn&X-Amz-Signature=36e91197f716e0be4bbf7cd77687642dcfb7922fc857f67bcfe5df5c47e16e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
