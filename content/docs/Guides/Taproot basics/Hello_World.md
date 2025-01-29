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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSWDEVN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpXiGuuhlMYMAkc0qfpESr5b74mYQx2ib2TCf6tvmNkQIgKo7yS1PJfoKvJyi%2FbX2wGIwAZfLDM9UX%2F81ZviFgFZ0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiU8nyKmsrGDJW%2BByrcAzfgMPfbzljcU5e1j8iKN5hpoQjdF%2BhVyAie6IuSQIZEcZK16vnvN80LFP9sp%2FWqDDWmcwOL7ptXoaHRT6wUb2h6VMvP%2BLeu4YPqK%2FeVNf3%2BQIbkieJR6JF2Ucn6ZGfofP4BkKJyPt3sc1EHBBG1Dd179OCCoqT3dZUiT40sqe4XkUTOICOj7IAAHR95OVWKEw5tDxVIq16llvaP8nrc3AyxZQr4bc%2F1SoUdgS%2Fbw8OO5QUjS%2BmReJOo9%2F29cjf1wkLh4lXzK5W318kq%2FFZVn89dym9MFRfl1hlO%2BFwtuk0qlXkBdoIEIEILY68cWElUccmHkck3RkE4L3N2V6AukrGPQkSkzf3qHh9cjx5rNyJQxM00OPmiOPjE6IkIa%2BI7XM61ySsLKKLugEF%2FsUlgB2XemOPQpNSO2Vuz4IsLSrBMeqGdgL2I9z%2BHcbV%2BMPNCAOry2Nk1O%2FUb2oiLNDpYzAxXRRi%2BmI6vJMCl5BXI0l2SXB1PeCu7S4ricXyIi4xCBZaelr9IRBg8Ntn2Z9mmzJi4XfbyInm3WZW1vQ5B6GaNBMc3TWZMfe57JGnX9zev01J2agid%2FcYNaKa3cHhGWDa2%2Fuz6DqUS4QloaC94rWZs3qRJkMXsgQHsUQV2MK%2BG6bwGOqUB1Q3iUH9ERFdXBb4zX%2BgA1FMr83ee1AIIrW99%2B5aHxuNKnz8%2B5nY7T36UaSLn5lvV9BV19qvnRkiqu3coo38U3v7xJQ7L91YqMGlpfgtpkYf%2BW2920QjAGAUCpyOosVdUn1pyEuxPLMzyfHIinImj7XxjjymgvLeQn9bJgLuGoShsWYQMYcRGWN3ykCD349keTLQGCvRKUJNCJ7ayZBnr%2FzAY%2BIT7&X-Amz-Signature=52f1db19848766419a950150baebce736cfce3beea12b49918fc730072c6ed02&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSWDEVN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpXiGuuhlMYMAkc0qfpESr5b74mYQx2ib2TCf6tvmNkQIgKo7yS1PJfoKvJyi%2FbX2wGIwAZfLDM9UX%2F81ZviFgFZ0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiU8nyKmsrGDJW%2BByrcAzfgMPfbzljcU5e1j8iKN5hpoQjdF%2BhVyAie6IuSQIZEcZK16vnvN80LFP9sp%2FWqDDWmcwOL7ptXoaHRT6wUb2h6VMvP%2BLeu4YPqK%2FeVNf3%2BQIbkieJR6JF2Ucn6ZGfofP4BkKJyPt3sc1EHBBG1Dd179OCCoqT3dZUiT40sqe4XkUTOICOj7IAAHR95OVWKEw5tDxVIq16llvaP8nrc3AyxZQr4bc%2F1SoUdgS%2Fbw8OO5QUjS%2BmReJOo9%2F29cjf1wkLh4lXzK5W318kq%2FFZVn89dym9MFRfl1hlO%2BFwtuk0qlXkBdoIEIEILY68cWElUccmHkck3RkE4L3N2V6AukrGPQkSkzf3qHh9cjx5rNyJQxM00OPmiOPjE6IkIa%2BI7XM61ySsLKKLugEF%2FsUlgB2XemOPQpNSO2Vuz4IsLSrBMeqGdgL2I9z%2BHcbV%2BMPNCAOry2Nk1O%2FUb2oiLNDpYzAxXRRi%2BmI6vJMCl5BXI0l2SXB1PeCu7S4ricXyIi4xCBZaelr9IRBg8Ntn2Z9mmzJi4XfbyInm3WZW1vQ5B6GaNBMc3TWZMfe57JGnX9zev01J2agid%2FcYNaKa3cHhGWDa2%2Fuz6DqUS4QloaC94rWZs3qRJkMXsgQHsUQV2MK%2BG6bwGOqUB1Q3iUH9ERFdXBb4zX%2BgA1FMr83ee1AIIrW99%2B5aHxuNKnz8%2B5nY7T36UaSLn5lvV9BV19qvnRkiqu3coo38U3v7xJQ7L91YqMGlpfgtpkYf%2BW2920QjAGAUCpyOosVdUn1pyEuxPLMzyfHIinImj7XxjjymgvLeQn9bJgLuGoShsWYQMYcRGWN3ykCD349keTLQGCvRKUJNCJ7ayZBnr%2FzAY%2BIT7&X-Amz-Signature=c98efcbd5134936c91632d813823016d3487d37e724048ff96e7d70df781393c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
