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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHTX2GC%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDSnc%2FJaVZIdD1mv8%2B84X9cKYbD1srKsZgJPlIW265G3gIhAPGjh%2FIkmHQjTx0Mzk0duB%2FnWfgCr84EdmpqKgUJ0tjXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1SLJgRjl9LeM9HJgq3ANXQrNRuMQQS9jIAVfch%2BBynpBsgtzs48uaZhWKy0bLSME7VQ3UQAYF6wd10AzWJWzRb9%2Fe3hR535WIPmygs5rRMl0IIHjU43fAC2Ikz5zl24dWqESA%2BkcKeZif33gOpdMlr2rBau90NTtlkuCbzvAqCVZed6TmWhj7k2hvHBy5WEdttiMS8QrbafZMMsSb2kXalGwlskCujxwCKXfFqdY3az3QTqmb6XA%2FyWVULi8lSh%2F2NPgF1ZEqbdDGdpDFdv8mEpafD5WGcfAaniAUQ5XsuNFmgCVUFAjDE8Tq2AcRtMgb%2FzFVxjGxtc6%2BJff40Z5E75W8d%2B05AIlfrHyALJgGTWk3dxW1siLC%2F7Uwr9KzCr1FNFzbFCPdKsbXqutLnLYuv7NbFOyVx69zKPnY0DZh7aPhVW4YZnNAfs%2FLMSdgwYYdgHg%2BeLEb81JhPIelEyFiAIhHRZCkUvju4tTrRWTGyHLuaFhuq9rrQEmVdrt3LOs3boUYLpO7MZQ5mgqeGQLsd0G49xA0Fsy1QjsIeXRenN%2FjuScqJzexnJ%2B4cKj9ynyGACodmZRrlprjL01VIidtw00Fq1AQS7twNABOM9kjvDxaoJwHit7FBzUwsv8SRCX9YCu1wc6%2FYJMFjDDqr9u%2FBjqkASuTE7J0fPKcRsPhEhIbVr3d%2FkKh75rJg7Jz%2FwYNhPI%2Bc14jXJFkRNrrj0VDkB1XBpXwsHN55u9gkLWCxQF0HfNIEeS6qL5L7tzrEo5jzTBfn6dKUlk4O%2FBm1ICIWa6AaltP2dfEsTDPxSF5b%2F7CgYsPS7ONWcljTu%2F4EC%2Fa%2BbMLWYIKHHYo%2BcF1mMoDP9w6%2BwTlR%2Fic6jYGG6WFxPliUHnLKuY9&X-Amz-Signature=99658ef79e2ad1acce49da81ee9f73d782fbff6b28d46591406ee7f2e6758672&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHTX2GC%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDSnc%2FJaVZIdD1mv8%2B84X9cKYbD1srKsZgJPlIW265G3gIhAPGjh%2FIkmHQjTx0Mzk0duB%2FnWfgCr84EdmpqKgUJ0tjXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1SLJgRjl9LeM9HJgq3ANXQrNRuMQQS9jIAVfch%2BBynpBsgtzs48uaZhWKy0bLSME7VQ3UQAYF6wd10AzWJWzRb9%2Fe3hR535WIPmygs5rRMl0IIHjU43fAC2Ikz5zl24dWqESA%2BkcKeZif33gOpdMlr2rBau90NTtlkuCbzvAqCVZed6TmWhj7k2hvHBy5WEdttiMS8QrbafZMMsSb2kXalGwlskCujxwCKXfFqdY3az3QTqmb6XA%2FyWVULi8lSh%2F2NPgF1ZEqbdDGdpDFdv8mEpafD5WGcfAaniAUQ5XsuNFmgCVUFAjDE8Tq2AcRtMgb%2FzFVxjGxtc6%2BJff40Z5E75W8d%2B05AIlfrHyALJgGTWk3dxW1siLC%2F7Uwr9KzCr1FNFzbFCPdKsbXqutLnLYuv7NbFOyVx69zKPnY0DZh7aPhVW4YZnNAfs%2FLMSdgwYYdgHg%2BeLEb81JhPIelEyFiAIhHRZCkUvju4tTrRWTGyHLuaFhuq9rrQEmVdrt3LOs3boUYLpO7MZQ5mgqeGQLsd0G49xA0Fsy1QjsIeXRenN%2FjuScqJzexnJ%2B4cKj9ynyGACodmZRrlprjL01VIidtw00Fq1AQS7twNABOM9kjvDxaoJwHit7FBzUwsv8SRCX9YCu1wc6%2FYJMFjDDqr9u%2FBjqkASuTE7J0fPKcRsPhEhIbVr3d%2FkKh75rJg7Jz%2FwYNhPI%2Bc14jXJFkRNrrj0VDkB1XBpXwsHN55u9gkLWCxQF0HfNIEeS6qL5L7tzrEo5jzTBfn6dKUlk4O%2FBm1ICIWa6AaltP2dfEsTDPxSF5b%2F7CgYsPS7ONWcljTu%2F4EC%2Fa%2BbMLWYIKHHYo%2BcF1mMoDP9w6%2BwTlR%2Fic6jYGG6WFxPliUHnLKuY9&X-Amz-Signature=22b4890fd037cdf8d64523d9eb3f9046a216b196411a325e88f3a92cd33a19f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
