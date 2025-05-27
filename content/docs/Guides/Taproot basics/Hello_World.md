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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSVL6YP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxzCP7PZyuHcWcTW6yYBU%2F1dtcwieX7atOL4ba2ybawAiBOy%2BhnYdM3SfOBugX8oekZYktilZgPac9cQwqRy5UExyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMHb%2BSukLwmiwvhdLlKtwDgfnKUdr9YKyLYtfNjo0jNBamU6cgsz2%2B85infPBcGknvqMMMCypmngd%2BGyPE%2Felo1DHTZ%2B2MhlQC9s9Byc7dIqwnJwucVl%2B9HbT%2Bu7D%2BeMvz2mS4V34gdHhBVVNnQavxNzlEsiZj9tilx3LtCH7%2F2kDodVVV0cbpEksLKqVL8QwjQhGkgv6zPJyyJQ7BzRg7%2Fj6oefFmZnRro2M5DFpf7Tl2BNixHqFuoKy16koaUIu3VhsakYxGc8OM5bAeJlAmbgjvjkN7vogl179Jxb9%2BizIGxzX9KG2KUnQ6x1EYkrzZ7O7cRaoQc%2B62PqlSmPVTtWHNcGxgTSAJB1y5LR26c6fC%2BMNowBZr30z1K63tCRLzad6vonKivDh8ISgdLwrKtuboSfQarRqtXtYgB4Bm%2FiuxAebEAfBC4MaGlclsKLy1QSELDr37OCLHzbRk6sKaj37rtinWolfS%2FiE0vZmNmEvQha4ZhlreQ5sx7oH90uQ%2FQ1grVXsOJmKwbWoiw5EIOcw3gApWXdZRdXTttdaqg9r39GinMr5PZqGKrO2fNY6ensbAR4sgiadRtkLugBpBnvBLODGa6Q04y7ZEJZYiLnjtFhbGgep5oIyTfp1DYR05XSvbQeupaj%2Fr0SYwgfzWwQY6pgGypdLbRJP5irmNdX1QGk9Pa2R1bFBsbM6PH2TtXd752YhHzcxVSlDcpscCXlpiKCeA3f5ePJVvQpMFXn8TYlKp2EQP2h0cl8tBWxTQ38OOTFiIAYMkquG4MIvy8uTz%2BX7EKfIYvt2hF5%2BX8Zat%2BvSF18SBIC%2BFVn07aVxlE%2BouWzuYXRDO6FzYTpDKSZyd6s9eqG3sm%2BwrI6V33fMNb0BkeYK%2FKC1g&X-Amz-Signature=b1faea23fb5c7db85a53dda363bb4dbf9ab5eb7eb079c0df3861485464f473fd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSVL6YP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxzCP7PZyuHcWcTW6yYBU%2F1dtcwieX7atOL4ba2ybawAiBOy%2BhnYdM3SfOBugX8oekZYktilZgPac9cQwqRy5UExyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMHb%2BSukLwmiwvhdLlKtwDgfnKUdr9YKyLYtfNjo0jNBamU6cgsz2%2B85infPBcGknvqMMMCypmngd%2BGyPE%2Felo1DHTZ%2B2MhlQC9s9Byc7dIqwnJwucVl%2B9HbT%2Bu7D%2BeMvz2mS4V34gdHhBVVNnQavxNzlEsiZj9tilx3LtCH7%2F2kDodVVV0cbpEksLKqVL8QwjQhGkgv6zPJyyJQ7BzRg7%2Fj6oefFmZnRro2M5DFpf7Tl2BNixHqFuoKy16koaUIu3VhsakYxGc8OM5bAeJlAmbgjvjkN7vogl179Jxb9%2BizIGxzX9KG2KUnQ6x1EYkrzZ7O7cRaoQc%2B62PqlSmPVTtWHNcGxgTSAJB1y5LR26c6fC%2BMNowBZr30z1K63tCRLzad6vonKivDh8ISgdLwrKtuboSfQarRqtXtYgB4Bm%2FiuxAebEAfBC4MaGlclsKLy1QSELDr37OCLHzbRk6sKaj37rtinWolfS%2FiE0vZmNmEvQha4ZhlreQ5sx7oH90uQ%2FQ1grVXsOJmKwbWoiw5EIOcw3gApWXdZRdXTttdaqg9r39GinMr5PZqGKrO2fNY6ensbAR4sgiadRtkLugBpBnvBLODGa6Q04y7ZEJZYiLnjtFhbGgep5oIyTfp1DYR05XSvbQeupaj%2Fr0SYwgfzWwQY6pgGypdLbRJP5irmNdX1QGk9Pa2R1bFBsbM6PH2TtXd752YhHzcxVSlDcpscCXlpiKCeA3f5ePJVvQpMFXn8TYlKp2EQP2h0cl8tBWxTQ38OOTFiIAYMkquG4MIvy8uTz%2BX7EKfIYvt2hF5%2BX8Zat%2BvSF18SBIC%2BFVn07aVxlE%2BouWzuYXRDO6FzYTpDKSZyd6s9eqG3sm%2BwrI6V33fMNb0BkeYK%2FKC1g&X-Amz-Signature=66eac4aeebf1a5794892fe0904b7632790d986f34777cea4105ec4aaea404c78&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
