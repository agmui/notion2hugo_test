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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBBMWO6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBtM4F1EQz8m3yhk4ku1UmMBBI5jN4icttU8VlGWK5BzAiEAkkbsnLPEVUvqx18kUfdvoQN5UnzJ6RdrwdMc0cABCmoqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F0p5B%2FjY5NxMcb7ircA8Lu33WyBwqdzh5sIBPfO7XIfCjp%2FzuUGxLBa4a5p8RYANimX2yPOvEcKqm4BHrfoiKh4UlMWctqv3%2FOyo0uLBBld4efI575ohJGExt2nLZsJQcKYiVk2EsSb3HjorMiXSgjm3eLsmB41IrnP737uY0lOKEHJuiUk3CzSkxDHPZi41pXXScODefuO1v%2Bgx3wmBz5%2BZq5BvIP%2BAJ%2FmxVnp4DYzWtVQwzgG3B1mwceiAJwz0hAwhU6hPaNE7DS57J3QOba2PRLj7W7L7%2FVXStLWFygPBvctPElO7LWjLZU9gJmOP7oVOeAxN2qzWVLTal%2Bzk5lVMZlgrLiiXH2zogBcX2ZT6UJrlr%2BVsHLTa6Wns95XWvL3Xp3hcl3Dh8ETPKFLkW1HVHMXtvnP%2BJm2njgeZ3%2BQA5VYVS9anELMzR%2FAVk8Pmx%2Fa3OAKi30fUsGrlBeo1DPcrm3o4Jifv8CqPlJhs4nAizLucmwzrhxj3zLMkYEFK58SJrQJEJ72VlddjntDHtq9g15o8OCw0m4QkAO%2BMEiwiAGFZ3FBlQPoi%2FmfmNd3hF72w%2FanITGgRbEvL0ktbHJdBVZzJ91lALAKjHGTommZduF2Qc2zBLOS%2FrdS%2B7jVZDZOwNod9kQ8ddnMIHVn8AGOqUBJXHzj892xBNdyFbCyYZMqwqCZQ1YwChJtsMICK3Xx1xd6th8N594%2F67jBBBFwbLyOdAl2H6QBopFaJhw8xc39f73y8L6i80H0uY4WO7MN5wr7rGGistk1IZMIdGNhUmYqhNpWNfZYG1Yv8Scjpui4E%2FR2IPVgle%2F3O0L%2FdOHt3MM54TbK7b5yq%2BqfzOjiYOoZEGxbtA43W1Jjp6ZkAEyuUt4YpZD&X-Amz-Signature=fb943ec48598db72c50bc8738963809fa8e06bcbcc9fab5a36ca0ec250fbfde7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBBMWO6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBtM4F1EQz8m3yhk4ku1UmMBBI5jN4icttU8VlGWK5BzAiEAkkbsnLPEVUvqx18kUfdvoQN5UnzJ6RdrwdMc0cABCmoqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F0p5B%2FjY5NxMcb7ircA8Lu33WyBwqdzh5sIBPfO7XIfCjp%2FzuUGxLBa4a5p8RYANimX2yPOvEcKqm4BHrfoiKh4UlMWctqv3%2FOyo0uLBBld4efI575ohJGExt2nLZsJQcKYiVk2EsSb3HjorMiXSgjm3eLsmB41IrnP737uY0lOKEHJuiUk3CzSkxDHPZi41pXXScODefuO1v%2Bgx3wmBz5%2BZq5BvIP%2BAJ%2FmxVnp4DYzWtVQwzgG3B1mwceiAJwz0hAwhU6hPaNE7DS57J3QOba2PRLj7W7L7%2FVXStLWFygPBvctPElO7LWjLZU9gJmOP7oVOeAxN2qzWVLTal%2Bzk5lVMZlgrLiiXH2zogBcX2ZT6UJrlr%2BVsHLTa6Wns95XWvL3Xp3hcl3Dh8ETPKFLkW1HVHMXtvnP%2BJm2njgeZ3%2BQA5VYVS9anELMzR%2FAVk8Pmx%2Fa3OAKi30fUsGrlBeo1DPcrm3o4Jifv8CqPlJhs4nAizLucmwzrhxj3zLMkYEFK58SJrQJEJ72VlddjntDHtq9g15o8OCw0m4QkAO%2BMEiwiAGFZ3FBlQPoi%2FmfmNd3hF72w%2FanITGgRbEvL0ktbHJdBVZzJ91lALAKjHGTommZduF2Qc2zBLOS%2FrdS%2B7jVZDZOwNod9kQ8ddnMIHVn8AGOqUBJXHzj892xBNdyFbCyYZMqwqCZQ1YwChJtsMICK3Xx1xd6th8N594%2F67jBBBFwbLyOdAl2H6QBopFaJhw8xc39f73y8L6i80H0uY4WO7MN5wr7rGGistk1IZMIdGNhUmYqhNpWNfZYG1Yv8Scjpui4E%2FR2IPVgle%2F3O0L%2FdOHt3MM54TbK7b5yq%2BqfzOjiYOoZEGxbtA43W1Jjp6ZkAEyuUt4YpZD&X-Amz-Signature=64f8082591601e152b4378a931a398c7d71e18ec280cd1ad236460b3d237d0a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
