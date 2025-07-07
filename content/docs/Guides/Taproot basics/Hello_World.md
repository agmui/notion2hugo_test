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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQWRLRE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDviRcRWIZQCcU1xo87qvdSuZyoGbpZMWbI0w65B7KN3AiEA6U5K9Cc9vQ%2FKtFX2I8ApmQgEFP40O1lhlcBUPeyuf9gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJZFtepqToqCLJBajircA7carx0EMtVggcD4fHTdoyO90hWMLtgtDdGbVLTxbZFaEU%2F6zCIFM0xop6uZYecF59fQIgTR9xtH1c6VG0LHMNW7AxivcXL0WXE%2BM43JaKKPjqTtkS10jCpfjD1KXEp2WDJpqRf6fjcInUqqe5wMsDy%2F3L8hp5wSJMNdkgd1oUCt7mo5byGLV%2F%2B2ajrY9FMeylYnIxsVEkplCAvlnMudfwijoI6cERqazYNX6rgBT83g3nWY2Q7rctuvpRU5FIy5EtBCpEkIzAYyYTzo%2BJEbcYi9FCrceGj7ZtxB4gb8diRNwBABcpx%2BpLwUVsKDUL7X24CO%2FcShxLhwen%2BEdaNiFMmT%2FRmvkjULz7LZvtFvsGAm7x0goZYOh6j%2FIU9pE%2FkqAjxLZ90tfTvWBnkuRJzPBhVjtFzmtCqF3shovdBfJe0LeWagakyzn0fwdbVxiMvzOOnyZ4obWXPW%2FAEsp5kNgXFge1pAmFR1nvoZB8sfrIo23faP28ikmOG9GR0oFzLuoQKox8U9z5q2BAxIopMqQw2%2FDnTvy%2FGRktTBfb1aACi0zRezckJSPZmWd%2BsvBUI0gXVrXPmVvw3xMCJ%2Belhxa27%2BYJOYy9Hb9lHan1R%2BIVgvlb2NiCF6P5tFEf5DMIzirsMGOqUBSj1q9l7VAWuVrOkvyD7J7Q4XJDMRpUd6nGRh12emW8AQyyXlGjF7PnzAkvKSFgKRnDtakuhqT0JUmat6uVF%2BYZwlV5qwyuZLd3vMHSGVBvZERkXTdcmsj%2FZsytGp%2B448NvFLhEsQkht7uCVzqWpOwVFrHBGPwyycpf3SX2AncvtNaSeUeO8LQ80OmSve%2Fo9beAcPbtvttLl99wMxuDiomW%2FP0hOb&X-Amz-Signature=0445312dbd01f640ab4f956ebccfc67a4383508da7b0af404fec286f53f806c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQWRLRE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDviRcRWIZQCcU1xo87qvdSuZyoGbpZMWbI0w65B7KN3AiEA6U5K9Cc9vQ%2FKtFX2I8ApmQgEFP40O1lhlcBUPeyuf9gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJZFtepqToqCLJBajircA7carx0EMtVggcD4fHTdoyO90hWMLtgtDdGbVLTxbZFaEU%2F6zCIFM0xop6uZYecF59fQIgTR9xtH1c6VG0LHMNW7AxivcXL0WXE%2BM43JaKKPjqTtkS10jCpfjD1KXEp2WDJpqRf6fjcInUqqe5wMsDy%2F3L8hp5wSJMNdkgd1oUCt7mo5byGLV%2F%2B2ajrY9FMeylYnIxsVEkplCAvlnMudfwijoI6cERqazYNX6rgBT83g3nWY2Q7rctuvpRU5FIy5EtBCpEkIzAYyYTzo%2BJEbcYi9FCrceGj7ZtxB4gb8diRNwBABcpx%2BpLwUVsKDUL7X24CO%2FcShxLhwen%2BEdaNiFMmT%2FRmvkjULz7LZvtFvsGAm7x0goZYOh6j%2FIU9pE%2FkqAjxLZ90tfTvWBnkuRJzPBhVjtFzmtCqF3shovdBfJe0LeWagakyzn0fwdbVxiMvzOOnyZ4obWXPW%2FAEsp5kNgXFge1pAmFR1nvoZB8sfrIo23faP28ikmOG9GR0oFzLuoQKox8U9z5q2BAxIopMqQw2%2FDnTvy%2FGRktTBfb1aACi0zRezckJSPZmWd%2BsvBUI0gXVrXPmVvw3xMCJ%2Belhxa27%2BYJOYy9Hb9lHan1R%2BIVgvlb2NiCF6P5tFEf5DMIzirsMGOqUBSj1q9l7VAWuVrOkvyD7J7Q4XJDMRpUd6nGRh12emW8AQyyXlGjF7PnzAkvKSFgKRnDtakuhqT0JUmat6uVF%2BYZwlV5qwyuZLd3vMHSGVBvZERkXTdcmsj%2FZsytGp%2B448NvFLhEsQkht7uCVzqWpOwVFrHBGPwyycpf3SX2AncvtNaSeUeO8LQ80OmSve%2Fo9beAcPbtvttLl99wMxuDiomW%2FP0hOb&X-Amz-Signature=d33d0acc5e9a1ca8d57a06c138244bdde5949bc7f34c791851a88e942742b693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
