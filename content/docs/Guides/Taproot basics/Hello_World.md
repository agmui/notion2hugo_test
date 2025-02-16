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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXCORJU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQ4SHHM0t9XMRfum7QUPu38UffrhLG4J44QvGmwvsS7wIhAJuNRcJVc79oLVgDv%2B06sdA%2FbgPOD5r4MtfQYlfb6EFeKv8DCFYQABoMNjM3NDIzMTgzODA1IgyZR7eWYbJ8sm3NfzEq3AOAL7aEl2vb1ATpstsT2U64htdsU%2BXg%2FpTda%2FZdFLe%2FdzXqS3jsdzB9YxZya0Z3Z%2FPX9lryf3sza%2BJL4lmSUTf0eLtKcubHUGNKdUt0cdRCZ1DiJWdlAAeTRhb6WuK6lxV32VCnUmLm0TQ4b9bdOOe9aWdM9cJgiLS07CnydgpsXau0UpcIqiXdYgbMo%2FVeIiuLuVTHmR7w9XPGrx9DKEYdrjuOaWL0%2FOvxCY5v%2B76Iux8LjR%2BTaXu%2FvZXCZs3sbVHHLH1mxUlJJeLnAZzoR32EBWPrsCZsWg3a4DN5efslGfGEcWEd5kYO1gRnqkiSMU6WTbfBkt%2BAguHTlDKsHhtTRQ8tZJGJQsbuK5FYcSGJiIyY92GGapnnoyuSxW8IwDdCqjABAylkX04pB4vXIQwm%2BX1ZS5QewzMhcfy2LzUDrBzvwpbI%2BHcH5mHaOS%2BgvnIVt0DxZmN%2F9cMS%2F9XWwxzYRlDI60Rh0OKo027GYiSc2OPArFAhn2vejQX%2BX2FlDt7snyhLrp2zIRmAYa5ymDRcD77qQeFw9VQI1LhJDagQu%2FsTPGEGMpClIQtRoSCrMu%2Fad434jK7Tw2JJVE38AyIS%2F9aP5asTrx3DLALD01sCqqUSff2FJBJBcgmAUjDo3sW9BjqkAcaIsXxB1Yl6qm0r8CKC%2BFypj%2FNexMvT2ugtq8zo7Enh271OsSh6qhPpcluPL49748LUtRUeoBLmTS6%2BMnXjqMJlW9bWCvwLfZ1sgYXF8%2B5bg0P9vykom0yEmh58geLXc3KQ2h8QayFL4qv1W9rrtdLpfS2aQRJxzk1auat9kOi8KQUyGrHRlqe333WvOcI%2BJb8g1EwQxOKCAjerpC4lyHpUFljo&X-Amz-Signature=514160e4418de7b9482bc6fd3ef7a693ce1106749ff52420245471ec65c897f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXCORJU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQ4SHHM0t9XMRfum7QUPu38UffrhLG4J44QvGmwvsS7wIhAJuNRcJVc79oLVgDv%2B06sdA%2FbgPOD5r4MtfQYlfb6EFeKv8DCFYQABoMNjM3NDIzMTgzODA1IgyZR7eWYbJ8sm3NfzEq3AOAL7aEl2vb1ATpstsT2U64htdsU%2BXg%2FpTda%2FZdFLe%2FdzXqS3jsdzB9YxZya0Z3Z%2FPX9lryf3sza%2BJL4lmSUTf0eLtKcubHUGNKdUt0cdRCZ1DiJWdlAAeTRhb6WuK6lxV32VCnUmLm0TQ4b9bdOOe9aWdM9cJgiLS07CnydgpsXau0UpcIqiXdYgbMo%2FVeIiuLuVTHmR7w9XPGrx9DKEYdrjuOaWL0%2FOvxCY5v%2B76Iux8LjR%2BTaXu%2FvZXCZs3sbVHHLH1mxUlJJeLnAZzoR32EBWPrsCZsWg3a4DN5efslGfGEcWEd5kYO1gRnqkiSMU6WTbfBkt%2BAguHTlDKsHhtTRQ8tZJGJQsbuK5FYcSGJiIyY92GGapnnoyuSxW8IwDdCqjABAylkX04pB4vXIQwm%2BX1ZS5QewzMhcfy2LzUDrBzvwpbI%2BHcH5mHaOS%2BgvnIVt0DxZmN%2F9cMS%2F9XWwxzYRlDI60Rh0OKo027GYiSc2OPArFAhn2vejQX%2BX2FlDt7snyhLrp2zIRmAYa5ymDRcD77qQeFw9VQI1LhJDagQu%2FsTPGEGMpClIQtRoSCrMu%2Fad434jK7Tw2JJVE38AyIS%2F9aP5asTrx3DLALD01sCqqUSff2FJBJBcgmAUjDo3sW9BjqkAcaIsXxB1Yl6qm0r8CKC%2BFypj%2FNexMvT2ugtq8zo7Enh271OsSh6qhPpcluPL49748LUtRUeoBLmTS6%2BMnXjqMJlW9bWCvwLfZ1sgYXF8%2B5bg0P9vykom0yEmh58geLXc3KQ2h8QayFL4qv1W9rrtdLpfS2aQRJxzk1auat9kOi8KQUyGrHRlqe333WvOcI%2BJb8g1EwQxOKCAjerpC4lyHpUFljo&X-Amz-Signature=0671368eb9462c692693d7e40af53b9c01c50e8f2e655badeaedd2f1e726db00&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
