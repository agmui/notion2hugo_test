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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGFJWW4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6KNzEWAThYlH6Oi6U7HNdGA68KQ0Ag7Vc9Sknbr1miAIhAIETW2vjPDXb90LIqO9yysXRrillp%2BJhXm3fqq2lDiHtKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEZvXAHjxoSj%2BgjwMq3AO%2FOd4ikBHnYQrQ9QLL1GTzf4eGGbP83YvykUcjbKGIrQ%2F41Ha8vYM75zpspcD7U0%2Fa8rjAlDA6Vfew8KDbgZaGWoSxonMeoTYs%2BQHAx%2FlZ2jA%2Fzv8yih7kELrngwT8eGVQgyVqKObOJygpD4EvqGaf5Ca7GShVDvuOA0ZWMk9g8wbgtYcPOZnS5tETGoOkIKcPZ4CilmfvVUhX3VETEYyH5nnTBk0YzHhHFnb4H4ewId2xhGX9bEeU4%2FgS2fG8%2FGEz0HXCTYNygDcr1x5Mhosp2vkXW2PvsUUfbME0dCUhjBpC3d3QWjb1GNsH2QfjvQV77Xq0ViKTAQ5UM%2BzTHq6uqp4JyM9YqxVl%2BahYVA3kOJuMHrsH%2FrGp60VRje1rDncpO1a9JMH3KKcDAnW9aZf9KzoCRNGO3fdhLL9U0WurRrx7UWlh%2BsCFwX4WjjHv3tYxTBm5qMt8QcGLxwSxKSQY5kv6VHvRc40fK%2FNMxaF0bndjIz74sc4FeIOKhFJdzMdyTqlvQYRUk3FmVlTa%2BHMpxkToWz3125PPnrLDr9AB97Z7fMwoetkZQw38bYC%2Bkz5Vv%2FNtqp3Jk7chxp3B0%2Fz3cfuHOMqgHdmagWYEVbm1a1qYRITIyvtcY9MZsTDknZvCBjqkAVO%2FJ4Ol%2FfwxBydhhz8ZFzj0x5CcVy8dnQxs34yZ%2BhTv%2Bf0hQzWaGFkSQs6eM%2BjlZ4c9eIwa4oOrgbDH1Y8WLpno4lmnukeaZQgRejz5yqkR18boxjBafAOYpLnx%2FAZRQkjzDaLNtGETDE1k3KKqytSOGEsnbGq%2BjXvAwa7A%2B4i6c15tFj3dX6wpLgEC9joMIeAUOykmAyOGEQBArMddkbx6%2BVZV&X-Amz-Signature=fdb86b47796f00f690b8371bce133cd5634d6a7a4b9f1f534f290a0e93f6389c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGFJWW4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6KNzEWAThYlH6Oi6U7HNdGA68KQ0Ag7Vc9Sknbr1miAIhAIETW2vjPDXb90LIqO9yysXRrillp%2BJhXm3fqq2lDiHtKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEZvXAHjxoSj%2BgjwMq3AO%2FOd4ikBHnYQrQ9QLL1GTzf4eGGbP83YvykUcjbKGIrQ%2F41Ha8vYM75zpspcD7U0%2Fa8rjAlDA6Vfew8KDbgZaGWoSxonMeoTYs%2BQHAx%2FlZ2jA%2Fzv8yih7kELrngwT8eGVQgyVqKObOJygpD4EvqGaf5Ca7GShVDvuOA0ZWMk9g8wbgtYcPOZnS5tETGoOkIKcPZ4CilmfvVUhX3VETEYyH5nnTBk0YzHhHFnb4H4ewId2xhGX9bEeU4%2FgS2fG8%2FGEz0HXCTYNygDcr1x5Mhosp2vkXW2PvsUUfbME0dCUhjBpC3d3QWjb1GNsH2QfjvQV77Xq0ViKTAQ5UM%2BzTHq6uqp4JyM9YqxVl%2BahYVA3kOJuMHrsH%2FrGp60VRje1rDncpO1a9JMH3KKcDAnW9aZf9KzoCRNGO3fdhLL9U0WurRrx7UWlh%2BsCFwX4WjjHv3tYxTBm5qMt8QcGLxwSxKSQY5kv6VHvRc40fK%2FNMxaF0bndjIz74sc4FeIOKhFJdzMdyTqlvQYRUk3FmVlTa%2BHMpxkToWz3125PPnrLDr9AB97Z7fMwoetkZQw38bYC%2Bkz5Vv%2FNtqp3Jk7chxp3B0%2Fz3cfuHOMqgHdmagWYEVbm1a1qYRITIyvtcY9MZsTDknZvCBjqkAVO%2FJ4Ol%2FfwxBydhhz8ZFzj0x5CcVy8dnQxs34yZ%2BhTv%2Bf0hQzWaGFkSQs6eM%2BjlZ4c9eIwa4oOrgbDH1Y8WLpno4lmnukeaZQgRejz5yqkR18boxjBafAOYpLnx%2FAZRQkjzDaLNtGETDE1k3KKqytSOGEsnbGq%2BjXvAwa7A%2B4i6c15tFj3dX6wpLgEC9joMIeAUOykmAyOGEQBArMddkbx6%2BVZV&X-Amz-Signature=9bcd711732c3cd706903191fc6c6cd549257d88234b6d1a2552d27f53f1cf300&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
