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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQKUASM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDoUsnBu8Xd%2Fiuc6NaRy3XLvAjS%2FZZQJQdAV6jahKnAmQIgEC2gfQGTom5VlrN6laXghlDusL9YhRgayvXAvMi%2BxCQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQY9zXZjITA1xsjgircA5WDRkoY%2FNE97cT8jTcy9Px1uQamjePptrVjQQC40Ae5g5%2BCESnt57nxSFxLRRyZL3BZjnEI0gHwQbPNcs78JyWjxi1OMOK%2F2ML9i2E2faXFCmm4fpI%2Bg613PIodnQUhyZH0kZQcX4axwwzFPa0t1tKKUKKaWNJDULpoX0sqjOW%2BiUfCaRmyh16dDF0ukI5HHamQ9taYOJ1rSNm%2BOwDjejru4UOLk1NMW1lgWffWeCS2e9Qd4zRAlOebOWjMQbdMro8cYOHPG07H6izoEhOJVx9fFIaJs%2FDiTBWF0XcpavPX9VIxlUPHBTEzp0nSPz4X1ao4L3Ou0gtq5W9hz8NDTtQCia0zszV3OekI2M8rCvgWyP4SVU8C3VYZZU5WJjmrr9yWSltNha%2FJYnT8yOh%2F0%2FG7CgPL2xXXpxBa5R6SIzxGj4CCFCB12lUtx5RiMgDPlB0P2nH8nPwiO3leTrGSck0o6cG5mqOcPzeLDFyH9CXHAFxuJBTAJymdz%2FMqJyIo5H9ixw1QfbC2%2FxYdJuRcgNTOmp0fUVvmYbXKxxMrHyX0i3rPuXwwoXzwINfDeUCzzBNQUWN7c5PctSQ0kOlWiICFSVfk1lpjQBOhMY6DvIMocosHPTbzLoDn5H80MJCZo8QGOqUBChQiFPMvRHiSUNcukljlf5xQQTF%2B2csbu3xcCPGBgA7K2zS%2FmMTw8P7BbQduLktvxcwmJfRtZ1%2BS7mIQN%2BtdjWGVV4H81%2FvjPOuYfkxOk4Omzpu%2BaSEpJqxSu%2B%2FSfyfgQ9iGtmVyqpnJ7lqF6rhVsaSIWa1BHONox3DDA2yYxaMJ3L5iNSzFPoPCif1T98Z5nh1rnRHTjAQWRggyS3AfAXsKgtRJ&X-Amz-Signature=b6109c1a2584ff00cd1b3536f6a8c542fc883e93754143c9d2afad3ff62fba7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQKUASM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDoUsnBu8Xd%2Fiuc6NaRy3XLvAjS%2FZZQJQdAV6jahKnAmQIgEC2gfQGTom5VlrN6laXghlDusL9YhRgayvXAvMi%2BxCQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQY9zXZjITA1xsjgircA5WDRkoY%2FNE97cT8jTcy9Px1uQamjePptrVjQQC40Ae5g5%2BCESnt57nxSFxLRRyZL3BZjnEI0gHwQbPNcs78JyWjxi1OMOK%2F2ML9i2E2faXFCmm4fpI%2Bg613PIodnQUhyZH0kZQcX4axwwzFPa0t1tKKUKKaWNJDULpoX0sqjOW%2BiUfCaRmyh16dDF0ukI5HHamQ9taYOJ1rSNm%2BOwDjejru4UOLk1NMW1lgWffWeCS2e9Qd4zRAlOebOWjMQbdMro8cYOHPG07H6izoEhOJVx9fFIaJs%2FDiTBWF0XcpavPX9VIxlUPHBTEzp0nSPz4X1ao4L3Ou0gtq5W9hz8NDTtQCia0zszV3OekI2M8rCvgWyP4SVU8C3VYZZU5WJjmrr9yWSltNha%2FJYnT8yOh%2F0%2FG7CgPL2xXXpxBa5R6SIzxGj4CCFCB12lUtx5RiMgDPlB0P2nH8nPwiO3leTrGSck0o6cG5mqOcPzeLDFyH9CXHAFxuJBTAJymdz%2FMqJyIo5H9ixw1QfbC2%2FxYdJuRcgNTOmp0fUVvmYbXKxxMrHyX0i3rPuXwwoXzwINfDeUCzzBNQUWN7c5PctSQ0kOlWiICFSVfk1lpjQBOhMY6DvIMocosHPTbzLoDn5H80MJCZo8QGOqUBChQiFPMvRHiSUNcukljlf5xQQTF%2B2csbu3xcCPGBgA7K2zS%2FmMTw8P7BbQduLktvxcwmJfRtZ1%2BS7mIQN%2BtdjWGVV4H81%2FvjPOuYfkxOk4Omzpu%2BaSEpJqxSu%2B%2FSfyfgQ9iGtmVyqpnJ7lqF6rhVsaSIWa1BHONox3DDA2yYxaMJ3L5iNSzFPoPCif1T98Z5nh1rnRHTjAQWRggyS3AfAXsKgtRJ&X-Amz-Signature=41900305688846ac0100013349a7a15f3d9ef56bf77d6f6fb2aa1b7df45f7596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
