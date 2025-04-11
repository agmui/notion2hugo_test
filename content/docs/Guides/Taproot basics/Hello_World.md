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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDC6WW7U%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGQWjJv3CbxSpWrmT6pi%2BR%2FeCJL%2FbF%2B%2FUfQMW%2BNQG%2FyWAiEA%2FKfsXatFgnkgF53KCR1ixhHFEHDst6o28DivqYvSb5cqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFCCwiqKfSqjOlK7ircAxkCBoUjWqMmIJDrLzPbwv4j9BoqNFPeS9DkPiUxkOSQFdr6I99Fd%2FdKjcF%2BhCpKWE8TcS78BRYC%2Fthemsp12MAEx1wiHXrDO1okHVnu3x0Wh1wYrSGJguR3mRujT4T1p7tiQtrcGiC%2FB1IK7xHbW5P2aTc3cjs2vA3nSPRLCrttNqqWzpi7JhiIQJUJ0ge1v%2Bc7uefZ8DvSYW6CLjzzae%2BI5Xi1N4DnHkb6IY3TOjEdoD6wmVQHOnOSILzhLt1yeMeangWzaMasLfw77X9x89ArWIy3ILgNoG7fYvy9I6SMrP7C%2Ff9QCSoATVXOru8zQKDda2TjBymZZqRcC001aCPnAxi5QeJqoh5zSECVouCz0NIsleMJASwyhOxTArPiWppqExupUvvGVHaYd8J8f%2Bm7nhUHvlEU7kPlGfIJRBI5iPP%2Flw3LMXPTQwkybLYZGy%2BLNkmQg%2B22XW%2FxZXedD%2BlurocCAI8wT1lyiHBfJ9AuPvVFSfTda29wZn4gmyFWog7%2BOpHsGez%2B73Da3lpbqXxQN6NSaCpR48jqQA53cNZCc36uYUXlnJ0kUVB11qBUnVr6P1iloFAOKDwxfj%2Fmk8PioF8hKjk%2FKO8KsxIWAmMoe5Oj68ACpu63XIXrMIGB5L8GOqUB7T%2FYgEIc%2BvC7py%2BvQmWzPUoOkDRy9XmAj4EqQ0XK90rHl3U3ClOopNhJIyp6zsUwmfvbaZqgViGJG3zRYRvV9B5KxWlUBCO6OtTs00dy9QgLTbWImrHyVQv2lhHGE6Frlb9DFUNN7Etj1fpyDd9xOsGnwLcV4bhNImCTJ8TAoeqTF8h2mp1CsYtHAAzJmPHLqyI%2FaC2qUOUyVj1lfTIZHAdS%2Bj02&X-Amz-Signature=d27ab973a9dc37e28615d44c2a974165d0c6125698dc8ee181bb9c2fb8203b61&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDC6WW7U%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGQWjJv3CbxSpWrmT6pi%2BR%2FeCJL%2FbF%2B%2FUfQMW%2BNQG%2FyWAiEA%2FKfsXatFgnkgF53KCR1ixhHFEHDst6o28DivqYvSb5cqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFCCwiqKfSqjOlK7ircAxkCBoUjWqMmIJDrLzPbwv4j9BoqNFPeS9DkPiUxkOSQFdr6I99Fd%2FdKjcF%2BhCpKWE8TcS78BRYC%2Fthemsp12MAEx1wiHXrDO1okHVnu3x0Wh1wYrSGJguR3mRujT4T1p7tiQtrcGiC%2FB1IK7xHbW5P2aTc3cjs2vA3nSPRLCrttNqqWzpi7JhiIQJUJ0ge1v%2Bc7uefZ8DvSYW6CLjzzae%2BI5Xi1N4DnHkb6IY3TOjEdoD6wmVQHOnOSILzhLt1yeMeangWzaMasLfw77X9x89ArWIy3ILgNoG7fYvy9I6SMrP7C%2Ff9QCSoATVXOru8zQKDda2TjBymZZqRcC001aCPnAxi5QeJqoh5zSECVouCz0NIsleMJASwyhOxTArPiWppqExupUvvGVHaYd8J8f%2Bm7nhUHvlEU7kPlGfIJRBI5iPP%2Flw3LMXPTQwkybLYZGy%2BLNkmQg%2B22XW%2FxZXedD%2BlurocCAI8wT1lyiHBfJ9AuPvVFSfTda29wZn4gmyFWog7%2BOpHsGez%2B73Da3lpbqXxQN6NSaCpR48jqQA53cNZCc36uYUXlnJ0kUVB11qBUnVr6P1iloFAOKDwxfj%2Fmk8PioF8hKjk%2FKO8KsxIWAmMoe5Oj68ACpu63XIXrMIGB5L8GOqUB7T%2FYgEIc%2BvC7py%2BvQmWzPUoOkDRy9XmAj4EqQ0XK90rHl3U3ClOopNhJIyp6zsUwmfvbaZqgViGJG3zRYRvV9B5KxWlUBCO6OtTs00dy9QgLTbWImrHyVQv2lhHGE6Frlb9DFUNN7Etj1fpyDd9xOsGnwLcV4bhNImCTJ8TAoeqTF8h2mp1CsYtHAAzJmPHLqyI%2FaC2qUOUyVj1lfTIZHAdS%2Bj02&X-Amz-Signature=9ebf0e70ee6b3cb358ed969b63d0a92fd803219f3e17297d1e775e429afd0f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
