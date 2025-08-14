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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URYMTGS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH7ZrdEwKrsh5qh%2FnhtLSrA3tJ54f%2Fy4zdNRxQzDwTWHAiB7H616l23t5HSmOTQ0OkyTT9Jx1n3neVhr79Vogz0uyir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2RCCYVTDe5cmtLEnKtwDeqP45M9KD9qGmeSSZmHTP2Uu0mTffKnn0Dig6Z5Zp0CNpoGNUU5cZHOcOzFzLo0xKFE3D4yo1n1kQCJebnxRMCMLD0HVGpRzfQyfSSrAZkuGlP7dxMuYwl77DL3XXRLb3ctKC1fj6eKuxCDo5shfRsEVFvqaLKlWea40%2B1v2hT4C2UaLp5TMzw75OJ%2BU0GCo%2FvR4qXCN7VDKI%2Bfup87Bs0ZMRgcpwlpNjhkpiM%2BDnDq%2Bus4MDznTbMXReUbkLE0AYVcUuCKubrshKMrwYnGsZoI80KSqqQYqUumx%2BJETa2lQcp4Al%2FVdjIOvaF4x0sdL7mkYAouXx%2FtWTLHRhOhO0pNWLGETvW5Kn7VbW72Qxc6Hxgg%2Bha5KD5vOIf44eTswm4x8g%2BP9lSaWbPST%2FrwF%2BEJCMOzsF6RWfZtisEhmv2tWQKpmJ0ZvGzn4Q%2FsmZLpxsTGfsjuynySl%2BQhYmhxbGtsi6PKfvpoNGSjRi2uuE03a1ttKl4cgXr6yXwg7ertmDijn7ncbA7T%2BZJXgSmV8TGlGgSvlvxWzoxveySm5xnFq5voTbho%2BhtWF2MEypcYiwVu8%2FdcBha2jYZXxpWivai3z0Xngs6WDaJMp1HrGFgYZTdr15s01b8CM2V8wvuj4xAY6pgFU4%2Bnn1qRV76wtWm7DHtrsYZdecQAtaedF1HAa3OAY8Er8VzKAOxUveHGn1Y7Jt8S18f5kR2T%2B0mB66Nhf88uO1hTvlK1qgFsO%2BrcJHwLQyebappIGJMNr%2FatISMHb7H%2FLocx1J0x3cpDAfgVVkkjLKJpzD1vySS1wyk13zIK4fWb8UT2v%2BVgvx%2FJWQsBqfwx4f%2Fgx54zN%2FVg37KiKf9Gk7VzxmrTU&X-Amz-Signature=de3dc020f26c8fa00c3a6099b4041085dc183de86b348fd90edbdb54aa8c392f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URYMTGS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH7ZrdEwKrsh5qh%2FnhtLSrA3tJ54f%2Fy4zdNRxQzDwTWHAiB7H616l23t5HSmOTQ0OkyTT9Jx1n3neVhr79Vogz0uyir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2RCCYVTDe5cmtLEnKtwDeqP45M9KD9qGmeSSZmHTP2Uu0mTffKnn0Dig6Z5Zp0CNpoGNUU5cZHOcOzFzLo0xKFE3D4yo1n1kQCJebnxRMCMLD0HVGpRzfQyfSSrAZkuGlP7dxMuYwl77DL3XXRLb3ctKC1fj6eKuxCDo5shfRsEVFvqaLKlWea40%2B1v2hT4C2UaLp5TMzw75OJ%2BU0GCo%2FvR4qXCN7VDKI%2Bfup87Bs0ZMRgcpwlpNjhkpiM%2BDnDq%2Bus4MDznTbMXReUbkLE0AYVcUuCKubrshKMrwYnGsZoI80KSqqQYqUumx%2BJETa2lQcp4Al%2FVdjIOvaF4x0sdL7mkYAouXx%2FtWTLHRhOhO0pNWLGETvW5Kn7VbW72Qxc6Hxgg%2Bha5KD5vOIf44eTswm4x8g%2BP9lSaWbPST%2FrwF%2BEJCMOzsF6RWfZtisEhmv2tWQKpmJ0ZvGzn4Q%2FsmZLpxsTGfsjuynySl%2BQhYmhxbGtsi6PKfvpoNGSjRi2uuE03a1ttKl4cgXr6yXwg7ertmDijn7ncbA7T%2BZJXgSmV8TGlGgSvlvxWzoxveySm5xnFq5voTbho%2BhtWF2MEypcYiwVu8%2FdcBha2jYZXxpWivai3z0Xngs6WDaJMp1HrGFgYZTdr15s01b8CM2V8wvuj4xAY6pgFU4%2Bnn1qRV76wtWm7DHtrsYZdecQAtaedF1HAa3OAY8Er8VzKAOxUveHGn1Y7Jt8S18f5kR2T%2B0mB66Nhf88uO1hTvlK1qgFsO%2BrcJHwLQyebappIGJMNr%2FatISMHb7H%2FLocx1J0x3cpDAfgVVkkjLKJpzD1vySS1wyk13zIK4fWb8UT2v%2BVgvx%2FJWQsBqfwx4f%2Fgx54zN%2FVg37KiKf9Gk7VzxmrTU&X-Amz-Signature=6ac2b61428324267a6d29cc9402e8ded93d76040235b2e097659fa43bc43dc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
