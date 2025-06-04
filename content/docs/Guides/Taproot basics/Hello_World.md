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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CC56LG7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGSUBuxNSYyjzolmbYADSl%2ByJJAnE782lh7arxmkbY7VAiEAquK3oC7JqhZpTtccfb6JzWHTlJoY689EJlgC4tUhxD8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA9kwiZyU4SPh1C81CrcA6hrZdAjRLiYIWxgBIfJeIWCDW3yp%2BYaDzRtGLvq2YceFDrhwPUWMIT0JJGpIj0ixYMNSFfHgA2WfsGELpVPdfNkEqjnTL0CSM7pd%2BpGZ2TlLePRkKeM1XO91FiSbYno4IgCaa97puBK3dj8YfarTzPw8G4nAh%2BUccdOniFgHgj36cQ%2F8DT6lScK1K4HkcXUexv6bMmezKlq4SCQCub4QhJ29ktRk%2B5Wqs0PrfLVO%2BTJ7u3EO8OG2GSTSUlroTztHXmQz1fDJ3vfnsf5KKlp3L26ld9D0qSx8EhpvtTpWx6bmxHrFsjpVo6ghZwv9HsE8Zue8e1aobgTp0%2FHDLbFdP%2ByORbmUMK4dqyDOcZ7pwRF9kBPpiGzcNWYgfYihD9p%2FxeuS5jFxm9TIwkp9dfu640Bo9dnoXNMmiWfnMQAGPsFh0QD%2By%2FbphiNzdf3vAQ40Qh4T13%2Bh%2FqJ8uudn08DJm1kHBx%2BNzdF7%2BpMQTmuVPt%2BCuReIexf8OTpVDUMWNSHt86gATyxidPPWPumsF8gu2FIRhfzU5TUmOZa2st%2BxD09mXPXLzWo7TiiW53WmdtnjLypM1xww6dW%2Fk39wxqZiZHTJAFPJ8VxitYH6aVvYQZ7i9jUfpDVaTUsstR4MNfg%2FsEGOqUB1Knz6d%2FxAb5b%2FPtMv4Jng%2FRa4zmyVr0PtUlrLg93MZ5jTBfjNzEeRCd%2BczTb2hZqco9EcNQhQJX36lx0VydjbDICEucmNql%2BD8JuR10aVzLx%2FMqAFflyhAL8Uu0TlsBds2Wyi%2BI6wgXp7Ggp7hiv4K6DbGt%2BQdzZwLU02uPwYU9t%2FrHHQHnWm9%2BC3uj3teyjHQHuohQ2uMNzli8RYdaIDWgk%2FKhp&X-Amz-Signature=0c75e80e341948ed1b8311d957a99ba42e457d6fdca0f4d55785dfa4b53a7872&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CC56LG7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGSUBuxNSYyjzolmbYADSl%2ByJJAnE782lh7arxmkbY7VAiEAquK3oC7JqhZpTtccfb6JzWHTlJoY689EJlgC4tUhxD8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA9kwiZyU4SPh1C81CrcA6hrZdAjRLiYIWxgBIfJeIWCDW3yp%2BYaDzRtGLvq2YceFDrhwPUWMIT0JJGpIj0ixYMNSFfHgA2WfsGELpVPdfNkEqjnTL0CSM7pd%2BpGZ2TlLePRkKeM1XO91FiSbYno4IgCaa97puBK3dj8YfarTzPw8G4nAh%2BUccdOniFgHgj36cQ%2F8DT6lScK1K4HkcXUexv6bMmezKlq4SCQCub4QhJ29ktRk%2B5Wqs0PrfLVO%2BTJ7u3EO8OG2GSTSUlroTztHXmQz1fDJ3vfnsf5KKlp3L26ld9D0qSx8EhpvtTpWx6bmxHrFsjpVo6ghZwv9HsE8Zue8e1aobgTp0%2FHDLbFdP%2ByORbmUMK4dqyDOcZ7pwRF9kBPpiGzcNWYgfYihD9p%2FxeuS5jFxm9TIwkp9dfu640Bo9dnoXNMmiWfnMQAGPsFh0QD%2By%2FbphiNzdf3vAQ40Qh4T13%2Bh%2FqJ8uudn08DJm1kHBx%2BNzdF7%2BpMQTmuVPt%2BCuReIexf8OTpVDUMWNSHt86gATyxidPPWPumsF8gu2FIRhfzU5TUmOZa2st%2BxD09mXPXLzWo7TiiW53WmdtnjLypM1xww6dW%2Fk39wxqZiZHTJAFPJ8VxitYH6aVvYQZ7i9jUfpDVaTUsstR4MNfg%2FsEGOqUB1Knz6d%2FxAb5b%2FPtMv4Jng%2FRa4zmyVr0PtUlrLg93MZ5jTBfjNzEeRCd%2BczTb2hZqco9EcNQhQJX36lx0VydjbDICEucmNql%2BD8JuR10aVzLx%2FMqAFflyhAL8Uu0TlsBds2Wyi%2BI6wgXp7Ggp7hiv4K6DbGt%2BQdzZwLU02uPwYU9t%2FrHHQHnWm9%2BC3uj3teyjHQHuohQ2uMNzli8RYdaIDWgk%2FKhp&X-Amz-Signature=5c6ccf09df803a24d68e1685d3ab5c542c5c121e0de89e3a1d637d752dcbc1aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
