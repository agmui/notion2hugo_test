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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7SANEK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYCE6rdcF3SwhSaBefIohtslBqsHaoh3J5exygdSAJWwIhALrfZKE43OO7U5umJZ8jhpVDBGFxOErAFfTFFVTcGrftKv8DCBkQABoMNjM3NDIzMTgzODA1IgxS36hUrNamg2S6mQAq3APXS7Mtu%2FBEIb%2FNG7yRxoQVgjBHoYFCqn%2Fd4Cy0KyMuQvn%2FkIVgUbS8SR6NmwUeFCb%2BpjVn1WCc6x1wpsUCizBrRSkRYGGY2N0xOLemMDDfmIUN5XRVVpSMTZxqRnNvh%2FJaJ7%2BUdYyB3dK%2BOyszGiGdMUvU348uer%2F9y0vamJUcnVYBKLHq2Y4tRf6NiQs3NqWBAeKJVWk5ApkvSP1fNVd24BY0UIOgTJp0FJuDWDqGg4SAwegWiGOr3%2BbPKrm4pRFxkVqvl2g%2F268CtvCsGrmC7oztNqi8al99a9PcWzxnbe6WOk%2F2vhbF%2BaxC6qeK3EhMgQRwc%2B7adGexkFsIgnBMwsIloBz06R3tkJVy%2BYO2PkAqRwWwRr9%2BOSavPIFK8GncicGphMxQ%2BC5oGkTyviE09DmIwvYVG8%2Ft2b49Hn6LVEkEDGNcT9894DylJYT12a4%2BdyO1yk1evJAGXYD23ExIvVd1AfWmnl3gR1QUAjg876rAW5Yw942mDeIF9b82KMbmPkW0DiJuHeAkxAh44hAcGEKpVKB3DzsSEfYQIGPoSmNhzfQfHswZDyPqDToQTHsPXMRYS0RA4LlvYE53LcQ%2Fgf1mNPkxShhTRDGXg1uyAzpAvjaSY7dDPz5jzDDzo4u%2FBjqkAXvS%2Bzbu47Va%2FHaEEvHgcZK48m1VG%2F5j99JaPkLIBNyCPWcWfxaK7C9jJ69RN6vrmFbIC9MhHzD5IANgP7gNZjbpxFCjMUWXG4e7sAjaJDh%2FfXhzntIzQgCo5J83HE9kPCHNPshuOcmpdp%2F7dS9pXV4dG1lNc77XmAg7Ui79UDtC8zJmX6CEoJ1j8WSb0afAxaLyPAFVnAm5gMlIuJwzz6%2BcoSE%2F&X-Amz-Signature=899d5a10807b96415095301960fdd6b1bcb9a63efb6ccc4055c4016639459729&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7SANEK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYCE6rdcF3SwhSaBefIohtslBqsHaoh3J5exygdSAJWwIhALrfZKE43OO7U5umJZ8jhpVDBGFxOErAFfTFFVTcGrftKv8DCBkQABoMNjM3NDIzMTgzODA1IgxS36hUrNamg2S6mQAq3APXS7Mtu%2FBEIb%2FNG7yRxoQVgjBHoYFCqn%2Fd4Cy0KyMuQvn%2FkIVgUbS8SR6NmwUeFCb%2BpjVn1WCc6x1wpsUCizBrRSkRYGGY2N0xOLemMDDfmIUN5XRVVpSMTZxqRnNvh%2FJaJ7%2BUdYyB3dK%2BOyszGiGdMUvU348uer%2F9y0vamJUcnVYBKLHq2Y4tRf6NiQs3NqWBAeKJVWk5ApkvSP1fNVd24BY0UIOgTJp0FJuDWDqGg4SAwegWiGOr3%2BbPKrm4pRFxkVqvl2g%2F268CtvCsGrmC7oztNqi8al99a9PcWzxnbe6WOk%2F2vhbF%2BaxC6qeK3EhMgQRwc%2B7adGexkFsIgnBMwsIloBz06R3tkJVy%2BYO2PkAqRwWwRr9%2BOSavPIFK8GncicGphMxQ%2BC5oGkTyviE09DmIwvYVG8%2Ft2b49Hn6LVEkEDGNcT9894DylJYT12a4%2BdyO1yk1evJAGXYD23ExIvVd1AfWmnl3gR1QUAjg876rAW5Yw942mDeIF9b82KMbmPkW0DiJuHeAkxAh44hAcGEKpVKB3DzsSEfYQIGPoSmNhzfQfHswZDyPqDToQTHsPXMRYS0RA4LlvYE53LcQ%2Fgf1mNPkxShhTRDGXg1uyAzpAvjaSY7dDPz5jzDDzo4u%2FBjqkAXvS%2Bzbu47Va%2FHaEEvHgcZK48m1VG%2F5j99JaPkLIBNyCPWcWfxaK7C9jJ69RN6vrmFbIC9MhHzD5IANgP7gNZjbpxFCjMUWXG4e7sAjaJDh%2FfXhzntIzQgCo5J83HE9kPCHNPshuOcmpdp%2F7dS9pXV4dG1lNc77XmAg7Ui79UDtC8zJmX6CEoJ1j8WSb0afAxaLyPAFVnAm5gMlIuJwzz6%2BcoSE%2F&X-Amz-Signature=c8c88e01d253e8f9a1053a8365d5091f6b5a720d0803986a3606788dc744a08c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
