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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622CBDED4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL8j2dISm1oW2qvTP8AVCQJyPN3iFaH8fceYtPfb0UuAiEAst4A1BYVpRjUCvku1KtuiWJGTdKenffz%2BV2Dw61gIsIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbCO0jCiEHXAidO5CrcA3mVQdBgf6bgffP8p0JtEkeFXr9RZb7qv5MbH4SDZR3jOd%2FInadRB8Y7ltAV8GTxyQD7aLwrYTTuFEwfNoc%2BKegr9RFarMyBuo19yuqeVXiT8AXyeDCuwXCr4BFnKSlD%2FpN5SevJwueF3IFHvgiG0jEfF1IeWSExLcBy6IUEVMUvy%2FAePpzuLfuv%2Bxdwkde6u00dFHkXJBdtqdN1j5M24rju4Ulfs4K5tYIq0xIC7Gd1IEXaTNWfc2cGAsAEzRw%2BehuhAih56rHTgBCFXJXv7oHTVfKgt%2BzvvwOdGio0t6Hb3dUV8bEY5zYzFPIdwao5%2F%2BeWLnukTXwunykri5qJMMEov3kbS1YLYn70csEAQNgyRhKYrp862wsjgqtqHU174quLkkKZZikvGPgj0JEU2LVi32JLQPkjACtwcYa0o5Yabsg%2BiMLkGne9GKhCiC91KsFu7hIi2jj8ZDCB0bqv5qpyMkSrT%2BSFabk9d07yn8fuX%2BqiVAK%2BX4BAapIus8Mn2oFgfeAag41eB4nUCplYMbi36ge5UMrjw1HkNfIhBKR3GjWvGW%2B6md1zRtjarryNkPTGLPt8nfU5et45JcNWQKCrUvZK4hWafYBrHHnzhihaS1sEkEnqDOEGL3XlMI6%2F4sQGOqUBDyznxxKQfQ7voSKGBBTBTeG133dDTD8nBTtB4pbOKnHsNlvvs2wv4pODqsoA%2FYE5K93i2mXEdi4rM0WDL5bjf4xXD1GbFOfrFrwkTWQpL1xKdJOJigkj%2Fj6ewDTBsv6uym2Ds1nA%2FMxcGgAn%2F8Z9XyNpNM0mpantDD6LzHxqysO7t0b%2FoONmw%2FbURPnPI0So1stYXC69daEPrLpcVLFoUqsrblGZ&X-Amz-Signature=cb40a176edc7c2c27b2a265c703f0306e004fed54695fa83d6d2c272fddd20a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622CBDED4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL8j2dISm1oW2qvTP8AVCQJyPN3iFaH8fceYtPfb0UuAiEAst4A1BYVpRjUCvku1KtuiWJGTdKenffz%2BV2Dw61gIsIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbCO0jCiEHXAidO5CrcA3mVQdBgf6bgffP8p0JtEkeFXr9RZb7qv5MbH4SDZR3jOd%2FInadRB8Y7ltAV8GTxyQD7aLwrYTTuFEwfNoc%2BKegr9RFarMyBuo19yuqeVXiT8AXyeDCuwXCr4BFnKSlD%2FpN5SevJwueF3IFHvgiG0jEfF1IeWSExLcBy6IUEVMUvy%2FAePpzuLfuv%2Bxdwkde6u00dFHkXJBdtqdN1j5M24rju4Ulfs4K5tYIq0xIC7Gd1IEXaTNWfc2cGAsAEzRw%2BehuhAih56rHTgBCFXJXv7oHTVfKgt%2BzvvwOdGio0t6Hb3dUV8bEY5zYzFPIdwao5%2F%2BeWLnukTXwunykri5qJMMEov3kbS1YLYn70csEAQNgyRhKYrp862wsjgqtqHU174quLkkKZZikvGPgj0JEU2LVi32JLQPkjACtwcYa0o5Yabsg%2BiMLkGne9GKhCiC91KsFu7hIi2jj8ZDCB0bqv5qpyMkSrT%2BSFabk9d07yn8fuX%2BqiVAK%2BX4BAapIus8Mn2oFgfeAag41eB4nUCplYMbi36ge5UMrjw1HkNfIhBKR3GjWvGW%2B6md1zRtjarryNkPTGLPt8nfU5et45JcNWQKCrUvZK4hWafYBrHHnzhihaS1sEkEnqDOEGL3XlMI6%2F4sQGOqUBDyznxxKQfQ7voSKGBBTBTeG133dDTD8nBTtB4pbOKnHsNlvvs2wv4pODqsoA%2FYE5K93i2mXEdi4rM0WDL5bjf4xXD1GbFOfrFrwkTWQpL1xKdJOJigkj%2Fj6ewDTBsv6uym2Ds1nA%2FMxcGgAn%2F8Z9XyNpNM0mpantDD6LzHxqysO7t0b%2FoONmw%2FbURPnPI0So1stYXC69daEPrLpcVLFoUqsrblGZ&X-Amz-Signature=cb45229fc682940eb95ec710fcaad0299dc5b1b30a068a592634c567ca2c0dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
