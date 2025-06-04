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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6KUSJF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhiTfko4o26xc8OmVQaHYtzn7WCVhnrhsvnxZax%2BnpJQIhALPxChOFFKPQnqkvoS%2Bmz6j2oi%2BXx4pMbvV8OQNc%2F0FiKv8DCC8QABoMNjM3NDIzMTgzODA1IgxdKd5AXBOkBA%2B6%2FYYq3APoyi6zpxxd4PiRuR3iPZUc7hIgabQcXp5Od3M1uDszvhhD70wg4Og0X5XqfZEs6oohUrqgkgveIgwufg2FDTzuixGbzYYs7Gsh6RN9ERTTFnoFtcyQSxo80vNb6L3ueP%2F%2Bbkp5qyLZVNXm%2FxY5PH%2BDx8%2F8kjF%2Fr4ctUddv1B0l12p45bAX%2BYOZCdiPehBsITBzRChAzEcmIwv%2Fy%2BEArLjrC4DCJd4Klfbw8qADYSpQKn7h1GafM7ZcZnLSCYc%2F7kriXENHSHUA4zhvjgu6170LxVn5jB3rCPqulis6ycmeBVOoE9xjjttXmWRXzCV862zFN0qGMv4YKn%2BjY4SumYv32cwp0OIIhQB3nxYW6YzB5nrJNl2YzRjL3xMsVpZkmYRRCvFxlP7kkN53ib0SP6aO3QmfzeBTUx92Or8KzzgCWG7M25r8V8bYh8PYuQntWuC%2BFRV3Fbin8M0SvXkI0lQszCpOQm3avQsmS51Lsk8SdFrwos1H4a32%2BYzPmV0n%2F3o7oOiNhR1Il%2B4SCmiYIUH9jAhQIP%2FL2FX6xcH%2BgTykhRr7ePzwCzcsJNS2uQqVpUNc5MuKb4Cc%2Foe9ag6T2GXSvuEJN7CkK7X4r9GIQUhT0Jxs5SkD%2Fll%2Ft6zuRDDFqoHCBjqkAR3WxvgvvT%2FpAN3Qs0vKA%2BKow1EwQ8AZY9dh%2BAIBLTMUvWcGbwFXeow5wwhQEA8KRYvfkJ8BNnB1CUO%2BKajSRUfi6KV331wJ7tPu7fOXgPTZoMxrUQb2q2dxnDcjthn9QQsWXqXH4IgJdKrBXSdGz9ivWb%2FSAFNAP1c9LfLVhxysqGDPhfjwQ6mdfUxkc9v2YevSp%2FdKce5CQDuzNMla2QTYBSTQ&X-Amz-Signature=f9ac52bd1eca5baa1d5ee1d8683c18b70c01d0407bf3f69eb9c9c88f92b1db8d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6KUSJF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhiTfko4o26xc8OmVQaHYtzn7WCVhnrhsvnxZax%2BnpJQIhALPxChOFFKPQnqkvoS%2Bmz6j2oi%2BXx4pMbvV8OQNc%2F0FiKv8DCC8QABoMNjM3NDIzMTgzODA1IgxdKd5AXBOkBA%2B6%2FYYq3APoyi6zpxxd4PiRuR3iPZUc7hIgabQcXp5Od3M1uDszvhhD70wg4Og0X5XqfZEs6oohUrqgkgveIgwufg2FDTzuixGbzYYs7Gsh6RN9ERTTFnoFtcyQSxo80vNb6L3ueP%2F%2Bbkp5qyLZVNXm%2FxY5PH%2BDx8%2F8kjF%2Fr4ctUddv1B0l12p45bAX%2BYOZCdiPehBsITBzRChAzEcmIwv%2Fy%2BEArLjrC4DCJd4Klfbw8qADYSpQKn7h1GafM7ZcZnLSCYc%2F7kriXENHSHUA4zhvjgu6170LxVn5jB3rCPqulis6ycmeBVOoE9xjjttXmWRXzCV862zFN0qGMv4YKn%2BjY4SumYv32cwp0OIIhQB3nxYW6YzB5nrJNl2YzRjL3xMsVpZkmYRRCvFxlP7kkN53ib0SP6aO3QmfzeBTUx92Or8KzzgCWG7M25r8V8bYh8PYuQntWuC%2BFRV3Fbin8M0SvXkI0lQszCpOQm3avQsmS51Lsk8SdFrwos1H4a32%2BYzPmV0n%2F3o7oOiNhR1Il%2B4SCmiYIUH9jAhQIP%2FL2FX6xcH%2BgTykhRr7ePzwCzcsJNS2uQqVpUNc5MuKb4Cc%2Foe9ag6T2GXSvuEJN7CkK7X4r9GIQUhT0Jxs5SkD%2Fll%2Ft6zuRDDFqoHCBjqkAR3WxvgvvT%2FpAN3Qs0vKA%2BKow1EwQ8AZY9dh%2BAIBLTMUvWcGbwFXeow5wwhQEA8KRYvfkJ8BNnB1CUO%2BKajSRUfi6KV331wJ7tPu7fOXgPTZoMxrUQb2q2dxnDcjthn9QQsWXqXH4IgJdKrBXSdGz9ivWb%2FSAFNAP1c9LfLVhxysqGDPhfjwQ6mdfUxkc9v2YevSp%2FdKce5CQDuzNMla2QTYBSTQ&X-Amz-Signature=54ebffc291210fd4ad4b2f06d51c5a6784e87c54066f886966e2a05c241ee1f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
