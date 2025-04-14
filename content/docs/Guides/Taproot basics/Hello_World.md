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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXXZD5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPqu1SqRJOJdZRz3VC69cqOX1JeNT2cdCJdNocswJRiwIgSnQOZEmQ3%2Fz1ztCjz%2BZRUzy7O0zSRR5pPmlCO1wAwAgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBSs%2F7YJSGR%2BeS%2BwlircA4L5fziFY7i3BJwhDy8Hm7R4sdQ9d2qSQgHaBFQSgfW7%2BujdnuIGPaqw5tb3vb1Gcr5kZIG0ZMLdqcQxPtBMlbE4gpkd4hNi417kplP3wh7HLCKITQJbn5kaMvuh5b1kT3H5N4%2BWe3ZW1YzEhu5HyHGB7HqwI27F7%2FwIVjuJkwX0H3pSewDJbYK68B%2B0qd6qMY%2F1Cl%2FHq76UoypuYgZMHJ2uIEe2m7fcnNqq9FE9c6IgVG2jns%2BEzX1aOP96EKSGuGudIat5QQGIAezWMNW9u6wOsmNi6VO2UfzfPyF%2BpVx8xLfShUH6B8oa7LFguV52SJXTDm%2BYGTL0CMb4sKiY%2Ftz6IPiZ%2FKPiMVGHLEID9hYYQUCTtZV2WisPHNfD1tBQO3Wv4B0Gamcs2%2FR0ilGD69QLxMJXm3TAdmkWHht74hEoEoK3AD9dOrpj8lo0%2BfVRa0s4C8fZ4Cn0rN%2BXkfXq1dyBR583n1jJIzuCkwu8MNPx%2FiNrSsFe9UeQ0%2FeEQgzn6VuKmVFDYiGBvhAolHDln4lFnFAWOmRznh5pUPjys9HVGDPnwAwL52daK5%2BeRNJXxXzAv%2Fa4Ru7BYy%2BB1%2B46mL%2FArg1N0LdJtNdcPZXeCt7UNNtJYoP%2F3CK9W0DEMJGV9b8GOqUBNJsGEbYh7BbwEc6plXS26lhRxTWLYVPVOhwzC4D4gATDVzvxK%2FpYmmcSIwszEbrNjvyBTSUvbYPzzXNxNuYABhYDXHlKzqsgotypukowhyBg%2BDXPue4LL%2FzLL8gMzzBZ1gZQkp4oSM2qbG2PeKWXTwycQdg4SXjyum2%2FDmS1mioDHQkkW79HLANiKSNFuojuGGWXeW%2Fn732uHOgVFVBCuCXRze8V&X-Amz-Signature=6082fc5a3ea5946a2d08ad7a99b1d1183fbb370a88f7b0f370e065f9a6af0c53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXXZD5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPqu1SqRJOJdZRz3VC69cqOX1JeNT2cdCJdNocswJRiwIgSnQOZEmQ3%2Fz1ztCjz%2BZRUzy7O0zSRR5pPmlCO1wAwAgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBSs%2F7YJSGR%2BeS%2BwlircA4L5fziFY7i3BJwhDy8Hm7R4sdQ9d2qSQgHaBFQSgfW7%2BujdnuIGPaqw5tb3vb1Gcr5kZIG0ZMLdqcQxPtBMlbE4gpkd4hNi417kplP3wh7HLCKITQJbn5kaMvuh5b1kT3H5N4%2BWe3ZW1YzEhu5HyHGB7HqwI27F7%2FwIVjuJkwX0H3pSewDJbYK68B%2B0qd6qMY%2F1Cl%2FHq76UoypuYgZMHJ2uIEe2m7fcnNqq9FE9c6IgVG2jns%2BEzX1aOP96EKSGuGudIat5QQGIAezWMNW9u6wOsmNi6VO2UfzfPyF%2BpVx8xLfShUH6B8oa7LFguV52SJXTDm%2BYGTL0CMb4sKiY%2Ftz6IPiZ%2FKPiMVGHLEID9hYYQUCTtZV2WisPHNfD1tBQO3Wv4B0Gamcs2%2FR0ilGD69QLxMJXm3TAdmkWHht74hEoEoK3AD9dOrpj8lo0%2BfVRa0s4C8fZ4Cn0rN%2BXkfXq1dyBR583n1jJIzuCkwu8MNPx%2FiNrSsFe9UeQ0%2FeEQgzn6VuKmVFDYiGBvhAolHDln4lFnFAWOmRznh5pUPjys9HVGDPnwAwL52daK5%2BeRNJXxXzAv%2Fa4Ru7BYy%2BB1%2B46mL%2FArg1N0LdJtNdcPZXeCt7UNNtJYoP%2F3CK9W0DEMJGV9b8GOqUBNJsGEbYh7BbwEc6plXS26lhRxTWLYVPVOhwzC4D4gATDVzvxK%2FpYmmcSIwszEbrNjvyBTSUvbYPzzXNxNuYABhYDXHlKzqsgotypukowhyBg%2BDXPue4LL%2FzLL8gMzzBZ1gZQkp4oSM2qbG2PeKWXTwycQdg4SXjyum2%2FDmS1mioDHQkkW79HLANiKSNFuojuGGWXeW%2Fn732uHOgVFVBCuCXRze8V&X-Amz-Signature=4e003736edd0d2e5ff16bc1a15a4734303598cf2bf5ac4c9416f57e07f7124c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
