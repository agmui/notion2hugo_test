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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBOSS6A%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIH1Y3V%2Fx2If%2FFDbh80%2FJv81eX%2FpXsmoDNQYjNeaFeG%2B7AiBTRijAbXC2bp1xji7zQIK84O0mhOL0kQzadDjF3Pyt%2FiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMre34iS1IQ8ztYzxmKtwDXseHEfreY8uiK7Lspbre3lK9O6PChzP8Y%2F29S%2BjDyrPdgWKK24jpLAULdnTuE1O1tGpvi0ZQJd1%2FkBEPBFx6RCvXICY47qhfld9ODDbc3cgcvkVfzD7Z6P%2BdqnXfBNsY1p9qToRa7NA9dVl%2F5aVo9NE6XNC2aW%2FsQUAEnHXy4m3iQ9GT58Zuw4cPVI1vWA9H4PuM5kxIUl8obNBNXWjJobzpAl4ciE0ISMx95MdtIWz%2BQUzZ9XNu%2Fgst4uxnwPdOVaDBIjIWSCzfVDGCIcBQ3qt4tcQFao3tMzGSsFh6rFGV8HYHunWzZInV%2BYFuGrNydGVfhXt17OnJ%2FPz%2F6ZmVTUk8Km8QW7L5pcv%2FgwpKypbPFvNO%2Fw3j2CEaeCsbQXNNWxLjAgh6BfP4Ibb81rdZNvFb0kBwbd5PL9Wc2p9JDXWVOddra9XFeRHrBs3mHJfU7fDzltZDlBSi9nXAkjYq7jy%2F0wybTCMNGX77RDJ7%2FngnvXEbNtVKsY3%2FbMUqV8AgUKbh2SNp9fR8ZMyafoEWlalM%2BT6vLne%2B9k26kY8RpyvDg0%2BRsBGOYDT1cfS1waBuBMCxK6Ne%2Bbd027Mw4bg9C1bdwISGNkpDqLjkzQEiEw9DdMth5cqlLx4i10AwxJLXxAY6pgEQZYkOCMuIog9ERHmHsFcpFkBp%2BR5CT4dXAmA8fme6XQsKFFMpQY3cl3v1PFwVSGWDQKA5i6zVA0jPhVbrRRjg%2B38Sxsqs4JAL%2F4V50TsLYzjD560WDRN3Jj8RrquOm5mRx8fTlHPiiozCnhEgMRc%2BYCU8Wyfc%2B%2BS6XRAo2nMm3R9od7sMnUGyEuXtGdP%2Fd%2BwYPBZVFQwM2yIxhh%2F21bZT9kjdofpi&X-Amz-Signature=a0068e76a5cae1a394025df29fcb8a2eccd7e9a99721a84e19742073691318af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBOSS6A%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIH1Y3V%2Fx2If%2FFDbh80%2FJv81eX%2FpXsmoDNQYjNeaFeG%2B7AiBTRijAbXC2bp1xji7zQIK84O0mhOL0kQzadDjF3Pyt%2FiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMre34iS1IQ8ztYzxmKtwDXseHEfreY8uiK7Lspbre3lK9O6PChzP8Y%2F29S%2BjDyrPdgWKK24jpLAULdnTuE1O1tGpvi0ZQJd1%2FkBEPBFx6RCvXICY47qhfld9ODDbc3cgcvkVfzD7Z6P%2BdqnXfBNsY1p9qToRa7NA9dVl%2F5aVo9NE6XNC2aW%2FsQUAEnHXy4m3iQ9GT58Zuw4cPVI1vWA9H4PuM5kxIUl8obNBNXWjJobzpAl4ciE0ISMx95MdtIWz%2BQUzZ9XNu%2Fgst4uxnwPdOVaDBIjIWSCzfVDGCIcBQ3qt4tcQFao3tMzGSsFh6rFGV8HYHunWzZInV%2BYFuGrNydGVfhXt17OnJ%2FPz%2F6ZmVTUk8Km8QW7L5pcv%2FgwpKypbPFvNO%2Fw3j2CEaeCsbQXNNWxLjAgh6BfP4Ibb81rdZNvFb0kBwbd5PL9Wc2p9JDXWVOddra9XFeRHrBs3mHJfU7fDzltZDlBSi9nXAkjYq7jy%2F0wybTCMNGX77RDJ7%2FngnvXEbNtVKsY3%2FbMUqV8AgUKbh2SNp9fR8ZMyafoEWlalM%2BT6vLne%2B9k26kY8RpyvDg0%2BRsBGOYDT1cfS1waBuBMCxK6Ne%2Bbd027Mw4bg9C1bdwISGNkpDqLjkzQEiEw9DdMth5cqlLx4i10AwxJLXxAY6pgEQZYkOCMuIog9ERHmHsFcpFkBp%2BR5CT4dXAmA8fme6XQsKFFMpQY3cl3v1PFwVSGWDQKA5i6zVA0jPhVbrRRjg%2B38Sxsqs4JAL%2F4V50TsLYzjD560WDRN3Jj8RrquOm5mRx8fTlHPiiozCnhEgMRc%2BYCU8Wyfc%2B%2BS6XRAo2nMm3R9od7sMnUGyEuXtGdP%2Fd%2BwYPBZVFQwM2yIxhh%2F21bZT9kjdofpi&X-Amz-Signature=fc7ee7cbc2fcda7d4dda59de933f1daf5929352f4024c488235a3f3105c7f392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
