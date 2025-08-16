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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OYTYHX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGsiRlMmeL9bD5xPpMXR4AID7G6KiHoqaZOy6o5P%2B8VhAiEA9wY%2FeftEFB4nzhZHrjQhwxmlRtJzdjBb4p9r8hVGERcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMKDLR8cpvnsTltzKSrcA%2F91OqPI4uXsdkRD7f5N%2Bzj%2F71en39lWutXjRWEQr8l86IgoUVrV9SQJ35g%2BeWdAgsgFoB9W0Bsu7fdmxc91vBZF7D9Gh0ZVMxzxY43K5Gh1r0t%2FXsUMzdzS6B8pUlY%2F3WX1zrIbQDL9K5BwTs3t%2FMRaHMK%2F6%2BXsbq%2FhYtN%2BOBIBSBy8SX%2BXW3jT%2BjUU8KPyw9goDmuUydhhQs5OIWRFsNsmKM1D03PPmNakGMijbel78%2FEkhso4e8AUgbMe5V0wzbPhjKMn7l8qSjgbDoB3pKqOBTgnz0HuUVpA4VSDTNrEiz3m%2F4WL1qnsQ4c1pqM75ROwehxSFKTYbUc%2F5CIU8uCr2pVA8hOHw9Hhim1Zp4jghp2DTQkaiRmPfjlQpv4Wbcrx4w1z9XiWnAHiJXZpreaSHiW%2B6SVdgY7rLbqhGtShta3tOTv2dAX0LO6Beh9BRwkzeYWWsGImyQLy%2BydF6hzfNKCpLbwqpDwyUyoP9Os5ZyjEq4UMDOv5mOle3HDAKtpbzD7BJ2t5%2BqAhiGD48ab3cCImjwf%2F6x84KVnchuVpoCzHA5ZF38Wl6qZU66Gvv8zDUwjJxhKItrl0GdYwIfYidiUfNQmdPdQSGjoimHdz7uHtt7rtRkP5Rvz6MPWbgsUGOqUBX3VoHINSKBl%2BSvFEHApXGzF4SGNe5Gvn3mTSEKpAQ2FSa0W5Av%2BxWHsSeTFn7Sse9%2FoI1C1uKZXbQ6uPpIQUG9GjTcU9lsgfHnb6j3ZZK2xvlMck9UFnRbN34p5Y2TvnPiyBt14CGDz8r5IQfK9IDQfnTXxSJT3IkbMk1L2AMQyzJQzwK0P6nwYl5C1sbDeLLFqjSI33rv8L0nPM2jT%2BqFleGsKz&X-Amz-Signature=4b8bf6cc55935edffe64347992465d439987844f8ab1fe612580318f8ec74a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OYTYHX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGsiRlMmeL9bD5xPpMXR4AID7G6KiHoqaZOy6o5P%2B8VhAiEA9wY%2FeftEFB4nzhZHrjQhwxmlRtJzdjBb4p9r8hVGERcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMKDLR8cpvnsTltzKSrcA%2F91OqPI4uXsdkRD7f5N%2Bzj%2F71en39lWutXjRWEQr8l86IgoUVrV9SQJ35g%2BeWdAgsgFoB9W0Bsu7fdmxc91vBZF7D9Gh0ZVMxzxY43K5Gh1r0t%2FXsUMzdzS6B8pUlY%2F3WX1zrIbQDL9K5BwTs3t%2FMRaHMK%2F6%2BXsbq%2FhYtN%2BOBIBSBy8SX%2BXW3jT%2BjUU8KPyw9goDmuUydhhQs5OIWRFsNsmKM1D03PPmNakGMijbel78%2FEkhso4e8AUgbMe5V0wzbPhjKMn7l8qSjgbDoB3pKqOBTgnz0HuUVpA4VSDTNrEiz3m%2F4WL1qnsQ4c1pqM75ROwehxSFKTYbUc%2F5CIU8uCr2pVA8hOHw9Hhim1Zp4jghp2DTQkaiRmPfjlQpv4Wbcrx4w1z9XiWnAHiJXZpreaSHiW%2B6SVdgY7rLbqhGtShta3tOTv2dAX0LO6Beh9BRwkzeYWWsGImyQLy%2BydF6hzfNKCpLbwqpDwyUyoP9Os5ZyjEq4UMDOv5mOle3HDAKtpbzD7BJ2t5%2BqAhiGD48ab3cCImjwf%2F6x84KVnchuVpoCzHA5ZF38Wl6qZU66Gvv8zDUwjJxhKItrl0GdYwIfYidiUfNQmdPdQSGjoimHdz7uHtt7rtRkP5Rvz6MPWbgsUGOqUBX3VoHINSKBl%2BSvFEHApXGzF4SGNe5Gvn3mTSEKpAQ2FSa0W5Av%2BxWHsSeTFn7Sse9%2FoI1C1uKZXbQ6uPpIQUG9GjTcU9lsgfHnb6j3ZZK2xvlMck9UFnRbN34p5Y2TvnPiyBt14CGDz8r5IQfK9IDQfnTXxSJT3IkbMk1L2AMQyzJQzwK0P6nwYl5C1sbDeLLFqjSI33rv8L0nPM2jT%2BqFleGsKz&X-Amz-Signature=da6f7d1456433420d6141388e63135ffb2fb8148c766b3e834cc25c5359cfa80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
