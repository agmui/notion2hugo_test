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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG23MXZP%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgUEaCPCuM0PlFYd9tJorCQwF6AbiiWVBB%2FIK9T%2F3HTAiEA%2B1nWqFcU95Rg1R6rA9HIJhO6IKY3kyjQXaT0opK3Bf4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDI5rYI%2BwQqNOIY5aGCrcA%2BpznUQhmbKJxwo4DMY2IV%2BspoEzW9usjOLh9n0S56w4B7BiDP4yOBcqlR1%2BJa2I6fyZVAwmB1bmhcgHxyoqPOHsJLaiQAReJHrgX1GFNI3vFDjf3RfYLjUk576TTm4NuEnqPCGMjYpOAOh9u6BOpQw%2FkQTXq9LG4RWgUSfPioxPyiA0carpIducMJOrfVQ5PDvPEQVRUVFOI%2BG%2FI5gr3IV8%2FvA2TnuH6ocoMXvPrvx%2F%2Be6S4rjWp51Lm9AM%2Bz9QvKz0VU0UPTjEqstlQO6EKBxTzAWUXEI3bH5xBQPV2nvYfCpQgIvIoiSZue8QDRDeIjREBOEOJtJ0HtSi7DyH%2BZGssMBJOV8ZAo0dXV4gNiSfmhY88dOQT20I6biIW1edXp7qUkWBpJtu%2BjxiKusMmQYWQH4I5Ev0rrpYwVRFOMmO0CXld0CnA5r%2FOoXb%2FIN1%2Bp6bJr8ExFjuFzD2mhwJHJyaIFm7jyjY9TFUGk7XqRJQvI1xXTQ7%2FmDRncul%2FD4UR3ofDO5QxyyYAtAqtVsNpaAvHcsXJD4yTXQtG7NkA%2FypS6CrQ99HzNbQFjSXiOKI%2BROqzKrNT9YdhNdpH6UgX%2BRRR959Sm4QNL9j%2BRFZlk%2FavRduG1a6vtBUxR%2BEMKiujs0GOqUBRWqsrJa5y22a2NIcZse5heDxtd9ia5cU9k4hxZDhkDFa6PR3NWz5c9Q2w5wtiE2ojAGMUHDpeWjsYhXgcTd0%2BReiSvZDziRYIJnQiwrGTry%2BXlnf2TwR1haUrWkm%2Bhqlt5SNMKok0pU7UepHw%2BagKEjUoEMtqilDWIpMMFMiy80IoR4C5MGmQNH%2BE496MraQLuuJbd7E%2FNfKLDpLxbU1A3NgwVMh&X-Amz-Signature=8ad4bf5be8be8091ac848a9531312f2da4e06f03005059f418e0f20fc4aea168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG23MXZP%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgUEaCPCuM0PlFYd9tJorCQwF6AbiiWVBB%2FIK9T%2F3HTAiEA%2B1nWqFcU95Rg1R6rA9HIJhO6IKY3kyjQXaT0opK3Bf4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDI5rYI%2BwQqNOIY5aGCrcA%2BpznUQhmbKJxwo4DMY2IV%2BspoEzW9usjOLh9n0S56w4B7BiDP4yOBcqlR1%2BJa2I6fyZVAwmB1bmhcgHxyoqPOHsJLaiQAReJHrgX1GFNI3vFDjf3RfYLjUk576TTm4NuEnqPCGMjYpOAOh9u6BOpQw%2FkQTXq9LG4RWgUSfPioxPyiA0carpIducMJOrfVQ5PDvPEQVRUVFOI%2BG%2FI5gr3IV8%2FvA2TnuH6ocoMXvPrvx%2F%2Be6S4rjWp51Lm9AM%2Bz9QvKz0VU0UPTjEqstlQO6EKBxTzAWUXEI3bH5xBQPV2nvYfCpQgIvIoiSZue8QDRDeIjREBOEOJtJ0HtSi7DyH%2BZGssMBJOV8ZAo0dXV4gNiSfmhY88dOQT20I6biIW1edXp7qUkWBpJtu%2BjxiKusMmQYWQH4I5Ev0rrpYwVRFOMmO0CXld0CnA5r%2FOoXb%2FIN1%2Bp6bJr8ExFjuFzD2mhwJHJyaIFm7jyjY9TFUGk7XqRJQvI1xXTQ7%2FmDRncul%2FD4UR3ofDO5QxyyYAtAqtVsNpaAvHcsXJD4yTXQtG7NkA%2FypS6CrQ99HzNbQFjSXiOKI%2BROqzKrNT9YdhNdpH6UgX%2BRRR959Sm4QNL9j%2BRFZlk%2FavRduG1a6vtBUxR%2BEMKiujs0GOqUBRWqsrJa5y22a2NIcZse5heDxtd9ia5cU9k4hxZDhkDFa6PR3NWz5c9Q2w5wtiE2ojAGMUHDpeWjsYhXgcTd0%2BReiSvZDziRYIJnQiwrGTry%2BXlnf2TwR1haUrWkm%2Bhqlt5SNMKok0pU7UepHw%2BagKEjUoEMtqilDWIpMMFMiy80IoR4C5MGmQNH%2BE496MraQLuuJbd7E%2FNfKLDpLxbU1A3NgwVMh&X-Amz-Signature=d5de64fbc71decee15d241d5ce6473da0759ca61d2911be2dc81a2048ae58c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
