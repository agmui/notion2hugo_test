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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGCOYZYP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSUGdyVasHlggjkuPVGmtedlQbiLoThLGFsL8MoOIVjAiBvAXh002GHC50vk7aNfJdAOrDcqxR8KfiWUkHqD31bnSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpX%2B9Jiv96B2coApaKtwDKrmdg1eBYhzCOgql3Go%2B3T9%2BGnWPLySA0JdO%2BgLS%2FFKHSiJ5br7Cn1HTCKm9Qnp1od86uKqg2%2BVQz%2BQmsnxe7PuEnkcz6mGEUmmSzdSSTG1wSYqMsOdyfM2pxJM2MBZEdnNhZL2FVVRnNiGaI%2BJyG8vfnEPruI0fXOJ1bo6qo4650fTpVTA7h3PutaVbBBt%2F4r7TMA%2Ft3cic7pe56tvnVILfUPdpd0p5gIwyGVTIPKNZXKFz9uYqYpX9cKExpM93hcpbRuUt9A1ZBHmu12EpSeC%2F73eXuD4rddTFwr0idcbexbyQcVCgBeZJ%2B%2BBd%2FlWQLNOIXCdHRHGR9RWgZ0%2FUyxYb90h%2FrdNUv0BBw2w4oUx4vSXI73YEDIFPazITXSGrF%2B4%2BuOZ%2FsmP8%2Bh18weIyEv7UbvFo8h%2FYjSI%2FPYtY6OhbAmmHExu%2FT37MeN%2FSnJhoqZbBmiy6ZX0Z79UVxaPDFQ6uppT%2BrTEitaDecyG4fY4Wk0UjqeYBhSGm3xJBSHz4ud1%2BF5WhodIZBo2p6WheJJl97zzkih%2BSR9Lv5gYqcmyWd4hf%2BTNtQesZnpy6pOwCenJCYMLf5uNQ6KaHBvyUWopR4Grc%2F7vxvnzfZmeWP%2FrYHaKNK6Wyj7pG14Qw%2BPvjwAY6pgGp2vLF8K490kGGtszD37UC1ZOQzJzt8xGmzh68fgbHOt4FsxPFrNXW0j7wR0e0fgubpNbPEEndCGhLoIZ%2BIT5RVJ6hZQVD7VNc2PDWPz%2FnSt4w7MiAUVyojDU0aibeLlzqIwLgzkWxjBrwBYhg8PCeWGcgScRPHSVMzX5M3L44%2B4x%2FXwm7n7nO1sBc81DhQCo%2FwJVebdq5guZpB5fIu%2FObGzZc8D9j&X-Amz-Signature=cda8530b81427c0b1b6520cf3d0ee3194afaaa6fc35c082066513636f6b6d837&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGCOYZYP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSUGdyVasHlggjkuPVGmtedlQbiLoThLGFsL8MoOIVjAiBvAXh002GHC50vk7aNfJdAOrDcqxR8KfiWUkHqD31bnSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpX%2B9Jiv96B2coApaKtwDKrmdg1eBYhzCOgql3Go%2B3T9%2BGnWPLySA0JdO%2BgLS%2FFKHSiJ5br7Cn1HTCKm9Qnp1od86uKqg2%2BVQz%2BQmsnxe7PuEnkcz6mGEUmmSzdSSTG1wSYqMsOdyfM2pxJM2MBZEdnNhZL2FVVRnNiGaI%2BJyG8vfnEPruI0fXOJ1bo6qo4650fTpVTA7h3PutaVbBBt%2F4r7TMA%2Ft3cic7pe56tvnVILfUPdpd0p5gIwyGVTIPKNZXKFz9uYqYpX9cKExpM93hcpbRuUt9A1ZBHmu12EpSeC%2F73eXuD4rddTFwr0idcbexbyQcVCgBeZJ%2B%2BBd%2FlWQLNOIXCdHRHGR9RWgZ0%2FUyxYb90h%2FrdNUv0BBw2w4oUx4vSXI73YEDIFPazITXSGrF%2B4%2BuOZ%2FsmP8%2Bh18weIyEv7UbvFo8h%2FYjSI%2FPYtY6OhbAmmHExu%2FT37MeN%2FSnJhoqZbBmiy6ZX0Z79UVxaPDFQ6uppT%2BrTEitaDecyG4fY4Wk0UjqeYBhSGm3xJBSHz4ud1%2BF5WhodIZBo2p6WheJJl97zzkih%2BSR9Lv5gYqcmyWd4hf%2BTNtQesZnpy6pOwCenJCYMLf5uNQ6KaHBvyUWopR4Grc%2F7vxvnzfZmeWP%2FrYHaKNK6Wyj7pG14Qw%2BPvjwAY6pgGp2vLF8K490kGGtszD37UC1ZOQzJzt8xGmzh68fgbHOt4FsxPFrNXW0j7wR0e0fgubpNbPEEndCGhLoIZ%2BIT5RVJ6hZQVD7VNc2PDWPz%2FnSt4w7MiAUVyojDU0aibeLlzqIwLgzkWxjBrwBYhg8PCeWGcgScRPHSVMzX5M3L44%2B4x%2FXwm7n7nO1sBc81DhQCo%2FwJVebdq5guZpB5fIu%2FObGzZc8D9j&X-Amz-Signature=63d223ee35cf87b55df2f8b3faf0e17a1faefdb1e3cd4bb96c3c324df4c7db89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
