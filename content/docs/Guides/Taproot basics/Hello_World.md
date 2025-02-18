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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKGBBIU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDRrjVXTMcxJZoTTT2DMLooMXdWIdyoPCMBIYT0sdxtIAIgNdbyehubYBtI5%2BSrGiKrgsqf9J141FasAfuRM0c9p8gqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYoCeNES%2Bd4aUmDLircA437qAvXRvPPELnfOc0Fza%2FIWZ37ij5secFSOc%2Fc4g2cALTrbj6Kl590odgnc1%2BB54znQev0wkaaUjTFsBz2GIpH8IfXl0iCn8XQsobtpMPuDk3oVhgq48Ou%2Bw6EQnIDIQR4L4yhUNOxzk4KFpWL58I4GIWZFb5Oq6tTGVxWx2mYIrlaCy3%2Ft61z%2F77Dtmjr1%2FPFqFSJUepPldTU%2BvKAlJ4FXSMEsqcajfd3VbBKekAJ2eJUYUDWadJlfE7R7VrisjQsJMg9ejidImSLr6L9S3DGlqp%2FjPtiOlUYhO%2Fv1%2FQfzb%2Bjhn4LZphJdz%2FZNkVYjqps%2BBtwJHfh9mEgQPAvG907kW8E77VKXirz8rpAZ2J%2Bads%2FspOXxwp%2BtMJGAkRQeZ3Z1nFm6VV0YAy5m4FQwdnfJZPCHgPxEBpkWd%2FueL3j348Ld3rN3r1sTY0BiI2nEK0g6pDa1QllK82B0BbGI%2BezPP0kUkDMWnKZTVeuznQy5lKbVqUMkzfz6X%2BTMKAe0YUzsynDbn1Nbjh84oX%2FsD8jh%2Bk4Iz4t11duIHr6kuKCcl8gfAu%2BvQ1axJshhfCstLDm8JBUzF0rAEKgjhehMvMdeLl48qlY1oby2DuoSbgNR0kGLFMlnLUf67EAMOjb0b0GOqUBMP%2Btk5ht%2F3o%2BD0ehMk%2FAUMg4AHaTpp4jCY3L3UKebkmdV6Pqw3uGCK54xTSwf8CfrFfW5yX%2B24HsvJ%2FTp20u8svAtnQP6b622nk1jfxmK30t%2FTRUps9ub77uuo8Nmvk%2F8ch7JDgiqX%2ByUGO99evJdque%2BSK%2B0JAaNsmMDWmYejsN54iOZHxeeqj8pDrxSzXaa1PuxlEcEOghwj6FhBz8sgmSLTXa&X-Amz-Signature=6a0a85dc1e18a46608136dcacd3efddbb9f0a90de5cde5ba9be0cb9672e06652&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKGBBIU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDRrjVXTMcxJZoTTT2DMLooMXdWIdyoPCMBIYT0sdxtIAIgNdbyehubYBtI5%2BSrGiKrgsqf9J141FasAfuRM0c9p8gqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYoCeNES%2Bd4aUmDLircA437qAvXRvPPELnfOc0Fza%2FIWZ37ij5secFSOc%2Fc4g2cALTrbj6Kl590odgnc1%2BB54znQev0wkaaUjTFsBz2GIpH8IfXl0iCn8XQsobtpMPuDk3oVhgq48Ou%2Bw6EQnIDIQR4L4yhUNOxzk4KFpWL58I4GIWZFb5Oq6tTGVxWx2mYIrlaCy3%2Ft61z%2F77Dtmjr1%2FPFqFSJUepPldTU%2BvKAlJ4FXSMEsqcajfd3VbBKekAJ2eJUYUDWadJlfE7R7VrisjQsJMg9ejidImSLr6L9S3DGlqp%2FjPtiOlUYhO%2Fv1%2FQfzb%2Bjhn4LZphJdz%2FZNkVYjqps%2BBtwJHfh9mEgQPAvG907kW8E77VKXirz8rpAZ2J%2Bads%2FspOXxwp%2BtMJGAkRQeZ3Z1nFm6VV0YAy5m4FQwdnfJZPCHgPxEBpkWd%2FueL3j348Ld3rN3r1sTY0BiI2nEK0g6pDa1QllK82B0BbGI%2BezPP0kUkDMWnKZTVeuznQy5lKbVqUMkzfz6X%2BTMKAe0YUzsynDbn1Nbjh84oX%2FsD8jh%2Bk4Iz4t11duIHr6kuKCcl8gfAu%2BvQ1axJshhfCstLDm8JBUzF0rAEKgjhehMvMdeLl48qlY1oby2DuoSbgNR0kGLFMlnLUf67EAMOjb0b0GOqUBMP%2Btk5ht%2F3o%2BD0ehMk%2FAUMg4AHaTpp4jCY3L3UKebkmdV6Pqw3uGCK54xTSwf8CfrFfW5yX%2B24HsvJ%2FTp20u8svAtnQP6b622nk1jfxmK30t%2FTRUps9ub77uuo8Nmvk%2F8ch7JDgiqX%2ByUGO99evJdque%2BSK%2B0JAaNsmMDWmYejsN54iOZHxeeqj8pDrxSzXaa1PuxlEcEOghwj6FhBz8sgmSLTXa&X-Amz-Signature=9119672cedffb7cc6fc73fa81a6d107f0c1a7cc478fd979e2030a09bc116aec9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
