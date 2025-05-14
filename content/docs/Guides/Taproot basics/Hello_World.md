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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSACVDJY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC6jZQeaM5RyEhUkVbtOSwKY3Yu7RI1nAYtUjpJS0PlbgIhAI4S9Ny7l42Z5iXNvjb3qwOCSGmFbVrBQylJs8mVY%2BWJKv8DCBoQABoMNjM3NDIzMTgzODA1Igw0ll9rIixTKKWBBMIq3AOa6nDwVH71bbqYs4Bspwf0fQyQt2b8PJ%2FmymZVadr60UdTd%2FrHM7vp9AyloS%2B16HCLRlvs%2BYjpfYdw2gKx5y8BD4drYdDQ2WrZKP%2BlH4NhtDw9S9l%2BAYvTUDyPRQYBczDMbuBnkUAFMPM4hqovBjaowJh6E0R7e58odqMzOIXhP3uO8PKAhRTgTrgaIhd3OSHvXiurcWBHJFyVNGr982CfrC2XiQTbtna%2FZYdbn2MJzc0G4Zo5Nx2cfHSVWsTtucT1zcHVWKMgrSVPruaMoz6r%2B0FwPc%2BXwnDyyAYnJzdXd6rMxO1X3gZEbV8vGl8NaaSBd2ZiPg2%2FYBzTijIcaZvB%2BLHGrlRQKpS79cmyz%2BDr4Dp33OnxoYCftrhx4ZOOiKBc2B0Lc0oLScuqQzbSl4j2%2Ff2HGcrsTCrlBNk3TrHnZdQq1k9AiLkH2tMOwCkIcqTmr21FLA91aHmRollWdILdpxPYriEfmnHzXCP1boiYdiRwCEUjapaQb%2BunwVOJhAd8yMFMSQTwG%2BXsQ0U4MXAvanUrDJQeYJCesdup5XfckjRW%2BlqX1UBIOLQx7W1jz19smxz8NBR2Mq8LFpZ%2F40Uqff6t0h5dcJJTQJhMXKH%2FE1cA4uuYF7bswdvarTCvo5PBBjqkAYGcwRwupakVug8yFXBmtXFZniC5hOTWvQGc2swk0Aeo7Q0sx%2FvefK2Tzg1BH%2BL7vd9bdLWJzElI39qSjNXGDji%2FRqHcZgbhO8E5k1C6aEEEbElG%2BIVv0jNTVgJ8j8zR%2FyzKUyAp2e1jHhNeWVDCZyolg1mKvqthKcypHhfVSC7bHVGkmUk8uye%2BIW6LZF69Ssu7INhr3lMlHUrWc%2B12nAI3u4qU&X-Amz-Signature=8701bb95863c21ff150c9bcc7a027fa36c73a1421a83fb3e6c7b25eeee21ce34&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSACVDJY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC6jZQeaM5RyEhUkVbtOSwKY3Yu7RI1nAYtUjpJS0PlbgIhAI4S9Ny7l42Z5iXNvjb3qwOCSGmFbVrBQylJs8mVY%2BWJKv8DCBoQABoMNjM3NDIzMTgzODA1Igw0ll9rIixTKKWBBMIq3AOa6nDwVH71bbqYs4Bspwf0fQyQt2b8PJ%2FmymZVadr60UdTd%2FrHM7vp9AyloS%2B16HCLRlvs%2BYjpfYdw2gKx5y8BD4drYdDQ2WrZKP%2BlH4NhtDw9S9l%2BAYvTUDyPRQYBczDMbuBnkUAFMPM4hqovBjaowJh6E0R7e58odqMzOIXhP3uO8PKAhRTgTrgaIhd3OSHvXiurcWBHJFyVNGr982CfrC2XiQTbtna%2FZYdbn2MJzc0G4Zo5Nx2cfHSVWsTtucT1zcHVWKMgrSVPruaMoz6r%2B0FwPc%2BXwnDyyAYnJzdXd6rMxO1X3gZEbV8vGl8NaaSBd2ZiPg2%2FYBzTijIcaZvB%2BLHGrlRQKpS79cmyz%2BDr4Dp33OnxoYCftrhx4ZOOiKBc2B0Lc0oLScuqQzbSl4j2%2Ff2HGcrsTCrlBNk3TrHnZdQq1k9AiLkH2tMOwCkIcqTmr21FLA91aHmRollWdILdpxPYriEfmnHzXCP1boiYdiRwCEUjapaQb%2BunwVOJhAd8yMFMSQTwG%2BXsQ0U4MXAvanUrDJQeYJCesdup5XfckjRW%2BlqX1UBIOLQx7W1jz19smxz8NBR2Mq8LFpZ%2F40Uqff6t0h5dcJJTQJhMXKH%2FE1cA4uuYF7bswdvarTCvo5PBBjqkAYGcwRwupakVug8yFXBmtXFZniC5hOTWvQGc2swk0Aeo7Q0sx%2FvefK2Tzg1BH%2BL7vd9bdLWJzElI39qSjNXGDji%2FRqHcZgbhO8E5k1C6aEEEbElG%2BIVv0jNTVgJ8j8zR%2FyzKUyAp2e1jHhNeWVDCZyolg1mKvqthKcypHhfVSC7bHVGkmUk8uye%2BIW6LZF69Ssu7INhr3lMlHUrWc%2B12nAI3u4qU&X-Amz-Signature=9e638fbbf7b95cb3bdf63395477a792a655826072224a2aea5c58c81e16672a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
