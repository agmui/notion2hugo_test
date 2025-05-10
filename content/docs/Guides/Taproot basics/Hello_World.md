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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUKG5VD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN29DleuKWMeRMKC%2FLirjEn5Tse4f%2B%2Ba%2BcovqMLblv4QIgFyw%2F3IfRErichZJL3R0b57uVP6HXkIHDULN0f%2B2bRBkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElfQO2af%2BlTaulXyyrcA1Sn4qdE4j3WbqTqrjqT5PhQqzPRWCMAbWxo%2F8B8rGAFqJjdvsGoGG5ZPDPK%2FRBYU7jynDVtrVhWmj66Yq4VA54DWZtqxcZruAcQx4fUjB0nhe7W4A%2FIlamMF9YNhHc0N44ySyVRjPr6q%2BLoAiEwag22oNoBHBo%2FAnS4iMzAbELfOK3YqCVQ0t6W2grqh1cKAftsT%2FDGk8WiVd%2FRQukd%2FxVaOFRSVwhdWoK7OIHY4X2KQhx536VpUXuIFLcFkQj3odq6SMoJakZDLAZs7WSpjsRSqWq9avx8MTcSvY%2BPC9hoX8A0nKMpQm%2FVNFyi5qwEZ74v1%2FArTGuQHWjQs3VdFu1O0T2hG26xTEnjFg29NcRFIzhx0fnKCvb8RRohZ5wje%2FuXWnREAmnpBTO%2F2hM2tox6dx33dlfYIZbhHBDZJYAXDGs%2Fl3X1YPHAg7GI5KBwUkVAHNlMrShNX2i7sFobTEytU6k9piUXUK015f%2BljWSgFk6HB4bPTqF2MYI06PZo8MGarcyrO%2BoNMeOdxZT78Zoza0Z53LRY%2FHuPL7j7WnicUZp6C44Ut%2BqlhwcjyNpVHAc2suymKrnlTb%2Fki9QpdbSJ7ePKlsZvWWVrSwIsunsNP7m0aXIVxIxiAMuPMNmP%2FMAGOqUBdaWdkODINdrAxkL9z7Lfl23UC03wq5NbnLw2HuZsv4GS5sNBtwdMSiBcT9YgCktNiQfHVStU0E87nJL9ZAUoY3SHDZIUz9PRfZYvCkpD4Upy83yLPbrBbcip3f398QRMY71PQzZgNjfMsA3vWjfcSpa9Z6vBCVxDK75G6jDhiMcZRtBGA%2F4wZVZ9kIZQRvUTC5irfFxkynhLbCdagL1ay48g925Z&X-Amz-Signature=4fff09d1b907140dcaf6354c5fcc422b41a39605b6f7644ea5d541f6bdc49d19&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUKG5VD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN29DleuKWMeRMKC%2FLirjEn5Tse4f%2B%2Ba%2BcovqMLblv4QIgFyw%2F3IfRErichZJL3R0b57uVP6HXkIHDULN0f%2B2bRBkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElfQO2af%2BlTaulXyyrcA1Sn4qdE4j3WbqTqrjqT5PhQqzPRWCMAbWxo%2F8B8rGAFqJjdvsGoGG5ZPDPK%2FRBYU7jynDVtrVhWmj66Yq4VA54DWZtqxcZruAcQx4fUjB0nhe7W4A%2FIlamMF9YNhHc0N44ySyVRjPr6q%2BLoAiEwag22oNoBHBo%2FAnS4iMzAbELfOK3YqCVQ0t6W2grqh1cKAftsT%2FDGk8WiVd%2FRQukd%2FxVaOFRSVwhdWoK7OIHY4X2KQhx536VpUXuIFLcFkQj3odq6SMoJakZDLAZs7WSpjsRSqWq9avx8MTcSvY%2BPC9hoX8A0nKMpQm%2FVNFyi5qwEZ74v1%2FArTGuQHWjQs3VdFu1O0T2hG26xTEnjFg29NcRFIzhx0fnKCvb8RRohZ5wje%2FuXWnREAmnpBTO%2F2hM2tox6dx33dlfYIZbhHBDZJYAXDGs%2Fl3X1YPHAg7GI5KBwUkVAHNlMrShNX2i7sFobTEytU6k9piUXUK015f%2BljWSgFk6HB4bPTqF2MYI06PZo8MGarcyrO%2BoNMeOdxZT78Zoza0Z53LRY%2FHuPL7j7WnicUZp6C44Ut%2BqlhwcjyNpVHAc2suymKrnlTb%2Fki9QpdbSJ7ePKlsZvWWVrSwIsunsNP7m0aXIVxIxiAMuPMNmP%2FMAGOqUBdaWdkODINdrAxkL9z7Lfl23UC03wq5NbnLw2HuZsv4GS5sNBtwdMSiBcT9YgCktNiQfHVStU0E87nJL9ZAUoY3SHDZIUz9PRfZYvCkpD4Upy83yLPbrBbcip3f398QRMY71PQzZgNjfMsA3vWjfcSpa9Z6vBCVxDK75G6jDhiMcZRtBGA%2F4wZVZ9kIZQRvUTC5irfFxkynhLbCdagL1ay48g925Z&X-Amz-Signature=25da9ee0576a522820f0c7e421a2b00eaa4c0b1a8c3a45312ebc12dc92fc8209&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
