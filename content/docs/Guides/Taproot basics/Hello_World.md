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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHLXCXV%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FU%2FlyETqKN%2F8WtM12EW0vC75SGxyjz73x7rvCUksb3AiEAume3RYdJGa6JH2GNnMjGrRP%2BELBQFRONrEqwbVW4n4oq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAesiepZKu1zjTTatCrcAzQak8hiiz18yA4R%2BJtMTgp11WZWcF59LqiRBsWn17swEBnn6%2BXn6o5UUOspEc77WexHNPFYnYka56fUIgUSIIiP6UPyryKlpM62onT5U0yYTxYl2WnVvyaMJFLh5EYjzweMETzzUHcbqhw5wnYZwLm4gYUVPrTsMwzhaZ5jB09RLpQdY0CJrLubikV%2B3PL2CpduDz0uDxiSmv9n2oZMCKShRpwCPlNy53W6K8DFTC90pOcL8%2FPqqOn0GKa6HZ3xkRAnGqfVu9YGfbX%2FThHggUDQy7z%2FJrxzoiBUP3YcI9HPLjavx7KVy6P3Vv1jbWfQR4tku1gOi%2BdY7duqUsihgYFcOQPSjyFrYN%2FJl6bakWNCvZ6KzlfiFbWVcH1ow7Gr7E5dg3VqolgCMR8C4%2BWdl34fmjvfjoCcJhfbdTZCUNIqTZrO2vgCGYCup3bFLt%2BjSuMJogcXJUaCvsCkx8NNtAkK5oVCrTEFtHP120XnPF2VcB%2B0MfDyGvWBzWV3C%2BO45YwVc0Skm7M0CkhKRVuAtGgTGiDwq8oyu4ZcjR%2FAdJWLg32UJBx70d1M3n10QLMJ1u3RaViEoDxpDKRmsdavtqXF9JNcatx%2F7mJ%2FM0jD2zhKByaVNg4pc9dOzJXTMKKptscGOqUButhXjipco%2FHQGAADEnV2iXdbC87BhjiC6AUZecQsc%2BDQ2Ieueo6Rw8bkjw0V4KKNIJJH9iNoQ%2BKrFaCROfccD9ZR6Mw7HIuKI%2Fk2kMt4OgcXdBJuDPuV%2FCwK5IwT5k8rCNKJY1qXNESXLFH1ALORKWfUCYC%2B7m2OHVxb8QtuGu4ZEuy73dUYHBXIuqlQIu2Scon7ktpAtH0gJTihaTHPb6Pcn5pi&X-Amz-Signature=5ddf8611a17288c2926a03b2854076413819bc4f741da903d2519b75e7dea58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHLXCXV%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FU%2FlyETqKN%2F8WtM12EW0vC75SGxyjz73x7rvCUksb3AiEAume3RYdJGa6JH2GNnMjGrRP%2BELBQFRONrEqwbVW4n4oq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAesiepZKu1zjTTatCrcAzQak8hiiz18yA4R%2BJtMTgp11WZWcF59LqiRBsWn17swEBnn6%2BXn6o5UUOspEc77WexHNPFYnYka56fUIgUSIIiP6UPyryKlpM62onT5U0yYTxYl2WnVvyaMJFLh5EYjzweMETzzUHcbqhw5wnYZwLm4gYUVPrTsMwzhaZ5jB09RLpQdY0CJrLubikV%2B3PL2CpduDz0uDxiSmv9n2oZMCKShRpwCPlNy53W6K8DFTC90pOcL8%2FPqqOn0GKa6HZ3xkRAnGqfVu9YGfbX%2FThHggUDQy7z%2FJrxzoiBUP3YcI9HPLjavx7KVy6P3Vv1jbWfQR4tku1gOi%2BdY7duqUsihgYFcOQPSjyFrYN%2FJl6bakWNCvZ6KzlfiFbWVcH1ow7Gr7E5dg3VqolgCMR8C4%2BWdl34fmjvfjoCcJhfbdTZCUNIqTZrO2vgCGYCup3bFLt%2BjSuMJogcXJUaCvsCkx8NNtAkK5oVCrTEFtHP120XnPF2VcB%2B0MfDyGvWBzWV3C%2BO45YwVc0Skm7M0CkhKRVuAtGgTGiDwq8oyu4ZcjR%2FAdJWLg32UJBx70d1M3n10QLMJ1u3RaViEoDxpDKRmsdavtqXF9JNcatx%2F7mJ%2FM0jD2zhKByaVNg4pc9dOzJXTMKKptscGOqUButhXjipco%2FHQGAADEnV2iXdbC87BhjiC6AUZecQsc%2BDQ2Ieueo6Rw8bkjw0V4KKNIJJH9iNoQ%2BKrFaCROfccD9ZR6Mw7HIuKI%2Fk2kMt4OgcXdBJuDPuV%2FCwK5IwT5k8rCNKJY1qXNESXLFH1ALORKWfUCYC%2B7m2OHVxb8QtuGu4ZEuy73dUYHBXIuqlQIu2Scon7ktpAtH0gJTihaTHPb6Pcn5pi&X-Amz-Signature=27b72ed6c6a72c4b8c1858578c34ad5733a2d24ecf2b58d51596eddcfe906593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
