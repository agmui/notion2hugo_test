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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFYNPCP%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPDHDXOLjbYYs%2B9pn0e6DJO4odwKctm65%2BaL9h24W7oAiBcOFEQSblo%2FH9YIWkLJ3CbeWlrkhMJBRrca8nIcQuhPCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsg5JcownN4oN5q1KtwD580CYYFvNUqn0i66xaxRO4ziQ7uefDe%2BROwuTOa1U11aQjzIOxN7t6K8aAcBftl9Aj3IlXNo7T7hh5zVQ%2BwZwJJK5CdoVciPO2i0kSUC2WEec1dMxqJNaFOiHsk2%2FDq6fEMrnCCy32gfdZRq3gIw6kH2rHuyOeA38FIe7Jr9sjs3G%2BV5OLALFrFIMJYdywBGAntGRbn61Ror1LdJrXVcpemPwh179dNN8MP85lD6KHktCEMGojUf6t6r7ZiR0%2BQgeZcSms%2FShUOOzKr%2FvLol7irTq1XZ0i5ytJbPRZvZXX8fnAAF4BHxDwzDCfGEtnqoO%2BJnp9nI7733GMVCoAlhrjZNSACzlYdPUp33eUY%2FuuvKejm2liMPU1pzDGhgwo1rHQ4lKn5p2bbqY503JKCd6RzgC3SX4If5NkreyVqlZFtS%2FpX8wNXagvEHtEN4DWosDiAh6RlyN92IkqGY8OJrlCXmbl9tbp5cLnpw06PJ06lqox8eUMcfKtzbgT3JQpDVuQV7Yky4%2FTpF34GuY7tr8u4S5YlBC3rRLSgW8SHFs6d2njWl4suc04U2zALdTQZyOgPmSf93pzkfAEJdEjWPlB4HwzQy0h0aC2y88diRdl3ukO1paUqUenPdTbkwqb3TwgY6pgG0UjfWqCB612nBK65UY4pRBC7dpBo0iXvmekZTloG4wCtmvGODX4XiqK2nxC2OTBCEl%2BUCNqfx0op1L79pGGwnhoJP749tyoxGEQ1ahWrhxQJaZFGb1iubSLGl1R7yeFKmu%2FRMQQ4uPpKbBy%2FokzFaRxvgW4H4%2FkjDpE8FFKo8hdy1mJSiY%2FWU78onF61t3P%2FJO6rEZvNut%2BFx8qe7MP286nVBKHb3&X-Amz-Signature=50afbdedbfc18f3c8252166046918e358ddb82658e461d5ea64b218a8127e4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFYNPCP%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPDHDXOLjbYYs%2B9pn0e6DJO4odwKctm65%2BaL9h24W7oAiBcOFEQSblo%2FH9YIWkLJ3CbeWlrkhMJBRrca8nIcQuhPCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsg5JcownN4oN5q1KtwD580CYYFvNUqn0i66xaxRO4ziQ7uefDe%2BROwuTOa1U11aQjzIOxN7t6K8aAcBftl9Aj3IlXNo7T7hh5zVQ%2BwZwJJK5CdoVciPO2i0kSUC2WEec1dMxqJNaFOiHsk2%2FDq6fEMrnCCy32gfdZRq3gIw6kH2rHuyOeA38FIe7Jr9sjs3G%2BV5OLALFrFIMJYdywBGAntGRbn61Ror1LdJrXVcpemPwh179dNN8MP85lD6KHktCEMGojUf6t6r7ZiR0%2BQgeZcSms%2FShUOOzKr%2FvLol7irTq1XZ0i5ytJbPRZvZXX8fnAAF4BHxDwzDCfGEtnqoO%2BJnp9nI7733GMVCoAlhrjZNSACzlYdPUp33eUY%2FuuvKejm2liMPU1pzDGhgwo1rHQ4lKn5p2bbqY503JKCd6RzgC3SX4If5NkreyVqlZFtS%2FpX8wNXagvEHtEN4DWosDiAh6RlyN92IkqGY8OJrlCXmbl9tbp5cLnpw06PJ06lqox8eUMcfKtzbgT3JQpDVuQV7Yky4%2FTpF34GuY7tr8u4S5YlBC3rRLSgW8SHFs6d2njWl4suc04U2zALdTQZyOgPmSf93pzkfAEJdEjWPlB4HwzQy0h0aC2y88diRdl3ukO1paUqUenPdTbkwqb3TwgY6pgG0UjfWqCB612nBK65UY4pRBC7dpBo0iXvmekZTloG4wCtmvGODX4XiqK2nxC2OTBCEl%2BUCNqfx0op1L79pGGwnhoJP749tyoxGEQ1ahWrhxQJaZFGb1iubSLGl1R7yeFKmu%2FRMQQ4uPpKbBy%2FokzFaRxvgW4H4%2FkjDpE8FFKo8hdy1mJSiY%2FWU78onF61t3P%2FJO6rEZvNut%2BFx8qe7MP286nVBKHb3&X-Amz-Signature=5cff162a4971f0aa2b0ae51d15e48c83b7f80cd79bb2c6dba8fb3e5dda9f60b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
