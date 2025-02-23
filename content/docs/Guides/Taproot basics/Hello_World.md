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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SEFQR66%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29NNuuh6TVBx0sScZilXcM%2FXwu82ZXH5y0GMgpld86gIhAKt0sc0bCsmjZzRj%2F85Znf3wCY9kpu%2BZACdVhievePVvKv8DCB8QABoMNjM3NDIzMTgzODA1IgwWcTIc9%2BfjvBBcUZYq3AMVZGicFztHl4PG4L8EdlG0FSEdhdbpNntS0f7Gwf4JM5AKPhdcbzFyt%2BfBHZbzaDs9B85Ph9aCg3ny7b6it3iChV%2Bf84c28aIEUFIsfmMWImkVrVJk9L%2F8jYMA5pKS7pw%2FqBlui14nvezm6wf%2B55WyhSMkdQ61p4M54cJES4LBKGJREdOP9ntqlZ12G57Av%2BH8bkoIJ%2FA917VgyI1TeIPTZH71lg4qJ8uV8wEtk6%2FVTdc9CZIdopV8rcp0R29RXmNTh090atAt81uHabhx24%2FMioX96C%2F5CABBS%2BYK56XRtrn9mfqQ9zN%2BQnzAWgKCorc8DURVKjpbUsn5SGLZwxybK1yXcpsleY6Az%2Fca6cu48gSOrzvGoOggWx9W1ASjl1Z7bVzo%2B6qemCjeKx%2FZLw4B7pq04zmH1hw0eC0u4vPs3wlgxWXDUiNOR3LveukuUZ9aao%2Foy%2B8j7nEsGhd8BCUJF16N54BiTsSXRV%2FJdV37Iocbw7cEvAxqc7DZBWBdus0lL7XSiKQ98jhrN7mJIx471Uu2R5BXNSfsecmBhWAwCKW%2BTrspwjYkgRRcHGyBZ8y%2FPbS4wDLkYc23gx%2B0ke5v35vyqkVrXmnd3%2FqzawyyYAz53ZHzZ9lAem4g0TC3r%2B69BjqkAWN%2F0c9L71QP0MYmptn%2FbXxvh%2Ft4z6JcSgOR1Xok53%2FNZB260ZDuJCc8nqHdD1Tpfk0mkLwPZ1LvZ84S8xrVmh4Kv4zEPfWfbWGRA2pMNxTjsOudfCx8oAlOl%2B%2F3kvLDjyj1yOMzOadtDVCm17FKDV9o7MHRjQEStWwvgsXl5QAVI0MbiqVxqUnk4IOTSkULXNucb8CB75wYSQPVyr8eTJfus4dq&X-Amz-Signature=f02d4a311558ed8e915d3c8cfc085dbabfe55c8111dd185cb855452d98349408&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SEFQR66%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29NNuuh6TVBx0sScZilXcM%2FXwu82ZXH5y0GMgpld86gIhAKt0sc0bCsmjZzRj%2F85Znf3wCY9kpu%2BZACdVhievePVvKv8DCB8QABoMNjM3NDIzMTgzODA1IgwWcTIc9%2BfjvBBcUZYq3AMVZGicFztHl4PG4L8EdlG0FSEdhdbpNntS0f7Gwf4JM5AKPhdcbzFyt%2BfBHZbzaDs9B85Ph9aCg3ny7b6it3iChV%2Bf84c28aIEUFIsfmMWImkVrVJk9L%2F8jYMA5pKS7pw%2FqBlui14nvezm6wf%2B55WyhSMkdQ61p4M54cJES4LBKGJREdOP9ntqlZ12G57Av%2BH8bkoIJ%2FA917VgyI1TeIPTZH71lg4qJ8uV8wEtk6%2FVTdc9CZIdopV8rcp0R29RXmNTh090atAt81uHabhx24%2FMioX96C%2F5CABBS%2BYK56XRtrn9mfqQ9zN%2BQnzAWgKCorc8DURVKjpbUsn5SGLZwxybK1yXcpsleY6Az%2Fca6cu48gSOrzvGoOggWx9W1ASjl1Z7bVzo%2B6qemCjeKx%2FZLw4B7pq04zmH1hw0eC0u4vPs3wlgxWXDUiNOR3LveukuUZ9aao%2Foy%2B8j7nEsGhd8BCUJF16N54BiTsSXRV%2FJdV37Iocbw7cEvAxqc7DZBWBdus0lL7XSiKQ98jhrN7mJIx471Uu2R5BXNSfsecmBhWAwCKW%2BTrspwjYkgRRcHGyBZ8y%2FPbS4wDLkYc23gx%2B0ke5v35vyqkVrXmnd3%2FqzawyyYAz53ZHzZ9lAem4g0TC3r%2B69BjqkAWN%2F0c9L71QP0MYmptn%2FbXxvh%2Ft4z6JcSgOR1Xok53%2FNZB260ZDuJCc8nqHdD1Tpfk0mkLwPZ1LvZ84S8xrVmh4Kv4zEPfWfbWGRA2pMNxTjsOudfCx8oAlOl%2B%2F3kvLDjyj1yOMzOadtDVCm17FKDV9o7MHRjQEStWwvgsXl5QAVI0MbiqVxqUnk4IOTSkULXNucb8CB75wYSQPVyr8eTJfus4dq&X-Amz-Signature=988afa9844343b1ab9c50ffd18670a2d86c0abb94d957d987640e6b08fd376d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
