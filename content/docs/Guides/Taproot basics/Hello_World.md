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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRI33K7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQDQnIUBkxctet10ln6H6enCIHJV6o31ighA5IgHku1AiEArDyHXioaq9rN8jSkxXE3kxPZX7mMTP2xgIwjIY09HrgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJll9Fdi4uYvdDr6aircA4H9v7fta9wI5OA8c1tLAoY8kyd2hS1mMoEA7DNCGErSqc5hRgg21impoBz2NAN8DXADjhTB4LOK3Tjpn92LC1NBcjVwf0ffcXIdWvwkO3z7ZHTrZ4syEd58LZ1hIKGZ0tVotpr6fxatlkcTucGWgRAr43gjIJ%2FpKr6QOrAVr7OWMLHoY5K%2FbDnltoNmY%2BiCItbu%2BbAADHHznIU%2BN6Bb6S%2BFynsmKpD1YFzaQg%2FFtT0NFcFYgDEleefnjHxEGyIXUdJGqy%2FMeD%2FZrP3Wyc41zxZKxraBclnR3T47TCOPUCvtDw6smhW1%2BWe1IBR5MocOPH0lRa4CHWT6ez%2BBPpQ7dMsIRznvCc%2BCdEhyZqZv2K2p%2FlTPMeLLzgmv6Z2%2Fok27VOjJD%2F%2Bsq9HmaPcpnHkU9RQaqOqRl8ip1dCg2wWF2RmJ4Sm5boqMtnrEh8fRBQbC44jMLJYYhwBlQFOR1DAq4T6KhU4XPG1wG%2BG7MRD4mEIVR1sjsSMsYk382fN%2B08YTWKdY2t2i5jQe2Mq9LiLTmaqZu0%2FKRyE12hzHB42%2Bk79%2FCReY7bAM7X%2FXuGzItcxT3PfGZ85f32N0vqxRalRWoL3KOqeHzZOh%2BrQ4DZ3drIg060scOg7ab3jT4JxiMPbq5r0GOqUBGYAD2tpXodTlBAKLXBPYkr1c4CRvAPZ%2FzoGlZerz2B5zBVkBXG7HX6ilQwm13f5gHvub%2BpKx0mRt0Saq2X62k2jVRExTmi48UcXpMGO4esK7UW37RaPPfXtWd4eg9mLFctixIwPcPUrkeqJGKVz8BNnvE6C2k%2BOCPvBGz1O6SBXbVEO5A4knMxgGBjmsA4%2FVDiCkAhQf6wWaA4cjkJOjzskSvKbH&X-Amz-Signature=738214dbe18bdfdcbd794cd683958d5bea6af6ad169204e2b9d47d6884ee0b67&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRI33K7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQDQnIUBkxctet10ln6H6enCIHJV6o31ighA5IgHku1AiEArDyHXioaq9rN8jSkxXE3kxPZX7mMTP2xgIwjIY09HrgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJll9Fdi4uYvdDr6aircA4H9v7fta9wI5OA8c1tLAoY8kyd2hS1mMoEA7DNCGErSqc5hRgg21impoBz2NAN8DXADjhTB4LOK3Tjpn92LC1NBcjVwf0ffcXIdWvwkO3z7ZHTrZ4syEd58LZ1hIKGZ0tVotpr6fxatlkcTucGWgRAr43gjIJ%2FpKr6QOrAVr7OWMLHoY5K%2FbDnltoNmY%2BiCItbu%2BbAADHHznIU%2BN6Bb6S%2BFynsmKpD1YFzaQg%2FFtT0NFcFYgDEleefnjHxEGyIXUdJGqy%2FMeD%2FZrP3Wyc41zxZKxraBclnR3T47TCOPUCvtDw6smhW1%2BWe1IBR5MocOPH0lRa4CHWT6ez%2BBPpQ7dMsIRznvCc%2BCdEhyZqZv2K2p%2FlTPMeLLzgmv6Z2%2Fok27VOjJD%2F%2Bsq9HmaPcpnHkU9RQaqOqRl8ip1dCg2wWF2RmJ4Sm5boqMtnrEh8fRBQbC44jMLJYYhwBlQFOR1DAq4T6KhU4XPG1wG%2BG7MRD4mEIVR1sjsSMsYk382fN%2B08YTWKdY2t2i5jQe2Mq9LiLTmaqZu0%2FKRyE12hzHB42%2Bk79%2FCReY7bAM7X%2FXuGzItcxT3PfGZ85f32N0vqxRalRWoL3KOqeHzZOh%2BrQ4DZ3drIg060scOg7ab3jT4JxiMPbq5r0GOqUBGYAD2tpXodTlBAKLXBPYkr1c4CRvAPZ%2FzoGlZerz2B5zBVkBXG7HX6ilQwm13f5gHvub%2BpKx0mRt0Saq2X62k2jVRExTmi48UcXpMGO4esK7UW37RaPPfXtWd4eg9mLFctixIwPcPUrkeqJGKVz8BNnvE6C2k%2BOCPvBGz1O6SBXbVEO5A4knMxgGBjmsA4%2FVDiCkAhQf6wWaA4cjkJOjzskSvKbH&X-Amz-Signature=7a12d69bc3033cb76bffa0b04a2ac574d9a7409e10bc0e781e798f03feacbc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
