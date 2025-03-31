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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAYBX5V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCwiIEM3yGAR6xQ7Qn%2FYZM44G5AJMPubWre5JvPr%2BKeGgIgIPTF7ZbYiJ6ovR5ytPN6Nwi2ecVL0PubmNJWMWXUyHgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1e%2Fvr36YhkwpOZ%2BCrcAxwVyqXGIrbZQyUvxAfmt4VQ7FK9AQES4IAfdscIa9i2L8KPx%2BJFGgMWAfCimiJ1MkrFXSYfSiaNl9WMe3Wf2bBmArP7KvHdnUeA4IxiCeW3c4bNSpKhLIawZKyfwRGUL6BvoNt24LkNMQWW%2F3okgxsfEv%2FurDKvwGIEX01U5ex5tztZPcG2G50NamxjFdUMH6J4Wxxq63bCYGTqBVGYXYGPsGaZmH6KQjKUZJmqeWEwbjPeTHcxcEOWOtdXwz0Hmd0IGOzBzu%2BDRH0gFjMpeqyPuvQrI1pEvsL6ohozsTGYBR5vl9%2FcUWcm5mfnSc%2FS8tnHSne5NZ%2FYzrN%2Fc3r2RyEcwfBl8SKDXD%2Bjct%2Ft%2FVn6r7yBQJYN3%2FaXrFcM%2BaWT1M9YibAthn2NkQiXE0Ba%2F7oQQ5uVWAD1xqatGNgYzHhZyPyjbYkJLV3S2FbSy4oG2VjGLXHeiJxuRDHoSeBvN3gYOhtoKAYflk5Z2DUoUfYKoOH%2B%2BOH7875gdTbbzZDZ1kCJQdk0qvfTTfFKtzK4SRbcs5%2B6AkZUuxtcONj8w3EWUqLLWBFDuWjoHyFSBPCiZgGV%2B0LGmiUyCwXF0xaPjLdItlPofuYRdSpfZu%2BufPmAHtp2SuJKLw8a20efMPuiqr8GOqUBey8m4%2FmcBctIxWBPIKfjmD%2FrKqiR%2FQzB3pE0rYx2PkegUOB3ui2Gz%2FcRJ4ruLyk7nb8Q5d0YCQ0aP%2BNFrWWINwTkoazcDzVvZ9ZyRg7qAV6KoODaNPGgfLSyoMwqcOVcl89stftzh0NS6v%2Bj%2BgL%2BbgcVQxtqIIiM76sTJ4VvlQdG7JRbyIzt1U4Mqah0UxeudUMNqVHbau7lDYsIkh6Dzc0FcOt0&X-Amz-Signature=9958e351fde183986ee338780ab58f70db8ab030ea4b763a73d586d992f6985a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAYBX5V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCwiIEM3yGAR6xQ7Qn%2FYZM44G5AJMPubWre5JvPr%2BKeGgIgIPTF7ZbYiJ6ovR5ytPN6Nwi2ecVL0PubmNJWMWXUyHgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1e%2Fvr36YhkwpOZ%2BCrcAxwVyqXGIrbZQyUvxAfmt4VQ7FK9AQES4IAfdscIa9i2L8KPx%2BJFGgMWAfCimiJ1MkrFXSYfSiaNl9WMe3Wf2bBmArP7KvHdnUeA4IxiCeW3c4bNSpKhLIawZKyfwRGUL6BvoNt24LkNMQWW%2F3okgxsfEv%2FurDKvwGIEX01U5ex5tztZPcG2G50NamxjFdUMH6J4Wxxq63bCYGTqBVGYXYGPsGaZmH6KQjKUZJmqeWEwbjPeTHcxcEOWOtdXwz0Hmd0IGOzBzu%2BDRH0gFjMpeqyPuvQrI1pEvsL6ohozsTGYBR5vl9%2FcUWcm5mfnSc%2FS8tnHSne5NZ%2FYzrN%2Fc3r2RyEcwfBl8SKDXD%2Bjct%2Ft%2FVn6r7yBQJYN3%2FaXrFcM%2BaWT1M9YibAthn2NkQiXE0Ba%2F7oQQ5uVWAD1xqatGNgYzHhZyPyjbYkJLV3S2FbSy4oG2VjGLXHeiJxuRDHoSeBvN3gYOhtoKAYflk5Z2DUoUfYKoOH%2B%2BOH7875gdTbbzZDZ1kCJQdk0qvfTTfFKtzK4SRbcs5%2B6AkZUuxtcONj8w3EWUqLLWBFDuWjoHyFSBPCiZgGV%2B0LGmiUyCwXF0xaPjLdItlPofuYRdSpfZu%2BufPmAHtp2SuJKLw8a20efMPuiqr8GOqUBey8m4%2FmcBctIxWBPIKfjmD%2FrKqiR%2FQzB3pE0rYx2PkegUOB3ui2Gz%2FcRJ4ruLyk7nb8Q5d0YCQ0aP%2BNFrWWINwTkoazcDzVvZ9ZyRg7qAV6KoODaNPGgfLSyoMwqcOVcl89stftzh0NS6v%2Bj%2BgL%2BbgcVQxtqIIiM76sTJ4VvlQdG7JRbyIzt1U4Mqah0UxeudUMNqVHbau7lDYsIkh6Dzc0FcOt0&X-Amz-Signature=fd01ef58d215a4177a98d2d87af58a27f7be60a81e51df401b8559e80a726acf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
