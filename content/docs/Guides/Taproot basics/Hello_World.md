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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBEX6K7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQC%2BVJtEqyXGsCtaT3So1if%2FqCvTWTrsDm%2FeGxhSOsAG4gIhAKpuyZjikC%2FrvGHa%2FoS1aWbKtBamtwVMpFrnTmNlH5i9KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4ciJSNkn%2FH%2Fn5rUq3AO7n%2FqOREYIxSidhKVgqoBAi18V8BvO%2Fb57maIMQCO8zCbJ5c%2FukHX0PztxcVyKClZGBNbZ9cNjNUwV%2FK3Cw7Zc5gvHzYD32gc%2FP88IDAbA1yOx84pJXvQyHPtftEKZ7g0cEZN8YI6wIacGLn5al2D%2BL5SZusVlFIj6Zg4A%2BZU33LVBlyg7VndveXqb9G3B9RrqYaZn22TlFbA01xkagXEgd14x%2BqFNQeu7Tl2EeWwG8ACdAJV8%2F4O3nIOfTtkHN2axHD2%2FyuDYczdPSxECUQj5Lfr6w5s5%2F3d8LLVIg45SaN%2BqMmGd%2BlVE7Wal7%2FvtdLp3fkpvD2NhBe8%2FUReZT%2FzNWN%2FNun2H%2Bqck4RsqeMUaVHD82H3xTdl5qFqUfbraWocuh%2FVST2mlNMrNULrOFxUVUG96E%2FAzNbvbvRQoiY2XNZdQkZOsRSgMZwyTJgbai%2BhbFi1vmwdowioy%2F84qXjupgUd4zIEZ3XKhF84RC7Z2nCg7zZrUj%2BfkkHSztN3I49tGVGxxmqWXljh6jsrR0ilb1mQ%2F3Pw9YmfWZ3vwno5z5Qk1QPvgJrag0Ateaiz6Ib2Sc6d%2FYU6KC3x8LUuCuiTNq8tFCUyrKl2RtTh8BhNM2BHCUlguDkpodvTQ6DDAkuK%2FBjqkAfGQ91ZRwvoaIRLfAsW9ZtBIZGtiWzmJx09H5Ik02tS%2BcKyAFd%2BivpwaPmBLZpqGws3E2vkYzcyfSxBy7nk08ycqA2L7kqmRIeh2oOUgP6ify1n%2BSS5hOU7cYV8TstsRvRF9tkPS57jAo7LMftAm5iyyxebYmX91yXkiVuu9qWyjvXf5R3A1%2B0xx7l40ZCNJDHg2nSwskxce%2FAoyPLKR0g6nUTQt&X-Amz-Signature=efd48ccf45c8ea16849bcec3803dfb4b11a0d97ff33da304ca718f6a6b547aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBEX6K7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQC%2BVJtEqyXGsCtaT3So1if%2FqCvTWTrsDm%2FeGxhSOsAG4gIhAKpuyZjikC%2FrvGHa%2FoS1aWbKtBamtwVMpFrnTmNlH5i9KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4ciJSNkn%2FH%2Fn5rUq3AO7n%2FqOREYIxSidhKVgqoBAi18V8BvO%2Fb57maIMQCO8zCbJ5c%2FukHX0PztxcVyKClZGBNbZ9cNjNUwV%2FK3Cw7Zc5gvHzYD32gc%2FP88IDAbA1yOx84pJXvQyHPtftEKZ7g0cEZN8YI6wIacGLn5al2D%2BL5SZusVlFIj6Zg4A%2BZU33LVBlyg7VndveXqb9G3B9RrqYaZn22TlFbA01xkagXEgd14x%2BqFNQeu7Tl2EeWwG8ACdAJV8%2F4O3nIOfTtkHN2axHD2%2FyuDYczdPSxECUQj5Lfr6w5s5%2F3d8LLVIg45SaN%2BqMmGd%2BlVE7Wal7%2FvtdLp3fkpvD2NhBe8%2FUReZT%2FzNWN%2FNun2H%2Bqck4RsqeMUaVHD82H3xTdl5qFqUfbraWocuh%2FVST2mlNMrNULrOFxUVUG96E%2FAzNbvbvRQoiY2XNZdQkZOsRSgMZwyTJgbai%2BhbFi1vmwdowioy%2F84qXjupgUd4zIEZ3XKhF84RC7Z2nCg7zZrUj%2BfkkHSztN3I49tGVGxxmqWXljh6jsrR0ilb1mQ%2F3Pw9YmfWZ3vwno5z5Qk1QPvgJrag0Ateaiz6Ib2Sc6d%2FYU6KC3x8LUuCuiTNq8tFCUyrKl2RtTh8BhNM2BHCUlguDkpodvTQ6DDAkuK%2FBjqkAfGQ91ZRwvoaIRLfAsW9ZtBIZGtiWzmJx09H5Ik02tS%2BcKyAFd%2BivpwaPmBLZpqGws3E2vkYzcyfSxBy7nk08ycqA2L7kqmRIeh2oOUgP6ify1n%2BSS5hOU7cYV8TstsRvRF9tkPS57jAo7LMftAm5iyyxebYmX91yXkiVuu9qWyjvXf5R3A1%2B0xx7l40ZCNJDHg2nSwskxce%2FAoyPLKR0g6nUTQt&X-Amz-Signature=ed96a7c62169c739325e6613db181607782b7ab7d269f5f58b73f8652fe3601a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
