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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYWCYUT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD6EfQS9Rz%2FPU%2FBM7ioGKSrkxsdq7agRLx%2Fk3Dw5dSAewIgZVyArXRfSMt78IYjJ%2FLt3zSxrporHr1PCbg3Kt05pEQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXc6NE8Jn3aM7JUtCrcA9rgO7J09qNo8U%2Fnv%2FImiVqN8tjQYTX%2FKPACAoR3MUstP2qHh%2Fa2dKwZS55FcSoCW%2FdZpqGs6BBd4SCPtnWfxd1vuYXX3pppwUyic7j0BJ6fOBrKS5oNii3esPpIEl7g55EmQVs8LDHeoQ7TRvUtpHdCRSrMZiFX160ayIYLX1XxkMY%2FKviuq3aedM%2BNoWZVxSYJ3I9wK7hdcPOUGysLGlEi60qBp95%2FP2eUWymQXEXFX02EqStGch5paRaix4avrM8k%2BxdD28tkih3Qv86Pgz3B81Ynrok3y0YR5BCfyXoaQ2Y7%2F4EUdlSstCiawG3HQoXdumuuX%2F4O1uWWB8UX5FBPHefwzWeFb1hry1h2wOD8u1jT%2Foe5rXIvTFCe1iLDsUAKNV41ULGmqQ2vhRjlHG761yoL2Eb9%2FVrW0Vgs6beLgivNYyj8%2FrLxq%2FrJrvIK1fuYQ7ezE%2FECfgRuxwswylF45WZ9x3VesH3DEjfQ%2BcjrP4T27SkKlloXkXFl5LwHMZnvVTh3DvOQps%2B9o%2B28%2FfYo2pckknncJILuR9z9%2Boil8zLJ38jXC0%2BRg30KPqV0uNpEMCOBHQBEfhZur%2BDCmgIIVavOnLXEDwgpp5BM%2FciTxGlLDMffV3QavBMQMNnz2cAGOqUBZbmD2oiQ1Twq67NrYgr8u5ZsEXYWlAzfZGOU1FxWgzdGM9YEVpjQOQCv86s7ZfMwDEHkZIQnp7mOzUeVWQ276gr1rdnPXuD2SN2U6j6wXhMiPg%2B5WXWHiN3XT6%2F%2BCVeGtOaaIAJgWwyXoMUUqpHJrWLwxD295bjeqH2PR%2BW7iXF8pY53Qke47aQIszrHyTRjysTwTMkUyK5yprs3%2F4QgKshoqlJ3&X-Amz-Signature=2e1f59c8ffa05946b225789df9ead3750490389717ff2ee7e6c09655805d84ef&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYWCYUT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD6EfQS9Rz%2FPU%2FBM7ioGKSrkxsdq7agRLx%2Fk3Dw5dSAewIgZVyArXRfSMt78IYjJ%2FLt3zSxrporHr1PCbg3Kt05pEQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXc6NE8Jn3aM7JUtCrcA9rgO7J09qNo8U%2Fnv%2FImiVqN8tjQYTX%2FKPACAoR3MUstP2qHh%2Fa2dKwZS55FcSoCW%2FdZpqGs6BBd4SCPtnWfxd1vuYXX3pppwUyic7j0BJ6fOBrKS5oNii3esPpIEl7g55EmQVs8LDHeoQ7TRvUtpHdCRSrMZiFX160ayIYLX1XxkMY%2FKviuq3aedM%2BNoWZVxSYJ3I9wK7hdcPOUGysLGlEi60qBp95%2FP2eUWymQXEXFX02EqStGch5paRaix4avrM8k%2BxdD28tkih3Qv86Pgz3B81Ynrok3y0YR5BCfyXoaQ2Y7%2F4EUdlSstCiawG3HQoXdumuuX%2F4O1uWWB8UX5FBPHefwzWeFb1hry1h2wOD8u1jT%2Foe5rXIvTFCe1iLDsUAKNV41ULGmqQ2vhRjlHG761yoL2Eb9%2FVrW0Vgs6beLgivNYyj8%2FrLxq%2FrJrvIK1fuYQ7ezE%2FECfgRuxwswylF45WZ9x3VesH3DEjfQ%2BcjrP4T27SkKlloXkXFl5LwHMZnvVTh3DvOQps%2B9o%2B28%2FfYo2pckknncJILuR9z9%2Boil8zLJ38jXC0%2BRg30KPqV0uNpEMCOBHQBEfhZur%2BDCmgIIVavOnLXEDwgpp5BM%2FciTxGlLDMffV3QavBMQMNnz2cAGOqUBZbmD2oiQ1Twq67NrYgr8u5ZsEXYWlAzfZGOU1FxWgzdGM9YEVpjQOQCv86s7ZfMwDEHkZIQnp7mOzUeVWQ276gr1rdnPXuD2SN2U6j6wXhMiPg%2B5WXWHiN3XT6%2F%2BCVeGtOaaIAJgWwyXoMUUqpHJrWLwxD295bjeqH2PR%2BW7iXF8pY53Qke47aQIszrHyTRjysTwTMkUyK5yprs3%2F4QgKshoqlJ3&X-Amz-Signature=5fb1ff57fcb0b3f69f47299d75bc2cae1a4a33aebb75e0adf6463ba0528a83eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
