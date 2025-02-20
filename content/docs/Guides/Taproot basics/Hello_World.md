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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2QIXAP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3RmIYfjhtTGJ17I2k4hptKPvgO9QsFAJA0kSA3ri2IAiEAx0NLjZPIGDwSYa%2BhCyrKP7CvDw8ELYHTdg6XmepfXkwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrTorMc7tQsg7lCPCrcA0cC1SBisS0EOthlc1%2FWbuRPt74bwIXdm1WilVKqwMXkfiSk%2BlKCVnc2MJsWgodp4J%2BB0jubbxrS8U87XnOly4es%2FoIWMcOCZUtpGB5axzv%2Fd9Fg4L8rRdYFicQ6MajqBtEiLebO3dsRAxYpWYfRQTxBAoowEAs6HTmWn24w1mJJzj5isrh0vJ8IDDBZkBQE7%2BSYGNUKPmAxcl1zxszFyUlRgF%2FK3wXb41N45x6DbPSb%2F0kGjpdRPpr%2Bd2sTo7nxB4MvuaxWY4cugRUG28P2zVKsgG0zbKN670FTuOmZIYlMjf8rnmuZnaZmZTYtRUX7w9zdS7D382ru123Kk2cDuGUVbjP5gOFUC2fbxZoSJQq99p0pQCu1rVOhHjNJ7QSRpPt3ysOkt3QLZfup0rT7VLgId4VhVpX0n25QFNE%2BvdPwqx1m0oaQayWjdoC3453jc3VkWnnIeSGdq0QJ3Ux2lLwdKFhvlF7ZJ%2BZyriBuAZKmi7ajVQp6n%2FWDnzfkWJGoMxT7F9SNGseD%2FNGyZjOnuLF9S9qd02ZzlhCXML9GPZrfIVJ1wzhaTQH3PuKnmsd4Hx%2FccNrb7I8C7ApmSUDOyU%2Ffi8eL0n9JWYgFdPulilZUFHZkUpg8psZDxvJ5MMON3r0GOqUBppT8pixMZUL5O6AcNQvQcnacgSRBqDInBlCtzWD%2Bc8ueQf14YY4hi1JKiDG1kq8GKYW9oWPQhTDaM30jr2Xjjd2QERxHBByMvHN1OL64v3Feximq8cS5NCmk4926c6989mtJvVmUryuIBMFzKW0lxC6fH6FRCIzF3uCOghsF5b7fdeQXj%2B%2Bt%2FF9wFkym5WzEgDtXkJuov1AvRwmIgmxaKM4h6ajG&X-Amz-Signature=d049268915f4b17622f290a3736e9ae981c0a966ff406a69310080325a70160e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2QIXAP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3RmIYfjhtTGJ17I2k4hptKPvgO9QsFAJA0kSA3ri2IAiEAx0NLjZPIGDwSYa%2BhCyrKP7CvDw8ELYHTdg6XmepfXkwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrTorMc7tQsg7lCPCrcA0cC1SBisS0EOthlc1%2FWbuRPt74bwIXdm1WilVKqwMXkfiSk%2BlKCVnc2MJsWgodp4J%2BB0jubbxrS8U87XnOly4es%2FoIWMcOCZUtpGB5axzv%2Fd9Fg4L8rRdYFicQ6MajqBtEiLebO3dsRAxYpWYfRQTxBAoowEAs6HTmWn24w1mJJzj5isrh0vJ8IDDBZkBQE7%2BSYGNUKPmAxcl1zxszFyUlRgF%2FK3wXb41N45x6DbPSb%2F0kGjpdRPpr%2Bd2sTo7nxB4MvuaxWY4cugRUG28P2zVKsgG0zbKN670FTuOmZIYlMjf8rnmuZnaZmZTYtRUX7w9zdS7D382ru123Kk2cDuGUVbjP5gOFUC2fbxZoSJQq99p0pQCu1rVOhHjNJ7QSRpPt3ysOkt3QLZfup0rT7VLgId4VhVpX0n25QFNE%2BvdPwqx1m0oaQayWjdoC3453jc3VkWnnIeSGdq0QJ3Ux2lLwdKFhvlF7ZJ%2BZyriBuAZKmi7ajVQp6n%2FWDnzfkWJGoMxT7F9SNGseD%2FNGyZjOnuLF9S9qd02ZzlhCXML9GPZrfIVJ1wzhaTQH3PuKnmsd4Hx%2FccNrb7I8C7ApmSUDOyU%2Ffi8eL0n9JWYgFdPulilZUFHZkUpg8psZDxvJ5MMON3r0GOqUBppT8pixMZUL5O6AcNQvQcnacgSRBqDInBlCtzWD%2Bc8ueQf14YY4hi1JKiDG1kq8GKYW9oWPQhTDaM30jr2Xjjd2QERxHBByMvHN1OL64v3Feximq8cS5NCmk4926c6989mtJvVmUryuIBMFzKW0lxC6fH6FRCIzF3uCOghsF5b7fdeQXj%2B%2Bt%2FF9wFkym5WzEgDtXkJuov1AvRwmIgmxaKM4h6ajG&X-Amz-Signature=2232d334bccd857dcd68cb32a2000561bf2aceea08b7f6faca7e26b351f9bfa8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
