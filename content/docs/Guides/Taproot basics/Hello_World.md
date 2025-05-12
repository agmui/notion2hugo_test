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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5ZAKFQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD%2BJaL1buP9ck5%2BduKebegQsuX8TYUz6Y0kWSlQNaFWYwIgCSwM2DmSN2P3ALCIQe1MZW6RXE%2BquT6gj5bBFNS6GFwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC08wWd5sUaXK8NB5CrcA%2FvEVRVS8WEnpmiDKWJ73Q%2BXEvf%2Bz7dsSmnT6gYv%2B6GsIHXmSyPZ5uBYbr4esuQMygVfxK7z4y%2B46cZR5ozigQdKOf3JA5TKtCpGAo4CwtuFoBhSrb0vQd9j5LjM3i3gdE%2BBADddJYQ1pvxXQDNlaZK2fK%2BMuHASBoMa60pESkKuUgBGTftRYA%2BmPVqxdzpxX%2F%2BX5x3%2BsafqGXmdWi3pqoe6wWhwAF3kg1T673gg5KazVoFpAwmman2UYqzAxmffWtZvBQzObfDoP8n1EIrgRYuV7621vVaegaLZiPsVN9j0MxrZdNhI6VO0175j5va8Txcd5zN6Ihvk2TRwMuQwz%2FEI9MFprDuYq1323gqz96EVoiTSIdCQJNAb%2FjEjXNBiCQz8B9FQ4eUCQQBdZgB%2FZKb7aSU2JjJ9KsMWugLHrG4CsAt9ZVoMOCtVaPItI7Qh%2BbOc0J5mlCB%2BRX8pLju3uNvDoZsdtuf15DIUmqfozm%2FkB5973PI1lHN0jJvTHSgzUioeYBUH1QNF3%2BupuQ%2BPnpxiLaD8JL6L%2F9pqC2Mj0n4bwJIWBzJwE06BSNkf64Mv0YsL%2FgIl8nv3%2BEU54FMdWHclx4zzaIEp2kWdXSOXusKTCIZvuaqWT5ZFocLUMO%2F1iMEGOqUBqrpwK7jAfh3W5ZvujSCB7nuX%2BARwNe2hWEnj9tYDiVSGu3B2w1j%2F%2FUBPnOm28F2fMM5QBI6suSdvXoysXYJVt%2BYcOQ9NddIEg6gAzJTRFgmZkz%2Fz%2B01dQ8Al9NhHMFVcu%2FblF%2F4p5e3dqiP8DzdGoGWmwwc1rHuNpnK1Pu46jofiWAVcqapMJwP%2BPfVOseH%2Fifh2O3fZWsCqu8DHaoUj4hxMjgjX&X-Amz-Signature=98f4f82d4c70c8cf3089df18c4ad6f47b35f9847d03f761e7d8951a57ef4dc41&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5ZAKFQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD%2BJaL1buP9ck5%2BduKebegQsuX8TYUz6Y0kWSlQNaFWYwIgCSwM2DmSN2P3ALCIQe1MZW6RXE%2BquT6gj5bBFNS6GFwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC08wWd5sUaXK8NB5CrcA%2FvEVRVS8WEnpmiDKWJ73Q%2BXEvf%2Bz7dsSmnT6gYv%2B6GsIHXmSyPZ5uBYbr4esuQMygVfxK7z4y%2B46cZR5ozigQdKOf3JA5TKtCpGAo4CwtuFoBhSrb0vQd9j5LjM3i3gdE%2BBADddJYQ1pvxXQDNlaZK2fK%2BMuHASBoMa60pESkKuUgBGTftRYA%2BmPVqxdzpxX%2F%2BX5x3%2BsafqGXmdWi3pqoe6wWhwAF3kg1T673gg5KazVoFpAwmman2UYqzAxmffWtZvBQzObfDoP8n1EIrgRYuV7621vVaegaLZiPsVN9j0MxrZdNhI6VO0175j5va8Txcd5zN6Ihvk2TRwMuQwz%2FEI9MFprDuYq1323gqz96EVoiTSIdCQJNAb%2FjEjXNBiCQz8B9FQ4eUCQQBdZgB%2FZKb7aSU2JjJ9KsMWugLHrG4CsAt9ZVoMOCtVaPItI7Qh%2BbOc0J5mlCB%2BRX8pLju3uNvDoZsdtuf15DIUmqfozm%2FkB5973PI1lHN0jJvTHSgzUioeYBUH1QNF3%2BupuQ%2BPnpxiLaD8JL6L%2F9pqC2Mj0n4bwJIWBzJwE06BSNkf64Mv0YsL%2FgIl8nv3%2BEU54FMdWHclx4zzaIEp2kWdXSOXusKTCIZvuaqWT5ZFocLUMO%2F1iMEGOqUBqrpwK7jAfh3W5ZvujSCB7nuX%2BARwNe2hWEnj9tYDiVSGu3B2w1j%2F%2FUBPnOm28F2fMM5QBI6suSdvXoysXYJVt%2BYcOQ9NddIEg6gAzJTRFgmZkz%2Fz%2B01dQ8Al9NhHMFVcu%2FblF%2F4p5e3dqiP8DzdGoGWmwwc1rHuNpnK1Pu46jofiWAVcqapMJwP%2BPfVOseH%2Fifh2O3fZWsCqu8DHaoUj4hxMjgjX&X-Amz-Signature=f20a80e4fc6247587f12ecf63ac2f51bd2d79cac2ef17a73cbe84c474eae5e26&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
