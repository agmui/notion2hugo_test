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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOGEX7IT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJzdEdTes6TYvu2Ed3vX9DMNffQTjf%2B0Ifr71vH5NPcwIgaoeAy6blscQFXdETHt3JsFo4WMzNxu0odhss4YiDQ50qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHAjWT1f6RynsOwGircAyiqtnNsN2BFJyT6u4JBXbNIJAZcAfV1YxsTR%2BYvQFb4HsLnamdqgm%2BBYIUr4609qXkjTIA946FOKnkNM%2BWhyC3T3TK5Ai06hx9aCYOJ4we4ruWhgmZFHLycaPltZC%2Bdhidj15qIKmY%2BW9RvaY8zQMRTb4bNF%2F27sUJmd2yjdgfDnzdhqYUjeQ5EY%2FMrVOT%2Fg6QpkMuBEyKWg04BIXsA92myZljm5Ckv6QgVeaK%2B9u3MctaimE%2BnVn8RQOB4S1qDzy%2BdVoxHhD%2B7lne9KHDILG0At94P93GB4%2FecOIXMhiPC6cdE5p10vf6Ybtfm6nrMi4N6Bt8yCIY%2BzRPyaBzHX3dy7YKPkhDRk1DXkMaFLyLGd9FMDhxlQfuF4zfYrzwuUEut%2FBhqe8CLVVWlQ3DHX%2Fe4UTmYOxPAGBQ53Ln5bvcE1s8E7enTc6q%2FakDYY793W%2BqNunROXkBHXuawl9IloZPApoBlp1kAdAtAD7%2B8D%2FQqH7Giltc8PSeqAyNGbrNVnV8yDIcZ1DG%2F0N1vXbAt4HWhJ%2FUNXuctOpG9a0DBTtaQBh08vywd5mKvbLquG8TDZMpNySRXI5PhB0jgPTIEtdAuHsOcEB1HadzBTva3TFfTwBx9H2Y9G5ujUQEGMIWr77wGOqUBSFEaI61d2AjDhtrB1aXi%2B%2FgcysH1lSNk65xtIHZ0vqIRMGpSBw5KSP63rvHPCaMs8Q9NSvvDHqZIPidYWw4OrqlKFubFFUeelgH7e3FRtTCCypa5J%2BlB9oF86rETkFtuhOhAnch2p77HR3WEZwJ6q2F5EBtjVcLpka1H2jnVbaIjiV3BXv%2F%2FX1Iv9c%2FM8HoyeR9ir2%2FNyPknQVQM2qp1ROGDEay%2F&X-Amz-Signature=c0f2c8f6c601f2aa828e45e408a3fc1281c86dcc44613ef12538caf59db2d186&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOGEX7IT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJzdEdTes6TYvu2Ed3vX9DMNffQTjf%2B0Ifr71vH5NPcwIgaoeAy6blscQFXdETHt3JsFo4WMzNxu0odhss4YiDQ50qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHAjWT1f6RynsOwGircAyiqtnNsN2BFJyT6u4JBXbNIJAZcAfV1YxsTR%2BYvQFb4HsLnamdqgm%2BBYIUr4609qXkjTIA946FOKnkNM%2BWhyC3T3TK5Ai06hx9aCYOJ4we4ruWhgmZFHLycaPltZC%2Bdhidj15qIKmY%2BW9RvaY8zQMRTb4bNF%2F27sUJmd2yjdgfDnzdhqYUjeQ5EY%2FMrVOT%2Fg6QpkMuBEyKWg04BIXsA92myZljm5Ckv6QgVeaK%2B9u3MctaimE%2BnVn8RQOB4S1qDzy%2BdVoxHhD%2B7lne9KHDILG0At94P93GB4%2FecOIXMhiPC6cdE5p10vf6Ybtfm6nrMi4N6Bt8yCIY%2BzRPyaBzHX3dy7YKPkhDRk1DXkMaFLyLGd9FMDhxlQfuF4zfYrzwuUEut%2FBhqe8CLVVWlQ3DHX%2Fe4UTmYOxPAGBQ53Ln5bvcE1s8E7enTc6q%2FakDYY793W%2BqNunROXkBHXuawl9IloZPApoBlp1kAdAtAD7%2B8D%2FQqH7Giltc8PSeqAyNGbrNVnV8yDIcZ1DG%2F0N1vXbAt4HWhJ%2FUNXuctOpG9a0DBTtaQBh08vywd5mKvbLquG8TDZMpNySRXI5PhB0jgPTIEtdAuHsOcEB1HadzBTva3TFfTwBx9H2Y9G5ujUQEGMIWr77wGOqUBSFEaI61d2AjDhtrB1aXi%2B%2FgcysH1lSNk65xtIHZ0vqIRMGpSBw5KSP63rvHPCaMs8Q9NSvvDHqZIPidYWw4OrqlKFubFFUeelgH7e3FRtTCCypa5J%2BlB9oF86rETkFtuhOhAnch2p77HR3WEZwJ6q2F5EBtjVcLpka1H2jnVbaIjiV3BXv%2F%2FX1Iv9c%2FM8HoyeR9ir2%2FNyPknQVQM2qp1ROGDEay%2F&X-Amz-Signature=4ecdae6079859d7e651c422e5ad7db84b98dd5346bb91927dd3b88bafe8aaba7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
