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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLMEVEY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBt1l9%2FiMO29PfmcmHgWJIBrZjE%2FkFZZenusBGfir6NUAiA%2FYnt1YgaeI94%2Fp4cMOV3Dzt%2FzP0QHMbYxxif%2BZe2iYCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMrZj9qyld9%2FuJ5QGKtwDxNATaaxLaPSlaKe4RF8kj%2BDbAIgxDanzEx0Nu00xhSKwxJzKDlk%2BEkVJtaovfCGbEIboW4CLtJMT6Q3joWaOihy%2F9zt8F4NDQCFHgzMP8Kf26cb%2BP3tOEqXrv4F2PZVDiOBivOBJ%2BK4jWexfgZXUjRAbE9ztf86zbyVJ18zq%2FajDaoAhnnBfp04Vb0MKu8wMHrddRTRsfn8iVhXxxtJw93XshYdYVStYv%2FLC2kbICWRiQcACu%2FB4TJnZc%2BsHRwdbOfMYVxBmBCughxmVl9NzColpm7FbZDiGZhgVDPOqMX7rEdpA2PVFNhKq6vf6DSBCAGyYfglWuMNXjapGbt7xvIO1bbVHRV3cN2D4iVAQ7u5%2B39XZu%2Bg9%2BPoN1kZSfAD6IvdLlPK9ziNbX4%2FyGSoRHeye0XfIeY0otOa2g%2FnoHPLW3VppbvudxcoVat2zdo8olSP8TIINhlqpOoNn868CWK%2B2XYKMlW4uKiOByyyhEopGM3qTxyngLc0XdUs1Kel2XHw2jXaNaq6nCqFxR0xvH%2BGukQVaOZU1TUPUy17pwcCk53F3ifMANiL0XDkeGzBIX3JV5%2FGhY7rxpyLidWkIX2WjOvjGqRFKUxKgC9O6vRxSjNRftfAETyviURIwgqjyvgY6pgGMSP7R9Suy4QTp3ymOyjj8WyEvSyToXlbQe7LKlPtZBlA6AxHptmFIz80JMqzqYhWR0aA8Dh9RFilPn%2B6GlXWkdj1rz1TCfDAFfjB27Ax2msf2CeJX%2FXS%2BaAfNO5E6rpMM3sUjJNcEavaMhi1VPlBicYxT6tUDS%2BnCazxpFolNAgWu03jHn2S8w7H4HIZuqK8lX%2BqADYvfZZoeG4lBJpvhCsNLHK8d&X-Amz-Signature=6239d52ef0d1f0289e0b14d0c0af915052a5a0cbd66391b6c66c71235e123017&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLMEVEY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBt1l9%2FiMO29PfmcmHgWJIBrZjE%2FkFZZenusBGfir6NUAiA%2FYnt1YgaeI94%2Fp4cMOV3Dzt%2FzP0QHMbYxxif%2BZe2iYCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMrZj9qyld9%2FuJ5QGKtwDxNATaaxLaPSlaKe4RF8kj%2BDbAIgxDanzEx0Nu00xhSKwxJzKDlk%2BEkVJtaovfCGbEIboW4CLtJMT6Q3joWaOihy%2F9zt8F4NDQCFHgzMP8Kf26cb%2BP3tOEqXrv4F2PZVDiOBivOBJ%2BK4jWexfgZXUjRAbE9ztf86zbyVJ18zq%2FajDaoAhnnBfp04Vb0MKu8wMHrddRTRsfn8iVhXxxtJw93XshYdYVStYv%2FLC2kbICWRiQcACu%2FB4TJnZc%2BsHRwdbOfMYVxBmBCughxmVl9NzColpm7FbZDiGZhgVDPOqMX7rEdpA2PVFNhKq6vf6DSBCAGyYfglWuMNXjapGbt7xvIO1bbVHRV3cN2D4iVAQ7u5%2B39XZu%2Bg9%2BPoN1kZSfAD6IvdLlPK9ziNbX4%2FyGSoRHeye0XfIeY0otOa2g%2FnoHPLW3VppbvudxcoVat2zdo8olSP8TIINhlqpOoNn868CWK%2B2XYKMlW4uKiOByyyhEopGM3qTxyngLc0XdUs1Kel2XHw2jXaNaq6nCqFxR0xvH%2BGukQVaOZU1TUPUy17pwcCk53F3ifMANiL0XDkeGzBIX3JV5%2FGhY7rxpyLidWkIX2WjOvjGqRFKUxKgC9O6vRxSjNRftfAETyviURIwgqjyvgY6pgGMSP7R9Suy4QTp3ymOyjj8WyEvSyToXlbQe7LKlPtZBlA6AxHptmFIz80JMqzqYhWR0aA8Dh9RFilPn%2B6GlXWkdj1rz1TCfDAFfjB27Ax2msf2CeJX%2FXS%2BaAfNO5E6rpMM3sUjJNcEavaMhi1VPlBicYxT6tUDS%2BnCazxpFolNAgWu03jHn2S8w7H4HIZuqK8lX%2BqADYvfZZoeG4lBJpvhCsNLHK8d&X-Amz-Signature=0dd6d03459eb0f5e1c6a273727de2d414a3201f82c90e998dc8c3a6e1be2d37f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
