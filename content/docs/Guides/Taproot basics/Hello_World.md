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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KQBZKL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbpoejAI6J0NTAaV9oa4m7sYP2%2BJUPJY1fHIOThne7QIhAIo8S%2BtWRgPkq%2FiUT4HVfk7Ykao7KBZyS72Hy4czttSJKv8DCGUQABoMNjM3NDIzMTgzODA1Igyn%2BVQ%2FdVW23ogavicq3AP5Dm303uEais6Y9R0ua7Hltxtnhod%2FcAfEL%2F1p15Ow409YnBRBS%2FGQ1pqYyLvTyyDAW2Z%2FfWs8oRsK7OMsgwj3NQkU3jm0%2B3yPtjnMMtXhMLL5tNXZxiI4cCyFP9UhP5DRKIobTjx39AL3CJYb2Qn%2Fo4p6V2Jgcf%2FOPMGthLhH4sbh4%2Fk7cX0zsjkFiLJZ%2FD%2Fj1f5Yodw28wRqj2T6DPAix1RWKqXDOZ%2BIIMGPn4GFYPH2dgBJvuresTgVAHc4eenUSMMtH5qCNpPyvV9nwt7yP8OLGcRalr1e4qvHxDiZHRQvdkbYnACmhWW3tj1x%2FHsiAr8%2FVsBmkkZhZaZckhzByMWdQf%2BJ85HBTKq4jMOVo5Z5O35OcrocM3PKVq8aXbGiucNy6eeyRQO2nFJhLJu0ixa7Tup6hKlvxnZYbIPoYu43vUUsH4fPKsx%2Fcf5p%2Bofhd%2BSnfxuCLB%2BTSv%2FeXpOTGAX%2FuJPMg0iLQZeckqqyEPr7VzwEd1rCBAt0687D02211x5KHWpPp0h92wrImDEilB94WyicEBUCqzZaEHoSi3Nt%2BEfezflNgtkAIw%2FpApl0wn93rbSfjhvMzEwtenarQmUqRf7MyisQqztX%2FwYTmCzdb9vj%2Bqm0hM1cITCB9Zu%2FBjqkAYBKczeYUFvxTgfCgN3%2BuduVLqSq5n6IbUaPLdVmgh3aQXM4MONzirh1iswHrfxG4mkLdoWdpOHfjsAMTmT60HbYRSMtDBQhhq2bR3S%2Fv8nh9t79cw2Lcp%2FR6qLABIygRP3sfGBJmlETciHRTOFUVt3BRwXhbuB6ly3Vdaowg4HGJjwibNcl%2Fynlv8tTAH2c3%2BeGzt89T8M9%2Bk0%2FpsY74xyQyqRz&X-Amz-Signature=42b3eedf0f33c30e39cee3c60a69cd6ad52f2ab449dd6c0ef1e459943cf01b92&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KQBZKL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbpoejAI6J0NTAaV9oa4m7sYP2%2BJUPJY1fHIOThne7QIhAIo8S%2BtWRgPkq%2FiUT4HVfk7Ykao7KBZyS72Hy4czttSJKv8DCGUQABoMNjM3NDIzMTgzODA1Igyn%2BVQ%2FdVW23ogavicq3AP5Dm303uEais6Y9R0ua7Hltxtnhod%2FcAfEL%2F1p15Ow409YnBRBS%2FGQ1pqYyLvTyyDAW2Z%2FfWs8oRsK7OMsgwj3NQkU3jm0%2B3yPtjnMMtXhMLL5tNXZxiI4cCyFP9UhP5DRKIobTjx39AL3CJYb2Qn%2Fo4p6V2Jgcf%2FOPMGthLhH4sbh4%2Fk7cX0zsjkFiLJZ%2FD%2Fj1f5Yodw28wRqj2T6DPAix1RWKqXDOZ%2BIIMGPn4GFYPH2dgBJvuresTgVAHc4eenUSMMtH5qCNpPyvV9nwt7yP8OLGcRalr1e4qvHxDiZHRQvdkbYnACmhWW3tj1x%2FHsiAr8%2FVsBmkkZhZaZckhzByMWdQf%2BJ85HBTKq4jMOVo5Z5O35OcrocM3PKVq8aXbGiucNy6eeyRQO2nFJhLJu0ixa7Tup6hKlvxnZYbIPoYu43vUUsH4fPKsx%2Fcf5p%2Bofhd%2BSnfxuCLB%2BTSv%2FeXpOTGAX%2FuJPMg0iLQZeckqqyEPr7VzwEd1rCBAt0687D02211x5KHWpPp0h92wrImDEilB94WyicEBUCqzZaEHoSi3Nt%2BEfezflNgtkAIw%2FpApl0wn93rbSfjhvMzEwtenarQmUqRf7MyisQqztX%2FwYTmCzdb9vj%2Bqm0hM1cITCB9Zu%2FBjqkAYBKczeYUFvxTgfCgN3%2BuduVLqSq5n6IbUaPLdVmgh3aQXM4MONzirh1iswHrfxG4mkLdoWdpOHfjsAMTmT60HbYRSMtDBQhhq2bR3S%2Fv8nh9t79cw2Lcp%2FR6qLABIygRP3sfGBJmlETciHRTOFUVt3BRwXhbuB6ly3Vdaowg4HGJjwibNcl%2Fynlv8tTAH2c3%2BeGzt89T8M9%2Bk0%2FpsY74xyQyqRz&X-Amz-Signature=524d31fbf09b65009b3f3813867220fcf9c9cfbedef3a984296bb955d08f9703&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
