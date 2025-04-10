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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESEBOZC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFMBE5aSEeDMZh7OiarCa6lhDIO41obQd52RIFNqj4O8AiEA6QVobp57U4IM85GjDiYGPCYObclkHLAucmM3tRcGDqMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPybVj9aAOH06T%2FHqCrcAxNFbJTYkxwCe8isC5mmRRAhRwsyvKQxUWJlGDbZOsvlLCLi31WqNkaZSvvTdAsWrsssWvZXfTBtFmsUNjVEqoynswjQI0qa%2BNBJff0Mv0jnoc7bJ%2FJrXet60Pb6b5%2BWmXzXUX3an5Vm52RZw0cZxDu9lHfL6bfV5Ky8hjW4lJzmGEJ7r7VHUc2aPbfsme1iecVJOZw7Bi7OAjhVyfCHJ63KTU3PpqOSZ7IEViD95ifLCTaWiJPHUWX2%2B3yKg2v8N88BFQhGlWGDYBTPWBSpEa%2BEPv0f8yTxZHRbTQmgikzxn14H242ZWKcx4S19MFvG0tDyKz88FAuG7rQ%2BFL2%2FT0DM0i%2BCT97TNB%2BeRjVVRoTB7fHW1bhUIeMvXC9AE8hDTyDD7i1VcIac1oVHTVhd2VMefj1uZLsZmOCNfrOr8ZaakR9DjCGqshCExRItwPrgx3cn4K3QDn%2FZ7u9i7891P%2BC8qQSPX6Z%2FUJxU0MJrfVQP6W2jgoIDqtluoBChbmllrmimJTkgHHRjMk4RHB9dxYZejKutzJJm7mYlflDC10p9JY1gDWOeNEmSENy2qNv1HaSO4ErgnVpMgUO1%2Bw8hLElf13a3xaEwdIE1iV9Rrt0iUNgfLn5O9Tg1nnc6MNuP3b8GOqUBBGZtIwpxjM%2FlOKjzZ4geW6JKlfEkuJHxM1ZeBmdfTWxQx3hTSKzaIESJQzSLTCmuCjqzeVVG0fjV0WvfEeIqcCcwZp1PZNbMUEBPayQRgcUYafOn1V2WaoyjDHb2z%2B3%2FYAanFpvjKVEOLIhbfIDQ%2BJ5RNPJXv%2FsnEbZgG7AqJlwefTiMSWtZPzVmOyrBSdA%2BzUclyMim6yl%2BUC%2FMk0Zq6VQdRB37&X-Amz-Signature=d7bf61c63355c554eba6cad8dc950aef1a06bbe8492e2af1d4419652bd728ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESEBOZC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFMBE5aSEeDMZh7OiarCa6lhDIO41obQd52RIFNqj4O8AiEA6QVobp57U4IM85GjDiYGPCYObclkHLAucmM3tRcGDqMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPybVj9aAOH06T%2FHqCrcAxNFbJTYkxwCe8isC5mmRRAhRwsyvKQxUWJlGDbZOsvlLCLi31WqNkaZSvvTdAsWrsssWvZXfTBtFmsUNjVEqoynswjQI0qa%2BNBJff0Mv0jnoc7bJ%2FJrXet60Pb6b5%2BWmXzXUX3an5Vm52RZw0cZxDu9lHfL6bfV5Ky8hjW4lJzmGEJ7r7VHUc2aPbfsme1iecVJOZw7Bi7OAjhVyfCHJ63KTU3PpqOSZ7IEViD95ifLCTaWiJPHUWX2%2B3yKg2v8N88BFQhGlWGDYBTPWBSpEa%2BEPv0f8yTxZHRbTQmgikzxn14H242ZWKcx4S19MFvG0tDyKz88FAuG7rQ%2BFL2%2FT0DM0i%2BCT97TNB%2BeRjVVRoTB7fHW1bhUIeMvXC9AE8hDTyDD7i1VcIac1oVHTVhd2VMefj1uZLsZmOCNfrOr8ZaakR9DjCGqshCExRItwPrgx3cn4K3QDn%2FZ7u9i7891P%2BC8qQSPX6Z%2FUJxU0MJrfVQP6W2jgoIDqtluoBChbmllrmimJTkgHHRjMk4RHB9dxYZejKutzJJm7mYlflDC10p9JY1gDWOeNEmSENy2qNv1HaSO4ErgnVpMgUO1%2Bw8hLElf13a3xaEwdIE1iV9Rrt0iUNgfLn5O9Tg1nnc6MNuP3b8GOqUBBGZtIwpxjM%2FlOKjzZ4geW6JKlfEkuJHxM1ZeBmdfTWxQx3hTSKzaIESJQzSLTCmuCjqzeVVG0fjV0WvfEeIqcCcwZp1PZNbMUEBPayQRgcUYafOn1V2WaoyjDHb2z%2B3%2FYAanFpvjKVEOLIhbfIDQ%2BJ5RNPJXv%2FsnEbZgG7AqJlwefTiMSWtZPzVmOyrBSdA%2BzUclyMim6yl%2BUC%2FMk0Zq6VQdRB37&X-Amz-Signature=59b9f174f781c59ec8dd3556161295d308cd87560559155dfb7ecba14f5d39ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
