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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6RYG2L%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD2TN0MaQM8OsaiAXdx6Ee14%2Fj2BXb7SjhKOEGv%2BudiiQIgJXTUJbsHxZx%2F%2BsZHwLdDK0hH9dAOr%2Fi3EN3nPt%2FvvbYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMtWBfp35uYA2dta4ircA99d0hbGMaZNFNWJ6cYUp7zb%2Bm5iXT549QLWYc2Mh9YEQJ%2Bpim6LwKpTO8XGbLdvGPlf71%2FqChmiSQSJXH1AVXp5TV3REeyU2TiIma6bGwNJOeD7F%2BHNbCJQ5U3%2BHxa1NZhAfmtO2Gr0U8bQ3ZLQt1sNOWQydF3FigX%2F%2FCS7tTlIrWFNm6YxxB2ucDgvq3Zv1dDrKnmrVI6nsE0WiRPuBAUX6d9nrOnRv7hqROkdA%2Boy%2F04P%2BDoxOzBB7VONu7WE3uvR2y%2BDz7cwYrK6LvrvbCVOfb%2FdVnOUbX9r1Dl22MD693OgP3iNjbtDS%2FKQbxhPC4i7o9LgQC6xv%2BuBxUz8fT%2BvcJp6rr%2FhCcekGxtOpidtO3shm%2B7zRYy%2Bkq99Vv2DazrZZMb35FJbspXOgyhDcTuxh9o59NJCRIdjVXdv9loHM5sVJZJ9PFok0%2FEGRIYcVHUMYHlOz9MAk2uXGImciwnkTNBiPOrOuwENOlZCG%2BWlnNGmLAqeTd52u204MpvsUGokITAKwO1PsRVScEXu5HGxNciBYSPzdBTb4xG55NI%2B9X7iDwvrtAR5w8UOu10dsz1L48vwDIAbFOg34rRscOCOK6k2F5RbqJp3zr4hKIoaj1KXtQbJAiJs3zt7MI6W9MIGOqUBv4u6Uv50Ip%2BuUMYmByqgJ1apnreLHHqrtpkCrRyXjsIFpALhm7LrM9btJcyiC2BUN%2BBAC%2FUlBoV9Hkj8avVtVOwEjZt31xXC4CUzPrbwjXVCS4pl3QjteKBrlL7H2mp6QJ2%2F7peuprpVoBU0mVqAT4ibz%2FCQT%2Fq5n1q%2FEU3on7kjeQG6B7FpgKTBhwisbLsdLkAYZQYFdCEpAyU3mgtLbkof934S&X-Amz-Signature=1345f5d156912259a57af51220a2c0057135adda676dd4f3c42038b2a14c11e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6RYG2L%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD2TN0MaQM8OsaiAXdx6Ee14%2Fj2BXb7SjhKOEGv%2BudiiQIgJXTUJbsHxZx%2F%2BsZHwLdDK0hH9dAOr%2Fi3EN3nPt%2FvvbYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMtWBfp35uYA2dta4ircA99d0hbGMaZNFNWJ6cYUp7zb%2Bm5iXT549QLWYc2Mh9YEQJ%2Bpim6LwKpTO8XGbLdvGPlf71%2FqChmiSQSJXH1AVXp5TV3REeyU2TiIma6bGwNJOeD7F%2BHNbCJQ5U3%2BHxa1NZhAfmtO2Gr0U8bQ3ZLQt1sNOWQydF3FigX%2F%2FCS7tTlIrWFNm6YxxB2ucDgvq3Zv1dDrKnmrVI6nsE0WiRPuBAUX6d9nrOnRv7hqROkdA%2Boy%2F04P%2BDoxOzBB7VONu7WE3uvR2y%2BDz7cwYrK6LvrvbCVOfb%2FdVnOUbX9r1Dl22MD693OgP3iNjbtDS%2FKQbxhPC4i7o9LgQC6xv%2BuBxUz8fT%2BvcJp6rr%2FhCcekGxtOpidtO3shm%2B7zRYy%2Bkq99Vv2DazrZZMb35FJbspXOgyhDcTuxh9o59NJCRIdjVXdv9loHM5sVJZJ9PFok0%2FEGRIYcVHUMYHlOz9MAk2uXGImciwnkTNBiPOrOuwENOlZCG%2BWlnNGmLAqeTd52u204MpvsUGokITAKwO1PsRVScEXu5HGxNciBYSPzdBTb4xG55NI%2B9X7iDwvrtAR5w8UOu10dsz1L48vwDIAbFOg34rRscOCOK6k2F5RbqJp3zr4hKIoaj1KXtQbJAiJs3zt7MI6W9MIGOqUBv4u6Uv50Ip%2BuUMYmByqgJ1apnreLHHqrtpkCrRyXjsIFpALhm7LrM9btJcyiC2BUN%2BBAC%2FUlBoV9Hkj8avVtVOwEjZt31xXC4CUzPrbwjXVCS4pl3QjteKBrlL7H2mp6QJ2%2F7peuprpVoBU0mVqAT4ibz%2FCQT%2Fq5n1q%2FEU3on7kjeQG6B7FpgKTBhwisbLsdLkAYZQYFdCEpAyU3mgtLbkof934S&X-Amz-Signature=2080833d5e94a5efba69e47d0be2464fa60abd0711be55c1a875b65559454be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
