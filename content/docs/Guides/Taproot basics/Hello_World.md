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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHGNSILR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYhA3L8%2BIsS3MtJrdfrxu2XPD%2BUirWhVCAS9ipgNuL2AiEAi8sfvVzy9%2FEXaE2zFg1ZARWg1kbO8q2jwXy6zGKj17kq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCEFItf2YGnWkOeT4CrcA4UKSuOU665lkzWTTb8kKIi7kCDEHXB%2FAxyyuavjH7%2BbmnOB94DlFgoqMGb5txHjEjm3akmrBttyN2CD54MjtlO8OPUF2Yt0EiFfVh0f3F5sC6dO6iXgbqj4J3jnYyYOjZgGabat60KZTOn914WdT3Br6s28YSh9SSlEdsRAVDxE66Ocgk48x5%2B4PK2LW2r4gKg2uBcbCxxkbdlC7%2FRKxp5e0jN5o6VXA5v8BPSYSkegVEDG57nha0cmK6BJeMYT0CQRuFacibsDnzRLi9e%2Bc%2BfX1qW8DuSn7432DLBjp854G%2BNOPE0bCI6s%2F2DmrWkvZVxzpXHp0vwQ23BYYwoLp%2BuYtG3LklahQEHIaR6RrZmSYCzJDGEy4IK%2FnqGx%2BE3ENRyNQF5Rr5RUsZUWofLJDMw8Ah445n%2BWh8c0AKp5OI0F%2BvZO%2FRurfym6lbZj4FS8qO2Ld3uud7V3APbPyeZwF4h96r%2FjiW8rOIeqD8X0nqZ7xCMf9M7BpRam%2F2koGLQcw5S5CEsrU4EBYuGty4SfoQlyaObZw36X4P1W0otSkECoKM2dU7tWI68NGWh8eEbDGXYhOo7tCL%2BwfYsU8ZdnyT2MHp8f6p0gejAKsCgWQCt%2Fw3lVDfpaR%2FSBYdhsMLXD2sEGOqUBEzNgpTr9cj7iKq3xy5XLaz%2Bt8lFS85zHmSCx4pcp7YzHvfux8DA0UsCmtOsCyLVRt3UsUVYd0ElZ4SpgxNYHli2%2B7VtY8GuLHM9CB5xBoVaylkTPACTwB6NXfc74aij65zDDcGn3XjLwqvsrArKO%2Bcvs1LJLE7qug%2B4snF3Nlm1rUQZQhFwWZO9hPnpIcTvmMuZSYxfCLYMeLfXlg1M4lwGV3HY0&X-Amz-Signature=26eb65f6082874b98affa444a3493317306c70f2407ace5e2cd1c1b1c69360b4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHGNSILR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYhA3L8%2BIsS3MtJrdfrxu2XPD%2BUirWhVCAS9ipgNuL2AiEAi8sfvVzy9%2FEXaE2zFg1ZARWg1kbO8q2jwXy6zGKj17kq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCEFItf2YGnWkOeT4CrcA4UKSuOU665lkzWTTb8kKIi7kCDEHXB%2FAxyyuavjH7%2BbmnOB94DlFgoqMGb5txHjEjm3akmrBttyN2CD54MjtlO8OPUF2Yt0EiFfVh0f3F5sC6dO6iXgbqj4J3jnYyYOjZgGabat60KZTOn914WdT3Br6s28YSh9SSlEdsRAVDxE66Ocgk48x5%2B4PK2LW2r4gKg2uBcbCxxkbdlC7%2FRKxp5e0jN5o6VXA5v8BPSYSkegVEDG57nha0cmK6BJeMYT0CQRuFacibsDnzRLi9e%2Bc%2BfX1qW8DuSn7432DLBjp854G%2BNOPE0bCI6s%2F2DmrWkvZVxzpXHp0vwQ23BYYwoLp%2BuYtG3LklahQEHIaR6RrZmSYCzJDGEy4IK%2FnqGx%2BE3ENRyNQF5Rr5RUsZUWofLJDMw8Ah445n%2BWh8c0AKp5OI0F%2BvZO%2FRurfym6lbZj4FS8qO2Ld3uud7V3APbPyeZwF4h96r%2FjiW8rOIeqD8X0nqZ7xCMf9M7BpRam%2F2koGLQcw5S5CEsrU4EBYuGty4SfoQlyaObZw36X4P1W0otSkECoKM2dU7tWI68NGWh8eEbDGXYhOo7tCL%2BwfYsU8ZdnyT2MHp8f6p0gejAKsCgWQCt%2Fw3lVDfpaR%2FSBYdhsMLXD2sEGOqUBEzNgpTr9cj7iKq3xy5XLaz%2Bt8lFS85zHmSCx4pcp7YzHvfux8DA0UsCmtOsCyLVRt3UsUVYd0ElZ4SpgxNYHli2%2B7VtY8GuLHM9CB5xBoVaylkTPACTwB6NXfc74aij65zDDcGn3XjLwqvsrArKO%2Bcvs1LJLE7qug%2B4snF3Nlm1rUQZQhFwWZO9hPnpIcTvmMuZSYxfCLYMeLfXlg1M4lwGV3HY0&X-Amz-Signature=cddd3d5979a65686a4d7da023133ae90d8e7a72823bfe14e2e40c27c7c06389c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
