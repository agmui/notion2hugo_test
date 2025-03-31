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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLKNQ5U%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDJG04zpgIpQbEG%2BCB9y6bi%2BOSXgbehefIvU57Cx6xtZQIgLAUsmcwe%2BrVGSYWqv%2FgVFAaIoJN3OX7RbVJ2HhrOIGMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYa3eXX40jxAneiiircAy72SQXV6eoaQLAXeCuxZpbwRoTWZL2PewerZGjgc%2FM6O4q6Jvf5Qx%2FIaQdTZQ9M2ibKxJLRPlQ35PAnzauLTwhEIyARtCg25hzFLl8Kc%2FTREyvKp8m5Er%2F1MAZw1mplXwXQ4HY%2F9RvM9kNf2rs7D45vbaLrZ%2B02zZMOZJ%2B9Hob7GL6oADyRBPjRIbdWA60ToBOPZ3TnYZh5FBrsrYVXJWblbww7uI3zc1PmaSfG793Pdj8SpSiSHODWiAsVUHg7xNzJGmk3HqiUKRcbjPmt4RPCIXva442en%2BNf8pHd7u343gZtWgMNSiMa%2B386RECzYzjGY2hieA3fRhcP%2B3m%2FRMz5t5JFAa1OG6LY1GaKEj1nshMEmfZmbSdQZXBT%2Fad5iQIhbUF22UZmxeIl8Xzy%2Fqbnkz%2FxwfkMjHpDfqP1GnvcdUmqMKxyx%2FbfUMxnZ%2FhbjFKe4GmCgBwfRPtcIokUAiwqigiU2Oe7BdplV57uhUWk0y29i2teH8X9nyj3MVwGCPA2X7edj64%2BrTdyXUNtaRupLLTcopa77rr8SSso5SppXOi7lAnI30zdtE5xnbuHKl1k9mI2vvGXkObmwZ0lebtRTUQuTtzl%2FJOJUpqSLtf6HgDca5NE6ag2fL87MPfnqr8GOqUBQYYtdXO%2BxCLL5VsrhyrR%2F33opGcEzjHCSUnJcoGSg8ktsTZ1T1ssSi7UVjVXZPnmEKh0T9GtdH5Lys%2FKjc7V87sl%2FudmkmFv%2BCjGT5JXJPdO%2FrELUk7q69sJyDf9vgig8iO7B0Ag3e0xu5jS%2Bwd2VonAeqvVFfSn7yTBMATE%2BqeQg3gOaQdns7ntgQ9NKZrrNjOKthlC97o3ulUU7JS485wF6l3F&X-Amz-Signature=f1bb7c8b9511a20d8946215819fa0c0db558d27f8b8a7dbae4e0647b21ebb7d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLKNQ5U%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDJG04zpgIpQbEG%2BCB9y6bi%2BOSXgbehefIvU57Cx6xtZQIgLAUsmcwe%2BrVGSYWqv%2FgVFAaIoJN3OX7RbVJ2HhrOIGMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYa3eXX40jxAneiiircAy72SQXV6eoaQLAXeCuxZpbwRoTWZL2PewerZGjgc%2FM6O4q6Jvf5Qx%2FIaQdTZQ9M2ibKxJLRPlQ35PAnzauLTwhEIyARtCg25hzFLl8Kc%2FTREyvKp8m5Er%2F1MAZw1mplXwXQ4HY%2F9RvM9kNf2rs7D45vbaLrZ%2B02zZMOZJ%2B9Hob7GL6oADyRBPjRIbdWA60ToBOPZ3TnYZh5FBrsrYVXJWblbww7uI3zc1PmaSfG793Pdj8SpSiSHODWiAsVUHg7xNzJGmk3HqiUKRcbjPmt4RPCIXva442en%2BNf8pHd7u343gZtWgMNSiMa%2B386RECzYzjGY2hieA3fRhcP%2B3m%2FRMz5t5JFAa1OG6LY1GaKEj1nshMEmfZmbSdQZXBT%2Fad5iQIhbUF22UZmxeIl8Xzy%2Fqbnkz%2FxwfkMjHpDfqP1GnvcdUmqMKxyx%2FbfUMxnZ%2FhbjFKe4GmCgBwfRPtcIokUAiwqigiU2Oe7BdplV57uhUWk0y29i2teH8X9nyj3MVwGCPA2X7edj64%2BrTdyXUNtaRupLLTcopa77rr8SSso5SppXOi7lAnI30zdtE5xnbuHKl1k9mI2vvGXkObmwZ0lebtRTUQuTtzl%2FJOJUpqSLtf6HgDca5NE6ag2fL87MPfnqr8GOqUBQYYtdXO%2BxCLL5VsrhyrR%2F33opGcEzjHCSUnJcoGSg8ktsTZ1T1ssSi7UVjVXZPnmEKh0T9GtdH5Lys%2FKjc7V87sl%2FudmkmFv%2BCjGT5JXJPdO%2FrELUk7q69sJyDf9vgig8iO7B0Ag3e0xu5jS%2Bwd2VonAeqvVFfSn7yTBMATE%2BqeQg3gOaQdns7ntgQ9NKZrrNjOKthlC97o3ulUU7JS485wF6l3F&X-Amz-Signature=dacd38b9d0cbb538844a1a602366f2a6ee3c3a52e2015d0b0400ddc02eb643e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
