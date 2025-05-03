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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCZUZD3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDjve%2BkEAfD8X%2B34N82lfZeaZi3%2BPvHB0UPyme078Uh1AiAA%2BXEpbycw%2Fd4NPvQ8YDSZdJeJYs0ES%2BR2dhWWlVH9fSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtk%2BBiJrW4mS09SXlKtwD2ghSF3oR7zGLukYgpYP4ERW07PyNlJTA8NCVhz3D8mj2lXBSEp%2BT9cBKTVM%2BGIGvPZBN5NcDcuoWTnVG6MA2n%2F56S3bnmyBJE79VCSHpdfSsqbRqeohf1v4javIyf8VW7sHtV%2BpiZOLHJkKF9m38e0c4qJS6%2BJ%2FZH1I4TgsRoStkKviknCVnYMKMA7QeEvfZYUj2YwKcmyGXQkh%2Blp2bjXfxIGCtjg0TiwP2QzhtuA4C%2FSnowIGmUuSlkJ3GHRb8gVrIDMOlHCLefyJ1K57gqWJwAWduAgn4x9W4V0ip0s%2FJj90o3gKKIfPGI7f6%2F9wP3RMv9N2XYJaZo3ffKnrzeDNqg1ulxQBfu%2FO1NAPkGygy9pTZ8mdIxsRO584pvee9n%2FF0FxvphRUoCnCXaB%2FYhJMzUldoSNTwpssIQvkb%2FNuZpE4YSjOtcnqfPZiz5tSiOBfuEhivj8AndUCkdXzDj2U%2Fr5aRRh3OeHofgf24oKkqry2OhbuMo4wPIsMWf5CkBpGeBJtXCoQliJ6eiS6oz5SDGogGnZHoyTnvFShGHOJ7U9ZomAGzHaaBUyYQtWHPpbGvOx29J6K%2FEICj%2FqHMtT0kpL5F3ScXqMoTmhQTPQJmRivEHWcE81GN%2Fngw3t7XwAY6pgEe3PjvKk7tqwPP4G%2Fn%2FCU6xkMxuQsdm9t%2Fq35fbFtgTnnD3rJh%2FH5%2BkaGQ9bfqyYghnHderODPZQhNwzOXRtQlcuyRzu4skSGTNEdLkJrwrh1LG7SG8OVeHiOSw8eXRYOcJ6bvt7uLt3%2FG2MdGonUPKzSvhc1EKxm61K%2BJiLDYWdTz2sHR3uFcx%2F7a%2BxrBaZkIICVKmfCdSzkwNS12OCfwyzSDbH8q&X-Amz-Signature=c77766a8ca8970ce959105554757b4ad1bfdcfc6b623bb867e1ae2aea62945b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCZUZD3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDjve%2BkEAfD8X%2B34N82lfZeaZi3%2BPvHB0UPyme078Uh1AiAA%2BXEpbycw%2Fd4NPvQ8YDSZdJeJYs0ES%2BR2dhWWlVH9fSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtk%2BBiJrW4mS09SXlKtwD2ghSF3oR7zGLukYgpYP4ERW07PyNlJTA8NCVhz3D8mj2lXBSEp%2BT9cBKTVM%2BGIGvPZBN5NcDcuoWTnVG6MA2n%2F56S3bnmyBJE79VCSHpdfSsqbRqeohf1v4javIyf8VW7sHtV%2BpiZOLHJkKF9m38e0c4qJS6%2BJ%2FZH1I4TgsRoStkKviknCVnYMKMA7QeEvfZYUj2YwKcmyGXQkh%2Blp2bjXfxIGCtjg0TiwP2QzhtuA4C%2FSnowIGmUuSlkJ3GHRb8gVrIDMOlHCLefyJ1K57gqWJwAWduAgn4x9W4V0ip0s%2FJj90o3gKKIfPGI7f6%2F9wP3RMv9N2XYJaZo3ffKnrzeDNqg1ulxQBfu%2FO1NAPkGygy9pTZ8mdIxsRO584pvee9n%2FF0FxvphRUoCnCXaB%2FYhJMzUldoSNTwpssIQvkb%2FNuZpE4YSjOtcnqfPZiz5tSiOBfuEhivj8AndUCkdXzDj2U%2Fr5aRRh3OeHofgf24oKkqry2OhbuMo4wPIsMWf5CkBpGeBJtXCoQliJ6eiS6oz5SDGogGnZHoyTnvFShGHOJ7U9ZomAGzHaaBUyYQtWHPpbGvOx29J6K%2FEICj%2FqHMtT0kpL5F3ScXqMoTmhQTPQJmRivEHWcE81GN%2Fngw3t7XwAY6pgEe3PjvKk7tqwPP4G%2Fn%2FCU6xkMxuQsdm9t%2Fq35fbFtgTnnD3rJh%2FH5%2BkaGQ9bfqyYghnHderODPZQhNwzOXRtQlcuyRzu4skSGTNEdLkJrwrh1LG7SG8OVeHiOSw8eXRYOcJ6bvt7uLt3%2FG2MdGonUPKzSvhc1EKxm61K%2BJiLDYWdTz2sHR3uFcx%2F7a%2BxrBaZkIICVKmfCdSzkwNS12OCfwyzSDbH8q&X-Amz-Signature=3a4ed80176f69fb9c7175de969982f3765f4b1753dff553d3e589b638490965b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
