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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQE77ESS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD9gd%2FqHscxJu2eCzlSeur%2FR9n47C5XAMThYPUzegO%2FAiEAu4FX3rP%2FJTaI3Z28Lm5XoZqVfB0gp1b4tcObR5sIWn8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvXnw6yBfoKHXNmBCrcA8IhAlcBIuS8vjVbgE129LW29ZeDxXHFPXFUl1hQGrxlQkFQxdxn4QbiMiwuSfNYCKLZB3cTYTh%2FR59s%2FwkGJA9BJsLD3eJBeZsnqq5iC8%2FCYR0JGcZHYSiubEjzhTPv16qMeWCyRNK1u2exnyAxXzKBE6JvIVUD1im4HY0DQlkyGsACGF26GMRpaNP3TGrF3XzeBWJM4%2BCTh7GJKMXknT3NWDvgnR5yrMSMtLxrgQ5oeUVZsSGKmHcU59DF%2BGrQeQwY%2BqEdEUm%2BP57qg%2FWaD3iwHO%2FIpes0%2Buk%2FIZeDy55RwZ7QmymN%2F4B21fxHClFnXmjhFKC%2BekLHZzgO2951I0%2FJAgVvtuzvoqqlosx7KgOYFtS05cGnmVBjGO5GAYdB5xRWjMswkhT%2BZT5eQleeqhJtoOS5Th%2FlumPRxErdwEJC78PETRBY4ma%2BhCzSblrNNleaWypaSj0VaZjylIiud8db8Kma9phIsMsf61%2FH8oYzeDmrkvZRb94yMoKrB5GzsBcTDjkcIxGVxTSptHZLxvi6oQ%2F28wgrYBnEubcuN9bbGSYv46xTIcHSYnBVT%2F56SnO5LGwBl7E8oWYfCoS5xBewTdvY281aTPqefYGY%2BQbW9b2Hin6ar6X6IC8NMMWWzL4GOqUBwv%2FRm6%2FCB468UyrCzL7%2Fb3JR82O%2FYfsRaIsABg8HO6qhWsGQV9ZqSfqSl%2FSzpHgx5b5BMm17Sa9n2PegP8W0Y3HJHs3nnhGw8fybZOIx%2BTHE6BFmtaQPHi3fGFhx2lfkH%2FPG6DMgLC6nW2qkKQE%2F3oY2NavzYCFKkVRrlmTMxZkzwZ%2BycZCEm%2FB855wvp9u1IIqwONt0slcSt6cdhSdrFY%2BLl0oD&X-Amz-Signature=7be73d938932058c37d95506302785978dfce61c31eb166df48e1d1bc6d84987&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQE77ESS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD9gd%2FqHscxJu2eCzlSeur%2FR9n47C5XAMThYPUzegO%2FAiEAu4FX3rP%2FJTaI3Z28Lm5XoZqVfB0gp1b4tcObR5sIWn8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvXnw6yBfoKHXNmBCrcA8IhAlcBIuS8vjVbgE129LW29ZeDxXHFPXFUl1hQGrxlQkFQxdxn4QbiMiwuSfNYCKLZB3cTYTh%2FR59s%2FwkGJA9BJsLD3eJBeZsnqq5iC8%2FCYR0JGcZHYSiubEjzhTPv16qMeWCyRNK1u2exnyAxXzKBE6JvIVUD1im4HY0DQlkyGsACGF26GMRpaNP3TGrF3XzeBWJM4%2BCTh7GJKMXknT3NWDvgnR5yrMSMtLxrgQ5oeUVZsSGKmHcU59DF%2BGrQeQwY%2BqEdEUm%2BP57qg%2FWaD3iwHO%2FIpes0%2Buk%2FIZeDy55RwZ7QmymN%2F4B21fxHClFnXmjhFKC%2BekLHZzgO2951I0%2FJAgVvtuzvoqqlosx7KgOYFtS05cGnmVBjGO5GAYdB5xRWjMswkhT%2BZT5eQleeqhJtoOS5Th%2FlumPRxErdwEJC78PETRBY4ma%2BhCzSblrNNleaWypaSj0VaZjylIiud8db8Kma9phIsMsf61%2FH8oYzeDmrkvZRb94yMoKrB5GzsBcTDjkcIxGVxTSptHZLxvi6oQ%2F28wgrYBnEubcuN9bbGSYv46xTIcHSYnBVT%2F56SnO5LGwBl7E8oWYfCoS5xBewTdvY281aTPqefYGY%2BQbW9b2Hin6ar6X6IC8NMMWWzL4GOqUBwv%2FRm6%2FCB468UyrCzL7%2Fb3JR82O%2FYfsRaIsABg8HO6qhWsGQV9ZqSfqSl%2FSzpHgx5b5BMm17Sa9n2PegP8W0Y3HJHs3nnhGw8fybZOIx%2BTHE6BFmtaQPHi3fGFhx2lfkH%2FPG6DMgLC6nW2qkKQE%2F3oY2NavzYCFKkVRrlmTMxZkzwZ%2BycZCEm%2FB855wvp9u1IIqwONt0slcSt6cdhSdrFY%2BLl0oD&X-Amz-Signature=35fcbc8c885330831e7b44b3fd7838d63aaec2537f3d6e6acc84214be137f821&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
