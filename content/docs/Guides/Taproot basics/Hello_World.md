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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFRRNWW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHMqdDmN3gjgZ5B9%2F6%2FeoMLs3O0nvUDDxR7kquLyiFOuAiEA4jpglDNR3F%2BUepnQamDagNHYUThWy0zoEPDyCbVg8YQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOY8Xz0a0S1k4J5yeCrcA%2F7kIoDj4umYBkIUHa87VObcux7nUZH9aXCHd6brQVgDYMv5rTpfyei5Sgkf0QX0%2FA%2FEZqILnglVLOnEHUlkz%2Fp4vahHYkB7FmY9jgTWKk%2Bi4VwjPpS5B6we2HkVFgynw32WlRUefQ%2BsHyxXudHhqlDCmK1Rnqg5kQaW9ThvCIivjCpD4zXnUuCTnjWJExfiPxcEoOKewT4Zcx0gKonU9SLofhUuKmoXyNZPeFYUVpVHFCmzMY4p1dcoG4cXb4JQAsgYQcoLcLODqUqXo6gy5VAbUq%2BwfqdMrGfH%2FK2ZuCvTHkMAvwsBKO3T0CNJAla3uZGeLMGhr3unw8pjT1gZQcUugzCY7VPotSsFuN30uccrqDuXfjLkCZsvdDMkwOxPqmrNk%2BERjo78IC3Ri5HhRrluyC5yKQX%2FUroWGhgPNxuYdqbeoVxBFj0AE%2FmaVZAAm3jrxgzKZ5V7AudQMx7ZSoVLbyp4UZuPh2iNp4EAGXtwrYbO3CujR6bL%2BiIjdHd41PKdm2o9YOaBbV%2BG6hQ9rV55h4ElfR4KsPhdEC%2F211MLHg0T%2B5DlJUh4wn4bM4s9LmZ%2BTuuihpUeQS2iqASqpeiiHbChc73n6NdQRhvWJnPU89U3dVzB4OurpPZPMPvMyMQGOqUBc2z%2FmJRrDtmAZvNYHZpR9ReZz6b1XByHJfgGE%2BA3HkW01goL68PUcZlJq6jg8Dn4sm9VcfBUluCCwv73MPrSP87Sg6%2B%2FDjQuYUtXi6ziEjJU6bvD9KiAtiRwOJ3lPBqytWW%2F0MYUrG%2BTywIykKrssYlvPshb2L0KbFCbd8aytfww15hFVkES05fwA5KXThQh91oPvZHl6su8e7Vhdn4bu9bsMC%2FC&X-Amz-Signature=20981d244d13f0dfd05615fe0821d4e7140469598909bd778776779bc236c454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFRRNWW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHMqdDmN3gjgZ5B9%2F6%2FeoMLs3O0nvUDDxR7kquLyiFOuAiEA4jpglDNR3F%2BUepnQamDagNHYUThWy0zoEPDyCbVg8YQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOY8Xz0a0S1k4J5yeCrcA%2F7kIoDj4umYBkIUHa87VObcux7nUZH9aXCHd6brQVgDYMv5rTpfyei5Sgkf0QX0%2FA%2FEZqILnglVLOnEHUlkz%2Fp4vahHYkB7FmY9jgTWKk%2Bi4VwjPpS5B6we2HkVFgynw32WlRUefQ%2BsHyxXudHhqlDCmK1Rnqg5kQaW9ThvCIivjCpD4zXnUuCTnjWJExfiPxcEoOKewT4Zcx0gKonU9SLofhUuKmoXyNZPeFYUVpVHFCmzMY4p1dcoG4cXb4JQAsgYQcoLcLODqUqXo6gy5VAbUq%2BwfqdMrGfH%2FK2ZuCvTHkMAvwsBKO3T0CNJAla3uZGeLMGhr3unw8pjT1gZQcUugzCY7VPotSsFuN30uccrqDuXfjLkCZsvdDMkwOxPqmrNk%2BERjo78IC3Ri5HhRrluyC5yKQX%2FUroWGhgPNxuYdqbeoVxBFj0AE%2FmaVZAAm3jrxgzKZ5V7AudQMx7ZSoVLbyp4UZuPh2iNp4EAGXtwrYbO3CujR6bL%2BiIjdHd41PKdm2o9YOaBbV%2BG6hQ9rV55h4ElfR4KsPhdEC%2F211MLHg0T%2B5DlJUh4wn4bM4s9LmZ%2BTuuihpUeQS2iqASqpeiiHbChc73n6NdQRhvWJnPU89U3dVzB4OurpPZPMPvMyMQGOqUBc2z%2FmJRrDtmAZvNYHZpR9ReZz6b1XByHJfgGE%2BA3HkW01goL68PUcZlJq6jg8Dn4sm9VcfBUluCCwv73MPrSP87Sg6%2B%2FDjQuYUtXi6ziEjJU6bvD9KiAtiRwOJ3lPBqytWW%2F0MYUrG%2BTywIykKrssYlvPshb2L0KbFCbd8aytfww15hFVkES05fwA5KXThQh91oPvZHl6su8e7Vhdn4bu9bsMC%2FC&X-Amz-Signature=4cbf531f977714c017799eef382a99db66ddb5723ed4de04d15a60f7daa86928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
