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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZWM5V7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDUuXn2h%2B0OcmsvBfWoiuxgf%2BX9UVEpcF15VT3wpFzHGAiEAy%2FkdKB7UOolwRrHj6J0iOMkk6x3LvnEqLyut4TCMsywqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfPiW4icAlvL4y4pCrcAyAKSqx0Py2W0gCGeit1WZMvOWPewtDlyIZxEWUA1E5kP3w%2BEEteNKEFxjY2RWJ5fbj0lZ6fEzY52qeeK5J276RYp%2BJ%2BYlTuIOp%2BuHZBX3Fr%2BTqHdjXDchmP5wOjWOkM4r1kxvF7fK3JvCVR5sr0OJhtTaFcrEuIOpCCFk74wQtWZdn0n4Wo7pfr%2BwXroyYM%2FwkkE3FMkTnvGmw%2B8sknUSRguKeg8HgktdQ0CDaXTOsPwY163rgHHanpTSCq1mEyevKiZ4TkP8DQ249uFi7dDv1mE7FTvreKQtr2X%2B6cligymU8DI21HDPPzzcaGADkVrGi5iQHcUeGCGwu8xkOE2xVLIw7Lvs3PyVAEdA1Sm79r1SDI4tUS4HApxNJcpLzYyrCXIawh%2FQDekjJ7%2BUSFb%2BCj%2B9DJcNOAHPRqwe7CtX4nvE9U34Yg3FVNlOzWxOZNXScJpSGsLWQInmBRlPELh39MnwJOaoFu9ELnVFnkVqGvQRWFsZQ6pKKs3VzEpGOpGXlGkZbxJUKLRBvAY7ICrtx%2F9YIBTpEmtrImoSH4uVQ%2ByaE5zp5PihH4yZUKmlm8ceSVq%2B9JqIu3Fi%2FA8bO5mVxSVFTIjS%2FV%2FTGHc1Vd%2Fvmvjm52PoXZg0Q59YicML3Px8AGOqUB9md%2FTwkz%2FTtW4lQUXSy6NsDuovH2xJE0lCsQaQZ2O83pZR7GYKiynz9l54O88gzHKRJ1%2BIiAuUcvPXAjZkaiQP0C%2BbVkdPzq2BMfJIQNl4RbVsn%2FXpO6UxyyhXp46TImwV4tcCv9kvOor7EcuajPCg3g3KU8OfjzLoTactcCLm4pEG0FNt4elrsdvbcUvSgEKEnpW8xq97rsCDY2b3lxMUlqc0L7&X-Amz-Signature=b9aa34876ea541c2c74109854490a847e07ef6d68b68186dceb299532044568c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZWM5V7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDUuXn2h%2B0OcmsvBfWoiuxgf%2BX9UVEpcF15VT3wpFzHGAiEAy%2FkdKB7UOolwRrHj6J0iOMkk6x3LvnEqLyut4TCMsywqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfPiW4icAlvL4y4pCrcAyAKSqx0Py2W0gCGeit1WZMvOWPewtDlyIZxEWUA1E5kP3w%2BEEteNKEFxjY2RWJ5fbj0lZ6fEzY52qeeK5J276RYp%2BJ%2BYlTuIOp%2BuHZBX3Fr%2BTqHdjXDchmP5wOjWOkM4r1kxvF7fK3JvCVR5sr0OJhtTaFcrEuIOpCCFk74wQtWZdn0n4Wo7pfr%2BwXroyYM%2FwkkE3FMkTnvGmw%2B8sknUSRguKeg8HgktdQ0CDaXTOsPwY163rgHHanpTSCq1mEyevKiZ4TkP8DQ249uFi7dDv1mE7FTvreKQtr2X%2B6cligymU8DI21HDPPzzcaGADkVrGi5iQHcUeGCGwu8xkOE2xVLIw7Lvs3PyVAEdA1Sm79r1SDI4tUS4HApxNJcpLzYyrCXIawh%2FQDekjJ7%2BUSFb%2BCj%2B9DJcNOAHPRqwe7CtX4nvE9U34Yg3FVNlOzWxOZNXScJpSGsLWQInmBRlPELh39MnwJOaoFu9ELnVFnkVqGvQRWFsZQ6pKKs3VzEpGOpGXlGkZbxJUKLRBvAY7ICrtx%2F9YIBTpEmtrImoSH4uVQ%2ByaE5zp5PihH4yZUKmlm8ceSVq%2B9JqIu3Fi%2FA8bO5mVxSVFTIjS%2FV%2FTGHc1Vd%2Fvmvjm52PoXZg0Q59YicML3Px8AGOqUB9md%2FTwkz%2FTtW4lQUXSy6NsDuovH2xJE0lCsQaQZ2O83pZR7GYKiynz9l54O88gzHKRJ1%2BIiAuUcvPXAjZkaiQP0C%2BbVkdPzq2BMfJIQNl4RbVsn%2FXpO6UxyyhXp46TImwV4tcCv9kvOor7EcuajPCg3g3KU8OfjzLoTactcCLm4pEG0FNt4elrsdvbcUvSgEKEnpW8xq97rsCDY2b3lxMUlqc0L7&X-Amz-Signature=db6d0f020cfc49f5ec07c95861b5f3e7d2fc2b66124e8d1bae391e550248f446&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
