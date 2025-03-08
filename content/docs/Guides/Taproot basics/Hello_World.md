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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDMCFQJG%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDG26U7tgdalgGjLvvu%2B4xkCG0NXpliZS%2B3bqGgwIhRIQIgCJUHq9AO70AzApkzxuzi0Oo6YOWY8TUf7c8GSIUVGMEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP4ei0nsLGA9%2FUA37CrcA%2FenK4vgzL%2BD0Az%2BMBTX1WyspEj0%2BMolC84e6W6Z%2FvsL0DBiX%2FbcEseaF%2Fm97J%2FkhMGNEIEdwEs0Dp2BWDvCSVPwah2EUwj3nk6NA5QCIEEskW7jKj5OOPUlcayClRB3J15lHQFGBkXQ%2FXJAu92sX3PH6DMIKNH%2F8V1AgNhqusmQNZlE6GDoTaa7C1QRYIWhB5sXsJs%2BLtN7SZJg6gD7%2BGUU%2FQwpfJvCPyu8bJt2zi4RnFLTUu8qVbRxhbsm6SsrYQYFi6cKKm5PjDdsp3u1riYHU7Rc7CStUmc84q%2FfAcDZEfia1NWmE47%2BGQ0367lv7lIs72oiambrXtO1IudKhzkrjq2MsnonazwOYUpc%2Bflzcs%2FPiceb1JNppGLoAMyoPGbUnXA6qyepXT1yyWHq2fYW1MdNa9PHxtZxYHk%2FgULuybtcIgBl8DANF%2BXh2A6CO%2FNaQDhgNWv1oMyuOT0m4odkAlVNlgKangS71Wk1b2Hv5WFzAcMQJxSG4ID5MUnlAhdIX%2BMCcOhu7pfpsstfNpjQmn4yLzG5iXSLeUZu851Y3ycjJZ%2FdWAvdc8lfMJPTEirOBvy3KjYnUUu2BpiaKcXKud%2BpudQV3YofzwaZa2G1qYtDR9imW%2FRcuhVlMIrgr74GOqUB7PqU1JfTycbhcIk9aq30ANoVFVs2zCbBTBdaqeEgCIE9PoLPKFj6t40ZCQm6fwGeZjelH5z00AxuAXw%2FTH2yYipep4aDGYEV7kNlscVUHhEXehW67W6HWRya5Temdx67gG5ZWCF9ZxcEqFZuWopiYAjdUSArVLZZyU%2BCsPBsFGtVJDDmGpWozdoXSlbneff8SN9nY%2BfhmH%2B8L3nL8agi5ndkUKsi&X-Amz-Signature=a18a674c0061594ef9f89b97f73ae65f0c3206f59b7a2065030b177bc514eac8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDMCFQJG%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDG26U7tgdalgGjLvvu%2B4xkCG0NXpliZS%2B3bqGgwIhRIQIgCJUHq9AO70AzApkzxuzi0Oo6YOWY8TUf7c8GSIUVGMEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP4ei0nsLGA9%2FUA37CrcA%2FenK4vgzL%2BD0Az%2BMBTX1WyspEj0%2BMolC84e6W6Z%2FvsL0DBiX%2FbcEseaF%2Fm97J%2FkhMGNEIEdwEs0Dp2BWDvCSVPwah2EUwj3nk6NA5QCIEEskW7jKj5OOPUlcayClRB3J15lHQFGBkXQ%2FXJAu92sX3PH6DMIKNH%2F8V1AgNhqusmQNZlE6GDoTaa7C1QRYIWhB5sXsJs%2BLtN7SZJg6gD7%2BGUU%2FQwpfJvCPyu8bJt2zi4RnFLTUu8qVbRxhbsm6SsrYQYFi6cKKm5PjDdsp3u1riYHU7Rc7CStUmc84q%2FfAcDZEfia1NWmE47%2BGQ0367lv7lIs72oiambrXtO1IudKhzkrjq2MsnonazwOYUpc%2Bflzcs%2FPiceb1JNppGLoAMyoPGbUnXA6qyepXT1yyWHq2fYW1MdNa9PHxtZxYHk%2FgULuybtcIgBl8DANF%2BXh2A6CO%2FNaQDhgNWv1oMyuOT0m4odkAlVNlgKangS71Wk1b2Hv5WFzAcMQJxSG4ID5MUnlAhdIX%2BMCcOhu7pfpsstfNpjQmn4yLzG5iXSLeUZu851Y3ycjJZ%2FdWAvdc8lfMJPTEirOBvy3KjYnUUu2BpiaKcXKud%2BpudQV3YofzwaZa2G1qYtDR9imW%2FRcuhVlMIrgr74GOqUB7PqU1JfTycbhcIk9aq30ANoVFVs2zCbBTBdaqeEgCIE9PoLPKFj6t40ZCQm6fwGeZjelH5z00AxuAXw%2FTH2yYipep4aDGYEV7kNlscVUHhEXehW67W6HWRya5Temdx67gG5ZWCF9ZxcEqFZuWopiYAjdUSArVLZZyU%2BCsPBsFGtVJDDmGpWozdoXSlbneff8SN9nY%2BfhmH%2B8L3nL8agi5ndkUKsi&X-Amz-Signature=6e737a1b05a97188341096de66c6f2b3b9cbfb34050018b4071d6d69092529c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
