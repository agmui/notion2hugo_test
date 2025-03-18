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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDR3XUX7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHZTJHl3v%2BAtc38NIECHANFtTSpkFNhOE86EBLzaLLdjAiEA6POqAKZ3AaF8l99tWmkC3fkOGCt6WPYoMmUfDqJwL9sq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNIUEZHbDSikSVjehyrcA9n9KX4N%2BwMa1k3HwmW6XlwBqc2U2OjUR71UrVJ%2FTyPKE30vS0UC%2BySKuFSlYXRG8Y6cZwtnW0844hxPGSJQwhiGRmj8aVi5xY7grZSF3gNK42wb5LQL3RWXajQlz3ZHtWszzVyfO79bK4L4dbSU5tARDOkX9Y2m15D%2F0SivRIlrmMI4PsAHyX3omJZFTcMx6RtSeqtxf0qRIzMhIo464XVVUCtLjc2gQMe24KqjSw7x6%2BFg0%2Fm0mnx57LbGAYGsjxc4IvzqGBeGJhJzSeQN90qBgqrPLGuWSpxaO1gcwGAHxkbKtbLh33at0L7A11z4m1xzAiu6lgdcaYzTe2QaWsjVln4y%2BygWswQfUquJCCz7oLWPqHVuqKOg2nfNgSW6ZKCqxqkg39l6Wya2sAypKLhqk7KdtH1nriEqEhr%2FZbdiQFXx20LZCApvWHKhN%2F3PUs8SYEIyVvYr4GIzkSKtNO3ztiwpq55at9WK7pf%2FZ1QoXiP8DHPnuHY0Le5TOfBTqj4c%2B6nn8nQGyH0ZoRInB0nL5WF%2BPciLtqhAJiFl6wm2ZckVwGxtUN%2Fv8Tkcq7TbBMF6OeV3i2W%2F3ap%2BWbHupeo5OoQzp57tr%2FbsprWJSmiJgAKrkYF8SsLehrcWMOaw574GOqUBpJPBTTHUs3AnU%2BYpqsQfGiPuNrjptetOlmvn0OCKSXa7ir6CK%2BSzKLRsUCmR%2BnW5%2BU%2FrYohGPCVRrbEl5K4h6ERY1W7Hlhpg9DgIDjx7pSQktkgsHEdp9e8WZKiDMfQAYOAJtGZH7el0sPZRRX0KnxPRsMLt1krYUmwoY1wd9UUHCGRRzQvwLsqxSs6vpT7Ds%2B6rvTIV5v3dKCV0EQYVwON3vcox&X-Amz-Signature=05bcd6e7e7ea9572161f42df0e682dfc438be3706634d0dd9545c25192de389b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDR3XUX7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHZTJHl3v%2BAtc38NIECHANFtTSpkFNhOE86EBLzaLLdjAiEA6POqAKZ3AaF8l99tWmkC3fkOGCt6WPYoMmUfDqJwL9sq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNIUEZHbDSikSVjehyrcA9n9KX4N%2BwMa1k3HwmW6XlwBqc2U2OjUR71UrVJ%2FTyPKE30vS0UC%2BySKuFSlYXRG8Y6cZwtnW0844hxPGSJQwhiGRmj8aVi5xY7grZSF3gNK42wb5LQL3RWXajQlz3ZHtWszzVyfO79bK4L4dbSU5tARDOkX9Y2m15D%2F0SivRIlrmMI4PsAHyX3omJZFTcMx6RtSeqtxf0qRIzMhIo464XVVUCtLjc2gQMe24KqjSw7x6%2BFg0%2Fm0mnx57LbGAYGsjxc4IvzqGBeGJhJzSeQN90qBgqrPLGuWSpxaO1gcwGAHxkbKtbLh33at0L7A11z4m1xzAiu6lgdcaYzTe2QaWsjVln4y%2BygWswQfUquJCCz7oLWPqHVuqKOg2nfNgSW6ZKCqxqkg39l6Wya2sAypKLhqk7KdtH1nriEqEhr%2FZbdiQFXx20LZCApvWHKhN%2F3PUs8SYEIyVvYr4GIzkSKtNO3ztiwpq55at9WK7pf%2FZ1QoXiP8DHPnuHY0Le5TOfBTqj4c%2B6nn8nQGyH0ZoRInB0nL5WF%2BPciLtqhAJiFl6wm2ZckVwGxtUN%2Fv8Tkcq7TbBMF6OeV3i2W%2F3ap%2BWbHupeo5OoQzp57tr%2FbsprWJSmiJgAKrkYF8SsLehrcWMOaw574GOqUBpJPBTTHUs3AnU%2BYpqsQfGiPuNrjptetOlmvn0OCKSXa7ir6CK%2BSzKLRsUCmR%2BnW5%2BU%2FrYohGPCVRrbEl5K4h6ERY1W7Hlhpg9DgIDjx7pSQktkgsHEdp9e8WZKiDMfQAYOAJtGZH7el0sPZRRX0KnxPRsMLt1krYUmwoY1wd9UUHCGRRzQvwLsqxSs6vpT7Ds%2B6rvTIV5v3dKCV0EQYVwON3vcox&X-Amz-Signature=76d9efd877b10ab42c3f18134bd74bc5ca50ed7cee9a0590c3f0d179ef969e16&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
