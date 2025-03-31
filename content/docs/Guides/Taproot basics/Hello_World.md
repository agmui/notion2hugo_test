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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOCMXX7G%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCyroFdvt0gFqtoEB3I%2BgirO0WYhB9CgCWA1CkfxLp6qQIgY%2BjgCdkXpKDBBznamIguY8ZaDozc5Tlf05kfNWp2RhYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW4C99j41w3V6e8JyrcA3XjafrNd7brTX7NAIBqZSQpsAs4Gxu4byDqSHGpkjk1uSIvyl8eclzL%2FAo3eQ0ttZATyDdDOG5%2BgQot7MvcyK8V046kw71lAsvkzd2zkYWBAKTLnT96BDXRV97gLy76%2BlcRmbGiQ%2F3gbF7I9WSKBZgzGhKdcV%2BOtksb5JXcxmtUi1utNLNyudBhBdKjT7cVnmoJ0XyQW7x3P2amHZlSbgecYynyGtS02o8sB0ezHiNlPuKVoLBHBx4bMPQtS76FHJclK2JFUZRYW7gzL%2BSgHgN%2FAdsruAKmqH1lRnVETAfmUnHCZ7LB6ETr67XbZ8aVUJtDLBXlDJI6ulVZ8BqpAgYs2RTw1hsXLBfMx2G1gSNr6Tdcnd7QhCpgSZaFcymyeGS%2F9eFSlX3DhKSCYILMWdycGU9j3V70v%2BSAKSEm4qWiYYvfhfIw0i9KH2iWwCCJ9Q%2FjJPW3hjFcvgFKk%2BUoaMFondHPG1n4153Vq%2BuNpG5vwSwgejs1YkVFXZaMEepNF5%2Bt41lwvCwfXwRqkoZzOqaxUuXL%2FUj3s2qF9bsziECYW%2FJRQojM2raZ4jjQezaut8ZAdRcImC1xps%2F27tFc0VCZRRFp5nrE3rePZMQnl8YxsD2iPX0%2BDh4JMooWMPa7p78GOqUB0OMB92fJL08v6kOWTS45OzOpzt9p2DoiciYrZ2uD8Dmy8IlSHRyBgYrG5rAb5TGG9%2BqvZQQLjMpvwP0ytGrHxvP5Ilh8J%2FTkB9oLthS3bAq%2FNVEno%2F9sn9%2BmlOp3EAYD6WBmYmHgXIB8fc5hh4OYEQWoTTDcZw90Fr%2FEeIgzGoNXFYZqc%2Ba3y6UG2ylN5Ec9TPP0YbpuQHKvzo0wV4bG%2Fva1v1R9&X-Amz-Signature=31e9c0d183615aef64c1b5f86c2794eb1ae6d2d419b5fc0f275e2f7d240beeda&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOCMXX7G%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCyroFdvt0gFqtoEB3I%2BgirO0WYhB9CgCWA1CkfxLp6qQIgY%2BjgCdkXpKDBBznamIguY8ZaDozc5Tlf05kfNWp2RhYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW4C99j41w3V6e8JyrcA3XjafrNd7brTX7NAIBqZSQpsAs4Gxu4byDqSHGpkjk1uSIvyl8eclzL%2FAo3eQ0ttZATyDdDOG5%2BgQot7MvcyK8V046kw71lAsvkzd2zkYWBAKTLnT96BDXRV97gLy76%2BlcRmbGiQ%2F3gbF7I9WSKBZgzGhKdcV%2BOtksb5JXcxmtUi1utNLNyudBhBdKjT7cVnmoJ0XyQW7x3P2amHZlSbgecYynyGtS02o8sB0ezHiNlPuKVoLBHBx4bMPQtS76FHJclK2JFUZRYW7gzL%2BSgHgN%2FAdsruAKmqH1lRnVETAfmUnHCZ7LB6ETr67XbZ8aVUJtDLBXlDJI6ulVZ8BqpAgYs2RTw1hsXLBfMx2G1gSNr6Tdcnd7QhCpgSZaFcymyeGS%2F9eFSlX3DhKSCYILMWdycGU9j3V70v%2BSAKSEm4qWiYYvfhfIw0i9KH2iWwCCJ9Q%2FjJPW3hjFcvgFKk%2BUoaMFondHPG1n4153Vq%2BuNpG5vwSwgejs1YkVFXZaMEepNF5%2Bt41lwvCwfXwRqkoZzOqaxUuXL%2FUj3s2qF9bsziECYW%2FJRQojM2raZ4jjQezaut8ZAdRcImC1xps%2F27tFc0VCZRRFp5nrE3rePZMQnl8YxsD2iPX0%2BDh4JMooWMPa7p78GOqUB0OMB92fJL08v6kOWTS45OzOpzt9p2DoiciYrZ2uD8Dmy8IlSHRyBgYrG5rAb5TGG9%2BqvZQQLjMpvwP0ytGrHxvP5Ilh8J%2FTkB9oLthS3bAq%2FNVEno%2F9sn9%2BmlOp3EAYD6WBmYmHgXIB8fc5hh4OYEQWoTTDcZw90Fr%2FEeIgzGoNXFYZqc%2Ba3y6UG2ylN5Ec9TPP0YbpuQHKvzo0wV4bG%2Fva1v1R9&X-Amz-Signature=ae27da3ef49e2e3d80e2bff80102640de26669752f6993bdaacc14b861a19e40&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
