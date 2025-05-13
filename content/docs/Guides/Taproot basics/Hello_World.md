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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK2YX42%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIA3%2BZG5%2FEnlksUpgbN57wdGAkUMdgOE9OKF9V3NfAdJiAiAgFETezbYkd54ciB58TVM9r9XOfslicKzrT8tceEU2NSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFF7KnDAjQz0cWnA%2FKtwDW0sM20oWG5tThyMA%2Bre58vbwuDNCuJ3ddgzivUzy8PJSd%2BJ1cXyQkzu7qtrobmU7xeFIv9v8s11pLtVafXVqM6eLSbFgriQl%2BbVQFzSAydJIRnD7tRaf6gRS4Nl0Es0OZKFM%2BBEDrsYqgWGnujNlwHgHk12ilWrpR0MjKMLiOzVTvL9Jh8NrZrmRjJ%2BLnxDg13RaTVWNAEcGW3pkoQDvxBK9jjsY5ynZeVTdfs58O864mn4nWs7Aw0vxv0W0tATt%2Bg6xspqZbDIsBTZPBMsuvJ9A0o9BETN4%2B8yVkMwx0iAdr2rTltiLuUj01sokhCMJmvPuQsCejkl7ZOBjZ%2F0Nnpr%2FVYJ3drPNG5euPwoUNgr9KoVv%2FZuf%2Bl9AQ4R4QuuBqcIChp20slCdMmOEkA6E5AX4fdUVVE0BpMMwdpTQyA9EKnDuopEww3Yaj2ZKuc0A2rUa%2BfH5KQBWduC7J8WSYpnEdEHDBaWYFQcs2IhI9mCceY2Uuqe5SCojT4AlizBb%2FI28PTNwPHyoiexbp3Pu5qnMBeFvYGn2EkgFNIAb0Fk%2BmU4Bpm8i1jEeiLXmZmdhqXfQggKBvuvGqJ7Ksm3nDNdRxgarTmAbwPRB%2FYSBvqbU2PXttodpxMIGnUcwrcaOwQY6pgGH9meERTWnDeX56034lOX4R9m5JPrFLWRcaNTLEYA%2BP3nTu1TiNqvq4%2BAEW5eXBXFVthntYsGcs6XYdJdwOXwDV1wO5sxZ%2FjDoXkFZxdwiWCS5EI1VrzHp%2B6dUSKUoyzx9eu%2FUZcb9m8bIPLi7tynD4wSxws5ufTOw0xR%2BRPMeqM8A33TKEUBw3XI%2F3z%2Bv%2FXjpHL5ng%2BU5Y4eFfYpDHJIJ1s%2F%2BASFb&X-Amz-Signature=b47eccfd6202b99cbc428f32dcf861e9237e617e463ddaca67b7a0abaa8ff66a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK2YX42%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIA3%2BZG5%2FEnlksUpgbN57wdGAkUMdgOE9OKF9V3NfAdJiAiAgFETezbYkd54ciB58TVM9r9XOfslicKzrT8tceEU2NSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFF7KnDAjQz0cWnA%2FKtwDW0sM20oWG5tThyMA%2Bre58vbwuDNCuJ3ddgzivUzy8PJSd%2BJ1cXyQkzu7qtrobmU7xeFIv9v8s11pLtVafXVqM6eLSbFgriQl%2BbVQFzSAydJIRnD7tRaf6gRS4Nl0Es0OZKFM%2BBEDrsYqgWGnujNlwHgHk12ilWrpR0MjKMLiOzVTvL9Jh8NrZrmRjJ%2BLnxDg13RaTVWNAEcGW3pkoQDvxBK9jjsY5ynZeVTdfs58O864mn4nWs7Aw0vxv0W0tATt%2Bg6xspqZbDIsBTZPBMsuvJ9A0o9BETN4%2B8yVkMwx0iAdr2rTltiLuUj01sokhCMJmvPuQsCejkl7ZOBjZ%2F0Nnpr%2FVYJ3drPNG5euPwoUNgr9KoVv%2FZuf%2Bl9AQ4R4QuuBqcIChp20slCdMmOEkA6E5AX4fdUVVE0BpMMwdpTQyA9EKnDuopEww3Yaj2ZKuc0A2rUa%2BfH5KQBWduC7J8WSYpnEdEHDBaWYFQcs2IhI9mCceY2Uuqe5SCojT4AlizBb%2FI28PTNwPHyoiexbp3Pu5qnMBeFvYGn2EkgFNIAb0Fk%2BmU4Bpm8i1jEeiLXmZmdhqXfQggKBvuvGqJ7Ksm3nDNdRxgarTmAbwPRB%2FYSBvqbU2PXttodpxMIGnUcwrcaOwQY6pgGH9meERTWnDeX56034lOX4R9m5JPrFLWRcaNTLEYA%2BP3nTu1TiNqvq4%2BAEW5eXBXFVthntYsGcs6XYdJdwOXwDV1wO5sxZ%2FjDoXkFZxdwiWCS5EI1VrzHp%2B6dUSKUoyzx9eu%2FUZcb9m8bIPLi7tynD4wSxws5ufTOw0xR%2BRPMeqM8A33TKEUBw3XI%2F3z%2Bv%2FXjpHL5ng%2BU5Y4eFfYpDHJIJ1s%2F%2BASFb&X-Amz-Signature=1f69db5ace4ef30a78ee0c1ad4bc59d2563f583e5fae453e80ce3c712950ea4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
