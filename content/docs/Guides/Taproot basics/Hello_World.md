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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK2QSPUX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCu%2BQPb21zSZvNIEVHX3mnW9DswZQITA%2B7g7BEkMTexDAIgKPS2lKc6pFy6N97uWYv58i0cJ3dChSVRhH7Sd%2BlYu5sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKVtQ8fagn3CVRnujCrcAxSJyHt9ktf36LZIy2tKnJSGYPdVhQaLCBFyNkXXIlzdzFw60Y0z%2FpEKfZ0ZuTYq0AB5I6fKzZy6Ypt9LhzdzlVhl7WOnhtp%2FNEywGb%2B%2FvhWsMzUEG8Qwu45qDvK%2BQ9uQ2PEHxw94m7qLjZNU1VqDAEbMmGUMes%2FkhknzJG7lNKsNNK%2B0WeOXztkGdKAYgi0ox8pPmOr98qFZCqZm1dlQD2BAdmPbZufZbnls1PMfFdtue53CWiBIJXYZpT1ummK0ht3GSQaqQG50dzyafnztgR%2BzteU%2Bf8TveaYIEYIp0dbC0tFrM%2BK0MZaze0KbrIug88nLiXgVUgFg0JxHXKbv4ucDEe3mMg%2FNjvZDeCiWOjbWh2o4%2BjB50rAfd7N8Hz9HxtNU5rm3FhoOqwIiXO52DVUFNzJDyrCgEtgO%2BOz%2BYcm0hO87zwgrEVYZhnbcuwGo%2Bsn%2FXQfdt6JrIfE47Q3zS926THxpzcAEcv2KksFIttlBQzRT0hqbNiJKzqH1cWjwfuzfKtipmIxqvh6wTbKpQ%2BwpWf5PshwbqGjYU2B%2F5T2FJFVO4LXVzpvZCgiAM9LRXmesof5%2FI%2BFXCy0naIo4NAjvm2KaqIel83tAqFRcTY7ot0hW0CmnXEHHsGtMPip%2BL0GOqUBvwRfFqXu9hj7gXs3UUbhohItwOo2SZ4Kcx2PvF5w%2Fe22ARf8zUf9D%2BBK47qoOjV3AMQlBo5pXqg824y80naSUCCjl4uzCnkaVj3PD1lCp0Sye4TQqGWIKrGvTWdEMW27dpa%2FFOikwdN0ErTGrOukWoDCRlmj2Iqdta%2FWR%2FIDG46WzSNrd3lHsBmr5%2BVzm0h6Rku1B4rQa6RMaaNLJxJ1Xsf4vbwT&X-Amz-Signature=408aaf4b5889cea5105bb4001dc48805033a2dc47985e90beca26f139ea397ac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK2QSPUX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCu%2BQPb21zSZvNIEVHX3mnW9DswZQITA%2B7g7BEkMTexDAIgKPS2lKc6pFy6N97uWYv58i0cJ3dChSVRhH7Sd%2BlYu5sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKVtQ8fagn3CVRnujCrcAxSJyHt9ktf36LZIy2tKnJSGYPdVhQaLCBFyNkXXIlzdzFw60Y0z%2FpEKfZ0ZuTYq0AB5I6fKzZy6Ypt9LhzdzlVhl7WOnhtp%2FNEywGb%2B%2FvhWsMzUEG8Qwu45qDvK%2BQ9uQ2PEHxw94m7qLjZNU1VqDAEbMmGUMes%2FkhknzJG7lNKsNNK%2B0WeOXztkGdKAYgi0ox8pPmOr98qFZCqZm1dlQD2BAdmPbZufZbnls1PMfFdtue53CWiBIJXYZpT1ummK0ht3GSQaqQG50dzyafnztgR%2BzteU%2Bf8TveaYIEYIp0dbC0tFrM%2BK0MZaze0KbrIug88nLiXgVUgFg0JxHXKbv4ucDEe3mMg%2FNjvZDeCiWOjbWh2o4%2BjB50rAfd7N8Hz9HxtNU5rm3FhoOqwIiXO52DVUFNzJDyrCgEtgO%2BOz%2BYcm0hO87zwgrEVYZhnbcuwGo%2Bsn%2FXQfdt6JrIfE47Q3zS926THxpzcAEcv2KksFIttlBQzRT0hqbNiJKzqH1cWjwfuzfKtipmIxqvh6wTbKpQ%2BwpWf5PshwbqGjYU2B%2F5T2FJFVO4LXVzpvZCgiAM9LRXmesof5%2FI%2BFXCy0naIo4NAjvm2KaqIel83tAqFRcTY7ot0hW0CmnXEHHsGtMPip%2BL0GOqUBvwRfFqXu9hj7gXs3UUbhohItwOo2SZ4Kcx2PvF5w%2Fe22ARf8zUf9D%2BBK47qoOjV3AMQlBo5pXqg824y80naSUCCjl4uzCnkaVj3PD1lCp0Sye4TQqGWIKrGvTWdEMW27dpa%2FFOikwdN0ErTGrOukWoDCRlmj2Iqdta%2FWR%2FIDG46WzSNrd3lHsBmr5%2BVzm0h6Rku1B4rQa6RMaaNLJxJ1Xsf4vbwT&X-Amz-Signature=3066e3a923aabfae7ce3ea6ad0a2dfa2b22b5c490f79b17c47992f6625df46e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
