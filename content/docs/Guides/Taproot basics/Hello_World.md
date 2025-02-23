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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ECB4SF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc5y55kdWMgaPyxshkG53xKQ0ZiIqgdsPjSu80YcTNjQIgfwOP4kumdWfXyY3bkYnDGZqfroDuRNqYVeB50wH%2FhGcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGIN8zjWpEcMxsfR6ircA5BPzXdX%2F55uTdh3FayP%2BBGyRyGV5YEyaeBAPOnpU4dW9nVvv3aSdUmNTg3uNq5EYoXOWYLLqrYAAi2zUDlSqUltgHgN4MhuVruZeMz7J3lOofovp8JqOPhyBIJTRbkRYCtEOuIku4bBu999F15XPbN490dZY21qWQ7hdqNrnL2IZd%2FTYm2pxckBo54QCGViJC2lPOmi0PYa1IpGT4y725qaG1%2BwqFODIRq1uGcwUklC4GwhdJQbdcUzhIRlJbdN%2BCAfEeHSur7Aks6kWYpD%2FD4JIxs3vA4P6TL7gXF%2Fn%2FIJJqa1wOXfDl3gjuTtA4hX08qOm0Fq%2Fz8X6KhR1YHI3rxH97ylEvco2I%2BjSgEuD7LboY%2BCsteD66dK5IvjknCO4FhLd310BWPdbT%2B7B1bPRRyT2uzFHmCZPWdA3shIvZDZbZ0I0Ud0dZQWZbM6tqIoBYx8eTE9RrYqi%2Bj0JYwh62BWTkzgUCPW3%2FdRzqYHrNumvqnEvSviK%2FNhjAwEiSGPNa6IYY1p%2Fu4uYxQTQDcJ0BoruLCfjwZOpkpxg3AskjzzxZyb%2FIFSigD%2FZjIz1NLj%2F5HPt8uvesKNrtcGxk16djAGvPcMrpHbPzF4wcHJs8kfnkjbDZqv6JvduvEnMNad7b0GOqUB43Vml1RZl3%2BbviYczHlH0Y99FbENILPwOpGUOgkgovsMC0oW4cydCDFJBEIyMnXl4GCbRuetEHNTzY76vL0%2BEm7389x804N16ThFtDRquZ%2F6%2BwwiXQLUMk17qIfwCSrRBTR%2FCzFYIEO9kMTn0VPz8jP9kdP%2FlheyJLESIUBgmRFzoeqhnIRLqvRKnNuEVRTQKsdglFiSZTBDQxzbAY0%2FEYsz4axQ&X-Amz-Signature=487a88005e0fa7f5c70b910adc582ce9d9039a9a6bc92560445a106b09e06c46&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ECB4SF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc5y55kdWMgaPyxshkG53xKQ0ZiIqgdsPjSu80YcTNjQIgfwOP4kumdWfXyY3bkYnDGZqfroDuRNqYVeB50wH%2FhGcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGIN8zjWpEcMxsfR6ircA5BPzXdX%2F55uTdh3FayP%2BBGyRyGV5YEyaeBAPOnpU4dW9nVvv3aSdUmNTg3uNq5EYoXOWYLLqrYAAi2zUDlSqUltgHgN4MhuVruZeMz7J3lOofovp8JqOPhyBIJTRbkRYCtEOuIku4bBu999F15XPbN490dZY21qWQ7hdqNrnL2IZd%2FTYm2pxckBo54QCGViJC2lPOmi0PYa1IpGT4y725qaG1%2BwqFODIRq1uGcwUklC4GwhdJQbdcUzhIRlJbdN%2BCAfEeHSur7Aks6kWYpD%2FD4JIxs3vA4P6TL7gXF%2Fn%2FIJJqa1wOXfDl3gjuTtA4hX08qOm0Fq%2Fz8X6KhR1YHI3rxH97ylEvco2I%2BjSgEuD7LboY%2BCsteD66dK5IvjknCO4FhLd310BWPdbT%2B7B1bPRRyT2uzFHmCZPWdA3shIvZDZbZ0I0Ud0dZQWZbM6tqIoBYx8eTE9RrYqi%2Bj0JYwh62BWTkzgUCPW3%2FdRzqYHrNumvqnEvSviK%2FNhjAwEiSGPNa6IYY1p%2Fu4uYxQTQDcJ0BoruLCfjwZOpkpxg3AskjzzxZyb%2FIFSigD%2FZjIz1NLj%2F5HPt8uvesKNrtcGxk16djAGvPcMrpHbPzF4wcHJs8kfnkjbDZqv6JvduvEnMNad7b0GOqUB43Vml1RZl3%2BbviYczHlH0Y99FbENILPwOpGUOgkgovsMC0oW4cydCDFJBEIyMnXl4GCbRuetEHNTzY76vL0%2BEm7389x804N16ThFtDRquZ%2F6%2BwwiXQLUMk17qIfwCSrRBTR%2FCzFYIEO9kMTn0VPz8jP9kdP%2FlheyJLESIUBgmRFzoeqhnIRLqvRKnNuEVRTQKsdglFiSZTBDQxzbAY0%2FEYsz4axQ&X-Amz-Signature=90e2c030157351c0f4a7ed69ad387adbc7eb88b11d81af8a5e58787a452ab26b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
