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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKISBK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGolr0JA%2BsFCeYnsXiG0bdl3bmjd4eARGt%2BccH4WAas7AiEAy%2BnuPicsQzrLajf9Pg2MkgJRV0tgHF6bVk6UrJ1%2B4aAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAigLqk1HgT1%2BWMgOSrcA95z7GLVYdAc8xSvVPC5q0pE2F3ObqPgjo3ujN%2F7moKY3J4%2FpSPAzZBl1uZnd%2F4czzKmkVG%2BCd4UJJOCSfkzoMN8v7TC9ShhsjjzlMPRXbhePMU9fxeW69y3BVOX4l54jyk41x0FPVFfnhotBAvesTIoS%2BzX22a%2BN9H1zt0TKblDmg9CH0gzJK7MCYIY%2BZi4TBUqsZ22HmiyOlE4RN4NJ0nbrdXQ0LPvZv4spUbhIgFYHGiSk7i2u%2FSyjGD6I38lfwIzgjM5gWatzYnmSE42eksjJWk7FobYAYWc3qeRMY%2Ff9CihyyuK4l8wEmL%2BqJAu7THyjG119PmBgkXRaVoz9IH3FK7spCc%2FPJX2wgVbMrV1jl2iZcdyuBN%2F71pgi17leiNE3UX%2B9JnFdochdWS5sooL6RhcvT6AmLOc5HBr3BaoJeZKoOsqhQIHgVvOIO61JOhNqvSQr%2BxzzD1JweMDD0V0bXd7arlciAmrmVSoBr4T3TtCUqvel0SGj0%2FB27swWBeRrCGtsVG8stKH9ivnq8HIhDiZVa85UlycwF0vRcijwDpItJpuALIsymO%2BbTrPdNqNG%2Fk3E9pzSYZuwuYeCkK46DQNRrHqbh267DhVEOcnofdBrAE53%2BWlXCg5MNOIocEGOqUBIKBUEX97N62jZJlYE3grAiFONRWOfPFwOl4BY%2FiHulKebL6XB8BVvMPtQMTxQf5i%2BXbI39e3RcMJjknGIjzqy6xbqGMnB76SOS47j3olY4Va%2BZzYdL8o1C1RTKxotG0NHAaGHUP9DtH32ptktEUeDVKHhUYRpcRVU6jFEuQ50wQJ9RnqixzvEV%2FYGzn%2Fj8B9G17mT2OLWLGePuRCdGF5FtFe1qWF&X-Amz-Signature=7c2497dff71dbb3b3c4522b141a48c213f80e80872125c851024367b2abdd197&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKISBK5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGolr0JA%2BsFCeYnsXiG0bdl3bmjd4eARGt%2BccH4WAas7AiEAy%2BnuPicsQzrLajf9Pg2MkgJRV0tgHF6bVk6UrJ1%2B4aAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAigLqk1HgT1%2BWMgOSrcA95z7GLVYdAc8xSvVPC5q0pE2F3ObqPgjo3ujN%2F7moKY3J4%2FpSPAzZBl1uZnd%2F4czzKmkVG%2BCd4UJJOCSfkzoMN8v7TC9ShhsjjzlMPRXbhePMU9fxeW69y3BVOX4l54jyk41x0FPVFfnhotBAvesTIoS%2BzX22a%2BN9H1zt0TKblDmg9CH0gzJK7MCYIY%2BZi4TBUqsZ22HmiyOlE4RN4NJ0nbrdXQ0LPvZv4spUbhIgFYHGiSk7i2u%2FSyjGD6I38lfwIzgjM5gWatzYnmSE42eksjJWk7FobYAYWc3qeRMY%2Ff9CihyyuK4l8wEmL%2BqJAu7THyjG119PmBgkXRaVoz9IH3FK7spCc%2FPJX2wgVbMrV1jl2iZcdyuBN%2F71pgi17leiNE3UX%2B9JnFdochdWS5sooL6RhcvT6AmLOc5HBr3BaoJeZKoOsqhQIHgVvOIO61JOhNqvSQr%2BxzzD1JweMDD0V0bXd7arlciAmrmVSoBr4T3TtCUqvel0SGj0%2FB27swWBeRrCGtsVG8stKH9ivnq8HIhDiZVa85UlycwF0vRcijwDpItJpuALIsymO%2BbTrPdNqNG%2Fk3E9pzSYZuwuYeCkK46DQNRrHqbh267DhVEOcnofdBrAE53%2BWlXCg5MNOIocEGOqUBIKBUEX97N62jZJlYE3grAiFONRWOfPFwOl4BY%2FiHulKebL6XB8BVvMPtQMTxQf5i%2BXbI39e3RcMJjknGIjzqy6xbqGMnB76SOS47j3olY4Va%2BZzYdL8o1C1RTKxotG0NHAaGHUP9DtH32ptktEUeDVKHhUYRpcRVU6jFEuQ50wQJ9RnqixzvEV%2FYGzn%2Fj8B9G17mT2OLWLGePuRCdGF5FtFe1qWF&X-Amz-Signature=669b6cfec01b4738e4849389a1fb06334ea07a2ae01dc5b84961025884343a70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
