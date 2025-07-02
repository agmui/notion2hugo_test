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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57A5NBA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQB%2FYRm5F7Oi3pPjvzWGQYi3jGAY8rdDDmx%2Fwrmb2N0AiEAobYpYYrbNz6gYUrXmXQXEhsRs1lMWqTRizcKc3vE%2FCgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrJD2Mvtc8r26uiIircA%2Fj%2BHQzgPrw55sKgtZ%2BtXGD4p5Z%2F8Bg2C03aOkKlLlFm4A1zQQ1ck4JCifEFP5%2BQ0F2smNpCECpuT8riTq%2BikzbdazzPVxij0EYsQKb8bk%2BMYBBUtX9owJ%2B2VJIKYcvVWpDYWwDDWjsHhJOfKLjE%2F8Aoju1Wn5s3jdrKVbdE15%2FQaqjMu6HkuzegVP6v3Y7ru39CR89vGf2VXSxH7CZsQ%2BeCQbnMYLDctW%2Bpu4MKDx8pM9D94aFo771DNeDoQxz4uVfjXm034PJG6TH8RLwreuVVq1cw%2F9rV4kBcgHtl3YNXB13LzFWIChL3XwwKWinEaCnyMtYyEXhtOU1tWAFsSkh6Vig%2BarAslxPcG0M%2Bfz%2FnzGT%2BM2Y0d2scSq7V0PJMhIIaP%2BJl3ViJCxBOk5%2B43yVA9nJAGTctmV6SxeCBq6wYUe3DxSMlD8G7IZXPvIFbuCwRHaMjfnu70MjXju5Y7nL0J1HgVmqbog0CVokNOcMosQorVTi1zmW83lY1zkpcwsTbaYpllT%2Fgk6c6rvN5vSJYd6CpncHMP6UPfGos03FanJ5Hf8MC9QUVwtMajbIrpEsJ96uj0bJd0wg2SuvONKvgnb%2BJdgcqHA02ws2r6REuPomWdFG1AnGugmd0MKuTlMMGOqUBraH8wnd6hsY1hJq%2Bu8gQsezfz5oPuTl8ZjXN2ZoEwT%2Flfr5Coyi6tptNoe3E6%2F%2FKneKN3Zz%2FekTOXuRFDQEwpgd6e6qEpMMx3rheRonOY%2BcGbbFLnNzn8yYrzjv6xkT0FnHtms3BcTy%2BY9GDaIJnI8wpnCw131dOFUigR%2F7BGb555CRm2yQ1aTB3nz%2B948RxH9qg10pCDjKgf7O%2B7Pk%2BngNr5USD&X-Amz-Signature=770e05fc9c1235dd9c4381c9fb99a3e94882eda80dbf9e7894208f2002c81390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57A5NBA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQB%2FYRm5F7Oi3pPjvzWGQYi3jGAY8rdDDmx%2Fwrmb2N0AiEAobYpYYrbNz6gYUrXmXQXEhsRs1lMWqTRizcKc3vE%2FCgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrJD2Mvtc8r26uiIircA%2Fj%2BHQzgPrw55sKgtZ%2BtXGD4p5Z%2F8Bg2C03aOkKlLlFm4A1zQQ1ck4JCifEFP5%2BQ0F2smNpCECpuT8riTq%2BikzbdazzPVxij0EYsQKb8bk%2BMYBBUtX9owJ%2B2VJIKYcvVWpDYWwDDWjsHhJOfKLjE%2F8Aoju1Wn5s3jdrKVbdE15%2FQaqjMu6HkuzegVP6v3Y7ru39CR89vGf2VXSxH7CZsQ%2BeCQbnMYLDctW%2Bpu4MKDx8pM9D94aFo771DNeDoQxz4uVfjXm034PJG6TH8RLwreuVVq1cw%2F9rV4kBcgHtl3YNXB13LzFWIChL3XwwKWinEaCnyMtYyEXhtOU1tWAFsSkh6Vig%2BarAslxPcG0M%2Bfz%2FnzGT%2BM2Y0d2scSq7V0PJMhIIaP%2BJl3ViJCxBOk5%2B43yVA9nJAGTctmV6SxeCBq6wYUe3DxSMlD8G7IZXPvIFbuCwRHaMjfnu70MjXju5Y7nL0J1HgVmqbog0CVokNOcMosQorVTi1zmW83lY1zkpcwsTbaYpllT%2Fgk6c6rvN5vSJYd6CpncHMP6UPfGos03FanJ5Hf8MC9QUVwtMajbIrpEsJ96uj0bJd0wg2SuvONKvgnb%2BJdgcqHA02ws2r6REuPomWdFG1AnGugmd0MKuTlMMGOqUBraH8wnd6hsY1hJq%2Bu8gQsezfz5oPuTl8ZjXN2ZoEwT%2Flfr5Coyi6tptNoe3E6%2F%2FKneKN3Zz%2FekTOXuRFDQEwpgd6e6qEpMMx3rheRonOY%2BcGbbFLnNzn8yYrzjv6xkT0FnHtms3BcTy%2BY9GDaIJnI8wpnCw131dOFUigR%2F7BGb555CRm2yQ1aTB3nz%2B948RxH9qg10pCDjKgf7O%2B7Pk%2BngNr5USD&X-Amz-Signature=599b0e130aaab9f566763df07de01ecbed1468526e8135146e6e3c59e1b0240f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
