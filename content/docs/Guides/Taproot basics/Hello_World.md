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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHA5SSC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC5CMS7dNEkTVqtqvkNeVOYJ0P0p0k6R2oVn2jfWzqSqAIhAOhOjcuI4P9lABgkwpYgjdbU2XiIjIe9ugCrhptBvC1dKv8DCEkQABoMNjM3NDIzMTgzODA1IgwGl%2Fls441xdHnL97Eq3ANhSVuFMtaIxK817tgLuhUCTZIQ1lUfVg4pYcirVfQbGJcpYgM6USEYEpt6gR1P5Fy4MrqNSQZuoeJzrQvN53pBNPh%2FPpqukxJUqwv0QFqwmJtv1l2MXn4ABQl8MjVDg55Zz%2FKEaGhr7Q2sRJ6v%2BTQGx%2FzbZyhx7PgiZ0Znfl93RvuL3GO4Upry6AruUxdGOx0UBHFJkv9TVMVMMPTh8EfgR0rMZ7drI6Qlq5UevNH5faAJ1%2FP8pj%2BB893fuLqX9mABSFGtzAeLDh9FMHIlxuXhxTVCqnUhyK%2B7I1gE0bneN9UNw37FViOYftrhpxGltHsuI%2FuzksUTREL1%2B%2BVf9kLnyGUHaT4b6Vn4eSOpd6%2BL5c7Qh6Zf0qOJgvgnoe3xIyMO%2FMkbzXmTVt1RL8cl7z8NIRyCy898tNmvBW7bGIasorz8ZIqBhd%2BLXYV1aXYN0uIQjLNRcYtKEK3g10ibM9WKZaSMrapTma1T7zwofXGEtxKrTu2rXKamuZ5XpLwLBzDdK5qOp7AB6ZhE%2F6auAYhvevWUI3jsvMAm4dv7z%2BHqiavGOYw7d8MlKFGOL00Ygw6%2FntxCeXRTvGsp1E6MOosWJVDoRs6MSpa%2BO%2BO%2Blh6xA9AEy6Zm%2Bbv5k8PY0jCpn469BjqkAdg5XufHV0bflcFdT9g6JfwqFbiaeanCzE6WzHEwHbJ8hHoaeYWn%2F2I8b66IIN1dglrKgQNdICLy5FRgztGvrW1QpX%2Fw7NlrqOEOQzMRzYMr1vgXvrXyvsdM2GRaETic4sxd3%2FX0TV11EokiwFMJHpK9DRHWy89C2K3ERtSdajgqpHgca5tPsFzemGPXh9VseNH2j3XT7LyjECmPQ%2F%2BVZiwAtA6d&X-Amz-Signature=d1183edb44666168316002d1b8c1d63c0a9d84d5d7198eb2593491c1d702c147&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHA5SSC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC5CMS7dNEkTVqtqvkNeVOYJ0P0p0k6R2oVn2jfWzqSqAIhAOhOjcuI4P9lABgkwpYgjdbU2XiIjIe9ugCrhptBvC1dKv8DCEkQABoMNjM3NDIzMTgzODA1IgwGl%2Fls441xdHnL97Eq3ANhSVuFMtaIxK817tgLuhUCTZIQ1lUfVg4pYcirVfQbGJcpYgM6USEYEpt6gR1P5Fy4MrqNSQZuoeJzrQvN53pBNPh%2FPpqukxJUqwv0QFqwmJtv1l2MXn4ABQl8MjVDg55Zz%2FKEaGhr7Q2sRJ6v%2BTQGx%2FzbZyhx7PgiZ0Znfl93RvuL3GO4Upry6AruUxdGOx0UBHFJkv9TVMVMMPTh8EfgR0rMZ7drI6Qlq5UevNH5faAJ1%2FP8pj%2BB893fuLqX9mABSFGtzAeLDh9FMHIlxuXhxTVCqnUhyK%2B7I1gE0bneN9UNw37FViOYftrhpxGltHsuI%2FuzksUTREL1%2B%2BVf9kLnyGUHaT4b6Vn4eSOpd6%2BL5c7Qh6Zf0qOJgvgnoe3xIyMO%2FMkbzXmTVt1RL8cl7z8NIRyCy898tNmvBW7bGIasorz8ZIqBhd%2BLXYV1aXYN0uIQjLNRcYtKEK3g10ibM9WKZaSMrapTma1T7zwofXGEtxKrTu2rXKamuZ5XpLwLBzDdK5qOp7AB6ZhE%2F6auAYhvevWUI3jsvMAm4dv7z%2BHqiavGOYw7d8MlKFGOL00Ygw6%2FntxCeXRTvGsp1E6MOosWJVDoRs6MSpa%2BO%2BO%2Blh6xA9AEy6Zm%2Bbv5k8PY0jCpn469BjqkAdg5XufHV0bflcFdT9g6JfwqFbiaeanCzE6WzHEwHbJ8hHoaeYWn%2F2I8b66IIN1dglrKgQNdICLy5FRgztGvrW1QpX%2Fw7NlrqOEOQzMRzYMr1vgXvrXyvsdM2GRaETic4sxd3%2FX0TV11EokiwFMJHpK9DRHWy89C2K3ERtSdajgqpHgca5tPsFzemGPXh9VseNH2j3XT7LyjECmPQ%2F%2BVZiwAtA6d&X-Amz-Signature=f2b4fe06e1d29c953bbbe8cd77f7692ee1c124290e227abb0aaaca4263479c19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
