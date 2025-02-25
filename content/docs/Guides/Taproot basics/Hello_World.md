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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWLVOB6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCCJRbGdwA%2B%2BvP44VlGkcHlhXINJjiaz%2BGK8%2Bx%2FfrYJ7wIhAPsV%2FZv%2Bm4%2BxgtuJAdqBKgFV9MrI6APlXQ3t%2BOkGU0m4Kv8DCEYQABoMNjM3NDIzMTgzODA1IgzZYcYl9grFMYkw4%2B4q3APP2EaQvOsFt%2F%2F0E91B6wBbJ4aMK98SwjldUlUh2O9atcXzgeVD7n8IoPtLhEPhePDUgznxMJuV3r0v2LKUinEjAmjsrirZniJc4f67kpcyIVi390%2BwVuh2uCVo68UlExB3EM4D%2FxIomvjHuWuFqKWfQcC28cgqCamWu0jArdEC5fEq5fm%2BrtwMlUOJzonN8Zkh0loSUa9rU2%2BdbSH4u%2BiUmDYKDH5hHelgOmLzYYtCekG5nVca9y6ZL1bv1nXQn6wfP02uBQdgFr2ia2jYR%2FZ2Kxh91UGMC2kSBe0lf6eRQvyg%2FGAVUWkh3gCkIoAD4VmTGWbPJ%2FAWr%2B%2FkSbF6PxxNFks87sv2NQ2KHEE5qUPHxbvwpiCp0j9t7NLlBSselrnJ5yx%2BUR83HmJAE7%2FqO92PRTmBW3GoNNlGI6eSGSrqARGceFOvEm1hHbylfndHWVbV7fTOnjEz2dwK37lI3Kv8ZHT%2FrFUuTa9RMfSE8fDc%2B7EwDStXdOla6g1Q5vsk%2BKUPigo%2BBv3ZDmaDPnURXrM7UYBN%2BcFSYgCer0H2Q6MPz%2B3HhAwhL5zUdIEyrtWK4WxjbxWbX2foOejF0aLCvh32yK2e5Bit43W98%2B%2FqChephHY0AEZbHl3g8K3S5zDj%2Bfa9BjqkAYZhWuH4BcG3vSDJsEi%2Faa5BNVL8W%2BG4SraiqCW4ROFv6PWkJ%2Bom2m37YRs7f7vqFGBBNrXeTQZ0TRSQNS5Wqb6wzWbFTbVOmPQhTgQjlEE83kNk%2FALBHJ8iZdYpChxvMD4%2FroR%2BbN%2BhHc7pDjVZF1ViKAcrJ1uSjXQI4B0PSI%2FcHorRh4YUPwOUE7mgiZodzzcgfX8TmqzGYTVfhlZaq6Zmt1LJ&X-Amz-Signature=c277dd03a04463ebd65b1b4d324326727d175a9e9ced7de6d6f865bb384acdd6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWLVOB6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCCJRbGdwA%2B%2BvP44VlGkcHlhXINJjiaz%2BGK8%2Bx%2FfrYJ7wIhAPsV%2FZv%2Bm4%2BxgtuJAdqBKgFV9MrI6APlXQ3t%2BOkGU0m4Kv8DCEYQABoMNjM3NDIzMTgzODA1IgzZYcYl9grFMYkw4%2B4q3APP2EaQvOsFt%2F%2F0E91B6wBbJ4aMK98SwjldUlUh2O9atcXzgeVD7n8IoPtLhEPhePDUgznxMJuV3r0v2LKUinEjAmjsrirZniJc4f67kpcyIVi390%2BwVuh2uCVo68UlExB3EM4D%2FxIomvjHuWuFqKWfQcC28cgqCamWu0jArdEC5fEq5fm%2BrtwMlUOJzonN8Zkh0loSUa9rU2%2BdbSH4u%2BiUmDYKDH5hHelgOmLzYYtCekG5nVca9y6ZL1bv1nXQn6wfP02uBQdgFr2ia2jYR%2FZ2Kxh91UGMC2kSBe0lf6eRQvyg%2FGAVUWkh3gCkIoAD4VmTGWbPJ%2FAWr%2B%2FkSbF6PxxNFks87sv2NQ2KHEE5qUPHxbvwpiCp0j9t7NLlBSselrnJ5yx%2BUR83HmJAE7%2FqO92PRTmBW3GoNNlGI6eSGSrqARGceFOvEm1hHbylfndHWVbV7fTOnjEz2dwK37lI3Kv8ZHT%2FrFUuTa9RMfSE8fDc%2B7EwDStXdOla6g1Q5vsk%2BKUPigo%2BBv3ZDmaDPnURXrM7UYBN%2BcFSYgCer0H2Q6MPz%2B3HhAwhL5zUdIEyrtWK4WxjbxWbX2foOejF0aLCvh32yK2e5Bit43W98%2B%2FqChephHY0AEZbHl3g8K3S5zDj%2Bfa9BjqkAYZhWuH4BcG3vSDJsEi%2Faa5BNVL8W%2BG4SraiqCW4ROFv6PWkJ%2Bom2m37YRs7f7vqFGBBNrXeTQZ0TRSQNS5Wqb6wzWbFTbVOmPQhTgQjlEE83kNk%2FALBHJ8iZdYpChxvMD4%2FroR%2BbN%2BhHc7pDjVZF1ViKAcrJ1uSjXQI4B0PSI%2FcHorRh4YUPwOUE7mgiZodzzcgfX8TmqzGYTVfhlZaq6Zmt1LJ&X-Amz-Signature=71a4220f2b1fc8d24c9555045b67fc0cad3424e86b59063f997389487436f4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
