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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZBFNLN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFElczfd2doHWqYq5KYiXPL8s4DU6Z4XstSaPkcj2EHnAiEA5c29cxG%2FbWK0Xb0MYonkxDGtteAfpd02U19%2Fc69DDkEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGn74p5QUsL8uZFgCircAxAg3gjMKUCibZ9X37Y2EZ4BVxUp2soAYzPpZ%2FJaUvcMb8G%2FUoevC5Iti3h8rJNOKZL6sOFP1mJ%2BWmVmxdu1RuNYXdlah4UODk7PzCG8pclau3vCnA8gbb7hJPbuMgw1rV1hzg7X4dok0jjHIY%2FL7Nhm32iF6H7fUKyMKWr78HR86B7%2FqpMBKovwThv12rcp4ZDm9a60tSBuB006kjQZOiSFnEQF%2BSJXp%2BR2abTO6MtTC0owqAM%2FBTGeS77%2BBkbXAo11y2Iuo4BnVqI2UXpMLpvYF84P4MHsdu6YHb1u%2BGpKCna7Si4K8f8Fr0Kt4rkpkGCDkJhZx20mF%2B9cFltN5evMomMjT%2BJr%2FQjiv1uPaWHTLKD5%2FK%2B12LV6UjBMmbahJz7dvCEJLe%2F6NuPpsUwhLM2vaspDe44OjcziIGvwaXRr%2FhA0edEt4onp6YwSZye%2B79k09YghNv2fMW1prB1QD8Zoko8hvoYeaMvMw6Lu2QxFjdS6Og5WmOmaMGVelVG7nLKKnAQp%2B2m3eRfePqkK%2BX%2FdkOz1A6sGmFQ85aRq79mxF80kyoz9V4UaI%2FoWQ%2FtcgZHrxjsF2BrtFSa1keC%2FzdUy3gdLorG8ro631zYHJEVsnzbCrIevC%2FYAyVhGMI7JscAGOqUBWrvxm4DljaxgeCxyUjMAL%2F1ukkARAcA5xEOFm4sNQ3vd9LrNRU4ZZzIQPED6SHiKi17gP%2Bko5FEDy%2FVCuOE3C%2BdOGY5Hbyoc7GLEd%2BaBbONEz%2B5ur8GLEMlvDIT4oe86%2BRKhDidwrgN9%2BVzCyYALoVz1mcuCt8%2F5FaW6kfiS1iz73LHtRWut7uPkeH50aBHEvUW2tB9XuXOkPaH2T50EjJ16L93G&X-Amz-Signature=a713dbf0a86733db4f6c726f22f3f0a42dca86a20c8fb821115f38799d0a6a31&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZBFNLN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFElczfd2doHWqYq5KYiXPL8s4DU6Z4XstSaPkcj2EHnAiEA5c29cxG%2FbWK0Xb0MYonkxDGtteAfpd02U19%2Fc69DDkEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGn74p5QUsL8uZFgCircAxAg3gjMKUCibZ9X37Y2EZ4BVxUp2soAYzPpZ%2FJaUvcMb8G%2FUoevC5Iti3h8rJNOKZL6sOFP1mJ%2BWmVmxdu1RuNYXdlah4UODk7PzCG8pclau3vCnA8gbb7hJPbuMgw1rV1hzg7X4dok0jjHIY%2FL7Nhm32iF6H7fUKyMKWr78HR86B7%2FqpMBKovwThv12rcp4ZDm9a60tSBuB006kjQZOiSFnEQF%2BSJXp%2BR2abTO6MtTC0owqAM%2FBTGeS77%2BBkbXAo11y2Iuo4BnVqI2UXpMLpvYF84P4MHsdu6YHb1u%2BGpKCna7Si4K8f8Fr0Kt4rkpkGCDkJhZx20mF%2B9cFltN5evMomMjT%2BJr%2FQjiv1uPaWHTLKD5%2FK%2B12LV6UjBMmbahJz7dvCEJLe%2F6NuPpsUwhLM2vaspDe44OjcziIGvwaXRr%2FhA0edEt4onp6YwSZye%2B79k09YghNv2fMW1prB1QD8Zoko8hvoYeaMvMw6Lu2QxFjdS6Og5WmOmaMGVelVG7nLKKnAQp%2B2m3eRfePqkK%2BX%2FdkOz1A6sGmFQ85aRq79mxF80kyoz9V4UaI%2FoWQ%2FtcgZHrxjsF2BrtFSa1keC%2FzdUy3gdLorG8ro631zYHJEVsnzbCrIevC%2FYAyVhGMI7JscAGOqUBWrvxm4DljaxgeCxyUjMAL%2F1ukkARAcA5xEOFm4sNQ3vd9LrNRU4ZZzIQPED6SHiKi17gP%2Bko5FEDy%2FVCuOE3C%2BdOGY5Hbyoc7GLEd%2BaBbONEz%2B5ur8GLEMlvDIT4oe86%2BRKhDidwrgN9%2BVzCyYALoVz1mcuCt8%2F5FaW6kfiS1iz73LHtRWut7uPkeH50aBHEvUW2tB9XuXOkPaH2T50EjJ16L93G&X-Amz-Signature=0d5ba369749fa1e62e96bdc3b1a22b4199a07ed1e894428a0d5242dcee527943&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
