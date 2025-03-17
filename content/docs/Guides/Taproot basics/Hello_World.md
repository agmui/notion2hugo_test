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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ACDDHC6%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtmqAuMyZyU15XeSJgxEMFtAi5NbpCvmV7kiWz04jThAiEAiLiHbwMETx2tWco0NauMg%2Ba6i0y7gZiDJk%2FLXdDh0rMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJjvpHnhT1wMtTudkircAxNiy3ptYVkgNBBikU48mXI3%2Fibpt6xsLA84iMz028pPPRkDTdfiY3czZy%2Fj2nd7CiPp8yml%2F%2F6ZHcR9VUSMLwwvxGcFOdTlZVfZHacE57pj5BbQRi9WxCxNnIJwGM7bpB5U1rv%2BjbXTdHYnRF4kf5%2Bbx3gpCkdbsXFAq89V0SC4r3aLRaw8cbk6aoT4a5Qtbfh6N5IPB%2F5vxHzJjtApQTGpW3Qh4k43tBMvKDuVZ9eq2QDXXKJwdQWC4JzyaLWTyLgXWgbD%2B4U9jRXa5bTBsC7sb6t7BEgpQEElKEqiIMGISSx4i3sXLYfMV7NuGZ3HGNIeoh%2FSQQeNbDajD4L0hrhKde20k5tXeS7g%2FowZkEMsmtcoDt75JMHVILR2L5BzCP7NLwqhNi%2Bk78q9fObS3sbw3raGXUqCoWdRFDO6bdr0mCbXTfe9vfs5Se1jmF0EsegiSiG1CE1huZDyUaQQvd8bugyJJHkeuNTSwUc5rhNHUdUNMxCH24RvEOfY2fCn0JNoYQhs61JCKat23GJ4ko6STfgryJ3tNRQJBvqioHsKNOQouQ%2B%2ByVqNpnbREGn97F3LWfKDLeT96gu4KTodkv2jbVaBkGUAljvU8T4Zf4hKAEFM13%2FTeNxj%2By3uMPWr4L4GOqUBy1J4iMHDYrCOK%2BGHLFMFHiefYUwpo0NpsEClFPYv4gMTq4mZC2lSBR2weCh4o%2BhTxCArhmnaPTl%2F%2BJt9sjpFoAv6%2BXdxmGq9cpxrREhpciRQsgvGfLvyOE23fIOHwjU5IIxtw99RPpixbuV%2Bad%2BuZXYJWo3m2FNFX%2F3VuCKlpCHoOVXtgGOXo4vw%2FkfqMWfyvufYMv9szMMT7o1IQ9uULqYkeixC&X-Amz-Signature=0837444e3498b717ed70b17b3701e5f52c236c12889d5dc48a4b4a2e4a7f4958&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ACDDHC6%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtmqAuMyZyU15XeSJgxEMFtAi5NbpCvmV7kiWz04jThAiEAiLiHbwMETx2tWco0NauMg%2Ba6i0y7gZiDJk%2FLXdDh0rMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJjvpHnhT1wMtTudkircAxNiy3ptYVkgNBBikU48mXI3%2Fibpt6xsLA84iMz028pPPRkDTdfiY3czZy%2Fj2nd7CiPp8yml%2F%2F6ZHcR9VUSMLwwvxGcFOdTlZVfZHacE57pj5BbQRi9WxCxNnIJwGM7bpB5U1rv%2BjbXTdHYnRF4kf5%2Bbx3gpCkdbsXFAq89V0SC4r3aLRaw8cbk6aoT4a5Qtbfh6N5IPB%2F5vxHzJjtApQTGpW3Qh4k43tBMvKDuVZ9eq2QDXXKJwdQWC4JzyaLWTyLgXWgbD%2B4U9jRXa5bTBsC7sb6t7BEgpQEElKEqiIMGISSx4i3sXLYfMV7NuGZ3HGNIeoh%2FSQQeNbDajD4L0hrhKde20k5tXeS7g%2FowZkEMsmtcoDt75JMHVILR2L5BzCP7NLwqhNi%2Bk78q9fObS3sbw3raGXUqCoWdRFDO6bdr0mCbXTfe9vfs5Se1jmF0EsegiSiG1CE1huZDyUaQQvd8bugyJJHkeuNTSwUc5rhNHUdUNMxCH24RvEOfY2fCn0JNoYQhs61JCKat23GJ4ko6STfgryJ3tNRQJBvqioHsKNOQouQ%2B%2ByVqNpnbREGn97F3LWfKDLeT96gu4KTodkv2jbVaBkGUAljvU8T4Zf4hKAEFM13%2FTeNxj%2By3uMPWr4L4GOqUBy1J4iMHDYrCOK%2BGHLFMFHiefYUwpo0NpsEClFPYv4gMTq4mZC2lSBR2weCh4o%2BhTxCArhmnaPTl%2F%2BJt9sjpFoAv6%2BXdxmGq9cpxrREhpciRQsgvGfLvyOE23fIOHwjU5IIxtw99RPpixbuV%2Bad%2BuZXYJWo3m2FNFX%2F3VuCKlpCHoOVXtgGOXo4vw%2FkfqMWfyvufYMv9szMMT7o1IQ9uULqYkeixC&X-Amz-Signature=47db08f29abef37703907c92c309e8118db9a6502df1964367233ecd2bb894ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
