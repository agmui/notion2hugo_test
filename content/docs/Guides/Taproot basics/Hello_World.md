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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYZNGPNA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BGYLusGooly4rMQ9%2F7uEV5qaOQAwZ6Uor8v9dyrD%2BdgIhAPHMRBpb96i6jCoN3tr0DOUpuM8APpNYaHTV9bpdD4s6Kv8DCCMQABoMNjM3NDIzMTgzODA1IgzDbKIMCxVhfsLrnccq3ANtyQyQtQ9WBQ6TTLNgNCf%2FCh4BF1EVhJDFeXhC3k%2FgX3qk2yEhvvCLSaaub48FI9yPKjhRSpJ70YSXcHyuprnRdNSuEMHfEF8ix%2FARyFbkd42lEuCpvS%2FdoYECPxl1StYkZdq9S0gwot5F78wKT8DcyES%2FbLWjXeYolK%2F7ewp1jIA1YbuuNQW8w1%2BdTaBvYkSn9PomBzN5P2a3FtEJXqQJh3jNylT7Y%2FEDNvJy%2Fv94qADDa9XfiPgqIT3Y2HBppEa6WvBTi1JMmxQ2PVwg67vdeU9iOUsIaH0alY8dRK3ej%2FQtsFRpdRHwltpFjujev%2BkCQLjlPQeLC8v7spg0UZo%2B9gvSi5Ux1p0JEF4HFKeNJROjut4CYI3RD3NpRxQHzq8k6jrGB5zIh6vrvKgAGSFULLWU2xvS686el6H2pyCW5AxW%2FfyF88NMJ0DKeIwsdsR4b%2B0MdzJFI9uSUeen2g5ApxlzTZGC2bpSCrWkTCco5naBAORvvd9RxtCmb9stW%2BmeC4JL6yrv3%2BZ35mfLqvgWMKe4z9MrLwzdQGW79hx0OE0jBqtYgSpnMzVKb8dTLD4rOP9PyqBwYqll%2FEydpUYKa6bmoS84j9X%2BgGSOLCNOrOo4UgGypnKMJ8Iq2TC%2F4KvABjqkAZIWWtKsq6ihhcRxeAkOOxg4rL4yxVd9LLY8LPPl2sAzEPaqeOF2vrGV4yg50INWpo2KQY2zvecvTCl3lM4s%2FTAyn%2FnTWCgJR3CuQvP%2BI59Cm06efJsMGonc6os%2BsUUYm3wYQ0lqwqMFnKQZB1hmIsBWGH2Ky0hLiwH3hmPFfgbUNmlKGNLnwLfdEjYydMAMXSlV0fWRurnGdXZHaMjXkJCmq%2B9x&X-Amz-Signature=f025e5c8e72e8d7ee9a110b7eb2cd10b424bab1e7cfe86c514d8a7dd524eee90&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYZNGPNA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BGYLusGooly4rMQ9%2F7uEV5qaOQAwZ6Uor8v9dyrD%2BdgIhAPHMRBpb96i6jCoN3tr0DOUpuM8APpNYaHTV9bpdD4s6Kv8DCCMQABoMNjM3NDIzMTgzODA1IgzDbKIMCxVhfsLrnccq3ANtyQyQtQ9WBQ6TTLNgNCf%2FCh4BF1EVhJDFeXhC3k%2FgX3qk2yEhvvCLSaaub48FI9yPKjhRSpJ70YSXcHyuprnRdNSuEMHfEF8ix%2FARyFbkd42lEuCpvS%2FdoYECPxl1StYkZdq9S0gwot5F78wKT8DcyES%2FbLWjXeYolK%2F7ewp1jIA1YbuuNQW8w1%2BdTaBvYkSn9PomBzN5P2a3FtEJXqQJh3jNylT7Y%2FEDNvJy%2Fv94qADDa9XfiPgqIT3Y2HBppEa6WvBTi1JMmxQ2PVwg67vdeU9iOUsIaH0alY8dRK3ej%2FQtsFRpdRHwltpFjujev%2BkCQLjlPQeLC8v7spg0UZo%2B9gvSi5Ux1p0JEF4HFKeNJROjut4CYI3RD3NpRxQHzq8k6jrGB5zIh6vrvKgAGSFULLWU2xvS686el6H2pyCW5AxW%2FfyF88NMJ0DKeIwsdsR4b%2B0MdzJFI9uSUeen2g5ApxlzTZGC2bpSCrWkTCco5naBAORvvd9RxtCmb9stW%2BmeC4JL6yrv3%2BZ35mfLqvgWMKe4z9MrLwzdQGW79hx0OE0jBqtYgSpnMzVKb8dTLD4rOP9PyqBwYqll%2FEydpUYKa6bmoS84j9X%2BgGSOLCNOrOo4UgGypnKMJ8Iq2TC%2F4KvABjqkAZIWWtKsq6ihhcRxeAkOOxg4rL4yxVd9LLY8LPPl2sAzEPaqeOF2vrGV4yg50INWpo2KQY2zvecvTCl3lM4s%2FTAyn%2FnTWCgJR3CuQvP%2BI59Cm06efJsMGonc6os%2BsUUYm3wYQ0lqwqMFnKQZB1hmIsBWGH2Ky0hLiwH3hmPFfgbUNmlKGNLnwLfdEjYydMAMXSlV0fWRurnGdXZHaMjXkJCmq%2B9x&X-Amz-Signature=02d2d2bbb2f34a048896240709cf820f2a80f53b0f7f5e3e5c3c11d61e490875&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
