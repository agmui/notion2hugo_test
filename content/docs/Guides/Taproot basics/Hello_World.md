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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWMIKC2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCiZHvk13dWyeR%2FYvpbVALp17MQgp%2BTZz%2Bqtcvfc%2FIrMAIhAPwZKmuVBJ2M7%2BmM4yz5%2BYRtDbRiFkrGAScLwPtVZnjZKv8DCFIQABoMNjM3NDIzMTgzODA1IgznJVtcjcLZK%2B4149oq3APGGsENq1O3AJl0JQfX6Hy0ZvcAW4%2FhQsWjqzAaKWtzJAuVMU4%2FrKN%2BVgxgFtacqQWjZffjXVwN9OMZU4oqW432Lb0Y%2BwGg9izqwEJa%2FUZj0kiMhwt%2FFFlb5vaSzlfCgD6GcRB9GppHxK6SNW76Uw5sZ5MBJZ7GroiK1oa3bvF%2FSlWQ1UZPES82U0Z15a87jlT9xkGNFa7jdMKGwG1vZHaTiZedFJLgTytJQ%2FAUXFziQmKQPDwEGeC596gSVtiCdsOf%2FD0XHSnaL2GrctMnxhd%2Fl%2FPnYcLpLWPlMtWMUIar7mxtGCeRIBn6Dpi0oQUx6P8ZNFUUla1dOs%2BSkUQ%2BzjLaq5EdPlG1KU8lxxSvhm9CWXvZbkcbFbOz2QvlJTnGURGr5%2BL%2FbiUUnCoJJVSCpcKfZo7wlm1zCVoDeq3Kub7WoRsKqhtD9A8zPO286Pt7EsMMhp65o60vqZhi5lHXytkejrKSEMv6lRPJEIiuSzv73u4qKn9fxbtsCvnBAauDLVpQo8pCfQwhEbcAgcQQ0mpWR942qYIl7aF3smSrhyoBSn6OCWpp5sUG0l%2BRaRCuyCG%2B0fnsoMOaQGixd6i02YfQ3kP2aTPEIysjcIKiL%2BAxRewatzW5CgpEByvR6jDu5cS9BjqkAQx7l1Y8T7kZLXPTM2XSd%2Ft3SOCm9sAXH5dDigav5p%2Bll5Iw2I4Qcj2NAXp9%2BK6DEQBiriC5njEbQ4VH82aBcNPkQibWUXyVMJtLTIfAYaX8GP5NiqeEe9%2BCLgHZ%2B6zJHRNKu5f0xLzkaYIVG8yiwn48J2YnB8tsYyUMPPlGp0MIDN9ogKEablIrl7C%2FkJmadmWPM3bx8KNSZQx80brHTdvTGC7O&X-Amz-Signature=60c0eae4a61c995ba2e3cdc91f50c194813ccb3f915e8cb5185a409717662531&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWMIKC2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCiZHvk13dWyeR%2FYvpbVALp17MQgp%2BTZz%2Bqtcvfc%2FIrMAIhAPwZKmuVBJ2M7%2BmM4yz5%2BYRtDbRiFkrGAScLwPtVZnjZKv8DCFIQABoMNjM3NDIzMTgzODA1IgznJVtcjcLZK%2B4149oq3APGGsENq1O3AJl0JQfX6Hy0ZvcAW4%2FhQsWjqzAaKWtzJAuVMU4%2FrKN%2BVgxgFtacqQWjZffjXVwN9OMZU4oqW432Lb0Y%2BwGg9izqwEJa%2FUZj0kiMhwt%2FFFlb5vaSzlfCgD6GcRB9GppHxK6SNW76Uw5sZ5MBJZ7GroiK1oa3bvF%2FSlWQ1UZPES82U0Z15a87jlT9xkGNFa7jdMKGwG1vZHaTiZedFJLgTytJQ%2FAUXFziQmKQPDwEGeC596gSVtiCdsOf%2FD0XHSnaL2GrctMnxhd%2Fl%2FPnYcLpLWPlMtWMUIar7mxtGCeRIBn6Dpi0oQUx6P8ZNFUUla1dOs%2BSkUQ%2BzjLaq5EdPlG1KU8lxxSvhm9CWXvZbkcbFbOz2QvlJTnGURGr5%2BL%2FbiUUnCoJJVSCpcKfZo7wlm1zCVoDeq3Kub7WoRsKqhtD9A8zPO286Pt7EsMMhp65o60vqZhi5lHXytkejrKSEMv6lRPJEIiuSzv73u4qKn9fxbtsCvnBAauDLVpQo8pCfQwhEbcAgcQQ0mpWR942qYIl7aF3smSrhyoBSn6OCWpp5sUG0l%2BRaRCuyCG%2B0fnsoMOaQGixd6i02YfQ3kP2aTPEIysjcIKiL%2BAxRewatzW5CgpEByvR6jDu5cS9BjqkAQx7l1Y8T7kZLXPTM2XSd%2Ft3SOCm9sAXH5dDigav5p%2Bll5Iw2I4Qcj2NAXp9%2BK6DEQBiriC5njEbQ4VH82aBcNPkQibWUXyVMJtLTIfAYaX8GP5NiqeEe9%2BCLgHZ%2B6zJHRNKu5f0xLzkaYIVG8yiwn48J2YnB8tsYyUMPPlGp0MIDN9ogKEablIrl7C%2FkJmadmWPM3bx8KNSZQx80brHTdvTGC7O&X-Amz-Signature=a7b201c9f1d873fba59efcfd52c4ffa3c166786f909a4f2a0c50082bc2dd990c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
