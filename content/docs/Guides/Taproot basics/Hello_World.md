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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVKULM7V%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjk1Is2ARJfR5ClvKp%2FVZuoAYzq%2BBfurE7wP%2B%2B6PhFAIgOFN8%2FMZSLocirt7gGOwX0MPl6QKPKbv3%2Fx4SBRDIDNIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFv9nt3%2FSM7QCWUpoyrcAx3AEcphvvSPXFRm%2FilDjO4xv8AREtRDan7JvkKey5sEWKCKT7zTLxdmBm%2FAFNGRcBTCt7zVu3s2SPXZH5d7aBpU8PGUQP7BHh4pctaHn6Cikvt2K1R0AmldjxBW5Cs%2FmfLBERyO21RJKD14bdlBXpqb90lpMunKSZKLEAOFjW%2B0VWdv5v9pFu%2BjerKsLznhB3bCWkT%2FNnW%2FWsUXQGE4YS4F4ctGO3XAQN6NWTl0kCM14DZCIj0QZFLvw2CBAHHhHVloBlEzMHikTNjsbtQa9XGSmVk%2BU28qH6M5OsLXA%2BXFycWop4%2BqXMQNyoz9%2F6Emv4LqzkxW12MgaVz0QngEQyta9BnOPi3Zyvx0%2BsaYQwrk2ThAt43TjaZEYmrA7AY4M453OhppL3ZrhkM28kX3mhLmd806LXykZ4lJHo8amoWK%2BQeqMsoWH4vyT7PxeW2oraJJGV7NJsCiI%2B%2BFMcGxeYfp95usvW4SQebzM8wB56EyJw9QBjxFejp4wE7JhSxUlSmJoBNF4DHFw1RSiYka8NfhAk11Ccty1NjFozMal4cHFwvu3myKhSag7vND%2BfBlSyhrNVNno2YgQgJ3Lo4hHI0hm4w%2ByKkcDWY%2B4f7fDJPZRtZkYYnFNvT0R2HJMK%2Fum8EGOqUBJRGyMea6IPaho3MX490cfIs2dDoR7ZaPzJib1n02yEzEMIcBmGIbNJvAGLemVkLJOtq0pr8Pa3WEL%2BkmN2m31yJJUbQCLiJCvJde9CuesUiKhkOPgx0LB8sk7ToJXTJd3OO2EiKqJMhy63OAqhriBNre5uFGuTQ7nLpGCJB6wIxq6tzGEDUuPKa8AUwsGgD0lYcySmmrGTtSEecTtsbMjAQCEZnX&X-Amz-Signature=54e75c270aba7f5963801824c77a2fe28937ab681aa928b2c1b7d76a238bec77&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVKULM7V%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjk1Is2ARJfR5ClvKp%2FVZuoAYzq%2BBfurE7wP%2B%2B6PhFAIgOFN8%2FMZSLocirt7gGOwX0MPl6QKPKbv3%2Fx4SBRDIDNIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFv9nt3%2FSM7QCWUpoyrcAx3AEcphvvSPXFRm%2FilDjO4xv8AREtRDan7JvkKey5sEWKCKT7zTLxdmBm%2FAFNGRcBTCt7zVu3s2SPXZH5d7aBpU8PGUQP7BHh4pctaHn6Cikvt2K1R0AmldjxBW5Cs%2FmfLBERyO21RJKD14bdlBXpqb90lpMunKSZKLEAOFjW%2B0VWdv5v9pFu%2BjerKsLznhB3bCWkT%2FNnW%2FWsUXQGE4YS4F4ctGO3XAQN6NWTl0kCM14DZCIj0QZFLvw2CBAHHhHVloBlEzMHikTNjsbtQa9XGSmVk%2BU28qH6M5OsLXA%2BXFycWop4%2BqXMQNyoz9%2F6Emv4LqzkxW12MgaVz0QngEQyta9BnOPi3Zyvx0%2BsaYQwrk2ThAt43TjaZEYmrA7AY4M453OhppL3ZrhkM28kX3mhLmd806LXykZ4lJHo8amoWK%2BQeqMsoWH4vyT7PxeW2oraJJGV7NJsCiI%2B%2BFMcGxeYfp95usvW4SQebzM8wB56EyJw9QBjxFejp4wE7JhSxUlSmJoBNF4DHFw1RSiYka8NfhAk11Ccty1NjFozMal4cHFwvu3myKhSag7vND%2BfBlSyhrNVNno2YgQgJ3Lo4hHI0hm4w%2ByKkcDWY%2B4f7fDJPZRtZkYYnFNvT0R2HJMK%2Fum8EGOqUBJRGyMea6IPaho3MX490cfIs2dDoR7ZaPzJib1n02yEzEMIcBmGIbNJvAGLemVkLJOtq0pr8Pa3WEL%2BkmN2m31yJJUbQCLiJCvJde9CuesUiKhkOPgx0LB8sk7ToJXTJd3OO2EiKqJMhy63OAqhriBNre5uFGuTQ7nLpGCJB6wIxq6tzGEDUuPKa8AUwsGgD0lYcySmmrGTtSEecTtsbMjAQCEZnX&X-Amz-Signature=424791f9e63fe45cf4aa1eb8e96f3db83c609aa836f60aec9d825a9e50d5534d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
