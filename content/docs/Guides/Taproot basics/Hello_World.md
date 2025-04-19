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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHU4VX4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh9lJYz%2BCypVPKne8AMDQ174GRplOPn3o3lzQgGWTYdwIhAL3fMKC1Qe3OQl08uDJAkGFSGAKONuSddBQL0n7WWhzMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwue%2FvRXvjWNLtYKXgq3APiekwlUFVIvqKXRKAkJFHbhevxNIELEBBK9XtfGJT2Xll7NOpB1yXPQgyWn2cLH7C7OrlmD%2FcsGvHkXfh9ldQtbrV7mHTAKHFnUgN6nURPEN%2FkGL66R01a2WygWfazPdgn2Tq%2FxYVEtRuLqtEVde5vm66VR6KcXN3uC28uL%2BDm81t%2BGJQGSoYdRt7RlG2L7iOK1N6ywblHFW%2BD74G5IpLeoXNDkXyW9HnNmY2DkkeSU1Bx6rUQF1guFhas%2BOxx9QLRoejyItbHdNAeE%2Fy3PuDm5bcQ1qiUAfCqxxB2%2FzJ6znoIDJwM9993MkiY%2BodrgCK2Kw%2FnfUeHHUukfGJq1Ro17BkoHSy5bgKnAe0nXCB%2Ff%2BoZrxCfB5fV3lobNHF9hq9%2BBxqJ2TbTW6RCSbLp0Un9JG5oNycbfnsuk3bAuQywmdKt0GuDoKlk3%2FyizflIVqw9uulgAuMItQ77j1%2B%2FRtGNqsQnnYlurn6gs4v8YOEKv3e5K%2FBbUxHTvMQYisPxol17eEZsyrs0CHosCPRNWQJ3H76u0BHbFrmMEi%2FMBaupSj6YGzds%2BcDJqGeO%2FlBLIAhQ%2F%2FPHrxiW3EL4CHer6nN4ibufslS3i%2F46yG8pb8S%2FVAE%2Bdi3FU3dD4UR6RjDjzYvABjqkAZGlDypzm264zTtVYME1lzi27Pv%2FV3mOCJ%2B6vEbxUe3JQMFbUTn3nekzEcHxZjEPDWVcJ63%2FA3fkOjDLGewqLogfPvin76YJirxJNxIKXHmm%2Fbdfgi3RGWQdbGbjqx3cXQdjcvoL749A2ZRuQXJoppk8vHox6%2BNlwSbm7%2FOUJBhZYQKypiUgEFnYrc1aKY%2BOAlPXRqJk4z32gfjmbdZ4ikmEaH7T&X-Amz-Signature=532c1692cc70d9dd574d38bc8f5f5354beb935858f26531bf84797836b066c30&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHU4VX4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh9lJYz%2BCypVPKne8AMDQ174GRplOPn3o3lzQgGWTYdwIhAL3fMKC1Qe3OQl08uDJAkGFSGAKONuSddBQL0n7WWhzMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwue%2FvRXvjWNLtYKXgq3APiekwlUFVIvqKXRKAkJFHbhevxNIELEBBK9XtfGJT2Xll7NOpB1yXPQgyWn2cLH7C7OrlmD%2FcsGvHkXfh9ldQtbrV7mHTAKHFnUgN6nURPEN%2FkGL66R01a2WygWfazPdgn2Tq%2FxYVEtRuLqtEVde5vm66VR6KcXN3uC28uL%2BDm81t%2BGJQGSoYdRt7RlG2L7iOK1N6ywblHFW%2BD74G5IpLeoXNDkXyW9HnNmY2DkkeSU1Bx6rUQF1guFhas%2BOxx9QLRoejyItbHdNAeE%2Fy3PuDm5bcQ1qiUAfCqxxB2%2FzJ6znoIDJwM9993MkiY%2BodrgCK2Kw%2FnfUeHHUukfGJq1Ro17BkoHSy5bgKnAe0nXCB%2Ff%2BoZrxCfB5fV3lobNHF9hq9%2BBxqJ2TbTW6RCSbLp0Un9JG5oNycbfnsuk3bAuQywmdKt0GuDoKlk3%2FyizflIVqw9uulgAuMItQ77j1%2B%2FRtGNqsQnnYlurn6gs4v8YOEKv3e5K%2FBbUxHTvMQYisPxol17eEZsyrs0CHosCPRNWQJ3H76u0BHbFrmMEi%2FMBaupSj6YGzds%2BcDJqGeO%2FlBLIAhQ%2F%2FPHrxiW3EL4CHer6nN4ibufslS3i%2F46yG8pb8S%2FVAE%2Bdi3FU3dD4UR6RjDjzYvABjqkAZGlDypzm264zTtVYME1lzi27Pv%2FV3mOCJ%2B6vEbxUe3JQMFbUTn3nekzEcHxZjEPDWVcJ63%2FA3fkOjDLGewqLogfPvin76YJirxJNxIKXHmm%2Fbdfgi3RGWQdbGbjqx3cXQdjcvoL749A2ZRuQXJoppk8vHox6%2BNlwSbm7%2FOUJBhZYQKypiUgEFnYrc1aKY%2BOAlPXRqJk4z32gfjmbdZ4ikmEaH7T&X-Amz-Signature=d56257c4c9b27b5607b535416e1aa3245649d412bd62ab91770d61533f7eb416&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
