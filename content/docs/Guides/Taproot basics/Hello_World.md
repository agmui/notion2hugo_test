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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERBIM6D%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDtnnWlErjly7H0%2BVGAHMAu3UktY0YZODLHSPcEMNDjFgIhAP%2BRnvJGdCWJhLFBsmugFeg31pc7xBDvgf2gzuxvufxKKv8DCBwQABoMNjM3NDIzMTgzODA1IgyWuOYokQGx2Opp9%2Fcq3ANjaC5qQ210ZFL5dYQtxPZo3mw6bmdvNut82I3q%2FY3KRWmSh4m%2B2e2NUC2M2ARHE2kBq8%2F0EY2e601IxwXCyyH9on4y6lu2UdEhCbifszLyQWZrpgkgZyI8FKy6A%2BYQnMV%2BOfYuEn8J5ibB99g5zCFoJ371eNSnk2X2RAcpwCvAeUwiyDHU1aDmsdxaRsbAFPfL%2B2v0mzu8trdrO6CX2KkDR9YteQQlMW9Ywj31fufWif6Un7cRXhUfNxHQiMXJpUdR9F%2FaOJYZQK3O83u707qCI9dpjfIItndY1QCFBTcFF408jzQKK%2BALP4y812KQn%2FvMME8VV48plFqk9ab0r%2FvYSBX%2FcHZvaO1toiqpW2d%2BpwPQ5KwNvFxEQR3hYYZLWiqXYKkTktN%2BDmr0H33Re9estyc9i1FfU3f90X2vfxkR4FkzFkfMvY4Dk4wHmEB5QXdxntJJkOAaITy4AugtQLWQ1RnO9LfXAgsaztc%2BF76Jc4q1QxNdhrFgu9Pm7AbQPrx4fH1e0ZRAvCJ0FSJa3%2BTB8NqQn0aD5csR8Zy5PRC0Veosp5qHfsjfV%2BSPKq82w%2BEEGf6EDgYGyp%2F4A4Nmx89LN1cafEelljraI%2F4gJ62hWE3qUawE3PVJYOGomzDurMjBBjqkAYGKMm%2FrBE%2FMTBp0hy4KQtAyApwpJ3oC1EWrViWsazQGh%2BaB0R%2BSSi3QfdHqDPFvbXi%2BKdPo%2F%2BJvUc4S1V%2BxiNQ3GcGDvK97Dxa60ZIWvIJSY2VS2HzHFzjbn%2FGE3R%2F5GshAdZ9Ln3wKdj%2FaTqCnBkZXLevDSo5J%2FTVC2DKgI9gnhqKBLFfV2E0fqrna%2Fzk8vFEKDWwlnfEQiJmPofeOWHfgBKz5&X-Amz-Signature=de3c4f42ddef651fa3d44a1243076138fd8f446400acb9dd823c0d36329f9c27&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERBIM6D%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDtnnWlErjly7H0%2BVGAHMAu3UktY0YZODLHSPcEMNDjFgIhAP%2BRnvJGdCWJhLFBsmugFeg31pc7xBDvgf2gzuxvufxKKv8DCBwQABoMNjM3NDIzMTgzODA1IgyWuOYokQGx2Opp9%2Fcq3ANjaC5qQ210ZFL5dYQtxPZo3mw6bmdvNut82I3q%2FY3KRWmSh4m%2B2e2NUC2M2ARHE2kBq8%2F0EY2e601IxwXCyyH9on4y6lu2UdEhCbifszLyQWZrpgkgZyI8FKy6A%2BYQnMV%2BOfYuEn8J5ibB99g5zCFoJ371eNSnk2X2RAcpwCvAeUwiyDHU1aDmsdxaRsbAFPfL%2B2v0mzu8trdrO6CX2KkDR9YteQQlMW9Ywj31fufWif6Un7cRXhUfNxHQiMXJpUdR9F%2FaOJYZQK3O83u707qCI9dpjfIItndY1QCFBTcFF408jzQKK%2BALP4y812KQn%2FvMME8VV48plFqk9ab0r%2FvYSBX%2FcHZvaO1toiqpW2d%2BpwPQ5KwNvFxEQR3hYYZLWiqXYKkTktN%2BDmr0H33Re9estyc9i1FfU3f90X2vfxkR4FkzFkfMvY4Dk4wHmEB5QXdxntJJkOAaITy4AugtQLWQ1RnO9LfXAgsaztc%2BF76Jc4q1QxNdhrFgu9Pm7AbQPrx4fH1e0ZRAvCJ0FSJa3%2BTB8NqQn0aD5csR8Zy5PRC0Veosp5qHfsjfV%2BSPKq82w%2BEEGf6EDgYGyp%2F4A4Nmx89LN1cafEelljraI%2F4gJ62hWE3qUawE3PVJYOGomzDurMjBBjqkAYGKMm%2FrBE%2FMTBp0hy4KQtAyApwpJ3oC1EWrViWsazQGh%2BaB0R%2BSSi3QfdHqDPFvbXi%2BKdPo%2F%2BJvUc4S1V%2BxiNQ3GcGDvK97Dxa60ZIWvIJSY2VS2HzHFzjbn%2FGE3R%2F5GshAdZ9Ln3wKdj%2FaTqCnBkZXLevDSo5J%2FTVC2DKgI9gnhqKBLFfV2E0fqrna%2Fzk8vFEKDWwlnfEQiJmPofeOWHfgBKz5&X-Amz-Signature=56ff1719fa9b2bf02c287b7f25c22f219a80addbadcace1a4822a62e5a1ae7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
