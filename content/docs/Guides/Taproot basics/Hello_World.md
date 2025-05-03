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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4TI4MP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH%2BKH%2FUNq1MQIoXuVIfNtncDGVk1IqPzt6OYwoLS5GnRAiBeRlDSb%2BVmDDjE8b3ktsg04qFumdqPuL2wMtkqQhffcCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJzdaJgG5VQQH2b4uKtwDvOnpWHLJUG3mv5cd%2Bqm32XaEUWINA7k6ujvgWDnZGsoO%2FuvgctXMv9d7Y%2F%2F5oiMeRsIIC39t4uz%2BUfj9wRfr7AsodcAyFE0v1BIzb1b9X4YsyNpZyYqrRTd%2BY97eRrM%2BXhCnnHd7HerxcSR8Voi5pqdGHa96ZAtY8HCaBQl4hMt7miMMagIoxz3ybwEqfTRCsLIt%2FFkA24eTX9m6Q7A4abUQ1sNQUG1VTevd2tMaLcu3Gii43p2mNvYvAol7KjC01QByA%2FWLiR%2BQwvYrl6KRpFrLH8qygSw%2FCU5bzXIZ1wCp4w4jpM1pM7BJQW09yQakNdnJVZzR0nmSOqCzrkwExaM0MK2raGrjN4cciL4axPJvlKAIfXQRkP0c1sd3QyG2OHppSzwZLHdhic1%2BoSQKhofu1VvrRBZoa%2BrSj56N4Av4N0TCCcXJE4xORQg%2FbLRhi5hE4Uf2lohWsSRHAYspKcKmWI%2BjAGBqPnV8EDIKrM%2FGOTnzYIhBoVTIfshfQrPfKhayW3Rft6tpvDUUAPxk4UT7S6MXTs6bvq%2BxYr%2BNwAuUmVG3JvMpfeUeD89t4gxtFFPmnQX8g%2B%2BUhtQvbgKb%2By8ZCQ60kzLyrNqR1K%2B03aw1hgN%2BY4ct5mydOTIw2IbWwAY6pgEeIpRbj4WuQNMSo6H%2Bp64YfGO8ROZkYtAV9dmH5U0qBduVoQpzkbwXGsaQ3zZMPBsXfW4invS0%2BSikZLooV71wBNZkvBmkvkFUWY7ak2rpD3r2urB3lS8AneL1q67b7a5koDBPJU943m1KIdVgyYjjradR3fG8bfpuXSR7fQbLvN7Hp%2BHh3kLH78WUv8o%2Bec4d04%2F9S3d996X2Tw2wNIcDOs%2FbxdBn&X-Amz-Signature=78e4ff8994e313980ebec8d474fda22d03a1692e1c1bf7665ac7aaa8bc2cff4e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4TI4MP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH%2BKH%2FUNq1MQIoXuVIfNtncDGVk1IqPzt6OYwoLS5GnRAiBeRlDSb%2BVmDDjE8b3ktsg04qFumdqPuL2wMtkqQhffcCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJzdaJgG5VQQH2b4uKtwDvOnpWHLJUG3mv5cd%2Bqm32XaEUWINA7k6ujvgWDnZGsoO%2FuvgctXMv9d7Y%2F%2F5oiMeRsIIC39t4uz%2BUfj9wRfr7AsodcAyFE0v1BIzb1b9X4YsyNpZyYqrRTd%2BY97eRrM%2BXhCnnHd7HerxcSR8Voi5pqdGHa96ZAtY8HCaBQl4hMt7miMMagIoxz3ybwEqfTRCsLIt%2FFkA24eTX9m6Q7A4abUQ1sNQUG1VTevd2tMaLcu3Gii43p2mNvYvAol7KjC01QByA%2FWLiR%2BQwvYrl6KRpFrLH8qygSw%2FCU5bzXIZ1wCp4w4jpM1pM7BJQW09yQakNdnJVZzR0nmSOqCzrkwExaM0MK2raGrjN4cciL4axPJvlKAIfXQRkP0c1sd3QyG2OHppSzwZLHdhic1%2BoSQKhofu1VvrRBZoa%2BrSj56N4Av4N0TCCcXJE4xORQg%2FbLRhi5hE4Uf2lohWsSRHAYspKcKmWI%2BjAGBqPnV8EDIKrM%2FGOTnzYIhBoVTIfshfQrPfKhayW3Rft6tpvDUUAPxk4UT7S6MXTs6bvq%2BxYr%2BNwAuUmVG3JvMpfeUeD89t4gxtFFPmnQX8g%2B%2BUhtQvbgKb%2By8ZCQ60kzLyrNqR1K%2B03aw1hgN%2BY4ct5mydOTIw2IbWwAY6pgEeIpRbj4WuQNMSo6H%2Bp64YfGO8ROZkYtAV9dmH5U0qBduVoQpzkbwXGsaQ3zZMPBsXfW4invS0%2BSikZLooV71wBNZkvBmkvkFUWY7ak2rpD3r2urB3lS8AneL1q67b7a5koDBPJU943m1KIdVgyYjjradR3fG8bfpuXSR7fQbLvN7Hp%2BHh3kLH78WUv8o%2Bec4d04%2F9S3d996X2Tw2wNIcDOs%2FbxdBn&X-Amz-Signature=103059cfe61e189179bf6a0e89a0373c31f861147da0bcdf61072ec4bcdcf05b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
