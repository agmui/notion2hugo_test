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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDTWX4L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMPj6rDgL50y6mYaozKG80FTtSi2mWxj7ZbZXR7qg8TgIgLc8UPjBkc3538Xz%2BLp%2Fv3EgO64efb%2FCyXkMPxAH6FzEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxMkt2RaCTrFSDLUyrcA7Mut4shvI1hi2GxqrENZZCdol1lKtHTTEOV1B2K9zWMaNkoMdyRp3N0qYTQD6v%2FSM%2B8DJlzrh0k%2For2pOMIsaVKklYqhfK5MojZ0nGrUATBGLSx7DrE%2Fx3M%2FtRJ%2FnOWanlqyRiys6dkNZ6WVqdSIXh4v0a73xFfAFoszsNpMC1oOMGmlNBPVQVCcNjcMPkwiXHGLXJjJsTx5jojLkNFBq6V0q3TyYnQPRPUC6P%2BnqQvKWYXNs8r2%2FfANO2l%2FoEL5JTcyw8z55PJ%2BXVHf5E3e4raO3v34a%2BM%2BrGy5cAO1SkzIWGX%2FiouUdKl9I2SNPSuEsJeOpqhbXG%2Bmp7xiFdeAqWPhFg3851%2F%2BWelB3zkHJ1LR%2BJaqnwA9BkKqEei3w0yl4UVsjuEBi%2BouHux8avYrOBHqzcLcelNVEpTJoNSJHHRYWZksssK9eNClcKsUN%2Bg33LGg3goE9HjqpxWCYWZxychS33KCPiAoyT7aiae2OhcW4cNmoVfHGi7%2FiQfhNnn7qlXEdvTEutavte0twUURVpcR3UruLVBHDFQ1swsEGCg6HWtezxZ2%2BEAWe485ARGCNVaAt7qUtT14QWB%2F95TF6gwtff8Tu2SBuH6o1d8Da2dyPSHEW7YHgXAbOiCMImimMIGOqUBnkDUrGQeahJm6zDLD3REVQQoRGYDBywKEdvLxSKre%2BXFe%2FDsYdBnJoBRFFN7jrcr8o9QDz2OXv7TjYx9f3OSBeEt%2Bn8%2FujfTJzlOU5Ep0UeHVM9V7ntExxG92KnerPrQ%2BfQDSScRgL1H9yTQPenNY8pSC8%2Bb3SMUJPQQhhnVgs4MjH7SmafWW4Q%2BMZT7G4UtbiQPQacQc2Xq%2FHQnG8BHlEc7Uuar&X-Amz-Signature=e8f2d64d50fe122ca7190a6f6b8b4f1e3dd9c12b35aa55db758954d08dd85f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDTWX4L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMPj6rDgL50y6mYaozKG80FTtSi2mWxj7ZbZXR7qg8TgIgLc8UPjBkc3538Xz%2BLp%2Fv3EgO64efb%2FCyXkMPxAH6FzEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxMkt2RaCTrFSDLUyrcA7Mut4shvI1hi2GxqrENZZCdol1lKtHTTEOV1B2K9zWMaNkoMdyRp3N0qYTQD6v%2FSM%2B8DJlzrh0k%2For2pOMIsaVKklYqhfK5MojZ0nGrUATBGLSx7DrE%2Fx3M%2FtRJ%2FnOWanlqyRiys6dkNZ6WVqdSIXh4v0a73xFfAFoszsNpMC1oOMGmlNBPVQVCcNjcMPkwiXHGLXJjJsTx5jojLkNFBq6V0q3TyYnQPRPUC6P%2BnqQvKWYXNs8r2%2FfANO2l%2FoEL5JTcyw8z55PJ%2BXVHf5E3e4raO3v34a%2BM%2BrGy5cAO1SkzIWGX%2FiouUdKl9I2SNPSuEsJeOpqhbXG%2Bmp7xiFdeAqWPhFg3851%2F%2BWelB3zkHJ1LR%2BJaqnwA9BkKqEei3w0yl4UVsjuEBi%2BouHux8avYrOBHqzcLcelNVEpTJoNSJHHRYWZksssK9eNClcKsUN%2Bg33LGg3goE9HjqpxWCYWZxychS33KCPiAoyT7aiae2OhcW4cNmoVfHGi7%2FiQfhNnn7qlXEdvTEutavte0twUURVpcR3UruLVBHDFQ1swsEGCg6HWtezxZ2%2BEAWe485ARGCNVaAt7qUtT14QWB%2F95TF6gwtff8Tu2SBuH6o1d8Da2dyPSHEW7YHgXAbOiCMImimMIGOqUBnkDUrGQeahJm6zDLD3REVQQoRGYDBywKEdvLxSKre%2BXFe%2FDsYdBnJoBRFFN7jrcr8o9QDz2OXv7TjYx9f3OSBeEt%2Bn8%2FujfTJzlOU5Ep0UeHVM9V7ntExxG92KnerPrQ%2BfQDSScRgL1H9yTQPenNY8pSC8%2Bb3SMUJPQQhhnVgs4MjH7SmafWW4Q%2BMZT7G4UtbiQPQacQc2Xq%2FHQnG8BHlEc7Uuar&X-Amz-Signature=d08fa4bf74a7547de51aea54d6af842ce14ddb8166c60733bca0ae6f26cce9a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
