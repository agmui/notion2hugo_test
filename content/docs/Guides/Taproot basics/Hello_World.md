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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RENFUTI6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICC1ypmPlsD8yAuK66mIaiwe0AjZF%2FMZOu19j%2B6aZg%2BTAiBuhTJPyeSScSnaDe%2FllpGnnTC6sheVoM7ISaxMsQOQXir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMyPGeLD%2B851o103J3KtwDmEk3U%2BcZkk%2B4pVmrMLOkEyfJ1eHOqZM9F7Sf84g9zAqjUi69TjHHO6LsyqkCmO5FAxzwiqI4035gXGXJQoB2%2FFqU%2Fv0xDtZCXZthsdrLxm2YyRbZKsSMHn1jGlpLBP1vtZ8F%2FR%2FuTHwEbVxVJ09WF3kQiKk8fRWtTeYdQiNRQzh8mkHbBbicw3y9WmspG48yMvJfYvmGqLZi9XJtxSJjWzUHw9MmFbLFB0aVErPuD6RcNr2r2gMWX44gu7POeI1aQ%2FvGT%2FEgKkAg5koNmd7vLUrwIGd9mCGNfI5oF3DBhN1Ged29gEi9Q1udFOFFewj2w32PpRQ%2BVsg99AQd4i4byKnv5qIEAlnGlS7HjMTsXKubrRgluWGfmvZlwyWhpILsrYPxyn74MCb1UJloT%2FqxuJySkYttPkdwPM09xI8gk4U1yniWiXBDDi2Cmb5qjH0YmoYEpMW%2FqrXV6Wwsg2AM5TsYZnC6u4pvvl2PmvDnImrw8wcjcPnGKmQWFLJaMMyoVyIuNpOYDg98ni3Wo8Rz%2FjqwIbCTTvtMI44O8BntnryYgDiMQjXmsvr3Ced7gJ3hfgB3c%2FepN6ovClPN3hRAk9Ml82t8c2JOGLKRMKcSjkbdLfMlRlabOSARBPswwcGMxAY6pgF1itlelWf4AHK2d1tyMQ4p9P%2FDHcRhM86C51fkNl3P6A7o2lVq6d5Xrwca3qeDNxtAWFaUN6tPpYjDtnPth%2BaBZGKwMSc20V0UtFf5TOSyVZOaE%2BpfqcrG3ANZz9mtNGgusl6jqv%2BPFfyPD5RZviqtIwbZc21UEmfb%2Bjssew3rvCMd%2F5LVckB2t7Y4JwON6arNrT88t4kqhZH5hzmaJXFff%2FAjaGxz&X-Amz-Signature=7a17599b93fdfd9afb94162fcf0bdc24a1f995b359f9e2af2781a78bd84403be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RENFUTI6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICC1ypmPlsD8yAuK66mIaiwe0AjZF%2FMZOu19j%2B6aZg%2BTAiBuhTJPyeSScSnaDe%2FllpGnnTC6sheVoM7ISaxMsQOQXir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMyPGeLD%2B851o103J3KtwDmEk3U%2BcZkk%2B4pVmrMLOkEyfJ1eHOqZM9F7Sf84g9zAqjUi69TjHHO6LsyqkCmO5FAxzwiqI4035gXGXJQoB2%2FFqU%2Fv0xDtZCXZthsdrLxm2YyRbZKsSMHn1jGlpLBP1vtZ8F%2FR%2FuTHwEbVxVJ09WF3kQiKk8fRWtTeYdQiNRQzh8mkHbBbicw3y9WmspG48yMvJfYvmGqLZi9XJtxSJjWzUHw9MmFbLFB0aVErPuD6RcNr2r2gMWX44gu7POeI1aQ%2FvGT%2FEgKkAg5koNmd7vLUrwIGd9mCGNfI5oF3DBhN1Ged29gEi9Q1udFOFFewj2w32PpRQ%2BVsg99AQd4i4byKnv5qIEAlnGlS7HjMTsXKubrRgluWGfmvZlwyWhpILsrYPxyn74MCb1UJloT%2FqxuJySkYttPkdwPM09xI8gk4U1yniWiXBDDi2Cmb5qjH0YmoYEpMW%2FqrXV6Wwsg2AM5TsYZnC6u4pvvl2PmvDnImrw8wcjcPnGKmQWFLJaMMyoVyIuNpOYDg98ni3Wo8Rz%2FjqwIbCTTvtMI44O8BntnryYgDiMQjXmsvr3Ced7gJ3hfgB3c%2FepN6ovClPN3hRAk9Ml82t8c2JOGLKRMKcSjkbdLfMlRlabOSARBPswwcGMxAY6pgF1itlelWf4AHK2d1tyMQ4p9P%2FDHcRhM86C51fkNl3P6A7o2lVq6d5Xrwca3qeDNxtAWFaUN6tPpYjDtnPth%2BaBZGKwMSc20V0UtFf5TOSyVZOaE%2BpfqcrG3ANZz9mtNGgusl6jqv%2BPFfyPD5RZviqtIwbZc21UEmfb%2Bjssew3rvCMd%2F5LVckB2t7Y4JwON6arNrT88t4kqhZH5hzmaJXFff%2FAjaGxz&X-Amz-Signature=4e388bfe87b91d3959b1813e35a2e7a65ca0c20731a2580a869bf3a69ecdcb47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
