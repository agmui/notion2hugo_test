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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2SIYX2%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGmSBsrQeKBJe3YrVizNzPz3kOv872f1q%2BnnpJWarsX5AiAL6nP9R6SWX6Vrn%2BR0aYVQfhsZf0Nmzndx3A35ayJTRCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2gczRuoFfBXLsimiKtwD80UK8G%2F7Tez0HtGNWgl3dy10zL1h8Fne3BqdRDt%2BTvXGHleJfD0fYqmHzEKqLD11Sd72%2FvbeEUhUBxYlfeseMLBMh2XKFaie6DEF2h2nJMnQZnPRqwxH%2FUBPsDfEBzu%2BQyIY2DHXublkHOv9YwjzZ7qVFhWQVLC0Nw1k7NUyRHCq0VdQaTkGlZVDb%2F5Hio8qN%2F76d762YVH6Qjk9XSMXt01wV8CSqHIFx8q7ON9VvjydJINRRFDjII225AuZCJV6Q%2BBfjq1%2BVHHyRm6sYKAtiyzIgkMcn9Y1RF0P7TWFFQVVrzPkylb5zNHDmDvHU1jsZGce2IUkGld5e0E%2B76F9ZG0fj%2BXZlWeE8sKMVbuYzNQky%2FEgfVYgKF9oA%2Bo4uSxwdL2evsXz4ex8gQlwng%2Bp8w6BEr9qG3WcvY8izUBcH1IcabZkZIbbkcclxJ1y3GSd8ZOsz7%2B51saQSpNg9ZFfsGsldW1gh3qcrkviAzdyl4yPM6iLucGbDzf9wk0fb1owULhSbA4KRz1%2BDmSHbf1zjOjUrJzqyFBCcSNxUIu%2FTNkXElJVYs6h0LGcLvLxUTAotDYkGaSfEkV0147xuMBB%2B3vTPg3Ca%2FtfkZ8AAaD1vBYnDF4pfSMoZp8Id10wnM2ExQY6pgFkrJCS%2BfZECOIT1ag%2BU06VDS1WyOcH90GSYw4HT9Bi71b69cAxcIDdIohTRFlxzAZe3eK73cCCr0Ax25kwHfaLF%2BvclrtfxTC1q7HRMzrxnqqrXNI6xs1sJJZqlZ1lEIj%2Biv0IbfdZwa8IzrhNp8igfm63ejLkgh%2Fh4P6wWsZIrbEEIE4WwIwzSlJQfD1%2FTravoro5UZFIEYrPeLgPaWnvIfVai%2BV2&X-Amz-Signature=c581bba039952a3258d6b75923082ec5f528fea27db16600f4236a5dfb7c5e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2SIYX2%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGmSBsrQeKBJe3YrVizNzPz3kOv872f1q%2BnnpJWarsX5AiAL6nP9R6SWX6Vrn%2BR0aYVQfhsZf0Nmzndx3A35ayJTRCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2gczRuoFfBXLsimiKtwD80UK8G%2F7Tez0HtGNWgl3dy10zL1h8Fne3BqdRDt%2BTvXGHleJfD0fYqmHzEKqLD11Sd72%2FvbeEUhUBxYlfeseMLBMh2XKFaie6DEF2h2nJMnQZnPRqwxH%2FUBPsDfEBzu%2BQyIY2DHXublkHOv9YwjzZ7qVFhWQVLC0Nw1k7NUyRHCq0VdQaTkGlZVDb%2F5Hio8qN%2F76d762YVH6Qjk9XSMXt01wV8CSqHIFx8q7ON9VvjydJINRRFDjII225AuZCJV6Q%2BBfjq1%2BVHHyRm6sYKAtiyzIgkMcn9Y1RF0P7TWFFQVVrzPkylb5zNHDmDvHU1jsZGce2IUkGld5e0E%2B76F9ZG0fj%2BXZlWeE8sKMVbuYzNQky%2FEgfVYgKF9oA%2Bo4uSxwdL2evsXz4ex8gQlwng%2Bp8w6BEr9qG3WcvY8izUBcH1IcabZkZIbbkcclxJ1y3GSd8ZOsz7%2B51saQSpNg9ZFfsGsldW1gh3qcrkviAzdyl4yPM6iLucGbDzf9wk0fb1owULhSbA4KRz1%2BDmSHbf1zjOjUrJzqyFBCcSNxUIu%2FTNkXElJVYs6h0LGcLvLxUTAotDYkGaSfEkV0147xuMBB%2B3vTPg3Ca%2FtfkZ8AAaD1vBYnDF4pfSMoZp8Id10wnM2ExQY6pgFkrJCS%2BfZECOIT1ag%2BU06VDS1WyOcH90GSYw4HT9Bi71b69cAxcIDdIohTRFlxzAZe3eK73cCCr0Ax25kwHfaLF%2BvclrtfxTC1q7HRMzrxnqqrXNI6xs1sJJZqlZ1lEIj%2Biv0IbfdZwa8IzrhNp8igfm63ejLkgh%2Fh4P6wWsZIrbEEIE4WwIwzSlJQfD1%2FTravoro5UZFIEYrPeLgPaWnvIfVai%2BV2&X-Amz-Signature=f96344721f1214f2d3b8f3ddd342e920e11bdc5118951627d9a37118718a583c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
