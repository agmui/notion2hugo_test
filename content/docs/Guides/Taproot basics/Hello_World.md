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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGJ4YO6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC0SugGG2QqK8yy%2BfNgtEniXr6mmN76y52PfqYnlBZu%2FQIhAMPtLUqlHEuueQzM5xOFJh%2B%2BYX4gsRrOYSNxxNawlSeFKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbDKmgVk%2B7Jyw0v4cq3AMx2sCJ73zfqpQO8UnycluxNJVHADEJ4MW%2FkRcfWzZtotWFDMjAuLK41XH4a6V0I0YVHXQJwotC72%2BeOKAwJx2wKuGnWQBX%2Fey0fSOe6b4Ei1iKFKbMqWa2XGs10ueqedPi1hHJK3h5q6UGp9AiRdtHAY9mgbXinFKqASdsnIfsMu51iBvr5ErMsBLWpM50sBQTR7gURRjX81dzrs0wX7CAuXHgUDLRx%2Bkw5wzZQcxobVkkkIicHcyP%2BO9mV9DL%2F3NfKX55bCT1wsiZEwOpB5UXJl7kJocH3iowq3NT3%2FbWLdm7C0%2Bo1OmP5Ux1kZwQ1ymZX6r5RyiHp0P0TNcY1LRjWH5tMu506YJL%2F8uacIDlszqQMR0bVR0zzbXHz3IB0QGKIJqCKRctUmCIgTqwYYbAIYYIunSz%2BzvajV75KHhQGpZHRNlbgLHotKxAWBTIY7xo0B9aUETRIm1T1bVVhAMrX%2F4SpGJ9QIHyAuFs9wPuXdPXZpKEQn3kvRcT%2F0Ek2wuzXyXzIEetEVLhocRkBaQUioEH42XIc4SuFclq6JwmsvndHlmIedMMfsqI%2BSkRsC%2BpDmDgPlCDNRgbzNMttFJInb3k3OJu77Kd0B%2BHzuHKnMMgGl5fjyGzgM7TCjCl8eW%2FBjqkAfuTy6vAmEAZiXrcUk7Q9VC9jhysiOYOjo2%2BGB34F4ZozgWWKl6SB8Jexy0Ulw%2BfkNbL%2BBLn%2FpKu1CYBYRKRmB0gHMB2%2FYaeShr%2B9HjVId%2FmR0Ly9kOu%2BfSsN9Ot%2Fn9mBzwHXrK4Xj2dBcbtijgMQKU4MXC7%2FnL1EQ0gdHE%2FW6skcWB0LyW7a9qNAk3i5af70fJSdnU5YZvdUdOB2IUUuMJ2Nha1&X-Amz-Signature=bb423b880ec0acb3bd8d984d05728a22590aa2d925d790dfe98f5590ee4800a8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGJ4YO6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC0SugGG2QqK8yy%2BfNgtEniXr6mmN76y52PfqYnlBZu%2FQIhAMPtLUqlHEuueQzM5xOFJh%2B%2BYX4gsRrOYSNxxNawlSeFKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbDKmgVk%2B7Jyw0v4cq3AMx2sCJ73zfqpQO8UnycluxNJVHADEJ4MW%2FkRcfWzZtotWFDMjAuLK41XH4a6V0I0YVHXQJwotC72%2BeOKAwJx2wKuGnWQBX%2Fey0fSOe6b4Ei1iKFKbMqWa2XGs10ueqedPi1hHJK3h5q6UGp9AiRdtHAY9mgbXinFKqASdsnIfsMu51iBvr5ErMsBLWpM50sBQTR7gURRjX81dzrs0wX7CAuXHgUDLRx%2Bkw5wzZQcxobVkkkIicHcyP%2BO9mV9DL%2F3NfKX55bCT1wsiZEwOpB5UXJl7kJocH3iowq3NT3%2FbWLdm7C0%2Bo1OmP5Ux1kZwQ1ymZX6r5RyiHp0P0TNcY1LRjWH5tMu506YJL%2F8uacIDlszqQMR0bVR0zzbXHz3IB0QGKIJqCKRctUmCIgTqwYYbAIYYIunSz%2BzvajV75KHhQGpZHRNlbgLHotKxAWBTIY7xo0B9aUETRIm1T1bVVhAMrX%2F4SpGJ9QIHyAuFs9wPuXdPXZpKEQn3kvRcT%2F0Ek2wuzXyXzIEetEVLhocRkBaQUioEH42XIc4SuFclq6JwmsvndHlmIedMMfsqI%2BSkRsC%2BpDmDgPlCDNRgbzNMttFJInb3k3OJu77Kd0B%2BHzuHKnMMgGl5fjyGzgM7TCjCl8eW%2FBjqkAfuTy6vAmEAZiXrcUk7Q9VC9jhysiOYOjo2%2BGB34F4ZozgWWKl6SB8Jexy0Ulw%2BfkNbL%2BBLn%2FpKu1CYBYRKRmB0gHMB2%2FYaeShr%2B9HjVId%2FmR0Ly9kOu%2BfSsN9Ot%2Fn9mBzwHXrK4Xj2dBcbtijgMQKU4MXC7%2FnL1EQ0gdHE%2FW6skcWB0LyW7a9qNAk3i5af70fJSdnU5YZvdUdOB2IUUuMJ2Nha1&X-Amz-Signature=8dc7ecf9823768a5f5b5ecefb4210abeee6f9bd76d383d999b949b7bfce6d225&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
