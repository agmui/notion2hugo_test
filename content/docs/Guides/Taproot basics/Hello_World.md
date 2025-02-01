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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWKCK4LE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkvcaPG8LTxXdHIx4Y8GEOEzZq6q9ypIGv39Xng7HPWAiEA%2FqOL%2BGAHfgqOS7uj8dblSfmdzcKo2rk3Wo9h0ZDnC94qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Xbo5nF38wIyJ2gyrcA6QrdMCToNjJ8q5dW17K1jvXsbQxk03ff3DwUzm5TPjNn9r8EcI2obgld2p9KRXk8aw8GCM7GnDWqLWJCQuah3S%2FXQaE7yVqymOl2uZfffoi5R8VJLd0Qwusji40Wkr7QWUgocE7DhbjLB6zC0F8FptatW3Qli4w%2BsHlghyGz9Wa8Y0JdJFnvWRMk78PWBiSQUU2KXdpLWMYyW%2BXA1L4ZSSHxYAw3kpsRxEbGFnt72Scz0docbcxuwx9tlYkegOr%2BtS%2B%2BBV2h8JLeFDuKOTIa40pi0CIpYBCgZ%2FyLC%2FjYy%2FuFZDZedJPSwESr%2BMKA6nw83Ilem7DVQWca2k3qcVgb3rp9yFy2RAgTCfIGdTwLOkpL1M395cgAY1aUQ7VVI5XcmMK0uKb3Ayy%2BclEfZ51a%2FbEODDDgHlU7xVVAFbyx0EDzNhQnFf1MviSwyiO%2BmJWmobneDIik1v93e8BtnvZvU4dZBtrS03BdhRdSaOudJL25%2F4uA7ZObaf7UCwSik8yoj9HyPoJtBl5Idpo8WccLDWid44Wnx0PXBlwiTj1ifjJMH6ddThaAjj4Ai2OUcgzjz%2B13Fq2ZGy8TLI3ZbQBUxqzGOsoSRDpe4ggMJrqUZuyzpKok1fqFq2uN4oeMJOm97wGOqUBWoTC4Y9wgsZ2JKsC0ZqKm2wKDW6cSgAswrph02SM2uuoIxJEBrhD4jG2Nqb3ZGkafPwjrmK56FCIhCWUfdDCYLKLZ593szevOc9S4BdFjfHjEP%2BOdZe1YJkNAKEXb738FLRMfcInogpQtn%2FKdi%2FiVqx4wL0DHl1YcUAyeg%2BXKPIOmi%2B1OgCBHp99wCWK2exhiNOtwolgcRhHGVgLwSAWkJnFkAcb&X-Amz-Signature=00658064c00a17146ab37fac6f300378ee3163882bf5bdec533798437c23b49d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWKCK4LE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkvcaPG8LTxXdHIx4Y8GEOEzZq6q9ypIGv39Xng7HPWAiEA%2FqOL%2BGAHfgqOS7uj8dblSfmdzcKo2rk3Wo9h0ZDnC94qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Xbo5nF38wIyJ2gyrcA6QrdMCToNjJ8q5dW17K1jvXsbQxk03ff3DwUzm5TPjNn9r8EcI2obgld2p9KRXk8aw8GCM7GnDWqLWJCQuah3S%2FXQaE7yVqymOl2uZfffoi5R8VJLd0Qwusji40Wkr7QWUgocE7DhbjLB6zC0F8FptatW3Qli4w%2BsHlghyGz9Wa8Y0JdJFnvWRMk78PWBiSQUU2KXdpLWMYyW%2BXA1L4ZSSHxYAw3kpsRxEbGFnt72Scz0docbcxuwx9tlYkegOr%2BtS%2B%2BBV2h8JLeFDuKOTIa40pi0CIpYBCgZ%2FyLC%2FjYy%2FuFZDZedJPSwESr%2BMKA6nw83Ilem7DVQWca2k3qcVgb3rp9yFy2RAgTCfIGdTwLOkpL1M395cgAY1aUQ7VVI5XcmMK0uKb3Ayy%2BclEfZ51a%2FbEODDDgHlU7xVVAFbyx0EDzNhQnFf1MviSwyiO%2BmJWmobneDIik1v93e8BtnvZvU4dZBtrS03BdhRdSaOudJL25%2F4uA7ZObaf7UCwSik8yoj9HyPoJtBl5Idpo8WccLDWid44Wnx0PXBlwiTj1ifjJMH6ddThaAjj4Ai2OUcgzjz%2B13Fq2ZGy8TLI3ZbQBUxqzGOsoSRDpe4ggMJrqUZuyzpKok1fqFq2uN4oeMJOm97wGOqUBWoTC4Y9wgsZ2JKsC0ZqKm2wKDW6cSgAswrph02SM2uuoIxJEBrhD4jG2Nqb3ZGkafPwjrmK56FCIhCWUfdDCYLKLZ593szevOc9S4BdFjfHjEP%2BOdZe1YJkNAKEXb738FLRMfcInogpQtn%2FKdi%2FiVqx4wL0DHl1YcUAyeg%2BXKPIOmi%2B1OgCBHp99wCWK2exhiNOtwolgcRhHGVgLwSAWkJnFkAcb&X-Amz-Signature=25d78e3512c6967e7a3e0fe735f67d772296b92cb48496975d512be8c44e3f37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
