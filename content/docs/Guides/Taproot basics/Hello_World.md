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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIU7S7WZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX1FtTih4mgHiEw5nPTSEzstKkipOQlU7var6lk6RLeAiAqFBywGEFzsRKtQG2CWcYO6E702Gs8c%2FxE2fUppL7eciqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUsa%2FL%2FAwnPq4JY%2FKtwDsMW5dj45apsxkFtToBTBF%2BZukd5A2KWFCyTFDDBkjXywr2hhMzy%2FE%2BDjX9wEeq62FOWf7oHL%2Fh%2FLJAHQ1sbBiz1xoX0npcCSgHbEqR9GsGiXi3wKatUAUu6rqBaOovz%2BSRVp48B2QMH85KCOlep1ONhg%2Fw7m9FQuLVfzDD0rRMNKbuWQ2n%2Bu4RHiJ%2BucuKJPKkKSF4s614vTszSCzGo9JSwwiHwZyMrpo8yAPHqJIqFlp0aJz6CD172c4Bot54kk6Tj5FclyD3X%2BkE9LdDnvTC1vx74iwPYnNJDkCKzY1yHDvHtj%2FogjzFzFiE5yaMMhva6ExC0Yn%2Fr8kv26lR1mWR8Wto47Az7OxCXzww8pqlPdMuXl8UJZCRXF9XMTzi1V6YI4paE%2BFUAUBtkzr0YbtMz0sDpOOC%2FuSSMSVljadjgTF7zWUOVeFUuWy5K%2BkSvMExYowpYORbLTPdpI5mZoeADVAqhNGCUu6v30uwVYYtEyQMMcF4dleh887wb6FSF6%2B5WRW7LSw6FngSKZo3cVmOTSQE9JjO0JNf19zwXv6X58i0T8TM9IWmzouAzoyUBHsIBgYPBDAiT6kZ%2FaBg0NZ7tka5J9DW9ptZq5dzKWeXe1iiTgXRQr6BZIHssw%2Bab2vAY6pgF6MhQs9dpEz8B0adykMYuzo7JIvbo0SXKUBjAy3bLg%2F3OSxqGs61eIbvJ%2BH%2BTZ9ewdijB5lqCu09XK3t8iA%2BR0LyFqm5w1iIsA2f73WyJoNJcv%2FSe1EgadcrG%2B0bozwt%2FQqx7UxnzVMogLBm6asajKP%2Bsvvv94aXFHmdx4dAZHBskV7R0OuFX26ae8X2zlzFV5u9O7frO5ZhQK%2B3UY6L3dGaYqpDGs&X-Amz-Signature=0fc3c33d6fbb078e3b727099b87a908b878efdcbbe0d52e76214c11704949ade&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIU7S7WZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX1FtTih4mgHiEw5nPTSEzstKkipOQlU7var6lk6RLeAiAqFBywGEFzsRKtQG2CWcYO6E702Gs8c%2FxE2fUppL7eciqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUsa%2FL%2FAwnPq4JY%2FKtwDsMW5dj45apsxkFtToBTBF%2BZukd5A2KWFCyTFDDBkjXywr2hhMzy%2FE%2BDjX9wEeq62FOWf7oHL%2Fh%2FLJAHQ1sbBiz1xoX0npcCSgHbEqR9GsGiXi3wKatUAUu6rqBaOovz%2BSRVp48B2QMH85KCOlep1ONhg%2Fw7m9FQuLVfzDD0rRMNKbuWQ2n%2Bu4RHiJ%2BucuKJPKkKSF4s614vTszSCzGo9JSwwiHwZyMrpo8yAPHqJIqFlp0aJz6CD172c4Bot54kk6Tj5FclyD3X%2BkE9LdDnvTC1vx74iwPYnNJDkCKzY1yHDvHtj%2FogjzFzFiE5yaMMhva6ExC0Yn%2Fr8kv26lR1mWR8Wto47Az7OxCXzww8pqlPdMuXl8UJZCRXF9XMTzi1V6YI4paE%2BFUAUBtkzr0YbtMz0sDpOOC%2FuSSMSVljadjgTF7zWUOVeFUuWy5K%2BkSvMExYowpYORbLTPdpI5mZoeADVAqhNGCUu6v30uwVYYtEyQMMcF4dleh887wb6FSF6%2B5WRW7LSw6FngSKZo3cVmOTSQE9JjO0JNf19zwXv6X58i0T8TM9IWmzouAzoyUBHsIBgYPBDAiT6kZ%2FaBg0NZ7tka5J9DW9ptZq5dzKWeXe1iiTgXRQr6BZIHssw%2Bab2vAY6pgF6MhQs9dpEz8B0adykMYuzo7JIvbo0SXKUBjAy3bLg%2F3OSxqGs61eIbvJ%2BH%2BTZ9ewdijB5lqCu09XK3t8iA%2BR0LyFqm5w1iIsA2f73WyJoNJcv%2FSe1EgadcrG%2B0bozwt%2FQqx7UxnzVMogLBm6asajKP%2Bsvvv94aXFHmdx4dAZHBskV7R0OuFX26ae8X2zlzFV5u9O7frO5ZhQK%2B3UY6L3dGaYqpDGs&X-Amz-Signature=a1e55d40c4dbaa49258bd148cb7ef232d6b03f376bc782031745eea635b3e52f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
