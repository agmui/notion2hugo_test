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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QCGJOO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCtOwXP8leicHTp4qYgXu3JzTHmwuh9luae0SHqtF25GAIhAKRi255dD2twyOxC%2BQAI4HNI7RTfAqdua28sUu6kqI84Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyrUY1C%2FM9W24fSB48q3ANXsvi31VdfeDBRfSoBNRkVm1qn%2Bra8CHrNjuFm%2FybqIsnxmw%2FZQdEPclPd5%2FIkoE6lQM06uX20fJ34r%2BBD48fh7sHVoGRNphx1RPThaTzXeJR89FZniaG%2B9uVHmjEMn8ICrNDQOju693Vju5d3LhO6uiIm%2F6y9JaW40KGRX%2BIxag3IwGWf7iI3Ck%2B3afOQ2003bF3HSJ6ouhc6%2FycfXLWU83ckxOrAzlvo9q4Uj0qy%2Fha5ohD4qYAxY%2Fwp4HPZUtPewGVd3r46iBpuvOKOTg5U51I%2Bvk8EpbH2WYHwxPdMCablH1dci4ZBNXEkSAMAIKHhKGKLEpCQwv1xHb8%2BCVrAC8LtyJ%2BP7PIVq98RURMgDkIb2N1b%2FbQ1%2BzJtIKgiaXF3fUQ66rFoTYAPpY64PmnfWKr%2BxnJmbpsJr%2Fv59GYGYTztquphSxMF5FGS%2Fkm369eV6hTK5QF%2BLzpugSQcz3Rb4wdSWNUIYPgYSt%2FErFBPjaxkW9Fh5%2FpJwV3SN%2F94Tyd1FPtl9ypDdnj3wMjPdegEiV%2FvL%2B5rnXAEfjN3jOk9mKEoIt34driikcRN6WAoD9ETcI5oVcL%2Bj6pSsH13OypZSw%2FYkq0%2BVZwgicRQSGgdsJiBnC9rNQCz9Ao15TCnjIC%2BBjqkAcHSZhwW1OdYZ7bbj3%2F2Xj6cBamKyxUd08liu%2FhwLZR22lnTzp71BYIjy8IdrbAB9A9%2BZaXnKM0KfnNkK02umb0%2F1H53a3LL4Ess7ktMPtulr6pR0yvTriRQFNCEin%2Bg1kzoJrbwHckKk9518TGmZoLlCApswFMiaFyoy0whbn1Hj1w%2Be%2Fa5Nd9UQh9F3cgON91gblduZ%2FaeJUROQ9fu2zrhoR9w&X-Amz-Signature=34f3b28c7cfb22d0322054e5d2d51ef50d1dae174f6d5f5a7e975c6e024be3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QCGJOO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCtOwXP8leicHTp4qYgXu3JzTHmwuh9luae0SHqtF25GAIhAKRi255dD2twyOxC%2BQAI4HNI7RTfAqdua28sUu6kqI84Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyrUY1C%2FM9W24fSB48q3ANXsvi31VdfeDBRfSoBNRkVm1qn%2Bra8CHrNjuFm%2FybqIsnxmw%2FZQdEPclPd5%2FIkoE6lQM06uX20fJ34r%2BBD48fh7sHVoGRNphx1RPThaTzXeJR89FZniaG%2B9uVHmjEMn8ICrNDQOju693Vju5d3LhO6uiIm%2F6y9JaW40KGRX%2BIxag3IwGWf7iI3Ck%2B3afOQ2003bF3HSJ6ouhc6%2FycfXLWU83ckxOrAzlvo9q4Uj0qy%2Fha5ohD4qYAxY%2Fwp4HPZUtPewGVd3r46iBpuvOKOTg5U51I%2Bvk8EpbH2WYHwxPdMCablH1dci4ZBNXEkSAMAIKHhKGKLEpCQwv1xHb8%2BCVrAC8LtyJ%2BP7PIVq98RURMgDkIb2N1b%2FbQ1%2BzJtIKgiaXF3fUQ66rFoTYAPpY64PmnfWKr%2BxnJmbpsJr%2Fv59GYGYTztquphSxMF5FGS%2Fkm369eV6hTK5QF%2BLzpugSQcz3Rb4wdSWNUIYPgYSt%2FErFBPjaxkW9Fh5%2FpJwV3SN%2F94Tyd1FPtl9ypDdnj3wMjPdegEiV%2FvL%2B5rnXAEfjN3jOk9mKEoIt34driikcRN6WAoD9ETcI5oVcL%2Bj6pSsH13OypZSw%2FYkq0%2BVZwgicRQSGgdsJiBnC9rNQCz9Ao15TCnjIC%2BBjqkAcHSZhwW1OdYZ7bbj3%2F2Xj6cBamKyxUd08liu%2FhwLZR22lnTzp71BYIjy8IdrbAB9A9%2BZaXnKM0KfnNkK02umb0%2F1H53a3LL4Ess7ktMPtulr6pR0yvTriRQFNCEin%2Bg1kzoJrbwHckKk9518TGmZoLlCApswFMiaFyoy0whbn1Hj1w%2Be%2Fa5Nd9UQh9F3cgON91gblduZ%2FaeJUROQ9fu2zrhoR9w&X-Amz-Signature=9c4010e9b2c027412d871d3106dac2b24dca5d0fe3f7dfc902d511ed62e71958&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
