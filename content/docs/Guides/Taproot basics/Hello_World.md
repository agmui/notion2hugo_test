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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BYARJ6A%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS%2FLXm%2BM521F8TXqDJzbJDhDKT%2FCjsO2qzFIO5ofnrpwIgKBWzjZxAnvV36ULp7IiHpQlERHKvsDmI16sEvPOLciYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgynBFboaZ%2FDY%2FZPCrcA2J9pQdsO%2FUKdSFIzg5KjUUKINt3OxpL7KrtBrBX%2F3zp2t7laP1lK9m4%2B5%2BlB6g0H0Az7KcwpFcmw6MUuuEKTSdWaS5qx4ZHPKskEap5onrFycCdZBAJVb6OG2BOTrpMzGgxVWh4hoBu3EoER0jbUYnG0bKtRkWv4w2gO%2BQ3Gamj1nA%2FgvnkBoogGvTSiK%2Fx5sR8jwpVTynaXrC%2BZaGVQZjyS5m0CjqY59mzW7WisyHAR5flvmMFHwHU7zbkh%2BREIzLuksshJA7rmS0GykimlmHn9UgAnCeVhkD0JT%2B0%2BDBScYLFIP%2FIogpHpCxnBOJwEDKhy%2BfuCaEYHgjGRFOKS4FwMnmeUZKinplU8sq5k%2BQHUWahseFzJ7vFkti6PuT90fm6l4md1DC378f3wyQzl0GsyqpIp52BR0ztDRhQp3iPKhIRprGaURMkXtR0Do9v4B3aB1L8qt1DN7Iy6CMnPdSXwaXGiBzlbvXCQ6L2IArExqW4mpz0He734U9kzGa1XIt8CdBW7IH50cZoSZYDx0ryLBugwniDzTWelv043s68GOrH34z3gFFXt1kVIx%2BBnqkQeSXRp0QmT%2F9hFO2VAz%2BNfu%2BnZHKHSsFaAoS7DUlfaXyp0stNWw6NaxaIMIj%2Bhb8GOqUBgkhDIq2blOM1O52XmvegRUCuEqKX72MBxqUBdlDCR73acC2uafxxIC2zMYJpCJ3Vnnu8sq9TiEC81oANfCC%2Bc3qe6lmBgCt6fJiZhottwn2ZezMeKlw%2F2MIiyBepCSDy8RaSIcEfqMwifkrzHc3tt%2FMl1naPrVqdpJxHRl5bsomAVaWQX1S0TNB%2Bev5ryYMsbljKGCXfNp4yC7nunbZ5vk4diT0e&X-Amz-Signature=b4575ef4e3cc51db7f4715dc49c52efaa35a52d7143aac7e76fcba38e47af9a3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BYARJ6A%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS%2FLXm%2BM521F8TXqDJzbJDhDKT%2FCjsO2qzFIO5ofnrpwIgKBWzjZxAnvV36ULp7IiHpQlERHKvsDmI16sEvPOLciYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgynBFboaZ%2FDY%2FZPCrcA2J9pQdsO%2FUKdSFIzg5KjUUKINt3OxpL7KrtBrBX%2F3zp2t7laP1lK9m4%2B5%2BlB6g0H0Az7KcwpFcmw6MUuuEKTSdWaS5qx4ZHPKskEap5onrFycCdZBAJVb6OG2BOTrpMzGgxVWh4hoBu3EoER0jbUYnG0bKtRkWv4w2gO%2BQ3Gamj1nA%2FgvnkBoogGvTSiK%2Fx5sR8jwpVTynaXrC%2BZaGVQZjyS5m0CjqY59mzW7WisyHAR5flvmMFHwHU7zbkh%2BREIzLuksshJA7rmS0GykimlmHn9UgAnCeVhkD0JT%2B0%2BDBScYLFIP%2FIogpHpCxnBOJwEDKhy%2BfuCaEYHgjGRFOKS4FwMnmeUZKinplU8sq5k%2BQHUWahseFzJ7vFkti6PuT90fm6l4md1DC378f3wyQzl0GsyqpIp52BR0ztDRhQp3iPKhIRprGaURMkXtR0Do9v4B3aB1L8qt1DN7Iy6CMnPdSXwaXGiBzlbvXCQ6L2IArExqW4mpz0He734U9kzGa1XIt8CdBW7IH50cZoSZYDx0ryLBugwniDzTWelv043s68GOrH34z3gFFXt1kVIx%2BBnqkQeSXRp0QmT%2F9hFO2VAz%2BNfu%2BnZHKHSsFaAoS7DUlfaXyp0stNWw6NaxaIMIj%2Bhb8GOqUBgkhDIq2blOM1O52XmvegRUCuEqKX72MBxqUBdlDCR73acC2uafxxIC2zMYJpCJ3Vnnu8sq9TiEC81oANfCC%2Bc3qe6lmBgCt6fJiZhottwn2ZezMeKlw%2F2MIiyBepCSDy8RaSIcEfqMwifkrzHc3tt%2FMl1naPrVqdpJxHRl5bsomAVaWQX1S0TNB%2Bev5ryYMsbljKGCXfNp4yC7nunbZ5vk4diT0e&X-Amz-Signature=ec7f529c068c67d7d078176f6899cf5e327e5302388c93ad8fca37ebdc7a50d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
