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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGXFWIZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIB8%2FTN4SAWf2jvZ7P8%2FWerM0%2F2VOOwTvhO8YiKs%2BtXiNAiALyhhhYl3r3oDyYIh9ZgAFrJ1hsLBk8QOLnXAAwUcbviqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmS9LFogRBVBqBAkKtwDuM3VI7GuxWlgNboI%2FSZGusIZiJ8gE7NavEn6sC5X69J8uF%2B4Ty0oRwQDtYQpX0LC6W9VjiPGHKXGNWQF%2FGu2LLiy9maoiVAKFhIQeDwRoSf%2FQU00cZanFWmP%2F5NA%2BK6EA6QmhPo7LRVyNtlws1PTI836n5kYrLR%2Fmar%2FjtUOG%2FSg1NAtIzm1M0484k4n6Mla7WpYFvl7PI2x8ZIGZdOodC20p%2F%2FHKU%2Fy%2BweFwMiRJAZqHPPrIWpQFvMjtnvnb6Z4vEFkG%2F2nZdEEwEiyaEKnn3y8d%2FVnGX8qhUbNFdOnASrGKhH4dH0v0r0n492Fkj%2B7y%2FucTh9HofevzHLLsveChP%2Fe95M%2B9mamnni4l79pzd0bwU85EV2bucmWdswXncFVAZfq%2FIkM%2FUEVxDT6lZXLhRjUdM%2BECG3fitFCWYYVH%2FNM1FztJH9VRj7MnajvlLdSdfvzxdL%2BxttPm8XKLVR7%2FbJ8mWxz2INsM2Uu6HJAN7n5Y5e9ge7%2BRLhz50MrRHqKFmn1kuNSD5txYiDQyluTM%2BGUKQAfkfMBPGegdS7EaW0CBSRCNqOEtVcba%2BxS6H1MXaRR4jB6xER2QVshyLG8GuArQMIR1xGxtJKdWhPWd5tgCU4a8XYlJIGrmoQwpozlvwY6pgFSIG%2BNE%2FXXEzy4DmUonRYfCSJcvWm7kEiENWk4yLrS%2FhIyHMGwaYTVHzbbEKMOKq4s2zAz6Qh6wvN5vslwatuy6K9L6kjM%2Bhf6T3bJaoyMHOjIlGZrmpCY%2FgOeD%2FMR%2BxaQA4I%2FKfWBRsBoMYFt1WAmbDQBTQopusIbtzswYJpVqFdho9gsucFpPwyWPETNHB0JDCpWKOv8mtlJtiBHvrnDTBUfiqqY&X-Amz-Signature=3addc20188a5c2249b66dff0071db2ee48ad492ca1b75fc4462b293373068a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGXFWIZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIB8%2FTN4SAWf2jvZ7P8%2FWerM0%2F2VOOwTvhO8YiKs%2BtXiNAiALyhhhYl3r3oDyYIh9ZgAFrJ1hsLBk8QOLnXAAwUcbviqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmS9LFogRBVBqBAkKtwDuM3VI7GuxWlgNboI%2FSZGusIZiJ8gE7NavEn6sC5X69J8uF%2B4Ty0oRwQDtYQpX0LC6W9VjiPGHKXGNWQF%2FGu2LLiy9maoiVAKFhIQeDwRoSf%2FQU00cZanFWmP%2F5NA%2BK6EA6QmhPo7LRVyNtlws1PTI836n5kYrLR%2Fmar%2FjtUOG%2FSg1NAtIzm1M0484k4n6Mla7WpYFvl7PI2x8ZIGZdOodC20p%2F%2FHKU%2Fy%2BweFwMiRJAZqHPPrIWpQFvMjtnvnb6Z4vEFkG%2F2nZdEEwEiyaEKnn3y8d%2FVnGX8qhUbNFdOnASrGKhH4dH0v0r0n492Fkj%2B7y%2FucTh9HofevzHLLsveChP%2Fe95M%2B9mamnni4l79pzd0bwU85EV2bucmWdswXncFVAZfq%2FIkM%2FUEVxDT6lZXLhRjUdM%2BECG3fitFCWYYVH%2FNM1FztJH9VRj7MnajvlLdSdfvzxdL%2BxttPm8XKLVR7%2FbJ8mWxz2INsM2Uu6HJAN7n5Y5e9ge7%2BRLhz50MrRHqKFmn1kuNSD5txYiDQyluTM%2BGUKQAfkfMBPGegdS7EaW0CBSRCNqOEtVcba%2BxS6H1MXaRR4jB6xER2QVshyLG8GuArQMIR1xGxtJKdWhPWd5tgCU4a8XYlJIGrmoQwpozlvwY6pgFSIG%2BNE%2FXXEzy4DmUonRYfCSJcvWm7kEiENWk4yLrS%2FhIyHMGwaYTVHzbbEKMOKq4s2zAz6Qh6wvN5vslwatuy6K9L6kjM%2Bhf6T3bJaoyMHOjIlGZrmpCY%2FgOeD%2FMR%2BxaQA4I%2FKfWBRsBoMYFt1WAmbDQBTQopusIbtzswYJpVqFdho9gsucFpPwyWPETNHB0JDCpWKOv8mtlJtiBHvrnDTBUfiqqY&X-Amz-Signature=959b6768cac37b7dd251bf8362b305f5a23b9d72ec26ec622745185845769535&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
