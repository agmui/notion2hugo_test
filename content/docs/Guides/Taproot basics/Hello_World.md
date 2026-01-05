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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NBRS5P3%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFcmf1gvcZCVtOZkE9Qdb7HMw3Ogl3h9MjwgfEYfLMAbAiAHHr55%2FbSxioiGuFMlo0xxoMumT7XjLjfSBF2IMcaA6yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMPa050oTMeJ67lLEfKtwDrOgscHWxbEpTSj4z%2FqPinT1zKHfI7gyV1f4eBvLRG6eOLaLArKzcXvS7zVQAPit9M2wutJ4NhTfOh24naJnGiyLGUl3BFv8snMt8kFuGYAYIlectxIXvzLx2C%2BO%2FZuz4Auji0L7KGA0YErUATKZGFlzAsCmpxAuEHr9aJdblQstzXDdI7tx03bvnhTJenjA2w%2F79q%2FiP%2FCigShjB%2BO6ULD9ArRDDIMZyn0%2FklRxE2%2Bm5gNT1GPN87cFPiZahKvlYf19OboAYAPFVeRgr6ohJNXmjoUVMmT4YCVcF2xG5A0Z%2BZybzqbs2%2BP6ohu4jHs%2BaZfslu%2FXcuxgQUy9%2Ba0bdkfEkYJSRan1bVXSMxo5cFk6dtoSPGl4Zad63IC7S4m9SAQCo%2BbnLWLVKYra4%2FkHscLNQ%2FTlV8r%2BLU78PehJtvO1CDlcMdEA1n7YVJ6zGjUzf2QdAUQYW2UbnnUNShI183SQuFV7HP6ZmycocX63CvMLvZ0RZqS3gK8LEKqyrEgs9nkUVJ67Mqh0HcRwzowerYVQvXmFz4ed0LGc1O8enzi%2BYACUdyLWEAXF9BkllazFodHNww5fbo9TKKxDpmEsbnA3tFSrMs0saZeUe9KJOOoA%2FmeYp7RXBdOK4ntwwmqHsygY6pgHSdn14PnOGB2F1hwk4xgVaq68nsalV4RRloIKbI7dqcUz55FckJ%2FaQVQivQcutyIbV3vNtEK16EzvlJPBrnRuS60xeftEOxk7k8I3wHuw6S4V8puwaz1GxDGAcQspC6Th%2BJt3ZmD2XUbYbtka%2Fq3U%2B5YwUAOMBB7bBYeRjdTti0bsR1OyiM2d9PqTblLWsWmd%2F7gJvJaARIwLYXo2%2F43NGnpvnOA3%2B&X-Amz-Signature=d20f4b23b19305f13392dc112a07e60fbf033aceacbe79e97c0d4845203daec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NBRS5P3%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFcmf1gvcZCVtOZkE9Qdb7HMw3Ogl3h9MjwgfEYfLMAbAiAHHr55%2FbSxioiGuFMlo0xxoMumT7XjLjfSBF2IMcaA6yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMPa050oTMeJ67lLEfKtwDrOgscHWxbEpTSj4z%2FqPinT1zKHfI7gyV1f4eBvLRG6eOLaLArKzcXvS7zVQAPit9M2wutJ4NhTfOh24naJnGiyLGUl3BFv8snMt8kFuGYAYIlectxIXvzLx2C%2BO%2FZuz4Auji0L7KGA0YErUATKZGFlzAsCmpxAuEHr9aJdblQstzXDdI7tx03bvnhTJenjA2w%2F79q%2FiP%2FCigShjB%2BO6ULD9ArRDDIMZyn0%2FklRxE2%2Bm5gNT1GPN87cFPiZahKvlYf19OboAYAPFVeRgr6ohJNXmjoUVMmT4YCVcF2xG5A0Z%2BZybzqbs2%2BP6ohu4jHs%2BaZfslu%2FXcuxgQUy9%2Ba0bdkfEkYJSRan1bVXSMxo5cFk6dtoSPGl4Zad63IC7S4m9SAQCo%2BbnLWLVKYra4%2FkHscLNQ%2FTlV8r%2BLU78PehJtvO1CDlcMdEA1n7YVJ6zGjUzf2QdAUQYW2UbnnUNShI183SQuFV7HP6ZmycocX63CvMLvZ0RZqS3gK8LEKqyrEgs9nkUVJ67Mqh0HcRwzowerYVQvXmFz4ed0LGc1O8enzi%2BYACUdyLWEAXF9BkllazFodHNww5fbo9TKKxDpmEsbnA3tFSrMs0saZeUe9KJOOoA%2FmeYp7RXBdOK4ntwwmqHsygY6pgHSdn14PnOGB2F1hwk4xgVaq68nsalV4RRloIKbI7dqcUz55FckJ%2FaQVQivQcutyIbV3vNtEK16EzvlJPBrnRuS60xeftEOxk7k8I3wHuw6S4V8puwaz1GxDGAcQspC6Th%2BJt3ZmD2XUbYbtka%2Fq3U%2B5YwUAOMBB7bBYeRjdTti0bsR1OyiM2d9PqTblLWsWmd%2F7gJvJaARIwLYXo2%2F43NGnpvnOA3%2B&X-Amz-Signature=70614c29cfc6d2e0dd976acfd504bb320493851be9428761bd93777406accd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
