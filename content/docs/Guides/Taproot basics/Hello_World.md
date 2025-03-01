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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IMBYFL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDEZPdhS%2FVjqw9p0yWl7MpblZ2CPiFVHxV7XF9TOdbWJAIhAIcsRHsILigMidNMHxvFM1B3EcA8TBnK9NAl4N%2BfLaSfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqoPhl2aY24r3LPDMq3AOob7Fet4Yx%2Br5UEubNV29KPy1wPkoI6wbZwnH8thebOmChV3euK3Bx7KDqCh4ao6Eo%2BHd03ItkHruWhhSb4Xup%2BwA16Zcpp6jjHq6MOYhTjQX%2F68awvJyjzrdstae4Rzo3cMk1j3BnsxuLVbYQYYSDsda1xJNoWpdmVviJYXe%2Fj4aH8F00Da0r2g09uT%2Fn84g%2BLiWyF8%2FJnIkMpGCioOq4H6EX5Bz%2BnxQsMU%2BnNUglryY%2FVylZKuWHWugxGOm1cIUyGSlHUWp8gy1X5EXxsjcoPoqJaRzwXx73Hx6GeNKExbeMFltR90XVSLra2rkBzPo%2BO9sNYy1ZPJ7LjeJgiIYZM7hSPDYCIpCdGz8SamufGC45YCkfsuP8WboscD4KaK%2BnJKJYEwgySGi79E72xMBaCahBLhM8hR5G%2FS9uq86CRRHEmp9AoMoVtRRcsVE5PEciIYq4CYWl0ZCP4%2B1%2BREsWpE9aKJ4LPPqTKWxHHIwhtm9uPlfgHJzKFZMOm8NOY93%2B61iCaScP3Xp%2BBPYsy4MRVT5sfUpt6kYE06v9L8EOSlXGG30nZv%2BPkJFL0zy3WFMP918utwuRglboKwB%2Bc%2B2H9SGyXWnLjpZKgMibxnmIMXP9J57urMlqQirOxDDkkIq%2BBjqkAcxXOVKud%2F%2FstyYCLoTrlbIkBpkoFdvqgPd9crLQgwWgalld4GNNkcLBLBOKg1ALfACtpoowBMmOQYNKPp6b%2BkOWxBxxsB4oT%2FeWsyHGFL2rD0jW75PddrfYcmDxvNrwDnKpsZUXDlKwVRVVx87Sv98vcmHNfP%2F7psBTNVY5%2BuXPnLNri5pfknE6C8SRBJ8%2Bi1SUqxo3JINV%2FiJ%2BoPG0kmALpmVc&X-Amz-Signature=310afe67faf6e20f79a992dc9f9942b4f60fb18957e7eddc82526b6b01fcd57f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IMBYFL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDEZPdhS%2FVjqw9p0yWl7MpblZ2CPiFVHxV7XF9TOdbWJAIhAIcsRHsILigMidNMHxvFM1B3EcA8TBnK9NAl4N%2BfLaSfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqoPhl2aY24r3LPDMq3AOob7Fet4Yx%2Br5UEubNV29KPy1wPkoI6wbZwnH8thebOmChV3euK3Bx7KDqCh4ao6Eo%2BHd03ItkHruWhhSb4Xup%2BwA16Zcpp6jjHq6MOYhTjQX%2F68awvJyjzrdstae4Rzo3cMk1j3BnsxuLVbYQYYSDsda1xJNoWpdmVviJYXe%2Fj4aH8F00Da0r2g09uT%2Fn84g%2BLiWyF8%2FJnIkMpGCioOq4H6EX5Bz%2BnxQsMU%2BnNUglryY%2FVylZKuWHWugxGOm1cIUyGSlHUWp8gy1X5EXxsjcoPoqJaRzwXx73Hx6GeNKExbeMFltR90XVSLra2rkBzPo%2BO9sNYy1ZPJ7LjeJgiIYZM7hSPDYCIpCdGz8SamufGC45YCkfsuP8WboscD4KaK%2BnJKJYEwgySGi79E72xMBaCahBLhM8hR5G%2FS9uq86CRRHEmp9AoMoVtRRcsVE5PEciIYq4CYWl0ZCP4%2B1%2BREsWpE9aKJ4LPPqTKWxHHIwhtm9uPlfgHJzKFZMOm8NOY93%2B61iCaScP3Xp%2BBPYsy4MRVT5sfUpt6kYE06v9L8EOSlXGG30nZv%2BPkJFL0zy3WFMP918utwuRglboKwB%2Bc%2B2H9SGyXWnLjpZKgMibxnmIMXP9J57urMlqQirOxDDkkIq%2BBjqkAcxXOVKud%2F%2FstyYCLoTrlbIkBpkoFdvqgPd9crLQgwWgalld4GNNkcLBLBOKg1ALfACtpoowBMmOQYNKPp6b%2BkOWxBxxsB4oT%2FeWsyHGFL2rD0jW75PddrfYcmDxvNrwDnKpsZUXDlKwVRVVx87Sv98vcmHNfP%2F7psBTNVY5%2BuXPnLNri5pfknE6C8SRBJ8%2Bi1SUqxo3JINV%2FiJ%2BoPG0kmALpmVc&X-Amz-Signature=db0f7533c07add16f2fbe1f025c97b1704f1beb43d1d1a44c5f87056c99256df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
