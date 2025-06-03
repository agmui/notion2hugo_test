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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPTX6GF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHH5Tm80ux9Buw4JPPLNH5xepeIdXOJw0084myUnywgQAiAmgLPdplEZmSgRLzdyXEwHmemYJINDOQv%2FNWx7X3r0yCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5BTejQZvVY9lFV%2B4KtwDST%2Bb%2F%2B5%2F8QNmpFYLXb%2F9OG88E5fxWGFfgdJr0ZL2FHPbfp4mJ5Uit6xRZPZSgU%2BfSi0oG2%2FZYn%2Ft3PUhajyod8JUD6k4GYMW%2FYGbfd0H6jvC3nv7065ddp5jZOpzGyXHmFdh2tTqvTE%2FmmMPL0WThYVjppCYZ9M7hG%2FPUqtNp%2Bt4EKwCFfD%2Fb%2F6Dlnu0OQG1s5oVdpax4aKxfVJyMyjRhqZujVDMZQQ%2BaV13fcY9JT8crYQmfi29NGtWoWmPd%2FZ3oeQowWTVkeC45sZd4Z242Jr7NA7RLBpqHDIctoGCUsGk0xjIAWDMPeQYmweKiVuF7jBk%2B2Y3qx0BWIVQLRf8%2BwO9jRau%2BHyQu4mc0RFjZBK%2F09JIdH1yksY5YZhjmo7VuWizXCwXYE%2FUb4JONZSGhU91yqhTaSZnG9NPB5AVICv%2Bh4i%2FGDX4P%2Fc7LCHWcKUA5ws02cxUHGSBU2siTuuuTHWdWkddxNV43%2BMGh2oVRi00Q2meuf2KRsZj8gkM4CwtIh34T9%2Fuk%2BE5n%2BCErsHQuXBHeKlAXIn5rFhRvszJklTDQbDjV6vKqqTjqTf%2BvJeNyp8qebx6%2Bco0iySyteG9h%2FbVgbnHlfrcBhlK4t9dpT9OSl%2Fng%2FKSFMf7ZDIwoOf7wQY6pgHjpi1iG0wWOghrQ42ETK02xa1FygGevwUNSdcNm4s5hoIRNi8ul5ZddkL7Nvk9ZzY9S%2FqW805DD8Gs58Opq7%2FNkKIwk7MgeCw9qAN3rezIxHIgfqZYuOnCuuWoz%2FKZyzn5gH6eb9ffvA33uicZ1yFfD%2FqWiLHHblgdNCPNNJ%2F3N2V1gjP%2B0AxFC34VDotcnoU2aziLqmYBk8MpaAmyJco3buXfjRO5&X-Amz-Signature=17c1b021cf703d774bd5877299d04a0d73183381e19e0612362a0dc09df7408e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPTX6GF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHH5Tm80ux9Buw4JPPLNH5xepeIdXOJw0084myUnywgQAiAmgLPdplEZmSgRLzdyXEwHmemYJINDOQv%2FNWx7X3r0yCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5BTejQZvVY9lFV%2B4KtwDST%2Bb%2F%2B5%2F8QNmpFYLXb%2F9OG88E5fxWGFfgdJr0ZL2FHPbfp4mJ5Uit6xRZPZSgU%2BfSi0oG2%2FZYn%2Ft3PUhajyod8JUD6k4GYMW%2FYGbfd0H6jvC3nv7065ddp5jZOpzGyXHmFdh2tTqvTE%2FmmMPL0WThYVjppCYZ9M7hG%2FPUqtNp%2Bt4EKwCFfD%2Fb%2F6Dlnu0OQG1s5oVdpax4aKxfVJyMyjRhqZujVDMZQQ%2BaV13fcY9JT8crYQmfi29NGtWoWmPd%2FZ3oeQowWTVkeC45sZd4Z242Jr7NA7RLBpqHDIctoGCUsGk0xjIAWDMPeQYmweKiVuF7jBk%2B2Y3qx0BWIVQLRf8%2BwO9jRau%2BHyQu4mc0RFjZBK%2F09JIdH1yksY5YZhjmo7VuWizXCwXYE%2FUb4JONZSGhU91yqhTaSZnG9NPB5AVICv%2Bh4i%2FGDX4P%2Fc7LCHWcKUA5ws02cxUHGSBU2siTuuuTHWdWkddxNV43%2BMGh2oVRi00Q2meuf2KRsZj8gkM4CwtIh34T9%2Fuk%2BE5n%2BCErsHQuXBHeKlAXIn5rFhRvszJklTDQbDjV6vKqqTjqTf%2BvJeNyp8qebx6%2Bco0iySyteG9h%2FbVgbnHlfrcBhlK4t9dpT9OSl%2Fng%2FKSFMf7ZDIwoOf7wQY6pgHjpi1iG0wWOghrQ42ETK02xa1FygGevwUNSdcNm4s5hoIRNi8ul5ZddkL7Nvk9ZzY9S%2FqW805DD8Gs58Opq7%2FNkKIwk7MgeCw9qAN3rezIxHIgfqZYuOnCuuWoz%2FKZyzn5gH6eb9ffvA33uicZ1yFfD%2FqWiLHHblgdNCPNNJ%2F3N2V1gjP%2B0AxFC34VDotcnoU2aziLqmYBk8MpaAmyJco3buXfjRO5&X-Amz-Signature=51467cdbe12b866a11d010dc2c0e54eccce9aec9441fa4f3eff800db13a54f95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
