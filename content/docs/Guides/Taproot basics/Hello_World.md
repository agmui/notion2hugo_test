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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EJ7D7HJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDQQSBz2aX22iruSvXsUV2ZzWtYIiDMO5P9hmnqnsmO2wIhALEpqAyUIfYGE3eor1bpVBYeoLbI2ygoXEcVZHzIttE8Kv8DCFIQABoMNjM3NDIzMTgzODA1Igy5O4blrewWm0oJDREq3AMGC8NO51LuRauf6GIJqMh1uUDLH%2Bxf82OgkZZGzKUyU6cP0rXsegMQpGeUHGtivLaJJ2uJkpsRqm%2BvtpGQOuyx0TaxwHs3S1ID2iKGNWN%2FKxNg293do0WrHXfE470KzyubmyyTX1NcOFrn7VpokNv14kp40yNsgjMhOcPoGGZuyVNt6HUG4fI7dose9zY%2Fh3TKBCpY3RNCVuxTQ%2Bq3IcoksU%2FFcPh7%2FR00z6G6g3lipc%2FcAGw9NlgSH2kBavSOMFiMeS3MkksYN5GAkVZaPqYiTy%2BYG7o2fc9LotzkhvwlxUTEn3%2FfnL29EeCoebbjnw1O0wF6TsOUTPw%2FCc85qDOVbUX6%2FKX8N0BXkZ7b3nyj9x3GWnQp%2BnfRK3XboUfxQILbGfVgpT9YlEGU8xejm9CguEOpdomra3OT0gixCljdUYnA6zjCOOUJWiqzjiNrWN4w3ER9v5p%2B%2FNkC7Yj2BX%2FaNqdGauxTVduCMz802C0qR8GK9oHaRmLE7cjfOD6xci83jmAZJEN%2B0P9Vx6gOwpJ3RMeT1P1vhq89QKP%2FxNg8eCM4t8Jy2Re38DnBwZHX7voCvfqIHBL9uTt06F%2Fk4u%2F3XQhDgnRjNN7IdY1SsnXnhCUxRl8aIgAaKg5alDCt94jCBjqkAalLVh%2BjmggaJ%2F3JuZ5D%2FPC%2Fe5cidwQ6%2BYm8fTIZ9Ij583I0YxkxnL%2BZM3FZGM0LyXlnK6hGZvLQjOqUUndWhk3fNaKsSvuU%2FWUz4gvsiF4ZJdOsJ80UlHxohYp%2F3iLAePCmHmE4mGvWR3mviDEbbRFBH9C7jIwov%2BT7fWs%2BzkPl8hP%2BhDc3OE0z247DmHMi7pHBW2Vw27VYSHzM1LXDsjQTTQRz&X-Amz-Signature=29b434ab84ec1e8fb5f5f034cc6c686f6d3c459a40f48873525e3089f95a95ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EJ7D7HJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDQQSBz2aX22iruSvXsUV2ZzWtYIiDMO5P9hmnqnsmO2wIhALEpqAyUIfYGE3eor1bpVBYeoLbI2ygoXEcVZHzIttE8Kv8DCFIQABoMNjM3NDIzMTgzODA1Igy5O4blrewWm0oJDREq3AMGC8NO51LuRauf6GIJqMh1uUDLH%2Bxf82OgkZZGzKUyU6cP0rXsegMQpGeUHGtivLaJJ2uJkpsRqm%2BvtpGQOuyx0TaxwHs3S1ID2iKGNWN%2FKxNg293do0WrHXfE470KzyubmyyTX1NcOFrn7VpokNv14kp40yNsgjMhOcPoGGZuyVNt6HUG4fI7dose9zY%2Fh3TKBCpY3RNCVuxTQ%2Bq3IcoksU%2FFcPh7%2FR00z6G6g3lipc%2FcAGw9NlgSH2kBavSOMFiMeS3MkksYN5GAkVZaPqYiTy%2BYG7o2fc9LotzkhvwlxUTEn3%2FfnL29EeCoebbjnw1O0wF6TsOUTPw%2FCc85qDOVbUX6%2FKX8N0BXkZ7b3nyj9x3GWnQp%2BnfRK3XboUfxQILbGfVgpT9YlEGU8xejm9CguEOpdomra3OT0gixCljdUYnA6zjCOOUJWiqzjiNrWN4w3ER9v5p%2B%2FNkC7Yj2BX%2FaNqdGauxTVduCMz802C0qR8GK9oHaRmLE7cjfOD6xci83jmAZJEN%2B0P9Vx6gOwpJ3RMeT1P1vhq89QKP%2FxNg8eCM4t8Jy2Re38DnBwZHX7voCvfqIHBL9uTt06F%2Fk4u%2F3XQhDgnRjNN7IdY1SsnXnhCUxRl8aIgAaKg5alDCt94jCBjqkAalLVh%2BjmggaJ%2F3JuZ5D%2FPC%2Fe5cidwQ6%2BYm8fTIZ9Ij583I0YxkxnL%2BZM3FZGM0LyXlnK6hGZvLQjOqUUndWhk3fNaKsSvuU%2FWUz4gvsiF4ZJdOsJ80UlHxohYp%2F3iLAePCmHmE4mGvWR3mviDEbbRFBH9C7jIwov%2BT7fWs%2BzkPl8hP%2BhDc3OE0z247DmHMi7pHBW2Vw27VYSHzM1LXDsjQTTQRz&X-Amz-Signature=2b874c78dd534bad8a36a11fc4957f0d4dc16072c6a5071d52980f41a0f3e177&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
