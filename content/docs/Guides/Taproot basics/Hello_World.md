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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTBWCWG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQClXUCrxxN0FVrrAFiZ0a10tAPiKossh7G83hVEY8VfUgIgZqrIuJUGqLsJ%2BCYilupMHXiRp4464pyW5AMc5JRgYr4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrHviE4YvJDU6O4tircA3dz3%2BF9wuhmROcibUDEZz8QxrJskzL4sxi9qRGMHhuSvJhdekXB5h05wkQ2e9ax6EgmG2ck5BkwXZg27%2BjZpJeDNX%2Fp8YLRwcVnZFk4Zcujg7t8fyVI74I%2FUpx1nt8Jryy6lnPigMJs8Gvluo83kmPXeDcaCp9OpQPFLP3OTUa3jCdqsn6MPzRGz%2Ff9uO9cM0HusE1uelvJfDG94iwZ21i9Mej1B8hwKy%2B06SW2nCCQPKd%2B6kA2DpR9x8Afkh7uYwky%2BBBDg3eoBjiGilQyR9rhnzNDpBxJJCG3FcHh%2FnTR2essDnpaSoL%2BfAtMt0%2Fco9Rrg2y2qpIbq582WnzOAzDZblT0gSKGXO0pWNMcU5rhuVYPwx0kn04eGrzjFe0kxrV5JgAt21KSbySbdDgCSKwbiGCsyyqzt%2ByOTojP6gNaNbM%2B04m1IJy%2BuSVKCB1mKSKBmyM7ZGXdQr9qSti9yGUerGdiPsrVjDFSIQhJToVwep1pfxXqV1GdRkiVyCXqXXeSW2ZxB%2BQRw4IiSd7pkYVmhu3Wd4XGH7BYi8idkEUkfoOAHnnIykAD9aD6w3ZWfVqeMzmMmVi%2FyYnPEg0Y%2F1kE8dn4%2F90Eu9uc00TUw7h4pnzdUNKF4dbonVcgMOnr3r8GOqUBypNUCyhVamo3u6DDWfzZcIMpMySSSnqwE7MOeME2NVVNm0c78LC6KBMzb0urJ3N397lwzPwylY8HO%2FgQ%2Bmhm6ZdY9NPUnSftXVAtQo8OfWcWraYPrI6bPwy7tn6OdcTSdSouBXyHY3xxNCiV8%2FdRYeqN%2BI9Qg%2B9r8tjppAFmUioUX1fUM2LZFLk0Uk3LXkAkv5NOHcFnaKnNiiYhMsdoGeXgJ7U7&X-Amz-Signature=e1ea570169c39d5e12d6bf3966e4f39b6754ed30e7a127ee8331cef3faeb1e00&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTBWCWG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQClXUCrxxN0FVrrAFiZ0a10tAPiKossh7G83hVEY8VfUgIgZqrIuJUGqLsJ%2BCYilupMHXiRp4464pyW5AMc5JRgYr4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrHviE4YvJDU6O4tircA3dz3%2BF9wuhmROcibUDEZz8QxrJskzL4sxi9qRGMHhuSvJhdekXB5h05wkQ2e9ax6EgmG2ck5BkwXZg27%2BjZpJeDNX%2Fp8YLRwcVnZFk4Zcujg7t8fyVI74I%2FUpx1nt8Jryy6lnPigMJs8Gvluo83kmPXeDcaCp9OpQPFLP3OTUa3jCdqsn6MPzRGz%2Ff9uO9cM0HusE1uelvJfDG94iwZ21i9Mej1B8hwKy%2B06SW2nCCQPKd%2B6kA2DpR9x8Afkh7uYwky%2BBBDg3eoBjiGilQyR9rhnzNDpBxJJCG3FcHh%2FnTR2essDnpaSoL%2BfAtMt0%2Fco9Rrg2y2qpIbq582WnzOAzDZblT0gSKGXO0pWNMcU5rhuVYPwx0kn04eGrzjFe0kxrV5JgAt21KSbySbdDgCSKwbiGCsyyqzt%2ByOTojP6gNaNbM%2B04m1IJy%2BuSVKCB1mKSKBmyM7ZGXdQr9qSti9yGUerGdiPsrVjDFSIQhJToVwep1pfxXqV1GdRkiVyCXqXXeSW2ZxB%2BQRw4IiSd7pkYVmhu3Wd4XGH7BYi8idkEUkfoOAHnnIykAD9aD6w3ZWfVqeMzmMmVi%2FyYnPEg0Y%2F1kE8dn4%2F90Eu9uc00TUw7h4pnzdUNKF4dbonVcgMOnr3r8GOqUBypNUCyhVamo3u6DDWfzZcIMpMySSSnqwE7MOeME2NVVNm0c78LC6KBMzb0urJ3N397lwzPwylY8HO%2FgQ%2Bmhm6ZdY9NPUnSftXVAtQo8OfWcWraYPrI6bPwy7tn6OdcTSdSouBXyHY3xxNCiV8%2FdRYeqN%2BI9Qg%2B9r8tjppAFmUioUX1fUM2LZFLk0Uk3LXkAkv5NOHcFnaKnNiiYhMsdoGeXgJ7U7&X-Amz-Signature=1defb5e67ce5f62135e7efb0005f6198ed729cff8271fc661b22470f4dec4b56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
