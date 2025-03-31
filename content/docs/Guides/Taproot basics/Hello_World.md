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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FWJ5YB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD1y9rEmO9%2BTAZ8vbNd53ccSrm2h3uEwlpdeoOczKzZQQIgUfZ1EgCXvtWcyg8J8moKXaDRZbfvSpBKoig2QTBU%2B2cqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHP2DNpUuATpFushBSrcAxZsA01tfj0LkZ5zJQIVYJJlB2CbOAATJxsQwoEQ93I38s2AbWxje%2FQVf25XXAb%2B3DnjAnuHxwXyQdVdleoZX4oIr%2FoPn9Ejz1YzyZl9po020sy70dFsZbJaoSBMOGFsYi6WxwNaiZqMouj8E1HrID0cWHqIIuJ%2FA0z1eajblvDa5LIXD%2ByaQ882l4PFSPa6QsMAW5JiXPE%2BBm30H%2FKnz1CCUQftjEl6ubmYP5ArX4%2BTlMwFSS%2F88nk8JGgxV5hbYaeU3zc7dBnwHzrjt8xALyufyMAxSXvVWEWliVf8Px6K7ZOsnHnNMlKGtmU%2BhPlcjAsigwEEt2y3pPOy8ZLrRaSnWv5YtngtehMoxzunNDlS%2BBjK8Y%2BRMnsv1iuLMotkfM97D4PcXcMyNFJwFMt6lSxREm%2B63LQurGsPDYboHsF67vUPjRLdrZJIZ356gWCGfbrepfTqLdaLFeWzh%2FGPKfMdafAyzkaLnScHuoUYrFeQMKLbx%2B69wmmaPyO2OnV%2F%2FTwqBnmZglapslU%2F7YLGErGocVmV%2F4bQpE0B7sLSql1ariVavj3S%2FG1UEOGxo01BmS0BUigVNI2DysizggX0m98IZZw2qhR4abqZRFwpLq4DjalaSiNuYKicyYwiMN%2Biqr8GOqUBYbdM1fdv6wXNuakICOGgVfw%2FU4p42mcxE4zOf91NUsZYIIbEXcqlCgW453fxMwdzhSCPFcfWqBrA7mNqriLVPT7CVCuc7Uue4O0RuFoXy7gQTYjlVHjvnLLvpUKJOpaesK03YPFcU7l6Vnjcep7mozryiCfcnPohkV94v7yUGA%2BXElFQoA3POwkFW3VRvNnuCcSzewMc8RWSxnWFL4X602ANl6rF&X-Amz-Signature=c65bcd4ffba15689c31d409e56f21cfd0023354e867482c1ecaf96a7c533f07c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FWJ5YB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD1y9rEmO9%2BTAZ8vbNd53ccSrm2h3uEwlpdeoOczKzZQQIgUfZ1EgCXvtWcyg8J8moKXaDRZbfvSpBKoig2QTBU%2B2cqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHP2DNpUuATpFushBSrcAxZsA01tfj0LkZ5zJQIVYJJlB2CbOAATJxsQwoEQ93I38s2AbWxje%2FQVf25XXAb%2B3DnjAnuHxwXyQdVdleoZX4oIr%2FoPn9Ejz1YzyZl9po020sy70dFsZbJaoSBMOGFsYi6WxwNaiZqMouj8E1HrID0cWHqIIuJ%2FA0z1eajblvDa5LIXD%2ByaQ882l4PFSPa6QsMAW5JiXPE%2BBm30H%2FKnz1CCUQftjEl6ubmYP5ArX4%2BTlMwFSS%2F88nk8JGgxV5hbYaeU3zc7dBnwHzrjt8xALyufyMAxSXvVWEWliVf8Px6K7ZOsnHnNMlKGtmU%2BhPlcjAsigwEEt2y3pPOy8ZLrRaSnWv5YtngtehMoxzunNDlS%2BBjK8Y%2BRMnsv1iuLMotkfM97D4PcXcMyNFJwFMt6lSxREm%2B63LQurGsPDYboHsF67vUPjRLdrZJIZ356gWCGfbrepfTqLdaLFeWzh%2FGPKfMdafAyzkaLnScHuoUYrFeQMKLbx%2B69wmmaPyO2OnV%2F%2FTwqBnmZglapslU%2F7YLGErGocVmV%2F4bQpE0B7sLSql1ariVavj3S%2FG1UEOGxo01BmS0BUigVNI2DysizggX0m98IZZw2qhR4abqZRFwpLq4DjalaSiNuYKicyYwiMN%2Biqr8GOqUBYbdM1fdv6wXNuakICOGgVfw%2FU4p42mcxE4zOf91NUsZYIIbEXcqlCgW453fxMwdzhSCPFcfWqBrA7mNqriLVPT7CVCuc7Uue4O0RuFoXy7gQTYjlVHjvnLLvpUKJOpaesK03YPFcU7l6Vnjcep7mozryiCfcnPohkV94v7yUGA%2BXElFQoA3POwkFW3VRvNnuCcSzewMc8RWSxnWFL4X602ANl6rF&X-Amz-Signature=8e89677937133f434bd3cdae24f78c7992fb2cfc4c646778a7f1f365a7514519&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
