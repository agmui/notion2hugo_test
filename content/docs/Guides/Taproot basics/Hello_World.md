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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CD7ZTY2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFafPoYsOOYoWUJN2oldaCbPzQkTqyknkL634P%2BPGXHAiEAn6629DS4JzL25dTn5gnxcIk2Wt10pMWG00x984P0CNcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY6LMB%2F69Gt1rpacircA5KfLh8kkAFWcK0Iye%2FKMRrdYsShIdt3uSjAK5mu1le87Wqee5oy4T91Tw3tWRYJyEC2U%2BfBlohwK4qvnBFbPZdOJxp3QNb%2BBmaaG0Ma1Rsx%2BVoG%2Fj6uLeEN8jnXqq%2FNDV5tugVnnS%2BDVi5YAT4%2BkzcaPDdV0x6EpXeUALbNBxQhO%2FobTtZwXVLg8utLnVU%2FSIizrxgTPiP5h5tfmn6euHSyylkvVNB4da6e8AIHi2%2FpPJu0I9CjYENCt7CMsOtGmp2dZiS5hLimwW7jNZIc5XRzBNDV%2BK0fBZKE%2Bv2iGnqPPOPLJG2rrFoOPZ9e2iQqNiZi18LoqHH7ck8GZQafdpDhXVRwiUiqKhozL4mfK57nHVzFUK2C%2FkAPjrsrKp9ugzvfSKX0vnPkJFqlrAYTAgBEjicjDP9OWZQYLv3IPC55OVVerC65QxTwurnbVV3eIdvd0aNkkseJcm86JtR081GIh8ldh7BK%2BrqYhcHMJTNPCQ3%2B3axnhBd0KDbRG3ZCPAF%2Bu00zilkyV%2FB8Glrz74ZNOYlATHgs7YJ%2B3uKVC43k3ufbo8gDijEc6h3qF%2BNwgxC%2FRIv%2BpRTBXcB5HLDmiM99PcVMw6bo0fE9f%2FfqSZbpPcclOX9BrO5KpRrvMOvdqsEGOqUB3qAVpRgxLgfhB1HaffjyDUScRRMvszKLDQ9iwl0UOCnudLYiqfmNGE7HkPhq09VVuAXKIUJou4bHEO%2B5liq58RCG6NADx%2BN3m2ou4aBVe2i7dpO5L8IjRvihd8KVDZuWAoGsOkdYtK7vPvzqfr%2FVfFqfJD4ZcJPJzfRHDYimAv9VLsnT8tF2iyAWGXnG174JRqgV3ntobmRUsK2FmnSoE8GdsT0O&X-Amz-Signature=a462638ada952144bb0995a9b1f4049f95b7c78b59800ef762fda4202cfdb4fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CD7ZTY2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFafPoYsOOYoWUJN2oldaCbPzQkTqyknkL634P%2BPGXHAiEAn6629DS4JzL25dTn5gnxcIk2Wt10pMWG00x984P0CNcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY6LMB%2F69Gt1rpacircA5KfLh8kkAFWcK0Iye%2FKMRrdYsShIdt3uSjAK5mu1le87Wqee5oy4T91Tw3tWRYJyEC2U%2BfBlohwK4qvnBFbPZdOJxp3QNb%2BBmaaG0Ma1Rsx%2BVoG%2Fj6uLeEN8jnXqq%2FNDV5tugVnnS%2BDVi5YAT4%2BkzcaPDdV0x6EpXeUALbNBxQhO%2FobTtZwXVLg8utLnVU%2FSIizrxgTPiP5h5tfmn6euHSyylkvVNB4da6e8AIHi2%2FpPJu0I9CjYENCt7CMsOtGmp2dZiS5hLimwW7jNZIc5XRzBNDV%2BK0fBZKE%2Bv2iGnqPPOPLJG2rrFoOPZ9e2iQqNiZi18LoqHH7ck8GZQafdpDhXVRwiUiqKhozL4mfK57nHVzFUK2C%2FkAPjrsrKp9ugzvfSKX0vnPkJFqlrAYTAgBEjicjDP9OWZQYLv3IPC55OVVerC65QxTwurnbVV3eIdvd0aNkkseJcm86JtR081GIh8ldh7BK%2BrqYhcHMJTNPCQ3%2B3axnhBd0KDbRG3ZCPAF%2Bu00zilkyV%2FB8Glrz74ZNOYlATHgs7YJ%2B3uKVC43k3ufbo8gDijEc6h3qF%2BNwgxC%2FRIv%2BpRTBXcB5HLDmiM99PcVMw6bo0fE9f%2FfqSZbpPcclOX9BrO5KpRrvMOvdqsEGOqUB3qAVpRgxLgfhB1HaffjyDUScRRMvszKLDQ9iwl0UOCnudLYiqfmNGE7HkPhq09VVuAXKIUJou4bHEO%2B5liq58RCG6NADx%2BN3m2ou4aBVe2i7dpO5L8IjRvihd8KVDZuWAoGsOkdYtK7vPvzqfr%2FVfFqfJD4ZcJPJzfRHDYimAv9VLsnT8tF2iyAWGXnG174JRqgV3ntobmRUsK2FmnSoE8GdsT0O&X-Amz-Signature=9ce6a66ed0203c75f86b461b68db253683b66d05a020f6284d06f5a4162de25a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
