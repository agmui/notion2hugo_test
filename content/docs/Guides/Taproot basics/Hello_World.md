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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYASJR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNuHySovK1giKM666NKqhk%2B26GVpTFoWnWEUX2nJSGFAiEAoSQ0pmztKC%2FIm8EExjZv%2FHZ2u7TxX3gaP48raLI34PYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNCJFLLDRyGE1eXKFyrcA20P9ZOvY%2FXUdnlAxSBbDOFaJDF7gJiVuWyEctOMML6r17uNoB%2FsfN%2FYSHvK0gcGdvlTeZsn87mPPe2YnzwtqOuE3nVpneW4qq%2B604fyZn1AkPVcXW5EAnChxcYBDE%2FcsEB5zTlU5wKlOu0OhyLjIDhxFuOhV0Cseik4URQGHpDQDB%2FDqeuFx1U%2Fqm1%2FA3YeszXq94snr7aUlVtDUdsoOdlGkgTLowxeHM7Wbbn4qfSQzp2ETf3h6TFxnuwsbMj4wggl%2FafLc8F0yxj7CUxJwESfhvbVOZgzuyj0rBIqx5S4nID1fnygTCyXi%2Fsl4D2%2Bv3xD3J3K8EgslUCbjzU9u6F8VmBlP5PErFsBGZNWroPFgjC15SLPCDGWzdivKt4vWd%2B7WCcQYQBYhE1r%2FuvQjkU4nJ%2BVdNE1%2BJbK0T5i4mpoAibTp1uLkYGpKxzfwV8eCP%2B24RoM7Z2ADVNuyrw4c2%2B%2F6W0t5pcTh03iKWXVWIOtVi4H27y%2FsCJ5y0fVv9CizKlEF3Q6PX2mXKF75000cHdUnv2I1vLSFSrlAcRKWvhpZfFCjIZjgyPgT0Zt1pzClmtU8ERZVeG6teY3UopLqzVMEIECnS%2BdUPl9nxb0lRDYMZZ7q2lsewW4LxerMMe%2FxMIGOqUBp2i5RMZ9oZB%2BteABahX2oWRNjn%2BezR8FQXoCUc5TZCmB7XuMBO%2BI6UqdxZiuHdeP%2FX8ueEcYt3%2Fzac6MsXtho2EJJnDoJkCQ6QTaHWzhgqxtA%2BpmdlD%2BqrJNGyFfVLumg5EdMXb%2FWcNq7fSTMf106AXDqlbUaaHzWRTeKHEf6ILteAiFHZFFWaCBiYiTspEIQLGlDw%2B%2FeH3PEAhfXglwjJUoyqwx&X-Amz-Signature=61982c2cb1001247e187414ee1992bd6b55c32a09c3d7fe7bef7a375d91b7b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYASJR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNuHySovK1giKM666NKqhk%2B26GVpTFoWnWEUX2nJSGFAiEAoSQ0pmztKC%2FIm8EExjZv%2FHZ2u7TxX3gaP48raLI34PYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNCJFLLDRyGE1eXKFyrcA20P9ZOvY%2FXUdnlAxSBbDOFaJDF7gJiVuWyEctOMML6r17uNoB%2FsfN%2FYSHvK0gcGdvlTeZsn87mPPe2YnzwtqOuE3nVpneW4qq%2B604fyZn1AkPVcXW5EAnChxcYBDE%2FcsEB5zTlU5wKlOu0OhyLjIDhxFuOhV0Cseik4URQGHpDQDB%2FDqeuFx1U%2Fqm1%2FA3YeszXq94snr7aUlVtDUdsoOdlGkgTLowxeHM7Wbbn4qfSQzp2ETf3h6TFxnuwsbMj4wggl%2FafLc8F0yxj7CUxJwESfhvbVOZgzuyj0rBIqx5S4nID1fnygTCyXi%2Fsl4D2%2Bv3xD3J3K8EgslUCbjzU9u6F8VmBlP5PErFsBGZNWroPFgjC15SLPCDGWzdivKt4vWd%2B7WCcQYQBYhE1r%2FuvQjkU4nJ%2BVdNE1%2BJbK0T5i4mpoAibTp1uLkYGpKxzfwV8eCP%2B24RoM7Z2ADVNuyrw4c2%2B%2F6W0t5pcTh03iKWXVWIOtVi4H27y%2FsCJ5y0fVv9CizKlEF3Q6PX2mXKF75000cHdUnv2I1vLSFSrlAcRKWvhpZfFCjIZjgyPgT0Zt1pzClmtU8ERZVeG6teY3UopLqzVMEIECnS%2BdUPl9nxb0lRDYMZZ7q2lsewW4LxerMMe%2FxMIGOqUBp2i5RMZ9oZB%2BteABahX2oWRNjn%2BezR8FQXoCUc5TZCmB7XuMBO%2BI6UqdxZiuHdeP%2FX8ueEcYt3%2Fzac6MsXtho2EJJnDoJkCQ6QTaHWzhgqxtA%2BpmdlD%2BqrJNGyFfVLumg5EdMXb%2FWcNq7fSTMf106AXDqlbUaaHzWRTeKHEf6ILteAiFHZFFWaCBiYiTspEIQLGlDw%2B%2FeH3PEAhfXglwjJUoyqwx&X-Amz-Signature=84c8ee413a6e771b68ebd0940ec45c859a66225d65fc42212cd203e9daba083f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
