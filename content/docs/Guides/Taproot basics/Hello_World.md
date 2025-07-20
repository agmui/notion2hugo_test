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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNPZYZ6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBmAHaheHNhjBUBAIjGW%2FYAB%2BJyRNOxtvfff8S0ceVhAiEAis36653UsbebOFwkw6Tk41cVaAetfNtvNj28XFAJgnIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpx37SdSIxjUjL%2FQCrcA%2BSSdYz0FgE3zUj5o9rr4XzCsaLle7dN9wv1KPtUXI47r0In%2BlmbISvVhOJGCP1rz0tZhrEk1ByAgwdX92uiObxntXBMBCmOn%2B6qXgOkWDd608YET9An1U9ao2mAi8qFpcpXjVv5HIcSAn%2Bh7O55ho7zTaiEp2uDmq%2FZme3B2soG9%2Bb5eWsXEX%2B%2BOFsoXyEp2w%2FeE6lRrPLnZlKBXoyDEVkmpitIRY03fVOSCin10BaMjTVj163hr35pW%2BdPe%2FeG208UQJfWyRtdZTb0T8%2Fac%2BX%2Bgt7cvpP8BnVNr9MUzD0xqvImvG%2BRTz4bfw4HNbYMXCcltyWhTlQURudf3WO%2FRkpixFpYEdMAn8S4p0TE8C%2B3YOJqzthOUSAJzYbQr%2F%2BH%2FXEykKuQrv2aMPl9iGxJ0pdn5zZ5CmBDX2LSXT6IrNHvtNmWA4k%2B%2FCjPREL7PbLxYp8hqIyUXwXBcHYk2t6RCw3VxopRrxKvXLh9GJFt1GbmlJFrHhMSQVTkLE%2BE%2FB2FnUKbOYzfYpMKlX29T%2FnGP%2F8wxXUGkikNT3pm5ke4O3CAzrotKz8U9gdjVbbBJjhJuyaaSTJhp%2BRdynYP8IUcBc3MBYSU%2BXUvpN%2FwC6bIum79ZZwf7VFOy4bQuDmKMIX09MMGOqUBEdyWf%2F8uyWNJCqbSub09OJV0b5RcIaVVQqXlwU1%2BuhUBNesglh7oZhk6IyIavtaWHt61JV8vU95CCTVe59nLz1SP3MZuNiFsUUhAD71v88nBdJf6KHKFK0tbQOwUKQ7YkmRWTVHiShuNZDi9dL%2BIwjdBRH5cE%2F0dA3e6DwrXIvEPuSaPNLn63YGBjs1tRQLOCA8xvuU9OhONgdFIxvt%2FwTWk9Zyf&X-Amz-Signature=8cc26aaec6a88d87e78ab89b3ebbf9a0cf73189c840faeeb8c0d8445f848969c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNPZYZ6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBmAHaheHNhjBUBAIjGW%2FYAB%2BJyRNOxtvfff8S0ceVhAiEAis36653UsbebOFwkw6Tk41cVaAetfNtvNj28XFAJgnIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpx37SdSIxjUjL%2FQCrcA%2BSSdYz0FgE3zUj5o9rr4XzCsaLle7dN9wv1KPtUXI47r0In%2BlmbISvVhOJGCP1rz0tZhrEk1ByAgwdX92uiObxntXBMBCmOn%2B6qXgOkWDd608YET9An1U9ao2mAi8qFpcpXjVv5HIcSAn%2Bh7O55ho7zTaiEp2uDmq%2FZme3B2soG9%2Bb5eWsXEX%2B%2BOFsoXyEp2w%2FeE6lRrPLnZlKBXoyDEVkmpitIRY03fVOSCin10BaMjTVj163hr35pW%2BdPe%2FeG208UQJfWyRtdZTb0T8%2Fac%2BX%2Bgt7cvpP8BnVNr9MUzD0xqvImvG%2BRTz4bfw4HNbYMXCcltyWhTlQURudf3WO%2FRkpixFpYEdMAn8S4p0TE8C%2B3YOJqzthOUSAJzYbQr%2F%2BH%2FXEykKuQrv2aMPl9iGxJ0pdn5zZ5CmBDX2LSXT6IrNHvtNmWA4k%2B%2FCjPREL7PbLxYp8hqIyUXwXBcHYk2t6RCw3VxopRrxKvXLh9GJFt1GbmlJFrHhMSQVTkLE%2BE%2FB2FnUKbOYzfYpMKlX29T%2FnGP%2F8wxXUGkikNT3pm5ke4O3CAzrotKz8U9gdjVbbBJjhJuyaaSTJhp%2BRdynYP8IUcBc3MBYSU%2BXUvpN%2FwC6bIum79ZZwf7VFOy4bQuDmKMIX09MMGOqUBEdyWf%2F8uyWNJCqbSub09OJV0b5RcIaVVQqXlwU1%2BuhUBNesglh7oZhk6IyIavtaWHt61JV8vU95CCTVe59nLz1SP3MZuNiFsUUhAD71v88nBdJf6KHKFK0tbQOwUKQ7YkmRWTVHiShuNZDi9dL%2BIwjdBRH5cE%2F0dA3e6DwrXIvEPuSaPNLn63YGBjs1tRQLOCA8xvuU9OhONgdFIxvt%2FwTWk9Zyf&X-Amz-Signature=cc57ddd4257be324843b652ead0c95d614d54b10691d638f656a01c56fece4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
