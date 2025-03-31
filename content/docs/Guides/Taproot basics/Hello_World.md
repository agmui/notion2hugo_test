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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO44FLFZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDGMCv6QyS418QbOVrEERCnKoY3GcJzmongvGDh8TvF5QIgPzv59nM5zAyYs8F5ReWBYIe41JEbHWCnQe25XpJGUXIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7hHCjQcUCciY%2BshCrcA%2BjKTeynKNatXrybKdN9KW%2FqQSs7RftqTQSn8Wzih8YZtzREP2AFno%2BUGE58rC2T%2FbnJwXENYN0EmZ4vwBfPUR8%2Bs2NDRz3pqod0GwlKOTtO4SgkcoxFihtSPSPwUWGacFDDxL0lbGig28iTxdUfItXa%2FPbF3atqcJmVBQJEbjhOteWgQQemjZGxSteXxT0wpXAgg5nQeDXsJkVtBgEY%2F8UQyIJyjy5QqIHaZkjf6W79bOnWUHwfzf92z70Y1tkG6qnqW4B2nKJx8TSr0CXf%2FIFQfOscD6kDQrsR3Nimr3U7F7mI7q7Iu%2FV5QK5Xmt7iI24RQvj2qJrrVrwrR81Am8mdH5kQ5SU531p2VDcKEVdhpXAdnWksg2ciYzmioLSyVghG4e5kQTYZYSiVloBzWBGFCHlNBOGwZnPJnX4IWoXYBLgn2IZw1SKgQLPK1wk9csd4A3lVBpdF04%2FmkDeMr7v8DTR0Eh4IXRNMo7cPkwvcLn1lKP9kXJcJFfJzYahXV8%2FG0wrUBh%2BUY%2B%2F1VUUwvu3Dk6kuxvQcq%2BxFiWuKdwGCguOBee0tMbd0KrSlu4ctB4gn7twrq7Id6fLUawQxlJj8yC%2F7nMTwuJJvJCXE4S8kA%2B89lq7byTbhjZ5gMKS7p78GOqUBe%2BH6fDwxrhu8Bn03XAtrWchqPQFyKYGHVpnwfp2%2FIru%2Fn9XpT9Ffnr0HqWCv9X8oLnRTHW6e%2FccEdivW2FYvKY%2FOq16ykvGZQivlKBIhqwRhIYzC%2FYGNcnvgyzIOiWAj9gNQ%2BlILs8vx%2F5SepiRZN1EDp9Kf7tfUB7jpRsIaU0TmSxuBDsIARxnos6alvQnpYutQzKLs%2FbhWaDaECsmCpSCV847D&X-Amz-Signature=8d112671c4a481da6b0b3f4d0c075bb2ea72c9610f1133cb06cab4c84a0bf296&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO44FLFZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDGMCv6QyS418QbOVrEERCnKoY3GcJzmongvGDh8TvF5QIgPzv59nM5zAyYs8F5ReWBYIe41JEbHWCnQe25XpJGUXIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7hHCjQcUCciY%2BshCrcA%2BjKTeynKNatXrybKdN9KW%2FqQSs7RftqTQSn8Wzih8YZtzREP2AFno%2BUGE58rC2T%2FbnJwXENYN0EmZ4vwBfPUR8%2Bs2NDRz3pqod0GwlKOTtO4SgkcoxFihtSPSPwUWGacFDDxL0lbGig28iTxdUfItXa%2FPbF3atqcJmVBQJEbjhOteWgQQemjZGxSteXxT0wpXAgg5nQeDXsJkVtBgEY%2F8UQyIJyjy5QqIHaZkjf6W79bOnWUHwfzf92z70Y1tkG6qnqW4B2nKJx8TSr0CXf%2FIFQfOscD6kDQrsR3Nimr3U7F7mI7q7Iu%2FV5QK5Xmt7iI24RQvj2qJrrVrwrR81Am8mdH5kQ5SU531p2VDcKEVdhpXAdnWksg2ciYzmioLSyVghG4e5kQTYZYSiVloBzWBGFCHlNBOGwZnPJnX4IWoXYBLgn2IZw1SKgQLPK1wk9csd4A3lVBpdF04%2FmkDeMr7v8DTR0Eh4IXRNMo7cPkwvcLn1lKP9kXJcJFfJzYahXV8%2FG0wrUBh%2BUY%2B%2F1VUUwvu3Dk6kuxvQcq%2BxFiWuKdwGCguOBee0tMbd0KrSlu4ctB4gn7twrq7Id6fLUawQxlJj8yC%2F7nMTwuJJvJCXE4S8kA%2B89lq7byTbhjZ5gMKS7p78GOqUBe%2BH6fDwxrhu8Bn03XAtrWchqPQFyKYGHVpnwfp2%2FIru%2Fn9XpT9Ffnr0HqWCv9X8oLnRTHW6e%2FccEdivW2FYvKY%2FOq16ykvGZQivlKBIhqwRhIYzC%2FYGNcnvgyzIOiWAj9gNQ%2BlILs8vx%2F5SepiRZN1EDp9Kf7tfUB7jpRsIaU0TmSxuBDsIARxnos6alvQnpYutQzKLs%2FbhWaDaECsmCpSCV847D&X-Amz-Signature=a24ca74008f86bec998be0273cb424176c13d8c36139cbb10fa8bd32088f11c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
