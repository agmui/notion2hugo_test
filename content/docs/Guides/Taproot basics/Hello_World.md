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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6IDXOX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDzGjeLKDsXeo%2BZg8FXDecnGMyEo%2Bz57kGKA7nzxLm%2FUwIgcDTFU5dPINI2eI3UV9nklXcb1KAGb8IbzGBzRK5ZXp4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGcSuQVUAfHyoCzkVCrcA1gulLUs%2BI3F7egcB45zgFXCjiSwHw0zrJdaM9LvuxJktFJpq8yin7q%2BYuduB%2Ba9yU1gMQQnykGw0X4Zm9dOoU%2FWENfGy9rUJW2DFtr%2BMiJB90tOn%2BHnSkVQWQE%2ByPLyWo9gUYaXU4Tal27aKj6MGRZUigU%2FERLpcHSh7juoDCvFG6zDmbPaHUnjl%2FnZRy26ZGYho6c9CH4zLlM0KU%2FXC1AONnqk7MCM2UzwKIhtmm%2BpRMgg5AKoVUF4mdWWINSKPy3ezEeNJox%2BSlOcY6XeZzyBBB%2BCxc1W%2Fmnr%2BEQ1kGCZKvOudy0QxhtdPzkW4EnTbZV%2B51eH20S6T4xxC3hMoyFDrb3acFnbzg%2BLUcCllQPx%2FNAHAMHRekg76eMK5NCbGf1ubiqPrdi47a%2Bx5TpyMjRrU0NZfei3uStpcetoPBDA3%2BRR5Kq974%2FlQrL25Vr5TeuLMgnDGhm933biN2leixbXrFUHJS00MP%2BrePmy%2BPgYxS2JZDKqETbEQO5e76d0J2HyFafAcCmjkWM7v4vLlxc05UiJOcGl1unEIlcgeSjq9ohL6nYNkGHThAbWtzEiRkAY3%2BKqFBWKC9AJ2X7yCMfV92hInri8P%2Fw%2BqNJ3ORN7mLUg5HsPFIqqYW0EMLvz5MIGOqUBRAazJBq6CFG11%2Bni2X6zkRC2D6FU7U3N%2Fk7B7gCn%2FoRou3ua9GYDucyRG9wHVJahJy6XajfL2jgpRHHG9YXuFfGOshaFB1vDAxkpEqB2XtY3G39RZGLo2sPTBElq308f%2B9632R7Xs92HXHBZThMhxioT9dRepE1LLWFUn8v4nmpq2lMMZvEHKhxlquIm2AnY5qK5ZTHGEx3SbgHCGnudHIcEtKey&X-Amz-Signature=ce35135e05c79069bcd6291ddfcab611d3f7b2fbbc660dc33d353e60ec45c8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6IDXOX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDzGjeLKDsXeo%2BZg8FXDecnGMyEo%2Bz57kGKA7nzxLm%2FUwIgcDTFU5dPINI2eI3UV9nklXcb1KAGb8IbzGBzRK5ZXp4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGcSuQVUAfHyoCzkVCrcA1gulLUs%2BI3F7egcB45zgFXCjiSwHw0zrJdaM9LvuxJktFJpq8yin7q%2BYuduB%2Ba9yU1gMQQnykGw0X4Zm9dOoU%2FWENfGy9rUJW2DFtr%2BMiJB90tOn%2BHnSkVQWQE%2ByPLyWo9gUYaXU4Tal27aKj6MGRZUigU%2FERLpcHSh7juoDCvFG6zDmbPaHUnjl%2FnZRy26ZGYho6c9CH4zLlM0KU%2FXC1AONnqk7MCM2UzwKIhtmm%2BpRMgg5AKoVUF4mdWWINSKPy3ezEeNJox%2BSlOcY6XeZzyBBB%2BCxc1W%2Fmnr%2BEQ1kGCZKvOudy0QxhtdPzkW4EnTbZV%2B51eH20S6T4xxC3hMoyFDrb3acFnbzg%2BLUcCllQPx%2FNAHAMHRekg76eMK5NCbGf1ubiqPrdi47a%2Bx5TpyMjRrU0NZfei3uStpcetoPBDA3%2BRR5Kq974%2FlQrL25Vr5TeuLMgnDGhm933biN2leixbXrFUHJS00MP%2BrePmy%2BPgYxS2JZDKqETbEQO5e76d0J2HyFafAcCmjkWM7v4vLlxc05UiJOcGl1unEIlcgeSjq9ohL6nYNkGHThAbWtzEiRkAY3%2BKqFBWKC9AJ2X7yCMfV92hInri8P%2Fw%2BqNJ3ORN7mLUg5HsPFIqqYW0EMLvz5MIGOqUBRAazJBq6CFG11%2Bni2X6zkRC2D6FU7U3N%2Fk7B7gCn%2FoRou3ua9GYDucyRG9wHVJahJy6XajfL2jgpRHHG9YXuFfGOshaFB1vDAxkpEqB2XtY3G39RZGLo2sPTBElq308f%2B9632R7Xs92HXHBZThMhxioT9dRepE1LLWFUn8v4nmpq2lMMZvEHKhxlquIm2AnY5qK5ZTHGEx3SbgHCGnudHIcEtKey&X-Amz-Signature=863bd2a0e4d6455e949be180ea22723517411b7e00f1498f13c32552a0e21d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
