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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJEO5NF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX6outFu%2BnBW80RfvU7B4fXNOlXtNgi3YoyTOa3srE0QIhAObDiXHJoDXSv6c2WdqP3A%2BXLpakEwbMqYoxLEL%2B1LnoKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMpQGYGRp9n8bFLHMq3AO6qNfpAoobdwRfnpB0O9xssUaCd6WF3H2rtGsI6A8avG1YKppDPW20%2BxoiktYdHJquQNwieu5yb3qWsdeCE2XWUPyCEiAO%2FwZ8ebs08XIXLrNgeyFtUw137ARx%2BLjmxMdrrTOx%2BdztybhwHjOecSggqEBwXD%2FTVI3RykYeZkKM%2BiGyR0MwSkjCk4lxOfkY2rUJZWJxmqGcBnO1WQajx5i6WtZ8tlmSzrbdWPHU5vIeftYlvU342eWFSyiH7nj3sBOfhsWhoxZcPVy2896iVjpPxnK%2B4swLEqnwOL1qLOfOkn%2BEX9hwUhMVGBsHlp4WKySW5%2BlPGi0s8mAEAjUO8h7FWEkHqvwj5mpBEIbHOxiM4y6KGJkqB2Fa7MXPdjTRMwicN%2BR8h7fGDmJA%2BkghTI3pAXtMO5Fkr6%2FleEWIX80sC8Qu6olATnZdFvJ7EDShet3CZWmvFXeuLxUVObbDmB6AxhK70RyTC2aghJT%2FL75ZMK1KYBPwwPgdV4ZxalEonV6Y6YLrrHJU2NMb2cqmgU46iZBlEfsh5muz6V%2F%2FERHxkIzORcFvrzdicwHoWKOJLMBT1bzdJD6eBwuG8yBgSLYgoznL7x8mAE38HAQxDpXkivikPkPhph6JxvrAKjDH0dvCBjqkAXptzaq7g%2FSvweGUoMeoWGqBTIX6Z%2Fa%2FOdp2w7aw4L9kOp9PO4hZeWrLAGPHROFn9588nQPhYVz0hQXIgXrtN8gcOpQWlrH%2BEK4ixCra%2BBBwUSr6qe89%2FogdclYdN5Z%2Bef4nyIzlwlMBkNhZ5okjZgajIMEruYZpaK5I1%2B%2BsY6vy9MIbPY5etr%2BPWrdtF7y%2B0WKjwoJq2Cfwk6CFyLLgy0C2ThXp&X-Amz-Signature=9b9ca472a93f82c52ff6423cfcd4681e4f8f33ba0012a406baba1a5755990f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJEO5NF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX6outFu%2BnBW80RfvU7B4fXNOlXtNgi3YoyTOa3srE0QIhAObDiXHJoDXSv6c2WdqP3A%2BXLpakEwbMqYoxLEL%2B1LnoKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMpQGYGRp9n8bFLHMq3AO6qNfpAoobdwRfnpB0O9xssUaCd6WF3H2rtGsI6A8avG1YKppDPW20%2BxoiktYdHJquQNwieu5yb3qWsdeCE2XWUPyCEiAO%2FwZ8ebs08XIXLrNgeyFtUw137ARx%2BLjmxMdrrTOx%2BdztybhwHjOecSggqEBwXD%2FTVI3RykYeZkKM%2BiGyR0MwSkjCk4lxOfkY2rUJZWJxmqGcBnO1WQajx5i6WtZ8tlmSzrbdWPHU5vIeftYlvU342eWFSyiH7nj3sBOfhsWhoxZcPVy2896iVjpPxnK%2B4swLEqnwOL1qLOfOkn%2BEX9hwUhMVGBsHlp4WKySW5%2BlPGi0s8mAEAjUO8h7FWEkHqvwj5mpBEIbHOxiM4y6KGJkqB2Fa7MXPdjTRMwicN%2BR8h7fGDmJA%2BkghTI3pAXtMO5Fkr6%2FleEWIX80sC8Qu6olATnZdFvJ7EDShet3CZWmvFXeuLxUVObbDmB6AxhK70RyTC2aghJT%2FL75ZMK1KYBPwwPgdV4ZxalEonV6Y6YLrrHJU2NMb2cqmgU46iZBlEfsh5muz6V%2F%2FERHxkIzORcFvrzdicwHoWKOJLMBT1bzdJD6eBwuG8yBgSLYgoznL7x8mAE38HAQxDpXkivikPkPhph6JxvrAKjDH0dvCBjqkAXptzaq7g%2FSvweGUoMeoWGqBTIX6Z%2Fa%2FOdp2w7aw4L9kOp9PO4hZeWrLAGPHROFn9588nQPhYVz0hQXIgXrtN8gcOpQWlrH%2BEK4ixCra%2BBBwUSr6qe89%2FogdclYdN5Z%2Bef4nyIzlwlMBkNhZ5okjZgajIMEruYZpaK5I1%2B%2BsY6vy9MIbPY5etr%2BPWrdtF7y%2B0WKjwoJq2Cfwk6CFyLLgy0C2ThXp&X-Amz-Signature=87f760582445e66cf3af22a3fa5cb3f8170fda4e80390ef426409e9a601f50e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
