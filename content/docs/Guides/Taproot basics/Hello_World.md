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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHQPGKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE7fP%2Fu%2B2OEXTsRTlrVLQwffPTl%2BqBqupR%2F6f5DY1Rr1AiAjE%2ByAWgu0e0Mbtjz3gsgjFmWsX3n%2F5dfk8tRJb8Q1uyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc4u7Vj97ZjWnrxVfKtwDtby93m1Wk5efsuYwV5rKv22fH6HPpjfRWjuqp9KIUsLm1WsiAFHvRaAcUovN4CjgaPIhN%2B1mFGwf2tjTpS99HkwUW3ApzSWtF1v7YhEFYofZEmze%2F5NLzLXd1JRx3Nu6DBC%2BN32wxCRRUjcjhSvpzMUmQ1OEPSfI4%2F4yay9nc1P5doHLYl7tRruTO2zubwom6oNouoHTqQA%2BcPZ472%2FGTYkohNAZfP%2BrAqeGE9uDOkraoaNp6%2Fuka%2BWLOvzCA3FZpEulJpmL10Jj81uc90p%2Bhk0Y1C7B4qMHFZqmPA1BaVeB%2BvtGGln%2FI8zga963JisNSqL%2FZtG0fwgnhYo0cVwWLnMCkeI7IgC5hvWWc%2Bp12Dd1Gah2vfameqI7rHsfA4QjK%2FG7tJmBUf4lg4CC3IyuIxIAGvTO6oZROhqQdVqn2uqPRviBgby0dFId1sJoGJtNY%2BjcB6if1%2FVHEIh%2F1gYR2Y0YNFlt0mm69k46xln8oYYaDbKiroPYZSYGcjYYyMg1P34AGRndA0vvL5nXQs5ZtBJpBaKEzILyeDiruCo45jjclWlorgTdZFKusGBk5Ses6DgycjIQ4G2236dW0IivhD0PA%2FrXve4zgkR4fD7XEGwUTqEJb%2BQj3EXhCtIw4pW4vwY6pgHrMoWXAXe%2BvMPX6vctnnRJ0af8WeKLxchpG987v1S2XEYQEXAzEL8zvglfrVPj12OMZbN%2Btqos1flU3LbmwxK2fUA8%2FTPn8noPSqMoQfktGXCGN6ioURl%2BwOysWY7n4HSbI%2F8hmVnL%2BmgVF7xtUNTPRCQTLwVcwUuGrbUEYgYo0JoCgvI%2BH4P3%2FkBkx%2Bq%2FCaJ1MLZ0ec7EeYL5FpDjMu1pqz3gan87&X-Amz-Signature=fe90eb8199827cadea4d3565cde3e7f060b17ced5b7edc1341e76cbe8d4eaccc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHQPGKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE7fP%2Fu%2B2OEXTsRTlrVLQwffPTl%2BqBqupR%2F6f5DY1Rr1AiAjE%2ByAWgu0e0Mbtjz3gsgjFmWsX3n%2F5dfk8tRJb8Q1uyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc4u7Vj97ZjWnrxVfKtwDtby93m1Wk5efsuYwV5rKv22fH6HPpjfRWjuqp9KIUsLm1WsiAFHvRaAcUovN4CjgaPIhN%2B1mFGwf2tjTpS99HkwUW3ApzSWtF1v7YhEFYofZEmze%2F5NLzLXd1JRx3Nu6DBC%2BN32wxCRRUjcjhSvpzMUmQ1OEPSfI4%2F4yay9nc1P5doHLYl7tRruTO2zubwom6oNouoHTqQA%2BcPZ472%2FGTYkohNAZfP%2BrAqeGE9uDOkraoaNp6%2Fuka%2BWLOvzCA3FZpEulJpmL10Jj81uc90p%2Bhk0Y1C7B4qMHFZqmPA1BaVeB%2BvtGGln%2FI8zga963JisNSqL%2FZtG0fwgnhYo0cVwWLnMCkeI7IgC5hvWWc%2Bp12Dd1Gah2vfameqI7rHsfA4QjK%2FG7tJmBUf4lg4CC3IyuIxIAGvTO6oZROhqQdVqn2uqPRviBgby0dFId1sJoGJtNY%2BjcB6if1%2FVHEIh%2F1gYR2Y0YNFlt0mm69k46xln8oYYaDbKiroPYZSYGcjYYyMg1P34AGRndA0vvL5nXQs5ZtBJpBaKEzILyeDiruCo45jjclWlorgTdZFKusGBk5Ses6DgycjIQ4G2236dW0IivhD0PA%2FrXve4zgkR4fD7XEGwUTqEJb%2BQj3EXhCtIw4pW4vwY6pgHrMoWXAXe%2BvMPX6vctnnRJ0af8WeKLxchpG987v1S2XEYQEXAzEL8zvglfrVPj12OMZbN%2Btqos1flU3LbmwxK2fUA8%2FTPn8noPSqMoQfktGXCGN6ioURl%2BwOysWY7n4HSbI%2F8hmVnL%2BmgVF7xtUNTPRCQTLwVcwUuGrbUEYgYo0JoCgvI%2BH4P3%2FkBkx%2Bq%2FCaJ1MLZ0ec7EeYL5FpDjMu1pqz3gan87&X-Amz-Signature=f2a3cddd232fae241afe5c83d1e934cf8608d6036014ca888d676a037183d681&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
