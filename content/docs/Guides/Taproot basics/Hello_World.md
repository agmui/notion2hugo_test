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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZISDF%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcRMNpRFZji9eVnrtiodYhNhRR9u%2FpvcZRFo%2FxyEkcwIgLSnLlL2OiOePertIcgUqSrvjt1GCt0B4zwPWgp0mfMcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELxRJdxFsDEG60YhSrcAypzZB6ynHZn6mLwOElQGilg%2FzixO52%2BqI%2F6XnY5Ri8IgqzoUB%2FgefuOU63WcuFq1%2BrFmLybUY8k6HOKtwMY07SJbOw9cBHJ3I%2FRdqcPrH0JblELvTeHIf1%2B5mkksQmQQsqKqX9wduIrtshCflecjQE2enbh%2B%2BPlSf1lzb7%2BGtERUM25UdYgfGaqFCWSIt1Ck5pYHlUyp%2F5vBcyRkqv223V0ViDafyl%2BDFfCEUEfxXZ7gEjSMTaKSUsLGy9DFyoIZu5FnKOEHELW6pYDnwny7pst92ICaAwwS5Rx8bSz9yj%2B0HmP%2FMre0fU%2FoKv9CqFn37RTkx%2Fk9KrZ0R9FEunJnnfc0LVsuR%2B2IRlZ3jB60FS5Jo5iYiuXVvR3qsfyO73fY%2Bdu1CH6KhBNeXbvnOXR1NwrvwUwcDsNiw4nBvEV2fPT10c0dNd2qXjGe8A2PVrCKQv8BDUgsaTrNq%2FPQUDohzUzZUDOIKruTHD1I7divqTq1OhYDyGCWrkWbuOeBPlInj7wUh3HtQW%2Fayf6LeeaqBFFfRLKLQ18wPstOF2xUOcBlHKGJuSZhwzPezzBtgITJ7%2BtO93nzVEaR%2Fy2gQcYMl8Cra4gJA3Hlo1lN6g6wio9W7KEHynts4%2BU12HfMM3Jh84GOqUBbdm0Ym2uPZVc8KPDWhsviQS5jFED54lHaCfwHidFDMP3obzGX8IIn15LJZbMBWUWWIyj5VjggVaJM%2FurSM9MPDzY6kgV0LXcYthoiAUtOPYyWyuNa03U3DIwJkLgS3WGJHcmgx%2BGqSnrIXyFaqoWP8t2AuNDOz5R8U73tXJq4B08rD6RyJ13yey69ImDfn%2FXqSG5s9NViNsRU3K10Fhq6TjXOR4X&X-Amz-Signature=45892f409cf2b3e3ae9ce2959db67ad654950d96fafd2a767f15173a10d96e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZISDF%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcRMNpRFZji9eVnrtiodYhNhRR9u%2FpvcZRFo%2FxyEkcwIgLSnLlL2OiOePertIcgUqSrvjt1GCt0B4zwPWgp0mfMcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELxRJdxFsDEG60YhSrcAypzZB6ynHZn6mLwOElQGilg%2FzixO52%2BqI%2F6XnY5Ri8IgqzoUB%2FgefuOU63WcuFq1%2BrFmLybUY8k6HOKtwMY07SJbOw9cBHJ3I%2FRdqcPrH0JblELvTeHIf1%2B5mkksQmQQsqKqX9wduIrtshCflecjQE2enbh%2B%2BPlSf1lzb7%2BGtERUM25UdYgfGaqFCWSIt1Ck5pYHlUyp%2F5vBcyRkqv223V0ViDafyl%2BDFfCEUEfxXZ7gEjSMTaKSUsLGy9DFyoIZu5FnKOEHELW6pYDnwny7pst92ICaAwwS5Rx8bSz9yj%2B0HmP%2FMre0fU%2FoKv9CqFn37RTkx%2Fk9KrZ0R9FEunJnnfc0LVsuR%2B2IRlZ3jB60FS5Jo5iYiuXVvR3qsfyO73fY%2Bdu1CH6KhBNeXbvnOXR1NwrvwUwcDsNiw4nBvEV2fPT10c0dNd2qXjGe8A2PVrCKQv8BDUgsaTrNq%2FPQUDohzUzZUDOIKruTHD1I7divqTq1OhYDyGCWrkWbuOeBPlInj7wUh3HtQW%2Fayf6LeeaqBFFfRLKLQ18wPstOF2xUOcBlHKGJuSZhwzPezzBtgITJ7%2BtO93nzVEaR%2Fy2gQcYMl8Cra4gJA3Hlo1lN6g6wio9W7KEHynts4%2BU12HfMM3Jh84GOqUBbdm0Ym2uPZVc8KPDWhsviQS5jFED54lHaCfwHidFDMP3obzGX8IIn15LJZbMBWUWWIyj5VjggVaJM%2FurSM9MPDzY6kgV0LXcYthoiAUtOPYyWyuNa03U3DIwJkLgS3WGJHcmgx%2BGqSnrIXyFaqoWP8t2AuNDOz5R8U73tXJq4B08rD6RyJ13yey69ImDfn%2FXqSG5s9NViNsRU3K10Fhq6TjXOR4X&X-Amz-Signature=44126097950b973bf307a718bde8a45d410ae27f76b6c890d78ee4dbbf84f195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
