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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOFUDYL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeSYrHUWBEm6r7yP8Db1uPAxUNcjJwn2Y9BQHFAPNJtgIhAPeJZ25LsIFQjvXrhX3jif9ColcfhIzDAaXgGo7gRztTKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykuCIFksRSLn42nHAq3ANRnGHCtXyRC0FgAGviW0BZLitSg%2B%2BrH20nSMJhz7h1HwDuypcKoFVzAXRZnFNkNvPjqUZWb1Nd%2BR2RWhfqu23%2FyEKZIVEJwZu4jjK7NnjV97SUQPmlx%2FJzPQ%2FHjCWO7pay1AKFsbGefc1LJuvwIvuDQbBi88fm%2Bg9jc12xRLAPlQRMDhTA3nFbgM5luduD2FFLMnTg%2BBqbv2ScskNZlsT4bVYJJyTpsluCLF1JliYKpc5X8%2Fo4VPFiFBTr4%2B7uyIB1bSb1aUqgtDHHme%2BHC00u%2Bj69plOHsQ6KWQMDefCwcm51%2BHWOVgoUz7o2i7Lz8NqWGjv73EuIzcsK8NRow74oR4kplEkcUX3grxKJ9fs1tRyIvY5nWfpa9ZwlUDxQ175Dvy4AxXxWlqIVzAo0eYJfAU6FKnwTiTpYRR%2BI4OVLLFfk18wgPVmbeErttH9a7tx5AWPo6ocvz6y%2BDT8196f1kJzymjAYquqoe3ByoAPn8Kx%2FTf7U%2Fw2j0%2BxHI2w3qQo2yDoUhRB0nigdwS%2FtO2tsU9Q4pmuJ39JmSkD0k8mi6BN02LDPyX3BwACQaj%2Bbwp4ekY6t7Y8mc2dPsO8x%2Bjpvu1ddeUdYMHhS4wNF2oKjWRPphNGMhcJCN3BxmzCWsuHBBjqkASNPhkiLW18jksQ99zQRME8UGLXag3K%2BJzSTaYVtSN2ZWuZCO7GXXtase%2BKeSWBxrD%2BSxRlHqn4CYSix%2B5rsjUquTX%2FWZHBI8GtB1LeeLH0SQmN4oJa8DsaGZfHg41vcX01mQB79FALDkD4E4bi4qvXa0G8vfMxjrp%2FBIpoDa06TshqzzS0jDCezv2cSe%2FD2BE3e3WrunkfyjSodRoaO5mIZtM%2Fe&X-Amz-Signature=76b21ea59270510c699d15389bd33663ec11ada9cbf6dc3a7f89394ce9f38a75&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOFUDYL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeSYrHUWBEm6r7yP8Db1uPAxUNcjJwn2Y9BQHFAPNJtgIhAPeJZ25LsIFQjvXrhX3jif9ColcfhIzDAaXgGo7gRztTKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykuCIFksRSLn42nHAq3ANRnGHCtXyRC0FgAGviW0BZLitSg%2B%2BrH20nSMJhz7h1HwDuypcKoFVzAXRZnFNkNvPjqUZWb1Nd%2BR2RWhfqu23%2FyEKZIVEJwZu4jjK7NnjV97SUQPmlx%2FJzPQ%2FHjCWO7pay1AKFsbGefc1LJuvwIvuDQbBi88fm%2Bg9jc12xRLAPlQRMDhTA3nFbgM5luduD2FFLMnTg%2BBqbv2ScskNZlsT4bVYJJyTpsluCLF1JliYKpc5X8%2Fo4VPFiFBTr4%2B7uyIB1bSb1aUqgtDHHme%2BHC00u%2Bj69plOHsQ6KWQMDefCwcm51%2BHWOVgoUz7o2i7Lz8NqWGjv73EuIzcsK8NRow74oR4kplEkcUX3grxKJ9fs1tRyIvY5nWfpa9ZwlUDxQ175Dvy4AxXxWlqIVzAo0eYJfAU6FKnwTiTpYRR%2BI4OVLLFfk18wgPVmbeErttH9a7tx5AWPo6ocvz6y%2BDT8196f1kJzymjAYquqoe3ByoAPn8Kx%2FTf7U%2Fw2j0%2BxHI2w3qQo2yDoUhRB0nigdwS%2FtO2tsU9Q4pmuJ39JmSkD0k8mi6BN02LDPyX3BwACQaj%2Bbwp4ekY6t7Y8mc2dPsO8x%2Bjpvu1ddeUdYMHhS4wNF2oKjWRPphNGMhcJCN3BxmzCWsuHBBjqkASNPhkiLW18jksQ99zQRME8UGLXag3K%2BJzSTaYVtSN2ZWuZCO7GXXtase%2BKeSWBxrD%2BSxRlHqn4CYSix%2B5rsjUquTX%2FWZHBI8GtB1LeeLH0SQmN4oJa8DsaGZfHg41vcX01mQB79FALDkD4E4bi4qvXa0G8vfMxjrp%2FBIpoDa06TshqzzS0jDCezv2cSe%2FD2BE3e3WrunkfyjSodRoaO5mIZtM%2Fe&X-Amz-Signature=2e62575df8f620a561bf86b84018843fe5ef7c18944f66e2a45cace47fc79aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
