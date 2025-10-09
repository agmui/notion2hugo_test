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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6SQX2MX%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC4JFL%2B8%2FU0iXkDpXoCBQhgUEC0H9R1tVzEnNBv9U9JyAiEAoSSy6Fa5MVk9Zwu1mYgCqvaiF0602Q6yGrylkXJb8CkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyoRr6UNsWfcyE0xSrcA1L6%2B%2FO8%2BHwWolSgQSLNkUgVUtd8V423Kb6fzDN4QbapTs9gQAGM0LGBBr7Z%2BLkVC4HZl6saroGmksp%2FxAMu2qlPGhByfpzyG1mcbzqN0pWGcFQSifnjU0AN%2BHSeb1HBjPxq1hq8m8IeNIKGpxkFhJQAYvWAlz4gztpxij2KTRum9ahr1dM0uNfQ1r9UFV9hYNNfLHgZEewC45xm2DW%2F0i7XojyJrAQwyU25Qhz2TnrmxY7UPQIo9BrmGjobHFXPlfojaGu8QbK1fnmWIcjCP3aTXMq1Tuy7q6ML%2Fn9MgVUpEMaG2KT45rZcneX%2B5vFGsRnMoDRtzp69g%2F8N5H5mBEo41xlkWC8Gog01wPDR14XBu1si9OYXbHmPxup5wOrqENhzrTes%2FzoIJukFOxNqBcM2sssN9VrMzs37Xle5JwZxQyHpwj0t%2FiLhU1XzUH%2BtZVdOZfN32KSFi0G62240tC6zUGeBkiR39CiLacjDjvsW4RP7%2Fyx8H2XkkNcEjQmOesmEriCV4EbM0VqJ4xIVEjbdKOOR2tjX5LGxjtNfiL9BGat4v15oAJt%2F3zz9HXZ2kz%2FzxLkAT5Jj4g28I5c%2FtWVue1FqdtJ6bRvalxqHiGSBlSe9afYpIIipP0nsMMD6m8cGOqUBA7FVCwff4y38oatRpOqTHjQYxMW0FowkM6oGgEAo1oVuh9sJ9psbdo%2FWyYUk4G6o%2FK526Z6B28G9EkviFrfuJTIsV%2FJySi%2FTPWKZAkEbhx6i4NBuDHHIhaHdsIIPsc0T%2Bv7NXE31adN0H2kqb8X0rMESvp3gKH9zWWfQ81jtCX%2FG22BgPSIvN%2BiqMVAbYrpPWnCsGf3ollp3V5UUmcHomrt0luwl&X-Amz-Signature=affd8a238111735d57668b6ddd2ad0c4553946114264067b8e0625b79795fd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6SQX2MX%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC4JFL%2B8%2FU0iXkDpXoCBQhgUEC0H9R1tVzEnNBv9U9JyAiEAoSSy6Fa5MVk9Zwu1mYgCqvaiF0602Q6yGrylkXJb8CkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyoRr6UNsWfcyE0xSrcA1L6%2B%2FO8%2BHwWolSgQSLNkUgVUtd8V423Kb6fzDN4QbapTs9gQAGM0LGBBr7Z%2BLkVC4HZl6saroGmksp%2FxAMu2qlPGhByfpzyG1mcbzqN0pWGcFQSifnjU0AN%2BHSeb1HBjPxq1hq8m8IeNIKGpxkFhJQAYvWAlz4gztpxij2KTRum9ahr1dM0uNfQ1r9UFV9hYNNfLHgZEewC45xm2DW%2F0i7XojyJrAQwyU25Qhz2TnrmxY7UPQIo9BrmGjobHFXPlfojaGu8QbK1fnmWIcjCP3aTXMq1Tuy7q6ML%2Fn9MgVUpEMaG2KT45rZcneX%2B5vFGsRnMoDRtzp69g%2F8N5H5mBEo41xlkWC8Gog01wPDR14XBu1si9OYXbHmPxup5wOrqENhzrTes%2FzoIJukFOxNqBcM2sssN9VrMzs37Xle5JwZxQyHpwj0t%2FiLhU1XzUH%2BtZVdOZfN32KSFi0G62240tC6zUGeBkiR39CiLacjDjvsW4RP7%2Fyx8H2XkkNcEjQmOesmEriCV4EbM0VqJ4xIVEjbdKOOR2tjX5LGxjtNfiL9BGat4v15oAJt%2F3zz9HXZ2kz%2FzxLkAT5Jj4g28I5c%2FtWVue1FqdtJ6bRvalxqHiGSBlSe9afYpIIipP0nsMMD6m8cGOqUBA7FVCwff4y38oatRpOqTHjQYxMW0FowkM6oGgEAo1oVuh9sJ9psbdo%2FWyYUk4G6o%2FK526Z6B28G9EkviFrfuJTIsV%2FJySi%2FTPWKZAkEbhx6i4NBuDHHIhaHdsIIPsc0T%2Bv7NXE31adN0H2kqb8X0rMESvp3gKH9zWWfQ81jtCX%2FG22BgPSIvN%2BiqMVAbYrpPWnCsGf3ollp3V5UUmcHomrt0luwl&X-Amz-Signature=64ed3c55ec99e2e6423c26e8a6e857fcb8fca718742cc441fd8ed32feddd2d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
