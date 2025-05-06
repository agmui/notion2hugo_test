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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCQZ5CX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgIO%2BLqvvoYRC7UzUpmmx8F2XXSi5YB0PXgGg%2F5ulHLAiEAlRKAHnu6OSRlv2ZLqoQ3XWCJy6RG%2Bh4FqlxEzj3C0xQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMAWXSpnR0M6w4tWmCrcA4gEv1zSFQBPRPe5O3u3A%2BYH6KqO%2BSNKBwE3B4ktEjV6r%2BvxB6OPnTJIIWNRh9r%2FpoXXqUtR4LvihsYtx14kd%2BMMxWabV2Lw05gxrNjV79P02YuyOCQq1%2FnP38pBWA3FUYpjeeWudjpncB%2Fu%2BWwDiEFpV73QaRx5ka5NtNnxxS31UgcBUEIQfXXWuqly415kht6aBVnU8CbUWkN7CzZV8Q5nbwi%2FxqS2XOpI7nbO5FN2doIvNbHVV9Rf2N266iZ%2Fw1VrMgmGW55YgIwFgWDY1hee%2BQPLzXZk2wJ%2BjtwoEgcVTZ3tj2QQiE%2Fw3hs%2FZD9mNwdFpljItXmEnIPxFHXKoQWjkKvIn0gnOgPAHyGb8JJAWm6FHEal6j6%2BmHX3NLZDaeFpo2EYzJ%2FEFtBWu%2BJ1u3EIM1hH9wxu34tt%2FaYf7cGYasoSQfAV5ElOirryqkV9yr7jWtK10HVX%2BhDEhYkozfVdkhLPXVpKlF9w3OOB%2FYFQHBmkGFyTpkRiYr5qB3fhN0uTD6PQnNj%2FBUZLdXTRalV%2FQjsBS2gkAsIwSct%2Bax7zkUQJQ8QlBP1Q9BQ0IDXx8BikE0bOq7rxqeZgjHB9K6HH6XqRRpXIIDk8%2Bewro0QnNPPPqX9mP%2FzkvP8HMIez6MAGOqUB4nk%2BcipNcMb5eDcyd6MP0y9QZmpYewfvCQVMWfBAhs%2BOh%2FE6jfFjyNI%2F0gQ9E26QFh1un13j%2FIcsydTQfpoX4QhdlFfQZMHjQEj1XgsVY%2F94JBL5uq79ViDJAsByfCmUuiTE75rXQSC1wK%2BGzUDP9HC9D%2FAqqOosWC58eu86aEZ8AJ3uyPcRpvdA5cEOHtZqBAF54AgeX2HCr5Mgehru7jBPpzzA&X-Amz-Signature=43eb9cc7998e79f79b4e5cffa606c15e2741c94619bb1ae0eeb8d0db109fb255&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCQZ5CX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgIO%2BLqvvoYRC7UzUpmmx8F2XXSi5YB0PXgGg%2F5ulHLAiEAlRKAHnu6OSRlv2ZLqoQ3XWCJy6RG%2Bh4FqlxEzj3C0xQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMAWXSpnR0M6w4tWmCrcA4gEv1zSFQBPRPe5O3u3A%2BYH6KqO%2BSNKBwE3B4ktEjV6r%2BvxB6OPnTJIIWNRh9r%2FpoXXqUtR4LvihsYtx14kd%2BMMxWabV2Lw05gxrNjV79P02YuyOCQq1%2FnP38pBWA3FUYpjeeWudjpncB%2Fu%2BWwDiEFpV73QaRx5ka5NtNnxxS31UgcBUEIQfXXWuqly415kht6aBVnU8CbUWkN7CzZV8Q5nbwi%2FxqS2XOpI7nbO5FN2doIvNbHVV9Rf2N266iZ%2Fw1VrMgmGW55YgIwFgWDY1hee%2BQPLzXZk2wJ%2BjtwoEgcVTZ3tj2QQiE%2Fw3hs%2FZD9mNwdFpljItXmEnIPxFHXKoQWjkKvIn0gnOgPAHyGb8JJAWm6FHEal6j6%2BmHX3NLZDaeFpo2EYzJ%2FEFtBWu%2BJ1u3EIM1hH9wxu34tt%2FaYf7cGYasoSQfAV5ElOirryqkV9yr7jWtK10HVX%2BhDEhYkozfVdkhLPXVpKlF9w3OOB%2FYFQHBmkGFyTpkRiYr5qB3fhN0uTD6PQnNj%2FBUZLdXTRalV%2FQjsBS2gkAsIwSct%2Bax7zkUQJQ8QlBP1Q9BQ0IDXx8BikE0bOq7rxqeZgjHB9K6HH6XqRRpXIIDk8%2Bewro0QnNPPPqX9mP%2FzkvP8HMIez6MAGOqUB4nk%2BcipNcMb5eDcyd6MP0y9QZmpYewfvCQVMWfBAhs%2BOh%2FE6jfFjyNI%2F0gQ9E26QFh1un13j%2FIcsydTQfpoX4QhdlFfQZMHjQEj1XgsVY%2F94JBL5uq79ViDJAsByfCmUuiTE75rXQSC1wK%2BGzUDP9HC9D%2FAqqOosWC58eu86aEZ8AJ3uyPcRpvdA5cEOHtZqBAF54AgeX2HCr5Mgehru7jBPpzzA&X-Amz-Signature=bce5e5904baa4765a896e5c0ec03d32bcbb96685db3dd55c733498983dfbf3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
