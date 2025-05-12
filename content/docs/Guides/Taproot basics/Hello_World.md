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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAJQKCB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBgd3zTd78QkVXLl7BdbQLb43YtTNXk91u571byJbxb%2FAiBBwUc0%2B5LHYM0cfswJVelMzHbssZV94t4vlfTEt0vnsSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChkntG%2FV7HzvhjNEKtwDxK8r7QvoCp4dFpgW6nTOgxAj0YKl%2BwwnEHrcFZSoSajhmxA8VW%2BonfY9GqjLqF6vQAd6jLttr2Oi0QGcGyi12ZNsODBdV6odgH3QAdPYZ2fmkd6ij2RfbG%2BpSu0lixUtEu7CiBxiMvogBCfRXs17VaVdvI4VXKrvk8Atj5803eTAPxJZhBFt5fSLlhO0zbrl4OxERrCJNgTlZAteR7tbqYZ3MX0pSN7BLii7j88lx0bL%2F4NrFQoD6XjHUMNE4xmhrtpnF%2By6wqqQTdEOUjEXgTqf0fi9A3ULoF8F2D35kpvGDluVbgvZoUTsvHn4zzt9s1CPEJQsMKzSa%2FeBG8YVBP3lZHpZyUNatIAUcwLJG32IZ7n4nl8FJuUxNN7mmKWSZIfaeR1aZa9dD3%2FFliX3eSMs9R5ywJagE1t78y6G0ht6zj8uMRRw4aXAAKEts041gVJWUJiqelrh%2F2NLSRM%2FXxdHlopT2F9%2FDdFMr9GPdappom8WjtN5SGlDCJnuGmHz0rjEyDVXMUrfbrFIFi%2BNSE7NpJuYqYGEqYLnfKf6z6ZUqGc33iZcpaXHNtI8%2BLagy0t8UG6MreZ6RTa8m%2BBubJ7MUlzdOSMmENcgbzk%2BVtkRpjqnrHCwsM3YsJcwiJyHwQY6pgFTeMwZ3PPnaMZ1k6pAYDTFA6fyw%2FaU9E0dpDGXUfAZVBER4%2FZKlS5PmM1dAdaRC2bNtw8KNmI%2BFNmf6sp8ssZCBBQFqh3BZA0lBTFh%2FSCj6msa1uHWfoirGR5wuvMGj4axrHNI3NdNz9E1Q0eMiKPY1yOPiSy1NIkeLd6nd7kVky4yMUeIGwM2xkJfdu0zWhsU2Ww196WZyvZxWC%2BUS4kT6ymeqlVW&X-Amz-Signature=0a1e3c4c6a994c4d6c3c9337b9d018ebfda73fa215d5162384ade65adeb84cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAJQKCB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBgd3zTd78QkVXLl7BdbQLb43YtTNXk91u571byJbxb%2FAiBBwUc0%2B5LHYM0cfswJVelMzHbssZV94t4vlfTEt0vnsSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChkntG%2FV7HzvhjNEKtwDxK8r7QvoCp4dFpgW6nTOgxAj0YKl%2BwwnEHrcFZSoSajhmxA8VW%2BonfY9GqjLqF6vQAd6jLttr2Oi0QGcGyi12ZNsODBdV6odgH3QAdPYZ2fmkd6ij2RfbG%2BpSu0lixUtEu7CiBxiMvogBCfRXs17VaVdvI4VXKrvk8Atj5803eTAPxJZhBFt5fSLlhO0zbrl4OxERrCJNgTlZAteR7tbqYZ3MX0pSN7BLii7j88lx0bL%2F4NrFQoD6XjHUMNE4xmhrtpnF%2By6wqqQTdEOUjEXgTqf0fi9A3ULoF8F2D35kpvGDluVbgvZoUTsvHn4zzt9s1CPEJQsMKzSa%2FeBG8YVBP3lZHpZyUNatIAUcwLJG32IZ7n4nl8FJuUxNN7mmKWSZIfaeR1aZa9dD3%2FFliX3eSMs9R5ywJagE1t78y6G0ht6zj8uMRRw4aXAAKEts041gVJWUJiqelrh%2F2NLSRM%2FXxdHlopT2F9%2FDdFMr9GPdappom8WjtN5SGlDCJnuGmHz0rjEyDVXMUrfbrFIFi%2BNSE7NpJuYqYGEqYLnfKf6z6ZUqGc33iZcpaXHNtI8%2BLagy0t8UG6MreZ6RTa8m%2BBubJ7MUlzdOSMmENcgbzk%2BVtkRpjqnrHCwsM3YsJcwiJyHwQY6pgFTeMwZ3PPnaMZ1k6pAYDTFA6fyw%2FaU9E0dpDGXUfAZVBER4%2FZKlS5PmM1dAdaRC2bNtw8KNmI%2BFNmf6sp8ssZCBBQFqh3BZA0lBTFh%2FSCj6msa1uHWfoirGR5wuvMGj4axrHNI3NdNz9E1Q0eMiKPY1yOPiSy1NIkeLd6nd7kVky4yMUeIGwM2xkJfdu0zWhsU2Ww196WZyvZxWC%2BUS4kT6ymeqlVW&X-Amz-Signature=5750290a3e7d7e93d3438b26e1e61516d724c131f647b345bbb65cec060501ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
