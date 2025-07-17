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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YPOQV63%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFrB8JLLeZzj84CawJBDGySbNqbRO4sNeGfDEUpjDZsmAiBAZ4pyYpS55qiIqm2gIZ8GhNiCfnmiIeEva32R0mThNir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMk9LegDjEb6dyGa%2FFKtwD4VJgOcWxGocn06hxXpLhG3w%2B3Ea6q6gPOWFdCTWbFWOc0Q%2F6ry1O19CpqCJa%2Bs77NubsFFH2SxQ4HhOBD9JLoO1mXK5oYZwUS9zp10OSIrMX0MEzUvoEMrog%2FKPyTq4Cw4FzSN2LnJOaYbyvJX5%2Fng8%2B1%2F9g4F8n68afbZrnbeTJHnby%2Bqy3kcBfj5ytLNxkqAmfshDbOiYorVIUVdGExuRGB7zNyI1PrmbK95GNdc5ZdZLRxxJpUk3OU%2Bzk5SR%2BZoLMTEV9TNdFAbO9LHUpfa4uLwx1yhc26PRc2obekn2JZxSWa5tv5jMDWRn9%2FVU3qwg5oWZB85c74XEQBWtXQmN%2BJhzZBiECYrAW7TJlS%2Bphj3A9a3G2Cd2rmmGrkfOGgzxHMOmBlBV6%2FwZ8nBmKGw%2FvqP7gl7k3C02ZYY3UTfzFNe8%2F53W9PfpHJSkRqxymp1U3y4%2BfDuBM%2FfyJYpjLCJYQN8fnPJaG5vGcgQhZOg%2FLr9JgpHBh%2FKXgC9d9AIMN1Fonpa5yzenV4YUjatMe3LA0zfiqyqd7sQxBgKiOoSo1nkSQcO77JduD7IqOiVtsKtHrn6Vu%2BwyTmkdOjFxetD5REwBz0UDCfC2XhFgX8xwllUL7ji%2B0IzdVtlEw5ZHjwwY6pgEpxGqErhTnvdz0qoBu2G%2By8qQs4tOWWa9MqgcqpjQHrS1f3WppjZHl66aDAVIBFnOLnJ4co8kU09BNm%2F4gTLZBZrRWGUNQyHH%2BD%2BCAebKx6GQRrt%2Ba5BPDXjNN%2FOZfVD0RcsdoSmcG3MmiSMFxdPzRaZLfIRurkI2BbNRSfCGUxDqBZTpi8GngReDGZG5JmStcWpsa4%2FvibhgOqFQXKCa0YEFvvVY%2F&X-Amz-Signature=18f822691a963cc381b2bfc666c784617c5b5af98653a66bb6c414a7a0832ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YPOQV63%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFrB8JLLeZzj84CawJBDGySbNqbRO4sNeGfDEUpjDZsmAiBAZ4pyYpS55qiIqm2gIZ8GhNiCfnmiIeEva32R0mThNir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMk9LegDjEb6dyGa%2FFKtwD4VJgOcWxGocn06hxXpLhG3w%2B3Ea6q6gPOWFdCTWbFWOc0Q%2F6ry1O19CpqCJa%2Bs77NubsFFH2SxQ4HhOBD9JLoO1mXK5oYZwUS9zp10OSIrMX0MEzUvoEMrog%2FKPyTq4Cw4FzSN2LnJOaYbyvJX5%2Fng8%2B1%2F9g4F8n68afbZrnbeTJHnby%2Bqy3kcBfj5ytLNxkqAmfshDbOiYorVIUVdGExuRGB7zNyI1PrmbK95GNdc5ZdZLRxxJpUk3OU%2Bzk5SR%2BZoLMTEV9TNdFAbO9LHUpfa4uLwx1yhc26PRc2obekn2JZxSWa5tv5jMDWRn9%2FVU3qwg5oWZB85c74XEQBWtXQmN%2BJhzZBiECYrAW7TJlS%2Bphj3A9a3G2Cd2rmmGrkfOGgzxHMOmBlBV6%2FwZ8nBmKGw%2FvqP7gl7k3C02ZYY3UTfzFNe8%2F53W9PfpHJSkRqxymp1U3y4%2BfDuBM%2FfyJYpjLCJYQN8fnPJaG5vGcgQhZOg%2FLr9JgpHBh%2FKXgC9d9AIMN1Fonpa5yzenV4YUjatMe3LA0zfiqyqd7sQxBgKiOoSo1nkSQcO77JduD7IqOiVtsKtHrn6Vu%2BwyTmkdOjFxetD5REwBz0UDCfC2XhFgX8xwllUL7ji%2B0IzdVtlEw5ZHjwwY6pgEpxGqErhTnvdz0qoBu2G%2By8qQs4tOWWa9MqgcqpjQHrS1f3WppjZHl66aDAVIBFnOLnJ4co8kU09BNm%2F4gTLZBZrRWGUNQyHH%2BD%2BCAebKx6GQRrt%2Ba5BPDXjNN%2FOZfVD0RcsdoSmcG3MmiSMFxdPzRaZLfIRurkI2BbNRSfCGUxDqBZTpi8GngReDGZG5JmStcWpsa4%2FvibhgOqFQXKCa0YEFvvVY%2F&X-Amz-Signature=9ac3f2189d732a1c51708f570853f6137a001beebbdeff909b25992af1f9d29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
