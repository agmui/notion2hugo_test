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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCF7EM5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIB4JsLA7BQ4ZEHd2yE5i1hwFCY1rK9zGlFdXJpx%2BQWl0AiAMz6z60BDb1tqXAcYM6Mt0%2BdC4x6FtK6Z2LlvBcUAdHyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC93nHudN2M0Y8STeKtwD60IkyWyRYBvv2WB3bS89k%2BbXxfOjRQTlQAAvemaU94GGPxWDEWlPAvp50szUa5PqiDUM%2Bdfz267ZcMIXYztbQ0Qary8RPhCuW12UeD2wlkQiqviHKKvIWFcy6e52ipfIgXTfbKW9XPE8KNkRdWlkYZ1VoMWglm55kyDblYHnYmkISegrKMiFdfMNqIDBWa3hV7NW4rG3IvAAWluNKKcxfbMFdFn13GRmzH%2B18r12UjoftDQwo%2BTq%2Fhy18DXQ5eIgs3X2PGP9v4BiI13WcTIojDydap1Pm4yXCq3cRmyiXWBR%2FUu6s9cZOZbKjRAp%2BKSX4In55%2FyIvo3%2FnL%2FOA5NJWtKOwfkBnn3Up9ZVIay%2BLy7mpmxgkbRPpdTiW56l1ZHtuvcccvih6HqCyVaMFcoqeGW568A5iMITR2Bc57TKy4LsAvQ82YG0lp2a3k9oYaA1xcFI32YY0wouI7XmSFy0NMHQwfIMGQiI%2F8FXaW0p024lmGQGxWhRj2sz6NF6xoqLapcpKx8cpujWV0J2t6b1e6yRZNSpIKECSKQwm6laTlWzh%2BLOtVDCF6ol5S9%2FqdaBEZbtA1nWfrwTvtttPlE49sZMyPYOA6CWZoH2Yeuij%2B8nliIgaKNuUoGg4zYw3oHvwQY6pgGW1%2FTWoxBNSFbFOki%2FeRljBn5I5lWRvsKLl8Kbh%2BqNc8hBer1rYoL3tc%2FAKbd7g8L4kBn6g0XioPyTUywgt1yfhhH2ZPA%2F5FxvRSodrLA6bWN122%2BqeHwBCdT76pv5bB6dYRxdMbKNDGkTGbZXJZt27DypZr1AXXwGEmLHs4SZwGn%2FYgcddKdYCRKKdHG6kom3AjDTpnlF18hE0w9dS%2FGbZEtHeBol&X-Amz-Signature=61eb9241c2ecd66c33b88f4c223f33e000e688f4afba3eeff1a147b1d3fa20be&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCF7EM5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIB4JsLA7BQ4ZEHd2yE5i1hwFCY1rK9zGlFdXJpx%2BQWl0AiAMz6z60BDb1tqXAcYM6Mt0%2BdC4x6FtK6Z2LlvBcUAdHyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC93nHudN2M0Y8STeKtwD60IkyWyRYBvv2WB3bS89k%2BbXxfOjRQTlQAAvemaU94GGPxWDEWlPAvp50szUa5PqiDUM%2Bdfz267ZcMIXYztbQ0Qary8RPhCuW12UeD2wlkQiqviHKKvIWFcy6e52ipfIgXTfbKW9XPE8KNkRdWlkYZ1VoMWglm55kyDblYHnYmkISegrKMiFdfMNqIDBWa3hV7NW4rG3IvAAWluNKKcxfbMFdFn13GRmzH%2B18r12UjoftDQwo%2BTq%2Fhy18DXQ5eIgs3X2PGP9v4BiI13WcTIojDydap1Pm4yXCq3cRmyiXWBR%2FUu6s9cZOZbKjRAp%2BKSX4In55%2FyIvo3%2FnL%2FOA5NJWtKOwfkBnn3Up9ZVIay%2BLy7mpmxgkbRPpdTiW56l1ZHtuvcccvih6HqCyVaMFcoqeGW568A5iMITR2Bc57TKy4LsAvQ82YG0lp2a3k9oYaA1xcFI32YY0wouI7XmSFy0NMHQwfIMGQiI%2F8FXaW0p024lmGQGxWhRj2sz6NF6xoqLapcpKx8cpujWV0J2t6b1e6yRZNSpIKECSKQwm6laTlWzh%2BLOtVDCF6ol5S9%2FqdaBEZbtA1nWfrwTvtttPlE49sZMyPYOA6CWZoH2Yeuij%2B8nliIgaKNuUoGg4zYw3oHvwQY6pgGW1%2FTWoxBNSFbFOki%2FeRljBn5I5lWRvsKLl8Kbh%2BqNc8hBer1rYoL3tc%2FAKbd7g8L4kBn6g0XioPyTUywgt1yfhhH2ZPA%2F5FxvRSodrLA6bWN122%2BqeHwBCdT76pv5bB6dYRxdMbKNDGkTGbZXJZt27DypZr1AXXwGEmLHs4SZwGn%2FYgcddKdYCRKKdHG6kom3AjDTpnlF18hE0w9dS%2FGbZEtHeBol&X-Amz-Signature=61a30e155a64b9e48765eb4274ae308092cd9f11a0bdefec36b7637f57378123&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
