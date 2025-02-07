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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSYSVO7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCaaX3FUnfCTPLUQtn9x4JNoTYcwbksEiu56bRj0ovPeQIhAPffvxZlvicytS31Baq4D%2BAFCnDXXTv%2BShPdYv%2F3eDjWKv8DCHEQABoMNjM3NDIzMTgzODA1IgweWPPtsc948YNrlkwq3AOURVbcIxJiHq2X%2Fw7o20VuM36Ax%2BTsMgg9YNHW2Pym4IDsJOxMe0ODTZ5e79gfdNmRWRSEhVY03eLSbc1SUoX0F9IikjoabS5dWk9PMz2gpn%2FOjnVoYi5VwAOCe2RhikX3zeYWXOs6QXIaqf8vk6gywDXEEf0TtAEPFiWqChv6damtWbeqW8Q0fFWLMOcFYdLQc%2FXI8x1aqiJaqpuaUz0RHryQwDgkCm5AslNmqgwgoSlPn6n7uqwjjjFJ5JUcyYh3%2FjF80cVR8N8EXQjec%2FAYrP%2F8kh2xAymhwDX8gTM%2BTyxaUrypPTJKbLHbD3YWbwHPr6l6jnBGLOtKBYE1NdgqdADE4fhS096Fy0fgzdCnB6Op63NQs6q7M%2F5OB4HH1gZBMI53apNUydrKTvFanFOhNU1ao79ZAkZY3JqRcm3glUzBN3ile7tqEhZU4bvteIACexVZHJJSmbmDaxfwGh4mrljed5sPW06zFA2ClRmyBbHUmHUN4%2FG%2BpAesTWXgRMd7ONw6GQsdDeQFFlGYDZJObvxd7SlmTpKilg9BGDqxIZ8qZ9eNjyhXwBTowPrCENN5WRcr0SwdQsSXuDGJkMCTNzsdQ3tBIq9Nb24IJEDAffp1NObXtK6rduKUQzCQ%2B5a9BjqkATI5E6YOomIMO3fvEc9kZNkWLPq3f6hwj%2Bg7FRr5Ej3UOcBL%2BFEWDsri2MxTn3KImtuqKM4eOlrtxCdizr8zs1QtE%2BCHHX30KemEO24qw3AMhMSJgXbHBzHh8zWTgBHuRbAeOUmMk9Mpm9jPa0qcI%2BmVel50ZBlz4RB70UphFiahOjUU6BzUAAtj1GFh7qHA4CuJF4mK6SQSZdIXkjbAdpw6QCrY&X-Amz-Signature=f541c44cafe3abf54640776dda33a1dd228bb62f5b0d20a9e2242c32de7a7b56&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSYSVO7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCaaX3FUnfCTPLUQtn9x4JNoTYcwbksEiu56bRj0ovPeQIhAPffvxZlvicytS31Baq4D%2BAFCnDXXTv%2BShPdYv%2F3eDjWKv8DCHEQABoMNjM3NDIzMTgzODA1IgweWPPtsc948YNrlkwq3AOURVbcIxJiHq2X%2Fw7o20VuM36Ax%2BTsMgg9YNHW2Pym4IDsJOxMe0ODTZ5e79gfdNmRWRSEhVY03eLSbc1SUoX0F9IikjoabS5dWk9PMz2gpn%2FOjnVoYi5VwAOCe2RhikX3zeYWXOs6QXIaqf8vk6gywDXEEf0TtAEPFiWqChv6damtWbeqW8Q0fFWLMOcFYdLQc%2FXI8x1aqiJaqpuaUz0RHryQwDgkCm5AslNmqgwgoSlPn6n7uqwjjjFJ5JUcyYh3%2FjF80cVR8N8EXQjec%2FAYrP%2F8kh2xAymhwDX8gTM%2BTyxaUrypPTJKbLHbD3YWbwHPr6l6jnBGLOtKBYE1NdgqdADE4fhS096Fy0fgzdCnB6Op63NQs6q7M%2F5OB4HH1gZBMI53apNUydrKTvFanFOhNU1ao79ZAkZY3JqRcm3glUzBN3ile7tqEhZU4bvteIACexVZHJJSmbmDaxfwGh4mrljed5sPW06zFA2ClRmyBbHUmHUN4%2FG%2BpAesTWXgRMd7ONw6GQsdDeQFFlGYDZJObvxd7SlmTpKilg9BGDqxIZ8qZ9eNjyhXwBTowPrCENN5WRcr0SwdQsSXuDGJkMCTNzsdQ3tBIq9Nb24IJEDAffp1NObXtK6rduKUQzCQ%2B5a9BjqkATI5E6YOomIMO3fvEc9kZNkWLPq3f6hwj%2Bg7FRr5Ej3UOcBL%2BFEWDsri2MxTn3KImtuqKM4eOlrtxCdizr8zs1QtE%2BCHHX30KemEO24qw3AMhMSJgXbHBzHh8zWTgBHuRbAeOUmMk9Mpm9jPa0qcI%2BmVel50ZBlz4RB70UphFiahOjUU6BzUAAtj1GFh7qHA4CuJF4mK6SQSZdIXkjbAdpw6QCrY&X-Amz-Signature=011179697e4618fe370808800d107fe29b7b028c8dfde12d9fdb1e3edca84562&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
