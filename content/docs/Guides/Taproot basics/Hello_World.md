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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQCWGU7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHryukxQUjyA64sSrD34d%2Fq4SIpXJrg4RKSmpdh3LhQKAiEAnXmpiUYKrhX%2FIFVRPwa03jNeWCEbmBTorRQUnGu3fQkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm%2BN4MjsruoUirHbSrcA6RmectnZN5Dfze8B33ltEQIZXdnjGUIBuXbzf8K4gRt%2BJ6tBI1pL1EuVGy4z5lgAN%2FLAbPOc%2BHSdq1bxzt%2FjsQoiq4uUGZYiOdCnIkNlo24KF9E4H6yLapstvnBhVC%2BQDFFkEVFqw5oiG4IyVWJXLaPQtVckUNZvw7VKJ6xlYwHclHXu%2BEoxHmQE9rxFi2uLtu%2FA8XOQWKXqqhxKsooRXpDBbmchY6EySaKDE%2BogXOW2xH0MOp%2Fteo6kt12VYrEx%2F%2F41I%2FLl6UieoIG9dWSejv1VhBydDG0kzx1ubrEreTq5tzN%2F%2Bh79Xiw4fwKEOuRhXBQt6a9ZjKeiUZWwiez0%2BojK%2BEI%2Bk7w5qVt9SHB8wCECK5cNW5jnw%2BNQSe18q68TTlCopqkoVfqnahpaA9FwhHoaV7ksqsW11N1IOUBbEc5dkWU2u%2F6yL1YPmNfAReX1uYUbGWgocE7xSMEIf6f8mPBAtOtDOxfbGiBQzJhPban0g6gLpuTd%2BK4DGcqvgE%2F3W3dsfL7vFLsD3A9Sze1bS57jnRieEgA17xjbRdH7q40amzQk8MOxsyThBo36kxg64im1F2BOFYp0t%2Bl%2FNie8Zu%2BkjVWzYSxsx2uLiZJEQZYgG22og2DlxQMLL%2F0MIu0tsMGOqUB%2FDUlCNyZ3eZbRCMtIiC%2B4zqG0XIx3Yf1E%2FOTur1vymoVhZ%2FngaDuUxSIFrVQfUjyTXF0ilmOndOHF4q%2BE4%2B3wlLKX56UVLlCpxyP%2Bk46%2F5zcBlNFAA7NaZEwI81NE3i2kpMUQPl249dons4PH%2FIls0n0MFDGP3Ir0euTll4gsv3xMe92qyWvH%2FPbqrz%2FGpzd5qxF%2FCRT6aSibXQtrF1pfsxuhrZs&X-Amz-Signature=fba2d2d68c89d792a607971998d30136c2e2085e2b5816b0dec1c11de95b7ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQCWGU7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHryukxQUjyA64sSrD34d%2Fq4SIpXJrg4RKSmpdh3LhQKAiEAnXmpiUYKrhX%2FIFVRPwa03jNeWCEbmBTorRQUnGu3fQkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm%2BN4MjsruoUirHbSrcA6RmectnZN5Dfze8B33ltEQIZXdnjGUIBuXbzf8K4gRt%2BJ6tBI1pL1EuVGy4z5lgAN%2FLAbPOc%2BHSdq1bxzt%2FjsQoiq4uUGZYiOdCnIkNlo24KF9E4H6yLapstvnBhVC%2BQDFFkEVFqw5oiG4IyVWJXLaPQtVckUNZvw7VKJ6xlYwHclHXu%2BEoxHmQE9rxFi2uLtu%2FA8XOQWKXqqhxKsooRXpDBbmchY6EySaKDE%2BogXOW2xH0MOp%2Fteo6kt12VYrEx%2F%2F41I%2FLl6UieoIG9dWSejv1VhBydDG0kzx1ubrEreTq5tzN%2F%2Bh79Xiw4fwKEOuRhXBQt6a9ZjKeiUZWwiez0%2BojK%2BEI%2Bk7w5qVt9SHB8wCECK5cNW5jnw%2BNQSe18q68TTlCopqkoVfqnahpaA9FwhHoaV7ksqsW11N1IOUBbEc5dkWU2u%2F6yL1YPmNfAReX1uYUbGWgocE7xSMEIf6f8mPBAtOtDOxfbGiBQzJhPban0g6gLpuTd%2BK4DGcqvgE%2F3W3dsfL7vFLsD3A9Sze1bS57jnRieEgA17xjbRdH7q40amzQk8MOxsyThBo36kxg64im1F2BOFYp0t%2Bl%2FNie8Zu%2BkjVWzYSxsx2uLiZJEQZYgG22og2DlxQMLL%2F0MIu0tsMGOqUB%2FDUlCNyZ3eZbRCMtIiC%2B4zqG0XIx3Yf1E%2FOTur1vymoVhZ%2FngaDuUxSIFrVQfUjyTXF0ilmOndOHF4q%2BE4%2B3wlLKX56UVLlCpxyP%2Bk46%2F5zcBlNFAA7NaZEwI81NE3i2kpMUQPl249dons4PH%2FIls0n0MFDGP3Ir0euTll4gsv3xMe92qyWvH%2FPbqrz%2FGpzd5qxF%2FCRT6aSibXQtrF1pfsxuhrZs&X-Amz-Signature=86d5f58f13368d7e7145ee4c54cd5d9cf2e3ad73c8b45cd1355fb54bcca10b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
