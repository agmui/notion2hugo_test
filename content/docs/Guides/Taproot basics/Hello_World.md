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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYKO5SL%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3y1kHQ%2BdmFS%2FFnRmfkSyEY8UnBBbjMCDFMyGhEpbR0AiEA6XCQ2WM4Is4VVDUZTDJf42OhndPXFdW%2BhMclAuR9mUYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEVoZ5IIj5PYVhOOLCrcA3RQLFFBKA7JGb2JJfNNmQ2TVxodHmhxd%2Bxf3jZQxpS0MHUeGgrqusqYMVuwFWk2V7DoFg3p9kRfCycuXVoSp2m1YFlIV1lAuJodMl3IDDQwxQNn2aiPj060NrTqqGNKlh%2BnolKu2nhBqlmOc%2BqLvfDYoGqGiMl3LtrgPzErDvUfFelHc7kVTPBknbTgl26M541jU%2BFPiDksWZIb8f2W3oIavhDWGK0oQX4NW%2FNM0lPaAbKDzl7kpOOJ%2FxgCh7W%2BKP0kYnIeopriQjR14VIYipIPPYmVdyeQwS9HLF3Fg4Qw%2BM7WQBIKvHieCSeV2HTWph1437y7wV78Hsd1IDUcEMMcChS0HP4MTtNV3kEFvA47%2FsHCSFIMZXK%2B5h3sBopbyZw5kb8GF3nl%2BH2vfNhKurNk8Mkkz%2FiD5Em1zmWPnQGo722daIu6kFL7bkSqHTe9bxhseDo0x7qtsm9qLm85gsqWY6mIRfcbuWEl1B2%2B8GtH5s7VrFzL6LlbLHe%2F%2B0uQenSLTBqAmVcUBADGd77ZDvQ3L7BKJ5HA1FZSLrjujkgc2JdkEbKE1T7Tb6%2BQEB%2FvzhhqG2Ut4XAEA0Ycxv5p%2BHcx5rP4o6sfGlv5ytOp4klUWFP9%2BsvK6WUAaex%2BMIOKoMgGOqUBtgtsykTCVwaE1Ejhd8u8iDFMq2eEBOKJId38TtMfdL3vdTThsZk52nQv6UT0ncbTd84IauchPuDqGjdI3GLD9TrgcE8qUROWIbBfUtUIXndWs1LDjgBiiHrqqs8aRcdfMgvAtREdQJazeT9KrN0hiW2lorlGbhpqW9jHWM2CXlOw5u9PA3agLxdtn7FtG83oKV%2FfhgqFiiybryJ7ITJz6gsZ8nhZ&X-Amz-Signature=cd49d0090bc3e96f3bf3e1f288532bad1e12c09585b65f7af00caf772862c236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYKO5SL%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3y1kHQ%2BdmFS%2FFnRmfkSyEY8UnBBbjMCDFMyGhEpbR0AiEA6XCQ2WM4Is4VVDUZTDJf42OhndPXFdW%2BhMclAuR9mUYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEVoZ5IIj5PYVhOOLCrcA3RQLFFBKA7JGb2JJfNNmQ2TVxodHmhxd%2Bxf3jZQxpS0MHUeGgrqusqYMVuwFWk2V7DoFg3p9kRfCycuXVoSp2m1YFlIV1lAuJodMl3IDDQwxQNn2aiPj060NrTqqGNKlh%2BnolKu2nhBqlmOc%2BqLvfDYoGqGiMl3LtrgPzErDvUfFelHc7kVTPBknbTgl26M541jU%2BFPiDksWZIb8f2W3oIavhDWGK0oQX4NW%2FNM0lPaAbKDzl7kpOOJ%2FxgCh7W%2BKP0kYnIeopriQjR14VIYipIPPYmVdyeQwS9HLF3Fg4Qw%2BM7WQBIKvHieCSeV2HTWph1437y7wV78Hsd1IDUcEMMcChS0HP4MTtNV3kEFvA47%2FsHCSFIMZXK%2B5h3sBopbyZw5kb8GF3nl%2BH2vfNhKurNk8Mkkz%2FiD5Em1zmWPnQGo722daIu6kFL7bkSqHTe9bxhseDo0x7qtsm9qLm85gsqWY6mIRfcbuWEl1B2%2B8GtH5s7VrFzL6LlbLHe%2F%2B0uQenSLTBqAmVcUBADGd77ZDvQ3L7BKJ5HA1FZSLrjujkgc2JdkEbKE1T7Tb6%2BQEB%2FvzhhqG2Ut4XAEA0Ycxv5p%2BHcx5rP4o6sfGlv5ytOp4klUWFP9%2BsvK6WUAaex%2BMIOKoMgGOqUBtgtsykTCVwaE1Ejhd8u8iDFMq2eEBOKJId38TtMfdL3vdTThsZk52nQv6UT0ncbTd84IauchPuDqGjdI3GLD9TrgcE8qUROWIbBfUtUIXndWs1LDjgBiiHrqqs8aRcdfMgvAtREdQJazeT9KrN0hiW2lorlGbhpqW9jHWM2CXlOw5u9PA3agLxdtn7FtG83oKV%2FfhgqFiiybryJ7ITJz6gsZ8nhZ&X-Amz-Signature=a8a7bf64f8755faaf62382f16a196e4dfd983fa5abec4a2875783b3624ae69da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
