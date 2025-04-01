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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2YTFS6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEim1MTHm%2F5Bc7uMcIjw4%2BG7xphnlngtj5o2Vjc1oh%2ByAiBEqkUStw9VtMQ2OD%2F3Ncr316%2B%2FDBWTVlAwzfMKGJUsMCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoa3geq1sL1qyxJOHKtwDLzm%2BrzdezjCjRH0HcS0dBMIKVNqN2X6ZCj8uq8eCwbK1kHBvv1Riedrc9Y0xrYJQ9OgFvj6h2ilDa5BooTh7Z2NCCPgRvUnumj%2FT2fvkfq0v4PCNTDdcfEGuTPd1M8zj78PXnJ7aSbaY0t1ApSvpX67B5M5SA12sbor8xy9BK0E%2FldG9PjIMQUXkYA9am1z4cd%2FBs24xTvpBEWSMD2GePuYVRDNhe7ubKDkCc0l1YCeAF2CbkTrfXx6%2FU%2BzcTZCrAFaNbeXXposp6%2BBkrrOjFrAW85w4SrEoQ7%2BsF2eoV3cFrWJkTfVlgsZ9KQXCu2PjPnDqJppcNqCGtDNonfQUxK9m%2BuYBFJ2P82MlMv5zX0roUL%2FFoSxemhyKctwJjkG0xQZBF7%2Fkqn2Tkq4WMj1fvTZA5%2B7jUiu3kLB3nAJUfHyb9uK1UQnPlZnfpC8DWSlCxgc1Y6RlIgJkcuDnfV6H3TYoN2Y4CkUrDqWfCl26Qa9EhSicFJ9WQFLAZwvN4NCj%2BUDDVZcVduogZIUF1tnadsqJTj067IHcE1SemneRRy3dzDPIl11igz%2Ft0Vjvu5IpsetYws7evIZ1XxtCdOmVtYNxgJUrFpAaZgdeeFrF%2FFuPKTU2v3W8wxBZdNEwsoqtvwY6pgH06dBs%2B2APQ14%2B9MpdqeR2exp7Iq%2By9KWSQMQXV49EoLlaHNaIPbasG9xczSDaHHP9vJRXk98%2FwkGhrb4zQ6nQLJ1xSzgugnzqQ0NMzZBm6%2B802BQoOpyUG6EkUfGdGRN97hbHRhmckU%2BmIm47l%2FJFL6DMLCnvB1y9Y9MPX07nNAwODOI81L2h%2FiRCApuGqM7HPdF6nBqki63h2P5CxwdNQkJ9W4y8&X-Amz-Signature=82d5358c80e17dd5585dfaa8c5a1e08607e29bd0c31776012cd00c9fa9a4b316&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2YTFS6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEim1MTHm%2F5Bc7uMcIjw4%2BG7xphnlngtj5o2Vjc1oh%2ByAiBEqkUStw9VtMQ2OD%2F3Ncr316%2B%2FDBWTVlAwzfMKGJUsMCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoa3geq1sL1qyxJOHKtwDLzm%2BrzdezjCjRH0HcS0dBMIKVNqN2X6ZCj8uq8eCwbK1kHBvv1Riedrc9Y0xrYJQ9OgFvj6h2ilDa5BooTh7Z2NCCPgRvUnumj%2FT2fvkfq0v4PCNTDdcfEGuTPd1M8zj78PXnJ7aSbaY0t1ApSvpX67B5M5SA12sbor8xy9BK0E%2FldG9PjIMQUXkYA9am1z4cd%2FBs24xTvpBEWSMD2GePuYVRDNhe7ubKDkCc0l1YCeAF2CbkTrfXx6%2FU%2BzcTZCrAFaNbeXXposp6%2BBkrrOjFrAW85w4SrEoQ7%2BsF2eoV3cFrWJkTfVlgsZ9KQXCu2PjPnDqJppcNqCGtDNonfQUxK9m%2BuYBFJ2P82MlMv5zX0roUL%2FFoSxemhyKctwJjkG0xQZBF7%2Fkqn2Tkq4WMj1fvTZA5%2B7jUiu3kLB3nAJUfHyb9uK1UQnPlZnfpC8DWSlCxgc1Y6RlIgJkcuDnfV6H3TYoN2Y4CkUrDqWfCl26Qa9EhSicFJ9WQFLAZwvN4NCj%2BUDDVZcVduogZIUF1tnadsqJTj067IHcE1SemneRRy3dzDPIl11igz%2Ft0Vjvu5IpsetYws7evIZ1XxtCdOmVtYNxgJUrFpAaZgdeeFrF%2FFuPKTU2v3W8wxBZdNEwsoqtvwY6pgH06dBs%2B2APQ14%2B9MpdqeR2exp7Iq%2By9KWSQMQXV49EoLlaHNaIPbasG9xczSDaHHP9vJRXk98%2FwkGhrb4zQ6nQLJ1xSzgugnzqQ0NMzZBm6%2B802BQoOpyUG6EkUfGdGRN97hbHRhmckU%2BmIm47l%2FJFL6DMLCnvB1y9Y9MPX07nNAwODOI81L2h%2FiRCApuGqM7HPdF6nBqki63h2P5CxwdNQkJ9W4y8&X-Amz-Signature=6f84b676eb58bb9844bb7257095e5350e77cd00659a0c82e2e1bf50012985481&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
