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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNIBWIF6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICa%2B7A2eL%2FlC8EETBI1MvSQgT578t3JMCxZiOO4otvRPAiEA4EfdZMgpzVo%2BdPsC60OBLld9jMFmsjv6qWVHB1aVye4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCZqUgNsPZLXchGXoCrcA2S1QMe0ycX7LMIgVvU1vcRxWJNyR1o8v8SDcpB2fY4%2B3XuFozYWiZ%2BQbjAnNyI%2FHgJtfHwuzJiqQEIeWGL3zTJmRJK1E8RxM7HvQ65mujl0n0GfR77zhhRBa64Wd2S6uHUqb80HzwsgNgmZnEQQsdzxhO%2BBWF0%2BwNWkdmFPrFzaRFie1oQzqZQcluzlE2RzLvkrx61WlUUHI2Zrf88RDBSMJoB54Ux%2BA8Wib64os28uaQLjUPhtCJqzTWZjaUabqrPNnMvJ7R4KcqePxeV%2Fjdsbj8SzRP771AxanKoYe%2F2aeBr0cCaxWGoduMnV2QmKOMLBLFPZU57UiQTVKmeD0liZ89jOlFMp%2BExU0YfCedc%2FO5qHIwGgXFq%2BYu0ump36EIoQlCcFhvRh65D3%2FOrT53W%2BHZNakrXkpYyuD5M2VwXwdLkoBkZed531gPqRCdgfnlqJnputIMf76wsH%2FSIFirQOjbYy2xx29TBq%2FH062GQul4h1NRJ%2BLKFxHaI849mNtX2VBRrp25LBqGAzb7fVIBghg1pk2w9T%2BLqKERpCNb4WlneHcLwVwQESkm4N%2FTHxA5zN7xn2q1qaSjIG6kHHVM%2Bor3pTQaZTcure91TDrfz2Tj%2FSzJK1hbcuOa3VMLS8vsAGOqUB3R1VFM7JEvnusWrQnM70rvwfzSTIwA9ofPaYrvQeOP6GJbF8IV0ULfq1Z50YNqaRQEY7j%2FPMs4NIex9irb%2FKMbYZ4ZyH7n9IF4mgKTu9JO9vDoIjd9IEJDgl0k786uDZfa6GZGZ703wB8x7q1ZJTxoKXF3IN2RXrM7HWW5ZLz77NH%2FLUm8yLtk6Aiu22LqsiltQD0AGiFigZHn7rufw0P%2F0yES2k&X-Amz-Signature=8836366e58b40b3187c69bd33eeb089fd58565de2d757927963df933e4879e32&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNIBWIF6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICa%2B7A2eL%2FlC8EETBI1MvSQgT578t3JMCxZiOO4otvRPAiEA4EfdZMgpzVo%2BdPsC60OBLld9jMFmsjv6qWVHB1aVye4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCZqUgNsPZLXchGXoCrcA2S1QMe0ycX7LMIgVvU1vcRxWJNyR1o8v8SDcpB2fY4%2B3XuFozYWiZ%2BQbjAnNyI%2FHgJtfHwuzJiqQEIeWGL3zTJmRJK1E8RxM7HvQ65mujl0n0GfR77zhhRBa64Wd2S6uHUqb80HzwsgNgmZnEQQsdzxhO%2BBWF0%2BwNWkdmFPrFzaRFie1oQzqZQcluzlE2RzLvkrx61WlUUHI2Zrf88RDBSMJoB54Ux%2BA8Wib64os28uaQLjUPhtCJqzTWZjaUabqrPNnMvJ7R4KcqePxeV%2Fjdsbj8SzRP771AxanKoYe%2F2aeBr0cCaxWGoduMnV2QmKOMLBLFPZU57UiQTVKmeD0liZ89jOlFMp%2BExU0YfCedc%2FO5qHIwGgXFq%2BYu0ump36EIoQlCcFhvRh65D3%2FOrT53W%2BHZNakrXkpYyuD5M2VwXwdLkoBkZed531gPqRCdgfnlqJnputIMf76wsH%2FSIFirQOjbYy2xx29TBq%2FH062GQul4h1NRJ%2BLKFxHaI849mNtX2VBRrp25LBqGAzb7fVIBghg1pk2w9T%2BLqKERpCNb4WlneHcLwVwQESkm4N%2FTHxA5zN7xn2q1qaSjIG6kHHVM%2Bor3pTQaZTcure91TDrfz2Tj%2FSzJK1hbcuOa3VMLS8vsAGOqUB3R1VFM7JEvnusWrQnM70rvwfzSTIwA9ofPaYrvQeOP6GJbF8IV0ULfq1Z50YNqaRQEY7j%2FPMs4NIex9irb%2FKMbYZ4ZyH7n9IF4mgKTu9JO9vDoIjd9IEJDgl0k786uDZfa6GZGZ703wB8x7q1ZJTxoKXF3IN2RXrM7HWW5ZLz77NH%2FLUm8yLtk6Aiu22LqsiltQD0AGiFigZHn7rufw0P%2F0yES2k&X-Amz-Signature=cbbc9afec52bcdd8ec063c95e8598851fc6e9eb4fd5e592f216adf763d39383c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
