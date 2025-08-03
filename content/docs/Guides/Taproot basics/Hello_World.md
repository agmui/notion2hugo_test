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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODIWVQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRzWpNzfpBZDu6n8oDjZv4AMtHk6bMJI5yUcvvzs%2BegAiEAuzEqxqP2kWH5hwFP2fOtUXNtj1AjDYB3sRVOZHdp8F4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMtAyPeD9A%2BLYYB6PCrcA8N2VmArOOAt%2BS6FuY6cyJl8mLf7iTIGOM32dzosmTNDCi3zRyBPqF7J%2FFZKpxDCtcFRtOCNrNBtojwTas5FPEfZ0YVMnvYMM0Xio8z%2F1UbbNgVTEG8os%2BEl%2Fx1aciLPtkqcg4Hnh1se2MeAK%2FEQHqrRvspiuyy0xaqGm0xpETyKcZa10WQ9%2BeeDk5kJ3iWRo4mzF1zCjq6WZgT340K%2FJbjeRCMM%2FAFkQA4F2PXK16Yz%2FW5DVglLASbUC5up6OkIQdF52cUSJegQjyo5CRnl2a9nniDO1ZXY2UQZ96%2FFxZWJREWI%2BOw0usltbO7mE6OnwJShsAI0dX%2Bkci4rjaZxSfBsz%2B4fbBaXH0fghZ%2BDYGHeufesPqTAt%2Fm9NfGdDPX4TXJWfTvxCs8E3o9tdeq0zddO0JbCj6o5R6Ix5hAnPd8J9J8UQfC6l5AUjl%2B8jIQPw0%2FFaAyjzD6YLYYzsnWseE8GCBFTsE2K%2FzgAnX7rmBlZqZ2dwMWZoD%2FjgMvN2JHMacYfF034IRD6b%2B8j27F9EFY1VzFpZVwFI9k6lpaJuZG8GAgP%2BUnYZkkm3Y8Ij1gy3wPBWxh77juezQE%2FxFyfoKnXyP%2FyssYNN%2FFJHeRlZQQpyQsNF2VjeHVB7bX9MO%2B9vMQGOqUB%2F9hXR%2FJKXLoQ9ZNCHv1GHlZZGJbhKsamZ%2B81ewEySKfEJ%2BefbbhxadAI7YXJFEdFC0n4aF35bpz2CHgZ8JK4aIiErbNqgomEJ0mHS%2FsyuZRzNSHK6xKb6iSg1OdhtIF8g9fcjccHw51Gsrw4KCeCAMkGkDsWHGGPg9NKguLS9DZRGUUMpbvmEh0L3OSkpijRjgXbEBRQi%2F17LmixW8lHbAuzGVrO&X-Amz-Signature=8ff6a1d3002cd278eb140c1d26a45f14c782155143dde94b8227edb20013a9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODIWVQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRzWpNzfpBZDu6n8oDjZv4AMtHk6bMJI5yUcvvzs%2BegAiEAuzEqxqP2kWH5hwFP2fOtUXNtj1AjDYB3sRVOZHdp8F4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMtAyPeD9A%2BLYYB6PCrcA8N2VmArOOAt%2BS6FuY6cyJl8mLf7iTIGOM32dzosmTNDCi3zRyBPqF7J%2FFZKpxDCtcFRtOCNrNBtojwTas5FPEfZ0YVMnvYMM0Xio8z%2F1UbbNgVTEG8os%2BEl%2Fx1aciLPtkqcg4Hnh1se2MeAK%2FEQHqrRvspiuyy0xaqGm0xpETyKcZa10WQ9%2BeeDk5kJ3iWRo4mzF1zCjq6WZgT340K%2FJbjeRCMM%2FAFkQA4F2PXK16Yz%2FW5DVglLASbUC5up6OkIQdF52cUSJegQjyo5CRnl2a9nniDO1ZXY2UQZ96%2FFxZWJREWI%2BOw0usltbO7mE6OnwJShsAI0dX%2Bkci4rjaZxSfBsz%2B4fbBaXH0fghZ%2BDYGHeufesPqTAt%2Fm9NfGdDPX4TXJWfTvxCs8E3o9tdeq0zddO0JbCj6o5R6Ix5hAnPd8J9J8UQfC6l5AUjl%2B8jIQPw0%2FFaAyjzD6YLYYzsnWseE8GCBFTsE2K%2FzgAnX7rmBlZqZ2dwMWZoD%2FjgMvN2JHMacYfF034IRD6b%2B8j27F9EFY1VzFpZVwFI9k6lpaJuZG8GAgP%2BUnYZkkm3Y8Ij1gy3wPBWxh77juezQE%2FxFyfoKnXyP%2FyssYNN%2FFJHeRlZQQpyQsNF2VjeHVB7bX9MO%2B9vMQGOqUB%2F9hXR%2FJKXLoQ9ZNCHv1GHlZZGJbhKsamZ%2B81ewEySKfEJ%2BefbbhxadAI7YXJFEdFC0n4aF35bpz2CHgZ8JK4aIiErbNqgomEJ0mHS%2FsyuZRzNSHK6xKb6iSg1OdhtIF8g9fcjccHw51Gsrw4KCeCAMkGkDsWHGGPg9NKguLS9DZRGUUMpbvmEh0L3OSkpijRjgXbEBRQi%2F17LmixW8lHbAuzGVrO&X-Amz-Signature=25dbd33a2cc542389c44dbf29490928529d9fff69d6eacfa7224c74e973fdc2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
