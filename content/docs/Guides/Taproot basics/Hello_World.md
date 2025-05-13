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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQNFTD5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCUUp3bTjASo1UEguAnb2Z7uF2IZTdSwdBv4vBjHalN7QIgLo%2BDx53Y7QQ84SV43XRMlNCYoYv3jyrZS6SyqB1BcY0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyHRLbXLpks1SxRtyrcA5jpfyWNNCNCyoG9NNFKJnQt028wkV109w9MLVLUbHdoldSIt8XjAZXhZvVlQ0MmgRFcrf1wa7vi4iS8GLSv1bSgSSWoUf10rPmR0YYZRI8NHZ%2FbYgLbyUNU0MDkPMZZcUEOTKIHBLWtD%2BDBZW4I5dpmrKbndpz1OuQpcguLOKT4vwHxRIIDCdG7Jv1mX5TtghO7Kc5BK9rwgvaIjw%2BGMwrzOpJVDCqGqDCh6FFC4TtS%2FEsOpTY2zwT4cdt%2FZ5rDIbIfSFeOI8dpfsMTC%2FYFFzrAaynYSAnQZ%2BU3InPkMQqD%2FxGMJcQmi2kDcMIzvn%2B1KaYWRSSFPRN0Qo0eOtDJx7zpz6ARF%2FE2%2F8ZbOGMmvg%2BaOPoyPMam4ocbY1I%2FrHrWYgSU%2FJM4aGN1JyXLJlnSHa%2BtT1m2QUlju3QXCXQb694gqAztcTl7JdG6kk91mNMgWoWlcughyN0sPB4b1V5fZnJqVY5Y1gUcgNLYbosmz6J1U6dgswiAkGgWcspquDsh1mJBoa7LFLZtOomOcFOMU1H9wIeLMZn8KKU4juFSEZPcmnfmtBAz9dMFX9vbWAoZK9nZcOXmd4XS1HLyvlmfcXBdj27ZMqYZDjXkjYJi9Dotam5gYEuFk%2FO3tEAeMPqRisEGOqUBpJLsjmKzlVQyMg5axerC%2Bvj21tD7Zlmp%2F0b4JHJjktlyIBR2GLWAwq%2ByudGDSPuU%2Fj66eddJNth%2BmnNk9mbA70eVOuwobVALb%2B2FGMR8tSmOchpuYPfLZYoY5GB%2Beq55HbCAPSSFlNWX5EVhT2OQ6FNmp%2BdDYWrpfMFDsl7sSPSE645X9%2FS6eJ2GzBujcVUnLb3k0mPyIL8A90nUmdhiZWmKdJuc&X-Amz-Signature=82c437c9777df4364e7f828a6e08b419494a7943f6e43c737c17996baab5878d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQNFTD5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCUUp3bTjASo1UEguAnb2Z7uF2IZTdSwdBv4vBjHalN7QIgLo%2BDx53Y7QQ84SV43XRMlNCYoYv3jyrZS6SyqB1BcY0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyHRLbXLpks1SxRtyrcA5jpfyWNNCNCyoG9NNFKJnQt028wkV109w9MLVLUbHdoldSIt8XjAZXhZvVlQ0MmgRFcrf1wa7vi4iS8GLSv1bSgSSWoUf10rPmR0YYZRI8NHZ%2FbYgLbyUNU0MDkPMZZcUEOTKIHBLWtD%2BDBZW4I5dpmrKbndpz1OuQpcguLOKT4vwHxRIIDCdG7Jv1mX5TtghO7Kc5BK9rwgvaIjw%2BGMwrzOpJVDCqGqDCh6FFC4TtS%2FEsOpTY2zwT4cdt%2FZ5rDIbIfSFeOI8dpfsMTC%2FYFFzrAaynYSAnQZ%2BU3InPkMQqD%2FxGMJcQmi2kDcMIzvn%2B1KaYWRSSFPRN0Qo0eOtDJx7zpz6ARF%2FE2%2F8ZbOGMmvg%2BaOPoyPMam4ocbY1I%2FrHrWYgSU%2FJM4aGN1JyXLJlnSHa%2BtT1m2QUlju3QXCXQb694gqAztcTl7JdG6kk91mNMgWoWlcughyN0sPB4b1V5fZnJqVY5Y1gUcgNLYbosmz6J1U6dgswiAkGgWcspquDsh1mJBoa7LFLZtOomOcFOMU1H9wIeLMZn8KKU4juFSEZPcmnfmtBAz9dMFX9vbWAoZK9nZcOXmd4XS1HLyvlmfcXBdj27ZMqYZDjXkjYJi9Dotam5gYEuFk%2FO3tEAeMPqRisEGOqUBpJLsjmKzlVQyMg5axerC%2Bvj21tD7Zlmp%2F0b4JHJjktlyIBR2GLWAwq%2ByudGDSPuU%2Fj66eddJNth%2BmnNk9mbA70eVOuwobVALb%2B2FGMR8tSmOchpuYPfLZYoY5GB%2Beq55HbCAPSSFlNWX5EVhT2OQ6FNmp%2BdDYWrpfMFDsl7sSPSE645X9%2FS6eJ2GzBujcVUnLb3k0mPyIL8A90nUmdhiZWmKdJuc&X-Amz-Signature=0fbb7954109430aa994a497f67b02dbd1f14ab4dde071822b54cd18b1988867e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
