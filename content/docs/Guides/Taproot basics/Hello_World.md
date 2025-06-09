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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIJXKA57%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYQX4YRDKqAUna2qr6kNpGeji3ByPfaG1drkq3%2BURqIQIgL6jijqzhC6m6W0tXwv1d1PCC6943%2FeDcxVJpe6nlXzYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPv2nmSSx58g8OokgyrcAzZpP2gN%2BmFVhod5KMr6zj2W%2BAT6fj7SPUlp%2BIvthc1inV%2BZ%2BIpCkBXgx4ab%2BGWiKrcVmBvGh%2FDh9WXE3F264yAKdEwvlKs5ZOxAZqhtqtPQLixm1M0YtjVqGvx79mt%2FyF33R1U8YNnwMwxKuNLuseEas9IVXh45cDdJSgiW5tbQ%2Ff6mDBKLE5Hjgi1K3YdMdXzBsUd7BI0IkY7EYFwitGhUuZOZ9Pg%2BWbUH75J2SwRDnSPl9tOAZKgqxl2lJhW%2BAl3xnD91ul%2Boiu8gT3oB5dNZnA%2B1QzCF%2Bvqh00z%2BgJi3OIM5W926uEe9P944BY%2BRMDFRhr6fh4PHtRR5XID%2BCzswJHxKTwQxnYqANxwYNuDmTOkDJ5NmpVG0dtbhqyllqSVWgA7%2FpRMVt3nB4fyXfIhQ%2FlR4unU9c0%2BTS3CuCJH5j0HLnmQYgq2US3UW6DGilu%2BHj6uXHaU%2BfmbSJXZKuipJ1KgB2KDi%2BRntEo3lYnIOq4sedK2Zk%2F%2BqyTJbLDvlzXX17qqROWCb%2BPy%2FsQ1PQ10tcJm%2BineI61cSdWsrefyHrXPuQCgmxKzuTAhK%2Fh9okUpzk8glKLXS5SySBeQBdWs1pLlj8QnKWeGIY%2Fy7jvvGoDKUffV0xB59%2B7%2FaMNqbmsIGOqUBPXiDLdze4nkNkfMSKuCEki4nAQOeo5rJQspdh%2FZhOwB7BrG6ANb5kYCSQbuD6497OJoUjoE8ItXuIVwfjqOMHswTPy3aRmAYY5yBv4j0HWvVonLFPCCbX1DUajoxQoPte6AT6U01hdNG7WULkSV8fFzFazPPYZBvfA%2B7k%2B5DYnoJL3Y%2BBxPNebXvf4W96H0AbdxQ5KRR8ZyvhnJ315TAU%2FS0tWHL&X-Amz-Signature=38dc57781ed7df1849e1b8bf0cb202c001892b0eb3a1229b3b3898d7978b2365&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIJXKA57%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYQX4YRDKqAUna2qr6kNpGeji3ByPfaG1drkq3%2BURqIQIgL6jijqzhC6m6W0tXwv1d1PCC6943%2FeDcxVJpe6nlXzYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPv2nmSSx58g8OokgyrcAzZpP2gN%2BmFVhod5KMr6zj2W%2BAT6fj7SPUlp%2BIvthc1inV%2BZ%2BIpCkBXgx4ab%2BGWiKrcVmBvGh%2FDh9WXE3F264yAKdEwvlKs5ZOxAZqhtqtPQLixm1M0YtjVqGvx79mt%2FyF33R1U8YNnwMwxKuNLuseEas9IVXh45cDdJSgiW5tbQ%2Ff6mDBKLE5Hjgi1K3YdMdXzBsUd7BI0IkY7EYFwitGhUuZOZ9Pg%2BWbUH75J2SwRDnSPl9tOAZKgqxl2lJhW%2BAl3xnD91ul%2Boiu8gT3oB5dNZnA%2B1QzCF%2Bvqh00z%2BgJi3OIM5W926uEe9P944BY%2BRMDFRhr6fh4PHtRR5XID%2BCzswJHxKTwQxnYqANxwYNuDmTOkDJ5NmpVG0dtbhqyllqSVWgA7%2FpRMVt3nB4fyXfIhQ%2FlR4unU9c0%2BTS3CuCJH5j0HLnmQYgq2US3UW6DGilu%2BHj6uXHaU%2BfmbSJXZKuipJ1KgB2KDi%2BRntEo3lYnIOq4sedK2Zk%2F%2BqyTJbLDvlzXX17qqROWCb%2BPy%2FsQ1PQ10tcJm%2BineI61cSdWsrefyHrXPuQCgmxKzuTAhK%2Fh9okUpzk8glKLXS5SySBeQBdWs1pLlj8QnKWeGIY%2Fy7jvvGoDKUffV0xB59%2B7%2FaMNqbmsIGOqUBPXiDLdze4nkNkfMSKuCEki4nAQOeo5rJQspdh%2FZhOwB7BrG6ANb5kYCSQbuD6497OJoUjoE8ItXuIVwfjqOMHswTPy3aRmAYY5yBv4j0HWvVonLFPCCbX1DUajoxQoPte6AT6U01hdNG7WULkSV8fFzFazPPYZBvfA%2B7k%2B5DYnoJL3Y%2BBxPNebXvf4W96H0AbdxQ5KRR8ZyvhnJ315TAU%2FS0tWHL&X-Amz-Signature=e2a839f4f1ea79a64347e1cbfafb68c819b071ce31c94acf142e62d82b4c27f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
