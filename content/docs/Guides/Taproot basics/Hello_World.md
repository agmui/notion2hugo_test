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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A5NGSMR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFDi2s2GRy0qhojclm%2F%2FNT7QV18P9FRrZgYxKW6U9aQVAiA%2Bj%2Bj%2FXBQqmiOOlDE9TpGT3yeR2nHuJVcG2NAlgqyD%2BCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM15K1Sjg%2FK0Tpbo82KtwDLPFGRRZl2t72ZK%2BDMZOy7fvMjwwDrCwzN75pMGmDn2K2%2BpujQQ8LhDigyugF7PgAhZGFgxeG05b2yZR8Myxqi3YE1dEUXdBQg6rgsxtcH2ppAMuTv6XBdix4ITyt2d%2FAsU4fiUX2IGf0vrkXFZr8B%2Fy73Sm9znYxDFpX9ijiU3jRAYHWsxD8cFqwc7ETPIGycZJj8V7qmexTz9XQX4lhEARGL8H%2By%2FRX6t0cyZId%2BnaF1ceTnys0IhitepVdcFdwb5dS0P%2F5M35Uf%2BfM%2BjfFSGFu%2FEuuufgLufZDmK4ajHfj7Z5TZc7RY8kgtGn2%2F1vmiHShgWFWlE2r%2FFBqOspsfArWzN8Qujq%2FhTwbAFO7SsKjTs2fN9tuiK6wUv8nPPcymdennRte%2FbWePyNmm9rMdsF%2BaoXxRlWpVFrJZ7cBzd8iwTku3uAjH5EkCRquaJFuNpvWm2PBD4biY5rm7VG4MLH9ZtAgler%2BVs239u9WrMU%2BJAm5r0jXSEE%2FXv0k8aDyr16o7FlZzovbht3n%2Fp48T%2FrdXf8%2B6LwgFLnE4wR8P2Oo1xq5RRfV%2BxiyEPAk5h9LyDXgyCmFRraOUNPeSV821oHtZsBuxB72bwpSZL7up%2FZBC3lScsf9Ep%2FLWWkw%2FrTlvgY6pgEYTGnl66U4egU%2FLlIEPcSYLH0c3jXn8lvLOJcVASZIdj8etSWqwBYEKsdMR6%2FfAFlJkfgK5X9Jtm4JgY%2FFJKg0OtFdmxiaSuLMuY3TdPzMOcsntZsDu6E6Uu%2ByVbAz%2B5HBr6x3LoEbj36NgZoXbhMJwy8QHrqfJn4cV2Qdcslig4HlfF%2Bv%2FknDm5Dny6JIkeFMFWhHTRuDzXnaRXyp71NmqmeBVDiz&X-Amz-Signature=217321b2b282cb307b75e7399e52db9c269b0412e0f37c0009a423ac46e6246c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A5NGSMR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFDi2s2GRy0qhojclm%2F%2FNT7QV18P9FRrZgYxKW6U9aQVAiA%2Bj%2Bj%2FXBQqmiOOlDE9TpGT3yeR2nHuJVcG2NAlgqyD%2BCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM15K1Sjg%2FK0Tpbo82KtwDLPFGRRZl2t72ZK%2BDMZOy7fvMjwwDrCwzN75pMGmDn2K2%2BpujQQ8LhDigyugF7PgAhZGFgxeG05b2yZR8Myxqi3YE1dEUXdBQg6rgsxtcH2ppAMuTv6XBdix4ITyt2d%2FAsU4fiUX2IGf0vrkXFZr8B%2Fy73Sm9znYxDFpX9ijiU3jRAYHWsxD8cFqwc7ETPIGycZJj8V7qmexTz9XQX4lhEARGL8H%2By%2FRX6t0cyZId%2BnaF1ceTnys0IhitepVdcFdwb5dS0P%2F5M35Uf%2BfM%2BjfFSGFu%2FEuuufgLufZDmK4ajHfj7Z5TZc7RY8kgtGn2%2F1vmiHShgWFWlE2r%2FFBqOspsfArWzN8Qujq%2FhTwbAFO7SsKjTs2fN9tuiK6wUv8nPPcymdennRte%2FbWePyNmm9rMdsF%2BaoXxRlWpVFrJZ7cBzd8iwTku3uAjH5EkCRquaJFuNpvWm2PBD4biY5rm7VG4MLH9ZtAgler%2BVs239u9WrMU%2BJAm5r0jXSEE%2FXv0k8aDyr16o7FlZzovbht3n%2Fp48T%2FrdXf8%2B6LwgFLnE4wR8P2Oo1xq5RRfV%2BxiyEPAk5h9LyDXgyCmFRraOUNPeSV821oHtZsBuxB72bwpSZL7up%2FZBC3lScsf9Ep%2FLWWkw%2FrTlvgY6pgEYTGnl66U4egU%2FLlIEPcSYLH0c3jXn8lvLOJcVASZIdj8etSWqwBYEKsdMR6%2FfAFlJkfgK5X9Jtm4JgY%2FFJKg0OtFdmxiaSuLMuY3TdPzMOcsntZsDu6E6Uu%2ByVbAz%2B5HBr6x3LoEbj36NgZoXbhMJwy8QHrqfJn4cV2Qdcslig4HlfF%2Bv%2FknDm5Dny6JIkeFMFWhHTRuDzXnaRXyp71NmqmeBVDiz&X-Amz-Signature=145e5751c43273570f2814897b1c326d8b16fad1827391369f598749399c06b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
