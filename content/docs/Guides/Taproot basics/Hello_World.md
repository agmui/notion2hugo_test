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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTPSJP3%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2BIUXJ%2F8gp29ac0V5SJ0tZ0APiGcfjdIgwJq3r9ia9AIgZ9MEPtXleXpOOPpjBiB1CEbUNyVUExudSvm%2F1dNPHrUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FEvuOPAhTIuPmGCCrcA9g%2FHbfuztRlj%2FvD%2FODagtJTodtYsj3axklqq9Nu7Gk9hS6zmbgQEBiF4%2FcePEM753dNT33Cy4H3dMMTRWUHAGl4lmSXrqwZzXOviNz4EvzX%2F0zGUSkgn2F3ZOZ%2Fo6a1KVKSlqt8nVYBwyZwnyEa%2FMJknRYI%2B7%2FHdbkpO%2BPasXq5jl%2BuIlfBDGJ3zJ80yTvTfi0cgku9wtr51fFOF03Kk3OAj9J8BXoSPyDLcUHDYSR%2F%2FJSiiP26f0inzKQJYIPI3GRBZbYjCPZUCYxLaaGam6QE6GsawbpxT19PhX4x1xqzDMJSd5keMrp40Zeq6NGOTDb%2F8EXRVu8n%2B%2FnUYzEwFxkN%2FAbXcjUhmprH%2BV57YCb%2FCaqkmAirq5rWUgUkMNn0Qh%2BUoz5veLW2t8UH4cEMnHxEzJ2KE%2Fm0uGlwVGsv8%2BoO2jUlsNJfmv63Fw33nbEk7KEQ5ei7tQr74oJQ5oSx5eE27XvZs9veoj49BK2RQN4CZKMWFLaOsFMnP%2B1n9DUlM6bFtrC9eA6xrRVZTjNXfXxUYE%2B4W4euwG8%2F%2BL4rCf%2BXwTJpoOhTqRaJ0yms52eME7i1yq%2Bfrx%2BX3bROvC7KAtvXVkdAgFYtWd94MJkWtJEHq4iRWPpOdtPqAsYdMNzj%2B84GOqUBXh%2Fz%2FWGdwyxpkBZ1YRgKcgc3lWRrPLKbx43MxDIjPc10e53gHWo6INwL5K8LSO%2BArZekx5Te5U387kWMDBvvWsOaN6WBsPHtXb%2Bh6dZ3sD16Fy0muKpAQ6YzNe3m70wgGCJQQInbeBbr0Aizt%2FWmcYaQUItqbFANH9P628ZcTHkWcbqx4RLQjowhA%2BPEFinRmv9oyy9Q7fff1R%2F2X07P3fH4AOGY&X-Amz-Signature=ebd07e55725c23d588c9ace8890bb6097eafbd423b0eec70a144de465a86f4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTPSJP3%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2BIUXJ%2F8gp29ac0V5SJ0tZ0APiGcfjdIgwJq3r9ia9AIgZ9MEPtXleXpOOPpjBiB1CEbUNyVUExudSvm%2F1dNPHrUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FEvuOPAhTIuPmGCCrcA9g%2FHbfuztRlj%2FvD%2FODagtJTodtYsj3axklqq9Nu7Gk9hS6zmbgQEBiF4%2FcePEM753dNT33Cy4H3dMMTRWUHAGl4lmSXrqwZzXOviNz4EvzX%2F0zGUSkgn2F3ZOZ%2Fo6a1KVKSlqt8nVYBwyZwnyEa%2FMJknRYI%2B7%2FHdbkpO%2BPasXq5jl%2BuIlfBDGJ3zJ80yTvTfi0cgku9wtr51fFOF03Kk3OAj9J8BXoSPyDLcUHDYSR%2F%2FJSiiP26f0inzKQJYIPI3GRBZbYjCPZUCYxLaaGam6QE6GsawbpxT19PhX4x1xqzDMJSd5keMrp40Zeq6NGOTDb%2F8EXRVu8n%2B%2FnUYzEwFxkN%2FAbXcjUhmprH%2BV57YCb%2FCaqkmAirq5rWUgUkMNn0Qh%2BUoz5veLW2t8UH4cEMnHxEzJ2KE%2Fm0uGlwVGsv8%2BoO2jUlsNJfmv63Fw33nbEk7KEQ5ei7tQr74oJQ5oSx5eE27XvZs9veoj49BK2RQN4CZKMWFLaOsFMnP%2B1n9DUlM6bFtrC9eA6xrRVZTjNXfXxUYE%2B4W4euwG8%2F%2BL4rCf%2BXwTJpoOhTqRaJ0yms52eME7i1yq%2Bfrx%2BX3bROvC7KAtvXVkdAgFYtWd94MJkWtJEHq4iRWPpOdtPqAsYdMNzj%2B84GOqUBXh%2Fz%2FWGdwyxpkBZ1YRgKcgc3lWRrPLKbx43MxDIjPc10e53gHWo6INwL5K8LSO%2BArZekx5Te5U387kWMDBvvWsOaN6WBsPHtXb%2Bh6dZ3sD16Fy0muKpAQ6YzNe3m70wgGCJQQInbeBbr0Aizt%2FWmcYaQUItqbFANH9P628ZcTHkWcbqx4RLQjowhA%2BPEFinRmv9oyy9Q7fff1R%2F2X07P3fH4AOGY&X-Amz-Signature=ec733e7c7d8a3549daf8b9d87b42815bfcc86acfa00b5ab00c1e9acdeb863a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
