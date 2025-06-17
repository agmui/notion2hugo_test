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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZCLALVC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcCE7tLa%2Bsy%2FNBY%2FiYLfbR5KZM5oBiXTy5GTJuA2aBwwIhAM4dru4tN90q5vjZ%2FbQBu5kq73y7VYKgUyv6ccNeX%2BJxKv8DCHsQABoMNjM3NDIzMTgzODA1Igwh8slSWu3%2F2GyCoTkq3APthC%2Fn6XHbvUxvKdebTXW4Sn2ay0RkmbyMZCCiYpfDA0MKNMb8%2BYqog8UbSklbBR0iOp3wtH5bHUQDec5e97WHfRAyWHmIQygx3ETT0WL%2B4tncZAB3WjiwrPOEX2shn4IuaEpN4TQ9wOX5hasFqCNzWGp%2FTkcRyBzU3J7PO8gfuV4N4ZQZ68GhPpdnEtNkdW6D8cz7dWUQCxCw1I41LVu5rorvIWT0y1g%2BM50dW4tlL%2B7UatWyAb1d8QO7p7Uk578%2FcvSoDeU8P8ogcCD8OnyEfxFRW5oSmRTEmQQSc0VBMl9A1dPaPReH2giQFzH7gpv%2BD%2Bx%2Bx7xrVmFLPFOiPS%2F4FBTySr3IMttarY%2FmxPQXLlZbRn3GttKMoub%2BxuN6B5O8smTsDq0vRDHnlLgXZJ%2B%2FIL5tvZ8KT2ohuknqPKSft84fBhqsYJhxFLoJ9YqWNow423DT4YL%2BZcK%2FGYm%2FGsHDiIiI6j6olT5%2BsAJ3uZ7paeE0z2fm8bBOX8ZcvE3vlcq%2FOU5PlyYzIhlC%2FbN2n9AZglSfwtdqjZpNmwiZQHRgj4rqV6RY2KeZfLYdqzDuoE0yCTTP97uJf22ukYiUIVQNsne%2FMlyUbS3q4NAOmNvL4pCjbZKwCZ8YPR%2BUcDDn38bCBjqkAf4xDGdYqW6lXEA3CvLuzh5%2BiJZ5D%2FyP1Z6q325%2FjB%2B6CM4hlh3ZUb0Ile9DiqH%2BbihK19sQBt%2FqxICrNjQxkSXzDWP9GoihjxXFekwoLO7S5nLGvJg0Mr0d3jKsSN25u67bHog3aF4ANeIA2QdhYvcS%2Fqqy3Mt7WepNGKIS4ur0ovonexr1%2BXQM2BUs7x1DkFwIQoWkBN2s21tvVOSoIEX%2FWYwL&X-Amz-Signature=25512c11149a5971ad365545276d4399c9c6a174dd03bbd12f0c92443ef816e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZCLALVC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcCE7tLa%2Bsy%2FNBY%2FiYLfbR5KZM5oBiXTy5GTJuA2aBwwIhAM4dru4tN90q5vjZ%2FbQBu5kq73y7VYKgUyv6ccNeX%2BJxKv8DCHsQABoMNjM3NDIzMTgzODA1Igwh8slSWu3%2F2GyCoTkq3APthC%2Fn6XHbvUxvKdebTXW4Sn2ay0RkmbyMZCCiYpfDA0MKNMb8%2BYqog8UbSklbBR0iOp3wtH5bHUQDec5e97WHfRAyWHmIQygx3ETT0WL%2B4tncZAB3WjiwrPOEX2shn4IuaEpN4TQ9wOX5hasFqCNzWGp%2FTkcRyBzU3J7PO8gfuV4N4ZQZ68GhPpdnEtNkdW6D8cz7dWUQCxCw1I41LVu5rorvIWT0y1g%2BM50dW4tlL%2B7UatWyAb1d8QO7p7Uk578%2FcvSoDeU8P8ogcCD8OnyEfxFRW5oSmRTEmQQSc0VBMl9A1dPaPReH2giQFzH7gpv%2BD%2Bx%2Bx7xrVmFLPFOiPS%2F4FBTySr3IMttarY%2FmxPQXLlZbRn3GttKMoub%2BxuN6B5O8smTsDq0vRDHnlLgXZJ%2B%2FIL5tvZ8KT2ohuknqPKSft84fBhqsYJhxFLoJ9YqWNow423DT4YL%2BZcK%2FGYm%2FGsHDiIiI6j6olT5%2BsAJ3uZ7paeE0z2fm8bBOX8ZcvE3vlcq%2FOU5PlyYzIhlC%2FbN2n9AZglSfwtdqjZpNmwiZQHRgj4rqV6RY2KeZfLYdqzDuoE0yCTTP97uJf22ukYiUIVQNsne%2FMlyUbS3q4NAOmNvL4pCjbZKwCZ8YPR%2BUcDDn38bCBjqkAf4xDGdYqW6lXEA3CvLuzh5%2BiJZ5D%2FyP1Z6q325%2FjB%2B6CM4hlh3ZUb0Ile9DiqH%2BbihK19sQBt%2FqxICrNjQxkSXzDWP9GoihjxXFekwoLO7S5nLGvJg0Mr0d3jKsSN25u67bHog3aF4ANeIA2QdhYvcS%2Fqqy3Mt7WepNGKIS4ur0ovonexr1%2BXQM2BUs7x1DkFwIQoWkBN2s21tvVOSoIEX%2FWYwL&X-Amz-Signature=f4a7b35c6a1ce1ef6aabb9fb9a12e9b4fbd154e71e1f15788e419afac1e229c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
