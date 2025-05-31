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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM7LK6RO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B5BZKJPX0zV75GA7KdjEyuF7i%2Fui5OQbU2LCk8UbFKAiEAxajBX0tdnMLYK%2FT9m26WwRklziC%2F3bRF%2Bz03N52N6OMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWOeFjO2c9v4D748SrcA50EG7TTc7KF2d2ms%2FaNmcMPj3CiirQ8i%2BeGVlPQLlSi8ShSf6N9rlxhHTUJeKqv6Rpo2N6H5yn7YNsLY0z8bF2BaCSn3knDelTr6m2GFdmWVjOM36z6O0WrQpSRIpmSDfFUrOQcx7uqWTEexs8aNrtfcRDSHYhKK9tVzIJzdhbF3dXWmn0IB55gmtnBt1ch41q%2Bovl6%2B3VHWN%2BYsVfyuGBWk6xx0Y3l2rtD22RM8hE66ITqkx%2BkglVnWR3vMMucq6KcClRl4VuTvPkkPt8X%2BbA4R70tmCxBwlJT14%2BiUct2GEsPJlsVPDMIOpwv%2FCqeyep%2B5%2Fp%2FrVjxYm7VME04LUf%2Fbc7zjN77%2B24syuqQVDqrdoFn6r6oq%2FYyTYOllb8cYRFHC6qZfn%2BeIZXpmL6pVB0QonmSqXNa7OPjGkVG1N0TNQfR21qj6fey1JEzMdbqPxYIBxwY%2Bcty2LkM%2BaYywJtKSoPjm7gTKo6ono6xw3BisOqjKlQLhV1BMvVlmF%2BtoP1ns8u3f5Yt%2BZC4xIYOjN%2FPKEyuZ9HJv0ls8E2DSTlZfjMyfcs%2Flc%2Fm79xzcmkdNVZENgAKVWcdQm1Q%2B4ENULO%2F63fsOzdT3UAghnYyCd78GPa%2F5gjcYPlL3gtlMPXc6sEGOqUBTRJ0W%2BDClhyarR%2BQjmsI0QlaqfYq9g%2Br6OGrVDNb0k8KPDaSQiR1VHTFeCg8t1DoF9sV6%2FkOLLH%2FBV%2BJ%2BGk7HtCkLFfYJ%2BWkPHf5fLesPTdN3rxCnus%2Ft0p84PCfVXnpEAln2f3EqdCL1LMUi4PD7cPw46oQnsrSram1PxxMLzAMjydu0cgPBI4AAT%2FpuTlLnqdKT%2FmcydRcrW5xf%2FG16hmprkGY&X-Amz-Signature=3f1f4e7c276e230ab982331776d49bbfa8d9797a7f7b44e15f3cd9eb8d063845&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM7LK6RO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B5BZKJPX0zV75GA7KdjEyuF7i%2Fui5OQbU2LCk8UbFKAiEAxajBX0tdnMLYK%2FT9m26WwRklziC%2F3bRF%2Bz03N52N6OMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWOeFjO2c9v4D748SrcA50EG7TTc7KF2d2ms%2FaNmcMPj3CiirQ8i%2BeGVlPQLlSi8ShSf6N9rlxhHTUJeKqv6Rpo2N6H5yn7YNsLY0z8bF2BaCSn3knDelTr6m2GFdmWVjOM36z6O0WrQpSRIpmSDfFUrOQcx7uqWTEexs8aNrtfcRDSHYhKK9tVzIJzdhbF3dXWmn0IB55gmtnBt1ch41q%2Bovl6%2B3VHWN%2BYsVfyuGBWk6xx0Y3l2rtD22RM8hE66ITqkx%2BkglVnWR3vMMucq6KcClRl4VuTvPkkPt8X%2BbA4R70tmCxBwlJT14%2BiUct2GEsPJlsVPDMIOpwv%2FCqeyep%2B5%2Fp%2FrVjxYm7VME04LUf%2Fbc7zjN77%2B24syuqQVDqrdoFn6r6oq%2FYyTYOllb8cYRFHC6qZfn%2BeIZXpmL6pVB0QonmSqXNa7OPjGkVG1N0TNQfR21qj6fey1JEzMdbqPxYIBxwY%2Bcty2LkM%2BaYywJtKSoPjm7gTKo6ono6xw3BisOqjKlQLhV1BMvVlmF%2BtoP1ns8u3f5Yt%2BZC4xIYOjN%2FPKEyuZ9HJv0ls8E2DSTlZfjMyfcs%2Flc%2Fm79xzcmkdNVZENgAKVWcdQm1Q%2B4ENULO%2F63fsOzdT3UAghnYyCd78GPa%2F5gjcYPlL3gtlMPXc6sEGOqUBTRJ0W%2BDClhyarR%2BQjmsI0QlaqfYq9g%2Br6OGrVDNb0k8KPDaSQiR1VHTFeCg8t1DoF9sV6%2FkOLLH%2FBV%2BJ%2BGk7HtCkLFfYJ%2BWkPHf5fLesPTdN3rxCnus%2Ft0p84PCfVXnpEAln2f3EqdCL1LMUi4PD7cPw46oQnsrSram1PxxMLzAMjydu0cgPBI4AAT%2FpuTlLnqdKT%2FmcydRcrW5xf%2FG16hmprkGY&X-Amz-Signature=05ba521b2e6f8617b789bd42481163f4cbb8da96ffe492bd03e40936b3c3d0c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
