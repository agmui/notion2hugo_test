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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZLLHWU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCxfQhgO0MDRPip%2BHJ6ow%2FUWVe2bSaVKpEy6%2Bwakskc7AIgBW%2BENPfz3wchrsyXn8mBOofi5S4n06CJ1CPBuHI%2BePUqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMg12EeVWFk3EfE2cyrcA%2BdiToDhM8ODH5IbYIzLnR50IM56nZJSUIcsm62UtV6Mzy%2Ba3P7SOZ9GKFKmm8kpDkrjyZr0KEKL1xvpn5feePs4K1P9SIKpPBoowupHcjwcy5cqZIt8JXA%2FpPfUEgf6GWgQEu9dOPecK%2FQP2vT2uz8MiuerLcy4HGa9T1hx8lAO9uGu1S4GCuhaJzu930eaxWHsB9RjWu6q0bbiAPSWpNj4OMXnb28b2qITvBNqxwsAUYP8mgUijyO%2BZCMYV4e%2B5PkwbXFNhTmwDjQ5YuhgCDqSbCgC%2BEkdnAlZcC5zgUBgPGqhcMoqIiILDjZ5Ke%2FprkeeIsZsNDsOKvfZIxx3ajdcsgWwlgTuKFBewCtODVqC%2BXjtsgFMptIhPPKNQ%2BqvkDGOctsOUPwNFntQUMol3%2FvRr11S15w3xAqvHfaYWaX4SmebazTvL9gOZwtJNs7tG4l%2Bd3Jrb4ZaXfHU%2BCdGLBu5Q%2BVG%2BG1%2FrnCkI103EzwkOyMJG%2FeJ2p7OS57O835KgLBfTbbejFKud6uMxAPM740UmKcYjX8U0pPzFjMuXF9iGRfQXdqFougNPrvXXs2hJLP2fpLnRNU1Nw%2FD3wp1aGX1VeWYHvbSTWi9L7tQRBTB5lMGLT3uVZCFN5NGMK2Qh74GOqUBARJBSlT%2BP77PLpxqhiC3JktCvbDSo5Cw34QCv1fPhqY8PpNsMx42epjw0Abu8ONreJe%2BrDfXa9Owav%2Bwe3%2FoQduRFvwgXOsZKkGMSn0xBm01Y9bDsIuYMNvLDmyHfe2ZS9L39CTlNXbpY4MlVjJWK7yhKPXpkrdMFgMAaw0RyzBIPnQdv423ExzG0i%2BUXWw1BaK8LcbFMLnJJCIX%2BSA2KwArAfKK&X-Amz-Signature=35afe6fbb59742414055702d8e0858e893b767d4789e0f82c06273ce3e07e3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZLLHWU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCxfQhgO0MDRPip%2BHJ6ow%2FUWVe2bSaVKpEy6%2Bwakskc7AIgBW%2BENPfz3wchrsyXn8mBOofi5S4n06CJ1CPBuHI%2BePUqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMg12EeVWFk3EfE2cyrcA%2BdiToDhM8ODH5IbYIzLnR50IM56nZJSUIcsm62UtV6Mzy%2Ba3P7SOZ9GKFKmm8kpDkrjyZr0KEKL1xvpn5feePs4K1P9SIKpPBoowupHcjwcy5cqZIt8JXA%2FpPfUEgf6GWgQEu9dOPecK%2FQP2vT2uz8MiuerLcy4HGa9T1hx8lAO9uGu1S4GCuhaJzu930eaxWHsB9RjWu6q0bbiAPSWpNj4OMXnb28b2qITvBNqxwsAUYP8mgUijyO%2BZCMYV4e%2B5PkwbXFNhTmwDjQ5YuhgCDqSbCgC%2BEkdnAlZcC5zgUBgPGqhcMoqIiILDjZ5Ke%2FprkeeIsZsNDsOKvfZIxx3ajdcsgWwlgTuKFBewCtODVqC%2BXjtsgFMptIhPPKNQ%2BqvkDGOctsOUPwNFntQUMol3%2FvRr11S15w3xAqvHfaYWaX4SmebazTvL9gOZwtJNs7tG4l%2Bd3Jrb4ZaXfHU%2BCdGLBu5Q%2BVG%2BG1%2FrnCkI103EzwkOyMJG%2FeJ2p7OS57O835KgLBfTbbejFKud6uMxAPM740UmKcYjX8U0pPzFjMuXF9iGRfQXdqFougNPrvXXs2hJLP2fpLnRNU1Nw%2FD3wp1aGX1VeWYHvbSTWi9L7tQRBTB5lMGLT3uVZCFN5NGMK2Qh74GOqUBARJBSlT%2BP77PLpxqhiC3JktCvbDSo5Cw34QCv1fPhqY8PpNsMx42epjw0Abu8ONreJe%2BrDfXa9Owav%2Bwe3%2FoQduRFvwgXOsZKkGMSn0xBm01Y9bDsIuYMNvLDmyHfe2ZS9L39CTlNXbpY4MlVjJWK7yhKPXpkrdMFgMAaw0RyzBIPnQdv423ExzG0i%2BUXWw1BaK8LcbFMLnJJCIX%2BSA2KwArAfKK&X-Amz-Signature=caeb1e34c42ea8a4b876068f68f8b4a734f5359f8a3717b29df721f799636f28&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
