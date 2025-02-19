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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHXKJOL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHq0kTlmp%2F6bdipt8nfhgE6CoNKCFO%2FLyYA3n1X3ZC%2BbAiAsWXvkq9N7CzCu1xbJdR9jt2mNSGNvgX1oNY3x4nKhISqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh9tEuNY7K%2FAkZvi4KtwDw%2FnOKe87USpvuLRHXVxrGNi%2BgHOwD7hdYVTWBrUIpFxdb%2B9QwSL6QstNC3Q15Vh0np28d5JyIRDl9CBI6CtHs1pZ0pK9LDzJUUMCh38yE8Amm0rMZSVU0RKpTvQkDt7kqiOMwMIrSTgV1S0BEkG%2BrTpxYMMWd1WwoesXlfVWJh86%2BF5yH3fVVXzwNBYdQI98ebrGAYQFdAoCg%2FvhWgbSSGQBJbfcUTKFlzFk5CTjqKDP6GKy2TjHI2Jhai39ZNbKODW396KWDG%2BAFSw5P3B5MHQc%2Bmfd0G3yWuTEhA5PJqKTGZ0h6TAWxBJJ1k5LujRfwFuRf%2FRZ2dUE%2BmSgCtFdDV0MLSd9bPdkNmWrZ8mDvgGREiwxf0TWKOOxi2GucvmIADDQphCwUUkzK%2BUvE4zicfIL5JXeP8Bxg2FIZLyQRKUXEvshudWWV8mQGHJJf0EkVpCQFPxJvMmP4uLRwXL7gPeBcTnq83xjtEdveFPVD7ZPpiUZqHUyBjNi%2Fne8u7Duo4LoquCzHEQvOI1gCVDkuAE9Jck9JhkZO5ggJ8yaaKpxlRznHW%2BG0ePxhxP%2FxFh07AF6dBrzuuBU7MuDSJocXbeVs%2FJt0S98F96i3XrcGukKVnn3ADyMRKTAjokwobzWvQY6pgE7CA%2BDaYuU6G6A6Wcb2XM9kiFHds9gM7UffEeumjpsKodNEdPleM1yFE3%2BMa8v%2FsXFdAh2pi5dpnBcFsK7M6zsZdF6i4HZtcMe3iLHwEgRCphK8GNZe3QYVfVftOIxzNl1g9j56Gn2CZyM1a1gLz9AsqMeMZYh8%2Fn48RvWu5uWZNsvodpXSnTctP4mECogMDQAkDall1i8u5Yl6bnq03wyhW4KKa%2B2&X-Amz-Signature=d1f43874ea74db16df8d6507c198fd766e3a8bb04ba8a4f7f93e674a1d371fad&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHXKJOL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHq0kTlmp%2F6bdipt8nfhgE6CoNKCFO%2FLyYA3n1X3ZC%2BbAiAsWXvkq9N7CzCu1xbJdR9jt2mNSGNvgX1oNY3x4nKhISqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh9tEuNY7K%2FAkZvi4KtwDw%2FnOKe87USpvuLRHXVxrGNi%2BgHOwD7hdYVTWBrUIpFxdb%2B9QwSL6QstNC3Q15Vh0np28d5JyIRDl9CBI6CtHs1pZ0pK9LDzJUUMCh38yE8Amm0rMZSVU0RKpTvQkDt7kqiOMwMIrSTgV1S0BEkG%2BrTpxYMMWd1WwoesXlfVWJh86%2BF5yH3fVVXzwNBYdQI98ebrGAYQFdAoCg%2FvhWgbSSGQBJbfcUTKFlzFk5CTjqKDP6GKy2TjHI2Jhai39ZNbKODW396KWDG%2BAFSw5P3B5MHQc%2Bmfd0G3yWuTEhA5PJqKTGZ0h6TAWxBJJ1k5LujRfwFuRf%2FRZ2dUE%2BmSgCtFdDV0MLSd9bPdkNmWrZ8mDvgGREiwxf0TWKOOxi2GucvmIADDQphCwUUkzK%2BUvE4zicfIL5JXeP8Bxg2FIZLyQRKUXEvshudWWV8mQGHJJf0EkVpCQFPxJvMmP4uLRwXL7gPeBcTnq83xjtEdveFPVD7ZPpiUZqHUyBjNi%2Fne8u7Duo4LoquCzHEQvOI1gCVDkuAE9Jck9JhkZO5ggJ8yaaKpxlRznHW%2BG0ePxhxP%2FxFh07AF6dBrzuuBU7MuDSJocXbeVs%2FJt0S98F96i3XrcGukKVnn3ADyMRKTAjokwobzWvQY6pgE7CA%2BDaYuU6G6A6Wcb2XM9kiFHds9gM7UffEeumjpsKodNEdPleM1yFE3%2BMa8v%2FsXFdAh2pi5dpnBcFsK7M6zsZdF6i4HZtcMe3iLHwEgRCphK8GNZe3QYVfVftOIxzNl1g9j56Gn2CZyM1a1gLz9AsqMeMZYh8%2Fn48RvWu5uWZNsvodpXSnTctP4mECogMDQAkDall1i8u5Yl6bnq03wyhW4KKa%2B2&X-Amz-Signature=1741884cdea70077357b4c5bded9c598ee4670ce514e096fd25cb5be5f5049ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
