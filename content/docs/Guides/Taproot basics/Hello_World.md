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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CCAGRR7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD67fNkBZMshfMeX4JWCQPAGf8lG3wURtPSbJ5bS76oVwIhAIOAVjattTZe%2BuB6sD3Ex5qD4RjEaUJM2sq93zaEoFFtKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2muNJUaGx2OsBR%2Bsq3AMAC97wUPEb7Lnh%2Fyf5iNFqgdJL6HtkZ1Tip2Tui2MXSha4%2FY3TV6h44UZ8IQyWQF6PSUmZGA443BVA8rnUV%2BfcHSEAT8w6Gk6ZFBC00%2FazpOyQL%2F%2FNW2HsoLxL8DIkhHSXxhybLcYxhf5fZuVB0oiZckai5Ku3jsmcl8BEMAyQPU8psNOg7K9Ed0ZaUwPk%2F%2BtXrckNJ72wiaf1uuppbGRhaPHzIoneGIDks4kIOcQSfXtbz6uJGV9FJr%2BswevUWKSIpjSsD7sGlhC39IqyF54usQcWmrQVWuIVMbLsZgRqY1dG6p5wPSpLjGf08xB%2F0wmVHAD5XKYAMClNEojvKRcjvTK3MXiXNbwaah4b%2FcG2IPxn7n9VKJnIxzjp%2BabZSsjk5C3s7WTgr1TPY%2FVXNppJ%2FWRNC0bnbw96NJhWJR0NScfjFtZ2EU74kIlQ0cPo5fmYFdnoo2nQpddtGs2QKI3%2FTpGoLheM%2BUfv60NgfOxo7zEM2uFIBs4Z3ZQMK1UVo0SOyGpjWBpMZ%2FRXE%2BzLPhnlhqNhW046VYzpxOq5bSNngkfT0sGzMbqEc6uS7iobTObBRUX7gpaNNQLaSIIpEPqZsdkyo7B2EznKtdE92fEE9%2F8eYhrjkq1cI75OXDDAxbvDBjqkAQ7KzRn0gyQmdzl9zQ3gl3Vhxa%2BlS7FBnRf1ZF4UdbZSbTaza4cACXWMxeiURSFEZFdAy%2BxglwBGZs8dz%2BEG7Wf0LpnM%2FboQOK8pZ7uvs0DMaVZcRWXNQCrnS6N4YQbDGf2Qm8F4w9IBjIykflAie3Dwd%2FR9QHCXH9lm3LC5ZdnwEzR6xWknLL%2BbMPE3kp%2FnmUqklUPCb2RIAUeUOr0cqNELV4oD&X-Amz-Signature=808546b6b25557a637252aafee0142cc99b81ed87e47aceb33e901ad9a1109b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CCAGRR7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD67fNkBZMshfMeX4JWCQPAGf8lG3wURtPSbJ5bS76oVwIhAIOAVjattTZe%2BuB6sD3Ex5qD4RjEaUJM2sq93zaEoFFtKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2muNJUaGx2OsBR%2Bsq3AMAC97wUPEb7Lnh%2Fyf5iNFqgdJL6HtkZ1Tip2Tui2MXSha4%2FY3TV6h44UZ8IQyWQF6PSUmZGA443BVA8rnUV%2BfcHSEAT8w6Gk6ZFBC00%2FazpOyQL%2F%2FNW2HsoLxL8DIkhHSXxhybLcYxhf5fZuVB0oiZckai5Ku3jsmcl8BEMAyQPU8psNOg7K9Ed0ZaUwPk%2F%2BtXrckNJ72wiaf1uuppbGRhaPHzIoneGIDks4kIOcQSfXtbz6uJGV9FJr%2BswevUWKSIpjSsD7sGlhC39IqyF54usQcWmrQVWuIVMbLsZgRqY1dG6p5wPSpLjGf08xB%2F0wmVHAD5XKYAMClNEojvKRcjvTK3MXiXNbwaah4b%2FcG2IPxn7n9VKJnIxzjp%2BabZSsjk5C3s7WTgr1TPY%2FVXNppJ%2FWRNC0bnbw96NJhWJR0NScfjFtZ2EU74kIlQ0cPo5fmYFdnoo2nQpddtGs2QKI3%2FTpGoLheM%2BUfv60NgfOxo7zEM2uFIBs4Z3ZQMK1UVo0SOyGpjWBpMZ%2FRXE%2BzLPhnlhqNhW046VYzpxOq5bSNngkfT0sGzMbqEc6uS7iobTObBRUX7gpaNNQLaSIIpEPqZsdkyo7B2EznKtdE92fEE9%2F8eYhrjkq1cI75OXDDAxbvDBjqkAQ7KzRn0gyQmdzl9zQ3gl3Vhxa%2BlS7FBnRf1ZF4UdbZSbTaza4cACXWMxeiURSFEZFdAy%2BxglwBGZs8dz%2BEG7Wf0LpnM%2FboQOK8pZ7uvs0DMaVZcRWXNQCrnS6N4YQbDGf2Qm8F4w9IBjIykflAie3Dwd%2FR9QHCXH9lm3LC5ZdnwEzR6xWknLL%2BbMPE3kp%2FnmUqklUPCb2RIAUeUOr0cqNELV4oD&X-Amz-Signature=aaaef2d76a9fc3db4cf570debed5514a1892e4016e4b28a1b494d4b25514f415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
