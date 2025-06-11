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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQN7BYX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICH78977TP8g%2B%2FFmEnbJqtLNUvdQ1PzV40X5SxxWNIjMAiEArX%2FOER4aBG6mWug%2FPVubf1MCd1AlaTPRPKNmctI2kwkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMotE0ZLhZXuOWIj2yrcA6a5B%2B3PxQ3ajZchI4xO81Ep%2F3s31deGfqU%2BngXuc9bTqDsaYWdQ8xcIXZSxvjjGqxtBKs68EnH9qW1f28L1wjvaU3TU5eVxrc6AdvgKXnZOwSRWpNF3ZPXQTWB14nwFGX1S%2BRqpbR8p0gFh8S7oE2zS2AV6SIoAB2AffCRMbGTKZfs4Qh0DIl6MXJT6jfdVDGbF2M9rzqT%2Fpc2U7JR5St67%2Bv%2Fp%2FNXH9qFSbJPczQpLJPF2AL6TQXKWGZAO%2F7BEGsoDP%2BPaJXGjSySzMtU5A8wAS4xs7rX0vHbXd6%2BsksjdWAY12VsAXaOXjh0T3KqxzeDFfs5m3MfK9xHqLxj7by4YTw8RKUuVjfsSLuirCVHNgfrzB6yKRlU67IJolyAxjKpfx8JJYyBOw1%2F4BJ9tuFzDF1WLnKVTBSDyeyD0xbfjKCfbUm3sE8sO14gDkWyf3nVpqp50ghpknzuSN45X7v6hE4zZTkEMNlZ6B9M664E3RXIMKmA1W2NT2%2FJnu0TM%2B2ohPIQW3HkDVPhdo07rJQzLH3nrN85G0tuB%2BSQba8Wat4a7IBFQN0cg%2Fr5FJKSri5nODFjpmkRX0CErgqDgLD4yK6w5DYariAJPM1YZOdC6D1TMQWSG3ddVCYX%2BMISap8IGOqUBs%2BT8DsvG2pXnj5WFYxgND%2BPVKFypwHTJYW%2FHh1wykUnVjUqkeXZ%2FMv2hKubk4Lhs2%2F%2Ffm7Z2PI8rHS2uHQcQcAS%2BO9LXeNKo6x3ScXcRrZYmAtVNnEelJSiYEilaYEEyUUgEmoVbhuURGJ5dmGjWO8aQybX1YqWyeAlXeE6si9nImxkiXvxOOSIwt3hwbGEe3U6FSwDOciZTzksHO0H750VOrdkd&X-Amz-Signature=532764da09ec76d9b0bd1b0b2e27d973dee9703595e9cc01918e7075bc8c7241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQN7BYX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICH78977TP8g%2B%2FFmEnbJqtLNUvdQ1PzV40X5SxxWNIjMAiEArX%2FOER4aBG6mWug%2FPVubf1MCd1AlaTPRPKNmctI2kwkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMotE0ZLhZXuOWIj2yrcA6a5B%2B3PxQ3ajZchI4xO81Ep%2F3s31deGfqU%2BngXuc9bTqDsaYWdQ8xcIXZSxvjjGqxtBKs68EnH9qW1f28L1wjvaU3TU5eVxrc6AdvgKXnZOwSRWpNF3ZPXQTWB14nwFGX1S%2BRqpbR8p0gFh8S7oE2zS2AV6SIoAB2AffCRMbGTKZfs4Qh0DIl6MXJT6jfdVDGbF2M9rzqT%2Fpc2U7JR5St67%2Bv%2Fp%2FNXH9qFSbJPczQpLJPF2AL6TQXKWGZAO%2F7BEGsoDP%2BPaJXGjSySzMtU5A8wAS4xs7rX0vHbXd6%2BsksjdWAY12VsAXaOXjh0T3KqxzeDFfs5m3MfK9xHqLxj7by4YTw8RKUuVjfsSLuirCVHNgfrzB6yKRlU67IJolyAxjKpfx8JJYyBOw1%2F4BJ9tuFzDF1WLnKVTBSDyeyD0xbfjKCfbUm3sE8sO14gDkWyf3nVpqp50ghpknzuSN45X7v6hE4zZTkEMNlZ6B9M664E3RXIMKmA1W2NT2%2FJnu0TM%2B2ohPIQW3HkDVPhdo07rJQzLH3nrN85G0tuB%2BSQba8Wat4a7IBFQN0cg%2Fr5FJKSri5nODFjpmkRX0CErgqDgLD4yK6w5DYariAJPM1YZOdC6D1TMQWSG3ddVCYX%2BMISap8IGOqUBs%2BT8DsvG2pXnj5WFYxgND%2BPVKFypwHTJYW%2FHh1wykUnVjUqkeXZ%2FMv2hKubk4Lhs2%2F%2Ffm7Z2PI8rHS2uHQcQcAS%2BO9LXeNKo6x3ScXcRrZYmAtVNnEelJSiYEilaYEEyUUgEmoVbhuURGJ5dmGjWO8aQybX1YqWyeAlXeE6si9nImxkiXvxOOSIwt3hwbGEe3U6FSwDOciZTzksHO0H750VOrdkd&X-Amz-Signature=a04a8f204bddff478a17953d9c8762495ac3edbde0eb59d7245217882e8b3fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
