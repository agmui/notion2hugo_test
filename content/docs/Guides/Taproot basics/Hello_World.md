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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PBCI3Q%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDpORxIFAhCyz9zQ%2FGLCwGoh8%2BpxZN%2BnUOp2QajSlZ7KAiApBhAVpcfJImw8FwEWLXQv80aY2FOtOag7NhdjjQvB1iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwLeMlTFKempn0vHGKtwDOHUMO3IC27JM3HuY7NhgMp1dA3idDJljsxiIyuG1eWrigEYKTO1NYYOllauzEdmCwSxDd%2BV4t2XasSmaQfCE9IHaLA%2BRt0Y5rZRaQtn48zjJc9BMynJQhPVbIjzsyIO4JF112zAfseVJr8GyenYRTxPV2yKcxKP5R2DzibHd5xf0SjL1xkTOQhEcn%2ByXex4Z%2FP7ld8cih29lTzLB151QAPqC%2BZFZ7jCHHLS83%2B70q66XlnHOlw6L6DuSxdlIllFJPNLIADZ9zVdyjffMFgO%2FjYM1gymwWlUs7xuPsEARprafI5Hn1YzZxK5S9LdgGPeJ0lmEMUFxazj6W11beJYa3e76u79zq00Fwm446yHrS8JRggpEp5nT3qnSDGYs56R0M14t2wO9Cu%2BO%2BQS1ybLHD0h2p7Itj4HdMqDDMxzwcxTSZtLzQJpaWJoYPxBrnsAjCMnREplGtNdEzCHoTzsFxj3GuJU9WLlkMoHavaE7KoyM8t1d16OppktL2x7soPg5DbLYryg34Y7x2DQApIzKgqbNK%2FnB16hgedZbio64xkVPI7bv059sA3OEqX5jI%2FH%2FORYAWygfKu9PgRnmf%2FO8nA1BA2hihYl3FaW5AV%2BW3a8UaHdEAuuDgH1X8aEw94iqwgY6pgHbTyiXDLkVEFxPc%2Fr978JGDce69YYvgXyCCdikvXQw7EUKsnFpOY7y9ck32jqBCmausXVz%2F9V%2B5k0e%2FSrkr2YUonR7Mf3SEKdUhm7vbGD2bP4M6PvVq4B5bSTO5mFYkUEBy0ZMLbZLh3Dn%2FIrHKWHz1zYfQOUXvWZs4UHp6PpKDww4cvbOp0h%2FxmB14%2B2DlxWiUrHgADoqeAaXEzKu7wK6gk2Q5YGO&X-Amz-Signature=2aac57d9e19b4b445ae0a70f956943c0185618d83238f6b128564547c3f16196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PBCI3Q%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDpORxIFAhCyz9zQ%2FGLCwGoh8%2BpxZN%2BnUOp2QajSlZ7KAiApBhAVpcfJImw8FwEWLXQv80aY2FOtOag7NhdjjQvB1iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwLeMlTFKempn0vHGKtwDOHUMO3IC27JM3HuY7NhgMp1dA3idDJljsxiIyuG1eWrigEYKTO1NYYOllauzEdmCwSxDd%2BV4t2XasSmaQfCE9IHaLA%2BRt0Y5rZRaQtn48zjJc9BMynJQhPVbIjzsyIO4JF112zAfseVJr8GyenYRTxPV2yKcxKP5R2DzibHd5xf0SjL1xkTOQhEcn%2ByXex4Z%2FP7ld8cih29lTzLB151QAPqC%2BZFZ7jCHHLS83%2B70q66XlnHOlw6L6DuSxdlIllFJPNLIADZ9zVdyjffMFgO%2FjYM1gymwWlUs7xuPsEARprafI5Hn1YzZxK5S9LdgGPeJ0lmEMUFxazj6W11beJYa3e76u79zq00Fwm446yHrS8JRggpEp5nT3qnSDGYs56R0M14t2wO9Cu%2BO%2BQS1ybLHD0h2p7Itj4HdMqDDMxzwcxTSZtLzQJpaWJoYPxBrnsAjCMnREplGtNdEzCHoTzsFxj3GuJU9WLlkMoHavaE7KoyM8t1d16OppktL2x7soPg5DbLYryg34Y7x2DQApIzKgqbNK%2FnB16hgedZbio64xkVPI7bv059sA3OEqX5jI%2FH%2FORYAWygfKu9PgRnmf%2FO8nA1BA2hihYl3FaW5AV%2BW3a8UaHdEAuuDgH1X8aEw94iqwgY6pgHbTyiXDLkVEFxPc%2Fr978JGDce69YYvgXyCCdikvXQw7EUKsnFpOY7y9ck32jqBCmausXVz%2F9V%2B5k0e%2FSrkr2YUonR7Mf3SEKdUhm7vbGD2bP4M6PvVq4B5bSTO5mFYkUEBy0ZMLbZLh3Dn%2FIrHKWHz1zYfQOUXvWZs4UHp6PpKDww4cvbOp0h%2FxmB14%2B2DlxWiUrHgADoqeAaXEzKu7wK6gk2Q5YGO&X-Amz-Signature=f73af2d28385b312df16de22767f0ba89584baa83930890dff679a5aed95d735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
