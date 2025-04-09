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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL54MYAV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCFjYVm%2FZVWcKvcpt4nwUiLpAAj08OnpR7OCQMEovA%2BSQIgCR4XXz2FpB0G8JMcCjbyA%2F5SiaU6QVuUR%2B2ctN82LFYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKJbR7yPkZDfyiPPircAwzQHqzOFCf1Nxl2gDNzYxLYNjDJWnSfiWU6HTiAgaL7dspE0hbzHYXUyPUAJ98%2BnB1OewKrh%2BamaDQeueTCFTsdBdIf9poGPto0bhihbZgn7ICdwo%2FqJ4ZbPfuQfhQC%2BT9q4zk2CKrU8%2Fp%2Br4q3I1v7BkQRtRe6xNbDyfrfYu1LOUqfcEvC%2B8DsLAQUBttRerDY0JGZSNUoCOPH3Nqiv5ihzOvd6eXNco5mQkuFWVG2IkDUuzErsCBgS4luaWlk2YYCVp0btDv%2BWYXWmxsOTBGkSQpqjbdFFTS9L3ggKszLttv88B92qCc2LtmrT%2BwXbWeelnnWtV%2BVwXoiVlL3H4sLfj59hB2zzJukj44sOB1fUdzzHW8F1zkMpWU1K8LiEHe4lRbf5LuSQItcKDDxiKbVeVyNT3jjcYIy8X7Y5cHnZZpR37j%2Bnfat4c%2B3LynBFEkw784w%2FVw%2F48RAuyrp19be6AYhK%2BdZrnaz%2B3Yj6d3R3KhpSgSs9Zz3fVSKObmcW3%2Faqxw%2BUgv%2F8puJpx9qivBOpSa5GOh3LETiQbaYwCAu8355tFECDXNm5NHWE3eQ80oFWb0eA0pePEh61qA8lWBYAwowsOfcfHG0YwFvAgqYPHR2vAMlq3FuHNxdMKnJ2r8GOqUBPC4zJi6OWj%2BAJRiLdZ6y9oNAJys5rRdvWosFI0LEzlboEDSD9nvZaE35VmOA9B3U%2FHJ%2FCMZNLFy24vJPQ7RuvJOcWuSJqsCpn5w13qZ9l%2BACUX77PAHwKUMs8akectKFeIHnz%2FLI%2FE%2FEKix5yY4ilcUyOAJMsCuKIBasLuBgQE7WENfGr%2FomI2rYT4NbFpjhEsG2CD3a7qRxJDCXElvEtqVEi7W8&X-Amz-Signature=203f5dde17a88715ba1bddef77923f3fa53af2dd74dc1532daee34f9d774db82&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL54MYAV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCFjYVm%2FZVWcKvcpt4nwUiLpAAj08OnpR7OCQMEovA%2BSQIgCR4XXz2FpB0G8JMcCjbyA%2F5SiaU6QVuUR%2B2ctN82LFYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKJbR7yPkZDfyiPPircAwzQHqzOFCf1Nxl2gDNzYxLYNjDJWnSfiWU6HTiAgaL7dspE0hbzHYXUyPUAJ98%2BnB1OewKrh%2BamaDQeueTCFTsdBdIf9poGPto0bhihbZgn7ICdwo%2FqJ4ZbPfuQfhQC%2BT9q4zk2CKrU8%2Fp%2Br4q3I1v7BkQRtRe6xNbDyfrfYu1LOUqfcEvC%2B8DsLAQUBttRerDY0JGZSNUoCOPH3Nqiv5ihzOvd6eXNco5mQkuFWVG2IkDUuzErsCBgS4luaWlk2YYCVp0btDv%2BWYXWmxsOTBGkSQpqjbdFFTS9L3ggKszLttv88B92qCc2LtmrT%2BwXbWeelnnWtV%2BVwXoiVlL3H4sLfj59hB2zzJukj44sOB1fUdzzHW8F1zkMpWU1K8LiEHe4lRbf5LuSQItcKDDxiKbVeVyNT3jjcYIy8X7Y5cHnZZpR37j%2Bnfat4c%2B3LynBFEkw784w%2FVw%2F48RAuyrp19be6AYhK%2BdZrnaz%2B3Yj6d3R3KhpSgSs9Zz3fVSKObmcW3%2Faqxw%2BUgv%2F8puJpx9qivBOpSa5GOh3LETiQbaYwCAu8355tFECDXNm5NHWE3eQ80oFWb0eA0pePEh61qA8lWBYAwowsOfcfHG0YwFvAgqYPHR2vAMlq3FuHNxdMKnJ2r8GOqUBPC4zJi6OWj%2BAJRiLdZ6y9oNAJys5rRdvWosFI0LEzlboEDSD9nvZaE35VmOA9B3U%2FHJ%2FCMZNLFy24vJPQ7RuvJOcWuSJqsCpn5w13qZ9l%2BACUX77PAHwKUMs8akectKFeIHnz%2FLI%2FE%2FEKix5yY4ilcUyOAJMsCuKIBasLuBgQE7WENfGr%2FomI2rYT4NbFpjhEsG2CD3a7qRxJDCXElvEtqVEi7W8&X-Amz-Signature=6e31396cb68fbe479dd246eb75319e8a5a05d784440e02a3b005ac2dec6e8c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
