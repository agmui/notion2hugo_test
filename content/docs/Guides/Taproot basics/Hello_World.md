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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YLDA3WV%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEtym3DKSAhrFXAa0PPdtxSzv%2BrmJtyw0wtHrI6MyfuyAiEA4ociktBhReuuNpr4DNgp7wMGGjH3ROJys0P9gU%2Bh6TcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKTu8Do3%2B3rFKABxyrcAxIXlinFRgxifL8y3YBIy0JL4tuJ%2FvfQ%2BSWs5orOw%2BooY8wPZ%2FV%2B92hd0mibbjnJHWFcijPc15GJouzO%2BKAJh6prvn%2BoDU45PRuiKjILvRfpVBkjoaI38CPu%2FbplPRt9JB%2B5VgAhF%2FTyKtmTjLCU8chftrXdHaN%2BSCxR9dZ6%2BIZVaesBYSLMXVIoz8EwFqssZiugSOkrWQvO%2FKHOEEO2wyaBmYLMe%2BZhbSH6QZk9BMZ49KyxmbipmGLEr%2FDUld3wZ3I8a2nh39mB1AygjEQ9YBnDW9sJwn66Pj3bY1NEGr%2BaAoXXFkFrfFdTHGO7lXMD114DG%2Bq0dd8CU562W5gRLddPlTeSV5UuGQIrS5TFgRKgNJuzvDp3DPCLxjcuss2NEhnhCBpC0mguagfZYS4TZjw3HozB19P750LEM%2BlQpAH1I0u1wrATFna6N1XIa%2BgfSW6Z45KOaDkPmvUJzX%2BJQfpNJwINepUk5LhhGV2bStSeJi8r%2BtJYAtrtAp%2BQbgsFsQkySiJP%2FOWZxB%2B44oFTJdY5jRGWGaA%2FxCwnesFhlgPlXvmTmvlUMDztasg147I%2BcoZyieKcMZcOJNs2S3O8WsYoc1Eg%2BVJ1emqIEJ7tk6d0Pi45Z6C8RGQvC3JUMOy828oGOqUBpYboahlssE%2B%2Blk5gV9JiOgU06zhDaNiuUbgph1rQHiccX7PyaSKrCcGhI%2Faecyddo0Y97bE3Nfp8rSkrMqD3JGmuM8MTlwfCq38bAjHTmvimDAHnb7nnUeNhON2iB0LrKYi2D94Pehlo5wfdBohZDyJRIn0P6g8cA84BZxz%2BsUP7eZiqV2IctpCo1Y%2FGbeIqpMs%2FocvUyuDhkWhQzomgTntSWbc%2F&X-Amz-Signature=721cf346669863d7e4518570d72a60b01175fa869e1b2911a85f89923926a448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YLDA3WV%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEtym3DKSAhrFXAa0PPdtxSzv%2BrmJtyw0wtHrI6MyfuyAiEA4ociktBhReuuNpr4DNgp7wMGGjH3ROJys0P9gU%2Bh6TcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKTu8Do3%2B3rFKABxyrcAxIXlinFRgxifL8y3YBIy0JL4tuJ%2FvfQ%2BSWs5orOw%2BooY8wPZ%2FV%2B92hd0mibbjnJHWFcijPc15GJouzO%2BKAJh6prvn%2BoDU45PRuiKjILvRfpVBkjoaI38CPu%2FbplPRt9JB%2B5VgAhF%2FTyKtmTjLCU8chftrXdHaN%2BSCxR9dZ6%2BIZVaesBYSLMXVIoz8EwFqssZiugSOkrWQvO%2FKHOEEO2wyaBmYLMe%2BZhbSH6QZk9BMZ49KyxmbipmGLEr%2FDUld3wZ3I8a2nh39mB1AygjEQ9YBnDW9sJwn66Pj3bY1NEGr%2BaAoXXFkFrfFdTHGO7lXMD114DG%2Bq0dd8CU562W5gRLddPlTeSV5UuGQIrS5TFgRKgNJuzvDp3DPCLxjcuss2NEhnhCBpC0mguagfZYS4TZjw3HozB19P750LEM%2BlQpAH1I0u1wrATFna6N1XIa%2BgfSW6Z45KOaDkPmvUJzX%2BJQfpNJwINepUk5LhhGV2bStSeJi8r%2BtJYAtrtAp%2BQbgsFsQkySiJP%2FOWZxB%2B44oFTJdY5jRGWGaA%2FxCwnesFhlgPlXvmTmvlUMDztasg147I%2BcoZyieKcMZcOJNs2S3O8WsYoc1Eg%2BVJ1emqIEJ7tk6d0Pi45Z6C8RGQvC3JUMOy828oGOqUBpYboahlssE%2B%2Blk5gV9JiOgU06zhDaNiuUbgph1rQHiccX7PyaSKrCcGhI%2Faecyddo0Y97bE3Nfp8rSkrMqD3JGmuM8MTlwfCq38bAjHTmvimDAHnb7nnUeNhON2iB0LrKYi2D94Pehlo5wfdBohZDyJRIn0P6g8cA84BZxz%2BsUP7eZiqV2IctpCo1Y%2FGbeIqpMs%2FocvUyuDhkWhQzomgTntSWbc%2F&X-Amz-Signature=ad77bebe6a34e177dbe645c9241d7aee6cc3273d302196f8673264a576bc76c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
