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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SLV5TQY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX2tBsk4XOfjQqVDQT%2B3p6t2WycdzCtp4zeI%2FiDx6aLQIgOKJscLNaDS6dhblD5z6m0Ojougl1yljqiv3nvsQvCpYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAoNqfxytOM9LrH%2BircA65BBuQ8Ml2CxFGFY60tePiSB%2ByT5EQeKkdRqTfxDg8F2gMvr3dwAbKRhvahPNYdVAIzE0%2FrCeoRpOWHjjAprT1F6iojXGdwlz%2B4mitevEvwL%2FpUm%2F%2FaWECWur4vtQ1I5d0qH4%2F42n5EOR1e0o1udtE83SwLOpHj3LJRoV7eC5xqLwls5qLd66VtCl7nWvqd%2FLsoCFGT%2BPtt6M5BMiOdzisP9ryB4P6nAE%2FSItjFLiBZAPJ1AHsJA06IYs002lPthATXOj824FRZJnDOlp8wbmpFzaLpaxPZEkir4zx2v%2Bsyp6UVMkD2UQKwAN4Xqhs46wxYLesYAx1UzVmAvmpLgITpSf0G8kYgDCPczMCKkY1yxlJk9n8ZmsUzQWlfyjXfEO4TMKZ398Z%2FczQDwOT3K2U9Agso60JKrhio1GY3IUEqbiYMdeCXYINhBmMR%2B2nX9oTNIXxND3%2FGkMn%2BBoSJZv8eG2u2sWVp5zkwLlMG97hsygtD9JVhF8Tnao6In8LJCZT%2Fxxcs2EWUkZh0%2FUeXoW3YEc3H966iMyxLEVz3nc4pTuTxRnVHK6gCvZ7Thm3ouInIJEpKyeAsDdFd%2Ff%2FrjkPQ%2BTact73ee%2FcP5VKv1dyw8L%2BbYb2G2j4%2FJnouMLD%2FyL8GOqUB%2BfcvSKKw%2FoC6y38l2FNqCuoPPTGgweu0HAGwhZcHxq8LCk415Az%2FNQnarngDzljwhes3AK1LV1PmVGXszDFhAd3w2%2BYjCgmvqL%2FvBkqPTBqD7zYLIrsbiLpDrU3oBWqeTTD7t5jR462IcTtVSKkppyaey18hdLhQ0fFe4Rz8XL63NUz1YIeqtUfIP8oE77D09%2FlImc5fX6WA1OuVTzV39Z6PFsTM&X-Amz-Signature=6e83029d562a29880c7abf97435058d42f3ed03add760aea3634b67ae33c7d21&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SLV5TQY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX2tBsk4XOfjQqVDQT%2B3p6t2WycdzCtp4zeI%2FiDx6aLQIgOKJscLNaDS6dhblD5z6m0Ojougl1yljqiv3nvsQvCpYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAoNqfxytOM9LrH%2BircA65BBuQ8Ml2CxFGFY60tePiSB%2ByT5EQeKkdRqTfxDg8F2gMvr3dwAbKRhvahPNYdVAIzE0%2FrCeoRpOWHjjAprT1F6iojXGdwlz%2B4mitevEvwL%2FpUm%2F%2FaWECWur4vtQ1I5d0qH4%2F42n5EOR1e0o1udtE83SwLOpHj3LJRoV7eC5xqLwls5qLd66VtCl7nWvqd%2FLsoCFGT%2BPtt6M5BMiOdzisP9ryB4P6nAE%2FSItjFLiBZAPJ1AHsJA06IYs002lPthATXOj824FRZJnDOlp8wbmpFzaLpaxPZEkir4zx2v%2Bsyp6UVMkD2UQKwAN4Xqhs46wxYLesYAx1UzVmAvmpLgITpSf0G8kYgDCPczMCKkY1yxlJk9n8ZmsUzQWlfyjXfEO4TMKZ398Z%2FczQDwOT3K2U9Agso60JKrhio1GY3IUEqbiYMdeCXYINhBmMR%2B2nX9oTNIXxND3%2FGkMn%2BBoSJZv8eG2u2sWVp5zkwLlMG97hsygtD9JVhF8Tnao6In8LJCZT%2Fxxcs2EWUkZh0%2FUeXoW3YEc3H966iMyxLEVz3nc4pTuTxRnVHK6gCvZ7Thm3ouInIJEpKyeAsDdFd%2Ff%2FrjkPQ%2BTact73ee%2FcP5VKv1dyw8L%2BbYb2G2j4%2FJnouMLD%2FyL8GOqUB%2BfcvSKKw%2FoC6y38l2FNqCuoPPTGgweu0HAGwhZcHxq8LCk415Az%2FNQnarngDzljwhes3AK1LV1PmVGXszDFhAd3w2%2BYjCgmvqL%2FvBkqPTBqD7zYLIrsbiLpDrU3oBWqeTTD7t5jR462IcTtVSKkppyaey18hdLhQ0fFe4Rz8XL63NUz1YIeqtUfIP8oE77D09%2FlImc5fX6WA1OuVTzV39Z6PFsTM&X-Amz-Signature=e04be047cb2728bfa3a3938d932adbb2b0357219fa0ff8335e67d967485ea73a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
