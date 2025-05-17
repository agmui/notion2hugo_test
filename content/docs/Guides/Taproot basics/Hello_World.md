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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQS6P3J%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1H%2B3F7KLqcsoQ7wKXKkPb8whkmYaPFvv0NZNspMMiTAiEA443l2qXuY2DdU73WzgYm8dkTnjZ4W225uSOUA9WEP5gq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMCke2iyN1fAwplBzSrcA4RQGJQjc%2F9vG6UCZzdPKGJ0y8k1dD9FOKR9QR2g4juhSE%2FpN%2BAFqmsRVg24EZX24pbV9yh8QwWAOVjvJnaD%2ByDwYsB80yAVo1Z0miSIWw%2Fvyui8%2F%2FtYmQCAoUAQUI5IRmt0pZFEpGda974qUaQkUR1tCo29OukojcZjZOvDyuUmPUoXMFYRbemgvwzaRl3Wt6WxN6gWvp%2BQzGm3J6Y9%2Bs2AzvQfkZ9lO%2Bc7R8yJRKIPM7RY2OLyzdNSrihp%2BqGIQfYi47Psm7hnesyNkOH0umypGgfHmRP3D95t8FVLy%2BUSQpdN5dVSd0OhMvKwXXfO3k5B6ep0V2SFAA4isnT%2F0z%2B5fwo470bTPv8w8UijaYcss%2FeJkr2F2L05znyKU27N4nY6fJ2vcHGxlRAHP3vH1pgeeaQekof11kvlLapPmXSlGLtkQDLYtmwmkbGB%2FhscbJ0KqyAN%2BWTA35GGJDaszuYTDpwhe7J27UKYOSTgJn1ZFQZWWufIPncoRpedn%2FXfJjceFFerFH32MyTvJqvYwMS2qpmmRwl53ytZzNX4zrSHRS%2FQrzqRXeh2j9b2WYw%2FkGqpe6PuMv2BjcL%2B9xQm%2BrhQEvVQ2aDg4a2uaLF%2BUm30%2Fpj7cVm3XMQwszzkML2eosEGOqUBNalcZnkbt2C2bz0CWIEU3H7tS875%2FmpvCm3zXGp96V4Tpzg2NVyXW0nbWuNy1QcPDNFsas8uupy9kCJX6u3IUV88t3zVEhzsBOX%2B9cXgNrBuQ521Tq2dgMIWULoVtyWlPmDrwW8ZAC1q0P3YxP%2Bkwp%2BG5eoBMgb1B7ZgD6ZBJWu0SEWXTA1zrgCY0rRZjuGOehSz1fwK915cOdPbw8TO5STAO9af&X-Amz-Signature=16ebc3b870e31e6acdd18e0e94e4d0267b1e321dafcdfbbe50011ed60778d21c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQS6P3J%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1H%2B3F7KLqcsoQ7wKXKkPb8whkmYaPFvv0NZNspMMiTAiEA443l2qXuY2DdU73WzgYm8dkTnjZ4W225uSOUA9WEP5gq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMCke2iyN1fAwplBzSrcA4RQGJQjc%2F9vG6UCZzdPKGJ0y8k1dD9FOKR9QR2g4juhSE%2FpN%2BAFqmsRVg24EZX24pbV9yh8QwWAOVjvJnaD%2ByDwYsB80yAVo1Z0miSIWw%2Fvyui8%2F%2FtYmQCAoUAQUI5IRmt0pZFEpGda974qUaQkUR1tCo29OukojcZjZOvDyuUmPUoXMFYRbemgvwzaRl3Wt6WxN6gWvp%2BQzGm3J6Y9%2Bs2AzvQfkZ9lO%2Bc7R8yJRKIPM7RY2OLyzdNSrihp%2BqGIQfYi47Psm7hnesyNkOH0umypGgfHmRP3D95t8FVLy%2BUSQpdN5dVSd0OhMvKwXXfO3k5B6ep0V2SFAA4isnT%2F0z%2B5fwo470bTPv8w8UijaYcss%2FeJkr2F2L05znyKU27N4nY6fJ2vcHGxlRAHP3vH1pgeeaQekof11kvlLapPmXSlGLtkQDLYtmwmkbGB%2FhscbJ0KqyAN%2BWTA35GGJDaszuYTDpwhe7J27UKYOSTgJn1ZFQZWWufIPncoRpedn%2FXfJjceFFerFH32MyTvJqvYwMS2qpmmRwl53ytZzNX4zrSHRS%2FQrzqRXeh2j9b2WYw%2FkGqpe6PuMv2BjcL%2B9xQm%2BrhQEvVQ2aDg4a2uaLF%2BUm30%2Fpj7cVm3XMQwszzkML2eosEGOqUBNalcZnkbt2C2bz0CWIEU3H7tS875%2FmpvCm3zXGp96V4Tpzg2NVyXW0nbWuNy1QcPDNFsas8uupy9kCJX6u3IUV88t3zVEhzsBOX%2B9cXgNrBuQ521Tq2dgMIWULoVtyWlPmDrwW8ZAC1q0P3YxP%2Bkwp%2BG5eoBMgb1B7ZgD6ZBJWu0SEWXTA1zrgCY0rRZjuGOehSz1fwK915cOdPbw8TO5STAO9af&X-Amz-Signature=261331f5299b430abf147678c10a47e9673d056419cfd864c1cde9eeb9965a42&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
