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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEAMB45%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBACHQpA8Uzb7FD6LQKnu1vzHrpPEd0Uh4iaFAiGesmfAiEA9hUh4h7oCpPJqYjSsADdK4mQc2XFspxxQhreCr%2BXUD8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHmdnNhXeWcbtUoqRSrcAwxtcy1%2BI0LddMzuKNraQOPuDUQ03LVpbGEvVd8y63%2BhpYLlOQiD7cFXMclRNSNgkA85Z%2FM%2BcJCdYLfYcTDdIdnzXfLQYyPA%2FW8swNu6Rx1S3pYpuAhd%2BTOQPoBVRud3Rntoaku0Jdd7Dj2W3QIAc7naxYEt05k9tO0CNZE7WOiouSVosxOtta73j0e3sTRKD%2BCfxfsfhYd5ZJuTbc9MJBKAmshtMWTm2mnbHUD7kacFQOsqs2I64nyiXMIXz5rNYf2hy9BMxEEelVY7PAbx0Ys9cuDm2tN5q4g2PJjGv8Rh1TzExZgik1mMi5d12k%2BeDh2M2KDMwFWNFgQBalvHH%2F3hFwkviohYAUKFpGPHKW1QiGQ3H%2BCn2vNBMJSaRae5bOl75vE9pTtKyBwQ04todSrKAtJC5nv%2BYXxTP5Nwnz3Ws9N06M4OI0JVs8WC6yCPEXwj1cDC3q7jzUmFCAb4AAorh8M18jvtrezL1aJuDNR7zJj%2FfXa8GJug6Ut2pHp5FdRmu2lEytkmihjf84pmX%2BOAmqYgnGp4w0JmAg%2BhEotRNKeY9izsSAzdIPVoPwFu6AdsH6rxqglCBm7Sue1WSKN8rf%2BLAzgZjU1m5C4zBwB0zmCWqXEEQGdq2WnqMMKv%2FMIGOqUByPggz%2FIgxRKf9tDfGeywcDwXTXGjFQb9ockJ8ma%2BBiB03zmxwOKWulS0GSC2iavYLgFArgK3MqvFiWjXUqMTcB5VbXdi7defBmud7LgtHFCDF8Lk3XobKIqDxA%2BunWrewNRar%2F7YxMl7nYPAuppPHiqsHZm24FZy%2B%2F35B3zS6lBMhC5FVTvfndG%2BlpIUXQM0F5KGtI33NNNygExbuU05MUDQCwAm&X-Amz-Signature=7f2858a9145b276d94ca33d6a364dfa628bfd7a5d9b3c6b5c4b6626370a2fe49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEAMB45%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBACHQpA8Uzb7FD6LQKnu1vzHrpPEd0Uh4iaFAiGesmfAiEA9hUh4h7oCpPJqYjSsADdK4mQc2XFspxxQhreCr%2BXUD8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHmdnNhXeWcbtUoqRSrcAwxtcy1%2BI0LddMzuKNraQOPuDUQ03LVpbGEvVd8y63%2BhpYLlOQiD7cFXMclRNSNgkA85Z%2FM%2BcJCdYLfYcTDdIdnzXfLQYyPA%2FW8swNu6Rx1S3pYpuAhd%2BTOQPoBVRud3Rntoaku0Jdd7Dj2W3QIAc7naxYEt05k9tO0CNZE7WOiouSVosxOtta73j0e3sTRKD%2BCfxfsfhYd5ZJuTbc9MJBKAmshtMWTm2mnbHUD7kacFQOsqs2I64nyiXMIXz5rNYf2hy9BMxEEelVY7PAbx0Ys9cuDm2tN5q4g2PJjGv8Rh1TzExZgik1mMi5d12k%2BeDh2M2KDMwFWNFgQBalvHH%2F3hFwkviohYAUKFpGPHKW1QiGQ3H%2BCn2vNBMJSaRae5bOl75vE9pTtKyBwQ04todSrKAtJC5nv%2BYXxTP5Nwnz3Ws9N06M4OI0JVs8WC6yCPEXwj1cDC3q7jzUmFCAb4AAorh8M18jvtrezL1aJuDNR7zJj%2FfXa8GJug6Ut2pHp5FdRmu2lEytkmihjf84pmX%2BOAmqYgnGp4w0JmAg%2BhEotRNKeY9izsSAzdIPVoPwFu6AdsH6rxqglCBm7Sue1WSKN8rf%2BLAzgZjU1m5C4zBwB0zmCWqXEEQGdq2WnqMMKv%2FMIGOqUByPggz%2FIgxRKf9tDfGeywcDwXTXGjFQb9ockJ8ma%2BBiB03zmxwOKWulS0GSC2iavYLgFArgK3MqvFiWjXUqMTcB5VbXdi7defBmud7LgtHFCDF8Lk3XobKIqDxA%2BunWrewNRar%2F7YxMl7nYPAuppPHiqsHZm24FZy%2B%2F35B3zS6lBMhC5FVTvfndG%2BlpIUXQM0F5KGtI33NNNygExbuU05MUDQCwAm&X-Amz-Signature=2ca3a59d83e711a9a1d52eb44b8d80a429d394c31fd5d586fbd350adaac11f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
