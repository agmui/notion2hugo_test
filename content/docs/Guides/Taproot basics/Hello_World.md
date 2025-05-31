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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU62H4ID%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWIdsKxMyAhZZMsbthp6huAIWaDalL5Q22HcgjdZZ1IAIgFrXg3fPBgn%2FTZqFYWhKeBxfpMY55cYJW6Tj9a%2BTfZ%2BkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFMJ8z1%2FyButrWbuircAyVKXz1PFUxCVcAKb%2BzxaIsgFkQQAn7kaXJzQIilZI1MjnGuE0MgkMCNA9jLr%2F3qEGW%2FgYSCzDzOpN1SrxsWCcM7BTcHYgRZGAZNcAW2%2FFJ1WjwXV%2Fg%2FzBffH%2F4XNlj%2FQfXkGYoU32Ad5RaxVeqnmfnMcNgv8V3tcn72PnH3YOhV4eFDng0W6S7MJIonXhktoEem1CEEcUnWO8Dnvb%2BVNlIR8NzykEfOrIu%2BURim%2FLK4RGZ%2BMy0TsvFactfG2SzssD5jNIeXJDyO%2FXw5y7AAzw16SKOHcP5HV2z%2BV5UtLWchJ0xoFyZt94l5DzcGPKVX49OEi%2FHd%2BNa%2FumY7kLGy5lM8q0UI4NwaNPty4QE%2FKJQhnKK6RoY1zZ%2BcGdyXJvhTg9Q5lIT%2FCQabparqvqJFUtyrNPrrG0NMY4wUg%2Bfy%2BRrW3TIE246VdeIWSqNsl%2BmKretrBKAkfwOK1SHfXo7TdkwRiglgMXj5iMk1kE%2BEoY%2BO9Uk8xyBXbUuwe54IcZvov5uxbQhSzcnqZvSwEy13wmhJYVY76JWL%2FxsIuEf1LsNtFiBB3b%2BEHJuwjZmjyGV8R8DFezmOZFAYar16NuFRKz8bKru2MzTq17YlmtAT6%2FwYP7A%2BiBgUbi%2FjSHqYMOPk6cEGOqUBphNfwDoWjfrOAtQKKyt3DDzL98g2clrZpoDOSNhs1y2pL9lxHZsGlM9vWz412KDXihwCSJ97%2B8OtnZFZSh%2B2NGG3Msqj0uFMxqJTBQJjvpLxA2qPv74MIFp1Y%2Fqc%2BcFkzAxLBXczxX%2B4VerlEOg6jCptKzJJOqOmPduXxVyiDI4oKkFDgyW2xGob8XZklXf7%2BvQ4Afd83UzIqPWfrViIzbDTRSDn&X-Amz-Signature=17185a1d5e8a16382f938e1466f4461b33065bf1261765dd8a2e6955ae72b722&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU62H4ID%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWIdsKxMyAhZZMsbthp6huAIWaDalL5Q22HcgjdZZ1IAIgFrXg3fPBgn%2FTZqFYWhKeBxfpMY55cYJW6Tj9a%2BTfZ%2BkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFMJ8z1%2FyButrWbuircAyVKXz1PFUxCVcAKb%2BzxaIsgFkQQAn7kaXJzQIilZI1MjnGuE0MgkMCNA9jLr%2F3qEGW%2FgYSCzDzOpN1SrxsWCcM7BTcHYgRZGAZNcAW2%2FFJ1WjwXV%2Fg%2FzBffH%2F4XNlj%2FQfXkGYoU32Ad5RaxVeqnmfnMcNgv8V3tcn72PnH3YOhV4eFDng0W6S7MJIonXhktoEem1CEEcUnWO8Dnvb%2BVNlIR8NzykEfOrIu%2BURim%2FLK4RGZ%2BMy0TsvFactfG2SzssD5jNIeXJDyO%2FXw5y7AAzw16SKOHcP5HV2z%2BV5UtLWchJ0xoFyZt94l5DzcGPKVX49OEi%2FHd%2BNa%2FumY7kLGy5lM8q0UI4NwaNPty4QE%2FKJQhnKK6RoY1zZ%2BcGdyXJvhTg9Q5lIT%2FCQabparqvqJFUtyrNPrrG0NMY4wUg%2Bfy%2BRrW3TIE246VdeIWSqNsl%2BmKretrBKAkfwOK1SHfXo7TdkwRiglgMXj5iMk1kE%2BEoY%2BO9Uk8xyBXbUuwe54IcZvov5uxbQhSzcnqZvSwEy13wmhJYVY76JWL%2FxsIuEf1LsNtFiBB3b%2BEHJuwjZmjyGV8R8DFezmOZFAYar16NuFRKz8bKru2MzTq17YlmtAT6%2FwYP7A%2BiBgUbi%2FjSHqYMOPk6cEGOqUBphNfwDoWjfrOAtQKKyt3DDzL98g2clrZpoDOSNhs1y2pL9lxHZsGlM9vWz412KDXihwCSJ97%2B8OtnZFZSh%2B2NGG3Msqj0uFMxqJTBQJjvpLxA2qPv74MIFp1Y%2Fqc%2BcFkzAxLBXczxX%2B4VerlEOg6jCptKzJJOqOmPduXxVyiDI4oKkFDgyW2xGob8XZklXf7%2BvQ4Afd83UzIqPWfrViIzbDTRSDn&X-Amz-Signature=317c1d1b65603ef925e7838183be485947ef9b93409e774f27d95e993a5ac5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
