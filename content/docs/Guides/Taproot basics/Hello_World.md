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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNJEQGL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIButurstUhb0C3EZU%2BNo%2FVaukCULQ1A1Yh0WmBKuc%2BGBAiEA8z6I%2Fzafj2bWv5rePY9j4h30BDb2aaa1H7arbP1x5Owq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCkJR03NmnpVVw3bayrcAxxHKpWI4kS6uJeYS4xmhy6WkvfJZHrDmKpv4IqFJ09l2gA2wUUVuUdQ6kSvPZYBbc88KpBbAaq%2Bo0Amf%2FJF5zlbRm54J0gx5qOfaXx%2BAVd7D0U9Xs0A42BTqYS1XXEmq8HamdMFuCRNXjopOT9lEYA4oWncM26c9o3JDGapwiTZIXg0MaaZ2CSFM5dMc3jXbw2G8mWwjK8P8ZRasT8yBWYexFtRzrr83T%2BJycAR%2FA4s38YKWoF2%2FBrrAoWG8pVnk2gRHIyhWMRFTO%2FJLUkl1mEo%2B%2B4cLncQWbo%2Bny2R8j2S05%2BZ%2BUqI%2BazI0kDLFNxYqyHUM5pzLfvwlHPjoAd4q2PBIbitdYHlJrHw2YFHrp8KKv01M4DTOCbpxJB2rA5GuSZzL0auUgobyMfADF%2F0Q9c4URVVWTpnfSDTkkrwM%2BU7quTW2sl%2B2o1wySimRG2HQWJ96IS%2F0Sj%2BvaR5yFtljZqmJsm0KnNcV9YUrwGiSO4n8aL%2Bw2jc5i7ZWFqyIv3VejkVX3E2P0gsaypfdevswNwI4l1KyH5YxDxiHShsL94AhRuHc35Af1vUB%2FUfbyj2oco11K%2F2xGBfnY4ZKETAAFh%2FIREn80MjfSiBZu%2F%2FHCNCCG1VMg%2B55QERf%2BHTMNy3j8IGOqUBLMX%2B%2F11NxQWSlwBGr73J91vGEx%2FUH%2FdVD4fzIfY0DG8HwaX3%2Bj4V8Nd%2FZ%2FHbsrz0ns%2BuOBViy849Q73QtB1Qi%2B4kW6sBOZ%2FCzdkR5uM52mMsJOQYhSGw%2FYB%2Bm8MRjsWvvZu6NbiwIetld1WYHS2mCHOsQUYoKIl4Keicb1CTMzzT%2B90dMdVdvs3cP4b9xQ5p%2BHOPIlDesgKeUVkO4jql3aZB6F6C&X-Amz-Signature=9fb0bde6d9216becf6446216127362ece698fc39ecb6683789e2ec78b3c14294&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNJEQGL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIButurstUhb0C3EZU%2BNo%2FVaukCULQ1A1Yh0WmBKuc%2BGBAiEA8z6I%2Fzafj2bWv5rePY9j4h30BDb2aaa1H7arbP1x5Owq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCkJR03NmnpVVw3bayrcAxxHKpWI4kS6uJeYS4xmhy6WkvfJZHrDmKpv4IqFJ09l2gA2wUUVuUdQ6kSvPZYBbc88KpBbAaq%2Bo0Amf%2FJF5zlbRm54J0gx5qOfaXx%2BAVd7D0U9Xs0A42BTqYS1XXEmq8HamdMFuCRNXjopOT9lEYA4oWncM26c9o3JDGapwiTZIXg0MaaZ2CSFM5dMc3jXbw2G8mWwjK8P8ZRasT8yBWYexFtRzrr83T%2BJycAR%2FA4s38YKWoF2%2FBrrAoWG8pVnk2gRHIyhWMRFTO%2FJLUkl1mEo%2B%2B4cLncQWbo%2Bny2R8j2S05%2BZ%2BUqI%2BazI0kDLFNxYqyHUM5pzLfvwlHPjoAd4q2PBIbitdYHlJrHw2YFHrp8KKv01M4DTOCbpxJB2rA5GuSZzL0auUgobyMfADF%2F0Q9c4URVVWTpnfSDTkkrwM%2BU7quTW2sl%2B2o1wySimRG2HQWJ96IS%2F0Sj%2BvaR5yFtljZqmJsm0KnNcV9YUrwGiSO4n8aL%2Bw2jc5i7ZWFqyIv3VejkVX3E2P0gsaypfdevswNwI4l1KyH5YxDxiHShsL94AhRuHc35Af1vUB%2FUfbyj2oco11K%2F2xGBfnY4ZKETAAFh%2FIREn80MjfSiBZu%2F%2FHCNCCG1VMg%2B55QERf%2BHTMNy3j8IGOqUBLMX%2B%2F11NxQWSlwBGr73J91vGEx%2FUH%2FdVD4fzIfY0DG8HwaX3%2Bj4V8Nd%2FZ%2FHbsrz0ns%2BuOBViy849Q73QtB1Qi%2B4kW6sBOZ%2FCzdkR5uM52mMsJOQYhSGw%2FYB%2Bm8MRjsWvvZu6NbiwIetld1WYHS2mCHOsQUYoKIl4Keicb1CTMzzT%2B90dMdVdvs3cP4b9xQ5p%2BHOPIlDesgKeUVkO4jql3aZB6F6C&X-Amz-Signature=c110b67363474e6e87a5e537d5a889cf624a9f965bf33448250aa306c69dc9af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
