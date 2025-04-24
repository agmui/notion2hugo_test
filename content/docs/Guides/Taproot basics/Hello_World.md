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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLWWHCA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDc0HQv33cxAfNf42yvblFdx6uJeC%2FoXVKqiqxOm80iBAIge9ML5KoOpxQVVkQSiXR0R%2BxxqANIPvUuXRdjBMKVqHUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BcDdKRVpfRG8IQPyrcA8QYHieFpy2xRCC0lFLsbWFzQg16fZ7aYiuXRrGiXJ%2FaoV32vnzKJMIEmJzPTihLElUkKKmsoruaD74lAdsGfOxKqw7WQFOtgPPF7n%2FwIeiC%2BZlC72UC5jKSGfVMbZ1zsfzqa1d9aiLZBHYVNEX3itcVmlcPckLsquKXjqEEVwcP1ah7NmmgleWb5nwCo7%2BsWCMa9LT541d9%2FtoSNuryXNJhcbr0AI7Yd%2FT6SwsM8HbUEdw334KwZsOw9D7SxmXL1BrZAh3K6lSGCAGh2Lr91e%2FRlAznMOYP2iV%2BlXXze%2F4FmAZ9viTB1fcZopAc4uGxz3Tbc%2BFvLExl1G8%2FAyYCPyz8J%2F5U3OBG5TUKMfnUL0cB%2FRC%2FSI%2FP5lRtJYfl3jkm%2FMR1mYp2I2Y4kK21s0v2naorc%2Fe1N2%2F2S5K%2F%2BY31vNbZDXZG306yDqE4%2Ftd8V5qGiDaVHEgIJUAzHietQlIwxjl8Aq6j5SkVAblYSzssIA2pTa9BDcNL1tmLdho%2BIwaEj2kvfhNctzQlIw23ZDvIXdDULN43AjMjlhmtEZUhHxNVmyPf4GTERyS72StTU1wPlShJt3f6ur%2FCpdrxexdpwi6L8MAg%2Fy8gezmN9UU1HO1Bc9MjGWdV2kIpgZ5CMOblpsAGOqUBzTxeq0sLj1kLrStWg3VHdbd7FTEpBDjCsZaQ1OLP1Ei0YVy%2FJneqY3MC8B%2FhhNDLejOvN1hJwhQlvNm3GLu8%2FoTImXOmej89ZBSjEmKPirtCKaohtvWvsMBl7aDFP9Rvt0Qw3jO1eXmL9ZCN7Ln0vNg1ZsX4cRXo%2FSD8JYOUzB6BvnkRpxk96guDwbeKmYB8A9wWU8of7PXVDA%2FhJaTCv5L1wAsW&X-Amz-Signature=405fc67b2b2d565acefee6640a2300ac79667384fd0cab39b493819d90ec1586&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLWWHCA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDc0HQv33cxAfNf42yvblFdx6uJeC%2FoXVKqiqxOm80iBAIge9ML5KoOpxQVVkQSiXR0R%2BxxqANIPvUuXRdjBMKVqHUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BcDdKRVpfRG8IQPyrcA8QYHieFpy2xRCC0lFLsbWFzQg16fZ7aYiuXRrGiXJ%2FaoV32vnzKJMIEmJzPTihLElUkKKmsoruaD74lAdsGfOxKqw7WQFOtgPPF7n%2FwIeiC%2BZlC72UC5jKSGfVMbZ1zsfzqa1d9aiLZBHYVNEX3itcVmlcPckLsquKXjqEEVwcP1ah7NmmgleWb5nwCo7%2BsWCMa9LT541d9%2FtoSNuryXNJhcbr0AI7Yd%2FT6SwsM8HbUEdw334KwZsOw9D7SxmXL1BrZAh3K6lSGCAGh2Lr91e%2FRlAznMOYP2iV%2BlXXze%2F4FmAZ9viTB1fcZopAc4uGxz3Tbc%2BFvLExl1G8%2FAyYCPyz8J%2F5U3OBG5TUKMfnUL0cB%2FRC%2FSI%2FP5lRtJYfl3jkm%2FMR1mYp2I2Y4kK21s0v2naorc%2Fe1N2%2F2S5K%2F%2BY31vNbZDXZG306yDqE4%2Ftd8V5qGiDaVHEgIJUAzHietQlIwxjl8Aq6j5SkVAblYSzssIA2pTa9BDcNL1tmLdho%2BIwaEj2kvfhNctzQlIw23ZDvIXdDULN43AjMjlhmtEZUhHxNVmyPf4GTERyS72StTU1wPlShJt3f6ur%2FCpdrxexdpwi6L8MAg%2Fy8gezmN9UU1HO1Bc9MjGWdV2kIpgZ5CMOblpsAGOqUBzTxeq0sLj1kLrStWg3VHdbd7FTEpBDjCsZaQ1OLP1Ei0YVy%2FJneqY3MC8B%2FhhNDLejOvN1hJwhQlvNm3GLu8%2FoTImXOmej89ZBSjEmKPirtCKaohtvWvsMBl7aDFP9Rvt0Qw3jO1eXmL9ZCN7Ln0vNg1ZsX4cRXo%2FSD8JYOUzB6BvnkRpxk96guDwbeKmYB8A9wWU8of7PXVDA%2FhJaTCv5L1wAsW&X-Amz-Signature=557ef90cb3af648a00698477ad6b45ca83196cbeafb688317eec740b6abc45d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
