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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLTBSUR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC63xDxh95hzTtAuEyFkBIZE%2FgiWENj0Nv5MGl9uh3oSgIhAK2N8BL47dINUsr7HhY%2F2T7x6fmq1dSOTaaKxXq3DV0zKv8DCC8QABoMNjM3NDIzMTgzODA1IgxJcI8SA0aArWNhk58q3ANQJfX0raKPfjRuuQh3NqySf1luggtJCRyziO8qCL4Pm%2F6emAnnzdd4rjPJHe7XXSzdckq%2FsEI8gSD49fhO7ubsvbfId1aoqHkjKN83ahmX4UlqEVhZFuW9IDp%2Be3wiDeVSI4RHNxDXk0sxA1k5gYD0Z3bAe%2BAQ2UUCepqDtO%2B91k6EzHu3cq5mjk%2Fumr%2BjqA%2FR%2BbmF5RVhoa1DFQMfi0%2FBQUoW2R92ShTnbJfz3o9QOokvXiRjSxS%2BhBejzarfSJPOKguyn8lR%2FUeD0BPv9gp7V1b40HVKyw3q7q%2Bl2yqsss1PzNbtesSe3rP9dwGEWd%2BZMUh7%2FLt9tGPnI0FHeF%2BE%2FkfxO7YcTUqXLQyLEtUG94hG0rpSY2zNjaoDz9B%2FLZeoPzV0B0A9%2FMIeAoD3Wp7kC9ENIVcPoV1%2F6sK9qZ7rBr736XijGUJ2UVROATpP12XYGfwDaMpf%2FBXswzzyaLqOHx%2FV7b1nOYWEoFJwbMKSrwUKitLdDYDop%2Fxa4rqX53iYcfnSrZal11YPjVMxPNTmdg8AeL4gSGdR3UfdV9hX1gDBwZLJ4A7g%2FR6JUspdUiXH1Y4RuqTNGddfUCt%2FECBFvBy5WLFKLuJo7aEEDFxOA5gSbf3tFchXjXuYCjDy%2FfG9BjqkAel6v0CJoTBcEgA4gyQ%2BkEaHKIcEnMpIpAIjjfn11G7ZUQUanaXSZwjRtG%2BdUUqWNIhOvtb5ASDBwUSMiAb33SRGpMYra9V8YxSMCvz33qRq8toq%2B2LLfAKgmIdyfoBqOvJ%2BVaHFWbkjPSkeG4vckzybNzmfepegwVZaomYnJskDuedjYtfMQDCUXFNPCMqXpnopt2%2F9m2xpQB%2Bue3x9cIB488GF&X-Amz-Signature=162e1ed5290861a4f604933f6067cd6d7c79f197c092cdcc9edcd485d967a8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLTBSUR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC63xDxh95hzTtAuEyFkBIZE%2FgiWENj0Nv5MGl9uh3oSgIhAK2N8BL47dINUsr7HhY%2F2T7x6fmq1dSOTaaKxXq3DV0zKv8DCC8QABoMNjM3NDIzMTgzODA1IgxJcI8SA0aArWNhk58q3ANQJfX0raKPfjRuuQh3NqySf1luggtJCRyziO8qCL4Pm%2F6emAnnzdd4rjPJHe7XXSzdckq%2FsEI8gSD49fhO7ubsvbfId1aoqHkjKN83ahmX4UlqEVhZFuW9IDp%2Be3wiDeVSI4RHNxDXk0sxA1k5gYD0Z3bAe%2BAQ2UUCepqDtO%2B91k6EzHu3cq5mjk%2Fumr%2BjqA%2FR%2BbmF5RVhoa1DFQMfi0%2FBQUoW2R92ShTnbJfz3o9QOokvXiRjSxS%2BhBejzarfSJPOKguyn8lR%2FUeD0BPv9gp7V1b40HVKyw3q7q%2Bl2yqsss1PzNbtesSe3rP9dwGEWd%2BZMUh7%2FLt9tGPnI0FHeF%2BE%2FkfxO7YcTUqXLQyLEtUG94hG0rpSY2zNjaoDz9B%2FLZeoPzV0B0A9%2FMIeAoD3Wp7kC9ENIVcPoV1%2F6sK9qZ7rBr736XijGUJ2UVROATpP12XYGfwDaMpf%2FBXswzzyaLqOHx%2FV7b1nOYWEoFJwbMKSrwUKitLdDYDop%2Fxa4rqX53iYcfnSrZal11YPjVMxPNTmdg8AeL4gSGdR3UfdV9hX1gDBwZLJ4A7g%2FR6JUspdUiXH1Y4RuqTNGddfUCt%2FECBFvBy5WLFKLuJo7aEEDFxOA5gSbf3tFchXjXuYCjDy%2FfG9BjqkAel6v0CJoTBcEgA4gyQ%2BkEaHKIcEnMpIpAIjjfn11G7ZUQUanaXSZwjRtG%2BdUUqWNIhOvtb5ASDBwUSMiAb33SRGpMYra9V8YxSMCvz33qRq8toq%2B2LLfAKgmIdyfoBqOvJ%2BVaHFWbkjPSkeG4vckzybNzmfepegwVZaomYnJskDuedjYtfMQDCUXFNPCMqXpnopt2%2F9m2xpQB%2Bue3x9cIB488GF&X-Amz-Signature=53f6e336f981a11541dd0da48035a4cf91a0c8d5ce1e244781a2b7019b39a564&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
