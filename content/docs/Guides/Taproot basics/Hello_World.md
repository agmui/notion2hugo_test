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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXAEA5G%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICbMMUa4GvrPbAXM95ngBDPxxcMv6r1PlZBqPVSlOw90AiAqphw1bVa8U3d6WymMKYpUZ3FuJY24h4x%2F6k5oMZjh8Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMS9tn7g12vLrwWnBFKtwDSImeDSB6R9L6iaO3ivz7CmchlkJb2xlClVWCv%2FImylneN6wUgD3AUbYYSzNSb03CN6tKwtqinoNxJ3764V4Xpe20aoc923jEBTLv1qFPv0jm9mRzZyWlzZxi2N%2Bgnpj4BhRq2J9k8CmA5rrPlhwW0w4DtPEa7C9hCsz%2BJVeiF784aEFuxvftCBnxpoDdSImWrMHBxEf5siulitdBs%2BdGrmz1cd1he6celZ2GvOFn36B4j5LReCozNIbX1%2B306iM6pbbCuMIIkXtcQ%2FfncLepY0R27o3GpHEcnzmic9sChUbnc1HXwTMe2IRU8XmFXSMUpPrbbOiYO%2Bf0XIzcRgHeNPc3Ec5A5PBIB0810q0caVWRfR5x1bB%2F7ebt%2BHIKKytblXXFMdv1oLk66u3G6plA2Ka%2F1Hp1QpT0oAgpcM6NXLtQLebjt9WQpfgR4XTUJHCb0Ho%2FJmV%2FThQYfLYpRhLF4lVw%2Bx4LfCPdx9rhefnSa5EOXMyA7klG5p6l%2FZ%2FDiAwj%2Bh4P1gORUsPX0%2BDLhIM2eqxNywhTFkjDWonxCLTUeWFfQeWtibX4jX4udK%2BK%2FV4s1gKKT8EfFNiy8oMZdNwOmKFMYFt3vqpY%2B5sN69zhd8a3TC%2FTj1Mnd2i4WCYwm7HnvgY6pgFJFNOaKti%2BA6PIt1Mo9DWe4grn16HMHSrATt%2BKpS66yXtFqle1K23Zsdq4SvCmWOn2aqfzmmCfaBq69rWPT2hP9Lc4%2FFc3E0%2BnzpG0CCA4c7tZjdkdQX5%2B5ehszpQ5U4Jo0Dad35VN6rXkUbrjtpPPXXoNVThpK8VOSCXymG6FKoWe8n9N8zZf7q6XHJqvrUgqsFzcqGlTfl0e%2Bo2B64D27XWhioH3&X-Amz-Signature=3277543957aaaae28abb0bbc08c2d01f6b595ed2296732d507a7f8013241c34e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXAEA5G%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICbMMUa4GvrPbAXM95ngBDPxxcMv6r1PlZBqPVSlOw90AiAqphw1bVa8U3d6WymMKYpUZ3FuJY24h4x%2F6k5oMZjh8Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMS9tn7g12vLrwWnBFKtwDSImeDSB6R9L6iaO3ivz7CmchlkJb2xlClVWCv%2FImylneN6wUgD3AUbYYSzNSb03CN6tKwtqinoNxJ3764V4Xpe20aoc923jEBTLv1qFPv0jm9mRzZyWlzZxi2N%2Bgnpj4BhRq2J9k8CmA5rrPlhwW0w4DtPEa7C9hCsz%2BJVeiF784aEFuxvftCBnxpoDdSImWrMHBxEf5siulitdBs%2BdGrmz1cd1he6celZ2GvOFn36B4j5LReCozNIbX1%2B306iM6pbbCuMIIkXtcQ%2FfncLepY0R27o3GpHEcnzmic9sChUbnc1HXwTMe2IRU8XmFXSMUpPrbbOiYO%2Bf0XIzcRgHeNPc3Ec5A5PBIB0810q0caVWRfR5x1bB%2F7ebt%2BHIKKytblXXFMdv1oLk66u3G6plA2Ka%2F1Hp1QpT0oAgpcM6NXLtQLebjt9WQpfgR4XTUJHCb0Ho%2FJmV%2FThQYfLYpRhLF4lVw%2Bx4LfCPdx9rhefnSa5EOXMyA7klG5p6l%2FZ%2FDiAwj%2Bh4P1gORUsPX0%2BDLhIM2eqxNywhTFkjDWonxCLTUeWFfQeWtibX4jX4udK%2BK%2FV4s1gKKT8EfFNiy8oMZdNwOmKFMYFt3vqpY%2B5sN69zhd8a3TC%2FTj1Mnd2i4WCYwm7HnvgY6pgFJFNOaKti%2BA6PIt1Mo9DWe4grn16HMHSrATt%2BKpS66yXtFqle1K23Zsdq4SvCmWOn2aqfzmmCfaBq69rWPT2hP9Lc4%2FFc3E0%2BnzpG0CCA4c7tZjdkdQX5%2B5ehszpQ5U4Jo0Dad35VN6rXkUbrjtpPPXXoNVThpK8VOSCXymG6FKoWe8n9N8zZf7q6XHJqvrUgqsFzcqGlTfl0e%2Bo2B64D27XWhioH3&X-Amz-Signature=2a6dafa408d71ff26879c090419e93ba39a74b027315a5cdf6de297e438dfcc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
