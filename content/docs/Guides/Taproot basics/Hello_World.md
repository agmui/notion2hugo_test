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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZ557O%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOk8TNU5tF9U5GPKopOgOIAVkmKWWd4mVfwc5eu7wN0gIgGoCk5AHdgxn80ZNkYPK2v2w6tCPGIAvuXDHwQsHkopUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOVpb0bPFmBu1yn5ircA7rblygq9kUW%2BAXymOIFfefOVMzyqabTIHFG37ihDs9ktNPN9Ruso1F7edL%2BSCUWOwopMSzvhr%2BUlKRU3MjdzKXffJwfkSkxxUV%2F5AHM9JT3QhdlODT2uTxmg82gy1MbYIW1rwGS641P%2FrakYYXuOTqj8SYFo5z8rpz%2BMsTaBVOu9nHYRrZigkH3Vr2jfcMZk%2Bgrp%2FQ9VB1wGgTUW29HxwG0oSpiCM8IXfIfQMsi9nK3ElS%2FMVrnZygF4sA5QeEQNqlbbUfc4j6Ygcfek%2B5%2BjY2LPDGGpR8PVRvMfL5xf6G%2BHJ3WljjdXqbQq2W0k688ldHwjc71ihz1YHXw8L2%2BvIfe4A24PS8vrcp1%2FNdRZpueRpi%2FqM94MsX1Mhq6OebLv%2FjXmsqJKbxR8UKhR0r5c3x6aVfxLFrCnIsKtOImRED%2F4WVPvLRNYgyptC0H3bV7VGxQExjGHXHr8Bp%2BWR1nmQcchHnM8Hqg%2FwNTewQEx1eRw8JqcDPAjMAAQZALj8EbxRjnbwJ86Qch8dFP1hPz4O3cLcSNuYl3OQARS%2B7sVn2DqY94X8Noxg2JXzWcdEJ%2Fs5jHSsvbtqv3o6z96%2Bte7EZUEq06%2BQSIJ8ND78SqR3KB6jYbsR0IsepMFjPUMKOr7bwGOqUBC9YX4DuaY2PNjAohXvFROO9X0iL%2BXZlCc%2Bk4Sm9Y2OELTgiZnZVXOaBtswLt7PLLH18wDqwDorvwcFEFuHStdxhlXiG14w2Bzbi8Xi8YzYy6tq9%2FY8wxa5WATKWTiy0grQe%2FRaTml5eG7aJ9BGiEiVD46pWWIUtNMLb%2FSDSgOuynswRCzsi6BGKL%2Bpug%2BRvSRszENjQkfhMZJohG5%2B%2F9dE9rkl8%2B&X-Amz-Signature=78b52d03a951373bd2a0cc75a5c8eae6d6ebb4167eea2ae51e60b21dfc7d74a8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZ557O%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOk8TNU5tF9U5GPKopOgOIAVkmKWWd4mVfwc5eu7wN0gIgGoCk5AHdgxn80ZNkYPK2v2w6tCPGIAvuXDHwQsHkopUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOVpb0bPFmBu1yn5ircA7rblygq9kUW%2BAXymOIFfefOVMzyqabTIHFG37ihDs9ktNPN9Ruso1F7edL%2BSCUWOwopMSzvhr%2BUlKRU3MjdzKXffJwfkSkxxUV%2F5AHM9JT3QhdlODT2uTxmg82gy1MbYIW1rwGS641P%2FrakYYXuOTqj8SYFo5z8rpz%2BMsTaBVOu9nHYRrZigkH3Vr2jfcMZk%2Bgrp%2FQ9VB1wGgTUW29HxwG0oSpiCM8IXfIfQMsi9nK3ElS%2FMVrnZygF4sA5QeEQNqlbbUfc4j6Ygcfek%2B5%2BjY2LPDGGpR8PVRvMfL5xf6G%2BHJ3WljjdXqbQq2W0k688ldHwjc71ihz1YHXw8L2%2BvIfe4A24PS8vrcp1%2FNdRZpueRpi%2FqM94MsX1Mhq6OebLv%2FjXmsqJKbxR8UKhR0r5c3x6aVfxLFrCnIsKtOImRED%2F4WVPvLRNYgyptC0H3bV7VGxQExjGHXHr8Bp%2BWR1nmQcchHnM8Hqg%2FwNTewQEx1eRw8JqcDPAjMAAQZALj8EbxRjnbwJ86Qch8dFP1hPz4O3cLcSNuYl3OQARS%2B7sVn2DqY94X8Noxg2JXzWcdEJ%2Fs5jHSsvbtqv3o6z96%2Bte7EZUEq06%2BQSIJ8ND78SqR3KB6jYbsR0IsepMFjPUMKOr7bwGOqUBC9YX4DuaY2PNjAohXvFROO9X0iL%2BXZlCc%2Bk4Sm9Y2OELTgiZnZVXOaBtswLt7PLLH18wDqwDorvwcFEFuHStdxhlXiG14w2Bzbi8Xi8YzYy6tq9%2FY8wxa5WATKWTiy0grQe%2FRaTml5eG7aJ9BGiEiVD46pWWIUtNMLb%2FSDSgOuynswRCzsi6BGKL%2Bpug%2BRvSRszENjQkfhMZJohG5%2B%2F9dE9rkl8%2B&X-Amz-Signature=3d14af558791f2a91cf1f60a6fe46c3d17a538dfbd4a177154e78f7444f0d4d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
