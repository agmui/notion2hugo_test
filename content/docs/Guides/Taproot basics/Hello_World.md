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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRTINVU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICuIKE9MP46fU9t60EEnleIXqYPqlZj0k6Fwu8oxO8itAiEAkX3iTv6zWDaxiENc0kJnnj44dhJRiH%2BEoVRE4zDrC3cqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6m5JUZxrz7vw3C7CrcA4qF7M8RD4NxIBESnwUgvWiHUh7naNaDog%2BSYby0bOKZ%2FYGyugZRWdWdz1DygEEghTWOJggbOnuwfYb1CZSuJ7jwWTXyrvyMK8VEo%2FapsA941TpEKdfsfNvS8nlTabZe%2FzPT%2FdM9%2FFadAEOoWktSpBxpLPaovQ%2F1y%2BSjMeipKNVU%2F22l7I5m2l14WO8aMqCLuZXYKXCXn54Xez5bzpSXgZHFOTmw%2Bb74QsCTrwNEs9z4XFxEhz%2B3VWyHUTH4yYFNzn5FDKmlwxxigRp2f8UQl%2Bh%2Fm%2BhKtbhqZc124JfhLmjSYRjb%2BTgIzPeLios%2F6nR3Se%2F4MM724xQGtwHv7UFnRvvy9GykX9geXpru%2B0fTgKV%2FGiw86CoksTzTzz8ssdvBUBQjSToEmd%2Fr8%2FzNa5a125qN4X7CGPM8p9jLXKEXOQ4OKWpKg3yheImK0S4xy9SXmxxQjtTNVz9cAc9n%2BaTtIFBhN%2FUp2G3%2FB3Xzq9f8DbUZcUYma6P4OwdlCHR4BjD8qlZjAQTLR%2BCk%2BTe5mvnpcFnmZD3wfCq9rWhJwGqfvoj3VLNXuKYFb%2Bb7fdBd8th4yHQqnDWp3psLnj00FIU%2FVP2kL3OGRg9%2Bo2jfHR00bdSbhUxL2JjNWX%2BLCP4dMKigmsAGOqUBPNa3kly%2FotjLQF7jbPvFwkUEf2QICxH9G3vDeMC5Ir4nq6RCPqbxJigOolFB5cs1TgWRXxPlWDxOPeI0MvocKITh%2F%2FJV5BVvXIzxYwJUc3q2umrJsmT7m%2ButB7S%2BeQg1BmqrFZ96NFAvWg5Lq%2FIGI41lKt0bFd2BYBJKmtk6bXPCCfo88tfycOHRr61AC6Rt%2BMRQhZMxPuv9XZuhKrIP11xH4rDC&X-Amz-Signature=ec917db415b562a56f285253d57efab80fd1608b585f8875fdb55c34f0d7c442&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRTINVU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICuIKE9MP46fU9t60EEnleIXqYPqlZj0k6Fwu8oxO8itAiEAkX3iTv6zWDaxiENc0kJnnj44dhJRiH%2BEoVRE4zDrC3cqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6m5JUZxrz7vw3C7CrcA4qF7M8RD4NxIBESnwUgvWiHUh7naNaDog%2BSYby0bOKZ%2FYGyugZRWdWdz1DygEEghTWOJggbOnuwfYb1CZSuJ7jwWTXyrvyMK8VEo%2FapsA941TpEKdfsfNvS8nlTabZe%2FzPT%2FdM9%2FFadAEOoWktSpBxpLPaovQ%2F1y%2BSjMeipKNVU%2F22l7I5m2l14WO8aMqCLuZXYKXCXn54Xez5bzpSXgZHFOTmw%2Bb74QsCTrwNEs9z4XFxEhz%2B3VWyHUTH4yYFNzn5FDKmlwxxigRp2f8UQl%2Bh%2Fm%2BhKtbhqZc124JfhLmjSYRjb%2BTgIzPeLios%2F6nR3Se%2F4MM724xQGtwHv7UFnRvvy9GykX9geXpru%2B0fTgKV%2FGiw86CoksTzTzz8ssdvBUBQjSToEmd%2Fr8%2FzNa5a125qN4X7CGPM8p9jLXKEXOQ4OKWpKg3yheImK0S4xy9SXmxxQjtTNVz9cAc9n%2BaTtIFBhN%2FUp2G3%2FB3Xzq9f8DbUZcUYma6P4OwdlCHR4BjD8qlZjAQTLR%2BCk%2BTe5mvnpcFnmZD3wfCq9rWhJwGqfvoj3VLNXuKYFb%2Bb7fdBd8th4yHQqnDWp3psLnj00FIU%2FVP2kL3OGRg9%2Bo2jfHR00bdSbhUxL2JjNWX%2BLCP4dMKigmsAGOqUBPNa3kly%2FotjLQF7jbPvFwkUEf2QICxH9G3vDeMC5Ir4nq6RCPqbxJigOolFB5cs1TgWRXxPlWDxOPeI0MvocKITh%2F%2FJV5BVvXIzxYwJUc3q2umrJsmT7m%2ButB7S%2BeQg1BmqrFZ96NFAvWg5Lq%2FIGI41lKt0bFd2BYBJKmtk6bXPCCfo88tfycOHRr61AC6Rt%2BMRQhZMxPuv9XZuhKrIP11xH4rDC&X-Amz-Signature=147aff02266b3510991e091dc3b4987440c301691689f4b3a25b155313778439&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
