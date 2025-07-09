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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRYULKH5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fm7nJP7MrHNZ47T4WP4e1dRnmj0PSbdRxs60AtRhHvgIgTDo3NBARdpxOh6cCRWXv6Mwwr0E%2B4BST%2Fzq%2BtH1OYusqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6wQ3VvLAXo3QR8uyrcA57%2Bze9rancyxuGyNSwA0lKoGq50cRSdxyIPmX57nNacqoLMP7CjagwHk7eDXN2pvaQA16Q8vb25Y4D939n8k3YFgxNznrqV%2FA%2FlJk7%2FwhItdtfm7aL2fVpQ0%2Fj6usnAX1uQ%2FYbwrAJJHce%2Fg6KCZywHi5jCTuUgh0lLcBwZmf6iqXPCP1Ay5cHU0KQu92aGNhUN%2BZ4f7nhuz00cefs714ksqBCHxjEy8jDIq7TJC01j4Tf8auej8yZ8P4%2BnIeWNfTJm5vjpNnhvLgRn9kvUc8c32zpRJITsxBoKRroisONdSOXwTSVxEnlSO3ajFo3RWxLbD%2Bg8wtOUhGFzZaIWILzCpOb%2BXWCCe0cCV2cs8nSa9uqtV0k7SpnuHfVmKs1bBbJ9vwGp5Tip8%2FxIyDZknAyL34WmcyHvz5%2B3X63eb0zJrI7UY0RP%2Fa2kzNy15nNHavT7zFGE1Qy8%2BWedxMYA0jMYWErbYv%2BThpnAGjnUkfiBVm2TVnAwCA3gB%2BRyzgQf3J82AcQKJnBaJYaO52YGm0MgZIkjn8UuUtO1t6v2XoTpTC7NSUEfXwvGQBs3pk7L9p9XnZjOIcDRm2pIKXXflHj4jYjudr4o4Zd%2BfkgocXc6rElElf1TCKMgLCKTMP%2FSuMMGOqUBoVeEKEH9qljUNJUXd%2F00W4QtGAFzDPfTXNmskcKMx%2FTohecJCQLwenVB%2BcUwdBMCvte04ESVgoOyl0%2FHIc8tw%2Ft%2FshdUZZnQtmtO4R4Nmh53z5Pay374pAC2F0xxyZtRUWfTzgyT9fXSSibvA1U8U0pSCj05gJ0F0b7uCjyuvu9PVKIR1zYFhKgs6tJai7HgLXTPCbk74sMdwTQm%2B9aQxCa2Dtlp&X-Amz-Signature=c19a3e84dda7fc958e7a172a58a1cf98a318fbe20495c45b246300155a7657bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRYULKH5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fm7nJP7MrHNZ47T4WP4e1dRnmj0PSbdRxs60AtRhHvgIgTDo3NBARdpxOh6cCRWXv6Mwwr0E%2B4BST%2Fzq%2BtH1OYusqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6wQ3VvLAXo3QR8uyrcA57%2Bze9rancyxuGyNSwA0lKoGq50cRSdxyIPmX57nNacqoLMP7CjagwHk7eDXN2pvaQA16Q8vb25Y4D939n8k3YFgxNznrqV%2FA%2FlJk7%2FwhItdtfm7aL2fVpQ0%2Fj6usnAX1uQ%2FYbwrAJJHce%2Fg6KCZywHi5jCTuUgh0lLcBwZmf6iqXPCP1Ay5cHU0KQu92aGNhUN%2BZ4f7nhuz00cefs714ksqBCHxjEy8jDIq7TJC01j4Tf8auej8yZ8P4%2BnIeWNfTJm5vjpNnhvLgRn9kvUc8c32zpRJITsxBoKRroisONdSOXwTSVxEnlSO3ajFo3RWxLbD%2Bg8wtOUhGFzZaIWILzCpOb%2BXWCCe0cCV2cs8nSa9uqtV0k7SpnuHfVmKs1bBbJ9vwGp5Tip8%2FxIyDZknAyL34WmcyHvz5%2B3X63eb0zJrI7UY0RP%2Fa2kzNy15nNHavT7zFGE1Qy8%2BWedxMYA0jMYWErbYv%2BThpnAGjnUkfiBVm2TVnAwCA3gB%2BRyzgQf3J82AcQKJnBaJYaO52YGm0MgZIkjn8UuUtO1t6v2XoTpTC7NSUEfXwvGQBs3pk7L9p9XnZjOIcDRm2pIKXXflHj4jYjudr4o4Zd%2BfkgocXc6rElElf1TCKMgLCKTMP%2FSuMMGOqUBoVeEKEH9qljUNJUXd%2F00W4QtGAFzDPfTXNmskcKMx%2FTohecJCQLwenVB%2BcUwdBMCvte04ESVgoOyl0%2FHIc8tw%2Ft%2FshdUZZnQtmtO4R4Nmh53z5Pay374pAC2F0xxyZtRUWfTzgyT9fXSSibvA1U8U0pSCj05gJ0F0b7uCjyuvu9PVKIR1zYFhKgs6tJai7HgLXTPCbk74sMdwTQm%2B9aQxCa2Dtlp&X-Amz-Signature=4baff4e17ec9eb03046b4eecbe8e2a7925482d7171b93e50878f722878d21490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
