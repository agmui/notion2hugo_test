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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS4LLIL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDDHnIEqwJltOC9X9r2wis04eqHQF1gs32T%2F6pJ%2FmN9GgIhAI7uwYafD6jaUhV1I7mVDyvq9cbVExcnBG5EnhjeXXeoKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHKvgm%2BYm79oAYBvQq3AMFt7dVPaqLFvE3JEt2OgwjUxFsTbeco%2FTiqAGht1gucezc3J7WdV4A6HNwHNfAijTWizf128ZcHf9omc3H1TpTccXd5CpsCZVNc%2BlT3lY1eb4%2FdbqRpbnzIWowwTkmhbOYbfmf5AT%2FS8LAuV0s0cKTvq7IXpunIq7T2f85KCBw4JESuy3a1FhEIJ4ZYkVeG7qf0dlwEFZ2u%2BGmgqlbfbPM8OznBGXqOQz80UJyUUWDYh6K17wB61IbgWEC3ZT1XKkNmRj7rsfZj2LMJEHaARS5CX665J50Mpbj8OYK3Pe1zY%2FIdBS18ktSocCT4Embwz5Fp3B4iNsezfQloQQr%2BJlSa%2F%2F08%2B7RSrJ1DYwaCMG2a4o5ojgL2Cu6y61XyVrE3jNHlAiXnz4hmUXTITNNbKVhHO312VbdJrPdJj9R%2B2l%2FzhesurzMQccTnr8LKl2uu5NzXQuAAF8%2B3EAjbB0aWZ9PMD%2BXt9MiDZO4VhtWgLJqNyLTx2xSbrJ221ix1K9PZc7HkR4MKiL0mggn95jXTopBRCgFzNXNnL%2Fp6ISqdiarjzcbqdsMvOEbASWu6gGka3FKIKF7JzOAR6h%2BpPaEcvNeUPnDileFh8qT4r0e3B1HwN79A5uBZLivxMPuwjCPuYHBBjqkAVCmBGl4Qp%2F2t%2BZcfe8Xigfx7t7bOBIA%2BJnXTRsyhwZIrXeJcOgtTbNiwnlCfopa%2FNxOkmPmGcWZzbAr7AuXPtOgfBE6FSYOTJTKRam7Zbkqt9DHCH7S%2BhgcwL21qgBbdxL3akOJXUsdSb5Un86mjg5WpFlnmpC%2FU332BHvyW5iJ7GmKQ4jiARKSXu%2FK4VZQMOexoJlQ8b6tKxqA3E%2F8%2FTrQ0HF%2B&X-Amz-Signature=093d7081d4ac0c1a44116ce1ca4496f350b5035fad02ccc13f27874ffed368c1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS4LLIL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDDHnIEqwJltOC9X9r2wis04eqHQF1gs32T%2F6pJ%2FmN9GgIhAI7uwYafD6jaUhV1I7mVDyvq9cbVExcnBG5EnhjeXXeoKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHKvgm%2BYm79oAYBvQq3AMFt7dVPaqLFvE3JEt2OgwjUxFsTbeco%2FTiqAGht1gucezc3J7WdV4A6HNwHNfAijTWizf128ZcHf9omc3H1TpTccXd5CpsCZVNc%2BlT3lY1eb4%2FdbqRpbnzIWowwTkmhbOYbfmf5AT%2FS8LAuV0s0cKTvq7IXpunIq7T2f85KCBw4JESuy3a1FhEIJ4ZYkVeG7qf0dlwEFZ2u%2BGmgqlbfbPM8OznBGXqOQz80UJyUUWDYh6K17wB61IbgWEC3ZT1XKkNmRj7rsfZj2LMJEHaARS5CX665J50Mpbj8OYK3Pe1zY%2FIdBS18ktSocCT4Embwz5Fp3B4iNsezfQloQQr%2BJlSa%2F%2F08%2B7RSrJ1DYwaCMG2a4o5ojgL2Cu6y61XyVrE3jNHlAiXnz4hmUXTITNNbKVhHO312VbdJrPdJj9R%2B2l%2FzhesurzMQccTnr8LKl2uu5NzXQuAAF8%2B3EAjbB0aWZ9PMD%2BXt9MiDZO4VhtWgLJqNyLTx2xSbrJ221ix1K9PZc7HkR4MKiL0mggn95jXTopBRCgFzNXNnL%2Fp6ISqdiarjzcbqdsMvOEbASWu6gGka3FKIKF7JzOAR6h%2BpPaEcvNeUPnDileFh8qT4r0e3B1HwN79A5uBZLivxMPuwjCPuYHBBjqkAVCmBGl4Qp%2F2t%2BZcfe8Xigfx7t7bOBIA%2BJnXTRsyhwZIrXeJcOgtTbNiwnlCfopa%2FNxOkmPmGcWZzbAr7AuXPtOgfBE6FSYOTJTKRam7Zbkqt9DHCH7S%2BhgcwL21qgBbdxL3akOJXUsdSb5Un86mjg5WpFlnmpC%2FU332BHvyW5iJ7GmKQ4jiARKSXu%2FK4VZQMOexoJlQ8b6tKxqA3E%2F8%2FTrQ0HF%2B&X-Amz-Signature=de322d09bb403b291f5931224905560dff9dc10984ee37b7cd182b162ebee4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
