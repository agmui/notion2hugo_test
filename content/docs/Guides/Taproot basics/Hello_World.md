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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2ZVYHU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW%2BgDiPeWi4NVkkzMK8LFEdOB2uwTkelMD8PSOTdC3JAiAj4wgzAJ6a%2F0AepQ%2FTvUs4%2BS7i3dtZbHe%2BEpFxMA649Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMtb1MLvMTY3UTEBOVKtwDrpPDByhQMiaqr%2BBHEPUJmEa9A3ElZUZm8k7LgCB%2FCc5yd2a4STn%2Bmr1PCeuEWe5eHHCJvO63o3B9%2BNgBPEo6AN48MiSk5ONeEsqosyJARb%2FFugt46KT0mIFTpcp1YLz7Uvietnf8aEs5PYrGj0oScPU5zUtjdgSaey085lUDcEKSygrOxarIqouO1FHn%2FyF6g8EubhWLjFLaTWdnxs%2Foua6mYneb3zJgcUP%2BJWQv4XD2eL9l0jQZBozmlUI53uFo3mwwN3vDdZFk4ebQlVYWWrKMnzIpYCouMsgiE65%2F8772HaJGqSfl%2FltjIs7JkKXd1Ac2icuPH9cF5hGBQiaLu2ANqsQ3fcUaU8PVDFGReHleHdw8ncgUqwHrvC1kw2F6K4gppDn%2FeQQEZV6A0qGymJs40nRKWpq0XMrybkU%2FLdcxxDgn%2BsL67qGNQ33%2B%2BJq91k8ZajXGXf38Q70Xk373mnqZMi0DKYaIPLbGrwbHGjNOgpCo%2F3UrMkv3%2BHtMeum6eplmOGW0ZF9%2FDo10Bm5zM46LPYO9GdvmBKc7i%2BvTtsV3fXkzav3FIkhi2ywtJP5QfiYxAO33vQlvq25v1sim%2Fuo3zmIkL2HzBG6g9QAR5D5n%2Begdes%2B%2F3%2FuF%2BEow8smswAY6pgEBT438xXap3Dej2whEUVSrS6Jbfsr9UUMJCidODJDhVxuAUOPFvIVqvsVaGiFraJauYSklr7KvQa8uAiBSPb0f%2Bn0KrNK8zBZyhP6VfP%2BdXbnkdnF73bdr8sk%2BH89DdFKvSc1nH%2BWDugYz1NLBOI3rL00dpPLZM3UlIvmXIT9VmBiGu%2F6qcOZq0qauECSaAkgDeQzCSrDy9icYiYzByg2nK8OyKTW4&X-Amz-Signature=b5ab155a4a12380704b378d7177c7bf8602dd469ca4994f1f104f9599076daca&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2ZVYHU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW%2BgDiPeWi4NVkkzMK8LFEdOB2uwTkelMD8PSOTdC3JAiAj4wgzAJ6a%2F0AepQ%2FTvUs4%2BS7i3dtZbHe%2BEpFxMA649Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMtb1MLvMTY3UTEBOVKtwDrpPDByhQMiaqr%2BBHEPUJmEa9A3ElZUZm8k7LgCB%2FCc5yd2a4STn%2Bmr1PCeuEWe5eHHCJvO63o3B9%2BNgBPEo6AN48MiSk5ONeEsqosyJARb%2FFugt46KT0mIFTpcp1YLz7Uvietnf8aEs5PYrGj0oScPU5zUtjdgSaey085lUDcEKSygrOxarIqouO1FHn%2FyF6g8EubhWLjFLaTWdnxs%2Foua6mYneb3zJgcUP%2BJWQv4XD2eL9l0jQZBozmlUI53uFo3mwwN3vDdZFk4ebQlVYWWrKMnzIpYCouMsgiE65%2F8772HaJGqSfl%2FltjIs7JkKXd1Ac2icuPH9cF5hGBQiaLu2ANqsQ3fcUaU8PVDFGReHleHdw8ncgUqwHrvC1kw2F6K4gppDn%2FeQQEZV6A0qGymJs40nRKWpq0XMrybkU%2FLdcxxDgn%2BsL67qGNQ33%2B%2BJq91k8ZajXGXf38Q70Xk373mnqZMi0DKYaIPLbGrwbHGjNOgpCo%2F3UrMkv3%2BHtMeum6eplmOGW0ZF9%2FDo10Bm5zM46LPYO9GdvmBKc7i%2BvTtsV3fXkzav3FIkhi2ywtJP5QfiYxAO33vQlvq25v1sim%2Fuo3zmIkL2HzBG6g9QAR5D5n%2Begdes%2B%2F3%2FuF%2BEow8smswAY6pgEBT438xXap3Dej2whEUVSrS6Jbfsr9UUMJCidODJDhVxuAUOPFvIVqvsVaGiFraJauYSklr7KvQa8uAiBSPb0f%2Bn0KrNK8zBZyhP6VfP%2BdXbnkdnF73bdr8sk%2BH89DdFKvSc1nH%2BWDugYz1NLBOI3rL00dpPLZM3UlIvmXIT9VmBiGu%2F6qcOZq0qauECSaAkgDeQzCSrDy9icYiYzByg2nK8OyKTW4&X-Amz-Signature=04094e24bcdf711770df92eb0c43eb3ec592adde2aa03cc0e37f4810b2136a04&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
