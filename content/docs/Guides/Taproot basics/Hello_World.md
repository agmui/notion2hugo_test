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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DHBBBX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwEPGCbnCzEcfQlaU5cYYEXFLuhJvbV09yD1WOUXsYgIgDyIc16odYbA4vBxpa5kFfHtEtGcK1QzlKaF%2B%2BymBnYUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF46L3Kw1o7381mFZCrcA%2F4e5gzNgLO%2ByEdCnQQKc8TO1uWoiW8jhqtea3VEXYQYCtf8xGjdJATMZsQIkoIOdAz1tbUVzkKaQAIzompczR77qlNr9GR4WyUgeOaTrH2tU%2ByQHzOll3xALJn%2FzKGigTZ09QdPIyP9dFhlZ1do3QO3LQqoUFKP2qUzINAjXCfhnDQ8XNoRhTduuXrO5GmGg5%2BNAdZuznrOiwVK45XkmApMAVU5oZPQQ83SDpyaNsiQ4b0nkWgVa%2FQ5VCxIZvLgngHt2N6JOI%2BFQI4XJ1gcGuKNdWIFTtMfmuds6BSjPbi34XuzdA%2B%2Fn64hJFccICtdD8otGLgDvZD7jPr8QRWmfdMpMUTQwDmMW1IqoghFiU6UbFVNYncevE6bjwPYG6lPG%2Bqd7aWNNij%2FknE9CdtYyBejIwKZqWgG9n4CTTh%2BppRCxqZRQKAbgLDB9Un8Qi%2FVN7y7ocB410uQZr92bg9NFGkqMf5kGWdUePpZ5wkBAzj3nJHGtiXdDCma8X2ifjtJVEVqxSoXGcKJQVofTT9ZmqN2imHn4rhKvmRbVskOYhMfxMnlopWeEeFrXrS72uP5FnyiPQj8bKPYDzX4EAceOvSMEtdt72ZFXvCA8fpdu7U2HQTQ9GxpQHQ84Ds1MKmd%2FLwGOqUBftLC0tZh4Oi%2FbfqtN54ooQfxd7DZ3%2Fr2p6Q6wYpU3pfPe6htHyIKqDFWOvVESPf3UEpsHOM8YoGPWAapTwOK9bmt2aM9hl4ToHRmUp4dYnc9Z97M70Y3dLBRNMy9xL1%2BDYY9%2FniXZuIU%2FHUfbRG%2BFaMV3tlSO%2B0JrBJ1mNeNxaESvPP6n1E6PiaLP9FbTEW7Okc2h8MS2GEZovL4tgU24FpPj7bR&X-Amz-Signature=f4bc01bfa62880723bca1f3a3d8f8873cfb181c4c7f58d574c48e2b7428088a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DHBBBX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwEPGCbnCzEcfQlaU5cYYEXFLuhJvbV09yD1WOUXsYgIgDyIc16odYbA4vBxpa5kFfHtEtGcK1QzlKaF%2B%2BymBnYUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF46L3Kw1o7381mFZCrcA%2F4e5gzNgLO%2ByEdCnQQKc8TO1uWoiW8jhqtea3VEXYQYCtf8xGjdJATMZsQIkoIOdAz1tbUVzkKaQAIzompczR77qlNr9GR4WyUgeOaTrH2tU%2ByQHzOll3xALJn%2FzKGigTZ09QdPIyP9dFhlZ1do3QO3LQqoUFKP2qUzINAjXCfhnDQ8XNoRhTduuXrO5GmGg5%2BNAdZuznrOiwVK45XkmApMAVU5oZPQQ83SDpyaNsiQ4b0nkWgVa%2FQ5VCxIZvLgngHt2N6JOI%2BFQI4XJ1gcGuKNdWIFTtMfmuds6BSjPbi34XuzdA%2B%2Fn64hJFccICtdD8otGLgDvZD7jPr8QRWmfdMpMUTQwDmMW1IqoghFiU6UbFVNYncevE6bjwPYG6lPG%2Bqd7aWNNij%2FknE9CdtYyBejIwKZqWgG9n4CTTh%2BppRCxqZRQKAbgLDB9Un8Qi%2FVN7y7ocB410uQZr92bg9NFGkqMf5kGWdUePpZ5wkBAzj3nJHGtiXdDCma8X2ifjtJVEVqxSoXGcKJQVofTT9ZmqN2imHn4rhKvmRbVskOYhMfxMnlopWeEeFrXrS72uP5FnyiPQj8bKPYDzX4EAceOvSMEtdt72ZFXvCA8fpdu7U2HQTQ9GxpQHQ84Ds1MKmd%2FLwGOqUBftLC0tZh4Oi%2FbfqtN54ooQfxd7DZ3%2Fr2p6Q6wYpU3pfPe6htHyIKqDFWOvVESPf3UEpsHOM8YoGPWAapTwOK9bmt2aM9hl4ToHRmUp4dYnc9Z97M70Y3dLBRNMy9xL1%2BDYY9%2FniXZuIU%2FHUfbRG%2BFaMV3tlSO%2B0JrBJ1mNeNxaESvPP6n1E6PiaLP9FbTEW7Okc2h8MS2GEZovL4tgU24FpPj7bR&X-Amz-Signature=479f1a4986fb8f22b1c2e484114996650e9652077f80370ee75885d09223fc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
