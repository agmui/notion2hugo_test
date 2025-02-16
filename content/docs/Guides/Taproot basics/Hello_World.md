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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT45ZFLM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDmJ97XKBHY0yRYoPKFMLc5qwwDwUb%2F8mDlSgkpiImoPwIgJ%2FDYc7Z4GToWQExc30QE8f8k2ysrxI0K7RQOgYEJifwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG8czfN%2FCwQY5CVghircA%2FwbtVAyZ70TyieagiPdM4OlDjDHjXAwTYuS3UECSJOdVtP%2FOf2w1QVIARobjXSWfQRpWp8AYaff6%2Fl%2BEvmJLsVSiLOIsDh9E5CBocaV%2F%2Bi8keH2JNG93M1QkhK0TZKKU2KaEY%2Bt2lmGFpzhtue41FUhEG7CPKF%2Bo9ZqCxHO7%2FrUzvTdLVLt1kTd1qPJ8Oq%2FKQaBvssR63wwSvnOr3zTiM3KGsDAnbpHrw9g0dCEaG4kBqqGXWmVbzfc1ZClXn7hmy9bz0lmyzcsrpVsBivr47DuMxLHhmgM6AlZZHVqrG43UcQJUAQqutfvnx7Yvg5pgmRKoo0bJiA9a84tOCQfiXYnzJw4UzT%2Fjhmla3SEllm0YaHmMPygm%2BrQrJEuytk8gM9VEJNavwPjuHiN1aUx1ioF3CPQcS6JjhmvuYfwwo%2B49ySHmjkm6DoubB%2BFQQh028nKcNbPXjrt9nQmfQYjo21V5iH2Ln3SWChJ2eBkN%2FWBTbkBIpj3q3R8nDNS7vGqBz8S3WkjWsYR3D7I3nZe0mwVyx5LjmVD1L0yOm0k2m85ziMCvz48G3c9EQsW21KXfrIYSHB4cZgUBUShXQC3%2B0z7a%2Blu7kKPBQU0Q%2BJU21gcWdJEMrF%2FTUvNLRl3MNLDxb0GOqUBzly8T0%2BJaMSFaczqPgfqJnMvN7nDlHfDw6EqacY40FTB43U954z2Z9bhty%2FrtMjTexHLt2jis80UaL9o230U%2BDPdxLNBUhRRcquWF8X5S2boPOKvQ%2FiZqswQZpz4TFZmOgdBdKUJ9gZh7kUMEN84gfizkNernCAXPM8j8Ras4BYbCeeXdvl71MHoc9Wugp3DfaYuSl%2B2a%2FcafJDVnqsorZhTbXGb&X-Amz-Signature=bb624c0dfcb8785564e4fa9f16bcdd017a4926b74a65823e69e9c945b45477b8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT45ZFLM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDmJ97XKBHY0yRYoPKFMLc5qwwDwUb%2F8mDlSgkpiImoPwIgJ%2FDYc7Z4GToWQExc30QE8f8k2ysrxI0K7RQOgYEJifwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG8czfN%2FCwQY5CVghircA%2FwbtVAyZ70TyieagiPdM4OlDjDHjXAwTYuS3UECSJOdVtP%2FOf2w1QVIARobjXSWfQRpWp8AYaff6%2Fl%2BEvmJLsVSiLOIsDh9E5CBocaV%2F%2Bi8keH2JNG93M1QkhK0TZKKU2KaEY%2Bt2lmGFpzhtue41FUhEG7CPKF%2Bo9ZqCxHO7%2FrUzvTdLVLt1kTd1qPJ8Oq%2FKQaBvssR63wwSvnOr3zTiM3KGsDAnbpHrw9g0dCEaG4kBqqGXWmVbzfc1ZClXn7hmy9bz0lmyzcsrpVsBivr47DuMxLHhmgM6AlZZHVqrG43UcQJUAQqutfvnx7Yvg5pgmRKoo0bJiA9a84tOCQfiXYnzJw4UzT%2Fjhmla3SEllm0YaHmMPygm%2BrQrJEuytk8gM9VEJNavwPjuHiN1aUx1ioF3CPQcS6JjhmvuYfwwo%2B49ySHmjkm6DoubB%2BFQQh028nKcNbPXjrt9nQmfQYjo21V5iH2Ln3SWChJ2eBkN%2FWBTbkBIpj3q3R8nDNS7vGqBz8S3WkjWsYR3D7I3nZe0mwVyx5LjmVD1L0yOm0k2m85ziMCvz48G3c9EQsW21KXfrIYSHB4cZgUBUShXQC3%2B0z7a%2Blu7kKPBQU0Q%2BJU21gcWdJEMrF%2FTUvNLRl3MNLDxb0GOqUBzly8T0%2BJaMSFaczqPgfqJnMvN7nDlHfDw6EqacY40FTB43U954z2Z9bhty%2FrtMjTexHLt2jis80UaL9o230U%2BDPdxLNBUhRRcquWF8X5S2boPOKvQ%2FiZqswQZpz4TFZmOgdBdKUJ9gZh7kUMEN84gfizkNernCAXPM8j8Ras4BYbCeeXdvl71MHoc9Wugp3DfaYuSl%2B2a%2FcafJDVnqsorZhTbXGb&X-Amz-Signature=34887ea4ef1c6d0fc454a8f408b0c51900fe39fb79be1fe79e934fc046c4d4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
