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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI56P4QQ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEQ2kxfsbR4h%2FJeUjIBfFF4uap1WAx0yAz4Hgp%2BaIHYzAiBts8RSyzaQe3NBNiiQmyzafzDOq%2FuhABoAot4HP3W9UiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgfkfvpm0mqrEjcTCKtwDWLIrH8%2FWnng8UsvBTedCmyHWsbjgZiEIjkbXmr6gP8jI3KgKEqXVnMv%2BCnvwC3sgSlidSDHHi0zHiu3tFgQ6WGD44UiDw9NgZlPtB9GdqXIzDCijDOgFE685ItlOCvcEELBqSfYCmLblx0WCRHgNEQMo%2BJ68tUlCKKTMr3wG7mto5TYUdlR%2FZbAnhMoiF32ahyQlBZll2%2BxjJylLFvk7%2BbNdTQJsvHG8BaAxjJKKsvaRC0EqgilPOLjNnUBjVWrE3t9i5xW3aoSgV5scUxlHqxsjhUFjnULfT%2B4CZ6tgO9vjzZREgBM7Ft%2BbG99CcCThvK5tpUHyeu21%2FqK9s8y56Hmw02xtArBonwvqJhAxSMkGt3PKhCDj%2BAorPveukCuXsVr8cgq4K7dpbcxlYDCFW7ZvlX04W1IptfEX1jhibmfKhCWpWavH5L4%2BzHbWHZWIzn2V9wq2pIw92go%2FAsk7U4988JbxM9msBQLLpv0XIRxMAIk9Fn3pxSj%2BOHy8bSycn418St%2FCQfVn4MOPBcNok8kRE2PSMIKML%2Fb%2B6oTTImD%2BKci2D0uj26q3WnjHzDoFaNqoOgBIg8seTqVfJ1Kks1gYBYpEOCRei2Fj3hFTdf3NZzzz%2FVT9xS1S5Kow7fqLywY6pgGbjqYQccNKrtQIgcCY6irrGJLEOw9ytJaMv5RNkc%2FyMBCdaR9QXwUnWNsUvMMvPLuxccSU6KEtOAF6hwLlUvO3xasiX%2Fzl%2FL12XudYA70qxFPQPC2aWlFrbRGjVCBpSUJDtK4%2BZXlDqTyF2MVWbpnUk8FsI9RuR3d3Wzq30ySFf5jLJatbEBtNYixtt8EqDjP2DPwWHiEVeKDaVB21ic%2FFREumetzJ&X-Amz-Signature=9ac9eda7d9f099a60655b33af65af4c192b12cacb73a28a62529b9e0ddb82b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI56P4QQ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEQ2kxfsbR4h%2FJeUjIBfFF4uap1WAx0yAz4Hgp%2BaIHYzAiBts8RSyzaQe3NBNiiQmyzafzDOq%2FuhABoAot4HP3W9UiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgfkfvpm0mqrEjcTCKtwDWLIrH8%2FWnng8UsvBTedCmyHWsbjgZiEIjkbXmr6gP8jI3KgKEqXVnMv%2BCnvwC3sgSlidSDHHi0zHiu3tFgQ6WGD44UiDw9NgZlPtB9GdqXIzDCijDOgFE685ItlOCvcEELBqSfYCmLblx0WCRHgNEQMo%2BJ68tUlCKKTMr3wG7mto5TYUdlR%2FZbAnhMoiF32ahyQlBZll2%2BxjJylLFvk7%2BbNdTQJsvHG8BaAxjJKKsvaRC0EqgilPOLjNnUBjVWrE3t9i5xW3aoSgV5scUxlHqxsjhUFjnULfT%2B4CZ6tgO9vjzZREgBM7Ft%2BbG99CcCThvK5tpUHyeu21%2FqK9s8y56Hmw02xtArBonwvqJhAxSMkGt3PKhCDj%2BAorPveukCuXsVr8cgq4K7dpbcxlYDCFW7ZvlX04W1IptfEX1jhibmfKhCWpWavH5L4%2BzHbWHZWIzn2V9wq2pIw92go%2FAsk7U4988JbxM9msBQLLpv0XIRxMAIk9Fn3pxSj%2BOHy8bSycn418St%2FCQfVn4MOPBcNok8kRE2PSMIKML%2Fb%2B6oTTImD%2BKci2D0uj26q3WnjHzDoFaNqoOgBIg8seTqVfJ1Kks1gYBYpEOCRei2Fj3hFTdf3NZzzz%2FVT9xS1S5Kow7fqLywY6pgGbjqYQccNKrtQIgcCY6irrGJLEOw9ytJaMv5RNkc%2FyMBCdaR9QXwUnWNsUvMMvPLuxccSU6KEtOAF6hwLlUvO3xasiX%2Fzl%2FL12XudYA70qxFPQPC2aWlFrbRGjVCBpSUJDtK4%2BZXlDqTyF2MVWbpnUk8FsI9RuR3d3Wzq30ySFf5jLJatbEBtNYixtt8EqDjP2DPwWHiEVeKDaVB21ic%2FFREumetzJ&X-Amz-Signature=ae13935df17432c7c1537b34d98fb7f070de278a7269eacc8cc55868abad87f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
