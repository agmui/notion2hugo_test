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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MG7ZLDE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZXzJzzo7nPdbRb7YBwQ8%2B2ETBW7kIo0CFX33RMiCleQIgMuAi4UVGLYoOsUE5MgtfDd5SVmJbCXsGtA7iZMyRD%2FkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYZXVW0mhuWnCKFDSrcA9ODkhJgecI1cC6wzTOUORQ8GpnLFdSYJFymCMe3VFI7PqMw1b2jecEQFOWTfeRYtHO%2FJerGX21eeX%2BVe1K5dnydozUz22nuZjr3SHH4O5KOm1%2FMJQlun%2Bw0QTWz%2B3tvpiX93%2FHohKBsy8tQ43x8W%2Bgz1U%2FaMhI1VgjodrL1TIs6wBtQxs6sSg0NaOR0VhrEDUXpf8k%2FZ1cku2p4iKJe0iBIal%2BREV%2BDQmg2zncfzP%2F9n7UHSP0wTKZaX%2FJYBkmc3tu8dHyOwt5lZFokGxqWs9hl0JcWw1AaBx0rzSLh0904Jx06HRkO0uac1OoRI7h%2FYKSzxSmPwRMxk0E2gBg3pfvHL33EaRdgUa9SmpNT5fB7EevEkCrc1tuaSZ9JNQSWvzCPUKQRBNajVnVCH7btxvURRTDkcW7N1giau2x4welKHUbya2heom8TvwC8gBgONIkj5VgL30TGu3jHtSHSeyTBie6ocw2sAHmaJHGv86PE584AWEKH7hhtMzEm110HQGezdgLAzemvOg0UAcqnxoBZmyzHbxvIT3crec0cBblpYuRnKNOd71HtGnnZq5jaUCnBAAgHN603CmcMM8BksNPurl57JL5IgdTXAaBxv6rbUQp4rRJDLzuiPxBAMOahtMQGOqUBn2K1nlTj%2BSqGyqGSUbs1oafb1ENMdCtAZR8wr7fulAHujrQY7rSYX1MhwSOMkgvce3RXOECao954Q%2FjZ33AfbkB1EmpgU4ZC6WTYYp3ycXz9IqkTXpDAC2ny3AQu9zM%2FnJfmZmOpF1%2FUN0AqOE4pj5TtG9vDsUCzkzfXXwVPQsBWTCvYzNFc2cuyGg2yI9o7EU9mw060Rw1Du45mcmSMM4uUhf5U&X-Amz-Signature=421b676a27f2f93bb2001349b01ce6e335fb57f68675b42a805e721a63df839d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MG7ZLDE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZXzJzzo7nPdbRb7YBwQ8%2B2ETBW7kIo0CFX33RMiCleQIgMuAi4UVGLYoOsUE5MgtfDd5SVmJbCXsGtA7iZMyRD%2FkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYZXVW0mhuWnCKFDSrcA9ODkhJgecI1cC6wzTOUORQ8GpnLFdSYJFymCMe3VFI7PqMw1b2jecEQFOWTfeRYtHO%2FJerGX21eeX%2BVe1K5dnydozUz22nuZjr3SHH4O5KOm1%2FMJQlun%2Bw0QTWz%2B3tvpiX93%2FHohKBsy8tQ43x8W%2Bgz1U%2FaMhI1VgjodrL1TIs6wBtQxs6sSg0NaOR0VhrEDUXpf8k%2FZ1cku2p4iKJe0iBIal%2BREV%2BDQmg2zncfzP%2F9n7UHSP0wTKZaX%2FJYBkmc3tu8dHyOwt5lZFokGxqWs9hl0JcWw1AaBx0rzSLh0904Jx06HRkO0uac1OoRI7h%2FYKSzxSmPwRMxk0E2gBg3pfvHL33EaRdgUa9SmpNT5fB7EevEkCrc1tuaSZ9JNQSWvzCPUKQRBNajVnVCH7btxvURRTDkcW7N1giau2x4welKHUbya2heom8TvwC8gBgONIkj5VgL30TGu3jHtSHSeyTBie6ocw2sAHmaJHGv86PE584AWEKH7hhtMzEm110HQGezdgLAzemvOg0UAcqnxoBZmyzHbxvIT3crec0cBblpYuRnKNOd71HtGnnZq5jaUCnBAAgHN603CmcMM8BksNPurl57JL5IgdTXAaBxv6rbUQp4rRJDLzuiPxBAMOahtMQGOqUBn2K1nlTj%2BSqGyqGSUbs1oafb1ENMdCtAZR8wr7fulAHujrQY7rSYX1MhwSOMkgvce3RXOECao954Q%2FjZ33AfbkB1EmpgU4ZC6WTYYp3ycXz9IqkTXpDAC2ny3AQu9zM%2FnJfmZmOpF1%2FUN0AqOE4pj5TtG9vDsUCzkzfXXwVPQsBWTCvYzNFc2cuyGg2yI9o7EU9mw060Rw1Du45mcmSMM4uUhf5U&X-Amz-Signature=ca6c1e9086ec7eeb4809715e6f621a3e4fccf4cdedc3934bb64eca7d20313b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
