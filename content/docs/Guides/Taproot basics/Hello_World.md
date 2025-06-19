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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVFFKLH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FAzmg7suVB9qMxpWL3RbSTu325OSZxL9fiUIoVLKsLQIhAJYK7qCRA9xJTcFegZZFPRDsRwI97tzzB98MHmp6D6XBKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsSB7IeCfR4xix04oq3AMgGmNFBLVAh0FafzUdFoHj9dpnqPiyV8mg0ER96VCUk9eDU%2BAsbd10JPrim5vo9U70%2F%2BFehOHefzFnm3Rc19LV2626rmKONP3VlKn0tqgMDyy6H06JbpTUaADzlCBswCUu5d4k68w6%2FRWckGRFcbgqJlWGYckShkbuqJb0%2BEL97PUaAs4Ar1Sd0VbQznJHcrxHnbFz6zAk3P8W9MbKYFvyCOnHjbIBUdTVJIHR0Vix5SCKkErhqEmOYwCzQ5rHkZdep1DeV7g0Fa3r%2B9MNvm32sD0uR3nMaaNERqdoziebBnPFsAnh%2BWbGbC4nvwH5%2Fz6DnVksGyrH%2BXw4AE1%2FWTWJ88x9jz1vu8jUfIGPh8eabfdmniv1%2BiKVbokK08SUJj8qiRJCm%2Fd4PTWFchEDUjbBbhRY4e7HQ7rZ3yvatHeHKEkOAlSwGB1SOyRLY%2B%2B4Xw28CtT%2B6sfrqKcDlUj%2F3u5VQUKFnFfz7vQ5IVACVTlo5Udf6NXXeP3ErfB1Fr1fAHtJFDdM5cVarBjGzBh6Y6nXhASG0yyDezh2lQue%2FEUjzPTUUqUwE6o7WswdXYAxNoMRDAsy1zL38zCee4VoCuLJK9sh4fIuesdxmBSYBDcJoQkM265sm28enIYzOTCt4M7CBjqkAb53ZmdZJwpFN9u%2BCQor2%2FQiuS%2BSQWgat8kE1cyq4hYdRHnxiHQTY0kgUisfv81E6PEZCrFq3fSXBKeTGzgwZW5FwAEpBY%2F58LTInGaJnG3Cv1QVLHkrxy8ZbzB7o55S3HkBMhGJiiOqrjJg237l3wbr5AFBZx7nnUXCVjICdE9fd67Lx%2F%2BXtll%2BO7NdpGGD%2BxYEH394h6UG2CoV6SlVfHK4iAyi&X-Amz-Signature=f88629c196c673338fa7d19c59a81d2fa97ca15a2e62cab1aa6cadafd4d64aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVFFKLH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FAzmg7suVB9qMxpWL3RbSTu325OSZxL9fiUIoVLKsLQIhAJYK7qCRA9xJTcFegZZFPRDsRwI97tzzB98MHmp6D6XBKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsSB7IeCfR4xix04oq3AMgGmNFBLVAh0FafzUdFoHj9dpnqPiyV8mg0ER96VCUk9eDU%2BAsbd10JPrim5vo9U70%2F%2BFehOHefzFnm3Rc19LV2626rmKONP3VlKn0tqgMDyy6H06JbpTUaADzlCBswCUu5d4k68w6%2FRWckGRFcbgqJlWGYckShkbuqJb0%2BEL97PUaAs4Ar1Sd0VbQznJHcrxHnbFz6zAk3P8W9MbKYFvyCOnHjbIBUdTVJIHR0Vix5SCKkErhqEmOYwCzQ5rHkZdep1DeV7g0Fa3r%2B9MNvm32sD0uR3nMaaNERqdoziebBnPFsAnh%2BWbGbC4nvwH5%2Fz6DnVksGyrH%2BXw4AE1%2FWTWJ88x9jz1vu8jUfIGPh8eabfdmniv1%2BiKVbokK08SUJj8qiRJCm%2Fd4PTWFchEDUjbBbhRY4e7HQ7rZ3yvatHeHKEkOAlSwGB1SOyRLY%2B%2B4Xw28CtT%2B6sfrqKcDlUj%2F3u5VQUKFnFfz7vQ5IVACVTlo5Udf6NXXeP3ErfB1Fr1fAHtJFDdM5cVarBjGzBh6Y6nXhASG0yyDezh2lQue%2FEUjzPTUUqUwE6o7WswdXYAxNoMRDAsy1zL38zCee4VoCuLJK9sh4fIuesdxmBSYBDcJoQkM265sm28enIYzOTCt4M7CBjqkAb53ZmdZJwpFN9u%2BCQor2%2FQiuS%2BSQWgat8kE1cyq4hYdRHnxiHQTY0kgUisfv81E6PEZCrFq3fSXBKeTGzgwZW5FwAEpBY%2F58LTInGaJnG3Cv1QVLHkrxy8ZbzB7o55S3HkBMhGJiiOqrjJg237l3wbr5AFBZx7nnUXCVjICdE9fd67Lx%2F%2BXtll%2BO7NdpGGD%2BxYEH394h6UG2CoV6SlVfHK4iAyi&X-Amz-Signature=cf5ffb40d86d0282ec5a7e01a08ecf240d125ea1960684d4cb689f6797ca3940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
