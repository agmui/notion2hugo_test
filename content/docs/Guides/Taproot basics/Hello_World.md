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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CAIFUZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEcWq93Df%2Fxejpf02GlZGrSsuipO5Udc5lxv5pqKilSsAiBiCn2MFyN43V2Fn5SkUkxaEw1IUqc3z0m97QS7fJ8MNCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrx5XGJ8pyfQnF%2FWgKtwDPfUyQDHznOvx4xzNJ%2F6tKLOqjCEEzcFP7GeHCkMx22xEzYwyEtAis%2F64cJitcGcpqGZdcbB8ascaKPkEXWY2DdAk%2FWcR1JIugF%2BvXaB9IaReFk%2F5xc9z%2FvNgNoCTJMCJx9Vj1pNvcky4vcScvgIHUSetUvdxZQzov96LIEO%2FGKvHDbSWqW18m81vuangFnlCerd88IOfBydGoVB0WwRirz6y%2FxQpCaZNIQlLGOYtROCH0R96jqDLiN1l7QD%2B5icjtvlE3nDvzC7xefkL%2FRdgt6yD2nn%2BW222L7WqYqNCg9IL5KZexsZD31hOdVqiPFn39FwyF%2BGUrPODdWQAtORPSG1TuNmLSsRZO9IHljDbwT7K439TxzeqeFeJHS0HWzS7TIc3kDZNl2OXPsAyLtLw7N%2B2h2HE9JNE8KsRJ%2Fv2gzk3c2ygSIpZfu5vwlR6UJWIhtcwAb22fitJrgSZOE3mKFTRbSjMrEKXjpWSSjiBPWNwGSgHUqOk%2FxQbIOrLiRDa%2BIPbdOVJFCDLNnTPk5nH2A6ZcQNKKbx77kAGpv7VXl4Udx6fwfHZsIz4lVegBTl7sgKi6xpEitJc1LCHLNstslqD%2BwYKeyyQTTIYHKUhRXtiHxCVvnjQkbnbIbAwr%2Fu3vwY6pgEeO9vfDEzXrrkv99S9XczJ%2BnyfckeUhYPL8EeqA9eRxNwyd1PRKUq31QRW2mU%2FCu45dvra%2B4hHLtNKm9rOG%2B0uRdFBv0tKL%2FZg67maB2y%2FGwyQgp0T4Q%2FSEdxdRSta5OJ58JCjaaQG19HYOiZxiXwbClvmywCdWFWH7ark9CtVtMSerFNpbOB6Sj187jPTVODN7ZNo15JVSmHBJG46xqnWqhBMB1F6&X-Amz-Signature=6d9eb3dd0294abc728695dca5c648a72d5c90b36449b9462e2e902b8a1753864&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CAIFUZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEcWq93Df%2Fxejpf02GlZGrSsuipO5Udc5lxv5pqKilSsAiBiCn2MFyN43V2Fn5SkUkxaEw1IUqc3z0m97QS7fJ8MNCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrx5XGJ8pyfQnF%2FWgKtwDPfUyQDHznOvx4xzNJ%2F6tKLOqjCEEzcFP7GeHCkMx22xEzYwyEtAis%2F64cJitcGcpqGZdcbB8ascaKPkEXWY2DdAk%2FWcR1JIugF%2BvXaB9IaReFk%2F5xc9z%2FvNgNoCTJMCJx9Vj1pNvcky4vcScvgIHUSetUvdxZQzov96LIEO%2FGKvHDbSWqW18m81vuangFnlCerd88IOfBydGoVB0WwRirz6y%2FxQpCaZNIQlLGOYtROCH0R96jqDLiN1l7QD%2B5icjtvlE3nDvzC7xefkL%2FRdgt6yD2nn%2BW222L7WqYqNCg9IL5KZexsZD31hOdVqiPFn39FwyF%2BGUrPODdWQAtORPSG1TuNmLSsRZO9IHljDbwT7K439TxzeqeFeJHS0HWzS7TIc3kDZNl2OXPsAyLtLw7N%2B2h2HE9JNE8KsRJ%2Fv2gzk3c2ygSIpZfu5vwlR6UJWIhtcwAb22fitJrgSZOE3mKFTRbSjMrEKXjpWSSjiBPWNwGSgHUqOk%2FxQbIOrLiRDa%2BIPbdOVJFCDLNnTPk5nH2A6ZcQNKKbx77kAGpv7VXl4Udx6fwfHZsIz4lVegBTl7sgKi6xpEitJc1LCHLNstslqD%2BwYKeyyQTTIYHKUhRXtiHxCVvnjQkbnbIbAwr%2Fu3vwY6pgEeO9vfDEzXrrkv99S9XczJ%2BnyfckeUhYPL8EeqA9eRxNwyd1PRKUq31QRW2mU%2FCu45dvra%2B4hHLtNKm9rOG%2B0uRdFBv0tKL%2FZg67maB2y%2FGwyQgp0T4Q%2FSEdxdRSta5OJ58JCjaaQG19HYOiZxiXwbClvmywCdWFWH7ark9CtVtMSerFNpbOB6Sj187jPTVODN7ZNo15JVSmHBJG46xqnWqhBMB1F6&X-Amz-Signature=01801316b67f3c14d1e06ad06ca2307898456dc3e9e6b668e35e2a4d1e7f20c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
