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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJLKWQD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChXPH0hlkHjTQUiaMvd1c25KOHBNdGmhHTtcv%2BssovUAIgT7X2gEbTOlbci3Q16tt2%2Fbu%2FhGIaSi4plhVbC%2FWr2SkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkLNOZSHnKo8h%2FVRyrcA42r3r4RF1sez6IuRBKwyHA9RTFeroEv9ny%2FR6Q3cNrkB8OmD8wAU%2BoI4jsfiz4KRlejYxZ3aGbifGGOgDzMoaStvwW1M%2F0BSp%2BELYPLhCGB59W2kAU7%2FRVdiRMP%2BULrz6gXQ7FaIkv9uV%2FUDRVOZOL5zT1Pf8yCCy34bi99n2LKMcG4hPAl7%2B7RTt4dXYnG2KVVP%2F1BrdkZHEaN8Zf2thV%2BoPAO%2BeL%2BxbdS%2BIucrieJtHkJ6EYM0uOZU1qr7uHJErLs%2Fgfl2kib1%2FCnM7D7TL0pfkptQnPQShBY4RO2%2FzXlYOlAMxYwybcW6lzy4O4WvonHnDbCOEpNB%2BH%2FtiSJmn1EtT5aW%2BnLFxMcfhTSh4TwAvIt5TxrwXrlkOFLrkmEoUqC4oD14Rezvwq0mL%2FR80gPfeOtv5i7Z37b3VHRtgyxYWdk4r0hpasysl95ySQlBu%2F7u0gUm%2BWjGdzQohwEg3tRLkIPHETa4O56Q9Bvx8MvIi7duf2jVSmqzHIVCGg4VuDNplSTQIKxis%2BKGwAHhN8qQ4RKL0QRg8RSDG%2FBx74KezfWf1PJhefvWY3P2RAhOyMXQWfCSWTtugmE49HgMzMYjZnZhAzM%2BksHCClxXa9%2Bn%2FpzXrEyGKa0BHI%2BMKi1k8MGOqUBn%2B8u4nXJhSMFcLt2w9irXV%2F%2FJbmrWqkjq6AcxiyElqw5dww21jRn0MGMLiAvasjgf3Bkoe7010OKTYSHNx2TcAhU5X29GoJ9%2FVGqRk2BonRNTAgj%2BqB0b%2BXPHW4kvfTgpXd7Zigs2JLSEnPlIDd0TB903R%2FYV3y6gP8rZ3KP%2BdnpDEL4Jw0BkJFXFJQN7isJAfXdwnmaw4KDCLf9jiBmLsn898lH&X-Amz-Signature=0b34d86558bfc8073cc27888535e1eb9cd598c47295051bab1f8420d399e2d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJLKWQD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChXPH0hlkHjTQUiaMvd1c25KOHBNdGmhHTtcv%2BssovUAIgT7X2gEbTOlbci3Q16tt2%2Fbu%2FhGIaSi4plhVbC%2FWr2SkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkLNOZSHnKo8h%2FVRyrcA42r3r4RF1sez6IuRBKwyHA9RTFeroEv9ny%2FR6Q3cNrkB8OmD8wAU%2BoI4jsfiz4KRlejYxZ3aGbifGGOgDzMoaStvwW1M%2F0BSp%2BELYPLhCGB59W2kAU7%2FRVdiRMP%2BULrz6gXQ7FaIkv9uV%2FUDRVOZOL5zT1Pf8yCCy34bi99n2LKMcG4hPAl7%2B7RTt4dXYnG2KVVP%2F1BrdkZHEaN8Zf2thV%2BoPAO%2BeL%2BxbdS%2BIucrieJtHkJ6EYM0uOZU1qr7uHJErLs%2Fgfl2kib1%2FCnM7D7TL0pfkptQnPQShBY4RO2%2FzXlYOlAMxYwybcW6lzy4O4WvonHnDbCOEpNB%2BH%2FtiSJmn1EtT5aW%2BnLFxMcfhTSh4TwAvIt5TxrwXrlkOFLrkmEoUqC4oD14Rezvwq0mL%2FR80gPfeOtv5i7Z37b3VHRtgyxYWdk4r0hpasysl95ySQlBu%2F7u0gUm%2BWjGdzQohwEg3tRLkIPHETa4O56Q9Bvx8MvIi7duf2jVSmqzHIVCGg4VuDNplSTQIKxis%2BKGwAHhN8qQ4RKL0QRg8RSDG%2FBx74KezfWf1PJhefvWY3P2RAhOyMXQWfCSWTtugmE49HgMzMYjZnZhAzM%2BksHCClxXa9%2Bn%2FpzXrEyGKa0BHI%2BMKi1k8MGOqUBn%2B8u4nXJhSMFcLt2w9irXV%2F%2FJbmrWqkjq6AcxiyElqw5dww21jRn0MGMLiAvasjgf3Bkoe7010OKTYSHNx2TcAhU5X29GoJ9%2FVGqRk2BonRNTAgj%2BqB0b%2BXPHW4kvfTgpXd7Zigs2JLSEnPlIDd0TB903R%2FYV3y6gP8rZ3KP%2BdnpDEL4Jw0BkJFXFJQN7isJAfXdwnmaw4KDCLf9jiBmLsn898lH&X-Amz-Signature=6ecc1e00aeed16107b7f0a6792657c373f5db3199210e0ed36bf5f1da010333e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
