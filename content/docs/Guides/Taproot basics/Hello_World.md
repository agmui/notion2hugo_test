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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FICW3B%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkhJ2HrgxlnUnSM0apnHino5dtqmPxUNSCk0Y6Y8Z%2BNAiBPMmBG44qAV0l%2BQTzAj87d4PZN4o5mVAo5P2gxhmwQ%2BCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMeUxikZMp7aTGStzEKtwDnMG%2Fx6wEHHhqWaAa8oTrKMyEQVHR%2BhE53%2FdMCw7HtHTT2XnBfEz07kfWihPbDoE%2FzXljXEc%2BuIChvgukh070Kos6IOWnsJZvMHFHLoBcFPbeCVdgNeqLHEGoYL6%2BArNNwvf3qaTwXwgspj%2B%2F3j74IrX%2BxvlZhFtoNvy36gJvf6vHYWXDr9HpWbK86hD4XNlq2wluXy5BgrfY1%2F8LpIAAWwDxbUd2TQE%2F%2BGj1hh%2BE%2BKy9mxm4l65qE%2FCKby6pBICFmS%2F1HzcbUCwCkQuh93L%2FmVbeoaK0Zvm8XmNfbmyuFpPP3pXV3yPJLyHQBRbD3oUkqUfiXTwih91i%2BjSMaOGXlYhwdnVk5TDU%2FJLUmqfR1XgkHjY4VtK5NMWKLV1P7R6LTDYQXe9CRws5WrvZoe%2Fg4kAMI3XI0CmTO9G6D4ao9Hyks8%2FfTGAlrgWWW1a1WHlI03leTWpuRD%2BGInMtN0OoKQIGsWUZ8ThQfHircMTU1UXfIjCrbuT4Ct3bO7g10spCf07iUGIb9olGjP%2F5qr%2BxtEenMHmY5zvjc1yPld7%2B%2B2na5gmL9AUzfmgawJp4mpgdY8dla2ikEW6UqSVnw9UqRvXkArueOOX%2FBJj3lvibMGsj4oEnrXvWtkGY%2FjIwvtLNvwY6pgHGh7xCABFb6FiGyqdG0KToeh6U0EDpAVf3npAm%2FWJzjxADeF0iZCbl9YvXa%2F20SLlZBe%2B%2BeGBnx58V4HFoAkVLjYiT5F%2B%2BZnMWpHLBOED7vlux1h1EZ0SNtB5lv0zjxAAcPkgz1LySCVGB4UTdQeIZj54smns6VrCKuh9xkHCUOXxRIYID1MJvtuxZaXqaeIuf8GO3lkfL096zD8wfpUvDJxfaIhFZ&X-Amz-Signature=485b7687b1c17965670591b7b0443f10a95f150f0356b7598edeed4ded583cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FICW3B%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkhJ2HrgxlnUnSM0apnHino5dtqmPxUNSCk0Y6Y8Z%2BNAiBPMmBG44qAV0l%2BQTzAj87d4PZN4o5mVAo5P2gxhmwQ%2BCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMeUxikZMp7aTGStzEKtwDnMG%2Fx6wEHHhqWaAa8oTrKMyEQVHR%2BhE53%2FdMCw7HtHTT2XnBfEz07kfWihPbDoE%2FzXljXEc%2BuIChvgukh070Kos6IOWnsJZvMHFHLoBcFPbeCVdgNeqLHEGoYL6%2BArNNwvf3qaTwXwgspj%2B%2F3j74IrX%2BxvlZhFtoNvy36gJvf6vHYWXDr9HpWbK86hD4XNlq2wluXy5BgrfY1%2F8LpIAAWwDxbUd2TQE%2F%2BGj1hh%2BE%2BKy9mxm4l65qE%2FCKby6pBICFmS%2F1HzcbUCwCkQuh93L%2FmVbeoaK0Zvm8XmNfbmyuFpPP3pXV3yPJLyHQBRbD3oUkqUfiXTwih91i%2BjSMaOGXlYhwdnVk5TDU%2FJLUmqfR1XgkHjY4VtK5NMWKLV1P7R6LTDYQXe9CRws5WrvZoe%2Fg4kAMI3XI0CmTO9G6D4ao9Hyks8%2FfTGAlrgWWW1a1WHlI03leTWpuRD%2BGInMtN0OoKQIGsWUZ8ThQfHircMTU1UXfIjCrbuT4Ct3bO7g10spCf07iUGIb9olGjP%2F5qr%2BxtEenMHmY5zvjc1yPld7%2B%2B2na5gmL9AUzfmgawJp4mpgdY8dla2ikEW6UqSVnw9UqRvXkArueOOX%2FBJj3lvibMGsj4oEnrXvWtkGY%2FjIwvtLNvwY6pgHGh7xCABFb6FiGyqdG0KToeh6U0EDpAVf3npAm%2FWJzjxADeF0iZCbl9YvXa%2F20SLlZBe%2B%2BeGBnx58V4HFoAkVLjYiT5F%2B%2BZnMWpHLBOED7vlux1h1EZ0SNtB5lv0zjxAAcPkgz1LySCVGB4UTdQeIZj54smns6VrCKuh9xkHCUOXxRIYID1MJvtuxZaXqaeIuf8GO3lkfL096zD8wfpUvDJxfaIhFZ&X-Amz-Signature=c6ce9f4fece532ed1e10c58ae4b46fa208069f3cd1f165f939667ce9afacbaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
