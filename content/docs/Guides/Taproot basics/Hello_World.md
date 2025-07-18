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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM5O4S2E%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFOrCIAT5PWxTFmcU0JWSSyAVIunSRB%2F7vzb58sP%2BuseAiEAkc8WZiDk30rmwr3lp7FUctbV5Am8pMyou5WsYg7J4WEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOu7B7FjBmwr43rfWyrcA0okURJD9iu1ZnAQ6oqrGmxsHnYDV6cNZftYihsg9a6Ipe97NLFxg76PrylL5LHRXNb3vy5shFfK3PSz7v9pnxMxgcl81Qljbjxk9kTvc4HDi%2FfSaam%2BHUg0t7YWmKoWSnemnZYd1IZv0p3EMQGaJnxGak06irQuPJEOL95PrIefvYkDzsbxFC%2FfDapYMLlExEUZTgUuunNKZlAdBYgacajT2X7YaonNRUSFT8FLKSPyd2Z%2Ba7DY8e5SO8NyQ9EeTBIJbykxXDsSe9JOTj%2FiZuWS4cGL1YmZc3cOkRwMfC0yzxN7FJDrgyUgdnGB3TB%2BSaSW6eUE8UfXKXYPXx2GwDW%2F0A4IQVMeSrvmhAzoGynGjHaFLHHdQ2l6L153lwbLgL9RK9hQFVeR6Vd0mHX%2BGO5vT%2FwyY6pBSy8qyuM9sC53h%2BK5PGPwHMtNAfBYOsP5WexD1wlwrLYRryIy%2FHT%2FKzHyrWpK53xtOwWh%2Bk6rAEft9E9YW3PkrAIyIcMvhXgUbROGWGaBIyMr58Dsv7cOQfBbUn7dMjgJuTwyn31fMDtOtZzY25Pn5qO69pZP7LRb6H0HpC0T7LXSzmpfgT%2BNlo43Xi3nwieYIwK9QyBTTmX%2B48vFqlcyIl3kAdZzMJOa6sMGOqUBb1ALnIQD1hbvsq1jwrXgLa4nZ04oVIqJB6c87oDDIakoRaAWCoFIwwdIuVwrOElC27PFg1t0DDrebnNzsumaAX8rIo5M2m0zKYmmUlt2PgvBHue8rx8ORx1TwIJmxHhVVKf59eIwFh6qQMk2xPaEjkfr2lpSfANLq8aosO6OLTCr8tQVFtoxq1RJac%2FcYEs9b2h59Tx4cI0F71y6V6nsc8TU1vVG&X-Amz-Signature=c71006378860f547d23f61e6eace64ff17967cea726a7eb8a20852ed7a5d5c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM5O4S2E%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFOrCIAT5PWxTFmcU0JWSSyAVIunSRB%2F7vzb58sP%2BuseAiEAkc8WZiDk30rmwr3lp7FUctbV5Am8pMyou5WsYg7J4WEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOu7B7FjBmwr43rfWyrcA0okURJD9iu1ZnAQ6oqrGmxsHnYDV6cNZftYihsg9a6Ipe97NLFxg76PrylL5LHRXNb3vy5shFfK3PSz7v9pnxMxgcl81Qljbjxk9kTvc4HDi%2FfSaam%2BHUg0t7YWmKoWSnemnZYd1IZv0p3EMQGaJnxGak06irQuPJEOL95PrIefvYkDzsbxFC%2FfDapYMLlExEUZTgUuunNKZlAdBYgacajT2X7YaonNRUSFT8FLKSPyd2Z%2Ba7DY8e5SO8NyQ9EeTBIJbykxXDsSe9JOTj%2FiZuWS4cGL1YmZc3cOkRwMfC0yzxN7FJDrgyUgdnGB3TB%2BSaSW6eUE8UfXKXYPXx2GwDW%2F0A4IQVMeSrvmhAzoGynGjHaFLHHdQ2l6L153lwbLgL9RK9hQFVeR6Vd0mHX%2BGO5vT%2FwyY6pBSy8qyuM9sC53h%2BK5PGPwHMtNAfBYOsP5WexD1wlwrLYRryIy%2FHT%2FKzHyrWpK53xtOwWh%2Bk6rAEft9E9YW3PkrAIyIcMvhXgUbROGWGaBIyMr58Dsv7cOQfBbUn7dMjgJuTwyn31fMDtOtZzY25Pn5qO69pZP7LRb6H0HpC0T7LXSzmpfgT%2BNlo43Xi3nwieYIwK9QyBTTmX%2B48vFqlcyIl3kAdZzMJOa6sMGOqUBb1ALnIQD1hbvsq1jwrXgLa4nZ04oVIqJB6c87oDDIakoRaAWCoFIwwdIuVwrOElC27PFg1t0DDrebnNzsumaAX8rIo5M2m0zKYmmUlt2PgvBHue8rx8ORx1TwIJmxHhVVKf59eIwFh6qQMk2xPaEjkfr2lpSfANLq8aosO6OLTCr8tQVFtoxq1RJac%2FcYEs9b2h59Tx4cI0F71y6V6nsc8TU1vVG&X-Amz-Signature=07c521a49f87de66c5d042b5e866ede86814baf049d6410b293dc0ffcee1d9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
