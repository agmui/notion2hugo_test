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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GP2RKN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAJtZDbP%2BtFyYgblcUw%2BshpNIwwcWmWTR6litEJTBK9cAiEAxNG97K%2B733ER78L7z8PT1Uh8J1soVELY293Cn9NBEt8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfVCEGrOSsiOVGmKyrcA7C%2Fl%2BYH9776vwM%2FT%2BuQkSqKJOlt8V%2BDJBqmN%2FRVF%2FoymHgOEK44lV3uZNYxBjf4szDD8DB10%2FH3%2FIRruG0lLGUz%2FOSyg0YaAXTQZ601dkeKxh4doMeN96hh5Gr4trUw63zdozdEe1Xzczs40SEZiAoNVjoLzNzEfzFcZQ1DrYDXEVfAh%2Fe%2BJv7pSLRnVund%2FdfPDYkGlpTbHpZ7dVCrpzcePDh9Rq%2Bd%2F1jvLP32ZxHqXtA44NjLOSuJmKlI1ccMxIRihY0%2B5KK07ZWsdsiDOotuJMVlM1ZFKmCjt4pr2ogvVzpZd8jXqrZscLc1X7m7WwN9JRZLwQy8gTVkpAzg6wii0inr%2BH5d0xXunDGUxxFhGplZ6Q6S0tt2xr0rR1beLT8pbombO%2BUTr97j82sBEGVCgXAY7LE1PinCvaS4PADiPCc3QafHRe132WsmfTwYep2MMQoqSRpSrsO57F%2F0gmXyutkVloepW%2FakTNWRPHeY%2BPTW%2FaYJOnNGkU3zWfKeA2svvMpW8sfcb9%2B%2Bg1q4vXuntXe3K%2F0NdPxk9jIF0d1QyqjPw9zXqOyRSdXAIKjq3Vffrg%2B39ZltutB9T3IGYRYvTUZcT%2FAQSInqQGbSzGcsLzaI%2FmPhfIZIwYtvMOuB%2BsEGOqUBzBuctv6FykfSmzdLvkkDrODHP94uTpxrpbjzrsG8Vi5sQJXf6SwZJg89U19sRemgG%2BHHUfitIKdUt%2BLn7NRsIpyhyUXCXuoA6MPBkl6i3rc6WI%2BreIvTaRbKNbEgiGGB1fwcLmsDc1tsjJ2Ew%2B9ya9B9DrOl5zpYtCXAUu3IkNXjNLXW3rwU5HNY5I0eLx9DTQ0xtLmoTO2dtWwCMw8dxEhOa0CT&X-Amz-Signature=f09e287318884e1cb460f8c9480173881fdbc00837a44a083c4003453ad34692&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GP2RKN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAJtZDbP%2BtFyYgblcUw%2BshpNIwwcWmWTR6litEJTBK9cAiEAxNG97K%2B733ER78L7z8PT1Uh8J1soVELY293Cn9NBEt8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfVCEGrOSsiOVGmKyrcA7C%2Fl%2BYH9776vwM%2FT%2BuQkSqKJOlt8V%2BDJBqmN%2FRVF%2FoymHgOEK44lV3uZNYxBjf4szDD8DB10%2FH3%2FIRruG0lLGUz%2FOSyg0YaAXTQZ601dkeKxh4doMeN96hh5Gr4trUw63zdozdEe1Xzczs40SEZiAoNVjoLzNzEfzFcZQ1DrYDXEVfAh%2Fe%2BJv7pSLRnVund%2FdfPDYkGlpTbHpZ7dVCrpzcePDh9Rq%2Bd%2F1jvLP32ZxHqXtA44NjLOSuJmKlI1ccMxIRihY0%2B5KK07ZWsdsiDOotuJMVlM1ZFKmCjt4pr2ogvVzpZd8jXqrZscLc1X7m7WwN9JRZLwQy8gTVkpAzg6wii0inr%2BH5d0xXunDGUxxFhGplZ6Q6S0tt2xr0rR1beLT8pbombO%2BUTr97j82sBEGVCgXAY7LE1PinCvaS4PADiPCc3QafHRe132WsmfTwYep2MMQoqSRpSrsO57F%2F0gmXyutkVloepW%2FakTNWRPHeY%2BPTW%2FaYJOnNGkU3zWfKeA2svvMpW8sfcb9%2B%2Bg1q4vXuntXe3K%2F0NdPxk9jIF0d1QyqjPw9zXqOyRSdXAIKjq3Vffrg%2B39ZltutB9T3IGYRYvTUZcT%2FAQSInqQGbSzGcsLzaI%2FmPhfIZIwYtvMOuB%2BsEGOqUBzBuctv6FykfSmzdLvkkDrODHP94uTpxrpbjzrsG8Vi5sQJXf6SwZJg89U19sRemgG%2BHHUfitIKdUt%2BLn7NRsIpyhyUXCXuoA6MPBkl6i3rc6WI%2BreIvTaRbKNbEgiGGB1fwcLmsDc1tsjJ2Ew%2B9ya9B9DrOl5zpYtCXAUu3IkNXjNLXW3rwU5HNY5I0eLx9DTQ0xtLmoTO2dtWwCMw8dxEhOa0CT&X-Amz-Signature=b3d23a222e5cf772295c5ac6c62f66e09dfc85341658e13a094d43c1ba3e3e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
