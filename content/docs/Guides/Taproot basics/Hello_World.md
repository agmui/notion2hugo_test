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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJZ5RO6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl9pyOwu3NAVbAi%2BLTpgdlEfN84zG%2ByWykctl5f0lL3wIhAI732WWwz1moFOSzga5hQsEdlGOU%2B3FsSEOv18fWljNgKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjCyhKavSb5II1Kboq3ANnTlgF%2FUbM93m3MnsazGqyX5TVNKBKEsL8DipN1LzTv3vvs13Yb%2F3upiFImVljkGnDrw5DsKLm%2FJLq8PJk8B%2Fz49oXfoh%2B4uIx1Bx4PPyQzohyxOWSXcGRXJDqh4gZYLPZih7Zs1ebgUkov2h18ws7P9fRXbGpTbA%2BFuHX1nKJ8DCKjfymBjle9ThQ1sUmvq%2FarUncHMFTTk423pRMp2ma3s7gvKa%2F81d%2BdU%2BLR5JzcHm3PDGQ6UjsLLGUGrEbdSo2iNkMPlRBGbYn6dMw5k59M0qKy830kYpjkXjeznDxMegWaNgloZH4Uoo%2F8UUSdnZmxz6D6PybpcRNaAztXmDRHNQCXWV65yRmrch%2Fx6K5ssm7bIgLuz0%2FA1OV8hbE7p3Y4%2FErDozRe5n1xTPOnvLIh7C4aP1KCgHxFsVJoMSPtH%2BbFuLRkhSRqwiKTraa%2B1o9M%2Bo%2FDV9eVlwiokar0UGCzPcTZMsKFebscV56ITaBFgmE%2Fefbw%2B0IUT0jfn7jlf9HIwc7ZlvUER6NrtwUaRYFYtuNHt%2BqBeUnAnotx8DD7r7f8OLLhphkduSLFZxjYPl76D0Ls76TrfP2LXoSRLPznRsuKLijKWDV6XUDivou8ZDt9EEn62mp2tTALDDjzYvDBjqkAUfHPuzHoSNYFtneOh3I9Kj2BPB%2BnEzgIZUrGRGsYuFPHZPDncNMg4kBggcAhPtGlF0oOsBJ6TK7X5ZzygzPMZsIWRBkhkApioouCJzNkQX80sDkgShKt6al6%2FZ54%2B%2BBw69AU%2FP7WOu9SlP5YfguRsnybEJmNzbsawxZm5IBmCFMXyrMizdRxHydeRP7FIohT%2FtrWp4nEPWHfYgI9qsL2VpBdph5&X-Amz-Signature=68c2ac58b94e79fee95fa6a21bfe02b2b3481b429ad54c6fb1dd61094f1b0404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJZ5RO6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl9pyOwu3NAVbAi%2BLTpgdlEfN84zG%2ByWykctl5f0lL3wIhAI732WWwz1moFOSzga5hQsEdlGOU%2B3FsSEOv18fWljNgKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjCyhKavSb5II1Kboq3ANnTlgF%2FUbM93m3MnsazGqyX5TVNKBKEsL8DipN1LzTv3vvs13Yb%2F3upiFImVljkGnDrw5DsKLm%2FJLq8PJk8B%2Fz49oXfoh%2B4uIx1Bx4PPyQzohyxOWSXcGRXJDqh4gZYLPZih7Zs1ebgUkov2h18ws7P9fRXbGpTbA%2BFuHX1nKJ8DCKjfymBjle9ThQ1sUmvq%2FarUncHMFTTk423pRMp2ma3s7gvKa%2F81d%2BdU%2BLR5JzcHm3PDGQ6UjsLLGUGrEbdSo2iNkMPlRBGbYn6dMw5k59M0qKy830kYpjkXjeznDxMegWaNgloZH4Uoo%2F8UUSdnZmxz6D6PybpcRNaAztXmDRHNQCXWV65yRmrch%2Fx6K5ssm7bIgLuz0%2FA1OV8hbE7p3Y4%2FErDozRe5n1xTPOnvLIh7C4aP1KCgHxFsVJoMSPtH%2BbFuLRkhSRqwiKTraa%2B1o9M%2Bo%2FDV9eVlwiokar0UGCzPcTZMsKFebscV56ITaBFgmE%2Fefbw%2B0IUT0jfn7jlf9HIwc7ZlvUER6NrtwUaRYFYtuNHt%2BqBeUnAnotx8DD7r7f8OLLhphkduSLFZxjYPl76D0Ls76TrfP2LXoSRLPznRsuKLijKWDV6XUDivou8ZDt9EEn62mp2tTALDDjzYvDBjqkAUfHPuzHoSNYFtneOh3I9Kj2BPB%2BnEzgIZUrGRGsYuFPHZPDncNMg4kBggcAhPtGlF0oOsBJ6TK7X5ZzygzPMZsIWRBkhkApioouCJzNkQX80sDkgShKt6al6%2FZ54%2B%2BBw69AU%2FP7WOu9SlP5YfguRsnybEJmNzbsawxZm5IBmCFMXyrMizdRxHydeRP7FIohT%2FtrWp4nEPWHfYgI9qsL2VpBdph5&X-Amz-Signature=51e1cc6c980ced8ee3fa8d8767452983e012be360852891e5554cfd2c54bb1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
