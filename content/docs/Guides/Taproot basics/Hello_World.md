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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIAECMJC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDSZ2nxgb1QPseqO33f045UZvJ2SdHQ19A%2Fut5KrkDZcAiEAj00bLg8Layg5hU%2BJYCa6NBAnQ0GJqCKVOwgYYzuUPb8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv6q2JmRw2pFBjpzCrcA3phnS36Q6eYLTacV69nHr6DWugBwpmFxh66zuERgcPFbinBDEg9Sfw6KEFX%2B5q6h5G9q1PPj2KLFxQfip7xqEBY5aeieWgb3%2B0awehzVEZislm0U1R8FpexR7j5xIVckykrv7gknH%2BJ32bYi29zFQfn67WslNXg%2BCzqH1XrWRjUAz0ib40kmNUSn%2BEXjyF3S1SUHehBkmS7CAXz8CKh7a5DzE9c59PHJrwEodiV9Zgku%2FrjnC5OjAOW5Cus9h4%2BMp3Xxemh1a1zTibyx4i8nQgtHpPs4NofmNnaf3uJay2BZrRzrNpDpNgESY8AIH4GbtW2IK9M4J4Gp6PLlrVTRnHqtVa53Ld6hmDyh7kd2YCBxGLqW1zpIdYLop%2FCeeK4%2FVeaLDQ3AbARhgNRdHO%2BI1DBWa6qlifhhA9edGuPQEFKK365%2FjmMQi%2FKMjxhSEue0XXtc5UIj2JnVQ787DRMI%2FPl0k%2BQTLj9vgQ%2FFDeh3bu%2F4mmth4gDGAvEOSDlrkku7FTT8ibl%2BNAJxUbrCNfz4rnNhp%2F2cWUMs3XiEZ7X%2BtGZd3LpCB4I2PemegF7N5Itw%2B%2FPMBkRIGCbRPRmOyzlXetVxZ8OF72odbSMYzFlv11m38DpVVFoMVJ8ciXMMPSUjL4GOqUBY%2Bijp8%2F4hnvCd5pfE2G1wYS%2F79yM2QhmcVJgyXR1Q0itu0ghN6OY06kgrZd6dd3zOcWvYHjUwnqpHgBbyqRjR17xPA2XsGGql5GqTo9zyKil4MzOzUe8759yc3NwCXLq9Gju8XfVU3ps4Xuk1F67k8lw%2FU8p2VP9LeejLyVtoVX8j7HuqchkHEvg10c%2FsVK%2BRFlwD3hU9WxeocHA9u7AZ24ELNPI&X-Amz-Signature=c61a9d6c3ecdeacd1d1f45277fc1a945fee98671b95860098b3cfab10664d7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIAECMJC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDSZ2nxgb1QPseqO33f045UZvJ2SdHQ19A%2Fut5KrkDZcAiEAj00bLg8Layg5hU%2BJYCa6NBAnQ0GJqCKVOwgYYzuUPb8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv6q2JmRw2pFBjpzCrcA3phnS36Q6eYLTacV69nHr6DWugBwpmFxh66zuERgcPFbinBDEg9Sfw6KEFX%2B5q6h5G9q1PPj2KLFxQfip7xqEBY5aeieWgb3%2B0awehzVEZislm0U1R8FpexR7j5xIVckykrv7gknH%2BJ32bYi29zFQfn67WslNXg%2BCzqH1XrWRjUAz0ib40kmNUSn%2BEXjyF3S1SUHehBkmS7CAXz8CKh7a5DzE9c59PHJrwEodiV9Zgku%2FrjnC5OjAOW5Cus9h4%2BMp3Xxemh1a1zTibyx4i8nQgtHpPs4NofmNnaf3uJay2BZrRzrNpDpNgESY8AIH4GbtW2IK9M4J4Gp6PLlrVTRnHqtVa53Ld6hmDyh7kd2YCBxGLqW1zpIdYLop%2FCeeK4%2FVeaLDQ3AbARhgNRdHO%2BI1DBWa6qlifhhA9edGuPQEFKK365%2FjmMQi%2FKMjxhSEue0XXtc5UIj2JnVQ787DRMI%2FPl0k%2BQTLj9vgQ%2FFDeh3bu%2F4mmth4gDGAvEOSDlrkku7FTT8ibl%2BNAJxUbrCNfz4rnNhp%2F2cWUMs3XiEZ7X%2BtGZd3LpCB4I2PemegF7N5Itw%2B%2FPMBkRIGCbRPRmOyzlXetVxZ8OF72odbSMYzFlv11m38DpVVFoMVJ8ciXMMPSUjL4GOqUBY%2Bijp8%2F4hnvCd5pfE2G1wYS%2F79yM2QhmcVJgyXR1Q0itu0ghN6OY06kgrZd6dd3zOcWvYHjUwnqpHgBbyqRjR17xPA2XsGGql5GqTo9zyKil4MzOzUe8759yc3NwCXLq9Gju8XfVU3ps4Xuk1F67k8lw%2FU8p2VP9LeejLyVtoVX8j7HuqchkHEvg10c%2FsVK%2BRFlwD3hU9WxeocHA9u7AZ24ELNPI&X-Amz-Signature=20b9a7b8e725b973f61481bc8d82968fad2f10dbb442ccb3f8a566fae43f595b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
