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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBVGOIYL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFTTCaAvKsfVP7xSFZw%2FWtzb35ppSVCQAF0JGBtK7Jg%2BAiEA5a08o4%2B7yM4S%2BK5%2BzeBGw4g0uQPKwUX2XWS6DUteRDsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj3TTsOx2T09V8zoyrcA%2FwLBWGx6X00eTP1l4jr1glgdGCxfJw6IMKEPBuCF2ictbbpCNka326IP3qPhrc3DJ5C0hZyHiCJqsYJ2W5gxEPGMpaQQbebtSUaEFpznxgwVwcQ7dHb9JgBZ0jCV%2FlsSxhWvcevnp12OOkGFiUTG2hUxr6pvH5hnXEnytoaPE3EZwTAm51Sn7Fyrk1gPHy3mojEsiOb%2BkuHmXpeuduF0oMRfwp00wEnWbf3dF6WuJD4gpp%2F0bBv5PkL%2FMIrazaTpYblFx5tguJGP6vdmnitxF3W83vowmqCcOcR0zTp%2BI2KB%2FOzyzrVvvkx%2BCXeIYknRfDeE580%2B0Huk1kPvNeOVeo7pMPGHPoWGdGiGhSeepXcpjX4Rg6TrSyVkQ3Z2INs2lo3upkcRxz5BWs3skPxpl3p4mb1wTfjLkJJQBEl9kUUzW4uS5ULkkmEBq704CxuiTL9FN8nSsQBZR6OYmzhwLLLKm%2BFaH0pdZLcpHJK%2BZ%2Fhi3slFkDbbQ66W5XF5lPPSeLpwO01guQpkSDdoNGxE45asR2FMza%2BYXzZByjsDsXmMuLyT6svbH03ukrC3sz1Igz1CedXFkHAlOMLd%2F9visTmZtyPJrPGepkGm7M3CuO54pfrGlx0h5HQ69gQMJW6n8QGOqUB5Ku3hXXXp0k%2Fnkw7F5FrfLewTDIbCjh7o1Rc3iXVjsCCeh814Vy0r3pUfbvcs1nOx5nPzdJ1ysG0FrkfNLwPxpY0h5t3bUQDj0TKDCIlc6jF6VPLI9vPTXlaO4VlgoXh30MrY6eDps3YBfGlTQsMtfsoqlKppIjZhhczopFUBw3zv4I9%2FIaphtN7zV5YPKa3aFeXZII4PmUCZsPshnXHbo9DXuiQ&X-Amz-Signature=1adfed93f5e00133922941f85321577f1cad4ff236912445d17f9b1a06a1ac09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBVGOIYL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFTTCaAvKsfVP7xSFZw%2FWtzb35ppSVCQAF0JGBtK7Jg%2BAiEA5a08o4%2B7yM4S%2BK5%2BzeBGw4g0uQPKwUX2XWS6DUteRDsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj3TTsOx2T09V8zoyrcA%2FwLBWGx6X00eTP1l4jr1glgdGCxfJw6IMKEPBuCF2ictbbpCNka326IP3qPhrc3DJ5C0hZyHiCJqsYJ2W5gxEPGMpaQQbebtSUaEFpznxgwVwcQ7dHb9JgBZ0jCV%2FlsSxhWvcevnp12OOkGFiUTG2hUxr6pvH5hnXEnytoaPE3EZwTAm51Sn7Fyrk1gPHy3mojEsiOb%2BkuHmXpeuduF0oMRfwp00wEnWbf3dF6WuJD4gpp%2F0bBv5PkL%2FMIrazaTpYblFx5tguJGP6vdmnitxF3W83vowmqCcOcR0zTp%2BI2KB%2FOzyzrVvvkx%2BCXeIYknRfDeE580%2B0Huk1kPvNeOVeo7pMPGHPoWGdGiGhSeepXcpjX4Rg6TrSyVkQ3Z2INs2lo3upkcRxz5BWs3skPxpl3p4mb1wTfjLkJJQBEl9kUUzW4uS5ULkkmEBq704CxuiTL9FN8nSsQBZR6OYmzhwLLLKm%2BFaH0pdZLcpHJK%2BZ%2Fhi3slFkDbbQ66W5XF5lPPSeLpwO01guQpkSDdoNGxE45asR2FMza%2BYXzZByjsDsXmMuLyT6svbH03ukrC3sz1Igz1CedXFkHAlOMLd%2F9visTmZtyPJrPGepkGm7M3CuO54pfrGlx0h5HQ69gQMJW6n8QGOqUB5Ku3hXXXp0k%2Fnkw7F5FrfLewTDIbCjh7o1Rc3iXVjsCCeh814Vy0r3pUfbvcs1nOx5nPzdJ1ysG0FrkfNLwPxpY0h5t3bUQDj0TKDCIlc6jF6VPLI9vPTXlaO4VlgoXh30MrY6eDps3YBfGlTQsMtfsoqlKppIjZhhczopFUBw3zv4I9%2FIaphtN7zV5YPKa3aFeXZII4PmUCZsPshnXHbo9DXuiQ&X-Amz-Signature=3e2f526f42add846f0134c040a7a25e1e0ba44921d157522ef6d6fcc5481f832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
