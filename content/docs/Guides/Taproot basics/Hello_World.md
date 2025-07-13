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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RSWMPH5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzi4wCyx5q7xvaoaoXbD6v9y6SgwMOxi%2F27HrmFHIQ9QIhAMc5Lxcs6Ys8B5IRzcDVgRctfHYZi53pl3KSI6968zgrKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxutf48t%2Bi%2F0MT%2FTyIq3AP%2FSDSJu8UPz8m5hL5gqOlzF%2FdJk1c5Vu9bPTE3IvXOeJFF42ZBMjV7ePPnoUUJh7LWx%2B%2BCWUKj1mn9yLqiHveN76hoOexFtbsYm12rxL%2F1bc7i1LuVMClIbztAPsrUD%2FVmkWQFZxtdO36ZrvFRGPwLrkXmHkuQEr950S6DLMTI4KfGJEQA3blv5Pmfo23rV0ipsmbCVshVs3eQ98aH57m8IovE7bjj5hatzY0OlXtuc%2BkdeaGPi0rh7Dt48iplatr9WJPx6V0gH8evmGZLbptepLF5X2sFjR2pONGNioUwun9ibj1617VD75GHt7n%2BdlH%2BSLjZynQknaBmP3b3PipWHshR%2BOkyMfQBGBMLB0SfiVdvqtwrZT1B4Bj90Ij9NcYWZ0SAS3lbVP%2BNUsZvmmCIjZXDZd8%2BM9lVmYYGlLjnQh4mr1Hp3jjjjITmjjdjoaKQhOuE0fV4OvrjZxjBGfKeGRITkSRIcg4b2e8K76a0UepNbrr73aKWnmBh82V%2BXE62E7v%2F6GP24k44amhYl9yTficc9gjgCjf3P3mbGExsr6cRWMVax6piNyWKs0j%2BoR8uEVCAACctv2EUAW0QQmsenfMxSNXZW5yrw%2BPrpGTQwAL%2B0RnLQjVznfYICzC%2FrczDBjqkAaXMsuPV%2B2KbYpxOdEUD12pjAuYLMoljkazSjT6XdY65m3RL%2BzRN8Z9Jg3Ld5uMS%2Bmhw2SfSwqJ350L14uioYd4XSoPzuqdnQ02HMgIkCkonKjHc4PFWN%2BZIoJwjQL1mUsYZo%2Br6YbovEsJhQK96lQyZ0pxZSvbN0uR9lp2raMo0%2BPdj2CEH2%2BlLD0MY1ilnYQnGKwLO3c3alOC2wzHBMfyk53iq&X-Amz-Signature=1e0e099af8817bc306749b53737af37323097f730386e9a541988fc703a2554e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RSWMPH5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzi4wCyx5q7xvaoaoXbD6v9y6SgwMOxi%2F27HrmFHIQ9QIhAMc5Lxcs6Ys8B5IRzcDVgRctfHYZi53pl3KSI6968zgrKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxutf48t%2Bi%2F0MT%2FTyIq3AP%2FSDSJu8UPz8m5hL5gqOlzF%2FdJk1c5Vu9bPTE3IvXOeJFF42ZBMjV7ePPnoUUJh7LWx%2B%2BCWUKj1mn9yLqiHveN76hoOexFtbsYm12rxL%2F1bc7i1LuVMClIbztAPsrUD%2FVmkWQFZxtdO36ZrvFRGPwLrkXmHkuQEr950S6DLMTI4KfGJEQA3blv5Pmfo23rV0ipsmbCVshVs3eQ98aH57m8IovE7bjj5hatzY0OlXtuc%2BkdeaGPi0rh7Dt48iplatr9WJPx6V0gH8evmGZLbptepLF5X2sFjR2pONGNioUwun9ibj1617VD75GHt7n%2BdlH%2BSLjZynQknaBmP3b3PipWHshR%2BOkyMfQBGBMLB0SfiVdvqtwrZT1B4Bj90Ij9NcYWZ0SAS3lbVP%2BNUsZvmmCIjZXDZd8%2BM9lVmYYGlLjnQh4mr1Hp3jjjjITmjjdjoaKQhOuE0fV4OvrjZxjBGfKeGRITkSRIcg4b2e8K76a0UepNbrr73aKWnmBh82V%2BXE62E7v%2F6GP24k44amhYl9yTficc9gjgCjf3P3mbGExsr6cRWMVax6piNyWKs0j%2BoR8uEVCAACctv2EUAW0QQmsenfMxSNXZW5yrw%2BPrpGTQwAL%2B0RnLQjVznfYICzC%2FrczDBjqkAaXMsuPV%2B2KbYpxOdEUD12pjAuYLMoljkazSjT6XdY65m3RL%2BzRN8Z9Jg3Ld5uMS%2Bmhw2SfSwqJ350L14uioYd4XSoPzuqdnQ02HMgIkCkonKjHc4PFWN%2BZIoJwjQL1mUsYZo%2Br6YbovEsJhQK96lQyZ0pxZSvbN0uR9lp2raMo0%2BPdj2CEH2%2BlLD0MY1ilnYQnGKwLO3c3alOC2wzHBMfyk53iq&X-Amz-Signature=15d24cf292817fce275ac72770518081a42c28378e4688b662b9550fd77cd7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
