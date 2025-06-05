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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JLEABJJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDeYqCZ2b56RdpJYb1AUavRYxQfV2wIKS9BB%2FMNEnr2nQIhAJtIUKmLIJ3TWhIy%2BySzmvmvQUyFikYhBIwOCMEMn5sOKv8DCEkQABoMNjM3NDIzMTgzODA1IgyWQwqkNcv5ImyTnoQq3ANI41uFdclIX1bbYqf7Z2dXZC5ohrY74OXuGHkbmsc5D%2FYjloFviJF26mII983t6XMyu3BrArEICEeBlwqXPWHDOejuw0iuMMGBMLq2qc16yGheThVl2GEPz4lbY7jj8bToad4cK92nak04DplXKjknmc3bqY6kDxB8WM4Jfnei8VZFsjmnqT2qu9mCDe6Q8gdk0wA1tKsixfli0wrMGSAnaVF9YsZUkqIqYmSxSLC%2B5pLBNKfkJZ7c05foQh4BHoJhV3ElUokRpua9qCNI0lrQEgzy6vIMPpuSCPc2w3ekvJuNAmm5DzIynzRXBupU%2F%2Bt0h%2Fdm6ndyS0LFjNxwF4n4Vf0OzkDJCRVaXJZWE8bSbLNXmA5uNYblp4LkZQtQgbjcU9Y2dq6GzKFiyMwMVHb8KvG%2Bqea20t5ggXA4c%2FoAc%2BlhtyyF%2BhleHn2A54Wkjw%2BXRnP5vkoMJCXBx70y8mDOV1RjgA09fJGUCLl6JsVoB7xl8s2EzxUcHnPeJYs7%2FhUcGr4%2FLYD5l5e97xDZuvCPUoknNoFN%2BeufdMwEnC2FuZ0C2PZK55pXYy1EwHhT2N1QNz378Y6MqAm56djayZelD6fel3h7z6QzQHSnXxy%2FFN62VFt1LvpQGvzaYjCuhYfCBjqkAVtUQ7G6qIvb4SE%2FO85QRYyxl7EMo8eIEOAirWL9chpcl0gBT9pY4PO1kmo1TKb4KFRWfRPIs%2B3D%2F0F81sGjrVLbXYzSHbD3BrJL%2BecSRMhdaZBPh%2B6Wzcw26IC%2FyJeLAMaKoQOJCUiCGoOqGCgy3z%2F1mQLerEeqOwFVKUtFeG7I97aTz4whVze2W0KOhhaHsgy13iv7RcUVfcKpkh2blR2Y9qhz&X-Amz-Signature=1a01ed538f5f40c59b75ec41009653052bcb1fd4f9a53b458a99e2ad07c273f2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JLEABJJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDeYqCZ2b56RdpJYb1AUavRYxQfV2wIKS9BB%2FMNEnr2nQIhAJtIUKmLIJ3TWhIy%2BySzmvmvQUyFikYhBIwOCMEMn5sOKv8DCEkQABoMNjM3NDIzMTgzODA1IgyWQwqkNcv5ImyTnoQq3ANI41uFdclIX1bbYqf7Z2dXZC5ohrY74OXuGHkbmsc5D%2FYjloFviJF26mII983t6XMyu3BrArEICEeBlwqXPWHDOejuw0iuMMGBMLq2qc16yGheThVl2GEPz4lbY7jj8bToad4cK92nak04DplXKjknmc3bqY6kDxB8WM4Jfnei8VZFsjmnqT2qu9mCDe6Q8gdk0wA1tKsixfli0wrMGSAnaVF9YsZUkqIqYmSxSLC%2B5pLBNKfkJZ7c05foQh4BHoJhV3ElUokRpua9qCNI0lrQEgzy6vIMPpuSCPc2w3ekvJuNAmm5DzIynzRXBupU%2F%2Bt0h%2Fdm6ndyS0LFjNxwF4n4Vf0OzkDJCRVaXJZWE8bSbLNXmA5uNYblp4LkZQtQgbjcU9Y2dq6GzKFiyMwMVHb8KvG%2Bqea20t5ggXA4c%2FoAc%2BlhtyyF%2BhleHn2A54Wkjw%2BXRnP5vkoMJCXBx70y8mDOV1RjgA09fJGUCLl6JsVoB7xl8s2EzxUcHnPeJYs7%2FhUcGr4%2FLYD5l5e97xDZuvCPUoknNoFN%2BeufdMwEnC2FuZ0C2PZK55pXYy1EwHhT2N1QNz378Y6MqAm56djayZelD6fel3h7z6QzQHSnXxy%2FFN62VFt1LvpQGvzaYjCuhYfCBjqkAVtUQ7G6qIvb4SE%2FO85QRYyxl7EMo8eIEOAirWL9chpcl0gBT9pY4PO1kmo1TKb4KFRWfRPIs%2B3D%2F0F81sGjrVLbXYzSHbD3BrJL%2BecSRMhdaZBPh%2B6Wzcw26IC%2FyJeLAMaKoQOJCUiCGoOqGCgy3z%2F1mQLerEeqOwFVKUtFeG7I97aTz4whVze2W0KOhhaHsgy13iv7RcUVfcKpkh2blR2Y9qhz&X-Amz-Signature=691ecf056d56083c77f416824fe62e4c8829b87344b6a7ec3c60c1f351ddabb3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
