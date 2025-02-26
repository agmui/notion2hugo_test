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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXT666M%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDokPZYC40DCypG%2BzNx7oGiNxG3Da02RuEkBt8zE4dXSAiEAoakqX3GF0n51PPov%2F2LP5m%2B6uEP75C90FufbgFM8bg4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHBiI7QQoUOcgZzwaCrcA2t8N%2FqNFPRDuAe6ZNb%2BH%2ByHDbz0xQbmKimPF8%2Br20LM0XPQ%2FZr7PEiRPqJw1jYDLdW4GCOYyDo6T0yC%2BrIOnBxDNk6r9CrOoK56vX%2B1%2Bitw7RMXfwp6ZZZe8v9i6nVgjC8Pb3KaMB708vtBd8ZLran1UbEe2PcEWOnRRPIZsgE3psCZBug%2BSDQxCvGaRSZvXBL6HYAc1zgbzzCoPoZXdpq0pll9MdfChbRft8YPMMrDJj1Zx1My%2B%2BvLImafgKACJKt5pZrROkkaX59RSZLgF4oTzAifAytmPl%2BJB%2BqptbEkeG3RW7H1dduvoq0TqDVoB%2FCz8VjyXmyHGTkAR0XFJ9xPkess3IpqQN4EK9tkQFrLMsmTnOAaCNpapLTYytedTrUJ%2FDqn%2FcPz242m3B9mFQjkWkJ5XAA3q4dstBNKIjHyYfyyFED9g5tkJW1ifZNrRI%2F%2FoDj0rw2OR5z0tAxIjTJAFOX8He6KFaeXuNnrNgZKUvInEUvETsfVP2d5noEurtreEGZu%2B9P3SEyvmKijCGhgAOxfG9VuSGl5lyt1DWJWJKArLUaCCWGAIDHLdKLYkmPBCqGDf4e%2BNPKP8z1hnqrmwZ1oyzKQYs39pQhfl2YhBf%2FHS1JUZone2OerMOm8%2Bb0GOqUBejIafIv2hqJP5Boo4tDY9UjJYg%2FEpLs31Se3WhoapaOGXWeGtbNHcGtmtQyOa%2Fhz%2FtnN%2BDGheWCFHoxwTWj2K%2BCLpSs9wg1qJLXa2EuOmrdcgwXHqXMAg6HIAX0EI9y4AfRwZFw5yjmz77RRtxVCeSAMK4gyAVzu%2B7kNmtrC8bAPPR8s%2BZQ7hMIoC6VJGmQFjj4I5lolYjgzVMqCLb1YwN1c9Izx&X-Amz-Signature=6bb33e6cc833b5d758084144b57ed3fd4bf1eb8ba38a7486511635e8b6fb3dce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXT666M%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDokPZYC40DCypG%2BzNx7oGiNxG3Da02RuEkBt8zE4dXSAiEAoakqX3GF0n51PPov%2F2LP5m%2B6uEP75C90FufbgFM8bg4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHBiI7QQoUOcgZzwaCrcA2t8N%2FqNFPRDuAe6ZNb%2BH%2ByHDbz0xQbmKimPF8%2Br20LM0XPQ%2FZr7PEiRPqJw1jYDLdW4GCOYyDo6T0yC%2BrIOnBxDNk6r9CrOoK56vX%2B1%2Bitw7RMXfwp6ZZZe8v9i6nVgjC8Pb3KaMB708vtBd8ZLran1UbEe2PcEWOnRRPIZsgE3psCZBug%2BSDQxCvGaRSZvXBL6HYAc1zgbzzCoPoZXdpq0pll9MdfChbRft8YPMMrDJj1Zx1My%2B%2BvLImafgKACJKt5pZrROkkaX59RSZLgF4oTzAifAytmPl%2BJB%2BqptbEkeG3RW7H1dduvoq0TqDVoB%2FCz8VjyXmyHGTkAR0XFJ9xPkess3IpqQN4EK9tkQFrLMsmTnOAaCNpapLTYytedTrUJ%2FDqn%2FcPz242m3B9mFQjkWkJ5XAA3q4dstBNKIjHyYfyyFED9g5tkJW1ifZNrRI%2F%2FoDj0rw2OR5z0tAxIjTJAFOX8He6KFaeXuNnrNgZKUvInEUvETsfVP2d5noEurtreEGZu%2B9P3SEyvmKijCGhgAOxfG9VuSGl5lyt1DWJWJKArLUaCCWGAIDHLdKLYkmPBCqGDf4e%2BNPKP8z1hnqrmwZ1oyzKQYs39pQhfl2YhBf%2FHS1JUZone2OerMOm8%2Bb0GOqUBejIafIv2hqJP5Boo4tDY9UjJYg%2FEpLs31Se3WhoapaOGXWeGtbNHcGtmtQyOa%2Fhz%2FtnN%2BDGheWCFHoxwTWj2K%2BCLpSs9wg1qJLXa2EuOmrdcgwXHqXMAg6HIAX0EI9y4AfRwZFw5yjmz77RRtxVCeSAMK4gyAVzu%2B7kNmtrC8bAPPR8s%2BZQ7hMIoC6VJGmQFjj4I5lolYjgzVMqCLb1YwN1c9Izx&X-Amz-Signature=213091016d313c85e5a5bde5a9fe93c9a5a950db66bd01683ad50287184692eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
