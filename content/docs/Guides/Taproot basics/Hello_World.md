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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USOLVHHF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFMjddhok%2FldQqp0vY62wZzZ6Wfji1MoluiMcjzhGoB1AiAuhEI%2F1Blg8TdkIgLudCJA4wQgaz43g48UmbgM%2BfOC5yr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMPNNsVmat1icvuD80KtwDSpL8yFmRAzhWIfo2p4505%2FjvDmxntM9KJcoEDXxyFepebe3Tv80W6wOg3ywGn2SnOrFn92C%2BVRWzcgP6NeWzfT6L%2FT5HFAXFHvpy%2BFSCFH356EZItq27yb4Fhy62%2FukGd7hv4jSQDo%2Fdh7Cotm6rCyMZSF4xDWU6T0pFDv4SB3VQj2emUqGTtaC1Y1u4D5ymFDkf9S%2FP9mn8w8FNbize9Hvp0M6kf%2Bj0TXUkfJ5UVQYReVvm4EIEbH0JMz3I9YRlYG7gHNHaTXgOnXElCOQGztz4vuTuuMtk93r1cmXknp%2FHLUNHLE7uaqe2rlsQCMq%2BwEq8z3FJFhIpYAAq3wp5uVpuqxibWKDf8m4iPNZ3I8ZbBCcg0C3n7%2FjWfGOwfZtpaMhfA0f8tdTLmhFPuorIGkhiaw9lf2%2Bzq2KMtpCR5C5a3JmBgQ3muVKl%2Fk35EzRCr1N0%2B%2BKAqxVz2Eqr6pFMbdNl2goyDTfkpU9PdMv4JpLnrbRj2Z3FXlC4PftsSYlZZcw0gFI%2BqktiucsN5%2FNpzuS4nPJ8XmSqFpq2bt1vQsqPUHCjdhqwWgyYMOjgRITx%2FcObhDoaSva%2FhibApCwIVOg3dvb1C%2BhKi5rBORI959KGyzGOAbwMNgtZeH0w5ryOxAY6pgEQDrIbTBxmYD%2F%2BzE8T%2BOp2gL2q%2Bw%2Bjwu8QVjMaXop%2FCh1lCHE79DCjhMXD3vVdxLIdL7fONtRfTVFy7yNvwvNXdLiT%2FyVB4ExWwLA6q0hduOI69DBrFrkhqVXXROhl0X0%2FtHGmvmbtOdv9MfyqfdDZ4jXnADqfmcD7v70g%2B4TopeBKbX%2BcSFc9O2Z0Tj5sLtmPGOWcAxZoZBlhmEcNQuhBlwRPWeiU&X-Amz-Signature=5c6ad4c91f4e4da884f2eae19caf9e3e0ee7284026cf0b479e1acbcb2cc1edaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USOLVHHF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFMjddhok%2FldQqp0vY62wZzZ6Wfji1MoluiMcjzhGoB1AiAuhEI%2F1Blg8TdkIgLudCJA4wQgaz43g48UmbgM%2BfOC5yr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMPNNsVmat1icvuD80KtwDSpL8yFmRAzhWIfo2p4505%2FjvDmxntM9KJcoEDXxyFepebe3Tv80W6wOg3ywGn2SnOrFn92C%2BVRWzcgP6NeWzfT6L%2FT5HFAXFHvpy%2BFSCFH356EZItq27yb4Fhy62%2FukGd7hv4jSQDo%2Fdh7Cotm6rCyMZSF4xDWU6T0pFDv4SB3VQj2emUqGTtaC1Y1u4D5ymFDkf9S%2FP9mn8w8FNbize9Hvp0M6kf%2Bj0TXUkfJ5UVQYReVvm4EIEbH0JMz3I9YRlYG7gHNHaTXgOnXElCOQGztz4vuTuuMtk93r1cmXknp%2FHLUNHLE7uaqe2rlsQCMq%2BwEq8z3FJFhIpYAAq3wp5uVpuqxibWKDf8m4iPNZ3I8ZbBCcg0C3n7%2FjWfGOwfZtpaMhfA0f8tdTLmhFPuorIGkhiaw9lf2%2Bzq2KMtpCR5C5a3JmBgQ3muVKl%2Fk35EzRCr1N0%2B%2BKAqxVz2Eqr6pFMbdNl2goyDTfkpU9PdMv4JpLnrbRj2Z3FXlC4PftsSYlZZcw0gFI%2BqktiucsN5%2FNpzuS4nPJ8XmSqFpq2bt1vQsqPUHCjdhqwWgyYMOjgRITx%2FcObhDoaSva%2FhibApCwIVOg3dvb1C%2BhKi5rBORI959KGyzGOAbwMNgtZeH0w5ryOxAY6pgEQDrIbTBxmYD%2F%2BzE8T%2BOp2gL2q%2Bw%2Bjwu8QVjMaXop%2FCh1lCHE79DCjhMXD3vVdxLIdL7fONtRfTVFy7yNvwvNXdLiT%2FyVB4ExWwLA6q0hduOI69DBrFrkhqVXXROhl0X0%2FtHGmvmbtOdv9MfyqfdDZ4jXnADqfmcD7v70g%2B4TopeBKbX%2BcSFc9O2Z0Tj5sLtmPGOWcAxZoZBlhmEcNQuhBlwRPWeiU&X-Amz-Signature=d5e26659ff2c93bb8cdae106e9032dba7c659d113cbd82e55846945ffafdb3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
