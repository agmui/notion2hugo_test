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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35FFHBT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAStnlohnmzYm3YuyKuxFxODjeDzdvQX%2F6X63IfZgDdAAiEAt7TofeErK7kuYJegdRU8ZmHCjCELKfrW0xbhdRUf47Iq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIwcu55sRlK0tzKXVyrcA%2FxS53CLP7n9yJds4%2BvXLfxFXVgd8qiKDFsX2WCDSuQZ%2BCIcDMbu6TWAj9fsaGC6jPpbAVveTxkZ1ToB5RFmMypypCAzhrAlgT%2BjkPUyUMHh08CXIyoBVE13Zf4xxfSbe7AZpJKiw0zteqfnBekuyQhq6lOek6a85qC%2FIU4EBL7LqMvcAnwiZUmn%2FDy%2BbuRf20hoHxTuOYCaq34z%2FjlcZldbvfYv6MRYYb2jAYFd%2FL%2FOX3v9A5VajBf%2F93qqNwTdZC89UL%2FRLNDVzFPKyTtxrQFkXALxWjrxGKG1WCOjXde89QNmdVt45Pa0BFD6398ltr8krp7XgGLHcqUOZJYbIZjv1KBSwtzhsjZdV%2FK1dzExNkWoC%2BC4ii%2BNSAR7uDmGxHuDs7vnIITgB33ARGJWYbJdcI4zhP9Gpf0EilJKZrjPWGArhJWOIKhqSvCiVDpKppFQdLhVVI7mC4P%2Biezz22RXJKBTwC5ANEHWCkc3ckNlxX08AzxUt2OMnTuUK%2FDqqIP4L8MenldP7%2Br7XmyVcFbSEALMm%2B9scph9kLit87KXTdCdGz47v5eqzbf1HrVZtF3od6a7QNIUDasDSGFGvjX3cQswtZJsXebRxX5ncqVWciRCm59%2FRTZ%2FT3GtMOPaqsAGOqUBEmvq2rpiGCXIpC%2FvDHxdA0QFotqTyLf%2FLayXQLCTSzWSHRGeDg5bLjOGrsxlo%2FC35ynXBmBeKVJb%2F4WYYAH7hUdz%2F96KxBmyNJjaBNrD7iKgLu%2B4Zpq3Z%2Fu2qD5hTm7EExj41Upmncr7YgT3y6DESDC83OFN34sCMNHG36ofaUTn9cKj7Bm6NWrWxOXY36FWFayX8Tlr7nUXP6xWP3yiRzBmWnMG&X-Amz-Signature=3f4f0e94aa2cb560f7aeb1610833fac390a2be6ba1ded1a2f6b1e7ac366da92b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35FFHBT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAStnlohnmzYm3YuyKuxFxODjeDzdvQX%2F6X63IfZgDdAAiEAt7TofeErK7kuYJegdRU8ZmHCjCELKfrW0xbhdRUf47Iq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIwcu55sRlK0tzKXVyrcA%2FxS53CLP7n9yJds4%2BvXLfxFXVgd8qiKDFsX2WCDSuQZ%2BCIcDMbu6TWAj9fsaGC6jPpbAVveTxkZ1ToB5RFmMypypCAzhrAlgT%2BjkPUyUMHh08CXIyoBVE13Zf4xxfSbe7AZpJKiw0zteqfnBekuyQhq6lOek6a85qC%2FIU4EBL7LqMvcAnwiZUmn%2FDy%2BbuRf20hoHxTuOYCaq34z%2FjlcZldbvfYv6MRYYb2jAYFd%2FL%2FOX3v9A5VajBf%2F93qqNwTdZC89UL%2FRLNDVzFPKyTtxrQFkXALxWjrxGKG1WCOjXde89QNmdVt45Pa0BFD6398ltr8krp7XgGLHcqUOZJYbIZjv1KBSwtzhsjZdV%2FK1dzExNkWoC%2BC4ii%2BNSAR7uDmGxHuDs7vnIITgB33ARGJWYbJdcI4zhP9Gpf0EilJKZrjPWGArhJWOIKhqSvCiVDpKppFQdLhVVI7mC4P%2Biezz22RXJKBTwC5ANEHWCkc3ckNlxX08AzxUt2OMnTuUK%2FDqqIP4L8MenldP7%2Br7XmyVcFbSEALMm%2B9scph9kLit87KXTdCdGz47v5eqzbf1HrVZtF3od6a7QNIUDasDSGFGvjX3cQswtZJsXebRxX5ncqVWciRCm59%2FRTZ%2FT3GtMOPaqsAGOqUBEmvq2rpiGCXIpC%2FvDHxdA0QFotqTyLf%2FLayXQLCTSzWSHRGeDg5bLjOGrsxlo%2FC35ynXBmBeKVJb%2F4WYYAH7hUdz%2F96KxBmyNJjaBNrD7iKgLu%2B4Zpq3Z%2Fu2qD5hTm7EExj41Upmncr7YgT3y6DESDC83OFN34sCMNHG36ofaUTn9cKj7Bm6NWrWxOXY36FWFayX8Tlr7nUXP6xWP3yiRzBmWnMG&X-Amz-Signature=3ee5e852bb50c517a34a3d864ce717735638e352e4a316c69dc8879e13910c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
