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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRO6ZYCA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCi%2FbYvuIoXX2NkjLWsUNuxpFitpBdE1N0DBP%2FJlBXWpwIhALXoFX7hKkERK%2FaZcX%2Bol77g6DPsvUkHWkvB8xKqZYRPKv8DCGkQABoMNjM3NDIzMTgzODA1IgzvYM5AgRKKhmv152Uq3AMFlOTSgt%2FH8shOz0H%2FVQdA4tLbwDl1aaEIuddSlUoI9S0Qs4f1%2BecP43SVCL%2BoPVXmxrVaTHEbWvX4lvRnl%2BEnJrzMVJJm%2BNbG9aa6zgXT9pqMPC1e2HwM7g6H9QnqYLOeA%2BzpmM8FPUKUaRemTQvBFpN7RSH0UuIRNgkTyi8BGD%2BfjevVY2NgthtLnKeUjMMCWRBv9R2i2ZOjwdXMwIOkv6rrHRsh0MJcZK6JUW5ej4B6NZezb7bkEFdFz4Q3ggm9ZXC%2FwqnGSifL%2FQ80d5V2chCqreI7L5gtzOp3LHY5miFqSxywhTqMHjwn4sKFL9pQQOkWPCOYJBxnHACAYN4pupkyolq%2F8IKUIT0jfHiLeRnAcp1i50JDJ1eW6IN4uyLHk3ZJPR7VsBofsY%2Bc5O7iGTpVNx5Pgmr9BeHnFFg%2B9mkyiKN7wStRxu2peuDRhtdPn%2BM39p5WGkTT%2B%2FwHrbUBeFJZuxScG4LMy9eaZHPNWVnRhaBNzcC7civHKu4%2BWhhV11IHDNznpjoyvOgoMEPayYiDWJ8YN7EX%2FIgQ8OPn8uOv6ZZY2zZfvZ6udkmlIRbkxdLR0zBvXO%2BpKWWwk0HroUYX48WeJEftBkEGG%2FjawF16j8gNIfqzM6ejLTCHm5W9BjqkAdQZv7kOu3Bw9MCNGQ1EOzDjgdYUINLd6E0wX5a345tSFAtXjaEdyONXflQ4Z%2BvGBscheuyQio%2Boro8pzdcCHLLCYKywCq6SOsfhHQ%2FLS7USKqJ1d8Cp0k0XpRp6%2FB5wLuyCQzM6xoGgbIi6R7f%2F8YVSBQP7Efm2Q4aISQPObUcUYPrlToIq6o9zzHOFzZgxh7yPL7STbh3kr55okUWhqFO4q3Zz&X-Amz-Signature=2859edcf5a1d6671d19cee0c7b6f729e1a7508714106191b444ef57a662031ec&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRO6ZYCA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCi%2FbYvuIoXX2NkjLWsUNuxpFitpBdE1N0DBP%2FJlBXWpwIhALXoFX7hKkERK%2FaZcX%2Bol77g6DPsvUkHWkvB8xKqZYRPKv8DCGkQABoMNjM3NDIzMTgzODA1IgzvYM5AgRKKhmv152Uq3AMFlOTSgt%2FH8shOz0H%2FVQdA4tLbwDl1aaEIuddSlUoI9S0Qs4f1%2BecP43SVCL%2BoPVXmxrVaTHEbWvX4lvRnl%2BEnJrzMVJJm%2BNbG9aa6zgXT9pqMPC1e2HwM7g6H9QnqYLOeA%2BzpmM8FPUKUaRemTQvBFpN7RSH0UuIRNgkTyi8BGD%2BfjevVY2NgthtLnKeUjMMCWRBv9R2i2ZOjwdXMwIOkv6rrHRsh0MJcZK6JUW5ej4B6NZezb7bkEFdFz4Q3ggm9ZXC%2FwqnGSifL%2FQ80d5V2chCqreI7L5gtzOp3LHY5miFqSxywhTqMHjwn4sKFL9pQQOkWPCOYJBxnHACAYN4pupkyolq%2F8IKUIT0jfHiLeRnAcp1i50JDJ1eW6IN4uyLHk3ZJPR7VsBofsY%2Bc5O7iGTpVNx5Pgmr9BeHnFFg%2B9mkyiKN7wStRxu2peuDRhtdPn%2BM39p5WGkTT%2B%2FwHrbUBeFJZuxScG4LMy9eaZHPNWVnRhaBNzcC7civHKu4%2BWhhV11IHDNznpjoyvOgoMEPayYiDWJ8YN7EX%2FIgQ8OPn8uOv6ZZY2zZfvZ6udkmlIRbkxdLR0zBvXO%2BpKWWwk0HroUYX48WeJEftBkEGG%2FjawF16j8gNIfqzM6ejLTCHm5W9BjqkAdQZv7kOu3Bw9MCNGQ1EOzDjgdYUINLd6E0wX5a345tSFAtXjaEdyONXflQ4Z%2BvGBscheuyQio%2Boro8pzdcCHLLCYKywCq6SOsfhHQ%2FLS7USKqJ1d8Cp0k0XpRp6%2FB5wLuyCQzM6xoGgbIi6R7f%2F8YVSBQP7Efm2Q4aISQPObUcUYPrlToIq6o9zzHOFzZgxh7yPL7STbh3kr55okUWhqFO4q3Zz&X-Amz-Signature=2828af303b489f7451e51cc9321f1905027aed3bd191b64a98bf253073378705&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
