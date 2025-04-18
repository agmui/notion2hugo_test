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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664U7YUWP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpllONt0qcUByOt8bDDtab2pExnJbZHGMo0A4b4fgaowIgE%2FSKLTohJ%2BlS32J9NJgSumrctrDuSP9jKXrYAVPId5Mq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB%2FB9gcz%2BogRVkgRkyrcA3mJFw1yuCN0U5PqnhJk0ORnv2joqyrTqyxAdYD2BGh%2F5BJJiI5aVzUF4lT1CXHuzqvJpDfEt5gyE6%2BKqHpqkRBTsHR4JzDAiNmo6UWPzZ%2FAlIlQeChbLPPLbMSmFL%2BOUQGaHz9l%2Flstoe3rpzqKkdOnCbLWLic%2FoQYAgHo4xknfGp8563Oo7EpukzIkO82%2Fmr7Heqn3Cg2ldYfANQtffX0dV0hIt1lub1s2B0tZmycsJ3AwrDmDuvYRJG0fiXP6lXCSGNFxVo8K33yCX%2FYpOXaEF7jFS%2BhVHLAk2BnWhWUfOGjqTBaMl6RQfiK00mYrQCzvllhzb0At2HQ6H8rZgGddz5qAWNDMXS8%2FBvCMfq0I7YLB2yRlVppxAs3a6KtmA%2BOLBf7Xb%2BHPB%2B6u8n16AGPMU%2B%2BR7ZkflM7M0RhYFQvq6uUje40BqkDxYMgiJLEX7WiU61g8iEkcx3ny3HK%2BQgK%2FuDpPwBxJ4%2FmSJj6ilLoZbA9kJC2Ox6a2m3imzfnbFzuiVOHssM9LunU5zw0cGA0ZnwKO5Fh9NK1M3iFcAKhKsCBitPuSDy1Vw88JAi6LpdBdlND1A06sTEeTsFyjrEUV85FFuUNDVMJ0jhBwel9U2KaJhCW34o0%2By1elMICOicAGOqUB%2Bh5pYPXhDCMi%2BRgUbAXDApbWQ8PTrVUoY6hKZzEKUQ4SdAYawBEdE8%2Bgz2s4x5Y8o4YjT3OnFMiDItJnREATmVInHyK71%2FYR4B%2F1dictcBFcReClSfjiFQmNiJbeTfic%2FUH9DYUPjTB%2BYT7cOtrrPJNO0IFW5PlNrTZxrBey%2FeP6MUUPXvEeGS9dSikYYk%2BvV4Shqi57Yc5rjEZ8iD%2FSOelu1RFC&X-Amz-Signature=756b45a46579b8c59ae3fb37dbf813e768f2f2919a67e807489653ca6b7bddfa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664U7YUWP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpllONt0qcUByOt8bDDtab2pExnJbZHGMo0A4b4fgaowIgE%2FSKLTohJ%2BlS32J9NJgSumrctrDuSP9jKXrYAVPId5Mq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB%2FB9gcz%2BogRVkgRkyrcA3mJFw1yuCN0U5PqnhJk0ORnv2joqyrTqyxAdYD2BGh%2F5BJJiI5aVzUF4lT1CXHuzqvJpDfEt5gyE6%2BKqHpqkRBTsHR4JzDAiNmo6UWPzZ%2FAlIlQeChbLPPLbMSmFL%2BOUQGaHz9l%2Flstoe3rpzqKkdOnCbLWLic%2FoQYAgHo4xknfGp8563Oo7EpukzIkO82%2Fmr7Heqn3Cg2ldYfANQtffX0dV0hIt1lub1s2B0tZmycsJ3AwrDmDuvYRJG0fiXP6lXCSGNFxVo8K33yCX%2FYpOXaEF7jFS%2BhVHLAk2BnWhWUfOGjqTBaMl6RQfiK00mYrQCzvllhzb0At2HQ6H8rZgGddz5qAWNDMXS8%2FBvCMfq0I7YLB2yRlVppxAs3a6KtmA%2BOLBf7Xb%2BHPB%2B6u8n16AGPMU%2B%2BR7ZkflM7M0RhYFQvq6uUje40BqkDxYMgiJLEX7WiU61g8iEkcx3ny3HK%2BQgK%2FuDpPwBxJ4%2FmSJj6ilLoZbA9kJC2Ox6a2m3imzfnbFzuiVOHssM9LunU5zw0cGA0ZnwKO5Fh9NK1M3iFcAKhKsCBitPuSDy1Vw88JAi6LpdBdlND1A06sTEeTsFyjrEUV85FFuUNDVMJ0jhBwel9U2KaJhCW34o0%2By1elMICOicAGOqUB%2Bh5pYPXhDCMi%2BRgUbAXDApbWQ8PTrVUoY6hKZzEKUQ4SdAYawBEdE8%2Bgz2s4x5Y8o4YjT3OnFMiDItJnREATmVInHyK71%2FYR4B%2F1dictcBFcReClSfjiFQmNiJbeTfic%2FUH9DYUPjTB%2BYT7cOtrrPJNO0IFW5PlNrTZxrBey%2FeP6MUUPXvEeGS9dSikYYk%2BvV4Shqi57Yc5rjEZ8iD%2FSOelu1RFC&X-Amz-Signature=3b8ba5729cc5db0acb13d7b5c137f52cdad39965e7ea05fb722a776e15444864&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
