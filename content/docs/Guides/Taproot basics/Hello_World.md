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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PDQLES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoDaHTrD20vvXxQfhPPUHEixBS4E9TpRJ7CYtKh%2BSmeAiAgrQRO4epE%2BYavoj%2BblrOGOnRhGbvEgUbDrpIG1MsZ7Cr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMjDGsc5%2BjD8z825khKtwD9xs17pxNmsTkgETY8kXahpwdLMBXmehriUGawxmRUssgrAzU5CJPtXCm7UZq6sT%2BA6L1MXKJuSNGtrF8WWjVLn2xEcW0zXs7DrKK8Wfit3A5TgLe3c60GOylkiRoGtAu%2B8V4WlKHy3Hw1pClzJl2G%2FYUAe32r0td5j3aWRifBS3V77LHiM8Uu5wcmjoDGnYcwGtA1njuYdPNp2TLMHyCB1z1GqhBJ%2BL2bArwGReNmxhG%2FxzUXnd0wFzrIDml4Kk9mgCts0rsTl76SlaKNHJkIMvetLFUKrR4jylizUljXKtxizZgZUyexe%2B%2B5s98e48Q5%2BHdejSay02fPjV%2BrfWpMMgs0fTHb%2FB%2FlIQUu5P6AH%2BXTwBQ9iUtpcFwSRRuEkf1Wc2lSSzyzdrKc8n65bwZrJxJWytakY4NRJl9AJzFIXqApJVd35bzA3c9y4WG83s%2F5it3CX1U0f0WN1uP9TPOBFA1C2EiEhelq49KDpXahNxZ7xpdng781X458CzULWIy%2F%2FRGO4j7iQb%2FnMIrazKORf61J9UvQI71Moy98Z%2BPbcIb5b12MFe2xfcPgjA5hFEt1ylcrw8rFXIQROf8Si%2FL%2F8CocAC8jPKs4%2B8fG6FeL%2B%2Bl2AixrBVvIPH9fF8w37bkvgY6pgH7egGqkNcIueZysHu8WbaD7ODMQcmHl9S3Y5twNrLfIMrHcHchWeIUf%2FAfiUvxVEhdlwos0u0Kt6GKlOolhmhOz6AeSYJa6JTGhdw8qlDvxkS2BZsYoz2xYsok0SGDPlFpZnp1r1s6FnXYcJGdS6asPHO2t9NSi8DUvpDbL%2BE7oSAq70hgUkQoZOVEC2wyWYkBygFcM3bLEsBSLUTf2tMwfJ2vvldE&X-Amz-Signature=4dbe033cd875cf9f227d317415c862f2156207a3bda512ac0d647298d1a92cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PDQLES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoDaHTrD20vvXxQfhPPUHEixBS4E9TpRJ7CYtKh%2BSmeAiAgrQRO4epE%2BYavoj%2BblrOGOnRhGbvEgUbDrpIG1MsZ7Cr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMjDGsc5%2BjD8z825khKtwD9xs17pxNmsTkgETY8kXahpwdLMBXmehriUGawxmRUssgrAzU5CJPtXCm7UZq6sT%2BA6L1MXKJuSNGtrF8WWjVLn2xEcW0zXs7DrKK8Wfit3A5TgLe3c60GOylkiRoGtAu%2B8V4WlKHy3Hw1pClzJl2G%2FYUAe32r0td5j3aWRifBS3V77LHiM8Uu5wcmjoDGnYcwGtA1njuYdPNp2TLMHyCB1z1GqhBJ%2BL2bArwGReNmxhG%2FxzUXnd0wFzrIDml4Kk9mgCts0rsTl76SlaKNHJkIMvetLFUKrR4jylizUljXKtxizZgZUyexe%2B%2B5s98e48Q5%2BHdejSay02fPjV%2BrfWpMMgs0fTHb%2FB%2FlIQUu5P6AH%2BXTwBQ9iUtpcFwSRRuEkf1Wc2lSSzyzdrKc8n65bwZrJxJWytakY4NRJl9AJzFIXqApJVd35bzA3c9y4WG83s%2F5it3CX1U0f0WN1uP9TPOBFA1C2EiEhelq49KDpXahNxZ7xpdng781X458CzULWIy%2F%2FRGO4j7iQb%2FnMIrazKORf61J9UvQI71Moy98Z%2BPbcIb5b12MFe2xfcPgjA5hFEt1ylcrw8rFXIQROf8Si%2FL%2F8CocAC8jPKs4%2B8fG6FeL%2B%2Bl2AixrBVvIPH9fF8w37bkvgY6pgH7egGqkNcIueZysHu8WbaD7ODMQcmHl9S3Y5twNrLfIMrHcHchWeIUf%2FAfiUvxVEhdlwos0u0Kt6GKlOolhmhOz6AeSYJa6JTGhdw8qlDvxkS2BZsYoz2xYsok0SGDPlFpZnp1r1s6FnXYcJGdS6asPHO2t9NSi8DUvpDbL%2BE7oSAq70hgUkQoZOVEC2wyWYkBygFcM3bLEsBSLUTf2tMwfJ2vvldE&X-Amz-Signature=8b80af0a24ba62231a836eff3b8f6dd09b8aa5250186e2ca306103f5b3d3d0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
