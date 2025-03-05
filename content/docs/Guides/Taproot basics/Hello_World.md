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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTHZSRI%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcCqI2NTdQDpdy50QduwYLcLD57%2F8d5P7I2fabG3ej3wIhAMoJpEAu6YsV68juGNtU2IbVVl%2BElupnVq04Qk%2Fo0lnOKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHwU1RHDXJy7w9DVYq3APbhrk%2B7UdGrJslF%2BC1h%2BBHx5K5T94fVdFPCzoVHs6kpNjIBuRR2U%2BTQOapz%2BIujRJxE5frGjQKtgcFo2OJtq2YjoHCZX0aGMMIP5wzO9TTSJV3IYEDEujq5TQwEZqnVdr3ooX34ixfrJ9S2n6OH3i9tB4K0w%2FMvv%2F5BX5sCfXp07OT6JVZJXyCHeqJ60RRmRvrGHHGOdLDCgbtl0r0dy%2BVrpjqgZj7c1VTEBLiSsMeuPuU5rb2F3P%2F31P6IwRqcqSlnTcdBae%2BmZciyH2miIIbEM75iaNajERR9e4l50iObHYBHhgHal3%2FzkbdQjNNmRM5krSxe6HxOJnfQ%2BA6YmcLG8PjZbLi8Gkum2gBuVl4S2bSX%2BebWTMnMqaY4sFbm279xpXZqAkUd1bAjj7HV5xmor97qWEh1WgMtiMZVb%2FVwsX4IF6E%2BGEkw6TSGH6%2BvX3WFao2ag2uF3joBXq9dITbowrbXnYQ00x%2F%2BoZLnqS6I1jW1xf49deV3l0Ga2VU3I6QuKQtNhaKSw9ssxdrxzNAFo6aPKjtf72q8vz7IfaHr2itJaxMLpq09u9msW9zIh1fk80d9oLNUjruUdae%2BfwC7UUpTwBGW6SBakquO4MVazkB3%2FTp81QtKhsi9TCynp6%2BBjqkAcBLZu4ZHbIz80LbexRJNQ38j%2B3h8dbYe5X%2BBDpSLw1XChDZVFOu7veUiW5Diu3BVhqNoRq9dUCEwJ1epmTKnQq1GGLZ5RVyenqv7aEcpUg1p5Rm3266usbGlB3YPuMiSQZ5zjbc4PTvlKqt1252xN1pkk33SFPcw2LKi4GYFxWLnVD1LMZeTUMMIyh78SiKi2b2JU5dwZ4OryI3pq%2B34zFH9tZc&X-Amz-Signature=a8f50f77839648134c91289d0321d46b7ac1c22346a8860e8a369bbc2d3e0e76&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTHZSRI%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcCqI2NTdQDpdy50QduwYLcLD57%2F8d5P7I2fabG3ej3wIhAMoJpEAu6YsV68juGNtU2IbVVl%2BElupnVq04Qk%2Fo0lnOKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHwU1RHDXJy7w9DVYq3APbhrk%2B7UdGrJslF%2BC1h%2BBHx5K5T94fVdFPCzoVHs6kpNjIBuRR2U%2BTQOapz%2BIujRJxE5frGjQKtgcFo2OJtq2YjoHCZX0aGMMIP5wzO9TTSJV3IYEDEujq5TQwEZqnVdr3ooX34ixfrJ9S2n6OH3i9tB4K0w%2FMvv%2F5BX5sCfXp07OT6JVZJXyCHeqJ60RRmRvrGHHGOdLDCgbtl0r0dy%2BVrpjqgZj7c1VTEBLiSsMeuPuU5rb2F3P%2F31P6IwRqcqSlnTcdBae%2BmZciyH2miIIbEM75iaNajERR9e4l50iObHYBHhgHal3%2FzkbdQjNNmRM5krSxe6HxOJnfQ%2BA6YmcLG8PjZbLi8Gkum2gBuVl4S2bSX%2BebWTMnMqaY4sFbm279xpXZqAkUd1bAjj7HV5xmor97qWEh1WgMtiMZVb%2FVwsX4IF6E%2BGEkw6TSGH6%2BvX3WFao2ag2uF3joBXq9dITbowrbXnYQ00x%2F%2BoZLnqS6I1jW1xf49deV3l0Ga2VU3I6QuKQtNhaKSw9ssxdrxzNAFo6aPKjtf72q8vz7IfaHr2itJaxMLpq09u9msW9zIh1fk80d9oLNUjruUdae%2BfwC7UUpTwBGW6SBakquO4MVazkB3%2FTp81QtKhsi9TCynp6%2BBjqkAcBLZu4ZHbIz80LbexRJNQ38j%2B3h8dbYe5X%2BBDpSLw1XChDZVFOu7veUiW5Diu3BVhqNoRq9dUCEwJ1epmTKnQq1GGLZ5RVyenqv7aEcpUg1p5Rm3266usbGlB3YPuMiSQZ5zjbc4PTvlKqt1252xN1pkk33SFPcw2LKi4GYFxWLnVD1LMZeTUMMIyh78SiKi2b2JU5dwZ4OryI3pq%2B34zFH9tZc&X-Amz-Signature=49632035952eb350ff42d111853078c81db60f057a84159ba4966dc7a62ecf33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
