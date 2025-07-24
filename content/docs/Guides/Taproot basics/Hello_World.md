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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZXZNFJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDKF0dTD3fDcgiYjDs%2BF1kLe3HwkQf3zSWlgfq4h%2FCjiwIhAOGIRHuAt%2Fz8XYsguB7%2B1ei2QJujRhnzAwym7F1TcNh8Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxbEDFZoeYmCw6nI58q3AMEEl4F1s%2BmOUWTz5KpKjljMjcMC5bPE5gm%2FlYdA9J7uiExUTYPF8GXWjWIuhE3QWNzI0PlyI%2F04EXOGuy8uYj4mPIArm6HIKjSK%2BcCCkt3acDa9oLuPeGS4xUDpZZx3N7ZIHToUGOlRIvR7AKR9pTiNIxRnC1dqb%2Fu%2FBclPBrAr1vikbgeE%2Fuxt9RTU4oidmUmvrAEOeq2ZohIpVsj7%2Bh4ttWSU6%2F3Red8Deu9iUG3eYo9yjIJpQ7FwIqRONgjlFCnXJQ1Cd210AvaNye5yK0qDbxJr8xjzJ4xAkbNWx08DZjt9eVSLA7lIHWHPC0N%2FRivlUokFftQjFaRf1jYOzTdeQBOOdrijQozU4uNnoCcOb3GnLycMd2AAo7BfVig9QdUL3DRtzC33598ZteFjeZ6GkFJj%2FLUjF%2B2Uv2y%2B1kSIL4HjYGvbuoyFCDrq7SGOQezDL%2FX%2BJvMeY7VQcaE%2B4ZnYK35mxW%2B5cqLOrG66GMAWjf4fu1aXXGTrsZCiZPhMPOnYFhQEaxYMFofSDDAs9hQ0%2Byr4Z1LCg99JrAhLJAM8M6bphjE9v16UJNJftBvBzQh23xKpvd3dVQIPdCwDJo2ztZgClYKcXoiOTpBvMvwgnAQVt8BQb6NiNXCejC4j4jEBjqkAX4odarIa0SsL7tQnCgnzYxvD3iatQM2DWA06E8gaHhGqim2emB8FBrzTge9frP8q8hEFbZYC6rNEgLrTAN3SvbEO8kTV6AatMe%2FEJ1msDLJ1cBqJ8l7ohXjMdnZ3hwCdUXo7xKlzjDuGwgPhlvheeoybzJwmvwu1cTMuEVbfBM7lFyhXO0eNvacOV1pgPz4dpX1zinBNfExwahOwyiIgvP9IgMd&X-Amz-Signature=543769a78e14dab40de789dfd36c63e2b2e48ea6b2bf92cfa54f17b2331029c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZXZNFJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDKF0dTD3fDcgiYjDs%2BF1kLe3HwkQf3zSWlgfq4h%2FCjiwIhAOGIRHuAt%2Fz8XYsguB7%2B1ei2QJujRhnzAwym7F1TcNh8Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxbEDFZoeYmCw6nI58q3AMEEl4F1s%2BmOUWTz5KpKjljMjcMC5bPE5gm%2FlYdA9J7uiExUTYPF8GXWjWIuhE3QWNzI0PlyI%2F04EXOGuy8uYj4mPIArm6HIKjSK%2BcCCkt3acDa9oLuPeGS4xUDpZZx3N7ZIHToUGOlRIvR7AKR9pTiNIxRnC1dqb%2Fu%2FBclPBrAr1vikbgeE%2Fuxt9RTU4oidmUmvrAEOeq2ZohIpVsj7%2Bh4ttWSU6%2F3Red8Deu9iUG3eYo9yjIJpQ7FwIqRONgjlFCnXJQ1Cd210AvaNye5yK0qDbxJr8xjzJ4xAkbNWx08DZjt9eVSLA7lIHWHPC0N%2FRivlUokFftQjFaRf1jYOzTdeQBOOdrijQozU4uNnoCcOb3GnLycMd2AAo7BfVig9QdUL3DRtzC33598ZteFjeZ6GkFJj%2FLUjF%2B2Uv2y%2B1kSIL4HjYGvbuoyFCDrq7SGOQezDL%2FX%2BJvMeY7VQcaE%2B4ZnYK35mxW%2B5cqLOrG66GMAWjf4fu1aXXGTrsZCiZPhMPOnYFhQEaxYMFofSDDAs9hQ0%2Byr4Z1LCg99JrAhLJAM8M6bphjE9v16UJNJftBvBzQh23xKpvd3dVQIPdCwDJo2ztZgClYKcXoiOTpBvMvwgnAQVt8BQb6NiNXCejC4j4jEBjqkAX4odarIa0SsL7tQnCgnzYxvD3iatQM2DWA06E8gaHhGqim2emB8FBrzTge9frP8q8hEFbZYC6rNEgLrTAN3SvbEO8kTV6AatMe%2FEJ1msDLJ1cBqJ8l7ohXjMdnZ3hwCdUXo7xKlzjDuGwgPhlvheeoybzJwmvwu1cTMuEVbfBM7lFyhXO0eNvacOV1pgPz4dpX1zinBNfExwahOwyiIgvP9IgMd&X-Amz-Signature=c5d3a24f4351e5c8333456fc556bfab8c31c44d140ead773e514e4cefab8bb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
