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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GNKUZVC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGWufsclo9rF4%2BaxXTtePaenpSZ%2BnWmg2F4qi8T0L3PbAiBFGhUBLcji5YaYjtHkPOk6YkwjqB1OMMdPCfJMEZEWRyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2BsfCw4gYXZrvxJZFKtwDr%2F%2F1MEtqR%2FLf5PqZ8x4qPaUIgsWDOSm%2BFeduBC1%2BNildN4BJincgkRjXfEKrGItQHY1f%2FANXVgPgtPpcSJx%2BIlAtBDIAbt0IPB8laN01EDGuFgAZg8zDSDD027QggURU4OsIMnn%2BY%2B1s0zuWDN4V9JCg11PH%2FKl04GrnO2Tdn511MwnZyj8pE27BcoG9ouAGh%2BabyCvnKjy56tAxLLsi84MIxU5e3XMNNsG53eawqq6r0TwsmNR7ip5CGCst9uTJ%2BPDPah9dNTKx8nwM8Bo1OD7%2FoHTSvL02qvlPRa%2BVmy%2F3Gomw6lh64HpUWci6%2F2MCdfVwrhYAp2Wyo%2B%2Fr701FMK18ggPFblY8LKZar3P4tgOvOcmzITwoXj3vRICrZwAjgkz01HyxaKxYO2vlNAKIsmau8tVVXAfRuY3lJ%2Bmtd65TbbGPIolwnz5FQhHX9A9%2By0%2BNf64tsVP%2FaXULDN2y0EtiXT33pED9MeBDOGlZfjUHHq4DKWspgiaXM9VsOdwSh%2BccKNj%2B8e0yyXcj5mJcPGrKqx1MeRSGTGQb75Y0m4Es4gT3FdUvXY8Id9ZuhZSRaH%2Fhbnov9y6EVnmmY92C0Q%2F7fv2up3gXbkQk%2BhsfdjYDBCYP7dcVe7ZxbVAwyLLpwgY6pgE%2FkR%2BGkZPHAlHEEAQ3xD3H2mGqceQPiL6z0%2FROz4dwyMT%2BmiWfcpBvS%2BBeeKifSokXK7JMUssrOXwkQOjdD6n1B53TUbDdI2KEVB1yr18HRDcsuoT072T%2FJQJSn3cM5hU9Gg8S5GBcnOSfFNB3Xutli1hJBBouiXqP9o9Nc%2FYRTCwYBDcT29XqLrJEb%2FinlpdQULLrimlfx9v9H%2BOnD0EJbcnvCLC3&X-Amz-Signature=bf5d7231f06d508a9eb7131fd39490a518819627b960f8166400c0b22d146366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GNKUZVC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGWufsclo9rF4%2BaxXTtePaenpSZ%2BnWmg2F4qi8T0L3PbAiBFGhUBLcji5YaYjtHkPOk6YkwjqB1OMMdPCfJMEZEWRyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2BsfCw4gYXZrvxJZFKtwDr%2F%2F1MEtqR%2FLf5PqZ8x4qPaUIgsWDOSm%2BFeduBC1%2BNildN4BJincgkRjXfEKrGItQHY1f%2FANXVgPgtPpcSJx%2BIlAtBDIAbt0IPB8laN01EDGuFgAZg8zDSDD027QggURU4OsIMnn%2BY%2B1s0zuWDN4V9JCg11PH%2FKl04GrnO2Tdn511MwnZyj8pE27BcoG9ouAGh%2BabyCvnKjy56tAxLLsi84MIxU5e3XMNNsG53eawqq6r0TwsmNR7ip5CGCst9uTJ%2BPDPah9dNTKx8nwM8Bo1OD7%2FoHTSvL02qvlPRa%2BVmy%2F3Gomw6lh64HpUWci6%2F2MCdfVwrhYAp2Wyo%2B%2Fr701FMK18ggPFblY8LKZar3P4tgOvOcmzITwoXj3vRICrZwAjgkz01HyxaKxYO2vlNAKIsmau8tVVXAfRuY3lJ%2Bmtd65TbbGPIolwnz5FQhHX9A9%2By0%2BNf64tsVP%2FaXULDN2y0EtiXT33pED9MeBDOGlZfjUHHq4DKWspgiaXM9VsOdwSh%2BccKNj%2B8e0yyXcj5mJcPGrKqx1MeRSGTGQb75Y0m4Es4gT3FdUvXY8Id9ZuhZSRaH%2Fhbnov9y6EVnmmY92C0Q%2F7fv2up3gXbkQk%2BhsfdjYDBCYP7dcVe7ZxbVAwyLLpwgY6pgE%2FkR%2BGkZPHAlHEEAQ3xD3H2mGqceQPiL6z0%2FROz4dwyMT%2BmiWfcpBvS%2BBeeKifSokXK7JMUssrOXwkQOjdD6n1B53TUbDdI2KEVB1yr18HRDcsuoT072T%2FJQJSn3cM5hU9Gg8S5GBcnOSfFNB3Xutli1hJBBouiXqP9o9Nc%2FYRTCwYBDcT29XqLrJEb%2FinlpdQULLrimlfx9v9H%2BOnD0EJbcnvCLC3&X-Amz-Signature=7396c9ea90d86bc623abca8bc52c0e8c5fdd564a9ab15500df57a79a548e8246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
