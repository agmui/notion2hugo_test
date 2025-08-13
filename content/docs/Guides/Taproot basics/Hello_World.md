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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOTF744%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7u8sEr4izbP00yRLcNG10R8QVfzHfyoaYJ06mgdPWgIga7DbL91K7nj0VKqdLB5fdbTe9tq%2BwT2RevIVhZuQkEEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLVBnt2vJ5M9%2B2K2mSrcA4OdgC%2FCZ1HGlSvj4Z8QM5f5uRxZE9K0cJZSbSSE%2BSwbMNOhWULMHlCoXgkAQw10vpC0LSdTI5Q7fFPT2GugJNUYiBS2KfvpBxDRMxyBdf1Uk42h7sp95MptPOxtUHmrammkAMWqurzJZTOeifTyuqy4%2FG%2F4R6XYvPFDMszV8wwku769gzOR%2B10VY4d48COgOokj5SVhOmgZrO8OJzYO9ntx5IzCof5LrlbAY2BedbRayMo%2FGYfLIIdocpwW1Efjlr2XrVcqM3tEXIER%2BIppOpXoQ3F7fB0RKxo1qlHZofx%2BQNQxpmit5rk%2BuSYzl8Bvtcdoo4lGq86cCIpEHgvedDf85MQEsiWU5p2d9oEUD0eZwJlQ%2BNKZtrw8CIkgQjNZz7sLEO9AeR4jxCJQzNKa%2BpOUmE2%2F0D4LGkK7mbRq%2Bdexib3SJCpE%2Fo9e1mIPgExQ4NqNhtJEu0Ar6dKqXv0uTOFHLDVfpNDvfuf02LdWSfMjlzPCZamz%2BE7FEyesbQBvjHooqlb9GvfZX2NpANWnAAQFqAUUIIZz%2FX8yhS%2FgdFWmE0qho33lJCLTizd7n5m96TRkgCcoErS97H31cKt1sJN4Q%2BQ30zbXwgNq7yVnrC%2FlTQ7%2BoEpAm%2F%2BlL2EwMJL88sQGOqUByii2ClkCxYLKac9qU1Vm7TaCc1nEKLTrCl5r8XSqFLiQCtZ%2B6suWM6su0gHF%2FLAgs1eMD7%2F1nmNRaouc81SKRvn0lpTjGbp7soF8CNip%2Fd83q9iIWYn1SmuPwuVFvf83smX6sQGu%2Bg7khHndkhMZb7myb6tnF30Gd%2BUo6FBrQaGRt3VRfKkfSNY3BpNOAWRhKpo2jGoqjbvhEKZ6c8jpEgcuu%2Fwd&X-Amz-Signature=d4670ad74b28f09e1042e6f68d5f2b9b80e8e17df24e900e404d00e2978273cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOTF744%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7u8sEr4izbP00yRLcNG10R8QVfzHfyoaYJ06mgdPWgIga7DbL91K7nj0VKqdLB5fdbTe9tq%2BwT2RevIVhZuQkEEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLVBnt2vJ5M9%2B2K2mSrcA4OdgC%2FCZ1HGlSvj4Z8QM5f5uRxZE9K0cJZSbSSE%2BSwbMNOhWULMHlCoXgkAQw10vpC0LSdTI5Q7fFPT2GugJNUYiBS2KfvpBxDRMxyBdf1Uk42h7sp95MptPOxtUHmrammkAMWqurzJZTOeifTyuqy4%2FG%2F4R6XYvPFDMszV8wwku769gzOR%2B10VY4d48COgOokj5SVhOmgZrO8OJzYO9ntx5IzCof5LrlbAY2BedbRayMo%2FGYfLIIdocpwW1Efjlr2XrVcqM3tEXIER%2BIppOpXoQ3F7fB0RKxo1qlHZofx%2BQNQxpmit5rk%2BuSYzl8Bvtcdoo4lGq86cCIpEHgvedDf85MQEsiWU5p2d9oEUD0eZwJlQ%2BNKZtrw8CIkgQjNZz7sLEO9AeR4jxCJQzNKa%2BpOUmE2%2F0D4LGkK7mbRq%2Bdexib3SJCpE%2Fo9e1mIPgExQ4NqNhtJEu0Ar6dKqXv0uTOFHLDVfpNDvfuf02LdWSfMjlzPCZamz%2BE7FEyesbQBvjHooqlb9GvfZX2NpANWnAAQFqAUUIIZz%2FX8yhS%2FgdFWmE0qho33lJCLTizd7n5m96TRkgCcoErS97H31cKt1sJN4Q%2BQ30zbXwgNq7yVnrC%2FlTQ7%2BoEpAm%2F%2BlL2EwMJL88sQGOqUByii2ClkCxYLKac9qU1Vm7TaCc1nEKLTrCl5r8XSqFLiQCtZ%2B6suWM6su0gHF%2FLAgs1eMD7%2F1nmNRaouc81SKRvn0lpTjGbp7soF8CNip%2Fd83q9iIWYn1SmuPwuVFvf83smX6sQGu%2Bg7khHndkhMZb7myb6tnF30Gd%2BUo6FBrQaGRt3VRfKkfSNY3BpNOAWRhKpo2jGoqjbvhEKZ6c8jpEgcuu%2Fwd&X-Amz-Signature=a8b31677481788e24fd47ec4edab68ff6e19d81d474e601ca7f77e7fec460a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
