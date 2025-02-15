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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6FVSMJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPChx%2BXEL0o6DW%2FLhq6w2NhEjCCdZtQYdYl0fG2rwhwIhAMkuR392x7UF05Wt7ybnjIgqL8%2FkbSQiKboONU5A%2B2rKKv8DCEEQABoMNjM3NDIzMTgzODA1Igywg1VslYi3%2B6yXM%2FQq3APL0umsZI9DtwXGTMAXBK8vIhY5E6lw2AKWtT3g0z6nfYlPOfdYa6xy7d973AnJC24GnihL6NsqC5sRYcHWk9ehvN8TtfqAbdj6T2uWhj2c%2F9LXenTEXfeA8VnQaoHgQwi4nyu93M%2B0qk%2FwRKMcOFUpkHB7a7PgqoVQlnVqZDOqPzr1g4InPvH2tE7SJs6NuSm0okkzE7gGhhkusPc42PnMVIXtA9wx69xNoYIZUJms9dy%2FTx6ObTntEfK4XJsW2zW3ixP8Hw6vLj%2FPdBVBXZ6X6Ki1dKozUJ9XP5%2BC%2FVFQHeufoU6zvV20RCcV%2Bk9De9Iesy6a%2B0q5RoKLbyZjOxfjM2zFZGeI%2Fc0rtZuiM%2FQicsfSmbbaKmNThERwk6cWRdHJn8yP2Vim30H37ByW2nUsdSPwDwKimyDgKuhe0t6KZtfLwedB9tr7v7glyCChqZRFvuiPnpaRdyAj2ts8TBTDwEJhadvDhKTKSUPmnHx9h4g64MGGw0WO0R2kEVahczYnorigyrhtTvnKzKDYs2XC69DYrjgd%2FNMKeCnq4Z849AsXWfQI%2BRd99475fw%2F%2BQUNDvK9CFayCggMMbClQm0NMKbafAmPVAMOA5BE9ssorhve5FBW72mAL2U4ddjD8hMG9BjqkAdFfx6bgXHBGUw9RJi0tlPnDWxWQpupoXP%2BQLnIyKC8asuHVIs0iOEOLKmtX3FqOOMpJHnbIn%2BL7i4d5cTxzVYRVlEseq6EsCeIlakM2XTBGAsKLmskWtK7B7HzQlbfHYUtO37dqTTlBwlSVHaaGIGOC01i5vbFwZlXpNuy%2FYN%2FycfpSUw9K7liK2c1XpKBd6Hfv8z6U8cGXY7M%2FiBAB8ZfrY7go&X-Amz-Signature=80dcb7f8deaf94ca845b64ecbd4daaa9ef71ac0c4997680a9789d3b3aeff7ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6FVSMJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPChx%2BXEL0o6DW%2FLhq6w2NhEjCCdZtQYdYl0fG2rwhwIhAMkuR392x7UF05Wt7ybnjIgqL8%2FkbSQiKboONU5A%2B2rKKv8DCEEQABoMNjM3NDIzMTgzODA1Igywg1VslYi3%2B6yXM%2FQq3APL0umsZI9DtwXGTMAXBK8vIhY5E6lw2AKWtT3g0z6nfYlPOfdYa6xy7d973AnJC24GnihL6NsqC5sRYcHWk9ehvN8TtfqAbdj6T2uWhj2c%2F9LXenTEXfeA8VnQaoHgQwi4nyu93M%2B0qk%2FwRKMcOFUpkHB7a7PgqoVQlnVqZDOqPzr1g4InPvH2tE7SJs6NuSm0okkzE7gGhhkusPc42PnMVIXtA9wx69xNoYIZUJms9dy%2FTx6ObTntEfK4XJsW2zW3ixP8Hw6vLj%2FPdBVBXZ6X6Ki1dKozUJ9XP5%2BC%2FVFQHeufoU6zvV20RCcV%2Bk9De9Iesy6a%2B0q5RoKLbyZjOxfjM2zFZGeI%2Fc0rtZuiM%2FQicsfSmbbaKmNThERwk6cWRdHJn8yP2Vim30H37ByW2nUsdSPwDwKimyDgKuhe0t6KZtfLwedB9tr7v7glyCChqZRFvuiPnpaRdyAj2ts8TBTDwEJhadvDhKTKSUPmnHx9h4g64MGGw0WO0R2kEVahczYnorigyrhtTvnKzKDYs2XC69DYrjgd%2FNMKeCnq4Z849AsXWfQI%2BRd99475fw%2F%2BQUNDvK9CFayCggMMbClQm0NMKbafAmPVAMOA5BE9ssorhve5FBW72mAL2U4ddjD8hMG9BjqkAdFfx6bgXHBGUw9RJi0tlPnDWxWQpupoXP%2BQLnIyKC8asuHVIs0iOEOLKmtX3FqOOMpJHnbIn%2BL7i4d5cTxzVYRVlEseq6EsCeIlakM2XTBGAsKLmskWtK7B7HzQlbfHYUtO37dqTTlBwlSVHaaGIGOC01i5vbFwZlXpNuy%2FYN%2FycfpSUw9K7liK2c1XpKBd6Hfv8z6U8cGXY7M%2FiBAB8ZfrY7go&X-Amz-Signature=61596bf7325abb0d4fca4b7f6ab27f109fd517cabb24687e70132f1ace2872d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
