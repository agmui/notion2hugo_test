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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BMXPKVE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCKrMyvm2ApvAdlkxQ2ST7lPAJHdUVO2GamIZdsKBg%2FbQIgMdC9w4499c0DIjnCEnxUzXK0hBQ4gGv%2FZXlLtLnBtD0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA25BhecL111hJGcfircA3L6YusPm2eO0lMMxK%2BAAs9KtAawWe%2FXhzB5BG5o%2BMe5wCp5OL11HriXh13b3P%2FiZOPkz3zvZ47MCS6PaKTS%2F1IFoDOyoauMDtJbxtVCNZayu2AaaWtKM0vAYIXteNetFBjil412PJN%2FKmx0g%2Bu%2FvHJ4WufGcZnYGklR2DNXCJnrNSUIEh0lTt8z2ucuwrIVb7NEtxI8u2uEQHNDbBxjkLtUZ6bRNVpTlcD2CSd7LJtBJz3kzYmPBQyaKf9acMqfNlXm97SZYN3ujZPEphGOQdmas7ze8%2F1gk16qG9pcHeoSj9p5j%2F2TlNuTTQ%2F%2BHtS9%2BIFc2GNhrmyELx4wJLnqvAur8TRYwWhY2DpLsExY38savzRt5X9bnh8xzC7a6hr6pAOZSr10pgduGO%2FZ2o3JNTeccSYsXJBXumLLHZ5y0tAr7iKMXLLN1gvzXeCDL4XvFVQV5KcASijVjnrVqJJx%2FBhLSk%2B18YVrV%2FfVOrRnWxmyHDZvqwQ89AZPJoPlmEEcvQM%2BT4pDeX9v2juyFCw%2Bk1g5lj4NCqg6pHIiZvgqMIcfZciKvGorNw%2BdU1Fj%2FDi34lBS1GyoyP6HhSUTKtWoZzb%2BRBpvfzwIB2JxHeux7TPYniX4FKH13DQgEDs1MIzX5b4GOqUBJaCsZbKWzxrjzGc4dc2kHKE83wDUCugVMISSJ4huTXiizXkDgfn5q5fi%2BcO3SWV4SGeAXwksushaS%2FXXeKH%2BUbE6aQeGxFa%2FvgOzYTi21iqU9chgVWAGVEIqYL6MxRmVr2uqrQRLTZ2JTtM2mah%2BkCPURsNf%2B%2Bj%2B%2FHA8A%2B46RwrDW0b4fYCkrgPf%2FnnIGcZTGaReHloYyXTnXwpibI8OyXn5eOui&X-Amz-Signature=0f7ad9912e094140949ed1502a87bce71216ad90f2a089311135ff567fcb6660&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BMXPKVE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCKrMyvm2ApvAdlkxQ2ST7lPAJHdUVO2GamIZdsKBg%2FbQIgMdC9w4499c0DIjnCEnxUzXK0hBQ4gGv%2FZXlLtLnBtD0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA25BhecL111hJGcfircA3L6YusPm2eO0lMMxK%2BAAs9KtAawWe%2FXhzB5BG5o%2BMe5wCp5OL11HriXh13b3P%2FiZOPkz3zvZ47MCS6PaKTS%2F1IFoDOyoauMDtJbxtVCNZayu2AaaWtKM0vAYIXteNetFBjil412PJN%2FKmx0g%2Bu%2FvHJ4WufGcZnYGklR2DNXCJnrNSUIEh0lTt8z2ucuwrIVb7NEtxI8u2uEQHNDbBxjkLtUZ6bRNVpTlcD2CSd7LJtBJz3kzYmPBQyaKf9acMqfNlXm97SZYN3ujZPEphGOQdmas7ze8%2F1gk16qG9pcHeoSj9p5j%2F2TlNuTTQ%2F%2BHtS9%2BIFc2GNhrmyELx4wJLnqvAur8TRYwWhY2DpLsExY38savzRt5X9bnh8xzC7a6hr6pAOZSr10pgduGO%2FZ2o3JNTeccSYsXJBXumLLHZ5y0tAr7iKMXLLN1gvzXeCDL4XvFVQV5KcASijVjnrVqJJx%2FBhLSk%2B18YVrV%2FfVOrRnWxmyHDZvqwQ89AZPJoPlmEEcvQM%2BT4pDeX9v2juyFCw%2Bk1g5lj4NCqg6pHIiZvgqMIcfZciKvGorNw%2BdU1Fj%2FDi34lBS1GyoyP6HhSUTKtWoZzb%2BRBpvfzwIB2JxHeux7TPYniX4FKH13DQgEDs1MIzX5b4GOqUBJaCsZbKWzxrjzGc4dc2kHKE83wDUCugVMISSJ4huTXiizXkDgfn5q5fi%2BcO3SWV4SGeAXwksushaS%2FXXeKH%2BUbE6aQeGxFa%2FvgOzYTi21iqU9chgVWAGVEIqYL6MxRmVr2uqrQRLTZ2JTtM2mah%2BkCPURsNf%2B%2Bj%2B%2FHA8A%2B46RwrDW0b4fYCkrgPf%2FnnIGcZTGaReHloYyXTnXwpibI8OyXn5eOui&X-Amz-Signature=116112443efd9948838610ce7b7092843b29e26e43f196d3061dc2be1a52e595&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
