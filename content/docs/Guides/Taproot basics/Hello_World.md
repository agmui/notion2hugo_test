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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HVFK27%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCkYCtcF2HLv0JSEUoaHBfjWcyAwvZ0tWjDK7P%2B8Zz9gAIhAKpObVHwxPZ7ZxKwZMZHPZuQO2zw7%2BupSaB9xrV4jDxkKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrYthX2YYURSMlLykq3ANsMris2UH0QSrMBPgSrtl09ZgZkcTpF0WqYLfArvBYZbhQUVHhFhIbIK26p%2B0LCjVyg17glaz5pmcD3o5JnUuBlnrVZANmbLh1J2JFSV5ApOXYcMoPZPHxHaFV9PJlO%2BopKBxX1N8unsBUFtw9gzWDQq%2FK6XjBPg8jZHctcnzCThYRbT5ql%2FFpJs6HpX3xl4TyegA%2BZNfbm8gyyQLkT%2FLwoiB%2B8f2EzCnd02yg9x0GGkGDhY4UEV8zREwEWRZCfn57RnTYBn0FCkQmGM%2FaXStLVL6He3PPPtJPeESTyUjzaGPMLDe8h7zrqRfzyZzm6daAkqcXbk3Mc%2FmBqdJ4nM%2FzFUafVrii6mkNfKMivqRKpDwobaRfvgZ0an1rlpwxZWAK53xqgtZS2QpVDw4neRoiHcLpLz7Cc702MZA6c3U8Rhqdusd6LX2r1jT30CmaZ5uxF%2BSEgnVWxUhoYq9%2BMcutNYgNfXyKStpuhnlQe2r2Yo%2FCvuIhLonYm91dzD4KSPBoRKJOlkcc9t3AmEpiJbXxET81o29JXyzJmAtr%2FjRE95ARFUqpGb36o2dP2v8eBTIUuPxykfkI0b9gq7DIHqENEYZSGef9u7HC0qx2621i03S3xml2R1WQPCGjSzCrpK2%2FBjqkAdHZy%2FTkiep%2BWK%2BiIPy0b3XkJamom7hykYBrE1quGy6dIH84E4w7VkxlHZs1yyGhZ1tcs0YOFoxp0Q1fmpACDgvN69%2Fpx5xcjIHI2E6cHKFV57UVQSnfLpZQPVT2VSmM%2F8WzkMcXuTt%2F9aPVlqn%2F37cyFly7Q0rVNPA4P8a2qpYNeRotC7MMDMbGqdN6%2BG%2FOOg%2BC6OuxNL6YER1UiT%2Bv%2FGFdzXWz&X-Amz-Signature=21569088cc23fedcc0ae9634d28b6b1671fb127a523b39c61a7b993be3f63f13&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HVFK27%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCkYCtcF2HLv0JSEUoaHBfjWcyAwvZ0tWjDK7P%2B8Zz9gAIhAKpObVHwxPZ7ZxKwZMZHPZuQO2zw7%2BupSaB9xrV4jDxkKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrYthX2YYURSMlLykq3ANsMris2UH0QSrMBPgSrtl09ZgZkcTpF0WqYLfArvBYZbhQUVHhFhIbIK26p%2B0LCjVyg17glaz5pmcD3o5JnUuBlnrVZANmbLh1J2JFSV5ApOXYcMoPZPHxHaFV9PJlO%2BopKBxX1N8unsBUFtw9gzWDQq%2FK6XjBPg8jZHctcnzCThYRbT5ql%2FFpJs6HpX3xl4TyegA%2BZNfbm8gyyQLkT%2FLwoiB%2B8f2EzCnd02yg9x0GGkGDhY4UEV8zREwEWRZCfn57RnTYBn0FCkQmGM%2FaXStLVL6He3PPPtJPeESTyUjzaGPMLDe8h7zrqRfzyZzm6daAkqcXbk3Mc%2FmBqdJ4nM%2FzFUafVrii6mkNfKMivqRKpDwobaRfvgZ0an1rlpwxZWAK53xqgtZS2QpVDw4neRoiHcLpLz7Cc702MZA6c3U8Rhqdusd6LX2r1jT30CmaZ5uxF%2BSEgnVWxUhoYq9%2BMcutNYgNfXyKStpuhnlQe2r2Yo%2FCvuIhLonYm91dzD4KSPBoRKJOlkcc9t3AmEpiJbXxET81o29JXyzJmAtr%2FjRE95ARFUqpGb36o2dP2v8eBTIUuPxykfkI0b9gq7DIHqENEYZSGef9u7HC0qx2621i03S3xml2R1WQPCGjSzCrpK2%2FBjqkAdHZy%2FTkiep%2BWK%2BiIPy0b3XkJamom7hykYBrE1quGy6dIH84E4w7VkxlHZs1yyGhZ1tcs0YOFoxp0Q1fmpACDgvN69%2Fpx5xcjIHI2E6cHKFV57UVQSnfLpZQPVT2VSmM%2F8WzkMcXuTt%2F9aPVlqn%2F37cyFly7Q0rVNPA4P8a2qpYNeRotC7MMDMbGqdN6%2BG%2FOOg%2BC6OuxNL6YER1UiT%2Bv%2FGFdzXWz&X-Amz-Signature=3fcba4d5f74d5ead3447312eba5ed4d8df620dae502e87d046ddc8b15e4032cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
