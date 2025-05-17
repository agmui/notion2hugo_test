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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TYPU5G%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKvFZ9%2FZE0La1AaA0YT%2F6tFdaip9FXyzsbftdjeF%2F54wIhAKhjOFtOGGu%2FxmOzZ3bMp8pwBU%2BYhvONN3U3tbh1W1MIKv8DCGcQABoMNjM3NDIzMTgzODA1IgxlN9cc1YKcBUachuAq3ANlBZL%2F9g5MwN5PcN12TPv8KLm8YA%2Bi%2BoXTt7mUzvQV%2BOx4WkDWaOIGUL4LUSC1NtwQpB6e5Xg4KSO8rap38aQe6bxBiOVcQQ1nimLT5FPzHdAHGUYMVUvqlZ6jAJC%2BFjiKG6nZXZE0sn2Qv%2Bt5gAGARKPv5RiCAiRpUGxJwEKqHJ%2BVONBKUaEjnAMUHgYD%2Fu3V0mDM7v4%2Fdszf8WY9SE9M9MYF%2B%2FaxKoG698PzxN%2FAeGKA1s2KL2kxNPgYMmacznD9kNC%2FRWjZGPwBgayMTns1%2FX8GPfSSOXFjxjouQZ99NMdXHd2Q1cpFrH9I8cvZX2VbXDHZeah6kSKA2i%2FjVhUZZVCe%2Fthuwd8IblQkWTOrk0RejTCu6NCuhOQFNelI4Uw7GiIG%2FpdvHvWb9zE4Y53xv%2FTdGilXG0WjCmh8dhGqp2rDqoJg4tKpzNUjZq4Z0bKFAt%2BGcePhav2Fm3Qi31pDSOHPibey0foHPhI1qR3ytoCttryb2TzU4eNOJDY1gq%2Bp3EUrxq3r3bCVcY4k0ajlLzsEsEpHR8cLExwrVWm3RYN6G%2FW7hWCx9%2F%2BwLob2YiOlUSrXHBGFxsp4eYmKYumbbOTQm%2FFZe6bZPFcfHSKOUPAYt7MftQSv306a9jDWkKTBBjqkAcVIJAi1zZBsQqxv7mHSieQ8y3EENph7CVXwrF2L13HuLUuaH5BhGnDL1Ix4zp5QDkzwDB2Oo%2FnDWUGEdHuShdYfS%2Bfqb4Z6z3s8JYC68fFcEMgbIZV7sofLwVkmMMtC6DPYYoXi%2BKgzVHcUZHIxW8olIeXXZV4HrBwOvh4RVzH3ktO8tvGRxGTq1K1Fs7%2BAQNtMj1jbcn%2BNaqxvJHNxH68OjVTg&X-Amz-Signature=a525c960039f242ef8bee77b9d9249bb279a7ab0448fecdc201a31a1e7246a29&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TYPU5G%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKvFZ9%2FZE0La1AaA0YT%2F6tFdaip9FXyzsbftdjeF%2F54wIhAKhjOFtOGGu%2FxmOzZ3bMp8pwBU%2BYhvONN3U3tbh1W1MIKv8DCGcQABoMNjM3NDIzMTgzODA1IgxlN9cc1YKcBUachuAq3ANlBZL%2F9g5MwN5PcN12TPv8KLm8YA%2Bi%2BoXTt7mUzvQV%2BOx4WkDWaOIGUL4LUSC1NtwQpB6e5Xg4KSO8rap38aQe6bxBiOVcQQ1nimLT5FPzHdAHGUYMVUvqlZ6jAJC%2BFjiKG6nZXZE0sn2Qv%2Bt5gAGARKPv5RiCAiRpUGxJwEKqHJ%2BVONBKUaEjnAMUHgYD%2Fu3V0mDM7v4%2Fdszf8WY9SE9M9MYF%2B%2FaxKoG698PzxN%2FAeGKA1s2KL2kxNPgYMmacznD9kNC%2FRWjZGPwBgayMTns1%2FX8GPfSSOXFjxjouQZ99NMdXHd2Q1cpFrH9I8cvZX2VbXDHZeah6kSKA2i%2FjVhUZZVCe%2Fthuwd8IblQkWTOrk0RejTCu6NCuhOQFNelI4Uw7GiIG%2FpdvHvWb9zE4Y53xv%2FTdGilXG0WjCmh8dhGqp2rDqoJg4tKpzNUjZq4Z0bKFAt%2BGcePhav2Fm3Qi31pDSOHPibey0foHPhI1qR3ytoCttryb2TzU4eNOJDY1gq%2Bp3EUrxq3r3bCVcY4k0ajlLzsEsEpHR8cLExwrVWm3RYN6G%2FW7hWCx9%2F%2BwLob2YiOlUSrXHBGFxsp4eYmKYumbbOTQm%2FFZe6bZPFcfHSKOUPAYt7MftQSv306a9jDWkKTBBjqkAcVIJAi1zZBsQqxv7mHSieQ8y3EENph7CVXwrF2L13HuLUuaH5BhGnDL1Ix4zp5QDkzwDB2Oo%2FnDWUGEdHuShdYfS%2Bfqb4Z6z3s8JYC68fFcEMgbIZV7sofLwVkmMMtC6DPYYoXi%2BKgzVHcUZHIxW8olIeXXZV4HrBwOvh4RVzH3ktO8tvGRxGTq1K1Fs7%2BAQNtMj1jbcn%2BNaqxvJHNxH68OjVTg&X-Amz-Signature=d3619fa1b21b6f78f401a8ac5de07ca94d34867b06ab5068307003e397436801&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
