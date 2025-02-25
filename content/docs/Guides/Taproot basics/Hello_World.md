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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRGXU6J%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBX%2BV2lsQF5fN6S4lgr04JQBFuVrP1jJH5C3oz%2F7yHtJAiBzWmxi9cTd%2Fqn5UkWMsdkZAPlLy5WRuvGR0RuqlBR0Lir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMCzp41DhSp2n2NgD4KtwDqLxUyUaRZYXU7yR39DI3ksvtHMuQ3vsAg4Fr4g67IZ0dvgI05%2FxWEGyy77JvJ634CvlvET%2BB7P1VHeE4MQ7upR33BWoHtw6vv%2BB2nJX8LBD6m7fzIxBH6X4JXJDw8VCURJvQLjdQf%2Bt8bpPO4DI8heHATgw7EiA%2FMjNBEYMXIYwD7uO%2FTuebe%2BhaXr6TeOLbrdFILz0BOAKd0AeBcUy0NEM4erE5AKAUhsfnFhXaZVLq07Z0SkgltfaHvBAuY8xLgwfThWNnC2RcnCZW4f8KfvVNcj6TWNKWQAX6fgDl8SCf36jvsPAAnFCxTfun%2FW3SOtwzOFOqKutEv1zyof5YawLpUqJVs5PpluvEM0ely1dud21J4PJ7gVuHi6L%2FZP3BAtmVHTHO%2Fira4dtSoU4ZLvMPyfX68t2Z05UsEEY5Sl2b25icZNbWxsDKcPehhIjYklsLScT4EuP6rQ1RPHbz2XQ6sBMbuI1a1KhpJ7VZiqzHXbthkexL91nAwnbutRUq2PIvAlWuDFn%2BVozN1mr%2Fxnzy5Qw9Sn%2B7CB3iZibnhMvq0eExMxZFaPSfs10sRPTQWAGh77nB0Q%2B%2B3MY6l6%2BfpJdhiPZL1a5uKSZsMYAjhSCotLY3wmya8sMOrI8w5YL0vQY6pgEn1xzRLBpfcl%2BYbG9Aol4uTGYY13padtyrABuaIYXbElIplWqe6FOYVpwscxJ%2B2na3mWvAXy%2BwYJx%2BEkSHoQ4VkrzH1Q2az0n4nIBhWcn7hEWtG5Hr2mywukMHJzMFaL8U2%2FhoRRCUjp37FAGFff6Vh3nyG1aPaxqkw9GCTlk5dm6NOIsDl1ej7NJR2KDmVpfNnaykh%2BnT983m%2B39S7bEcVUWVmfwf&X-Amz-Signature=ddec4415dbf96cfe5f8b6b9762c446305e50dc94eaa13854bca88a531be9759b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRGXU6J%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBX%2BV2lsQF5fN6S4lgr04JQBFuVrP1jJH5C3oz%2F7yHtJAiBzWmxi9cTd%2Fqn5UkWMsdkZAPlLy5WRuvGR0RuqlBR0Lir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMCzp41DhSp2n2NgD4KtwDqLxUyUaRZYXU7yR39DI3ksvtHMuQ3vsAg4Fr4g67IZ0dvgI05%2FxWEGyy77JvJ634CvlvET%2BB7P1VHeE4MQ7upR33BWoHtw6vv%2BB2nJX8LBD6m7fzIxBH6X4JXJDw8VCURJvQLjdQf%2Bt8bpPO4DI8heHATgw7EiA%2FMjNBEYMXIYwD7uO%2FTuebe%2BhaXr6TeOLbrdFILz0BOAKd0AeBcUy0NEM4erE5AKAUhsfnFhXaZVLq07Z0SkgltfaHvBAuY8xLgwfThWNnC2RcnCZW4f8KfvVNcj6TWNKWQAX6fgDl8SCf36jvsPAAnFCxTfun%2FW3SOtwzOFOqKutEv1zyof5YawLpUqJVs5PpluvEM0ely1dud21J4PJ7gVuHi6L%2FZP3BAtmVHTHO%2Fira4dtSoU4ZLvMPyfX68t2Z05UsEEY5Sl2b25icZNbWxsDKcPehhIjYklsLScT4EuP6rQ1RPHbz2XQ6sBMbuI1a1KhpJ7VZiqzHXbthkexL91nAwnbutRUq2PIvAlWuDFn%2BVozN1mr%2Fxnzy5Qw9Sn%2B7CB3iZibnhMvq0eExMxZFaPSfs10sRPTQWAGh77nB0Q%2B%2B3MY6l6%2BfpJdhiPZL1a5uKSZsMYAjhSCotLY3wmya8sMOrI8w5YL0vQY6pgEn1xzRLBpfcl%2BYbG9Aol4uTGYY13padtyrABuaIYXbElIplWqe6FOYVpwscxJ%2B2na3mWvAXy%2BwYJx%2BEkSHoQ4VkrzH1Q2az0n4nIBhWcn7hEWtG5Hr2mywukMHJzMFaL8U2%2FhoRRCUjp37FAGFff6Vh3nyG1aPaxqkw9GCTlk5dm6NOIsDl1ej7NJR2KDmVpfNnaykh%2BnT983m%2B39S7bEcVUWVmfwf&X-Amz-Signature=f24aae96ab9451edfb2a5e03ed8665b710d508f8765689bcc5bd246d91b70159&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
