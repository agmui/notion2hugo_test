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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YB6FDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBf8Rqa2Wye9ZlSykAF5nIBhpblc5VNBvUXTylyqR2SiAiEA9yGIh4WB6xKHm6D6uHrGWNehGvEX3Bf%2Bl5hTjUb3bMwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSbUBTI7HNg16t2WSrcA3HNiJC%2FuToiNkscEnIkgbXt76TQahqYaJ2btvSH6PrMdCq4NCM18iAMLXDxNihrrkXZ6eYM%2FqW3NgzPNEB3C6jxZar5PVahGRhttjPTt%2BBx30xMRRzVi51JBfPQH%2B3URd%2FrvqvrIvA%2BXQGVGEmgRF9UBcPdwHIEDVpJQ2HsenIvEYgcohIoDToRbbPgvHnRDB60iOtdz2d6kL5XB6CqwctyEjBdPgtfUilvaDbTu%2F0jMoOlsyktWI3LFB9Ji4a2sfqjp43KeJuN04gLzZSscbFVu37sHFMGFcclHyAzLzDR7WcvupsrWuVFgqe2RKmEvinj%2FuvJ9ISyBdqW2%2BacUx09gRc1tthf2yovjtjnHOLfZCcKCxgYtS7r2z7hq9jk782id3sbj7smwh4zawU6wBcyx4VGIG%2FHNRlCNpbxJsM2SoWdBTCJR6BtzU3f%2Frd0WNrnthKOZPnGvNcQjnTr7tJZ4EUNUTV%2BIKtXIhIgeE43EvpCzwNM7OF5MrvnUxaOSgbv5lmz6rD79N1fOugEHt5fH9Dszd4xerfYquM8lGPv5Az6QMZn0Xg63H7DGFexr387Ubb9oCQR14SEnfbBshhSO1V%2B3VxPUvBmYGDo0rfvNG2BijUfwnTd6rvGMKeqnsAGOqUBThYa7Q88%2BIl6%2BTghaaNunghRjs4Vgktsr3DEW0ch7jhxc7a2TGADk%2F9NNOTpOalt4wxkXN5zw2bhX9vkmxSczkwdHCLpdIRTfwlp2i5ZkTSD9EK%2BgHnkEdS7P5EyVBTB5DXgS8QZBrq9AXV8LWCyfvJWLefg6J%2BNCNkZx4CTWzlJrlhFAUGScUEfyjLAoHp30U0WLLrHkXeQbyxzDHFfkGPxIqip&X-Amz-Signature=acfb4a835cfa7437da8cab9f2fcaf2a05752234447d5a21300c14a780b382069&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YB6FDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBf8Rqa2Wye9ZlSykAF5nIBhpblc5VNBvUXTylyqR2SiAiEA9yGIh4WB6xKHm6D6uHrGWNehGvEX3Bf%2Bl5hTjUb3bMwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSbUBTI7HNg16t2WSrcA3HNiJC%2FuToiNkscEnIkgbXt76TQahqYaJ2btvSH6PrMdCq4NCM18iAMLXDxNihrrkXZ6eYM%2FqW3NgzPNEB3C6jxZar5PVahGRhttjPTt%2BBx30xMRRzVi51JBfPQH%2B3URd%2FrvqvrIvA%2BXQGVGEmgRF9UBcPdwHIEDVpJQ2HsenIvEYgcohIoDToRbbPgvHnRDB60iOtdz2d6kL5XB6CqwctyEjBdPgtfUilvaDbTu%2F0jMoOlsyktWI3LFB9Ji4a2sfqjp43KeJuN04gLzZSscbFVu37sHFMGFcclHyAzLzDR7WcvupsrWuVFgqe2RKmEvinj%2FuvJ9ISyBdqW2%2BacUx09gRc1tthf2yovjtjnHOLfZCcKCxgYtS7r2z7hq9jk782id3sbj7smwh4zawU6wBcyx4VGIG%2FHNRlCNpbxJsM2SoWdBTCJR6BtzU3f%2Frd0WNrnthKOZPnGvNcQjnTr7tJZ4EUNUTV%2BIKtXIhIgeE43EvpCzwNM7OF5MrvnUxaOSgbv5lmz6rD79N1fOugEHt5fH9Dszd4xerfYquM8lGPv5Az6QMZn0Xg63H7DGFexr387Ubb9oCQR14SEnfbBshhSO1V%2B3VxPUvBmYGDo0rfvNG2BijUfwnTd6rvGMKeqnsAGOqUBThYa7Q88%2BIl6%2BTghaaNunghRjs4Vgktsr3DEW0ch7jhxc7a2TGADk%2F9NNOTpOalt4wxkXN5zw2bhX9vkmxSczkwdHCLpdIRTfwlp2i5ZkTSD9EK%2BgHnkEdS7P5EyVBTB5DXgS8QZBrq9AXV8LWCyfvJWLefg6J%2BNCNkZx4CTWzlJrlhFAUGScUEfyjLAoHp30U0WLLrHkXeQbyxzDHFfkGPxIqip&X-Amz-Signature=9287f00e905db960ae4d490a98f6a39099c18e5feabe48bdf0e7eda5c38501b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
