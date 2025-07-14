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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GK74E56%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCnFyvD4k1%2FZYv2oIhRAL3noMQQFYn%2BfsMpuJS2jxxFKwIgCYhc3%2FlF%2BCqBjp1Ru8CQpcM2ZBS8UILN6h5SSX42uaMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIN8dAmZjNc6JkrgwSrcAx3EzOU73dHJlirMlaDJNh1i4CNkf3Ff5zNDSOMTfELwI5oa1nQipv8QCRlyG3blJrvdUTeROCuxHaY7noBaHzvE5XnKlulAW3rF835ToZlvPDg%2ByfvIWXlaGlwRtVQotN7OJ3vUCUNKpQkfoAe40AAbRNAspN%2Bd945SgvRGOPe0Y5xspuiJ%2F0ZqQmCgkO%2BzJQfJzO3DlTZamWoomdjjasVxoFLRqmqAwvfmfwR4ft4JKeFpWtSmiH7rfD6mkszXtX5ufXFHBPiLqYBrI64zqqHv7zCuLrCudvljoFn0vUHrlPQNXt7qxyG6yK7Jww%2B%2BE2uGcTx7AwUBcEChouGm3f0a0baRgZZ8BVIbsrfhyovdICka0q04sl0%2B4xwj3fZhzLFH78xwKzD0rTuGhZB4UHRO6C5WRtayrHH5sSgjLG%2FNN%2Fa89MM1syi6D9t6VEYxNHUAGPaXQnxGXO%2BLgAliRiAtHBQmh14jC%2Fs0tkar%2Fe5dWOonuIJy%2BaKs7UpP1ThB6DRq84aS067nISBxUWnI6uJzNMhCwGDgCweE1EEewu9u6a0gD4MnfJ9BqDRPOAE2NvL0omgpQraNtt1f7ciN8hQezn6al77Q%2FQnUPla3eBBuBAIsNF4aP53qIqc3MI7M0cMGOqUBUETmzbJKWN9QCOMSMXzLF1%2BsMR1d4Ji%2B0y96UA%2F4BFWDSELg0slfobIh7fb9%2FN%2BTwEBBuUerhxUCcx%2BE8gf%2FLlQ8flVRsaBwzjyBiTSZjX1KNdsNavGUB2T8Js50V7xwMhE7GGYS9D0qkfVAA7ADe0kWD43eC%2BR25rpJ7DK2YH7KzsFDu%2FIyzkZ3Dp9rt7NWi47jeCjt4wQc3uL5G3426lgB8Xnu&X-Amz-Signature=33d9fcf4a6bd5b6d044ae6b2074bebd79e0b1af5f5b987e561e811338bce4914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GK74E56%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCnFyvD4k1%2FZYv2oIhRAL3noMQQFYn%2BfsMpuJS2jxxFKwIgCYhc3%2FlF%2BCqBjp1Ru8CQpcM2ZBS8UILN6h5SSX42uaMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIN8dAmZjNc6JkrgwSrcAx3EzOU73dHJlirMlaDJNh1i4CNkf3Ff5zNDSOMTfELwI5oa1nQipv8QCRlyG3blJrvdUTeROCuxHaY7noBaHzvE5XnKlulAW3rF835ToZlvPDg%2ByfvIWXlaGlwRtVQotN7OJ3vUCUNKpQkfoAe40AAbRNAspN%2Bd945SgvRGOPe0Y5xspuiJ%2F0ZqQmCgkO%2BzJQfJzO3DlTZamWoomdjjasVxoFLRqmqAwvfmfwR4ft4JKeFpWtSmiH7rfD6mkszXtX5ufXFHBPiLqYBrI64zqqHv7zCuLrCudvljoFn0vUHrlPQNXt7qxyG6yK7Jww%2B%2BE2uGcTx7AwUBcEChouGm3f0a0baRgZZ8BVIbsrfhyovdICka0q04sl0%2B4xwj3fZhzLFH78xwKzD0rTuGhZB4UHRO6C5WRtayrHH5sSgjLG%2FNN%2Fa89MM1syi6D9t6VEYxNHUAGPaXQnxGXO%2BLgAliRiAtHBQmh14jC%2Fs0tkar%2Fe5dWOonuIJy%2BaKs7UpP1ThB6DRq84aS067nISBxUWnI6uJzNMhCwGDgCweE1EEewu9u6a0gD4MnfJ9BqDRPOAE2NvL0omgpQraNtt1f7ciN8hQezn6al77Q%2FQnUPla3eBBuBAIsNF4aP53qIqc3MI7M0cMGOqUBUETmzbJKWN9QCOMSMXzLF1%2BsMR1d4Ji%2B0y96UA%2F4BFWDSELg0slfobIh7fb9%2FN%2BTwEBBuUerhxUCcx%2BE8gf%2FLlQ8flVRsaBwzjyBiTSZjX1KNdsNavGUB2T8Js50V7xwMhE7GGYS9D0qkfVAA7ADe0kWD43eC%2BR25rpJ7DK2YH7KzsFDu%2FIyzkZ3Dp9rt7NWi47jeCjt4wQc3uL5G3426lgB8Xnu&X-Amz-Signature=b4e427f6452dcb1a13bc8148a4e0c531542370535ee9746dd38490e782aef2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
