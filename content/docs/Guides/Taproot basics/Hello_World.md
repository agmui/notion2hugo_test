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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4TP2KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHGlnyj1ZDrR3WiIGT8amhCK%2FEUsMF%2FRoWFXK9dU4t9UAiBYDaS8i%2F7zJoM3f%2Bv%2FzCagAbIf1sN1e2jIda3wl%2BuTHir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2BoAzf4%2FqALk%2Fr8SZKtwDzdtxSM%2FRGLHkzV5vjWV50fTgcc56Uq0UcSLHVjPG0JQdgApxoTLkQIRS06C%2F5%2FKyf3i%2BnCpTjLTn9EDA3t4sQTQlnHGzTCkefwvRw8ODzaUjCq%2BXTSYAFioP3h1ZdamUa7t4wzioIIqUWrX35vajzR%2FxEgI4XjuJ4A7PIB%2BTPIQL2VuHzIjl5kIEImvPpS8bHIadzk4Ly7b6A0CurHSzbpxf9juuemGNgzHpHx7yFmoZW9Y7szUqx7MpdREXgCBDmS2KupqA7hS%2FzvCmnQV49HH32B%2FFzqCCq7K0iUgWlDR73ZhMPpX6GDZ9njZPEQkmbGByZigDTfzL2LXxQnn3etIntN7PL1o3EFSAiOPbzD2RdcAMJHk09JiD%2F6K9P0TviqjOU9mSfssFEkfi11mK0FUU3HBYa18x9TwAU1cIvrX2VqGkgsU25M8h%2F0jCnSQCJbBFYpKo2gDsM0a%2B3KYMOH3BhM8mM4bNG0wSfK1rayvWHY%2B32OlyRWgnPon9%2BxBOa0yhgBUUoJc3h3ZnVNRD83bv1r5Nq7Z4ohM9HpoLJRhKd%2BVq03e5nAew4umHqOuFuUPMgEJ9E5AEAbtuchnpeFK4Rgi%2FXtTm41DyQv%2BQ9WeIWNILDWYS9g7Pvwgw%2FNrGxAY6pgE%2BazJ8nfeCyhrqW0fTxkOZoetM9DODAWa%2BTZ%2FK9OXmxuJbYDBmP5XRW7zYxGJPUc3OfApWy656eT9WI2yP1zaK%2BZ91P%2BDdZ4rWnv2ERC4EEyRa0Egn96KrHFP9APxjNIgyshNlGxo6VRerqA6einalRQh7cmN8N0eicFx%2FM5r0eGJWpv0bLBwRajzTHUm7DqWu%2Fnu1jhROKMWbMeuhhnm68DwnIyWR&X-Amz-Signature=ad8ab2b0b0f76a6f41d5c816999703398af84deedaaefd36517c287f1a0463bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4TP2KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHGlnyj1ZDrR3WiIGT8amhCK%2FEUsMF%2FRoWFXK9dU4t9UAiBYDaS8i%2F7zJoM3f%2Bv%2FzCagAbIf1sN1e2jIda3wl%2BuTHir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2BoAzf4%2FqALk%2Fr8SZKtwDzdtxSM%2FRGLHkzV5vjWV50fTgcc56Uq0UcSLHVjPG0JQdgApxoTLkQIRS06C%2F5%2FKyf3i%2BnCpTjLTn9EDA3t4sQTQlnHGzTCkefwvRw8ODzaUjCq%2BXTSYAFioP3h1ZdamUa7t4wzioIIqUWrX35vajzR%2FxEgI4XjuJ4A7PIB%2BTPIQL2VuHzIjl5kIEImvPpS8bHIadzk4Ly7b6A0CurHSzbpxf9juuemGNgzHpHx7yFmoZW9Y7szUqx7MpdREXgCBDmS2KupqA7hS%2FzvCmnQV49HH32B%2FFzqCCq7K0iUgWlDR73ZhMPpX6GDZ9njZPEQkmbGByZigDTfzL2LXxQnn3etIntN7PL1o3EFSAiOPbzD2RdcAMJHk09JiD%2F6K9P0TviqjOU9mSfssFEkfi11mK0FUU3HBYa18x9TwAU1cIvrX2VqGkgsU25M8h%2F0jCnSQCJbBFYpKo2gDsM0a%2B3KYMOH3BhM8mM4bNG0wSfK1rayvWHY%2B32OlyRWgnPon9%2BxBOa0yhgBUUoJc3h3ZnVNRD83bv1r5Nq7Z4ohM9HpoLJRhKd%2BVq03e5nAew4umHqOuFuUPMgEJ9E5AEAbtuchnpeFK4Rgi%2FXtTm41DyQv%2BQ9WeIWNILDWYS9g7Pvwgw%2FNrGxAY6pgE%2BazJ8nfeCyhrqW0fTxkOZoetM9DODAWa%2BTZ%2FK9OXmxuJbYDBmP5XRW7zYxGJPUc3OfApWy656eT9WI2yP1zaK%2BZ91P%2BDdZ4rWnv2ERC4EEyRa0Egn96KrHFP9APxjNIgyshNlGxo6VRerqA6einalRQh7cmN8N0eicFx%2FM5r0eGJWpv0bLBwRajzTHUm7DqWu%2Fnu1jhROKMWbMeuhhnm68DwnIyWR&X-Amz-Signature=b258ab23d06399ebcb5c5bd8591b51852729577ae23ed39c2d87f386a2f7276e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
