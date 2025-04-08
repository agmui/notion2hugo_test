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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63MYDMH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIC8udcQz0sR56t9VPBBdpLsIqkkQsgweoy822z4rVbrbAiEAl3BdtuR2Ax2ajK1GNodaHuXe2JFXp0NI1w5fYq%2BrZNYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCKXikOeUBfcRcuXhSrcA2k7U2wyuR46oFIP6MdoqHtpFkLNDWt%2B%2BbgiwsbloXYUdVsEvG20uANg6nfTjXqsqxbGWDz7WHLETI%2FyB0j61%2BL%2B%2B6%2F2dZHA%2B37vs1cgjDBrjPTXZpkZ5r1dwd3D53eebMCXcLzSIxsEPJ39qZTVZ6b4T41VioWnKY5zeiLaZQoiBumaV3IzQ84IcpK6RyTiWvdaneZxAI4clFNIsEOuxUCmBVUQGj%2Bw1IyJxoQrHG8pEOJ1b8jwDTQTtD38NSBk28l7itgkDDRnABKlauCuSkeZbfDdx6YcxpPxdXziEpwjnJek%2BWQn0yUQ2Z%2Ff7cW%2BEiz6ywsFZVPNNXvwuyp7aO%2FIMxZx7OEVwVAa%2BuZfakGkfSDe40J3KycroaLdA7wpOK9GycEqTVr%2BK7jDaI42t653PnsW2Rr%2BWJL4hknifUKWbT6tGqGi7AohXNS93ESgYYQ8w0eDWwZ0uoYYfOF%2Fcn90BKlggcgXAeDID1noDBP9O7%2BusOU3Yf3jTBtrFmCMqd07WH10KjXpZyDxPF78CnGuYt%2FYX%2FFHkURALLqFcKKFc1Yjk9uMNDtk0GdvRdZhGAOCsU4sxRDzNYA9qBRU3FMAjIShaXWEQkr6qC7HG%2BM%2FbYs4EvUuAySRw%2FSEMLeh1b8GOqUBDehuDqf2kyhYXNgdia24K0pTFGtGgJ4iBnsE30NSWMZa2z5WLt%2B%2BgBVNfV8EiMwcVpK39BOysPhjZcz3z%2FataUfnrAIeLIZudAb04huChT2WTxMFEe91UBbbattFwIxWMiqaG5qPGWF7XezvhTS9ej1r5qEiAMP6ygNpeCvY2z3mF34amJeVsVLZ8EropcnUDXCDrD74%2BQEmsceeK%2FIGJfUxpwzh&X-Amz-Signature=22c4609690b79c827ae29b54e73c14b4a8f04ff639c830c99a6975f08d09a836&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63MYDMH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIC8udcQz0sR56t9VPBBdpLsIqkkQsgweoy822z4rVbrbAiEAl3BdtuR2Ax2ajK1GNodaHuXe2JFXp0NI1w5fYq%2BrZNYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCKXikOeUBfcRcuXhSrcA2k7U2wyuR46oFIP6MdoqHtpFkLNDWt%2B%2BbgiwsbloXYUdVsEvG20uANg6nfTjXqsqxbGWDz7WHLETI%2FyB0j61%2BL%2B%2B6%2F2dZHA%2B37vs1cgjDBrjPTXZpkZ5r1dwd3D53eebMCXcLzSIxsEPJ39qZTVZ6b4T41VioWnKY5zeiLaZQoiBumaV3IzQ84IcpK6RyTiWvdaneZxAI4clFNIsEOuxUCmBVUQGj%2Bw1IyJxoQrHG8pEOJ1b8jwDTQTtD38NSBk28l7itgkDDRnABKlauCuSkeZbfDdx6YcxpPxdXziEpwjnJek%2BWQn0yUQ2Z%2Ff7cW%2BEiz6ywsFZVPNNXvwuyp7aO%2FIMxZx7OEVwVAa%2BuZfakGkfSDe40J3KycroaLdA7wpOK9GycEqTVr%2BK7jDaI42t653PnsW2Rr%2BWJL4hknifUKWbT6tGqGi7AohXNS93ESgYYQ8w0eDWwZ0uoYYfOF%2Fcn90BKlggcgXAeDID1noDBP9O7%2BusOU3Yf3jTBtrFmCMqd07WH10KjXpZyDxPF78CnGuYt%2FYX%2FFHkURALLqFcKKFc1Yjk9uMNDtk0GdvRdZhGAOCsU4sxRDzNYA9qBRU3FMAjIShaXWEQkr6qC7HG%2BM%2FbYs4EvUuAySRw%2FSEMLeh1b8GOqUBDehuDqf2kyhYXNgdia24K0pTFGtGgJ4iBnsE30NSWMZa2z5WLt%2B%2BgBVNfV8EiMwcVpK39BOysPhjZcz3z%2FataUfnrAIeLIZudAb04huChT2WTxMFEe91UBbbattFwIxWMiqaG5qPGWF7XezvhTS9ej1r5qEiAMP6ygNpeCvY2z3mF34amJeVsVLZ8EropcnUDXCDrD74%2BQEmsceeK%2FIGJfUxpwzh&X-Amz-Signature=bf988b478f971c5239d424535d2df5a9ca48731b0c802424258813b3083a8559&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
