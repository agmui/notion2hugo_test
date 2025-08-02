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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZGFDGM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLOdRU7USLokzIjb3gkW1F3Xvpefhhx8LNTCwvzt2IIAIgMISRMrGXlnLm0mDo2JNcUqhAiOawSVY7oUiTY%2FuPG7EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8bmo7BRFh5bG5IDSrcA6t%2BDjCypLuwHr9DUqX06u4z%2Bo7rZLsNBZDbuuUs%2BWzpP%2FHLScJaehqyjr8mzNlXx2sDHMSX%2FR9EFgIwgCr6gCLYr0%2FyVSpqLPXRV80bGP1Kqzyio7Db%2BD7VZyOw5jnQGMwRt%2FxwFLX%2FBVpJmrvxQksGCU7Qx58Y%2FgO8QRCGQtuWzwQWkSiEezxZgIYTZRrQU99nsa0TTxs87jA61jnhWD%2F9k29YCX8xCnvcH5oq8uR86lzP5MoO1OYJ8V1EOx%2FYryr6WQ8CfT7A97Yas7wLPW%2BeUmkKuMqOzTGLzvktIJdPWRtOXPGrGtMlpWel7sTubKXTty3X66Op5OBxuhh5yXBSuvsEj%2BoUv9Ckn4wVwq57UWdUdbr6X8klyw7OCRFMFttPgr1gEBmnLplL3xeQo8qtS6X807DKeWryGycSviygBhsd3thE%2FkWOFw1Vm1APkUWHzW%2B6B4qZe6ySGj0elcz6row7JaAcBUE%2FaJl7iFVv3DdcIASwiKZOSNObaTl1PCIel%2FB0lnNyMFsANx2BA7IV7Lz1qZCE%2B1jAaj7CvBTIiEEVEfoBYVVm%2BewQKykM%2Bpd%2F6nMob4I3lB0PZaOd3V2r5HmUZdZbgfje96PazAtNBIunNRfrz7tK6GlwMKjLtsQGOqUBvIzszTL52%2B1gdp3ADElnzIWgMuCY%2B%2FA7qLHKKxpoCZvHWSB1TOjQDUC84GnZpWeHEpGXVKGEf6KRMIBPAnyv07heTYBJK%2BgZClfiIT0Ikh97kboZZs1zHnD74Vkn0RW9V7aZaNSKzNlhBSF8xD09%2BBEMfXWzo0Dc3z4hHfac%2FfeDxIzuHQbCaNB2dR7Jy26ZUA2C8DXt4iNazal8d0T%2BK%2BHcPF3t&X-Amz-Signature=956262331ef80fda1db4372b3e400c220e21409d8541065cfb4beb4f03a38a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZGFDGM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLOdRU7USLokzIjb3gkW1F3Xvpefhhx8LNTCwvzt2IIAIgMISRMrGXlnLm0mDo2JNcUqhAiOawSVY7oUiTY%2FuPG7EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8bmo7BRFh5bG5IDSrcA6t%2BDjCypLuwHr9DUqX06u4z%2Bo7rZLsNBZDbuuUs%2BWzpP%2FHLScJaehqyjr8mzNlXx2sDHMSX%2FR9EFgIwgCr6gCLYr0%2FyVSpqLPXRV80bGP1Kqzyio7Db%2BD7VZyOw5jnQGMwRt%2FxwFLX%2FBVpJmrvxQksGCU7Qx58Y%2FgO8QRCGQtuWzwQWkSiEezxZgIYTZRrQU99nsa0TTxs87jA61jnhWD%2F9k29YCX8xCnvcH5oq8uR86lzP5MoO1OYJ8V1EOx%2FYryr6WQ8CfT7A97Yas7wLPW%2BeUmkKuMqOzTGLzvktIJdPWRtOXPGrGtMlpWel7sTubKXTty3X66Op5OBxuhh5yXBSuvsEj%2BoUv9Ckn4wVwq57UWdUdbr6X8klyw7OCRFMFttPgr1gEBmnLplL3xeQo8qtS6X807DKeWryGycSviygBhsd3thE%2FkWOFw1Vm1APkUWHzW%2B6B4qZe6ySGj0elcz6row7JaAcBUE%2FaJl7iFVv3DdcIASwiKZOSNObaTl1PCIel%2FB0lnNyMFsANx2BA7IV7Lz1qZCE%2B1jAaj7CvBTIiEEVEfoBYVVm%2BewQKykM%2Bpd%2F6nMob4I3lB0PZaOd3V2r5HmUZdZbgfje96PazAtNBIunNRfrz7tK6GlwMKjLtsQGOqUBvIzszTL52%2B1gdp3ADElnzIWgMuCY%2B%2FA7qLHKKxpoCZvHWSB1TOjQDUC84GnZpWeHEpGXVKGEf6KRMIBPAnyv07heTYBJK%2BgZClfiIT0Ikh97kboZZs1zHnD74Vkn0RW9V7aZaNSKzNlhBSF8xD09%2BBEMfXWzo0Dc3z4hHfac%2FfeDxIzuHQbCaNB2dR7Jy26ZUA2C8DXt4iNazal8d0T%2BK%2BHcPF3t&X-Amz-Signature=3fe132d6681340b2ab593e84539b88da3651a774458183c223af506d366475fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
